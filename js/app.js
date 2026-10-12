"use strict";

/* ================================================================
   1. I18N — MODUŁ TŁUMACZEŃ (osobna sekcja, gotowa do wydzielenia)
   ================================================================ */
const STR = {
  pl: {
    title: "ABAX TRACKER", newGame: "+&nbsp; NOWA GRA", newGameTitle: "NOWA GRA",
    savedLineups: "ZAPISANE SKŁADY",
    noLineups: "Brak zapisanych składów.<br>Stwórz nową grę, a skład zapisze się automatycznie.",
    play: "GRAJ", settings: "Ustawienia", settingsTitle: "USTAWIENIA",
    removeLineup: "Usuń skład", removeLineupQ: "Usunąć skład?",
    playerName: "Nazwa gracza", namePlaceholder: "np. Ania", color: "Kolor:",
    addPlayer: "DODAJ GRACZA", addAtLeastOne: "Dodaj przynajmniej 1 gracza…",
    players: "Gracze", letsGo: "DO BOJU!",
    backToMenu: "Wróć do menu głównego", back: "Wróć", undo: "Cofnij punktację",
    editLineupBtn: "Edytuj skład", end: "Koniec",
    removePlayer: "Usuń gracza", editPlayerBtn: "Edytuj gracza",
    starts: "ZACZYNA", letsPlay: "Gramy!",    finishTitle: "Koniec gry!", finalRanking: "Oto ostateczna klasyfikacja:",
    cancel: "ANULUJ", cancelShort: "Anuluj", endGame: "KONIEC GRY",
    editLineupTitle: "Edycja składu", close: "Zamknij", editPlayerTitle: "Edycja gracza",
    save: "Zapisz", remove: "Usuń", removePlayerQ: "Usunąć gracza?",
    addPoints: "Dodaj punkty", subtractPoints: "Odejmij punkty",
    enterNumber: "Wpisz liczbę punktów", numberPlaceholder: "np. 25",
    add: "Dodaj", subtract: "Odejmij", editEntryTitle: "Edytuj wpis",
    editEntryHint: "Zmodyfikuj lub usuń ten wpis",
    saveWord: "Zapis", exitQ: "Wyjść do menu?",
    exitInfo: "Stan gry zostanie zapisany. Wznowisz ją przyciskiem „WZNÓW GRĘ” na ekranie głównym.",
    exitPending: "Niezatwierdzone punkty (te przed kliknięciem ✓) nie zostaną zapisane.",
    exitBtn: "Wyjdź",
    loadSaveQ: "Wczytać zapis?", loadWarn: "Gra w toku z ekranu głównego zostanie przeniesiona do zapisanych gier (Autozapis).",
    load: "Wczytaj", deleteSaveQ: "Usunąć zapis?", importQ: "Zaimportować dane?",
    importFoundPrefix: "Znaleziono w pliku: ", lineupsWord: "składów", savesWord: "zapisanych gier",
    importWarn: "Obecne dane i ustawienia zostaną nadpisane tymi z pliku.",
    importBtn: "Importuj", savedGames: "ZAPISANE GRY", noSaves: "Brak zapisanych gier.",
    loadSave: "Wczytaj zapisaną grę", deleteSave: "Usuń zapisaną grę",
    playersWord: "graczy", fontSize: "ROZMIAR CZCIONKI",
    fontSmaller: "Zmniejsz rozmiar czcionki", fontBigger: "Zwiększ rozmiar czcionki",
    quickButtons: "PRZYCISKI SZYBKIEGO DODAWANIA", pair: "PARA",
    removePair: "Usuń tę parę przycisków", addPair: "+ DODAJ PARĘ PRZYCISKÓW",
    onCard: "Aktualnie na karcie gracza:",
    buttonsCount1: "przycisków (w tym stałe „+…” / „–…” do wpisania dowolnej liczby).",
    buttonsTip: "Wskazówka: od 3 par przyciski układają się w dwa rzędy (minusy nad plusami), więc karta gracza robi się wyższa. Na małym ekranie zacznij od 1–2 par.",
    backup: "KOPIA ZAPASOWA", exportBtn: "EKSPORTUJ DANE (KOPIA ZAPASOWA)",
    importDataBtn: "IMPORTUJ DANE",
    backupNote: "Eksport zapisuje się jako plik .json na Twoim urządzeniu — nic nie jest wysyłane do internetu.",
    language: "JĘZYK / LANGUAGE",
    langNote: "Język wykrywany jest automatycznie z ustawień urządzenia — możesz go też zmienić ręcznie.",
    errSave: "Błąd zapisu danych",
    nameEmpty: "Imię nie może być puste", numPositive: "Podaj liczbę większą od zera",
    maxPairs: "Maksymalnie {n} pary przycisków", numRange: "Podaj liczbę od 1 do 9999",
    valueExists: "Taka wartość już istnieje",
    exported: "Wyeksportowano dane", exportErr: "Błąd eksportu",
    badFile: "Nieprawidłowy plik", fileReadErr: "Nie udało się odczytać pliku",
    imported: "Zaimportowano dane",
    /* Nowe klucze v10 */
    importTooBig: "Plik jest zbyt duży (max 2 MB)",
    invalidData: "Nieprawidłowa struktura danych w pliku",
    storageCorrupt: "Uszkodzone dane lokalne — odzyskano kopię zapasową",
    storageCorruptNoBak: "Uszkodzone dane lokalne — rozpoczęto od nowa",
    dragHandle: "Przenieś gracza", colorTaken: "zajęty",
    colorNames: ["biały","czerwony","niebieski","zielony","żółty","szary","pomarańczowy","fioletowy","różowy","turkusowy","brązowy","czarny"],
    importSkipped: "Pominięto uszkodzone lub nadmiarowe wpisy: {n}.",
    testsOk: "Testy: {p}/{t} OK", testsFail: "TESTY NIE PRZESZŁY: {p}/{t}",
    resumeTitle: "GRA W TOKU", resumeBtn: "WZNÓW GRĘ", resumeMeta: "Zapisano {d} • wpisów punktacji: {n}", discardResume: "Odrzuć niedokończoną grę",
    discardResumeQ: "Odrzucić niedokończoną grę?", discardResumeWarn: "Wyniki z tej gry zostaną usunięte.",
    discard: "Odrzuć", autosaveName: "Autozapis",
    resumeArchived: "Poprzednia gra trafiła do zapisanych gier (Autozapis)",
    pointsLimit: "Przekroczono limit punktów (±999 999)",
    screenTitle: "EKRAN", keepAwake: "Nie wygaszaj ekranu podczas gry",
    keepAwakeNote: "Ekran nie zgaśnie, dopóki jesteś na ekranie gry. Zwiększa zużycie baterii.",
    keepAwakeUnsupported: "Ta przeglądarka nie obsługuje tej funkcji.",
    updateReady: "Zaktualizowano aplikację do nowej wersji",
    noEntries: "Brak wpisów",
    diceLog: "HISTORIA RZUTÓW",
    dice: "Rzut kostką", rollBtn: "RZUĆ", diceCountQ: "Iloma kośćmi rzucić?", diceTypeQ: "Typ kości",
    diceMore: "Więcej kości", diceFewer: "Mniej kości",
    diceNote: "Własne typy kości (liczby, napisy, kolory) dodasz w Ustawieniach.",
    diceSum: "Suma", diceResult: "Wynik", diceSection: "KOŚCI", diceDefaultNote: "domyślna",
    diceSettingsNote: "Własne kości pojawią się na liście przy rzucie na ekranie punktacji. Kość D6 (1–6) jest zawsze dostępna.",
    addDie: "+ DODAJ KOŚĆ", newDieTitle: "Nowa kość", editDieTitle: "Edycja kości",
    dieName: "Nazwa kości", dieNamePlaceholder: "np. Kość akcji", dieNameEmpty: "Podaj nazwę kości",
    facesCount: "Liczba ścianek", facesWord: "ścianek", faceN: "Ścianka {n}", faceColor: "Kolor ścianki {n}", noColor: "brak koloru",
    facesHint: "Wpisz liczby lub napisy (do 8 znaków). Kolor ścianki jest opcjonalny — dotknij pola koloru, aby go zmienić.",
    editDieBtn: "Edytuj kość", deleteDieBtn: "Usuń kość", deleteDieQ: "Usunąć kość?", maxDice: "Maksymalnie {n} własnych kości",

    /* Moduły gry (v11): losowanie gracza, licznik rund, pomiar czasu, cel punktowy, kość */
    modulesSection: "MODUŁY GRY",
    modulesHint: "Dotknij karty, aby włączyć lub wyłączyć moduł. Zestaw możesz też zmienić ołówkiem w trakcie gry.",
    moduleDraw: "LOSOWANIE PIERWSZEGO GRACZA", moduleRounds: "LICZNIK RUND", moduleTimer: "POMIAR CZASU", moduleTarget: "CEL PUNKTOWY", moduleDice: "KOŚĆ",
    moduleOn: "włączony", moduleOff: "wyłączony",
    drawModNote: "Przy starcie gra od razu pokaże wylosowanego gracza, który zaczyna.",
    diceModNote: "Ikona kości pojawi się w pasku ekranu gry.",
    roundsCountQ: "Ile rund?", roundsInf: "∞", roundsInfLabel: "Bez limitu rund",
    nextRound: "Następna runda", nextRoundQ: "Przejść do następnej rundy?",
    lastRoundInfo: "Ostatnia runda!", overRoundInfo: "Runda {n} — gra trwa dalej",
    targetQ: "Jaki cel punktowy?", targetPlaceholder: "np. 100", targetWord: "Cel",
    targetReachedTitle: "CEL OSIĄGNIĘTY!", targetReachedText: "osiąga cel {v} punktów! Możecie grać dalej.",
    ok: "OK",
    gameTime: "Czas gry", timerNote: "Zegar liczy od startu gry. Wyjście do menu zatrzymuje zegar. Po wznowieniu gry pomiar czasu będzie kontynuowany od momentu zatrzymania.",
    undoToast: "Cofnięto: {x} — {name}", undoRestore: "PRZYWRÓĆ",
    newPlayerTitle: "NOWY GRACZ", chooseColor: "Wybierz kolor:", nextStep: "DALEJ",
    defaultModulesSection: "ZESTAW MODUŁÓW DOMYŚLNYCH",
    defaultModulesNote: "Te moduły będą wstępnie włączone przy tworzeniu nowej gry. W każdej grze możesz je zmienić przed startem oraz ołówkiem w trakcie gry.",
    gameModulesTitle: "MODUŁY"
  },
  en: {
    title: "ABAX TRACKER", newGame: "+&nbsp; NEW GAME", newGameTitle: "NEW GAME",
    savedLineups: "SAVED LINEUPS",
    noLineups: "No saved lineups yet.<br>Start a new game and the lineup will be saved automatically.",
    play: "PLAY", settings: "Settings", settingsTitle: "SETTINGS",
    removeLineup: "Delete lineup", removeLineupQ: "Delete lineup?",
    playerName: "Player name", namePlaceholder: "e.g. Anna", color: "Color:",
    addPlayer: "ADD PLAYER", addAtLeastOne: "Add at least 1 player…",
    players: "Players", letsGo: "LET'S GO!",
    backToMenu: "Back to main menu", back: "Back", undo: "Undo score change",
    editLineupBtn: "Edit lineup", end: "End",
    removePlayer: "Remove player", editPlayerBtn: "Edit player",
    starts: "STARTS", letsPlay: "Let's play!",
    finishTitle: "Game over!", finalRanking: "Final standings:",
    cancel: "CANCEL", cancelShort: "Cancel", endGame: "END GAME",
    editLineupTitle: "Edit lineup", close: "Close", editPlayerTitle: "Edit player",
    save: "Save", remove: "Delete", removePlayerQ: "Remove player?",
    addPoints: "Add points", subtractPoints: "Subtract points",
    enterNumber: "Enter the number of points", numberPlaceholder: "e.g. 25",
    add: "Add", subtract: "Subtract", editEntryTitle: "Edit entry",
    editEntryHint: "Modify or delete this entry",
    saveWord: "Save", exitQ: "Back to menu?",
    exitInfo: "The game state will be saved. You can resume it with the “RESUME GAME” button on the home screen.",
    exitPending: "Unconfirmed points (before tapping ✓) will not be saved.",
    exitBtn: "Leave",
    loadSaveQ: "Load this save?", loadWarn: "The game in progress on the home screen will be moved to saved games (Autosave).",
    load: "Load", deleteSaveQ: "Delete save?", importQ: "Import data?",
    importFoundPrefix: "Found in the file: ", lineupsWord: "lineups", savesWord: "saved games",
    importWarn: "Current data and settings will be overwritten with the contents of this file.",
    importBtn: "Import", savedGames: "SAVED GAMES", noSaves: "No saved games.",
    loadSave: "Load saved game", deleteSave: "Delete saved game",
    playersWord: "players", fontSize: "FONT SIZE",
    fontSmaller: "Decrease font size", fontBigger: "Increase font size",
    quickButtons: "QUICK-ADD BUTTONS", pair: "PAIR",
    removePair: "Remove this button pair", addPair: "+ ADD BUTTON PAIR",
    onCard: "Currently on a player card:",
    buttonsCount1: "buttons (including the fixed “+…” / “–…” for entering any number).",
    buttonsTip: "Tip: from 3 pairs the buttons are arranged in two rows (minus above plus), so the player card gets taller. On a small screen start with 1–2 pairs.",
    backup: "BACKUP", exportBtn: "EXPORT DATA (BACKUP)",
    importDataBtn: "IMPORT DATA",
    backupNote: "The export is saved as a .json file on your device — nothing is sent to the internet.",
    language: "LANGUAGE / JĘZYK",
    langNote: "The language is detected automatically from your device settings — you can also change it manually.",
    errSave: "Error saving data",
    nameEmpty: "Name cannot be empty", numPositive: "Enter a number greater than zero",
    maxPairs: "Maximum of {n} button pairs", numRange: "Enter a number from 1 to 9999",
    valueExists: "This value already exists",
    exported: "Data exported", exportErr: "Export error",
    badFile: "Invalid file", fileReadErr: "Could not read the file",
    imported: "Data imported",
    importTooBig: "File too large (max 2 MB)",
    invalidData: "Invalid data structure in file",
    storageCorrupt: "Corrupted local data — backup recovered",
    storageCorruptNoBak: "Corrupted local data — started fresh",
    dragHandle: "Move player", colorTaken: "taken",
    colorNames: ["white","red","blue","green","yellow","grey","orange","purple","pink","cyan","brown","black"],
    importSkipped: "Skipped damaged or surplus entries: {n}.",
    testsOk: "Tests: {p}/{t} OK", testsFail: "TESTS FAILED: {p}/{t}",
    resumeTitle: "GAME IN PROGRESS", resumeBtn: "RESUME GAME", resumeMeta: "Saved {d} • score entries: {n}", discardResume: "Discard unfinished game",
    discardResumeQ: "Discard unfinished game?", discardResumeWarn: "Scores from this game will be deleted.",
    discard: "Discard", autosaveName: "Autosave",
    resumeArchived: "The previous game was moved to saved games (Autosave)",
    pointsLimit: "Points limit exceeded (±999,999)",
    screenTitle: "SCREEN", keepAwake: "Keep the screen on during the game",
    keepAwakeNote: "The screen will not turn off while you are on the game screen. Uses more battery.",
    keepAwakeUnsupported: "This browser does not support this feature.",
    updateReady: "The app was updated to a new version",
    noEntries: "No entries",
    diceLog: "ROLL HISTORY",
    dice: "Roll dice", rollBtn: "ROLL", diceCountQ: "How many dice to roll?", diceTypeQ: "Dice type",
    diceMore: "More dice", diceFewer: "Fewer dice",
    diceNote: "You can add your own dice types (numbers, text, colors) in Settings.",
    diceSum: "Total", diceResult: "Result", diceSection: "DICE", diceDefaultNote: "default",
    diceSettingsNote: "Your own dice appear in the list when rolling on the scoring screen. The D6 (1–6) is always available.",
    addDie: "+ ADD DIE", newDieTitle: "New die", editDieTitle: "Edit die",
    dieName: "Die name", dieNamePlaceholder: "e.g. Action die", dieNameEmpty: "Enter a die name",
    facesCount: "Number of faces", facesWord: "faces", faceN: "Face {n}", faceColor: "Color of face {n}", noColor: "no color",
    facesHint: "Enter numbers or text (up to 8 characters). Face color is optional — tap the color box to change it.",
    editDieBtn: "Edit die", deleteDieBtn: "Delete die", deleteDieQ: "Delete die?", maxDice: "Maximum of {n} custom dice",

    /* Game modules (v11): first player draw, round counter, time tracking, score target, dice */
    modulesSection: "GAME MODULES",
    modulesHint: "Tap a card to enable or disable a module. You can also change the set with the pencil during the game.",
    moduleDraw: "FIRST PLAYER DRAW", moduleRounds: "ROUND COUNTER", moduleTimer: "TIME TRACKING", moduleTarget: "SCORE TARGET", moduleDice: "DICE",
    moduleOn: "enabled", moduleOff: "disabled",
    drawModNote: "When the game starts, the drawn starting player is shown right away.",
    diceModNote: "The dice icon will appear in the game screen bar.",
    roundsCountQ: "How many rounds?", roundsInf: "∞", roundsInfLabel: "Unlimited rounds",
    nextRound: "Next round", nextRoundQ: "Move to the next round?",
    lastRoundInfo: "Last round!", overRoundInfo: "Round {n} — the game continues",
    targetQ: "What's the score target?", targetPlaceholder: "e.g. 100", targetWord: "Target",
    targetReachedTitle: "TARGET REACHED!", targetReachedText: "reaches the target of {v} points! You can keep playing.",
    ok: "OK",
    gameTime: "Game time", timerNote: "The clock runs from the game start. Leaving for the menu stops the clock. Resuming the game continues the measurement from the moment it stopped.",
    undoToast: "Undone: {x} — {name}", undoRestore: "RESTORE",
    newPlayerTitle: "NEW PLAYER", chooseColor: "Choose a color:", nextStep: "NEXT",
    defaultModulesSection: "DEFAULT MODULE SET",
    defaultModulesNote: "These modules will be pre-enabled when creating a new game. You can change them before each game and with the pencil during play.",
    gameModulesTitle: "MODULES"
  }
};

/* ================================================================
   2. IKONY
   ================================================================ */
const ICONS = {
  move:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',
  back:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5 L8 12 L15 19"/></svg>',
  undo:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10 h9 a5 5 0 0 1 0 10 h-3"/><path d="M4 10 L8 6 M4 10 L8 14"/></svg>',
  pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 3 L21 7 L10 18 L5 19 L6 14 Z"/></svg>',
  trash:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7 h16"/><path d="M9 7 V4 h6 v3"/><path d="M6 7 l1 13 h10 l1-13"/><path d="M10 11 v5 M14 11 v5"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  dice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="9" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="9" cy="15" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="15" r="1" fill="currentColor" stroke="none"/></svg>',
  load: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v10"/><path d="M8 9l4 4 4-4"/><path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7 v5 l3.5 2"/></svg>'
};

/* ================================================================
   3. KONFIGURACJA, LIMITY I BEZPIECZNY STORAGE
   - wersjonowanie schematu + migracja starych danych
   - kopia zapasowa kluczy (.bak) przed nadpisaniem
   - kwarantanna uszkodzonych danych (.corrupt) i odzyskiwanie
   ================================================================ */
const PLAYER_COLORS = ["#FFFFFF","#E53935","#1E88E5","#43A047","#FDD835","#757575","#FB8C00","#8E24AA","#D81B60","#00ACC1","#6D4C41","#000000"];
/* Poprzednia paleta (do v13) — kolor ze starego zapisu mapujemy na ten sam indeks nowej palety */
const LEGACY_PLAYER_COLORS = ["#e2e8f0","#38bdf8","#0ea5e9","#34d399","#10b981","#facc15","#fb923c","#f43f5e","#f472b6","#a78bfa","#8b5cf6","#0a0a0a"];
const cix = c => { let i = PLAYER_COLORS.indexOf(c); return i >= 0 ? i : LEGACY_PLAYER_COLORS.indexOf(c); };
const MAX_BUTTON_PAIRS = 4;
const FONT_MIN = 0.8, FONT_MAX = 1.6;
const SCHEMA_VERSION = 2;

/* Limity bezpieczeństwa (import + zapisy lokalne) */
const LIMITS = {
  importBytes: 2 * 1024 * 1024, // 2 MB
  groups: 50,
  saves: 50,
  players: PLAYER_COLORS.length, // 12
  name: 20,
  saveName: 40,
  history: 500,
  scoreAbs: 999999,
  diceTypes: 10,        // własne typy kości (poza wbudowaną D6)
  diceFacesMin: 2, diceFacesMax: 20,
  diceCount: 6,         // ile kości naraz
  dieName: 20, faceText: 8,
  diceLog: 50,          // tyle ostatnich rzutów pamięta otwarte okno rzutu
  roundsMax: 999,       // licznik rund: maksymalna planowana liczba rund (0 = ∞)
  targetMax: 999999     // cel punktowy: górny limit (= limit punktów)
};

/* Wbudowana, zawsze dostępna kość D6 (1–6). Własne kości: settings.dice = [{id, name, faces:[{t, c}]}],
   gdzie t = napis na ściance (liczba lub tekst), c = kolor z PLAYER_COLORS albo "" (brak). */
const DEFAULT_DIE = { id: "d6", name: "D6", faces: [1, 2, 3, 4, 5, 6].map(n => ({ t: String(n), c: "" })) };

const LS_KEY = "licznik_punktow_v1";
const LS_SETTINGS_KEY = "licznik_punktow_settings_v1";
const LS_SAVES_KEY = "licznik_punktow_saves_v1";
const LS_GAME_KEY = "licznik_punktow_game_v1"; // autozapis trwającej gry

const STORE = { recovered: false, recoveredFromBak: false };

/* Odczyt z automatyczną migracją starych (surowych) danych i kwarantanną uszkodzonych */
function readStore(key) {
  let raw = null;
  try { raw = localStorage.getItem(key); } catch (e) { return null; }
  if (raw === null) {
    /* próba odzyskania z kopii .bak (np. gdy zapis zakończył się awaryjnie) */
    let bak = null;
    try { bak = localStorage.getItem(key + ".bak"); } catch (e) {}
    if (bak !== null) {
      const d = tryParseEnvelope(bak, key);
      if (d !== null) { STORE.recovered = true; STORE.recoveredFromBak = true; return d; }
    }
    return null;
  }
  const parsed = tryParseEnvelope(raw, key);
  if (parsed === undefined) return null; // kwarantanna — dane uszkodzone
  return parsed;
}

function tryParseEnvelope(raw, key) {
  let obj;
  try { obj = JSON.parse(raw); } catch (e) { quarantine(key, raw); return undefined; }
  if (obj && typeof obj === "object" && obj.__v === SCHEMA_VERSION) return obj.d; // aktualny format
  /* starszy format: surowy ładunek — migrujemy do koperty */
  try {
    localStorage.setItem(key, JSON.stringify({ __v: SCHEMA_VERSION, d: obj }));
    try { localStorage.setItem(key + ".bak", raw); } catch (e2) {}
  } catch (e) {}
  return obj; // zwracamy dane (mogą być null przy pierwszym uruchomieniu)
}

function quarantine(key, raw) {
  try { localStorage.setItem(key + ".corrupt", raw); } catch (e) {}
  try { localStorage.removeItem(key); } catch (e) {}
  STORE.recovered = true;
}

/* Zapis z kopią zapasową poprzedniej wersji; zwraca false przy błędzie (np. quota) */
function writeStore(key, data, backup = true) {
  const payload = JSON.stringify({ __v: SCHEMA_VERSION, d: data });
  try {
    const old = backup ? localStorage.getItem(key) : null;
    if (old !== null) { try { localStorage.setItem(key + ".bak", old); } catch (e2) {} }
    localStorage.setItem(key, payload);
    return true;
  } catch (e) {
    toast(t("errSave"));
    return false;
  }
}

/* ================================================================
   4. STAN APLIKACJI
   ================================================================ */
function detectLang() {
  return /^pl/i.test(navigator.language || "pl") ? "pl" : "en";
}
function t(key) {
  const lang = (S && S.settings && S.settings.lang) || "pl";
  const dict = STR[lang] || STR.pl;
  return dict[key] !== undefined ? dict[key] : (STR.pl[key] !== undefined ? STR.pl[key] : key);
}
function locale() { return (S.settings.lang === "en") ? "en-GB" : "pl-PL"; }

/* Walidacja ustawień (używana przy ładowaniu i imporcie) */
function sanitizeSettings(d, fallbackLang) {
  if (!d || typeof d !== "object") {
    return { fontScale: 1, buttonValues: [1, 10], lang: fallbackLang || detectLang(), keepAwake: false, dice: [], diceType: DEFAULT_DIE.id, diceCount: 1, defaultModules: defaultModules(null) };
  }
  const fs = typeof d.fontScale === "number" && Number.isFinite(d.fontScale) ? d.fontScale : 1;
  let bv = [1, 10];
  if (Array.isArray(d.buttonValues)) {
    const clean = [];
    for (const v of d.buttonValues) {
      const n = Math.trunc(Number(v));
      if (Number.isFinite(n) && n > 0 && n <= 9999 && !clean.includes(n)) clean.push(n);
      if (clean.length >= MAX_BUTTON_PAIRS) break;
    }
    if (clean.length) bv = clean;
  }
  const lang = (d.lang === "pl" || d.lang === "en") ? d.lang : (fallbackLang || detectLang());
  const dice = sanitizeDice(d.dice);
  const diceType = (typeof d.diceType === "string" && dice.some(x => x.id === d.diceType)) ? d.diceType : DEFAULT_DIE.id;
  const dc = Math.trunc(Number(d.diceCount));
  const diceCount = (dc >= 1 && dc <= LIMITS.diceCount) ? dc : 1;
  return { fontScale: Math.max(FONT_MIN, Math.min(FONT_MAX, fs)), buttonValues: bv, lang: lang, keepAwake: d.keepAwake === true, dice: dice, diceType: diceType, diceCount: diceCount, defaultModules: defaultModules(d.defaultModules) };
}

/* --- Moduły gry (v11): licznik rund, cel punktowy, timer ---
   Zestaw domyślny w ustawieniach: tylko flagi on/off.
   Stan modułów w grze: rounds {on, count(0=∞), current}, target {on, value},
   timer {on, elapsed(ms), startedAt(ms|null)} — przechodzi sanityzację jak każde dane. */
function defaultModules(raw) {
  const r = (raw && typeof raw === "object") ? raw : {};
  const b = k => r[k] === true;
  return { draw: b("draw"), rounds: b("rounds"), timer: b("timer"), target: b("target"), dice: b("dice") };
}
function sanitizeModules(raw) {
  const r = (raw && typeof raw === "object") ? raw : {};
  const num = (v, min, max) => { const n = Math.trunc(Number(v)); return Number.isFinite(n) && n >= min && n <= max ? n : null; };
  const roundsOn = r.rounds && typeof r.rounds === "object" ? r.rounds : {};
  const rc = num(roundsOn.count, 0, LIMITS.roundsMax);
  const rcur = num(roundsOn.current, 1, LIMITS.roundsMax * 2);
  const tg = r.target && typeof r.target === "object" ? r.target : {};
  const tv = num(tg.value, 1, LIMITS.targetMax);
  const tm = r.timer && typeof r.timer === "object" ? r.timer : {};
  const tel = num(tm.elapsed, 0, 1000 * 60 * 60 * 24 * 365); // do roku gry ciągłej
  const tst = tm.startedAt === null || tm.startedAt === undefined ? null : (Number.isFinite(Number(tm.startedAt)) ? Math.max(0, Math.trunc(Number(tm.startedAt))) : null);
  return {
    draw: { on: r.draw && typeof r.draw === "object" ? r.draw.on === true : false },
    rounds: { on: roundsOn.on === true, count: rc === null ? 0 : rc, current: rcur === null ? 1 : rcur },
    target: { on: tg.on === true && tv !== null, value: tv === null ? 100 : tv },
    timer: { on: tm.on === true, elapsed: tel === null ? 0 : tel, startedAt: tst },
    dice: { on: r.dice && typeof r.dice === "object" ? r.dice.on === true : false }
  };
}

/* Własne kości: 2–20 ścianek, napis do 8 znaków (pusty → numer ścianki), kolor tylko z palety. */
function sanitizeDice(raw) {
  if (!Array.isArray(raw)) return [];
  const out = [], seen = new Set([DEFAULT_DIE.id]); // id "d6" zarezerwowane dla kości wbudowanej
  for (const x of raw) {
    if (out.length >= LIMITS.diceTypes) break;
    if (!x || typeof x !== "object" || !Array.isArray(x.faces)) continue;
    if (x.faces.length < LIMITS.diceFacesMin || x.faces.length > LIMITS.diceFacesMax) continue;
    const name = (typeof x.name === "string" ? x.name.trim() : "").slice(0, LIMITS.dieName);
    if (!name) continue;
    const faces = x.faces.map((f, i) => {
      const o = (f && typeof f === "object") ? f : { t: f };
      let tx = (typeof o.t === "string" || typeof o.t === "number") ? String(o.t).trim().slice(0, LIMITS.faceText) : "";
      if (!tx) tx = String(i + 1);
      const ci = cix(o.c);
      return { t: tx, c: ci >= 0 ? o.c : "" };
    });
    out.push({ id: uniqueId(x.id, seen), name: name, faces: faces });
  }
  return out;
}

/* Dane z localStorage przechodzą TĘ SAMĄ sanityzację co import (ochrona przed
   uszkodzonym lub ręcznie zmodyfikowanym storage). */
const S = {
  screen: "home",
  groups: sanitizeGroups(readStore(LS_KEY)),
  settings: sanitizeSettings(readStore(LS_SETTINGS_KEY)),
  saves: sanitizeSaves(readStore(LS_SAVES_KEY)),
  players: [],
  history: [],
  setupName: "",
  setupColor: null,
  pending: {},          // pending[playerId] = suma niezatwierdzonych zmian
  dialog: null,
  animScore: null,
  editDraft: null,
  setupModules: null,  // szkic modułów na ekranie NOWA GRA (rounds/target/timer)
  modules: null,       // aktywne moduły w grze (sanitizeModules)
  dieDraft: null,       // szkic edytowanej kości (Ustawienia → Kości)
  pendingImport: null,  // ZAWSZE dane po sanityzacji (validateImport)
  resume: loadResume(), // niedokończona gra odzyskana z autozapisu (albo null)
  lastFocus: null,      // element, do którego wraca fokus po zamknięciu dialogu
  lastScreen: null,     // do wykrywania, czy można zrobić render cząstkowy
  cardCache: null       // cache HTML kart graczy (keyed diff na ekranie gry)
};

const app = document.getElementById("app");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* Klasa koloru gracza (.c0–.c7 w CSS). Kolor NIGDY nie trafia do HTML jako wartość —
   tylko jako indeks z białej listy, więc nie da się wstrzyknąć stylu. */
const cc = color => "c" + Math.max(0, cix(color));

/* Atrybuty akcji: data-a + opcjonalnie data-id / data-v (zawsze escapowane) */
const act = (name, o = {}) =>
  'data-a="' + name + '"' + ("id" in o ? ' data-id="' + esc(o.id) + '"' : "") + ("v" in o ? ' data-v="' + esc(o.v) + '"' : "");

const clone = typeof structuredClone === "function" ? structuredClone : x => JSON.parse(JSON.stringify(x));

/* Krótki identyfikator wpisu historii (unikalny w obrębie listy) — UUID zajmował ponad 2× więcej miejsca.
   Starsze, długie identyfikatory pozostają ważne: nigdzie nie są parsowane. */
function newHid(list) {
  let h;
  do { h = Math.random().toString(36).slice(2, 8); } while (h.length < 6 || list.some(x => x.hid === h));
  return h;
}

function newId() {
  try { if (crypto.randomUUID) return crypto.randomUUID(); } catch (e) {}
  try { return Array.from(crypto.getRandomValues(new Uint8Array(16)), b => b.toString(16).padStart(2, "0")).join(""); } catch (e) {}
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function saveGroups(g) { writeStore(LS_KEY, g); }
function saveSettings() { writeStore(LS_SETTINGS_KEY, S.settings, false); }
function saveSaves(list) { writeStore(LS_SAVES_KEY, list); }

function applyFontScale() { document.documentElement.style.setProperty("--fs-mult", S.settings.fontScale); }
function applyLang() { document.documentElement.lang = S.settings.lang; }

/* Toast to osobny element poza #app: nie wywołuje render(), więc nie przebudowuje widoku ani dialogów. */
let toastTimer = 0;
function toast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.hidden = false;
  el.style.animation = "none"; void el.offsetWidth; el.style.animation = ""; // restart animacji
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2600);
}

/* Toast cofnięcia: informacja, CO zostało cofnięte + przycisk „PRZYWRÓĆ” (anulowanie cofnięcia).
   Gaśnie po 5 s. Osobny element — nie koliduje ze zwykłym tostem. */
let undoToastTimer = 0;
function undoToast(msg, entry) {
  let el = document.getElementById("undoToast");
  if (!el) {
    el = document.createElement("div");
    el.id = "undoToast";
    el.className = "toast toast-undo";
    document.body.appendChild(el);
  }
  el.textContent = "";
  const txt = document.createElement("span");
  txt.textContent = msg;
  const btn = document.createElement("button");
  btn.className = "toast-undo-btn";
  btn.textContent = t("undoRestore");
  btn.addEventListener("click", function () {
    clearTimeout(undoToastTimer);
    el.hidden = true;
    if (Logic.applyPoints(S, entry.id, entry.delta)) {
      if (S.modules && S.modules.target.on) applyTargetFlags();
      render();
      persistGame();
    }
  });
  el.append(txt, btn);
  el.hidden = false;
  el.style.animation = "none"; void el.offsetWidth; el.style.animation = "";
  clearTimeout(undoToastTimer);
  undoToastTimer = setTimeout(() => { el.hidden = true; }, 5000);
}

/* --- Blokada wygaszania ekranu (Screen Wake Lock) — opcja w Ustawieniach, tylko na ekranie gry ---
   syncWakeLock() jest idempotentne: porównuje stan pożądany z faktycznym i wykonuje co najwyżej
   jedną operację naraz; po jej zakończeniu sprawdza się ponownie. Po błędzie (np. oszczędzanie
   baterii) nie ponawia w pętli — próba wraca przy zmianie ustawienia lub widoczności strony. */
let wakeLock = null, wakeBusy = false, wakeFailed = false;
function syncWakeLock() {
  if (!navigator.wakeLock || wakeBusy) return;
  const want = S.settings.keepAwake && S.screen === "game" && document.visibilityState === "visible";
  if (want === (wakeLock !== null) || (want && wakeFailed)) return;
  wakeBusy = true;
  const job = want
    ? navigator.wakeLock.request("screen").then(l => { wakeLock = l; l.addEventListener("release", () => { if (wakeLock === l) wakeLock = null; }); })
    : wakeLock.release().then(() => { wakeLock = null; });
  job.catch(() => { if (want) wakeFailed = true; else wakeLock = null; }).then(() => { wakeBusy = false; syncWakeLock(); });
}

/* --- Kości ---
   randInt(n): równomierne losowanie 0..n-1 (crypto + odrzucanie, bez obciążenia modulo). */
function randInt(n) {
  try {
    const lim = Math.floor(0x100000000 / n) * n, buf = new Uint32Array(1);
    do { crypto.getRandomValues(buf); } while (buf[0] >= lim);
    return buf[0] % n;
  } catch (e) { return Math.floor(Math.random() * n); }
}
function diceTypes() { return [DEFAULT_DIE].concat(S.settings.dice); }
function currentDie() { return diceTypes().find(d => d.id === S.settings.diceType) || DEFAULT_DIE; }
function facesPreview(d) { return d.faces.slice(0, 8).map(f => f.t).join(" ") + (d.faces.length > 8 ? " …" : ""); }
/* Suma tylko wtedy, gdy WSZYSTKIE wylosowane ścianki są liczbami (także z „−” Unicode) */
function diceSum(die, idxs) {
  const vals = idxs.map(i => die.faces[i].t.replace(/\u2212/g, "-"));
  return vals.every(v => /^[-+]?\d+$/.test(v)) ? vals.reduce((a, v) => a + parseInt(v, 10), 0) : null;
}
function diceTilesHtml(die, idxs) {
  const sz = idxs.length === 1 ? " xl" : idxs.length <= 3 ? " lg" : ""; // mało kości = duży wynik, widoczny z drugiej strony stołu
  return idxs.map(i => { const f = die.faces[i]; return `<span class="die-tile${sz}${f.c ? " col " + cc(f.c) : ""}${f.t.length > 3 ? " long" : ""}">${esc(f.t)}</span>`; }).join("");
}
function diceInfoHtml(die, idxs) {
  if (!idxs || !idxs.length) return "";
  const sr = t("diceResult") + ": " + idxs.map(i => die.faces[i].t).join(", ");
  const sum = idxs.length > 1 ? diceSum(die, idxs) : null;
  return `<span class="sr-only">${esc(sr)}. </span>` + (sum !== null ? `<span>${t("diceSum")}: ${sum}</span>` : "");
}
/* Historia rzutów żyje tylko w otwartym oknie (S.dialog.log) — zamknięcie okna ją czyści.
   Ostatni rzut widać duży nad listą, więc lista pokazuje wcześniejsze (a gdy wynik jest wyczyszczony — wszystkie). */
function diceLogHtml(d) {
  const rows = (d.results ? d.log.slice(0, -1) : d.log).slice().reverse();
  if (!rows.length) return "";
  return `<p class="tiny mt10">${t("diceLog")}</p><ul class="dice-log">${rows.map(r => `<li class="log-row">
      <div class="log-head"><span>#${r.n} · ${esc(r.name)}${r.items.length > 1 ? " ×" + r.items.length : ""}</span>${r.sum !== null ? `<span class="log-sum">${t("diceSum")}: ${r.sum}</span>` : ""}</div>
      <div class="log-faces">${r.items.map(f => `<span class="die-tile mini${f.c ? " col " + cc(f.c) : ""}">${esc(f.t)}</span>`).join("")}</div>
    </li>`).join("")}</ul>`;
}
function faceColorLabel(i, c) {
  const idx = cix(c);
  return t("faceColor").replace("{n}", i + 1) + ": " + (idx >= 0 ? t("colorNames")[idx] : t("noColor"));
}

/* Wartości szybkich przycisków, zawsze posortowane rosnąco (kopia) */
function buttonValues() { return S.settings.buttonValues.slice().sort((a, b) => a - b); }

/* --- Timer (moduł gry) ---
   elapsed + startedAt: zegar można zatrzymać (wyjście do menu) i wznowić bez utraty czasu.
   timerMs() zwraca czas od startu gry; label w minutach (65'), powyżej godziny 1 h 05 min. */
function timerRunning() { return !!(S.modules && S.modules.timer.on && S.modules.timer.startedAt); }
function timerMs() {
  const m = S.modules && S.modules.timer;
  if (!m) return 0;
  return Math.max(0, (m.elapsed || 0) + (m.startedAt ? Date.now() - m.startedAt : 0));
}
function timerStart() { const m = S.modules && S.modules.timer; if (m && m.on && !m.startedAt) m.startedAt = Date.now(); }
function timerStop() { const m = S.modules && S.modules.timer; if (m && m.startedAt) { m.elapsed = timerMs(); m.startedAt = null; } }
function timerLabel(ms) {
  const min = Math.floor(ms / 60000);
  if (min < 60) return min + "'";
  return Math.floor(min / 60) + " h " + String(min % 60).padStart(2, "0") + " min";
}
/* Lekkie odświeżanie timera w pasku statusu (bez render() — nie przebudowuje kart ani fokusu).
   Aktualizujemy tylko etykietę, żeby nie nadpisać ikony zegara w #timerStat. */
setInterval(function () {
  const el = document.getElementById("timerStatLabel");
  if (el && timerRunning()) el.textContent = timerLabel(timerMs());
}, 5000);

/* --- Licznik rund (moduł gry) ---
   count = 0 oznacza brak limitu (∞). current może przekroczyć count (10/9 — gra toczy się dalej).
   Status pokazuje sam numer rundy (R 9); limit zostaje w konfiguracji i toastach. */
function roundsLabel() {
  const r = S.modules && S.modules.rounds;
  if (!r || !r.on) return "";
  return "R " + r.current;
}
function roundChangedToast(prev) {
  const r = S.modules && S.modules.rounds;
  if (!r || !r.on || !r.count) return;
  if (r.current === r.count) toast(t("lastRoundInfo"));
  else if (r.current > r.count) toast(t("overRoundInfo").replace("{n}", r.current));
}

/* --- Cel punktowy (moduł gry): oznacza gracza po osiągnięciu limitu, nie przerywa gry --- */
function checkTargetHit(p) {
  const m = S.modules && S.modules.target;
  if (!m || !m.on || !p || p.targetHit) return;
  if (Math.trunc(p.score) >= m.value) {
    p.targetHit = true;
    if (S.dialog) toast(p.name + ": " + t("targetReachedTitle"));
    else S.dialog = { type: "targetReached", name: p.name, value: m.value };
  }
}

/* --- Autozapis trwającej gry (przeżywa odświeżenie i ubicie karty przez system) ---
   Zapisujemy tylko grę z co najmniej jednym wpisem w historii. Przy starcie dane przechodzą
   tę samą sanityzację co zapisy/import. Zapis bez zmian (identyczny JSON) jest pomijany. */
let lastPersist = "", lastPersistAt = 0;
/* Migawka gry do wznowienia: dane przechodzą tę samą sanityzację co zapisy. null, gdy brak wpisów punktacji. */
function toResume(players, history, savedAt, modules) {
  const e = sanitizeSaves([{ name: "x", players: players, history: history, savedAt: savedAt, modules: modules || null }])[0];
  return e && e.history.length ? { players: e.players, history: e.history, savedAt: e.savedAt, modules: e.modules } : null;
}
function loadResume() {
  const d = readStore(LS_GAME_KEY);
  return d && typeof d === "object" ? toResume(d.players, d.history, d.savedAt, d.modules) : null;
}
function persistGame() {
  if (S.screen !== "game") return;
  if (!S.players.length || !S.history.length) { clearPersistedGame(); return; }
  const snap = JSON.stringify({ players: S.players, history: S.history, modules: S.modules });
  if (snap === lastPersist) return;
  const savedAt = Date.now();
  if (writeStore(LS_GAME_KEY, { players: S.players, history: S.history, modules: S.modules, savedAt }, false)) { lastPersist = snap; lastPersistAt = savedAt; }
}
function clearPersistedGame() {
  lastPersist = ""; lastPersistAt = 0;
  try { localStorage.removeItem(LS_GAME_KEY); } catch (e) {}
}
/* Gdy zaczynamy inną grę, niedokończona gra nie przepada — trafia do zapisanych gier (dane są już po sanityzacji). */
function archiveResume() {
  const r = S.resume;
  if (!r) return;
  S.resume = null;
  clearPersistedGame();
  S.saves.unshift({ id: newId(), name: t("autosaveName") + " – " + new Date(r.savedAt).toLocaleDateString(locale()), savedAt: r.savedAt, players: r.players, history: r.history, modules: r.modules || null });
  if (S.saves.length > LIMITS.saves) S.saves.length = LIMITS.saves;
  saveSaves(S.saves);
  toast(t("resumeArchived"));
}

/* ================================================================
   5. LOGIC — CZYSTY MODEL DANYCH (bez DOM, testowalny)
   ================================================================ */
const Logic = {
  /* Walidacja liczby punktów: zwraca dodatnią liczbę całkowitą albo null.
     Ujednolica obsługę pustych, zerowych, ujemnych i niecałkowitych wartości. */
  parsePoints(v) {
    if (v === null || v === undefined) return null;
    const s = String(v).trim();
    if (!/^\d+$/.test(s)) return null; // tylko cyfry; "" i "-5" odrzucone
    const n = parseInt(s, 10);
    if (!Number.isFinite(n) || n <= 0 || n > LIMITS.scoreAbs) return null;
    return n;
  },
  findPlayer(st, id) { return st.players.find(x => String(x.id) === String(id)) || null; },
  /* Zatwierdzenie punktów: score + delta, wpis do historii. Idempotentne wobec delta=0. */
  applyPoints(st, id, delta) {
    delta = Math.trunc(Number(delta));
    if (!delta || Math.abs(delta) > LIMITS.scoreAbs) return false;
    const p = Logic.findPlayer(st, id);
    if (!p) return false;
    const cur = Math.trunc(Number(p.score) || 0), next = cur + delta;
    if (Math.abs(next) > LIMITS.scoreAbs && Math.abs(next) > Math.abs(cur)) return false; // wynik nie wychodzi poza ±limit (starsze wyniki można zmniejszać)
    p.score = next;
    st.history.push({ hid: newHid(st.history), id: String(p.id), delta: delta });
    if (st.history.length > LIMITS.history) st.history.shift();
    return true;
  },
  /* Cofnięcie ostatniego wpisu */
  undo(st) {
    if (!st.history.length) return false;
    const move = st.history.pop();
    const p = Logic.findPlayer(st, move.id);
    if (p) p.score -= move.delta;
    return true;
  },
  /* Edycja istniejącego wpisu (również zmiana znaku) */
  editEntry(st, hid, num) {
    const h = st.history.find(x => x.hid === hid);
    if (!h || !num) return false;
    const p = Logic.findPlayer(st, h.id);
    if (p) {
      const next = p.score + (num - h.delta);
      if (Math.abs(next) > LIMITS.scoreAbs && Math.abs(next) > Math.abs(p.score)) return false;
      p.score = next;
    }
    h.delta = num;
    return true;
  },
  /* Usunięcie wpisu i korekta wyniku */
  deleteEntry(st, hid) {
    const i = st.history.findIndex(x => x.hid === hid);
    if (i < 0) return false;
    const h = st.history[i];
    const p = Logic.findPlayer(st, h.id);
    if (p) p.score -= h.delta;
    st.history.splice(i, 1);
    return true;
  },
  signature(players) { return players.map(p => p.name + "|" + p.color).sort().join(";"); }
};

/* --- Walidacja danych importu (głęboka sanityzacja) --- */
function sanitizeColor(c) { const i = cix(c); return i >= 0 ? PLAYER_COLORS[i] : PLAYER_COLORS[0]; }

function sanitizePlayers(raw) {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > LIMITS.players) return null;
  const out = [];
  const used = new Set();
  for (let i = 0; i < raw.length; i++) {
    const p = raw[i];
    if (!p || typeof p !== "object") return null;
    const name = (typeof p.name === "string" ? p.name.trim() : "").slice(0, LIMITS.name);
    if (!name) return null;
    let color = sanitizeColor(p.color);
    if (used.has(color)) {
      const free = PLAYER_COLORS.find(c => !used.has(c));
      if (!free) return null;
      color = free;
    }
    used.add(color);
    /* składy (groups) nie przechowują score — brak pola = 0; jawnie podane, ale niepoprawne → odrzucone */
    const score = (p.score === undefined || p.score === null) ? 0 : Number(p.score);
    /* integralność danych: score z importu musi mieścić się w LIMITS.scoreAbs (jak przy punktacji) */
    if (!Number.isFinite(score) || Math.abs(score) > LIMITS.scoreAbs) return null;
    out.push({ id: String(i), name: name, color: color, score: Math.trunc(score) });
  }
  return out;
}

/* Zachowuje poprawne, unikalne ID (≤64 znaki) — w przeciwnym razie nadaje nowe */
function uniqueId(raw, seen) {
  let id = (typeof raw === "string" && raw && raw.length <= 64) ? raw : newId();
  while (seen.has(id)) id = newId();
  seen.add(id);
  return id;
}

function sanitizeGroups(raw) {
  if (!Array.isArray(raw)) return [];
  const out = [], seen = new Set();
  for (const g of raw) {
    if (out.length >= LIMITS.groups) break;
    if (!g || typeof g !== "object") continue; // pomijamy uszkodzone wpisy
    const players = sanitizePlayers(g.players);
    if (players) out.push({ id: uniqueId(g.id, seen), players: players.map(p => ({ name: p.name, color: p.color })) });
  }
  return out;
}

function sanitizeSaves(raw) {
  if (!Array.isArray(raw)) return [];
  const out = [], seen = new Set();
  for (const s of raw) {
    if (out.length >= LIMITS.saves) break;
    if (!s || typeof s !== "object") continue;
    const players = sanitizePlayers(s.players);
    if (!players) continue;
    /* mapa starych id graczy -> nowe id (indeksy) */
    const idMap = Object.create(null); // bez prototypu: id typu "toString" nie przejdzie walidacji
    s.players.forEach((p, i) => { if (p && typeof p === "object" && p.id !== undefined) idMap[String(p.id)] = String(i); });
    const history = [];
    let okHist = true;
    if (Array.isArray(s.history)) {
      if (s.history.length > LIMITS.history) continue;
      const usedHid = new Set();
      for (const h of s.history) {
        if (!h || typeof h !== "object" || idMap[String(h.id)] === undefined) { okHist = false; break; }
        const delta = Math.trunc(Number(h.delta));
        if (!Number.isFinite(delta) || delta === 0 || Math.abs(delta) > LIMITS.scoreAbs) { okHist = false; break; }
        let hid = (typeof h.hid === "string" && h.hid) ? h.hid.slice(0, 64) : "";
        if (!hid || usedHid.has(hid)) hid = newHid(history); // brak lub duplikat → nowy (edycja/usuwanie po hid musi trafiać w jeden wpis)
        usedHid.add(hid);
        history.push({ hid: hid, id: idMap[String(h.id)], delta: delta });
      }
    }
    if (!okHist) continue;
    const name = (typeof s.name === "string" ? s.name.trim() : "").slice(0, LIMITS.saveName) || (STR.pl.saveWord + " " + new Date().toLocaleDateString());
    out.push({
      id: uniqueId(s.id, seen), name: name,
      savedAt: Number.isFinite(Number(s.savedAt)) ? Number(s.savedAt) : Date.now(),
      players: players, history: history,
      modules: (s.modules && typeof s.modules === "object") ? sanitizeModules(s.modules) : null
    });
  }
  return out;
}

/* Pełna walidacja importu: zwraca {groups, saves, settings, skipped} albo null.
   Wykonywana automatycznie przy każdym imporcie; skipped = liczba odrzuconych wpisów. */
function validateImport(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) return null;
  const hasPayload = Array.isArray(data.groups) || Array.isArray(data.saves) || data.settings;
  if (!hasPayload) return null;
  const groups = sanitizeGroups(data.groups);
  const saves = sanitizeSaves(data.saves);
  const rawG = Array.isArray(data.groups) ? data.groups.length : 0;
  const rawS = Array.isArray(data.saves) ? data.saves.length : 0;
  if (rawG + rawS > 0 && !groups.length && !saves.length) return null;
  const settings = data.settings ? sanitizeSettings(data.settings, S.settings.lang) : null;
  return { groups: groups, saves: saves, settings: settings, skipped: Math.max(0, rawG - groups.length) + Math.max(0, rawS - saves.length) };
}

/* ================================================================
   5b. TESTY AUTOMATYCZNE (Logic + walidacja) — przycisk w Ustawieniach
       lub dopisanie ?test do adresu. Wynik: konsola + toast.
   ================================================================ */
function runSelfTests() {
  const results = [];
  function check(name, cond) { results.push({ name: name, ok: !!cond }); }
  const st = () => ({ players: [{ id: "0", name: "A", color: "#e2e8f0", score: 0 },
                                { id: "1", name: "B", color: "#38bdf8", score: 10 }],
                     history: [] });

  // punktacja
  let s = st();
  check("apply +10", Logic.applyPoints(s, "0", 10) && s.players[0].score === 10);
  check("apply -3", Logic.applyPoints(s, "1", -3) && s.players[1].score === 7);
  check("apply 0 odrzucone", Logic.applyPoints(s, "0", 0) === false);
  check("apply dla nieistniejącego gracza odrzucone", Logic.applyPoints(s, "99", 5) === false);
  check("wpis w historii", s.history.length === 2 && s.history[1].delta === -3);

  // cofanie
  check("undo koryguje wynik", Logic.undo(s) && s.players[1].score === 10);
  check("undo usuwa wpis", s.history.length === 1);
  s.history = [];
  check("undo pustej historii odrzucone", Logic.undo(s) === false);

  // edycja
  s = st();
  Logic.applyPoints(s, "0", 5);
  const hid = s.history[0].hid;
  check("edycja zmienia wynik", Logic.editEntry(s, hid, 12) && s.players[0].score === 12);
  check("edycja zmienia znak", Logic.editEntry(s, hid, -4) && s.players[0].score === -4);
  check("edycja nieistniejącego wpisu odrzucona", Logic.editEntry(s, "brak", 5) === false);

  // usuwanie
  check("usuwanie wpisu koryguje wynik", Logic.deleteEntry(s, hid) && s.players[0].score === 0 && s.history.length === 0);
  check("usuwanie nieistniejącego odrzucone", Logic.deleteEntry(s, hid) === false);

  // parsowanie liczb (puste / zero / ujemne / przecinki / zbyt duże)
  check("parse 25", Logic.parsePoints("25") === 25);
  check("parse puste odrzucone", Logic.parsePoints("") === null);
  check("parse 0 odrzucone", Logic.parsePoints("0") === null);
  check("parse -5 odrzucone", Logic.parsePoints("-5") === null);
  check("parse 3.7 odrzucone", Logic.parsePoints("3.7") === null);
  check("parse abc odrzucone", Logic.parsePoints("abc") === null);
  check("parse limit 999999", Logic.parsePoints("999999") === 999999);
  check("parse nad limit odrzucone", Logic.parsePoints("1000000") === null);

  // walidacja importu
  check("import poprawny", !!validateImport({ groups: [{ players: [{ name: "A", color: "#e2e8f0" }] }], saves: [] }));
  check("import null odrzucony", validateImport(null) === null);
  check("import tablicy odrzucony", validateImport([1,2,3]) === null);
  check("import bez danych odrzucony", validateImport({ foo: 1 }) === null);
  check("import złośliwych graczy odrzucony", sanitizePlayers([{ name: "", color: "#fff" }]) === null);
  check("import >8 graczy odrzucony", sanitizePlayers(new Array(LIMITS.players + 1).fill({ name: "X", color: "#e2e8f0" })) === null);
  check("import złej historii pominięty", sanitizeSaves([{ players: [{ name: "A", color: "#e2e8f0" }], history: [{ id: "0", delta: 0 }] }]).length === 0);

  // spójność ID graczy i historii w zapisach (po usunięciu gracza w trakcie gry)
  const sv = sanitizeSaves([{ players: [{ id: "0", name: "A", color: "#e2e8f0", score: 1 }, { id: "2", name: "B", color: "#38bdf8", score: 2 }, { id: "3", name: "C", color: "#34d399", score: 3 }],
                              history: [{ hid: "h1", id: "3", delta: 3 }] }])[0];
  check("zapis: historia trafia do właściwego gracza", !!sv && sv.players[Number(sv.history[0].id)].name === "C");
  check("grupy: uszkodzone wpisy pominięte", sanitizeGroups([null, { players: "x" }, { players: [{ name: "A", color: "#e2e8f0" }] }]).length === 1);
  check("grupy: obcy kolor zastąpiony kolorem z palety", sanitizeGroups([{ players: [{ name: "A", color: "red;x" }] }])[0].players[0].color === PLAYER_COLORS[0]);
  check("import: licznik pominiętych wpisów", validateImport({ groups: [null, { players: [{ name: "A", color: "#e2e8f0" }] }] }).skipped === 1);
  check("import: id równe nazwie z prototypu Object odrzucone", sanitizeSaves([{ players: [{ id: "0", name: "A", color: "#e2e8f0" }], history: [{ id: "toString", delta: 5 }] }]).length === 0);
  check("autozapis: savedAt przechodzi sanityzację", sanitizeSaves([{ name: "x", savedAt: 12345, players: [{ id: "0", name: "A", color: "#e2e8f0" }], history: [] }])[0].savedAt === 12345);
  { const q = { players: [{ id: "0", score: 999990 }], history: [] };
    check("limit: wynik nie wychodzi poza ±999999", Logic.applyPoints(q, "0", 20) === false && q.players[0].score === 999990 && q.history.length === 0);
    q.players[0].score = 2999997;
    check("limit: starszy wynik poza limitem można zmniejszać", Logic.applyPoints(q, "0", -10) === true && q.players[0].score === 2999987);
    const r2 = { players: [{ id: "0", score: 999990 }], history: [{ hid: "a", id: "0", delta: 5 }] };
    check("limit: edycja nie przekracza limitu", Logic.editEntry(r2, "a", 50) === false && r2.players[0].score === 999990 && r2.history[0].delta === 5); }
  { const q = { players: [{ id: "0", score: 0 }], history: [] };
    for (let i = 0; i < 100; i++) Logic.applyPoints(q, "0", 1);
    check("hid: krótki (6 znaków) i unikalny", q.history.every(h => h.hid.length === 6) && new Set(q.history.map(h => h.hid)).size === 100); }
  check("import: zduplikowany hid rozdzielony", (() => { const e = sanitizeSaves([{ players: [{ id: "0", name: "A", color: "#e2e8f0" }], history: [{ hid: "x", id: "0", delta: 1 }, { hid: "x", id: "0", delta: 2 }, { id: "0", delta: 3 }] }])[0]; return e && new Set(e.history.map(h => h.hid)).size === 3 && e.history[0].hid === "x"; })());
  check("ustawienia: keepAwake domyślnie false, tylko true włącza", sanitizeSettings(null).keepAwake === false && sanitizeSettings({ keepAwake: true }).keepAwake === true && sanitizeSettings({ keepAwake: "yes" }).keepAwake === false);
  check("esc: apostrof i cudzysłów", esc("'\"") === "&#39;&quot;");

  // limit score/delta w imporcie (integralność danych)
  check("import: score poza ±999999 odrzucony",
    sanitizePlayers([{ name: "A", color: "#e2e8f0", score: LIMITS.scoreAbs + 1 }]) === null);
  check("import: score = -limit OK",
    !!sanitizePlayers([{ name: "A", color: "#e2e8f0", score: -LIMITS.scoreAbs }]));
  check("import: save z delta poza limitem pominięty",
    sanitizeSaves([{ players: [{ id: "0", name: "A", color: "#e2e8f0", score: 5 }],
                     history: [{ hid: "x", id: "0", delta: LIMITS.scoreAbs * 10 }] }]).length === 0);
  check("import: save z delta na granicy OK",
    sanitizeSaves([{ players: [{ id: "0", name: "A", color: "#e2e8f0", score: LIMITS.scoreAbs }],
                     history: [{ hid: "x", id: "0", delta: LIMITS.scoreAbs }] }]).length === 1);

  check("grupy: round-trip zapisu (skład bez score przeżywa wczytanie)", sanitizeGroups(JSON.parse(JSON.stringify(
    [{ id: "g1", players: [{ name: "A", color: "#e2e8f0" }, { name: "B", color: "#38bdf8" }] }]))).length === 1);
  check("grupy: score null/brak = 0, tekst odrzucony", sanitizePlayers([{ name: "A", color: "#e2e8f0" }])[0].score === 0 && sanitizePlayers([{ name: "A", color: "#e2e8f0", score: "x" }]) === null);

  /* kości */
  { const dd = sanitizeDice([
      { id: "a", name: "  Akcji  ", faces: [{ t: "Miecz", c: "#f43f5e" }, { t: "", c: "red;x" }, "Tarcza", 7] },
      { id: "b", name: "za mało", faces: [{ t: "1" }] },
      { id: "c", name: "", faces: [{ t: "1" }, { t: "2" }] },
      { id: "d6", name: "kolizja", faces: [{ t: "1" }, { t: "2" }] },
      null, { name: "x", faces: "nie tablica" }]);
    check("kości: poprawne zachowane, błędne pominięte", dd.length === 2 && dd[0].name === "Akcji");
    check("kości: napis przycięty, pusty → numer, kolor spoza palety → brak", dd[0].faces[0].t === "Miecz" && dd[0].faces[0].c === "#f43f5e" && dd[0].faces[1].t === "2" && dd[0].faces[1].c === "" && dd[0].faces[2].t === "Tarcza" && dd[0].faces[3].t === "7");
    check("kości: id „d6” zarezerwowane dla kości wbudowanej", dd[1].id !== "d6" && dd[1].id.length > 0); }
  check("kości: >20 ścianek odrzucone", sanitizeDice([{ name: "X", faces: new Array(21).fill({ t: "1" }) }]).length === 0);
  check("kości: max typów", sanitizeDice(new Array(25).fill({ name: "X", faces: [{ t: "1" }, { t: "2" }] })).length === LIMITS.diceTypes);
  check("ustawienia: diceType spoza listy → d6, diceCount w 1–6", (() => { const x = sanitizeSettings({ diceType: "nie-ma", diceCount: 99 }); return x.diceType === "d6" && x.diceCount === 1 && sanitizeSettings({ diceCount: 4 }).diceCount === 4; })());
  check("ustawienia: diceType wskazuje istniejącą kość", (() => { const x = sanitizeSettings({ dice: [{ id: "k1", name: "K", faces: [{ t: "a" }, { t: "b" }] }], diceType: "k1" }); return x.diceType === "k1"; })());
  check("kości: randInt w zakresie i pokrywa wszystkie wartości", (() => { const seen = new Set(); for (let i = 0; i < 600; i++) { const r = randInt(6); if (r < 0 || r > 5 || r !== Math.floor(r)) return false; seen.add(r); } return seen.size === 6; })());
  check("kości: suma tylko dla liczb (także „−” Unicode)", diceSum({ faces: [{ t: "2" }, { t: "\u22121" }, { t: "Miecz" }] }, [0, 1]) === 1 && diceSum({ faces: [{ t: "2" }, { t: "\u22121" }, { t: "Miecz" }] }, [0, 2]) === null);
  check("kości: historia rzutów pomija ostatni (jest pokazany osobno)", (() => {
    const e = (n, v) => ({ n: n, name: "D6", items: [{ t: v, c: "" }], sum: null });
    const h = diceLogHtml({ results: [0], log: [e(1, "1"), e(2, "2")] });
    const all = diceLogHtml({ results: null, log: [e(1, "1"), e(2, "2")] });
    return h.includes("#1") && !h.includes("#2") && all.includes("#1") && all.includes("#2") && diceLogHtml({ results: [0], log: [e(1, "1")] }) === ""; })());
  check("kości: wbudowana D6 ma ścianki 1–6", DEFAULT_DIE.faces.length === 6 && DEFAULT_DIE.faces[5].t === "6");

  /* moduły gry (v11) */
  check("moduły: zestaw domyślny tylko z flagami true", defaultModules(null).rounds === false && defaultModules({ rounds: true, target: "x" }).rounds === true && defaultModules({ rounds: true, target: "x" }).target === false);
  check("moduły: 5 modułów (losowanie, rundy, czas, cel, kość)", (() => { const d = defaultModules({ draw: true, dice: true, rounds: true, timer: true, target: true }); return d.draw === true && d.dice === true && defaultModules(null).draw === false && defaultModules(null).dice === false; })());
  check("moduły: sanityzacja poprawnego stanu gry", (() => { const m = sanitizeModules({ draw: { on: true }, rounds: { on: true, count: 9, current: 2 }, target: { on: true, value: 150 }, timer: { on: true, elapsed: 60000, startedAt: null }, dice: { on: true } }); return m.draw.on === true && m.dice.on === true && m.rounds.on && m.rounds.count === 9 && m.rounds.current === 2 && m.target.value === 150 && m.timer.elapsed === 60000; })());
  check("moduły: śmieciowe dane → bezpieczne wartości", (() => { const m = sanitizeModules({ draw: "x", dice: 1, rounds: { on: "x", count: -5, current: 99999 }, target: { on: true, value: 0 }, timer: { on: true, elapsed: -1, startedAt: "x" } }); return m.draw.on === false && m.dice.on === false && m.rounds.on === false && m.rounds.count === 0 && m.rounds.current === 1 && m.target.on === false && m.target.value === 100 && m.timer.elapsed === 0 && m.timer.startedAt === null; })());
  check("moduły: zapis gry zachowuje stan modułów", (() => { const e = sanitizeSaves([{ players: [{ id: "0", name: "A", color: "#e2e8f0" }], history: [{ hid: "h", id: "0", delta: 5 }], modules: { rounds: { on: true, count: 3, current: 1 }, target: { on: false, value: 0 }, timer: { on: true, elapsed: 0, startedAt: 123 }, draw: { on: true }, dice: { on: false } } }])[0]; return !!e && !!e.modules && e.modules.rounds.count === 3 && e.modules.timer.startedAt === 123 && e.modules.draw.on === true && e.modules.dice.on === false; })());
  check("moduły: timer etykieta minut i godzin", timerLabel(0) === "0'" && timerLabel(65 * 60000) === "1 h 05 min");

  check("cc: nieznany kolor -> c0", cc("red;x") === "c0" && cc(PLAYER_COLORS[3]) === "c3");

  const passed = results.filter(r => r.ok).length;
  const total = results.length;
  if (typeof console !== "undefined") {
    results.forEach(r => { (r.ok ? console.log : console.error)("[" + (r.ok ? "OK " : "FAIL") + "] " + r.name); });
  }
  return { passed: passed, total: total, results: results };
}

/* ================================================================
   6. WIDOKI (render) — bez inline onclick i bez inline style.
      Akcje: data-a="..." + data-id / data-v, obsługiwane delegacją zdarzeń.
   ================================================================ */
function usedColors(exceptId) {
  return S.players.filter(p => String(p.id) !== String(exceptId)).map(p => p.color);
}

/* Wybór koloru: każdy przycisk ma nazwę koloru, a zajęte są naprawdę wyłączone (disabled) */
function colorDots(selected, used, action, id) {
  return PLAYER_COLORS.map((c, i) => {
    const taken = used.includes(c);
    const label = t("colorNames")[i] + (taken ? " (" + t("colorTaken") + ")" : "");
    const a = act(action, id === undefined ? { v: c } : { id: id, v: c });
    return `<button class="dot ${cc(c)}${c === selected ? " sel" : ""}" aria-label="${label}" aria-pressed="${c === selected}"${taken ? " disabled" : ""} ${a}></button>`;
  }).join("");
}

function viewHome() {
  const groupsHtml = S.groups.length ? S.groups.map(g => `
    <div class="card">
      <div class="row">
        <span class="row-left">${g.players.map(p => `<span class="avatar ${cc(p.color)}"></span>`).join("")}</span>
        <button class="icon-btn" aria-label="${t("removeLineup")}" ${act("askRemoveGroup", { id: g.id })}>${ICONS.trash}</button>
      </div>
      <p class="name mt">${g.players.map(p => esc(p.name)).join(" &bull; ")}</p>
      <button class="btn mt" ${act("playGroup", { id: g.id })}>${t("play")}</button>
    </div>`).join("")
    : `<p class="empty">${t("noLineups")}</p>`;

  const resumeHtml = S.resume ? `<div class="resume-block"><p class="sub">${t("resumeTitle")}</p>
    <div class="card">
      <div class="row">
        <span class="save-meta">${t("resumeMeta").replace("{d}", new Date(S.resume.savedAt).toLocaleString(locale(), { dateStyle: "short", timeStyle: "short" })).replace("{n}", S.resume.history.length)}</span>
        <button class="icon-btn" aria-label="${t("discardResume")}" data-a="askDiscardResume">${ICONS.trash}</button>
      </div>
      <div class="resume-list">${S.resume.players.map(p => `<div class="resume-row"><span class="avatar ${cc(p.color)}"></span><span class="name">${esc(p.name)}</span><span class="resume-score">${p.score}</span></div>`).join("")}</div>
      <button class="btn mt" data-a="resumeGame">${t("resumeBtn")}</button>
    </div></div>` : "";

  return `<h1>${t("title")}</h1>
    <div class="home-top">
      <button class="btn btn-main" data-a="newGame">${t("newGame")}</button>
      ${resumeHtml}
      <button class="btn-outline" data-a="openSettings">${t("settingsTitle")}</button>
    </div>
    <p class="sub">${t("savedLineups")}</p>
    <div class="scroll">${groupsHtml}</div>`;
}

/* --- Moduły gry: karty używane na ekranie NOWA GRA (szkic) i w oknie ołówka (gra) ---
   pfx = prefiks akcji ("setupMod" / "editMod"), inpId = id pola celu (szkic / gra).
   Kolejność od góry: losowanie pierwszego gracza, licznik rund, pomiar czasu, cel, kość.
   Karta wyłączona jest przygaszona (.off); klik w kartę przełącza moduł.
   Przyciski konfiguracji wewnątrz karty mają własne data-a, więc klik w nie
   nie przełącza modułu (delegacja wybiera najbliższy [data-a]). */
function moduleCardsHtml(m, pfx, inpId, inGame) {
  const ctl = (a, o, txt, aria, dis) => `<button class="btn-outline font-btn"${dis ? " disabled" : ""} aria-label="${aria}" ${act(a, o)}>${txt}</button>`;
  const drawCtl = m.draw.on ? `<p class="tiny note mt8">${t("drawModNote")}</p>` : "";
  const roundsCtl = m.rounds.on ? `
    <div class="row font-ctl mod-ctl mt8">
      ${ctl(pfx + "Rounds", { v: -1 }, "\u2212", "\u2212", m.rounds.count <= 0)}
      <span class="pct">${m.rounds.count ? m.rounds.count : t("roundsInf")}</span>
      ${ctl(pfx + "Rounds", { v: 1 }, "+", "+", m.rounds.count >= LIMITS.roundsMax)}
      ${ctl(pfx + "RoundsInf", {}, t("roundsInf"), t("roundsInfLabel"), m.rounds.count === 0)}
    </div>
    <p class="tiny note mt4">${t("roundsCountQ")}</p>` : "";
  const timerCtl = m.timer.on ? `<p class="tiny note mt8">${t("timerNote")}</p>` : "";
  const targetCtl = m.target.on ? `
    <div data-a="noop">
      <label class="tiny mt8" for="${inpId}">${t("targetQ")}</label>
      <input type="tel" inputmode="numeric" pattern="[0-9]*" id="${inpId}" maxlength="6" class="mod-input" value="${m.target.value || ""}" placeholder="${t("targetPlaceholder")}" autocomplete="off">
    </div>` : "";
  const diceCtl = m.dice.on ? `<p class="tiny note mt8">${t("diceModNote")}</p>` : "";
  const card = (nameKey, key, body, icon) => `
    <div class="module-card${m[key].on ? "" : " off"}" ${act(pfx + "Toggle", { v: key })} role="button" tabindex="0" aria-pressed="${m[key].on}">
      <div class="row">
        <span class="name">${icon ? `<span class="mod-ico">${icon}</span>` : ""}${t(nameKey)}</span>
        <span class="tiny mod-state">${m[key].on ? t("moduleOn") : t("moduleOff")}</span>
      </div>
      ${body}
    </div>`;
  /* moduł losowania jest nieprzydatny po starcie gry — w oknie ołówka (inGame) go nie ma */
  const cards = [];
  if (!inGame) cards.push(card("moduleDraw", "draw", drawCtl));
  cards.push(card("moduleRounds", "rounds", roundsCtl));
  cards.push(card("moduleTimer", "timer", timerCtl, ICONS.clock));
  cards.push(card("moduleTarget", "target", targetCtl));
  cards.push(card("moduleDice", "dice", diceCtl, ICONS.dice));
  return cards.join("");
}

function viewSetup() {
  const playersHtml = S.players.length ? S.players.map(p => `
    <div class="list-item accent ${cc(p.color)}">
      <span class="row-left"><span class="avatar ${cc(p.color)}"></span><span class="name">${esc(p.name)}</span></span>
      <button class="icon-btn" aria-label="${t("removePlayer")}: ${esc(p.name)}" ${act("removeSetupPlayer", { id: p.id })}>${ICONS.trash}</button>
    </div>`).join("")
    : `<p class="tiny tc pad">${t("addAtLeastOne")}</p>`;

  return `<div class="header-row">
      <button class="icon-btn" data-a="backHome" aria-label="${t("back")}">${ICONS.back}</button><h2>${t("newGameTitle")}</h2>
    </div>
    <button class="btn-outline btn-add-player"${S.players.length >= PLAYER_COLORS.length ? " disabled" : ""} data-a="openAddPlayer">${t("addPlayer")}</button>
    <p class="tiny counter">${t("players")}: ${S.players.length} / ${PLAYER_COLORS.length}</p>
    <div class="scroll">${playersHtml}</div>
    <p class="sub">${t("modulesSection")}</p>
    <div class="module-list">${moduleCardsHtml(S.setupModules, "setupMod", "setupTarget")}</div>
    <p class="tiny tc note mt4">${t("modulesHint")}</p>
    <button class="btn"${S.players.length ? "" : " disabled"} data-a="startFromSetup">${t("letsGo")}</button>`;
}

function scoreButtonsHtml(id) {
  const vals = buttonValues();
  const btn = v => {
    const label = (v > 0 ? "+" : "\u2212") + Math.abs(v);
    return `<button aria-label="${label}" ${act("pend", { id: id, v: v })}>${label}</button>`;
  };
  const minus = `<button class="amount-btn" aria-label="${t("subtractPoints")}" ${act("openCustomAmount", { id: id, v: -1 })}>\u2212\u2026</button>` +
    vals.slice().reverse().map(v => btn(-v)).join("");
  const plus = vals.map(v => btn(v)).join("") +
    `<button class="amount-btn" aria-label="${t("addPoints")}" ${act("openCustomAmount", { id: id, v: 1 })}>+\u2026</button>`;
  /* od 3 par: dwa rzędy (minusy nad plusami) — przy 10 przyciskach w jednym rzędzie cel dotyku miał ok. 24 px */
  if (vals.length >= 3) return `<div class="score-stack"><div class="score-btns s14">${minus}</div><div class="score-btns s14">${plus}</div></div>`;
  return `<div class="score-btns s14">${minus}${plus}</div>`;
}

/* Karta pojedynczego gracza (osobna funkcja — używana też przez render cząstkowy).
   Dolny wiersz (.card-row) ma stałą wysokość: albo ostatnie wpisy historii, albo ✕/✓ przy niezatwierdzonych
   punktach — przełączenie nie zmienia wysokości karty i nie przesuwa niczego na ekranie. */
function playerCardHtml(p) {
  const pend = S.pending[p.id] || 0;
  const entries = S.history.filter(h => h.id === p.id).slice(-3).reverse();
  const chips = entries.map(h => {
    const s = (h.delta > 0 ? "+" : "") + h.delta;
    return `<button class="chip ${h.delta > 0 ? "pos" : "neg"}" aria-label="${t("editEntryTitle")}: ${s}" ${act("openEditHistory", { id: h.hid })}>${s}</button>`;
  }).join("");
  const bottom = pend
    ? `<div class="confirm-row">
        <button class="btn-cancel" aria-label="${t("cancelShort")}" ${act("pendCancel", { id: p.id })}>✕</button>
        <button class="btn-apply" aria-label="OK" ${act("pendApply", { id: p.id })}>✓</button>
      </div>`
    : `<div class="history-chips">${chips || `<span class="tiny no-entries">${t("noEntries")}</span>`}</div>`;

  return `<div class="card player-card ${cc(p.color)}" data-card="${esc(p.id)}">
    <div class="row">
      <span class="row-left"><span class="avatar ${cc(p.color)}"></span><span class="name player-name">${esc(p.name)}</span>${p.targetHit ? `<span class="target-flag" title="${t("targetReachedTitle")}" aria-label="${t("targetReachedTitle")}">\u2691</span>` : ""}</span>
      <button class="icon-btn drag-handle" data-drag aria-label="${t("dragHandle")}: ${esc(p.name)}" aria-keyshortcuts="ArrowUp ArrowDown">${ICONS.move}</button>
    </div>
    <div class="score-row">
      <span class="score-side" aria-hidden="true"></span>
      <span class="score-num${S.animScore === p.id ? " bump" : ""}" aria-live="polite">${p.score}</span>
      <span class="score-side">${pend ? `<span class="pending ${pend > 0 ? "pos" : "neg"}">${pend > 0 ? "+" + pend : pend}</span>` : ""}</span>
    </div>
    ${scoreButtonsHtml(p.id)}
    <div class="card-row">${bottom}</div>
  </div>`;
}

function viewGame() {
  const cards = S.players.map(playerCardHtml);
  cacheCards(cards);
  return `<div class="header-row between sticky">
    <span class="row-left">
      <button class="icon-btn" aria-label="${t("backToMenu")}" data-a="askExitGame">${ICONS.back}</button>
    </span>
    <span class="game-status">
      ${S.modules && S.modules.rounds.on ? `<button class="stat-btn" aria-label="${t("nextRound")}: ${roundsLabel()}" data-a="nextRound">${roundsLabel()}</button>` : ""}
      ${S.modules && S.modules.target.on ? `<span class="stat-btn" data-stat="target" title="${t("targetWord")}: ${S.modules.target.value}" aria-label="${t("targetWord")}: ${S.modules.target.value}">\u2691${S.modules.target.value}</span>` : ""}
      ${S.modules && S.modules.timer.on ? `<span class="stat-btn" id="timerStat" title="${t("gameTime")}"><span class="mod-ico">${ICONS.clock}</span><span id="timerStatLabel">${timerLabel(timerMs())}</span></span>` : ""}
    </span>
    <span class="row-left tools">
      <button class="icon-btn" aria-label="${t("undo")}"${S.history.length ? "" : " disabled"} data-a="undo">${ICONS.undo}</button>
      ${S.modules && S.modules.dice.on ? `<button class="icon-btn" aria-label="${t("dice")}" data-a="openDice">${ICONS.dice}</button>` : ""}
      <button class="icon-btn" aria-label="${t("editLineupBtn")}" data-a="openEdit">${ICONS.pencil}</button>
      <button class="btn-outline" data-a="openFinish">${t("end")}</button>
    </span>
  </div>
  <div class="scroll">${cards.join("")}</div>`;
}

function viewSettings() {
  const savesHtml = S.saves.length ? S.saves.map(s => {
    const date = new Date(s.savedAt).toLocaleString(locale(), { dateStyle: "short", timeStyle: "short" });
    return `<div class="list-item">
      <span class="row-left col"><span class="name">${esc(s.name)}</span><span class="save-meta">${date} • ${s.players.length} ${t("playersWord")}</span></span>
      <span class="btn-pair">
        <button class="icon-btn" aria-label="${t("loadSave")}" ${act("askLoadSave", { id: s.id })}>${ICONS.load}</button>
        <button class="icon-btn" aria-label="${t("deleteSave")}" ${act("askDeleteSave", { id: s.id })}>${ICONS.trash}</button>
      </span>
    </div>`;
  }).join("") : `<p class="empty">${t("noSaves")}</p>`;

  const fs = S.settings.fontScale;
  const fontHtml = `<div class="row font-ctl">
    <button class="btn-outline font-btn" aria-label="${t("fontSmaller")}"${fs <= FONT_MIN ? " disabled" : ""} ${act("changeFontScale", { v: -0.1 })}>A−</button>
    <span class="tiny pct">${Math.round(fs * 100)}%</span>
    <button class="btn-outline font-btn" aria-label="${t("fontBigger")}"${fs >= FONT_MAX ? " disabled" : ""} ${act("changeFontScale", { v: 0.1 })}>A+</button>
  </div>`;

  const vals = buttonValues();
  const btnRows = vals.map((v, i) => `<div class="row pair-row">
      <span class="tiny">${t("pair")} #${i + 1} (\u2212${v} / +${v})</span>
      <span class="pair-actions">
        <input class="pair-input" type="tel" inputmode="numeric" pattern="[0-9]*" value="${v}" data-change="updateButtonValue" data-v="${i}" aria-label="${t("pair")} #${i + 1}">
        ${vals.length > 1 ? `<button class="icon-btn" aria-label="${t("removePair")}" ${act("removeButtonValue", { v: i })}>${ICONS.trash}</button>` : ""}
      </span>
    </div>`).join("");

  const dieRows = `<div class="list-item"><span class="row-left col"><span class="name">${esc(DEFAULT_DIE.name)}</span><span class="save-meta">${DEFAULT_DIE.faces.length} ${t("facesWord")}: ${esc(facesPreview(DEFAULT_DIE))} • ${t("diceDefaultNote")}</span></span></div>` +
    S.settings.dice.map(d => `<div class="list-item">
      <span class="row-left col"><span class="name">${esc(d.name)}</span><span class="save-meta">${d.faces.length} ${t("facesWord")}: ${esc(facesPreview(d))}</span></span>
      <span class="btn-pair">
        <button class="icon-btn" aria-label="${t("editDieBtn")}: ${esc(d.name)}" ${act("editDie", { id: d.id })}>${ICONS.pencil}</button>
        <button class="icon-btn" aria-label="${t("deleteDieBtn")}: ${esc(d.name)}" ${act("askDeleteDie", { id: d.id })}>${ICONS.trash}</button>
      </span>
    </div>`).join("");

  return `<div class="header-row">
      <button class="icon-btn" data-a="backHome" aria-label="${t("back")}">${ICONS.back}</button><h2>${t("settingsTitle")}</h2>
    </div>
    <div class="scroll">
      <p class="sub">${t("language")}</p>
      <div class="card">
        <div class="row">
          <button class="lang-btn${S.settings.lang === "pl" ? " sel" : ""}" ${act("setLang", { v: "pl" })}>POLSKI</button>
          <button class="lang-btn${S.settings.lang === "en" ? " sel" : ""}" ${act("setLang", { v: "en" })}>ENGLISH</button>
        </div>
        <p class="tiny tc note mt10">${t("langNote")}</p>
      </div>
      <p class="sub">${t("quickButtons")}</p>
      <div class="card">
        ${btnRows}
        <button class="btn-outline mt full"${vals.length >= MAX_BUTTON_PAIRS ? " disabled" : ""} data-a="addButtonValue">${t("addPair")}</button>
        <p class="tiny tc note mt10">${t("onCard")} ${vals.length * 2 + 2} ${t("buttonsCount1")}</p>
        <p class="tiny note mt8">${t("buttonsTip")}</p>
      </div>
      <p class="sub">${t("fontSize")}</p>
      <div class="card">${fontHtml}</div>
      <p class="sub">${t("screenTitle")}</p>
      <div class="card">
        <label class="check-row"><input type="checkbox" id="keepAwake"${S.settings.keepAwake ? " checked" : ""}${navigator.wakeLock ? "" : " disabled"}><span>${t("keepAwake")}</span></label>
        <p class="tiny note mt8">${navigator.wakeLock ? t("keepAwakeNote") : t("keepAwakeUnsupported")}</p>
      </div>
      <p class="sub">${t("defaultModulesSection")}</p>
      <div class="card">
        ${[["draw", "moduleDraw"], ["rounds", "moduleRounds"], ["timer", "moduleTimer"], ["target", "moduleTarget"], ["dice", "moduleDice"]].map(k => `<label class="check-row">
          <input type="checkbox" data-mod="${k[0]}"${S.settings.defaultModules[k[0]] ? " checked" : ""}>
          <span>${t(k[1])}</span>
        </label>`).join("")}
        <p class="tiny note mt8">${t("defaultModulesNote")}</p>
      </div>
      <p class="sub">${t("diceSection")}</p>
      <div class="card">
        ${dieRows}
        <button class="btn-outline mt full"${S.settings.dice.length >= LIMITS.diceTypes ? " disabled" : ""} data-a="addDie">${t("addDie")}</button>
        <p class="tiny tc note mt10">${t("diceSettingsNote")}</p>
      </div>
      <p class="sub">${t("savedGames")}</p>
      <div class="card">${savesHtml}</div>
      <p class="sub">${t("backup")}</p>
      <div class="card">
        <button class="btn-outline mt full" data-a="exportData">${t("exportBtn")}</button>
        <button class="btn-outline mt full" data-a="importClick">${t("importDataBtn")}</button>
        <input type="file" id="importFile" accept="application/json,.json" hidden>
        <p class="tiny tc note mt10">${t("backupNote")}</p>
      </div>
    </div>`;
}

/* ================================================================
   7. DIALOGI (każdy ma tytuł z id="dlgTitle" → aria-labelledby)
   ================================================================ */
function dialogHtml() {
  if (!S.dialog) return "";
  const d = S.dialog;
  const title = s => `<h3 id="dlgTitle">${s}</h3>`;
  let inner = "", noBack = false;

  if (d.type === "drawResult") {
    /* wynik losowania pierwszego gracza (moduł włączony = bez pytania) */
    inner = `<p class="tiny tc" id="dlgTitle">${t("starts")}</p>
      <p class="winner">${esc(d.name)}</p>
      <div class="dialog-actions tight"><button class="dlg-btn solid" data-a="closeDialog">${t("letsPlay")}</button></div>`;
    noBack = true;
  }
  else if (d.type === "finish") {
    const rank = S.players.slice().sort((a, b) => b.score - a.score);
    const topScore = rank.length ? rank[0].score : null;
    let currentRank = 1;
    const rows = rank.map((p, i) => {
      if (i > 0 && p.score < rank[i - 1].score) currentRank = i + 1;
      return `<div class="rank-row${p.score === topScore ? " first" : ""}">
        <span class="rank-pos" aria-hidden="true">${currentRank}</span>
        <span class="rank-name"><span class="avatar ${cc(p.color)}"></span><span class="name">${esc(p.name)}</span></span>
        <span class="rank-score">${p.score}</span>
      </div>`;
    }).join("");
    inner = `${title(t("finishTitle"))}
      <p class="tiny tc mt4">${t("finalRanking")}</p>
      ${S.modules && S.modules.timer.on ? `<p class="tiny tc mt4">${t("gameTime")}: <strong>${timerLabel(timerMs())}</strong></p>` : ""}
      <div class="rank-list">${rows}</div>
      <div class="dialog-actions tight">
        <button class="dlg-btn secondary" data-a="closeDialog">${t("cancel")}</button>
        <button class="dlg-btn solid" data-a="finishGame">${t("endGame")}</button>
      </div>`;
  }
  else if (d.type === "edit") {
    inner = `${title(t("editLineupTitle"))}
      <p class="tiny tc mt4">${t("gameModulesTitle")}</p>
      <div class="module-list dlg-modules">${moduleCardsHtml(S.modules || sanitizeModules(null), "editMod", "editTarget", true)}</div>
      <div class="edit-list">${S.players.map(p => `<div class="row edit-row">
        <span class="row-left"><span class="avatar ${cc(p.color)}"></span><span class="name">${esc(p.name)}</span></span>
        <span class="btn-pair">
          <button class="icon-btn" aria-label="${t("editPlayerBtn")}: ${esc(p.name)}" ${act("openEditPlayer", { id: p.id })}>${ICONS.pencil}</button>
          <button class="icon-btn" aria-label="${t("removePlayer")}: ${esc(p.name)}" ${act("askRemovePlayer", { id: p.id })}>${ICONS.trash}</button>
        </span></div>`).join("")}</div>
      <div class="dialog-actions"><button class="dlg-btn solid" data-a="closeDialog">${t("close")}</button></div>`;
  }
  else if (d.type === "editPlayer") {
    const p = S.players.find(x => String(x.id) === String(d.id));
    if (!p) { S.dialog = null; return ""; }
    if (!S.editDraft || S.editDraft.id !== p.id) S.editDraft = { id: p.id, name: p.name, color: p.color };
    inner = `${title(t("editPlayerTitle"))}
      <label class="tiny" for="editName">${t("playerName")}</label>
      <input type="text" id="editName" maxlength="${LIMITS.name}" value="${esc(S.editDraft.name)}" autocomplete="off">
      <p class="tiny mt" id="editColorLbl">${t("color")}</p>
      <div class="colors" role="group" aria-labelledby="editColorLbl">${colorDots(S.editDraft.color, usedColors(p.id), "editColor", p.id)}</div>
      <div class="dialog-actions">
        <button class="dlg-btn secondary" data-a="cancelEditPlayer">${t("cancelShort")}</button>
        <button class="dlg-btn solid" ${act("saveEdit", { id: p.id })}>${t("save")}</button>
      </div>`;
  }
  else if (d.type === "targetReached") {
    inner = `<p class="tiny tc" id="dlgTitle">${t("targetReachedTitle")}</p>
      <p class="winner">${esc(d.name)}</p>
      <p class="tiny tc note mt8">${t("targetReachedText").replace("{v}", d.value)}</p>
      <div class="dialog-actions tight"><button class="dlg-btn solid" data-a="closeDialog">${t("ok")}</button></div>`;
    noBack = true; // okno informacji — klik w tło też zamyka
  }
  else if (d.type === "nextRound") {
    inner = `${title(t("nextRound"))}
      <p class="dlg-text">${t("nextRoundQ")}</p>
      <div class="dialog-actions">
        <button class="dlg-btn secondary" data-a="closeDialog">${t("cancelShort")}</button>
        <button class="dlg-btn solid" data-a="doNextRound">${t("nextRound")}</button>
      </div>`;
  }
  else if (d.type === "addPlayer") {
    /* krok 1: imię nowego gracza */
    inner = `${title(t("newPlayerTitle"))}
      <label class="tiny" for="newPlayerName">${t("playerName")}</label>
      <input type="text" id="newPlayerName" maxlength="${LIMITS.name}" placeholder="${t("namePlaceholder")}" value="${esc(d.value)}" data-autofocus autocomplete="off">
      <div class="dialog-actions">
        <button class="dlg-btn secondary" data-a="closeDialog">${t("cancelShort")}</button>
        <button class="dlg-btn solid" data-a="confirmAddPlayerName">${t("nextStep")}</button>
      </div>`;
  }
  else if (d.type === "addPlayerColor") {
    /* krok 2: wybór koloru — zaznaczenie + potwierdzenie (ochrona przed przypadkowym tapnięciem) */
    inner = `${title(t("newPlayerTitle"))}
      <p class="dlg-name">${esc(d.name)}</p>
      <p class="tiny tc mt" id="pickColorLbl">${t("chooseColor")}</p>
      <div class="colors colors-grid" role="group" aria-labelledby="pickColorLbl">${colorDots(d.color, usedColors(), "pickNewPlayerColor")}</div>
      <div class="dialog-actions tight">
        <button class="dlg-btn secondary" data-a="backToPlayerName">${t("back")}</button>
        <button class="dlg-btn solid"${d.color ? "" : " disabled"} data-a="confirmAddPlayer">${t("add")}</button>
      </div>`;
  }
  else if (d.type === "confirmDelete") {
    inner = `${title(t("removePlayerQ"))}
      <p class="dlg-name">${esc(d.name)}</p>
      <div class="dialog-actions">
        <button class="dlg-btn secondary" data-a="backToEditList">${t("cancelShort")}</button>
        <button class="dlg-btn red" ${act("confirmDeletePlayer", { id: d.id })}>${t("remove")}</button>
      </div>`;
  }
  else if (d.type === "confirmDeleteGroup") {
    inner = `${title(t("removeLineupQ"))}
      <p class="dlg-name">${esc(d.label)}</p>
      <div class="dialog-actions">
        <button class="dlg-btn secondary" data-a="closeDialog">${t("cancelShort")}</button>
        <button class="dlg-btn red" ${act("confirmDeleteGroup", { id: d.id })}>${t("remove")}</button>
      </div>`;
  }
  else if (d.type === "customAmount") {
    const label = d.sign > 0 ? t("addPoints") : t("subtractPoints");
    inner = `${title(label)}
      <p class="tiny tc mt">${t("enterNumber")}</p>
      <input type="tel" inputmode="numeric" pattern="[0-9]*" id="customAmountInput" maxlength="6" placeholder="${t("numberPlaceholder")}" value="${esc(d.value)}" autocomplete="off" aria-labelledby="dlgTitle">
      <div class="dialog-actions mt">
        <button class="dlg-btn secondary" data-a="closeDialog">${t("cancelShort")}</button>
        <button class="dlg-btn solid" data-a="confirmCustomAmount">${d.sign > 0 ? t("add") : t("subtract")}</button>
      </div>`;
  }
  else if (d.type === "editHistory") {
    const isNeg = d.sign < 0;
    inner = `${title(esc(d.player) ? `${t("editEntryTitle")} — ${esc(d.player)}` : t("editEntryTitle"))}
      <p class="tiny tc mt">${t("editEntryHint")}</p>
      <input type="tel" inputmode="numeric" pattern="[0-9]*" id="editHistoryInput" maxlength="6" value="${esc(d.value)}" autocomplete="off" aria-label="${t("enterNumber")}">
      <div class="confirm-row">
        <button class="btn-cancel${isNeg ? "" : " off"}" aria-label="\u2212" aria-pressed="${isNeg}" ${act("setHistorySign", { v: -1 })}>\u2212</button>
        <button class="btn-apply${isNeg ? " off" : ""}" aria-label="+" aria-pressed="${!isNeg}" ${act("setHistorySign", { v: 1 })}>+</button>
      </div>
      <div class="dialog-actions tight">
        <button class="dlg-btn secondary" data-a="closeDialog">${t("cancelShort")}</button>
        <button class="dlg-btn solid" data-a="saveHistoryEdit">${t("save")}</button>
      </div>
      <div class="dialog-actions tight"><button class="dlg-btn red" ${act("deleteHistoryEntry", { id: d.hid })}>${t("remove")}</button></div>`;
  }
  else if (d.type === "exitGame") {
    inner = `${title(t("exitQ"))}
      <p class="tiny tc note mt8">${t("exitInfo")}</p>
      ${d.pending ? `<p class="tiny tc note mt8">${t("exitPending")}</p>` : ""}
      <div class="dialog-actions tight">
        <button class="dlg-btn secondary" data-a="closeDialog">${t("cancelShort")}</button>
        <button class="dlg-btn solid" data-a="exitToMenu">${t("exitBtn")}</button>
      </div>`;
  }
  else if (d.type === "confirmLoadSave") {
    inner = `${title(t("loadSaveQ"))}
      ${d.warn ? `<p class="tiny tc note mt8">${t("loadWarn")}</p>` : ""}
      <div class="dialog-actions tight">
        <button class="dlg-btn secondary" data-a="closeDialog">${t("cancelShort")}</button>
        <button class="dlg-btn solid" ${act("doLoadSave", { id: d.id })}>${t("load")}</button>
      </div>`;
  }
  else if (d.type === "confirmDiscardResume") {
    inner = `${title(t("discardResumeQ"))}
      <p class="tiny tc note mt8">${t("discardResumeWarn")}</p>
      <div class="dialog-actions tight">
        <button class="dlg-btn secondary" data-a="closeDialog">${t("cancelShort")}</button>
        <button class="dlg-btn red" data-a="confirmDiscardResume">${t("discard")}</button>
      </div>`;
  }
  else if (d.type === "confirmDeleteSave") {
    inner = `${title(t("deleteSaveQ"))}
      <p class="dlg-name">${esc(d.name)}</p>
      <div class="dialog-actions">
        <button class="dlg-btn secondary" data-a="closeDialog">${t("cancelShort")}</button>
        <button class="dlg-btn red" ${act("confirmDeleteSaveFn", { id: d.id })}>${t("remove")}</button>
      </div>`;
  }
  else if (d.type === "confirmImport") {
    inner = `${title(t("importQ"))}
      <p class="tiny tc note mt8">${t("importFoundPrefix")}${d.groupsCount} ${t("lineupsWord")}, ${d.savesCount} ${t("savesWord")}.
        ${d.skipped ? `<br>${t("importSkipped").replace("{n}", d.skipped)}` : ""}<br>${t("importWarn")}</p>
      <div class="dialog-actions tight">
        <button class="dlg-btn secondary" data-a="cancelImport">${t("cancelShort")}</button>
        <button class="dlg-btn solid" data-a="confirmImportData">${t("importBtn")}</button>
      </div>`;
  }

  if (d.type === "dice") {
    const die = currentDie(), types = diceTypes(), n = S.settings.diceCount;
    const typeHtml = types.length > 1
      ? `<select id="diceType" aria-labelledby="diceTypeLbl">${types.map(x => `<option value="${esc(x.id)}"${x.id === die.id ? " selected" : ""}>${esc(x.name)} · ${x.faces.length} ${t("facesWord")}</option>`).join("")}</select>`
      : `<p class="dice-static">${esc(die.name)} · ${die.faces.length} ${t("facesWord")}</p>`;
    inner = `${title(t("dice"))}
      <p class="tiny mt" id="diceCountLbl">${t("diceCountQ")}</p>
      <div class="row font-ctl dice-count" role="group" aria-labelledby="diceCountLbl">
        <button class="btn-outline font-btn" id="diceDec" aria-label="${t("diceFewer")}"${n <= 1 ? " disabled" : ""} ${act("diceCount", { v: -1 })}>\u2212</button>
        <span class="pct" aria-live="polite">${n}</span>
        <button class="btn-outline font-btn" id="diceInc" aria-label="${t("diceMore")}"${n >= LIMITS.diceCount ? " disabled" : ""} ${act("diceCount", { v: 1 })}>+</button>
      </div>
      <p class="tiny mt" id="diceTypeLbl">${t("diceTypeQ")}</p>
      ${typeHtml}
      <button class="btn mt" id="rollBtn" data-autofocus data-a="rollDice">${t("rollBtn")}</button>
      <div class="dice-out" id="diceOut">${d.results ? diceTilesHtml(die, d.results) : ""}</div>
      <p class="dice-info" id="diceInfo" role="status">${d.results ? diceInfoHtml(die, d.results) : ""}</p>
      <div id="diceLogBox">${diceLogHtml(d)}</div>
      <p class="tiny tc note mt8">${t("diceNote")}</p>
      <div class="dialog-actions tight"><button class="dlg-btn secondary" data-a="closeDialog">${t("close")}</button></div>`;
  }
  else if (d.type === "editDie") {
    const dd = S.dieDraft;
    if (!dd) { S.dialog = null; return ""; }
    const rows = dd.faces.map((f, i) => `<div class="face-row">
        <span class="tiny face-n" aria-hidden="true">${i + 1}</span>
        <input type="text" class="face-input" id="dieFace${i}" data-face="${i}" maxlength="${LIMITS.faceText}" value="${esc(f.t)}" aria-label="${t("faceN").replace("{n}", i + 1)}" autocomplete="off">
        <button class="die-sw${f.c ? " col " + cc(f.c) : ""}" id="dieCol${i}" aria-label="${esc(faceColorLabel(i, f.c))}" ${act("dieCycleColor", { v: i })}>${f.c ? "" : "\u2014"}</button>
      </div>`).join("");
    inner = `${title(dd.id ? t("editDieTitle") : t("newDieTitle"))}
      <label class="tiny" for="dieName">${t("dieName")}</label>
      <input type="text" id="dieName" maxlength="${LIMITS.dieName}" placeholder="${t("dieNamePlaceholder")}" value="${esc(dd.name)}" autocomplete="off">
      <p class="tiny mt" id="facesCountLbl">${t("facesCount")}</p>
      <div class="row font-ctl" role="group" aria-labelledby="facesCountLbl">
        <button class="btn-outline font-btn" id="dieFacesDec" aria-label="\u2212"${dd.faces.length <= LIMITS.diceFacesMin ? " disabled" : ""} ${act("dieFaces", { v: -1 })}>\u2212</button>
        <span class="pct">${dd.faces.length}</span>
        <button class="btn-outline font-btn" id="dieFacesInc" aria-label="+"${dd.faces.length >= LIMITS.diceFacesMax ? " disabled" : ""} ${act("dieFaces", { v: 1 })}>+</button>
      </div>
      <div class="face-list">${rows}</div>
      <p class="tiny note mt8">${t("facesHint")}</p>
      <div class="dialog-actions">
        <button class="dlg-btn secondary" data-a="cancelDie">${t("cancelShort")}</button>
        <button class="dlg-btn solid" data-a="saveDie">${t("save")}</button>
      </div>`;
    noBack = true; // szkic nie ginie po przypadkowym dotknięciu tła
  }
  else if (d.type === "confirmDeleteDie") {
    inner = `${title(t("deleteDieQ"))}
      <p class="dlg-name">${esc(d.name)}</p>
      <div class="dialog-actions">
        <button class="dlg-btn secondary" data-a="closeDialog">${t("cancelShort")}</button>
        <button class="dlg-btn red" ${act("confirmDeleteDieFn", { id: d.id })}>${t("remove")}</button>
      </div>`;
  }

  return `<div class="dialog-back" data-dlg="${d.type}"${noBack ? "" : ' data-a="dialogBackdrop"'}>
    <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="dlgTitle">${inner}</div></div>`;
}

/* ================================================================
   8. AKCJE (model), PRZECIĄGANIE, DELEGACJA ZDARZEŃ, INICJALIZACJA
   ================================================================ */
/* Aktualizacja nakładek (dialog + toast) bez przebudowy widoku głównego */
function updateOverlay() {
  const dlgEl = app.querySelector(".dialog-back");
  if (!S.dialog) { if (dlgEl) dlgEl.remove(); return; }
  /* fokus wewnątrz dialogu (np. na „+” przy liczbie kości) wraca po przebudowie, o ile element ma id */
  const ae = document.activeElement;
  const aid = dlgEl && ae && dlgEl.contains(ae) && ae.id ? ae.id : null;
  const html = dialogHtml();
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  const nd = tmp.querySelector(".dialog"), od = dlgEl && dlgEl.querySelector(".dialog");
  if (dlgEl && od && nd && dlgEl.dataset.dlg === S.dialog.type) {
    /* ten sam dialog: podmieniamy tylko zawartość — bez ponownej animacji wejścia, rozmycia tła
       i utraty przewinięcia (to właśnie powodowało miganie przy zmianie liczby ścianek/kości) */
    const sc = od.scrollTop, fl = od.querySelector(".face-list"), fsc = fl ? fl.scrollTop : 0;
    od.innerHTML = nd.innerHTML;
    od.scrollTop = sc;
    const fl2 = od.querySelector(".face-list");
    if (fl2) fl2.scrollTop = fsc;
  } else {
    if (dlgEl) dlgEl.remove();
    app.insertAdjacentHTML("beforeend", html);
  }
  const re = aid ? document.getElementById(aid) : null;
  if (re && !re.disabled) re.focus(); else focusDialog();
}

function focusDialog() {
  const dlg = document.querySelector(".dialog");
  if (!dlg) return;
  const first = dlg.querySelector("[data-autofocus]") || dlg.querySelector("input") || dlg.querySelector("button:not(:disabled)");
  if (first) first.focus();
}

/* RENDER CZĄSTKOWY (ekran gry): przebudowywane są TYLKO karty, których HTML się zmienił.
   Gdy kolejność kart w DOM różni się od S.players (np. po zmianie kolejności) — pełna przebudowa listy. */
function cacheCards(cards) {
  S.cardCache = {};
  S.players.forEach((p, i) => { S.cardCache[p.id] = cards[i]; });
}

function partialRenderGame() {
  const undoBtn = app.querySelector('[data-a="undo"]');
  if (undoBtn) undoBtn.disabled = !S.history.length;

  /* pasek statusu (runda / cel) — aktualizowany w miejscu, bez przebudowy nagłówka */
  const rb = app.querySelector('[data-a="nextRound"]');
  if (rb && S.modules && S.modules.rounds.on) { rb.textContent = roundsLabel(); rb.setAttribute("aria-label", t("nextRound") + ": " + roundsLabel()); }
  const tb = app.querySelector('[data-stat="target"]');
  if (tb && S.modules && S.modules.target.on) tb.textContent = "\u2691" + S.modules.target.value;
  const tm = app.querySelector("#timerStatLabel");
  if (tm && S.modules && S.modules.timer.on) tm.textContent = timerLabel(timerMs());

  const scroll = app.querySelector(".scroll");
  if (scroll) {
    const cards = S.players.map(playerCardHtml);
    const existing = Array.from(scroll.querySelectorAll("[data-card]"));
    const sameOrder = existing.length === S.players.length && existing.length > 0 &&
      existing.every((el, i) => el.dataset.card === S.players[i].id);
    if (sameOrder && S.cardCache) {
      S.players.forEach((p, i) => {
        if (S.cardCache[p.id] !== cards[i]) {
          const tmp = document.createElement("div");
          tmp.innerHTML = cards[i];
          scroll.replaceChild(tmp.firstElementChild, existing[i]);
        }
      });
    } else {
      scroll.innerHTML = cards.join("");
    }
    cacheCards(cards);
  }
  updateOverlay();
}

function render() {
  syncWakeLock();
  if (Drag.el) return; // nie przebudowujemy DOM w trakcie przeciągania karty
  if (S.screen === "game" && S.lastScreen === "game" && app.dataset.screen === "game" && app.querySelector(".scroll")) {
    partialRenderGame();
    return;
  }

  S.lastScreen = S.screen;
  app.dataset.screen = S.screen;

  const activeEl = document.activeElement;
  const activeId = activeEl && activeEl.id ? activeEl.id : null;

  let html = "";
  if (S.screen === "home") html = viewHome();
  else if (S.screen === "setup") html = viewSetup();
  else if (S.screen === "settings") html = viewSettings();
  else html = viewGame();

  html += dialogHtml();
  app.innerHTML = html;

  /* Przywrócenie fokusu aktywnego pola (np. podczas pisania) */
  if (activeId) {
    const el = document.getElementById(activeId);
    if (el && typeof el.focus === "function") {
      el.focus();
      if (typeof el.selectionStart === "number") el.selectionStart = el.selectionEnd = el.value ? el.value.length : 0;
    }
  } else if (S.dialog) {
    focusDialog();
  }
}

function closeDialog() {
  S.editDraft = null;
  S.dieDraft = null;
  S.dialog = null;
  render();
  restoreFocus();
}
function restoreFocus() {
  if (S.lastFocus && document.contains(S.lastFocus) && typeof S.lastFocus.focus === "function") S.lastFocus.focus();
  S.lastFocus = null;
}
function setScreen(s) { S.dialog = null; S.editDraft = null; S.dieDraft = null; S.screen = s; render(); window.scrollTo(0, 0); }
function openDialogFn(d) {
  if (!document.querySelector(".dialog-back")) S.lastFocus = document.activeElement;
  S.dialog = d;
  render();
}

function addGroupIfNew(players) {
  const sig = Logic.signature(players);
  if (players.length && !S.groups.some(g => Logic.signature(g.players) === sig)) {
    while (S.groups.length >= LIMITS.groups) S.groups.shift(); // limit jak przy wczytywaniu: wypada najstarszy, nie najnowszy
    S.groups.push({ id: newId(), players: players.map(p => ({ name: p.name, color: p.color })) });
    saveGroups(S.groups);
  }
}

function startGame(players) {
  archiveResume();
  S.players = players.map((p, i) => ({ id: String(i), name: p.name, color: p.color, score: 0 }));
  S.pending = {};
  S.history = [];
  S.cardCache = null;
  /* moduły gry: szkic z ekranu NOWA GRA staje się stanem rozgrywki */
  S.modules = sanitizeModules(S.setupModules || null);
  S.modules.rounds.current = 1;
  if (S.modules.timer.on) S.modules.timer.elapsed = 0, S.modules.timer.startedAt = Date.now();
  applyTargetFlags();
  /* losowanie pierwszego gracza: moduł włączony = od razu wynik, bez pytania */
  S.dialog = S.modules.draw.on
    ? { type: "drawResult", name: S.players[randInt(S.players.length)].name }
    : null;
  S.screen = "game";
  render(); window.scrollTo(0, 0);
}

/* Cel osiągnięty: flaga gracza (⚑) odtwarzana po wznowieniu/wczytaniu — bez okna informacyjnego */
function applyTargetFlags() {
  const m = S.modules && S.modules.target;
  S.players.forEach(p => { p.targetHit = !!(m && m.on && Math.trunc(p.score) >= m.value); });
}

/* Zmiana kolejności graczy (klawiatura: strzałki góra/dół na uchwycie) */
function movePlayer(id, dir) {
  const i = S.players.findIndex(p => p.id === id), j = i + dir;
  if (i < 0 || j < 0 || j >= S.players.length) return;
  [S.players[i], S.players[j]] = [S.players[j], S.players[i]];
  render();
  persistGame();
  const h = app.querySelector('[data-card="' + CSS.escape(id) + '"] [data-drag]');
  if (h) h.focus();
}

/* --- Akcje UI --- */
const ACTIONS = {
  /* nawigacja */
  newGame() {
    S.players = []; S.setupName = ""; S.setupColor = null;
    /* szkic modułów: start od zestawu domyślnego z Ustawień */
    const dm = S.settings.defaultModules || defaultModules(null);
    S.setupModules = {
      draw: { on: dm.draw === true },
      rounds: { on: dm.rounds === true, count: 9, current: 1 },
      timer: { on: dm.timer === true, elapsed: 0, startedAt: null },
      target: { on: dm.target === true, value: 100 },
      dice: { on: dm.dice === true }
    };
    setScreen("setup");
  },
  openSettings() { setScreen("settings"); },
  backHome() { setScreen("home"); },
  dialogBackdrop(el, e) { if (e.target === el) closeDialog(); },
  closeDialog() { closeDialog(); },
  noop() {}, // klik wewnątrz karty modułu (np. pole celu) nie przełącza modułu

  /* skład / gracze */
  askRemoveGroup(id) {
    const g = S.groups.find(x => x.id === id); if (!g) return;
    openDialogFn({ type: "confirmDeleteGroup", id: id, label: g.players.map(p => p.name).join(" • ") });
  },
  confirmDeleteGroup(id) {
    S.groups = S.groups.filter(g => g.id !== id);
    saveGroups(S.groups);
    closeDialog();
  },
  playGroup(id) {
    const g = S.groups.find(x => x.id === id); if (!g) return;
    startGame(g.players);
  },
  pickColor(c) {
    if (usedColors().includes(c)) return;
    S.setupColor = c;
    render();
  },
  /* Dodawanie gracza: okno z imieniem → okno z wyborem koloru (klik dodaje) */
  openAddPlayer() {
    if (S.players.length >= PLAYER_COLORS.length) return;
    S.setupName = ""; S.setupColor = null;
    openDialogFn({ type: "addPlayer", value: "" });
  },
  confirmAddPlayerName() {
    const d = S.dialog;
    if (!d || d.type !== "addPlayer") return;
    const name = (d.value || "").trim().slice(0, LIMITS.name);
    if (!name) { toast(t("nameEmpty")); return; }
    if (usedColors().length >= PLAYER_COLORS.length) return;
    S.dialog = { type: "addPlayerColor", name: name };
    render();
  },
  backToPlayerName() {
    const d = S.dialog;
    if (!d || d.type !== "addPlayerColor") return;
    S.dialog = { type: "addPlayer", value: d.name };
    render();
  },
  pickNewPlayerColor(c) {
    const d = S.dialog;
    if (!d || d.type !== "addPlayerColor") return;
    if (usedColors().includes(c)) return;
    d.color = c;
    render();
  },
  confirmAddPlayer() {
    const d = S.dialog;
    if (!d || d.type !== "addPlayerColor" || !d.color) return;
    if (usedColors().includes(d.color)) { d.color = null; render(); return; }
    S.players.push({ id: newId(), name: d.name, color: d.color, score: 0 });
    closeDialog();
    render();
  },
  removeSetupPlayer(id) { S.players = S.players.filter(p => p.id !== id); render(); },
  startFromSetup() {
    if (!S.players.length) return;
    addGroupIfNew(S.players);
    startGame(S.players);
  },

  /* moduły gry — szkic (ekran NOWA GRA) */
  setupModToggle(k) {
    const m = S.setupModules && S.setupModules[k];
    if (!m) return;
    m.on = !m.on;
    render();
  },
  setupModRounds(d) {
    const r = S.setupModules && S.setupModules.rounds;
    if (!r) return;
    r.count = Math.max(0, Math.min(LIMITS.roundsMax, (r.count || 0) + Number(d)));
    render();
  },
  setupModRoundsInf() {
    const r = S.setupModules && S.setupModules.rounds;
    if (!r) return;
    r.count = 0;
    render();
  },
  updateSetupTarget(v) {
    const m = S.setupModules && S.setupModules.target;
    if (!m) return;
    const n = Math.trunc(Number(String(v).replace(/[^0-9]/g, "")));
    if (Number.isFinite(n) && n > 0) m.value = Math.min(LIMITS.targetMax, n);
  },

  /* moduły gry — w trakcie gry (okno ołówka) */
  editModToggle(k) {
    const m = S.modules && S.modules[k];
    if (!m) return;
    m.on = !m.on;
    if (k === "timer") { m.on ? timerStart() : timerStop(); }
    if (k === "target") { m.on ? applyTargetFlags() : S.players.forEach(p => { p.targetHit = false; }); }
    render();
  },
  editModRounds(d) {
    const r = S.modules && S.modules.rounds;
    if (!r || !r.on) return;
    r.count = Math.max(0, Math.min(LIMITS.roundsMax, (r.count || 0) + Number(d)));
    render();
  },
  editModRoundsInf() {
    const r = S.modules && S.modules.rounds;
    if (!r || !r.on) return;
    r.count = 0;
    render();
  },
  updateEditTarget(v) {
    const m = S.modules && S.modules.target;
    if (!m) return;
    const n = Math.trunc(Number(String(v).replace(/[^0-9]/g, "")));
    if (Number.isFinite(n) && n > 0) m.value = Math.min(LIMITS.targetMax, n);
    applyTargetFlags();
  },

  /* licznik rund: klik w status potwierdza przejście do kolejnej rundy */
  nextRound() {
    const r = S.modules && S.modules.rounds;
    if (!r || !r.on) return;
    openDialogFn({ type: "nextRound" });
  },
  doNextRound() {
    const r = S.modules && S.modules.rounds;
    closeDialog();
    if (!r || !r.on) return;
    r.current += 1;
    render();
    roundChangedToast();
  },

  /* zestaw modułów domyślnych (Ustawienia) */
  setDefaultModule(k, on) {
    if (!S.settings.defaultModules || !(k in S.settings.defaultModules)) return;
    S.settings.defaultModules[k] = on === true;
    saveSettings();
  },

  /* punktacja */
  pend(id, d) { S.pending[id] = (S.pending[id] || 0) + Number(d); render(); },
  pendCancel(id) { delete S.pending[id]; render(); },
  pendApply(id) {
    const d = S.pending[id] || 0;
    if (!d) return; // podwójne ✓ jest bezpieczne: pierwsze kliknięcie zeruje oczekujące punkty
    if (!Logic.applyPoints(S, id, d)) { toast(t("pointsLimit")); return; } // punkty zostają w oczekujących — nic nie ginie po cichu
    delete S.pending[id];
    S.animScore = id;
    checkTargetHit(Logic.findPlayer(S, id));
    if (navigator.vibrate) { try { navigator.vibrate(15); } catch (e) {} }
    render();
    setTimeout(() => { if (S.animScore === id) { S.animScore = null; render(); } }, 180);
  },
  undo() {
    const h = S.history[S.history.length - 1];
    if (!h) return;
    const p = Logic.findPlayer(S, h.id);
    const entry = { id: h.id, delta: h.delta };
    Logic.undo(S);
    if (S.modules && S.modules.target.on) applyTargetFlags();
    render();
    undoToast(t("undoToast").replace("{x}", (h.delta > 0 ? "+" : "") + h.delta).replace("{name}", p ? p.name : ""), entry);
  },
  openCustomAmount(id, sign) { openDialogFn({ type: "customAmount", id: id, sign: Number(sign), value: "" }); },
  confirmCustomAmount() {
    const d = S.dialog;
    if (!d || d.type !== "customAmount") return;
    const n = Logic.parsePoints(d.value);
    if (!n) { toast(t("numPositive")); return; }
    S.pending[d.id] = (S.pending[d.id] || 0) + d.sign * n;
    S.dialog = null;
    render();
  },
  openEditHistory(hid) {
    const h = S.history.find(x => x.hid === hid);
    if (!h) return;
    const p = S.players.find(x => x.id === h.id);
    openDialogFn({ type: "editHistory", hid: hid, player: p ? p.name : "", value: String(Math.abs(h.delta)), sign: h.delta < 0 ? -1 : 1 });
  },
  setHistorySign(sign) { if (S.dialog && S.dialog.type === "editHistory") { S.dialog.sign = Number(sign); render(); } },
  saveHistoryEdit() {
    const d = S.dialog;
    if (!d || d.type !== "editHistory") return;
    const n = Logic.parsePoints(d.value);
    if (!n) { toast(t("numPositive")); return; }
    if (!Logic.editEntry(S, d.hid, d.sign * n)) { toast(t("pointsLimit")); return; }
    S.dialog = null;
    if (S.modules && S.modules.target.on) applyTargetFlags();
    render();
    restoreFocus();
  },
  deleteHistoryEntry(hid) {
    Logic.deleteEntry(S, hid);
    S.dialog = null;
    if (S.modules && S.modules.target.on) applyTargetFlags();
    render();
    restoreFocus();
  },

  /* edycja składu w grze */
  openEdit() { openDialogFn({ type: "edit" }); },
  openEditPlayer(id) { S.editDraft = null; openDialogFn({ type: "editPlayer", id: id }); },
  cancelEditPlayer() { S.editDraft = null; S.dialog = { type: "edit" }; render(); },
  backToEditList() { S.dialog = S.players.length ? { type: "edit" } : null; render(); },
  askRemovePlayer(id) {
    const p = S.players.find(x => x.id === id);
    if (!p) return;
    openDialogFn({ type: "confirmDelete", id: id, name: p.name });
  },
  confirmDeletePlayer(id) {
    S.players = S.players.filter(p => p.id !== id);
    S.history = S.history.filter(m => m.id !== id);
    delete S.pending[id];
    S.dialog = S.players.length ? { type: "edit" } : null;
    render();
  },
  editColor(id, c) {
    if (!S.editDraft || usedColors(id).includes(c)) return;
    S.editDraft.color = c;
    render();
  },
  saveEdit(id) {
    const p = S.players.find(x => x.id === id);
    if (!p || !S.editDraft) return;
    const name = S.editDraft.name.trim().slice(0, LIMITS.name);
    if (!name) { toast(t("nameEmpty")); return; }
    p.name = name;
    p.color = S.editDraft.color;
    S.editDraft = null;
    S.dialog = { type: "edit" };
    render();
  },
  openFinish() { openDialogFn({ type: "finish" }); },
  finishGame() { timerStop(); S.players = []; S.pending = {}; S.history = []; S.cardCache = null; S.modules = null; S.setupModules = null; clearPersistedGame(); setScreen("home"); restoreFocus(); },
  resumeGame() {
    const r = S.resume; if (!r) return;
    S.players = r.players; S.history = r.history;
    S.modules = r.modules || sanitizeModules(null);
    if (S.modules.timer.on && !S.modules.timer.startedAt) S.modules.timer.startedAt = Date.now(); // wznowienie zegara
    applyTargetFlags();
    S.pending = {}; S.cardCache = null; S.resume = null; S.dialog = null; S.screen = "game";
    render(); window.scrollTo(0, 0);
  },
  askDiscardResume() { openDialogFn({ type: "confirmDiscardResume" }); },
  confirmDiscardResume() { S.resume = null; clearPersistedGame(); closeDialog(); },
  /* Wyjście do menu: gra (jeśli ma wpisy punktacji) jest zapisywana i czeka pod przyciskiem „WZNÓW GRĘ” */
  askExitGame() {
    if (!S.players.length || !S.history.length) { setScreen("home"); return; }
    openDialogFn({ type: "exitGame", pending: Object.keys(S.pending).length > 0 });
  },
  exitToMenu() {
    timerStop(); // wyjście do menu zatrzymuje zegar (wznowienie go kontynuuje)
    persistGame();
    S.resume = toResume(S.players, S.history, lastPersistAt || Date.now(), S.modules);
    S.players = []; S.pending = {}; S.history = []; S.cardCache = null; S.modules = null;
    setScreen("home");
    restoreFocus();
  },

  /* wczytywanie zapisanych gier (z Ustawień) */
  askLoadSave(id) { openDialogFn({ type: "confirmLoadSave", id: id, warn: !!S.resume }); },
  doLoadSave(id) {
    const s = S.saves.find(x => x.id === id);
    if (!s) { closeDialog(); return; }
    archiveResume();
    S.players = clone(s.players);   // zapisy są już po sanityzacji (spójne ID graczy i historii)
    S.history = clone(s.history);
    S.modules = s.modules ? clone(s.modules) : sanitizeModules(null);
    if (S.modules.timer.on && !S.modules.timer.startedAt) S.modules.timer.startedAt = Date.now();
    applyTargetFlags();
    S.pending = {};
    S.cardCache = null;
    S.dialog = null;
    S.screen = "game";
    render(); window.scrollTo(0, 0);
  },
  askDeleteSave(id) {
    const s = S.saves.find(x => x.id === id);
    if (!s) return;
    openDialogFn({ type: "confirmDeleteSave", id: id, name: s.name });
  },
  confirmDeleteSaveFn(id) {
    S.saves = S.saves.filter(x => x.id !== id);
    saveSaves(S.saves);
    closeDialog();
  },

  /* ustawienia */
  changeFontScale(delta) {
    S.settings.fontScale = Math.max(FONT_MIN, Math.min(FONT_MAX, Math.round((S.settings.fontScale + Number(delta)) * 10) / 10));
    applyFontScale();
    saveSettings();
    render();
  },
  setKeepAwake(on) { S.settings.keepAwake = !!on; wakeFailed = false; saveSettings(); render(); },
  setLang(lang) {
    if ((lang !== "pl" && lang !== "en") || S.settings.lang === lang) return;
    S.settings.lang = lang;
    applyLang();
    saveSettings();
    render();
  },
  addButtonValue() {
    const existing = S.settings.buttonValues;
    if (existing.length >= MAX_BUTTON_PAIRS) { toast(t("maxPairs").replace("{n}", MAX_BUTTON_PAIRS)); return; }
    let candidate = 5;
    while (existing.includes(candidate)) candidate++;
    existing.push(candidate);
    saveSettings(); render();
  },
  removeButtonValue(index) {
    const vals = buttonValues();
    if (vals.length <= 1) return;
    S.settings.buttonValues = vals.filter((_, i) => i !== Number(index));
    saveSettings(); render();
  },
  updateButtonValue(index, raw) {
    const vals = buttonValues();
    const s = String(raw == null ? "" : raw).trim();
    const n = /^\d+$/.test(s) ? parseInt(s, 10) : 0;
    if (n < 1 || n > 9999) { toast(t("numRange")); render(); return; }
    if (vals.includes(n) && vals[index] !== n) { toast(t("valueExists")); render(); return; }
    vals[index] = n;
    S.settings.buttonValues = vals;
    saveSettings(); render();
  },

  /* kości: rzut na ekranie punktacji */
  openDice() { openDialogFn({ type: "dice", results: null, rolling: false, log: [], rollNo: 0 }); },
  diceCount(delta) {
    const d = S.dialog; if (!d || d.type !== "dice") return;
    S.settings.diceCount = Math.max(1, Math.min(LIMITS.diceCount, S.settings.diceCount + Number(delta)));
    d.results = null; saveSettings(); updateOverlay();
  },
  setDiceType(id) {
    const d = S.dialog; if (!d || d.type !== "dice" || !diceTypes().some(x => x.id === id)) return;
    S.settings.diceType = id; d.results = null; saveSettings(); updateOverlay();
  },
  rollDice() {
    const d = S.dialog;
    if (!d || d.type !== "dice" || d.rolling) return;
    const die = currentDie(), n = S.settings.diceCount;
    const finalIdx = Array.from({ length: n }, () => randInt(die.faces.length));
    const finish = () => {
      d.rolling = false;
      if (S.dialog !== d) return;
      d.results = finalIdx;
      d.log.push({ n: ++d.rollNo, name: die.name, items: finalIdx.map(i => ({ t: die.faces[i].t, c: die.faces[i].c })), sum: finalIdx.length > 1 ? diceSum(die, finalIdx) : null });
      if (d.log.length > LIMITS.diceLog) d.log.shift();
      const o = document.getElementById("diceOut"), i = document.getElementById("diceInfo"), lg = document.getElementById("diceLogBox");
      if (o) o.innerHTML = diceTilesHtml(die, finalIdx);
      if (i) i.innerHTML = diceInfoHtml(die, finalIdx);
      if (lg) lg.innerHTML = diceLogHtml(d);
      if (navigator.vibrate) { try { navigator.vibrate(15); } catch (e) {} }
    };
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !document.getElementById("diceOut")) { finish(); return; }
    /* krótka animacja: migają losowe ścianki (bezpośrednio w DOM — bez przebudowy dialogu), potem wynik */
    d.rolling = true; d.results = null;
    const info = document.getElementById("diceInfo"); if (info) info.innerHTML = "";
    let tick = 0;
    const step = () => {
      if (S.dialog !== d) return; // okno zamknięte w trakcie rzutu
      if (++tick > 9) { finish(); return; }
      const o = document.getElementById("diceOut");
      if (o) o.innerHTML = diceTilesHtml(die, finalIdx.map(() => randInt(die.faces.length)));
      setTimeout(step, 60);
    };
    step();
  },

  /* kości: definiowanie własnych typów (Ustawienia) */
  addDie() {
    if (S.settings.dice.length >= LIMITS.diceTypes) { toast(t("maxDice").replace("{n}", LIMITS.diceTypes)); return; }
    S.dieDraft = { id: null, name: "", faces: DEFAULT_DIE.faces.map(f => ({ t: f.t, c: "" })) };
    openDialogFn({ type: "editDie" });
  },
  editDie(id) {
    const die = S.settings.dice.find(x => x.id === id); if (!die) return;
    S.dieDraft = { id: die.id, name: die.name, faces: clone(die.faces) };
    openDialogFn({ type: "editDie" });
  },
  dieFaces(delta) {
    const dd = S.dieDraft; if (!dd) return;
    const n = Math.max(LIMITS.diceFacesMin, Math.min(LIMITS.diceFacesMax, dd.faces.length + Number(delta)));
    while (dd.faces.length < n) dd.faces.push({ t: String(dd.faces.length + 1), c: "" });
    dd.faces.length = n;
    updateOverlay();
  },
  /* kolor ścianki: brak → 8 kolorów palety → brak; aktualizujemy tylko ten przycisk (bez przebudowy listy) */
  dieCycleColor(i, el) {
    const f = S.dieDraft && S.dieDraft.faces[Number(i)]; if (!f) return;
    const order = [""].concat(PLAYER_COLORS);
    f.c = order[(order.indexOf(f.c) + 1) % order.length];
    if (el && el.setAttribute) {
      el.className = "die-sw" + (f.c ? " col " + cc(f.c) : "");
      el.textContent = f.c ? "" : "\u2014";
      el.setAttribute("aria-label", faceColorLabel(Number(i), f.c));
    }
  },
  cancelDie() { S.dieDraft = null; closeDialog(); },
  saveDie() {
    const dd = S.dieDraft; if (!dd) return;
    const name = dd.name.trim().slice(0, LIMITS.dieName);
    if (!name) { toast(t("dieNameEmpty")); return; }
    const faces = dd.faces.map((f, i) => ({ t: String(f.t).trim().slice(0, LIMITS.faceText) || String(i + 1), c: cix(f.c) >= 0 ? f.c : "" }));
    if (dd.id) {
      const idx = S.settings.dice.findIndex(x => x.id === dd.id);
      if (idx >= 0) S.settings.dice[idx] = { id: dd.id, name: name, faces: faces };
    } else {
      if (S.settings.dice.length >= LIMITS.diceTypes) { toast(t("maxDice").replace("{n}", LIMITS.diceTypes)); return; }
      S.settings.dice.push({ id: newId(), name: name, faces: faces });
    }
    saveSettings();
    closeDialog();
  },
  askDeleteDie(id) {
    const die = S.settings.dice.find(x => x.id === id); if (!die) return;
    openDialogFn({ type: "confirmDeleteDie", id: id, name: die.name });
  },
  confirmDeleteDieFn(id) {
    S.settings.dice = S.settings.dice.filter(x => x.id !== id);
    if (S.settings.diceType === id) S.settings.diceType = DEFAULT_DIE.id;
    saveSettings();
    closeDialog();
  },

  /* eksport / import */
  exportData() {
    try {
      const payload = { version: SCHEMA_VERSION, exportedAt: Date.now(), groups: S.groups, saves: S.saves, settings: S.settings };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = S.settings.lang === "en" ? "abax-tracker-backup.json" : "abax-tracker-kopia-zapasowa.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      toast(t("exported"));
    } catch (e) { toast(t("exportErr")); }
  },
  importClick() { const inp = document.getElementById("importFile"); if (inp) inp.click(); },
  cancelImport() { S.pendingImport = null; closeDialog(); },
  confirmImportData() {
    const data = S.pendingImport;
    if (!data) { closeDialog(); return; }
    S.groups = data.groups;
    saveGroups(S.groups);
    S.saves = data.saves;
    saveSaves(S.saves);
    if (data.settings) {
      S.settings = data.settings;
      saveSettings();
      applyFontScale();
      applyLang();
    }
    S.pendingImport = null;
    S.dialog = null;
    toast(t("imported"));
    render();
  },
  /* Testy deweloperskie: tylko przez ?test w adresie (brak przycisku w interfejsie) */
  runTests() {
    const r = runSelfTests();
    toast(t(r.passed === r.total ? "testsOk" : "testsFail").replace("{p}", r.passed).replace("{t}", r.total));
  }
};

/* Import: walidacja i sanityzacja ZAWSZE przebiegają automatycznie po wybraniu pliku */
function handleImportFile(file) {
  if (!file) return;
  if (file.size > LIMITS.importBytes) { toast(t("importTooBig")); return; }
  const reader = new FileReader();
  reader.onload = function () {
    try {
      const clean = validateImport(JSON.parse(String(reader.result)));
      if (!clean) { toast(t("invalidData")); return; }
      S.pendingImport = clean; // import używa WYŁĄCZNIE danych po sanityzacji
      openDialogFn({ type: "confirmImport", groupsCount: clean.groups.length, savesCount: clean.saves.length, skipped: clean.skipped });
    } catch (e) { toast(t("badFile")); }
  };
  reader.onerror = function () { toast(t("fileReadErr")); };
  reader.readAsText(file);
  const inp = document.getElementById("importFile");
  if (inp) inp.value = "";
}

/* --- Przeciąganie kart graczy (uchwyt ⇕: mysz, dotyk, pióro) ---
   Karta podąża za palcem (transform), a sąsiedzi są przestawiani na żywo w DOM.
   Po upuszczeniu kolejność z DOM zapisuje się do S.players. Brzegi ekranu przewijają stronę. */
const Drag = { el: null, grab: 0, grabX: 0, ty: 0, tx: 0, y: 0, x: 0, raf: 0 };

function dragStart(e, handle) {
  const card = handle.closest("[data-card]");
  if (!card || Drag.el || (e.pointerType === "mouse" && e.button !== 0)) return;
  e.preventDefault();
  try { handle.setPointerCapture(e.pointerId); } catch (err) {}
  Drag.el = card;
  const cr = card.getBoundingClientRect();
  Drag.grab = e.clientY - cr.top; Drag.grabX = e.clientX - cr.left;
  Drag.ty = 0; Drag.tx = 0; Drag.y = e.clientY; Drag.x = e.clientX;
  card.classList.add("dragging");
  Drag.raf = requestAnimationFrame(dragTick);
}
function dragTick() {
  const card = Drag.el;
  if (!card) return;
  if (Drag.y < 70) window.scrollBy(0, -12); else if (Drag.y > window.innerHeight - 70) window.scrollBy(0, 12);
  const list = card.parentNode;
  /* Kolejność docelowa liczona po OBU osiach: działa w jednej kolumnie (mobile)
     i w siatce desktop (ekran gry jest wówczas CSS gridem). Karta trafia tam,
     gdzie jest kursor: w swoim rzędzie po kolumnie (X), poza rzędem po rzędzie (Y). */
  const sibs = Array.from(list.querySelectorAll("[data-card]"));
  const i = sibs.indexOf(card);
  const others = sibs.filter(s => s !== card);
  let target = 0;
  for (const s of others) {
    const r = s.getBoundingClientRect();
    const cy = r.top + r.height / 2, cx = r.left + r.width / 2;
    const sameRow = Math.abs(cy - Drag.y) <= r.height / 2; // kursor w paśmie pionowym karty
    if (sameRow ? cx < Drag.x : cy < Drag.y) target++;
  }
  if (target !== i) list.insertBefore(card, target >= others.length ? null : others[target]);
  const rect = card.getBoundingClientRect();   // pozycja z bieżącą transformacją
  Drag.ty = Drag.y - Drag.grab - (rect.top - Drag.ty);   // pion: pozycja bez transformacji
  Drag.tx = Drag.x - Drag.grabX - (rect.left - Drag.tx);  // poziom (siatka desktop)
  card.style.transform = "translate(" + Drag.tx + "px," + Drag.ty + "px)";
  Drag.raf = requestAnimationFrame(dragTick);
}
function dragEnd() {
  const card = Drag.el;
  if (!card) return;
  cancelAnimationFrame(Drag.raf);
  card.classList.remove("dragging");
  card.style.transform = "";
  Drag.el = null;
  const order = Array.from(card.parentNode.querySelectorAll("[data-card]")).map(c => c.dataset.card);
  const byId = new Map(S.players.map(p => [p.id, p]));
  if (order.length === S.players.length && order.every(id => byId.has(id))) { S.players = order.map(id => byId.get(id)); persistGame(); }
}

document.addEventListener("pointerdown", function (e) {
  const h = e.target.closest && e.target.closest("[data-drag]");
  if (h) dragStart(e, h);
});
document.addEventListener("pointermove", function (e) { if (Drag.el) { Drag.y = e.clientY; Drag.x = e.clientX; } });
document.addEventListener("pointerup", dragEnd);
document.addEventListener("pointercancel", dragEnd);
window.addEventListener("blur", dragEnd);

/* --- Delegacja zdarzeń: click / input / change / keydown --- */
document.addEventListener("click", function (e) {
  const el = e.target.closest("[data-a]");
  if (!el) return;
  const fn = ACTIONS[el.dataset.a];
  if (!fn) return;
  const args = [];
  if ("id" in el.dataset) args.push(el.dataset.id);
  if ("v" in el.dataset) args.push(el.dataset.v);
  fn.call(ACTIONS, ...args, el, e);
  persistGame(); // autozapis po każdej akcji w grze (identyczny stan jest pomijany)
});

document.addEventListener("input", function (e) {
  const id = e.target.id;
  if (id === "newPlayerName" && S.dialog && S.dialog.type === "addPlayer") { S.dialog.value = e.target.value; }
  else if (id === "editName" && S.editDraft) { S.editDraft.name = e.target.value; }
  else if (id === "dieName" && S.dieDraft) { S.dieDraft.name = e.target.value; }
  else if (S.dieDraft && e.target.dataset && e.target.dataset.face !== undefined) {
    const f = S.dieDraft.faces[Number(e.target.dataset.face)];
    if (f) f.t = e.target.value;
  }
  else if ((id === "customAmountInput" || id === "editHistoryInput") && S.dialog) { S.dialog.value = e.target.value.replace(/[^0-9]/g, ""); }
});

document.addEventListener("change", function (e) {
  if (e.target.id === "importFile") { handleImportFile(e.target.files[0]); return; }
  if (e.target.id === "diceType") { ACTIONS.setDiceType(e.target.value); return; }
  if (e.target.id === "keepAwake") { ACTIONS.setKeepAwake(e.target.checked); return; }
  if (e.target.id === "setupTarget") { ACTIONS.updateSetupTarget(e.target.value); return; }
  if (e.target.id === "editTarget") { ACTIONS.updateEditTarget(e.target.value); return; }
  if (e.target.dataset && e.target.dataset.mod) { ACTIONS.setDefaultModule(e.target.dataset.mod, e.target.checked); return; }
  if (e.target.dataset && e.target.dataset.change === "updateButtonValue") {
    ACTIONS.updateButtonValue(Number(e.target.dataset.v), e.target.value);
  }
});

document.addEventListener("keydown", function (e) {
  /* Escape zamyka dialog (poza obowiązkowym wyborem pierwszego gracza) */
  if (e.key === "Escape" && S.dialog) { closeDialog(); return; }

  /* Zmiana kolejności z klawiatury: strzałki góra/dół na uchwycie karty */
  if ((e.key === "ArrowUp" || e.key === "ArrowDown") && e.target.matches && e.target.matches("[data-drag]")) {
    e.preventDefault();
    movePlayer(e.target.closest("[data-card]").dataset.card, e.key === "ArrowUp" ? -1 : 1);
    return;
  }

  /* Enter / Spacja aktywuje karty modułów (div[role=button] nie robi tego natywnie) */
  if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches('[role="button"][data-a]')) {
    e.preventDefault();
    const fn = ACTIONS[e.target.dataset.a];
    if (fn) fn.call(ACTIONS, e.target.dataset.v, e.target, e);
    return;
  }

  /* Enter zatwierdza w polach tekstowych */
  if (e.key === "Enter") {
    const id = e.target.id;
    const submit = { newPlayerName: "confirmAddPlayerName", customAmountInput: "confirmCustomAmount", editHistoryInput: "saveHistoryEdit" }[id];
    if (submit) { e.preventDefault(); ACTIONS[submit](); persistGame(); }
    return;
  }

  /* FOCUS TRAP: Tab krąży wewnątrz otwartego dialogu */
  if (e.key === "Tab" && S.dialog) {
    const dlg = document.querySelector(".dialog");
    if (!dlg) return;
    const focusables = Array.from(dlg.querySelectorAll("button, input, select")).filter(x => !x.disabled);
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1], active = document.activeElement;
    if (!dlg.contains(active)) { e.preventDefault(); first.focus(); }
    else if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
  }
});

/* --- Inicjalizacja --- */
document.addEventListener("visibilitychange", function () { wakeFailed = false; syncWakeLock(); });
applyLang();
applyFontScale();
render();

/* PWA: service worker tylko przez http(s) (nie działa z file://) */
if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
  window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  /* Nowy worker przejął kontrolę (skipWaiting + claim) → informujemy. Przy pierwszej instalacji
     (brak poprzedniego kontrolera) nic nie pokazujemy. Strona nie jest przeładowywana
     automatycznie, żeby nie przerwać trwającej gry — nowy kod działa od kolejnego otwarcia. */
  const hadController = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener("controllerchange", function () { if (hadController) toast(t("updateReady")); });
}

/* Komunikat po odzyskaniu uszkodzonych danych */
if (STORE.recovered) setTimeout(function () { toast(t(STORE.recoveredFromBak ? "storageCorrupt" : "storageCorruptNoBak")); }, 300);

/* Testy deweloperskie: dopisz ?test do adresu strony */
if (/[?&]test\b/.test(location.search)) ACTIONS.runTests();
window.__abaxTests = runSelfTests;