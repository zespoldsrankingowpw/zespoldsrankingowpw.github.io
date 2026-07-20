(() => {
  const years = [2023, 2024, 2025];
  const metricOrder = ['publications', 'top10', 'citations', 'changeImpact', 'collaboration', 'funding', 'accreditations', 'sdg'];
  const metrics = {
    publications: 'Publikacje',
    top10: 'Publikacje w czasopismach TOP 10%',
    citations: 'Cytowania',
    changeImpact: 'Zmiana wpływu cytowań',
    collaboration: 'Współpraca akademicko-biznesowa',
    funding: 'Finansowanie badań i innowacji',
    accreditations: 'Akredytacje',
    sdg: 'Wkład w realizację SDG'
  };
  const standardWeights = [16, 16, 16, 16, 16, 10, 10, null];
  const sdgWeights = [15, 15, 15, 15, 15, 10, 10, 5];
  const rawSubjects = {
    'Inżynieria chemiczna (Chemical Engineering)': {
      slug: 'che', weights: standardWeights,
      rows: [
        [2023, '77=', 63.13, 57.30, 30.11, 48.43, 55.57, 36.57, 0.00, 50.00, null],
        [2024, '49=', 72.13, 55.45, 27.57, 47.02, 56.27, 33.65, 0.00, 100.00, null],
        [2025, '56=', 71.76, 54.98, 28.05, 48.88, 59.83, 32.24, 0.00, 100.00, null]
      ]
    },
    'Inżynieria lądowa (Civil Engineering)': {
      slug: 'civ', weights: sdgWeights, sdgLabel: 'SDG 11: Zrównoważone miasta i społeczności',
      rows: [
        [2023, '77=', 58.87, 47.15, 22.86, 47.53, 40.76, 23.78, 12.15, 66.67, 35.07],
        [2024, '70=', 64.52, 46.25, 30.79, 46.43, 56.52, 24.09, 25.39, 85.71, 35.16],
        [2025, '84=', 63.59, 44.93, 27.86, 46.44, 52.10, 24.86, 0.00, 100.00, 35.57]
      ]
    },
    'Elektronika, elektrotechnika i inżynieria informacyjna': {
      slug: 'eei', weights: standardWeights,
      rows: [
        [2023, '95=', 64.72, 71.14, 39.87, 52.14, 56.13, 30.62, 35.68, 0.00, null],
        [2024, '71=', 61.22, 70.09, 21.42, 55.09, 64.42, 31.93, 46.18, 25.00, null],
        [2025, '62=', 67.75, 71.31, 21.22, 54.33, 60.91, 33.62, 49.14, 62.50, null]
      ]
    },
    'Inżynieria środowiska (Environmental engineering)': {
      slug: 'env', weights: sdgWeights, sdgLabel: 'SDG 6: Czysta woda i warunki sanitarne',
      rows: [
        [2023, '74=', 60.85, 56.12, 26.31, 51.87, 42.80, 32.15, 32.06, 44.44, 48.04],
        [2024, '86=', 60.81, 56.17, 23.75, 50.54, 61.05, 30.43, 38.75, 26.67, 53.09],
        [2025, '130=', 56.80, 58.51, 23.09, 47.23, 57.79, 25.80, 36.86, 0.00, 60.05]
      ]
    },
    'Inżynieria materiałowa (Materials Engineering)': {
      slug: 'mat', weights: standardWeights,
      rows: [
        [2023, '71=', 69.72, 72.51, 31.14, 51.55, 69.19, 23.83, 39.85, 25.00, null],
        [2024, '47=', 71.53, 71.58, 30.43, 55.47, 74.51, 22.98, 51.33, 50.00, null],
        [2025, '50=', 71.31, 70.85, 32.00, 59.28, 71.95, 23.69, 50.20, 50.00, null]
      ]
    },
    'Inżynieria mechaniczna (Mechanical engineering)': {
      slug: 'mec', weights: standardWeights,
      rows: [
        [2023, '63=', 72.77, 51.44, 41.95, 51.12, 55.09, 34.02, 31.44, 80.00, null],
        [2024, '76=', 69.37, 51.46, 39.67, 47.16, 54.62, 33.30, 39.78, 50.00, null],
        [2025, '80=', 70.86, 49.77, 38.64, 46.15, 54.26, 33.66, 39.58, 62.50, null]
      ]
    },
    'Inżynieria medyczna': {
      slug: 'med', weights: sdgWeights, sdgLabel: 'SDG 3: Dobre zdrowie i jakość życia',
      rows: [
        [2023, '63', 54.77, 46.56, 47.10, 64.92, 68.37, 24.14, 19.03, 0.00, 54.07],
        [2024, '59=', 57.27, 42.02, 55.65, 65.11, 69.35, 24.12, 26.26, 0.00, 49.66],
        [2025, '73=', 57.14, 42.90, 57.08, 60.01, 63.67, 22.42, 24.63, 0.00, 50.66]
      ]
    }
  };

  const subjects = Object.fromEntries(Object.entries(rawSubjects).map(([name, subject]) => {
    const editions = Object.fromEntries(subject.rows.map(([year, rank, score, ...values]) => {
      const subjectMetrics = Object.fromEntries(metricOrder.flatMap((key, index) => (
        typeof values[index] === 'number'
          ? [[key, { value: values[index], weight: subject.weights[index] }]]
          : []
      )));
      return [year, { rank, score, metrics: subjectMetrics }];
    }));
    return [name, { slug: subject.slug, sdgLabel: subject.sdgLabel || null, editions }];
  }));

  window.EngiRankSubjectIndicatorData = { years, metricOrder, metrics, subjects };
})();