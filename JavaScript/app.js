//Ejecuta app DESPUÉS de redireccionar a HTTPS 
//Porque de otra manera, se instala en http ántes que el Redirect HTTPS funcione
//Y el service worker y caché solo funciona en https o en local host

function app() {    
    console.log("app.js");
    if('serviceWorker' in navigator){
        //Promesa para registrar el service Worker
        navigator.serviceWorker.register('./ServiceWorker.js')
        .then((reg) => console.log('Service Worker Registered', reg))
        .catch((err) => console.log('Service Worker NOT Registered', err));
    }

}