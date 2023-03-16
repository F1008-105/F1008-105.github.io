// Conseguir el elemento del canvas
var ctx = document.getElementById('hist_Mariotte2').getContext('2d');

var mardata = {
    labels: ['225', '229', '233'],
    datasets: [
      {
        label: 'Frecuencia',
        data: [2, 2, 1],
        backgroundColor: 'rgba(255, 222, 55, 0.2)',
        borderColor: 'rgba(255, 222, 55, 1)',
        borderWidth: 1,
        yAxisID: 'left-y-axis'
      },
      {
        label: 'Distribución normal',
        data: [0.08, 0.07, 0.03],
        type: 'line',
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        pointRadius: 5,
        yAxisID: 'right-y-axis',
        lineTension: 0.4
      }
    ]
  };
  var maroptions = {
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [
        {
          id: 'left-y-axis',
          type: 'linear',
          position: 'left',
          ticks: {
            min: 0.00, // modify this line to set the minimum value to 0.00
            max: 0.18,
            sizestep: 0.03
          },
        }, {
          id: 'right-y-axis',
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
  var hist_Mariotte = new Chart(ctx, {
    type: 'bar',
    data: mardata,
    options: maroptions
  });
  
  