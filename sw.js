/* Abax Tracker — service worker.
   Zmień numer w CACHE przy każdej publikacji, która zmienia plik z CORE (CI to wymusza:
   job "tests" zawodzi, gdy CORE się zmieniło, a linia CACHE nie). */
const CACHE = "abax-tracker-v14";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./css/app.css", "./js/app.js"];
const OPTIONAL = ["./icon-192.png", "./icon-512.png", "./icon-512-maskable.png"];
const NAV_TIMEOUT = 3000;              // po tylu ms bez odpowiedzi sieci pokazujemy wersję z cache
const MATCH = { ignoreSearch: true };  // ?test itp. nie tworzy osobnych wpisów w cache

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then(async (c) => {
      await c.addAll(CORE); // pliki krytyczne: błąd = brak instalacji
      await Promise.all(OPTIONAL.map((u) => c.add(u).catch(() => {}))); // brak ikony nie blokuje instalacji
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

function store(req, res) {
  if (res && res.ok && res.type === "basic") {
    const copy = res.clone();
    const url = new URL(req.url);
    url.search = ""; // jeden wpis na zasób, niezależnie od parametrów w adresie
    caches.open(CACHE).then((c) => c.put(url.href, copy));
  }
  return res;
}

function timeout(ms) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), ms));
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;

  if (req.mode === "navigate") {
    /* strony: najpierw sieć (świeża wersja), ale max NAV_TIMEOUT ms — przy słabym zasięgu
       aplikacja startuje od razu z cache, a pobieranie kończy się w tle i odświeża cache */
    const net = fetch(req).then((res) => store(req, res));
    e.waitUntil(net.catch(() => {}));
    e.respondWith(
      Promise.race([net, timeout(NAV_TIMEOUT)]).catch(() =>
        caches.match(req, MATCH).then((hit) => hit || caches.match("./index.html"))
      )
    );
    return;
  }
  /* pozostałe zasoby: najpierw cache */
  e.respondWith(caches.match(req, MATCH).then((hit) => hit || fetch(req).then((res) => store(req, res))));
});