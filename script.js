var map = L.map('map').setView([40.4093,49.8671],7);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

var bounds = [
[38.3,44.7],
[41.9,50.4]
];

map.setMaxBounds(bounds);

var restaurants=[];

fetch("https://overpass-api.de/api/interpreter?data=[out:json];area[name='Azerbaijan'];node[amenity=restaurant](area);out;")
.then(res=>res.json())
.then(data=>{

data.elements.forEach(place=>{

if(place.lat && place.lon){

var name=place.tags?.name || "Restaurant";

restaurants.push({
name:name,
lat:place.lat,
lon:place.lon
});

L.marker([place.lat,place.lon])
.addTo(map)
.bindPopup(name);

}

});

});

var search=document.getElementById("search");

search.addEventListener("input",function(){

var value=search.value.toLowerCase();

restaurants.forEach(r=>{

if(r.name.toLowerCase().includes(value)){

map.setView([r.lat,r.lon],14);

}

});

});