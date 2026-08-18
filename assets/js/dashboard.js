document.addEventListener('DOMContentLoaded', function () {
  const {
    qsWurDetailsYears,
    qsWurDetailsData,
    theWurDetailsData,
    qsSubjectData,
    rksSubjectData,
    qsYears,
    qsMin,
    qsMax,
    theSubjectData,
    grasSubjectData,
    engiSubjectData,
    theYears,
    theLower,
    theUpper,
    arwuYears,
    arwuLower,
    arwuUpper,
    arwuDetailsData,
    perspektywyYears,
    perspektywyPositions,
    perspektywyScores,
    engiYears,
    engiPositions,
    engiRankLabels,
    engiScores
  } = window.RankingData;

  const ruaMethodologyModal = document.getElementById('ruaMethodologyModal');
  const ruaMethodologyOpen = document.getElementById('ruaMethodologyOpen');
  const ruaMethodologyClose = document.getElementById('ruaMethodologyClose');
  const ruaMethodologyBackdrop = document.getElementById('ruaMethodologyBackdrop');
  const ruaEditionSelect = document.getElementById('ruaEditionSelect');
  const ruaIndicatorCount = document.getElementById('ruaIndicatorCount');
  const ruaChangeTitle = document.getElementById('ruaChangeTitle');
  const ruaChangeCopy = document.getElementById('ruaChangeCopy');
  const ruaChangeTag = document.getElementById('ruaChangeTag');
  const ruaWeightBar = document.getElementById('ruaWeightBar');
  const ruaWeightLegend = document.getElementById('ruaWeightLegend');
  const ruaCriteriaButtons = document.getElementById('ruaCriteriaButtons');
  const ruaDetailSwatch = document.getElementById('ruaDetailSwatch');
  const ruaDetailTitle = document.getElementById('ruaDetailTitle');
  const ruaDetailCopy = document.getElementById('ruaDetailCopy');
  const ruaCriterionTotal = document.getElementById('ruaCriterionTotal');
  const ruaIndicatorList = document.getElementById('ruaIndicatorList');
  const ruaEntryPanel = document.getElementById('ruaEntryPanel');
  const ruaMethodologySource = document.getElementById('ruaMethodologySource');
  const ruaInfoTabs = [...document.querySelectorAll('[data-rua-panel]')];
  const rksMethodologyModal = document.getElementById('rksMethodologyModal');
  const rksMethodologyOpen = document.getElementById('rksMethodologyOpen');
  const rksMethodologyClose = document.getElementById('rksMethodologyClose');
  const rksMethodologyBackdrop = document.getElementById('rksMethodologyBackdrop');
  const rksMethodologySubjectSelect = document.getElementById('rksMethodologySubjectSelect');
  const rksMethodologyVariantText = document.getElementById('rksMethodologyVariantText');
  const rksMethodologyVariantBadge = document.getElementById('rksMethodologyVariantBadge');
  const rksMethodologyWeightChart = document.getElementById('rksMethodologyWeightChart');
  const rksMethodologyWeightLegend = document.getElementById('rksMethodologyWeightLegend');
  const rksMethodologyProfileFact = document.getElementById('rksMethodologyProfileFact');
  const rksMethodologyIndicatorCount = document.getElementById('rksMethodologyIndicatorCount');
  const rksMethodologyLatestPosition = document.getElementById('rksMethodologyLatestPosition');
  const rksMethodologyLatestScore = document.getElementById('rksMethodologyLatestScore');
  const rksMethodologyProfileDelta = document.getElementById('rksMethodologyProfileDelta');
  const rksMethodologyCriteriaNav = document.getElementById('rksMethodologyCriteriaNav');
  const rksMethodologyDetailSwatch = document.getElementById('rksMethodologyDetailSwatch');
  const rksMethodologyDetailTitle = document.getElementById('rksMethodologyDetailTitle');
  const rksMethodologyDetailCopy = document.getElementById('rksMethodologyDetailCopy');
  const rksMethodologyCriterionTotal = document.getElementById('rksMethodologyCriterionTotal');
  const rksMethodologyIndicatorList = document.getElementById('rksMethodologyIndicatorList');
  const rksMethodologyInfoTabs = [...document.querySelectorAll('[data-rks-panel]')];
  const engiDetailsModal = document.getElementById('engiDetailsModal');
  const engiDetailsModeButtons = [...document.querySelectorAll('[data-engi-main-details-mode]')];
  const engiDetailsLatestPosition = document.getElementById('engiDetailsLatestPosition');
  const engiDetailsLatestScore = document.getElementById('engiDetailsLatestScore');
  const engiDetailsBestPosition = document.getElementById('engiDetailsBestPosition');
  const engiDetailsPositionChange = document.getElementById('engiDetailsPositionChange');
  const engiDetailsYearCards = document.getElementById('engiDetailsYearCards');
  const engiDetailsChartTitle = document.getElementById('engiDetailsChartTitle');
  const engiDetailsChartNote = document.getElementById('engiDetailsChartNote');
  const engiDetailsLegend = document.getElementById('engiDetailsLegend');
  const engiDetailsCanvas = document.getElementById('chartEngiDetails');
  const engiDetailsMethodologyOpen = document.getElementById('engiDetailsMethodologyOpen');
  const engiMethodologyOpenButton = document.getElementById('engiMethodologyOpen');
  let renderEngiDetails = () => {};
  const engiSubjectDetailsModal = document.getElementById('engiSubjectDetailsModal');
  const engiSubjectDetailsSelect = document.getElementById('engiSubjectDetailsSelect');
  const engiSubjectDetailsMetricSelect = document.getElementById('engiSubjectDetailsMetricSelect');
  const engiSubjectDetailsViewControl = document.getElementById('engiSubjectDetailsViewControl');
  const engiSubjectDetailsModeButtons = [...document.querySelectorAll('[data-engi-details-mode]')];
  const engiSubjectDetailsLatestPosition = document.getElementById('engiSubjectDetailsLatestPosition');
  const engiSubjectDetailsLatestScore = document.getElementById('engiSubjectDetailsLatestScore');
  const engiSubjectDetailsBestPosition = document.getElementById('engiSubjectDetailsBestPosition');
  const engiSubjectDetailsTop100 = document.getElementById('engiSubjectDetailsTop100');
  const engiSubjectDetailsStatLabels = [1, 2, 3, 4].map((index) => document.getElementById(`engiSubjectDetailsStat${index}Label`));
  const engiSubjectDetailsMetricContext = document.getElementById('engiSubjectDetailsMetricContext');
  const engiSubjectDetailsYearCards = document.getElementById('engiSubjectDetailsYearCards');
  const engiSubjectDetailsChartTitle = document.getElementById('engiSubjectDetailsChartTitle');
  const engiSubjectDetailsChartNote = document.getElementById('engiSubjectDetailsChartNote');
  const engiSubjectDetailsLegend = document.getElementById('engiSubjectDetailsLegend');
  const engiSubjectDetailsCanvas = document.getElementById('chartEngiSubjectDetails');
  const engiSubjectDetailsMethodologyOpen = document.getElementById('engiSubjectDetailsMethodologyOpen');
  const engiSubjectDetailsSourceLink = document.getElementById('engiSubjectDetailsSourceLink');
  const engiSubjectMethodologyOpenButton = document.getElementById('engiSubjectMethodologyOpen');
  let renderEngiSubjectDetails = () => {};
  const qsSubjectDetailsModal = document.getElementById('qsSubjectDetailsModal');
  const qsSubjectDetailsSelect = document.getElementById('qsSubjectDetailsSelect');
  const qsSubjectDetailsMetricSelect = document.getElementById('qsSubjectDetailsMetricSelect');
  const qsSubjectDetailsLatestPosition = document.getElementById('qsSubjectDetailsLatestPosition');
  const qsSubjectDetailsBestPosition = document.getElementById('qsSubjectDetailsBestPosition');
  const qsSubjectDetailsChange = document.getElementById('qsSubjectDetailsChange');
  const qsSubjectDetailsCoverage = document.getElementById('qsSubjectDetailsCoverage');
  const qsSubjectDetailsStatLabels = [1, 2, 3, 4].map((index) => document.getElementById(`qsSubjectDetailsStat${index}Label`));
  const qsSubjectDetailsMetricContext = document.getElementById('qsSubjectDetailsMetricContext');
  const qsSubjectDetailsYearCards = document.getElementById('qsSubjectDetailsYearCards');
  const qsSubjectDetailsChartTitle = document.getElementById('qsSubjectDetailsChartTitle');
  const qsSubjectDetailsChartNote = document.getElementById('qsSubjectDetailsChartNote');
  const qsSubjectDetailsLegend = document.getElementById('qsSubjectDetailsLegend');
  const qsSubjectDetailsCanvas = document.getElementById('chartQSSubjectDetails');
  const qsSubjectDetailsMethodologyOpen = document.getElementById('qsSubjectDetailsMethodologyOpen');
  const qsSubjectDetailsSourceLink = document.getElementById('qsSubjectDetailsSourceLink');
  const qsSubjectMethodologyOpenButton = document.getElementById('qsSubjectMethodologyOpen');
  let renderQSSubjectDetails = () => {};
  const grasDetailsModal = document.getElementById('grasDetailsModal');
  const grasDetailsSubjectSelect = document.getElementById('grasDetailsSubjectSelect');
  const grasDetailsLatestPosition = document.getElementById('grasDetailsLatestPosition');
  const grasDetailsLastListed = document.getElementById('grasDetailsLastListed');
  const grasDetailsBestPosition = document.getElementById('grasDetailsBestPosition');
  const grasDetailsCoverage = document.getElementById('grasDetailsCoverage');
  const grasDetailsYearCards = document.getElementById('grasDetailsYearCards');
  const grasDetailsMissingNotice = document.getElementById('grasDetailsMissingNotice');
  const grasDetailsChartTitle = document.getElementById('grasDetailsChartTitle');
  const grasDetailsChartNote = document.getElementById('grasDetailsChartNote');
  const grasDetailsCanvas = document.getElementById('chartGrasDetails');
  const grasDetailsMethodologyOpen = document.getElementById('grasDetailsMethodologyOpen');
  const grasMethodologyOpenButton = document.getElementById('grasMethodologyOpen');
  let renderGrasDetails = () => {};
  const rksDetailsModal = document.getElementById('rksDetailsModal');
  const rksDetailsSubjectSelect = document.getElementById('rksDetailsSubjectSelect');
  const rksDetailsMetricSelect = document.getElementById('rksDetailsMetricSelect');
  const rksDetailsViewControl = document.getElementById('rksDetailsViewControl');
  const rksDetailsModeControl = document.getElementById('rksDetailsModeControl');
  const rksDetailsModeButtons = [...document.querySelectorAll('[data-rks-details-mode]')];
  const rksDetailsStatLabels = [1, 2, 3, 4].map((index) => document.getElementById(`rksDetailsStat${index}Label`));
  const rksDetailsLatestPosition = document.getElementById('rksDetailsLatestPosition');
  const rksDetailsLatestScore = document.getElementById('rksDetailsLatestScore');
  const rksDetailsBestPosition = document.getElementById('rksDetailsBestPosition');
  const rksDetailsPodiums = document.getElementById('rksDetailsPodiums');
  const rksDetailsMetricContext = document.getElementById('rksDetailsMetricContext');
  const rksDetailsYearCards = document.getElementById('rksDetailsYearCards');
  const rksDetailsChartTitle = document.getElementById('rksDetailsChartTitle');
  const rksDetailsChartNote = document.getElementById('rksDetailsChartNote');
  const rksDetailsLegend = document.getElementById('rksDetailsLegend');
  const rksDetailsCanvas = document.getElementById('chartRKSDetails');
  const rksDetailsSourceLink = document.getElementById('rksDetailsSourceLink');
  const rksDetailsMethodologyOpen = document.getElementById('rksDetailsMethodologyOpen');
  let renderRKSDetails = () => {};

  const theWurDetailsModal = document.getElementById('theWurDetailsModal');
  const theWurDetailsMetricSelect = document.getElementById('theWurDetailsMetricSelect');
  const theWurDetailsLatestPosition = document.getElementById('theWurDetailsLatestPosition');
  const theWurDetailsStrongestPillar = document.getElementById('theWurDetailsStrongestPillar');
  const theWurDetailsBestBand = document.getElementById('theWurDetailsBestBand');
  const theWurDetailsCoverage = document.getElementById('theWurDetailsCoverage');
  const theWurDetailsYearCards = document.getElementById('theWurDetailsYearCards');
  const theWurDetailsChangeNotice = document.getElementById('theWurDetailsChangeNotice');
  const theWurDetailsChartTitle = document.getElementById('theWurDetailsChartTitle');
  const theWurDetailsChartNote = document.getElementById('theWurDetailsChartNote');
  const theWurDetailsLegend = document.getElementById('theWurDetailsLegend');
  const theWurDetailsCanvas = document.getElementById('chartTheWurDetails');
  const theWurDetailsMethodologyOpen = document.getElementById('theWurDetailsMethodologyOpen');
  let renderTheWurDetails = () => {};
  const theSubjectDetailsModal = document.getElementById('theSubjectDetailsModal');
  const theSubjectDetailsSelect = document.getElementById('theSubjectDetailsSelect');
  const theSubjectDetailsMetricSelect = document.getElementById('theSubjectDetailsMetricSelect');
  const theSubjectDetailsStatLabels = [1, 2, 3, 4].map((index) => document.getElementById(`theSubjectDetailsStat${index}Label`));
  const theSubjectDetailsStatValues = [1, 2, 3, 4].map((index) => document.getElementById(`theSubjectDetailsStat${index}`));
  const theSubjectDetailsMetricContext = document.getElementById('theSubjectDetailsMetricContext');
  const theSubjectDetailsYearCards = document.getElementById('theSubjectDetailsYearCards');
  const theSubjectDetailsChangeNotice = document.getElementById('theSubjectDetailsChangeNotice');
  const theSubjectDetailsChartTitle = document.getElementById('theSubjectDetailsChartTitle');
  const theSubjectDetailsChartNote = document.getElementById('theSubjectDetailsChartNote');
  const theSubjectDetailsLegend = document.getElementById('theSubjectDetailsLegend');
  const theSubjectDetailsCanvas = document.getElementById('chartTheSubjectDetails');
  const theSubjectDetailsMethodologyOpen = document.getElementById('theSubjectDetailsMethodologyOpen');
  const theSubjectMethodologyOpenButton = document.getElementById('theSubjectMethodologyOpen');
  const theSubjectIndicatorData = window.THESubjectIndicatorData || { years: [], metricOrder: [], metrics: {}, subjects: {} };
  let renderTheSubjectDetails = () => {};
  let renderTheSubjectMethodology = () => {};

  const arwuDetailsModal = document.getElementById('arwuDetailsModal');
  const arwuDetailsMetricSelect = document.getElementById('arwuDetailsMetricSelect');
  const arwuDetailsLatestWorld = document.getElementById('arwuDetailsLatestWorld');
  const arwuDetailsLatestNational = document.getElementById('arwuDetailsLatestNational');
  const arwuDetailsStrongest = document.getElementById('arwuDetailsStrongest');
  const arwuDetailsCoverage = document.getElementById('arwuDetailsCoverage');
  const arwuDetailsYearCards = document.getElementById('arwuDetailsYearCards');
  const arwuDetailsZeroNotice = document.getElementById('arwuDetailsZeroNotice');
  const arwuDetailsChartTitle = document.getElementById('arwuDetailsChartTitle');
  const arwuDetailsChartNote = document.getElementById('arwuDetailsChartNote');
  const arwuDetailsLegend = document.getElementById('arwuDetailsLegend');
  const arwuDetailsCanvas = document.getElementById('chartArwuDetails');
  const arwuDetailsMethodologyOpen = document.getElementById('arwuDetailsMethodologyOpen');
  let renderArwuDetails = () => {};

  const internationalMethodologyModals = [...document.querySelectorAll('[data-methodology-modal]')];
  let activeInternationalMethodologyTrigger = null;

  const closeInternationalMethodology = (modal, restoreFocus = true) => {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('overflow-hidden');
    if (restoreFocus && activeInternationalMethodologyTrigger) activeInternationalMethodologyTrigger.focus();
    activeInternationalMethodologyTrigger = null;
  };

  const syncMethodologySelect = (modalId) => {
    const pairs = {
      qsSubjectMethodologyModal: ['qsSubjectSelect', 'qsMethodologySubjectSelect'],
      theSubjectDetailsModal: ['theSubjectSelect', 'theSubjectDetailsSelect'],
      theSubjectMethodologyModal: ['theSubjectSelect', 'theMethodologySubjectSelect'],
      grasMethodologyModal: ['grasSubjectSelect', 'grasMethodologySubjectSelect'],
      engiSubjectMethodologyModal: ['engiSubjectSelect', 'engiMethodologySubjectSelect']
    };
    const pair = pairs[modalId];
    if (!pair) return;
    const sourceSelect = document.getElementById(pair[0]);
    const modalSelect = document.getElementById(pair[1]);
    if (sourceSelect && modalSelect && sourceSelect.value) {
      modalSelect.value = sourceSelect.value;
      modalSelect.dispatchEvent(new Event('change'));
    }
  };

  const perspektywyDetailsYearCards = document.getElementById('perspektywyDetailsYearCards');
  const perspektywyDetailsChartTitle = document.getElementById('perspektywyDetailsChartTitle');
  const perspektywyDetailsChartNote = document.getElementById('perspektywyDetailsChartNote');
  const perspektywyDetailsCanvas = document.getElementById('chartPerspektywyDetails');
  const perspektywyDetailsStatus = document.getElementById('perspektywyDetailsStatus');
  const perspektywyDetailsLegendLine = document.getElementById('perspektywyDetailsLegendLine');
  const perspektywyDetailsLegendLabel = document.getElementById('perspektywyDetailsLegendLabel');
  const perspektywyDetailsMetricSelect = document.getElementById('perspektywyDetailsMetricSelect');
  const perspektywyDetailsMetricHelp = document.getElementById('perspektywyDetailsMetricHelp');
  const perspektywyDetailsModeControl = document.getElementById('perspektywyDetailsModeControl');
  const perspektywyDetailsComparabilityControl = document.getElementById('perspektywyDetailsComparabilityControl');
  const perspektywyDetailsComparabilityBadge = document.getElementById('perspektywyDetailsComparabilityBadge');
  const perspektywyDetailsComparabilityDot = document.getElementById('perspektywyDetailsComparabilityDot');
  const perspektywyDetailsComparabilityLabel = document.getElementById('perspektywyDetailsComparabilityLabel');
  const perspektywyDetailsComparabilityShort = document.getElementById('perspektywyDetailsComparabilityShort');
  const perspektywyDetailsRelated = document.getElementById('perspektywyDetailsRelated');
  const perspektywyDetailsModeButtons = [...document.querySelectorAll('[data-perspektywy-details-mode]')];
  const perspektywyIndicatorData = window.PerspektywyIndicatorData || { years: perspektywyYears, criteria: [] };
  const perspektywyMethodology = window.PerspektywyMethodology || { overall: {}, defaultIndicator: {}, indicators: {} };
  const perspektywyIndicatorSeries = new Map();
  const perspektywyIndicatorSeriesByName = new Map();
  let perspektywyDetailsChart = null;
  let perspektywyDetailsMode = 'score';

  perspektywyIndicatorData.criteria.forEach((criterion) => {
    const group = document.createElement('optgroup');
    group.label = criterion.name;
    criterion.indicators.forEach((indicator) => {
      const series = { ...indicator, criterion: criterion.name };
      perspektywyIndicatorSeries.set(indicator.id, series);
      perspektywyIndicatorSeriesByName.set(indicator.name, series);
      const option = document.createElement('option');
      option.value = indicator.id;
      option.textContent = indicator.name;
      group.appendChild(option);
    });
    perspektywyDetailsMetricSelect?.appendChild(group);
  });

  const formatPerspektywyValue = (value) => value == null
    ? '—'
    : new Intl.NumberFormat('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 2 }).format(value);

  const formatPerspektywyWeight = (value) => value == null
    ? null
    : new Intl.NumberFormat('pl-PL', { maximumFractionDigits: 1 }).format(value) + '%';

  const getPerspektywyIndicatorMeta = (indicator) => {
    if (!indicator) return perspektywyMethodology.overall || {};
    const base = perspektywyMethodology.defaultIndicator || {};
    const manual = perspektywyMethodology.indicators?.[indicator.name] || {};
    const availableIndexes = indicator.values
      .map((value, index) => value == null ? null : index)
      .filter((index) => index != null);
    const firstIndex = availableIndexes[0] ?? 0;
    const lastIndex = availableIndexes.at(-1) ?? perspektywyIndicatorData.years.length - 1;
    const firstYear = perspektywyIndicatorData.years[firstIndex];
    const lastYear = perspektywyIndicatorData.years[lastIndex];
    const weights = [...new Set(indicator.indicatorWeights.filter((value) => value != null))];
    let derived = {};

    if (firstIndex > 0 && lastIndex < perspektywyIndicatorData.years.length - 1) {
      derived = { status: 'Seria okresowa', short: firstYear + '–' + lastYear, tone: 'warning' };
    } else if (firstIndex > 0) {
      derived = { status: 'Nowy wskaźnik', short: 'Dostępny od ' + firstYear, tone: 'new' };
    } else if (lastIndex < perspektywyIndicatorData.years.length - 1) {
      derived = { status: 'Wskaźnik zakończony', short: 'Ostatnia edycja ' + lastYear, tone: 'warning' };
    } else if (weights.length > 1) {
      derived = { status: 'Ciągłość z korektą', short: 'Waga zmieniała się', tone: 'info' };
    }

    return { ...base, ...derived, ...manual };
  };

  const ruaEditionChanges = {
    2020: { title: 'Pierwsza edycja z FWVI', copy: 'Do efektywności naukowej dodano wskaźnik wpływu odsłon publikacji FWVI.', tag: 'NOWY WSKAŹNIK' },
    2021: { title: 'Zmiana pomiaru rynku pracy', copy: 'Usunięto preferencje pracodawców, zwiększono wagę ELA z 7% do 12% i zmieniono sposób jego obliczania.', tag: 'DUŻA ZMIANA' },
    2022: { title: 'Nowe elementy innowacyjności i umiędzynarodowienia', copy: 'Dodano SDG oraz uczestnictwo uczelni w uniwersytecie europejskim.', tag: '2 NOWE WSKAŹNIKI' },
    2023: { title: 'Nowa podstawa oceny potencjału', copy: 'Ocenę parametryczną zastąpiła ewaluacja działalności naukowej. Zmieniono też skład umiędzynarodowienia.', tag: 'ZASTĄPIENIE' },
    2024: { title: 'Przebudowa kilku kryteriów', copy: 'ELA podzielono na wynagrodzenia i zatrudnienie. Dodano środki UE i szkoły doktorskie; potencjał zmalał do 13%, a efektywność wzrosła do 30%.', tag: 'DUŻA ZMIANA' },
    2025: { title: 'Zmiana wag w efektywności naukowej', copy: 'Usunięto Cytowania, a ich wagę przeniesiono na FWCI i Top 10. Skorygowano również wagi potencjału naukowego.', tag: 'ZMIANA WAG' },
    2026: { title: 'Bez istotnej zmiany metodologii', copy: 'Układ kryteriów i wag pozostaje stabilny. Zaktualizowano okresy danych oraz zastosowano szczególną korektę dla wybranych uczelni jednodyscyplinowych.', tag: 'METODYKA STABILNA' }
  };
  const ruaMethodologySources = {
    2020: 'https://www.ranking.perspektywy.pl/metodologia-rankingu-uczelni-akademickich/2020/',
    2021: 'https://ranking.perspektywy.pl/metodologia-rankingu-uczelni-akademickich/2021/',
    2022: 'https://www.ranking.perspektywy.pl/metodologia-rankingu-uczelni-akademickich-2022r/',
    2023: 'https://ranking.perspektywy.pl/metodologia-rankingu-uczelni-akademickich/2023/',
    2024: 'https://www.ranking.perspektywy.pl/metodologia/2024/',
    2025: 'https://www.ranking.perspektywy.pl/metodologia/2025/',
    2026: 'https://www.ranking.perspektywy.pl/metodologia/2026/'
  };

  const ruaCriteriaPresentation = [
    { name: 'Prestiż', color: '#4f46e5', description: 'Rozpoznawalność uczelni w środowisku akademickim i rankingach międzynarodowych.' },
    { name: 'Absolwenci na rynku pracy', color: '#0284c7', description: 'Pozycja absolwentów PW na rynku pracy mierzona na podstawie danych administracyjnych.' },
    { name: 'Potencjał naukowy', color: '#0891b2', description: 'Zdolność uczelni do prowadzenia badań i kształcenia kadry naukowej.' },
    { name: 'Efektywność naukowa', color: '#059669', description: 'Rezultaty badań, publikacji, grantów i rozwoju kadry w odniesieniu do zasobów uczelni.' },
    { name: 'Innowacyjność', color: '#65a30d', description: 'Patenty, prawa ochronne oraz wkład badań uczelni w realizację celów SDG.' },
    { name: 'Warunki kształcenia', color: '#d97706', description: 'Dostępność wysoko kwalifikowanej kadry i jakość potwierdzona akredytacjami.' },
    { name: 'Umiędzynarodowienie', color: '#e11d48', description: 'Międzynarodowy charakter studentów, kadry, publikacji i współpracy akademickiej.' }
  ];

  const ruaIndicatorSources = {
    'Ekonomiczne losy absolwentów': 'ELA / ZUS',
    'Preferencje pracodawców': 'Badanie pracodawców Perspektywy',
    'Wynagrodzenia absolwentów': 'ELA / MNiSW / ZUS',
    'Zatrudnienie absolwentów': 'ELA / MNiSW / ZUS',
    'Cytowania': 'SciVal',
    'FWCI': 'SciVal',
    'FWVI': 'SciVal',
    'Nadane stopnie i tytuły naukowe': 'POL-on',
    'Publikacje': 'SciVal / POL-on',
    'Rozwój kadry własnej': 'POL-on',
    'Top 10': 'SciVal',
    'Środki finansowe na BR': 'POL-on / ankieta uczelni / PNT-01',
    'Środki finansowe UE': 'CORDIS / POL-on',
    'Patenty i prawa ochronne w Polsce': 'POL-on / ankieta uczelni',
    'Patenty i prawa ochronne za granicą': 'POL-on / ankieta uczelni',
    'SDG': 'SciVal',
    'Ewaluacja działalności naukowej': 'KEN / POL-on',
    'Kształcenie doktorantów w szkołach doktorskich': 'POL-on',
    'Nasycenie kadry': 'POL-on',
    'Ocena parametryczna': 'KEJN / POL-on',
    'Uprawnienia doktorskie': 'POL-on',
    'Uprawnienia doktorskie i habilitacyjne': 'POL-on',
    'Uprawnienia habilitacyjne': 'POL-on',
    'Ocena przez kadrę akademicką': 'Badanie CAWI Perspektywy',
    'Uznanie międzynarodowe': 'ARWU / THE / QS / US News / Leiden / FT / Webometrics',
    'ICI': 'SciVal',
    'Nauczyciele akademiccy z zagranicy': 'POL-on',
    'Programy studiów w językach obcych': 'POL-on / ankieta uczelni',
    'Projekty partnerstw strategicznych': 'Erasmus+',
    'Studenci cudzoziemcy': 'POL-on',
    'Studiujący w językach obcych': 'POL-on / ankieta uczelni',
    'Uczestnictwo w uniwersytecie europejskim': 'Komisja Europejska',
    'Wielokulturowość środowiska studenckiego': 'POL-on',
    'Wymiana kadry': 'Erasmus+',
    'Wymiana studencka (przyjazdy)': 'POL-on',
    'Wymiana studencka (wyjazdy)': 'POL-on',
    'Akredytacje': 'PKA / międzynarodowe agencje akredytacyjne',
    'Dostępność kadr': 'POL-on'
  };

  let ruaActiveCriterion = 'Absolwenci na rynku pracy';
  const getRuaYearIndex = () => Math.max(0, perspektywyIndicatorData.years.indexOf(Number(ruaEditionSelect?.value || 2026)));
  const getRuaCriterion = (name) => perspektywyIndicatorData.criteria.find((criterion) => criterion.name === name);
  const getRuaCriterionWeight = (criterion, yearIndex) => criterion?.indicators
    .map((indicator) => indicator.criterionWeights?.[yearIndex])
    .find((weight) => weight != null) ?? 0;

  const renderRuaCriterion = () => {
    if (!ruaIndicatorList) return;
    const yearIndex = getRuaYearIndex();
    const year = perspektywyIndicatorData.years[yearIndex];
    const presentation = ruaCriteriaPresentation.find((item) => item.name === ruaActiveCriterion) || ruaCriteriaPresentation[0];
    const criterion = getRuaCriterion(ruaActiveCriterion);
    const criterionWeight = getRuaCriterionWeight(criterion, yearIndex);
    const indicators = (criterion?.indicators || []).filter((indicator) => indicator.indicatorWeights?.[yearIndex] != null);

    if (ruaDetailSwatch) ruaDetailSwatch.style.background = presentation.color;
    if (ruaDetailTitle) ruaDetailTitle.textContent = presentation.name;
    if (ruaDetailCopy) ruaDetailCopy.textContent = presentation.description + ' Edycja ' + year + '.';
    if (ruaCriterionTotal) {
      const label = document.createElement('small');
      label.textContent = 'waga kryterium';
      ruaCriterionTotal.replaceChildren(formatPerspektywyWeight(criterionWeight), label);
    }

    const rows = indicators.map((indicator) => {
      const currentWeight = indicator.indicatorWeights[yearIndex];
      const previousWeight = yearIndex > 0 ? indicator.indicatorWeights[yearIndex - 1] : null;
      const nextWeight = yearIndex < perspektywyIndicatorData.years.length - 1 ? indicator.indicatorWeights[yearIndex + 1] : currentWeight;
      const explicitMeta = perspektywyMethodology.indicators?.[indicator.name];
      const row = document.createElement('article');
      row.className = 'rua-indicator';

      const copy = document.createElement('div');
      const title = document.createElement('h4');
      title.textContent = indicator.name;
      const description = document.createElement('p');
      description.textContent = explicitMeta?.description || 'Wskaźnik jest normalizowany w każdej edycji względem wyników pozostałych uczelni.';
      const source = document.createElement('span');
      source.className = 'rua-source-line';
      source.textContent = ruaIndicatorSources[indicator.name] || 'Oficjalna metodologia Perspektywy';
      copy.append(title, description, source);

      const weight = document.createElement('div');
      weight.className = 'rua-indicator-weight';
      const weightCaption = document.createElement('small');
      weightCaption.textContent = 'w WSK';
      weight.append(formatPerspektywyWeight(currentWeight), weightCaption);

      const actions = document.createElement('div');
      actions.className = 'rua-indicator-actions';
      const resultButton = document.createElement('button');
      resultButton.type = 'button';
      resultButton.className = 'rua-result-button';
      resultButton.textContent = 'Wyniki PW ↗';
      resultButton.setAttribute('aria-label', 'Pokaż wyniki PW dla wskaźnika ' + indicator.name);
      resultButton.addEventListener('click', () => {
        closeRuaMethodology();
        requestAnimationFrame(() => {
          if (perspektywyDetailsMetricSelect) {
            perspektywyDetailsMetricSelect.value = indicator.id;
            perspektywyDetailsMetricSelect.dispatchEvent(new Event('change'));
          }
          document.getElementById('perspektywyDetailsOpen')?.click();
        });
      });
      const status = document.createElement('span');
      const isNew = yearIndex > 0 && previousWeight == null;
      const isEnding = yearIndex < perspektywyIndicatorData.years.length - 1 && nextWeight == null;
      const isChanged = previousWeight != null && previousWeight !== currentWeight;
      status.className = 'rua-indicator-status' + (isNew ? ' new' : isEnding ? ' ending' : isChanged ? ' changed' : '');
      status.textContent = isNew ? 'Nowy w edycji' : isEnding ? 'Ostatnia edycja' : isChanged ? 'Zmiana wagi' : 'Ciągłość';
      actions.append(resultButton, status);
      row.append(copy, weight, actions);
      return row;
    });
    ruaIndicatorList.replaceChildren(...rows);
  };

  const renderRuaNavigation = () => {
    if (!ruaWeightBar || !ruaWeightLegend || !ruaCriteriaButtons) return;
    const yearIndex = getRuaYearIndex();
    const segments = [];
    const legendButtons = [];
    const criterionButtons = [];

    ruaCriteriaPresentation.forEach((presentation) => {
      const criterion = getRuaCriterion(presentation.name);
      const weight = getRuaCriterionWeight(criterion, yearIndex);
      const active = presentation.name === ruaActiveCriterion;
      const select = () => {
        ruaActiveCriterion = presentation.name;
        renderRuaNavigation();
        renderRuaCriterion();
      };

      const segment = document.createElement('button');
      segment.type = 'button';
      segment.className = 'rua-weight-segment' + (active ? ' active' : '');
      segment.style.width = weight + '%';
      segment.style.background = presentation.color;
      segment.textContent = formatPerspektywyWeight(weight);
      segment.title = presentation.name + ' — ' + formatPerspektywyWeight(weight);
      segment.setAttribute('aria-label', segment.title);
      segment.addEventListener('click', select);
      segments.push(segment);

      const makeNavigationButton = (className) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = className + (active ? ' active' : '');
        const dot = document.createElement('span');
        dot.className = 'rua-legend-dot';
        dot.style.background = presentation.color;
        const name = document.createElement('span');
        name.className = className === 'rua-legend-button' ? 'rua-legend-name' : 'rua-criterion-name';
        name.textContent = presentation.name;
        const value = document.createElement('span');
        value.className = className === 'rua-legend-button' ? 'rua-legend-weight' : 'rua-criterion-weight';
        value.textContent = formatPerspektywyWeight(weight);
        button.append(dot, name, value);
        button.setAttribute('aria-pressed', active.toString());
        button.addEventListener('click', select);
        return button;
      };
      legendButtons.push(makeNavigationButton('rua-legend-button'));
      criterionButtons.push(makeNavigationButton('rua-criterion-button'));
    });

    ruaWeightBar.replaceChildren(...segments);
    ruaWeightLegend.replaceChildren(...legendButtons);
    ruaCriteriaButtons.replaceChildren(...criterionButtons);
  };

  const renderRuaMethodologyExplorer = () => {
    if (!ruaEditionSelect) return;
    const yearIndex = getRuaYearIndex();
    const year = perspektywyIndicatorData.years[yearIndex];
    const change = ruaEditionChanges[year];
    const indicatorsCount = perspektywyIndicatorData.criteria.reduce((count, criterion) => count + criterion.indicators.filter((indicator) => indicator.indicatorWeights?.[yearIndex] != null).length, 0);
    if (ruaIndicatorCount) ruaIndicatorCount.textContent = indicatorsCount;
    if (ruaChangeTitle) ruaChangeTitle.textContent = change.title + (year > 2020 ? ' względem ' + (year - 1) : '');
    if (ruaChangeCopy) ruaChangeCopy.textContent = change.copy;
    if (ruaChangeTag) ruaChangeTag.textContent = change.tag;
    if (ruaEntryPanel) ruaEntryPanel.textContent = 'Ranking obejmuje uczelnie akademickie posiadające uprawnienia doktorskie w co najmniej jednej dyscyplinie, minimum ' + (year >= 2025 ? '300' : '200') + ' studentów studiów stacjonarnych oraz co najmniej dwa roczniki absolwentów.';
    if (ruaMethodologySource) {
      ruaMethodologySource.href = ruaMethodologySources[year];
      ruaMethodologySource.textContent = 'Otwórz oficjalną metodologię Perspektywy dla edycji ' + year;
    }
    renderRuaNavigation();
    renderRuaCriterion();
  };

  ruaEditionSelect?.addEventListener('change', renderRuaMethodologyExplorer);
  ruaInfoTabs.forEach((button) => {
    button.addEventListener('click', () => {
      ruaInfoTabs.forEach((tab) => tab.classList.toggle('active', tab === button));
      ruaInfoTabs.forEach((tab) => document.getElementById(tab.dataset.ruaPanel)?.classList.toggle('hidden', tab !== button));
    });
  });
  renderRuaMethodologyExplorer();

  const updatePerspektywyComparability = (meta, isOverall) => {
    perspektywyDetailsComparabilityControl?.classList.toggle('hidden', isOverall);
    if (isOverall) return;
    const tone = meta.tone === 'new' ? 'new' : meta.tone === 'warning' ? 'warning' : 'info';
    const classes = {
      warning: {
        badge: 'inline-flex shrink-0 items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-900',
        dot: 'h-1.5 w-1.5 rounded-full bg-amber-600'
      },
      new: {
        badge: 'inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800',
        dot: 'h-1.5 w-1.5 rounded-full bg-emerald-600'
      },
      info: {
        badge: 'inline-flex shrink-0 items-center gap-1.5 rounded-full bg-indigo-100 px-2.5 py-1 text-[11px] font-bold text-indigo-800',
        dot: 'h-1.5 w-1.5 rounded-full bg-indigo-600'
      }
    }[tone];
    if (perspektywyDetailsComparabilityBadge) perspektywyDetailsComparabilityBadge.className = classes.badge;
    if (perspektywyDetailsComparabilityDot) perspektywyDetailsComparabilityDot.className = classes.dot;
    if (perspektywyDetailsComparabilityLabel) perspektywyDetailsComparabilityLabel.textContent = meta.status || 'Seria względna';
    if (perspektywyDetailsComparabilityShort) perspektywyDetailsComparabilityShort.textContent = meta.short || 'Coroczna normalizacja';
  };

  const renderPerspektywyRelatedSeries = (relatedNames = []) => {
    if (!perspektywyDetailsRelated) return;
    const availableNames = relatedNames.filter((name) => perspektywyIndicatorSeriesByName.has(name));
    perspektywyDetailsRelated.classList.toggle('hidden', availableNames.length === 0);
    const label = document.createElement('span');
    label.className = 'text-xs font-semibold text-slate-600';
    label.textContent = 'Powiązane serie:';
    const buttons = availableNames.map((name) => {
      const relatedSeries = perspektywyIndicatorSeriesByName.get(name);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'rounded-lg border border-indigo-200 bg-indigo-50 px-2.5 py-1.5 text-xs font-semibold text-indigo-800 transition hover:border-indigo-300 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500';
      button.textContent = name;
      button.setAttribute('aria-label', 'Pokaż serię: ' + name);
      button.addEventListener('click', () => {
        if (!perspektywyDetailsMetricSelect) return;
        perspektywyDetailsMetricSelect.value = relatedSeries.id;
        perspektywyDetailsMetricSelect.dispatchEvent(new Event('change'));
      });
      return button;
    });
    perspektywyDetailsRelated.replaceChildren(label, ...buttons);
  };
  const updatePerspektywyDetailsModeButtons = () => {
    perspektywyDetailsModeButtons.forEach((button) => {
      const active = button.dataset.perspektywyDetailsMode === perspektywyDetailsMode;
      button.setAttribute('aria-pressed', active.toString());
      button.className = active
        ? 'rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm'
        : 'rounded-md px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-950';
    });
  };

  const renderPerspektywyDetails = () => {
    const selectedId = perspektywyDetailsMetricSelect?.value || 'overall';
    const selectedIndicator = perspektywyIndicatorSeries.get(selectedId) || null;
    const seriesMeta = getPerspektywyIndicatorMeta(selectedIndicator);
    const isOverall = !selectedIndicator;
    const isPosition = isOverall && perspektywyDetailsMode === 'position';
    const years = perspektywyIndicatorData.years || perspektywyYears;
    const data = selectedIndicator?.values || (isPosition ? perspektywyPositions : perspektywyScores);
    const seriesLabel = selectedIndicator?.name || (isPosition ? 'Pozycja' : 'WSK');
    const color = isPosition ? 'rgb(8, 145, 178)' : 'rgb(79, 70, 229)';
    const fillColor = isPosition ? 'rgba(8, 145, 178, 0.10)' : 'rgba(79, 70, 229, 0.10)';

    updatePerspektywyDetailsModeButtons();
    perspektywyDetailsModeControl?.classList.toggle('hidden', !isOverall);
    updatePerspektywyComparability(seriesMeta, isOverall);
    renderPerspektywyRelatedSeries(isOverall ? [] : (seriesMeta.related || []));

    if (perspektywyDetailsMetricHelp) {
      perspektywyDetailsMetricHelp.textContent = isOverall
        ? 'WSK jest wynikiem końcowym w skali 0–100. W widoku pozycji mniejszy numer oznacza lepsze miejsce. ' + (seriesMeta.description || '')
        : selectedIndicator.criterion + '. ' + (seriesMeta.description || 'Wartości są corocznie normalizowane w skali 0–100 względem innych uczelni.');
    }

    if (perspektywyDetailsYearCards) {
      const cards = years.map((year, index) => {
        const value = data[index];
        const article = document.createElement('article');
        article.setAttribute('role', 'listitem');
        article.className = 'border-r border-slate-200 px-3 py-4 text-center last:border-r-0' + (value == null ? ' bg-slate-50/70' : '');

        if (isOverall) {
          const score = formatPerspektywyValue(perspektywyScores[index]);
          const position = perspektywyPositions[index] == null ? '—' : String(perspektywyPositions[index]);
          const primaryValue = isPosition ? position : score;
          const secondaryLabel = isPosition ? 'WSK' : 'Pozycja';
          const secondaryValue = isPosition ? score : position;
          article.innerHTML =
            '<p class="text-xs font-bold tracking-wide text-indigo-700">' + year + '</p>' +
            '<p class="mt-3 text-3xl font-extrabold ' + (isPosition ? 'text-cyan-700' : 'text-slate-950') + '">' + primaryValue + '</p>' +
            '<p class="mt-2 text-xs text-slate-500">' + secondaryLabel + ' <strong class="' + (isPosition ? 'text-indigo-700' : 'text-cyan-700') + '">' + secondaryValue + '</strong></p>';
        } else {
          const weight = formatPerspektywyWeight(selectedIndicator.indicatorWeights[index]);
          article.innerHTML =
            '<p class="text-xs font-bold tracking-wide text-indigo-700">' + year + '</p>' +
            '<p class="mt-3 text-3xl font-extrabold ' + (value == null ? 'text-slate-300' : 'text-slate-950') + '">' + formatPerspektywyValue(value) + '</p>' +
            '<p class="mt-2 text-xs text-slate-500">' + (value == null ? 'Brak danych' : (weight ? 'Waga ' + weight : 'Wartość 0–100')) + '</p>';
        }
        return article;
      });
      perspektywyDetailsYearCards.replaceChildren(...cards);
    }

    const availableYears = years.filter((year, index) => data[index] != null);
    const missingYears = years.filter((year, index) => data[index] == null);
    const indicatorWeights = selectedIndicator
      ? [...new Set(selectedIndicator.indicatorWeights.filter((value) => value != null))]
      : [];
    const criterionWeights = selectedIndicator
      ? [...new Set(selectedIndicator.criterionWeights.filter((value) => value != null))]
      : [];

    if (perspektywyDetailsChartTitle) {
      perspektywyDetailsChartTitle.textContent = seriesLabel + ' — trend 2020–2026';
    }
    if (perspektywyDetailsChartNote) {
      if (isOverall) {
        perspektywyDetailsChartNote.textContent = isPosition
          ? 'Mniejszy numer oznacza lepszą pozycję w rankingu.'
          : 'Skala 0–100; wyższy WSK oznacza lepszy wynik.';
      } else {
        const coverage = availableYears.length
          ? 'Dostępne edycje: ' + availableYears.join(', ') + '.'
          : 'Brak dostępnych wartości.';
        const missing = missingYears.length ? ' Brak danych: ' + missingYears.join(', ') + '.' : '';
        const indicatorWeight = indicatorWeights.length === 1
          ? ' Waga wskaźnika: ' + formatPerspektywyWeight(indicatorWeights[0]) + '.'
          : indicatorWeights.length > 1
            ? ' Waga wskaźnika zmieniała się: ' + indicatorWeights.map(formatPerspektywyWeight).join(', ') + '.'
            : '';
        const criterionWeight = criterionWeights.length === 1
          ? ' Waga kryterium: ' + formatPerspektywyWeight(criterionWeights[0]) + '.'
          : '';
        perspektywyDetailsChartNote.textContent = selectedIndicator.criterion + '. ' + coverage + missing + indicatorWeight + criterionWeight;
      }
    }
    if (perspektywyDetailsStatus) {
      perspektywyDetailsStatus.textContent = 'Widok szczegółów Perspektyw: ' + seriesLabel + (isOverall ? '.' : '. Porównywalność: ' + (seriesMeta.status || 'seria względna') + '.');
    }
    if (perspektywyDetailsLegendLabel) {
      perspektywyDetailsLegendLabel.textContent = isPosition ? 'Pozycja — mniejszy numer = lepiej' : seriesLabel + ' 0–100';
    }
    if (perspektywyDetailsLegendLine) {
      perspektywyDetailsLegendLine.className = 'h-0.5 w-8 ' + (isPosition ? 'bg-cyan-600' : 'bg-indigo-600');
    }
    if (perspektywyDetailsCanvas) {
      perspektywyDetailsCanvas.setAttribute(
        'aria-label',
        'Trend: ' + seriesLabel + ', Politechnika Warszawska, Ranking Uczelni Akademickich Perspektywy, lata 2020–2026.'
      );
    }
    if (!perspektywyDetailsCanvas || typeof Chart === 'undefined') return;

    perspektywyDetailsChart?.destroy();
    perspektywyDetailsChart = new Chart(perspektywyDetailsCanvas, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: seriesLabel,
          data,
          borderColor: color,
          backgroundColor: fillColor,
          pointBackgroundColor: color,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 3,
          tension: 0.28,
          spanGaps: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        layout: { padding: { top: 20 } },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => seriesLabel + ': ' + (isPosition ? context.raw : formatPerspektywyValue(context.raw))
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#475569', font: { weight: '600' } }
          },
          y: {
            type: 'linear',
            reverse: isPosition,
            min: isPosition ? 2 : 0,
            max: isPosition ? 4 : 100,
            title: {
              display: true,
              text: isPosition ? 'Pozycja (mniejszy numer = lepiej)' : seriesLabel + ' (0–100)',
              color: isPosition ? '#0e7490' : '#4338ca',
              font: { weight: '700' }
            },
            ticks: {
              color: isPosition ? '#0e7490' : '#4338ca',
              precision: isPosition ? 0 : undefined,
              stepSize: isPosition ? 1 : 10
            },
            grid: { color: 'rgba(148, 163, 184, 0.18)' }
          }
        }
      }
    });
  };

  perspektywyDetailsModeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      perspektywyDetailsMode = button.dataset.perspektywyDetailsMode === 'position' ? 'position' : 'score';
      renderPerspektywyDetails();
    });
  });

  perspektywyDetailsMetricSelect?.addEventListener('change', renderPerspektywyDetails);
  const qsWurIndicatorSelect = document.getElementById('qsWurIndicatorSelect');
  const qsWurDetailsYearCards = document.getElementById('qsWurDetailsYearCards');
  const qsWurDetailsChartTitle = document.getElementById('qsWurDetailsChartTitle');
  const qsWurDetailsChartNote = document.getElementById('qsWurDetailsChartNote');
  const qsWurDetailsCanvas = document.getElementById('chartQSWurDetails');
  const qsWurDetailsStatus = document.getElementById('qsWurDetailsStatus');
  const qsWurDetailsLegendLine = document.getElementById('qsWurDetailsLegendLine');
  const qsWurDetailsLegendLabel = document.getElementById('qsWurDetailsLegendLabel');
  const qsWurModeButtons = [...document.querySelectorAll('[data-qs-wur-mode]')];
  const qsWurIndicatorLabels = {
    'Academic Reputation': 'Reputacja akademicka',
    'Employer Reputation': 'Reputacja pracodawców',
    'Faculty Student Ratio': 'Liczba pracowników na studenta',
    'Citations per Faculty': 'Cytowania na pracownika',
    'International Faculty': 'Kadra międzynarodowa',
    'International Students': 'Studenci międzynarodowi',
    'International Research Network': 'Międzynarodowa sieć badawcza',
    'Employment Outcomes': 'Wyniki zatrudnienia absolwentów',
    'Sustainability': 'Zrównoważony rozwój',
    'International Students Diversity': 'Różnorodność studentów międzynarodowych',
    'Overall Score': 'Wynik ogólny'
  };
  let qsWurDetailsChart = null;
  let qsWurDetailsMode = 'score';

  const formatQsWurScore = (value) => value == null
    ? '—'
    : new Intl.NumberFormat('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value);

  const updateQsWurModeButtons = () => {
    qsWurModeButtons.forEach((button) => {
      const active = button.dataset.qsWurMode === qsWurDetailsMode;
      button.setAttribute('aria-pressed', active.toString());
      button.className = active
        ? 'rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm'
        : 'rounded-md px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-950';
    });
  };

  const renderQsWurDetails = () => {
    const indicator = qsWurIndicatorSelect?.value || 'Academic Reputation';
    const displayLabel = qsWurIndicatorLabels[indicator] || indicator;
    const series = qsWurDetailsData[indicator];
    const isScore = qsWurDetailsMode === 'score';
    if (!series) return;

    updateQsWurModeButtons();

    if (qsWurDetailsYearCards) {
      const cards = qsWurDetailsYears.map((year, index) => {
        const score = formatQsWurScore(series.scores[index]);
        const rank = series.rankLabels[index] || '—';
        const primaryValue = isScore ? score : rank;
        const primaryMissing = isScore ? series.scores[index] == null : series.ranks[index] == null;
        const secondaryLabel = isScore ? 'Pozycja' : 'Wynik';
        const secondaryValue = isScore ? rank : score;
        const article = document.createElement('article');
        article.setAttribute('role', 'listitem');
        article.className = 'border-b border-slate-200 px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0';
        article.innerHTML =
          '<p class="text-center text-sm font-bold tracking-wide text-indigo-700">' + year + '</p>' +
          '<p class="mt-3 text-center text-4xl font-extrabold ' + (primaryMissing ? 'text-slate-300' : isScore ? 'text-slate-950' : 'text-cyan-700') + '">' + primaryValue + '</p>' +
          '<p class="mt-2 text-center text-sm text-slate-500">' + secondaryLabel + ' <strong class="' + (isScore ? 'text-cyan-700' : 'text-indigo-700') + '">' + secondaryValue + '</strong></p>';
        return article;
      });
      qsWurDetailsYearCards.replaceChildren(...cards);
    }

    const modeLabel = isScore ? 'wynik' : 'pozycja';
    const modeDescription = isScore
      ? 'Skala 0–100; wyższy wynik jest lepszy.'
      : 'Mniejszy numer oznacza lepszą pozycję.';
    const availabilityNote = indicator === 'International Students Diversity'
      ? ' Dane są dostępne od edycji 2026.'
      : '';

    if (qsWurDetailsChartTitle) qsWurDetailsChartTitle.textContent = displayLabel + ' — ' + modeLabel + ' 2024–2026';
    if (qsWurDetailsChartNote) qsWurDetailsChartNote.textContent = modeDescription + availabilityNote;
    if (qsWurDetailsStatus) qsWurDetailsStatus.textContent = 'Wybrano: ' + displayLabel + ', widok: ' + modeLabel + '.';
    if (qsWurDetailsLegendLabel) {
      qsWurDetailsLegendLabel.textContent = isScore ? 'Wynik 0–100' : 'Pozycja — mniejszy numer = lepiej';
    }
    if (qsWurDetailsLegendLine) {
      qsWurDetailsLegendLine.className = 'h-0.5 w-8 ' + (isScore ? 'bg-indigo-600' : 'bg-cyan-600');
    }
    if (qsWurDetailsCanvas) {
      qsWurDetailsCanvas.setAttribute('aria-label', displayLabel + ': trend ' + modeLabel + ' Politechniki Warszawskiej w QS World University Rankings w latach 2024–2026.');
    }
    if (!qsWurDetailsCanvas || typeof Chart === 'undefined') return;

    const data = isScore ? series.scores : series.ranks;
    const color = isScore ? 'rgb(79, 70, 229)' : 'rgb(8, 145, 178)';
    const fillColor = isScore ? 'rgba(79, 70, 229, 0.10)' : 'rgba(8, 145, 178, 0.10)';
    const validValues = data.filter((value) => typeof value === 'number');
    const valueMin = validValues.length ? Math.min(...validValues) : 1;
    const valueMax = validValues.length ? Math.max(...validValues) : 100;
    const valueSpread = Math.max(20, valueMax - valueMin);
    const valuePadding = Math.ceil(valueSpread * 0.18);
    const rankMin = Math.max(1, Math.floor((valueMin - valuePadding) / 10) * 10);
    const rankMax = Math.max(rankMin + 10, Math.ceil((valueMax + valuePadding) / 10) * 10);

    qsWurDetailsChart?.destroy();
    qsWurDetailsChart = new Chart(qsWurDetailsCanvas, {
      type: 'line',
      data: {
        labels: qsWurDetailsYears,
        datasets: [{
          label: isScore ? 'Wynik' : 'Pozycja',
          data,
          borderColor: color,
          backgroundColor: fillColor,
          pointBackgroundColor: color,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
          borderWidth: 3,
          tension: 0.28,
          spanGaps: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        layout: { padding: { top: 20 } },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => isScore
                ? 'Wynik: ' + formatQsWurScore(context.raw)
                : 'Pozycja: ' + (series.rankLabels[context.dataIndex] || '—')
            }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: '#475569', font: { weight: '600' } } },
          y: {
            type: 'linear',
            reverse: !isScore,
            min: isScore ? 0 : rankMin,
            max: isScore ? 100 : rankMax,
            title: {
              display: true,
              text: isScore ? 'Wynik (0–100)' : 'Pozycja (mniejszy numer = lepiej)',
              color: isScore ? '#4338ca' : '#0e7490',
              font: { weight: '700' }
            },
            ticks: { color: isScore ? '#4338ca' : '#0e7490', precision: 0 },
            grid: { color: 'rgba(148, 163, 184, 0.18)' }
          }
        }
      }
    });
  };

  qsWurIndicatorSelect?.addEventListener('change', renderQsWurDetails);
  qsWurModeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      qsWurDetailsMode = button.dataset.qsWurMode === 'rank' ? 'rank' : 'score';
      renderQsWurDetails();
    });
  });

  document.querySelectorAll('[data-methodology-open]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const modal = document.getElementById(trigger.dataset.methodologyOpen);
      if (!modal) return;
      activeInternationalMethodologyTrigger = trigger;
      syncMethodologySelect(modal.id);
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('overflow-hidden');
      const scrollPanel = modal.querySelector(':scope > .relative > section');
      if (scrollPanel) scrollPanel.scrollTop = 0;
      modal.querySelector('[data-methodology-close]')?.focus();
      if (modal.id === 'theWurDetailsModal') requestAnimationFrame(renderTheWurDetails);
      if (modal.id === 'theSubjectDetailsModal') requestAnimationFrame(renderTheSubjectDetails);
      if (modal.id === 'theSubjectMethodologyModal') requestAnimationFrame(renderTheSubjectMethodology);
      if (modal.id === 'arwuDetailsModal') requestAnimationFrame(renderArwuDetails);
      if (modal.id === 'qsWurDetailsModal') requestAnimationFrame(renderQsWurDetails);
      if (modal.id === 'qsSubjectDetailsModal') requestAnimationFrame(renderQSSubjectDetails);
      if (modal.id === 'grasDetailsModal') requestAnimationFrame(renderGrasDetails);
      if (modal.id === 'perspektywyDetailsModal') requestAnimationFrame(renderPerspektywyDetails);
      if (modal.id === 'rksDetailsModal') requestAnimationFrame(renderRKSDetails);
      if (modal.id === 'engiSubjectDetailsModal') requestAnimationFrame(renderEngiSubjectDetails);
      if (modal.id === 'engiDetailsModal') requestAnimationFrame(renderEngiDetails);
    });
  });

  internationalMethodologyModals.forEach((modal) => {
    modal.querySelector('[data-methodology-close]')?.addEventListener('click', () => closeInternationalMethodology(modal));
    modal.querySelector('[data-methodology-backdrop]')?.addEventListener('click', () => closeInternationalMethodology(modal));
  });

  const updateSegmentedToggle = (button, activeMode) => {
    if (!button) return;
    button.setAttribute('aria-pressed', (activeMode !== 'position').toString());
    button.querySelectorAll('[data-toggle-option]').forEach((option) => {
      const isActive = option.dataset.toggleOption === activeMode;
      option.className = isActive
        ? 'rounded-full bg-white px-2.5 py-1 text-indigo-700 shadow-sm transition'
        : 'rounded-full px-2.5 py-1 text-slate-500 transition hover:text-indigo-700';
    });
  };

  const openRuaMethodology = () => {
    if (!ruaMethodologyModal) return;
    ruaMethodologyModal.classList.remove('hidden');
    ruaMethodologyModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('overflow-hidden');
    ruaMethodologyClose?.focus();
  };

  const closeRuaMethodology = () => {
    if (!ruaMethodologyModal) return;
    ruaMethodologyModal.classList.add('hidden');
    ruaMethodologyModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('overflow-hidden');
    ruaMethodologyOpen?.focus();
  };

  const openRksMethodology = () => {
    if (!rksMethodologyModal) return;
    const chartSubjectSelect = document.getElementById('rksSubjectSelect');
    if (rksMethodologySubjectSelect && chartSubjectSelect && chartSubjectSelect.value) {
      rksMethodologySubjectSelect.value = chartSubjectSelect.value;
      rksMethodologySubjectSelect.dispatchEvent(new Event('change'));
    }
    rksMethodologyModal.classList.remove('hidden');
    rksMethodologyModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('overflow-hidden');
    rksMethodologyClose?.focus();
  };

  const closeRksMethodology = () => {
    if (!rksMethodologyModal) return;
    rksMethodologyModal.classList.add('hidden');
    rksMethodologyModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('overflow-hidden');
    rksMethodologyOpen?.focus();
  };

  ruaMethodologyOpen?.addEventListener('click', openRuaMethodology);
  ruaMethodologyClose?.addEventListener('click', closeRuaMethodology);
  ruaMethodologyBackdrop?.addEventListener('click', closeRuaMethodology);
  rksMethodologyOpen?.addEventListener('click', openRksMethodology);
  rksMethodologyClose?.addEventListener('click', closeRksMethodology);
  rksMethodologyBackdrop?.addEventListener('click', closeRksMethodology);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (ruaMethodologyModal && !ruaMethodologyModal.classList.contains('hidden')) {
        closeRuaMethodology();
      }
      if (rksMethodologyModal && !rksMethodologyModal.classList.contains('hidden')) {
        closeRksMethodology();
      }
      internationalMethodologyModals.forEach((modal) => {
        if (!modal.classList.contains('hidden')) closeInternationalMethodology(modal);
      });
    }
  });

  const trapFocus = (modal, event) => {
    if (!modal || modal.classList.contains('hidden') || event.key !== 'Tab') return;
    const focusable = [...modal.querySelectorAll('a[href], button:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      .filter((element) => element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  document.addEventListener('keydown', (event) => {
    trapFocus(ruaMethodologyModal, event);
    trapFocus(rksMethodologyModal, event);
    internationalMethodologyModals.forEach((modal) => trapFocus(modal, event));
  });

  const dashboardNav = document.querySelector('.dashboard-nav');
  const dashboardBrand = dashboardNav?.querySelector('.dashboard-nav__brand');
  let navScrollFrame = null;
  const updateDashboardNav = () => {
    const condensed = window.scrollY > 8;
    dashboardNav?.classList.toggle('is-condensed', condensed);
    if (dashboardBrand) {
      dashboardBrand.tabIndex = condensed ? -1 : 0;
      dashboardBrand.setAttribute('aria-hidden', condensed ? 'true' : 'false');
    }
    navScrollFrame = null;
  };
  updateDashboardNav();
  window.addEventListener('scroll', () => {
    if (navScrollFrame !== null) return;
    navScrollFrame = window.requestAnimationFrame(updateDashboardNav);
  }, { passive: true });

  const navLinks = [...document.querySelectorAll('.dashboard-nav a[href^="#"]')];
  const observedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if ('IntersectionObserver' in window && observedSections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${visible.target.id}`;
        link.setAttribute('aria-current', active ? 'true' : 'false');
      });
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0.05, 0.2, 0.5] });
    observedSections.forEach((section) => sectionObserver.observe(section));
  }

  if (typeof Chart === 'undefined') {
    return;
  }

  Chart.defaults.font.family = 'Inter, system-ui, sans-serif';
  Chart.defaults.color = '#4B5563';
  Chart.defaults.maintainAspectRatio = false;
  Chart.defaults.interaction.mode = 'index';
  Chart.defaults.interaction.intersect = false;
  Chart.defaults.plugins.tooltip.enabled = false;
  Chart.defaults.plugins.legend.labels.boxWidth = 36;
  Chart.defaults.plugins.legend.labels.pointStyleWidth = 32;

  const defaultLegendLabelGenerator = Chart.defaults.plugins.legend.labels.generateLabels;
  const createLegendLineSwatch = (dataset, fallbackColor) => {
    const swatch = document.createElement('canvas');
    swatch.width = 32;
    swatch.height = 8;
    const context = swatch.getContext('2d');
    const borderColor = typeof dataset?.borderColor === 'string' ? dataset.borderColor : fallbackColor;
    context.strokeStyle = borderColor || '#64748b';
    context.lineWidth = typeof dataset?.borderWidth === 'number' ? Math.max(2, dataset.borderWidth) : 2;
    context.lineCap = 'round';
    context.setLineDash(Array.isArray(dataset?.borderDash) ? dataset.borderDash : []);
    context.lineDashOffset = Number(dataset?.borderDashOffset) || 0;
    context.beginPath();
    context.moveTo(1, 4);
    context.lineTo(31, 4);
    context.stroke();
    return swatch;
  };

  Chart.defaults.plugins.legend.labels.generateLabels = (chart) => {
    return defaultLegendLabelGenerator(chart).map((item) => ({
      ...item,
      pointStyle: createLegendLineSwatch(chart.data.datasets[item.datasetIndex], item.strokeStyle)
    }));
  };

  const formatHoverValue = (value) => {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value.toLocaleString('pl-PL', { maximumFractionDigits: 2 });
    }
    return value == null ? '—' : String(value);
  };

  const resolveHoverLabel = (chart, activeElement) => {
    const { datasetIndex, index: dataIndex, element } = activeElement;
    const dataset = chart.data.datasets[datasetIndex];
    const raw = dataset?.data?.[dataIndex];
    const parsed = chart.getDatasetMeta(datasetIndex)?.controller?.getParsed(dataIndex);
    const value = parsed && typeof parsed === 'object' && 'y' in parsed ? parsed.y : raw;
    const callback = chart.options?.plugins?.tooltip?.callbacks?.label;
    let resolved;

    if (typeof callback === 'function') {
      try {
        resolved = callback({
          chart,
          dataset,
          datasetIndex,
          dataIndex,
          element,
          label: chart.data.labels?.[dataIndex],
          parsed,
          raw,
          formattedValue: formatHoverValue(value)
        });
      } catch (error) {
        resolved = undefined;
      }
    }

    if (resolved === null) return null;
    if (Array.isArray(resolved)) resolved = resolved.filter(Boolean).join(' · ');
    if (typeof resolved === 'string' && resolved.trim()) return resolved.trim();
    const prefix = dataset?.label ? dataset.label + ': ' : '';
    return prefix + formatHoverValue(value);
  };

  const fitHoverLabel = (context, label, maxWidth) => {
    if (context.measureText(label).width <= maxWidth) return label;
    let shortened = label;
    while (shortened.length > 8 && context.measureText(shortened + '…').width > maxWidth) {
      shortened = shortened.slice(0, -1);
    }
    return shortened + '…';
  };

  const hoverValueLabelsPlugin = {
    id: 'hoverValueLabels',
    afterDatasetsDraw(chart) {
      const activeElements = chart.getActiveElements();
      if (!activeElements.length) return;
      const { ctx, chartArea } = chart;
      const maxTextWidth = Math.max(72, chartArea.right - chartArea.left - 28);

      ctx.save();
      ctx.font = '700 11px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      activeElements.forEach((activeElement, activeIndex) => {
        const label = resolveHoverLabel(chart, activeElement);
        if (!label) return;
        const visibleLabel = fitHoverLabel(ctx, label, maxTextWidth);
        const point = activeElement.element.tooltipPosition();
        const boxWidth = Math.min(maxTextWidth + 16, ctx.measureText(visibleLabel).width + 16);
        const boxHeight = 24;
        const preferBelow = activeElements.length > 1 && activeIndex % 2 === 1;
        let boxX = point.x - boxWidth / 2;
        let boxY = preferBelow ? point.y + 10 : point.y - boxHeight - 10;
        boxX = Math.max(chartArea.left + 2, Math.min(boxX, chartArea.right - boxWidth - 2));
        if (boxY < chartArea.top + 2) boxY = point.y + 10;
        if (boxY + boxHeight > chartArea.bottom - 2) boxY = point.y - boxHeight - 10;

        const dataset = chart.data.datasets[activeElement.datasetIndex];
        const borderColor = typeof dataset?.borderColor === 'string' ? dataset.borderColor : '#4f46e5';
        const radius = 6;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.96)';
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(boxX + radius, boxY);
        ctx.lineTo(boxX + boxWidth - radius, boxY);
        ctx.quadraticCurveTo(boxX + boxWidth, boxY, boxX + boxWidth, boxY + radius);
        ctx.lineTo(boxX + boxWidth, boxY + boxHeight - radius);
        ctx.quadraticCurveTo(boxX + boxWidth, boxY + boxHeight, boxX + boxWidth - radius, boxY + boxHeight);
        ctx.lineTo(boxX + radius, boxY + boxHeight);
        ctx.quadraticCurveTo(boxX, boxY + boxHeight, boxX, boxY + boxHeight - radius);
        ctx.lineTo(boxX, boxY + radius);
        ctx.quadraticCurveTo(boxX, boxY, boxX + radius, boxY);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = borderColor;
        ctx.fillText(visibleLabel, boxX + boxWidth / 2, boxY + boxHeight / 2 + 0.5);
      });

      ctx.restore();
    }
  };

  Chart.register(hoverValueLabelsPlugin);

  const fixedHeightChartObservers = new WeakMap();
  const fixedHeightChartSizePlugin = {
    id: 'fixedHeightChartSize',
    afterInit(chart) {
      if (chart.options.responsive !== false) return;
      const canvas = chart.canvas;
      const fixedHeight = Number.parseFloat(canvas.style.height) || canvas.height;
      const observedElement = canvas.parentElement || canvas;
      const state = { observer: null, resizeFrame: 0, onWindowResize: null };

      const syncSize = () => {
        state.resizeFrame = 0;
        const displayWidth = Math.round(canvas.getBoundingClientRect().width);
        if (displayWidth <= 0) return;
        const styles = getComputedStyle(canvas);
        const verticalMargins = (Number.parseFloat(styles.marginTop) || 0) + (Number.parseFloat(styles.marginBottom) || 0);
        if (chart.width !== displayWidth || chart.height !== fixedHeight) {
          chart.resize(displayWidth, fixedHeight + verticalMargins);
          canvas.style.width = '100%';
          canvas.style.height = fixedHeight + 'px';
        }
      };
      const queueSync = () => {
        if (state.resizeFrame) cancelAnimationFrame(state.resizeFrame);
        state.resizeFrame = requestAnimationFrame(syncSize);
      };

      requestAnimationFrame(() => requestAnimationFrame(syncSize));
      state.observer = typeof ResizeObserver === 'function' ? new ResizeObserver(queueSync) : null;
      state.observer?.observe(observedElement);
      state.onWindowResize = queueSync;
      window.addEventListener('resize', state.onWindowResize, { passive: true });
      fixedHeightChartObservers.set(chart, state);
    },
    afterDestroy(chart) {
      const state = fixedHeightChartObservers.get(chart);
      state?.observer?.disconnect();
      if (state?.onWindowResize) window.removeEventListener('resize', state.onWindowResize);
      if (state?.resizeFrame) cancelAnimationFrame(state.resizeFrame);
      fixedHeightChartObservers.delete(chart);
    }
  };

  Chart.register(fixedHeightChartSizePlugin);

  new Chart(document.getElementById('chartQS'), {
    type: 'line',
    data: {
      labels: qsYears,
      datasets: [
        {
          label: 'Najlepsza pozycja w przedziale',
          data: qsMin,
          borderColor: 'rgb(79,70,229)',
          fill: '+1',
          backgroundColor: 'rgba(79,70,229,0.12)',
          tension: 0.25,
          pointRadius: 3,
          spanGaps: true,
          borderWidth: 2
        },
        {
          label: 'Najsłabsza pozycja w przedziale',
          data: qsMax,
          borderColor: 'rgba(79,70,229,0.5)',
          fill: false,
          tension: 0.25,
          pointRadius: 3,
          spanGaps: true,
          borderDash: [6, 4],
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          display: true,
          labels: {
            usePointStyle: true,
            pointStyle: 'line',
            boxHeight: 2
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const index = context.dataIndex;
              const lower = qsMin[index];
              const upper = qsMax[index];
              if (context.datasetIndex !== 0) {
                return null;
              }
              if (lower === upper) {
                return `Pozycja: ${Math.round(lower)}`;
              }
              return `Pozycja: ${Math.round(lower)}-${Math.round(upper)}`;
            }
          }
        }
      },
      scales: {
        y: {
          reverse: true,
          suggestedMin: 650,
          suggestedMax: 480,
          ticks: {
            callback: (value) => Math.round(value)
          },
          grid: { color: 'rgba(17,24,39,0.08)' },
          title: { display: true, text: 'Pozycja (wy\u017Cej = lepiej)' }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  });

  const qsSubjectCanvas = document.getElementById('chartQSSubject');
  const qsSubjectSelect = document.getElementById('qsSubjectSelect');
  const qsSubjectNote = document.getElementById('qsSubjectNote');

  if (qsSubjectCanvas && qsSubjectSelect && qsSubjectData && qsSubjectData.subjects) {
    const hasSubjectData = (subjectData) => {
      const values = (subjectData?.lower || []).concat(subjectData?.upper || []);
      return values.some((value) => typeof value === 'number');
    };

    const subjectNames = Object.keys(qsSubjectData.subjects)
      .filter((subject) => hasSubjectData(qsSubjectData.subjects[subject]))
      .sort((a, b) => a.localeCompare(b, 'pl-PL'));

    qsSubjectSelect.innerHTML = subjectNames
      .map((subject) => `<option value="${subject}">${subject}</option>`)
      .join('');

    let currentSubject = qsSubjectSelect.value || subjectNames[0] || null;
    if (!qsSubjectSelect.value && currentSubject) {
      qsSubjectSelect.value = currentSubject;
    }
    if (qsSubjectDetailsSelect) {
      qsSubjectDetailsSelect.innerHTML = subjectNames
        .map((subject) => '<option value="' + subject + '">' + subject + '</option>')
        .join('');
      qsSubjectDetailsSelect.value = currentSubject;
    }

    let qsSubjectDetailsChart = null;
    const qsSubjectIndicatorData = window.QSSubjectIndicatorData || {
      years: [],
      metricOrder: [],
      metrics: {},
      subjects: {}
    };
    const qsSubjectDetailsYears = [2020, 2021, 2022, 2023, 2024, 2025, 2026];
    const qsSubjectChart = new Chart(qsSubjectCanvas, {
      type: 'line',
      data: {
        labels: qsSubjectData.years,
        datasets: [
          {
            label: 'Najlepsza pozycja w przedziale',
            data: [],
            borderColor: 'rgb(79,70,229)',
            backgroundColor: 'rgba(79,70,229,0.12)',
            fill: '+1',
            tension: 0.25,
            pointRadius: 3,
            spanGaps: false,
            borderWidth: 2
          },
          {
            label: 'Najsłabsza pozycja w przedziale',
            data: [],
            borderColor: 'rgba(79,70,229,0.45)',
            backgroundColor: 'rgba(79,70,229,0.05)',
            fill: false,
            tension: 0.25,
            pointRadius: 3,
            spanGaps: false,
            borderDash: [6, 4],
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: false,
      maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            display: true,
            labels: {
              usePointStyle: true,
              pointStyle: 'line',
              boxHeight: 2
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                if (context.datasetIndex !== 0) {
                  return null;
                }
                const chartRef = context.chart;
                const lowerValue = chartRef.data.datasets[0].data[context.dataIndex];
                const upperValue = chartRef.data.datasets[1].data[context.dataIndex];
                if (typeof lowerValue !== 'number') {
                  return 'Brak danych';
                }
                if (typeof upperValue === 'number' && upperValue !== lowerValue) {
                  return `Pozycja: ${lowerValue}-${upperValue}`;
                }
                return `Pozycja: ${lowerValue}`;
              }
            }
          }
        },
        scales: {
          y: {
            reverse: true,
            suggestedMin: 600,
            suggestedMax: 150,
            ticks: {
              callback: (value) => (typeof value === 'number' ? Math.round(value) : value)
            },
            grid: { color: 'rgba(17,24,39,0.08)' },
            title: { display: true, text: 'Pozycja (wyżej = lepiej)' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });

    const updateQSSubjectChart = (subjectName) => {
      const subjectData = qsSubjectData.subjects[subjectName];
      if (!subjectData) {
        return;
      }

      const lowerSeries = Array.isArray(subjectData.lower) ? subjectData.lower.slice() : [];
      const upperSeries = Array.isArray(subjectData.upper) ? subjectData.upper.slice() : [];
      const combinedValues = lowerSeries.concat(upperSeries).filter((value) => typeof value === 'number');

      const fallbackValues = combinedValues.length ? combinedValues : [600];
      const maxValue = Math.max(...fallbackValues);
      const minValue = Math.min(...fallbackValues);
      const padding = 20;

      qsSubjectChart.data.labels = qsSubjectData.years;
      qsSubjectChart.data.datasets[0].data = lowerSeries;
      qsSubjectChart.data.datasets[1].data = upperSeries;

      const yAxis = qsSubjectChart.options.scales.y;
      yAxis.suggestedMin = maxValue + padding;
      yAxis.suggestedMax = Math.max(minValue - padding, 1);

      qsSubjectChart.update();

      if (qsSubjectNote) {
        let noteText = `Pozycja PW w dyscyplinie ${subjectName}.`;
        for (let idx = qsSubjectData.years.length - 1; idx >= 0; idx -= 1) {
          const year = qsSubjectData.years[idx];
          const lowerValue = lowerSeries[idx];
          const upperValue = upperSeries[idx];
          if (typeof lowerValue === 'number') {
            if (typeof upperValue === 'number' && upperValue !== lowerValue) {
              noteText = `QS ${year}: przedział ${lowerValue}-${upperValue} dla ${subjectName}.`;
            } else {
              noteText = `QS ${year}: miejsce ${lowerValue} dla ${subjectName}.`;
            }
            break;
          }
        }
        qsSubjectNote.textContent = noteText;
      }
      if (qsSubjectDetailsSelect && qsSubjectDetailsSelect.value !== subjectName) {
        qsSubjectDetailsSelect.value = subjectName;
      }
      if (qsSubjectDetailsModal && !qsSubjectDetailsModal.classList.contains('hidden')) {
        renderQSSubjectDetails();
      }
    };

    const formatQSSubjectBand = (lower, upper) => {
      if (typeof lower !== 'number') return '—';
      return typeof upper === 'number' && upper !== lower ? lower + '–' + upper : String(lower);
    };

    const parseQSSubjectRankLabel = (label) => {
      if (label == null) return { raw: null, lower: null, upper: null, tied: false };
      const normalized = String(label).trim();
      const numeric = normalized.replace(/=/g, '').replace(/–/g, '-');
      const range = numeric.match(/^(\d+)-(\d+)$/);
      if (range) {
        return { raw: range[1] + '–' + range[2], lower: Number(range[1]), upper: Number(range[2]), tied: false };
      }
      const value = Number.parseInt(numeric, 10);
      if (!Number.isFinite(value)) return { raw: null, lower: null, upper: null, tied: false };
      return {
        raw: normalized.includes('=') ? '=' + value : String(value),
        lower: value,
        upper: value,
        tied: normalized.includes('=')
      };
    };

    const formatQSSubjectScore = (value) => typeof value === 'number'
      ? value.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
      : '—';

    const getQSSubjectPositionSnapshot = (subjectName, year) => {
      const archived = qsSubjectIndicatorData.subjects?.[subjectName]?.editions?.[String(year)];
      if (archived?.rank) return parseQSSubjectRankLabel(archived.rank);
      const currentIndex = qsSubjectData.years.indexOf(year);
      if (currentIndex < 0) return { raw: null, lower: null, upper: null, tied: false };
      const current = qsSubjectData.subjects?.[subjectName];
      const lower = current?.lower?.[currentIndex];
      const upper = current?.upper?.[currentIndex];
      return {
        raw: formatQSSubjectBand(lower, upper),
        lower: typeof lower === 'number' ? lower : null,
        upper: typeof upper === 'number' ? upper : null,
        tied: false
      };
    };

    const getQSSubjectMetricSnapshot = (subjectName, year, metricKey) => {
      const edition = qsSubjectIndicatorData.subjects?.[subjectName]?.editions?.[String(year)];
      const value = metricKey === 'score' ? edition?.score : edition?.metrics?.[metricKey];
      return {
        value: typeof value === 'number' ? value : null,
        sourceEdition: Boolean(edition)
      };
    };

    const getQSSubjectMetricCatalog = (subjectName) => {
      const subject = qsSubjectIndicatorData.subjects?.[subjectName];
      const editions = Object.values(subject?.editions || {});
      const catalog = [{ key: 'position', label: 'Pozycja / przedział pozycji' }];
      if (editions.some((edition) => typeof edition.score === 'number')) {
        catalog.push({ key: 'score', label: 'Wynik ogólny (0–100)' });
      }
      (qsSubjectIndicatorData.metricOrder || []).forEach((key) => {
        if (editions.some((edition) => typeof edition.metrics?.[key] === 'number')) {
          catalog.push({ key, label: qsSubjectIndicatorData.metrics?.[key] || key });
        }
      });
      return catalog;
    };

    const updateQSSubjectMetricOptions = (subjectName) => {
      if (!qsSubjectDetailsMetricSelect) return 'position';
      if (qsSubjectDetailsMetricSelect.dataset.subject === subjectName && qsSubjectDetailsMetricSelect.options.length) {
        return qsSubjectDetailsMetricSelect.value;
      }
      const previous = qsSubjectDetailsMetricSelect.value;
      const catalog = getQSSubjectMetricCatalog(subjectName);
      const positionOption = document.createElement('option');
      positionOption.value = 'position';
      positionOption.textContent = catalog[0].label;
      const resultGroup = document.createElement('optgroup');
      resultGroup.label = 'Opublikowane wyniki 0–100';
      catalog.slice(1).forEach(({ key, label }) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = label;
        resultGroup.append(option);
      });
      qsSubjectDetailsMetricSelect.replaceChildren(positionOption, resultGroup);
      const available = new Set(catalog.map(({ key }) => key));
      qsSubjectDetailsMetricSelect.value = available.has(previous) ? previous : 'position';
      qsSubjectDetailsMetricSelect.dataset.subject = subjectName;
      return qsSubjectDetailsMetricSelect.value;
    };

    const createQSSubjectYearCard = (year, snapshot) => {
      const hasPosition = typeof snapshot.lower === 'number';
      const card = document.createElement('article');
      card.className = 'rks-details-year' + (hasPosition ? '' : ' missing');
      card.setAttribute('role', 'listitem');
      const yearLabel = document.createElement('div');
      yearLabel.className = 'year';
      yearLabel.textContent = year;
      const position = document.createElement('div');
      position.className = 'position';
      position.textContent = snapshot.raw || '—';
      const positionLabel = document.createElement('span');
      positionLabel.className = 'position-label';
      positionLabel.textContent = hasPosition
        ? (snapshot.upper !== snapshot.lower ? 'przedział pozycji' : 'pozycja')
        : 'brak danych';
      const range = document.createElement('span');
      range.className = 'score';
      range.textContent = hasPosition && snapshot.upper !== snapshot.lower
        ? (snapshot.upper - snapshot.lower + 1) + ' miejsc w przedziale'
        : (hasPosition ? (snapshot.tied ? 'pozycja ex aequo' : 'pozycja dokładna') : 'nieklasyfikowana');
      card.append(yearLabel, position, positionLabel, range);
      return card;
    };

    const createQSSubjectMetricYearCard = (year, snapshot, isOverallScore) => {
      const hasValue = typeof snapshot.value === 'number';
      const card = document.createElement('article');
      card.className = 'rks-details-year' + (hasValue ? '' : ' missing');
      card.setAttribute('role', 'listitem');
      const yearLabel = document.createElement('div');
      yearLabel.className = 'year';
      yearLabel.textContent = year;
      const value = document.createElement('div');
      value.className = 'position';
      value.textContent = formatQSSubjectScore(snapshot.value);
      const valueLabel = document.createElement('span');
      valueLabel.className = 'position-label';
      valueLabel.textContent = hasValue ? (isOverallScore ? 'wynik ogólny' : 'wynik 0–100') : 'brak wartości';
      const availability = document.createElement('span');
      availability.className = 'score';
      availability.textContent = hasValue ? 'wartość opublikowana' : 'nie interpolujemy';
      card.append(yearLabel, value, valueLabel, availability);
      return card;
    };

    const setQSSubjectDetailsStat = (index, label, value) => {
      if (qsSubjectDetailsStatLabels[index]) qsSubjectDetailsStatLabels[index].textContent = label;
      const values = [
        qsSubjectDetailsLatestPosition,
        qsSubjectDetailsBestPosition,
        qsSubjectDetailsChange,
        qsSubjectDetailsCoverage
      ];
      if (values[index]) values[index].textContent = value;
    };

    const createQSSubjectLegendItem = (label, color, dashed = false) => {
      const item = document.createElement('span');
      item.className = 'inline-flex items-center gap-2';
      const line = document.createElement('i');
      line.className = 'h-0.5 w-7';
      if (dashed) {
        line.style.borderTop = '2px dashed ' + color;
      } else {
        line.style.backgroundColor = color;
      }
      item.append(line, document.createTextNode(label));
      return item;
    };

    const classifyQSSubjectChange = (firstLower, firstUpper, latestLower, latestUpper) => {
      if (![firstLower, firstUpper, latestLower, latestUpper].every((value) => typeof value === 'number')) return 'brak porównania';
      if (firstLower === latestLower && firstUpper === latestUpper) return 'bez zmian';
      if (latestUpper < firstLower) return 'awans';
      if (latestLower > firstUpper) return 'spadek';
      return 'zbliżony wynik';
    };

    renderQSSubjectDetails = () => {
      if (!qsSubjectDetailsCanvas || !qsSubjectDetailsSelect) return;
      const subjectName = qsSubjectDetailsSelect.value || currentSubject || subjectNames[0];
      if (!qsSubjectData.subjects[subjectName]) return;

      const metricKey = updateQSSubjectMetricOptions(subjectName);
      const isPosition = metricKey === 'position';
      const isOverallScore = metricKey === 'score';
      const metricLabel = getQSSubjectMetricCatalog(subjectName).find(({ key }) => key === metricKey)?.label || metricKey;
      const positionSnapshots = qsSubjectDetailsYears.map((year) => getQSSubjectPositionSnapshot(subjectName, year));
      const metricSnapshots = isPosition
        ? []
        : qsSubjectDetailsYears.map((year) => getQSSubjectMetricSnapshot(subjectName, year, metricKey));

      if (isPosition) {
        const validEntries = positionSnapshots
          .map((snapshot, index) => ({ ...snapshot, index }))
          .filter(({ lower }) => typeof lower === 'number');
        const best = validEntries.reduce((currentBest, entry) => {
          if (!currentBest || entry.lower < currentBest.lower) return entry;
          if (entry.lower === currentBest.lower && entry.upper < currentBest.upper) return entry;
          return currentBest;
        }, null);
        const latest = validEntries.at(-1);
        const first = validEntries[0];
        const latestSnapshot = positionSnapshots.at(-1);
        setQSSubjectDetailsStat(0, 'Pozycja 2026', latestSnapshot?.raw || '—');
        setQSSubjectDetailsStat(1, 'Najlepszy wynik', best?.raw || '—');
        setQSSubjectDetailsStat(
          2,
          first ? 'Zmiana od ' + qsSubjectDetailsYears[first.index] : 'Zmiana',
          first && latest ? classifyQSSubjectChange(first.lower, first.upper, latest.lower, latest.upper) : 'brak porównania'
        );
        setQSSubjectDetailsStat(3, 'Edycje z pozycją', validEntries.length + ' / ' + qsSubjectDetailsYears.length);
        qsSubjectDetailsYearCards?.replaceChildren(...qsSubjectDetailsYears.map((year, index) =>
          createQSSubjectYearCard(year, positionSnapshots[index])
        ));
        if (qsSubjectDetailsMetricContext) {
          const missing = qsSubjectDetailsYears.filter((year, index) => typeof positionSnapshots[index].lower !== 'number');
          qsSubjectDetailsMetricContext.textContent = 'Pasmo pokazuje pełny przedział publikowany przez QS, a nie estymowaną pozycję PW.'
            + (missing.length ? ' Brak klasyfikacji: ' + missing.join(', ') + '.' : ' Pozycja jest dostępna we wszystkich edycjach.');
        }
      } else {
        const numericEntries = metricSnapshots
          .map((snapshot, index) => ({ ...snapshot, index }))
          .filter(({ value }) => typeof value === 'number');
        const first = numericEntries[0];
        const latest = numericEntries.at(-1);
        const best = numericEntries.length ? Math.max(...numericEntries.map(({ value }) => value)) : null;
        const delta = first && latest ? latest.value - first.value : null;
        const deltaText = delta === null
          ? 'brak porównania'
          : Math.abs(delta) < 0.05
            ? 'bez zmian'
            : (delta > 0 ? '+' : '−') + formatQSSubjectScore(Math.abs(delta)) + ' pkt';
        setQSSubjectDetailsStat(0, latest ? 'Wynik ' + qsSubjectDetailsYears[latest.index] : 'Najnowszy wynik', formatQSSubjectScore(latest?.value));
        setQSSubjectDetailsStat(1, 'Najlepszy wynik', formatQSSubjectScore(best));
        setQSSubjectDetailsStat(2, first ? 'Zmiana od ' + qsSubjectDetailsYears[first.index] : 'Zmiana', deltaText);
        setQSSubjectDetailsStat(3, 'Edycje z wynikiem', numericEntries.length + ' / ' + qsSubjectDetailsYears.length);
        qsSubjectDetailsYearCards?.replaceChildren(...qsSubjectDetailsYears.map((year, index) =>
          createQSSubjectMetricYearCard(year, metricSnapshots[index], isOverallScore)
        ));
        if (qsSubjectDetailsMetricContext) {
          const available = numericEntries.map(({ index }) => qsSubjectDetailsYears[index]);
          const missing = qsSubjectDetailsYears.filter((year, index) => typeof metricSnapshots[index].value !== 'number');
          qsSubjectDetailsMetricContext.textContent = metricLabel + '. Opublikowane wartości PW: '
            + (available.length ? available.join(', ') : 'brak') + '.'
            + (missing.length ? ' Brak wartości: ' + missing.join(', ') + '.' : '')
            + ' Wyników brakujących nie interpolujemy.';
        }
      }

      const metricColor = isOverallScore ? '#059669' : '#0891b2';
      if (qsSubjectDetailsChartTitle) {
        qsSubjectDetailsChartTitle.textContent = subjectName + ' — '
          + (isPosition ? 'pozycja' : metricLabel) + ' 2020–2026';
      }
      if (qsSubjectDetailsChartNote) {
        if (isPosition) {
          const numericPositions = positionSnapshots.filter(({ lower }) => typeof lower === 'number');
          const bestLower = numericPositions.length ? Math.min(...numericPositions.map(({ lower }) => lower)) : null;
          qsSubjectDetailsChartNote.textContent = bestLower === null
            ? 'Brak opublikowanych pozycji PW.'
            : 'Niższa wartość oznacza lepszą pozycję; wypełnione pasmo pokazuje zakres miejsca ex aequo.';
        } else {
          qsSubjectDetailsChartNote.textContent = 'Wynik 0–100; wyższa wartość oznacza lepszy rezultat. Przerwy oznaczają brak opublikowanej wartości.';
        }
      }
      if (qsSubjectDetailsLegend) {
        qsSubjectDetailsLegend.replaceChildren(...(isPosition
          ? [
            createQSSubjectLegendItem('Początek przedziału', '#4f46e5'),
            createQSSubjectLegendItem('Koniec przedziału', '#818cf8', true)
          ]
          : [createQSSubjectLegendItem(metricLabel + ' 0–100', metricColor)]));
      }
      qsSubjectDetailsCanvas.setAttribute('aria-label', subjectName + ': '
        + (isPosition ? 'przedział pozycji' : metricLabel)
        + ' w QS World University Rankings by Subject 2020–2026');

      if (!qsSubjectDetailsChart) {
        qsSubjectDetailsChart = new Chart(qsSubjectDetailsCanvas, {
          type: 'line',
          data: { labels: qsSubjectDetailsYears, datasets: [] },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    if (qsSubjectDetailsChart.$mode === 'position') {
                      if (context.datasetIndex !== 0) return null;
                      const snapshot = qsSubjectDetailsChart.$positionSnapshots?.[context.dataIndex];
                      return typeof snapshot?.lower === 'number' ? 'Pozycja: ' + snapshot.raw : 'Brak danych';
                    }
                    return typeof context.parsed.y === 'number'
                      ? qsSubjectDetailsChart.$metricLabel + ': ' + formatQSSubjectScore(context.parsed.y)
                      : 'Brak danych';
                  }
                }
              }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#475569', font: { weight: '600' } } },
              y: {
                grid: { color: 'rgba(148,163,184,0.2)' },
                ticks: { color: '#475569' },
                title: { display: true, text: '' }
              }
            }
          }
        });
      }

      qsSubjectDetailsChart.data.labels = qsSubjectDetailsYears;
      qsSubjectDetailsChart.$mode = isPosition ? 'position' : 'metric';
      qsSubjectDetailsChart.$metricLabel = metricLabel;
      qsSubjectDetailsChart.$positionSnapshots = positionSnapshots;
      const yAxis = qsSubjectDetailsChart.options.scales.y;
      delete yAxis.min;
      delete yAxis.max;
      delete yAxis.suggestedMin;
      delete yAxis.suggestedMax;

      if (isPosition) {
        const lowerSeries = positionSnapshots.map(({ lower }) => lower);
        const upperSeries = positionSnapshots.map(({ upper }) => upper);
        qsSubjectDetailsChart.data.datasets = [
          {
            label: 'Początek przedziału', data: lowerSeries, borderColor: '#4f46e5',
            backgroundColor: 'rgba(79,70,229,0.13)', fill: '+1', pointBackgroundColor: '#4f46e5',
            pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6,
            borderWidth: 2.5, tension: 0.2, spanGaps: false
          },
          {
            label: 'Koniec przedziału', data: upperSeries, borderColor: 'rgba(79,70,229,0.55)',
            backgroundColor: 'transparent', fill: false, pointBackgroundColor: '#a5b4fc',
            pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6,
            borderWidth: 2, borderDash: [6, 4], tension: 0.2, spanGaps: false
          }
        ];
        const numericValues = lowerSeries.concat(upperSeries).filter((value) => typeof value === 'number');
        const minValue = numericValues.length ? Math.min(...numericValues) : 1;
        const maxValue = numericValues.length ? Math.max(...numericValues) : 600;
        const padding = Math.max(Math.ceil((maxValue - minValue) * 0.1), 10);
        yAxis.reverse = true;
        yAxis.suggestedMin = Math.max(1, minValue - padding);
        yAxis.suggestedMax = maxValue + padding;
        yAxis.ticks.stepSize = undefined;
        yAxis.ticks.callback = (value) => Math.round(value);
        yAxis.title.text = 'Pozycja (niższa wartość = lepiej)';
      } else {
        qsSubjectDetailsChart.data.datasets = [{
          label: metricLabel,
          data: metricSnapshots.map(({ value }) => value),
          borderColor: metricColor,
          backgroundColor: isOverallScore ? 'rgba(5,150,105,0.12)' : 'rgba(8,145,178,0.12)',
          pointBackgroundColor: metricColor,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2.5,
          tension: 0.2,
          spanGaps: false,
          clip: 8,
          fill: false
        }];
        yAxis.reverse = false;
        yAxis.min = 0;
        yAxis.max = 105;
        yAxis.ticks.stepSize = 10;
        yAxis.ticks.callback = (value) => value > 100 ? '' : Number(value).toLocaleString('pl-PL');
        yAxis.title.text = isOverallScore ? 'Wynik ogólny (0–100)' : 'Wynik wskaźnika (0–100)';
      }
      qsSubjectDetailsChart.update();
      qsSubjectDetailsChart.resize();
    };

    if (currentSubject) {
      updateQSSubjectChart(currentSubject);
    }

    qsSubjectSelect.addEventListener('change', (event) => {
      currentSubject = event.target.value;
      updateQSSubjectChart(currentSubject);
    });
    qsSubjectDetailsSelect?.addEventListener('change', (event) => {
      currentSubject = event.target.value;
      qsSubjectSelect.value = currentSubject;
      updateQSSubjectChart(currentSubject);
    });
    qsSubjectDetailsMetricSelect?.addEventListener('change', renderQSSubjectDetails);
    qsSubjectDetailsMethodologyOpen?.addEventListener('click', () => {
      closeInternationalMethodology(qsSubjectDetailsModal, false);
      requestAnimationFrame(() => qsSubjectMethodologyOpenButton?.click());
    });
  }

  const ruaSubjectCanvas = document.getElementById('ruaSubjectChart');
  const ruaSubjectSelect = document.getElementById('ruaSubjectSelect');
  const ruaSubjectNote = document.getElementById('ruaSubjectNote');

  if (ruaSubjectCanvas && ruaSubjectSelect && qsSubjectData && qsSubjectData.subjects) {
    const hasSubjectData = (subjectData) => {
      const values = (subjectData?.lower || []).concat(subjectData?.upper || []);
      return values.some((value) => typeof value === 'number');
    };

    const subjectNames = Object.keys(qsSubjectData.subjects)
      .filter((subject) => hasSubjectData(qsSubjectData.subjects[subject]))
      .sort((a, b) => a.localeCompare(b, 'pl-PL'));

    ruaSubjectSelect.innerHTML = subjectNames
      .map((subject) => `<option value="${subject}">${subject}</option>`)
      .join('');

    let currentSubject = ruaSubjectSelect.value || subjectNames[0] || null;
    if (!ruaSubjectSelect.value && currentSubject) {
      ruaSubjectSelect.value = currentSubject;
    }

    const ruaSubjectChart = new Chart(ruaSubjectCanvas, {
      type: 'line',
      data: {
        labels: qsSubjectData.years,
        datasets: [
          {
            label: 'Najlepsza pozycja w przedziale',
            data: [],
            borderColor: 'rgb(79,70,229)',
            backgroundColor: 'rgba(79,70,229,0.12)',
            fill: '+1',
            tension: 0.25,
            pointRadius: 3,
            spanGaps: false,
            borderWidth: 2
          },
          {
            label: 'Najsłabsza pozycja w przedziale',
            data: [],
            borderColor: 'rgba(79,70,229,0.45)',
            backgroundColor: 'rgba(79,70,229,0.05)',
            fill: false,
            tension: 0.25,
            pointRadius: 3,
            spanGaps: false,
            borderDash: [6, 4],
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: false,
      maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            display: true,
            labels: {
              usePointStyle: true,
              pointStyle: 'line',
              boxHeight: 2
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                if (context.datasetIndex !== 0) {
                  return null;
                }
                const chartRef = context.chart;
                const lowerValue = chartRef.data.datasets[0].data[context.dataIndex];
                const upperValue = chartRef.data.datasets[1].data[context.dataIndex];
                if (typeof lowerValue !== 'number') {
                  return 'Brak danych';
                }
                if (typeof upperValue === 'number' && upperValue !== lowerValue) {
                  return `Pozycja: ${lowerValue}-${upperValue}`;
                }
                return `Pozycja: ${lowerValue}`;
              }
            }
          }
        },
        scales: {
          y: {
            reverse: true,
            suggestedMin: 600,
            suggestedMax: 150,
            ticks: {
              callback: (value) => (typeof value === 'number' ? Math.round(value) : value)
            },
            grid: { color: 'rgba(17,24,39,0.08)' },
            title: { display: true, text: 'Pozycja (wyżej = lepiej)' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });

    const updateRuaSubjectChart = (subjectName) => {
      const subjectData = qsSubjectData.subjects[subjectName];
      if (!subjectData) {
        return;
      }

      const lowerSeries = Array.isArray(subjectData.lower) ? subjectData.lower.slice() : [];
      const upperSeries = Array.isArray(subjectData.upper) ? subjectData.upper.slice() : [];
      const combinedValues = lowerSeries.concat(upperSeries).filter((value) => typeof value === 'number');
      const fallbackValues = combinedValues.length ? combinedValues : [600];
      const maxValue = Math.max(...fallbackValues);
      const minValue = Math.min(...fallbackValues);
      const padding = 20;

      ruaSubjectChart.data.labels = qsSubjectData.years;
      ruaSubjectChart.data.datasets[0].data = lowerSeries;
      ruaSubjectChart.data.datasets[1].data = upperSeries;
      ruaSubjectChart.options.scales.y.suggestedMin = maxValue + padding;
      ruaSubjectChart.options.scales.y.suggestedMax = Math.max(minValue - padding, 1);
      ruaSubjectChart.update();

      if (ruaSubjectNote) {
        let noteText = `Pozycja PW w dyscyplinie ${subjectName}.`;
        for (let idx = qsSubjectData.years.length - 1; idx >= 0; idx -= 1) {
          const year = qsSubjectData.years[idx];
          const lowerValue = lowerSeries[idx];
          const upperValue = upperSeries[idx];
          if (typeof lowerValue === 'number') {
            if (typeof upperValue === 'number' && upperValue !== lowerValue) {
              noteText = `QS ${year}: przedział ${lowerValue}-${upperValue} dla ${subjectName}.`;
            } else {
              noteText = `QS ${year}: miejsce ${lowerValue} dla ${subjectName}.`;
            }
            break;
          }
        }
        ruaSubjectNote.textContent = noteText;
      }
    };

    if (currentSubject) {
      updateRuaSubjectChart(currentSubject);
    }

    ruaSubjectSelect.addEventListener('change', (event) => {
      currentSubject = event.target.value;
      updateRuaSubjectChart(currentSubject);
    });
  }

  const theSubjectCanvas = document.getElementById('chartTHESubject');
  const theSubjectSelect = document.getElementById('theSubjectSelect');
  const theSubjectNote = document.getElementById('theSubjectNote');

  if (theSubjectCanvas && theSubjectSelect && theSubjectData && theSubjectData.subjects) {
    const subjectNames = Object.keys(theSubjectData.subjects).sort((a, b) => a.localeCompare(b, 'pl-PL'));

    theSubjectSelect.innerHTML = subjectNames
      .map((subject) => `<option value="${subject}">${subject}</option>`)
      .join('');
    if (theSubjectDetailsSelect) theSubjectDetailsSelect.innerHTML = theSubjectSelect.innerHTML;

    let currentSubject = theSubjectSelect.value || subjectNames[0] || null;
    if (!theSubjectSelect.value && currentSubject) {
      theSubjectSelect.value = currentSubject;
    }

    const theSubjectChart = new Chart(theSubjectCanvas, {
      type: 'line',
      data: {
        labels: theSubjectData.years,
        datasets: [
          {
            label: 'Najlepsza pozycja w przedziale',
            data: [],
            borderColor: 'rgb(14,116,144)',
            backgroundColor: 'rgba(14,116,144,0.12)',
            fill: '+1',
            tension: 0.25,
            pointRadius: 3,
            spanGaps: true,
            borderWidth: 2
          },
          {
            label: 'Najsłabsza pozycja w przedziale',
            data: [],
            borderColor: 'rgba(14,116,144,0.45)',
            backgroundColor: 'rgba(14,116,144,0.05)',
            fill: false,
            tension: 0.25,
            pointRadius: 3,
            spanGaps: true,
            borderDash: [6, 4],
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: false,
      maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            display: true,
            labels: {
              usePointStyle: true,
              pointStyle: 'line',
              boxHeight: 2
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                if (context.datasetIndex !== 0) {
                  return null;
                }
                const chartRef = context.chart;
                const lowerValue = chartRef.data.datasets[0].data[context.dataIndex];
                const upperValue = chartRef.data.datasets[1].data[context.dataIndex];

                if (typeof lowerValue !== 'number') return 'Brak danych';

                if (lowerValue === 1001 && upperValue === 1001) return 'Pozycja: 1001+';
                if (lowerValue === 801 && upperValue === 801) return 'Pozycja: 801+';

                if (typeof upperValue === 'number' && upperValue !== lowerValue) {
                  return `Pozycja: ${lowerValue}-${upperValue}`;
                }
                return `Pozycja: ${lowerValue}`;
              }
            }
          }
        },
        scales: {
          y: {
            reverse: true,
            suggestedMin: 1200,
            suggestedMax: 200,
            ticks: {
              callback: (value) => (typeof value === 'number' ? Math.round(value) : value)
            },
            grid: { color: 'rgba(17,24,39,0.08)' },
            title: { display: true, text: 'Pozycja (wyżej = lepiej)' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });

    const updateTHESubjectChart = (subjectName) => {
      const subjectData = theSubjectData.subjects[subjectName];
      if (!subjectData) return;

      const lowerSeries = Array.isArray(subjectData.lower) ? subjectData.lower.slice() : [];
      const upperSeries = Array.isArray(subjectData.upper) ? subjectData.upper.slice() : [];
      const combinedValues = lowerSeries.concat(upperSeries).filter((value) => typeof value === 'number');

      const fallbackValues = combinedValues.length ? combinedValues : [1200];
      const maxValue = Math.max(...fallbackValues);
      const minValue = Math.min(...fallbackValues);
      const padding = 50;

      theSubjectChart.data.labels = theSubjectData.years;
      theSubjectChart.data.datasets[0].data = lowerSeries;
      theSubjectChart.data.datasets[1].data = upperSeries;

      const yAxis = theSubjectChart.options.scales.y;
      yAxis.suggestedMin = maxValue + padding;
      yAxis.suggestedMax = Math.max(minValue - padding, 1);

      theSubjectChart.update();

      if (theSubjectNote) {
         let noteText = `Pozycja PW w dyscyplinie ${subjectName}.`;
         for (let idx = theSubjectData.years.length - 1; idx >= 0; idx -= 1) {
            const val = lowerSeries[idx];
            if (typeof val === 'number') {
               const uVal = upperSeries[idx];
               const year = theSubjectData.years[idx];
               let rangeTxt = `${val}`;
               if (val === 1001 && uVal === 1001) rangeTxt = '1001+';
               else if (val === 801 && uVal === 801) rangeTxt = '801+';
               else if (uVal && uVal !== val) rangeTxt = `${val}-${uVal}`;

               noteText = `THE ${year}: miejsce ${rangeTxt} dla ${subjectName}.`;
               break;
            }
         }

         const missingYearRanges = [];
         let missingRangeStart = null;
         let previousMissingYear = null;

         theSubjectData.years.forEach((year, idx) => {
            if (typeof lowerSeries[idx] !== 'number') {
               if (missingRangeStart === null) {
                  missingRangeStart = year;
               }
               previousMissingYear = year;
            } else if (missingRangeStart !== null) {
               missingYearRanges.push([missingRangeStart, previousMissingYear]);
               missingRangeStart = null;
               previousMissingYear = null;
            }
         });

         if (missingRangeStart !== null) {
            missingYearRanges.push([missingRangeStart, previousMissingYear]);
         }

         if (missingYearRanges.length) {
            const missingParts = missingYearRanges
               .map(([startYear, endYear]) => startYear === endYear ? `${startYear}` : `${startYear}-${endYear}`);
            const missingText = missingParts.length === 1
               ? missingParts[0]
               : `${missingParts.slice(0, -1).join(', ')} oraz ${missingParts[missingParts.length - 1]}`;
            const missingPrefix = missingParts.length === 1 && !missingParts[0].includes('-') ? 'W roku' : 'W latach';
            noteText += ` ${missingPrefix} ${missingText} poza rankingiem.`;
         }

         theSubjectNote.textContent = noteText;
      }
      if (theSubjectDetailsSelect && theSubjectDetailsSelect.value !== subjectName) {
        theSubjectDetailsSelect.value = subjectName;
      }
      if (theSubjectDetailsModal && !theSubjectDetailsModal.classList.contains('hidden')) {
        renderTheSubjectDetails();
      }

    };

    let theSubjectDetailsChart = null;

    const formatTheSubjectValue = (value) => typeof value === 'number'
      ? value.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
      : '—';

    const parseTheSubjectRank = (label) => {
      if (!label) return { raw: null, lower: null, upper: null, open: false };
      const normalized = String(label).trim().replace(/-/g, '–');
      const range = normalized.match(/^(\d+)–(\d+)$/);
      if (range) {
        return { raw: normalized, lower: Number(range[1]), upper: Number(range[2]), open: false };
      }
      const value = Number.parseInt(normalized, 10);
      if (!Number.isFinite(value)) return { raw: null, lower: null, upper: null, open: false };
      return { raw: normalized, lower: value, upper: value, open: normalized.endsWith('+') };
    };

    const getTheSubjectPositionSnapshots = (subjectName) => {
      const labels = theSubjectIndicatorData.subjects?.[subjectName]?.rankLabels || [];
      return theSubjectIndicatorData.years.map((year, index) => ({
        year,
        ...parseTheSubjectRank(labels[index])
      }));
    };

    const getTheSubjectMetricSnapshots = (subjectName, metricKey) => {
      const editions = theSubjectIndicatorData.subjects?.[subjectName]?.editions || {};
      return theSubjectIndicatorData.years.map((year) => {
        const edition = editions[String(year)];
        if (metricKey === 'overall') {
          const range = edition?.overall;
          const lower = Array.isArray(range) && typeof range[0] === 'number' ? range[0] : null;
          const upper = Array.isArray(range) && typeof range[1] === 'number' ? range[1] : lower;
          return {
            year,
            lower,
            upper,
            raw: typeof lower === 'number'
              ? (upper !== lower ? formatTheSubjectValue(lower) + '–' + formatTheSubjectValue(upper) : formatTheSubjectValue(lower))
              : null
          };
        }
        const value = edition?.[metricKey];
        return { year, value: typeof value === 'number' ? value : null };
      });
    };

    const updateTheSubjectMetricOptions = (subjectName) => {
      if (!theSubjectDetailsMetricSelect) return 'position';
      if (theSubjectDetailsMetricSelect.dataset.subject === subjectName && theSubjectDetailsMetricSelect.options.length) {
        return theSubjectDetailsMetricSelect.value;
      }
      const previous = theSubjectDetailsMetricSelect.value;
      const positionOption = document.createElement('option');
      positionOption.value = 'position';
      positionOption.textContent = 'Pozycja / pasmo pozycji';
      const resultGroup = document.createElement('optgroup');
      resultGroup.label = 'Opublikowane wyniki 0–100';
      theSubjectIndicatorData.metricOrder.forEach((key) => {
        const meta = theSubjectIndicatorData.metrics[key];
        if (!meta) return;
        const option = document.createElement('option');
        option.value = key;
        option.textContent = meta.label + ' (' + meta.sourceLabel + ')';
        resultGroup.append(option);
      });
      theSubjectDetailsMetricSelect.replaceChildren(positionOption, resultGroup);
      const available = new Set(['position', ...theSubjectIndicatorData.metricOrder]);
      theSubjectDetailsMetricSelect.value = available.has(previous) ? previous : 'position';
      theSubjectDetailsMetricSelect.dataset.subject = subjectName;
      return theSubjectDetailsMetricSelect.value;
    };

    const setTheSubjectDetailsStat = (index, label, value) => {
      if (theSubjectDetailsStatLabels[index]) theSubjectDetailsStatLabels[index].textContent = label;
      if (theSubjectDetailsStatValues[index]) theSubjectDetailsStatValues[index].textContent = value;
    };

    const createTheSubjectLegendItem = (label, color, dashed = false) => {
      const item = document.createElement('span');
      item.className = 'inline-flex items-center gap-2';
      const line = document.createElement('i');
      line.className = 'h-0.5 w-7';
      if (dashed) line.style.borderTop = '2px dashed ' + color;
      else line.style.backgroundColor = color;
      item.append(line, document.createTextNode(label));
      return item;
    };

    const createTheSubjectYearCard = (year, snapshot, mode) => {
      const isPosition = mode === 'position';
      const isOverall = mode === 'overall';
      const hasValue = isPosition || isOverall
        ? typeof snapshot.lower === 'number'
        : typeof snapshot.value === 'number';
      const card = document.createElement('article');
      card.className = 'rks-details-year' + (hasValue ? '' : ' missing');
      card.setAttribute('role', 'listitem');
      const yearLabel = document.createElement('div');
      yearLabel.className = 'year';
      yearLabel.textContent = year;
      const value = document.createElement('div');
      value.className = 'position';
      value.textContent = hasValue
        ? (isPosition || isOverall ? snapshot.raw : formatTheSubjectValue(snapshot.value))
        : '—';
      const valueLabel = document.createElement('span');
      valueLabel.className = 'position-label';
      const detail = document.createElement('span');
      detail.className = 'score';
      if (!hasValue) {
        valueLabel.textContent = 'brak wartości';
        detail.textContent = 'nie interpolujemy';
      } else if (isPosition) {
        valueLabel.textContent = snapshot.open ? 'otwarte pasmo' : (snapshot.upper !== snapshot.lower ? 'pasmo pozycji' : 'pozycja');
        detail.textContent = snapshot.open
          ? 'od pozycji ' + snapshot.lower
          : (snapshot.upper !== snapshot.lower ? (snapshot.upper - snapshot.lower + 1) + ' miejsc w paśmie' : 'wartość opublikowana');
      } else if (isOverall) {
        valueLabel.textContent = snapshot.upper !== snapshot.lower ? 'zakres Overall pasma' : 'wartość Overall pasma';
        detail.textContent = 'nie jest dokładnym wynikiem PW';
      } else {
        valueLabel.textContent = 'wynik filaru 0–100';
        detail.textContent = 'wartość opublikowana';
      }
      card.append(yearLabel, value, valueLabel, detail);
      return card;
    };

    const classifyTheSubjectPositionChange = (first, latest) => {
      if (!first || !latest) return 'brak porównania';
      if (latest.lower < first.lower) return 'awans';
      if (latest.lower > first.lower) return 'spadek';
      if (latest.raw === first.raw) return 'bez zmian';
      return 'zmienione pasmo';
    };

    renderTheSubjectDetails = () => {
      if (!theSubjectDetailsCanvas || !theSubjectDetailsSelect) return;
      const subjectName = theSubjectDetailsSelect.value || currentSubject || subjectNames[0];
      const subject = theSubjectIndicatorData.subjects?.[subjectName];
      if (!subject) return;
      const metricKey = updateTheSubjectMetricOptions(subjectName);
      const isPosition = metricKey === 'position';
      const isOverall = metricKey === 'overall';
      const metricMeta = theSubjectIndicatorData.metrics[metricKey];
      const metricLabel = isPosition ? 'Pozycja / pasmo pozycji' : metricMeta?.label || metricKey;
      const positionSnapshots = getTheSubjectPositionSnapshots(subjectName);
      const metricSnapshots = isPosition ? [] : getTheSubjectMetricSnapshots(subjectName, metricKey);

      if (isPosition) {
        const valid = positionSnapshots.filter(({ lower }) => typeof lower === 'number');
        const latest = valid.at(-1);
        const first = valid[0];
        const best = valid.reduce((current, entry) => {
          if (!current || entry.lower < current.lower) return entry;
          if (entry.lower === current.lower && !entry.open && (current.open || entry.upper < current.upper)) return entry;
          return current;
        }, null);
        setTheSubjectDetailsStat(0, 'Pozycja 2026', positionSnapshots.at(-1)?.raw || '—');
        setTheSubjectDetailsStat(1, 'Najlepsze pasmo', best?.raw || '—');
        setTheSubjectDetailsStat(2, first ? 'Zmiana od ' + first.year : 'Zmiana', classifyTheSubjectPositionChange(first, latest));
        setTheSubjectDetailsStat(3, 'Edycje z pozycją', valid.length + ' / ' + theSubjectIndicatorData.years.length);
        theSubjectDetailsYearCards?.replaceChildren(...positionSnapshots.map((snapshot) =>
          createTheSubjectYearCard(snapshot.year, snapshot, 'position')
        ));
        const missing = positionSnapshots.filter(({ lower }) => typeof lower !== 'number').map(({ year }) => year);
        if (theSubjectDetailsMetricContext) {
          theSubjectDetailsMetricContext.textContent = 'THE publikuje pozycje PW w pasmach, a znak „+” oznacza otwarty przedział od wskazanego miejsca.'
            + (missing.length ? ' Brak klasyfikacji: ' + missing.join(', ') + '.' : ' Pozycja jest dostępna we wszystkich siedmiu edycjach.');
        }
      } else if (isOverall) {
        const valid = metricSnapshots.filter(({ lower }) => typeof lower === 'number');
        const latest = valid.at(-1);
        const highestUpper = valid.length ? Math.max(...valid.map(({ upper }) => upper)) : null;
        const firstYear = valid[0]?.year;
        const lastYear = valid.at(-1)?.year;
        setTheSubjectDetailsStat(0, latest ? 'Overall ' + latest.year : 'Najnowsza wartość', latest?.raw || '—');
        setTheSubjectDetailsStat(1, 'Najwyższa granica pasma', formatTheSubjectValue(highestUpper));
        setTheSubjectDetailsStat(2, 'Zakres publikacji', firstYear ? (firstYear === lastYear ? String(firstYear) : firstYear + '–' + lastYear) : 'brak danych');
        setTheSubjectDetailsStat(3, 'Edycje z wartością', valid.length + ' / ' + theSubjectIndicatorData.years.length);
        theSubjectDetailsYearCards?.replaceChildren(...metricSnapshots.map((snapshot) =>
          createTheSubjectYearCard(snapshot.year, snapshot, 'overall')
        ));
        const available = valid.map(({ year }) => year);
        const missing = metricSnapshots.filter(({ lower }) => typeof lower !== 'number').map(({ year }) => year);
        if (theSubjectDetailsMetricContext) {
          theSubjectDetailsMetricContext.textContent = 'Overall jest wartością lub zakresem przypisanym przez THE do całego pasma pozycji, a nie dokładną punktacją PW. Dostępne edycje: '
            + (available.length ? available.join(', ') : 'brak') + '.'
            + (missing.length ? ' Brak wartości: ' + missing.join(', ') + '.' : '');
        }
      } else {
        const valid = metricSnapshots.filter(({ value }) => typeof value === 'number');
        const latest = valid.at(-1);
        const first = valid[0];
        const best = valid.length ? Math.max(...valid.map(({ value }) => value)) : null;
        const delta = first && latest && first !== latest ? latest.value - first.value : null;
        const deltaText = delta === null
          ? 'brak porównania'
          : Math.abs(delta) < 0.05
            ? 'bez zmian'
            : (delta > 0 ? '+' : '−') + formatTheSubjectValue(Math.abs(delta)) + ' pkt';
        setTheSubjectDetailsStat(0, latest ? 'Wynik ' + latest.year : 'Najnowszy wynik', formatTheSubjectValue(latest?.value));
        setTheSubjectDetailsStat(1, 'Najlepszy wynik', formatTheSubjectValue(best));
        setTheSubjectDetailsStat(2, valid.length > 1 && first ? 'Zmiana od ' + first.year : 'Zmiana w czasie', deltaText);
        setTheSubjectDetailsStat(3, 'Edycje z wynikiem', valid.length + ' / ' + theSubjectIndicatorData.years.length);
        theSubjectDetailsYearCards?.replaceChildren(...metricSnapshots.map((snapshot) =>
          createTheSubjectYearCard(snapshot.year, snapshot, 'metric')
        ));
        const available = valid.map(({ year }) => year);
        const missing = metricSnapshots.filter(({ value }) => typeof value !== 'number').map(({ year }) => year);
        if (theSubjectDetailsMetricContext) {
          theSubjectDetailsMetricContext.textContent = metricLabel + ' (' + metricMeta.sourceLabel + '). Opublikowane wartości PW: '
            + (available.length ? available.join(', ') : 'brak') + '.'
            + (missing.length ? ' Brak wartości: ' + missing.join(', ') + '.' : '')
            + ' Braków nie interpolujemy.';
        }
      }

      const hasHistoricalScores = Object.keys(subject.editions || {}).some((year) => Number(year) < 2024);
      theSubjectDetailsChangeNotice?.classList.toggle('hidden', isPosition || !hasHistoricalScores);
      const metricColor = isOverall ? '#059669' : '#0891b2';
      if (theSubjectDetailsChartTitle) {
        theSubjectDetailsChartTitle.textContent = subjectName + ' — ' + (isPosition ? 'pozycja' : metricLabel) + ' 2020–2026';
      }
      if (theSubjectDetailsChartNote) {
        theSubjectDetailsChartNote.textContent = isPosition
          ? 'Niższa wartość oznacza lepszą pozycję; wypełnienie pokazuje opublikowane pasmo.'
          : isOverall
            ? 'Wartości Overall dotyczą pasma pozycji. Przerwa na wykresie oznacza brak opublikowanej wartości.'
            : 'Wynik filaru 0–100; wyższa wartość oznacza lepszy rezultat. Przerw nie interpolujemy.';
      }
      if (theSubjectDetailsLegend) {
        theSubjectDetailsLegend.replaceChildren(...(isPosition
          ? [
            createTheSubjectLegendItem('Początek pasma', '#0e7490'),
            createTheSubjectLegendItem('Koniec pasma', '#67e8f9', true)
          ]
          : isOverall
            ? [
              createTheSubjectLegendItem('Dolna granica Overall', '#059669'),
              createTheSubjectLegendItem('Górna granica Overall', '#6ee7b7', true)
            ]
            : [createTheSubjectLegendItem(metricLabel + ' 0–100', metricColor)]));
      }
      theSubjectDetailsCanvas.setAttribute('aria-label', subjectName + ': ' + metricLabel + ' w THE World University Rankings by Subject 2020–2026');

      if (!theSubjectDetailsChart) {
        theSubjectDetailsChart = new Chart(theSubjectDetailsCanvas, {
          type: 'line',
          data: { labels: theSubjectIndicatorData.years, datasets: [] },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const mode = theSubjectDetailsChart.$mode;
                    if (mode === 'position' || mode === 'overall') {
                      if (context.datasetIndex !== 0) return null;
                      const snapshot = theSubjectDetailsChart.$snapshots?.[context.dataIndex];
                      if (mode === 'position') return snapshot?.raw ? 'Pozycja: ' + snapshot.raw : 'Brak danych';
                      return snapshot?.raw ? 'Overall pasma: ' + snapshot.raw : 'Brak wartości';
                    }
                    return typeof context.parsed.y === 'number'
                      ? theSubjectDetailsChart.$metricLabel + ': ' + formatTheSubjectValue(context.parsed.y)
                      : 'Brak wartości';
                  }
                }
              }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#475569', font: { weight: '600' } } },
              y: {
                grid: { color: 'rgba(148,163,184,0.2)' },
                ticks: { color: '#475569' },
                title: { display: true, text: '' }
              }
            }
          }
        });
      }

      const yAxis = theSubjectDetailsChart.options.scales.y;
      delete yAxis.min;
      delete yAxis.max;
      delete yAxis.suggestedMin;
      delete yAxis.suggestedMax;
      theSubjectDetailsChart.data.labels = theSubjectIndicatorData.years;
      theSubjectDetailsChart.$mode = isPosition ? 'position' : (isOverall ? 'overall' : 'metric');
      theSubjectDetailsChart.$metricLabel = metricLabel;

      if (isPosition) {
        const lower = positionSnapshots.map(({ lower: value }) => value);
        const upper = positionSnapshots.map(({ upper: value }) => value);
        theSubjectDetailsChart.$snapshots = positionSnapshots;
        theSubjectDetailsChart.data.datasets = [
          {
            label: 'Początek pasma', data: lower, borderColor: '#0e7490', backgroundColor: 'rgba(14,116,144,0.14)',
            fill: '+1', pointBackgroundColor: '#0e7490', pointBorderColor: '#fff', pointBorderWidth: 2,
            pointRadius: 4, pointHoverRadius: 6, borderWidth: 2.5, tension: 0.2, spanGaps: false
          },
          {
            label: 'Koniec pasma', data: upper, borderColor: 'rgba(14,116,144,0.5)', backgroundColor: 'transparent',
            fill: false, pointBackgroundColor: '#67e8f9', pointBorderColor: '#fff', pointBorderWidth: 2,
            pointRadius: 4, pointHoverRadius: 6, borderWidth: 2, borderDash: [6, 4], tension: 0.2, spanGaps: false
          }
        ];
        const values = lower.concat(upper).filter((value) => typeof value === 'number');
        const min = values.length ? Math.min(...values) : 1;
        const max = values.length ? Math.max(...values) : 1250;
        const padding = Math.max(Math.ceil((max - min) * 0.1), 25);
        yAxis.reverse = true;
        yAxis.suggestedMin = Math.max(1, min - padding);
        yAxis.suggestedMax = max + padding;
        yAxis.ticks.stepSize = undefined;
        yAxis.ticks.callback = (value) => Math.round(value);
        yAxis.title.text = 'Pozycja (niższa wartość = lepiej)';
      } else if (isOverall) {
        const lower = metricSnapshots.map(({ lower: value }) => value);
        const upper = metricSnapshots.map(({ upper: value }) => value);
        theSubjectDetailsChart.$snapshots = metricSnapshots;
        theSubjectDetailsChart.data.datasets = [
          {
            label: 'Dolna granica Overall', data: lower, borderColor: '#059669', backgroundColor: 'rgba(5,150,105,0.14)',
            fill: '+1', pointBackgroundColor: '#059669', pointBorderColor: '#fff', pointBorderWidth: 2,
            pointRadius: 4, pointHoverRadius: 6, borderWidth: 2.5, tension: 0.2, spanGaps: false, clip: 8
          },
          {
            label: 'Górna granica Overall', data: upper, borderColor: 'rgba(5,150,105,0.55)', backgroundColor: 'transparent',
            fill: false, pointBackgroundColor: '#6ee7b7', pointBorderColor: '#fff', pointBorderWidth: 2,
            pointRadius: 4, pointHoverRadius: 6, borderWidth: 2, borderDash: [6, 4], tension: 0.2, spanGaps: false, clip: 8
          }
        ];
        yAxis.reverse = false;
        yAxis.min = 0;
        yAxis.max = 105;
        yAxis.ticks.stepSize = 10;
        yAxis.ticks.callback = (value) => value > 100 ? '' : Number(value).toLocaleString('pl-PL');
        yAxis.title.text = 'Overall pasma (0–100)';
      } else {
        theSubjectDetailsChart.$snapshots = metricSnapshots;
        theSubjectDetailsChart.data.datasets = [{
          label: metricLabel,
          data: metricSnapshots.map(({ value }) => value),
          borderColor: metricColor,
          backgroundColor: 'rgba(8,145,178,0.12)',
          pointBackgroundColor: metricColor,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2.5,
          tension: 0.2,
          spanGaps: false,
          clip: 8,
          fill: false
        }];
        yAxis.reverse = false;
        yAxis.min = 0;
        yAxis.max = 105;
        yAxis.ticks.stepSize = 10;
        yAxis.ticks.callback = (value) => value > 100 ? '' : Number(value).toLocaleString('pl-PL');
        yAxis.title.text = 'Wynik filaru (0–100)';
      }
      theSubjectDetailsChart.update();
      theSubjectDetailsChart.resize();
    };
    if (currentSubject) {
      updateTHESubjectChart(currentSubject);
    }

    theSubjectSelect.addEventListener('change', (event) => {
      currentSubject = event.target.value;
      updateTHESubjectChart(currentSubject);
    });
    theSubjectDetailsSelect?.addEventListener('change', (event) => {
      currentSubject = event.target.value;
      theSubjectSelect.value = currentSubject;
      updateTHESubjectChart(currentSubject);
    });
    theSubjectDetailsMetricSelect?.addEventListener('change', renderTheSubjectDetails);
    theSubjectDetailsMethodologyOpen?.addEventListener('click', () => {
      closeInternationalMethodology(theSubjectDetailsModal, false);
      requestAnimationFrame(() => theSubjectMethodologyOpenButton?.click());
    });
  }

  const grasCanvas = document.getElementById('chartGRAS');
  const grasSelect = document.getElementById('grasSubjectSelect');
  const grasNote = document.getElementById('grasSubjectNote');

  if (grasCanvas && grasSelect && grasSubjectData && grasSubjectData.subjects) {
    const subjectNames = Object.keys(grasSubjectData.subjects).sort((a, b) => a.localeCompare(b, 'pl-PL'));

    const grasSubjectOptions = subjectNames
      .map((subject) => `<option value="${subject}">${subject}</option>`)
      .join('');
    grasSelect.innerHTML = grasSubjectOptions;
    if (grasDetailsSubjectSelect) grasDetailsSubjectSelect.innerHTML = grasSubjectOptions;

    let currentSubject = grasSelect.value || subjectNames[0] || null;
    if (!grasSelect.value && currentSubject) {
      grasSelect.value = currentSubject;
    }

    const grasChart = new Chart(grasCanvas, {
      type: 'line',
      data: {
        labels: grasSubjectData.years,
        datasets: [
          {
            label: 'Najlepsza pozycja w przedziale',
            data: [],
            borderColor: 'rgb(220,38,38)',
            backgroundColor: 'rgba(220,38,38,0.12)',
            fill: '+1',
            tension: 0.25,
            pointRadius: 3,
            spanGaps: false,
            borderWidth: 2
          },
          {
            label: 'Najsłabsza pozycja w przedziale',
            data: [],
            borderColor: 'rgba(220,38,38,0.45)',
            backgroundColor: 'rgba(220,38,38,0.05)',
            fill: false,
            tension: 0.25,
            pointRadius: 3,
            spanGaps: false,
            borderDash: [6, 4],
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: false,
      maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            display: true,
            labels: {
              usePointStyle: true,
              pointStyle: 'line',
              boxHeight: 2
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                if (context.datasetIndex !== 0) {
                  return null;
                }
                const chartRef = context.chart;
                const lowerValue = chartRef.data.datasets[0].data[context.dataIndex];
                const upperValue = chartRef.data.datasets[1].data[context.dataIndex];

                if (typeof lowerValue !== 'number') return 'Brak danych';

                if (typeof upperValue === 'number' && upperValue !== lowerValue) {
                  return `Pozycja: ${lowerValue}-${upperValue}`;
                }
                return `Pozycja: ${lowerValue}`;
              }
            }
          }
        },
        scales: {
          y: {
            reverse: true,
            suggestedMin: 600,
            suggestedMax: 50,
            ticks: {
              callback: (value) => (typeof value === 'number' ? Math.round(value) : value)
            },
            grid: { color: 'rgba(17,24,39,0.08)' },
            title: { display: true, text: 'Pozycja (wyżej = lepiej)' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });

    const updateGRASChart = (subjectName) => {
      const subjectData = grasSubjectData.subjects[subjectName];
      if (!subjectData) return;

      const lowerSeries = Array.isArray(subjectData.lower) ? subjectData.lower.slice() : [];
      const upperSeries = Array.isArray(subjectData.upper) ? subjectData.upper.slice() : [];
      const combinedValues = lowerSeries.concat(upperSeries).filter((value) => typeof value === 'number');

      const fallbackValues = combinedValues.length ? combinedValues : [500];
      const maxValue = Math.max(...fallbackValues);
      const minValue = Math.min(...fallbackValues);
      const padding = 20;

      grasChart.data.labels = grasSubjectData.years;
      grasChart.data.datasets[0].data = lowerSeries;
      grasChart.data.datasets[1].data = upperSeries;

      const yAxis = grasChart.options.scales.y;
      yAxis.suggestedMin = maxValue + padding;
      yAxis.suggestedMax = Math.max(minValue - padding, 1);

      grasChart.update();

      if (grasNote) {
         let noteText = `Pozycja PW w dyscyplinie ${subjectName}.`;
         for (let idx = grasSubjectData.years.length - 1; idx >= 0; idx -= 1) {
            const val = lowerSeries[idx];
            if (typeof val === 'number') {
               const uVal = upperSeries[idx];
               const year = grasSubjectData.years[idx];
               let rangeTxt = `${val}`;
               if (uVal && uVal !== val) rangeTxt = `${val}-${uVal}`;

               noteText = `GRAS ${year}: miejsce ${rangeTxt} dla ${subjectName}.`;
               break;
            }
         }

         const missingYearRanges = [];
         let missingRangeStart = null;
         let previousMissingYear = null;

         grasSubjectData.years.forEach((year, idx) => {
            if (typeof lowerSeries[idx] !== 'number') {
               if (missingRangeStart === null) {
                  missingRangeStart = year;
               }
               previousMissingYear = year;
            } else if (missingRangeStart !== null) {
               missingYearRanges.push([missingRangeStart, previousMissingYear]);
               missingRangeStart = null;
               previousMissingYear = null;
            }
         });

         if (missingRangeStart !== null) {
            missingYearRanges.push([missingRangeStart, previousMissingYear]);
         }

         if (missingYearRanges.length) {
            const missingParts = missingYearRanges
               .map(([startYear, endYear]) => startYear === endYear ? `${startYear}` : `${startYear}-${endYear}`);
            const missingText = missingParts.length === 1
               ? missingParts[0]
               : `${missingParts.slice(0, -1).join(', ')} oraz ${missingParts[missingParts.length - 1]}`;
            const missingPrefix = missingParts.length === 1 && !missingParts[0].includes('-') ? 'W roku' : 'W latach';
            noteText += ` ${missingPrefix} ${missingText} poza rankingiem.`;
         }

         grasNote.textContent = noteText;
      }
      if (grasDetailsSubjectSelect && grasDetailsSubjectSelect.value !== subjectName) {
        grasDetailsSubjectSelect.value = subjectName;
      }
      if (grasDetailsModal && !grasDetailsModal.classList.contains('hidden')) {
        renderGrasDetails();
      }
    };

    let grasDetailsChart;
    const formatGrasDetailsBand = (lower, upper) => {
      if (typeof lower !== 'number') return '—';
      return typeof upper === 'number' && upper !== lower ? lower + '–' + upper : String(lower);
    };

    const createGrasDetailsYearCard = (year, lower, upper) => {
      const hasPosition = typeof lower === 'number';
      const card = document.createElement('article');
      card.className = 'rks-details-year' + (hasPosition ? '' : ' missing');
      card.setAttribute('role', 'listitem');
      const yearLabel = document.createElement('div');
      yearLabel.className = 'year';
      yearLabel.textContent = year;
      const position = document.createElement('div');
      position.className = 'position';
      position.textContent = formatGrasDetailsBand(lower, upper);
      const positionLabel = document.createElement('span');
      positionLabel.className = 'position-label';
      positionLabel.textContent = hasPosition ? 'pozycja światowa' : 'poza listą';
      const range = document.createElement('span');
      range.className = 'score';
      range.textContent = hasPosition && typeof upper === 'number' && upper !== lower
        ? (upper - lower + 1) + ' miejsc w przedziale'
        : (hasPosition ? 'pozycja dokładna' : 'brak opublikowanej pozycji');
      card.append(yearLabel, position, positionLabel, range);
      return card;
    };

    renderGrasDetails = () => {
      if (!grasDetailsCanvas || !grasDetailsSubjectSelect) return;
      const subjectName = grasDetailsSubjectSelect.value || currentSubject || subjectNames[0];
      const data = grasSubjectData.subjects[subjectName];
      if (!data) return;

      const lowerSeries = Array.isArray(data.lower) ? data.lower.slice() : [];
      const upperSeries = Array.isArray(data.upper) ? data.upper.slice() : [];
      const latestIndex = grasSubjectData.years.length - 1;
      const validIndices = grasSubjectData.years
        .map((year, index) => index)
        .filter((index) => typeof lowerSeries[index] === 'number');
      const lastListedIndex = validIndices.length ? validIndices[validIndices.length - 1] : null;
      const bestIndex = validIndices.reduce((best, index) => {
        if (best === null) return index;
        if (lowerSeries[index] < lowerSeries[best]) return index;
        if (lowerSeries[index] === lowerSeries[best] && upperSeries[index] < upperSeries[best]) return index;
        return best;
      }, null);
      const bestBand = bestIndex === null ? '—' : formatGrasDetailsBand(lowerSeries[bestIndex], upperSeries[bestIndex]);
      const bestYears = bestIndex === null
        ? []
        : grasSubjectData.years.filter((year, index) => lowerSeries[index] === lowerSeries[bestIndex] && upperSeries[index] === upperSeries[bestIndex]);
      const latestBand = formatGrasDetailsBand(lowerSeries[latestIndex], upperSeries[latestIndex]);
      const lastListedBand = lastListedIndex === null ? '—' : formatGrasDetailsBand(lowerSeries[lastListedIndex], upperSeries[lastListedIndex]);

      if (grasDetailsLatestPosition) grasDetailsLatestPosition.textContent = latestBand === '—' ? 'poza listą' : latestBand;
      if (grasDetailsLastListed) grasDetailsLastListed.textContent = lastListedIndex === null ? '—' : grasSubjectData.years[lastListedIndex] + ' · ' + lastListedBand;
      if (grasDetailsBestPosition) grasDetailsBestPosition.textContent = bestBand;
      if (grasDetailsCoverage) grasDetailsCoverage.textContent = validIndices.length + ' / ' + grasSubjectData.years.length;
      grasDetailsYearCards?.replaceChildren(...grasSubjectData.years.map((year, index) =>
        createGrasDetailsYearCard(year, lowerSeries[index], upperSeries[index])));
      grasDetailsMissingNotice?.classList.toggle('hidden', typeof lowerSeries[latestIndex] === 'number');

      const missingYears = grasSubjectData.years.filter((year, index) => typeof lowerSeries[index] !== 'number');
      if (grasDetailsChartTitle) grasDetailsChartTitle.textContent = subjectName + ' — pozycja 2020–2025';
      if (grasDetailsChartNote) {
        grasDetailsChartNote.textContent = 'Najlepszy opublikowany wynik: ' + bestBand
          + (bestYears.length ? ' (' + bestYears.join(', ') + ')' : '') + '.'
          + (lastListedIndex === null ? ' Brak opublikowanych pozycji.' : ' Ostatnia obecność: ' + grasSubjectData.years[lastListedIndex] + ', ' + lastListedBand + '.')
          + (missingYears.length ? ' Poza listą w edycjach: ' + missingYears.join(', ') + '.' : ' Wynik dostępny we wszystkich sześciu edycjach.');
      }
      grasDetailsCanvas.setAttribute('aria-label', subjectName + ': przedział pozycji PW w GRAS 2020–2025');

      if (!grasDetailsChart) {
        grasDetailsChart = new Chart(grasDetailsCanvas, {
          type: 'line',
          data: { labels: grasSubjectData.years, datasets: [] },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    if (context.datasetIndex !== 0) return null;
                    const lower = grasDetailsChart.$lowerSeries?.[context.dataIndex];
                    const upper = grasDetailsChart.$upperSeries?.[context.dataIndex];
                    return typeof lower === 'number' ? 'Pozycja: ' + formatGrasDetailsBand(lower, upper) : 'Brak pozycji';
                  }
                }
              }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#475569', font: { weight: '600' } } },
              y: {
                reverse: true,
                grid: { color: 'rgba(148,163,184,0.2)' },
                ticks: { color: '#475569', callback: (value) => Math.round(value) },
                title: { display: true, text: 'Pozycja (niższa wartość = lepiej)' }
              }
            }
          }
        });
      }

      grasDetailsChart.data.labels = grasSubjectData.years;
      grasDetailsChart.$lowerSeries = lowerSeries;
      grasDetailsChart.$upperSeries = upperSeries;
      grasDetailsChart.data.datasets = [
        {
          label: 'Początek przedziału', data: lowerSeries, borderColor: '#e11d48',
          backgroundColor: 'rgba(225,29,72,0.13)', fill: '+1', pointBackgroundColor: '#e11d48',
          pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6,
          borderWidth: 2.5, tension: 0.2, spanGaps: false
        },
        {
          label: 'Koniec przedziału', data: upperSeries, borderColor: 'rgba(225,29,72,0.5)',
          backgroundColor: 'transparent', fill: false, pointBackgroundColor: '#fda4af',
          pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6,
          borderWidth: 2, borderDash: [6, 4], tension: 0.2, spanGaps: false
        }
      ];
      const numericValues = lowerSeries.concat(upperSeries).filter((value) => typeof value === 'number');
      const minValue = numericValues.length ? Math.min(...numericValues) : 1;
      const maxValue = numericValues.length ? Math.max(...numericValues) : 500;
      const padding = Math.max(Math.ceil((maxValue - minValue) * 0.1), 20);
      const yAxis = grasDetailsChart.options.scales.y;
      yAxis.suggestedMin = Math.max(1, minValue - padding);
      yAxis.suggestedMax = maxValue + padding;
      grasDetailsChart.update();
      grasDetailsChart.resize();
    };

    if (currentSubject) {
      updateGRASChart(currentSubject);
    }

    grasSelect.addEventListener('change', (event) => {
      currentSubject = event.target.value;
      updateGRASChart(currentSubject);
    });
    grasDetailsSubjectSelect?.addEventListener('change', (event) => {
      currentSubject = event.target.value;
      grasSelect.value = currentSubject;
      updateGRASChart(currentSubject);
    });
    grasDetailsMethodologyOpen?.addEventListener('click', () => {
      closeInternationalMethodology(grasDetailsModal, false);
      requestAnimationFrame(() => grasMethodologyOpenButton?.click());
    });
  }

  const engiSubjectCanvas = document.getElementById('chartEngiSubject');
  const engiSubjectSelect = document.getElementById('engiSubjectSelect');
  const engiSubjectNote = document.getElementById('engiSubjectNote');
  const engiSubjectToggle = document.getElementById('engiSubjectToggle');
  let engiSubjectChart;
  let engiSubjectMode = 'position';

  if (engiSubjectCanvas && engiSubjectSelect && engiSubjectData) {
    const engiSubjectYears = Array.isArray(engiSubjectData.years) ? engiSubjectData.years.slice() : [];
    const subjectNames = Object.keys(engiSubjectData.subjects).sort((a, b) => a.localeCompare(b, 'pl-PL'));
    const subjectOptions = subjectNames.map((subject) => `<option value="${subject}">${subject}</option>`).join('');
    engiSubjectSelect.innerHTML = subjectOptions;
    if (engiSubjectDetailsSelect) engiSubjectDetailsSelect.innerHTML = subjectOptions;

    const defaultSubject = subjectNames[0];
    let currentEngiSubject = defaultSubject;
    let engiSubjectDetailsMode = 'position';
    let engiSubjectDetailsChart = null;
    const engiSubjectIndicatorData = window.EngiRankSubjectIndicatorData || {
      years: engiSubjectYears,
      metricOrder: [],
      metrics: {},
      subjects: {}
    };
    if (defaultSubject) {
      engiSubjectSelect.value = defaultSubject;
      if (engiSubjectDetailsSelect) engiSubjectDetailsSelect.value = defaultSubject;
    }

    const formatEngiScore = (value) => typeof value === 'number'
      ? value.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 2 })
      : '—';

    engiSubjectChart = new Chart(engiSubjectCanvas, {
      type: 'line',
      data: {
        labels: engiSubjectYears,
        datasets: [{
          label: '',
          data: [],
          borderColor: 'rgb(79,70,229)',
          backgroundColor: 'rgba(79,70,229,0.12)',
          tension: 0.25,
          pointRadius: 3,
          spanGaps: true,
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => {
                const value = context.parsed.y;
                if (engiSubjectMode === 'score') return typeof value === 'number' ? `Punktacja: ${formatEngiScore(value)}` : 'Brak danych';
                const rawValue = engiSubjectChart.$rawSeries?.[context.dataIndex];
                return rawValue == null ? 'Brak danych' : `Pozycja: ${rawValue}`;
              }
            }
          }
        },
        scales: {
          y: {
            reverse: true,
            suggestedMin: 1,
            suggestedMax: 150,
            ticks: { callback: (value) => Math.round(value) },
            grid: { color: 'rgba(17,24,39,0.08)' },
            title: { display: true, text: 'Pozycja (im wyżej, tym lepiej)' }
          },
          x: { grid: { display: false } }
        }
      }
    });

    const updateEngiSubjectChart = (subjectName) => {
      const data = engiSubjectData.subjects[subjectName];
      if (!data) return;
      currentEngiSubject = subjectName;
      if (engiSubjectSelect.value !== subjectName) engiSubjectSelect.value = subjectName;
      if (engiSubjectDetailsSelect && engiSubjectDetailsSelect.value !== subjectName) engiSubjectDetailsSelect.value = subjectName;

      const dataset = engiSubjectChart.data.datasets[0];
      const yAxis = engiSubjectChart.options.scales.y;
      const values = engiSubjectMode === 'score' ? data.score : data.lower;
      const validValues = values.filter((value) => typeof value === 'number');
      dataset.data = values;
      engiSubjectChart.$rawSeries = data.raw;

      if (engiSubjectMode === 'score') {
        dataset.label = 'Punktacja 0–100';
        dataset.borderColor = '#059669';
        dataset.backgroundColor = 'rgba(5,150,105,0.14)';
        yAxis.reverse = false;
        yAxis.title.text = 'Punktacja (im wyższa, tym lepiej)';
      } else {
        dataset.label = 'Pozycja';
        dataset.borderColor = '#4f46e5';
        dataset.backgroundColor = 'rgba(79,70,229,0.12)';
        yAxis.reverse = true;
        yAxis.title.text = 'Pozycja (im wyżej, tym lepiej)';
      }

      if (validValues.length) {
        const minValue = Math.min(...validValues);
        const maxValue = Math.max(...validValues);
        const padding = Math.max((maxValue - minValue) * 0.2, engiSubjectMode === 'score' ? 4 : 5);
        yAxis.suggestedMin = Math.max(engiSubjectMode === 'score' ? 0 : 1, minValue - padding);
        yAxis.suggestedMax = Math.min(engiSubjectMode === 'score' ? 100 : Infinity, maxValue + padding);
      }

      updateSegmentedToggle(engiSubjectToggle, engiSubjectMode === 'score' ? 'score' : 'position');
      engiSubjectChart.update();

      if (engiSubjectNote && data.raw?.length) {
        const lastIndex = data.raw.length - 1;
        engiSubjectNote.textContent = `EngiRank ${engiSubjectYears[lastIndex]}: ${subjectName} — miejsce ${data.raw[lastIndex]} (pkt ${formatEngiScore(data.score[lastIndex])}).`;
      }
      if (engiSubjectDetailsModal && !engiSubjectDetailsModal.classList.contains('hidden')) renderEngiSubjectDetails();
    };

    const metricLabelForEngiSubject = (subject, metricKey) => (
      metricKey === 'sdg' && subject?.sdgLabel
        ? subject.sdgLabel
        : (engiSubjectIndicatorData.metrics?.[metricKey] || metricKey)
    );

    const updateEngiSubjectMetricOptions = (subjectName) => {
      if (!engiSubjectDetailsMetricSelect) return 'overall';
      if (engiSubjectDetailsMetricSelect.dataset.subject === subjectName && engiSubjectDetailsMetricSelect.options.length) {
        return engiSubjectDetailsMetricSelect.value;
      }
      const subject = engiSubjectIndicatorData.subjects?.[subjectName];
      const previous = engiSubjectDetailsMetricSelect.dataset.subject
        ? engiSubjectDetailsMetricSelect.value
        : 'overall';
      const metricKeys = (engiSubjectIndicatorData.metricOrder || []).filter((key) =>
        Object.values(subject?.editions || {}).some((edition) => edition.metrics?.[key])
      );
      const overallOption = document.createElement('option');
      overallOption.value = 'overall';
      overallOption.textContent = 'Wynik ogólny (pozycja / wynik)';
      const indicatorGroup = document.createElement('optgroup');
      indicatorGroup.label = 'Wskaźniki dyscypliny (0–100)';
      metricKeys.forEach((key) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = metricLabelForEngiSubject(subject, key);
        indicatorGroup.append(option);
      });
      engiSubjectDetailsMetricSelect.replaceChildren(overallOption, indicatorGroup);
      engiSubjectDetailsMetricSelect.value = metricKeys.includes(previous)
        ? previous
        : (previous === 'overall' ? 'overall' : (metricKeys[0] || 'overall'));
      engiSubjectDetailsMetricSelect.dataset.subject = subjectName;
      return engiSubjectDetailsMetricSelect.value;
    };

    const createEngiSubjectYearCard = (year, rawPosition, score) => {
      const hasPosition = typeof rawPosition === 'string' || typeof rawPosition === 'number';
      const card = document.createElement('article');
      card.className = 'rks-details-year' + (hasPosition ? '' : ' missing');
      card.setAttribute('role', 'listitem');
      const yearLabel = document.createElement('div');
      yearLabel.className = 'year';
      yearLabel.textContent = year;
      const position = document.createElement('div');
      position.className = 'position';
      position.textContent = hasPosition ? rawPosition : '—';
      const positionLabel = document.createElement('span');
      positionLabel.className = 'position-label';
      positionLabel.textContent = hasPosition ? 'pozycja' : 'brak danych';
      const scoreLabel = document.createElement('span');
      scoreLabel.className = 'score';
      scoreLabel.textContent = typeof score === 'number' ? formatEngiScore(score) + ' pkt' : 'brak wyniku';
      card.append(yearLabel, position, positionLabel, scoreLabel);
      return card;
    };

    const createEngiSubjectIndicatorYearCard = (year, snapshot) => {
      const hasValue = typeof snapshot.value === 'number';
      const card = document.createElement('article');
      card.className = 'rks-details-year' + (hasValue ? '' : ' missing');
      card.setAttribute('role', 'listitem');
      const yearLabel = document.createElement('div');
      yearLabel.className = 'year';
      yearLabel.textContent = year;
      const value = document.createElement('div');
      value.className = 'position';
      value.textContent = hasValue ? formatEngiScore(snapshot.value) : '—';
      const valueLabel = document.createElement('span');
      valueLabel.className = 'position-label';
      valueLabel.textContent = hasValue ? 'wynik 0–100' : 'wskaźnik nie występował';
      const weight = document.createElement('span');
      weight.className = 'score';
      weight.textContent = typeof snapshot.weight === 'number' ? 'waga ' + snapshot.weight + '%' : '—';
      card.append(yearLabel, value, valueLabel, weight);
      return card;
    };

    const setEngiSubjectDetailsStat = (index, label, value) => {
      if (engiSubjectDetailsStatLabels[index]) engiSubjectDetailsStatLabels[index].textContent = label;
      const values = [
        engiSubjectDetailsLatestPosition,
        engiSubjectDetailsLatestScore,
        engiSubjectDetailsBestPosition,
        engiSubjectDetailsTop100
      ];
      if (values[index]) values[index].textContent = value;
    };

    renderEngiSubjectDetails = () => {
      if (!engiSubjectDetailsCanvas || !engiSubjectDetailsSelect) return;
      const subjectName = engiSubjectDetailsSelect.value || currentEngiSubject || defaultSubject;
      const fallbackData = engiSubjectData.subjects[subjectName];
      const officialSubject = engiSubjectIndicatorData.subjects?.[subjectName];
      if (!fallbackData || !officialSubject) return;

      const metricKey = updateEngiSubjectMetricOptions(subjectName);
      const isIndicator = metricKey !== 'overall';
      const metricLabel = metricLabelForEngiSubject(officialSubject, metricKey);
      const editions = officialSubject.editions || {};
      const rawSeries = engiSubjectYears.map((year, index) => editions[String(year)]?.rank ?? fallbackData.raw?.[index] ?? null);
      const positionSeries = rawSeries.map((value, index) => {
        const parsed = Number.parseInt(value, 10);
        return Number.isFinite(parsed) ? parsed : (fallbackData.lower?.[index] ?? null);
      });
      const scoreSeries = engiSubjectYears.map((year, index) => editions[String(year)]?.score ?? fallbackData.score?.[index] ?? null);
      const snapshots = isIndicator
        ? engiSubjectYears.map((year) => {
          const metric = editions[String(year)]?.metrics?.[metricKey];
          return {
            value: typeof metric?.value === 'number' ? metric.value : null,
            weight: typeof metric?.weight === 'number' ? metric.weight : null
          };
        })
        : [];
      const latestIndex = engiSubjectYears.length - 1;

      engiSubjectDetailsViewControl?.classList.toggle('hidden', isIndicator);
      engiSubjectDetailsModeButtons.forEach((button) => {
        button.setAttribute('aria-pressed', (button.dataset.engiDetailsMode === engiSubjectDetailsMode).toString());
      });

      if (isIndicator) {
        const numericEntries = snapshots
          .map((snapshot, index) => ({ ...snapshot, index }))
          .filter(({ value }) => typeof value === 'number');
        const latest = numericEntries.at(-1);
        const best = numericEntries.length ? Math.max(...numericEntries.map(({ value }) => value)) : null;
        const weights = [...new Set(numericEntries.map(({ weight }) => weight).filter((weight) => typeof weight === 'number'))];
        setEngiSubjectDetailsStat(0, latest ? 'Wynik ' + engiSubjectYears[latest.index] : 'Najnowszy wynik', formatEngiScore(latest?.value));
        setEngiSubjectDetailsStat(1, 'Waga wskaźnika', weights.length === 1 ? weights[0] + '%' : '—');
        setEngiSubjectDetailsStat(2, 'Najlepszy wynik', formatEngiScore(best));
        setEngiSubjectDetailsStat(3, 'Edycje z wynikiem', numericEntries.length + ' / ' + engiSubjectYears.length);
        engiSubjectDetailsYearCards?.replaceChildren(...engiSubjectYears.map((year, index) =>
          createEngiSubjectIndicatorYearCard(year, snapshots[index])
        ));
        if (engiSubjectDetailsMetricContext) {
          const availableYears = numericEntries.map(({ index }) => engiSubjectYears[index]).join(', ');
          engiSubjectDetailsMetricContext.textContent = metricLabel + '. Dostępne wyniki PW: ' + availableYears
            + '. Wartości są normalizowane w skali 0–100 względem najlepszego wyniku w danym wskaźniku i edycji.';
        }
      } else {
        const numericPositions = positionSeries.filter((value) => typeof value === 'number');
        const bestPosition = numericPositions.length ? Math.min(...numericPositions) : null;
        const top100Count = numericPositions.filter((value) => value <= 100).length;
        setEngiSubjectDetailsStat(0, 'Pozycja 2025', rawSeries[latestIndex] ?? '—');
        setEngiSubjectDetailsStat(1, 'Wynik ogólny 2025', formatEngiScore(scoreSeries[latestIndex]));
        setEngiSubjectDetailsStat(2, 'Najlepsza pozycja', bestPosition === null ? '—' : (rawSeries[positionSeries.indexOf(bestPosition)] || bestPosition + '.'));
        setEngiSubjectDetailsStat(3, 'Edycje w TOP 100', top100Count + ' / ' + engiSubjectYears.length);
        engiSubjectDetailsYearCards?.replaceChildren(...engiSubjectYears.map((year, index) =>
          createEngiSubjectYearCard(year, rawSeries[index], scoreSeries[index])
        ));
        if (engiSubjectDetailsMetricContext) {
          engiSubjectDetailsMetricContext.textContent = 'Oficjalny wynik ogólny łączy znormalizowane wyniki wskaźników z wagami właściwymi dla dyscypliny. Znak „=” przy pozycji oznacza miejsce ex aequo.';
        }
      }

      const isScore = !isIndicator && engiSubjectDetailsMode === 'score';
      const chartColor = isIndicator ? '#0891b2' : (isScore ? '#059669' : '#4f46e5');
      const chartSeries = isIndicator ? snapshots.map(({ value }) => value) : (isScore ? scoreSeries : positionSeries);
      const numericPositions = positionSeries.filter((value) => typeof value === 'number');
      const bestPosition = numericPositions.length ? Math.min(...numericPositions) : null;
      const bestYears = bestPosition === null ? [] : engiSubjectYears.filter((year, index) => positionSeries[index] === bestPosition);

      if (engiSubjectDetailsChartTitle) {
        engiSubjectDetailsChartTitle.textContent = subjectName + ' — '
          + (isIndicator ? metricLabel : (isScore ? 'wynik ogólny' : 'pozycja')) + ' 2023–2025';
      }
      if (engiSubjectDetailsChartNote) {
        engiSubjectDetailsChartNote.textContent = isIndicator
          ? 'Wynik wskaźnika w skali 0–100. Brak punktu oznacza, że wskaźnik nie występował w modelu danej dyscypliny.'
          : (isScore
            ? 'Oficjalny Overall score EngiRank w skali 0–100; wyższa wartość oznacza lepszy wynik.'
            : 'Najlepsza pozycja: ' + (bestPosition === null ? '—' : (rawSeries[positionSeries.indexOf(bestPosition)] || bestPosition + '.'))
              + (bestYears.length ? ' (' + bestYears.join(', ') + ').' : '')
              + ' Niższa wartość oznacza lepsze miejsce.');
      }
      const legendLine = engiSubjectDetailsLegend?.querySelector('span:first-child');
      const legendText = engiSubjectDetailsLegend?.querySelector('span:last-child');
      if (legendLine) legendLine.style.backgroundColor = chartColor;
      if (legendText) legendText.textContent = isIndicator ? metricLabel + ' 0–100' : (isScore ? 'Wynik ogólny 0–100' : 'Pozycja');
      engiSubjectDetailsCanvas.setAttribute('aria-label', subjectName + ': '
        + (isIndicator ? metricLabel : (isScore ? 'wynik ogólny' : 'pozycja'))
        + ' w EngiRank by Subject 2023–2025');

      if (engiSubjectDetailsSourceLink) {
        engiSubjectDetailsSourceLink.href = 'https://engirank.eu/ranking/2025/' + officialSubject.slug + '/';
        engiSubjectDetailsSourceLink.textContent = 'oficjalne wyniki EngiRank: ' + subjectName + ', edycje 2023–2025';
      }

      if (!engiSubjectDetailsChart) {
        engiSubjectDetailsChart = new Chart(engiSubjectDetailsCanvas, {
          type: 'line',
          data: { labels: engiSubjectYears, datasets: [] },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    if (typeof context.parsed.y !== 'number') return 'Brak danych';
                    if (engiSubjectDetailsChart.$mode === 'indicator') {
                      const weight = engiSubjectDetailsChart.$weightSeries?.[context.dataIndex];
                      return typeof weight === 'number'
                        ? ['Wynik: ' + formatEngiScore(context.parsed.y), 'Waga: ' + weight + '%']
                        : 'Wynik: ' + formatEngiScore(context.parsed.y);
                    }
                    if (engiSubjectDetailsChart.$mode === 'score') {
                      return 'Wynik ogólny: ' + formatEngiScore(context.parsed.y);
                    }
                    return 'Pozycja: ' + (engiSubjectDetailsChart.$rawSeries?.[context.dataIndex] ?? context.parsed.y);
                  }
                }
              }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#475569', font: { weight: '600' } } },
              y: { grid: { color: 'rgba(148,163,184,0.2)' }, ticks: { color: '#475569' }, title: { display: true, text: '' } }
            }
          }
        });
      }

      engiSubjectDetailsChart.data.labels = engiSubjectYears;
      engiSubjectDetailsChart.$mode = isIndicator ? 'indicator' : engiSubjectDetailsMode;
      engiSubjectDetailsChart.$rawSeries = rawSeries;
      engiSubjectDetailsChart.$weightSeries = isIndicator ? snapshots.map(({ weight }) => weight) : [];
      engiSubjectDetailsChart.data.datasets = [{
        label: isIndicator ? metricLabel : (isScore ? 'Wynik ogólny 0–100' : 'Pozycja'),
        data: chartSeries,
        borderColor: chartColor,
        backgroundColor: isIndicator ? 'rgba(8,145,178,0.12)' : (isScore ? 'rgba(5,150,105,0.12)' : 'rgba(79,70,229,0.12)'),
        pointBackgroundColor: chartColor,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2.5,
        tension: 0.25,
        spanGaps: false,
        clip: 8,
        fill: false
      }];

      const yAxis = engiSubjectDetailsChart.options.scales.y;
      delete yAxis.min;
      delete yAxis.max;
      delete yAxis.suggestedMin;
      delete yAxis.suggestedMax;
      if (isIndicator) {
        yAxis.reverse = false;
        yAxis.min = 0;
        yAxis.max = 105;
        yAxis.ticks.stepSize = 10;
        yAxis.ticks.callback = (value) => value > 100 ? '' : Number(value).toLocaleString('pl-PL');
        yAxis.title.text = 'Wynik wskaźnika (0–100)';
      } else if (isScore) {
        const values = scoreSeries.filter((value) => typeof value === 'number');
        const minValue = values.length ? Math.min(...values) : 0;
        const maxValue = values.length ? Math.max(...values) : 100;
        const padding = Math.max((maxValue - minValue) * 0.15, 4);
        yAxis.reverse = false;
        yAxis.suggestedMin = Math.max(0, minValue - padding);
        yAxis.suggestedMax = Math.min(100, maxValue + padding);
        yAxis.ticks.stepSize = undefined;
        yAxis.ticks.callback = (value) => Number(value).toLocaleString('pl-PL');
        yAxis.title.text = 'Wynik ogólny (0–100)';
      } else {
        const minValue = numericPositions.length ? Math.min(...numericPositions) : 1;
        const maxValue = numericPositions.length ? Math.max(...numericPositions) : 150;
        const padding = Math.max(Math.ceil((maxValue - minValue) * 0.12), 4);
        yAxis.reverse = true;
        yAxis.suggestedMin = Math.max(1, minValue - padding);
        yAxis.suggestedMax = maxValue + padding;
        yAxis.ticks.stepSize = undefined;
        yAxis.ticks.callback = (value) => Math.round(value);
        yAxis.title.text = 'Pozycja (niżej = lepiej)';
      }
      engiSubjectDetailsChart.update();
      engiSubjectDetailsChart.resize();
    };

    if (defaultSubject) updateEngiSubjectChart(defaultSubject);

    engiSubjectSelect.addEventListener('change', (event) => updateEngiSubjectChart(event.target.value));
    engiSubjectDetailsSelect?.addEventListener('change', (event) => updateEngiSubjectChart(event.target.value));
    engiSubjectDetailsMetricSelect?.addEventListener('change', renderEngiSubjectDetails);

    engiSubjectToggle?.addEventListener('click', () => {
      engiSubjectMode = engiSubjectMode === 'position' ? 'score' : 'position';
      updateEngiSubjectChart(currentEngiSubject);
    });

    engiSubjectDetailsModeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        engiSubjectDetailsMode = button.dataset.engiDetailsMode === 'score' ? 'score' : 'position';
        renderEngiSubjectDetails();
      });
    });

    engiSubjectDetailsMethodologyOpen?.addEventListener('click', () => {
      closeInternationalMethodology(engiSubjectDetailsModal, false);
      requestAnimationFrame(() => engiSubjectMethodologyOpenButton?.click());
    });
  }
  const rksCanvas = document.getElementById('chartRKS');
  const rksSelect = document.getElementById('rksSubjectSelect');
  const rksNote = document.getElementById('rksSubjectNote');
  const rksYears = Array.isArray(rksSubjectData && rksSubjectData.years) ? rksSubjectData.years.slice() : [];
  const rksSubjects = rksSubjectData && typeof rksSubjectData.subjects === 'object' ? rksSubjectData.subjects : {};
  const rksIndicatorSubjects = window.RKSIndicatorData && typeof window.RKSIndicatorData.subjects === 'object'
    ? window.RKSIndicatorData.subjects
    : {};
  let rksChart;

  if (rksCanvas && rksSelect && rksYears.length && Object.keys(rksSubjects).length) {
    const subjectNames = Object.keys(rksSubjects).sort((a, b) => a.localeCompare(b, 'pl-PL'));

    rksSelect.innerHTML = subjectNames
      .map((subject) => `<option value="${subject}">${subject}</option>`)
      .join('');

    const defaultSubject = subjectNames.includes('Architektura') ? 'Architektura' : subjectNames[0];

    if (defaultSubject) {
      rksSelect.value = defaultSubject;
    }

    rksChart = new Chart(rksCanvas, {
      type: 'line',
      data: {
        labels: rksYears,
        datasets: [
          {
            label: '',
            data: [],
            borderColor: 'rgb(79,70,229)',
            backgroundColor: 'rgba(79,70,229,0.12)',
            fill: '+1',
            tension: 0.25,
            pointRadius: 3,
            spanGaps: true,
            borderWidth: 2
          },
          {
            label: '',
            data: [],
            borderColor: 'rgba(129,140,248,0.6)',
            backgroundColor: 'rgba(129,140,248,0.05)',
            fill: false,
            tension: 0.25,
            pointRadius: 3,
            spanGaps: true,
            borderDash: [6, 4],
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: false,
      maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                if (context.datasetIndex !== 0) {
                  return null;
                }
                const rawSeries = context.chart.$rawSeries;
                const rawValue = rawSeries ? rawSeries[context.dataIndex] : null;
                if (rawValue) {
                  return `Pozycja: ${rawValue}`;
                }
                const lowerValue = context.raw;
                const upperDataset = context.chart.data.datasets[1];
                const upperValue =
                  upperDataset && Array.isArray(upperDataset.data) ? upperDataset.data[context.dataIndex] : null;
                if (typeof lowerValue === 'number' && typeof upperValue === 'number' && upperValue !== lowerValue) {
                  return `Pozycja: ${lowerValue}-${upperValue}`;
                }
                if (typeof lowerValue === 'number') {
                  return `Pozycja: ${lowerValue}`;
                }
                return 'Brak danych';
              }
            }
          }
        },
        scales: {
          y: {
            reverse: true,
            suggestedMin: 10,
            suggestedMax: 1,
            ticks: {
              stepSize: 1,
              callback: (value) => (typeof value === 'number' ? Math.round(value) : value)
            },
            grid: { color: 'rgba(17,24,39,0.08)' },
            title: { display: true, text: 'Pozycja (im wyżej, tym lepiej)' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });

    // RKS state is rendered from immutable per-subject series. Do not infer
    // position data from the visible dataset, because that dataset may
    // currently contain scores after a mode switch.
    const rksToggle = document.getElementById('rksToggle');
    const rksEngiRankSubjects = new Set([
      'Budownictwo',
      'Elektronika i telekomunikacja',
      'Elektrotechnika',
      'Inżynieria biomedyczna',
      'Inżynieria chemiczna',
      'Inżynieria materiałowa',
      'Inżynieria środowiska',
      'Mechanika i budowa maszyn'
    ]);
    const rksRegulatedSubjects = new Set(['Kierunek lekarski', 'Kierunek lekarsko-dentystyczny', 'Prawo']);
    let rksMode = 'position';
    let currentRKSSubject = defaultSubject;

    if (rksMethodologySubjectSelect) {
      rksMethodologySubjectSelect.innerHTML = subjectNames
        .map((subject) => `<option value="${subject}">${subject}</option>`)
        .join('');
      if (defaultSubject) {
        rksMethodologySubjectSelect.value = defaultSubject;
      }
    }
    if (rksDetailsSubjectSelect) {
      rksDetailsSubjectSelect.innerHTML = subjectNames
        .map((subject) => `<option value="${subject}">${subject}</option>`)
        .join('');
      if (defaultSubject) {
        rksDetailsSubjectSelect.value = defaultSubject;
      }
    }

    const rksWeightPalettes = {
      prestige: '#ec4899',
      salary: '#fbbf24',
      employment: '#fde68a',
      academic: '#14b8a6',
      accreditation: '#64748b',
      admission: '#94a3b8',
      publications: '#f59e0b',
      fwci: '#fed7aa',
      fwvi: '#ffedd5',
      top10: '#fff7ed',
      internationalPubs: '#ef4444',
      foreignStudents: '#fb7185',
      extra: '#cbd5e1'
    };

    const rksMethodologyWeights = {
      standard: [
        ['Ocena przez kadrę akademicką', 10, 'prestige'],
        ['Wynagrodzenia absolwentów', 7.5, 'salary'],
        ['Zatrudnienie absolwentów', 7.5, 'employment'],
        ['Ewaluacja działalności naukowej', 10, 'academic'],
        ['Akredytacje', 5, 'accreditation'],
        ['Jakość przyjętych na studia', 10, 'admission'],
        ['Publikacje', 15, 'publications'],
        ['FWCI', 10, 'fwci'],
        ['FWVI', 6, 'fwvi'],
        ['Top 10', 8, 'top10'],
        ['Publikacje we współpracy zagranicznej', 6, 'internationalPubs'],
        ['Studenci cudzoziemcy', 5, 'foreignStudents']
      ],
      engi: [
        ['Ocena przez kadrę akademicką', 10, 'prestige'],
        ['Wynagrodzenia absolwentów', 7.5, 'salary'],
        ['Zatrudnienie absolwentów', 7.5, 'employment'],
        ['Ewaluacja działalności naukowej', 10, 'academic'],
        ['Akredytacje', 5, 'accreditation'],
        ['Jakość przyjętych na studia', 10, 'admission'],
        ['Publikacje', 10, 'publications'],
        ['FWCI', 8, 'fwci'],
        ['FWVI', 5, 'fwvi'],
        ['Top 10', 7, 'top10'],
        ['Publikacje we współpracy zagranicznej', 5, 'internationalPubs'],
        ['Studenci cudzoziemcy', 5, 'foreignStudents'],
        ['EngiRank', 10, 'extra']
      ],
      astronomy: [
        ['Ocena przez kadrę akademicką', 15, 'prestige'],
        ['Ewaluacja działalności naukowej', 10, 'academic'],
        ['Akredytacje', 5, 'accreditation'],
        ['Jakość przyjętych na studia', 10, 'admission'],
        ['Publikacje', 20, 'publications'],
        ['FWCI', 12, 'fwci'],
        ['FWVI', 7, 'fwvi'],
        ['Top 10', 9, 'top10'],
        ['Publikacje we współpracy zagranicznej', 7, 'internationalPubs'],
        ['Studenci cudzoziemcy', 5, 'foreignStudents']
      ]
    };

    const rksCriteriaPresentation = [
      { name: 'Prestiż', color: '#ec4899', description: 'Ocena rozpoznawalności kierunku w krajowym środowisku akademickim.' },
      { name: 'Absolwenci na rynku pracy', color: '#f59e0b', description: 'Sytuacja ekonomiczna absolwentów na tle lokalnego rynku pracy.' },
      { name: 'Potencjał akademicki', color: '#14b8a6', description: 'Jakość dyscypliny naukowej stanowiącej podstawę prowadzenia kierunku.' },
      { name: 'Potencjał dydaktyczny', color: '#64748b', description: 'Akredytacje oraz jakość kandydatów przyjętych na pierwszy rok studiów.' },
      { name: 'Potencjał naukowy', color: '#f97316', description: 'Skala, wpływ i widoczność publikacji w dyscyplinie wiodącej kierunku.' },
      { name: 'Umiędzynarodowienie', color: '#ef4444', description: 'Współpraca publikacyjna z zagranicą i udział studentów cudzoziemców.' },
      { name: 'Kryteria dodatkowe', color: '#2563eb', description: 'Dodatkowy komponent właściwy dla wybranych grup kierunków.' }
    ];

    const rksIndicatorMeta = {
      'Ocena przez kadrę akademicką': { group: 'Prestiż', source: 'Badanie CAWI Perspektywy', description: 'Liczba wskazań uczelni w badaniu ankietowym wśród profesorów i doktorów habilitowanych związanych z daną dziedziną.' },
      'Wynagrodzenia absolwentów': { group: 'Absolwenci na rynku pracy', source: 'ELA / MNiSW / ZUS', description: 'Wynagrodzenia absolwentów odniesione do poziomu wynagrodzeń w powiecie ich zamieszkania.' },
      'Zatrudnienie absolwentów': { group: 'Absolwenci na rynku pracy', source: 'ELA / MNiSW / ZUS', description: 'Sytuacja absolwentów na rynku pracy odniesiona do warunków zatrudnienia w powiecie zamieszkania.' },
      'Ewaluacja działalności naukowej': { group: 'Potencjał akademicki', source: 'KEN / POL-on', description: 'Kategoria naukowa przyznana uczelni w dyscyplinie wiodącej dla ocenianego kierunku.' },
      'Akredytacje': { group: 'Potencjał dydaktyczny', source: 'PKA / międzynarodowe agencje akredytacyjne', description: 'Aktualne akredytacje i certyfikaty potwierdzające jakość kształcenia na kierunku.' },
      'Jakość przyjętych na studia': { group: 'Potencjał dydaktyczny', source: 'Dane przekazane przez uczelnie', description: 'Wyniki rozszerzonych egzaminów maturalnych osób przyjętych na pierwszy rok studiów stacjonarnych.' },
      'Publikacje': { group: 'Potencjał naukowy', source: 'SciVal / SCOPUS', description: 'Liczba publikacji przypisanych do dyscypliny wiodącej dla danego kierunku.' },
      'FWCI': { group: 'Potencjał naukowy', source: 'SciVal / SCOPUS', description: 'Wpływ cytowań publikacji względem średniej dla podobnych publikacji, bez autocytowań.' },
      'FWVI': { group: 'Potencjał naukowy', source: 'SciVal / SCOPUS', description: 'Liczba odsłon publikacji względem średniej dla porównywalnych publikacji.' },
      'Top 10': { group: 'Potencjał naukowy', source: 'SciVal / SCOPUS', description: 'Udział publikacji w czasopismach należących do górnych 10% według CiteScore.' },
      'Publikacje we współpracy zagranicznej': { group: 'Umiędzynarodowienie', source: 'SciVal / SCOPUS', description: 'Udział publikacji mających współautora z zagranicy w publikacjach dyscypliny wiodącej.' },
      'Studenci cudzoziemcy': { group: 'Umiędzynarodowienie', source: 'POL-on', description: 'Udział studentów zagranicznych w ogólnej liczbie studentów kierunku; obowiązuje próg maksymalnego wyniku.' },
      'EngiRank': { group: 'Kryteria dodatkowe', source: 'Ranking dyscyplinowy EngiRank', description: 'Wynik odpowiedniej dyscypliny w europejskim rankingu uczelni technicznych EngiRank.' }
    };

    const getRKSMethodologyVariant = (subjectName) => {
      if (rksEngiRankSubjects.has(subjectName)) {
        return { key: 'engi', badge: 'Techniczny z EngiRank', text: `${subjectName}: profil techniczny zawiera EngiRank 10%. Jego wprowadzenie obniża łącznie o 10 p.p. wagi pięciu wskaźników naukowych i umiędzynarodowienia.` };
      }
      if (subjectName === 'Astronomia') {
        return { key: 'astronomy', badge: 'Astronomia', text: 'Astronomia ma osobny profil: bez wskaźników absolwenckich, z wyższą wagą prestiżu i potencjału naukowego.' };
      }
      return { key: 'standard', badge: 'Standardowy', text: `${subjectName}: standardowy profil 12 wskaźników, bez kryterium dodatkowego EngiRank lub egzaminu zawodowego.` };
    };

    const formatRKSWeight = (value) => Number.isInteger(value) ? `${value}%` : `${String(value).replace('.', ',')}%`;
    const rksStandardWeights = new Map(rksMethodologyWeights.standard.map(([label, value]) => [label, value]));
    let activeRKSMethodologyCriterion = 'Prestiż';
    let activeRKSMethodologyVariant = 'standard';

    const selectRKSMethodologyCriterion = (criterionName) => {
      activeRKSMethodologyCriterion = criterionName;
      renderRKSMethodologyWeightChart(activeRKSMethodologyVariant);
    };

    const renderRKSMethodologyDetails = (weights) => {
      if (!rksMethodologyCriteriaNav || !rksMethodologyIndicatorList) return;
      const availableCriteria = rksCriteriaPresentation.filter((criterion) => weights.some(([label]) => rksIndicatorMeta[label]?.group === criterion.name));
      if (!availableCriteria.some((criterion) => criterion.name === activeRKSMethodologyCriterion)) activeRKSMethodologyCriterion = availableCriteria[0]?.name || 'Prestiż';

      const navButtons = availableCriteria.map((criterion) => {
        const total = weights.filter(([label]) => rksIndicatorMeta[label]?.group === criterion.name).reduce((sum, [, value]) => sum + value, 0);
        const active = criterion.name === activeRKSMethodologyCriterion;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'rks-criterion-button' + (active ? ' active' : '');
        const dot = document.createElement('span');
        dot.className = 'rks-legend-dot';
        dot.style.background = criterion.color;
        const name = document.createElement('span');
        name.className = 'rks-criterion-name';
        name.textContent = criterion.name;
        const value = document.createElement('span');
        value.className = 'rks-criterion-weight';
        value.textContent = formatRKSWeight(total);
        button.append(dot, name, value);
        button.setAttribute('aria-pressed', active.toString());
        button.addEventListener('click', () => selectRKSMethodologyCriterion(criterion.name));
        return button;
      });
      rksMethodologyCriteriaNav.replaceChildren(...navButtons);

      const presentation = availableCriteria.find((criterion) => criterion.name === activeRKSMethodologyCriterion) || availableCriteria[0];
      const activeWeights = weights.filter(([label]) => rksIndicatorMeta[label]?.group === presentation.name);
      const criterionTotal = activeWeights.reduce((sum, [, value]) => sum + value, 0);
      if (rksMethodologyDetailSwatch) rksMethodologyDetailSwatch.style.background = presentation.color;
      if (rksMethodologyDetailTitle) rksMethodologyDetailTitle.textContent = presentation.name;
      if (rksMethodologyDetailCopy) rksMethodologyDetailCopy.textContent = presentation.description;
      if (rksMethodologyCriterionTotal) {
        const caption = document.createElement('small');
        caption.textContent = 'waga grupy';
        rksMethodologyCriterionTotal.replaceChildren(formatRKSWeight(criterionTotal), caption);
      }

      const rows = activeWeights.map(([label, value]) => {
        const meta = rksIndicatorMeta[label];
        const standardWeight = rksStandardWeights.get(label);
        const delta = standardWeight == null ? null : value - standardWeight;
        const row = document.createElement('article');
        row.className = 'rks-indicator';
        const copy = document.createElement('div');
        const title = document.createElement('h4');
        title.textContent = label;
        const description = document.createElement('p');
        description.textContent = meta.description;
        const source = document.createElement('span');
        source.className = 'rks-source-line';
        source.textContent = meta.source;
        copy.append(title, description, source);
        const weight = document.createElement('div');
        weight.className = 'rks-indicator-weight';
        const caption = document.createElement('small');
        caption.textContent = 'w WSK';
        weight.append(formatRKSWeight(value), caption);
        const deltaBadge = document.createElement('span');
        deltaBadge.className = 'rks-indicator-delta' + (standardWeight == null ? ' new' : delta > 0 ? ' up' : delta < 0 ? ' down' : '');
        deltaBadge.textContent = standardWeight == null ? 'Dodatkowy' : delta === 0 ? 'Jak standard' : `${delta > 0 ? '+' : '−'}${formatRKSWeight(Math.abs(delta))} vs standard`;
        row.append(copy, weight, deltaBadge);
        return row;
      });
      rksMethodologyIndicatorList.replaceChildren(...rows);
    };

    const renderRKSMethodologyWeightChart = (variantKey) => {
      activeRKSMethodologyVariant = variantKey;
      const weights = rksMethodologyWeights[variantKey] || rksMethodologyWeights.standard;
      const buildButton = ([label, value, colorKey], legend = false) => {
        const meta = rksIndicatorMeta[label];
        const color = rksWeightPalettes[colorKey] || '#94a3b8';
        const active = meta?.group === activeRKSMethodologyCriterion;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = (legend ? 'rks-legend-button' : 'rks-weight-segment') + (active ? ' active' : '');
        if (legend) {
          const dot = document.createElement('span');
          dot.className = 'rks-legend-dot';
          dot.style.background = color;
          const name = document.createElement('span');
          name.className = 'rks-legend-name';
          name.textContent = label;
          const weight = document.createElement('span');
          weight.className = 'rks-legend-weight';
          weight.textContent = formatRKSWeight(value);
          button.append(dot, name, weight);
        } else {
          button.style.width = value + '%';
          button.style.background = color;
          button.style.color = ['fwci', 'fwvi', 'top10', 'employment'].includes(colorKey) ? '#334155' : '#fff';
          button.textContent = value >= 5 ? formatRKSWeight(value) : '';
          button.title = label + ' — ' + formatRKSWeight(value);
        }
        button.setAttribute('aria-label', label + ', ' + formatRKSWeight(value));
        button.addEventListener('click', () => selectRKSMethodologyCriterion(meta.group));
        return button;
      };
      rksMethodologyWeightChart?.replaceChildren(...weights.map((item) => buildButton(item)));
      rksMethodologyWeightLegend?.replaceChildren(...weights.map((item) => buildButton(item, true)));
      renderRKSMethodologyDetails(weights);
    };

    const updateRKSMethodologyPanel = (subjectName) => {
      const variant = getRKSMethodologyVariant(subjectName);
      const weights = rksMethodologyWeights[variant.key] || rksMethodologyWeights.standard;
      const subjectData = rksSubjects[subjectName] || {};
      const latestIndex = rksYears.length - 1;
      const latestPosition = Array.isArray(subjectData.raw) ? subjectData.raw[latestIndex] : null;
      const latestScore = Array.isArray(subjectData.score) ? subjectData.score[latestIndex] : null;
      if (rksMethodologyVariantText) rksMethodologyVariantText.textContent = variant.text;
      if (rksMethodologyVariantBadge) rksMethodologyVariantBadge.textContent = variant.badge;
      if (rksMethodologyProfileFact) rksMethodologyProfileFact.textContent = variant.key === 'engi' ? 'EngiRank' : variant.badge;
      if (rksMethodologyIndicatorCount) rksMethodologyIndicatorCount.textContent = weights.length;
      if (rksMethodologyLatestPosition) rksMethodologyLatestPosition.textContent = latestPosition || '—';
      if (rksMethodologyLatestScore) rksMethodologyLatestScore.textContent = typeof latestScore === 'number' ? latestScore.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : '—';
      if (rksMethodologyProfileDelta) rksMethodologyProfileDelta.textContent = variant.key === 'engi' ? 'EngiRank +10 p.p.' : variant.key === 'astronomy' ? 'Profil specjalny' : 'Profil bazowy';
      renderRKSMethodologyWeightChart(variant.key);
    };

    rksMethodologyInfoTabs.forEach((button) => {
      button.addEventListener('click', () => {
        rksMethodologyInfoTabs.forEach((tab) => tab.classList.toggle('active', tab === button));
        rksMethodologyInfoTabs.forEach((tab) => document.getElementById(tab.dataset.rksPanel)?.classList.toggle('hidden', tab !== button));
      });
    });
    const syncRKSSubjectControls = (subjectName) => {
      if (rksSelect && rksSelect.value !== subjectName) {
        rksSelect.value = subjectName;
      }
      if (rksMethodologySubjectSelect && rksMethodologySubjectSelect.value !== subjectName) {
        rksMethodologySubjectSelect.value = subjectName;
      }
      if (rksDetailsSubjectSelect && rksDetailsSubjectSelect.value !== subjectName) {
        rksDetailsSubjectSelect.value = subjectName;
      }
      updateRKSMethodologyPanel(subjectName);
    };

    const setRKSButtonState = () => {
      if (!rksToggle) {
        return;
      }
      const isScore = rksMode === 'score';
      updateSegmentedToggle(rksToggle, isScore ? 'score' : 'position');
    };

    const updateRKSNote = (subjectName, lowerSeries, rawSeries, scoreSeries) => {
      if (!rksNote) {
        return;
      }

      let latestYear = null;
      let latestRaw = null;
      let latestScore = null;

      for (let idx = rksYears.length - 1; idx >= 0; idx -= 1) {
        if (rawSeries[idx]) {
          latestYear = rksYears[idx];
          latestRaw = rawSeries[idx];
          latestScore = typeof scoreSeries[idx] === 'number' ? scoreSeries[idx] : null;
          break;
        }
      }

      let bestValue = null;
      const bestYears = [];
      for (let idx = 0; idx < lowerSeries.length; idx += 1) {
        const value = lowerSeries[idx];
        if (typeof value === 'number' && (bestValue === null || value < bestValue)) {
          bestValue = value;
        }
      }
      if (bestValue !== null) {
        for (let idx = 0; idx < lowerSeries.length; idx += 1) {
          if (lowerSeries[idx] === bestValue) {
            bestYears.push(rksYears[idx]);
          }
        }
      }

      const noteParts = [];
      if (latestYear !== null && latestRaw !== null) {
        const scoreText = latestScore !== null ? ` (punktacja ${latestScore.toFixed(1)})` : '';
        noteParts.push(`${subjectName} w ${latestYear}: miejsce ${latestRaw}${scoreText}.`);
      } else {
        noteParts.push(`${subjectName}: brak danych dla lat 2020–2026.`);
      }

      if (bestValue !== null && bestYears.length) {
        const yearLabel = bestYears.length === 1 ? `${bestYears[0]}` : bestYears.join(', ');
        noteParts.push(`Najlepsza pozycja: ${bestValue} (${bestYears.length === 1 ? 'rok ' : 'lata '}${yearLabel}).`);
      }

      rksNote.textContent = noteParts.join(' ');
    };

    const renderRKSChart = () => {
      const subjectData = rksSubjects[currentRKSSubject];
      if (!subjectData) {
        return;
      }

      const lowerSeries = Array.isArray(subjectData.lower) ? subjectData.lower.slice() : [];
      const upperSeries = Array.isArray(subjectData.upper) ? subjectData.upper.slice() : [];
      const rawSeries = Array.isArray(subjectData.raw) ? subjectData.raw.slice() : [];
      const scoreSeries = Array.isArray(subjectData.score) ? subjectData.score.slice() : [];
      const dataset0 = rksChart.data.datasets[0];
      const dataset1 = rksChart.data.datasets[1];
      const yAxis = rksChart.options.scales.y;

      rksChart.data.labels = rksYears;
      rksChart.$rawSeries = rawSeries;
      rksChart.$scoreSeries = scoreSeries;
      rksChart.$lowerSeries = lowerSeries;
      rksChart.$upperSeries = upperSeries;
      rksChart.$mode = rksMode;

      if (rksMode === 'score') {
        dataset0.data = scoreSeries;
        dataset0.label = 'Punktacja (0-100)';
        dataset0.borderColor = 'rgba(16,185,129,0.85)';
        dataset0.backgroundColor = 'rgba(16,185,129,0.15)';
        dataset0.fill = false;
        dataset1.data = [];

        yAxis.reverse = false;
        const numericScores = scoreSeries.filter((value) => typeof value === 'number');
        if (numericScores.length) {
          const minScore = Math.min(...numericScores);
          const maxScore = Math.max(...numericScores);
          const padding = Math.max((maxScore - minScore) * 0.1, 5);
          yAxis.suggestedMin = Math.max(minScore - padding, 0);
          yAxis.suggestedMax = Math.min(maxScore + padding, 100);
        } else {
          yAxis.suggestedMin = 75;
          yAxis.suggestedMax = 100;
        }
        yAxis.ticks.stepSize = undefined;
        yAxis.ticks.callback = (value) => (typeof value === 'number' ? value.toFixed(0) : value);
        yAxis.title.text = 'Punktacja (im wyższa, tym lepiej)';

        rksChart.options.plugins.tooltip.callbacks.label = (context) => {
          if (context.datasetIndex !== 0) {
            return null;
          }
          const value = context.parsed.y;
          return value !== null && typeof value === 'number' ? `Punktacja: ${value.toFixed(1)}` : 'Brak danych';
        };
      } else {
        dataset0.data = lowerSeries;
        dataset0.label = 'Pozycja (im wyżej, tym lepiej)';
        dataset0.borderColor = 'rgb(79,70,229)';
        dataset0.backgroundColor = 'rgba(79,70,229,0.12)';
        dataset0.fill = '+1';
        dataset1.data = upperSeries;

        yAxis.reverse = true;
        const numericPositions = lowerSeries.concat(upperSeries).filter((value) => typeof value === 'number');
        if (numericPositions.length) {
          const maxValue = Math.max(...numericPositions);
          const minValue = Math.min(...numericPositions);
          const padding = Math.max(Math.round((maxValue - minValue) * 0.1), 1);
          yAxis.suggestedMin = maxValue + padding;
          yAxis.suggestedMax = Math.max(minValue - padding, 1);
        } else {
          yAxis.suggestedMin = 10;
          yAxis.suggestedMax = 1;
        }
        yAxis.ticks.stepSize = 1;
        yAxis.ticks.callback = (value) => (typeof value === 'number' ? Math.round(value) : value);
        yAxis.title.text = 'Pozycja (im wyżej, tym lepiej)';

        rksChart.options.plugins.tooltip.callbacks.label = (context) => {
          if (context.datasetIndex !== 0) {
            return null;
          }
          const rawValue = rawSeries[context.dataIndex];
          if (rawValue) {
            return `Pozycja: ${rawValue}`;
          }
          const lowerValue = context.raw;
          const upperValue = Array.isArray(upperSeries) ? upperSeries[context.dataIndex] : null;
          if (typeof lowerValue === 'number' && typeof upperValue === 'number' && upperValue !== lowerValue) {
            return `Pozycja: ${lowerValue}-${upperValue}`;
          }
          if (typeof lowerValue === 'number') {
            return `Pozycja: ${lowerValue}`;
          }
          return 'Brak danych';
        };
      }

      setRKSButtonState();
      updateRKSNote(currentRKSSubject, lowerSeries, rawSeries, scoreSeries);
      rksChart.update();
    };

    let rksDetailsMode = 'position';
    let rksDetailsChart = null;

    const rksMetricAliases = {
      sz: 'foreignStudents',
      sc: 'foreignStudents',
      engirank: 'engirank',
      er: 'engirank',
      er_ci: 'engirank',
      er_el: 'engirank',
      er_med: 'engirank',
      er_ch: 'engirank',
      er_mat: 'engirank',
      er_env: 'engirank',
      er_mec: 'engirank'
    };
    const rksEngiRankMetricLabels = {
      er_ci: 'EngiRank – Civil Engineering',
      er_el: 'EngiRank – Electrical, Electronic and Information Engineering',
      er_med: 'EngiRank – Medical Engineering',
      er_ch: 'EngiRank – Chemical Engineering',
      er_mat: 'EngiRank – Materials Engineering',
      er_env: 'EngiRank – Environmental Engineering',
      er_mec: 'EngiRank – Mechanical Engineering'
    };
    const rksMetricLabels = {
      opka: 'Ocena przez kadrę akademicką',
      ela: 'Ekonomiczne losy absolwentów',
      wa: 'Wynagrodzenia absolwentów',
      za: 'Zatrudnienie absolwentów',
      wkn: 'Ewaluacja działalności naukowej',
      akr: 'Akredytacje',
      jpns: 'Jakość przyjętych na studia',
      pub: 'Publikacje',
      cyt: 'Cytowania',
      fwci: 'FWCI',
      fwvi: 'FWVI',
      top: 'Top 10',
      pubz: 'Publikacje we współpracy zagranicznej',
      foreignStudents: 'Studenci cudzoziemcy',
      engirank: 'EngiRank',
      egzaminy: 'Egzaminy zawodowe'
    };
    const canonicalRKSMetric = (key) => rksMetricAliases[key] || key;
    const formatRKSScore = (value) => typeof value === 'number'
      ? value.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
      : '—';
    const formatRKSIndicatorValue = (value) => typeof value === 'number'
      ? value.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 2 })
      : '—';
    const formatRKSMetricWeight = (value) => typeof value === 'number'
      ? value.toLocaleString('pl-PL', { maximumFractionDigits: 1 })
      : '—';

    const getRKSMetricCatalog = (subjectName) => {
      const editions = rksIndicatorSubjects[subjectName]?.editions || {};
      const catalog = new Map();
      [...rksYears].reverse().forEach((year) => {
        const edition = editions[String(year)];
        if (!edition) return;
        const keys = Array.isArray(edition.order) ? edition.order : Object.keys(edition.metrics || {});
        keys.forEach((sourceKey) => {
          const metric = edition.metrics?.[sourceKey];
          const key = canonicalRKSMetric(sourceKey);
          if (!metric || catalog.has(key)) return;
          let label = rksMetricLabels[key] || metric.label || key;
          if (key === 'engirank') label = rksEngiRankMetricLabels[sourceKey] || rksMetricLabels.engirank;
          catalog.set(key, { key, label });
        });
      });
      return [...catalog.values()];
    };

    const updateRKSMetricOptions = (subjectName) => {
      if (!rksDetailsMetricSelect) return 'overall';
      if (rksDetailsMetricSelect.dataset.subject === subjectName && rksDetailsMetricSelect.options.length) {
        return rksDetailsMetricSelect.value;
      }
      const previous = rksDetailsMetricSelect.value;
      const catalog = getRKSMetricCatalog(subjectName);
      const overallOption = document.createElement('option');
      overallOption.value = 'overall';
      overallOption.textContent = 'Wynik ogólny (pozycja / punktacja)';
      const indicatorGroup = document.createElement('optgroup');
      indicatorGroup.label = 'Wskaźniki kierunku (0–100)';
      catalog.forEach(({ key, label }) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = label;
        indicatorGroup.append(option);
      });
      rksDetailsMetricSelect.replaceChildren(overallOption, indicatorGroup);
      const available = new Set(['overall', ...catalog.map(({ key }) => key)]);
      rksDetailsMetricSelect.value = previous && available.has(previous)
        ? previous
        : (catalog[0]?.key || 'overall');
      rksDetailsMetricSelect.dataset.subject = subjectName;
      return rksDetailsMetricSelect.value;
    };

    const getRKSMetricSnapshot = (subjectName, year, metricKey) => {
      const edition = rksIndicatorSubjects[subjectName]?.editions?.[String(year)];
      if (!edition) return { exists: false, value: null, weight: null, sourceKeys: [] };
      const matches = Object.entries(edition.metrics || {})
        .filter(([sourceKey]) => canonicalRKSMetric(sourceKey) === metricKey);
      const selected = matches.find(([, metric]) => typeof metric.value === 'number') || matches[0];
      if (!selected) return { exists: false, value: null, weight: null, sourceKeys: [] };
      return {
        exists: true,
        value: typeof selected[1].value === 'number' ? selected[1].value : null,
        weight: typeof selected[1].weight === 'number' ? selected[1].weight : null,
        sourceKeys: matches.map(([sourceKey]) => sourceKey)
      };
    };

    const createRKSDetailsYearCard = (year, rawPosition, score) => {
      const hasPosition = typeof rawPosition === 'string' || typeof rawPosition === 'number';
      const card = document.createElement('article');
      card.className = 'rks-details-year' + (hasPosition ? '' : ' missing');
      card.setAttribute('role', 'listitem');
      const yearLabel = document.createElement('div');
      yearLabel.className = 'year';
      yearLabel.textContent = year;
      const position = document.createElement('div');
      position.className = 'position';
      position.textContent = hasPosition ? rawPosition : '—';
      const positionLabel = document.createElement('span');
      positionLabel.className = 'position-label';
      positionLabel.textContent = hasPosition ? 'pozycja' : 'brak danych';
      const scoreLabel = document.createElement('span');
      scoreLabel.className = 'score';
      scoreLabel.textContent = typeof score === 'number' ? `${formatRKSScore(score)} pkt` : 'brak punktacji';
      card.append(yearLabel, position, positionLabel, scoreLabel);
      return card;
    };

    const createRKSIndicatorYearCard = (year, snapshot) => {
      const hasValue = typeof snapshot.value === 'number';
      const card = document.createElement('article');
      card.className = 'rks-details-year' + (hasValue ? '' : ' missing');
      card.setAttribute('role', 'listitem');
      const yearLabel = document.createElement('div');
      yearLabel.className = 'year';
      yearLabel.textContent = year;
      const value = document.createElement('div');
      value.className = 'position';
      value.textContent = formatRKSIndicatorValue(snapshot.value);
      const valueLabel = document.createElement('span');
      valueLabel.className = 'position-label';
      valueLabel.textContent = hasValue ? 'wynik 0–100' : (snapshot.exists ? 'brak wartości' : 'wskaźnik nie występował');
      const weight = document.createElement('span');
      weight.className = 'score';
      weight.textContent = typeof snapshot.weight === 'number'
        ? `waga ${formatRKSMetricWeight(snapshot.weight)}%`
        : (snapshot.exists ? 'waga niepublikowana' : '—');
      card.append(yearLabel, value, valueLabel, weight);
      return card;
    };

    const setRKSDetailsStat = (index, label, value) => {
      if (rksDetailsStatLabels[index]) rksDetailsStatLabels[index].textContent = label;
      [rksDetailsLatestPosition, rksDetailsLatestScore, rksDetailsBestPosition, rksDetailsPodiums][index].textContent = value;
    };

    renderRKSDetails = () => {
      if (!rksDetailsCanvas || !rksDetailsSubjectSelect) return;
      const subjectName = rksDetailsSubjectSelect.value || currentRKSSubject || defaultSubject;
      const subjectData = rksSubjects[subjectName];
      if (!subjectData) return;
      const metricKey = updateRKSMetricOptions(subjectName);
      const isIndicator = metricKey !== 'overall';
      const metricCatalog = getRKSMetricCatalog(subjectName);
      const metricLabel = metricCatalog.find((metric) => metric.key === metricKey)?.label || rksMetricLabels[metricKey] || metricKey;
      const lowerSeries = Array.isArray(subjectData.lower) ? subjectData.lower.slice() : [];
      const upperSeries = Array.isArray(subjectData.upper) ? subjectData.upper.slice() : [];
      const rawSeries = Array.isArray(subjectData.raw) ? subjectData.raw.slice() : [];
      const scoreSeries = Array.isArray(subjectData.score) ? subjectData.score.slice() : [];
      const latestIndex = rksYears.length - 1;
      const snapshots = isIndicator
        ? rksYears.map((year) => getRKSMetricSnapshot(subjectName, year, metricKey))
        : [];

      rksDetailsViewControl?.classList.toggle('hidden', isIndicator);
      rksDetailsModeButtons.forEach((button) => {
        button.setAttribute('aria-pressed', (button.dataset.rksDetailsMode === rksDetailsMode).toString());
      });

      if (isIndicator) {
        const numericEntries = snapshots
          .map((snapshot, index) => ({ ...snapshot, index }))
          .filter((snapshot) => typeof snapshot.value === 'number');
        const latest = numericEntries.at(-1);
        const best = numericEntries.length ? Math.max(...numericEntries.map(({ value }) => value)) : null;
        const latestWeightEntry = [...snapshots.map((snapshot, index) => ({ ...snapshot, index }))]
          .reverse()
          .find(({ exists }) => exists);
        setRKSDetailsStat(0, latest ? `Wynik ${rksYears[latest.index]}` : 'Najnowszy wynik', formatRKSIndicatorValue(latest?.value));
        setRKSDetailsStat(1, latestWeightEntry ? `Waga ${rksYears[latestWeightEntry.index]}` : 'Najnowsza waga', typeof latestWeightEntry?.weight === 'number' ? `${formatRKSMetricWeight(latestWeightEntry.weight)}%` : '—');
        setRKSDetailsStat(2, 'Najlepszy wynik', formatRKSIndicatorValue(best));
        setRKSDetailsStat(3, 'Edycje z wynikiem', `${numericEntries.length} / ${rksYears.length}`);
        rksDetailsYearCards?.replaceChildren(...rksYears.map((year, index) => createRKSIndicatorYearCard(year, snapshots[index])));

        const availableYears = numericEntries.map(({ index }) => rksYears[index]);
        const weightPairs = snapshots
          .map((snapshot, index) => typeof snapshot.weight === 'number' ? `${rksYears[index]}: ${formatRKSMetricWeight(snapshot.weight)}%` : null)
          .filter(Boolean);
        const sourceKeys = new Set(snapshots.flatMap(({ sourceKeys: keys }) => keys));
        const aliasNote = sourceKeys.size > 1
          ? ' Oznaczenie wskaźnika w tabelach źródłowych zmieniało się między edycjami; seria łączy ten sam zakres merytoryczny.'
          : '';
        if (rksDetailsMetricContext) {
          rksDetailsMetricContext.textContent = availableYears.length
            ? `Dostępne wyniki: ${availableYears.join(', ')}. ${weightPairs.length ? `Wagi według edycji: ${weightPairs.join('; ')}.` : 'Wagi nie były publikowane w odczytanych tabelach.'}${aliasNote}`
            : 'Brak opublikowanych wartości tego wskaźnika dla PW w analizowanych edycjach.';
        }
      } else {
        const numericPositions = lowerSeries.filter((value) => typeof value === 'number');
        const bestPosition = numericPositions.length ? Math.min(...numericPositions) : null;
        const podiumCount = upperSeries.filter((value) => typeof value === 'number' && value <= 3).length;
        setRKSDetailsStat(0, 'Najnowsza pozycja', rawSeries[latestIndex] ?? '—');
        setRKSDetailsStat(1, 'Punktacja 2026', formatRKSScore(scoreSeries[latestIndex]));
        setRKSDetailsStat(2, 'Najlepsza pozycja', bestPosition === null ? '—' : `${bestPosition}.`);
        setRKSDetailsStat(3, 'Edycje na podium', `${podiumCount} / ${rksYears.length}`);
        rksDetailsYearCards?.replaceChildren(...rksYears.map((year, index) =>
          createRKSDetailsYearCard(year, rawSeries[index], scoreSeries[index])));
        if (rksDetailsMetricContext) {
          rksDetailsMetricContext.textContent = 'Wynik ogólny łączy wskaźniki z wagami właściwymi dla kierunku i edycji. Punktacja jest normalizowana osobno w każdej tabeli, dlatego nie należy porównywać jej bezpośrednio między różnymi kierunkami.';
        }
      }

      const indicatorColor = '#0891b2';
      const isScore = !isIndicator && rksDetailsMode === 'score';
      const chartColor = isIndicator ? indicatorColor : (isScore ? '#059669' : '#4f46e5');
      if (rksDetailsChartTitle) {
        rksDetailsChartTitle.textContent = isIndicator
          ? `${subjectName} — ${metricLabel} 2020–2026`
          : `${subjectName} — ${isScore ? 'punktacja' : 'pozycja'} 2020–2026`;
      }
      if (rksDetailsChartNote) {
        if (isIndicator) {
          rksDetailsChartNote.textContent = 'Wynik 0–100 jest normalizowany w obrębie kierunku i edycji. Przerwa na wykresie oznacza brak wartości albo niewystępowanie wskaźnika; braków nie interpolujemy.';
        } else {
          const numericPositions = lowerSeries.filter((value) => typeof value === 'number');
          const bestPosition = numericPositions.length ? Math.min(...numericPositions) : null;
          const bestYears = bestPosition === null ? [] : rksYears.filter((year, index) => lowerSeries[index] === bestPosition);
          const bestText = bestYears.length ? `Najlepsza pozycja: ${bestPosition}. (${bestYears.join(', ')}).` : 'Brak danych o pozycji.';
          rksDetailsChartNote.textContent = isScore
            ? 'Wynik jest normalizowany w skali 0–100 osobno dla kierunku i edycji rankingu.'
            : `${bestText} Niższa wartość oznacza lepsze miejsce; pasmo pokazuje przedział ex aequo.`;
        }
      }
      const legendLine = rksDetailsLegend?.querySelector('span:first-child');
      const legendText = rksDetailsLegend?.querySelector('span:last-child');
      if (legendLine) legendLine.style.backgroundColor = chartColor;
      if (legendText) legendText.textContent = isIndicator ? `${metricLabel} 0–100` : (isScore ? 'Punktacja 0–100' : 'Pozycja / przedział');
      rksDetailsCanvas.setAttribute('aria-label', isIndicator
        ? `${subjectName}: ${metricLabel} w Rankingu Kierunków Studiów 2020–2026`
        : `${subjectName}: ${isScore ? 'punktacja' : 'pozycja'} w Rankingu Kierunków Studiów 2020–2026`);

      const sourceSlug = rksIndicatorSubjects[subjectName]?.slug;
      if (rksDetailsSourceLink && sourceSlug) {
        rksDetailsSourceLink.href = `https://ranking.perspektywy.pl/ranking-kierunkow-studiow/${sourceSlug}/`;
        rksDetailsSourceLink.textContent = `oficjalne tabele Perspektywy: ${subjectName}, edycje 2020–2026`;
      }

      if (!rksDetailsChart) {
        rksDetailsChart = new Chart(rksDetailsCanvas, {
          type: 'line',
          data: { labels: rksYears, datasets: [] },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    if (context.datasetIndex !== 0) return null;
                    if (rksDetailsChart.$mode === 'indicator') {
                      if (typeof context.parsed.y !== 'number') return 'Brak danych';
                      const weight = rksDetailsChart.$weightSeries?.[context.dataIndex];
                      return typeof weight === 'number'
                        ? [`Wynik: ${formatRKSIndicatorValue(context.parsed.y)}`, `Waga: ${formatRKSMetricWeight(weight)}%`]
                        : `Wynik: ${formatRKSIndicatorValue(context.parsed.y)}`;
                    }
                    if (rksDetailsChart.$mode === 'score') {
                      return typeof context.parsed.y === 'number'
                        ? `Punktacja: ${formatRKSScore(context.parsed.y)}`
                        : 'Brak danych';
                    }
                    const rawValue = rksDetailsChart.$rawSeries?.[context.dataIndex];
                    return rawValue == null ? 'Brak danych' : `Pozycja: ${rawValue}`;
                  }
                }
              }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#475569', font: { weight: '600' } } },
              y: {
                grid: { color: 'rgba(148, 163, 184, 0.2)' },
                ticks: { color: '#475569' },
                title: { display: true, text: '' }
              }
            }
          }
        });
      }

      rksDetailsChart.data.labels = rksYears;
      rksDetailsChart.$mode = isIndicator ? 'indicator' : rksDetailsMode;
      rksDetailsChart.$rawSeries = rawSeries;
      rksDetailsChart.$weightSeries = isIndicator ? snapshots.map(({ weight }) => weight) : [];
      const yAxis = rksDetailsChart.options.scales.y;
      delete yAxis.min;
      delete yAxis.max;
      delete yAxis.suggestedMin;
      delete yAxis.suggestedMax;

      if (isIndicator) {
        rksDetailsChart.data.datasets = [{
          label: metricLabel,
          data: snapshots.map(({ value }) => value),
          borderColor: indicatorColor,
          backgroundColor: 'rgba(8, 145, 178, 0.12)',
          pointBackgroundColor: indicatorColor,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2.5,
          tension: 0.25,
          spanGaps: false,
          fill: false
        }];
        yAxis.reverse = false;
        yAxis.min = 0;
        yAxis.max = 105;
        yAxis.ticks.stepSize = 10;
        yAxis.ticks.callback = (value) => value > 100 ? '' : Number(value).toLocaleString('pl-PL');
        yAxis.title.text = 'Wynik wskaźnika (0–100)';
      } else if (isScore) {
        rksDetailsChart.data.datasets = [{
          label: 'Punktacja 0–100',
          data: scoreSeries,
          borderColor: '#059669',
          backgroundColor: 'rgba(5, 150, 105, 0.12)',
          pointBackgroundColor: '#059669',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2.5,
          tension: 0.25,
          spanGaps: false,
          fill: false
        }];
        const numericScores = scoreSeries.filter((value) => typeof value === 'number');
        const minScore = numericScores.length ? Math.min(...numericScores) : 0;
        const maxScore = numericScores.length ? Math.max(...numericScores) : 100;
        const scorePadding = Math.max((maxScore - minScore) * 0.15, 4);
        yAxis.reverse = false;
        yAxis.suggestedMin = Math.max(0, minScore - scorePadding);
        yAxis.suggestedMax = Math.min(100, maxScore + scorePadding);
        yAxis.ticks.stepSize = undefined;
        yAxis.ticks.callback = (value) => Number(value).toLocaleString('pl-PL');
        yAxis.title.text = 'Punktacja (0–100)';
      } else {
        rksDetailsChart.data.datasets = [
          {
            label: 'Dolna granica pozycji',
            data: lowerSeries,
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(79, 70, 229, 0.14)',
            pointBackgroundColor: '#4f46e5',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
            borderWidth: 2.5,
            tension: 0.25,
            spanGaps: false,
            fill: '+1'
          },
          {
            label: 'Górna granica pozycji',
            data: upperSeries,
            borderColor: 'rgba(129, 140, 248, 0.72)',
            backgroundColor: 'rgba(79, 70, 229, 0.05)',
            pointRadius: 3,
            borderWidth: 1.5,
            borderDash: [5, 4],
            tension: 0.25,
            spanGaps: false,
            fill: false
          }
        ];
        const allPositions = lowerSeries.concat(upperSeries).filter((value) => typeof value === 'number');
        const minPosition = allPositions.length ? Math.min(...allPositions) : 1;
        const maxPosition = allPositions.length ? Math.max(...allPositions) : 10;
        const positionPadding = Math.max(Math.ceil((maxPosition - minPosition) * 0.12), 1);
        yAxis.reverse = true;
        yAxis.suggestedMin = Math.max(1, minPosition - positionPadding);
        yAxis.suggestedMax = maxPosition + positionPadding;
        yAxis.ticks.stepSize = 1;
        yAxis.ticks.callback = (value) => Math.round(value);
        yAxis.title.text = 'Pozycja (niżej = lepiej)';
      }

      rksDetailsChart.update();
      rksDetailsChart.resize();
    };
    const updateRKSChart = (subjectName) => {
      currentRKSSubject = subjectName;
      syncRKSSubjectControls(subjectName);
      renderRKSChart();
      if (rksDetailsModal && !rksDetailsModal.classList.contains('hidden')) renderRKSDetails();
    };

    if (defaultSubject) {
      updateRKSChart(defaultSubject);
    }

    rksSelect.addEventListener('change', (event) => {
      updateRKSChart(event.target.value);
    });

    if (rksMethodologySubjectSelect) {
      rksMethodologySubjectSelect.addEventListener('change', (event) => {
        updateRKSChart(event.target.value);
      });
    }

    if (rksToggle) {
      rksToggle.addEventListener('click', () => {
        rksMode = rksMode === 'position' ? 'score' : 'position';
        renderRKSChart();
      });
    }

    rksDetailsSubjectSelect?.addEventListener('change', (event) => {
      updateRKSChart(event.target.value);
    });

    rksDetailsMetricSelect?.addEventListener('change', () => {
      renderRKSDetails();
    });

    rksDetailsModeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        rksDetailsMode = button.dataset.rksDetailsMode === 'score' ? 'score' : 'position';
        renderRKSDetails();
      });
    });

    rksDetailsMethodologyOpen?.addEventListener('click', () => {
      closeInternationalMethodology(rksDetailsModal, false);
      requestAnimationFrame(() => rksMethodologyOpen?.click());
    });
  }

  let theWurDetailsChart = null;

  const formatTheWurScore = (value) => typeof value === 'number'
    ? value.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
    : '—';

  const createTheWurYearCard = (year, index, metricKey) => {
    const isPosition = metricKey === 'position';
    const pillar = isPosition ? null : theWurDetailsData.pillars[metricKey];
    const value = pillar?.values[index];
    const card = document.createElement('article');
    card.className = 'rks-details-year';
    card.setAttribute('role', 'listitem');

    const yearLabel = document.createElement('div');
    yearLabel.className = 'year';
    yearLabel.textContent = year;

    const primary = document.createElement('div');
    primary.className = 'position';
    primary.textContent = isPosition ? theWurDetailsData.rankLabels[index] : formatTheWurScore(value);

    const primaryLabel = document.createElement('span');
    primaryLabel.className = 'position-label';
    primaryLabel.textContent = isPosition ? 'opublikowane pasmo' : 'wynik filaru 0–100';

    const secondary = document.createElement('span');
    secondary.className = 'score';
    secondary.textContent = isPosition
      ? 'wynik pasma ' + formatTheWurScore(theWurDetailsData.scoreRangeLower[index]) + '–' + formatTheWurScore(theWurDetailsData.scoreRangeUpper[index])
      : 'pozycja ' + theWurDetailsData.rankLabels[index];

    card.append(yearLabel, primary, primaryLabel, secondary);
    return card;
  };

  renderTheWurDetails = () => {
    if (!theWurDetailsCanvas || !theWurDetailsData?.years?.length) return;
    const metricKey = theWurDetailsMetricSelect?.value || 'position';
    const isPosition = metricKey === 'position';
    const pillar = isPosition ? null : theWurDetailsData.pillars[metricKey];
    const years = theWurDetailsData.years;
    const latestIndex = years.length - 1;
    const latestPillars = Object.values(theWurDetailsData.pillars)
      .map((item) => ({ label: item.sourceLabel, value: item.values[latestIndex] }))
      .sort((a, b) => b.value - a.value);
    const strongest = latestPillars[0];

    if (theWurDetailsLatestPosition) theWurDetailsLatestPosition.textContent = theWurDetailsData.rankLabels[latestIndex];
    if (theWurDetailsStrongestPillar) theWurDetailsStrongestPillar.textContent = strongest ? strongest.label + ' ' + formatTheWurScore(strongest.value) : '—';
    if (theWurDetailsBestBand) theWurDetailsBestBand.textContent = theWurDetailsData.rankLabels[0];
    if (theWurDetailsCoverage) theWurDetailsCoverage.textContent = years.length + ' / ' + years.length;
    theWurDetailsYearCards?.replaceChildren(...years.map((year, index) => createTheWurYearCard(year, index, metricKey)));
    theWurDetailsChangeNotice?.classList.toggle('hidden', !pillar?.changedIn2024);

    const legendLine = theWurDetailsLegend?.querySelector('span:first-child');
    const legendText = theWurDetailsLegend?.querySelector('span:last-child');
    const color = isPosition ? '#0e7490' : '#4f46e5';
    if (legendLine) legendLine.style.backgroundColor = color;
    if (legendText) legendText.textContent = isPosition ? 'Opublikowane pasmo' : pillar.sourceLabel + ' · wynik 0–100';

    if (isPosition) {
      if (theWurDetailsChartTitle) theWurDetailsChartTitle.textContent = 'Pozycja globalna PW — pasma 2020–2026';
      if (theWurDetailsChartNote) theWurDetailsChartNote.textContent = 'W edycjach 2020–2022 znak „+” wyznacza tylko początek otwartego pasma. Od 2023 PW znajduje się w paśmie 1201–1500.';
      theWurDetailsCanvas.setAttribute('aria-label', 'Opublikowane pasma pozycji Politechniki Warszawskiej w THE World University Rankings 2020–2026');
    } else {
      const firstValue = pillar.values[0];
      const latestValue = pillar.values[latestIndex];
      const change = latestValue - firstValue;
      if (theWurDetailsChartTitle) theWurDetailsChartTitle.textContent = pillar.label + ' — wynik 2020–2026';
      if (theWurDetailsChartNote) {
        theWurDetailsChartNote.textContent = pillar.changedIn2024
          ? pillar.sourceLabel + ': od edycji 2024 obowiązuje szersza definicja filaru, dlatego seria nie jest w pełni porównywalna w czasie.'
          : 'Zmiana względem 2020: ' + (change >= 0 ? '+' : '−') + formatTheWurScore(Math.abs(change)) + ' pkt. Wyższy wynik oznacza lepszą ocenę.';
      }
      theWurDetailsCanvas.setAttribute('aria-label', pillar.label + ': wynik Politechniki Warszawskiej w THE World University Rankings 2020–2026');
    }

    if (!theWurDetailsChart) {
      theWurDetailsChart = new Chart(theWurDetailsCanvas, {
        type: 'line',
        data: { labels: years, datasets: [] },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context) => {
                  if (theWurDetailsChart.$mode === 'position') {
                    return context.datasetIndex === 0
                      ? 'Pozycja: ' + theWurDetailsChart.$rankLabels[context.dataIndex]
                      : null;
                  }
                  return typeof context.parsed.y === 'number'
                    ? 'Wynik: ' + formatTheWurScore(context.parsed.y)
                    : 'Brak danych';
                }
              }
            }
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#475569', font: { weight: '600' } } },
            y: {
              grid: { color: 'rgba(148,163,184,0.2)' },
              ticks: { color: '#475569' },
              title: { display: true, text: '' }
            }
          }
        }
      });
    }

    theWurDetailsChart.$mode = metricKey;
    theWurDetailsChart.$rankLabels = theWurDetailsData.rankLabels;
    theWurDetailsChart.data.labels = years;
    const yAxis = theWurDetailsChart.options.scales.y;

    if (isPosition) {
      theWurDetailsChart.data.datasets = [
        {
          label: 'Początek pasma', data: theWurDetailsData.rankLower, borderColor: '#0e7490',
          backgroundColor: 'rgba(14,116,144,0.13)', fill: '+1', pointBackgroundColor: '#0e7490',
          pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6,
          borderWidth: 2.5, tension: 0.2, spanGaps: false
        },
        {
          label: 'Koniec pasma', data: theWurDetailsData.rankUpper, borderColor: 'rgba(14,116,144,0.5)',
          backgroundColor: 'transparent', fill: false, pointBackgroundColor: '#67e8f9',
          pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6,
          borderWidth: 2, borderDash: [6, 4], tension: 0.2, spanGaps: false
        }
      ];
      yAxis.reverse = true;
      yAxis.min = 900;
      yAxis.max = 1550;
      yAxis.ticks.stepSize = 100;
      yAxis.ticks.callback = (value) => Math.round(value);
      yAxis.title.text = 'Pozycja (niższa wartość = lepiej)';
    } else {
      theWurDetailsChart.data.datasets = [{
        label: pillar.sourceLabel, data: pillar.values, borderColor: '#4f46e5',
        backgroundColor: 'rgba(79,70,229,0.1)', fill: false, pointBackgroundColor: '#4f46e5',
        pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6,
        borderWidth: 2.5, tension: 0.22, spanGaps: false
      }];
      yAxis.reverse = false;
      yAxis.min = 0;
      yAxis.max = 100;
      yAxis.ticks.stepSize = 10;
      yAxis.ticks.callback = (value) => Number(value).toLocaleString('pl-PL');
      yAxis.title.text = 'Wynik filaru (0–100)';
    }

    theWurDetailsChart.update();
    theWurDetailsChart.resize();
  };

  theWurDetailsMetricSelect?.addEventListener('change', renderTheWurDetails);
  theWurDetailsMethodologyOpen?.addEventListener('click', () => {
    closeInternationalMethodology(theWurDetailsModal, false);
    requestAnimationFrame(() => document.getElementById('theWurMethodologyOpen')?.click());
  });

  new Chart(document.getElementById('chartTHE'), {
    type: 'line',
    data: {
      labels: theYears,
      datasets: [
        {
          label: 'Najlepsza pozycja w przedziale',
          data: theLower,
          borderColor: 'rgb(14,116,144)',
          fill: '+1',
          backgroundColor: 'rgba(14,116,144,0.12)',
          tension: 0.25,
          pointRadius: 3,
          spanGaps: true,
          borderWidth: 2
        },
        {
          label: 'Najsłabsza pozycja w przedziale',
          data: theUpper,
          borderColor: 'rgba(14,116,144,0.5)',
          fill: false,
          tension: 0.25,
          pointRadius: 3,
          spanGaps: true,
          borderDash: [6, 4],
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          display: true,
          labels: {
            usePointStyle: true,
            pointStyle: 'line',
            boxHeight: 2
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const index = context.dataIndex;
              const lower = theLower[index];
              const upper = theUpper[index];
              if (context.datasetIndex !== 0) {
                return null;
              }
              const publishedLabel = theWurDetailsData?.rankLabels?.[index];
              if (publishedLabel) return `Pozycja: ${publishedLabel}`;
              if (lower === upper || typeof upper !== 'number') return `Pozycja: ${Math.round(lower)}+`;
              return `Pozycja: ${Math.round(lower)}-${Math.round(upper)}`;
            }
          }
        }
      },
      scales: {
        y: {
          reverse: true,
          suggestedMin: 1200,
          suggestedMax: 700,
          ticks: {
            callback: (value) => Math.round(value),
            stepSize: 50
          },
          grid: { color: 'rgba(17,24,39,0.08)' },
          title: { display: true, text: 'Pozycja (wyżej = lepiej)' }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  });

  let arwuDetailsChart = null;

  const formatArwuScore = (value) => typeof value === 'number'
    ? value.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
    : '—';

  const createArwuYearCard = (year, index, metricKey) => {
    const isWorld = metricKey === 'worldPosition';
    const isNational = metricKey === 'nationalPosition';
    const indicator = isWorld || isNational ? null : arwuDetailsData.indicators[metricKey];
    const card = document.createElement('article');
    card.className = 'rks-details-year';
    card.setAttribute('role', 'listitem');

    const yearLabel = document.createElement('div');
    yearLabel.className = 'year';
    yearLabel.textContent = year;

    const primary = document.createElement('div');
    primary.className = 'position';
    primary.textContent = isWorld
      ? arwuDetailsData.worldRankLabels[index]
      : isNational
        ? arwuDetailsData.nationalRankLabels[index]
        : formatArwuScore(indicator?.values[index]);

    const primaryLabel = document.createElement('span');
    primaryLabel.className = 'position-label';
    primaryLabel.textContent = isWorld
      ? 'pasmo światowe'
      : isNational
        ? 'pasmo w Polsce'
        : 'wynik wskaźnika 0–100';

    const secondary = document.createElement('span');
    secondary.className = 'score';
    secondary.textContent = isWorld
      ? 'Polska ' + arwuDetailsData.nationalRankLabels[index]
      : isNational
        ? 'świat ' + arwuDetailsData.worldRankLabels[index]
        : 'waga ' + indicator.weight + '% · świat ' + arwuDetailsData.worldRankLabels[index];

    card.append(yearLabel, primary, primaryLabel, secondary);
    return card;
  };

  renderArwuDetails = () => {
    if (!arwuDetailsCanvas || !arwuDetailsData?.years?.length) return;
    const metricKey = arwuDetailsMetricSelect?.value || 'worldPosition';
    const isWorld = metricKey === 'worldPosition';
    const isNational = metricKey === 'nationalPosition';
    const isPosition = isWorld || isNational;
    const indicator = isPosition ? null : arwuDetailsData.indicators[metricKey];
    const years = arwuDetailsData.years;
    const latestIndex = years.length - 1;
    const periodLabel = years[0] + '–' + years[latestIndex];
    const latestYear = years[latestIndex];
    const strongest = Object.values(arwuDetailsData.indicators)
      .map((item) => ({ label: item.shortLabel, value: item.values[latestIndex] }))
      .sort((a, b) => b.value - a.value)[0];

    if (arwuDetailsLatestWorld) arwuDetailsLatestWorld.textContent = arwuDetailsData.worldRankLabels[latestIndex];
    if (arwuDetailsLatestNational) arwuDetailsLatestNational.textContent = arwuDetailsData.nationalRankLabels[latestIndex];
    if (arwuDetailsStrongest) arwuDetailsStrongest.textContent = strongest ? strongest.label + ' ' + formatArwuScore(strongest.value) : '—';
    if (arwuDetailsCoverage) arwuDetailsCoverage.textContent = years.length + ' / ' + years.length;
    arwuDetailsYearCards?.replaceChildren(...years.map((year, index) => createArwuYearCard(year, index, metricKey)));

    const allZero = Boolean(indicator) && indicator.values.every((value) => value === 0);
    arwuDetailsZeroNotice?.classList.toggle('hidden', !allZero);

    const legendLine = arwuDetailsLegend?.querySelector('span:first-child');
    const legendText = arwuDetailsLegend?.querySelector('span:last-child');
    if (legendLine) legendLine.style.backgroundColor = isPosition ? '#e11d48' : '#4f46e5';
    if (legendText) {
      legendText.textContent = isWorld
        ? 'Pasmo światowe'
        : isNational
          ? 'Pasmo krajowe'
          : indicator.shortLabel + ' · wynik 0–100';
    }

    if (isWorld) {
      if (arwuDetailsChartTitle) arwuDetailsChartTitle.textContent = 'Pozycja światowa PW — pasma ' + periodLabel;
      if (arwuDetailsChartNote) arwuDetailsChartNote.textContent = 'W 2020 PW zajmowała pasmo 801–900; od edycji 2021 pozostaje w paśmie 901–1000. Dokładne miejsce wewnątrz pasma nie jest publikowane.';
      arwuDetailsCanvas.setAttribute('aria-label', 'Pasma światowej pozycji Politechniki Warszawskiej w ARWU ' + periodLabel);
    } else if (isNational) {
      if (arwuDetailsChartTitle) arwuDetailsChartTitle.textContent = 'Pozycja PW w Polsce — pasma ' + periodLabel;
      if (arwuDetailsChartNote) arwuDetailsChartNote.textContent = 'Pozycja krajowa jest również publikowana jako przedział. W ' + latestYear + ' PW znalazła się na miejscach ' + arwuDetailsData.nationalRankLabels[latestIndex] + ' w Polsce.';
      arwuDetailsCanvas.setAttribute('aria-label', 'Pasma krajowej pozycji Politechniki Warszawskiej w ARWU ' + periodLabel);
    } else {
      const first = indicator.values[0];
      const latest = indicator.values[latestIndex];
      const change = latest - first;
      if (arwuDetailsChartTitle) arwuDetailsChartTitle.textContent = indicator.shortLabel + ' — ' + indicator.label + ', ' + periodLabel;
      if (arwuDetailsChartNote) {
        arwuDetailsChartNote.textContent = allZero
          ? 'Opublikowany wynik wynosi 0,0 we wszystkich ' + years.length + ' edycjach. Waga wskaźnika w ARWU: ' + indicator.weight + '%.'
          : 'Zmiana względem 2020: ' + (change >= 0 ? '+' : '−') + formatArwuScore(Math.abs(change)) + ' pkt. Waga wskaźnika: ' + indicator.weight + '%. Wyniki są normalizowane względem lidera każdej edycji.';
      }
      arwuDetailsCanvas.setAttribute('aria-label', indicator.shortLabel + ': wynik Politechniki Warszawskiej w ARWU ' + periodLabel);
    }

    if (!arwuDetailsChart) {
      arwuDetailsChart = new Chart(arwuDetailsCanvas, {
        type: 'line',
        data: { labels: years, datasets: [] },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context) => {
                  if (arwuDetailsChart.$isPosition) {
                    return context.datasetIndex === 0
                      ? 'Pozycja: ' + arwuDetailsChart.$bandLabels[context.dataIndex]
                      : null;
                  }
                  return typeof context.parsed.y === 'number'
                    ? 'Wynik: ' + formatArwuScore(context.parsed.y)
                    : 'Brak danych';
                }
              }
            }
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#475569', font: { weight: '600' } } },
            y: {
              grid: { color: 'rgba(148,163,184,0.2)' },
              ticks: { color: '#475569' },
              title: { display: true, text: '' }
            }
          }
        }
      });
    }

    arwuDetailsChart.$isPosition = isPosition;
    arwuDetailsChart.data.labels = years;
    const yAxis = arwuDetailsChart.options.scales.y;

    if (isPosition) {
      const lower = isWorld ? arwuDetailsData.worldRankLower : arwuDetailsData.nationalRankLower;
      const upper = isWorld ? arwuDetailsData.worldRankUpper : arwuDetailsData.nationalRankUpper;
      arwuDetailsChart.$bandLabels = isWorld ? arwuDetailsData.worldRankLabels : arwuDetailsData.nationalRankLabels;
      arwuDetailsChart.data.datasets = [
        {
          label: 'Początek pasma', data: lower, borderColor: '#e11d48',
          backgroundColor: 'rgba(225,29,72,0.13)', fill: '+1', pointBackgroundColor: '#e11d48',
          pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6,
          borderWidth: 2.5, tension: 0.2, spanGaps: false
        },
        {
          label: 'Koniec pasma', data: upper, borderColor: 'rgba(225,29,72,0.5)',
          backgroundColor: 'transparent', fill: false, pointBackgroundColor: '#fda4af',
          pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6,
          borderWidth: 2, borderDash: [6, 4], tension: 0.2, spanGaps: false
        }
      ];
      yAxis.reverse = true;
      yAxis.min = isWorld ? 750 : 1;
      yAxis.max = isWorld ? 1050 : 12;
      yAxis.ticks.stepSize = isWorld ? 50 : 1;
      yAxis.ticks.callback = (value) => Math.round(value);
      yAxis.title.text = isWorld ? 'Pozycja światowa (niżej = lepiej)' : 'Pozycja w Polsce (niżej = lepiej)';
    } else {
      const values = indicator.values;
      const minValue = Math.min(...values);
      const maxValue = Math.max(...values);
      const spread = maxValue - minValue;
      const padding = spread === 0 ? (maxValue === 0 ? 5 : 1) : Math.max(spread * 0.3, 0.5);
      arwuDetailsChart.data.datasets = [{
        label: indicator.shortLabel, data: values, borderColor: '#4f46e5',
        backgroundColor: 'rgba(79,70,229,0.1)', fill: false, pointBackgroundColor: '#4f46e5',
        pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6,
        borderWidth: 2.5, tension: 0.22, spanGaps: false
      }];
      yAxis.reverse = false;
      yAxis.min = Math.max(0, minValue - padding);
      yAxis.max = Math.min(100, maxValue + padding);
      if (yAxis.max <= yAxis.min) yAxis.max = yAxis.min + 10;
      yAxis.ticks.stepSize = undefined;
      yAxis.ticks.callback = (value) => Number(value).toLocaleString('pl-PL');
      yAxis.title.text = 'Wynik wskaźnika (0–100)';
    }

    arwuDetailsChart.update();
    arwuDetailsChart.resize();
  };

  arwuDetailsMetricSelect?.addEventListener('change', renderArwuDetails);
  arwuDetailsMethodologyOpen?.addEventListener('click', () => {
    closeInternationalMethodology(arwuDetailsModal, false);
    requestAnimationFrame(() => document.getElementById('arwuMethodologyOpen')?.click());
  });

  new Chart(document.getElementById('chartARWU'), {
    type: 'line',
    data: {
      labels: arwuYears,
      datasets: [
        {
          label: 'Najlepsza pozycja w przedziale',
          data: arwuLower,
          borderColor: 'rgb(220,38,38)',
          backgroundColor: 'rgba(220,38,38,0.18)',
          fill: '+1',
          tension: 0.25,
          pointRadius: 3,
          spanGaps: true
        },
        {
          label: 'Najsłabsza pozycja w przedziale',
          data: arwuUpper,
          borderColor: 'rgb(248,113,113)',
          backgroundColor: 'rgba(248,113,113,0.12)',
          fill: false,
          tension: 0.25,
          pointRadius: 2,
          borderDash: [6, 4],
          spanGaps: true
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          display: true,
          labels: { color: '#1f2937', usePointStyle: true, pointStyle: 'line', boxHeight: 2 }
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const index = context.dataIndex;
              const lower = arwuLower[index];
              const upper = arwuUpper[index];
              if (context.datasetIndex !== 0) {
                return null;
              }
              if (lower === upper) {
                return `Pozycja: ${lower}`;
              }
              return `Pozycja: ${lower}-${upper}`;
            }
          }
        }
      },
      scales: {
        y: {
          reverse: true,
          suggestedMin: 1100,
          suggestedMax: 700,
          ticks: {
            callback: (value) => Math.round(value),
            stepSize: 50
          },
          grid: { color: 'rgba(17,24,39,0.08)' },
          title: { display: true, text: 'Pozycja (wyżej = lepiej)' }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  });

  const perspektywyCanvas = document.getElementById('chartPerspektywy');
  const perspektywyToggle = document.getElementById('perspektywyToggle');
  let perspektywyMode = 'position';
  const perspektywyNote = document.getElementById('perspektywyNote');
  let perspektywyChart;

  if (perspektywyCanvas) {
    perspektywyChart = new Chart(perspektywyCanvas, {
      type: 'line',
      data: {
        labels: perspektywyYears,
        datasets: [
          {
            label: '',
            data: [],
            borderColor: 'rgba(79,70,229,0.85)',
            backgroundColor: 'rgba(79,70,229,0.15)',
            tension: 0.3,
            pointRadius: 4,
            fill: false,
            spanGaps: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: () => ''
            }
          }
        },
        scales: {
          y: {
            reverse: true,
            min: 1,
            max: 4,
            ticks: {
              stepSize: 1,
              callback: (value) => (value >= 1 && value <= 4 ? value : null)
            },
            grid: { color: 'rgba(17,24,39,0.08)' },
            title: { display: true, text: 'Pozycja (im mniejsza, tym lepiej)' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });

    const setPerspektywyMode = (mode) => {
      updateSegmentedToggle(perspektywyToggle, mode === 'score' ? 'score' : 'position');
      const dataset = perspektywyChart.data.datasets[0];
      const yAxis = perspektywyChart.options.scales.y;

      if (mode === 'score') {
        perspektywyChart.data.labels = perspektywyYears;
        dataset.label = 'WSK (0-100)';
        dataset.data = perspektywyScores;
        dataset.borderColor = 'rgba(16,185,129,0.85)';
        dataset.backgroundColor = 'rgba(16,185,129,0.15)';

        yAxis.reverse = false;
        yAxis.min = 75;
        yAxis.max = 100;
        yAxis.ticks.stepSize = 2;
        yAxis.ticks.callback = (value) => (typeof value === 'number' ? value.toFixed(0) : value);
        yAxis.title.text = 'WSK (im wyższy, tym lepiej)';

        perspektywyChart.options.plugins.tooltip.callbacks.label = (context) => {
          const value = context.parsed.y;
          return value !== null && value !== undefined ? `WSK: ${value.toFixed(1)}` : 'Brak danych';
        };
        if (perspektywyNote) {
          perspektywyNote.textContent = 'Historyczne dane WSK z pliku rankingi.xlsx pokazują wzrost PW: 78,9 pkt w 2020 → 92,3 pkt w 2026.';
        }
      } else {
        perspektywyChart.data.labels = perspektywyYears;
        dataset.label = 'Pozycja (im wyżej, tym lepiej)';
        dataset.data = perspektywyPositions;
        dataset.borderColor = 'rgba(79,70,229,0.85)';
        dataset.backgroundColor = 'rgba(79,70,229,0.15)';

        yAxis.reverse = true;
        yAxis.min = 1;
        yAxis.max = 4;
        yAxis.ticks.stepSize = 1;
        yAxis.ticks.callback = (value) => (value >= 1 && value <= 4 ? value : null);
        yAxis.title.text = 'Pozycja (im mniejsza, tym lepiej)';

        perspektywyChart.options.plugins.tooltip.callbacks.label = (context) => {
          const value = context.parsed.y;
          return value ? `Pozycja: ${value}` : 'Brak danych';
        };
        if (perspektywyNote) {
          perspektywyNote.textContent = 'Politechnika Warszawska utrzymuje 3 miejsce w rankingu w całej serii 2020–2026; WSK wzrósł do 92,3 pkt.';
        }
      }

      perspektywyChart.update();
    };

    setPerspektywyMode(perspektywyMode);

    if (perspektywyToggle) {
      perspektywyToggle.addEventListener('click', () => {
        perspektywyMode = perspektywyMode === 'position' ? 'score' : 'position';
        setPerspektywyMode(perspektywyMode);

        const isScore = perspektywyMode === 'score';
        updateSegmentedToggle(perspektywyToggle, isScore ? 'score' : 'position');
      });
    }
  }

  const engiCanvas = document.getElementById('chartEngi');
  const engiToggle = document.getElementById('engiToggle');
  const engiNote = document.getElementById('engiNote');
  let engiMode = 'position';
  let engiChart;

  if (engiCanvas) {
    engiChart = new Chart(engiCanvas, {
      type: 'line',
      data: {
        labels: engiYears,
        datasets: [
          {
            label: '',
            data: [],
            borderColor: 'rgba(79,70,229,0.85)',
            backgroundColor: 'rgba(79,70,229,0.15)',
            tension: 0.3,
            pointRadius: 4,
            fill: false,
            spanGaps: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: () => ''
            }
          }
        },
        scales: {
          y: {
            reverse: true,
            min: 60,
            max: 80,
            ticks: {
              stepSize: 2,
              callback: (value) => (typeof value === 'number' ? value.toFixed(0) : value)
            },
            grid: { color: 'rgba(17,24,39,0.08)' },
            title: { display: true, text: 'Pozycja (im mniejsza, tym lepiej)' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });

    const setEngiMode = (mode) => {
      updateSegmentedToggle(engiToggle, mode === 'score' ? 'score' : 'position');
      const dataset = engiChart.data.datasets[0];
      const yAxis = engiChart.options.scales.y;

      if (mode === 'score') {
        dataset.label = 'Wynik 0–100';
        dataset.data = engiScores;
        dataset.borderColor = 'rgba(16,185,129,0.85)';
        dataset.backgroundColor = 'rgba(16,185,129,0.15)';

        yAxis.reverse = false;
        yAxis.min = 58;
        yAxis.max = 65;
        yAxis.ticks.stepSize = 1;
        yAxis.ticks.callback = (value) => (typeof value === 'number' ? value.toFixed(1) : value);
        yAxis.title.text = 'Wynik (im wyższy, tym lepiej)';

        engiChart.options.plugins.tooltip.callbacks.label = (context) => {
          const value = context.parsed.y;
          return value !== null && value !== undefined ? `Wynik: ${value.toFixed(2)}` : 'Brak danych';
        };
        if (engiNote) {
          engiNote.textContent = 'PW w EngiRank 2025 zajęła pozycję 72= (ex aequo) z wynikiem 63,82.';
        }
      } else {
        dataset.label = 'Pozycja (im wyżej, tym lepiej)';
        dataset.data = engiPositions;
        dataset.borderColor = 'rgba(79,70,229,0.85)';
        dataset.backgroundColor = 'rgba(79,70,229,0.15)';

        yAxis.reverse = true;
        yAxis.min = 60;
        yAxis.max = 80;
        yAxis.ticks.stepSize = 2;
        yAxis.ticks.callback = (value) => (typeof value === 'number' ? value.toFixed(0) : value);
        yAxis.title.text = 'Pozycja (im mniejsza, tym lepiej)';

        engiChart.options.plugins.tooltip.callbacks.label = (context) => {
          const value = context.parsed.y;
          return value !== null && value !== undefined ? `Pozycja: ${engiRankLabels?.[context.dataIndex] || value}` : 'Brak danych';
        };
        if (engiNote) {
          engiNote.textContent = 'PW w EngiRank 2025 zajęła pozycję 72= (ex aequo) z wynikiem 63,82.';
        }
      }

      engiChart.update();
    };

    let engiDetailsMode = 'position';
    let engiDetailsChart = null;

    const formatEngiMainScore = (value) => typeof value === 'number'
      ? value.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      : '—';

    const createEngiMainYearCard = (year, positionValue, rankLabel, scoreValue) => {
      const hasPosition = typeof positionValue === 'number';
      const card = document.createElement('article');
      card.className = 'rks-details-year' + (hasPosition ? '' : ' missing');
      card.setAttribute('role', 'listitem');
      const yearLabel = document.createElement('div');
      yearLabel.className = 'year';
      yearLabel.textContent = year;
      const position = document.createElement('div');
      position.className = 'position';
      position.textContent = hasPosition ? (rankLabel || positionValue) : '—';
      const positionLabel = document.createElement('span');
      positionLabel.className = 'position-label';
      positionLabel.textContent = hasPosition ? 'pozycja' : 'brak danych';
      const score = document.createElement('span');
      score.className = 'score';
      score.textContent = typeof scoreValue === 'number' ? `wynik ${formatEngiMainScore(scoreValue)}` : 'brak wyniku';
      card.append(yearLabel, position, positionLabel, score);
      return card;
    };

    renderEngiDetails = () => {
      if (!engiDetailsCanvas || !engiYears.length) return;
      const latestIndex = engiYears.length - 1;
      const numericPositions = engiPositions.filter((value) => typeof value === 'number');
      const bestPosition = numericPositions.length ? Math.min(...numericPositions) : null;
      const bestYears = bestPosition === null ? [] : engiYears.filter((year, index) => engiPositions[index] === bestPosition);
      const positionChange = typeof engiPositions[0] === 'number' && typeof engiPositions[latestIndex] === 'number'
        ? engiPositions[0] - engiPositions[latestIndex]
        : null;
      const scoreChange = typeof engiScores[0] === 'number' && typeof engiScores[latestIndex] === 'number'
        ? engiScores[latestIndex] - engiScores[0]
        : null;

      if (engiDetailsLatestPosition) engiDetailsLatestPosition.textContent = typeof engiPositions[latestIndex] === 'number' ? (engiRankLabels?.[latestIndex] || `${engiPositions[latestIndex]}.`) : '—';
      if (engiDetailsLatestScore) engiDetailsLatestScore.textContent = formatEngiMainScore(engiScores[latestIndex]);
      if (engiDetailsBestPosition) {
        const bestIndex = engiPositions.indexOf(bestPosition);
        engiDetailsBestPosition.textContent = bestPosition === null ? '—' : (engiRankLabels?.[bestIndex] || `${bestPosition}.`);
      }
      if (engiDetailsPositionChange) {
        engiDetailsPositionChange.textContent = positionChange === null ? '—' : positionChange > 0 ? `${positionChange} ↑` : positionChange < 0 ? `${Math.abs(positionChange)} ↓` : '0';
        engiDetailsPositionChange.title = positionChange > 0 ? 'Poprawa pozycji od 2023' : positionChange < 0 ? 'Spadek pozycji od 2023' : 'Pozycja bez zmiany';
      }
      engiDetailsYearCards?.replaceChildren(...engiYears.map((year, index) =>
        createEngiMainYearCard(year, engiPositions[index], engiRankLabels?.[index], engiScores[index])));
      engiDetailsModeButtons.forEach((button) => {
        button.setAttribute('aria-pressed', (button.dataset.engiMainDetailsMode === engiDetailsMode).toString());
      });

      const isScore = engiDetailsMode === 'score';
      const chartColor = isScore ? '#059669' : '#4f46e5';
      const positionTrend = positionChange === null
        ? 'Brak pełnych danych do oceny zmiany pozycji.'
        : positionChange > 0
          ? `Poprawa o ${positionChange} ${positionChange === 1 ? 'miejsce' : 'miejsc'} względem 2023.`
          : positionChange < 0
            ? `Spadek o ${Math.abs(positionChange)} ${Math.abs(positionChange) === 1 ? 'miejsce' : 'miejsca'} względem 2023.`
            : 'Pozycja bez zmiany względem 2023.';
      const scoreTrend = scoreChange === null
        ? 'Brak pełnych danych do oceny zmiany wyniku.'
        : `Zmiana od 2023: ${scoreChange >= 0 ? '+' : '−'}${formatEngiMainScore(Math.abs(scoreChange))} pkt.`;

      if (engiDetailsChartTitle) engiDetailsChartTitle.textContent = `Politechnika Warszawska — ${isScore ? 'wynik' : 'pozycja'} 2023–2025`;
      if (engiDetailsChartNote) engiDetailsChartNote.textContent = isScore
        ? `${scoreTrend} Wynik 100 otrzymuje lider edycji.`
        : `${positionTrend} Najlepszy wynik: ${bestPosition ?? '—'}. miejsce${bestYears.length ? ` (${bestYears.join(', ')})` : ''}.`;
      const legendLine = engiDetailsLegend?.querySelector('span:first-child');
      const legendText = engiDetailsLegend?.querySelector('span:last-child');
      if (legendLine) legendLine.style.backgroundColor = chartColor;
      if (legendText) legendText.textContent = isScore ? 'Wynik 0–100' : 'Pozycja';
      engiDetailsCanvas.setAttribute('aria-label', `Politechnika Warszawska: ${isScore ? 'wynik' : 'pozycja'} w głównym EngiRank 2023–2025`);

      if (!engiDetailsChart) {
        engiDetailsChart = new Chart(engiDetailsCanvas, {
          type: 'line',
          data: { labels: engiYears, datasets: [] },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    if (engiDetailsChart.$mode === 'score') return typeof context.parsed.y === 'number' ? `Wynik: ${formatEngiMainScore(context.parsed.y)}` : 'Brak danych';
                    return typeof context.parsed.y === 'number' ? `Pozycja: ${context.parsed.y}` : 'Brak danych';
                  }
                }
              }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#475569', font: { weight: '600' } } },
              y: { grid: { color: 'rgba(148,163,184,0.2)' }, ticks: { color: '#475569' }, title: { display: true, text: '' } }
            }
          }
        });
      }

      engiDetailsChart.$mode = engiDetailsMode;
      const yAxis = engiDetailsChart.options.scales.y;
      if (isScore) {
        engiDetailsChart.data.datasets = [{
          label: 'Wynik 0–100', data: engiScores, borderColor: '#059669', backgroundColor: 'rgba(5,150,105,0.12)',
          pointBackgroundColor: '#059669', pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4,
          pointHoverRadius: 6, borderWidth: 2.5, tension: 0.25, fill: false
        }];
        const minScore = Math.min(...engiScores);
        const maxScore = Math.max(...engiScores);
        const padding = Math.max((maxScore - minScore) * 0.2, 1);
        yAxis.reverse = false;
        yAxis.suggestedMin = Math.max(0, minScore - padding);
        yAxis.suggestedMax = Math.min(100, maxScore + padding);
        yAxis.ticks.stepSize = undefined;
        yAxis.ticks.callback = (value) => Number(value).toLocaleString('pl-PL');
        yAxis.title.text = 'Wynik (0–100)';
      } else {
        engiDetailsChart.data.datasets = [{
          label: 'Pozycja', data: engiPositions, borderColor: '#4f46e5', backgroundColor: 'rgba(79,70,229,0.12)',
          pointBackgroundColor: '#4f46e5', pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4,
          pointHoverRadius: 6, borderWidth: 2.5, tension: 0.25, fill: false
        }];
        const minPosition = Math.min(...engiPositions);
        const maxPosition = Math.max(...engiPositions);
        const padding = Math.max(Math.ceil((maxPosition - minPosition) * 0.2), 2);
        yAxis.reverse = true;
        yAxis.suggestedMin = Math.max(1, minPosition - padding);
        yAxis.suggestedMax = maxPosition + padding;
        yAxis.ticks.stepSize = 1;
        yAxis.ticks.callback = (value) => Math.round(value);
        yAxis.title.text = 'Pozycja (niżej = lepiej)';
      }
      engiDetailsChart.update();
      engiDetailsChart.resize();
    };

    engiDetailsModeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        engiDetailsMode = button.dataset.engiMainDetailsMode === 'score' ? 'score' : 'position';
        renderEngiDetails();
      });
    });

    engiDetailsMethodologyOpen?.addEventListener('click', () => {
      closeInternationalMethodology(engiDetailsModal, false);
      requestAnimationFrame(() => engiMethodologyOpenButton?.click());
    });
    setEngiMode(engiMode);

    if (engiToggle) {
      engiToggle.addEventListener('click', () => {
        engiMode = engiMode === 'position' ? 'score' : 'position';
        setEngiMode(engiMode);

        const isScore = engiMode === 'score';
        updateSegmentedToggle(engiToggle, isScore ? 'score' : 'position');
      });
    }
  }

  // Dynamiczne profile wag w modalach metodyk międzynarodowych.
  const populateMethodologySelect = (sourceSelectId, targetSelectId) => {
    const source = document.getElementById(sourceSelectId);
    const target = document.getElementById(targetSelectId);
    if (!source || !target) return;
    const rebuild = () => {
      const previous = target.value || source.value;
      target.innerHTML = '';
      [...source.options].forEach((option) => target.add(new Option(option.textContent, option.value)));
      target.value = [...target.options].some((option) => option.value === previous) ? previous : source.value;
    };
    rebuild();
    let synchronising = false;
    source.addEventListener('change', () => {
      if (synchronising) return;
      if ([...target.options].some((option) => option.value === source.value)) {
        synchronising = true;
        target.value = source.value;
        target.dispatchEvent(new Event('change'));
        synchronising = false;
      }
    });
    target.addEventListener('change', () => {
      if (synchronising) return;
      if ([...source.options].some((option) => option.value === target.value)) {
        synchronising = true;
        source.value = target.value;
        source.dispatchEvent(new Event('change'));
        synchronising = false;
      }
    });
  };

  const renderWeightBar = (container, legend, items, textClass = 'text-white') => {
    if (!container || !legend) return;
    const colors = ['bg-indigo-700','bg-cyan-600','bg-sky-600','bg-emerald-600','bg-amber-500','bg-rose-500','bg-violet-600','bg-orange-500'];
    container.className = 'mt-4 flex h-16 overflow-hidden rounded-2xl bg-white shadow-inner ring-1 ring-slate-200';
    container.innerHTML = items.map((item, index) => {
      const showLabel = item.value >= 7.5;
      return `<div class="flex items-center justify-center ${colors[index % colors.length]} px-1 text-[10px] font-bold ${textClass}" style="width:${item.value}%" title="${item.label} — ${String(item.value).replace('.', ',')}%">${showLabel ? String(item.value).replace('.', ',') + '%' : ''}</div>`;
    }).join('');
    legend.innerHTML = items.map((item, index) => `<span><b class="${colors[index % colors.length].replace('bg-','text-')}">■</b> ${item.label} ${String(item.value).replace('.', ',')}%</span>`).join('');
  };

  const qsWurMethodologyLensChart = document.getElementById('qsWurMethodologyLensChart');
  const qsWurMethodologyLensLegend = document.getElementById('qsWurMethodologyLensLegend');
  const qsWurMethodologyLensButtons = document.getElementById('qsWurMethodologyLensButtons');
  const qsWurMethodologyDetailSwatch = document.getElementById('qsWurMethodologyDetailSwatch');
  const qsWurMethodologyDetailTitle = document.getElementById('qsWurMethodologyDetailTitle');
  const qsWurMethodologyDetailCopy = document.getElementById('qsWurMethodologyDetailCopy');
  const qsWurMethodologyLensTotal = document.getElementById('qsWurMethodologyLensTotal');
  const qsWurMethodologyIndicatorList = document.getElementById('qsWurMethodologyIndicatorList');
  const qsWurMethodologyIndicatorCount = document.getElementById('qsWurMethodologyIndicatorCount');
  const qsWurMethodologyLensCount = document.getElementById('qsWurMethodologyLensCount');
  const qsWurMethodologyLatestPosition = document.getElementById('qsWurMethodologyLatestPosition');
  const qsWurMethodologyInfoTabs = [...document.querySelectorAll('[data-qs-wur-panel]')];

  const qsWurMethodologyLenses = [
    { name: 'Badania i odkrycia', weight: 50, color: '#4f46e5', description: 'Globalna reputacja akademicka oraz intensywność i wpływ cytowaniowy badań w relacji do wielkości kadry.' },
    { name: 'Zatrudnialność i rezultaty', weight: 20, color: '#0891b2', description: 'Postrzeganie absolwentów przez pracodawców oraz ich zatrudnienie i długofalowy wpływ społeczny.' },
    { name: 'Doświadczenie kształcenia', weight: 10, color: '#059669', description: 'Dostępność zasobów kadrowych dla studentów mierzona relacją liczby pracowników akademickich do liczby studentów.' },
    { name: 'Globalne zaangażowanie', weight: 15, color: '#d97706', description: 'Międzynarodowy skład kadry i studentów oraz trwałość i geograficzna różnorodność sieci współpracy badawczej.' },
    { name: 'Sustainability', weight: 5, color: '#7c3aed', description: 'Społeczny, środowiskowy i zarządczy wpływ uczelni zaczerpnięty z odrębnego QS Sustainability Rankings.' }
  ];

  const qsWurMethodologyIndicators = [
    { label: 'Academic Reputation', polish: 'Reputacja akademicka', lens: 'Badania i odkrycia', weight: 30, source: 'QS Global Academic Survey', period: '5 lat nominacji', description: 'Ocena jakości i rozpoznawalności uczelni na podstawie wskazań ekspertów akademickich. W QS WUR nominacje krajowe stanowią 15%, a międzynarodowe 85% wyniku wskaźnika.' },
    { label: 'Citations per Faculty', polish: 'Cytowania na pracownika', lens: 'Badania i odkrycia', weight: 20, source: 'Elsevier Scopus / dane kadrowe', period: 'publikacje 5 lat, cytowania 6 lat', description: 'Liczba cytowań po wyłączeniu autocytowań, podzielona przez liczbę pracowników akademickich. Pięć obszarów nauki jest normalizowanych tak, aby każdy wnosił 20% wyniku wskaźnika.' },
    { label: 'Employer Reputation', polish: 'Reputacja pracodawców', lens: 'Zatrudnialność i rezultaty', weight: 15, source: 'QS Global Employer Survey', period: 'wieloletnia pula odpowiedzi', description: 'Ocena uczelni przez pracodawców wskazujących instytucje kształcące najbardziej cenionych absolwentów.' },
    { label: 'Employment Outcomes', polish: 'Rezultaty zatrudnienia', lens: 'Zatrudnialność i rezultaty', weight: 5, source: 'QS Alumni Impact / dane o zatrudnieniu', period: 'cykl 2027', description: 'Łączy Alumni Impact z Graduate Employment Index, czyli zatrudnieniem absolwentów w płatnej pracy w ciągu 15 miesięcy od ukończenia studiów.' },
    { label: 'Faculty Student Ratio', polish: 'Relacja kadra–studenci', lens: 'Doświadczenie kształcenia', weight: 10, source: 'Dane instytucjonalne i źródła zewnętrzne', period: 'cykl 2027', description: 'Relacja liczby pracowników akademickich do liczby studentów, traktowana jako przybliżenie dostępności zasobów dydaktycznych i opieki akademickiej.' },
    { label: 'International Faculty Ratio', polish: 'Udział kadry międzynarodowej', lens: 'Globalne zaangażowanie', weight: 5, source: 'Dane instytucjonalne i źródła zewnętrzne', period: 'cykl 2027', description: 'Udział pracowników akademickich posiadających obywatelstwo inne niż kraj siedziby uczelni.' },
    { label: 'International Research Network', polish: 'Międzynarodowa sieć badawcza', lens: 'Globalne zaangażowanie', weight: 5, source: 'Elsevier Scopus', period: '5-letnie okno publikacji', description: 'Różnorodność krajów i partnerów w trwałych relacjach badawczych. QS uznaje partnerstwo za trwałe, gdy przyniosło co najmniej trzy wspólne publikacje w pięciu latach.' },
    { label: 'International Student Ratio', polish: 'Udział studentów międzynarodowych', lens: 'Globalne zaangażowanie', weight: 5, source: 'Dane instytucjonalne i źródła zewnętrzne', period: 'cykl 2027', description: 'Odsetek studentów zagranicznych w całej populacji studentów. Student międzynarodowy musi studiować w uczelni przez co najmniej trzy miesiące.' },
    { label: 'International Student Diversity', polish: 'Różnorodność studentów międzynarodowych', lens: 'Globalne zaangażowanie', weight: 0, source: 'Dane instytucjonalne i źródła zewnętrzne', period: 'raportowany, 0%', description: 'Opisuje różnorodność narodowości w populacji studentów międzynarodowych. Wskaźnik jest publikowany, ale nie wpływa na wynik ogólny QS WUR.' },
    { label: 'Sustainability', polish: 'Zrównoważony rozwój', lens: 'Sustainability', weight: 5, source: 'QS Sustainability Rankings', period: 'wynik rankingu sustainability', description: 'Wynik przeniesiony z QS Sustainability Rankings, obejmujący środowiskowy, społeczny i zarządczy wpływ uczelni oraz badania związane z celami SDG.' }
  ];

  const formatQsWurMethodologyWeight = (value) => `${Number(value).toLocaleString('pl-PL')}%`;
  let activeQsWurMethodologyLens = 'Badania i odkrycia';

  const renderQsWurMethodologyExplorer = () => {
    if (!qsWurMethodologyLensChart || !qsWurMethodologyIndicatorList) return;
    const activeLens = qsWurMethodologyLenses.find((lens) => lens.name === activeQsWurMethodologyLens) || qsWurMethodologyLenses[0];
    const selectLens = (lensName) => {
      activeQsWurMethodologyLens = lensName;
      renderQsWurMethodologyExplorer();
    };

    const makeLensItem = (lens, legend = false) => {
      const active = lens.name === activeQsWurMethodologyLens;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = (legend ? 'rks-legend-button' : 'rks-weight-segment') + (active ? ' active' : '');
      button.setAttribute('aria-label', `${lens.name}, ${formatQsWurMethodologyWeight(lens.weight)}`);
      if (legend) {
        const dot = document.createElement('span');
        dot.className = 'rks-legend-dot';
        dot.style.background = lens.color;
        const name = document.createElement('span');
        name.className = 'rks-legend-name';
        name.textContent = lens.name;
        const weight = document.createElement('span');
        weight.className = 'rks-legend-weight';
        weight.textContent = formatQsWurMethodologyWeight(lens.weight);
        button.append(dot, name, weight);
      } else {
        button.style.width = `${lens.weight}%`;
        button.style.background = lens.color;
        button.style.color = '#fff';
        button.textContent = formatQsWurMethodologyWeight(lens.weight);
        button.title = `${lens.name} — ${formatQsWurMethodologyWeight(lens.weight)}`;
      }
      button.addEventListener('click', () => selectLens(lens.name));
      return button;
    };

    qsWurMethodologyLensChart.replaceChildren(...qsWurMethodologyLenses.map((lens) => makeLensItem(lens)));
    qsWurMethodologyLensLegend?.replaceChildren(...qsWurMethodologyLenses.map((lens) => makeLensItem(lens, true)));

    const lensButtons = qsWurMethodologyLenses.map((lens) => {
      const active = lens.name === activeQsWurMethodologyLens;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'rks-criterion-button' + (active ? ' active' : '');
      button.setAttribute('aria-pressed', active.toString());
      const dot = document.createElement('span');
      dot.className = 'rks-legend-dot';
      dot.style.background = lens.color;
      const name = document.createElement('span');
      name.className = 'rks-criterion-name';
      name.textContent = lens.name;
      const weight = document.createElement('span');
      weight.className = 'rks-criterion-weight';
      weight.textContent = formatQsWurMethodologyWeight(lens.weight);
      button.append(dot, name, weight);
      button.addEventListener('click', () => selectLens(lens.name));
      return button;
    });
    qsWurMethodologyLensButtons?.replaceChildren(...lensButtons);

    if (qsWurMethodologyDetailSwatch) qsWurMethodologyDetailSwatch.style.background = activeLens.color;
    if (qsWurMethodologyDetailTitle) qsWurMethodologyDetailTitle.textContent = activeLens.name;
    if (qsWurMethodologyDetailCopy) qsWurMethodologyDetailCopy.textContent = activeLens.description;
    if (qsWurMethodologyLensTotal) {
      const caption = document.createElement('small');
      caption.textContent = 'waga obszaru';
      qsWurMethodologyLensTotal.replaceChildren(formatQsWurMethodologyWeight(activeLens.weight), caption);
    }

    const rows = qsWurMethodologyIndicators.filter((indicator) => indicator.lens === activeLens.name).map((indicator) => {
      const row = document.createElement('article');
      row.className = 'rks-indicator';
      const copy = document.createElement('div');
      const title = document.createElement('h4');
      title.textContent = `${indicator.polish} (${indicator.label})`;
      const description = document.createElement('p');
      description.textContent = indicator.description;
      const source = document.createElement('span');
      source.className = 'rks-source-line';
      source.textContent = indicator.source;
      copy.append(title, description, source);
      const weight = document.createElement('div');
      weight.className = 'rks-indicator-weight';
      const weightCaption = document.createElement('small');
      weightCaption.textContent = indicator.weight === 0 ? 'nie wpływa na wynik' : 'waga';
      weight.append(formatQsWurMethodologyWeight(indicator.weight), weightCaption);
      const period = document.createElement('span');
      period.className = 'rks-indicator-delta' + (indicator.weight === 0 ? ' new' : '');
      period.textContent = indicator.period;
      row.append(copy, weight, period);
      return row;
    });
    qsWurMethodologyIndicatorList.replaceChildren(...rows);

    const weightedCount = qsWurMethodologyIndicators.filter((indicator) => indicator.weight > 0).length;
    const reportedCount = qsWurMethodologyIndicators.filter((indicator) => indicator.weight === 0).length;
    if (qsWurMethodologyIndicatorCount) qsWurMethodologyIndicatorCount.textContent = `${weightedCount} + ${reportedCount}`;
    if (qsWurMethodologyLensCount) qsWurMethodologyLensCount.textContent = qsWurMethodologyLenses.length;
    if (qsWurMethodologyLatestPosition && qsMin?.length) {
      const latestIndex = qsMin.length - 1;
      qsWurMethodologyLatestPosition.textContent = qsMin[latestIndex] === qsMax[latestIndex] ? `=${qsMin[latestIndex]}` : `${qsMin[latestIndex]}–${qsMax[latestIndex]}`;
    }
  };

  qsWurMethodologyInfoTabs.forEach((button) => {
    button.addEventListener('click', () => {
      qsWurMethodologyInfoTabs.forEach((tab) => tab.classList.toggle('active', tab === button));
      qsWurMethodologyInfoTabs.forEach((tab) => document.getElementById(tab.dataset.qsWurPanel)?.classList.toggle('hidden', tab !== button));
    });
  });

  renderQsWurMethodologyExplorer();
  populateMethodologySelect('qsSubjectSelect', 'qsMethodologySubjectSelect');
  const qsMethodologySelect = document.getElementById('qsMethodologySubjectSelect');
  const qsMethodologyChart = document.getElementById('qsMethodologySubjectChart');
  const qsMethodologyLegend = document.getElementById('qsMethodologySubjectLegend');
  const qsMethodologyText = document.getElementById('qsMethodologyProfileText');
  const qsMethodologyBadge = document.getElementById('qsMethodologyProfileBadge');
  const qsSubjectMethodologyProfileType = document.getElementById('qsSubjectMethodologyProfileType');
  const qsSubjectMethodologyIndicatorCount = document.getElementById('qsSubjectMethodologyIndicatorCount');
  const qsSubjectMethodologyPaperThreshold = document.getElementById('qsSubjectMethodologyPaperThreshold');
  const qsSubjectMethodologyLatestPosition = document.getElementById('qsSubjectMethodologyLatestPosition');
  const qsSubjectMethodologyIrnTag = document.getElementById('qsSubjectMethodologyIrnTag');
  const qsSubjectMethodologyWeightsNote = document.getElementById('qsSubjectMethodologyWeightsNote');
  const qsSubjectMethodologyWeightTotal = document.getElementById('qsSubjectMethodologyWeightTotal');
  const qsSubjectMethodologyGroupButtons = document.getElementById('qsSubjectMethodologyGroupButtons');
  const qsSubjectMethodologyDetailSwatch = document.getElementById('qsSubjectMethodologyDetailSwatch');
  const qsSubjectMethodologyDetailTitle = document.getElementById('qsSubjectMethodologyDetailTitle');
  const qsSubjectMethodologyDetailCopy = document.getElementById('qsSubjectMethodologyDetailCopy');
  const qsSubjectMethodologyGroupTotal = document.getElementById('qsSubjectMethodologyGroupTotal');
  const qsSubjectMethodologyIndicatorList = document.getElementById('qsSubjectMethodologyIndicatorList');
  const qsSubjectMethodologyThresholdDetail = document.getElementById('qsSubjectMethodologyThresholdDetail');
  const qsSubjectMethodologyInfoTabs = [...document.querySelectorAll('[data-qs-subject-panel]')];

  const qsSubjectMethodologyThresholds = {
    'Architecture & Built Environment': 30,
    'Business & Management Studies': 30,
    'Chemistry': 110,
    'Computer Science & Information Systems': 140,
    'Engineering & Technology': 300,
    'Engineering - Chemical': 80,
    'Engineering - Civil & Structural': 40,
    'Engineering - Electrical & Electronic': 120,
    'Engineering - Mechanical, Aeronautical & Manufacturing': 90,
    'Materials Science': 120,
    'Mathematics': 80,
    'Natural Sciences': 500,
    'Physics & Astronomy': 140
  };

  const qsSubjectMethodologyBroadProfiles = {
    'Engineering & Technology': {
      'Academic Reputation': 40,
      'Employer Reputation': 30,
      'Citations per Paper': 10,
      'H-index': 10,
      'International Research Network': 10
    },
    'Natural Sciences': {
      'Academic Reputation': 40,
      'Employer Reputation': 20,
      'Citations per Paper': 15,
      'H-index': 15,
      'International Research Network': 10
    }
  };

  const qsSubjectMethodologyGroups = [
    { name: 'Reputacja', color: '#4f46e5', description: 'Międzynarodowe badania opinii pokazują, które uczelnie są cenione przez środowisko akademickie i pracodawców w danej dyscyplinie.' },
    { name: 'Wpływ badań', color: '#059669', description: 'Dwa wskaźniki bibliometryczne mierzą średni wpływ publikacji oraz połączenie produktywności z trwałością cytowań.' },
    { name: 'Współpraca międzynarodowa', color: '#7c3aed', description: 'IRN mierzy różnorodność i trwałość międzynarodowej sieci badawczej. Nie występuje w dyscyplinach o progu publikacyjnym 50 lub niższym.' }
  ];

  const qsSubjectMethodologyIndicators = [
    { label: 'Academic Reputation', short: 'AR', polish: 'Reputacja akademicka', group: 'Reputacja', color: '#4f46e5', source: 'QS Global Academic Survey', period: 'wieloletnia pula odpowiedzi', description: 'Ocena jakości badań i rozpoznawalności uczelni na podstawie wskazań akademików odnoszących się do konkretnej dziedziny wiedzy.' },
    { label: 'Employer Reputation', short: 'ER', polish: 'Reputacja pracodawców', group: 'Reputacja', color: '#0891b2', source: 'QS Global Employer Survey', period: 'wieloletnia pula odpowiedzi', description: 'Ocena uczelni przez pracodawców wskazujących instytucje kształcące cenionych absolwentów w określonych dyscyplinach.' },
    { label: 'Citations per Paper', short: 'CPP', polish: 'Cytowania na publikację', group: 'Wpływ badań', color: '#059669', source: 'Elsevier Scopus', period: '5-letnie okno publikacji', description: 'Średnia liczba cytowań przypadających na publikację przypisaną do dyscypliny. QS stosuje progi publikacyjne i zasady przetwarzania właściwe dla dziedziny.' },
    { label: 'H-index', short: 'H', polish: 'H-index', group: 'Wpływ badań', color: '#d97706', source: 'Elsevier Scopus', period: 'profil dyscyplinowy', description: 'Łączy produktywność badawczą z wpływem cytowaniowym: wartość h oznacza co najmniej h publikacji cytowanych co najmniej h razy.' },
    { label: 'International Research Network', short: 'IRN', polish: 'Międzynarodowa sieć badawcza', group: 'Współpraca międzynarodowa', color: '#7c3aed', source: 'Elsevier Scopus', period: '3 wspólne prace / 5 lat', description: 'Mierzy różnorodność krajów i partnerów w trwałych relacjach badawczych. QS uznaje partnerstwo za trwałe po co najmniej trzech wspólnych publikacjach w pięciu latach.' }
  ];

  const formatQsSubjectPosition = (subject) => {
    const series = qsSubjectData.subjects[subject];
    if (!series) return '—';
    const latestIndex = qsSubjectData.years.length - 1;
    const lower = series.lower[latestIndex];
    const upper = series.upper[latestIndex];
    if (lower == null || upper == null) return 'brak danych';
    return lower === upper ? `=${lower}` : `${lower}–${upper}`;
  };

  let activeQsSubjectMethodologyGroup = 'Reputacja';

  const renderQsSubjectMethodology = () => {
    if (!qsMethodologySelect || !qsMethodologyChart || !qsMethodologyLegend || !qsSubjectMethodologyIndicatorList) return;
    const subject = qsMethodologySelect.value;
    const threshold = qsSubjectMethodologyThresholds[subject];
    const broadProfile = qsSubjectMethodologyBroadProfiles[subject] || null;
    const isBroad = Boolean(broadProfile);
    const irnIncluded = isBroad || threshold > 50;
    const activeIndicators = qsSubjectMethodologyIndicators.filter((indicator) => indicator.label !== 'International Research Network' || irnIncluded);
    const availableGroups = qsSubjectMethodologyGroups.filter((group) => activeIndicators.some((indicator) => indicator.group === group.name));
    if (!availableGroups.some((group) => group.name === activeQsSubjectMethodologyGroup)) {
      activeQsSubjectMethodologyGroup = availableGroups[0].name;
    }
    const activeGroup = availableGroups.find((group) => group.name === activeQsSubjectMethodologyGroup) || availableGroups[0];

    const selectGroup = (groupName) => {
      activeQsSubjectMethodologyGroup = groupName;
      renderQsSubjectMethodology();
    };

    if (qsSubjectMethodologyProfileType) qsSubjectMethodologyProfileType.textContent = isBroad ? 'Szeroki obszar' : 'Dyscyplina wąska';
    if (qsSubjectMethodologyIndicatorCount) qsSubjectMethodologyIndicatorCount.textContent = activeIndicators.length;
    if (qsSubjectMethodologyPaperThreshold) qsSubjectMethodologyPaperThreshold.textContent = threshold == null ? '—' : threshold.toLocaleString('pl-PL');
    if (qsSubjectMethodologyLatestPosition) qsSubjectMethodologyLatestPosition.textContent = formatQsSubjectPosition(subject);
    if (qsSubjectMethodologyIrnTag) qsSubjectMethodologyIrnTag.textContent = irnIncluded ? 'IRN: WŁĄCZONY' : 'IRN: NIESTOSOWANY';
    if (qsSubjectMethodologyThresholdDetail) {
      qsSubjectMethodologyThresholdDetail.textContent = threshold == null
        ? `${subject}: brak progu w lokalnym profilu.`
        : `${subject}: minimum ${threshold.toLocaleString('pl-PL')} publikacji w ciągu pięciu lat.`;
    }

    if (isBroad) {
      if (qsMethodologyBadge) qsMethodologyBadge.textContent = 'Oficjalny profil szerokiego obszaru';
      if (qsMethodologyText) qsMethodologyText.textContent = 'QS publikuje pełny profil wag dla szerokiego obszaru. Pięć wskaźników sumuje się do 100% wyniku.';
      if (qsSubjectMethodologyWeightsNote) qsSubjectMethodologyWeightsNote.textContent = 'Wagi odnoszą się do wybranego szerokiego obszaru QS i sumują się do 100%.';
      if (qsSubjectMethodologyWeightTotal) qsSubjectMethodologyWeightTotal.textContent = 'Suma: 100%';
      qsMethodologyChart.classList.remove('qs-subject-unweighted-bar');
    } else {
      if (qsMethodologyBadge) qsMethodologyBadge.textContent = 'Profil zależny od dyscypliny';
      if (qsMethodologyText) {
        qsMethodologyText.textContent = irnIncluded
          ? 'QS dobiera wagi do wzorców publikowania i cytowania w tej dyscyplinie. IRN jest stosowany, ponieważ próg publikacyjny przekracza 50 prac.'
          : 'QS dobiera wagi do specyfiki dyscypliny. IRN nie jest stosowany, ponieważ próg publikacyjny nie przekracza 50 prac.';
      }
      if (qsSubjectMethodologyWeightsNote) qsSubjectMethodologyWeightsNote.textContent = 'Segmenty pokazują skład profilu, nie równe wagi. QS przegląda wagi dyscyplin co roku.';
      if (qsSubjectMethodologyWeightTotal) qsSubjectMethodologyWeightTotal.textContent = 'Wagi: wg dyscypliny';
      qsMethodologyChart.classList.add('qs-subject-unweighted-bar');
    }

    const makeIndicatorItem = (indicator, legend = false) => {
      const active = indicator.group === activeQsSubjectMethodologyGroup;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = (legend ? 'rks-legend-button' : 'rks-weight-segment') + (active ? ' active' : '');
      const weightValue = broadProfile?.[indicator.label];
      button.setAttribute('aria-label', `${indicator.polish}, ${weightValue == null ? 'waga zależna od dyscypliny' : `${weightValue}%`}`);
      if (legend) {
        const dot = document.createElement('span');
        dot.className = 'rks-legend-dot';
        dot.style.background = indicator.color;
        const name = document.createElement('span');
        name.className = 'rks-legend-name';
        name.textContent = indicator.polish;
        const weight = document.createElement('span');
        weight.className = 'rks-legend-weight';
        weight.textContent = weightValue == null ? 'wg dyscypliny' : `${weightValue}%`;
        button.append(dot, name, weight);
      } else {
        if (weightValue == null) {
          button.style.flex = '1 1 0';
          button.style.width = 'auto';
          button.textContent = indicator.short;
        } else {
          button.style.flex = '0 0 auto';
          button.style.width = `${weightValue}%`;
          button.textContent = `${weightValue}%`;
        }
        button.style.background = indicator.color;
        button.style.color = '#fff';
        button.title = `${indicator.polish} — ${weightValue == null ? 'waga zależna od dyscypliny' : `${weightValue}%`}`;
      }
      button.addEventListener('click', () => selectGroup(indicator.group));
      return button;
    };

    qsMethodologyChart.replaceChildren(...activeIndicators.map((indicator) => makeIndicatorItem(indicator)));
    qsMethodologyLegend.replaceChildren(...activeIndicators.map((indicator) => makeIndicatorItem(indicator, true)));

    const groupButtons = availableGroups.map((group) => {
      const active = group.name === activeQsSubjectMethodologyGroup;
      const groupIndicators = activeIndicators.filter((indicator) => indicator.group === group.name);
      const groupWeight = isBroad ? groupIndicators.reduce((sum, indicator) => sum + broadProfile[indicator.label], 0) : null;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'rks-criterion-button' + (active ? ' active' : '');
      button.setAttribute('aria-pressed', active.toString());
      const dot = document.createElement('span');
      dot.className = 'rks-legend-dot';
      dot.style.background = group.color;
      const name = document.createElement('span');
      name.className = 'rks-criterion-name';
      name.textContent = group.name;
      const value = document.createElement('span');
      value.className = 'rks-criterion-weight';
      value.textContent = groupWeight == null ? `${groupIndicators.length} WSK` : `${groupWeight}%`;
      button.append(dot, name, value);
      button.addEventListener('click', () => selectGroup(group.name));
      return button;
    });
    qsSubjectMethodologyGroupButtons?.replaceChildren(...groupButtons);

    if (qsSubjectMethodologyDetailSwatch) qsSubjectMethodologyDetailSwatch.style.background = activeGroup.color;
    if (qsSubjectMethodologyDetailTitle) qsSubjectMethodologyDetailTitle.textContent = activeGroup.name;
    if (qsSubjectMethodologyDetailCopy) qsSubjectMethodologyDetailCopy.textContent = activeGroup.description;

    const selectedIndicators = activeIndicators.filter((indicator) => indicator.group === activeGroup.name);
    const selectedWeight = isBroad ? selectedIndicators.reduce((sum, indicator) => sum + broadProfile[indicator.label], 0) : null;
    if (qsSubjectMethodologyGroupTotal) {
      const caption = document.createElement('small');
      caption.textContent = selectedWeight == null ? 'aktywnych wskaźników' : 'waga grupy';
      qsSubjectMethodologyGroupTotal.replaceChildren(selectedWeight == null ? String(selectedIndicators.length) : `${selectedWeight}%`, caption);
    }

    const rows = selectedIndicators.map((indicator) => {
      const row = document.createElement('article');
      row.className = 'rks-indicator';
      const copy = document.createElement('div');
      const title = document.createElement('h4');
      title.textContent = `${indicator.polish} (${indicator.label})`;
      const description = document.createElement('p');
      description.textContent = indicator.description;
      const source = document.createElement('span');
      source.className = 'rks-source-line';
      source.textContent = indicator.source;
      copy.append(title, description, source);
      const weight = document.createElement('div');
      weight.className = 'rks-indicator-weight';
      const weightCaption = document.createElement('small');
      const weightValue = broadProfile?.[indicator.label];
      weightCaption.textContent = weightValue == null ? 'waga wg profilu QS' : 'waga';
      weight.append(weightValue == null ? '—' : `${weightValue}%`, weightCaption);
      const period = document.createElement('span');
      period.className = 'rks-indicator-delta' + (indicator.label === 'International Research Network' ? ' new' : '');
      period.textContent = indicator.period;
      row.append(copy, weight, period);
      return row;
    });
    qsSubjectMethodologyIndicatorList.replaceChildren(...rows);
  };

  qsMethodologySelect?.addEventListener('change', renderQsSubjectMethodology);
  qsSubjectMethodologyInfoTabs.forEach((button) => {
    button.addEventListener('click', () => {
      qsSubjectMethodologyInfoTabs.forEach((tab) => tab.classList.toggle('active', tab === button));
      qsSubjectMethodologyInfoTabs.forEach((tab) => document.getElementById(tab.dataset.qsSubjectPanel)?.classList.toggle('hidden', tab !== button));
    });
  });
  renderQsSubjectMethodology();
  const arwuMethodologyWeightChart = document.getElementById('arwuMethodologyWeightChart');
  const arwuMethodologyWeightLegend = document.getElementById('arwuMethodologyWeightLegend');
  const arwuMethodologyIndicatorButtons = document.getElementById('arwuMethodologyIndicatorButtons');
  const arwuMethodologyDetailSwatch = document.getElementById('arwuMethodologyDetailSwatch');
  const arwuMethodologyDetailTitle = document.getElementById('arwuMethodologyDetailTitle');
  const arwuMethodologyDetailCopy = document.getElementById('arwuMethodologyDetailCopy');
  const arwuMethodologyIndicatorWeight = document.getElementById('arwuMethodologyIndicatorWeight');
  const arwuMethodologyIndicatorList = document.getElementById('arwuMethodologyIndicatorList');
  const arwuMethodologyIndicatorCount = document.getElementById('arwuMethodologyIndicatorCount');
  const arwuMethodologyInfoTabs = [...document.querySelectorAll('[data-arwu-panel]')];

  const arwuMethodologyIndicators = [
    {
      code: 'Alumni', dataKey: 'alumni', name: 'Absolwenci z Noblem lub Medalem Fieldsa', weight: 10, color: '#e11d48',
      source: 'Oficjalne serwisy Nobel Prize i International Mathematical Union.', period: 'nagrody i dyplomy od 1921 r.',
      description: 'Liczba absolwentów uczelni, którzy otrzymali Nagrodę Nobla lub Medal Fieldsa. Za absolwenta uznaje się osobę, która uzyskała w instytucji stopień licencjacki, magisterski lub doktorski.',
      calculation: 'Dyplomy uzyskane po 2011 r. mają wagę 100%, a starsze są ważone dekadami aż do 10% dla lat 1921–1930. Każda osoba jest liczona tylko raz.'
    },
    {
      code: 'Award', dataKey: 'award', name: 'Kadra z Noblem lub Medalem Fieldsa', weight: 20, color: '#b91c1c',
      source: 'Oficjalne serwisy Nobel Prize i International Mathematical Union.', period: 'nagrody od 1931 r.',
      description: 'Liczba pracowników uczelni, którzy otrzymali Nagrodę Nobla w dziedzinie fizyki, chemii, medycyny lub ekonomii albo Medal Fieldsa.',
      calculation: 'Nagrody po 2021 r. mają wagę 100%, a starsze są ważone dekadami aż do 10% dla lat 1931–1940. Punkty są dzielone przy wielu afiliacjach i proporcjonalnie przy wspólnie przyznanych Nagrodach Nobla.'
    },
    {
      code: 'HiCi', dataKey: 'hici', name: 'Najczęściej cytowani badacze', weight: 20, color: '#ea580c',
      source: 'Clarivate Highly Cited Researchers, lista opublikowana w grudniu 2025 r.', period: 'lista HCR 2025',
      description: 'Liczba badaczy z główną afiliacją w uczelni, ujętych przez Clarivate wśród Highly Cited Researchers.',
      calculation: 'Uwzględnia się wyłącznie główne afiliacje. Badacz wskazany przez Clarivate w więcej niż jednej kategorii Essential Science Indicators jest liczony osobno w każdej z nich.'
    },
    {
      code: 'N&S', dataKey: 'ns', name: 'Publikacje w Nature i Science', weight: 20, color: '#d97706',
      source: 'Serwisy czasopism „Nature” i „Science”.', period: 'artykuły 2021–2025',
      description: 'Liczba artykułów badawczych opublikowanych w czasopismach „Nature” i „Science” w pięcioletnim oknie.',
      calculation: 'Waga afiliacji wynosi 100% dla autora korespondencyjnego, 50% dla pierwszego autora, 25% dla kolejnego autora i 10% dla pozostałych. Uwzględniany jest wyłącznie typ dokumentu Article.'
    },
    {
      code: 'PUB', dataKey: 'pub', name: 'Publikacje w SCIE i SSCI', weight: 20, color: '#4f46e5',
      source: 'Clarivate Web of Science: Science Citation Index Expanded i Social Sciences Citation Index.', period: 'artykuły z 2025 r.',
      description: 'Łączna liczba publikacji uczelni indeksowanych w SCIE i SSCI w roku objętym pomiarem.',
      calculation: 'Uwzględniany jest wyłącznie typ dokumentu Article. Publikacje indeksowane w Social Sciences Citation Index otrzymują podwójną wagę.'
    },
    {
      code: 'PCP', dataKey: 'pcp', name: 'Wynik per capita', weight: 10, color: '#475569',
      source: 'Wyniki pięciu pozostałych wskaźników oraz krajowe lub regionalne dane o kadrze akademickiej FTE.', period: 'dane właściwe dla edycji 2026',
      description: 'Ważony wynik pięciu pozostałych wskaźników podzielony przez liczbę pracowników akademickich w przeliczeniu na pełne etaty.',
      calculation: 'Gdy dla kraju nie ma danych o liczbie kadry, ARWU wykorzystuje średnią liczbę pracowników uczelni ze światowego TOP 1000. W edycji 2026 Polska znajduje się w grupie krajów z dostępnymi danymi kadrowymi.'
    }
  ];

  const formatArwuMethodologyWeight = (value) => Number(value).toLocaleString('pl-PL') + '%';
  const formatArwuMethodologyScore = (value) => Number(value).toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  let activeArwuMethodologyIndicator = 'Alumni';

  const renderArwuMethodologyExplorer = () => {
    if (!arwuMethodologyWeightChart || !arwuMethodologyIndicatorList) return;
    const activeIndicator = arwuMethodologyIndicators.find((indicator) => indicator.code === activeArwuMethodologyIndicator) || arwuMethodologyIndicators[0];

    const selectIndicator = (code) => {
      activeArwuMethodologyIndicator = code;
      renderArwuMethodologyExplorer();
    };

    const makeIndicatorItem = (indicator, legend = false) => {
      const active = indicator.code === activeArwuMethodologyIndicator;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = (legend ? 'rks-legend-button' : 'rks-weight-segment') + (active ? ' active' : '');
      button.setAttribute('aria-label', indicator.code + ', ' + indicator.name + ', ' + formatArwuMethodologyWeight(indicator.weight));
      if (legend) {
        const dot = document.createElement('span');
        dot.className = 'rks-legend-dot';
        dot.style.background = indicator.color;
        const name = document.createElement('span');
        name.className = 'rks-legend-name';
        name.textContent = indicator.code;
        const weight = document.createElement('span');
        weight.className = 'rks-legend-weight';
        weight.textContent = formatArwuMethodologyWeight(indicator.weight);
        button.append(dot, name, weight);
      } else {
        button.style.width = indicator.weight + '%';
        button.style.background = indicator.color;
        button.style.color = '#fff';
        button.textContent = formatArwuMethodologyWeight(indicator.weight);
        button.title = indicator.code + ' — ' + indicator.name;
      }
      button.addEventListener('click', () => selectIndicator(indicator.code));
      return button;
    };

    arwuMethodologyWeightChart.replaceChildren(...arwuMethodologyIndicators.map((indicator) => makeIndicatorItem(indicator)));
    arwuMethodologyWeightLegend?.replaceChildren(...arwuMethodologyIndicators.map((indicator) => makeIndicatorItem(indicator, true)));

    const indicatorButtons = arwuMethodologyIndicators.map((indicator) => {
      const active = indicator.code === activeArwuMethodologyIndicator;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'rks-criterion-button' + (active ? ' active' : '');
      button.setAttribute('aria-pressed', active.toString());
      const dot = document.createElement('span');
      dot.className = 'rks-legend-dot';
      dot.style.background = indicator.color;
      const name = document.createElement('span');
      name.className = 'rks-criterion-name';
      name.textContent = indicator.code + ' — ' + indicator.name;
      const weight = document.createElement('span');
      weight.className = 'rks-criterion-weight';
      weight.textContent = formatArwuMethodologyWeight(indicator.weight);
      button.append(dot, name, weight);
      button.addEventListener('click', () => selectIndicator(indicator.code));
      return button;
    });
    arwuMethodologyIndicatorButtons?.replaceChildren(...indicatorButtons);

    if (arwuMethodologyDetailSwatch) arwuMethodologyDetailSwatch.style.background = activeIndicator.color;
    if (arwuMethodologyDetailTitle) arwuMethodologyDetailTitle.textContent = activeIndicator.code + ' — ' + activeIndicator.name;
    if (arwuMethodologyDetailCopy) arwuMethodologyDetailCopy.textContent = activeIndicator.description;
    if (arwuMethodologyIndicatorWeight) {
      const caption = document.createElement('small');
      caption.textContent = 'waga wskaźnika';
      arwuMethodologyIndicatorWeight.replaceChildren(formatArwuMethodologyWeight(activeIndicator.weight), caption);
    }

    const latestScore = arwuDetailsData?.indicators?.[activeIndicator.dataKey]?.values?.at(-1) ?? 0;
    const createDetailRow = (titleText, descriptionText, valueText, captionText, tagText, sourceText = '') => {
      const row = document.createElement('article');
      row.className = 'rks-indicator';
      const copy = document.createElement('div');
      const title = document.createElement('h4');
      title.textContent = titleText;
      const description = document.createElement('p');
      description.textContent = descriptionText;
      copy.append(title, description);
      if (sourceText) {
        const source = document.createElement('span');
        source.className = 'rks-source-line';
        source.textContent = sourceText;
        copy.append(source);
      }
      const value = document.createElement('div');
      value.className = 'rks-indicator-weight';
      const caption = document.createElement('small');
      caption.textContent = captionText;
      value.append(valueText, caption);
      const tag = document.createElement('span');
      tag.className = 'rks-indicator-delta';
      tag.textContent = tagText;
      row.append(copy, value, tag);
      return row;
    };

    arwuMethodologyIndicatorList.replaceChildren(
      createDetailRow('Źródło danych', activeIndicator.source, formatArwuMethodologyWeight(activeIndicator.weight), 'waga', 'źródło oficjalne', 'ARWU 2026 Methodology'),
      createDetailRow('Okres i sposób naliczania', activeIndicator.calculation, '2026', 'edycja', activeIndicator.period),
      createDetailRow('Wynik Politechniki Warszawskiej', 'Wartość opublikowana w profilu PW. Wynik wskaźnika jest znormalizowany względem najlepszej uczelni w tej samej edycji.', formatArwuMethodologyScore(latestScore), 'wynik PW', 'skala 0–100')
    );

    if (arwuMethodologyIndicatorCount) arwuMethodologyIndicatorCount.textContent = arwuMethodologyIndicators.length;
  };

  arwuMethodologyInfoTabs.forEach((button) => {
    button.addEventListener('click', () => {
      arwuMethodologyInfoTabs.forEach((tab) => tab.classList.toggle('active', tab === button));
      arwuMethodologyInfoTabs.forEach((tab) => document.getElementById(tab.dataset.arwuPanel)?.classList.toggle('hidden', tab !== button));
    });
  });
  renderArwuMethodologyExplorer();
  const theWurMethodologyPillarChart = document.getElementById('theWurMethodologyPillarChart');
  const theWurMethodologyPillarLegend = document.getElementById('theWurMethodologyPillarLegend');
  const theWurMethodologyPillarButtons = document.getElementById('theWurMethodologyPillarButtons');
  const theWurMethodologyDetailSwatch = document.getElementById('theWurMethodologyDetailSwatch');
  const theWurMethodologyDetailTitle = document.getElementById('theWurMethodologyDetailTitle');
  const theWurMethodologyDetailCopy = document.getElementById('theWurMethodologyDetailCopy');
  const theWurMethodologyPillarTotal = document.getElementById('theWurMethodologyPillarTotal');
  const theWurMethodologyIndicatorList = document.getElementById('theWurMethodologyIndicatorList');
  const theWurMethodologyIndicatorCount = document.getElementById('theWurMethodologyIndicatorCount');
  const theWurMethodologyPillarCount = document.getElementById('theWurMethodologyPillarCount');
  const theWurMethodologyLatestPosition = document.getElementById('theWurMethodologyLatestPosition');
  const theWurMethodologyInfoTabs = [...document.querySelectorAll('[data-the-wur-panel]')];

  const theWurMethodologyPillars = [
    { name: 'Kształcenie', english: 'Teaching', weight: 29.5, color: '#0e7490', description: 'Środowisko kształcenia mierzone reputacją dydaktyczną, dostępnością kadry, intensywnością kształcenia doktorskiego i zasobami instytucji.' },
    { name: 'Środowisko badań', english: 'Research Environment', weight: 29, color: '#4f46e5', description: 'Skala i warunki prowadzenia badań: reputacja, przychody badawcze oraz produktywność publikacyjna w relacji do kadry.' },
    { name: 'Jakość badań', english: 'Research Quality', weight: 30, color: '#059669', description: 'Wpływ i jakość dorobku mierzone średnim oddziaływaniem cytowaniowym, siłą reprezentatywnego dorobku, doskonałością i wpływem sieciowym.' },
    { name: 'Umiędzynarodowienie', english: 'International Outlook', weight: 7.5, color: '#d97706', description: 'Międzynarodowy skład studentów i kadry oraz udział publikacji ze współautorami zagranicznymi. Mobilność wyjazdowa jest raportowana z wagą 0%.' },
    { name: 'Przemysł', english: 'Industry', weight: 4, color: '#e11d48', description: 'Transfer wiedzy do gospodarki mierzony przychodami z przemysłu oraz wykorzystaniem badań uczelni w patentach.' }
  ];

  const theWurMethodologyIndicators = [
    { label: 'Teaching Reputation', polish: 'Reputacja dydaktyczna', pillar: 'Kształcenie', weight: 15, source: 'THE Academic Reputation Survey', period: 'badania 2024 i 2025', description: 'Liczba wskazań uczelni jako wyróżniającej się w kształceniu. Odpowiedzi są ważone według kraju i dyscypliny, a wynik łączy dwie ostatnie edycje badania.' },
    { label: 'Student Staff Ratio', polish: 'Relacja kadra–studenci', pillar: 'Kształcenie', weight: 4.5, source: 'Dane instytucjonalne THE', period: 'rok kończący się w 2023', description: 'Liczba pracowników akademickich FTE w relacji do liczby studentów FTE na wszystkich programach prowadzących do kwalifikacji.' },
    { label: 'Doctorate Bachelor Ratio', polish: 'Doktoraty do dyplomów licencjackich', pillar: 'Kształcenie', weight: 2, source: 'Dane instytucjonalne THE', period: 'rok kończący się w 2023', description: 'Liczba nadanych doktoratów podzielona przez liczbę nadanych dyplomów pierwszego stopnia.' },
    { label: 'Doctorate Staff Ratio', polish: 'Doktoraty do kadry', pillar: 'Kształcenie', weight: 5.5, source: 'Dane instytucjonalne THE', period: 'rok kończący się w 2023', description: 'Ważona dyscyplinowo liczba doktoratów w relacji do ważonej liczby pracowników akademickich, z korektą różnic między dziedzinami.' },
    { label: 'Institutional Income', polish: 'Dochód instytucjonalny', pillar: 'Kształcenie', weight: 2.5, source: 'Dane THE / Bank Światowy', period: 'rok kończący się w 2023', description: 'Całkowity dochód instytucji skorygowany parytetem siły nabywczej i podzielony przez liczbę pracowników akademickich.' },

    { label: 'Research Reputation', polish: 'Reputacja badawcza', pillar: 'Środowisko badań', weight: 18, source: 'THE Academic Reputation Survey', period: 'badania 2024 i 2025', description: 'Globalne wskazania uczelni prowadzących najlepsze badania, ważone według kraju i dyscypliny oraz agregowane z dwóch edycji badania.' },
    { label: 'Research Income', polish: 'Przychody z badań', pillar: 'Środowisko badań', weight: 5.5, source: 'Dane THE / Bank Światowy', period: 'rok kończący się w 2023', description: 'Przychody badawcze skorygowane PPP i profilem dyscyplin, podzielone przez ważoną liczbę pracowników akademickich.' },
    { label: 'Research Productivity', polish: 'Produktywność publikacyjna', pillar: 'Środowisko badań', weight: 5.5, source: 'Elsevier Scopus / dane kadrowe', period: 'publikacje 2020–2024', description: 'Ważona dyscyplinowo liczba publikacji Scopus w relacji do pracowników akademickich i badawczych FTE.' },

    { label: 'Citation Impact', polish: 'Wpływ cytowań', pillar: 'Jakość badań', weight: 15, source: 'Elsevier Scopus', period: 'publikacje 2020–2024; cytowania 2020–2025', description: 'Średni wpływ cytowaniowy publikacji, normalizowany według dyscypliny i łączący w równych częściach wynik korygowany oraz niekorygowany o kraj.' },
    { label: 'Research Strength', polish: 'Siła badań', pillar: 'Jakość badań', weight: 5, source: 'Elsevier Scopus', period: 'publikacje 2020–2024; cytowania 2020–2025', description: '75. percentyl FWCI wszystkich publikacji uczelni, ograniczający wpływ pojedynczych prac o wyjątkowo wysokiej cytowalności.' },
    { label: 'Research Excellence', polish: 'Doskonałość badań', pillar: 'Jakość badań', weight: 5, source: 'Elsevier Scopus', period: 'publikacje 2020–2024', description: 'Liczba publikacji uczelni należących do światowego TOP 10% według FWCI, skorygowana o rok, dyscyplinę oraz wielkość kadry.' },
    { label: 'Research Influence', polish: 'Wpływ badań', pillar: 'Jakość badań', weight: 5, source: 'Elsevier Scopus', period: 'publikacje 2020–2024; cytowania 2020–2025', description: 'Znaczenie publikacji określane również przez znaczenie prac, które je cytują; wynik jest korygowany o rok, dyscyplinę i wielkość kadry.' },

    { label: 'International Students', polish: 'Studenci międzynarodowi', pillar: 'Umiędzynarodowienie', weight: 2.5, source: 'Dane instytucjonalne THE', period: 'rok kończący się w 2023', description: 'Udział studentów FTE o obywatelstwie innym niż kraj siedziby uczelni, normalizowany z uwzględnieniem wielkości populacji kraju.' },
    { label: 'International Staff', polish: 'Kadra międzynarodowa', pillar: 'Umiędzynarodowienie', weight: 2.5, source: 'Dane instytucjonalne THE', period: 'rok kończący się w 2023', description: 'Udział międzynarodowych pracowników akademickich FTE, normalizowany z uwzględnieniem wielkości populacji kraju.' },
    { label: 'International Co-authorship', polish: 'Współautorstwo międzynarodowe', pillar: 'Umiędzynarodowienie', weight: 2.5, source: 'Elsevier Scopus', period: 'publikacje 2020–2024', description: 'Udział ważonych dyscyplinowo publikacji z co najmniej jednym współautorem zagranicznym, korygowany o wielkość kraju.' },
    { label: 'Studying Abroad', polish: 'Studia za granicą', pillar: 'Umiędzynarodowienie', weight: 0, source: 'Dane instytucjonalne THE', period: 'raportowany, waga 0%', description: 'Liczba studentów wyjeżdżających na wymianę w relacji do wszystkich studentów FTE, ważona dyscyplinowo i korygowana o wielkość kraju. Nie wpływa na wynik 2026.' },

    { label: 'Industry Income', polish: 'Przychody z przemysłu', pillar: 'Przemysł', weight: 2, source: 'Dane instytucjonalne / Bank Światowy', period: 'rok kończący się w 2023', description: 'Przychody badawcze od przemysłu, skorygowane PPP i podzielone przez liczbę pracowników akademickich FTE.' },
    { label: 'Patents', polish: 'Patenty', pillar: 'Przemysł', weight: 2, source: 'Elsevier / dane patentowe', period: 'cykl WUR 2026', description: 'Liczba patentów cytujących publikacje uczelni, ważona według dyscypliny i normalizowana przez łączną liczbę pracowników akademickich i badawczych.' }
  ];

  const formatTheWurMethodologyWeight = (value) => Number(value).toLocaleString('pl-PL') + '%';
  let activeTheWurMethodologyPillar = 'Kształcenie';

  const renderTheWurMethodologyExplorer = () => {
    if (!theWurMethodologyPillarChart || !theWurMethodologyIndicatorList) return;
    const activePillar = theWurMethodologyPillars.find((pillar) => pillar.name === activeTheWurMethodologyPillar) || theWurMethodologyPillars[0];

    const selectPillar = (pillarName) => {
      activeTheWurMethodologyPillar = pillarName;
      renderTheWurMethodologyExplorer();
    };

    const makePillarItem = (pillar, legend = false) => {
      const active = pillar.name === activeTheWurMethodologyPillar;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = (legend ? 'rks-legend-button' : 'rks-weight-segment') + (active ? ' active' : '');
      button.setAttribute('aria-label', pillar.name + ', ' + formatTheWurMethodologyWeight(pillar.weight));
      if (legend) {
        const dot = document.createElement('span');
        dot.className = 'rks-legend-dot';
        dot.style.background = pillar.color;
        const name = document.createElement('span');
        name.className = 'rks-legend-name';
        name.textContent = pillar.name;
        const weight = document.createElement('span');
        weight.className = 'rks-legend-weight';
        weight.textContent = formatTheWurMethodologyWeight(pillar.weight);
        button.append(dot, name, weight);
      } else {
        button.style.width = pillar.weight + '%';
        button.style.background = pillar.color;
        button.style.color = '#fff';
        button.textContent = formatTheWurMethodologyWeight(pillar.weight);
        button.title = pillar.name + ' — ' + formatTheWurMethodologyWeight(pillar.weight);
      }
      button.addEventListener('click', () => selectPillar(pillar.name));
      return button;
    };

    theWurMethodologyPillarChart.replaceChildren(...theWurMethodologyPillars.map((pillar) => makePillarItem(pillar)));
    theWurMethodologyPillarLegend?.replaceChildren(...theWurMethodologyPillars.map((pillar) => makePillarItem(pillar, true)));

    const pillarButtons = theWurMethodologyPillars.map((pillar) => {
      const active = pillar.name === activeTheWurMethodologyPillar;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'rks-criterion-button' + (active ? ' active' : '');
      button.setAttribute('aria-pressed', active.toString());
      const dot = document.createElement('span');
      dot.className = 'rks-legend-dot';
      dot.style.background = pillar.color;
      const name = document.createElement('span');
      name.className = 'rks-criterion-name';
      name.textContent = pillar.name;
      const weight = document.createElement('span');
      weight.className = 'rks-criterion-weight';
      weight.textContent = formatTheWurMethodologyWeight(pillar.weight);
      button.append(dot, name, weight);
      button.addEventListener('click', () => selectPillar(pillar.name));
      return button;
    });
    theWurMethodologyPillarButtons?.replaceChildren(...pillarButtons);

    if (theWurMethodologyDetailSwatch) theWurMethodologyDetailSwatch.style.background = activePillar.color;
    if (theWurMethodologyDetailTitle) theWurMethodologyDetailTitle.textContent = activePillar.name + ' (' + activePillar.english + ')';
    if (theWurMethodologyDetailCopy) theWurMethodologyDetailCopy.textContent = activePillar.description;
    if (theWurMethodologyPillarTotal) {
      const caption = document.createElement('small');
      caption.textContent = 'waga filaru';
      theWurMethodologyPillarTotal.replaceChildren(formatTheWurMethodologyWeight(activePillar.weight), caption);
    }

    const rows = theWurMethodologyIndicators.filter((indicator) => indicator.pillar === activePillar.name).map((indicator) => {
      const row = document.createElement('article');
      row.className = 'rks-indicator';
      const copy = document.createElement('div');
      const title = document.createElement('h4');
      title.textContent = indicator.polish + ' (' + indicator.label + ')';
      const description = document.createElement('p');
      description.textContent = indicator.description;
      const source = document.createElement('span');
      source.className = 'rks-source-line';
      source.textContent = indicator.source;
      copy.append(title, description, source);
      const weight = document.createElement('div');
      weight.className = 'rks-indicator-weight';
      const weightCaption = document.createElement('small');
      weightCaption.textContent = indicator.weight === 0 ? 'nie wpływa na wynik' : 'waga';
      weight.append(formatTheWurMethodologyWeight(indicator.weight), weightCaption);
      const period = document.createElement('span');
      period.className = 'rks-indicator-delta' + (indicator.weight === 0 ? ' new' : '');
      period.textContent = indicator.period;
      row.append(copy, weight, period);
      return row;
    });
    theWurMethodologyIndicatorList.replaceChildren(...rows);

    const weightedCount = theWurMethodologyIndicators.filter((indicator) => indicator.weight > 0).length;
    const unweightedCount = theWurMethodologyIndicators.filter((indicator) => indicator.weight === 0).length;
    if (theWurMethodologyIndicatorCount) theWurMethodologyIndicatorCount.textContent = weightedCount + ' + ' + unweightedCount;
    if (theWurMethodologyPillarCount) theWurMethodologyPillarCount.textContent = theWurMethodologyPillars.length;
    if (theWurMethodologyLatestPosition && theLower?.length) {
      const latestIndex = theLower.length - 1;
      theWurMethodologyLatestPosition.textContent = theLower[latestIndex] === theUpper[latestIndex]
        ? '=' + theLower[latestIndex]
        : theLower[latestIndex] + '–' + theUpper[latestIndex];
    }
  };

  theWurMethodologyInfoTabs.forEach((button) => {
    button.addEventListener('click', () => {
      theWurMethodologyInfoTabs.forEach((tab) => tab.classList.toggle('active', tab === button));
      theWurMethodologyInfoTabs.forEach((tab) => document.getElementById(tab.dataset.theWurPanel)?.classList.toggle('hidden', tab !== button));
    });
  });
  renderTheWurMethodologyExplorer();
  populateMethodologySelect('theSubjectSelect', 'theMethodologySubjectSelect');
  const theMethodologySelect = document.getElementById('theMethodologySubjectSelect');
  const theMethodologyChart = document.getElementById('theMethodologySubjectChart');
  const theMethodologyLegend = document.getElementById('theMethodologySubjectLegend');
  const theMethodologyText = document.getElementById('theMethodologyProfileText');
  const theSubjectMethodologyProfileName = document.getElementById('theSubjectMethodologyProfileName');
  const theSubjectMethodologyIndicatorCount = document.getElementById('theSubjectMethodologyIndicatorCount');
  const theSubjectMethodologyPublicationThreshold = document.getElementById('theSubjectMethodologyPublicationThreshold');
  const theSubjectMethodologyStaffThreshold = document.getElementById('theSubjectMethodologyStaffThreshold');
  const theSubjectMethodologyEmphasis = document.getElementById('theSubjectMethodologyEmphasis');
  const theSubjectMethodologyLatestPosition = document.getElementById('theSubjectMethodologyLatestPosition');
  const theSubjectMethodologyPillarButtons = document.getElementById('theSubjectMethodologyPillarButtons');
  const theSubjectMethodologyDetailSwatch = document.getElementById('theSubjectMethodologyDetailSwatch');
  const theSubjectMethodologyDetailTitle = document.getElementById('theSubjectMethodologyDetailTitle');
  const theSubjectMethodologyDetailCopy = document.getElementById('theSubjectMethodologyDetailCopy');
  const theSubjectMethodologyPillarTotal = document.getElementById('theSubjectMethodologyPillarTotal');
  const theSubjectMethodologyIndicatorList = document.getElementById('theSubjectMethodologyIndicatorList');
  const theSubjectMethodologyEligibilityDetail = document.getElementById('theSubjectMethodologyEligibilityDetail');
  const theSubjectMethodologyDisciplinesDetail = document.getElementById('theSubjectMethodologyDisciplinesDetail');
  const theSubjectMethodologyInfoTabs = [...document.querySelectorAll('[data-the-subject-panel]')];

  const theSubjectMethodologyProfiles = {
    'Biznes i Ekonomia (Business and Economics)': {
      english: 'Business and Economics', publicationThreshold: 200, staffPercent: 5, staffCount: 50,
      weights: [21.1, 3.3, 0, 4.2, 1.8, 22.8, 4.4, 4.4, 13, 4, 4, 4, 3, 3, 3, 0, 2, 2],
      disciplines: ['Business and management', 'Accounting and finance', 'Economics and econometrics'],
      emphasis: 'Największy udział mają Środowisko badań (31,6%) i Kształcenie (30,4%); wskaźniki reputacyjne odpowiadają łącznie za 43,9% wyniku.'
    },
    'Informatyka (Computer Science)': {
      english: 'Computer Science', publicationThreshold: 500, staffPercent: 1, staffCount: 20,
      weights: [19.5, 3, 1, 3, 1.5, 21, 4, 4, 13.7, 4.6, 4.6, 4.6, 2.5, 2.5, 2.5, 0, 4, 4],
      disciplines: ['Computer Science — samodzielny obszar bez listy węższych dyscyplin'],
      emphasis: 'Profil wzmacnia produktywność badań oraz współpracę z gospodarką: Industry ma 8%, dwukrotnie więcej niż w rankingu ogólnym THE WUR.'
    },
    'Inżynieria (Engineering)': {
      english: 'Engineering', publicationThreshold: 500, staffPercent: 4, staffCount: 40,
      weights: [19.5, 3, 1, 3, 1.5, 21, 4, 4, 13.7, 4.6, 4.6, 4.6, 2.5, 2.5, 2.5, 0, 4, 4],
      disciplines: ['General engineering', 'Electrical and electronic engineering', 'Mechanical and aerospace engineering', 'Civil engineering', 'Chemical engineering'],
      emphasis: 'Inżynieria mocniej eksponuje produktywność badawczą i transfer wiedzy: Industry ma 8%, a każdy z dwóch wskaźników przemysłowych waży 4%.'
    },
    'Nauki ścisłe (Physical Sciences)': {
      english: 'Physical Sciences', publicationThreshold: 500, staffPercent: 5, staffCount: 50,
      weights: [17.9, 2.8, 1.2, 3.3, 1.6, 19.3, 3.6, 3.6, 17.5, 5.9, 5.9, 5.9, 2.5, 2.5, 2.5, 0, 2, 2],
      disciplines: ['Mathematics and statistics', 'Physics and astronomy', 'Chemistry', 'Geology, environmental, earth and marine sciences'],
      emphasis: 'Jakość badań jest najważniejszym filarem (35,2%); sam Citation Impact odpowiada za 17,5% wyniku obszaru.'
    },
    'Nauki społeczne (Social Sciences)': {
      english: 'Social Sciences', publicationThreshold: 200, staffPercent: 4, staffCount: 40,
      weights: [21.1, 3.3, 1.4, 4.3, 1.8, 22.8, 4.4, 4.4, 12.4, 4.2, 4.2, 4.2, 2.5, 2.5, 2.5, 0, 2, 2],
      disciplines: ['Communication and media studies', 'Politics and international studies, including development studies', 'Sociology', 'Geography'],
      emphasis: 'Największy udział mają Kształcenie (31,9%) i Środowisko badań (31,6%); reputacja dydaktyczna i badawcza sumują się do 43,9%.'
    }
  };

  const formatTheSubjectMethodologyWeight = (value) => Number(value).toLocaleString('pl-PL', { maximumFractionDigits: 1 }) + '%';
  let activeTheSubjectMethodologyPillar = 'Kształcenie';

  renderTheSubjectMethodology = () => {
    if (!theMethodologySelect || !theMethodologyChart || !theSubjectMethodologyIndicatorList) return;
    const subject = theMethodologySelect.value;
    const profile = theSubjectMethodologyProfiles[subject] || theSubjectMethodologyProfiles['Inżynieria (Engineering)'];
    const indicators = theWurMethodologyIndicators.map((indicator, index) => ({ ...indicator, weight: profile.weights[index] }));
    const pillars = theWurMethodologyPillars.map((pillar) => ({
      ...pillar,
      weight: indicators.filter((indicator) => indicator.pillar === pillar.name).reduce((sum, indicator) => sum + indicator.weight, 0)
    }));
    const activePillar = pillars.find((pillar) => pillar.name === activeTheSubjectMethodologyPillar) || pillars[0];

    const selectPillar = (pillarName) => {
      activeTheSubjectMethodologyPillar = pillarName;
      renderTheSubjectMethodology();
    };

    const makePillarItem = (pillar, legend = false) => {
      const active = pillar.name === activeTheSubjectMethodologyPillar;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = (legend ? 'rks-legend-button' : 'rks-weight-segment') + (active ? ' active' : '');
      button.setAttribute('aria-label', pillar.name + ', ' + formatTheSubjectMethodologyWeight(pillar.weight));
      if (legend) {
        const dot = document.createElement('span');
        dot.className = 'rks-legend-dot';
        dot.style.background = pillar.color;
        const name = document.createElement('span');
        name.className = 'rks-legend-name';
        name.textContent = pillar.name;
        const weight = document.createElement('span');
        weight.className = 'rks-legend-weight';
        weight.textContent = formatTheSubjectMethodologyWeight(pillar.weight);
        button.append(dot, name, weight);
      } else {
        button.style.width = pillar.weight + '%';
        button.style.background = pillar.color;
        button.style.color = '#fff';
        button.textContent = formatTheSubjectMethodologyWeight(pillar.weight);
        button.title = pillar.name + ' — ' + formatTheSubjectMethodologyWeight(pillar.weight);
      }
      button.addEventListener('click', () => selectPillar(pillar.name));
      return button;
    };

    theMethodologyChart.replaceChildren(...pillars.map((pillar) => makePillarItem(pillar)));
    theMethodologyLegend?.replaceChildren(...pillars.map((pillar) => makePillarItem(pillar, true)));
    theMethodologyChart.setAttribute('aria-label', 'Wagi filarów THE by Subject 2026 dla obszaru ' + profile.english);

    const pillarButtons = pillars.map((pillar) => {
      const active = pillar.name === activeTheSubjectMethodologyPillar;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'rks-criterion-button' + (active ? ' active' : '');
      button.setAttribute('aria-pressed', active.toString());
      const dot = document.createElement('span');
      dot.className = 'rks-legend-dot';
      dot.style.background = pillar.color;
      const name = document.createElement('span');
      name.className = 'rks-criterion-name';
      name.textContent = pillar.name;
      const weight = document.createElement('span');
      weight.className = 'rks-criterion-weight';
      weight.textContent = formatTheSubjectMethodologyWeight(pillar.weight);
      button.append(dot, name, weight);
      button.addEventListener('click', () => selectPillar(pillar.name));
      return button;
    });
    theSubjectMethodologyPillarButtons?.replaceChildren(...pillarButtons);

    if (theSubjectMethodologyDetailSwatch) theSubjectMethodologyDetailSwatch.style.background = activePillar.color;
    if (theSubjectMethodologyDetailTitle) theSubjectMethodologyDetailTitle.textContent = activePillar.name + ' (' + activePillar.english + ')';
    if (theSubjectMethodologyDetailCopy) theSubjectMethodologyDetailCopy.textContent = activePillar.description;
    if (theSubjectMethodologyPillarTotal) {
      const caption = document.createElement('small');
      caption.textContent = 'waga filaru';
      theSubjectMethodologyPillarTotal.replaceChildren(formatTheSubjectMethodologyWeight(activePillar.weight), caption);
    }

    const rows = indicators.filter((indicator) => indicator.pillar === activePillar.name).map((indicator) => {
      const row = document.createElement('article');
      row.className = 'rks-indicator';
      const copy = document.createElement('div');
      const title = document.createElement('h4');
      title.textContent = indicator.polish + ' (' + indicator.label + ')';
      const description = document.createElement('p');
      description.textContent = indicator.description;
      const source = document.createElement('span');
      source.className = 'rks-source-line';
      source.textContent = indicator.source;
      copy.append(title, description, source);
      const weight = document.createElement('div');
      weight.className = 'rks-indicator-weight';
      const weightCaption = document.createElement('small');
      weightCaption.textContent = indicator.weight === 0 ? 'nie wpływa na wynik' : 'waga';
      weight.append(formatTheSubjectMethodologyWeight(indicator.weight), weightCaption);
      const period = document.createElement('span');
      period.className = 'rks-indicator-delta' + (indicator.weight === 0 ? ' new' : '');
      period.textContent = indicator.period;
      row.append(copy, weight, period);
      return row;
    });
    theSubjectMethodologyIndicatorList.replaceChildren(...rows);

    if (theMethodologyText) theMethodologyText.textContent = profile.emphasis;
    if (theSubjectMethodologyProfileName) theSubjectMethodologyProfileName.textContent = profile.english;
    if (theSubjectMethodologyIndicatorCount) theSubjectMethodologyIndicatorCount.textContent = '17 + 1';
    if (theSubjectMethodologyPublicationThreshold) theSubjectMethodologyPublicationThreshold.textContent = profile.publicationThreshold.toLocaleString('pl-PL');
    if (theSubjectMethodologyStaffThreshold) theSubjectMethodologyStaffThreshold.textContent = profile.staffPercent + '% lub ' + profile.staffCount + ' FTE';
    if (theSubjectMethodologyEmphasis) theSubjectMethodologyEmphasis.textContent = profile.emphasis + ' Studying Abroad jest raportowany z wagą 0%.';
    if (theSubjectMethodologyEligibilityDetail) theSubjectMethodologyEligibilityDetail.textContent = profile.english + ': co najmniej ' + profile.publicationThreshold.toLocaleString('pl-PL') + ' publikacji w latach 2020–2024 oraz co najmniej ' + profile.staffPercent + '% kadry akademickiej w obszarze albo ' + profile.staffCount + ' pracowników FTE.';
    if (theSubjectMethodologyDisciplinesDetail) theSubjectMethodologyDisciplinesDetail.textContent = profile.english + ' obejmuje: ' + profile.disciplines.join('; ') + '.';

    const subjectResult = theSubjectIndicatorData.subjects?.[subject];
    const latestRank = subjectResult?.rankLabels?.[subjectResult.rankLabels.length - 1] || '—';
    if (theSubjectMethodologyLatestPosition) theSubjectMethodologyLatestPosition.textContent = 'PW 2026: ' + latestRank;
  };

  theSubjectMethodologyInfoTabs.forEach((button) => {
    button.addEventListener('click', () => {
      theSubjectMethodologyInfoTabs.forEach((tab) => tab.classList.toggle('active', tab === button));
      theSubjectMethodologyInfoTabs.forEach((tab) => document.getElementById(tab.dataset.theSubjectPanel)?.classList.toggle('hidden', tab !== button));
    });
  });
  theMethodologySelect?.addEventListener('change', renderTheSubjectMethodology);
  renderTheSubjectMethodology();
  populateMethodologySelect('grasSubjectSelect', 'grasMethodologySubjectSelect');
  const grasMethodologySelect = document.getElementById('grasMethodologySubjectSelect');
  const grasMethodologyChart = document.getElementById('grasMethodologySubjectChart');
  const grasMethodologyLegend = document.getElementById('grasMethodologySubjectLegend');
  const grasMethodologyText = document.getElementById('grasMethodologyProfileText');
  const grasMethodologyBadge = document.getElementById('grasMethodologyProfileBadge');
  const grasMethodologyListedTag = document.getElementById('grasMethodologyListedTag');
  const grasMethodologyWeightTotal = document.getElementById('grasMethodologyWeightTotal');
  const grasMethodologyIndicatorCount = document.getElementById('grasMethodologyIndicatorCount');
  const grasMethodologyPublicationThreshold = document.getElementById('grasMethodologyPublicationThreshold');
  const grasMethodologyLatestPosition = document.getElementById('grasMethodologyLatestPosition');
  const grasMethodologyGroupButtons = document.getElementById('grasMethodologyGroupButtons');
  const grasMethodologyDetailSwatch = document.getElementById('grasMethodologyDetailSwatch');
  const grasMethodologyDetailTitle = document.getElementById('grasMethodologyDetailTitle');
  const grasMethodologyDetailCopy = document.getElementById('grasMethodologyDetailCopy');
  const grasMethodologyGroupTotal = document.getElementById('grasMethodologyGroupTotal');
  const grasMethodologyIndicatorList = document.getElementById('grasMethodologyIndicatorList');
  const grasMethodologyEligibilityDetail = document.getElementById('grasMethodologyEligibilityDetail');
  const grasMethodologyPublicationDetail = document.getElementById('grasMethodologyPublicationDetail');
  const grasMethodologyInfoTabs = [...document.querySelectorAll('[data-gras-panel]')];

  const grasMethodologyProfiles = {
    'Elektrotechnika i elektronika (Electrical & Electronic Engineering)': { threshold: 150, listed: 500, weights: [40, 20, 40, 10, 40, 80, 100, 50, 20] },
    'Energetyka (Energy Science & Engineering)': { threshold: 200, listed: 400, weights: [20, 20, 60, 0, 100, 20, 100, 50, 20] },
    'Fizyka (Physics)': { threshold: 300, listed: 500, weights: [60, 60, 60, 20, 100, 100, 100, 50, 20] },
    'Inżynieria mechaniczna (Mechanical Engineering)': { threshold: 100, listed: 400, weights: [40, 20, 60, 0, 60, 60, 100, 50, 20] },
    'Inżynieria metalurgiczna (Metallurgical Engineering)': { threshold: 100, listed: 300, weights: [0, 0, 40, 0, 100, 0, 100, 50, 20] },
    'Matematyka (Mathematics)': { threshold: 100, listed: 500, weights: [40, 0, 60, 20, 100, 100, 100, 50, 20] },
    'Nauka i technologie instrumentacji (Instruments Science & Technology)': { threshold: 100, listed: 400, weights: [0, 0, 20, 0, 100, 0, 100, 50, 20] },
    'Telekomunikacja (Telecommunication Engineering)': { threshold: 100, listed: 400, weights: [40, 20, 20, 20, 100, 60, 100, 50, 20] }
  };

  const grasMethodologyGroups = [
    { name: 'Kadra światowej klasy', english: 'World-Class Faculty', color: '#be123c', description: 'Osiągnięcia i role obecnych pracowników: laureaci prestiżowych nagród, Highly Cited Researchers, redaktorzy naczelni oraz władze organizacji naukowych.' },
    { name: 'Dorobek światowej klasy', english: 'World-Class Output', color: '#ea580c', description: 'Publikacje w najważniejszych czasopismach i konferencjach oraz nagrody otrzymane przez pracowników w czasie afiliacji z uczelnią.' },
    { name: 'Badania wysokiej jakości', english: 'High-Quality Research', color: '#d97706', description: 'Wolumen artykułów i prac przeglądowych opublikowanych w czasopismach należących do pierwszego kwartyla Journal Impact Factor.' },
    { name: 'Wpływ badań', english: 'Research Impact', color: '#4f46e5', description: 'Wpływ cytowaniowy publikacji skorygowany o dyscyplinę, rok i typ dokumentu.' },
    { name: 'Współpraca międzynarodowa', english: 'International Collaboration', color: '#059669', description: 'Udział publikacji, w których adresach autorów występują co najmniej dwa różne kraje.' }
  ];

  const grasMethodologyIndicators = [
    { code: 'Laureate', name: 'Laureaci międzynarodowych nagród', group: 'Kadra światowej klasy', source: 'Academic Excellence Survey i oficjalne strony nagród', period: 'nagrody 1981–2024; stan kadry: VI 2025', description: 'Pełnoetatowi pracownicy do 80. roku życia, którzy otrzymali jedną z prestiżowych nagród wskazanych dla dyscypliny. Jedna osoba jest liczona raz w tej samej dyscyplinie.' },
    { code: 'HCR', name: 'Highly Cited Researchers', group: 'Kadra światowej klasy', source: 'Clarivate Highly Cited Researchers', period: 'lista wydana w I 2025', description: 'Badacze o wyjątkowo wysokim wpływie cytowań. Uwzględniane są tylko główne afiliacje; wyróżnienie w kilku dyscyplinach jest liczone osobno.' },
    { code: 'Editor', name: 'Redaktorzy naczelni czasopism', group: 'Kadra światowej klasy', source: 'JCR 2023 i oficjalne strony czasopism', period: 'funkcje pełnione w 2025 r.', description: 'Redaktorzy naczelni i ich zastępcy w czasopismach SCIE, SSCI i A&HCI. Funkcja naczelna ma wagę 200%, zastępcy 100%; wyłączono czasopisma Hindawi, MDPI, Frontiers i ESCI.' },
    { code: 'Leadership', name: 'Władze organizacji naukowych', group: 'Kadra światowej klasy', source: 'Academic Excellence Survey i strony organizacji', period: 'stan na VII 2025', description: 'Pracownicy pełniący funkcje kierownicze w kluczowych organizacjach międzynarodowych. Prezydent i sekretarz generalny mają wagę 200%, a pozostałe wskazane funkcje 100%.' },
    { code: 'TJ', name: 'Publikacje w topowych źródłach', group: 'Dorobek światowej klasy', source: 'Academic Excellence Survey, Web of Science i strony źródeł', period: 'publikacje 2020–2024', description: 'Artykuły i prace przeglądowe w najważniejszych czasopismach lub konferencjach. Dla informatyki i AI stosuje się także 26 konferencji, a w sześciu dyscyplinach zastępczo czasopisma Q1.' },
    { code: 'Award', name: 'Międzynarodowe nagrody akademickie', group: 'Dorobek światowej klasy', source: 'Academic Excellence Survey i oficjalne strony nagród', period: 'nagrody 1901–2024', description: 'Nagrody zdobyte przez pracowników pełnoetatowych w czasie afiliacji. Punkty są dzielone między laureatów i afiliacje, a wagi maleją dla starszych nagród: 100% za 2021–2024, 75% za 2011–2020, 50% za 2001–2010 i 25% za 1991–2000.' },
    { code: 'Q1', name: 'Publikacje w pierwszym kwartylu', group: 'Badania wysokiej jakości', source: 'Clarivate Web of Science i InCites', period: 'publikacje 2020–2024', description: 'Liczba artykułów i prac przeglądowych opublikowanych w czasopismach Q1 według Journal Impact Factor, po przypisaniu kategorii Web of Science do dyscyplin GRAS.' },
    { code: 'CNCI', name: 'Znormalizowany wpływ cytowań', group: 'Wpływ badań', source: 'Clarivate InCites', period: 'publikacje 2020–2024', description: 'Stosunek liczby cytowań do średniej dla tej samej kategorii, roku i typu dokumentu. Wartość 1 oznacza średnią światową; dla skrajnych wyników stosowany jest limit opisany w zasadach liczenia.' },
    { code: 'IC', name: 'Współpraca międzynarodowa', group: 'Współpraca międzynarodowa', source: 'Clarivate InCites', period: 'publikacje 2020–2024', description: 'Udział artykułów i prac przeglądowych, których adresy autorów obejmują instytucje z co najmniej dwóch krajów, w całym dorobku uczelni w dyscyplinie.' }
  ];

  let activeGrasMethodologyGroup = 'Kadra światowej klasy';
  const formatGrasPosition = (subject) => {
    const data = grasSubjectData?.subjects?.[subject];
    const latestIndex = grasSubjectData?.years?.length - 1;
    if (!data || latestIndex < 0 || data.lower[latestIndex] == null) return 'poza listą';
    return data.lower[latestIndex] === data.upper[latestIndex] ? '=' + data.lower[latestIndex] : data.lower[latestIndex] + '–' + data.upper[latestIndex];
  };

  const renderGrasMethodology = () => {
    if (!grasMethodologySelect || !grasMethodologyChart || !grasMethodologyIndicatorList) return;
    const subject = grasMethodologySelect.value;
    const profile = grasMethodologyProfiles[subject] || grasMethodologyProfiles['Telekomunikacja (Telecommunication Engineering)'];
    const weightedIndicators = grasMethodologyIndicators.map((indicator, index) => ({ ...indicator, weight: profile.weights[index] }));
    const totalWeight = profile.weights.reduce((sum, weight) => sum + weight, 0);
    const activeGroup = grasMethodologyGroups.find((group) => group.name === activeGrasMethodologyGroup) || grasMethodologyGroups[0];

    const selectGroup = (groupName) => {
      activeGrasMethodologyGroup = groupName;
      renderGrasMethodology();
    };

    const makeIndicatorItem = (indicator, legend = false) => {
      const group = grasMethodologyGroups.find((item) => item.name === indicator.group);
      const active = indicator.group === activeGrasMethodologyGroup;
      const share = totalWeight ? indicator.weight / totalWeight * 100 : 0;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = (legend ? 'rks-legend-button' : 'rks-weight-segment') + (active ? ' active' : '');
      button.setAttribute('aria-label', indicator.code + ', waga ' + indicator.weight + ' punktów');
      if (legend) {
        const dot = document.createElement('span');
        dot.className = 'rks-legend-dot';
        dot.style.background = group.color;
        const name = document.createElement('span');
        name.className = 'rks-legend-name';
        name.textContent = indicator.code;
        const weight = document.createElement('span');
        weight.className = 'rks-legend-weight';
        weight.textContent = indicator.weight + ' pkt';
        button.append(dot, name, weight);
      } else {
        button.style.width = share + '%';
        button.style.background = group.color;
        button.style.color = '#fff';
        button.textContent = share >= 6 ? String(indicator.weight) : '';
        button.title = indicator.code + ' — waga ' + indicator.weight + ' pkt';
      }
      button.addEventListener('click', () => selectGroup(indicator.group));
      return button;
    };

    grasMethodologyChart.replaceChildren(...weightedIndicators.map((indicator) => makeIndicatorItem(indicator)));
    grasMethodologyLegend?.replaceChildren(...weightedIndicators.map((indicator) => makeIndicatorItem(indicator, true)));

    const groupButtons = grasMethodologyGroups.map((group) => {
      const groupWeight = weightedIndicators.filter((indicator) => indicator.group === group.name).reduce((sum, indicator) => sum + indicator.weight, 0);
      const active = group.name === activeGrasMethodologyGroup;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'rks-criterion-button' + (active ? ' active' : '');
      button.setAttribute('aria-pressed', active.toString());
      const dot = document.createElement('span');
      dot.className = 'rks-legend-dot';
      dot.style.background = group.color;
      const name = document.createElement('span');
      name.className = 'rks-criterion-name';
      name.textContent = group.name;
      const weight = document.createElement('span');
      weight.className = 'rks-criterion-weight';
      weight.textContent = groupWeight + ' pkt';
      button.append(dot, name, weight);
      button.addEventListener('click', () => selectGroup(group.name));
      return button;
    });
    grasMethodologyGroupButtons?.replaceChildren(...groupButtons);

    const selectedIndicators = weightedIndicators.filter((indicator) => indicator.group === activeGroup.name);
    const selectedWeight = selectedIndicators.reduce((sum, indicator) => sum + indicator.weight, 0);
    if (grasMethodologyDetailSwatch) grasMethodologyDetailSwatch.style.background = activeGroup.color;
    if (grasMethodologyDetailTitle) grasMethodologyDetailTitle.textContent = activeGroup.name + ' (' + activeGroup.english + ')';
    if (grasMethodologyDetailCopy) grasMethodologyDetailCopy.textContent = activeGroup.description;
    if (grasMethodologyGroupTotal) {
      const caption = document.createElement('small');
      caption.textContent = 'suma wag kategorii';
      grasMethodologyGroupTotal.replaceChildren(selectedWeight + ' pkt', caption);
    }

    const rows = selectedIndicators.map((indicator) => {
      const row = document.createElement('article');
      row.className = 'rks-indicator';
      const copy = document.createElement('div');
      const title = document.createElement('h4');
      title.textContent = indicator.code + ' — ' + indicator.name;
      const description = document.createElement('p');
      description.textContent = indicator.description;
      const source = document.createElement('span');
      source.className = 'rks-source-line';
      source.textContent = indicator.source;
      copy.append(title, description, source);
      const weight = document.createElement('div');
      weight.className = 'rks-indicator-weight';
      const weightCaption = document.createElement('small');
      weightCaption.textContent = indicator.weight === 0 ? 'nieaktywny w profilu' : 'waga punktowa';
      weight.append(String(indicator.weight), weightCaption);
      const period = document.createElement('span');
      period.className = 'rks-indicator-delta' + (indicator.weight === 0 ? ' new' : '');
      period.textContent = indicator.period;
      row.append(copy, weight, period);
      return row;
    });
    grasMethodologyIndicatorList.replaceChildren(...rows);

    const latestPosition = formatGrasPosition(subject);
    if (grasMethodologyBadge) grasMethodologyBadge.textContent = 'Wagi punktowe zależne od dyscypliny';
    if (grasMethodologyText) grasMethodologyText.textContent = 'Szerokości segmentów pokazują udział wskaźnika w sumie wag profilu. Etykiety podają oficjalne wagi punktowe, a nie procenty.';
    if (grasMethodologyListedTag) grasMethodologyListedTag.textContent = profile.listed + ' UCZELNI';
    if (grasMethodologyWeightTotal) grasMethodologyWeightTotal.textContent = 'Suma wag: ' + totalWeight + ' pkt';
    if (grasMethodologyIndicatorCount) grasMethodologyIndicatorCount.textContent = grasMethodologyIndicators.length;
    if (grasMethodologyPublicationThreshold) grasMethodologyPublicationThreshold.textContent = profile.threshold;
    if (grasMethodologyLatestPosition) grasMethodologyLatestPosition.textContent = latestPosition;
    if (grasMethodologyEligibilityDetail) grasMethodologyEligibilityDetail.textContent = 'Próg dla wybranej dyscypliny: ' + profile.threshold + ' publikacji z lat 2020–2024; liczba publikowanych uczelni: ' + profile.listed + '.';
    if (grasMethodologyPublicationDetail) grasMethodologyPublicationDetail.textContent = 'W tej dyscyplinie publikowanych jest ' + profile.listed + ' uczelni. Pozycja PW w edycji 2025: ' + latestPosition + '.';
  };

  grasMethodologySelect?.addEventListener('change', renderGrasMethodology);
  grasMethodologyInfoTabs.forEach((button) => {
    button.addEventListener('click', () => {
      grasMethodologyInfoTabs.forEach((tab) => tab.classList.toggle('active', tab === button));
      grasMethodologyInfoTabs.forEach((tab) => document.getElementById(tab.dataset.grasPanel)?.classList.toggle('hidden', tab !== button));
    });
  });
  renderGrasMethodology();
  const engiInstitutionCriterionChart = document.getElementById('engiInstitutionCriterionChart');
  const engiInstitutionCriterionLegend = document.getElementById('engiInstitutionCriterionLegend');
  const engiInstitutionCriteriaButtons = document.getElementById('engiInstitutionCriteriaButtons');
  const engiInstitutionDetailSwatch = document.getElementById('engiInstitutionDetailSwatch');
  const engiInstitutionDetailTitle = document.getElementById('engiInstitutionDetailTitle');
  const engiInstitutionDetailCopy = document.getElementById('engiInstitutionDetailCopy');
  const engiInstitutionCriterionTotal = document.getElementById('engiInstitutionCriterionTotal');
  const engiInstitutionIndicatorList = document.getElementById('engiInstitutionIndicatorList');
  const engiInstitutionIndicatorCount = document.getElementById('engiInstitutionIndicatorCount');
  const engiInstitutionCriterionCount = document.getElementById('engiInstitutionCriterionCount');
  const engiInstitutionLatestPosition = document.getElementById('engiInstitutionLatestPosition');
  const engiInstitutionInfoTabs = [...document.querySelectorAll('[data-engi-institution-panel]')];

  const engiInstitutionCriteria = [
    { name: 'Badania', weight: 28, color: '#4f46e5', description: 'Skala dorobku, jakość czasopism, wpływ cytowań oraz zmiana wpływu badań w całym obszarze Engineering & Technology.' },
    { name: 'Innowacyjność', weight: 25, color: '#0891b2', description: 'Finansowanie europejskich projektów, aktywność patentowa, wykorzystanie badań w patentach i współpraca z biznesem.' },
    { name: 'SDG 9', weight: 10, color: '#059669', description: 'Wkład publikacyjny uczelni w przemysł, innowacyjność i infrastrukturę w obszarze inżynierii i technologii.' },
    { name: 'Umiędzynarodowienie', weight: 16, color: '#d97706', description: 'Międzynarodowe współautorstwo, wpływ cytowaniowy współpracy zagranicznej i członkostwo w sojuszu European Universities.' },
    { name: 'Wielodyscyplinarność', weight: 21, color: '#e11d48', description: 'Wyniki uczelni w siedmiu rankingach EngiRank by Subject, po 3% za każdą dyscyplinę.' }
  ];

  const engiInstitutionIndicators = [
    { label: 'Publikacje', group: 'Badania', weight: 10, source: 'Scopus / SciVal', period: '2020–2024', description: 'Liczba publikacji uczelni w obszarze Engineering & Technology według klasyfikacji FORD.' },
    { label: 'Publikacje w Top 10% czasopism', group: 'Badania', weight: 6, source: 'Scopus / SciVal', period: '2020–2024', description: 'Odsetek publikacji w czasopismach należących do górnych 10% według wskaźnika CiteScore.' },
    { label: 'Cytowania', group: 'Badania', weight: 6, source: 'Scopus / SciVal', period: '2020–2024', description: 'Średnia liczba cytowań przypadających na publikację w obszarze Engineering & Technology.' },
    { label: 'Zmiana wpływu cytowaniowego', group: 'Badania', weight: 6, source: 'Scopus / SciVal', period: '2020–2024 vs 2015–2019', description: 'Relacja FWCI publikacji z lat 2020–2024 do FWCI publikacji z lat 2015–2019.' },
    { label: 'Finansowanie badań i innowacji', group: 'Innowacyjność', weight: 10, source: 'CORDIS / Bank Światowy', period: '2020–2024', description: 'Wartość grantów z programów ramowych UE, skorygowana parytetem siły nabywczej.' },
    { label: 'Patenty', group: 'Innowacyjność', weight: 5, source: 'EPO-PATSTAT', period: '2020–2024', description: 'Liczba patentów przyznanych uczelni przez Europejski Urząd Patentowy.' },
    { label: 'Cytowania patentowe', group: 'Innowacyjność', weight: 5, source: 'Scopus / SciVal', period: '2020–2024', description: 'Średnia liczba cytowań patentowych przypadających na publikację naukową uczelni w obszarze inżynierii i technologii.' },
    { label: 'Współpraca akademicka z biznesem', group: 'Innowacyjność', weight: 5, source: 'Scopus / SciVal', period: '2020–2024', description: 'Odsetek publikacji współtworzonych z badaczami afiliowanymi poza sektorem akademickim.' },
    { label: 'SDG 9: Przemysł, innowacyjność i infrastruktura', group: 'SDG 9', weight: 10, source: 'Scopus / SciVal', period: '2020–2024', description: 'Liczba publikacji przypisanych jednocześnie do SDG 9 oraz obszaru Engineering & Technology.' },
    { label: 'Współpraca międzynarodowa', group: 'Umiędzynarodowienie', weight: 10, source: 'Scopus / SciVal', period: '2020–2024', description: 'Odsetek publikacji w obszarze Engineering & Technology mających współautorów z więcej niż jednego kraju.' },
    { label: 'Wpływ współpracy międzynarodowej', group: 'Umiędzynarodowienie', weight: 2, source: 'Scopus / SciVal', period: '2020–2024', description: 'Wpływ cytowaniowy publikacji uczelni powstałych we współautorstwie międzynarodowym.' },
    { label: 'European University', group: 'Umiędzynarodowienie', weight: 4, source: 'European Education Area', period: 'stan na 18.08.2025', description: 'Wskaźnik binarny: pełne członkostwo uczelni w jednym z sojuszy European Universities.' },
    { label: 'Inżynieria chemiczna', group: 'Wielodyscyplinarność', weight: 3, source: 'EngiRank by Subject', period: 'edycja 2025', description: 'Wynik uczelni w rankingu dziedzinowym Chemical Engineering.' },
    { label: 'Inżynieria lądowa', group: 'Wielodyscyplinarność', weight: 3, source: 'EngiRank by Subject', period: 'edycja 2025', description: 'Wynik uczelni w rankingu dziedzinowym Civil Engineering.' },
    { label: 'Elektronika, elektrotechnika i inżynieria informacyjna', group: 'Wielodyscyplinarność', weight: 3, source: 'EngiRank by Subject', period: 'edycja 2025', description: 'Wynik uczelni w rankingu Electrical, Electronic and Information Engineering.' },
    { label: 'Inżynieria środowiska', group: 'Wielodyscyplinarność', weight: 3, source: 'EngiRank by Subject', period: 'edycja 2025', description: 'Wynik uczelni w rankingu dziedzinowym Environmental Engineering.' },
    { label: 'Inżynieria materiałowa', group: 'Wielodyscyplinarność', weight: 3, source: 'EngiRank by Subject', period: 'edycja 2025', description: 'Wynik uczelni w rankingu dziedzinowym Materials Engineering.' },
    { label: 'Inżynieria mechaniczna', group: 'Wielodyscyplinarność', weight: 3, source: 'EngiRank by Subject', period: 'edycja 2025', description: 'Wynik uczelni w rankingu dziedzinowym Mechanical Engineering.' },
    { label: 'Inżynieria medyczna', group: 'Wielodyscyplinarność', weight: 3, source: 'EngiRank by Subject', period: 'edycja 2025', description: 'Wynik uczelni w rankingu dziedzinowym Medical Engineering.' }
  ];

  const formatEngiInstitutionWeight = (value) => `${Number(value).toLocaleString('pl-PL')}%`;
  let activeEngiInstitutionCriterion = 'Badania';

  const renderEngiInstitutionMethodology = () => {
    if (!engiInstitutionCriterionChart || !engiInstitutionIndicatorList) return;
    const activeCriterion = engiInstitutionCriteria.find((criterion) => criterion.name === activeEngiInstitutionCriterion) || engiInstitutionCriteria[0];

    const selectCriterion = (criterionName) => {
      activeEngiInstitutionCriterion = criterionName;
      renderEngiInstitutionMethodology();
    };

    const makeCriterionItem = (criterion, legend = false) => {
      const active = criterion.name === activeEngiInstitutionCriterion;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = (legend ? 'rks-legend-button' : 'rks-weight-segment') + (active ? ' active' : '');
      button.setAttribute('aria-label', `${criterion.name}, ${formatEngiInstitutionWeight(criterion.weight)}`);
      if (legend) {
        const dot = document.createElement('span');
        dot.className = 'rks-legend-dot';
        dot.style.background = criterion.color;
        const name = document.createElement('span');
        name.className = 'rks-legend-name';
        name.textContent = criterion.name;
        const weight = document.createElement('span');
        weight.className = 'rks-legend-weight';
        weight.textContent = formatEngiInstitutionWeight(criterion.weight);
        button.append(dot, name, weight);
      } else {
        button.style.width = `${criterion.weight}%`;
        button.style.background = criterion.color;
        button.style.color = '#fff';
        button.textContent = formatEngiInstitutionWeight(criterion.weight);
        button.title = `${criterion.name} — ${formatEngiInstitutionWeight(criterion.weight)}`;
      }
      button.addEventListener('click', () => selectCriterion(criterion.name));
      return button;
    };

    engiInstitutionCriterionChart.replaceChildren(...engiInstitutionCriteria.map((criterion) => makeCriterionItem(criterion)));
    engiInstitutionCriterionLegend?.replaceChildren(...engiInstitutionCriteria.map((criterion) => makeCriterionItem(criterion, true)));

    const criterionButtons = engiInstitutionCriteria.map((criterion) => {
      const active = criterion.name === activeEngiInstitutionCriterion;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'rks-criterion-button' + (active ? ' active' : '');
      button.setAttribute('aria-pressed', active.toString());
      const dot = document.createElement('span');
      dot.className = 'rks-legend-dot';
      dot.style.background = criterion.color;
      const name = document.createElement('span');
      name.className = 'rks-criterion-name';
      name.textContent = criterion.name;
      const weight = document.createElement('span');
      weight.className = 'rks-criterion-weight';
      weight.textContent = formatEngiInstitutionWeight(criterion.weight);
      button.append(dot, name, weight);
      button.addEventListener('click', () => selectCriterion(criterion.name));
      return button;
    });
    engiInstitutionCriteriaButtons?.replaceChildren(...criterionButtons);

    if (engiInstitutionDetailSwatch) engiInstitutionDetailSwatch.style.background = activeCriterion.color;
    if (engiInstitutionDetailTitle) engiInstitutionDetailTitle.textContent = activeCriterion.name;
    if (engiInstitutionDetailCopy) engiInstitutionDetailCopy.textContent = activeCriterion.description;
    if (engiInstitutionCriterionTotal) {
      const caption = document.createElement('small');
      caption.textContent = 'waga kryterium';
      engiInstitutionCriterionTotal.replaceChildren(formatEngiInstitutionWeight(activeCriterion.weight), caption);
    }

    const rows = engiInstitutionIndicators.filter((indicator) => indicator.group === activeCriterion.name).map((indicator) => {
      const row = document.createElement('article');
      row.className = 'rks-indicator';
      const copy = document.createElement('div');
      const title = document.createElement('h4');
      title.textContent = indicator.label;
      const description = document.createElement('p');
      description.textContent = indicator.description;
      const source = document.createElement('span');
      source.className = 'rks-source-line';
      source.textContent = indicator.source;
      copy.append(title, description, source);
      const weight = document.createElement('div');
      weight.className = 'rks-indicator-weight';
      const weightCaption = document.createElement('small');
      weightCaption.textContent = 'waga';
      weight.append(formatEngiInstitutionWeight(indicator.weight), weightCaption);
      const period = document.createElement('span');
      period.className = 'rks-indicator-delta';
      period.textContent = indicator.period;
      row.append(copy, weight, period);
      return row;
    });
    engiInstitutionIndicatorList.replaceChildren(...rows);

    if (engiInstitutionIndicatorCount) engiInstitutionIndicatorCount.textContent = engiInstitutionIndicators.length;
    if (engiInstitutionCriterionCount) engiInstitutionCriterionCount.textContent = engiInstitutionCriteria.length;
    if (engiInstitutionLatestPosition) engiInstitutionLatestPosition.textContent = engiPositions?.length ? (engiRankLabels?.[engiPositions.length - 1] || `${engiPositions[engiPositions.length - 1]}.`) : '—';
  };

  engiInstitutionInfoTabs.forEach((button) => {
    button.addEventListener('click', () => {
      engiInstitutionInfoTabs.forEach((tab) => tab.classList.toggle('active', tab === button));
      engiInstitutionInfoTabs.forEach((tab) => document.getElementById(tab.dataset.engiInstitutionPanel)?.classList.toggle('hidden', tab !== button));
    });
  });

  renderEngiInstitutionMethodology();
  populateMethodologySelect('engiSubjectSelect', 'engiMethodologySubjectSelect');
  const engiMethodologySelect = document.getElementById('engiMethodologySubjectSelect');
  const engiMethodologyChart = document.getElementById('engiMethodologySubjectChart');
  const engiMethodologyLegend = document.getElementById('engiMethodologySubjectLegend');
  const engiMethodologyText = document.getElementById('engiMethodologyProfileText');
  const engiMethodologyBadge = document.getElementById('engiMethodologyProfileBadge');
  const engiMethodologyVariantTag = document.getElementById('engiMethodologyVariantTag');
  const engiMethodologyIndicatorCount = document.getElementById('engiMethodologyIndicatorCount');
  const engiMethodologyCriterionCount = document.getElementById('engiMethodologyCriterionCount');
  const engiMethodologyLatestPosition = document.getElementById('engiMethodologyLatestPosition');
  const engiMethodologyCriteriaButtons = document.getElementById('engiMethodologyCriteriaButtons');
  const engiMethodologyDetailSwatch = document.getElementById('engiMethodologyDetailSwatch');
  const engiMethodologyDetailTitle = document.getElementById('engiMethodologyDetailTitle');
  const engiMethodologyDetailCopy = document.getElementById('engiMethodologyDetailCopy');
  const engiMethodologyCriterionTotal = document.getElementById('engiMethodologyCriterionTotal');
  const engiMethodologyIndicatorList = document.getElementById('engiMethodologyIndicatorList');
  const engiMethodologyInfoTabs = [...document.querySelectorAll('[data-engi-methodology-panel]')];

  const engiMethodologyCriteria = [
    { name: 'Badania', color: '#4f46e5', description: 'Skala, jakość, wpływ cytowań i dynamika dorobku naukowego w konkretnej dyscyplinie.' },
    { name: 'Innowacyjność', color: '#0891b2', description: 'Współpraca publikacyjna z biznesem oraz finansowanie europejskich projektów badawczo-innowacyjnych.' },
    { name: 'Jakość kształcenia', color: '#d97706', description: 'Liczba programów inżynierskich z uznanymi akredytacjami ABET lub EUR-ACE.' },
    { name: 'Wkład w SDG', color: '#059669', description: 'Dorobek publikacyjny wspierający cel zrównoważonego rozwoju właściwy dla wybranej dyscypliny.' }
  ];

  const engiMethodologyIndicators = {
    'Publikacje': { group: 'Badania', color: '#4338ca', source: 'Scopus / SciVal', period: '2020–2024', description: 'Liczba publikacji uczelni przypisanych do ocenianej dyscypliny.' },
    'Publikacje w Top 10% czasopism': { group: 'Badania', color: '#6366f1', source: 'Scopus / SciVal', period: '2020–2024', description: 'Odsetek publikacji w czasopismach należących do górnych 10% według wskaźnika CiteScore.' },
    'Cytowania': { group: 'Badania', color: '#818cf8', source: 'Scopus / SciVal', period: '2020–2024', description: 'Średnia liczba cytowań przypadających na publikację w ocenianej dyscyplinie.' },
    'Zmiana wpływu cytowaniowego': { group: 'Badania', color: '#a5b4fc', source: 'Scopus / SciVal', period: '2020–2024 vs 2015–2019', description: 'Relacja FWCI publikacji z lat 2020–2024 do FWCI publikacji z lat 2015–2019; wskaźnik premiuje wzrost wpływu.' },
    'Współpraca akademicka z biznesem': { group: 'Innowacyjność', color: '#0891b2', source: 'Scopus / SciVal', period: '2020–2024', description: 'Odsetek publikacji współtworzonych z badaczami afiliowanymi poza sektorem akademickim.' },
    'Finansowanie badań i innowacji': { group: 'Innowacyjność', color: '#22d3ee', source: 'CORDIS', period: '2020–2024', description: 'Wartość grantów z programów ramowych UE finansujących projekty związane z ocenianą dyscypliną.' },
    'Akredytacje': { group: 'Jakość kształcenia', color: '#f59e0b', source: 'ABET / ENAEE (EUR-ACE)', period: 'ważne w 2025', description: 'Liczba programów związanych z dyscypliną posiadających akredytację ABET lub EUR-ACE. Osiem i więcej akredytacji daje maksymalny wynik wskaźnika.' },
    'SDG 3: Dobre zdrowie i jakość życia': { group: 'Wkład w SDG', color: '#10b981', source: 'Scopus / SciVal', period: '2020–2024', description: 'Liczba publikacji przypisanych jednocześnie do inżynierii medycznej i celu SDG 3.' },
    'SDG 6: Czysta woda i warunki sanitarne': { group: 'Wkład w SDG', color: '#06b6d4', source: 'Scopus / SciVal', period: '2020–2024', description: 'Liczba publikacji przypisanych jednocześnie do inżynierii środowiska i celu SDG 6.' },
    'SDG 11: Zrównoważone miasta i społeczności': { group: 'Wkład w SDG', color: '#14b8a6', source: 'Scopus / SciVal', period: '2020–2024', description: 'Liczba publikacji przypisanych jednocześnie do inżynierii lądowej i celu SDG 11.' }
  };

  const engiPublicationThresholds = [
    ['chemiczna', 200],
    ['lądowa', 100],
    ['Elektronika', 200],
    ['środowiska', 100],
    ['materiałowa', 250],
    ['mechaniczna', 200],
    ['medyczna', 100]
  ];

  const getEngiMethodologyVariant = (subject) => {
    const isCivil = subject.includes('lądowa');
    const isEnvironmental = subject.includes('środowiska');
    const isMedical = subject.includes('medyczna');
    const special = isCivil || isEnvironmental || isMedical;
    const threshold = engiPublicationThresholds.find(([fragment]) => subject.includes(fragment))?.[1] || 100;
    const sdgLabel = isCivil
      ? 'SDG 11: Zrównoważone miasta i społeczności'
      : isEnvironmental
        ? 'SDG 6: Czysta woda i warunki sanitarne'
        : isMedical
          ? 'SDG 3: Dobre zdrowie i jakość życia'
          : null;
    return { special, threshold, sdgLabel };
  };

  const getEngiMethodologyWeights = (variant) => {
    const base = variant.special ? 15 : 16;
    const weights = [
      ['Publikacje', base],
      ['Publikacje w Top 10% czasopism', base],
      ['Cytowania', base],
      ['Zmiana wpływu cytowaniowego', base],
      ['Współpraca akademicka z biznesem', base],
      ['Finansowanie badań i innowacji', 10],
      ['Akredytacje', 10]
    ];
    if (variant.sdgLabel) weights.push([variant.sdgLabel, 5]);
    return weights;
  };

  const formatEngiWeight = (value) => `${Number(value).toLocaleString('pl-PL')}%`;
  let activeEngiMethodologyCriterion = 'Badania';

  const renderEngiMethodologyDetails = (weights) => {
    if (!engiMethodologyCriteriaButtons || !engiMethodologyIndicatorList) return;
    const availableCriteria = engiMethodologyCriteria.filter((criterion) =>
      weights.some(([label]) => engiMethodologyIndicators[label]?.group === criterion.name));
    if (!availableCriteria.some((criterion) => criterion.name === activeEngiMethodologyCriterion)) {
      activeEngiMethodologyCriterion = availableCriteria[0]?.name || 'Badania';
    }

    const criterionButtons = availableCriteria.map((criterion) => {
      const total = weights.filter(([label]) => engiMethodologyIndicators[label]?.group === criterion.name).reduce((sum, [, value]) => sum + value, 0);
      const active = criterion.name === activeEngiMethodologyCriterion;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'rks-criterion-button' + (active ? ' active' : '');
      button.setAttribute('aria-pressed', active.toString());
      const dot = document.createElement('span');
      dot.className = 'rks-legend-dot';
      dot.style.background = criterion.color;
      const name = document.createElement('span');
      name.className = 'rks-criterion-name';
      name.textContent = criterion.name;
      const value = document.createElement('span');
      value.className = 'rks-criterion-weight';
      value.textContent = formatEngiWeight(total);
      button.append(dot, name, value);
      button.addEventListener('click', () => {
        activeEngiMethodologyCriterion = criterion.name;
        renderEngiMethodology();
      });
      return button;
    });
    engiMethodologyCriteriaButtons.replaceChildren(...criterionButtons);

    const criterion = availableCriteria.find((item) => item.name === activeEngiMethodologyCriterion) || availableCriteria[0];
    const activeWeights = weights.filter(([label]) => engiMethodologyIndicators[label]?.group === criterion.name);
    const criterionTotal = activeWeights.reduce((sum, [, value]) => sum + value, 0);
    if (engiMethodologyDetailSwatch) engiMethodologyDetailSwatch.style.background = criterion.color;
    if (engiMethodologyDetailTitle) engiMethodologyDetailTitle.textContent = criterion.name;
    if (engiMethodologyDetailCopy) engiMethodologyDetailCopy.textContent = criterion.description;
    if (engiMethodologyCriterionTotal) {
      const caption = document.createElement('small');
      caption.textContent = 'waga kryterium';
      engiMethodologyCriterionTotal.replaceChildren(formatEngiWeight(criterionTotal), caption);
    }

    const rows = activeWeights.map(([label, value]) => {
      const meta = engiMethodologyIndicators[label];
      const row = document.createElement('article');
      row.className = 'rks-indicator';
      const copy = document.createElement('div');
      const title = document.createElement('h4');
      title.textContent = label;
      const description = document.createElement('p');
      description.textContent = meta.description;
      const source = document.createElement('span');
      source.className = 'rks-source-line';
      source.textContent = meta.source;
      copy.append(title, description, source);
      const weight = document.createElement('div');
      weight.className = 'rks-indicator-weight';
      const weightCaption = document.createElement('small');
      weightCaption.textContent = 'waga';
      weight.append(formatEngiWeight(value), weightCaption);
      const period = document.createElement('span');
      period.className = 'rks-indicator-delta';
      period.textContent = meta.period;
      row.append(copy, weight, period);
      return row;
    });
    engiMethodologyIndicatorList.replaceChildren(...rows);
  };

  const renderEngiMethodologyWeights = (weights) => {
    const makeItem = ([label, value], legend = false) => {
      const meta = engiMethodologyIndicators[label];
      const active = meta.group === activeEngiMethodologyCriterion;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = (legend ? 'rks-legend-button' : 'rks-weight-segment') + (active ? ' active' : '');
      button.setAttribute('aria-label', `${label}, ${formatEngiWeight(value)}`);
      if (legend) {
        const dot = document.createElement('span');
        dot.className = 'rks-legend-dot';
        dot.style.background = meta.color;
        const name = document.createElement('span');
        name.className = 'rks-legend-name';
        name.textContent = label;
        const weight = document.createElement('span');
        weight.className = 'rks-legend-weight';
        weight.textContent = formatEngiWeight(value);
        button.append(dot, name, weight);
      } else {
        button.style.width = `${value}%`;
        button.style.background = meta.color;
        button.style.color = ['#a5b4fc', '#22d3ee'].includes(meta.color) ? '#0f172a' : '#fff';
        button.textContent = formatEngiWeight(value);
        button.title = `${label} — ${formatEngiWeight(value)}`;
      }
      button.addEventListener('click', () => {
        activeEngiMethodologyCriterion = meta.group;
        renderEngiMethodology();
      });
      return button;
    };
    engiMethodologyChart?.replaceChildren(...weights.map((item) => makeItem(item)));
    engiMethodologyLegend?.replaceChildren(...weights.map((item) => makeItem(item, true)));
    renderEngiMethodologyDetails(weights);
  };

  const renderEngiMethodology = () => {
    if (!engiMethodologySelect) return;
    const subject = engiMethodologySelect.value;
    const variant = getEngiMethodologyVariant(subject);
    const weights = getEngiMethodologyWeights(variant);
    const profileName = variant.special ? 'Profil z komponentem SDG' : 'Profil standardowy';
    const subjectData = engiSubjectData?.subjects?.[subject];
    const latestPosition = subjectData?.raw?.[subjectData.raw.length - 1];
    const criteriaCount = new Set(weights.map(([label]) => engiMethodologyIndicators[label].group)).size;

    if (engiMethodologyBadge) engiMethodologyBadge.textContent = variant.special ? 'SDG' : 'Standard';
    if (engiMethodologyIndicatorCount) engiMethodologyIndicatorCount.textContent = weights.length;
    if (engiMethodologyCriterionCount) engiMethodologyCriterionCount.textContent = criteriaCount;
    if (engiMethodologyLatestPosition) engiMethodologyLatestPosition.textContent = latestPosition || '—';
    if (engiMethodologyVariantTag) engiMethodologyVariantTag.textContent = `${variant.special ? 'SDG' : 'Standard'} · próg ${variant.threshold} publ.`;
    if (engiMethodologyText) {
      engiMethodologyText.textContent = variant.special
        ? `${subject}: badania 60%, innowacyjność 25%, jakość kształcenia 10% i ${variant.sdgLabel.split(':')[0]} 5%. Próg kwalifikacyjny wynosi ${variant.threshold} publikacji w latach 2020–2024.`
        : `${subject}: badania 64%, innowacyjność 26% i jakość kształcenia 10%. Próg kwalifikacyjny wynosi ${variant.threshold} publikacji w latach 2020–2024.`;
    }
    renderEngiMethodologyWeights(weights);
  };

  engiMethodologySelect?.addEventListener('change', () => {
    renderEngiMethodology();
    const subjectSelect = document.getElementById('engiSubjectSelect');
    if (subjectSelect && subjectSelect.value !== engiMethodologySelect.value) {
      subjectSelect.value = engiMethodologySelect.value;
      subjectSelect.dispatchEvent(new Event('change'));
    }
  });

  engiMethodologyInfoTabs.forEach((button) => {
    button.addEventListener('click', () => {
      engiMethodologyInfoTabs.forEach((tab) => tab.classList.toggle('active', tab === button));
      engiMethodologyInfoTabs.forEach((tab) => document.getElementById(tab.dataset.engiMethodologyPanel)?.classList.toggle('hidden', tab !== button));
    });
  });

  renderEngiMethodology();
});
