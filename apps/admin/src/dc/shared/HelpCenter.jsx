import React from 'react';
import { createPortal } from 'react-dom';
import { HELP } from './helpContent.js';

// "?" in the top bar -> menu (Help guide / FAQs) -> full guide or FAQ modal. Press "?" anywhere to open the guide.
const Svg = ({ d, s = 16, w = 1.9, c = 'currentColor', st, children }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} style={{ strokeWidth: w, strokeLinecap: 'round', strokeLinejoin: 'round', flexShrink: 0, ...st }}>{d && <path d={d} />}{children}</svg>
);
const P = {
  q: 'M9.5 9.2a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.5v.6M12 17v.01',
  book: 'M12 6.5C10.5 5 8 4.5 4 4.5v14c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2v-14c-4 0-6.5.5-8 2zM12 6.5v14',
  faq: 'M4 5h16v11H9l-5 4zM9.5 9a2.5 2.5 0 1 1 3.2 2.4c-.5.2-.7.6-.7 1.1M12 14.5v.01',
  x: 'M6 6l12 12M18 6 6 18', chev: 'm9 6 6 6-6 6', search: 'M20 20l-3.5-3.5',
};
const FONT = 'Geist,system-ui,sans-serif';
const btnReset = { appearance: 'none', border: 0, background: 'transparent', font: 'inherit', margin: 0, padding: 0, cursor: 'pointer', color: 'inherit' };
const typing = e => { const t = e.target; return t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable); };
const portal = node => (typeof document !== 'undefined' ? createPortal(node, document.body) : node);

export default class HelpCenter extends React.Component {
  state = { menu: false, view: null, sec: 0, gq: '', fq: '', fo: 0, hov: false, mh: -1 };
  componentDidMount() { document.addEventListener('keydown', this.onKey); }
  componentWillUnmount() { document.removeEventListener('keydown', this.onKey); }
  onKey = e => {
    if (e.key === 'Escape' && (this.state.view || this.state.menu)) { this.setState({ view: null, menu: false }); return; }
    if (e.key === '?' && !typing(e) && !this.state.view) { e.preventDefault(); this.open('guide'); }
  };
  open = v => this.setState({ menu: false, view: v, gq: '', fq: '', sec: 0, fo: 0 });
  close = () => this.setState({ view: null });

  renderMenu(accent) {
    const item = (i, icon, label, kbd, v) => (
      <button key={v} type="button" onClick={() => this.open(v)} onMouseEnter={() => this.setState({ mh: i })} onMouseLeave={() => this.setState({ mh: -1 })}
        style={{ ...btnReset, display: 'flex', alignItems: 'center', gap: '14px', width: '100%', padding: '11px 14px', borderRadius: '8px', textAlign: 'left', background: this.state.mh === i ? '#F1F5F9' : 'transparent', color: '#0F172A', fontSize: '14.5px', fontWeight: 600 }}>
        <Svg s={20} w={1.8} c={accent} d={icon} />
        <span style={{ flex: 1 }}>{label}</span>
        {kbd && <span style={{ minWidth: '20px', height: '20px', padding: '0 5px', boxSizing: 'border-box', border: '1px solid #CBD5E1', borderRadius: '4px', fontSize: '11.5px', fontWeight: 600, color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{kbd}</span>}
      </button>
    );
    return <>
      <div onClick={() => this.setState({ menu: false })} style={{ position: 'fixed', inset: 0, zIndex: 58 }} />
      <div style={{ position: 'absolute', right: '-8px', top: '44px', zIndex: 59, width: '220px', padding: '8px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', boxShadow: '0 16px 40px rgba(15,23,42,.18)', fontFamily: FONT }}>
        {item(0, P.book, 'Help guide', '?', 'guide')}
        {item(1, P.faq, 'FAQs', null, 'faqs')}
      </div>
    </>;
  }

  renderGuide(c, ink, accent, tint) {
    const s = this.state, q = s.gq.trim().toLowerCase();
    const match = t => !q || (t.h + ' ' + t.p + ' ' + t.steps.join(' ')).toLowerCase().includes(q);
    const secs = c.guide.map((g, i) => ({ ...g, i, hits: g.topics.filter(match) }));
    const vis = q ? secs.filter(g => g.hits.length) : secs;
    const cur = q ? null : secs[s.sec] || secs[0];
    const body = q ? vis : [cur];
    return (
      <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', fontFamily: FONT, color: '#0F172A' }}>
        <div onClick={this.close} style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,.45)' }} />
        <div data-r="hc-dlg" role="dialog" aria-label={c.product + ' User Guide'} style={{ position: 'relative', width: 'min(980px,100%)', height: 'min(680px,100%)', background: '#fff', borderRadius: '10px', boxShadow: '0 30px 80px rgba(15,23,42,.35)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div data-r="hc-head" style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', padding: '20px 24px 16px' }}>
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-.01em' }}>{c.product} — User Guide</div>
              <div style={{ fontSize: '12.5px', color: '#475569', lineHeight: 1.55, maxWidth: '640px', textWrap: 'pretty' }}>{c.intro} Press ? to open this guide; Esc or click outside to close.</div>
            </div>
            <label data-r="hc-search" style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '220px', height: '38px', padding: '0 12px', border: '1px solid #E2E8F0', borderRadius: '8px', flexShrink: 0, marginTop: '6px' }}>
              <Svg s={15} w={2} c="#94A3B8" d={P.search}><circle cx="11" cy="11" r="7" /></Svg>
              <input autoFocus value={s.gq} onChange={e => this.setState({ gq: e.target.value })} placeholder="Search…" style={{ border: 0, outline: 0, flex: 1, minWidth: 0, font: 'inherit', fontSize: '13.5px', background: 'transparent', color: '#0F172A' }} />
            </label>
            <button type="button" onClick={this.close} title="Close" style={{ ...btnReset, width: '32px', height: '32px', marginTop: '9px', borderRadius: '6px', color: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Svg s={16} w={2} d={P.x} /></button>
          </div>
          <div data-r="hc-body" style={{ flex: 1, minHeight: 0, display: 'flex' }}>
            <nav data-r="hc-nav" style={{ width: '232px', flexShrink: 0, overflowY: 'auto', padding: '4px 10px 12px 14px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {secs.map(g => {
                const on = !q && cur && cur.i === g.i, n = q ? g.hits.length : g.topics.length, dim = q && !n;
                return <button key={g.i} type="button" onClick={() => this.setState({ sec: g.i, gq: '' })}
                  style={{ ...btnReset, display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '6px', textAlign: 'left', background: on ? tint : 'transparent', opacity: dim ? 0.45 : 1 }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: g.dot || 'transparent', flexShrink: 0 }} />
                  <span style={{ flex: 1, fontSize: '13.5px', fontWeight: on ? 650 : 500, color: on ? ink : '#1E293B', lineHeight: 1.3 }}>{g.t}</span>
                  <span style={{ fontSize: '11.5px', color: '#64748B', fontVariantNumeric: 'tabular-nums' }}>{n}</span>
                </button>;
              })}
            </nav>
            <div data-r="hc-content" style={{ flex: 1, minWidth: 0, overflowY: 'auto', padding: '6px 28px 28px 20px' }}>
              {body.map(g => <div key={g.i} style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-.01em', margin: '6px 0 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {g.dot && <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: g.dot }} />}{g.t}
                </div>
                {(q ? g.hits : g.topics).map((t, k) => <div key={k} style={{ marginBottom: '22px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 650, marginBottom: '6px' }}>{t.h}</div>
                  <div style={{ fontSize: '13.5px', color: '#334155', lineHeight: 1.6, textWrap: 'pretty' }}>{t.p}</div>
                  <ol style={{ margin: '8px 0 0', paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13.5px', color: '#334155', lineHeight: 1.55 }}>
                    {t.steps.map((st, j) => <li key={j} style={{ paddingLeft: '4px' }}>{st}</li>)}
                  </ol>
                </div>)}
              </div>)}
              {q && !vis.length && <div style={{ padding: '40px 0', fontSize: '13.5px', color: '#64748B' }}>Nothing in the guide matches “{s.gq}”. Try the FAQs or another word.</div>}
            </div>
          </div>
          <div data-r="hc-foot" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '12px 24px', borderTop: '1px solid #F1F5F9' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: '#475569' }}>Press <span style={{ minWidth: '18px', height: '18px', padding: '0 4px', boxSizing: 'border-box', border: '1px solid #CBD5E1', borderRadius: '4px', fontSize: '11px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>?</span> anywhere in the portal to open this guide.</span>
            <button type="button" onClick={this.close} style={{ ...btnReset, padding: '8px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 700, letterSpacing: '.06em', color: ink }}>CLOSE</button>
          </div>
        </div>
      </div>
    );
  }

  renderFaqs(c, ink, accent, tint) {
    const s = this.state, q = s.fq.trim().toLowerCase();
    const all = c.faqs.map((f, i) => ({ ...f, i }));
    const list = all.filter(f => !q || (f.q + ' ' + (f.a || '') + ' ' + (f.lead || '') + ' ' + (f.steps || []).join(' ') + ' ' + f.c).toLowerCase().includes(q));
    return (
      <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', fontFamily: FONT, color: '#0F172A' }}>
        <div onClick={this.close} style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,.45)' }} />
        <div data-r="hc-dlg" role="dialog" aria-label="Frequently Asked Questions" style={{ position: 'relative', width: 'min(1000px,100%)', height: 'min(820px,100%)', background: '#fff', borderRadius: '16px', boxShadow: '0 30px 80px rgba(15,23,42,.35)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '18px 22px', borderBottom: '1px solid #E2E8F0' }}>
            <Svg s={22} w={1.8} c={accent} d={P.q}><circle cx="12" cy="12" r="9" /></Svg>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-.01em' }}>Frequently Asked Questions</div>
              <div style={{ fontSize: '12.5px', color: '#64748B' }}>Answers to common questions about the {c.product}.</div>
            </div>
            <button type="button" onClick={this.close} title="Close" style={{ ...btnReset, width: '32px', height: '32px', borderRadius: '6px', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Svg s={16} w={2} d={P.x} /></button>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 22px', height: '50px', borderBottom: '1px solid #E2E8F0' }}>
            <Svg s={16} w={2} c="#64748B" d={P.search}><circle cx="11" cy="11" r="7" /></Svg>
            <input autoFocus value={s.fq} onChange={e => this.setState({ fq: e.target.value, fo: null })} placeholder="Search FAQs…" style={{ border: 0, outline: 0, flex: 1, minWidth: 0, font: 'inherit', fontSize: '14px', background: 'transparent', color: '#0F172A' }} />
            <span style={{ fontSize: '12.5px', color: '#64748B', fontVariantNumeric: 'tabular-nums' }}>{list.length} of {all.length}</span>
          </label>
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '16px 22px 28px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {list.map(f => {
                const on = s.fo === f.i;
                return <div key={f.i} style={{ border: '1px solid ' + (on ? accent + '66' : '#E5E9E5'), borderRadius: '10px', background: on ? tint : '#F8FAF8', transition: 'background .15s,border-color .15s' }}>
                  <button type="button" onClick={() => this.setState({ fo: on ? null : f.i })} style={{ ...btnReset, width: '100%', display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '15px 18px', textAlign: 'left' }}>
                    <Svg s={15} w={2.2} c={accent} d={P.chev} st={{ marginTop: '3px', transform: on ? 'rotate(90deg)' : 'none', transition: 'transform .15s' }} />
                    <span style={{ flex: 1, fontSize: '14.5px', fontWeight: 650, lineHeight: 1.4 }}>{f.q}</span>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B', background: '#fff', border: '1px solid #E2E8F0', borderRadius: '999px', padding: '2px 8px', whiteSpace: 'nowrap' }}>{f.c}</span>
                  </button>
                  {on && <div style={{ padding: '0 22px 18px 47px', fontSize: '13.5px', color: '#334155', lineHeight: 1.6 }}>
                    {f.lead && <div style={{ fontWeight: 650, color: '#1E293B', marginBottom: '8px' }}>{f.lead}</div>}
                    {f.steps && <ol style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>{f.steps.map((st, j) => <li key={j} style={{ paddingLeft: '4px' }}>{st}</li>)}</ol>}
                    {f.a && <div style={{ textWrap: 'pretty' }}>{f.a}</div>}
                  </div>}
                </div>;
              })}
              {!list.length && <div style={{ padding: '40px 0', textAlign: 'center', fontSize: '13.5px', color: '#64748B' }}>No questions match “{s.fq}”. Try another word or open the Help guide.</div>}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '12px 22px', borderTop: '1px solid #F1F5F9', background: '#FAFBFC' }}>
            <span style={{ fontSize: '12.5px', color: '#475569' }}>Can’t find your answer? <button type="button" onClick={() => this.open('guide')} style={{ ...btnReset, color: accent, fontWeight: 600, textDecoration: 'underline' }}>Open the Help guide</button></span>
            {this.props.onContact && <button type="button" onClick={() => { this.close(); setTimeout(this.props.onContact, 0); }} style={{ ...btnReset, height: '34px', padding: '0 14px', borderRadius: '8px', background: ink, color: '#fff', fontSize: '13px', fontWeight: 600 }}>Contact support</button>}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const p = this.props, s = this.state, c = HELP[p.portal] || HELP.admin;
    const ink = p.ink || '#0A2342', accent = p.accent || '#0B7F7E', tint = p.tint || '#E6F4F3';
    const lit = s.hov || s.menu || !!s.view;
    return <div style={{ position: 'relative', display: 'flex' }}>
      <button type="button" onClick={() => this.setState(x => ({ menu: !x.menu }))} title="Help guide & FAQs" aria-label="Help guide and FAQs" onMouseEnter={() => this.setState({ hov: true })} onMouseLeave={() => this.setState({ hov: false })}
        style={{ ...btnReset, display: 'flex', width: '34px', height: '34px', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', color: lit ? '#fff' : (p.color || '#cbd5e1'), background: lit ? 'rgba(255,255,255,.1)' : 'transparent', transition: 'background .15s,color .15s' }}>
        <Svg s={20} w={1.6} d={P.q}><circle cx="12" cy="12" r="9" /></Svg>
      </button>
      {s.menu && this.renderMenu(accent)}
      {s.view === 'guide' && portal(this.renderGuide(c, ink, accent, tint))}
      {s.view === 'faqs' && portal(this.renderFaqs(c, ink, accent, tint))}
    </div>;
  }
}
