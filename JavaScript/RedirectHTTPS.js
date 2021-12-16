console.log('Redirect HTTPS');
if (window.location.host == "micontroldegastos.com") {        
    if (location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
  }
}