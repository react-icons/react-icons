/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "precache.wy2Ocg2J-KyJcLH30OnZe.07f1ad880bf46ed6d89b897a8bfca338.js"
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/brand-icon.svg",
    "revision": "33455d33822cd86a7b2e7c12be2688f6"
  },
  {
    "url": "/favicon.png",
    "revision": "217bba9d985038b5db0f675aadef1058"
  },
  {
    "url": "/icons/icon-128x128.png",
    "revision": "61141052122e82b0e4c106b6478053f7"
  },
  {
    "url": "/icons/icon-144x144.png",
    "revision": "d7041f383ef13f304ce0c8222c768687"
  },
  {
    "url": "/icons/icon-152x152.png",
    "revision": "e892614a0964881052f52449818355d2"
  },
  {
    "url": "/icons/icon-192x192.png",
    "revision": "09b80496ac709b0fceef80e2c89a5558"
  },
  {
    "url": "/icons/icon-384x384.png",
    "revision": "065ce43c918fae1157d9fa6757bc7685"
  },
  {
    "url": "/icons/icon-512x512.png",
    "revision": "c4642057e4afcfa6776064b99ae43a13"
  },
  {
    "url": "/icons/icon-72x72.png",
    "revision": "5fedad82387f7b30c250134c5a394688"
  },
  {
    "url": "/icons/icon-96x96.png",
    "revision": "2c3ea4bbe99ae01388b3dcd30b5d053d"
  },
  {
    "url": "/manifest.json",
    "revision": "95cea107ce25d574dcfc372c8d72408e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i, new workbox.strategies.CacheFirst({ "cacheName":"google-fonts", plugins: [new workbox.expiration.Plugin({ maxEntries: 4, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i, new workbox.strategies.CacheFirst({ "cacheName":"font-awesome", plugins: [new workbox.expiration.Plugin({ maxEntries: 1, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"static-font-assets", plugins: [new workbox.expiration.Plugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"static-image-assets", plugins: [new workbox.expiration.Plugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:js)$/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"static-js-assets", plugins: [new workbox.expiration.Plugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:css|less)$/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"static-style-assets", plugins: [new workbox.expiration.Plugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/.*/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"others", plugins: [new workbox.expiration.Plugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
