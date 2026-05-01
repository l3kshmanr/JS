export default class ChartOptions {
  // Chart.js callback function for gradiant background
  // https://www.youtube.com/watch?v=e-15uzfcd-I&ab_channel=ChartJS
  static graphHeaderChartBackground = (context) => {
    if (!context.chart.chartArea) {
      return;
    }
    const {ctx, data, chartArea: {top, bottom}} = context.chart;
    const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
    gradientBg.addColorStop(0, 'rgba(30,198,119,0.50)');
    gradientBg.addColorStop(1, 'rgba(30,198,119,0.0)');
    
    return gradientBg;
  }

  static depositsChartYAxisTicks = function(value) {
    return value >= 1e6
      ? (value / 1e6) + 'M'
      : value >= 1e3
      ? (value / 1e3) + 'k'
      : value
  }
};
