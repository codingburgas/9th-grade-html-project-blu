 document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('montanaChart').getContext('2d');

    const teamsStatus = JSON.parse(localStorage.getItem("teamsStatus")) || {};
    const vehiclesStatus = JSON.parse(localStorage.getItem("vehiclesStatus")) || {};

    const availableTeams = Object.values(teamsStatus).filter(s => s === "available").length;
    const busyTeams = Object.values(teamsStatus).filter(s => s === "busy").length;

    const availableVehicles = Object.values(vehiclesStatus).filter(s => s === "available").length;
    const busyVehicles = Object.values(vehiclesStatus).filter(s => s === "busy").length;

    const totalPeople = 32; // това си остава фиксирано

    const data = {
      labels: [
        'Налични екипи',
        'Заети екипи',
        'Налични автомобили',
        'Заети автомобили',
        'Души общо'
      ],
      datasets: [{
        label: 'Брой',
        data: [availableTeams, busyTeams, availableVehicles, busyVehicles, totalPeople],
        backgroundColor: [
          'rgba(75, 192, 192, 0.7)',  // налични екипи
          'rgba(255, 99, 132, 0.7)',  // заети екипи
          'rgba(54, 162, 235, 0.7)',  // налични автомобили
          'rgba(255, 159, 64, 0.7)',  // заети автомобили
          'rgba(153, 102, 255, 0.7)'  // души
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)'
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
            text: 'Статистика: екипи, автомобили и души'
          }
        }
      }
    };

    new Chart(ctx, config);
  });