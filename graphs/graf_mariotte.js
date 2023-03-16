

// Conseguir el elemento del canvas
var ctx = document.getElementById('graf_Mariotte').getContext('2d');

// Definar la data para el histograma
var gramdata = {
  labels: [...Array(130).keys()],
  datasets: [
    {
    label: 'Simulacion',
    data: Array.from({length: 130}, (_, index) => ((-8.539e-2)*index)+(1.649e1)),
    fill: false,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    yAxisID: 'y',
    lineTension: 0.1,
    pointRadius: 0.01
  }, {
    label: 'Real',
    data: Array.from({length: 130}, (_, index) => ((-2.338e-2)*index)+(1.2188e1)),
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
var gramoptions = {
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
var graf_Mariotte = new Chart(ctx, {
  type: 'line',
  data: gramdata,
  options: gramoptions
});
