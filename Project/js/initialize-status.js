if (!localStorage.getItem("teamsStatus")) {
  const teamsStatus = {
    "Екип 1": "available",
    "Екип 2": "available",
    "Екип 3": "available",
    "Екип 4": "available",
    "Екип 5": "available",
    "Екип 6": "available",
    "Екип 7": "available",
    "Екип 8": "available"
  };
  localStorage.setItem("teamsStatus", JSON.stringify(teamsStatus));
}

if (!localStorage.getItem("vehiclesStatus")) {
  const vehiclesStatus = {
    "Автомобил 1": "available",
    "Автомобил 2": "available",
    "Автомобил 3": "available",
    "Автомобил 4": "available",
    "Автомобил 5": "available"
  };
  localStorage.setItem("vehiclesStatus", JSON.stringify(vehiclesStatus));
}

//initializing the availability of the teams and vehicles