import ApexCharts from 'apexcharts'

/*======== MIXED CHART 01 ========*/
var mixedChart1 = document.querySelector("#mixed-chart-1");
if (mixedChart1 !== null) {
  var mixedOptions1 = {
    chart: {
      height: 370,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#33A895", "#E74A33", "#f2e052"],
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      markers: {
        width: 20,
        height: 5,
        radius: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        barHeight: "10%",
        distributed: false,
      },
    },
    dataLabels: {
      enabled: false,
    },

    stroke: {
      show: true,
      width: 2,
      curve: "smooth",
    },

    series: [
      {
        name: "Despesas",
        type: "column",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 55, 47, 67],
      },
      {
        name: "Receitas",
        type: "column",
        data: [76, 85, 101, 98, 87, 100, 91, 40, 94, 50, 47, 55],
      },
      {
        name: "Lucros",
        data: [50, 40, 64, 87, -15, 104, 63, 42, 32, 60, 78, 25],
        type: "line",
      },
    ],

    xaxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        width: 40,
      },
    },

    fill: {
      opacity: 1,
    },

    tooltip: {
      shared: true,
      intersect: false,
      followCursor: true,
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return seriesName;
          },
        },
      },
    },
  };

  var randerMixedChart1 = new ApexCharts(mixedChart1, mixedOptions1);
  randerMixedChart1.render();
}