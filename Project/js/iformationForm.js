var map = L.map('mapForm', {
    minZoom:4,
    maxZoom: 17
}).setView([42.300722, 27.289444], 8);
L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=kwy7kbU0521uvJB2Z5c4', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);
var lat = null;
var lng = null;
//add and delete markers on click
map.on("click", function(e)
{
    var marker = new L.marker([e.latlng.lat, e.latlng.lng]).addTo(map).on('click', e=> e.target.remove());
    lat = e.latlng.lat;
    lng = e.latlng.lng;
});
function getInformation() {
  alert("Вашата информация е запазена. Благодарим!");
  localStorage.setItem(`latitude${localStorage.length}` , String(lat));
  localStorage.setItem(`longitude${localStorage.length-1}` , String(lng)); 
};