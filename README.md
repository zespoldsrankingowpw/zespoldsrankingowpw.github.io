# Strona rankingowa PW

Statyczny dashboard rankingów Politechniki Warszawskiej publikowany przez GitHub Pages.

## Struktura

- `index.html` — treść strony, nawigacja i dostępne opisy.
- `assets/css/dashboard.css` — style dashboardu.
- `assets/js/ranking-data.js` — dane wykresów i szeregi rankingowe.
- `assets/js/dashboard.js` — wykresy, filtry, nawigacja i modale.
- `assets/pw-logo.png` — logo i ikona strony.

## Edycje i źródła

Panel THE pokazuje WUR 2027 oraz wyniki dziedzinowe 2026. Moduł metodyki WUR 2026 opisuje tę konkretną edycję; odwołuje się do jej wyniku, niezależnie od ostatniego roku w szeregu ogólnym.

- [Profil PW w THE](https://www.timeshighereducation.com/world-university-rankings/warsaw-university-technology) — przedziały i edycje.
- [Tabela THE Europe 2027](https://beta.timeshighereducation.com/student/best-universities/best-universities-europe) — kolumny World Rank, Overall i pięć filarów.

## Edycja

Wartości rankingowe edytuje się w `assets/js/ranking-data.js`. Lata i szeregi wartości muszą mieć zgodną długość; `null` oznacza brak wartości. Dopisanie nowej edycji nie zmienia historycznych komórek. Przedział pozycji i przedział punktacji należy zachować jako przedziały.

Po aktualizacji danych należy sprawdzić daty, etykiety oraz podsumowania w `index.html` i modalach. Edycje rankingu ogólnego i dziedzinowego mogą się różnić. Liczba kolumn szczegółów THE dopasowuje się do liczby edycji.

Strona nie wymaga budowania. Tailwind, Chart.js i fonty są pobierane z adresów wskazanych w `index.html`. Lokalny podgląd: `python -m http.server 8765`. Kontrola obejmuje szerokości 390 i 1365 px, konsolę przeglądarki, wybór kierunków, przełączniki oraz szczegóły THE.

Za treść odpowiada Zespół ds. Rankingów DAS PW.
