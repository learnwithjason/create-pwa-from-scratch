// register the Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    await navigator.serviceWorker.register('./service-worker.js');
  });
}
