# Strona rankingowa PW

Statyczny dashboard rankingów Politechniki Warszawskiej publikowany przez GitHub Pages.

## Struktura

- `index.html` — treść strony, nawigacja i dostępne opisy.
- `assets/css/dashboard.css` — style dashboardu.
- `assets/js/ranking-data.js` — dane wykresów i szeregi rankingowe.
- `assets/js/dashboard.js` — wykresy, filtry, nawigacja i modale.
- `assets/js/qs-sustainability.js` — wykresy i szczegóły QS Sustainability.
- `assets/pw-logo.png` — logo i ikona strony.

## Edycje i źródła

Końcowa sekcja QS Sustainability Rankings obejmuje edycje 2024–2027 i jest odrębna od wskaźnika Sustainability w QS WUR. Dane znajdują się w zmiennych `qsSustainabilityYears`, `qsSustainabilityLower/Upper`, `qsSustainabilityLabels` i `qsSustainabilityDetails`; obsługę wykresów i szczegółów zawiera `assets/js/qs-sustainability.js`.

Światowe pozycje zachowują dokładne etykiety QS, w tym remisy i otwarte pasma 1001+ / 1251+. Szczegóły pokazują wynik oraz pozycję każdej z trzech kategorii i ośmiu wskaźników w edycjach 2024–2027. `categoryRanks` i `indicatorRanks` zawierają dla każdej miary i edycji obiekt `{raw, lower, upper}`; otwarte pasmo ma `upper: null`. Kafle edycji pokazują wynik i pozycję wybranej miary, a wykres pozwala wybrać punktację lub pozycję. Brakujące pola są pomijane.

QS Sustainability obejmuje Environmental Impact, Social Impact i Governance oraz osiem wskaźników: Environmental Sustainability, Environmental Education, Environmental Research, Equality, Knowledge Exchange, Impact of Education, Employability & Opportunities, Health and Wellbeing. Kategorie, wskaźniki i wynik ogólny mają skalę 0–100. Wynik ogólny łączy trzy kategorie; dla PW jest dostępny za 2026 (60,3) i 2027 (72,1). W arkuszach 2024 i 2025 wynik ogólny PW jest pusty / „-”, więc pozostaje `null`. Nie pokazuje się 2023, pozycji krajowej ani Good Governance.

Liczby niepustych, unikalnych instytucji z arkuszy: 2024 — 1 397; 2025 — 1 743; 2026 — 2 021; 2027 — 2 003.

Źródła: oficjalne arkusze QS (odczyt 17.11.2026):

- `2024 QS Sustainability Rankings V2.2 (For qs.com).xlsx`
- `2025 QS Sustainability Rankings Results v1.4 (For qs.com).xlsx`
- `2026 QS Sustainability Rankings Results v1.6 (For qs.com).xlsx`
- `2027 QS Sustainability Rankings - Results v2.1(for qs.com).xlsx`

[QS Sustainability Rankings](https://www.topuniversities.com/sustainability-rankings), [profil PW](https://www.topuniversities.com/universities/warsaw-university-technology), [metodyka QS](https://support.qs.com/hc/en-gb/articles/8551503200668-QS-World-University-Rankings-Sustainability).

Panel THE pokazuje WUR 2027 oraz wyniki dziedzinowe 2026. Moduł metodyki WUR 2026 opisuje tę konkretną edycję; odwołuje się do jej wyniku, niezależnie od ostatniego roku w szeregu ogólnym.

- [Profil PW w THE](https://www.timeshighereducation.com/world-university-rankings/warsaw-university-technology) — przedziały i edycje.
- [Tabela THE Europe 2027](https://beta.timeshighereducation.com/student/best-universities/best-universities-europe) — kolumny World Rank, Overall i pięć filarów.

## Edycja

Wartości rankingowe edytuje się w `assets/js/ranking-data.js`. Lata i szeregi wartości muszą mieć zgodną długość; `null` oznacza brak wartości. Dopisanie nowej edycji nie zmienia historycznych komórek. Przedział pozycji i przedział punktacji należy zachować jako przedziały.

Po aktualizacji danych należy sprawdzić daty, etykiety oraz podsumowania w `index.html` i modalach. Edycje rankingu ogólnego i dziedzinowego mogą się różnić. Liczba kolumn szczegółów THE dopasowuje się do liczby edycji.

Strona nie wymaga budowania. Tailwind, Chart.js i fonty są pobierane z adresów wskazanych w `index.html`. Lokalny podgląd: `python -m http.server 8765`. Kontrola obejmuje szerokości 390 i 1365 px, konsolę przeglądarki, wybór kierunków, przełączniki oraz szczegóły THE.

Za treść odpowiada Zespół ds. Rankingów DAS PW.

## Osadzanie z automatyczną wysokością

`assets/js/embed-height.js` działa wyłącznie wewnątrz ramki. Wysyła rodzicowi `pw-dashboard-height` z wysokością dokumentu po załadowaniu, zmianie okna i zmianie rozmiaru body. Pomiar jest ograniczony do jednego zaplanowanego wywołania na 100 ms. `targetOrigin` wynosi `*`; wiadomości zawierają wysokość lub pozycję kotwicy, bez danych rankingowych.

Rodzic weryfikuje origin GitHub Pages i `event.source`, przyjmuje tylko skończone liczby w zakresie do 40000 px, ustawia wysokość i wyłącza wewnętrzne przewijanie. Pierwszą poprawną wiadomość potwierdza przez `pw-dashboard-embed-ready`. Dopiero wtedy modale dziecka przechodzą do układu dokumentu, a kotwice przewijają rodzica przez `pw-dashboard-anchor`.

`scrollHeight` ma dolne ograniczenie równe wysokości viewportu. Gdy treść maleje, wiadomość `pw-dashboard-measure` prosi rodzica o przejściowy pomiar w ramce 600 px; dziecko następnie raportuje rzeczywisty `document.documentElement.scrollHeight`. Rodzic zachowuje pozycję przewijania podczas ponownego pomiaru.

Bez potwierdzenia rodzica działa fallback `scrolling="auto"` z minimalną wysokością 600 px. Nawigacja osadzona jest statyczna; samodzielna strona zachowuje sticky i dotychczasowe modale. Publiczny skrypt jest dostępny dopiero po publikacji commita na GitHub Pages.
