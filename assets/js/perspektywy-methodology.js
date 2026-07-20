window.PerspektywyMethodology = Object.freeze({
  overall: {
    status: 'Porównywalny warunkowo',
    short: 'Skład i wagi ewoluowały',
    tone: 'info',
    description: 'Perspektywy zachowują porównywalność wyniku ogólnego rok do roku, ale jego skład, definicje części wskaźników i ich wagi zmieniały się między edycjami.'
  },
  defaultIndicator: {
    status: 'Seria względna',
    short: 'Coroczna normalizacja',
    tone: 'info',
    description: 'Wartość jest co roku normalizowana względem innych uczelni, a okres danych źródłowych jest aktualizowany. Trend należy interpretować jako zmianę względnej pozycji PW, nie surowej wartości miernika.'
  },
  indicators: {
    'Ekonomiczne losy absolwentów': {
      status: 'Przerwana seria', short: 'Zastąpiony od 2024', tone: 'warning',
      description: 'W 2021 zmieniono konstrukcję i wagę ELA. Od 2024 obszar ten jest oceniany przez dwa osobne wskaźniki, dlatego wartości nie powinny być łączone w jedną linię.',
      related: ['Wynagrodzenia absolwentów', 'Zatrudnienie absolwentów']
    },
    'Preferencje pracodawców': {
      status: 'Wskaźnik zakończony', short: 'Tylko edycja 2020', tone: 'warning',
      description: 'Wskaźnik usunięto w 2021, a jego 5 punktów procentowych przeniesiono do Ekonomicznych losów absolwentów.',
      related: ['Ekonomiczne losy absolwentów']
    },
    'Wynagrodzenia absolwentów': {
      status: 'Nowy wskaźnik', short: 'Dostępny od 2024', tone: 'new',
      description: 'Jedna z dwóch serii, które od 2024 zastąpiły zbiorczy wskaźnik Ekonomiczne losy absolwentów. Nie należy jej łączyć z wcześniejszym ELA.',
      related: ['Ekonomiczne losy absolwentów', 'Zatrudnienie absolwentów']
    },
    'Zatrudnienie absolwentów': {
      status: 'Nowy wskaźnik', short: 'Dostępny od 2024', tone: 'new',
      description: 'Jedna z dwóch serii, które od 2024 zastąpiły zbiorczy wskaźnik Ekonomiczne losy absolwentów. Nie należy jej łączyć z wcześniejszym ELA.',
      related: ['Ekonomiczne losy absolwentów', 'Wynagrodzenia absolwentów']
    },
    'Cytowania': {
      status: 'Wskaźnik zakończony', short: 'Usunięty od 2025', tone: 'warning',
      description: 'Perspektywy zrezygnowały z Cytowań od edycji 2025. Ich wagę rozdzielono między FWCI oraz Top 10.',
      related: ['FWCI', 'Top 10']
    },
    'FWCI': {
      status: 'Ciągłość z korektą', short: 'Waga 3% → 5% w 2025', tone: 'info',
      description: 'Nazwa i ogólna konstrukcja wskaźnika są ciągłe, ale zmieniają się okna publikacyjne i grupa odniesienia. Od 2025 waga wzrosła z 3% do 5%.',
      related: ['Cytowania', 'Top 10']
    },
    'Top 10': {
      status: 'Ciągłość z korektą', short: 'Waga 3% → 4% w 2025', tone: 'info',
      description: 'Seria jest dostępna od 2020, ale od 2025 otrzymała większą wagę po usunięciu wskaźnika Cytowania.',
      related: ['Cytowania', 'FWCI']
    },
    'Środki finansowe na BR': {
      status: 'Zmiana metodologii', short: 'Zmiana wzoru w 2024', tone: 'warning',
      description: 'Od 2024 wskaźnik uwzględnia zróżnicowanie kosztochłonności badań. W edycji przejściowej zastosowano średnią starej i nowej metody; w 2025 waga spadła z 6% do 5%.',
      related: ['Środki finansowe UE']
    },
    'Środki finansowe UE': {
      status: 'Nowy wskaźnik', short: 'Dostępny od 2024', tone: 'new',
      description: 'Wskaźnik dodano w 2024 z wagą 3%. Od 2025 jego waga wynosi 4%; wcześniej nie istniała bezpośrednio porównywalna seria.',
      related: ['Środki finansowe na BR']
    },
    'Rozwój kadry własnej': {
      status: 'Ciągłość z korektą', short: 'Waga 4% → 3% w 2024', tone: 'info',
      description: 'Seria zachowuje nazwę, ale aktualizowane są okresy danych i populacja odniesienia. W 2024 jeden punkt procentowy przeniesiono do nowego wskaźnika środków UE.'
    },
    'Publikacje': {
      status: 'Zmiana metodologii', short: 'Zmiana mianownika w 2021', tone: 'warning',
      description: 'Od 2021 publikacje odnoszone są do pracowników badawczych i badawczo-dydaktycznych, a nie do wszystkich nauczycieli akademickich. Kolejne edycje aktualizują pięcioletnie okno publikacji.'
    },
    'Patenty i prawa ochronne w Polsce': {
      status: 'Zmiana metodologii', short: 'Zmiany w 2021 i 2022', tone: 'warning',
      description: 'W 2021 zmieniono grupę pracowników stanowiącą punkt odniesienia. W 2022 waga spadła z 5% do 3%, a uwolnione 2% przeznaczono na nowy wskaźnik SDG.',
      related: ['SDG']
    },
    'Patenty i prawa ochronne za granicą': {
      status: 'Zmiana metodologii', short: 'Zmiana odniesienia w 2021', tone: 'warning',
      description: 'Od 2021 patenty odnoszone są do pracowników badawczych i badawczo-dydaktycznych w dyscyplinach mających zdolność patentową.'
    },
    'SDG': {
      status: 'Nowy wskaźnik', short: 'Dostępny od 2022', tone: 'new',
      description: 'Wskaźnik wkładu badań w realizację Celów Zrównoważonego Rozwoju ONZ został dodany w 2022 z wagą 2%.',
      related: ['Patenty i prawa ochronne w Polsce']
    },
    'Ocena parametryczna': {
      status: 'Wskaźnik zakończony', short: 'Zastąpiony w 2023', tone: 'warning',
      description: 'Ocena parametryczna funkcjonowała do 2022. Od 2023 zastąpiła ją Ewaluacja działalności naukowej oparta na ocenach dyscyplin.',
      related: ['Ewaluacja działalności naukowej']
    },
    'Ewaluacja działalności naukowej': {
      status: 'Nowa metodologia', short: 'Dostępna od 2023', tone: 'new',
      description: 'Wskaźnik zastąpił Ocenę parametryczną. Jego waga wynosiła 12% w 2023, 10% w 2024 oraz 8% od 2025.',
      related: ['Ocena parametryczna']
    },
    'Uprawnienia doktorskie': {
      status: 'Seria zastąpiona', short: 'Reorganizacja w 2024', tone: 'warning',
      description: 'Do 2023 uprawnienia doktorskie i habilitacyjne były osobnymi wskaźnikami. Od 2024 funkcjonują wskaźnik łączony oraz Kształcenie doktorantów.',
      related: ['Uprawnienia doktorskie i habilitacyjne', 'Kształcenie doktorantów w szkołach doktorskich']
    },
    'Uprawnienia habilitacyjne': {
      status: 'Seria zastąpiona', short: 'Połączony od 2024', tone: 'warning',
      description: 'Do 2023 był to osobny wskaźnik. Od 2024 uprawnienia doktorskie i habilitacyjne są prezentowane łącznie.',
      related: ['Uprawnienia doktorskie i habilitacyjne']
    },
    'Uprawnienia doktorskie i habilitacyjne': {
      status: 'Nowy wskaźnik łączony', short: 'Dostępny od 2024', tone: 'new',
      description: 'Wskaźnik od 2024 łączy obszary wcześniej prezentowane jako dwa osobne szeregi. Nie należy go łączyć z żadnym z nich bez zaznaczenia przerwy.',
      related: ['Uprawnienia doktorskie', 'Uprawnienia habilitacyjne']
    },
    'Kształcenie doktorantów w szkołach doktorskich': {
      status: 'Nowy wskaźnik', short: 'Dostępny od 2024', tone: 'new',
      description: 'Wskaźnik dodano w 2024 z wagą 1%. Od 2025 jego waga wynosi 2%.',
      related: ['Uprawnienia doktorskie']
    },
    'Nasycenie kadry': {
      status: 'Ciągłość z korektami', short: 'Zmiany definicji i wag', tone: 'warning',
      description: 'W 2021 zawężono definicję kadry o najwyższych kwalifikacjach. Waga spadła z 3% do 1% w 2023, a od 2025 wynosi 2%.'
    },
    'Programy studiów w językach obcych': {
      status: 'Wskaźnik zakończony', short: 'Ostatnia edycja 2022', tone: 'warning',
      description: 'Wskaźnik nie występuje od 2023. Nie ma bezpośredniego następcy; pozostał odrębny wskaźnik Studiujący w językach obcych.',
      related: ['Studiujący w językach obcych']
    },
    'Projekty partnerstw strategicznych': {
      status: 'Wskaźnik jednoroczny', short: 'Tylko edycja 2023', tone: 'warning',
      description: 'Wskaźnik wprowadzono w 2023 i usunięto w 2024. Jego wagę przesunięto na wymianę studencką.',
      related: ['Wymiana studencka (wyjazdy)', 'Wymiana studencka (przyjazdy)']
    },
    'Uczestnictwo w uniwersytecie europejskim': {
      status: 'Nowy wskaźnik', short: 'Dostępny od 2022', tone: 'new',
      description: 'Wskaźnik dodano w 2022 z wagą 1%. Premiuje pełne członkostwo uczelni w uniwersytecie europejskim.'
    },
    'Wymiana kadry': {
      status: 'Nowy wskaźnik', short: 'Dostępny od 2023', tone: 'new',
      description: 'Wskaźnik wymiany kadry akademickiej w programie Erasmus+ pojawił się w 2023. Od 2024 minimalny czas wyjazdu zmieniono z 7 do 5 dni.'
    },
    'Studiujący w językach obcych': {
      status: 'Ciągłość z korektą', short: 'Zmiany wag 2022–2023', tone: 'info',
      description: 'Waga wynosiła 3% w latach 2020–2021, 2% w 2022 i ponownie 3% od 2023. Aktualizowano także progi i okresy danych.'
    },
    'Wymiana studencka (wyjazdy)': {
      status: 'Ciągłość z korektą', short: 'Waga 1% → 1,5% w 2024', tone: 'info',
      description: 'Od 2024 waga wzrosła z 1% do 1,5% po usunięciu Projektów partnerstw strategicznych.',
      related: ['Projekty partnerstw strategicznych']
    },
    'Wymiana studencka (przyjazdy)': {
      status: 'Ciągłość z korektą', short: 'Waga 1% → 1,5% w 2024', tone: 'info',
      description: 'Od 2024 waga wzrosła z 1% do 1,5% po usunięciu Projektów partnerstw strategicznych.',
      related: ['Projekty partnerstw strategicznych']
    }
  }
});