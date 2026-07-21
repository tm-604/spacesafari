// Bump this whenever index.html (or the lineup data inside it) changes,
// so returning visitors pick up the new version instead of a stale cache.
const CACHE_NAME = 'space-safari-cache-v165';
// Photos ARE precached (blocking, during install) so the app is fully usable
// offline right after the first visit/install. No map file — Space Safari
// has no map material yet (FESTIVAL_CONFIG.map.enabled:false).
const ASSETS = [
  './',
  './index.html',
  './jsqr.js',
  './qrcode.js',
  './manifest.json',
  './icon-192.png',
  './icon-192-light.png',
  './icon-512.png',
  './icon-512-light.png',
  './icon-512-maskable.png',
  './icon-180.png',
  './icon-180-light.png',
  './icon-512-maskable-light.png',
  './photos/10000-lions.jpg',
  './photos/a-mo.jpg',
  './photos/abyss-ooze-live.jpg',
  './photos/acyd-holik-live.jpg',
  './photos/albiovix.jpg',
  './photos/alchemy-circle-live.jpg',
  './photos/alien-trancesistor.jpg',
  './photos/already-maged-live.jpg',
  './photos/anoebis-3h-set.jpg',
  './photos/apsaya.jpg',
  './photos/audiopathik-live.jpg',
  './photos/bandikoot-live.jpg',
  './photos/blackbird.jpg',
  './photos/braincell-live.jpg',
  './photos/briouch-k-live.jpg',
  './photos/bukkha.jpg',
  './photos/cecilia-tosh.jpg',
  './photos/cyk-live.jpg',
  './photos/da-iguana-hybrid.jpg',
  './photos/derango-live.jpg',
  './photos/dica-live.jpg',
  './photos/dickster-live.jpg',
  './photos/digicult-live.jpg',
  './photos/dj-red.jpg',
  './photos/dju-yo.jpg',
  './photos/drofmans.jpg',
  './photos/dub-up-hifi.jpg',
  './photos/eat-static-live.jpg',
  './photos/elfra.jpg',
  './photos/elisa-do-brasil.jpg',
  './photos/elowinz-live.jpg',
  './photos/emel-vinyl.jpg',
  './photos/emergency.jpg',
  './photos/epidemie-hybrid.jpg',
  './photos/exit-world-live.jpg',
  './photos/ey-rah.jpg',
  './photos/felfel.jpg',
  './photos/formant-value-live.jpg',
  './photos/fuzzey-live.jpg',
  './photos/ghostscent.jpg',
  './photos/heisa-live.jpg',
  './photos/infrakontrol-live-modular.jpg',
  './photos/james-monro.jpg',
  './photos/jean-paul-groove-live-band.jpg',
  './photos/karash-live.jpg',
  './photos/kokko-live.jpg',
  './photos/koxbox-live.jpg',
  './photos/laima-adelaide-hybrid.jpg',
  './photos/laughing-buddha-live.jpg',
  './photos/lazine.jpg',
  './photos/le-faune-stepper-live.jpg',
  './photos/luce-clandestina.jpg',
  './photos/mallki.jpg',
  './photos/mamakkat-live.jpg',
  './photos/marco-3000.jpg',
  './photos/megalopsy-live.jpg',
  './photos/mixsaj.jpg',
  './photos/moldetek-live.jpg',
  './photos/mondocane.jpg',
  './photos/monosym.jpg',
  './photos/n-x-live.jpg',
  './photos/nemanja-live-band.jpg',
  './photos/neurotribe-live.jpg',
  './photos/ossia-live.jpg',
  './photos/phaz-m-dub-live-band.jpg',
  './photos/pius-perplex.jpg',
  './photos/pozek-hybrid.jpg',
  './photos/psychaos-live.jpg',
  './photos/raik.jpg',
  './photos/scale-9.jpg',
  './photos/sevenum-six.jpg',
  './photos/t-xyblue.jpg',
  './photos/tapes-reunion.jpg',
  './photos/terapeutek.jpg',
  './photos/tsuniman.jpg',
  './photos/tweeden-asem.jpg',
  './photos/van-der-wiese-live.jpg',
  './photos/wonka-live.jpg',
  './photos/yiros.jpg',
  './photos/zetro-23.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first for our own files (instant offline load), falling back to the
// network for anything else (e.g. the Google Fonts stylesheet), and finally
// to whatever's cached if the network is unavailable.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // Calendar-reminder handoff for installed iOS PWAs: data: URI navigation
  // is silently ignored in standalone display-mode, so index.html routes
  // through this instead — a real same-origin response with a proper
  // text/calendar Content-Type, which iOS reliably hands off to Calendar
  // even without the full Safari chrome around it.
  const url = new URL(event.request.url);
  if (url.pathname.endsWith('/reminder.ics')) {
    const ics = decodeURIComponent(url.searchParams.get('data') || '');
    event.respondWith(new Response(ics, {
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': 'inline; filename="event.ics"'
      }
    }));
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((resp) => {
          if (resp && resp.ok && event.request.url.startsWith(self.location.origin)) {
            const clone = resp.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return resp;
        })
        .catch(() => cached);
    })
  );
});
