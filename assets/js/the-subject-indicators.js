(() => {
  'use strict';

  const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026];
  const metricOrder = ['overall', 'teaching', 'researchEnvironment', 'researchQuality', 'industry', 'internationalOutlook'];
  const metrics = {
    overall: { label: 'Overall — wartość lub zakres pasma', sourceLabel: 'Overall', band: true },
    teaching: { label: 'Kształcenie', sourceLabel: 'Teaching' },
    researchEnvironment: { label: 'Środowisko badawcze', sourceLabel: 'Research / Research Environment', changedIn2024: true },
    researchQuality: { label: 'Jakość badań', sourceLabel: 'Citations / Research Quality', changedIn2024: true },
    industry: { label: 'Współpraca z przemysłem', sourceLabel: 'Industry Income / Industry' },
    internationalOutlook: { label: 'Umiędzynarodowienie', sourceLabel: 'International Outlook' }
  };

  const subjects = {
    'Biznes i Ekonomia (Business and Economics)': {
      rankLabels: [null, null, null, '801+', '801+', '801+', '801–1000'],
      editions: {
        2026: { overall: [21.2, 21.2], teaching: 15.5, researchEnvironment: 16.9, researchQuality: 36.7, industry: 66.3, internationalOutlook: 24.8 }
      }
    },
    'Informatyka (Computer Science)': {
      rankLabels: ['501–600', '501–600', '601–800', '601–800', '601–800', '601–800', '601–800'],
      editions: {
        2026: { overall: [30.0, 30.0], teaching: 28.3, researchEnvironment: 18.2, researchQuality: 44.7, industry: 58.0, internationalOutlook: 34.9 }
      }
    },
    'Inżynieria (Engineering)': {
      rankLabels: ['601–800', '601–800', '801–1000', '801–1000', '801–1000', '801–1000', '1001–1250'],
      editions: {
        2020: { overall: [18.5, 26.8], teaching: 18.6, researchEnvironment: 13.5, researchQuality: 31.7, industry: 36.4, internationalOutlook: 25.0 },
        2021: { overall: [20.4, 28.3], teaching: 20.2, researchEnvironment: 15.2, researchQuality: 23.5, industry: 35.7, internationalOutlook: 25.6 },
        2022: { overall: [17.1, 23.6], teaching: 21.1, researchEnvironment: 18.7, researchQuality: 19.4, industry: 35.6, internationalOutlook: 27.1 },
        2023: { overall: [20.3, 26.2], teaching: 22.9, researchEnvironment: 21.1, researchQuality: 16.6, industry: 36.3, internationalOutlook: 27.7 },
        2024: { overall: [23.6, 28.4], teaching: 23.9, researchEnvironment: 23.0, researchQuality: 32.4, industry: 48.9, internationalOutlook: 29.8 },
        2026: { overall: [21.4, 21.4], teaching: 25.9, researchEnvironment: 19.3, researchQuality: 27.8, industry: 51.7, internationalOutlook: 31.5 }
      }
    },
    'Nauki ścisłe (Physical Sciences)': {
      rankLabels: ['601–800', '801–1000', '801–1000', '1001+', '1001+', '1001+', '801–1000'],
      editions: {
        2026: { overall: [27.5, 27.5], teaching: 17.7, researchEnvironment: 19.1, researchQuality: 37.3, industry: 61.0, internationalOutlook: 36.1 }
      }
    },
    'Nauki społeczne (Social Sciences)': {
      rankLabels: [null, null, null, null, null, null, '801–1000'],
      editions: {
        2026: { overall: [21.6, 21.6], teaching: 14.4, researchEnvironment: 15.6, researchQuality: 34.0, industry: 62.3, internationalOutlook: 31.9 }
      }
    }
  };

  window.THESubjectIndicatorData = Object.freeze({ years, metricOrder, metrics, subjects });
})();
