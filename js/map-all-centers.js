  const fireStations = [
    {
      name: "Пожарен център – Монтана",
      coords: [43.41913, 23.22700],
      address: "ул. „Искър“ 24, Монтана"
    },
    {
      name: "Пожарен център – Берковица",
      coords: [43.23212, 23.01850], // Коригирай с точни координати, ако имаш
      address: "ул. „Независимост“ 10, Берковица"
    },
    {
      name: "Пожарен център – Лом",
      coords: [43.75780, 23.23140], // Коригирай с точни координати, ако имаш
      address: "ул. „Свобода“ 5, Лом"
    }
  ];

  // Инициализация на картата (показва всички точки в общ изглед)
  const map = L.map('map').setView([43.5, 23.15], 10);

  // Добавяне на OpenStreetMap плочки
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Създаваме група за маркерите, за да центрираме картата по тях
  const markersGroup = L.featureGroup();

  // Добавяме маркерите за всяка локация
  fireStations.forEach(station => {
    const marker = L.marker(station.coords)
      .bindPopup(`<b>${station.name}</b><br>${station.address}`)
      .addTo(map);
    markersGroup.addLayer(marker);
  });

  // Автоматично центрираме и зумирам картата да покрие всички маркери
  map.fitBounds(markersGroup.getBounds());