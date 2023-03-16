// Conseguir el elemento del canvas
var ctx = document.getElementById('hist_Torricelli').getContext('2d');

// Definar la data para el histograma
var data = {
  labels: ['33', '34', '35', '36', '37'],
  datasets: [
    {
    label: 'Frecuencia',
    data: [2, 1, 5, 6, 5],
    backgroundColor: 'rgba(255, 222, 55, 0.2)',
    borderColor: 'rgba(255, 222, 55, 1)',
    borderWidth: 1,
    yAxisID: 'axis_izq'
  }, {
    label: 'Distribución normal',
    data: [0.02, 0.08, 0.21, 0.31, 0.24],
    type: 'line',
    fill: false,
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
    pointRadius: 5,
    yAxisID: 'axis_right',
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
      },{
        id:'axis_der',
        type: 'linear',
        position: 'right',
        ticks: {
          beginAtZero: true
        },
        stacked: true
      }
    ]
  }
};

// Create the histogram
var hist_Torricelli = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});
