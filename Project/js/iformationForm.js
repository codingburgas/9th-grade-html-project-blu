var map = L.map("mapForm", {
  minZoom: 4,
  maxZoom: 17,
}).setView([42.300722, 27.289444], 8);
L.tileLayer(
  "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=kwy7kbU0521uvJB2Z5c4",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);
var lat = null;
var lng = null;
//add and delete markers on click
var marker = null;
map.on("click", function (e) {
  if (marker) {
    map.removeLayer(marker);
  }
    marker = new L.marker([e.latlng.lat, e.latlng.lng])
    .addTo(map)
    .on("click", (e) => e.target.remove());
  lat = e.latlng.lat;
  lng = e.latlng.lng;
});

function getInformation() {

  localStorage.setItem(`marker${localStorage.length}`, JSON.stringify({lat: lat, lng: lng}));

  const selectedTeam = document.getElementById("team-select").value;
  const selectedVehicle = document.getElementById("vehicle-select").value;

  // Вземи текущия статус от localStorage
  const teamsStatus = JSON.parse(localStorage.getItem("teamsStatus"));
  const vehiclesStatus = JSON.parse(localStorage.getItem("vehiclesStatus"));

  // Обнови като заети
  if (teamsStatus[selectedTeam]) {
    teamsStatus[selectedTeam] = "busy";
  }
  if (vehiclesStatus[selectedVehicle]) {
    vehiclesStatus[selectedVehicle] = "busy";
  }

  // Запиши обратно
  localStorage.setItem("teamsStatus", JSON.stringify(teamsStatus));
  localStorage.setItem("vehiclesStatus", JSON.stringify(vehiclesStatus));

  alert("Вашата информация е запазена. Благодарим!");

    const firstName = document.getElementById("first-name").value;
  const secondName = document.getElementById("second-name").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const location = document.querySelector(
    'input[name="location"]:checked'
  )?.value;
  const team = document.getElementById("team-select").value;
  const vehicle = document.getElementById("vehicle-select").value;
  const fireSize = document.getElementById("fire-size").value;
  const fireType = document.getElementById("fire-type").value;
  const fireCause = document.getElementById("fire-cause").value;
  const fireAppearance = document.getElementById("fire-appearance").value;

  const report = {
    firstName,
    secondName,
    gender,
    email,
    address,
    location,
    teams: team,
    vehicle,
    fireSize,
    fireType,
    fireCause,
    fireAppearance,
  };

  // Взимаме вече записани репорти
  const reportList = JSON.parse(localStorage.getItem("fireReportList")) || [];

  // Добавяме новия
  reportList.push(report);

  // Записваме обратно
  localStorage.setItem("fireReportList", JSON.stringify(reportList));
}

document.addEventListener("DOMContentLoaded", () => {
  // Взимаме състоянието от localStorage
  const teamsStatus = JSON.parse(localStorage.getItem("teamsStatus")) || {};
  const vehiclesStatus =
    JSON.parse(localStorage.getItem("vehiclesStatus")) || {};

  const teamSelect = document.getElementById("team-select");
  const vehicleSelect = document.getElementById("vehicle-select");

  // Зареждаме само свободни екипи
  for (const team in teamsStatus) {
    if (teamsStatus[team] === "available") {
      const option = document.createElement("option");
      option.value = team;
      option.textContent = team;
      teamSelect.appendChild(option);
    }
  }

  // Зареждаме само свободни автомобили
  for (const vehicle in vehiclesStatus) {
    if (vehiclesStatus[vehicle] === "available") {
      const option = document.createElement("option");
      option.value = vehicle;
      option.textContent = vehicle;
      vehicleSelect.appendChild(option);
    }
  }
});
