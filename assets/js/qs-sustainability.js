document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const { qsSustainabilityYears: years, qsSustainabilityLower: lower,
    qsSustainabilityUpper: upper, qsSustainabilityLabels: labels,
    qsSustainabilityDetails: details } = window.RankingData;
  const modal = document.getElementById('qsSustainabilityDetailsModal');
  const edition = document.getElementById('qsSustainabilityEditionSelect');
  const metric = document.getElementById('qsSustainabilityMetricSelect');
  const mode = document.getElementById('qsSustainabilityModeSelect');
  const score = value => value.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const option = (value, label) => { const node = document.createElement('option'); node.value = value; node.textContent = label; return node; };
  const getSeries = key => key === 'overall' ? details.overallScores
    : key.startsWith('category:') ? details.categories[key.slice(9)] : details.indicators[key.slice(10)];
  const getRanks = key => key === 'position' || key === 'overall'
    ? years.map((_, i) => ({ raw: labels[i], lower: lower[i], upper: upper[i] }))
    : key.startsWith('category:') ? details.categoryRanks[key.slice(9)] : details.indicatorRanks[key.slice(10)];
  const buildOptions = index => {
    const selected = metric.value || 'position';
    metric.replaceChildren(option('position', 'Pozycja światowa'));
    if (Number.isFinite(details.overallScores[index])) metric.append(option('overall', 'Overall Score'));
    for (const [prefix, label, values] of [['category', 'Kategorie', details.categories], ['indicator', 'Wskaźniki', details.indicators]]) {
      const group = document.createElement('optgroup'); group.label = label;
      for (const [name, series] of Object.entries(values)) if (Number.isFinite(series[index])) group.append(option(prefix + ':' + name, name));
      if (group.children.length) metric.append(group);
    }
    if ([...metric.options].some(o => o.value === selected)) metric.value = selected;
  };
  // Position styling follows QS WUR; the detail chart follows THE WUR.
  const makeConfig = (key, detail = false) => {
    const position = key === 'position' || (detail && mode.value === 'rank');
    const label = key === 'position' ? 'Pozycja światowa' : metric.selectedOptions[0].textContent;
    const ranks = getRanks(key);
    const indices = years.map((_, i) => i).filter(i => position ? Number.isFinite(ranks[i]?.lower) : Number.isFinite(getSeries(key)[i]));
    const rankLower = indices.map(i => ranks[i].lower);
    const rankUpper = indices.map(i => ranks[i].upper);
    const rankLabels = indices.map(i => ranks[i].raw);
    const color = detail && position ? '#0e7490' : '#4f46e5';
    const style = { pointRadius: detail ? 4 : 3, pointHoverRadius: 6,
      pointBackgroundColor: color, pointBorderColor: '#fff', pointBorderWidth: 2,
      borderWidth: detail ? 2.5 : 2, tension: detail ? 0.2 : 0.25, spanGaps: true };
    const datasets = position ? [
      { ...style, label: detail ? 'Początek pasma' : 'Najlepsza pozycja w przedziale', data: rankLower,
        borderColor: color, backgroundColor: detail ? 'rgba(14,116,144,0.13)' : 'rgba(79,70,229,0.12)', fill: '+1' },
      { ...style, label: detail ? 'Koniec pasma' : 'Najsłabsza pozycja w przedziale', data: rankUpper,
        borderColor: detail ? 'rgba(14,116,144,0.5)' : 'rgba(79,70,229,0.5)',
        pointBackgroundColor: detail ? '#67e8f9' : color, borderWidth: 2, borderDash: [6,4], fill: false }
    ] : [{ ...style, label, data: indices.map(i => getSeries(key)[i]), borderColor: color, backgroundColor: 'rgba(79,70,229,0.1)', fill: false }];
    return { type: 'line', data: { labels: indices.map(i => years[i]), datasets }, options: {
      responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
      plugins: { legend: { display: !detail, labels: { usePointStyle: true, pointStyle: 'line', boxHeight: 2 } }, tooltip: { callbacks: {
        label: context => position ? (context.datasetIndex === 0 ? 'Pozycja: ' + rankLabels[context.dataIndex] : null)
          : 'Wynik: ' + score(context.parsed.y)
      } } },
      scales: { x: { grid: { display: false }, ...(detail ? { ticks: { color: '#475569', font: { weight: '600' } } } : {}) }, y: {
        reverse: position, min: position ? (detail ? Math.max(0, Math.floor(Math.min(...rankLower) / 100) * 100) : 400) : 0,
        max: position ? (detail ? Math.ceil(Math.max(...rankLower, ...rankUpper.filter(Number.isFinite)) / 100) * 100 + 50 : 1300) : 100,
        grid: { color: detail ? 'rgba(148,163,184,0.2)' : 'rgba(17,24,39,0.08)' },
        title: { display: true, text: position ? 'Pozycja (im wyżej, tym lepiej)' : 'Wynik punktowy (0–100)' },
        ticks: { color: '#475569', stepSize: position ? 100 : 10, callback: value => position ? Math.round(value) : value }
      } }
    } };
  };
  const cards = key => years.map((year, index) => {
    const card = document.createElement('article'); card.className = 'rks-details-year'; card.setAttribute('role', 'listitem');
    const add = (tag, cls, text) => { const el = document.createElement(tag); el.className = cls; el.textContent = text; card.append(el); };
    const rank = getRanks(key)[index];
    add('div', 'year', year);
    if (rank?.raw) { add('div', 'position', rank.raw); add('span', 'position-label', key === 'position' || key === 'overall' ? 'pozycja światowa' : 'pozycja miary na świecie'); }
    const value = key === 'position' ? details.overallScores[index] : getSeries(key)[index];
    if (Number.isFinite(value)) add('span', 'score', 'wynik ' + score(value));
    add('span', 'score', details.institutions[index].toLocaleString('pl-PL') + ' uczelni');
    return card;
  });
  const latest = years.length - 1;
  const strongest = Object.entries(details.categories).sort((a,b) => b[1][latest] - a[1][latest])[0];
  document.getElementById('qsSustainabilityStrongest').textContent = strongest[0] + ' ' + score(strongest[1][latest]);
  document.getElementById('qsSustainabilityBest').textContent = labels[lower.indexOf(Math.min(...lower))];
  const complete = years.filter((_,i) => [details.overallScores, ...Object.values(details.categories), ...Object.values(details.indicators)].every(s => Number.isFinite(s[i]))).length;
  document.getElementById('qsSustainabilityCoverage').textContent = complete + ' / ' + years.length + ' edycji';
  if (typeof Chart !== 'undefined') new Chart(document.getElementById('chartQsSustainability'), makeConfig('position'));
  let detailChart = null;
  const rows = (id, values, ranks, index) => {
    const nodes = Object.entries(values).filter(([,series]) => Number.isFinite(series[index])).map(([name, series]) => {
      const row = document.createElement('tr'); row.className = 'border-t border-slate-200';
      const heading = document.createElement('th'); heading.scope = 'row'; heading.className = 'p-3 text-left font-medium text-slate-700'; heading.textContent = name;
      const cell = document.createElement('td'); cell.className = 'p-3 text-right font-bold text-cyan-700'; cell.textContent = score(series[index]); row.append(heading, cell);
      if (ranks[name]?.[index]?.raw) { const rankCell = document.createElement('td'); rankCell.className = 'p-3 text-right font-bold text-slate-900'; rankCell.textContent = ranks[name][index].raw; row.append(rankCell); }
      return row;
    });
    const body = document.getElementById(id); body.replaceChildren(...nodes); body.closest('div').classList.toggle('hidden', !nodes.length);
  };
  const render = () => {
    const index = years.indexOf(Number(edition.value)); buildOptions(index);
    mode.disabled = metric.value === 'position';
    if (mode.disabled) mode.value = 'rank';
    document.getElementById('qsSustainabilityYearCards').replaceChildren(...cards(metric.value));
    document.getElementById('qsSustainabilitySelectedRank').textContent = labels[index];
    const selectedScore = document.getElementById('qsSustainabilitySelectedScore');
    selectedScore.parentElement.classList.toggle('hidden', !Number.isFinite(details.overallScores[index]));
    selectedScore.textContent = Number.isFinite(details.overallScores[index]) ? score(details.overallScores[index]) : '';
    selectedScore.parentElement.parentElement.style.gridTemplateColumns = Number.isFinite(details.overallScores[index]) ? 'repeat(2, minmax(0, 1fr))' : '1fr';
    rows('qsSustainabilityCategoryRows', details.categories, details.categoryRanks, index);
    rows('qsSustainabilityIndicatorRows', details.indicators, details.indicatorRanks, index);
    const config = makeConfig(metric.value, true);
    const position = metric.value === 'position' || mode.value === 'rank';
    const chartYears = config.data.labels;
    const title = metric.selectedOptions[0].textContent + (metric.value === 'position' ? '' : position ? ' · pozycja' : ' · wynik') + ' — ' + chartYears[0] + '–' + chartYears.at(-1);
    document.getElementById('qsSustainabilityChartTitle').textContent = title;
    document.getElementById('qsSustainabilityLegendText').textContent = position ? 'Opublikowane pasmo' : metric.selectedOptions[0].textContent + ' · wynik 0–100';
    document.getElementById('qsSustainabilityLegendLine').style.backgroundColor = position ? '#0e7490' : '#4f46e5';
    document.getElementById('qsSustainabilityChartNote').textContent = position ? 'Niższa liczba oznacza lepszą pozycję. Znak + oznacza otwarte pasmo, a = remis.' : 'Skala 0–100; wyższy wynik jest lepszy.';
    const canvas = document.getElementById('chartQsSustainabilityDetails'); canvas.setAttribute('aria-label', title);
    if (typeof Chart === 'undefined' || modal.classList.contains('hidden')) return;
    if (!detailChart) detailChart = new Chart(canvas, config);
    else { detailChart.data = config.data; detailChart.options = config.options; detailChart.update(); detailChart.resize(); }
  };
  edition.addEventListener('change', render); metric.addEventListener('change', render); mode.addEventListener('change', render);
  document.getElementById('qsSustainabilityDetailsOpen').addEventListener('click', () => requestAnimationFrame(render)); render();
});
