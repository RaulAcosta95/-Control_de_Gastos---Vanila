//Primero debe ejecutar el HTTPS antes que nada, para asegurarse que el Service Worker Funcione
console.log("RedirectHTTPS.js");

if (window.location.host == "micontroldegastos.com") {  
  if (location.protocol !== 'https:') {
    console.log('Redirect to HTTPS');
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
  }
}

//Ahora si, instala el Service worker con la función de app.js
app();