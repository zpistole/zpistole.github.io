// Service Workers
// •	Offline content loading
// •	Push notifications
// •	Background sync
// •	Workbox(tool)
// •	A service worker is a JS file that gets registered with the browser
//    ⁃	Stays registered with the browser even when offline
//    ⁃	Can load content without a internet connection
//    ⁃	It adds another layer
//    ⁃	Normal: Web Browser -> Remote Server
//    ⁃	w / SW: Web Browser -> Service Worker -> Remote Server
//    ⁃	It intercepts the request and decides what should happen
//    ⁃	They can’t directly access the DOM
//    ⁃	Programmable network proxy
//    ⁃	Control how network requests from your page are handled
//    ⁃	Terminated when not being used
//    ⁃	restarted when needed again
//    ⁃	Make use of ES6 promises
//    ⁃	Require HTTPS unless on localhost
// •	Use cases
//    ⁃	Caching assets & API calls
//    ⁃	Push notifications(Push & Notification API)
//    ⁃	Background data sync / preload
//    ⁃	defer access until user has a stable connection
//    ⁃	Used in progressive web apps
// •	Service Worker Lifecycle
//    ⁃	Register
//    ⁃	Install
//    ⁃	Activate 


//Make sure service workers are supported 
if ('serviceWorker' in navigator) {
  console.log('good to go');
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../sw_cached_site.js')
      .then(reg => console.log('Service Worker: Registered'))
      .catch(error => console.log(`Service Worker: Error: ${err}`))
  })
}