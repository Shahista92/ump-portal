import React from 'react';
import View from './View.jsx';

class Component extends React.Component {
  state = { z: 15, ox: 0, oy: 0 };
  mapRef = React.createRef();
  ptrs = {};
  componentDidMount() { this._w = e => { e.preventDefault(); this.zoom(e.deltaY < 0 ? 1 : -1); }; this._el = this.mapRef.current; if (this._el) this._el.addEventListener('wheel', this._w, { passive: false }); }
  componentWillUnmount() { if (this._el) this._el.removeEventListener('wheel', this._w); }
  componentDidUpdate(pp) { const a = pp.info || {}, b = this.props.info || {}; if (a.key !== b.key) this.setState({ z: 15, ox: 0, oy: 0 }); }
  zoom(d) { const t = Date.now(); if (t - (this._zt || 0) < 120) return; this._zt = t; this.setState(s => { const z = Math.max(3, Math.min(19, s.z + d)); if (z === s.z) return null; const f = Math.pow(2, z - s.z); return { z, ox: s.ox * f, oy: s.oy * f }; }); }
  renderVals() {
    const info = this.props.info || {}, lat = info.lat ?? -31.90951, lon = info.lon ?? 115.81528, { z, ox, oy } = this.state, n = Math.pow(2, z);
    const xt = (lon + 180) / 360 * n, lr = lat * Math.PI / 180, yt = (1 - Math.log(Math.tan(lr) + 1 / Math.cos(lr)) / Math.PI) / 2 * n;
    const vx = xt - ox / 256, vy = yt - oy / 256, cx = Math.floor(vx), cy = Math.floor(vy), tiles = [];
    for (let dy = -2; dy <= 2; dy++) for (let dx = -3; dx <= 3; dx++) { const x = cx + dx, y = cy + dy; if (y < 0 || y >= n) continue; const wx = ((x % n) + n) % n;
      tiles.push({ bg: 'url(https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/' + z + '/' + y + '/' + wx + '), url(https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/' + z + '/' + y + '/' + wx + ')', left: 'calc(50% + ' + ((x - vx) * 256).toFixed(1) + 'px)', top: 'calc(50% + ' + ((y - vy) * 256).toFixed(1) + 'px)' }); }
    return {
      info, tiles, mapRef: this.mapRef,
      pinLeft: 'calc(50% + ' + ox.toFixed(1) + 'px)', pinTop: 'calc(50% + ' + oy.toFixed(1) + 'px)',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + lat.toFixed(6) + ',' + lon.toFixed(6),
      zoomIn: () => { this._zt = 0; this.zoom(1); }, zoomOut: () => { this._zt = 0; this.zoom(-1); }, stop: e => e.stopPropagation(),
      pDown: e => { this.ptrs[e.pointerId] = { x: e.clientX, y: e.clientY }; if (e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId); const k = Object.values(this.ptrs); if (k.length === 2) this._pd = Math.hypot(k[0].x - k[1].x, k[0].y - k[1].y); },
      pMove: e => { const p = this.ptrs[e.pointerId]; if (!p) return; const dx = e.clientX - p.x, dy = e.clientY - p.y; this.ptrs[e.pointerId] = { x: e.clientX, y: e.clientY }; const k = Object.values(this.ptrs);
        if (k.length >= 2) { const d = Math.hypot(k[0].x - k[1].x, k[0].y - k[1].y); if (this._pd && d / this._pd > 1.35) { this._zt = 0; this.zoom(1); this._pd = d; } else if (this._pd && d / this._pd < .74) { this._zt = 0; this.zoom(-1); this._pd = d; } return; }
        this.setState(s => ({ ox: s.ox + dx, oy: s.oy + dy })); },
      pUp: e => { delete this.ptrs[e.pointerId]; if (Object.keys(this.ptrs).length < 2) this._pd = null; },
    };
  }
}

class DeviceInfoPanel extends Component {
  render() {
    const V = { ...this.props, ...(this.renderVals() || {}) };
    return <View V={V} />;
  }
}

export default DeviceInfoPanel;
