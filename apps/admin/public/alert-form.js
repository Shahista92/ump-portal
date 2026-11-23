// Shared "Create Device Alert" form logic for Producer, Admin and Internal portals.
(function () {
  const R = (k, l, now, u, live = true) => ({ k, l, now, u, live });
  const READ = {
    weather: [R('temperature', 'Temperature', '18.4', '°C'), R('humidity', 'Humidity', '58', '%'), R('rainfall', 'Rainfall', '0.6', 'mm'), R('wind_speed', 'Wind Speed', '7.4', 'km/h'), R('wind_gust', 'Wind Gust', '12.5', 'km/h'), R('solar_radiation', 'Solar Radiation', '853', 'W/m²'), R('delta_t', 'Delta T', '6.8', '°C'), R('dew_point', 'Dew Point', '10.9', '°C'), R('pressure', 'Atmospheric Pressure', '1013.7', 'hPa'), R('battery_voltage', 'Battery Voltage', '4.08', 'V'),
      R('uv_index', 'UV Index', '5', '', false), R('wind_direction', 'Wind Direction', '220', '°', false), R('evapotranspiration', 'Evapotranspiration', '3.2', 'mm', false), R('leaf_wetness', 'Leaf Wetness', '12', '%', false), R('rain_rate', 'Rain Rate', '0', 'mm/h', false), R('feels_like', 'Feels Like', '17.1', '°C', false), R('soil_moisture', 'Soil Moisture', '24', '%', false), R('soil_temperature', 'Soil Temperature', '15.2', '°C', false), R('signal_strength', 'Signal Strength', '-82', 'dBm', false)],
    soil: [R('moisture_10', 'Moisture 10 cm', '21.8', '%'), R('moisture_30', 'Moisture 30 cm', '26.9', '%'), R('moisture_60', 'Moisture 60 cm', '31.6', '%'), R('soil_temp_10', 'Soil Temperature 10 cm', '17.6', '°C'), R('soil_temp_30', 'Soil Temperature 30 cm', '16.1', '°C'), R('vic', 'VIC', '590', ''), R('battery_voltage', 'Battery Voltage', '4.08', 'V'),
      R('moisture_90', 'Moisture 90 cm', '33.2', '%', false), R('soil_temp_60', 'Soil Temperature 60 cm', '15.4', '°C', false), R('signal_strength', 'Signal Strength', '-88', 'dBm', false)],
    hli: [R('hli', 'Heat Load Index (HLI)', '84.2', ''), R('ahlu', 'Accumulated Heat Load (AHLU)', '12.5', ''), R('air_temperature', 'Air Temperature', '31.2', '°C'), R('humidity', 'Humidity', '46', '%')]
  };
  const OPS = ['rises above', 'reaches or exceeds', 'falls below', 'drops to or below', 'equals'], OPS_LOW = ['falls below', 'drops to or below'];
  const TYPE = { weather: ['Weather', 'M7 15.5h10.5a3.8 3.8 0 0 0 .4-7.6 5.6 5.6 0 0 0-10.8 1.3A3.2 3.2 0 0 0 7 15.5z'], soil: ['Soil', 'M12 20.5v-8.5M12 12c0-4.2 3-7.2 8-7.2 0 4.2-3 7.2-8 7.2zM12 10.2C12 6.6 9.4 4 5 4c0 3.6 2.6 6.2 7 6.2z'], hli: ['Heat load', 'M12 3s5 5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5 1-8.5z'] };
  const blank = (device) => ({ name: '', device: device == null ? '' : String(device), enabled: true, roles: ['Owner'], extra: '', via: ['Email', 'Mobile Notification'], freq: 'Every hour', priority: 'Medium', msg: '', msgEd: false, conds: [], addK: '', showAll: false });
  const tok = r => '%' + r.k + '%';
  const autoMsg = (dev, rd, conds) => { if (!dev || !conds.length) return ''; return dev.label + ': ' + conds.map(c => { const r = rd.find(x => x.k === c.k); if (!r) return ''; const u = r.u ? ' ' + r.u : ''; return r.l + '\n' + (c.op ? c.op + ' ' + (c.val || '\u2026') + u + ' ' : '') + '(now ' + tok(r) + u + ')'; }).join(';\n') + '.'; };
  // devs: [{ v, label, type: 'weather'|'soil'|'hli' }]; upd(partial) merges into na
  function vals(na, devs, upd) {
    const dev = devs.find(d => d.v === na.device) || null, type = dev ? (dev.type === 'weather' || dev.type === 'hli' ? dev.type : 'soil') : null;
    const all = type ? READ[type] : [], live = all.filter(r => r.live), shown = na.showAll ? all : live;
    const AL = { temp: type === 'hli' ? 'air_temperature' : 'temperature', hum: 'humidity', rain: 'rainfall', wind: 'wind_speed', gust: 'wind_gust', solar: 'solar_radiation', dt: 'delta_t', dew: 'dew_point', pres: 'pressure', uv: 'uv_index', batt: 'battery_voltage', m10: 'moisture_10', m30: 'moisture_30', m60: 'moisture_60', t10: 'soil_temp_10', t30: 'soil_temp_30' };
    const conds = (na.conds || []).map(c => all.some(r => r.k === c.k) ? c : { ...c, k: AL[c.k] || c.k });
    const updC = (i, o) => upd({ conds: conds.map((c, k) => k === i ? { ...c, ...o } : c) });
    const msg = na.msgEd ? na.msg : autoMsg(dev, all, conds);
    const units = Array.from(new Set(live.map(r => r.u).filter(u => u && u !== 'dBm')));
    const ins = t => () => upd({ msg: (msg ? msg + (/\s$/.test(msg) ? '' : ' ') : '') + t, msgEd: true });
    const condReads = conds.map(c => all.find(r => r.k === c.k)).filter(Boolean);
    const hasDev = !!dev, n = hasDev ? 1 : 0;
    return {
      hasDev, noDev: !hasDev, devOpts: devs, typeL: type ? TYPE[type][0] : '', typeIc: type ? TYPE[type][1] : '',
      nRec: String(2 + n), nSet: String(3 + n), condN: String(conds.length), hasConds: conds.length > 0, noConds: conds.length === 0,
      condOpts: shown.filter(r => !conds.some(c => c.k === r.k)).map(r => ({ v: r.k, label: r.l })), addK: na.addK || '', setAdd: e => upd({ addK: e.target.value }),
      addOn: !!na.addK, addBd: na.addK ? '#2F7A4F' : '#CBD5E1', addFg: na.addK ? '#2F7A4F' : '#94A3B8', addBg: na.addK ? '#F3FAF6' : '#fff', addCur: na.addK ? 'pointer' : 'default',
      addCond: () => { if (!na.addK) return; upd({ conds: conds.concat({ k: na.addK, op: '', val: '' }), addK: '' }); },
      readL: 'Showing the ' + live.length + ' readings this device is sending.', showAllOn: all.length > live.length, showAllL: na.showAll ? 'Show sending only' : 'Show all ' + all.length, toggleAll: () => upd({ showAll: !na.showAll }),
      conds: conds.map((c, i) => { const r = all.find(x => x.k === c.k) || all[0] || R('', '', '', ''); return { label: r.l, now: 'now ' + r.now + (r.u ? ' ' + r.u : ''), unit: r.u, op: c.op, val: c.val, ops: r.k === 'battery_voltage' ? OPS_LOW : OPS, setOp: e => updC(i, { op: e.target.value }), setVal: e => updC(i, { val: e.target.value }), remove: () => upd({ conds: conds.filter((_, k) => k !== i) }) }; }),
      inserts: (hasDev ? units.map(u => ({ label: u, go: ins(u), op: 1, cur: 'pointer' })) : []).concat([{ label: 'Device Name', go: hasDev ? ins(dev.label) : () => {}, op: hasDev ? 1 : .55, cur: hasDev ? 'pointer' : 'default' }]).concat(condReads.map(r => ({ label: r.l.replace(/\s+/g, '_').replace(/^(.)(.*)$/, (m, a, b) => a + b.toLowerCase()), go: ins(tok(r)), op: 1, cur: 'pointer' }))),
      msg, setMsg: e => upd({ msg: e.target.value, msgEd: true }), clearMsg: () => upd({ msg: '', msgEd: true }),
      setDevice: e => upd({ device: e.target.value, conds: [], addK: '', showAll: false, msgEd: false, msg: '' }),
      prBg: na.priority === 'High' || na.priority === 'Critical' ? '#FEF2F2' : na.priority === 'Low' ? '#F0FDF4' : '#FFFBEB', prFg: na.priority === 'High' || na.priority === 'Critical' ? '#B91C1C' : na.priority === 'Low' ? '#15803D' : '#B45309',
      ok: !!(na.name || '').trim() && hasDev
    };
  }
  window.UMPAlert = { blank, vals, READ };
})();
