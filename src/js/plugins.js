var mymap = L.map('mapid').setView([54.0997328, 22.9542727], 16);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 17,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYWRhbTEyNDIiLCJhIjoiY2syZ21raXo1MHI5ajNjcDVzc3ZkemUzNyJ9.76TF4_MU60ksxwmzPs5GUw'
}).addTo(mymap);
const marker = L.marker([54.0997297, 22.9564614]).addTo(mymap)
marker.bindPopup("<b>Sejneńska 57</b>").openPopup()
