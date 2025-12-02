// -------------------- SERVICE WORKER CUARTOU --------------------

// Nombre y versión del caché
const CACHE_NAME = 'v11_CUARTOU_2025_06';

// Archivos a cachear
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './js/main.js',
  './img/2869209.png',
  './img/4e5ca5656b243dac2fe859a05807d155.jpg',
  './img/departamentos-para-estudiantes.jpg',
  './img/maxresdefault.jpg'
];

// INSTALACIÓN → Guardar en caché
self.addEventListener('install', event => {
  console.log('🔧 Instalando Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Archivos en caché');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
      .catch(err => console.log('❌ Error al cachear', err))
  );
});

// ACTIVACIÓN → Eliminar cachés viejos
self.addEventListener('activate', event => {
  console.log('✅ Activando Service Worker...');
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      const deletePromises = cacheNames.map(name => {
        if (!cacheWhitelist.includes(name)) {
          console.log('🗑️ Eliminando caché viejo:', name);
          
          // Notificar a todos los clientes que hay nueva versión
          self.clients.matchAll().then(clients => {
            clients.forEach(client => {
              client.postMessage({
                type: 'NEW_VERSION',
                oldCache: name,
                newCache: CACHE_NAME
              });
            });
          });
          
          return caches.delete(name);
        }
      });
      return Promise.all(deletePromises);
    })
    .then(() => {
      console.log('🎯 Service Worker activado y listo');
      return self.clients.claim();
    })
  );
});

// FETCH → Buscar en caché o red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(res => res || fetch(event.request))
  );
});


// -------------------- NOTIFICACIONES PUSH --------------------

// Recibir notificación push
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};

  const opciones = {
    body: data.body || 'Nueva consulta de alojamiento.',
    icon: './img/2869209.png',
    badge: './img/2869209.png',
    vibrate: [200, 100, 200],
    tag: 'cuartou-msg',
    renotify: true,
    data: data
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'CUARTOU 🏠', opciones)
  );
});


// 🔔 Clic en notificación
self.addEventListener('notificationclick', event => {
  event.notification.close();

  const urlToOpen = event.notification.data?.url || 'https://wa.me/527571173738';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientList => {
        // Si ya hay una ventana abierta, enfocarla
        for (let client of clientList) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        // Si no, abrir nueva ventana
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

