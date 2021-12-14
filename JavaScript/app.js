//Si el navegador soporta los Service Worker (Navegadores actuales)
if('serviceWorker' in navigator){
    //Promesa para registrar el service Worker
    navigator.serviceWorker.register('./ServiceWorker.js')
    .then((reg) => console.log('Service Worker Registered', reg))
    .catch((err) => console.log('Service Worker NOT Registered', err));
}