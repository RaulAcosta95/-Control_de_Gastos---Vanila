if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./ServiceWorker.js')
    .then((reg) => console.log('Service Worker Registered', reg))
    .catch((err) => console.log('Service Worker NOT Registered', err));
}

// if(navigator.onLine) {
//     console.log('Es online');
// } else {
//     setTimeout(() => {
//         console.log('Es Offline');
//         document.location.href="fallback.html";
//     }, 1000);

// }