# Abax Tracker 🎲

**🇬🇧 [English](#english) · 🇵🇱 [Polski](#polski)**

**Live app / Aplikacja:** https://k-d-s-z.github.io/abax-tracker/

---

<a name="english"></a>
# 🇬🇧 English

**Abax Tracker** is a lightweight, offline-first **Progressive Web App (PWA)** for tracking scores and game progression in board games.

No accounts, no backend, no external dependencies. All data stays on your device.

## Features

<!-- TODO: verify this list against the current app before publishing -->

- 📱 **Installable PWA** – works on phones and desktops, with maskable icons for Android.
- ⚡ **Offline first** – a Service Worker serves the app without a network connection.
- ➕ **Score tracking** – quick add/subtract buttons (configurable pairs) plus manual entry.
- 🕘 **History and undo** – every score change is recorded; edit or remove entries.
- 👥 **Saved groups and games** – reuse player groups, resume saved games, autosave.
- 💾 **Import / export** – export to a `.json` file on your device; imports are validated and sanitized. Nothing is sent over the internet.
- 🌍 **Polish and English** interface.
- 🔆 **Screen Wake Lock** – optionally keeps the screen on during a game.
- ♿ **Accessibility** – keyboard support, ARIA labels, visible focus, 44 px touch targets.
- 🔒 **Strict Content Security Policy** – no inline scripts or styles, no third-party requests.

## Getting Started

### Run locally

Service Workers and ES modules do not work from `file://`, so serve the folder over HTTP:

```bash
git clone https://github.com/k-d-s-z/abax-tracker.git
cd abax-tracker
python3 -m http.server 8080
```

Then open http://localhost:8080.

### Deploy with GitHub Pages

1. Open the repository **Settings → Pages**.
2. Under **Source**, choose the `main` branch and the `/ (root)` folder.
3. Save. The app is published at `https://<your-username>.github.io/abax-tracker/`.

### Install on a phone

1. Open the app link in Chrome, Safari or Brave.
2. Choose **Add to Home Screen** or **Install app** from the browser menu.

## Project structure

```text
index.html              entry point
css/app.css             styles
js/app.js               application logic
sw.js                   Service Worker (offline cache)
manifest.webmanifest    PWA manifest
.github/workflows/      CI
```

### Service Worker versioning

`sw.js` contains a `CACHE` constant (e.g. `abax-tracker-v11`). **Bump it on every release** that changes a cached file, otherwise returning users may keep an old version of the assets.

## Tests and CI

GitHub Actions runs on every push:

- **Tests** – Playwright (Chromium) loads the app, checks for console and page errors, and runs the built-in test harness (`?test`).
- **Lighthouse CI** – performance, accessibility, best practices, SEO.
- **axe** – automated WCAG 2.x A/AA scan.

## License

Released under the [GNU Affero General Public License v3.0](LICENSE) (AGPL-3.0). If you modify the app and make it available to users over a network, you must offer them the corresponding source code under the same license.

---

<a name="polski"></a>
# 🇵🇱 Polski

**Abax Tracker** to lekka aplikacja **PWA (Progressive Web App)** działająca offline, służąca do liczenia punktów i śledzenia przebiegu gier planszowych.

Bez kont, bez serwera, bez zewnętrznych zależności. Wszystkie dane zostają na Twoim urządzeniu.

## Funkcje

<!-- TODO: zweryfikuj tę listę z aktualną wersją aplikacji przed publikacją -->

- 📱 **Instalowalna PWA** – działa na telefonach i komputerach, z ikonami maskable dla Androida.
- ⚡ **Offline first** – Service Worker udostępnia aplikację bez połączenia z internetem.
- ➕ **Liczenie punktów** – szybkie przyciski dodawania/odejmowania (konfigurowalne pary) oraz wpisywanie ręczne.
- 🕘 **Historia i cofanie** – każda zmiana punktów jest zapisywana; wpisy można edytować i usuwać.
- 👥 **Zapisane składy i gry** – ponowne użycie grup graczy, wznawianie zapisanych gier, autozapis.
- 💾 **Import / eksport** – eksport do pliku `.json` na urządzeniu; importowane dane są walidowane i sanityzowane. Nic nie jest wysyłane do internetu.
- 🌍 Interfejs **po polsku i angielsku**.
- 🔆 **Wake Lock** – opcjonalnie nie wygasza ekranu podczas gry.
- ♿ **Dostępność** – obsługa klawiatury, etykiety ARIA, widoczny fokus, cele dotykowe 44 px.
- 🔒 **Ścisła polityka CSP** – bez skryptów i stylów inline, bez zapytań do zewnętrznych serwisów.

## Jak zacząć

### Uruchomienie lokalne

Service Worker i moduły ES nie działają z `file://`, więc udostępnij folder przez HTTP:

```bash
git clone https://github.com/k-d-s-z/abax-tracker.git
cd abax-tracker
python3 -m http.server 8080
```

Następnie otwórz http://localhost:8080.

### Publikacja na GitHub Pages

1. Otwórz **Settings → Pages** w repozytorium.
2. W polu **Source** wybierz gałąź `main` i folder `/ (root)`.
3. Zapisz. Aplikacja będzie dostępna pod adresem `https://<twoja-nazwa>.github.io/abax-tracker/`.

### Instalacja na telefonie

1. Otwórz link do aplikacji w Chrome, Safari lub Brave.
2. W menu przeglądarki wybierz **Dodaj do ekranu głównego** lub **Zainstaluj aplikację**.

## Struktura projektu

```text
index.html              punkt wejścia
css/app.css             style
js/app.js               logika aplikacji
sw.js                   Service Worker (cache offline)
manifest.webmanifest    manifest PWA
.github/workflows/      CI
```

### Wersjonowanie Service Workera

W `sw.js` jest stała `CACHE` (np. `abax-tracker-v11`). **Zmieniaj ją przy każdym wydaniu**, które modyfikuje pliki z cache, w przeciwnym razie powracający użytkownicy mogą zostać przy starej wersji zasobów.

## Testy i CI

GitHub Actions uruchamia się przy każdym pushu:

- **Testy** – Playwright (Chromium) ładuje aplikację, sprawdza błędy konsoli i strony oraz uruchamia wbudowany zestaw testów (`?test`).
- **Lighthouse CI** – wydajność, dostępność, dobre praktyki, SEO.
- **axe** – automatyczny skan WCAG 2.x A/AA.

## Licencja

Projekt jest udostępniony na [licencji GNU Affero General Public License v3.0](LICENSE) (AGPL-3.0). Jeśli zmodyfikujesz aplikację i udostępnisz ją użytkownikom przez sieć, musisz udostępnić im odpowiadający kod źródłowy na tej samej licencji.
