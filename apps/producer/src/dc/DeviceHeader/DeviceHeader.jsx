import React from 'react';
import View from './View.jsx';

class Component extends React.Component {
  state = { fs: false };
  componentDidMount() { this._fs = () => this.setState({ fs: !!document.fullscreenElement }); document.addEventListener('fullscreenchange', this._fs); }
  componentWillUnmount() { document.removeEventListener('fullscreenchange', this._fs); }
  renderVals() {
    const h = this.props.h || { info: {}, tabs: [] }, m = h.menu, info = h.info || {};
    const tabs = (h.tabs || []).map(t => ({ ...t, ink: t.active ? '#0E7C3A' : '#3F4B45', line: t.active ? '#1AA34A' : 'transparent', weight: t.active ? 700 : 500, iconInk: t.iconInk || 'currentColor', badge: /key insights/i.test(t.label), plain: !/key insights/i.test(t.label) }));
    const P = h.profiles, pf = !P ? { cur: {}, items: [], segs: [] } : (() => {
      const view = P.view || 0, rng = p => p.to ? p.from + ' – ' + p.to : 'Active since ' + p.from;
      const cur = P.list[view], act = view === 0;
      return { open: P.open, hist: P.hist, toggle: P.toggle, toggleHist: P.toggleHist, past: !act, backActive: () => P.pick(0), total: P.list.length,
        histRot: P.hist ? '180deg' : '0deg', ink: act ? '#0E7C3A' : '#B45309', chipBg: act ? 'transparent' : '#FFF7E6', chipBd: act ? '#E5E8E6' : '#F5DFB0',
        otherCount: '+' + (P.list.length - 1),
        cur: { name: cur.name, range: rng(cur), pill: act ? 'Active' : 'Past', pillBg: act ? '#E7F6EC' : '#FDECC8', pillInk: act ? '#0E7C3A' : '#92560A' },
        items: P.list.map((p, i) => ({ name: p.name, active: i === 0, range: rng(p), meta: p.crop + ' · ' + p.depths, tick: i === view ? '✓' : '', rowBg: i === view ? '#F1F7F3' : 'transparent', pick: () => P.pick(i) })),
        segs: P.list.map((p, i) => ({ i, name: p.name, range: p.to ? p.from + ' – ' + p.to : 'Since ' + p.from, grow: p.days, minW: p.days < 30 ? '96px' : '140px', pick: () => P.pick(i),
          bg: i === view ? (i === 0 ? '#E7F6EC' : '#FFF7E6') : '#F6F8F7', bd: i === view ? (i === 0 ? '#1AA34A' : '#E0A93B') : '#E5E8E6', ink: '#0F1A14', sub: '#6A746E' })).reverse() };
    })();
    return {
      pf, profDrop: !!P && (P.style || 'Dropdown') === 'Dropdown', profLine: !!P && P.style === 'Timeline',
      h, pair: !!h.icon2, single: !h.icon2, hasMenu: !!m, menuOpen: !!(m && m.open), menuCursor: m ? 'pointer' : 'default',
      toggleMenu: () => { if (m && m.toggle) m.toggle(); },
      tabs, hasTabs: tabs.length > 0,
      infoBg: info.open ? '#F1F7F3' : '#fff', infoRot: info.open ? '180deg' : '0deg', infoBd: info.open ? '#BFE5CC' : '#E5E8E6',
      fsLabel: this.state.fs ? 'Exit fullscreen' : 'Fullscreen',
      fullscreen: () => { const d = document; if (d.fullscreenElement) d.exitFullscreen && d.exitFullscreen(); else d.documentElement.requestFullscreen && d.documentElement.requestFullscreen().catch(() => {}); },
    };
  }
}

class DeviceHeader extends Component {
  render() {
    const V = { ...this.props, ...(this.renderVals() || {}) };
    return <View V={V} />;
  }
}

export default DeviceHeader;
