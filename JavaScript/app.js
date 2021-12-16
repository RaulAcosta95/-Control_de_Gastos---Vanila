//Ejecuta DESPUÉS de redireccionar a HTTPS 
//Porque de otra manera, se instala en http ántes que el Redirect HTTPS funcione
addEventListener("RedirectHTTPS", () => {
    if('serviceWorker' in navigator){
        //Promesa para registrar el service Worker
        navigator.serviceWorker.register('./ServiceWorker.js')
        .then((reg) => console.log('Service Worker Registered', reg))
        .catch((err) => console.log('Service Worker NOT Registered', err));
    }
});