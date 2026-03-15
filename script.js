 var map = L.map('mapbox').setView([40.4093, 49.8671], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

L.marker([40.4093, 49.8671]).addTo(map)
.bindPopup("Restaurant example")
.openPopup();