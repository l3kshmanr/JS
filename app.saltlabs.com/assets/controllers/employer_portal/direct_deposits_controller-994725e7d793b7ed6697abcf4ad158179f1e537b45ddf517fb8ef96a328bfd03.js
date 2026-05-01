import { Controller } from "@hotwired/stimulus"
import ChartOptions from 'chart_options'

export default class extends Controller {
  static get values() {
    return { chartId: String }
  }

  connect() {
    this.customizeYAxis()
    this.customizeTooltips()
  }

  // the chartkick ruby api doesn't support customizing the y axis ticks, so we need to do it here
  customizeYAxis() {
    const chart = Chartkick.charts[this.chartIdValue]
    const chartJS = chart.chart

    // Apply custom tick formatter for Y axis (300k instead of 300000)
    chartJS.options.scales.y.ticks.callback = ChartOptions.depositsChartYAxisTicks

    chartJS.update()
  }

  customizeTooltips() {
    const chart = Chartkick.charts[this.chartIdValue]
    const chartJS = chart.chart

    // Apply custom tooltip formatter
    chartJS.options.plugins.tooltip.callbacks.label = function(context) {
      return '$' + context.raw.toLocaleString('en-US', { maximumFractionDigits: 2 })
    }

    chartJS.update()
  }
};
