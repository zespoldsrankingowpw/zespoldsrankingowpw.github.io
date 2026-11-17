document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const { qsSustainabilityYears: years, qsSustainabilityLower: lower,
    qsSustainabilityUpper: upper, qsSustainabilityLabels: labels,
    qsSustainabilityDetails: details } = window.RankingData;
  const modal = document.getElementById('qsSustainabilityDetailsModal');
  const edition = document.getElementById('qsSustainabilityEditionSelect');
  const metric = document.getElementById('qsSustainabilityMetricSelect');
  const score = value => typeof value === 'number'
    ? value.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : '—';
  const option = (value, label) => {
    const node = document.createElement('option');
    node.value = value; node.textContent = label; return node;
  };
  metric.append(option('position', 'Pozycja światowa'), option('overall', 'Overall Score'));
  for (const [prefix, groupLabel, values] of [['category', 'Kategorie', details.categories], ['indicator', 'Wskaźniki', details.indicators]]) {
    const group = document.createElement('optgroup'); group.label = groupLabel;
    for (const name of Object.keys(values)) group.append(option(prefix + ':' + name, name));
    metric.append(group);
  }
  const getSeries = key => key === 'overall' ? details.overallScores
    : key.startsWith('category:') ? details.categories[key.slice(9)] : details.indicators[key.slice(10)];
  const makeConfig = (key, selectedIndex) => {
    const position = key === 'position';
    const label = position ? 'Pozycja światowa' : metric.selectedOptions[0].textContent;
    const style = { pointRadius: years.map((_, i) => i === selectedIndex ? 6 : 4),
      pointBorderColor: '#fff', pointBorderWidth: 2, borderWidth: 2.5, tension: 0.15, spanGaps: false };
    const datasets = position ? [
      { ...style, label: 'Początek pasma', data: lower, borderColor: '#0e7490', backgroundColor: 'rgba(14,116,144,0.12)', fill: '+1' },
      { ...style, label: 'Koniec pasma', data: upper, borderColor: '#67b6c6', borderDash: [6,4], fill: false }
    ] : [{ ...style, label, data: getSeries(key), borderColor: '#0e7490', fill: false }];
    return { type: 'line', data: { labels: years, datasets }, options: {
      responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
      plugins: { legend: { display: position, position: 'bottom' }, tooltip: { callbacks: {
        label: context => position ? (context.datasetIndex === 0 ? 'Pozycja: ' + labels[context.dataIndex] : null)
          : label + ': ' + score(context.parsed.y)
      } } },
      scales: { x: { grid: { display: false } }, y: {
        reverse: position, min: position ? 400 : 0, max: position ? 1300 : 100,
        title: { display: true, text: position ? 'Pozycja (im wyżej, tym lepiej)' : 'Wynik punktowy (0–100)' },
        ticks: { callback: value => position ? Math.round(value) : value }
      } }
    } };
  };
  if (typeof Chart !== 'undefined') new Chart(document.getElementById('chartQsSustainability'), makeConfig('position', years.length - 1));
  let detailChart = null;
  const rows = (id, values, index) => {
    const nodes = Object.entries(values).map(([name, series]) => {
      const row = document.createElement('tr'); row.className = 'border-t border-slate-200';
      const heading = document.createElement('th'); heading.scope = 'row';
      heading.className = 'p-3 text-left font-medium text-slate-700'; heading.textContent = name;
      const cell = document.createElement('td'); cell.className = 'p-3 text-right font-bold text-cyan-700';
      cell.textContent = score(series[index]); row.append(heading, cell); return row;
    });
    document.getElementById(id).replaceChildren(...nodes);
  };
  const render = () => {
    const index = years.indexOf(Number(edition.value));
    document.getElementById('qsSustainabilitySelectedRank').textContent = labels[index];
    document.getElementById('qsSustainabilitySelectedScore').textContent = score(details.overallScores[index]);
    document.getElementById('qsSustainabilityMissingNotice').classList.toggle('hidden', Number(edition.value) !== 2026);
    rows('qsSustainabilityCategoryRows', details.categories, index);
    rows('qsSustainabilityIndicatorRows', details.indicators, index);
    const title = metric.selectedOptions[0].textContent + ' — 2024–2027';
    document.getElementById('qsSustainabilityChartTitle').textContent = title;
    const canvas = document.getElementById('chartQsSustainabilityDetails');
    canvas.setAttribute('aria-label', title);
    if (typeof Chart === 'undefined' || modal.classList.contains('hidden')) return;
    const config = makeConfig(metric.value, index);
    if (!detailChart) detailChart = new Chart(canvas, config);
    else { detailChart.data = config.data; detailChart.options = config.options; detailChart.update(); detailChart.resize(); }
  };
  edition.addEventListener('change', render);
  metric.addEventListener('change', render);
  document.getElementById('qsSustainabilityDetailsOpen').addEventListener('click', () => requestAnimationFrame(render));
  render();
});
