// Conseguir el elemento del canvas
var ctx = document.getElementById('hist_Torricelli').getContext('2d');

// Definar la data para el histograma
var data = {
  labels: ['26', '28', '30', '32', '34'],
  datasets: [
    {
    label: 'Frecuencia',
    data: [0, 1, 2, 1, 0],
    backgroundColor: 'rgba(255, 222, 55, 0.2)',
    borderColor: 'rgba(255, 222, 55, 1)',
    borderWidth: 1,
    yAxisID: 'axis_izq'
  }, {
    label: 'Desviacion estandar',
    data: [0.5, 1.5, 2.5, 1.5, 0.5],
    type: 'line',
    fill: false,
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
    pointRadius: 0,
    yAxisID: 'axis_izq',
    lineTension: 0.4
  }
]
};

// Define las opciones para el histograma
var options = {
  scales: {
    xAxes: [{
      ticks: {
        beginAtZero: true
      }
    }],
    yAxes: [
      {
        id:'axis_izq',
        type: 'linear',
        position: 'left',
        ticks: {
          beginAtZero: true
        },
        stacked: true
      }]
  }
};

// Create the histogram
var hist_Torricelli = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});
