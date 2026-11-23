import React from 'react';
import View from './View.jsx';

const PRI = {
  critical: { label: 'Critical', ink: '#C0392B', bg: '#FDE8E6', dot: '#DC2626' },
  high: { label: 'High', ink: '#B45309', bg: '#FCE9DA', dot: '#E07B12' },
  medium: { label: 'Medium', ink: '#8A6D0B', bg: '#FBF3D0', dot: '#D4A20A' },
  low: { label: 'Low', ink: '#2E7D4F', bg: '#E3F1E7', dot: '#3BA55C' },
};
const FREQ = { '1h': ['Every hour', '1 per hour'], '6h': ['Every 6 hours', '1 per 6 hours'], '12h': ['Every 12 hours', '1 per 12 hours'], '24h': ['Once a day', '1 per day'] };
const ROLES = [['owner', 'Owner'], ['admin', 'Admin'], ['user', 'User'], ['viewer', 'Viewer']];
const CH = [['email', 'Email', 'M3 5h18v14H3zM3 7l9 6 9-6'], ['sms', 'SMS', 'M4 5h16v11H9l-5 4zM8 10h8'], ['push', 'Mobile Notification', 'M7 3h10v18H7zM11 18h2']];
const HEALTH = [{ key: '_nodata', label: 'No data received', unit: 'hours', health: true }, { key: '_battery', label: 'Battery', unit: '%' }];
const T = (name, m, op, v, pri, desc) => ({ name, m, op, v, pri, desc });
const TPL = {
  weather: [
    T('Frost risk', 'temp', 'below', 2, 'critical', 'Act before temperatures reach freezing to protect sensitive crops.'),
    T('Heat stress', 'temp', 'above', 35, 'high', 'Sustained heat raises crop and livestock stress.'),
    T('Spray drift risk', 'wind', 'above', 20, 'high', 'Wind above most spray label limits.'),
    T('Damaging gusts', 'gust', 'above', 60, 'critical', 'Strong gusts can damage crops, sheds and irrigation.'),
    T('Heavy rainfall', 'rain', 'above', 25, 'high', 'Large rain totals can cause runoff and waterlogging.'),
    T('Outside spray window', 'deltaT', 'above', 8, 'medium', 'Delta T above 8 °C increases droplet evaporation.'),
    T('Very high UV', 'uv', 'above', 8, 'low', 'Sun protection needed for field workers.'),
  ],
  soil: [
    T('Low soil moisture', 'moisture', 'below', 10, 'high', 'Moisture has fallen below the level you set for this probe.'),
    T('High soil moisture', 'moisture', 'above', 40, 'medium', 'Moisture has risen above the level you set for this probe.'),
    T('Cold soil', 'temp', 'below', 10, 'low', 'Soil temperature is below the level you set.'),
    T('Warm soil', 'temp', 'above', 30, 'low', 'Soil temperature is above the level you set.'),
    T('High VIC', 'vic', 'above', 1500, 'medium', 'VIC has risen above the level you set for this probe.'),
  ],
  rain: [
    T('Heavy rain day', 'rain', 'above', 25, 'high', 'Large daily totals can cause runoff and erosion.'),
    T('Storm rainfall', 'rain', 'above', 50, 'critical', 'Check drainage, dams and access tracks.'),
  ],
  gas: [
    T('High ammonia', 'nh3', 'above', 20, 'critical', 'Ammonia above 20 ppm affects animal and worker health.'),
    T('High CO₂', 'co2', 'above', 3000, 'high', 'Poor ventilation in the shed.'),
    T('Carbon monoxide', 'co', 'above', 25, 'critical', 'Check heaters and engines running indoors.'),
    T('Shed overheating', 'temp', 'above', 32, 'high', 'Heat stress risk for housed animals.'),
  ],
  leaf: [
    T('Disease risk', 'wet', 'above', 80, 'high', 'Long wet periods favour fungal infection.'),
    T('Leaf frost', 'temp', 'below', 1, 'critical', 'Leaf surfaces are close to freezing.'),
  ],
  level: [
    T('Low tank', 'pct', 'below', 20, 'critical', 'Refill before stock or irrigation runs short.'),
    T('Tank overflow', 'pct', 'above', 95, 'high', 'Water is close to the overflow point.'),
  ],
  pressure: [T('Storm front', 'p', 'below', 1000, 'high', 'Low pressure often brings wind and rain.')],
  dust: [
    T('PM2.5 above guideline', 'pm25', 'above', 25, 'high', 'Fine particles above the 24-hour air quality guideline.'),
    T('PM10 above guideline', 'pm10', 'above', 50, 'high', 'Coarse dust above the 24-hour air quality guideline.'),
  ],
  thp: [
    T('Heat stress', 'temp', 'above', 35, 'high', 'Sustained heat raises crop and livestock stress.'),
    T('High humidity', 'hum', 'above', 85, 'medium', 'Damp air increases mould and disease risk.'),
  ],
};
TPL.mini = TPL.soil.concat([T('High salinity', 'ec', 'above', 2, 'high', 'Salt build-up reduces water uptake.')]);
const HEALTH_TPL = [T('Device offline', '_nodata', 'nodata', 2, 'high', 'No readings have arrived from the device.'), T('Low battery', '_battery', 'below', 20, 'low', 'Replace or charge the battery soon.')];
const CAT = { moisture: 'Soil moisture', soiltemp: 'Soil temperature', soilhealth: 'Soil health / VIC', temp: 'Temperature', humidity: 'Humidity', wind: 'Wind', rain: 'Rain', spray: 'Spray & sun', air: 'Air quality', water: 'Water level', pressure: 'Air pressure', leaf: 'Leaf wetness', device: 'Device health', other: 'Other' };
const MCAT = { moisture: 'moisture', vic: 'soilhealth', ec: 'soilhealth', hum: 'humidity', wind: 'wind', gust: 'wind', rain: 'rain', deltaT: 'spray', uv: 'spray', nh3: 'air', co2: 'air', co: 'air', pm25: 'air', pm10: 'air', pct: 'water', p: 'pressure', wet: 'leaf' };
const catOf = (kind, m) => m[0] === '_' ? 'device' : m === 'temp' ? (kind === 'soil' || kind === 'mini' ? 'soiltemp' : 'temp') : MCAT[m] || 'other';
const CARET_DN = 'M5 8h14l-7 8z', CARET_UP = 'M5 16h14l-7-8z';
const BLANK = () => ({ id: 0, si: null, name: '', conds: [], pri: 'medium', freq: '1h', roles: { owner: true, admin: false, user: false, viewer: false }, also: '', ch: { email: true, sms: false, push: true }, msg: '', on: true, hist: 'no alerts in the last 12 months', tpl: null });
let uid = 1;
class Component extends React.Component {
  state = { data: {}, ed: null, dd: null, pend: '' };
  srcs() { return (this.props.sources || []).filter(Boolean); }
  skey() { return this.srcs().map(s => s.key).join('|') || 'none'; }
  metrics(si) { const s = si == null ? null : this.srcs()[si]; return s ? (s.fields || []).map(f => ({ key: f.key, label: f.label, unit: f.unit, dec: f.dec, vals: f.vals })).concat(HEALTH) : []; }
  fu(u) { return u ? (/^[%°]/.test(u) ? u : ' ' + u) : ''; }
  build(t, si) {
    if (!this.metrics(si).some(x => x.key === t.m)) return null;
    return { ...BLANK(), id: uid++, si, name: t.name, conds: [{ metric: t.m, op: t.op, value: t.v }], pri: t.pri, desc: t.desc || '', ch: { email: true, sms: t.pri === 'critical', push: true } };
  }
  data() {
    const k = this.skey(), have = this.state.data[k]; if (have) return have;
    const tpls = []; this.srcs().forEach((s, si) => (TPL[s.kind] || []).forEach(t => { const b = this.build(t, si); if (b) tpls.push(b); }));
    HEALTH_TPL.forEach(t => { const b = this.build(t, 0); if (b) tpls.push(b); });
    const rules = tpls.slice(1, 2).map(t => ({ ...t, id: uid++ }));
    return { rules, tpls };
  }
  put(fn) { const k = this.skey(), d = this.data(); this.setState(st => ({ data: { ...st.data, [k]: fn(d) } })); }
  clone(r) { return { ...r, conds: r.conds.map(c => ({ ...c })), roles: { ...r.roles }, ch: { ...r.ch } }; }
  open(mode, item) { const b = BLANK(); if (this.srcs().length >= 1 && !item) b.si = 0; this.setState({ dd: null, pend: '', ed: { mode, d: this.clone(item || b) } }); }
  applyTpl(t) { const cur = this.state.ed; this.setState({ dd: null, ed: { ...cur, d: t ? { ...this.clone(t), id: 0, on: cur.d.on, tpl: t.id } : { ...BLANK(), on: cur.d.on } } }); }
  patch(p) { this.setState(st => ({ ed: { ...st.ed, d: { ...st.ed.d, ...p } } })); }
  patchCond(i, p) { const d = this.state.ed.d; this.patch({ conds: d.conds.map((c, j) => j === i ? { ...c, ...p } : c) }); }
  condText(r) {
    const ms = this.metrics(r.si);
    const parts = r.conds.map(c => { const m = ms.find(x => x.key === c.metric) || { label: c.metric, unit: '' };
      if (m.health) return 'No data received for ' + c.value + ' ' + (+c.value === 1 ? 'hour' : 'hours');
      return m.label + ' ' + c.op + ' ' + c.value + this.fu(m.unit); });
    return parts.length ? parts.join(' and ') : 'No conditions set';
  }
  save() {
    const e = this.state.ed; if (!e) return; const d = e.d;
    if (d.si == null || !d.name.trim() || !d.conds.length || d.conds.some(c => c.value === '')) return;
    const item = { ...d, name: d.name.trim(), conds: d.conds.map(c => ({ ...c, value: +c.value })) };
    if (e.mode === 'edit') this.put(x => ({ ...x, rules: x.rules.map(r => r.id === d.id ? item : r) }));
    else this.put(x => ({ ...x, rules: [...x.rules, { ...item, id: uid++ }] }));
    this.setState({ ed: null, dd: null });
  }
  renderVals() {
    const srcs = this.srcs(), D = this.data(), multi = srcs.length > 1, s0 = srcs[0] || {}, cp = !!this.props.compact;
    const box = on => ({ tick: on ? '✓' : '', boxBd: on ? '#2E7D4F' : '#9AA39E', boxBg: on ? '#2E7D4F' : '#fff' });
    const rules = D.rules.map(r => { const p = PRI[r.pri] || PRI.medium; return {
      name: r.name, cond: this.condText(r), device: (srcs[r.si] || s0).name || '', dot: r.on ? p.dot : '#B8C2BC',
      paused: !r.on, op: r.on ? 1 : .6, rowBg: r.on ? '#fff' : '#FAFBFA',
      email: !!r.ch.email, sms: !!r.ch.sms, push: !!r.ch.push, freq: (FREQ[r.freq] || FREQ['1h'])[1], hist: r.hist,
      edit: () => this.setState({ info: 'edit' }),
      remove: () => this.put(x => ({ ...x, rules: x.rules.filter(y => y.id !== r.id) })),
    }; });
    const e = this.state.ed, d = e ? e.d : { conds: [], roles: {}, ch: {}, si: null }, ms = this.metrics(d.si), src = d.si == null ? {} : srcs[d.si] || {};
    const hasDev = d.si != null;
    const tplItems = D.tpls.map(t => { const added = D.rules.some(r => r.name === t.name && r.si === t.si); return { ck: catOf((srcs[t.si] || {}).kind, t.conds[0].metric), name: t.name + (multi ? ' · ' + ((srcs[t.si] || {}).label || '') : ''), cond: this.condText(t), note: added ? 'Added' : '', op: added ? .55 : 1, bg: d.tpl === t.id ? '#E6EFE9' : '#fff', use: ev => { ev.stopPropagation(); this.applyTpl(t); } }; });
    const tplGroups = Object.keys(CAT).filter(k => tplItems.some(t => t.ck === k)).map(k => ({ upper: CAT[k].toUpperCase(), items: tplItems.filter(t => t.ck === k) }));
    const curTpl = D.tpls.find(t => t.id === d.tpl);
    const valid = e && hasDev && d.name && d.name.trim() && d.conds.length && !d.conds.some(c => c.value === '');
    const p = PRI[d.pri] || PRI.medium, dd = this.state.dd, pend = this.state.pend;
    const conds = (d.conds || []).map((c, i) => { const m = ms.find(x => x.key === c.metric) || { label: c.metric };
      const last = m.vals && m.vals.length ? m.vals[m.vals.length - 1] : null;
      return { label: (src.label ? src.label + ' ' : '') + m.label, now: last == null ? (m.health ? 'Time since the last reading' : 'No current reading') : 'now ' + (+last).toFixed(m.dec ?? 1) + this.fu(m.unit),
        hasOps: !m.health, isHealth: !!m.health, op: c.op, value: c.value, unit: m.unit || '',
        setOp: ev => this.patchCond(i, { op: ev.target.value }), setValue: ev => this.patchCond(i, { value: ev.target.value }),
        remove: () => this.patch({ conds: d.conds.filter((_, j) => j !== i) }) }; });
    const ins = s => this.patch({ msg: (d.msg ? d.msg.replace(/\s*$/, ' ') : '') + s });
    const units = ms.filter(m => m.unit && !m.health && d.conds.some(c => c.metric === m.key)).map(m => m.unit).filter((u, i, a) => a.indexOf(u) === i);
    const tokens = units.map(u => ({ label: u, go: () => ins(u) })).concat([{ label: 'Device Name', go: () => ins('{Device Name}') }])
      .concat(d.conds.map(c => ms.find(x => x.key === c.metric)).filter(m => m && !m.health).map(m => ({ label: m.label, go: () => ins('{' + m.label + '}') })));
    return {
      devName: multi ? srcs.map(s => s.name).filter((v, i, a) => a.indexOf(v) === i).join(' + ') : s0.name || 'this device', devSerial: s0.serial || '',
      hdPad: cp ? '14px 14px' : '18px 22px', bdPad: cp ? '14px 14px 16px' : '18px 22px 22px',
      ovPos: cp ? 'absolute' : 'fixed', ovAlign: cp ? 'flex-end' : 'center', ovPad: cp ? '40px 0 0' : '20px', mdMaxH: cp ? '100%' : 'calc(100vh - 40px)', mdRad: cp ? '16px 16px 0 0' : '12px',
      gridCols: cp ? 'minmax(0,1fr)' : 'minmax(100px,135px) minmax(0,1fr)',
      ruleCount: rules.length + (rules.length === 1 ? ' alert' : ' alerts'), rules, noRules: !rules.length, tplGroups,
      openNew: () => this.setState({ info: 'new' }), infoOpen: !!this.state.info, closeInfo: () => this.setState({ info: null }), infoTitle: this.state.info === 'edit' ? 'Edit alert' : 'Add alert', infoMsg: this.state.info === 'edit' ? 'Redirects to the Alerts module with this alert open for editing.' : 'Redirects to the Alerts module with the alert form open and this device selected.', isNew: !!e && e.mode !== 'edit',
      tplOpen: dd === 'tpl', tplBd: dd === 'tpl' ? '#2E7D4F' : '#D7DDD9', tplCaret: dd === 'tpl' ? CARET_UP : CARET_DN,
      tplLabel: curTpl ? curTpl.name : cp ? 'Templates' : 'Choose from templates', noneBg: d.tpl == null ? '#E6EFE9' : '#fff',
      ddTpl: ev => { ev.stopPropagation(); this.setState({ dd: dd === 'tpl' ? null : 'tpl' }); }, stopOnly: ev => ev.stopPropagation(),
      tplNone: ev => { ev.stopPropagation(); this.applyTpl(null); },
      edOpen: !!e, d, edTitle: e && e.mode === 'edit' ? 'Edit Device Alert' : 'Create Device Alert', saveLabel: e && e.mode === 'edit' ? 'Update' : 'Submit', saveBg: valid ? '#2E7D4F' : '#A9C9B5',
      closeEd: () => this.setState({ ed: null, dd: null }), stop: ev => { ev.stopPropagation(); if (dd) this.setState({ dd: null }); }, save: () => this.save(),
      swBg: d.on ? '#6FA684' : '#CBD3CE', knob: d.on ? '21px' : '3px', toggleOn: () => this.patch({ on: !d.on }),
      setName: ev => this.patch({ name: ev.target.value }), setAlso: ev => this.patch({ also: ev.target.value }), setMsg: ev => this.patch({ msg: ev.target.value }),
      srcOpts: srcs.map((s, i) => ({ i, name: s.name })), srcKind: src.label || '', hasDev, siVal: hasDev ? String(d.si) : '', devInk: hasDev ? '#0F1A14' : '#9AA39E',
      setSrc: ev => this.patch({ si: ev.target.value === '' ? null : +ev.target.value, conds: [] }),
      nRec: hasDev ? 3 : 2, nSet: hasDev ? 4 : 3,
      condCount: d.conds.length, conds, metricOpts: ms, pendMetric: pend,
      setPend: ev => this.setState({ pend: ev.target.value }),
      addBd: pend ? '#E8A050' : '#C9CFCB', addInk: pend ? '#B4611A' : '#9AA39E',
      addCond: () => { if (!pend) return; const m = ms.find(x => x.key === pend) || {}; this.patch({ conds: [...d.conds, { metric: pend, op: m.health ? 'nodata' : 'above', value: '' }] }); this.setState({ pend: '' }); },
      roleOpts: ROLES.map(([k, label]) => { const on = !!d.roles[k]; return { label, ...box(on), go: () => this.patch({ roles: { ...d.roles, [k]: !on } }) }; }),
      chOpts: CH.map(([k, label, icon]) => { const on = !!d.ch[k]; return { label, icon, ...box(on), go: () => this.patch({ ch: { ...d.ch, [k]: !on } }) }; }),
      freqLabel: (FREQ[d.freq] || FREQ['1h'])[0], freqOpen: dd === 'freq', freqBd: dd === 'freq' ? '#2E7D4F' : '#D7DDD9', freqCaret: dd === 'freq' ? CARET_UP : CARET_DN,
      ddFreq: ev => { ev.stopPropagation(); this.setState({ dd: dd === 'freq' ? null : 'freq' }); },
      freqOpts: Object.keys(FREQ).map(k => { const on = d.freq === k; return { label: FREQ[k][0], bg: on ? '#E6EFE9' : '#fff', ink: on ? '#2E7D4F' : '#0F1A14', go: ev => { ev.stopPropagation(); this.patch({ freq: k }); this.setState({ dd: null }); } }; }),
      pri: p, priOpen: dd === 'pri', priBd: dd === 'pri' ? '#2E7D4F' : '#D7DDD9', priCaret: dd === 'pri' ? CARET_UP : CARET_DN,
      ddPri: ev => { ev.stopPropagation(); this.setState({ dd: dd === 'pri' ? null : 'pri' }); },
      priOpts: Object.keys(PRI).map(k => ({ ...PRI[k], rowBg: d.pri === k ? '#E6EFE9' : '#fff', go: ev => { ev.stopPropagation(); this.patch({ pri: k }); this.setState({ dd: null }); } })),
      tokens, clearMsg: () => this.patch({ msg: '' }),
    };
  }
}

class AlertsPanel extends Component {
  render() {
    const V = { ...this.props, ...(this.renderVals() || {}) };
    return <View V={V} />;
  }
}

export default AlertsPanel;
