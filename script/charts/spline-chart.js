import ApexCharts from 'apexcharts'

/*======== CARD AREA CHART 01 ========*/
var cardArea1 = document.querySelector("#card-area-1");
if (cardArea1 !== null) {
  var splinaAreaOptions1 = {
    chart: {
      id: "card-area-1",
      group: "social",
      height: 135,
      width: "100%",
      background: "#e74a33",
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    stroke: {
      width: 2,
    },
    colors: ["rgba(255, 255, 255, .6)"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.3,
        stops: [0, 50, 100],
      },
    },

    tooltip: {
      theme: "dark",
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },

    series: [
      {
        data: [0, 15, 18, 20, 16, 17, 23, 17, 25],
      },
    ],
  };
  var randerSplinaArea1 = new ApexCharts(cardArea1, splinaAreaOptions1);
  randerSplinaArea1.render();
}

/*======== CARD AREA CHART 02 ========*/
var cardArea2 = document.querySelector("#card-area-2");
if (cardArea2 !== null) {
  var splinaAreaOptions2 = {
    chart: {
      id: "card-area-1",
      group: "social",
      height: 135,
      width: "100%",
      background: "#46c79e",
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    stroke: {
      width: 2,
    },
    colors: ["#ffffff"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      followCursor: false,
      theme: "dark",
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },

    series: [
      {
        data: [0, 4, 6, 14, 8, 10, 17, 20, 16],
      },
    ],
  };
  var randerSplinaArea2 = new ApexCharts(cardArea2, splinaAreaOptions2);
  randerSplinaArea2.render();
}

/*======== CARD AREA CHART 03 ========*/
var cardArea3 = document.querySelector("#card-area-3");
if (cardArea3 !== null) {
  var splinaAreaOptions3 = {
    chart: {
      id: "card-area-3",
      group: "social",
      height: 135,
      width: "100%",
      background: "#9e6de0",
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    stroke: {
      width: 2,
    },
    colors: ["#ffffff"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      followCursor: false,
      theme: "dark",
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },

    series: [
      {
        data: [0, 8, 20, 14, 17, 12, 14, 8, 5],
      },
    ],
  };
  var randerSplinaArea3 = new ApexCharts(cardArea3, splinaAreaOptions3);
  randerSplinaArea3.render();
}

/*======== CARD AREA CHART 04 ========*/
var cardArea4 = document.querySelector("#card-area-4");
if (cardArea4 !== null) {
  var splinaAreaOptions4 = {
    chart: {
      id: "card-area-3",
      group: "social",
      height: 135,
      width: "100%",
      background: "#6696fe",
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    stroke: {
      width: 2,
    },
    colors: ["#ffffff"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      followCursor: false,
      theme: "dark",
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },

    series: [
      {
        data: [0, 3, 8, 15, 20, 10, 12, 10, 5],
      },
    ],
  };
  var randerSplinaArea4 = new ApexCharts(cardArea4, splinaAreaOptions4);
  randerSplinaArea4.render();
}