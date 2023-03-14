// Conseguir el elemento del canvas
var ctx = document.getElementById('hist_Mariotte2').getContext('2d');

var data = {
    labels: ['280', '300', '320'],
    datasets: [
      {
        label: 'Frecuencia',
        data: [1, 2, 1],
        backgroundColor: 'rgba(255, 222, 55, 0.2)',
        borderColor: 'rgba(255, 222, 55, 1)',
        borderWidth: 1,
        yAxisID: 'left-y-axis'
      },
      {
        label: 'Desviacion estandar',
        data: [0.5, 2.5, 0.5],
        type: 'line',
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        pointRadius: 0,
        yAxisID: 'left-y-axis',
        lineTension: 0.4
      }
    ]
  };
  var options = {
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
            beginAtZero: true
          },
          stacked: true
        }]
    }
  };
  var hist_Mariotte = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
  
  