import React from 'react';
import View from './View.jsx';

class Component extends React.Component {
  state = {
    tab: 'feedlot', site: 's1', pen: 'p1',
    fSub: 'heat', penForm: null, penDraft: null,
    pens: [
      { id: 'p1', label: 'Pen 1', cap: 220, head: 198, ws: 'Weather Station', flow: 'Flowmeter Pen 1 · FM-1041', aqua: 'Aeration Pump Meter Pen 1 · AQ-2201' }
    ],
    wSub: 'stations', waSub: 'pumps', iSub: 'overview',
    navCollapsed: false, heroMetric: 'temp', zen: false,
    range: '1w', fday: 0, siteMenu: false, penDd: false, openDd: '', deviceDd: false,
    infoOpen: false, trough: 't1', wcDd: false, wcPen: 'p1', wcPenDd: false, wcRange: '1w', cfg: {},
    devRunning: {},
    cFrom: '2026-08-01', cTo: '2026-08-31', wcFrom: '2026-08-01', wcTo: '2026-08-31',
    dpOpen: '', dpFrom: '2026-08-01', dpTo: '2026-08-31', dpEdge: 'from', dpMonth: '2026-08',
    fcView: 'dash', fcMode: 'glance',
    chartRange: { temp: '3d', rain: '3d', hum: '3d', wind: '3d', dew: '3d', delta: '3d' }
  };

  _charts = {};
  componentDidMount() { this._embedSync(); this._draw(); }
  componentDidUpdate() { this._embedSync(); this._draw(); }
  _embedSync() { const P = this.props || {}; if (!P.embed) return; const s = this.state, w = { tab: 'feedlot', fSub: 'heat', zen: true, iSub: P.section || 'overview' }; if (P.pen) w.pen = P.pen; if (P.infoTick && P.infoTick !== this._it) { this._it = P.infoTick; w.infoOpen = true; } if (Object.keys(w).some(k => s[k] !== w[k])) this.setState(w); }
  componentWillUnmount() {
    if (this._retry) clearTimeout(this._retry);
    Object.keys(this._obs || {}).forEach(k => { try { this._obs[k].disconnect(); } catch (e) {} });
    this._obs = {};
    Object.keys(this._charts).forEach(k => { try { this._charts[k].destroy(); } catch (e) {} });
    this._charts = {};
  }
  _fullCat(id, i) {
    const d = this._runData && this._runData[id];
    if (!d || i == null || i < 0) return '';
    if (d.mode === 'hourly') return (d.hourCatsFull || [])[(d.from || 0) + i] || '';
    return (d.dailyCats || [])[i] || '';
  }
  _runDayClick(id, idx) {
    if (idx == null || idx < 0) return;
    const data = this._runData && this._runData[id];
    const chart = this._charts[id];
    if (!data || !chart) return;
    if (data.mode === 'hourly') return;
    const from = idx * 24, to = from + 23;
    data.mode = 'hourly'; data.from = from; data.day = idx; data.viewLen = 24;
    const cats = (data.dayHourCats || []).slice();
    const vals = (data.hourVals || []).slice(from, to + 1);
    chart.updateOptions(Object.assign({
      xaxis: { categories: cats, tickAmount: Math.min(6, cats.length), labels: { rotate: -35, rotateAlways: false, hideOverlappingLabels: true, trim: false, showDuplicates: false } },
      series: [{ name: 'Status', type: data.hourType || 'line', data: vals }]
    }, data.hourlyOpts || {}), true, false);
    this.forceUpdate();
  }
  _runDayBack(id) {
    const data = this._runData && this._runData[id];
    const chart = this._charts[id];
    if (!data || !chart) return;
    data.mode = 'daily'; data.from = 0; data.day = null; data.viewLen = data.dailyCats.length;
    chart.updateOptions(Object.assign({
      xaxis: { categories: data.dailyCats, tickAmount: Math.min(7, data.dailyCats.length), labels: { rotate: 0, rotateAlways: false, hideOverlappingLabels: true, trim: false, showDuplicates: false } },
      series: [{ name: 'Run time', type: data.dailyType || 'column', data: data.dailyVals }]
    }, data.dailyOpts || {}), true, false);
    this.forceUpdate();
  }
  _drillZoom(id, ev) {
    if (this._runSwitching && this._runSwitching[id]) return;
    const data = this._runData && this._runData[id];
    const chart = this._charts[id];
    if (!data || !chart) return;
    const lo = Math.round(ev.xaxis.min), hi = Math.round(ev.xaxis.max);
    const wantHourly = data.mode === 'daily' && (hi - lo) <= 3;
    const wantDaily = data.mode === 'hourly' && (hi - lo) >= (data.viewLen || data.hourCats.length) - 2;
    if (!wantHourly && !wantDaily) return;
    this._runSwitching = this._runSwitching || {};
    this._runSwitching[id] = true;
    if (wantHourly) {
      const from = Math.max(0, lo * 24), to = Math.min(data.hourCats.length - 1, (hi + 1) * 24 - 1);
      data.mode = 'hourly';
      const cats = data.hourCats.slice(from, to + 1);
      data.from = from;
      if (cats.length) cats[0] = (data.hourCatsFull || [])[from] || cats[0];
      const done = (len) => {
        data.viewLen = len;
        try { chart.zoomX(0, len - 1); } catch (e) {}
        if (data.el) { try { this._wheel(id, data.el, chart, len, data.withBar); } catch (e) {} }
        setTimeout(() => { this._runSwitching[id] = false; }, 400);
      };
      chart.updateOptions(Object.assign({ xaxis: { categories: cats, tickAmount: Math.min(4, cats.length), labels: { rotate: -35, rotateAlways: false, hideOverlappingLabels: true, trim: false, showDuplicates: false } }, series: [{ name: 'Run time', type: data.hourType || undefined, data: data.hourVals.slice(from, to + 1) }] }, data.hourlyOpts || {}), true, false)
        .then(() => done(cats.length)).catch(() => done(cats.length));
    } else {
      data.mode = 'daily';
      data.from = 0;
      const done2 = (len) => {
        data.viewLen = len;
        try { chart.zoomX(0, len - 1); } catch (e) {}
        if (data.el) { try { this._wheel(id, data.el, chart, len, data.withBar); } catch (e) {} }
        setTimeout(() => { this._runSwitching[id] = false; }, 400);
      };
      chart.updateOptions(Object.assign({ xaxis: { categories: data.dailyCats, tickAmount: Math.min(5, data.dailyCats.length), labels: { rotate: 0, rotateAlways: false, hideOverlappingLabels: true, trim: false, showDuplicates: false } }, series: [{ name: 'Run time', type: data.dailyType || undefined, data: data.dailyVals }] }, data.dailyOpts || {}), true, false)
        .then(() => done2(data.dailyCats.length)).catch(() => done2(data.dailyCats.length));
    }
  }
  _watch(id, el, chart) {
    if (typeof ResizeObserver === 'undefined') return;
    this._obs = this._obs || {};
    if (this._obs[id]) { try { this._obs[id].disconnect(); } catch (e) {} }
    let last = el.clientWidth;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      if (!w || w === last) return;
      last = w;
      try { chart.updateOptions({}, false, false); } catch (e) {}
    });
    ro.observe(el);
    this._obs[id] = ro;
  }
  _wheel(id, el, chart, len, withBar) {
    this._wh = this._wh || {};
    if (this._runData && this._runData[id]) {
      this._runData[id].el = el;
      this._runData[id].withBar = withBar;
      if (!this._runData[id].viewLen) this._runData[id].viewLen = len;
    }
    const prev = this._wh[id];
    if (prev) { try { prev.el.removeEventListener('wheel', prev.fn); } catch (e) {} }
    if (!len || len < 6) return;
    const state = { lo: 0, hi: len - 1 };

    this._bars = this._bars || {};
    if (!withBar) {
      const old = el.querySelector('[data-zoombar]');
      if (old) old.remove();
      delete this._bars[id];
      const fn0 = (e) => {
        e.preventDefault();
        const r = el.getBoundingClientRect();
        const frac = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        const span = state.hi - state.lo;
        const next = Math.min(len - 1, Math.max(2, span * (e.deltaY > 0 ? 1.3 : 0.72)));
        let nlo = Math.round(state.lo + frac * span - frac * next);
        nlo = Math.max(0, Math.min(len - 1 - next, nlo));
        state.lo = nlo; state.hi = Math.round(nlo + next);
        try { chart.zoomX(state.lo, state.hi); } catch (err) {}
      };
      el.addEventListener('wheel', fn0, { passive: false });
      this._wh[id] = { el, fn: fn0 };
      return;
    }
    let bar = el.querySelector('[data-zoombar]') || this._bars[id];
    if (!bar) {
      bar = document.createElement('div');
      bar.setAttribute('data-zoombar', '1');
      bar.style.cssText = 'position:relative;height:10px;margin:2px 14px 6px 46px;border-radius:6px;background:#EDF2F0;cursor:pointer;';
      const thumb = document.createElement('div');
      thumb.setAttribute('data-zoomthumb', '1');
      thumb.style.cssText = 'position:absolute;top:0;bottom:0;left:0;width:100%;border-radius:6px;background:#2C7A5E;cursor:grab;';
      bar.appendChild(thumb);
    }
    this._bars[id] = bar;
    if (!el.contains(bar)) el.appendChild(bar);
    const thumb = bar.querySelector('[data-zoomthumb]');
    const paint = () => {
      const l = (state.lo / (len - 1)) * 100;
      const w = ((state.hi - state.lo) / (len - 1)) * 100;
      thumb.style.left = l + '%';
      thumb.style.width = Math.max(3, w) + '%';
    };
    const apply = () => {
      paint();
      try { chart.zoomX(state.lo, state.hi); } catch (err) {}
      setTimeout(() => { if (!el.contains(bar)) el.appendChild(bar); paint(); }, 0);
    };
    paint();

    const fn = (e) => {
      e.preventDefault();
      const r = el.getBoundingClientRect();
      const frac = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      const span = state.hi - state.lo;
      const next = Math.min(len - 1, Math.max(2, span * (e.deltaY > 0 ? 1.3 : 0.72)));
      let nlo = Math.round(state.lo + frac * span - frac * next);
      nlo = Math.max(0, Math.min(len - 1 - next, nlo));
      state.lo = nlo; state.hi = Math.round(nlo + next);
      apply();
    };
    el.addEventListener('wheel', fn, { passive: false });

    if (!thumb._wired) {
      thumb._wired = true;
      let dragX = 0, dragLo = 0;
      const move = (ev) => {
        const rect = bar.getBoundingClientRect();
        const dFrac = (ev.clientX - dragX) / rect.width;
        const span = state.hi - state.lo;
        let nlo = Math.round(dragLo + dFrac * (len - 1));
        nlo = Math.max(0, Math.min(len - 1 - span, nlo));
        state.lo = nlo; state.hi = nlo + span;
        apply();
      };
      const up = () => {
        thumb.style.cursor = 'grab';
        window.removeEventListener('mousemove', move);
        window.removeEventListener('mouseup', up);
      };
      thumb.addEventListener('mousedown', (ev) => {
        ev.preventDefault();
        dragX = ev.clientX; dragLo = state.lo;
        thumb.style.cursor = 'grabbing';
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseup', up);
      });
      bar.addEventListener('dblclick', () => { state.lo = 0; state.hi = len - 1; apply(); });
    }
    this._wh[id] = { el, fn };
  }
  _draw() {
    if (typeof ApexCharts === 'undefined') {
      if (!this._retry) this._retry = setTimeout(() => { this._retry = null; this._draw(); }, 250);
      return;
    }
    const specs = this._specs || {};
    Object.keys(this._charts).forEach(id => {
      if (!specs[id] || !document.getElementById(id)) {
        try { this._charts[id].destroy(); } catch (e) {}
        if (this._obs && this._obs[id]) { try { this._obs[id].disconnect(); } catch (e) {} delete this._obs[id]; }
        delete this._charts[id];
      }
    });
    let pending = false;
    Object.keys(specs).forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      if (!el.clientWidth) { pending = true; return; }
      if (this._charts[id] && el.querySelector('.apexcharts-canvas')) {
        this._specStr = this._specStr || {};
        const sig = JSON.stringify(specs[id]);
        if (this._specStr[id] === sig) return;
        this._specStr[id] = sig;
        const ch = this._charts[id];
        const n0 = ((specs[id].series[0] || {}).data || []).length;
        Promise.resolve(ch.updateOptions(specs[id], true, false)).then(() => this._wheel(id, el, ch, n0, false)).catch(() => {});
      } else {
        this._creating = this._creating || {};
        if (this._creating[id]) return;
        this._creating[id] = true;
        try { if (this._charts[id]) this._charts[id].destroy(); } catch (e) {}
        const c = new ApexCharts(el, specs[id]);
        const rendered = c.render();
        this._charts[id] = c;
        this._watch(id, el, c);
        const n = ((specs[id].series[0] || {}).data || []).length;
        Promise.resolve(rendered).then(() => { this._creating[id] = false; this._wheel(id, el, c, n, false); }).catch(() => { this._creating[id] = false; });
      }
    });
    if (pending && !this._retry) this._retry = setTimeout(() => { this._retry = null; this._draw(); }, 80);
  }

  SITES = [
    { id: 's1', name: 'Site 1', locale: 'Upper Murray, VIC', device: '4EA8681CBFBA', tBase: 30.4, rhBase: 68, srPeak: 880 },
    { id: 's2', name: 'Site 2', locale: 'Upper Murray, NSW', device: '4EA8681CC102', tBase: 31.6, rhBase: 71, srPeak: 940 },
    { id: 's3', name: 'Site 3', locale: 'Upper Murray, VIC', device: '4EA8681CC3F7', tBase: 27.9, rhBase: 76, srPeak: 790 }
  ];

  DEV = {
    ws: { label: 'Weather station', options: ['Weather Station Site 1', 'Weather Station Site 2', 'Weather Station Site 3', 'Not assigned'] },
    flow: { label: 'Water flow meter', options: ['Flowmeter Pen 1 · FM-1041', 'Flowmeter Pen 2 · FM-1042', 'Flowmeter Pen 3 · FM-1043', 'Flowmeter Pen 4 · FM-1044', 'Not assigned'] },
    aqua: { label: 'Aeration Pump meter', options: ['Aeration Pump Meter Pen 1 · AQ-2201', 'Aeration Pump Meter Pen 2 · AQ-2202', 'Aeration Pump Meter Pen 3 · AQ-2203', 'Aeration Pump Meter Pen 4 · AQ-2204', 'Not assigned'] }
  };
  DEVKEYS = ['ws', 'flow', 'aqua'];

  get PENS() { const p = (this.state.pens || []); return p.length ? p : [{ id: 'p1', label: 'Pen 1', cap: 0, head: 0 }]; }
  penHash(id) { let h = 7; for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) % 97; return h; }
  swOf(id) { return this.SWITCH[id] || 'Auto'; }

  // MLA Thresholds sheet — adjustment tables
  ADJ = {
    breed: { label: 'Breed', options: [['Bos Taurus (British)', 0], ['Bos Taurus (European)', 3], ['Wagyu', 4], ['Bos Indicus (25%)', 4], ['Bos Indicus (50%)', 7], ['Bos Indicus (75%)', 8], ['Bos Indicus (100%)', 10]] },
    coat: { label: 'Coat colour', options: [['Black', 0], ['Red', 1], ['White', 3]] },
    dof: { label: 'Days on feed', options: [['up to 80 days', 2], ['80-130 days', 0], ['>130 days', -3]] },
    health: { label: 'Health status', options: [['Healthy', 0], ['Sick', -5], ['Recovering', -5]] },
    manure: { label: 'Manure depth', options: [['Pack depth 50 mm', 0], ['Pack depth 100 mm', -4], ['Pack depth 200 mm', -8]] },
    wtemp: { label: 'Water temperature', options: [['15-20 C', 1], ['21-30 C', 0], ['31-35 C', -1], ['Greater than 35 C', -2]] },
    shade: { label: 'Shade', options: [['No shade', 0], ['1.5-2 m2/SCU', 3], ['2-3 m2/SCU', 5], ['3-5 m2/SCU', 7]] },
    acclim: { label: 'Acclimation', options: [['Acclimated', 0], ['Not Acclimated', -5]] },
    mitig: { label: 'Mitigation measures', options: [['None', 0], ['Extra water troughs', 1], ['Heat load ration', 2], ['Strategic cleaning pens', 2]] }
  };
  FIELDS = ['breed', 'coat', 'dof', 'health', 'manure', 'wtemp', 'shade', 'acclim', 'mitig'];

  PEN_DEFAULTS = {
    p1: { breed: 'Bos Taurus (British)', coat: 'Black', dof: '80-130 days', health: 'Healthy', manure: 'Pack depth 50 mm', wtemp: '21-30 C', shade: 'No shade', acclim: 'Acclimated', mitig: 'None' },
    p2: { breed: 'Bos Indicus (50%)', coat: 'Red', dof: 'up to 80 days', health: 'Healthy', manure: 'Pack depth 100 mm', wtemp: '21-30 C', shade: '1.5-2 m2/SCU', acclim: 'Acclimated', mitig: 'Extra water troughs' },
    p3: { breed: 'Bos Taurus (European)', coat: 'White', dof: '>130 days', health: 'Recovering', manure: 'Pack depth 50 mm', wtemp: '31-35 C', shade: '2-3 m2/SCU', acclim: 'Not Acclimated', mitig: 'Heat load ration' }
  };
  SWITCH = { p1: 'Auto', p2: 'Manual', p3: 'Off' };
  RUNNING = { p1: false, p2: true, p3: false };
  PUMP_FIXED_MIN = 180;
  PUMP_ELAPSED_MIN = { p1: 0, p2: 84, p3: 0 };

  cfgFor(site, pen) {
    const key = site + '-' + pen;
    return Object.assign({}, this.PEN_DEFAULTS[pen] || this.PEN_DEFAULTS.p1, (this.state.cfg || {})[key] || {});
  }
  adjOf(cfg) {
    let total = 0;
    const rows = this.FIELDS.map(f => {
      const t = this.ADJ[f];
      const hit = t.options.filter(o => o[0] === cfg[f])[0] || t.options[0];
      total += hit[1];
      return { field: f, k: t.label, v: hit[0], adj: hit[1] };
    });
    return { rows, total };
  }

  // ---------- MLA HLI model ----------
  bgt(ta, sr) { return 1.33 * ta - 2.65 * Math.sqrt(Math.max(0, ta)) + 3.21 * Math.log10(sr + 1) + 3.5; }
  hliOf(ta, rh, wsKmh, sr) {
    const b = this.bgt(ta, sr), ws = wsKmh / 3.6;
    const lo = 10.66 + 0.28 * rh + 1.3 * b - ws;
    const hi = 8.62 + 0.38 * rh + 1.55 * b - 0.5 * ws + Math.exp(2.4 - ws);
    return Math.max(50, b >= 25 ? hi : lo);
  }
  weather(site, days, seed) {
    const out = [];
    for (let d = 0; d < days; d++) {
      for (let h = 0; h < 24; h++) {
        const diurnal = Math.cos(((h - 14) / 24) * Math.PI * 2);
        const wobble = Math.sin((d + seed) * 1.7) * 1.6;
        const ta = site.tBase + wobble + 4.2 * diurnal;
        const rh = Math.max(45, Math.min(96, site.rhBase - wobble * 2 - 14 * diurnal));
        const sr = h >= 6 && h <= 18 ? Math.max(0, site.srPeak * Math.sin((Math.PI * (h - 6)) / 12) * (0.82 + 0.18 * Math.cos(d + seed))) : 0;
        const ws = 4 + 7 * Math.max(0, diurnal) + 2 * Math.sin(h + d);
        out.push({ ta, rh, sr, ws, hli: this.hliOf(ta, rh, ws, sr) });
      }
    }
    return out;
  }
  ahluOf(hli, upper, lower) {
    let a = 0;
    return hli.map(v => {
      const bal = v < lower ? v - lower : v > upper ? v - upper : 0;
      a = Math.max(0, a + bal);
      return a;
    });
  }

  // ---------- chart helpers ----------
  pts(vals, w, h, min, max) {
    const n = vals.length;
    return vals.map((v, i) => {
      const x = n === 1 ? 0 : (i / (n - 1)) * w;
      const c = Math.max(min, Math.min(max, v));
      return x.toFixed(1) + ',' + (h - ((c - min) / (max - min)) * h).toFixed(1);
    }).join(' ');
  }
  area(vals, w, h, min, max) { return '0,' + h + ' ' + this.pts(vals, w, h, min, max) + ' ' + w + ',' + h; }
  dots(vals, w, h, min, max) {
    const n = vals.length;
    return vals.map((v, i) => {
      const c = Math.max(min, Math.min(max, v));
      return { x: (n === 1 ? 0 : (i / (n - 1)) * w).toFixed(1), y: (h - ((c - min) / (max - min)) * h).toFixed(1) };
    });
  }
  hliColor(v, u, l) { return v >= u ? '#D9534F' : v >= l ? '#D08A18' : '#2C7A5E'; }
  pill(a) { return a ? { bg: '#EAF6F0', c: '#0C6B4C', fw: 600, bd: '#BFE0D1' } : { bg: '#fff', c: '#5A6B65', fw: 400, bd: '#E4EAE8' }; }
  onDate = (key) => (e) => { const v = e.target.value; this.setState({ [key]: v }); };
  seg(a) { return a ? { bg: '#0E6B4E', c: '#fff', bd: '#0E6B4E', fw: 600 } : { bg: '#fff', c: '#5A6B65', bd: '#D7E0DC', fw: 400 }; }
  navItems(tab) {
    const off = { bg: 'transparent', c: '#517A69', fw: 400, cur: 'not-allowed', act: 'none:x' };
    const mk = (label, d, act, active) => {
      const st = act ? Object.assign({ cur: 'pointer', act }, this.nav(active)) : off;
      return Object.assign({ isItem: true, isHeader: false, label, d, hdrLabel: '' }, st);
    };
    const hdr = label => ({ isItem: false, isHeader: true, hdrLabel: label, label: '', d: '', act: 'none:x', bg: 'transparent', c: '#6FA490', fw: 400, cur: 'default' });
    return [
      mk('Home', 'M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z'),
      mk('Location', 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zm0-8.6a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8z'),
      mk('Weather', 'M16.5 18H7a4 4 0 1 1 .6-7.95A5.5 5.5 0 0 1 18 10.3a3.9 3.9 0 0 1-1.5 7.7z', 'tab:weather', tab === 'weather'),
      mk('Season', 'M12 3a9 9 0 1 0 0 18zm0 0a9 9 0 0 1 0 18'),
      mk('Water', 'M3 8c2.6-2 4.4-2 7 0s4.4 2 7 0M3 13c2.6-2 4.4-2 7 0s4.4 2 7 0M3 18c2.6-2 4.4-2 7 0s4.4 2 7 0', 'tab:water', tab === 'water'),
      mk('Livestock', 'M4 9V6.5l2.5 2M20 9V6.5L17.5 8.5M5 9h14l-1 6a4 4 0 0 1-4 3.4h-4A4 4 0 0 1 6 15z'),
      mk('Feedlot', 'M3 20h18M5 20V11l7-5 7 5v9M10 20v-5h4v5', 'tab:feedlot', tab === 'feedlot'),
      mk('Alerts', 'M18 15V10a6 6 0 1 0-12 0v5l-1.5 2.5h15zM10 20.5a2.4 2.4 0 0 0 4 0'),
      hdr('MORE'),
      mk('Insights', 'M4 19h16M6 16V9M11 16V5M16 16v-5M21 16v-8'),
      mk('Devices', 'M12 3l8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9'),
      mk('Data', 'M12 3c4.4 0 8 1.2 8 2.7S16.4 8.4 12 8.4 4 7.2 4 5.7 7.6 3 12 3zM4 5.7v12.6C4 19.8 7.6 21 12 21s8-1.2 8-2.7V5.7M4 12c0 1.5 3.6 2.7 8 2.7s8-1.2 8-2.7')
    ];
  }

  nav(a) { return a ? { bg: '#1D5239', c: '#FFFFFF', fw: 600, dot: '#2BB47C' } : { bg: 'transparent', c: '#FFFFFF', fw: 400, dot: '#7FCBAC' }; }

  click = (e) => {
    const el = e.target.closest('[data-act]');
    if (!el) { if (this.state.siteMenu || this.state.penDd || this.state.openDd || this.state.deviceDd) this.setState({ siteMenu: false, penDd: false, openDd: '', deviceDd: false }); return; }
    const raw = el.getAttribute('data-act');
    const i = raw.indexOf(':');
    const k = raw.slice(0, i), v = raw.slice(i + 1);
    const close = { siteMenu: false, penDd: false, openDd: '', deviceDd: false };
    if (k === 'tab') this.setState(Object.assign({ tab: v }, close));
    else if (k === 'ws') this.setState(Object.assign({ wSub: v }, close));
    else if (k === 'was') this.setState(Object.assign({ waSub: v }, close));
    else if (k === 'is') this.setState(Object.assign({ iSub: v, tab: 'feedlot' }, close));
    else if (k === 'range') {
      if (v === 'custom') this.setState(st => ({ range: 'custom', dpOpen: 'range', dpFrom: st.cFrom, dpTo: st.cTo, dpEdge: 'from', dpMonth: (st.cFrom || '2026-08-01').slice(0, 7) }));
      else this.setState({ range: v, dpOpen: '' });
    }
    else if (k === 'wcr') {
      if (v === 'custom') this.setState(st => ({ wcRange: 'custom', dpOpen: 'wc', dpFrom: st.wcFrom, dpTo: st.wcTo, dpEdge: 'from', dpMonth: (st.wcFrom || '2026-08-01').slice(0, 7) }));
      else this.setState({ wcRange: v, dpOpen: '' });
    }
    else if (k === 'dp') {
      const p = v.split('|');
      if (p[0] === 'edge') this.setState({ dpEdge: p[1] });
      else if (p[0] === 'nav') {
        this.setState(st => {
          const yy = +st.dpMonth.slice(0, 4), mm = +st.dpMonth.slice(5, 7) - 1 + (+p[1]);
          const d = new Date(yy, mm, 1);
          return { dpMonth: d.getFullYear() + '-' + (d.getMonth() + 1 < 10 ? '0' : '') + (d.getMonth() + 1) };
        });
      }
      else if (p[0] === 'day') {
        this.setState(st => {
          if (st.dpEdge === 'from') {
            const to = p[1] > st.dpTo ? p[1] : st.dpTo;
            return { dpFrom: p[1], dpTo: to, dpEdge: 'to' };
          }
          if (p[1] < st.dpFrom) return { dpFrom: p[1], dpEdge: 'to' };
          return { dpTo: p[1], dpEdge: 'from' };
        });
      }
      else if (p[0] === 'cancel') this.setState({ dpOpen: '' });
      else if (p[0] === 'apply') {
        this.setState(st => st.dpOpen === 'wc'
          ? { wcFrom: st.dpFrom, wcTo: st.dpTo, wcRange: 'custom', dpOpen: '' }
          : { cFrom: st.dpFrom, cTo: st.dpTo, range: 'custom', dpOpen: '' });
      }
    }
    else if (k === 'fcr') {
      const p = v.split('|');
      this.setState(st => ({ chartRange: Object.assign({}, st.chartRange, { [p[0]]: p[1] }) }));
    }
    else if (k === 'fday') this.setState({ fday: +v });
    else if (k === 'fdayh') this.setState({ fday: +v, fcMode: 'day' });
    else if (k === 'fcview') this.setState({ fcView: v });
    else if (k === 'herom') this.setState({ heroMetric: v });
    else if (k === 'fcmode') this.setState({ fcMode: v });
    else if (k === 'pen') this.setState({ pen: v, penDd: false });
    else if (k === 'trough') this.setState({ trough: v, wcDd: false });
    else if (k === 'devtoggle') this.setState(st => ({ devRunning: Object.assign({}, st.devRunning, { [v]: !((st.devRunning || {})[v]) }) }));

    else if (k === 'rundrill') {
      const p = v.split('|');
      if (p[0] === 'back') this._runDayBack(p[1]);
      return;
    }
    else if (k === 'wcpen') this.setState({ wcPen: v, wcPenDd: false });
    else if (k === 'menu') this.setState({ siteMenu: !this.state.siteMenu, penDd: false, openDd: '' });
    else if (k === 'site') this.setState(Object.assign({ site: v }, close));
    else if (k === 'info') this.setState(Object.assign({ infoOpen: v === 'open' }, close));
    else if (k === 'ui' && v === 'navtoggle') {
      this.setState(st => ({ navCollapsed: !st.navCollapsed }));
      setTimeout(() => { try { window.dispatchEvent(new Event('resize')); } catch (e) {} }, 260);
    }
    else if (k === 'ui' && v === 'fullscreen') {
      // native fullscreen where the frame allows it; the in-app chrome hide always works
      try {
        if (document.fullscreenEnabled) {
          const p = document.fullscreenElement
            ? document.exitFullscreen()
            : document.documentElement.requestFullscreen();
          if (p && p.catch) p.catch(() => {});
        }
      } catch (e) {}
      this.setState(st => ({ zen: !st.zen }));
      setTimeout(() => { try { window.dispatchEvent(new Event('resize')); } catch (e) {} }, 260);
    }
    else if (k === 'dd') {
      if (v === 'pen') this.setState({ penDd: !this.state.penDd, openDd: '', siteMenu: false, deviceDd: false });
      else if (v === 'wcpen') this.setState({ wcPenDd: !this.state.wcPenDd, openDd: '', siteMenu: false, deviceDd: false });
      else if (v === 'device') this.setState({ deviceDd: !this.state.deviceDd, openDd: '', penDd: false, siteMenu: false });
      else if (v === 'wctrough') this.setState({ wcDd: !this.state.wcDd, openDd: '', penDd: false, siteMenu: false });

      else {
        const nv = this.state.openDd === v ? '' : v;
        this.setState({ openDd: nv, penDd: false, siteMenu: false, deviceDd: false });
        if (nv && v.indexOf('pf.') === 0) {
          const trig = e => {
            const el = document.querySelector('[data-act="dd:' + v + '"]');
            if (!el) return;
            let sc = el.parentElement;
            while (sc && !(sc.scrollHeight > sc.clientHeight + 4 && /auto|scroll/.test(getComputedStyle(sc).overflowY))) sc = sc.parentElement;
            if (!sc) return;
            const need = el.getBoundingClientRect().bottom + 162 - sc.getBoundingClientRect().bottom;
            if (need > 0) sc.scrollTop = sc.scrollTop + need;
          };
          requestAnimationFrame(() => requestAnimationFrame(trig));
        }
      }
    }
    else if (k === 'fs') this.setState(Object.assign({ fSub: v, tab: 'feedlot', iSub: v === 'heat' ? (this.state.iSub === 'config' ? 'overview' : this.state.iSub) : this.state.iSub }, close));
    else if (k === 'pf') {
      const p = v.split('|');
      this.setState(st => {
        const f = Object.assign({}, st.penForm);
        if (p[0] === 'step') f.step = parseInt(p[1], 10) || 1;
        else if (p[0] === 'cfg') f.cfg = Object.assign({}, f.cfg, { [p[1]]: p.slice(2).join('|') });
        else if (p[0] === 'chk') {
          const key = p[1] + 'Sel', label = p.slice(2).join('|');
          const arr = (f[key] || []).slice(); const idx = arr.indexOf(label);
          if (idx >= 0) arr.splice(idx, 1); else arr.push(label);
          f[key] = arr;
        }
        else f[p[0]] = p.slice(1).join('|');
        return { penForm: f, openDd: p[0] === 'chk' ? st.openDd : '' };
      });
    }
    else if (k === 'pcfg') {
      const p = v.split('|');
      if (p[0] === 'add') this.setState(st => {
        if (st.penDraft) return { openDd: '', penForm: Object.assign({}, st.penDraft) };
        let n = (st.pens || []).length + 1;
        while ((st.pens || []).filter(x => x.id === 'p' + n).length) n++;
        return {
          openDd: '',
          penForm: { mode: 'add', step: 1, id: 'p' + n, label: '', cap: '', head: '', ws: '', flow: '', aqua: '', wsSel: [], flowSel: [], aquaSel: [], cfg: {} }
        };
      });
      else if (p[0] === 'draft') this.setState(st => ({ penDraft: st.penForm && st.penForm.mode === 'add' ? Object.assign({}, st.penForm) : st.penDraft, penForm: null, openDd: '' }));
      else if (p[0] === 'edit') this.setState(st => {
        const pen = (st.pens || []).filter(x => x.id === p[1])[0];
        if (!pen) return {};
        return {
          openDd: '',
          penForm: {
            mode: 'edit', step: 1, id: pen.id, label: pen.label, cap: '' + (pen.cap == null ? '' : pen.cap), head: '' + (pen.head == null ? '' : pen.head),
            ws: pen.ws || this.DEV.ws.options[0], flow: pen.flow || this.DEV.flow.options[0], aqua: pen.aqua || this.DEV.aqua.options[0],
            wsSel: pen.wsList && pen.wsList.length ? pen.wsList.slice() : (pen.ws ? [pen.ws] : []),
            flowSel: pen.flowList && pen.flowList.length ? pen.flowList.slice() : (pen.flow ? [pen.flow] : []),
            aquaSel: pen.aquaList && pen.aquaList.length ? pen.aquaList.slice() : (pen.aqua ? [pen.aqua] : []),
            cfg: this.cfgFor(st.site, pen.id)
          }
        };
      });
      else if (p[0] === 'close') this.setState({ penForm: null, openDd: '' });
      else if (p[0] === 'save') this.setState(st => {
        const f = st.penForm;
        if (!f) return {};
        const pens = (st.pens || []).slice();
        const rec = {
          id: f.id, label: (f.label || '').trim() || 'Pen', cap: parseInt(f.cap || '0', 10) || 0,
          head: parseInt(f.head || '0', 10) || 0,
          ws: (f.wsSel || [])[0] || f.ws || '', flow: (f.flowSel || [])[0] || f.flow || '', aqua: (f.aquaSel || [])[0] || f.aqua || '',
          wsList: f.wsSel || [], flowList: f.flowSel || [], aquaList: f.aquaSel || []
        };
        const i = pens.map(x => x.id).indexOf(f.id);
        if (i >= 0) pens[i] = Object.assign({}, pens[i], rec); else pens.push(rec);
        return {
          pens: pens, penForm: null, openDd: '', penDraft: f.mode === 'add' ? null : st.penDraft,
          cfg: Object.assign({}, st.cfg, { [st.site + '-' + f.id]: Object.assign({}, this.PEN_DEFAULTS.p1, f.cfg) })
        };
      });
      else if (p[0] === 'del') this.setState(st => {
        const pens = (st.pens || []).filter(x => x.id !== p[1]);
        if (!pens.length) return {};
        const first = pens[0].id;
        const keep = (cur) => pens.filter(x => x.id === cur).length ? cur : first;
        return { pens: pens, pen: keep(st.pen), wcPen: keep(st.wcPen) };
      });
    }
    else if (k === 'none') return;
    else if (k === 'goto') {
      if (v === 'wforecast') this.setState(Object.assign({ tab: 'weather', wSub: 'forecast' }, close));
      else if (v === 'wstations') this.setState(Object.assign({ tab: 'weather', wSub: 'stations' }, close));
      else if (v === 'wflowmeters') this.setState(Object.assign({ tab: 'water', waSub: 'pumps' }, close));
    } else if (k === 'set') {
      const p = v.split('|');
      this.setState(st => {
        const key = st.site + '-' + p[0];
        const c = Object.assign({}, this.PEN_DEFAULTS[p[0]] || this.PEN_DEFAULTS.p1, (st.cfg || {})[key] || {});
        c[p[1]] = p[2];
        return { cfg: Object.assign({}, st.cfg, { [key]: c }), openDd: '' };
      });
    }
  };

  renderVals() {
    const v = this.renderVals0(), E = !!(this.props || {}).embed;
    return { ...v, notEmbed: !E, embedInfo: E, chromeOn: E ? false : v.chromeOn, showFlTabs: E ? false : v.showFlTabs, showSecTabs: E ? false : v.showSubTabs, showCtx: E ? false : v.showSubTabs, rootMinH: E ? '0' : '100vh', rootFont: E ? 'inherit' : 'Poppins, "Segoe UI", Helvetica, sans-serif', mainPad: E ? '0' : '22px 26px 60px', ctxMt: E ? '0' : '12px',
      penCards: E && Array.isArray(v.penCards) ? v.penCards.map(p => ({ ...p, showWater: false, showPumpBar: false, showSw: false })) : v.penCards };
  }
  renderVals0() {
    const P = this.props || {};
    const base = P.baseUpper ?? 86;
    const baseLower = P.baseLower ?? 77;
    const provider = P.provider ?? 'BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)';
    const providerShort = provider.split(' (')[0];
    const s = this.state;
    const site = this.SITES.filter(x => x.id === s.site)[0] || this.SITES[0];
    const pen = s.pen;
    const penName = (this.PENS.filter(p => p.id === pen)[0] || this.PENS[0]).label;

    const thresholdFor = (pid) => {
      const a = this.adjOf(this.cfgFor(site.id, pid));
      return { upper: base + a.total, lower: baseLower, adj: a.total, rows: a.rows };
    };
    const th = thresholdFor(pen);
    const upper = th.upper, lower = th.lower;

    // ---- weather + heat load per pen ----
    const spanDays = (a, b) => {
      const d1 = new Date(a).getTime(), d2 = new Date(b).getTime();
      if (isNaN(d1) || isNaN(d2) || d2 <= d1) return 7;
      return Math.max(1, Math.min(365, Math.round((d2 - d1) / 86400000)));
    };
    const days = s.range === '1m' ? 30 : s.range === '3m' ? 90 : s.range === '6m' ? 180 : s.range === 'custom' ? spanDays(s.cFrom, s.cTo) : 7;
    const penSeedOf = (id) => { const m = { p1: 0, p2: 3.6, p3: 2.4 }; return m[id] != null ? m[id] : (this.penHash(id) % 9) * 0.8; };
    const penOffOf = (id) => { const m = { p1: 0, p2: 0, p3: -26 }; return m[id] != null ? m[id] : (this.penHash(id) % 13) - 6; };
    const penW = {};
    this.PENS.forEach(p => {
      const w = this.weather(site, days, penSeedOf(p.id));
      const t = thresholdFor(p.id);
      const hli0 = w.map(x => +Math.max(50, x.hli + penOffOf(p.id)).toFixed(1));
      const target = p.id === 'p3' ? 82 : null;
      const shift = target == null ? 0 : +(target - hli0[hli0.length - 11]).toFixed(1);
      const hli = hli0.map(v => +Math.max(50, v + shift).toFixed(1));
      penW[p.id] = { w, hli, t, ahlu: this.ahluOf(hli, t.upper, t.lower) };
    });
    const p2w = penW.p2;
    if (p2w && Math.max.apply(null, p2w.ahlu) < 20) {
      const hmin = Math.min.apply(null, p2w.hli), hmax = Math.max.apply(null, p2w.hli);
      const rng = Math.max(0.001, hmax - hmin);
      p2w.ahlu = p2w.hli.map(v => +(380 + ((v - hmin) / rng) * 20).toFixed(0));
    }
    const cur = penW[pen];
    const nowIdx = cur.hli.length - 11;
    const hliNowV = cur.hli[nowIdx];

    // ---- section tabs ----
    const ICONS = {
      overview: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
      water: 'M12 3s6 6.4 6 10.6a6 6 0 0 1-12 0C6 9.4 12 3 12 3z',
      hist: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7.6V12l3 1.9',
      forecast: 'M16.5 18H7a4 4 0 1 1 .6-7.95A5.5 5.5 0 0 1 18 10.3a3.9 3.9 0 0 1-1.5 7.7z',
      station: 'M12 21v-7M8.4 7.2a4 4 0 0 1 7.2 0M5.6 4.6a8 8 0 0 1 12.8 0M12 14a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2z',
      map: 'M9 4 3 6.2V20l6-2.2 6 2.2 6-2.2V4l-6 2.2L9 4zM9 4v13.8M15 6.2V20',
      tank: 'M5 8h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2M7 14c2.2-1.6 3.6-1.6 5 0s2.8 1.6 5 0',
      pump: 'M20 13a8 8 0 1 0-16 0M12 13l4.5-3.4M12 20v-3'
    };
    const mkTab = (label, act, active, enabled, icon) => ({
      label, act: enabled ? act : 'none:x', note: enabled ? '' : ' · not enabled',
      cur: enabled ? 'pointer' : 'not-allowed', op: enabled ? 1 : 0.45,
      icon: ICONS[icon] || ICONS.overview,
      bg: active ? '#EAF6F0' : 'transparent', c: active ? '#0C6B4C' : '#7C8D88',
      pbg: active ? '#F3FAF7' : '#fff', pc: active ? '#0C6B4C' : '#6E827C',
      fw: active ? 600 : 400, bc: active ? '#12855F' : 'transparent'
    });
    let subTabs = [], contextLabel = '', contextChips = [];
    const tab = s.tab;
    if (tab === 'weather') {
      subTabs = [
        mkTab('Stations', 'ws:stations', s.wSub === 'stations', true, 'station'),
        mkTab('Forecast', 'ws:forecast', s.wSub === 'forecast', true, 'forecast'),
        mkTab('Historical', 'ws:hist', s.wSub === 'hist', true, 'hist')
      ];
      contextLabel = '';
    } else if (tab === 'water') {
      subTabs = [
        mkTab('Water Map', 'was:map', s.waSub === 'map', false, 'map'),
        mkTab('Tanks', 'was:tanks', s.waSub === 'tanks', false, 'tank'),
        mkTab('Pumps & Flow Meters', 'was:pumps', s.waSub === 'pumps', true, 'pump')
      ];
      contextLabel = 'Flow meter: ' + (s.trough === 't2' ? 'Flowmeter Pen 2' : s.trough === 't3' ? 'Flowmeter Pen 3' : 'Flowmeter Pen 1');
    } else {
      subTabs = [
        mkTab('Overview', 'is:overview', s.iSub === 'overview', true, 'overview'),
        mkTab('Water Flow', 'is:water', s.iSub === 'water', true, 'water'),
        mkTab('Historical Heat Index', 'is:hist', s.iSub === 'hist', true, 'hist'),
        mkTab('Forecast Heat Index', 'is:forecast', s.iSub === 'forecast', true, 'forecast')
      ];
      contextLabel = '';
      contextChips = [];
    }
    const fSub = s.fSub || 'heat';
    const isCfg = tab === 'feedlot' && s.iSub === 'config';
    const FL = tab === 'feedlot' && fSub === 'heat' && !isCfg;
    const showPenDd = false;
    const showWcPenDd = FL && s.iSub === 'water';
    const titles = {
      weather: ['Weather', 'Real-time weather data and forecasting'],
      water: ['Water Management', site.name + ' · monitor and manage water resources across the site'],
      feedlot: ['Feedlot — Heat Index Management', site.name + ' · heat load, water consumption and forecast risk']
    };

    // ---- overview pen cards ----
    const waterToday = { p1: '1,149.4 kL', p2: '842.6 kL', p3: '0 kL' };
    const runToday = { p1: '3 h 12 m', p2: '1 h 24 m', p3: '0 h 00 m' };
    const pumpStart = { p1: '31 Aug 2026, 11:42 am', p2: '31 Aug 2026, 01:05 pm', p3: '—' };
    const swColor = { Auto: '#1C7A55', Manual: '#2C6A94', Off: '#D9534F' };
    const penCards = this.PENS.map(p => {
      const d = penW[p.id], w = d.w[nowIdx], v = d.hli[nowIdx];
      const sw = this.swOf(p.id);
      const zone = v >= d.t.upper ? { zone: 'Above upper', zoneBg: '#FBE9E7', zoneC: '#8E2F2B' } : v >= d.t.lower ? { zone: 'Watch', zoneBg: '#FDF3DF', zoneC: '#8A6A1C' } : { zone: 'Comfort', zoneBg: '#E6F6EE', zoneC: '#1C7A55' };
      const c = this.hliColor(v, d.t.upper, d.t.lower);
      return Object.assign({
        name: p.label, hli: v.toFixed(0), hliC: c,
        hliBg: v >= d.t.upper ? '#FDEFED' : v >= d.t.lower ? '#FDF9EF' : '#F3FAF7',
        hliBd: v >= d.t.upper ? '#F1C7C2' : v >= d.t.lower ? '#F0DFB6' : '#D9EDE4',
        upper: d.t.upper, lower: d.t.lower,
        hliPct: (((Math.min(110, v) - 50) / 60) * 100).toFixed(1),
        lowerPct: (((Math.max(50, Math.min(110, d.t.lower)) - 50) / 60) * 100).toFixed(1),
        upperPct: (((Math.max(50, Math.min(110, d.t.upper)) - 50) / 60) * 100).toFixed(1),
        // labels sit outside their tick, but flip inward near either edge so they never clip the card
        lowerTx: (d.t.lower < 66 && d.t.upper - d.t.lower > 18) ? 'translateX(3px)' : 'translateX(calc(-100% - 3px))',
        upperTx: (((Math.max(50, Math.min(110, d.t.upper)) - 50) / 60) * 100) > 70 ? 'translateX(calc(-100% - 3px))' : 'translateX(3px)',
        ahlu: d.ahlu[nowIdx].toFixed(0),
        rh: w.rh.toFixed(2), temp: w.ta.toFixed(2), wind: w.ws.toFixed(2), at: '31 Aug 2026, 02:48 pm',
        swLabel: sw === 'Off' ? 'Off' : sw + ' · ' + (this.RUNNING[p.id] ? 'Running' : 'Off'),
        swC: sw === 'Off' ? '#8A9A95' : (sw === 'Manual' ? '#2C6A94' : '#1C7A55'),
        swDot: sw === 'Off' ? '#B4C3BE' : (this.RUNNING[p.id] ? '#2BB47C' : '#B4C3BE'),
        swAnim: sw !== 'Off' && this.RUNNING[p.id] ? 'pulseDot 1.8s infinite' : 'none',
        modeLabel: sw === 'Off' ? 'Disabled' : sw, modeC: sw === 'Auto' ? '#1C9A5A' : sw === 'Manual' ? '#2367C9' : '#C9711E',
        runLabel: this.RUNNING[p.id] ? 'On' : 'Off', runC: this.RUNNING[p.id] ? '#1C9A5A' : '#C0392B',
        showPumpBar: sw === 'Manual' && this.RUNNING[p.id],
        pumpBarPct: Math.min(100, Math.round(((this.PUMP_ELAPSED_MIN[p.id] || 0) / this.PUMP_FIXED_MIN) * 100)),
        pumpBarLabel: (() => { const r = Math.max(0, this.PUMP_FIXED_MIN - (this.PUMP_ELAPSED_MIN[p.id] || 0)); return Math.floor(r / 60) + 'h ' + (r % 60) + 'm remaining'; })(),
        water: waterToday[p.id] || '—', runtime: runToday[p.id] || '0 h 00 m', pumpStart: pumpStart[p.id] || '—',
        penMeta: (p.head || 0) + ' head · capacity ' + (p.cap || 0), editAct: 'pcfg:edit|' + p.id,
        showSw: p.id !== 'p3', showWater: p.id !== 'p3', showBlank: p.id === 'p3', showZone: zone.zone !== 'Watch'
      }, zone);
    });

    this._specs = {};

    // ---- water consumption (2 aeration pumps) ----
    const dayLabels = ['25 Aug', '26 Aug', '27 Aug', '28 Aug', '29 Aug', '30 Aug', '31 Aug'];

    const WC = {
      '1w': { n: 7, sub: '25 – 31 Aug 2026 · daily totals', labels: dayLabels, step: 1 },
      '1m': { n: 30, sub: '2 – 31 Aug 2026 · daily totals', labels: ['2 Aug', '7 Aug', '12 Aug', '17 Aug', '22 Aug', '27 Aug', '31 Aug'], step: 1 },
      '3m': { n: 13, sub: '1 Jun – 31 Aug 2026 · weekly totals', labels: ['Jun w1', 'Jun w3', 'Jul w1', 'Jul w3', 'Aug w1', 'Aug w3', 'Aug w5'], step: 7 },
      '6m': { n: 26, sub: '1 Mar – 31 Aug 2026 · weekly totals', labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', '31 Aug'], step: 7 },
      custom: { n: Math.max(2, Math.min(120, spanDays(s.wcFrom, s.wcTo))), sub: s.wcFrom + ' → ' + s.wcTo + ' · daily totals', labels: dayLabels, step: 1 }
    };
    const wc = WC[s.wcRange] || WC['1w'];
    const wcRanges = [['1w', '1W'], ['1m', '1M'], ['3m', '3M'], ['6m', '6M'], ['custom', 'Custom']].map(k => Object.assign({ label: k[1], act: 'wcr:' + k[0] }, this.seg(s.wcRange === k[0])));
    const scaleWc = (mean, seed) => {
      const out = [];
      for (let i = 0; i < wc.n; i++) {
        const dip = (i + seed) % 7 === 3 ? 0.12 : 1;
        out.push(+(mean * dip * (0.78 + 0.34 * Math.abs(Math.sin((i + seed) * 1.31)))).toFixed(2));
      }
      return out;
    };
    const wcMean = s.wcRange === '3m' ? 23.6 : s.wcRange === '6m' ? 22.4 : 3.5;
    const wcPen = s.wcPen || 'p1';
    const TROUGHS_BY_PEN = {
      p1: [
        { name: 'Aeration Pump 1', meta: 'Pen 1 · flow meter FM-01', flowLabel: 'Flowmeter 1', lastSample: '31 Aug 2026, 02:10 pm', startCum: 1130, daily: scaleWc(wcMean, 0), runMin: 192, maxH: 1.92 },
        { name: 'Aeration Pump 2', meta: 'Pen 1 · flow meter FM-02', flowLabel: 'Flowmeter 2', lastSample: '31 Aug 2026, 01:58 pm', startCum: 906, daily: scaleWc(wcMean * 0.72, 2), runMin: 84, maxH: 1.6 }
      ],
      p2: [
        { name: 'Aeration Pump 1', meta: 'Pen 2 · flow meter FM-03', flowLabel: 'Flowmeter 1', lastSample: '31 Aug 2026, 02:05 pm', startCum: 812, daily: scaleWc(wcMean * 0.88, 4), runMin: 146, maxH: 1.74 }
      ],
      p3: []
    };
    const troughDefs = (TROUGHS_BY_PEN[wcPen] || []).length ? TROUGHS_BY_PEN[wcPen] : TROUGHS_BY_PEN.p1;
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const WEND = s.wcRange === 'custom' && !isNaN(new Date(s.wcTo).getTime()) ? new Date(s.wcTo).getTime() : new Date(2026, 7, 31).getTime();
    const wcCats = [];
    const wcTs = [];
    for (let i = wc.n - 1; i >= 0; i--) { const d = new Date(WEND - i * (wc.step || 1) * 86400000); wcCats.push(d.getDate() + ' ' + MONTHS[d.getMonth()] + (wc.n > 40 ? '' : '')); wcTs.push(d.getTime()); }
    const wcStep = wc.step || 1;
    const periodDays = wc.n * wcStep;
    const pad2run = n => (n < 10 ? '0' + n : '' + n);
    const fmtRunHMS = (mins) => {
      const totalSec = Math.round(mins * 60);
      const h = Math.floor(totalSec / 3600), m = Math.floor((totalSec % 3600) / 60), sec = totalSec % 60;
      return pad2run(h) + ':' + pad2run(m) + ':' + pad2run(sec);
    };
    const fmtRun = (mins) => {
      if (mins >= 1440) return Math.floor(mins / 1440) + 'd ' + fmtRunHMS(mins % 1440);
      return fmtRunHMS(mins);
    };
    const diurnal = [.3, .25, .22, .2, .22, .35, .55, .75, .9, 1.05, 1.15, 1.2, 1.22, 1.2, 1.15, 1.1, 1.05, .95, .8, .65, .5, .42, .35, .32];
    const dSum = diurnal.reduce((a, b) => a + b, 0);
    const hourlyOf = (daily) => {
      const out = [];
      daily.forEach(total => {
        const perDay = total / wcStep;
        for (let d = 0; d < wcStep; d++) diurnal.forEach(w => out.push(+(perDay * w / dSum).toFixed(3)));
      });
      return out;
    };
    const totalHours = wc.n * wcStep * 24;
    const hourlyTs = [];
    for (let i = totalHours - 1; i >= 0; i--) hourlyTs.push(WEND + 23 * 3600000 - i * 3600000);
    const pad2 = n => (n < 10 ? '0' + n : '' + n);
    const hourCatsFull = hourlyTs.map(ts => {
      const d = new Date(ts);
      return totalHours <= 48
        ? d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + pad2(d.getHours()) + ':00'
        : d.getDate() + ' ' + MONTHS[d.getMonth()];
    });
    const hourCatsWithTime = hourlyTs.map(ts => { const d = new Date(ts); return d.getHours() === 0 ? '00:00 · ' + d.getDate() + ' ' + MONTHS[d.getMonth()] : pad2(d.getHours()) + ':00'; });
    const hourCatsTip = hourlyTs.map(ts => { const d = new Date(ts); return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + pad2(d.getHours()) + ':00'; });
    const troughs = troughDefs.map((t, ti) => {
      const cum = [], bars = [];
      let acc = t.startCum;
      const fine = [];
      t.daily.forEach(d => { for (let k = 0; k < 8; k++) { acc += d / 8; fine.push(acc); } });
      const cmin = Math.floor(t.startCum / 5) * 5, cmax = Math.ceil(acc / 5) * 5;
      const bmax = Math.ceil(Math.max.apply(null, t.daily)) || 1;
      const slot = 1000 / t.daily.length, bw = Math.max(4, slot * 0.62);
      t.daily.forEach((d, i) => {
        const h = (d / bmax) * 170;
        bars.push({ x: (i * slot + (slot - bw) / 2).toFixed(1), w: bw.toFixed(1), y: (170 - h).toFixed(1), h: h.toFixed(1) });
      });
      const axisOf = (min, max, unit) => [4, 3, 2, 1, 0].map(k => (min + ((max - min) * k) / 4).toFixed(unit) + '');
      return {
        id: 'tc' + ti, cumId: 'tcum' + ti, barId: 'tbar' + ti, runId: 'trun' + ti,
        runSub: ((this._runData || {})['trun' + ti] || {}).mode === 'hourly' ? '(24-hour status — ' + (((this._runData || {})['trun' + ti] || {}).dailyCats || [])[((this._runData || {})['trun' + ti] || {}).day || 0] + ')' : '(click a bar for detail status)',
        runDrilled: ((this._runData || {})['trun' + ti] || {}).mode === 'hourly',
        name: t.name, meta: t.meta, flowLabel: t.flowLabel || t.meta, lastSample: t.lastSample || '31 Aug 2026, 01:54 pm',
        cumValue: acc.toFixed(1) + ' kL', dailyValue: t.daily[t.daily.length - 1].toFixed(1) + ' kL', runValue: fmtRun(t.runMin * periodDays),
        cumSeries: t.daily.map((d, i) => { let a2 = t.startCum; for (let k = 0; k <= i; k++) a2 += t.daily[k]; return +a2.toFixed(1); }),
        barSeries: hourlyOf(t.daily).map(v => +(v * 1000).toFixed(0)),
        runSeries: hourlyOf(Array(wc.n).fill(t.runMin * wcStep)),
        cumLine: this.pts(fine, 1000, 170, cmin, cmax), cumArea: this.area(fine, 1000, 170, cmin, cmax),
        cumAxis: axisOf(cmin, cmax, 0), barAxis: axisOf(0, bmax, 1),
        bars, labels: wc.labels
      };
    });
    const wcTSel = s.trough === 't2' ? 1 : 0;
    const wcTrough = troughs[wcTSel];
    const wcTroughOptions = troughDefs.map((t, ti) => ({
      act: 'trough:' + (ti === 0 ? 't1' : 't2'), label: t.name, sub: t.meta,
      dot: ti === wcTSel ? '#2BB47C' : '#C9D6D1', bg: ti === wcTSel ? '#F3FAF7' : '#fff', c: ti === wcTSel ? '#1C5C45' : '#33453F'
    }));

    if (FL && s.iSub === 'water') troughs.forEach((t, ti) => {
      const axisFont = { fontSize: '11.5px', colors: '#8A9A95', fontFamily: 'Poppins, sans-serif' };
      const baseChart = (type) => ({
        type, height: 300, fontFamily: 'Poppins, sans-serif', animations: { enabled: false },
        toolbar: { show: false }, zoom: { enabled: true, type: 'x', autoScaleYaxis: true }
      });
      const xa = (cats) => ({ categories: cats, tickAmount: Math.min(4, Math.max(2, cats.length)), axisBorder: { color: '#E4EAE8' }, axisTicks: { show: false }, labels: { rotate: -35, rotateAlways: false, hideOverlappingLabels: true, trim: false, showDuplicates: false, style: axisFont } });
      const dayCount = Math.round(totalHours / 24);
      const dailyCats = [];
      for (let d = 0; d < dayCount; d++) { const dt = new Date(hourlyTs[d * 24]); dailyCats.push(dt.getDate() + ' ' + MONTHS[dt.getMonth()]); }

      this._runData = this._runData || {};
      const mkDrill = (id, hourVals, dailyVals) => {
        this._runData[id] = { dailyCats, dailyVals, hourCats: hourCatsTip, hourCatsFull: hourCatsTip, hourVals, from: 0, mode: (this._runData[id] || {}).mode || 'daily' };
        return this._runData[id].mode;
      };

      const volDailyVals = [];
      for (let d = 0; d < dayCount; d++) { let sum = 0; for (let h = 0; h < 24; h++) sum += t.barSeries[d * 24 + h] || 0; volDailyVals.push(+sum.toFixed(0)); }
      const volHourlyVals = t.barSeries.map(v => +v.toFixed(0));
      const barId = 'tbar' + ti;
      const volMode = mkDrill(barId, volHourlyVals, volDailyVals);
      this._specs[barId] = {
        chart: Object.assign(baseChart('area'), { events: { zoomed: (ctx, ev) => this._drillZoom(barId, ev) } }),
        series: [{ name: 'Water volume', data: volMode === 'hourly' ? volHourlyVals : volDailyVals }],
        colors: ['#3FA9C0'], stroke: { width: 2.2, curve: 'smooth' },
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0.05, stops: [0, 95] } },
        dataLabels: { enabled: false }, markers: { size: 0, hover: { size: 5 } },
        xaxis: xa(volMode === 'hourly' ? hourCatsTip : dailyCats),
        yaxis: { min: 0, forceNiceScale: true, tickAmount: 5, labels: { formatter: v => v == null ? '' : v.toFixed(0), style: axisFont }, title: { text: 'L', style: { fontSize: '11.5px', color: '#8A9A95', fontWeight: 500 } } },
        grid: { borderColor: '#EDF2F0', strokeDashArray: 3, padding: { top: 12, right: 14, bottom: 0, left: 6 } },
        tooltip: { style: { fontSize: '12px' }, x: { formatter: (v, o) => this._fullCat(barId, o && o.dataPointIndex) }, y: { formatter: v => v == null ? '—' : v.toFixed(0) + ' L' } }
      };

      const runDailyVals = [];
      for (let d = 0; d < dayCount; d++) {
        let sum = 0, onHrs = 0; for (let h = 0; h < 24; h++) { const hv = t.runSeries[d * 24 + h] || 0; sum += hv; if (hv > 0) onHrs++; }
        const jitterMin = Math.sin((d + ti * 11 + 1) * 1.7) * 25;
        runDailyVals.push(+Math.max(0, (sum + jitterMin) / 60).toFixed(2));
      }
      const runHourlyVals = t.runSeries.map(v => +(v / 60).toFixed(2));
      // duty cycle: spread each day's run minutes over contiguous on-blocks so the status chart has real Off periods
      const onHourlyVals = [];
      for (let d = 0; d < dayCount; d++) {
        const idle = (d + ti) % 7 === 6;
        const day = Array(24).fill(0);
        if (!idle) {
          const amStart = 8 + ((d + ti) % 3), amLen = 2 + ((d + ti * 2) % 2);
          const pmStart = 14 + ((d + ti) % 3), pmLen = 3 + ((d * 2 + ti) % 3);
          for (let k = 0; k < amLen; k++) day[(amStart + k) % 24] = 1;
          for (let k = 0; k < pmLen; k++) day[(pmStart + k) % 24] = 1;
        }
        for (let h = 0; h < 24; h++) onHourlyVals.push(day[h]);
      }
      // daily bars are the hours the pump actually ran that day
      for (let d = 0; d < dayCount; d++) { let on = 0; for (let h = 0; h < 24; h++) on += onHourlyVals[d * 24 + h] || 0; runDailyVals[d] = on; }
      const onDailyVals = [];
      for (let d = 0; d < dayCount; d++) {
        let on = 0; for (let h = 0; h < 24; h++) on += onHourlyVals[d * 24 + h] || 0;
        onDailyVals.push(on > 0 ? 1 : 0);
      }
      const runId = 'trun' + ti;
      const runMode = mkDrill(runId, onHourlyVals, runDailyVals);
      const hourlyRunOpts = {
        stroke: { width: 2.6, curve: 'stepline' },
        fill: { type: 'solid', opacity: 1 },
        markers: { size: 0, hover: { size: 5 } },
        colors: ['#2BB47C'],
        yaxis: { min: 0, max: 1, tickAmount: 1, labels: { formatter: v => (v >= 0.5 ? 'On' : 'Off'), style: axisFont }, title: { text: 'pump status', style: { fontSize: '11.5px', color: '#8A9A95', fontWeight: 500 } } },
        tooltip: { style: { fontSize: '12px' }, x: { formatter: (v, o) => this._fullCat(runId, o && o.dataPointIndex) }, y: { formatter: v => (v >= 0.5 ? 'On' : 'Off') } }
      };
      const dailyRunOpts = {
        stroke: { width: 0 },
        fill: { opacity: 1 },
        colors: ['#2BB47C'],
        plotOptions: { bar: { columnWidth: '62%', borderRadius: 2 } },
        yaxis: { min: 0, forceNiceScale: true, tickAmount: 5, labels: { formatter: v => v == null ? '' : v.toFixed(1), style: axisFont }, title: { text: 'hours', style: { fontSize: '11.5px', color: '#8A9A95', fontWeight: 500 } } },
        tooltip: { style: { fontSize: '12px' }, x: { formatter: (v, o) => this._fullCat(runId, o && o.dataPointIndex) }, y: { formatter: v => v == null ? '—' : fmtRunHMS(v * 60) } }
      };
      this._runData[runId].hourlyOpts = hourlyRunOpts;
      this._runData[runId].dailyOpts = dailyRunOpts;
      this._runData[runId].hourType = 'line';
      this._runData[runId].dailyType = 'column';
      this._runData[runId].dayHourCats = Array.from({ length: 24 }, (_, h) => pad2run(h) + ':00');
      const runHourly = runMode === 'hourly';
      this._specs[runId] = Object.assign({
        chart: Object.assign(baseChart('line'), { zoom: { enabled: false }, events: { dataPointSelection: (e, ctx, opts) => this._runDayClick(runId, opts && opts.dataPointIndex) } }),
        series: [{ name: runHourly ? 'Status' : 'Run time', type: runHourly ? 'line' : 'column', data: runHourly ? onHourlyVals : runDailyVals }],
        dataLabels: { enabled: false },
        xaxis: { categories: runHourly ? hourCatsTip : dailyCats, tickAmount: Math.min(runHourly ? 4 : 7, (runHourly ? hourCatsTip : dailyCats).length), axisBorder: { color: '#E4EAE8' }, axisTicks: { show: false }, labels: { rotate: runHourly ? -35 : 0, rotateAlways: false, hideOverlappingLabels: true, trim: false, style: axisFont } },
        grid: { borderColor: '#EDF2F0', strokeDashArray: 3, padding: { top: 12, right: 14, bottom: 0, left: 6 } },
        legend: { show: false }
      }, runHourly ? hourlyRunOpts : dailyRunOpts);
    });

    // ---- historical heat index ----
    const step = Math.max(1, Math.round(cur.hli.length / 90));
    const hliS = cur.hli.filter((v, i) => i % step === 0);
    const ahluS = cur.ahlu.filter((v, i) => i % step === 0);
    const dailyPeak = [], dailyAhlu = [];
    for (let d = 0; d < days; d++) {
      dailyPeak.push(Math.max.apply(null, cur.hli.slice(d * 24, d * 24 + 24)));
      dailyAhlu.push(Math.max.apply(null, cur.ahlu.slice(d * 24, d * 24 + 24)));
    }
    const yOf = (v, h, min, max) => (h - ((Math.max(min, Math.min(max, v)) - min) / (max - min)) * h).toFixed(1);
    const band = { upperY: yOf(upper, 210, 50, 110), lowerY: yOf(lower, 210, 50, 110), y: yOf(upper, 210, 50, 110), h: (yOf(lower, 210, 50, 110) - yOf(upper, 210, 50, 110)).toFixed(1) };
    const bandF = { upperY: yOf(upper, 230, 50, 110), lowerY: yOf(lower, 230, 50, 110), y: yOf(upper, 230, 50, 110), h: (yOf(lower, 230, 50, 110) - yOf(upper, 230, 50, 110)).toFixed(1) };
    const ahluMaxAll = Math.max.apply(null, cur.ahlu);
    const histLabels = days === 1
      ? ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00']
      : dayLabels.slice(-Math.min(7, days));
    const ahluTop = Math.max(50, Math.ceil(Math.max.apply(null, cur.ahlu) / 50) * 50);
    const hist = {
      hli: this.pts(hliS, 1000, 210, 50, 110),
      dots: days <= 7 ? this.dots(dailyPeak, 1000, 210, 50, 110) : [],
      ahlu: this.pts(ahluS, 1000, 210, 0, ahluTop),
      ahluArea: this.area(ahluS, 1000, 210, 0, ahluTop),
      ahluDots: days <= 7 ? this.dots(dailyAhlu, 1000, 210, 0, ahluTop) : [],
      ahluAxis: [4, 3, 2, 1, 0].map(k => ((ahluTop * k) / 4).toFixed(2)),
      vGrid: Array.apply(null, { length: days === 1 ? 8 : Math.min(7, days) * 2 }).map((x, i, a) => ((i / a.length) * 1000).toFixed(1)),
      hGrid: [0, 43.3, 86.7, 130, 173.3, 216.7].map(v => v.toFixed(1)),
      axisTicks: (function () {
        const n = Math.min(7, days), out = [];
        for (let d = 0; d < n; d++) {
          const lbl = dayLabels[dayLabels.length - n + d] || '';
          out.push({ t: '00:00', d: lbl });
          out.push({ t: '12:00', d: lbl });
        }
        return out;
      })(),
      labels: histLabels,
      ahluPeak: ahluMaxAll.toFixed(0),
      ahluStatus: cur.ahlu[cur.ahlu.length - 1] > cur.ahlu[cur.ahlu.length - 6] ? 'Rising' : 'Recovering'
    };
    if (FL && s.iSub === 'hist') {
      const MON2 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const total = cur.hli.length;
      const stepH = Math.max(1, Math.ceil(total / 420));
      const idx = [];
      for (let i = 0; i < total; i += stepH) idx.push(i);
      const endMs = new Date(2026, 7, 31, 23, 0).getTime();
      const startMs = endMs - (total - 1) * 3600000;
      const pad2 = n => (n < 10 ? '0' + n : '' + n);
      const catOf = (i) => {
        const d = new Date(startMs + i * 3600000);
        const ds = d.getDate() + ' ' + MON2[d.getMonth()];
        return days <= 7 ? ds + ' ' + pad2(d.getHours()) + ':00' : ds;
      };
      const cats = idx.map(catOf);
      const axisFont = { fontSize: '11.5px', colors: '#8A9A95', fontFamily: 'Poppins, sans-serif' };
      const xa = { categories: cats, tickAmount: 5, axisBorder: { color: '#E4EAE8' }, axisTicks: { show: false }, labels: { rotate: 0, rotateAlways: false, hideOverlappingLabels: true, trim: false, style: axisFont } };
      this._specs.histHli = {
        chart: { type: 'line', height: 330, fontFamily: 'Poppins, sans-serif', toolbar: { show: false }, animations: { enabled: false }, zoom: { enabled: true, type: 'x', autoScaleYaxis: true } },
        series: [{ name: 'Mean HLI', data: idx.map(i => +cur.hli[i].toFixed(1)) }],
        colors: ['#1F5C77'], stroke: { width: 2.4, curve: 'smooth' },
        dataLabels: { enabled: false }, markers: { size: 0, hover: { size: 5 } },
        xaxis: xa,
        yaxis: { min: 50, max: 110, tickAmount: 6, labels: { formatter: v => v.toFixed(0), style: axisFont }, title: { text: 'HLI (Heat Load Index)', style: { fontSize: '11.5px', color: '#8A9A95', fontWeight: 500 } } },
        grid: { borderColor: '#EDF2F0', strokeDashArray: 3, padding: { top: 6, right: 18, bottom: 0, left: 6 } },
        tooltip: { style: { fontSize: '12px' }, y: { formatter: v => v == null ? '—' : v.toFixed(1) + ' HLI' } },
        annotations: { yaxis: [
          { y: upper, borderColor: '#D9534F', strokeDashArray: 5, label: { text: 'Upper ' + upper, position: 'right', offsetX: -6, offsetY: -4, style: { background: '#FBE9E7', color: '#8E2F2B', fontSize: '11px', fontFamily: 'Poppins, sans-serif' } } },
          { y: lower, borderColor: '#1F9254', strokeDashArray: 5, label: { text: 'Lower ' + lower, position: 'right', offsetX: -6, offsetY: -4, style: { background: '#E6F6EE', color: '#1C5C45', fontSize: '11px', fontFamily: 'Poppins, sans-serif' } } }
        ] }
      };
      this._specs.histAhlu = {
        chart: { type: 'area', height: 290, fontFamily: 'Poppins, sans-serif', toolbar: { show: false }, animations: { enabled: false }, zoom: { enabled: true, type: 'x', autoScaleYaxis: true } },
        series: [{ name: 'AHLU', data: idx.map(i => +cur.ahlu[i].toFixed(0)) }],
        dataLabels: { enabled: false },
        colors: ['#5A3A8E'], stroke: { width: 2.2, curve: 'smooth' },
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.26, opacityTo: 0.02, stops: [0, 95] } },
        markers: { size: 0, hover: { size: 5 } },
        xaxis: xa,
        yaxis: { min: 0, forceNiceScale: true, tickAmount: 5, labels: { formatter: v => v.toFixed(0), style: axisFont }, title: { text: 'AHLU (Accumulated Heat Load Units)', style: { fontSize: '11.5px', color: '#8A9A95', fontWeight: 600 } } },
        grid: { borderColor: '#EDF2F0', strokeDashArray: 3, padding: { top: 6, right: 18, bottom: 0, left: 6 } },
        tooltip: { style: { fontSize: '12px' }, y: { formatter: v => v == null ? '—' : v.toFixed(0) + ' AHLU' } }
      };
    }

    const above = cur.hli.filter(v => v > upper).length;
    const below = cur.hli.filter(v => v < lower).length;
    const withBg = arr => arr.map((it, i) => Object.assign({ bg: i % 2 ? '#fff' : '#F7FAF9' }, it));
    const heatLoadStats = withBg([
      { k: 'Peak HLI', v: Math.max.apply(null, cur.hli).toFixed(2) },
      { k: 'Peak AHLU', v: ahluMaxAll.toFixed(2) },
      { k: 'Hours above upper threshold HLI', v: above.toFixed(2) },
      { k: 'Cooling hours below lower threshold HLI', v: below.toFixed(2) }
    ]);
    const thresholdStats = withBg([
      { k: 'Upper HLI', v: '' + upper },
      { k: 'Lower HLI', v: '' + lower },
      { k: '% hours above upper HLI', v: (above / cur.hli.length * 100).toFixed(1) + '%' },
      { k: 'Method', v: 'Temperature + solar radiation' }
    ]);
    const histRows = [];
    for (let d = 0; d < Math.min(7, days); d++) {
      const dayH = cur.hli.slice(d * 24, d * 24 + 24), dayA = cur.ahlu.slice(d * 24, d * 24 + 24);
      const peak = Math.max.apply(null, dayH), hrs = dayH.filter(v => v > upper).length;
      const tag = hrs === 0 ? 'Thermoneutral' : hrs < 6 ? 'Above upper' : 'Sustained load';
      histRows.push({
        date: dayLabels[dayLabels.length - Math.min(7, days) + d] || 'Day ' + (d + 1),
        peak: peak.toFixed(1), peakC: this.hliColor(peak, upper, lower),
        avg: (dayH.reduce((a, b) => a + b, 0) / 24).toFixed(1),
        hrs: hrs + ' h', ahlu: Math.max.apply(null, dayA).toFixed(0), tag,
        tagBg: hrs === 0 ? '#E6F6EE' : hrs < 6 ? '#FDF3DF' : '#FBE9E7',
        tagC: hrs === 0 ? '#1C7A55' : hrs < 6 ? '#8A6A1C' : '#8E2F2B'
      });
    }

    // ---- forecast ----
    const fcDefs = [
      { day: 'Tue · 1 Sep', chip: 'Today', cond: 'Sunny · 33° max', dt: 1.8, sr: 1.05 },
      { day: 'Wed · 2 Sep', chip: 'Tomorrow', cond: 'Partly cloudy · 31° max', dt: 0.4, sr: 0.9 },
      { day: 'Thu · 3 Sep', chip: '3rd September', cond: 'Showers · 29° max', dt: -1.4, sr: 0.72 },
      { day: 'Fri · 4 Sep', chip: '4th September', cond: 'Sunny · 32° max', dt: 1.2, sr: 0.95 }
    ];
    const fcSeries = fcDefs.map(d => {
      const w = this.weather({ tBase: site.tBase + d.dt, rhBase: site.rhBase, srPeak: site.srPeak * d.sr }, 1, 3.5);
      return w.map(x => x.hli);
    });
    const fcDays = fcDefs.map((d, i) => {
      const peak = Math.max.apply(null, fcSeries[i]);
      const hrs = fcSeries[i].filter(v => v > upper).length;
      const ah = this.ahluOf(fcSeries[i], upper, lower);
      const over = peak >= upper;
      return Object.assign({
        act: 'fday:' + i, actHour: 'fdayh:' + i, day: d.day, cond: d.cond, peak: peak.toFixed(0),
        peakC: this.hliColor(peak, upper, lower),
        hrs: hrs + ' h', ahlu: Math.max.apply(null, ah).toFixed(0),
        chip: over ? 'Crosses upper' : peak >= lower ? 'Watch' : 'Comfort',
        chipBg: over ? '#FBE9E7' : peak >= lower ? '#FDF3DF' : '#E6F6EE',
        chipC: over ? '#8E2F2B' : peak >= lower ? '#8A6A1C' : '#1C7A55'
      }, s.fday === i ? { bg: '#EAF6F0', bd: '#12855F' } : { bg: '#fff', bd: '#E4EAE8' });
    });
    const fi = Math.min(s.fday, fcDefs.length - 1);
    const fser = fcSeries[fi];
    const fahlu = this.ahluOf(fser, upper, lower);
    const fpeak = Math.max.apply(null, fser), fpeakIdx = fser.indexOf(fpeak);
    const fcAbove = fser.filter(v => v > upper).length;
    const fcBelow = fser.filter(v => v < lower).length;
    const fcHeatLoadStats = withBg([
      { k: 'Peak HLI', v: fpeak.toFixed(2) },
      { k: 'Peak AHLU', v: Math.max.apply(null, fahlu).toFixed(2) },
      { k: 'Hours above upper threshold HLI', v: fcAbove.toFixed(2) },
      { k: 'Cooling hours below lower threshold HLI', v: fcBelow.toFixed(2) }
    ]);
    const fcThresholdStats = withBg([
      { k: 'Upper HLI', v: '' + upper },
      { k: 'Lower HLI', v: '' + lower },
      { k: '% hours above upper HLI', v: (fcAbove / fser.length * 100).toFixed(1) + '%' },
      { k: 'Method', v: 'Temperature + solar radiation' }
    ]);
    const fcDateChips = fcDefs.map((d, i) => ({
      act: 'fday:' + i, label: d.chip,
      bg: s.fday === i ? '#EAF6F0' : 'transparent', bd: s.fday === i ? '#12855F' : '#D7E0DC',
      c: s.fday === i ? '#0C6B4C' : '#33453F', fw: s.fday === i ? 600 : 400
    }));
    const fcSel = {
      title: fcDefs[fi].day, sub: "Jane's Weather inputs · HLI recalculated hourly",
      hli: this.pts(fser, 1000, 230, 50, 110),
      band: this.pts(fser.map(v => v + 4.5), 1000, 230, 50, 110) + ' ' + this.pts(fser.map(v => v - 4.5), 1000, 230, 50, 110).split(' ').reverse().join(' '),
      ahlu: this.pts(fahlu.map(v => 50 + (v / 200) * 60), 1000, 230, 50, 110),
      peakX: ((fpeakIdx / 23) * 1000).toFixed(1),
      peakY: yOf(fpeak, 230, 50, 110),
      labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
      hours: [9, 11, 12, 13, 14, 15, 16, 18].map(h => {
        const v = fser[h];
        return {
          t: (h < 10 ? '0' + h : h) + ':00', hli: v.toFixed(0), c: this.hliColor(v, upper, lower),
          bg: v >= upper ? '#FDEFED' : v >= lower ? '#FDF9EF' : '#fff',
          bd: v >= upper ? '#F1C7C2' : v >= lower ? '#F0DFB6' : '#E9EFED',
          ahlu: fahlu[h].toFixed(0),
          zone: v >= upper ? 'Above upper' : v >= lower ? 'Holding' : 'Recovering',
          zoneC: v >= upper ? '#8E2F2B' : v >= lower ? '#8A6A1C' : '#1C7A55'
        };
      })
    };
    const fcBanner = fpeak >= upper
      ? { bg: '#FBE9E7', bd: '#F1C7C2', accent: '#D9534F', fg: '#8E2F2B', glyph: '!', title: 'Peak risk — ' + penName + ', forecast HLI ' + fpeak.toFixed(0), body: fcDefs[fi].day + ', 13:00–17:00 · threshold ' + upper + ' · ' + Math.max.apply(null, fahlu).toFixed(0) + ' AHLU projected before overnight recovery' }
      : { bg: '#F3FAF7', bd: '#D9EDE4', accent: '#2BB47C', fg: '#1C5C45', glyph: '✓', title: 'Forecast stays inside the comfort zone', body: fcDefs[fi].day + ' · peak HLI ' + fpeak.toFixed(0) + ', below the ' + upper + ' upper threshold for ' + penName + '.' };
    const fcPens = this.PENS.map(p => {
      const t = thresholdFor(p.id);
      const peak = Math.max.apply(null, fser) + (p.id === 'p2' ? 1.6 : p.id === 'p3' ? -2.4 : 0);
      const over = peak >= t.upper;
      return {
        pen: p.label, thresh: 'threshold ' + t.upper + ' / ' + t.lower, peak: peak.toFixed(0),
        c: this.hliColor(peak, t.upper, t.lower),
        chip: over ? 'Crosses upper' : 'Within range',
        chipBg: over ? '#FBE9E7' : '#E6F6EE', chipC: over ? '#8E2F2B' : '#1C7A55'
      };
    });
    const dayCards = fcDefs.map((d, i) => {
      const peak = Math.max.apply(null, fcSeries[i]);
      const hiT = site.tBase + d.dt + 4.2, loT = site.tBase + d.dt - 4.2;
      return {
        day: d.day.split(' · ')[0], date: d.day.split(' · ')[1] || '',
        cond: d.cond.split(' · ')[0], hi: hiT.toFixed(0) + '°', lo: loT.toFixed(0) + '°',
        hli: peak.toFixed(0), c: this.hliColor(peak, upper, lower),
        stats: [
          { k: 'Rain', v: (d.sr < 0.8 ? 70 : d.sr > 1 ? 10 : 30) + '%' },
          { k: 'Humidity', v: site.rhBase.toFixed(0) + '%' },
          { k: 'Wind', v: (8 + i * 3) + ' km/h' }
        ]
      };
    });

    // ---- weather stations tab ----
    const nowW = cur.w[nowIdx];
    const metrics = [
      { label: 'Temperature', unit: '(°C)', v: nowW.ta.toFixed(2), c: '#E8963A' },
      { label: 'Humidity', unit: '(%)', v: nowW.rh.toFixed(2), c: '#29A9C8' },
      { label: 'Rainfall', unit: '(mm)', v: '0', c: '#3D8FC6' },
      { label: 'Atm. pressure', unit: '(hPa)', v: '1008.40', c: '#7A4BC0' },
      { label: 'MSL pressure', unit: '(hPa)', v: '1011.05', c: '#7A4BC0' },
      { label: 'Delta T', unit: '(°C)', v: '4.18', c: '#2C7A5E' },
      { label: 'Dew point', unit: '(°C)', v: (nowW.ta - 5.4).toFixed(2), c: '#3D8FC6' },
      { label: 'Wind speed', unit: '(km/h)', v: nowW.ws.toFixed(2), c: '#2C7A5E' },
      { label: 'Wind direction', unit: '', v: 'WNW', c: '#C0526E' },
      { label: 'Wind gust', unit: '(km/h)', v: (nowW.ws * 1.4).toFixed(2), c: '#C0526E' },
      { label: 'Solar radiation', unit: '(W/m²)', v: nowW.sr.toFixed(0), c: '#D0A21A' },
      { label: 'Black globe', unit: '(est. °C)', v: this.bgt(nowW.ta, nowW.sr).toFixed(1), c: '#8A6A1C' }
    ];
    const hliNow = {
      v: hliNowV.toFixed(0), zone: hliNowV >= upper ? 'Above upper' : hliNowV >= lower ? 'Watch' : 'Comfort zone',
      c: this.hliColor(hliNowV, upper, lower),
      bg: hliNowV >= upper ? '#FDEFED' : hliNowV >= lower ? '#FDF9EF' : '#F3FAF7',
      bd: hliNowV >= upper ? '#F1C7C2' : hliNowV >= lower ? '#F0DFB6' : '#D9EDE4',
      pct: (((Math.min(110, hliNowV) - 50) / 60) * 100).toFixed(1)
    };
    const hliInputs = [
      { k: 'Ambient temperature', v: nowW.ta.toFixed(2) + ' °C' },
      { k: 'Solar radiation', v: nowW.sr.toFixed(0) + ' W/m²' },
      { k: 'Relative humidity', v: nowW.rh.toFixed(2) + ' %' },
      { k: 'Wind speed', v: (nowW.ws / 3.6).toFixed(2) + ' m/s' },
      { k: 'Black globe (estimated)', v: this.bgt(nowW.ta, nowW.sr).toFixed(1) + ' °C' },
      { k: 'Threshold (' + penName + ')', v: upper + ' / ' + lower }
    ];
    const maxT = [], minT = [];
    for (let d = 0; d < 7; d++) {
      const dayH = cur.w.slice(d * 24, d * 24 + 24).map(x => x.ta);
      maxT.push(Math.max.apply(null, dayH)); minT.push(Math.min.apply(null, dayH));
    }
    const tempBars = maxT.map((v, i) => {
      const y = 180 - (v / 40) * 180, y2 = 180 - (minT[i] / 40) * 180;
      return { x: (i * 142 + 10).toFixed(0), y: y.toFixed(1), h: (y2 - y).toFixed(1) };
    });
    const wx = {
      temp: nowW.ta.toFixed(2), rh: nowW.rh.toFixed(2), rain: '0.0',
      pres: '1008.40', msl: '1011.05', delta: '4.18',
      dew: (nowW.ta - 5.4).toFixed(2), wind: nowW.ws.toFixed(2), dir: 'WNW',
      gust: (nowW.ws * 1.4).toFixed(2), solar: nowW.sr.toFixed(0), uv: '8.4',
      at: '31 Aug 2026, 02:48 pm'
    };
    const showTabs = ['Daily', 'Weekly', 'Monthly'].map((k, i) => ({
      label: k, act: 'none:x',
      bg: i === 0 ? '#0E6B4E' : 'transparent', c: i === 0 ? '#fff' : '#6E827C', fw: i === 0 ? 600 : 400
    }));
    const rainVals = [2.4, 0, 6.8, 12.4, 3.2, 0, 1.6];
    const rainBars = rainVals.map((v, i) => {
      const hh = (Math.min(20, v) / 20) * 189;
      return { x: (i * 142 + 10).toFixed(0), y: (189 - hh).toFixed(1), h: hh.toFixed(1) };
    });
    const trendBars = maxT.map((v, i) => {
      const yMax = 189 - (Math.min(40, v) / 40) * 189;
      const yMin = 189 - (Math.min(40, minT[i]) / 40) * 189;
      return {
        x: (i * 142 + 10).toFixed(0),
        maxY: yMax.toFixed(1), maxH: (yMin - yMax).toFixed(1),
        minY: yMin.toFixed(1), minH: (189 - yMin).toFixed(1)
      };
    });
    const avgT = maxT.map((v, i) => (v + minT[i]) / 2);
    const trendLine = this.pts(avgT, 1000, 189, 0, 40);
    const trendDots = this.dots(avgT, 1000, 189, 0, 40);
    const DIRS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const roseVals = DIRS.map((d, i) => 26 + 94 * Math.pow(Math.max(0, Math.cos(((i - 13) / 16) * Math.PI * 2)), 3));
    const rose = {
      spokes: DIRS.map((d, i) => {
        const a = (i / 16) * Math.PI * 2 - Math.PI / 2;
        return { x: (200 + 120 * Math.cos(a)).toFixed(1), y: (165 + 120 * Math.sin(a)).toFixed(1) };
      }),
      poly: DIRS.map((d, i) => {
        const a = (i / 16) * Math.PI * 2 - Math.PI / 2, r = roseVals[i];
        return (200 + r * Math.cos(a)).toFixed(1) + ',' + (165 + r * Math.sin(a)).toFixed(1);
      }).join(' '),
      labels: DIRS.map((d, i) => {
        const a = (i / 16) * Math.PI * 2 - Math.PI / 2;
        return { t: d, lx: (200 + 137 * Math.cos(a)).toFixed(1) + 'px', ly: (165 + 137 * Math.sin(a)).toFixed(1) + 'px' };
      })
    };
    const humVals = [];
    for (let i = 0; i < 60; i++) humVals.push(site.rhBase + 12 * Math.sin(i / 5) + 5 * Math.sin(i / 1.7));
    const humid = { line: this.pts(humVals, 1000, 300, 50, 100), area: this.area(humVals, 1000, 300, 50, 100) };

    const healthCards = [
      { k: 'Status', v: 'Online', c: '#2C7A5E' },
      { k: 'Last reading', v: '2 min ago', c: '#1E2A26' },
      { k: 'Battery / solar', v: '94%', c: '#2C7A5E' },
      { k: 'Messages today', v: '1,152', c: '#1E2A26' }
    ];

    // ---- historical weather ----
    const hwTmax = [], hwTmin = [], hwRh = [];
    for (let i = 0; i < 90; i++) {
      hwTmax.push(site.tBase + 3 + 2.4 * Math.sin(i / 9) + (i % 5) * 0.3);
      hwTmin.push(site.tBase - 6 + 1.8 * Math.sin(i / 11));
      hwRh.push(26 + 6 * Math.sin(i / 7 + 1));
    }
    const histWx = {
      tmax: this.pts(hwTmax, 1000, 220, 0, 40), tmaxArea: this.area(hwTmax, 1000, 220, 0, 40),
      tmin: this.pts(hwTmin, 1000, 220, 0, 40), rh: this.pts(hwRh, 1000, 220, 0, 40),
      labels: ['1 Jun', '15 Jun', '1 Jul', '15 Jul', '1 Aug', '15 Aug', '31 Aug'],
      facts: [
        { k: 'HOTTEST DAY', v: (site.tBase + 6.4).toFixed(1) + ' °C · 12 Aug' },
        { k: 'COOLEST NIGHT', v: (site.tBase - 8.2).toFixed(1) + ' °C · 3 Jul' },
        { k: 'TOTAL RAINFALL', v: '96.4 mm' },
        { k: 'HOURS ABOVE ' + upper + ' HLI', v: '62.5 h' },
        { k: 'OBSERVATIONS', v: '12,960' }
      ]
    };

    // ---- water tab flow meter dashboard ----
    const tSel = s.trough === 't2' ? 1 : 0;
    const wvVals = [], cumVals = [];
    let acc2 = tSel ? 24180000 : 32020000;
    for (let i = 0; i < 200; i++) {
      const v = 700 + 180 * Math.sin(i / 2.2) + (i % 11) * 12;
      wvVals.push(v); acc2 += v * 1.6; cumVals.push(acc2);
    }
    const cmin2 = Math.floor(cumVals[0] / 50000) * 50000, cmax2 = Math.ceil(acc2 / 50000) * 50000;
    const waterVol = { line: this.pts(wvVals, 1000, 200, 0, 1200), area: this.area(wvVals, 1000, 200, 0, 1200), labels: dayLabels };
    const cumulative = {
      line: this.pts(cumVals, 1000, 190, cmin2, cmax2), area: this.area(cumVals, 1000, 190, cmin2, cmax2),
      axis: [4, 3, 2, 1, 0].map(k => (cmin2 + ((cmax2 - cmin2) * k) / 4).toFixed(0))
    };
    const gVal = wvVals[wvVals.length - 1], gFrac = Math.min(1, gVal / 2000), gAng = Math.PI * (1 - gFrac), arcLen = 251;
    const gauge = {
      value: gVal.toFixed(0) + ' L', dash: (arcLen * gFrac).toFixed(0) + ' ' + arcLen,
      x: (100 + 66 * Math.cos(gAng)).toFixed(1), y: (108 - 66 * Math.sin(gAng)).toFixed(1)
    };

    // ---- configuration page ----
    const signed = n => (n > 0 ? '+' + n : '' + n);
    const devOf = (p) => this.DEVKEYS.map(k => ({ label: this.DEV[k].label, value: p[k] || 'Not assigned' }));
    const cfgPens = this.PENS.map(p => {
      const c = this.cfgFor(site.id, p.id);
      const tot = this.adjOf(c);
      return {
        name: p.label, meta: this.swOf(p.id) + ' · aeration pump',
        nameVal: p.label, capVal: '' + (p.cap == null ? '' : p.cap), headVal: '' + (p.head == null ? '' : p.head),
        delAct: 'pcfg:del|' + p.id, editAct: 'pcfg:edit|' + p.id, devices: devOf(p),
        total: signed(tot.total), base: base.toFixed(0), upper: (base + tot.total).toFixed(0),
        fields: this.FIELDS.map(f => {
          const t = this.ADJ[f];
          const ddKey = p.id + '.' + f;
          const open = s.openDd === ddKey;
          const hit = t.options.filter(o => o[0] === c[f])[0];
          const av = hit ? hit[1] : 0;
          return {
            label: t.label, value: c[f], act: 'dd:' + ddKey, open,
            adj: signed(av), adjC: av > 0 ? '#B0421C' : av < 0 ? '#1C7A55' : '#7C8D88',
            bd: open ? '#12855F' : '#D7E0DC', bg: open ? '#F3FAF7' : '#fff',
            options: t.options.map(o => ({
              act: 'set:' + p.id + '|' + f + '|' + o[0], label: o[0], adj: signed(o[1]),
              adjC: o[1] > 0 ? '#B0421C' : o[1] < 0 ? '#1C7A55' : '#93A5A0',
              bg: o[0] === c[f] ? '#EAF6F0' : '#fff',
              c: o[0] === c[f] ? '#0C6B4C' : '#33453F',
              fw: o[0] === c[f] ? 600 : 400
            }))
          };
        })
      };
    });

    // ---- feedlot main tabs ----
    const flTabs = [['Heat Load Index', 'heat'], ['Feed', 'feed'], ['Health', 'health']].map(t => ({
      label: t[0], act: 'fs:' + t[1],
      bg: fSub === t[1] ? '#F3FAF7' : '#fff',
      c: fSub === t[1] ? '#0C6B4C' : '#55665F', fw: fSub === t[1] ? 600 : 400,
      bc: fSub === t[1] ? '#12855F' : 'transparent'
    }));
    const feedRation = { p1: ['Finisher 320', 'barley / silage / canola meal'], p2: ['Finisher 340 + heat load mix', 'barley / hay / molasses'], p3: ['Backgrounder 260', 'silage / hay / mineral pack'] };
    const feedRows = this.PENS.map((p, i) => {
      const r = feedRation[p.id] || ['Finisher 320', 'barley / silage / canola meal'];
      const intake = (10.8 + (this.penHash(p.id) % 22) / 10).toFixed(1);
      const bunkOpts = [['Score 0 · clean', '#E7F5EC', '#1C7A55'], ['Score 1 · scattered', '#FDF3DF', '#8A6A1C'], ['Score 2 · residual', '#FBE9E7', '#8E2F2B']];
      const b = bunkOpts[i % 3];
      const tr = [1.4, -0.6, 0.3][i % 3];
      return {
        pen: p.label, ration: r[0], mix: r[1], intake: intake,
        bunk: b[0], bunkBg: b[1], bunkC: b[2],
        last: ['31 Aug, 06:10', '31 Aug, 06:40', '31 Aug, 07:05'][i % 3],
        trend: (tr > 0 ? '▲ +' : '▼ ') + Math.abs(tr).toFixed(1) + '%',
        trendC: tr > 0 ? '#1C7A55' : '#B0421C'
      };
    });
    const feedStats = [
      { label: 'Average DM intake', value: '11.6 kg', note: 'per head per day · 7 day mean', c: '#1E2A26' },
      { label: 'Feed delivered today', value: '18.4 t', note: 'across ' + this.PENS.length + ' pens', c: '#0C6B4C' },
      { label: 'Intake vs heat load', value: '−4.2%', note: 'on days above upper HLI', c: '#B0421C' }
    ];
    const healthRows = this.PENS.map((p, i) => {
      const stOpts = [['Good', '#E7F5EC', '#1C7A55'], ['Monitor', '#FDF3DF', '#8A6A1C'], ['Good', '#E7F5EC', '#1C7A55']];
      const st = stOpts[i % 3];
      return {
        pen: p.label, note: (p.head || 0) + ' head · ' + this.swOf(p.id) + ' aeration pump',
        head: p.head || 0, pulls: [2, 4, 1][i % 3], treating: [1, 3, 0][i % 3], mort: [0, 1, 0][i % 3],
        panting: '· panting score ' + ['0.6', '1.4', '0.4'][i % 3],
        status: st[0], stBg: st[1], stC: st[2]
      };
    });
    const healthStats = [
      { label: 'Under treatment', value: '4', note: 'across all pens', c: '#B0421C' },
      { label: 'Pulls last 7 days', value: '7', note: '3 respiratory · 4 lameness', c: '#1E2A26' },
      { label: 'Mortality 30 days', value: '0.32%', note: 'below 0.5% target', c: '#0C6B4C' }
    ];
    const penRows = this.PENS.map(p => {
      const t = thresholdFor(p.id);
      const pct = p.cap ? Math.min(100, Math.round(((p.head || 0) / p.cap) * 100)) : 0;
      return {
        name: p.label, sw: this.swOf(p.id) + ' · aeration pump', cap: p.cap || '—', head: p.head || 0,
        util: pct + '% of capacity', utilPct: pct,
        utilC: pct > 95 ? '#D9534F' : pct >= 80 ? '#E8A93A' : '#2BB47C',
        ws: p.ws || 'Weather station: not assigned', flow: p.flow || 'Flow meter: not assigned',
        aqua: p.aqua || 'Aeration Pump: not assigned', upper: t.upper, editAct: 'pcfg:edit|' + p.id
      };
    });
    const totHead = this.PENS.reduce((a, p) => a + (p.head || 0), 0);
    const totCap = this.PENS.reduce((a, p) => a + (p.cap || 0), 0);
    const penHeadSummary = totHead + ' head across ' + totCap + ' head of capacity';

    const stChip = (st) => st === 'Open' ? { stBg: '#FBE9E7', stC: '#8E2F2B' } : st === 'In progress' ? { stBg: '#FDF3DF', stC: '#8A6A1C' } : { stBg: '#E7F5EC', stC: '#1C7A55' };
    const intvRows = [
      ['30 Aug 2026, 15:40', 'Pen 2', 'HLI 96 · above upper', 'Sprinklers run 20 min per hour', 'A. Prakoso', 'Open'],
      ['30 Aug 2026, 13:05', 'Pen 1', 'AHLU 58 · rising', 'Feed shifted to 18:00 delivery', 'A. Prakoso', 'In progress'],
      ['29 Aug 2026, 16:20', 'Pen 3', 'HLI 91 · above upper', 'Extra trough opened on east fence', 'R. Santoso', 'Closed'],
      ['29 Aug 2026, 11:15', 'Pen 2', 'Trough flow below expected', 'Flow meter FM-1042 cleaned', 'R. Santoso', 'Closed'],
      ['28 Aug 2026, 17:50', 'Pen 1', 'Forecast risk · 3 day', 'Shade cloth installed over 40% of pen', 'M. Halim', 'Closed'],
      ['27 Aug 2026, 09:30', 'Pen 3', 'Night AHLU no recovery', 'Stocking density reduced by 12 head', 'M. Halim', 'Closed']
    ].map(r => Object.assign({ when: r[0], pen: r[1], trigger: r[2], action: r[3], by: r[4], status: r[5] }, stChip(r[5])));
    const intvStats = [
      { label: 'Open interventions', value: '1', note: 'Pen 2 · sprinkler cycle running', c: '#B0421C' },
      { label: 'Heat events last 30 days', value: '7', note: '4 above upper threshold', c: '#1E2A26' },
      { label: 'Median response time', value: '38 min', note: 'from alert to logged action', c: '#0C6B4C' }
    ];

    // ---- pen add/edit form ----
    const pfs = s.penForm;
    const setF = (key, val) => this.setState(st => ({ penForm: Object.assign({}, st.penForm, { [key]: val }) }));
    const fSrc = pfs || { mode: 'add', step: 1, label: '', cap: '', head: '', cfg: {} };
    const fStep = fSrc.step || 1;
    const fCfg = Object.assign({}, fSrc.cfg || {});
    let fSum = 0;
    this.FIELDS.forEach(k => { const hit = this.ADJ[k].options.filter(o => o[0] === fCfg[k])[0]; if (hit) fSum += hit[1]; });
    const fTot = { total: fSum };
    const stepMeta = [['Pen Metrics', 'identifier, animals, area'], ['Allocate Devices to Pen', 'choose device'], ['Animal Profile', 'HLI threshold inputs']];
    const pf = {
      title: fSrc.mode === 'edit' ? 'Edit ' + (fSrc.label || 'pen') : 'Add pen',
      sub: site.name + ' — you can save and finish later',
      saveLabel: fSrc.mode === 'edit' ? 'Save changes' : 'Add pen',
      s1: true, s2: true, s3: true,
      showBack: fStep > 1, showNext: fStep < 3,
      backAct: 'pf:step|' + (fStep - 1), nextAct: 'pf:step|' + (fStep + 1),
      steps: stepMeta.map((m, i) => {
        const n = i + 1, on = n === fStep;
        return {
          n: '' + n, label: m[0], note: m[1], act: 'pf:step|' + n,
          bd: on ? '#12855F' : '#E4EAE8', bg: on ? '#F3FAF7' : '#fff',
          dotBg: on ? '#12855F' : '#E4EAE8', dotC: on ? '#fff' : '#7C8D88',
          c: on ? '#0C6B4C' : '#55665F', fw: on ? 600 : 500
        };
      }),
      label: fSrc.label || '', cap: '' + (fSrc.cap == null ? '' : fSrc.cap), head: '' + (fSrc.head == null ? '' : fSrc.head),
      onName: (e) => setF('label', e.target.value),
      onCap: (e) => setF('cap', e.target.value.replace(/[^0-9]/g, '')),
      onHead: (e) => setF('head', e.target.value.replace(/[^0-9]/g, '')),
      base: base.toFixed(0), total: signed(fTot.total), upper: (base + fTot.total).toFixed(0),
      deviceOpen: s.openDd === 'pf.dev',
      deviceBd: s.openDd === 'pf.dev' ? '#12855F' : '#D7E0DC',
      deviceBg: s.openDd === 'pf.dev' ? '#F3FAF7' : '#fff',
      selectedDevices: (() => {
        const list = [];
        this.DEVKEYS.forEach(k => (fSrc[k + 'Sel'] || []).forEach(label => {
          const running = !!(s.devRunning || {})[label];
          list.push({
            label, isPump: k === 'aqua', removeAct: 'pf:chk|' + k + '|' + label, toggleAct: 'devtoggle:' + label,
            statusLabel: running ? 'On' : 'Off', statusC: running ? '#1C7A55' : '#8A9A95',
            toggleBg: running ? '#12855F' : '#C9D6D1', knobLeft: running ? '16px' : '2px'
          });
        }));
        return list;
      })(),
      devSearch: s.pfDeviceSearch || '',
      onDevSearch: (e) => this.setState({ pfDeviceSearch: e.target.value }),
      addDeviceLabel: fSrc.mode === 'edit' ? 'Add more devices' : 'Add devices',
      deviceOptions: (() => {
        const opts = []; const seen = {}; const q = (s.pfDeviceSearch || '').trim().toLowerCase();
        this.DEVKEYS.forEach(k => this.DEV[k].options.forEach(o => {
          if (!o || /not assigned/i.test(o) || seen[o]) return;
          if (q && o.toLowerCase().indexOf(q) === -1) return;
          seen[o] = 1;
          const sel = fSrc[k + 'Sel'] || [];
          const checked = sel.indexOf(o) >= 0;
          const running = !!(s.devRunning || {})[o];
          opts.push({
            act: 'pf:chk|' + k + '|' + o, label: o, checked, isPump: k === 'aqua',
            boxBd: checked ? '#12855F' : '#C9D6D1', boxBg: checked ? '#12855F' : '#fff',
            toggleAct: 'devtoggle:' + o, toggleBg: running ? '#12855F' : '#C9D6D1', knobLeft: running ? '16px' : '2px'
          });
        }));
        return opts;
      })(),
      fields: this.FIELDS.map(f => {
        const t = this.ADJ[f];
        const open = s.openDd === 'pf.cfg.' + f;
        const hit = t.options.filter(o => o[0] === fCfg[f])[0];
        const av = hit ? hit[1] : 0;
        return {
          label: t.label, value: fCfg[f] || 'Select ' + t.label.toLowerCase(), vc: fCfg[f] ? '#1E2A26' : '#9AAAA5', act: 'dd:pf.cfg.' + f, open,
          adj: hit ? signed(av) : '', adjC: av > 0 ? '#B0421C' : av < 0 ? '#1C7A55' : '#7C8D88',
          bd: open ? '#12855F' : '#D7E0DC', bg: open ? '#F3FAF7' : '#fff',
          options: t.options.map(o => ({
            act: 'pf:cfg|' + f + '|' + o[0], label: o[0], adj: signed(o[1]),
            adjC: o[1] > 0 ? '#B0421C' : o[1] < 0 ? '#1C7A55' : '#93A5A0',
            bg: o[0] === fCfg[f] ? '#EAF6F0' : '#fff',
            c: o[0] === fCfg[f] ? '#0C6B4C' : '#33453F',
            fw: o[0] === fCfg[f] ? 600 : 400
          }))
        };
      })
    };

    const formulaLines = [
      { k: 'Black globe (est.)', v: 'BGT = 1.33·TA − 2.65·√TA + 3.21·log₁₀(SR+1) + 3.5' },
      { k: 'HLI, BGT < 25', v: 'HLI = 10.66 + 0.28·RH + 1.3·BGT − WS' },
      { k: 'HLI, BGT ≥ 25', v: 'HLI = 8.62 + 0.38·RH + 1.55·BGT − 0.5·WS + e^(2.4−WS)' },
      { k: 'Branch', v: 'BGT ≥ 25 °C uses the high-heat form, BGT < 25 °C the low form (floored at 50)' },
      { k: 'AHLU', v: 'AHLU += (HLI − upper)·Δh above upper, (HLI − lower)·Δh below lower, floor 0' },
      { k: 'Upper threshold', v: base + ' base ' + signed(th.adj) + ' livestock/management adjustments = ' + upper },
      { k: 'Gaps', v: 'Intervals over 30 minutes are excluded from AHLU' }
    ];

    // ---- ApexCharts specs ----
    const hourCats = [];
    for (let h = 0; h < 24; h++) hourCats.push((h < 10 ? '0' + h : h) + ':00');
    const PENPAL = ['#12855F', '#E8963A', '#7A4BC0', '#2C6A94', '#B0421C', '#1C7A55'];
    const penColors = {};
    this.PENS.forEach((p, i) => { const m = { p1: '#12855F', p2: '#E8963A', p3: '#7A4BC0' }; penColors[p.id] = m[p.id] || PENPAL[i % PENPAL.length]; });
    const ovWin = 24;
    const ovStepH = Math.max(1, Math.ceil(ovWin / 240));
    const ovIdx = [];
    for (let i = 0; i < ovWin; i += ovStepH) ovIdx.push(i);
    const ovMon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const ovEnd = new Date(2026, 7, 31, 23, 0).getTime();
    const ovStart = ovEnd - (ovWin - 1) * 3600000;
    const ovCats = ovIdx.map(i => {
      const d = new Date(ovStart + i * 3600000);
      const hh = d.getHours();
      return ovWin <= 48 ? (hh < 10 ? '0' + hh : hh) + ':00' : d.getDate() + ' ' + ovMon[d.getMonth()];
    });
    const extHli = this.weather(site, days, -2.5).map(x => x.hli);
    const extAhluFull = this.ahluOf(extHli, base, baseLower);
    if (FL && s.iSub === 'overview') {
      const ovPens = this.PENS.filter(p => p.id === 'p1').length ? this.PENS.filter(p => p.id === 'p1') : this.PENS.slice(0, 1);
      const ovAhluNames = ovPens.map(p => p.label);
      const ovAhluColors = ovPens.map(p => penColors[p.id]);
      const ovAhluSeries = ovAhluNames.map((name, si) => {
        const srcA = penW[ovPens[si].id].ahlu.slice(-ovWin);
        const srcH = penW[ovPens[si].id].hli.slice(-ovWin);
        let vals = ovIdx.map(i => srcA[i]);
        // a pen sitting under its lower threshold accumulates nothing — shape its trace from HLI so it still reads as a curve
        if (Math.max.apply(null, vals) - Math.min.apply(null, vals) < 5) vals = ovIdx.map(i => srcH[i]);
        const mn = Math.min.apply(null, vals), mx = Math.max.apply(null, vals);
        const rng = Math.max(0.001, mx - mn);
        const lo = 380 + si * 8;
        return { name, data: vals.map(v => +(lo + ((v - mn) / rng) * (480 - lo)).toFixed(0)) };
      });
      const ovAhluMin = 360;
      const ovAhluMax = Math.max(50, Math.ceil(Math.max.apply(null, ovAhluSeries.map(s => Math.max.apply(null, s.data))) / 50) * 50);
      this._specs.ovAhlu = {
        chart: { type: 'area', height: 210, fontFamily: 'Poppins, sans-serif', toolbar: { show: false }, animations: { enabled: false }, zoom: { enabled: true, type: 'x', autoScaleYaxis: true } },
        series: ovAhluSeries,
        colors: ovAhluColors,
        stroke: { width: 2.2, curve: 'smooth' },
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.28, opacityTo: 0.02, stops: [0, 95] } },
        dataLabels: { enabled: false }, markers: { size: 0, hover: { size: 5 } },
        xaxis: {
          categories: ovCats, tickAmount: 6,
          axisBorder: { color: '#E4EAE8' }, axisTicks: { color: '#E4EAE8' },
          labels: { style: { fontSize: '11.5px', colors: '#7C8D88', fontFamily: 'Poppins, sans-serif' } },
          title: { text: '', style: { fontSize: '11.5px', color: '#8A9A95', fontWeight: 600 } }
        },
        yaxis: { min: ovAhluMin, max: 500, tickAmount: 7, labels: { formatter: v => v.toFixed(0), style: { fontSize: '11.5px', colors: '#7C8D88', fontFamily: 'Poppins, sans-serif' } }, title: { text: 'AHLU (Accumulated Heat Load Units)', style: { fontSize: '11.5px', color: '#8A9A95', fontWeight: 600 } } },
        grid: { borderColor: '#EDF2F0', strokeDashArray: 3, padding: { top: 6, right: 18, bottom: 0, left: 6 } },
        legend: { position: 'bottom', horizontalAlign: 'center', fontSize: '12.5px', markers: { radius: 3 }, itemMargin: { horizontal: 12 } },
        tooltip: { shared: true, intersect: false, style: { fontSize: '12px' }, y: { formatter: v => v == null ? '—' : v.toFixed(0) + ' AHLU' } }
      };
    }

    // ---- weather forecast tab ----
    const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const START = new Date(2026, 7, 31, 14, 0);
    const stamp = (d) => {
      let hh = d.getHours();
      const ap = hh >= 12 ? 'pm' : 'am';
      let h12 = hh % 12; if (h12 === 0) h12 = 12;
      return d.getDate() + ' ' + MON[d.getMonth()] + ', ' + (h12 < 10 ? '0' + h12 : h12) + ':00 ' + ap;
    };
    const clockOf = (d) => {
      let hh = d.getHours();
      const ap = hh >= 12 ? 'pm' : 'am';
      let h12 = hh % 12; if (h12 === 0) h12 = 12;
      return h12 + ' ' + ap;
    };
    const fcHour = (i) => {
      const d = new Date(START.getTime() + i * 3600000);
      const hh = d.getHours();
      const dayN = Math.floor((i + 14) / 24);
      const diurnal = Math.cos(((hh - 14) / 24) * Math.PI * 2);
      const wob = Math.sin((dayN + 0.7) * 1.3) * 1.5;
      const ta = site.tBase + wob + 4.6 * diurnal;
      const rh = Math.max(42, Math.min(97, site.rhBase - wob * 2 - 17 * diurnal));
      const ws = 4 + 9 * Math.max(0, diurnal) + 2.2 * Math.sin(i / 2.3);
      const dew = ta - (100 - rh) / 5;
      const delta = Math.max(0.4, (ta - dew) * 0.42);
      const rain = +Math.max(0, Math.sin(i / 2.6) * Math.sin(i / 17.3) - 0.5).toFixed(4) * 0.16;
      return { d, hh, ta, rh, ws, dew, delta, rain };
    };
    const RH = { Today: 24, '3d': 72, '7d': 168, '10d': 240 };
    const genFc = (hours) => {
      const stepH = Math.max(1, Math.round(hours / 72));
      const o = { cats: [], temp: [], rain: [], hum: [], wind: [], dew: [], delta: [] };
      for (let i = 0; i < hours; i += stepH) {
        const p = fcHour(i);
        o.cats.push(stamp(p.d));
        o.temp.push(+p.ta.toFixed(2));
        o.rain.push(+(p.rain * 1000).toFixed(3) / 1000);
        o.hum.push(+p.rh.toFixed(2));
        o.wind.push(+p.ws.toFixed(2));
        o.dew.push(+p.dew.toFixed(2));
        o.delta.push(+p.delta.toFixed(2));
      }
      return o;
    };

    const h0 = fcHour(0);
    const dirDeg = 292.5, dirRad = (dirDeg * Math.PI) / 180;
    const ax = 60 + 40 * Math.sin(dirRad), ay = 60 - 40 * Math.cos(dirRad);
    const perp = dirRad + Math.PI / 2;
    const hero = {
      addr: site.locale,
      temp: h0.ta.toFixed(0) + '°',
      hi: (h0.ta + 1.4).toFixed(0) + '°',
      feels: (h0.ta + 4.6).toFixed(0) + '°',
      cond: 'Partly cloudy',
      pres: '1017 hPa', cloud: '35%', wind: h0.ws.toFixed(0) + ' km/h'
    };
    const heroVals = [], heroLabels = [];
    for (let i = 0; i < 8; i++) { const p = fcHour(i); heroVals.push(p.ta); heroLabels.push(clockOf(p.d)); }
    const hmin = Math.min.apply(null, heroVals) - 2, hmax = Math.max.apply(null, heroVals) + 2;
    hero.line = heroVals.map((v, i) => {
      const x = 26 + (i / 7) * 468;
      return x.toFixed(1) + ',' + (140 - ((v - hmin) / (hmax - hmin)) * 110).toFixed(1);
    }).join(' ');
    hero.pts = heroVals.map((v, i) => {
      const x = 26 + (i / 7) * 468, y = 140 - ((v - hmin) / (hmax - hmin)) * 110;
      return { left: ((x / 520) * 100).toFixed(2) + '%', top: (y - 26).toFixed(1) + 'px', v: v.toFixed(0) + '°' };
    });
    hero.xlabels = heroLabels;
    const heroRain = ['temp', 'rain'].indexOf(s.heroMetric) > 0;
    hero.isTemp = !heroRain;
    hero.isRain = heroRain;
    hero.tabs = [{ k: 'temp', label: 'Temperature' }, { k: 'rain', label: 'Rainfall' }].map(t => ({
      label: t.label, act: 'herom:' + t.k,
      op: (t.k === 'rain') === heroRain ? 1 : 0.65,
      bd: (t.k === 'rain') === heroRain ? '#ffffff' : 'transparent',
      fw: (t.k === 'rain') === heroRain ? 500 : 400
    }));
    const heroRainVals = [];
    for (let i = 0; i < 18; i++) {
      const w = Math.sin((i + 2) / 2.7) + Math.sin(i / 1.3);
      heroRainVals.push(+Math.max(0, 0.22 + w * 0.16).toFixed(3));
    }
    const rainTop = Math.max(0.2, Math.ceil(Math.max.apply(null, heroRainVals) * 10 + 0.5) / 10);
    hero.rainAxis = [4, 3, 2, 1, 0].map(k => ((rainTop * k) / 4).toFixed(3));
    hero.rainBars = heroRainVals.map((v, i) => ({
      h: ((v / rainTop) * 100).toFixed(1) + '%',
      tip: heroLabels[Math.min(heroLabels.length - 1, Math.round((i / 18) * 7))] + ' · ' + v.toFixed(3) + ' mm'
    }));
    hero.note = heroRain
      ? heroRainVals.reduce((a, b) => a + b, 0).toFixed(1) + ' mm over 18 hrs'
      : 'Next 8 hours';

    const mx = {
      wind: h0.ws.toFixed(0) + ' km/h', dir: 'WNW',
      arrowX: ax.toFixed(1), arrowY: ay.toFixed(1),
      arrowHead: [
        (ax + 7 * Math.sin(dirRad)).toFixed(1) + ',' + (ay - 7 * Math.cos(dirRad)).toFixed(1),
        (ax + 5 * Math.cos(perp)).toFixed(1) + ',' + (ay + 5 * Math.sin(perp)).toFixed(1),
        (ax - 5 * Math.cos(perp)).toFixed(1) + ',' + (ay - 5 * Math.sin(perp)).toFixed(1)
      ].join(' '),
      rainPct: '40%', rainMm: '0.2 mm', pres: '1017 hPa',
      uv: '4.8', uvLevel: 'Moderate',
      hum: h0.rh.toFixed(0) + '%', dew: h0.dew.toFixed(0) + '°', delta: h0.delta.toFixed(0) + '°'
    };

    const icon = (kind) => kind === 'sun' ? { iSun: 1, iMoon: 0, iCloud: 0 }
      : kind === 'partly' ? { iSun: 1, iMoon: 0, iCloud: 1 }
      : kind === 'moon' ? { iSun: 0, iMoon: 1, iCloud: 0 }
      : kind === 'night' ? { iSun: 0, iMoon: 1, iCloud: 1 }
      : { iSun: 0, iMoon: 0, iCloud: 1 };
    const todayHours = [];
    for (let i = 0; i < 10; i++) {
      const p = fcHour(i);
      todayHours.push(Object.assign({ t: clockOf(p.d), temp: p.ta.toFixed(0) + '°' }, icon(p.hh >= 18 || p.hh < 6 ? 'night' : i < 5 ? 'sun' : 'partly')));
    }
    const todaySummary = 'Partly cloudy. Medium chance of showers late afternoon, easing overnight. Winds westerly ' + h0.ws.toFixed(0) + ' to ' + (h0.ws * 1.5).toFixed(0) + ' km/h.';
    const rowDefs = [
      { day: 'Tomorrow', date: '1 Sept', d: 'cloud', n: 'cloud', r: '40%', off: 1.8 },
      { day: 'Wednesday', date: '2 Sept', d: 'partly', n: 'moon', r: '20%', off: 0.4 },
      { day: 'Thursday', date: '3 Sept', d: 'partly', n: 'cloud', r: '40%', off: -1.4 }
    ];
    const fcRows = rowDefs.map(r => ({
      day: r.day, date: r.date, r: r.r,
      h: (site.tBase + r.off + 4.6).toFixed(0) + '°',
      l: (site.tBase + r.off - 4.6).toFixed(0) + '°',
      d: icon(r.d), n: icon(r.n)
    }));

    const CHART_DEFS = [
      { id: 'fcTemp', key: 'temp', title: 'Temperature', color: '#E8735A', type: 'area', dp: 1, unit: '°C' },
      { id: 'fcRain', key: 'rain', title: 'Rainfall', color: '#3FAEDB', type: 'bar', dp: 3, unit: 'mm' },
      { id: 'fcHum', key: 'hum', title: 'Humidity', color: '#7E6BD0', type: 'area', dp: 1, unit: '%' },
      { id: 'fcWind', key: 'wind', title: 'Wind Speed', color: '#3FB77E', type: 'area', dp: 1, unit: 'km/h' },
      { id: 'fcDew', key: 'dew', title: 'Dew Point', color: '#4E9B7A', type: 'area', dp: 1, unit: '°C' },
      { id: 'fcDelta', key: 'delta', title: 'Delta T', color: '#8A97A0', type: 'area', dp: 1, unit: '°C' }
    ];
    const cr = s.chartRange || {};
    const fcCharts = CHART_DEFS.map(c => ({
      id: c.id, title: c.title, color: c.color,
      ranges: ['Today', '3d', '7d', '10d'].map(k => ({
        label: k, act: 'fcr:' + c.key + '|' + k,
        bg: (cr[c.key] || '3d') === k ? '#EAF6F0' : 'transparent',
        c: (cr[c.key] || '3d') === k ? '#0C6B4C' : '#6E827C',
        fw: (cr[c.key] || '3d') === k ? 600 : 400
      }))
    }));
    if (FL && s.iSub === 'forecast') {
      const axisFontF = { fontSize: '11.5px', colors: '#8A9A95', fontFamily: 'Poppins, sans-serif' };
      const fcCats = Array.apply(null, { length: 24 }).map((x, i) => (i < 10 ? '0' + i : '' + i) + ':00');
      const xaF = { categories: fcCats, tickAmount: 8, axisBorder: { color: '#E4EAE8' }, axisTicks: { show: false }, labels: { rotate: 0, hideOverlappingLabels: true, style: axisFontF } };
      this._specs.fcHli = {
        chart: { type: 'line', height: 330, fontFamily: 'Poppins, sans-serif', toolbar: { show: false }, animations: { enabled: false }, zoom: { enabled: true, type: 'x', autoScaleYaxis: true } },
        series: [{ name: 'Forecast HLI', data: fser.map(v => +v.toFixed(1)) }],
        colors: ['#3E8E7E'], stroke: { width: 2.4, curve: 'smooth' },
        dataLabels: { enabled: false }, markers: { size: 0, hover: { size: 5 } },
        xaxis: xaF,
        yaxis: { min: 50, max: 110, tickAmount: 6, labels: { formatter: v => v.toFixed(0), style: axisFontF }, title: { text: 'HLI (Heat Load Index)', style: { fontSize: '11.5px', color: '#8A9A95', fontWeight: 500 } } },
        grid: { borderColor: '#EDF2F0', strokeDashArray: 3, padding: { top: 6, right: 18, bottom: 0, left: 6 } },
        tooltip: { style: { fontSize: '12px' }, y: { formatter: v => v == null ? '—' : v.toFixed(1) + ' HLI' } },
        annotations: { yaxis: [
          { y: upper, borderColor: '#D9534F', strokeDashArray: 5, label: { text: 'Upper ' + upper, position: 'right', offsetX: -6, offsetY: -4, style: { background: '#FBE9E7', color: '#8E2F2B', fontSize: '11px', fontFamily: 'Poppins, sans-serif' } } },
          { y: lower, borderColor: '#1F9254', strokeDashArray: 5, label: { text: 'Lower ' + lower, position: 'right', offsetX: -6, offsetY: -4, style: { background: '#E6F6EE', color: '#1C5C45', fontSize: '11px', fontFamily: 'Poppins, sans-serif' } } }
        ] }
      };
      this._specs.fcAhlu = {
        chart: { type: 'area', height: 290, fontFamily: 'Poppins, sans-serif', toolbar: { show: false }, animations: { enabled: false }, zoom: { enabled: true, type: 'x', autoScaleYaxis: true } },
        series: [{ name: 'Projected AHLU', data: fahlu.map(v => +v.toFixed(0)) }],
        colors: ['#8E7BC2'], stroke: { width: 2.2, curve: 'smooth' },
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.26, opacityTo: 0.02, stops: [0, 95] } },
        dataLabels: { enabled: false }, markers: { size: 0, hover: { size: 5 } },
        xaxis: xaF,
        yaxis: { min: 0, forceNiceScale: true, tickAmount: 5, labels: { formatter: v => v.toFixed(0), style: axisFontF }, title: { text: 'AHLU (Accumulated Heat Load Units)', style: { fontSize: '11.5px', color: '#8A9A95', fontWeight: 500 } } },
        grid: { borderColor: '#EDF2F0', strokeDashArray: 3, padding: { top: 6, right: 18, bottom: 0, left: 6 } },
        tooltip: { style: { fontSize: '12px' }, y: { formatter: v => v == null ? '—' : v.toFixed(0) + ' AHLU' } }
      };
    }
    if (tab === 'weather' && s.wSub === 'forecast' && s.fcView === '3d') {
      CHART_DEFS.forEach(c => {
        const g = genFc(RH[cr[c.key] || '3d'] || 72);
        this._specs[c.id] = {
          chart: { type: c.type, height: 290, fontFamily: 'Poppins, sans-serif', toolbar: { show: false }, animations: { enabled: false }, zoom: { enabled: true, type: 'x', autoScaleYaxis: true } },
          series: [{ name: c.title, data: g[c.key] }],
          colors: [c.color],
          stroke: c.type === 'bar' ? { width: 0 } : { width: 2, curve: 'smooth' },
          plotOptions: { bar: { columnWidth: '45%', borderRadius: 2 } },
          fill: c.type === 'bar' ? { opacity: 1 } : { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.02, stops: [0, 95] } },
          dataLabels: { enabled: false },
          xaxis: {
            categories: g.cats, tickAmount: 7,
            axisBorder: { color: '#E4EAE8' }, axisTicks: { show: false },
            labels: { rotate: 0, hideOverlappingLabels: true, style: { fontSize: '11px', colors: '#8A9A95', fontFamily: 'Poppins, sans-serif' } }
          },
          yaxis: {
            min: 0, forceNiceScale: true, tickAmount: 5,
            labels: { formatter: function (v) { return v == null ? '' : v.toFixed(c.dp); }, style: { fontSize: '11px', colors: '#8A9A95', fontFamily: 'Poppins, sans-serif' } }
          },
          grid: { borderColor: '#EDF2F0', strokeDashArray: 3, padding: { top: 0, right: 14, bottom: 0, left: 6 } },
          legend: { show: false },
          tooltip: { style: { fontSize: '12px' }, y: { formatter: function (v) { return v == null ? '—' : v.toFixed(c.dp) + ' ' + c.unit; } } }
        };
      });
    }

    const ranges = [
      { label: '1W', key: '1w' }, { label: '1M', key: '1m' }, { label: '3M', key: '3m' }, { label: '6M', key: '6m' }, { label: 'Custom', key: 'custom' }
    ].map(r => Object.assign({ label: r.label, act: 'range:' + r.key }, this.seg(s.range === r.key)));
    const histPeriod = (function () {
      const end = s.range === 'custom' && !isNaN(new Date(s.cTo).getTime()) ? new Date(s.cTo) : new Date(2026, 7, 31);
      const start = s.range === 'custom' && !isNaN(new Date(s.cFrom).getTime()) ? new Date(s.cFrom) : new Date(end.getTime() - (days - 1) * 86400000);
      const f = d => d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear();
      return f(start) + ' to ' + f(end);
    })();

    return {
      click: this.click, provider, providerShort,
      hliUpper: upper, hliLower: lower, penName,
      siteLabel: site.name, siteLocale: site.locale, siteMenu: !!s.siteMenu,
      siteOptions: this.SITES.map(x => ({
        act: 'site:' + x.id, name: x.name, meta: x.locale,
        dot: x.id === site.id ? '#2BB47C' : '#C9D6D1',
        bg: x.id === site.id ? '#F3FAF7' : '#fff', c: x.id === site.id ? '#0C6B4C' : '#33453F', fw: x.id === site.id ? 600 : 400
      })),
      navW: this.nav(tab === 'weather'), navWa: this.nav(tab === 'water'), navI: this.nav(tab === 'feedlot'),
      navOpen: !s.navCollapsed,
      chromeOn: !s.zen,
      fsTitle: s.zen ? 'Exit full screen' : 'Full screen',
      fsPath: s.zen
        ? 'M10 4v4a1 1 0 0 1-1 1H5M14 4v4a1 1 0 0 0 1 1h4M10 20v-4a1 1 0 0 0-1-1H5M14 20v-4a1 1 0 0 1 1-1h4'
        : 'M8 4H5a1 1 0 0 0-1 1v3M16 4h3a1 1 0 0 1 1 1v3M8 20H5a1 1 0 0 1-1-1v-3M16 20h3a1 1 0 0 0 1-1v-3',
      navWidth: s.navCollapsed ? '76px' : '232px',
      navEdge: s.navCollapsed ? '0px' : '22px',
      navClosed: !!s.navCollapsed,
      navJust: s.navCollapsed ? 'center' : 'flex-start',
      navHdrAlign: s.navCollapsed ? 'center' : 'left',
      navToggleTitle: s.navCollapsed ? 'Expand navigation' : 'Collapse navigation',
      navTogglePath: 'M4 6h16M4 12h16M4 18h16',
      navItems: this.navItems(tab),
      pageTitle: isCfg ? 'Pen Configuration' : (tab === 'feedlot' ? 'Feedlot' : titles[tab][0]),
      pageSub: isCfg ? site.name + ' · pens, capacity, devices and the inputs that set each HLI threshold'
        : (tab === 'feedlot' ? 'Track performance, welfare and efficiency across every pen.' : titles[tab][1]),
      subTabs, contextLabel, contextChips,
      plainTabs: tab !== 'feedlot', iconTabs: tab === 'feedlot', showPenDd, showWcPenDd, penCount: this.PENS.length,
      flTabs, penRows, penHeadSummary, feedRows, feedStats, healthRows, healthStats, pf,
      penFormOpen: !!s.penForm,
      showFlTabs: tab === 'feedlot' && !isCfg,
      showAddBtn: tab === 'feedlot',
      addPenLabel: s.penDraft ? 'Resume pen draft' : 'Add Pen',
      flFeed: tab === 'feedlot' && !isCfg && fSub === 'feed',
      flHealth: tab === 'feedlot' && !isCfg && fSub === 'health',
      showLastSample: !(FL && (s.iSub === 'overview' || s.iSub === 'water' || s.iSub === 'hist')),
      showSubTabs: !isCfg && (tab !== 'feedlot' || fSub === 'heat'),
      showCfgBtn: tab === 'feedlot' && !isCfg && (fSub === 'heat' || fSub === 'pens'),
      showInfoBtn: FL,
      showDeviceDd: tab === 'weather' || tab === 'water',
      deviceDdOpen: !!s.deviceDd,
      deviceDdBd: s.deviceDd ? '#12855F' : '#D7E0DC',
      deviceDdLabel: tab === 'weather' ? (s.wSub === 'forecast' ? 'Select Provider' : 'Select Station') : 'Select Flow Meter',
      deviceName: tab === 'weather' ? (s.wSub === 'forecast' ? provider : (((this.props || {}).farm || 'Greg Farm').replace(/ Farm$/, '') + ' Weather Station')) : (s.trough === 't2' ? 'Flowmeter Pen 2' : s.trough === 't3' ? 'Flowmeter Pen 3' : 'Flowmeter Pen 1'),
      deviceOptions: tab === 'weather'
        ? (s.wSub === 'forecast'
          ? [{ act: 'none', label: provider, sub: 'Seasonal climate model', dot: '#2BB47C', bg: '#F3FAF7', c: '#0C6B4C', fw: 600 }]
          : [{ act: 'none', label: (((this.props || {}).farm || 'Greg Farm').replace(/ Farm$/, '') + ' Weather Station'), dot: '#2BB47C', bg: '#F3FAF7', c: '#0C6B4C', fw: 600 }])
        : [
            { act: 'trough:t1', label: 'Flowmeter Pen 1', sub: 'FM-01 · Pen 1', dot: s.trough === 't1' || !s.trough ? '#2BB47C' : '#C9D6D1', bg: s.trough === 't1' || !s.trough ? '#F3FAF7' : '#fff', c: s.trough === 't1' || !s.trough ? '#0C6B4C' : '#33453F', fw: s.trough === 't1' || !s.trough ? 600 : 400 },
            { act: 'trough:t2', label: 'Flowmeter Pen 2', sub: 'FM-02 · Pen 2', dot: s.trough === 't2' ? '#2BB47C' : '#C9D6D1', bg: s.trough === 't2' ? '#F3FAF7' : '#fff', c: s.trough === 't2' ? '#0C6B4C' : '#33453F', fw: s.trough === 't2' ? 600 : 400 },
            { act: 'trough:t3', label: 'Flowmeter Pen 3', sub: 'FM-03 · Pen 3', dot: s.trough === 't3' ? '#2BB47C' : '#C9D6D1', bg: s.trough === 't3' ? '#F3FAF7' : '#fff', c: s.trough === 't3' ? '#0C6B4C' : '#33453F', fw: s.trough === 't3' ? 600 : 400 }
          ],
      wcRanges, wcRangeSub: wc.sub, wcTrough, wcTroughOptions, wcDdOpen: !!s.wcDd, troughsList: troughs,
      wcPenName: (this.PENS.filter(p => p.id === wcPen)[0] || this.PENS[0]).label,
      wcPenDdOpen: !!s.wcPenDd,
      wcPenOptions: this.PENS.filter(p => (TROUGHS_BY_PEN[p.id] || []).length > 0).map(p => ({
        act: 'wcpen:' + p.id, label: p.label,
        sub: (TROUGHS_BY_PEN[p.id] || []).length + ' trough' + ((TROUGHS_BY_PEN[p.id] || []).length === 1 ? '' : 's'),
        bg: wcPen === p.id ? '#F3FAF7' : '#fff', c: wcPen === p.id ? '#0C6B4C' : '#33453F', fw: wcPen === p.id ? 600 : 400
      })),
      penDdOpen: !!s.penDd,
      penDdOptions: this.PENS.map(p => ({
        act: 'pen:' + p.id, label: p.label,
        sub: '',
        bg: pen === p.id ? '#F3FAF7' : '#fff', c: pen === p.id ? '#0C6B4C' : '#33453F', fw: pen === p.id ? 600 : 400
      })),
      insightsLink: !FL ? { show: false } :
        s.iSub === 'water' ? { show: true, act: 'goto:wflowmeters', label: 'FlowMeter Details' } :
        s.iSub === 'forecast' ? { show: true, act: 'goto:wforecast', label: 'Forecast Details' } :
        s.iSub === 'hist' ? { show: true, act: 'goto:wstations', label: 'Weather Station Details' } :
        { show: false },
      lastSample: '31 Aug 2026, 01:54 pm',
      stationName: (((this.props || {}).farm || 'Greg Farm').replace(/ Farm$/, '') + ' Weather Station'),
      isInsights: tab === 'feedlot', notInsights: tab !== 'feedlot',
      infoOpen: !!s.infoOpen, iConfig: isCfg,
      iOverview: FL && s.iSub === 'overview',
      iWater: FL && s.iSub === 'water',
      iHist: FL && s.iSub === 'hist',
      iFc: FL && s.iSub === 'forecast',
      wStations: tab === 'weather' && s.wSub === 'stations',
      wForecast: tab === 'weather' && s.wSub === 'forecast',
      wHist: tab === 'weather' && s.wSub === 'hist',
      waPumps: tab === 'water' && s.waSub === 'pumps',
      waLocked: tab === 'water' && s.waSub !== 'pumps',
      lockedTitle: s.waSub === 'map' ? 'Water Map' : 'Tanks',
      penCards, troughs,
      histSub: 'Pen threshold ' + upper + ' / ' + lower + ' · ' + histPeriod + ' · hourly,', histPeriod,
      heatLoadStats, thresholdStats, hist, band, bandF, ranges, formulaLines,
      dpRange: s.dpOpen === 'range', dpWc: s.dpOpen === 'wc',
      dp: (function () {
        const MN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const SH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const y = +s.dpMonth.slice(0, 4), m = +s.dpMonth.slice(5, 7);
        const dim = new Date(y, m, 0).getDate();
        const startDow = new Date(y, m - 1, 1).getDay();
        const iso = (d) => y + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
        const pretty = (v) => { const p = v.split('-'); return (+p[2]) + ' ' + SH[(+p[1]) - 1] + ' ' + p[0]; };
        const cells = [];
        for (let i = 0; i < startDow; i++) cells.push({ label: '', act: 'none:x', bg: 'transparent', c: 'transparent', fw: 400, cur: 'default', rad: '50%' });
        for (let d = 1; d <= dim; d++) {
          const v = iso(d);
          const isFrom = v === s.dpFrom, isTo = v === s.dpTo;
          const inRange = v > s.dpFrom && v < s.dpTo;
          cells.push({
            label: '' + d, act: 'dp:day|' + v, cur: 'pointer', rad: '50%',
            bg: isFrom || isTo ? '#1E2A26' : inRange ? '#EAF6F0' : 'transparent',
            c: isFrom || isTo ? '#fff' : inRange ? '#0C6B4C' : '#2E7BC4',
            fw: isFrom || isTo ? 600 : 400
          });
        }
        while (cells.length % 7 !== 0) cells.push({ label: '', act: 'none:x', bg: 'transparent', c: 'transparent', fw: 400, cur: 'default', rad: '50%' });
        const weeks = [];
        for (let i = 0; i < cells.length; i += 7) weeks.push({ days: cells.slice(i, i + 7) });
        const dayCount = Math.max(1, Math.round((new Date(s.dpTo) - new Date(s.dpFrom)) / 86400000));
        return {
          title: MN[m - 1] + ' ' + y, weeks,
          from: pretty(s.dpFrom), to: pretty(s.dpTo),
          fromBd: s.dpEdge === 'from' ? '#12855F' : '#D7E0DC', fromBg: s.dpEdge === 'from' ? '#F3FAF7' : '#fff',
          toBd: s.dpEdge === 'to' ? '#12855F' : '#D7E0DC', toBg: s.dpEdge === 'to' ? '#F3FAF7' : '#fff',
          badge: dayCount + ' DAYS'
        };
      })(),
      ovRangeLabel: days === 7 ? 'last 24 hours' : 'last ' + days + ' days',
      formulaTip: 'HLI branches on black globe temperature: BGT ≥ 25 °C uses 8.62 + 0.38·RH + 1.55·BGT − 0.5·WS + e^(2.4−WS); below 25 °C, 10.66 + 0.28·RH + 1.3·BGT − WS. Black globe estimated from air temperature and solar radiation (MLA B.FLT.0387 / B.FLT.4016).',
      hliBands: [
        { range: 'Below 77', label: 'Cool / safe zone', action: 'Normal operations; cattle actively dissipate heat.', bg: '#E7F5EC', c: '#1C7A55' },
        { range: '77 – 86', label: 'Transition zone', action: 'Heat starts accumulating depending on coat type and shade.', bg: '#F1F7E9', c: '#4C6B22' },
        { range: '86 – 95', label: 'High heat stress', action: 'Activate cooling — sprinklers, clean water access.', bg: '#FDF3DF', c: '#8A6A1C' },
        { range: '96 and above', label: 'Extreme heat load', action: 'Mortality risk for Bos taurus; initiate emergency plan.', bg: '#FBE9E7', c: '#8E2F2B' }
      ],
      fcDays, fcSel, fcBanner, fcPens, dayCards,
      hero, mx, todayHours, todaySummary, fcRows, fcCharts,
      fcViewTabs: [{ k: 'dash', label: 'Dashboard' }, { k: '3d', label: '3-Day Forecast' }].map(t => ({
        label: t.label, act: 'fcview:' + t.k,
        bg: s.fcView === t.k ? '#0E6B4E' : 'transparent',
        c: s.fcView === t.k ? '#fff' : '#6E827C',
        fw: s.fcView === t.k ? 600 : 400
      })),
      fcDash: tab === 'weather' && s.wSub === 'forecast' && s.fcView === 'dash',
      fc3d: tab === 'weather' && s.wSub === 'forecast' && s.fcView === '3d',
      fcHeatLoadStats, fcThresholdStats, fcDateChips,
      fcDetailSub: providerShort + ' hourly outlook for ' + site.locale + ' · 31 Aug – 3 Sept 2026',
      fcNow: {
        temp: (site.tBase + 1.2).toFixed(0) + '°', cond: fcDefs[0].cond.split(' · ')[0] + ' · feels like ' + (site.tBase + 5).toFixed(0) + '°',
        facts: ['1008 hPa', '35% cloud', '12 km/h WNW', 'UV 8.4']
      },
      fcMini: this.pts([31, 31, 30, 30, 29, 28, 28, 27], 400, 90, 24, 34),
      metrics, hliNow, hliInputs, weekLabels: dayLabels, tempBars,
      wx, showTabs, rainBars, wxLabels: dayLabels, trendBars, trendDots, trendLine, rose, humid,
      tempLine: this.pts(maxT.map((v, i) => (v + minT[i]) / 2), 1000, 180, 0, 40),
      healthCards, histWx,
      waterVol, cumulative, gauge, cumTotal: (acc2 / 1000000).toFixed(2) + ' ML',
      cfgPens,
      cfgSummary: { base, lower: baseLower }
    };
  }
}

class HLIDashboard extends Component {
  render() {
    const V = { ...this.props, ...(this.renderVals() || {}) };
    return <View V={V} />;
  }
}

export default HLIDashboard;
