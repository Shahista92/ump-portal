import React from 'react';
import View from './View.jsx';

class Component extends React.Component {
  state = { sel: 0, input: '', msgs: {}, busy: false };
  cur() { const srcs = this.props.sources || []; return srcs[Math.min(this.state.sel, Math.max(0, srcs.length - 1))] || null; }
  push(key, m, dropPending) { this.setState(st => { const a = (st.msgs[key] || []).filter(x => !dropPending || !x.pending); return { msgs: { ...st.msgs, [key]: [...a, m] } }; }); }
  ask(text) {
    const q = (text || '').trim(), s = this.cur(); if (!q || this.state.busy || !s) return;
    this.push(s.key, { role: 'user', text: q }); this.setState({ input: '' });
    const local = KQ.parse(q, s.fields);
    if (local && local.field) { this.push(s.key, { role: 'ai', text: KQ.run(local, s) }); return; }
    const refuse = 'I can only answer questions about data recorded by ' + s.name + '.';
    if (!(window.claude && window.claude.complete)) { this.push(s.key, { role: 'ai', text: refuse }); return; }
    const span = KQ.span(s.fields);
    this.setState({ busy: true }); this.push(s.key, { role: 'ai', text: 'Running the query…', pending: true });
    window.claude.complete({ system: 'Convert a question about one farm sensor into a JSON query. Fields: ' + s.fields.map(f => f.key + ' = ' + f.label + ' (' + f.unit + ')').join('; ') + '. Data runs from ' + KQ.iso(span[0]) + ' to ' + KQ.iso(span[1]) + '. Reply with JSON only: {"field": key or null if the question is not about these fields, "agg": "avg"|"sum"|"count"|"min"|"max"|"last"|"all", "from": "YYYY-MM-DD" or null, "to": "YYYY-MM-DD" or null, "cmp": ">"|"<"|null, "x": number or null, "per": "days"|"hours"|"readings"}', messages: [{ role: 'user', content: q }] })
      .then(t => { const j = JSON.parse(String(t).replace(/^[^{]*/, '').replace(/[^}]*$/, '')); const f = s.fields.find(x => x.key === j.field); if (!f) return refuse;
        const p = { field: f, agg: j.agg || (f.sum ? 'sum' : 'avg'), from: j.from ? KQ.d(j.from).getTime() : null, to: j.to ? KQ.d(j.to).getTime() + 864e5 - 1 : null, cmp: j.cmp || null, x: j.x == null ? null : +j.x, per: j.per || 'readings' };
        return KQ.run(p, s); })
      .catch(() => refuse)
      .then(t => { this.setState({ busy: false }); this.push(s.key, { role: 'ai', text: t }, true); });
  }
  renderVals() {
    const srcs = this.props.sources || [], i = Math.min(this.state.sel, Math.max(0, srcs.length - 1)), s = srcs[i] || { name: '', serial: '', fields: [], label: '' };
    const list = (this.state.msgs[s.key] || []);
    return {
      multi: srcs.length > 1, cur: { ...s, period: 'Last 7 days of recorded data compared with the 7 days before' },
      askTitle: (x => x === 'Weather' ? 'weather station' : (x || 'device').toLowerCase())(s.label),
      tabs: srcs.map((x, k) => ({ label: x.label, icon: x.icon || '', bg: k === i ? '#fff' : 'transparent', ink: k === i ? '#0E7C3A' : '#4C6354', sh: k === i ? '0 1px 3px rgba(15,26,20,.12)' : 'none', go: () => this.setState({ sel: k, input: '' }) })),
      empty: !list.length, hasMsgs: list.length > 0,
      msgs: list.map(m => ({ text: m.text, isUser: m.role === 'user', isAi: m.role !== 'user', ink: m.pending ? '#8A948E' : '#1F2A24' })),
      groups: KQ.cards(s),
      input: this.state.input, placeholder: 'Ask about ' + (s.name || 'this device') + '…',
      onInput: e => this.setState({ input: e.target.value }),
      onKey: e => { if (e.key === 'Enter') this.ask(e.target.value); },
      send: () => this.ask(this.state.input), sendBg: this.state.input.trim() && !this.state.busy ? '#0E7C3A' : '#A9C9B5',
      clear: () => this.setState(st => ({ msgs: { ...st.msgs, [s.key]: [] } })),
    };
  }
}
const KQ = (() => {
  const MON = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'], MONF = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const d = iso => { const [y, m, dd] = iso.split('-').map(Number); return new Date(y, m - 1, dd); };
  const iso = t => { const x = new Date(t); return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); };
  const fD = t => { const x = new Date(t); return x.getDate() + ' ' + MONF[x.getMonth()].slice(0, 3) + ' ' + x.getFullYear(); };
  const fT = t => { const x = new Date(t), h = x.getHours() % 12 || 12; return h + ':' + String(x.getMinutes()).padStart(2, '0') + (x.getHours() < 12 ? ' am' : ' pm'); };
  const span = fields => { let a = Infinity, b = -Infinity; fields.forEach(f => { a = Math.min(a, f.times[0]); b = Math.max(b, f.times[f.times.length - 1]); }); return [a, b]; };
  const fmt = (f, v) => v.toLocaleString('en-AU', { minimumFractionDigits: f.dec, maximumFractionDigits: f.dec }) + (f.unit ? (/^[%°]/.test(f.unit) ? '' : ' ') + f.unit : '');
  const pDate = (str, endY) => {
    str = str.trim().toLowerCase().replace(/(\d)(st|nd|rd|th)\b/g, '$1').replace(/,/g, ' ');
    let m = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec(str); if (m) return new Date(+m[1], +m[2] - 1, +m[3]);
    m = /^(\d{1,2})[\/.](\d{1,2})(?:[\/.](\d{2,4}))?/.exec(str); if (m) return new Date(m[3] ? (+m[3] < 100 ? 2000 + +m[3] : +m[3]) : endY, +m[2] - 1, +m[1]);
    const mi = s2 => MON.findIndex(x => s2.startsWith(x));
    m = /^(\d{1,2})\s+([a-z]+)(?:\s+(\d{4}))?/.exec(str); if (m && mi(m[2]) >= 0) return new Date(m[3] ? +m[3] : endY, mi(m[2]), +m[1]);
    m = /^([a-z]+)\s+(\d{1,2})(?:\s+(\d{4}))?/.exec(str); if (m && mi(m[1]) >= 0) return new Date(m[3] ? +m[3] : endY, mi(m[1]), +m[2]);
    return null;
  };
  function parse(q, fields) {
    const l = ' ' + q.toLowerCase() + ' ';
    let best = null, bs = 0;
    (fields || []).forEach(f => { let sc = 0; f.words.forEach(w => { if (l.includes(w)) sc += w.length > 3 ? 2 : 1; }); (f.strong || []).forEach(w => { if (l.includes(w)) sc += 10; }); if (f.depth && l.includes(f.depth)) sc += 3; if (!f.depth && sc) sc += .5; if (sc > bs) { bs = sc; best = f; } });
    if (!best) return null;
    const [S, E] = span([best]), endY = new Date(E).getFullYear();
    const HI = /\b(max|maximum|highest|high|highs|peak|hottest|warmest|wettest|greatest|top)\b/, LO = /\b(min|minimum|lowest|low|lows|coldest|coolest|driest|least)\b/;
    const agg = /\b(how many|count|number of)\b/.test(l) ? 'count' : /\b(average|avg|mean|typical)\b/.test(l) ? 'avg' : (HI.test(l) && LO.test(l)) || /\b(range|summary|summarise|summarize|stats|statistics|overview)\b/.test(l) ? 'all' : HI.test(l) ? 'max' : LO.test(l) ? 'min' : /\b(total|sum|accumulated|cumulative|how much|altogether)\b/.test(l) ? 'sum' : /\b(current|currently|now|latest|right now|at the moment|last reading|most recent|present)\b/.test(l) ? 'last' : best.sum ? 'sum' : 'last';
    let from = null, to = null, m;
    const DAY = 864e5, endDay = new Date(E); endDay.setHours(0, 0, 0, 0);
    if ((m = /\b(?:from|between)\s+(.+?)\s+(?:to|until|and|till|-|–)\s+(.+?)(?:\?|$|\s+(?:for|with|in)\b)/.exec(l))) { const a = pDate(m[1], endY), b = pDate(m[2], endY); if (a) from = a.getTime(); if (b) to = b.getTime() + DAY - 1; }
    else if ((m = /\b(?:last|past|previous)\s+(\d+)?\s*(hour|day|week|month)s?\b/.exec(l))) { const n = +(m[1] || 1), u = { hour: 36e5, day: DAY, week: 7 * DAY, month: 30 * DAY }[m[2]]; to = E; from = E - n * u; }
    else if (/\btoday\b/.test(l)) { from = endDay.getTime(); to = E; }
    else if (/\byesterday\b/.test(l)) { from = endDay.getTime() - DAY; to = endDay.getTime() - 1; }
    else if (/\bthis week\b/.test(l)) { from = E - 7 * DAY; to = E; }
    else if (/\bthis month\b/.test(l)) { const x = new Date(E); from = new Date(x.getFullYear(), x.getMonth(), 1).getTime(); to = E; }
    else if ((m = /\bon\s+([0-9a-z\/\-. ]+?)(?:\?|$)/.exec(l)) && pDate(m[1], endY)) { const a = pDate(m[1], endY); from = a.getTime(); to = from + DAY - 1; }
    else if ((m = /\bin\s+([a-z]+)(?:\s+(\d{4}))?\b/.exec(l)) && MON.some(x => m[1].startsWith(x))) { const mi = MON.findIndex(x => m[1].startsWith(x)); let y = m[2] ? +m[2] : endY; if (!m[2] && mi > new Date(E).getMonth()) y--; from = new Date(y, mi, 1).getTime(); to = new Date(y, mi + 1, 1).getTime() - 1; }
    else if ((m = /\bsince\s+(.+?)(?:\?|$)/.exec(l)) && pDate(m[1], endY)) { from = pDate(m[1], endY).getTime(); to = E; }
    let cmp = null, x = null;
    if ((m = /\b(above|over|greater than|more than|exceeding|higher than)\s*(-?\d+(?:\.\d+)?)/.exec(l)) || (m = /(>)\s*(-?\d+(?:\.\d+)?)/.exec(l))) { cmp = '>'; x = +m[2]; }
    else if ((m = /\b(below|under|less than|lower than)\s*(-?\d+(?:\.\d+)?)/.exec(l)) || (m = /(<)\s*(-?\d+(?:\.\d+)?)/.exec(l))) { cmp = '<'; x = +m[2]; }
    const per = /\bdays?\b/.test(l) ? 'days' : /\bhours?\b/.test(l) ? 'hours' : 'readings';
    return { field: best, agg, from, to, cmp, x, per };
  }
  function run(p, src) {
    const f = p.field, T = f.times, V = f.vals, S = T[0], E = T[T.length - 1];
    const a = p.from == null ? S : Math.max(S, p.from), b = p.to == null ? E : Math.min(E, p.to);
    const rng = a === S && b === E && p.from == null ? 'from ' + fD(S) + ' to ' + fD(E) : fD(a) === fD(b) ? 'on ' + fD(a) : 'from ' + fD(a) + ' to ' + fD(b);
    if (b < a) return 'There is no ' + f.label.toLowerCase() + ' data for that period. ' + src.name + ' has data from ' + fD(S) + ' to ' + fD(E) + '.';
    const idx = []; for (let i = 0; i < T.length; i++) if (T[i] >= a && T[i] <= b) idx.push(i);
    if (!idx.length) return 'There are no ' + f.label.toLowerCase() + ' readings ' + rng + '.';
    const L = f.label.charAt(0).toLowerCase() + f.label.slice(1);
    if (p.agg === 'last') { const k = idx[idx.length - 1]; return 'The ' + (b === E ? 'current' : 'last recorded') + ' ' + L + ' is ' + fmt(f, V[k]) + ' (' + (f.daily ? fD(T[k]) : fT(T[k]) + ', ' + fD(T[k])) + ').'; }
    if (p.agg === 'all') { let hi = idx[0], lo = idx[0], sum = 0; idx.forEach(i => { if (V[i] > V[hi]) hi = i; if (V[i] < V[lo]) lo = i; sum += V[i]; }); const last = idx[idx.length - 1]; return L.charAt(0).toUpperCase() + L.slice(1) + ' ' + rng + ': highest ' + fmt(f, V[hi]) + ' (' + fD(T[hi]) + (f.daily ? '' : ' ' + fT(T[hi])) + '), lowest ' + fmt(f, V[lo]) + ' (' + fD(T[lo]) + (f.daily ? '' : ' ' + fT(T[lo])) + '), average ' + fmt(f, sum / idx.length) + (f.sum ? ', total ' + fmt(f, sum) : '') + '. Latest reading ' + fmt(f, V[last]) + '.'; }
    if (p.agg === 'avg') return 'The average ' + L + ' ' + rng + ' was ' + fmt(f, idx.reduce((s, i) => s + V[i], 0) / idx.length) + '.';
    if (p.agg === 'sum') return 'The total ' + L + ' ' + rng + ' was ' + fmt(f, idx.reduce((s, i) => s + V[i], 0)) + '.';
    if (p.agg === 'max' || p.agg === 'min') { let k = idx[0]; idx.forEach(i => { if (p.agg === 'max' ? V[i] > V[k] : V[i] < V[k]) k = i; }); return 'The ' + (p.agg === 'max' ? 'highest' : 'lowest') + ' ' + L + ' ' + rng + ' was ' + fmt(f, V[k]) + ', on ' + fD(T[k]) + (f.daily ? '' : ' at ' + fT(T[k])) + '.'; }
    const ok = v => p.cmp === '>' ? v > p.x : p.cmp === '<' ? v < p.x : true;
    const cond = p.cmp ? ' ' + (p.cmp === '>' ? 'above ' : 'below ') + fmt(f, p.x) : '';
    if (p.per === 'days' || f.daily) {
      const days = {}; idx.forEach(i => { const k = iso(T[i]); (days[k] = days[k] || []).push(V[i]); });
      const keys = Object.keys(days);
      if (!p.cmp && f.sum) { const n = keys.filter(k => days[k].reduce((s, v) => s + v, 0) >= .2).length; return n + ' of ' + keys.length + ' days ' + rng + ' had ' + L + ' (0.2 ' + f.unit + ' or more).'; }
      if (!p.cmp) return L.charAt(0).toUpperCase() + L.slice(1) + ' was recorded on ' + keys.length + ' days ' + rng + '.';
      const n = keys.filter(k => f.sum ? ok(days[k].reduce((s, v) => s + v, 0)) : days[k].some(ok)).length;
      return n + ' of ' + keys.length + ' days ' + rng + ' had ' + L + cond + '.';
    }
    const n = idx.filter(i => ok(V[i])).length, stepH = T.length > 1 ? (T[1] - T[0]) / 36e5 : 1;
    if (p.per === 'hours') return L.charAt(0).toUpperCase() + L.slice(1) + ' was' + (cond || ' recorded') + ' for ' + (+(n * stepH).toFixed(1)) + ' hours ' + rng + '.';
    return n.toLocaleString('en-AU') + ' of ' + idx.length.toLocaleString('en-AU') + ' readings ' + rng + ' had ' + L + (cond || ' recorded') + '.';
  }
  const ARROW = { up: 'M3 17l6-6 4 4 8-8M21 13V7h-6', down: 'M3 7l6 6 4-4 8 8M21 11v6h-6', flat: 'M4 12h16M16 8l4 4-4 4' };
  function cards(src) {
    const groups = [];
    (src.fields || []).filter(f => f.card !== false).forEach(f => {
      const T = f.times, V = f.vals, E = T[T.length - 1], W = 7 * 864e5;
      const agg = (a, b) => { let s = 0, n = 0; for (let i = 0; i < T.length; i++) if (T[i] > a && T[i] <= b) { s += V[i]; n++; } return n ? (f.sum ? s : s / n) : null; };
      const cur = agg(E - W, E), prev = agg(E - 2 * W, E - W); if (cur == null || prev == null) return;
      const d = cur - prev, dir = Math.abs(d) < Math.pow(10, -f.dec) / 2 ? 'flat' : d > 0 ? 'up' : 'down', pct = prev ? Math.abs(d / prev * 100) : 0;
      const card = { label: (f.sum ? 'Total ' : 'Average ') + f.label.charAt(0).toLowerCase() + f.label.slice(1), arrow: ARROW[dir], ink: '#26332C', pct: dir === 'flat' ? 'No change' : (dir === 'up' ? '↑ ' : '↓ ') + (+pct.toFixed(1)) + '%', text: dir === 'flat' ? 'same as the previous 7 days' : fmt(f, Math.abs(d)) + (dir === 'up' ? ' higher' : ' lower') + ' than the previous 7 days', cur: fmt(f, cur), prev: fmt(f, prev), curLabel: 'Last 7 days', prevLabel: 'Previous 7 days' };
      let g = groups.find(x => x.title === f.group); if (!g) groups.push(g = { title: f.group, cards: [] }); g.cards.push(card);
    });
    return groups;
  }
  return { parse, run, cards, span, iso, d };
})();

class KeyInsightsPanel extends Component {
  render() {
    const V = { ...this.props, ...(this.renderVals() || {}) };
    return <View V={V} />;
  }
}

export default KeyInsightsPanel;
