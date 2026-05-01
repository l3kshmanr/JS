import { Controller } from "@hotwired/stimulus"
import ChartOptions from 'chart_options'

// With chartkick, you can't set a javascript callback to the underlying chart javascript library (we're using chartjs)
// So we need to use the js api to set it and redraw chart
export default class extends Controller {
  static get values() {
    return {
      chartId: String,
      applyGradientBackground: Boolean,
      applyYaxisMoneyAbbrev: Boolean,
      applyTooltipMoneyFormatter: Boolean,
    }
  }

  connect() {
    this.boundTryUpdate = () => this.tryUpdateChart()
    document.addEventListener('datasets-changed', this.boundTryUpdate)

    if (this.tryUpdateChart()) return;

    let retries = 5;
    this.interval = setInterval(() => {
      if (retries != 0) {
        retries--;

        if (this.tryUpdateChart()) clearInterval(this.interval);
      }
    }, 200)
  }

  disconnect() {
    if (this.interval) clearInterval(this.interval)
    if (this.boundTryUpdate) {
      document.removeEventListener('datasets-changed', this.boundTryUpdate)
    }
  }

  tryUpdateChart() {
    const chart = Chartkick.charts[this.chartIdValue];
    if (!chart || !chart.chart) return false;

    const chartInstance = chart.chart;
    if (this.applyGradientBackgroundValue) this.applyGradientBackground(chartInstance);
    if (this.applyYaxisMoneyAbbrevValue) this.applyYaxisMoneyAbbrev(chartInstance);
    if (this.applyTooltipMoneyFormatterValue) this.applyTooltipMoneyFormatter(chartInstance);
    chartInstance.update();

    return true;
  }

  //////////// Helpers to set chart js callbacks ////////////

  // Apply the gradient under the first visible line only (by dataset order).
  applyGradientBackground(chartInstance) {
    const datasets = chartInstance.data.datasets || []
    datasets.forEach(ds => { ds.fill = false })

    for (let i = 0; i < datasets.length; i++) {
      const ds = datasets[i]
      const meta = chartInstance.getDatasetMeta(i)
      const metaHidden = meta.hidden === null ? !!ds.hidden : meta.hidden
      if (metaHidden) continue

      ds.fill = true
      ds.backgroundColor = ChartOptions.graphHeaderChartBackground
      break
    }
  }

  // Converts Y axis money to abbreviated version
  applyYaxisMoneyAbbrev(chartInstance) {
    const y = chartInstance.options.scales?.y || (chartInstance.options.scales.y = {})
    const ticks = y.ticks || (y.ticks = {})

    const formatAbbrev = (v) => {
      const abs = Math.abs(v)
      if (abs >= 1_000_000_000) return (v / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B"
      if (abs >= 1_000_000)     return (v / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M"
      if (abs >= 1_000)         return (v / 1_000).toFixed(1).replace(/\.0$/, "") + "k"
      return String(v)
    }

    ticks.callback = (value) => {
      const s = formatAbbrev(value)
      return this.currencyValue ? `$${s}` : s
    }
  }

  applyTooltipMoneyFormatter(chartInstance) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })

    chartInstance.options.plugins ||= {}
    chartInstance.options.plugins.tooltip ||= {}
    chartInstance.options.plugins.tooltip.callbacks ||= {}

    chartInstance.options.plugins.tooltip.callbacks.label = (context) => {
      const y = context.parsed?.y ?? context.raw
      const label = context.dataset.label || ''
      const value = formatter.format(Number(y))
      return label ? `${label}: ${value}` : value
    }
  }
};
