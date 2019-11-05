// console.log('plugins');
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   id: 'mapbox.streets',
//   accessToken: 'pk.eyJ1IjoiYWRhbTEyNDIiLCJhIjoiY2syZ21raXo1MHI5ajNjcDVzc3ZkemUzNyJ9.76TF4_MU60ksxwmzPs5GUw'
// }).addTo(mymap);


IF(OR(GFP_Stato_del_GID_Anagrafica__c = 'CERTIFICATO',
  GFP_Stato_del_GID_Anagrafica__c = 'NON CERTIFICATO',
  GFP_Stato_del_GID_Anagrafica__c = 'CON PRESCRIZIONI',
  GFP_Stato_del_GID_Anagrafica__c = 'DA ADEGUARE',
  GFP_Stato_del_GID_Anagrafica__c = 'DA AUTORIZZARE',
  GFP_Stato_del_GID_Anagrafica__c = 'POSA IN CORSO',
  GFP_Stato_del_GID_Anagrafica__c = 'DA RISANARE',
  GFP_Stato_del_GID_Anagrafica__c = 'RISANATO',
  GFP_Stato_del_GID_Anagrafica__c = 'NLAV CONCLUSO'),
  "2",
  "-"
)
