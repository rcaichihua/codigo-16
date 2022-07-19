// const barChart = document.querySelector("#bar-chart").getContext("2d");
// //console.log(barChart);
// const myChart = new Chart(barChart, {
//   type: "bar",
//   data: {
//     labels: ["Vendedor1", "Vendedor2", "Vendedor3", "Vendedor4", "Vendedor5"],
//     datasets: [
//       {
//         label: "Ventas del año 2022",
//         data: [10000.25, 12000.5, 50555.05, 11789.12, 4587.22],
//         backgroundColor: [
//           "#0DB8B3",
//           "#0D81B8",
//           "#0DB85E",
//           "#840DB8",
//           "#B80D56",
//         ],
//         borderColor: ["#000", "#840DB8", "#0DB8B3", "#0DB85E", "000"], //color de border para cada uno
//         borderWidth: 1, //grosor de la linea
//       },
//     ],
//   },
// });
function getCountTask(status) {
  const tasks = arrayTask.filter((task) => task.status === status);
  return tasks.length;
}

const chartTaskReport = document
  .querySelector("#task-chart-report")
  .getContext("2d");

const myChart = new Chart(chartTaskReport, {
  type: "doughnut",
  data: {
    labels: ["TODO", "DONE", "DELETGE"],
    datasets: [
      {
        label: "Estados de tareas",
        // data: [countTODO, countDONE, countDELETE],
        backgroundColor: ["#25a9ff", "#00C45F", "#FF6674"],
      },
    ],
  },
});

function generateChart() {
  const countTODO = getCountTask("todo");
  const countDONE = getCountTask("done");
  const countDELETE = getCountTask("delete");
  myChart.data.datasets[0].data[0] = countTODO;
  myChart.data.datasets[0].data[1] = countDONE;
  myChart.data.datasets[0].data[2] = countDELETE;
  myChart.update();
}
