window.RankingData = (() => {
  'use strict';

  const qsWurDetailsYears = [2024, 2025, 2026];

  const qsWurDetailsData = {
    'Academic Reputation': { scores: [22.8, 23.3, 28.4], ranks: [382, 380, 442], rankLabels: ['382', '380', '442'] },
    'Employer Reputation': { scores: [49.8, 51.9, 72.4], ranks: [172, 168, 137], rankLabels: ['172', '168', '137'] },
    'Faculty Student Ratio': { scores: [38.7, 42.6, 55.7], ranks: [408, 366, 337], rankLabels: ['408', '366', '337'] },
    'Citations per Faculty': { scores: [4.3, 4.7, 9.5], ranks: [701, 701, 801], rankLabels: ['701+', '701', '801'] },
    'International Faculty': { scores: [1.8, 2.4, 3.4], ranks: [701, 701, 801], rankLabels: ['701+', '701+', '801+'] },
    'International Students': { scores: [10.3, 10.3, 17.6], ranks: [701, 701, 771], rankLabels: ['701+', '701', '771'] },
    'International Research Network': { scores: [9.7, 60.6, 63.8], ranks: [676, 627, 638], rankLabels: ['676', '627', '638'] },
    'Employment Outcomes': { scores: [11.5, 9.8, 15.9], ranks: [701, 701, 801], rankLabels: ['701+', '701', '801'] },
    'Sustainability': { scores: [2.1, 1.4, 38.4], ranks: [701, 701, 801], rankLabels: ['701+', '701+', '801+'] },
    'International Students Diversity': { scores: [null, null, 23.7], ranks: [null, null, 710], rankLabels: [null, null, '710'] },
    'Overall Score': { scores: [20.7, 23.2, 32.8], ranks: [571, 527, 487], rankLabels: ['=571', '527', '487'] }
  };

  const theWurDetailsData = {
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
    rankLabels: ['1001+', '1001+', '1201+', '1201–1500', '1201–1500', '1201–1500', '1201–1500'],
    rankLower: [1001, 1001, 1201, 1201, 1201, 1201, 1201],
    rankUpper: [null, null, null, 1500, 1500, 1500, 1500],
    scoreRangeLower: [10.7, 10.3, 10.6, 18.4, 22.8, 25.2, 27.3],
    scoreRangeUpper: [22.1, 25.0, 22.3, 24.3, 28.2, 30.6, 32.0],
    pillars: {
      teaching: { label: 'Kształcenie', sourceLabel: 'Teaching', values: [19.2, 20.3, 19.7, 18.4, 22.0, 25.7, 28.3] },
      researchEnvironment: { label: 'Środowisko badawcze', sourceLabel: 'Research / Research Environment', values: [11.8, 12.3, 15.9, 17.6, 19.6, 17.6, 17.7], changedIn2024: true },
      researchQuality: { label: 'Jakość badań', sourceLabel: 'Citations / Research Quality', values: [30.7, 23.8, 19.0, 15.8, 33.3, 30.8, 32.9], changedIn2024: true },
      industry: { label: 'Współpraca z przemysłem', sourceLabel: 'Industry', values: [39.8, 38.4, 39.1, 41.0, 53.5, 54.9, 61.1] },
      internationalOutlook: { label: 'Umiędzynarodowienie', sourceLabel: 'International Outlook', values: [25.1, 26.0, 28.2, 28.6, 31.7, 32.8, 33.9] }
    }
  };

  const qsSubjectData = {
    "years": [
      2023,
      2024,
      2025,
      2026
    ],
    "subjects": {
      "Architecture & Built Environment": {
        "lower": [
          151,
          201,
          201,
          151
        ],
        "upper": [
          200,
          240,
          260,
          200
        ]
      },
      "Business & Management Studies": {
        "lower": [
          551,
          551,
          501,
          501
        ],
        "upper": [
          580,
          600,
          550,
          550
        ]
      },
      "Chemistry": {
        "lower": [
          301,
          301,
          301,
          351
        ],
        "upper": [
          350,
          350,
          350,
          400
        ]
      },
      "Computer Science & Information Systems": {
        "lower": [
          251,
          251,
          201,
          251
        ],
        "upper": [
          300,
          300,
          250,
          300
        ]
      },
      "Engineering & Technology": {
        "lower": [
          231,
          232,
          null,
          231
        ],
        "upper": [
          231,
          232,
          null,
          231
        ]
      },
      "Engineering - Chemical": {
        "lower": [
          201,
          251,
          201,
          251
        ],
        "upper": [
          250,
          300,
          250,
          300
        ]
      },
      "Engineering - Civil & Structural": {
        "lower": [
          151,
          null,
          151,
          201
        ],
        "upper": [
          200,
          null,
          200,
          275
        ]
      },
      "Engineering - Electrical & Electronic": {
        "lower": [
          151,
          201,
          151,
          201
        ],
        "upper": [
          200,
          250,
          200,
          250
        ]
      },
      "Engineering - Mechanical, Aeronautical & Manufacturing": {
        "lower": [
          151,
          151,
          151,
          151
        ],
        "upper": [
          200,
          200,
          200,
          200
        ]
      },
      "Materials Science": {
        "lower": [
          201,
          201,
          201,
          201
        ],
        "upper": [
          250,
          250,
          250,
          250
        ]
      },
      "Mathematics": {
        "lower": [
          301,
          301,
          251,
          251
        ],
        "upper": [
          350,
          350,
          300,
          300
        ]
      },
      "Natural Sciences": {
        "lower": [
          275,
          null,
          null,
          350
        ],
        "upper": [
          275,
          null,
          null,
          350
        ]
      },
      "Physics & Astronomy": {
        "lower": [
          251,
          251,
          251,
          251
        ],
        "upper": [
          300,
          300,
          300,
          300
        ]
      }
    }
  };

  const rksSubjectData = {
    "years": [
      2020,
      2021,
      2022,
      2023,
      2024,
      2025,
      2026
    ],
    "subjects": {
      "AI & Data Science": {
        "lower": [
          null,
          null,
          null,
          null,
          null,
          1,
          1
        ],
        "upper": [
          null,
          null,
          null,
          null,
          null,
          1,
          1
        ],
        "raw": [
          null,
          null,
          null,
          null,
          null,
          "1",
          "1"
        ],
        "score": [
          null,
          null,
          null,
          null,
          null,
          100,
          100
        ]
      },
      "Administracja": {
        "lower": [
          6,
          null,
          null,
          5,
          6,
          7,
          4
        ],
        "upper": [
          6,
          null,
          null,
          5,
          6,
          7,
          4
        ],
        "raw": [
          "6",
          null,
          null,
          "5",
          "6",
          "7",
          "4"
        ],
        "score": [
          70.5,
          null,
          null,
          81.1,
          80.8,
          76.7,
          84.9
        ]
      },
      "Architektura": {
        "lower": [
          1,
          1,
          1,
          3,
          5,
          5,
          5
        ],
        "upper": [
          1,
          1,
          1,
          3,
          5,
          5,
          5
        ],
        "raw": [
          "1",
          "1",
          "1",
          "3=",
          "5",
          "5",
          "5"
        ],
        "score": [
          100,
          100,
          100,
          91.8,
          87.1,
          86.2,
          88.9
        ]
      },
      "Automatyka i robotyka": {
        "lower": [
          null,
          1,
          1,
          2,
          1,
          3,
          3
        ],
        "upper": [
          null,
          1,
          1,
          2,
          1,
          3,
          3
        ],
        "raw": [
          null,
          "1",
          "1",
          "2",
          "1=",
          "3",
          "3"
        ],
        "score": [
          null,
          100,
          100,
          97.6,
          100,
          90,
          94.7
        ]
      },
      "Biotechnologia (mgr inż.)": {
        "lower": [
          null,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "upper": [
          null,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "raw": [
          null,
          "1",
          "1",
          "1",
          "1",
          "1",
          "1"
        ],
        "score": [
          null,
          100,
          100,
          100,
          100,
          100,
          100
        ]
      },
      "Budownictwo": {
        "lower": [
          null,
          2,
          1,
          1,
          2,
          3,
          1
        ],
        "upper": [
          null,
          2,
          1,
          1,
          2,
          3,
          1
        ],
        "raw": [
          null,
          "2",
          "1=",
          "1=",
          "2=",
          "3=",
          "1="
        ],
        "score": [
          null,
          99,
          99.5,
          99.9,
          98.3,
          98.1,
          100
        ]
      },
      "Ekonomia": {
        "lower": [
          null,
          null,
          22,
          29,
          34,
          31,
          30
        ],
        "upper": [
          null,
          null,
          22,
          29,
          34,
          31,
          30
        ],
        "raw": [
          null,
          null,
          "22",
          "29=",
          "34",
          "31=",
          "30"
        ],
        "score": [
          null,
          null,
          40.8,
          36,
          36.6,
          38.2,
          37.6
        ]
      },
      "Elektronika i telekomunikacja": {
        "lower": [
          null,
          1,
          1,
          1,
          1,
          2,
          2
        ],
        "upper": [
          null,
          1,
          1,
          1,
          1,
          2,
          2
        ],
        "raw": [
          null,
          "1",
          "1",
          "1",
          "1=",
          "2",
          "2"
        ],
        "score": [
          null,
          100,
          100,
          100,
          99.6,
          94.6,
          93.6
        ]
      },
      "Elektrotechnika": {
        "lower": [
          null,
          null,
          1,
          1,
          1,
          1,
          3
        ],
        "upper": [
          null,
          null,
          1,
          1,
          1,
          1,
          3
        ],
        "raw": [
          null,
          null,
          "1",
          "1",
          "1",
          "1=",
          "3"
        ],
        "score": [
          null,
          null,
          100,
          100,
          100,
          99.5,
          98.3
        ]
      },
      "Energetyka": {
        "lower": [
          null,
          null,
          1,
          1,
          1,
          1,
          1
        ],
        "upper": [
          null,
          null,
          1,
          1,
          1,
          1,
          1
        ],
        "raw": [
          null,
          null,
          "1",
          "1",
          "1",
          "1",
          "1"
        ],
        "score": [
          null,
          null,
          100,
          100,
          100,
          100,
          100
        ]
      },
      "Fizyka techniczna": {
        "lower": [
          null,
          null,
          2,
          2,
          2,
          2,
          2
        ],
        "upper": [
          null,
          null,
          2,
          2,
          2,
          2,
          2
        ],
        "raw": [
          null,
          null,
          "2",
          "2",
          "2",
          "2",
          "2"
        ],
        "score": [
          null,
          null,
          96.6,
          98.7,
          93.9,
          90.4,
          92.9
        ]
      },
      "Geodezja i kartografia": {
        "lower": [
          null,
          null,
          1,
          1,
          1,
          1,
          1
        ],
        "upper": [
          null,
          null,
          1,
          1,
          1,
          1,
          1
        ],
        "raw": [
          null,
          null,
          "1",
          "1",
          "1",
          "1",
          "1"
        ],
        "score": [
          null,
          null,
          100,
          100,
          100,
          100,
          100
        ]
      },
      "Gospodarka przestrzenna": {
        "lower": [
          3,
          3,
          null,
          1,
          4,
          5,
          1
        ],
        "upper": [
          3,
          3,
          null,
          1,
          4,
          5,
          1
        ],
        "raw": [
          "3",
          "3",
          null,
          "1=",
          "4",
          "5",
          "1="
        ],
        "score": [
          85.2,
          82.5,
          null,
          100,
          90.9,
          87.5,
          99.9
        ]
      },
      "Informatyka (mgr inż.)": {
        "lower": [
          null,
          null,
          null,
          1,
          1,
          1,
          1
        ],
        "upper": [
          null,
          null,
          null,
          1,
          1,
          1,
          1
        ],
        "raw": [
          null,
          null,
          null,
          "1",
          "1",
          "1",
          "1"
        ],
        "score": [
          null,
          null,
          null,
          100,
          100,
          100,
          100
        ]
      },
      "Inżynieria biomedyczna": {
        "lower": [
          null,
          null,
          null,
          1,
          2,
          2,
          2
        ],
        "upper": [
          null,
          null,
          null,
          1,
          2,
          2,
          2
        ],
        "raw": [
          null,
          null,
          null,
          "1",
          "2=",
          "2",
          "2"
        ],
        "score": [
          null,
          null,
          null,
          100,
          90.4,
          92.5,
          96.7
        ]
      },
      "Inżynieria chemiczna": {
        "lower": [
          1,
          null,
          null,
          2,
          2,
          2,
          2
        ],
        "upper": [
          1,
          null,
          null,
          2,
          2,
          2,
          2
        ],
        "raw": [
          "1",
          null,
          null,
          "2",
          "2",
          "2",
          "2"
        ],
        "score": [
          100,
          null,
          null,
          89.9,
          90.5,
          93.9,
          92.9
        ]
      },
      "Inżynieria materiałowa": {
        "lower": [
          1,
          null,
          null,
          1,
          1,
          1,
          1
        ],
        "upper": [
          1,
          null,
          null,
          1,
          1,
          1,
          1
        ],
        "raw": [
          "1",
          null,
          null,
          "1",
          "1",
          "1",
          "1"
        ],
        "score": [
          100,
          null,
          null,
          100,
          100,
          100,
          100
        ]
      },
      "Inżynieria środowiska": {
        "lower": [
          1,
          null,
          null,
          3,
          2,
          4,
          5
        ],
        "upper": [
          1,
          null,
          null,
          3,
          2,
          4,
          5
        ],
        "raw": [
          "1",
          null,
          null,
          "3",
          "2=",
          "4=",
          "5"
        ],
        "score": [
          100,
          null,
          null,
          88.6,
          85.8,
          85,
          84.4
        ]
      },
      "Lotnictwo i kosmonautyka": {
        "lower": [
          1,
          1,
          null,
          1,
          1,
          1,
          1
        ],
        "upper": [
          1,
          1,
          null,
          1,
          1,
          1,
          1
        ],
        "raw": [
          "1",
          "1",
          null,
          "1",
          "1",
          "1",
          "1"
        ],
        "score": [
          100,
          100,
          null,
          100,
          100,
          100,
          100
        ]
      },
      "Matematyka": {
        "lower": [
          3,
          null,
          null,
          2,
          2,
          2,
          2
        ],
        "upper": [
          3,
          null,
          null,
          2,
          2,
          2,
          2
        ],
        "raw": [
          "3",
          null,
          null,
          "2",
          "2",
          "2",
          "2"
        ],
        "score": [
          75.1,
          null,
          null,
          84.3,
          87.6,
          92.9,
          97.3
        ]
      },
      "Mechanika i budowa maszyn": {
        "lower": [
          1,
          1,
          null,
          1,
          1,
          1,
          2
        ],
        "upper": [
          1,
          1,
          null,
          1,
          1,
          1,
          2
        ],
        "raw": [
          "1",
          "1",
          null,
          "1",
          "1",
          "1=",
          "2"
        ],
        "score": [
          100,
          100,
          null,
          100,
          100,
          99.7,
          97.6
        ]
      },
      "Mechatronika": {
        "lower": [
          2,
          2,
          null,
          2,
          2,
          2,
          4
        ],
        "upper": [
          2,
          2,
          null,
          2,
          2,
          2,
          4
        ],
        "raw": [
          "2",
          "2",
          null,
          "2",
          "2",
          "2=",
          "4"
        ],
        "score": [
          85,
          91.4,
          null,
          88.9,
          90.6,
          85.7,
          85.2
        ]
      },
      "Ochrona środowiska": {
        "lower": [
          4,
          8,
          null,
          8,
          7,
          7,
          6
        ],
        "upper": [
          4,
          8,
          null,
          8,
          7,
          7,
          6
        ],
        "raw": [
          "4",
          "8",
          null,
          "8",
          "7=",
          "7",
          "6"
        ],
        "score": [
          82.6,
          76.5,
          null,
          79.1,
          80.5,
          83.8,
          93.2
        ]
      },
      "Technologia chemiczna": {
        "lower": [
          1,
          1,
          null,
          1,
          1,
          4,
          3
        ],
        "upper": [
          1,
          1,
          null,
          1,
          1,
          4,
          3
        ],
        "raw": [
          "1",
          "1",
          null,
          "1=",
          "1=",
          "4",
          "3"
        ],
        "score": [
          100,
          100,
          null,
          100,
          100,
          95.8,
          94.5
        ]
      },
      "Transport": {
        "lower": [
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "upper": [
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "raw": [
          "1",
          "1",
          "1",
          "1",
          "1=",
          "1",
          "1"
        ],
        "score": [
          100,
          100,
          100,
          100,
          100,
          100,
          100
        ]
      },
      "Zarządzanie": {
        "lower": [
          null,
          null,
          null,
          5,
          6,
          7,
          11
        ],
        "upper": [
          null,
          null,
          null,
          5,
          6,
          7,
          11
        ],
        "raw": [
          null,
          null,
          null,
          "5=",
          "6=",
          "7=",
          "11"
        ],
        "score": [
          null,
          null,
          null,
          81.4,
          83.4,
          82.7,
          75.9
        ]
      },
      "Zarządzanie i inżynieria produkcji": {
        "lower": [
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "upper": [
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "raw": [
          "1",
          "1",
          "1",
          "1",
          "1",
          "1=",
          "1"
        ],
        "score": [
          100,
          100,
          100,
          100,
          100,
          99.6,
          100
        ]
      }
    }
  };

  const qsYears = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027];

  const qsMin = [521, 511, 501, 521, 571, 527, 487, 504];

  const qsMax = [530, 520, 510, 530, 571, 527, 487, 504];

  const theSubjectData = {
    "years": [
      2020,
      2021,
      2022,
      2023,
      2024,
      2025,
      2026
    ],
    "subjects": {
      "Biznes i Ekonomia (Business and Economics)": {
        "lower": [
          null,
          null,
          null,
          801,
          801,
          801,
          801
        ],
        "upper": [
          null,
          null,
          null,
          801,
          801,
          801,
          1000
        ]
      },
      "Informatyka (Computer Science)": {
        "lower": [
          501,
          501,
          601,
          601,
          601,
          601,
          601
        ],
        "upper": [
          600,
          600,
          800,
          800,
          800,
          800,
          800
        ]
      },
      "Inżynieria (Engineering)": {
        "lower": [
          601,
          601,
          801,
          801,
          801,
          801,
          1001
        ],
        "upper": [
          800,
          800,
          1000,
          1000,
          1000,
          1000,
          1250
        ]
      },
      "Nauki ścisłe (Physical Sciences)": {
        "lower": [
          601,
          801,
          801,
          1001,
          1001,
          1001,
          801
        ],
        "upper": [
          800,
          1000,
          1000,
          1001,
          1001,
          1001,
          1000
        ]
      },
      "Nauki społeczne (Social Sciences)": {
        "lower": [
          null,
          null,
          null,
          null,
          null,
          null,
          801
        ],
        "upper": [
          null,
          null,
          null,
          null,
          null,
          null,
          1000
        ]
      }
    }
  };

  const grasSubjectData = {
    years: [2020, 2021, 2022, 2023, 2024, 2025],
    subjects: {
      "Elektrotechnika i elektronika (Electrical & Electronic Engineering)": {
        lower: [301, 401, 401, null, null, null],
        upper: [400, 500, 500, null, null, null]
      },
      "Energetyka (Energy Science & Engineering)": {
        lower: [301, null, null, null, null, null],
        upper: [400, null, null, null, null, null]
      },
      "Fizyka (Physics)": {
        lower: [301, 301, 201, 301, 401, 401],
        upper: [400, 400, 300, 400, 500, 500]
      },
      "Inżynieria mechaniczna (Mechanical Engineering)": {
        lower: [201, 301, null, null, 301, null],
        upper: [300, 400, null, null, 400, null]
      },
      "Inżynieria metalurgiczna (Metallurgical Engineering)": {
        lower: [null, null, null, null, 151, 101],
        upper: [null, null, null, null, 200, 150]
      },
      "Matematyka (Mathematics)": {
        lower: [301, null, null, null, null, null],
        upper: [400, null, null, null, null, null]
      },
      "Nauka i technologie instrumentacji (Instruments Science & Technology)": {
        lower: [151, 151, 101, null, 201, 201],
        upper: [200, 200, 150, null, 300, 300]
      },
      "Telekomunikacja (Telecommunication Engineering)": {
        lower: [201, null, null, null, null, null],
        upper: [300, null, null, null, null, null]
      }
    }
  };

  const engiSubjectData = {
    years: [2023, 2024, 2025],
    subjects: {
      "Inżynieria chemiczna (Chemical Engineering)": {
        lower: [77, 49, 56],
        upper: [77, 49, 56],
        raw: ["77=", "49=", "56="],
        score: [63.13, 72.13, 71.76]
      },
      "Inżynieria lądowa (Civil Engineering)": {
        lower: [77, 70, 84],
        upper: [77, 70, 84],
        raw: ["77=", "70=", "84="],
        score: [58.87, 64.52, 63.59]
      },
      "Elektronika, elektrotechnika i inżynieria informacyjna": {
        lower: [95, 71, 62],
        upper: [95, 71, 62],
        raw: ["95=", "71=", "62="],
        score: [64.72, 61.22, 67.75]
      },
      "Inżynieria środowiska (Environmental engineering)": {
        lower: [74, 86, 130],
        upper: [74, 86, 130],
        raw: ["74=", "86=", "130="],
        score: [60.85, 60.81, 56.80]
      },
      "Inżynieria materiałowa (Materials Engineering)": {
        lower: [71, 47, 50],
        upper: [71, 47, 50],
        raw: ["71=", "47=", "50="],
        score: [69.72, 71.53, 71.31]
      },
      "Inżynieria mechaniczna (Mechanical engineering)": {
        lower: [63, 76, 80],
        upper: [63, 76, 80],
        raw: ["63=", "76=", "80="],
        score: [72.77, 69.37, 70.86]
      },
      "Inżynieria medyczna": {
        lower: [63, 59, 73],
        upper: [63, 59, 73],
        raw: ["63", "59=", "73="],
        score: [54.77, 57.27, 57.14]
      }
    }
  };

  const theYears = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

  const theLower = [1001, 1001, 1201, 1201, 1201, 1201, 1201];

  const theUpper = [null, null, null, 1500, 1500, 1500, 1500];

  const arwuYears = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

  const arwuLower = [801, 901, 901, 901, 901, 901, 901];

  const arwuUpper = [900, 1000, 1000, 1000, 1000, 1000, 1000];

  const arwuDetailsData = {
    years: arwuYears,
    worldRankLabels: ['801–900', '901–1000', '901–1000', '901–1000', '901–1000', '901–1000', '901–1000'],
    worldRankLower: arwuLower,
    worldRankUpper: arwuUpper,
    nationalRankLabels: ['4–6', '8–10', '7–11', '5–9', '4–8', '4–7', '4–7'],
    nationalRankLower: [4, 8, 7, 5, 4, 4, 4],
    nationalRankUpper: [6, 10, 11, 9, 8, 7, 7],
    indicators: {
      alumni: { label: 'Absolwenci z Noblem lub Medalem Fieldsa', shortLabel: 'Alumni', weight: 10, values: [0, 0, 0, 0, 0, 0, 0] },
      award: { label: 'Kadra z Noblem lub Medalem Fieldsa', shortLabel: 'Award', weight: 20, values: [0, 0, 0, 0, 0, 0, 0] },
      hici: { label: 'Najczęściej cytowani badacze', shortLabel: 'HiCi', weight: 20, values: [0, 0, 0, 0, 0, 0, 0] },
      ns: { label: 'Publikacje w Nature i Science', shortLabel: 'N&S', weight: 20, values: [2.0, 2.5, 2.5, 2.5, 3.2, 3.6, 3.9] },
      pub: { label: 'Publikacje w SCI-Expanded i SSCI', shortLabel: 'PUB', weight: 20, values: [27.5, 26.9, 26.7, 24.5, 25.3, 25.3, 24.5] },
      pcp: { label: 'Wynik ważony na pracownika', shortLabel: 'PCP', weight: 10, values: [10.9, 11.1, 11.6, 10.9, 11.1, 11.0, 10.6] }
    }
  };

  const perspektywyYears = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

  const perspektywyPositions = [3, 3, 3, 3, 3, 3, 3];

  const perspektywyScores = [78.9, 83.4, 84, 88, 85, 89.9, 92.3];

  const engiYears = [2023, 2024, 2025];

  const engiPositions = [69, 64, 72];

  const engiRankLabels = ['69=', '64=', '72='];

  const engiScores = [60.17, 62.2, 63.82];

  return Object.freeze({
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
  });
})();
