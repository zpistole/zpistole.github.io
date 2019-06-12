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