

// Conseguir el elemento del canvas
var ctx = document.getElementById('graf_Torricelli').getContext('2d');

// Definar la data para el histograma
var gratdata = {
  labels: [...Array(30).keys()],
  datasets: [
    {
    label: 'Simulacion',
    data: Array.from({length: 30}, (_, index) => ((2.011e-2)*index**2)+((-1.14e0)*index)+(1.7106e1)),
    fill: false,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    yAxisID: 'y',
    lineTension: 0.1,
    pointRadius: 0.01
  }, {
    label: 'Real',
    data: Array.from({length: 30}, (_, index) => ((1.403e-2)*index**2)+((-7.892e-1)*index)+(1.157e1)),
    fill: false,
    borderColor: 'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    yAxisID: 'y',
    lineTension: 0.1,
    pointRadius: 0.01
  }
]
};

// Define las opciones para el histograma
var gratoptions = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'tiempo en segundos'
      }
    },
    y: {
      title: {
        display: true,
        text: 'altura en cm'
      }
    }
  }
};

// Create the histogram
var graf_Torricelli = new Chart(ctx, {
  type: 'line',
  data: gratdata,
  options: gratoptions
});
