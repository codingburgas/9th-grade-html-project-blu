  const ctx = document.getElementById('montanaChart').getContext('2d');

  // Примерни данни – коригирай според реалните стойности
  const data = {
    labels: ['Автомобили', 'Екипи', 'Души'],
    datasets: [{
      label: 'Брой',
      data: [5, 8, 32],  
      backgroundColor: [
        'rgba(54, 162, 235, 0.7)',  
        'rgba(255, 99, 132, 0.7)',
        'rgba(80, 35, 300, 0.7)'   
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(80, 35, 300, 0.7)' 
      ],
      borderWidth: 2
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
            stepSize: 3
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Брой автомобили, екипи и общ брой души в Пожарна Монтана'
        }
      }
    }
  };

  new Chart(ctx, config);