var map = L.map('map', {
    minZoom:4,
    maxZoom: 17
}).setView([42.300722, 27.289444], 8);
L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=kwy7kbU0521uvJB2Z5c4', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);
for(let i = 0; i < localStorage.length; i+=2)
{
    const key1 = localStorage.key(i);
    const key2 = localStorage.key(i+1);
    var lat = Number(localStorage.getItem(key1));
    var lng = Number(localStorage.getItem(key2));
    var marker = L.marker([lat, lng]).addTo(map);
}