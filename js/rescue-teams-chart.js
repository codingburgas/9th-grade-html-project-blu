  const ctx = document.getElementById('montanaChart').getContext('2d');

  // Примерни данни – коригирай според реалните стойности
  const data = {
    labels: ['Автомобили', 'Екипи'],
    datasets: [{
      label: 'Брой',
      data: [12, 8],  // например: 12 автомобила и 8 екипа
      backgroundColor: [
        'rgba(54, 162, 235, 0.7)',  // синьо за автомобили
        'rgba(255, 99, 132, 0.7)'   // червено за екипи
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Брой автомобили и екипи в Монтана'
        }
      }
    }
  };

  new Chart(ctx, config);