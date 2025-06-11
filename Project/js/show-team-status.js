document.addEventListener("DOMContentLoaded", () => {
  const teamsStatus = JSON.parse(localStorage.getItem("teamsStatus")) || {};

  document.querySelectorAll(".team").forEach(teamDiv => {
    const teamName = teamDiv.querySelector("h2").textContent.trim();
    const statusP = teamDiv.querySelector("p");

    // Създаваме бутон "Освободи"
    const button = document.createElement("button");
    button.textContent = "Освободи екипа";
    button.style.marginTop = "10px";
    button.classList.add("release-button");
    teamDiv.appendChild(button);

    // Показваме статуса
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

    updateStatus(teamsStatus[teamName]);

    button.addEventListener("click", () => {
      const password = prompt("Въведете парола, за да освободите екипа:");

      if (password === "1234") {
        // Променяме статус в localStorage
        teamsStatus[teamName] = "available";
        localStorage.setItem("teamsStatus", JSON.stringify(teamsStatus));
        updateStatus("available");
        alert(`${teamName} вече е наличен.`);
      } else {
        alert("Грешна парола!");
      }
    });
  });
});