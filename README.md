# Abax Tracker 🎲

**🇬🇧 [English](#english) · 🇵🇱 [Polski](#polski)**

**Live app / Aplikacja:** https://k-d-s-z.github.io/abax-tracker/

---

<a name="english"></a>
# 🇬🇧 English

**Abax Tracker** is a lightweight, offline-first **Progressive Web App (PWA)** for tracking scores and game progression in board games.

No accounts, no backend, no external dependencies. All data stays on your device.

## Features

- 📱 **Installable PWA** – works on phones and desktops, with maskable icons for Android.
- ⚡ **Offline first** – a Service Worker serves the app without a network connection.
- ➕ **Score tracking** – quick add/subtract buttons (configurable pairs) plus manual entry.
- 🕘 **History and undo** – every score change is recorded; edit or remove entries, restore undone ones.
- 👥 **Saved groups and games** – reuse player groups, resume saved games, autosave of unfinished games.
- 💾 **Import / export** – export to a `.json` file on your device; imports are validated and sanitized. Nothing is sent over the internet.
- 🎨 **12 player colors** – drag & drop to reorder players; cards adapt to phones, tablets and desktops (4 players get a 2×2 grid).
- 🌍 **Polish and English** interface.
- 🔆 **Screen Wake Lock** – optionally keeps the screen on during a game.
- ♿ **Accessibility** – keyboard support, ARIA labels, visible focus, 44 px touch targets, reduced-motion and high-contrast support.
- 🔒 **Strict Content Security Policy** – no inline scripts or styles, no third-party requests.

## Game modules

Modules are set up when creating a game and can be changed mid-game with the pencil button:

| Module | Description |
|---|---|
| 🎲 **First player draw** | Right after the game starts it randomly picks and shows who goes first — no extra prompts. |
| 🔢 **Round counter** | −/N/+/∞ controls; a round status like "R 9" in the game header, round limit or endless mode with a "Last round!" reminder. |
| ⏱️ **Game timer** | Clock in the status bar; pauses automatically when you exit to the menu and resumes later — time with the app closed is not counted. |
| ⚑ **Score target** | Set a target score; reaching it flags the player and shows a congratulations dialog. Recalculates after undo/edits too. |
| 🎲 **Dice** | Built-in D6 plus custom dice (text and colored faces, up to 20 faces, up to 6 dice at once), roll history with summing. |

Always available, regardless of modules: quick ±scoring buttons, tap-to-edit entry history, player drag & drop, saved lineups and games.

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
3. Save. The app is published at `https://k-d-s-z.github.io/abax-tracker/`.

### Install on a phone

1. Open https://k-d-s-z.github.io/abax-tracker/ in Chrome, Safari or Brave.
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

`sw.js` contains a `CACHE` constant (e.g. `abax-tracker-v36`). **Bump it on every release** that changes a cached file, otherwise returning users may keep an old version of the assets.

## Tests and CI

GitHub Actions runs on every push:

- **Tests** – Playwright (Chromium) loads the app, checks for console and page errors, and verifies the built-in test harness (`?test`) result.
- **Lighthouse CI** – performance, accessibility, best practices, SEO — with minimum score thresholds.
- **axe** – automated WCAG 2.x A/AA scan across the main screens and dialogs.

## License

Released under the [GNU Affero General Public License v3.0](LICENSE) (AGPL-3.0). If you modify the app and make it available to users over a network, you must offer them the corresponding source code under the same license.

---

<a name="polski"></a>
# 🇵🇱 Polski

**Abax Tracker** to lekka aplikacja **PWA (Progressive Web App)** działająca offline, służąca do liczenia punktów i śledzenia przebiegu gier planszowych.

Bez kont, bez serwera, bez zewnętrznych zależności. Wszystkie dane zostają na Twoim urządzeniu.

## Funkcje

- 📱 **Instalowalna PWA** – działa na telefonach i komputerach, z ikonami maskable dla Androida.
- ⚡ **Offline first** – Service Worker udostępnia aplikację bez połączenia z internetem.
- ➕ **Liczenie punktów** – szybkie przyciski dodawania/odejmowania (konfigurowalne pary) oraz wpisywanie ręczne.
- 🕘 **Historia i cofanie** – każda zmiana punktów jest zapisywana; wpisy można edytować i usuwać, cofnięte przywracać.
- 👥 **Zapisane składy i gry** – ponowne użycie grup graczy, wznawianie zapisanych gier, autozapis niedokończonej partii.
- 💾 **Import / eksport** – eksport do pliku `.json` na urządzeniu; importowane dane są walidowane i sanityzowane. Nic nie jest wysyłane do internetu.
- 🎨 **12 kolorów gracza** – przeciąganie kart zmienia kolejność; układ dopasowuje się do telefonu, tabletu i komputera (4 graczy = siatka 2×2).
- 🌍 Interfejs **po polsku i angielsku**.
- 🔆 **Wake Lock** – opcjonalnie nie wygasza ekranu podczas gry.
- ♿ **Dostępność** – obsługa klawiatury, etykiety ARIA, widoczny fokus, cele dotykowe 44 px, obsługa ograniczonego ruchu i wysokiego kontrastu.
- 🔒 **Ścisła polityka CSP** – bez skryptów i stylów inline, bez zapytań do zewnętrznych serwisów.

## Moduły gry

Moduły ustawiasz przy tworzeniu gry, a w jej trakcie zmienisz je ołówkiem:

| Moduł | Opis |
|---|---|
| 🎲 **Losowanie pierwszego gracza** | Bezpośrednio po starcie gry losuje i pokazuje, kto zaczyna — bez zbędnych pytań. |
| 🔢 **Licznik rund** | Sterowanie −/N/+/∞; status rundy (np. „R 9") w nagłówku gry, limit rund albo tryb nieskończony z przypomnieniem „Ostatnia runda!". |
| ⏱️ **Pomiar czasu gry** | Zegar w pasku statusu; pauzuje automatycznie przy wyjściu do menu i wraca po wznowieniu — czas z zamkniętą aplikacją nie jest doliczany. |
| ⚑ **Cel punktowy** | Podajesz wynik docelowy; jego osiągnięcie oznacza gracza flagą i oknem gratulacji. Przelicza się też po cofnięciu/edycji punktów. |
| 🎲 **Kości** | Wbudowana D6 plus własne kości (tekst i kolory ścianek, do 20 ścianek i 6 kości naraz), historia rzutów z sumowaniem. |

Zawsze dostępne, niezależnie od modułów: szybkie przyciski ±punktów, klikalna historia wpisów, przeciąganie graczy, zapisane składy i gry.

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
3. Zapisz. Aplikacja będzie dostępna pod adresem `https://k-d-s-z.github.io/abax-tracker/`.

### Instalacja na telefonie

1. Otwórz https://k-d-s-z.github.io/abax-tracker/ w Chrome, Safari lub Brave.
2. W menu przeglądarki wybierz **Dodaj do ekranu głównym** lub **Zainstaluj aplikację**.

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

W `sw.js` jest stała `CACHE` (np. `abax-tracker-v36`). **Zmieniaj ją przy każdym wydaniu**, które modyfikuje pliki z cache, w przeciwnym razie powracający użytkownicy mogą zostać przy starej wersji zasobów.

## Testy i CI

GitHub Actions uruchamia się przy każdym pushu:

- **Testy** – Playwright (Chromium) ładuje aplikację, sprawdza błędy konsoli i strony oraz weryfikuje wynik wbudowanego zestawu testów (`?test`).
- **Lighthouse CI** – wydajność, dostępność, dobre praktyki, SEO — z progami minimalnych wyników.
- **axe** – automatyczny skan WCAG 2.x A/AA po głównych ekranach i dialogach.

## Licencja

Projekt jest udostępniony na [licencji GNU Affero General Public License v3.0](LICENSE) (AGPL-3.0). Jeśli zmodyfikujesz aplikację i udostępnisz ją użytkownikom przez sieć, musisz udostępnić im odpowiadający kod źródłowy na tej samej licencji.