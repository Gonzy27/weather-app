const request = require('request');

const url = 'https://api.darksky.net/forecast/44406adf5c6fd6af1e2842430e29c31e/37.8267,-122.4233?units=si&lang=es';


request({url: url, json: true}, (error, response) => {
    if(error){
        console.log('No se pudo conectar al servicio del tiempo');
    }else if(response.body.error){
        console.log('No se pudo encontrar la ubicación');
    }else{
        console.log(response.body.daily.data[0].summary + '. Actualmente hay ' + response.body.currently.temperature + ' grados de temperatura. Existe una probabilidad de ' 
        + response.body.currently.precipProbability + '% de que llueva.');
    }
});

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Santiago.json?access_token=pk.eyJ1IjoiZ29uemFsbzI3IiwiYSI6ImNrNWRhcWRybDBiaGkza21obDc4YmhkODEifQ.Tq1C2Fkobaq_7j9hlTd_sg&language=es&limit=1';

request({url: geoUrl, json: true}, (error, response) =>{
    if(error){
        console.log('No se pudo conectar al servicio de localización');
    }else if(response.body.features.length === 0){
        console.log('No se pudo encontrar una ubicación válida, Intenta otra búsqueda');
    }else{
        const longitud = response.body.features[0].center[0];
        const latitud = response.body.features[0].center[1];
        console.log('Latidud: ' + latitud + '. Longitud: ' + longitud);
    }
})