# Strona rankingowa PW

Statyczny dashboard rankingów Politechniki Warszawskiej publikowany przez GitHub Pages.

## Struktura

- `index.html` - struktura i treść strony.
- `assets/css/dashboard.css` - własne style dashboardu.
- `assets/js/ranking-data.js` - dane wykresów i szeregów rankingowych.
- `assets/js/dashboard.js` - obsługa wykresów, filtrów, nawigacji i modali.
- `assets/pw-logo.png` - logo strony.

## Edycja

Zmiany danych rankingowych należy wprowadzać w `assets/js/ranking-data.js`. Zmiany zachowania interfejsu znajdują się w `assets/js/dashboard.js`.

Strona nie wymaga procesu budowania. Do działania wykresów i klas Tailwind potrzebuje dostępu do zewnętrznych CDN wskazanych w `index.html`.
