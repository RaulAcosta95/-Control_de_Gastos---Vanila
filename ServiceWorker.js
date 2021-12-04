//Revisar Service Worker porque en algún lado no pasa el Audit
const STATIC_CACHE_NAME = "site-static-v2";
const DYNAMIC_CACHE_NAME = "site-dynamic-v2";
//No hay Package.json
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
  "/Css/botonNuevoGasto.css",
  "/Css/buttonX.css",
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

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

self.addEventListener("install", (evt) => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(STATIC_CACHE_NAME).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(ASSETS);
    })
  );
});

// activate event
self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(
            ( key ) => key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME
          ).map( ( key ) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (evt) => {
  if (navigator.onLine) {
  } else {
      console.log("Offline");
      this.dispatchEvent( //No necesario por ahora
        new CustomEvent("modoOffline", {
          bubbles: true,
          composed: true,
        })
    );
    evt.respondWith(
      caches
        .match(evt.request)
        .then((cacheRes) => {
          return (
            cacheRes ||
            fetch(evt.request).then((fetchRes) => {
              return caches.open(STATIC_CACHE_NAME).then((cache) => {
                cache.put(evt.request.url, fetchRes.clone());
                // check cached items size
                limitCacheSize(STATIC_CACHE_NAME, 60);
                return fetchRes;
              });
            })
          );
        })
        .catch(() => {
          if (evt.request.url.indexOf(".html") > -1) {
            return caches.match("fallback.html");
          }
        })
    );
  }
});
