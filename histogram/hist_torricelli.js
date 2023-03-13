// Conseguir el elemento del canvas
var ctx = document.getElementById('hist_Torricelli').getContext('2d');

// Definar la data para el histograma
var data = {
  labels: ['26', '28', '30', '32', '34'],
  datasets: [{
    label: 'Frecuencia',
    data: [0, 1, 2, 1, 0],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};

// Define las opciones para el histograma
var options = {
  scales: {
    xAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

// Create the histogram
var hist_Torricelli = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});
