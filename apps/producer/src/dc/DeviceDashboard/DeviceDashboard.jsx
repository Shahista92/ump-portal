import React from 'react';
import View from './View.jsx';

const CATS = [
  { label: 'Water Level', count: 3, kind: 'level', tint: '#DFF6F7', ink: '#0F9488', d: 'M3 15c3 0 3 2 6 2s3-2 6-2 3 2 6 2M8 9l4-4 4 4M12 5v6' },
  { label: 'Pressure Sensor', count: 1, kind: 'pressure', tint: '#EEE7FB', ink: '#7C4DDA', d: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 12l4-3' },
  { label: 'Water Flow', count: 1, kind: 'flow', tint: '#DFF6F7', ink: '#06A3C4', d: 'M3 9c3 0 3 2 6 2s3-2 6-2 3 2 6 2M3 15c3 0 3 2 6 2s3-2 6-2 3 2 6 2' },
  { label: 'Weather Station', count: 3, kind: 'weather', tint: '#DFF3F9', ink: '#0E8090', d: 'M4 18h16M7 18a5 5 0 0 1 9-3M12 6v2M18 9l-1.5 1.5' },
  { label: 'Dust Sensor', count: 1, kind: 'dust', tint: '#F7E7F3', ink: '#B14DA0', d: 'M4 8h10M4 12h14M4 16h8M17 8h3M20 16h-2' },
  { label: 'Soil Probe', count: 2, kind: 'soil', tint: '#F2E9E2', ink: '#6B4A3A', d: 'M12 3v13M8 6l4-3 4 3M6 20h12M12 16l-5 4M12 16l5 4' },
  { label: 'Mini Soil Probe', count: 3, kind: 'mini', tint: '#EAF2E4', ink: '#4E7A2E', d: 'M12 7v9M9 9l3-2 3 2M7 20h10M12 16l-3 4M12 16l3 4' },
  { label: 'Rain Gauge', count: 2, kind: 'rain', tint: '#E4EEFB', ink: '#2A6FDB', d: 'M6 13a5 5 0 0 1 4-8 5 5 0 0 1 8 3 3 3 0 0 1 0 6H7M9 20l1-2M13 21l1-2M17 20l1-2' },
  { label: 'Temp Humidity Pressure Sensor', count: 1, kind: 'thp', tint: '#DFF3F9', ink: '#E4572E', d: 'M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0zM12 9v5' },
  { label: 'Leaf Wetness', count: 1, kind: 'leaf', tint: '#E6F4E2', ink: '#3F7A2A', d: 'M5 19C5 10 10 5 20 4c-1 10-6 15-15 15zM5 19l8-8' },
  { label: 'Weather + Soil Probe', count: 1, kind: 'wxsoil', tint: '#DFF3F9', ink: '#0E8090', d: 'M4 18h16M7 18a5 5 0 0 1 9-3M12 6v2M18 9l-1.5 1.5', d2: 'M12 3v13M8 6l4-3 4 3M6 20h12M12 16l-5 4M12 16l5 4' },
  { label: 'Weather + Leaf Wetness', count: 1, kind: 'wxleaf', tint: '#E6F4E2', ink: '#3F7A2A', d: 'M4 18h16M7 18a5 5 0 0 1 9-3M12 6v2M18 9l-1.5 1.5', d2: 'M5 19C5 10 10 5 20 4c-1 10-6 15-15 15zM5 19l8-8' },
  { label: 'Gas Sensor', count: 1, kind: 'gas', tint: '#FEF3E2', ink: '#B45309', d: 'M4 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M14 6.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M14 17.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M9.6 10.6l4.6-2.6M9.6 13.4l4.6 2.6' },
];
const DEVICES = [
  { id: 'm1', kind: 'mini', name: 'AxisTech Mini Soil Probe', serial: 'AXTCL_4E9021C4A118', color: '#1AA34A' },
  { id: 'm2', kind: 'mini', name: 'John Mini Soil Probe', serial: 'AXTCL_4E9021C4A2D6', color: '#2A6FDB' },
  { id: 'm3', kind: 'mini', name: 'Demo Mini Soil Probe', serial: 'AXTCL_4E9021C4A3F0', color: '#FF8C2E' },
  { id: 'p1', name: 'AxisTech Soil Probe', serial: 'AXTCL_4E873A5B5898', color: '#1AA34A' },
  { id: 'p2', name: 'John Soil Probe', serial: 'AXTCL_4E6FF1E989E5', color: '#2A6FDB' },
  { id: 'w1', kind: 'weather', name: 'AxisTech Weather Station', serial: 'AXTCL_WX_9F41C2', color: '#0E8090' },
  { id: 'w2', kind: 'weather', name: 'Agri Weather Station', serial: 'AXTCL_WX_9F52D7', color: '#DC2626', theme: 'hot' },
  { id: 'w3', kind: 'weather', name: 'Highland Weather Station', serial: 'AXTCL_WX_9F63E4', color: '#0284C7', theme: 'cool' },
  { id: 'f1', kind: 'flow', name: 'AxisTech Flow Meter', serial: 'AXTCL_FM_3C61D8', color: '#0EA5A5' },
  { id: 'g1', kind: 'gas', name: 'AxisTech Gas Sensor', serial: 'AXTCL_GS_7B20E1', color: '#B45309' },
  { id: 'r1', kind: 'rain', name: 'AxisTech Rain Gauge', serial: 'AXTCL_RG_5D18A3', color: '#2A6FDB' },
  { id: 'r2', kind: 'rain', name: 'North Paddock Rain Gauge', serial: 'AXTCL_RG_5D18B7', color: '#0E8090' },
  { id: 'l1', kind: 'leaf', name: 'AxisTech Leaf Wetness', serial: 'AXTCL_4E6FF1E9B4EC', color: '#3F7A2A' },
  { id: 'ds1', kind: 'dust', name: 'AxisTech Dust Sensor', serial: 'AXTCL_DS_2F71A9', color: '#B14DA0' },
  { id: 'th1', kind: 'thp', name: 'AxisTech THP Sensor', serial: 'AXTCL_TH_5B03C8', color: '#1B8FB3' },
  { id: 'ps1', kind: 'pressure', name: 'Senator Air Pressure', serial: 'AXTCL_PS_6E19B2', color: '#7C4DDA' },
  { id: 'cs1', kind: 'wxsoil', name: 'AxisTech Weather + Soil Station', serial: 'AXTCL_WS_7A31C9', color: '#0E8090' },
  { id: 'cl1', kind: 'wxleaf', name: 'AxisTech Weather + Leaf Station', serial: 'AXTCL_WF_6C22D4', color: '#3F7A2A' },
  { id: 'wl1', kind: 'level', name: 'AxisTech Water Level Sensor', serial: 'AXTCL_WL_8A42F3', color: '#0EA5A5' },
  { id: 'wl2', kind: 'level', name: 'Stock Tank Level Sensor', serial: 'AXTCL_WL_8A43B7', note: ' · Stock Tank 2', color: '#2A6FDB' },
  { id: 'wl3', kind: 'level', name: 'House Tank Level Sensor', serial: 'AXTCL_WL_8A44C2', note: ' · House Tank', color: '#7C4DDA' },
];
const KI_CACHE = {};
function kiF(key, label, group, unit, dec, times, vals, o) { return { key, label, group, unit, dec, times, vals, words: [], ...(o || {}) }; }
function kiFields(kind, dev) {
  const ck = kind + (dev.id || ''); if (KI_CACHE[ck]) return KI_CACHE[ck];
  let F = [];
  const tm = arr => arr.map(t => +t);
  if (kind === 'weather') {
    const B = tzBase(), T = B.map(p => p.t), col = k => B.map(p => p[k]);
    F = [
      kiF('temp', 'Air temperature', 'Temperature', '°C', 1, T, col('temp'), { words: ['temperature', 'temp', 'hot', 'cold', 'warm'] }),
      kiF('dewpoint', 'Dew point', 'Temperature', '°C', 1, T, col('dewpoint'), { words: ['dew'], strong: ['dew point', 'dewpoint'] }),
      kiF('deltaT', 'Delta T', 'Temperature', '°C', 1, T, col('deltaT'), { words: ['delta'], strong: ['delta t', 'deltat'] }),
      kiF('rain', 'Rainfall', 'Rainfall', 'mm', 1, T, col('rain'), { sum: true, words: ['rain', 'rainfall', 'precipitation', 'wet'] }),
      kiF('humidity', 'Relative humidity', 'Humidity', '%', 0, T, col('humidity'), { words: ['humidity', 'humid', ' rh '] }),
      kiF('wind', 'Wind speed', 'Wind', 'km/h', 1, T, col('wind'), { words: ['wind', 'speed', 'windy'] }),
      kiF('gust', 'Wind gust', 'Wind', 'km/h', 1, T, col('gust'), { words: ['gust'], strong: ['gust'] }),
      kiF('pressure', 'Atmospheric pressure', 'Pressure', 'hPa', 1, T, col('pressure'), { words: ['pressure', 'atmospheric', 'barometric'] }),
      kiF('msl', 'Sea level pressure', 'Pressure', 'hPa', 1, T, col('msl'), { words: ['msl'], strong: ['sea level', 'msl'] }),
      kiF('solar', 'Solar radiation', 'Solar & UV', 'W/m²', 0, T, col('solar'), { words: ['solar', 'radiation', 'sun'] }),
      kiF('uv', 'UV index', 'Solar & UV', '', 1, T, col('uv'), { words: [' uv '], strong: ['uv index', ' uv'] }),
    ];
  } else if (kind === 'soil' || kind === 'mini') {
    const depths = kind === 'mini' ? MDEPTHS : DEPTHS, H = 36e5, N = 182 * 24 + 1, T = Array.from({ length: N }, (_, i) => SOIL_END - (N - 1 - i) * H);
    const P = [['moisture', 'Soil moisture', 'Soil Moisture', '%', 1, 31.7, 2.16, ['moisture', 'water', 'wet', 'dry', 'vwc']], ['temp', 'Soil temperature', 'Soil Temperature', '°C', 1, 11.7, .32, ['temperature', 'temp', 'warm', 'cold']]]
      .concat(kind === 'mini' ? [['ec', 'Soil EC', 'Soil Chemistry', 'dS/m', 2, .82, .06, ['ec', 'conductivity', 'salinity']], ['ph', 'Soil pH', 'Soil Chemistry', 'pH', 2, 6.4, .12, ['ph', 'acidity']]] : [['vic', 'Soil VIC', 'Salinity', 'VIC', 0, 1180, 24, ['vic', 'salinity', 'ion']]]);
    P.forEach(([k, label, group, unit, dec, base, amp, words]) => {
      const per = depths.map((dl, i) => T.map(t => soilVal(DSEED[dl] + i * 3, base + i * (k === 'moisture' ? 2.4 : .5), amp, t)));
      F.push(kiF(k, label, group, unit, dec, T, T.map((_, j) => per.reduce((s, a) => s + a[j], 0) / per.length), { words, strong: k === 'ph' || k === 'ec' || k === 'vic' ? [' ' + k] : [] }));
      depths.forEach((dl, i) => { const dd = (dl.match(/\d+ cm/) || [dl])[0]; F.push(kiF(k + i, label + ' at ' + dl, group, unit, dec, T, per[i], { words, depth: dd, card: false, strong: k === 'ph' || k === 'ec' || k === 'vic' ? [' ' + k] : [] })); });
    });
  } else if (kind === 'rain') {
    const D = rainDaily();
    F = [kiF('rain', 'Rainfall', 'Rainfall', 'mm', 1, D.map(d => +d.t), D.map(d => d.v), { sum: true, daily: true, words: ['rain', 'rainfall', 'precipitation', 'wet'] })];
  } else if (kind === 'leaf') {
    const H = LEAF_H, T = tm(H.times);
    F = [kiF('wet', 'Leaf wetness', 'Leaf Wetness', '%', 0, T, H.wet, { words: ['wetness', 'wet', 'moisture'] }), kiF('temp', 'Leaf temperature', 'Leaf Temperature', '°C', 1, T, H.temp, { words: ['temperature', 'temp', 'warm', 'cold'] })];
  } else if (kind === 'level') {
    const L = LV_TANKS[dev.id] || LV_TANKS.wl1, T = tm(L.H.times);
    F = [kiF('pct', 'Water level', 'Water Level', '%', 1, T, L.H.pct, { words: ['level', 'water', 'full', 'tank', 'percent'] }), kiF('m', 'Water depth', 'Water Level', 'm', 2, T, L.H.pct.map(v => v / 100 * L.tank), { words: ['depth', 'metre', 'meter', 'height'], strong: ['depth', 'metre', 'meter'] })];
  } else if (kind === 'pressure') {
    F = [kiF('p', 'Air pressure', 'Air Pressure', 'hPa', 1, tm(PR_H.times), PR_H.v, { words: ['pressure', 'barometric', 'atmospheric', 'air'] })];
  } else if (kind === 'dust' || kind === 'thp') {
    MM_CFG[kind].metrics.forEach((m, mi) => { const S = mmSeries(kind, m, mi), w = m.label.toLowerCase(); F.push(kiF(m.k, m.label, m.std ? 'Particulates' : 'Conditions', m.unit, m.dec, tm(S.times), S.v, { words: [w].concat(w.split(/[^a-z0-9.]+/).filter(x => x.length > 2)), strong: [m.k, w.replace(/\s+/g, '')] })); });
  } else if (kind === 'gas') {
    ['temp', 'hum', 'pres', 'co2', 'nh3', 'ch4', 'co', 'odour'].forEach(k => {
      const m = GAS_M[k], a = gasSeries(k, '6m'), b = gasSeries(k, '1w'), c = gasSeries(k, '24h');
      const pts = []; const add = (sr, lo) => sr.times.forEach((t, i) => { if (+t < lo) pts.push([+t, sr.vals[i]]); });
      add(c, Infinity); const c0 = +c.times[0]; add(b, c0); const b0 = +b.times[0]; add(a, b0); pts.sort((x, y) => x[0] - y[0]);
      const w = { temp: ['temperature', 'temp'], hum: ['humidity', 'humid'], pres: ['pressure'], co2: ['co2', 'co₂', 'carbon dioxide'], nh3: ['nh3', 'nh₃', 'ammonia'], ch4: ['ch4', 'ch₄', 'methane'], co: [' co ', 'carbon monoxide'], odour: ['odour', 'odor', 'smell'] }[k];
      F.push(kiF(k, m.label, ['temp', 'hum', 'pres'].includes(k) ? 'Conditions' : 'Gases', m.unit, m.dec || 0, pts.map(p => p[0]), pts.map(p => p[1]), { words: w, strong: w.filter(x => x.length > 2 && x !== 'temp') }));
    });
  }
  return (KI_CACHE[ck] = F);
}
const KI_LABEL = { weather: 'Weather', soil: 'Soil Probe', mini: 'Mini Soil Probe', rain: 'Rain Gauge', gas: 'Gas Sensor', leaf: 'Leaf Wetness', level: 'Water Level', pressure: 'Air Pressure', dust: 'Dust Sensor', thp: 'THP Sensor' };
const KI_ICON = { weather: 'M4 18h16M7 18a5 5 0 0 1 9-3M12 6v2M18 9l-1.5 1.5', soil: 'M12 3v13M8 6l4-3 4 3M6 20h12M12 16l-5 4M12 16l5 4', mini: 'M12 3v13M8 6l4-3 4 3M6 20h12M12 16l-5 4M12 16l5 4', leaf: 'M5 19C5 10 10 5 20 4c-1 10-6 15-15 15zM5 19l8-8' };
function kiSource(kind, dev) { return { key: kind + (dev.id || ''), kind, label: KI_LABEL[kind], icon: KI_ICON[kind] || '', name: dev.name || '', serial: dev.serial || '', fields: kiFields(kind, dev) }; }
const DEPTHS = ['10 cm', '20 cm', '30 cm', '40 cm', '50 cm', '60 cm'];
const MDEPTHS = ['Probe A – 20 cm', 'Probe B – 40 cm', 'Probe C – 60 cm'];
const DEPTHS_BY_KIND = { soil: DEPTHS, mini: MDEPTHS };
const kindOf = id => (DEVICES.find(d => d.id === id) || {}).kind || 'soil';
const STAMPS = {
  w2: '09 Sept 2026, 3:45 pm',
  w3: '09 Sept 2026, 3:40 pm',
  m1: '09 Sept 2026, 10:05 am',
  m2: '09 Sept 2026, 09:48 am',
  m3: '08 Sept 2026, 06:12 pm',
  p1: '18 June 2026, 01:22 pm',
  p2: '18 June 2026, 03:47 pm',
  r1: '09 Sept 2026, 03:45 pm',
  r2: '09 Sept 2026, 03:30 pm',
  w1: '09 Sept 2026, 3:49 pm',
  g1: '30 Sept 2026, 2:05 pm',
  l1: '02 Oct 2026, 6:05 pm',
  wl1: '08 Oct 2026, 2:00 pm',
  wl2: '08 Oct 2026, 2:00 pm',
  wl3: '08 Oct 2026, 1:45 pm',
  ps1: '08 Oct 2026, 2:42 pm',
  ds1: '08 Oct 2026, 2:30 pm',
  th1: '08 Oct 2026, 2:30 pm',
  cs1: '09 Sept 2026, 3:49 pm',
  cl1: '09 Sept 2026, 3:49 pm',
};
const ICON = {
  moisture: 'M12 3s5 5.5 5 9a5 5 0 0 1-10 0c0-3.5 5-9 5-9z',
  temp: 'M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0zM12 9v5',
  vic: 'M3 12h3l2-5 3 10 3-8 2 3h5',
  ec: 'M13 3L5 14h6l-1 7 8-11h-6l1-7z',
  ph: 'M12 3l5 7.5a6 6 0 1 1-10 0L12 3zM8.5 15h7',
  wind: 'M3 8h11a2.5 2.5 0 1 0-2-4M3 12h15a2.5 2.5 0 1 1-2 4M3 16h9',
  humidity: 'M12 3s5 5.5 5 9a5 5 0 0 1-10 0c0-3.5 5-9 5-9z',
  visibility: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  uv: 'M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M4.9 17.1l1.4-1.4M17.1 4.9l1.4 1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  sunrise: 'M12 3v4M4 18h16M6.8 18a5.2 5.2 0 0 1 10.4 0M9 12l3-3 3 3',
  sunset: 'M12 3v4M4 18h16M6.8 18a5.2 5.2 0 0 1 10.4 0M9 10l3 3 3-3',
  cloud: 'M7 18a4 4 0 0 1 .3-7.98A5 5 0 0 1 17 11a3 3 0 0 1-.3 7z',
  rain: 'M7 15a4 4 0 0 1 .5-7.94A5 5 0 0 1 17 9a3.5 3.5 0 0 1-.5 6.98M8 19l-1 2M12 19l-1 2M16 19l-1 2',
  tree: 'M12 3v13M8 6l4-3 4 3M6 20h12M12 16l-5 4M12 16l5 4',
  sun: 'M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M4.9 17.1l1.4-1.4M17.1 4.9l1.4 1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  pressure: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 12l4-3M12 12V8',
  solar: 'M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  evapo: 'M5 20c8 0 14-6 14-14 0 0-9 1-13 6-3 3.5-2 6-1 8z',
  spray: 'M12 3s5 5.5 5 9a5 5 0 0 1-10 0c0-3.5 5-9 5-9zM9 21h6M12 21v-3',
  disease: 'M12 21c6-3 8-8 8-13a12 12 0 0 0-16 0c0 5 2 10 8 13zM12 8v6M12 17v.01',
  chill: 'M12 2v20M5 6l14 12M19 6L5 18M12 2l-3 3M12 2l3 3M12 22l-3-3M12 22l3-3',
  dewpoint: 'M12 3s5 5.5 5 9a5 5 0 0 1-10 0c0-3.5 5-9 5-9z',
  windGust: 'M6 15a3.5 3.5 0 0 1 .5-6.96A4.5 4.5 0 0 1 15 8M3 18h9M3 15h5',
  deltaT: 'M12 4l8 16H4z',
  pin: 'M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
};
const DCOL = { 'Probe A – 20 cm': '#2A6FDB', 'Probe B – 40 cm': '#1AA34A', 'Probe C – 60 cm': '#FF8C2E', '10 cm': '#2A6FDB', '20 cm': '#1AA34A', '30 cm': '#FF8C2E', '40 cm': '#8B5CF6', '50 cm': '#0EA5A5', '60 cm': '#D92D6B' };
const FILL = { 'Probe A – 20 cm': 'rgba(42,111,219,.08)', 'Probe B – 40 cm': 'rgba(26,163,74,.08)', 'Probe C – 60 cm': 'rgba(255,140,46,.08)', '10 cm': 'rgba(42,111,219,.08)', '20 cm': 'rgba(26,163,74,.08)', '30 cm': 'rgba(255,140,46,.08)', '40 cm': 'rgba(139,92,246,.08)', '50 cm': 'rgba(14,165,165,.08)', '60 cm': 'rgba(217,45,107,.08)' };
const DSEED = { 'Probe A – 20 cm': 5, 'Probe B – 40 cm': 13, 'Probe C – 60 cm': 25, '10 cm': 3, '20 cm': 9, '30 cm': 15, '40 cm': 21, '50 cm': 27, '60 cm': 33 };
const RANGES = ['1D', '1W', '1M', '3M', '6M'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const MON3 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const BOUND_START = '2026-04-29';
const BOUND_END = '2026-09-08';
const SOIL_T0 = new Date(2026, 8, 2, 0, 0).getTime(), SOIL_T1 = new Date(2026, 8, 8, 0, 0).getTime();
function soilTimeAt(idx, total) {
  const t = new Date(SOIL_T0 + (SOIL_T1 - SOIL_T0) * idx / Math.max(total - 1, 1));
  const hr = t.getHours() % 12 || 12;
  return hr + ':' + String(t.getMinutes()).padStart(2, '0') + (t.getHours() < 12 ? ' am' : ' pm') + ', ' + wFmtDate(t);
}
const SOIL_TEX = [['Sand', 12, 5], ['Loamy Sand', 15, 7], ['Sandy Loam', 22, 10], ['Loam', 32, 14], ['Silt Loam', 35, 16], ['Clay Loam', 36, 20], ['Silty Clay Loam', 38, 24], ['Clay', 42, 28]];
const soilTx = P => { const r = SOIL_TEX.find(x => x[0] === (P && P.soilType)) || SOIL_TEX[6]; const s = r[1] - r[2]; return { name: r[0], FC: r[1], PWP: r[2], REF: r[2] + .5 * s, s }; };
const SV_C = { n: ['#9AA59F', '#6A746E', '#EEF1EF', '#E5E8E6'], g: ['#16A34A', '#0E7C3A', '#E7F6EC', '#CFE5C8'], a: ['#D97706', '#92560A', '#FDF1DC', '#F5DFB0'], r: ['#DC2626', '#B42318', '#FDECEA', '#F5C6C0'], b: ['#2A6FDB', '#1D4FA8', '#E6EFFC', '#C7D8F5'] };
const SV_ICON = { ok: 'M22 11.1V12a10 10 0 1 1-5.9-9.1M22 4L12 14l-3-3', warn: 'M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01', stop: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM15 9l-6 6M9 9l6 6' };
const SOIL_END = new Date(2026, 8, 8, 15, 45).getTime(), SOIL_STEP = 9e5, SOIL_DAYS = { '1D': 1, '1W': 7, '1M': 30, '3M': 91, '6M': 182 };
const SM_TZ = -new Date().getTimezoneOffset() / 60;
const smJit = c => { const r = Math.sin(c * 91.17 + 4.3) * 43758.5453; return r - Math.floor(r); };
const smDayH = (a, b) => { const f = x => { const d = Math.floor(x / 24), r = x - d * 24; return d * 12 + Math.max(0, Math.min(r, 19) - 7); }; return f(b + SM_TZ) - f(a + SM_TZ); };
const SM_SIM_R = {};
const SM_SIM = (() => {
  const FC = 38, PWP = 24, REF = 31, SAT = 44, NL = 6, T0 = SOIL_END - 215 * 864e5, N = 215 * 24 + 2;
  const root = [.34, .3, .2, .1, .045, .015], th = [FC - .6, FC - .5, FC - .6, FC - 1.2, FC - 2, FC - 2.6], out = Array.from({ length: NL }, () => new Float32Array(N));
  let irrAt = -1, lastRain = -99;
  for (let s = 0; s < N; s++) {
    const t = T0 + s * 36e5, d = new Date(t), hr = d.getHours(), doy = Math.floor((t - new Date(d.getFullYear(), 0, 1)) / 864e5), day = Math.floor(s / 24);
    const etDay = 3.3 + 2.4 * Math.cos(2 * Math.PI * (doy - 15) / 365);
    const sun = hr >= 7 && hr < 19 ? Math.sin(Math.PI * (hr - 6.5) / 12.5) : 0, et = etDay * sun * Math.PI / 25;
    let inMm = 0;
    if (hr === 0) { const wet = .5 + .5 * Math.cos(2 * Math.PI * (doy - 180) / 365); if (smJit(day * 3.1 + 7) < .12 + .28 * wet) SM_SIM_R[day] = 1.5 + 22 * Math.pow(smJit(day * 5.7 + 1), 2.2); }
    if (SM_SIM_R[day] && hr >= 14 && hr < 18) { inMm += SM_SIM_R[day] / 4; lastRain = s; }
    const rz = (th[1] + th[2] + th[3]) / 3;
    if (false && irrAt < 0 && rz < REF + 1.2 && s - lastRain > 36) irrAt = (day + 1) * 24 + 6;
    if (irrAt >= 0 && s >= irrAt && s < irrAt + 3) { inMm += 6 + 1.5 * smJit(irrAt); if (s === irrAt + 2) irrAt = -1; }
    th[0] += inMm;
    for (let i = 0; i < NL; i++) {
      if (th[i] > SAT) { const x = th[i] - SAT; th[i] = SAT; if (i < NL - 1) th[i + 1] += x; }
      if (th[i] > FC) { const x = (th[i] - FC) * (.3 - i * .04); th[i] -= x; if (i < NL - 1) th[i + 1] += x * .97; }
      const ks = Math.max(0, Math.min(1, (th[i] - PWP) / ((FC - PWP) * .55)));
      th[i] -= et * root[i] * ks;
    }
    for (let i = 0; i < NL - 1; i++) { const f = (th[i + 1] - th[i]) * .004; th[i] += f; th[i + 1] -= f; }
    for (let i = 0; i < NL; i++) out[i][s] = th[i];
  }
  return { T0, N, out };
})();
const SM_C = [37.4, 37.5, 37.4, 36.8, 36, 35.4], smDamp = (i, v) => SM_C[i] + (v - SM_C[i]) * .16;
function moistVal(seed, base, t) {
  const i = Math.max(0, Math.min(5, Math.round((base - 31.7) / 2.4))), S = SM_SIM, x = Math.max(0, Math.min(S.N - 1.001, (t - S.T0) / 36e5)), j = Math.floor(x), f = x - j, L = S.out[i];
  const k = Math.floor(t / SOIL_STEP), q = Math.sin(k * 12.9898 + seed * 78.233) * 43758.5453;
  return smDamp(i, L[j] + (L[j + 1] - L[j]) * f) + (q - Math.floor(q) - .5) * .06 + (seed % 7 - 3) * .05;
}
const P1MO = [21.8, 24.3, 26.9, 28.7, 30.4, 31.6];
const SEED_D = { 3: 10, 12: 20, 21: 30, 30: 40, 39: 50, 48: 60, 5: 20, 16: 40, 31: 60 };
function soilTempUM(seed, t) {
  const dc = SEED_D[seed] || 30, d = new Date(t), doy = (t - new Date(d.getFullYear(), 0, 1)) / 864e5, hh = t / 36e5, hr = d.getHours() + d.getMinutes() / 60, day = Math.floor((t - SM_SIM.T0) / 864e5);
  const ann = 15 + 1.5 * Math.exp(-dc / 140) * Math.cos(2 * Math.PI * (doy - 25 - dc * .35) / 365);
  const di = .3 * Math.exp(-(dc - 5) / 10) * Math.sin(2 * Math.PI * (hr - 9 - dc * .25) / 24);
  const syn = .18 * Math.exp(-dc / 45) * (Math.sin(hh / 53 + 1.7) + .6 * Math.sin(hh / 23 + .4));
  const wet = (SM_SIM_R[day] ? 1 : 0) + (SM_SIM_R[day - 1] ? .5 : 0), cool = -.1 * wet * Math.exp(-dc / 30);
  const k = Math.floor(t / SOIL_STEP), q = Math.sin(k * 12.9898 + seed * 78.233) * 43758.5453;
  return ann + di + syn + cool + (q - Math.floor(q) - .5) * .05 * Math.exp(-dc / 30);
}
function soilVicUM(seed, t) {
  const dc = SEED_D[seed] || 30, li = Math.max(0, Math.min(5, Math.round(dc / 10) - 1)), S = SM_SIM, x = Math.max(0, Math.min(S.N - 1.001, (t - S.T0) / 36e5)), j = Math.floor(x), f = x - j, th = smDamp(li, S.out[li][j] + (S.out[li][j + 1] - S.out[li][j]) * f);
  const k = Math.floor(t / SOIL_STEP), q = Math.sin(k * 12.9898 + seed * 78.233) * 43758.5453;
  return [620, 600, 585, 570, 555, 540][li] + 14 * (th - 33) + 6 * Math.sin(t / 864e5 / 9 + li) + (q - Math.floor(q) - .5) * 3;
}
function soilVal(seed, base, amp, t) {
  if (amp === 2.16) return moistVal(seed, base, t);
  if (amp === .32) return soilTempUM(seed, t);
  if (amp === 24) return soilVicUM(seed, t);
  if (amp === 2.17) { const hh = t / 36e5, k = Math.floor(t / SOIL_STEP), q = Math.sin(k * 12.9898 + seed * 78.233) * 43758.5453, w = base < 15 ? 1 : base < 20 ? .45 : .2;
    return base + w * (.35 * Math.sin(hh / 37 + seed) + .22 * Math.sin(hh * Math.PI / 12 + seed * .7) + .12 * Math.sin(hh / 9.3 + seed * 2.1)) + (seed % 2 ? .14 : -.04) * Math.max(0, 1 - (SOIL_END - t) / 72e5) + (q - Math.floor(q) - .5) * .03; }
  const h = t / 36e5, k = Math.floor(t / SOIL_STEP), r = Math.sin(k * 12.9898 + seed * 78.233) * 43758.5453;
  return base + amp * (Math.sin(h / 41 + seed) * 1.5 + Math.sin(h / 13.7 + seed * 1.9) * .8 + Math.sin(h * Math.PI / 12 + seed * .7) * .45 + (r - Math.floor(r) - .5) * .35);
}
const SOIL_CACHE = {};
function soilSeries(seed, base, amp, wa, wb, res) {
  const key = [seed, base, amp, wa, wb, res].join('|'); if (SOIL_CACHE[key]) return SOIL_CACHE[key];
  if (Object.keys(SOIL_CACHE).length > 400) for (const k in SOIL_CACHE) delete SOIL_CACHE[k];
  const times = [], vals = [], H = 36e5;
  if (res === 'raw') { for (let t = Math.floor(wa / SOIL_STEP) * SOIL_STEP - SOIL_STEP; t <= Math.min(SOIL_END, wb + SOIL_STEP); t += SOIL_STEP) { times.push(t); vals.push(soilVal(seed, base, amp, t)); } }
  else if (res === 'hour') { for (let h0 = Math.floor(wa / H) * H - H; h0 <= wb + H && h0 <= SOIL_END; h0 += H) { let sm = 0, c = 0; for (let q = 0; q < 4; q++) { const t = h0 + q * SOIL_STEP; if (t <= SOIL_END) { sm += soilVal(seed, base, amp, t); c++; } } times.push(h0 + H / 2); vals.push(sm / c); } }
  else { const d = new Date(wa); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - 1); for (; d.getTime() <= wb + 864e5 && d.getTime() <= SOIL_END; d.setDate(d.getDate() + 1)) { const d0 = d.getTime(); let sm = 0, c = 0; for (let q = 0; q < 48; q++) { const t = d0 + q * 1800e3; if (t <= SOIL_END) { sm += soilVal(seed, base, amp, t); c++; } } times.push(d0 + 12 * H); vals.push(sm / c); } }
  return SOIL_CACHE[key] = { times, vals };
}
const X_LABELS = ['2 Sep 26', '3 Sep 26', '5 Sep 26', '6 Sep 26', '8 Sep 26'];
const TOOLS = [
  { label: 'Zoom in', d: 'M12 8v8M8 12h8M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z' },
  { label: 'Zoom out', d: 'M8 12h8M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z' },
  { label: 'Selection zoom', d: 'M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM15 15l6 6' },
  { label: 'Panning', d: 'M9 11V5.5a1.5 1.5 0 0 1 3 0V11M12 11V4.5a1.5 1.5 0 0 1 3 0V11M15 11V6.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-1a6 6 0 0 1-6-6v-3a1.5 1.5 0 0 1 3 0' },
  { label: 'Reset zoom', d: 'M4 11l8-7 8 7M6 10v10h12V10' },
  { label: 'Menu', d: 'M4 7h16M4 12h16M4 17h16' },
];
function pretty(iso) {
  const [y, m, d] = iso.split('-');
  return d + ' ' + MON3[+m - 1] + ' ' + y;
}
function pct(iso) {
  const a = new Date(BOUND_START), b = new Date(BOUND_END), v = new Date(iso);
  return Math.max(0, Math.min(100, ((v - a) / (b - a)) * 100)).toFixed(2);
}
function shiftMonth(ym, delta) {
  const [y, m] = ym.split('-').map(Number);
  const d = new Date(y, m - 1 + delta, 1);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
}
function buildCal(ym, from, to) {
  const [y, m] = ym.split('-').map(Number);
  const first = new Date(y, m - 1, 1);
  const start = new Date(first);
  start.setDate(1 - first.getDay());
  const out = [];
  for (let i = 0; i < 42; i++) {
    const dt = new Date(start);
    dt.setDate(start.getDate() + i);
    const iso = dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0');
    const thisMonth = dt.getMonth() === m - 1;
    const allowed = iso >= BOUND_START && iso <= BOUND_END;
    const isFrom = iso === from, isTo = iso === to;
    const inSpan = iso > from && iso < to;
    out.push({
      n: dt.getDate(), iso, inRangeAllowed: allowed,
      cursor: allowed ? 'pointer' : 'default',
      ink: isFrom ? '#fff' : !allowed ? '#D5DBD7' : !thisMonth ? '#C3CAC6' : '#0F1A14',
      bg: isFrom ? '#2B2B2B' : inSpan && allowed ? '#F1F7F3' : 'transparent',
      ring: isTo ? '#1AA34A' : 'transparent',
      weight: isFrom || isTo ? '700' : '400',
    });
  }
  return out.slice(0, 42);
}
const RPTS = { '1D': 8, '1W': 14, '1M': 26, '3M': 40, '6M': 56 };
const NAV = [
  ['Devices', 'M4 5h16v10H4zM8 19h8M12 15v4'],
  ['Mobile', 'M7 3h10v18H7zM10 6h4M11 18h2'],
];

function series(seed, base, amp, n) {
  let v = base, out = [];
  for (let i = 0; i < n; i++) {
    v += Math.sin((i + seed) * 0.55) * amp * 0.5 + Math.cos((i * 1.7 + seed) * 0.31) * amp * 0.3;
    out.push(v);
  }
  return out;
}

function chartFrom(sets, unit, decimals) {
  const all = sets.flatMap(s => s.vals);
  if (!all.length) return { lines: [], ticks: [], grid: [10, 62, 114, 166, 218] };
  const min = Math.min(...all), max = Math.max(...all), span = (max - min) || 1;
  const y = v => 218 - ((v - min) / span) * 208;
  const lines = sets.map(s => {
    let d = '';
    s.vals.forEach((v, i) => { d += (i ? ' L' : 'M') + ((i / (s.vals.length - 1)) * 300).toFixed(1) + ' ' + y(v).toFixed(1); });
    return { line: d, stroke: s.color };
  });
  return {
    lines, _y: y, _sets: sets,
    ticks: [4, 3, 2, 1, 0].map((i, k) => ({
      label: (min + (span * i) / 4).toFixed(decimals) + ' ' + unit,
      top: (([10, 62, 114, 166, 218][k] / 240) * 100).toFixed(2) + '%',
    })),
    grid: [10, 62, 114, 166, 218],
  };
}

function mulberry32W(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function wFmtHour(d) { let h = d.getHours() % 12; if (h === 0) h = 12; return h + (d.getHours() < 12 ? 'am' : 'pm'); }
function wFmtDate(d) {
  const MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return d.getDate() + ' ' + MON[d.getMonth()] + ' ' + String(d.getFullYear()).slice(2);
}
const WX_RANGE_META = {
  latest: { n: 8, stepH: 3 }, '6h': { n: 6, stepH: 1 }, '9h': { n: 9, stepH: 1 }, '24h': { n: 8, stepH: 3 }, '48h': { n: 16, stepH: 3 }, '3d': { n: 12, stepH: 6 }, '7d': { n: 7, stepH: 24 }, '30d': { n: 30, stepH: 24 },
  '1m': { n: 30, stepH: 24 }, '3m': { n: 12, stepH: 168 }, '6m': { n: 24, stepH: 168 }, '9m': { n: 36, stepH: 168 }, '12m': { n: 52, stepH: 168 },
  hourly: { n: 24, stepH: 1 }, d3m: { n: 90, stepH: 24 }, d6m: { n: 182, stepH: 24 }, detail: { n: 20, stepH: 0.3 }, card3h: { n: 11, stepH: 0.3 }, card3d: { n: 3, stepH: 24 },
};
function wHourlyRain(range) {
  const meta = WX_RANGE_META[range] || WX_RANGE_META['24h'], hours = Math.max(24, Math.round(meta.n * meta.stepH));
  let seedNum = 7; for (const ch of range) seedNum = (seedNum * 31 + ch.charCodeAt(0)) >>> 0;
  const rand = mulberry32W((seedNum % 900) + 50), now = new Date('2026-09-10T12:00:00'), pts = [], fine = hours <= 48;
  let wet = 0;
  for (let i = hours - 1; i >= 0; i--) {
    const t = new Date(now.getTime() - i * 3600000);
    if (wet > 0) wet--; else if (rand() < 0.012) wet = 2 + Math.floor(rand() * 6);
    const rain = wet > 0 ? +(0.2 + rand() * 1.8).toFixed(1) : 0;
    const top = fine ? wFmtHour(t) : wFmtDate(t);
    pts.push({ label: fine ? wFmtHour(t) + ' ' + wFmtDate(t) : wFmtDate(t) + ' ' + wFmtHour(t), ax: { top, sub: fine ? wFmtDate(t) : '', h: wFmtHour(t), d: wFmtDate(t), hh: t.getHours(), stepH: 1 }, rain });
  }
  return pts;
}
function wDiurnal(hourOfDay) { return 15.5 + 4.6 * Math.sin(((hourOfDay - 6) / 24) * Math.PI * 2); }
function wGenPoints(range) {
  const meta = WX_RANGE_META[range] || WX_RANGE_META['24h'];
  let seedNum = 0; for (const ch of range) seedNum = (seedNum * 31 + ch.charCodeAt(0)) >>> 0;
  const rand = mulberry32W((seedNum % 900) + 50);
  const now = new Date('2026-09-10T12:49:00');
  const pts = [];
  const fineLabel = range === 'latest' || range === '24h' || range === '6h' || range === '9h' || range === '48h';
  const dayLabel = range === '7d' || range === '30d' || range === '1m';
  for (let i = meta.n - 1; i >= 0; i--) {
    const t = new Date(now.getTime() - i * meta.stepH * 3600000);
    const hourOfDay = t.getHours() + t.getMinutes() / 60;
    const diurnal = wDiurnal(hourOfDay);
    pts.push({
      label: fineLabel ? wFmtHour(t) : wFmtDate(t), ax: { top: fineLabel ? wFmtHour(t) : wFmtDate(t), sub: fineLabel ? wFmtDate(t) : '', ...(meta.stepH < 24 ? { h: wFmtHour(t), d: wFmtDate(t), hh: t.getHours(), stepH: meta.stepH } : {}) },
      temp: diurnal + (rand() - 0.5) * 1.6,
      rain: rand() < 0.28 ? +(1 + rand() * 4.5).toFixed(1) : 0,
      wind: 11 + rand() * 12,
      humidity: 52 + 18 * Math.sin(((hourOfDay - 15) / 24) * Math.PI * 2) + (rand() - 0.5) * 4,
      dir: 200 + ((i * 17) % 60),
      pressure: 1015 + 3 * Math.sin((hourOfDay / 24) * Math.PI * 2 + 1) + (rand() - 0.5) * 1.2,
      solar: Math.max(0, (580 + (rand() - 0.5) * 220) * Math.sin(((hourOfDay - 6) / 12) * Math.PI)) || 0,
      et: Math.max(0, 0.24 * Math.sin(((hourOfDay - 6) / 12) * Math.PI)) + rand() * 0.04,
    });
    const last = pts[pts.length - 1];
    last.pressureMsl = last.pressure + 3.4;
    last.uv = Math.max(0, +(last.solar / 92).toFixed(1));
    last.dewpoint = last.temp - (100 - last.humidity) / 5;
    last.deltaT = +(last.temp - last.dewpoint).toFixed(1);
    const MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    last.full = String(t.getDate()).padStart(2, '0') + ' ' + MON[t.getMonth()] + ' ' + t.getFullYear() + ' ' + wFmtHour(t).toUpperCase();
  }
  return pts;
}
function wGen6h() {
  const rand = mulberry32W(61);
  const now = new Date('2026-09-09T15:00:00');
  const pts = [];
  for (let i = 5; i >= 0; i--) {
    const t = new Date(now.getTime() - i * 3600000);
    const MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const tempV = Math.round(wDiurnal(t.getHours()) - 1);
    pts.push({
      label: wFmtHour(t).replace('am', ' am').replace('pm', ' pm'),
      full: String(t.getDate()).padStart(2, '0') + ' ' + MON[t.getMonth()] + ' ' + t.getFullYear() + ' ' + wFmtHour(t).toUpperCase(),
      temp: tempV,
      rain: rand() < 0.2 ? +(rand() * 2).toFixed(1) : 0,
      humidity: Math.round(Math.min(85, Math.max(38, 78 - (tempV - 12) * 2.1 + (rand() - 0.5) * 6))),
    });
  }
  return pts;
}
function wSparkWithPeak(vals, w, h, dec, unit) {
  const pad = 6, mn = Math.min(...vals), mx = Math.max(...vals), span = (mx - mn) || 1;
  const pts = vals.map((v, i) => ({ x: +(i / (vals.length - 1) * w).toFixed(1), y: +(pad + (h - 2 * pad) * (1 - (v - mn) / span)).toFixed(1), v }));
  const path = pts.map((p, i) => (i === 0 ? 'M' : 'L') + p.x + ' ' + p.y).join(' ');
  let peakIdx = 0;
  for (let i = 1; i < vals.length; i++) if (vals[i] > vals[peakIdx]) peakIdx = i;
  const peak = pts[peakIdx];
  const anchor = peakIdx <= 0 ? 'start' : peakIdx >= vals.length - 1 ? 'end' : 'middle';
  return { path, peakX: peak.x, peakY: peak.y, peak: { x: peak.x, y: peak.y, textY: Math.max(peak.y - 5, 8), anchor, label: peak.v.toFixed(dec) + (unit || '') } };
}
function wSparkPath(vals, w, h) {
  const mn = Math.min(...vals), mx = Math.max(...vals), span = (mx - mn) || 1;
  return vals.map((v, i) => (i === 0 ? 'M' : 'L') + (i / (vals.length - 1) * w).toFixed(1) + ' ' + (h - (v - mn) / span * h).toFixed(1)).join(' ');
}
function wSeries(seed, base, amp, n) {
  const rand = mulberry32W(seed);
  let v = base;
  const out = [];
  for (let i = 0; i < n; i++) { v += (rand() - 0.5) * amp; out.push(v); }
  return out;
}
const CMP_METRICS = [
  { key: 'temp', label: 'Temperature' },
  { key: 'rain', label: 'Rainfall' },
  { key: 'humidity', label: 'Humidity' },
  { key: 'pressure', label: 'Atm. Pressure' },
  { key: 'msl', label: 'Sea Level Pressure' },
  { key: 'wind', label: 'Wind' },
  { key: 'uv', label: 'UV Index' },
  { key: 'solar', label: 'Solar Radiation' },
];
function wBuildChartCard(key, range) {
  const effRange = range === 'custom' ? '30d' : range;
  const pts = wGenPoints(effRange);
  const EMPTY = { arrows: [], dots: [], legend: [], band: '', minBars: [], maxBars: [], avgLine: '', avgDots: [], bars: [], line: '', area: '', points: [] };
  const DEFS = {
    temp: { title: 'Temperature (°C)', icon: ICON.temp, tint: '#FDEBE0', ink: '#C2571E', type: 'minmax', legend: [{ label: 'Max (°C)', color: '#E76F51' }, { label: 'Min (°C)', color: '#3B82F6' }, { label: 'Average (°C)', color: '#64748B' }], data: wMinMaxChart(pts) },
    tempSimple: { title: 'Temperature (°C)', icon: ICON.temp, tint: '#FDEBE0', ink: '#E76F51', type: 'area', color: '#E76F51', legend: [{ label: 'Temperature (°C)', color: '#E76F51' }], data: wAreaChart(pts, 'temp', '°C', 1, '#E76F51', 'gradTemp') },
    rain: { title: 'Rainfall (mm)', icon: ICON.rain, tint: '#E0F2FE', ink: '#0284C7', type: 'bar', barColor: '#0EA5A4', legend: [{ label: 'Rainfall (mm)', color: '#0EA5A4' }], data: wRainCombo(pts) },
    humidity: { title: 'Humidity (%)', icon: ICON.humidity, tint: '#DFF3EC', ink: '#3B82F6', type: 'area', color: '#3B82F6', legend: [{ label: 'Humidity (%)', color: '#3B82F6' }], data: wAreaChart(pts, 'humidity', '%', 0, '#3B82F6', 'gradHumidity') },
    pressure: { title: 'Atm. Pressure (hPa)', icon: ICON.pressure, tint: '#E4EEFB', ink: '#64748B', type: 'area', color: '#64748B', legend: [{ label: 'Pressure (hPa)', color: '#64748B' }], data: wAreaChart(pts, 'pressure', 'hPa', 0, '#64748B', 'gradPressure') },
    msl: { title: 'Sea Level Pressure (hPa)', icon: ICON.pressure, tint: '#E4EEFB', ink: '#94A3B8', type: 'area', color: '#94A3B8', legend: [{ label: 'Sea Level Pressure (hPa)', color: '#94A3B8' }], data: wAreaChart(pts, 'pressureMsl', 'hPa', 0, '#94A3B8', 'gradMsl') },
    wind: { title: 'Wind (km/h)', icon: ICON.wind, tint: '#DFF3F9', ink: '#0E8090', type: 'windArea', color: '#14B8A6', legend: [{ label: 'Gusts (km/h)', color: 'oklch(0.62 0.16 300)' }, { label: 'Wind (km/h)', color: '#14B8A6' }], data: (() => { const c = wWindCombo(pts); return { ...c, area: c.band }; })() },
    uv: { title: 'UV Index', icon: ICON.uv, tint: '#F3E8FF', ink: '#FDBA74', type: 'area', color: '#FDBA74', legend: [{ label: 'UV Index', color: '#FDBA74' }], data: wAreaChart(pts, 'uv', '', 1, '#FDBA74', 'gradUv') },
    solar: { title: 'Solar Radiation (W/m²)', icon: ICON.solar, tint: '#FEF3C7', ink: '#D97706', type: 'bar', barColor: '#F59E0B', legend: [{ label: 'Solar Radiation (W/m²)', color: '#F59E0B' }], data: wBarChart(pts, 'solar', 'W/m²', 0, '#F59E0B') },
    et: { title: 'Evapotranspiration (mm)', icon: ICON.evapo, tint: '#CCFBF1', ink: '#10B981', type: 'bar', barColor: '#10B981', legend: [{ label: 'Evapotranspiration (mm)', color: '#10B981' }], data: wBarChart(pts, 'et', 'mm', 2, '#10B981') },
    dewpoint: { title: 'Dew Point (°C)', icon: ICON.dewpoint, tint: '#F3E8FF', ink: '#22C55E', type: 'area', color: '#22C55E', legend: [{ label: 'Dew Point (°C)', color: '#22C55E' }], data: wAreaChart(pts, 'dewpoint', '°C', 1, '#22C55E', 'gradDewpoint') },
    deltaT: { title: 'Delta T (°C)', icon: ICON.deltaT, tint: '#E4EEFB', ink: '#84CC16', type: 'area', color: '#84CC16', legend: [{ label: 'Delta T (°C)', color: '#84CC16' }], data: wAreaChart(pts, 'deltaT', '°C', 1, '#84CC16', 'gradDeltaT') },
  };
  const d = DEFS[key] || DEFS.temp;
  const KEYMAP = { temp: 'temp', tempSimple: 'temp', rain: 'rain', humidity: 'humidity', pressure: 'pressure', msl: 'pressureMsl', wind: 'wind', uv: 'uv', solar: 'solar', et: 'et', dewpoint: 'dewpoint', deltaT: 'deltaT' };
  const UNITMAP = { temp: '°C', tempSimple: '°C', rain: 'mm', humidity: '%', pressure: 'hPa', msl: 'hPa', wind: 'km/h', uv: '', solar: 'W/m²', et: 'mm', dewpoint: '°C', deltaT: '°C' };
  const sv = pts.map(p => p[KEYMAP[key] || 'temp']);
  const dec = key === 'solar' ? 0 : key === 'pressure' || key === 'msl' ? 1 : 1;
  const statUnit = UNITMAP[key] || '';
  const noSpace = statUnit === '°C' || statUnit === '%';
  const withUnit = (v) => v.toFixed(dec) + (statUnit ? (noSpace ? '' : ' ') + statUnit : '');
  const statMin = withUnit(Math.min(...sv)), statMax = withUnit(Math.max(...sv)), statAvg = withUnit(sv.reduce((a, b) => a + b, 0) / sv.length);
  const statMinIdx = sv.indexOf(Math.min(...sv)), statMaxIdx = sv.indexOf(Math.max(...sv));
  const statMinTime = pts[statMinIdx].full, statMaxTime = pts[statMaxIdx].full;
  const titleOf = (p) => {
    if (key === 'temp' || key === 'tempSimple') return p.full + '\nTemperature: ' + p.temp.toFixed(1) + ' °C';
    if (key === 'rain') return p.full + '\nRainfall: ' + p.rain.toFixed(1) + ' mm';
    if (key === 'humidity') return p.full + '\nHumidity: ' + p.humidity.toFixed(0) + ' %\nDew Point: ' + p.dewpoint.toFixed(1) + ' °C';
    if (key === 'pressure') return p.full + '\nPressure: ' + p.pressure.toFixed(1) + ' hPa';
    if (key === 'msl') return p.full + '\nSea Level Pressure: ' + p.pressureMsl.toFixed(1) + ' hPa';
    if (key === 'wind') { const gust = p.wind * 1.35 + 3; return p.full + '\nWind Speed: ' + p.wind.toFixed(0) + ' km/h\nGust: ' + gust.toFixed(0) + ' km/h\nDirection: ' + p.dir.toFixed(0) + '° ' + WX_DIRS[Math.round(p.dir / 45) % 8]; }
    if (key === 'uv') return p.full + '\nUV Index: ' + p.uv.toFixed(1);
    if (key === 'solar') return p.full + '\nSolar Radiation: ' + p.solar.toFixed(0) + ' W/m²';
    if (key === 'et') return p.full + '\nEvapotranspiration: ' + p.et.toFixed(2) + ' mm';
    if (key === 'dewpoint') return p.full + '\nDew Point: ' + p.dewpoint.toFixed(1) + ' °C';
    if (key === 'deltaT') return p.full + '\nDelta T: ' + p.deltaT.toFixed(1) + ' °C';
    return p.full;
  };
  const titles = pts.map(titleOf);
  const data = { ...d.data };
  if (data.avgDots) data.avgDots = data.avgDots.map((pt, i) => ({ ...pt, title: titles[i] }));
  if (data.bars) data.bars = data.bars.map((b, i) => ({ ...b, title: titles[i] }));
  if (data.points) data.points = data.points.map((p, i) => ({ ...p, title: titles[i] }));
  if (data.arrows) data.arrows = data.arrows.map((a, i) => ({ ...a, title: titles[i] }));
  return { ...EMPTY, minLine: '', maxLine: '', id: key, title: d.title, icon: d.icon, tint: d.tint, ink: d.ink, barColor: d.barColor || 'none', lineColor: d.color || 'none', isMinMax: d.type === 'minmax', isBar: d.type === 'bar', isArea: d.type === 'area', isWindArea: d.type === 'windArea', ...data, legend: d.legend || [], statMin, statAvg, statMax, statMinTime, statMaxTime };
}
function wSpark(values, kind) {
  const W = 100, H = 30;
  if (kind === 'bars') {
    const n = values.length, gap = 1.4, bw = (W / n) - gap;
    const vMax = Math.max(...values, 0.1);
    return { kind, values, bars: values.map((v, i) => { const h = Math.max(1, (v / vMax) * H); return { x: (i * (W / n)).toFixed(1), y: (H - h).toFixed(1), w: bw.toFixed(1), h: h.toFixed(1) }; }), pts: values.map((v, i) => ({ x: (i + 0.5) * (W / n), y: H - Math.max(1, (v / vMax) * H) })) };
  }
  const vMin = Math.min(...values), vMax = Math.max(...values), span = (vMax - vMin) || 1;
  const stepX = W / (values.length - 1 || 1);
  const pts = values.map((v, i) => ({ x: i * stepX, y: H - ((v - vMin) / span) * H }));
  const path = pts.map((p, i) => (i === 0 ? 'M' : 'L') + p.x.toFixed(1) + ',' + p.y.toFixed(1)).join(' ');
  const area = 'M0,' + H + ' ' + pts.map(p => p.x.toFixed(1) + ',' + p.y.toFixed(1)).join(' ') + ' L' + W.toFixed(1) + ',' + H + ' Z';
  return { kind, values, pts, path, area };
}
function wCompare(kind, color, text) {
  const D = { up: { path: 'M12 5l6 7h-4v7h-4v-7H6z', fill: color, stroke: 'none' }, down: { path: 'M12 19l-6-7h4V5h4v7h4z', fill: color, stroke: 'none' }, check: { path: 'M5 13l4 4L19 7', fill: 'none', stroke: color } };
  return { ...D[kind], color, text };
}
function wTodayMinMax() {
  const now = new Date('2026-09-10T12:49:00');
  let min = Infinity, max = -Infinity, minH = 0, maxH = 0;
  for (let h = 0; h <= now.getHours(); h += 0.5) {
    const v = wDiurnal(h);
    if (v < min) { min = v; minH = h; }
    if (v > max) { max = v; maxH = h; }
  }
  return { min: min.toFixed(1), max: max.toFixed(1), minTime: '12:17 AM', maxTime: '1:18 PM' };
}
function wMonthlyRain(range, totOverride, given) {
  const rand = mulberry32W(77), MO = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const cnt = ({ '24h': 1, '7d': 1, '30d': 2, '1m': 2, '3m': 4, '6m': 7 })[range] || 1;
  const all = Array.from({ length: 7 }, (_, k) => ({ t: new Date(2026, 8 - (6 - k), 1), v: +(20 + rand() * 60).toFixed(1) }));
  const rangeTot = given ? 0 : +wGenPoints(range).reduce((x, p) => x + (p.rain || 0), 0).toFixed(1);
  all[6].v = cnt === 1 ? rangeTot : +(all[6].v * .3).toFixed(1);
  if (totOverride != null) { const raw = all.slice(-cnt), sm = raw.reduce((x, m) => x + m.v, 0) || 1; raw.forEach(m => { m.v = +(m.v * totOverride / sm).toFixed(1); }); }
  const ms = given || all.slice(-cnt), vals = ms.map(m => m.v), months = ms.map(m => MO[m.t.getMonth()] + ' ' + String(m.t.getFullYear()).slice(2));
  const H = 170, W = 300, n = vals.length, vMax = Math.max(1, ...vals) * 1.25, y = v => H - (v / vMax) * H;
  const slot = W / n, bw = Math.min(60, slot * 0.5);
  const bars = vals.map((v, i) => { const cx = (i + 0.5) * slot, x = cx - bw / 2; return { x: x.toFixed(1), y: y(v).toFixed(1), w: bw.toFixed(1), h: (H - y(v)).toFixed(1), title: months[i] + ': ' + v + ' mm', valueLabel: v.toFixed(1), cxPct: (cx / W * 100).toFixed(2) + '%', labelYPct: (y(v) / H * 100 - 2).toFixed(2) + '%' }; });
  const ticks = [4, 3, 2, 1, 0].map((k, idx) => ({ label: (vMax * k / 4).toFixed(0), top: ((idx / 4) * 100).toFixed(1) + '%' }));
  const grid = [0, 1, 2, 3, 4].map(k => (H * k / 4).toFixed(1));
  const wi = vals.indexOf(Math.max(...vals)), di = vals.indexOf(Math.min(...vals)), full = m => MO[m.t.getMonth()] + ' ' + m.t.getFullYear();
  const stats = [{ label: 'Total:', value: vals.reduce((x, v) => x + v, 0).toFixed(1) + ' mm', when: '' }, { label: 'Wettest month:', value: vals[wi] > 0 ? vals[wi].toFixed(1) + ' mm' : '—', when: vals[wi] > 0 ? '· ' + full(ms[wi]) : '' }, { label: 'Driest month:', value: vals[di].toFixed(1) + ' mm', when: '· ' + full(ms[di]) }];
  return { bars, line: '', area: '', dots: [], ticks, grid, stats, xLabels: months, xAt: months.map((m, i) => ({ label: m, pct: (i + 0.5) / n * 100 })) };
}
function wCumulativeRain(pts) {
  const H = 170, W = 300, n = pts.length;
  let running = 0; const cum = pts.map(p => { running += p.rain; return running; });
  const vMax = Math.max(...cum) * 1.15 || 1;
  const y = v => H - (v / vMax) * H;
  let line = '';
  pts.forEach((p, i) => { const cx = (i / (n - 1)) * W, cy = y(cum[i]); line += (i === 0 ? 'M' : ' L') + cx.toFixed(1) + ' ' + cy.toFixed(1); });
  const area = line + ' L 300 170 L 0 170 Z';
  const ticks = [4, 3, 2, 1, 0].map((k, idx) => ({ label: (vMax * k / 4).toFixed(1), top: ((idx / 4) * 100).toFixed(1) + '%' }));
  const grid = [0, 1, 2, 3, 4].map(k => (H * k / 4).toFixed(1));
  return { bars: [], line, area, dots: [], ticks, grid, xLabels: wThin(pts.map(p => p.label), n > 8 ? 5 : n), xAt: wAxisAt(pts.map(p => p.ax || p.label), pts.map((p, i) => i / (n - 1) * W), W, n > 8 ? 5 : n) };
}
function wRainCombo(pts) {
  const H = 170, W = 300, n = pts.length;
  const vMax = Math.max(2, Math.max(...pts.map(p => p.rain)) * 1.3);
  const y = v => H - (v / vMax) * H;
  const slot = W / n, bw = slot * 0.42;
  const idxCount3 = Math.min(n, 8);
  const step3 = (n - 1) / (idxCount3 - 1) || 1;
  const labelIdx3 = new Set(Array.from({ length: idxCount3 }, (_, i) => Math.round(i * step3)));
  const bars = pts.map((p, i) => {
    const cx = (i + 0.5) * slot, x = cx - bw / 2, yy = y(p.rain);
    return { x: x.toFixed(1), y: yy.toFixed(1), w: bw.toFixed(1), h: (H - yy).toFixed(1), cx: cx.toFixed(1), cxPct: wPct(cx, W), labelY: (yy - 6).toFixed(1), labelYPct: wPct(yy - 6, H), valueLabel: labelIdx3.has(i) ? p.rain.toFixed(1) : '', title: p.label + ': ' + p.rain.toFixed(1) + ' mm' };
  });
  const ticks = [4, 3, 2, 1, 0].map((k, idx) => ({ label: (vMax * k / 4).toFixed(1), top: ((idx / 4) * 100).toFixed(1) + '%' }));
  const grid = [0, 1, 2, 3, 4].map(k => (H * k / 4).toFixed(1));
  return { bars, line: '', dots: [], ticks, grid, xLabels: wThin(pts.map(p => p.label), n > 8 ? 5 : n) };
}
function wMinMaxChart(pts) {
  const rand = mulberry32W(91);
  const H = 170, W = 300, n = pts.length;
  const rows = pts.map(p => {
    const spread = 6 + rand() * 3;
    const avg = p.temp;
    return { min: avg - spread / 2 - 2, max: avg + spread / 2, avg, label: p.label, full: p.full };
  });
  const idxCount = Math.min(n, 8);
  const step = (n - 1) / (idxCount - 1) || 1;
  const thinIdx = Array.from({ length: idxCount }, (_, i) => Math.round(i * step));
  const trows = thinIdx.map(i => rows[i]);
  const m = trows.length;
  const allMin = Math.min(...trows.map(r => r.min)), allMax = Math.max(...trows.map(r => r.max));
  const pad = (allMax - allMin) * 0.28 || 1;
  const vMin = allMin - pad, vMax = allMax + pad, span = (vMax - vMin) || 1;
  const y = v => H - ((v - vMin) / span) * H;
  const colW = W / m, barW = colW * 0.36;
  const bars = trows.map((r, i) => {
    const cx = colW * i + colW / 2, yTop = y(r.max), yBot = y(r.min);
    return { x: (cx - barW / 2).toFixed(1), y: yTop.toFixed(1), w: barW.toFixed(1), h: (yBot - yTop).toFixed(1), cx: cx.toFixed(1), cxPct: wPct(cx, W), maxLabel: r.max.toFixed(1) + '\u00b0', minLabel: r.min.toFixed(1) + '\u00b0', maxLabelY: (yTop - 8).toFixed(1), maxLabelYPct: wPct(yTop - 8, H), minLabelY: (yBot + 14).toFixed(1), minLabelYPct: wPct(yBot + 14, H), title: r.full + ': max ' + r.max.toFixed(1) + '\u00b0C, min ' + r.min.toFixed(1) + '\u00b0C' };
  });
  const avgXY = trows.map((r, i) => ({ x: colW * i + colW / 2, y: y(r.avg) }));
  const avgLine = wSmoothPath(avgXY);
  const avgDots = trows.map((r, i) => ({ x: avgXY[i].x.toFixed(1), y: avgXY[i].y.toFixed(1), xPct: wPct(avgXY[i].x, W), labelY: (avgXY[i].y - 10).toFixed(1), labelYPct: wPct(avgXY[i].y - 10, H), label: r.avg.toFixed(1) + '\u00b0', title: r.full + ': avg ' + r.avg.toFixed(1) + '\u00b0C' }));
  const ticks = [4, 3, 2, 1, 0].map((k, idx) => ({ label: Math.round(vMin + span * k / 4), top: ((idx / 4) * 100).toFixed(1) + '%' }));
  const grid = [0, 1, 2, 3, 4].map(k => (H * k / 4).toFixed(1));
  return { minBars: [], maxBars: [], bars, minLine: '', maxLine: '', avgLine, line: avgLine, area: '', avgDots, ticks, grid, xLabels: trows.map(r => r.label) };
}
function wWindStack(pts) {
  const n = pts.length, W = 300, H = 170;
  const gpts = pts.map(p => ({ ...p, gust: p.wind * 1.35 + 3 }));
  const vMax = Math.max(Math.max(...pts.map(p => p.wind)) * 1.25, Math.max(...gpts.map(p => p.gust)) * 1.1) || 1, span = vMax;
  const y = v => H - (v / span) * H;
  const X = i => +((i / (n - 1)) * W).toFixed(1);
  const pxy = pts.map((p, i) => ({ x: X(i), y: +y(p.wind).toFixed(1) }));
  const gxy = gpts.map((p, i) => ({ x: X(i), y: +y(p.gust).toFixed(1) }));
  const dirLine = wSmoothPath(pxy);
  const dirArea = dirLine + ' L' + pxy[n - 1].x + ' 170 L' + pxy[0].x + ' 170 Z';
  const gustLine = wSmoothPath(gxy);
  const idxCount = Math.min(n, 8);
  const step = (n - 1) / (idxCount - 1) || 1;
  const thinIdx = Array.from({ length: idxCount }, (_, i) => Math.round(i * step));
  const arrows = thinIdx.map(i => ({ x: pxy[i].x, y: (pxy[i].y - 16).toFixed(1), rot: pts[i].dir, title: pts[i].label + ': ' + pts[i].wind.toFixed(0) + ' km/h, gust ' + gpts[i].gust.toFixed(0) + ' km/h, ' + WX_DIRS[Math.round(pts[i].dir / 45) % 8] }));
  const speedLabels = thinIdx.map(i => ({ x: pxy[i].x, y: (pxy[i].y - 28).toFixed(1), v: pts[i].wind.toFixed(0) }));
  const gustLabels = thinIdx.map(i => ({ x: gxy[i].x, y: (gxy[i].y - 8).toFixed(1), v: gpts[i].gust.toFixed(0) }));
  const dirTicks = [4, 3, 2, 1, 0].map((k, idx) => ({ label: Math.round(vMax * k / 4), top: ((idx / 4) * 100).toFixed(1) + '%' }));
  const dirGrid = [0, 1, 2, 3, 4].map(k => (H * k / 4).toFixed(1));
  const dirXLabels = thinIdx.map(i => ({ dir: WX_DIRS[Math.round(pts[i].dir / 45) % 8], time: pts[i].label }));
  const dateRangeLabel = pts[0].full + ' \u2013 ' + pts[n - 1].full;
  return { direction: { line: dirLine, area: dirArea, gustLine, arrows, speedLabels, gustLabels, ticks: dirTicks, grid: dirGrid, xLabels: dirXLabels, dateRangeLabel } };
}
const WX_DIRS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
const WX_SPEED_BINS = [
  { label: '< 8 km/h', color: '#BAE6FD' },
  { label: '8–15 km/h', color: '#38BDF8' },
  { label: '15–22 km/h', color: '#22C55E' },
  { label: '22–29 km/h', color: '#FACC15' },
  { label: '> 29 km/h', color: '#FB923C' },
];
function wPolar(cx, cy, r, angleDeg) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.sin(a), y: cy - r * Math.cos(a) };
}
function wBuildRose(pts) {
  const cx = 90, cy = 90, maxR = 68;
  const buckets = WX_DIRS.map(() => ({ count: 0, speedSum: 0 }));
  pts.forEach(p => {
    const idx = Math.round(p.dir / 45) % 8;
    buckets[idx].count++;
    buckets[idx].speedSum += p.wind;
  });
  const maxCount = Math.max(1, ...buckets.map(b => b.count));
  const wedges = WX_DIRS.map((d, i) => {
    const b = buckets[i];
    const r = (b.count / maxCount) * maxR;
    if (r < 1) return null;
    const angle = i * 45;
    const p1 = wPolar(cx, cy, r, angle - 22);
    const p2 = wPolar(cx, cy, r, angle + 22);
    const avgSpeed = b.count ? b.speedSum / b.count : 0;
    const bin = WX_SPEED_BINS[Math.min(WX_SPEED_BINS.length - 1, Math.floor(avgSpeed / 8))];
    return { path: `M${cx},${cy} L${p1.x.toFixed(1)},${p1.y.toFixed(1)} A${r.toFixed(1)},${r.toFixed(1)} 0 0,1 ${p2.x.toFixed(1)},${p2.y.toFixed(1)} Z`, color: bin.color };
  }).filter(Boolean);
  return { rings: [maxR * 0.34, maxR * 0.67, maxR].map(r => r.toFixed(1)), wedges, legend: WX_SPEED_BINS };
}
function wWindDualArea(pts) {
  const H = 170, W = 300, n = pts.length;
  const gusts = pts.map(p => p.wind * 1.35 + 3);
  const vMax = Math.max(...gusts) * 1.15 || 1;
  const y = v => H - (v / vMax) * H;
  const X = i => +((i / (n - 1)) * W).toFixed(1);
  const windXY = pts.map((p, i) => ({ x: X(i), y: +y(p.wind).toFixed(1) }));
  const gustXY = pts.map((p, i) => ({ x: X(i), y: +y(gusts[i]).toFixed(1) }));
  const windLine = wSmoothPath(windXY), gustLine = wSmoothPath(gustXY);
  const windArea = windLine + ' L' + windXY[n - 1].x + ' 170 L' + windXY[0].x + ' 170 Z';
  const gustArea = gustLine + ' L' + gustXY[n - 1].x + ' 170 L' + gustXY[0].x + ' 170 Z';
  const lblIdxCount = Math.min(n, 8);
  const lblStep = (n - 1) / (lblIdxCount - 1) || 1;
  const lblIdx = new Set(Array.from({ length: lblIdxCount }, (_, i) => Math.round(i * lblStep)));
  const windPoints = pts.map((p, i) => ({ x: windXY[i].x, xPct: wPct(windXY[i].x, W), labelY: (windXY[i].y - 8).toFixed(1), labelYPct: wPct(windXY[i].y - 8, H), valueLabel: lblIdx.has(i) ? p.wind.toFixed(0) : '', title: p.label + ': Wind ' + p.wind.toFixed(0) + ' km/h' }));
  const gustPoints = pts.map((p, i) => ({ x: gustXY[i].x, xPct: wPct(gustXY[i].x, W), labelY: (gustXY[i].y - 8).toFixed(1), labelYPct: wPct(gustXY[i].y - 8, H), valueLabel: lblIdx.has(i) ? gusts[i].toFixed(0) : '', title: p.label + ': Gust ' + gusts[i].toFixed(0) + ' km/h' }));
  const ticks = [4, 3, 2, 1, 0].map((k, idx) => ({ label: Math.round(vMax * k / 4), top: ((idx / 4) * 100).toFixed(1) + '%' }));
  const grid = [0, 1, 2, 3, 4].map(k => (H * k / 4).toFixed(1));
  return { windLine, windArea, gustLine, gustArea, windPoints, gustPoints, ticks, grid, xLabels: wThin(pts.map(p => p.label), n > 8 ? 6 : n) };
}
function wWindCombo(pts) {
  const c = wLineChart(pts, 'wind', '', 0, '#14B8A6');
  const n = pts.length, W = 300;
  const vals = pts.map(p => p.wind);
  const gusts = pts.map(p => p.wind * 1.35 + 3);
  const vMax = Math.max(...gusts) * 1.1, vMin = 0, H = 170;
  const span = (vMax - vMin) || 1;
  const y = v => H - ((v - vMin) / span) * H;
  const X = i => ((i / (n - 1)) * W);
  let line = '', gustLine = '';
  pts.forEach((p, i) => {
    line += (i === 0 ? 'M' : ' L') + X(i).toFixed(1) + ' ' + y(p.wind).toFixed(1);
    gustLine += (i === 0 ? 'M' : ' L') + X(i).toFixed(1) + ' ' + y(gusts[i]).toFixed(1);
  });
  let back = '';
  for (let i = n - 1; i >= 0; i--) back += ' L' + X(i).toFixed(1) + ' ' + y(pts[i].wind).toFixed(1);
  const ticks = [4, 3, 2, 1, 0].map((k, idx) => ({ label: Math.round(vMax * k / 4), top: ((idx / 4) * 100).toFixed(1) + '%' }));
  const arrows = pts.map((p, i) => ({ x: X(i).toFixed(1), y: (y(p.wind) - 9).toFixed(1), rot: p.dir, title: p.label + ': ' + p.wind.toFixed(0) + ' km/h, ' + WX_DIRS[Math.round(p.dir / 45) % 8] }));
  return { ...c, line, maxLine: gustLine, ticks, arrows, band: gustLine + back + ' Z' };
}
function wPct(v, span) { return (v / span * 100).toFixed(2) + '%'; }
function wThin(labels, count) {
  if (labels.length <= count) return labels;
  const step = (labels.length - 1) / (count - 1);
  return Array.from({ length: count }, (_, i) => labels[Math.round(i * step)]);
}
function wAxisAt(labels, xs, W, count) {
  const n = labels.length; if (!n) return [];
  const k = Math.min(n, count), idx = k === 1 ? [0] : Array.from({ length: k }, (_, i) => Math.round(i * (n - 1) / (k - 1)));
  const res = [...new Set(idx)].map(i => ({ pct: xs[i] / W * 100, label: labels[i] }));
  res.all = labels.map((l, i) => ({ pct: xs[i] / W * 100, label: l }));
  return res;
}
function wAxisWin(c, w) {
  const src = (c.xAt && c.xAt.all) || c.xAt || [], a = w.a * 100, L = (w.b - w.a) * 100;
  const vis = src.filter(s => s.pct >= a - .01 && s.pct <= a + L + .01);
  const lab = s => typeof s.label === 'object' && s.label ? s.label : { top: String(s.label), sub: '' };
  const f0 = vis.length ? lab(vis[0]) : null, useHour = !!(f0 && f0.h) && vis.length * (f0.stepH || 1) <= 72;
  let items = vis.map(s => { const l = lab(s), t = l.h ? (useHour ? { top: l.h, sub: l.d } : { top: l.d, sub: '' }) : { top: l.top, sub: l.sub || '' }; return { ...t, hh: l.hh, p: (s.pct - a) / L * 100 }; });
  if (useHour && f0.hh != null) { const hrs = vis.length * (f0.stepH || 1), st = [1, 2, 3, 6, 12, 24].find(h => hrs / h <= 7) || 24, al = items.filter(it => it.hh % st === 0); if (al.length) items = al; }
  else if (f0 && f0.h) { const firstOf = items.filter((it, i) => !i || it.top !== items[i - 1].top), full = firstOf.filter((it, i) => i || (vis[0] && lab(vis[0]).hh === 0)); items = full.length ? full : firstOf; }
  items = items.filter((it, i) => !i || it.top + it.sub !== items[i - 1].top + items[i - 1].sub);
  const gap = 100 / 8, kept = [];
  for (const it of items) if (!kept.length || it.p - kept[kept.length - 1].p >= gap) kept.push(it);
  items = kept;
  let last = '';
  return items.map(it => { const sub = it.sub && it.sub !== last ? it.sub : ''; if (it.sub) last = it.sub; return { top: it.top, sub, left: it.p.toFixed(2) + '%', tx: it.p < 4 ? 'translateX(0)' : it.p > 96 ? 'translateX(-100%)' : 'translateX(-50%)' }; });
}
function wAxisFor(c, zoom) {
  let at = c.xAt;
  if (!at) {
    const L = c.xLabels || [], n = L.length, b = c.bars || [];
    at = n && b.length === n && b[0].cx != null ? L.map((l, i) => ({ label: l, pct: +b[i].cx / 3 })) : L.map((l, i) => ({ label: l, pct: n > 1 ? i / (n - 1) * 100 : 50 }));
  }
  const z = zoom || 1;
  return at.map(a => ({ label: typeof a.label === 'object' && a.label ? a.label : { top: String(a.label), sub: '' }, p: 50 + (a.pct - 50) * z })).filter(a => a.p >= -0.5 && a.p <= 100.5)
    .map(a => ({ top: a.label.top, sub: a.label.sub, left: a.p.toFixed(2) + '%', tx: a.p < 3 ? 'translateX(0)' : a.p > 97 ? 'translateX(-100%)' : 'translateX(-50%)' }));
}
function wSmoothPath(pts) {
  if (pts.length < 2) return '';
  if (pts.length === 2) return 'M' + pts[0].x + ' ' + pts[0].y + ' L' + pts[1].x + ' ' + pts[1].y;
  let d = 'M' + pts[0].x + ' ' + pts[0].y;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
    d += ' C' + c1x.toFixed(1) + ' ' + c1y.toFixed(1) + ' ' + c2x.toFixed(1) + ' ' + c2y.toFixed(1) + ' ' + p2.x.toFixed(1) + ' ' + p2.y.toFixed(1);
  }
  return d;
}
function wAreaChart(pts, key, unit, dec, color, gradId) {
  const c = wLineChart(pts, key, unit, dec, color);
  const last = c.points[c.points.length - 1], first = c.points[0];
  return { ...c, area: c.line + ' L' + last.x + ' 170 L' + first.x + ' 170 Z', gradId: gradId || key };
}
function wLineChart(pts, key, unit, dec, lineColor) {
  const H = 170, W = 300, n = pts.length;
  const vals = pts.map(p => p[key]);
  const rawMin = Math.min(...vals), rawMax = Math.max(...vals), pad = (rawMax - rawMin) * 0.14 || Math.abs(rawMax) * 0.1 || 1;
  const vMax = rawMax + pad, vMin = rawMin >= 0 ? Math.max(0, rawMin - pad) : rawMin - pad, span = (vMax - vMin) || 1;
  const y = v => H - ((v - vMin) / span) * H;
  const pxy = pts.map((p, i) => ({ x: +((i / (n - 1)) * W).toFixed(1), y: +y(p[key]).toFixed(1) }));
  const line = wSmoothPath(pxy);
  const lblIdxCount = Math.min(n, 8);
  const lblStep = (n - 1) / (lblIdxCount - 1) || 1;
  const lblIdx = new Set(Array.from({ length: lblIdxCount }, (_, i) => Math.round(i * lblStep)));
  const points = pts.map((p, i) => ({ x: pxy[i].x, y: pxy[i].y, xPct: wPct(pxy[i].x, W), labelY: (pxy[i].y - 8).toFixed(1), labelYPct: wPct(pxy[i].y - 8, H), valueLabel: lblIdx.has(i) ? p[key].toFixed(dec) : '', title: p.label + ': ' + p[key].toFixed(dec) + unit }));
  const ticks = [4, 3, 2, 1, 0].map((k, idx) => ({ label: (vMin + span * k / 4).toFixed(dec) + unit, top: ((idx / 4) * 100).toFixed(1) + '%' }));
  const grid = [0, 1, 2, 3, 4].map(k => (H * k / 4).toFixed(1));
  return { bars: [], line, points, ticks, grid, xLabels: wThin(pts.map(p => p.label), n > 8 ? 5 : n), xAt: wAxisAt(pts.map(p => p.ax || p.label), pxy.map(p => p.x), W, n > 8 ? 5 : n) };
}
function wBarChart(pts, key, unit, dec, barColor) {
  const H = 170, W = 300, n = pts.length;
  const vMax = Math.max(2, Math.max(...pts.map(p => p[key])) * 1.3);
  const y = v => H - (v / vMax) * H;
  const slot = W / n, bw = slot * 0.42;
  const idxCount2 = Math.min(n, 8);
  const step2 = (n - 1) / (idxCount2 - 1) || 1;
  const labelIdx2 = new Set(Array.from({ length: idxCount2 }, (_, i) => Math.round(i * step2)));
  const bars = pts.map((p, i) => {
    const cx = (i + 0.5) * slot, x = cx - bw / 2, yy = y(p[key]);
    return { x: x.toFixed(1), y: yy.toFixed(1), w: bw.toFixed(1), h: (H - yy).toFixed(1), cx: cx.toFixed(1), cxPct: wPct(cx, W), labelY: (yy - 6).toFixed(1), labelYPct: wPct(yy - 6, H), valueLabel: labelIdx2.has(i) && n <= 48 && p[key] > 0 ? p[key].toFixed(dec) : '', vl: p[key] > 0 ? p[key].toFixed(dec) : '', title: p.label + ': ' + p[key].toFixed(dec) + unit };
  });
  const ticks = [4, 3, 2, 1, 0].map((k, idx) => ({ label: (vMax * k / 4).toFixed(dec) + unit, top: ((idx / 4) * 100).toFixed(1) + '%' }));
  const grid = [0, 1, 2, 3, 4].map(k => (H * k / 4).toFixed(1));
  return { bars, line: '', ticks, grid, xLabels: wThin(pts.map(p => p.label), n > 8 ? 5 : n), xAt: wAxisAt(pts.map(p => p.ax || p.label), bars.map(b => +b.cx), W, n > 8 ? 6 : n) };
}

const TZ_MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const TZ_DAY = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const TZ_END = new Date(2026, 8, 9, 15, 30).getTime();
const TZ_ET = { 0: 1.9, 1: 2.8, 2: 2.6, 3: 3.1, 4: 3.0, 5: 2.9, 6: 2.7, 7: 3.2, 8: 2.8 };
const TZ_HOURS = { '24h': 24, '48h': 48, '72h': 72, '7d': 168, '1w': 168, '1m': 720, '3m': 2160, '6m': 4380 };
const TZ_DAYS = 190;
let TZ_PRE = null;
const TZ_RAIN = { 0: 0.4, 1: 0.2, 11: 0.8, 12: 0.6, 30: 1.1, 31: 0.7, 40: 0.4, 60: 2.4, 61: 1.8, 62: 1.1, 110: 1.6, 111: 2.2, 112: 0.9, 200: 1.3, 201: 0.8, 280: 1.5, 281: 1.1 };
const WX_BG = {
  'Rainfall': 'M12 2.5s-6.5 7.2-6.5 11.8a6.5 6.5 0 0 0 13 0C18.5 9.7 12 2.5 12 2.5z',
  'Humidity': 'M12 2.5s-6.5 7.2-6.5 11.8a6.5 6.5 0 0 0 13 0C18.5 9.7 12 2.5 12 2.5zM9.6 17.2l4.8-4.8M9.8 12.6h.01M14.2 17h.01',
  'Pressure': 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 12l3.6-3.6M6.5 12H8M16 12h1.5M12 6.5V8M8.1 8.1l1 1M12 12h.01',
  'Wind': 'M3 8h10a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7',
  'Wind Gust': 'M3 8h10a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7',
  'Wind Speed & Direction': 'M3 8h10a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7',
};
const TZ_METRICS = {
  temp: { label: 'Temperature', title: 'Temperature Trend', unit: '°C', dec: 1, color: '#E76F51', legend: 'Temperature (°C)' },
  humidity: { label: 'Humidity', title: 'Humidity Trend', unit: '%', dec: 0, color: '#3B82F6', legend: 'Relative Humidity (%)' },
  deltaT: { label: 'Delta T', title: 'Delta T Trend', unit: '°C', dec: 1, color: '#84CC16', legend: 'Delta T (°C)', zero: true },
  dewpoint: { label: 'Dew Point', title: 'Dew Point Trend', unit: '°C', dec: 1, color: '#22C55E', legend: 'Dew Point (°C)' },
  rain: { label: 'Rainfall', title: 'Rainfall Trend', unit: 'mm', dec: 1, color: '#0EA5A4', legend: 'Rainfall (mm)', bar: true, hourly: true },
  solar: { label: 'Solar Radiation', title: 'Solar Radiation (W/m²)', unit: 'W/m²', dec: 0, color: '#F59E0B', legend: 'Solar Radiation (W/m²)', zero: true },
  solarDaily: { label: 'Solar Energy (Daily)', title: 'Solar Energy (Daily Total) (Wh/m²)', unit: 'Wh/m²', dec: 0, color: '#F97316', legend: 'Daily Solar Energy (Wh/m²)', bar: true, daily: 'solar' },
  et: { label: 'Evapotranspiration', title: 'Evapotranspiration (mm)', unit: 'mm', dec: 1, color: '#10B981', legend: 'Evapotranspiration (mm/day)', bar: true, daily: 'et' },
  wind: { label: 'Wind Speed & Direction', title: 'Wind Trend', unit: 'km/h', dec: 1, color: '#14B8A6', legend: 'Wind Speed (km/h)', zero: true, wind: true },
  pressure: { label: 'Atm. Pressure', title: 'Pressure Trend', unit: 'hPa', dec: 1, color: '#64748B', legend: 'Atmospheric Pressure (hPa)', pair: 'msl', pairColor: '#94A3B8', pairLegend: 'MSL Pressure (hPa)' },
  uv: { label: 'UV Index', title: 'UV Index Trend', unit: '', dec: 1, color: '#FDBA74', legend: 'UV Index', zero: true },
};
let TZ_BASE = null;
function tzBase() {
  if (TZ_BASE) return TZ_BASE;
  const r = mulberry32W(90210), N = TZ_DAYS * 48 + 1, out = [];
  let wn = 0, pn = 0, dn = 225;
  for (let i = 0; i < N; i++) {
    const back = N - 1 - i, t = TZ_END - back * 1800e3, d = new Date(t), hod = d.getHours() + d.getMinutes() / 60, day = Math.floor(back / 48);
    const rain = TZ_RAIN[back] || (back > 300 && r() < 0.012 ? +(r() * 2.4 + 0.2).toFixed(1) : 0);
    const season = -4.5 * Math.sin(Math.PI * Math.min(day, 180) / 180);
    const cloud = 0.78 + 0.22 * Math.sin(day * 1.7);
    const temp = 14.8 + 5.2 * Math.sin((hod - 9) / 24 * 2 * Math.PI) + (day < 8 ? [0.8, -1.2, 0.3, 1.5, -0.5, 0.2, 0.9, 0][day] : 1.6 * Math.sin(day * 1.37) + 0.8 * Math.sin(day * 0.41)) + season + (r() - 0.5) * 0.6 - (rain ? 1.2 : 0);
    const humidity = Math.max(25, Math.min(98, 62 - 3.1 * (temp - 14.8) + (rain ? 14 : 0) + (r() - 0.5) * 4));
    const dewpoint = temp - (100 - humidity) / 5;
    const sol = hod > 6.5 && hod < 18.5 ? (880 + season * 45) * Math.sin(Math.PI * (hod - 6.5) / 12) * cloud * (rain ? 0.35 : 1) * (0.93 + r() * 0.07) : 0;
    wn = wn * 0.7 + (r() - 0.5) * 3;
    pn = pn * 0.95 + (r() - 0.5) * 0.4;
    dn = 225 + (dn - 225) * 0.92 + (r() - 0.5) * 28;
    const windV = Math.max(1, 11 + 6 * Math.sin((hod - 14) / 24 * 2 * Math.PI) + wn);
    out.push({ t, temp, humidity, dewpoint, deltaT: Math.max(0.2, (temp - dewpoint) * 0.42), solar: Math.max(0, sol), uv: Math.max(0, sol / 92),
      wind: windV, gust: windV * 1.3 + 2 + r() * 4, dir: (dn + 360) % 360, pressure: 1015.5 + 2.4 * Math.sin(back / 60) + pn, msl: 1019.2 + 2.4 * Math.sin(back / 60) + pn * 1.05 + 0.4 * Math.sin(back / 140), rain });
  }
  TZ_BASE = out;
  const pr = new Float64Array(N), ps = new Float64Array(N);
  let a = 0, b = 0; for (let i = 0; i < N; i++) { a += out[i].rain; b += out[i].solar * 0.5; pr[i] = a; ps[i] = b; }
  TZ_PRE = { rain: pr, solar: ps };
  return out;
}
function tzIdx(t) { const b = tzBase(); return Math.max(-1, Math.min(b.length - 1, Math.floor((t - b[0].t) / 1800e3 + 1e-6))); }
function tzSum(kind, t0, t1) { tzBase(); const P = TZ_PRE[kind], i1 = tzIdx(t1), i0 = tzIdx(t0); return (i1 >= 0 ? P[i1] : 0) - (i0 >= 0 ? P[i0] : 0); }
function tzTime(d, long) {
  const h = d.getHours(), m = d.getMinutes(), hh = h % 12 || 12, ap = h < 12 ? 'am' : 'pm';
  return long ? hh + ':' + String(m).padStart(2, '0') + ' ' + ap.toUpperCase() : (m ? hh + ':' + String(m).padStart(2, '0') : hh) + ap;
}
function tzDate(d) { return d.getDate() + ' ' + TZ_MON[d.getMonth()]; }
function tzAxDate(d) { return d.getDate() + ' ' + TZ_MON[d.getMonth()] + ' ' + String(d.getFullYear()).slice(2); }
function tzFull(d) { return d.getDate() + ' ' + TZ_MON[d.getMonth()] + ' ' + d.getFullYear() + ', ' + tzTime(d, true); }
function axTime(t0, t1, maxN) {
  const span = t1 - t0, H = 36e5; if (!(span > 0)) return [];
  const st = [.25, .5, 1, 2, 3, 6, 12, 24, 48, 72, 168, 336, 720].find(h => span / (h * H) <= maxN - 1) || 720;
  const ts = [], d = new Date(t0); d.setHours(0, 0, 0, 0);
  if (st < 24) { for (let c = d.getTime() + Math.ceil((t0 - d.getTime()) / (st * H) - 1e-9) * st * H; c <= t1 + 1; c += st * H) ts.push(c); }
  else { if (d.getTime() < t0 - 1) d.setDate(d.getDate() + 1); for (; d.getTime() <= t1 + 1; d.setDate(d.getDate() + st / 24)) ts.push(d.getTime()); }
  let last = '';
  return ts.map(c => { const dt = new Date(c), q = (c - t0) / span, day = tzDate(dt), o = { q, left: (q * 100).toFixed(2) + '%', shift: q < .04 ? '0' : q > .96 ? '-100%' : '-50%', top: st < 24 ? tzTime(dt) : day, sub: st < 24 && day !== last ? day : '' }; last = day; return o; });
}
function tzNice(x) { const p = Math.pow(10, Math.floor(Math.log10(x))), n = x / p; return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * p; }
function tzSumRain(t0, t1) { return tzSum('rain', t0, t1); }
const TZ_CACHE = new Map();
function wxOrder(list) {
  const isW = c => /^Wind/.test(c.label), isLate = c => /^(Dew Point|Delta T)/.test(c.label);
  const rest = list.filter(c => !isW(c) && !isLate(c)), hi = rest.findIndex(c => /^Humidity/.test(c.label));
  rest.splice(hi + 1, 0, ...list.filter(isW));
  return rest.concat(list.filter(c => /^Dew Point/.test(c.label)), list.filter(c => /^Delta T/.test(c.label)));
}
function tzBuild(key, range, z) {
  const M = TZ_METRICS[key] || TZ_METRICS.temp, base = tzBase();
  let w0, w1 = TZ_END;
  if (range === 'custom' && z.cf) { w0 = Math.max(base[0].t, z.cf); w1 = Math.min(TZ_END, z.ct); if (w1 - w0 < 6 * 3600e3) w0 = w1 - 6 * 3600e3; }
  else w0 = TZ_END - (TZ_HOURS[range] || 24) * 3600e3;
  const pts = base.slice(Math.max(0, tzIdx(w0)), tzIdx(w1) + 1);
  const t0 = pts[0].t, t1 = pts[pts.length - 1].t, T = t1 - t0;
  const va = t0 + z.a * T, vb = t0 + z.b * T, span = vb - va, spanH = span / 3600e3;
  const X = t => (t - va) / span * 1000;
  let series;
  if (M.daily) {
    series = [];
    const today0 = new Date(TZ_END); today0.setHours(0, 0, 0, 0);
    const d0 = new Date(t0); d0.setHours(0, 0, 0, 0);
    for (const d = new Date(d0); d.getTime() < t1; d.setDate(d.getDate() + 1)) {
      const ds = d.getTime(), de = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1).getTime(), st = Math.max(ds, t0), en = Math.min(de, t1);
      const back = Math.round((today0.getTime() - ds) / 864e5);
      const v = M.daily === 'et' ? (TZ_ET[back] != null ? TZ_ET[back] : +(2.9 - 1.3 * Math.sin(Math.PI * Math.min(back, 180) / 180) + 0.3 * Math.sin(back * 0.9)).toFixed(1)) : tzSum('solar', ds, Math.min(de, TZ_END));
      series.push({ t: (ds + de) / 2, ts: ds, te: de, v, day: true });
    }
  } else if (M.bar) {
    const bh = [1, 3, 6, 12, 24, 48, 168].find(h => spanH / h <= 16) || 168;
    series = [];
    for (let end = t1; end > t0; end -= bh * 3600e3) {
      const st = Math.max(t0, end - bh * 3600e3);
      if (end > va - bh * 3600e3 && st < vb + bh * 3600e3) series.unshift({ t: (st + end) / 2, ts: st, te: end, v: tzSum('rain', st, end) });
    }
  } else series = pts.map(p => ({ t: p.t, v: p[key], g: M.pair ? p[M.pair] : p.gust, dir: p.dir }));
  let i0 = M.daily ? series.findIndex(s => s.te > va) : series.findIndex(s => s.t >= va), i1 = series.length - 1;
  while (i1 > 0 && (M.daily ? series[i1].ts >= vb : series[i1].t > vb)) i1--;
  if (i0 < 0) i0 = 0;
  let vis = series.slice(i0, i1 + 1);
  if (M.daily) vis = vis.filter(s => s.t >= va && s.t <= vb);
  let drawn = M.bar ? vis : series.slice(Math.max(0, i0 - 1), Math.min(series.length, i1 + 2));
  const resKind = M.bar || M.daily ? '' : spanH <= 48 ? 'raw' : spanH <= 336 ? 'hour' : 'day', useMax = key === 'solar' || key === 'uv';
  if (resKind === 'hour' || resKind === 'day') {
    const kf = resKind === 'hour' ? (t => Math.floor(t / 36e5)) : (t => { const q = new Date(t); return q.getFullYear() * 400 + q.getMonth() * 32 + q.getDate(); }), ds = [];
    let g = [], gk = null;
    const flush = () => { if (!g.length) return; const t0 = resKind === 'hour' ? gk * 36e5 + 18e5 : (() => { const q = new Date(g[0].t); q.setHours(12, 0, 0, 0); return q.getTime(); })(); ds.push({ t: t0, v: useMax ? Math.max(...g.map(s => s.v)) : g.reduce((a, s) => a + s.v, 0) / g.length, g: M.pair ? g.reduce((a, s) => a + s.g, 0) / g.length : Math.max(...g.map(s => s.g || 0)), dir: g[0].dir }); };
    for (const s of drawn) { const k = kf(s.t); if (k !== gk) { flush(); g = []; gk = k; } g.push(s); }
    flush(); drawn = ds;
  }
  const vals = vis.map(s => s.v);
  let mn = Infinity, mx = -Infinity; for (const v of vals) { if (v < mn) mn = v; if (v > mx) mx = v; }
  if (M.wind || M.pair) for (const s of vis) { if (s.g > mx) mx = s.g; if (M.pair && s.g < mn) mn = s.g; }
  if (M.zero || M.bar) mn = 0;
  if (mx - mn < 1e-6) mx = mn + (M.bar ? 1 : 1);
  const step = tzNice((mx - mn) / 4), lo = Math.floor(mn / step) * step, hi = Math.ceil(mx / step) * step + (M.bar ? step * 0.25 : 0);
  const Y = v => 252 - (v - lo) / (hi - lo) * 238;
  const yTicks = [], grid = [];
  const tdec = step < 1 ? (step < 0.1 ? 2 : 1) : 0;
  for (let v = lo; v <= hi + 1e-9; v += step) { const y = Y(v); if (y < 0) continue; grid.push(y.toFixed(1)); yTicks.push({ top: y.toFixed(1) + 'px', label: v.toFixed(tdec) }); }
  const out = { color: M.color, legend: M.legend, title: M.title, yTicks, grid, isArea: !M.bar, bars: [], line: '', area: '', line2: '', line2Color: '#DC2626', line2Dash: '5 4', area2: '', area2Opacity: '0', arrows: [], legendExtra: [], canZoom: !M.daily || M.daily !== 'et' };
  if (M.bar) {
    const bw = (vis.length ? (vis[0].te - vis[0].ts) / span * 100 : 1) * (M.daily ? 0.42 : 0.5);
    const showLbl = vis.length <= 16;
    out.bars = vis.map(s => { const x = X(s.t) / 10, top = Y(s.v); return { left: (x - bw / 2).toFixed(2) + '%', width: bw.toFixed(2) + '%', center: x.toFixed(2) + '%', top: top.toFixed(1) + 'px', height: Math.max(0, 252 - top).toFixed(1) + 'px', bg: s.v > 0 ? M.color : 'transparent', labelTop: (top - 17).toFixed(1) + 'px', label: showLbl ? s.v.toFixed(M.dec) : '' }; });
  } else {
    const line = drawn.map((s, i) => (i ? 'L' : 'M') + X(s.t).toFixed(1) + ' ' + Y(s.v).toFixed(1)).join(' ');
    out.line = line;
    out.area = line + ' L' + X(drawn[drawn.length - 1].t).toFixed(1) + ' 260 L' + X(drawn[0].t).toFixed(1) + ' 260 Z';
    if (M.wind) {
      out.line2 = drawn.map((s, i) => (i ? 'L' : 'M') + X(s.t).toFixed(1) + ' ' + Y(s.g).toFixed(1)).join(' ');
      const st = Math.max(1, Math.ceil(vis.length / 14));
      out.arrows = vis.filter((s, i) => i % st === Math.floor(st / 2)).map(s => ({ left: (X(s.t) / 10).toFixed(2) + '%', top: Math.max(10, Y(s.g) - 14).toFixed(1) + 'px', rot: 'translate(-50%,-50%) rotate(' + ((s.dir + 180) % 360).toFixed(0) + 'deg)' }));
      out.legendExtra = [{ label: 'Wind Gust (km/h)', color: '#DC2626' }, { label: 'Wind Direction', color: '#7C3AED' }];
    }
    if (M.pair) {
      out.line2 = drawn.map((s, i) => (i ? 'L' : 'M') + X(s.t).toFixed(1) + ' ' + Y(s.g).toFixed(1)).join(' ');
      out.area2 = out.line2 + ' L' + X(drawn[drawn.length - 1].t).toFixed(1) + ' 260 L' + X(drawn[0].t).toFixed(1) + ' 260 Z';
      out.line2Color = M.pairColor; out.line2Dash = 'none'; out.area2Opacity = '0.12';
      out.legendExtra = [{ label: M.pairLegend, color: M.pairColor }];
    }
  }
  const zoomed = z.b - z.a < 0.999;
  const iv = [0.5, 1, 2, 3, 6, 12, 24, 48, 168, 336, 720].find(h => spanH / h <= 8) || 720;
  const d = new Date(va); d.setSeconds(0, 0);
  if (iv >= 24) { d.setHours(0, 0, 0, 0); if (d.getTime() < va) d.setDate(d.getDate() + 1); }
  else { d.setMinutes(d.getMinutes() < 30 || iv >= 1 ? 0 : 30); while (d.getTime() < va || ((d.getHours() * 60 + d.getMinutes()) % (iv * 60))) d.setTime(d.getTime() + 1800e3); }
  const xLabels = [];
  for (; d.getTime() <= vb + 1; d.setTime(d.getTime() + iv * 3600e3)) {
    const pct = X(d.getTime()) / 10, mid = d.getHours() === 0 && d.getMinutes() === 0;
    if (pct < 3 || pct > 95) continue;
    xLabels.push({ left: pct.toFixed(2) + '%', tx: pct < 4 ? 'translateX(0)' : pct > 96 ? 'translateX(-100%)' : 'translateX(-50%)',
      top: iv >= 24 ? tzAxDate(d) : tzTime(d, zoomed), sub: iv >= 24 ? '' : tzAxDate(d) });
  }
  out.xLabels = xLabels;
  if (M.bar && vis.length) {
    const st = Math.max(1, Math.ceil(vis.length / 8));
    out.xLabels = vis.filter((s, i) => i % st === 0).map(s => {
      const pct = X(s.t) / 10, ds = new Date(s.ts), long = s.te - s.ts >= 864e5;
      return { left: pct.toFixed(2) + '%', tx: pct < 4 ? 'translateX(0)' : pct > 96 ? 'translateX(-100%)' : 'translateX(-50%)', top: M.daily || long ? tzAxDate(ds) : tzTime(ds, zoomed), sub: M.daily || long ? '' : tzAxDate(ds) };
    });
  }
  const fmt = v => v.toFixed(M.dec) + (M.unit ? (M.unit === '%' ? '%' : ' ' + M.unit) : '');
  const DIR16 = ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];
  const dirName = d => DIR16[Math.round(d / 22.5) % 16];
  const hourRange = s => s.te - s.ts >= 864e5 ? tzDate(new Date(s.ts)) + ' – ' + tzDate(new Date(s.te)) : tzDate(new Date(s.te)) + ', ' + tzTime(new Date(s.ts), true) + ' – ' + tzTime(new Date(s.te), true);
  const whenOf = s => s.day ? TZ_DAY[new Date(s.ts).getDay()] + ' ' + tzDate(new Date(s.ts)) : M.bar ? tzDate(new Date(s.te)) + ', ' + tzTime(new Date(s.ts), true) + ' – ' + tzTime(new Date(s.te), true) : tzFull(new Date(s.t));
  let statList = vis;
  if (M.hourly) { statList = []; for (let end = Math.min(t1, vb + 3600e3); end > Math.max(t0, va); end -= 3600e3) { const st = end - 3600e3; if (end > va && st < vb) statList.unshift({ ts: st, te: end, v: tzSum('rain', st, end) }); } }
  if (M.daily) statList = vis.filter(s => s.te <= TZ_END);
  if (!statList.length) statList = vis;
  let mi = 0, ma = 0; statList.forEach((s, i) => { if (s.v < statList[mi].v) mi = i; if (s.v > statList[ma].v) ma = i; });
  const SL = statList;
  out.minVal = SL.length ? fmt(SL[mi].v) + (M.hourly ? ' /hr' : M.daily ? ' /day' : '') : '–'; out.minWhen = SL.length ? (M.daily ? whenOf(SL[mi]) : M.bar ? hourRange(SL[mi]) : tzFull(new Date(SL[mi].t))) : '';
  out.maxVal = SL.length ? fmt(SL[ma].v) + (M.hourly ? ' /hr' : M.daily ? ' /day' : '') : '–'; out.maxWhen = SL.length ? (M.daily ? whenOf(SL[ma]) : M.bar ? hourRange(SL[ma]) : tzFull(new Date(SL[ma].t))) : '';
  out.statLabel = ''; out.stat2 = null;
  if ((M.wind || M.pair) && SL.length && SL[0].g != null) {
    let gi = 0, ga = 0; SL.forEach((s, i) => { if (s.g < SL[gi].g) gi = i; if (s.g > SL[ga].g) ga = i; });
    out.statLabel = M.wind ? 'Wind speed' : 'Atmospheric';
    out.stat2 = { label: M.wind ? 'Wind gust' : 'MSL', minVal: fmt(SL[gi].g), minWhen: tzFull(new Date(SL[gi].t)), maxVal: fmt(SL[ga].g), maxWhen: tzFull(new Date(SL[ga].t)) };
  }
  out.hover = null;
  if (z.hover != null && vis.length) {
    const th = va + z.hover * span;
    let k = 0; vis.forEach((s, i) => { if (Math.abs(s.t - th) < Math.abs(vis[k].t - th)) k = i; });
    const s = vis[k], x = X(s.t), pct = x / 10, py = Y(s.v);
    out.hover = { x: x.toFixed(1), left: pct.toFixed(2) + '%', top: py.toFixed(1) + 'px', tipTop: Math.max(4, py - 64).toFixed(1) + 'px',
      tx: pct < 18 ? 'translateX(8px)' : pct > 82 ? 'translateX(calc(-100% - 8px))' : 'translateX(-50%)', value: M.wind ? fmt(s.v) + ' · Gust ' + s.g.toFixed(1) + ' · ' + dirName(s.dir) : M.pair ? 'Atm ' + fmt(s.v) + ' · MSL ' + fmt(s.g) : fmt(s.v), when: whenOf(s) };
  }
  out.band = key === 'deltaT' ? { top: Math.max(0, Y(8)).toFixed(1) + 'px', height: Math.max(0, Y(2) - Math.max(0, Y(8))).toFixed(1) + 'px' } : null;
  out.raw = vis; out.rawStat = statList;
  out.showLegend = out.legendExtra.length > 0;
  out.tabTitle = M.wind ? 'Wind (km/h)' : M.pair ? 'Atmospheric & MSL Pressure (hPa)' : M.daily ? M.title : M.legend;
  out.isZoomed = zoomed;
  out.resLabel = M.bar ? ({ 1: 'Hourly totals', 24: 'Daily totals', 168: 'Weekly totals' }[Math.round((vis[0] ? vis[0].te - vis[0].ts : 36e5) / 36e5)] || Math.round((vis[0] ? vis[0].te - vis[0].ts : 36e5) / 36e5) + '-hour totals') : M.daily ? 'Daily values' : { raw: 'Raw · 30-min readings', hour: useMax ? 'Hourly max' : 'Hourly average', day: useMax ? 'Daily max' : 'Daily average' }[resKind];
  out.zoomLabel = out.resLabel;
  return out;
}
const TZ_Z = m => ({ metric: m, range: '1w', a: 0, b: 1, hover: null });
const TZ_DEF = { PR: TZ_Z('pressure'), L: { ...TZ_Z('temp'), range: '24h' }, R: { ...TZ_Z('rain'), range: '24h' }, T: TZ_Z('temp'), H: TZ_Z('humidity'), D: TZ_Z('deltaT'), P: TZ_Z('dewpoint'), W: TZ_Z('wind'), RF: TZ_Z('rain'), S1: TZ_Z('solar'), S2: TZ_Z('solarDaily'), E: TZ_Z('et') };
function tzToday() {
  const t0 = new Date(TZ_END); t0.setHours(0, 0, 0, 0);
  const d = tzBase().filter(p => p.t >= t0.getTime());
  const lo = d.reduce((a, b) => (b.temp < a.temp ? b : a)), hi = d.reduce((a, b) => (b.temp > a.temp ? b : a));
  return { min: lo.temp.toFixed(1), minTime: tzTime(new Date(lo.t), true), max: hi.temp.toFixed(1), maxTime: tzTime(new Date(hi.t), true), now: tzBase()[tzBase().length - 1].temp.toFixed(1) };
}
function tzSprayWindows() {
  const d = tzBase().slice(-49), out = []; let st = null, prev = null;
  d.forEach(p => { const ok = p.deltaT >= 2 && p.deltaT <= 8; if (ok && st == null) st = p.t; if (!ok && st != null) { out.push([st, prev]); st = null; } prev = p.t; });
  if (st != null) out.push([st, prev]);
  return out.filter(w => w[1] - w[0] >= 3600e3).map(w => ({ label: tzTime(new Date(w[0]), true) + ' – ' + (w[1] === TZ_END ? 'now' : tzTime(new Date(w[1]), true)), hrs: (w[1] - w[0]) / 3600e3 }));
}

const TZ_STOP = e => e.stopPropagation();
const TZ_INFO = {
  'Delta T': { reference: null, thresholds: null,
    intro: 'According to the joint frameworks provided by the Grains Research and Development Corporation (GRDC), the Bureau of Meteorology (BOM), and the Australian Pesticides and Veterinary Medicines Authority (APVMA), the official Delta-T status factors are defined as follows:',
    links: [{ label: 'GRDC', url: 'https://grdc.com.au/' }, { label: 'BOM', url: 'https://www.bom.gov.au/' }, { label: 'APVMA', url: 'https://apvma.gov.au/' }],
    table: { cols: '58px 1fr 1.7fr', head: ['Delta T (°C)', 'Status', 'Short Meaning'], rows: [
      { range: '< 2', status: 'Too Low / High Risk', meaning: 'Air is very humid; droplets remain airborne longer, increasing drift risk.' },
      { range: '2 – 8', status: 'Ideal', meaning: 'Best balance of droplet survival and deposition for most spraying operations.' },
      { range: '> 8 – 10', status: 'Acceptable / Use Caution', meaning: 'Evaporation increases; monitor conditions and spray quality carefully.' },
      { range: '> 10 – 12', status: 'Marginal', meaning: 'Rapid droplet evaporation; only consider spraying with very coarse droplets and appropriate controls.' },
      { range: '> 12', status: 'Not Recommended', meaning: 'Excessive evaporation significantly reduces droplet survival and increases drift risk.' } ] } },
  'UV Index': { reference: null, thresholds: null,
    intro: 'For Australia, the standard UV Index categories used by the Bureau of Meteorology (BoM) and based on the international World Health Organization (WHO) UV Index are:',
    links: [{ label: 'BoM UV', url: 'https://www.bom.gov.au/uv/' }, { label: 'WHO UV Index', url: 'https://www.who.int/news-room/questions-and-answers/item/radiation-the-ultraviolet-(uv)-index' }],
    table: { cols: '1fr 1.3fr', head: ['Range', 'Status'], rows: [
      { range: '0 – 2', status: 'Low', dot: '#22C55E' }, { range: '3 – 5', status: 'Moderate', dot: '#EAB308' }, { range: '6 – 7', status: 'High', dot: '#F97316' },
      { range: '8 – 10', status: 'Very High', dot: '#E11D48' }, { range: '11+', status: 'Extreme', dot: '#7C3AED' } ] } },
};
Object.values(TZ_INFO).forEach(i => i.links.forEach(l => { l.stop = TZ_STOP; }));
const tzInfo = c => TZ_INFO[c.label] && c.info ? { ...c, info: { ...c.info, ...TZ_INFO[c.label] } } : c;
const GAS_ICON = 'M4 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M14 6.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M14 17.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M9.6 10.6l4.6-2.6M9.6 13.4l4.6 2.6';
const LEAF_ICON = 'M5 19C5 10 10 5 20 4c-1 10-6 15-15 15zM5 19l8-8';
const LEAF_END = new Date('2026-10-02T18:05:00');
const leafRnd = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const LEAF_H = (() => {
  const N = 24 * 183 + 1, times = [], temp = [], wet = [];
  for (let i = 0; i < N; i++) {
    const t = new Date(LEAF_END.getTime() - (N - 1 - i) * 36e5), h = t.getHours(), dk = t.getMonth() * 31 + t.getDate();
    const ago = (N - 1 - i) / 24;
    temp.push(+(20.5 - ago * .045 + (leafRnd(dk) - .5) * 4 + 8 * Math.cos((h - 15) / 24 * 2 * Math.PI) + (leafRnd(i) - .5) * .8).toFixed(2));
    const dew = dk === 9 * 31 + 2 || leafRnd(dk + 7) < .55, rain = leafRnd(dk + 99) < .14;
    let w = 49 + 20 * Math.cos((h - 5) / 24 * 2 * Math.PI) + (leafRnd(dk + 7) - .5) * 12 + (leafRnd(i + 5) - .5) * 8;
    wet.push(+Math.max(21, Math.min(78, w)).toFixed(1));
    times.push(t);
  }
  temp[N - 1] = 26.19; wet[N - 1] = 0;
  return { times, temp, wet };
})();
const LEVEL_ICON = 'M3 15c3 0 3 2 6 2s3-2 6-2 3 2 6 2M8 9l4-4 4 4M12 5v6';
const LV_END = new Date('2026-10-08T14:00:00'), LV_TANK = 1.94;
const LV_H = (() => {
  const N = 24 * 183 + 1, times = [], pct = [];
  const K = [[0, 57.2], [1, 54.6], [5, 42.6], [20, 54.8], [84, 75], [132, 71], [140, 69.8], [158, 71.3]];
  for (let i = 0; i < N; i++) {
    const ago = N - 1 - i, t = new Date(LV_END.getTime() - ago * 36e5);
    let v;
    if (ago <= 158) { let k = 0; while (K[k + 1][0] < ago) k++; const [a0, v0] = K[k], [a1, v1] = K[k + 1]; v = v0 + (v1 - v0) * (ago - a0) / (a1 - a0) + (ago > 1 ? (leafRnd(i + 900) - .5) * .5 : 0); }
    else { const f = ((ago - 158) / 240 + .6) % 1; v = 45 + 43 * f + (leafRnd(i + 900) - .5) * .8 + Math.sin(ago / 24 * 2 * Math.PI) * .6; }
    times.push(t); pct.push(+v.toFixed(1));
  }
  return { times, pct };
})();
const PR_ICON = 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 12l4-3M12 12V8';
const PR_END = new Date('2026-10-08T14:42:00');
const PR_H = (() => {
  const N = 24 * 183 + 1, times = [], v = [];
  for (let i = 0; i < N; i++) { const ago = N - 1 - i, t = new Date(PR_END.getTime() - ago * 36e5), hh = t.getHours();
    v.push(1015 + 7 * Math.sin(ago / 216 * 2 * Math.PI) + 3 * Math.sin(ago / 88.8 * 2 * Math.PI + 1) + .6 * Math.cos((hh - 10) / 12 * 2 * Math.PI) + (leafRnd(i + 1700) - .5) * .6); times.push(t); }
  const sh = 1016.4 - v[N - 1]; const out = v.map(x => +(x + sh).toFixed(1)); out[N - 2] = 1016.7;
  return { times, v: out };
})();
const prTend = d => d < -0.05 ? { label: 'Falling', solid: '#C2410C', arrow: 'M12 20l-7-8h4.5V4h5v8H19z' } : d > 0.05 ? { label: 'Rising', solid: '#15803D', arrow: 'M12 4l7 8h-4.5v8h-5v-8H5z' } : { label: 'Steady', solid: '#4C6354', arrow: 'M4 12l8-6v4h8v4h-8v4z' };
const lvVar = (shift, scale, off, seed) => ({ times: LV_H.times, pct: LV_H.pct.map((_, i) => +Math.max(4, Math.min(98, LV_H.pct[Math.max(0, i - shift)] * scale + off + (leafRnd(i + seed) - .5) * .6)).toFixed(1)) });
const LV_TANKS = { wl1: { H: LV_H, tank: 1.94, label: 'AxisTech Water Level Sensor' }, wl2: { H: lvVar(60, .8, 18, 2100), tank: 2.4, label: 'Stock Tank 2' }, wl3: { H: lvVar(130, 1.05, -14, 2500), tank: 1.5, label: 'House Tank' } };
const MM_END = new Date('2026-10-08T14:30:00');
const MM_I = { pm: 'M4 8h10M4 12h14M4 16h8M17 8h3M20 16h-2', temp: 'M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0zM12 9v5', hum: 'M12 3s5 5.5 5 9a5 5 0 0 1-10 0c0-3.5 5-9 5-9z', pres: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 12l4-3M12 12V8' };
const MM_CFG = {
  dust: { name: 'AxisTech Dust Sensor', serial: 'AXTCL_DS_2F71A9', id: 'ds1', badge: '#B14DA0', icon: MM_I.pm, sensor: 'dust sensor', metrics: [
    { k: 'pm1', label: 'PM 1.0', unit: 'µg/m³', dec: 0, color: '#E5484D', tint: '#FDECEC', icon: MM_I.pm, now: 4, prev: 4, base: 3, amp: 1, noise: 1.6, peak: 8, spike: .03, gauge: 100 },
    { k: 'pm25', label: 'PM 2.5', unit: 'µg/m³', dec: 0, color: '#22A35A', tint: '#E7F6EC', icon: MM_I.pm, now: 7, prev: 7, base: 6, amp: 1.5, noise: 2.2, peak: 8, spike: .04, gauge: 100, std: [25, 50, 100, 300], nepm: 25 },
    { k: 'pm10', label: 'PM 10', unit: 'µg/m³', dec: 0, color: '#9B4DCA', tint: '#F3E8FF', icon: MM_I.pm, now: 8, prev: 9, base: 8, amp: 2, noise: 2.8, peak: 9, spike: .04, gauge: 100, std: [50, 100, 200, 600], nepm: 50 },
    { k: 'temp', label: 'Temperature', unit: '°C', dec: 1, color: '#C2410C', tint: '#FDEBE0', icon: MM_I.temp, now: 18.6, prev: 18.2, base: 16, amp: 6, noise: .5, peak: 15 },
    { k: 'hum', label: 'Humidity', unit: '%', dec: 0, color: '#2563EB', tint: '#E8F0FE', icon: MM_I.hum, now: 64, prev: 66, base: 66, amp: 20, noise: 3, peak: 5, max: 100 },
  ] },
  thp: { name: 'AxisTech THP Sensor', serial: 'AXTCL_TH_5B03C8', id: 'th1', badge: '#1B8FB3', icon: MM_I.temp, sensor: 'THP sensor', metrics: [
    { k: 'temp', label: 'Temperature', unit: '°C', dec: 1, color: '#EA580C', tint: '#FFF1E7', icon: MM_I.temp, now: 21.4, prev: 21.1, base: 18, amp: 6, noise: .4, peak: 15 },
    { k: 'hum', label: 'Humidity', unit: '%', dec: 0, color: '#2563EB', tint: '#E8F0FE', icon: MM_I.hum, now: 58, prev: 59, base: 62, amp: 18, noise: 2.5, peak: 5, max: 100 },
    { k: 'pres', label: 'Pressure', unit: 'hPa', dec: 1, color: '#7C4DDA', tint: '#EEE7FB', icon: MM_I.pres, now: 1016.8, prev: 1016.6, base: 1015, amp: .6, noise: .3, peak: 10, slow: 6 },
  ] },
};
const MM_AQ = [['Good', '#E7F6EC', '#15803D', '#22A35A'], ['Fair', '#FEF3C7', '#A16207', '#EAB308'], ['Poor', '#FFEDD5', '#C2410C', '#F97316'], ['Very poor', '#FDECEC', '#B91C1C', '#DC2626'], ['Extremely poor', '#F5E1E6', '#7F1D1D', '#7F1D1D']];
const mmBand = (std, i) => i === 0 ? '< ' + std[0] : i === std.length ? std[i - 1] + '+' : std[i - 1] + '–' + std[i];
const mmCache = {};
function mmSeries(scr, m, mi) {
  const key = scr + m.k; if (mmCache[key]) return mmCache[key];
  const N = 24 * 183 + 1, times = [], v = []; let walk = 0;
  for (let i = 0; i < N; i++) {
    const ago = N - 1 - i, t = new Date(MM_END.getTime() - ago * 36e5), hh = t.getHours(), r = leafRnd(i * 7 + mi * 131 + (scr === 'thp' ? 999 : 0));
    walk = walk * .85 + (r - .5) * m.noise;
    let x = m.base + m.amp * Math.cos((hh - m.peak) / 24 * 2 * Math.PI) + walk + (m.slow ? m.slow * Math.sin(ago / 216 * 2 * Math.PI) : 0);
    if (m.spike && leafRnd(i * 3 + mi) < m.spike) x += 4 + leafRnd(i + mi * 5) * 8;
    if (m.spike && leafRnd(Math.floor(i / 9) + mi * 17) < .08) x = 0;
    times.push(t); v.push(x);
  }
  const sh = m.now - v[N - 1];
  const out = v.map(x => { let y = x + sh; if (m.spike) y = Math.max(0, y); if (m.max) y = Math.min(m.max, Math.max(0, y)); return +y.toFixed(m.dec + 1); });
  out[N - 1] = m.now; out[N - 2] = m.prev;
  return (mmCache[key] = { times, v: out });
}
const LV_RANGE = { '24h': [24, 1], '1w': [168, 1], '1m': [720, 6], '3m': [2184, 24], '6m': [4368, 48] };
const LEAF_RANGE = { '24h': [24, 1], '1w': [168, 2], '1m': [720, 8], '3m': [2184, 24], '6m': [4368, 48] };
const GAS_NOW = new Date('2026-09-30T14:00:00');
const GAS_RANGE = { '24h': { n: 25, step: 1 }, '1w': { n: 57, step: 3 }, '1m': { n: 31, step: 24 }, '3m': { n: 46, step: 48 }, '6m': { n: 46, step: 96 } };
const GAS_SEV = {
  good: { label: 'Good', bg: '#E7F6EC', ink: '#15803D' },
  watch: { label: 'Elevated', bg: '#FEF3C7', ink: '#B45309' },
  high: { label: 'High', bg: '#FDECEC', ink: '#B91C1C' },
  none: { label: 'Normal', bg: '#EEF3EF', ink: '#4C6354' },
};
const GAS_M = {
  temp: { label: 'Temperature', short: 'Temp', unit: '°C', dec: 1, color: '#EA580C', tint: '#FFF1E7', icon: 'M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0zM12 9v5', now: 30.1, base: 26, amp: 4.2, noise: .35, peak: 15, seed: 11, neutral: true },
  hum: { label: 'Humidity', short: 'Humidity', unit: '%', dec: 1, color: '#2563EB', tint: '#E8F0FE', icon: 'M12 3s5 5.5 5 9a5 5 0 0 1-10 0c0-3.5 5-9 5-9z', now: 66.1, base: 70, amp: 9, noise: .9, peak: 4, seed: 23, neutral: true },
  pres: { label: 'Pressure', short: 'Pressure', unit: 'hPa', dec: 1, color: '#6D28D9', tint: '#EDE9FE', icon: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 12l4-3M12 12V8', now: 1021.3, base: 1019, amp: .9, noise: .45, peak: 10, seed: 37, neutral: true },
  co2: { label: 'CO₂', short: 'CO₂', unit: 'ppm', dec: 0, color: '#7C4DDA', tint: '#EEE7FB', icon: 'M7 18a4 4 0 0 1 .3-7.98A5 5 0 0 1 17 11a3 3 0 0 1-.3 7z', now: 517, base: 480, amp: 55, noise: 14, peak: 5, seed: 41, limits: [1000, 2500] },
  ch4: { label: 'Methane', short: 'Methane', unit: 'ppm', dec: 2, color: '#0F766E', tint: '#E0F4F1', icon: 'M12 3c1 3 4 5 4 9a4 4 0 0 1-8 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 0-8z', now: 3.96, base: 3.2, amp: .7, noise: .16, peak: 6, seed: 53, limits: [5, 25] },
  odour: { label: 'Odour', short: 'Odour', unit: 'ppm', dec: 1, color: '#9333EA', tint: '#F3E8FF', icon: 'M5 8c2-2 4 2 6 0s4-2 6 0M5 13c2-2 4 2 6 0s4-2 6 0M5 18c2-2 4 2 6 0s4-2 6 0', now: 21.5, base: 17, amp: 4.5, noise: 1.1, peak: 13, seed: 67, limits: [20, 50] },
  co: { label: 'CO', short: 'CO', unit: 'ppm', dec: 1, color: '#DC2626', tint: '#FDECEC', icon: 'M12 3l9 16H3zM12 10v4M12 17v.01', now: 10.2, base: 7.2, amp: 2.4, noise: .45, peak: 8, seed: 79, limits: [9, 35] },
  nh3: { label: 'Ammonia', short: 'NH₃', unit: 'ppm', dec: 1, color: '#0E7C3A', tint: '#E7F6EC', icon: 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M7.5 15h9', now: 7.6, base: 6.4, amp: 1.8, noise: .35, peak: 7, seed: 97, limits: [10, 25] },
};
const GAS_CHARTS = [
  { id: 'th', title: 'Temperature & Humidity', sub: 'Air temperature (°C, left) and relative humidity (%, right)', series: [['temp', 'l'], ['hum', 'r']], span: '1 / -1' },
  { id: 'pres', title: 'Atmospheric Pressure (hPa)', sub: 'Barometric pressure at the sensor', series: [['pres', 'l']] },
  { id: 'co2', title: 'Carbon Dioxide (CO₂) Level (ppm)', sub: 'Shown against the 1,000 ppm ventilation guide', series: [['co2', 'l']], limit: ['co2', 1000, '1,000 ppm guide'] },
  { id: 'mo', title: 'Methane & Odour (ppm)', sub: 'Methane (left) and odour (right)', series: [['ch4', 'l'], ['odour', 'r']] },
  { id: 'cn', title: 'Carbon Monoxide (CO) & Ammonia (NH₃) (ppm)', sub: 'Shown against the 9 ppm CO guideline', series: [['co', 'l'], ['nh3', 'r']], limit: ['co', 9, 'CO 9 ppm'] },
];
const GZC = { g: ['#16A34A', '#E7F6EC', '#15803D'], a: ['#F59E0B', '#FEF3C7', '#B45309'], r: ['#DC2626', '#FDECEC', '#B91C1C'], b: ['#2A6FDB', '#E4EEFB', '#1D4ED8'] };
const GAS_GAUGE = {
  temp: { min: 0, max: 50, chart: 'line', note: 'Air temperature', zones: [[50, 'n', '']] },
  hum: { min: 0, max: 100, chart: 'line', note: 'Relative humidity', zones: [[100, 'n', '']] },
  pres: { min: 970, max: 1050, chart: 'line', note: 'Barometric pressure', zones: [[1050, 'n', '']] },
  co2: { min: 0, max: 4000, chart: 'line', note: 'Livestock housing limit 3,000 ppm (CIGR)', zones: [[3000, 'g', 'Below limit'], [4000, 'r', 'Above limit']] },
  co: { min: 0, max: 50, chart: 'line', note: '', zones: [[30, 'g', 'Below limit'], [50, 'r', 'Above limit']] },
  nh3: { min: 0, max: 40, chart: 'line', note: '', zones: [[25, 'g', 'Below limit'], [40, 'r', 'Above limit']] },
  ch4: { min: 0, max: 30, chart: 'line', note: 'Methane concentration', zones: [[30, 'n', '']] },
  odour: { min: 0, max: 60, chart: 'line', note: 'Odour reading per interval', zones: [[60, 'n', '']] },
};
const gPt = (a, r) => [100 + r * Math.sin(a * Math.PI / 180), 96 - r * Math.cos(a * Math.PI / 180)];
const gArc = (a0, a1, r) => { const p0 = gPt(a0, r), p1 = gPt(a1, r); return 'M' + p0[0].toFixed(2) + ' ' + p0[1].toFixed(2) + ' A' + r + ' ' + r + ' 0 ' + (a1 - a0 > 180 ? 1 : 0) + ' 1 ' + p1[0].toFixed(2) + ' ' + p1[1].toFixed(2); };
const gasStatus = (m, v) => !m.limits ? GAS_SEV.none : v >= m.limits[1] ? GAS_SEV.high : v >= m.limits[0] ? GAS_SEV.watch : GAS_SEV.good;
const gasFmt = (m, v) => m.dec === 0 ? Math.round(v).toLocaleString('en-AU') : v.toFixed(m.dec);
const gasCache = {};
function gasSeries(key, range) {
  const ck = key + range; if (gasCache[ck]) return gasCache[ck];
  const m = GAS_M[key], { n, step } = GAS_RANGE[range];
  const rand = mulberry32W(m.seed * 7 + n);
  let walk = 0; const times = [], raw = [];
  for (let i = 0; i < n; i++) {
    const t = new Date(GAS_NOW.getTime() - (n - 1 - i) * step * 3600e3);
    walk = walk * 0.82 + (rand() - .5) * m.noise * 2.2;
    const di = step >= 24 ? 0.35 * Math.sin(i * 0.9 + m.seed) : Math.cos(((t.getHours() - m.peak) / 24) * 2 * Math.PI);
    times.push(t); raw.push(m.base + m.amp * di + walk * (step >= 24 ? 2 : 1));
  }
  const shift = m.now - raw[n - 1];
  const vals = raw.map(v => v + shift);
  return gasCache[ck] = { times, vals };
}
function gasSmooth(xs, ys) {
  let d = 'M' + xs[0].toFixed(1) + ' ' + ys[0].toFixed(1);
  for (let i = 0; i < xs.length - 1; i++) {
    const x0 = xs[i - 1] ?? xs[i], y0 = ys[i - 1] ?? ys[i], x3 = xs[i + 2] ?? xs[i + 1], y3 = ys[i + 2] ?? ys[i + 1];
    const c1x = xs[i] + (xs[i + 1] - x0) / 6, c1y = ys[i] + (ys[i + 1] - y0) / 6;
    const c2x = xs[i + 1] - (x3 - xs[i]) / 6, c2y = ys[i + 1] - (y3 - ys[i]) / 6;
    d += ' C' + c1x.toFixed(1) + ' ' + c1y.toFixed(1) + ' ' + c2x.toFixed(1) + ' ' + c2y.toFixed(1) + ' ' + xs[i + 1].toFixed(1) + ' ' + ys[i + 1].toFixed(1);
  }
  return d;
}
function gasAxis(vals) {
  let mn = Math.min(...vals), mx = Math.max(...vals);
  const pad = (mx - mn || Math.abs(mx) * .1 || 1) * 0.18; mn -= pad; mx += pad;
  const raw = (mx - mn) / 4, mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const step = [1, 2, 2.5, 5, 10].map(s => s * mag).find(s => s >= raw);
  const lo = Math.floor(mn / step) * step, hi = lo + step * 4 >= mx ? lo + step * 4 : Math.ceil(mx / step) * step;
  const dec = step < 0.1 ? 2 : step < 1 ? 1 : 0;
  const ticks = []; for (let v = lo; v <= hi + 1e-9; v += step) ticks.push(v);
  return { lo, hi, ticks, dec };
}
function gasTimeLabel(t, withHour) {
  let h = t.getHours() % 12; if (h === 0) h = 12;
  const hh = h + ':' + String(t.getMinutes()).padStart(2, '0') + (t.getHours() < 12 ? ' am' : ' pm');
  return withHour ? hh + ', ' + wFmtDate(t) : wFmtDate(t);
}
const RAIN_NOW = new Date(2026, 8, 9, 15, 45);
let rainCache = null;
function rainDaily() {
  if (rainCache) return rainCache;
  let s = 7331; const q = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  const N = 880, out = [];
  for (let i = 0; i < N; i++) { const t = new Date(RAIN_NOW.getFullYear(), RAIN_NOW.getMonth(), RAIN_NOW.getDate() - (N - 1 - i)); const wet = q() < .38; out.push({ t, v: wet ? Math.round((Math.pow(q(), 1.6) * 14 + .2) * 10) / 10 : 0 }); }
  const fit = (from, to, total) => { const seg = out.slice(N - to, N - from); let sum = seg.reduce((a, d) => a + d.v, 0); if (!sum) { seg[1].v = 1; sum = 1; } seg.forEach(d => { d.v = Math.round(d.v * total / sum * 10) / 10; }); const k = seg.reduce((b, d, i) => d.v > seg[b].v ? i : b, 0); seg[k].v = Math.round((seg[k].v + total - seg.reduce((a, d) => a + d.v, 0)) * 10) / 10; };
  out[N - 1].v = 0; out[N - 2].v = 0; fit(2, 7, 9.9); fit(7, 30, 28.6);
  return (rainCache = out);
}
const FLOW_ICON = 'M3 9c3 0 3 2 6 2s3-2 6-2 3 2 6 2M3 15c3 0 3 2 6 2s3-2 6-2 3 2 6 2';
const FLOW_NOW = new Date('2026-09-30T14:00:00');
const FLOW_MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
let flowCache = null;
function flowSeries() {
  if (flowCache) return flowCache;
  const N = 184 * 96, start = FLOW_NOW.getTime() - (N - 1) * 9e5;
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const vol = new Float64Array(N), cum = new Float64Array(N); let total = 1486250, irr = false;
  for (let i = 0; i < N; i++) {
    const t = new Date(start + i * 9e5), h = t.getHours() + t.getMinutes() / 60, day = Math.floor(i / 96);
    if (h === 0 || i === 0) irr = rnd() < 0.35;
    let v = 1090 + 70 * Math.sin((h - 9) / 24 * 2 * Math.PI) + (rnd() - .5) * 120;
    const q = rnd(); if (q < .012) v += 150 + rnd() * 250; else if (q > .9975) v = 160 + rnd() * 200;
    if (i === N - 1) v = 1100;
    vol[i] = Math.round(v * 10) / 10; total += vol[i]; cum[i] = total;
  }
  return flowCache = { start, N, vol, cum };
}
function flowNum(v, dec) { return v.toLocaleString('en-AU', { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 }); }
function flowTick(v) { return v >= 1e6 ? (v / 1e6).toFixed(3).replace(/0+$/, '').replace(/\.$/, '') + 'M' : v >= 1e4 ? Math.round(v / 1e3) + 'k' : flowNum(v); }
function flowDay(d) { return d.getDate() + ' ' + FLOW_MON[d.getMonth()]; }
class Component extends React.Component {
  winRef = el => {
    if (!el || el._ww) return; el._ww = true;
    el.addEventListener('wheel', e => { const id = el.getAttribute('data-chartid'); if (!id) return; e.preventDefault(); const r = el.getBoundingClientRect(); this.zoomWin(id, e.deltaY < 0 ? 1 / 1.4 : 1.4, Math.max(0, Math.min(1, (e.clientX - r.left) / r.width))); }, { passive: false });
  };
  soilWheelRef = el => {
    if (!el || el._sw) return; el._sw = true;
    el.addEventListener('wheel', e => { e.preventDefault(); const r = el.getBoundingClientRect(); this.soilZoomBy(e.deltaY < 0 ? 1 / 1.4 : 1.4, Math.max(0, Math.min(1, (e.clientX - r.left) / r.width))); }, { passive: false });
  };
  soilZoomBy(f, fr) {
    const c = this._soilCtx; if (!c) return; const cur = c.win, len = cur.b - cur.a, anchor = cur.a + fr * len;
    const L = Math.max(c.minLen, Math.min(1, len * f)), na = Math.max(0, Math.min(1 - L, anchor - fr * L));
    this.setState({ soilWin: L >= .999 ? null : { a: na, b: na + L, k: c.key }, soilHover: null });
  }
  winOf(id) { const w = (this.state.chartWin || {})[id], k = (this._winKey || {})[id]; return w && w.k === k ? w : { a: 0, b: 1 }; }
  zoomWin(id, f, fr = .5) {
    const cur = this.winOf(id), len = cur.b - cur.a, anchor = cur.a + fr * len, minL = (this._winMin || {})[id] || .05;
    const L = Math.max(minL, Math.min(1, len * f)), na = Math.max(0, Math.min(1 - L, anchor - fr * L));
    this.setState(s => ({ chartWin: { ...(s.chartWin || {}), [id]: L >= .999 ? null : { a: na, b: na + L, k: (this._winKey || {})[id] } } }));
  }
  onWinDown = e => { const el = e.currentTarget, id = el.getAttribute('data-chartid'), w = this.winOf(id); if (w.b - w.a >= .999) return; e.preventDefault(); this._pan = { id, x0: e.clientX, w0: w, width: el.getBoundingClientRect().width }; };
  onWinMove = e => { const p = this._pan; if (!p) return; const len = p.w0.b - p.w0.a, na = Math.max(0, Math.min(1 - len, p.w0.a - (e.clientX - p.x0) / p.width * len)); this.setState(s => ({ chartWin: { ...(s.chartWin || {}), [p.id]: { a: na, b: na + len, k: p.w0.k } } })); };
  onWinUp = () => { this._pan = null; };
  winView(c, id, key) {
    this._winKey = this._winKey || {}; this._winMin = this._winMin || {}; this._winKey[id] = key;
    const cnt = ((c.xAt && c.xAt.all) || c.xAt || []).length || (c.bars || []).length || 8;
    this._winMin[id] = Math.min(1, 4 / Math.max(4, cnt));
    const w = this.winOf(id), a = w.a, b = w.b, len = b - a, zoomed = len < .999;
    let bars = c.bars || [];
    if (zoomed && bars.length) { const vis = bars.filter(x => +x.cx >= a * 300 && +x.cx <= b * 300); if (vis.length <= 16) bars = bars.map(x => ({ ...x, valueLabel: x.vl != null ? x.vl : x.valueLabel })); }
    return { ...c, bars, vb: (a * 300).toFixed(3) + ' 0 ' + (len * 300).toFixed(3) + ' 170', ovLeft: (-a / len * 100).toFixed(3) + '%', ovWidth: (100 / len).toFixed(3) + '%',
      xAt: wAxisWin(c, w), zoomed, cursor: zoomed ? 'grab' : 'zoom-in',
      zoomIn: () => this.zoomWin(id, .5), zoomOut: () => this.zoomWin(id, 2), zoomReset: () => this.setState(s => ({ chartWin: { ...(s.chartWin || {}), [id]: null } })) };
  }
  zoomRef = el => {
    if (!el || el._zw) return; el._zw = true;
    el.addEventListener('wheel', e => {
      const c = this._zctx && this._zctx[el.getAttribute('data-zkey')]; if (!c) return; e.preventDefault();
      const rr = el.getBoundingClientRect(), fr = Math.max(0, Math.min(1, (e.clientX - rr.left) / rr.width));
      this.zoomBy(c, e.deltaY < 0 ? 1 / 1.4 : 1.4, fr);
    }, { passive: false });
  };
  zoomBy(c, f, fr = .5) {
    const cur = this.state[c.sk], z = cur && cur.key === c.key ? cur : { a: 0, b: 1 }, len = z.b - z.a, anchor = z.a + fr * len;
    const L = Math.max(c.minLen, Math.min(1, len * f)), na = Math.max(0, Math.min(1 - L, anchor - fr * L));
    this.setState({ [c.sk]: L >= .999 ? null : { key: c.key, a: na, b: na + L }, [c.hk]: null });
  }
  zoomCtl(sk, hk, key, minLen, label) {
    this._zctx = this._zctx || {}; const c = { sk, hk, key, minLen }; this._zctx[key] = c;
    const cur = this.state[sk], on = !!(cur && cur.key === key);
    return { zkey: key, zoomed: on, zoomLabel: on ? label : '', zoomIn: () => this.zoomBy(c, .5), zoomOut: () => this.zoomBy(c, 2), zoomReset: () => this.setState({ [sk]: null, [hk]: null }) };
  }
  rainWheelRef = el => {
    if (!el || el._rw) return; el._rw = true;
    el.addEventListener('wheel', e => {
      e.preventDefault(); const c = this._rainCtx; if (!c) return;
      const rr = el.getBoundingClientRect(), fr = Math.max(0, Math.min(1, (e.clientX - rr.left) / rr.width)), len = c.b - c.a, anchor = c.a + fr * len;
      const L = Math.max(Math.min(c.sel === '24h' || c.sel === '1w' ? 4 : 1, c.N), Math.min(c.N, Math.floor(e.deltaY < 0 ? len / 1.4 : len * 1.4 + .99))); if (L === len) return;
      const na = Math.max(0, Math.min(c.N - L, Math.round(anchor - fr * L)));
      this.setState({ rainZoom: na === 0 && L === c.N ? null : { key: c.sel, a: na, b: na + L }, rainHover: null });
    }, { passive: false });
  };
  rainVals() {
    const st = this.state, sel = st.rainRange || '1w', D = rainDaily(), MO = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const dl = t => t.getDate() + ' ' + MO[t.getMonth()];
    let days;
    if (sel === 'custom') { const a = new Date((st.customFrom || '2026-08-01') + 'T00:00:00'), b = new Date((st.customTo || '2026-09-09') + 'T23:59:00'); days = D.filter(d => d.t >= a && d.t <= b); if (!days.length) days = D.slice(-7); }
    else days = D.slice(-({ '24h': 1, '1w': 7, '1m': 30, '3m': 90, '6m': 182 })[sel]);
    const weekly = days.length > 120, hourly = sel === '24h' || sel === '1w';
    const fH = t => (t.getHours() % 12 || 12) + (t.getHours() < 12 ? ' AM' : ' PM');
    const hoursOf = d => { const r = mulberry32W(Math.floor(d.t.getTime() / 864e5) % 9973 + 11), st0 = Math.floor(r() * 18), len = 2 + Math.floor(r() * 5), wt = Array.from({ length: len }, () => .3 + r()), ws = wt.reduce((a, b) => a + b, 0); return Array.from({ length: 24 }, (_, h) => { const t = new Date(d.t); t.setHours(h, 0, 0, 0); const j = h - st0; return { t, t2: t, v: d.v > 0 && j >= 0 && j < len ? Math.round(d.v * wt[j] / ws * 10) / 10 : 0 }; }); };
    const bk = hourly ? days.flatMap(hoursOf) : weekly ? Array.from({ length: Math.ceil(days.length / 7) }, (_, k) => { const g = days.slice(k * 7, k * 7 + 7); return { t: g[0].t, t2: g[g.length - 1].t, v: Math.round(g.reduce((x, d) => x + d.v, 0) * 10) / 10 }; }) : days.map(d => ({ t: d.t, t2: d.t, v: d.v }));
    const N = bk.length, z = st.rainZoom && st.rainZoom.key === sel ? st.rainZoom : null, a = z ? z.a : 0, b = z ? z.b : N;
    let run = 0; const cumAll = bk.map(x => (run += x.v));
    let vis = bk.slice(a, b), cum = cumAll.slice(a, b);
    const zH = !hourly && !!z && (bk[b - 1].t2 - bk[a].t) / 864e5 + 1 <= 7.01, hpB = weekly ? 168 : 24;
    if (zH) { const d0 = bk[a].t, d1 = bk[b - 1].t2; vis = days.filter(d => d.t >= d0 && d.t <= d1).flatMap(hoursOf); let r0 = a ? cumAll[a - 1] : 0; cum = vis.map(x => (r0 += x.v)); }
    const n = vis.length, hr = hourly || zH;
    const when = x => hr ? dl(x.t) + ', ' + fH(x.t) : weekly ? dl(x.t) + ' – ' + dl(x.t2) : x.t.getDate() + ' ' + MO[x.t.getMonth()] + ' ' + x.t.getFullYear();
    const nice = m => { if (m <= 0) return 1; const p = Math.pow(10, Math.floor(Math.log10(m))), r2 = m / p; return (r2 <= 1 ? 1 : r2 <= 2 ? 2 : r2 <= 2.5 ? 2.5 : r2 <= 5 ? 5 : 10) * p; };
    const axis = (vals, lo) => { const mn = lo != null ? lo : Math.min(...vals), top = nice(Math.max(...vals) * 1.1 || 1), Y = v => 190 - (v - mn) / (top - mn || 1) * 180; return { Y, ticks: [0, 1, 2, 3, 4].map(k => { const v = top - (top - mn) * k / 4; return { top: (Y(v) / 2).toFixed(2) + '%', label: (+v.toFixed(1)).toString() }; }), grid: [0, 1, 2, 3, 4].map(k => (Y(top - (top - mn) * k / 4) / 2).toFixed(2) + '%') }; };
    const hov = st.rainHover, drag = st.rainDrag;
    const xLab = X => { const k = Math.min(n, hr && n > 30 ? 5 : 7), out = []; for (let j = 0; j < k; j++) { const i = Math.round(j * (n - 1) / Math.max(1, k - 1)), q = X(i) / 1000; out.push({ left: (q * 100).toFixed(2) + '%', shift: q < .04 ? '0' : q > .96 ? '-100%' : '-50%', text: hr && n <= 30 ? fH(vis[i].t) : hr ? dl(vis[i].t) + ', ' + fH(vis[i].t) : dl(vis[i].t) }); } return out; };
    const mk = (id, isBars) => {
      const X = i => isBars ? (i + .5) / n * 1000 : (n > 1 ? i / (n - 1) * 1000 : 500);
      const idx = e => { const r = e.currentTarget.getBoundingClientRect(), fr = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)); return Math.max(0, Math.min(n - 1, isBars ? Math.floor(fr * n) : Math.round(fr * (n - 1)))); };
      const vals = isBars ? vis.map(x => x.v) : cum, ax = axis(vals, 0);
      const bw = 1000 / n * .64;
      const out = { id, color: isBars ? '#3B8FD9' : '#1D4ED8', ticks: ax.ticks, grid: ax.grid, xLabels: xLab(X), isLine: !isBars,
        bars: isBars ? vis.map((x, i) => ({ x: (X(i) - bw / 2).toFixed(1), y: ax.Y(x.v).toFixed(1), w: bw.toFixed(1), h: Math.max(0, 190 - ax.Y(x.v)).toFixed(1), op: hov && hov.id === id && hov.i !== i ? .45 : .9 })) : [],
        line: '', area: '', hover: false, sel: false,
        onDown: e => { const i = idx(e); this.setState({ rainDrag: { id, s: i, e: i }, rainHover: null }); },
        onMove: e => { const i = idx(e), d = this.state.rainDrag; if (d) { if (d.e !== i) this.setState({ rainDrag: { ...d, e: i } }); return; } const c = this.state.rainHover; if (!c || c.id !== id || c.i !== i) this.setState({ rainHover: { id, i } }); },
        onUp: () => { const d = this.state.rainDrag; if (d && Math.abs(d.e - d.s) >= 1) { const lo = Math.min(d.s, d.e), hi = Math.max(d.s, d.e); this.setState({ rainZoom: zH ? { key: sel, a: a + Math.floor(lo / hpB), b: a + Math.floor(hi / hpB) + 1 } : { key: sel, a: a + lo, b: a + hi + 1 }, rainDrag: null, rainHover: null }); } else this.setState({ rainDrag: null }); },
        onLeave: () => this.setState({ rainHover: null, rainDrag: null }) };
      if (!isBars) { out.line = cum.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + ax.Y(v).toFixed(1)).join(' '); out.area = out.line + ' L' + X(n - 1).toFixed(1) + ' 190 L' + X(0).toFixed(1) + ' 190 Z'; }
      if (hov && hov.id === id && hov.i < n) { const i = hov.i, q = X(i) / 1000; out.hover = { left: (q * 100).toFixed(2) + '%', top: (ax.Y(vals[i]) / 2).toFixed(2) + '%', shift: q > .6 ? 'calc(-100% - 20px)' : '0', time: when(vis[i]), value: vals[i].toFixed(1) + ' mm', label: isBars ? (hr ? 'hourly total' : weekly ? 'weekly total' : 'daily total') : 'running total' }; }
      if (drag && drag.id === id) { const lo = Math.min(drag.s, drag.e), hi = Math.max(drag.s, drag.e), l = isBars ? lo / n : (n > 1 ? lo / (n - 1) : 0), rr = isBars ? (hi + 1) / n : (n > 1 ? hi / (n - 1) : 1); out.sel = { left: (l * 100).toFixed(2) + '%', width: (Math.max(.4, (rr - l) * 100)).toFixed(2) + '%' }; }
      return out;
    };
    const tot = vis.reduce((x, d) => x + d.v, 0), wi = vis.reduce((bi, d, i) => d.v > vis[bi].v ? i : bi, 0), rd = vis.filter(d => d.v >= .2).length;
    const bar = mk('rd', true), line = mk('rc', false);
    bar.title = hr ? 'Hourly Rainfall (mm)' : weekly ? 'Weekly Rainfall (mm)' : 'Daily Rainfall (mm)';
    bar.stats = [{ label: 'Total:', value: tot.toFixed(1) + ' mm', when: '' }, { label: hr ? 'Wettest hour:' : weekly ? 'Wettest week:' : 'Wettest day:', value: vis[wi].v.toFixed(1) + ' mm', when: '· ' + when(vis[wi]) }, { label: 'Rainy days:', value: String(hr ? days.filter(d => d.v >= .2 && d.t >= new Date(vis[0].t.getFullYear(), vis[0].t.getMonth(), vis[0].t.getDate()) && d.t <= vis[n - 1].t).length : weekly ? days.filter(d => d.v >= .2 && d.t >= vis[0].t && d.t <= vis[n - 1].t2).length : rd), when: '(≥ 0.2 mm)' }];
    line.title = 'Cumulative Rainfall (mm)';
    line.stats = [{ label: 'Running total:', value: (cum[n - 1] - (a ? cumAll[a - 1] : 0) + (a ? cumAll[a - 1] : 0)).toFixed(1) + ' mm', when: 'from ' + dl(bk[0].t) }];
    const zoomTo = len => { const c = (a + b) / 2, L = Math.max(Math.min(hourly ? 4 : 1, N), Math.min(N, Math.round(len))); let na = Math.round(c - L / 2); na = Math.max(0, Math.min(N - L, na)); this.setState({ rainZoom: na === 0 && L === N ? null : { key: sel, a: na, b: na + L }, rainHover: null }); };
    const sum = (k) => D.slice(-k).reduce((x, d) => x + d.v, 0);
    this._rainCtx = { a, b, N, sel };
    const tab = st.rainTab || 'dash';
    const mSum = (list, m0) => Math.round(list.filter(d => d.t.getFullYear() === m0.getFullYear() && d.t.getMonth() === m0.getMonth()).reduce((x, d) => x + d.v, 0) * 10) / 10;
    const MBY = []; for (let k = 11; k >= 0; k--) { const m0 = new Date(RAIN_NOW.getFullYear(), RAIN_NOW.getMonth() - k, 1); MBY.push({ t: m0, v: mSum(D, m0) }); }
    const MB = []; for (let k = 27; k >= 0; k--) { const m0 = new Date(RAIN_NOW.getFullYear(), RAIN_NOW.getMonth() - k, 1); MB.push({ t: m0, v: mSum(D, m0), inR: false }); }
    { const d0 = days[0].t, d1 = days[days.length - 1].t; MB.forEach(m => { const m1 = new Date(m.t.getFullYear(), m.t.getMonth() + 1, 0); m.inR = m1 >= new Date(d0.getFullYear(), d0.getMonth(), 1) && m.t <= d1; }); }
    const MR = MB.filter(m => m.inR).map(m => ({ ...m, v: mSum(days, m.t) })); MB.length = 0; MR.forEach(x => MB.push({ ...x, inR: true }));
    const MBN = MB.length;
    const mzc = this.zoomCtl('rainMZoom', 'rainMHover', 'rm' + sel, Math.min(1, 2 / MBN), ''), mzs = mzc.zoomed ? st.rainMZoom : { a: 0, b: 1 };
    const mI0 = Math.max(0, Math.min(MBN - 1, Math.floor(mzs.a * MBN + 1e-6))), mI1 = Math.max(mI0 + 1, Math.min(MBN, Math.ceil(mzs.b * MBN - 1e-6))), MV = MB.slice(mI0, mI1), MN = MV.length;
    const mAx = axis(MV.map(m => m.v), 0), mh = st.rainMHover, mw = Math.min(140, 1000 / MN * .58), mX = i => (i + .5) / MN * 1000;
    const mLab = m => MO[m.getMonth()] + ' ' + String(m.getFullYear()).slice(2);
    const wM = MR.reduce((bi, m, i) => m.v > MR[bi].v ? i : bi, 0), dM = MR.reduce((bi, m, i) => m.v < MR[bi].v ? i : bi, 0);
    const wMY = MBY.reduce((bi, m, i) => m.v > MBY[bi].v ? i : bi, 0), dMY = MBY.slice(0, 11).reduce((bi, m, i) => m.v < MBY[bi].v ? i : bi, 0);
    const rainMonthly = { ...mzc,
      ticks: mAx.ticks, grid: mAx.grid, xLabels: MV.map((m, i) => MN <= 14 || m.t.getMonth() % 3 === 0 ? (MN <= 14 || m.t.getMonth() === 0 ? mLab(m.t) : MO[m.t.getMonth()]) : ''),
      bars: MV.map((m, i) => ({ x: (mX(i) - mw / 2).toFixed(1), y: mAx.Y(m.v).toFixed(1), w: mw.toFixed(1), h: Math.max(0, 190 - mAx.Y(m.v)).toFixed(1), op: mh != null ? (mh === i ? .95 : .35) : (m.inR ? .95 : .3) })),
      labels: MN > 14 ? [] : MV.map((m, i) => ({ left: (mX(i) / 10).toFixed(2) + '%', top: (mAx.Y(m.v) / 2).toFixed(2) + '%', text: m.v.toFixed(1) })),
      hover: mh != null && MV[mh] ? { left: (mX(mh) / 10).toFixed(2) + '%', shift: mh > MN / 2 ? 'calc(-100% - 28px)' : '0', time: MO[MV[mh].t.getMonth()] + ' ' + MV[mh].t.getFullYear(), value: MV[mh].v.toFixed(1) + ' mm', label: 'monthly total' } : false,
      onMove: e => { const rr = e.currentTarget.getBoundingClientRect(), i = Math.max(0, Math.min(MN - 1, Math.floor((e.clientX - rr.left) / rr.width * MN))); if (this.state.rainMHover !== i) this.setState({ rainMHover: i }); },
      onLeave: () => this.setState({ rainMHover: null }),
      stats: [{ label: 'Total (selected range):', value: MR.reduce((x, m) => x + m.v, 0).toFixed(1) + ' mm', when: '' }, { label: 'Wettest month:', value: MR[wM].v.toFixed(1) + ' mm', when: '· ' + MO[MR[wM].t.getMonth()] + ' ' + MR[wM].t.getFullYear() }, { label: 'Driest month:', value: MR[dM].v.toFixed(1) + ' mm', when: '· ' + MO[MR[dM].t.getMonth()] + ' ' + MR[dM].t.getFullYear() }],
    };
    const QA = [
      ['💧', 'How much rain has fallen in the last 7 and 30 days?', 'Rainfall', '9.9 mm fell in the last 7 days and 38.5 mm in the last 30 days. No rain has been recorded since 9 AM today or in the last 48 hours.'],
      ['📅', 'When did it last rain?', 'Last rain', 'The last rain was on ' + dl(D[(() => { let i = D.length - 1; while (i > 0 && D[i].v < .2) i--; return i; })()].t) + '. Nothing has been recorded since.'],
      ['📊', 'Which was the wettest month this year?', 'Monthly', MO[MBY[wMY].t.getMonth()] + ' ' + MBY[wMY].t.getFullYear() + ' was the wettest month with ' + MBY[wMY].v.toFixed(1) + ' mm. The driest full month was ' + MO[MBY[dMY].t.getMonth()] + ' with ' + MBY[dMY].v.toFixed(1) + ' mm.'],
      ['🌱', 'Is irrigation likely required?', 'Irrigation', 'Likely soon. There has been no rain in the last 48 hours, so check soil moisture and plan irrigation if it is below target.'],
      ['⚠️', 'Is the gauge reporting normally?', 'Device', 'Yes. The last reading arrived at 3:45 pm on 9 Sep on the 15-minute schedule.'],
    ];
    const rq = (st.rainQuery || '').trim().toLowerCase();
    const rainQa = QA.map((x, i) => ({ icon: x[0], q: x[1], tag: x[2], a: x[3], i })).filter(x => !rq || (x.q + ' ' + x.tag + ' ' + x.a).toLowerCase().includes(rq)).map(x => ({ ...x, open: st.rainAiOpen === x.i, chevron: st.rainAiOpen === x.i ? '▲' : '▼', toggle: () => this.setState(s => ({ rainAiOpen: s.rainAiOpen === x.i ? -1 : x.i })) }));
    const rgForce = this.props.rainStatus === 'rain', rg1h = rgForce ? 0.6 : 0, rg6h = rgForce ? 1.4 : 0;
    const SUM = [['Last 1 Hour', rg1h], ['Last 6 Hours', rg6h], ['Last 24 Hours', D[D.length - 1].v], ['Last 48 Hours', sum(2)], ['Last 7 Days', sum(7)], ['Last 30 Days', sum(30)]];
    const niceMax = v => [5, 10, 20, 25, 50, 100, 200, 250, 500, 1000].find(s => s >= v) || Math.ceil(v / 500) * 500;
    const mx = niceMax(Math.max(...SUM.map(s => s[1]), .1));
    let li = D.length - 1; while (li > 0 && D[li].v < .2) li--;
    const devs = DEVICES.filter(d => d.kind === 'rain'), dev = devs.find(d => d.id === st.rainDev) || devs[0] || {};
    return {
      isRain: st.screen === 'rain', rainName: dev.name || '', rainSerial: dev.serial || '',
      rainBack: () => this.setState({ screen: 'list', listKind: 'rain', rainHover: null, rainDrag: null }),
      rainStatus: rg1h > 0 ? { on: true, label: 'Rain Detected', sub: rg1h.toFixed(1) + ' mm recorded in the last hour', ink: '#2563EB', bd: '#2563EB', bg: '#EDF5FF', cardBd: '#BFDBFE', off: false } : { on: false, label: 'No Rain Detected', sub: 'No rainfall in the last hour', ink: '#5B6B61', bd: '#D5DDD8', bg: '#F5F8F6', cardBd: '#E3EAE5', off: true },
      rainHero: { value: rgForce ? '1.4' : '0.0', note: 'Last rain observed ' + dl(D[li].t) + ', ' + D[li].v.toFixed(1) + ' mm' }, rainScale: mx + ' mm',
      rainSummary: SUM.map((s, i) => ({ label: s[0], value: s[1].toFixed(1), w: (s[1] / mx * 100).toFixed(1) + '%', ink: s[1] > 0 ? '#0F1A14' : '#8A948E', line: i === SUM.length - 1 ? 'transparent' : '#F0F3F1' })),
      rainRanges: [['24h', '1D'], ['1w', '1W'], ['1m', '1M'], ['3m', '3M'], ['6m', '6M']].map(([k, label]) => ({ label, color: sel === k ? '#0F1A14' : '#6A746E', bg: sel === k ? '#E7F6EC' : '#fff', select: () => this.setState({ rainRange: k, rainZoom: null, rainHover: null, rainCustomOpen: false }) })),
      rainCustomOpen: !!st.rainCustomOpen,
      rainToggleCustom: () => this.setState(s => ({ rainCustomOpen: !s.rainCustomOpen })),
      rainCancelCustom: () => this.setState({ rainCustomOpen: false }),
      rainApplyCustom: () => this.setState({ rainRange: 'custom', rainCustomOpen: false, rainZoom: null, rainHover: null }),
      rainCustomBg: sel === 'custom' ? '#E7F6EC' : '#fff', rainCustomInk: sel === 'custom' ? '#0E7C3A' : '#3F4B45',
      rainCustomLabel: sel === 'custom' ? dl(days[0].t) + ' – ' + dl(days[days.length - 1].t) : 'Custom',
      rainCharts: [{ ...bar, order: 1 }, { ...line, order: 3 }], rainMonthly, rainQa, rainNoMatch: !rainQa.length, rainQuery: st.rainQuery || '', onRainQueryChange: e => this.setState({ rainQuery: e.target.value }),
      rainTabDash: tab === 'dash' || tab === 'monthly', rainTabMonthly: false, rainTabInsights: tab === 'insights',
      rainTabs: [['dash', 'Rainfall', 'M6 13a5 5 0 0 1 4-8 5 5 0 0 1 8 3 3 3 0 0 1 0 6H7M9 20l1-2M13 21l1-2M17 20l1-2'], ['insights', 'Key Insights', 'M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5']].map(([k, label, icon]) => { const on = tab === k; return { label, icon, iconInk: k === 'insights' ? '#D4A017' : 'currentColor', iconFill: 'none', ink: on ? '#0E7C3A' : '#3F4B55', underline: on ? '#1AA34A' : 'transparent', go: () => this.setState({ rainTab: k, rainHover: null, rainMHover: null }) }; }),
      rainWheelRef: this.rainWheelRef, zoomRef: this.zoomRef, winRef: this.winRef, onWinDown: this.onWinDown, onWinMove: this.onWinMove, onWinUp: this.onWinUp,
      rainZoomLabel: z ? 'Zoomed · ' + dl(vis[0].t) + ' – ' + dl(vis[n - 1].t2) : dl(bk[0].t) + ' – ' + dl(bk[N - 1].t2),
      rainZoomIn: () => zoomTo((b - a) / 2), rainZoomOut: () => zoomTo((b - a) * 2),
      rainZoomReset: () => this.setState({ rainZoom: null, rainHover: null }), rainResetInk: z ? '#0E7C3A' : '#98A19C', rainZoomed: !!z,
    };
  }
  flowVals() {
    const st = this.state, sel = st.flowRange || '1w', hov = st.flowHover, F = flowSeries();
    const midnight = ms => { const d = new Date(ms); d.setHours(0, 0, 0, 0); return d.getTime(); };
    let t0, t1 = FLOW_NOW.getTime();
    if (sel === 'custom') { t0 = new Date((st.customFrom || '2026-09-01') + 'T00:00:00').getTime(); t1 = Math.min(t1, new Date((st.customTo || '2026-09-30') + 'T23:45:00').getTime()); }
    else { const days = { '24h': 1, '1w': 7, '1m': 30, '3m': 91, '6m': 182 }[sel]; t0 = midnight(t1) - (days - 1) * 864e5; }
    const span = (t1 - t0) / 864e5, gran = span <= 45 ? 'day' : 'week';
    const i0 = Math.max(0, Math.round((t0 - F.start) / 9e5)), i1 = Math.min(F.N - 1, Math.round((t1 - F.start) / 9e5));
    const bk = [];
    for (let i = i0; i <= i1; i++) {
      const key = gran === '15m' ? i - i0 : gran === 'day' ? Math.floor((i - i0) / 96) : Math.floor((i - i0) / 672);
      if (!bk[key]) bk[key] = { a: i, b: i, sum: 0 };
      bk[key].b = i; bk[key].sum += F.vol[i];
    }
    const nb = bk.length, tm = i => new Date(F.start + i * 9e5);
    const cumStart = F.cum[i0] - F.vol[i0], cumEnd = F.cum[i1];
    const PT = 10, PB = 190, PH = 200, pct = y => (y / PH * 100).toFixed(2) + '%';
    const unitWord = { '15m': '15 min', day: 'day', week: 'week' }[gran];
    const when = b => gran === '15m' ? tzFull(tm(b.b)) : gran === 'day' ? (() => { const d = tm(b.a); return d.getDate() + ' ' + FLOW_MON[d.getMonth()] + ' ' + d.getFullYear() + (b.b === F.N - 1 ? ' (to 2:00 PM)' : ''); })() : flowDay(tm(b.a)) + ' – ' + flowDay(tm(b.b)) + ' ' + tm(b.b).getFullYear();
    const labelIdx = [];
    if (gran === '15m') bk.forEach((b, j) => { const d = tm(b.a); if (d.getMinutes() === 0 && d.getHours() % 4 === 0) labelIdx.push(j); });
    else { const every = Math.max(1, Math.ceil(nb / 7)); for (let j = (nb - 1) % every; j < nb; j += every) labelIdx.push(j); }
    const mkLabels = xs => { let last = ''; return labelIdx.map(j => { const d = tm(bk[j].a), q = xs[j] / 1000, day = flowDay(d), hr = d.getHours() % 12 || 12; const o = { left: (q * 100).toFixed(2) + '%', shift: q < .05 ? '0' : q > .95 ? '-100%' : '-50%', time: gran === '15m' ? hr + ' ' + (d.getHours() < 12 ? 'am' : 'pm') : day, date: gran === '15m' && day !== last ? day : '' }; last = day; return o; }); };
    const onMove = (id, isBars) => e => { const r = e.currentTarget.getBoundingClientRect(), f = (e.clientX - r.left) / r.width; const i = Math.max(0, Math.min(nb - 1, isBars ? Math.floor(f * nb) : Math.round(f * (nb - 1)))); const c = this.state.flowHover; if (!c || c.id !== id || c.i !== i) this.setState({ flowHover: { id, i } }); };
    const onLeave = () => this.setState({ flowHover: null });

    const sums = bk.map(b => b.sum), ax = gasAxis(sums.concat([0]));
    if (ax.lo < 0) { ax.ticks = ax.ticks.filter(t => t >= -1e-9); ax.lo = 0; }
    const Yv = v => PB - (v - ax.lo) / (ax.hi - ax.lo) * (PB - PT);
    const xb = sums.map((_, j) => (j + .5) / nb * 1000), bw = 1000 / nb * (nb > 60 ? .7 : .6);
    const total = sums.reduce((a, b) => a + b, 0), jMax = sums.indexOf(Math.max(...sums));
    let vHover = false;
    if (hov && hov.id === 'vol' && hov.i < nb) { const j = hov.i, q = xb[j] / 1000; vHover = { left: (q * 100).toFixed(2) + '%', top: pct(Yv(sums[j])), shift: q > .6 ? 'calc(-100% - 20px)' : '0', time: when(bk[j]), value: flowNum(sums[j], gran === '15m' ? 1 : 0) + ' L', label: gran === '15m' ? 'reading' : 'total' }; }
    const volChart = {
      id: 'vol', title: gran === 'week' ? 'Water Volume Weekly (L)' : 'Water Volume Daily (L)', sub: { '15m': '15-minute readings', day: 'Daily totals', week: 'Weekly totals' }[gran], color: '#0EA5A5', tint: '#DFF6F7', isBars: true, isLine: false,
      ticks: ax.ticks.map(t => ({ top: pct(Yv(t)), label: flowTick(t) })), grid: ax.ticks.map(t => pct(Yv(t))),
      bars: sums.map((v, j) => ({ x: (xb[j] - bw / 2).toFixed(1), y: Yv(v).toFixed(1), w: bw.toFixed(1), h: (PB - Yv(v)).toFixed(1), op: vHover && hov.i !== j ? .4 : .85 })),
      line: '', area: '', endTop: '-999px', xLabels: mkLabels(xb), hover: vHover,
      stats: (() => { const jMin = sums.indexOf(Math.min(...sums)); return [{ label: 'Min', value: flowNum(sums[jMin], gran === '15m' ? 1 : 0) + ' L', when: 'observed at ' + when(bk[jMin]) }, { label: 'Total', value: flowNum(total) + ' L', when: '' }, { label: 'Max', value: flowNum(sums[jMax], gran === '15m' ? 1 : 0) + ' L', when: 'observed at ' + when(bk[jMax]) }]; })(),
      onMove: onMove('vol', true), onLeave,
    };
    const fData = 'raw', fStyle = 'area';
    const n15 = i1 - i0 + 1, zc = this.zoomCtl('flowZoom', 'flowHover', 'fl-' + sel + '-' + fData + (sel === 'custom' ? (st.customFrom || '') + (st.customTo || '') : ''), Math.min(1, 12 / n15), ''), zs = zc.zoomed ? st.flowZoom : { a: 0, b: 1 };
    const zi0 = i0 + Math.round(zs.a * (n15 - 1)), zi1 = i0 + Math.round(zs.b * (n15 - 1)), zn = zi1 - zi0 + 1;
    const stp = Math.max(1, Math.ceil(zn / 400)), pv = [], pi = [];
    if (fData === 'daily') { let cur = null; for (let i = zi0; i <= zi1; i++) { const dk = midnight(F.start + i * 9e5); if (!cur || cur.k !== dk) { cur = { k: dk, s: 0, c: 0 }; pv.push(0); pi.push(i); } cur.s += F.vol[i]; cur.c++; pv[pv.length - 1] = cur.s / cur.c; pi[pi.length - 1] = i; } }
    else for (let i = zi0; i <= zi1; i += stp) { let s = 0, c = 0; for (let k = i; k < Math.min(zi1 + 1, i + stp); k++) { s += F.vol[k]; c++; } pv.push(s / c); pi.push(Math.min(zi1, i + stp - 1)); }
    const vspan = zn / 96;
    const m = pv.length, aax = gasAxis(pv.concat([0])); if (aax.lo < 0) { aax.ticks = aax.ticks.filter(t => t >= -1e-9); aax.lo = 0; }
    const Ya = v => PB - (v - aax.lo) / (aax.hi - aax.lo) * (PB - PT), xa = pv.map((_, j) => m === 1 ? 500 : j / (m - 1) * 1000);
    const aLine = xa.map((x, j) => (j ? 'L' : 'M') + x.toFixed(1) + ' ' + Ya(pv[j]).toFixed(1)).join(' ');
    const aLabels = m > 1 ? axTime(tm(pi[0]).getTime(), tm(pi[m - 1]).getTime(), 8).map(o => ({ left: o.left, shift: o.shift, time: o.top, date: o.sub })) : [];
    let aHover = false;
    if (hov && hov.id === 'area' && hov.i < m) { const j = hov.i, q = xa[j] / 1000; aHover = { left: (q * 100).toFixed(2) + '%', top: pct(Ya(pv[j])), shift: q > .6 ? 'calc(-100% - 20px)' : '0', time: tzFull(tm(pi[j])), value: flowNum(pv[j], 1) + ' L', label: fData === 'daily' ? 'daily avg per 15 min' : stp > 1 ? 'avg 15-min reading' : 'raw 15-min reading' }; }
    const aMax = pv.indexOf(Math.max(...pv));
    const areaChart = {
      ...zc, zoomLabel: zc.zoomed ? (stp === 1 && fData === 'raw' ? 'Raw 15-min · ' : 'Zoomed · ') + tzFull(tm(pi[0])) + ' – ' + tzFull(tm(pi[m - 1])) : '',
      id: 'area', title: fData === 'daily' ? 'Water Volume · Daily Avg (L)' : 'Water Volume (L)', sub: '', color: '#0284C7', tint: '#E0F2FE', isBars: false, isLine: true,
      ticks: aax.ticks.map(t => ({ top: pct(Ya(t)), label: flowTick(t) })), grid: aax.ticks.map(t => pct(Ya(t))),
      bars: [], line: aLine, area: fStyle === 'line' ? 'M0 0' : aLine + ' L' + xa[m - 1].toFixed(1) + ' ' + PB + ' L' + xa[0].toFixed(1) + ' ' + PB + ' Z', endTop: pct(Ya(pv[m - 1])), xLabels: aLabels, hover: aHover,
      stats: (() => { const aMin = pv.indexOf(Math.min(...pv)), avg = pv.reduce((x, y) => x + y, 0) / m, wf = j => fData === 'daily' ? (() => { const d = tm(pi[j]); return d.getDate() + ' ' + FLOW_MON[d.getMonth()] + ' ' + d.getFullYear(); })() : tzFull(tm(pi[j])); return [{ label: 'Min', value: flowNum(pv[aMin], 1) + ' L', when: 'observed at ' + wf(aMin) }, { label: 'Avg', value: flowNum(avg, 1) + ' L', when: fData === 'daily' ? 'per 15 min, daily average' : 'per 15-min reading' }, { label: 'Max', value: flowNum(pv[aMax], 1) + ' L', when: 'observed at ' + wf(aMax) }]; })(),
      onMove: e => { const rr = e.currentTarget.getBoundingClientRect(), i = Math.max(0, Math.min(m - 1, Math.round((e.clientX - rr.left) / rr.width * (m - 1)))), c = this.state.flowHover; if (!c || c.id !== 'area' || c.i !== i) this.setState({ flowHover: { id: 'area', i } }); }, onLeave,
    };
    const cv = pi.map(i => F.cum[i]), cax = gasAxis(cv);
    const Yc = v => PB - (v - cax.lo) / (cax.hi - cax.lo) * (PB - PT);
    const cLine = xa.map((x, j) => (j ? 'L' : 'M') + x.toFixed(1) + ' ' + Yc(cv[j]).toFixed(1)).join(' ');
    let cHover = false;
    if (hov && hov.id === 'cum' && hov.i < m) { const j = hov.i, q = xa[j] / 1000; cHover = { left: (q * 100).toFixed(2) + '%', top: pct(Yc(cv[j])), shift: q > .6 ? 'calc(-100% - 20px)' : '0', time: tzFull(tm(pi[j])), value: flowNum(cv[j]) + ' L', label: 'meter total' }; }
    const cumChart = { ...zc, zoomLabel: zc.zoomed ? 'Zoomed · ' + tzFull(tm(pi[0])) + ' – ' + tzFull(tm(pi[m - 1])) : '',
      id: 'cum', title: 'Cumulative Water Flow (L)', sub: 'Meter total', color: '#2563EB', tint: '#E8F0FE', isBars: false, isLine: true, toggle: false,
      ticks: cax.ticks.map(t => ({ top: pct(Yc(t)), label: flowTick(t) })), grid: cax.ticks.map(t => pct(Yc(t))),
      bars: [], line: cLine, area: cLine + ' L' + xa[m - 1].toFixed(1) + ' ' + PB + ' L' + xa[0].toFixed(1) + ' ' + PB + ' Z', endTop: pct(Yc(cv[m - 1])), xLabels: aLabels, hover: cHover,
      stats: [{ label: 'Start', value: flowNum(F.cum[zi0] - F.vol[zi0]) + ' L', when: 'at ' + tzFull(tm(zi0)) }, { label: 'End', value: flowNum(F.cum[zi1]) + ' L', when: 'at ' + tzFull(tm(zi1)) }],
      onMove: e => { const rr = e.currentTarget.getBoundingClientRect(), i = Math.max(0, Math.min(m - 1, Math.round((e.clientX - rr.left) / rr.width * (m - 1)))), c = this.state.flowHover; if (!c || c.id !== 'cum' || c.i !== i) this.setState({ flowHover: { id: 'cum', i } }); }, onLeave,
    };
    const fv = st.flowView || 'area';
    const toggle = [['area', 'Area', 'M3 17l5-6 4 3 6-8 3 3v8H3z'], ['daily', gran === 'week' ? 'Weekly' : 'Daily', 'M5 20V11M10 20V6M15 20v-9M20 20V8']].map(([k, label, icon]) => ({ label, icon, bg: fv === k ? '#fff' : 'transparent', ink: fv === k ? '#0F1A14' : '#6A746E', sh: fv === k ? '0 1px 2px rgba(15,26,20,.12)' : 'none', go: () => this.setState({ flowView: k, flowHover: null }) }));
    const tgl = (cur, sk, opts) => opts.map(([k, label, icon]) => ({ label, icon, bg: cur === k ? '#fff' : 'transparent', ink: cur === k ? '#0F1A14' : '#6A746E', sh: cur === k ? '0 1px 2px rgba(15,26,20,.12)' : 'none', go: () => this.setState({ [sk]: k, flowHover: null }) }));
    areaChart.toggle = tgl(fStyle, 'flowStyle', [['area', 'Area', 'M3 17l5-6 4 3 6-8 3 3v8H3z'], ['line', 'Line', 'M3 17l5-6 4 3 6-8 3 3']]);
    areaChart.toggle = false; areaChart.toggle2 = false;
    cumChart.toggle2 = false;
    const last = F.vol[F.N - 1], prev = F.vol[F.N - 2], d = last - prev, up = d >= 0;
    return {
      isFlow: st.screen === 'flow', flowIcon: FLOW_ICON,
      flowBack: () => this.setState({ screen: 'list', listKind: 'flow', flowHover: null }),
      flowDial: (() => {
        const MX = 1700, A0 = 135, SW = 270, ang = v => A0 + Math.min(1, Math.max(0, v / MX)) * SW, rad = a => a * Math.PI / 180;
        const pt = (a, rr) => [100 + rr * Math.cos(rad(a)), 100 + rr * Math.sin(rad(a))];
        const arc = (a1, a2, rr) => { const p1 = pt(a1, rr), p2 = pt(a2, rr); return 'M' + p1[0].toFixed(2) + ' ' + p1[1].toFixed(2) + ' A' + rr + ' ' + rr + ' 0 ' + (a2 - a1 > 180 ? 1 : 0) + ' 1 ' + p2[0].toFixed(2) + ' ' + p2[1].toFixed(2); };
        const ticks = []; for (let k = 0; k <= 34; k++) { const a = A0 + SW * k / 34, maj = k % 10 === 0 || k === 34, mid = k % 5 === 0, p1 = pt(a, maj ? 70 : mid ? 74 : 78), p2 = pt(a, 84); ticks.push({ x1: p1[0].toFixed(2), y1: p1[1].toFixed(2), x2: p2[0].toFixed(2), y2: p2[1].toFixed(2), w: maj ? 2.6 : mid ? 1.8 : 1, c: maj || mid ? '#1F2723' : '#6A746E' }); }
        const labels = [0, 500, 1000, 1500, 1700].map(v => { const p = pt(A0 + SW * v / MX, 59); return { left: (p[0] / 2).toFixed(2) + '%', top: (p[1] / 2).toFixed(2) + '%', text: v === 0 ? '0' : v >= 1000 ? (v / 1000) + 'k' : String(v) }; });
        return { track: arc(A0, A0 + SW, 86), prog: arc(A0, Math.max(A0 + .5, ang(last)), 86), ticks, labels, needle: 'rotate(' + ang(last).toFixed(1) + ' 100 100)', value: flowNum(last), delta: (up ? '+' : '−') + flowNum(Math.abs(d), 1) + ' L', deltaColor: up ? '#15803D' : '#DC2626', deltaPath: up ? 'M12 5l6 7h-4v7h-4v-7H6z' : 'M12 19l-6-7h4V5h4v7h4z' };
      })(),
      flowStats: (() => {
        const today0 = midnight(FLOW_NOW.getTime()), idx = t => Math.round((t - F.start) / 9e5), sumR = (a, b) => { let s = 0; for (let i = Math.max(0, idx(a)); i < Math.min(F.N, idx(b)); i++) s += F.vol[i]; return s; };
        const y0 = today0 - 864e5, t3 = today0 - 3 * 864e5, dd = t => { const x = new Date(t); return x.getDate() + ' ' + FLOW_MON[x.getMonth()]; };
        return [{ label: 'Yesterday', value: flowNum(sumR(y0, today0)), sub: dd(y0) + ' ' + new Date(y0).getFullYear() }, { label: 'Last 3 days', value: flowNum(sumR(t3, today0)), sub: dd(t3) + ' – ' + dd(y0) }];
      })(),
      flowTiles: [
        { title: 'Water Volume (L)', gauge: (() => { let m = 0; for (let i = F.N - 7 * 96; i < F.N; i++) if (F.vol[i] > m) m = F.vol[i]; const mx = Math.ceil(m / 100) * 100; return { max: String(mx), mid: String(mx / 2), needle: 'rotate(' + (Math.min(1, last / mx) * 180).toFixed(1) + ' 110 110)' }; })(), value: flowNum(last, 1), unit: 'L', icon: FLOW_ICON, color: '#0E7C7C', ink: '#0EA5A5', tint: '#EAF8F8', note: '15-minute reading at 2:00 PM', hasDelta: true, delta: (up ? '+' : '−') + flowNum(Math.abs(d), 1) + ' L', deltaColor: '#4C6354', deltaPath: up ? 'M12 5l6 7h-4v7h-4v-7H6z' : 'M12 19l-6-7h4V5h4v7h4z' },
        { title: 'Cumulative Water (L)', meter: (() => { const s = String(Math.round(F.cum[F.N - 1])).padStart(7, '0'); return { kl: s.slice(0, -3).split(''), l: s.slice(-3).split('') }; })(), value: flowNum(F.cum[F.N - 1]), unit: 'L', icon: 'M5 20V10M10 20V6M15 20v-8M20 20V4', color: '#1D4ED8', ink: '#2563EB', tint: '#EEF3FE', note: 'Meter total at 2:00 PM, 30 Sep 2026', hasDelta: false },
      ],
      flowRanges: [['24h', '1D'], ['1w', '1W'], ['1m', '1M'], ['3m', '3M'], ['6m', '6M']].map(([k, label]) => ({ label, color: sel === k ? '#0F1A14' : '#6A746E', bg: sel === k ? '#E7F6EC' : '#fff', select: () => this.setState({ flowRange: k, flowHover: null, flowCustomOpen: false }) })),
      flowCustomOpen: !!st.flowCustomOpen,
      flowFrom: st.customFrom || '2026-09-01', flowTo: st.customTo || '2026-09-30',
      onFlowFrom: e => this.setState({ customFrom: e.target.value }), onFlowTo: e => this.setState({ customTo: e.target.value }),
      flowToggleCustom: () => this.setState(s => ({ flowCustomOpen: !s.flowCustomOpen })),
      flowCancelCustom: () => this.setState({ flowCustomOpen: false }),
      flowApplyCustom: () => this.setState({ flowRange: 'custom', flowCustomOpen: false, flowHover: null }),
      flowCustomBg: sel === 'custom' ? '#E7F6EC' : '#fff', flowCustomInk: sel === 'custom' ? '#0E7C3A' : '#3F4B45',
      flowCustomLabel: sel === 'custom' ? flowDay(new Date((st.customFrom || '2026-09-01') + 'T00:00:00')) + ' – ' + flowDay(new Date((st.customTo || '2026-09-30') + 'T00:00:00')) : 'Custom',
      flowMain: [areaChart], flowCum: [cumChart], zoomRef: this.zoomRef,
      flowHiLo: (() => { let hi = zi0, lo = zi0; for (let i = zi0; i <= zi1; i++) { if (F.vol[i] > F.vol[hi]) hi = i; if (F.vol[i] < F.vol[lo]) lo = i; } return [{ label: 'Highest Flow Recorded', value: flowNum(F.vol[hi], 1), unit: 'L', note: 'Observed at ' + tzFull(tm(hi)) }, { label: 'Lowest Flow Recorded', value: flowNum(F.vol[lo], 1), unit: 'L', note: 'Observed at ' + tzFull(tm(lo)) }]; })(),
    };
  }
  devInfoVals() {
    const st = this.state, scr = st.screen;
    const id = scr === 'dash' ? (st.selected || [])[0] : scr === 'flow' ? 'f1' : scr === 'gas' ? 'g1' : scr === 'rain' ? (st.rainDev || 'r1') : scr === 'leaf' ? 'l1' : scr === 'level' ? ((st.lvSel || ['wl1'])[0]) : scr === 'pressure' ? 'ps1' : scr === 'dust' ? 'ds1' : scr === 'thp' ? 'th1' : null;
    const dv = DEVICES.find(d => d.id === id) || DEVICES[0], k = DEVICES.indexOf(dv), open = !!st.devInfoOpen;
    const lat = -31.90951 + (k - 12) * .0021, lon = 115.81528 + (k - 12) * .0017, z = 15, n = 1 << z;
    const xt = (lon + 180) / 360 * n, lr = lat * Math.PI / 180, yt = (1 - Math.log(Math.tan(lr) + 1 / Math.cos(lr)) / Math.PI) / 2 * n;
    const cx = Math.floor(xt), cy = Math.floor(yt), tiles = [];
    if (open) for (let dy = -2; dy <= 2; dy++) for (let dx = -3; dx <= 3; dx++) { const x = cx + dx, y = cy + dy; tiles.push({ bg: 'url(https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/' + z + '/' + y + '/' + x + '), url(https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/' + z + '/' + y + '/' + x + ')', left: 'calc(50% + ' + ((x - xt) * 256).toFixed(1) + 'px)', top: 'calc(50% + ' + ((y - yt) * 256).toFixed(1) + 'px)' }); }
    const coords = lat.toFixed(5) + ', ' + lon.toFixed(5);
    return {
      devInfoOpen: open, devInfoRot: open ? '180deg' : '0deg', devInfoBg: open ? '#F1F7F3' : '#fff', devInfoBorder: open ? '#BFE5CC' : '#E5E8E6',
      toggleDevInfo: () => this.setState(s => ({ devInfoOpen: !s.devInfoOpen })),
      devInfo: { serial: dv.serial, label: dv.name, coords, lat, lon, key: dv.id, tiles, rows: [
        { label: 'Name', value: dv.name }, { label: 'Controller ID', value: dv.serial.replace('AXTCL_', '') }, { label: 'Provider', value: 'AxisTech' },
        { label: 'Status', chips: [{ label: 'Online', ink: '#0E7C3A', bg: '#E3F1E7' }, { label: 'Work mode', ink: '#0E7C3A', bg: '#EEF7EA' }] },
        { label: 'Communication Type', value: 'Cellular' }, { label: 'Reading Interval', value: '15 mins' },
        { label: 'Battery Level', value: (95 - (k * 7) % 40) + '%' }, { label: 'Signal Strength', value: String(18 + (k * 5) % 12) },
        { label: 'Coordinates', value: coords }, { label: 'Date Installed', value: '12 Mar 2025' },
      ].map(r => ({ value: '', chips: [], ...r })) },
    };
  }
  mmVals() {
    const st = this.state, scr = st.screen, isMM = scr === 'dust' || scr === 'thp', C = MM_CFG[isMM ? scr : 'dust'], sel = st.mmRange || '1w', hov = st.mmHover;
    const lFrom = st.mmFrom || '2026-09-01', lTo = st.mmTo || '2026-09-30', N = 24 * 183 + 1;
    let hrs, step, E = N - 1;
    if (sel === 'custom') { const f = new Date(lFrom + 'T00:00:00'), t = new Date(lTo + 'T23:00:00'); E = Math.max(0, Math.min(N - 1, N - 1 - Math.round((MM_END - t) / 36e5))); hrs = Math.min(E, Math.max(24, Math.round((t - f) / 36e5))); step = hrs <= 336 ? 1 : hrs <= 1440 ? 6 : 24; }
    else [hrs, step] = LV_RANGE[sel];
    const pad = n => String(n).padStart(2, '0');
    const fT = t => (t.getHours() % 12 || 12) + ':' + pad(t.getMinutes()) + ' ' + (t.getHours() < 12 ? 'am' : 'pm');
    const fD = t => pad(t.getDate()) + ' ' + MON3[t.getMonth()];
    const fDT = t => fD(t) + ', ' + fT(t);
    const pct = y => (y / 200 * 100).toFixed(2) + '%';
    const nice = x => { const p = Math.pow(10, Math.floor(Math.log10(x))), q = x / p; return (q <= 1 ? 1 : q <= 2 ? 2 : q <= 2.5 ? 2.5 : q <= 5 ? 5 : 10) * p; };
    const UP = 'M12 5l6 7h-4v7h-4v-7H6z', DN = 'M12 19l-6-7h4V5h4v7h4z', FLAT = 'M5 10h14v4H5z';
    const stats = {};
    const cards = [], charts = [];
    if (isMM) C.metrics.forEach((m, mi) => {
      const hid = scr === 'dust' && (m.k === 'temp' || m.k === 'hum') ? 'th' : m.k, S = mmSeries(scr, m, mi), H = S.v, u = m.unit === '%' ? '%' : ' ' + m.unit, fv = v => v.toFixed(m.dec) + u;
      const mz = this.zoomCtl('mmZoom', 'mmHover', 'mm-' + scr + sel + (sel === 'custom' ? lFrom + lTo : '') + m.k, Math.min(1, 6 / hrs), ''), mzs = mz.zoomed ? st.mmZoom : { a: 0, b: 1 };
      const Ez = E - Math.round((1 - mzs.b) * hrs), Hz = Math.max(4, Math.round((mzs.b - mzs.a) * hrs)), stz = mz.zoomed ? Math.max(1, Math.ceil(Hz / 300)) : step;
      const vals = [], times = [];
      for (let e = Ez; e >= Ez - Hz; e -= stz) { const a = H.slice(Math.max(0, e - stz + 1), e + 1); vals.unshift(a.reduce((x, y) => x + y, 0) / a.length); times.unshift(S.times[e]); }
      const n = vals.length, mn = Math.min(...vals), mx = Math.max(...vals), tk = nice(((mx - mn) || 1) / 4), lo = Math.floor(mn / tk) * tk, hi = Math.max(lo + tk, Math.ceil(mx / tk) * tk);
      const Y = v => 190 - (v - lo) / (hi - lo) * 180, X = i => i / Math.max(1, n - 1) * 1000;
      const ticks = []; for (let v = lo; v <= hi + 1e-9; v += tk) ticks.push({ top: pct(Y(v)), label: String(+v.toFixed(2)) });
      const line = vals.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' ');
      const xLabels = []; for (let j = 0; j < 7; j++) { const i = Math.round(j * (n - 1) / 6), q = X(i) / 1000; xLabels.push({ left: (q * 100).toFixed(2) + '%', shift: q < .04 ? '0' : q > .96 ? '-100%' : '-50%', top: '', bot: Hz <= 24 ? fT(times[i]) : fD(times[i]) }); }
      let hover = false;
      if (hov && hov.id === hid && hov.i < n) { const i = hov.i, q = X(i) / 1000; hover = { left: (q * 100).toFixed(2) + '%', top: pct(Y(vals[i])), shift: q > .6 ? 'calc(-100% - 20px)' : '0', time: fDT(times[i]), value: fv(vals[i]), dot: true }; }
      charts.push({ ...mz, k: m.k, dual: false, legend: [], cols: '42px minmax(0,1fr)', foot: [{ label: '', color: m.color, minVal: fv(mn), minWhen: fDT(times[vals.indexOf(mn)]), maxVal: fv(mx), maxWhen: fDT(times[vals.indexOf(mx)]) }], id: m.k, span: scr === 'thp' ? '1 / -1' : scr === 'dust' && hid !== 'th' ? 'span 2' : 'span 3', title: m.label + ' (' + m.unit + ')', note: '', color: m.color, gid: 'mm-g-' + m.k, ticks, grid: ticks.map(t => t.top), line, area: line + ' L1000 190 L0 190 Z', hover, endTop: pct(Y(vals[n - 1])), xLabels,
        minVal: fv(mn), minWhen: fDT(times[vals.indexOf(mn)]), maxVal: fv(mx), maxWhen: fDT(times[vals.indexOf(mx)]),
        onMove: e => { const r = e.currentTarget.getBoundingClientRect(), i = Math.max(0, Math.min(n - 1, Math.round((e.clientX - r.left) / r.width * (n - 1)))), c = this.state.mmHover; if (!c || c.id !== hid || c.i !== i) this.setState({ mmHover: { id: hid, i } }); },
        onLeave: () => this.setState({ mmHover: null }) });
      const now = H[N - 1], prev = H[N - 2], d = now - prev, flat = Math.abs(d) < Math.pow(10, -m.dec) / 2;
      const neutral = !m.std, inkUp = neutral ? '#15803D' : '#B45309', inkDn = neutral ? '#DC2626' : '#15803D';
      const li = m.std ? m.std.filter(x => now >= x).length : -1, status = m.std ? { label: MM_AQ[li][0], bg: MM_AQ[li][1], ink: MM_AQ[li][2] } : false;
      const info = m.std ? { open: st.mmInfo === m.k, toggle: e => { e.stopPropagation(); this.setState(z => ({ mmInfo: z.mmInfo === m.k ? null : m.k })); }, stop: e => e.stopPropagation(),
        title: 'How ' + m.label + ' is rated', nepm: m.label + ' national 24-hour standard (NEPM): ' + m.nepm + ' µg/m³.',
        assess: 'Latest reading ' + now.toFixed(m.dec) + ' µg/m³ falls in the ' + MM_AQ[li][0] + ' band (' + mmBand(m.std, li) + ' µg/m³).',
        bands: MM_AQ.map((q, i) => ({ label: q[0], dot: q[3], range: mmBand(m.std, i), bg: i === li ? 'rgba(255,255,255,.12)' : 'transparent', now: i === li })) } : false;
      const f = m.gauge ? Math.max(0, Math.min(1, now / m.gauge)) : 0;
      const mm24 = (() => { const h = H.slice(-25), t = S.times.slice(-25); let a = 0, b = 0; h.forEach((v, i) => { if (v < h[a]) a = i; if (v > h[b]) b = i; }); return { min: fv(h[a]), minAt: fT(new Date(+t[a])), max: fv(h[b]), maxAt: fT(new Date(+t[b])) }; })();
      const spark = (() => { const s4 = H.slice(-4), v = []; for (let i = 0; i < 13; i++) { const p = i / 4, a = Math.floor(p), b = Math.min(3, a + 1), f = p - a, j = Math.sin((i + 1) * 12.9898 + mi * 78.233) * 43758.5453; v.push(s4[a] + (s4[b] - s4[a]) * f + (i % 4 && i < 12 ? ((j - Math.floor(j)) - .5) * Math.max(Math.pow(10, -m.dec) * 3, Math.abs(s4[b] - s4[a]) * .25) : 0)); }
        const sp = wSpark(v, 'line'), hv = st.mmSparkHov, end = +S.times[N - 1];
        const hits = v.map((_, i) => ({ enter: () => { const c = this.state.mmSparkHov; if (!c || c.k !== m.k || c.i !== i) this.setState({ mmSparkHov: { k: m.k, i } }); } }));
        let active = false; if (hv && hv.k === m.k) { const i = hv.i, p = sp.pts[i]; active = { left: 'calc(' + p.x.toFixed(1) + '% - 3.5px)', top: 'calc(' + (p.y / 30 * 100).toFixed(1) + '% - 3.5px)', tipLeft: p.x.toFixed(1) + '%', shift: p.x < 20 ? '0' : p.x > 80 ? '-100%' : '-50%', value: fv(v[i]), when: fDT(new Date(end - (12 - i) * 9e5)) }; }
        return { ...sp, hits, active, leave: () => this.setState({ mmSparkHov: null }) }; })();
      cards.push({ mm: mm24, spark, label: m.label, unit: m.unit, color: m.color, tint: m.tint, icon: m.icon, value: now.toFixed(m.dec), status, info, z: info && info.open ? '60' : 'auto',
        gauge: m.gauge ? { dash: Math.max(1.5, f * 100).toFixed(1) + ' 100', needle: 'rotate(' + (f * 180).toFixed(1) + ' 110 110)', max: m.gauge } : false,
        delta: flat ? '0' + u : (d > 0 ? '+' : '−') + Math.abs(d).toFixed(m.dec) + u, deltaInk: flat ? '#6A746E' : neutral ? '#0F1A14' : d > 0 ? inkUp : inkDn, deltaPath: flat ? FLAT : d > 0 ? UP : DN });
      const h24 = H.slice(-25), w7 = H.slice(-169), avg24 = h24.reduce((a, b) => a + b, 0) / h24.length;
      stats[m.k] = { m, now, prev, d, u, min24: Math.min(...h24), max24: Math.max(...h24), avg24, max7: Math.max(...w7), max7At: S.times[N - 169 + w7.indexOf(Math.max(...w7))], min7: Math.min(...w7), fv, status };
    });
        const qa = [];
    if (isMM && scr === 'dust') {
      const a = stats.pm25, b = stats.pm10, c1 = stats.pm1;
      qa.push(['Is the air quality safe right now?', 'Yes. PM2.5 is ' + a.fv(a.now) + ' (' + a.status.label + ') and PM10 is ' + b.fv(b.now) + ' (' + b.status.label + '). Ratings use the NSW Government hourly air quality categories (Good is below 25 µg/m³ for PM2.5 and below 50 µg/m³ for PM10).']);
      qa.push(['What was the 24-hour average dust level?', 'Over the last 24 hours PM2.5 averaged ' + a.fv(a.avg24) + ', PM10 averaged ' + b.fv(b.avg24) + ' and PM1.0 averaged ' + c1.fv(c1.avg24) + '.']);
      qa.push(['When was dust highest this week?', 'PM10 peaked at ' + b.fv(b.max7) + ' at ' + fDT(b.max7At) + ', and PM2.5 peaked at ' + a.fv(a.max7) + ' at ' + fDT(a.max7At) + '.']);
      qa.push(['Is it safe to work outdoors?', a.now < 50 && b.now < 100 ? 'Yes. Particle levels are within the standards, so no extra protection is needed for normal outdoor work.' : 'Take care. Particle levels are in the Poor band or worse; consider P2 masks for extended outdoor work.']);
      qa.push(['What are temperature and humidity doing?', 'Temperature is ' + stats.temp.fv(stats.temp.now) + ' and humidity is ' + stats.hum.fv(stats.hum.now) + '. Higher humidity usually keeps dust settled; dry, windy conditions raise it.']);
    } else if (isMM) {
      const t = stats.temp, hm = stats.hum, p = stats.pres, p3 = mmSeries('thp', p.m, 1).v, d3 = p3[N - 1] - p3[N - 4];
      qa.push(['What are the current conditions?', 'Temperature is ' + t.fv(t.now) + ', humidity is ' + hm.fv(hm.now) + ' and pressure is ' + p.fv(p.now) + '.']);
      qa.push(['What was the temperature range in the last 24 hours?', 'Temperature ranged from ' + t.fv(t.min24) + ' to ' + t.fv(t.max24) + ', averaging ' + t.fv(t.avg24) + '.']);
      qa.push(['Is humidity high enough to raise disease risk?', hm.now >= 85 ? 'Yes. Humidity is ' + hm.fv(hm.now) + ', which favours fungal disease if it persists.' : 'Not at the moment. Humidity is ' + hm.fv(hm.now) + ', below the 85% level where fungal disease risk rises.']);
      qa.push(['Is pressure rising or falling?', (d3 > 1 ? 'Rising' : d3 < -1 ? 'Falling' : 'Steady') + '. Pressure changed by ' + (d3 >= 0 ? '+' : '−') + Math.abs(d3).toFixed(1) + ' hPa over the last 3 hours.']);
      qa.push(['Summarise the last 7 days', 'Temperature ranged from ' + t.fv(t.min7) + ' to ' + t.fv(t.max7) + ' and humidity from ' + hm.fv(hm.min7) + ' to ' + hm.fv(hm.max7) + ' over the last 7 days.']);
    }
    if (isMM) qa.push(['Is the sensor working properly?', 'Yes. The last reading arrived at 2:30 pm on 8 Oct on the 15-minute schedule over cellular.']);
    const q = (st.mmQuery || '').trim().toLowerCase();
    const mmQa = qa.map(([qq, a], i) => ({ q: qq, a, i })).filter(x => !q || x.q.toLowerCase().includes(q)).map(x => ({ q: x.q, a: x.a, open: st.mmAiOpen === x.i, chevron: st.mmAiOpen === x.i ? '▲' : '▼', toggle: () => this.setState(z => ({ mmAiOpen: z.mmAiOpen === x.i ? null : x.i })) }));
    return {
      isMM, mmName: C.name, mmSerial: C.serial, mmStamp: '08 Oct 26, 2:30 pm', mmIcon: C.icon, mmBadgeBg: C.badge, mmSensorLabel: C.sensor,
      mmBack: () => this.setState({ screen: 'list', listKind: scr, mmHover: null }),
      mmTabDash: (st.mmTab || 'dash') === 'dash', mmTabInsights: st.mmTab === 'insights',
      mmTabs: [['dash', 'Dashboard', 'M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z'], ['insights', 'Key Insights', 'M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5']].map(([k2, label, icon]) => { const on = (st.mmTab || 'dash') === k2; return { label, icon, iconInk: k2 === 'insights' ? '#D4A017' : 'currentColor', iconFill: 'none', ink: on ? '#0E7C3A' : '#3F4B55', underline: on ? '#1AA34A' : 'transparent', go: () => this.setState({ mmTab: k2, mmHover: null }) }; }),
      mmRanges: [['24h', '1D'], ['1w', '1W'], ['1m', '1M'], ['3m', '3M'], ['6m', '6M']].map(([k2, label]) => ({ label, color: sel === k2 ? '#0E7C3A' : '#6A746E', bg: sel === k2 ? '#E7F6EC' : '#fff', weight: sel === k2 ? '700' : '600', select: () => this.setState({ mmRange: k2, mmHover: null, mmCustomOpen: false }) })),
      mmCustomOpen: !!st.mmCustomOpen,
      mmToggleCustom: () => this.setState(s => ({ mmCustomOpen: !s.mmCustomOpen, mmDraftFrom: s.mmFrom || '2026-09-01', mmDraftTo: s.mmTo || '2026-09-30' })),
      mmCancelCustom: () => this.setState({ mmCustomOpen: false }),
      mmApplyCustom: () => this.setState(s => { let a = s.mmDraftFrom || lFrom, b = s.mmDraftTo || lTo; if (a > b) [a, b] = [b, a]; return { mmRange: 'custom', mmFrom: a, mmTo: b, mmCustomOpen: false, mmHover: null }; }),
      mmDraftFrom: st.mmDraftFrom || lFrom, mmDraftTo: st.mmDraftTo || lTo,
      onMmDraftFrom: e => this.setState({ mmDraftFrom: e.target.value }), onMmDraftTo: e => this.setState({ mmDraftTo: e.target.value }),
      mmMinDate: '2026-04-08', mmMaxDate: '2026-10-08',
      mmCustomBg: sel === 'custom' ? '#E7F6EC' : '#fff', mmCustomInk: sel === 'custom' ? '#0E7C3A' : '#3F4B45',
      mmCustomLabel: sel === 'custom' ? fD(new Date(lFrom + 'T00:00:00')) + ' – ' + fD(new Date(lTo + 'T00:00:00')) : 'Custom',
      mmCards: cards.map((c, i, arr) => { const g = !!c.gauge, nG = arr.filter(x => x.gauge).length; return { ...c, span: scr === 'dust' ? 'span 6' : g || nG === 0 ? 'span 10' : 'span ' + (30 / Math.max(1, arr.length - nG)), grow: g ? '0 0 auto' : '1', vSize: g ? '31px' : '48px', uSize: g ? '14px' : '18px' }; }), mmCharts: charts,
      mmQa, mmNoMatch: !mmQa.length, mmQuery: st.mmQuery || '',
      onMmQueryChange: e => this.setState({ mmQuery: e.target.value }),
    };
  }
  pressureVals() {
    const st = this.state, sel = st.prRange || '1w', H = PR_H, N = H.times.length, hov = st.prHover;
    const lFrom = st.prFrom || '2026-09-01', lTo = st.prTo || '2026-09-30';
    let hrs, step, E = N - 1;
    if (sel === 'custom') { const f = new Date(lFrom + 'T00:00:00'), t = new Date(lTo + 'T23:00:00'); E = Math.max(0, Math.min(N - 1, N - 1 - Math.round((PR_END - t) / 36e5))); hrs = Math.min(E, Math.max(24, Math.round((t - f) / 36e5))); step = hrs <= 336 ? 1 : hrs <= 1440 ? 6 : 24; }
    else if (sel === '24h') [hrs, step] = [24, 1];
    else [hrs, step] = LV_RANGE[sel];
    const pad = n => String(n).padStart(2, '0');
    const fT = t => (t.getHours() % 12 || 12) + ':' + pad(t.getMinutes()) + ' ' + (t.getHours() < 12 ? 'am' : 'pm');
    const fD = t => pad(t.getDate()) + ' ' + MON3[t.getMonth()];
    const fDT = t => fD(t) + ', ' + fT(t);
    const pct = y => (y / 200 * 100).toFixed(2) + '%';
    const pz = this.zoomCtl('prZoom', 'prHover', 'pr-' + sel + (sel === 'custom' ? lFrom + lTo : ''), Math.min(1, 6 / hrs), ''), pzs = pz.zoomed ? st.prZoom : { a: 0, b: 1 };
    const Ez = E - Math.round((1 - pzs.b) * hrs), Hz = Math.max(4, Math.round((pzs.b - pzs.a) * hrs)), stz = pz.zoomed ? Math.max(1, Math.ceil(Hz / 300)) : step;
    const vals = [], times = [];
    for (let e = Ez; e >= Ez - Hz; e -= stz) { const a = H.v.slice(Math.max(0, e - stz + 1), e + 1); vals.unshift(a.reduce((x, y) => x + y, 0) / a.length); times.unshift(H.times[e]); }
    const n = vals.length, mn = Math.min(...vals), mx = Math.max(...vals);
    const tk = Math.max(2, Math.ceil((mx - mn) / 4 / 2) * 2), lo = Math.floor(mn / tk) * tk, hi = Math.max(lo + tk * 4, Math.ceil(mx / tk) * tk);
    const Y = v => 190 - (v - lo) / (hi - lo) * 180, X = i => i / Math.max(1, n - 1) * 1000;
    const ticks = []; for (let v = lo; v <= hi + 1e-9; v += tk) ticks.push({ top: pct(Y(v)), label: String(v) });
    const line = vals.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' ');
    const xLabels = []; for (let j = 0; j < 7; j++) { const i = Math.round(j * (n - 1) / 6), q = X(i) / 1000; xLabels.push({ left: (q * 100).toFixed(2) + '%', shift: q < .04 ? '0' : q > .96 ? '-100%' : '-50%', top: '', bot: Hz <= 24 ? fT(times[i]) : fD(times[i]) }); }
    const fv = v => v.toFixed(1) + ' hPa';
    const refs = [];
    let hover = false;
    if (hov && hov.i < n) { const i = hov.i, q = X(i) / 1000; hover = { left: (q * 100).toFixed(2) + '%', top: pct(Y(vals[i])), shift: q > .6 ? 'calc(-100% - 20px)' : '0', time: fDT(times[i]), value: fv(vals[i]), dot: true }; }
    const chart = { ...pz, id: 'pr', refs, foot: [{ label: '', color: '#8C74DC', minVal: fv(mn), minWhen: fDT(times[vals.indexOf(mn)]), maxVal: fv(mx), maxWhen: fDT(times[vals.indexOf(mx)]) }], title: sel === '24h' ? 'Hourly Air Pressure (hPa) · last 24 hours' : 'Air Pressure (hPa)', note: sel === '24h' ? 'One reading per hour' : 'Barometric pressure at the sensor', color: '#7C4DDA', gid: 'pr-g', ticks, grid: ticks.map(t => t.top), line, area: line + ' L1000 190 L0 190 Z', isLine: true, bars: [], xLabels, hover, band: false, endTop: pct(Y(vals[n - 1])),
      minVal: fv(mn), minWhen: fDT(times[vals.indexOf(mn)]), maxVal: fv(mx), maxWhen: fDT(times[vals.indexOf(mx)]),
      onMove: e => { const r = e.currentTarget.getBoundingClientRect(), i = Math.max(0, Math.min(n - 1, Math.round((e.clientX - r.left) / r.width * (n - 1)))), c = this.state.prHover; if (!c || c.i !== i) this.setState({ prHover: { i } }); },
      onLeave: () => this.setState({ prHover: null }) };
    const now = H.v[N - 1], prev = H.v[N - 2], d = now - prev, up = d >= 0, d3 = now - H.v[N - 4], d24 = now - H.v[N - 25];
    const p24 = H.v.slice(-25), t24 = H.times.slice(-25), m24 = Math.min(...p24), x24 = Math.max(...p24);
    const tend = d3 > 1 ? ['Rising', '#E7F6EC', '#15803D'] : d3 < -1 ? ['Falling', '#FEF3C7', '#B45309'] : ['Steady', '#EEF3EF', '#4C6354'];
    const tn = prTend(d), sg = x => (x >= 0 ? '+' : '−') + Math.abs(x).toFixed(1) + ' hPa';
    const m0 = new Date(H.times[N - 1]); m0.setHours(0, 0, 0, 0); const iT = H.times.findIndex(t => t >= m0);
    const dV = H.v.slice(iT), dT = H.times.slice(iT), dHi = Math.max(...dV), dLo = Math.min(...dV);
    const ago24 = H.v[N - 25], ago7 = H.v[N - 169];
    const prStatsOld = [
      { label: 'Daily High', value: dHi.toFixed(1), unit: 'hPa', note: 'Today at ' + fT(dT[dV.indexOf(dHi)]), ink: '#0F1A14' },
      { label: 'Daily Low', value: dLo.toFixed(1), unit: 'hPa', note: 'Today at ' + fT(dT[dV.indexOf(dLo)]), ink: '#0F1A14' },
      { label: '24 Hour Change', value: sg(now - ago24).replace(' hPa', ''), unit: 'hPa', note: now.toFixed(1) + ' now − ' + ago24.toFixed(1) + ' 24 h ago', ink: now - ago24 >= 0 ? '#15803D' : '#C2410C' },
      { label: 'Weekly Change', value: sg(now - ago7).replace(' hPa', ''), unit: 'hPa', note: now.toFixed(1) + ' now − ' + ago7.toFixed(1) + ' 7 days ago', ink: now - ago7 >= 0 ? '#15803D' : '#C2410C' },
    ];
    const f = Math.max(0, Math.min(1, (now - 980) / 60));
    const w7 = H.v.slice(-169), t7 = H.times.slice(-169), w7mn = Math.min(...w7), w7mx = Math.max(...w7);
    const qa = [
      ['What is the air pressure right now?', 'Pressure is ' + now.toFixed(1) + ' hPa at 2:42 pm on 8 Oct, ' + (up ? 'up ' : 'down ') + Math.abs(d).toFixed(1) + ' hPa on the previous reading.'],
      ['Is pressure rising or falling?', tend[0] + '. Pressure has changed by ' + (d3 >= 0 ? '+' : '−') + Math.abs(d3).toFixed(1) + ' hPa over the last 3 hours. ' + (d3 < -1 ? 'A falling trend often comes before cloud, wind or rain.' : d3 > 1 ? 'A rising trend usually means settling, drier weather.' : 'A steady trend means no major weather change is signalled.')],
      ['How has pressure changed over the last 24 hours?', 'It ranged from ' + m24.toFixed(1) + ' hPa at ' + fDT(t24[p24.indexOf(m24)]) + ' to ' + x24.toFixed(1) + ' hPa at ' + fDT(t24[p24.indexOf(x24)]) + ', a net change of ' + (d24 >= 0 ? '+' : '−') + Math.abs(d24).toFixed(1) + ' hPa.'],
      ['Is a weather change likely?', Math.abs(d24) >= 6 ? 'Possibly. A ' + Math.abs(d24).toFixed(1) + ' hPa change in 24 hours is a fast move and often signals a front passing.' : 'Not strongly signalled. The 24-hour change of ' + Math.abs(d24).toFixed(1) + ' hPa is within normal day-to-day variation.'],
      ['Summarise the last 7 days', 'Over the last 7 days pressure ranged from ' + w7mn.toFixed(1) + ' hPa (' + fDT(t7[w7.indexOf(w7mn)]) + ') to ' + w7mx.toFixed(1) + ' hPa (' + fDT(t7[w7.indexOf(w7mx)]) + ').'],
      ['Is the sensor working properly?', 'Yes. The last reading arrived at 2:42 pm on 8 Oct on the 15-minute schedule over cellular.'],
    ];
    const q = (st.prQuery || '').trim().toLowerCase();
    const prQa = qa.map(([qq, a], i) => ({ q: qq, a, i })).filter(x => !q || x.q.toLowerCase().includes(q)).map(x => ({ q: x.q, a: x.a, open: st.prAiOpen === x.i, chevron: st.prAiOpen === x.i ? '▲' : '▼', toggle: () => this.setState(z => ({ prAiOpen: z.prAiOpen === x.i ? null : x.i })) }));
    return {
      isPressure: st.screen === 'pressure', prIcon: PR_ICON,
      prBack: () => this.setState({ screen: 'list', listKind: 'pressure', prHover: null }),
      prTabDash: (st.prTab || 'dash') === 'dash', prTabInsights: st.prTab === 'insights',
      prTabs: [['dash', 'Dashboard', 'M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z'], ['insights', 'Key Insights', 'M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5']].map(([k2, label, icon]) => { const on = (st.prTab || 'dash') === k2; return { label, icon, iconInk: k2 === 'insights' ? '#D4A017' : 'currentColor', iconFill: 'none', ink: on ? '#0E7C3A' : '#3F4B55', underline: on ? '#1AA34A' : 'transparent', go: () => this.setState({ prTab: k2, prHover: null }) }; }),
      prStats: (() => { const rv = H.v.slice(Math.max(0, E - hrs), E + 1), rt = H.times.slice(Math.max(0, E - hrs), E + 1), hi2 = Math.max(...rv), lo2 = Math.min(...rv), ch = rv[rv.length - 1] - rv[0];
        const RL = { '24h': '1D', '1w': '7D', '1m': '1M', '3m': '3M', '6m': '6M' }[sel] || 'Range';
        return [
          { label: 'Highest Pressure Recorded', value: hi2.toFixed(1), unit: 'hPa', note: 'Observed at ' + fDT(rt[rv.indexOf(hi2)]), ink: '#0F1A14' },
          { label: 'Lowest Pressure Recorded', value: lo2.toFixed(1), unit: 'hPa', note: 'Observed at ' + fDT(rt[rv.indexOf(lo2)]), ink: '#0F1A14' },
        ]; })(),
      prRanges: [['24h', '1D'], ['1w', '1W'], ['1m', '1M'], ['3m', '3M'], ['6m', '6M']].map(([k2, label]) => ({ label, color: sel === k2 ? '#0E7C3A' : '#6A746E', bg: sel === k2 ? '#E7F6EC' : '#fff', weight: sel === k2 ? '700' : '600', select: () => this.setState({ prRange: k2, prHover: null, prCustomOpen: false }) })),
      prCustomOpen: !!st.prCustomOpen,
      prToggleCustom: () => this.setState(s => ({ prCustomOpen: !s.prCustomOpen, prDraftFrom: s.prFrom || '2026-09-01', prDraftTo: s.prTo || '2026-09-30' })),
      prCancelCustom: () => this.setState({ prCustomOpen: false }),
      prApplyCustom: () => this.setState(s => { let a = s.prDraftFrom || lFrom, b = s.prDraftTo || lTo; if (a > b) [a, b] = [b, a]; return { prRange: 'custom', prFrom: a, prTo: b, prCustomOpen: false, prHover: null }; }),
      prDraftFrom: st.prDraftFrom || lFrom, prDraftTo: st.prDraftTo || lTo,
      onPrDraftFrom: e => this.setState({ prDraftFrom: e.target.value }), onPrDraftTo: e => this.setState({ prDraftTo: e.target.value }),
      prMinDate: (() => { const t = H.times[0]; return t.getFullYear() + '-' + pad(t.getMonth() + 1) + '-' + pad(t.getDate()); })(), prMaxDate: '2026-10-08',
      prCustomBg: sel === 'custom' ? '#E7F6EC' : '#fff', prCustomInk: sel === 'custom' ? '#0E7C3A' : '#3F4B45',
      prCustomLabel: sel === 'custom' ? fD(new Date(lFrom + 'T00:00:00')) + ' – ' + fD(new Date(lTo + 'T00:00:00')) : 'Custom',
      prCharts: [chart],
      prNow: { tendSoft: tn.label === 'Falling' ? '#FFEDD5' : tn.label === 'Rising' ? '#E3F4E8' : '#EEF2EF', tendSoftInk: tn.label === 'Falling' ? '#C2410C' : tn.label === 'Rising' ? '#15803D' : '#4C6354', tendLabel: tn.label, tendSolid: tn.solid, tendArrow: tn.arrow, value: now.toFixed(1), dash: (f * 100).toFixed(1) + ' 100', needle: 'rotate(' + (f * 180).toFixed(1) + ' 110 110)', tend: tend[0], tendBg: tend[1], tendInk: tend[2],
        delta: (up ? '+' : '−') + Math.abs(d).toFixed(1) + ' hPa', deltaInk: up ? '#15803D' : '#DC2626', deltaPath: up ? 'M12 5l6 7h-4v7h-4v-7H6z' : 'M12 19l-6-7h4V5h4v7h4z',
        min: m24.toFixed(1) + ' hPa', minAt: fDT(t24[p24.indexOf(m24)]), max: x24.toFixed(1) + ' hPa', maxAt: fDT(t24[p24.indexOf(x24)]) },
      prQa, prNoMatch: !prQa.length, prQuery: st.prQuery || '',
      onPrQueryChange: e => this.setState({ prQuery: e.target.value }),
    };
  }
  levelVals() {
    const st = this.state, sel = st.lvRange || '1w', N = LV_H.times.length, hov = st.lvHover;
    const TK = DEVICES.filter(d => d.kind === 'level'), selIds = (st.lvSel && st.lvSel.length ? st.lvSel : ['wl1']).filter(id => LV_TANKS[id]);
    const lFrom = st.lvFrom || '2026-09-01', lTo = st.lvTo || '2026-09-30';
    let hrs, step, E = N - 1;
    if (sel === 'custom') { const f = new Date(lFrom + 'T00:00:00'), t = new Date(lTo + 'T23:00:00'); E = Math.max(0, Math.min(N - 1, N - 1 - Math.round((LV_END - t) / 36e5))); hrs = Math.min(E, Math.max(24, Math.round((t - f) / 36e5))); step = hrs <= 336 ? 1 : hrs <= 1440 ? 6 : 24; }
    else [hrs, step] = LV_RANGE[sel];
    const pad = n => String(n).padStart(2, '0');
    const fT = t => (t.getHours() % 12 || 12) + ':' + pad(t.getMinutes()) + ' ' + (t.getHours() < 12 ? 'am' : 'pm');
    const fD = t => pad(t.getDate()) + ' ' + MON3[t.getMonth()];
    const fDT = t => fD(t) + ', ' + fT(t);
    const pct = y => (y / 200 * 100).toFixed(2) + '%';
    const tankOf = id => {
    const T = LV_TANKS[id], H = T.H, LV_TANK = T.tank, dv = TK.find(x => x.id === id);
    const zc = this.zoomCtl('lvZoom', 'lvHover', 'lv-' + sel + '-' + (sel === 'custom' ? lFrom + lTo : '') + id, Math.min(1, 6 / hrs), ''), zs = zc.zoomed ? st.lvZoom : { a: 0, b: 1 };
    const Ez = E - Math.round((1 - zs.b) * hrs), Hz = Math.max(4, Math.round((zs.b - zs.a) * hrs)), stz = zc.zoomed ? Math.max(1, Math.ceil(Hz / 300)) : step;
    const vals = [], times = [];
    for (let e = Ez; e >= Ez - Hz; e -= stz) { const a = H.pct.slice(Math.max(0, e - stz + 1), e + 1); vals.unshift(a.reduce((x, y) => x + y, 0) / a.length); times.unshift(H.times[e]); }
    const n = vals.length, mn = Math.min(...vals), mx = Math.max(...vals);
    const lo = Math.max(0, Math.floor((mn - 2) / 10) * 10), hi = Math.min(100, Math.ceil((mx + 2) / 10) * 10), tk = (hi - lo) / 4;
    const Y = v => 190 - (v - lo) / (hi - lo) * 180, X = i => i / Math.max(1, n - 1) * 1000;
    const ticks = []; for (let v = lo; v <= hi + 1e-9; v += tk) ticks.push({ top: pct(Y(v)), label: (+v.toFixed(1)) + '%' });
    const line = vals.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' ');
    const xLabels = []; const k = 7;
    if (n > 1) axTime(times[0].getTime(), times[n - 1].getTime(), k + 1).forEach(o => xLabels.push({ left: o.left, shift: o.shift, top: o.top, bot: o.sub }));
    const iMn = vals.indexOf(mn), iMx = vals.indexOf(mx), fv = v => v.toFixed(1) + '%';
    let hover = false;
    if (hov && hov.id === id && hov.i < n) { const i = hov.i, q = X(i) / 1000; hover = { left: (q * 100).toFixed(2) + '%', top: pct(Y(vals[i])), shift: q > .6 ? 'calc(-100% - 20px)' : '0', time: fDT(times[i]), value: fv(vals[i]) + ' · ' + (vals[i] / 100 * LV_TANK).toFixed(2) + ' m', dot: true }; }
    const chart = { ...zc, zoomLabel: zc.zoomed ? (stz === 1 ? 'Raw hourly · ' : 'Zoomed · ') + fDT(times[0]) + ' – ' + fDT(times[n - 1]) : '', id: 'lv-' + id, title: 'Water Level (%) · ' + dv.name, note: sel === '24h' ? 'Hourly readings · last 24 hours' : '', foot: [{ label: '', color: '#0EA5A5', minVal: fv(mn), minWhen: fDT(times[iMn]), maxVal: fv(mx), maxWhen: fDT(times[iMx]) }], color: '#0EA5A5', gid: 'lv-g-' + id, ticks, grid: ticks.map(t => t.top), line, area: line + ' L1000 190 L0 190 Z', isLine: true, bars: [], xLabels, hover, band: false, endTop: pct(Y(vals[n - 1])),
      minVal: fv(mn), minWhen: fDT(times[iMn]), maxVal: fv(mx), maxWhen: fDT(times[iMx]),
      onMove: e => { const r = e.currentTarget.getBoundingClientRect(), i = Math.max(0, Math.min(n - 1, Math.round((e.clientX - r.left) / r.width * (n - 1)))), c = this.state.lvHover; if (!c || c.id !== id || c.i !== i) this.setState({ lvHover: { id, i } }); },
      onLeave: () => this.setState({ lvHover: null }) };
    const now = H.pct[N - 1], prev = H.pct[N - 2], d = now - prev, up = d >= 0;
    const p24 = H.pct.slice(-25), t24 = H.times.slice(-25), m24 = Math.min(...p24), x24 = Math.max(...p24);
    const wy = 280 - 175 * now / 100;
    const scale = [0, 1, 2, 3, 4].map(j => ({ y: (280 - 43.75 * j).toFixed(1), top: ((280 - 43.75 * j) / 300 * 100).toFixed(2) + '%', label: (j * 25) + '%' }));
    const w7 = H.pct.slice(-169), t7 = H.times.slice(-169), iPk = w7.indexOf(Math.max(...w7.slice(0, 160))), iLow = w7.indexOf(Math.min(...w7));
    const rate = (w7[iPk] - w7[iLow]) / ((t7[iLow] - t7[iPk]) / 864e5);
    const days20 = rate > 0 ? (now - 20) / rate : null;
    const avg7 = w7.reduce((a, b) => a + b, 0) / w7.length;
    const used24 = p24.reduce((s, v, i) => i && v < p24[i - 1] ? s + p24[i - 1] - v : s, 0);
    const avgT = H.pct.slice(-24).reduce((a, b) => a + b, 0) / 24, avgY = H.pct.slice(-48, -24).reduce((a, b) => a + b, 0) / 24;
    const lowI = w7.indexOf(Math.min(...w7));
    const cm = x => (x / 100 * LV_TANK * 100).toFixed(0) + ' cm';
    const qaOld = [
      ['How full is the tank right now?', dv.name + ' is at ' + now.toFixed(1) + '% (' + (now / 100 * LV_TANK).toFixed(2) + ' m of ' + LV_TANK + ' m) at 2:00 pm on 8 Oct, ' + (up ? 'up ' : 'down ') + Math.abs(d).toFixed(1) + '% on the previous reading.'],
      ['Has the tank been refilled recently?', 'Yes. The level fell to ' + w7[iLow].toFixed(1) + '% at ' + fDT(t7[iLow]) + ' and has since risen to ' + now.toFixed(1) + '%, which points to a refill or pump run.'],
      ['How fast is the level dropping?', 'Between ' + fDT(t7[iPk]) + ' and ' + fDT(t7[iLow]) + ' the level fell from ' + w7[iPk].toFixed(1) + '% to ' + w7[iLow].toFixed(1) + '%, about ' + rate.toFixed(1) + '% (' + (rate / 100 * LV_TANK * 100).toFixed(0) + ' cm) per day.'],
      ['When will the tank reach 20%?', days20 ? 'At the recent rate of ' + rate.toFixed(1) + '% per day, and with no refill, the tank would reach 20% in about ' + days20.toFixed(1) + ' days.' : 'The level is not currently falling.'],
      ['Summarise the last 7 days', 'Over the last 7 days the level ranged from ' + Math.min(...w7).toFixed(1) + '% to ' + Math.max(...w7).toFixed(1) + '%, averaging ' + avg7.toFixed(1) + '%.'],
      ['Is the sensor working properly?', 'Yes. The last reading arrived at 2:00 pm on 8 Oct on the 15-minute schedule. Battery is at 88% and signal strength is 24, rated Excellent.'],
    ];
    const qa = [
      qaOld[2],
      qaOld[4],
      ['How much has the level dropped in the last 24 hours?', 'Across the last 24 hours the level fell a total of ' + used24.toFixed(1) + '% (' + cm(used24) + '). It is now ' + now.toFixed(1) + '% (' + (now / 100 * LV_TANK).toFixed(2) + ' m), ' + (now - p24[0] >= 0 ? 'up ' : 'down ') + Math.abs(now - p24[0]).toFixed(1) + '% on this time yesterday.'],
      ['When was the tank last refilled?', 'The level bottomed out at ' + w7[iLow].toFixed(1) + '% at ' + fDT(t7[iLow]) + ' and has since risen to ' + now.toFixed(1) + '%, which points to a refill or pump run after that time.'],
      ['How many days until the tank is low?', days20 ? 'At the recent drop rate of ' + rate.toFixed(1) + '% per day, and with no refill, the tank would reach 20% in about ' + days20.toFixed(1) + ' days.' : 'The level is not currently falling, so no low point is forecast.'],
      ['What was the lowest level this week?', 'The lowest reading in the last 7 days was ' + w7[lowI].toFixed(1) + '% (' + (w7[lowI] / 100 * LV_TANK).toFixed(2) + ' m) at ' + fDT(t7[lowI]) + '.'],
      (() => { const hi7 = Math.max(...w7), i = w7.indexOf(hi7); return ['What was the highest level recorded this week?', 'The highest reading in the last 7 days was ' + hi7.toFixed(1) + '% (' + (hi7 / 100 * LV_TANK).toFixed(2) + ' m) at ' + fDT(t7[i]) + '.']; })(),
      (() => { let bd = 0, bi = 1; for (let i = 1; i < H.pct.length; i++) { const dd = H.pct[i - 1] - H.pct[i]; if (dd > bd) { bd = dd; bi = i; } } return ['When was the largest drop in water level recorded in the whole time period?', 'The largest drop between two readings was ' + bd.toFixed(1) + '% (' + cm(bd) + '), from ' + H.pct[bi - 1].toFixed(1) + '% at ' + fDT(H.times[bi - 1]) + ' to ' + H.pct[bi].toFixed(1) + '% at ' + fDT(H.times[bi]) + '.']; })(),
      ['What was the tank level at this time yesterday?', 'At ' + fDT(t24[0]) + ' the tank was at ' + p24[0].toFixed(1) + '% (' + (p24[0] / 100 * LV_TANK).toFixed(2) + ' m). It is now ' + now.toFixed(1) + '%, ' + (now - p24[0] >= 0 ? 'up ' : 'down ') + Math.abs(now - p24[0]).toFixed(1) + '% (' + cm(Math.abs(now - p24[0])) + ').'],
      ['How does today compare with yesterday?', 'The average level over the last 24 hours was ' + avgT.toFixed(1) + '%, against ' + avgY.toFixed(1) + '% for the 24 hours before, a change of ' + (avgT - avgY >= 0 ? '+' : '−') + Math.abs(avgT - avgY).toFixed(1) + '%.'],
    ];
    const tank = { name: dv.name, pct: Math.round(now) + '%', m: (now / 100 * LV_TANK).toFixed(2) + ' m', wy: wy.toFixed(1), wh: (280 - wy).toFixed(1), top: (Math.min(250, Math.max(150, wy + 6)) / 300 * 100).toFixed(2) + '%', scale,
        delta: (up ? '+' : '−') + Math.abs(d).toFixed(1) + '%', deltaM: '(' + (up ? '+' : '−') + (Math.abs(d) / 100 * LV_TANK).toFixed(2) + ' m)', deltaInk: up ? '#15803D' : '#DC2626', deltaPath: up ? 'M12 5l6 7h-4v7h-4v-7H6z' : 'M12 19l-6-7h4V5h4v7h4z' };
    return { tank, charts: [chart], qa };
    };
    const rows = selIds.map(tankOf), qa = rows[0].qa;
    const q = (st.lvQuery || '').trim().toLowerCase();
    const lvQa = qa.map(([qq, a], i) => ({ q: qq, a, i })).filter(x => !q || x.q.toLowerCase().includes(q)).map(x => ({ q: x.q, a: x.a, open: st.lvAiOpen === x.i, chevron: st.lvAiOpen === x.i ? '▲' : '▼', toggle: () => this.setState(z => ({ lvAiOpen: z.lvAiOpen === x.i ? null : x.i })) }));
    return {
      isLevel: st.screen === 'level', lvIcon: LEVEL_ICON,
      lvBack: () => this.setState({ screen: 'list', listKind: 'level', lvHover: null }),
      lvTabDash: (st.lvTab || 'dash') === 'dash', lvTabInsights: st.lvTab === 'insights',
      lvTabs: [['dash', 'Dashboard', 'M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z'], ['insights', 'Key Insights', 'M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5']].map(([k2, label, icon]) => { const on = (st.lvTab || 'dash') === k2; return { label, icon, iconInk: k2 === 'insights' ? '#D4A017' : 'currentColor', iconFill: 'none', ink: on ? '#0E7C3A' : '#3F4B55', underline: on ? '#1AA34A' : 'transparent', go: () => this.setState({ lvTab: k2, lvHover: null }) }; }),
      lvRanges: [['24h', '1D'], ['1w', '1W'], ['1m', '1M'], ['3m', '3M'], ['6m', '6M']].map(([k2, label]) => ({ label, color: sel === k2 ? '#0E7C3A' : '#6A746E', bg: sel === k2 ? '#E7F6EC' : '#fff', weight: sel === k2 ? '700' : '600', select: () => this.setState({ lvRange: k2, lvHover: null, lvCustomOpen: false }) })),
      lvCustomOpen: !!st.lvCustomOpen,
      lvToggleCustom: () => this.setState(s => ({ lvCustomOpen: !s.lvCustomOpen, lvDraftFrom: s.lvFrom || '2026-09-01', lvDraftTo: s.lvTo || '2026-09-30' })),
      lvCancelCustom: () => this.setState({ lvCustomOpen: false }),
      lvApplyCustom: () => this.setState(s => { let f = s.lvDraftFrom || lFrom, t = s.lvDraftTo || lTo; if (f > t) [f, t] = [t, f]; return { lvRange: 'custom', lvFrom: f, lvTo: t, lvCustomOpen: false, lvHover: null }; }),
      lvDraftFrom: st.lvDraftFrom || lFrom, lvDraftTo: st.lvDraftTo || lTo,
      onLvDraftFrom: e => this.setState({ lvDraftFrom: e.target.value }), onLvDraftTo: e => this.setState({ lvDraftTo: e.target.value }),
      lvMinDate: (() => { const t = LV_H.times[0]; return t.getFullYear() + '-' + pad(t.getMonth() + 1) + '-' + pad(t.getDate()); })(), lvMaxDate: '2026-10-08',
      lvCustomBg: sel === 'custom' ? '#E7F6EC' : '#fff', lvCustomInk: sel === 'custom' ? '#0E7C3A' : '#3F4B45',
      lvCustomLabel: sel === 'custom' ? fD(new Date(lFrom + 'T00:00:00')) + ' – ' + fD(new Date(lTo + 'T00:00:00')) : 'Custom',
      lvRows: rows.map(r => ({ tank: r.tank, charts: r.charts })),
      lvSingle: selIds.length <= 1, lvMulti: selIds.length > 1,
      lvMenuOpen: !!st.lvMenuOpen, toggleLvMenu: () => this.setState(s => ({ lvMenuOpen: !s.lvMenuOpen })),
      lvSelLabel: selIds.length === 1 ? TK.find(x => x.id === selIds[0]).name : selIds.length + ' tanks selected',
      lvCountLabel: selIds.length + ' of ' + TK.length + ' selected',
      lvOptions: TK.map(dv => { const on = selIds.includes(dv.id); return { name: dv.name, serial: dv.serial + (dv.note || ''), tick: on ? '✓' : '', boxBorder: on ? '#1AA34A' : '#CFD6D1', boxBg: on ? '#1AA34A' : '#fff',
        toggle: () => this.setState(s => { const cur = (s.lvSel && s.lvSel.length ? s.lvSel : ['wl1']).slice(); const i = cur.indexOf(dv.id); if (i >= 0) { if (cur.length > 1) cur.splice(i, 1); } else cur.push(dv.id); return { lvSel: TK.map(x => x.id).filter(x => cur.includes(x)), lvHover: null }; }) }; }),
      lvQa, lvNoMatch: !lvQa.length, lvQuery: st.lvQuery || '',
      onLvQueryChange: e => this.setState({ lvQuery: e.target.value }),
    };
  }
  leafVals() {
    const st = this.state, sel = st.leafRange || '3m', H = LEAF_H, N = H.times.length, hov = st.leafHover;
    const lFrom = st.leafFrom || '2026-09-01', lTo = st.leafTo || '2026-09-30';
    let hrs, step, E = N - 1;
    if (sel === 'custom') { const f = new Date(lFrom + 'T00:00:00'), t = new Date(lTo + 'T23:00:00'); E = Math.max(0, Math.min(N - 1, N - 1 - Math.round((LEAF_END - t) / 36e5))); hrs = Math.min(E, Math.max(24, Math.round((t - f) / 36e5))); step = hrs <= 72 ? 1 : hrs <= 336 ? 2 : hrs <= 1440 ? 8 : 24; }
    else [hrs, step] = LEAF_RANGE[sel];
    const pad = n => String(n).padStart(2, '0');
    const fT = t => (t.getHours() % 12 || 12) + ':' + pad(t.getMinutes()) + ' ' + (t.getHours() < 12 ? 'am' : 'pm');
    const fD = t => t.getDate() + ' ' + MON3[t.getMonth()];
    const fDT = t => fD(t) + ', ' + fT(t);
    const pct = y => (y / 200 * 100).toFixed(2) + '%';
    const nice = x => { const p = Math.pow(10, Math.floor(Math.log10(x))), m = x / p; return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 5 ? 5 : 10) * p; };
    const lz = this.zoomCtl('leafZoom', 'leafHover', 'leaf-' + sel + (sel === 'custom' ? lFrom + lTo : ''), Math.min(1, 6 / hrs), ''), lzs = lz.zoomed ? st.leafZoom : { a: 0, b: 1 };
    const Ez = E - Math.round((1 - lzs.b) * hrs), Hz = Math.max(4, Math.round((lzs.b - lzs.a) * hrs)), stz = lz.zoomed ? Math.max(1, Math.ceil(Hz / 300)) : step;
    const agg = key => { const v = [], t = []; for (let e = Ez; e >= Ez - Hz; e -= stz) { const a = H[key].slice(Math.max(0, e - stz + 1), e + 1); v.unshift(a.reduce((x, y) => x + y, 0) / a.length); t.unshift(H.times[e]); } return { v, t }; };
    const short = Hz <= 72;
    const chart = o => {
      const vals = o.vals, times = o.times, n = vals.length, mn = Math.min(...vals), mx = Math.max(...vals);
      let lo = o.lo, hi = o.hi, tk = o.tick;
      if (lo == null) { tk = nice(((mx - mn) || 1) / 4); lo = Math.floor(mn / tk) * tk; hi = Math.ceil(mx / tk) * tk; if (hi === lo) hi = lo + tk; }
      const Y = v => 190 - (v - lo) / (hi - lo) * 180, X = i => o.bars ? (i + .5) / n * 1000 : i / Math.max(1, n - 1) * 1000;
      const ticks = []; for (let v = lo; v <= hi + 1e-9; v += tk) ticks.push({ top: pct(Y(v)), label: (+v.toFixed(2)).toString() });
      const line = o.bars ? '' : vals.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' ');
      const bw = 1000 / n * .6;
      const bars = o.bars ? vals.map((v, i) => ({ x: (X(i) - bw / 2).toFixed(1), y: Y(v).toFixed(1), w: bw.toFixed(1), h: (190 - Y(v)).toFixed(1), op: hov && hov.id === o.id && hov.i !== i ? .45 : .9 })) : [];
      const k = o.bars ? Math.min(n, 8) : Math.min(6, n), xLabels = [];
      for (let j = 0; j < k; j++) { const i = Math.round(j * (n - 1) / Math.max(1, k - 1)), q = X(i) / 1000; xLabels.push({ left: (q * 100).toFixed(2) + '%', shift: o.bars ? '-50%' : q < .04 ? '0' : q > .96 ? '-100%' : '-50%', top: short && !o.bars ? fT(times[i]).replace(':00', '') : '', bot: fD(times[i]) }); }
      const iMn = vals.indexOf(mn), iMx = vals.indexOf(mx), u = o.unit === '%' ? '%' : ' ' + o.unit, fv = v => v.toFixed(o.dec) + u;
      const when = i => o.bars ? fD(times[i]) : short ? fDT(times[i]) : fD(times[i]);
      let hover = false;
      if (hov && hov.id === o.id && hov.i < n) { const i = hov.i, q = X(i) / 1000; hover = { left: (q * 100).toFixed(2) + '%', top: pct(Y(vals[i])), shift: q > .6 ? 'calc(-100% - 20px)' : '0', time: o.bars ? fD(times[i]) : short ? fDT(times[i]) : fD(times[i]), value: fv(vals[i]), dot: !o.bars }; }
      return {
        ...lz, id: o.id, title: o.title, note: o.note || '', color: o.color, gid: 'lf-' + o.id, ticks, grid: ticks.map(t => t.top), line, area: line ? line + ' L1000 190 L0 190 Z' : '', isLine: !o.bars, bars, xLabels, hover,
        band: o.band ? { top: pct(Y(o.band[1])), height: ((Y(o.band[0]) - Y(o.band[1])) / 200 * 100).toFixed(2) + '%', label: o.band[2] } : false,
        endTop: o.bars ? '-999px' : pct(Y(vals[n - 1])),
        minVal: fv(mn), minWhen: fDT(times[iMn]), maxVal: fv(mx), maxWhen: fDT(times[iMx]),
        onMove: e => { const r = e.currentTarget.getBoundingClientRect(), f = (e.clientX - r.left) / r.width, i = Math.max(0, Math.min(n - 1, o.bars ? Math.floor(f * n) : Math.round(f * (n - 1)))), c = this.state.leafHover; if (!c || c.id !== o.id || c.i !== i) this.setState({ leafHover: { id: o.id, i } }); },
        onLeave: () => this.setState({ leafHover: null }),
      };
    };
    const tA = agg('temp'), wA = agg('wet');
    const charts = [
      chart({ id: 'lt', title: 'Leaf Temperature (°C)', unit: '°C', dec: 1, color: '#EA580C', vals: tA.v, times: tA.t }),
      chart({ id: 'lw', title: 'Leaf Wetness (%)', unit: '%', dec: 0, color: '#0284C7', vals: wA.v, times: wA.t, lo: 0, hi: 100, tick: 25 }),
    ];
    const t24 = H.temp.slice(-25), w24 = H.wet.slice(-25), tm24 = H.times.slice(-25);
    const tNow = t24[24], tPrev = t24[23], wNow = w24[24], wPrev = w24[23];
    const spark3 = (arr, endV) => { const s = arr.slice(-4).slice(); if (endV != null) s[3] = endV; const v = []; for (let i = 0; i < 13; i++) { const p = i / 4, a = Math.floor(p), b = Math.min(3, a + 1), f = p - a; v.push(s[a] + (s[b] - s[a]) * f + (i % 4 && i < 12 ? (leafRnd(i + arr.length) - .5) * Math.max(.3, Math.abs(s[b] - s[a]) * .25) : 0)); } const sp = wSpark(v, 'line'), id = endV != null ? 'w' : 't', hv = st.leafSparkHov, end = LEAF_END.getTime(), u = id === 'w' ? '%' : ' °C', dec = 1;
      const hits = v.map((_, i) => ({ enter: () => { const c = this.state.leafSparkHov; if (!c || c.id !== id || c.i !== i) this.setState({ leafSparkHov: { id, i } }); } }));
      let active = false;
      if (hv && hv.id === id) { const i = hv.i, p = sp.pts[i], t = new Date(end - (12 - i) * 15 * 6e4); active = { left: 'calc(' + p.x.toFixed(1) + '% - 3.5px)', top: 'calc(' + (p.y / 30 * 100).toFixed(1) + '% - 3.5px)', tipLeft: p.x.toFixed(1) + '%', shift: p.x < 20 ? '0' : p.x > 80 ? '-100%' : '-50%', value: v[i].toFixed(dec) + u, when: fDT(t) }; }
      return { ...sp, hits, active, leave: () => this.setState({ leafSparkHov: null }) }; };
    const dlt = (d, dec, u) => ({ delta: (d >= 0 ? '+' : '−') + Math.abs(d).toFixed(dec) + u, deltaPath: d >= 0 ? 'M12 5l6 7h-4v7h-4v-7H6z' : 'M12 19l-6-7h4V5h4v7h4z' });
    const wetHrs = w24.slice(1).filter(x => x >= 50).length;
    let lastWet = -1; for (let i = N - 1; i >= 0; i--) if (H.wet[i] > 0) { lastWet = i; break; }
    const wetIdx = w24.map((x, i) => x >= 50 ? i : -1).filter(i => i > 0);
    const wetTemps = wetIdx.map(i => t24[i]), wetAvgT = wetTemps.length ? wetTemps.reduce((a, b) => a + b, 0) / wetTemps.length : null;
    const wetStatus = wNow >= 50 ? ['Wet', '#E0F2FE', '#0369A1'] : wNow >= 10 ? ['Damp', '#FEF3C7', '#B45309'] : ['Dry', '#E7F6EC', '#15803D'];
    const tMin = Math.min(...t24), tMax = Math.max(...t24), wMax = Math.max(...w24), wMin = Math.min(...w24);
    const risk = wetHrs >= 10 && wetAvgT >= 15 && wetAvgT <= 25 ? 'High' : wetHrs >= 6 ? 'Moderate' : 'Low';
    const qa = [
      ['Are the leaves wet right now?', 'No. Leaf wetness is ' + wNow + '% at 6:05 pm, so the leaf surface is dry. The last wet reading was at ' + (lastWet >= 0 ? fDT(H.times[lastWet]) : '—') + '.'],
      ['How long were the leaves wet in the last 24 hours?', wetHrs ? 'Leaves were wet (50% or more) for ' + wetHrs + ' hours, from ' + fT(tm24[wetIdx[0]]) + ' to ' + fT(tm24[wetIdx[wetIdx.length - 1]]) + ' on ' + fD(tm24[wetIdx[0]]) + '. Wetness peaked at ' + wMax + '%.' : 'Leaves did not reach 50% wetness in the last 24 hours.'],
      ['Is there a fungal disease risk?', 'Risk is ' + risk.toLowerCase() + '. Many fungal leaf diseases need about 6 to 10 hours of continuous leaf wetness at 15–25 °C to infect. The last 24 hours had ' + wetHrs + ' wet hours' + (wetAvgT != null ? ' at an average leaf temperature of ' + wetAvgT.toFixed(1) + ' °C.' : '.')],
      ['What is the leaf temperature doing?', 'Leaf temperature is ' + tNow.toFixed(1) + ' °C, ' + (tNow - tPrev >= 0 ? 'up ' : 'down ') + Math.abs(tNow - tPrev).toFixed(1) + ' °C on the previous reading. Over 24 hours it ranged from ' + tMin.toFixed(1) + ' °C to ' + tMax.toFixed(1) + ' °C.'],
      ['Is it a good time to spray?', wNow < 10 ? 'Leaves are dry, so spray will not be diluted by surface moisture. Check wind and Delta T on the weather station before spraying.' : 'Leaves are still wet. Wait until wetness falls below 10% so spray is not diluted or washed off.'],
      ['Is the sensor working properly?', 'Yes. The last message (#2518) arrived at 6:05 pm on 2 Oct over cellular. Battery is at 50% and signal strength is 22, rated Excellent.'],
    ];
    const q = (st.leafQuery || '').trim().toLowerCase();
    const leafQa = qa.map(([qq, a], i) => ({ q: qq, a, i })).filter(x => !q || x.q.toLowerCase().includes(q)).map(x => ({ q: x.q, a: x.a, open: st.leafAiOpen === x.i, chevron: st.leafAiOpen === x.i ? '▲' : '▼', toggle: () => this.setState(z => ({ leafAiOpen: z.leafAiOpen === x.i ? null : x.i })) }));
    return {
      isLeaf: st.screen === 'leaf', leafIcon: LEAF_ICON,
      leafBack: () => this.setState({ screen: 'list', listKind: 'leaf', leafHover: null }),
      leafTabDash: (st.leafTab || 'dash') === 'dash', leafTabInsights: st.leafTab === 'insights',
      leafTabs: [['dash', 'Dashboard', 'M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z'], ['insights', 'Key Insights', 'M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5']].map(([k, label, icon]) => {
        const on = (st.leafTab || 'dash') === k;
        return { label, icon, iconInk: k === 'insights' ? '#D4A017' : 'currentColor', iconFill: 'none', ink: on ? '#0E7C3A' : '#3F4B55', underline: on ? '#1AA34A' : 'transparent', go: () => this.setState({ leafTab: k, leafHover: null }) };
      }),
      leafRanges: [['24h', '1D'], ['1w', '1W'], ['1m', '1M'], ['3m', '3M'], ['6m', '6M']].map(([k, label]) => ({ label, color: sel === k ? '#0E7C3A' : '#6A746E', bg: sel === k ? '#E7F6EC' : '#fff', weight: sel === k ? '700' : '600', select: () => this.setState({ leafRange: k, leafHover: null, leafCustomOpen: false }) })),
      leafCustomOpen: !!st.leafCustomOpen,
      leafToggleCustom: () => this.setState(s => ({ leafCustomOpen: !s.leafCustomOpen, leafDraftFrom: s.leafFrom || '2026-09-01', leafDraftTo: s.leafTo || '2026-09-30' })),
      leafCancelCustom: () => this.setState({ leafCustomOpen: false }),
      leafApplyCustom: () => this.setState(s => { let f = s.leafDraftFrom || lFrom, t = s.leafDraftTo || lTo; if (f > t) [f, t] = [t, f]; return { leafRange: 'custom', leafFrom: f, leafTo: t, leafCustomOpen: false, leafHover: null }; }),
      leafDraftFrom: st.leafDraftFrom || lFrom, leafDraftTo: st.leafDraftTo || lTo,
      onLeafDraftFrom: e => this.setState({ leafDraftFrom: e.target.value }), onLeafDraftTo: e => this.setState({ leafDraftTo: e.target.value }),
      leafMinDate: (() => { const d = H.times[0]; return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); })(), leafMaxDate: '2026-10-02',
      leafCustomBg: sel === 'custom' ? '#E7F6EC' : '#fff', leafCustomInk: sel === 'custom' ? '#0E7C3A' : '#3F4B45',
      leafCustomLabel: sel === 'custom' ? fD(new Date(lFrom + 'T00:00:00')) + ' – ' + fD(new Date(lTo + 'T00:00:00')) : 'Custom',
      leafTempSpark: spark3(H.temp, null), leafWetSpark: spark3(H.wet, 54.2),
      leafCharts: charts,
      leafTemp: { value: tNow.toFixed(1), pos: Math.max(0, Math.min(100, (tNow + 60) / 260 * 100)).toFixed(1) + '%', ...dlt(tNow - tPrev, 1, ' °C'), deltaInk: tNow - tPrev < 0 ? '#0284C7' : '#EA580C', min: tMin.toFixed(1) + ' °C', minAt: fDT(tm24[t24.indexOf(tMin)]), max: tMax.toFixed(1) + ' °C', maxAt: fDT(tm24[t24.indexOf(tMax)]) },
      leafWet: { value: '54.2', needle: 'rotate(' + (54.2 * 1.8).toFixed(1) + ' 110 110)', ...dlt(wNow - wPrev, 0, '%'), deltaInk: wNow - wPrev < 0 ? '#DC2626' : '#15803D', dash: wNow + ' 100', fillOp: wNow > 0 ? 1 : 0, status: wetStatus[0], statusBg: wetStatus[1], statusInk: wetStatus[2], min: '22.3%', minAt: fDT(tm24[w24.indexOf(wMin)]), max: '79%', maxAt: fDT(tm24[w24.indexOf(wMax)]), wetHrs: wetHrs + ' h', lastWet: lastWet >= 0 ? fT(H.times[lastWet]) : '—' },
      leafQa, leafNoMatch: !leafQa.length, leafQuery: st.leafQuery || '',
      onLeafQueryChange: e => this.setState({ leafQuery: e.target.value }),
    };
  }
  gasVals() {
    const st = this.state, gasSel = st.gasRange || '1w', cSpan = (new Date(st.customTo || '2026-09-30') - new Date(st.customFrom || '2026-09-01')) / 864e5 + 1, range = gasSel !== 'custom' ? gasSel : cSpan <= 2 ? '24h' : cSpan <= 10 ? '1w' : cSpan <= 45 ? '1m' : cSpan <= 120 ? '3m' : '6m', solo = st.gasSolo || {}, hov = st.gasHover;
    const { n, step } = GAS_RANGE[range];
    const T = 14, B = 226, W = 1000, H = 240, yPct = y => (y / H * 100).toFixed(2) + '%';
    const s24 = k => gasSeries(k, '24h');
    const kpis = ['temp', 'hum', 'pres', 'co2', 'ch4', 'odour', 'co', 'nh3'].map((k, i) => {
      const m = GAS_M[k], s = s24(k), v = s.vals, now = v[v.length - 1], prev = v[v.length - 2], d = now - prev;
      const tail = v.slice(-13), mn = Math.min(...tail), mx = Math.max(...tail), sp = (mx - mn) || 1;
      const pts = tail.map((x, j) => [j / (tail.length - 1) * 100, 27 - (x - mn) / sp * 24]);
      const spark = pts.map((p, j) => (j ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
      const up = d >= 0, sev = gasStatus(m, now);
      const deltaColor = m.neutral ? '#4C6354' : up ? '#B45309' : '#15803D';
      return {
        label: m.label, unit: m.unit, icon: m.icon, color: m.color, tint: m.tint,
        value: gasFmt(m, now), status: m.neutral ? 'Live' : sev.label, statusBg: m.neutral ? '#EEF3EF' : sev.bg, statusInk: m.neutral ? '#4C6354' : sev.ink,
        delta: (up ? '+' : '−') + Math.abs(d).toFixed(m.dec === 0 ? 0 : m.dec) + ' ' + m.unit, deltaColor,
        deltaPath: up ? 'M12 5l6 7h-4v7h-4v-7H6z' : 'M12 19l-6-7h4V5h4v7h4z',
        prev: gasFmt(m, prev), prevTime: (() => { const t = s.times[s.times.length - 2]; return (t.getHours() % 12 || 12) + ':00 ' + (t.getHours() < 12 ? 'am' : 'pm'); })(),
        range24: gasFmt(m, Math.min(...v)) + '–' + gasFmt(m, Math.max(...v)),
        spark, area: spark + ' L100 30 L0 30 Z', delay: (i * 0.06).toFixed(2) + 's',
      };
    });
    const charts = GAS_CHARTS.map(c => {
      const soloKey = solo[c.id];
      const ser = c.series.map(([k, side]) => ({ k, side, m: GAS_M[k], s: gasSeries(k, range) }));
      const vis = ser.filter(x => !soloKey || x.k === soloKey);
      const axes = {};
      ['l', 'r'].forEach(side => {
        const on = vis.filter(x => x.side === side); if (!on.length) return;
        const all = on.flatMap(x => x.s.vals);
        if (c.limit && on.some(x => x.k === c.limit[0]) && Math.max(...all) >= c.limit[1] * 0.6) all.push(c.limit[1]);
        axes[side] = gasAxis(all);
      });
      const Y = (side, v) => { const a = axes[side]; return B - (v - a.lo) / (a.hi - a.lo) * (B - T); };
      const xs = Array.from({ length: n }, (_, i) => i / (n - 1) * W);
      const lines = vis.map(x => {
        const ys = x.s.vals.map(v => Y(x.side, v)), d = gasSmooth(xs, ys);
        return { d, color: x.m.color, area: vis.length === 1 ? d + ' L' + W + ' ' + B + ' L0 ' + B + ' Z' : '' };
      });
      const tickList = side => axes[side] ? axes[side].ticks.map(v => ({ top: yPct(Y(side, v)), label: v.toFixed(axes[side].dec) })) : [];
      const mainSide = axes.l ? 'l' : 'r';
      const grid = axes[mainSide].ticks.map(v => yPct(Y(mainSide, v)));
      const thresholds = [];
      if (c.limit) { const lx = vis.find(x => x.k === c.limit[0]); if (lx) { const y = Y(lx.side, c.limit[1]); if (y >= T - 1 && y <= B) thresholds.push({ top: yPct(y), label: c.limit[2], color: '#DC2626' }); } }
      const every = range === '24h' ? 4 : range === '1w' ? 8 : 5;
      const xLabels = [];
      for (let i = (n - 1) % every; i < n; i += every) {
        const t = ser[0].s.times[i], p = i / (n - 1);
        let h = t.getHours() % 12 || 12;
        xLabels.push({ left: (p * 100).toFixed(2) + '%', shift: p < .04 ? '0' : p > .96 ? '-100%' : '-50%', time: range === '24h' ? h + ' ' + (t.getHours() < 12 ? 'am' : 'pm') : '', date: wFmtDate(t) });
      }
      let hover = false;
      if (hov && hov.id === c.id && hov.i < n) {
        const i = hov.i, p = i / (n - 1);
        hover = {
          left: (p * 100).toFixed(2) + '%', shift: p > .6 ? 'calc(-100% - 20px)' : '0',
          time: range !== '24h' && range !== '1w' ? wFmtDate(ser[0].s.times[i]) : gasTimeLabel(ser[0].s.times[i], true),
          dots: vis.map(x => ({ top: yPct(Y(x.side, x.s.vals[i])), color: x.m.color })),
          rows: vis.map(x => ({ label: x.m.label, value: gasFmt(x.m, x.s.vals[i]) + ' ' + x.m.unit, color: x.m.color })),
        };
      }
      return {
        id: c.id, title: c.title, sub: c.sub, span: c.span || 'auto', lines, grid, thresholds, xLabels, hover,
        leftTicks: tickList('l'), rightTicks: tickList('r'), rightCol: c.series.length > 1 ? '44px' : '0px',
        legend: ser.map(x => {
          const off = soloKey && soloKey !== x.k;
          return { label: x.m.label + ' (' + x.m.unit + ')', swatch: off ? '#CFD6D1' : x.m.color, ink: off ? '#A6AEA9' : '#1F2A24', bg: off ? '#F7FAF8' : '#fff', border: off ? '#EDF1EE' : '#E5E8E6',
            toggle: () => this.setState(s => ({ gasSolo: { ...s.gasSolo, [c.id]: s.gasSolo[c.id] === x.k || ser.length === 1 ? null : x.k }, gasHover: null })) };
        }),
        onMove: e => {
          const r = e.currentTarget.getBoundingClientRect();
          const i = Math.max(0, Math.min(n - 1, Math.round((e.clientX - r.left) / r.width * (n - 1))));
          const h = this.state.gasHover;
          if (!h || h.id !== c.id || h.i !== i) this.setState({ gasHover: { id: c.id, i } });
        },
        onLeave: () => this.setState({ gasHover: null }),
      };
    });

    const PT = 10, PB = 190, PH = 200, pPct = y => (y / PH * 100).toFixed(2) + '%';
    const GINFO = {
      co2: { limit: '3,000 ppm', ref: 'CIGR (International Commission of Agricultural and Biosystems Engineering) recommended maximum CO₂ concentration in livestock buildings.' },
      nh3: { limit: '25 ppm', ref: 'Safe Work Australia Workplace Exposure Standard for ammonia, 8-hour time-weighted average.' },
      co: { limit: '30 ppm', ref: 'Safe Work Australia Workplace Exposure Standard for carbon monoxide, 8-hour time-weighted average.' },
    };
    const GFULL = { temp: 'Temperature', hum: 'Humidity', pres: 'Pressure', co2: 'Carbon Dioxide (CO₂)', nh3: 'Ammonia (NH₃)', ch4: 'Methane (CH₄)', co: 'Carbon Monoxide (CO)', odour: 'Odour' };
    const gasPanels = ['temp', 'hum', 'pres', 'co2', 'nh3', 'ch4', 'co', 'odour'].map((k, pi) => {
      const m = GAS_M[k], g = GAS_GAUGE[k], v24 = s24(k).vals, now = v24[v24.length - 1], prev = v24[v24.length - 2], d = now - prev;
      const zoneOf = x => g.zones.find(z => x < z[0]) || g.zones[g.zones.length - 1];
      const z = zoneOf(now), zc = z[1] === 'n' ? [m.color, m.tint, '#4C6354'] : GZC[z[1]];
      const frac = x => Math.max(0, Math.min(1, (x - g.min) / (g.max - g.min)));
      const p = frac(now);
      let lo0 = g.min;
      const bands = g.zones.filter(zz => zz[1] !== 'n').map(zz => { const a0 = -120 + frac(lo0) * 240, a1 = -120 + frac(zz[0]) * 240; lo0 = zz[0]; return { d: gArc(a0 + 1.5, a1 - 1.5, 91), color: GZC[zz[1]][0] }; });
      const s0 = gasSeries(k, range), N0 = s0.vals.length, gz = this.zoomCtl('gasZoom', 'gasHover', 'gp-' + range + k, Math.min(1, 4 / N0), ''), gzs = gz.zoomed ? st.gasZoom : { a: 0, b: 1 };
      const gi0 = Math.max(0, Math.floor(gzs.a * (N0 - 1))), gi1 = Math.min(N0 - 1, Math.max(gi0 + 2, Math.ceil(gzs.b * (N0 - 1))));
      const s = { vals: s0.vals.slice(gi0, gi1 + 1), times: s0.times.slice(gi0, gi1 + 1) }, n = s.vals.length, vals = s.vals, mn = Math.min(...vals), mx = Math.max(...vals), span = (mx - mn) || 1;
      const bars = g.chart === 'bars';
      const axVals = vals.slice(); if (bars) axVals.push(0);
      const lims = g.zones.slice(0, -1).map((zz, zi) => [zz[0], g.zones[zi + 1][1]]);
      lims.forEach(([L]) => { if (L >= mn - span * .6 && L <= mx + span * .6) axVals.push(L); });
      const ax = gasAxis(axVals);
      if (bars && ax.lo < 0) { ax.ticks = ax.ticks.filter(t => t >= -1e-9); ax.lo = 0; }
      const Y = x => PB - (x - ax.lo) / (ax.hi - ax.lo) * (PB - PT);
      const xs = Array.from({ length: n }, (_, i) => bars ? (i + .5) / n * 1000 : i / (n - 1) * 1000);
      const ys = vals.map(Y);
      const line = bars ? '' : gasSmooth(xs, ys);
      let zlo = -Infinity;
      const zoneRects = g.zones.map(zz => { const a = Math.max(zlo, ax.lo), b = Math.min(zz[0], ax.hi); zlo = zz[0]; return b > a && zz[1] !== 'n' ? { top: pPct(Y(b)), height: ((Y(a) - Y(b)) / PH * 100).toFixed(2) + '%', color: GZC[zz[1]][0] } : null; }).filter(Boolean);
      const limits = lims.filter(([L]) => L > ax.lo && L < ax.hi).map(([L, zk]) => ({ top: pPct(Y(L)), label: gasFmt(m, L) + ' ' + m.unit, color: GZC[zk][2] }));
      const bw = 1000 / n * .62;
      const barList = bars ? vals.map((x, i) => ({ x: (xs[i] - bw / 2).toFixed(1), y: Y(x).toFixed(1), w: bw.toFixed(1), h: (PB - Y(x)).toFixed(1), color: zoneOf(x)[1] === 'n' ? m.color : GZC[zoneOf(x)[1]][0], op: hov && hov.id === 'gp' + k && hov.i !== i ? .45 : .85 })) : [];
      const xp = i => (xs[i] / 1000 * 100).toFixed(2) + '%';
      const iMax = vals.indexOf(mx), iMin = vals.indexOf(mn);
      const mk = (i, lab, up) => { const q = xs[i] / 1000; return { left: xp(i), top: pPct(ys[i]), label: lab + ' ' + gasFmt(m, vals[i]), shiftX: q < .1 ? '-10%' : q > .9 ? '-90%' : '-50%', shiftY: up ? 'calc(-100% - 7px)' : '7px' }; };
      const marks = bars ? [] : [mk(iMax, 'Max', true), mk(iMin, 'Min', false)];
      const every = range === '24h' ? 6 : range === '1w' ? 8 : range === '1m' ? 7 : 9;
      const xLabels = []; let lastDay = '';
      for (let i = (n - 1) % every; i < n; i += every) {
        const t = s.times[i], q = xs[i] / 1000, hr = t.getHours() % 12 || 12, day = wFmtDate(t);
        if (q < .08 || q > .92) continue;
        xLabels.push({ left: (q * 100).toFixed(2) + '%', shift: '-50%', time: range === '24h' ? hr + ' ' + (t.getHours() < 12 ? 'am' : 'pm') : day, date: range === '24h' && day !== lastDay ? day : '' });
        lastDay = day;
      }
      let hover = false;
      if (hov && hov.id === 'gp' + k && hov.i < n) {
        const i = hov.i, q = xs[i] / 1000, hz = zoneOf(vals[i]);
        hover = { left: (q * 100).toFixed(2) + '%', top: pPct(ys[i]), shift: q > .6 ? 'calc(-100% - 20px)' : '0', time: range !== '24h' && range !== '1w' ? wFmtDate(s.times[i]) : gasTimeLabel(s.times[i], true), value: gasFmt(m, vals[i]) + ' ' + m.unit, label: hz[2], zone: hz[1] === 'n' ? m.color : GZC[hz[1]][0] };
      }
      const up = d >= 0, avg = vals.reduce((a2, b2) => a2 + b2, 0) / vals.length;
      return { ...gz,
        id: k, label: m.label, unit: m.unit, icon: m.icon, color: m.color, tint: m.tint, delay: (pi * 0.05).toFixed(2) + 's', chartNote: g.note,
        min24: gasFmt(m, Math.min(...v24)), max24: gasFmt(m, Math.max(...v24)), min24When: tzFull(s24(k).times[v24.indexOf(Math.min(...v24))]), max24When: tzFull(s24(k).times[v24.indexOf(Math.max(...v24))]), value: gasFmt(m, now), gMin: Math.round(g.min).toLocaleString('en-AU'), gMax: Math.round(g.max).toLocaleString('en-AU'),
        track: gArc(-120, 120, 76), bands, offset: (100 - p * 100).toFixed(2), angle: (-120 + p * 240).toFixed(2),
        zoneColor: zc[0], zoneBg: zc[1], zoneInk: zc[2], zoneLabel: z[2], zoneOn: !!z[2],
        delta: (up ? '+' : '−') + Math.abs(d).toFixed(m.dec) + ' ' + m.unit,
        deltaColor: m.neutral ? '#4C6354' : up ? '#B45309' : '#15803D', deltaPath: up ? 'M12 5l6 7h-4v7h-4v-7H6z' : 'M12 19l-6-7h4V5h4v7h4z',
        stats: [['Min', mn], ['Avg', avg], ['Max', mx]].map(([l, x]) => ({ label: l, value: gasFmt(m, x) })),
        info: GINFO[k] ? { ...GINFO[k], now: 'The current reading of ' + gasFmt(m, now) + ' ' + m.unit + ' is ' + (now >= g.zones[0][0] ? 'above' : 'below') + ' the limit.' } : false,
        infoOpen: this.state.gasInfo === k, infoZ: this.state.gasInfo === k ? 60 : 1,
        toggleInfo: ev => { ev.stopPropagation(); this.setState(s2 => ({ gasInfo: s2.gasInfo === k ? null : k })); },
        full: GFULL[k], chartTitle: GFULL[k] + ' (' + m.unit + ')', hasZone: g.zones.some(zz => zz[1] !== 'n'),
        minVal: gasFmt(m, mn) + (m.unit === '%' ? '%' : ' ' + m.unit), maxVal: gasFmt(m, mx) + (m.unit === '%' ? '%' : ' ' + m.unit), avgVal: gasFmt(m, avg) + (m.unit === '%' ? '%' : ' ' + m.unit),
        minWhen: tzFull(s.times[iMin]), maxWhen: tzFull(s.times[iMax]),
        ticks: ax.ticks.map(t => ({ top: pPct(Y(t)), label: t.toFixed(ax.dec) })), grid: ax.ticks.map(t => pPct(Y(t))),
        zoneRects, limits, bars: barList, isLine: !bars, line, area: g.chart === 'area' ? line + ' L1000 ' + PB + ' L0 ' + PB + ' Z' : '', fill: 'url(#gg-' + k + ')', gid: 'gg-' + k,
        marks, endTop: bars ? '-999px' : pPct(ys[n - 1]), xLabels, hover,
        onMove: e => { const r = e.currentTarget.getBoundingClientRect(); const f = (e.clientX - r.left) / r.width; const i = Math.max(0, Math.min(n - 1, bars ? Math.floor(f * n) : Math.round(f * (n - 1)))); const c = this.state.gasHover; if (!c || c.id !== 'gp' + k || c.i !== i) this.setState({ gasHover: { id: 'gp' + k, i } }); },
        onLeave: () => this.setState({ gasHover: null }),
      };
    });
    const ins = [];
    const v = k => s24(k).vals, last = k => v(k)[v(k).length - 1];
    const peakAt = k => { const a = v(k); const i = a.indexOf(Math.max(...a)); const t = s24(k).times[i]; let h = t.getHours() % 12 || 12; return { val: a[i], time: h + ':00 ' + (t.getHours() < 12 ? 'am' : 'pm') }; };
    const hrsAbove = (k, lim) => v(k).slice(1).filter(x => x >= lim).length;
    const coH = hrsAbove('co', 9), coPk = peakAt('co');
    ins.push({ m: 'co', sev: coH >= 8 || last('co') >= 35 ? 'high' : coH > 0 ? 'watch' : 'good', title: 'Carbon monoxide above guideline',
      value: coH + ' h', valueNote: 'above 9 ppm in the last 24 hours',
      detail: 'CO is ' + last('co').toFixed(1) + ' ppm now and peaked at ' + coPk.val.toFixed(1) + ' ppm at ' + coPk.time + '. Levels rise overnight when ventilation drops and ease through the afternoon.',
      action: 'Check heaters, generators and vehicle exhaust near the shed, and confirm fans are running overnight.' });
    const t = last('temp'), rh = last('hum'), thi = 0.8 * t + rh / 100 * (t - 14.4) + 46.4;
    const thiH = v('temp').slice(1).filter((x, i) => 0.8 * x + v('hum')[i + 1] / 100 * (x - 14.4) + 46.4 >= 75).length;
    ins.push({ m: 'temp', sev: thi >= 79 ? 'high' : thi >= 75 ? 'watch' : 'good', title: 'Livestock heat stress (THI)',
      value: thi.toFixed(1), valueNote: thi >= 79 ? 'Danger band' : thi >= 75 ? 'Alert band' : 'Comfortable',
      detail: 'Temperature-Humidity Index from ' + t.toFixed(1) + ' °C and ' + rh.toFixed(0) + '% humidity. THI was at or above 75 for ' + thiH + ' of the last 24 hours, mostly from late morning to evening.',
      action: 'Increase airflow and water availability during the afternoon, and avoid handling stock in the hottest hours.' });
    const nhNow = last('nh3'), nhAgo = v('nh3')[0], nhPk = peakAt('nh3');
    ins.push({ m: 'nh3', sev: nhNow >= 25 ? 'high' : nhPk.val >= 10 ? 'watch' : 'good', title: 'Ammonia level',
      value: nhNow.toFixed(1) + ' ppm', valueNote: (nhNow >= nhAgo ? '+' : '−') + Math.abs(nhNow - nhAgo).toFixed(1) + ' ppm vs 24 h ago',
      detail: 'Peak of ' + nhPk.val.toFixed(1) + ' ppm at ' + nhPk.time + '. ' + (nhPk.val >= 10 ? 'This passed the 10 ppm comfort level but stayed under the 25 ppm exposure limit.' : 'Readings stay below the 10 ppm comfort level and well under the 25 ppm exposure limit.'),
      action: nhPk.val >= 10 ? 'Check bedding moisture and increase ventilation around ' + nhPk.time + ' when ammonia peaks.' : 'No action needed. Keep bedding dry to hold ammonia at this level.' });
    const chAvg = v('ch4').reduce((a, b) => a + b, 0) / v('ch4').length;
    ins.push({ m: 'ch4', sev: chAvg >= 5 ? 'high' : chAvg >= 3 ? 'watch' : 'good', title: 'Methane build-up',
      value: (chAvg / 1.9).toFixed(1) + '×', valueNote: 'outdoor background (≈1.9 ppm)',
      detail: 'Methane averaged ' + chAvg.toFixed(2) + ' ppm over 24 hours and is ' + last('ch4').toFixed(2) + ' ppm now. Higher readings early in the morning point to gas collecting while the shed is closed up.',
      action: 'Open vents earlier in the morning and check effluent and manure storage areas for build-up.' });
    const odH = hrsAbove('odour', 20), odPk = peakAt('odour');
    ins.push({ m: 'odour', sev: last('odour') >= 50 ? 'high' : odH > 0 ? 'watch' : 'good', title: 'Odour intensity',
      value: odH + ' h', valueNote: 'above 20 ppm in the last 24 hours',
      detail: 'Odour is ' + last('odour').toFixed(1) + ' ppm now, peaking at ' + odPk.val.toFixed(1) + ' ppm around ' + odPk.time + ' when temperatures are highest.',
      action: 'Schedule cleaning or effluent handling for cooler hours to reduce odour for neighbours.' });
    const coPeak2 = peakAt('co2');
    ins.push({ m: 'co2', sev: last('co2') >= 2500 ? 'high' : coPeak2.val >= 1000 ? 'watch' : 'good', title: 'Ventilation (CO₂)',
      value: Math.round(coPeak2.val) + ' ppm', valueNote: '24 h peak at ' + coPeak2.time,
      detail: 'CO₂ is ' + Math.round(last('co2')) + ' ppm now and stayed under the 1,000 ppm guide all day, which means air exchange is adequate for the current stocking level.',
      action: 'No action needed.' });
    const pd = last('pres') - v('pres')[0];
    ins.push({ m: 'pres', sev: pd <= -3 ? 'watch' : 'good', title: 'Pressure trend',
      value: (pd >= 0 ? '+' : '−') + Math.abs(pd).toFixed(1) + ' hPa', valueNote: 'change over 24 hours',
      detail: 'Pressure is ' + last('pres').toFixed(1) + ' hPa. ' + (pd <= -3 ? 'A fall of this size often comes before a change in weather.' : 'A steady reading means settled conditions are likely to continue.'),
      action: pd <= -3 ? 'Prepare for a weather change and check shed openings.' : 'No action needed.' });
    const order = { high: 0, watch: 1, good: 2 };
    ins.sort((a, b) => order[a.sev] - order[b.sev]);
    const SEVL = { high: ['Needs attention', '#FDECEC', '#B91C1C'], watch: ['Watch', '#FEF3C7', '#B45309'], good: ['Normal', '#E7F6EC', '#15803D'] };
    const counts = ['high', 'watch', 'good'].map(k => ({ label: SEVL[k][0], bg: SEVL[k][1], ink: SEVL[k][2], count: ins.filter(x => x.sev === k).length }));
    const attn = ins.filter(x => x.sev === 'high').map(x => x.title.charAt(0).toLowerCase() + x.title.slice(1));
    return {
      isGas: st.screen === 'gas', gasIcon: GAS_ICON,
      gasBack: () => this.setState({ screen: 'list', listKind: 'gas', gasHover: null }),
      gasTabDash: (st.gasTab || 'dash') === 'dash', gasTabInsights: st.gasTab === 'insights',
      gasTabs: [['dash', 'Dashboard', 'M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z'], ['insights', 'Key Insights', 'M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5']].map(([k, label, icon]) => {
        const on = (st.gasTab || 'dash') === k;
        return { label, icon, iconInk: k === 'insights' ? '#D4A017' : 'currentColor', iconFill: 'none', ink: on ? '#0E7C3A' : '#3F4B55', underline: on ? '#1AA34A' : 'transparent', badge: '', go: () => this.setState({ gasTab: k, gasHover: null }) };
      }),
      gasRanges: [['24h', '1D'], ['1w', '1W'], ['1m', '1M'], ['3m', '3M'], ['6m', '6M']].map(([k, label]) => ({ label, color: gasSel === k ? '#0F1A14' : '#6A746E', bg: gasSel === k ? '#E7F6EC' : '#fff', select: () => this.setState({ gasRange: k, gasHover: null, gasCustomOpen: false }) })),
      gasCustomOpen: !!st.gasCustomOpen,
      gasToggleCustom: () => this.setState(s => ({ gasCustomOpen: !s.gasCustomOpen })),
      gasCancelCustom: () => this.setState({ gasCustomOpen: false }),
      gasApplyCustom: () => this.setState({ gasRange: 'custom', gasCustomOpen: false, gasHover: null }),
      gasCustomBg: gasSel === 'custom' ? '#E7F6EC' : '#fff', gasCustomInk: gasSel === 'custom' ? '#0E7C3A' : '#3F4B45',
      gasCustomLabel: gasSel === 'custom' ? (() => { const d = x => { const t = new Date(x); return t.getDate() + ' ' + MON3[t.getMonth()]; }; return d(st.customFrom || '2026-09-01') + ' – ' + d(st.customTo || '2026-09-30'); })() : 'Custom',
      gasKpis: kpis, gasCharts: charts, gasPanels,
      gasRows: gasPanels.map(p => { const g = ['co2', 'nh3', 'co'].includes(p.id); return { ...p, isGauge: g, isPlain: !g }; }),
      gasThp: gasPanels.filter(p => ['temp', 'hum', 'pres'].includes(p.id)),
      gasGauges: gasPanels.filter(p => ['co2', 'nh3', 'co'].includes(p.id)),
      gasKpiTiles: gasPanels.filter(p => ['ch4', 'odour'].includes(p.id)),
      gasSummary: 'Based on the last 24 hours of readings to 2:05 pm, 30 Sep 26. ' + (attn.length ? attn.length + ' item' + (attn.length > 1 ? 's need' : ' needs') + ' attention: ' + attn.join(' and ') + '.' : 'All readings are within normal limits.'),
      gasSevCounts: counts,
      gasInsights: ins.map((x, i) => { const m = GAS_M[x.m]; return { ...x, sev: SEVL[x.sev][0], sevBg: SEVL[x.sev][1], sevInk: SEVL[x.sev][2], icon: m.icon, color: m.color, tint: m.tint, delay: (i * 0.06).toFixed(2) + 's' }; }),
    };
  }
  state = {
    selected: ['p1'],
    listKind: 'soil',
    depths: ['10 cm', '20 cm', '30 cm', '40 cm', '50 cm', '60 cm'],
    hidden: [],
    range: '3M',
    customOpen: false,
    customFrom: '2026-09-02',
    customTo: '2026-09-08',
    calMonth: '2026-09',
    edge: 'from',
    customApplied: false,
    screen: 'cats',
    gasTab: 'dash',
    gasRange: '1w',
    gasSolo: {},
    gasHover: null,
    param: 'Moisture',
    deviceMenuOpen: false,
    depthMenuOpen: false,
    sidebarOpen: true,
    wxRange: '7d',
    tempView: 'daily',
    heroFilter: 'both',
    chartZoom: {},
    aiOpenIndex: 0,
    graphTab: 'temp',
    wxTab: 'dashboard',
    wxRainView: 'daily',
    wxCustomOpen: false,
    cmpA: 'temp',
    cmpB: 'rain',
    cmpARange: '24h',
    cmpBRange: '24h',
    cmpAOpen: false,
    cmpBOpen: false,
  };

  componentDidMount() {
    this._rs = () => this.setState({ vwNarrow: window.innerWidth < 1100 }); window.addEventListener('resize', this._rs); this._rs();
    this._ek = this.embedKey(); this.applyEmbed();
  }
  embedKey() { const p = this.props; return [p.embed, p.device, p.tab].join('|'); }
  componentDidUpdate() { const k = this.embedKey(); if (k !== this._ek) { this._ek = k; this.applyEmbed(); } }
  applyEmbed() {
    const p = this.props;
    if (p.embed === 'weather') this.setState({ screen: 'dash', selected: [p.device || 'w1'], wxTab: p.tab && p.tab !== 'alerts' ? p.tab : (p.tab === 'alerts' ? this.state.wxTab : 'dashboard'), combo: null, alerts: null, chartWin: null });
    else if (p.embed === 'soil') this.setState({ screen: 'dash', selected: [p.device || 'p2'], depths: DEPTHS, hidden: [], soilTab: p.tab === 'insights' ? 'insights' : 'readings', combo: null, alerts: null, soilWin: null });
    else if (p.embed === 'leaf') this.setState({ screen: 'leaf', leafTab: 'dash', combo: null });
  }
  toggleDevice(id) {
    this.setState(s => {
      if (kindOf(id) === 'weather') return s.selected[0] === id ? s : { selected: [id] };
      if (s.selected.includes(id)) return s.selected.length === 1 ? s : { selected: s.selected.filter(x => x !== id) };
      if (kindOf(id) !== kindOf(s.selected[0])) {
        return { selected: [id], depths: DEPTHS_BY_KIND[kindOf(id)], hidden: [] };
      }
      if (s.selected.length >= 3) return s;
      return { selected: [...s.selected, id] };
    });
  }
  toggleDepth(d) {
    this.setState(s => {
      const list = DEPTHS_BY_KIND[kindOf(s.selected[0])];
      if (s.depths.includes(d)) return s.depths.length === 1 ? s : { depths: s.depths.filter(x => x !== d) };
      return { depths: list.filter(x => x === d || s.depths.includes(x)) };
    });
  }
  soloDepth(dl, list) {
    this.setState(s => { const vis = list.filter(x => !s.hidden.includes(x)); return { hidden: vis.length === 1 && vis[0] === dl ? [] : list.filter(x => x !== dl) }; });
  }
  soloDepthIn(key, dl, list) {
    this.setState(s => { const hb = s.hiddenBy || {}, h = hb[key] || [], vis = list.filter(x => !h.includes(x)); return { hiddenBy: { ...hb, [key]: vis.length === 1 && vis[0] === dl ? [] : list.filter(x => x !== dl) } }; });
  }
  toggleHidden(d) {
    this.setState(s => ({ hidden: s.hidden.includes(d) ? s.hidden.filter(x => x !== d) : [...s.hidden, d] }));
  }

  setInfoPos(e) {
    const r = e.currentTarget.getBoundingClientRect();
    const W = Math.min(540, window.innerWidth * .94), vw = window.innerWidth, vh = window.innerHeight, H = Math.min(520, vh - 24);
    const x = Math.max(12, Math.min(r.left, vw - W - 12));
    let y = r.bottom + 6 + H <= vh - 12 ? r.bottom + 6 : r.top - H - 8;
    y = Math.max(12, Math.min(y, vh - H - 12));
    this.setState({ infoPos: { x, y } });
  }
  go(screen) { this.setState({ screen, combo: null, deviceMenuOpen: false, depthMenuOpen: false }); }
  comboGo(tab, dev) {
    const st = this.state, c = dev ? { id: dev.id, kind: dev.kind } : st.combo; if (!c) return;
    const base = { combo: c, comboTab: tab, deviceMenuOpen: false, depthMenuOpen: false, hover: null };
    if (tab === 'weather') this.setState({ ...base, screen: 'dash', selected: ['w1'], wxTab: dev || st.wxTab === 'ai' || !st.wxTab ? 'dashboard' : st.wxTab });
    else if (tab === 'soil') this.setState({ ...base, screen: 'dash', selected: ['p1'], depths: DEPTHS, hidden: [], soilTab: 'readings', soilWin: null });
    else if (tab === 'leaf') this.setState({ ...base, screen: 'leaf', leafTab: 'dash', leafHover: null });
    else this.setState({ ...base, screen: 'comboAI', selected: c.kind === 'wxsoil' ? ['p1'] : st.selected });
  }
  qMatch(query, qa) {
    const words = (query || '').toLowerCase().split(/[^a-z0-9%°]+/).filter(w => w.length >= 3 && !['the','and','what','how','for','with','this','are','was','has','does','over','last','any','that'].includes(w));
    if (!words.length) return true;
    const hay = (qa.q + ' ' + qa.tag).toLowerCase();
    return words.every(w => hay.includes(w.replace(/s$/, '')));
  }
  submitAiQuery() {
    const q = (this.state.aiQuery || '').trim();
    if (!q) return;
    this.setState({ aiCustomAnswer: `Based on this station's current readings, here's what stands out for "${q}": conditions are within normal range for this time of year — check the relevant tab above for the full trend.` });
  }

  wxSparkHover(list) {
    const hov = this.state.sparkHover;
    const now = new Date('2026-09-10T12:49:00');
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return list.map(c => {
      const s = c.spark || c.spark2, sk = c.spark ? 'spark' : 'spark2';
      if (!s || !s.values) return c;
      const n = s.values.length, dec = c.value && c.value.includes('.') ? c.value.split('.')[1].length : 0;
      const when = i => {
        if (s.labels) return s.labels[i];
        if (s.kind === 'bars') { const d = new Date(now); d.setDate(d.getDate() - (n - 1 - i)); return i === n - 1 ? 'Today' : DAYS[d.getDay()] + ' ' + d.getDate(); }
        const d = new Date(now.getTime() - (n - 1 - i) * 18 * 60e3);
        const h = d.getHours(), m = d.getMinutes();
        return (h % 12 || 12) + ':' + String(m).padStart(2, '0') + (h < 12 ? ' AM' : ' PM');
      };
      const hits = s.values.map((v, i) => ({ enter: () => this.setState({ sparkHover: { card: c.label, i } }) }));
      let active = null;
      if (hov && hov.card === c.label && hov.i < n) {
        const i = hov.i, p = s.pts[i], pct = p.x;
        active = { left: pct + '%', top: (p.y / 30 * 32) + 'px', tipLeft: pct + '%', shift: pct < 25 ? '-10%' : pct > 75 ? '-90%' : '-50%',
          value: s.values[i].toFixed(dec) + (c.unit ? ' ' + c.unit : ''), when: when(i) };
      }
      return { ...c, [sk]: { ...s, hits, active, leave: () => this.setState({ sparkHover: null }) } };
    });
  }
  tzGet(side) { return (this.state.tz && this.state.tz[side]) || TZ_DEF[side]; }
  tzSet(side, patch) { this.setState(s => { const tz = s.tz || {}; return { tz: { ...tz, [side]: { ...(tz[side] || TZ_DEF[side]), ...patch } } }; }); }
  tzZoom(side, factor, f) {
    if (side === 'E') return;
    const z = this.tzGet(side), span = z.b - z.a, hrs = z.range === 'custom' && z.cf ? (z.ct - z.cf) / 3600e3 : (TZ_HOURS[z.range] || 24), minSpan = Math.min(1, 2 / hrs);
    const ns = Math.max(minSpan, Math.min(1, span * factor)), fx = f == null ? 0.5 : f, x = z.a + fx * span;
    const a = Math.max(0, Math.min(1 - ns, x - fx * ns));
    this.tzSet(side, { a, b: a + ns });
  }
  tzHandlers(side) {
    this._tzH = this._tzH || {};
    if (this._tzH[side]) return this._tzH[side];
    const self = this, rel = e => { const el = self._tzEl && self._tzEl[side]; if (!el) return 0.5; const r = el.getBoundingClientRect(); return Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)); };
    const h = {
      plotRef: el => {
        self._tzEl = self._tzEl || {};
        if (self._tzEl[side] === el) return;
        self._tzEl[side] = el;
        if (el) el.addEventListener('wheel', e => { if (self.state.wxTab === 'dashboard') return; e.preventDefault(); self.tzZoom(side, e.deltaY > 0 ? 1.25 : 0.8, rel(e)); }, { passive: false });
      },
      onDown: e => {
        const el = self._tzEl[side]; if (!el || self.state.wxTab === 'dashboard') return;
        const w = el.getBoundingClientRect().width, z = self.tzGet(side), span = z.b - z.a, sx = e.clientX;
        if (span >= 0.999) return;
        self._tzDrag = true;
        const mv = ev => { const a = Math.max(0, Math.min(1 - span, z.a - (ev.clientX - sx) / w * span)); self.tzSet(side, { a, b: a + span, hover: null }); };
        const up = () => { self._tzDrag = false; window.removeEventListener('mousemove', mv); window.removeEventListener('mouseup', up); };
        window.addEventListener('mousemove', mv); window.addEventListener('mouseup', up);
      },
      onMove: e => { if (self._tzDrag) return; const f = Math.round(rel(e) * 400) / 400; if (self.tzGet(side).hover !== f) self.tzSet(side, { hover: f }); },
      onLeave: () => self.tzSet(side, { hover: null }),
      onReset: () => { if (self.state.wxTab !== 'dashboard') self.tzSet(side, { a: 0, b: 1 }); },
      onZoomIn: () => self.tzZoom(side, 0.6),
      onZoomOut: () => self.tzZoom(side, 1 / 0.6),
      onZoomReset: () => self.tzSet(side, { a: 0, b: 1, hover: null }),
      onMetric: e => self.tzSet(side, { metric: e.target.value, hover: null }),
      onRange: e => self.tzSet(side, { range: e.target.value, a: 0, b: 1, hover: null }),
    };
    return this._tzH[side] = h;
  }
  renderVals() {
    const { selected, depths, hidden, range, deviceMenuOpen, depthMenuOpen, sidebarOpen, wxRange } = this.state;
    const PANEL_W = 280, PANEL_MAXH = 420;
    let highlightChipsList;
    const ip = this.state.infoPos || { x: 200, y: 200 };
    const vw = (typeof window !== 'undefined' ? window.innerWidth : 1200);
    const vh = (typeof window !== 'undefined' ? window.innerHeight : 800);
    const infoPanelLeft = Math.max(12, Math.min(ip.x, vw - PANEL_W - 12)) + 'px';
    const infoPanelTop = (ip.y + PANEL_MAXH > vh - 12 ? Math.max(12, ip.y - PANEL_MAXH - 12) : Math.min(ip.y, vh - 40)) + 'px';
    const TAB_COLOR = { dashboard: '#0E7C3A', temprain: '#C2571E', rainfall: '#0284C7', humidity: '#0E8060', wind: '#0E8090', solarUv: '#D97706', et: '#0D9488', ai: '#7C4DDA' };
    const tabAccent = TAB_COLOR[this.state.wxTab] || '#0E7C3A';
    const chosen = DEVICES.filter(d => selected.includes(d.id));
    const kind = kindOf(selected[0]);
    const isMini = kind === 'mini';
    const isWeather = kind === 'weather';
    const probeKind = !isWeather;
    const ALLDEPTHS = DEPTHS_BY_KIND[kind] || DEPTHS;
    const n = RPTS[range];
    const visible = depths.filter(d => !hidden.includes(d));

    const data = chosen.map((dev, di) => {
      const TBL = { te: [26.4, 22.1, 18.3, 15.6, 11.2, 10.4], vi: [1520, 1365, 1250, 1180, 1070, 1035] };
      const build = (base, amp, list, step = .5, tb) => list.map(dl => { const i = Math.max(0, depths.indexOf(dl)), b = (tb && tb[i] != null ? tb[i] : base + i * step) + di * step * .8;
        return { label: dl, color: DCOL[dl], fill: FILL[dl], seed: DSEED[dl] + di * 7 + i * 3, base: b, amp, vals: series(DSEED[dl] + di * 7 + i * 3, b, amp, n) }; });
      return {
        dev,
        moAll: dev.id === 'p1' ? build(0, 2.17, depths, 0, P1MO) : build(31.7, 2.16, depths, 2.4), teAll: build(11.7, 0.32, depths, .5, TBL.te), viAll: build(1180, 24, depths, .5, TBL.vi),
        mo: dev.id === 'p1' ? build(0, 2.17, visible, 0, P1MO) : build(31.7, 2.16, visible, 2.4), te: build(11.7, 0.32, visible, .5, TBL.te), vi: build(1180, 24, visible, .5, TBL.vi),
        ecAll: build(0.82, 0.06, depths), ec: build(0.82, 0.06, visible),
        phAll: build(6.4, 0.12, depths), ph: build(6.4, 0.12, visible),
      };
    });

    const deviceHeads = data.map(d => ({ name: d.dev.name, color: d.dev.color, stamp: STAMPS[d.dev.id] }));
    const P = {
      Moisture: { key: 'moAll', unit: '%', dec: 2, icon: ICON.moisture, color: '#2A6FDB' },
      Temperature: { key: 'teAll', unit: '°C', dec: 2, icon: ICON.temp, color: '#FF8C2E' },
      VIC: { key: 'viAll', unit: 'VIC', dec: 0, icon: ICON.vic, color: '#1AA34A' },
      EC: { key: 'ecAll', unit: 'dS/m', dec: 2, icon: ICON.ec, color: '#7C4DDA' },
      pH: { key: 'phAll', unit: 'pH', dec: 2, icon: ICON.ph, color: '#0E8090' },
    }[this.state.param] || { key: 'moAll', unit: '%', dec: 2, icon: ICON.moisture, color: '#2A6FDB' };
    const sampleCols = data.map(d => ({
      name: d.dev.name, color: d.dev.color, stamp: STAMPS[d.dev.id],
      rows: visible.map(dl => {
        const i = depths.indexOf(dl);
        return {
          label: dl, color: DCOL[dl],
          value: d[P.key][i].vals.slice(-1)[0].toFixed(P.dec), unit: P.unit,
        };
      }),
    }));
    const d0 = data[0];
    const ROWS = [
      { label: 'Moisture', key: 'moAll', unit: '%', dec: 2, icon: ICON.moisture },
      { label: 'Temperature', key: 'teAll', unit: '°C', dec: 2, icon: ICON.temp },
      { label: 'VIC', key: 'viAll', unit: 'VIC', dec: 0, icon: ICON.vic },
    ].filter(r => (isMini ? r.label !== 'VIC' : true)).concat(isMini ? [
      { label: 'EC', key: 'ecAll', unit: 'dS/m', dec: 2, icon: ICON.ec },
      { label: 'pH', key: 'phAll', unit: 'pH', dec: 2, icon: ICON.ph },
    ] : []);
    const depthCols = visible.map(dl => ({ label: dl, color: DCOL[dl] }));
    const metricRows = !d0 ? [] : ROWS.map(r => ({
      label: r.label, icon: r.icon,
      cells: visible.map(dl => {
        const i = depths.indexOf(dl);
        return { value: d0[r.key][i].vals.slice(-1)[0].toFixed(r.dec), unit: r.unit };
      }),
    }));
    const SK = { Moisture: ['Soil Moisture', '#2A6FDB', '#E4EEFB', 1], Temperature: ['Soil Temperature', '#EA580C', '#FFF1E7', 0], VIC: ['Soil VIC', '#7C4DDA', '#EEE7FB', 0], EC: ['Soil EC', '#7C4DDA', '#EEE7FB', 0], pH: ['Soil pH', '#0E8090', '#DFF3F9', 0] };
    const skUp = 'M12 5l6 7h-4v7h-4v-7H6z', skDn = 'M12 19l-6-7h4V5h4v7h4z', skFlat = 'M5 10h14v4H5z';
    const skDelta = (d, dec, unit, mode) => {
      const flat = Math.abs(d) < Math.pow(10, -dec) / 2;
      const color = flat ? '#6A746E' : mode === 1 ? (d > 0 ? '#15803D' : '#B45309') : '#4C6354';
      return { delta: flat ? '0' + (dec ? '.' + '0'.repeat(dec) : '') + (unit ? ' ' + unit : '') : (d > 0 ? '+' : '\u2212') + Math.abs(d).toFixed(dec) + (unit ? ' ' + unit : ''), deltaColor: color, deltaPath: flat ? skFlat : d > 0 ? skUp : skDn,
        tLabel: flat ? 'Steady' : d > 0 ? 'Rising' : 'Falling', tInk: flat ? '#5B6660' : d > 0 ? '#0E7C3A' : '#B45309', tBg: flat ? '#EEF1EF' : d > 0 ? '#E7F6EC' : '#FDF0E1', tIc: flat ? 'M5 12h14' : d > 0 ? 'M7 17L17 7M9 7h8v8' : 'M7 7l10 10M17 9v8H9' };
    };
    const skH = this.state.skHover;
    const SKWIN = this.state.sparkWin || 3, SKSTEP = SKWIN === 24 ? 3600e3 : 1800e3, SKN = SKWIN * 3600e3 / SKSTEP + 1;
    const soilKpis = !d0 ? [] : ROWS.map((r, ri) => {
      const S = SK[r.label] || [r.label, '#4C6354', '#EEF1EF', 0];
      const dec = r.dec === 0 ? 0 : (r.label === 'Temperature' ? 1 : r.dec);
      const rows = visible.map(dl => {
        const full = d0[r.key][depths.indexOf(dl)].vals, fEnd = full[full.length - 1], fPrev = full[full.length - 2];
        const rnd = mulberry32W(ri * 101 + depths.indexOf(dl) * 17 + 5), sw = Math.abs(fEnd - fPrev) || Math.abs(fEnd) * 0.01 || 0.01;
        const tail = []; let wk = 0;
        for (let q = 0; q < SKN; q++) { wk = wk * 0.6 + (rnd() - .5) * sw * 0.35; tail.push(fEnd - (fEnd - fPrev) * (SKN - 1 - q) * SKSTEP / 21600e3 + (q === SKN - 1 ? 0 : wk)); }
        const vals = tail, now = tail[SKN - 1], prev = tail[SKN - 2];
        const mn = Math.min(...tail), mx = Math.max(...tail), sp = (mx - mn) || 1;
        const spark = tail.map((x, j) => (j ? 'L' : 'M') + (j / (tail.length - 1) * 100).toFixed(1) + ' ' + (25 - (x - mn) / sp * 20).toFixed(1)).join(' ');
        let hover = false;
        if (skH && skH.k === r.label && skH.dl === dl && skH.i < tail.length) {
          const j = skH.i, p = j / (tail.length - 1);
          hover = { left: (p * 100).toFixed(2) + '%', top: ((25 - (tail[j] - mn) / sp * 20) / 30 * 100).toFixed(1) + '%', shift: p < .25 ? '-10%' : p > .75 ? '-90%' : '-50%', time: (() => { const t = new Date(SOIL_T1 - (tail.length - 1 - j) * SKSTEP); return (t.getHours() % 12 || 12) + ':' + String(t.getMinutes()).padStart(2, '0') + (t.getHours() < 12 ? ' am' : ' pm') + ', ' + wFmtDate(t); })(), value: tail[j].toFixed(dec) + ' ' + r.unit };
        }
        const onMove = e => { const b = e.currentTarget.getBoundingClientRect(); const i = Math.max(0, Math.min(tail.length - 1, Math.round((e.clientX - b.left) / b.width * (tail.length - 1)))); const c = this.state.skHover; if (!c || c.k !== r.label || c.dl !== dl || c.i !== i) this.setState({ skHover: { k: r.label, dl, i } }); };
        return { label: dl.split(' – ')[0], sub: dl.split(' – ')[1] || '', depth: dl.split(' – ').slice(-1)[0], probe: dl.includes(' – ') ? dl.split(' – ')[0] : '', color: DCOL[dl], value: now.toFixed(dec), now, prev, spark, hover, endY: (25 - (now - mn) / sp * 20).toFixed(1), onMove, onLeave: () => this.setState({ skHover: null }), ...skDelta(now - prev, dec, '', S[3]) };
      });
      const rmx = Math.max(...rows.map(x => Math.abs(x.now))) * 1.15 || 1, isT = r.label === 'Temperature';
      rows.forEach(x => { const dd = x.now - x.prev, fl = Math.abs(dd) < Math.pow(10, -dec) / 2; x.pct = Math.max(3, Math.abs(x.now) / rmx * 100).toFixed(1) + '%'; x.dTxt = fl ? '0' + (dec ? '.' + '0'.repeat(dec) : '') : (dd > 0 ? '+' : '\u2212') + Math.abs(dd).toFixed(dec); x.dIc = fl ? 'M5 12h14' : dd > 0 ? 'M12 19V5M6 11l6-6 6 6' : 'M12 5v14M6 13l6 6 6-6'; x.dInk = fl ? '#8A948E' : isT ? (dd > 0 ? '#DC2626' : '#2563EB') : (dd > 0 ? '#15803D' : '#DC2626'); });
      const avg = rows.reduce((a, x) => a + x.now, 0) / (rows.length || 1), pavg = rows.reduce((a, x) => a + x.prev, 0) / (rows.length || 1);
      return { label: S[0], ink: S[1], tint: S[2], icon: r.icon, unit: r.unit, rows, winOpen: this.state.sparkWinOpen === r.label, z: this.state.sparkWinOpen === r.label ? 60 : 1, toggleWin: ev => { ev.stopPropagation(); this.setState(s => ({ sparkWinOpen: s.sparkWinOpen === r.label ? null : r.label, depthMenuOpen: false, customOpen: false })); }, avg: avg.toFixed(dec), prevAvg: pavg.toFixed(dec), stamp: (STAMPS[d0.dev.id] || '').replace(/^.*?, /, ''), delay: (ri * 0.06).toFixed(2) + 's', ...skDelta(avg - pavg, dec, r.unit, S[3]) };
    });
    const MSTYLE = {
      'Soil Moisture': { icon: ICON.moisture, tint: '#E4EEFB', ink: '#2A6FDB' },
      'Soil Temperature': { icon: ICON.temp, tint: '#FFF1E7', ink: '#EA580C' },
      'Soil VIC': { icon: ICON.vic, tint: '#EEE7FB', ink: '#7C4DDA' },
      'Soil EC': { icon: ICON.ec, tint: '#EEE7FB', ink: '#7C4DDA' },
      'Soil pH': { icon: ICON.ph, tint: '#DFF3F9', ink: '#0E8090' },
    };
    const soilW = (() => {
      const st = this.state; let R0, R1, key;
      if (st.customApplied && st.customFrom && st.customTo) { R0 = new Date(st.customFrom + 'T00:00:00').getTime(); R1 = Math.min(SOIL_END, new Date(st.customTo + 'T23:59:59').getTime()); if (R1 - R0 < 864e5) R0 = R1 - 864e5; key = 'c' + st.customFrom + st.customTo; }
      else { R1 = SOIL_END; R0 = R1 - (SOIL_DAYS[range] || 7) * 864e5; key = range; }
      const zw = st.soilWin && st.soilWin.k === key ? st.soilWin : { a: 0, b: 1 }, wa = R0 + zw.a * (R1 - R0), wb = R0 + zw.b * (R1 - R0), spanH = (wb - wa) / 36e5;
      const res = spanH <= 72 ? 'raw' : spanH <= 2400 ? 'hour' : 'day';
      this._soilCtx = { key, minLen: Math.min(1, 6 * 36e5 / (R1 - R0)), win: zw };
      return { R0, R1, wa, wb, res, key, win: zw, zoomed: zw.b - zw.a < .999 };
    })();
    const metric = (title, key, unit, dec) => ({
      title,
      icon: (MSTYLE[title] || {}).icon, tint: (MSTYLE[title] || {}).tint || '#EEF1EF', ink: (MSTYLE[title] || {}).ink || '#6A746E',
      charts: data.map(d => ({
        device: d.dev.name, deviceColor: d.dev.color,
        legend: ALLDEPTHS.filter(dl => depths.includes(dl)).map(dl => ({
          label: dl, depth: dl.split(' – ').slice(-1)[0], probe: dl.includes(' – ') ? dl.split(' – ')[0] : '',
          color: ((this.state.hiddenBy || {})[key] || []).includes(dl) ? '#CFD6D1' : DCOL[dl],
          text: ((this.state.hiddenBy || {})[key] || []).includes(dl) ? '#B3BBB6' : '#6A746E', bd: '#E5E8E6',
          toggle: () => this.soloDepthIn(key, dl, ALLDEPTHS.filter(x => depths.includes(x))),
        })),
        ...(() => {
          const SW = soilW, hidK = ((this.state.hiddenBy || {})[key] || []), sets = (d[key] || []).filter(x => !hidK.includes(x.label)).map(s => ({ ...s, ...soilSeries(s.seed, s.base, s.amp, SW.wa, SW.wb, SW.res) }));
          const id = key + '|' + d.dev.id, sh = this.state.soilHover;
          if (!sets.length) return { bands: [], thr: [], hasBands: false, lines: [], ticks: [], grid: [10, 62, 114, 166, 218], hover: false, xLabels: [], onMove: () => {}, onLeave: () => {}, onDown: () => {}, onUp: () => {} };
          const times = sets[0].times, X = t => (t - SW.wa) / (SW.wb - SW.wa) * 300;
          const inW = []; times.forEach((t, i) => { if (t >= SW.wa && t <= SW.wb) inW.push(i); }); if (!inW.length) inW.push(0);
          let mn = Infinity, mx = -Infinity; sets.forEach(s => inW.forEach(i => { const v = s.vals[i]; if (v < mn) mn = v; if (v > mx) mx = v; }));
          const TX = key === 'mo' && kind === 'soil' && d.dev.id !== 'p1' ? soilTx(this.props) : null;
          if (TX) { mn = Math.min(mn, TX.PWP - 1); mx = Math.max(mx, TX.FC + 1); }
          const zeroAx = key === 'mo' && !TX; if (zeroAx) { mn = 0; mx = [20, 40, 60, 80, 100].find(v => v >= mx + 2) || 100; }
          const sp = (mx - mn) || 1, Y = v => 218 - (v - mn) / sp * 208;
          const bands = TX ? [{ y: Y(TX.FC), h: Y(TX.REF) - Y(TX.FC), fill: '#E1F2E6' }] : [];
          const thr = TX ? [[TX.FC, 'Field capacity ' + TX.FC + '%', '#1D4FA8'], [TX.REF, 'Refill ' + (Math.round(TX.REF * 10) / 10) + '%', '#B42318'], [TX.PWP, 'Wilting point ' + TX.PWP + '%', '#7A1A12']].map(([v, label, c]) => ({ y: Y(v), top: (Y(v) / 240 * 100).toFixed(2) + '%', label, c })) : [];
          const lines = sets.map(s => { const line = s.vals.map((v, i) => (i ? 'L' : 'M') + X(times[i]).toFixed(2) + ' ' + Y(v).toFixed(1)).join(' '); return { line, area: line + ' L' + X(times[times.length - 1]).toFixed(2) + ' 218 L' + X(times[0]).toFixed(2) + ' 218 Z', fill: s.fill, stroke: s.color }; });
          const ticks = [4, 3, 2, 1, 0].map((q, k) => ({ label: (mn + sp * q / 4).toFixed(zeroAx ? 0 : dec) + ' ' + unit, top: (([10, 62, 114, 166, 218][k] / 240) * 100).toFixed(2) + '%' }));
          let hover = false;
          if (sh && sh.id === id && sh.i < times.length) {
            const i = sh.i, p = X(times[i]) / 300, dt = new Date(times[i]);
            hover = {
              left: (p * 100).toFixed(2) + '%', shift: p > .6 ? 'calc(-100% - 20px)' : '0',
              time: SW.res === 'day' ? 'Daily avg · ' + tzDate(dt) + ' ' + dt.getFullYear() : SW.res === 'hour' ? 'Hourly avg · ' + tzDate(dt) + ', ' + tzTime(new Date(times[i] - 18e5), true) + ' – ' + tzTime(new Date(times[i] + 18e5), true) : 'Reading · ' + tzFull(dt),
              dots: sets.map(s => ({ top: (Y(s.vals[i]) / 240 * 100).toFixed(2) + '%', color: s.color })),
              rows: sets.map(s => ({ label: s.label, color: s.color, value: s.vals[i].toFixed(dec) + ' ' + unit })),
            };
          }
          const near = e => { const bb = e.currentTarget.getBoundingClientRect(), th = SW.wa + Math.max(0, Math.min(1, (e.clientX - bb.left) / bb.width)) * (SW.wb - SW.wa); let k = inW[0]; inW.forEach(i => { if (Math.abs(times[i] - th) < Math.abs(times[k] - th)) k = i; }); return k; };
          return {
            bands, thr, hasBands: !!TX, soilName: TX ? TX.name : '',
            lines, ticks, grid: [10, 62, 114, 166, 218], hover, xLabels: axTime(SW.wa, SW.wb, 7),
            onDown: e => { if (!SW.zoomed) return; e.preventDefault(); this._soilPan = { x0: e.clientX, w0: SW.win, width: e.currentTarget.getBoundingClientRect().width, k: SW.key }; this.setState({ soilHover: null }); },
            onMove: e => { const p = this._soilPan; if (p) { const len = p.w0.b - p.w0.a, na = Math.max(0, Math.min(1 - len, p.w0.a - (e.clientX - p.x0) / p.width * len)); this.setState({ soilWin: { a: na, b: na + len, k: p.k } }); return; } const i = near(e), c = this.state.soilHover; if (!c || c.id !== id || c.i !== i) this.setState({ soilHover: { id, i } }); },
            onUp: () => { this._soilPan = null; },
            onLeave: () => { this._soilPan = null; this.setState({ soilHover: null }); },
          };
        })(),
      })),
    });

    const soilOvAny = kind === 'soil' && chosen.length === 1 && (this.props.soilLayout ?? 'Redesigned') !== 'Classic';
    const soilOvOn = soilOvAny;
    const soilOv = !soilOvOn ? {} : (() => {
      const DL = DEPTHS, HR = 36e5, now = SOIL_END, REF = Number(this.props.refillPoint ?? 32.6), FULL = Number(this.props.fullPoint ?? 41.3);
      const PR = { mo: [28.4, 2.16, 1, '%', 1.5], te: [11.7, .32, 1, '°C'], vi: [1180, 24, 0, 'VIC'] };
      const TB = { te: [17.6, 16.8, 16.1, 15.5, 15.0, 14.6], vi: [640, 615, 590, 570, 555, 540] };
      const at = (k, i, t) => soilVal(DSEED[DL[i]] + i * 3, TB[k] ? TB[k][i] : PR[k][0] + i * (PR[k][4] || .5), PR[k][1], t);
      const avgAt = (k, t) => DL.reduce((a, _, i) => a + at(k, i, t), 0) / DL.length;
      const fmtT = t => { const d = new Date(t), h = d.getHours(); return (h % 12 || 12) + ':' + String(d.getMinutes()).padStart(2, '0') + (h < 12 ? ' am' : ' pm'); };
      const ZONES = [['Shallow Zone', '10–20 cm', [0, 1]], ['Root Zone', '20–40 cm', [1, 2, 3]], ['Deep Soil', '50–60 cm', [4, 5]]], RZ = [1, 2, 3];
      const zAt = (ix, t) => ix.reduce((a, i) => a + at('mo', i, t), 0) / ix.length;
      const moNow = Math.round(zAt(RZ, now) * 10) / 10, rate = (moNow - zAt(RZ, now - 72 * HR)) / 3;
      const avail = Math.max(0, Math.min(1, (moNow - REF) / (FULL - REF)));
      const days = rate < -0.005 ? (moNow - REF) / -rate : null;
      const st = moNow < REF ? 'dry' : moNow > FULL ? 'wet' : avail < .25 ? 'low' : 'ok';
      const ST = {
        ok: { title: 'Soil moisture is optimal', sub: 'Root zone moisture is between the refill and full points.', badge: 'Well Watered', ink: '#0E7C3A', bg: '#E7F6EC', icon: 'M5 12l5 5L20 7' },
        low: { title: 'Root zone is near refill point', sub: 'Less than a quarter of available water remains. Plan irrigation.', badge: 'Irrigate Soon', ink: '#B45309', bg: '#FEF3C7', icon: 'M12 8v5M12 16.5v.5' },
        dry: { title: 'Root zone is below refill point', sub: 'Crop is at risk of water stress. Irrigate now.', badge: 'Water Stress', ink: '#B42318', bg: '#FEE4E2', icon: 'M12 8v5M12 16.5v.5' },
        wet: { title: 'Soil is above full point', sub: 'Drainage and leaching risk. Hold irrigation.', badge: 'Saturated', ink: '#2A6FDB', bg: '#E4EEFB', icon: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z' },
      }[st];
      const chip = v0 => { const v = Math.round(v0 * 10) / 10; return v < REF ? { s: 'Dry', ink: '#B42318', bg: '#FEE4E2', dot: '#E2533B' } : v > FULL ? { s: 'Wet', ink: '#1E5BB8', bg: '#E4EEFB', dot: '#2A6FDB' } : { s: 'Optimal', ink: '#0E7C3A', bg: '#E7F6EC', dot: '#1AA34A' }; };
      const KD = [['mo', 'Avg. Soil Moisture', 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z', '#2A8FD8', '#DCEEFB', '#F2F8FD', '#DDEBF6'], ['vi', 'Avg. VIC', 'M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8', '#22A050', '#DDF2E3', '#F3FAF5', '#DCEFE2'], ['te', 'Avg. Soil Temperature', 'M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0z', '#EF5A2A', '#FDE3D8', '#FEF5F1', '#F8E2D8']];
      const kpis = KD.map(([k, label, icon, ink, tint, cardBg, border]) => {
        const pts = Array.from({ length: 25 }, (_, j) => avgAt(k, now - (24 - j) * HR)), pp = Array.from({ length: 25 }, (_, j) => avgAt(k, now - (48 - j) * HR));
        const all = pts.concat(pp), mn = Math.min(...all), mx = Math.max(...all), sp = (mx - mn) || 1, dec = PR[k][2];
        const path = a => a.map((v, j) => (j ? 'L' : 'M') + (j / 24 * 100).toFixed(1) + ' ' + (26 - (v - mn) / sp * 22).toFixed(1)).join(' ');
        const mean = a => a.reduce((x, y) => x + y, 0) / a.length, cur = mean(pts), prev = mean(pp), pct = (cur - prev) / prev * 100, flat = Math.abs(pct) < .05, line = path(pts);
        const dA = cur - prev, fl = Math.abs(dA) < Math.pow(10, -dec) / 2, u = PR[k][3] === 'VIC' ? '' : PR[k][3];
        return { gid: 'kg' + k, cardBg, border, label, icon, ink, tint, unit: PR[k][3] === 'VIC' ? '' : PR[k][3], value: cur.toFixed(dec), prev: prev.toFixed(dec), line, prevLine: path(pp), area: line + ' L100 30 L0 30 Z',
          lo: Math.min(...pts).toFixed(dec), hi: Math.max(...pts).toFixed(dec),
          delta: fl ? 'No change' : Math.abs(dA).toFixed(Math.max(1, dec)) + u,
          deltaInk: fl ? '#4C5A52' : dA > 0 ? '#15803D' : '#B42318',
          deltaPath: fl ? 'M5 12h14' : dA > 0 ? 'M12 19V5M6 11l6-6 6 6' : 'M12 5v14M6 13l6 6 6-6' };
      });
      const pk = this.state.profParam || 'mo';
      const profVals = DL.map((_, i) => at(pk, i, now)), pMin = Math.min(...profVals), pMax = Math.max(...profVals);
      const scale = pk === 'mo' ? [24, 48] : [pMin - (pMax - pMin || 1) * .6, pMax + (pMax - pMin || 1) * .3];
      const PCOL = { mo: '#2A6FDB', te: '#EA580C', vi: '#7C4DDA' };
      const ZTAG = ['Shallow', 'Shallow', 'Root zone', 'Root zone', 'Deep', 'Deep'], ZINK = ['#2A6FDB', '#2A6FDB', '#0E7C3A', '#0E7C3A', '#B45309', '#B45309'];
      const zones = ZONES.map(([name, range, ix]) => { const v = zAt(ix, now), c = chip(v), d = v - zAt(ix, now - 24 * HR); return { name, range, value: v.toFixed(1), chip: c.s, chipInk: c.ink, chipBg: c.bg, delta: (Math.abs(d) < .05 ? 'Steady' : (d > 0 ? '+' : '\u2212') + Math.abs(d).toFixed(1) + '% / 24h') }; });
      const profile = DL.map((dl, i) => {
        const v = profVals[i], c = pk === 'mo' ? chip(v) : null, prev = at(pk, i, now - 24 * HR), dd = v - prev, dec = PR[pk][2];
        const SOIL = ['#8A6A4F', '#7A5A41', '#6B4D37', '#5E432F', '#523A29', '#463123'], q = Math.max(0, Math.min(1, (v - scale[0]) / (scale[1] - scale[0])));
        const RAMP = pk === 'te' ? ['#5AA9E6', '#7CC47A', '#F2C14E', '#F08A3E', '#E2533B'] : ['#E2533B', '#F08A3E', '#F2C14E', '#7CC47A', '#5AA9E6', '#2A6FDB'];
        const sw = c ? c.dot : pk === 'vi' ? '#7C4DDA' : RAMP[Math.min(RAMP.length - 1, Math.floor(q * RAMP.length))];
        return { gr: String(i + 2), swatch: sw, soil: SOIL[i] || '#463123', soilR: i === 0 ? '12px 12px 0 0' : i === DL.length - 1 ? '0 0 12px 12px' : '0', lineTop: i === 0 ? '50%' : '0', lineBottom: i === DL.length - 1 ? '50%' : '0', zone: ZTAG[i], zoneInk: ZINK[i], label: dl, dot: DCOL[dl], value: v.toFixed(dec), unit: PR[pk][3], pct: (Math.max(.04, Math.min(1, (v - scale[0]) / (scale[1] - scale[0]))) * 100).toFixed(1) + '%', bar: PCOL[pk],
          chip: c ? c.s : (Math.abs(dd) < Math.pow(10, -dec) / 2 ? 'Steady' : (dd > 0 ? '+' : '\u2212') + Math.abs(dd).toFixed(dec) + ' / 24h'), chipInk: c ? c.ink : '#4C6354', chipBg: c ? c.bg : '#F1F4F2' };
      });
      const RR = FULL - REF, f1 = v => v.toFixed(1);
      const BANDS = {
        mo: [[REF, '#DC2626', 'Dry', 'Below refill point. Crop under water stress. Irrigate now.'], [FULL, '#16A34A', 'Optimal', 'Between refill and full point. Readily available water.'], [Infinity, '#2A6FDB', 'Wet', 'Above full point. Water drains past the roots.']],
        te: [[12, '#2A6FDB', 'Cold', ''], [25, '#16A34A', 'Optimal', ''], [Infinity, '#DC2626', 'Hot', '']],
        vi: [[1100, '#2A6FDB', 'Low', ''], [1400, '#16A34A', 'Normal', ''], [Infinity, '#DC2626', 'High', '']],
      };
      const TEMP_D = ['Root growth and germination slow down.', 'Good root activity for most crops.', 'Roots under heat stress.'];
      const VIC_D = ['Lower than the site baseline. Nutrients may be leaching.', 'Typical for the site.', 'Salts building up. Salinity may limit water uptake.'];
      const bandOf = (k, v) => BANDS[k].find(b => v < b[0]) || BANDS[k][BANDS[k].length - 1];
      const legRows = k => BANDS[k].map((b, i, a) => { const lo = i ? a[i - 1][0] : null, u = k === 'mo' ? '%' : k === 'te' ? ' °C' : '', fm = k === 'vi' ? (v => String(v)) : k === 'mo' ? f1 : (v => String(v));
        return { c: b[1], name: b[2], range: lo == null ? '< ' + fm(b[0]) + u : b[0] === Infinity ? '≥ ' + fm(lo) + u : fm(lo) + '–' + fm(b[0]) + u, d: k === 'mo' ? b[3] : k === 'te' ? TEMP_D[i] : VIC_D[i] }; });
      const legOpen = this.state.legOpen || '';
      const leg = Object.fromEntries([['mo', 'Soil moisture colours', 'Based on refill point ' + f1(REF) + '% and full point ' + f1(FULL) + '% (FAO-56, p = 0.5). Adjust per probe in device settings.'], ['te', 'Soil temperature colours', 'General agronomic guide. Ideal ranges vary by crop and growth stage.'], ['vi', 'VIC colours', 'VIC is a relative salinity index with no universal scale. Default bands shown; set them per site from baseline readings.']].map(([k, title, note]) => [k, { title, note, rows: legRows(k), open: legOpen === k, toggle: () => this.setState(s => ({ legOpen: s.legOpen === k ? '' : k })) }]));
      const mkProf = k => DL.map((_, i) => { const v = at(k, i, now), dec = PR[k][2], d = v - at(k, i, now - HR), fl = Math.abs(d) < Math.pow(10, -dec) / 2;
        return { gr: String(i + 2), dotTop: (20 + 40 * i) + 'px', label: DL[i], value: v.toFixed(dec), unit: k === 'vi' ? '' : PR[k][3], swatch: bandOf(k, v)[1],
          trend: fl ? (0).toFixed(dec) : (d > 0 ? '+' : '\u2212') + Math.abs(d).toFixed(dec), tInk: fl ? '#6A746E' : d > 0 ? '#15803D' : '#B42318', tPath: fl ? 'M5 12h14' : d > 0 ? 'M12 19V5M6 11l6-6 6 6' : 'M12 5v14M6 13l6 6 6-6' }; }).filter(p => !Array.isArray(this.state.depths) || this.state.depths.includes(p.label));
      const yPct = v => ((1 - Math.max(0, Math.min(1, (v - 24) / 24))) * 100).toFixed(1) + '%';
      const m10 = at('mo', 0, now), m30 = at('mo', 5, now), t10 = at('te', 0, now), tPrev = avgAt('te', now - 24 * HR), tNow = avgAt('te', now);
      const insights = [
        rate < 0 ? { icon: 'M12 19V5M6 13l6 6 6-6', ink: '#B45309', bg: '#FEF3C7', text: 'Root zone (20–40 cm) is drying by ' + Math.abs(rate).toFixed(2) + '% per day.', meta: days ? 'Refill point in about ' + (days > 14 ? '14+' : days.toFixed(1)) + ' days' : '3-day average' }
          : { icon: 'M12 5v14M6 11l6-6 6 6', ink: '#2A6FDB', bg: '#E4EEFB', text: 'Root zone (20–40 cm) moisture rose ' + rate.toFixed(2) + '% per day over the last 3 days.', meta: 'Likely rain or irrigation' },
        Math.abs(m10 - m30) > 2 ? { icon: 'M4 7h16M4 12h10M4 17h6', ink: '#6B4A3A', bg: '#F2E9E2', text: (m10 < m30 ? 'Top 10 cm is drier than 60 cm' : '10 cm is wetter than 60 cm') + ' (' + m10.toFixed(1) + '% vs ' + m30.toFixed(1) + '%).', meta: m10 < m30 ? 'Water is holding deeper in the profile' : 'Recent water has not reached 60 cm yet' }
          : { icon: 'M4 12h16', ink: '#0E7C3A', bg: '#E7F6EC', text: 'Moisture is even across 10–60 cm.', meta: 'Spread under 2%' },
        { icon: 'M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0z', ink: '#EA580C', bg: '#FFF1E7', text: 'Soil at 10 cm is ' + t10.toFixed(1) + ' °C, ' + (Math.abs(tNow - tPrev) < .05 ? 'steady' : (tNow > tPrev ? 'up ' : 'down ') + Math.abs(tNow - tPrev).toFixed(1) + ' °C') + ' on yesterday.', meta: 'Root zone average ' + tNow.toFixed(1) + ' °C' },
      ];
      const t0 = Math.floor(now / HR) * HR;
      const recent = Array.from({ length: this.state.recentAll ? 24 : 6 }, (_, r) => { const t = t0 - r * HR; return { time: fmtT(t), cells: DL.map((_, i) => at('mo', i, t).toFixed(1)), temp: avgAt('te', t).toFixed(1), vic: avgAt('vi', t).toFixed(0), zebra: r % 2 ? '#FAFBFA' : '#FFFFFF' }; });
      return {
        ...ST, lastRead: STAMPS[d0.dev.id] || (tzDate(new Date(now)) + ', ' + fmtT(now)), devName: d0.dev.name, serial: d0.dev.serial,
        availPct: Math.round(avail * 100) + '%', availW: (avail * 100).toFixed(0) + '%',
        refillIn: st === 'dry' ? 'Now' : st === 'low' ? (days != null && days < 2 ? '~' + days.toFixed(1) + ' days' : 'Within 2 days') : days == null ? 'Not needed' : days > 14 ? '14+ days' : '~' + days.toFixed(1) + ' days',
        moNow: moNow.toFixed(1), refill: REF.toFixed(1), full: FULL.toFixed(1),
        markerTop: yPct(moNow),
        fullTop: (() => { const g = parseFloat(yPct(FULL)) - parseFloat(yPct(moNow)); return Math.abs(g) < 9 ? (parseFloat(yPct(moNow)) + (g <= 0 ? -9 : 9)).toFixed(1) + '%' : yPct(FULL); })(),
        refillTop: (() => { const g = parseFloat(yPct(REF)) - parseFloat(yPct(moNow)); return Math.abs(g) < 9 ? (parseFloat(yPct(moNow)) + (g < 0 ? -9 : 9)).toFixed(1) + '%' : yPct(REF); })(), wetH: yPct(FULL), okH: ((FULL - REF) / 24 * 100).toFixed(1) + '%', dryH: (100 - parseFloat(yPct(REF))).toFixed(1) + '%',
        kpis, profile, leg, profMo: mkProf('mo'), profTe: mkProf('te'), profVi: mkProf('vi'), insights, recent, depthHeads: DL, zones, isMo: pk === 'mo', lastTime: fmtT(now),
        cats: [chip(REF - 1), chip((REF + FULL) / 2), chip(FULL + 1)].map((c, i) => ({ ...c, range: ['< ' + REF.toFixed(1) + '%', REF.toFixed(1) + '–' + FULL.toFixed(1) + '%', '> ' + FULL.toFixed(1) + '%'][i], d: ['Below refill point. Crop under water stress.', 'Between refill and full point. Readily available water.', 'Above full point. Water drains past the roots.'][i] })),
        allLabel: this.state.recentAll ? 'Show less' : 'View All', toggleAll: () => this.setState(s => ({ recentAll: !s.recentAll })),
        rateTxt: (rate < 0 ? '\u2212' : '+') + Math.abs(rate).toFixed(2) + '% / day',
        defsOpen: !!this.state.soilDefsOpen,
        toggleDefs: () => this.setState(s => ({ soilDefsOpen: !s.soilDefsOpen })),
        defs: [
          { t: 'Soil zones', d: 'Shallow is 10–20 cm, where germination and surface roots sit. Root Zone is 20–40 cm, where the crop takes up most of its water; status and irrigation timing use this zone. Deep is 50–60 cm, used to see whether water is draining past the roots.' },
          { t: 'Full point · ' + FULL.toFixed(1) + '%', d: 'The moisture the root zone holds once free drainage stops after heavy rain or irrigation (field capacity). Found as the level readings settle at 24–48 hours after a wetting event. Water above this drains below the roots.' },
          { t: 'Refill point · ' + REF.toFixed(1) + '%', d: 'The moisture level where the crop starts to struggle to pull water from the soil. Found where the daily drying curve flattens, because roots slow their uptake. Irrigate before the root zone reaches it. Until enough history is collected, it defaults to 50% of the water between full point and wilting point for the soil type.' },
          { t: 'Available water', d: '(Root zone now − refill point) ÷ (full point − refill point). 100% means at full point, 0% means at refill point.' },
          { t: 'Next irrigation', d: 'Days until the root zone reaches the refill point at the average drying rate of the last 3 days (currently ' + (rate < 0 ? '\u2212' : '+') + Math.abs(rate).toFixed(2) + '% per day). Shows "Now" below the refill point.' },
          { t: 'Root zone status', d: 'Saturated: above full point. Well Watered: 25–100% available water. Irrigate Soon: under 25% available water. Water Stress: below refill point.' },
        ],
        profTabs: [['mo', 'Moisture'], ['te', 'Temp'], ['vi', 'VIC']].map(([k, label]) => ({ label, bg: k === pk ? '#0E7C3A' : 'transparent', ink: k === pk ? '#FFFFFF' : '#3F4B45', pick: () => this.setState({ profParam: k }) })),
        profTitle: 'Soil ' + (pk === 'mo' ? 'Moisture' : pk === 'te' ? 'Temperature' : 'VIC') + ' Profile (Current)',
        profUnit: pk === 'mo' ? 'Moisture (%)' : pk === 'te' ? 'Temperature (°C)' : 'VIC',
        openInsights: () => this.setState({ soilTab: 'insights' }),
      };
    })();
    const vals = {};
    const out = {
      soilOv, soilOvOn,
      infoPanelLeft, infoPanelTop,
      nav: NAV.map(([label, d]) => {
        const on = label === 'Mobile' ? this.state.screen === 'mobile' : this.state.screen !== 'mobile';
        return {
          label, d,
          color: on ? '#FFFFFF' : '#BFD8C9',
          bg: on ? 'rgba(26,163,74,.22)' : 'transparent',
          mark: on ? 'inset 3px 0 0 #1AA34A' : 'none',
          go: label === 'Devices' ? () => this.go('cats') : () => this.go('mobile'),
        };
      }),
      sidebarOpen, sidebarCollapsed: !sidebarOpen,
      sidebarStyle: {
        width: sidebarOpen ? 180 : 56, flex: '0 0 ' + (sidebarOpen ? 180 : 56) + 'px',
        background: '#0E2E1B', color: '#DDECE2', padding: '14px 0',
        display: 'flex', flexDirection: 'column',
        minWidth: 0, overflow: 'hidden', boxSizing: 'border-box',
      },
      toggleSidebar: () => this.setState(s => ({ sidebarOpen: !s.sidebarOpen })),
      deviceMenuOpen, depthMenuOpen,
      sparkWinLabel: 'Last ' + (this.state.sparkWin || 3) + ' hours',
      sparkWinOptions: [3, 6, 24].map(h => { const on = (this.state.sparkWin || 3) === h; return { label: 'Last ' + h + ' hours', tick: on ? '✓' : '', weight: on ? 700 : 500, ink: on ? '#0E7C3A' : '#1F2A24', pick: ev => { ev.stopPropagation(); this.setState({ sparkWin: h, sparkWinOpen: null, skHover: null }); } }; }),
      depthSummary: depths.length === ALLDEPTHS.length ? 'All depths' : depths.length === 0 ? 'None' : depths.length <= 3 ? depths.join(', ') : depths.length + ' depths',
      columns: Math.max(chosen.length, 1),
      deviceHeads, sampleCols, depthCols, metricRows, soilKpis, depthColCount: Math.max(depthCols.length, 1), showLatest: chosen.length <= 1 && !soilOvOn,
      isWeather, probeKind,
      soilReadingsOn: probeKind && this.state.soilTab !== 'insights',
      soilOvShow: soilOvOn && (this.state.soilTab || 'readings') === 'readings', soilTrendsShow: !soilOvOn || (this.state.soilTab || 'readings') === 'readings', soilCondOn: !soilOvOn || (this.state.soilTab || 'readings') === 'readings',
      soilInsightsOn: probeKind && this.state.soilTab === 'insights',
      soilTabs: [['readings', 'Dashboard'], ['insights', 'Key Insights']].map(([k, label]) => { const on = (this.state.soilTab || 'readings') === k; return { label, wand: k === 'insights', ink: on ? '#0E7C3A' : '#6A746E', line: on ? '#0E7C3A' : 'transparent', select: () => this.setState({ soilTab: k }) }; }),
      soilInsights: [
        { icon: '💧', q: 'How has soil moisture changed over the last 24 hours and 7 days?', tag: 'Moisture',
          a: 'Average root-zone moisture fell from 8.2% to 7.9% over the last 24 hours. Over 7 days it rose from 7.1% to a peak of 8.6% on Tuesday afternoon, then has been drying by about 0.15% per day since.' },
        { icon: '📉', q: 'Which depths are drying fastest?', tag: 'Depth',
          a: 'The 10 cm and 20 cm sensors are drying fastest, down 0.5% and 0.3% in the last 24 hours. Readings at 30 cm have changed by less than 0.1%, so deeper water is holding steady.' },
        { icon: '🌧️', q: 'How deep did the last wetting event reach?', tag: 'Infiltration',
          a: 'The last wetting event on Tuesday raised moisture at 10 cm and 20 cm within 3 hours. The 30 cm sensor rose 0.1% about 9 hours later.' },
        { icon: '🌱', q: 'Is irrigation likely required?', tag: 'Irrigation',
          a: 'Likely within 2 to 3 days at the current drying rate. The upper root zone (10 and 20 cm) is trending toward its refill point, while the 30 cm sensor is still holding steady.' },
        { icon: '🌡️', q: 'Are soil temperatures trending up or down?', tag: 'Temperature',
          a: 'Up. Soil temperature at 10 cm averaged 11.6\u00b0C this week, 1.1\u00b0C warmer than last week. Deeper sensors are warming more slowly, with 30 cm up 0.4\u00b0C.' },
        { icon: '\u26a0\ufe0f', q: 'Is there any soil condition that requires attention right now?', tag: 'Alerts',
          a: 'No readings are outside their normal range. The only trend to watch is steady drying at 10 cm and 20 cm. All sensors reported on schedule in the last 24 hours.' },
        { icon: '📊', q: 'How does this week compare with last week?', tag: 'Comparison',
          a: 'Average root-zone moisture was 7.9% this week against 7.3% last week, mainly from Tuesday\u2019s wetting event. Soil temperature at 10 cm was 1.1\u00b0C warmer, and salinity (VIC) was stable across all depths.' },
      ].map((qa, i) => { const open = this.state.soilAiOpen === i; return { ...qa, open, chevron: open ? '\u25be' : '\u25b8', toggle: () => this.setState(s => ({ soilAiOpen: s.soilAiOpen === i ? -1 : i })), idx: i }; }).filter(qa => this.qMatch(this.state.soilQuery, qa)),
      badgeIcon: isWeather ? ICON.sun : ICON.tree,
      badgeBg: isWeather ? '#0E8090' : '#6B4A3A',
      badgeInk: isWeather ? '#fff' : '#F0DFD4',
      listIcon: (this.state.listKind === 'dust' || this.state.listKind === 'thp') ? MM_CFG[this.state.listKind].icon : this.state.listKind === 'pressure' ? PR_ICON : this.state.listKind === 'level' ? LEVEL_ICON : this.state.listKind === 'leaf' ? LEAF_ICON : this.state.listKind === 'flow' ? FLOW_ICON : this.state.listKind === 'gas' ? GAS_ICON : this.state.listKind === 'weather' ? ICON.sun : ICON.tree,
      listIconBg: this.state.listKind === 'dust' ? '#F7E7F3' : this.state.listKind === 'thp' ? '#DFF3F9' : this.state.listKind === 'pressure' ? '#EEE7FB' : this.state.listKind === 'level' ? '#DFF6F7' : this.state.listKind === 'leaf' ? '#E6F4E2' : this.state.listKind === 'flow' ? '#DFF6F7' : this.state.listKind === 'gas' ? '#FEF3E2' : this.state.listKind === 'weather' ? '#DFF3F9' : '#F2E9E2',
      listIconInk: this.state.listKind === 'dust' ? '#B14DA0' : this.state.listKind === 'thp' ? '#1B8FB3' : this.state.listKind === 'pressure' ? '#7C4DDA' : this.state.listKind === 'level' ? '#0E8090' : this.state.listKind === 'leaf' ? '#3F7A2A' : this.state.listKind === 'flow' ? '#0EA5A5' : this.state.listKind === 'gas' ? '#B45309' : this.state.listKind === 'weather' ? '#0E8090' : '#6B4A3A',
      icons: { wind: ICON.wind, humidity: ICON.humidity, cloud: ICON.cloud, pin: ICON.pin, rain: ICON.rain, sun: ICON.sun, temp: ICON.temp, uv: ICON.uv },
      compassTicks: Array.from({ length: 24 }, (_, i) => {
        const a = (i * 15 - 90) * Math.PI / 180, major = i % 6 === 0;
        const r1 = major ? 40 : 44, r2 = 47;
        return { x1: (60 + r1 * Math.cos(a)).toFixed(1), y1: (60 + r1 * Math.sin(a)).toFixed(1), x2: (60 + r2 * Math.cos(a)).toFixed(1), y2: (60 + r2 * Math.sin(a)).toFixed(1), w: major ? '1.6' : '1' };
      }),
      stationLabel: chosen[0] ? chosen[0].name : 'Weather Station',
      wxTabList: [
        { key: 'dashboard', label: 'Dashboard', icon: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z' },
        { key: 'temprain', label: 'Temperature', icon: ICON.temp },
        { key: 'rainfall', label: 'Rainfall', icon: ICON.rain },
        { key: 'humidity', label: 'Humidity & Delta T', icon: ICON.humidity },
        { key: 'wind', label: 'Wind & Pressure', icon: ICON.wind },
        { key: 'solarUv', label: 'Solar & UV', icon: ICON.solar },
        { key: 'et', label: 'Evapotranspiration', icon: ICON.evapo },
        { key: 'ai', label: 'Key Insights', icon: 'M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5', iconInk: '#D4A017' },
      ].map(t => ({
        ...t,
        iconInk: t.iconInk || 'currentColor', iconFill: t.iconFill || 'none',
        ink: this.state.wxTab === t.key ? (TAB_COLOR[t.key] || '#0E7C3A') : '#6A746E',
        underline: this.state.wxTab === t.key ? (TAB_COLOR[t.key] || '#0E7C3A') : 'transparent',
        pill: this.state.wxTab === t.key ? '#ECF7EF' : 'transparent', weight: this.state.wxTab === t.key ? 700 : 500,
        go: () => this.setState({ wxTab: t.key }),
      })),
      isTabDash: this.state.wxTab === 'dashboard',
      isTabWind: this.state.wxTab === 'wind',
      isTabTempRain: this.state.wxTab === 'temprain',
      isTabRainfall: this.state.wxTab === 'rainfall',
      isTabHumidity: this.state.wxTab === 'humidity',
      isTabDevice: this.state.wxTab === 'device',
      isTabET: this.state.wxTab === 'et',
      isTabAI: this.state.wxTab === 'ai',
      showRangeRow: !['dashboard', 'ai', 'device', 'temprain', 'humidity', 'rainfall', 'wind', 'solarUv', 'et'].includes(this.state.wxTab),
      showChartGrid: false,
      isTabSolarUv: this.state.wxTab === 'solarUv',
      uvBadgeInfoOpen: this.state.infoOpen === 'uvbadge',
      toggleUvBadgeInfo: (e) => { e.stopPropagation(); this.setInfoPos(e); this.setState(s => ({ infoOpen: s.infoOpen === 'uvbadge' ? null : 'uvbadge' })); },
      showTabKpis: ['temprain', 'rainfall', 'wind', 'solarUv', 'et'].includes(this.state.wxTab),
      tabKpis: (this.state.wxTab === 'rainfall' ? (() => {
        const RK = {
          '7d': { total: '18.9', days: '4', wettest: '6.8 mm', wettestDate: 'Tue, 3:40 PM', vsLastPeriod: -8, label: 'Last 7 days' },
          '30d': { total: '46.5', days: '9', wettest: '8.2 mm', wettestDate: '3 Sep, 11:20 AM', vsLastPeriod: 12, label: 'Last 30 days' },
          '3m': { total: '128.4', days: '22', wettest: '11.6 mm', wettestDate: '14 Jul, 6:05 AM', vsLastPeriod: 5, label: 'Last 3 months' },
          '6m': { total: '241.0', days: '41', wettest: '14.2 mm', wettestDate: '2 Jun, 9:50 PM', vsLastPeriod: -3, label: 'Last 6 months' },
          '9m': { total: '355.6', days: '58', wettest: '14.2 mm', wettestDate: '2 Jun, 9:50 PM', vsLastPeriod: 7, label: 'Last 9 months' },
        };
        const rk = RK[wxRange] || RK['7d'];
        return [
          { label: 'TOTAL (' + rk.label.toUpperCase() + ')', value: rk.total + ' mm', sub: (rk.vsLastPeriod >= 0 ? '+' : '') + rk.vsLastPeriod + '% vs previous period', subColor: rk.vsLastPeriod >= 0 ? '#0E7C3A' : '#C23B3B' },
          { label: 'RAINY DAYS', value: rk.days },
          { label: 'DAYS SINCE LAST RAINFALL', value: '0 days', sub: 'Rain recorded today' },
        ];
      })() : this.state.wxTab === 'temprain' ? [
        { label: '6H TEMP CHANGE', value: '-5.0°C', sub: 'Since 9:49am' },
        { label: 'VS YESTERDAY', value: '+1.2°C', sub: 'Same time yesterday' },
        { label: "TODAY'S RANGE", value: '10.9° – 20.1°C', sub: 'Min at 5am · Max at 1pm' },
        { label: 'HEAT RISK', value: 'Low', sub: "Today's max 20.1°C vs 35°C threshold", info: 'Heat Risk compares today\u2019s maximum air temperature to a 35\u00b0C threshold, the standard agronomic benchmark (BOM heatwave / crop heat-stress guidance) above which heat stress affects crop growth and livestock welfare.' },
      ] : this.state.wxTab === 'humidity' ? [
        { label: 'AVG HUMIDITY (7D)', value: '61%', sub: 'vs 58% today' },
        { label: 'DELTA T TREND', value: 'Improving', sub: 'Better spray window from 2pm', info: 'Delta T (air temp minus wet-bulb temp) between 2\u20138\u00b0C is the ideal spray window per Australian Bureau of Meteorology / GRDC spray guidance \u2014 above it droplets evaporate too fast, below it they may not dry.' },
        { label: 'DEW POINT SPREAD', value: '8.8°C', sub: 'Air temp vs dew point' },
        { label: 'COMFORT LEVEL', value: 'Moderate', sub: 'Based on humidity + temp', info: 'Comfort Level blends relative humidity and air temperature using a simplified heat-index style scale (Low / Moderate / High).' },
      ] : this.state.wxTab === 'wind' ? [
        { label: 'WINDIEST HOUR', value: '2:00 PM', sub: 'Peak gust 27 km/h' },
        { label: 'CALM PERIODS TODAY', value: '2', sub: 'Below 5 km/h' },
        { label: 'MOST COMMON DIRECTION (7 DAYS)', value: 'SW', sub: 'Wind blew from the SW most often' },
        { label: 'GUST RATIO', value: '1.6×', sub: 'Gust vs sustained speed' },
      ] : this.state.wxTab === 'solarUv' ? [
        { label: 'PEAK SOLAR TODAY', value: '891 W/m²', sub: 'Observed at 1:15 PM' },
        { label: 'DAILY TOTAL', value: '4.2 kWh/m²' },
        { label: 'UV STATUS', value: 'Moderate', sub: 'Index 4.2 right now', info: 'UV Status maps the current UV Index reading onto the WHO / Bureau of Meteorology scale: 0\u20132 Low, 3\u20135 Moderate, 6\u20137 High, 8\u201310 Very High, 11+ Extreme.' },
        { label: 'UV PEAK TODAY', value: '6.8', sub: 'Around 12:30 PM' },
      ] : this.state.wxTab === 'et' ? [
        { label: 'YESTERDAY ET', value: '2.8 mm', sub: '08 Sep 2026' },
        { label: 'ET AVERAGE (LAST 7 DAYS)', value: '2.9 mm', sub: 'Per day, this week' },
        { label: 'PREVIOUS DAY', value: '2.6 mm', sub: '07 Sep 2026' },
      ] : []).map(k => ({ ...k, subColor: k.subColor || '#8A948E', open: this.state.infoOpen === 'kpi-' + k.label, toggle: (e) => { e.stopPropagation(); this.setInfoPos(e); this.setState(s => ({ infoOpen: s.infoOpen === ('kpi-' + k.label) ? null : ('kpi-' + k.label) })); } })),
      aiInsights: [
        { icon: '💧', q: 'What was the rainfall activity over the last 24 hours and 7 days?', tag: 'Rainfall',
          a: '4.2 mm fell in the last 24 hours, including 0.6 mm in the last hour. The last 7 days totalled 18.9 mm, with Tuesday the wettest day at 6.8 mm. Rain fell as light, steady showers with no heavy downpour recorded.' },
        { icon: '🕐', q: 'What were the best periods for spraying in last 3 hours?', tag: 'Spray timing',
          a: 'The best period was 10:00 to 10:54 AM, when wind stayed between 9 and 12 km/h and Delta T sat between 4.1 and 5.2°C. From about 11:12 AM wind rose above 15 km/h with gusts to 27 km/h, so conditions have been outside the spray window since then.',
          info: 'Uses the standard 15 km/h wind drift threshold and the 2\u20138\u00b0C Delta T spray window, both drawn from common product-label spray guidance.' },
        { icon: '⚠️', q: 'Is there any weather condition that requires attention right now?', tag: 'Alerts',
          a: 'Wind is the only condition to watch. It is 17 km/h with gusts to 27 km/h, above the 15 km/h spray drift threshold. Temperature, humidity, Delta T and UV are all within normal ranges, and there is no frost or heavy rain.' },
        { icon: '📅', q: 'Summarise the last 7 days?', tag: 'Summary',
          a: 'The week brought 18.9 mm of total rainfall, with Tuesday the wettest day at 6.8 mm. Average humidity sat near 61%, slightly above today\u2019s 58%. Wind was prevailing from the SW, and evapotranspiration averaged 2.9 mm/day — normal for early spring.' },
        { icon: '📈', q: 'Are temperatures trending up or down?', tag: 'Temperature',
          a: 'Down over the last 3 hours — temperature has dropped about 5.0°C since the afternoon peak, which is normal evening cooling for early spring. Compared to this time yesterday, it\u2019s running about 1.2°C warmer.' },
        { icon: '🌱', q: 'Is irrigation likely required?', tag: 'Irrigation',
          a: 'Likely worthwhile. Only 0.6 mm of rain fell in the last 24 hours and Delta T is 6.4°C — an ideal range for evaporation, meaning the soil is drying steadily. If soil moisture is already below target, this is a good window to irrigate.' },
        { icon: '📊', q: 'How does this week compare with last week?', tag: 'Comparison',
          a: 'This week was slightly drier and cooler. Rainfall was 18.9 mm against 20.6 mm last week, average temperature was 15.2°C against 16.0°C, and average wind speed rose from 11 to 14 km/h. Evapotranspiration was steady at about 2.9 mm/day.' },
      ].map((qa, i) => ({ ...qa, open: this.state.aiOpenIndex === i, chevron: this.state.aiOpenIndex === i ? '\u25be' : '\u25b8', toggle: () => this.setState(s => ({ aiOpenIndex: s.aiOpenIndex === i ? -1 : i })), infoOpen: this.state.infoOpen === 'ai-' + i, toggleInfo: (e) => { e.stopPropagation(); this.setInfoPos(e); this.setState(s => ({ infoOpen: s.infoOpen === ('ai-' + i) ? null : ('ai-' + i) })); }, idx: i })).filter(qa => this.qMatch(this.state.aiQuery, qa)),
      windStack: (() => {
        const ws = wWindStack(wGenPoints(wxRange === 'custom' ? '30d' : wxRange));
        const zoomMap = this.state.chartZoom || {};
        return {
          direction: { ...ws.direction, zoom: zoomMap.windDir || 1 },
        };
      })(),
      deviceInfo: chosen[0] ? [
        { label: 'Name', value: chosen[0].name },
        { label: 'Controller ID', value: chosen[0].serial.replace('AXTCL_', '') },
        { label: 'Provider', value: 'AxisTech' },
        { label: 'Status', chips: [{ label: 'Online', ink: '#0E7C3A', bg: '#E3F1E7' }, { label: 'Work mode', ink: '#0E7C3A', bg: '#EEF7EA' }] },
        { label: 'Communication Type', value: 'Cellular' },
        { label: 'Reading Interval', value: '15 mins' },
        { label: 'Battery Level', value: '86%' },
        { label: 'Signal Strength', value: '23' },
        { label: 'Coordinates', value: '-31.90951, 115.81528' },
        { label: 'Date Installed', value: '12 Mar 2025' },
      ].map(r => ({ value: '', chips: [], ...r })) : [],
      deviceId: chosen[0] ? chosen[0].serial : '',
      deviceCoords: '-31.90951, 115.81528',
      mapLabel: chosen[0] ? chosen[0].name : 'Weather Station',
      mapTiles: (() => {
        const lat = -31.90951, lon = 115.81528, z = 15, n = 1 << z;
        const xt = (lon + 180) / 360 * n, lr = lat * Math.PI / 180, yt = (1 - Math.log(Math.tan(lr) + 1 / Math.cos(lr)) / Math.PI) / 2 * n;
        const cx = Math.floor(xt), cy = Math.floor(yt), out = [];
        for (let dy = -2; dy <= 2; dy++) for (let dx = -3; dx <= 3; dx++) {
          const x = cx + dx, y = cy + dy;
          out.push({ bg: 'url(https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/' + z + '/' + y + '/' + x + '), url(https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/' + z + '/' + y + '/' + x + ')',
            left: 'calc(50% + ' + ((x - xt) * 256).toFixed(1) + 'px)', top: 'calc(50% + ' + ((y - yt) * 256).toFixed(1) + 'px)' });
        }
        return out;
      })(),
      liveTipOn: !!this.state.liveTip,
      onLiveEnter: () => this.setState({ liveTip: true }),
      onLiveLeave: () => this.setState({ liveTip: false }),
      wxLocation: 'AxisTech Demo Site',
      wxTrendVal: '+1.3\u00b0C',
      wxTrendInk: '+1.3'.startsWith('-') || '+1.3'.startsWith('\u2212') ? '#2563EB' : '#EA580C',
      wxTrendPath: '+1.3'.startsWith('-') || '+1.3'.startsWith('\u2212') ? 'M12 19l-6-7h4V5h4v7h4z' : 'M12 5l6 7h-4v7h-4v-7H6z',
      heroChartTemp: wBuildChartCard('temp', '24h'),
      heroChartWind: wBuildChartCard('wind', '24h'),
      heroChartRain: wBuildChartCard('rain', '24h'),
      tzCards: (() => {
        const tab = this.state.wxTab, isDash = tab === 'dashboard';
        const cfg = tab === 'temprain' ? [['T', 'temp', null, '1 / -1']]
          : tab === 'wind' ? [['W', 'wind', null, '1 / -1'], ['PR', 'pressure', null, '1 / -1']]
          : tab === 'rainfall' ? []
          : tab === 'solarUv' ? [['S1', 'solar', null, 'span 1'], ['S2', 'solarDaily', null, 'span 1']]
          : tab === 'et' ? [['E', 'et', null, '1 / -1']]
          : tab === 'humidity' ? [['H', 'humidity', null, '1 / -1'], ['D', 'deltaT', null, 'span 1'], ['P', 'dewpoint', null, 'span 1']]
          : [['L', null, ['temp', 'rain', 'humidity', 'wind', 'deltaT', 'dewpoint', 'pressure', 'solar', 'uv'], '1 / -1']];
        return cfg.map(([side, fixed, opts, span]) => {
          const tm = this.state.wxTrendM || ['temp', 'rain'], multi = !!opts && isDash;
          const z0 = this.tzGet(side), z = fixed ? { ...z0, metric: fixed } : multi ? { ...z0, metric: tm[0] } : z0, c = tzBuild(z.metric, z.range, z);
          const c2 = multi && tm[1] ? tzBuild(tm[1], z.range, { ...z, metric: tm[1] }) : null;
          const solo = (this.state.legendSolo || {})[side];
          const items = c.showLegend ? [{ key: 'main', label: c.legend, color: c.color }, ...c.legendExtra.map((le, i) => ({ ...le, key: i === 0 ? 'line2' : 'arrows' }))] : [];
          const hide = solo === 'main' ? { line2: '', area2: '', arrows: [] } : solo === 'line2' ? { line: '', area: '', arrows: [] } : solo === 'arrows' ? { line: '', area: '', line2: '', area2: '' } : {};
          const legendItems = items.map(it => ({ ...it, opacity: solo && solo !== it.key ? 0.4 : 1, toggle: () => this.setState(s => { const ls = s.legendSolo || {}; return { legendSolo: { ...ls, [side]: ls[side] === it.key ? null : it.key } }; }) }));
          const multiX = multi ? {
            multi: true, hasMetricSelect: false, title: tm.map(k => TZ_METRICS[k].label).join(' + ') + ' Trend', mOpen: !!this.state.wxTrendOpen, tickInk: c2 ? c.color : '#4C6354',
            mLabel: tm.map(k => TZ_METRICS[k].label).join(' + '),
            toggleM: () => this.setState(s => ({ wxTrendOpen: !s.wxTrendOpen })),
            mOpts: opts.map(k => { const on = tm.includes(k), dis = !on && tm.length >= 2; return { label: TZ_METRICS[k].label, color: TZ_METRICS[k].color || '#6A746E', op: dis ? .4 : 1, cursor: dis ? 'not-allowed' : 'pointer', bg: on ? '#F1F7F3' : 'transparent', boxBorder: on ? '#0E7C3A' : '#C5CEC9', boxBg: on ? '#0E7C3A' : '#fff', check: on ? '#fff' : 'transparent',
              pick: () => { if (dis) return; const cur = this.state.wxTrendM || ['temp', 'rain'], nx = on ? cur.filter(x => x !== k) : cur.concat(k); if (nx.length) this.setState({ wxTrendM: nx }); } }; }),
            sec: c2 ? { line: c2.line || '', color: c2.color, bars: (c2.bars || []).map(b => ({ ...b, label: '' })), yTicks: c2.yTicks, hoverVal: c2.hover ? c2.hover.value : '' } : false,
          } : { multi: false, sec: false, tickInk: '#4C6354' };
          const legend2 = c2 ? [{ key: 'm1', label: TZ_METRICS[tm[0]].label + ' (left axis)', color: c.color, opacity: 1, toggle: () => {} }, { key: 'm2', label: TZ_METRICS[tm[1]].label + ' (right axis)', color: c2.color, opacity: 1, toggle: () => {} }] : null;
          return { ...c, ...hide, legendItems: legend2 || legendItems, ...this.tzHandlers(side), span, gradId: 'tzGrad' + side, metric: z.metric, range: z.range, title: isDash ? c.title : c.tabTitle, hasRangeSelect: isDash,
            cursor: c.isZoomed ? 'grab' : c.canZoom ? 'crosshair' : 'default', hasMetricSelect: !!opts,
            rangeOptions: (isDash ? [['24h', '24 hours'], ['48h', '48 hours'], ['72h', '3 days']] : [['24h', '1D'], ['1w', '1W'], ['1m', '1M'], ['3m', '3M'], ['6m', '6M']]).map(([key, label]) => ({ key, label, selected: key === z.range })),
            metricOptions: (opts || []).map(k => ({ key: k, label: TZ_METRICS[k].label })), ...multiX };
        });
      })(),
      ...(() => {
        const TAB_SIDES = { temprain: ['T'], humidity: ['H', 'D', 'P'], rainfall: ['RF'], wind: ['W', 'PR'], solarUv: ['S1', 'S2'], et: ['E'] };
        const sides = TAB_SIDES[this.state.wxTab] || [];
        const cur = sides.length ? this.tzGet(sides[0]) : null;
        const setAll = patch => this.setState(s => { const tz = { ...(s.tz || {}) }; sides.forEach(sd => { tz[sd] = { ...(tz[sd] || TZ_DEF[sd]), ...patch, a: 0, b: 1, hover: null }; }); return { tz, tzCustomOpen: false }; });
        const iso = t => { const d = new Date(t); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
        const minD = iso(tzBase()[0].t), maxD = iso(TZ_END);
        const isCustom = cur && cur.range === 'custom';
        const from = this.state.tzCustomFrom || iso(TZ_END - 14 * 864e5), to = this.state.tzCustomTo || maxD;
        return {
          tabRangeShow: sides.length > 0,
          tabRanges: [['24h', '1D'], ['1w', '1W'], ['1m', '1M'], ['3m', '3M'], ['6m', '6M']].map(([k, label]) => { const on = cur && cur.range === k; return { label, bg: on ? '#E3F1E7' : 'transparent', color: on ? '#0E7C3A' : '#1F2A24', select: () => setAll({ range: k }) }; }),
          tzCustomBg: isCustom ? '#E3F1E7' : 'transparent', tzCustomColor: isCustom ? '#0E7C3A' : '#1F2A24',
          tzCustomLabel: isCustom ? tzDate(new Date(cur.cf)) + ' – ' + tzDate(new Date(cur.ct)) : 'Custom',
          tzCustomOpen: !!this.state.tzCustomOpen, toggleTzCustom: () => this.setState(s => ({ tzCustomOpen: !s.tzCustomOpen })),
          tzCustomFrom: from, tzCustomTo: to, tzCustomMin: minD, tzCustomMax: maxD,
          onTzCustomFrom: e => this.setState({ tzCustomFrom: e.target.value }), onTzCustomTo: e => this.setState({ tzCustomTo: e.target.value }),
          applyTzCustom: () => { const [y1, m1, d1] = from.split('-').map(Number), [y2, m2, d2] = to.split('-').map(Number); const cf = new Date(y1, m1 - 1, d1).getTime(), ct = new Date(y2, m2 - 1, d2, 23, 59).getTime(); if (ct > cf) setAll({ range: 'custom', cf, ct }); },
        };
      })(),
      showTzGrid: ['dashboard', 'temprain', 'humidity', 'wind', 'solarUv', 'et'].includes(this.state.wxTab),
      nkShow: ['temprain', 'humidity', 'rainfall', 'wind', 'solarUv', 'et'].includes(this.state.wxTab),
      nkList: ((() => {
        const tab = this.state.wxTab;
        const SIDE = { temprain: 'T', humidity: 'H', rainfall: 'RF', wind: 'W', solarUv: 'S1', et: 'E' }[tab];
        if (!SIDE) return [];
        const z = { ...this.tzGet(SIDE), a: 0, b: 1, hover: null };
        const B = k => tzBuild(k, z.range, z).raw;
        const PER = { '24h': 'last 24 hours', '1w': 'last 7 days', '1m': 'last 30 days', '3m': 'last 3 months', '6m': 'last 6 months' }[z.range] || (z.cf ? tzDate(new Date(z.cf)) + ' – ' + tzDate(new Date(z.ct)) : 'selected period');
        const S = a => { let mn = a[0], mx = a[0], sum = 0; a.forEach(p => { if (p.v < mn.v) mn = p; if (p.v > mx.v) mx = p; sum += p.v; }); return { avg: sum / a.length, mn, mx }; };
        const hrs = (a, fn) => a.filter(fn).length / 2;
        const when = p => tzDate(new Date(p.t)) + ', ' + tzTime(new Date(p.t), true);
        const K = (label, value, unit, color, tint, icon, note) => ({ label, value, unit, color, tint, icon, note });
        if (tab === 'temprain') {
          const a = B('temp'), s = S(a);
          return [
            K('Lowest', s.mn.v.toFixed(1), '°C', '#2563EB', '#DBEAFE', ICON.temp, when(s.mn)),
            K('Average Temperature', s.avg.toFixed(1), '°C', '#EA580C', '#FFEDD5', ICON.temp, PER),
            K('Highest', s.mx.v.toFixed(1), '°C', '#DC2626', '#FEE2E2', ICON.temp, when(s.mx)),
          ];
        }
        if (tab === 'humidity') {
          const h = B('humidity'), dt = B('deltaT'), dp = B('dewpoint'), sh = S(h), sd = S(dt), sp = S(dp);
          const ideal = hrs(dt, p => p.v >= 2 && p.v <= 8), tot = dt.length / 2;
          return [
            K('Average Humidity', sh.avg.toFixed(0), '%', '#3B82F6', '#DBEAFE', ICON.humidity, 'Peak ' + sh.mx.v.toFixed(0) + '% · ' + when(sh.mx)),
            K('Average Delta T', sd.avg.toFixed(1), '°C', '#8B5CF6', '#EDE9FE', ICON.deltaT, 'Range ' + sd.mn.v.toFixed(1) + ' – ' + sd.mx.v.toFixed(1) + '°C'),
            K('Average Dew Point', sp.avg.toFixed(1), '°C', '#16A34A', '#DCFCE7', ICON.dewpoint, 'Low ' + sp.mn.v.toFixed(1) + '°C · High ' + sp.mx.v.toFixed(1) + '°C'),
          ];
        }
        if (tab === 'rainfall') {
          const raw = B('temp'), w0 = raw[0].t, w1 = raw[raw.length - 1].t, days = [];
          const w0d = new Date(w0); for (const d = new Date(w0d.getFullYear(), w0d.getMonth(), w0d.getDate()); d.getTime() <= w1; d.setDate(d.getDate() + 1)) { const ds = d.getTime(); days.push({ t: ds, v: tzSumRain(Math.max(ds, w0), Math.min(ds + 864e5, w1)) }); }
          let dry = 0, run = 0; days.forEach(d => { run = d.v < 0.2 ? run + 1 : 0; dry = Math.max(dry, run); });
          const rainDays = days.filter(d => d.v >= 0.2), tot = tzSumRain(w0, w1);
          const lastWet = rainDays[rainDays.length - 1], endD = new Date(w1);
          const since = lastWet ? Math.round((new Date(endD.getFullYear(), endD.getMonth(), endD.getDate()).getTime() - lastWet.t) / 864e5) : days.length;
          return [
            K('Total Rainfall', tzSumRain(w0, w1).toFixed(1), 'mm', '#0284C7', '#E0F2FE', ICON.cloud, PER),
            K('Rain Days', String(days.filter(d => d.v >= 0.2).length), days.filter(d => d.v >= 0.2).length === 1 ? 'day' : 'days', '#0369A1', '#E0F2FE', ICON.cloud, 'Days with ≥ 0.2 mm'),
            K('Days Since Last Rainfall', String(since), since === 1 ? 'day' : 'days', '#0E7490', '#CFFAFE', ICON.cloud, lastWet ? 'Last rain ' + TZ_DAY[new Date(lastWet.t).getDay()] + ' ' + tzDate(new Date(lastWet.t)) : 'No rain in period'),
          ];
        }
        if (tab === 'wind') {
          const a = B('wind'), s = S(a), g = a.reduce((x, y) => (y.g > x.g ? y : x));
          const D16 = ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'], cnt = {};
          a.forEach(p => { const k = D16[Math.round(p.dir / 22.5) % 16]; cnt[k] = (cnt[k] || 0) + 1; });
          const gd = {}; a.forEach(p => { const k = new Date(p.t).toDateString(); gd[k] = Math.max(gd[k] || 0, p.g || 0); });
          const gustDays = Object.values(gd).filter(v => v >= 39).length;
          const pa = B('pressure'), pr = S(pa), mslAvg = pa.reduce((x, p) => x + (p.g || 0), 0) / pa.length;
          return [
            K('Average Wind Speed', s.avg.toFixed(1), 'km/h', '#0E8090', '#CCFBF1', ICON.wind, PER),
            K('Strong Wind Gust Days', String(gustDays), gustDays === 1 ? 'day' : 'days', '#DC2626', '#FEE2E2', ICON.windGust, 'Gust ≥ 39 km/h'),
            K('Avg Atmospheric Pressure', pr.avg.toFixed(1), 'hPa', '#2A6FDB', '#E4EEFB', ICON.pressure, PER),
          ];
        }
        if (tab === 'solarUv') {
          const days = B('solarDaily'), full = days.filter(d => d.te <= TZ_END), sr = S(B('solar')), uv = S(B('uv'));
          const best = full.length ? full.reduce((x, y) => (y.v > x.v ? y : x)) : days[0];
          const sa = B('solar'), stepH = sa.length > 1 ? (sa[1].t - sa[0].t) / 36e5 : 0.5, spanD = Math.max(1, (sa[sa.length - 1].t - sa[0].t) / 864e5);
          const sun = sa.filter(p => p.v >= 120).length * stepH / spanD;
          const avgWh = full.length ? full.reduce((x, d) => x + d.v, 0) / full.length : 0;
          const ud = {}; B('uv').forEach(p => { const k = new Date(p.t).toDateString(); ud[k] = Math.max(ud[k] || 0, p.v); });
          const vhDays = Object.values(ud).filter(v => v >= 8).length, totKwh = days.reduce((x, d) => x + d.v, 0) / 1000;
          return [
            { ...K('Very High UV Days', String(vhDays), vhDays === 1 ? 'day' : 'days', '#9333EA', '#F3E8FF', ICON.uv, 'UV Index ≥ 8'),
              status: null },
            K('Total Solar Energy', totKwh.toFixed(0), 'kWh/m²', '#F97316', '#FFEDD5', ICON.solar, PER),
            K('Avg Daily Solar Energy', (avgWh / 1000).toFixed(1), 'kWh/m²', '#EA580C', '#FFEDD5', ICON.solar, ''),
          ];
        }
        const e = B('et'), full = e.filter(d => d.te <= TZ_END), se = S(full.length ? full : e), yd = full[full.length - 1] || e[e.length - 1];
        return [
          K('Yesterday', yd.v.toFixed(1), 'mm', '#0F766E', '#CCFBF1', ICON.evapo, TZ_DAY[new Date(yd.ts).getDay()] + ' ' + tzDate(new Date(yd.ts))),
          K('Total', e.reduce((x, d) => x + d.v, 0).toFixed(1), 'mm', '#0D9488', '#CCFBF1', ICON.evapo, PER),
        ];
      })()).map(k => ({ span: 'span 1', ...k })),
      thermoIcon: React.createElement('svg', { viewBox: '0 0 24 24', width: 38, height: 38, style: { overflow: 'visible', flex: '0 0 auto' } },
        React.createElement('path', { d: 'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z', fill: '#FFF7ED', stroke: '#EA580C', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }),
        React.createElement('rect', { x: 10.7, y: 7, width: 1.6, height: 10.5, rx: 0.8, fill: '#EA580C', style: { transformBox: 'fill-box', transformOrigin: '50% 100%', animation: 'tzMercury 2.6s ease-in-out infinite' } }),
        React.createElement('circle', { cx: 11.5, cy: 18.2, r: 2.3, fill: '#EA580C' })),
      rainIcon: React.createElement('svg', { viewBox: '0 0 24 24', width: 16, height: 16, style: { overflow: 'visible' } },
        React.createElement('path', { d: 'M7 13a4 4 0 0 1 .5-7.97A5 5 0 0 1 17 6a3.5 3.5 0 0 1 0 7z', fill: '#BAE6FD', stroke: '#0284C7', strokeWidth: 1.7, strokeLinejoin: 'round' }),
        ...[8.5, 12, 15.5].map((x, i) => React.createElement('line', { key: i, x1: x, y1: 15.5, x2: x - 0.8, y2: 18.5, stroke: '#0284C7', strokeWidth: 1.8, strokeLinecap: 'round', style: { animation: 'tzDrop 1.3s ' + (i * 0.35) + 's linear infinite' } }))),
      rainIconLg: React.createElement('svg', { viewBox: '0 0 24 24', width: 20, height: 20, style: { overflow: 'visible' } },
        React.createElement('path', { d: 'M7 13a4 4 0 0 1 .5-7.97A5 5 0 0 1 17 6a3.5 3.5 0 0 1 0 7z', fill: '#BAE6FD', stroke: '#0284C7', strokeWidth: 1.7, strokeLinejoin: 'round' }),
        ...[8.5, 12, 15.5].map((x, i) => React.createElement('line', { key: i, x1: x, y1: 15.5, x2: x - 0.8, y2: 18.5, stroke: '#0284C7', strokeWidth: 1.8, strokeLinecap: 'round', style: { animation: 'tzDrop 1.3s ' + (i * 0.35) + 's linear infinite' } }))),
      rainTotalsList: [['Last Hour', tzSumRain(TZ_END - 3600e3, TZ_END)], ['Last 24 Hours', tzSumRain(TZ_END - 86400e3, TZ_END)], ['Last 7 Days', tzSumRain(TZ_END - 7 * 86400e3, TZ_END)], ['This Month', 46.5]].map(([label, v]) => ({ label, value: v.toFixed(1), h: (14 + Math.sqrt(v / 46.5) * 116).toFixed(0) + 'px' })),
      ...(() => {
        const m = this.state.dxMetric || 'wind', rg = this.state.dxRange || '24h';
        const c = wBuildChartCard(m, rg);
        return {
          dxMetric: m,
          dxChart: { ...c, hasLine: !!c.line, bars: c.isBar ? c.bars : [], lineColor: c.isWindArea ? '#0E8090' : c.lineColor },
          dxMetricOptions: [['wind', 'Wind Speed & Direction'], ['humidity', 'Humidity'], ['pressure', 'Atm. Pressure'], ['deltaT', 'Delta T'], ['solar', 'Solar Radiation'], ['uv', 'UV Index']].map(([key, label]) => ({ key, label })),
          setDxMetric: e => this.setState({ dxMetric: e.target.value }),
          dxRanges: [['24h', 'Last 24 hr'], ['48h', 'Last 48 hr'], ['7d', 'Last 7 days']].map(([k, label]) => ({ label,
            bg: k === rg ? '#fff' : 'transparent', color: k === rg ? '#0E7C3A' : '#6A746E', shadow: k === rg ? '0 1px 3px rgba(15,26,20,.12)' : 'none',
            select: () => this.setState({ dxRange: k }) })),
          rainTableRows: [['Last hour', '0.6', 4], ['Last 24 hours', '4.2', 12], ['Last 7 days', '18.9', 42], ['This month', '46.5', 100]].map(([label, value, p]) => ({ label, value, pct: p + '%' })),
        };
      })(),
      windMaxGust: (() => Math.max(...wGenPoints('24h').map(p => p.wind * 1.35 + 3)).toFixed(0))(),
      wxDaysSinceRain: '2',
      wxTabMotif: { sun: ['temprain', 'solarUv'].includes(this.state.wxTab), cloud: this.state.wxTab === 'rainfall', wind: this.state.wxTab === 'wind' },
      wxCond: (() => {
        const T = { rain: ['#EDF5FF', '#2563EB', '#BFDBFE', 'Rain Detected', 'Light rainfall recorded in the last hour'], cool: ['#EAF6FF', '#0284C7', '#BAE6FD', 'Cold Conditions', 'Below 10°C recorded · Cooler conditions'], mild: ['#F3FAF4', '#16A34A', '#BBF7D0', 'Mild Conditions', 'Moderate temperatures currently observed'], warm: ['#FFF8ED', '#D97706', '#FDE68A', 'Warm Conditions', 'Between 25°C and 35°C'], hot: ['#FFF1F1', '#DC2626', '#FECACA', 'Hot Conditions', 'Temperature above 35°C'] };
        const tv = parseFloat(tzToday().now), rh = tzSumRain(TZ_END - 3600e3, TZ_END);
        const auto = rh > 0 ? 'rain' : tv < 10 ? 'cool' : tv <= 25 ? 'mild' : tv <= 35 ? 'warm' : 'hot';
        const PREVIEW = 'auto';
        const devTheme = (DEVICES.find(d => d.id === (this.state.selected || [])[0]) || {}).theme;
        const forced = devTheme && T[devTheme] ? devTheme : T[this.props.wxCondition] ? this.props.wxCondition : T[PREVIEW] ? PREVIEW : null;
        const k = forced || auto, [bg, accent, border, label, sub] = T[k];
        const SAMPLE = { cool: ['7.4', '3.1', '6:20 AM', '11.8', '1:40 PM'], mild: ['18.2', '10.2', '6:10 AM', '20.6', '1:50 PM'], warm: ['29.6', '17.4', '5:50 AM', '31.2', '2:10 PM'], hot: ['37.8', '24.6', '5:40 AM', '39.4', '2:30 PM'] };
        const sm = forced && forced !== 'rain' ? SAMPLE[forced] : null, td = tzToday();
        return { bg, accent, border, label, sub, temp: sm ? sm[0] : td.now, min: sm ? sm[1] : td.min, minTime: sm ? sm[2] : td.minTime, max: sm ? sm[3] : td.max, maxTime: sm ? sm[4] : td.maxTime, rainHr: sm ? '0.0' : rh.toFixed(1), rain: k === 'rain', cool: k === 'cool', mild: k === 'mild', warm: k === 'warm', hot: k === 'hot' };
      })(),
      wxNowMotif: (() => { const rh = tzSumRain(TZ_END - 3600e3, TZ_END), ws = 17; const cloud = rh > 0, wind = !cloud && ws >= 25; return { cloud, wind, sun: !cloud && !wind }; })(),
      wxTemp: tzToday().now,
      wxMin: tzToday().min,
      wxMinTime: tzToday().minTime,
      wxMax: tzToday().max,
      wxMaxTime: tzToday().maxTime,
      wxRain24: '0.6',
      wxHumidity: '58',
      wxDewPoint: '9.6',
      wxWind: '17',
      wxGust: '27',
      wxWindDir: 'SW',
      windRotateDeg: 225,
      wxCondition: 'Partly Cloudy',
      wxConditionUpper: 'PARTLY CLOUDY',
      wxFeelsLike: '19.0',
      wxPrev: '18.7',
      wx24hAvg: '17.8',
      wxDeltaPrev: '+0.3',
      wxDelta6h: '-5.0',
      wxUpdated: '2 minutes ago',
      wxObservedAt: STAMPS.w1,
      ARROW_UP: 'M12 5l6 7h-4v7h-4v-7H6z', ARROW_DOWN: 'M12 19l-6-7h4V5h4v7h4z', ARROW_FLAT: 'M5 12h14',
      isGraphTemp: this.state.graphTab === 'temp',
      isGraphRain: this.state.graphTab === 'rain',
      setGraphTemp: () => this.setState({ graphTab: 'temp' }),
      setGraphRain: () => this.setState({ graphTab: 'rain' }),
      onGraphSelect: (e) => this.setState({ graphTab: e.target.value }),
      graphTempTextColor: this.state.graphTab === 'temp' ? '#0F1A14' : '#5C7590',
      graphTempPillBg: this.state.graphTab === 'temp' ? '#fff' : 'transparent',
      graphRainPillBg: this.state.graphTab === 'rain' ? '#fff' : 'transparent',
      graphTempBorder: this.state.graphTab === 'temp' ? '#0E7C3A' : 'transparent',
      graphRainTextColor: this.state.graphTab === 'rain' ? '#0F1A14' : '#5C7590',
      graphRainBorder: this.state.graphTab === 'rain' ? '#0E7C3A' : 'transparent',
      graphTempGlow: this.state.graphTab === 'temp' ? '#fff' : 'rgba(255,255,255,.55)',
      graphRainGlow: this.state.graphTab === 'rain' ? '#fff' : 'rgba(255,255,255,.55)',
      heroWindCard: {
        wind: '17 km/h', gust: '27 km/h', direction: '225° SW', windVal: '17',
        ticks: Array.from({ length: 24 }, (_, i) => i * 15),
      },
      onChartWheel: (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('data-chartid');
        if (id === 'tempSimple') {
          const order = ['daily', 'hourly', 'detail'];
          const idx = order.indexOf(this.state.tempView || 'daily');
          const next = Math.min(order.length - 1, Math.max(0, idx + (e.deltaY < 0 ? 1 : -1)));
          this.setState({ tempView: order[next] });
          return;
        }
        if (id === 'rainMain') {
          const cur = this.state.wxRainView || 'daily';
          if (e.deltaY < 0 && cur !== 'hourly') { this.setState({ wxRainView: 'hourly' }); return; }
          if (e.deltaY > 0 && cur === 'hourly') { this.setState({ wxRainView: 'daily' }); return; }
        }
        this.setState(s => {
          const zoom = { ...(s.chartZoom || {}) };
          const drill = { ...(s.chartDrill || {}) };
          const cur = zoom[id] || 1;
          const nz = Math.min(2.5, Math.max(1, +(cur + (e.deltaY < 0 ? 0.15 : -0.15)).toFixed(2)));
          zoom[id] = nz;
          drill[id] = nz > 1.15;
          return { chartZoom: zoom, chartDrill: drill };
        });
      },
      rainTotals: { hour: '0.6', today24: '4.2', week: '18.9', month: '46.5', hourPct: 4, today24Pct: 12, weekPct: 42, monthPct: 100 },
      wxHasRain: true,
      wxRain7d: '18.9',
      wxHasRain7d: true,
      wxNoRain7d: false,
      locationLabel: 'PERTH, WA',
      insightHeadline: 'Hold off spraying until wind drops below 15 km/h \u2014 Delta T is in the ideal window. No frost or heat stress risk today. Recent rainfall is low, so irrigation is worth considering.',
      insightCards: [
        { label: 'Spray Conditions', statusLabel: 'CAUTION', statusColor: '#B45309', statusBg: '#FEF3C7', reason: 'Wind (17 km/h) is above the 15 km/h drift threshold, even though Delta T (6.4\u00b0C) is in the ideal 2\u20138\u00b0C window.' },
        { label: 'Irrigation Need', statusLabel: 'MODERATE', statusColor: '#B45309', statusBg: '#FEF3C7', reason: 'Only 0.6mm of rain fell in the last 24 hours, and evapotranspiration (2.8mm) is outpacing it.' },
        { label: 'Frost Risk', statusLabel: 'NONE', statusColor: '#0E7C3A', statusBg: '#DFF3EC', reason: "Overnight low of 10.9\u00b0C is well above the 2\u00b0C frost threshold." },
        { label: 'Heat Stress Risk', statusLabel: 'LOW', statusColor: '#0E7C3A', statusBg: '#DFF3EC', reason: "Today's max of 20.1\u00b0C is well below the 35\u00b0C stress threshold for this crop stage." },
      ],
      primaryMetrics: [
        { key: 'temp', name: 'Temperature', value: '18.4', unit: '\u00b0C', icon: ICON.temp, ink: '#E4572E', tint: '#FDEBE0',
          statusLabel: 'OPTIMAL', statusColor: '#0E7C3A', statusBg: '#DFF3EC', trendDir: 'down', trendText: '-5.0\u00b0C since afternoon peak',
          supportLine: 'Today: 10.9\u00b0C \u2013 20.1\u00b0C \u00b7 no frost or heat stress risk',
          info: { reference: 'Based on general agronomic frost / heat-stress guidance.', definition: 'Air temperature measured at the station, 1.2m above ground.',
            thresholds: [{ range: '< 2\u00b0C', label: 'High Risk (frost)' }, { range: '2\u201330\u00b0C', label: 'Optimal' }, { range: '30\u201335\u00b0C', label: 'Caution (heat)' }, { range: '> 35\u00b0C', label: 'High Risk (heat stress)' }],
            assessment: "Today's max (20.1\u00b0C) and min (10.9\u00b0C) both sit well inside the safe range \u2014 no frost or heat stress.",
            whyMatters: 'Extreme temperatures affect crop growth, cause frost damage, and drive heat stress in livestock and workers.',
            methodology: "Status compares today's recorded min and max against frost and heat-stress thresholds for this crop stage." } },
        { key: 'humidity', name: 'Humidity', value: '58', unit: '%', icon: ICON.humidity, ink: '#0E7C9E', tint: '#DFF3F9',
          statusLabel: 'OPTIMAL', statusColor: '#0E7C3A', statusBg: '#DFF3EC', trendDir: 'down', trendText: '-4% over the last 6 hours',
          supportLine: 'Dew point 9.6\u00b0C \u00b7 disease pressure not currently elevated',
          info: { reference: 'Based on general plant pathology / disease-management guidance.', definition: "Relative humidity \u2014 how much moisture the air is holding relative to what it could hold at that temperature.",
            thresholds: [{ range: '< 30%', label: 'Caution (dry stress)' }, { range: '30\u201370%', label: 'Optimal' }, { range: '70\u201385%', label: 'Caution (disease)' }, { range: '> 85%', label: 'High Risk (disease)' }],
            assessment: '58% is within the optimal band; disease pressure is not currently elevated.',
            whyMatters: 'Sustained high humidity with leaf wetness raises fungal disease risk; very low humidity increases plant water stress.',
            methodology: 'Status compares the current reading against standard humidity bands for disease pressure.' } },
        { key: 'rain', name: 'Rainfall', value: '0.6', unit: 'mm', icon: ICON.cloud, ink: '#0284C7', tint: '#E0F2FE',
          statusLabel: 'OPTIMAL', statusColor: '#0E7C3A', statusBg: '#DFF3EC', trendDir: 'flat', trendText: 'Steady \u2014 last rain today',
          supportLine: '24h: 0.6mm \u00b7 7d: 18.9mm \u00b7 no field access disruption',
          info: { reference: 'Based on standard meteorological rainfall reporting.', definition: 'Rain collected since the last reading, tracked over rolling 24-hour and 7-day windows.',
            thresholds: [{ range: '0mm', label: 'No rain' }, { range: '0.1\u201310mm', label: 'Optimal' }, { range: '10\u201325mm', label: 'Caution (waterlogging)' }, { range: '> 25mm', label: 'High Risk (flooding)' }],
            assessment: '0.6mm in the last 24 hours and 18.9mm over 7 days \u2014 no disruption to field access.',
            whyMatters: 'Heavy rainfall delays spraying and harvesting, and raises waterlogging and disease risk.',
            methodology: 'Status compares rolling rainfall totals against thresholds for field access and waterlogging risk.' } },
        { key: 'wind', name: 'Wind', value: '17', unit: 'km/h', icon: ICON.wind, ink: '#1B8FB3', tint: '#DFF3F9',
          statusLabel: 'CAUTION', statusColor: '#B45309', statusBg: '#FEF3C7', trendDir: 'up', trendText: '+5 km/h vs last reading',
          supportLine: 'Gusting to 27 km/h \u00b7 direction SW',
          info: { reference: 'Based on spray drift guidance (product-label wind restrictions).', definition: 'Sustained wind speed and gust speed measured at the station.',
            thresholds: [{ range: '< 15 km/h', label: 'Optimal (spray-safe)' }, { range: '15\u201325 km/h', label: 'Caution (drift risk)' }, { range: '> 25 km/h', label: 'High Risk (unsafe to spray)' }],
            assessment: '17 km/h sustained, gusting to 27 km/h \u2014 above the 15 km/h drift threshold most product labels specify.',
            whyMatters: 'Wind above label limits increases spray drift onto non-target areas and reduces application accuracy.',
            methodology: 'Status compares sustained wind speed against the drift threshold used on most spray product labels.' } },
        { key: 'deltaT', name: 'Delta T', value: '6.4', unit: '\u00b0C', icon: ICON.deltaT, ink: '#0E8060', tint: '#DFF3EC',
          statusLabel: 'OPTIMAL', statusColor: '#0E7C3A', statusBg: '#DFF3EC', trendDir: 'flat', trendText: 'Steady within ideal window',
          supportLine: 'Ideal spray window is 2\u20138\u00b0C',
          info: { reference: 'Based on Australian Bureau of Meteorology / GRDC SprayWise spray guidance.', definition: 'The difference between air temperature and wet-bulb temperature \u2014 a measure of evaporation rate.',
            thresholds: [{ range: '< 2\u00b0C', label: 'Caution (slow drying)' }, { range: '2\u20138\u00b0C', label: 'Optimal' }, { range: '8\u201310\u00b0C', label: 'Caution (fast evaporation)' }, { range: '> 10\u00b0C', label: 'High Risk (spray failure)' }],
            assessment: '6.4\u00b0C sits in the ideal 2\u20138\u00b0C spray window.',
            whyMatters: 'Delta T affects spray droplet evaporation, coverage, and effectiveness.',
            methodology: 'Status is calculated by comparing the current reading against the GRDC-recommended spray window.' } },
      ].map(dm => ({ ...dm, trendIcon: dm.trendDir === 'up' ? 'M12 5l6 7h-4v7h-4v-7H6z' : dm.trendDir === 'down' ? 'M12 19l-6-7h4V5h4v7h4z' : 'M5 12h14', trendColor: dm.trendDir === 'up' ? '#15803D' : dm.trendDir === 'down' ? '#EA580C' : '#6A746E', open: this.state.infoOpen === 'dash-' + dm.key, toggle: (e) => { e.stopPropagation(); this.setInfoPos(e); this.setState(s => ({ infoOpen: s.infoOpen === ('dash-' + dm.key) ? null : ('dash-' + dm.key) })); } })),
      secondaryMetrics: [
        { key: 'solar', name: 'Solar Radiation', value: '612', unit: 'W/m\u00b2', icon: ICON.solar, ink: '#D97706', tint: '#FEF3C7',
          statusLabel: 'OPTIMAL', statusColor: '#0E7C3A', statusBg: '#DFF3EC', trendDir: 'down', trendText: 'Down from 780 W/m\u00b2 last hour',
          supportLine: "Today's peak 891 W/m\u00b2",
          info: { reference: 'Based on standard meteorological solar radiation measurement.', definition: 'Incoming solar energy per square metre, measured at the station.',
            thresholds: [{ range: 'Informational', label: 'No fixed risk threshold' }],
            assessment: '612 W/m\u00b2, down from a midday peak of 891 W/m\u00b2 as cloud cover moves in.',
            whyMatters: 'Solar radiation drives photosynthesis and evapotranspiration; sudden drops can signal incoming weather changes.',
            methodology: 'Direct sensor measurement \u2014 no derived status.' } },
        { key: 'uv', name: 'UV Index', value: '4.2', unit: '', icon: ICON.uv, ink: '#9333EA', tint: '#F3E8FF',
          statusLabel: 'CAUTION', statusColor: '#B45309', statusBg: '#FEF3C7', trendDir: 'down', trendText: "Down from today's peak of 6.8",
          supportLine: 'Moderate exposure \u2014 sun protection recommended midday',
          info: { reference: 'Based on the WHO / Bureau of Meteorology UV Index scale.', definition: 'A standardised 0\u201311+ scale describing the strength of sunburn-causing UV radiation.',
            thresholds: [{ range: '0\u20132', label: 'Optimal (Low)' }, { range: '3\u20135', label: 'Caution (Moderate)' }, { range: '6\u20137', label: 'Caution (High)' }, { range: '8+', label: 'High Risk (Very High/Extreme)' }],
            assessment: "4.2 (Moderate), down from today's peak of 6.8 \u2014 sun protection recommended for outdoor workers around midday.",
            whyMatters: 'High UV exposure raises sunburn and heat-related risk for field workers.',
            methodology: 'Status maps the current reading onto the WHO / BOM UV Index scale.' } },
      ].map(dm => ({ ...dm, trendIcon: dm.trendDir === 'up' ? 'M12 5l6 7h-4v7h-4v-7H6z' : dm.trendDir === 'down' ? 'M12 19l-6-7h4V5h4v7h4z' : 'M5 12h14', trendColor: dm.trendDir === 'up' ? '#15803D' : dm.trendDir === 'down' ? '#EA580C' : '#6A746E', open: this.state.infoOpen === 'dash-' + dm.key, toggle: (e) => { e.stopPropagation(); this.setInfoPos(e); this.setState(s => ({ infoOpen: s.infoOpen === ('dash-' + dm.key) ? null : ('dash-' + dm.key) })); } })),
      tertiaryMetrics: [
        { key: 'et', name: 'Evapotranspiration', value: '2.8', unit: 'mm', icon: ICON.evapo, ink: '#0D9488', tint: '#CCFBF1',
          statusLabel: 'OPTIMAL', statusColor: '#0E7C3A', statusBg: '#DFF3EC', trendDir: 'flat', trendText: '',
          supportLine: '7-day avg 2.9mm',
          info: { reference: 'Based on FAO Penman-Monteith methodology.', definition: 'Combined water loss from soil evaporation and crop transpiration.',
            thresholds: [{ range: 'Informational', label: 'Used with rainfall for irrigation planning' }],
            assessment: '2.8mm yesterday, close to the 7-day average of 2.9mm \u2014 normal water loss for the season.',
            whyMatters: 'ET helps estimate how much irrigation is needed to replace water lost from the field.',
            methodology: 'Calculated using the FAO Penman-Monteith equation from temperature, humidity, wind and solar inputs.' } },
        { key: 'pressure', name: 'Pressure', value: '1016.4', unit: 'hPa', icon: ICON.pressure, ink: '#7C4DDA', tint: '#EEE7FB',
          statusLabel: 'OPTIMAL', statusColor: '#0E7C3A', statusBg: '#DFF3EC', trendDir: 'up', trendText: '',
          supportLine: 'MSL 1017.0 hPa \u00b7 rising',
          info: { reference: 'Based on standard meteorological pressure observation.', definition: 'Atmospheric pressure at the station \u2014 an indicator of incoming weather changes.',
            thresholds: [{ range: 'Informational', label: 'Trend matters more than absolute value' }],
            assessment: '1016.4 hPa and rising \u2014 indicates stable conditions, no front approaching.',
            whyMatters: 'Falling pressure often precedes rain or storms; rising pressure indicates settled weather.',
            methodology: 'Direct sensor measurement; trend derived from the last 24 hours.' } },
      ].map(dm => ({ ...dm, trendIcon: dm.trendDir === 'up' ? 'M12 5l6 7h-4v7h-4v-7H6z' : dm.trendDir === 'down' ? 'M12 19l-6-7h4V5h4v7h4z' : 'M5 12h14', trendColor: dm.trendDir === 'up' ? '#15803D' : dm.trendDir === 'down' ? '#EA580C' : '#6A746E', open: this.state.infoOpen === 'dash-' + dm.key, toggle: (e) => { e.stopPropagation(); this.setInfoPos(e); this.setState(s => ({ infoOpen: s.infoOpen === ('dash-' + dm.key) ? null : ('dash-' + dm.key) })); } })),
      toggleTempInfo: (e) => { e.stopPropagation(); this.setInfoPos(e); this.setState(s => ({ infoOpen: s.infoOpen === 'tempcard' ? null : 'tempcard' })); },
      tempInfoOpen: this.state.infoOpen === 'tempcard',
      toggleRainInfo: (e) => { e.stopPropagation(); this.setInfoPos(e); this.setState(s => ({ infoOpen: s.infoOpen === 'raincard' ? null : 'raincard' })); },
      rainInfoOpen: this.state.infoOpen === 'raincard',
      windTrend: wWindDualArea(wGenPoints(wxRange === 'custom' ? '30d' : wxRange)),
      bannerDateLabel: 'Sunday, 29th September 2026',
      bannerDayLabel: 'Wednesday',
      bannerDateOnly: '09 Sept 2026',
      bannerTimeOnly: '3:49 pm',
      highlightChips: (highlightChipsList = [
        { label: 'Rainfall (24h)', value: '4.2', unit: 'mm', icon: ICON.cloud, ink: '#3B82F6', tint: '#DBEAFE', plain: true,
          compare: wCompare('up', '#3B82F6', '+1.1 mm vs previous day'), spark: { ...wSpark([2.1, 3.1, 4.2], 'bars'), labels: ['6 Sep', '7 Sep', '8 Sep'] },
          lines: [{ l: 'Last 3 Days', v: '9.4 mm' }] },
        { label: 'Humidity', value: '58', unit: '%', icon: ICON.humidity, ink: '#0EA5E9', tint: '#E0F2FE', plain: true,
          compare: wCompare('down', '#2563EB', '\u22122% vs last reading'), spark: wSpark(wGenPoints('card3h').map(p => p.humidity), 'line'),
          lines: [{ l: 'Peak Today', v: '72% at 6:10 AM' }] },
        { label: 'Dew Point', value: '9.6', unit: '\u00b0C', icon: ICON.dewpoint, ink: '#22C55E', tint: '#DCFCE7', plain: true,
          compare: wCompare('up', '#22C55E', '+0.3\u00b0C vs last reading'), spark: wSpark(wGenPoints('card3h').map(p => p.dewpoint), 'line'),
          lines: [{ l: 'Peak Today', v: '11.2°C at 2:10 PM' }] },
        { label: 'Delta T', value: '6.4', unit: '\u00b0C', icon: ICON.deltaT, ink: '#10B981', tint: '#D1FAE5', plain: true,
          compare: wCompare('check', '#0E7C3A', 'Ideal Range'), spark: wSpark(wGenPoints('card3h').map(p => p.deltaT), 'line'),
          showInfo: true, infoOpen: this.state.infoOpen === 'dthighlight', toggleInfo: (e) => { e.stopPropagation(); this.setInfoPos(e); this.setState(s => ({ infoOpen: s.infoOpen === 'dthighlight' ? null : 'dthighlight' })); },
          info: { reference: 'GRDC SprayWise / Bureau of Meteorology spray-application guidance (Delta T 2–8°C preferred).', definition: 'Delta T is dry-bulb air temperature minus wet-bulb temperature — an indicator of how fast spray droplets evaporate.',
            thresholds: [{ range: '< 2°C', label: 'Caution — slow drying, inversion/drift risk' }, { range: '2–8°C', label: 'Ideal spray window' }, { range: '8–10°C', label: 'Caution — use coarse droplets' }, { range: '> 10°C', label: 'Unsuitable — rapid evaporation' }],
            assessment: '6.4°C is inside the ideal 2–8°C window — suitable conditions for spraying.',
            whyMatters: 'Outside the ideal band, droplets either evaporate before reaching the target or stay airborne and drift.',
            methodology: 'Calculated from station air temperature and relative humidity, then mapped onto the SprayWise Delta T bands.' },
          lines: [{ l: 'Status', v: 'Ideal' }] },
        { label: 'Pressure', value: '1016.4', unit: 'hPa', icon: ICON.pressure, ink: '#8B5CF6', tint: '#EDE9FE', plain: true,
          compare: wCompare('up', '#8B5CF6', '3 hPa vs yesterday'), spark: wSpark(wGenPoints('card3h').map(p => p.pressure), 'line'),
          lines: [{ l: 'MSL', v: '1017 hPa', vc: '#2563EB', vs: '14px' }] },
        { label: 'Wind Speed & Direction', value: '17', unit: 'km/h', icon: ICON.wind, ink: '#06B6D4', tint: '#CFFAFE', compass: true, dir: 'SW',
          spark2: wSpark(wGenPoints('card3h').map(p => p.wind), 'line'),
          lines: [{ l: 'Peak Today', v: '21 km/h at 1:40 PM' }] },
        { label: 'Wind Gust', value: '27', unit: 'km/h', icon: ICON.windGust, ink: '#C23B3B', tint: '#FDE4E4', plain: true,
          spark: wSpark(wGenPoints('card3h').map(p => p.wind * 1.35 + 3), 'line'),
          lines: [{ l: 'Peak Today', v: '33 km/h at 2:00 PM' }] },
        { label: 'Solar Radiation', value: '612', unit: 'W/m\u00b2', icon: ICON.solar, ink: '#F59E0B', tint: '#FEF3C7', plain: true,
          compare: wCompare('down', '#F59E0B', '\u2212168 W/m\u00b2 vs last reading'), spark: wSpark(wGenPoints('card3h').map(p => p.solar), 'line'),
          lines: [{ l: 'Peak Today', v: '891 W/m\u00b2 at 1:15 PM' }] },
        { label: 'UV Index', value: '4.2', icon: ICON.uv, ink: '#CA8A04', tint: '#FEF9C3', donut: true, gaugePath: 'M10,54 A40,40 0 0 1 35.5,16.7', needleX: 35.5, needleY: 16.7, showInfo: true,
          infoOpen: this.state.infoOpen === 'uvhighlight', toggleInfo: (e) => { e.stopPropagation(); this.setInfoPos(e); this.setState(s => ({ infoOpen: s.infoOpen === 'uvhighlight' ? null : 'uvhighlight' })); },
          info: { reference: 'Based on the WHO / Bureau of Meteorology UV Index scale.', definition: 'A standardised 0\u201311+ scale describing the strength of sunburn-causing UV radiation.',
            thresholds: [{ range: '0\u20132', label: 'Optimal (Low)' }, { range: '3\u20135', label: 'Caution (Moderate)' }, { range: '6\u20137', label: 'Caution (High)' }, { range: '8+', label: 'High Risk (Very High/Extreme)' }],
            assessment: "4.2 (Moderate), down from today's peak of 6.8 \u2014 sun protection recommended for outdoor workers around midday.",
            whyMatters: 'High UV exposure raises sunburn and heat-related risk for field workers.',
            methodology: 'Status maps the current reading onto the WHO / BOM UV Index scale.' },
          lines: [{ l: 'Status', v: 'Moderate' }, { l: 'Peak Today', v: '6.8 at 11:00 AM' }] },
        { label: 'Evapotranspiration', value: '2.8', unit: 'mm', icon: ICON.evapo, ink: '#14B8A6', tint: '#CCFBF1', plain: true, valueNote: 'Yesterday',
          spark: { ...wSpark([2.7, 3.0, 2.6], 'bars'), labels: ['Sat 5 Sep', 'Sun 6 Sep', 'Mon 7 Sep'] },
          lines: [{ l: '3-Day Average (5–7 Sep)', v: '2.8 mm' }] },
      ]),
      highlightRow1: this.wxSparkHover(wxOrder(highlightChipsList).slice(0, 5)).map(c => ({ ...c, cardZ: c.infoOpen ? 60 : 'auto', noLines: !(c.lines && c.lines.length), bg: WX_BG[String(c.label).replace(/ \(.*\)$/, '')] || c.icon, compare: c.compare ? { ...c.compare, color: '#4C5550', fill: c.compare.fill && c.compare.fill !== 'none' ? '#4C5550' : c.compare.fill, stroke: c.compare.stroke && c.compare.stroke !== 'none' ? '#4C5550' : c.compare.stroke } : c.compare })).map(c => ({ ...c, span: 'span 1' })).map(tzInfo).map(c => ({ ...c, lines: c.lines ? c.lines.map(ln => ({ vc: '#0F1A14', vs: '12px', ...ln })) : c.lines })),
      highlightRow2: this.wxSparkHover(wxOrder(highlightChipsList).slice(5, 10)).map(c => ({ ...c, cardZ: c.infoOpen ? 60 : 'auto', noLines: !(c.lines && c.lines.length), bg: WX_BG[String(c.label).replace(/ \(.*\)$/, '')] || c.icon, compare: c.compare ? { ...c.compare, color: '#4C5550', fill: c.compare.fill && c.compare.fill !== 'none' ? '#4C5550' : c.compare.fill, stroke: c.compare.stroke && c.compare.stroke !== 'none' ? '#4C5550' : c.compare.stroke } : c.compare })).map(c => ({ ...c, span: 'span 1' })).map(tzInfo).map(c => ({ ...c, lines: c.lines ? c.lines.map(ln => ({ vc: '#0F1A14', vs: '12px', ...ln })) : c.lines })),
      heroCards: [
        { label: 'Humidity', unit: '%', value: '58', icon: ICON.humidity, ink: '#0E7C9E', tint: '#DFF3F9',
          statusLabel: 'OPTIMAL', statusColor: '#0E7C3A', statusBg: '#DFF3EC',
          lines: [{ l: 'Dew point', v: '9.6°C' }], insight: 'Up 3% from last hour — trending toward evening peak.',
          info: { reference: 'Based on general plant pathology / disease-management guidance.', definition: 'Relative humidity \u2014 how much moisture the air is holding relative to what it could hold at that temperature.',
            thresholds: [{ range: '< 30%', label: 'Caution (dry stress)' }, { range: '30\u201370%', label: 'Optimal' }, { range: '70\u201385%', label: 'Caution (disease)' }, { range: '> 85%', label: 'High Risk (disease)' }],
            assessment: '58% is within the optimal band; disease pressure is not currently elevated.',
            whyMatters: 'Sustained high humidity with leaf wetness raises fungal disease risk; very low humidity increases plant water stress.',
            methodology: 'Status compares the current reading against standard humidity bands for disease pressure.' } },
        { label: 'Delta T', unit: '°C', value: '6.4', icon: ICON.deltaT, ink: '#0E8060', tint: '#DFF3EC',
          statusLabel: 'OPTIMAL', statusColor: '#0E7C3A', statusBg: '#DFF3EC',
          lines: [{ l: 'Status', v: 'Ideal' }],
          insight: 'Peaked at 7.4°C around midday, easing to 6.4°C now — still inside the 2–8°C spray-safe window.',
          info: { reference: 'Based on Australian Bureau of Meteorology / GRDC SprayWise spray guidance.', definition: 'The difference between air temperature and wet-bulb temperature \u2014 a measure of evaporation rate.',
            thresholds: [{ range: '< 2\u00b0C', label: 'Caution (slow drying)' }, { range: '2\u20138\u00b0C', label: 'Optimal' }, { range: '8\u201310\u00b0C', label: 'Caution (fast evaporation)' }, { range: '> 10\u00b0C', label: 'High Risk (spray failure)' }],
            assessment: '6.4\u00b0C sits in the ideal 2\u20138\u00b0C spray window.',
            whyMatters: 'Delta T affects spray droplet evaporation, coverage, and effectiveness.',
            methodology: 'Status is calculated by comparing the current reading against the GRDC-recommended spray window.' } },
        { label: 'Pressure', unit: 'hPa', value: '1016.4', icon: ICON.pressure, ink: '#7C4DDA', tint: '#EEE7FB',
          statusLabel: 'OPTIMAL', statusColor: '#0E7C3A', statusBg: '#DFF3EC',
          lines: [{ l: 'MSL', v: '1017 hPa' }], insight: 'Steady vs the last reading (1016.1 hPa) — no front moving in.',
          info: { reference: 'Based on standard meteorological pressure observation.', definition: 'Atmospheric pressure at the station \u2014 an indicator of incoming weather changes.',
            thresholds: [{ range: 'Informational', label: 'Trend matters more than absolute value' }],
            assessment: '1016.4 hPa and rising \u2014 indicates stable conditions, no front approaching.',
            whyMatters: 'Falling pressure often precedes rain or storms; rising pressure indicates settled weather.',
            methodology: 'Direct sensor measurement; trend derived from the last 24 hours.' } },
        { label: 'Wind Speed & Direction', unit: 'km/h', value: '17', icon: ICON.wind, ink: '#1B8FB3', tint: '#DFF3F9', compass: true, dir: 'SW',
          statusLabel: 'CAUTION', statusColor: '#B45309', statusBg: '#FEF3C7',
          lines: [{ l: 'Direction', v: 'SW' }], insight: 'Speed up from 12 km/h last reading, holding steady from the SW.',
          info: { reference: 'Based on spray drift guidance (product-label wind restrictions).', definition: 'Sustained wind speed and gust speed measured at the station.',
            thresholds: [{ range: '< 15 km/h', label: 'Optimal (spray-safe)' }, { range: '15\u201325 km/h', label: 'Caution (drift risk)' }, { range: '> 25 km/h', label: 'High Risk (unsafe to spray)' }],
            assessment: '17 km/h sustained, gusting to 27 km/h \u2014 above the 15 km/h drift threshold most product labels specify.',
            whyMatters: 'Wind above label limits increases spray drift onto non-target areas and reduces application accuracy.',
            methodology: 'Status compares sustained wind speed against the drift threshold used on most spray product labels.' } },
        { label: 'Wind Gust', unit: 'km/h', value: '27', icon: ICON.windGust, ink: '#C23B3B', tint: '#FDE4E4',
          statusLabel: 'CAUTION', statusColor: '#B45309', statusBg: '#FEF3C7',
          lines: [{ l: 'Peak (6h)', v: '33 km/h at 2:00 PM' }], insight: 'Easing from the 2pm peak of 33 km/h to 27 km/h now — trending down through the afternoon.',
          info: { reference: 'Based on spray drift guidance (product-label wind restrictions).', definition: 'Peak instantaneous wind speed measured at the station.',
            thresholds: [{ range: '< 25 km/h', label: 'Optimal' }, { range: '25\u201335 km/h', label: 'Caution (drift risk)' }, { range: '> 35 km/h', label: 'High Risk' }],
            assessment: '27 km/h, easing from a 2pm peak of 33 km/h \u2014 above the 25 km/h caution level.',
            whyMatters: 'Strong gusts increase spray drift risk and can trigger automatic boom shutdowns.',
            methodology: 'Status compares peak gust speed against drift-risk thresholds used in spray guidance.' } },
        { label: 'Solar Radiation', unit: 'W/m²', value: '612', icon: ICON.solar, ink: '#D97706', tint: '#FEF3C7',
          statusLabel: 'OPTIMAL', statusColor: '#0E7C3A', statusBg: '#DFF3EC',
          lines: [{ l: 'Peak Today', v: '891 W/m²' }, { l: 'Observed at', v: '1:15 PM' }], insight: 'Down from 780 W/m² last hour as cloud cover moves in.',
          info: { reference: 'Based on standard meteorological solar radiation measurement.', definition: 'Incoming solar energy per square metre, measured at the station.',
            thresholds: [{ range: 'Informational', label: 'No fixed risk threshold' }],
            assessment: '612 W/m\u00b2, down from a midday peak of 891 W/m\u00b2 as cloud cover moves in.',
            whyMatters: 'Solar radiation drives photosynthesis and evapotranspiration; sudden drops can signal incoming weather changes.',
            methodology: 'Direct sensor measurement \u2014 no derived status.' } },
        { label: 'UV Index', unit: '', value: '4.2', icon: ICON.uv, ink: '#9333EA', tint: '#F3E8FF', showStatus: true, donut: true, donutPct: 38,
          statusLabel: 'CAUTION', statusColor: '#B45309', statusBg: '#FEF3C7',
          lines: [{ l: 'Status', v: 'Moderate' }, { l: "Today's peak", v: '6.8' }], insight: 'Down from this morning\'s peak of 6.8 at 11:00 AM to 4.2 now \u2014 still Moderate exposure.',
          info: { reference: 'Based on the WHO / Bureau of Meteorology UV Index scale.', definition: 'A standardised 0\u201311+ scale describing the strength of sunburn-causing UV radiation.',
            thresholds: [{ range: '0\u20132', label: 'Optimal (Low)' }, { range: '3\u20135', label: 'Caution (Moderate)' }, { range: '6\u20137', label: 'Caution (High)' }, { range: '8+', label: 'High Risk (Very High/Extreme)' }],
            assessment: "4.2 (Moderate), down from today's peak of 6.8 \u2014 sun protection recommended for outdoor workers around midday.",
            whyMatters: 'High UV exposure raises sunburn and heat-related risk for field workers.',
            methodology: 'Status maps the current reading onto the WHO / BOM UV Index scale.' } },
        { label: 'Evapotranspiration', unit: 'mm', value: '2.8', valueNote: 'Yesterday', icon: ICON.evapo, ink: '#0D9488', tint: '#CCFBF1',
          statusLabel: 'OPTIMAL', statusColor: '#0E7C3A', statusBg: '#DFF3EC',
          lines: [{ l: '7-Day Average', v: '2.9 mm' }], insight: 'Up 0.2 mm on the previous day \u2014 higher water demand expected.',
          info: { reference: 'Based on FAO Penman-Monteith methodology.', definition: 'Combined water loss from soil evaporation and crop transpiration.',
            thresholds: [{ range: 'Informational', label: 'Used with rainfall for irrigation planning' }],
            assessment: '2.8mm yesterday, close to the 7-day average of 2.9mm \u2014 normal water loss for the season.',
            whyMatters: 'ET helps estimate how much irrigation is needed to replace water lost from the field.',
            methodology: 'Calculated using the FAO Penman-Monteith equation from temperature, humidity, wind and solar inputs.' } },
      ].map(c => ({ ...c, labelUpper: c.label.toUpperCase(), gridColumn: c.gridColumn || 'span 1', showBigValue: c.donut ? false : true, linesMarginTop: c.donut ? '0' : '0', infoOpen: this.state.infoOpen === 'hero-' + c.label, toggleInfo: (e) => { e.stopPropagation(); this.setInfoPos(e); this.setState(s => ({ infoOpen: s.infoOpen === ('hero-' + c.label) ? null : ('hero-' + c.label) })); } })),
      kpiMetrics: [
        { label: 'Temperature', unit: '°C', value: '18.4', tint: '#FDEBE0', ink: '#E4572E', icon: ICON.temp,
          lines: [{ l: 'Today Min', v: '10.9°C' }, { l: 'Today Max', v: '20.1°C' }], trendLabel: '6h Trend', trendVal: '-5.0°C', trendDir: 'down' },
        { label: 'Humidity', unit: '%', value: '58', tint: '#E4EEFB', ink: '#2A6FDB', icon: ICON.humidity,
          lines: [{ l: 'Today Min', v: '45%' }, { l: 'Today Max', v: '72%' }], trendLabel: 'Trend', trendVal: '-4%', trendDir: 'down' },
        { label: 'Rainfall', unit: 'mm', value: '0.6', tint: '#E0F2FE', ink: '#0284C7', icon: ICON.rain,
          lines: [{ l: '24 Hours', v: '0.6 mm' }, { l: '7 Days', v: '12.4 mm' }], trendLabel: 'Last Rain', trendVal: 'Today', trendDir: 'flat' },
        { label: 'Atm. Pressure', unit: 'hPa', value: '1016.4', tint: '#EDE9FE', ink: '#7C3AED', icon: ICON.pressure,
          lines: [{ l: '24h Range', v: '1013 – 1018' }], trendLabel: 'Trend', trendVal: 'Rising', trendDir: 'up' },
        { label: 'MSL Pressure', unit: 'hPa', value: '1017.0', tint: '#EDE9FE', ink: '#7C3AED', icon: ICON.pressure,
          lines: [{ l: '24h Range', v: '1014 – 1019' }], trendLabel: 'Trend', trendVal: 'Rising', trendDir: 'up' },
        { label: 'Delta T', unit: '°C', value: '6.4', tint: '#DFF3EC', ink: '#0E8060', icon: ICON.deltaT,
          lines: [{ l: 'Status', v: 'Ideal' }, { l: 'Spray Suitability', v: 'Good' }], trendLabel: '', trendVal: '', trendDir: '' },
        { label: 'Dew Point', unit: '°C', value: '9.6', tint: '#E4EEFB', ink: '#2A6FDB', icon: ICON.humidity,
          lines: [{ l: 'Comfort', v: 'Moderate' }, { l: 'vs Air Temp', v: '-8.8°C' }], trendLabel: '', trendVal: '', trendDir: '' },
        { label: 'Wind Speed', unit: 'km/h', value: '17', tint: '#DFF3EC', ink: '#0E8060', icon: ICON.wind,
          lines: [{ l: 'Average', v: '14 km/h' }, { l: 'Maximum Today', v: '27 km/h' }], trendLabel: '', trendVal: '', trendDir: '' },
        { label: 'Wind Direction', unit: '', value: 'SW', tint: '#FEF3C7', ink: '#D97706', icon: ICON.wind, compass: true, dir: 'SW',
          lines: [{ l: 'Bearing', v: '225°' }], trendLabel: '', trendVal: '', trendDir: '' },
        { label: 'Wind Gust', unit: 'km/h', value: '27', tint: '#FDE4E4', ink: '#C23B3B', icon: ICON.wind,
          lines: [{ l: "Today's Maximum", v: '27 km/h' }], trendLabel: 'Trend', trendVal: 'Steady', trendDir: 'flat' },
        { label: 'Solar Radiation', unit: 'W/m²', value: '612', tint: '#FEF3C7', ink: '#D97706', icon: ICON.solar,
          lines: [{ l: 'Peak Today', v: '891 W/m²' }, { l: 'Daily Total', v: '4.2 kWh/m²' }], trendLabel: '', trendVal: '', trendDir: '' },
        { label: 'UV Index', unit: '', value: '4.2', tint: '#F3E8FF', ink: '#9333EA', icon: ICON.uv,
          lines: [{ l: 'Status', v: 'Moderate' }, { l: "Today's Peak", v: '6.8' }], trendLabel: '', trendVal: '', trendDir: '' },
        { label: 'Evapotranspiration', unit: 'mm', value: '2.8', tint: '#CCFBF1', ink: '#0D9488', icon: ICON.evapo,
          lines: [{ l: 'Yesterday', v: '2.6 mm' }, { l: '7 Day Avg', v: '2.9 mm' }], trendLabel: '', trendVal: '', trendDir: '' },
      ].map(m => ({ ...m, trendIcon: m.trendDir === 'up' ? 'M12 5l6 7h-4v7h-4v-7H6z' : m.trendDir === 'down' ? 'M12 19l-6-7h4V5h4v7h4z' : 'M5 12h14', trendColor: m.trendDir === 'up' ? '#15803D' : m.trendDir === 'down' ? '#EA580C' : '#6A746E' })),
      aiQuery: this.state.aiQuery || '',
      onAiQueryChange: (e) => this.setState({ aiQuery: e.target.value }),
      onAiQueryKeyDown: (e) => { if (e.key === 'Enter' && vals.aiInsights[0]) this.setState({ aiOpenIndex: vals.aiInsights[0].idx }); },
      soilQuery: this.state.soilQuery || '',
      onSoilQueryChange: (e) => this.setState({ soilQuery: e.target.value }),
      onSoilQueryKeyDown: (e) => { if (e.key === 'Enter' && vals.soilInsights[0]) this.setState({ soilAiOpen: vals.soilInsights[0].idx }); },
      wxInsights: [
        { icon: ICON.temp, text: 'Temperature dropped 5.0°C in the last 6 hours — normal for a spring evening.' },
        { icon: ICON.rain, text: 'Rainfall this week (12.4 mm) is below the seasonal average for Perth.' },
      ],
      riskCards: [
        { title: 'Spray Conditions', icon: ICON.spray, ink: '#0E8060', tint: '#DFF3EC', status: 'GOOD', statusColor: '#0E8060', statusTint: '#DFF3EC',
          why: 'Delta T at 6.4°C sits in the ideal 2–8°C spray window, and wind at 17 km/h is under the drift threshold.',
          action: 'Safe to spray now — recheck before 4pm as wind is forecast to pick up.',
          info: 'GOOD requires Delta T between 2\u20138\u00b0C (standard product-label spray window) and wind under 15 km/h (drift threshold most labels specify).' },
        { title: 'Disease Risk', icon: ICON.disease, ink: '#D97706', tint: '#FEF3C7', status: 'MODERATE', statusColor: '#B45309', statusTint: '#FEF3C7',
          why: 'Humidity at 58% plus recent rainfall is keeping canopy moisture elevated, favouring fungal pressure.',
          action: 'Inspect dense canopy blocks; consider a preventive spray if humidity climbs above 70%.',
          info: 'Based on relative humidity and recent rainfall: sustained humidity above 70% with leaf wetness raises fungal disease pressure (general plant pathology guidance).' },
        { title: 'Heat Stress', icon: ICON.temp, ink: '#2A6FDB', tint: '#E4EEFB', status: 'LOW', statusColor: '#2A6FDB', statusTint: '#E4EEFB',
          why: 'Today\'s max of 20.1°C is well below the 35°C stress threshold for this crop stage.',
          action: 'No irrigation adjustment needed today.',
          info: 'Compares today\u2019s max air temperature to a 35\u00b0C heat-stress threshold, a common agronomic benchmark for this crop stage.' },
        { title: 'Chill Hours', icon: ICON.chill, ink: '#7C4DDA', tint: '#EEE7FB', status: 'ON TRACK', statusColor: '#7C4DDA', statusTint: '#EEE7FB',
          why: 'Accumulated overnight lows are tracking with seasonal dormancy requirements.',
          action: '184 hrs this season — on pace to hit target before July.',
          info: 'Chill hours accumulate using the standard model (hours with temperature below 7\u00b0C), tracked against this crop\u2019s seasonal dormancy requirement.' },
      ].map(rc => ({ ...rc, open: this.state.infoOpen === 'risk-' + rc.title, toggle: (e) => { e.stopPropagation(); this.setInfoPos(e); this.setState(s => ({ infoOpen: s.infoOpen === ('risk-' + rc.title) ? null : ('risk-' + rc.title) })); } })),
      wxRanges: [['24h', '1D'], ['7d', '1W'], ['30d', '1M'], ['3m', '3M'], ['6m', '6M']].map(([k, label]) => ({
        key: k, label, bg: k === wxRange ? tabAccent : '#F1F5F7', color: k === wxRange ? '#fff' : '#3F4B55',
        select: () => this.setState({ wxRange: k, wxCustomOpen: false }),
      })),
      wxCustomOpen: this.state.wxCustomOpen,
      wxCustomActive: wxRange === 'custom',
      wxCustomBg: wxRange === 'custom' ? tabAccent : '#F1F5F7',
      wxCustomColor: wxRange === 'custom' ? '#fff' : '#3F4B55',
      toggleWxCustom: () => this.setState(s => ({ wxCustomOpen: !s.wxCustomOpen })),
      wxCustomFrom: this.state.wxCustomFrom || '2026-06-01',
      wxCustomTo: this.state.wxCustomTo || '2026-09-09',
      onWxCustomFromChange: (e) => this.setState({ wxCustomFrom: e.target.value }),
      onWxCustomToChange: (e) => this.setState({ wxCustomTo: e.target.value }),
      applyWxCustom: () => this.setState({ wxRange: 'custom', wxCustomOpen: false }),
      wxCustomPresets: [['3m', 'Last 3 months'], ['6m', 'Last 6 months'], ['9m', 'Last 9 months'], ['12m', 'Last 12 months']].map(([k, label]) => ({
        label, select: () => this.setState({ wxRange: k, wxCustomOpen: false }),
      })),
      wxCharts: (() => {
        const CHART_INSIGHTS = {
          temp: 'Overnight low is tracking well above the 2\u00b0C frost threshold \u2014 no protection needed tonight.',
          humidity: 'Above 70% humidity with recent rain raises disease pressure \u2014 watch dense canopy blocks closely.',
          deltaT: 'The 2\u20138\u00b0C band is the ideal spray window \u2014 outside it, evaporation or drift risk increases.',
          dewpoint: 'A close dew point\u2013air temp gap overnight raises the chance of leaf wetness and fungal risk.',
          et: '2.8 mm yesterday is a reasonable irrigation replacement figure if soil moisture is below target.',
        };
        const drill = this.state.chartDrill || {};
        const byTab = {
          temprain: [{ ...wBuildChartCard('tempSimple', this.state.tempView === 'daily' ? wxRange : this.state.tempView), showStats: true,
            viewTabs: ['daily', 'hourly', 'detail'].map(v => { const on = (this.state.tempView || 'daily') === v; return { key: v, label: v === 'detail' ? 'Detailed' : v[0].toUpperCase() + v.slice(1), bg: on ? tabAccent : 'transparent', ink: on ? '#fff' : '#3F4B55', select: () => this.setState({ tempView: v }) }; }),
            span: '1 / -1' }],
          humidity: [
            { ...wBuildChartCard('humidity', drill.humidity ? 'hourly' : wxRange), span: '1 / -1' },
            { ...wBuildChartCard('deltaT', drill.deltaT ? 'hourly' : wxRange), span: 'span 1' },
            { ...wBuildChartCard('dewpoint', drill.dewpoint ? 'hourly' : wxRange), span: 'span 1' },
          ],
          et: [{ ...wBuildChartCard('et', drill.et ? 'hourly' : wxRange), span: '1 / -1' }],
        }[this.state.wxTab] || [{ ...wBuildChartCard('temp', wxRange), span: '1 / -1' }];
        const zoomMap = this.state.chartZoom || {};
        const cols = this.state.wxTab === 'humidity' ? 2 : 1;
        return { list: byTab.map(c => ({ ...c, zoom: zoomMap[c.id] || 1, xAt: wAxisFor(c, zoomMap[c.id] || 1), insight: CHART_INSIGHTS[c.id] })), cols };
      })(),
      solarViewTabs: ['hourly', 'daily'].map(v => {
        const on = (this.state.wxSolarView || 'hourly') === v;
        return { key: v, label: v[0].toUpperCase() + v.slice(1), bg: on ? tabAccent : '#fff', ink: on ? '#fff' : '#3F4B55', border: on ? tabAccent : '#DCE3E9', select: () => this.setState({ wxSolarView: v }) };
      }),
      solarMainChart: (() => {
        const view = this.state.wxSolarView || 'hourly';
        const zoomMap = this.state.chartZoom || {};
        const withZoom = (o) => ({ ...o, zoom: zoomMap.solarMain || 1 });
        if (view === 'daily') {
          const pts = wGenPoints('7d').map(p => ({ ...p, solarTotal: +(p.solar * 0.0055).toFixed(1) }));
          return withZoom({ ...wBarChart(pts, 'solarTotal', 'kWh/m²', 1, '#F59E0B'), title: 'Daily Solar Total', barColor: '#F59E0B', lineColor: 'none', isBar: true, isArea: false, legend: [] });
        }
        return withZoom({ ...wAreaChart(wGenPoints('24h'), 'solar', 'W/m²', 0, '#F59E0B', 'gradSolarMain'), title: 'Solar Radiation Today', lineColor: '#F59E0B', isBar: false, isArea: true, legend: [] });
      })(),
      uvChartCard: (() => {
        const zoomMap = this.state.chartZoom || {};
        const uc = wBuildChartCard('uv', wxRange);
        return this.winView(uc, 'uvMain', 'uv' + wxRange);
      })(),
      rainViewTabs: ['hourly', 'daily', 'monthly', 'cumulative'].map(v => {
        const on = (this.state.wxRainView || 'daily') === v;
        return { key: v, label: v[0].toUpperCase() + v.slice(1), bg: on ? tabAccent : '#fff', ink: on ? '#fff' : '#3F4B55', border: on ? tabAccent : '#DCE3E9', select: () => this.setState({ wxRainView: v }) };
      }),
      wxRainCharts: (() => {
        const z = { ...this.tzGet('RF'), a: 0, b: 1, hover: null }, effRange = String(z.range || '1w') + (z.range === 'custom' ? (z.from || '') + (z.to || '') : '');
        const raw = tzBuild('temp', z.range, z).raw, w0 = raw[0].t, w1 = raw[raw.length - 1].t, wn = this.winOf('rainDaily'), hourly = w1 - w0 <= 8 * 864e5 || (wn.b - wn.a) * (w1 - w0) <= 7.5 * 864e5, view = hourly ? 'hourly' : 'daily';
        const S = (t0, t1) => Math.max(0, +tzSumRain(t0, t1).toFixed(1)), fH = d => (d.getHours() % 12 || 12) + (d.getHours() < 12 ? ' AM' : ' PM');
        const d0 = new Date(w0), step = hourly ? 3600e3 : 864e5, start = hourly ? new Date(d0.getFullYear(), d0.getMonth(), d0.getDate(), d0.getHours()).getTime() : new Date(d0.getFullYear(), d0.getMonth(), d0.getDate()).getTime();
        const pts = []; for (let t = start; t <= w1; t += step) { const d = new Date(t); pts.push({ t, label: hourly ? tzDate(d) + ', ' + fH(d) : tzDate(d), ax: { top: hourly ? wFmtHour(d) : wFmtDate(d), sub: hourly ? wFmtDate(d) : '', h: wFmtHour(d), d: wFmtDate(d), hh: d.getHours(), stepH: hourly ? 1 : 24 }, rain: S(Math.max(t, w0), Math.min(t + step, w1)) }); }
        const dayV = []; for (let t = new Date(d0.getFullYear(), d0.getMonth(), d0.getDate()).getTime(); t <= w1; t += 864e5) dayV.push(S(Math.max(t, w0), Math.min(t + 864e5, w1)));
        const tot = S(w0, w1), fv = pts.map(p => p.rain), mx = Math.max(...fv), wi = fv.indexOf(mx);
        const base = { points: [], bars: [], line: '', area: '', isArea: false };
        const first = { ...base, ...wBarChart(pts, 'rain', 'mm', 1, '#0EA5A4'), title: hourly ? 'Hourly Rainfall (mm)' : 'Daily Rainfall (mm)', barColor: '#0EA5A4', lineColor: 'none', tabs: [],
          stats: [{ label: 'Total:', value: tot.toFixed(1) + ' mm', when: '' }, { label: hourly ? 'Wettest hour:' : 'Wettest day:', value: mx > 0 ? mx.toFixed(1) + ' mm' : '—', when: mx > 0 ? '· ' + pts[wi].label : '' }, { label: 'Rainy days:', value: String(dayV.filter(v => v >= .2).length), when: '(≥ 0.2 mm)' }] };
        const ms = []; for (let m0 = new Date(d0.getFullYear(), d0.getMonth(), 1); m0.getTime() <= w1; m0 = new Date(m0.getFullYear(), m0.getMonth() + 1, 1)) { const m1 = new Date(m0.getFullYear(), m0.getMonth() + 1, 1).getTime(); ms.push({ t: m0, v: S(Math.max(m0.getTime(), w0), Math.min(m1, w1)) }); }
        return [
          first,
          { ...base, ...wMonthlyRain(null, null, ms), title: 'Monthly Rainfall (mm)', barColor: '#0EA5A4', lineColor: 'none', tabs: [] },
          { ...base, ...wCumulativeRain(pts), title: 'Cumulative Rainfall (mm)', barColor: 'none', lineColor: tabAccent, isArea: true, tabs: [], stats: [{ label: 'Running total:', value: tot.toFixed(1) + ' mm', when: 'from ' + tzDate(d0) }] },
        ].map((c, i) => { const id = ['rainDaily', 'rainMonthly', 'rainCum'][i]; return { ...this.winView(c, id, effRange), id }; });
      })(),
      rainMainChart: (() => {
        const view = this.state.wxRainView || 'daily';
        const effRange = ({ '24h': '24h', '1w': '7d', '1m': '1m', '3m': '3m', '6m': '6m', custom: '30d' })[(this.tzGet('RF') || {}).range] || '7d';
        const zoomMap = this.state.chartZoom || {};
        const withZoom = (o) => ({ ...o, zoom: zoomMap.rainMain || 1 });
        if (view === 'monthly') return withZoom({ ...wMonthlyRain(effRange), title: 'Monthly Rainfall', barColor: '#0EA5A4', lineColor: 'none', isBar: true, isArea: false, legend: [] });
        if (view === 'cumulative') return withZoom({ ...wCumulativeRain(wGenPoints(effRange)), title: 'Cumulative Rainfall', barColor: 'none', lineColor: tabAccent, isBar: false, isArea: true, legend: [] });
        if (view === 'hourly') return withZoom({ ...wBarChart(wHourlyRain(effRange), 'rain', 'mm', 1, '#0EA5A4'), title: 'Hourly Rainfall', barColor: '#0EA5A4', lineColor: 'none', isBar: true, isArea: false, legend: [] });
        return withZoom({ ...wBarChart(wGenPoints(({ '3m': 'd3m', '6m': 'd6m' })[effRange] || effRange), 'rain', 'mm', 1, '#0EA5A4'), title: 'Daily Rainfall', barColor: '#0EA5A4', lineColor: 'none', isBar: true, isArea: false, legend: [] });
      })(),
      cmpA: this.state.cmpA || 'temp',
      cmpB: this.state.cmpB || 'rain',
      onCmpASelect: (e) => this.setState({ cmpA: e.target.value }),
      onCmpBSelect: (e) => this.setState({ cmpB: e.target.value }),
      cmpMetricsA: CMP_METRICS.filter(m => m.key !== this.state.cmpB).map(m => { const on = m.key === this.state.cmpA; return { ...m, active: on, bg: on ? '#F1F7F3' : 'transparent', chipBg: on ? '#0E7C3A' : '#fff', chipInk: on ? '#fff' : '#3F4B55', chipBorder: on ? '#0E7C3A' : '#DCE3E9', select: () => this.setState({ cmpA: m.key, cmpAOpen: false }) }; }),
      cmpMetricsB: CMP_METRICS.filter(m => m.key !== this.state.cmpA).map(m => { const on = m.key === this.state.cmpB; return { ...m, active: on, bg: on ? '#F1F7F3' : 'transparent', chipBg: on ? '#0E7C3A' : '#fff', chipInk: on ? '#fff' : '#3F4B55', chipBorder: on ? '#0E7C3A' : '#DCE3E9', select: () => this.setState({ cmpB: m.key, cmpBOpen: false }) }; }),
      cmpALabel: (CMP_METRICS.find(m => m.key === this.state.cmpA) || CMP_METRICS[0]).label,
      cmpBLabel: (CMP_METRICS.find(m => m.key === this.state.cmpB) || CMP_METRICS[1]).label,
      cmpAOpen: this.state.cmpAOpen,
      cmpBOpen: this.state.cmpBOpen,
      toggleCmpA: () => this.setState(s => ({ cmpAOpen: !s.cmpAOpen, cmpBOpen: false })),
      toggleCmpB: () => this.setState(s => ({ cmpBOpen: !s.cmpBOpen, cmpAOpen: false })),
      cmpARanges: [['6h', '6 hours'], ['9h', '9 hours'], ['24h', '24 hours'], ['48h', '48 hours']].map(([k, label]) => ({
        label, bg: 'transparent', color: '#3F4B55', menuBg: k === (this.state.cmpARange || '24h') ? '#EAF3FA' : 'transparent',
        select: () => this.setState({ cmpARange: k, cmpAOpen: false }),
      })),
      cmpBRanges: [['6h', '6 hours'], ['9h', '9 hours'], ['24h', '24 hours'], ['48h', '48 hours']].map(([k, label]) => ({
        label, bg: 'transparent', color: '#3F4B55', menuBg: k === (this.state.cmpBRange || '24h') ? '#EAF3FA' : 'transparent',
        select: () => this.setState({ cmpBRange: k, cmpBOpen: false }),
      })),
      cmpARangeLabel: { '6h': '6 hours', '9h': '9 hours', '24h': '24 hours', '48h': '48 hours' }[this.state.cmpARange || '24h'],
      cmpBRangeLabel: { '6h': '6 hours', '9h': '9 hours', '24h': '24 hours', '48h': '48 hours' }[this.state.cmpBRange || '24h'],
      chartA: wBuildChartCard(this.state.cmpA || 'temp', (this.state.chartDrill || {}).cmpA ? 'hourly' : (this.state.cmpARange || '24h')),
      chartB: wBuildChartCard(this.state.cmpB || 'rain', (this.state.chartDrill || {}).cmpB ? 'hourly' : (this.state.cmpBRange || '24h')),
      chartAZoom: (this.state.chartZoom || {}).cmpA || 1,
      chartBZoom: (this.state.chartZoom || {}).cmpB || 1,
      activeCharts: 0,
      activeColumns: 0,
      isDash: this.state.screen === 'dash',
      isCats: this.state.screen === 'cats',
      isList: this.state.screen === 'list',
      isMobile: this.state.screen === 'mobile',
      goDevices: () => this.go('list'),
      goCats: () => this.go('cats'),
      headStamp: chosen.length === 1 ? STAMPS[chosen[0].id] : STAMPS[(chosen[0] || DEVICES[0]).id],
      categories: CATS.map(c => ({ ...c, d2: c.d2 || '', single: !c.d2, c2: c.kind === 'wxsoil' ? '#6B4A3A' : '#3F7A2A', open: c.kind ? () => this.setState({ screen: 'list', listKind: c.kind, combo: null }) : () => this.go('cats') })),
      listLabel: (this.state.listKind === 'wxsoil' || this.state.listKind === 'wxleaf') ? CATS.find(c => c.kind === this.state.listKind).label : this.state.listKind === 'dust' ? 'Dust Sensor' : this.state.listKind === 'thp' ? 'Temp Humidity Pressure Sensor' : this.state.listKind === 'pressure' ? 'Pressure Sensor' : this.state.listKind === 'level' ? 'Water Level' : this.state.listKind === 'rain' ? 'Rain Gauge' : this.state.listKind === 'leaf' ? 'Leaf Wetness' : this.state.listKind === 'flow' ? 'Flow Meter' : this.state.listKind === 'gas' ? 'Gas Sensor' : this.state.listKind === 'mini' ? 'Mini Soil Probe' : this.state.listKind === 'weather' ? 'Weather Station' : 'Soil Probe',
      deviceCards: DEVICES.filter(d => (d.kind || 'soil') === this.state.listKind).map(d => ({
        multi: d.kind === 'wxsoil' || d.kind === 'wxleaf', hot: d.theme === 'hot',
        rows: (() => {
          if (d.kind !== 'wxsoil' && d.kind !== 'wxleaf') return [];
          const IC = { m: 'M12 3s5 5.5 5 9a5 5 0 0 1-10 0c0-3.5 5-9 5-9z', t: 'M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0zM12 9v5', v: 'M3 12h3l2-5 3 10 3-8 2 3h5', r: 'M7 15a4 4 0 0 1 .5-7.94A5 5 0 0 1 17 9a3.5 3.5 0 0 1-.5 6.98M8 19l-1 2M12 19l-1 2M16 19l-1 2', w: 'M3 8h11a2.5 2.5 0 1 0-2-4M3 12h15a2.5 2.5 0 1 1-2 4M3 16h9' };
          const P = (label, value, unit, icon, color) => ({ label, value, unit, icon: IC[icon], color }), S = id => STAMPS[id] ? 'Last sampling ' + STAMPS[id] : '';
          const wx = { title: 'Weather Station', stamp: S('w1'), peek: [P('Temp', '19.6', '°C', 't', '#EA580C'), P('Rain 24 h', '4.2', 'mm', 'r', '#0284C7'), P('Wind', '17', 'km/h', 'w', '#0E8090')] };
          return d.kind === 'wxsoil'
            ? [wx, { title: 'Soil Probe', stamp: S('p1'), peek: [P('Moisture 10 cm', '31.4', '%', 'm', '#2563EB'), P('Temp 10 cm', '17.2', '°C', 't', '#EA580C'), P('VIC 10 cm', '502', '', 'v', '#7C3AED')] }]
            : [wx, { title: 'Leaf Wetness', stamp: S('l1'), peek: [P('Leaf Temp', '26.2', '°C', 't', '#EA580C'), P('Leaf Wetness', '54.2', '%', 'm', '#0284C7')] }];
        })(),
        name: d.name, serial: d.serial, note: d.note || '', stamp: d.kind === 'wxsoil' || d.kind === 'wxleaf' ? '' : STAMPS[d.id] ? 'Last sampling ' + STAMPS[d.id] : '', peek: (() => {
          const k = d.kind || 'soil', ix = DEVICES.filter(x => (x.kind || 'soil') === k).indexOf(d), j = v => (v + ix * .7);
          const IC = { m: 'M12 3s5 5.5 5 9a5 5 0 0 1-10 0c0-3.5 5-9 5-9z', t: 'M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0zM12 9v5', v: 'M3 12h3l2-5 3 10 3-8 2 3h5', e: 'M13 3L5 14h6l-1 7 8-11h-6l1-7z', r: 'M7 15a4 4 0 0 1 .5-7.94A5 5 0 0 1 17 9a3.5 3.5 0 0 1-.5 6.98M8 19l-1 2M12 19l-1 2M16 19l-1 2', w: 'M3 8h11a2.5 2.5 0 1 0-2-4M3 12h15a2.5 2.5 0 1 1-2 4M3 16h9', p: 'M3 17l6-6 4 4 8-8M15 7h6v6', g: 'M7 18a4 4 0 0 1 .3-7.98A5 5 0 0 1 17 11a3 3 0 0 1-.3 7z' };
          const P = (label, value, unit, icon, color) => ({ label, name: label.replace(/ \d+ cm$/, ''), depth: (label.match(/\d+ cm$/) || [''])[0], value, unit, icon: IC[icon], color });
          if (k === 'soil') return [P('Moisture 10 cm', j(31.4).toFixed(1), '%', 'm', '#2563EB'), P('Temp 10 cm', j(17.2).toFixed(1), '°C', 't', '#EA580C'), P('VIC 10 cm', String(Math.round(502 + ix * 14)), '', 'v', '#7C3AED')];
          if (k === 'mini') return [P('Moisture 20 cm', j(29.8).toFixed(1), '%', 'm', '#2563EB'), P('Temp 20 cm', j(18.1).toFixed(1), '°C', 't', '#EA580C'), P('EC 20 cm', (0.71 + ix * .04).toFixed(2), 'dS/m', 'e', '#B45309')];
          if (k === 'weather' && d.theme === 'cool') return [P('Temp', '7.4', '°C', 't', '#0284C7'), P('Rain 24 h', '0.0', 'mm', 'r', '#0284C7'), P('Wind', '12', 'km/h', 'w', '#0E8090')];
          if (k === 'weather' && d.theme === 'hot') return [P('Temp', '37.8', '°C', 't', '#DC2626'), P('Rain 24 h', '0.0', 'mm', 'r', '#0284C7'), P('Wind', '22', 'km/h', 'w', '#0E8090')];
          if (k === 'weather') return [P('Temp', '19.6', '°C', 't', '#EA580C'), P('Rain 24 h', '4.2', 'mm', 'r', '#0284C7'), P('Wind', '17', 'km/h', 'w', '#0E8090')];
          if (k === 'flow') { const F = flowSeries(), m0 = new Date(FLOW_NOW); m0.setHours(0, 0, 0, 0); let s = 0; for (let i = Math.round((m0 - F.start) / 9e5); i < F.N; i++) s += F.vol[i]; return [P('Last 15 min', flowNum(F.vol[F.N - 1]), 'L', 'p', '#0EA5A5'), P('Today', flowNum(s / 1000, 1), 'kL', 'm', '#7C4DDA')]; }
          if (k === 'gas') return [P('CO₂', '517', 'ppm', 'g', '#7C4DDA'), P('NH₃', '7.6', 'ppm', 'e', '#0E7C3A'), P('CO', '10.2', 'ppm', 'e', '#DC2626')];
          if (k === 'rain') { const R = rainDaily(), s7 = R.slice(-7).reduce((x, y) => x + y.v, 0), s30 = R.slice(-30).reduce((x, y) => x + y.v, 0); return [P('Since 9 AM', '0.0', 'mm', 'r', '#2A6FDB'), P('7 Days', s7.toFixed(1), 'mm', 'r', '#2A6FDB'), P('30 Days', s30.toFixed(1), 'mm', 'r', '#1D4ED8')]; }
          if (k === 'dust' || k === 'thp') { const C = MM_CFG[k]; return C.metrics.slice(0, 3).map((m, mi) => P(m.label, m.now.toFixed(m.dec), m.unit, k === 'dust' ? 'g' : ['t', 'm', 'p'][mi], m.color)); }
          if (k === 'pressure' || k === 'level') return [];
          if (k === 'leaf') return [P('Leaf Temp', '26.2', '°C', 't', '#EA580C'), P('Leaf Wetness', '54.2', '%', 'm', '#0284C7')];
          if (k === 'wxsoil' || k === 'wxleaf') return [];
          return [];
        })(),
        tank: d.kind === 'level' ? (() => { const T = LV_TANKS[d.id] || LV_TANKS.wl1, n = T.H.pct.length, v = T.H.pct[n - 1], dd = v - T.H.pct[n - 2]; return { pct: v.toFixed(1) + '%', h: v.toFixed(1) + '%', depth: (v / 100 * T.tank).toFixed(2) + ' m', height: T.tank + ' m', delta: (dd >= 0 ? '▲ +' : '▼ −') + Math.abs(dd).toFixed(1) + '% vs previous', deltaInk: dd >= 0 ? '#15803D' : '#DC2626' }; })() : false,
        gauge: d.kind === 'pressure' ? (() => { const n = PR_H.v.length, v = PR_H.v[n - 1], t = prTend(v - PR_H.v[n - 2]); return { value: v.toFixed(1), dash: (Math.max(0, Math.min(1, (v - 980) / 60)) * 100).toFixed(1) + ' 100', tend: t.label, tendBg: t.solid, arrow: t.arrow }; })() : false,
        typeLabel: d.kind === 'wxsoil' ? 'Weather + Soil Probe' : d.kind === 'wxleaf' ? 'Weather + Leaf Wetness' : d.kind === 'dust' ? 'Dust Sensor' : d.kind === 'thp' ? 'THP Sensor' : d.kind === 'pressure' ? 'Pressure Sensor' : d.kind === 'level' ? 'Water Level' : d.kind === 'rain' ? 'Rain Gauge' : d.kind === 'leaf' ? 'Leaf Wetness' : d.kind === 'flow' ? 'Flow Meter' : d.kind === 'gas' ? 'Gas Sensor' : (d.kind || 'soil') === 'mini' ? 'Mini Soil Probe' : (d.kind || 'soil') === 'weather' ? 'Weather Station' : 'Soil Probe',
        launch: d.kind === 'wxsoil' || d.kind === 'wxleaf' ? () => this.comboGo('weather', d) : ((L) => () => { this.setState({ combo: null }); L(); })(d.kind === 'dust' || d.kind === 'thp' ? () => this.setState({ screen: d.kind, mmTab: 'dash', mmHover: null }) : d.kind === 'pressure' ? () => this.setState({ screen: 'pressure', prTab: 'dash', prHover: null }) : d.kind === 'level' ? () => this.setState({ screen: 'level', lvTab: 'dash', lvHover: null, lvSel: [d.id], lvMenuOpen: false }) : d.kind === 'rain' ? () => this.setState({ screen: 'rain', rainDev: d.id, rainTab: 'dash', rainHover: null, rainZoom: null }) : d.kind === 'leaf' ? () => this.setState({ screen: 'leaf', leafTab: 'dash', leafHover: null }) : d.kind === 'flow' ? () => this.setState({ screen: 'flow', flowHover: null }) : d.kind === 'gas' ? () => this.setState({ screen: 'gas', gasTab: 'dash', gasHover: null }) : () => this.setState({ screen: 'dash', selected: [d.id], depths: DEPTHS_BY_KIND[d.kind || 'soil'] || DEPTHS, hidden: [] })),
      })),
      listCols: 4,
      listCount: DEVICES.filter(d => (d.kind || 'soil') === this.state.listKind).length,
      paramIcon: P.icon, paramColor: P.color, paramUnit: P.unit,
      params: (isMini ? ['Moisture', 'Temperature', 'EC', 'pH'] : ['Moisture', 'Temperature', 'VIC']).map(p => ({
        label: p,
        color: p === this.state.param ? '#0F1A14' : '#6A746E',
        bg: p === this.state.param ? '#E7F6EC' : '#fff',
        select: () => this.setState({ param: p }),
      })),
      metrics: isMini ? [
        metric('Soil Moisture', 'mo', '%', 1),
        metric('Soil Temperature', 'te', '°C', 1),
        metric('Soil EC', 'ec', 'dS/m', 2),
        metric('Soil pH', 'ph', 'pH', 2),
      ] : [
        metric('Soil Moisture', 'mo', '%', 1),
        metric('Soil Temperature', 'te', '°C', 1),
        metric('Soil VIC', 'vi', 'VIC', 0),
      ],
      depthLabel: depths.length === ALLDEPTHS.length ? 'All depths' : depths.join(', '),
      countLabel: isWeather ? '1 selected' : selected.length + ' selected · max 3',
      selectionLabel: selected.length === 1 ? chosen[0].name : selected.length + ' probes selected',
      toggleDeviceMenu: () => this.setState(s => ({ deviceMenuOpen: !s.deviceMenuOpen, depthMenuOpen: false })),
      toggleDepthMenu: () => this.setState(s => ({ depthMenuOpen: !s.depthMenuOpen, deviceMenuOpen: false, sparkWinOpen: false })),
      deviceOptions: DEVICES.filter(d => d.kind === undefined ? kind === 'soil' : d.kind === kind).map(d => {
        const on = selected.includes(d.id);
        return {
          name: d.name, serial: d.serial,
          tick: on ? '✓' : '',
          boxBg: on ? '#1AA34A' : '#fff',
          boxBorder: on ? '#1AA34A' : '#CFD6D1',
          toggle: () => this.toggleDevice(d.id),
        };
      }),
      depthAllBg: depths.length === ALLDEPTHS.length ? '#F3FBF6' : '#fff', depthAllInk: depths.length === ALLDEPTHS.length ? '#0E7C3A' : '#3F4B45', depthAllBorder: depths.length === ALLDEPTHS.length ? '#1AA34A' : '#E5E8E6',
      selectAllDepths: () => this.setState({ depths: ALLDEPTHS.slice() }),
      depthChips: (() => { const all = depths.length === ALLDEPTHS.length;
        return [{ label: 'All depths', sub: '', dot: '#0E7C3A', bd: all ? '#0E7C3A' : '#E5E8E6', bg: all ? '#E7F6EC' : '#fff', ink: all ? '#0E7C3A' : '#3F4B45', weight: 700, subInk: '#8A948E', go: () => this.setState({ depths: ALLDEPTHS.slice(), hidden: [] }) }]
          .concat(ALLDEPTHS.map(d => { const on = !all && depths.includes(d), pr = d.includes(' – ') ? d.split(' – ')[0] : '';
            return { label: d.split(' – ').slice(-1)[0], sub: pr, dot: on || all ? DCOL[d] : '#CFD6D1', bd: on ? DCOL[d] : '#E5E8E6', bg: on ? (FILL[d] || '#fff') : '#fff', ink: on || all ? '#0F1A14' : '#6A746E', weight: on ? 700 : 600, subInk: '#8A948E',
              go: () => this.setState(s => { if (s.depths.length === ALLDEPTHS.length) return { depths: [d], hidden: [] }; if (s.depths.length === 1 && s.depths[0] === d) return { depths: ALLDEPTHS.slice(), hidden: [] }; return null; }, () => { const st = this.state; if (st.depths.length > 1 || st.depths[0] !== d) { if (!(st.depths.length === ALLDEPTHS.length)) this.toggleDepth(d); } }) }; })); })(),
      depthOptions: ALLDEPTHS.map(d => {
        const on = depths.includes(d);
        return {
          label: d, dot: on ? DCOL[d] : '#CFD6D1',
          tick: on ? '✓' : '',
          ink: on ? '#0F1A14' : '#98A19C',
          boxBg: on ? '#F3FBF6' : '#fff',
          boxBorder: on ? '#1AA34A' : '#CFD6D1', checkBg: on ? '#1AA34A' : '#fff',
          weight: on ? 600 : 400,
          toggle: () => this.toggleDepth(d),
        };
      }),
      legend: depths.map(d => {
        const off = hidden.includes(d);
        return {
          label: d,
          swatch: off ? '#CFD6D1' : DCOL[d],
          color: off ? '#A6AEA9' : '#3F4B45',
          bg: off ? '#F7FAF8' : '#fff',
          border: off ? '#EDF1EE' : '#E5E8E6',
          toggle: () => this.toggleHidden(d),
        };
      }),
      customOpen: this.state.customOpen,
      customBg: this.state.customApplied ? '#E7F6EC' : '#fff',
      customInk: this.state.customApplied ? '#0E7C3A' : '#3F4B45',
      rangeLabel: 'Custom',
      sharedTitle: chosen.length > 1,
      soloTitle: chosen.length <= 1,
      showChartDevice: chosen.length > 1,
      tools: chosen.length > 1 ? TOOLS.slice(-2) : TOOLS,
      xLabels: chosen.length > 2 ? [X_LABELS[0], X_LABELS[4]] : chosen.length > 1 ? [X_LABELS[0], X_LABELS[2], X_LABELS[4]] : X_LABELS,
      toggleCustom: () => this.setState(s => ({ customOpen: !s.customOpen, depthMenuOpen: false, deviceMenuOpen: false })),
      cancelCustom: () => this.setState({ customOpen: false }),
      applyCustom: () => this.setState({ customApplied: true, customOpen: false }),
      fromPretty: pretty(this.state.customFrom),
      toPretty: pretty(this.state.customTo),
      fromBorder: this.state.edge === 'from' ? '#1AA34A' : '#E5E8E6',
      fromBg: this.state.edge === 'from' ? '#F3FBF6' : '#fff',
      toBorder: this.state.edge === 'to' ? '#1AA34A' : '#E5E8E6',
      toBg: this.state.edge === 'to' ? '#F3FBF6' : '#fff',
      pickFromEdge: () => this.setState({ edge: 'from', calMonth: this.state.customFrom.slice(0, 7) }),
      pickToEdge: () => this.setState({ edge: 'to', calMonth: this.state.customTo.slice(0, 7) }),
      spanLabel: (() => {
        const d = Math.round((new Date(this.state.customTo) - new Date(this.state.customFrom)) / 86400000) + 1;
        return d + (d === 1 ? ' DAY' : ' DAYS');
      })(),
      boundStart: pretty(BOUND_START),
      boundEnd: pretty(BOUND_END),
      trackLeft: pct(this.state.customFrom) + '%',
      trackRight: (100 - pct(this.state.customTo)) + '%',
      monthLabel: (() => {
        const [y, m] = this.state.calMonth.split('-');
        return MONTHS[+m - 1] + ' ' + y;
      })(),
      nextInk: this.state.calMonth >= BOUND_END.slice(0, 7) ? '#CFD6D1' : '#3F4B45',
      prevMonth: () => this.setState({ calMonth: shiftMonth(this.state.calMonth, -1) }),
      nextMonth: () => this.setState({ calMonth: shiftMonth(this.state.calMonth, 1) }),
      dowLabels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      calDays: buildCal(this.state.calMonth, this.state.customFrom, this.state.customTo).map(d => ({
        ...d,
        pick: d.inRangeAllowed ? () => {
          const st = this.state;
          if (st.edge === 'from') {
            this.setState({ customFrom: d.iso, customTo: d.iso > st.customTo ? d.iso : st.customTo, edge: 'to' });
          } else {
            this.setState({ customTo: d.iso < st.customFrom ? st.customFrom : d.iso, edge: 'from' });
          }
        } : () => {},
      })),
      soilWheelRef: this.soilWheelRef,
      soilZoom: {
        res: { raw: 'Raw · 15-min readings', hour: 'Hourly average', day: 'Daily average' }[soilW.res],
        resTip: 'Zoom in to step from daily averages to hourly averages to raw 15-minute sensor readings',
        zoomed: soilW.zoomed, cursor: soilW.zoomed ? 'grab' : 'crosshair',
        in: () => this.soilZoomBy(.5, .5), out: () => this.soilZoomBy(2, .5), reset: () => this.setState({ soilWin: null, soilHover: null }),
      },
      ranges: RANGES.map(r => ({
        label: r,
        color: !this.state.customApplied && r === range ? '#0F1A14' : '#6A746E',
        bg: !this.state.customApplied && r === range ? '#E7F6EC' : '#fff',
        select: () => this.setState({ customApplied: false, customOpen: false, range: r }),
      })),
    };
    vals.aiInsights = out.aiInsights; vals.soilInsights = out.soilInsights;
    out.aiNoMatch = out.aiInsights.length === 0;
    out.soilNoMatch = out.soilInsights.length === 0;
    const GAS_QA = [
      { icon: '🌫️', q: 'Is CO₂ building up in the shed?', tag: 'CO₂',
        a: 'CO₂ averaged about 820 ppm over the last 24 hours and peaked near 1,240 ppm around 4 am, when ventilation was lowest. It stayed below the 3,000 ppm CIGR limit for livestock housing throughout.' },
      { icon: '⚠️', q: 'Has carbon monoxide gone over the safe limit?', tag: 'CO',
        a: 'No. CO stayed below the Safe Work Australia 8-hour exposure limit of 30 ppm. The highest reading was about 11 ppm in the early morning, and readings are now around 3 ppm.' },
      { icon: '🐄', q: 'Are ammonia levels safe for animals and staff?', tag: 'NH₃',
        a: 'Ammonia averaged about 12 ppm and stayed below the Safe Work Australia 8-hour exposure limit of 25 ppm. The highest reading was around 19 ppm late at night when airflow was lowest. Keep litter dry and maintain airflow to hold levels down.' },
      { icon: '🔥', q: 'Is methane at a level I should worry about?', tag: 'Methane',
        a: 'Methane stayed at low ppm levels, far below its lower explosive limit of 5% (50,000 ppm). Small rises line up with feeding times and ease within a couple of hours.' },
      { icon: '👃', q: 'When is odour at its worst?', tag: 'Odour',
        a: 'Odour is highest overnight and in the early morning when ventilation is lowest, and lowest in the afternoon. It follows the same daily pattern as ammonia, so improving airflow at night should reduce both.' },
      { icon: '🌡️', q: 'How have temperature and humidity changed today?', tag: 'Climate',
        a: 'Temperature ranged from about 14°C overnight to 26°C in the early afternoon. Humidity moved the opposite way, from around 82% overnight down to 48% at midday.' },
      { icon: '🧭', q: 'Is air pressure changing?', tag: 'Pressure',
        a: 'Pressure has been steady at about 1,013 hPa, moving less than 3 hPa across the day. No sharp drop that would point to an incoming change in weather.' },
      { icon: '📊', q: 'How does this week compare with last week?', tag: 'Comparison',
        a: 'Average CO₂ was about 6% lower this week and ammonia was slightly lower, mainly from warmer days with more ventilation. CO had one more overnight rise than last week. Temperature averaged about 1.5°C warmer.' },
    ];
    out.gasQuery = this.state.gasQuery || '';
    out.gasQa = GAS_QA.map((qa, i) => { const open = this.state.gasAiOpen === i; return { ...qa, open, chevron: open ? '\u25be' : '\u25b8', toggle: () => this.setState(s => ({ gasAiOpen: s.gasAiOpen === i ? -1 : i })), idx: i }; }).filter(qa => this.qMatch(this.state.gasQuery, qa));
    out.gasNoMatch = out.gasQa.length === 0;
    out.onGasQueryChange = (e) => this.setState({ gasQuery: e.target.value });
    out.onGasQueryKeyDown = (e) => { if (e.key === 'Enter' && out.gasQa[0]) this.setState({ gasAiOpen: out.gasQa[0].idx }); };
    Object.assign(out, this.gasVals());
    Object.assign(out, this.leafVals());
    Object.assign(out, this.levelVals());
    Object.assign(out, this.pressureVals());
    Object.assign(out, this.mmVals());
    Object.assign(out, this.devInfoVals());
    out.sv = out.soilOvShow ? this.svVals() : {};
    if (out.metrics) out.topKpis = out.metrics.map((m, i) => (out.soilKpis || [])[i] && ['Soil Moisture', 'Soil Temperature', 'Soil VIC', 'Soil EC', 'Soil pH'].includes(m.title) ? (out.soilKpis || [])[i] : null).filter(Boolean);
    if (out.metrics) out.metrics = out.metrics.map((m, i) => { const k = out.showLatest && (out.soilKpis || [])[i] && ['Soil Moisture', 'Soil Temperature', 'Soil VIC', 'Soil EC', 'Soil pH'].includes(m.title) ? out.soilKpis[i] : null, pri = m.title === 'Soil Moisture';
      return { ...m, kpi: k || { rows: [] }, hasKpi: !!k, showChartTitle: !!out.soloTitle && !k, chartH: pri ? '250px' : '190px', titleFs: pri ? '18px' : '15.5px', valFs: pri ? '24px' : '19px', panelBd: pri && k ? '#BFD6F5' : '#E5E8E6', kpiBg: pri ? '#F7FAFE' : '#FBFCFB' }; });
    out.topKpiCols = (out.topKpis || []).length === 4 ? 'repeat(auto-fit, minmax(290px, 1fr))' : 'repeat(auto-fit, minmax(320px, 1fr))';
    Object.assign(out, this.flowVals());
    Object.assign(out, this.rainVals());
    Object.assign(out, this.comboVals(out));
    Object.assign(out, this.kiVals(out));
    Object.assign(out, this.hdrVals(out));
    const emb = this.props.embed, cbo = this.state.combo;
    out.wxPad = emb ? '0' : '24px 24px 36px'; out.refTop = emb ? '-4px' : '-37px';
    out.refShow = !emb && !!(out.sv && out.sv.hasTex); if (Array.isArray(out.metrics)) out.metrics = out.metrics.map(m => ({ ...m, hasKpiShow: !emb && m.hasKpi }));
    if (emb) Object.assign(out, { wxStripOn: false, chromeOn: false, rootMinH: '0', sidebarStyle: { display: 'none' }, dashHeadOn: false, leafHeadOn: false, devInfoOpen: false, isCombo: false, isComboAI: false, soilTabsOn: false, comboOverview: false, comboOverviewSoil: false, comboOverviewLeaf: false });
    else {
      const ov = !!cbo && !out.alertsOn && out.isCombo && this.state.screen === 'dash' && (this.state.selected || [])[0] === 'w1' && (this.state.wxTab || 'dashboard') === 'dashboard';
      Object.assign(out, { chromeOn: true, rootMinH: '100vh', comboOverview: ov, comboOverviewSoil: ov && cbo.kind === 'wxsoil', comboOverviewLeaf: ov && cbo.kind === 'wxleaf' });
    }
    return out;
  }
  svVals() {
    const st = this.state, P = this.props, C = SV_C;
    const { name: soilName, FC, PWP, REF, s } = soilTx(P), MONB = REF + .1 * s, hasTex = (st.selected || [])[0] !== 'p1';
    const DL = DEPTHS, now = SOIL_END, HR = 36e5, TB = { te: [17.6, 16.8, 16.1, 15.5, 15.0, 14.6], vi: [640, 615, 590, 570, 555, 540] };
    const at = (k, i, t) => soilVal(DSEED[DL[i]] + i * 3, k === 'mo' ? (hasTex ? 28.4 + i * 1.5 : P1MO[i]) : TB[k][i], k === 'mo' ? (hasTex ? 2.16 : 2.17) : k === 'te' ? .32 : 24, t);
    const f1 = v => v.toFixed(1), fx = v => (Math.round(v * 10) / 10).toString(), sg = v => (v >= 0 ? '+' : '\u2212') + f1(Math.abs(v)) + '%';
    const dn = DL.map(d => parseInt(d, 10)), za = 20, zb = 40, rzLabel = za + '\u2013' + zb + ' cm';
    const rzIdx = dn.map((d, i) => i).filter(i => dn[i] >= za && dn[i] <= zb), rzAt = t => rzIdx.reduce((a, i) => a + at('mo', i, t), 0) / rzIdx.length;
    const cur = rzAt(now), ch24 = cur - rzAt(now - 24 * HR), paw = (cur - PWP) / s * 100, pawC = Math.max(0, Math.min(100, paw));
    const fcT = FC + '%', pwpT = PWP + '%', refT = fx(REF) + '%', monT = fx(MONB) + '%';
    const lvl = v => v > FC ? ['Wet', 'b'] : v >= REF ? ['Optimal', 'g'] : ['Dry', 'r'];
    const pawB = paw >= 80 ? ['Full', 'g'] : paw >= 50 ? ['Good', 'g'] : paw >= 30 ? ['Monitor', 'a'] : ['Irrigation recommended', 'r'];
    const irr = cur <= PWP ? ['Crop stress', 'r', SV_ICON.stop] : cur <= REF ? ['Irrigate soon', 'a', SV_ICON.warn] : ['No action required', 'g', SV_ICON.ok];
    const rzL = lvl(cur), rzDepths = rzIdx.map(i => 'M' + dn[i] + 'cm'), rzList = rzIdx.map(i => dn[i]).join(', ') + ' cm';
    const tog = id => () => this.setState(x => ({ svInfo: x.svInfo === id ? null : id }));
    const cat = (name, range, k, d = '') => ({ name, range, d, c: C[k][0], ink: C[k][1], bg: k === 'n' ? '#F4F6F5' : C[k][2] + '99', on: false });
    const card = (id, title, value, unit, size, pill, pc, sub, info, extra = {}) => ({ id, title, value, unit, size, pill, pillBg: C[pc][2], pillInk: C[pc][1], valInk: '#0F1A14', sub, icon: null, desc: DESC[id], hasInfo: true, popL: id === 'rz' ? 'auto' : '12px', popR: id === 'rz' ? '12px' : 'auto', popTitle: POPT[id], formula: '', note: '', cats: info, rangeHead: id === 'paw' ? 'PAW' : 'Root zone moisture', open: st.svInfo === id, toggle: tog(id), z: st.svInfo === id ? 30 : 1, bg: '#fff', bd: '#E5E8E6', bar: null, ...HI[id], ...extra });
    const HI = { paw: { hIcon: 'M12 3s5.5 6 5.5 10a5.5 5.5 0 0 1-11 0C6.5 9 12 3 12 3z', hBg: '#E3F0FB', hInk: '#1D6FB8' }, irr: { hIcon: 'M5 19c0-8 6-14 14-14 0 8-6 14-14 14zM5 19l8-8', hBg: '#E3F3E8', hInk: '#0E7C3A' }, rz: { hIcon: 'M4 8c2.7-1.6 5.3-1.6 8 0s5.3 1.6 8 0M4 12.5c2.7-1.6 5.3-1.6 8 0s5.3 1.6 8 0M4 17c2.7-1.6 5.3-1.6 8 0s5.3 1.6 8 0', hBg: '#FCEBD9', hInk: '#C2610C' } };
    const POPT = { paw: 'Plant Available Water (PAW)', irr: 'Refill point & Irrigation Status', rz: 'Soil Moisture Status' };
    const DESC = {
      paw: 'According to USDA NRCS, plant available water is the water held between field capacity and permanent wilting point that the crop can take up. PAW shows how much of that reserve remains in the root zone: 100% is field capacity, 0% is wilting point.',
      irr: 'According to FAO Irrigation and Drainage Paper No. 56, irrigation should start before the crop has used more than an allowable fraction of available water. NSW DPI refers to this level as the refill point. This probe\u2019s refill point is ' + refT + '.',
      rz: 'According to FAO Irrigation and Drainage Paper No. 56 and NSW DPI, water between field capacity and the refill point is readily available to the crop. Status compares average root zone moisture with this probe\u2019s FC (' + fcT + '), refill point (' + refT + ') and PWP (' + pwpT + ').' };
    const RZ_CATS = [cat('Wet', '> ' + fcT, 'b', 'Above field capacity. Excess water drains below the roots within 1\u20132 days; avoid irrigating.'), cat('Optimal', refT + '\u2013' + fcT, 'g', 'Readily available water. The crop extracts water without stress.'), cat('Dry', '< ' + refT, 'r', 'Readily available water is used up. Water uptake slows and stress builds toward wilting point (' + pwpT + '). Irrigate.')];
    const pLen = Math.max(...dn), PROBE_RZ = [[30, '10\u201320 cm', 'Sensors at 10, 20 and 30 cm. Suited to shallow-rooted crops such as leafy vegetables and turf.'], [60, '20\u201340 cm', 'Sensors every 10 cm to 60 cm. Suited to most vegetables, pasture and vines.'], [120, '20\u201360 cm', 'Sensors every 10 cm to 120 cm. Suited to deep-rooted crops such as orchards, cotton and lucerne.']].map(([L, r, d]) => ({ ...cat(L + ' cm probe' + (L === pLen ? ' \u00b7 this probe' : ''), r, L === pLen ? 'g' : 'n', d) }));
    const kpis = [
      card('paw', 'Plant Available Water', Math.round(pawC), '%', '20px', pawB[0], pawB[1], Math.round(pawC) + '% of available water remains.', [cat('Full', '> 80%', 'g', 'Reserve is close to full. No irrigation needed.'), cat('Good', '50\u201380%', 'g', 'Adequate water for normal crop growth.'), cat('Monitor', '30\u201350%', 'a', 'Reserve is below half. Plan the next irrigation.'), cat('Irrigation recommended', '< 30%', 'r', 'Crop is at risk of water stress. Irrigate.')],
        { formula: 'PAW (%) = (Current moisture \u2212 PWP) \u00f7 (FC \u2212 PWP) \u00d7 100', bar: { w: pawC + '%', ref: '50%', c: C[pawB[1]][0] } }),
      card('irr', 'Irrigation', irr[0], '', '17px', '', 'n',
        cur <= PWP ? 'Root zone at or below wilting point (' + pwpT + '). Irrigate now.' : cur <= REF ? f1(REF - cur) + '% below the refill point. Plan irrigation.' : f1(cur - REF) + '% above the refill point (' + refT + ').', [cat('No action required', '> ' + refT, 'g', 'Enough water in the root zone. Continue monitoring.'), cat('Irrigate soon', '\u2264 ' + refT, 'a', 'Moisture has reached the refill point. Schedule irrigation.'), cat('Crop stress', '\u2264 ' + pwpT, 'r', 'Root zone is at or below wilting point. Irrigate now.')],
        { formula: 'Refill point = PWP + ((FC \u2212 PWP) \u00d7 0.5)', note: 'Default threshold based on 50% depletion of available water. The right level varies with crop, growth stage, root depth and management practice.', icon: irr[2], ...(irr[1] === 'r' ? { bg: '#FDECEA', bd: '#F5C6C0', valInk: '#B42318' } : irr[1] === 'a' ? { bg: '#FFF8EB', bd: '#F5DFB0', valInk: '#92560A' } : { valInk: '#0E7C3A' }) }),
      card('rz', 'Root Zone Moisture Average', f1(cur), '%', '20px', rzL[0], rzL[1], '', PROBE_RZ, { popTitle: 'Root zone by probe length', desc: 'Average volumetric moisture across the sensors inside the root zone. The default root zone depends on probe length and can be adjusted to match the crop\u2019s rooting depth.', rangeHead: 'Root zone' }),
    ];
    const moNow = DL.map((_, i) => at('mo', i, now)), ymin = hasTex ? PWP - .2 * s : Math.floor(Math.min(...moNow) - 6), ymax = hasTex ? FC + .3 * s : Math.ceil(Math.max(...moNow) + 3), pct = v => Math.max(2, Math.min(100, (v - ymin) / (ymax - ymin) * 100));
    const moTicks = hasTex ? [[PWP, 'WP', '#7A1A12'], [REF, 'Refill', '#B42318'], [FC, 'FC', '#1D4FA8']].map(([v, label, ink]) => ({ pos: pct(v) + '%', label, ink })) : [];
    const TRP = { up: 'M12 19V5M6 11l6-6 6 6', dn: 'M12 5v14M6 13l6 6 6-6', fl: 'M5 12h14M13 6l6 6-6 6' }, trend = (v, p, eps, dec, u) => { const d = v - p, k = Math.abs(d) < eps ? 'fl' : d > 0 ? 'up' : 'dn'; return { prev: p.toFixed(dec) + u, tr: TRP[k], trInk: k === 'fl' ? '#9AA39E' : '#3F4B45', dl: k === 'fl' ? (0).toFixed(dec) : (d > 0 ? '+' : '\u2212') + Math.abs(d).toFixed(dec) }; };
    const spk = (k, i) => { const v = Array.from({ length: 25 }, (_, j) => at(k, i, now - (24 - j) * HR)), lo = Math.min(...v), hi = Math.max(...v), r = hi - lo || 1; return v.map((x, j) => (j ? 'L' : 'M') + (j * 2.5).toFixed(1) + ' ' + (18 - (x - lo) / r * 16).toFixed(1)).join(' '); };
    const moRows = DL.map((d, i) => { const v = at('mo', i, now), [lab, k] = hasTex ? lvl(v) : ['', 'b']; return { ...trend(v, at('mo', i, now - HR), .005, 2, '%'), dc: DCOL[d] || '#6A746E', spark: spk('mo', i), depth: d, val: f1(v) + '%', status: lab, c: C[k][0], ink: C[k][1], pos: pct(v) + '%', soilBg: ['#8B6A4E', '#7E5E43', '#72543B', '#6A4E37', '#7A6250', '#8A7766'][i % 6], soilR: (i === 0 ? '8px 8px ' : '0 0 ') + (i === DL.length - 1 ? '8px 8px' : '0 0'), rail: rzIdx.includes(i) ? '#1AA34A' : 'transparent', railTip: rzIdx.includes(i) ? 'Root zone' : '' }; });
    const tchipR = (v, p, eps, dec) => { const d = v - p, k = Math.abs(d) < eps ? 'fl' : d > 0 ? 'up' : 'dn'; return { tInk: { up: '#1D6FB8', dn: '#B45309', fl: '#6A746E' }[k], tIc: TRP[k], tDl: k === 'fl' ? (0).toFixed(dec) : (d > 0 ? '+' : '\u2212') + Math.abs(d).toFixed(dec) }; };
    const gp = (title, k, lo, hi, cuts, labels, unit, dec, note) => {
      const sc = v => Math.max(2, Math.min(100, (v - lo) / (hi - lo) * 100)), vals = DL.map((_, i) => at(k, i, now));
      const cls = v => v < cuts[0] ? [labels[0], 'b'] : v < cuts[1] ? [labels[1], 'g'] : [labels[2], 'r'];
      return { title, note, avg: (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(dec) + unit, ticks: cuts.map(c => ({ pos: sc(c) + '%', label: c + (unit ? '\u00b0' : ''), ink: '#4C6354' })),
        legend: [[labels[0] + ' < ' + cuts[0] + unit, 'b'], [labels[1], 'g'], [labels[2] + ' > ' + cuts[1] + unit, 'r']].map(([l, k]) => ({ l, c: C[k][0] })),
        rows: DL.map((d, i) => { const v = vals[i], [lab, kk] = cls(v); return { ...trend(v, at(k, i, now - HR), dec ? .05 : 1, dec, unit), ...tchipR(v, at(k, i, now - HR), dec ? .05 : 1, dec), dc: DCOL[d] || '#6A746E', spark: spk(k, i), depth: d, val: v.toFixed(dec) + unit, status: lab, c: C[kk][0], ink: C[kk][1], pos: sc(v) + '%', rail: 'transparent' }; }) };
    };
    const profilesRaw = [
      { title: 'Soil Moisture Profile', avg: f1(moRows.reduce((a, r) => a + parseFloat(r.val), 0) / moRows.length) + '%', ticks: moTicks, rows: moRows, legend: [['Wet', 'b'], ['Optimal', 'g'], ['Monitor', 'a'], ['Irrigate', 'r']].map(([l, k]) => ({ l, c: C[k][0] })), note: 'Tick marks: WP ' + pwpT + ' \u00b7 Refill ' + refT + ' \u00b7 FC ' + fcT + '. Green edge marks the root zone (' + rzLabel + ').' },
      gp('Soil Temperature', 'te', 0, 35, [12, 25], ['Cold', 'Optimal', 'Hot'], ' \u00b0C', 1, 'Tick marks at 12 \u00b0C and 25 \u00b0C. Cold slows root growth; hot causes heat stress.'),
      gp('Soil VIC', 'vi', 900, 1600, [1100, 1400], ['Low', 'Normal', 'High'], '', 0, 'Tick marks at 1100 and 1400. Relative salinity index, not a lab EC value.'),
    ];
    const rzVals = rzIdx.map(i => [dn[i], at('mo', i, now)]), dry = rzVals.reduce((a, b) => b[1] < a[1] ? b : a), nBelow = rzVals.filter(x => x[1] <= REF).length;
    const summary = [
      { k: 'Irrigation status', v: irr[0], ink: C[irr[1]][1] },
      { k: 'Driest layer', v: dry[0] + ' cm \u00b7 ' + f1(dry[1]) + '%', ink: C[lvl(dry[1])[1]][1] },
      { k: 'Layers below refill', v: nBelow + ' of ' + rzVals.length, ink: nBelow ? C.r[1] : '#0F1A14' },
      { k: 'Change in last 24 h', v: sg(ch24), ink: '#0F1A14' },
    ];
    const PIC = [null, ['M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0zM12 9v5', '#EA580C', '#FFF1E7'], ['M3 12h3l2-5 3 10 3-8 2 3h5', '#7C4DDA', '#EEE7FB']];
    const avgK = (k, t) => DL.reduce((a, _, i) => a + at(k, i, t), 0) / DL.length, KK = [['mo', 2, '%', .005], ['te', 1, ' \u00b0C', .05], ['vi', 0, '', 1]];
    const sparkOf = v => { const lo = Math.min(...v), hi = Math.max(...v), r = hi - lo || 1; return v.map((x, j) => (j ? 'L' : 'M') + (j * 100 / (v.length - 1)).toFixed(1) + ' ' + (26 - (x - lo) / r * 22).toFixed(1)).join(' '); };
    const TW = { up: ['Rising', '#1D6FB8', '#E4EEFB'], dn: ['Falling', '#B45309', '#FEF3C7'], fl: ['Stable', '#4C6354', '#EEF1EF'] };
    const tchip = (v, p, eps, dec) => { const d = v - p, k = Math.abs(d) < eps ? 'fl' : d > 0 ? 'up' : 'dn'; return { tw: TW[k][0], tInk: TW[k][1], tBg: TW[k][2], tIc: TRP[k], tDl: k === 'fl' ? (0).toFixed(dec) : (d > 0 ? '+' : '\u2212') + Math.abs(d).toFixed(dec) }; };
    const moMax = Math.max(...moNow) * 1.12, mix = q => { const a = [214, 228, 247], b = [29, 79, 168]; return 'rgb(' + a.map((x, j) => Math.round(x + (b[j] - x) * q)).join(',') + ')'; };
    const profBars = moRows.map((r, i) => { const v = moNow[i], q = Math.max(0, Math.min(1, v / moMax)); return { ...r, ...tchip(v, at('mo', i, now - HR), .005, 2), w: (q * 100).toFixed(1) + '%', shade: mix(.25 + .75 * q) }; });
    const openD = st.svDepths || {};
    const profiles = profilesRaw.map((p, i) => ({ ...p, ...(() => { const [k, dec, u, eps] = KK[i], v = avgK(k, now); return { key: k, avgV: v.toFixed(dec), avgU: u.trim(), ...tchip(v, avgK(k, now - HR), eps, dec), avgSpark: sparkOf(Array.from({ length: 25 }, (_, j) => avgK(k, now - (24 - j) * HR))), dOpen: !!openD[k], dZ: openD[k] ? 30 : 1, vSize: k === 'vi' ? '24px' : '30px', tSize: k === 'vi' ? '15.5px' : '17px', vInk: k === 'vi' ? '#3F4B45' : '#0F1A14', sub: k === 'vi' ? 'Salinity index, average across depths' : 'Average across depths', dLabel: openD[k] ? 'Hide readings by depth' : 'Readings by depth', dChev: openD[k] ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6', dToggle: () => this.setState(s => ({ svDepths: { ...(s.svDepths || {}), [k]: !(s.svDepths || {})[k] } })) }; })(), ic: PIC[i] && PIC[i][0], icInk: PIC[i] && PIC[i][1], tint: PIC[i] && PIC[i][2], lineInk: ['#2A6FDB', '#EA580C', '#7C4DDA'][i], titleInk: '#0F1A14', barOp: i ? .8 : 1, valW: i ? 600 : 700, valInk: i ? '#3F4B45' : '#0F1A14' }));
    const zAvgAt = (f, t) => { const ix = dn.map((d, i) => i).filter(i => f(dn[i])); return ix.reduce((a, i) => a + at('mo', i, t), 0) / ix.length; };
    const zAvg = f => { const ix = dn.map((d, i) => i).filter(i => f(dn[i])); return ix.length ? [ix.reduce((a, i) => a + at('mo', i, now), 0) / ix.length, dn[ix[0]], dn[ix[ix.length - 1]]] : null; };
    const zones = [['Shallow Zone', d => d <= za], ['Root Zone', d => d > za && d <= zb], ['Deep Zone', d => d > zb]].map(([name, f]) => { const r = zAvg(f); if (!r) return null; const [lab, k] = lvl(r[0]), rp = zAvgAt(f, now - HR); return { vNow: r[0], vPrev: rp, ...trend(r[0], rp, .05, 1, '%'), name, range: r[1] + ' \u2013 ' + r[2] + ' cm', val: f1(r[0]), label: hasTex ? lab : '', noLabel: !hasTex, bg: C[k][2], ink: C[k][1] }; }).filter(Boolean);
    return {
      soilName, fcT, pwpT, refT, rzLabel, hasTex, moLegend: RZ_CATS, moInfo: { open: st.svInfo === 'mo', toggle: tog('mo'), z: st.svInfo === 'mo' ? 30 : 2, formula: '', note: hasTex ? '' : 'This probe has no soil type set, so readings are shown without categories.', popTitle: 'Soil moisture categories', desc: 'According to FAO Irrigation and Drainage Paper No. 56 and NSW DPI, water between field capacity and the refill point (50% depletion of available water) is readily available to the crop. Readings are categorised against this probe\u2019s soil type.', rangeHead: hasTex ? 'Moisture' : 'Threshold', cats: hasTex ? RZ_CATS : [cat('Wet', 'Above FC', 'b', 'Above field capacity. Excess water drains below the roots.'), cat('Optimal', 'Refill \u2013 FC', 'g', 'Readily available water for the crop.'), cat('Dry', 'Below refill', 'r', 'Readily available water is used up. Irrigate.')] }, kpis: hasTex ? kpis : [], zoneInfo: { open: st.svInfo === 'zone', toggle: tog('zone'), z: st.svInfo === 'zone' ? 30 : 1, formula: '', note: '', ...(hasTex ? { popTitle: 'Soil Moisture Status', desc: DESC.rz, rangeHead: 'Root zone moisture', cats: RZ_CATS } : { popTitle: 'Root zone layers by probe length', desc: '', rangeHead: 'Probe', cats: [
  cat('30 cm probe', '', 'n', 'Shallow 0\u201310 cm \u00b7 Root zone 10\u201320 cm \u00b7 Deep 20\u201330 cm'),
  cat('60 cm probe', 'This probe', 'g', zones.map(z => z.name.replace(' Zone', '').replace('Root', 'Root zone') + ' ' + z.range).join(' \u00b7 ')),
  cat('120 cm probe', '', 'n', 'Shallow 0\u201330 cm \u00b7 Root zone 30\u201360 cm \u00b7 Deep 60\u2013120 cm') ] }) }, moTicks, moRows, profiles, summary, zones: zones.map((z, i) => ({ ...z, ...tchip(z.vNow, z.vPrev, .005, 2), zc: ['#8DB8EC', '#2A6FDB', '#1D3F7A'][i] })), profBars: profBars.map((p, i) => ({ ...p, zc: ['#8DB8EC', '#2A6FDB', '#1D3F7A'][dn[i] <= za ? 0 : dn[i] <= zb ? 1 : 2] })), heroStamp: 'Latest reading', refLabel: !st.vwNarrow, moProfile: profiles.slice(0, 1), subProfiles: profiles.slice(1),
      refOpen: !!st.svRef, toggleRef: () => this.setState(z => ({ svRef: !z.svRef, svInfo: null })), stop: e => e.stopPropagation(),
      refTable: SOIL_TEX.map(([n, fc, pw]) => ({ name: n, fc, pwp: pw, ref: fx(pw + (fc - pw) * .5), cur: n === soilName, bg: n === soilName ? '#E7F6EC' : '#fff', fw: n === soilName ? 700 : 400 })),
      defs: [
        { t: 'Field Capacity (FC)', d: 'Water retained in soil after excess water has drained away.' },
        { t: 'Permanent Wilting Point (PWP)', d: 'Moisture level at which plants can no longer extract water.' },
        { t: 'Refill Point', d: 'Moisture level where irrigation should be considered.' },
        { t: 'Plant Available Water (PAW)', d: 'Water available for crop uptake between FC and PWP.' },
      ],
      sources: [
        { t: 'FAO Irrigation and Drainage Paper No. 56 (Allen et al., 1998)', d: 'Total and readily available water, and the depletion fraction p. The refill point uses p = 0.5.' },
        { t: 'Soil Science Society of America, Glossary of Soil Science Terms', d: 'Standard definitions of field capacity and permanent wilting point.' },
        { t: 'Saxton & Rawls (2006), Soil Sci. Soc. Am. J. 70:1569\u20131578', d: 'Estimates of water content at field capacity (\u221233 kPa) and wilting point (\u22121500 kPa) by soil texture.' },
        { t: 'USDA NRCS National Engineering Handbook, Part 652 (Irrigation Guide)', d: 'Available water capacity by soil texture and irrigation scheduling by allowable depletion.' },
      ],
      formulas: ['Root zone water = average of moisture readings within the root zone', 'PAW % = (Current moisture \u2212 PWP) \u00f7 (FC \u2212 PWP) \u00d7 100', 'Refill point = PWP + (FC \u2212 PWP) \u00d7 0.5'],
    };
  }
  hdrVals(out) {
    const st = this.state, D = id => DEVICES.find(d => d.id === id) || {}, C = k => CATS.find(c => c.kind === k) || {};
    const info = { open: !!out.devInfoOpen, toggle: out.toggleDevInfo };
    const tabsU = list => (list || []).map(t => ({ label: t.label, icon: t.icon, iconInk: t.iconInk, go: t.go || t.select, active: (t.underline || t.line) && (t.underline || t.line) !== 'transparent' }));
    const base = (dev, kind, extra) => { const c = C(kind); return { name: dev.name || '', serial: dev.serial || '', stamp: STAMPS[dev.id] || '', tag: c.label || '', icon: c.d, c1: c.ink, icon2: c.d2 || '', c2: kind === 'wxsoil' ? '#6B4A3A' : '#3F7A2A', info, menu: false, tabs: [], ...extra }; };
    const sel = D((st.selected || [])[0]), sk = sel.kind || 'soil', WAND = 'M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5';
    const dash = base(sel, sk, { back: out.goDevices, name: out.selectionLabel || sel.name,
      menu: sk === 'weather' ? false : { open: !!st.deviceMenuOpen, toggle: out.toggleDeviceMenu, options: out.deviceOptions || [], count: out.countLabel },
      tabs: sk === 'weather' ? (out.wxTabList || []).map(t => ({ label: t.key === 'ai' ? 'Key Insights' : t.label, icon: t.icon, iconInk: t.key === 'ai' ? '#D4A017' : '', active: st.wxTab === t.key, go: t.go })) : ['readings', 'insights'].map(k => ({ label: k === 'insights' ? 'Key Insights' : k === 'conditions' ? 'Soil Conditions' : 'Dashboard', icon: k === 'insights' ? WAND : k === 'conditions' ? 'M3 3v18h18M7 15l4-4 3 3 6-6' : 'M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z', iconInk: k === 'insights' ? '#D4A017' : '', active: (st.soilTab || 'readings') === k, go: () => this.setState({ soilTab: k }) })) });
    if (sel.profiles && (st.selected || []).length === 1 && sk === 'soil') {
      const pv = (st.profView || {})[sel.id] || 0;
      dash.profiles = { list: sel.profiles, view: pv, open: !!st.profMenuOpen, hist: !!st.profHist, style: this.props.profileStyle ?? 'Dropdown',
        toggle: () => this.setState(s => ({ profMenuOpen: !s.profMenuOpen, deviceMenuOpen: false })),
        toggleHist: () => this.setState(s => ({ profHist: !s.profHist })),
        pick: i => this.setState(s => ({ profView: { ...(s.profView || {}), [sel.id]: i }, profMenuOpen: false })) };
      if (pv > 0) dash.stamp = sel.profiles[pv].to + ' (profile ended)';
    }
    const cb = st.combo, cdev = cb ? D(cb.id) : {};
    const lvIds = (st.lvSel && st.lvSel.length ? st.lvSel : ['wl1']), lv = D(lvIds[0]);
    const mk = st.screen === 'thp' ? 'thp' : 'dust', mdev = D(mk === 'thp' ? 'th1' : 'ds1');
    const hd = {
      hdrDash: dash,
      hdrCombo: cb ? base(cdev, cb.kind, { back: out.comboBack, tabs: tabsU(out.comboTabs) }) : base({}, 'weather', {}),
      hdrRain: base(D(st.rainDev || 'r1'), 'rain', { back: out.rainBack, tabs: tabsU(out.rainTabs) }),
      hdrGas: base(D('g1'), 'gas', { back: out.gasBack, tabs: tabsU(out.gasTabs) }),
      hdrLeaf: base(D('l1'), 'leaf', { back: out.leafBack, tabs: tabsU(out.leafTabs) }),
      hdrLevel: base(lv, 'level', { back: out.lvBack, name: out.lvSelLabel || lv.name, menu: { open: !!st.lvMenuOpen, toggle: out.toggleLvMenu, options: out.lvOptions || [], count: out.lvCountLabel }, tabs: tabsU(out.lvTabs) }),
      hdrPressure: base(D('ps1'), 'pressure', { back: out.prBack, tabs: tabsU(out.prTabs) }),
      hdrMM: base(mdev, mk, { back: out.mmBack, tabs: tabsU(out.mmTabs) }),
    };
    const curK = out.isCombo ? 'hdrCombo' : out.isDash ? 'hdrDash' : out.isRain ? 'hdrRain' : out.isGas ? 'hdrGas' : out.isLeaf ? 'hdrLeaf' : out.isLevel ? 'hdrLevel' : out.isPressure ? 'hdrPressure' : out.isMM ? 'hdrMM' : '';
    const akey = k => k + '|' + (k === 'hdrCombo' ? (cb ? cb.id : '') : hd[k].name);
    const alertsOn = (this.props.embed ? this.props.tab === 'alerts' && !!curK : !!curK && st.alerts === akey(curK)), BELL = 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0';
    Object.keys(hd).forEach(k => {
      const x = hd[k], on = alertsOn && k === curK, back = x.back, tl = x.tabs || [];
      x.back = () => { this.setState({ alerts: null }); if (back) back(); };
      x.tabs = tl.map(t => ({ ...t, active: on ? false : t.active, go: () => { this.setState({ alerts: null }); if (t.go) t.go(); } }))
        .concat(tl.length ? [{ label: 'Alerts', icon: BELL, iconInk: '', active: on, go: () => { if (k === 'hdrCombo' && st.screen === 'comboAI') this.comboGo('weather'); this.setState({ alerts: akey(k), deviceMenuOpen: false }); } }] : []);
    });
    if (alertsOn) Object.keys(out).forEach(k => { if (/^isTab[A-Z]/.test(k) || /Tab(Dash|Insights)$/.test(k) || /^comboOverview/.test(k) || ['soilReadingsOn', 'soilInsightsOn', 'soilTabsOn', 'showRangeRow', 'tabRangeShow', 'showChartGrid', 'isComboAI'].includes(k)) out[k] = false; });
    const SRC = { hdrCombo: out.kiCombo, hdrDash: out.isWeather ? out.kiWeather : out.kiSoil, hdrRain: out.kiRain, hdrGas: out.kiGas, hdrLeaf: out.kiLeaf, hdrLevel: out.kiLevel, hdrPressure: out.kiPressure, hdrMM: out.kiMM };
    return {
      ...hd, hdrFlow: base(D('f1'), 'flow', { back: out.flowBack }),
      alertsOn, alertSrc: alertsOn ? SRC[curK] || [] : [],
      wxStripOn: !alertsOn && (sk !== 'weather' || !!st.combo),
      wxTabList: (out.wxTabList || []).map(t => { const on = st.wxTab === t.key; return { ...t, seg: 'transparent', line: on ? '#1AA34A' : 'transparent', weight: on ? 700 : 500, segInk: on ? '#0E7C3A' : '#3F4B45', badge: t.key === 'ai', plain: t.key !== 'ai' }; }),
    };
  }
  kiVals(out) {
    const st = this.state, D = id => DEVICES.find(d => d.id === id) || {};
    const sd = D((st.selected || [])[0]), sk = sd.kind === 'mini' ? 'mini' : 'soil';
    const lv = D((st.lvSel && st.lvSel[0]) || 'wl1'), rg = D(st.rainDev || 'r1'), mk = st.screen === 'thp' ? 'thp' : 'dust';
    const wx = kiSource('weather', D('w1')), soil = kiSource(sk, sd.kind ? sd : D('p1')), leaf = kiSource('leaf', D('l1'));
    const cb = st.combo, comboSrc = cb ? [wx, cb.kind === 'wxsoil' ? kiSource('soil', D('p1')) : leaf] : [wx];
    if (cb) comboSrc.forEach(x => { x.name = x.name + ' · ' + x.label; x.serial = D(cb.id).serial; });
    return { kiWeather: [wx], kiSoil: [soil], kiLeaf: [leaf], kiRain: [kiSource('rain', rg)], kiGas: [kiSource('gas', D('g1'))], kiLevel: [kiSource('level', lv)], kiPressure: [kiSource('pressure', D('ps1'))], kiMM: [kiSource(mk, D(mk === 'thp' ? 'th1' : 'ds1'))], kiCombo: comboSrc };
  }
  comboVals(out) {
    const st = this.state, cb = st.combo, on = !!cb && ['dash', 'leaf', 'comboAI'].includes(st.screen);
    const lk = st.listKind, lc = CATS.find(c => c.kind === lk);
    const r = { isCombo: on, isComboAI: on && st.screen === 'comboAI', dashHeadOn: out.isDash && !on, leafHeadOn: !on, soilTabsOn: out.probeKind && !on };
    r.listIcon2 = ''; r.listSingle = true;
    if ((lk === 'wxsoil' || lk === 'wxleaf') && lc) Object.assign(r, { listIcon: lc.d, listIcon2: lc.d2, listSingle: false, listC2: lk === 'wxsoil' ? '#6B4A3A' : '#3F7A2A' });
    if (!on) return r;
    const dev = DEVICES.find(d => d.id === cb.id) || {}, soil = cb.kind === 'wxsoil', tab = st.screen === 'comboAI' ? 'insights' : st.screen === 'leaf' ? 'leaf' : (st.selected || [])[0] === 'w1' ? 'weather' : 'soil';
    const second = soil ? ['soil', 'Soil Probe', 'M12 3v13M8 6l4-3 4 3M6 20h12M12 16l-5 4M12 16l5 4'] : ['leaf', 'Leaf Wetness', LEAF_ICON];
    const q = (st.comboQuery || '').trim().toLowerCase(), f = list => (list || []).filter(x => !q || String(x.q).toLowerCase().includes(q));
    const sections = [
      { title: 'Weather', icon: ICON.sun, items: f(out.aiInsights) },
      { title: second[1], icon: second[2], items: f(soil ? out.soilInsights : (out.leafQa || []).map(x => ({ ...x, icon: '🍃', tag: 'Leaf' }))) },
    ].filter(x => x.items.length);
    Object.assign(r, {
      wxTabList: (out.wxTabList || []).filter(t => t.key !== 'ai'), wxStripOn: true, soilInsightsOn: false, soilReadingsOn: out.probeKind, leafTabDash: true, leafTabInsights: false,
      comboName: dev.name || '', comboSerial: dev.serial || '', comboStamp: STAMPS[dev.id] || '', comboIcon: 'M4 18h16M7 18a5 5 0 0 1 9-3M12 6v2M18 9l-1.5 1.5', comboIcon2: soil ? 'M12 3v13M8 6l4-3 4 3M6 20h12M12 16l-5 4M12 16l5 4' : LEAF_ICON,
      comboTint: soil ? '#DFF3F9' : '#E6F4E2', comboInk: soil ? '#0E8090' : '#3F7A2A', comboSecond: second[1].toLowerCase(), comboC2: soil ? '#6B4A3A' : '#3F7A2A',
      comboBack: () => this.setState({ combo: null, screen: 'list', listKind: cb.kind, deviceMenuOpen: false }),
      comboTabs: [['weather', 'Weather', ICON.sun], second, ['insights', 'Key Insights', 'M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5']].map(([k, label, icon]) => { const sel = tab === k; return { label, icon, iconInk: k === 'insights' ? '#D4A017' : 'currentColor', ink: sel ? '#0E7C3A' : '#3F4B45', line: sel ? '#1AA34A' : 'transparent', go: () => this.comboGo(k) }; }),
      comboSections: sections, comboNoMatch: !sections.length, comboQuery: st.comboQuery || '',
      onComboQueryChange: e => this.setState({ comboQuery: e.target.value }),
    });
    return r;
  }
}

class DeviceDashboard extends Component {
  render() {
    const V = { ...this.props, ...(this.renderVals() || {}) };
    return <View V={V} />;
  }
}

export default DeviceDashboard;
