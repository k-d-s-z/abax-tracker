# Security Policy / Polityka bezpieczeństwa

## Supported Versions / Wspierane wersje

|Version|Supported|
|-|-|
|main (live)|✅|

Aplikacja jest wydawana ciągle z gałęzi `main` — poprawki bezpieczeństwa trafiają na żywo razem z normalnym wdrożeniem.

## Reporting a Vulnerability / Zgłaszanie podatności

**EN:** If you find a security issue in Abax Tracker, please open a private security advisory on this repository (**Security → Report a vulnerability**) or contact the maintainer directly. Do not open a public issue for unreported vulnerabilities. Please include steps to reproduce and the browser/device you tested. You should hear back within a few days.

**PL:** Jeśli znalazłeś problem bezpieczeństwa w Abax Tracker, zgłoś go przez prywatny security advisory w tym repozytorium (**Security → Report a vulnerability**) lub bezpośrednio do maintenera. Nie otwieraj publicznego issue dla niezgłoszonej podatności. Dołącz kroki reprodukcji oraz przeglądarkę/urządzenie. Odpowiedź powinna nadejść w ciągu kilku dni.

## Scope / Zakres

* Aplikacja jest w 100% client-side: żadne dane nie opuszczają urządzenia (brak sieci, backendu i kont).
* Dane (nazwy graczy, wyniki) są przechowywane w localStorage w jawnym tekście — nie przechowuj w nich danych wrażliwych.
* Zgłoszenia dotyczące nagłówków HTTP na GitHub Pages (brak `frame-ancestors` itd.) są znane i wynikają z ograniczeń hostingu.

