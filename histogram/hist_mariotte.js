// Conseguir el elemento del canvas
var ctx = document.getElementById('hist_Mariotte').getContext('2d');

// Definar la data para el histograma
var data = {
  labels: ['260', '280', '300', '320', '340'],
  datasets: [{
    label: 'Frecuencia',
    data: [1, 2, 3, 2, 1 ],
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

// Crea el histograma
var hist_Torricelli = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});
