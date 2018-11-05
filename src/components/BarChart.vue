<script>
import VueChartJs from "vue-chartjs";

export default {
  extends: VueChartJs.Bar,
  mixins: [VueChartJs.mixins.reactiveProp],
  data: () => {
    return {
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true,
          mode: "single",
          callbacks: {
            label: tooltipItems => tooltipItems.yLabel
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        height: 200
      }
    };
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData, this.options);
  }
};
</script>
