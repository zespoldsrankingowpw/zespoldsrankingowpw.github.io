# Strona rankingowa PW

Statyczny dashboard rankingów Politechniki Warszawskiej publikowany przez GitHub Pages.

## Struktura

- `index.html` — treść strony, nawigacja, dostępne opisy i tabela SDG.
- `assets/css/dashboard.css` — style dashboardu.
- `assets/js/ranking-data.js` — dane wykresów, szeregi rankingowe oraz odsyłacze `sdgReportData`.
- `assets/js/dashboard.js` — wykresy, filtry, nawigacja i modale.
- `assets/pw-logo.png` — logo i ikona strony.

## Edycje i źródła

Panel THE pokazuje WUR 2027 oraz wyniki dziedzinowe 2026. Moduł metodyki WUR 2026 opisuje tę konkretną edycję; odwołuje się do jej wyniku, niezależnie od ostatniego roku w szeregu ogólnym.

- [Profil PW w THE](https://www.timeshighereducation.com/world-university-rankings/warsaw-university-technology) — przedziały i edycje.
- [Tabela THE Europe 2027](https://beta.timeshighereducation.com/student/best-universities/best-universities-europe) — kolumny World Rank, Overall i pięć filarów.
- [Raport SDG PW 2025](https://www.das.pw.edu.pl/Rankingi-PW/Zrownowazony-rozwoj/SDG/2025/) — adresy części według 17 celów.

## Edycja

Wartości rankingowe edytuje się w `assets/js/ranking-data.js`. Lata i szeregi wartości muszą mieć zgodną długość; `null` oznacza brak wartości. Dopisanie nowej edycji nie zmienia historycznych komórek. Przedział pozycji i przedział punktacji należy zachować jako przedziały.

Po aktualizacji danych należy sprawdzić daty, etykiety oraz podsumowania w `index.html` i modalach. Edycje rankingu ogólnego i dziedzinowego mogą się różnić. Liczba kolumn szczegółów THE dopasowuje się do liczby edycji.

Sekcja THE Impact odsyła do zestawienia THE i do raportu działań SDG PW 2025. Jej tabela HTML jest dostępna także bez JavaScriptu. Przy zmianie adresów `sdgReportData` trzeba równocześnie zaktualizować odsyłacze w tej tabeli.

Strona nie wymaga budowania. Tailwind, Chart.js i fonty są pobierane z adresów wskazanych w `index.html`. Lokalny podgląd: `python -m http.server 8765`. Kontrola obejmuje szerokości 390 i 1365 px, konsolę przeglądarki, wybór kierunków, przełączniki oraz szczegóły THE.

Za treść odpowiada Zespół ds. Rankingów DAS PW.
