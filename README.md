# Abax Tracker 🎲

**Abax Tracker** is a lightweight, offline-first **Progressive Web App (PWA)** for tracking scores and game progression in board games.

**Live app:** https://k-d-s-z.github.io/abax-tracker/

No accounts, no backend, no external dependencies. All data stays on your device.

---

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

---

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

---

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

---

## Tests and CI

GitHub Actions runs on every push:

- **Tests** – Playwright (Chromium) loads the app, checks for console and page errors, and runs the built-in test harness (`?test`).
- **Lighthouse CI** – performance, accessibility, best practices, SEO.
- **axe** – automated WCAG 2.x A/AA scan.

---

## License

Released under the [MIT License](LICENSE).
