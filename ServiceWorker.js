const STATIC_CACHE_NAME = "site-static-v2";

//El AUDIT REPORT LIGHTHOUSE no se realiza si hay algún error
const ASSETS = [
  //Los ASSETS son archivos en ruta para pre-cargar
  "/",
  "/index.html",
  "/manifest.json",
  "/ServiceWorker.js",
  "/NotasDeDesarrollo.txt",
  
  "/Css/AboutUs.css",
  "/Css/AniadirNuevoGasto.css",
  "/Css/AniadirNuevoGastoMovile.css",
  "/Css/body.css",
  "/Css/botonAbout.css",
  "/Css/botonHome.css",
  "/Css/botonIniciarApp.css",
  "/Css/botonNuevoGasto.css",
  "/Css/buttonX.css",
  "/Css/fallback.css",
  "/Css/footer.css",
  "/Css/GastoEnLista.css",
  "/Css/gastoEnListaDesktop.css",
  "/Css/ListaDeGastos.css",
  "/Css/Welcome.css",

  "/Imagenes/iconos/maskable_icon_x72.png",
  "/Imagenes/iconos/maskable_icon_x96.png",
  "/Imagenes/iconos/maskable_icon_x128.ico",
  "/Imagenes/iconos/maskable_icon_x128.png",
  "/Imagenes/iconos/maskable_icon_x144.png",
  "/Imagenes/iconos/maskable_icon_x152.png",
  "/Imagenes/iconos/maskable_icon_x192.png",
  "/Imagenes/iconos/maskable_icon_x384.png",
  "/Imagenes/iconos/maskable_icon_x512.png",
  "/Imagenes/iconos/maskable_icon.png",
  "/Imagenes/EveryPixelLogo.png",
  "/Imagenes/Eliminar.png",
  "/Imagenes/Error.svg",
  "/Imagenes/Home.png",

  "/JavaScript/Pantallas/AniadirNuevoGasto.js",
  "/JavaScript/Pantallas/DetalleGasto.js",
  "/JavaScript/Pantallas/ModificarGasto.js",
  "/JavaScript/Pantallas/PantallasPrincipales.js",

  "/JavaScript/app.js",
  "/JavaScript/GastoEnLista.js",
  "/JavaScript/ListaGastos.js",
  "/JavaScript/LocalStorage.js",
];

//Al ser instalado el Service Worker
self.addEventListener("install", (evt) => {
  console.log('Service Worker se ha Instalado');

  //Añade el caché
  evt.waitUntil(
    caches.open(STATIC_CACHE_NAME).then( (cache) => {
      cache.addAll(ASSETS);
      console.log("Caché añadido correctamente");
    })
  );

});
  
//Cuando se activa el Service Worker (cada vez que se entra a la página)
self.addEventListener("activate", (evt) => {
  console.log('Service Worker se ha Activado');

  //Al actualizarse la versión del caché, va a eliminar las versiones anteriores
  evt.waitUntil(
    caches.keys().then( (keys) => {
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] !== STATIC_CACHE_NAME) {
          caches.delete(keys[i]);
        }
      }
    }));
});

//Ocurre al hacer una petición
self.addEventListener("fetch", (evt) => {

  if (navigator.onLine) {
    console.log('Online Mode');
  } else {
    console.log("Offline Mode");

    //En caso que no funcione el modo offline
    //   this.dispatchEvent(
    //     new CustomEvent("modoOffline", {
    //       bubbles: true,
    //       composed: true,
    //     })
    // );

    evt.respondWith(
      //Busca en el caché los elementos a los que intenta hacer fetch
      caches.match(evt.request).then( (cacheRes) => {
          return (cacheRes);
        }).catch( () => {
          //En caso que ocurra un error al buscar los elementos en caché
          //Si se intenta ingresar a otra página del dominio que no existe
          if (evt.request.url.indexOf(".html") > -1) {
            return caches.match("fallback.html");
          }
    }));
  }

});