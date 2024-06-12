import ApexCharts from '../apexcharts'

/*======== PIZZA CHART ========*/
var pizzaChart = document.getElementById("pizzachart");
if (pizzaChart !== null) {
  var pizzaChartOptions = {
    chart: {
      width: 470,
      type: "pie",
    },
    colors: ["#E84B33", "#33D6E8", "#fd5190", "#33A895"],
    labels: ["Eletricidade", "Internet", "Celular", "Água"],
    legend: {
      position: "top",
      horizontalAlign: "left",
      markers: {
        radius: 0,
      },
    },
    series: [65, 25, 10, 55],
  };

  var pizzaChartRander = new ApexCharts(
    pizzaChart,
    pizzaChartOptions
  );

  pizzaChartRander.render();
}