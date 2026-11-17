document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const { qsSustainabilityYears: years, qsSustainabilityLower: lower,
    qsSustainabilityUpper: upper, qsSustainabilityLabels: labels,
    qsSustainabilityDetails: details } = window.RankingData;
  const modal = document.getElementById('qsSustainabilityDetailsModal');
  const edition = document.getElementById('qsSustainabilityEditionSelect');
  const metric = document.getElementById('qsSustainabilityMetricSelect');
  const score = value => value.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const option = (value, label) => { const node = document.createElement('option'); node.value = value; node.textContent = label; return node; };
  const getSeries = key => key === 'overall' ? details.overallScores
    : key.startsWith('category:') ? details.categories[key.slice(9)] : details.indicators[key.slice(10)];
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
    const position = key === 'position';
    const label = position ? 'Pozycja światowa' : metric.selectedOptions[0].textContent;
    const indices = years.map((_, i) => i).filter(i => position || Number.isFinite(getSeries(key)[i]));
    const color = detail && position ? '#0e7490' : '#4f46e5';
    const style = { pointRadius: detail ? 4 : 3, pointHoverRadius: 6,
      pointBackgroundColor: color, pointBorderColor: '#fff', pointBorderWidth: 2,
      borderWidth: detail ? 2.5 : 2, tension: detail ? 0.2 : 0.25, spanGaps: true };
    const datasets = position ? [
      { ...style, label: detail ? 'Początek pasma' : 'Najlepsza pozycja w przedziale', data: lower,
        borderColor: color, backgroundColor: detail ? 'rgba(14,116,144,0.13)' : 'rgba(79,70,229,0.12)', fill: '+1' },
      { ...style, label: detail ? 'Koniec pasma' : 'Najsłabsza pozycja w przedziale', data: upper,
        borderColor: detail ? 'rgba(14,116,144,0.5)' : 'rgba(79,70,229,0.5)',
        pointBackgroundColor: detail ? '#67e8f9' : color, borderWidth: 2, borderDash: [6,4], fill: false }
    ] : [{ ...style, label, data: indices.map(i => getSeries(key)[i]), borderColor: color, backgroundColor: 'rgba(79,70,229,0.1)', fill: false }];
    return { type: 'line', data: { labels: indices.map(i => years[i]), datasets }, options: {
      responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
      plugins: { legend: { display: !detail, labels: { usePointStyle: true, pointStyle: 'line', boxHeight: 2 } }, tooltip: { callbacks: {
        label: context => position ? (context.datasetIndex === 0 ? 'Pozycja: ' + labels[context.dataIndex] : null)
          : 'Wynik: ' + score(context.parsed.y)
      } } },
      scales: { x: { grid: { display: false }, ...(detail ? { ticks: { color: '#475569', font: { weight: '600' } } } : {}) }, y: {
        reverse: position, min: position ? 400 : 0, max: position ? 1300 : 100,
        grid: { color: detail ? 'rgba(148,163,184,0.2)' : 'rgba(17,24,39,0.08)' },
        title: { display: true, text: position ? 'Pozycja (im wyżej, tym lepiej)' : 'Wynik punktowy (0–100)' },
        ticks: { color: '#475569', stepSize: position ? 100 : 10, callback: value => position ? Math.round(value) : value }
      } }
    } };
  };
  const cards = () => years.map((year, index) => {
    const card = document.createElement('article'); card.className = 'rks-details-year'; card.setAttribute('role', 'listitem');
    const add = (tag, cls, text) => { const el = document.createElement(tag); el.className = cls; el.textContent = text; card.append(el); };
    add('div', 'year', year); add('div', 'position', labels[index]); add('span', 'position-label', 'pozycja światowa');
    if (Number.isFinite(details.overallScores[index])) add('span', 'score', 'wynik ' + score(details.overallScores[index]));
    for (const [name, values] of Object.entries(details.categories)) if (Number.isFinite(values[index])) add('span', 'score', name + ' ' + score(values[index]));
    return card;
  });
  document.getElementById('qsSustainabilityYearCards').replaceChildren(...cards());
  const latest = years.length - 1;
  const strongest = Object.entries(details.categories).sort((a,b) => b[1][latest] - a[1][latest])[0];
  document.getElementById('qsSustainabilityStrongest').textContent = strongest[0] + ' ' + score(strongest[1][latest]);
  document.getElementById('qsSustainabilityBest').textContent = labels[lower.indexOf(Math.min(...lower))];
  const complete = years.filter((_,i) => [details.overallScores, ...Object.values(details.categories), ...Object.values(details.indicators)].every(s => Number.isFinite(s[i]))).length;
  document.getElementById('qsSustainabilityCoverage').textContent = complete + ' / ' + years.length + ' edycji';
  if (typeof Chart !== 'undefined') new Chart(document.getElementById('chartQsSustainability'), makeConfig('position'));
  let detailChart = null;
  const rows = (id, values, index) => {
    const nodes = Object.entries(values).filter(([,series]) => Number.isFinite(series[index])).map(([name, series]) => {
      const row = document.createElement('tr'); row.className = 'border-t border-slate-200';
      const heading = document.createElement('th'); heading.scope = 'row'; heading.className = 'p-3 text-left font-medium text-slate-700'; heading.textContent = name;
      const cell = document.createElement('td'); cell.className = 'p-3 text-right font-bold text-cyan-700'; cell.textContent = score(series[index]); row.append(heading, cell); return row;
    });
    const body = document.getElementById(id); body.replaceChildren(...nodes); body.closest('div').classList.toggle('hidden', !nodes.length);
  };
  const render = () => {
    const index = years.indexOf(Number(edition.value)); buildOptions(index);
    document.getElementById('qsSustainabilitySelectedRank').textContent = labels[index];
    const selectedScore = document.getElementById('qsSustainabilitySelectedScore');
    selectedScore.parentElement.classList.toggle('hidden', !Number.isFinite(details.overallScores[index]));
    selectedScore.textContent = Number.isFinite(details.overallScores[index]) ? score(details.overallScores[index]) : '';
    selectedScore.parentElement.parentElement.style.gridTemplateColumns = Number.isFinite(details.overallScores[index]) ? 'repeat(2, minmax(0, 1fr))' : '1fr';
    rows('qsSustainabilityCategoryRows', details.categories, index); rows('qsSustainabilityIndicatorRows', details.indicators, index);
    const config = makeConfig(metric.value, true);
    const title = metric.selectedOptions[0].textContent + ' — ' + config.data.labels.join(', ');
    document.getElementById('qsSustainabilityChartTitle').textContent = title;
    const position = metric.value === 'position';
    document.getElementById('qsSustainabilityLegendText').textContent = position ? 'Opublikowane pasmo' : metric.selectedOptions[0].textContent + ' · wynik 0–100';
    document.getElementById('qsSustainabilityLegendLine').style.backgroundColor = position ? '#0e7490' : '#4f46e5';
    document.getElementById('qsSustainabilityChartNote').textContent = position ? 'Niższa liczba oznacza lepszą pozycję. Znak + oznacza otwarte pasmo, a = remis.' : 'Skala 0–100; wyższy wynik jest lepszy.';
    const canvas = document.getElementById('chartQsSustainabilityDetails'); canvas.setAttribute('aria-label', title);
    if (typeof Chart === 'undefined' || modal.classList.contains('hidden')) return;
    if (!detailChart) detailChart = new Chart(canvas, config);
    else { detailChart.data = config.data; detailChart.options = config.options; detailChart.update(); detailChart.resize(); }
  };
  edition.addEventListener('change', render); metric.addEventListener('change', render);
  document.getElementById('qsSustainabilityDetailsOpen').addEventListener('click', () => requestAnimationFrame(render)); render();
});
