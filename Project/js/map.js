var map = L.map('map', {
    minZoom:4,
    maxZoom: 17
}).setView([42.300722, 27.289444], 8);
L.tileLayer('https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=J1LwBBEYMhEEV5QZB9MY', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));

    if (value && typeof value.lat === "number" && typeof value.lng === "number") {
        L.marker([value.lat, value.lng]).addTo(map);
    }
}
