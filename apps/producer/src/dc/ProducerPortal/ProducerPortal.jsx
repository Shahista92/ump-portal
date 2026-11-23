import React from 'react';
import { ZONE_LIST, zoneByLabel, zoneText } from '../shared/zones.js';
import { DEMO_ACCOUNTS, findAccount } from '../shared/accounts.js';
import View from './View.jsx';

const FARMS = [
  { name: 'Greg Farm', zone: 'Zone 1', loc: '420 Greg Greg Rd, Greg Greg NSW', lng: 148.0602, lat: -36.0689, role: 'Owner', abn: '51 824 753 556', area: '860', ent: 'Mixed farming', phone: '02 6071 2290' },
  { name: 'Ed Farm', zone: 'Zone 2', loc: '1180 Burrowye Rd, Burrowye VIC', lng: 147.5327, lat: -36.0395, role: 'Owner', abn: '33 190 642 118', area: '640', ent: 'Beef', phone: '02 6072 9031' },
  { name: 'Agritech Farm', zone: 'Zone 3', loc: '86 Koetong Rd, Koetong VIC', lng: 147.4877, lat: -36.1225, role: 'Owner', abn: '82 615 004 731', area: '1,510', ent: 'Sheep', phone: '02 6072 4417' },
  { name: 'Riverbend Farm', zone: 'Zone 4', loc: '2310 Colac Colac Rd, Colac Colac VIC', lng: 147.8602, lat: -36.2346, role: 'Owner', abn: '19 447 228 065', area: '1,240', ent: 'Beef', phone: '02 6076 1182' },
  { name: 'Willow Creek Farm', zone: 'Zone 5', loc: '640 Khancoban Rd, Khancoban NSW', lng: 148.1435, lat: -36.2602, role: 'Owner', abn: '64 302 871 945', area: '720', ent: 'Dairy', phone: '02 6077 1460' },
  { name: 'Hillview Farm', zone: 'Zone 6', loc: '1575 Nariel Rd, Nariel Valley VIC', lng: 147.7856, lat: -36.3572, role: 'Owner', abn: '27 558 913 402', area: '980', ent: 'Sheep', phone: '02 6072 1874' },
  { name: 'Cedar Ridge Farm', zone: 'Zone 7', loc: '305 Shelley Rd, Shelley VIC', lng: 147.5291, lat: -36.2038, role: 'Owner', abn: '45 716 280 339', area: '1,120', ent: 'Beef', phone: '02 6072 3550' },
  { name: 'Bluegum Farm', zone: 'Zone 8', loc: '980 Pine Mountain Rd, Pine Mountain VIC', lng: 147.8233, lat: -36.0074, role: 'Owner', abn: '58 044 617 290', area: '890', ent: 'Mixed farming', phone: '02 6037 1268' },
  { name: 'Stonybrook Farm', zone: 'Zone 9', loc: '1760 Tooma Rd, Tooma NSW', lng: 148.0147, lat: -35.9338, role: 'Owner', abn: '71 829 305 166', area: '1,360', ent: 'Beef', phone: '02 6948 4105' },
  { name: 'Kookaburra Farm', zone: 'Zone 10', loc: '215 Tom Groggin Rd, Tom Groggin VIC', lng: 148.0988, lat: -36.6451, role: 'Owner', abn: '36 471 902 583', area: '760', ent: 'Sheep', phone: '02 6077 9322' },
];
const _QF = (() => { try { return new URLSearchParams(location.search).get('farm'); } catch (e) { return null; } })();
if (_QF && !FARMS.some(f => f.name === _QF)) FARMS.unshift({ ...FARMS[0], name: _QF });
const RG_P = [['temp', 'Temperature', '°C', 'M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z', '#F97316', 'l'], ['wind', 'Wind', 'km/h', 'M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h8', '#5EEAD4', 'l'], ['r1', 'Rainfall · Last 1 hour', 'mm', 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z', '#60A5FA', 'l'], ['r24', 'Rainfall · Last 24 hours', 'mm', 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z', '#60A5FA', 'l'], ['mm', 'Min/Max temperature', '°C', 'M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z', '#60A5FA', 'f'], ['aw', 'Avg wind', 'km/h', 'M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h8', '#5EEAD4', 'f'], ['rn', 'Rainfall · Next 24 hours', 'mm', 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z', '#60A5FA', 'f'], ['moist', 'Moisture', '%', 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z', '#60A5FA', 's'], ['vic', 'VIC', 'µS/cm', 'M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0', '#2DD4BF', 's'], ['stemp', 'Temperature', '°C', 'M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z', '#F97316', 's']];
const MNS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const rnd = (i, s) => { const x = Math.sin(i * 12.9898 + s * 78.233) * 43758.5453; return x - Math.floor(x); };
const climDaily = (t0, t1, seed) => {
  const o = { lab: [], t: [], mx: [], mn: [], av: [], rf: [], hum: [], msl: [], et: [], evap: [], sol: [], vp: [] };
  for (let t = t0; t <= t1; t += 864e5) { const d = new Date(t), k = Math.round(t / 864e5), doy = (t - new Date(d.getFullYear(), 0, 1)) / 864e5, c = Math.cos(2 * Math.PI * (doy - 15) / 365);
    const base = 15.5 + 6.5 * c + (rnd(k >> 3, seed) - .5) * 3, mx = base + 5.5 + (rnd(k, seed + 1) - .5) * 7, mn = Math.min(mx - 3, base - 4.5 + (rnd(k, seed + 2) - .5) * 5), r = rnd(k, seed + 3);
    const dd = String(d.getDate()).padStart(2, '0') + ' ' + MNS[d.getMonth()];
    o.lab.push({ s: dd + ' ' + String(d.getFullYear()).slice(2), full: dd + ' ' + d.getFullYear(), t, g: 'd' }); o.t.push(t);
    o.mx.push(+mx.toFixed(1)); o.mn.push(+mn.toFixed(1)); o.av.push(+((mx + mn) / 2).toFixed(1));
    o.rf.push(r > .7 ? +((r - .7) * (r > .97 ? 110 : 38) * (1 - .35 * c)).toFixed(1) : 0);
    o.hum.push(+(60 - 14 * c + (rnd(k, seed + 4) - .5) * 16).toFixed(1)); o.msl.push(+(1016 - 2.5 * c + (rnd(k, seed + 5) - .5) * 9).toFixed(1));
    const et = Math.max(.4, 3.3 + 2.7 * c + (rnd(k, seed + 6) - .5) * 1.6); o.et.push(+et.toFixed(2)); o.evap.push(+(et * 1.35 + (rnd(k, seed + 7) - .5)).toFixed(2));
    o.sol.push(+Math.max(4, 18 + 9 * c + (rnd(k, seed + 8) - .5) * 7).toFixed(1)); o.vp.push(+(13 + 4 * c + (rnd(k, seed + 9) - .5) * 3).toFixed(1)); }
  return o;
};
const climMonthly = (D, keys, sums) => { const g = {}; D.t.forEach((t, i) => { const d = new Date(t), k = d.getFullYear() * 12 + d.getMonth(); (g[k] = g[k] || []).push(i); });
  const ks = Object.keys(g).map(Number).sort((a, b) => a - b), o = { lab: ks.map(k => { const y = Math.floor(k / 12), m = k % 12, t = +new Date(y, m, 1); return { s: MNS[m] + " '" + String(y).slice(2), full: MNS[m] + ' ' + y, t, g: 'm' }; }), t: ks.map(k => +new Date(Math.floor(k / 12), k % 12, 1)) };
  keys.forEach(key => { o[key] = ks.map(k => { const ix = g[k], s = ix.reduce((a, i) => a + D[key][i], 0); return +(sums.includes(key) ? s : s / ix.length).toFixed(1); }); }); return o; };
const fineSplit = (dates, L) => {
  const g = dates[0].g, sub = g === 'd' ? 24 : g === 'w' ? 7 : g === 'm' ? 4 : 6, MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const lab = t => { const d = new Date(t), dd = String(d.getDate()).padStart(2, '0') + ' ' + MN[d.getMonth()]; if (g === 'd') { const h = String(d.getHours()).padStart(2, '0') + ':00'; return { s: h, full: dd + ' ' + d.getFullYear() + ', ' + h, t, g: 'h' }; } return { s: dd, full: dd + ' ' + d.getFullYear(), t, g: g === 'w' ? 'd' : 'w' }; };
  const nd = [], nl = L.map(l => ({ ...l, v: [] }));
  for (let i = 0; i < dates.length - 1; i++) for (let j = 0; j < sub; j++) { const f = j / sub; nd.push(lab(dates[i].t + (dates[i + 1].t - dates[i].t) * f));
    L.forEach((l, li) => { const a0 = l.v[i], a1 = l.v[i + 1]; if (a0 == null || a1 == null) { nl[li].v.push(null); return; } const x = Math.sin((i * sub + j + 1) * 12.9898 + li * 7.13) * 43758.5453, r = x - Math.floor(x);
      if (l.type === 'bars') nl[li].v.push(+(a0 / sub * (r < .45 ? 0 : r * 2.2)).toFixed(2)); else { const dn = g === 'd' ? -Math.cos(f * Math.PI * 2) * Math.max(.4, Math.abs(a0) * .04) : 0; nl[li].v.push(+(a0 + (a1 - a0) * f + dn + (r - .5) * Math.max(.2, Math.abs(a1 - a0) * .25)).toFixed(2)); } }); }
  const last = dates[dates.length - 1]; nd.push(lab(last.t)); L.forEach((l, li) => nl[li].v.push(l.type === 'bars' ? +(l.v[l.v.length - 1] / sub).toFixed(2) : l.v[l.v.length - 1]));
  return { dates: nd, L: nl };
};
const FAQS = [['How often does data update?', 'Most weather stations and soil probes report every 15 minutes. Each provider\'s sync frequency is shown under Providers.'], ['Why is a device showing offline?', 'The provider has not received a reading recently. Check power and signal, then raise a support ticket if it persists.'], ['How do I connect a new data provider?', 'Open Providers, choose Browse Providers, then Connect and sign in with your provider login.'], ['Who can see my farm data?', 'Only users you invite. Regional views use data only from farms that have chosen to share.'], ['How do I change alert thresholds?', 'Go to Alerts and open the alert rule you want to adjust.']].map(([q, a]) => ({ q, a }));
const ZONES = ZONE_LIST.filter(z => FARMS.some(f => f.zone === z.s)).map(z => [z.s, z.c, FARMS.filter(f => f.zone === z.s).length]);
const IC = {
  weather: 'M12 22V9M8 22h8M5 6h14M8 6V3M16 6V3M12 9l-3-3M12 9l3-3',
  soil: 'M12 2v13M8 6h8M9 15h6l-3 7z',
  other: 'M4 19h16M6 19l2-8h8l2 8M12 11V6M9 6h6',
};
const ICC = { weather: ['#eff6ff', '#1d4ed8'], soil: ['#fef3c7', '#92400e'], other: ['#ECFEFF', '#043C2C'] };
const DPOS = [[[148.072,-36.0645],[148.0484,-36.0645],[148.0657,-36.0594],[148.0547,-36.0594]],[[147.5508,-36.0327],[147.5146,-36.0327],[147.5412,-36.0249],[147.5242,-36.0249]],[[147.5049,-36.116],[147.4705,-36.116],[147.4957,-36.1086],[147.4797,-36.1086]],[[147.869,-36.2313],[147.8514,-36.2313],[147.8643,-36.2275],[147.8561,-36.2275]],[[148.1682,-36.2509],[148.1188,-36.2509],[148.155,-36.2403],[148.132,-36.2403]],[[147.8103,-36.3479],[147.7609,-36.3479],[147.7971,-36.3373],[147.7741,-36.3373]],[[147.5444,-36.1981],[147.5138,-36.1981],[147.5362,-36.1915],[147.522,-36.1915]],[[147.836,-36.0026],[147.8106,-36.0026],[147.8292,-35.9971],[147.8174,-35.9971]],[[148.0373,-35.9253],[147.9921,-35.9253],[148.0252,-35.9156],[148.0042,-35.9156]],[[148.1235,-36.6358],[148.0741,-36.6358],[148.1103,-36.6252],[148.0873,-36.6252]]];
const devsOf = fi => { const f = FARMS[fi] || FARMS[0], k = Math.max(0, FARMS.indexOf(f) - (FARMS.length - 10)), sh = f.name.replace(/ Farm$/, ''), pos = DPOS[k] || DPOS[0], nW = k < 4 ? 2 : 1, nS = k < 5 ? 2 : 1, out = []; let j = 0;
  const at = d => { const p = pos[j++] || [f.lng + .03 * j, f.lat]; return { ...d, lng: p[0], lat: p[1], dx: +(p[0] - f.lng).toFixed(4), dy: +(p[1] - f.lat).toFixed(4) }; };
  out.push(at({ id: 'WS-01', ref: 'w1', name: sh + ' Weather Station', type: 'weather', provider: 'AxisTech', status: 'Online', last: '10:42 am', reading: '18.4 °C · 62% RH' }));
  if (nW > 1) out.push(at({ id: 'WS-02', ref: 'w3', name: sh + ' Weather Station 2', type: 'weather', provider: 'Metos', status: k === 1 ? 'Offline' : 'Online', last: k === 1 ? 'Yesterday 4:10 pm' : '10:38 am', reading: k === 1 ? 'No data' : '16.9 °C · 58% RH' }));
  out.push(at({ id: 'SP-01', ref: 'p1', name: sh + ' Soil Probe', type: 'soil', provider: 'AxisTech', status: 'Online', last: '10:15 am', reading: '27% at 30 cm' }));
  if (nS > 1) out.push(at({ id: 'SP-02', ref: 'p2', name: sh + ' Soil Probe 2', type: 'soil', provider: 'Metos', status: 'Online', last: '10:30 am', reading: '34% at 30 cm' }));
  return out; };
const CTRL = { 'WS-01': '4EC88F550E54', 'WS-02': '4EC88F551A07', 'SP-01': 'AXTCL_4E873A5B5898', 'SP-02': 'AXTCL_4E6FF1E989E5' };
const UP_TY = [['livestock', 'Livestock weights', 'Weigh data by animal or mob', 'M5 13a7 5 0 0 1 14 0v2H5zM8 15v4M16 15v4M17 9l2-3M7 9 5 6', '#ECFEFF', '#0891B2'],
  ['pasture', 'Pasture / biomass', 'Biomass and pasture cover by paddock', 'M12 20.5v-8.5M12 12c0-4.2 3-7.2 8-7.2 0 4.2-3 7.2-8 7.2zM12 14.5c0-3-2.2-5.2-6-5.2 0 3 2.2 5.2 6 5.2zM5 20.5h14', '#E8F6EF', '#12855F'],
  ['crop', 'Crop yield', 'Harvest yield by paddock and crop', 'M12 21V8M12 8c-2-1-3-2.6-3-4.6 2 0 3 2 3 4.6zM12 8c2-1 3-2.6 3-4.6-2 0-3 2-3 4.6zM12 13c-2-1-3-2.6-3-4.6 2 0 3 2 3 4.6zM12 13c2-1 3-2.6 3-4.6-2 0-3 2-3 4.6z', '#FEF6DB', '#B45309'],
  ['milk', 'Milk production', 'Daily milk yield by herd or milking group', 'M9 3h6M10 3v3l-3 4v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V10l-3-4V3M7 13h10', '#E8F0FE', '#2563EB'],
  ['soil', 'Soil lab results', 'Lab soil tests by paddock and depth', 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3M7.5 15h9', '#FDF0E6', '#C2783A'],
  ['hist', 'Historical production', 'Past production records for comparing seasons', 'M3 3v18h18M7 15l4-4 3 3 6-7', '#F5F3FF', '#7C3AED']];
const UP_SC = {
  livestock: { file: 'livestock_weights.csv', rows: 48, bad: 2,
    f: [['date', 'Weigh date', 1], ['tag', 'Animal ID / tag', 1], ['weight', 'Weight (kg)', 1], ['mob', 'Mob / pen', 0], ['breed', 'Breed', 0], ['sex', 'Sex', 0], ['age', 'Age (months)', 0], ['cond', 'Condition score', 0]],
    c: [['Date', ['04/11/2026', '04/11/2026', '04/11/2026'], 'date'], ['EID', ['982 000123456781', '982 000123456782', '982 000123456783'], 'tag'], ['Weight kg', ['512', '488', '534'], 'weight'], ['Mob', ['Pen 1', 'Pen 1', 'Pen 2'], 'mob'], ['Breed', ['Angus', 'Angus', 'Hereford'], 'breed'], ['Sex', ['Steer', 'Steer', 'Heifer'], 'sex'], ['Scale', ['Gallagher W810', 'Gallagher W810', 'Gallagher W810'], '']],
    err: [['11', 'Weight (kg)', 'weight of 4,880 kg is outside the expected range (20–1,500)'], ['27', 'Animal ID / tag', 'animal ID is empty']] },
  pasture: { file: 'pasture_biomass.csv', rows: 42, bad: 3,
    f: [['date', 'Date', 1], ['paddock', 'Paddock', 1], ['cover', 'Biomass (kg DM/ha)', 1], ['area', 'Area (ha)', 0], ['growth', 'Growth rate (kg DM/ha/day)', 0], ['gcov', 'Ground cover %', 0], ['species', 'Species', 0], ['graze', 'Grazing status', 0]],
    c: [['Date of reading', ['04/11/2026', '04/11/2026', '04/11/2026'], 'date'], ['Paddock name', ['North East', 'North West', 'Main Shed'], 'paddock'], ['Biomass', ['1650', '1280', '1820'], 'cover'], ['Area ha', ['42', '65', '38'], 'area'], ['Growth rate', ['38', '24', '46'], 'growth'], ['Species', ['Ryegrass', 'Kikuyu', 'Clover mix'], 'species'], ['Grazing', ['Pre-grazing', 'Post-grazing', 'Resting'], 'graze'], ['Operator', ['J. Smith', 'J. Smith', 'A. Lee'], '']],
    err: [['6', 'Paddock', 'paddock name "Swamp Pdk" not found'], ['9', 'Biomass (kg DM/ha)', 'biomass of 9,400 kg DM/ha is outside the expected range (0–6,000)'], ['17', 'Date', 'date "31/11/2026" is not a valid date']] },
  crop: { file: 'crop_yield_2025.csv', rows: 36, bad: 2,
    f: [['date', 'Date', 1], ['paddock', 'Paddock', 1], ['crop', 'Crop type', 1], ['yield', 'Yield (t/ha)', 1], ['variety', 'Variety', 0], ['moist', 'Moisture (%)', 0], ['prot', 'Protein (%)', 0], ['area', 'Harvest area (ha)', 0], ['tonnes', 'Total tonnes', 0], ['grade', 'Grade', 0]],
    c: [['Harvest date', ['02/12/2025', '03/12/2025', '05/12/2025'], 'date'], ['Field', ['Creek Flat', 'Hill', 'River'], 'paddock'], ['Crop', ['Wheat', 'Barley', 'Canola'], 'crop'], ['Yield t/ha', ['3.42', '2.95', '1.88'], 'yield'], ['Variety', ['Scepter', 'Spartacus', 'HyTTec Trident'], 'variety'], ['Moisture %', ['11.2', '12.0', '8.4'], 'moist'], ['Protein %', ['11.8', '10.4', '—'], 'prot'], ['Area ha', ['42', '65', '38'], 'area'], ['Tonnes', ['143.6', '191.8', '71.4'], 'tonnes'], ['Header', ['JD S780', 'JD S780', 'JD S780'], '']],
    err: [['4', 'Crop type', 'crop "Whaet" is not recognised'], ['21', 'Yield (t/ha)', 'yield of 14.2 t/ha is outside the expected range (0–8)']] },
  milk: { file: 'milk_production_oct.csv', rows: 62, bad: 2,
    f: [['date', 'Date', 1], ['herd', 'Herd / group', 1], ['vol', 'Milk yield (L)', 1], ['cow', 'Cow ID', 0], ['prot', 'Protein %', 0], ['fat', 'Fat %', 0], ['scc', 'Somatic cell count (SCC)', 0], ['ms', 'Milk solids (kg)', 0], ['sess', 'Milking session', 0], ['lact', 'Lactation stage', 0], ['feed', 'Feed intake', 0]],
    c: [['Production date', ['01/10/2026', '01/10/2026', '02/10/2026'], 'date'], ['Herd', ['Main', 'Heifers', 'Main'], 'herd'], ['Litres', ['8420', '2150', '8510'], 'vol'], ['Protein', ['3.4', '3.5', '3.4'], 'prot'], ['Fat', ['4.1', '4.3', '4.0'], 'fat'], ['SCC', ['142000', '98000', '151000'], 'scc'], ['Session', ['AM', 'AM', 'PM'], 'sess'], ['Shed', ['Rotary', 'Rotary', 'Rotary'], '']],
    err: [['33', 'Milk yield (L)', 'milk yield is empty'], ['48', 'Somatic cell count (SCC)', 'SCC of 4,200,000 is outside the expected range']] },
  soil: { file: 'soil_lab_2026.csv', rows: 24, bad: 2,
    f: [['date', 'Sample date', 1], ['paddock', 'Paddock', 1], ['depth', 'Depth', 1], ['ph', 'pH', 0], ['ec', 'EC', 0], ['oc', 'Organic carbon (%)', 0], ['n', 'Nitrogen (N)', 0], ['p', 'Phosphorus (P)', 0], ['k', 'Potassium (K)', 0], ['s', 'Sulphur (S)', 0], ['ca', 'Calcium (Ca)', 0], ['mg', 'Magnesium (Mg)', 0], ['na', 'Sodium (Na)', 0], ['zn', 'Zinc (Zn)', 0], ['cu', 'Copper (Cu)', 0], ['b', 'Boron (B)', 0], ['mn', 'Manganese (Mn)', 0], ['cec', 'CEC', 0], ['esp', 'ESP', 0]],
    c: [['Date sampled', ['12/03/2026', '12/03/2026', '12/03/2026'], 'date'], ['Paddock', ['North East', 'North East', 'North West'], 'paddock'], ['Depth', ['0-10cm', '10-30cm', '0-10cm'], 'depth'], ['pH CaCl2', ['5.6', '5.1', '6.0'], 'ph'], ['EC dS/m', ['0.12', '0.08', '0.15'], 'ec'], ['OC %', ['1.8', '0.9', '2.1'], 'oc'], ['Nitrate N', ['18', '9', '22'], 'n'], ['Colwell P', ['32', '14', '41'], 'p'], ['Colwell K', ['145', '110', '160'], 'k'], ['Sulphur', ['9.4', '7.1', '11.2'], 's'], ['CEC', ['8.2', '6.4', '9.1'], 'cec'], ['Lab ref', ['CSBP-2210', 'CSBP-2211', 'CSBP-2212'], '']],
    err: [['7', 'Depth', 'depth "0-100" is not a recognised range'], ['15', 'pH', 'pH of 11.8 is outside the expected range (3–10)']] },
  hist: { file: 'production_history.csv', rows: 30, bad: 1,
    f: [['season', 'Year / season', 1], ['ent', 'Farm type', 1], ['value', 'Production value', 1], ['yield', 'Yield', 0], ['stock', 'Stock numbers', 0], ['area', 'Area farmed', 0]],
    c: [['Season', ['2023', '2024', '2025'], 'season'], ['Farm type', ['Crop', 'Livestock', 'Milk'], 'ent'], ['Value ($)', ['412000', '286000', '198000'], 'value'], ['Yield', ['2.9 t/ha', '—', '1.42M L'], 'yield'], ['Head', ['—', '640', '420'], 'stock'], ['Comments', ['Dry finish', 'Good season', '—'], '']],
    err: [['12', 'Farm type', '']] } };
const upSampleRows = S => Array.from({ length: 12 }, (_, r) => S.c.map(c => { const v = c[1][r % 3]; const x = parseFloat(v); return !isNaN(x) && /^[\d.]+$/.test(v) && r > 2 ? String(+(x * (0.9 + ((r * 7) % 5) / 20)).toFixed(v.includes('.') ? (v.split('.')[1] || '').length : 0)) : v; }));
const dlCsv = (name, cols, rows) => { const csv = [cols, ...rows].map(r => r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(',')).join('\n'); const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500); };
const upSample = k => { const S = UP_SC[k]; dlCsv(S.file.replace(/\.\w+$/, '') + '_sample.csv', S.c.map(c => c[0]), upSampleRows(S)); };
const upTemplate = k => { const S = UP_SC[k]; dlCsv('ump_' + k + '_template.csv', S.f.map(f => f[1]), []); };
const UM_SUB = ['Corryong', 'Cudgewa', 'Tallangatta', 'Towong', 'Walwa', 'Khancoban', 'Tintaldra', 'Nariel Valley', 'Thowgla Valley', 'Berringama', 'Bellbridge', 'Granya', 'Mitta Mitta', 'Eskdale', 'Koetong', 'Shelley', 'Jarvis Creek', 'Bullioh', 'Tangambalanga', 'Huon Creek', 'Old Tallangatta', 'Bethanga', 'Talgarno', 'Burrowye', 'Guys Forest', 'Pine Mountain', 'Colac Colac', 'Biggara', 'Lucyvale', 'Mount Alfred', 'Tom Groggin', 'Georges Creek', 'Wymah', 'Jingellic', 'Tooma', 'Welaregang', 'Indi', 'Dartmouth', 'Sandy Creek', 'Kiewa'];
const REG = (() => { const cnt = {}; let si = 0; return FARMS.slice(-10).map((f, i) => { cnt[f.zone] = (cnt[f.zone] || 0) + 1; return { z: f.zone, pn: cnt[f.zone], town: f.loc.split(',').slice(1).join(',').trim(), devs: devsOf(FARMS.indexOf(f)).map((d, di) => ({ ...d, town: UM_SUB[si++ % UM_SUB.length] + ', VIC', status: 'Online', last: d.status === 'Offline' ? '10:38 am' : d.last, seed: i * 7 + di + 1, key: i + '-' + d.id })) }; }); })();
const SRV = (seed, k, a, b, day = 1, dep = 10) => { const x = Math.sin(seed * 12.9898 + k * 78.233 + day * 3.1 + dep * .7) * 43758.5453; return a + Math.floor((x - Math.floor(x)) * (b - a + 1)); };
const DIR16 = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
const wxRead = (seed, day = 1, dep = 10) => { const r = (k, a, b) => SRV(seed, k, a, b, day, dep), temp = r(1, 13, 18), wind = r(2, 6, 24), hum = r(12, 45, 80); return { temp, wind, r1: r(3, 0, 8) / 10, r24: r(4, 0, 14), hum, gust: wind + r(13, 4, 12), dir: DIR16[r(14, 0, 15)], sol: r(15, 140, 620), dew: +(temp - (100 - hum) / 5).toFixed(1), msl: r(16, 1010, 1022), et: (r(17, 20, 45) / 10).toFixed(1), dt: (r(18, 20, 70) / 10).toFixed(1), mm: [r(5, 2, 8), r(6, 16, 22)], aw: r(7, 8, 22), rn: r(8, 0, 12) }; };
const soilAt = (seed, dep, day = 1) => ({ moist: SRV(seed, 9, 22, 41, day, dep), stemp: SRV(seed, 10, 11, 16, day, dep), vic: SRV(seed, 11, 180, 420, day, dep) });
const kindOf = d => d.type === 'soil' ? (d.id === 'SP-02' ? 'Soil probe 2' : 'Soil probe') : (d.id === 'WS-02' ? 'Weather station 2' : 'Weather station');
const DROP = 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z', THERMO = 'M12 3v11a4 4 0 1 1-4 0V3z';
const ZIC = { t: ['#FFF1E6', '#EA580C', THERMO], r: ['#E8F0FE', '#2563EB', DROP], h: ['#E6F4FA', '#0891B2', DROP + 'M9.5 15.5l5-5'], p: ['#F1F5F9', '#475569', 'M12 14l4-4M4 18a9 9 0 1 1 16 0z'], w: ['#E6F6EA', '#16A34A', 'M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8'], s: ['#FEF6DB', '#CA8A04', 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5'], e: ['#E7F7EE', '#059669', 'M2 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0M12 3v6'], d: ['#E8F0FE', '#3B82F6', 'M12 3s-6 6.5-6 11a6 6 0 0 0 12 0c0-4.5-6-11-6-11zM9 15.5a3 3 0 0 0 3 2.5'], dt: ['#FFF1E6', '#EA580C', 'M12 4 3 20h18zM12 10v4M12 17h.01'], st: ['#FDF0E6', '#C2783A', THERMO], v: ['#E6F7F5', '#0D9488', 'M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0'] };
const zCard = ([l, v, u, ic]) => ({ l, v: String(v), u, bg: ZIC[ic][0], fg: ZIC[ic][1], d: ZIC[ic][2] });
const PCAT = [
  ["AxisTech","Weather & soil","AxisTech supports agrifood businesses in navigating climate and economic variability. Since 2017, they have been dedicated to helping farmers and agribusinesses improve sustainability, productivity, and profitability with practical, effective technology. We’re committed to providing the tools and support you need to get the most out of your data, tackle industry challenges, and build a sustainable future in agriculture. The solutions include: Locally Manufactured IoT Devices – Reliable devices, for monitoring weather, water, soil and more. FarmMap4D – GIS mapping to help you understand and manage your land and resources. AxisStream Platform – A single point of truth that centralises data, providing insights and supporting informed decisions. Emissions Management – Tools to track and manage emissions supporting your sustainability goals","#475569","uploads/axistech.png","https://axistech.co/","axistech"],
  ["CNH Field Ops","Machinery","CNH FieldOps is a platform that provides access to agronomic data and vehicle telemetry for both agricultural machinery and construction equipment connected to a FieldOps account. It's designed to support integration with farm management systems, dashboards, and operational control platforms.","#475569","uploads/cnh_ag.png","https://fieldops.caseih.com/","cnh_ag"],
  ["Ceres Tag","Livestock","Ceres Tag is a pioneering animal monitoring platform that uses smart ear tags with direct-to-satellite connectivity to deliver real-time data on livestock without the need for towers, infrastructure, or ongoing maintenance. Receive daily updates on your animals’ walking, grazing, resting, and ruminating behaviors. Gain valuable insights into their wellbeing and activity patterns. Get instant alerts for unusual or suspicious activity. Track their current location and movement history with ease. Stay connected to your animals anytime, anywhere in the world—24/7.","#475569","uploads/cerestag.svg","https://cerestag.com/?srsltid=AfmBOooPr5l1UGxuyTJUunm-hbqLGsfehhrMTaEdd1bIyzW4qW_fWt3C","cerestag"],
  ["Coles","Business","Coles is one of Australia’s largest and most well-known supermarket chains. The company operates a wide range of businesses focused on delivering everyday grocery and household products to Australian consumers. Coles operates a nationwide network of supermarkets offering fresh produce, pantry staples, meat, dairy, bakery items, and household goods. Through Coles Online, customers can shop for groceries and have them delivered or prepared for pickup. Coles offers a variety of in-house brands, including premium lines like Coles Finest and value-focused options.","#475569","uploads/coles.png","https://www.coles.com.au/","coles"],
  ["CSBP","Agronomy","CSBP is recognised as Western Australia’s leading manufacturer and supplier of chemicals, fertilisers and related services to mining, agricultural and industrial sectors throughout the world.","#475569","uploads/csbp.svg","https://csbp.com.au/","csbp"],
  ["CropScan","Grain","CropScanAg provides the industry leading solution in Near Infrared On Combine Grain Analysis, providing real-time grain quality data and powerful field data analytics to optimise crop production. With over 6 million acres of protein data collected worldwide, our technology allows farmers to make data-driven decisions during harvest, through to seeding and spraying. Our solution offers farmers precise and accurate data for optimising crop production and input efficiency.","#475569","uploads/cropscan.png","https://cropscanag.com/","cropscan"],
  ["Earth Optics","Soil","EarthOptics combines advanced field sensors and lab analysis to deliver the most complete view of your soil’s potential. By measuring the physical, chemical, and biological properties, we can help you predict and plan to maximize soil health and profitability.","#475569","uploads/earthopt.png","https://earthoptics.com/","earthopt"],
  ["FoodChain ID","Business","FoodChain ID is a global leader in providing food safety, quality, and sustainability solutions to the food and beverage industry. The company helps over 30,000 businesses in more than 100 countries navigate complex regulatory environments and meet consumer expectations for transparency and safety. FoodChain ID offer the collective intelligence of the most knowledgeable experts in the industry in a broad range of fields: Product Development Food Safety Certification, Regulatory Compliance, Product Certifications, Testing Solutions, Commodity & Ingredient Safety, Training & Consulting.","#475569","uploads/foodchainid.png","https://www.foodchainid.com/","foodchainid"],
  ["Gallagher","Livestock","Weighing is a powerful performance measurement tool for farmers, as informed management decisions come from animal weight data that is easily obtained and accurate. The benefits of weighing animals include: • Measure feed conversion to maximise yield by monitoring weight gain over time • Monitor animal health • Reach animal weights prior to mating for better reproduction rates • Determine weaning weights • Select animals by weight for sale and slaughter • Evaluate animal breeding performance for genetic selection","#F7941D","assets/gallagher-logo.png","https://am.gallagher.com/en-AU/Solutions/Weighing-and-EID-Solutions","gallagher"],
  ["Jane's Weather (Australia)","Weather","Get a clearer view of the week ahead AxisStream now includes access to a standard 7-day regional weather forecast, available with all paid subscriptions. Activate this feature to: * Plan farm operations with confidence * Optimise timing for spraying, seeding, irrigation and harvest * Reduce risk by staying ahead of changing conditions Activate Forecast to start making smarter, weather-informed decisions today.","#475569","uploads/pasted-1794211443403-0.png","https://janesweather.com/","janes_weather"],
  ["John Deere Ops Centre","Machinery","John Deere specializes in providing advanced machinery and technology solutions. They offer a wide range of farming equipment, including tractors, harvesters, and precision agriculture technologies. John Deere supplies heavy machinery like excavators and loaders, often integrated with smart technologies like SmartGrade for enhanced precision. They are also heavily invested in automation, AI, and sustainability. Innovations include autonomous tractors, electric-powered machines, and See & Spray technology that uses AI to reduce herbicide use.","#475569","uploads/Johndeere.svg","https://operationscenter.deere.com/","Johndeere"],
  ["AgriWebb","Livestock","AgriWebb’s industry-leading livestock management software helps you capture, share, and do more with your everyday farm data. From record keeping, to grazing insights and running a more productive team. AgriWebb offers an end-to-end solution full of features built for every management style, enterprise type, and farm setup.","#475569","uploads/agriwebb.svg","https://www.agriwebb.com/","agriwebb"],
  ["The Bureau of Meteorology","Weather","The Bureau of Meteorology (BoM) is Australia's national weather, climate, and water agency. The Perth-specific section of their website (bom.gov.au/places/wa/perth) provides localized weather services for the Perth region, including: Daily and 7-day weather forecasts for Perth and surrounding suburbs. Severe weather warnings, including fire danger ratings and storm alerts. Real-time weather observations, such as temperature, wind, humidity, and rainfall. UV index and sun protection times. Radar and satellite imagery for tracking weather systems. Climate data and historical weather records. This service is essential for residents, businesses, and emergency services in Western Australia to plan and respond to weather conditions effectively","#475569","uploads/bomweather.svg","https://www.bom.gov.au/","bomweather"],
  ["CBH Group","Grain","The CBH Group is Australia’s largest co-operative and a leader in the Australian grain industry, with operations extending along the value chain from fertiliser to grain storage, handling, transport, marketing and processing. Owned and controlled by approximately 3,500 Western Australian grain growing businesses, the core purpose of CBH is to sustainably create and return value to WA grain growers, current and future. The CBH Group consists of three core business activities: Operations (storage and handling), Marketing and Trading, and Fertiliser. In Operations, CBH has a network of more than 100 grain receival sites across Western Australia and four export port terminals. We own a state-of-the-art rail fleet dedicated to the most efficient transfer of grain from our receival sites to the port terminals. The co-operative’s Marketing and Trading arm is the leading grain acquirer in Western Australia, Australia's largest grain exporter, and has operations in eastern Australia, as well as offices in Hong Kong and Tokyo. CBH Fertiliser begun operations in 2015, providing Western Australian growers more choice in the granular fertiliser market.","#475569","uploads/cbhgroup.svg","https://www.cbh.com.au/","cbhgroup"],
  ["DPIRD Weather","Weather","The Department of Primary Industries and Regional Development's (DPIRD) network of automatic weather stations and radars throughout the state provide timely, relevant and local weather data to assist growers and regional communities make more-informed decisions. The weather station data includes air temperature, humidity, rainfall, wind speed and direction, with most stations also measuring incoming solar radiation to calculate evaporation. This website includes dashboards for each station to visualise this data. Doppler radars The Doppler radars provide live radar imagery, as well as estimated rainfall and are available for the following locations: Perth (Serpentine) Kalgoorlie South Doodlakine Newdegate Watheroo Geraldton Albany Esperance (upgrade to Doppler by June 2020)","#475569","uploads/dpirdweather.svg","https://weather.agric.wa.gov.au/","dpirdweather"],
  ["National Livestock Identification System (NLIS)","Livestock","The National Livestock Identification System is Australia’s system for the identification and traceability of cattle, sheep and goats. NLIS reflects Australia’s commitment to biosecurity and food safety and provides a competitive advantage in a global market. The NLIS combines three elements to enable the lifetime traceability of animals: 1. All livestock are identified by a visual or electronic eartag/device. 2. All physical locations are identified by means of a Property Identification Code 3. All livestock location data and movements are recorded in a central database","#475569","uploads/nlis.png","https://www.nlis.com.au/","nlis"],
  ["Phoenix by AGDATA","Farm management","Phoenix by AGDATA is an end-to-end farm management software that empowers agricultural businesses across Australia to maximise efficiency and profit. With an ever-changing agricultural industry, farmers and producers are top of mind in everything we do. For over 40 years, AGDATA has been trusted by farmers across rural and regional Australia to simplify and strengthen the way they manage their businesses. Today’s agricultural industry moves faster than ever, and producers are expected to be experts in every corner of their operations – from the office to the paddock, from payroll to mapping to livestock management. That’s where Phoenix by AGDATA comes in: a purpose-built software solution that helps farmers take control, save time, and make better decisions. Proudly based in Toowoomba, Queensland, AGDATA continues to grow with the agricultural industry, supporting the success of farming businesses right across Australia.","#475569","uploads/phoenixagdata.png","https://www.agdata.com.au/about-us/","phoenixagdata"],
  ["Roubler","Business","Roubler’s all-in-one platform provides you with the power of one seamless system for all your workforce management needs. It incorporates everything you need to recruit, onboard, roster, manage and pay your team. Harnessing the power of AI and machine learning, Roubler helps increase efficiency and drive employee productivity across your entire workforce. Roubler can take care of all the onboarding, managing, rostering and paying of staff. Even all the employment contracts and documents can be done on the platform. And with the Roubler App installed on their phones, your team can view rosters, swap shifts, and even clock in and out.","#475569","uploads/roubler.svg","https://roubler.com/au/why-change-hr-systems/the-power-of-one/","roubler"],
  ["Harvest Road","Farm management","Harvest Road Group focuses on high quality agricultural food products in Western Australia. Harvest Road Group strives to produce the highest quality food products. They are passionate about providing high quality agricultural food, representative of the best Australia has to offer. Today the Harvest Road Group proudly encompasses the Harvey Beef and Leeuwin Coast brands. We market a range of high-quality foods for consumers and wholesale partners across Australia and international markets. Businesses include: Agribusiness, Beef Processing, Aquaculture","#475569","uploads/harvestroad.svg","https://www.harvestroad.com/about/who-we-are","harvestroad"],
  ["Eurofins Apal Agricultural Laboratory","Agronomy","Eurofins APAL delivers high quality independent soil, plant and water analytical services to enable better agronomic decisions. Eurofins APAL works with farmers to provide them with invaluable insight into paddock soil, and the technology to ensure consistent testing year after year. Eurofins APAL works with agronomists and stores to give growers the confidence they need to hit yield targets and maximise the return on their investments. Eurofins APAL works and collaborates with researchers to provide analysis on soil, plants and water, to improve their specialist knowledge.","#475569","uploads/eurofinsapal.png","https://www.apal.com.au/Home.aspx","eurofinsapal"],
  ["HiLo","Business","HiLo makes industrial-grade monitors that measure liquid levels using radar technology. Save time and hassle with accurate 24/7 liquid monitoring from any location. Solutions offered: Farm Water Tank Monitoring, Household Water Tank Monitoring, Fuel Tank Monitoring, Hydrological Water Level Monitoring, Wastewater and Surface Water Monitoring.","#475569","uploads/hilo.png","https://www.hilomonitoring.com/","hilo"],
  ["Jiwa","Business","Jiwa is an Australian enterprise resource planning (ERP) software provider, offering a powerful and flexible platform called Jiwa 7. It is designed for small to medium-sized businesses, especially those in wholesale, distribution, manufacturing, and service industries. Jiwa’s Business Intelligence (BI) capabilities offer you a wealth of information that you can use to improve processes, make predictions about future growth, and make business decisions based on all your collective data. This is possible because Jiwa’s business management software handles many aspects of your business management requirements from inventory to financials in one cohesive system. Giving you a scope of information not seen in other systems.","#475569","uploads/jiwa.png","https://jiwa.com.au/","jiwa"],
  ["Nutrient Advantage","Agronomy","Nutrient Advantage is a division of Incitec Pivot Fertilisers (IPF), a long-established Australian company specializing in soil and plant nutrition services. Their core mission is to help farmers make informed, data-driven decisions to improve crop productivity and soil health. Nutrient Advantage does: Soil and plant testing, Nutrient Management Planning, Decision Support Tools, Accredited Agronomist Network","#475569","uploads/nutrientadvantage.png","https://www.nutrientadvantage.com.au/services/digital-services/na-pro/","nutrientadvantage"],
  ["Optiweigh","Livestock","Optiweigh is farmer developed technology that is making precision livestock management a reality. Australian made and owned, it is the reliable and practical solution for measuring animal weights in real-time direct from the paddock.","#2B6CB0","assets/optiweigh-logo.png","https://optiweigh.com.au/","optiweigh"],
  ["Origo","Farm management","Origo has developed a technology able to cover a wide range of farming systems and requirements. Their systems are unique as their technology enables farmers to monitor and remotely control even large broadacre and remote livestock operations. A range of stations is designed to monitor and control farm's equipment. You can monitor tank levels, flow, switching any system such as control pumps, fans and valves.","#475569","uploads/origo.png","https://origo.ag/about","origo"],
  ["Triton","Livestock","Triton is a world-leading supplier of innovative proprietary software and hardware solutions for food processing. Across the globe, we offer a range of services, including data capture and production management software for the food processing sector, data capture hardware, and hardware solutions to help you reduce costs, increase efficiency, and improve safety for your operation.","#475569","uploads/triton.png","https://tritoncomsys.com/about-us/","triton"],
  ["Precision Soil Tech","Soil","Precision SoilTech has the experience required to collect reliable samples in any soil type, at any depth, so you can trust the data you use to make decisions. We make your experience easy, from site selection to reporting analysis so you have more time to concentrate on the bigger picture. Our goal is to ensure farmers and their advisers have accurate and relevant soil data in order to make effective management decisions","#475569","uploads/precisionsoiltech.png","https://precisionsoiltech.com.au/","precisionsoiltech"],
  ["Veris Technologies","Soil","Veris Technologies is a leading provider of on-the-go soil sensing technology designed to help farmers, agronomists, and agricultural retailers make better, data-driven decisions for crop production and land management. Go from data to decisions using a single, integrated process. Pair the right platform and sensors with software that makes it simple to deploy sensors on tillage tools and planters, map fields, process data, and deliver prescriptions. With the largest soil mapping network in the world and our team of data analysts — digital soil mapping and management is now at your fingertips. Available to farmers, agronomists, and retailers.","#475569","uploads/veristechnologies.png","https://www.veristech.com/","veristechnologies"],
  ["Xero","Business","Xero is an online accounting software that helps small business owners manage finances, connect with banks, and collaborate with advisors in real time. It offers automation by streamlining tasks like invoicing, bank reconciliation, payroll as well as reporting.","#475569","uploads/xero.png","https://www.xero.com/au/","xero"],
  ["TimePro","Business","Intertec TimePro is an affordable and easy-to-use web timesheet solution that lets you record and manage time records online. It can be purchased on a low cost monthly or annual subscription and is hosted on Microsoft’s Azure platform for the highest availability, performance and security. We provide excellent product support via phone and email from a dedicated in house support team – not some overseas call centre! Our team will work with you to ensure Intertec TimePro is setup to meet your specific business requirements. Features Intertec TimePro web timesheets application will help you track time and manage timesheets accurately and efficiently. Optionally integrate with your MYOB, Xero or QuickBooks accounting system. It’s packed with features from easy time entry, detailed reporting, data export options to manager authorisation, accounting software integration and multiple charge/cost rates for staff.","#475569","uploads/timepro.png","https://www.timesheets.com.au/products.asp","timepro"],
  ["Meat & Livestock Australia","Livestock","Meat & Livestock Australia (MLA) is a producer-owned company that supports the Australian red meat and livestock industry. MLA works in partnership with the red meat industry and the Australian Government to deliver marketing, research and development products and services to beef, sheep and goat producers, with the core purpose of fostering the prosperity of the red meat industry.","#475569","uploads/envd.svg","https://www.mla.com.au/","envd"],
  ["Helios","Weather","Helios is your ultimate partner for predicting price and supply availability for agricultural commodities. Helios price forecasts offer clear, reliable predictions for the next 12 months, with detailed explanations of what’s driving price changes. Plan smarter, negotiate better, and manage risk with confidence.","#475569","uploads/helios.png","https://www.helios.sc/","helios"],
  ["Elynx Livestock Software Systems","Livestock","Innovating Livestock Management Solutions Founded in 2000, eLynx Pty Ltd has established itself as a leading provider of livestock management software in Australia. Originally focused on the Australian feedlot industry, eLynx has broadened its scope to provide scalable management solutions across all areas of livestock production, including breeding, grazing, backgrounding, and feedlot management. Headquartered in Toowoomba, Queensland, eLynx is dedicated to improving the efficiency and productivity of livestock producers both locally and beyond.","#475569","uploads/elynxbms.png","https://elynx.com.au/","elynxbms"],
  ["Practical Systems Limited","Business","Practical Systems is an Australian company that provides software solutions primarily for rural and small business enterprises. Their offerings focus on simplifying financial and business management tasks, especially in the agricultural sector. Here's a brief summary of what they offer: PS Cashbook: A user-friendly accounting software tailored for farmers and small businesses, helping with bookkeeping, budgeting, and financial reporting. PS Payroll: A payroll management system that ensures compliance with Australian tax and superannuation regulations, including features for generating PAYG payment summaries. PS Stockbook: A livestock management tool designed to track animal performance, genetics, and treatments, widely used in the livestock industry. PS Agrimaster Integration: Tools that integrate with other farm management platforms to streamline data sharing and reporting. They also provide support resources, including knowledge bases and customer service, to help users manage tasks like amending payment summaries or handling lump sum payments","#475569","uploads/practicalsystems.png","https://www.practicalsystems.com.au/about/","practicalsystems"],
  ["Topcon","Machinery","Topcon offers a comprehensive suite of precision agriculture solutions designed to enhance productivity, reduce input costs, and promote sustainability across all stages of the farming cycle. Topcon’s solutions are universal, compatible with most agricultural machinery, and built to support ISOBUS standards, allowing integration with third-party systems. Their focus is on data-driven farming, helping producers adapt to economic, environmental, and regulatory challenges. Key Agricultural Solutions from Topcon: Soil preparation - Tools for land forming, tillage depth control, and fertilizer/manure spreading. Seeding & Planting - Technologies for air seeding, seed drill control, and transplanting. Crop care - Solutions include boom height control, spraying/spreading automation, and crop health monitoring. Harvest - Yield monitoring and harvest cart weighing systems. Feed Management - Intergrated feed mixer weighing systems, including legacy Digi-Star products. Guidance & Autosteering - Precision GNSS-based systems for machine guidance and autosteering. Weighing Systems - Mobile and onboard weighing for loaders, trailers, and forklifts.","#475569","uploads/topcon.png","https://www.topconpositioning.com/","topcon"],
  ["Agworld","Farm management","Agworld is a leading Australian agricultural technology company that provides a collaborative farm management platform designed to connect all stakeholders in the farming process—such as growers, agronomists, contractors, and financial advisors—on a single, shared data system. The Agworld ecosystem allows you to collect data at every level of your operation and share this data with everyone that matters to you. Growers, farm hands, agronomists, input providers, contractors, banks, accountants, land owners and many other stakeholders are now able to work together on the same set of data. Agworld has a unique structured data system which means that you can take all your historical farm records and data shared from advisors, and turn them into unparalleled insights for more profitable decisions.","#475569","uploads/agworld.svg","https://www.agworld.com/au/","agworld"],
  ["Aveva","Business","AVEVA is a global leader in industrial software, providing digital solutions that help businesses across industries—especially in energy, manufacturing, infrastructure, and marine sectors—optimize operations, improve efficiency, and drive sustainability. Design and Engineering: 3D plant design, process simulation, and engineering data management. Operations: Real-time monitoring, control systems (like SCADA and HMI), and production optimization. Asset Performance: Predictive maintenance, reliability analysis, and asset lifecycle management. Data Management: Integration of industrial data through platforms like the PI System (from OSIsoft), enabling advanced analytics and AI-driven insights.","#475569","uploads/aveva.svg","https://discover.aveva.com/paid-search-gc-consumer-products/ebook-smarter-consumer-products-manufacturing-building-competitive-advantage-with-ai-and-industrial-intelligence?utm_term=industrial%20manufacturing%20software&utm_campaign=G_S_A_APAC_ANZ_Campaign_Industry_CP_Consumer%20Products&utm_source=adwords&utm_medium=ppc&gad_source=1&gad_campaignid=23288178641&gclid=Cj0KCQjwm8bTBhDWARIsAC9Hi8nFtdKmi8AC1-OHAnhzh04up3bHmxBznLtBAHBC8L0a9Q-BtwgE97QaAvptEALw_wcB","aveva"],
  ["BMKG (Meteorology, Climatology, and Geophysical Agency of Indonesia)","Weather","BMKG (Badan Meteorologi, Klimatologi, dan Geofisika) is the official government agency of Indonesia responsible for meteorology, climatology, air quality monitoring, and geophysics. The agency provides reliable weather forecasts, climate information, earthquake and tsunami monitoring, maritime and aviation weather services, and early warning systems for natural hazards across Indonesia. Key Services Provided by BMKG: Weather forecasts and severe weather warnings. Climate monitoring and seasonal outlooks. Air quality monitoring and reporting. Earthquake and tsunami detection and alerts. Aviation weather services. Maritime weather and ocean condition forecasts. Geophysical monitoring and disaster mitigation support.","#475569","uploads/bmkg.png","https://www.bmkg.go.id/","bmkg"],
  ["Athena IR Tech","Irrigation","Precision irrigation technology provider that uses infrared canopy sensors and analytics to monitor plant water stress and optimize irrigation scheduling.","#475569","uploads/athena.svg","https://athenairtech.com/","athena"],
  ["Bioscout","Crop health","AI-powered crop disease monitoring platform that uses autonomous field sensors to detect airborne fungal spores and provide early disease risk alerts for growers","#475569","uploads/bioscout.png","https://www.bioscout.com.au/","bioscout"],
  ["Hussat - Soil Moisture Probes","Soil","Australian agritech company specializing in soil moisture sensors, telemetry systems, crop monitoring, and online agricultural data delivery.","#475569","uploads/hussat.png","https://hussat.com.au/","hussat"],
  ["Metos","Weather","METOS ANZ is the solutions provider for the Australian and New Zealand markets which are unique to other areas in the World. METOS by Pessl Instruments ag-tech solutions are providing insights like never before to agricultural, horticultural and viticultural production globally. We go beyond weather data and forecasting; our solutions provide complete and targeted insights to give you the confidence to action better decisions.","#475569","uploads/metos.png","https://metos.com.au/","metos"],
  ["Davis WeatherLink","Weather","Davis WeatherLink is a data logging, display, and cloud platform created by Davis Instruments. It connects personal weather stations—such as the Vantage Pro2 and Vantage Vue—to the internet. This lets users view real-time weather metrics, analyze historical trends, and share data globally","#475569","uploads/davis.png","https://www.weatherlink.com/","davis"],
  ["Wildeye","Crop health","Wildeye is an Internet of Things (IoT) hardware and remote monitoring provider specializing in agricultural and environmental data, including weather stations. It connects field sensors to the cloud, allowing users to view real-time data like rainfall, temperature, wind, and humidity via a mobile app or web portal. What Wildeye ProvidesHardware & Telemetry: Sells and supports cellular 4G IoT devices, weather stations, and online rain gauges.Agronomic Data: Generates metrics like reference evapotranspiration, Delta-T, chill portions, and growing degree days. Compatibility: Integrates with third-party sensors, water meters, and soil moisture probes from major manufacturers.","#475569","uploads/wildeye.png","https://www.mywildeye.com/","wildeye"]
];
const PROVS = [
  { name: 'AxisTech', kind: 'Weather & soil', status: 'Connected', sync: '6 min ago', freq: 'Every 15 minutes' },
  { name: 'Metos', kind: 'Weather', status: 'Connected', sync: '12 min ago', freq: 'Every 15 minutes' },
  { name: "Jane's Weather (Australia)", kind: 'Weather', status: 'Connected', sync: '3 h ago', freq: 'Hourly' },
  { name: 'Helios', kind: 'Weather', status: 'Connected', sync: '4 min ago', freq: 'Every 15 minutes' },
];
const NAV = [
  ['home', 'Home', 'M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z'],
  ['weather', 'Weather', 'M7.5 2.5v1.4M2.6 4.6l1 1M12.4 4.6l-1 1M1 9h1.4M4.6 11.4A3.4 3.4 0 1 1 10.6 8M8.2 21h9.6a4 4 0 0 0 .6-7.95 5.6 5.6 0 0 0-10.8 1.2A3.4 3.4 0 0 0 8.2 21z', false, 'mix'],
  ['season', 'Season', 'M4.5 19.5C4.5 10 10 4.5 20 4.5c0 9.5-5.5 15-15.5 15zM4.5 19.5 13.5 10.5'],
  ['soil', 'Soil', 'M12 16v-5M12 11c0-3 2-5.5 6-5.5 0 3-2 5.5-6 5.5zM12 9.8c0-2.6-1.8-4.8-5.5-4.8 0 2.6 1.8 4.8 5.5 4.8zM3 20.5c.8-2.2 2.6-3.3 4.6-3.3.9-1.3 2.4-2 4.4-2s3.5.7 4.4 2c2 0 3.8 1.1 4.6 3.3z'],
  ['livestock', 'Livestock', 'M 21.28 7.08 C 21.23 7.02 20.14 5.62 19.49 5.12 19.42 3.53 18.08 2.31 16.5 2.38 14.96 2.45 13.75 3.71 13.75 5.25 13.74 6.09 14.19 6.88 14.92 7.3 14.39 8.02 13.81 8.52 13.49 8.52 L 6.4 8.52 6.35 8.52 C 4.35 8.53 2.74 10.16 2.75 12.16 2.75 12.78 2.92 13.38 3.22 13.92 3.29 14.04 3.44 14.08 3.56 14.02 3.58 14 3.6 13.99 3.62 13.97 L 4.5 13.08 4.5 15.01 3.98 15.02 C 3.44 15.03 3 15.47 3 16.02 L 3 20.25 C 3 20.32 3.03 20.38 3.07 20.43 L 3.57 20.93 C 3.62 20.97 3.68 21 3.75 21 L 5.25 21 C 5.39 21 5.5 20.89 5.5 20.75 5.5 20.75 5.5 20.75 5.5 20.75 L 5.5 20.41 C 5.5 20.08 5.37 19.76 5.13 19.53 L 5 19.4 5 17.75 5.09 17.75 C 5.42 17.75 5.74 17.62 5.97 17.38 L 7.58 15.77 C 8.26 16.08 9 16.25 9.75 16.25 L 13.5 16.25 13.5 20.25 C 13.5 20.32 13.53 20.38 13.57 20.43 L 14.07 20.93 C 14.12 20.97 14.18 21 14.25 21 L 15.75 21 C 15.89 21 16 20.89 16 20.75 16 20.75 16 20.75 16 20.75 L 16 20.41 C 16 20.08 15.87 19.76 15.63 19.53 L 15.5 19.4 15.5 16 C 15.85 15.99 16.19 15.92 16.5 15.78 L 16.5 19.5 C 16.5 19.57 16.53 19.63 16.57 19.68 L 16.78 19.88 C 16.92 20.02 17 20.21 17 20.41 L 17 20.5 16.5 20.5 C 16.36 20.5 16.25 20.61 16.25 20.75 16.25 20.89 16.36 21 16.5 21 L 17.25 21 C 17.39 21 17.5 20.89 17.5 20.75 17.5 20.75 17.5 20.75 17.5 20.75 L 17.5 20.41 C 17.5 20.08 17.37 19.76 17.13 19.53 L 17 19.4 17 15.46 C 17.08 15.38 17.16 15.3 17.22 15.2 L 17.22 15.2 17.22 15.2 C 17.31 15.05 17.39 14.9 17.48 14.75 18.39 13.2 19.33 11.59 18.62 8.72 18.97 8.77 19.32 8.79 19.67 8.78 19.86 8.78 20.04 8.78 20.19 8.79 20.58 8.96 21.03 8.84 21.29 8.5 21.6 8.08 21.6 7.5 21.28 7.08 Z M 19 5.39 19.11 5.46 C 19.53 5.74 20.4 6.76 20.88 7.39 21.07 7.63 21.07 7.96 20.89 8.2 20.77 8.36 20.54 8.42 20.36 8.32 20.33 8.31 20.3 8.3 20.27 8.3 20.09 8.29 19.89 8.28 19.67 8.28 19.26 8.28 18.57 8.27 18.43 8.12 18.33 8.02 18.17 8.02 18.07 8.12 18.01 8.19 17.99 8.28 18.01 8.37 18.89 11.35 17.96 12.95 17.05 14.5 16.96 14.65 16.87 14.8 16.79 14.95 16.77 14.98 16.4 15.54 15.26 15.5 15.19 15.5 15.12 15.52 15.08 15.57 15.03 15.62 15 15.68 15 15.75 L 15 19.5 C 15 19.57 15.03 19.63 15.07 19.68 L 15.28 19.88 C 15.42 20.02 15.5 20.21 15.5 20.41 L 15.5 20.5 14.35 20.5 14 20.15 14 16 14 16 14 16 C 14 15.86 13.89 15.75 13.75 15.75 13.75 15.75 13.75 15.75 13.75 15.75 L 9.75 15.75 C 9.02 15.75 8.29 15.58 7.63 15.25 7.54 15.21 7.43 15.23 7.35 15.3 7.35 15.3 7.35 15.3 7.35 15.3 L 5.62 17.03 C 5.48 17.17 5.29 17.25 5.09 17.25 L 4.75 17.25 C 4.61 17.25 4.5 17.36 4.5 17.5 L 4.5 19.5 C 4.5 19.57 4.53 19.63 4.57 19.68 L 4.78 19.88 C 4.92 20.02 5 20.21 5 20.41 L 5 20.5 3.85 20.5 3.5 20.15 3.5 16.02 C 3.5 15.75 3.72 15.52 3.99 15.52 L 4.76 15.5 C 4.89 15.5 5 15.39 5 15.25 L 5 11.73 C 5 11.48 5.09 10.75 5.42 10.43 5.52 10.33 5.53 10.17 5.43 10.07 5.33 9.97 5.17 9.97 5.08 10.07 4.52 10.61 4.5 11.68 4.5 11.72 L 4.5 12.36 3.5 13.37 C 2.82 11.79 3.56 9.95 5.14 9.27 5.53 9.11 5.94 9.02 6.36 9.02 L 13.49 9.02 C 14.23 9.02 15.06 7.98 15.39 7.5 15.42 7.51 15.45 7.52 15.48 7.52 15.62 7.55 15.76 7.57 15.91 7.56 16.49 7.59 17.04 7.33 17.39 6.87 17.47 6.75 17.44 6.6 17.33 6.52 17.26 6.47 17.18 6.46 17.1 6.49 16.97 6.53 16.84 6.56 16.71 6.58 16.53 6.59 16.34 6.57 16.17 6.52 15.69 6.34 15.44 5.8 15.62 5.32 15.74 5.01 16 4.79 16.32 4.73 16.58 4.68 16.84 4.74 17.05 4.9 16.84 4.99 16.65 5.11 16.47 5.25 16.32 5.38 16.18 5.52 16.06 5.68 15.97 5.78 15.99 5.94 16.1 6.03 16.2 6.12 16.36 6.1 16.45 6 16.45 5.99 16.45 5.99 16.45 5.99 16.55 5.86 16.66 5.74 16.78 5.64 16.96 5.5 17.15 5.39 17.36 5.31 17.37 5.34 17.38 5.36 17.39 5.39 17.43 5.53 17.57 5.61 17.7 5.57 17.83 5.53 17.91 5.4 17.87 5.26 17.87 5.26 17.87 5.26 17.87 5.26 17.66 4.5 16.87 4.05 16.11 4.26 15.35 4.48 14.9 5.27 15.12 6.03 15.24 6.47 15.57 6.82 16 6.99 16.05 7.01 16.11 7.02 16.17 7.04 L 16.17 7.04 C 15.98 7.07 15.78 7.07 15.59 7.03 14.71 6.84 14.25 5.99 14.25 5.25 14.25 3.94 15.31 2.87 16.63 2.87 17.94 2.87 19 3.94 19 5.25 Z M 6.5 19.4 6.5 18 C 6.5 17.86 6.39 17.75 6.25 17.75 L 6.25 17.75 C 6.11 17.75 6 17.86 6 18 6 18 6 18 6 18 L 6 19.5 C 6 19.57 6.03 19.63 6.07 19.68 L 6.28 19.88 C 6.42 20.02 6.5 20.21 6.5 20.41 L 6.5 20.5 6 20.5 C 5.86 20.5 5.75 20.61 5.75 20.75 5.75 20.89 5.86 21 6 21 L 6.75 21 C 6.89 21 7 20.89 7 20.75 7 20.75 7 20.75 7 20.75 L 7 20.41 C 7 20.08 6.87 19.76 6.63 19.53 Z M 19.25 6.38 C 19.25 6.58 19.08 6.75 18.88 6.75 18.67 6.75 18.5 6.58 18.5 6.38 18.5 6.17 18.67 6 18.88 6 19.08 6 19.25 6.17 19.25 6.38 Z', false, 'solid'],
  ['regional', 'Regional', 'M12 2.8a3.7 3.7 0 0 0-3.7 3.7c0 2.7 3.7 6.6 3.7 6.6s3.7-3.9 3.7-6.6A3.7 3.7 0 0 0 12 2.8zM12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM7.6 10.6 3 12.4v8.4l5-1.8 8 1.8 5-1.8v-8.4l-4.6-1.8M8 19V13M16 20.8V14'],
  ['alerts', 'Alerts', 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0'],
  ['devices', 'Devices', 'M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8', true],
  ['data', 'Data', 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3'],
  ['providers', 'Providers', 'M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5'],
  ['settings', 'Settings', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z', true],
];
const PAGES = {
  home: { t: 'Home' },
  weather: { t: 'Weather', s: 'Current, forecast and past conditions for this farm', tabs: [['stations', 'Stations'], ['forecast', 'Forecast'], ['historical', 'Historical']] },
  season: { t: 'Season', s: 'Seasonal climate analysis and outlook', tabs: [['dashboard', 'Dashboard'], ['historical', 'Historical'], ['forecast', 'Forecast']] },
  soil: { t: 'Soil', s: 'Soil test results and probe readings for this farm', tabs: [['test', 'Summary'], ['probe', 'Probe']] },
  livestock: { t: 'Livestock', s: 'Stock welfare, pasture and performance', tabs: [['heat', 'Heat'], ['biomass', 'Biomass'], ['weight', 'Weight Data']] },
  alerts: { t: 'Alerts', s: 'Alerts are delivered by email, SMS and mobile notification', tabs: [['active', 'Active'], ['history', 'History']] },
  devices: { t: 'Devices', s: 'Manage devices on this farm.' },
  regional: { t: 'Regional', s: 'The Upper Murray as a network, using only data farms have chosen to share. Farm names are never shown.', tabs: [['map', 'Overall Map'], ['zones', 'Zones'], ['bench', 'Benchmarking']] },
  data: { t: 'Data', s: 'Manage and analyse your data sources' },
  providers: { t: 'Data Providers', s: 'Connect and manage the data sources behind this farm' },
  settings: { t: 'Settings', s: 'Manage your farm details, users and data sharing', tabs: [['farm', 'Farm details'], ['users', 'Users']] },
  support: { t: 'Support', s: 'Support tickets raised for this farm' },
  profile: { t: 'Profile', s: 'Keep your account details up to date', tabs: [['account', 'Account'], ['password', 'Password']] },
};
const I = {
  grid: 'M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z',
  thermo: 'M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z',
  drop: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z',
  wind: 'M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8',
  sun: 'M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  et: 'M12 21a7 7 0 0 1-7-7c0-5 7-11 7-11s7 6 7 11a7 7 0 0 1-7 7zM12 21v-6M12 15l-3-3',
  info: 'M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zM12 11v5M12 8h.01',
  cal: 'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM3 10h18M8 2v4M16 2v4M8 14h2M14 14h2M8 18h2',
  spray: 'M9 10h6v11H9zM10 10V6h4v4M14 7h3M19.5 4.5h.01M21 7h.01M19.5 9.5h.01',
  trend: 'M3 17l6-6 4 4 8-8M15 7h6v6',
  spark: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 16l.7 1.8 1.8.7-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7z',
  bars: 'M4 20V10M10 20V4M16 20v-7M21 20H3',
  flame: 'M12 22a7 7 0 0 0 7-7c0-4-3-6.5-4-9.5-1.2 2-2.3 3-4 3.2.2-2.2-.8-4.4-2-5.7C8 7 5 9.6 5 15a7 7 0 0 0 7 7z',
  sprout: 'M12 21v-9M12 12c0-3.3 2.2-5.5 6-5.5 0 3.3-2.2 5.5-6 5.5zM12 14.5c0-2.8-1.9-4.5-5-4.5 0 2.8 1.9 4.5 5 4.5zM7 21h10',
  scale: 'M12 3v18M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0zM8 21h8',
  flask: 'M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7 15h10',
  calc: 'M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01',
  bell: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0',
  history: 'M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l3 2',
  map: 'M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14',
  layers: 'M12 3 2 8l10 5 10-5zM2 13l10 5 10-5',
  upload: 'M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3',
  table: 'M3 5h18v14H3zM3 10h18M3 15h18M9 5v14',
  plus: 'M12 5v14M5 12h14',
  list: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0',
  lock: 'M6 11h12v10H6zM8 11V7a4 4 0 0 1 8 0v4',
};
const TAB_IC = { stations: 'M12 22V9M8 22h8M5 6h14M8 6V3M16 6V3M12 9l-3-3M12 9l3-3', forecast: I.spark, historical: I.trend, dashboard: I.grid, device: I.info, heat: I.flame, biomass: I.sprout, weight: I.scale, active: I.bell, history: I.history, weather: 'M8 18h9a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 11 3.5 3.5 0 0 0 8 18z', soil: I.drop, other: 'M4 19h16M6 19l2-8h8l2 8M12 11V6M9 6h6', map: I.map, zones: I.layers, bench: I.bars, upload: I.upload, table: I.table, create: I.plus, track: I.list, account: I.user, password: I.lock, farm: 'M12 18.5 9 17l-6 3V6l6-3 6 3 6-3v7M9 3v14M15 6v5M21 17.4c0 2.2-3 4.6-3 4.6s-3-2.4-3-4.6a3 3 0 0 1 6 0z', users: 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.2A6.5 6.5 0 0 1 21.5 20', sharing: 'M18 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM6 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM18 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4' };
const SEC_IC = { dashboard: I.grid, temprain: I.thermo, rainfall: I.drop, humidity: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11zM9.5 15.5l5-5M9.8 11h.01M14.2 15h.01', solarUv: I.sun, et: 'M2 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0M12 3v6M9.5 6.5 12 9l2.5-2.5', ai: 'M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5', alerts: I.bell, device: 'M12 22V9M8 22h8M5 6h14M8 6V3M16 6V3M12 9l-3-3M12 9l3-3', insights: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z', readings: I.grid, insights: 'M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5', dash: I.grid, thp: I.thermo, rain: I.drop, wind: I.wind, solar: I.sun, et: I.et, info: I.info, d10: I.cal, spray: I.spray, temp: I.thermo, gdd: I.sun, overview: I.bars, hist: I.trend, fc: I.spark, growth: 'M12 22V8M12 8V2.5M12 8l-3.5-3.5M12 8l3.5-3.5M12 13l-3.5-3.5M12 13l3.5-3.5M12 18l-3.5-3.5M12 18l3.5-3.5', nutrient: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10zM2 21c0-3 1.9-5.5 5.3-6.5C8 14.2 10 14 11 14', budget: 'M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM8 6h8v4H8zM8.5 14h.01M12 14h.01M15.5 14h.01M8.5 18h.01M12 18h.01M15.5 18h.01', soil: I.drop };
SEC_IC.weather = SEC_IC.weather || IC.weather; SEC_IC.soil = SEC_IC.soil || IC.soil; SEC_IC.forecast = SEC_IC.forecast || I.spark; SEC_IC.stations = IC.weather; SEC_IC.perf = I.bars; SEC_IC.bio = SEC_IC.bio || I.sprout; SEC_IC.growth = 'M12 22V8M12 8V2.5M12 8l-3.5-3.5M12 8l3.5-3.5M12 13l-3.5-3.5M12 13l3.5-3.5M12 18l-3.5-3.5M12 18l3.5-3.5'; SEC_IC.budget = 'M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM8 6h8v4H8zM8.5 14h.01M12 14h.01M15.5 14h.01M8.5 18h.01M12 18h.01M15.5 18h.01'; SEC_IC.nutrient = 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10zM2 21c0-3 1.9-5.5 5.3-6.5C8 14.2 10 14 11 14'; SEC_IC.bsoil = IC.soil; SEC_IC.season = I.drop;
SEC_IC.yield = 'M7 20h10M12 20v-8M12 12c0-3-2-5.5-6-5.5 0 3.5 2.5 5.5 6 5.5zM12 12c0-4 2.5-7 7-7 0 4-2.5 7-7 7z'; SEC_IC.ph = 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3M7.5 15h9'; SEC_IC.props = 'M12 3 2 8l10 5 10-5zM2 12.5l10 5 10-5M2 17l10 5 10-5';
const PILL = { green: ['#ECFEFF', '#043C2C'], red: ['#fee2e2', '#b91c1c'], amber: ['#fef3c7', '#b45309'], slate: ['#f1f5f9', '#475569'], blue: ['#dbeafe', '#1d4ed8'] };
const PMAP = { Fresh: 'green', Stale: 'amber', Online: 'green', Connected: 'green', Good: 'green', Resolved: 'green', Normal: 'green', Processed: 'green', Cleared: 'slate', Low: 'slate', Offline: 'red', High: 'red', Unsuitable: 'red', Error: 'red', Severe: 'red', Medium: 'amber', Marginal: 'amber', 'Credentials expired': 'amber', Moderate: 'amber', 'In progress': 'amber', Wetter: 'blue', Drier: 'amber', Warmer: 'amber', Cooler: 'blue', Average: 'slate', 'Awaiting reply': 'blue', Open: 'blue', Owner: 'green', Admin: 'blue', User: 'slate', Viewer: 'slate', Active: 'green', Invited: 'amber' };
const pill = s => PILL[PMAP[s] || 'slate'];
const cell = c => {
  if (c && c.pill) { const [bg, fg] = pill(c.pill); return { t: c.pill, bg, fg, pad: '3px 10px', fw: 600, fs: '12px' }; }
  if (c && c.b) return { t: c.b, bg: 'transparent', fg: '#0f172a', pad: '0', fw: 600, fs: '13.5px' };
  return { t: String(c), bg: 'transparent', fg: '#475569', pad: '0', fw: 400, fs: '13.5px' };
};
const Rc = React.createElement; let _bk = 0; const bk = () => 'k' + (_bk++);
const bt = (x, y, t, o) => { o = o || {}; return Rc('text', { key: bk(), x: x, y: y, fontSize: o.s || 9, fill: o.f || '#444', textAnchor: o.a || 'middle', fontWeight: o.w || 400, transform: o.r ? 'rotate(' + o.r + ' ' + x + ' ' + y + ')' : undefined }, t); };
const bln = (x1, y1, x2, y2, c, w, d) => Rc('line', { key: bk(), x1: x1, y1: y1, x2: x2, y2: y2, stroke: c, strokeWidth: w || 1, strokeDasharray: d, strokeLinecap: 'round' });
const bn = v => Math.abs(v) >= 100 ? String(Math.round(v)) : String(+v.toFixed(Math.abs(v) < 10 ? 1 : 0));
const BG = { W: 600, H: 240, l: 46, r: 46, t: 12, b: 34 };
const bsy = (v, lo, hi) => BG.H - BG.b - (BG.H - BG.b - BG.t) * (v - lo) / (hi - lo);
const bsx = (i, N) => BG.l + (BG.W - BG.l - BG.r) * (N < 2 ? .5 : i / (N - 1));
const bgrid = (rg, side, kids, yt) => { const lo = rg[0], hi = rg[1], n = rg[2] || 4; for (let i = 0; i <= n; i++) { const v = lo + (hi - lo) * i / n, y = bsy(v, lo, hi); if (side === 'l') { kids.push(bln(BG.l, y, BG.W - BG.r, y, '#c9ced6', 1, '1 3')); kids.push(bt(BG.l - 6, y + 3, bn(v), { a: 'end' })); } else kids.push(bt(BG.W - BG.r + 6, y + 3, bn(v), { a: 'start' })); } if (yt) kids.push(bt(side === 'l' ? 10 : BG.W - 8, (BG.H - BG.b + BG.t) / 2, yt, { r: -90, w: 600, s: 9.5 })); };
const bsvg = kids => Rc('svg', { viewBox: '0 0 600 240', preserveAspectRatio: 'xMidYMid meet', style: { width: '100%', height: '100%', display: 'block' } }, kids);
const bLine = sp => { const k = []; bgrid(sp.l, 'l', k, sp.yt); if (sp.r) bgrid(sp.r, 'r', k, sp.rt); const M = sp.xl.length; sp.xl.forEach((x, j) => k.push(bt(bsx(j, M), BG.H - BG.b + 14, x))); if (sp.xt) k.push(bt(300, BG.H - 3, sp.xt, { w: 600, s: 10 }));
  sp.ser.forEach(s => { const rg = s.ax === 'r' ? sp.r : sp.l, N = s.v.length, pts = s.v.map((v, i) => bsx(i, N).toFixed(1) + ',' + bsy(v, rg[0], rg[1]).toFixed(1)).join(' '); k.push(Rc('polyline', { key: bk(), points: pts, fill: 'none', stroke: s.c, strokeWidth: s.w || 2, strokeDasharray: s.dash, strokeLinejoin: 'round' })); (s.lab || []).forEach(i => k.push(bt(bsx(i, N), bsy(s.v[i], rg[0], rg[1]) - 5, bn(s.v[i]), { s: 8.5, f: '#111' }))); if (s.el) k.push(bt(BG.W - BG.r + 4, bsy(s.v[N - 1], rg[0], rg[1]) + 3, s.el, { a: 'start', s: 8.5 })); });
  return bsvg(k); };
const bBar = sp => { const k = []; bgrid(sp.yr, 'l', k, sp.yt); const N = sp.cats.length, slot = (BG.W - BG.l - BG.r) / N, bw = Math.min(90, slot * .6); sp.cats.forEach((c, i) => { const cx = BG.l + slot * (i + .5), y = bsy(sp.v[i], sp.yr[0], sp.yr[1]); k.push(Rc('rect', { key: bk(), x: cx - bw / 2, y: y, width: bw, height: bsy(sp.yr[0], sp.yr[0], sp.yr[1]) - y, fill: (sp.c && sp.c[i]) || '#118DFF' })); k.push(bt(cx, y - 4, bn(sp.v[i]), { s: 9, f: '#111' })); k.push(bt(cx, BG.H - BG.b + 14, c)); }); if (sp.bench != null) k.push(bln(BG.l, bsy(sp.bench, sp.yr[0], sp.yr[1]), BG.W - BG.r, bsy(sp.bench, sp.yr[0], sp.yr[1]), '#F07D3C', 2.5, '5 3')); if (sp.xt) k.push(bt(300, BG.H - 3, sp.xt, { w: 600, s: 10 })); return bsvg(k); };
const bGroup = sp => { const k = []; bgrid(sp.yr, 'l', k, sp.yt); const N = sp.cats.length, slot = (BG.W - BG.l - BG.r) / N, G = sp.grp.length, bw = Math.min(34, slot * .8 / G); sp.cats.forEach((c, i) => { const cx = BG.l + slot * (i + .5); sp.grp.forEach((g, j) => { const x = cx - bw * G / 2 + j * bw, y = bsy(g.v[i], sp.yr[0], sp.yr[1]); k.push(Rc('rect', { key: bk(), x: x, y: y, width: bw, height: bsy(sp.yr[0], sp.yr[0], sp.yr[1]) - y, fill: g.c })); k.push(bt(x + bw / 2, y - 4, bn(g.v[i]), { s: 8.5, f: '#111' })); }); k.push(bt(cx, BG.H - BG.b + 14, c)); }); if (sp.xt) k.push(bt(300, BG.H - 3, sp.xt, { w: 600, s: 10 })); return bsvg(k); };
const bScatter = sp => { const k = []; bgrid(sp.yr, 'l', k, sp.yt); const xr = sp.xr, nx = xr[2] || 4; for (let i = 0; i <= nx; i++) { const v = xr[0] + (xr[1] - xr[0]) * i / nx, x = BG.l + (BG.W - BG.l - BG.r) * i / nx; k.push(bt(x, BG.H - BG.b + 14, bn(v))); k.push(bln(x, BG.t, x, BG.H - BG.b, '#c9ced6', 1, '1 3')); }
  const X = v => BG.l + (BG.W - BG.l - BG.r) * (v - xr[0]) / (xr[1] - xr[0]), n = sp.pts.length, mx = sp.pts.reduce((s, p) => s + p.x, 0) / n, my = sp.pts.reduce((s, p) => s + p.y, 0) / n; let sxy = 0, sxx = 0; sp.pts.forEach(p => { sxy += (p.x - mx) * (p.y - my); sxx += (p.x - mx) * (p.x - mx); }); const sl = sxx ? sxy / sxx : 0, x1 = Math.min(...sp.pts.map(p => p.x)), x2 = Math.max(...sp.pts.map(p => p.x));
  k.push(bln(X(x1), bsy(my + sl * (x1 - mx), sp.yr[0], sp.yr[1]), X(x2), bsy(my + sl * (x2 - mx), sp.yr[0], sp.yr[1]), '#111', 2, '5 4')); sp.pts.forEach(p => k.push(Rc('circle', { key: bk(), cx: X(p.x), cy: bsy(p.y, sp.yr[0], sp.yr[1]), r: 5, fill: p.c })));
  k.push(bt(300, BG.H - 3, sp.xt, { w: 600, s: 10 })); return bsvg(k); };
const T = (title, cols, gc, rows, mw, empty) => ({ title, cols, gc, mw: mw || '760px', rows: rows.map(r => ({ cells: r.map(cell) })), empty: rows.length ? '' : (empty || 'Nothing to show') });
const M = (l, v, d, good) => { const mt = String(v).match(/^([\u2212+\-]?[\d.,]+)\s+((?:kg|t |MJ|days|of |head|L\b).*)$/); return { l, v: mt ? mt[1] : v, u: mt ? mt[2] : '', d: d || '\u00a0', dc: good == null ? '#64748b' : good ? '#15803d' : '#b91c1c', cbg: '#fff', cbd: '#E2E8F0', vfs: '22px', vc: '#0F172A' }; };
const rng = seed => { let x = (seed * 9301 + 49297) % 233280 || 7; return () => (x = (x * 16807) % 2147483647) / 2147483647; };
const wave = (n, mean, amp, peak, period, noise, seed) => { const r = rng(seed); return Array.from({ length: n }, (_, i) => +(mean + amp * Math.cos((i - peak) / period * 2 * Math.PI) + (r() - .5) * noise).toFixed(1)); };
const walk = (n, start, drift, noise, seed, lo = -1e9, hi = 1e9) => { const r = rng(seed); let v = start; return Array.from({ length: n }, () => { v = Math.min(hi, Math.max(lo, v + drift + (r() - .5) * noise)); return +v.toFixed(1); }); };
const rain = (n, p, mx, seed) => { const r = rng(seed); return Array.from({ length: n }, () => r() < p ? +(r() * mx).toFixed(1) : 0); };
const cum = a => { let t = 0; return a.map(v => +(t += v).toFixed(1)); };
const flat = (n, v) => Array(n).fill(v);
const BIOMASS = (() => {
  const dates = ['14 Jul 2026', '28 Jul 2026', '11 Aug 2026', '25 Aug 2026', '08 Sep 2026', '22 Sep 2026', '06 Oct 2026', '20 Oct 2026', '03 Nov 2026'];
  const r = rng(4242), nz = () => r() + r() + r() - 1.5;
  const pads = [['Creek Flat', 42, 1650, 38], ['Hill', 65, 1280, 24], ['River', 38, 1820, 46], ['Back', 55, 1400, 30], ['Home', 24, 1550, 41], ['Dam', 30, 1350, 33], ['Ridge', 48, 1150, 21], ['Lucerne', 20, 1300, 50]].map(([n, ha, b0, base]) => { const v = [b0]; for (let i = 1; i < dates.length; i++) v.push(Math.round(v[i - 1] + Math.max(2, base * (0.25 + 0.75 * i / 8) * 0.62 + nz() * 4) * 14)); return { n, ha, v }; });
  const samples = []; pads.forEach(q => { const L = q.v.length - 1, sm = Array.from({ length: 20 }, () => Math.round(Math.max(600, q.v[L] + nz() * 520))); q.v[L] = Math.round(sm.reduce((a, b) => a + b, 0) / 20); samples.push(...sm); });
  return { file: 'pasture_walk_nov.csv', up: '3 Nov 2026', dates, gap: dates.map((_, i) => i ? 14 : 0), pads, samples, rows: pads.length * dates.length * 20 };
})();
const LV_SRC = ['Gallagher (Weighing System)', 'Optiweigh'];
const LV_ROWS = [['2026-10-06','Mob 1',112,442],['2026-10-06','Mob 2',96,396],['2026-10-06','Mob 3',124,372],['2026-10-13','Mob 1',115,448],['2026-10-13','Mob 2',99,401],['2026-10-13','Mob 3',126,378],['2026-10-20','Mob 1',114,454],['2026-10-20','Mob 2',101,406],['2026-10-20','Mob 3',128,383],['2026-10-27','Mob 1',118,459],['2026-10-27','Mob 2',103,411],['2026-10-27','Mob 3',129,388],['2026-11-04','Mob 1',120,462],['2026-11-04','Mob 2',105,414],['2026-11-04','Mob 3',132,392]];
const PTYPE = { 'River Block': 'Perennial ryegrass', 'North Flat': 'Mixed pasture', 'Home Paddock': 'Clover mix', 'Creek Flat': 'Perennial ryegrass', 'Lucerne': 'Lucerne', 'East Ridge': 'Native pasture', 'Dam': 'Mixed pasture', 'Hill': 'Native pasture', 'Back': 'Phalaris', 'Laneway': 'Mixed pasture', 'Ridge': 'Native pasture', 'South Gully': 'Phalaris', 'Top Flat': 'Clover mix', 'Hay Shed': 'Native pasture' };
const SUM_PADS = [['North West', [[-.026, .016]]], ['North East', [[.012, .018]]], ['Main Shed', [[-.020, -.004]]], ['Crossroads', [[.016, -.002]]], ['South East', [[.004, -.020]]]];
const PCOL = { 'North East': '#2E8B57', 'North West': '#2563EB', 'Main Shed': '#7C3AED', 'South East': '#D97706', 'Crossroads': '#DB2777' };
const TIPS = {
  avgBio: { d: 'Average pasture dry matter available per hectare.', r: 'Commonly reported as kg DM/ha in Australian pasture and feed budgeting systems (MLA).', u: 'Average of the latest biomass reading from selected paddocks.' },
  tfa: { d: 'Estimated total pasture dry matter available for grazing.', r: 'Feed budgeting commonly combines biomass and paddock area to estimate feed supply (MLA).', u: 'Biomass \u00d7 Area, summed across selected paddocks.' },
  avgGr: { d: 'Rate of pasture biomass change over time.', r: 'Typically reported as kg DM/ha/day in pasture monitoring systems (MLA).', u: '(Current Biomass \u2212 Previous Biomass) \u00f7 Days Between Readings.' },
  grp: { d: 'Rate of pasture biomass change over time.', r: 'Typically reported as kg DM/ha/day in pasture monitoring systems (MLA).', u: '(Current Biomass \u2212 Previous Biomass) \u00f7 Days Between Readings.' },
  tfp: { d: 'Estimated total feed available within a paddock.', r: 'Biomass adjusted for paddock size to estimate feed supply.', u: 'Biomass \u00d7 Paddock Area.' },
  fbDays: { d: 'Estimated grazing duration before available feed reaches the residual target.', r: 'Based on standard feed budgeting concepts used in MLA planning tools.', u: 'Available Feed \u00f7 Daily Feed Demand.' },
  fbAvail: { d: 'Pasture dry matter available to graze, above the residual target.', r: 'Feed budgeting commonly combines biomass, area and utilisation (MLA).', u: '(Biomass \u2212 Residual) \u00d7 Area \u00d7 Utilisation.' },
  fbDem: { d: 'Feed the selected livestock need each day.', r: 'Head count \u00d7 daily intake is standard in MLA feed budgets.', u: 'Number of Animals \u00d7 Daily Intake.' },
  fbBal: { d: 'Feed left over (surplus) or short (deficit) at the end of the plan.', r: 'Standard supply-versus-demand feed budgeting (MLA).', u: 'Available Feed \u2212 Demand over Planning Period.' }
};
const ROLE_GUIDE = [['Owner', 'Full control of their farm, including users, devices, settings, and data sharing.', '#D97706', '#FFFBEB', 'M12 2.5 4 5.5v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10v-6zM8.5 9.5l1.8 1.6L12 8.5l1.7 2.6 1.8-1.6-.8 4.5H9.3z'], ['User', 'Can manage farm data, devices, alerts, and reports. Cannot manage users or ownership settings.', '#1E3A8A', '#EEF2FF', 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0'], ['Viewer', 'Can view farm data and reports but cannot make any changes.', '#15803D', '#ECFDF5', 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z']];
const roleGuide = cur => ROLE_GUIDE.map(([name, desc, fg, bg, d]) => ({ name, desc, fg, d, bd: name === cur ? fg : '#E2E8F0', bg: name === cur ? bg : '#fff' }));
const REF_LINK = t => { t = t || ''; if (/Making More From Sheep/i.test(t)) return { l: 'Making More From Sheep', href: 'https://www.makingmorefromsheep.com.au/' }; if (/More Beef from Pastures/i.test(t)) return { l: 'More Beef from Pastures (MLA)', href: 'https://mbfp.mla.com.au/' }; if (/MLA/.test(t)) return { l: 'Meat & Livestock Australia', href: 'https://www.mla.com.au/' }; if (/SILO/.test(t)) return { l: 'SILO · Queensland Government', href: 'https://www.longpaddock.qld.gov.au/silo/' }; if (/Bureau of Meteorology|\bBOM\b/.test(t)) return { l: 'Bureau of Meteorology', href: 'http://www.bom.gov.au/' }; return null; };
const REFS = {
  tfa: { t: 'Total Feed Available', def: 'Estimated total pasture dry matter across the selected paddocks.', calc: 'Biomass (kg DM/ha) \u00d7 Area (ha)\nfor each paddock, summed across\nselected paddocks \u00f7 1,000', unit: 't DM (tonnes of dry matter)', src: 'Producer-uploaded biomass records' },
  avgBio: { t: 'Average Biomass', def: 'Average of the latest biomass reading from each selected paddock. Biomass is the amount of pasture dry matter per hectare.', calc: 'Sum of latest biomass readings\n\u00f7 Number of paddocks', unit: 'kg DM/ha', src: 'Producer-uploaded biomass records', std: 'MLA eLearning \u2013 Forage supply and forage budgeting (average kg DM/ha across the grazing area)' },
  avgGr: { t: 'Average Growth Rate', def: 'Average daily change in biomass, from the latest two readings for each selected paddock.', calc: '(Current biomass \u2212 Previous biomass)\n\u00f7 Days between readings\naveraged across selected paddocks', unit: 'kg DM/ha/day', src: 'Producer-uploaded biomass records', std: 'MLA More Beef from Pastures, Tool 2.7 \u2013 Field based pasture measurements: growth rate = (B \u2212 A) \u00f7 days' },
  padRep: { t: 'Paddocks Reporting', def: 'Number of paddocks with valid biomass records included in this analysis.', src: 'Producer-uploaded biomass records' },
  lastRd: { t: 'Last Reading', def: 'Date of the most recent biomass upload used on this page.', src: 'Producer-uploaded biomass records' },
  density: { t: 'Feed Density', def: 'Biomass per hectare for each paddock. Higher values generally indicate more pasture available.', unit: 'kg DM/ha', src: 'Producer-uploaded biomass records' },
  tfp: { t: 'Total Feed by Paddock', def: 'Estimated dry matter in each paddock after accounting for paddock area. Tile size shows each paddock\u2019s share of the total.', calc: 'Biomass (kg DM/ha) \u00d7 Area (ha) \u00f7 1,000', unit: 't DM', src: 'Producer-uploaded biomass records', std: 'MLA eLearning \u2013 Completing a forage budget (kg DM/ha \u00d7 ha = total kg DM)' },
  grp: { t: 'Growth Rate by Paddock', def: 'Change in pasture biomass between the latest two readings. Positive values mean biomass is increasing; negative values mean it is declining.', calc: '(Current biomass \u2212 Previous biomass)\n\u00f7 Days between readings', unit: 'kg DM/ha/day', src: 'Producer-uploaded biomass records', std: 'MLA More Beef from Pastures, Tool 2.7 \u2013 Field based pasture measurements' },
  pcot: { t: 'Pasture Cover Over Time', def: 'How biomass levels have changed over time, from your uploaded pasture records.', unit: 'kg DM/ha', src: 'Producer-uploaded biomass records' },
  me: { t: 'Metabolisable Energy (ME)', def: 'Usable energy available to livestock from the feed after normal digestive losses. Higher ME generally means more energy for maintenance, growth or production.', unit: 'MJ/kg DM', src: 'Feed analysis laboratory results', ind: 'Commonly used in Australian livestock nutrition and feed testing programs.' },
  cp: { t: 'Crude Protein (CP)', def: 'Total protein content of the feed. A key part of livestock nutrition and pasture quality assessment.', unit: '%', src: 'Feed analysis laboratory results', ind: 'Standard feed quality metric used in livestock nutrition reporting.' },
  ndf: { t: 'Neutral Detergent Fibre (NDF)', def: 'Total fibre content of the feed. An indicator of potential intake: lower NDF generally allows greater voluntary intake.', unit: '%', src: 'Feed analysis laboratory results', ind: 'Standard feed quality metric used in pasture and fodder analysis.' },
  dmd: { t: 'Dry Matter Digestibility (DMD)', def: 'Proportion of the dry matter that livestock can digest. Higher digestibility generally indicates higher quality feed.', unit: '%', src: 'Feed analysis laboratory results', ind: 'Commonly used measure of pasture and fodder quality.' },
  fqp: { t: 'Feed Quality by Paddock', def: 'Compares uploaded feed quality results across paddocks for the selected metric: Energy (ME), Protein (CP), Fibre (NDF) or Digestibility (DMD).', calc: 'Average Metric Value = Sum of sample values\n\u00f7 Number of samples', src: 'Producer-uploaded feed analysis records' },
  fbDays: { t: 'Feed Expected To Last', def: 'Estimated number of days the available pasture can support the selected livestock before reaching the residual pasture level.', calc: 'Available feed\n\u00f7 (Daily feed demand \u2212 Daily pasture growth)', unit: 'days', src: 'Uploaded biomass records and your planning assumptions', std: 'Making More From Sheep, Tool 8.3 \u2013 Feed budgeting template ("How long will the paddock last")' },
  fbAvail: { t: 'Available Feed', def: 'Estimated pasture dry matter available for grazing, after leaving the residual and allowing for utilisation.', calc: '(Biomass \u2212 Residual) kg DM/ha\n\u00d7 Area (ha) \u00d7 Utilisation % \u00f7 1,000', unit: 't DM (tonnes of dry matter)', src: 'Uploaded biomass records or manual entry', std: 'MLA eLearning \u2013 Completing a forage budget (feed above residual \u00d7 area)' },
  fbDem: { t: 'Daily Feed Demand', def: 'Estimated feed required by the selected livestock each day.', calc: 'Number of animals\n\u00d7 Daily intake (kg DM/head/day) \u00f7 1,000', unit: 't DM/day', src: 'Livestock class defaults and your inputs', std: 'MLA eLearning \u2013 Completing a forage budget (head \u00d7 kg DM/day)' },
  fbBal: { t: 'Feed Balance', def: 'Available feed compared with expected demand over the planning period. Positive values are a surplus; negative values are a deficit.', calc: 'Available feed + Pasture growth\n\u2212 Pasture demand over the plan', unit: 't DM', src: 'Calculated from the values above', std: 'Making More From Sheep, Tool 8.3 \u2013 Feed budgeting template' },
  fbRes: { t: 'Residual Pasture', def: 'Pasture intentionally left behind after grazing, so feed availability is not overestimated. Default 1,500 kg DM/ha for cattle; can be adjusted.', unit: 'kg DM/ha', src: 'Planning assumption', std: 'Making More From Sheep, Tool 8.3 \u2013 required minimum pasture mass' },
  fbUtil: { t: 'Utilisation', def: 'Share of the available pasture expected to be eaten by livestock. Typical planning assumptions range from 50% to 70%, depending on grazing system and management.', unit: '%', src: 'Planning assumption', std: 'MLA More Beef from Pastures, Module 3 \u2013 Pasture utilisation' },
  fqt: { t: 'Feed Quality Trend', def: 'Feed quality results over time from your uploaded feed analysis records. Useful for following seasonal changes in feed quality.', src: 'Producer-uploaded feed analysis records' }
};
const BIO2 = {
  file: 'pasture_biomass.csv', up: '8 Nov 2026', ago: 3,
  pads: [['North East', 32, 3800, 18, 'M', 3], ['North West', 28, 3420, 14, 'M', 3], ['Main Shed', 18, 2980, 16, 'M', 3], ['South East', 42, 2520, 9, 'M', 3], ['Crossroads', 36, 1890, -6, 'M', 3]].map(([n, ha, c, d, src, ago]) => ({ n, ha, c, d, src, ago })),
  cur: [[13, 1480], [27, 1530], [41, 1610], [55, 1740], [69, 1900], [83, 2060], [97, 2210], [111, 2330], [130, 2390]],
  prev: [[14, 1420], [45, 1510], [75, 1780], [106, 2150], [136, 2380], [167, 2240], [198, 1820], [226, 1530], [257, 1440], [287, 1490], [318, 1460], [348, 1400]],
  qual: [['North East', 11.2, 21.4, 42, 71], ['North West', 11.0, 20.1, 43, 71], ['Main Shed', 10.8, 19.6, 45, 69], ['South East', 10.4, 17.6, 47, 68], ['Crossroads', 9.6, 14.8, 52, 65]].map(([n, me, cp, ndf, dm]) => ({ n, me, cp, ndf, dmd: dm })), qDate: '28 Oct 2026', qFile: 'feed_quality.csv'
};
const fmtT = (v, span) => (span < 8 ? (+v).toFixed(1) : Math.round(v).toLocaleString());
const ticks = (lo, hi, u) => [hi, lo + (hi - lo) * 2 / 3, lo + (hi - lo) / 3, lo].map(v => fmtT(v, hi - lo) + (u || ''));
const Lraw = (title, sub, xl, lines, o = {}) => Lc(title, sub, xl, lines, o);
const L = (title, sub, xl, lines, o = {}) => Lc(title, sub, xl, lines, o);
const Lc = (title, sub, xl, lines, o = {}) => {
  const all = lines.flatMap(l => l[2]); let lo = Math.min(...all), hi = Math.max(...all); const pd = (hi - lo) * .12 || 1;
  lo = o.min != null ? o.min : lo - pd; hi = hi + pd;
  const n = Math.max(...lines.map(l => ((l[3] && l[3].from) || 0) + l[2].length));
  const X = i => (i / (n - 1) * 600).toFixed(1), Y = v => (200 - (v - lo) / (hi - lo) * 200).toFixed(1);
  return {
    title, sub, isLine: true, isBars: false, xl, h: o.h || '230px', span: o.half ? 'span 1' : '1 / -1', ticks: ticks(lo, hi, o.u),
    lines: lines.map(([name, c, vals, x = {}]) => { const f = x.from || 0; const pts = vals.map((v, i) => X(i + f) + ',' + Y(v)); return { op: x.op != null ? x.op : 1, sw: x.sw || 2, c, p: pts.join(' '), dash: x.dash ? '5 4' : 'none', area: x.area ? 'M' + X(f) + ',200 L' + pts.join(' L') + ' L' + X(f + vals.length - 1) + ',200 Z' : '' }; }),
    legend: lines.length > 1 ? lines.map(([name, c, v, x = {}]) => ({ name, c, ls: x.dash ? 'dashed' : 'solid' })) : [], _raw: { xl, lines, o },
  };
};
const B = (title, sub, data, o = {}) => {
  const m = Math.max(...data.map(d => d[1])) * 1.1 || 1;
  return { title, sub, isLine: false, isBars: true, h: o.h || '230px', span: o.half ? 'span 1' : '1 / -1', ticks: ticks(0, m, o.u), xl: [], bl: data.map(d => d[0]), bars: data.map(([l, v, c]) => ({ h: (Math.max(0, v) / m * 100).toFixed(1) + '%', c: c || o.c || '#0EA5A4', tip: l + ': ' + v + (o.u || '') })), legend: o.legend || [] };
};
const HBar = (title, sub, data, o = {}) => { const m = Math.max(...data.map(d => d[1]), o.mark || 0) * 1.08 || 1, mk = o.mark != null ? (o.mark / m * 100).toFixed(1) + '%' : ''; return { title, sub, isHBars: true, axisOn: false, span: o.half ? 'span 1' : '1 / -1', legend: o.legend || [], ticks: [], rows: data.map(([l, v, c, t]) => ({ l, mk, w: (Math.max(0, v) / m * 100).toFixed(1) + '%', c: c || o.c || '#0EA5A4', t: t == null ? String(v) : t, tip: l + ': ' + (t == null ? v : t) })) }; };
const GB = (title, sub, data, ser, o = {}) => { const m = Math.max(...data.flatMap(d => d[1])) * 1.1 || 1; return { title, sub, isLine: false, isBars: false, isGBars: true, axisOn: true, h: o.h || '230px', span: o.half ? 'span 1' : '1 / -1', ticks: ticks(0, m, o.u), xl: [], bl: data.map(d => d[0]), groups: data.map(([l, vs]) => ({ bars: vs.map((v, i) => ({ h: (Math.max(0, v) / m * 100).toFixed(1) + '%', c: ser[i][1], tip: l + ' · ' + ser[i][0] + ': ' + Math.round(v).toLocaleString() + (o.u || '') })) })), legend: ser.map(([name, c]) => ({ name, c, ls: 'solid' })) }; };
const H24 = ['00:00', '06:00', '12:00', '18:00', 'Now'];
const D7 = ['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'];
const D14 = ['22 Oct', '', '', '', '', '', '28 Oct', '', '', '', '', '', '', '4 Nov'];
const D30 = ['6 Oct', '13 Oct', '20 Oct', '27 Oct', '4 Nov'];
const MON = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
const FC_DAYS = [['Wed', '4 Nov', 'Partly cloudy', 24, 9, 0, 10], ['Thu', '5 Nov', 'Sunny', 27, 11, 0, 5], ['Fri', '6 Nov', 'Sunny', 29, 13, 0, 5], ['Sat', '7 Nov', 'Hot, gusty', 32, 15, 0, 10], ['Sun', '8 Nov', 'Showers', 22, 12, 6, 70], ['Mon', '9 Nov', 'Rain', 18, 10, 14, 90], ['Tue', '10 Nov', 'Showers', 19, 8, 3, 60], ['Wed', '11 Nov', 'Partly cloudy', 21, 7, 0, 20], ['Thu', '12 Nov', 'Sunny', 24, 9, 0, 10], ['Fri', '13 Nov', 'Partly cloudy', 25, 11, 1, 30]];
const SEASONS = [['2025–26', '#0EA5A4'], ['2024–25', '#2563eb'], ['2023–24', '#9333ea'], ['2022–23', '#0891b2'], ['2021–22', '#db2777']];
const ESRI = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const ESRI_REF = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}';
const DEV_WX = '<svg width="20" height="20" viewBox="0 0 48 48" fill="none" stroke="#0f9488" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 40h20a7 7 0 0 0 .6-14A10 10 0 0 0 15.5 27 6.6 6.6 0 0 0 14 40z"></path><path d="M14.6 25.5a9.5 9.5 0 0 1 18.4-3.2"></path><path d="M24 4l2.5 4.5h-5z" fill="#0f9488" stroke-width="1.5"></path><path d="M9.5 10l4.6 2.4-3.2 3.2z" fill="#0f9488" stroke-width="1.5"></path><path d="M38.5 10l-2.4 4.6-3.2-3.2z" fill="#0f9488" stroke-width="1.5"></path><path d="M4 22l4.5-2.5v5z" fill="#0f9488" stroke-width="1.5"></path></svg>';
const DEV_SOIL = '<svg width="20" height="20" viewBox="0 0 48 48"><path d="M22 4h4v22l-2 5-2-5z" fill="#7a4a35"></path><path d="M22 10h3M22 14h3M22 18h3" stroke="#fff" stroke-width="1.4" stroke-linecap="round"></path><path d="M4 44c2-9 9-13 15-13 2 0 3 1 5 3 2-2 3-3 5-3 7 0 13 5 15 13z" fill="#7a4a35"></path><circle cx="14" cy="39" r="2" fill="none" stroke="#fff" stroke-width="1.3"></circle><circle cx="32" cy="38" r="2" fill="none" stroke="#fff" stroke-width="1.3"></circle><circle cx="23" cy="41" r="1.4" fill="#fff"></circle><circle cx="38" cy="42" r="1.1" fill="#fff"></circle></svg>';
const DEV_SCALE = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#043C2C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16M6 19l2-8h8l2 8M12 11V6M9 6h6"></path></svg>';
const CARTO = 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
const MAPBOX_TOKEN = 'pk.eyJ1Ijoic29mdHdhcmUtYXhpc3RlY2giLCJhIjoiY2tnZzk1bzZnMW5zZzJxcW9nZTg4cDZxaSJ9.rK4H82M_mSth54jOMVhGAA';
const ESRIP = p => 'https://server.arcgisonline.com/ArcGIS/rest/services/' + p + '/MapServer/tile/{z}/{y}/{x}';
const CARTOP = p => 'https://a.basemaps.cartocdn.com/' + p + '/{z}/{x}/{y}.png';
const HB = {
  satStreets: { label: 'Satellite Streets', sw: '#4b5d52', mb: 'satellite-streets-v12', t: [[ESRIP('World_Imagery')], [ESRIP('Reference/World_Transportation'), 0.4], [ESRIP('Reference/World_Boundaries_and_Places'), 0.5]], a: 'Imagery \u00a9 Esri' },
  satellite: { label: 'Satellite', sw: '#3b3f2e', mb: 'satellite-v9', t: [[ESRIP('World_Imagery')]], a: 'Imagery \u00a9 Esri' },
  streets: { label: 'Streets', sw: '#ede3cc', mb: 'streets-v12', t: [[ESRIP('World_Street_Map')]], a: '\u00a9 Esri' },
  outdoors: { label: 'Outdoors', sw: '#8c9a5b', mb: 'outdoors-v12', t: [[ESRIP('World_Topo_Map')]], a: '\u00a9 Esri' },
  light: { label: 'Light', sw: '#eeeeee', mb: 'light-v11', t: [[CARTOP('light_all')]], a: '\u00a9 CARTO \u00a9 OpenStreetMap' },
  dark: { label: 'Dark', sw: '#1e2430', mb: 'dark-v11', t: [[CARTOP('dark_all')]], a: '\u00a9 CARTO \u00a9 OpenStreetMap' },
  navDay: { label: 'Navigation Day', sw: '#c9ced6', mb: 'navigation-day-v1', t: [[CARTOP('rastertiles/voyager')]], a: '\u00a9 CARTO \u00a9 OpenStreetMap' },
  navNight: { label: 'Navigation Night', sw: '#161b26', mb: 'navigation-night-v1', t: [[ESRIP('Canvas/World_Dark_Gray_Base')], [ESRIP('Canvas/World_Dark_Gray_Reference'), 0.8]], a: '\u00a9 Esri' },
};
const rasterStyle = (url, a) => ({ version: 8, sources: { b: { type: 'raster', tiles: [url], tileSize: 256, attribution: a } }, layers: [{ id: 'b', type: 'raster', source: 'b' }] });
const boundary = f => { const { lng: x, lat: y } = f; return [[x - .011, y + .006], [x + .004, y + .0085], [x + .012, y + .002], [x + .009, y - .0075], [x - .006, y - .008], [x - .013, y - .002], [x - .011, y + .006]]; };
const ACTIVE = [
  ['Frost warning', 'Weather', 'WS-01 Greg Weather Station', 'Today 5:40 am', '0.8 °C', 'High', 'Email, SMS'],
  ['Heat load above 86', 'Heat load', 'Pen 1 · Feedlot A', 'Today 1:05 pm', 'HLI 88.2', 'High', 'SMS, Mobile'],
  ['Soil moisture below refill', 'Soil', 'SP-01 Greg Soil Probe', 'Yesterday 3:15 pm', '24%', 'Medium', 'Email'],
  ['Station offline', 'Device offline', 'WS-02 Greg Weather Station 2', 'Yesterday 4:10 pm', 'No data 18 h', 'Medium', 'Email'],
];
const RDL = { temp: ['Temperature', '\u00b0C'], hum: ['Humidity', '%'], rain: ['Rainfall', 'mm'], wind: ['Wind speed', 'km/h'], gust: ['Wind gust', 'km/h'], solar: ['Solar radiation', 'W/m\u00b2'], dt: ['Delta T', '\u00b0C'], dew: ['Dew point', '\u00b0C'], pres: ['Atmospheric pressure', 'hPa'], uv: ['UV index', ''], batt: ['Battery voltage', 'V'], m10: ['Moisture 10 cm', '%'], m30: ['Moisture 30 cm', '%'], m60: ['Moisture 60 cm', '%'], t10: ['Soil temperature 10 cm', '\u00b0C'], t30: ['Soil temperature 30 cm', '\u00b0C'], vic: ['VIC', ''], hli: ['Heat load index (HLI)', ''], ahlu: ['Accumulated heat load (AHLU)', ''] };
const HISTORY = [
  ['Frost warning', 'Weather', 'WS-01 Greg Weather Station', '28 Oct 5:10 am', '28 Oct 8:20 am', 'High'],
  ['Heavy rain', 'Weather', 'WS-01 Greg Weather Station', '21 Oct 2:00 pm', '22 Oct 6:00 am', 'Medium'],
  ['Heat load above 86', 'Heat load', 'Pen 1 · Feedlot A', '18 Oct 12:40 pm', '18 Oct 6:15 pm', 'High'],
  ['Soil moisture below refill', 'Soil', 'SP-02 Greg Soil Probe 2', '12 Oct 9:00 am', '15 Oct 7:30 am', 'Medium'],
  ['Station offline', 'Device offline', 'SP-01 Greg Soil Probe', '6 Oct 11:20 pm', '7 Oct 9:05 am', 'Low'],
];

const umLoc = f => (f.loc || '').split(',')[0];
const LG_KEY = 'ump_producer_session';
const lgRead = () => { try { return JSON.parse(localStorage.getItem(LG_KEY) || sessionStorage.getItem(LG_KEY) || 'null'); } catch (e) { return null; } };
const lgName = e => (e || '').split('@')[0].split(/[._-]+/).filter(Boolean).map(w => w[0].toUpperCase() + w.slice(1)).join(' ') || 'User';
const LG_GREENS = ['#1F6B4F', '#26785A', '#1A5E46', '#2E8763', '#21714F', '#185440'];
class Component extends React.Component {
  state = { authed: lgRead(), lgEmail: 'admin@ump.org.au', lgPw: 'UmpAdmin@2026', lgShow: true,
    collapsed: typeof window !== 'undefined' && window.innerWidth < 1024, page: 'home', showFc: true, sub: { season: 'dashboard' }, sec: {}, devQ: '', devCats: [], devProvs: [], devDD: null, devCatQ: '', devProvQ: '', devView: 'grid', devPage: 1, devNames: {}, devCatOv: {}, devEdit: null, hwType: 'weather', hwDev: 0, histR: '1W', histHov: null, sel: {}, period: {}, showFc: true, seasons: ['2025–26', '2024–25', '2022–23'], regType: 'weather', zoneFocus: null,
    night: (() => { try { return localStorage.getItem('ump_night') === '1'; } catch (e) { return false; } })(), farm: 0, devMenuId: null, locOpen: false, locView: false, locLL: null, locTitle: '', locAddr: '', devCoords: {}, hDevL: true, collapsed: false, menuOpen: false, modal: null, custOpen: false,
    wid: { forecast: true, devices: false, season: false, alerts: false },
    added: [], uploads: [['pasture_biomass.csv', 'Biomass', '10 rows', '8 Nov 2026', 'Processed'], ['feed_quality.csv', 'Feed quality', '15 rows', '28 Oct 2026', 'Processed'], ['livestock_weights.csv', 'Livestock', '214 rows', '2 Nov 2026', 'Processed'], ['milk_yield.csv', 'Milk yield', '31 rows', '1 Nov 2026', 'Processed'], ['crop_yield.csv', 'Crop yield', '12 rows', '18 Oct 2026', 'Processed']],
    share: [{ on: true, t: ['ws', 'sp'] }, { on: false, t: [] }, { on: true, t: ['ws'] }], shareSaved: false,
    wiz: { step: 1, prov: 'Helios', tested: false, freq: 'Hourly', key: '' }, provs: PROVS, confirm: null,
    nt: { subject: '', topic: '', files: [] },
    tickets: [
      { id: 'UMP-1042', title: 'SP-02 not reporting', topic: 'Devices', status: 'In progress', created: '31 Oct 2026', upd: '2 Nov 2026', by: 'Emma Barnes', farm: 'Greg Farm', desc: 'Soil Probe 2 has not sent readings since 31 Oct. The battery was replaced last month.' },
      { id: 'UMP-1037', title: 'Add weather station', topic: 'Devices', status: 'Awaiting reply', created: '27 Oct 2026', upd: '29 Oct 2026', by: 'Emma Barnes', farm: 'Greg Farm', desc: 'We would like a second weather station on the north paddocks. What are the next steps?' },
      { id: 'UMP-1021', title: 'Milk yield CSV template', topic: 'Data uploads', status: 'Resolved', created: '10 Oct 2026', upd: '14 Oct 2026', by: 'Tom Whitfield', farm: 'Greg Farm', desc: 'Where can I download the template for milk yield uploads?' },
      { id: 'UMP-1018', title: 'Pen 2 heat load alert not firing', topic: 'Alerts', status: 'Open', created: '12 Oct 2026', upd: '12 Oct 2026', by: 'Emma Barnes', farm: 'Ed Farm', desc: 'HLI went above 86 on Pen 2 but no SMS was received.' }],
    full: false, moreOpen: false, dataFilter: null, provFilter: null, farmEd: {}, farmSaved: false, invites: {}, inv: { name: '', email: '', role: 'User' }, na: null, pw: { cur: '', nw: '', cf: '', done: false }, pen: 0, pens: ['Pen 1 · Feedlot A', 'Pen 2 · Shade yard', 'Pen 3 · Weaners'],
  };
  homeRef = React.createRef();
  infoRef = React.createRef(); benchRef = React.createRef();
  regRef = React.createRef();
  componentDidMount() {
    this._wh = e => { const el = e.target && e.target.closest && e.target.closest('[data-zk]'); if (!el) return; e.preventDefault(); const r = el.getBoundingClientRect(); this.zoomStep(el.dataset.zk, +el.dataset.zn, e.deltaY < 0 ? .8 : 1.25, Math.max(0, Math.min(1, (e.clientX - r.left) / r.width))); };
    document.addEventListener('wheel', this._wh, { passive: false });
    const tip = document.createElement('div'); tip.style.cssText = 'position:fixed;z-index:9999;pointer-events:none;background:#1E293B;color:#F8FAFC;font:500 12px/1.35 Geist,system-ui,sans-serif;padding:6px 10px;border-radius:7px;box-shadow:0 8px 20px rgba(15,23,42,.25);white-space:nowrap;opacity:0;transition:opacity .12s;transform:translate(-50%,-100%)'; document.body.appendChild(tip); this._tipEl = tip;
    this._tov = e => { const el = e.target && e.target.closest && e.target.closest('[data-tip]'); if (!el || !el.dataset.tip) { tip.style.opacity = '0'; return; } const r = el.getBoundingClientRect(); tip.textContent = el.dataset.tip; const lg = el.dataset.tip.length > 60; tip.style.whiteSpace = lg ? 'normal' : 'nowrap'; tip.style.width = lg ? '300px' : 'auto'; tip.style.left = (r.left + r.width / 2) + 'px'; tip.style.top = (r.top - 8) + 'px'; tip.style.opacity = '1'; };
    document.addEventListener('mouseover', this._tov);
    const h = (location.hash || '').slice(1), p = this.props.startPage;
    if (_QF) { const qi = FARMS.findIndex(f => f.name === _QF); if (qi >= 0) this.setState({ farm: qi }); }
    if (h === 'addalert') { this.setState({ page: 'alerts', modal: 'alert', na: this.newAlert() }); }
    if (h === 'sharing') this.setState({ page: 'settings', sub: { settings: 'sharing' } });
    const pg = h === 'addalert' ? 'alerts' : PAGES[h] ? h : PAGES[p] ? p : 'home';
    if (pg !== 'home') this.setState({ page: pg });
    this._pv = { collapsed: this.state.collapsed, farm: this.state.farm, zoneFocus: this.state.zoneFocus };
    this.ensureMaps();
  }
  componentDidUpdate() {
    this.ensureMaps();
    const pv = this._pv || {}, s = this.state;
    if (pv.collapsed !== undefined && pv.collapsed !== s.collapsed) setTimeout(() => { this.hm && this.hm.resize(); this.rm && this.rm.resize(); }, 230);
    if (pv.farm !== undefined && pv.farm !== s.farm) { this.drawFarm(true); this.hZoneApply(true); }
    if (pv.zoneFocus !== s.zoneFocus) this.paintZones();
    this._pv = { collapsed: s.collapsed, farm: s.farm, zoneFocus: s.zoneFocus };
  }
  componentWillUnmount() { document.removeEventListener('wheel', this._wh); document.removeEventListener('mouseover', this._tov); this._tipEl && this._tipEl.remove(); clearTimeout(this._t); if (this._hro) this._hro.disconnect(); this.hm && this.hm.remove(); this.rm && this.rm.remove(); this.im && this.im.remove(); this.bm && this.bm.remove(); }
  locSearch = ev => { if (ev.key !== 'Enter') return; const q = ev.target.value; if (!q.trim()) return; const ll = this.state.locLL || [147.93, -36.27]; fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(q) + '.json?limit=1&country=au&proximity=' + ll[0] + ',' + ll[1] + '&access_token=' + 'pk.eyJ1Ijoic29mdHdhcmUtYXhpc3RlY2giLCJhIjoiY2tnZzk1bzZnMW5zZzJxcW9nZTg4cDZxaSJ9.rK4H82M_mSth54jOMVhGAA').then(r => r.json()).then(r => { const c = r && r.features && r.features[0]; if (c) { const p = c.center; this.setState({ locLL: p, locAddr: c.place_name }); if (this.lmap) this.lmap.flyTo({ center: p, zoom: 16 }); if (this._lpin) this._lpin.setLngLat(p); } }).catch(() => {}); };
  GL() { return window.mapboxgl || window.maplibregl; }
  mkMap(el, center, zoom) {
    if (window.mapboxgl) { mapboxgl.accessToken = 'pk.eyJ1Ijoic29mdHdhcmUtYXhpc3RlY2giLCJhIjoiY2tnZzk1bzZnMW5zZzJxcW9nZTg4cDZxaSJ9.rK4H82M_mSth54jOMVhGAA'; return new mapboxgl.Map({ container: el, style: 'mapbox://styles/mapbox/satellite-streets-v12', center, zoom, attributionControl: true }); }
    return new maplibregl.Map({ container: el, style: { version: 8, sources: { s: { type: 'raster', tiles: ['https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic29mdHdhcmUtYXhpc3RlY2giLCJhIjoiY2tnZzk1bzZnMW5zZzJxcW9nZTg4cDZxaSJ9.rK4H82M_mSth54jOMVhGAA'], tileSize: 512 } }, layers: [{ id: 's', type: 'raster', source: 's' }] }, center, zoom, attributionControl: { compact: true } });
  }
  locRev(ll) { fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/' + ll[0] + ',' + ll[1] + '.json?limit=1&access_token=pk.eyJ1Ijoic29mdHdhcmUtYXhpc3RlY2giLCJhIjoiY2tnZzk1bzZnMW5zZzJxcW9nZTg4cDZxaSJ9.rK4H82M_mSth54jOMVhGAA').then(r => r.json()).then(r => { const c = r && r.features && r.features[0]; this.setState({ locAddr: c ? c.place_name : '' }); }).catch(() => {}); }
  locInput = ev => { const q = ev.target.value; this.setState({ locQ: q }); clearTimeout(this._lsT); if (q.trim().length < 3) { this.setState({ locSugL: [] }); return; } this._lsT = setTimeout(() => { const ll = this.state.locLL || [147.93, -36.27]; fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(q) + '.json?autocomplete=true&limit=6&country=au&proximity=' + ll[0] + ',' + ll[1] + '&access_token=pk.eyJ1Ijoic29mdHdhcmUtYXhpc3RlY2giLCJhIjoiY2tnZzk1bzZnMW5zZzJxcW9nZTg4cDZxaSJ9.rK4H82M_mSth54jOMVhGAA').then(r => r.json()).then(r => this.setState({ locSugL: ((r && r.features) || []).map(c => ({ title: c.text || c.place_name, name: c.place_name, ll: c.center })) })).catch(() => {}); }, 250); };
  locSearch = ev => { if (ev.key === 'Enter' && (this.state.locSugL || [])[0]) this.locPick(this.state.locSugL[0]); };
  locPick(c) { this.setState({ locLL: c.ll, locSugL: [], locQ: c.name, locAddr: c.name }); if (this.lmap) this.lmap.flyTo({ center: c.ll, zoom: 17 }); if (this._lpin) this._lpin.setLngLat(c.ll); }
  locSugVals(s) { return (s.locSugL || []).map(c => ({ title: c.title, name: c.name, pick: () => this.locPick(c) })); }
  locClear = () => this.setState({ locQ: '', locSugL: [] });
  dmapRef = el => {
    if (el && el !== this._dEl) {
      this._dEl = el;
      const go = () => {
        if (!this.GL()) return setTimeout(go, 120);
        const m = this.mkMap(el, [147.93, -36.27], 12);
        m.addControl(new (this.GL()).NavigationControl({ showCompass: false }), 'bottom-right');
        this.dm = m; this.dmMk = [];
        m.on('load', () => this.syncDm(true)); setTimeout(() => this.syncDm(true), 400);
      };
      go();
    } else if (!el && this.dm) { this.dm.remove(); this.dm = null; this._dEl = null; this.dmMk = []; }
  };
  syncDm(fit) {
    const m = this.dm; if (!m || !this.GL()) return;
    (this.dmMk || []).forEach(k => k.remove()); this.dmMk = [];
    const sel = (this.state.dmap || {}).sel || [], b = new (this.GL()).LngLatBounds();
    (this._dmItems || []).filter(i => sel.includes(i.id)).forEach(i => {
      const w = document.createElement('div'); w.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer';
      w.innerHTML = '<span style="width:36px;height:36px;border-radius:50%;background:#fff url(' + i.icon + ') center/cover no-repeat;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.5)"></span><span style="background:#fff;color:#0f172a;font:600 10.5px Geist,sans-serif;padding:2px 8px;border-radius:999px;white-space:nowrap;box-shadow:0 1px 4px rgba(0,0,0,.3)">' + i.name + '</span>';
      this.dmMk.push(new (this.GL()).Marker({ element: w, anchor: 'top', offset: [0, -18] }).setLngLat(i.ll).addTo(m)); b.extend(i.ll);
    });
    if (fit && !b.isEmpty()) m.fitBounds(b, { padding: 140, maxZoom: 16, duration: 0 });
  }
  dmShape(s, items) {
    const sel = s.dmap.sel, setSel = f => this.setState(st => ({ dmap: { ...st.dmap, sel: f(st.dmap.sel) } }), () => this.syncDm(true));
    return { show: true, ref: this.dmapRef, count: items.filter(i => sel.includes(i.id)).length + '/' + items.length + ' on map', allLabel: sel.length ? 'Hide All' : 'Show All', toggleAll: () => setSel(c => c.length ? [] : items.map(i => i.id)), close: () => this.setState({ dmap: null }), stop: e => e.stopPropagation(),
      items: items.map(i => { const on = sel.includes(i.id); return { name: i.name, serial: i.serial, type: i.type, icon: i.icon, op: on ? 1 : .55, cbg: on ? '#0B7F7E' : '#fff', cbd: on ? '#0B7F7E' : '#CBD5E1', tick: on ? '✓' : '', toggle: () => setSel(c => on ? c.filter(x => x !== i.id) : c.concat(i.id)) }; }) };
  }
  locMapRef = el => {
    if (el && el !== this._lEl) {
      this._lEl = el;
      const go = () => {
        if (!this.GL()) return setTimeout(go, 120);
        const ll = this.state.locLL || [147.93, -36.27];
        const m = this.mkMap(el, ll, 14);
        m.addControl(new (this.GL()).NavigationControl({ showCompass: false }), 'bottom-right');
        const d = document.createElement('div'); d.style.cssText = 'cursor:grab'; d.innerHTML = '<svg width="30" height="40" viewBox="0 0 30 40" style="display:block;filter:drop-shadow(0 3px 4px rgba(0,0,0,.45))"><path d="M15 1C7.3 1 1 7.2 1 14.8 1 25 15 39 15 39s14-14 14-24.2C29 7.2 22.7 1 15 1z" fill="#E53935" stroke="#fff" stroke-width="2"/><circle cx="15" cy="14.5" r="5" fill="#fff"/></svg>';
        const pin = new (this.GL()).Marker({ element: d, anchor: 'bottom', draggable: !this.state.locView }).setLngLat(ll).addTo(m);
        this._lpin = pin;
        pin.on('dragend', () => { const p = pin.getLngLat(); this.setState({ locLL: [p.lng, p.lat] }); this.locRev([p.lng, p.lat]); });
        m.on('click', e => { if (this.state.locView) return; pin.setLngLat(e.lngLat); this.setState({ locLL: [e.lngLat.lng, e.lngLat.lat] }); this.locRev([e.lngLat.lng, e.lngLat.lat]); });
        this.lmap = m;
      };
      go();
    } else if (!el && this.lmap) { this.lmap.remove(); this.lmap = null; this._lEl = null; }
  };
  ensureMaps() {
    const gl = window.maplibregl;
    if (!gl) { clearTimeout(this._t); this._t = setTimeout(() => this.ensureMaps(), 250); return; }
    const he = this.homeRef.current;
    if (this.hm && this.hm.getContainer() !== he) { if (this._hro) this._hro.disconnect(); this.hm.remove(); this.hm = null; this.hMk = {}; this.hDev = null; }
    if (he && !this.hm) {
      const sources = {}, layers = [], bk = this.state.hBase || 'satStreets';
      Object.entries(HB).forEach(([k, bm]) => {
        const tiles = MAPBOX_TOKEN && bm.mb ? [['https://api.mapbox.com/styles/v1/mapbox/' + bm.mb + '/tiles/512/{z}/{x}/{y}@2x?access_token=' + MAPBOX_TOKEN]] : bm.t;
        tiles.forEach((t, i) => { const id = 'bm-' + k + '-' + i; sources[id] = { type: 'raster', tiles: [t[0]], tileSize: MAPBOX_TOKEN && bm.mb ? 512 : 256, attribution: MAPBOX_TOKEN && bm.mb ? '\u00a9 Mapbox \u00a9 OpenStreetMap' : bm.a }; layers.push({ id, type: 'raster', source: id, layout: { visibility: k === bk ? 'visible' : 'none' }, paint: { 'raster-opacity': t[1] == null ? 1 : t[1] } }); });
      });
      const m = this.hm = new gl.Map({ container: he, style: { version: 8, sources, layers }, center: [147.68, -36.18], zoom: 8.4, attributionControl: { compact: true } });
      m.addControl(new gl.NavigationControl({ showCompass: true }), 'bottom-right');
      m.on('error', () => {});
      this.hMk = {}; this.hDev = null;
      if (this._hro) this._hro.disconnect(); this._hro = new ResizeObserver(() => m.resize()); this._hro.observe(he);
      FARMS.forEach((f, fi) => {
        const wrap = document.createElement('div');
        wrap.style.cssText = 'width:26px;height:32px;display:flex;align-items:flex-start;justify-content:center;cursor:pointer';
        const inner = document.createElement('div');
        inner.style.cssText = 'width:26px;height:32px;display:flex;align-items:flex-start;justify-content:center;transform-origin:50% 100%;transition:transform .12s';
        inner.dataset.pin = '1';
        const dot = document.createElement('div');
        dot.style.cssText = 'width:26px;height:26px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);transform-origin:50% 50%;background:linear-gradient(135deg,#f87171,#dc2626);border:1.5px solid rgba(255,255,255,.9);box-shadow:-2px 3px 8px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;transition:transform .15s';
        dot.innerHTML = '<div style="transform:rotate(45deg);width:17px;height:17px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;line-height:0;box-shadow:inset 0 0 0 1px rgba(220,38,38,.15)"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 18.5 9 17l-6 3V6l6-3 6 3 6-3v7"></path><path d="M9 3v14"></path><path d="M15 6v5"></path><path d="M21 17.4c0 2.2-3 4.6-3 4.6s-3-2.4-3-4.6a3 3 0 0 1 6 0z"></path></svg></div>';
        inner.appendChild(dot); wrap.appendChild(inner);
        if (fi !== this.state.farm) wrap.style.display = 'none';
        const mk = new gl.Marker({ element: wrap, anchor: 'bottom' }).setLngLat([f.lng, f.lat]).addTo(m);
        mk._dot = dot; this.hMk[fi] = mk;
        const open = () => { clearTimeout(this._popT); this.showPop(fi); };
        wrap.addEventListener('mouseenter', open); wrap.addEventListener('click', ev => { ev.stopPropagation(); open(); });
        wrap.addEventListener('mouseleave', () => this.hidePopSoon());
      });
      const pinScale = () => { const z = m.getZoom(); const sc = 1.2 * Math.max(0.45, Math.min(1.1, 0.55 + (z - 7.5) * 0.18)); he.querySelectorAll('[data-pin]').forEach(p => { p.style.transform = 'scale(' + sc.toFixed(3) + ')'; }); he.querySelectorAll('[data-dpin]').forEach(p => { p.style.transform = 'scale(' + (sc * 0.9).toFixed(3) + ')'; }); };
      m.on('zoom', pinScale);
      m.on('move', () => { const p = this.state.hPop; if (p) this.showPop(p.fi); });
      m.on('click', () => this.setState({ hPop: null }));
      m.on('load', () => {
        m.resize(); pinScale();
        { let dk = null; try { dk = localStorage.getItem('ump-producer-bm-default'); } catch (x) {} if (dk && HB[dk]) { this.setState({ hBmDef: dk }); if (dk !== 'satStreets' && !this.state.hBase) setTimeout(() => this.setBasemap(dk), 0); } }
        fetch('assets/upper-murray-map.json').then(r => r.json()).then(fc => {
          if (this.hm !== m) return;
          m.addSource('um', { type: 'geojson', data: fc });
          m.addLayer({ id: 'sub-fill', type: 'fill', source: 'um', filter: ['==', ['get', 'k'], 'sub'], paint: { 'fill-color': ["get", "COLOR"], 'fill-opacity': 0.22 } });
          m.addLayer({ id: 'loc-line', type: 'line', source: 'um', filter: ['==', ['get', 'k'], 'sub'], paint: { "line-color": ["get", "BORDER_COLOR"], "line-width": 2 } });
          m.addLayer({ id: 'sub-line', type: 'line', source: 'um', filter: ['==', ['get', 'k'], 'bnd'], paint: { 'line-color': '#fcd27a', 'line-width': 0, 'line-opacity': 0.95 }, layout: { 'line-join': 'round' } });
          if (this.state.hBnd === false) this.setBnd(false);
          this.hTone(this.state.hBase || 'satStreets');
          const labels = []; this._umFc = fc; this._hLabels = [];
          fc.features.filter(x => x.properties.k === 'loc').forEach(x => {
            const el = document.createElement('div');
            el.textContent = 'Zone ' + x.properties.n + (x.properties.nm ? ' \u00b7 ' + x.properties.nm : '');
            el.style.cssText = 'pointer-events:none;font-family:Geist,sans-serif;font-size:12px;font-weight:700;color:#fff;white-space:nowrap;paint-order:stroke fill;-webkit-text-stroke:3px ' + (x.properties.bc || '#000');
            new gl.Marker({ element: el, anchor: x.properties.f ? 'top' : 'center', offset: x.properties.f ? [0, 6] : [0, 0] }).setLngLat([x.properties.lx, x.properties.ly]).addTo(m);
            labels.push(el); this._hLabels.push({ el, z: 'Zone ' + x.properties.n });
          });
          const showLabels = () => { const zz = FARMS[this.state.farm].zone; (this._hLabels || []).forEach(o => { o.el.style.display = o.z === zz ? '' : 'none'; }); };
          m.on('zoom', showLabels); m.once('idle', showLabels); showLabels();
          Object.values(this.hMk).forEach(mk => { const el = mk.getElement(); el.style.zIndex = '2'; el.parentNode.appendChild(el); });
          this.hZoneApply(true);
          if (this.state.hDevL) this.setDevL(true);
          if (this.state.hFarmL === false) this.setFarmL(false);
        }).catch(() => {});
      });
    }
    const ie = this.infoRef.current, base = 'sat';
    if (this.im && (this.im.getContainer() !== ie || this._imBase !== base)) { this.im.remove(); this.im = null; this._imMk = []; }
    if (ie && !this.im && this._infoLL) {
      const BU = { sat: [ESRI, 'Imagery © Esri'], streets: [CARTO, '© CARTO © OpenStreetMap'], topo: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', 'Topo © Esri'] }[base];
      const st = { version: 8, sources: { b: { type: 'raster', tiles: [BU[0]], tileSize: 256, attribution: BU[1] } }, layers: [{ id: 'b', type: 'raster', source: 'b' }] };
      if (base === 'sat') { st.sources.r = { type: 'raster', tiles: [ESRI_REF], tileSize: 256 }; st.layers.push({ id: 'r', type: 'raster', source: 'r', paint: { 'raster-opacity': 0.4 } }); }
      const im = this.im = new gl.Map({ container: ie, center: this._infoLL, zoom: 14.6, attributionControl: { compact: true }, style: st });
      this._imBase = base; this._imKey = null; this._imMk = [];
      im.addControl(new gl.NavigationControl({ showCompass: false }), 'bottom-right'); im.on('error', () => {});
    }
    if (this.im && this._infoLL) {
      const k = this._infoLL.join(',') + this._infoType + base;
      if (this._imKey !== k) {
        this._imKey = k; (this._imMk || []).forEach(m => m.remove()); this._imMk = [];
        const F = this._infoFarm;
        (this._infoDevs || []).forEach(dv => { const ll = [+(F.lng + dv.dx).toFixed(5), +(F.lat + dv.dy).toFixed(5)], me = ll[0] === this._infoLL[0] && ll[1] === this._infoLL[1]; if (!me) return; const el = document.createElement('div'); el.title = (CTRL[dv.id] || dv.id) + ' · ' + dv.name; el.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer'; el.innerHTML = '<span style="position:relative;width:' + (me ? 40 : 30) + 'px;height:' + (me ? 40 : 30) + 'px;border-radius:50%;background:#fff;border:' + (me ? '3px solid #0EA5A4' : '2px solid #fff') + ';box-shadow:0 0 0 ' + (me ? '6px rgba(14,165,164,.3)' : '1px rgba(15,23,42,.1)') + ',0 4px 12px rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center">' + ({ weather: DEV_WX, soil: DEV_SOIL }[dv.type] || DEV_WX) + '</span><span style="font:600 10.5px system-ui;color:#0F172A;background:#fff;padding:1px 6px;border-radius:5px;white-space:nowrap;box-shadow:0 1px 3px rgba(0,0,0,.25)">' + (CTRL[dv.id] || dv.id) + '</span>'; el.addEventListener('click', e => { e.stopPropagation(); this.devCard(this.im, ll, dv, this.state.farm * 7 + devsOf(this.state.farm).findIndex(x => x.id === dv.id) + 1); }); this._imMk.push(new gl.Marker({ element: el, anchor: 'top' }).setLngLat(ll).addTo(this.im)); });
        this.im.jumpTo({ center: this._infoLL, zoom: 14.6 });
      }
    }
    const be = this.benchRef.current;
    if (this.bm && this.bm.getContainer() !== be) { this.bm.remove(); this.bm = null; this._bmMk = []; this._bmKey = null; }
    if (be && !this.bm && this._benchPts) {
      const bst = { version: 8, sources: {}, layers: [] }; (MAPBOX_TOKEN && HB.satStreets.mb ? [['https://api.mapbox.com/styles/v1/mapbox/' + HB.satStreets.mb + '/tiles/512/{z}/{x}/{y}@2x?access_token=' + MAPBOX_TOKEN]] : HB.satStreets.t).forEach((t, i) => { bst.sources['b' + i] = { type: 'raster', tiles: [t[0]], tileSize: MAPBOX_TOKEN && HB.satStreets.mb ? 512 : 256, attribution: HB.satStreets.a }; bst.layers.push({ id: 'b' + i, type: 'raster', source: 'b' + i, paint: { 'raster-opacity': t[1] == null ? 1 : t[1] } }); });
      this.bm = new gl.Map({ container: be, center: this._benchPts.c, zoom: 11.2, attributionControl: { compact: true }, style: bst }); this._bmMk = []; this.bm.addControl(new gl.NavigationControl({ showCompass: true }), 'bottom-right'); this.bm.on('error', () => {}); { const bmm = this.bm; bmm.on('load', () => fetch('assets/upper-murray-map.json').then(r => r.json()).then(fc => { if (this.bm !== bmm) return; bmm.addSource('um', { type: 'geojson', data: fc }); bmm.addLayer({ id: 'sub-fill', type: 'fill', source: 'um', filter: ['==', ['get', 'k'], 'sub'], paint: { 'fill-color': ['get', 'COLOR'], 'fill-opacity': 0.2 } }); bmm.addLayer({ id: 'loc-line', type: 'line', source: 'um', filter: ['==', ['get', 'k'], 'sub'], paint: { 'line-color': ['get', 'BORDER_COLOR'], 'line-width': 2.5 } }); }).catch(() => {})); }
    }
    if (this.bm && this._benchPts) { const bkey = JSON.stringify(this._benchPts); if (this._bmKey !== bkey) { this._bmKey = bkey; (this._bmMk || []).forEach(m => m.remove()); this._bmMk = this._benchPts.pts.map(p => { const el = document.createElement('div'); el.style.cssText = 'width:16px;height:16px;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.5);background:' + p.c; return new gl.Marker({ element: el }).setLngLat(p.ll).addTo(this.bm); }); this.bm.jumpTo({ center: this._benchPts.c, zoom: 11.2 }); } }
    const re = this.regRef.current;
    if (this.rm && this.rm.getContainer() !== re) { if (this._rro) this._rro.disconnect(); this.rm.remove(); this.rm = null; }
    if (re && !this.rm) {
      const rs = { version: 8, sources: {}, layers: [] }, bk = this.state.rBase || 'satStreets';
      Object.entries(HB).forEach(([k, bm]) => { const tiles = MAPBOX_TOKEN && bm.mb ? [['https://api.mapbox.com/styles/v1/mapbox/' + bm.mb + '/tiles/512/{z}/{x}/{y}@2x?access_token=' + MAPBOX_TOKEN]] : bm.t;
        tiles.forEach((t, i) => { const id = 'bm-' + k + '-' + i; rs.sources[id] = { type: 'raster', tiles: [t[0]], tileSize: MAPBOX_TOKEN && bm.mb ? 512 : 256, attribution: MAPBOX_TOKEN && bm.mb ? '\u00a9 Mapbox \u00a9 OpenStreetMap' : bm.a }; rs.layers.push({ id, type: 'raster', source: id, layout: { visibility: k === bk ? 'visible' : 'none' }, paint: { 'raster-opacity': t[1] == null ? 1 : t[1] } }); }); });
      const m = this.rm = new gl.Map({ container: re, style: rs, center: [147.7, -36.25], zoom: 8.6, attributionControl: { compact: true } });
      if (this._rro) this._rro.disconnect(); this._rro = new ResizeObserver(() => m.resize()); this._rro.observe(re);
      this.rgMk = []; this.rgLL = []; const RC = ['#F97316', '#2563EB', '#14B8A6', '#DB2777', '#9333EA'];
      const mkR = (ll, type, seed, off, st, dev) => { const el = document.createElement('div'); el.style.cssText = 'cursor:pointer;z-index:3'; this.rgLL.push(ll); new gl.Marker({ element: el, anchor: 'center' }).setLngLat(ll).addTo(m); const rec = { el, type, seed, off, st, dev, ll }; el.addEventListener('click', e => { e.stopPropagation(); this.rgPop(rec); }); this.rgMk.push(rec); };
      FARMS.slice(-10).forEach((f, fi) => { const st = REG[fi]; mkR([f.lng, f.lat], 'fc', 500 + fi, false, st, null); st.devs.forEach(d => mkR([d.lng, d.lat], d.type, d.seed, false, st, d)); });
      this.paintReg();
      m.addControl(new gl.NavigationControl({ showCompass: true }), 'bottom-right');
      m.on('error', () => {}); m.on('moveend', () => this.declutter()); m.on('zoom', () => { cancelAnimationFrame(this._dcl); this._dcl = requestAnimationFrame(() => this.declutter()); });
      m.on('load', () => fetch('assets/upper-murray-map.json').then(r => r.json()).then(fc => {
        if (this.rm !== m) return;
        m.addSource('um', { type: 'geojson', data: fc });
        m.addLayer({ id: 'sub-fill', type: 'fill', source: 'um', filter: ['==', ['get', 'k'], 'sub'], paint: { 'fill-color': ['get', 'COLOR'], 'fill-opacity': 0.2 } });
        m.addLayer({ id: 'loc-line', type: 'line', source: 'um', filter: ['==', ['get', 'k'], 'sub'], paint: { 'line-color': ['get', 'BORDER_COLOR'], 'line-width': 1.4, 'line-opacity': 0.9 } });
        m.addLayer({ id: 'sub-line', type: 'line', source: 'um', filter: ['==', ['get', 'k'], 'bnd'], paint: { 'line-color': '#fcd27a', 'line-width': 0, 'line-opacity': 0.95 }, layout: { 'line-join': 'round' } });
        this._rLabels = [];
        fc.features.filter(x => x.properties.k === 'loc').forEach(x => { const el = document.createElement('div'); el.textContent = x.properties.n; el.style.cssText = 'pointer-events:none;font-family:Geist,sans-serif;font-size:11px;font-weight:700;color:#fff;white-space:nowrap;paint-order:stroke fill;-webkit-text-stroke:2.4px ' + (x.properties.bc || '#000'); const mk = new gl.Marker({ element: el, anchor: x.properties.f ? 'bottom' : 'center', offset: x.properties.f ? [0, -18] : [0, 0] }).setLngLat([x.properties.lx, x.properties.ly]).addTo(m); mk.getElement().style.zIndex = '5'; mk.getElement().style.pointerEvents = 'none'; this._rLabels.push(el); });
        this.rTone(this.state.rBase || 'satStreets'); if (this.state.rBnd === false) this.setRBnd(false);
        const W = re.clientWidth || 800, bb = [Math.min(...this.rgLL.map(p => p[0])), Math.min(...this.rgLL.map(p => p[1])), Math.max(...this.rgLL.map(p => p[0])), Math.max(...this.rgLL.map(p => p[1]))];
        if (fc.bbox) m.fitBounds([[fc.bbox[0], fc.bbox[1]], [fc.bbox[2], fc.bbox[3]]], { padding: 36, duration: 0 }); else m.fitBounds([[bb[0], bb[1]], [bb[2], bb[3]]], { padding: 36, duration: 0, maxZoom: 11 }); this.declutter();
      }).catch(() => {}));
    }
  }
  setRBase(k) { this.setState({ rBase: k }); const m = this.rm; if (!m) return; m.getStyle().layers.forEach(l => { if (l.id.startsWith('bm-')) m.setLayoutProperty(l.id, 'visibility', l.id.startsWith('bm-' + k + '-') ? 'visible' : 'none'); }); this.rTone(k); }
  rTone(k) { const m = this.rm; if (!m || !m.getLayer('sub-fill')) return; const light = ['light', 'streets', 'navDay', 'outdoors'].includes(k); m.setPaintProperty('sub-fill', 'fill-opacity', light ? 0.3 : 0.2); m.setPaintProperty('sub-line', 'line-color', light ? '#b7791f' : '#fcd27a'); }
  setRBnd(on) { this.setState({ rBnd: on }); const m = this.rm; if (!m) return; ['sub-fill', 'loc-line', 'sub-line'].forEach(id => m.getLayer(id) && m.setLayoutProperty(id, 'visibility', on ? 'visible' : 'none')); (this._rLabels || []).forEach(el => { el.style.display = on ? '' : 'none'; }); }
  rgVals(s) {
    const mode = s.rgMode || 'weather', sel = s.rgSel || ['temp'], day = s.rgDay || 1, open = s.rgOpen === true;
    const set = o => this.setState(o, () => this.paintReg());
    const opt = ([k, l, u, d, ic]) => { const on = sel.includes(k); return { l, u, d, ic, bg: on ? 'rgba(18,133,95,.22)' : 'transparent', cbd: on ? '#34D399' : 'rgba(255,255,255,.4)', cbg: on ? '#12855F' : 'transparent', chk: on ? 1 : 0, go: () => set({ rgSel: on ? sel.filter(x => x !== k) : sel.concat(k) }) }; };
    const dt = new Date(2026, 10, 10 + day), DN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const names = sel.map(k => (RG_P.find(p => p[0] === k) || [])[1]).filter(Boolean);
    return { open, rot: open ? 'none' : 'rotate(180deg)', toggle: () => this.setState({ rgOpen: !open }, () => requestAnimationFrame(() => this.declutter())), clear: () => set({ rgSel: [] }),
      isWeather: mode === 'weather', isSoil: mode === 'soil',
      modes: [['weather', 'Weather'], ['soil', 'Soil']].map(([k, l]) => ({ l, wx: k === 'weather', sl: k === 'soil', bg: mode === k ? 'linear-gradient(135deg,#169A6E,#0B6B4B)' : 'rgba(255,255,255,.07)', bd: mode === k ? 'rgba(52,211,153,.5)' : 'rgba(255,255,255,.14)', sh: mode === k ? '0 0 14px rgba(18,133,95,.5),inset 0 1px 0 rgba(255,255,255,.25)' : 'none', go: () => set({ rgMode: k, rgSel: [k === 'soil' ? 'stemp' : 'temp'] }) })),
      latest: RG_P.filter(p => p[5] === 'l').map(opt), forecast: RG_P.filter(p => p[5] === 'f').map(opt), soil: RG_P.filter(p => p[5] === 's').map(opt),
      dayLabel: DN[dt.getDay()] + ' ' + dt.getDate() + ' ' + MN[dt.getMonth()],
      days: [1, 2, 3, 4, 5, 6, 7].map(n => { const on = n === day; return { l: 'Day ' + n, bg: on ? 'linear-gradient(135deg,#169A6E,#0B6B4B)' : 'rgba(255,255,255,.06)', fg: on ? '#fff' : 'rgba(255,255,255,.8)', bd: on ? 'rgba(52,211,153,.55)' : 'rgba(255,255,255,.16)', go: () => set({ rgDay: n }) }; }),
      depths: ['10', '20', '30', '40', '60'], depth: s.rgDepth || '10', setDepth: e => set({ rgDepth: e.target.value }),
      badge: 'Upper Murray · ' + (names.length ? 'showing ' + names.join(', ') : 'no parameter selected'),
      panel: !!s.rPanel, noPanel: !s.rPanel, togglePanel: () => this.setState(st => ({ rPanel: !st.rPanel }), () => requestAnimationFrame(() => this.declutter())),
      bnd: { bg: s.rBnd !== false ? '#12855F' : 'rgba(255,255,255,.28)', knob: s.rBnd !== false ? '14px' : '2px', toggle: () => this.setRBnd(s.rBnd === false) },
      basemaps: Object.entries(HB).map(([k, b]) => { const on = (s.rBase || 'satStreets') === k; return { label: b.label, sw: b.sw, bg: on ? 'rgba(18,133,95,.3)' : 'transparent', fg: on ? '#6EE7B7' : '#fff', fw: on ? 600 : 500, chk: on ? 1 : 0, go: () => this.setRBase(k) }; }),
      zoneLeg: { legOpen: !!s.zLeg, toggle: () => this.setState(st => ({ zLeg: !st.zLeg })), label: 'Zones (' + ZONE_LIST.length + ')', items: ZONE_LIST.map(z => ({ n: z.s + ' \u00b7 ' + z.nm, c: z.c })) } };
  }
  rgPop(o) {
    const m = this.rm, gl = window.maplibregl; if (!m || !gl || !o.st) return; if (this._pop) this._pop.remove();
    const s = this.state, day = s.rgDay || 1, dep = +(s.rgDepth || 10), p = o.st, d = o.dev, fc = o.type === 'fc';
    const kind = fc ? 'Forecast point' : kindOf(d), dc = fc ? '#F59E0B' : d.type === 'soil' ? '#C2783A' : '#2563EB', off = !fc && d.status === 'Offline';
    const dt = new Date(2026, 10, 10 + day), DW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let rows = [];
    if (fc) { const w = wxRead(o.seed, day, dep); rows = [['Forecast for', DW[dt.getDay()] + ' ' + dt.getDate() + ' Nov'], ['Min / Max', w.mm[0] + '° / ' + w.mm[1] + '°C'], ['Avg wind', w.aw + ' km/h'], ['Rainfall · Next 24 hours', w.rn + ' mm']]; }
    else if (!off && d.type === 'soil') { const a = [10, 30, 60].map(x => soilAt(o.seed, x, day)); rows = [['Moisture · 10 cm', a[0].moist + '%'], ['Moisture · 30 cm', a[1].moist + '%'], ['Moisture · 60 cm', a[2].moist + '%'], ['Soil temp · 10 cm', a[0].stemp + '°C'], ['Soil temp · 30 cm', a[1].stemp + '°C'], ['VIC · 30 cm', a[1].vic + ' µS/cm']]; }
    else if (!off) { const w = wxRead(o.seed, day, dep); rows = [['Temperature', w.temp + '°C'], ['Wind', w.wind + ' km/h ' + w.dir], ['Wind gust', w.gust + ' km/h'], ['Humidity', w.hum + '%'], ['Rainfall · Last 24 hours', w.r24.toFixed(1) + ' mm'], ['Solar radiation', w.sol + ' W/m²'], ['Dew point', w.dew + '°C']]; }
    const svg = (dd, c, sz) => '<svg width="' + (sz || 15) + '" height="' + (sz || 15) + '" viewBox="0 0 24 24" fill="none" stroke="' + (c || 'currentColor') + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="' + dd + '"></path></svg>';
    const ICN = { hist: 'M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9.5a4 4 0 0 1 0 8.5z', forecast: 'M4 6h16v14H4zM4 10h16M9 3v4M15 3v4M8 14h3M8 17h6', soil: 'M12 20.5v-8.5M12 12c0-4.2 3-7.2 8-7.2 0 4.2-3 7.2-8 7.2zM5 20.5h14' };
    const btns = fc ? [['Weather', 'hist'], ['Forecast', 'forecast']] : d.type === 'soil' ? [['Soil', 'soil'], ['Forecast', 'forecast']] : [['Weather', 'hist'], ['Forecast', 'forecast']];
    const last = fc ? 'Issued 11 Nov 2026, 06:00 am' : off ? 'Last sample ' + d.last : 'Last sample 11 Nov 2026, ' + d.last;
    const F = 'font-family:Geist,system-ui,sans-serif';
    const el = document.createElement('div');
    el.innerHTML = '<div style="width:210px;max-width:calc(100vw - 60px);box-sizing:border-box;padding:10px 11px;' + F + ';color:#0F172A">'
      + '<div style="display:flex;align-items:center;gap:7px"><span style="width:8px;height:8px;border-radius:50%;background:' + dc + ';flex-shrink:0"></span><div style="flex:1;min-width:0;font-size:13px;font-weight:700;line-height:1.25">' + (fc ? 'Forecast point' : (d.type === 'soil' ? 'Soil probe' : 'Weather station')) + ' <span style="font-weight:500;color:#64748B">· ' + p.z + '</span></div><button data-x="1" title="Close" style="appearance:none;border:0;margin:0;padding:0;cursor:pointer;width:22px;height:22px;border-radius:50%;background:#F1F5F9;color:#475569;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + svg('M6 6l12 12M18 6 6 18', null, 11) + '</button></div>'
      + '<div style="margin-top:4px;font-size:11px;color:#64748B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + (fc ? 'Forecast model' : d.provider) + ' · ' + (fc ? p.town : d.town) + '</div>'
      + '<div style="height:1px;background:#E2E8F0;margin:7px 0 3px"></div>'
      + (off ? '<div style="margin:4px 0;padding:6px 8px;border-radius:8px;background:#FEF2F2;color:#B91C1C;font-size:11.5px;font-weight:600">Offline · no current readings</div>' : rows.slice(0, 4).map(([l, v]) => '<div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;padding:2px 0;font-size:11.5px"><span style="color:#475569;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + l + '</span><span style="font-weight:700;white-space:nowrap">' + v + '</span></div>').join(''))
      + '<div style="margin-top:4px;font-size:10.5px;color:#94A3B8">' + last + '</div>'
      + '<div style="display:grid;grid-template-columns:repeat(' + btns.length + ',minmax(0,1fr));gap:6px;margin-top:8px">' + btns.map(([l, t]) => '<button data-t="' + t + '" style="appearance:none;border:0;margin:0;cursor:pointer;height:28px;border-radius:8px;background:#043C2C;color:#fff;font:600 11.5px Geist,system-ui,sans-serif;display:flex;align-items:center;justify-content:center;gap:5px">' + svg(ICN[t], null, 12) + l + '</button>').join('') + '</div></div>';
    const pop = this._pop = new gl.Popup({ closeButton: false, offset: 14, maxWidth: '230px', focusAfterOpen: false }).setLngLat(o.ll).setDOMContent(el).addTo(m);
    const pe = pop.getElement(); pe.style.zIndex = '10'; const c = pe.querySelector('.maplibregl-popup-content'), mb = m.getContainer().getBoundingClientRect(); if (c) Object.assign(c.style, { padding: '0', borderRadius: '12px', boxShadow: '0 10px 28px rgba(15,23,42,.3)', maxHeight: Math.max(220, mb.height - 40) + 'px', overflowY: 'auto' });
    requestAnimationFrame(() => { if (this._pop !== pop) return; const r = pe.getBoundingClientRect(), b = m.getContainer().getBoundingClientRect(), M = 14; let dx = 0, dy = 0; if (r.bottom > b.bottom - M) dy = r.bottom - b.bottom + M; if (r.top - dy < b.top + M) dy = r.top - b.top - M; if (r.right > b.right - M) dx = r.right - b.right + M; if (r.left - dx < b.left + M) dx = r.left - b.left - M; if (dx || dy) m.panBy([dx, dy], { duration: 300 }); });
    el.querySelector('[data-x]').onclick = () => pop.remove();
    const wk = (p.devs.find(x => x.type === 'weather') || {}).key;
    el.querySelectorAll('[data-t]').forEach(b => { b.onclick = () => { const t = b.getAttribute('data-t'), k = t === 'soil' ? d.key : d && d.type === 'weather' ? d.key : wk; pop.remove(); this.setState(st => ({ sub: { ...st.sub, regional: 'zones' }, sec: { ...st.sec, 'regional.zones': t }, zOpen: { ...(st.zOpen || {}), [p.z]: true }, zHi: k, zSt: t === 'hist' ? k : st.zSt })); }; });
  }
  declutter() {
    const m = this.rm; if (!m) return; const box = m.getContainer().getBoundingClientRect(), placed = [], pad = 3;
    const obs = Array.from(m.getContainer().parentNode.querySelectorAll('[data-rgpanel],[data-rgobs]')).map(el => el.getBoundingClientRect());
    const ov = (a, b, p) => !(a.right + p < b.left || a.left - p > b.right || a.bottom + p < b.top || a.top - p > b.bottom);
    const vis = (this.rgMk || []).filter(o => o.el.style.display !== 'none'), icons = vis.map(q => ({ q, r: (q.el.querySelector('[data-ico]') || q.el).getBoundingClientRect() }));
    const BASE = 'position:absolute;display:flex;flex-direction:column;gap:2px;', POS = ['left:100%;top:50%;transform:translateY(-50%);margin-left:5px;align-items:flex-start', 'right:100%;top:50%;transform:translateY(-50%);margin-right:5px;align-items:flex-end', 'left:50%;bottom:100%;transform:translateX(-50%);margin-bottom:4px;align-items:center', 'left:50%;top:100%;transform:translateX(-50%);margin-top:4px;align-items:center'];
    const blocked = r => r.left < box.left || r.right > box.right || r.top < box.top || r.bottom > box.bottom || obs.some(pr => ov(r, pr, 0));
    vis.forEach(o => {
      const ch = o.el.querySelector('[data-chip]'); if (!ch) return; ch.style.visibility = 'visible'; let best = null;
      for (const strict of [true, false]) { for (const ps of POS) { ch.style.cssText = BASE + ps; const r = ch.getBoundingClientRect(); if (blocked(r) || placed.some(q => ov(r, q, pad)) || (strict && icons.some(x => x.q !== o && ov(r, x.r, 2)))) continue; best = r; break; } if (best) break; }
      if (!best) { const fit = POS.find(ps => { ch.style.cssText = BASE + ps; return !blocked(ch.getBoundingClientRect()); }); if (fit) { ch.style.cssText = BASE + fit; best = ch.getBoundingClientRect(); } else ch.style.visibility = 'hidden'; }
      if (best) placed.push(best);
    });
  }
  paintReg() {
    const s = this.state, mode = s.rgMode || 'weather', sel = s.rgSel || ['temp'], day = s.rgDay || 1, dep = +(s.rgDepth || 10);
    const want = o => mode === 'soil' ? (o.type === 'soil' ? 's' : null) : o.type === 'weather' ? 'lf' : null;
    const anyF = sel.some(k => (RG_P.find(p => p[0] === k) || [])[5] === 'f');
    (this.rgMk || []).forEach(o => {
      const grp = want(o), show = !!grp && (o.type !== 'fc' || anyF);
      o.el.style.display = show ? '' : 'none'; if (!show) return;
      const r = (k, a, b) => { const x = Math.sin(o.seed * 12.9898 + k * 78.233 + day * 3.1 + dep * .7) * 43758.5453; return a + Math.floor((x - Math.floor(x)) * (b - a + 1)); };
      const V = { temp: r(1, 13, 18) + '°', wind: r(2, 6, 24) + ' km/h', r1: (r(3, 0, 8) / 10).toFixed(1) + ' mm', r24: r(4, 0, 14) + ' mm', mm: r(5, 2, 8) + '/' + r(6, 16, 22) + '°', aw: r(7, 8, 22) + ' km/h', rn: r(8, 0, 12) + ' mm', moist: r(9, 22, 41) + '%', stemp: r(10, 11, 16) + '°', vic: r(11, 180, 420) + ' µS/cm' };
      const items = (o.off ? [] : sel.filter(k => V[k] && grp.includes((RG_P.find(p => p[0] === k) || [])[5]))).map(k => { const p = RG_P.find(x => x[0] === k); return '<span style="padding:2px 7px;border-radius:999px;background:rgba(15,23,42,.9);border:1px solid rgba(255,255,255,.22);color:#fff;font:600 10px Geist,system-ui,sans-serif;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,.3)">' + V[k].replace(' ', '\u2009') + '</span>'; });
      if (o.off && sel.length) items.push('<span style="padding:2px 7px;border-radius:999px;background:rgba(127,29,29,.92);color:#FECACA;font:600 10px Geist,system-ui,sans-serif">Offline</span>');
      const dot = o.type === 'fc' ? '<span style="width:12px;height:12px;border-radius:3px;transform:rotate(45deg);background:#F59E0B;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.45)"></span>' : '<span style="width:28px;height:28px;border-radius:50%;background:#fff;box-shadow:0 0 0 1px rgba(15,23,42,.08),0 3px 8px rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center"><span style="display:flex;transform:scale(.85)">' + (o.type === 'soil' ? DEV_SOIL : DEV_WX) + '</span></span>';
      o.el.innerHTML = '<div style="position:relative;width:28px;height:28px;display:flex;align-items:center;justify-content:center"><span data-ico="1" style="display:flex">' + dot + '</span>' + (items.length ? '<div data-chip="1" style="position:absolute;left:100%;top:50%;transform:translateY(-50%);margin-left:5px;display:flex;flex-direction:column;align-items:flex-start;gap:2px">' + items.join('') + '</div>' : '') + '</div>';
    });
    cancelAnimationFrame(this._dcl); this._dcl = requestAnimationFrame(() => this.declutter());
  }
  paintZones() {
    const m = this.rm; if (!m || !m.getLayer('zf')) return;
    const z = this.state.zoneFocus;
    m.setPaintProperty('zf', 'fill-opacity', z ? ['case', ['==', ['get', 's'], z], 0.7, 0.3] : 0.45);
  }
  drawFarm(fly) { const m = this.hm; if (!m) return; const fi0 = this.state.farm, f = FARMS[fi0];
    Object.entries(this.hMk || {}).forEach(([k, mk]) => { mk.getElement().style.display = +k === fi0 && this.state.hFarmL !== false ? '' : 'none'; });
    (this.hDev || []).forEach(mk => { mk.getElement().style.display = mk._fi === fi0 && this.state.hDevL !== false ? '' : 'none'; }); this.setState({ hPop: null }); if (fly) m.easeTo({ center: [f.lng, f.lat], zoom: Math.max(m.getZoom(), 10), duration: 800 }); }
  showPop(fi, keep) {
    const map = this.hm; if (!map) return; const f = FARMS[fi];
    const pt = map.project([f.lng, f.lat]), W = map.getContainer().clientWidth;
    Object.values(this.hMk || {}).forEach(mk => { if (mk._dot) mk._dot.style.transform = 'rotate(-45deg)'; });
    const mk = (this.hMk || {})[fi]; if (mk && mk._dot) mk._dot.style.transform = 'rotate(-45deg) scale(1.18)';
    const sc = 1.2 * Math.max(0.45, Math.min(1.1, 0.55 + (map.getZoom() - 7.5) * 0.18)), pinH = 32 * sc;
    const below = pt.y - pinH - 70 < 52;
    const half = 130, x = W < half * 2 + 16 ? W / 2 : Math.max(half + 8, Math.min(W - half - 8, pt.x));
    this.setState({ hPop: { fi, x, y: below ? pt.y + 10 : pt.y - pinH - 10, below } });
  }
  hidePopSoon() { clearTimeout(this._popT); this._popT = setTimeout(() => { Object.values(this.hMk || {}).forEach(mk => { if (mk._dot) mk._dot.style.transform = 'rotate(-45deg)'; }); this.setState({ hPop: null }); }, 200); }
  setBasemap(k) {
    this.setState({ hBase: k });
    const map = this.hm; if (!map) return;
    map.getStyle().layers.forEach(l => { if (l.id.startsWith('bm-')) map.setLayoutProperty(l.id, 'visibility', l.id.startsWith('bm-' + k + '-') ? 'visible' : 'none'); });
    this.hTone(k);
  }
  hTone(k) {
    const map = this.hm; if (!map || !map.getLayer('sub-fill')) return;
    const light = ['light', 'streets', 'navDay', 'outdoors'].includes(k);
    map.setPaintProperty('sub-fill', 'fill-opacity', light ? 0.32 : 0.22);
    map.setPaintProperty('sub-line', 'line-color', light ? '#b7791f' : '#fcd27a');
  }
  setFarmL(on) { this.setState({ hFarmL: on }); Object.entries(this.hMk || {}).forEach(([k, mk]) => { mk.getElement().style.display = on && +k === this.state.farm ? '' : 'none'; }); if (!on) this.setState({ hPop: null }); }
  setDevL(on) {
    this.setState({ hDevL: on });
    const map = this.hm, gl = window.maplibregl; if (!map || !gl) return;
    if (!this.hDev) {
      const icons = { weather: DEV_WX, soil: DEV_SOIL, other: DEV_SCALE };
      this.hDev = [];
      FARMS.forEach((f, fi) => devsOf(fi).forEach(d => {
        const el = document.createElement('div'); el.title = f.name + ' \u00b7 ' + (CTRL[d.id] || d.id) + ' \u00b7 ' + d.name;
        const inner = document.createElement('div'); inner.dataset.dpin = '1';
        inner.style.cssText = 'width:32px;height:32px;border-radius:50%;background:#fff;box-shadow:0 0 0 1px rgba(15,23,42,.08),0 3px 8px rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center;transition:transform .12s';
        inner.innerHTML = icons[d.type] || DEV_WX; el.appendChild(inner); el.style.cursor = d.type === 'other' ? 'default' : 'pointer';
        if (fi !== this.state.farm) el.style.display = 'none';
        const dm = new gl.Marker({ element: el }).setLngLat([d.lng, d.lat]).addTo(map); dm._fi = fi; this.hDev.push(dm);
        if (d.type !== 'other') el.addEventListener('click', e => { e.stopPropagation(); this.devCard(map, [d.lng, d.lat], d, fi * 7 + devsOf(fi).indexOf(d) + 1); });
      }));
    }
    this.hDev.forEach(mk => { mk.getElement().style.display = on && mk._fi === this.state.farm ? '' : 'none'; });
    map.fire('zoom');
  }
  pmRef = el => {
    if (el && el !== this._pEl) {
      this._pEl = el;
      const go = () => { if (!this.GL()) return setTimeout(go, 120); const m = this.mkMap(el, this._pmC || [147.93, -36.27], 13); m.addControl(new (this.GL()).NavigationControl({ showCompass: false }), 'bottom-right'); this.pm = m; this.pmMk = []; this._pmDone = ''; m.on('load', () => { m.resize(); this._pmDone = ''; this.syncPm(); }); setTimeout(() => { m.resize(); this._pmDone = ''; this.syncPm(); }, 400); };
      go();
    } else if (!el && this.pm) { this.pm.remove(); this.pm = null; this._pEl = null; this.pmMk = []; }
  };
  syncPm() {
    const m = this.pm, pts = this._pmPts, GL = this.GL(); if (!m || !pts || !GL) return;
    m.resize();
    if (!this._pmOut) { this._pmOut = e => { if (this.state.pmSel == null || !this._pmTbl || !this._pmTbl.isConnected) return; if (this._pmTbl.contains(e.target) || (e.target.closest && e.target.closest('[data-pm-mk]'))) return; this._pmReset = true; this.setState({ pmSel: null }); }; document.addEventListener('mousedown', this._pmOut); }
    (this.pmMk || []).forEach(k => k.remove()); this.pmMk = []; const b = new GL.LngLatBounds();
    pts.forEach(p => { const w = document.createElement('div'); w.title = p.tip; w.style.cssText = 'display:flex;align-items:center;gap:6px;cursor:pointer;z-index:' + (p.sel ? 2 : 1); const d = document.createElement('span'); d.style.cssText = 'width:14px;height:14px;border-radius:50%;background:' + p.c + ';border:2px solid #fff;box-shadow:' + (p.sel ? '0 0 0 3px #22D3EE,' : '') + '0 1px 4px rgba(0,0,0,.5);flex-shrink:0'; const tx = document.createElement('span'); tx.textContent = p.l; tx.style.cssText = 'font:700 12px Geist,system-ui,sans-serif;color:#fff;background:' + (p.sel ? '#043C2C' : 'rgba(17,24,39,.78)') + ';padding:3px 7px;border-radius:4px;white-space:nowrap'; w.append(d, tx); w.setAttribute('data-pm-mk', '1'); w.onclick = e => { e.stopPropagation(); p.go(); }; this.pmMk.push(new GL.Marker({ element: w, anchor: 'left', offset: [-9, 0] }).setLngLat(p.ll).addTo(m)); b.extend(p.ll); if (p.sel && this._pmFly) { this._pmFly = false; m.flyTo({ center: p.ll, zoom: Math.max(m.getZoom(), 15), duration: 600 }); } });
    if (this._pmDone !== this._pmKey && !b.isEmpty()) { this._pmDone = this._pmKey; m.fitBounds(b, { padding: { top: 70, bottom: 90, left: 50, right: 150 }, maxZoom: 15, duration: 0 }); }
    else if (this._pmReset && !b.isEmpty()) { this._pmReset = false; m.fitBounds(b, { padding: { top: 70, bottom: 90, left: 50, right: 150 }, maxZoom: 15, duration: 700 }); }
    const si = pts.findIndex(p => p.sel), row = si >= 0 && this._pmTbl && this._pmTbl.querySelector('[data-pm-row="' + si + '"]'); if (row) row.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  fbAnimate() {
    const el = this._fbNum, cv = this._fbCover, tg = this._fbTarget;
    if (cv) { cv.style.transition = 'none'; cv.style.width = '100%'; void cv.offsetWidth; cv.style.transition = 'width 1s cubic-bezier(.4,0,.2,1)'; cv.style.width = '0'; }
    if (!el || tg == null) return; const t0 = performance.now(), D = 900;
    const f = now => { const p = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - p, 3); if (this._fbNum) this._fbNum.textContent = String(Math.round(tg * e)); if (p < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
  }
  apfVals() {
    const s = this.state; if (s.modal !== 'addPen') return {};
    const ADJ = { breed: ['Breed', [['Bos Taurus (British)', 0], ['Bos Taurus (European)', 3], ['Wagyu', 4], ['Bos Indicus (25%)', 4], ['Bos Indicus (50%)', 7], ['Bos Indicus (75%)', 8], ['Bos Indicus (100%)', 10]]], coat: ['Coat colour', [['Black', 0], ['Red', 1], ['White', 3]]], dof: ['Days on feed', [['up to 80 days', 2], ['80-130 days', 0], ['>130 days', -3]]], health: ['Health status', [['Healthy', 0], ['Sick', -5], ['Recovering', -5]]], manure: ['Manure depth', [['Pack depth 50 mm', 0], ['Pack depth 100 mm', -4], ['Pack depth 200 mm', -8]]], wtemp: ['Water temperature', [['15-20 C', 1], ['21-30 C', 0], ['31-35 C', -1], ['Greater than 35 C', -2]]], shade: ['Shade', [['No shade', 0], ['1.5-2 m2/SCU', 3], ['2-3 m2/SCU', 5], ['3-5 m2/SCU', 7]]], acclim: ['Acclimation', [['Acclimated', 0], ['Not Acclimated', -5]]], mitig: ['Mitigation measures', [['None', 0], ['Extra water troughs', 1], ['Heat load ration', 2], ['Strategic cleaning pens', 2]]] };
    const fd = devsOf(s.farm), DEVS = [['Weather station', fd.filter(d => d.type === 'weather')], ['Soil probe', fd.filter(d => d.type === 'soil')]].map(([k, ls]) => [k, ls.map(d => d.name + ' \u00b7 ' + d.id + (d.status === 'Offline' ? ' (offline)' : ''))]).filter(([, ls]) => ls.length);
    const D0 = { label: '', head: '', cap: '', dev: [], run: {} }; Object.keys(ADJ).forEach(k => { D0[k] = ADJ[k][1][k === 'dof' ? 1 : 0][0]; });
    const F = { ...D0, ...(s.apf || {}) }, up = o => this.setState(st => ({ apf: { ...D0, ...(st.apf || {}), ...o } })), dd = s.apDd || null, sg = n => (n > 0 ? '+' + n : '' + n), col = n => n > 0 ? '#B0421C' : n < 0 ? '#1C7A55' : '#7C8D88';
    let tot = 0; const BASE = 86, FARM = (FARMS[s.farm] || FARMS[0] || {}).name || 'Farm';
    const fields = Object.keys(ADJ).map(k => { const [label, opts] = ADJ[k], hit = opts.find(o => o[0] === F[k]) || opts[0], open = dd === k; tot += hit[1];
      return { label, value: hit[0], adj: sg(hit[1]), adjC: col(hit[1]), open, z: open ? 30 : 1, rot: open ? 'rotate(180deg)' : 'none', bd: open ? '#12855F' : '#D7E0DC', bg: open ? '#F3FAF7' : '#fff', toggle: () => this.setState({ apDd: open ? null : k }),
        options: opts.map(([l, a]) => ({ label: l, adj: sg(a), adjC: a > 0 ? '#B0421C' : a < 0 ? '#1C7A55' : '#93A5A0', bg: l === hit[0] ? '#EAF6F0' : '#fff', c: l === hit[0] ? '#0C6B4C' : '#33453F', fw: l === hit[0] ? 600 : 400, go: () => { up({ [k]: l }); this.setState({ apDd: null }); } })) }; });
    const q = (s.apQ || '').trim().toLowerCase(), opts = DEVS.flatMap(([kind, ls]) => ls.map(l => ({ kind, l }))).filter(o => !q || o.l.toLowerCase().includes(q));
    const ok = !!String(F.label).trim(), done = () => this.setState({ modal: null, apf: null, apDd: null, apQ: '' });
    return { sub: FARM + ' \u2014 you can save and finish later', label: F.label, head: F.head, cap: F.cap, fields,
      onName: e => up({ label: e.target.value }), onHead: e => up({ head: e.target.value.replace(/[^0-9]/g, '') }), onCap: e => up({ cap: e.target.value.replace(/[^0-9]/g, '') }),
      ddOpen: !!dd, ddClose: () => this.setState({ apDd: null }),
      sel: F.dev.map(l => { const on = !!F.run[l]; return { label: l, isPump: /Aeration/.test(l), statusLabel: on ? 'On' : 'Off', statusC: on ? '#1C7A55' : '#8A9A95', toggleBg: on ? '#12855F' : '#C9D6D1', knob: on ? '16px' : '2px', toggle: () => up({ run: { ...F.run, [l]: !on } }), remove: () => up({ dev: F.dev.filter(x => x !== l) }) }; }),
      devOpen: dd === 'dev', devZ: dd === 'dev' ? 30 : 1, devToggle: () => this.setState({ apDd: dd === 'dev' ? null : 'dev' }), addLbl: F.dev.length ? 'Add more devices' : 'Add devices', q: s.apQ || '', onQ: e => this.setState({ apQ: e.target.value }), none: !opts.length,
      opts: opts.map(({ kind, l }) => { const c = F.dev.includes(l); return { label: l, kind, tick: c ? '\u2713' : '', bd: c ? '#12855F' : '#C9D6D1', bg: c ? '#12855F' : '#fff', go: () => up({ dev: c ? F.dev.filter(x => x !== l) : F.dev.concat(l) }) }; }),
      base: String(BASE), total: sg(tot), upper: String(BASE + tot), draft: done, save: () => { if (ok) done(); }, btnBg: ok ? '#12855F' : '#9FBFB0', cur: ok ? 'pointer' : 'not-allowed' };
  }
  refOf(k) { const r = REFS[k], s = this.state; if (!r) return null; const w = TIPS[k] || {}; return { lk: REF_LINK((w.r || '') + ' ' + (r.std || '') + ' ' + (r.ind || '')), d: w.d || r.def, r: w.r || r.std || r.ind || r.src, u: w.u || (r.calc || '').replace(/\n/g, ' '), def: r.def, calc: r.calc || '', unit: r.unit || '', src: r.src, std: r.std || '', open: s.refTip === k, tog: () => this.setState(st => ({ refTip: st.refTip === k ? null : k })), on: () => { if (this.state.refTip !== k) this.setState({ refTip: k }); }, off: () => this.setState(st => st.refTip === k ? { refTip: null } : null), more: () => this.setState({ refModal: k, refTip: null }) }; }
  refModalVals() { const r = REFS[this.state.refModal]; if (!r) return null; const P = { ff: 'inherit', bg: 'transparent', pd: '0' }; return { t: r.t, close: () => this.setState({ refModal: null }), secs: [{ h: 'WHAT IT MEANS', v: r.def, ...P }].concat(r.calc ? [{ h: 'HOW IT IS CALCULATED', v: r.calc, ff: 'ui-monospace,SFMono-Regular,Menlo,monospace', bg: '#F8FAFC', pd: '10px 12px' }] : []).concat(r.unit ? [{ h: 'UNIT', v: r.unit, ...P }] : []).concat([{ h: 'SOURCE', v: r.src, ...P }]).concat(r.std ? [{ h: 'REFERENCE STANDARD', v: r.std, ...P, lk: REF_LINK(r.std) }] : []).concat(r.ind ? [{ h: 'INDUSTRY REFERENCE', v: r.ind, ...P }] : []).concat([{ h: 'NOTE', v: 'Values are indicative only and depend on the accuracy and frequency of uploaded data.', ...P }]) }; }
  showDD(items, foc, key, locked) { const s = this.state, ok = 'dd:' + key, open = !!s.showOpen && s.showOpen === ok, cur = items.find(x => x[0] === foc); return { l: cur ? cur[0] : 'All paddocks', c: cur ? cur[1] : '#475569', open, toggle: () => { if (!locked) this.setState({ showOpen: open ? null : ok }); }, opts: [['All paddocks', '#475569', null]].concat(items.map(x => [x[0], x[1], x[0]])).map(([l, c, v]) => ({ l, c, bg: (v || null) === (foc || null) ? '#F0FDF4' : 'transparent', fw: (v || null) === (foc || null) ? 600 : 500, go: () => this.setState({ [key]: v, showOpen: null }) })) }; }
  hlLeg(items, foc, key, locked) { return items.map(([n, c]) => { const on = foc === n; return { name: n, c, ls: 'solid', tip: locked ? n : on ? 'Show all' : 'Highlight ' + n, bd: on ? c : '#E2E8F0', bg: '#fff', op: !foc || on ? 1 : .5, td: 'none', cur: locked ? 'default' : 'pointer', go: locked ? null : () => this.setState(st => ({ [key]: st[key] === n ? null : n })) }; }); }
  treemap(title, sub, data, sel, pick) {
    const tot = data.reduce((x, d) => x + d.v, 0) || 1, out = [], PAL = ['#0B5D40', '#12855F', '#2E9B68', '#7CC497', '#B9E0C6', '#D8EEDF'];
    const lay = (it, x, y, w, h) => { if (!it.length) return; if (it.length === 1) { out.push({ ...it[0], x, y, w, h }); return; } const S = it.reduce((a, d) => a + d.v, 0); let acc = 0, k = 0; while (k < it.length - 1 && acc + it[k].v <= S / 2) acc += it[k++].v; if (k === 0) { acc = it[0].v; k = 1; } const f = acc / S; if (w >= h) { lay(it.slice(0, k), x, y, w * f, h); lay(it.slice(k), x + w * f, y, w * (1 - f), h); } else { lay(it.slice(0, k), x, y, w, h * f); lay(it.slice(k), x, y + h * f, w, h * (1 - f)); } };
    lay(data.slice().sort((a, b) => b.v - a.v).map((d, i) => ({ ...d, i })), 0, 0, 230, 100);
    const fv = v => (v < 10 ? v.toFixed(1) : Math.round(v).toLocaleString()) + ' t';
    return { title, sub: 'Total ' + fv(tot) + ' DM', isTree: true, axisOn: false, span: 'span 1', legend: [], h: '170px',
      tiles: out.map(q => { const dim = sel && sel !== q.n; return { l: q.n, t: fv(q.v), pc: Math.round(q.v / tot * 100) + '% of total', x: (q.x / 2.3).toFixed(2) + '%', y: q.y.toFixed(2) + '%', w: (q.w / 2.3).toFixed(2) + '%', h: q.h.toFixed(2) + '%', c: dim ? '#E2E8F0' : PAL[Math.min(q.i, PAL.length - 1)], fg: dim ? '#64748B' : q.i < 3 ? '#fff' : '#0F172A', tip: q.n + ': ' + fv(q.v) + ' DM (' + Math.round(q.v / tot * 100) + '%) \u00b7 click to ' + (sel === q.n ? 'show all' : 'focus'), ring: sel === q.n ? 'inset 0 0 0 3px #22D3EE' : 'none', go: pick ? () => pick(q.n) : null }; }) };
  }
  divBars(title, sub, data, u, pick) {
    const mx = Math.max(0, ...data.map(d => d.v)), mn = Math.min(0, ...data.map(d => d.v)), pad = ((mx - mn) || 1) * .2, top = mx + pad, bot = mn < 0 ? mn - pad : 0, R = top - bot, z = top / R * 100;
    const sg = v => (v > 0 ? '+' : v < 0 ? '\u2212' : '') + Math.abs(v);
    const nUp = data.filter(d => d.v >= 0).length, nDn = data.length - nUp;
    return { title, sub, isDiv: true, axisOn: false, span: 'span 1', h: '250px', zero: z.toFixed(2) + '%',
      legend: [],
      cols: data.map(d => { const pos = d.v >= 0, h = Math.abs(d.v) / R * 100; return { l: d.n, top: (pos ? z - h : z).toFixed(2) + '%', h: Math.max(h, .8).toFixed(2) + '%', c: d.dim ? '#E2E8F0' : pos ? '#3E9B5C' : '#DC2626', fg: d.dim ? '#94A3B8' : pos ? '#15803D' : '#B91C1C', t: sg(d.v), lt: pos ? 'calc(' + (z - h).toFixed(2) + '% - 19px)' : 'calc(' + (z + h).toFixed(2) + '% + 4px)', tip: d.n + ': ' + sg(d.v) + u }; }) };
  }
  zoomLine(c) {
    if (!c || !c._raw || c.zctl) return c;
    const { xl, lines, o } = c._raw, n = Math.max(...lines.map(l => ((l[3] && l[3].from) || 0) + l[2].length)); if (!(n >= 5)) return c;
    const k = 'zl:' + c.title, w = (this.state.zoom || {})[k], ctl = { zk: k, zn: String(n), zctl: true, zoomed: !!w, zin: () => this.zoomStep(k, n, .7), zout: () => this.zoomStep(k, n, 1.45), zreset: () => this.setState(st => ({ zoom: { ...(st.zoom || {}), [k]: null } })) };
    if (!w) return { ...c, ...ctl };
    const a = Math.max(0, Math.min(w[0], n - 2)), b = Math.min(n - 1, Math.max(w[1], a + 1));
    const ln = lines.map(([nm, col, vals, x = {}]) => { const f = x.from || 0, v = vals.slice(Math.max(0, a - f), Math.max(0, b - f + 1)); return [nm, col, v, { ...x, from: Math.max(0, f - a) }]; }).filter(l => l[2].length);
    if (!ln.length) return { ...c, ...ctl };
    let nx; if (o.xs) { const xs = o.xs.slice(a, b + 1), mm = Math.min(5, xs.length); nx = Array.from({ length: mm }, (_, i) => xs[Math.round(i * (xs.length - 1) / Math.max(1, mm - 1))]); } else if (xl.length === n) nx = xl.slice(a, b + 1); else nx = xl.filter((_, i) => { const p = i * (n - 1) / Math.max(1, xl.length - 1); return p >= a && p <= b; });
    const r = Lc(c.title, c.sub, nx, ln, o);
    return { ...c, ...ctl, lines: r.lines, ticks: r.ticks, xl: nx };
  }
  stMapRef = el => {
    if (el && el !== this._sEl) {
      this._sEl = el;
      const go = () => { if (!this.GL()) return setTimeout(go, 120); const m = this.mkMap(el, [147.93, -36.27], 13); m.addControl(new (this.GL()).NavigationControl({ showCompass: false }), 'bottom-right'); this.sm = m; this.smMk = []; this._stDone = ''; m.on('load', () => this.syncStMap()); setTimeout(() => this.syncStMap(), 400); };
      go();
    } else if (!el && this.sm) { this.sm.remove(); this.sm = null; this._sEl = null; this.smMk = []; }
  };
  syncStMap() {
    const m = this.sm, pts = this._stPts; if (!m || !pts || !this.GL()) return;
    (this.smMk || []).forEach(k => k.remove()); this.smMk = []; const b = new (this.GL()).LngLatBounds();
    pts.forEach(p => { const w = document.createElement('div'); w.title = p.tip; w.style.cssText = 'width:30px;height:30px;border-radius:50%;background:' + p.c + ';border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.5);color:#fff;font:700 12px Geist,sans-serif;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:' + (p.on ? 1 : .35); w.textContent = p.n; if (p.go) w.onclick = p.go; if (p.selPt) w.style.boxShadow = '0 0 0 3px #FACC15,0 2px 8px rgba(0,0,0,.5)'; this.smMk.push(new (this.GL()).Marker({ element: w }).setLngLat(p.ll).addTo(m)); if (p.on) b.extend(p.ll); });
    if (this._stDone !== this._stKey && !b.isEmpty()) { this._stDone = this._stKey; m.fitBounds(b, { padding: 70, maxZoom: 16, duration: 0 }); }
  }
  hZoneApply(fit) {
    const m = this.hm, fc = this._umFc; if (!m || !fc || !m.getLayer('sub-fill')) return;
    const zz = FARMS[this.state.farm].zone;
    ['sub-fill', 'loc-line'].forEach(id => m.setFilter(id, ['all', ['==', ['get', 'k'], 'sub'], ['==', ['get', 's'], zz]]));
    (this._hLabels || []).forEach(o => { o.el.style.display = o.z === zz ? '' : 'none'; });
    const ft = fc.features.find(x => x.properties.k === 'sub' && x.properties.s === zz); if (!ft || !fit) return;
    const b = [Infinity, Infinity, -Infinity, -Infinity], walk = c => { if (typeof c[0] === 'number') { b[0] = Math.min(b[0], c[0]); b[1] = Math.min(b[1], c[1]); b[2] = Math.max(b[2], c[0]); b[3] = Math.max(b[3], c[1]); } else c.forEach(walk); };
    walk(ft.geometry.coordinates); m.fitBounds([[b[0], b[1]], [b[2], b[3]]], { padding: 48, duration: 500 });
  }
  setBnd(on) { this.setState({ hBnd: on }); const map = this.hm; if (!map) return; ['sub-fill', 'loc-line', 'sub-line'].forEach(id => map.getLayer(id) && map.setLayoutProperty(id, 'visibility', on ? 'visible' : 'none')); }
  devCard(map, ll, d, seed) {
    const gl = window.maplibregl; if (!map || !gl) return; if (this._dcPop) this._dcPop.remove();
    const off = d.status === 'Offline', soil = d.type === 'soil', w = wxRead(seed), a = soilAt(seed, 10), b = soilAt(seed, 30);
    const svg = (dd, sz, c) => '<svg width="' + sz + '" height="' + sz + '" viewBox="0 0 24 24" fill="none" stroke="' + (c || 'currentColor') + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="' + dd + '"></path></svg>';
    const IC = { t: 'M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z', h: 'M12 3s-6 6.5-6 11a6 6 0 0 0 12 0c0-4.5-6-11-6-11z', r: 'M7 15a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 6.5a4 4 0 0 1 0 8.5M8 19l-1 2M12 19l-1 2M16 19l-1 2', w: 'M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8', v: 'M3 12h4l3-7 4 14 3-7h4' };
    const tiles = soil ? [['h', 'Moisture 10 cm', a.moist, '%', '#2563EB'], ['h', 'Moisture 30 cm', b.moist, '%', '#2563EB'], ['t', 'Soil temp', a.stemp, '\u00b0C', '#EA580C'], ['v', 'VIC', b.vic, '', '#7C3AED']]
      : [['t', 'Temp', w.temp, '\u00b0C', '#EA580C'], ['h', 'Humidity', w.hum, '%', '#0891B2'], ['r', 'Rain', w.r24.toFixed(1), 'mm', '#2563EB'], ['w', 'Wind', w.wind, 'km/h', '#16A34A']];
    const F = 'font-family:Geist,system-ui,sans-serif';
    const el = document.createElement('div');
    el.innerHTML = '<div style="width:236px;box-sizing:border-box;padding:14px;' + F + ';color:#0F172A">'
      + '<div style="display:flex;gap:10px;align-items:flex-start">'
      + '<span style="width:36px;height:36px;border-radius:10px;background:#F1F5F9;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + (soil ? DEV_SOIL : DEV_WX) + '</span>'
      + '<div style="flex:1;min-width:0"><div style="font-size:13.5px;font-weight:700;line-height:1.3">' + d.name + '</div>'
      + '<div style="display:flex;gap:6px;margin-top:5px"><span style="height:22px;padding:0 9px;border-radius:999px;border:1.5px solid #0F766E;color:#0F766E;font-size:11.5px;font-weight:600;display:inline-flex;align-items:center">' + (soil ? 'Soil' : 'Weather') + '</span>'
      + '<span style="height:22px;padding:0 9px;border-radius:999px;background:' + (off ? '#FEF2F2' : '#ECFDF5') + ';color:' + (off ? '#B91C1C' : '#15803D') + ';font-size:11.5px;font-weight:600;display:inline-flex;align-items:center;gap:5px"><span style="width:7px;height:7px;border-radius:50%;background:' + (off ? '#EF4444' : '#22C55E') + '"></span>' + (off ? 'Offline' : 'Live') + '</span></div></div>'
      + '<button data-x="1" title="Close" style="appearance:none;border:0;margin:0;padding:0;cursor:pointer;width:22px;height:22px;border-radius:50%;background:#F1F5F9;color:#475569;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + svg('M6 6l12 12M18 6 6 18', 11) + '</button></div>'
      + (off ? '<div style="margin-top:12px;padding:10px;border-radius:10px;background:#FEF2F2;color:#B91C1C;font-size:12px;font-weight:600">No current readings \u00b7 last seen ' + d.last + '</div>'
        : '<div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;margin-top:12px">' + tiles.map(([ic, l, v, u, c]) => '<div style="padding:8px 10px;border-radius:10px;background:#F8FAFC;border:1px solid #EEF2F6;min-width:0"><div style="display:flex;align-items:center;gap:5px;font-size:11.5px;color:#475569;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + svg(IC[ic], 12, c) + l + '</div><div style="margin-top:2px;font-size:18px;font-weight:700;letter-spacing:-.01em">' + v + '<span style="font-size:11px;font-weight:600;color:#64748B;margin-left:2px">' + u + '</span></div></div>').join('') + '</div>')
      + '<div style="margin-top:10px;font-size:11.5px;color:#64748B">Last sampling ' + (off ? d.last : '23 Nov 2026, ' + d.last) + '</div>'
      + '<div style="height:1px;background:#E2E8F0;margin:10px 0"></div>'
      + '<button data-dc-open="1" style="appearance:none;border:0;background:transparent;margin:0;padding:0;cursor:pointer;color:#0B6B4B;font:700 13px Geist,system-ui,sans-serif;display:flex;align-items:center;gap:6px">Open dashboard ' + svg('M5 12h14M13 6l6 6-6 6', 14) + '</button></div>';
    const pop = this._dcPop = new gl.Popup({ closeButton: false, offset: 22, maxWidth: '260px', focusAfterOpen: false }).setLngLat(ll).setDOMContent(el).addTo(map);
    const c = pop.getElement().querySelector('.maplibregl-popup-content'); if (c) Object.assign(c.style, { padding: '0', borderRadius: '14px', boxShadow: '0 12px 32px rgba(15,23,42,.28)' });
    pop.getElement().style.zIndex = '10';
    el.querySelector('[data-x]').onclick = () => pop.remove();
    el.querySelector('[data-dc-open]').onclick = () => { pop.remove(); this.openDevice(d); this.setState(st => ({ sec: { ...st.sec, 'weather.stations': 'dashboard', 'soil.dashboard': undefined } })); };
  }
  openDevice(d) {
    const fi = this.state.farm, devs = devsOf(fi);
    if (d.type === 'weather') { const i = devs.filter(x => x.type === 'weather').indexOf(devs.find(x => x.id === d.id)); this.setState(st => ({ page: 'weather', sub: { ...st.sub, weather: 'stations' }, sel: { ...st.sel, 'weather.stations': i } })); }
    else if (d.type === 'soil') { const i = devs.filter(x => x.type === 'soil').indexOf(devs.find(x => x.id === d.id)); this.setState(st => ({ page: 'soil', sub: { ...st.sub, soil: 'dashboard' }, sel: { ...st.sel, 'soil.dashboard': i } })); }
    else this.setState(st => ({ page: 'livestock', sub: { ...st.sub, livestock: 'weight' } }));
  }
  openTk() { this.go('support'); this.setState({ modal: 'ticket', ntDone: null, nt: { subject: '', topic: '', files: [] }, menuOpen: false }); }
  go(page, sub) { this.setState(st => ({ page, menuOpen: false, custOpen: false, devOpen: null, sub: sub ? { ...st.sub, [page]: sub } : st.sub, ...(page === 'data' ? { up: null, dataOpen: null, dataFilt: false } : {}), ...(page === 'devices' ? { devEdit: null, devDD: null, devPage: 1 } : {}) })); }
  subOf(p) { const t = PAGES[p].tabs; return this.state.sub[p] || (t ? t[0][0] : ''); }
  secOf(k, def) { return this.state.sec[k] || def; }
  setSec(k, v) { this.setState(st => ({ sec: { ...st.sec, [k]: v } })); }
  sections(k, list) { let cur = this.secOf(k, list[0][0]); if (!list.some(x => x[0] === cur)) cur = list[0][0]; return { cur, items: list.map(([id, label]) => { const on = cur === id; return { label, d: SEC_IC[id] || I.grid, go: () => this.setSec(k, id), sel: on ? 'true' : 'false', fg: on ? '#043C2C' : '#475569', fw: on ? 600 : 500, ic: on ? '#043C2C' : '#64748B', bg: 'transparent', sh: 'none', ind: on ? '#043C2C' : 'transparent' }; }) }; }
  periodChips(k, list) { const cur = this.state.period[k] || list[0]; return { cur, chips: list.map(l => { const on = l === cur; return { label: l, dot: '', go: () => this.setState(st => ({ period: { ...st.period, [k]: l } })), bd: 'transparent', bg: on ? '#fff' : 'transparent', fg: on ? '#0F172A' : '#64748B', sh: on ? '0 1px 2px rgba(15,23,42,.08),0 1px 4px rgba(15,23,42,.06)' : 'none' }; }) }; }
  selector(k, label, opts) { const v = +(this.state.sel[k] || 0); const icon = { Station: IC.weather, 'Weather station': IC.weather, Probe: IC.soil, Device: 'M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7', Pen: I.flame, Season: I.cal, Year: I.cal, Period: I.cal, Source: I.scale }[label] || 'M4 6h16M7 12h10M10 18h4'; return { v: Math.min(v, opts.length - 1), sel: { label, icon, value: String(Math.min(v, opts.length - 1)), opts: opts.map((o, i) => ({ v: String(i), label: o })), set: e => { const n = +e.target.value; this.setState(st => ({ sel: { ...st.sel, [k]: n } })); } } }; }

  fcVals(cur, f, pv, max7) {
    const s = this.state, DAY = 864e5, T0 = new Date(2026, 10, 6);
    const WD = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const D = [['Partly cloudy', 29, 13, 20, 0.1], ['Sunny', 29, 14, 20, 0], ['Sunny', 31, 14, 0, 0], ['Sunny', 26, 12, 0, 0], ['Sunny', 25, 9, 0, 0], ['Showers', 27, 11, 40, 2.4], ['Partly cloudy', 29, 16, 20, 0.3], ['Sunny', 31, 16, 0, 0], ['Partly cloudy', 30, 18, 40, 0.8], ['Partly cloudy', 25, 14, 40, 0.6], ['Partly cloudy', 24, 12, 30, 0.2]].map(([cond, hi, lo, pop, mm], i) => { const dt = new Date(+T0 + i * DAY); return { i, cond, hi: hi + (pv ? (i % 2 ? 1 : -1) : 0), lo, pop, mm, n: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : WD[dt.getDay()], d: dt.getDate() + ' Nov', dl: dt.getDate() + ' Nov 2026' }; });
    const temp = (d, hr) => { const x = D[d]; return Math.round(x.lo + (x.hi - x.lo) * (0.5 + 0.5 * Math.sin((hr - 9) / 24 * 2 * Math.PI))); };
    const wind = (d, hr) => Math.max(2, Math.round(16 + 9 * Math.sin((hr - 8) / 24 * 2 * Math.PI) + (d % 3) * 3 - 2));
    const hum = (d, hr) => { const x = D[d]; return Math.round(88 - (temp(d, hr) - x.lo) / Math.max(1, x.hi - x.lo) * 62 + (x.pop > 30 ? 8 : 0)); };
    const dew = (d, hr) => Math.round(temp(d, hr) - (100 - hum(d, hr)) / 5);
    const dT = (d, hr) => Math.max(0, Math.round((temp(d, hr) - dew(d, hr)) * 0.5));
    const cloud = (d, hr) => { const c = D[d].cond, b = c === 'Sunny' ? 12 : c === 'Showers' ? 72 : 45; return Math.max(0, Math.min(100, Math.round(b + 22 * Math.sin((hr + d * 3) / 5)))); };
    const rainH = (d, hr) => D[d].mm ? +(Math.max(0, D[d].mm / 6 * Math.sin((hr - 10) / 8 * Math.PI))).toFixed(1) : 0;
    const kind = (cond, hr) => { const night = hr < 6 || hr >= 19; const k = cond === 'Showers' && hr >= 11 && hr <= 18 ? 'rain' : night ? (cond === 'Sunny' ? 'moon' : 'mc') : cond === 'Sunny' ? 'sun' : 'pc'; return { sun: k === 'sun', pc: k === 'pc', moon: k === 'moon', mc: k === 'mc', rain: k === 'rain' }; };
    const hl = hr => (hr % 12 || 12) + (hr < 12 ? ' am' : ' pm');
    const hl2 = hr => String(hr % 12 || 12).padStart(2, '0') + ':00 ' + (hr < 12 ? 'am' : 'pm');
    const g = { dash: cur === 'dash', d10: cur === 'd10', spray: cur === 'spray', loc: umLoc(f) };
    if (cur === 'dash') {
      const di = Math.min(10, Math.max(0, s.fcDay || 0)), x = D[di];
      const hrs = di === 0 ? [16, 17, 18, 19, 20, 21, 22, 23] : [0, 3, 6, 9, 12, 15, 18, 21];
      const ht = s.fcHeroTab === 'rain' ? 'rain' : 'temp';
      const vals = hrs.map(hr => ht === 'temp' ? temp(di, hr) : rainH(di, hr));
      const mx = Math.max(...vals), mn = Math.min(...vals), rg = Math.max(1, mx - mn);
      const nowH = di === 0 ? 16 : 12, tNow = temp(di, nowH), w = wind(di, nowH);
      const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'], dIx = (di + 3) % 8;
      const uv = di === 0 ? 2.4 : +(x.cond === 'Sunny' ? 9.5 - di * 0.2 : 6.1).toFixed(1);
      const sprayR = this.sprayRate(temp(di, nowH), w, cloud(di, nowH), dT(di, nowH));
      g.hero = { time: di === 0 ? '04:00 pm' : '12:00 pm', ic: kind(x.cond, nowH), t: tNow + '°', hi: x.hi + '°', lo: x.lo + '°', feels: (tNow - Math.round(w / 5)) + '°', cond: x.cond, pres: (1012 - di % 4) + ' hPa', rain: x.pop + '%', wind: w + ' km/h',
        isRain: ht === 'rain', showPts: ht !== 'rain' || vals.reduce((a, b) => a + b, 0) > 0, sub: ht === 'rain' ? vals.reduce((a, b) => a + b, 0).toFixed(1) + ' mm over 16 hrs' : '', ticks: [3, 2, 1, 0].map(k => { const M3 = Math.max(3, Math.ceil(mx)); return { v: (M3 * k / 3).toFixed(1), y: (10 + (3 - k) * 26.67).toFixed(1) + '%' }; }), tabs: [['temp', 'Temperature'], ['rain', 'Rainfall']].map(([k, l]) => ({ l, op: ht === k ? 1 : .65, bd: ht === k ? '#fff' : 'transparent', go: () => this.setState({ fcHeroTab: k }) })),
        pts: vals.map((v, i) => (i / 7 * 100).toFixed(1) + ',' + (ht === 'temp' ? (10 + (mx - v) / rg * 70) : (90 - v / Math.max(3, Math.ceil(mx)) * 80)).toFixed(1)).join(' '),
        dots: vals.map((v, i) => ({ x: (i / 7 * 100).toFixed(1) + '%', y: (ht === 'temp' ? (10 + (mx - v) / rg * 70) : (90 - v / Math.max(3, Math.ceil(mx)) * 80)).toFixed(1) + '%', v: ht === 'temp' ? v + '°' : v + ' mm', l: i % 2 === 0 || i === 7 ? hl(hrs[i]) : '', tip: (ht === 'temp' ? 'Forecast temperature' : 'Forecast rainfall') + ' at ' + hl(hrs[i]) + ': ' + (ht === 'temp' ? v + '°C' : v + ' mm') })) };
      g.m = { wind: w + ' km/h', dir: dirs[dIx], rot: (dIx * 45 + 180) + 'deg', pop: x.pop + '%', mm: x.mm + ' mm', pres: (1012 - di % 4) + ' hPa', prot: (20 - di * 6) + 'deg', uv: String(uv), uvl: uv < 3 ? 'Low' : uv < 6 ? 'Moderate' : uv < 8 ? 'High' : 'Very high', hum: hum(di, nowH) + '%', dew: dew(di, nowH) + '°', dt: dT(di, nowH) + '°', fog: hum(di, 5) > 85 ? 'Moderate' : 'Low', spray: sprayR.toUpperCase(), sprayFg: { Good: '#15803D', Marginal: '#B45309', Unsuitable: '#B91C1C' }[sprayR] };
      g.dayTitle = x.n === 'Today' || x.n === 'Tomorrow' ? x.n : x.n + ' ' + x.d;
      g.desc = x.cond + '. Winds ' + dirs[dIx].toLowerCase().replace('se', 'southeasterly').replace('sw', 'southwesterly').replace('ne', 'northeasterly').replace('nw', 'northwesterly') + ' ' + (w - 5) + ' to ' + (w + 8) + ' km/h' + (x.pop ? ', ' + x.pop + '% chance of rain.' : '.') + ' High ' + x.hi + '°, low ' + x.lo + '°.';
      g.desc = g.desc.replace(/Winds (n|e|s|w) /, (m0, c) => 'Winds ' + ({ n: 'northerly', e: 'easterly', s: 'southerly', w: 'westerly' })[c] + ' ');
      g.prev = () => this.setState({ fcDay: Math.max(0, di - 1) }); g.next = () => this.setState({ fcDay: Math.min(10, di + 1) }); g.prevOp = di > 0 ? 1 : .35; g.nextOp = di < 10 ? 1 : .35;
      g.hours = hrs.map(hr => ({ l: hl(hr), ic: kind(x.cond, hr), t: temp(di, hr) + '°' }));
      g.days = D.slice(1, max7 ? 7 : 11).map(y => ({ n: y.n, d: y.d, di: kind(y.cond, 13), ni: kind(y.cond, 22), r: y.pop + '%', hi: y.hi + '°', lo: y.lo + '°', bg: y.i === di ? '#E0F2F1' : 'transparent', go: () => this.setState({ fcDay: y.i }) }));
      g.soil = [['Surface (0 cm)', '\u2014', '33.0°C'], ['0–1 cm', '\u2014', '\u2014'], ['0–10 cm', '7.34 kg/m²', '27.8°C'], ['10–28 cm', '33.03 kg/m²', '23.8°C'], ['28–100 cm', '104.46 kg/m²', '19.9°C'], ['100–289 cm', '265.34 kg/m²', '16.3°C']].map(([d, m, t], i) => ({ d, m, t, bg: i === 0 ? '#F8C27A' : '#fff', fg: i === 0 ? '#5B3A0A' : '#0F172A' }));
      let rain = 0, gdd = 0, chill = 0, wet = 0; D.forEach((y, d) => { gdd += Math.max(0, (y.hi + y.lo) / 2 - 10); for (let hr = 0; hr < 24; hr++) { const r = rainH(d, hr); rain += r; wet = Math.max(wet, r); if (temp(d, hr) < 7) chill++; } });
      g.range = max7 ? '6 Nov – 12 Nov' : '6 Nov – 16 Nov'; g.rangeN = max7 ? '7 days' : '11 days';
      g.sum = [['Rain', 'mm', rain.toFixed(1), '#0EA5A4', '#ECFEFF', 'M7 13a4 4 0 0 1 .5-7.97A5 5 0 0 1 17 6a3.5 3.5 0 0 1 0 7zM8.5 16l-.8 3M12 16l-.8 3M15.5 16l-.8 3'], ['Evapotranspiration', 'mm', '87.1', '#043C2C', '#E7F3EC', 'M12 3s-6 6.4-6 10.5a6 6 0 0 0 12 0C18 9.4 12 3 12 3zM10 15a2.5 2.5 0 0 0 4 0'], ['Warmest', '°C', String(Math.max(...D.map(y => y.hi))), '#F87171', '#FEF2F2', 'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z'], ['Coldest', '°C', String(Math.min(...D.map(y => y.lo))), '#0EA5E9', '#F0F9FF', 'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0zM11.5 10v7'], ['Growing Degree Days', '°C', String(Math.round(gdd)), '#22C55E', '#ECFDF5', 'M12 21v-9M12 12c0-4 3-6 7-6 0 4-3 6-7 6zM12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5z'], ['Chill Hours', 'h', String(chill), '#64748B', '#F1F5F9', 'M12 2v20M3.3 7l17.4 10M3.3 17l17.4-10M9 4l3 2 3-2M9 20l3-2 3 2'], ['Solar Exposure', 'MJ/m²', '233.7', '#F59E0B', '#FFFBEB', 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4'], ['Wettest Hour', 'mm', wet.toFixed(1), '#0EA5A4', '#ECFEFF', 'M10 3S5 8.6 5 12.2a5 5 0 0 0 10 0C15 8.6 10 3 10 3zM19 6v6M19 15.5h.01']].map(([l, u, v, c, bg, d]) => ({ l, u, v, c, bg, d }));
    } else if (cur === 'd10') {
      const R = s.fcRange || {};
      const MET = [['temp', 'Temperature', '#E76F51', '°C', (d, hr) => temp(d, hr), 0], ['rain', 'Rainfall', '#0EA5A4', ' mm', rainH, 1], ['hum', 'Humidity', '#3B82F6', ' %', hum, 0], ['wind', 'Wind Speed', '#14B8A6', ' km/h', wind, 0], ['dew', 'Dew Point', '#22C55E', '°C', dew, 0], ['dt', 'Delta T', '#84CC16', '°C', dT, 0]];
      g.charts = MET.map(([k, t, c, u, fn, dp]) => {
        const r = R[k] || 'Today', step = r === 'Today' ? 1 : r === '3d' ? 3 : 6, endD = r === 'Today' ? 0 : r === '3d' ? 2 : r === '7d' ? 6 : 9;
        const pts = []; for (let d = 0; d <= endD; d++) for (let hr = d === 0 ? 16 : 0; hr < 24; hr += step) pts.push([d, hr]);
        const labels = pts.map(([d, hr]) => ({ s: r === 'Today' ? hl2(hr) : D[d].d + (step < 6 || hr ? ' ' + hl(hr) : ''), full: D[d].d + ' ' + hl(hr) }));
        const v = pts.map(([d, hr]) => fn(d, hr));
        const ch = this.apexC('f' + r + k, { t, unit: u, dp, zero: k !== 'temp' && k !== 'dew', maxL: 7, layers: [k === 'rain' ? { type: 'bars', name: t, v, c, hc: '#0F766E' } : { type: 'area', name: t, v, c }] }, labels);
        ch.chips = (max7 ? ['Today', '3d', '7d'] : ['Today', '3d', '7d', '10d']).map(l => ({ l, bg: l === r ? '#fff' : 'transparent', fg: l === r ? '#043C2C' : '#475569', sh: l === r ? '0 1px 2px rgba(15,23,42,.1)' : 'none', go: () => this.setState(st => ({ fcRange: { ...(st.fcRange || {}), [k]: l }, cHov: null })) }));
        return ch;
      });
    } else {
      const sdI = Math.min(10, Math.max(0, s.sprayDay || 0)), gray = !!s.sprayGray;
      const COL = gray ? { Good: ['#E5E7EB', '#111827'], Marginal: ['#9CA3AF', '#111827'], Unsuitable: ['#4B5563', '#fff'] } : { Good: ['#4CD08A', '#0F2E1D'], Marginal: ['#F6C177', '#4A2F05'], Unsuitable: ['#F7977A', '#4A1405'] };
      const hrs = sdI === 0 ? [16, 17, 18, 19, 20, 21, 22, 23] : Array.from({ length: 24 }, (_, i) => i);
      const rT = v => v >= 29 ? 'Unsuitable' : v >= 27 ? 'Marginal' : 'Good', rW = v => v > 20 ? 'Unsuitable' : v > 15 || v < 3 ? 'Marginal' : 'Good', rC = v => v > 50 ? 'Unsuitable' : v > 40 ? 'Marginal' : 'Good', rD = v => v > 10 ? 'Unsuitable' : v > 8 || v < 2 ? 'Marginal' : 'Good';
      g.sDays = D.slice(0, max7 ? 7 : 11).map(y => { const on = y.i === sdI; return { n: y.n, d: y.dl, bg: on ? '#043C2C' : '#E5E7EB', fg: on ? '#fff' : '#1F2937', go: () => this.setState({ sprayDay: y.i }) }; });
      g.modes = [[false, 'Colour'], [true, 'Greyscale']].map(([v, l]) => ({ l, bg: gray === v ? '#fff' : 'transparent', fg: gray === v ? '#0F172A' : '#64748B', go: () => this.setState({ sprayGray: v }) }));
      g.legend = ['Good', 'Marginal', 'Unsuitable'].map(l => ({ l, c: COL[l][0] }));
      g.infoOpen = !!s.sprayInfo; g.toggleInfo = () => this.setState(st => ({ sprayInfo: !st.sprayInfo }));
      const cell = hr => { const r = this.sprayRate(temp(sdI, hr), wind(sdI, hr), cloud(sdI, hr), dT(sdI, hr)); return { t: hl(hr), r: r.toUpperCase(), bg: COL[r][0], fg: COL[r][1], tip: hl(hr) + ': ' + r }; };
      const am = hrs.filter(x => x < 12), pm = hrs.filter(x => x >= 12);
      g.overall = [['AM', am], ['PM', pm]].filter(([, l]) => l.length).map(([l, list]) => ({ l, n: String(list.length), cells: list.map(cell) }));
      g.dN = String(hrs.length); g.dMin = '0'; const many = hrs.length > 12;
      g.dHead = hrs.map(hr => ({ l: hl(hr) }));
      g.detail = [['Temperature', 'Suitability of temperature', 'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z', hr => temp(sdI, hr), rT, v => v + '°'], [many ? 'Wind Speed (km/h)' : 'Wind Speed', 'Assessment of wind speed', 'M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7', hr => wind(sdI, hr), rW, v => many ? String(v) : v + ' km/h'], ['Cloud Cover', 'Assessment of cloud cover', 'M7 18h10.5a4 4 0 0 0 .4-8 5.8 5.8 0 0 0-11.2 1.3A3.4 3.4 0 0 0 7 18z', hr => cloud(sdI, hr), rC, v => v + '%'], ['Delta T', 'Suitability of conditions', 'M12 4 3 20h18z', hr => dT(sdI, hr), rD, v => v + '°']].map(([l, sub, d, fn, rf, fm]) => ({ l, s: sub, d, cells: hrs.map(hr => { const v = fn(hr), r = rf(v); return { v: fm(v), bg: COL[r][0], fg: COL[r][1] }; }) }));
    }
    return g;
  }
  sprayRate(t, w, c, d) { const o = ['Good', 'Marginal', 'Unsuitable']; const r = [t >= 29 ? 2 : t >= 27 ? 1 : 0, w > 20 ? 2 : (w > 15 || w < 3) ? 1 : 0, c > 50 ? 2 : c > 40 ? 1 : 0, d > 10 ? 2 : (d > 8 || d < 2) ? 1 : 0]; return o[Math.max(...r)]; }
  rangeChips(k, def, opts) {
    const s = this.state, per = (s.rPer || {})[k] || def, cr = (s.rCR || {})[k] || { from: '2026-08-26', to: '2026-09-09' }, cd = s.rCD && s.rCD.k === k ? s.rCD : { k, ...cr }, open = s.rOpen === k;
    const chips = opts.map(v => { const on = per === v; return { label: v, dot: '', cal: v === 'Custom', go: () => v === 'Custom' ? this.setState({ rOpen: open ? null : k, rCD: { k, ...cr } }) : this.setState(st => ({ rPer: { ...(st.rPer || {}), [k]: v }, rOpen: null })), bd: 'transparent', bg: on ? '#fff' : 'transparent', fg: on ? '#0F172A' : '#64748B', sh: on ? '0 1px 2px rgba(15,23,42,.08),0 1px 4px rgba(15,23,42,.06)' : 'none' }; });
    const pop = open ? { from: cd.from, to: cd.to, setFrom: e => this.setState({ rCD: { ...cd, from: e.target.value } }), setTo: e => this.setState({ rCD: { ...cd, to: e.target.value } }), apply: () => this.setState(st => ({ rCR: { ...(st.rCR || {}), [k]: { from: cd.from, to: cd.to } }, rPer: { ...(st.rPer || {}), [k]: 'Custom' }, rOpen: null })) } : null;
    const fd = x => x.split('-').reverse().join('/');
    return { per, cr, chips, pop, txt: per === 'Custom' ? fd(cr.from) + ' \u2013 ' + fd(cr.to) : '' };
  }
  newAlert(devIdx) { return { msgEd: false, showAll: false, addK: '', name: '', device: devIdx == null ? '' : String(devIdx), enabled: true, roles: ['Owner'], extra: '', via: ['Email', 'Mobile Notification'], freq: 'Every hour', priority: 'Medium', msg: '', conds: [], addK: '' }; }
  curProbe() { const pr = devsOf(this.state.farm).filter(d => d.type === 'soil'); return pr[Math.min(+(this.state.sel['soil.dashboard'] || 0), pr.length - 1)]; }
  curStation() { const st = devsOf(this.state.farm).filter(d => d.type === 'weather'); return st[Math.min(+(this.state.sel['weather.stations'] || 0), st.length - 1)]; }
  gen() {
    const s = this.state, fi = s.farm, f = FARMS[fi], p = s.page, sub = PAGES[p].tabs ? this.subOf(p) : '', key = p + '.' + sub, sd = fi * 97 + 3;
    const devs = devsOf(fi), g = { upw: false, dp: false, dpList: false };
    if (p === 'weather' && sub === 'stations') {
      const st = devs.filter(d => d.type === 'weather'); const S = this.selector(key, 'Station', st.map(d => d.name)); const dv = st[S.v] || st[0]; const q = sd + S.v * 13;
      g.stPick = { lbl: 'Select station', open: !!s.stDD, toggle: () => this.setState(x => ({ stDD: !x.stDD })), cur: { label: dv.name, prov: dv.provider }, opts: st.map((d, k) => ({ label: d.name, prov: d.provider, bg: k === S.v ? '#F0FDF4' : 'transparent', go: () => this.setState(x => ({ sel: { ...x.sel, [key]: k }, stDD: false })) })) }; g.meta = 'Last sampling · ' + (dv.status === 'Offline' ? 'No recent data' : '04 Nov 2026, ' + dv.last);
      const sc = this.sections(key, [['dashboard', 'Dashboard'], ['temprain', 'Temperature'], ['rainfall', 'Rainfall'], ['humidity', 'Humidity & Delta T'], ['wind', 'Wind & Pressure'], ['solarUv', 'Solar & UV'], ['et', 'Evapotranspiration'], ['ai', 'Insights'], ['info', 'Info']]); g.sections = sc.items.map(x => x.label === 'Info' ? { ...x, d: I.info } : x.label === 'Humidity & Delta T' ? { ...x, label: 'Humidity & ΔT' } : x);
      if (sc.cur === 'info') g.info = this.info(dv, f);
      else { g.embedWx = true; g.embedTab = sc.cur; g.embedDev = dv.ref; }
    } else if (p === 'weather' && sub === 'forecast') {
      const S = this.selector(key, 'Provider', ["Jane's Weather (Australia)"]);
      const sc = this.sections(key, [['dash', 'Dashboard'], ['d10', '3–10 Day Forecast'], ['spray', 'Spray Conditions']]); g.inl = { secs: sc.items, sel: S.sel };
      g.fc = this.fcVals(sc.cur, f, S.v);
    } else if (p === 'weather' && sub === 'historical') {
      g.hist = this.histVals(key, sd);
    } else if (p === 'season' && sub === 'dashboard') {
      g.selector = this.selector(key, 'Season', ['Dec 2025 – Dec 2026', 'Dec 2024 – Dec 2025', 'Custom season…']).sel;
      const sc = this.sections(key, [['rain', 'Cumulative rainfall'], ['temp', 'Temperature'], ['gdd', 'Growing degree days']]); g.sections = sc.items;
      g.toggle = { label: 'Show forecast', go: () => this.setState(st => ({ showFc: !st.showFc })), bg: s.showFc ? '#0EA5A4' : '#cbd5e1', knob: s.showFc ? '18px' : '2px' };
      const wk = ['Dec', 'Feb', 'Apr', 'Jun', 'Aug', 'Oct', 'Dec'];
      let obs, avg, fc, unit, title;
      if (sc.cur === 'rain') { const w = wave(52, 17, 7, 32, 52, 14, sd + 30).map(v => Math.max(0, v)); obs = cum(w.slice(0, 48)); avg = cum(wave(52, 16, 7, 32, 52, 0, 1)); fc = cum([obs[47], 9, 11, 8, 6]).slice(1).map(v => +(v - obs[47] + obs[47]).toFixed(1)); fc = [obs[47]].concat(cum([9, 11, 8, 6]).map(v => +(v + obs[47]).toFixed(1))); unit = ' mm'; title = 'Cumulative rainfall'; }
      else if (sc.cur === 'temp') { obs = wave(48, 14, 7, 8, 52, 2.5, sd + 31); avg = wave(52, 13.5, 7, 8, 52, 0, 1); fc = [obs[47], 19.2, 20.4, 21.1, 22.3]; unit = '°'; title = 'Mean temperature'; }
      else { obs = cum(wave(48, 9, 7, 8, 52, 2, sd + 32).map(v => Math.max(0, v) * 7)); avg = cum(wave(52, 8.6, 7, 8, 52, 0, 1).map(v => Math.max(0, v) * 7)); fc = [obs[47]].concat(cum([88, 96, 101, 108]).map(v => v + obs[47])); unit = ''; title = 'Growing degree days'; }
      const SCOL = ['#15803d', '#3b82f6', '#9ca3af'], SN = ['2023/2024', '2024/2025', '2025/2026'], mk = k => { const sdk = sd + 30 + k * 7; return sc.cur === 'rain' ? cum(wave(52, 15 - k * 1.8 + (k === 2 ? 4 : 0), 7, 32, 52, 14, sdk).map(v => Math.max(0, v))) : sc.cur === 'temp' ? wave(52, 14 + k * .4, 7, 8, 52, 2.5, sdk) : cum(wave(52, 9 + k * .3, 7, 8, 52, 2, sdk).map(v => Math.max(0, v) * 7)); };
      const lines = SN.map((n, k) => [n, SCOL[k], mk(k), { area: k === 1 && sc.cur !== 'temp' }]);
      if (s.showFc) lines.push(['Forecast', '#f59e0b', lines[0][2].map((v, i) => i < 47 ? null : v).filter(v => v != null).map((v, i) => +(v + i * (sc.cur === 'temp' ? .1 : 2.4)).toFixed(1)), { from: 47, dash: true }]);
      g.metrics = sc.cur === 'rain' ? [M('Season rainfall to date', '512 mm', '+8% vs long-term average', true), M('Days into season', '338 of 365'), M('Forecast to season end', '+34 mm'), M('Wettest month', 'Jul · 98 mm')] : sc.cur === 'temp' ? [M('Season mean', '14.2 °C', '+0.6° vs average', false), M('Hottest week', 'Feb · 24.8 °C'), M('Frost days', '23'), M('Forecast next 4 weeks', '20.8 °C')] : [M('GDD to date', '2,914'), M('vs long-term average', '+4%', 'Ahead of average', true), M('Forecast to season end', '+393'), M('Base temperature', '5 °C')];
      g.charts = [L(title, 'Dec 2025 – Dec 2026 · weekly', wk, lines, { u: unit === ' mm' ? '' : unit, min: sc.cur === 'temp' ? undefined : 0, h: '280px' }),
        B('This season by month', 'Monthly totals Dec–Oct', MON.slice(0, 11).map((m, i) => [m, wave(11, 45, 30, 7, 12, 20, sd + 33)[i]]), { half: true, c: '#0EA5A4' }),
        L('Season comparison', 'This season vs reference periods', wk, [['2025–26', '#0EA5A4', obs], ['10-year average', '#94a3b8', avg, { dash: true }], ['Driest decile', '#dc2626', avg.map(v => +(v * .7).toFixed(1)), { dash: true }]], { half: true })];
      { const MOS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], MO = MOS.map(x => ({ v: x, label: x })), YR = ['2023', '2024', '2025', '2026', '2027'].map(x => ({ v: x, label: x }));
        const DEF = { sm: 'Dec', sy: '2025', em: 'Dec', ey: '2026' }, cs = s.cs || DEF, ap = s.csA || DEF, lab = ap.sm + ' ' + ap.sy + ' \u2192 ' + ap.em + ' ' + ap.ey;
        const setCs = o => this.setState(st => ({ cs: { ...(st.cs || cs), ...o } }));
        const SL = ['2025/2026', '2024/2025', '2023/2024', '2022/2023', '2021/2022', '2020/2021', '2019/2020', '2018/2019', '2017/2018', '2016/2017', '2015/2016'], PAL = ['#9ca3af', '#3b82f6', '#15803d', '#a855f7', '#14b8a6', '#ec4899', '#f97316', '#0ea5e9', '#84cc16', '#eab308', '#64748b'];
        const dsel = (s.dSeasons || ['2023/2024', '2024/2025', '2025/2026']).filter(n => SL.includes(n)), sel = SL.filter(n => dsel.includes(n)).reverse(), CUR = '2025/2026', FUT = '2026/2027', FC = 49, N = 52;
        const EXT = !!s.showFc, NT = EXT ? 2 * N : N, si = MOS.indexOf(ap.sm), xl = EXT ? Array.from({ length: 13 }, (_, i) => { const m = si + i * 2; return i > 6 && Math.floor(m / 12) !== Math.floor((m - 2) / 12) ? String(+ap.sy + Math.floor(m / 12)) : MOS[m % 12]; }) : Array.from({ length: 7 }, (_, i) => MOS[(si + i * 2) % 12]), bl = Array.from({ length: 13 }, (_, i) => MOS[(si + i) % 12]);
        const rs = n => sd + SL.indexOf(n) * 7 + si;
        const cumR = n => cum(wave(N, 15 - (SL.indexOf(n) % 4) * 1.6, 7, 32, 52, 14, rs(n)).map(v => Math.max(0, v))), tv = (n, m, a) => wave(N, m, a, 8, 52, 2.5, rs(n) + m);
        const trim = (n, v) => n === CUR ? v.slice(0, FC + 1) : v, fcOf = v => { const l = v[FC]; return [l].concat([1, 2, 3, 4].map(i => +(l + i * (v[FC] - v[FC - 4]) / 4).toFixed(1))); };
        const rLines = sel.map(n => [n, PAL[SL.indexOf(n)], trim(n, cumR(n)), n === FUT ? { dash: true } : { area: n === '2024/2025' }]); if (s.showFc) { const l0 = trim(CUR, cumR(CUR))[FC]; let c0 = l0; rLines.push(['Forecast', '#f59e0b', [l0].concat(wave(52, 14, 9, 30, 52, 8, sd + 901).map(x => +(c0 += Math.max(0, x)).toFixed(1))), { from: FC, dash: true, area: true }]); }
        const tLines = []; sel.forEach(n => [['Max', '#15803d', 22, 5], ['Min', '#ea6a47', 11, 4], ['Average', '#9ca3af', 16.5, 4]].forEach(([t, c, m, a]) => { const v = tv(n, m, a); tLines.push([n + t, c, trim(n, v), n === FUT ? { dash: true } : {}]); if (s.showFc && n === CUR) tLines.push([n + t + 'f', c, wave(NT, m, a, 8, 52, 2.5, rs(n) + m).slice(FC, FC + 53), { from: FC, dash: true }]); }));
        const bars = []; bl.forEach((m, mi) => { sel.forEach((n, k) => { const v = Math.max(0, wave(13, 55, 60, 6, 12, 25, rs(n) + 3)[mi] || 0), isF = (s.showFc && n === CUR && mi >= 11) || n === FUT; bars.push([k === 1 ? m : '', +v.toFixed(1), n === FUT ? '#FDBA74' : isF ? '#f59e0b' : PAL[SL.indexOf(n)]]); }); bars.push(['', 0, 'transparent']); });
        const CH = { rain: { ...L('Cumulative Rainfall', '', xl, rLines, { min: 0, h: '260px' }), legend: sel.map(n => ({ name: n === FUT ? n + ' · Helios forecast' : n, c: PAL[SL.indexOf(n)], ls: n === FUT ? 'dashed' : 'solid' })).concat(s.showFc ? [{ name: 'Helios forecast \u00b7 11 Nov 2026 \u2013 11 Nov 2027', c: '#f59e0b', ls: 'dashed' }] : []) },
          temp: { ...L('Seasonal Temperature', '', xl, tLines, { h: '260px' }), legend: [{ name: 'Max', c: '#15803d', ls: 'solid' }, { name: 'Min', c: '#ea6a47', ls: 'solid' }, { name: 'Average', c: '#9ca3af', ls: 'solid' }, ].concat(s.showFc ? [{ name: 'Dashed = Helios forecast to 11 Nov 2027', c: '#cbd5e1', ls: 'dashed' }] : []) },
          bars: { ...B('Seasonal Rainfall', '', bars, { h: '260px' }), legend: sel.map(n => ({ name: n === FUT ? n + ' · Helios forecast' : n, c: PAL[SL.indexOf(n)], ls: n === FUT ? 'dashed' : 'solid' })).concat(s.showFc ? [{ name: 'Forecast', c: '#f59e0b', ls: 'solid' }] : []) } };
        const pick = ['rain', 'temp', 'bars'].filter(k => (s.dCharts || ['rain']).includes(k)), chH = pick.length === 1 ? '300px' : pick.length === 2 ? '130px' : '80px';
        const upd = o => this.setState(o);
        g.sd = { label: lab, cust: !!s.seasonCust, noCust: !s.seasonCust, btn: s.seasonCust ? 'Close' : 'Create custom season', toggle: () => this.setState(st => ({ seasonCust: !st.seasonCust })),
          sm: cs.sm, sy: cs.sy, em: cs.em, ey: cs.ey, months: MO, years: YR, setSm: e => setCs({ sm: e.target.value }), setSy: e => setCs({ sy: e.target.value }), setEm: e => setCs({ em: e.target.value }), setEy: e => setCs({ ey: e.target.value }),
          info: cs.sy !== cs.ey ? 'Runs across two calendar years' : 'Within one calendar year', info2: cs.sm + ' ' + cs.sy + ' \u2192 ' + cs.em + ' ' + cs.ey + ' \u00b7 ' + Math.max(1, (+cs.ey - +cs.sy) * 12 + MOS.indexOf(cs.em) - MOS.indexOf(cs.sm) + 1) + ' months. Seasons will be labelled ' + cs.sy + '/' + cs.ey + '.',
          apply: () => this.setState(st => ({ csA: st.cs || cs, sLabel: lab, seasonCust: false })), cancel: () => this.setState({ seasonCust: false }),
          stack: sel.length + ' seasons stacked', dsOpen: !!s.dsOpen, dsToggle: () => this.setState(st => ({ dsOpen: !st.dsOpen })),
          dsList: SL.map(n => { const on = dsel.includes(n); return { label: n, tick: on ? '\u2713' : '', bd: on ? '#15803d' : '#CBD5E1', bg: on ? '#15803d' : '#fff', go: () => this.setState(st => { const c = st.dSeasons || dsel; return { dSeasons: c.includes(n) ? c.filter(x => x !== n) : c.concat(n) }; }) }; }),
          chips: sel.map(n => ({ label: n, dot: PAL[SL.indexOf(n)], op: 1, go: () => this.setState(st => ({ dSeasons: (st.dSeasons || dsel).filter(x => x !== n) })) })),
          fc: !!s.showFc, fcBd: s.showFc ? '#F59E0B' : '#CBD5E1', fcBg: s.showFc ? '#F59E0B' : '#fff', fcTick: s.showFc ? '\u2713' : '', toggleFc: () => this.setState(st => ({ showFc: !st.showFc })),
          line: sel.length + ' seasons stacked \u00b7 ' + sel.join(', ') + ' \u00b7 ' + ap.sm + ' \u2013 ' + ap.em + (s.showFc || sel.includes(FUT) ? ' \u00b7 with forecast \u00b7 Helios' : '') + ' \u00b7 Perth, Western Australia',
          ck: { label: pick.length === 3 ? 'All charts' : pick.length + ' of 3 charts', open: !!s.dCkOpen, toggle: () => this.setState(st => ({ dCkOpen: !st.dCkOpen })), opts: [['rain', 'Cumulative rainfall'], ['temp', 'Seasonal temperature'], ['bars', 'Seasonal rainfall']].map(([v, l]) => { const on = pick.includes(v); return { l, bd: on ? '#15803d' : '#CBD5E1', bg: on ? '#15803d' : '#fff', chk: on ? 1 : 0, go: () => this.setState(st => { const c = st.dCharts || ['rain']; if (on && c.length === 1) return null; return { dCharts: on ? c.filter(x => x !== v) : c.concat(v) }; }) }; }) } };
        g.charts = pick.map(k => ({ ...CH[k], h: chH, span: '2' }));
        g.zbar = { chips: [], txt: g.sd.line, cal: null, dd: { label: 'Graphs (' + pick.length + ')', open: g.sd.ck.open, toggle: g.sd.ck.toggle, opts: g.sd.ck.opts } };
        g.cw = 'grid-column:2;grid-row:1;min-width:0;background:#fff;border:1px solid #E2E8F0;border-radius:16px;box-shadow:0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03);padding:14px;display:flex;flex-direction:column;gap:12px';
        g.sections = null; g.toggle = null; g.selector = null; g.metrics = null; g.chCols = 'minmax(260px,340px) minmax(0,1fr)'; }

    } else if (p === 'season' && sub === 'historical') {
      const RG = s.hRange || 'Year'; g.chips2 = ['3M', '6M', '1Y', 'Year'].map(r => { const on = r === RG; return { label: r, dot: '', go: () => this.setState({ hRange: r }), bd: 'transparent', bg: on ? '#E0F2F1' : 'transparent', fg: on ? '#0F766E' : '#475569', sh: 'none' }; });
      const YS = Array.from({ length: 27 }, (_, i) => String(2026 - i)); g.selectorL = this.selector(key, 'Year', YS).sel; g.prov = 'SILO Weather Station';
      g.ax = this.seasonHist(s, sd, +YS[+(s.sel[key] || 0)], RG);
    } else if (p === 'season' && sub === 'forecast') {
      g.prov = 'Helios'; g.ax = this.seasonFc(s, sd);
    } else if (p === 'season' && sub === 'climate') {
      g.metrics = [M('Average max temperature', '23.5 \u00b0C', '-4.67% vs long-term', false), M('Average min temperature', '13.1 \u00b0C', '-3.11% vs long-term', false), M('Total rainfall', '514 mm', '-25.6% vs long-term', false), M('Average humidity', '49.4%', '+10.2% vs long-term', true)];
      g.table = T('Climate extremes \u00b7 2026', ['Measure', 'Months', 'Detail'], '1.4fr 1fr 2fr', [['Hot months (>32\u00b0C)', 'Jan, Feb, Mar', '10, 12 and 9 hot days'], ['Cold months (<2\u00b0C)', 'None', '\u2014'], ['Wet months (>12.7mm)', 'Mar, May, Jun, Jul, Aug', '1, 1, 3, 1 and 3 wet days'], ['Dry months', 'None', '\u2014']], '560px');
    } else if (p === 'soil' && sub === 'test') {
      const sc = this.sections(key, [['yield', 'Yield'], ['ph', 'Soil pH'], ['props', 'Soil Properties']]); g.sections = sc.items;
      const hs = (i, m) => { const x = Math.sin((i * 7 + m * 13 + 1) * 12.9898) * 43758.5453; return x - Math.floor(x); }, mean = a => a.reduce((x, y) => x + y, 0) / a.length;
      const PP = SUM_PADS, c0 = [f.lng || 147.93, f.lat || -36.27], abs = q => q[1].map(([x, y]) => [+(c0[0] + x).toFixed(5), +(c0[1] + y).toFixed(5)]), llOf = q => { const a = abs(q); return [+(a.reduce((s1, p1) => s1 + p1[0], 0) / a.length).toFixed(5), +(a.reduce((s1, p1) => s1 + p1[1], 0) / a.length).toFixed(5)]; };
      const selP = s.pmSel != null && s.pmSel < PP.length ? s.pmSel : null, pickP = i => () => { if (s.pmSel === i) this._pmReset = true; else this._pmFly = true; this.setState(st => ({ pmSel: st.pmSel === i ? null : i })); };
      const dl = (name, cols, rows) => { const csv = [cols].concat(rows).map(r => r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(',')).join('\n'), a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = name + '.csv'; a.click(); };
      const DL = ['0\u201310', '10\u201320', '20\u201330', '30\u201340', '40\u201350', '50\u201360'], DC = ['#E2A65A', '#C9823F', '#A8652F', '#7E4A26', '#5A341D', '#2F1C10'];
      const rowSt = i => ({ i: String(i), bg: selP === i ? '#DCFCE7' : i % 2 ? '#FAFBFC' : '#fff', bd: selP === i ? '#16A34A' : 'transparent', go: pickP(i) });
      const cell = (t, o = {}) => ({ t, jc: o.jc || 'flex-end', fw: o.fw || 500, fg: '#0F172A', bg: o.bg || 'transparent', dot: o.dot || '' });
      const f2 = v => v.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      if (sc.cur === 'yield' || sc.cur === 'ph') { this._pmC = c0; this._pmKey = f.name + '|' + sc.cur; setTimeout(() => this.syncPm(), 0); }
      if (sc.cur === 'yield') {
        const TA = 117.66, TY = 3567.31, w = PP.map((_, i) => 1.5 + hs(i, 1) * 4.5), sw = w.reduce((a, b) => a + b, 0);
        const ar = w.map(v => Math.round(TA * v / sw * 100) / 100); ar[ar.length - 1] = Math.round((TA - ar.slice(0, -1).reduce((a, b) => a + b, 0)) * 100) / 100;
        const raw = ar.map((a, i) => a * (19 + hs(i, 2) * 22)), k = TY / raw.reduce((a, b) => a + b, 0), yd = raw.map(v => Math.round(v * k * 100) / 100); yd[yd.length - 1] = Math.round((TY - yd.slice(0, -1).reduce((a, b) => a + b, 0)) * 100) / 100;
        const rt = PP.map((_, i) => yd[i] / ar[i]);
        const YS = [['< 20', '#DC2626'], ['20 \u2013 25', '#F59E0B'], ['25 \u2013 30', '#FACC15'], ['30 \u2013 35', '#84CC16'], ['> 35', '#15803D']], yc = v => YS[v < 20 ? 0 : v < 25 ? 1 : v < 30 ? 2 : v < 35 ? 3 : 4][1];
        g.metrics = [M('Total area (ha)', f2(TA)), M('Total yield (t)', f2(TY)), M('Total yield per hectare (t/ha)', f2(TY / TA), 'Total yield \u00f7 Total area')].map(m => ({ ...m, pad: '8px 14px', vfs: '19px' }));
        const COLS = ['Paddock', 'Area (ha)', 'Yield (t)', 't/ha'], CH = [['Paddock', ''], ['Area', 'ha'], ['Yield', 't'], ['Yield', 't/ha']];
        g.pm = { ref: this.pmRef, tref: el => { this._pmTbl = el; }, h: 'calc(100vh - 372px)', mh: '340px', title: 'Yield by paddock', sub: PP.length + ' paddocks \u00b7 click a row or paddock to highlight it', gc: 'minmax(92px,1.6fr) minmax(60px,1fr) minmax(68px,1.1fr) minmax(60px,.9fr)',
          cols: CH.map(([t, u], j) => ({ t, u, al: j ? 'flex-end' : 'flex-start', ta: j ? 'right' : 'left', bg: 'transparent', fg: '#64748B', cur: 'default', tip: '' })),
          rows: PP.map((q, i) => ({ ...rowSt(i), cells: [cell(q[0], { jc: 'flex-start', fw: 600 }), cell(f2(ar[i])), cell(f2(yd[i])), cell(f2(rt[i]), { dot: yc(rt[i]), fw: 600 })] })),
          foot: ['Total', f2(TA), f2(TY), f2(TY / TA)].map((t, j) => ({ t, al: j ? 'right' : 'left' })), legT: 'Yield (t/ha)', leg: YS.map(([n, c]) => ({ n, c })), dep: null,
          exp: () => dl('yield-by-paddock', COLS, PP.map((q, i) => [q[0], ar[i].toFixed(2), yd[i].toFixed(2), rt[i].toFixed(2)])) };
        this._pmPts = PP.map((q, i) => ({ ll: llOf(q), c: yc(rt[i]), l: q[0], sel: selP === i, go: pickP(i), tip: q[0] + ' \u00b7 ' + f2(rt[i]) + ' t/ha' }));
      } else if (sc.cur === 'ph') {
        const DS = this.selector('soilsum.dep', 'Depth', DL.map(d => d + ' cm')), dj = DS.v, OF = [0, -.32, -.28, -.05, .18, .38];
        const ph = PP.map((q, i) => DL.map((_, j) => +Math.max(4.2, Math.min(6.8, (q[0] === 'Hendersons' ? 4.9 : 5.05 + hs(i, 3) * .85) + OF[j] + (hs(i, j + 5) - .5) * .16)).toFixed(1)));
        const PS = [['< 4.5', '#B91C1C'], ['4.5 \u2013 4.8', '#EF4444'], ['4.8 \u2013 5.0', '#F59E0B'], ['5.0 \u2013 5.5', '#FACC15'], ['5.5 \u2013 6.0', '#84CC16'], ['> 6.0', '#15803D']], pc = v => PS[v < 4.5 ? 0 : v < 4.8 ? 1 : v < 5 ? 2 : v < 5.5 ? 3 : v <= 6 ? 4 : 5][1];
        const COLS = ['Paddock'].concat(DL);
        g.pm = { ref: this.pmRef, tref: el => { this._pmTbl = el; }, h: 'calc(100vh - 290px)', mh: '420px', title: 'Soil pH (CaCl\u2082) by depth', sub: 'Click a depth column to show it on the map', gc: 'minmax(86px,1.5fr) repeat(6,minmax(40px,1fr))', dep: DS.sel,
          cols: COLS.map((t, j) => ({ t, u: j ? 'cm' : '', al: j ? 'center' : 'flex-start', ta: j ? 'center' : 'left', bg: j && j - 1 === dj ? '#043C2C' : 'transparent', fg: j && j - 1 === dj ? '#fff' : '#64748B', cur: j ? 'pointer' : 'default', tip: j ? 'Show ' + t + ' cm on map' : '', go: j ? () => this.setState(st => ({ sel: { ...st.sel, 'soilsum.dep': j - 1 } })) : null })),
          rows: PP.map((q, i) => ({ ...rowSt(i), cells: [cell(q[0], { jc: 'flex-start', fw: 600 })].concat(ph[i].map((v, j) => cell(v.toFixed(1), { jc: 'center', fw: j === dj ? 700 : 500, bg: pc(v) + (j === dj ? '55' : '22') }))) })),
          foot: null, legT: 'pH \u00b7 ' + DL[dj] + ' cm', leg: PS.map(([n, c]) => ({ n, c })),
          exp: () => dl('soil-ph-by-depth', COLS.map(c => c === 'Paddock' ? c : c + ' cm'), PP.map((q, i) => [q[0]].concat(ph[i].map(v => v.toFixed(1))))) };
        this._pmPts = PP.map((q, i) => ({ ll: llOf(q), c: pc(ph[i][dj]), l: q[0], sel: selP === i, go: pickP(i), tip: q[0] + ' \u00b7 pH ' + ph[i][dj].toFixed(1) + ' at ' + DL[dj] + ' cm' }));
      } else {
        const SD = ['Nov 2024', 'Feb 2025', 'May 2025', 'Aug 2025', 'Nov 2025', 'Feb 2026', 'May 2026', 'Aug 2026', 'Oct 2026'];
        const SDt = [[2024, 10, 20], [2025, 1, 18], [2025, 4, 14], [2025, 7, 12], [2025, 10, 11], [2026, 1, 17], [2026, 4, 20], [2026, 7, 11], [2026, 9, 14]].map(([y, m, d]) => +new Date(y, m, d));
        const jit = (i, j, k, m) => { const x = Math.sin((i * 7 + j * 13 + k * 3 + m) * 12.9898) * 43758.5453; return x - Math.floor(x) - .5; };
        const sea = k => [.8, 1, -.2, -.8, .8, 1, -.2, -.8, .5][k];
        const MET = [
          ['ec', 'Salinity (EC)', 'dS/m', 'M13 2 4 14h6l-1 8 9-12h-6z', '#F5F3FF', '#7C3AED', 3, (i, j, k) => ([.09, .07, .08, .1, .12, .15][j] + i * .006) * (1 + .18 * sea(k)) + jit(i, j, k, 2) * .012],
          ['n', 'Nitrate nitrogen', 'mg/kg', 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10zM2 21c0-3 1.9-5.5 5.3-6.5C8 14.2 10 14 11 14', '#EFF8F1', '#2E7D4F', 1, (i, j, k) => [24, 13, 8, 5.5, 4, 3][j] * (1 + i * .04) * (1 - .25 * sea(k)) + jit(i, j, k, 3) * 2.5],
          ['p', 'Phosphorus (Colwell)', 'mg/kg', 'M12 21v-9M12 12c0-4 3-7 8-7 0 4-3 7-8 7zM12 15c0-3-2.4-5.5-6.5-5.5 0 3 2.4 5.5 6.5 5.5z', '#FFF4EE', '#E8643A', 1, (i, j, k) => [44, 19, 10, 7, 5, 4][j] * (1 + i * .05) + k * .3 + jit(i, j, k, 4) * 3],
          ['k', 'Potassium (Colwell)', 'mg/kg', 'M12 2l8.7 5v10L12 22l-8.7-5V7zM12 8v8M9 10.5l6 3M15 10.5l-6 3', '#FDF2F8', '#BE185D', 0, (i, j, k) => [215, 165, 135, 118, 108, 100][j] * (1 + i * .04) - k * .8 + jit(i, j, k, 5) * 12],
          ['oc', 'Organic carbon', '%', 'M12 3 2 8l10 5 10-5zM2 12.5l10 5 10-5M2 17l10 5 10-5', '#F5EFE8', '#8F5530', 2, (i, j, k) => [2.6, 1.5, 1.0, .72, .52, .4][j] * (1 + i * .03) + k * .006 + jit(i, j, k, 6) * .06],
          ['ca', 'Exchangeable calcium', 'cmol(+)/kg', 'M5 12a7 7 0 1 0 14 0 7 7 0 0 0-14 0zM14.5 9.5a3 3 0 1 0 0 5', '#EFF6FF', '#2563EB', 2, (i, j, k) => [6.4, 4.9, 4.2, 3.7, 3.3, 3.0][j] * (1 + i * .03) - k * .02 + jit(i, j, k, 7) * .25]];
        const RS = this.selector('soilt.rng', 'Range', ['Last 6 months', 'Last 1 year', 'Last 2 years']), PS2 = this.selector('soilsum.pad', 'Paddock', ['All paddocks'].concat(PP.map(q => q[0])));
        const NOW = +new Date(2026, 10, 13), lo = NOW - [182, 365, 730][RS.v] * 864e5, ks = SDt.map((t, k) => t >= lo ? k : -1).filter(k => k >= 0);
        const idx = PS2.v ? [PS2.v - 1] : PP.map((_, i) => i), where = PS2.v ? PP[PS2.v - 1][0] : 'All paddocks \u00b7 average', xl = ks.map(k => SD[k]), hid = s.spHide || {};
        g.selector2 = RS.sel; g.selector = PS2.sel; g.chCols = 'minmax(0,1fr) minmax(0,1fr)';
        g.charts = MET.map(([k2, t, u, ic, icBg, icFg, dp, fn]) => {
          const fj = (s.spFoc || {})[k2], DN = ['10', '20', '30', '40', '50', '60'];
          const ln = DL.map((_, j) => [DN[j] + ' cm', DC[j], ks.map(kk => +mean(idx.map(i => fn(i % 6, j, kk) + (hs(i, 9) - .5) * .02 * fn(0, j, kk))).toFixed(dp)), { op: fj == null || fj === j ? 1 : .15, sw: fj === j ? 3.4 : 2 }]);
          const c = L(t, where + ' \u00b7 ' + u, xl, ln, { half: true, h: '200px' });
          c.legend = DL.map((_, j) => { const on = fj === j; return { name: DN[j] + ' cm', c: DC[j], ls: 'solid', tip: on ? 'Show all depths' : 'Highlight ' + DN[j] + ' cm', bd: on ? DC[j] : '#E2E8F0', bg: on ? '#FBF5F1' : '#fff', op: fj == null || on ? 1 : .5, td: 'none', cur: 'pointer', go: () => this.setState(st => ({ spFoc: { ...(st.spFoc || {}), [k2]: (st.spFoc || {})[k2] === j ? null : j } })) }; });
          return { ...c, span: 'span 1', ic, icBg, icFg };
        });
      }
    } else if (p === 'soil') {
      const pr = devs.filter(d => d.type === 'soil'); const S = this.selector('soil.dashboard', 'Probe', pr.map(d => d.name)); const dv = pr[S.v] || pr[0]; const q = sd + S.v * 17;
      g.meta = 'Last sampling · 04 Nov 2026, ' + dv.last;
      g.stPick = { lbl: 'Select probe', open: !!s.stDD, toggle: () => this.setState(x => ({ stDD: !x.stDD })), cur: { label: dv.name, prov: dv.provider }, opts: pr.map((d, k) => ({ label: d.name, prov: d.provider, bg: k === S.v ? '#F0FDF4' : 'transparent', go: () => this.setState(x => ({ sel: { ...x.sel, 'soil.dashboard': k }, stDD: false })) })) };
      g.embedSoil = true; g.embedTab = 'readings'; g.embedDev = dv.ref;
    } else if (p === 'livestock' && sub === 'heat') {
      const sc = this.sections(key, [['overview', 'Overview'], ['hist', 'Historical Heat Index'], ['fc', 'Forecast Heat Index']]); g.sections = sc.items;
      g.embedHli = s.hliCfg ? 'config' : sc.cur === 'fc' ? 'forecast' : sc.cur; g.hliFarm = f.name; g.hliTick = s.hliTick || 0;
      if (s.hliCfg) g.sections = sc.items.map(x => ({ ...x, go: () => this.setState({ hliCfg: false }, x.go) }));
      if (!s.hliCfg && sc.cur !== 'overview') { const S = this.selector(key + '.pen', 'Pen', ['Pen 1']); g.selector = S.sel; g.hliPen = 'p' + (S.v + 1); g.hliBtns = { ws: () => this.go('weather', 'stations') }; } else g.hliPen = '';
    } else if (p === 'livestock' && sub === 'biomass') {
      const mode = this.props.biomassData || 'Full', EMPTY = mode === 'Empty', PART = mode === 'Partial', B2 = BIO2;
      const sc = this.sections(key, [['growth', 'Growth Rate'], ['nutrient', 'Feed Quality'], ['budget', 'Feed Budget Calculator']]); g.sections = sc.items; g.upw = s.up ? this.upVals(s) : false;
      const n0 = v => Math.round(v).toLocaleString(), n1 = v => (+v).toFixed(1), sgn = v => (v > 0 ? '+' : v < 0 ? '\u2212' : ''), mean = a => a.reduce((x, y) => x + y, 0) / a.length;
      const pads = B2.pads.map(q => PART ? { ...q, ha: null, src: 'M', ago: 3, d: null } : q), hasArea = !PART;
      const up = () => this.setState({ page: 'data', dataOpen: null, up: { type: 'pasture' } });
      const GRASS = 'M3 21c.5-4 2-7 5-9-1.5 3-2 6-2 9zM7.5 21c0-6 1.5-11 5-15-1 4.5-1.3 9.5-1 15zM12.5 21c.2-5 2-9 6-11.5-2.3 3.5-3.4 7.3-3.5 11.5zM16.5 21c.5-3 2-5.5 4.5-7-1.2 2.2-1.8 4.6-2 7z';
      const MI = (m, ic, x) => ({ ...m, ic, ...(x || {}) }), MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const bio = g.bio = { empty: EMPTY, upload: up, tpl: () => upTemplate('pasture'), grass: GRASS, notes: [], stop: e => e.stopPropagation() };
      const st = { head: 650, intake: 11, res: 1500 }, RES = st.res;
      const PS = this.selector('bio.pad', 'Paddock', ['All paddocks'].concat(B2.pads.map(q => q.n))), one = PS.v && sc.cur !== 'budget' ? pads[PS.v - 1] : null, use = one ? [one] : pads, BR = this.rangeChips('bio', '3M', ['1M', '3M', '6M', 'Custom']), per = BR.per, cr = BR.cr;
      if (!EMPTY && sc.cur !== 'budget') { g.selector = PS.sel; g.chips2 = BR.chips; g.cPop = BR.pop; g.meta = null; g.chipsRight = true; }
      if (!EMPTY && sc.cur === 'growth') {
        const D0 = +new Date(2025, 6, 1), dayOf = x => Math.round((+new Date(x) - D0) / 864e5), END = 495;
        const win = per === 'Custom' ? [Math.max(14, dayOf(cr.from)), Math.min(END, dayOf(cr.to))] : [END - { '1M': 30, '3M': 91, '6M': 182 }[per], END];
        const avg = mean(use.map(q => q.c)), uArea = hasArea ? use.reduce((x, q) => x + q.ha, 0) : 0, net = PART ? null : mean(use.map(q => q.d)), onHand = hasArea ? use.reduce((x, q) => x + q.c * q.ha / 1000, 0) : 0, nM = use.filter(q => q.src === 'M').length;
        const IC_T = 'M3 17.6 9 11.6l4 4 5.6-5.6H16V8h6v6h-2v-2.6l-7 7-4-4-4.6 4.6z', IC_P = 'M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 6v12l6 2V8z', IC_CAL = 'M4 6h16v14H4zM4 6h16v4H4zM8 3h1.6v4H8zM14.4 3H16v4h-1.6z', IC_S = 'M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 8.6C6.5 10 9 10.6 12 10.6s5.5-.6 7-2V12c0 1.7-3.1 3-7 3s-7-1.3-7-3zM5 14.6c1.5 1.4 4 2 7 2s5.5-.6 7-2V18c0 1.7-3.1 3-7 3s-7-1.3-7-3z';
        g.metrics = [MI(M('Average biomass', n0(avg) + ' kg DM/ha', one ? one.n : 'Average of ' + pads.length + ' paddocks'), GRASS),
          MI(M('Average growth rate', net == null ? '\u2014' : sgn(net) + n0(Math.abs(net)) + ' kg DM/ha/day', net == null ? 'Needs two uploads' : 'Latest vs previous upload'), IC_T, { vc: net == null ? '#94A3B8' : net >= 0 ? '#15803D' : '#B91C1C' }),
          MI(M('Paddocks with readings', String(nM)), IC_P), MI(M('Last reading', B2.ago + ' days ago', B2.up), 'M7 2.5h1.6v3H7zM11.2 2.5h1.6v3h-1.6zM15.4 2.5H17v3h-1.6zM3.5 5h17v16h-17zM5.1 9v10.4h13.8V9zM7 11h2v2H7zM10.5 11h2v2h-2zM14 11h2v2h-2zM7 14.5h2v2H7zM10.5 14.5h2v2h-2zM14 14.5h2v2h-2z')].concat(hasArea ? [MI(M('Total feed available', n0(onHand) + ' t DM'), IC_S)] : []);
        { const od = ['Average biomass', 'Average growth rate', 'Last reading', 'Paddocks with readings']; g.metrics = od.map(l => g.metrics.find(m => m.l === l)).filter(Boolean).map(m => m.l === 'Paddocks with readings' ? { ...m, l: 'Paddocks reporting' } : m.l === 'Average biomass' ? { ...m, ref: this.refOf('avgBio') } : m.l === 'Average growth rate' ? { ...m, ref: this.refOf('avgGr') } : m); g.mCols = 'repeat(auto-fit,minmax(min(100%,150px),1fr))'; }
        if (PART) bio.notes = [{ t: 'Add paddock areas to see total feed available.', btn: 'Add areas', go: up }, { t: 'Add another reading to see feed change over time.', btn: 'Upload', go: up }];
        const srt = pads.slice().sort((x, y) => y.c - x.c);
        g.charts = [{ ...HBar('Feed Density', 'kg DM/ha \u00b7 highest to lowest', srt.map(q => [q.n, q.c, one && q !== one ? '#DDE7E0' : '#2E8B57', n0(q.c)]), { half: true }), bh: '20px' }]; g.chAlign = 'stretch';
        const pickPad = n => { const ix = B2.pads.findIndex(q => q.n === n) + 1; this.setState(st => ({ sel: { ...st.sel, 'bio.pad': (st.sel['bio.pad'] || 0) === ix ? 0 : ix } })); };
        if (hasArea) g.charts.push(this.treemap('Total Feed by Paddock', 't DM \u00b7 tile size shows each paddock\u2019s share of total feed', srt.map(q => ({ n: q.n, v: q.c * q.ha / 1000 })), one ? one.n : null, pickPad));
        if (!PART) g.charts.push(this.divBars('Growth Rate by Paddock', 'kg DM/ha/day \u00b7 change between last two uploads', pads.slice().sort((x, y) => y.d - x.d).map(q => ({ n: q.n, v: q.d, dim: !!one && q !== one })), ' kg DM/ha/day', pickPad));
        if (!PART) {
          const ser = B2.prev.concat(B2.cur.map(([d, v]) => [d + 365, v])), at = d => { if (d <= ser[0][0]) return ser[0][1]; for (let k = 1; k < ser.length; k++) if (d <= ser[k][0]) { const [d0, v0] = ser[k - 1], [d1, v1] = ser[k]; return v0 + (v1 - v0) * (d - d0) / (d1 - d0); } return ser[ser.length - 1][1]; };
          const sc2 = one ? one.c / mean(pads.map(q => q.c)) : 1, span = Math.max(7, win[1] - win[0]), step = Math.max(1, Math.round(span / 40)), pts = []; for (let d = win[0]; d <= win[1]; d += step) pts.push(d); if (pts[pts.length - 1] !== win[1]) pts.push(win[1]);
          const fmtD = d => { const t = new Date(D0 + d * 864e5); return t.getDate() + ' ' + MN[t.getMonth()]; };
          const aC = mean(pads.map(q => q.c)), foc = one ? one.n : (s.bioFoc || null), xs = pts.map(fmtD);
          const cv = L('Pasture Cover Over Time', 'kg DM/ha \u00b7 by paddock', [0, 1, 2, 3, 4].map(k => fmtD(Math.round(pts[0] + (pts[pts.length - 1] - pts[0]) * k / 4))), pads.map(q => [q.n, PCOL[q.n] || '#64748B', pts.map(d => Math.max(300, Math.round(at(d) * q.c / aC + (d - win[1]) * q.d * .25))), { op: !foc || foc === q.n ? 1 : .15, sw: foc === q.n ? 3.2 : 2 }]), { half: true, h: '240px', u: '', xs });
          cv.legend = []; cv.show = this.showDD(pads.map(q => [q.n, PCOL[q.n]]), foc, 'bioFoc', !!one); g.charts.push(cv);
          if (hasArea) { const SP = { 'Feed Density': 'span 5', 'Total Feed by Paddock': 'span 5', 'Growth Rate by Paddock': 'span 4', 'Pasture Cover Over Time': 'span 6' }; g.charts.forEach(c => { if (SP[c.title]) c.span = SP[c.title]; if (c.title === 'Total Feed by Paddock') c.ref = this.refOf('tfp'); if (c.title === 'Growth Rate by Paddock') c.ref = this.refOf('grp'); }); g.chCols = 'repeat(10,minmax(0,1fr))'; }
        }
        g.foot = { a: 'Feed Availability is based on', link: 'producer-uploaded biomass records', go: () => this.setState({ page: 'data', dataOpen: 'up0', up: null, dataFilt: false }), b: '. Calculations are indicative only and depend on the accuracy and frequency of uploaded data.' };
        g.table = T('Paddock readings', ['Paddock', 'Area (ha)', 'Biomass (kg DM/ha)', 'Total feed (t DM)', 'Growth rate (kg DM/ha/day)', 'Last reading'], '1.2fr .7fr 1fr 1fr 1.1fr 1fr', srt.filter(q => !one || q === one).map(q => [{ b: q.n }, q.ha == null ? '\u2014' : String(q.ha), n0(q.c), q.ha == null ? '\u2014' : n1(q.c * q.ha / 1000), q.d == null ? '\u2014' : sgn(q.d) + Math.abs(q.d), B2.up]), '720px');
      } else if (!EMPTY && sc.cur === 'nutrient') {
        if (PART) bio.nutEmpty = true;
        else {
          const Q = B2.qual.filter(x => !one || x.n === one.n), me = mean(Q.map(x => x.me)), cp = mean(Q.map(x => x.cp)), ndf = mean(Q.map(x => x.ndf)), dmdA = mean(Q.map(x => x.dmd));
          g.metrics = [MI(M('Energy (ME)', n1(me) + ' MJ/kg DM'), 'M13 2 4 14h6l-1 8 9-12h-6z'), MI(M('Protein (CP)', n1(cp) + '%'), 'M12 3c3.5 4 6 7.6 6 11a6 6 0 0 1-12 0c0-3.4 2.5-7 6-11z'), MI(M('Fibre (NDF)', Math.round(ndf) + '%'), 'M11.2 3h1.6v18h-1.6zM12 6.5c-2.5 0-4-1.5-4-3.5 2.5 0 4 1.5 4 3.5zm0 0c2.5 0 4-1.5 4-3.5-2.5 0-4 1.5-4 3.5zM12 11.5c-2.5 0-4-1.5-4-3.5 2.5 0 4 1.5 4 3.5zm0 0c2.5 0 4-1.5 4-3.5-2.5 0-4 1.5-4 3.5zM12 16.5c-2.5 0-4-1.5-4-3.5 2.5 0 4 1.5 4 3.5zm0 0c2.5 0 4-1.5 4-3.5-2.5 0-4 1.5-4 3.5z'), MI(M('Digestibility (DMD)', Math.round(dmdA) + '%'), 'M11 3.1V13h9.9A9 9 0 1 1 11 3.1zM13 2a9 9 0 0 1 9 9h-9z')];
          const ml = per === '1M' ? ['12 Oct', '19 Oct', '26 Oct', '2 Nov'] : per === '6M' ? ['Jun', 'Aug', 'Sep', 'Oct'] : ['Aug', 'Sep', 'Oct', 'Nov'], tr = (end, d) => [3, 2, 1, 0].map(k => +(end - d * k).toFixed(1));
          const FQ = { me: ['Energy', 'MJ/kg DM', .25, 1, [11, 10]], cp: ['Protein', '%', 1.1, 1, [18, 12]], ndf: ['Fibre', '%', -2, 0, [45, 55]], dmd: ['Digestibility', '%', 1.4, 1, [70, 65]] }, mk = FQ[s.fqM] ? s.fqM : 'me', [mN, mU, mStep, hiGood, TH] = FQ[mk];
          const TF = { 'North East': .7, 'North West': .35, 'Main Shed': .1, 'South East': -.3, 'Crossroads': -.75 }, val = x => x[mk], fmt = v => mk === 'me' || mk === 'cp' ? n1(v) : String(Math.round(v)), uS = mU === '%' ? '%' : ' ' + mU;
          const pD = x => { const [y, m, d] = String(x).split('-').map(Number); return new Date(y, m - 1, d); }, fD = d => d.getDate() + ' ' + MN[d.getMonth()];
          const XL = per === '1M' ? ['14 Oct', '21 Oct', '28 Oct', '4 Nov', '11 Nov'] : per === '3M' ? ['19 Aug', '2 Sep', '16 Sep', '30 Sep', '14 Oct', '28 Oct', '11 Nov'] : per === '6M' ? ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'] : (() => { const a = pD(cr.from), b = pD(cr.to); return Array.from({ length: 6 }, (_, i) => fD(new Date(+a + (b - a) * i / 5))); })();
          const NP = XL.length, PSC = { '1M': .4, '3M': 1, '6M': 1.8 }[per] || .8, PLB = { '1M': 'the last month', '3M': 'the last 3 months', '6M': 'the last 6 months' }[per] || 'the selected range';
          const jit = (x, k) => { const h = Math.sin((x.n.length * 13 + k * 7 + NP * 3 + mk.length) * 12.9898) * 43758.5453; return h - Math.floor(h) - .5; };
          const ser = x => Array.from({ length: NP }, (_, k) => +(val(x) - mStep * (TF[x.n] || 0) * (NP - 1 - k) / (NP - 1) * 1.8 * PSC + (k === NP - 1 ? 0 : jit(x, k) * Math.abs(mStep) * .5 * PSC)).toFixed(1));
          const QA = B2.qual, pv = x => mean(ser(x)), cat = v => hiGood ? (v >= TH[0] ? 0 : v >= TH[1] ? 1 : 2) : (v <= TH[0] ? 0 : v <= TH[1] ? 1 : 2), CC = ['#15803D', '#E09F3E', '#DC2626'];
          const vals = QA.map(pv), lo = Math.min(...vals), hi = Math.max(...vals), base = lo - (hi - lo) * .6, scl = v => Math.max(4, (v - base) / ((hi - base) || 1) * 100).toFixed(1) + '%', rk = QA.slice().sort((a, b) => hiGood ? pv(b) - pv(a) : pv(a) - pv(b));
          const RNG = { me: ['\u2265 11.0 MJ/kg DM', '10.0 \u2013 10.9 MJ/kg DM', '< 10.0 MJ/kg DM'], cp: ['\u2265 18%', '12 \u2013 17.9%', '< 12%'], ndf: ['\u2264 45%', '45 \u2013 55%', '> 55%'], dmd: ['\u2265 70%', '65 \u2013 69%', '< 65%'] }[mk];
          const rank = { ref: { ...this.refOf('fqp'), cols: ['Good', 'Moderate', 'Low'].map((l, i) => ({ l, c: CC[i], r: RNG[i] })), note: (hiGood ? 'Higher is better. ' : 'Lower is better: more fibre means less intake. ') + 'Ranges follow common Australian pasture feed-test benchmarks. Your adviser may set different targets.' }, title: 'Feed Quality by Paddock', sub: mN + ' (' + mU + ') \u00b7 average over ' + PLB + ' \u00b7 best to worst', isRank: true, axisOn: false, span: 'span 1', legend: [],
            seg: Object.keys(FQ).map(k => ({ l: FQ[k][0], bg: k === mk ? '#fff' : 'transparent', fg: k === mk ? '#0F172A' : '#64748B', sh: k === mk ? '0 1px 2px rgba(15,23,42,.14)' : 'none', go: () => this.setState({ fqM: k }) })),
            cats: ['Good', 'Moderate', 'Low'].map((l, i) => ({ l, c: CC[i] })),
            info: { open: !!s.fqInfo, toggle: () => this.setState(st => ({ fqInfo: !st.fqInfo })), t: 'How ' + mN.toLowerCase() + ' is coloured', rows: ['Good', 'Moderate', 'Low'].map((l, i) => ({ l, c: CC[i], r: RNG[i] })), note: (hiGood ? 'Higher is better. ' : 'Lower is better: more fibre means less intake. ') + 'Ranges follow common Australian pasture feed-test benchmarks for grazing cattle. Your adviser may set different targets for your stock.' },
            rows: rk.map((x, i) => ({ rk: i + 1, l: x.n, w: scl(pv(x)), c: CC[cat(pv(x))], t: fmt(pv(x)), op: one && one.n !== x.n ? .35 : 1, tip: x.n + ': ' + fmt(pv(x)) + uS + ' \u00b7 ' + ['Good', 'Moderate', 'Low'][cat(pv(x))] })) };
          const foc = one ? one.n : (s.fqFoc || null);
          const tc = L(mN + ' Trend by Paddock', mU, XL, QA.map(x => [x.n, PCOL[x.n] || '#64748B', ser(x), { op: !foc || foc === x.n ? 1 : .15, sw: foc === x.n ? 3.2 : 2 }]), { half: true, h: '240px', u: mU === '%' ? '%' : '' });
          tc.legend = []; tc.show = this.showDD(QA.map(x => [x.n, PCOL[x.n]]), foc, 'fqFoc', !!one); 
          g.charts = [rank, tc]; g.chCols = 'minmax(0,1fr) minmax(0,1.3fr)'; g.chAlign = 'stretch';
                    g.foot = { a: 'Feed Quality is based on', link: 'producer-uploaded feed analysis records', go: () => this.setState({ page: 'data', dataOpen: 'up1', up: null, dataFilt: false }), b: '. Values are indicative only and depend on the accuracy and frequency of uploaded data.' };
          g.table = T('Feed test results', ['Paddock', 'Sample date', 'Energy (MJ/kg DM)', 'Protein (%)', 'Fibre (%)', 'Digestibility (%)'], '1.3fr 1fr 1fr .9fr .9fr 1fr', Q.map(x => [{ b: x.n }, B2.qDate, n1(x.me), n1(x.cp), String(x.ndf), String(x.dmd)]), '700px');
        }
      } else if (!EMPTY && sc.cur === 'budget') {
        const CLS = { 'Breeding Cows': [550, 12, 1500], 'Dry Cows': [500, 9.5, 1500], 'Steers': [400, 9, 1500], 'Heifers': [350, 8, 1500], 'Sheep': [60, 1.4, 1000], 'Lambs': [35, 1, 1000] };
        const base = c => ({ lw: CLS[c][0], intake: CLS[c][1], res: CLS[c][2], util: 70, gr: 0, sup: 0 }), DEF = { src: hasArea ? 'up' : 'man', mHa: 150, mBio: 2800, cls: 'Breeding Cows', head: 120, days: 90, pads: null, ...base('Breeding Cows') };
        const bp = { ...DEF, ...(s.fbIn || {}) }, selP = bp.pads || pads.map((_, i) => i), upd = o => this.setState(x => ({ fbIn: { ...DEF, ...(x.fbIn || {}), ...o } })), G = '#2E8B57';
        const t1 = v => (Math.abs(v) < 10 ? n1(Math.abs(v)) : n0(Math.abs(v))), useUp = bp.src === 'up' && hasArea, sha = useUp ? selP.reduce((x, i) => x + (pads[i].ha || 0), 0) : bp.mHa;
        const allFeed = pads.reduce((x, q) => x + q.c * (q.ha || 0) / 1000, 0), B0 = base(bp.cls), L3 = s.fbLoad || 0;
        const advF = [['lw', 'Average liveweight', 'kg', 10, 1200, null], ['intake', 'Daily intake', 'kg DM/head', .5, 40, null], ['res', 'Residual pasture', 'kg DM/ha', 100, 4000, 'fbRes'], ['util', 'Utilisation', '%', 5, 100, 'fbUtil'], ['gr', 'Pasture growth rate', 'kg DM/ha/day', 1, 150, null], ['sup', 'Supplement feed', 'kg DM/head/day', .5, 40, null]];
        const advCh = advF.some(([k]) => bp[k] !== B0[k]), canCalc = (useUp ? selP.length > 0 : bp.src === 'man' && bp.mHa > 0 && bp.mBio > 0) && bp.head > 0;
        const radio = (k, l, sb) => { const on = bp.src === k; return { l, sub: sb, showUp: on && k === 'up' && useUp, showMan: on && k === 'man', bd: on ? G : '#E2E8F0', bg: on ? '#F4F9F5' : '#fff', dot: on ? G : 'transparent', dbd: on ? G : '#CBD5E1', go: () => upd({ src: k }) }; };
        const run = () => { if (!canCalc || L3) return; (this._fbT || []).forEach(clearTimeout); const snap = { ...bp, pads: selP.slice(), useUp }; this.setState({ fbLoad: 1 }); this._fbT = [setTimeout(() => this.setState({ fbLoad: 2 }), 600), setTimeout(() => this.setState({ fbLoad: 3 }), 1200), setTimeout(() => this.setState(st => ({ fbLoad: 0, fbOut: snap, fbEdit: false, fbAlt: null, zoom: { ...(st.zoom || {}), fbproj: null } }), () => this.fbAnimate()), 1850)]; };
        const compact = !!s.fbOut && !s.fbEdit && !L3, FILES = ['pasture_biomass_' + B2.up.replace(/[^A-Za-z0-9]+/g, '_') + '.csv', 'pasture_biomass_Oct_2026.csv', 'pasture_biomass_Sep_2026.csv', 'pasture_biomass_Aug_2026.csv'];
        bio.fb = { src: [radio('up', 'Use uploaded biomass records', hasArea ? 'Choose from your uploads' : 'No records yet'), radio('man', 'Enter feed manually', 'Grazing area and average biomass')],
          file: { v: FILES[Math.min(s.fbFile || 0, FILES.length - 1)], opts: FILES.map(v => ({ v, l: v })), set: e => this.setState({ fbFile: Math.max(0, FILES.indexOf(e.target.value)) }) }, isUp: useUp, isMan: bp.src === 'man', noBio: bp.src === 'up' && !hasArea, upload: up, goMan: () => upd({ src: 'man' }),
          checks: hasArea ? [pads.length + ' paddocks available', t1(allFeed) + ' t DM feed available', 'Last upload: ' + B2.up] : [],
          padOpen: !!s.fbPadOpen, padToggle: () => this.setState(st => ({ fbPadOpen: !st.fbPadOpen })), padRot: s.fbPadOpen ? 'rotate(180deg)' : 'rotate(-90deg)', padLbl: 'Grazing ' + (selP.length === pads.length ? 'all ' + pads.length : selP.length + ' of ' + pads.length) + ' paddocks \u00b7 ' + n0(sha) + ' ha',
          pads: pads.map((q, i) => { const on = selP.includes(i); return { n: q.n, ha: q.ha, c: n0(q.c), tick: on ? '\u2713' : '', bd: on ? G : '#CBD5E1', cb: on ? G : '#fff', bg: on ? '#F7FBF8' : '#fff', go: () => upd({ pads: on ? selP.filter(x => x !== i) : selP.concat(i).sort((x, y) => x - y) }) }; }),
          allTxt: selP.length === pads.length ? 'Clear all' : 'Select all', all: () => upd({ pads: selP.length === pads.length ? [] : pads.map((_, i) => i) }),
          man: { ha: { v: bp.mHa, set: e => upd({ mHa: Math.max(0, +e.target.value || 0) }) }, bio: { v: bp.mBio, set: e => upd({ mBio: Math.max(0, +e.target.value || 0) }) } },
          cls: { v: bp.cls, opts: Object.keys(CLS).map(v => ({ v, l: v })), set: e => upd({ cls: e.target.value, ...base(e.target.value) }) },
          head: { v: bp.head, set: e => upd({ head: Math.min(100000, Math.max(0, Math.round(+e.target.value || 0))) }), dec: () => upd({ head: Math.max(0, bp.head - 10) }), inc: () => upd({ head: bp.head + 10 }) },
          per: { v: String(bp.days), opts: [30, 60, 90, 120].map(d => ({ v: String(d), l: d + ' days' })), set: e => upd({ days: +e.target.value }) },
          advOpen: !!s.fbAdv, advToggle: () => this.setState(st => ({ fbAdv: !st.fbAdv })), advRot: s.fbAdv ? 'rotate(180deg)' : 'rotate(-90deg)', advTag: advCh ? 'Edited' : 'Using defaults', advTagBg: advCh ? '#FEF3C7' : '#F1F5F9', advTagFg: advCh ? '#92400E' : '#64748B',
          adv: advF.map(([k, l, u, st3, mx, rk]) => ({ l, u, step: st3, v: bp[k], ref: rk ? this.refOf(rk) : null, hint: 'Default ' + B0[k].toLocaleString() + (u === '%' ? '%' : ''), set: e => upd({ [k]: Math.min(mx, Math.max(0, +e.target.value || 0)) }) })), advReset: () => upd(B0),
          calc: run, btn: L3 ? 'Calculating\u2026' : s.fbOut ? 'Recalculate Feed Budget' : 'Calculate Feed Budget', btnBg: canCalc ? G : '#94A3B8', btnCur: canCalc && !L3 ? 'pointer' : 'not-allowed',
          idle: !s.fbOut && !L3, compact, full: !compact, edit: () => this.setState({ fbEdit: true }),
          dirty: !!s.fbOut && !L3 && JSON.stringify({ ...bp, pads: selP, useUp }) !== JSON.stringify(s.fbOut),
          load: L3 ? { w: (L3 / 3 * 100).toFixed(0) + '%', steps: ['Analysing available feed\u2026', 'Calculating livestock demand\u2026', 'Projecting feed position\u2026'].map((l, i) => { const done = L3 > i + 1, cur = L3 === i + 1; return { l, tick: done ? '\u2713' : '', bg: done ? G : '#fff', bd: done || cur ? G : '#CBD5E1', fg: done || cur ? '#0F172A' : '#94A3B8' }; }) } : null,
          sum: [{ l: 'Feed source',ic:'M12 21v-8M12 13c0-3-2-5-6-5 0 3 2 5 6 5zM12 13c0-3 2-6 6-6 0 3-2 6-6 6z',bg:'#EAF5EE',fg:'#1F7A4A', v: useUp ? 'Uploaded biomass \u00b7 ' + (selP.length === pads.length ? 'all ' + pads.length : selP.length + ' of ' + pads.length) + ' paddocks' : 'Manual \u00b7 ' + n0(bp.mBio) + ' kg DM/ha' }, { l: 'Grazing area',ic:'M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',bg:'#EAF5EE',fg:'#1F7A4A', v: n0(sha) + ' ha' }, { l: 'Livestock',ic:'M12 20c-3 0-5-1.5-5-3.5S9 13 12 13s5 1.5 5 3.5S15 20 12 20zM6.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM10 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM14 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',bg:'#EAF5EE',fg:'#1F7A4A', v: bp.head + ' ' + bp.cls }, { l: 'Planning period',ic:'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM3 10h18M8 2v4M16 2v4',bg:'#F1F5F9',fg:'#475569', v: bp.days + ' days' }, { l: 'Assumptions',ic:'M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6',bg:'#F1F5F9',fg:'#475569', v: advCh ? 'Edited' : 'Defaults \u00b7 ' + bp.util + '% utilisation' }] };
        if (s.fbOut && !L3) {
          const o = { ...DEF, ...s.fbOut }, U = (o.util == null ? 70 : o.util) / 100, Q = o.useUp ? o.pads.map(i => pads[i]) : [], ha = o.useUp ? Q.reduce((x, q) => x + q.ha, 0) : o.mHa, D = o.days, H = o.head, grow = o.gr * ha / 1000;
          const avail = (o.useUp ? Q.reduce((x, q) => x + Math.max(0, q.c - o.res) * q.ha / 1000, 0) : Math.max(0, o.mBio - o.res) * o.mHa / 1000) * U, draw = h => h * Math.max(0, o.intake - o.sup) / 1000 - grow;
          const daysFor = h => { const nt = draw(h); return nt <= 0 ? Infinity : avail / nt; }, rem = (h, x) => Math.max(0, avail - draw(h) * x), fin = v => v !== Infinity;
          const dem = H * o.intake / 1000, days = daysFor(H), bal = avail - draw(H) * D, dTxt = d => !fin(d) || d > 999 ? '999+' : String(Math.floor(d)), ok = days >= D, warn = !ok && days >= D * .75;
          const tone = ok ? ['#14532D', '#F3FAF5', '#D5EADB', G] : warn ? ['#B45309', '#FEF3C7', '#FDE68A', '#F59E0B'] : ['#B91C1C', '#FEE2E2', '#FECACA', '#EF4444'];
          const fmtD = d => { const x = new Date(+new Date(2026, 10, 16) + d * 864e5); return x.getDate() + ' ' + MN[x.getMonth()] + ' ' + x.getFullYear(); };
          const alt = s.fbAlt != null ? s.fbAlt : Math.max(10, Math.round(H * 1.25 / 5) * 5), dA = daysFor(alt);
          let T = Math.max(120, Math.ceil(D / 30) * 30); if (fin(days) && days > T - 10 && days < 240) T = Math.ceil((days + 15) / 30) * 30;
          const zw = (s.zoom || {}).fbproj, a0 = zw ? Math.max(0, Math.min(zw[0], T - 2)) : 0, b0 = zw ? Math.min(T, Math.max(zw[1], a0 + 2)) : T, SPN = b0 - a0, inW = x => x >= a0 && x <= b0, pc2 = x => ((x - a0) / SPN * 100).toFixed(2) + '%';
          const Ym = Math.max(rem(H, a0), rem(alt, a0), rem(H, b0), rem(alt, b0)) * 1.08 || 1, X = x => ((x - a0) / SPN * 600).toFixed(1), Y = v => (200 - v / Ym * 200).toFixed(1);
          const path = h => { const ts = Array.from({ length: 61 }, (_, k) => a0 + k * SPN / 60), dd = daysFor(h); if (dd > a0 && dd < b0) ts.push(dd); ts.sort((p1, p2) => p1 - p2); return ts.map(x => X(x) + ',' + Y(rem(h, x))).join(' '); }, pc = path(H);
          const SB = Math.max(D * 1.5, Math.min(fin(days) ? days * 1.1 : D * 2.5, D * 2.5)), S2 = Math.min(D * 3, Math.max(D * 1.3, ...[days, dA].filter(fin).map(v => v * 1.08)));
          const bar = (h, d, lbl) => ({ l: h + ' head', sub: lbl, w: (Math.min(fin(d) ? d : S2, S2) / S2 * 100).toFixed(1) + '%', c: lbl === 'Alternative herd' ? '#D97706' : d >= D ? G : d >= D * .75 ? '#D97706' : '#DC2626', t: dTxt(d) + ' days' });
          const rD = rem(H, D), stp = [5, 10, 15, 30, 60].find(v => SPN / v <= 6) || 60, tks = []; for (let d = Math.ceil(a0 / stp) * stp; d <= b0 + .01; d += stp) tks.push(d);
          this._fbTarget = fin(days) && days <= 999 ? Math.floor(days) : null;
          bio.fr = { c: tone[0], bg: tone[1], bd: tone[2], dot: tone[3], num: dTxt(days), numRef: el => { this._fbNum = el; }, coverRef: el => { this._fbCover = el; }, h: { ref: this.refOf('fbDays') },
            sub1: H + ' ' + o.cls.toLowerCase() + ' on ' + n0(ha) + ' ha', sub2: fin(days) ? 'Estimated feed available until ' + fmtD(days) : 'Pasture growth keeps up with demand',
            expT: ok ? 'Covers your ' + D + '-day plan' : 'Feed deficit expected', expS: '', expBig: ok ? (fin(days) ? '+' + Math.floor(days - D) + ' Days spare' : 'Growth covers demand') : '\u2212' + Math.ceil(D - days) + ' Days short',
            expBg: tone[1], expBd: tone[2], expFg: ok ? '#16813F' : tone[0], expIc: ok ? 'M5 12.5l4.5 4.5L19 7.5' : 'M12 7v6M12 17h.01',
            barW: (Math.min(fin(days) ? days : SB, SB) / SB * 100).toFixed(1) + '%', barPlan: (D / SB * 100).toFixed(1) + '%', barPlanL: D + '-day plan',
            cards: [{ l: 'Available Feed', ic: 'M12 21v-8M12 13c0-3-2-5-6-5 0 3 2 5 6 5zM12 13c0-3 2-6 6-6 0 3-2 6-6 6z', v: t1(avail), u: 't DM', note: 'After ' + n0(o.res) + ' kg DM/ha residual \u00b7 ' + o.util + '% utilisation', fg: '#0F172A', ref: this.refOf('fbAvail') },
              { l: 'Daily Demand', ic: 'M12 20c-3 0-5-1.5-5-3.5S9 13 12 13s5 1.5 5 3.5S15 20 12 20zM6.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM10 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM14 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z', v: n1(dem), u: 't DM/day', note: H + ' ' + o.cls.toLowerCase() + ' \u00d7 ' + o.intake + ' kg DM', fg: '#0F172A', ref: this.refOf('fbDem') },
              { l: 'Feed Balance', ic: 'M3 17l6-6 4 4 8-8M15 7h6v6', v: (bal >= 0 ? '+' : '\u2212') + t1(bal), u: 't DM', note: (bal >= 0 ? 'Surplus' : 'Deficit') + ' at the end of ' + D + ' days', fg: bal >= 0 ? '#1F7A4A' : '#B91C1C', ref: this.refOf('fbBal') }],
            curLeg: H + ' head', altLeg: alt + ' head',
            proj: { line: pc, area: 'M0,200 L' + pc.split(' ').join(' L') + ' L600,200 Z', alt: path(alt), planX: inW(D) ? pc2(D) : '-9999px', planL: 'End of plan \u00b7 day ' + D, ticks: [Ym, Ym * 2 / 3, Ym / 3, 0].map(v => t1(v) + ' t'),
              xl: tks.map(d => { const p = (d - a0) / SPN; return { t: !zw && stp === 30 ? (d === 0 ? 'Today' : d + ' days') : 'Day ' + Math.round(d), left: pc2(d), tf: p < .04 ? 'none' : p > .96 ? 'translateX(-100%)' : 'translateX(-50%)' }; }),
              out: days < T && inW(days) ? { left: pc2(days), t: 'Runs out \u00b7 day ' + Math.floor(days) } : null, pd: rD > 0 && inW(D) ? { left: pc2(D), top: ((1 - rD / Ym) * 100).toFixed(2) + '%', t: t1(rD) + ' t left at day ' + D } : null,
              zn: String(T + 1), zoomed: !!zw, zin: () => this.zoomStep('fbproj', T + 1, .7), zout: () => this.zoomStep('fbproj', T + 1, 1.45), zreset: () => this.setState(st => ({ zoom: { ...(st.zoom || {}), fbproj: null } })) },
            sc: { curH: H, curD: dTxt(days) + ' Days', altD: dTxt(dA) + ' Days', diff: fin(days) && fin(dA) ? (dA < days ? '\u2212' : '+') + Math.abs(Math.floor(days) - Math.floor(dA)) + ' Days' : '\u2014', diffC: fin(days) && fin(dA) && dA < days ? '#DC2626' : '#16813F', rows: [bar(H, days, 'Current herd'), bar(alt, dA, 'Alternative herd')], planX: (D / S2 * 100).toFixed(1) + '%', planL: D + '-day plan', alt: { v: alt, min: 10, max: Math.max(300, Math.ceil(H * 2 / 50) * 50), set: e => this.setState({ fbAlt: Math.max(0, Math.round(+e.target.value || 0)) }) },
              msg: alt === H ? 'Same herd size as your current plan.' : (alt > H ? 'Adding ' + (alt - H) + ' head' : 'Removing ' + (H - alt) + ' head') + (fin(days) && fin(dA) ? (dA < days ? ' shortens your feed by ' : ' extends your feed by ') + Math.abs(Math.floor(days) - Math.floor(dA)) + ' days.' : ' changes how long your feed lasts.') } };
        }
      }
    } else if (p === 'livestock' && sub === 'weight') {
      const PV = this.selector(key, 'Provider', ['Gallagher (Weighing System)', 'Optiweigh']); g.selector = PV.sel; const pv = PV.v;
      const PE = [['Mob 1', 468, '#3B82F6', 124, .92], ['Mob 2', 422, '#10B981', 96, .84], ['Mob 3', 398, '#F59E0B', 112, .78]].map(([pen, w, c, hd, gn]) => ({ pen, w: w - pv * 8, c, hd: hd - pv * 6, gn: +(gn - pv * .03).toFixed(2) }));
      const PN = this.selector(key + '.pen', 'Mob', ['All mobs'].concat(PE.map(x => x.pen))); g.selector2 = PN.sel;
      const SEL = PN.v ? [PE[PN.v - 1]] : PE, HIDk = ck => (((s.wHide2 || {})[ck]) || []).filter(z => SEL.length > 1 && SEL.some(x => x.pen === z)), VISk = ck => SEL.filter(x => !HIDk(ck).includes(x.pen)), tgM = (ck, nm) => this.setState(st => { const all = st.wHide2 || {}, vis = SEL.filter(x => !(all[ck] || []).includes(x.pen)); if (vis.length === 1 && vis[0].pen === nm) return { wHide2: { ...all, [ck]: [] } }; return { wHide2: { ...all, [ck]: SEL.map(x => x.pen).filter(z => z !== nm) } }; }), VIS = VISk('line'), VB = VISk('bar'), VD = VISk('dist'), PERS = ['1M', '3M', '6M', 'Custom'], per = ((s.rPer || {}).weight) || '1M';
      const WR = this.rangeChips('weight', '1M', PERS); g.chips2 = WR.chips; g.cPop = WR.pop; g.barDir = 'row-reverse';
      g.meta = WR.txt || 'Last weighed · 04 Nov 2026, 9:55 am';
      const HD = SEL.reduce((a, x) => a + x.hd, 0), AW = Math.round(SEL.reduce((a, x) => a + x.w * x.hd, 0) / HD), GN = SEL.reduce((a, x) => a + x.gn * x.hd, 0) / HD;
      const IC_COW = 'M12 2.5 19 6v6.5c0 4.3-3 7.6-7 9-4-1.4-7-4.7-7-9V6zM12 6.3a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM8.5 13h7v1.6h-7zM9.5 16h5v1.5h-5z', IC_KB = 'M9 8.5V7a3 3 0 0 1 6 0v1.5h-1.6V7a1.4 1.4 0 0 0-2.8 0v1.5zM7.5 9.5h9l2 9.5a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5z', IC_BARS = 'M4 15h3v5H4zM10.5 10h3v10h-3zM17 4h3v16h-3z', IC_CAL = 'M4 6h16v14H4zM4 6h16v4H4zM8 3h1.6v4H8zM14.4 3H16v4h-1.6z';
      const MI = (m, ic) => ({ ...m, ic });
      g.metrics = [MI(M('Animals weighed', HD.toLocaleString(), '+' + Math.round(HD * .06) + ' vs last month', true), IC_COW), MI(M('Average weight', AW + ' kg', '+' + Math.round(GN * 30) + ' kg vs last month', true), IC_KB), MI(M('Average daily gain (ADG)', GN.toFixed(2) + ' kg/day', '+0.05 vs last month', true), IC_BARS)];
      const NX = { '1M': 30, '3M': 13, '6M': 26, Custom: 12 }[per], LX = { '1M': D30, '3M': ['Aug', 'Sep', 'Oct', 'Nov'], '6M': ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'], Custom: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Oct'] }[per], DS = { '1M': 1, '3M': 7, '6M': 7, Custom: 28 }[per];
      const ser = (x, k) => walk(NX, x.w - (NX - 1) * DS * x.gn, DS * x.gn, Math.max(2, DS * .6), sd + 80 + pv + k * 11).map(v => +v.toFixed(0));
      const lines = VIS.map(x => [x.pen, x.c, ser(x, PE.indexOf(x)), VIS.length === 1 ? { area: true } : {}]);
      const dens = (x, b, bw) => x.hd * bw / (38 * 2.5066) * Math.exp(-Math.pow((b - x.w) / 38, 2) / 2), bins = [];
      if (VD.length === 1) { for (let b = 275; b <= 600; b += 25) bins.push([b % 50 === 0 ? String(b) : '', Math.round(dens(VD[0], b, 25)), VD[0].c]); }
      else for (let b = 300; b <= 550; b += 50) { VD.forEach((x, k) => bins.push([k === Math.floor((VD.length - 1) / 2) ? String(b) : '', Math.round(dens(x, b, 50)), x.c])); bins.push(['', 0, 'transparent']); }
      const leg = ck => SEL.length > 1 ? SEL.map(x => { const off = HIDk(ck).includes(x.pen); return { name: x.pen, c: x.c, ls: 'solid', go: () => tgM(ck, x.pen), op: off ? '.45' : '1', td: off ? 'line-through' : 'none', cur: 'pointer', bd: off ? '#E2E8F0' : '#CBD5E1', bg: off ? '#F8FAFC' : '#fff', tip: off ? 'Show only ' + x.pen : (VISk(ck).length === 1 ? 'Show all mobs' : 'Show only ' + x.pen) }; }) : [];
      g.charts = [{ ...L('Average weight over time', (PN.v ? SEL[0].pen : 'All mobs') + ' \u00b7 kg', LX, lines, { half: true, h: '230px', u: ' kg' }), legend: leg('line') },
        { ...B('Average weight by mob', 'Latest session \u00b7 kg', PE.filter(x => SEL.includes(x)).map(x => [x.pen, VB.includes(x) ? x.w : 0, x.c]), { half: true, h: '230px' }), legend: leg('bar') },
        { ...B('Weight distribution by mob', 'Number of animals per weight band (kg) \u00b7 04 Nov 2026', bins, { h: '230px' }), legend: leg('dist') }];
      const DT = ['04 Nov 2026', '28 Oct 2026', '21 Oct 2026', '14 Oct 2026', '07 Oct 2026', '30 Sep 2026'], SS = DT.map((d, k) => { const x = PE[k % 3], w = x.w - Math.floor(k / 3) * Math.round(x.gn * 7); return { d, x, hd: x.hd - (k > 2 ? 3 : 0), w, lo: w - 96 - k * 2, hi: w + 118 - k }; }).filter(r => SEL.includes(r.x));
      const PBG = { 'Mob 1': ['#EFF6FF', '#1D4ED8'], 'Mob 2': ['#ECFDF5', '#047857'], 'Mob 3': ['#FFFBEB', '#B45309'] }, R0 = 250, R1 = 650, pc = v => ((v - R0) / (R1 - R0) * 100).toFixed(1) + '%';
      g.wtSess = { sub: SS.length + ' sessions \u00b7 latest first', rows: SS.map(r => ({ d: r.d, pen: r.x.pen, c: r.x.c, pbg: PBG[r.x.pen][0], pfg: PBG[r.x.pen][1], hd: String(r.hd), w: String(r.w), lo: String(r.lo), hi: String(r.hi), l: pc(r.lo), wd: ((r.hi - r.lo) / (R1 - R0) * 100).toFixed(1) + '%', m: 'calc(' + pc(r.w) + ' - 1.5px)', gn: r.x.gn.toFixed(2) })) };
      const AN = [['UM10324', 0, 612, 1.64], ['UM10411', 1, 590, 1.71], ['UM10287', 0, 586, 1.58], ['UM10166', 2, 578, 1.49], ['UM10302', 1, 572, 1.66], ['UM10421', 2, 548, 2.18], ['UM10390', 0, 561, 2.05], ['UM10456', 1, 532, 1.96], ['UM10213', 2, 505, 1.92], ['UM10377', 0, 540, 1.88], ['UM10198', 2, 566, 1.42], ['UM10255', 1, 519, 1.84]].map(([id, pi, w, adg]) => ({ id, p: PE[pi], w: w - pv * 6, adg })).filter(a => SEL.includes(a.p));
      const RK = [['#FEF3C7', '#92400E'], ['#E2E8F0', '#334155'], ['#FDE7D6', '#9A3412']];
      const top = (k, lo, f) => { const L5 = AN.slice().sort((a, b) => b[k] - a[k]).slice(0, 5), mx = L5[0] ? L5[0][k] : 1; return L5.map((a, i) => ({ rank: String(i + 1), rbg: (RK[i] || ['#F8FAFC'])[0], rfg: (RK[i] || [0, '#64748B'])[1], id: a.id, pen: a.p.pen, c: a.p.c, v: f(a), pct: Math.max(8, (a[k] - lo) / (mx - lo) * 100).toFixed(1) + '%' })); };
      g.wtTop = [{ title: 'Top 5 heaviest animals', sub: 'Latest weigh \u00b7 04 Nov 2026', unit: 'kg', rows: top('w', 400, a => String(a.w)) }, { title: 'Top 5 weight gain (ADG)', sub: 'Average daily gain \u00b7 last 30 days', unit: 'kg/day', rows: top('adg', 1, a => a.adg.toFixed(2)) }];
    } else if (p === 'alerts') {
      const add = s.added.map(a => [a.name, 'Device', a.device, 'Just now', '—', a.priority, a.via.join(', ')]); const ATY = ['All types', 'Weather', 'Soil', 'Heat load', 'Device offline'], AT = this.selector('alerts.type', 'Type', ATY); g.alType = AT.sel; const okT = r => !AT.v || r[1] === ATY[AT.v];
      if (sub === 'active') g.pol = this.polVals(s, devs, f, AT.v ? ATY[AT.v] : null);
      else if (false) g.table = T('Active alerts', ['Alert', 'Type', 'Device', 'Triggered', 'Reading', 'Priority', 'Notify by'], '1.4fr .9fr 1.6fr 1.1fr .9fr .8fr 1fr', add.concat(ACTIVE).filter(okT).map(r => [{ b: r[0] }, r[1], r[2], r[3], r[4], { pill: r[5] }, r[6]]), '1000px');
      else if (sub === 'history') g.ah = this.ahVals(s, devs, f, AT.v ? ATY[AT.v] : null);
      else g.table = T('Alert history', ['Alert', 'Type', 'Device', 'Triggered', 'Cleared', 'Priority', 'Status'], '1.4fr .9fr 1.6fr 1.1fr 1.1fr .8fr .8fr', HISTORY.filter(okT).map(r => [{ b: r[0] }, r[1], r[2], r[3], r[4], { pill: r[5] }, { pill: 'Cleared' }]), '1000px');
    } else if (p === 'devices') {
      const od = s.devOpen && devs.find(d => d.id === s.devOpen);
      if (!od) g.dv = this.dvVals(s, devs, f);
      else {
        const wx = od.type === 'weather', BELL = 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0';
        const TB = wx ? [['dashboard', 'Dashboard', I.grid], ['temprain', 'Temp \u00b7 Hum \u00b7 Pres', SEC_IC.temprain], ['rainfall', 'Rainfall', SEC_IC.rainfall], ['wind', 'Wind', SEC_IC.wind || 'M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7'], ['solarUv', 'Solar Radiation', SEC_IC.solarUv], ['info', 'Device Info', I.info]]
          : [['readings', 'Dashboard', I.grid], ['insights', 'Insights', I.spark], ['alerts', 'Alerts', BELL], ['info', 'Device Info', I.info]];
        const cur = TB.some(t => t[0] === s.devTab) ? s.devTab : TB[0][0], cat = s.dvdCat || od.type, SER = { 'WS-01': '4EC88F550E54', 'WS-02': '4EC88F551A07', 'SP-01': 'AXTCL_4E873A5B5898', 'SP-02': 'AXTCL_4E6FF1E989E5' };
        const open = d => this.setState({ devOpen: d.id, devTab: null, dvdDD: false, dvdCat: null });
        g.dvd = { name: od.name, prov: od.provider, ic: wx ? IC.weather : IC.soil, ibg: wx ? '#14A098' : '#7A4A35', last: od.status === 'Offline' ? 'No recent data' : '12 Nov 2026, ' + od.last, ldot: od.status === 'Offline' ? '#EF4444' : '#22C55E',
          back: () => this.setState({ devOpen: null, dvdDD: false }), dd: !!s.dvdDD, toggle: () => this.setState(st => ({ dvdDD: !st.dvdDD, dvdCat: null })), stop: e => e.stopPropagation(),
          full: () => { try { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen(); } catch (e) {} }, refresh: () => this.setState(st => ({ dvdTick: (st.dvdTick || 0) + 1 })),
          cats: [['weather', 'Weather', IC.weather], ['soil', 'Soil Probe', IC.soil]].map(([k, l, d]) => { const on = cat === k; return { l, d, n: String(devs.filter(x => x.type === k).length), bg: on ? '#E6F2EE' : 'transparent', fw: on ? 600 : 500, go: () => this.setState({ dvdCat: k }) }; }),
          list: devs.filter(x => x.type === cat).map(x => { const on = x.id === od.id; return { l: x.name, id: SER[x.id] || x.id, on, bg: on ? '#E6F2EE' : 'transparent', fg: on ? '#0B6B4B' : '#0F172A', go: () => open(x) }; }),
          tabs: TB.map(([k, l, d]) => { const on = cur === k; return { l, d, bg: on ? '#E6F2EE' : '#fff', fg: on ? '#0B6B4B' : '#334155', ind: on ? '#0B6B4B' : 'transparent', go: () => this.setState({ devTab: k }) }; }) };
        if (cur === 'info') g.info = this.info(od, f);
        else if (wx) { g.embedWx = true; g.embedTab = cur; g.embedDev = od.ref; }
        else { g.embedSoil = true; g.embedTab = cur; g.embedDev = od.ref; }
      }
    } else if (p === 'regional') {
      const zl = ZONES.map(([name, c, n]) => ({ name, c, farms: n + (n === 1 ? ' farm sharing' : ' farms sharing'), label: zoneText(name), rain: (40 + ((zoneByLabel(name) || { n: 1 }).n * 17) % 35) + ' mm', soil: (26 + ((zoneByLabel(name) || { n: 1 }).n * 7) % 12) + '%', bd: s.zoneFocus === name ? '#0EA5A4' : '#E2E8F0', go: () => this.setState(st => ({ zoneFocus: name, sub: { ...st.sub, regional: 'zones' }, sec: { ...st.sec, 'regional.zones': 'stations' }, zFcDet: null, zSpDet: null })) }));
      if (sub === 'map') { g.regionMap = true; g.zoneList = zl; g.rg = this.rgVals(s); }
      else if (sub === 'zones') {
        const zsc = this.sections('regional.zones', [['stations', 'Stations'], ['hist', 'Historical'], ['forecast', 'Forecast'], ['soil', 'Soil']]); g.sections = zsc.items; const tp = zsc.cur;
        const ZN = ZONE_LIST.filter(z => FARMS.some(f => f.zone === z.s)).map(z => [z.s, z.c]);
        const per = s.zPer || '1M', zo = s.zOpen || {}, pl = (n, w) => n + ' ' + w + (n === 1 ? '' : 's'), want = tp === 'soil' ? 'soil' : 'weather';
        const grp = ZN.map(([z, c]) => { const pr = REG.filter(p => p.z === z); return { z, c, pr, st: pr.flatMap(p => p.devs.filter(d => d.type === want).map(d => ({ p, d }))) }; });
        const allSt = grp.flatMap(x => x.st), det = tp === 'forecast' ? allSt.find(x => x.d.key === s.zFcDet) : tp === 'soil' ? allSt.find(x => x.d.key === s.zSpDet) : null;
        if (det) {
          const nm0 = det.d.town.split(',')[0], back = () => this.setState(tp === 'forecast' ? { zFcDet: null } : { zSpDet: null }), setK = k => this.setState(tp === 'forecast' ? { zFcDet: k } : { zSpDet: k });
          const zsel = { value: det.p.z, opts: grp.filter(x => x.st.length).map(x => ({ v: x.z, l: zoneText(x.z) })), set: e => { const zz = grp.find(x => x.z === e.target.value); if (zz && zz.st.length) setK(zz.st[0].d.key); } };
          const dsel = { lbl: tp === 'forecast' ? 'Forecast' : 'Soil probe', value: det.d.key, opts: (tp === 'forecast' ? [det] : (grp.find(x => x.z === det.p.z) || { st: [] }).st).map(({ d }) => ({ v: d.key, l: tp === 'forecast' ? det.p.z + ' forecast' : d.town.split(',')[0] + ' Soil Probe' })), set: e => setK(e.target.value) };
          if (tp === 'forecast') { const fsc = this.sections('regional.zfc', [['dash', 'Dashboard'], ['d10', '3–7 Day Forecast'], ['spray', 'Spray Conditions']]); g.zfd = { zsel, dsel, back, bl: 'All forecasts', t: nm0 + ' forecast', sub: det.p.z + ' \u00b7 ' + det.d.town, secs: fsc.items }; g.fc = { ...this.fcVals(fsc.cur, f, 0, true), loc: det.d.town }; }
          else { g.zfd = { zsel, dsel, back, bl: 'All soil probes', t: nm0 + ' Soil Probe', sub: det.p.z + ' \u00b7 ' + det.d.town, secs: null }; g.embedSoil = true; g.embedTab = 'readings'; g.embedDev = det.d.id === 'SP-02' ? 'p2' : 'p1'; }
        } else if (tp === 'soilGrid') {
          const hx = (v, n) => (v >>> 0).toString(16).toUpperCase().padStart(n, '0').slice(-n);
          g.zsoil = grp.map(({ z, c, st }) => ({ name: z, c, sub: pl(st.length, 'probe'), empty: !st.length, cards: st.map(({ d }) => { const off = d.status === 'Offline', dep = (s.zDep || {})[d.key] || '10 cm', a = soilAt(d.seed, parseInt(dep)), T = (l, v, u, p, cc) => ({ l, v: off ? '\u2014' : v, u: off ? '' : u, p, c: cc, sub: dep });
            return { name: d.town.split(',')[0] + ' Soil Probe', serial: 'AXTCL_' + hx(d.seed * 2654435761, 8) + hx(d.seed * 40503, 4), depth: dep, setDepth: e => { const v = e.target.value; this.setState(st => ({ zDep: { ...(st.zDep || {}), [d.key]: v } })); },
              tiles: [T('Moisture', (a.moist + (d.seed % 10) / 10).toFixed(1), '%', DROP, '#3B82F6'), T('Temp', (a.stemp + (d.seed % 7) / 10).toFixed(1), '\u00b0C', 'M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z', '#EF4444'), T('VIC', String(a.vic + 300), '', 'M3 12h4l3-7 4 14 3-7h4', '#7C3AED')],
              lt: off ? 'OFFLINE' : 'LIVE', lbg: off ? '#FEF2F2' : '#E6F7EE', lfg: off ? '#B91C1C' : '#15803D', ldot: off ? '#EF4444' : '#22C55E', lastS: 'Last sampling 12 Nov 2026, ' + d.last, go: () => this.setState({ zSpDet: d.key }) }; }) }));
        } else if (tp !== 'hist') {
          const DN = [['Wed', '11 Nov'], ['Thu', '12 Nov'], ['Fri', '13 Nov'], ['Sat', '14 Nov'], ['Sun', '15 Nov'], ['Mon', '16 Nov'], ['Tue', '17 Nov']];
          if (tp === 'forecast') {
            const DIC = (r) => r === 0 ? 'sun' : r <= 6 ? 'part' : 'wet';
            g.zfc = grp.map(({ z, c, st }) => { const fst = st[0]; if (!fst) return { name: z, c, empty: true, has: false };
              const d = fst.d, sd = d.seed, w = wxRead(sd), mx = wave(7, 16 + (sd % 5), 2, 3, 7, 2, 400 + sd), mn = wave(7, 8 + (sd % 4), 1.5, 3, 7, 2, 410 + sd), rn = rain(7, .55, 14, 420 + sd);
              const P = DN.map((x, i) => ({ d: x[0], hi: Math.round(mx[i]), lo: Math.round(mn[i]), rc: Math.min(95, Math.max(2, Math.round(rn[i] * 6 + 4))), wd: Math.round(w.wind + (i % 3) * 2), hu: Math.round(w.hum - 6 + ((i * 5 + sd) % 14)), ic: DIC(rn[i]) }));
              const best = f2 => P.reduce((a, b) => f2(b) > f2(a) ? b : a), R = best(x => x.rc), Wm = best(x => x.hi), Wd = best(x => x.wd), t0 = P[0];
              return { name: z, c, has: true, empty: false, go: () => this.setState({ zFcDet: d.key }),
                prim: [['Temperature', t0.hi + '\u00b0 / ' + t0.lo + '\u00b0', '', 't'], ['Rain chance', t0.rc, '%', 'r'], ['Wind speed', t0.wd, 'km/h', 'w'], ['Humidity', t0.hu, '%', 'h']].map(zCard),
                days: P.map((x, i) => ({ d: i === 0 ? 'Today' : x.d, t: x.hi + '\u00b0', sun: x.ic === 'sun', part: x.ic === 'part', wet: x.ic === 'wet', bg: i === 0 ? '#fff' : 'transparent', bd: i === 0 ? '#E2E8F0' : 'transparent' })),
                hl: [['Highest rain chance', R.d + ' ' + R.rc + '%', '#2563EB'], ['Warmest day', Wm.d + ' ' + Wm.hi + '\u00b0C', '#EA580C'], ['Strongest wind', Wd.d + ' ' + Wd.wd + ' km/h', '#16A34A']].map(([l, v, c2]) => ({ l, v, c: c2 })) }; });
          } else
          g.zhead = { stations: 'LATEST READINGS · EACH SHARING WEATHER STATION', forecast: '7-DAY FORECAST · EACH SHARING WEATHER STATION', soil: 'LATEST READINGS · EACH SHARING SOIL PROBE' }[tp];
          g.zrows = grp.map(({ z, c, pr, st }) => { const open = !!zo[z]; return { name: zoneText(z), c, sub: tp === 'forecast' ? (st.length ? '1 forecast' : 'No forecast') : pl(st.length, want === 'soil' ? 'probe' : 'station'), open, rot: open ? 'rotate(180deg)' : 'none', hbg: open ? '#F8FAFC' : '#fff', empty: !st.length, toggle: () => this.setState(x => { const cur = x.zOpen || {}; return { zOpen: { ...cur, [z]: !cur[z] } }; }),
            st: (tp === 'forecast' ? st.slice(0, 1) : st).map(({ p, d }) => { const off = d.status === 'Offline', hi = s.zHi === d.key, exp = (s.zExp || {})[tp + d.key] === true; let cards = [], days = [], cols = 'repeat(10,minmax(84px,1fr))', summ = '';
              if (!off && tp === 'stations') { const w = wxRead(d.seed); cards = [['Temperature', w.temp, '°C', 't'], ['Rainfall (last 24 hours)', w.r24.toFixed(1), 'mm', 'r'], ['Humidity', w.hum, '%', 'h'], ['Sea Level Pressure', w.msl, 'hPa', 'p'], ['Wind ' + w.dir, w.wind, 'km/h', 'w'], ['Wind gust', w.gust, 'km/h', 'w'], ['Solar Radiation', w.sol, 'W/m²', 's'], ['Evapotranspiration', w.et, 'mm', 'e'], ['Dew Point', w.dew, '°C', 'd'], ['Delta T', w.dt, '°C', 'dt']].map(zCard); }
              else if (!off && tp === 'soil') { const dep = (s.zDep || {})[d.key] || '10 cm', a = soilAt(d.seed, parseInt(dep)); cols = 'repeat(3,minmax(84px,1fr))'; cards = [['Moisture', a.moist, '%', 'r'], ['Soil temp', a.stemp, '°C', 'st'], ['VIC', a.vic + 300, '', 'v']].map(zCard); }
              else if (!off) { const w = wxRead(d.seed), sd = d.seed, mm = w.mm; summ = 'Today ' + mm[0] + '\u00b0 / ' + mm[1] + '\u00b0C \u00b7 ' + w.rn + ' mm rain \u00b7 wind ' + w.aw + ' km/h'; const mx = wave(7, 16 + (sd % 5), 2, 3, 7, 2, 400 + sd), mn = wave(7, 8 + (sd % 4), 1.5, 3, 7, 2, 410 + sd), rn = rain(7, .55, 14, 420 + sd); cols = 'repeat(7,minmax(92px,1fr))';
                days = DN.map(([dd, dt], i) => ({ d: dd, dt, hi: Math.round(mx[i]) + '\u00b0', lo: Math.round(mn[i]) + '\u00b0', rain: Math.min(95, Math.max(2, Math.round(rn[i] * 6 + 4))) + '%', wind: Math.round(w.wind + (i % 3) * 2) + ' km/h', hum: Math.round(w.hum - 6 + ((i * 5 + sd) % 14)) + '%', sun: rn[i] === 0, part: rn[i] > 0 && rn[i] <= 6, wet: rn[i] > 6 })); }
              const TP = tp === 'forecast' ? ['Forecast', '#FEF6DB', '#92400E'] : d.type === 'soil' ? ['Soil probe', '#FDF0E6', '#9A5B2B'] : ['Weather station', '#E8F0FE', '#1D4ED8'], compact = false;
              const toZ = () => this.setState(st => ({ sec: { ...st.sec, 'regional.zones': 'hist' }, zFcDet: null, zSt: d.key, zHOpen: { ...(st.zHOpen || {}), [p.z]: true } }));
              const tgl = () => this.setState(st => ({ zExp: { ...(st.zExp || {}), [tp + d.key]: !exp } }));
              const isWs = tp === 'stations' || tp === 'soil', sl = tp === 'soil'; return { ws: isWs ? { fx: sl ? '0 1 auto' : '1.4 1 480px', gc: sl ? 'repeat(3,minmax(140px,156px))' : 'repeat(auto-fit,minmax(140px,1fr))', fd: 'row', ta: 'left', ai: 'flex-start', gp: '9px', jc: sl ? 'flex-start' : 'center', loc: d.town.split(',')[0], hasSec: tp === 'stations', lt: off ? 'Offline' : 'Live', lbg: off ? '#FEF2F2' : '#E6F7EE', lfg: off ? '#B91C1C' : '#15803D', ldot: off ? '#EF4444' : '#22C55E', lring: off ? 'rgba(239,68,68,.18)' : 'rgba(34,197,94,.2)', ago: (/^\d/.test(d.last) ? '12 Nov 2026, ' : '') + d.last, prim: tp === 'soil' ? cards : [0, 1, 2, 4].map(i => cards[i]).filter(Boolean).map(c => /^Wind /.test(c.l) ? { ...c, l: 'Wind \u00b7 ' + c.l.slice(5) } : c), sec: [3, 5, 6, 7, 8, 9].map(i => cards[i]).filter(Boolean).map(c => ({ ...c, l: { 'Sea Level Pressure': 'Pressure', 'Wind gust': 'Gust', 'Solar Radiation': 'Solar', 'Evapotranspiration': 'ET', 'Dew Point': 'Dew point' }[c.l] || c.l })) } : null, notWs: !isWs, lab: tp === 'forecast' ? p.z + ' forecast' : TP[0], tl: TP[0], tbg: TP[1], tfg: TP[2], prov: tp === 'forecast' ? '' : d.provider, town: d.town, showTown: tp !== 'forecast', summ: compact ? summ : '', act2: null, act: tp === 'stations' ? { l: 'View weather', go: toZ } : tp === 'forecast' ? { l: 'View forecast', go: () => this.setState({ zFcDet: d.key }) } : { l: 'View dashboard', go: () => this.setState({ zSpDet: d.key }) }, kind: '', off, on: !off && !compact, offTxt: 'Offline · last reading ' + d.last, cols, cards, days, hasDepth: tp === 'soil' && !off, depth: (s.zDep || {})[d.key] || '10 cm', setDepth: e => { const v = e.target.value; this.setState(st => ({ zDep: { ...(st.zDep || {}), [d.key]: v } })); }, bg: hi ? '#F0FDF4' : '#fff', bd: hi ? '#16A34A' : '#E2E8F0' }; }) }; });
        } else {
          const all = grp.flatMap(x => x.st), cur = all.find(x => x.d.key === s.zSt) || all.find(x => x.d.status !== 'Offline') || all[0], w = wxRead(cur.d.seed), sd = cur.d.seed * 13, ytd = sd2 => 560 + (sd2 % 200);
          const ZCR = s.zCR || { from: '2026-10-01', to: '2026-11-12' }, MN3 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], pD = x => { const [y, m, dd] = x.split('-').map(Number); return new Date(y, m - 1, dd); }, isoD = dt => dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0'), prD = x => { const dt = pD(x); return dt.getDate() + ' ' + MN3[dt.getMonth()] + ' ' + dt.getFullYear(); };
          const cSpan = Math.max(2, Math.min(120, Math.round((pD(ZCR.to) - pD(ZCR.from)) / 864e5) + 1)), cLbl = Array.from({ length: cSpan }, (_, i) => { const dt = new Date(+pD(ZCR.from) + i * 864e5); return dt.getDate() + ' ' + MN3[dt.getMonth()]; });
          const LB = { Custom: cLbl, '1W': D7, '1M': D30, '3M': ['Aug', 'Sep', 'Oct', 'Nov'], '6M': ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'] }, NN = { Custom: cSpan, '1W': 7, '1M': 30, '3M': 13, '6M': 26, Custom: 10 };
          const lbl = LB[per], n = NN[per], pk = Math.round(n * .3), Y = ytd(sd);
          g.zbar = { chips: ['1W', '1M', '3M', '6M', 'Custom'].map(v => { const on = per === v; return { label: v, bd: on ? '#12855F' : '#E2E8F0', bg: on ? '#E8F6EF' : '#fff', fg: on ? '#0B6B4B' : '#475569', go: () => v === 'Custom' ? this.setState(st => ({ zCal: st.zCal ? null : { ...ZCR, edge: 'from', mo: pD(ZCR.to).getMonth() - 10 + (pD(ZCR.to).getFullYear() - 2026) * 12 } })) : this.setState({ zPer: v, zCal: null }) }; }), dd: null, txt: per === 'Custom' ? prD(ZCR.from) + ' \u2013 ' + prD(ZCR.to) : '' };
          if (s.zCal) { const cc = s.zCal, b0 = new Date(2026, 10 + cc.mo, 1), off0 = (b0.getDay() + 6) % 7, nd = new Date(b0.getFullYear(), b0.getMonth() + 1, 0).getDate(), TODAY = '2026-11-12', up = o => this.setState(st => ({ zCal: { ...st.zCal, ...o } }));
            const days = Array.from({ length: off0 }, () => ({ n: '', pick: null, bg: 'transparent', ink: 'transparent', ring: 'transparent', cursor: 'default', weight: 400 })).concat(Array.from({ length: nd }, (_, i) => { const iso = isoD(new Date(b0.getFullYear(), b0.getMonth(), i + 1)), fut = iso > TODAY, end = iso === cc.from || iso === cc.to, inr = iso > cc.from && iso < cc.to;
              return { n: String(i + 1), cursor: fut ? 'default' : 'pointer', ink: fut ? '#CBD5E1' : end ? '#fff' : inr ? '#0E7C3A' : '#0F1A14', bg: end ? '#1AA34A' : inr ? '#E7F6EC' : 'transparent', ring: iso === TODAY && !end ? '#1AA34A' : 'transparent', weight: end ? 700 : 500,
                pick: fut ? null : () => cc.edge === 'from' ? up({ from: iso, to: iso > cc.to ? iso : cc.to, edge: 'to' }) : iso < cc.from ? up({ from: iso }) : up({ to: iso, edge: 'from' }) }; }));
            const sp = Math.round((pD(cc.to) - pD(cc.from)) / 864e5) + 1, lastMo = cc.mo >= 0;
            g.zbar.cal = { month: MN3[b0.getMonth()] + ' ' + b0.getFullYear(), days, dow: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'], span: sp + (sp === 1 ? ' day' : ' days'), from: prD(cc.from), to: prD(cc.to), fBd: cc.edge === 'from' ? '#1AA34A' : '#E5E8E6', tBd: cc.edge === 'to' ? '#1AA34A' : '#E5E8E6', fBg: cc.edge === 'from' ? '#F2FBF5' : '#fff', tBg: cc.edge === 'to' ? '#F2FBF5' : '#fff',
              pickFrom: () => up({ edge: 'from' }), pickTo: () => up({ edge: 'to' }), prev: () => up({ mo: cc.mo - 1 }), next: () => { if (!lastMo) up({ mo: cc.mo + 1 }); }, nextInk: lastMo ? '#CBD5E1' : '#3F4B45', cancel: () => this.setState({ zCal: null }), apply: () => this.setState({ zCR: { from: cc.from, to: cc.to }, zPer: 'Custom', zCal: null, zoom: {} }), stop: e => e.stopPropagation() }; }
          const nm = cur.p.z + ' \u00b7 ' + cur.d.town + ' \u00b7 Weather station \u00b7 ' + cur.d.provider;
          const OPT = [['rain', 'Rainfall'], ['temp', 'Temperature'], ['hum', 'Relative humidity'], ['sol', 'Solar radiation'], ['msl', 'Mean sea level pressure'], ['wind', 'Wind speed'], ['et', 'Evapotranspiration'], ['dew', 'Dew point'], ['dt', 'Delta T']], sel = s.zGr || ['rain'];
          g.zbar.dd = { label: 'Graphs (' + sel.length + ')', open: !!s.zGrOpen, toggle: () => this.setState(st => ({ zGrOpen: !st.zGrOpen })), opts: OPT.map(([v, l]) => ({ l, chk: sel.includes(v) ? 1 : 0, bg: sel.includes(v) ? '#12855F' : '#fff', bd: sel.includes(v) ? '#12855F' : '#CBD5E1', go: () => this.setState(st => { const c0 = st.zGr || ['rain']; return { zGr: c0.includes(v) ? c0.filter(x => x !== v) : OPT.map(o => o[0]).filter(x => c0.includes(x) || x === v) }; }) })) };
          const L = (title, sub0, lb0, lines, o) => { const zk = 'zh' + per + (title.length + title.charCodeAt(0)), w = (s.zoom || {})[zk]; let ln = lines, lb = lb0;
            if (w) { ln = lines.map(l => [l[0], l[1], l[2].slice(w[0], w[1] + 1), l[3]]); lb = lb0.length === n ? lb0.slice(w[0], w[1] + 1) : lb0.filter((_, i) => { const x = i / Math.max(1, lb0.length - 1) * (n - 1); return x >= w[0] && x <= w[1]; }); if (!lb.length) lb = [lb0[0]]; }
            const c = Lraw(title, sub0, lb, ln, o); return { ...c, zk, zn: String(n), zctl: true, zoomed: !!w, zin: () => this.zoomStep(zk, n, .7), zout: () => this.zoomStep(zk, n, 1.45), zreset: () => this.setState(st => ({ zoom: { ...(st.zoom || {}), [zk]: null } })) }; };
          const Combo = () => { const zk = 'zhrain' + per, w = (s.zoom || {})[zk], rnF = wave(n, Y / n * .9, Y / n * 1.6, 4, 9, Y / n * 1.2, 520 + sd).map((v, i) => Math.max(0, +((v - Y / n * .55) * (((i * 7 + sd) % 5) < 2 ? 0 : 1.4)).toFixed(1))), cuF = cum(rnF);
            const a0 = w ? w[0] : 0, a1 = w ? w[1] : n - 1, rn = rnF.slice(a0, a1 + 1), cu = cuF.slice(a0, a1 + 1), m = rn.length, lb = lbl.length === n ? lbl.slice(a0, a1 + 1) : lbl.filter((_, i) => { const x = i / Math.max(1, lbl.length - 1) * (n - 1); return x >= a0 && x <= a1; });
            const mb = Math.max(1, Math.ceil(Math.max(...rn) * 1.15)), mc = Math.max(1, Math.ceil(Math.max(...cu) * 1.1 / 10) * 10), tk = (mx, d) => [mx, mx * 2 / 3, mx / 3, 0].map(v => (+v.toFixed(d)).toString());
            return { title: 'Rainfall (mm)', sub: nm, isCombo: true, axisOn: true, ticks: tk(mb, 1), rticks: tk(mc, 0), xl: lb.length ? lb : [lbl[0]], span: '2', h: '340px', zk, zn: String(n), zctl: true, zoomed: !!w,
              zin: () => this.zoomStep(zk, n, .7), zout: () => this.zoomStep(zk, n, 1.45), zreset: () => this.setState(st => ({ zoom: { ...(st.zoom || {}), [zk]: null } })),
              legend: [{ name: 'Rainfall (mm)', c: '#38BDF8', ls: 'solid' }, { name: 'Cumulative rainfall (mm)', c: '#1D4ED8', ls: 'solid' }],
              cbars: rn.map((v, i) => ({ h: (v / mb * 100).toFixed(1) + '%', tip: (lb[Math.round(i / Math.max(1, m - 1) * (lb.length - 1))] || '') + ': ' + v + ' mm' })),
              cline: cu.map((v, i) => ((i + .5) / m * 600).toFixed(1) + ',' + (200 - v / mc * 200).toFixed(1)).join(' ') }; };
          const C = {
            rain: Combo,
            temp: () => L('Temperature (\u00b0C)', nm, lbl, [['Max', '#dc2626', wave(n, w.temp + 6, 5, pk, n, 2, 500 + sd)], ['Min', '#2563eb', wave(n, w.temp - 4, 4, pk, n, 2, 510 + sd)]], { h: '150px', u: '\u00b0' }),
            ytd: () => L('Cumulative rainfall (mm)', nm, lbl, [['Rainfall', '#2563eb', cum(wave(n, Y / n, Y / n * .5, 4, 10, 10, 520 + sd).map(v => Math.max(0, v)))]], { h: '150px', area: true }),
            hum: () => L('Relative humidity (%)', nm, lbl, [['Humidity', '#0EA5E9', walk(n, w.hum, 0, 8, 540 + sd, 30, 95)]], { h: '150px', area: true, u: '%' }),
            sol: () => L('Solar radiation (W/m\u00b2)', nm, lbl, [['Solar', '#CA8A04', wave(n, w.sol * .6, w.sol * .3, pk, n, 60, 570 + sd)]], { h: '150px', area: true }),
            msl: () => L('Mean sea level pressure (hPa)', nm, lbl, [['MSL', '#475569', walk(n, w.msl, 0, 2, 580 + sd, 1000, 1030)]], { h: '150px' }),
            et: () => L('Evapotranspiration (mm)', nm, lbl, [['ET', '#059669', walk(n, +w.et, 0, .6, 600 + sd, 0.5, 8)]], { h: '150px', area: true }),
            dew: () => L('Dew point (\u00b0C)', nm, lbl, [['Dew point', '#3B82F6', walk(n, w.dew, 0, 1.6, 610 + sd, -2, 18)]], { h: '150px', u: '\u00b0' }),
            dt: () => L('Delta T (\u00b0C)', nm, lbl, [['Delta T', '#EA580C', walk(n, +w.dt, 0, 1.4, 620 + sd, 0, 12)]], { h: '150px', area: true, u: '\u00b0' }),
            wind: () => L('Wind speed (km/h)', nm, lbl, [['Wind', '#16A34A', walk(n, w.wind, 0, 4, 590 + sd, 1, 40)]], { h: '150px', area: true }) };
          g.charts = sel.filter(v => C[v]).map(v => C[v]()); if (!g.charts.length) g.charts = [Combo()]; g.charts.forEach(c => { c.h = g.charts.length === 1 ? '340px' : '160px'; });
          g.charts.forEach(c => { c.span = '2'; }); g.zspan = 1; g.cw = 'grid-column:2;grid-row:1;min-width:0;background:#fff;border:1px solid #E2E8F0;border-radius:16px;box-shadow:0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03);padding:14px;display:flex;flex-direction:column;gap:12px';
          g.chCols = 'minmax(220px,280px) minmax(0,1fr)';
          const zh = s.zHOpen || { [cur.p.z]: true };
          g.zl = grp.map(({ z, c, pr, st }) => { const open = !!zh[z]; return { name: zoneText(z), c, sub: pl(st.length, 'station'), open, rot: open ? 'rotate(180deg)' : 'none', toggle: () => this.setState(x => { const c0 = x.zHOpen || { [cur.p.z]: true }; return { zHOpen: { ...c0, [z]: !c0[z] } }; }), st: st.map(({ p, d }) => { const on = d.key === cur.d.key, ww = wxRead(d.seed); return { lab: d.town, prov: d.provider, sub: '', a: d.status === 'Offline' ? 'Offline' : ww.temp + '\u00b0C now', b: ytd(d.seed * 13) + ' mm cumulative', bg: on ? '#F0FDF4' : '#fff', bd: on ? '#16A34A' : '#E2E8F0', go: () => this.setState({ zSt: d.key }) }; }) }; });
        }
      } else if (sub === 'bench') {
        g.soon = { t: 'Benchmarking', x: 'Compare how your farm performs against other producers in your zone, using only data farms have chosen to share. Benchmark yield per hectare, soil health and seasonal conditions to see where you stand and where to improve.', items: [{ t: 'Yield performance', x: 'Yield per hectare, water and nitrogen use efficiency against the zone average', d: 'M3 20h18M6 16v-5M11 16V8M16 16v-3M21 16V5' }, { t: 'Soil health', x: 'pH, organic carbon and nutrient levels compared with optimal ranges', d: 'M12 20.5v-8.5M12 12c0-4.2 3-7.2 8-7.2 0 4.2-3 7.2-8 7.2zM12 10.2C12 6.6 9.4 4 5 4c0 3.6 2.6 6.2 7 6.2zM5 20.5h14' }, { t: 'Seasonal conditions', x: 'Rainfall and temperature this season compared across the region', d: 'M7 13a4 4 0 0 1 .5-7.97A5 5 0 0 1 17 6a3.5 3.5 0 0 1 0 7zM8.5 16l-.8 3M12 16l-.8 3M15.5 16l-.8 3' }] };
      } else {
        const bsc = this.sections('regional.bench', [['perf', 'Performance Benchmark'], ['bsoil', 'Soil Health Benchmark'], ['season', 'Seasonal Conditions']]); g.sections = bsc.items;
        const ZN = ZONE_LIST.filter(z => FARMS.some(f => f.zone === z.s)).map(z => [z.s, z.c]);
        const CR = ['Milk', 'Wheat', 'Canola', 'Barley', 'Wool'], CC = { Milk: '#EA7B3C', Wheat: '#8B6FD1', Canola: '#1E6FD9', Barley: '#E8B923', Wool: '#1E3A8A' }, CF = { Milk: 1.4, Wheat: 1, Canola: .85, Barley: 1.05, Wool: .55 };
        const bz = s.bzone || 0, bc = s.bcrop || 0, by = s.byear || 0, YR = ['2026', '2025', '2024'], vis = bc === 0 ? CR : [CR[bc - 1]], zname = ZN[bz][0];
        const rd = (i, sd, lo, hi) => { const x = Math.sin(i * 12.9898 + sd * 78.233) * 43758.5453; return lo + (x - Math.floor(x)) * (hi - lo); };
        const ps = [0, 1, 2].map(j => bz * 3 + j), pname = i => 'Producer ' + (i + 1), PC = ['#1E6FD9', '#EA7B3C', '#8B6FD1'];
        const yph = (i, c) => +(rd(i, CR.indexOf(c) + 11, 2.3, 3.5) * CF[c]).toFixed(2), avgYph = i => +(vis.reduce((s2, c) => s2 + yph(i, c), 0) / vis.length).toFixed(2);
        const AREA = i => Math.round(rd(i, 1, 60, 160)), WUE = i => +(rd(i, 3, 1.8, 2.6)).toFixed(2), NUE = i => +rd(i, 4, 20, 28).toFixed(2);
        const set = (k, v) => () => this.setState({ [k]: v });
        const listBox = (t, key, items, cur) => ({ t, list: true, sel: false, clear: set(key, 0), items: items.map((l, i) => ({ l, bg: i === cur ? '#043C2C' : '#fff', go: set(key, i) })) });
        const selBox = (t, key, items, cur) => ({ t, list: false, sel: { value: cur, set: e => this.setState({ [key]: +e.target.value }), opts: items.map((l, i) => ({ v: i, label: l })) }, clear: set(key, 0), items: [] });
        const cropItems = ['All'].concat(CR);
        const farmsZ = FARMS.filter(f => f.zone === zname), cen = farmsZ.length ? [farmsZ.reduce((s2, f) => s2 + f.lng, 0) / farmsZ.length, farmsZ.reduce((s2, f) => s2 + f.lat, 0) / farmsZ.length] : [147.7, -36.4];
        const OFF = [[-.012, .005], [.011, -.004], [.002, .012]];
        this._benchPts = { c: cen, pts: ps.map((i, j) => ({ ll: [cen[0] + OFF[j][0], cen[1] + OFF[j][1]], c: PC[j] })) };
        const mapLeg = ps.map((i, j) => ({ n: pname(i), c: PC[j] }));
        const cropLeg = vis.map(c => ({ n: c, c: CC[c] }));
        const card = (title, leg, el) => ({ title, leg, el });
        const B2 = { perf: bsc.cur === 'perf', soil: bsc.cur === 'bsoil', season: bsc.cur === 'season', map: { leg: mapLeg } };
        if (B2.perf) {
          B2.boxes = [listBox('Zone', 'bzone', ZN.map(z => z[0]), bz), listBox('Production', 'bcrop', cropItems, bc)];
          B2.table = { title: yr => '', t: '2026 Season Summary', rows: ps.map(i => ({ cells: [pname(i), String(Math.round(AREA(i) * avgYph(i))), avgYph(i).toFixed(2), WUE(i).toFixed(2), NUE(i).toFixed(2), AREA(i).toFixed(2)] })) };
          const vals = ps.map(i => avgYph(i)), zavg = +(vals.reduce((s2, v) => s2 + v, 0) / 3).toFixed(2), top = Math.ceil(Math.max(...vals) + .3);
          B2.c1 = card('Producer Benchmark: Average Yield per Hectare', [], bBar({ cats: ps.map(pname), v: vals, bench: zavg, yr: [0, top, top], yt: 'Avg. Yield (t/h)', xt: 'Producer' }));
          B2.c2 = card('Yield Benchmark Across Seasons by Crop', cropLeg, bLine({ xl: ['2023', '2024', '2025', '2026'], l: [1, 5, 4], yt: 'Avg. Yield(t/h)', xt: 'Season', ser: vis.map((c, ci) => { const base = ps.reduce((s2, i) => s2 + yph(i, c), 0) / 3; return { n: c, c: CC[c], v: [base - .25, base - .12, base - .05, base].map(v => +v.toFixed(1)), lab: [0, 3] }; }) }));
          const pts = (xs, xlo, xhi) => { const o = []; ps.forEach(i => vis.forEach(c => { o.push({ x: rd(i, CR.indexOf(c) + xs, xlo, xhi), y: yph(i, c) * 3.4 + rd(i, 31, -1, 1), c: CC[c] }); })); return o; };
          B2.c3 = card('Yield (t/ha) vs Water Applied (ML)', cropLeg, bScatter({ pts: pts(41, 100, 470), xr: [100, 500, 4], yr: [0, 20, 2], yt: 'Total Yield(t/h)', xt: 'Sum of Water Applied (ML)' }));
          B2.c4 = card('Yield (t/ha) vs Nitrogen Applied (kg/ha)', cropLeg, bScatter({ pts: pts(51, 120, 750), xr: [0, 800, 4], yr: [0, 20, 2], yt: 'Total Yield(t/h)', xt: 'Sum of NitrogenApplied (kg/ha)' }));
          B2.map.title = 'Water Use Efficiency (t/ML) Across ' + zname;
        } else if (B2.soil) {
          B2.boxes = [selBox('Zone', 'bzone', ZN.map(z => z[0]), bz), selBox('Production', 'bcrop', cropItems, bc)];
          const MS = ['Nov 2025', 'Jan 2026', 'Mar 2026', 'May 2026', 'Jul 2026', 'Sep 2026'], ph = wave(12, 6.0 + bz * .03, .38, 3, 12, .12, 910 + bz).map(v => +v.toFixed(2));
          B2.c1 = card('Seasonal pH Benchmarking Against Optimal Limits', [{ n: 'pH', c: '#118DFF' }, { n: 'Optimal_Min', c: '#15803d' }, { n: 'Optimal_Max', c: '#dc2626' }], bLine({ xl: MS, l: [5.6, 6.4, 4], r: [20, 60, 4], xt: 'Year', ser: [{ n: 'pH', c: '#118DFF', v: ph, lab: [0, 3, 6, 11] }, { n: 'min', c: '#15803d', v: [5.8, 5.8], dash: '5 3', w: 1.6 }, { n: 'max', c: '#dc2626', v: [6.25, 6.25], dash: '5 3', w: 1.6 }] }));
          const gv = f => ps.map(i => f(i)), NV = gv(i => +rd(i, 7, 14, 34).toFixed(2)), PV = gv(i => +rd(i, 8, 9, 20).toFixed(2)), KV = gv(i => +rd(i, 9, 190, 300).toFixed(2));
          B2.c2 = card('Average N, P, K Levels by Producer', [{ n: 'Average of N (mg/kg)', c: '#118DFF' }, { n: 'Average of P (mg/kg)', c: '#1E2A8A' }, { n: 'Average of K (mg/kg)', c: '#E8703A' }], bGroup({ cats: ps.map(pname), grp: [{ c: '#118DFF', v: NV }, { c: '#1E2A8A', v: PV }, { c: '#E8703A', v: KV }], yr: [0, 300, 3], xt: 'Producer' }));
          const ec = wave(12, .41, .06, 3, 12, .02, 920 + bz).map(v => +v.toFixed(2));
          B2.c3 = card('Soil Health Trends Over Time', [{ n: 'pH', c: '#118DFF' }, { n: 'EC (dS/m)', c: '#1E2A8A' }], bLine({ xl: MS, l: [5.6, 6.4, 4], r: [.3, .5, 2], yt: 'pH', rt: 'EC (dS/m)', xt: 'Date', ser: [{ n: 'pH', c: '#118DFF', v: ph }, { n: 'EC', c: '#1E2A8A', v: ec, ax: 'r', w: 2.4 }] }));
          B2.map.title = 'Soil pH Distribution by Producer';
        } else {
          B2.boxes = [selBox('Zone', 'bzone', ZN.map(z => z[0]), bz), selBox('Year', 'byear', YR, by)];
          const nm = by === 0 ? 10 : 12, ML = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].slice(0, nm), rnf = wave(nm, 52 - bz * 3 + by * 4, 34, 7, nm, 10, 960 + bz * 3 + by).map(v => Math.max(6, Math.round(v))), cm = cum(rnf), mxr = Math.ceil((Math.max(...rnf) + 6) / 20) * 20, mxc = Math.ceil((cm[cm.length - 1] + 20) / 100) * 100;
          B2.c1 = card('Rainfall vs Cumulative Rainfall Trend', [{ n: 'Total Rainfall (mm)', c: '#1E9A3C' }, { n: 'Cumulative Rainfall', c: '#6FB6F7' }], bLine({ xl: ML, l: [0, mxr, 5], r: [0, mxc, 5], yt: 'Rainfall(mm)', rt: 'Cumulative Rainfall', xt: 'Month', ser: [{ n: 'Total', c: '#1E9A3C', v: rnf, w: 2.6 }, { n: 'Cum', c: '#6FB6F7', v: cm, ax: 'r', dash: '4 3', w: 2.4 }] }));
          const dec = [18, 28, 41, 49, 72].map(v => v + bz);
          B2.c2 = card('Monthly Rainfall Performance Against Historical Deciles', [{ n: 'Total Rainfall (mm)', c: '#1E9A3C' }, { n: '10%', c: '#9CCBF5' }, { n: '30%', c: '#808080' }, { n: '50%', c: '#F0A0A8' }, { n: '70%', c: '#999' }, { n: '90%', c: '#4DA6FF' }], bLine({ xl: ML, l: [0, mxr, 5], yt: 'Rainfall(mm)', xt: 'Month', ser: [{ n: 'Total', c: '#1E9A3C', v: rnf, dash: '4 3', w: 2.4 }].concat([['10%', '#9CCBF5'], ['30%', '#808080'], ['50%', '#F0A0A8'], ['70%', '#999999'], ['90%', '#4DA6FF']].map(([l, c], q) => ({ n: l, c, v: [dec[q], dec[q]], w: 3, el: l }))) }));
        }
        g.bench = B2; g.sections = bsc.items;
      }
    } else if (p === 'data') {
      g.upw = s.up ? this.upVals(s) : false; { g.dp = this.dataVals(s, devs); g.dpList = !g.dp.detail; }
    } else if (p === 'providers') {
      g.pv = this.provVals(s);
      g.providers = null;
    } else if (p === 'settings' && sub === 'farm') {
      const fd = { name: f.name, abn: f.abn, loc: f.loc, area: f.area, ent: f.ent, phone: f.phone, ...(s.farmEd[fi] || {}) };
      const set = k => e => { const v = e.target.value; this.setState(st => ({ farmEd: { ...st.farmEd, [fi]: { ...(st.farmEd[fi] || {}), [k]: v } }, farmSaved: false })); };
      g.farmForm = { ...fd, zone: f.zone, saved: s.farmSaved, setName: set('name'), setAbn: set('abn'), setLoc: set('loc'), setArea: set('area'), setEnt: set('ent'), setPhone: set('phone'), save: () => this.setState({ farmSaved: true, farmEditing: false }) };
      if (!s.farmEditing) { g.farmForm = null; const sh = s.share[fi], upd = fn => this.setState(st => { const a = st.share.slice(); a[fi] = fn(a[fi]); return { share: a }; });
        g.fdv = { rows: [['Description', f.name + ', onboarded for the UMP+ pilot.'], ['Address', fd.loc], ['Zone', zoneText(f.zone)], ['Phone number', fd.phone || '\u2014'], ['Owner name', 'Emma Barnes'], ['Email address', 'emma@thowglacreek.com.au'], ['ABN number', fd.abn]].map(([l, v]) => ({ l, v, c: l === 'Zone' ? '#0F766E' : '#0F172A', fw: l === 'Zone' ? 600 : 400 })), edit: () => this.setState({ farmEditing: true }), total: 'Users (4)', owners: '1', users: '2', viewers: '1', manageUsers: () => this.go('settings', 'users'),
          devTitle: 'Devices (' + devs.filter(d => d.type !== 'other').length + ')', devs: devs.filter(d => d.type !== 'other').map(d => ({ name: d.name, prov: d.provider, wx: d.type === 'weather', bg: d.type === 'weather' ? '#E0F5F1' : '#F3E8E4', fg: d.type === 'weather' ? '#0F766E' : '#7A4A35', ico: d.type === 'weather' ? 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M2 12h2M20 12h2' : 'M12 21V9M8 13l4-4 4 4M6 21h12' })), manageDev: () => this.setState({ page: 'providers', provMode: 'mine', provFilter: null }),
          shYes: !!sh.on, shNo: !sh.on, yesBg: sh.on ? '#043C2C' : '#fff', yesFg: sh.on ? '#fff' : '#334155', noBg: sh.on ? '#fff' : '#043C2C', noFg: sh.on ? '#334155' : '#fff', setYes: () => upd(x => ({ ...x, on: true, t: x.t && x.t.length ? x.t : ['ws', 'sp'] })), setNo: () => upd(x => ({ ...x, on: false })) }; }
    } else if (p === 'settings' && sub === 'users') {
      const base = [['Tom Whitfield', 'tom@gregfarm.com.au', 'Owner', 'Active'], ['Dan Pearce', 'dan.pearce@gmail.com', 'User', 'Active'], ['Mia Chen', 'mia.chen@gmail.com', 'Viewer', 'Active'], ['Ruby Ellis', 'ruby.ellis@gmail.com', 'User', 'Active']];
      const RC = { Owner: ['#FEF3C7', '#B45309'], User: ['#E0E7FF', '#1E3A8A'], Viewer: ['#DCFCE7', '#166534'], Admin: ['#F3E8FF', '#7E22CE'] }, uq = (s.uq || '').toLowerCase(), ur = s.ur || '', us = s.us || '';
      const all = (s.invites[fi] || []).map(x => [x.name || x.email.split('@')[0], x.email, x.role, 'Invited']).concat(base).map(r => { const role = (s.uRoles || {})[r[1]] || r[2]; return { name: r[0], email: r[1], role, rb: RC[role][0], rf: RC[role][1], farm: f.name, status: r[3], sdot: r[3] === 'Active' ? '#16A34A' : '#D97706', sfg: r[3] === 'Active' ? '#15803D' : '#B45309', setRole: e => { const v = e.target.value; if (v !== role) this.setState({ uRoleChg: { email: r[1], name: r[0], from: role, to: v } }); } }; });
      const rows = all.filter(r => (!uq || (r.name + r.email).toLowerCase().includes(uq)) && (!ur || r.role === ur) && (!us || r.status === us));
      const sel = (key, v) => e => this.setState({ [key]: e.target.value });
      const AV = ['#0F766E', '#1D4ED8', '#7C3AED', '#B45309', '#BE185D', '#0E7490'], del = s.uDel || [], live = all.filter(r => !del.includes(r.email));
      const ut = s.uTab || 'all', lst = live.filter(r => (ut === 'all' || r.status.toLowerCase() === ut) && (!uq || (r.name + r.email).toLowerCase().includes(uq)));
      const cur = live.find(r => r.email === s.uSel) || lst[0], ini = n => n.split(/[\s.]+/).filter(Boolean).slice(0, 2).map(x => x[0].toUpperCase()).join('');
      const PERM = { Owner: [1, 1, 1, 1, 1, 1, 1], User: [1, 1, 1, 1, 1, 1, 0], Viewer: [1, 1, 1, 0, 0, 0, 0] }, MODS = ['Weather and season', 'Soil probes', 'Livestock', 'Alerts', 'Devices', 'Data uploads', 'Farm settings and users'];
      g.up2 = { q: s.uq || '', setQ: sel('uq'),
        tabs: [['all', 'All'], ['active', 'Active'], ['invited', 'Invited']].map(([k, l]) => { const on = ut === k; return { l, n: String(live.filter(r => k === 'all' || r.status.toLowerCase() === k).length), bd: on ? '#043C2C' : '#E2E8F0', bg: on ? '#043C2C' : '#fff', fg: on ? '#fff' : '#334155', cbg: on ? 'rgba(255,255,255,.18)' : '#EEF2F7', cfg: on ? '#fff' : '#475569', go: () => this.setState({ uTab: k }) }; }),
        list: lst.map((r, i) => ({ name: r.name, sub: r.email, ini: ini(r.name), abg: AV[live.indexOf(r) % AV.length], role: r.role, rb: r.rb, rf: r.rf, bg: cur && cur.email === r.email ? '#F0F7F4' : '#fff', go: () => this.setState({ uSel: r.email }) })), empty: !lst.length,
        noSel: !cur, d: cur ? { name: cur.name, email: cur.email, ini: ini(cur.name), abg: AV[live.indexOf(cur) % AV.length], role: cur.role, rb: cur.rb, rf: cur.rf, status: cur.status, sfg: cur.sfg, sdot: cur.sdot, farm: f.name, zone: f.zone, setRole: cur.role === 'Owner' ? () => {} : cur.setRole, isOwner: cur.role === 'Owner', notOwner: cur.role !== 'Owner', guide: roleGuide(cur.role),
          tip: cur.role === 'Owner' ? 'Every farm must have an owner, so the owner role can\u2019t be changed or removed.' : cur.status === 'Invited' ? 'Invite sent. ' + cur.name + ' can sign in once they accept it.' : 'Role changes apply the next time ' + cur.name.split(' ')[0] + ' opens the portal.',
          remove: () => this.setState(st => ({ uDel: (st.uDel || []).concat(cur.email), uSel: null })),
          perms: MODS.map((m, k) => { const ok = !!PERM[cur.role][k]; return { m, ok, no: !ok, fg: ok ? '#0F172A' : '#94A3B8' }; }) } : {} };
    } else if (p === 'settings' && sub === 'sharing') {
      const sh = s.share[fi];
      const TY = [['ws', 'Weather station data', 'Temperature, rainfall, humidity and wind from this farm\u2019s stations'], ['sp', 'Soil probe data', 'Soil moisture and temperature by depth'], ['hl', 'Livestock heat load', 'Heat Load Index from configured pens'], ['bm', 'Pasture biomass', 'Growth rate and standing biomass']];
      const upd = fn => this.setState(st => { const a = st.share.slice(); a[fi] = fn(a[fi]); return { share: a, shareSaved: false }; });
      g.sharing = { farm: f.name, zone: zoneText(f.zone), bg: sh.on ? '#0EA5A4' : '#cbd5e1', knob: sh.on ? '23px' : '3px', op: sh.on ? 1 : .5, saved: s.shareSaved, toggle: () => upd(x => ({ ...x, on: !x.on })), save: () => this.setState({ shareSaved: true }),
        types: TY.map(([k, label, desc]) => { const on = sh.t.includes(k); return { label, desc, tick: on ? '✓' : '', bd: on ? '#0EA5A4' : '#cbd5e1', bg: on ? '#0EA5A4' : '#fff', toggle: () => sh.on && upd(x => ({ ...x, t: on ? x.t.filter(z => z !== k) : x.t.concat(k) })) }; }) };
    } else if (p === 'support') {
      const SC = { Open: ['#EEF2FF', '#1E3A8A'], 'In progress': ['#FFF7ED', '#C2410C'], 'Awaiting reply': ['#FEF6DB', '#92400E'], Resolved: ['#ECFDF5', '#15803D'] }, mine = s.tickets.filter(t => t.farm === f.name);
      g.tix = { farm: f.name, n: mine.length + (mine.length === 1 ? ' ticket' : ' tickets'), empty: !mine.length, open: () => this.openTk(),
        rows: mine.map(t => ({ ...t, sbg: (SC[t.status] || SC.Open)[0], sfg: (SC[t.status] || SC.Open)[1], go: () => this.setState({ tkSel: t.id }) })) };
    } else if (p === 'profile') {
      if (sub === 'account') g.account = true; else g.password = true;
    }
    const inf = g.info || g.infoPop; this._infoLL = inf ? inf.ll : null; this._infoType = inf ? inf.type : null; this._infoFarm = f; this._infoDevs = devs.filter(d => d.type !== 'other');
    if (g.zfc) g.zrows = null; if (g.metrics) g.metrics = g.metrics.map(m => ({ pad: '14px 16px', span: 'auto', ...m })); if (!g.mCols) g.mCols = 'repeat(auto-fit,minmax(150px,1fr))'; if (!g.chAlign) g.chAlign = 'start'; if (g.charts) g.charts.forEach(c => { if (c && !c.bh) c.bh = '14px'; }); if (g.charts) g.charts = g.charts.map(c => this.zoomLine(c));
    if (g.charts) g.charts.forEach(c => { if (c.axisOn == null) c.axisOn = !c.isHBars; }); g.tableTop = g.table && p === 'regional' && sub === 'bench' ? g.table : null; g.tableBot = g.table && !g.tableTop ? g.table : null; if (!g.cw) g.cw = 'display:contents'; if (!g.chCols) g.chCols = 'repeat(2,minmax(0,1fr))';
    g.chRows = 'none';
    g.secRight = !!(g.sections && g.chipsRight) || !!(g.sections && !g.chips2 && !g.toggle && !g.stStatus && !g.devInfo && !g.hliBtns && (g.selector || g.stPick || g.meta));
    g.hasBar = !g.secRight && !!(g.selectorL || g.selector || g.stPick || g.chips2 || g.toggle || g.meta || g.hliBtns);
    g.hasNavRow = !!(g.hasBar || g.sections || g.inl); g.hdrR = '12px'; g.barBd = g.sections ? '1px solid #F1F5F9' : '0';
    if (g.meta) { const [ml, mv] = g.meta.split(' · '); g.metaL = ml + ':'; g.metaV = mv || ''; }
    if (g.selector) { const o = g.selector.opts[+g.selector.value] || g.selector.opts[0]; g.stTitle = o ? o.label : ''; const lb = g.selector.label.toLowerCase(); g.selBtn = g.selector.opts.length > 1 ? 'Change ' + lb : lb.charAt(0).toUpperCase() + lb.slice(1); g.selTitle = 'Choose ' + lb; } g.barJ = g.sections ? 'flex-end' : 'flex-start';
    return g;
  }
  polList(s, devs, f) {
    const W = devs.filter(d => d.type === 'weather'), P = devs.filter(d => d.type === 'soil'), ix = d => String(devs.indexOf(d)), C = (k, op, val) => [{ k, op, val }];
    const base = [
      { id: 'frost', name: 'Frost watch - 2\u00b0C', dev: ix(W[0]), conds: C('temp', 'drops to or below', '2'), via: ['SMS', 'Email'], freq: 'Every hour', priority: 'High', fired: 14, last: '3 d ago' },
      { id: 'gust', name: 'Spray window - Gust 30 km/h', dev: ix(W[0]), conds: C('gust', 'rises above', '30'), via: ['Mobile Notification', 'Email'], freq: 'Every 6 hours', priority: 'Medium', fired: 22, last: '9 h ago' },
      P[0] && { id: 'm18', name: 'Top paddock moisture - 18%', dev: ix(P[0]), conds: C('m30', 'drops to or below', '18'), via: ['Email'], freq: 'Once a day', priority: 'Medium', fired: 41, last: '16 h ago' },
      { id: 'hli', name: 'Pen 1 heat load - HLI 86', dev: 'hli', conds: C('hli', 'rises above', '86'), via: ['SMS', 'Mobile Notification'], freq: 'Every hour', priority: 'High', fired: 9, last: '6 d ago' },
      P[1] && { id: 'm15', name: 'Lower paddock moisture - 15%', dev: ix(P[1]), conds: C('m10', 'drops to or below', '15'), via: ['Email'], freq: 'Once a day', priority: 'Low', fired: 0, last: '' },
      W[1] && { id: 'batt', name: 'Station 2 battery - 12 V', dev: ix(W[1]), conds: C('batt', 'drops to or below', '12'), via: ['Email'], freq: 'Once a day', priority: 'Low', fired: 2, last: '24 d ago', enabled: false }].filter(Boolean).map(x => ({ enabled: true, roles: ['Owner'], msg: '', extra: '', ...x }));
    const ov = s.polOv || {}, del = s.polDel || [];
    return (s.added || []).filter(a => a.pol).map(a => a.pol).concat(base).filter(x => !del.includes(x.id)).map(x => ({ ...x, ...(ov[x.id] || {}) }));
  }
  ahVals(s, devs, f, typ) {
    const list = this.polList(s, devs, f).filter(x => x.fired > 0), dOf = x => x.dev === 'hli' ? { name: 'Pen 1 \u00b7 Heat load index', type: 'hli' } : devs[+x.dev] || devs[0];
    const tyOf = x => x.dev === 'hli' ? 'Heat load' : dOf(x).type === 'weather' ? 'Weather' : 'Soil', MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const DI = { weather: IC.weather, soil: IC.soil, hli: 'M12 3s5 5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5 1-8.5z' }, T0 = +new Date(2026, 10, 12, 9, 30);
    const tm = t => { const d = new Date(t), hh = d.getHours(); return d.getDate() + ' ' + MN[d.getMonth()] + ', ' + String(hh % 12 || 12).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0') + (hh < 12 ? ' am' : ' pm'); };
    let ev = []; list.forEach((x, pi) => { const c = (x.conds || [])[0] || {}, r = RDL[c.k] || ['', ''], thr = parseFloat(c.val) || 0, up = /above|exceeds/.test(c.op || ''), d = dOf(x);
      const n = Math.min(x.fired, 7); let t = T0 - (pi * 5 + 2) * 36e5;
      for (let k = 0; k < n; k++) { const rd = +(up ? thr + .4 + ((k * 7 + pi * 3) % 9) / 3 : thr - .3 - ((k * 5 + pi) % 8) / 4).toFixed(1);
        ev.push({ t, x, d, ty: tyOf(x), cond: (d.type === 'soil' ? 'Soil Probe ' : '') + r[0] + ' ' + (c.op || 'is') + ' ' + thr + (r[1] ? ' ' + r[1] : ''), rd: rd + (r[1] ? ' ' + r[1] : ''), st: k === 0 && pi < 2 ? 'Pending' : (k + pi) % 11 === 5 ? 'Failed' : 'Delivered' });
        t -= ((k * 13 + pi * 7) % 40 + 18) * 36e5; } });
    ev.sort((a, b) => b.t - a.t);
    const stF = s.ahSt || null, dvF = s.ahDev || '';
    const base = ev.filter(e => !typ || e.ty === typ), cnt = k => base.filter(e => e.st === k).length;
    const vis = base.filter(e => (!stF || e.st === stF) && (!dvF || e.d.name === dvF));
    const SC = { Delivered: ['#ECFDF5', '#047857', '#A7F3D0', 'M5 12.5l4.5 4.5L19 7.5'], Pending: ['#FFF7ED', '#B45309', '#FED7AA', 'M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z'], Failed: ['#FEF2F2', '#B91C1C', '#FECACA', 'M12 8v5M12 16h.01M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z'] };
    return { sub: list.reduce((a, x) => a + x.fired, 0).toLocaleString() + ' alerts in the last 12 months',
      chips: ['Delivered', 'Pending', 'Failed'].map(k => { const on = stF === k, c = SC[k]; return { l: k, n: String(cnt(k)), d: c[3], bg: on ? c[0] : '#fff', fg: on ? c[1] : '#334155', bd: on ? c[2] : '#E2E8F0', go: () => this.setState({ ahSt: on ? null : k }) }; }),
      devVal: dvF, devOpts: [{ v: '', l: 'All devices' }].concat(Array.from(new Set(ev.map(e => e.d.name))).map(v => ({ v, l: v }))), setDev: e => this.setState({ ahDev: e.target.value }),
      clear: () => this.setState({ ahSt: null, ahDev: '' }), canClear: !!(stF || dvF), empty: !vis.length,
      rows: vis.slice(0, 25).map(e => { const c = SC[e.st]; return { t1: tm(e.t), t2: 'sent ' + tm(e.t + 60000).split(', ')[1], name: e.x.name, st: e.st, sbg: c[0], sfg: c[1], sbd: c[2], sd: c[3], cond: e.cond, rd: e.rd, dev: e.d.name, di: DI[e.d.type] || IC.weather }; }) };
  }
  polVals(s, devs, f, typ) {
    const list = this.polList(s, devs, f), dOf = x => x.dev === 'hli' ? { name: 'Pen 1 \u00b7 Heat load index', type: 'hli' } : devs[+x.dev] || devs[0];
    const tyOf = x => x.dev === 'hli' ? 'Heat load' : dOf(x).type === 'weather' ? 'Weather' : 'Soil';
    const VI = { Email: 'M3 6h18v12H3zM3 7l9 6 9-6', SMS: 'M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z', 'Mobile Notification': 'M7 3h10v18H7zM11 18h2' };
    const DI = { weather: IC.weather, soil: IC.soil, hli: 'M12 3s5 5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5 1-8.5z' };
    const act = list.filter(x => x.enabled !== false), firedN = act.filter(x => x.fired > 0).length;
    const rows = list.filter(x => !typ || tyOf(x) === typ).map(x => { const d = dOf(x), on = x.enabled !== false;
      const cond = (x.conds || []).map(c => { const r = RDL[c.k] || [c.k, '']; return (dOf(x).type === 'soil' ? 'Soil Probe ' : '') + r[0] + ' ' + (c.op || 'is') + ' ' + (c.val || '\u2014') + (r[1] ? ' ' + r[1] : ''); }).join(' and ') || 'No conditions set';
      return { name: x.name, dev: d.name, di: DI[d.type] || IC.weather, cond, via: (x.via || []).map(v => ({ d: VI[v], t: v })), freq: x.freq,
        fired: x.fired > 0, firedT: x.fired + '\u00d7', last: x.last, none: !(x.fired > 0), paused: !on, ring: on ? '#0EA5A4' : '#94A3B8', op: on ? 1 : .6,
        edit: () => this.setState({ modal: 'alert', na: { ...this.newAlert(0), msgEd: !!x.msg, name: x.name, device: x.dev, conds: (x.conds || []).map(c => ({ ...c })), via: (x.via || []).slice(), freq: x.freq, priority: x.priority, enabled: on, roles: (x.roles || ['Owner']).slice(), msg: x.msg || '', extra: x.extra || '', editId: x.id } }),
        del: () => this.setState(st => ({ polDel: (st.polDel || []).concat(x.id), added: (st.added || []).filter(a => !(a.pol && a.pol.id === x.id)) })) }; });
    return { kpis: [['POLICIES', String(list.length), 'watching this farm'], ['ACTIVE', String(act.length), (list.length - act.length) + ' paused'], ['FIRED (12 MONTHS)', String(firedN), 'of ' + act.length + ' active policies'], ['SILENT', String(act.length - firedN), 'never triggered this year']].map(([l, v, sub]) => ({ l, v, sub })), rows, empty: !rows.length };
  }
  wgVals(s) {
    const ord = s.wOrder || ['forecast', 'devices', 'season', 'alerts'], drag = s.wDrag, o = {};
    ord.forEach((k, i) => { o[k] = { order: String(i), op: drag === k ? .45 : 1, ds: e => { try { e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', k); } catch (x) {} this.setState({ wDrag: k }); },
      drop: e => { e.preventDefault(); const from = this.state.wDrag; if (!from || from === k) return this.setState({ wDrag: null }); this.setState(st => { const cur = st.wOrder || ord, fi = cur.indexOf(from), ti = cur.indexOf(k), a = cur.filter(x => x !== from), at = a.indexOf(k); a.splice(fi < ti ? at + 1 : at, 0, from); return { wOrder: a, wDrag: null }; }); } }; });
    o.over = e => e.preventDefault(); o.end = () => this.setState({ wDrag: null });
    return o;
  }
  dmVals(s, devs, f) {
    if (!s.dmap) { this._dmItems = []; return { show: false }; }
    const list = devs.filter(d => d.type !== 'other');
    const items = list.map((d, ii) => ({ id: d.id, name: s.devNames[d.id] || d.name, serial: { 'WS-01': '4EC88F550E54', 'WS-02': '4EC88F551A07', 'SP-01': 'AXTCL_4E873A5B5898', 'SP-02': 'AXTCL_4E6FF1E989E5' }[d.id] || d.id, type: s.devCatOv[d.id] || (d.type === 'weather' ? 'Weather' : 'Soil probe'), icon: (s.devCatOv[d.id] || (d.type === 'weather' ? 'Weather' : 'Soil probe')) === 'Weather' ? 'assets/icon-weather.png' : 'assets/icon-soil.png', ll: (s.devCoords || {})[d.id] || [(f.lng || 147.93) + (ii % 3 - 1) * 0.004, (f.lat || -36.27) + (Math.floor(ii / 3) % 3 - 1) * 0.003] }));
    this._dmItems = items; return this.dmShape(s, items);
  }
  dvVals(s, devs, f) {
    const CIMG = { Weather: 'assets/icon-weather.png', 'Soil probe': 'assets/icon-soil.png' }, PLF = { AxisTech: 'assets/axistech-logo-full.png', Metos: 'assets/metos-logo-full.png' };
    const SER = { 'WS-01': '4EC88F550E54', 'WS-02': '4EC88F551A07', 'SP-01': 'AXTCL_4E873A5B5898', 'SP-02': 'AXTCL_4E6FF1E989E5' };
    const q = (s.devQ || '').toLowerCase(), PER = 12;
    const base = devs.filter(d => d.type !== 'other').map(d => ({ raw: d, id: d.id, name: s.devNames[d.id] || d.name, type: s.devCatOv[d.id] || (d.type === 'weather' ? 'Weather' : 'Soil probe'), provider: d.provider, status: d.status, farm: f.name, serial: SER[d.id] || d.id, last: d.status === 'Offline' ? 'Last seen ' + d.last : 'Last reading ' + d.last }));
    const list = base.filter(d => (!s.devCats.length || s.devCats.includes(d.type)) && (!s.devProvs.length || s.devProvs.includes(d.provider)) && (!q || (d.name + d.serial + d.provider).toLowerCase().includes(q)));
    const pages = Math.max(1, Math.ceil(list.length / PER)), pg = Math.min(s.devPage || 1, pages), grid = s.devView !== 'table' && !s.dmap;
    const dd = (key, sel, opts, qk, imgOf, ibgOf) => { const open = s.devDD === key, qq = (s[qk] || '').toLowerCase(), skey = key === 'cat' ? 'devCats' : 'devProvs';
      return { open, q: s[qk], setQ: e => this.setState({ [qk]: e.target.value }), toggle: () => this.setState(st => ({ devDD: st.devDD === key ? null : key })),
        label: sel.length === 0 ? (key === 'cat' ? 'All categories' : 'All providers') : sel.length === 1 ? sel[0] : sel.length + ' selected', bd: sel.length ? '#a5f3fc' : '#E2E8F0', bg: sel.length ? '#ecfeff' : '#fff',
        clearLabel: sel.length ? 'Clear (' + sel.length + ')' : 'Clear', clear: () => this.setState({ [skey]: [], devPage: 1 }),
        items: opts.filter(o => !qq || o.toLowerCase().includes(qq)).map(o => { const on = sel.includes(o); return { label: o, n: String(base.filter(d => (key === 'cat' ? d.type : d.provider) === o).length), img: imgOf(o), ibg: ibgOf(o), iw: key === 'cat' ? '30px' : (o === 'Metos' ? '54px' : '76px'), ih: key === 'cat' || o !== 'Metos' ? '22px' : '14px', tick: on ? '✓' : '', cbd: on ? '#0F172A' : '#cbd5e1', cbg: on ? '#043C2C' : '#fff', bg: on ? '#f0fdf4' : 'transparent', fw: on ? 600 : 400, toggle: () => this.setState(st => ({ [skey]: on ? st[skey].filter(x => x !== o) : st[skey].concat(o), devPage: 1 })) }; }) }; };
    const stOf = st => st === 'Offline' ? { fg: '#B91C1C', dot: '#EF4444' } : { fg: '#15803D', dot: '#22C55E' };
    return {
      q: s.devQ, setQ: e => this.setState({ devQ: e.target.value, devPage: 1 }),
      cat: dd('cat', s.devCats, ['Weather', 'Soil probe'], 'devCatQ', o => CIMG[o], () => 'transparent'),
      prov: dd('prov', s.devProvs, ['AxisTech', 'Metos'], 'devProvQ', o => PLF[o], () => '#fff'),
      grid, table: !grid && !s.dmap && list.length > 0, empty: list.length === 0 && !s.dmap,
      mapGo: () => this.setState({ dmap: { sel: base.filter(x => x.raw.type !== 'other').map(x => x.id) } }), gridGo: () => this.setState({ devView: 'grid' }), tableGo: () => this.setState({ devView: 'table' }),
      gridBg: grid ? '#043C2C' : '#fff', gridFg: grid ? '#fff' : '#475569', tableBg: !grid ? '#043C2C' : '#fff', tableFg: !grid ? '#fff' : '#475569',
      cards: (grid ? list.slice((pg - 1) * PER, pg * PER) : list).map(d => { const w = d.type === 'Weather', hs = [...d.id].reduce((x, ch) => x + ch.charCodeAt(0), 0), rd = d.raw.reading || '', num = (re, dflt) => { const m = rd.match(re); return m ? +m[1] : dflt; }, dep = (s.dDepth || {})[d.id] || '10 cm', di = ['10 cm', '30 cm', '60 cm', '90 cm'].indexOf(dep), off = d.status === 'Offline';
      const T = (l, v, u, p, c, sub) => ({ l, v: off ? '\u2014' : v, u: off ? '' : u, p, c, sub: sub || '' });
      const tiles = w ? [T('Temp', num(/(-?[\d.]+)\s*\u00b0C/, 19.6).toFixed(1), '\u00b0C', 'M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z', '#EF4444'), T('Rain 24 h', ((hs % 50) / 10).toFixed(1), 'mm', 'M7 15.5h10a3.8 3.8 0 0 0 .4-7.6 5.6 5.6 0 0 0-10.8 1.3A3.2 3.2 0 0 0 7 15.5zM9 19l-1 2M13 19l-1 2', '#3B82F6'), T('Wind', String(10 + hs % 15), 'km/h', 'M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h8', '#0E8FAE')]
        : [T('Moisture', (num(/(\d+)%/, 31) - di * 2.4).toFixed(1), '%', 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z', '#3B82F6', dep), T('Temp', (16 + (hs % 30) / 10 - di * .6).toFixed(1), '\u00b0C', 'M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z', '#EF4444', dep), T('VIC', String(480 + hs % 50 + di * 6), '', 'M3 12h4l3-7 4 14 3-7h4', '#7C3AED', dep)];
      return { ...d, st: stOf(d.status), icon: CIMG[d.type], tiles, isSoil: !w, depth: dep, setDepth: e => this.setState(st => ({ dDepth: { ...(st.dDepth || {}), [d.id]: e.target.value } })), ibg: w ? '#0E8FAE' : '#7A4A35', ico: w ? 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' : 'M12 21V9M8 13l4-4 4 4M6 21h12', lt: off ? 'OFFLINE' : 'LIVE', lbg: off ? '#FEF2F2' : '#E6F7EE', lfg: off ? '#B91C1C' : '#15803D', ldot: off ? '#EF4444' : '#22C55E', lastS: off ? 'Last seen ' + d.raw.last : 'Last sampling 04 Nov 2026, ' + d.raw.last, tbd: w ? '#5EEAD4' : '#FCD34D', tbg: w ? '#F0FDFA' : '#FFFBEB', tfg: w ? '#0F766E' : '#92400E', menuOpen: s.devMenuId === d.id, menuBg: s.devMenuId === d.id ? '#f1f5f9' : 'transparent', menuToggle: () => this.setState(st => ({ devMenuId: st.devMenuId === d.id ? null : d.id })), go: () => this.setState({ devOpen: d.raw.id, devTab: null, dvdDD: false, dvdCat: null, devMenuId: null }), viewMap: () => this.setState({ devMenuId: null, dmap: { sel: [d.id] } }), viewData: () => this.setState({ devMenuId: null, page: 'data', up: null, dataOpen: w ? 'weather' : 'soil', dataSrc: Math.max(0, devs.filter(x => x.type === d.raw.type).findIndex(x => x.id === d.id)) }), edit: () => this.setState({ devDD: null, modal: 'devEdit', devEdit: { id: d.id, name: d.name, cat: d.type } }) }; }),
      paged: grid && pages > 1, pages: Array.from({ length: pages }, (_, i) => ({ n: String(i + 1), bg: i + 1 === pg ? '#043C2C' : 'transparent', fg: i + 1 === pg ? '#fff' : '#475569', go: () => this.setState({ devPage: i + 1 }) })),
      prev: () => this.setState({ devPage: Math.max(1, pg - 1) }), next: () => this.setState({ devPage: Math.min(pages, pg + 1) }),
    };
  }
  deVals(s, devs) {
    const e = s.devEdit; if (!e) return {};
    const d = devs.find(x => x.id === e.id) || {}, SER = { 'WS-01': '4EC88F550E54', 'WS-02': '4EC88F551A07', 'SP-01': 'AXTCL_4E873A5B5898', 'SP-02': 'AXTCL_4E6FF1E989E5' };
    const fm = FARMS[s.farm] || {}, ii = Math.max(0, devs.filter(x => x.type !== 'other').findIndex(x => x.id === e.id)), cc = (s.devCoords || {})[e.id] || [(fm.lng || 147.93) + (ii % 3 - 1) * 0.004, (fm.lat || -36.27) + (Math.floor(ii / 3) % 3 - 1) * 0.003];
    return { name: e.name, cat: e.cat, serial: SER[e.id] || e.id, provider: d.provider || '', icon: ({ Weather: 'assets/icon-weather.png', 'Soil probe': 'assets/icon-soil.png' })[e.cat], desc: e.desc || '', setDesc: ev => { const v = ev.target.value; this.setState(st => ({ devEdit: { ...st.devEdit, desc: v } })); }, lat: (+cc[1]).toFixed(5), lng: (+cc[0]).toFixed(5), openLoc: () => this.setState({ locOpen: true, locView: false, locTitle: '', locAddr: '', locQ: '', locSugL: [], locLL: [cc[0], cc[1]] }),
      setName: ev => { const v = ev.target.value; this.setState(st => ({ devEdit: { ...st.devEdit, name: v } })); },
      setCat: ev => { const v = ev.target.value; this.setState(st => ({ devEdit: { ...st.devEdit, cat: v } })); },
      save: () => this.setState(st => ({ modal: null, devEdit: null, devNames: { ...st.devNames, [e.id]: e.name.trim() || d.name }, devCatOv: { ...st.devCatOv, [e.id]: e.cat }, devCoords: { ...(st.devCoords || {}), [e.id]: st.devCoords && st.devCoords[e.id] ? st.devCoords[e.id] : cc } })) };
  }
  devW(s, devs, fi) {
    const i = Math.min(+(s.hwDev || 0), devs.length - 1), d = devs[i], t = d.type, off = d.status === 'Offline', di = Math.min(+(s.hwDepth || 0), 2);
    const j = k => { const x = Math.sin((fi * 7 + i * 3 + 1) * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };
    const n = (b, sp, dp, k) => off ? '—' : (b + (j(k) - .5) * sp).toFixed(dp);
    const IC2 = { thermo: 'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z', drop: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z', gauge: 'M12 14l3.5-3.5M4 16a8 8 0 1 1 16 0', wind: 'M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7', gust: 'M3 10h9a3 3 0 1 0-3-3M3 14h13a3 3 0 1 1-3 3M4 6h2', sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4', delta: 'M12 4 3 20h18z', comp: 'M12 3v18M3 12h18M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z', uv: 'M8 4v5a4 4 0 0 0 8 0V4M5 20l3-6 3 6M13 14l3 6 3-6', rain: 'M7 13a4 4 0 0 1 .5-7.97A5 5 0 0 1 17 6a3.5 3.5 0 0 1 0 7zM8.5 16l-.8 3M12 16l-.8 3M15.5 16l-.8 3', ec: 'M13 2 4 14h7l-1 8 9-12h-7z' };
    const T = (l, v, c, bg, bd, ic) => ({ l, v, c, bg, bd, d: IC2[ic] });
    const tiles = t === 'weather' ? [
      T('Temperature (°C)', n(18.6, 4, 2, 1), '#0F172A', '#fff', '#E5E8E6', 'thermo'), T('Humidity (%)', n(58, 14, 2, 2), '#0891B2', '#ECFEFF', '#99F6E4', 'drop'), T('Wind Speed (km/h)', n(7.4, 6, 2, 4), '#16A34A', '#F0FDF4', '#BBF7D0', 'wind'),
      T('Wind Gust (km/h)', n(12.5, 8, 2, 5), '#E11D48', '#FFF1F2', '#FECDD3', 'gust'), T('Dew Point (°C)', n(10.9, 3, 2, 7), '#0284C7', '#F0F9FF', '#BAE6FD', 'drop'), T('Delta T (°C)', n(6.8, 2, 2, 8), '#0D9488', '#F0FDFA', '#99F6E4', 'delta'),
      T('Wind Direction', off ? '—' : ['SSE', 'SW', 'W', 'NW'][Math.floor(j(10) * 4)], '#D97706', '#FFFBEB', '#FDE68A', 'comp'), T('Rainfall 24h (mm)', n(0.6, 1.2, 1, 12), '#1D4ED8', '#EFF6FF', '#BFDBFE', 'rain'), T('Atm. Pressure (hPa)', n(1013.7, 3, 1, 3), '#7C3AED', '#F5F3FF', '#DDD6FE', 'gauge'),
      T('Solar Radiation (W/m²)', n(640, 160, 0, 6), '#CA8A04', '#FEFCE8', '#FEF08A', 'sun'), T('MSL Pressure (hPa)', n(1016.5, 3, 1, 9), '#7C3AED', '#F5F3FF', '#DDD6FE', 'gauge'), T('UV Index', n(5, 4, 0, 11), '#C026D3', '#FDF4FF', '#F5D0FE', 'uv'),
    ] : [
      T('Moisture (%)', n([d.id === 'SP-02' ? 21.8 : 24.6, d.id === 'SP-02' ? 26.9 : 28.9, d.id === 'SP-02' ? 31.6 : 32.4][di], 1.2, 1, 1 + di), '#0891B2', '#ECFEFF', '#99F6E4', 'drop'),
      T('Temperature (°C)', n([17.6, 16.1, 14.6][di], .6, 1, 4 + di), '#EA580C', '#FFF7ED', '#FED7AA', 'thermo'),
      T('VIC', n([640, 590, 540][di], 30, 0, 7 + di), '#7C3AED', '#F5F3FF', '#DDD6FE', 'ec'),
    ];
    const sig = t === 'weather' ? 23 : 18, weak = sig < 30, wx = x => x.type === 'weather';
    return {
      open: !!s.devDD2, toggle: () => this.setState(st => ({ devDD2: !st.devDD2 })),
      cur: { label: d.name, wx: wx(d), soil: !wx(d) },
      opts: devs.map((x, k) => ({ label: x.name, sub: x.id + ' · ' + x.provider, wx: wx(x), soil: !wx(x), bg: k === i ? '#F0FDF4' : 'transparent', go: () => this.setState({ hwDev: k, devDD2: false }) })),
      wx: wx(d), soil: !wx(d), name: d.name, badge: off ? 'OFFLINE' : 'LIVE', bbg: off ? '#FEF2F2' : '#F0FDF4', bfg: off ? '#DC2626' : '#16A34A', bbd: off ? '#FECACA' : '#BBF7D0',
      upd: off ? 'Last seen ' + d.last : 'Updated 09 Nov, ' + d.last, tiles, expanded: !s.dwShut, rot: s.dwShut ? 'rotate(-90deg)' : 'none', collapse: () => this.setState(st => ({ dwShut: !st.dwShut })), tiles3: (t === 'weather' ? ['Temperature', 'Rainfall 24h', 'Wind Speed'].map(k => tiles.find(x => x.l.startsWith(k))).filter(Boolean) : tiles).map(x => ({ v: x.v, c: x.c, d: x.d, l: x.l.replace(/\s*\(.*\)/, '').replace('24h', '(24 h)'), u: (x.l.match(/\((.*)\)/) || [])[1] || '' })),
      depth: String(di), depthOpts: ['10 cm', '30 cm', '60 cm'].map((l, k) => ({ v: String(k), label: l })), setDepth: e => this.setState({ hwDepth: +e.target.value }),
      batt: 'Battery ' + (t === 'weather' ? '85%' : '72%'), sig: 'Signal ' + sig + '%', sbg: weak ? '#FEF2F2' : '#F0FDF4', sfg: weak ? '#DC2626' : '#15803D', sbd: weak ? '#FECACA' : '#BBF7D0',
      go: () => this.openDevice(d) };
  }
  hwdVals(s, devs, fi, t) {
    const dk = t === 'soil' ? 'hwDevS' : 'hwDevW', list = devs.filter(d => d.type === t), i = Math.min(+(s[dk] || 0), list.length - 1), d = list[i], off = d.status === 'Offline';
    const j = k => { const x = Math.sin((fi * 7 + i * 3 + 1) * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };
    const n = (b, sp, dp, k) => off ? '—' : (b + (j(k) - .5) * sp).toFixed(dp);
    const IC2 = { thermo: 'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z', drop: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z', gauge: 'M12 14l3.5-3.5M4 16a8 8 0 1 1 16 0', wind: 'M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7', gust: 'M3 10h9a3 3 0 1 0-3-3M3 14h13a3 3 0 1 1-3 3M4 6h2', sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4', delta: 'M12 4 3 20h18z', comp: 'M12 3v18M3 12h18M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z', uv: 'M8 4v5a4 4 0 0 0 8 0V4M5 20l3-6 3 6M13 14l3 6 3-6', rain: 'M7 13a4 4 0 0 1 .5-7.97A5 5 0 0 1 17 6a3.5 3.5 0 0 1 0 7zM8.5 16l-.8 3M12 16l-.8 3M15.5 16l-.8 3', ec: 'M13 2 4 14h7l-1 8 9-12h-7z', depth: 'M12 2v13M8 6h8M9 15h6l-3 7z' };
    const T = (l, v, c, bg, bd, ic) => ({ l, v, c, bg, bd, d: IC2[ic] });
    const tiles = t === 'weather' ? [
      T('Temperature (°C)', n(18.6, 4, 2, 1), '#0F172A', '#fff', '#E5E8E6', 'thermo'), T('Humidity (%)', n(58, 14, 2, 2), '#0EA5A4', '#ECFEFF', '#99F6E4', 'drop'),
      T('Atm. Pressure (hPa)', n(1013.7, 3, 2, 3), '#7C3AED', '#F5F3FF', '#DDD6FE', 'gauge'), T('Wind Speed (km/h)', n(7.4, 6, 2, 4), '#16A34A', '#F0FDF4', '#BBF7D0', 'wind'),
      T('Wind Gust (km/h)', n(12.5, 8, 2, 5), '#E11D48', '#FFF1F2', '#FECDD3', 'gust'), T('Solar Radiation (W/m²)', n(640, 160, 0, 6), '#EAB308', '#FEFCE8', '#FEF08A', 'sun'),
      T('Dew Point (°C)', n(10.9, 3, 2, 7), '#0EA5E9', '#F0F9FF', '#BAE6FD', 'drop'), T('Delta T (°C)', n(6.8, 2, 2, 8), '#0D9488', '#F0FDFA', '#99F6E4', 'delta'),
      T('MSL Pressure (hPa)', n(1016.5, 3, 2, 9), '#7C3AED', '#F5F3FF', '#DDD6FE', 'gauge'), T('Wind Direction', off ? '—' : ['SW', 'W', 'NW', 'S'][Math.floor(j(10) * 4)], '#F59E0B', '#FFFBEB', '#FDE68A', 'comp'),
      T('UV Index', n(5, 4, 0, 11), '#D946EF', '#FDF4FF', '#F5D0FE', 'uv'), T('Rainfall 24h (mm)', n(0.6, 1.2, 1, 12), '#1D4ED8', '#EFF6FF', '#BFDBFE', 'rain'),
    ] : [
      T('Moisture 10 cm (%)', n(29, 6, 1, 1), '#0891B2', '#ECFEFF', '#99F6E4', 'drop'), T('Moisture 30 cm (%)', n(d.id === 'SP-02' ? 24 : 34, 3, 1, 2), '#0891B2', '#ECFEFF', '#99F6E4', 'drop'),
      T('Moisture 60 cm (%)', n(41, 4, 1, 3), '#0891B2', '#ECFEFF', '#99F6E4', 'drop'), T('Soil Temp 10 cm (°C)', n(15.8, 2, 1, 4), '#EA580C', '#FFF7ED', '#FED7AA', 'thermo'),
      T('Soil Temp 30 cm (°C)', n(14.2, 1.5, 1, 5), '#EA580C', '#FFF7ED', '#FED7AA', 'thermo'), T('Bulk EC (dS/m)', n(0.42, .2, 2, 6), '#7C3AED', '#F5F3FF', '#DDD6FE', 'ec'),
    ];
    const sig = t === 'weather' ? 23 : 18, weak = sig < 30;
    return {
      types: [['weather', 'Weather station'], ['soil', 'Soil probe']].map(([k, l]) => { const on = t === k; return { l, bg: on ? '#fff' : 'transparent', fg: on ? '#043C2C' : '#64748B', sh: on ? '0 1px 2px rgba(15,23,42,.1)' : 'none', go: () => this.setState({ hwType: k, hwDev: 0 }) }; }),
      multi: list.length > 1, selLabel: t === 'weather' ? 'station' : 'probe', value: String(i), opts: list.map((x, k) => ({ v: String(k), label: x.id + ' · ' + x.name })), set: e => this.setState({ [dk]: +e.target.value }),
      name: d.name, badge: off ? 'OFFLINE' : 'LIVE', bbg: off ? '#FEF2F2' : '#F0FDF4', bfg: off ? '#DC2626' : '#16A34A', bbd: off ? '#FECACA' : '#BBF7D0',
      upd: off ? 'Last seen ' + d.last : 'Updated 06 Nov, ' + d.last, tiles,
      batt: 'Battery ' + (t === 'weather' ? '85%' : '72%'), sig: 'Signal ' + sig + '%', sbg: weak ? '#FEF2F2' : '#F0FDF4', sfg: weak ? '#DC2626' : '#15803D', sbd: weak ? '#FECACA' : '#BBF7D0',
      go: () => this.openDevice(d) };
  }
  zoomStep(k, N, f, frac = .5) {
    const cur = (this.state.zoom || {})[k] || [0, N - 1], span = cur[1] - cur[0], c = cur[0] + span * frac;
    let ns = Math.round(span * f); if (ns === span) ns += f > 1 ? 1 : -1; ns = Math.max(1, Math.min(N - 1, ns));
    if (ns >= N - 1) { if ((this.state.zoom || {})[k]) this.setState(st => ({ zoom: { ...(st.zoom || {}), [k]: null } })); return; }
    const s0 = Math.max(0, Math.min(N - 1 - ns, Math.round(c - ns * frac)));
    this.setState(st => ({ zoom: { ...(st.zoom || {}), [k]: [s0, s0 + ns] }, cHov: null }));
  }
  apexC(k, o, labels) {
    const s = this.state, N = labels.length, zw = (s.zoom || {})[k], a = zw ? Math.max(0, Math.min(zw[0], N - 2)) : 0, b = zw ? Math.min(N - 1, Math.max(zw[1], a + 1)) : N - 1;
    const sl = v => v.slice(a, b + 1), hv = s.cHov;
    let dates = labels.slice(a, b + 1), L = o.layers.map(l => ({ ...l, v: sl(l.v) }));
    if (dates.length <= 3 && dates[0] && dates[0].t != null) { const fd = fineSplit(dates, L); dates = fd.dates; L = fd.L; }
    const n = dates.length, bl = L.find(l => l.type === 'bars'), has = !!bl;
    const all = L.flatMap(l => l.v).filter(v => v != null);
    let lo = Math.min(...all), hi = Math.max(...all); if (o.zero) lo = Math.min(0, lo);
    const raw = Math.max(hi - lo, 1) * 1.15 / 4, mag = Math.pow(10, Math.floor(Math.log10(raw))), stp = [1, 2, 2.5, 5, 10].map(m => m * mag).find(x => x >= raw);
    lo = o.zero ? Math.min(0, Math.floor(lo / stp) * stp) : Math.floor((lo - stp * .3) / stp) * stp; hi = Math.ceil((hi + stp * .2) / stp) * stp; if (hi - lo < stp * 4) hi = lo + stp * 4;
    const X = i => has ? (i + .5) / n * 100 : n > 1 ? i / (n - 1) * 100 : 50, Y = v => 100 - (v - lo) / (hi - lo) * 100;
    const P = v => v.map((y, i) => y == null ? null : X(i).toFixed(2) + ',' + Y(y).toFixed(2)).filter(Boolean).join(' ');
    const h2 = hv && hv.k === k && hv.i < n ? hv.i : null, fm = v => (+v).toFixed(o.dp != null ? o.dp : 1), dp = stp < 1 ? 1 : 0;
    const every = Math.max(1, Math.ceil(n / (o.maxL || 6)));
    const sw = l => l.type === 'bars' ? ['10px', '10px', '3px'] : l.dash ? ['14px', '2px', '2px'] : ['12px', '12px', '3px'];
    return { t: o.t, sub: o.sub || '', stats: o.stats || [], chips: o.chips || null, h: o.h || '200px', zk: k, zn: String(N), zoomed: !!zw,
      zin: () => this.zoomStep(k, N, .7), zout: () => this.zoomStep(k, N, 1.45), zreset: () => this.setState(st => ({ zoom: { ...(st.zoom || {}), [k]: null }, cHov: null })),
      legend: o.legend ? o.legend : L.filter(l => l.name).length > 1 ? L.filter(l => l.name).map(l => { const [w, hh, r] = sw(l); return { l: l.name, c: l.c, w, hh, r }; }) : [],
      areas: L.filter(l => l.type === 'area').map((l, j) => { const pts = P(l.v); return { gid: 'ax-' + k + j, fill: 'url(#ax-' + k + j + ')', c: l.c, pts, area: X(0).toFixed(2) + ',100 ' + pts + ' ' + X(n - 1).toFixed(2) + ',100' }; }),
      lines: L.filter(l => l.type === 'line').map(l => ({ pts: P(l.v), c: l.c, dash: l.dash || 'none', w: l.w || 2.2 })),
      hasBars: has, bars: has ? bl.v.map((v, i) => ({ h: Math.max(0, ((v || 0) - lo) / (hi - lo) * 100).toFixed(1) + '%', w: n <= 7 ? '38%' : n <= 13 ? '56%' : n > 120 ? '80%' : '64%', c: h2 === i ? bl.hc : bl.cf && o.fcT != null && dates[i].t >= o.fcT ? bl.cf : bl.c })) : [],
      yl: [0, 1, 2, 3, 4].map(m => ({ v: (hi - (hi - lo) * m / 4).toFixed(dp) + (o.yu || '') })), grid: [0, 25, 50, 75].map(x => ({ t: x + '%' })),
      xl: (() => { const def = dates.map((d, i) => i % every === 0 ? { l: d.s, x: X(i).toFixed(2) + '%', tf: !has && i === 0 ? 'none' : 'translateX(-50%)' } : null).filter(Boolean); if (!o.mt) return def; const ms = dates.map((d, i) => ({ d, i })).filter(x => x.d.t != null && new Date(x.d.t).getDate() === 1 && new Date(x.d.t).getHours() === 0 && x.d.g !== 'h'); if (ms.length < 2) return def; const st = Math.max(1, Math.ceil(ms.length / (o.maxL || 6))); return ms.filter((_, j) => j % st === 0).map(({ d, i }) => { const D = new Date(d.t), yy = String(D.getFullYear()).slice(2); return { l: MNS[D.getMonth()] + " '" + yy, x: X(i).toFixed(2) + '%', tf: 'translateX(-50%)' }; }); })(),
      note: o.note || '', ...(() => { if (o.fcT == null) return { fcOn: false, fcX: '0%' }; const fi = dates.findIndex(d => d.t >= o.fcT); return fi < 0 ? { fcOn: false, fcX: '0%' } : { fcOn: true, fcTag: fi > 0, fcX: (has ? fi / n * 100 : X(fi)).toFixed(2) + '%' }; })(),
      cols: dates.map((_, i) => ({ enter: () => { const cu = this.state.cHov; if (!cu || cu.k !== k || cu.i !== i) this.setState({ cHov: { k, i } }); } })),
      leave: () => this.setState({ cHov: null }), hov: h2 !== null, hx: h2 !== null ? X(h2).toFixed(2) + '%' : '0%',
      tipT: h2 !== null && h2 > (n - 1) / 2 ? 'translateX(calc(-100% - 12px))' : 'translateX(12px)', tipD: h2 !== null ? dates[h2].full : '',
      tipRows: h2 !== null ? L.filter(l => l.name && l.v[h2] != null).map(l => ({ l: l.name, c: l.c, v: fm(l.v[h2]) + (o.unit || '') })) : [],
      dots: h2 !== null ? L.filter(l => (l.type === 'line' || l.type === 'area') && l.v[h2] != null).map(l => ({ c: l.c, y: Y(l.v[h2]).toFixed(2) + '%' })) : [] };
  }
  pmVals(s) {
    const m = s.pm; if (!m) return {};
    const ci = Math.max(0, PCAT.findIndex(p => p[0] === m.name)), p = PCAT[ci] || PCAT[0], upd = o => this.setState(st => ({ pm: { ...st.pm, ...o } }));
    const real = devsOf(s.farm).filter(d => d.provider === m.name).map(d => [d.name, d.id]);
    const defs = real.length ? real : [['Weather Station', 'WS-' + (210 + ci * 7)], ['Soil Probe', 'SP-' + (330 + ci * 5)]];
    const lk = defs.map((_, k) => (m.linked || [])[k] != null ? m.linked[k] : k === 0), sq = (m.sq || '').toLowerCase();
    const sensors = defs.map(([n, id], k) => ({ n, id, k, on: lk[k] })).filter(x => !sq || (x.n + x.id).toLowerCase().includes(sq)).map(x => ({ name: x.n, id: x.id, lbl: x.on ? 'Linked' : 'Link', fg: x.on ? '#059669' : '#043C2C', rbg: x.on ? '#f0fdf7' : '#fff', rbd: x.on ? '#bbf0d6' : '#E2E8F0', toggle: () => this.setState(st => { const a = defs.map((_, k) => (st.pm.linked || [])[k] != null ? st.pm.linked[k] : k === 0); a[x.k] = !a[x.k]; return { pm: { ...st.pm, linked: a } }; }) }));
    const ok = !!m.farm && !!m.user.trim() && !!m.pw;
    return { name: p[0], desc: p[2], mono: p[4] ? '' : p[0].split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase(), bgimg: p[4] ? "url('" + p[4] + "')" : 'none', lbg: p[4].includes('dpird') ? '#0F172A' : '#fff',
      desc: p[2], kind: p[1], link: p[5] || '', hasLink: !!p[5], cont: () => this.setState(st => ({ modal: st.pm.next || 'pconnect' })), mFarm: m.farm, farm: m.farm, farmOpts: FARMS.map(x => ({ name: x.name })), setFarm: e => upd({ farm: e.target.value }), user: m.user, setUser: e => upd({ user: e.target.value }), pw: m.pw, setPw: e => upd({ pw: e.target.value }), pwType: m.showPw ? 'text' : 'password', togglePw: () => upd({ showPw: !m.showPw }),
      okBg: ok ? '#043C2C' : '#94a3b8', okCur: ok ? 'pointer' : 'not-allowed', submit: () => { if (!ok) return; this.setState(st => ({ modal: null, pm: null, provs: [...st.provs, { name: p[0], kind: p[1], status: 'Connected', sync: 'Just now', freq: 'Every 15 minutes' }] })); },
      edit: !!m.edit, notEdit: !m.edit, toggleEdit: () => upd({ edit: !m.edit }), cid: m.cid != null ? m.cid : '\u2022'.repeat(26) + 'a' + (ci % 10) + 'e0', key: m.key != null ? m.key : '\u2022'.repeat(40) + (8900 + ci), setCid: e => upd({ cid: e.target.value }), setKey: e => upd({ key: e.target.value }),
      devId: defs[0][1], devIds: defs.map(d => d[1]), nAvail: (defs.length - lk.filter(Boolean).length) + ' Available', nLinked: lk.filter(Boolean).length + ' Linked', sensors, sq: m.sq || '', noSens: !sensors.length, setSq: e => upd({ sq: e.target.value }), refresh: () => upd({ linked: [] }),
      disconnect: () => this.setState(st => ({ modal: null, pm: null, provs: st.provs.filter(x => x.name !== st.pm.name) })) };
  }
  provVals(s) {
    const mine = s.provFilter === 'weather' ? null : s.provMode === 'mine', q = (s.provQ || '').trim().toLowerCase(), asc = s.provSort !== 'desc', grid = (s.provView || 'grid') === 'grid';
    const st = n => (s.provs.find(p => p.name === n) || {}).status || 'Not connected';
    let list = PCAT.map(([name, kind, desc, c, logo, link]) => { const status = st(name), on = status === 'Connected', bad = status !== 'Connected' && status !== 'Not connected'; const p = s.provs.find(x => x.name === name) || {};
      return { name, kind, desc, c, mono: logo ? '' : name.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase(), bgimg: logo ? "url('" + logo + "')" : 'none', lbg: logo.includes('dpird') ? '#0F172A' : '#fff', status: status.toUpperCase(), sync: p.sync || '—', freq: p.freq || '—', note: p.note || '',
        sbd: on ? '#86EFAC' : bad ? '#FCD34D' : '#FCA5A5', sfg: on ? '#15803D' : bad ? '#B45309' : '#DC2626', sbg: on ? '#F0FDF4' : bad ? '#FFFBEB' : '#FEF2F2',
        btn: on ? 'Manage' : 'Connect', bbg: on ? '#fff' : '#043C2C', bfg: on ? '#043C2C' : '#fff', bbd: '#043C2C', isOn: on || bad,
        go: () => this.setState({ modal: 'pintro', pm: { next: on ? 'pmanage' : 'pconnect', name, farm: FARMS[s.farm].name, user: '', pw: '', showPw: false, edit: false, sq: '', linked: [true, true, false] } }), disconnect: () => this.setState({ modal: 'confirm', confirm: name }) }; });
    if (s.provFilter === 'weather') list = list.filter(x => /weather|climate|soil/i.test(x.kind) && x.isOn);
    if (mine === true) list = list.filter(x => x.isOn); else if (mine === false) list = list.filter(x => !x.isOn);
    if (q) list = list.filter(x => (x.name + ' ' + x.kind + ' ' + x.desc).toLowerCase().includes(q));
    list.sort((a, b) => asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    const per = 12, pages = Math.max(1, Math.ceil(list.length / per)), pg = Math.min(s.provPage || 1, pages), slice = list.slice((pg - 1) * per, pg * per);
    const set = o => this.setState({ provPage: 1, ...o });
    return { q: s.provQ || '', setQ: e => set({ provQ: e.target.value }), sortRot: asc ? 'none' : 'scaleY(-1)', sortTip: asc ? 'Sorted A–Z' : 'Sorted Z–A', toggleSort: () => set({ provSort: asc ? 'desc' : 'asc' }),
      modes: [['mine', 'My Providers', 'M9 12l2 2 4-4M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z'], ['browse', 'Browse Providers', 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM15.5 8.5l-2 5-5 2 2-5z']].map(([k, l, d]) => { const on = (k === 'mine') === !!mine && s.provFilter !== 'weather' || (k === 'mine' && s.provFilter === 'weather'); return { l, d, bg: on ? '#fff' : 'transparent', fg: on ? '#043C2C' : '#475569', sh: on ? '0 1px 3px rgba(15,23,42,.12)' : 'none', go: () => set({ provMode: k, provFilter: null }) }; }),
      grid, list: !grid, gBg: grid ? '#043C2C' : '#fff', gFg: grid ? '#fff' : '#475569', tBg: grid ? '#fff' : '#043C2C', tFg: grid ? '#475569' : '#fff', setGrid: () => this.setState({ provView: 'grid' }), setList: () => this.setState({ provView: 'list' }),
      items: slice, empty: !slice.length, count: list.length ? 'Showing ' + ((pg - 1) * per + 1) + '–' + Math.min(pg * per, list.length) + ' of ' + list.length + ' providers' : 'No providers match',
      pages: Array.from({ length: pages }, (_, i) => ({ l: String(i + 1), bg: i + 1 === pg ? '#F1F5F9' : 'transparent', fw: i + 1 === pg ? 700 : 500, go: () => this.setState({ provPage: i + 1 }) })),
      first: () => this.setState({ provPage: 1 }), prev: () => this.setState({ provPage: Math.max(1, pg - 1) }), next: () => this.setState({ provPage: Math.min(pages, pg + 1) }), last: () => this.setState({ provPage: pages }),
      pOpL: pg > 1 ? 1 : .3, pOpR: pg < pages ? 1 : .3, multi: pages > 1 };
  }
  dataVals(s, devs) {
    const TP = { weather: ['#F0FDFA', '#0F766E', '#99F6E4'], soil: ['#FBF5F1', '#7A4A35', '#E7CDBE'], livestock: ['#FFF7ED', '#C2410C', '#FED7AA'], 'milk yield': ['#EFF6FF', '#1D4ED8', '#BFDBFE'], 'crop yield': ['#F7FEE7', '#4D7C0F', '#D9F99D'], cropping: ['#F7FEE7', '#4D7C0F', '#D9F99D'], biomass: ['#E8F6EF', '#12855F', '#BBE5CC'], 'feed quality': ['#F0FDF4', '#15803D', '#BBF7D0'] }, pill = ty => { const c = TP[ty] || ['#F1F5F9', '#475569', '#E2E8F0']; return { bg: c[0], fg: c[1], bd: c[2] }; };
    const wx = devs.filter(d => d.type === 'weather'), so = devs.filter(d => d.type === 'soil');
    const srcs = [{ id: 'weather', t: 'Weather', type: 'weather', desc: 'Weather station data', n: wx.length + ' stations', upd: 'Today 10:42 am' }, { id: 'soil', t: 'Soil', type: 'soil', desc: 'Soil probe data', n: so.length + ' probes', upd: 'Today 10:30 am' },
      ...s.uploads.map((r, i) => { const kind = r[1].toLowerCase(), CAT = { 'livestock weights': 'livestock', biomass: 'livestock', 'feed quality': 'livestock', livestock: 'livestock', 'milk yield': 'livestock', pasture: 'livestock', 'crop yield': 'cropping', crop: 'cropping', cropping: 'cropping', soil: 'soil', weather: 'weather' }; return { id: 'up' + i, t: r[0].replace(/\.csv$/i, '').replace(/_?(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)(_?\d{2,4})?$/i, '').replace(/[_-]+/g, ' ').trim().replace(/^./, c => c.toUpperCase()), kind, type: CAT[kind] || kind, desc: r[1] + ' upload · ' + r[2], n: r[2], upd: r[3] }; })];
    const exportCsv = (name, cols, rows) => { const csv = [cols.join(','), ...rows.map(r => r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(','))].join('\n'); const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = name + '.csv'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); };
    const tableFor = (src0, si) => { const src = { ...src0, type: src0.kind || src0.type };
      const N = 20, T0 = Date.UTC(2026, 10, 9, 4, 31, 20), seed = si * 13 + (s.dataRefresh || 0) * 7, j = k => { const x = Math.sin((seed + 1) * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };
      const ts = i => new Date(T0 - i * 15 * 6e4).toISOString().replace(/\.\d{3}Z$/, 'Z');
      if (src.type === 'weather') { const D = ['N', 'NNE', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'NNW']; return { cols: ['Timestamp', 'Rainfall (mm)', 'Total rainfall (mm)', 'Wind direction', 'Average wind speed (km/h)', 'Wind gust (km/h)', 'MSL pressure (hPa)', 'Average humidity (%)', 'Atmospheric pressure (hPa)', 'Battery voltage', 'Average solar radiation (W/m²)'],
        rows: Array.from({ length: N }, (_, i) => [ts(i), (j(i) > .9 ? j(i + 50) * 1.2 : 0).toFixed(2), (875 - i * .0).toFixed(2), D[Math.floor(j(i + 3) * D.length)], (2 + j(i + 7) * 12).toFixed(2), (4 + j(i + 9) * 18).toFixed(2), (1020.4 + (j(i + 11) - .5) * 1.2).toFixed(2), (36 + j(i + 13) * 18).toFixed(2), (1006.5 + (j(i + 15) - .5) * 12).toFixed(2), (13.4 + j(i + 17) * .2).toFixed(2), (300 + j(i + 19) * 620).toFixed(2)]) }; }
      if (src.type === 'soil') return { cols: ['Timestamp', 'Moisture 10 cm (%)', 'Moisture 20 cm (%)', 'Moisture 30 cm (%)', 'Moisture 40 cm (%)', 'Moisture 50 cm (%)', 'Moisture 60 cm (%)', 'Temperature 10 cm (°C)', 'Temperature 30 cm (°C)', 'Temperature 60 cm (°C)', 'VIC', 'Battery voltage'],
        rows: Array.from({ length: N }, (_, i) => [ts(i), ...[21.8, 24.3, 26.9, 28.7, 30.4, 31.6].map((b, k) => (b + (j(i + k * 5) - .5) * .8).toFixed(2)), ...[17.6, 16.1, 14.6].map((b, k) => (b - i * .03 + (j(i + 40 + k) - .5) * .3).toFixed(2)), (590 + (j(i + 60) - .5) * 60).toFixed(0), (3.9 + j(i + 70) * .2).toFixed(2)]) };
      if (src.type === 'biomass') { const P = BIO2.pads; return { cols: ['Date', 'Paddock', 'Biomass (kg DM/ha)', 'Area (ha)'], rows: P.map(q => ['2026-11-08', q.n, String(q.c), String(q.ha)]).concat(P.map(q => ['2026-10-25', q.n, String(q.c - q.d * 14), String(q.ha)])) }; }
      if (src.type === 'feed quality') { const Dt = ['2026-10-28', '2026-09-28', '2026-08-26'], tf = { 'North East': .7, 'North West': .35, 'Main Shed': .1, 'South East': -.3, 'Crossroads': -.75 }; return { cols: ['SampleDate', 'Paddock', 'ME_MJkgDM', 'CP_Percent', 'NDF_Percent', 'DMD_Percent'], rows: Dt.flatMap((d, k) => BIO2.qual.map(x => { const f = (tf[x.n] || 0) * k; return [d, x.n, (x.me - .25 * f).toFixed(1), (x.cp - 1.1 * f).toFixed(1), String(Math.round(x.ndf + 2 * f)), String(Math.round(x.dmd - 1.4 * f))]; })) }; }
      if (src.type === 'livestock') return { cols: ['date', 'mob', 'animals_weighed', 'average_weight_kg'], rows: LV_ROWS.map(([d, m, n, w]) => [d, m, String(si ? n - 2 : n), String(si ? w - 3 : w)]) };
      if (src.type === 'milk yield') return { cols: ['Date', 'Herd', 'Milking', 'Yield (L)', 'Fat (%)', 'Protein (%)'], rows: Array.from({ length: N }, (_, i) => ['2026-10-' + String(31 - Math.floor(i / 2)).padStart(2, '0'), 'Main herd', i % 2 ? 'PM' : 'AM', (2100 + j(i) * 400).toFixed(0), (4 + j(i + 3) * .4).toFixed(2), (3.3 + j(i + 5) * .3).toFixed(2)]) };
      return { cols: ['Paddock', 'Crop', 'Area (ha)', 'Yield (t/ha)', 'Harvest date'], rows: Array.from({ length: 12 }, (_, i) => [['Creek Flat', 'Hill', 'River', 'Back', 'Home', 'North'][i % 6], ['Wheat', 'Barley', 'Canola'][i % 3], (20 + j(i) * 60).toFixed(1), (2.2 + j(i + 2) * 2.4).toFixed(2), '2025-12-' + String(2 + i).padStart(2, '0')]) };
    };
    const open = s.dataOpen && srcs.find(x => x.id === s.dataOpen);
    if (open) {
      const isLv = (open.kind || open.type) === 'livestock', opts = open.type === 'weather' ? wx : open.type === 'soil' ? so : isLv ? LV_SRC : [], si = Math.min(+(s.dataSrc || 0), Math.max(0, opts.length - 1));
      const tb = tableFor(open, si), per = s.dataPer || 'Last 24 hours';
      return { detail: true, title: open.t, type: open.type, pill: pill(open.type), desc: open.desc, back: () => this.setState({ dataOpen: null, dataFilt: false }),
        hasSrc: opts.length > 0, src: { open: !!s.dpSrcOpen, toggle: () => this.setState(x => ({ dpSrcOpen: !x.dpSrcOpen })), cur: isLv ? { l: opts[si], prov: '' } : { l: (opts[si] || {}).name, prov: (opts[si] || {}).provider }, opts: opts.map((d, k) => ({ l: isLv ? d : d.name, prov: isLv ? '' : d.provider, bg: k === si ? '#F0FDF4' : 'transparent', go: () => this.setState({ dataSrc: k, dpSrcOpen: false }) })) }, srcVal: String(si), srcOpts: isLv ? LV_SRC.map((n, k) => ({ v: String(k), label: n })) : opts.map((d, k) => ({ v: String(k), label: d.name + ' \u00b7 ' + (d.type === 'soil' ? 'Soil probe' : 'Weather station') + ' \u00b7 ' + d.provider })), setSrc: e => this.setState({ dataSrc: +e.target.value }),
        refresh: () => this.setState(x => ({ dataRefresh: (x.dataRefresh || 0) + 1 })), filtOpen: !!s.dataFilt, toggleFilt: () => this.setState(x => ({ dataFilt: !x.dataFilt })),
        filtBg: s.dataFilt ? '#E6F6F6' : '#F1F5F9', filtFg: s.dataFilt ? '#0F766E' : '#475569',
        pers: ['Last 24 hours', 'Last 7 days', 'Last 30 days'].map(l => ({ l, bg: l === per ? '#fff' : 'transparent', fg: l === per ? '#043C2C' : '#475569', sh: l === per ? '0 1px 2px rgba(15,23,42,.1)' : 'none', go: () => this.setState({ dataPer: l }) })),
        exp: () => exportCsv(open.t.toLowerCase().replace(/\s+/g, '-'), tb.cols, tb.rows),
        cols: tb.cols.map(c => ({ c: c.toUpperCase() })), rows: tb.rows.map((r, i) => ({ bg: i % 2 ? '#F8FAFC' : '#fff', cells: r.map(v => ({ v })) })), count: 'Showing 1–' + tb.rows.length + ' of ' + tb.rows.length + ' records', minW: Math.max(760, tb.cols.length * 150) + 'px' };
    }
    const q = (s.dataQ || '').trim().toLowerCase(), ty = s.dataType || 'all', asc = s.dataSort !== 'desc';
    const list = srcs.filter(x => (ty === 'all' || x.type === ty) && (!q || (x.t + ' ' + x.desc + ' ' + x.type).toLowerCase().includes(q))).sort((a, b) => asc ? a.t.localeCompare(b.t) : b.t.localeCompare(a.t));
    const types = ['all', ...Array.from(new Set(srcs.map(x => x.type)))];
    const grid = (s.dataView || 'grid') === 'grid';
    return { detail: false, q: s.dataQ || '', setQ: e => this.setState({ dataQ: e.target.value }), type: ty, typeOpts: types.map(x => ({ v: x, label: x === 'all' ? 'All types' : x.charAt(0).toUpperCase() + x.slice(1) })), setType: e => this.setState({ dataType: e.target.value }),
      sortTip: asc ? 'Sorted A–Z' : 'Sorted Z–A', sortRot: asc ? 'none' : 'scaleY(-1)', toggleSort: () => this.setState(x => ({ dataSort: x.dataSort === 'desc' ? 'asc' : 'desc' })),
      grid, table: !grid, gBg: grid ? '#043C2C' : '#fff', gFg: grid ? '#fff' : '#475569', tBg: grid ? '#fff' : '#043C2C', tFg: grid ? '#475569' : '#fff', setGrid: () => this.setState({ dataView: 'grid' }), setTable: () => this.setState({ dataView: 'table' }),
      openUp: () => this.setState({ up: {} }),
      onUpload: e => { const fl = e.target.files && e.target.files[0]; if (!fl) return; const nm = fl.name.toLowerCase(), tyG = nm.includes('milk') ? 'Milk yield' : nm.includes('crop') ? 'Crop yield' : nm.includes('soil') ? 'Soil' : nm.includes('weather') ? 'Weather' : 'Livestock'; this.setState(x => ({ uploads: [[fl.name, tyG, Math.max(1, Math.round(fl.size / 40)) + ' rows', '09 Nov 2026', 'Processed'], ...x.uploads] })); e.target.value = ''; },
      items: list.map(x => ({ ...x, pill: pill(x.type), view: () => this.setState({ dataOpen: x.id, dataSrc: 0 }), exp: () => { const tb = tableFor(x, 0); exportCsv(x.t.toLowerCase().replace(/\s+/g, '-'), tb.cols, tb.rows); } })),
      empty: list.length === 0, count: list.length ? 'Showing 1–' + list.length + ' of ' + list.length + ' data sources' : 'No data sources match' };
  }
  upVals(s) {
    const u = s.up, set = o => this.setState(st => ({ up: { ...st.up, ...o } })), saved = s.upSaved || {};
    const tk = u.type || '', T = UP_TY.find(t => t[0] === tk), S = UP_SC[tk];
    const auto = S ? S.c.map(c => c[2]) : [], hasSaved = !!saved[tk], map = (u.map && u.map.length === auto.length) ? u.map : (saved[tk] || auto);
    const g = { close: () => this.setState({ up: null }), stop: e => e.stopPropagation(), form: !u.done, done: !!u.done };
    g.type = tk; g.typeOpts = [{ v: '', label: 'Select data type\u2026' }].concat(UP_TY.map(t => ({ v: t[0], label: t[1] })));
    g.setType = e => set({ type: e.target.value, map: null, editMap: false });
    g.tdesc = T ? T[2] : ''; g.tic = T ? T[3] : ''; g.tibg = T ? T[4] : '#F1F5F9'; g.tifg = T ? T[5] : '#64748B';
    g.s2 = !!T; g.s3 = !!(T && u.file); g.s2Op = T ? '1' : '.45'; g.s3Op = T && u.file ? '1' : '.45'; g.n2bg = T ? '#043C2C' : '#CBD5E1'; g.n3bg = T && u.file ? '#043C2C' : '#CBD5E1';
    if (T) {
      g.noFile = !u.file; g.hasFile = !!u.file; g.file = u.file; g.fileMeta = S.rows + ' rows \u00b7 ' + S.c.length + ' columns';
      g.onFile = e => { const fl = e.target.files && e.target.files[0]; if (fl) set({ file: fl.name }); e.target.value = ''; };
      g.removeFile = () => set({ file: null }); g.dlSample = () => upSample(tk); g.dlTpl = () => upTemplate(tk);
      g.req = 'Required: ' + S.f.filter(f => f[2]).map(f => f[1]).join(', ');
    }
    let miss = [];
    if (T && u.file) {
      g.useSaved = hasSaved && !u.editMap; g.showMap = !g.useSaved; g.editMap = () => set({ editMap: true });
      g.savedTxt = 'Using the mapping saved for ' + T[1].toLowerCase() + ' on this farm.';
      const opts = [{ v: '', label: 'Skip this column' }].concat(S.f.map(f => ({ v: f[0], label: f[1] + (f[2] ? ' \u00b7 Required' : ' \u00b7 Optional') })));
      g.rows = S.c.map(([col, smp, a], i) => { const v = map[i] || '', F = S.f.find(f => f[0] === v); return { col, smp: smp.join(', '), val: v, opts, set: e => { const m = map.slice(); m[i] = e.target.value; set({ map: m }); }, auto: !!v && v === a, badge: F ? (F[2] ? 'Required' : 'Optional') : 'Ignored', bbg: F ? (F[2] ? '#FFF7ED' : '#F1F5F9') : '#F8FAFC', bfg: F ? (F[2] ? '#C2410C' : '#475569') : '#94A3B8', rbg: F ? '#fff' : '#FAFBFC', cc: F ? '#0F172A' : '#94A3B8' }; });
      const um = S.f.filter(f => !map.includes(f[0])); miss = um.filter(f => f[2]);
      g.unmatched = um.length ? um.map(f => ({ l: f[1], t: f[2] ? 'Required \u00b7 match a column' : 'Optional \u00b7 left blank', bg: f[2] ? '#FEF2F2' : '#F8FAFC', bd: f[2] ? '#FECACA' : '#E2E8F0', fg: f[2] ? '#B91C1C' : '#475569' })) : null;
      const an = map.filter((v, i) => v && v === auto[i]).length; g.autoNote = an + ' of ' + S.c.length + ' columns matched automatically by column name.';
      const unit = u.unit || 'kg';
      g.units = tk === 'pasture' ? [['kg', 'kg DM/ha'], ['t', 't DM/ha']].map(([k, l]) => { const on = unit === k; return { l, bg: on ? '#fff' : 'transparent', fg: on ? '#0F172A' : '#64748B', sh: on ? '0 1px 2px rgba(15,23,42,.1)' : 'none', go: () => set({ unit: k }) }; }) : null;
      g.unitNote = unit === 't' ? 't DM/ha values are multiplied by 1,000.' : 'Stored as kg DM/ha.';
      const sv = u.save !== false; g.toggleSave = () => set({ save: !sv }); g.sbg = sv ? '#12855F' : '#fff'; g.sbd = sv ? '#12855F' : '#CBD5E1'; g.showSave = g.showMap;
    }
    const ok = !!(T && u.file && !miss.length);
    g.imp = { l: S && u.file ? 'Import ' + S.rows + ' rows' : 'Import', bg: ok ? '#043C2C' : '#CBD5E1', cur: ok ? 'pointer' : 'not-allowed', tip: ok ? '' : !T ? 'Choose a data type' : !u.file ? 'Add a file' : 'Match all required fields',
      go: ok ? () => this.setState(st => ({ up: { ...st.up, done: true, map }, upSaved: (st.up.save !== false && (!hasSaved || st.up.editMap)) ? { ...(st.upSaved || {}), [tk]: map } : st.upSaved, uploads: [[u.file, T[1], S.rows + ' rows', '11 Nov 2026', 'Processed'], ...(st.uploads || [])] })) : () => {} };
    if (u.done) { g.doneT = S.rows + ' rows imported'; g.doneS = u.file + ' \u00b7 ' + T[1]; g.doneSaved = u.save !== false && (!hasSaved || u.editMap) ? 'Column mapping saved for this farm. Next time, matching is done for you.' : ''; g.again = () => this.setState({ up: {} }); }
    return g;
  }
  seasonHist(s, sd, Y, RG) {
    const END = Y === 2026 ? +new Date(2026, 10, 10) : +new Date(Y, 11, 31), mb = { '3M': 3, '6M': 6, '1Y': 12 }[RG];
    const T0 = mb ? +new Date(new Date(END).getFullYear(), new Date(END).getMonth() - mb, new Date(END).getDate() + 1) : +new Date(Y, 0, 1);
    const D = climDaily(T0, END, sd + Y), LT = climDaily(T0, END, sd + Y + 900), lab = D.lab;
    const avg = a => a.reduce((x, y) => x + y, 0) / a.length, sum = a => a.reduce((x, y) => x + y, 0), cumA = a => { let x = 0; return a.map(v => +(x += v).toFixed(1)); };
    const per = (RG === 'Year' ? 'Year ' + Y : RG + ' to ' + lab[lab.length - 1].full), K = 'sh' + Y + RG;
    const C = (k, o) => this.apexC(K + k, { maxL: 5, mt: 'm', ...o }, lab);
    const pc = (a, b) => (a - b) / Math.abs(b) * 100, SA = (label, a, b, u, dp, good) => { const d = pc(a, b); return { label, big: a.toFixed(dp) + u, lines: [{ b: '', t: 'avg ' + b.toFixed(dp) + u }], pill: (d >= 0 ? '+' : '\u2212') + Math.abs(d).toFixed(2) + '%', pc: (d >= 0) === good ? '#15803D' : '#B91C1C', pbg: (d >= 0) === good ? '#F0FDF4' : '#FEF2F2' }; };
    const PV = climDaily(T0 - 365 * 864e5, END - 365 * 864e5, sd + Y + 77), YO = (label, a, b, u, dp, good) => { const x = SA(label, a, b, u, dp, good); x.lines = [{ b: '', t: 'was ' + b.toFixed(dp) + u }]; return x; };
    const hotM = {}, wetM = {}; D.t.forEach((t, i) => { const m = new Date(t), k = MNS[m.getMonth()] + " '" + String(m.getFullYear()).slice(2); if (D.mx[i] > 32) hotM[k] = (hotM[k] || 0) + 1; if (D.rf[i] > 12.7) wetM[k] = (wetM[k] || 0) + 1; });
    const lst = (o, w) => { const e = Object.entries(o); return e.length ? e.map(([b, n]) => ({ b, t: '\u00b7 ' + n + ' ' + w + (n > 1 ? 's' : '') })) : [{ b: '', t: 'None' }]; };
    return { title: 'Seasonal climate history', sub: per + ' \u00b7 SILO Weather Station', sel: null,
      charts: [C('t', { t: 'Temperature', sub: 'Daily maximum, minimum and average \u00b7 \u00b0C', unit: ' \u00b0C', yu: '\u00b0', h: '280px', layers: [{ type: 'area', name: 'Max', v: D.mx, c: '#E76F51' }, { type: 'area', name: 'Min', v: D.mn, c: '#3B82F6' }, { type: 'line', name: 'Average', v: D.av, c: '#64748B', w: 2, dash: '1 4' }] })],
      grid: [C('r', { t: 'Rainfall', sub: 'Daily totals \u00b7 mm', unit: ' mm', zero: true, h: '200px', layers: [{ type: 'bars', name: 'Rainfall', v: D.rf, c: '#0EA5A4', hc: '#0F766E' }] }),
        C('c', { t: 'Cumulative rainfall', sub: 'Running total \u00b7 mm', unit: ' mm', zero: true, h: '200px', layers: [{ type: 'area', name: 'Cumulative rainfall', v: cumA(D.rf), c: '#EC4899' }] }),
        C('h', { t: 'Relative humidity', sub: 'Daily average \u00b7 %', unit: ' %', h: '200px', layers: [{ type: 'area', name: 'Humidity', v: D.hum, c: '#0EA5E9' }] }),
        C('p', { t: 'Mean sea level pressure', sub: 'Daily average \u00b7 hPa', unit: ' hPa', h: '200px', layers: [{ type: 'line', name: 'Pressure', v: D.msl, c: '#475569' }] }),
        C('e', { t: 'Evapotranspiration', sub: 'Daily \u00b7 mm', unit: ' mm', zero: true, h: '200px', layers: [{ type: 'bars', name: 'Evapotranspiration', v: D.et, c: '#3B82F6', hc: '#1D4ED8' }] }),
        C('s', { t: 'Solar radiation', sub: 'Daily \u00b7 MJ/m\u00b2', unit: ' MJ/m\u00b2', h: '200px', layers: [{ type: 'area', name: 'Solar radiation', v: D.sol, c: '#F59E0B' }] }),
        C('v', { t: 'Vapour pressure', sub: 'Daily average \u00b7 hPa', unit: ' hPa', h: '200px', layers: [{ type: 'area', name: 'Vapour pressure', v: D.vp, c: '#8B5CF6' }] }),
        C('ev', { t: 'Evaporation', sub: 'Daily \u00b7 mm', unit: ' mm', zero: true, h: '200px', layers: [{ type: 'bars', name: 'Evaporation', v: D.evap, c: '#C47B3F', hc: '#9A5B28' }] })],
      side: [{ title: 'Season averages', sub: per + ' vs long-term average (2000\u2013' + (Y - 1) + ')', cards: [SA('AVG MAX TEMP', avg(D.mx), avg(LT.mx) + .6, '\u00b0C', 2, true), SA('AVG MIN TEMP', avg(D.mn), avg(LT.mn) + .3, '\u00b0C', 2, true), SA('TOTAL RAINFALL', sum(D.rf), sum(LT.rf) * 1.12, ' mm', 1, true), SA('AVG HUMIDITY', avg(D.hum), avg(LT.hum) - 2, '%', 1, true), SA('TOTAL EVAPOTRANSPIRATION', sum(D.et), sum(LT.et) * 1.08, ' mm', 1, false)] },
        { title: 'Year-over-year', sub: per + ' vs same period last year', cards: [YO('AVG MAX TEMP', avg(D.mx), avg(PV.mx), '\u00b0C', 2, true), YO('TOTAL RAINFALL', sum(D.rf), sum(PV.rf), ' mm', 1, true), YO('AVG HUMIDITY', avg(D.hum), avg(PV.hum), '%', 1, true)] },
        { head: 'CLIMATE EXTREMES', cards: [{ label: 'HOT MONTHS (>32\u00b0C)', lines: lst(hotM, 'hot day') }, { label: 'WET MONTHS (>12.7 MM)', lines: lst(wetM, 'wet day') }] }] };
  }
  seasonFc(s, sd) {
    const OPTS = ['All', 'Last 6 months trend', 'Next 3 months', 'Next 6 months', 'Next 1 year'], op = s.sfOpt || 'Last 6 months trend', FC = +new Date(2026, 10, 10);
    const R = { 'All': [new Date(2025, 10, 1), new Date(2027, 10, 30)], 'Last 6 months trend': [new Date(2026, 5, 1), new Date(2027, 10, 30)], 'Next 3 months': [new Date(2026, 10, 1), new Date(2027, 1, 28)], 'Next 6 months': [new Date(2026, 10, 1), new Date(2027, 4, 31)], 'Next 1 year': [new Date(2026, 10, 1), new Date(2027, 10, 30)] }[op];
    const Dd = climDaily(+R[0], +R[1], sd + 4242), tm = s.sfTM || 'Daily', pm = s.sfPM || 'Monthly';
    const Mo = climMonthly(op.indexOf('Next') === 0 ? climDaily(+new Date(2026, 5, 1), +R[1], sd + 4242) : Dd, ['mx', 'mn', 'av', 'rf'], ['rf']);
    const T = tm === 'Daily' ? Dd : Mo, Pr = pm === 'Daily' ? Dd : Mo;
    const ob = (D, a, fc) => D[a].map((v, i) => fc ? (D.t[i] >= FC || (D.t[i + 1] != null && D.t[i + 1] >= FC) ? v : null) : (D.t[i] < FC ? v : null));
    const chips = (cur, k) => ['Monthly', 'Daily'].map(l => { const on = l === cur; return { l, bg: on ? '#FDEDE8' : 'transparent', fg: on ? '#C2410C' : '#475569', sh: on ? '0 1px 2px rgba(15,23,42,.08)' : 'none', go: () => this.setState({ [k]: l, cHov: null }) }; });
    const LG = (a) => a.map(([l, c, dash]) => ({ l, c, w: dash ? '14px' : '14px', hh: '2px', r: '1px', dash }));
    const tC = this.apexC('sf' + op + tm + 't', { t: 'Temperature Forecast', sub: '', unit: ' \u00b0C', yu: '\u00b0C', h: '230px', maxL: 6, mt: 'm', fcT: FC, chips: chips(tm, 'sfTM'), note: 'Solid = observed \u00b7 Dashed = forecast',
      legend: [{ l: 'Max \u00b0C', c: '#EA580C', w: '14px', hh: '2px', r: '1px' }, { l: 'Avg \u00b0C', c: '#6B7280', w: '14px', hh: '2px', r: '1px' }, { l: 'Min \u00b0C', c: '#2563EB', w: '14px', hh: '2px', r: '1px' }, { l: 'Forecast (dashed)', c: '#9CA3AF', w: '14px', hh: '2px', r: '1px' }],
      layers: [{ type: 'line', name: 'Max', v: ob(T, 'mx'), c: '#EA580C', w: 1.8 }, { type: 'line', name: 'Avg', v: ob(T, 'av'), c: '#6B7280', w: 1.8 }, { type: 'line', name: 'Min', v: ob(T, 'mn'), c: '#2563EB', w: 1.8 },
        { type: 'line', name: 'Max (forecast)', v: ob(T, 'mx', 1), c: '#F08A5D', w: 1.3, dash: '3 3' }, { type: 'line', name: 'Min (forecast)', v: ob(T, 'mn', 1), c: '#5AA9E6', w: 1.3, dash: '3 3' }] }, T.lab);
    const pC = this.apexC('sf' + op + pm + 'p', { t: 'Precipitation Forecast', sub: '', unit: ' mm', yu: ' mm', zero: true, h: '190px', maxL: 6, mt: 'm', fcT: FC, chips: chips(pm, 'sfPM'),
      legend: [{ l: 'Observed', c: '#1E88E5', w: '10px', hh: '10px', r: '2px' }, { l: 'Forecast', c: '#43A047', w: '10px', hh: '10px', r: '2px' }],
      layers: [{ type: 'bars', name: 'Precipitation', v: Pr.rf, c: '#1E88E5', cf: '#43A047', hc: '#0F172A' }] }, Pr.lab);
    tC.ic = 'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z'; tC.icc = '#EA580C'; pC.ic = 'M7 13a4 4 0 0 1 .5-7.97A5 5 0 0 1 17 6a3.5 3.5 0 0 1 0 7zM8.5 16l-.8 3M12 16l-.8 3M15.5 16l-.8 3'; pC.icc = '#64748B';
    const fi = Dd.t.map((t, i) => t >= FC ? i : -1).filter(i => i >= 0), F = k => fi.map(i => Dd[k][i]);
    const avg = a => a.reduce((x, y) => x + y, 0) / (a.length || 1), sum = a => a.reduce((x, y) => x + y, 0), q = rnd(fi.length, sd + 5);
    const aT = avg(F('av')), hT = aT + .35 + q * .3, hot = F('mx').filter(v => v > 32).length, hHot = hot + Math.round(fi.length / 30), cold = F('mn').filter(v => v < 0).length;
    const tp = sum(F('rf')), htp = tp * (1.03 + q * .05), dry = F('rf').filter(v => v === 0).length, hdry = Math.round(dry * .42), wet = F('rf').filter(v => v > 12.7).length, hwet = wet + Math.round(fi.length / 60) + 1;
    const DN = 'M3 7l6 6 4-4 8 8M21 11v6h-6', UP = 'M3 17l6-6 4 4 8-8M15 7h6v6';
    const FS = (label, a, b, u, dp, unitW) => { const d = a - b, p = b ? Math.abs(d / b * 100) : (d ? 100 : 0), less = d < 0; return { label, d: less ? DN : UP, pct: (less ? '\u2193 ' : '\u2191 ') + p.toFixed(2).replace(/\.00$/, '') + '%', txt: Math.abs(d).toFixed(dp) + (unitW || u) + (less ? ' less' : ' more') + ' than normal', sel: a.toFixed(dp) + u, hist: b.toFixed(dp) + u }; };
    return { title: 'Seasonal Climate Forecast', sub: 'Based on the latest Helios climate model projections for your location.',
      sel: { value: op, opts: OPTS, set: e => this.setState({ sfOpt: e.target.value, cHov: null }) }, charts: [tC, pC], grid: null,
      side: [{ head: 'TEMPERATURE', cards: [FS('Average temperature', aT, hT, '\u00b0C', 2), FS('Days above 32\u00b0C (90\u00b0F)', hot, hHot, ' days', 0), FS('Days below freezing (0\u00b0C)', cold, cold, ' days', 0)] },
        { head: 'PRECIPITATION', cards: [FS('Total precipitation', tp, htp, ' mm', 2), FS('Days with no precipitation', dry, hdry, ' days', 0), FS('Days with >12.7mm (0.5in) rain', wet, hwet, ' days', 0)] }] };
  }
  histVals(key, sd) {
    const s = this.state, S = this.selector(key, 'Provider', ['SILO Weather Station']);
    const RG = [['1W', 7, 1], ['1M', 30, 1], ['3M', 91, 1], ['6M', 182, 1], ['1Y', 365, 1]];
    const rk = s.histR || '1Y', ri = Math.max(0, RG.findIndex(r => r[0] === rk)), [, n, stepD] = RG[ri], yr = false, wk = false, pk = n - 1 - 294, lg = n > 30;
    const MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], END = new Date(2026, 10, 5);
    const dates = Array.from({ length: n }, (_, i) => { if (lg) { const d = new Date(+END - (n - 1 - i) * 864e5), s2 = String(d.getDate()).padStart(2, '0') + ' ' + MN[d.getMonth()]; return { s: d.getDate() === 1 ? (d.getMonth() ? MN[d.getMonth()] + " '" + String(d.getFullYear()).slice(2) : String(d.getFullYear())) : s2, full: s2 + ' ' + d.getFullYear(), t: +d, g: 'd' }; } if (yr) { const d = new Date(2026, 10 - (n - 1 - i), 1); return { s: MN[d.getMonth()] + " '" + String(d.getFullYear()).slice(2), full: MN[d.getMonth()] + ' ' + d.getFullYear(), t: +d, g: 'm' }; } const d = new Date(+END - (n - 1 - i) * stepD * 864e5); const s2 = String(d.getDate()).padStart(2, '0') + ' ' + MN[d.getMonth()]; return { s: s2, full: (wk ? 'Week of ' : '') + s2 + ' ' + d.getFullYear(), t: +d, g: wk ? 'w' : 'd' }; });
    const r2 = a => a.map(v => +v.toFixed(2));
    const gen = q => {
      const cl = (a, lo, hi) => a.map(v => Math.min(hi, Math.max(lo, v)));
      if (lg) {
        const mx = r2(cl(wave(n, 23, 8, pk, 365, 9, q), 9, 43)), mn = r2(cl(wave(n, 10, 5, pk, 365, 6, q + 2), -2, 24).map((v, i) => Math.min(v, mx[i] - 3)));
        return { mx, mn, rf: r2(rain(n, .28, 18, q + 3)), hum: r2(cl(wave(n, 52, -14, pk, 365, 26, q + 4), 12, 92)), msl: r2(cl(wave(n, 1017, -5, pk, 365, 10, q + 5), 1001, 1038)),
          et: r2(cl(wave(n, 3.8, 2.8, pk, 365, 2, q + 6), .6, 9)), evap: r2(cl(wave(n, 5.5, 4.5, pk, 365, 4, q + 7), 0, 18)), sol: r2(cl(wave(n, 19, 11, pk, 365, 7, q + 8), 3, 33)), vp: r2(cl(wave(n, 13.5, 2, pk, 365, 7, q + 9), 6, 25)) };
      }
      const mx = r2(walk(n, 23.4, 0, n > 7 ? 2.4 : .5, q + 1, 12, 36));
      const mn = r2(walk(n, 14.6, -.18, n > 7 ? 1.8 : .6, q + 2, 2, 20).map((v, i) => Math.min(v, mx[i] - 4)));
      return { mx, mn, rf: r2(rain(n, .55, 6, q + 3)), hum: r2(walk(n, 62, -2, n > 7 ? 5 : 3, q + 4, 35, 95)), msl: r2(walk(n, 1013, 1.6, 1.5, q + 5, 1004, 1030)),
        et: r2(walk(n, 3.6, .15, .8, q + 6, 1.2, 7.5)), evap: r2(walk(n, 4.1, .1, 1, q + 7, .5, 9)), sol: r2(walk(n, 21, .4, 5, q + 8, 8, 32)), vp: r2(walk(n, 17, -.7, 1, q + 9, 8, 24)) };
    };
    const q = sd + ri * 11, D = gen(q), PV = gen(q + 500), { mx, mn, rf, hum, msl, et, evap, sol, vp } = D;
    const avg = a => a.reduce((x, y) => x + y, 0) / a.length, sum = a => a.reduce((x, y) => x + y, 0), amax = a => a.indexOf(Math.max(...a));
    const at = mx.map((v, i) => +((v + mn[i]) / 2).toFixed(2)), pat = PV.mx.map((v, i) => (v + PV.mn[i]) / 2);
    const mul = yr ? 30 : stepD, agg = yr ? 'Monthly' : wk ? 'Weekly' : 'Daily', unitW = yr ? 'month' : wk ? 'week' : 'day';
    const prevL = 'same period last year';
    const win = rk === '6M' ? 4 : yr ? 3 : rk === '1M' ? 7 : 0, rollL = rk === '6M' ? '4-week rolling avg' : yr ? '3-month rolling avg' : '7-day rolling avg';
    const roll = win ? at.map((_, i) => i < win - 1 ? null : +avg(at.slice(i - win + 1, i + 1)).toFixed(2)) : null;
    const hv = s.histHov;
    const C = (k, o) => this.apexC('h' + rk + k, { mt: lg, maxL: 12, ...o }, dates);
    const sp = a => { const lo = Math.min(...a), hi = Math.max(...a), m = a.length; const pts = a.map((v, i) => (m > 1 ? i / (m - 1) * 100 : 50).toFixed(1) + ',' + (27 - (v - lo) / ((hi - lo) || 1) * 24).toFixed(1)).join(' '); return { sp: pts, spa: '0,30 ' + pts + ' 100,30' }; };
    const cumA = a => { let x = 0; return a.map(v => x += v); };
    const pct = (a, b) => b ? (a - b) / Math.abs(b) * 100 : 0, arr = v => v >= 0 ? '▲ ' : '▼ ';
    const TONE = { temp: [['#FFF7ED', '#C2410C'], ['#EFF6FF', '#1D4ED8']], rain: [['#F0FDF4', '#15803D'], ['#FEF2F2', '#B91C1C']], hum: [['#F1F5F9', '#334155'], ['#F1F5F9', '#334155']], et: [['#FFFBEB', '#B45309'], ['#F0FDF4', '#15803D']] };
    const K = (id, l, v, u, dl, up, tone, cmp, c, bg, d) => ({ l, v, u, dl, dfg: up ? '#15803D' : '#DC2626', c, bg, d });
    const sg = v => (v >= 0 ? '▲ +' : '▼ −');
    const aT = avg(at), pT = avg(pat), tR = sum(rf), pR = sum(PV.rf), aH = avg(hum), pH = avg(PV.hum), tE = sum(et) * mul, pE = sum(PV.et) * mul;
    const dR = pct(tR, pR), dH = aH - pH, dE = pct(tE, pE), dT = aT - pT;
    const hot = amax(mx), wet = amax(rf), eMax = amax(et), third = Math.max(1, Math.floor(n / 3)), trend = avg(at.slice(-third)) - avg(at.slice(0, third));
    const dl = i => yr ? dates[i].full : wk ? 'the week of ' + dates[i].s : dates[i].s;
    const cap = x => x.charAt(0).toUpperCase() + x.slice(1);
    const wetCount = rf.filter(v => v >= .2).length;
    const ID = { thermo: 'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z', rain: 'M7 13a4 4 0 0 1 .5-7.97A5 5 0 0 1 17 6a3.5 3.5 0 0 1 0 7zM8.5 16l-.8 3M12 16l-.8 3M15.5 16l-.8 3', drop: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z', leaf: 'M5 19c9 0 14-5 14-14-9 0-14 5-14 14zM5 19l7-7', sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4', trend: 'M3 17l6-6 4 4 8-8M15 7h6v6', scale: 'M12 3v18M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z' };
    return {
      sel: S.sel, agg, span: dates[0].full.replace('Week of ', '') + ' – ' + (yr ? dates[n - 1].full : '05 Nov 2026'),
      ranges: RG.map(([l]) => { const on = l === rk; return { l, bg: on ? '#fff' : 'transparent', fg: on ? '#043C2C' : '#334155', sh: on ? '0 1px 2px rgba(15,23,42,.1)' : 'none', go: () => this.setState({ histR: l, histHov: null }) }; }),
      kpis: [
        K('t', 'Mean temperature', aT.toFixed(2), '°C', sg(dT) + Math.abs(dT).toFixed(2) + ' °C vs last year', dT >= 0, 'temp', '', '#EF4444', '#FEE2E2', ID.thermo),
        K('hd', 'Hottest day', mx[hot].toFixed(2), '°C', dates[hot].full, true, 'temp', '', '#F59E0B', '#FEF3C7', ID.sun),
        K('r', 'Total rainfall', tR.toFixed(2), 'mm', sg(tR - pR) + Math.abs(tR - pR).toFixed(2) + ' mm vs last year', tR >= pR, 'rain', '', '#0EA5E9', '#E0F2FE', ID.rain),
        K('h', 'Mean humidity', aH.toFixed(2), '%', sg(dH) + Math.abs(dH).toFixed(2) + ' % vs last year', dH >= 0, 'hum', '', '#0891B2', '#E0F7FA', ID.drop),
        K('e', 'Evapotranspiration', tE.toFixed(2), 'mm', 'Mean pressure ' + avg(msl).toFixed(2) + ' hPa', true, 'et', '', '#16A34A', '#DCFCE7', ID.leaf),
      ],
      main: [
        C('t', { t: 'Temperature (°C)', unit: ' °C', h: '230px', zero: true, maxL: 13,
          layers: [{ type: 'area', name: 'Max Temp (°C)', v: mx, c: '#EF4444' }, { type: 'area', name: 'Min Temp (°C)', v: mn, c: '#3B82F6' }] }),
        C('r', { t: 'Rainfall (mm)', sub: dates[0].full + ' – ' + dates[n - 1].full, unit: ' mm', h: '190px', zero: true, maxL: 13,
          layers: [{ type: 'bars', name: 'Rainfall', v: rf, c: '#38BDF8', hc: '#0284C7' }] }),
      ],
      charts: [
        C('h', { t: 'Relative Humidity (%)', unit: ' %', zero: true, layers: [{ type: 'area', name: 'Humidity', v: hum, c: '#22B8D8' }] }),
        C('p', { t: 'Mean Sea Level Pressure (hPa)', unit: ' hPa', layers: [{ type: 'area', name: 'Pressure', v: msl, c: '#6B7280' }] }),
        C('e', { t: 'Evapotranspiration (mm)', unit: ' mm', zero: true, layers: [{ type: 'area', name: 'Evapotranspiration', v: et, c: '#4CAF50' }] }),
        C('v', { t: 'Evaporation (mm)', unit: ' mm', zero: true, layers: [{ type: 'area', name: 'Evaporation', v: evap, c: '#6D28D9' }] }),
        C('s', { t: 'Solar Radiation (MJ/m²)', unit: ' MJ/m²', zero: true, layers: [{ type: 'area', name: 'Solar radiation', v: sol, c: '#F59E0B' }] }),
        C('vp', { t: 'Vapour Pressure (hPa)', unit: ' hPa', layers: [{ type: 'area', name: 'Vapour pressure', v: vp, c: '#06A5B8' }] }),
      ],
      insights: [
        { t: 'Hottest ' + unitW, x: cap(dl(hot)) + ' reached ' + mx[hot].toFixed(1) + ' °C, ' + (mx[hot] - avg(mx)).toFixed(1) + ' °C above the average maximum for the period.', c: '#E76F51', bg: '#FDEDE8', d: ID.sun },
        { t: 'Wettest ' + unitW, x: tR > 0 ? cap(dl(wet)) + ' recorded ' + rf[wet].toFixed(1) + ' mm, ' + Math.round(rf[wet] / tR * 100) + '% of all rainfall in the period.' : 'No rainfall was recorded in this period.', c: '#0EA5A4', bg: '#E6F6F6', d: ID.rain },
        { t: 'Peak evapotranspiration', x: 'Evapotranspiration peaked in ' + dl(eMax) + ' at ' + et[eMax].toFixed(1) + ' mm/day, ' + Math.round(pct(et[eMax], avg(et))) + '% above the period average.', c: '#10B981', bg: '#ECFDF5', d: ID.leaf },
        { t: 'Rainfall vs ' + prevL, x: 'Rainfall totalled ' + tR.toFixed(1) + ' mm, ' + Math.abs(dR).toFixed(0) + '% ' + (dR >= 0 ? 'more' : 'less') + ' than the ' + prevL + ' (' + pR.toFixed(1) + ' mm).', c: '#0E7490', bg: '#ECFEFF', d: ID.scale },
        { t: 'Temperature trend', x: 'Average temperature ' + (Math.abs(trend) < .3 ? 'held steady' : (trend > 0 ? 'rose' : 'fell') + ' by ' + Math.abs(trend).toFixed(1) + ' °C') + ' across the period and was ' + Math.abs(dT).toFixed(1) + ' °C ' + (dT >= 0 ? 'warmer' : 'cooler') + ' than the ' + prevL + '.', c: '#7C3AED', bg: '#F5F3FF', d: ID.trend },
      ] };
  }
  info(dv, f) {
    const lng = +(f.lng + dv.dx).toFixed(4), lat = +(f.lat + dv.dy).toFixed(4);
    const on = dv.status !== 'Offline', sig = dv.type === 'weather' ? 23 : 18;
    return { kv: [{ k: 'Controller ID', v: CTRL[dv.id] || dv.id }, { k: 'Device name', v: dv.name }, { k: 'Provider', v: dv.provider }, { k: 'Status', v: on ? 'Active' : 'Offline', pill: true, pbg: on ? '#ECFDF5' : '#FEF2F2', pfg: on ? '#15803D' : '#B91C1C' }, { k: 'Communication type', v: 'Cellular' }, { k: 'Reading interval', v: dv.type === 'weather' ? '15 mins' : '30 mins' }, { k: 'Battery level', v: dv.type === 'weather' ? '85%' : '72%' }, { k: 'Signal strength', v: String(sig) }, { k: 'Date installed', v: '24 Apr 2026' }].map(x => ({ pill: false, pbg: '', pfg: '', ...x, plain: !x.pill })),
      img: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/export?bbox=' + (lng - .006) + ',' + (lat - .0035) + ',' + (lng + .006) + ',' + (lat + .0035) + '&bboxSR=4326&imageSR=3857&size=800,460&format=jpg&f=image',
      icon: IC[dv.type], ic: ICC[dv.type][1], coords: lat + ', ' + lng, ll: [lng, lat], type: dv.type, name: dv.id + ' · ' + dv.name };
  }
  lgLoadMap() {
    if (this._lgMap) return; this._lgMap = true;
    fetch('assets/upper-murray-map.json').then(r => r.json()).then(fc => {
      const [x0, y0, x1, y1] = fc.bbox, k = Math.cos((y0 + y1) / 2 * Math.PI / 180), W = 1000, sx = W / ((x1 - x0) * k), H = Math.round((y1 - y0) * sx);
      const P = ([x, y]) => ((x - x0) * k * sx).toFixed(1) + ',' + ((y1 - y) * sx).toFixed(1), ring = r => 'M' + r.map(P).join('L') + 'Z';
      const polys = g => g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
      const lines = g => g.type === 'LineString' ? [g.coordinates] : g.type === 'MultiLineString' ? g.coordinates : polys(g).flat();
      const zones = fc.features.filter(f => f.properties.k === 'sub').map((f, i) => ({ d: polys(f.geometry).map(pl => pl.map(ring).join('')).join(''), c: LG_GREENS[i % LG_GREENS.length] }));
      const bnd = fc.features.filter(f => f.properties.k === 'bnd').map(f => lines(f.geometry).map(r => 'M' + r.map(P).join('L')).join('')).join('');
      const locs = fc.features.filter(f => f.properties.k === 'loc' && f.properties.lx != null).map(f => { const [x, y] = P([f.properties.lx, f.properties.ly]).split(','); return { x, y, n: f.properties.n }; });
      this.setState({ lgMap: { vb: '-20 -20 ' + (W + 40) + ' ' + (H + 40), zones, bnd, locs, n: zones.length } });
    }).catch(() => {});
  }
  loginVals(s) {
    if (s.authed) return { on: false };
    if (!this._lgMap) setTimeout(() => this.lgLoadMap(), 0);
    const em = s.lgEmail || '', ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) && (s.lgPw || '').length > 0;
    const finish = acc => { const email = acc.email, staff = acc.role === 'staff', ses = { email, role: acc.role, name: acc.label }; try { (s.lgRemember ? localStorage : sessionStorage).setItem(LG_KEY, JSON.stringify(ses)); } catch (e) {} this.setState({ authed: ses, lgBusy: false, lgPw: '', lgErr: '' }); };
    return { on: true, signIn: !s.lgForgot, forgotOn: !!s.lgForgot, sent: !!s.lgSent, sentOff: !s.lgSent,
      map: s.lgMap || { vb: '0 0 1000 1300', zones: [], bnd: '', locs: [] }, mapNote: s.lgMap ? s.lgMap.n + ' zones · 10 farms connected' : 'Loading region map',
      email: em, setEmail: e => this.setState({ lgEmail: e.target.value, lgErr: '' }), pw: s.lgPw || '', setPw: e => this.setState({ lgPw: e.target.value, lgErr: '' }),
      pwType: s.lgShow ? 'text' : 'password', pwToggleL: s.lgShow ? 'Hide' : 'Show', togglePw: () => this.setState(st => ({ lgShow: !st.lgShow })),
      rmBd: s.lgRemember ? '#043C2C' : '#CBD5E1', rmBg: s.lgRemember ? '#043C2C' : '#fff', rmTick: s.lgRemember ? '\u2713' : '', toggleRemember: () => this.setState(st => ({ lgRemember: !st.lgRemember })),
      err: s.lgErr || '', hasErr: !!s.lgErr, btnL: s.lgBusy ? 'Signing in\u2026' : 'Sign in',
      submit: e => { if (e && e.preventDefault) e.preventDefault(); if (s.lgBusy) return; if (!ok) { this.setState({ lgErr: 'Enter a valid email address and your password.' }); return; } const acc = findAccount(em, s.lgPw); if (!acc) { this.setState({ lgErr: 'Email or password is incorrect.' }); return; } this.setState({ lgBusy: true }); setTimeout(() => finish(acc), 650); },
      forgot: () => this.setState({ lgForgot: true, lgSent: false, lgErr: '' }), back: () => this.setState({ lgForgot: false, lgSent: false }),
      sendReset: e => { if (e && e.preventDefault) e.preventDefault(); if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) this.setState({ lgSent: true }); },
      demos: DEMO_ACCOUNTS.map(a => { const on = em.trim().toLowerCase() === a.email; return { l: a.label, e: a.email, p: a.pw, bd: on ? '#12855F' : '#E2E8F0', bg: on ? '#E0F5EC' : '#fff', go: () => this.setState({ lgEmail: a.email, lgPw: a.pw, lgErr: '' }) }; }),
    };
  }
  signOut() { try { localStorage.removeItem(LG_KEY); sessionStorage.removeItem(LG_KEY); } catch (e) {} this.setState({ authed: null, lgEmail: 'admin@ump.org.au', lgPw: 'UmpAdmin@2026', lgForgot: false, lgSent: false, menuOpen: false, profileOpen: false }); }
  renderVals() {
    const s = this.state, fi = s.farm, f = FARMS[fi], pg = PAGES[s.page], sub = pg.tabs ? this.subOf(s.page) : '';
    const devs = devsOf(fi);
    const navItems = NAV.map(([k, label, d, divider, mode]) => { const a = s.page === k; return { label, d, fill: mode ? 'currentColor' : 'none', sw: mode === 'solid' ? 0.4 : mode === 'fill' ? 0.8 : 1.75, divider: !!divider, go: () => this.go(k), bg: a ? 'linear-gradient(90deg,rgba(14,165,164,.26) 0%,rgba(14,165,164,.08) 100%)' : 'transparent', fg: a ? '#CCFBF1' : '#9FC2B6', fw: a ? 600 : 450, ic: a ? '#5EEAD4' : 'currentColor', ibg: a ? 'rgba(14,165,164,.20)' : 'transparent', sh: a ? 'inset 0 0 0 1px rgba(94,234,212,.12),0 8px 24px rgba(14,165,164,.18)' : 'none', barOp: a ? 1 : 0 }; });
    const acts = { support: { label: 'Create ticket', d: 'M12 5v14M5 12h14', go: () => this.openTk() }, alerts: { label: 'Add alert', d: 'M12 5v14M5 12h14', go: () => this.setState({ modal: 'alert', na: this.newAlert() }) }, providers: { label: 'Connect provider', d: 'M12 5v14M5 12h14', go: () => this.setState({ modal: 'wizard', wiz: { step: 1, prov: 'Helios', tested: false, freq: 'Hourly', key: '' } }) } };
    if (s.page === 'settings' && sub === 'users') acts.settings = { label: 'Invite user', d: 'M12 5v14M5 12h14', go: () => this.setState({ modal: 'invite', inv: { name: '', email: '', role: 'User' }, invStep: 'form', invTried: false }) };
    const tick = (list, v) => list.includes(v);
    const na = s.na || {};
    const updNa = o => this.setState(st => ({ na: { ...st.na, ...o } }));
    const togNa = (k, v) => this.setState(st => ({ na: { ...st.na, [k]: st.na[k].includes(v) ? st.na[k].filter(x => x !== v) : st.na[k].concat(v) } }));
    const chipOf = (on, label, go, d) => ({ label, go, d: d || '', tick: on ? '✓' : '', bd: on ? '#2F7A4F' : '#CBD5E1', bg: on ? '#2F7A4F' : '#fff', fg: on ? '#14532D' : '#475569' });
    const w = s.wiz, wSteps = ['Choose type', 'Authenticate', 'Test', 'Map to farms', 'Sync rules'];
    const canNext = w.step !== 3 || w.tested;
    const pwv = s.pw, rules = [['At least 8 characters', pwv.nw.length >= 8], ['One uppercase letter', /[A-Z]/.test(pwv.nw)], ['One number', /\d/.test(pwv.nw)], ['Passwords match', pwv.nw.length > 0 && pwv.nw === pwv.cf]];
    const pwOk = pwv.cur && rules.every(r => r[1]);
    const tkOk = !!(s.nt.subject.trim() && s.nt.topic);
    return { login: this.loginVals(s), signOut: () => this.signOut(),
      adminUrl: !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) ? 'https://ump-admin.netlify.app/' : 'http://localhost:5174/',
      asideDisp: s.full ? 'none' : 'flex', headDisp: s.full ? 'none' : 'flex',
      hasStationActions: (s.page === 'weather' && sub === 'stations') || s.page === 'soil' || s.page === 'livestock',
      fullLabel: s.full ? 'Exit fullscreen' : 'Fullscreen', fullIcon: s.full ? 'M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5' : 'M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5',
      toggleFull: () => { const on = !s.full; this.setState({ full: on, moreOpen: false }); try { if (on && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {}); else if (!on && document.fullscreenElement) document.exitFullscreen(); } catch (e) {} setTimeout(() => { this.hm && this.hm.resize(); this.im && this.im.resize(); }, 250); },
      moreOpen: s.moreOpen, moreRot: s.moreOpen ? 'rotate(180deg)' : 'none', toggleMore: () => this.setState(st => ({ moreOpen: !st.moreOpen })),
      moreTitle: s.page === 'livestock' ? 'LIVESTOCK' : s.page === 'soil' ? (this.curProbe() || {}).name || 'Soil probe' : (this.curStation() || {}).name || 'Weather station',
      moreItems: s.page === 'livestock' ? [
        { label: 'Add pen', sub: 'Set up a new pen for heat load', d: 'M12 5v14M5 12h14', bg: '#E8F6EF', fg: '#12855F', go: () => this.setState({ modal: 'addPen', moreOpen: false }) },
        { label: 'Upload data', sub: 'Pasture readings or weigh data', d: 'M12 16V4M7 9l5-5 5 5M5 20h14', bg: '#ECFEFF', fg: '#0891B2', go: () => this.setState({ page: 'data', dataOpen: null, dataType: 'livestock', dataQ: '', up: { type: 'livestock' }, moreOpen: false }) },
        { label: 'Create alert', sub: 'New heat load (HLI) alert', d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0M18 3v4M16 5h4', bg: '#FEF2F2', fg: '#DC2626', go: () => this.setState({ modal: 'alert', na: { ...this.newAlert(0), device: 'hli', name: 'Heat load (HLI) alert', priority: 'High' }, moreOpen: false }) },
        { label: 'View alerts', sub: 'Heat load alerts for this farm', d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0', bg: '#FFFBEB', fg: '#D97706', go: () => this.setState(st => ({ page: 'alerts', sub: { ...st.sub, alerts: 'active' }, sel: { ...st.sel, 'alerts.type': 3 }, moreOpen: false })) },
      ] : s.page === 'soil' ? [
        { label: 'Create alert', sub: 'New alert with this probe selected', d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0M18 3v4M16 5h4', bg: '#FEF2F2', fg: '#DC2626', go: () => { const cp = this.curProbe(); const idx = devs.findIndex(d => d.id === cp.id); this.setState(st => ({ page: 'alerts', sub: { ...st.sub, alerts: 'active' }, modal: 'alert', na: this.newAlert(idx), moreOpen: false })); } },
        { label: 'View alerts', sub: 'Soil alerts for this farm', d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0', bg: '#FFFBEB', fg: '#D97706', go: () => this.setState(st => ({ page: 'alerts', sub: { ...st.sub, alerts: 'active' }, sel: { ...st.sel, 'alerts.type': 2 }, moreOpen: false })) },
        { label: 'Data', sub: 'Readings from all soil probes as a table', d: 'M3 5h18v14H3zM3 10h18M3 15h18M9 5v14', bg: '#ECFEFF', fg: '#0891B2', go: () => this.setState(st => ({ page: 'data', dataOpen: 'soil', dataSrc: 0, moreOpen: false })) },
      ] : [
        { label: 'Create alert', sub: 'New alert with this station selected', d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0M18 3v4M16 5h4', bg: '#FEF2F2', fg: '#DC2626', go: () => { const cs = this.curStation(); const idx = devs.findIndex(d => d.id === cs.id); this.setState(st => ({ page: 'alerts', sub: { ...st.sub, alerts: 'active' }, modal: 'alert', na: this.newAlert(idx), moreOpen: false })); } },
        { label: 'View alerts', sub: 'Weather alerts for this farm', d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0', bg: '#FFFBEB', fg: '#D97706', go: () => this.setState(st => ({ page: 'alerts', sub: { ...st.sub, alerts: 'active' }, sel: { ...st.sel, 'alerts.type': 1 }, moreOpen: false })) },
        { label: 'Data', sub: 'Readings from all weather stations as a table', d: 'M3 5h18v14H3zM3 10h18M3 15h18M9 5v14', bg: '#ECFEFF', fg: '#0891B2', go: () => { const cs = this.curStation(); const wl = devs.filter(d => d.type === 'weather'); this.setState(st => ({ page: 'data', dataOpen: 'weather', dataSrc: Math.max(0, wl.findIndex(d => d.id === cs.id)), moreOpen: false })); } },
        { label: 'Providers', sub: 'Connected weather providers: Helios, Jane\'s', d: 'M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5', bg: '#F0FDF4', fg: '#15803D', go: () => this.setState({ page: 'providers', provFilter: 'weather', moreOpen: false }) },
      ],
      showHdr: !(s.page === 'devices' && s.devOpen), infoRef: this.infoRef, benchRef: this.benchRef, alertCount: String(ACTIVE.length + s.added.length), devCount: String(devs.length),
      expanded: !s.collapsed, collapsed: s.collapsed, sideW: s.collapsed ? '68px' : '232px', headH: s.collapsed ? '64px' : '96px', umW: s.collapsed ? '40px' : '120px',
      toggleSide: () => this.setState(st => ({ collapsed: !st.collapsed })),
      navItems, farm: f, farmIdx: String(fi), farmOpts: FARMS.map((x, i) => ({ v: String(i), label: x.name })), setFarm: e => this.setState({ farm: +e.target.value, sel: {}, shareSaved: false }),
      farmCount: FARMS.length + ' farms', farmDevCount: devs.length + ' devices',
      menuOpen: s.menuOpen, toggleMenu: () => this.setState(st => ({ menuOpen: !st.menuOpen })),
      goAlerts: () => this.go('alerts', 'active'), goDevices: () => this.go('devices'), goForecast: () => this.go('weather', 'forecast'), goSeason: () => this.go('season', 'dashboard'),
      goProfile: () => this.go('profile', 'account'), goTickets: () => this.go('support'), openTicket: () => this.openTk(),
      isHome: s.page === 'home', notHome: s.page !== 'home', pageT: pg.t, pageS: pg.s || '',
      hasAction: !!acts[s.page] && s.page !== 'providers', pageAction: { bg: '#043C2C', fg: '#fff', bd: 'transparent', ...(acts[s.page] || { label: '', d: '', go: null }) },
      hasTabs: !!pg.tabs, flatTabs: false, segTabs: !!pg.tabs, tabs: (pg.tabs || []).map(([k, label]) => { const on = sub === k; return { label, d: TAB_IC[k] || I.grid, go: () => this.setState(st => ({ sub: { ...st.sub, [st.page]: k }, ...(st.page === 'regional' && k === 'zones' ? { sec: { ...st.sec, 'regional.zones': 'stations' }, zFcDet: null, zSpDet: null } : {}) })), fg: on ? '#043C2C' : '#475569', fw: on ? 600 : 500, bg: on ? '#D8F1E8' : 'transparent', sh: on ? '0 0 0 1px #B5E0D0' : 'none', fbg: on ? '#E0F2F1' : 'transparent', fsh: on ? 'inset 0 -2px 0 #043C2C' : 'none' }; }),
      districts: ZONES.map(([n, c]) => ({ n, c, fw: n === f.zone ? 600 : 400, fg: n === f.zone ? '#fff' : 'rgba(255,255,255,.82)' })),
      rg: { on: s.page === 'settings' && sub === 'users', open: !!s.rgOpen, toggle: () => this.setState(st => ({ rgOpen: !st.rgOpen })), cards: roleGuide(null) },
      inv: (() => { const i = s.inv || {}, nOk = !!(i.name || '').trim(), eOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((i.email || '').trim()), ok = nOk && eOk, t = !!s.invTried, step = s.invStep || 'form', RS = { User: 'Manage farm data and devices', Viewer: 'View only, no changes' };
        const set = k => e => { const v = e.target.value; this.setState(st => ({ inv: { ...st.inv, [k]: v } })); };
        return { guide: roleGuide(i.role), guideOpen: !!s.invGuide, guideL: s.invGuide ? 'Hide role guide' : 'Role guide', toggleGuide: () => this.setState(st => ({ invGuide: !st.invGuide })),
          name: i.name || '', email: i.email || '', role: i.role, farm: f.name, setName: set('name'), setEmail: set('email'), setRole: set('role'),
          nameErr: t && !nOk ? 'Enter the person\u2019s full name.' : '', emailErr: t && !eOk ? 'Enter a valid email address.' : '', nameBd: t && !nOk ? '#FCA5A5' : '#E2E8F0', emailBd: t && !eOk ? '#FCA5A5' : '#E2E8F0', btn: ok ? '#043C2C' : '#94a3b8',
          roles: ['User', 'Viewer'].map(name => { const on = i.role === name; return { name, short: RS[name], bd: on ? '#12855F' : '#E2E8F0', bg: on ? '#F0F7F4' : '#fff', rbd: on ? '#043C2C' : '#CBD5E1', cbg: on ? '#043C2C' : '#fff', tickOp: on ? 1 : 0, on: on ? 'true' : 'false', go: () => this.setState(st => ({ inv: { ...st.inv, role: name } })) }; }),
          form: step === 'form', confirm: step === 'confirm', done: step === 'done', desc: (ROLE_GUIDE.find(r => r[0] === i.role) || ['', ''])[1], article: i.role === 'Owner' ? 'an' : 'a',
          send: () => { if (!ok) return this.setState({ invTried: true }); this.setState({ invStep: 'confirm' }); },
          back: () => this.setState({ invStep: 'form' }),
          confirmSend: () => this.setState(st => ({ invStep: 'done', invites: { ...st.invites, [st.farm]: [{ name: st.inv.name.trim(), email: st.inv.email.trim(), role: st.inv.role }].concat(st.invites[st.farm] || []) } })),
          finish: () => this.setState({ modal: null, invStep: 'form', invTried: false, inv: { name: '', email: '', role: 'User' } }) }; })(),
      rc: s.uRoleChg ? { show: true, name: s.uRoleChg.name, from: s.uRoleChg.from, to: s.uRoleChg.to, farm: f.name, desc: (ROLE_GUIDE.find(r => r[0] === s.uRoleChg.to) || ['', ''])[1],
        cancel: () => this.setState({ uRoleChg: null }), stop: e => e.stopPropagation(),
        confirm: () => this.setState(st => ({ uRoleChg: null, uRoles: { ...(st.uRoles || {}), [st.uRoleChg.email]: st.uRoleChg.to } })) } : { show: false },
      g: s.page === 'home' ? {} : this.gen(),
      hwx: (() => { const k = c => ({ sun: c === 'Sunny', pc: c === 'Partly cloudy', rain: c === 'Showers' }); return { t: '29°', hi: '29°', lo: '14°', cond: 'Partly cloudy', time: '04:00 pm', loc: umLoc(f), ic: k('Partly cloudy'), pres: '1012 hPa', pop: '20% rain', wind: '25 km/h', days: [['Tomorrow', 'Sunny', 29, 14, 20], ['Sun', 'Sunny', 31, 14, 0], ['Mon', 'Sunny', 26, 12, 0], ['Tue', 'Partly cloudy', 25, 9, 0], ['Wed', 'Showers', 27, 11, 40], ['Thu', 'Partly cloudy', 29, 16, 20], ['Fri', 'Sunny', 31, 16, 0]].map(([n, c, hi, lo, p]) => ({ n, ic: k(c), hi: hi + '°', lo: lo + '°', pop: p ? p + '%' : '' })) }; })(),
      goForecast: () => this.setState(st => ({ page: 'weather', sub: { ...st.sub, weather: 'forecast' } })),
      homeRef: this.homeRef, regRef: this.regRef,
      hSubregions: ZONE_LIST.map(z => ({ n: z.s, c: z.c, bc: z.bc })),
      hPop: s.hPop ? (() => { const pf = FARMS[s.hPop.fi], cur = s.hPop.fi === s.farm; return { show: true, name: pf.name, loc: pf.loc, zone: zoneText(pf.zone), role: pf.role, devices: String(devsOf(s.hPop.fi).length), zc: (ZONES.find(z => z[0] === pf.zone) || [0, '#0e8fb0'])[1], left: s.hPop.x + 'px', top: s.hPop.y + 'px', tf: s.hPop.below ? 'translate(-50%, 0)' : 'translate(-50%, -100%)', btn: cur ? 'Current farm' : 'Open farm', launch: () => this.setState({ hPop: null, farm: s.hPop.fi, sel: {}, shareSaved: false }) }; })() : { show: false },
      hPopEnter: () => clearTimeout(this._popT), hPopLeave: () => this.hidePopSoon(),
      hPanelOpen: !!s.hPanel, hPanelClosed: !s.hPanel, hTogglePanel: () => this.setState(st => ({ hPanel: !st.hPanel })),
      hLayers: [
        ['Boundary', s.hBnd !== false, () => this.setBnd(s.hBnd === false), '#fef3c7', '#EAB308', '3px'],
        ['Farm map', s.hFarmL !== false, () => this.setFarmL(s.hFarmL === false), '#fee2e2', '#dc2626', '50% 50% 50% 0'],
        ['Device map', !!s.hDevL, () => this.setDevL(!s.hDevL), '#ccfbf1', '#0f9f95', '50%'],
      ].map(([label, on, toggle, iconBg, dot, shape]) => ({ label, toggle, iconBg, dot, shape, bg: on ? '#12855F' : 'rgba(255,255,255,.28)', knob: on ? '14px' : '2px' })),
      hBasemaps: Object.entries(HB).map(([k, b]) => { const on = (s.hBase || 'satStreets') === k, def = (s.hBmDef || 'satStreets') === k; return { starFg: def ? '#6EE7B7' : 'rgba(255,255,255,.45)', starFill: def ? 'currentColor' : 'none', starTitle: def ? 'Default basemap' : 'Make default', makeDef: e => { e.stopPropagation(); if (def) return; try { localStorage.setItem('ump-producer-bm-default', k); } catch (x) {} this.setState({ hBmDef: k }); }, label: b.label, sw: b.sw, bg: on ? 'rgba(18,133,95,.3)' : 'transparent', fg: on ? '#6EE7B7' : '#fff', fw: on ? 600 : 500, chk: on ? 1 : 0, go: () => this.setBasemap(k) }; }),
      hQuery: s.hQ || '', hSetQuery: e => this.setState({ hQ: e.target.value }), hShowResults: !!(s.hQ || '').trim(),
      hNoResults: !FARMS.some(x => (x.name + ' ' + zoneText(x.zone) + ' ' + x.loc).toLowerCase().includes((s.hQ || '').trim().toLowerCase())),
      hKey: e => { if (e.key === 'Escape') this.setState({ hQ: '' }); if (e.key === 'Enter') { const q = (s.hQ || '').trim().toLowerCase(), i = FARMS.findIndex(x => (x.name + ' ' + zoneText(x.zone) + ' ' + x.loc).toLowerCase().includes(q)); if (q && i >= 0) { this.setState({ hQ: '', farm: i, sel: {}, shareSaved: false }); const m = this.hm; if (m) { m.flyTo({ center: [FARMS[i].lng, FARMS[i].lat], zoom: 11.5, duration: 900 }); m.once('moveend', () => this.showPop(i)); } } } },
      hResults: FARMS.map((x, i) => ({ x, i })).filter(({ x }) => (x.name + ' ' + zoneText(x.zone) + ' ' + x.loc).toLowerCase().includes((s.hQ || '').trim().toLowerCase())).slice(0, 6).map(({ x, i }) => ({ name: x.name, zone: zoneText(x.zone), fly: () => { this.setState({ hQ: '', farm: i, sel: {}, shareSaved: false }); const m = this.hm; if (!m) return; m.flyTo({ center: [x.lng, x.lat], zoom: 11.5, duration: 900 }); m.once('moveend', () => this.showPop(i)); } })),
      faqs: FAQS, faqList: (() => { const q = (s.faqQ || '').trim().toLowerCase(); return FAQS.filter(x => !q || (x.q + ' ' + x.a).toLowerCase().includes(q)).map(x => { const on = s.faqI === x.q; return { q: x.q, a: x.a, open: on, rot: on ? 'rotate(90deg)' : 'none', bg: on ? '#F8FAFC' : 'transparent', toggle: () => this.setState({ faqI: on ? null : x.q }) }; }); })(), faqNone: !FAQS.some(x => !(s.faqQ || '').trim() || (x.q + ' ' + x.a).toLowerCase().includes((s.faqQ || '').trim().toLowerCase())),
      lp: s.locOpen ? { pill: s.locAddr || (s.locLL[1].toFixed(6) + ', ' + s.locLL[0].toFixed(6)), closeL: s.locView ? 'Close' : 'Cancel', show: true, view: !!s.locView, edit: !s.locView, title: s.locView ? (s.locTitle || 'Device location') : 'Select Location', sub: s.locView ? 'Where this device is installed.' : 'Click on the map to choose the location. You can adjust it later if needed.', lat: s.locLL[1].toFixed(6), lng: s.locLL[0].toFixed(6), close: () => this.setState({ locOpen: false }), confirm: () => this.setState(st => ({ locOpen: false, devCoords: { ...(st.devCoords || {}), [st.devEdit.id]: [st.locLL[0], st.locLL[1]] } })) } : { show: false }, locMapRef: this.locMapRef, locSearch: this.locSearch, locInput: this.locInput, locClear: this.locClear, locQ: s.locQ || '', locQOn: !!(s.locQ),  locSugOn: (s.locSugL || []).length > 0, locSug: this.locSugVals(s), dm: this.dmVals(s, devs, f),
  wg: this.wgVals(s),
  nightCls: s.night ? 'nm ns' : 'ns', nightF: s.night ? 'invert(.92) hue-rotate(180deg)' : 'none', nightTip: s.night ? 'Light mode' : 'Night mode', toggleNight: () => { const v = !this.state.night; try { localStorage.setItem('ump_night', v ? '1' : '0'); } catch (e) {} this.setState({ night: v }); }, openFaq: () => this.setState({ faqOpen: true }), toggleFaq: () => this.setState(st => ({ faqOpen: !st.faqOpen })), faqOpen: !!s.faqOpen, faqQ: s.faqQ || '', setFaqQ: e => this.setState({ faqQ: e.target.value }),
      alertW: ACTIVE.map(a => ({ t: a[0], dev: a[2], time: a[3], sev: a[5], sbg: a[5] === 'High' ? '#FEF2F2' : '#FFFBEB', sfg: a[5] === 'High' ? '#B91C1C' : '#B45309' })),
      wid: s.wid, custOpen: s.custOpen, toggleCust: () => this.setState(st => ({ custOpen: !st.custOpen })),
      widgetOpts: [['devices', 'Devices', 'Latest readings from a weather station or soil probe on this farm.', 'M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8', '#ECFEFF', '#043C2C'], ['forecast', 'Forecast', 'Current conditions and the 7-day forecast for this farm.', 'M7 15.5h10.5a3.8 3.8 0 0 0 .4-7.6 5.6 5.6 0 0 0-10.8 1.3A3.2 3.2 0 0 0 7 15.5z', '#EFF6FF', '#2563EB'], ['season', 'Seasonal Rainfall', 'Season rainfall to date against the long-term average.', 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z', '#F0FDF4', '#15803D'], ['alerts', 'Active alerts', 'Alerts currently firing on this farm, newest first.', 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0', '#FFF7ED', '#C2410C']].map(([k, label, desc, d, ibg, ifg]) => { const on = !!s.wid[k]; return { label, desc, d, ibg, ifg, action: on ? 'Added' : 'Add', pbg: on ? '#CCFBF1' : '#F1F5F9', pfg: on ? '#0F766E' : '#475569', rbg: on ? '#F0FDFA' : '#fff', ring: on ? 'rgba(14,165,164,.45)' : '#E2E8F0', ringW: on ? '1.5px' : '1px', tick: on ? '✓' : '', bd: on ? '#043C2C' : '#cbd5e1', bg: on ? '#043C2C' : '#fff', cbd: on ? '#86EFAC' : '#E2E8F0', cbg: on ? '#F0FDF4' : '#fff', toggle: () => this.setState(st => ({ wid: { ...st.wid, [k]: !st.wid[k] } })) }; }),
      today: { hi: '24°', lo: '9°', cond: 'Partly cloudy', rain: '0 mm' },
      next4: FC_DAYS.slice(1, 5).map(d => ({ d: d[0], hi: d[3] + '°', p: d[6] + '%' })),
      homeAlerts: ACTIVE.filter(a => a[1] === 'Soil').slice(0, 1).map(a => ({ name: 'Soil moisture alert', meta: a[2] + ' · ' + a[4] + ' at 30 cm · ' + a[3], dot: '#d97706' })),
      devRows: devs.map(d => { const [sbg, sfg] = pill(d.status); return { ...d, name: d.id + ' ' + d.name, sbg, sfg, go: () => this.openDevice(d) }; }),
      seasonSum: { v: '512 mm', d: '+8% vs average', w: '86%', avg: '474 mm' },
      dw: this.devW(s, devs, fi), de: this.deVals(s, devs),
      apf: this.apfVals(), refM: this.refModalVals(),
      modal: { ticket: s.modal === 'ticket', devEdit: s.modal === 'devEdit' && !!s.devEdit, alert: s.modal === 'alert', wizard: s.modal === 'wizard', config: s.modal === 'config', faq: s.modal === 'faq', pmanage: s.modal === 'pmanage' && !!s.pm, pconnect: s.modal === 'pconnect' && !!s.pm, pintro: s.modal === 'pintro' && !!s.pm, confirm: s.modal === 'confirm', invite: s.modal === 'invite', addPen: s.modal === 'addPen' },
      hliInfo: s.page === 'livestock' && this.subOf('livestock') === 'heat' ? () => this.setState(st => ({ hliTick: (st.hliTick || 0) + 1 })) : null, closeModal: () => this.setState({ modal: null }), pm: this.pmVals(s), stop: e => e.stopPropagation(),
      confirmName: s.confirm || '', doDisconnect: () => this.setState(st => ({ modal: null, provs: st.provs.filter(x => x.name !== st.confirm) })),
      na: s.na ? {
        name: na.name, setName: e => updNa({ name: e.target.value }), device: na.device,
        ...(window.UMPAlert ? window.UMPAlert.vals(na, devs.map((d, i) => ({ v: String(i), label: d.name, type: d.type === 'weather' ? 'weather' : 'soil' })).concat([{ v: 'hli', label: 'Pen 1 \u00b7 Heat load index (HLI)', type: 'hli' }]), updNa) : {}),
        enBg: na.enabled ? '#6FA884' : '#cbd5e1', enKnob: na.enabled ? '18px' : '2px', toggleEnabled: () => updNa({ enabled: !na.enabled }),
        roles: ['Owner', 'Admin', 'User', 'Viewer'].map(r => chipOf(tick(na.roles, r), r, () => togNa('roles', r))),
        via: [['Email', 'M3 6h18v12H3zM3 7l9 6 9-6'], ['SMS', 'M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z'], ['Mobile Notification', 'M7 3h10v18H7zM11 18h2']].map(([r, d]) => chipOf(tick(na.via, r), r, () => togNa('via', r), d)),
        extra: na.extra, setExtra: e => updNa({ extra: e.target.value }), freq: na.freq, setFreq: e => updNa({ freq: e.target.value }), priority: na.priority, setPriority: e => updNa({ priority: e.target.value }),
        btn: na.name.trim() && na.device !== '' ? '#2F7A4F' : '#94a3b8',
        title: na.editId ? 'Edit Device Alert' : 'Create Device Alert', btnL: na.editId ? 'Save changes' : 'Submit',
        submit: () => { if (!na.name.trim() || na.device === '') return; const pv = { name: na.name, dev: na.device, conds: (na.conds || []).filter(c => c.op || c.val), via: na.via.length ? na.via : ['Email'], freq: na.freq, priority: na.priority, enabled: na.enabled, roles: na.roles, msg: window.UMPAlert ? window.UMPAlert.vals(na, devs.map((d, i) => ({ v: String(i), label: d.name, type: d.type === 'weather' ? 'weather' : 'soil' })), () => {}).msg : na.msg, extra: na.extra };
          if (na.editId) { this.setState(st => ({ modal: null, polOv: { ...(st.polOv || {}), [na.editId]: pv } })); return; }
          const d = na.device === 'hli' ? { id: 'Pen 1', name: 'Heat load index' } : devs[+na.device]; this.setState(st => ({ modal: null, added: [{ name: na.name, device: d.id + ' ' + d.name, priority: na.priority, via: pv.via, pol: { id: 'n' + Date.now(), fired: 0, last: '', ...pv } }].concat(st.added), sub: { ...st.sub, alerts: 'active' } })); },
      } : {},
      wz: {
        steps: wSteps.map((label, i) => ({ label, bar: i + 1 <= w.step ? '#0EA5A4' : '#E2E8F0', fg: i + 1 === w.step ? '#14532D' : '#94a3b8' })),
        s1: w.step === 1, s2: w.step === 2, s3: w.step === 3, s4: w.step === 4, s5: w.step === 5, prov: w.prov, tested: w.tested,
        provs: PROVS.map(pv => { const on = w.prov === pv.name; return { name: pv.name, kind: pv.kind, bd: on ? '#0EA5A4' : '#E2E8F0', bg: on ? '#ECFEFF' : '#fff', go: () => this.setState(st => ({ wiz: { ...st.wiz, prov: pv.name } })) }; }),
        key: w.key, setKey: e => { const v = e.target.value; this.setState(st => ({ wiz: { ...st.wiz, key: v } })); }, oauth: () => this.setState(st => ({ wiz: { ...st.wiz, step: 3 } })),
        test: () => this.setState(st => ({ wiz: { ...st.wiz, tested: true } })),
        found: [w.prov + ' device 01', w.prov + ' device 02'],
        freqs: ['Every 15 minutes', 'Hourly', 'Daily'].map(l => { const on = w.freq === l; return { label: l, bd: on ? '#0EA5A4' : '#E2E8F0', bg: on ? '#ECFEFF' : '#fff', dot: on ? '#0EA5A4' : 'transparent', go: () => this.setState(st => ({ wiz: { ...st.wiz, freq: l } })) }; }),
        backOp: w.step === 1 ? .4 : 1, back: () => w.step > 1 && this.setState(st => ({ wiz: { ...st.wiz, step: st.wiz.step - 1 } })),
        nextLabel: w.step === 5 ? 'Finish' : 'Next', nextBg: canNext ? '#043C2C' : '#94a3b8',
        next: () => { if (!canNext) return; if (w.step === 5) return this.setState(st => ({ modal: null, provs: st.provs.some(x => x.name === w.prov) ? st.provs.map(x => x.name === w.prov ? { ...x, status: 'Connected', note: '', sync: 'Just now', freq: w.freq } : x) : st.provs.concat({ ...PROVS.find(x => x.name === w.prov), status: 'Connected', note: '', sync: 'Just now', freq: w.freq }) })); this.setState(st => ({ wiz: { ...st.wiz, step: st.wiz.step + 1 } })); },
      },
      cfg: { pens: s.pens.map((label, i) => ({ label, go: () => this.setState({ pen: i }), bg: s.pen === i ? '#ECFEFF' : 'transparent', fg: s.pen === i ? '#14532D' : '#334155', fw: s.pen === i ? 600 : 400 })), add: () => this.setState(st => ({ pens: st.pens.concat('Pen ' + (st.pens.length + 1)), pen: st.pens.length })), name: s.pens[s.pen] || '', animals: ['120', '80', '64'][s.pen] || '0' },
      nt: { subject: s.nt.subject, topic: s.nt.topic, farm: f.name, topics: ['Weather', 'Soil', 'Livestock', 'Devices', 'Alerts', 'Data uploads', 'Regional', 'Users', 'Other'],
        set: Object.fromEntries(['subject', 'topic'].map(k => [k, e => { const v = e.target.value; this.setState(st => ({ nt: { ...st.nt, [k]: v } })); }])),
        ref: this.ntDescRef || (this.ntDescRef = React.createRef()),
        cmd: Object.fromEntries(['bold', 'italic', 'underline', 'strikeThrough', 'insertUnorderedList', 'insertOrderedList', 'undo', 'redo'].map(c => [c, e => { e.preventDefault(); if (this.ntDescRef.current) this.ntDescRef.current.focus(); document.execCommand(c); }])),
        addFiles: e => { const fs2 = Array.from(e.target.files || []).map(x => x.name); e.target.value = ''; this.setState(st => ({ nt: { ...st.nt, files: [...(st.nt.files || []), ...fs2] } })); },
        files: (s.nt.files || []).map((name, i) => ({ name, remove: () => this.setState(st => ({ nt: { ...st.nt, files: st.nt.files.filter((_, j) => j !== i) } })) })),
        bg: tkOk ? '#043C2C' : '#94a3b8', cur: tkOk ? 'pointer' : 'not-allowed', form: !s.ntDone, done: !!s.ntDone, doneId: s.ntDone || '',
        submit: () => { if (!tkOk) return; const n = s.nt, el = this.ntDescRef.current, desc = (el && el.innerText.trim()) || n.subject, id = 'UMP-' + (1043 + s.tickets.length - 4);
          this.setState(st => ({ ntDone: id, tickets: [{ id, title: n.subject.trim(), topic: n.topic, status: 'Open', created: 'Today', upd: 'Just now', by: 'Emma Barnes', farm: f.name, desc, files: n.files || [] }].concat(st.tickets) })); },
        finish: () => this.setState(st => ({ modal: null, ntDone: null, nt: { subject: '', topic: '', files: [] }, page: 'support', menuOpen: false })) },
      tkView: (() => { const t = s.tkSel && s.tickets.find(x => x.id === s.tkSel); if (!t) return { show: false }; const SC = { Open: ['#EEF2FF', '#1E3A8A'], 'In progress': ['#FFF7ED', '#C2410C'], 'Awaiting reply': ['#FEF6DB', '#92400E'], Resolved: ['#ECFDF5', '#15803D'] }[t.status] || ['#EEF2FF', '#1E3A8A'];
        return { show: true, ...t, sbg: SC[0], sfg: SC[1], hasFiles: !!(t.files && t.files.length), fileList: t.files || [], close: () => this.setState({ tkSel: null }), stop: e => e.stopPropagation() }; })(),
      pw: {
        cur: pwv.cur, nw: pwv.nw, cf: pwv.cf, done: pwv.done,
        setCur: e => { const v = e.target.value; this.setState(st => ({ pw: { ...st.pw, cur: v, done: false } })); }, setNw: e => { const v = e.target.value; this.setState(st => ({ pw: { ...st.pw, nw: v, done: false } })); }, setCf: e => { const v = e.target.value; this.setState(st => ({ pw: { ...st.pw, cf: v, done: false } })); },
        rules: rules.map(([label, ok]) => ({ label, mark: ok ? '✓' : '•', fg: ok ? '#15803d' : '#64748b' })), btn: pwOk ? '#043C2C' : '#94a3b8',
        submit: () => pwOk && this.setState({ pw: { cur: '', nw: '', cf: '', done: true } }),
      },
    };
  }
}

class ProducerPortal extends Component {
  render() {
    const V = { ...this.props, ...(this.renderVals() || {}) };
    return <View V={V} />;
  }
}

export default ProducerPortal;
