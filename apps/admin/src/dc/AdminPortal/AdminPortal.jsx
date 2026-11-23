import React from 'react';
import { ZONE_LIST, zoneByName } from '../shared/zones.js';
import { DEMO_ACCOUNTS, findAccount } from '../shared/accounts.js';
import View from './View.jsx';

const FARMS = [
  { name: 'Greg Farm', owner: 'Tom Whitfield', abn: '51 824 753 556', zone: 'Greg Greg', users: 4, devices: 6, location: '420 Greg Greg Rd, Greg Greg NSW', status: 'Live', lng: 148.0602, lat: -36.0689 },
  { name: 'Ed Farm', owner: 'Sarah McKenzie', abn: '33 102 417 890', zone: 'Burrowye', users: 3, devices: 4, location: '1180 Burrowye Rd, Burrowye VIC', status: 'Live', lng: 147.5327, lat: -36.0395 },
  { name: 'Agritech Farm', owner: 'James Hollis', abn: '82 615 004 731', zone: 'Koetong', users: 2, devices: 3, location: '86 Koetong Rd, Koetong VIC', status: 'Live', lng: 147.4877, lat: -36.1225 },
  { name: 'Riverbend Farm', owner: 'Emma Barnes', abn: '19 447 228 065', zone: 'Colac Colac', users: 5, devices: 7, location: '2310 Colac Colac Rd, Colac Colac VIC', status: 'Live', lng: 147.8602, lat: -36.2346 },
  { name: 'Willow Creek Farm', owner: 'Liam O\u2019Connor', abn: '64 309 871 442', zone: 'Khancoban', users: 1, devices: 2, location: '640 Khancoban Rd, Khancoban NSW', status: 'Onboarding', lng: 148.1435, lat: -36.2602 },
  { name: 'Hillview Farm', owner: 'Grace Lindqvist', abn: '27 558 190 314', zone: 'Nariel Valley', users: 2, devices: 3, location: '1575 Nariel Rd, Nariel Valley VIC', status: 'Live', lng: 147.7856, lat: -36.3572 },
  { name: 'Cedar Ridge Farm', owner: 'Hamish Doyle', abn: '45 270 663 118', zone: 'Shelley', users: 2, devices: 4, location: '305 Shelley Rd, Shelley VIC', status: 'Live', lng: 147.5291, lat: -36.2038 },
  { name: 'Bluegum Farm', owner: 'Priya Nair', abn: '71 903 512 846', zone: 'Pine Mountain', users: 2, devices: 3, location: '980 Pine Mountain Rd, Pine Mountain VIC', status: 'Live', lng: 147.8233, lat: -36.0074 },
  { name: 'Stonybrook Farm', owner: 'Ben Kowalski', abn: '38 615 274 909', zone: 'Tooma', users: 1, devices: 2, location: '1760 Tooma Rd, Tooma NSW', status: 'Onboarding', lng: 148.0147, lat: -35.9338 },
  { name: 'Kookaburra Farm', owner: 'Kate Morrison', abn: '92 148 337 605', zone: 'Tom Groggin', users: 2, devices: 4, location: '215 Tom Groggin Rd, Tom Groggin VIC', status: 'Live', lng: 148.0988, lat: -36.6451 },
];
const PROVIDERS = [
  { name: 'AxisTech', kind: 'Weather stations & soil probes', status: 'Connected', sync: '2 min ago', freq: '15 min', farms: 10 },
  { name: 'Metos', kind: 'Weather stations & soil probes', status: 'Connected', sync: '6 min ago', freq: '15 min', farms: 6 },
  { name: 'Helios', kind: 'Weather forecast', status: 'Connected', sync: '4 min ago', freq: 'Hourly', farms: 6 },
  { name: 'Janes', kind: 'Weather forecast', status: 'Error', sync: '3 h ago', freq: 'Hourly', farms: 4, note: 'Last forecast sync failed' },
  { name: 'Optiweigh', kind: 'Walk-over weighing', status: 'Connected', sync: '22 min ago', freq: 'Hourly', farms: 3 },
  { name: 'Gallagher', kind: 'Livestock weights', status: 'Credentials expired', sync: '2 days ago', freq: 'Daily', farms: 2, note: 'Re-authenticate to resume syncing' },
];
FARMS.forEach((f, i) => {
  f.phone = '02 60' + (71 + i) + ' ' + (4210 + i * 137);
  f.email = f.owner.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '') + '@' + f.name.toLowerCase().replace(/[^a-z]/g, '') + '.com.au';
  f.desc = f.name + ', onboarded for the UMP+ pilot.';
});
const POOL = ['Dan Pearce', 'Mia Chen', 'Ruby Ellis', 'Josh Tran', 'Olivia Grant', 'Noah Fraser', 'Chloe Bennett', 'Sam Patel', 'Ella Ward', 'Jack Riley', 'Zoe Hart', 'Max Turner', 'Lucy Hayes', 'Ethan Brooks'];
const LAST = ['2 h ago', 'Today', 'Yesterday', '3 days ago', '1 week ago'];
const DPN = ["Greg Farm","Ed Farm","Agritech Farm","Riverbend Farm","Willow Creek Farm","Hillview Farm","Cedar Ridge Farm","Bluegum Farm","Stonybrook Farm","Kookaburra Farm"], DPOS = [[[148.072,-36.0645],[148.0484,-36.0645],[148.0657,-36.0594],[148.0547,-36.0594]],[[147.5508,-36.0327],[147.5146,-36.0327],[147.5412,-36.0249],[147.5242,-36.0249]],[[147.5049,-36.116],[147.4705,-36.116],[147.4957,-36.1086],[147.4797,-36.1086]],[[147.869,-36.2313],[147.8514,-36.2313],[147.8643,-36.2275],[147.8561,-36.2275]],[[148.1682,-36.2509],[148.1188,-36.2509],[148.155,-36.2403],[148.132,-36.2403]],[[147.8103,-36.3479],[147.7609,-36.3479],[147.7971,-36.3373],[147.7741,-36.3373]],[[147.5444,-36.1981],[147.5138,-36.1981],[147.5362,-36.1915],[147.522,-36.1915]],[[147.836,-36.0026],[147.8106,-36.0026],[147.8292,-35.9971],[147.8174,-35.9971]],[[148.0373,-35.9253],[147.9921,-35.9253],[148.0252,-35.9156],[148.0042,-35.9156]],[[148.1235,-36.6358],[148.0741,-36.6358],[148.1103,-36.6252],[148.0873,-36.6252]]];
const USERS = []; let pi = 0;
FARMS.forEach((f, i) => {
  const onb = f.status === 'Onboarding';
  USERS.push([f.owner, f.email, 'Owner', f.name, onb ? '\u2014' : LAST[i % 5], onb ? 'Invited' : 'Active']);
  ['User', 'Viewer', 'User', 'Viewer'].slice(0, f.users - 1).forEach((role, j) => { const n = POOL[pi++ % POOL.length]; USERS.push([n, n.split(' ')[0].toLowerCase() + '.' + n.split(' ')[1].toLowerCase() + '@gmail.com', role, f.name, LAST[(i + j + 1) % 5], (i + j) % 7 === 6 ? 'Inactive' : 'Active']); });
});
const DTYPES = [['Weather Station', 'Weather station', 'Metos'], ['Soil Probe A', 'Soil probe', 'AxisTech'], ['Soil Probe B', 'Soil probe', 'AxisTech'], ['Rain Gauge', 'Weather station', 'Metos'], ['Soil Probe C', 'Soil probe', 'AxisTech'], ['Weather Station 2', 'Weather station', 'AxisTech'], ['Soil Probe D', 'Soil probe', 'Metos']];
const DEVICES = [];
FARMS.forEach((f, i) => DTYPES.slice(0, f.devices).forEach(([label, type, provider], j) => {
  const status = f.status === 'Onboarding' || (i + j) % 6 === 5 ? 'Offline' : 'Online';
  DEVICES.push([f.name.replace(' Farm', '') + ' ' + label, type, provider, f.name, status === 'Online' ? (3 + (i * 3 + j) % 20) + ' min ago' : status === 'Offline' ? '3 h ago' : '\u2014', status, (f.lat + j * 0.004).toFixed(3) + ', ' + (f.lng + j * 0.004).toFixed(3)]);
}));
const UM_RING = [[147.0315,-36.1189],[147.0472,-36.1619],[147.0645,-36.1736],[147.0668,-36.1897],[147.0956,-36.2196],[147.0973,-36.2324],[147.1224,-36.255],[147.1455,-36.2627],[147.1953,-36.3353],[147.1917,-36.3448],[147.1643,-36.3639],[147.1614,-36.3802],[147.1671,-36.3948],[147.1522,-36.4393],[147.1432,-36.4485],[147.1254,-36.4503],[147.1042,-36.4795],[147.1276,-36.534],[147.1261,-36.5515],[147.1637,-36.5711],[147.1748,-36.6057],[147.1677,-36.6303],[147.1741,-36.6394],[147.1989,-36.6506],[147.2082,-36.6657],[147.2299,-36.6772],[147.2647,-36.6741],[147.3087,-36.6918],[147.3129,-36.7221],[147.306,-36.7323],[147.3263,-36.7388],[147.3704,-36.738],[147.435,-36.7997],[147.4731,-36.8124],[147.4672,-36.7989],[147.4717,-36.788],[147.5289,-36.7707],[147.5318,-36.7546],[147.5478,-36.7361],[147.9565,-36.6145],[148.1345,-36.7436],[148.1573,-36.7161],[148.171,-36.7115],[148.199,-36.6723],[148.2204,-36.6258],[148.2137,-36.6083],[148.2173,-36.5982],[148.1899,-36.5767],[148.174,-36.5764],[148.1507,-36.5583],[148.1314,-36.5519],[148.1298,-36.5418],[148.1392,-36.5257],[148.1233,-36.4957],[148.1237,-36.463],[148.0928,-36.4523],[148.0802,-36.4222],[148.0586,-36.4112],[148.0429,-36.3768],[148.0481,-36.3474],[148.0663,-36.3361],[148.1632,-36.3485],[148.162,-36.3371],[148.1753,-36.3168],[148.1936,-36.3102],[148.2352,-36.2743],[148.2579,-36.2184],[148.2537,-36.2085],[148.2577,-36.1986],[148.2054,-36.2021],[148.1947,-36.2129],[148.1782,-36.2127],[148.1668,-36.1986],[148.1692,-36.1769],[148.1802,-36.1624],[148.1542,-36.1595],[148.0962,-36.1632],[148.0636,-36.178],[148.0543,-36.1902],[148.0343,-36.1914],[148.0258,-36.1775],[148.0377,-36.1413],[148.0148,-36.1383],[147.9998,-36.1241],[147.9917,-36.0716],[148.0049,-36.0594],[148.0519,-36.0442],[148.0672,-36.0266],[148.1029,-36.0122],[148.1148,-36.0001],[148.1515,-36.0027],[148.1994,-35.983],[148.2412,-35.9784],[148.2794,-35.9659],[148.2895,-35.9456],[148.3096,-35.9297],[148.3363,-35.9234],[148.3343,-35.901],[148.3138,-35.8959],[148.3033,-35.879],[148.2491,-35.8689],[148.243,-35.8334],[148.22,-35.8351],[148.1992,-35.8272],[148.1889,-35.8388],[148.1482,-35.853],[148.1328,-35.8511],[148.1033,-35.8661],[148.0755,-35.8622],[148.0607,-35.8702],[148.0203,-35.8634],[148.009,-35.841],[148.0125,-35.8311],[148.0399,-35.8125],[148.0711,-35.8147],[148.1107,-35.7712],[148.1115,-35.7505],[148.1368,-35.7244],[148.1304,-35.7123],[148.1451,-35.6679],[148.1417,-35.6551],[148.1481,-35.6471],[148.1328,-35.6014],[148.0891,-35.592],[148.0654,-35.639],[148.0753,-35.6528],[148.0638,-35.6748],[148.0319,-35.6787],[148.0183,-35.6886],[147.9929,-35.6858],[147.919,-35.6633],[147.8553,-35.5599],[147.8329,-35.5524],[147.8271,-35.5752],[147.8171,-35.586],[147.7783,-35.587],[147.7956,-35.6102],[147.7937,-35.6257],[147.8094,-35.6366],[147.801,-35.6851],[147.8194,-35.7473],[147.8494,-35.7444],[147.8583,-35.7148],[147.8701,-35.7071],[147.9201,-35.7074],[147.9393,-35.7017],[147.9572,-35.7241],[147.953,-35.7417],[147.9389,-35.7551],[147.9183,-35.769],[147.8979,-35.773],[147.8904,-35.8082],[147.9024,-35.8592],[147.8924,-35.8908],[147.8616,-35.9034],[147.7984,-35.8908],[147.7861,-35.8773],[147.7313,-35.8829],[147.7238,-35.8743],[147.7269,-35.8621],[147.7637,-35.8364],[147.7623,-35.8301],[147.715,-35.8205],[147.6975,-35.7973],[147.6996,-35.7802],[147.6883,-35.7752],[147.6847,-35.7645],[147.63,-35.769],[147.5956,-35.7482],[147.5876,-35.782],[147.6025,-35.7916],[147.607,-35.814],[147.5922,-35.8527],[147.5687,-35.865],[147.5473,-35.8641],[147.5418,-35.875],[147.5316,-35.8788],[147.5288,-35.8947],[147.5765,-35.9008],[147.5907,-35.9106],[147.5991,-35.9564],[147.5934,-35.9658],[147.5346,-35.9684],[147.5078,-35.9571],[147.4945,-35.9439],[147.4781,-35.9419],[147.4375,-35.9543],[147.4036,-35.944],[147.3908,-35.9487],[147.3856,-35.9624],[147.3555,-35.9897],[147.3462,-36.0163],[147.3476,-36.0348],[147.3213,-36.0543],[147.2854,-36.0398],[147.2426,-36.0384],[147.2084,-36.0497],[147.1656,-36.0312],[147.1479,-36.0322],[147.129,-36.0205],[147.1227,-35.995],[147.099,-36.0104],[147.094,-36.0424],[147.062,-36.0665],[147.0609,-36.0851],[147.0315,-36.1189]];
const MODULES = ['Producer Portal', 'Livestock', 'Alerts', 'Providers', 'Data', 'Data Sharing'];
const ROLE_DEF = { Owner: [1,1,1,1], User: [1,1,1,0], Viewer: [1,0,0,0] };
const ROLE_EXTRA = { Owner: [1,1], User: [0,1], Viewer: [0,0] };
const ROLE_COUNT = { Owner: 0, User: 0, Viewer: 0 };
const OWNER_FARM = 'Greg Farm';
const VIEWS = { ump: ['UMP Admin', '#5eead4', 'rgba(45,212,191,.14)'], owner: ['Owner', '#fcd34d', 'rgba(245,158,11,.16)'], staff: ['Staff Admin', '#c4b5fd', 'rgba(139,92,246,.18)'] };
const ROLE_INFO = [['UMP Admin', 'All farms, all rights', 'Manages all farms, users, devices, providers, and platform settings across the region.', '#0f766e', '#f0fdfa'], ['Owner', 'Their farm, all rights', 'Full control of their farm, including users, devices, settings, and data sharing.', '#b45309', '#fffbeb'], ['User', 'Their farm, add and edit', 'Can manage farm data, devices, alerts, and reports. Cannot manage users or ownership settings.', '#1d4ed8', '#eff6ff'], ['Viewer', 'Their farm, view only', 'Can view farm data and reports but cannot make any changes.', '#475569', '#f1f5f9']];
USERS.forEach(u => { ROLE_COUNT[u[2]]++; });
const DATASETS = ['Weather station', 'Soil probe', 'Livestock', 'Rainfall'];
const ONLINE = !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
const PORTAL_URL = { producer: ONLINE ? 'https://ump-producer.netlify.app/' : 'http://localhost:5173/', admin: ONLINE ? 'https://ump-admin.netlify.app/' : 'http://localhost:5174/', internal: ONLINE ? 'https://ump.staff-axisstream.co/' : 'http://localhost:5175/' };
const PP = PORTAL_URL.producer;
const provOf = (d, i) => d[1] === 'Weather station' ? ['AxisTech', 'Metos', 'AxisTech'][i % 3] : ['AxisTech', 'AxisTech', 'Metos'][i % 3];
const PLOGO = { AxisTech: 'assets/axistech-mark.png', Metos: 'assets/metos-logo.png' };
const PLOGO_FULL = { AxisTech: 'assets/axistech-logo-full.png', Metos: 'assets/metos-logo-full.png' };
const CIMG = { Weather: 'assets/icon-weather.png', 'Soil probe': 'assets/icon-soil.png' };
const ROLE_ST = { 'UMP Admin': ['#ecfeff', '#0891B2', 'M12 2.5 4 5.5v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10v-6zM12 8l1.2 2.5 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4z'], Owner: ['#fffbeb', '#D97706', 'M12 2.5 4 5.5v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10v-6zM8.5 9.5l1.8 1.6L12 8.5l1.7 2.6 1.8-1.6-.8 4.5H9.3z'], User: ['#eef2ff', '#1E3A8A', 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0'], Viewer: ['#ecfdf5', '#15803D', 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'] };
const ROLE_CARDS = [['UMP Admin', 'All farms in the Upper Murray', 'Manages all farms, users, devices, providers, and platform settings across the region.', [1, 1, 1, 1, 1]], ['Owner', 'Their own farm', 'Full control of their farm, including users, devices, settings, and data sharing.', [1, 1, 1, 1, 1]], ['User', 'Farms they are invited to', 'Can manage farm data, devices, alerts, and reports. Cannot manage users or ownership settings.', [1, 1, 1, 0, 0]], ['Viewer', 'Farms they are invited to', 'Can view farm data and reports but cannot make any changes.', [1, 0, 0, 0, 0]]];
const TK_CAT = { 'TK-008': 'Device', 'TK-009': 'Provider', 'TK-010': 'Provider', 'TK-011': 'Producer Portal', 'TK-012': 'Alerts', 'TK-002': 'Device', 'TK-003': 'Data sharing', 'TK-004': 'Data', 'TK-006': 'Device', 'TK-013': 'Device', 'TK-014': 'Data' };
const TK_DESC = { 'TK-012': 'We have heat load alerts set up but no alert emails have arrived since last week. Nothing in the spam folder either.', 'TK-013': 'Our soil probe stopped sending readings yesterday afternoon. The last value on the dashboard is from 2:40 pm.', 'TK-011': 'The rainfall bar graph on the weather dashboard still shows last week, even though the station has recorded rain since.', 'TK-004': 'Every time I try to upload our CSV file on the portal it fails without an error message.', 'TK-003': 'We turned on data sharing for our farm but our regional data is still missing on the map.', 'TK-010': 'The API key for our provider connection is being rejected, so no data is coming into the farm.' };
const TK_STOV = { 'TK-004': 'Waiting' };
const BOARD = [['Open', '#1E3A8A', '#EEF2FF'], ['In progress', '#D97706', '#FFF7ED'], ['Waiting', '#475569', '#F1F5F9'], ['Resolved', '#15803D', '#ECFDF5'], ['On hold', '#94A3B8', '#F8FAFC']];
const TOPICS = ['Producer Portal', 'Device', 'Provider', 'Data', 'Alerts', 'Livestock', 'Regional map', 'Users', 'Data sharing', 'Other'];
const ASSIGNEES = ['Sarah Lee (UMP Admin)', 'Mark Chen (UMP Admin)', 'Aisha Patel (UMP Admin)', 'Tom Walsh (UMP Admin)', 'Emily Brooks (UMP Admin)', 'John (UMP Admin)'];
const TK_THREAD = { 'TK-008': [['Emma Barnes', 'Owner · Riverbend Farm', '03 Nov, 9:12 am', 'Hi, can I change the reading interval on SP-01 from 15 minutes to 5 minutes while we are irrigating?'], ['John', 'UMP Admin', '03 Nov, 2:40 pm', 'Hi Emma, the interval is set at the device. I have asked AxisTech to confirm SP-01 supports 5-minute logging and will update you here.']] };
const FLEET = DEVICES.map((d, i) => ({ d, i })).filter(x => x.d[1] === 'Weather station' || x.d[1] === 'Soil probe').map(({ d, i }) => ({ name: d[0], type: d[1] === 'Weather station' ? 'Weather' : 'Soil probe', provider: provOf(d, i), farm: d[3], last: d[4], status: d[5], serial: 'AXTCL_' + (0x4E6F10 + i * 7919).toString(16).toUpperCase() }));
const AA_LOG = [
  ['Heat load high', 'HLI above 86 for 30 minutes. Move stock to shade.', 'Critical', 'Delivered', 'Riverbend Weather Station', 'Riverbend Farm', '05/11/2026, 2:39 pm', '05/11/2026, 2:39 pm', 0, 1, 'Metos'],
  ['Soil moisture low', 'Moisture at 30 cm dropped below 18%.', 'High', 'Delivered', 'Soil Probe A', 'Greg Farm', '05/11/2026, 2:23 pm', '05/11/2026, 2:21 pm', 0, 2, 'AxisTech'],
  ['Weather station offline', 'Station has not reported for 3 hours.', 'High', 'Pending', 'Greg Weather Station', 'Greg Farm', '05/11/2026, 11:02 am', '05/11/2026, 8:02 am', 0, 3, 'Metos'],
  ['Soil temperature high', 'Soil temperature at 10 cm above 28\u00b0C.', 'Medium', 'Delivered', 'Soil Probe B', 'Agritech Farm', '05/11/2026, 9:15 am', '05/11/2026, 9:14 am', 0, 4, 'AxisTech'],
  ['Soil probe battery low', 'Battery at 12%. Replace within 7 days.', 'Low', 'Failed', 'Soil Probe B', 'Riverbend Farm', '31/10/2026, 10:20 am', '31/10/2026, 10:20 am', 5, 5, 'AxisTech'],
].map(a => a.slice(0, 9).concat([100 - a[9], a[10]]));
const NEWU = USERS.find(u => u[2] === 'User') || USERS[1];
const TK_ST = { Open: '#c2410c', 'In progress': '#1d4ed8', 'Awaiting customer': '#b45309', 'On hold': '#6d28d9', Resolved: '#0f766e' };
const RANGES = [['1H', 'Last hour', .004], ['24H', 'Last 24 hours', .04], ['7D', 'Last 7 days', .24], ['30D', 'Last 30 days', 1], ['90D', 'Last 90 days', 2.9], ['6M', 'Last 6 months', 5.8], ['1Y', 'Last year', 11.4]];
const STATUS = {
  green: { bg: '#ecfdf5', fg: '#15803D', bd: '#d1fae5', dot: '#10b981' },
  amber: { bg: '#fffbeb', fg: '#b45309', bd: '#fef3c7', dot: '#f59e0b' },
  red: { bg: '#fef2f2', fg: '#b91c1c', bd: '#fee2e2', dot: '#ef4444' },
  grey: { bg: '#f8fafc', fg: '#475569', bd: '#e8ecf1', dot: '#94a3b8' },
  blue: { bg: '#eff6ff', fg: '#1d4ed8', bd: '#dbeafe', dot: '#3b82f6' },
  violet: { bg: '#f5f3ff', fg: '#6d28d9', bd: '#ede9fe', dot: '#8b5cf6' },
};
const ZONE_BY_LEN = ZONE_LIST.slice().sort((x, y) => y.nm.length - x.nm.length);
const zoneFor = a => { a = (a || '').toLowerCase(); const z = ZONE_BY_LEN.find(x => a.includes(x.nm.toLowerCase())); return z ? z.nm : ''; };
const stOf = s => STATUS[{ Live: 'green', Connected: 'green', Active: 'green', Online: 'green', Resolved: 'green', Onboarding: 'amber', Invited: 'amber', Installing: 'amber', Waiting: 'amber', 'In progress': 'violet', Open: 'blue', Error: 'red', Offline: 'red', 'Credentials expired': 'red', Inactive: 'grey' }[s] || 'grey'];
const TEAL = '#14b8a6';
const PROV_CAT = [
  ["AxisTech","axistech","AxisTech supports agrifood businesses in navigating climate and economic variability. Since 2017, they have been dedicated to helping farmers and agribusinesses improve sustainability, productivity, and profitability with practical, effective technology. We’re committed to providing the tools and support you need to get the most out of your data, tackle industry challenges, and build a sustainable future in agriculture. The solutions include: Locally Manufactured IoT Devices – Reliable devices, for monitoring weather, water, soil and more. FarmMap4D – GIS mapping to help you understand and manage your land and resources. AxisStream Platform – A single point of truth that centralises data, providing insights and supporting informed decisions. Emissions Management – Tools to track and manage emissions supporting your sustainability goals",1,"cred","uploads/axistech.png","https://axistech.co/"],
  ["CNH Field Ops","cnh_ag","CNH FieldOps is a platform that provides access to agronomic data and vehicle telemetry for both agricultural machinery and construction equipment connected to a FieldOps account. It's designed to support integration with farm management systems, dashboards, and operational control platforms.",0,"cred","uploads/cnh_ag.png","https://fieldops.caseih.com/"],
  ["Ceres Tag","cerestag","Ceres Tag is a pioneering animal monitoring platform that uses smart ear tags with direct-to-satellite connectivity to deliver real-time data on livestock without the need for towers, infrastructure, or ongoing maintenance. Receive daily updates on your animals’ walking, grazing, resting, and ruminating behaviors. Gain valuable insights into their wellbeing and activity patterns. Get instant alerts for unusual or suspicious activity. Track their current location and movement history with ease. Stay connected to your animals anytime, anywhere in the world—24/7.",0,"cred","uploads/cerestag.svg","https://cerestag.com/?srsltid=AfmBOooPr5l1UGxuyTJUunm-hbqLGsfehhrMTaEdd1bIyzW4qW_fWt3C"],
  ["Coles","coles","Coles is one of Australia’s largest and most well-known supermarket chains. The company operates a wide range of businesses focused on delivering everyday grocery and household products to Australian consumers. Coles operates a nationwide network of supermarkets offering fresh produce, pantry staples, meat, dairy, bakery items, and household goods. Through Coles Online, customers can shop for groceries and have them delivered or prepared for pickup. Coles offers a variety of in-house brands, including premium lines like Coles Finest and value-focused options.",0,"cred","uploads/coles.png","https://www.coles.com.au/"],
  ["CSBP","csbp","CSBP is recognised as Western Australia’s leading manufacturer and supplier of chemicals, fertilisers and related services to mining, agricultural and industrial sectors throughout the world.",0,"cred","uploads/csbp.svg","https://csbp.com.au/"],
  ["CropScan","cropscan","CropScanAg provides the industry leading solution in Near Infrared On Combine Grain Analysis, providing real-time grain quality data and powerful field data analytics to optimise crop production. With over 6 million acres of protein data collected worldwide, our technology allows farmers to make data-driven decisions during harvest, through to seeding and spraying. Our solution offers farmers precise and accurate data for optimising crop production and input efficiency.",0,"cred","uploads/cropscan.png","https://cropscanag.com/"],
  ["Earth Optics","earthopt","EarthOptics combines advanced field sensors and lab analysis to deliver the most complete view of your soil’s potential. By measuring the physical, chemical, and biological properties, we can help you predict and plan to maximize soil health and profitability.",0,"cred","uploads/earthopt.png","https://earthoptics.com/"],
  ["FoodChain ID","foodchainid","FoodChain ID is a global leader in providing food safety, quality, and sustainability solutions to the food and beverage industry. The company helps over 30,000 businesses in more than 100 countries navigate complex regulatory environments and meet consumer expectations for transparency and safety. FoodChain ID offer the collective intelligence of the most knowledgeable experts in the industry in a broad range of fields: Product Development Food Safety Certification, Regulatory Compliance, Product Certifications, Testing Solutions, Commodity & Ingredient Safety, Training & Consulting.",0,"cred","uploads/foodchainid.png","https://www.foodchainid.com/"],
  ["Jane's Weather (Australia)","janes_weather","Get a clearer view of the week ahead AxisStream now includes access to a standard 7-day regional weather forecast, available with all paid subscriptions. Activate this feature to: * Plan farm operations with confidence * Optimise timing for spraying, seeding, irrigation and harvest * Reduce risk by staying ahead of changing conditions Activate Forecast to start making smarter, weather-informed decisions today.",1,"cred","uploads/pasted-1794211443403-0.png","https://janesweather.com/"],
  ["John Deere Ops Centre","Johndeere","John Deere specializes in providing advanced machinery and technology solutions. They offer a wide range of farming equipment, including tractors, harvesters, and precision agriculture technologies. John Deere supplies heavy machinery like excavators and loaders, often integrated with smart technologies like SmartGrade for enhanced precision. They are also heavily invested in automation, AI, and sustainability. Innovations include autonomous tractors, electric-powered machines, and See & Spray technology that uses AI to reduce herbicide use.",0,"cred","uploads/Johndeere.svg","https://operationscenter.deere.com/"],
  ["AgriWebb","agriwebb","AgriWebb’s industry-leading livestock management software helps you capture, share, and do more with your everyday farm data. From record keeping, to grazing insights and running a more productive team. AgriWebb offers an end-to-end solution full of features built for every management style, enterprise type, and farm setup.",0,"cred","uploads/agriwebb.svg","https://www.agriwebb.com/"],
  ["The Bureau of Meteorology","bomweather","The Bureau of Meteorology (BoM) is Australia's national weather, climate, and water agency. The Perth-specific section of their website (bom.gov.au/places/wa/perth) provides localized weather services for the Perth region, including: Daily and 7-day weather forecasts for Perth and surrounding suburbs. Severe weather warnings, including fire danger ratings and storm alerts. Real-time weather observations, such as temperature, wind, humidity, and rainfall. UV index and sun protection times. Radar and satellite imagery for tracking weather systems. Climate data and historical weather records. This service is essential for residents, businesses, and emergency services in Western Australia to plan and respond to weather conditions effectively",0,"cred","uploads/bomweather.svg","https://www.bom.gov.au/"],
  ["CBH Group","cbhgroup","The CBH Group is Australia’s largest co-operative and a leader in the Australian grain industry, with operations extending along the value chain from fertiliser to grain storage, handling, transport, marketing and processing. Owned and controlled by approximately 3,500 Western Australian grain growing businesses, the core purpose of CBH is to sustainably create and return value to WA grain growers, current and future. The CBH Group consists of three core business activities: Operations (storage and handling), Marketing and Trading, and Fertiliser. In Operations, CBH has a network of more than 100 grain receival sites across Western Australia and four export port terminals. We own a state-of-the-art rail fleet dedicated to the most efficient transfer of grain from our receival sites to the port terminals. The co-operative’s Marketing and Trading arm is the leading grain acquirer in Western Australia, Australia's largest grain exporter, and has operations in eastern Australia, as well as offices in Hong Kong and Tokyo. CBH Fertiliser begun operations in 2015, providing Western Australian growers more choice in the granular fertiliser market.",0,"cred","uploads/cbhgroup.svg","https://www.cbh.com.au/"],
  ["DPIRD Weather","dpirdweather","The Department of Primary Industries and Regional Development's (DPIRD) network of automatic weather stations and radars throughout the state provide timely, relevant and local weather data to assist growers and regional communities make more-informed decisions. The weather station data includes air temperature, humidity, rainfall, wind speed and direction, with most stations also measuring incoming solar radiation to calculate evaporation. This website includes dashboards for each station to visualise this data. Doppler radars The Doppler radars provide live radar imagery, as well as estimated rainfall and are available for the following locations: Perth (Serpentine) Kalgoorlie South Doodlakine Newdegate Watheroo Geraldton Albany Esperance (upgrade to Doppler by June 2020)",0,"cred","uploads/dpirdweather.svg","https://weather.agric.wa.gov.au/"],
  ["National Livestock Identification System (NLIS)","nlis","The National Livestock Identification System is Australia’s system for the identification and traceability of cattle, sheep and goats. NLIS reflects Australia’s commitment to biosecurity and food safety and provides a competitive advantage in a global market. The NLIS combines three elements to enable the lifetime traceability of animals: 1. All livestock are identified by a visual or electronic eartag/device. 2. All physical locations are identified by means of a Property Identification Code 3. All livestock location data and movements are recorded in a central database",0,"cred","uploads/nlis.png","https://www.nlis.com.au/"],
  ["Phoenix by AGDATA","phoenixagdata","Phoenix by AGDATA is an end-to-end farm management software that empowers agricultural businesses across Australia to maximise efficiency and profit. With an ever-changing agricultural industry, farmers and producers are top of mind in everything we do. For over 40 years, AGDATA has been trusted by farmers across rural and regional Australia to simplify and strengthen the way they manage their businesses. Today’s agricultural industry moves faster than ever, and producers are expected to be experts in every corner of their operations – from the office to the paddock, from payroll to mapping to livestock management. That’s where Phoenix by AGDATA comes in: a purpose-built software solution that helps farmers take control, save time, and make better decisions. Proudly based in Toowoomba, Queensland, AGDATA continues to grow with the agricultural industry, supporting the success of farming businesses right across Australia.",0,"cred","uploads/phoenixagdata.png","https://www.agdata.com.au/about-us/"],
  ["Roubler","roubler","Roubler’s all-in-one platform provides you with the power of one seamless system for all your workforce management needs. It incorporates everything you need to recruit, onboard, roster, manage and pay your team. Harnessing the power of AI and machine learning, Roubler helps increase efficiency and drive employee productivity across your entire workforce. Roubler can take care of all the onboarding, managing, rostering and paying of staff. Even all the employment contracts and documents can be done on the platform. And with the Roubler App installed on their phones, your team can view rosters, swap shifts, and even clock in and out.",0,"cred","uploads/roubler.svg","https://roubler.com/au/why-change-hr-systems/the-power-of-one/"],
  ["Harvest Road","harvestroad","Harvest Road Group focuses on high quality agricultural food products in Western Australia. Harvest Road Group strives to produce the highest quality food products. They are passionate about providing high quality agricultural food, representative of the best Australia has to offer. Today the Harvest Road Group proudly encompasses the Harvey Beef and Leeuwin Coast brands. We market a range of high-quality foods for consumers and wholesale partners across Australia and international markets. Businesses include: Agribusiness, Beef Processing, Aquaculture",0,"cred","uploads/harvestroad.svg","https://www.harvestroad.com/about/who-we-are"],
  ["Eurofins Apal Agricultural Laboratory","eurofinsapal","Eurofins APAL delivers high quality independent soil, plant and water analytical services to enable better agronomic decisions. Eurofins APAL works with farmers to provide them with invaluable insight into paddock soil, and the technology to ensure consistent testing year after year. Eurofins APAL works with agronomists and stores to give growers the confidence they need to hit yield targets and maximise the return on their investments. Eurofins APAL works and collaborates with researchers to provide analysis on soil, plants and water, to improve their specialist knowledge.",0,"cred","uploads/eurofinsapal.png","https://www.apal.com.au/Home.aspx"],
  ["HiLo","hilo","HiLo makes industrial-grade monitors that measure liquid levels using radar technology. Save time and hassle with accurate 24/7 liquid monitoring from any location. Solutions offered: Farm Water Tank Monitoring, Household Water Tank Monitoring, Fuel Tank Monitoring, Hydrological Water Level Monitoring, Wastewater and Surface Water Monitoring.",0,"cred","uploads/hilo.png","https://www.hilomonitoring.com/"],
  ["Jiwa","jiwa","Jiwa is an Australian enterprise resource planning (ERP) software provider, offering a powerful and flexible platform called Jiwa 7. It is designed for small to medium-sized businesses, especially those in wholesale, distribution, manufacturing, and service industries. Jiwa’s Business Intelligence (BI) capabilities offer you a wealth of information that you can use to improve processes, make predictions about future growth, and make business decisions based on all your collective data. This is possible because Jiwa’s business management software handles many aspects of your business management requirements from inventory to financials in one cohesive system. Giving you a scope of information not seen in other systems.",0,"cred","uploads/jiwa.png","https://jiwa.com.au/"],
  ["Nutrient Advantage","nutrientadvantage","Nutrient Advantage is a division of Incitec Pivot Fertilisers (IPF), a long-established Australian company specializing in soil and plant nutrition services. Their core mission is to help farmers make informed, data-driven decisions to improve crop productivity and soil health. Nutrient Advantage does: Soil and plant testing, Nutrient Management Planning, Decision Support Tools, Accredited Agronomist Network",0,"cred","uploads/nutrientadvantage.png","https://www.nutrientadvantage.com.au/services/digital-services/na-pro/"],
  ["Origo","origo","Origo has developed a technology able to cover a wide range of farming systems and requirements. Their systems are unique as their technology enables farmers to monitor and remotely control even large broadacre and remote livestock operations. A range of stations is designed to monitor and control farm's equipment. You can monitor tank levels, flow, switching any system such as control pumps, fans and valves.",0,"cred","uploads/origo.png","https://origo.ag/about"],
  ["Triton","triton","Triton is a world-leading supplier of innovative proprietary software and hardware solutions for food processing. Across the globe, we offer a range of services, including data capture and production management software for the food processing sector, data capture hardware, and hardware solutions to help you reduce costs, increase efficiency, and improve safety for your operation.",0,"cred","uploads/triton.png","https://tritoncomsys.com/about-us/"],
  ["Precision Soil Tech","precisionsoiltech","Precision SoilTech has the experience required to collect reliable samples in any soil type, at any depth, so you can trust the data you use to make decisions. We make your experience easy, from site selection to reporting analysis so you have more time to concentrate on the bigger picture. Our goal is to ensure farmers and their advisers have accurate and relevant soil data in order to make effective management decisions",0,"cred","uploads/precisionsoiltech.png","https://precisionsoiltech.com.au/"],
  ["Veris Technologies","veristechnologies","Veris Technologies is a leading provider of on-the-go soil sensing technology designed to help farmers, agronomists, and agricultural retailers make better, data-driven decisions for crop production and land management. Go from data to decisions using a single, integrated process. Pair the right platform and sensors with software that makes it simple to deploy sensors on tillage tools and planters, map fields, process data, and deliver prescriptions. With the largest soil mapping network in the world and our team of data analysts — digital soil mapping and management is now at your fingertips. Available to farmers, agronomists, and retailers.",0,"cred","uploads/veristechnologies.png","https://www.veristech.com/"],
  ["Xero","xero","Xero is an online accounting software that helps small business owners manage finances, connect with banks, and collaborate with advisors in real time. It offers automation by streamlining tasks like invoicing, bank reconciliation, payroll as well as reporting.",0,"cred","uploads/xero.png","https://www.xero.com/au/"],
  ["TimePro","timepro","Intertec TimePro is an affordable and easy-to-use web timesheet solution that lets you record and manage time records online. It can be purchased on a low cost monthly or annual subscription and is hosted on Microsoft’s Azure platform for the highest availability, performance and security. We provide excellent product support via phone and email from a dedicated in house support team – not some overseas call centre! Our team will work with you to ensure Intertec TimePro is setup to meet your specific business requirements. Features Intertec TimePro web timesheets application will help you track time and manage timesheets accurately and efficiently. Optionally integrate with your MYOB, Xero or QuickBooks accounting system. It’s packed with features from easy time entry, detailed reporting, data export options to manager authorisation, accounting software integration and multiple charge/cost rates for staff.",0,"cred","uploads/timepro.png","https://www.timesheets.com.au/products.asp"],
  ["Meat & Livestock Australia","envd","Meat & Livestock Australia (MLA) is a producer-owned company that supports the Australian red meat and livestock industry. MLA works in partnership with the red meat industry and the Australian Government to deliver marketing, research and development products and services to beef, sheep and goat producers, with the core purpose of fostering the prosperity of the red meat industry.",0,"cred","uploads/envd.svg","https://www.mla.com.au/"],
  ["Helios","helios","Helios is your ultimate partner for predicting price and supply availability for agricultural commodities. Helios price forecasts offer clear, reliable predictions for the next 12 months, with detailed explanations of what’s driving price changes. Plan smarter, negotiate better, and manage risk with confidence.",1,"cred","uploads/helios.png","https://www.helios.sc/"],
  ["Elynx Livestock Software Systems","elynxbms","Innovating Livestock Management Solutions Founded in 2000, eLynx Pty Ltd has established itself as a leading provider of livestock management software in Australia. Originally focused on the Australian feedlot industry, eLynx has broadened its scope to provide scalable management solutions across all areas of livestock production, including breeding, grazing, backgrounding, and feedlot management. Headquartered in Toowoomba, Queensland, eLynx is dedicated to improving the efficiency and productivity of livestock producers both locally and beyond.",0,"cred","uploads/elynxbms.png","https://elynx.com.au/"],
  ["Practical Systems Limited","practicalsystems","Practical Systems is an Australian company that provides software solutions primarily for rural and small business enterprises. Their offerings focus on simplifying financial and business management tasks, especially in the agricultural sector. Here's a brief summary of what they offer: PS Cashbook: A user-friendly accounting software tailored for farmers and small businesses, helping with bookkeeping, budgeting, and financial reporting. PS Payroll: A payroll management system that ensures compliance with Australian tax and superannuation regulations, including features for generating PAYG payment summaries. PS Stockbook: A livestock management tool designed to track animal performance, genetics, and treatments, widely used in the livestock industry. PS Agrimaster Integration: Tools that integrate with other farm management platforms to streamline data sharing and reporting. They also provide support resources, including knowledge bases and customer service, to help users manage tasks like amending payment summaries or handling lump sum payments",0,"cred","uploads/practicalsystems.png","https://www.practicalsystems.com.au/about/"],
  ["Topcon","topcon","Topcon offers a comprehensive suite of precision agriculture solutions designed to enhance productivity, reduce input costs, and promote sustainability across all stages of the farming cycle. Topcon’s solutions are universal, compatible with most agricultural machinery, and built to support ISOBUS standards, allowing integration with third-party systems. Their focus is on data-driven farming, helping producers adapt to economic, environmental, and regulatory challenges. Key Agricultural Solutions from Topcon: Soil preparation - Tools for land forming, tillage depth control, and fertilizer/manure spreading. Seeding & Planting - Technologies for air seeding, seed drill control, and transplanting. Crop care - Solutions include boom height control, spraying/spreading automation, and crop health monitoring. Harvest - Yield monitoring and harvest cart weighing systems. Feed Management - Intergrated feed mixer weighing systems, including legacy Digi-Star products. Guidance & Autosteering - Precision GNSS-based systems for machine guidance and autosteering. Weighing Systems - Mobile and onboard weighing for loaders, trailers, and forklifts.",0,"cred","uploads/topcon.png","https://www.topconpositioning.com/"],
  ["Agworld","agworld","Agworld is a leading Australian agricultural technology company that provides a collaborative farm management platform designed to connect all stakeholders in the farming process—such as growers, agronomists, contractors, and financial advisors—on a single, shared data system. The Agworld ecosystem allows you to collect data at every level of your operation and share this data with everyone that matters to you. Growers, farm hands, agronomists, input providers, contractors, banks, accountants, land owners and many other stakeholders are now able to work together on the same set of data. Agworld has a unique structured data system which means that you can take all your historical farm records and data shared from advisors, and turn them into unparalleled insights for more profitable decisions.",0,"cred","uploads/agworld.svg","https://www.agworld.com/au/"],
  ["Aveva","aveva","AVEVA is a global leader in industrial software, providing digital solutions that help businesses across industries—especially in energy, manufacturing, infrastructure, and marine sectors—optimize operations, improve efficiency, and drive sustainability. Design and Engineering: 3D plant design, process simulation, and engineering data management. Operations: Real-time monitoring, control systems (like SCADA and HMI), and production optimization. Asset Performance: Predictive maintenance, reliability analysis, and asset lifecycle management. Data Management: Integration of industrial data through platforms like the PI System (from OSIsoft), enabling advanced analytics and AI-driven insights.",0,"cred","uploads/aveva.svg","https://discover.aveva.com/paid-search-gc-consumer-products/ebook-smarter-consumer-products-manufacturing-building-competitive-advantage-with-ai-and-industrial-intelligence?utm_term=industrial%20manufacturing%20software&utm_campaign=G_S_A_APAC_ANZ_Campaign_Industry_CP_Consumer%20Products&utm_source=adwords&utm_medium=ppc&gad_source=1&gad_campaignid=23288178641&gclid=Cj0KCQjwm8bTBhDWARIsAC9Hi8nFtdKmi8AC1-OHAnhzh04up3bHmxBznLtBAHBC8L0a9Q-BtwgE97QaAvptEALw_wcB"],
  ["BMKG (Meteorology, Climatology, and Geophysical Agency of Indonesia)","bmkg","BMKG (Badan Meteorologi, Klimatologi, dan Geofisika) is the official government agency of Indonesia responsible for meteorology, climatology, air quality monitoring, and geophysics. The agency provides reliable weather forecasts, climate information, earthquake and tsunami monitoring, maritime and aviation weather services, and early warning systems for natural hazards across Indonesia. Key Services Provided by BMKG: Weather forecasts and severe weather warnings. Climate monitoring and seasonal outlooks. Air quality monitoring and reporting. Earthquake and tsunami detection and alerts. Aviation weather services. Maritime weather and ocean condition forecasts. Geophysical monitoring and disaster mitigation support.",0,"cred","uploads/bmkg.png","https://www.bmkg.go.id/"],
  ["Athena IR Tech","athena","Precision irrigation technology provider that uses infrared canopy sensors and analytics to monitor plant water stress and optimize irrigation scheduling.",0,"cred","uploads/athena.svg","https://athenairtech.com/"],
  ["Bioscout","bioscout","AI-powered crop disease monitoring platform that uses autonomous field sensors to detect airborne fungal spores and provide early disease risk alerts for growers",0,"cred","uploads/bioscout.png","https://www.bioscout.com.au/"],
  ["Hussat - Soil Moisture Probes","hussat","Australian agritech company specializing in soil moisture sensors, telemetry systems, crop monitoring, and online agricultural data delivery.",0,"cred","uploads/hussat.png","https://hussat.com.au/"],
  ["Metos","metos","METOS ANZ is the solutions provider for the Australian and New Zealand markets which are unique to other areas in the World. METOS by Pessl Instruments ag-tech solutions are providing insights like never before to agricultural, horticultural and viticultural production globally. We go beyond weather data and forecasting; our solutions provide complete and targeted insights to give you the confidence to action better decisions.",1,"cred","uploads/metos.png","https://metos.com.au/"],
  ["Davis WeatherLink","davis","Davis WeatherLink is a data logging, display, and cloud platform created by Davis Instruments. It connects personal weather stations—such as the Vantage Pro2 and Vantage Vue—to the internet. This lets users view real-time weather metrics, analyze historical trends, and share data globally",0,"cred","uploads/davis.png","https://www.weatherlink.com/"],
  ["Wildeye","wildeye","Wildeye is an Internet of Things (IoT) hardware and remote monitoring provider specializing in agricultural and environmental data, including weather stations. It connects field sensors to the cloud, allowing users to view real-time data like rainfall, temperature, wind, and humidity via a mobile app or web portal. What Wildeye ProvidesHardware & Telemetry: Sells and supports cellular 4G IoT devices, weather stations, and online rain gauges.Agronomic Data: Generates metrics like reference evapotranspiration, Delta-T, chill portions, and growing degree days. Compatibility: Integrates with third-party sensors, water meters, and soil moisture probes from major manufacturers.",0,"cred","uploads/wildeye.png","https://www.mywildeye.com/"]
];
const LOGO_PAL = [['#0f172a', '#fde047'], ['#eef2ff', '#3730a3'], ['#ecfdf5', '#047857'], ['#fff7ed', '#c2410c'], ['#f0f9ff', '#0369a1'], ['#fdf2f8', '#be185d'], ['#f8fafc', '#0f172a'], ['#fefce8', '#a16207']];
const monoOf = n => { const w = n.replace(/[^A-Za-z0-9 &]/g, '').split(' ').filter(x => x && x !== '&' && x !== '-'); return (w.length > 1 ? w[0][0] + w[1][0] : w[0].slice(0, 3)).toUpperCase(); };
const MAPBOX_TOKEN = 'pk.eyJ1Ijoic29mdHdhcmUtYXhpc3RlY2giLCJhIjoiY2tnZzk1bzZnMW5zZzJxcW9nZTg4cDZxaSJ9.rK4H82M_mSth54jOMVhGAA';
const ESRI = p => 'https://server.arcgisonline.com/ArcGIS/rest/services/' + p + '/MapServer/tile/{z}/{y}/{x}';
const CARTO = p => 'https://a.basemaps.cartocdn.com/' + p + '/{z}/{x}/{y}.png';
const BASEMAPS = {
  satStreets: { label: 'Satellite Streets', sw: '#4b5d52', mb: 'satellite-streets-v12', t: [[ESRI('World_Imagery')], [ESRI('Reference/World_Transportation'), 0.4], [ESRI('Reference/World_Boundaries_and_Places'), 0.5]], a: 'Imagery \u00a9 Esri' },
  satellite: { label: 'Satellite', sw: '#3b3f2e', mb: 'satellite-v9', t: [[ESRI('World_Imagery')]], a: 'Imagery \u00a9 Esri' },
  streets: { label: 'Streets', sw: '#ede3cc', mb: 'streets-v12', t: [[ESRI('World_Street_Map')]], a: '\u00a9 Esri' },
  outdoors: { label: 'Outdoors', sw: '#8c9a5b', mb: 'outdoors-v12', t: [[ESRI('World_Topo_Map')]], a: '\u00a9 Esri' },
  light: { label: 'Light', sw: '#eeeeee', mb: 'light-v11', t: [[CARTO('light_all')]], a: '\u00a9 CARTO \u00a9 OpenStreetMap' },
  dark: { label: 'Dark', sw: '#1e2430', mb: 'dark-v11', t: [[CARTO('dark_all')]], a: '\u00a9 CARTO \u00a9 OpenStreetMap' },
  navDay: { label: 'Navigation Day', sw: '#c9ced6', mb: 'navigation-day-v1', t: [[CARTO('rastertiles/voyager')]], a: '\u00a9 CARTO \u00a9 OpenStreetMap' },
  navNight: { label: 'Navigation Night', sw: '#161b26', mb: 'navigation-night-v1', t: [[ESRI('Canvas/World_Dark_Gray_Base')], [ESRI('Canvas/World_Dark_Gray_Reference'), 0.8]], a: '\u00a9 Esri' },
};
const AR_RULES = [
  ['r1', 'Heat load', 'Riverbend Farm', 'Pen 2 · HLI', 'HLI', '>', 86, '', 'Critical', [1, 1, 1], 'Farm owner, Manager', 'Every hour', 1],
  ['r2', 'Low soil moisture', 'Bluegum Farm', 'SP-01 · 30 cm', 'Soil moisture', '<', 18, '%', 'High', [1, 0, 1], 'Farm owner', 'Every 6 hours', 1],
  ['r3', 'Strong wind gusts', 'Agritech Farm', 'WS-01', 'Wind gust', '>', 60, 'km/h', 'Medium', [1, 0, 1], 'Farm owner', 'Once per event', 1],
  ['r4', 'Frost risk', 'Cedar Ridge Farm', 'WS-01', 'Air temperature', '<', 0, '°C', 'High', [1, 1, 1], 'Farm owner, Manager', 'Once per event', 1],
  ['r5', 'Device offline', 'All farms', 'All devices', 'No data received', '>', 2, 'hours', 'Medium', [1, 0, 1], 'Farm owner, UMP Admin', 'Every 6 hours', 1],
  ['r6', 'Heavy rainfall', 'Greg Farm', 'WS-02', 'Rainfall (24 h)', '>', 25, 'mm', 'Low', [0, 0, 1], 'Farm owner', 'Once per event', 0],
  ['r7', 'Delta T above spray range', 'Riverbend Farm', 'WS-01', 'Delta T', '>', 10, '°C', 'Low', [0, 0, 1], 'Manager', 'Once per event', 1],
  ['r8', 'Cold soil', 'Greg Farm', 'SP-02 · 10 cm', 'Soil temperature', '<', 8, '°C', 'Low', [1, 0, 0], 'Farm owner', 'Once per event', 0]
].map(([id, name, farm, dev, param, op, v, u, pr, ch, rec, rep, on]) => ({ id, name, farm, dev, param, op, v, u, pr, ch, rec, rep, on: !!on }));
const AR_FIRED = { r1: [38, '2 h ago'], r2: [41, '16 h ago'], r3: [6, '4 d ago'], r4: [11, '9 d ago'], r5: [19, '3 h ago'], r6: [0, ''], r7: [23, '1 d ago'], r8: [0, ''] };
const FARM_ALERTS = { 'Riverbend Farm': 2, 'Greg Farm': 1, 'Agritech Farm': 1, 'Bluegum Farm': 1 };
const WIDGETS = { alerts: ['Alerts', 'Active alerts across all farms', '#fff4e8', '#ea580c'], tickets: ['Support tickets', 'Open producer support items', '#eaf2ff', '#2563eb'], activity: ['Recent activity', 'Latest changes across the network', '#f3eeff', '#7c3aed'], providers: ['Providers', 'Sync status of your data sources', '#e6f9fd', '#0891b2'] };
const WTC = { tickets: '#0B7F7E', activity: '#EA580C', alerts: '#EA580C', health: '#0891B2', devices: '#0891B2', weather: '#15803D', providers: '#0F172A' };
const NAVY = '#0F172A';
const COLS = ['Add', 'Edit', 'Delete', 'View'];
const SCOPES = [['REGION', 'Access to all farms in the region'], ['FARM', 'Access to individual assigned farms only']];
const MOD_NOTE = { 'Producer Portal': 'Requires farm access', Livestock: 'Herd, weights and scales', Alerts: 'Alert rules and notifications', Providers: 'Connected data providers', Data: 'Uploads and exports', 'Data Sharing': 'Sharing farm data with others' };
const mx = f => MODULES.map((m, i) => f(m, i));
const CMPS = ['falls below','drops to or below','is','is not','reaches or exceeds','rises above','is one of','is not one of'];
const RA = ['rises above','reaches or exceeds'], FB = ['falls below','drops to or below'];
const TPL_SEED = [
  ['Critical Battery Level','battery_perc','',['drops to or below'],'Soil Probe','25/08/2024'],
  ['Soil Probe Salinity','soil_salinity_1','',CMPS,'Soil Probe','08/08/2024'],
  ['Soil Probe Moisture','soil_moisture_1','',CMPS,'Soil Probe','08/08/2024'],
  ['Soil Probe Temperature','soil_temperature_1','',CMPS,'Soil Probe','08/08/2024'],
  ['Relative Humidity','humidity_avg','%',[...RA,...FB],'Weather','04/09/2026'],
  ['Signal Strength','signal_strength','',FB,'Weather','04/09/2026'],
  ['Battery Level','battery_level','%',FB,'Weather','04/09/2026'],
  ['Battery Voltage','battery_voltage','V',FB,'Weather','04/09/2026'],
  ['Solar Radiation','solar_rad_avg','W/m²',RA,'Weather','04/09/2026'],
  ['Wet Bulb Temperature','wetbulb_avg','°C',[...RA,...FB],'Weather','04/09/2026'],
  ['Delta T','deltat_avg','°C',[...RA,...FB],'Weather','04/09/2026'],
  ['Dew Point','dewpoint_avg','°C',[...RA,...FB],'Weather','04/09/2026'],
  ['MSL Pressure','msl_pressure','hPa',[...RA,...FB],'Weather','04/09/2026'],
  ['Atmospheric Pressure','atmos_pressure_avg','hPa',[...RA,...FB],'Weather','04/09/2026'],
  ['Average Wind Gust','wind_gust_avg','km/h',RA,'Weather','04/09/2026'],
  ['Wind Gust','wind_speed_max','km/h',RA,'Weather','04/09/2026'],
  ['Total Rainfall','rainfall_total','mm',RA,'Weather','04/09/2026'],
  ['Rainfall','rainfall','mm',RA,'Weather','04/09/2026'],
  ['UV High','uv_index_avg','',['reaches or exceeds'],'Weather','09/01/2025'],
  ['High wind speed','wind_speed_avg','km/h',['reaches or exceeds'],'Weather','08/08/2024'],
  ['Weather Station Temperature','temperature_avg','°C',CMPS,'Weather','08/08/2024'],
  ['High Temperature','temperature_avg','°C',['reaches or exceeds'],'Weather','08/08/2024'],
  ['Cool Temperature','temperature_avg','°C',['falls below'],'Weather','25/07/2024'],
  ['Heat Load Index','hli_avg','',[...RA,...FB],'Heat Load Index','12/10/2026'],
  ['Extreme Heat Load','hli_max','',['reaches or exceeds'],'Heat Load Index','12/10/2026'],
  ['Accumulated Heat Load','ahlu_total','units',RA,'Heat Load Index','12/10/2026'],
  ['Heat Load Recovery','hli_avg','',FB,'Heat Load Index','12/10/2026'],
].map(([name,key,unit,cmps,source,created]) => ({ name, key, unit, cmps: [...cmps], source, created }));
const TPL_SRC = ['Soil Probe','Weather','Heat Load Index'];
const ROLE_SEED = [
  { name: 'UMP_ADMIN', desc: 'All farms, all rights', comment: 'Upper Murray staff with access to every farm', scopes: ['REGION'], m: mx(() => [1,1,1,1]) },
  { name: 'OWNER', key: 'Owner', desc: 'All access, limited to their own farm', comment: 'Owner role with all access to their farm', scopes: ['FARM'], m: mx(() => [1,1,1,1]) },
  { name: 'USER', key: 'User', desc: 'Day-to-day farm operations', comment: '', scopes: ['FARM'], m: mx(m => ['Providers', 'Data Sharing'].includes(m) ? [0,0,0,1] : [1,1,0,1]) },
  { name: 'VIEWER', key: 'Viewer', desc: 'Read-only access to farm data', comment: '', scopes: ['FARM'], m: mx(() => [0,0,0,1]) }
];
const clone = o => JSON.parse(JSON.stringify(o));
const blankRole = () => ({ name: '', desc: '', comment: '', scopes: [], m: mx(() => [0,0,0,0]) });

const LG_KEY = 'ump_admin_session';
const lgRead = () => { try { return JSON.parse(localStorage.getItem(LG_KEY) || sessionStorage.getItem(LG_KEY) || 'null'); } catch (e) { return null; } };
const lgName = e => (e || '').split('@')[0].split(/[._-]+/).filter(Boolean).map(w => w[0].toUpperCase() + w.slice(1)).join(' ') || 'User';
const LG_GREENS = ['#1E4C7A', '#245A8C', '#1A4470', '#2A6699', '#1F5383', '#163C63'];
class Component extends React.Component {
  state = { authed: lgRead(), lgEmail: 'admin@ump.org.au', lgPw: 'UmpAdmin@2026', lgShow: true,
    page: this.props.startPage ?? 'home',
    collapsed: this.props.startCollapsed ?? (typeof window !== 'undefined' && window.innerWidth < 1024),
    farmView: this.props.farmsLayout ?? 'grid',
    farmQuery: '', userTab: 'list', viewAs: (lgRead() || {}).role === 'staff' ? 'staff' : 'ump', role: 'Owner',
    provTab: 'mine', provQ: '', provAsc: true, provView: 'grid', provPage: 1, provOn: Object.fromEntries(PROV_CAT.map(p => [p[0], !!p[3]])), conn: null,
    roleList: clone(ROLE_SEED), roleSel: -1, roleDraft: blankRole(), atQ: '', atSrc: '', tpls: TPL_SEED, atEdit: null, atDraft: null, scopeOpen: false, roleTried: false,
    perms: JSON.parse(JSON.stringify(ROLE_DEF)), extras: JSON.parse(JSON.stringify(ROLE_EXTRA)),
    share: FARMS.map((f, i) => ({ on: f.status === 'Live', sets: [1, i % 2 === 0 ? 1 : 0, i === 3 ? 1 : 0, 1] })),
    reportTab: 'overview', supportTab: 'portal', priority: 'Medium', supStatus: '', supQ: '', nt: { subject: '', farm: '', topic: '', files: [] },
    tixPortal: [['TK-008', 'Riverbend Farm', 'SP-01 reading interval change', 'Emma Barnes', '03 Nov 2026', 'In progress'], ['TK-009', 'Ed Farm', 'Metos temperature chart missing data', 'Sarah McKenzie', '02 Nov 2026', 'Open'], ['TK-010', 'Cedar Ridge Farm', 'Provider API key failed', 'Hamish Doyle', '30 Oct 2026', 'On hold'], ['TK-011', 'Kookaburra Farm', 'Rainfall graph not updating', 'Kate Morrison', '29 Oct 2026', 'Waiting'], ['TK-012', 'Hillview Farm', 'Alert emails not arriving', 'Grace Lindqvist', '01 Nov 2026', 'Open'], ['TK-002', 'Greg Farm', 'Incorrect humidity reading', 'Tom Whitfield', '01 Nov 2026', 'Open'], ['TK-003', 'Ed Farm', 'Regional data missing on map', 'Sarah McKenzie', '15 Oct 2026', 'Resolved'], ['TK-004', 'Bluegum Farm', 'CSV upload failing', 'Priya Nair', '02 Nov 2026', 'In progress'], ['TK-013', 'Willow Creek Farm', 'Soil probe stopped reporting', 'Liam Carter', '31 Oct 2026', 'In progress'], ['TK-014', 'Stonybrook Farm', 'Yield upload wrong units', 'Ben Kowalski', '27 Oct 2026', 'Resolved']].map(([id, farm, subject, by, date, status], ti) => ({ id, farm, subject, by, date, status: TK_STOV[id] || status, cat: TK_CAT[id] || 'Other', topic: TK_CAT[id] || 'Other', desc: TK_DESC[id] || (TK_THREAD[id] ? TK_THREAD[id][0][3] : subject + '. Could someone please take a look?'), assignee: ASSIGNEES[ti % (ASSIGNEES.length - 1)], fwd: false })),
    tixMine: [['AX-1046', 'Riverbend Farm', 'Device alerts not sending', '02 Nov 2026', 'In progress', '', 'Alerts', 'Soil probe SP-01 crossed the moisture threshold twice on Monday but no alert email or SMS was sent to the farm owner.'], ['AX-1031', 'Cedar Ridge Farm', 'Regional map not loading data', '25 Oct 2026', 'Open', '', 'Regional map', 'The regional map is not loading the most recent weather station data for Cedar Ridge Farm. The latest readings shown are from last week.']].map(([id, farm, subject, date, status, note, topic, desc]) => ({ id, farm, subject, date, status, note, topic, desc, assignee: 'AxisTech Support' })),
    farmData: FARMS.map(f => ({ ...f })), editingFarm: false, draft: {}, userFarm: '', devFarm: '', newFarm: {},
    modal: null, widgets: ['tickets', 'activity'], tkSel: null, tkReply: '', tkMsgs: {}, userQ: '', userRole: '', devProvs: [], devCats: [], devDD: null, devProvQ: '', devCatQ: '', devEdit: null, devNames: {}, devCatOv: {}, anRange: '30D', anMenu: false, anFrom: '', anTo: '2026-11-04', anCustom: null, devType: 'all', devProv: '', devQ: '', devView: 'grid', devPage: 1, devMenu: null, userSel: null, wSize: { weather: 'S', health: 'S' }, wCol: {}, dragW: null, overW: null, picker: false, editing: false, contact: { name: 'John', email: 'john@ump.org.au', mobile: '0412 345 678', org: 'AxisTech' }, wizStep: 1, wizProvider: 'Metos', tested: false, freq: 'Hourly', pw: '',
  };
  go = page => this.setState({ page });
  updThumb = () => { const el = this._ds, th = this._thumb; if (!el || !th) return; const max = el.scrollHeight - el.clientHeight; th.style.opacity = max > 2 ? '1' : '0'; th.style.top = (max > 0 ? Math.min(1, el.scrollTop / max) * 90 : 0) + '%'; };
  thumbRef = el => { this._thumb = el; this.updThumb(); };
  dockScrollRef = el => { if (this._dsRO) this._dsRO.disconnect(); this._ds = el; if (el) { this._dsRO = new ResizeObserver(() => this.updThumb()); this._dsRO.observe(el); } this.updThumb(); };
  componentDidUpdate() { this.updThumb(); }
  mapRef = el => {
    if (el && el !== this._mapEl) { this._mapEl = el; this.initMap(el); }
    else if (!el && this.map) { if (this._ro) this._ro.disconnect(); if (this.inset) { this.inset.remove(); this.inset = null; } this.map.remove(); this.map = null; this._mapEl = null; this.markers = {}; this.devMarkers = null; }
  };
  componentWillUnmount() { if (this._ro) this._ro.disconnect(); if (this.map) this.map.remove(); }
  initMap(el) {
    if (!window.maplibregl) { setTimeout(() => this._mapEl === el && this.initMap(el), 120); return; }
    const token = this.props.mapboxToken || MAPBOX_TOKEN;
    const sources = {}, layers = [];
    Object.entries(BASEMAPS).forEach(([k, bm]) => {
      const tiles = token && bm.mb ? [['https://api.mapbox.com/styles/v1/mapbox/' + bm.mb + '/tiles/512/{z}/{x}/{y}@2x?access_token=' + token]] : bm.t;
      tiles.forEach((t, i) => {
        const id = 'bm-' + k + '-' + i;
        sources[id] = { type: 'raster', tiles: [t[0]], tileSize: token && bm.mb ? 512 : 256, attribution: token && bm.mb ? '\u00a9 Mapbox \u00a9 OpenStreetMap' : bm.a };
        layers.push({ id, type: 'raster', source: id, layout: { visibility: k === (this.state.basemap || 'satStreets') ? 'visible' : 'none' }, paint: { 'raster-opacity': t[1] == null ? 1 : t[1] } });
      });
    });
    const map = new maplibregl.Map({ container: el, style: { version: 8, sources, layers }, center: [147.68, -36.18], zoom: 8.4, attributionControl: { compact: true } });
    map.addControl(new maplibregl.NavigationControl({ showCompass: true }), 'bottom-right');
    this.map = map; this.markers = {};
    this._ro = new ResizeObserver(() => map.resize()); this._ro.observe(el);
    window.__umpViewFarm = name => this.setState({ page: 'farmDetail', farmSel: name, editingFarm: false });
    FARMS.forEach(f => {
      const live = f.status === 'Live';
      const ds = DEVICES.filter(d => d[3] === f.name), provs = new Set(ds.map(d => d[2])).size, al = FARM_ALERTS[f.name] || 0;
      const wrap = document.createElement('div');
      wrap.style.cssText = 'width:26px;height:32px;display:flex;align-items:flex-start;justify-content:center;cursor:pointer';
      const inner = document.createElement('div');
      inner.style.cssText = 'width:26px;height:32px;display:flex;align-items:flex-start;justify-content:center;transform-origin:50% 100%;transition:transform .12s';
      inner.dataset.pin = '1';
      const dot = document.createElement('div');
      dot.style.cssText = 'width:26px;height:26px;margin-top:0;border-radius:50% 50% 50% 0;transform:rotate(-45deg);transform-origin:50% 50%;background:linear-gradient(135deg,#f87171,#dc2626);border:1.5px solid rgba(255,255,255,.9);box-shadow:-2px 3px 8px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;transition:transform .15s';
      const core = document.createElement('div');
      core.style.cssText = 'transform:rotate(45deg);width:17px;height:17px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;line-height:0;box-shadow:inset 0 0 0 1px rgba(220,38,38,.15)';
      core.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 18.5 9 17l-6 3V6l6-3 6 3 6-3v7"></path><path d="M9 3v14"></path><path d="M15 6v5"></path><path d="M21 17.4c0 2.2-3 4.6-3 4.6s-3-2.4-3-4.6a3 3 0 0 1 6 0z"></path></svg>';
      dot.appendChild(core); inner.appendChild(dot); wrap.appendChild(inner);
      const m = new maplibregl.Marker({ element: wrap, anchor: 'bottom' }).setLngLat([f.lng, f.lat]).addTo(map);
      this.markers[f.name] = m; m._dot = dot;
      const open = () => { clearTimeout(this._popT); if (this._popKeep && this.state.pop && this.state.pop.name !== f.name) return; this.showPop(f); };
      wrap.addEventListener('mouseenter', open); wrap.addEventListener('click', e => { e.stopPropagation(); this._popKeep = true; clearTimeout(this._popT); this.showPop(f); });
      wrap.addEventListener('mouseleave', () => this.hidePopSoon());
    });
    const pinScale = () => { const z = map.getZoom(); const s = 1.2 * Math.max(0.45, Math.min(1.1, 0.55 + (z - 7.5) * 0.18)); el.querySelectorAll('[data-pin]').forEach(p => { p.style.transform = 'scale(' + s.toFixed(3) + ')'; }); el.querySelectorAll('[data-dpin]').forEach(p => { p.style.transform = 'scale(' + (s * 0.9).toFixed(3) + ')'; }); };
    map.on('zoom', pinScale);
    map.on('move', () => { const p = this.state.pop; if (p) { const f = FARMS.find(x => x.name === p.name); if (f) this.showPop(f, true); } });
    map.on('click', () => { this._popKeep = false; this.setState({ pop: null }); });
    map.on('load', () => {
      map.resize();
      pinScale();
      { let dk = null; try { dk = localStorage.getItem('ump-admin-bm-default'); } catch (x) {} if (dk && BASEMAPS[dk]) { this.setState({ bmDefault: dk }); if (dk !== 'satStreets') setTimeout(() => this.setBasemap(dk), 0); } }
      fetch('assets/upper-murray-map.json').then(r => r.json()).then(fc => {
        if (!this.map) return;
        map.addSource('um', { type: 'geojson', data: fc });
        const before = undefined;
        map.addLayer({ id: 'sub-fill', type: 'fill', source: 'um', filter: ['==', ['get', 'k'], 'sub'], paint: { 'fill-color': ["get", "COLOR"], 'fill-opacity': 0.5 } }, before);
        map.addLayer({ id: 'loc-line', type: 'line', source: 'um', filter: ['==', ['get', 'k'], 'sub'], paint: { "line-color": ["get", "BORDER_COLOR"], "line-width": 1.4, "line-opacity": 0.9 } }, before);
        if (this.state.boundary === false) this.setBoundary(false);
        setTimeout(() => this.applyRegionTone(this.state.basemap || 'satStreets'), 0);
        map.addLayer({ id: 'sub-line', type: 'line', source: 'um', filter: ['==', ['get', 'k'], 'bnd'], paint: { 'line-color': '#fcd27a', 'line-width': 0, 'line-opacity': 0.95 }, layout: { 'line-join': 'round' } }, before);
        const labels = [];
        fc.features.filter(f => f.properties.k === 'loc').forEach(f => {
          const el = document.createElement('div');
          el.textContent = f.properties.nm || f.properties.n;
          el.style.cssText = 'pointer-events:none;font-family:Geist,sans-serif;font-size:9.5px;font-weight:600;letter-spacing:.01em;color:#fff;white-space:nowrap;paint-order:stroke fill;-webkit-text-stroke:2.4px ' + (f.properties.bc || '#000');
          new maplibregl.Marker({ element: el, anchor: f.properties.f ? 'top' : 'center', offset: f.properties.f ? [0, 4] : [0, 0] }).setLngLat([f.properties.lx, f.properties.ly]).addTo(map);
          el.style.zIndex = '0';
          labels.push(el);
        });
        const showLabels = () => { const on = map.getZoom() >= (this._lblMinZ || 0); labels.forEach(el => { el.style.display = on ? '' : 'none'; }); };
        map.on('zoom', showLabels); map.once('idle', showLabels); showLabels();
        Object.values(this.markers).forEach(m => { const el = m.getElement(); el.style.zIndex = '2'; el.parentNode.appendChild(el); });
        map.fitBounds([[fc.bbox[0], fc.bbox[1]], [fc.bbox[2], fc.bbox[3]]], { padding: 36, duration: 0 });
        this._lblMinZ = map.getZoom() - 0.2; showLabels();   // names hide once you zoom out past the starting view
        if (this.state.deviceLayer) this.setDeviceLayer(true);
        if (this.state.farmLayer === false) this.setFarmLayer(false);
        if (this.state.viewAs === 'owner') this.applyView();
      });
    });
  }
  showPop(f, keep) {
    const map = this.map; if (!map) return;
    const pt = map.project([f.lng, f.lat]), W = map.getContainer().clientWidth;
    Object.values(this.markers).forEach(m => { if (m._dot) m._dot.style.transform = 'rotate(-45deg)'; });
    const mk = this.markers[f.name]; if (mk && mk._dot) mk._dot.style.transform = 'rotate(-45deg) scale(1.18)';
    const s = 1.2 * Math.max(0.45, Math.min(1.1, 0.55 + (map.getZoom() - 7.5) * 0.18)), pinH = 32 * s;
    const below = pt.y - pinH - 70 < 52;
    const half = 130, x = W < half * 2 + 16 ? W / 2 : Math.max(half + 8, Math.min(W - half - 8, pt.x));
    this.setState({ pop: { name: f.name, zone: f.zone, users: USERS.filter(u => u[3] === f.name).length, devices: DEVICES.filter(d => d[3] === f.name).length, x, y: below ? pt.y + 10 : pt.y - pinH - 10, below } });
  }
  hidePopSoon() { clearTimeout(this._popT); if (this._popKeep) return; this._popT = setTimeout(() => { Object.values(this.markers || {}).forEach(m => { if (m._dot) m._dot.style.transform = 'rotate(-45deg)'; }); this.setState({ pop: null }); }, 200); }
  redirect(farm) { this.setState({ rd: { farm } }); clearTimeout(this._rdT); this._rdT = setTimeout(() => { window.location.href = PP + (farm ? '?farm=' + encodeURIComponent(farm) : ''); }, 1600); }
  flash(title, msg) { clearTimeout(this._toastT); this.setState({ toast: { title, msg } }); this._toastT = setTimeout(() => this.setState({ toast: null }), 5000); }
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
        const token = this.props.mapboxToken || MAPBOX_TOKEN, ll = this.state.locLL || [147.93, -36.27];
        const m = this.mkMap(el, ll, 14);
        m.addControl(new (this.GL()).NavigationControl({ showCompass: false }), 'bottom-right');
        const d = document.createElement('div'); d.style.cssText = 'cursor:grab'; d.innerHTML = '<svg width="30" height="40" viewBox="0 0 30 40" style="display:block;filter:drop-shadow(0 3px 4px rgba(0,0,0,.45))"><path d="M15 1C7.3 1 1 7.2 1 14.8 1 25 15 39 15 39s14-14 14-24.2C29 7.2 22.7 1 15 1z" fill="#E53935" stroke="#fff" stroke-width="2"/><circle cx="15" cy="14.5" r="5" fill="#fff"/></svg>';
        const pin = new (this.GL()).Marker({ element: d, anchor: 'bottom', draggable: true }).setLngLat(ll).addTo(m);
        this._lpin = pin; pin.on('dragend', () => { const p = pin.getLngLat(); this.setState({ locLL: [p.lng, p.lat] }); this.locRev([p.lng, p.lat]); });
        m.on('click', e => { pin.setLngLat(e.lngLat); this.setState({ locLL: [e.lngLat.lng, e.lngLat.lat] }); this.locRev([e.lngLat.lng, e.lngLat.lat]); });
        this.lmap = m;
      };
      go();
    } else if (!el && this.lmap) { this.lmap.remove(); this.lmap = null; this._lEl = null; }
  };
  connMapRef = el => {
    if (el && el !== this._cEl) {
      this._cEl = el;
      const go = () => {
        if (!window.maplibregl) return setTimeout(go, 120);
        const token = this.props.mapboxToken || MAPBOX_TOKEN;
        const cm = new maplibregl.Map({ container: el, style: { version: 8, sources: { s: { type: 'raster', tiles: ['https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/tiles/512/{z}/{x}/{y}@2x?access_token=' + token], tileSize: 512 } }, layers: [{ id: 's', type: 'raster', source: 's' }] }, center: [134.5, -27], zoom: 3, attributionControl: { compact: true } });
        cm.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-right');
        this.cmap = cm;
        cm.on('click', e => this.dropPin([e.lngLat.lng, e.lngLat.lat]));
        const c = this.state.conn; if (c && c.pin) this.dropPin(c.pin, true);
      };
      go();
    } else if (!el && this.cmap) { this.cmap.remove(); this.cmap = null; this.cPin = null; this._cEl = null; }
  };
  dropPin(ll, silent) {
    const cm = this.cmap; if (!cm) return;
    if (!this.cPin) { const d = document.createElement('div'); d.style.cssText = 'width:22px;height:22px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:#0F172A;border:2.5px solid #fff;box-shadow:-2px 3px 8px rgba(0,0,0,.45)'; this.cPin = new maplibregl.Marker({ element: d, anchor: 'bottom' }).setLngLat(ll).addTo(cm); } else this.cPin.setLngLat(ll);
    if (!silent) this.setState(st => ({ conn: { ...st.conn, pin: ll, results: [] } }));
  }
  async geoSearch(q) {
    if (!q || q.trim().length < 3) return;
    try {
      const r = await fetch('https://nominatim.openstreetmap.org/search?format=json&countrycodes=au&limit=5&q=' + encodeURIComponent(q));
      const j = await r.json();
      this.setState(st => ({ conn: st.conn ? { ...st.conn, results: j.map(x => ({ label: x.display_name, ll: [+x.lon, +x.lat] })) } : null }));
    } catch (e) { }
  }
  provVals(s) {
    const q = s.provQ.toLowerCase().trim(), PER = 12;
    let list = PROV_CAT.map((p, i) => ({ p, i, on: s.provOn[p[0]] })).filter(x => (s.provTab === 'browse' ? !x.on : x.on) && (!q || (x.p[0] + ' ' + x.p[2]).toLowerCase().includes(q)));
    list.sort((a, b) => a.p[0].localeCompare(b.p[0]) * (s.provAsc ? 1 : -1));
    const total = list.length, pages = Math.max(1, Math.ceil(total / PER)), page = Math.min(s.provPage, pages);
    const browse = s.provTab === 'browse';
    const shown = list.slice((page - 1) * PER, page * PER);
    const card = ({ p, i, on }) => { const lbg = p[1] === 'dpirdweather' ? '#0f172a' : '#fff', lfg = '#475569'; return { bgimg: p[5] ? "url('" + p[5] + "')" : 'none', href: p[6] || '#', name: p[0], slug: p[1], desc: p[2], type: p[4], on, off: !on, mono: p[5] ? '' : monoOf(p[0]), lbg, lfg, status: on ? 'CONNECTED' : 'NOT CONNECTED', cbg: on ? '#ecfdf5' : '#fff7ed', cfg: on ? '#059669' : '#ea580c', cbd: on ? '#6ee7b7' : '#fdba74', action: on ? 'Manage' : 'Connect', open: () => this.setState({ conn: { name: p[0], step: on ? 3 : 2, farm: on ? '' : FARMS[0].name, user: '', pw: '', showPw: false, pin: null, addr: '', results: [] } }) }; };
    const mg = (c, cp, ci) => { const lk = c.linked || [true, true, false], sq = (c.sq || '').toLowerCase(); const defs = [['Weather Station', 'WS-' + (210 + ci * 7)], ['Soil Probe A', 'SP-' + (330 + ci * 5)], ['Soil Probe B', 'SP-' + (331 + ci * 5)]];
      const sensors = defs.map(([n, id], k) => ({ n, id, k, on: lk[k] })).filter(x => !sq || (x.n + x.id).toLowerCase().includes(sq)).map(x => ({ name: x.n, id: x.id, lbl: x.on ? 'Linked' : 'Link', fg: x.on ? '#059669' : '#0A2342', rbg: x.on ? '#f0fdf7' : '#fff', rbd: x.on ? '#bbf0d6' : '#E2E8F0', toggle: () => this.setState(st => { const a = (st.conn.linked || [true, true, false]).slice(); a[x.k] = !a[x.k]; return { conn: { ...st.conn, linked: a } }; }) }));
      const cid = c.cid != null ? c.cid : '\u2022'.repeat(26) + 'a' + (ci % 10) + 'e0', key = c.key != null ? c.key : '\u2022'.repeat(48) + (8900 + ci);
      return { mFarm: FARMS[ci % FARMS.length].name, edit: !!c.edit, notEdit: !c.edit, cid, key, devId: defs[0][1], devIds: defs.map(d => d[0] === 'Weather Station' ? d[1] : d[1]), nAvail: String(defs.length - lk.filter(Boolean).length) + ' Available', nLinked: String(lk.filter(Boolean).length) + ' Linked', sensors, sq: c.sq || '', noSens: sensors.length === 0 }; };
    const c = s.conn, cp = c && PROV_CAT.find(p => p[0] === c.name), ci = cp ? PROV_CAT.indexOf(cp) : 0;
    let conn = { show: false };
    if (c && cp) {
      const base = card({ p: cp, i: ci, on: s.provOn[cp[0]] }), isLoc = cp[4] === 'loc';
      const ok = !!c.farm && (isLoc ? !!c.pin : (c.user.trim() && c.pw));
      conn = { ...base, show: true, s1: c.step === 1, s2: c.step === 2, s3: c.step === 3, ...(c.step === 3 ? mg(c, cp, ci) : {}), isLoc, isCred: !isLoc, w: c.step === 3 ? '640px' : c.step === 2 && isLoc ? '620px' : (c.step === 1 && isLoc ? '720px' : '480px'),
        points: isLoc ? ['Plan farm operations with confidence', 'Optimise timing for spraying, seeding, irrigation and harvest', 'Reduce risk by staying ahead of changing conditions'].map(t => ({ t })) : [],
        title: (base.on ? 'Manage ' : 'Connect ') + cp[0].replace(' (Australia)', ''), farm: c.farm, farmFg: c.farm ? '#0f172a' : '#64748b', user: c.user, pw: c.pw, pwType: c.showPw ? 'text' : 'password', addr: c.addr,
        results: (c.results || []).map(r => ({ label: r.label, go: () => { this.dropPin(r.ll); if (this.cmap) this.cmap.flyTo({ center: r.ll, zoom: 13 }); this.setState(st => ({ conn: { ...st.conn, addr: r.label.split(',').slice(0, 3).join(','), results: [] } })); } })), hasResults: !!(c.results && c.results.length),
        pinText: c.pin ? 'Pin dropped at ' + c.pin[1].toFixed(4) + ', ' + c.pin[0].toFixed(4) : 'Use the search bar or click on the map to choose a location.', pinFg: c.pin ? '#0f172a' : '#475569',
        okBg: ok ? '#0e8fb0' : '#94a3b8', okCur: ok ? 'pointer' : 'not-allowed', okLabel: base.on ? 'Save' : 'Connect', ok };
    }
    const upd = o => this.setState(st => ({ conn: { ...st.conn, ...o } }));
    return {
      provQ: s.provQ, setProvQ: e => this.setState({ provQ: e.target.value, provPage: 1 }),
      toggleProvSort: () => this.setState(st => ({ provAsc: !st.provAsc })), provSortTitle: s.provAsc ? 'Sorted A to Z' : 'Sorted Z to A', provSortRot: s.provAsc ? 'none' : 'scaleY(-1)',
      provTabs: [['mine', 'My Providers'], ['browse', 'Browse Providers']].map(([k, label]) => ({ label, go: () => this.setState({ provTab: k, provPage: 1 }), fg: s.provTab === k ? '#0B7F7E' : '#475569', bg: s.provTab === k ? '#F0FDFA' : 'transparent', sh: s.provTab === k ? '0 1px 3px rgba(15,23,42,.08)' : 'none', fw: s.provTab === k ? 600 : 500 })),
      provGrid: s.provView === 'grid' && total > 0, provList: s.provView === 'list' && total > 0, provEmpty: total === 0,
      provGridGo: () => this.setState({ provView: 'grid' }), provListGo: () => this.setState({ provView: 'list' }),
      provGridBtn: s.provView === 'grid' ? { bg: '#0A2342', fg: '#fff' } : { bg: '#fff', fg: '#334155' }, provListBtn: s.provView === 'list' ? { bg: '#0A2342', fg: '#fff' } : { bg: '#fff', fg: '#334155' },
      provCards: shown.map(card), showBrowseMore: !browse && !q, goBrowse: () => this.setState({ provTab: 'browse', provPage: 1 }),
      provPaged: total > 0, provTotal: String(total), provRange: (total ? (page - 1) * PER + 1 : 0) + '\u2013' + Math.min(page * PER, total),
      provPages: Array.from({ length: pages }, (_, k) => ({ n: String(k + 1), go: () => this.setState({ provPage: k + 1 }), bg: k + 1 === page ? '#e0f2fe' : 'transparent', fg: k + 1 === page ? '#0369a1' : '#334155' })),
      provPrev: () => this.setState({ provPage: Math.max(1, page - 1) }), provNext: () => this.setState({ provPage: Math.min(pages, page + 1) }), provPrevFg: page > 1 ? '#334155' : '#cbd5e1', provNextFg: page < pages ? '#334155' : '#cbd5e1',
      conn, connMapRef: this.connMapRef,
      connClose: () => this.setState({ conn: null }), connNext: () => upd({ step: 2 }), connBack: () => upd({ step: 1 }),
      connEdit: () => upd({ edit: !(c && c.edit) }), connSetCid: e => upd({ cid: e.target.value }), connSetKey: e => upd({ key: e.target.value }), connSetSq: e => upd({ sq: e.target.value }), connRefresh: () => upd({ linked: [true, true, false] }),
      connSetFarm: e => upd({ farm: e.target.value }), connSetUser: e => upd({ user: e.target.value }), connSetPw: e => upd({ pw: e.target.value }), connTogglePw: () => upd({ showPw: !(c && c.showPw) }),
      connSetAddr: e => { const v = e.target.value; upd({ addr: v }); clearTimeout(this._geoT); this._geoT = setTimeout(() => this.geoSearch(v), 450); },
      connAddrKey: e => { if (e.key === 'Enter') { e.preventDefault(); this.geoSearch(e.target.value); } },
      connSubmit: () => { if (!conn.ok) return; this.setState(st => ({ conn: null, provOn: { ...st.provOn, [c.name]: true } })); },
      connDisconnect: () => this.setState(st => ({ conn: null, provOn: { ...st.provOn, [c.name]: false } })),
    };
  }
  supVals(s) {
    const SC = { Open: ['#EEF2FF', '#1E3A8A'], 'In progress': ['#FFF7ED', '#C2410C'], Waiting: ['#F1F5F9', '#475569'], Resolved: ['#ECFDF5', '#15803D'], 'On hold': ['#F8FAFC', '#64748B'] };
    const tab = s.supportTab === 'mine' ? 'mine' : 'portal', q = (s.supQ || '').toLowerCase();
    const filt = t => (!s.supFarm || t.farm === s.supFarm) && (!s.supStatus || t.status === s.supStatus) && (!s.supTopic || (t.topic || t.cat) === s.supTopic) && (!q || [t.id, t.farm, t.subject, t.desc, t.by || 'John'].join(' ').toLowerCase().includes(q));
    const portal = s.tixPortal.map((t, i) => ({ ...t, open: () => this.setState({ modal: 'tk', tkSel: t.id, tkReply: '' }), sbg: SC[t.status][0], sfg: SC[t.status][1], canFwd: !t.fwd && t.status !== 'Resolved',
      setStatus: e => { const v = e.target.value; this.setState(st => ({ tixPortal: st.tixPortal.map((x, j) => j === i ? { ...x, status: v } : x) })); },
      forward: () => this.setState(st => ({ tixPortal: st.tixPortal.map((x, j) => j === i ? { ...x, fwd: true } : x), tixMine: [{ id: 'AX-' + (1050 + st.tixMine.length), farm: t.farm, subject: t.subject, date: '03 Nov 2026', status: 'Open', note: 'Forwarded from ' + t.id, topic: t.topic, desc: t.desc, assignee: 'John (UMP Admin)' }, ...st.tixMine] })) })).filter(filt);
    const mine = s.tixMine.map(t => ({ ...t, open: () => this.setState({ modal: 'tk', tkSel: t.id, tkReply: '' }), sbg: SC[t.status][0], sfg: SC[t.status][1], noteFg: t.note.startsWith('Forwarded') ? '#6d28d9' : '#64748b' })).filter(filt);
    const rows = tab === 'mine' ? mine : portal;
    return {
      supTabs: [['portal', 'Producer Portal Tickets', s.tixPortal.length], ['mine', 'My Tickets', s.tixMine.length]].map(([k, label, n]) => { const on = tab === k; return { fw: on ? 600 : 500, tfg: on ? '#0B7F7E' : '#475569', tbg: on ? '#F0FDFA' : 'transparent', tsh: on ? '0 1px 3px rgba(15,23,42,.08)' : 'none', bd: 'transparent', ul: 'none', cbg: on ? (k === 'portal' ? '#ccfbf1' : '#ede9fe') : '#dde5f0', cfg: on ? (k === 'portal' ? '#0b6b6a' : '#6d28d9') : '#5b6b82', label, n: String(n), isPortal: k === 'portal', isMine: k === 'mine', bg: on ? '#0A2342' : '#fff', fg: on ? '#fff' : '#475569', sh: on ? '0 0 0 1px rgba(59,130,246,.16),0 6px 18px rgba(26,76,122,.26)' : 'inset 0 0 0 1px #E2E8F0', pill: on ? 'rgba(255,255,255,.18)' : '#f1f5f9', pillFg: on ? '#fff' : '#475569', go: () => this.setState({ supportTab: k }) }; }),
      supPortal: tab === 'portal', supMineTab: tab === 'mine', supMine: tab === 'mine' && rows.length > 0, supEmpty: tab === 'mine' && rows.length === 0, supRows: rows,
      supFarm: s.supFarm || '', setSupFarm: e => this.setState({ supFarm: e.target.value }), supStatus: s.supStatus, setSupStatus: e => this.setState({ supStatus: e.target.value }), supTopic: s.supTopic || '', setSupTopic: e => this.setState({ supTopic: e.target.value }), supQ: s.supQ, setSupQ: e => this.setState({ supQ: e.target.value }),
      openNewTicket: () => { this.setState({ modal: 'ticket', nt: { subject: '', farm: '', topic: '', files: [] } }); if (this.ntDescRef && this.ntDescRef.current) this.ntDescRef.current.innerHTML = ''; },
      topics: TOPICS, ntDescRef: this.ntDescRef || (this.ntDescRef = React.createRef()),
      ntCmd: Object.fromEntries(['bold', 'italic', 'underline', 'strikeThrough', 'insertUnorderedList', 'insertOrderedList', 'undo', 'redo'].map(c => [c, e => { e.preventDefault(); if (this.ntDescRef.current) this.ntDescRef.current.focus(); document.execCommand(c); }])),
      ntAddFiles: e => { const fs = Array.from(e.target.files || []).map(f => f.name); e.target.value = ''; this.setState(st => ({ nt: { ...st.nt, files: [...(st.nt.files || []), ...fs] } })); },
      ntFiles: (s.nt.files || []).map((name, i) => ({ name, remove: () => this.setState(st => ({ nt: { ...st.nt, files: st.nt.files.filter((_, j) => j !== i) } })) })),
      ntBg: s.nt.subject.trim() && s.nt.topic ? '#0A2342' : '#94a3b8', ntCur: s.nt.subject.trim() && s.nt.topic ? 'pointer' : 'not-allowed',
      nt: s.nt, setNt: Object.fromEntries(['subject', 'farm', 'topic'].map(k => [k, e => { const v = e.target.value; this.setState(st => ({ nt: { ...st.nt, [k]: v } })); }])),
      submitTicket: () => { const n = s.nt; if (!n.subject.trim() || !n.topic) return; const el = this.ntDescRef.current, desc = (el && el.innerText.trim()) || n.subject; this.setState(st => ({ modal: null, supportTab: 'mine', tixMine: [{ id: 'AX-' + (1050 + st.tixMine.length), farm: n.farm || 'All farms', subject: n.subject, date: '05 Nov 2026', status: 'Open', note: '', topic: n.topic, desc, files: n.files || [], assignee: 'AxisTech Support' }, ...st.tixMine] })); },
    };
  }
  netMapRef = el => {
    if (el && el !== this._nEl) {
      this._nEl = el;
      const go = () => {
        if (!window.maplibregl) return setTimeout(go, 120);
        const token = this.props.mapboxToken || MAPBOX_TOKEN;
        const nm = new maplibregl.Map({ container: el, interactive: false, attributionControl: false, style: { version: 8, sources: { s: { type: 'raster', tiles: ['https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/512/{z}/{x}/{y}@2x?access_token=' + token], tileSize: 512 } }, layers: [{ id: 's', type: 'raster', source: 's' }] }, center: [147.68, -36.3], zoom: 7.4 });
        this.nmap = nm;
        nm.on('load', () => fetch('assets/upper-murray-map.json').then(r => r.json()).then(fc => {
          if (this.nmap !== nm) return;
          nm.addSource('um', { type: 'geojson', data: fc });
          nm.addLayer({ id: 'f', type: 'fill', source: 'um', filter: ['==', ['get', 'k'], 'sub'], paint: { 'fill-color': ["get", "COLOR"], 'fill-opacity': 0.62 } });
          nm.addLayer({ id: 'l', type: 'line', source: 'um', filter: ['==', ['get', 'k'], 'sub'], paint: { 'line-color': ['get', 'BORDER_COLOR'], 'line-width': 1.6 } });
          nm.addSource('farms', { type: 'geojson', data: { type: 'FeatureCollection', features: FARMS.map(f => ({ type: 'Feature', properties: { live: f.status === 'Live' }, geometry: { type: 'Point', coordinates: [f.lng, f.lat] } })) } });
          nm.addLayer({ id: 'p', type: 'circle', source: 'farms', paint: { 'circle-radius': 5.5, 'circle-color': '#dc2626', 'circle-stroke-color': '#fff', 'circle-stroke-width': 2 } });
          nm.fitBounds([[fc.bbox[0], fc.bbox[1]], [fc.bbox[2], fc.bbox[3]]], { padding: 20, duration: 0 });
        }));
      };
      go();
    } else if (!el && this.nmap) { this.nmap.remove(); this.nmap = null; this._nEl = null; }
  };
  anVals(s) {
    const T = s.reportTab || 'overview';
    const go = o => () => this.setState({ menuOpen: false, ...o });
    const G = ['#ecfdf5', '#047857'], Bd = ['#fef2f2', '#b91c1c'], N = ['#f1f5f9', '#475569'];
    const spark = v => { const mx = Math.max(...v), mn = Math.min(...v), r = mx - mn || 1; return 'M' + v.map((y, i) => (i / (v.length - 1) * 54 + 1).toFixed(1) + ' ' + (18 - (y - mn) / r * 16).toFixed(1)).join(' L'); };
    const K = (label, value, delta, good, note, sp) => { const c = good === null ? N : good ? G : Bd; return { label, value, delta, dBg: c[0], dFg: c[1], note: note || 'vs last 30 days', spark: spark(sp), sc: good === false ? '#ef4444' : '#14b8a6' }; };
    const W = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'], M = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
    const line = (title, sub, labels, series, flex) => { const mx = Math.max(...series.flatMap(x => x[2])) * 1.12 || 1, n = labels.length; return { isLine: true, title, sub, flex: flex || '2 1 460px', labels: labels.map((l, i) => ({ l: n > 8 && i % 2 ? '' : l })), series: series.map(([name, color, v, suf]) => { const d = 'M' + v.map((y, i) => (i / (n - 1) * 600).toFixed(1) + ' ' + (196 - y / mx * 180).toFixed(1)).join(' L'); return { name, color, d, area: d + ' L600 200 L0 200 Z', last: v[v.length - 1] + (suf || '') }; }) }; };
    const donut = (title, sub, items, unit, flex) => { const tot = items.reduce((a, x) => a + x[1], 0), C = 2 * Math.PI * 54; let cum = 0; return { isDonut: true, title, sub, flex: flex || '1 1 320px', total: String(tot), unit, segs: items.map(([label, v, color]) => { const len = v / tot * C; const sg = { label, v: String(v), color, pct: Math.round(v / tot * 100) + '%', dash: len.toFixed(2) + ' ' + (C - len).toFixed(2), off: (-cum).toFixed(2) }; cum += len; return sg; }) }; };
    const bars = (title, sub, items, color, flex) => { const mx = Math.max(...items.map(x => x[1])) || 1; return { isBars: true, title, sub, flex: flex || '1 1 320px', rows: items.map(([label, v, suf], i) => ({ rank: String(i + 1), rankBg: i === 0 ? '#f0fdfa' : '#f8fafc', rankFg: i === 0 ? '#0f766e' : '#64748b', label, v: v + (suf || ''), w: Math.round(v / mx * 100) + '%', c: color || '#14b8a6' })) }; };
    const list = (title, sub, items, flex) => ({ isList: true, title, sub, flex: flex || '1 1 320px', rows: items.map(([t, sb, right, c]) => ({ title: t, sub: sb, right, dot: STATUS[c].dot, ring: STATUS[c].bg, rfg: STATUS[c].fg })) });
    const heat = (title, sub) => ({ isHeat: true, title, sub, flex: '2 1 460px', hours: ['6a', '8a', '10a', '12p', '2p', '4p', '6p', '8p'].map(l => ({ l })), days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, di) => ({ d, cells: Array.from({ length: 8 }, (_, hi) => { const v = Math.max(0.08, Math.min(1, (di < 5 ? 0.55 : 0.25) + (hi === 0 || hi === 1 ? 0.35 : hi === 6 ? 0.25 : 0) - Math.abs(hi - 1.5) * 0.04 + ((di * 7 + hi * 3) % 5) * 0.05)); return { o: v.toFixed(2), t: d + ' ' + ['6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm'][hi] + ': ' + Math.round(v * 40) + ' logins' }; }) })) });
    const flow = (title, sub, steps) => ({ isFlow: true, title, sub, flex: '2 1 460px', steps: steps.map(([label, v, pct], i) => ({ label, v, pct, arrow: i < steps.length - 1, bg: ['#f0fdfa', '#ecfeff', '#eff6ff', '#f5f3ff'][i % 4] })) });
    const I = (happening, changed, attention, action, actLabel, actGo) => [['What is happening', happening, '#0f766e'], ['What changed', changed, '#2563eb'], ['Needs attention', attention, '#d97706'], ['Recommended action', action, '#7c3aed']].map(([k, text, c], i) => ({ k, text, c, hasAction: i === 3 && !!actLabel, action: actLabel, go: actGo }));
    const D = {
      overview: {
        insights: I('Platform activity is up 18% this month, led by Riverbend Farm and Greg Farm.', 'Kookaburra Farm went live and 4 new devices connected.', 'Janes sync failed and Gallagher credentials expired, pausing soil and livestock data.', 'Re-authenticate Gallagher and retry the Janes sync.', 'Open providers', go({ page: 'providers' })),
        kpis: [K('Total farms', '10', '+1', true, '', [6, 7, 7, 8, 9, 10]), K('Total users', '24', '+3', true, '', [16, 18, 19, 21, 21, 24]), K('Total devices', '38', '+4', true, '', [26, 29, 31, 34, 34, 38]), K('Total providers', '14', '+2', true, '', [9, 10, 12, 12, 12, 14]), K('Active alerts', '5', '+2', false, '', [2, 4, 3, 3, 3, 5]), K('Open tickets', '4', '\u22121', true, '', [6, 5, 5, 6, 5, 4])],
        charts: [line('Platform activity', 'Sessions and data syncs per week', W, [['Sessions', '#14b8a6', [210, 228, 240, 236, 262, 280, 274, 301, 318, 309, 334, 352]], ['Syncs', '#6366f1', [150, 160, 158, 171, 180, 176, 190, 197, 205, 214, 220, 231]]]), line('User activity', 'Weekly active users', W, [['Active users', '#0ea5e9', [9, 10, 10, 11, 11, 12, 12, 13, 12, 13, 14, 14]]], '1 1 320px'), line('Device connectivity', 'Share of devices online', W, [['Online', '#10b981', [92, 93, 91, 94, 95, 93, 90, 92, 94, 95, 93, 89], '%']], '1 1 320px'), list('Recent platform insights', 'Generated from the last 7 days', [['Riverbend Farm is the most active farm', '48 logins, 31% of all activity', 'Top', 'green'], ['Offline devices rose to 4', 'Greg Farm and Cedar Ridge Farm affected', '+2', 'red'], ['Weather dashboards drive engagement', '412 views this month', '32%', 'blue'], ['2 invitations still pending', 'Willow Creek Farm and Stonybrook Farm owners', 'Follow up', 'amber']], '2 1 460px')],
      },
      users: {
        insights: I('19 of 24 users signed in during the last 30 days.', 'Weekly active users rose from 11 to 14.', '2 accounts have been inactive for 90+ days and 2 invites are pending.', 'Resend invitations to the Willow Creek Farm and Stonybrook Farm owners.', 'Open users', go({ page: 'users', userTab: 'list' })),
        kpis: [K('Total users', '24', '+3', true, '', [18, 19, 20, 21, 22, 24]), K('Active users (30d)', '19', '+4', true, '', [13, 14, 15, 15, 17, 19]), K('Weekly active', '14', '+3', true, '', [10, 11, 11, 12, 13, 14]), K('Avg logins / user', '9.2', '+1.4', true, '', [6.8, 7.1, 7.6, 8, 8.4, 9.2]), K('Inactive accounts', '2', '0', null, '', [2, 3, 2, 2, 2, 2]), K('Pending invites', '2', '+1', false, '', [0, 1, 1, 1, 1, 2])],
        charts: [line('Login trend', 'Logins per week', W, [['Logins', '#14b8a6', [52, 58, 61, 57, 66, 70, 68, 75, 79, 77, 84, 90]]]), donut('User role distribution', 'Across all farms', [['UMP Admin', 2, '#0f766e'], ['Owner', 10, '#f59e0b'], ['User', 8, '#3b82f6'], ['Viewer', 4, '#94a3b8']], 'users'), bars('Most active farms', 'Logins in the last 30 days', [['Riverbend Farm', 48], ['Greg Farm', 37], ['Ed Farm', 22], ['Hillview Farm', 14], ['Bluegum Farm', 11]]), heat('Login activity heatmap', 'When users sign in, by day and time'), bars('User engagement leaderboard', 'Sessions this month', [['Emma Barnes', 26], ['Tom Whitfield', 21], ['Sarah McKenzie', 17], ['Mia Chen', 12], ['Priya Nair', 9]], '#6366f1'), list('Inactive user recommendations', 'Accounts worth a check-in', [['Liam O\u2019Connor', 'Invited 3 weeks ago \u2022 Willow Creek Farm', 'Resend invite', 'amber'], ['Ben Kowalski', 'Invited 2 weeks ago \u2022 Stonybrook Farm', 'Resend invite', 'amber'], ['Noah Fraser', 'No sign-in for 94 days \u2022 Agritech Farm', 'Review', 'grey']])],
      },
      growth: {
        insights: I('The network now covers ' + FARMS.length + ' farms across ' + new Set(FARMS.map(f => f.zone)).size + ' of ' + ZONE_LIST.length + ' zones.', '1 farm and 6 users joined in the last 30 days.', (ZONE_LIST.length - new Set(FARMS.map(f => f.zone)).size) + ' zones have no farms yet, so regional benchmarks there are thin.', 'Prioritise onboarding farms in zones without coverage.', 'Open farms', go({ page: 'farms' })),
        kpis: [K('Farms created', '10', '+1', true, '', [3, 4, 6, 7, 9, 10]), K('Farms shared', '8', '+2', true, '', [2, 3, 5, 6, 6, 8]), K('New users', '6', '+3', true, '', [1, 2, 2, 3, 3, 6]), K('New providers', '2', '+2', true, '', [0, 1, 0, 1, 0, 2]), K('Sharing participation', '80%', '+20pt', true, '', [40, 50, 60, 60, 60, 80])],
        charts: [line('Farm growth', 'Total farms onboarded', M, [['Farms', '#14b8a6', [3, 4, 6, 7, 9, 10]]], '1 1 320px'), line('User growth', 'Total users', M, [['Users', '#6366f1', [8, 11, 15, 18, 21, 24]]], '1 1 320px'), line('Network expansion', 'Connected devices and providers', M, [['Devices', '#0ea5e9', [12, 18, 24, 29, 34, 38]], ['Providers', '#f59e0b', [5, 7, 9, 11, 12, 14]]]), { isMap: true, title: 'Upper Murray network map', sub: 'Farms by district', flex: '2 1 460px' }, bars('Fastest growing farms', 'New users and devices this quarter', [['Riverbend Farm', 7], ['Kookaburra Farm', 6], ['Greg Farm', 5], ['Cedar Ridge Farm', 4], ['Ed Farm', 3]]), list('Growth by period', 'Farms added', [['November', '1 farm \u2022 Kookaburra Farm', '+1', 'green'], ['October', '2 farms \u2022 Bluegum Farm, Stonybrook Farm', '+2', 'green'], ['September', '1 farm \u2022 Cedar Ridge Farm', '+1', 'green'], ['August', '2 farms \u2022 Willow Creek Farm, Hillview Farm', '+2', 'green']])],
      },
      health: {
        insights: I('32 of 38 devices are online and 12 of 14 providers are healthy.', 'Offline devices rose from 2 to 4 this week.', 'Janes and Gallagher need attention. Greg Farm has repeated drop-outs.', 'Check the gateway at Greg Farm and re-authenticate Gallagher.', 'Open devices', go({ page: 'devices', devStatus: 'Offline' })),
        kpis: [K('Total devices', '38', '+4', true, '', [26, 29, 31, 34, 34, 38]), K('Online', '32', '+1', true, '', [27, 28, 30, 31, 31, 32]), K('Offline', '4', '+2', false, '', [1, 2, 2, 2, 2, 4]), K('Healthy providers', '12 / 14', '\u22121', false, '', [12, 13, 13, 13, 13, 12]), K('Connection success', '96.4%', '\u22121.2pt', false, '', [98, 97.8, 97.9, 97.6, 97.6, 96.4])],
        charts: [line('Device uptime', 'Share of devices reporting', W, [['Uptime', '#10b981', [97, 98, 96, 97, 98, 97, 95, 96, 97, 96, 94, 92], '%']]), line('Offline devices', 'Devices with no reading for 3+ hours', W, [['Offline', '#ef4444', [1, 1, 2, 1, 1, 2, 3, 2, 2, 2, 3, 4]]], '1 1 320px'), bars('Provider connection health', 'Successful syncs, last 30 days', [['Helios', 99.8, '%'], ['SILO', 99.5, '%'], ['Optiweigh', 98.2, '%'], ['Gallagher', 71, '%'], ['Janes', 64, '%']], '#10b981'), donut('Device activity summary', 'Current status', [['Online', 32, '#10b981'], ['Offline', 4, '#ef4444'], ['Installing', 2, '#f59e0b']], 'devices'), list('Providers requiring attention', 'Ordered by impact', [['Janes', 'Sync failed \u2022 no devices found \u2022 4 farms', 'Retry', 'red'], ['Gallagher', 'Credentials expired 2 days ago \u2022 2 farms', 'Re-auth', 'red']]), list('Recurring connectivity issues', 'Farms with 3+ drop-outs this month', [['Greg Farm', '5 drop-outs \u2022 River Flat probes', '5\u00d7', 'amber'], ['Cedar Ridge Farm', '3 drop-outs \u2022 Weather station', '3\u00d7', 'amber']])],
      },
      usage: {
        insights: I('Dashboards were viewed 1,284 times this month, mostly weather.', 'Weekly views grew from 240 to 444.', 'Analytics and data sharing pages are rarely opened.', 'Promote the regional benchmark view in the next producer update.', '', null),
        kpis: [K('Dashboard views', '1,284', '+18%', true, '', [880, 940, 1010, 1100, 1180, 1284]), K('Farm views', '642', '+9%', true, '', [520, 540, 570, 590, 610, 642]), K('Device views', '418', '+12%', true, '', [300, 320, 340, 370, 390, 418]), K('Report views', '96', '\u22124%', false, '', [110, 104, 99, 101, 100, 96]), K('Most accessed', 'Weather', '32%', null, 'of all views', [20, 24, 26, 28, 30, 32])],
        charts: [bars('Most viewed pages', 'Views this month', [['Weather stations', 412], ['Regional map', 268], ['Heat stress', 231], ['Biomass', 174], ['Season', 129]]), bars('Most viewed farms', 'Farm detail views', [['Riverbend Farm', 118], ['Greg Farm', 96], ['Ed Farm', 71], ['Kookaburra Farm', 64], ['Hillview Farm', 52]], '#6366f1'), line('Feature usage trend', 'Views per week by area', W, [['Weather', '#14b8a6', [80, 84, 90, 88, 96, 101, 99, 108, 112, 110, 118, 124]], ['Devices', '#6366f1', [30, 32, 35, 34, 36, 40, 39, 42, 44, 43, 46, 48]], ['Analytics', '#f59e0b', [10, 9, 11, 10, 8, 9, 10, 9, 8, 9, 8, 7]]]), flow('User navigation flow', 'Most common path through the portal', [['Home', '1,284', '100%'], ['Farms', '842', '66%'], ['Farm detail', '612', '48%'], ['Devices', '318', '25%']]), list('Underutilised features', 'Low use relative to availability', [['Data sharing', '14 views \u2022 8 farms eligible', 'Low', 'amber'], ['Analytics', '96 views \u2022 down 4%', 'Low', 'amber'], ['Alert rules', '22 views \u2022 most farms use defaults', 'Low', 'grey']])],
      },
      alerts: {
        insights: I('5 alerts are active, 2 of them critical.', 'Alert volume rose 15% this week, mainly device offline alerts.', 'Heat load alerts recur on Riverbend Farm.', 'Review heat load thresholds with the Riverbend Farm owner.', 'Open support', go({ page: 'support' })),
        kpis: [K('Active alerts', '5', '+2', false, '', [3, 2, 4, 3, 3, 5]), K('Critical alerts', '2', '+1', false, '', [1, 0, 1, 1, 1, 2]), K('Open tickets', '4', '\u22121', true, '', [6, 5, 5, 6, 5, 4]), K('Avg resolution', '1.8 days', '\u22120.4d', true, '', [2.6, 2.4, 2.3, 2.2, 2.2, 1.8])],
        charts: [line('Alert volume', 'Alerts fired per week', W, [['Alerts', '#f59e0b', [14, 16, 12, 18, 17, 15, 19, 21, 18, 20, 22, 25]]], '1 1 320px'), line('Ticket volume', 'Tickets opened and resolved', W, [['Opened', '#6366f1', [4, 3, 5, 4, 3, 4, 6, 5, 4, 3, 4, 3]], ['Resolved', '#10b981', [3, 4, 4, 4, 3, 3, 5, 5, 5, 3, 4, 4]]], '1 1 320px'), donut('Alerts by category', 'Last 30 days', [['Devices', 19, '#3b82f6'], ['Weather', 34, '#0ea5e9'], ['Livestock', 15, '#f59e0b'], ['Providers', 9, '#8b5cf6'], ['System', 4, '#94a3b8']], 'alerts'), donut('Tickets by status', 'All open and recent tickets', [['Open', 2, '#f59e0b'], ['In progress', 2, '#3b82f6'], ['Resolved', 3, '#10b981']], 'tickets'), bars('Most common issues', 'Tickets and alerts combined', [['Device offline', 19], ['Sync failures', 11], ['Heat load', 9], ['Login access', 5], ['Data accuracy', 4]], '#f59e0b'), list('Recurring alert types', 'Firing 3+ times this month', [['Heat load high', 'Riverbend Farm \u2022 6 times', 'Critical', 'red'], ['Device offline', 'Greg Farm \u2022 5 times', 'Warning', 'amber'], ['Wind gusts', 'Agritech Farm \u2022 3 times', 'Info', 'blue']])],
      },
    };
    return {
      anTabs: [['overview', 'Overview'], ['users', 'Engagement'], ['growth', 'Growth'], ['health', 'Devices'], ['usage', 'Usage'], ['alerts', 'Alerts']].map(([k, label]) => { const on = T === k; return { label, go: () => this.setState({ reportTab: k }), bg: on ? '#0A2342' : 'transparent', fg: on ? '#fff' : '#475569', bd: on ? '#0f172a' : 'transparent' }; }),
      an: (() => { const d = D[T] || D.overview; const c = d.charts.map((ch, i) => i === 0 ? { ...ch, flex: '1 1 100%', h: '260px', primary: true } : { ...ch, h: '180px' }); return { ...d, charts: c }; })(), netMapRef: this.netMapRef,
    };
  }
  setBasemap(k) {
    this.setState({ basemap: k });
    const map = this.map; if (!map) return;
    map.getStyle().layers.forEach(l => { if (l.id.startsWith('bm-')) map.setLayoutProperty(l.id, 'visibility', l.id.startsWith('bm-' + k + '-') ? 'visible' : 'none'); });
    this.applyRegionTone(k);
  }
  applyRegionTone(k) {
    const map = this.map; if (!map || !map.getLayer('sub-fill')) return;
    const light = ['light', 'streets', 'navDay', 'outdoors'].includes(k);
    map.setPaintProperty('sub-fill', 'fill-opacity', light ? 0.58 : 0.34);
    map.setPaintProperty('sub-line', 'line-color', light ? '#b7791f' : '#fcd27a');
  }
  applyView() {
    const own = this.state.viewAs === 'owner';
    Object.entries(this.markers || {}).forEach(([n, m]) => { m.getElement().style.display = (this.state.farmLayer === false || (own && n !== OWNER_FARM)) ? 'none' : ''; });
    (this.devMarkers || []).forEach(m => { m.getElement().style.display = (!this.state.deviceLayer || (own && m._farm !== OWNER_FARM)) ? 'none' : ''; });
    if (own && this.map) { const f = FARMS.find(x => x.name === OWNER_FARM); this.map.flyTo({ center: [f.lng, f.lat], zoom: 10.5, duration: 800 }); }
  }
  setFarmLayer(on) {
    this.setState({ farmLayer: on });
    Object.values(this.markers || {}).forEach(m => { m.getElement().style.display = on ? '' : 'none'; });
    if (!on) this.setState({ pop: null });
  }
  setDeviceLayer(on) {
    this.setState({ deviceLayer: on });
    const map = this.map; if (!map) return;
    if (!this.devMarkers) {
      const WX = '<svg width="20" height="20" viewBox="0 0 48 48" fill="none" stroke="#0f9488" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 40h20a7 7 0 0 0 .6-14A10 10 0 0 0 15.5 27 6.6 6.6 0 0 0 14 40z"></path><path d="M14.6 25.5a9.5 9.5 0 0 1 18.4-3.2"></path><path d="M24 4l2.5 4.5h-5z" fill="#0f9488" stroke-width="1.5"></path><path d="M9.5 10l4.6 2.4-3.2 3.2z" fill="#0f9488" stroke-width="1.5"></path><path d="M38.5 10l-2.4 4.6-3.2-3.2z" fill="#0f9488" stroke-width="1.5"></path><path d="M4 22l4.5-2.5v5z" fill="#0f9488" stroke-width="1.5"></path></svg>';
      const SOIL = '<svg width="20" height="20" viewBox="0 0 48 48"><path d="M22 4h4v22l-2 5-2-5z" fill="#7a4a35"></path><path d="M22 10h3M22 14h3M22 18h3" stroke="#fff" stroke-width="1.4" stroke-linecap="round"></path><path d="M4 44c2-9 9-13 15-13 2 0 3 1 5 3 2-2 3-3 5-3 7 0 13 5 15 13z" fill="#7a4a35"></path><circle cx="14" cy="39" r="2" fill="none" stroke="#fff" stroke-width="1.3"></circle><circle cx="32" cy="38" r="2" fill="none" stroke="#fff" stroke-width="1.3"></circle><circle cx="23" cy="41" r="1.4" fill="#fff"></circle><circle cx="38" cy="42" r="1.1" fill="#fff"></circle></svg>';
      this.devMarkers = [];
      FARMS.forEach(f => {
        (() => { const k = DPN.indexOf(f.name), p = DPOS[k]; if (!p) return [['Weather station', WX, [0.028, 0.012]], ['Soil probe', SOIL, [-0.026, -0.016]]]; const w = p[0], sp = p[k < 4 ? 2 : 1]; return [['Weather station', WX, [w[0] - f.lng, w[1] - f.lat]], ['Soil probe', SOIL, [sp[0] - f.lng, sp[1] - f.lat]]]; })().forEach(([label, icon, [dx, dy]]) => {
          const el = document.createElement('div');
          el.title = f.name + ' \u00b7 ' + label;
          const inner = document.createElement('div');
          inner.dataset.dpin = '1';
          inner.style.cssText = 'width:32px;height:32px;border-radius:50%;background:#fff;box-shadow:0 0 0 1px rgba(15,23,42,.08),0 3px 8px rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center;transition:transform .12s';
          inner.innerHTML = icon;
          el.appendChild(inner); el.style.cursor = 'default';
          const m = new maplibregl.Marker({ element: el }).setLngLat([f.lng + dx, f.lat + dy]).addTo(map);
          m._farm = f.name; this.devMarkers.push(m);
        });
      });
    }
    const own = this.state.viewAs === 'owner';
    this.devMarkers.forEach(m => { m.getElement().style.display = on && (!own || m._farm === OWNER_FARM) ? '' : 'none'; });
    map.fire('zoom');
  }
  setBoundary(on) {
    this.setState({ boundary: on });
    const map = this.map; if (!map) return;
    ['sub-fill', 'loc-line', 'sub-line'].forEach(id => map.getLayer(id) && map.setLayoutProperty(id, 'visibility', on ? 'visible' : 'none'));
  }
  initInset(el) {
    const box = el.parentNode && el.parentNode.querySelector('[data-inset]');
    if (!box || box.dataset.ready) return; box.dataset.ready = '1';
    const inset = new maplibregl.Map({ container: box, interactive: false, attributionControl: false, center: [134, -28], zoom: 1.75,
      style: { version: 8, sources: { sat: { type: 'raster', tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'], tileSize: 256 } }, layers: [{ id: 'sat', type: 'raster', source: 'sat', paint: { 'raster-saturation': -0.3, 'raster-brightness-max': 0.85 } }] } });
    inset.on('load', () => {
      inset.fitBounds([[113, -44], [154, -10]], { padding: 2, duration: 0 });
      inset.addSource('um', { type: 'geojson', data: { type: 'Feature', geometry: { type: 'Polygon', coordinates: [UM_RING] } } });
      inset.addSource('box', { type: 'geojson', data: { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[145.6, -35], [149.8, -35], [149.8, -37.4], [145.6, -37.4], [145.6, -35]]] } } });
      inset.addLayer({ id: 'box', type: 'line', source: 'box', paint: { 'line-color': '#ffffff', 'line-width': 1 } });
      inset.addLayer({ id: 'um', type: 'fill', source: 'um', paint: { 'fill-color': '#facc15', 'fill-opacity': 0.95 } });
    });
    this.inset = inset;
  }
  flyTo(f) {
    if (!this.map) return;
    this.setState({ pop: null });
    this.map.flyTo({ center: [f.lng, f.lat], zoom: 13, speed: 1.4 });
    this.map.once('moveend', () => this.showPop(f));
  }
  cbv(st, locked, toggle) { const on = st > 0; return { bg: on ? NAVY : '#fff', bd: on ? NAVY : '#cbd5e1', chk: st === 1 ? 1 : 0, dash: st === 2 ? 1 : 0, cur: locked ? 'default' : 'pointer', toggle: locked ? () => {} : toggle }; }
  atVals(s) {
    const q = (s.atQ || '').toLowerCase(), d = s.atDraft;
    const rows = s.tpls.map((t, i) => ({ t, i })).filter(({ t }) => (!s.atSrc || t.source === s.atSrc) && (!q || (t.name + ' ' + t.key + ' ' + t.source).toLowerCase().includes(q)));
    const setD = k => e => { const v = e.target.value; this.setState(st => ({ atDraft: { ...st.atDraft, [k]: v } })); };
    const patch = fn => this.setState(st => ({ atDraft: fn({ ...st.atDraft }) }));
    const ok = d && d.name && d.key && d.source && d.cmps.length, lk = !!(d && d.locked);
    const SYM = { 'rises above': '>', 'reaches or exceeds': '\u2265', 'falls below': '<', 'drops to or below': '\u2264', is: '=', 'is not': '\u2260', 'is one of': 'IN', 'is not one of': 'NOT IN' };
    const RULES = [['required', 'Required', 'A value must be provided', ''], ['min', 'Min', 'Smallest value allowed', 'e.g. 0'], ['max', 'Max', 'Largest value allowed', 'e.g. 100'], ['minLength', 'Min length', 'Fewest characters allowed', 'e.g. 1'], ['maxLength', 'Max length', 'Most characters allowed', 'e.g. 20'], ['pattern', 'Pattern', 'Value must match a regex', 'e.g. ^[0-9]+$']];
    const rules = (d && d.rules) || [], all = !!d && d.cmps.length === CMPS.length;
    return {
      q: s.atQ || '', setQ: e => this.setState({ atQ: e.target.value }), src: s.atSrc || '', setSrc: e => this.setState({ atSrc: e.target.value }), sources: TPL_SRC,
      rows: rows.map(({ t, i }) => ({ name: t.name, reading: t.unit ? t.key + ' \u00b7 ' + t.unit : t.key, cmps: t.cmps, source: t.source, created: t.created,
        edit: () => this.setState({ atEdit: i, atRuleMenu: false, atDraft: { def: '', locked: false, rules: [], ...t, cmps: [...t.cmps], rules: [...(t.rules || [])] } }),
        del: () => this.setState(st => ({ tpls: st.tpls.filter((_, j) => j !== i) })) })),
      empty: rows.length === 0,
      openNew: () => this.setState({ atEdit: -1, atRuleMenu: false, atDraft: { name: '', key: '', unit: '', def: '', locked: false, rules: [], cmps: [], source: s.atSrc || 'Soil Probe' } }),
      modal: !!d, title: s.atEdit === -1 ? 'Create alert template' : 'Edit alert template', d: d || {}, set: { name: setD('name'), key: setD('key'), unit: setD('unit'), source: setD('source'), def: setD('def') },
      cmpCount: d ? d.cmps.length + ' of ' + CMPS.length + ' selected' : '', canAll: !lk, allLabel: all ? 'Clear all' : 'Select all',
      selectAll: () => patch(x => ({ ...x, cmps: all ? [] : [...CMPS] })),
      cmpOpts: CMPS.map(label => { const on = !!d && d.cmps.includes(label); return { label, sym: SYM[label], fw: on ? 600 : 500, fg: on ? '#0B7F7E' : '#334155', bg: on ? '#F0FDFA' : '#fff', bd: on ? '#5EEAD4' : '#E2E8F0', sh: on ? '0 0 0 3px rgba(59,130,246,.08)' : 'none', symBg: on ? '#DBEAFE' : '#F1F5F9', symFg: on ? '#0B7F7E' : '#475569', cbg: on ? '#0B7F7E' : '#fff', cbd: on ? '#0B7F7E' : '#CBD5E1', chk: on ? 1 : 0, shape: lk ? '50%' : '4px',
        toggle: () => patch(x => ({ ...x, cmps: x.locked ? [label] : on ? x.cmps.filter(c => c !== label) : CMPS.filter(c => c === label || x.cmps.includes(c)) })) }; }),
      defTag: lk ? '(required when locked)' : '(optional)',
      toggleLock: () => patch(x => ({ ...x, locked: !x.locked, cmps: !x.locked ? x.cmps.slice(0, 1) : x.cmps })),
      lockBd: lk ? '#5EEAD4' : '#E2E8F0', lockIconBg: lk ? '#EFF6FF' : '#F1F5F9', lockIconFg: lk ? '#0B7F7E' : '#64748B', lockTrack: lk ? '#0A2342' : '#CBD5E1', lockKnob: lk ? '18px' : '2px',
      ruleMenu: !!s.atRuleMenu, toggleRuleMenu: () => this.setState(st => ({ atRuleMenu: !st.atRuleMenu })),
      ruleOpts: RULES.map(([type, label, hint]) => { const used = rules.some(r => r.type === type); return { label, hint, used, op: used ? .45 : 1, cur: used ? 'default' : 'pointer', add: () => { if (used) return; this.setState(st => ({ atRuleMenu: false, atDraft: { ...st.atDraft, rules: [...(st.atDraft.rules || []), { type, value: '' }] } })); } }; }),
      noRules: rules.length === 0,
      rules: rules.map((r, i) => { const R = RULES.find(x => x[0] === r.type) || RULES[0]; return { label: R[1], hint: R[2], ph: R[3], hasVal: r.type !== 'required', value: r.value, setValue: e => { const v = e.target.value; patch(x => ({ ...x, rules: x.rules.map((y, j) => j === i ? { ...y, value: v } : y) })); }, remove: () => patch(x => ({ ...x, rules: x.rules.filter((_, j) => j !== i) })) }; }),
      close: () => this.setState({ atEdit: null, atDraft: null, atRuleMenu: false }),
      saveLabel: s.atEdit === -1 ? 'Create template' : 'Save changes', saveBg: ok ? '#0A2342' : '#94A3B8', saveCur: ok ? 'pointer' : 'not-allowed',
      save: () => { if (!ok) return; this.setState(st => { const list = [...st.tpls]; const now = new Date(); const dt = String(now.getDate()).padStart(2, '0') + '/' + String(now.getMonth() + 1).padStart(2, '0') + '/' + now.getFullYear(); if (st.atEdit === -1) list.unshift({ ...st.atDraft, created: dt }); else list[st.atEdit] = { ...st.atDraft }; return { tpls: list, atEdit: null, atDraft: null, atRuleMenu: false }; }); },
    };
  }
  roleVals(s) {
    const d = s.roleDraft, isNew = s.roleSel === -1, lk = !!d.locked;
    const tri = a => a.every(Boolean) ? 1 : a.some(Boolean) ? 2 : 0;
    const setM = fn => this.setState(st => { const dr = clone(st.roleDraft); fn(dr.m); return { roleDraft: dr }; });
    const all = d.m.flat(), sel = all.filter(Boolean).length, nameOk = d.name.trim().length > 0;
    const err = s.roleTried && !nameOk;
    return {
      userTotal: USERS.length, roleTotal: s.roleList.length, roleCountLabel: s.roleList.length + ' roles',
      roleDefs: s.roleList.map((r, i) => { const on = i === s.roleSel; const n = r.key ? ROLE_COUNT[r.key] : 0; const rg = ROLE_CARDS.find(c => c[0] === ({ UMP_ADMIN: 'UMP Admin', OWNER: 'Owner', USER: 'User', VIEWER: 'Viewer' })[r.name]); return { name: r.name, desc: rg ? rg[2] + ' ' + rg[1] + '.' : (r.desc || r.comment || 'No description'), locked: !!r.locked, scopes: r.scopes.map(label => ({ label })), users: n === 1 ? '1 user' : n + ' users', ...(() => { const k = ({ UMP_ADMIN: 'UMP Admin', OWNER: 'Owner', ADMIN: 'UMP Admin', USER: 'User', VIEWER: 'Viewer' })[r.name]; const [rb, rf, rd] = ROLE_ST[k] || ['#eef2f7', NAVY, 'M12 2.5 4 5.5v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10v-6zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM8 16.5a4.5 4.5 0 0 1 8 0']; return { d: rd, nameFg: on ? rf : '#0f172a', pillBg: rb, pillFg: rf, bd: on ? rf : '#E2E8F0', bg: on ? rb : '#fff', ring: on ? '0 0 0 1px ' + rf : 'none', iconBg: on ? rf : rb, iconFg: on ? '#fff' : rf }; })(), go: () => this.setState({ roleSel: i, roleDraft: clone(r), scopeOpen: false, roleTried: false }) }; }),
      addRole: () => this.setState({ roleSel: -1, roleDraft: blankRole(), atQ: '', atSrc: '', tpls: TPL_SEED, atEdit: null, atDraft: null, scopeOpen: false, roleTried: false }),
      editorTitle: isNew ? 'Create new role' : d.name,
      editorSub: isNew ? 'Define the role name, scope coverage and access matrix' : 'Edit scope coverage and permissions for this role',
      permSelected: sel + (sel === 1 ? ' permission' : ' permissions') + ' selected',
      modeBadge: isNew ? { label: 'New role', bg: '#ecfeff', fg: '#0e7490' } : lk ? { label: 'Locked', bg: '#fff7ed', fg: '#c2410c' } : { label: 'Editable', bg: '#f0fdf4', fg: '#15803d' },
      draftLocked: lk, draftName: d.name, draftComment: d.comment,
      setDraftName: e => { const v = e.target.value.toUpperCase().replace(/\s+/g, '_'); this.setState(st => ({ roleDraft: { ...st.roleDraft, name: v } })); },
      setDraftComment: e => { const v = e.target.value; this.setState(st => ({ roleDraft: { ...st.roleDraft, comment: v } })); },
      nameBd: err ? '#fca5a5' : '#cfd4dc', scopeBd: s.scopeOpen ? NAVY : '#cfd4dc',
      scopeChips: d.scopes.map(label => ({ label, remove: e => { e.stopPropagation(); if (!lk) this.setState(st => ({ roleDraft: { ...st.roleDraft, scopes: st.roleDraft.scopes.filter(x => x !== label) } })); } })),
      scopeEmpty: d.scopes.length === 0, scopeOpen: s.scopeOpen && !lk,
      toggleScopeMenu: () => !lk && this.setState(st => ({ scopeOpen: !st.scopeOpen })),
      scopeOptions: SCOPES.map(([label, hint]) => { const on = d.scopes.includes(label); return { label, hint, bg: on ? NAVY : '#fff', bd: on ? NAVY : '#cbd5e1', chk: on ? 1 : 0, toggle: e => { e.stopPropagation(); this.setState(st => ({ roleDraft: { ...st.roleDraft, scopes: on ? st.roleDraft.scopes.filter(x => x !== label) : SCOPES.map(x => x[0]).filter(x => x === label || st.roleDraft.scopes.includes(x)) } })); } }; }),
      allCb: this.cbv(tri(all), lk, () => { const v = all.every(Boolean) ? 0 : 1; setM(m => m.forEach(r => r.fill(v))); }),
      colHeads: COLS.map((label, c) => { const col = d.m.map(r => r[c]); return { label, ...this.cbv(tri(col), lk, () => { const v = col.every(Boolean) ? 0 : 1; setM(m => m.forEach(r => { r[c] = v; })); }) }; }),
      matrixRows: MODULES.map((module, ri) => ({ module, note: MOD_NOTE[module], cb: this.cbv(tri(d.m[ri]), lk, () => { const v = d.m[ri].every(Boolean) ? 0 : 1; setM(m => m[ri].fill(v)); }), cells: d.m[ri].map((on, c) => this.cbv(on ? 1 : 0, lk, () => setM(m => { m[ri][c] = m[ri][c] ? 0 : 1; if (c < 3 && m[ri][c]) m[ri][3] = 1; }))) })),
      roleErr: err,
      saveLabel: isNew ? 'Create role' : 'Save changes', saveBg: nameOk && !lk ? NAVY : '#94a3b8', saveCur: nameOk && !lk ? 'pointer' : 'not-allowed',
      cancelRole: () => this.setState(st => ({ roleDraft: st.roleSel === -1 ? blankRole() : clone(st.roleList[st.roleSel]), scopeOpen: false, roleTried: false })),
      saveRole: () => { if (lk) return; if (!nameOk) return this.setState({ roleTried: true }); this.setState(st => { const list = clone(st.roleList); const dr = { ...clone(st.roleDraft), desc: st.roleDraft.comment || st.roleDraft.desc }; if (st.roleSel === -1) { list.push(dr); return { roleList: list, roleSel: list.length - 1, roleDraft: clone(dr), scopeOpen: false, roleTried: false }; } list[st.roleSel] = dr; return { roleList: list, roleDraft: clone(dr), scopeOpen: false, roleTried: false }; }); }
    };
  }
  dockVals(s) {
    const S = STATUS, on = DEVICES.filter(d => d[5] === 'Online').length, off = DEVICES.filter(d => d[5] === 'Offline'), ins = DEVICES.filter(d => d[5] === 'Installing').length, tot = DEVICES.length;
    const rows = {
      alerts: [['Heat load high', 'Riverbend Farm \u2022 12m', '', 'red'], ['Device offline', 'Greg Farm \u2022 3h', '', 'grey'], ['Weather warning', 'Agritech Farm \u2022 Today', '', 'amber']],
      tickets: [['Probe reading interval', 'Riverbend Farm \u2022', '', 'blue', 'In progress', () => this.setState({ modal: 'tk', tkSel: 'TK-008' })], ['Metos station dashboard missing temperature data', 'Ed Farm \u2022', '', 'amber', 'Open', () => this.setState({ modal: 'tk', tkSel: 'TK-009' })]],
      activity: [['Reply on ticket #008', 'John \u2022', '', 'blue', 'In progress', () => this.setState({ modal: 'tk', tkSel: 'TK-008' }), 'Can I change the reading interval of one probe?'], ['New user', NEWU[3] + ' \u2022 1d', '', 'violet', '', () => this.setState({ modal: 'user', userSel: NEWU[0] }), NEWU[0]], ['Farm onboarded', 'Corryong \u2022 2d', '', 'green', '', () => this.setState({ page: 'farmDetail', farmSel: 'Kookaburra Farm', editingFarm: false }), 'Kookaburra Farm'], ['Yield data file uploaded', 'Kookaburra Farm \u2022 2d', '', 'green', '', () => this.setState({ page: 'farmDetail', farmSel: 'Kookaburra Farm', editingFarm: false })], ['Soil probe alert set', 'Agritech Farm \u2022 3d', '', 'amber', '', () => window.open(PP + '#alerts', '_blank')]],
      health: off.map(d => [d[0], d[3] + ' \u00b7 Offline', d[4], 'red']),
      weather: [],
      providers: PROVIDERS.map(p => [p.name, (p.status === 'Connected' ? 'Synced ' + p.sync : p.status) + ' \u2022 ' + p.farms + ' farms', '', p.status === 'Connected' ? 'green' : 'red']),
    };
    const farmOf = t => { const m = FARMS.find(f => (t || '').includes(f.name)); return m ? m.name : null; };
    const goRow = (id, r) => () => { const f = farmOf(r[1]); if (r[5]) return r[5](); if (id === 'alerts') return window.open(PP + '#alerts', '_blank'); if (id === 'tickets') return this.setState({ page: 'support', supportTab: 'portal' }); if (id === 'providers') return window.open(PP + '#providers', '_blank'); if (f) return this.setState({ page: 'farmDetail', farmSel: f, editingFarm: false }); this.setState({ page: id === 'activity' ? 'users' : 'devices' }); };
    const meta = { alerts: [rows.alerts.length, '#fef2f2', '#dc2626'], weather: ['24\u00b0', '#eff6ff', '#2563eb'], health: [on, '#ecfdf5', '#047857'], tickets: [rows.tickets.length, '#f1f5f9', '#475569'], activity: ['7d', '#f1f5f9', '#475569'], providers: [PROVIDERS.length, '#eff6ff', '#2563eb'] };
    const H = { S: '150px', M: '232px', L: '400px' };
    const dock = s.widgets.map(id => {
      const [title, , iconBg, iconFg] = WIDGETS[id], size = s.wSize[id] || 'M', open = !s.wCol[id];
      const k = {}; Object.keys(WIDGETS).forEach(x => { k[x] = x === id; });
      return {
        id, title, tc: WTC[id] || NAVY, sub: WIDGETS[id][1], iconBg, iconFg, k, open, maxH: id === 'activity' ? 'none' : H[size], rot: open ? 'rotate(0deg)' : 'rotate(-90deg)', colTitle: open ? 'Collapse' : 'Expand',
        meta: String(meta[id][0]), metaBg: meta[id][1], metaFg: meta[id][2],
        isList: ['alerts', 'tickets', 'activity'].includes(id), showMeta: false, isWeather: id === 'weather', isHealth: id === 'health',
        rows: rows[id].map(r => ({ title: r[0], detail: r[6] || '', sub: r[1], right: r[2], status: r[4] || '', stFg: TK_ST[r[4]] || '#64748b', stBg: (TK_ST[r[4]] || '#64748b') + '14', dot: S[r[3]].dot, ring: S[r[3]].bg, go: goRow(id, r) })), count: String(rows[id].length), sh: s.dragW && s.dragW !== id && s.overW === id ? '0 0 0 2px rgba(15,23,42,.18),0 8px 24px rgba(15,23,42,.08)' : '0 0 0 1px rgba(15,23,42,.06),0 1px 3px rgba(15,23,42,.04),0 4px 12px rgba(15,23,42,.04)',
        size, sizeName: { S: 'Small', M: 'Medium', L: 'Large' }[size], cycle: () => this.setState(st => ({ wSize: { ...st.wSize, [id]: { S: 'M', M: 'L', L: 'S' }[st.wSize[id] || 'M'] }, wCol: { ...st.wCol, [id]: false } })),
        sizes: ['S', 'M', 'L'].map(z => ({ label: z, bg: z === size ? '#fff' : 'transparent', fg: z === size ? '#0f172a' : '#94a3b8', sh: z === size ? '0 1px 2px rgba(15,23,42,.12)' : 'none', go: () => this.setState(st => ({ wSize: { ...st.wSize, [id]: z }, wCol: { ...st.wCol, [id]: false } })) })),
        toggle: () => this.setState(st => ({ wCol: { ...st.wCol, [id]: !st.wCol[id] } })),
        remove: () => this.setState(st => ({ widgets: st.widgets.filter(x => x !== id) })),
        bd: s.dragW && s.dragW !== id && s.overW === id ? '#14b8a6' : '#E2E8F0', op: s.dragW === id ? 0.45 : 1,
        dragStart: e => { e.dataTransfer.effectAllowed = 'move'; try { e.dataTransfer.setData('text/plain', id); } catch (_) {} const card = e.currentTarget.closest('[draggable]') && e.currentTarget.parentNode.parentNode; if (card && e.dataTransfer.setDragImage) e.dataTransfer.setDragImage(card, 20, 20); this.setState({ dragW: id }); },
        dragOver: e => { e.preventDefault(); if (this.state.overW !== id) this.setState({ overW: id }); },
        drop: e => { e.preventDefault(); const from = this.state.dragW; if (!from || from === id) return this.setState({ dragW: null, overW: null }); this.setState(st => { const a = st.widgets.filter(x => x !== from); a.splice(a.indexOf(id) + (st.widgets.indexOf(from) < st.widgets.indexOf(id) ? 1 : 0), 0, from); return { widgets: a, dragW: null, overW: null }; }); },
      };
    });
    return {
      dock, dockEmpty: dock.length === 0, dragEnd: () => this.setState({ dragW: null, overW: null }),
      health: [['Online', on, '#10b981'], ['Offline', off.length, '#ef4444']].map(([label, n, c]) => ({ label, n, c, w: (n / tot * 100) + '%' })),
      zoneLeg: { legOpen: !!s.zLeg, toggle: () => this.setState(st => ({ zLeg: !st.zLeg })), label: 'Zones (' + ZONE_LIST.length + ')', items: ZONE_LIST.map(z => ({ n: z.nm, c: z.c })) },
      legendOpen: !!s.legendOpen, legendRot: s.legendOpen ? 'rotate(180deg)' : 'rotate(0deg)', toggleLegend: () => this.setState(st => ({ legendOpen: !st.legendOpen })),
      basemaps: Object.entries(BASEMAPS).map(([k, b]) => { const on = (s.basemap || 'satStreets') === k, def = (s.bmDefault || 'satStreets') === k; return { isDef: def, starFg: def ? '#93C5FD' : 'rgba(255,255,255,.45)', starFill: def ? 'currentColor' : 'none', starTitle: def ? 'Default basemap' : 'Make default', makeDef: e => { e.stopPropagation(); if (def) return; try { localStorage.setItem('ump-admin-bm-default', k); } catch (x) {} this.setState({ bmDefault: k }); this.flash('Default basemap set', b.label + ' will load by default.'); }, label: b.label, sw: b.sw, bg: on ? 'rgba(59,130,246,.22)' : 'transparent', fg: on ? '#93C5FD' : '#fff', fw: on ? 600 : 500, chk: on ? 1 : 0, go: () => this.setBasemap(k) }; }),
      bmOpen: !!s.bmOpen, toggleBm: () => this.setState(st => ({ bmOpen: !st.bmOpen })),
      bnd: s.boundary === false ? { bg: '#475569', knob: '2px' } : { bg: '#14b8a6', knob: '12px' }, toggleBoundary: () => this.setBoundary(s.boundary === false),
      pop: s.pop ? { show: true, name: s.pop.name, zone: s.pop.zone, users: String(s.pop.users), devices: String(s.pop.devices), zc: (zoneByName(s.pop.zone) || {}).c || '#0e8fb0', left: s.pop.x + 'px', top: s.pop.y + 'px', tf: s.pop.below ? 'translate(-50%, 0)' : 'translate(-50%, -100%)', launch: e => { if (e) e.stopPropagation(); const n = s.pop.name; this._popKeep = false; this.setState({ pop: null }); this.redirect(n); }, view: () => this.setState({ pop: null, page: 'farmDetail', farmSel: s.pop.name, editingFarm: false }) } : { show: false },
      popEnter: () => { clearTimeout(this._popT); this._popKeep = true; }, popLeave: () => { this._popKeep = false; this.hidePopSoon(); },
      dockCount: String(s.widgets.length), dockHas: s.widgets.length > 0,
      ...this.provVals(s),
      ...this.supVals(s),
      userTotal: String(s.viewAs === 'owner' ? USERS.filter(u => u[3] === OWNER_FARM).length : USERS.length),
      mapPanelOpen: !!s.mapPanel, mapPanelClosed: !s.mapPanel, toggleMapPanel: () => this.setState(st => ({ mapPanel: !st.mapPanel })),
      mapLayers: [
        ['Boundary', s.boundary !== false, () => this.setBoundary(s.boundary === false), '#fef3c7', '#EAB308', '3px'],
        ['Farm map', s.farmLayer !== false, () => this.setFarmLayer(s.farmLayer === false), '#fee2e2', '#dc2626', '50% 50% 50% 0'],
        ['Device map', !!s.deviceLayer, () => this.setDeviceLayer(!s.deviceLayer), '#ccfbf1', '#0f9f95', '50%'],
      ].map(([label, on, toggle, iconBg, dot, shape]) => ({ label, toggle, iconBg, dot, shape, bg: on ? '#0B7F7E' : 'rgba(255,255,255,.28)', knob: on ? '14px' : '2px' })),
      mapLegend: { live: FARMS.filter(f => f.status === 'Live').length, onb: FARMS.filter(f => f.status !== 'Live').length },
    };
  }
  toggle(on) { return { bg: on ? TEAL : '#cbd5e1', knob: on ? '18px' : '2px' }; }
  tabs(list, cur, key) {
    return list.map(([id, label]) => ({ label, go: () => this.setState({ [key]: id }), fg: cur === id ? '#0B7F7E' : '#475569', line: 'none', bg: cur === id ? '#F0FDFA' : 'transparent', sh: cur === id ? '0 1px 3px rgba(15,23,42,.08)' : 'none', fw: cur === id ? 600 : 500, pill: cur === id ? '#DBEAFE' : '#E2E8F0', pillFg: cur === id ? '#0B7F7E' : '#475569' }));
  }
  anVals(s) {
    const TODAY = new Date(2026, 10, 6), DAY = 864e5;
    const pd = x => { const [y, m, d] = x.split('-').map(Number); return new Date(y, m - 1, d); };
    const MON = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
    const tdate = t => { const p = String(t.date || '').split(' '); return p.length === 3 ? new Date(+p[2], MON[p[1]] ?? 0, +p[0]) : TODAY; };
    const dl = d => d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short' });
    const cust = s.anCustom && s.anCustomR ? s.anCustomR : null;
    const R = RANGES.find(r => r[0] === s.anRange) || RANGES[3];
    const RK = cust ? 'C' : R[0];
    const DAYS = cust ? Math.max(1, Math.round((pd(cust[1]) - pd(cust[0])) / DAY) + 1) : { '1H': 1 / 24, '24H': 1, '7D': 7, '30D': 30, '90D': 90, '6M': 182, '1Y': 365 }[RK];
    const END = cust ? pd(cust[1]) : TODAY, START = cust ? pd(cust[0]) : new Date(TODAY - Math.max(DAYS, 1) * DAY);
    const fac = DAYS / 30;
    const fmt = n => n >= 10000 ? (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K' : Math.round(n).toLocaleString('en-AU');
    const sc = v => Math.max(0, Math.round(v * fac));
    const near = cust ? (DAYS <= 1 ? '24H' : DAYS <= 7 ? '7D' : DAYS <= 30 ? '30D' : DAYS <= 90 ? '90D' : DAYS <= 182 ? '6M' : '1Y') : RK;
    const rangeText = cust ? s.anCustom : R[1].toLowerCase();
    const vs = cust ? 'vs previous period' : 'vs previous ' + { '1H': 'hour', '24H': '24 hours', '7D': '7 days', '30D': '30 days', '90D': '90 days', '6M': '6 months', '1Y': 'year' }[RK];
    const hsh = str => [...str].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 9973, 7);
    const pv = (key, lo, hi) => lo + (hsh(key + RK + DAYS) % (Math.round((hi - lo) * 10) + 1)) / 10;
    const G = '#059669', RD = '#b91c1c';
    const tot = FLEET.filter(d => d.status !== 'Installing').length, onl = FLEET.filter(d => d.status === 'Online').length, off = tot - onl;
    const au0 = { '1H': 3, '24H': 9, '7D': 16, '30D': 21, '90D': 21, '6M': 24, '1Y': 24 }[near];
    const fE0 = { '1H': 2, '24H': 5, '7D': 7, '30D': 8, '90D': 8, '6M': 9, '1Y': 9 }[near];
    const uS = { '1H': 1, '24H': 3, '7D': 11, '30D': 16, '90D': 12, '6M': 9, '1Y': 6 }[near], fS = { '1H': 1, '24H': 2, '7D': 5, '30D': 6, '90D': 4, '6M': 4, '1Y': 3 }[near];
    const inR = t => { const d = tdate(t); if (cust) return d >= START && d <= END; const age = Math.round((TODAY - d) / DAY); return age >= 0 && age <= (DAYS < 1 ? 0 : Math.ceil(DAYS)); };
    const T = s.tixPortal.filter(inR), openN = T.filter(t => t.status !== 'Resolved').length, resN = T.length - openN;
    const FA0 = [['Riverbend Farm', 86, 4], ['Greg Farm', 64, 4], ['Ed Farm', 41, 3], ['Hillview Farm', 33, 3], ['Bluegum Farm', 27, 2], ['Agritech Farm', 22, 2], ['Kookaburra Farm', 18, 2], ['Cedar Ridge Farm', 12, 1], ['Wattle Creek Farm', 5, 1], ['Mitta Valley Farm', 2, 1]];
    const uK = au0 / 21, FA = FA0.map(([n, v, u]) => [n, Math.min(100, Math.max(0, Math.round(v * (1 + (hsh(n + RK + DAYS) % 31 - 15) / 100)))), Math.round(u * uK)]).sort((a, b) => b[1] - a[1]);
    const ACT = FA.filter(f => f[1] >= 10 && f[2] >= 1), fE = ACT.length, au = ACT.reduce((x, f) => x + f[2], 0), NF = FA.length, NU = USERS.length, pc = (a, b) => Math.round(a / Math.max(1, b) * 100);
    const faTot = FA.reduce((x, f) => x + f[1], 0) || 1;
    const TH = { 'ACTIVE FARMS': ['#e6f7f5', '#0f766e', 'M3 21V10l9-6 9 6v11M9 21v-6h6v6'], 'ACTIVE USERS': ['#f5f3ff', '#6d28d9', 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.2A6.5 6.5 0 0 1 21.5 20'], 'DEVICES ONLINE': ['#eff6ff', '#1d4ed8', 'M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8'], 'UNRESOLVED TICKETS': ['#fff7ed', '#c2410c', 'M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z'] };
    const kpi = (label, v, of, sec, tr, good, go) => ({ label, v, of, sec, hasSec: !!sec, trend: tr, hasTrend: !!tr, tc: good ? G : RD, go, ibg: TH[label][0], ifg: TH[label][1], d: TH[label][2] });
    let n, step, lab;
    if (!cust && RK === '1H') { n = 12; lab = i => (i * 5) + ' min'; }
    else if (!cust && RK === '24H') { n = 12; lab = i => String(i * 2).padStart(2, '0') + ':00'; }
    else if (!cust && RK === '1Y') { n = 12; lab = i => new Date(2026, 10 - 11 + i, 1).toLocaleDateString('en-AU', { month: 'short' }); }
    else { const D = Math.max(1, Math.round(DAYS)); n = Math.min(12, Math.max(2, D)); step = (D - 1) / (n - 1); lab = i => dl(new Date(END - Math.round((n - 1 - i) * step) * DAY)); }
    const ser = (a, b, seed) => Array.from({ length: n }, (_, i) => i === 0 ? a : i === n - 1 ? b : Math.max(0, Math.round(a + (b - a) * i / (n - 1) + Math.sin(i * 1.7 + seed) * 0.7)));
    const RAW = [ser(Math.min(uS, au), au, 1), ser(Math.min(fS, fE), fE, 3)];
    const SER = [['Users', '#6d28d9', RAW[0].map(v => pc(v, NU))], ['Farms', '#0f766e', RAW[1].map(v => pc(v, NF))]];
    const M = 100;
    const X = i => (i + 0.5) / n * 100, Y = v => 100 - v / M * 100;
    const hv = typeof s.anHov === 'number' && s.anHov < n ? s.anHov : null;
    const every = Math.ceil(n / 6);
    const mode = s.anFarmMode === 'least' ? 'least' : 'most';
    const fl = (mode === 'most' ? FA.slice() : FA.slice().reverse()).slice(0, 6), fmax = Math.max(1, FA[0][1]);
    const MED = [['#FEF3C7', '#92400E'], ['#E2E8F0', '#334155'], ['#FFEDD5', '#9A3412']];
    const PROV = [['Metos', 98.9, '6 min ago'], ['Helios', 62.4, '3 h ago'], ['AxisTech', 99.6, '2 min ago']].map(([name, p, last]) => { const q = Math.min(100, Math.max(0, p + pv(name, -1, 1) * (p < 80 ? 4 : 0.4))); return { name, p: q, last, k: q >= 95 ? 'green' : q >= 85 ? 'amber' : 'red' }; }).sort((a, b) => ({ red: 0, amber: 1, green: 2 }[a.k] - { red: 0, amber: 1, green: 2 }[b.k]) || b.p - a.p);
    const failed = PROV.filter(p => p.k === 'red');
    const TK = [['Open', 'Open'], ['In progress', 'In Progress'], ['Waiting', 'Waiting'], ['On hold', 'On Hold'], ['Resolved', 'Resolved']];
    const CMAP = { Device: 'Device', Provider: 'Data Sync', Data: 'Data Sync', 'Data upload': 'Data Sync', Alerts: 'Alerts', 'Data sharing': 'Data Sharing', Users: 'User Access' };
    const CC = { Device: '#0A2342', 'Data Sync': '#1d4ed8', Alerts: '#0e8fb0', 'Data Sharing': '#60a5fa', 'User Access': '#93c5fd', Other: '#cbd5e1' };
    const cnt = {}; T.forEach(t => { const c = CMAP[t.topic || t.cat] || 'Other'; cnt[c] = (cnt[c] || 0) + 1; });
    const CAT = Object.keys(CC).filter(k => cnt[k]).map(k => [k, cnt[k], CC[k]]).sort((a, b) => b[1] - a[1]), cT = CAT.reduce((x, c) => x + c[1], 0);
    let cum = 0; const donut = CAT.map(([label, c, col]) => { const p = c / cT * 100, o = { label, n: String(c), c: col, pct: Math.round(p) + '%', da: Math.max(0.1, p - (CAT.length > 1 ? 0.6 : 0)).toFixed(2) + ' ' + (100 - p + (CAT.length > 1 ? 0.6 : 0)).toFixed(2), off: (-cum).toFixed(2) }; cum += p; return o; });
    const tr = (key, lo, hi, unit) => { const v = pv(key, lo, hi); return { up: v >= 0, t: (v >= 0 ? '\u25b2 ' : '\u25bc ') + Math.abs(v).toFixed(unit ? 0 : 1).replace(/\.0$/, '') + (unit || '%') }; };
    const AT = [['Heat load high', 'Riverbend Farm', 14, 'Critical', 'Livestock'], ['Soil moisture low', 'Greg Farm', 11, 'Warning', 'Soil'], ['Weather station offline', 'Greg Farm', 9, 'Warning', 'Device'], ['Frost risk', 'Bluegum Farm', 7, 'Critical', 'Weather'], ['Soil temperature high', 'Agritech Farm', 5, 'Info', 'Soil']].map(([l, f, v, sv, cat]) => [l, f, Math.max(l === 'Heat load high' ? 1 : 0, sc(v)), sv, cat]).filter(a => a[2] > 0).sort((a, b) => b[2] - a[2]);
    const SEV = { Critical: ['#FEF2F2', '#B91C1C', '#FECACA'], Warning: ['#FFFBEB', '#B45309', '#FDE68A'], Info: ['#EFF6FF', '#1D4ED8', '#BFDBFE'] }, atTot = AT.reduce((x, a) => x + a[2], 0);
    const FEAT = [['Weather Stations', 10, 21], ['Soil Probes', 9, 18], ['Regional Map', 8, 16], ['Livestock', 7, 12], ['Alerts', 6, 11], ['Data Uploads', 4, 6], ['Devices', 3, 5]].map(([l, f, u]) => [l, Math.max(fE ? 1 : 0, Math.min(fE, Math.round(f * fE / 10))), Math.max(au ? 1 : 0, Math.min(au, Math.round(u * au / 21)))]);
    const fTypes = [['Weather Stations', 'Weather'], ['Soil Probes', 'Soil probe']].map(([label, ty]) => { const L = FLEET.filter(d => d.type === ty && d.status !== 'Installing'), on = L.filter(d => d.status === 'Online').length; return { label, ty, tot: L.length, ok: on, off: L.length - on }; });
    const fProvs = ['AxisTech', 'Metos'].map(name => { const L = FLEET.filter(d => d.provider === name && d.status !== 'Installing'), on = L.filter(d => d.status === 'Online').length; return { name, logo: PLOGO_FULL[name], n: String(L.length), on: String(on), off: String(L.length - on) }; });
    const DPROV = ['Helios', 'Janes', 'Optiweigh', 'Gallagher'];
    const CONN = FARMS.map((f, i) => { const dev = [...new Set(DEVICES.filter(d => d[3] === f.name).map(d => d[2]))].filter(p => p === 'AxisTech' || p === 'Metos'); const dat = DPROV.filter((p, j) => (i + j) % 3 !== 1 && (j < 2 || i % 2 === 0)); return { name: f.name, dev, dat }; });
    const cMax = Math.max(1, ...CONN.map(c => c.dev.length + c.dat.length));
    const sumK = k => fTypes.reduce((x, t) => x + t[k], 0), FS = [['Online', 'ok', '#10b981'], ['Offline', 'off', '#ef4444']];
    const uT = tr('users', 2, 12), sT = tr('sess', -3, 9), rT = tr('ret', -2, 6, ' pts'), tT = tr('tix', -18, 6);
    const adopt = [['Active Farms', String(fE), '+' + Math.max(1, Math.round(fE * 0.15)) + (Math.max(1, Math.round(fE * 0.15)) === 1 ? ' farm' : ' farms'), true], ['Active Users', String(au), uT.t.replace('\u25b2 ', '+').replace('\u25bc ', '\u2212'), uT.up], ['Weekly Sessions', String({ '1H': 83, '24H': 83, '7D': 83, '30D': 78, '90D': 72, '6M': 66, '1Y': 58 }[near]), sT.t.replace('\u25b2 ', '+').replace('\u25bc ', '\u2212'), sT.up], ['Returning Users', { '1H': 92, '24H': 88, '7D': 81, '30D': 76, '90D': 71, '6M': 68, '1Y': 64 }[near] + '%', rT.t.replace('\u25b2 ', '+').replace('\u25bc ', '\u2212'), rT.up]];
    const kpis = [
      kpi('ACTIVE FARMS', String(fE), 'of ' + NF, pc(fE, NF) + '% of farms', '\u25b2 ' + Math.max(1, Math.round(fE * 0.15)) + ' farm' + (Math.max(1, Math.round(fE * 0.15)) === 1 ? '' : 's'), true, () => this.setState({ page: 'farms' })),
      kpi('ACTIVE USERS', String(au), 'of ' + NU, pc(au, NU) + '% of users signed in', uT.t, uT.up, () => this.setState({ page: 'users' })),
      kpi('DEVICES ONLINE', String(onl), 'of ' + tot, pc(onl, tot) + '% online \u00b7 ' + off + ' offline', '', true, () => this.setState({ page: 'devices' })),
      kpi('UNRESOLVED TICKETS', String(openN), 'of ' + T.length, T.filter(t => t.status === 'Open').length + ' open \u00b7 ' + T.filter(t => t.status === 'In progress').length + ' in progress \u00b7 ' + T.filter(t => t.status === 'Waiting' || t.status === 'On hold').length + ' waiting', T.length ? tT.t : '', !tT.up, () => this.setState({ page: 'support' })),
    ];
    const verb = (a, b) => b > a ? 'increased from ' + a + ' to ' + b : b < a ? 'decreased from ' + a + ' to ' + b : 'held steady at ' + b;
    const period = cust ? 'between ' + dl(START) + ' and ' + dl(END) : 'over the ' + R[1].toLowerCase();
    const closeAll = { anMenu: false, anExp: false };
    const csv = () => {
      const rows = [['UMP+ Analytics report', rangeText], [], ['Metric', 'Value', 'Change ' + vs]];
      kpis.forEach(k => rows.push([k.label, k.v + ' ' + k.of, k.trend || '']));
      rows.push([], ['Platform adoption'], ['Metric', 'Value', 'Change']); adopt.forEach(a => rows.push([a[0], a[1], a[2]]));
      rows.push([], ['Period', 'Active users', 'Active farms']); for (let i = 0; i < n; i++) rows.push([lab(i), SER[0][2][i], SER[1][2][i]]);
      rows.push([], ['Farm', 'Activity score', 'Active users']); FA.forEach(f => rows.push([f[0], f[1], f[2]]));
      rows.push([], ['Device type', 'Online', 'Offline']); fTypes.forEach(t => rows.push([t.label, t.ok, t.off]));
      rows.push([], ['Device provider', 'Devices', 'Online', 'Offline']); fProvs.forEach(p => rows.push([p.name, p.n, p.on, p.off]));
      rows.push([], ['Farm', 'Device providers', 'Data providers']); CONN.forEach(c => rows.push([c.name, c.dev.join(' / '), c.dat.join(' / ')]));
      rows.push([], ['Ticket status', 'Count']); TK.forEach(([k, l]) => rows.push([l, T.filter(t => t.status === k).length]));
      rows.push([], ['Ticket category', 'Count']); CAT.forEach(c => rows.push([c[0], c[1]]));
      rows.push([], ['Alert', 'Farm', 'Count']); AT.forEach(a => rows.push([a[0], a[1], a[2]]));
      rows.push([], ['Feature', 'Farms', 'Users']); FEAT.forEach(f => rows.push([f[0], f[1], f[2]]));
      const txt = rows.map(r => r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(',')).join('\n');
      const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([txt], { type: 'text/csv' })); a.download = 'ump-analytics-' + RK.toLowerCase() + '.csv'; document.body.appendChild(a); a.click(); a.remove();
    };
    const pdf = () => {
      this.setState(closeAll, () => setTimeout(() => {
        const el = this._anEl; if (!el) return;
        const clone = el.cloneNode(true); clone.querySelectorAll('[data-noprint]').forEach(x => x.remove());
        const css = [...document.querySelectorAll('link[rel="stylesheet"],style')].map(x => x.outerHTML).join('');
        const html = '<!doctype html><html><head><meta charset="utf-8"><base href="' + location.href + '"><title>UMP+ Analytics report</title>' + css + '<style>@page{size:A4 landscape;margin:10mm}html,body{margin:0;background:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact}body{font-family:' + getComputedStyle(document.body).fontFamily + ';color:#0F172A}.wrap{width:1120px;zoom:.86;padding:4px}.wrap>div>div{break-inside:avoid}</style></head><body><div style="display:flex;justify-content:space-between;align-items:flex-end;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #0A2342;zoom:.86;width:1120px"><div><div style="font-size:22px;font-weight:700">UMP+ Analytics report</div><div style="font-size:13px;color:#475569;margin-top:2px">Upper Murray Producer Plus \u00b7 ' + rangeText + '</div></div><div style="font-size:12px;color:#475569">Generated ' + new Date().toLocaleString('en-AU') + '</div></div><div class="wrap">' + clone.outerHTML + '</div></body></html>';
        const f = document.createElement('iframe'); f.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0'; document.body.appendChild(f);
        const d = f.contentDocument; d.open(); d.write(html); d.close();
        setTimeout(() => { try { f.contentWindow.focus(); f.contentWindow.print(); } catch (e) {} setTimeout(() => f.remove(), 60000); }, 700);
      }, 60));
    };
    const fromOk = s.anFrom && s.anTo && pd(s.anFrom) <= pd(s.anTo);
    return {
      ref: el => { this._anEl = el; }, today: '2026-11-06',
      rangeLabel: s.anCustom || R[1], rangeText, vs, periodText: cust ? s.anCustom : R[1],
      rangeOpen: !!s.anMenu, rangeRot: s.anMenu ? 'rotate(180deg)' : 'none', exportOpen: !!s.anExp,
      toggleRange: () => this.setState(st => ({ anMenu: !st.anMenu, anExp: false })),
      toggleExport: () => this.setState(st => ({ anExp: !st.anExp, anMenu: false })),
      closeMenus: () => this.setState(closeAll),
      ranges: RANGES.map(([k, label]) => { const on = !cust && s.anRange === k; return { k, label, bg: on ? '#f1f5f9' : 'transparent', fw: on ? 600 : 400, go: () => this.setState({ anRange: k, anCustom: null, anCustomR: null, anMenu: false, anHov: null, anFarmOpen: null }) }; }),
      from: s.anFrom || '', to: s.anTo || '', setFrom: e => this.setState({ anFrom: e.target.value }), setTo: e => this.setState({ anTo: e.target.value }),
      rangeErr: s.anFrom && s.anTo && !fromOk ? 'The end date must be on or after the start date.' : '',
      applyBg: fromOk ? '#0A2342' : '#94a3b8', applyCur: fromOk ? 'pointer' : 'not-allowed',
      applyCustom: () => { if (!fromOk) return; const d = x => dl(pd(x)); this.setState({ anCustom: d(s.anFrom) + ' \u2013 ' + d(s.anTo), anCustomR: [s.anFrom, s.anTo], anMenu: false, anHov: null }); },
      exportPdf: pdf, exportCsv: () => { this.setState(closeAll); csv(); },
      kpis,
      adopt: adopt.slice(0, 2).map(([label, v, ch, up]) => ({ label, v, ch, tc: up ? G : RD, ibg: up ? '#ECFDF5' : '#FEF2F2', rot: up ? 'none' : 'rotate(90deg)' })),
      eng: {
        series: SER.map(([label, c, v]) => ({ c, pts: v.map((x, i) => X(i).toFixed(2) + ',' + Y(x).toFixed(2)).join(' ') })),
        ends: SER.map(([label, c, v]) => ({ label, c, v: v[n - 1] + '%', l: X(n - 1).toFixed(2) + '%', t: Y(v[n - 1]).toFixed(2) + '%' })),
        grid: [0, 25, 50, 75, 100].map(t => ({ t: t + '%' })), yl: [100, 75, 50, 25, 0].map(v => ({ v: v + '%' })),
        xl: Array.from({ length: n }, (_, i) => ({ l: (n - 1 - i) % every === 0 ? lab(i) : '' })),
        cols: Array.from({ length: n }, (_, i) => ({ enter: () => { if (this.state.anHov !== i) this.setState({ anHov: i }); } })),
        leave: () => this.setState({ anHov: null }),
        hov: hv !== null, hx: hv !== null ? X(hv).toFixed(2) + '%' : '0%', tipT: hv !== null && hv >= n / 2 ? 'translateX(calc(-100% - 10px))' : 'translateX(10px)', tipWk: hv !== null ? lab(hv) : '',
        dots: hv !== null ? SER.map(([l, c, v]) => ({ c, l: X(hv).toFixed(2) + '%', t: Y(v[hv]).toFixed(2) + '%' })) : [],
        tip: hv !== null ? SER.map(([label, c, v], k) => ({ label: 'Active ' + label.toLowerCase(), c, v: v[hv] + '% (' + RAW[k][hv] + ' of ' + (k ? NF : NU) + ')' })) : [],
        insight: 'Active users ' + verb(Math.min(uS, au), au) + ' and active farms ' + verb(Math.min(fS, fE), fE) + ' ' + period + '.',
      },
      farmModes: [['most', 'Most Active'], ['least', 'Least Active']].map(([k, label]) => { const on = mode === k; return { label, bg: on ? '#fff' : 'transparent', fg: on ? '#0F172A' : '#64748B', sh: on ? '0 1px 2px rgba(15,23,42,.12)' : 'none', go: () => this.setState({ anFarmMode: k, anFarmOpen: null }) }; }),
      farms: fl.map(([name, v, u], i) => { const rank = mode === 'most' ? i + 1 : FA.length - i, low = v < 15, open = s.anFarmOpen === name, rk = mode === 'most' && i < 3 ? MED[i] : low ? ['#FFFBEB', '#B45309'] : ['#F1F5F9', '#475569'];
        return { rank: String(rank), name, score: String(v), w: Math.max(3, v / fmax * 100).toFixed(1) + '%', c: v < 10 || u < 1 ? '#94A3B8' : low ? '#f59e0b' : '#0f766e', rkBg: rk[0], rkFg: rk[1], open, rowBg: open ? '#F8FAFC' : 'transparent',
          tip: u + (u === 1 ? ' active user' : ' active users') + ' \u00b7 ' + fmt(sc(v * 3.6)) + ' sessions \u00b7 click for details', detail: u + (u === 1 ? ' active user' : ' active users') + ' \u00b7 ' + fmt(sc(v * 3.6)) + ' sessions \u00b7 ' + Math.round(v / faTot * 100) + '% of platform activity',
          toggle: () => this.setState(st => ({ anFarmOpen: st.anFarmOpen === name ? null : name })), go: () => this.setState({ page: 'farmDetail', farmSel: name, editingFarm: false }) }; }),
      farmSum: mode === 'most' ? FA[0][0] + ' and ' + FA[1][0] + ' account for ' + Math.round((FA[0][1] + FA[1][1]) / faTot * 100) + '% of producer activity ' + period + '.' : FA.filter(f => f[1] < 15).map(f => f[0]).join(' and ') + (FA.some(f => f[1] < 15) ? ' have the lowest activity scores.' : 'Every farm is above the engagement threshold.'),
      fleet: { sub: tot + ' devices across the region \u00b7 live status',
        legend: FS.map(([label, k, c]) => ({ label, c, n: String(sumK(k)) })),
        types: fTypes.map(t => ({ label: t.label, img: CIMG[t.ty], tot: String(t.tot), segs: FS.filter(([, k]) => t[k] > 0).map(([label, k, c]) => ({ c, n: String(t[k]), tip: label + ': ' + t[k], w: (t[k] / Math.max(t.tot, 1) * 100).toFixed(1) + '%' })) })),
        provs: fProvs,
        pct: pc(sumK('ok'), tot) + '%', offList: FLEET.filter(d => d.status === 'Offline').slice(0, 3).map(d => ({ name: d.name, farm: d.farm, last: 'Last seen ' + d.last })), offMore: FLEET.filter(d => d.status === 'Offline').length > 3 ? '+' + (FLEET.filter(d => d.status === 'Offline').length - 3) + ' more offline' : '', hasOff: FLEET.some(d => d.status === 'Offline'),
        sum: sumK('ok') + ' of ' + tot + ' devices are online. ' + sumK('off') + (sumK('off') === 1 ? ' device is' : ' devices are') + ' offline.' },
      conn: { legend: [['Device providers (AxisTech, Metos)', '#0A2342'], ['Data providers', '#93C5FD']].map(([label, c]) => ({ label, c })),
        farms: CONN.map(c => { const n = c.dev.length + c.dat.length; return { short: c.name.replace(/ Farm$/, ''), n: String(n), tip: c.name + ': ' + c.dev.concat(c.dat).join(', '), hAll: ((c.dev.length + c.dat.length) / cMax * 120).toFixed(1) + 'px', hDev: (c.dev.length / cMax * 120).toFixed(1) + 'px', hData: (c.dat.length / cMax * 120).toFixed(1) + 'px', devR: c.dat.length ? '0' : '5px 5px 0 0' }; }),
        sum: (() => { const t = CONN.slice().sort((a, b) => (b.dev.length + b.dat.length) - (a.dev.length + a.dat.length))[0]; return t ? t.name + ' has the most connections with ' + (t.dev.length + t.dat.length) + ' providers.' : ''; })() },
      sync: PROV.map(p => { const S = STATUS[p.k]; return { name: p.name, last: p.last, p: p.p.toFixed(1) + '%', c: S.dot, ring: S.bd, fg: p.k === 'red' ? '#b91c1c' : '#0f172a', bg: p.k === 'red' ? '#FEF2F2' : '#fff', bd: p.k === 'red' ? '#FECACA' : '#E2E8F0', status: { red: 'Failed', amber: 'Degraded', green: 'Healthy' }[p.k], bbg: p.k === 'red' ? '#fff' : S.bg, bfg: S.fg }; }),
      syncSum: failed.length ? failed.map(p => p.name).join(', ') + ' sync is failing. Data from this provider is paused until it reconnects.' : 'All providers are syncing normally.',
      tix: { open: String(openN), total: String(T.length), oldest: (() => { const o = T.filter(t => t.status !== 'Resolved').map(t => Math.round((TODAY - tdate(t)) / DAY)).sort((a, b) => b - a)[0]; return o != null ? ' \u00b7 oldest unresolved ' + o + (o === 1 ? ' day' : ' days') : ''; })(), catTotal: String(cT), donut, has: cT > 0, none: cT === 0,
        status: TK.map(([k, label]) => { const b = BOARD.find(x => x[0] === k) || BOARD[0]; return { label, c: b[1], bg: b[2], n: String(T.filter(t => t.status === k).length) }; }),
        sum: cT ? CAT[0][0] + ' is the most common category at ' + Math.round(CAT[0][1] / cT * 100) + '% of tickets ' + period + '.' : 'No tickets were raised ' + period + '.' },
      alerts: { total: fmt(atTot), sev: ['Critical', 'Warning', 'Info'].map(k => ({ k, n: fmt(AT.filter(a => a[3] === k).reduce((x, a) => x + a[2], 0)), bg: SEV[k][0], fg: SEV[k][1], bd: SEV[k][2] })), top: AT.map(([label, farm, v, sv, cat], i) => ({ rank: String(i + 1), label, farm, cat, sev: sv, sbg: SEV[sv][0], sfg: SEV[sv][1], sbd: SEV[sv][2], v: fmt(v), share: pc(v, atTot) + '%' })),
        sum: AT.length ? AT[0][0] + ' on ' + AT[0][1] + ' was triggered most often ' + period + '.' : 'No alerts were triggered ' + period + '.' },
      features: FEAT.sort((a, b) => b[1] - a[1] || b[2] - a[2]).map(([label, f, u], i) => ({ rank: String(i + 1), label, sub: f + ' of ' + fE + ' active farms \u00b7 ' + u + ' of ' + au + ' active users', pct: pc(f, fE) + '%', w: pc(f, fE) + '%' })),
      featSum: FEAT[0][0] + ' is the most used feature, reaching ' + FEAT[0][1] + ' of ' + fE + ' active farms ' + period + '. ' + FEAT[FEAT.length - 1][0] + ' has the lowest reach (' + pc(FEAT[FEAT.length - 1][1], fE) + '%) and may need promotion or training.',
      attn: (() => { const L = [], offN = FLEET.filter(d => d.status === 'Offline').length, old = T.filter(t => t.status !== 'Resolved' && (TODAY - tdate(t)) / DAY > 7).length, lowF = FA.filter(f => f[1] < 15); if (offN) L.push({ t: offN + ' devices offline', s: 'Across ' + new Set(FLEET.filter(d => d.status === 'Offline').map(d => d.farm)).size + ' farms \u00b7 readings paused', c: '#DC2626', go: () => this.setState({ page: 'devices' }) }); if (failed.length) L.push({ t: failed.map(p => p.name).join(', ') + ' sync failing', s: 'Provider data paused until it reconnects', c: '#DC2626', go: () => this.setState({ page: 'providers' }) }); if (old) L.push({ t: old + (old === 1 ? ' ticket' : ' tickets') + ' unresolved for 7+ days', s: 'Review assignment and next steps', c: '#D97706', go: () => this.setState({ page: 'support' }) }); if (lowF.length) L.push({ t: lowF.length + (lowF.length === 1 ? ' farm' : ' farms') + ' with low engagement', s: lowF.map(f => f[0].replace(/ Farm$/, '')).join(', ') + ' \u00b7 score below 15', c: '#D97706', go: () => this.setState({ anFarmMode: 'least' }) }); return L; })(),
    };
  }
  farmValid(n) {
    const loc = (n.location || '').trim(), abn = (n.abn || '').replace(/\s/g, ''), em = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const e = { name: n.name && n.name.trim() ? '' : 'Enter the farm name', loc: loc.length >= 6 ? '' : 'Choose an address or enter it manually', phone: (n.phone || '').replace(/\D/g, '').length >= 8 ? '' : 'Enter a valid phone number', abn: /^\d{11}$/.test(abn) ? '' : 'ABN must be 11 digits', owner: n.owner && n.owner.trim() ? '' : "Enter the owner's name", email: em.test(n.email || '') ? '' : 'Enter a valid email address' };
    return { e, ok: Object.values(e).every(x => !x) };
  }
  invValid(i) {
    const e = { name: i.name && i.name.trim() ? '' : 'Enter their full name', email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.email || '') ? '' : 'Enter a valid email address', farm: i.farm ? '' : 'Select a farm', role: i.role ? '' : 'Choose a role' };
    return { e, ok: Object.values(e).every(x => !x) };
  }
  formVals(s) {
    const n = s.newFarm || {}, fv = this.farmValid(n), ft = !!s.farmTried, bd = k => ft && fv.e[k] ? '#FCA5A5' : '#E2E8F0';
    const ADDR = ['45 Hanson Street, Corryong VIC 3707', '210 Towong Road, Towong VIC 3707', '1240 Murray River Road, Walwa VIC 3709', '88 Khancoban Road, Khancoban NSW 2642', '17 Main Street, Tallangatta VIC 3700', '302 Granya Gap Road, Granya VIC 3701', '9 Tooma Road, Tooma NSW 2642', '560 Omeo Highway, Mitta Mitta VIC 3701', '33 Jingellic Road, Jingellic NSW 2642', '120 Cudgewa North Road, Cudgewa VIC 3705', '76 Nariel Valley Road, Nariel Valley VIC 3707', '14 Lucyvale Road, Lucyvale VIC 3691', '5 Pine Mountain Road, Pine Mountain VIC 3709', '41 Bethanga Road, Bethanga VIC 3691', '260 Tintaldra Road, Tintaldra VIC 3708'];
    const q = (n.location || '').toLowerCase().trim(), words = q.split(/[\s,]+/).filter(Boolean);
    const sug = words.length && q.length >= 2 ? ADDR.filter(a => words.every(w => a.toLowerCase().includes(w))).slice(0, 5) : [];
    const upd = o => this.setState(st => ({ newFarm: { ...st.newFarm, ...o } }));
    const man = n.addr || {}, compose = m => [m.street, [m.town, m.state || 'VIC', m.postcode].filter(Boolean).join(' ')].filter(x => x && x.trim()).join(', ');
    const setMan = k => e => { const v = e.target.value; this.setState(st => { const a = { state: 'VIC', ...(st.newFarm.addr || {}), [k]: v }; return { newFarm: { ...st.newFarm, addr: a, location: a.street || a.town ? compose(a) : '' } }; }); };
    const i = s.inv || {}, iv = this.invValid(i), it = !!s.invTried, ibd = k => it && iv.e[k] ? '#FCA5A5' : '#E2E8F0';
    const RS = { Owner: 'Full control of the farm', User: 'Manage farm data and devices', Viewer: 'View only, no changes' };
    const rc = s.roleChg;
    return {
      fe: { name: ft ? fv.e.name : '', loc: ft ? fv.e.loc : '', phone: ft ? fv.e.phone : '', abn: ft ? fv.e.abn : '', owner: ft ? fv.e.owner : '', email: ft ? fv.e.email : '', nameBd: bd('name'), locBd: bd('loc'), phoneBd: bd('phone'), abnBd: bd('abn'), ownerBd: bd('owner'), emailBd: bd('email'), btnBg: fv.ok ? '#0A2342' : '#64748B' },
      fa: { lookup: !s.addrManual, manual: !!s.addrManual, modeLabel: s.addrManual ? 'Search for address' : 'Enter manually',
        toggleMode: () => this.setState(st => ({ addrManual: !st.addrManual, addrOpen: false, addrPicked: false, newFarm: { ...st.newFarm, location: '', addr: { state: 'VIC' } } })),
        toManual: e => { e.preventDefault(); this.setState(st => ({ addrManual: true, addrOpen: false, newFarm: { ...st.newFarm, location: '', addr: { state: 'VIC', street: st.newFarm.location || '' } } })); },
        q: n.location || '', setQ: e => { const v = e.target.value; this.setState({ addrOpen: true, addrPicked: false }); upd({ location: v }); },
        open: () => this.setState({ addrOpen: true }), blur: () => setTimeout(() => this.setState({ addrOpen: false }), 120), picked: !!s.addrPicked,
        showSug: !!s.addrOpen && !s.addrPicked && q.length >= 2, noMatch: sug.length === 0,
        sug: sug.map(a => { const k = a.indexOf(', '); return { main: a.slice(0, k), sub: a.slice(k + 2), pick: e => { e.preventDefault(); this.setState({ addrOpen: false, addrPicked: true }); upd({ location: a }); } }; }),
        street: man.street || '', town: man.town || '', state: man.state || 'VIC', postcode: man.postcode || '', set: { street: setMan('street'), town: setMan('town'), state: setMan('state'), postcode: setMan('postcode') } },
      ie: { name: it ? iv.e.name : '', email: it ? iv.e.email : '', farm: it ? iv.e.farm : '', role: it ? iv.e.role : '', nameBd: ibd('name'), emailBd: ibd('email'), farmBd: ibd('farm'), farmFg: i.farm ? '#0F172A' : '#94A3B8', btnBg: iv.ok ? '#0A2342' : '#64748B',
        guideOpen: !!s.invGuide, guideLabel: s.invGuide ? 'Hide role guide' : 'Role guide', toggleGuide: () => this.setState(st => ({ invGuide: !st.invGuide })),
        guide: ROLE_INFO.map(([name, , desc]) => ({ name, desc, bg: (ROLE_ST[name] || ROLE_ST.Viewer)[0], fg: (ROLE_ST[name] || ROLE_ST.Viewer)[1], d: (ROLE_ST[name] || ROLE_ST.Viewer)[2] })),
        roles: ['Owner', 'User', 'Viewer'].map(name => { const on = i.role === name, R = ROLE_ST[name] || ROLE_ST.Viewer; return { name, short: RS[name], d: R[2], ibg: R[0], ifg: R[1], bd: on ? '#0B7F7E' : (it && iv.e.role ? '#FCA5A5' : '#E2E8F0'), bg: on ? '#F0FDFA' : '#fff', rbd: on ? '#0B7F7E' : '#CBD5E1', dot: on ? '#0B7F7E' : 'transparent', cbg: on ? '#0B7F7E' : '#fff', tickOp: on ? 1 : 0, on: on ? 'true' : 'false', go: () => this.setState(st => ({ inv: { ...(st.inv || {}), role: name } })) }; }) },
      rc: rc ? { show: true, name: rc.name, from: rc.from, to: rc.to, farm: rc.farm || 'their farm', desc: (ROLE_INFO.find(r => r[0] === rc.to) || ['', '', ''])[2],
        cancel: () => this.setState({ roleChg: null }),
        confirm: () => { if (rc.apply) rc.apply(); else { const x = USERS.find(z => z[1] === rc.email); if (x) x[2] = rc.to; } this.setState({ roleChg: null }); this.flash('Role updated', rc.name + ' is now ' + (rc.to === 'Owner' ? 'an ' : 'a ') + rc.to + '.'); } } : { show: false },
    };
  }
  umVals(s) {
    const own = s.viewAs === 'owner', ROLES = ['Owner', 'User', 'Viewer'], RC = { Owner: ['#FFFBEB', '#B45309'], User: ['#EFF6FF', '#0B7F7E'], Viewer: ['#F1F5F9', '#475569'] };
    if (!this._umBase) { const by = {}; USERS.forEach(u => { const p = by[u[1]] = by[u[1]] || { name: u[0], email: u[1], status: u[5], memb: [] }; p.memb.push({ farm: u[3], role: u[2] }); });
      Object.values(by).forEach((p, i) => { const fi = FARMS.findIndex(f => f.name === p.memb[0].farm); if (i % 3 === 0) p.memb.push({ farm: FARMS[(fi + 3) % FARMS.length].name, role: p.memb[0].role === 'Viewer' ? 'User' : 'Viewer' }); if (i % 5 === 0) p.memb.push({ farm: FARMS[(fi + 6) % FARMS.length].name, role: 'User' }); });
      this._umBase = by; }
    const M = s.umM || this._umBase, people = Object.values(M).filter(p => !own || p.memb.some(m => m.farm === OWNER_FARM));
    const setM = fn => this.setState(st => { const cur = st.umM || this._umBase, nx = {}; Object.keys(cur).forEach(k => { nx[k] = { ...cur[k], memb: cur[k].memb.slice() }; }); fn(nx); return { umM: nx }; });
    const mode = s.umMode || 'users', q = (s.umQ || '').toLowerCase(), addRole = s.umAddRole || 'Viewer';
    const farms = FARMS.filter(f => !own || f.name === OWNER_FARM), ini = n => n.split(' ').map(x => x[0]).join('').slice(0, 2).toUpperCase(), AB = ['#0A2342', '#1565C0', '#0F766E', '#7C3AED', '#B45309'];
    const tabs = [['users', 'Users', people.length], ['farms', 'Farms', farms.length]].map(([k, l, n]) => { const on = mode === k; return { l, n: String(n), bd: on ? '#0B7F7E' : 'transparent', bg: on ? '#F0FDFA' : 'transparent', fg: on ? '#0F172A' : '#475569', cbg: on ? '#DBEAFE' : '#EEF2F7', cfg: on ? '#0B7F7E' : '#64748B', go: () => this.setState({ umMode: k, umQ: '', umSel: null, umFarm: null, umAq: '', umAddOpen: false, umPick: null }) }; });
    const roleRow = (key, farm, role, label, sub, ic, abg) => ({ name: label, sub, ic, role, ibg: abg ? abg : '#EFF6FF', ifg: abg ? '#fff' : '#0B7F7E', setRole: e => { const v = e.target.value; if (v === role) return; this.setState({ roleChg: { name: (M[key] || {}).name || key, from: role, to: v, farm, apply: () => setM(nx => { const p = nx[key]; p.memb = p.memb.map(m => m.farm === farm ? { ...m, role: v } : m); }) } }); }, remove: () => setM(nx => { nx[key].memb = nx[key].memb.filter(m => m.farm !== farm); }) });
    let list, d, addList;
    if (mode === 'users') {
      const L2 = people.filter(p => !q || (p.name + ' ' + p.email + ' ' + p.memb.map(m => m.farm).join(' ')).toLowerCase().includes(q)); const sel = M[s.umSel] && people.includes(M[s.umSel]) ? M[s.umSel] : null;
      list = L2.map((p, i) => ({ name: p.name, sub: p.email, ini: ini(p.name), abg: AB[i % AB.length], n: String(p.memb.length), bg: sel && p.email === sel.email ? '#EEF4FF' : '#fff', go: () => this.setState({ umSel: p.email, umAq: '', umAddOpen: false, umPick: null }) }));
      const pi = people.indexOf(sel), mem = sel ? sel.memb.filter(m => !own || m.farm === OWNER_FARM) : [];
      d = { noSel: !sel, name: sel ? sel.name : '', sub: sel ? sel.email : '', ini: sel ? ini(sel.name) : '', abg: AB[Math.max(0, pi) % AB.length], pill: mem.length + (mem.length === 1 ? ' farm' : ' farms'), tip: 'Set the role for each farm. Add access below to grant more \u2014 changes apply as you make them.', colA: 'FARM', addHead: 'ADD TO ANOTHER FARM', addPh: 'Search a farm to add\u2026', none: !mem.length, noneTxt: 'This user has no farm access yet.',
        rows: mem.map(m => { const f = FARMS.find(x => x.name === m.farm) || {}; return roleRow(sel.email, m.farm, m.role, m.farm, f.zone ? f.zone + ' \u00b7 ' + (f.location || '').split(',').pop().trim() : '', 'F'); }) };
      const aq = (s.umAq || '').toLowerCase(); addList = sel ? farms.filter(f => !sel.memb.some(m => m.farm === f.name) && (!aq || f.name.toLowerCase().includes(aq))).map(f => ({ l: f.name, sub: f.zone, key: f.name, inv: role => ({ name: sel.name, email: sel.email, farm: f.name, role, apply: () => setM(nx => { nx[sel.email].memb.push({ farm: f.name, role }); }) }) })) : [];
    } else {
      const L2 = farms.filter(f => !q || (f.name + ' ' + f.owner + ' ' + f.zone + ' ' + people.filter(p => p.memb.some(m => m.farm === f.name)).map(p => p.name + ' ' + p.email).join(' ')).toLowerCase().includes(q)); const sf = farms.find(f => f.name === s.umFarm) || null;
      const members = sf ? people.filter(p => p.memb.some(m => m.farm === sf.name)) : [];
      list = L2.map((f, i) => ({ name: f.name, sub: f.zone + ' \u00b7 ' + f.owner, ini: ini(f.name), abg: '#0F766E', n: String(people.filter(p => p.memb.some(m => m.farm === f.name)).length), bg: sf && f.name === sf.name ? '#EEF4FF' : '#fff', go: () => this.setState({ umFarm: f.name, umAq: '', umAddOpen: false, umPick: null }) }));
      d = { noSel: !sf, name: sf ? sf.name : '', sub: sf ? sf.location : '', ini: sf ? ini(sf.name) : '', abg: '#0F766E', pill: members.length + (members.length === 1 ? ' user' : ' users'), tip: 'Set the role for each user on this farm. Add people below \u2014 changes apply as you make them.', colA: 'USER', addHead: 'ADD A USER TO THIS FARM', addPh: 'Search a user by name or email\u2026', none: !members.length, noneTxt: 'No users have access to this farm yet.',
        rows: members.map((p, i) => roleRow(p.email, sf.name, p.memb.find(m => m.farm === sf.name).role, p.name, p.email + (p.memb.length > 1 ? ' \u00b7 ' + p.memb.length + ' farms' : ''), ini(p.name), AB[i % AB.length])) };
      const aq = (s.umAq || '').toLowerCase(); addList = !sf ? [] : people.filter(p => !p.memb.some(m => m.farm === sf.name) && (!aq || (p.name + ' ' + p.email).toLowerCase().includes(aq))).slice(0, 30).map(p => ({ l: p.name, sub: p.email, key: p.email, inv: role => ({ name: p.name, email: p.email, farm: sf.name, role, apply: () => setM(nx => { nx[p.email].memb.push({ farm: sf.name, role }); }) }) }));
    }
    return { tabs, q: s.umQ || '', setQ: e => this.setState({ umQ: e.target.value }), ph: 'Search users or farms\u2026', noSel: d.noSel, selTxt: mode === 'users' ? 'Select a user to manage their farm access' : 'Select a farm to manage who has access', list, empty: !list.length, d, roles: ROLES,
      addRoles: ROLES.map(r => { const on = r === addRole; return { l: r, bd: on ? '#475569' : '#E2E8F0', bg: on ? '#F1F5F9' : '#fff', cbd: on ? '#334155' : '#CBD5E1', cbg: on ? '#334155' : '#fff', chk: on ? 1 : 0, go: () => this.setState({ umAddRole: r }) }; }), addRole,
      aq: s.umAq || '', setAq: e => this.setState({ umAq: e.target.value, umAddOpen: true }), addOpen: !!s.umAddOpen, openAdd: () => this.setState({ umAddOpen: true }), closeAdd: () => this.setState({ umAddOpen: false }), addList: addList.map(o => ({ ...o, on: o.key === s.umPick, pick: () => this.setState({ umPick: o.key, umAq: '', umAddOpen: false }) })), addEmpty: !addList.length, addMode: mode,
      ...(() => { const pk = addList.find(o => o.key === s.umPick) || null; return { picked: pk ? { l: pk.l, sub: pk.sub } : null, noPick: !pk, clearPick: () => this.setState({ umPick: null }), setAddRole: e => this.setState({ umAddRole: e.target.value }), inviteBg: pk ? '#0A2342' : '#94A3B8', inviteCur: pk ? 'pointer' : 'not-allowed', invite: () => { if (pk) this.setState({ umPick: null, umInv: pk.inv(addRole) }); } }; })(),
      inv: s.umInv ? { show: true, done: !!s.umInv.sent, name: s.umInv.name, email: s.umInv.email, farm: s.umInv.farm, role: s.umInv.role, desc: (ROLE_INFO.find(r => r[0] === s.umInv.role) || ['', '', ''])[2],
        cancel: () => this.setState({ umInv: null }), send: () => { s.umInv.apply(); this.setState(st => ({ umInv: { ...st.umInv, sent: true } })); } } : { show: false } };
  }
  boardVals(s) {
    const q = (s.supQ || '').toLowerCase();
    const list = s.tixPortal.filter(t => (!s.supFarm || t.farm === s.supFarm) && (!s.supStatus || t.status === s.supStatus) && (!s.supTopic || (t.topic || t.cat) === s.supTopic) && (!q || [t.id, t.farm, t.subject, t.desc, t.by].join(' ').toLowerCase().includes(q)));
    return BOARD.filter(b => !s.supStatus || b[0] === s.supStatus).map(([label, c, bg]) => { const cards = list.filter(t => t.status === label); return { label: label === 'In progress' ? 'In Progress' : label === 'On hold' ? 'On Hold' : label, c, bg, n: String(cards.length), empty: cards.length === 0,
      over: e => e.preventDefault(), drop: e => { e.preventDefault(); const id = this._dragTk; if (id) this.setState(st => ({ tixPortal: st.tixPortal.map(x => x.id === id ? { ...x, status: label } : x) })); this._dragTk = null; },
      cards: cards.map(t => ({ ...t, asg: (t.assignee || 'Unassigned').replace(/ \(.*\)$/, ''), asgI: (t.assignee || 'U').replace(/ \(.*\)$/, '').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(), asgC: ['#0A2342', '#7C3AED', '#0B7F7E', '#B45309', '#BE185D', '#1D4ED8'][ASSIGNEES.indexOf(t.assignee) >= 0 ? ASSIGNEES.indexOf(t.assignee) : 0], drag: e => { this._dragTk = t.id; try { e.dataTransfer.setData('text/plain', t.id); } catch (x) {} }, open: () => this.setState({ modal: 'tk', tkSel: t.id, tkReply: '' }) })) }; });
  }
  tkVals(s) {
    const SC = { Open: ['#EEF2FF', '#1E3A8A'], 'In progress': ['#FFF7ED', '#C2410C'], Waiting: ['#F1F5F9', '#475569'], Resolved: ['#ECFDF5', '#15803D'], 'On hold': ['#F8FAFC', '#64748B'] };
    const t = s.tixPortal.find(x => x.id === s.tkSel) || s.tixMine.find(x => x.id === s.tkSel);
    if (!t) return { msgs: [], meta: [] };
    const portal = s.tixPortal.some(x => x.id === t.id), by = t.by || 'John';
    const base = TK_THREAD[t.id] || [[by, portal ? 'Producer · ' + t.farm : 'UMP Admin', t.date, t.subject + '. Could someone please take a look?']];
    const all = base.concat(s.tkMsgs[t.id] || []);
    const upd = fn => this.setState(st => ({ tixPortal: st.tixPortal.map(x => x.id === t.id ? fn(x) : x), tixMine: st.tixMine.map(x => x.id === t.id ? fn(x) : x) }));
    const ok = (s.tkReply || '').trim().length > 0, note = s.tkMode === 'note', notify = s.tkNotify !== false;
    return {
      topic: t.topic || t.cat || 'Other', desc: t.desc || t.subject, files: t.files || [], hasFiles: !!(t.files && t.files.length),
      assignee: t.assignee || 'John (UMP Admin)', assignees: ASSIGNEES, topics: TOPICS.includes(t.topic || t.cat) ? TOPICS : [t.topic || t.cat].concat(TOPICS), setTopic: e => { const v = e.target.value; upd(x => ({ ...x, topic: v, cat: v })); }, noMsgs: all.length === 0,
      details: [['TICKET NUMBER', '#' + t.id, '', 1], ['CREATED BY', by, portal ? 'Producer · ' + t.farm : 'UMP Admin'], ['FARM', t.farm || '—'], ['TOPIC', t.topic || t.cat || 'Other'], ['CREATED', t.date, 'Opened'], ['LAST UPDATED', (s.tkMsgs[t.id] || []).length ? 'Just now' : t.date, '']].map(([k, v, sub, pill]) => ({ k, v, sub, pill: !!pill, text: !pill })), setAssignee: e => { const v = e.target.value; upd(x => ({ ...x, assignee: v })); },
      modes: [['reply', 'Customer reply', 'M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z'], ['note', 'Internal note', 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z']].map(([k, label, d]) => { const on = (s.tkMode || 'reply') === k; const amber = k === 'note'; return { label, d, fw: on ? 600 : 500, bd: on ? (amber ? '#FCD34D' : '#93C5FD') : '#E2E8F0', bg: on ? (amber ? '#FEF3C7' : '#E8EEF5') : '#fff', fg: on ? (amber ? '#B45309' : '#0B7F7E') : '#475569', go: () => this.setState({ tkMode: k }) }; }),
      isReply: !note, isNote: note, ph: note ? 'Add an internal note for other UMP admins…' : 'Reply to ' + by + '. Use the toolbar to format text, embed images, videos and attach files…', taBg: note ? '#FFFBEB' : '#fff', taBd: note ? '#FDE68A' : '#E2E8F0',
      nBg: notify ? '#0A2342' : '#fff', nBd: notify ? '#0A2342' : '#cbd5e1', nChk: notify ? 1 : 0, toggleNotify: () => this.setState({ tkNotify: !notify }),
      sendLabel: note ? 'Add note' : 'Send reply',
      id: t.id, subject: t.subject, status: t.status, sbg: (SC[t.status] || SC.Open)[0], sfg: (SC[t.status] || SC.Open)[1],
      meta: [['FARM', t.farm], ['TOPIC', t.topic || t.cat || 'Other'], ['RAISED BY', by], ['OPENED', t.date]].map(([k, v]) => ({ k, v })),
      msgs: all.map(([who, role, time, text, internal]) => { const me = who === 'John'; return { who, role, time, text, internal: !!internal, ini: who.split(' ').map(w => w[0]).join('').slice(0, 2), dir: me ? 'row-reverse' : 'row', align: me ? 'flex-end' : 'flex-start', bg: internal ? '#FFFBEB' : me ? '#ecfeff' : '#fff', bd: internal ? '#FDE68A' : me ? '#a5f3fc' : '#E2E8F0', abg: me ? '#0e8fb0' : '#fef3c7', afg: me ? '#fff' : '#b45309' }; }),
      reply: s.tkReply, setReply: e => this.setState({ tkReply: e.target.value }), sendBg: ok ? '#0A2342' : '#94a3b8',
      send: () => { if (!ok) return; this.setState(st => ({ tkReply: '', tkMsgs: { ...st.tkMsgs, [t.id]: (st.tkMsgs[t.id] || []).concat([['John', 'UMP Admin', 'Just now', st.tkReply.trim(), note]]) } })); if (!note && t.status === 'Open') upd(x => ({ ...x, status: 'In progress' })); if (!note && notify) this.flash('Reply sent', by + ' has been notified by email.'); },
      setStatus: e => { const v = e.target.value; upd(x => ({ ...x, status: v })); },
      canFwd: portal && !t.fwd && t.status !== 'Resolved', fwd: !!t.fwd,
      forward: () => this.setState(st => ({ tixPortal: st.tixPortal.map(x => x.id === t.id ? { ...x, fwd: true } : x), tixMine: [{ id: 'AX-' + (1050 + st.tixMine.length), farm: t.farm, subject: t.subject, date: '04 Nov 2026', status: 'Open', note: 'Forwarded from ' + t.id, topic: t.topic, desc: t.desc, assignee: 'John (UMP Admin)' }, ...st.tixMine] })),
    };
  }
  naVals(s) {
    const na = s.na; if (!na || !window.UMPAlert) return {};
    const upd = o => this.setState(st => ({ na: { ...st.na, ...o } }));
    const tog = (k, v) => upd({ [k]: na[k].includes(v) ? na[k].filter(x => x !== v) : na[k].concat(v) });
    const chip = (on, label, go, d) => ({ label, go, d: d || '', tick: on ? '\u2713' : '', bd: on ? '#2F7A4F' : '#CBD5E1', bg: on ? '#2F7A4F' : '#fff' });
    const devs = DEVICES.map((d, i) => ({ v: String(i), label: d[3] + ' \u00b7 ' + d[0], type: /weather/i.test(d[1]) ? 'weather' : 'soil' }));
    const V = window.UMPAlert.vals(na, devs, upd), ok = V.ok;
    return { ...V, name: na.name, setName: e => upd({ name: e.target.value }), device: na.device,
      enBg: na.enabled ? '#6FA884' : '#cbd5e1', enKnob: na.enabled ? '18px' : '2px', toggleEnabled: () => upd({ enabled: !na.enabled }),
      roles: ['Owner', 'Admin', 'User', 'Viewer'].map(r => chip(na.roles.includes(r), r, () => tog('roles', r))),
      via: [['Email', 'M3 6h18v12H3zM3 7l9 6 9-6'], ['SMS', 'M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z'], ['Mobile Notification', 'M7 3h10v18H7zM11 18h2']].map(([r, d]) => chip(na.via.includes(r), r, () => tog('via', r), d)),
      extra: na.extra, setExtra: e => upd({ extra: e.target.value }), freq: na.freq, setFreq: e => upd({ freq: e.target.value }), priority: na.priority, setPriority: e => upd({ priority: e.target.value }),
      title: na.editId ? 'Edit Device Alert' : 'Create Device Alert', btnL: na.editId ? 'Save changes' : 'Submit', btn: ok ? '#2F7A4F' : '#94a3b8',
      submit: () => { if (!ok) return; if (na.editId) { const c = (na.conds || [])[0], R2 = { Owner: 'Farm owner', User: 'Manager', Admin: 'UMP Admin', Viewer: 'Viewer' }, v = c ? parseFloat(c.val) : NaN;
          const o = { name: na.name.trim(), on: na.enabled, pr: na.priority, rep: na.freq, ch: ['Email', 'SMS', 'Mobile Notification'].map(x => na.via.includes(x) ? 1 : 0), rec: na.roles.map(r => R2[r] || r).concat((na.extra || '').trim() ? [na.extra.trim()] : []).join(', ') || 'Nobody' };
          if (c && c.op) o.op = /above|exceeds/.test(c.op) ? '>' : '<'; if (!isNaN(v)) o.v = v;
          this.setState(st => ({ modal: null, na: null, arOv: { ...(st.arOv || {}), [na.editId]: { ...((st.arOv || {})[na.editId] || {}), ...o } } })); this.flash('Alert policy updated', o.name); return; } this.setState({ modal: null, na: null }); this.flash('Alert created', na.name + ' \u00b7 ' + (devs.find(d => d.v === na.device) || {}).label); } };
  }
  ruleToForm(r) {
    const A = window.UMPAlert; if (!A) return null;
    const na = A.blank(), soil = /^SP|soil/i.test(r.dev + ' ' + r.param), tag = r.dev.split(' ')[0];
    const farmDevs = DEVICES.map((d, i) => ({ d, i })).filter(x => x.d[3] === r.farm), want = soil ? /soil/i : /weather/i;
    const pick = farmDevs.find(x => x.d[0].includes(tag)) || farmDevs.find(x => want.test(x.d[1])) || farmDevs[0];
    const PK = { 'Soil moisture': /30 cm/.test(r.dev) ? 'moisture_30' : /60 cm/.test(r.dev) ? 'moisture_60' : 'moisture_10', 'Soil temperature': /30 cm/.test(r.dev) ? 'soil_temp_30' : 'soil_temp_10', 'Wind gust': 'wind_gust', 'Air temperature': 'temperature', 'Rainfall (24 h)': 'rainfall', 'Delta T': 'delta_t' };
    const reads = pick ? A.READ[/weather/i.test(pick.d[1]) ? 'weather' : 'soil'] : [], k = PK[r.param];
    const R2 = { 'Farm owner': 'Owner', Manager: 'User', 'UMP Admin': 'Admin', Viewer: 'Viewer' }, rec = r.rec.split(',').map(x => x.trim()).filter(Boolean);
    return { ...na, editId: r.id, name: r.name, device: pick ? String(pick.i) : '', enabled: r.on, priority: r.pr, freq: r.rep,
      via: ['Email', 'SMS', 'Mobile Notification'].filter((_, i) => r.ch[i]), roles: rec.filter(x => R2[x]).map(x => R2[x]), extra: rec.filter(x => !R2[x]).join(', '),
      conds: k && reads.some(x => x.k === k) ? [{ k, op: r.op === '>' ? 'rises above' : 'drops to or below', val: String(r.v) }] : [] };
  }
  aaVals(s) {
    const addAlert = () => this.setState({ modal: 'alert', na: window.UMPAlert ? window.UMPAlert.blank() : null });
    const q = (s.aaQ || '').toLowerCase(), F = { st: s.aaSt || '', pr: s.aaPr || '', farm: s.aaFarm || '', dev: s.aaDev || '', prov: s.aaProv || '', date: s.aaDate || '' };
    const maxD = { today: 0, '7': 7, '30': 30 }[F.date];
    const list = AA_LOG.filter(a => (!q || (a[0] + ' ' + a[1]).toLowerCase().includes(q)) && (!F.st || a[3] === F.st) && (!F.pr || a[2] === F.pr) && (!F.farm || a[5] === F.farm) && (!F.dev || a[4] === F.dev) && (!F.prov || a[10] === F.prov) && (maxD === undefined || a[8] <= maxD));
    list.sort((a, b) => (a[9] - b[9]) * (s.aaAsc ? 1 : -1));
    const uniq = i => [...new Set(AA_LOG.map(a => a[i]))].sort();
    const opt = (all, vals) => [{ v: '', l: all }, ...vals.map(v => typeof v === 'string' ? { v, l: v } : v)];
    const fl = (k, sk, all, vals) => ({ value: F[k], set: e => this.setState({ [sk]: e.target.value }), opts: opt(all, vals) });
    const ST = { Delivered: ['#10B981', '#047857'], Failed: ['#EF4444', '#B91C1C'], Pending: ['#F59E0B', '#B45309'] };
    const PR = { Critical: ['#FEF2F2', '#B91C1C', '#FEE2E2', '#DC2626'], High: ['#FFF7ED', '#C2410C', '#FFEDD5', '#EA580C'], Medium: ['#EFF6FF', '#0B7F7E', '#DBEAFE', '#0B7F7E'], Low: ['#F1F5F9', '#475569', '#F1F5F9', '#64748B'] };
    const tab = s.aaTab || 'rules', rules = AR_RULES.map(r => ({ ...r, ...((s.arOv || {})[r.id] || {}) }));
    const CH = ['Email', 'SMS', 'In-app'], OPS = [['>', 'Above'], ['<', 'Below']];
    const saveR = (id, o) => this.setState(st => ({ arOv: { ...(st.arOv || {}), [id]: { ...((st.arOv || {})[id] || {}), ...o } } }));
    const typOf = r => r.param === 'HLI' ? 'Heat load' : r.param === 'No data received' ? 'Device offline' : /^Soil/.test(r.param) ? 'Soil' : 'Weather', rt = s.arType || '', rl = rules.filter(r => !(s.arDel || []).includes(r.id)).filter(r => !rt || typOf(r) === rt);
    const PR2 = { Critical: ['#FEF2F2', '#B91C1C'], High: ['#FFF7ED', '#C2410C'], Medium: ['#EFF6FF', '#0B7F7E'], Low: ['#F1F5F9', '#475569'] };
    const ruleBlock = {
      addAlert, tabs: [['rules', 'Active', ''], ['fired', 'History', '']].map(([k, l, n]) => { const on = tab === k; return { l, n, bg: on ? '#fff' : 'transparent', fg: on ? '#0F172A' : '#64748B', sh: on ? '0 1px 2px rgba(15,23,42,.1)' : 'none', go: () => this.setState({ aaTab: k }) }; }),
      tRules: tab === 'rules', tFired: tab === 'fired',
      kpis: (() => { const L = rules.filter(r => !(s.arDel || []).includes(r.id)), A = L.filter(r => r.on), fd = A.filter(r => (AR_FIRED[r.id] || [0])[0] > 0).length; return [['POLICIES', L.length, 'watching all farms'], ['ACTIVE', A.length, (L.length - A.length) + ' paused'], ['FIRED IN THE LAST 12 MONTHS', fd, 'of ' + A.length + ' active policies'], ['SILENT', A.length - fd, 'active but never triggered in this window']].map(([l, v, sub]) => ({ l, v: String(v), sub })); })(), arQ: s.arQ || '', arType: s.arType || '', setArType: e => this.setState({ arType: e.target.value }), arTypes: ['All types', 'Weather', 'Soil', 'Heat load', 'Device offline'].map((l, i) => ({ v: i ? l : '', l })), setArQ: e => this.setState({ arQ: e.target.value }), ruleCount: rl.length + ' of ' + rules.length + ' rules',
      rules: rl.map(r => ({ name: r.name, where: r.farm + ' \u00b7 ' + r.dev, cond: r.param + ' ' + (r.op === '>' ? '>' : '<') + ' ' + r.v + (r.u ? ' ' + r.u : ''), pr: r.pr, prBg: PR2[r.pr][0], prFg: PR2[r.pr][1], chs: CH.filter((_, i) => r.ch[i]).map(l => ({ l })), rec: r.rec, rep: r.rep, op: r.on ? '1' : '.55',
        tBg: r.on ? '#0B7F7E' : '#CBD5E1', tKnob: r.on ? '18px' : '2px', tTip: r.on ? 'Pause rule' : 'Activate rule', toggle: () => { saveR(r.id, { on: !r.on }); this.flash && this.flash(r.on ? 'Alert rule paused' : 'Alert rule activated', r.name + ' \u00b7 ' + r.farm); }, edit: () => this.setState({ modal: 'alert', na: this.ruleToForm(r) }),
        ring: r.on ? '#0EA5A4' : '#94A3B8', paused: !r.on, fired: (AR_FIRED[r.id] || [0])[0] > 0, none: !((AR_FIRED[r.id] || [0])[0] > 0), firedT: (AR_FIRED[r.id] || [0])[0] + '\u00d7', last: (AR_FIRED[r.id] || [0, ''])[1],
        cond2: r.dev + ' \u00b7 ' + r.param + (r.op === '>' ? ' rises above ' : ' drops to or below ') + r.v + (r.u ? ' ' + r.u : ''),
        vias: CH.map((l, i) => r.ch[i] ? { t: l, d: ['M3 6h18v12H3zM3 7l9 6 9-6', 'M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z', 'M7 3h10v18H7zM11 18h2'][i] } : null).filter(Boolean),
        del: () => this.setState({ arDelAsk: r }) })),
      delAsk: s.arDelAsk ? { show: true, name: s.arDelAsk.name, farm: s.arDelAsk.farm, cond: s.arDelAsk.param + (s.arDelAsk.op === '>' ? ' > ' : ' < ') + s.arDelAsk.v + (s.arDelAsk.u ? ' ' + s.arDelAsk.u : ''),
        cancel: () => this.setState({ arDelAsk: null }), stop: e => e.stopPropagation(),
        confirm: () => { const r = s.arDelAsk; this.setState(st => ({ arDelAsk: null, arDel: (st.arDel || []).concat(r.id) })); this.flash('Alert policy deleted', r.name + ' \u00b7 ' + r.farm); } } : { show: false } };
    return {
      ...ruleBlock,
      q: s.aaQ || '', setQ: e => this.setState({ aaQ: e.target.value }),
      total: String(list.length), critical: String(list.filter(a => a[2] === 'Critical').length), undelivered: String(list.filter(a => a[3] !== 'Delivered').length),
      filters: [fl('st', 'aaSt', 'All statuses', ['Delivered', 'Pending', 'Failed']), fl('pr', 'aaPr', 'All priorities', ['Critical', 'High', 'Medium', 'Low']), fl('farm', 'aaFarm', 'All farms', uniq(5)), fl('dev', 'aaDev', 'All devices', uniq(4)), fl('prov', 'aaProv', 'All providers', uniq(10)), fl('date', 'aaDate', 'Any date', [{ v: 'today', l: 'Today' }, { v: '7', l: 'Last 7 days' }, { v: '30', l: 'Last 30 days' }])],
      toggleSort: () => this.setState(st => ({ aaAsc: !st.aaAsc })), sortTitle: s.aaAsc ? 'Oldest first' : 'Newest first', sortRot: s.aaAsc ? 'scaleY(-1)' : 'none',
      rows: list.map(a => ({ title: a[0], body: a[1], priority: a[2], status: a[3], device: a[4], farm: a[5], provider: a[10], fired: a[6], event: a[7], stDot: ST[a[3]][0], stFg: ST[a[3]][1], prBg: PR[a[2]][0], prFg: PR[a[2]][1], icBg: PR[a[2]][2], icFg: PR[a[2]][3], ...(/soil|probe|SP-/i.test(a[4] + ' ' + a[0]) ? { ty: 'Soil', tyBg: '#FFFBEB', tyFg: '#92400E', tyBd: '#FCD34D' } : { ty: 'Weather', tyBg: '#EFF6FF', tyFg: '#0B7F7E', tyBd: '#93C5FD' }) })),
      empty: list.length === 0, count: list.length + (list.length === 1 ? ' alert' : ' alerts'),
    };
  }
  fleet(s) { return FLEET.map(d => ({ ...d, name: s.devNames[d.serial] || d.name, type: s.devCatOv[d.serial] || d.type })); }
  deVals(s) {
    const e = s.devEdit; if (!e) return {};
    const d = this.fleet(s).find(x => x.serial === e.serial) || {}, i = FLEET.findIndex(x => x.serial === e.serial), dev = DEVICES.find(x => x[0] === FLEET[i].name) || [];
    return { name: e.name, desc: e.desc, cat: e.cat, serial: e.serial, provider: d.provider, plogo: PLOGO_FULL[d.provider] || PLOGO[d.provider], lw: d.provider === 'Metos' ? '76px' : '96px', lh: d.provider === 'Metos' ? '20px' : '30px', icon: CIMG[e.cat], coords: (s.devCoords || {})[e.serial] || dev[6] || '-36.2707, 147.9328', lat: (((s.devCoords || {})[e.serial] || dev[6] || '-36.2707, 147.9328').split(',')[0] || '').trim(), lng: (((s.devCoords || {})[e.serial] || dev[6] || '-36.2707, 147.9328').split(',')[1] || '').trim(), openLoc: () => { const p = ((s.devCoords || {})[e.serial] || dev[6] || '-36.2707, 147.9328').split(',').map(Number); this.setState({ locOpen: true, locAddr: '', locQ: '', locSugL: [], locLL: [p[1], p[0]] }); },
      setName: ev => { const v = ev.target.value; this.setState(st => ({ devEdit: { ...st.devEdit, name: v } })); }, setDesc: ev => { const v = ev.target.value; this.setState(st => ({ devEdit: { ...st.devEdit, desc: v } })); }, setCat: ev => { const v = ev.target.value; this.setState(st => ({ devEdit: { ...st.devEdit, cat: v } })); },
      save: () => this.setState(st => ({ modal: null, toast: { title: 'Device updated', msg: (e.name.trim() || d.name) + ' has been saved.' }, devNames: { ...st.devNames, [e.serial]: e.name.trim() || d.name }, devCatOv: { ...st.devCatOv, [e.serial]: e.cat } })) };
  }
  dmVals(s) {
    if (!s.dmap) { this._dmItems = []; return { show: false }; }
    const FL = this.fleet(s).filter(d => (!s.devFarm || d.farm === s.devFarm) && (s.viewAs !== 'owner' || d.farm === OWNER_FARM));
    const items = FL.map(d => { const i = FLEET.findIndex(x => x.serial === d.serial), dev = DEVICES.find(x => x[0] === (FLEET[i] || {}).name) || [], p = (((s.devCoords || {})[d.serial]) || dev[6] || '-36.2707, 147.9328').split(',').map(Number); return { id: d.serial, name: d.name, serial: d.serial, type: d.type, icon: CIMG[d.type], ll: [p[1], p[0]] }; });
    this._dmItems = items; return this.dmShape(s, items);
  }
  dvVals(s) {
    const q = (s.devQ || '').toLowerCase(), PER = 12, FL = this.fleet(s);
    const base = FL.filter(d => (!s.devFarm || d.farm === s.devFarm) && (s.viewAs !== 'owner' || d.farm === OWNER_FARM));
    const list = base.filter(d => (!s.devCats.length || s.devCats.includes(d.type)) && (!s.devProvs.length || s.devProvs.includes(d.provider)) && (!q || (d.name + d.farm + d.provider).toLowerCase().includes(q)));
    const pages = Math.max(1, Math.ceil(list.length / PER)), pg = Math.min(s.devPage || 1, pages), grid = s.devView !== 'table';
    const dd = (key, sel, opts, qk, imgOf, ibgOf) => { const open = s.devDD === key, qq = (s[qk] || '').toLowerCase(), skey = key === 'cat' ? 'devCats' : 'devProvs';
      return { open, q: s[qk], setQ: e => this.setState({ [qk]: e.target.value }), toggle: () => this.setState(st => ({ devDD: st.devDD === key ? null : key })),
        label: sel.length === 0 ? (key === 'cat' ? 'All categories' : 'All providers') : sel.length === 1 ? sel[0] : sel.length + ' selected', bd: sel.length ? '#a5f3fc' : '#E2E8F0', bg: sel.length ? '#ecfeff' : '#fff',
        clearLabel: sel.length ? 'Clear (' + sel.length + ')' : 'Clear', clear: () => this.setState({ [skey]: [], devPage: 1 }),
        items: opts.filter(o => !qq || o.toLowerCase().includes(qq)).map(o => { const on = sel.includes(o); return { label: o, n: String(base.filter(d => (key === 'cat' ? d.type : d.provider) === o).length), img: imgOf(o), ibg: ibgOf(o), iw: key === 'cat' ? '30px' : (o === 'Metos' ? '54px' : '76px'), ih: key === 'cat' || o !== 'Metos' ? '22px' : '14px', tick: on ? '✓' : '', cbd: on ? '#0F172A' : '#cbd5e1', cbg: on ? '#0A2342' : '#fff', bg: on ? '#f0f9ff' : 'transparent', fw: on ? 600 : 400, toggle: () => this.setState(st => ({ [skey]: on ? st[skey].filter(x => x !== o) : st[skey].concat(o), devPage: 1 })) }; }) }; };
    return {
      q: s.devQ, setQ: e => this.setState({ devQ: e.target.value, devPage: 1 }),
      chips: [['Weather stations', 'Weather'], ['Soil probes', 'Soil probe']].map(([label, t]) => ({ label, img: CIMG[t], n: String(base.filter(d => d.type === t).length) })),
      cat: dd('cat', s.devCats, ['Weather', 'Soil probe'], 'devCatQ', o => CIMG[o], () => 'transparent'),
      prov: dd('prov', s.devProvs, ['AxisTech', 'Metos'], 'devProvQ', o => PLOGO_FULL[o], () => '#fff'),
      grid, table: !grid && list.length > 0, empty: list.length === 0,
      gridGo: () => this.setState({ devView: 'grid' }), tableGo: () => this.setState({ devView: 'table' }),
      gridBg: grid ? '#0A2342' : '#fff', gridFg: grid ? '#fff' : '#475569', tableBg: !grid ? '#0A2342' : '#fff', tableFg: !grid ? '#fff' : '#475569',
      cards: (grid ? list.slice((pg - 1) * PER, pg * PER) : list).map(d => { const w = d.type === 'Weather', key = d.serial, mo = s.devMenu === key; const hs = [...d.serial].reduce((x, ch) => x + ch.charCodeAt(0), 0), dep = (s.dDepth || {})[key] || '10 cm', di = ['10 cm', '30 cm', '60 cm', '90 cm'].indexOf(dep), off = d.status === 'Offline', T = (l, v, u, c) => ({ l, v: off ? '\u2014' : v, u: off ? '' : u, c }); const tiles = w ? [T('Temp', (14 + (hs % 90) / 10).toFixed(1), '\u00b0C', '#EF4444'), T('Rain 24 h', ((hs % 50) / 10).toFixed(1), 'mm', '#3B82F6'), T('Wind', String(6 + hs % 18), 'km/h', '#0E8FAE')] : [T('Moisture', (22 + (hs % 120) / 10 - di * 2.4).toFixed(1), '%', '#3B82F6'), T('Temp', (16 + (hs % 30) / 10 - di * .6).toFixed(1), '\u00b0C', '#EF4444'), T('VIC', String(480 + hs % 50 + di * 6), '', '#7C3AED')]; return { ...d, tiles, isSoil: !w, depth: dep, setDepth: e => { const v = e.target.value; this.setState(st => ({ dDepth: { ...(st.dDepth || {}), [key]: v } })); }, st: stOf(d.status), icon: CIMG[d.type], plogo: PLOGO[d.provider], tbd: w ? '#93C5FD' : '#FCD34D', tbg: w ? '#EFF6FF' : '#FFFBEB', tfg: w ? '#0B7F7E' : '#92400E', href: PP + (w ? '#weather' : '#soil'), menuOpen: mo, menuBg: mo ? '#f1f5f9' : 'transparent', menu: () => this.setState(st => ({ devMenu: st.devMenu === key ? null : key })), edit: () => this.setState({ devMenu: null, modal: 'dev', devEdit: { serial: d.serial, name: d.name, desc: '', cat: d.type } }), viewData: () => { this.setState({ devMenu: null }); window.open(PP + '#data', '_blank'); }, locate: () => this.setState({ devMenu: null, dmap: { sel: [d.serial] } }) }; }),
      paged: grid && pages > 1, pages: Array.from({ length: pages }, (_, i) => ({ n: String(i + 1), bg: i + 1 === pg ? '#0A2342' : 'transparent', fg: i + 1 === pg ? '#fff' : '#475569', go: () => this.setState({ devPage: i + 1 }) })),
      prev: () => this.setState({ devPage: Math.max(1, pg - 1) }), next: () => this.setState({ devPage: Math.min(pages, pg + 1) }),
    };
  }
  report() {
    const t = this.state.reportTab;
    const mk = (arr, max, c) => arr.map(([l, v]) => ({ l, v, h: Math.round(v / max * 150) + 'px', c: c || '#14b8a6' }));
    const rows = arr => { const m = Math.max(...arr.map(a => a[1])); return arr.map(([l, v, suf]) => ({ l, v: v + (suf || ''), w: Math.round(v / m * 100) + '%' })); };
    if (t === 'growth') return {
      stats: [{ label: 'Farms onboarded', value: '10' }, { label: 'Demo farm target', value: '10 of 10' }, { label: 'Organisations', value: '5' }, { label: 'Network hosts', value: '3' }],
      chartTitle: 'Farms onboarded per month', bars: mk([['Jun', 1], ['Jul', 0], ['Aug', 2], ['Sep', 1], ['Oct', 1], ['Nov', 1]], 2),
      listTitle: 'Devices connected by provider', rows: rows([['AxisTech', 20], ['Metos', 12]]),
    };
    if (t === 'usage') return {
      stats: [{ label: 'Dashboard views', value: '1,284' }, { label: 'Avg. sessions / user', value: '9.2' }, { label: 'Most active farm', value: 'Thowgla Creek' }, { label: 'Avg. session', value: '6m 40s' }],
      chartTitle: 'Weekly dashboard views', bars: mk([['W1', 240], ['W2', 290], ['W3', 310], ['W4', 444]], 444),
      listTitle: 'Most-viewed dashboards', rows: rows([['Weather stations', 412], ['Regional', 268], ['Heat stress', 231], ['Biomass', 174], ['Season', 129]]),
    };
    if (t === 'alerts') return {
      stats: [{ label: 'Alerts fired', value: '86' }, { label: 'Recipients reached', value: '214' }, { label: 'Failed to send', value: '3' }, { label: 'Device offline', value: '19' }],
      chartTitle: 'Alerts by type', bars: mk([['Weather', 34], ['Soil', 18], ['Heat load', 15], ['Offline', 19]], 34, '#0f766e'),
      listTitle: 'Delivery channel', rows: rows([['Email', 128], ['SMS', 61], ['Mobile notification', 25]]),
    };
    return {
      stats: [{ label: 'Total users', value: '16' }, { label: 'Logged in (30 days)', value: '12' }, { label: 'Inactive accounts', value: '1' }, { label: 'Pending invites', value: '2' }],
      chartTitle: 'Users by role', bars: mk([['UMP Admin', 2], ['Owner', 10], ['User', 8], ['Viewer', 4]], 10),
      listTitle: 'Logins by farm', rows: rows([['Riverbend Farm', 48], ['Greg Farm', 37], ['Ed Farm', 22], ['Hillview Farm', 14], ['Agritech Farm', 0]]),
    };
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
    const finish = acc => { const email = acc.email, staff = acc.role === 'staff', ses = { email, role: acc.role, name: acc.label }; try { (s.lgRemember ? localStorage : sessionStorage).setItem(LG_KEY, JSON.stringify(ses)); } catch (e) {} this.setState({ authed: ses, lgBusy: false, lgPw: '', lgErr: '', viewAs: staff ? 'staff' : 'ump' }); };
    return { on: true, signIn: !s.lgForgot, forgotOn: !!s.lgForgot, sent: !!s.lgSent, sentOff: !s.lgSent,
      map: s.lgMap || { vb: '0 0 1000 1300', zones: [], bnd: '', locs: [] }, mapNote: s.lgMap ? s.lgMap.n + ' zones · 10 farms connected' : 'Loading region map',
      email: em, setEmail: e => this.setState({ lgEmail: e.target.value, lgErr: '' }), pw: s.lgPw || '', setPw: e => this.setState({ lgPw: e.target.value, lgErr: '' }),
      pwType: s.lgShow ? 'text' : 'password', pwToggleL: s.lgShow ? 'Hide' : 'Show', togglePw: () => this.setState(st => ({ lgShow: !st.lgShow })),
      rmBd: s.lgRemember ? '#0A2342' : '#CBD5E1', rmBg: s.lgRemember ? '#0A2342' : '#fff', rmTick: s.lgRemember ? '\u2713' : '', toggleRemember: () => this.setState(st => ({ lgRemember: !st.lgRemember })),
      err: s.lgErr || '', hasErr: !!s.lgErr, btnL: s.lgBusy ? 'Signing in\u2026' : 'Sign in',
      submit: e => { if (e && e.preventDefault) e.preventDefault(); if (s.lgBusy) return; if (!ok) { this.setState({ lgErr: 'Enter a valid email address and your password.' }); return; } const acc = findAccount(em, s.lgPw); if (!acc) { this.setState({ lgErr: 'Email or password is incorrect.' }); return; } this.setState({ lgBusy: true }); setTimeout(() => finish(acc), 650); },
      forgot: () => this.setState({ lgForgot: true, lgSent: false, lgErr: '' }), back: () => this.setState({ lgForgot: false, lgSent: false }),
      sendReset: e => { if (e && e.preventDefault) e.preventDefault(); if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) this.setState({ lgSent: true }); },
      demos: DEMO_ACCOUNTS.map(a => { const on = em.trim().toLowerCase() === a.email; return { l: a.label, e: a.email, p: a.pw, bd: on ? '#0B7F7E' : '#E2E8F0', bg: on ? '#E6F4F3' : '#fff', go: () => this.setState({ lgEmail: a.email, lgPw: a.pw, lgErr: '' }) }; }),
    };
  }
  signOut() { try { localStorage.removeItem(LG_KEY); sessionStorage.removeItem(LG_KEY); } catch (e) {} this.setState({ authed: null, lgEmail: 'admin@ump.org.au', lgPw: 'UmpAdmin@2026', lgForgot: false, lgSent: false, menuOpen: false }); }
  renderVals() {
    const s = this.state;
    const navKeys = ['home', 'farms', 'users', 'alerts', 'alertTpl', 'devices', 'providers', 'sharing', 'reports', 'support', 'profile', 'farmDetail'];
    const nav = {}, is = {};
    navKeys.forEach(k => {
      const a = s.page === k || (k === 'farms' && s.page === 'farmDetail'); is[k] = s.page === k;
      nav[k] = { go: () => this.setState(st => k === 'users' ? { page: k, userTab: 'list', menuOpen: false, usersSub: st.page === 'users' ? st.usersSub !== true : true } : k === 'alerts' ? { page: k, menuOpen: false, alertsSub: st.page === 'alerts' ? st.alertsSub !== true : true } : { page: k, menuOpen: false }), bg: a ? 'linear-gradient(90deg,rgba(14,165,164,.26) 0%,rgba(14,165,164,.07) 100%)' : 'transparent', fg: a ? '#FFFFFF' : '#B3C2D6', bar: a ? 'inset 3px 0 0 #0EA5A4,inset 0 0 0 1px rgba(147,197,253,.12),0 8px 24px rgba(59,130,246,.18)' : 'none' };
    });
    const plural = (n, w) => n + ' ' + w + (n === 1 ? '' : 's');
    const IS_STAFF_ADMIN = s.viewAs === 'staff', OWNER = s.viewAs === 'owner';
    const farms = (OWNER ? s.farmData.filter(f => f.name === OWNER_FARM) : s.farmData).map(f => ({ ...f, usersTitle: 'Users (' + f.users + ')', devicesTitle: 'Devices (' + f.devices + ')', usersLabel: plural(f.users, 'user'), usersWord: f.users === 1 ? 'User' : 'Users', devicesWord: f.devices === 1 ? 'Device' : 'Devices', devicesLabel: plural(f.devices, 'device'), view: () => this.setState({ page: 'farmDetail', farmSel: f.name, editingFarm: false }), st: stOf(f.status), pin: f.status === 'Live' ? TEAL : '#f59e0b', open: () => this.go('farms') }));
    const q = s.farmQuery.toLowerCase();
    const providers = PROVIDERS.map(p => ({ ...p, initial: p.name[0], st: stOf(p.status), note: p.note || '' }));
    const sel = (on) => ({ bg: on ? '#111827' : '#fff', fg: on ? '#fff' : '#334155', bd: on ? '#111827' : '#cfd4dc' });
    const pwScore = [s.pw.length >= 8, /[A-Z]/.test(s.pw), /\d/.test(s.pw), /[^A-Za-z0-9]/.test(s.pw)];
    const score = pwScore.filter(Boolean).length;
    const w = s.wizStep;
    return { login: this.loginVals(s), signOut: () => this.signOut(), me: (() => { const a = s.authed || {}, staff = a.role === 'staff'; return { name: a.email ? (staff && /^staff@/i.test(a.email) ? 'AxisTech Staff' : lgName(a.email)) : 'John Demo', email: a.email || 'john@ump.org.au' }; })(),
      sideW: s.collapsed ? '64px' : '204px', umW: s.collapsed ? '38px' : '96px', headH: s.collapsed ? '72px' : '104px',
      menuOpen: s.menuOpen, toggleMenu: () => this.setState({ menuOpen: !s.menuOpen }),
      openSupport: () => this.setState({ page: 'support', modal: 'ticket', nt: { subject: '', farm: '', topic: '', files: [] }, menuOpen: false }),
      openTickets: () => this.setState({ page: 'support', supportTab: 'mine', menuOpen: false }),
      openProfile: () => this.setState({ page: 'profile', menuOpen: false }), expanded: !s.collapsed, collapsed: s.collapsed,
      toggleSide: () => this.setState({ collapsed: !s.collapsed }),
      nav, is, farms, providers,
      farm: farms.find(f => f.name === s.farmSel) || farms[0],
      farmUsers: USERS.filter(u => u[3] === (s.farmSel || FARMS[0].name)).map(([name, email, role]) => ({ name, email, role })),
      farmUserCounts: (() => { const u = USERS.filter(x => x[3] === (s.farmSel || FARMS[0].name)); return [['Owners', 'Owner'], ['Users', 'User'], ['Viewers', 'Viewer']].map(([label, r]) => ({ label, n: u.filter(x => x[2] === r).length })); })(),
      farmDeviceCounts: (() => { const d = DEVICES.filter(x => x[3] === (s.farmSel || FARMS[0].name)); const cats = [['Weather stations', 'Weather station'], ['Soil probes', 'Soil probe'], ['Walk-over scales', 'Walk-over scale'], ['Livestock scales', 'Livestock scale']]; return cats.map(([label, t]) => ({ label, n: d.filter(x => x[1] === t).length, img: t === 'Weather station' ? CIMG.Weather : t === 'Soil probe' ? CIMG['Soil probe'] : '' })).filter(c => c.n > 0); })(),
      editingFarm: s.editingFarm, notEditingFarm: !s.editingFarm, draft: s.draft,
      draftZone: s.editingFarm ? (zoneFor(s.draft.location) || 'Detecting\u2026') : ((s.farmData.find(f => f.name === s.farmSel) || s.farmData[0]).zone),
      setDraft: Object.fromEntries(['desc', 'location', 'phone', 'owner', 'email', 'abn'].map(k => [k, e => { const v = e.target.value; this.setState(st => ({ draft: { ...st.draft, [k]: v } })); }])),
      editFarm: () => { const f = s.farmData.find(x => x.name === s.farmSel) || s.farmData[0]; this.setState({ editingFarm: true, draft: { desc: f.desc, location: f.location, phone: f.phone, owner: f.owner, email: f.email, abn: f.abn } }); },
      cancelFarm: () => this.setState({ editingFarm: false }),
      saveFarm: () => this.setState(st => ({ editingFarm: false, farmData: st.farmData.map(f => f.name === (st.farmSel || st.farmData[0].name) ? { ...f, ...st.draft, zone: zoneFor(st.draft.location) || f.zone } : f) })),
      manageUsers: () => this.setState({ page: 'users', userTab: 'list', userFarm: s.farmSel || FARMS[0].name }),
      manageDevices: () => this.setState({ page: 'devices', devFarm: s.farmSel || FARMS[0].name }),
      userFarm: s.userFarm, setUserFarm: e => this.setState({ userFarm: e.target.value }),
      devFarm: s.devFarm, setDevFarm: e => this.setState({ devFarm: e.target.value, devPage: 1 }),
      userShown: USERS.filter(u => (!s.userFarm || u[3] === s.userFarm) && (!s.userRole || u[2] === s.userRole) && (!s.userStatus || u[5] === s.userStatus) && (!s.userQ || (u[0] + ' ' + u[1]).toLowerCase().includes(s.userQ.toLowerCase()))).length + ' users',
      userQ: s.userQ, setUserQ: e => this.setState({ userQ: e.target.value }), userRole: s.userRole, setUserRole: e => this.setState({ userRole: e.target.value }), userStatus: s.userStatus || '', setUserStatus: e => this.setState({ userStatus: e.target.value }),
      toggleRoles: () => this.setState(st => ({ userTab: st.userTab === 'roles' ? 'list' : 'roles' })),
      alertEmpty: !!s.alFarm && !['Riverbend Farm', 'Greg Farm', 'Agritech Farm', 'Bluegum Farm', 'Cedar Ridge Farm'].includes(s.alFarm), usersSub: IS_STAFF_ADMIN && !s.collapsed, usersSubOpen: IS_STAFF_ADMIN && s.usersSub === true, usersSubRot: s.usersSub === true ? 'rotate(0deg)' : 'rotate(180deg)', usersSubTitle: s.usersSub === true ? 'Collapse' : 'Expand',
      alertsSubOpen: IS_STAFF_ADMIN && s.alertsSub === true, alertsSubRot: s.alertsSub === true ? 'rotate(0deg)' : 'rotate(180deg)', alertsSubTitle: s.alertsSub === true ? 'Collapse' : 'Expand',
      toggleAlertsSub: e => { e.stopPropagation(); this.setState(st => ({ alertsSub: st.alertsSub !== true })); },
      toggleUsersSub: e => { e.stopPropagation(); this.setState(st => ({ usersSub: st.usersSub !== true })); },
      goRoles: () => this.setState({ page: 'users', userTab: 'roles', menuOpen: false, roleSel: -1, roleDraft: blankRole(), atQ: '', atSrc: '', tpls: TPL_SEED, atEdit: null, atDraft: null, scopeOpen: false, roleTried: false }), subPad: s.collapsed ? '16px' : '44px',
      rolesNav: s.page === 'users' && s.userTab === 'roles' ? { bg: 'rgba(59,130,246,.16)', fg: '#FFFFFF' } : { bg: 'transparent', fg: '#B3C2D6' },
      at: this.atVals(s), aa: this.aaVals(s),
      tplNav: s.page === 'alertTpl' ? { bg: 'rgba(59,130,246,.16)', fg: '#FFFFFF' } : { bg: 'transparent', fg: '#B3C2D6' },
      alFarm: s.alFarm || '', setAlFarm: e => this.setState({ alFarm: e.target.value }),
      alertRows: (() => { const A = [['Heat load', 'HLI above 86 in Pen 2', 'Riverbend Farm', '12 min ago', 'red'], ['Device offline', 'River Flat Probe 1 stopped reporting', 'Greg Farm', '3 h ago', 'grey'], ['Weather', 'Wind gusts over 60 km/h', 'Agritech Farm', '5 h ago', 'amber'], ['Soil', 'Moisture below 18% at 30 cm', 'Bluegum Farm', 'Yesterday', 'blue'], ['Frost', 'Overnight low forecast at -2\u00b0C', 'Cedar Ridge Farm', 'Yesterday', 'blue'], ['Heat load', 'HLI above 80 in Pen 4', 'Riverbend Farm', '2 days ago', 'amber']]; return A.filter(r => !s.alFarm || r[2] === s.alFarm).map(([type, text, farm, time, c]) => ({ type, text, farm, time, dot: (STATUS[c] || {}).dot || '#94a3b8' })); })(), rolesBtnLabel: s.userTab === 'roles' ? 'Back to users' : 'Manage roles',
      userStats: [['Total users', USERS.length, '#ecfeff', '#0e7490', 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.2A6.5 6.5 0 0 1 21.5 20'], ['Owners', USERS.filter(u => u[2] === 'Owner').length, ...ROLE_ST.Owner], ['Users', USERS.filter(u => u[2] === 'User').length, ...ROLE_ST.User], ['Viewers', USERS.filter(u => u[2] === 'Viewer').length, ...ROLE_ST.Viewer], ['Invited', USERS.filter(u => u[5] === 'Invited').length, '#fff7ed', '#c2410c', 'M4 6h16v12H4zM4 7l8 6 8-6']].map(([label, n, bg, fg, d]) => ({ label, n: String(n), bg, fg, d })),
      roleCards: ROLE_CARDS.map(([name, scope, desc, p]) => { const [bg, fg, d] = ROLE_ST[name]; return { name, scope, desc, bg, fg, d, count: String(name === 'UMP Admin' ? 2 : USERS.filter(u => u[2] === name).length), perms: ['View', 'Add', 'Edit', 'Delete', 'Users'].map((label, i) => ({ label, mark: p[i] ? '✓' : '–', bg: p[i] ? '#ecfdf5' : '#f8fafc', fg: p[i] ? '#047857' : '#94a3b8' })) }; }),
      tk: this.tkVals(s), de: this.deVals(s), board: this.boardVals(s), boardGrid: s.supStatus ? 'minmax(0,1fr)' : 'repeat(5,minmax(240px,1fr))',
      guideOpen: !!s.guideOpen, toggleGuide: () => this.setState(st => ({ guideOpen: !st.guideOpen })),
      roleGuide: ROLE_CARDS.map(([name, scope, desc]) => ({ name, desc: desc + ' ' + scope + '.', fg: ROLE_ST[name][1], d: ROLE_ST[name][2] })),
      an: this.anVals(s), dv: this.dvVals(s),
      uDetail: (() => { const u = USERS.find(x => x[0] === s.userSel) || NEWU; return { name: u[0], email: u[1], ini: u[0].split(' ').map(w => w[0]).join('').slice(0, 2), kv: [{ k: 'Role', v: u[2] }, { k: 'Farm', v: u[3] }, { k: 'Last active', v: u[4] }, { k: 'Status', v: u[5] }, { k: 'Joined', v: u[0] === NEWU[0] ? 'Yesterday' : '2026' }], manage: () => this.setState({ modal: null, page: 'users', userFarm: u[3] }) }; })(),
      newFarm: s.newFarm,
      setNewFarm: Object.fromEntries(['name', 'desc', 'location', 'phone', 'owner', 'email', 'abn'].map(k => [k, e => { const v = e.target.value; this.setState(st => ({ newFarm: { ...st.newFarm, [k]: v } })); }])),
      saveNewFarm: () => { const n = s.newFarm; if (!this.farmValid(n).ok) { this.setState({ farmTried: true }); return; } this.flash('Farm created', n.name + ' has been created. An invitation has been sent to ' + (n.owner || 'the owner') + (n.email ? ' at ' + n.email : '') + ' to log in to the Producer Portal.'); this.setState(st => ({ modal: null, farmStep: 1, farmData: [...st.farmData, { name: n.name, desc: n.desc || '', location: n.location || '', phone: n.phone || '', owner: n.owner || '', email: n.email || '', abn: n.abn || '', zone: zoneFor(n.location) || 'Upper Murray', users: 0, devices: 0, status: 'Onboarding' }] })); },
      farmDevices: DEVICES.filter(d => d[3] === (s.farmSel || FARMS[0].name)).map(([name, type, provider, farm, last, status]) => ({ name, type, provider, status, st: stOf(status), img: type === 'Weather station' ? CIMG.Weather : CIMG['Soil probe'] })),
      kpis: [
        { label: 'Farms', value: String(FARMS.length), glyph: 'F', chip: '#e6f7f5', ink: '#0f766e', go: () => this.setState({ page: 'farms' }) },
        { label: 'Users', value: '24', glyph: 'U', chip: '#f5f3ff', ink: '#6d28d9', go: () => this.setState({ page: 'users' }) },
        { label: 'Devices', value: String(FLEET.length), glyph: 'D', chip: '#eff6ff', ink: '#1d4ed8', go: () => this.setState({ page: 'devices' }) },
      ],
      counts: { farms: String(FARMS.length), users: '24', devices: String(FLEET.length), providers: '5' },
            homeTickets: [['In progress', 'Device alerts not sending'], ['Open', 'Device dashboards not updating the latest weather station data']].map(([tag, text]) => ({ tag, text, st: stOf(tag) })),
      w: { weather: s.widgets.includes('weather'), alerts: s.widgets.includes('alerts'), tickets: s.widgets.includes('tickets') },
      rm: Object.fromEntries(['weather', 'alerts', 'tickets'].map(k => [k, () => this.setState(st => ({ widgets: st.widgets.filter(x => x !== k) }))])),
      pickerOpen: s.picker, pickerClosed: !s.picker, togglePicker: () => this.setState({ picker: !s.picker }),
      catalogue: Object.keys(WIDGETS).map(id => { const [name, desc, iconBg, iconFg] = WIDGETS[id]; const on = s.widgets.includes(id); const k = {}; Object.keys(WIDGETS).forEach(x => { k[x] = x === id; }); return { name, desc, k, iconBg, iconFg, action: on ? 'Added' : 'Add', pillBg: on ? '#f0fdfa' : '#f1f5f9', pillFg: on ? '#0b6b6a' : '#475569', bg: on ? '#f8fbff' : '#fff', ring: on ? 'rgba(14,165,164,.55)' : 'rgba(15,23,42,.08)', ringW: on ? '1.5px' : '1px', toggle: () => this.setState(st => ({ widgets: on ? st.widgets.filter(x => x !== id) : [...st.widgets, id] })) }; }),
      ...this.dockVals(s),
      forecast: [['Mon', 24, 9, '0 mm'], ['Tue', 27, 11, '0 mm'], ['Wed', 22, 12, '6 mm'], ['Thu', 18, 8, '14 mm'], ['Fri', 21, 7, '2 mm']].map(([day, hi, lo, rain]) => ({ day, hi, lo, rain })),
      editing: s.editing, notEditing: !s.editing, contact: s.contact,
      setContact: Object.fromEntries(['name','email','mobile','org'].map(k => [k, e => { const v = e.target.value; this.setState(st => ({ contact: { ...st.contact, [k]: v } })); }])),
      startEdit: () => { this._saved = s.contact; this.setState({ editing: true }); }, cancelEdit: () => this.setState({ editing: false, contact: this._saved || s.contact }), saveEdit: () => this.setState({ editing: false }),
      homeAlerts: [
        ['Heat load', 'HLI above 86 in Pen 2', 'Riverbend Farm', '12 min ago', 'red'],
        ['Device offline', 'River Flat Probe 1 stopped reporting', 'Greg Farm', '3 h ago', 'grey'],
        ['Weather', 'Wind gusts over 60 km/h', 'Agritech Farm', '5 h ago', 'amber'],
        ['Soil', 'Moisture below 18% at 30 cm', 'Bluegum Farm', 'Yesterday', 'blue'],
      ].slice(0, 3).map(([type, text, farm, time, c]) => ({ tag: type, text: text + ' · ' + farm, st: STATUS[c] })),
      openAlertReport: () => this.setState({ page: 'reports', reportTab: 'alerts' }),
      thumbRef: this.thumbRef, dockScrollRef: this.dockScrollRef, dockScroll: this.updThumb,
      mapRef: this.mapRef, mapQuery: s.mapQuery || '',
      setMapQuery: e => this.setState({ mapQuery: e.target.value }),
      showMapResults: !!(s.mapQuery || '').trim(),
      mapResults: (() => { const mq = (s.mapQuery || '').toLowerCase().trim(), r = FARMS.filter(f => (f.name + ' ' + f.zone + ' ' + (f.owner || '') + ' ' + (f.loc || '')).toLowerCase().includes(mq)).slice(0, 6); return (r.length ? r : []).map(f => ({ ...f, fly: () => { this.flyTo(f); this.setState({ mapQuery: '' }); } })); })(),
      mapNoResults: !FARMS.some(f => (f.name + ' ' + f.zone + ' ' + (f.owner || '') + ' ' + (f.loc || '')).toLowerCase().includes((s.mapQuery || '').toLowerCase().trim())),
      mapKey: e => { if (e.key === 'Enter') { const mq = (s.mapQuery || '').toLowerCase().trim(), f = mq && FARMS.find(x => (x.name + ' ' + x.zone).toLowerCase().includes(mq)); if (f) { this.flyTo(f); this.setState({ mapQuery: '' }); } } if (e.key === 'Escape') this.setState({ mapQuery: '' }); },
      farmQuery: s.farmQuery, setFarmQuery: e => this.setState({ farmQuery: e.target.value }),
      farmsFiltered: farms.filter(f => !q || (f.name + f.owner + f.zone).toLowerCase().includes(q)).map(f => ({ ...f, launch: () => this.redirect(f.name) })),
      farmGrid: s.farmView === 'grid', farmList: s.farmView === 'list',
      setGrid: () => this.setState({ farmView: 'grid' }), setList: () => this.setState({ farmView: 'list' }),
      farmChips: [['Total farms', s.farmData.length, '#ecfeff', '#0e8fb0'], ['Live', s.farmData.filter(x => x.status === 'Live').length, '#ecfdf5', '#10b981'], ['Onboarding', s.farmData.filter(x => x.status === 'Onboarding').length, '#fffbeb', '#f59e0b']].map(([label, n, bg, fg]) => ({ label, n: String(n), bg, fg })),
      gridBtn: { bg: s.farmView === 'grid' ? '#fff' : 'transparent', fg: s.farmView === 'grid' ? '#0f172a' : '#64748b' },
      listBtn: { bg: s.farmView === 'list' ? '#fff' : 'transparent', fg: s.farmView === 'list' ? '#0f172a' : '#64748b' },
      um: this.umVals(s),
      userTabs: this.tabs([['list', 'All Users'], ['roles', 'Manage Roles']], s.userTab, 'userTab'),
      userTab: { list: s.userTab === 'list' || !IS_STAFF_ADMIN, roles: s.userTab === 'roles' && IS_STAFF_ADMIN },
      isStaffAdmin: IS_STAFF_ADMIN, viewAs: s.viewAs, viewBadge: { label: VIEWS[s.viewAs][0], fg: VIEWS[s.viewAs][1], bg: VIEWS[s.viewAs][2] },
      setViewAs: e => { const v = e.target.value; this.setState(st => ({ viewAs: v, userTab: v === 'staff' ? st.userTab : 'list', userFarm: '', devFarm: '', pop: null })); setTimeout(() => this.applyView(), 0); }, roleInfoOpen: !!s.roleInfo, roleInfoRot: s.roleInfo ? 'rotate(180deg)' : 'rotate(0deg)', toggleRoleInfo: () => this.setState(st => ({ roleInfo: !st.roleInfo })),
      roleInfo: ROLE_INFO.map(([name, scope, desc, fg, bg]) => ({ name, scope, desc, fg, bg })),
      users: USERS.filter(u => (!s.userFarm || u[3] === s.userFarm) && (!OWNER || u[3] === OWNER_FARM) && (!s.userRole || u[2] === s.userRole) && (!s.userStatus || u[5] === s.userStatus) && (!s.userQ || (u[0] + ' ' + u[1]).toLowerCase().includes(s.userQ.toLowerCase()))).map(([name, email, role, farms, last, status]) => ({ name, email, role, farms, last, status, rbg: (ROLE_ST[role] || ROLE_ST.Viewer)[0], rfg: (ROLE_ST[role] || ROLE_ST.Viewer)[1], rd: (ROLE_ST[role] || ROLE_ST.Viewer)[2], roleOpts: ['Owner', 'User', 'Viewer'].map(v => ({ v, sel: v === role })), setRole: e => { const v = e.target.value; if (v !== role) this.setState({ roleChg: { email, name, from: role, to: v, farm: farms } }); }, st: stOf(status), initials: name.split(' ').map(n => n[0]).join('').slice(0, 2) })),
      ...this.roleVals(s),
      devices: DEVICES.filter(d => (!s.devFarm || d[3] === s.devFarm) && (!OWNER || d[3] === OWNER_FARM)).map(([name, type, provider, farm, last, status, coords]) => ({ name, type, provider, farm, last, status, coords, st: stOf(status) })),
      sharing: FARMS.map((f, i) => {
        const sh = s.share[i];
        const upd = fn => this.setState(st => { const a = JSON.parse(JSON.stringify(st.share)); fn(a[i]); return { share: a }; });
        return {
          name: f.name, zone: f.zone, op: sh.on ? 1 : 0.45, ...this.toggle(sh.on),
          toggle: () => upd(x => { x.on = !x.on; }),
          sets: DATASETS.map((label, j) => { const on = sh.sets[j]; return { label, bd: on ? TEAL : '#cbd5e1', bg: on ? '#f0fdfa' : '#fff', fg: on ? '#0f766e' : '#64748b', box: on ? TEAL : '#fff', toggle: () => upd(x => { x.sets[j] = x.sets[j] ? 0 : 1; }) }; }),
        };
      }),
      reportTabs: this.tabs([['users', 'Users and access'], ['growth', 'Farm and network growth'], ['usage', 'Dashboard usage'], ['alerts', 'Alerts']], s.reportTab, 'reportTab'),
      report: this.report(),
      supportTabs: this.tabs([['portal', 'Producer Portal tickets'], ['mine', 'My tickets'], ['create', 'Create ticket']], s.supportTab, 'supportTab'),
      supportTab: { create: s.supportTab === 'create', list: s.supportTab !== 'create' },
      ticketList: (s.supportTab === 'mine' ? [
        ['#1046', 'Device alerts not sending', 'Riverbend Farm', 'John', 'High', 'Today 09:12', 'In progress'],
        ['#1031', 'Add Gallagher to Cedar Ridge Farm', 'Cedar Ridge Farm', 'John', 'Low', '25 Oct', 'Open'],
        ['#1028', 'Invite email went to spam', 'Ed Farm', 'John', 'Low', '21 Oct', 'Resolved'],
      ] : [
        ['#1045', 'Device dashboards not updating the latest weather station data', 'Greg Farm', 'Tom Whitfield', 'Medium', 'Today 08:40', 'Open'],
        ['#1043', 'Soil probe readings look too low', 'Bluegum Farm', 'Priya Nair', 'Medium', 'Yesterday', 'In progress'],
        ['#1035', 'Heat load alert sent twice', 'Agritech Farm', 'James Hollis', 'Medium', '28 Oct', 'In progress'],
        ['#1030', 'Cannot see regional map', 'Hillview Farm', 'Grace Lindqvist', 'Low', '24 Oct', 'Resolved'],
      ]).map(([id, subject, farm, by, priority, updated, status]) => ({ id, subject, farm, by, priority, updated, status, st: stOf(status) })),
      priorities: ['Low', 'Medium', 'High', 'Urgent'].map(label => ({ label, ...sel(s.priority === label), go: () => this.setState({ priority: label }) })),
      tickets: [
        ['#1046', 'Device alerts not sending', 'High', 'Admin', 'Today 09:12', 'In progress'],
        ['#1045', 'Device dashboards not updating the latest weather station data', 'Medium', 'Producer', 'Today 08:40', 'Open'],
        ['#1035', 'Heat load alert sent twice', 'Medium', 'Producer', '28 Oct', 'Waiting'],
        ['#1028', 'Invite email went to spam', 'Low', 'Admin', '21 Oct', 'Resolved'],
      ].map(([id, subject, priority, portal, updated, status]) => ({ id, subject, priority, portal, updated, status, st: stOf(status) })),
      pw: s.pw, setPw: e => this.setState({ pw: e.target.value }),
      pwBars: [0, 1, 2, 3].map(i => ({ c: i < score ? (score < 3 ? '#f59e0b' : TEAL) : '#E2E8F0' })),
      pwRules: ['At least 8 characters', 'One uppercase letter', 'One number', 'One symbol'].map((l, i) => ({ l, c: pwScore[i] ? '#0f766e' : '#94a3b8' })),
      na: this.naVals(s), modal: { alert: s.modal === 'alert' && !!s.na, tk: s.modal === 'tk' && !!s.tkSel, dev: s.modal === 'dev' && !!s.devEdit, user: s.modal === 'user', ticket: s.modal === 'ticket', farm: s.modal === 'farm', invite: s.modal === 'invite', wizard: s.modal === 'wizard' },
      openFarmModal: () => this.setState({ modal: 'farm', newFarm: {}, farmTried: false, addrManual: false, addrOpen: false, addrPicked: false }),
      ...this.formVals(s),
      farmStep1: (s.farmStep || 1) === 1, farmStep2: s.farmStep === 2,
      farmSteps: [['1', 'Farm details'], ['2', 'Owner details']].map(([n, label], i) => { const cur = (s.farmStep || 1), done = i + 1 < cur, on = i + 1 === cur; return { n: done ? '\u2713' : n, label, bar: i + 1 <= cur ? '#0B7F7E' : '#E2E8F0', fg: on || done ? '#0f172a' : '#94a3b8', cbg: on || done ? '#0B7F7E' : '#F1F5F9', cfg: on || done ? '#fff' : '#64748b' }; }),
      farmNext: () => { if (!s.newFarm.name) return; this.setState({ farmStep: 2 }); }, farmBackLabel: s.farmStep === 2 ? 'Back' : 'Cancel', farmBackOrCancel: () => s.farmStep === 2 ? this.setState({ farmStep: 1 }) : this.setState({ modal: null }),
      inv: s.inv || {}, setInv: Object.fromEntries(['name', 'email', 'farm'].map(k => [k, e => { const v = e.target.value; this.setState(st => ({ inv: { ...(st.inv || {}), [k]: v } })); }])),
      sendInvite: () => { const i = s.inv || {}; if (!this.invValid(i).ok) { this.setState({ invTried: true }); return; } this.setState({ modal: null, inv: {}, invTried: false }); this.flash('Invitation sent', 'An email has been sent to ' + (i.email || i.name || 'the user') + ' with a link to log in to the Producer Portal.'); },
      toast: s.toast ? { show: true, title: s.toast.title, msg: s.toast.msg, close: () => this.setState({ toast: null }) } : { show: false },
      loc: s.locOpen ? { pill: s.locAddr || (s.locLL[1].toFixed(6) + ', ' + s.locLL[0].toFixed(6)), show: true, lat: s.locLL[1].toFixed(6), lng: s.locLL[0].toFixed(6), close: () => this.setState({ locOpen: false }), confirm: () => this.setState(st => ({ locOpen: false, devCoords: { ...(st.devCoords || {}), [st.devEdit.serial]: st.locLL[1].toFixed(4) + ', ' + st.locLL[0].toFixed(4) } })) } : { show: false },
      locMapRef: this.locMapRef, locInput: this.locInput, locClear: this.locClear, locQ: s.locQ || '', locQOn: !!(s.locQ),  locSugOn: (s.locSugL || []).length > 0, locSug: this.locSugVals(s), dm: this.dmVals(s),
            newZone: (() => { const a = s.newFarm.location || ''; if (!a.trim()) return { label: 'Filled from address', fg: '#94a3b8' }; const z = zoneFor(a); return z ? { label: z, fg: '#0f172a' } : { label: 'Detecting\u2026', fg: '#94a3b8' }; })(), openInvite: () => this.setState({ modal: 'invite', inv: {}, invTried: false, invGuide: false }),
      goProducer: () => window.open(PP + '#providers', '_blank'),
      openWizard: () => this.setState({ modal: 'wizard', wizStep: 1, tested: false }),
      closeModal: () => this.setState({ modal: null }), stop: e => e.stopPropagation(),
      goPortal: () => this.redirect(null), rd: s.rd ? { show: true, farm: s.rd.farm || '', hasFarm: !!s.rd.farm } : { show: false },
      wizSteps: ['Choose type', 'Authenticate', 'Test', 'Map to farms', 'Sync rules'].map((label, i) => ({ n: i + 1, label, bar: i + 1 <= w ? TEAL : '#E2E8F0', fg: i + 1 === w ? '#0f172a' : '#94a3b8' })),
      wiz: { s1: w === 1, s2: w === 2, s3: w === 3, s4: w === 4, s5: w === 5 },
      wizName: s.wizProvider,
      wizProviders: PROVIDERS.map(p => ({ name: p.name, kind: p.kind, bd: s.wizProvider === p.name ? TEAL : '#E2E8F0', bg: s.wizProvider === p.name ? '#f0fdfa' : '#fff', go: () => this.setState({ wizProvider: p.name }) })),
      runTest: () => this.setState({ tested: true }), testPassed: s.tested,
      wizMap: [['WS-2201 Homestead', 'Greg Farm'], ['WS-2207 Hilltop', 'Ed Farm'], ['WS-2214 Valley', 'Riverbend Farm'], ['WS-2219 Alpine', 'Agritech Farm']].map(([device, farm]) => ({ device, farm })),
      freqs: ['Every 15 minutes', 'Hourly', 'Every 6 hours', 'Daily'].map(label => ({ label, ...sel(s.freq === label), go: () => this.setState({ freq: label }) })),
      wizBackLabel: w === 1 ? 'Cancel' : 'Back', wizNextLabel: w === 5 ? 'Connect provider' : 'Continue',
      wizBack: () => w === 1 ? this.setState({ modal: null }) : this.setState({ wizStep: w - 1 }),
      wizNext: () => w === 5 ? this.setState({ modal: null }) : this.setState({ wizStep: w + 1 }),
    };
  }
}

class AdminPortal extends Component {
  render() {
    const V = { ...this.props, ...(this.renderVals() || {}) };
    return <View V={V} />;
  }
}

export default AdminPortal;
