document.addEventListener("DOMContentLoaded", () => {
  const vehiclesStatus = JSON.parse(localStorage.getItem("vehiclesStatus")) || {};

  document.querySelectorAll(".team").forEach(vehicleDiv => {
    const vehicleName = vehicleDiv.querySelector("h2").textContent.trim();
    const statusP = vehicleDiv.querySelector("p");

    // Създаваме бутон "Освободи автомобила"
    const button = document.createElement("button");
    button.textContent = "Освободи автомобила";
    button.style.marginTop = "10px";
    button.classList.add("release-button");
    vehicleDiv.appendChild(button);

    // Функция за обновяване на статуса
    const updateStatus = (status) => {
      if (status === "available") {
        statusP.textContent = "Наличен";
        statusP.classList.add("available");
        statusP.classList.remove("busy");
      } else if (status === "busy") {
        statusP.textContent = "Зает";
        statusP.classList.add("busy");
        statusP.classList.remove("available");
      } else {
        statusP.textContent = "Неизвестен";
        statusP.classList.remove("busy", "available");
      }
    };

    // Вземаме статуса от localStorage или по подразбиране 'busy'
    const currentStatus = vehiclesStatus[vehicleName] || "busy";
    updateStatus(currentStatus);

    button.addEventListener("click", () => {
      const password = prompt("Въведете парола, за да освободите автомобила:");

      if (password === "1234") {
        vehiclesStatus[vehicleName] = "available";
        localStorage.setItem("vehiclesStatus", JSON.stringify(vehiclesStatus));
        updateStatus("available");
        alert(`${vehicleName} вече е наличен.`);
      } else {
        alert("Грешна парола!");
      }
    });
  });
});
