import React from 'react';
import { S, L, A, C } from '../runtime.js';

import WStations from './sections/WStations.jsx';
import WForecast from './sections/WForecast.jsx';
// Generated from "HLI Dashboard.dc.html". V = { ...props, ...renderVals() } from HLIDashboard.jsx
export default function View({ V }) {
  return (
    <div className="sc-host">
      <div onClick={V.click} style={{ display: "flex", minHeight: `${A(V.rootMinH)}`, alignItems: "stretch", fontFamily: `${A(V.rootFont)}`, color: "#1E2A26", WebkitFontSmoothing: "antialiased", boxSizing: "border-box" }}>
        {V.chromeOn && <>
          <aside style={{ width: `${A(V.navWidth)}`, flex: `0 0 ${A(V.navWidth)}`, background: "#0A2B22", color: "#DCEAE4", display: "flex", flexDirection: "column", paddingBottom: "18px", transition: "width .18s ease, flex-basis .18s ease" }}>
            <div style={{ height: "72px", display: "flex", alignItems: "center", padding: `0 ${A(V.navEdge)}`, justifyContent: "center" }}>
              {V.navOpen && <>
                <img src="assets/hli-2270b995.png" alt="AxisStream — unlock your data" style={{ width: "176px", height: "auto", display: "block" }} />
              </>}
              {V.navClosed && <>
                <img src="assets/hli-32887567.png" alt="AxisStream" style={{ width: "30px", height: "auto", display: "block" }} />
              </>}
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "10px 0" }}>
              {L(V.navItems).map((n, i0) => <React.Fragment key={i0}>
                {n?.isHeader && <>
                  <div style={{ marginTop: "12px", padding: "8px 22px 4px", fontSize: "11px", letterSpacing: ".14em", color: "#6FA490", textAlign: `${A(V.navHdrAlign)}` }}>{S(n?.hdrLabel)}</div>
                </>}
                {n?.isItem && <>
                  <div className="scp2v" data-act={n?.act} title={n?.label} style={{ display: "flex", alignItems: "center", gap: "14px", padding: `12px ${A(V.navEdge)}`, justifyContent: `${A(V.navJust)}`, borderRadius: "0 26px 26px 0", marginRight: "10px", fontSize: "14.5px", cursor: `${A(n?.cur)}`, background: `${A(n?.bg)}`, color: `${A(n?.c)}`, fontWeight: `${A(n?.fw)}` }}>
                    <svg viewBox="0 0 24 24" style={{ flex: "0 0 19px", width: "19px", height: "19px" }} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={n?.d} /></svg>
                    {V.navOpen && <>
                      <span style={{ whiteSpace: "nowrap", overflow: "hidden" }}>{S(n?.label)}</span>
                    </>}
                  </div>
                </>}
              </React.Fragment>)}
            </nav>
            {V.navOpen && <>
              <div style={{ marginTop: "auto", padding: "14px 26px", fontSize: "13px", color: "#8FBFAD" }}>Guide</div>
            </>}
          </aside>
        </>}
        <div style={{ flex: "1 1 auto", minWidth: "0", display: "flex", flexDirection: "column" }}>
          {V.chromeOn && <>
            <header style={{ height: "68px", background: "#0E3B2E", display: "flex", alignItems: "center", gap: "16px", padding: "0 22px", borderLeft: "1px solid rgba(255,255,255,.06)" }}>
              <div className="scp2w" data-act="ui:navtoggle" title={V.navToggleTitle} style={{ flex: "0 0 26px", width: "26px", height: "26px", color: "#B8D3C8", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"><path d="M4 7h16M4 12h12M4 17h16" /></svg></div>
              <div style={{ position: "relative", flex: "0 0 auto", minWidth: "0" }}>
                <div className="scp2x" data-act="menu:site" style={{ display: "flex", alignItems: "center", gap: "9px", background: "transparent", border: "1px solid rgba(255,255,255,.34)", borderRadius: "20px", padding: "8px 14px", fontSize: "13px", color: "#EAF4EF", cursor: "pointer", whiteSpace: "nowrap" }}>
                  <svg viewBox="0 0 24 24" style={{ flex: "0 0 15px", width: "15px", height: "15px" }} fill="#DCEAE4"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4l1.6 2H19.5A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z" /></svg>
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.siteLabel)}</span>
                  <span style={{ marginLeft: "4px", color: "#9FC6B7", fontSize: "11px" }}>▾</span>
                </div>
                {V.siteMenu && <>
                  <div style={{ position: "absolute", top: "46px", left: "0", zIndex: "60", width: "268px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", boxShadow: "0 12px 30px rgba(12,32,26,.22)", padding: "7px", display: "flex", flexDirection: "column", gap: "3px" }}>
                    {L(V.siteOptions).map((o, i1) => <React.Fragment key={i1}>
                      <div className="scp2y" data-act={o?.act} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 12px", borderRadius: "8px", fontSize: "13px", cursor: "pointer", background: `${A(o?.bg)}`, color: `${A(o?.c)}`, fontWeight: `${A(o?.fw)}` }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(o?.dot)}` }} />
                        <div>
                          {S(o?.name)}
                          <div style={{ fontSize: "11px", color: "#8A9A95", fontWeight: "400", marginTop: "2px" }}>{S(o?.meta)}</div>
                        </div>
                      </div>
                    </React.Fragment>)}
                  </div>
                </>}
              </div>
              <div className="scp2z" style={{ flex: "1 1 auto", minWidth: "120px", maxWidth: "420px", height: "38px", display: "flex", alignItems: "center", gap: "10px", padding: "0 16px", background: "transparent", border: "1px solid rgba(255,255,255,.34)", borderRadius: "20px", color: "#9FC6B7", cursor: "text" }}>
                <svg viewBox="0 0 24 24" style={{ flex: "0 0 15px", width: "15px", height: "15px" }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="M16 16l4 4" />
                </svg>
                <span style={{ fontSize: "13px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Search projects, devices, or data...</span>
              </div>
              <div style={{ marginLeft: "auto", flex: "0 0 auto", display: "flex", alignItems: "center", gap: "16px", color: "#CFE4DB", whiteSpace: "nowrap" }}>
                <div className="scp2w" title="Dark mode" style={{ cursor: "pointer", color: "#CFE4DB", display: "flex" }}><svg viewBox="0 0 24 24" style={{ width: "19px", height: "19px" }} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" /></svg></div>
                <div title="Region: Australia" style={{ cursor: "pointer", display: "flex" }}>
                  <svg viewBox="0 0 24 16" style={{ width: "22px", height: "15px", borderRadius: "2px" }}>
                    <rect width="24" height="16" fill="#0A2A66" />
                    <path d="M0 0h11v7H0z" fill="#0A2A66" />
                    <path d="M0 0l11 7M11 0L0 7" stroke="#fff" strokeWidth="1.4" />
                    <path d="M0 0l11 7M11 0L0 7" stroke="#D8232A" strokeWidth="0.7" />
                    <path d="M5.2 0v7M0 3.2h11" stroke="#fff" strokeWidth="2" />
                    <path d="M5.2 0v7M0 3.2h11" stroke="#D8232A" strokeWidth="1" />
                    <circle cx="6" cy="12.6" r="1.7" fill="#fff" />
                    <circle cx="16.5" cy="4.4" r="1" fill="#fff" />
                    <circle cx="19.6" cy="8.4" r="1" fill="#fff" />
                    <circle cx="15.4" cy="11.4" r="1" fill="#fff" />
                    <circle cx="20.4" cy="12.8" r="0.8" fill="#fff" />
                    <circle cx="17.8" cy="7.2" r="0.6" fill="#fff" />
                  </svg>
                </div>
                <div className="scp2w" title="Alerts" style={{ position: "relative", cursor: "pointer", color: "#CFE4DB", display: "flex" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "19px", height: "19px" }} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                    <path d="M18 15.5V10a6 6 0 1 0-12 0v5.5L4.6 17.6h14.8z" />
                    <path d="M10 20.4a2.4 2.4 0 0 0 4 0" />
                  </svg>
                  <span style={{ position: "absolute", top: "-5px", right: "-6px", minWidth: "15px", height: "15px", padding: "0 3px", background: "#E0492E", color: "#fff", borderRadius: "8px", fontSize: "10px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>1</span>
                </div>
                <div className="scp30" title="Help" style={{ width: "24px", height: "24px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.4)", color: "#CFE4DB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12.5px", cursor: "pointer" }}>?</div>
                <div className="scp2x" style={{ display: "flex", alignItems: "center", gap: "9px", height: "38px", padding: "0 16px", border: "1px solid rgba(255,255,255,.34)", borderRadius: "20px", fontSize: "13px", color: "#EAF4EF", cursor: "pointer" }}>
                  <svg viewBox="0 0 24 24" style={{ flex: "0 0 15px", width: "15px", height: "15px" }} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M20.5 12.2c0 3.9-3.8 7-8.5 7-1 0-2-.14-2.9-.4L4.5 20.2l1.2-3.2A6.6 6.6 0 0 1 3.5 12.2c0-3.9 3.8-7 8.5-7s8.5 3.1 8.5 7z" /></svg>
                  Create Support Ticket
        
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#2BB47C", color: "#06301F", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600", fontSize: "13px" }}>SS</div>
                  <div style={{ lineHeight: "1.25", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px" }}>
                    <div style={{ color: "#fff", fontSize: "13px", fontWeight: "500" }}>Shahista S</div>
                    <div style={{ fontSize: "10px", color: "#F5C518", background: "rgba(245,197,24,.14)", borderRadius: "3px", padding: "1px 5px" }}>Staff Admin</div>
                  </div>
                </div>
              </div>
            </header>
          </>}
          <main style={{ flex: "1 1 auto", padding: `${A(V.mainPad)}` }}>
            {V.notEmbed && <>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "20px", marginBottom: "16px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "600", letterSpacing: "-.01em" }}>{S(V.pageTitle)}</div>
                  <div style={{ fontSize: "14px", color: "#6E827C", marginTop: "3px" }}>{S(V.pageSub)}</div>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px" }}>
                  {V.showAddBtn && <>
                    <button className="scp31" data-act="pcfg:add" style={{ whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "8px", border: "none", background: "#12855F", color: "#fff", borderRadius: "8px", padding: "10px 18px", fontSize: "14px", fontWeight: "600", fontFamily: "inherit", cursor: "pointer" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px" }} fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                      {S(V.addPenLabel)}
                    </button>
                  </>}
                  {V.iConfig && <>
                    <button className="scp32" data-act="is:overview" style={{ whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "8px", border: "1px solid #D7E0DC", background: "#fff", color: "#33453F", borderRadius: "8px", padding: "10px 18px", fontSize: "14px", fontFamily: "inherit", cursor: "pointer" }}>← Back to Feedlot</button>
                  </>}
                  {V.showInfoBtn && <>
                    <div className="scp33" data-act="info:open" title="What is HLI and how is it calculated?" style={{ width: "38px", height: "38px", borderRadius: "50%", border: "1px solid #E0B520", background: "#F5C518", color: "#4A3800", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "19px", fontWeight: "700", fontFamily: "Georgia, serif", fontStyle: "italic", cursor: "pointer" }}>i</div>
                  </>}
                </div>
              </div>
            </>}
            {V.showFlTabs && <>
              <div style={{ display: "flex", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", overflow: "hidden", marginBottom: "14px" }}>
                {L(V.flTabs).map((t, i2) => <React.Fragment key={i2}>
                  <div data-act={t?.act} style={{ flex: "1 1 0", textAlign: "center", padding: "13px 10px", fontSize: "14.5px", cursor: "pointer", borderLeft: "1px solid #EEF3F1", background: `${A(t?.bg)}`, color: `${A(t?.c)}`, fontWeight: `${A(t?.fw)}`, boxShadow: `inset 0 -3px 0 ${A(t?.bc)}` }}>{S(t?.label)}</div>
                </React.Fragment>)}
              </div>
            </>}
            {V.showSecTabs && <>
              {V.plainTabs && <>
                <div style={{ display: "flex", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", overflow: "hidden" }}>
                  {L(V.subTabs).map((s, i3) => <React.Fragment key={i3}>
                    <div data-act={s?.act} style={{ flex: "1 1 0", textAlign: "center", padding: "13px 10px", fontSize: "14.5px", cursor: `${A(s?.cur)}`, opacity: `${A(s?.op)}`, borderLeft: "1px solid #EEF3F1", background: `${A(s?.pbg)}`, color: `${A(s?.pc)}`, fontWeight: `${A(s?.fw)}`, boxShadow: `inset 0 -3px 0 ${A(s?.bc)}` }}>
                      {S(s?.label)}
                      <span style={{ fontSize: "12.5px", color: "#9AAAA5" }}>{S(s?.note)}</span>
                    </div>
                  </React.Fragment>)}
                </div>
              </>}
              {V.iconTabs && <>
                <div style={{ display: "flex", alignItems: "stretch", gap: "8px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", padding: "10px 14px", flexWrap: "wrap" }}>
                  {L(V.subTabs).map((s, i4) => <React.Fragment key={i4}>
                    <div className="scp2y" data-act={s?.act} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", padding: "9px 18px", borderRadius: "8px", fontSize: "12.5px", textAlign: "center", cursor: `${A(s?.cur)}`, opacity: `${A(s?.op)}`, background: `${A(s?.bg)}`, color: `${A(s?.c)}`, fontWeight: `${A(s?.fw)}` }}>
                      <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={s?.icon} /></svg>
                      {S(s?.label)}
                      <span style={{ fontSize: "11.5px", color: "#9AAAA5" }}>{S(s?.note)}</span>
                    </div>
                  </React.Fragment>)}
                </div>
              </>}
            </>}
            {V.showCtx && <>
              <div style={{ marginTop: `${A(V.ctxMt)}`, display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                {V.wForecast && <>
                  <div style={{ display: "flex", gap: "4px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "9px", padding: "4px" }}>
                    {L(V.fcViewTabs).map((t, i5) => <React.Fragment key={i5}>
                      <div className="scp2y" data-act={t?.act} style={{ padding: "8px 18px", borderRadius: "6px", fontSize: "13.5px", cursor: "pointer", background: `${A(t?.bg)}`, color: `${A(t?.c)}`, fontWeight: `${A(t?.fw)}` }}>{S(t?.label)}</div>
                    </React.Fragment>)}
                  </div>
                </>}
                <div style={{ fontSize: "13.5px", color: "#7C8D88" }}>{S(V.contextLabel)}</div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "14px", fontSize: "13px", color: "#6E827C" }}>
                  {V.embedInfo && <>
                    <div className="scp34" data-act="info:open" title="What is HLI and how is it calculated?" style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px solid #E0B520", background: "#FDF6DC", color: "#6B5200", borderRadius: "8px", padding: "8px 12px", fontSize: "13px", fontWeight: "600", cursor: "pointer", whiteSpace: "nowrap" }}>
                      <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px" }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 11v5M12 8h.01" />
                      </svg>
                      Calculation reference
                    </div>
                  </>}
                  {V.insightsLink?.show && <>
                    <div className="scp35" data-act={V.insightsLink?.act} style={{ display: "flex", alignItems: "center", gap: "6px", background: "#12855F", border: "1px solid #12855F", borderRadius: "7px", padding: "8px 13px", fontSize: "12.5px", fontWeight: "600", color: "#fff", cursor: "pointer", whiteSpace: "nowrap" }}>
                      {S(V.insightsLink?.label)}
                      <svg viewBox="0 0 24 24" style={{ width: "12px", height: "12px" }} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                    </div>
                  </>}
                  {V.showLastSample && <>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2BB47C", animation: "pulseDot 2s infinite" }} />
                      {"Last sampling: "}{S(V.lastSample)}
                    </span>
                  </>}
                  {V.showDeviceDd && <>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", top: "-7px", left: "11px", padding: "0 5px", background: "#F1F5F3", fontSize: "11.5px", color: "#12855F" }}>{S(V.deviceDdLabel)}</div>
                      <div className="scp36" data-act="dd:device" style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "230px", border: `1px solid ${A(V.deviceDdBd)}`, background: "#fff", borderRadius: "8px", padding: "10px 13px", fontSize: "14px", color: "#1E2A26", cursor: "pointer" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2BB47C" }} />
                        {S(V.deviceName)}
                        <span style={{ marginLeft: "auto", color: "#9AAAA5" }}>▾</span>
                      </div>
                      {V.deviceDdOpen && <>
                        <div style={{ position: "absolute", top: "100%", right: "0", zIndex: "40", marginTop: "5px", width: "290px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", boxShadow: "0 12px 30px rgba(12,32,26,.18)", padding: "6px", display: "flex", flexDirection: "column", gap: "2px" }}>
                          {L(V.deviceOptions).map((o, i6) => <React.Fragment key={i6}>
                            <div className="scp2y" data-act={o?.act} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 12px", borderRadius: "8px", fontSize: "14px", cursor: "pointer", background: `${A(o?.bg)}`, color: `${A(o?.c)}`, fontWeight: `${A(o?.fw)}` }}>
                              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(o?.dot)}` }} />
                              <div>
                                {S(o?.label)}
                                <div style={{ fontSize: "12px", color: "#8A9A95", fontWeight: "400", marginTop: "2px" }}>{S(o?.sub)}</div>
                              </div>
                            </div>
                          </React.Fragment>)}
                        </div>
                      </>}
                    </div>
                  </>}
                  {V.showPenDd && <>
                    <div style={{ position: "relative" }}>
                      <div className="scp36" data-act="dd:pen" style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "150px", border: "1px solid #D7E0DC", background: "#fff", borderRadius: "8px", padding: "9px 13px", fontSize: "13.5px", color: "#33453F", cursor: "pointer" }}>
                        {S(V.penName)}
                        <span style={{ marginLeft: "auto", color: "#9AAAA5" }}>▾</span>
                      </div>
                      {V.penDdOpen && <>
                        <div style={{ position: "absolute", top: "42px", right: "0", zIndex: "30", width: "180px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "9px", boxShadow: "0 10px 26px rgba(12,32,26,.16)", padding: "6px", display: "flex", flexDirection: "column", gap: "2px" }}>
                          {L(V.penDdOptions).map((o, i7) => <React.Fragment key={i7}>
                            <div className="scp2y" data-act={o?.act} style={{ padding: "10px 12px", borderRadius: "7px", fontSize: "13.5px", cursor: "pointer", background: `${A(o?.bg)}`, color: `${A(o?.c)}`, fontWeight: `${A(o?.fw)}` }}>
                              {S(o?.label)}
                              <span style={{ float: "right", color: "#93A5A0", fontWeight: "400" }}>{S(o?.sub)}</span>
                            </div>
                          </React.Fragment>)}
                        </div>
                      </>}
                    </div>
                  </>}
                  {V.showWcPenDd && <>
                    <div style={{ position: "relative" }}>
                      <div className="scp36" data-act="dd:wcpen" style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "150px", border: "1px solid #D7E0DC", background: "#fff", borderRadius: "8px", padding: "9px 13px", fontSize: "13.5px", color: "#33453F", cursor: "pointer" }}>
                        {S(V.wcPenName)}
                        <span style={{ marginLeft: "auto", color: "#9AAAA5" }}>▾</span>
                      </div>
                      {V.wcPenDdOpen && <>
                        <div style={{ position: "absolute", top: "42px", right: "0", zIndex: "45", width: "220px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "9px", boxShadow: "0 10px 26px rgba(12,32,26,.16)", padding: "6px", display: "flex", flexDirection: "column", gap: "2px" }}>
                          {L(V.wcPenOptions).map((o, i8) => <React.Fragment key={i8}>
                            <div className="scp2y" data-act={o?.act} style={{ padding: "10px 12px", borderRadius: "7px", fontSize: "13.5px", cursor: "pointer", background: `${A(o?.bg)}`, color: `${A(o?.c)}`, fontWeight: `${A(o?.fw)}` }}>
                              {S(o?.label)}
                              <span style={{ float: "right", color: "#93A5A0", fontWeight: "400" }}>{S(o?.sub)}</span>
                            </div>
                          </React.Fragment>)}
                        </div>
                      </>}
                    </div>
                  </>}
                </div>
              </div>
            </>}
            {V.flFeed && <>
              <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "72px 24px", textAlign: "center" }}>
                <div style={{ width: "46px", height: "46px", margin: "0 auto", borderRadius: "50%", background: "#EAF6F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px" }} fill="none" stroke="#12855F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7.4V12l3 1.9" />
                  </svg>
                </div>
                <div style={{ fontSize: "18px", fontWeight: "600", color: "#1E2A26", marginTop: "16px" }}>Feed — coming soon</div>
                <div style={{ fontSize: "13.5px", color: "#8A9A95", marginTop: "6px" }}>Ration and bunk management for every pen will live here.</div>
              </div>
            </>}
            {V.flHealth && <>
              <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "72px 24px", textAlign: "center" }}>
                <div style={{ width: "46px", height: "46px", margin: "0 auto", borderRadius: "50%", background: "#EAF6F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px" }} fill="none" stroke="#12855F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7.4V12l3 1.9" />
                  </svg>
                </div>
                <div style={{ fontSize: "18px", fontWeight: "600", color: "#1E2A26", marginTop: "16px" }}>Health — coming soon</div>
                <div style={{ fontSize: "13.5px", color: "#8A9A95", marginTop: "6px" }}>Welfare, treatments and mortality tracking will live here.</div>
              </div>
            </>}
            {V.iOverview && <>
              <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {L(V.penCards).map((p, i9) => <React.Fragment key={i9}>
                  <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "14px", padding: "14px 18px", boxShadow: "0 1px 2px rgba(16,40,34,.04)", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                      <div style={{ fontSize: "18px", fontWeight: "600", color: "#1E2A26" }}>Heat load</div>
                      <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                          {p?.showSw && <>
                            <div style={{ display: "flex", alignItems: "center", gap: "14px", border: "1px solid #E9EFED", borderRadius: "10px", padding: "8px 14px", flexWrap: "wrap" }}>
                              <div style={{ fontSize: "11.5px", color: "#7C8D88" }}>Aeration Pump</div>
                              <div style={{ fontSize: "12px", color: "#33453F", whiteSpace: "nowrap" }}>
                                {"Mode: "}
                                <span style={{ fontWeight: "600", color: `${A(p?.modeC)}` }}>{S(p?.modeLabel)}</span>
                              </div>
                              <div style={{ fontSize: "12px", color: "#33453F", whiteSpace: "nowrap" }}>
                                {"Status: "}
                                <span style={{ fontWeight: "600", color: `${A(p?.runC)}` }}>{S(p?.runLabel)}</span>
                              </div>
                            </div>
                          </>}
                        </div>
                        <div style={{ fontSize: "11.5px", color: "#A9B7B2", whiteSpace: "nowrap" }}>{"Last sampling time: "}{S(p?.at)}</div>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "14px", alignItems: "stretch" }}>
                      <div style={{ minWidth: "0", border: `1px solid ${A(p?.hliBd)}`, background: `${A(p?.hliBg)}`, borderRadius: "12px", padding: "16px 18px 14px", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <div style={{ fontSize: "12.5px", color: "#7C8D88" }}>HLI now</div>
                          {p?.showZone && <>
                            <div style={{ marginLeft: "auto", fontSize: "11px", fontWeight: "600", borderRadius: "20px", padding: "3px 10px", background: `${A(p?.zoneBg)}`, color: `${A(p?.zoneC)}`, whiteSpace: "nowrap" }}>{S(p?.zone)}</div>
                          </>}
                        </div>
                        <div style={{ fontSize: "32px", lineHeight: "1.1", fontWeight: "600", letterSpacing: "-.03em", color: `${A(p?.hliC)}`, marginTop: "4px" }}>{S(p?.hli)}</div>
                        <div style={{ position: "relative", height: "10px", marginTop: "14px" }}>
                          <div style={{ position: "absolute", inset: "0", borderRadius: "5px", background: `linear-gradient(90deg, #2BB47C 0%, #2BB47C ${A(p?.lowerPct)}%, #E8A93A ${A(p?.lowerPct)}%, #E8A93A ${A(p?.upperPct)}%, #D9534F ${A(p?.upperPct)}%, #D9534F 100%)` }} />
                          <span style={{ position: "absolute", top: "-3px", left: `${A(p?.hliPct)}%`, width: "4px", height: "16px", borderRadius: "2px", background: "#14312A", transform: "translateX(-2px)" }} />
                          <span style={{ position: "absolute", top: "0", left: `${A(p?.lowerPct)}%`, width: "2px", height: "10px", background: "#fff", opacity: ".85", transform: "translateX(-1px)" }} />
                          <span style={{ position: "absolute", top: "0", left: `${A(p?.upperPct)}%`, width: "2px", height: "10px", background: "#fff", opacity: ".85", transform: "translateX(-1px)" }} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", fontSize: "11.5px", color: "#93A5A0", marginTop: "9px" }}>
                          <span style={{ whiteSpace: "nowrap" }}>
                            {"lower "}
                            <span style={{ fontWeight: "600", color: "#55665F" }}>{S(p?.lower)}</span>
                          </span>
                          <span style={{ whiteSpace: "nowrap" }}>
                            {"upper "}
                            <span style={{ fontWeight: "600", color: "#55665F" }}>{S(p?.upper)}</span>
                          </span>
                        </div>
                      </div>
                      <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ flex: "1 1 auto", border: "1px solid #E9EFED", borderRadius: "10px", padding: "10px 12px", display: "flex", alignItems: "center", gap: "10px" }}>
                          <div style={{ flex: "0 0 26px", width: "26px", height: "26px", borderRadius: "8px", background: "#E4F4FB", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px" }}><path d="M12 3 C12 3 6 10 6 14.5 A6 6 0 0 0 18 14.5 C18 10 12 3 12 3 Z" fill="#3FA9D6" /></svg></div>
                          <div style={{ flex: "1 1 auto", minWidth: "0", fontSize: "12px", fontWeight: "600", color: "#33453F" }}>
                            {"Humidity "}
                            <span style={{ fontWeight: "400", color: "#8A9A95" }}>(%)</span>
                          </div>
                          <div style={{ flex: "0 0 auto", fontSize: "16px", fontWeight: "600", color: "#29A9C8" }}>{S(p?.rh)}</div>
                        </div>
                        <div style={{ flex: "1 1 auto", border: "1px solid #E9EFED", borderRadius: "10px", padding: "10px 12px", display: "flex", alignItems: "center", gap: "10px" }}>
                          <div style={{ flex: "0 0 26px", width: "26px", height: "26px", borderRadius: "8px", background: "#FDEEDA", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px" }}>
                              <rect x="9.5" y="3" width="5" height="12" rx="2.5" fill="#E8963A" />
                              <circle cx="12" cy="18" r="3.6" fill="#E8963A" />
                            </svg>
                          </div>
                          <div style={{ flex: "1 1 auto", minWidth: "0", fontSize: "12px", fontWeight: "600", color: "#33453F" }}>
                            {"Temp "}
                            <span style={{ fontWeight: "400", color: "#8A9A95" }}>(°C)</span>
                          </div>
                          <div style={{ flex: "0 0 auto", fontSize: "16px", fontWeight: "600", color: "#E8963A" }}>{S(p?.temp)}</div>
                        </div>
                        <div style={{ flex: "1 1 auto", border: "1px solid #E9EFED", borderRadius: "10px", padding: "10px 12px", display: "flex", alignItems: "center", gap: "10px" }}>
                          <div style={{ flex: "0 0 26px", width: "26px", height: "26px", borderRadius: "8px", background: "#E7F5EC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px" }} fill="none" stroke="#2C9A64" strokeWidth="1.8" strokeLinecap="round">
                              <path d="M3 8h11a3 3 0 1 0 -3 -3" />
                              <path d="M3 12h14" />
                              <path d="M3 16h9a2.6 2.6 0 1 1 2.6 2.6" />
                            </svg>
                          </div>
                          <div style={{ flex: "1 1 auto", minWidth: "0", fontSize: "12px", fontWeight: "600", color: "#33453F" }}>
                            {"Wind "}
                            <span style={{ fontWeight: "400", color: "#8A9A95" }}>(km/h)</span>
                          </div>
                          <div style={{ flex: "0 0 auto", fontSize: "16px", fontWeight: "600", color: "#2C7A5E" }}>{S(p?.wind)}</div>
                        </div>
                      </div>
                      {p?.showWater && <>
                        <div style={{ minWidth: "0", border: "1px solid #E3EDF4", background: "#F5F9FC", borderRadius: "12px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px" }}>
                          <div>
                            <div style={{ fontSize: "12px", color: "#2C6A94" }}>Water Flow (last 24 hours)</div>
                            <div style={{ fontSize: "24px", fontWeight: "600", color: "#2C6A94", marginTop: "4px" }}>{S(p?.water)}</div>
                          </div>
                          <div style={{ marginTop: "auto", borderTop: "1px solid #E3EDF4", paddingTop: "11px" }}>
                            <div style={{ fontSize: "12px", color: "#6E827C" }}>Pump run time</div>
                            <div style={{ fontSize: "15px", fontWeight: "600", color: "#1E2A26", marginTop: "3px" }}>{S(p?.runtime)}</div>
                            <div style={{ fontSize: "10.5px", color: "#93A5A0", marginTop: "4px" }}>{"started "}{S(p?.pumpStart)}</div>
                            {p?.showPumpBar && <>
                              <div style={{ marginTop: "8px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10.5px", color: "#93A5A0", marginBottom: "4px" }}>
                                  <span>{S(p?.pumpBarLabel)}</span>
                                  <span>{S(p?.pumpBarPct)}%</span>
                                </div>
                                <div style={{ height: "6px", borderRadius: "3px", background: "#E1EAE5", overflow: "hidden" }}><div style={{ height: "100%", width: `${A(p?.pumpBarPct)}%`, background: "#2C6A94", borderRadius: "3px" }} /></div>
                              </div>
                            </>}
                          </div>
                        </div>
                      </>}
                    </div>
                  </div>
                </React.Fragment>)}
              </div>
              <div style={{ marginTop: "12px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "14px 18px 8px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
                <div style={{ fontSize: "15px", fontWeight: "600" }}>AHLU (Accumulated Heat Load Units) — last 24 hours</div>
                <div id="ovAhlu" style={{ marginTop: "2px", minHeight: "210px" }} />
              </div>
            </>}
            {V.iWater && <>
              <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "20px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", flexWrap: "wrap", marginBottom: "6px" }}>
                    <div style={{ flex: "1 1 260px", minWidth: "220px" }}><div style={{ fontSize: "17px", fontWeight: "600", whiteSpace: "nowrap" }}>Water Flow</div></div>
                    <div style={{ marginLeft: "auto", position: "relative", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                      {L(V.wcRanges).map((r, i10) => <React.Fragment key={i10}>
                        <div data-act={r?.act} style={{ padding: "8px 13px", borderRadius: "7px", fontSize: "13px", cursor: "pointer", border: `1px solid ${A(r?.bd)}`, background: `${A(r?.bg)}`, color: `${A(r?.c)}`, fontWeight: `${A(r?.fw)}` }}>{S(r?.label)}</div>
                      </React.Fragment>)}
                      {V.dpWc && <>
                        <div style={{ position: "absolute", top: "100%", right: "0", marginTop: "8px", zIndex: "60", width: "340px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", boxShadow: "0 16px 40px rgba(12,32,26,.18)", padding: "18px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div style={{ fontSize: "15px", fontWeight: "600" }}>Custom Range</div>
                            <div style={{ marginLeft: "auto", fontSize: "12px", letterSpacing: ".06em", color: "#0C6B4C", background: "#EAF6F0", borderRadius: "20px", padding: "4px 10px" }}>{S(V.dp?.badge)}</div>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "14px" }}>
                            <div data-act="dp:edge|from" style={{ flex: "1 1 0", minWidth: "0", border: `1.5px solid ${A(V.dp?.fromBd)}`, background: `${A(V.dp?.fromBg)}`, borderRadius: "9px", padding: "10px 12px", cursor: "pointer" }}>
                              <div style={{ fontSize: "11.5px", letterSpacing: ".08em", color: "#7C8D88" }}>FROM</div>
                              <div style={{ fontSize: "14px", fontWeight: "500", marginTop: "3px" }}>{S(V.dp?.from)}</div>
                            </div>
                            <span style={{ fontSize: "15px", color: "#93A5A0" }}>→</span>
                            <div data-act="dp:edge|to" style={{ flex: "1 1 0", minWidth: "0", border: `1.5px solid ${A(V.dp?.toBd)}`, background: `${A(V.dp?.toBg)}`, borderRadius: "9px", padding: "10px 12px", cursor: "pointer" }}>
                              <div style={{ fontSize: "11.5px", letterSpacing: ".08em", color: "#7C8D88" }}>TO</div>
                              <div style={{ fontSize: "14px", fontWeight: "500", marginTop: "3px" }}>{S(V.dp?.to)}</div>
                            </div>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "18px" }}>
                            <div className="scp2y" data-act="dp:nav|-1" style={{ width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "7px", cursor: "pointer", color: "#33453F", fontSize: "16px" }}>‹</div>
                            <div style={{ flex: "1 1 auto", textAlign: "center", fontSize: "14.5px", fontWeight: "600" }}>{S(V.dp?.title)}</div>
                            <div className="scp2y" data-act="dp:nav|1" style={{ width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "7px", cursor: "pointer", color: "#33453F", fontSize: "16px" }}>›</div>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px", marginTop: "12px", fontSize: "12px", color: "#93A5A0", textAlign: "center" }}>
                            <div>S</div>
                            <div>M</div>
                            <div>T</div>
                            <div>W</div>
                            <div>T</div>
                            <div>F</div>
                            <div>S</div>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "6px" }}>
                            {L(V.dp?.weeks).map((w, i11) => <React.Fragment key={i11}>
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
                                {L(w?.days).map((d, i12) => <React.Fragment key={i12}>
                                  <div data-act={d?.act} style={{ height: "34px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13.5px", borderRadius: `${A(d?.rad)}`, cursor: `${A(d?.cur)}`, background: `${A(d?.bg)}`, color: `${A(d?.c)}`, fontWeight: `${A(d?.fw)}` }}>{S(d?.label)}</div>
                                </React.Fragment>)}
                              </div>
                            </React.Fragment>)}
                          </div>
                          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "16px" }}>
                            <div className="scp2y" data-act="dp:cancel" style={{ padding: "9px 16px", borderRadius: "8px", fontSize: "13.5px", color: "#6E827C", cursor: "pointer" }}>Cancel</div>
                            <div className="scp31" data-act="dp:apply" style={{ padding: "9px 18px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "600", color: "#fff", background: "#12855F", cursor: "pointer" }}>Apply</div>
                          </div>
                        </div>
                      </>}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {L(V.troughsList).map((t, i13) => <React.Fragment key={i13}>
                      <div style={{ border: "1px solid #EDF2F0", borderRadius: "10px", padding: "18px 18px 14px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                          <div style={{ border: "1px solid #E9EFED", borderRadius: "10px", padding: "14px" }}>
                            <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "8px" }}>
                              <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#33453F" }}>
                                {S(t?.name)}{" "}
                                <span style={{ fontWeight: "400", color: "#8A9A95" }}>{S(t?.runSub)}</span>
                              </div>
                              {t?.runDrilled && <>
                                <div className="scp38" data-act={`rundrill:back|${A(t?.runId)}`} style={{ marginLeft: "auto", fontSize: "12px", color: "#12855F", textDecoration: "underline", cursor: "pointer", whiteSpace: "nowrap" }}>← Back to all days</div>
                              </>}
                            </div>
                            <div id={t?.runId} style={{ minHeight: "300px" }} />
                            {t?.runDrilled && <>
                              <div style={{ fontSize: "11px", color: "#93A5A0", marginTop: "4px" }}>Showing exactly 24 hours of pump on/off status for this day.</div>
                            </>}
                          </div>
                          <div style={{ border: "1px solid #E9EFED", borderRadius: "10px", padding: "14px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                              <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#33453F" }}>
                                {S(t?.flowLabel)}{" "}
                                <span style={{ fontWeight: "400", color: "#8A9A95" }}>(L)</span>
                              </div>
                              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#93A5A0", whiteSpace: "nowrap" }}>
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2BB47C" }} />
                                {"Last sampling: "}{S(t?.lastSample)}
                              </div>
                            </div>
                            <div id={t?.barId} style={{ minHeight: "300px" }} />
                          </div>
                        </div>
                      </div>
                    </React.Fragment>)}
                  </div>
                </div>
              </div>
            </>}
            {V.iHist && <>
              <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "20px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", flexWrap: "wrap", marginBottom: "6px" }}>
                    <div style={{ flex: "1 1 260px", minWidth: "220px" }}>
                      <div style={{ fontSize: "17px", fontWeight: "600", whiteSpace: "nowrap" }}>Historical Heat Index</div>
                      <div style={{ fontSize: "13px", color: "#8A9A95", marginTop: "4px" }}>{S(V.histPeriod)}</div>
                    </div>
                    <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#6E827C", whiteSpace: "nowrap" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2BB47C", animation: "pulseDot 2s infinite" }} />
                        {"Last sampling: "}{S(V.lastSample)}
                      </span>
                      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                        {L(V.ranges).map((r, i14) => <React.Fragment key={i14}>
                          <div data-act={r?.act} style={{ padding: "8px 13px", borderRadius: "7px", fontSize: "13px", cursor: "pointer", border: `1px solid ${A(r?.bd)}`, background: `${A(r?.bg)}`, color: `${A(r?.c)}`, fontWeight: `${A(r?.fw)}` }}>{S(r?.label)}</div>
                        </React.Fragment>)}
                        {V.dpRange && <>
                          <div style={{ position: "absolute", top: "100%", right: "0", marginTop: "8px", zIndex: "60", width: "340px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", boxShadow: "0 16px 40px rgba(12,32,26,.18)", padding: "18px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                              <div style={{ fontSize: "15px", fontWeight: "600" }}>Custom Range</div>
                              <div style={{ marginLeft: "auto", fontSize: "12px", letterSpacing: ".06em", color: "#0C6B4C", background: "#EAF6F0", borderRadius: "20px", padding: "4px 10px" }}>{S(V.dp?.badge)}</div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "14px" }}>
                              <div data-act="dp:edge|from" style={{ flex: "1 1 0", minWidth: "0", border: `1.5px solid ${A(V.dp?.fromBd)}`, background: `${A(V.dp?.fromBg)}`, borderRadius: "9px", padding: "10px 12px", cursor: "pointer" }}>
                                <div style={{ fontSize: "11.5px", letterSpacing: ".08em", color: "#7C8D88" }}>FROM</div>
                                <div style={{ fontSize: "14px", fontWeight: "500", marginTop: "3px" }}>{S(V.dp?.from)}</div>
                              </div>
                              <span style={{ fontSize: "15px", color: "#93A5A0" }}>→</span>
                              <div data-act="dp:edge|to" style={{ flex: "1 1 0", minWidth: "0", border: `1.5px solid ${A(V.dp?.toBd)}`, background: `${A(V.dp?.toBg)}`, borderRadius: "9px", padding: "10px 12px", cursor: "pointer" }}>
                                <div style={{ fontSize: "11.5px", letterSpacing: ".08em", color: "#7C8D88" }}>TO</div>
                                <div style={{ fontSize: "14px", fontWeight: "500", marginTop: "3px" }}>{S(V.dp?.to)}</div>
                              </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "18px" }}>
                              <div className="scp2y" data-act="dp:nav|-1" style={{ width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "7px", cursor: "pointer", color: "#33453F", fontSize: "16px" }}>‹</div>
                              <div style={{ flex: "1 1 auto", textAlign: "center", fontSize: "14.5px", fontWeight: "600" }}>{S(V.dp?.title)}</div>
                              <div className="scp2y" data-act="dp:nav|1" style={{ width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "7px", cursor: "pointer", color: "#33453F", fontSize: "16px" }}>›</div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px", marginTop: "12px", fontSize: "12px", color: "#93A5A0", textAlign: "center" }}>
                              <div>S</div>
                              <div>M</div>
                              <div>T</div>
                              <div>W</div>
                              <div>T</div>
                              <div>F</div>
                              <div>S</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "6px" }}>
                              {L(V.dp?.weeks).map((w, i15) => <React.Fragment key={i15}>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
                                  {L(w?.days).map((d, i16) => <React.Fragment key={i16}>
                                    <div data-act={d?.act} style={{ height: "34px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13.5px", borderRadius: `${A(d?.rad)}`, cursor: `${A(d?.cur)}`, background: `${A(d?.bg)}`, color: `${A(d?.c)}`, fontWeight: `${A(d?.fw)}` }}>{S(d?.label)}</div>
                                  </React.Fragment>)}
                                </div>
                              </React.Fragment>)}
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "16px" }}>
                              <div className="scp2y" data-act="dp:cancel" style={{ padding: "9px 16px", borderRadius: "8px", fontSize: "13.5px", color: "#6E827C", cursor: "pointer" }}>Cancel</div>
                              <div className="scp31" data-act="dp:apply" style={{ padding: "9px 18px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "600", color: "#fff", background: "#12855F", cursor: "pointer" }}>Apply</div>
                            </div>
                          </div>
                        </>}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px", margin: "16px 0 20px" }}>
                    <div style={{ border: "1px solid #EDF2F0", borderRadius: "10px" }}>
                      <div style={{ background: "#12855F", color: "#fff", fontSize: "14px", fontWeight: "600", padding: "10px 14px", borderRadius: "10px 10px 0 0" }}>Heat load</div>
                      {L(V.heatLoadStats).map((s, i17) => <React.Fragment key={i17}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "10px", padding: "10px 14px", fontSize: "13px", background: `${A(s?.bg)}` }}>
                          <span style={{ color: "#55665F", fontWeight: "500" }}>{S(s?.k)}</span>
                          <span style={{ fontWeight: "600", whiteSpace: "nowrap", flex: "0 0 auto" }}>{S(s?.v)}</span>
                        </div>
                      </React.Fragment>)}
                    </div>
                    <div style={{ border: "1px solid #EDF2F0", borderRadius: "10px" }}>
                      <div style={{ background: "#12855F", color: "#fff", fontSize: "14px", fontWeight: "600", padding: "10px 14px", borderRadius: "10px 10px 0 0" }}>Thresholds</div>
                      {L(V.thresholdStats).map((s, i18) => <React.Fragment key={i18}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "10px", padding: "10px 14px", fontSize: "13px", background: `${A(s?.bg)}` }}>
                          <span style={{ color: "#55665F", fontWeight: "500" }}>{S(s?.k)}</span>
                          <span style={{ fontWeight: "600", whiteSpace: "nowrap", flex: "0 0 auto" }}>{S(s?.v)}</span>
                        </div>
                      </React.Fragment>)}
                    </div>
                  </div>
                  <div style={{ border: "1px solid #EDF2F0", borderRadius: "10px", padding: "18px 18px 14px" }}>
                    <div style={{ fontSize: "14.5px", fontWeight: "600" }}>HLI (Heat Load Index)</div>
                    <div style={{ fontSize: "13.5px", color: "#8A9A95", marginTop: "3px", marginBottom: "14px" }}>Hourly average · time (top) / date (bottom)</div>
                    <div id="histHli" style={{ minHeight: "352px" }} />
                    <div style={{ display: "flex", justifyContent: "center", gap: "34px", fontSize: "13px", color: "#33453F", marginTop: "14px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                        <span style={{ width: "26px", height: "3px", background: "#1F5C77" }} />
                        Mean HLI (Heat Load Index)
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                        <span style={{ width: "26px", height: "3px", background: "#1F9254" }} />
                        {"Lower threshold "}{S(V.hliLower)}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                        <span style={{ width: "26px", height: "3px", background: "#D9534F" }} />
                        {"Upper threshold "}{S(V.hliUpper)}
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "20px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
                  <div style={{ fontSize: "14.5px", fontWeight: "600" }}>AHLU (Accumulated Heat Load Units)</div>
                  <div style={{ fontSize: "13.5px", color: "#8A9A95", marginTop: "3px", marginBottom: "14px" }}>{"Rises above HLI "}{S(V.hliUpper)}{", falls below HLI "}{S(V.hliLower)}{", floored at zero · "}{S(V.hist?.ahluStatus)}{", peak "}{S(V.hist?.ahluPeak)}</div>
                  <div id="histAhlu" style={{ minHeight: "312px" }} />
                  <div style={{ display: "flex", justifyContent: "center", gap: "34px", fontSize: "13px", color: "#33453F", marginTop: "14px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                      <span style={{ width: "26px", height: "3px", background: "#5A3A8E" }} />
                      AHLU (Accumulated Heat Load Units)
                    </span>
                  </div>
                </div>
              </div>
            </>}
            {V.iFc && <>
              <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "20px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", flexWrap: "wrap", marginBottom: "6px" }}>
                    <div>
                      <div style={{ fontSize: "17px", fontWeight: "600" }}>{"Forecast heat index — "}{S(V.fcSel?.title)}</div>
                      <div style={{ fontSize: "13px", color: "#8A9A95", marginTop: "3px" }}>{S(V.fcSel?.sub)}</div>
                    </div>
                    <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                      {L(V.fcDateChips).map((r, i19) => <React.Fragment key={i19}>
                        <div data-act={r?.act} style={{ padding: "8px 13px", borderRadius: "7px", fontSize: "13px", cursor: "pointer", border: `1px solid ${A(r?.bd)}`, background: `${A(r?.bg)}`, color: `${A(r?.c)}`, fontWeight: `${A(r?.fw)}` }}>{S(r?.label)}</div>
                      </React.Fragment>)}
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px", margin: "16px 0 20px" }}>
                    <div style={{ border: "1px solid #EDF2F0", borderRadius: "10px" }}>
                      <div style={{ background: "#12855F", color: "#fff", fontSize: "14px", fontWeight: "600", padding: "10px 14px", borderRadius: "10px 10px 0 0" }}>Heat load</div>
                      {L(V.fcHeatLoadStats).map((s, i20) => <React.Fragment key={i20}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "10px", padding: "10px 14px", fontSize: "13px", background: `${A(s?.bg)}` }}>
                          <span style={{ color: "#55665F", fontWeight: "500" }}>{S(s?.k)}</span>
                          <span style={{ fontWeight: "600", whiteSpace: "nowrap", flex: "0 0 auto" }}>{S(s?.v)}</span>
                        </div>
                      </React.Fragment>)}
                    </div>
                    <div style={{ border: "1px solid #EDF2F0", borderRadius: "10px" }}>
                      <div style={{ background: "#12855F", color: "#fff", fontSize: "14px", fontWeight: "600", padding: "10px 14px", borderRadius: "10px 10px 0 0" }}>Thresholds</div>
                      {L(V.fcThresholdStats).map((s, i21) => <React.Fragment key={i21}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "10px", padding: "10px 14px", fontSize: "13px", background: `${A(s?.bg)}` }}>
                          <span style={{ color: "#55665F", fontWeight: "500" }}>{S(s?.k)}</span>
                          <span style={{ fontWeight: "600", whiteSpace: "nowrap", flex: "0 0 auto" }}>{S(s?.v)}</span>
                        </div>
                      </React.Fragment>)}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ border: "1px solid #EDF2F0", borderRadius: "10px", padding: "18px 18px 14px" }}>
                      <div style={{ fontSize: "14.5px", fontWeight: "600" }}>HLI (Heat Load Index)</div>
                      <div style={{ fontSize: "13.5px", color: "#8A9A95", marginTop: "3px", marginBottom: "14px" }}>{"Hourly forecast · "}{S(V.providerShort)}{" inputs for "}{S(V.siteLocale)}</div>
                      <div id="fcHli" style={{ minHeight: "352px" }} />
                      <div style={{ display: "flex", justifyContent: "center", gap: "34px", fontSize: "13px", color: "#33453F", marginTop: "14px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                          <span style={{ width: "26px", height: "3px", background: "#3E8E7E" }} />
                          Forecast HLI (Heat Load Index)
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                          <span style={{ width: "26px", height: "3px", background: "#1F9254" }} />
                          {"Lower threshold "}{S(V.hliLower)}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                          <span style={{ width: "26px", height: "3px", background: "#D9534F" }} />
                          {"Upper threshold "}{S(V.hliUpper)}
                        </span>
                      </div>
                    </div>
                    <div style={{ border: "1px solid #EDF2F0", borderRadius: "10px", padding: "18px 18px 14px" }}>
                      <div style={{ fontSize: "14.5px", fontWeight: "600" }}>AHLU (Accumulated Heat Load Units)</div>
                      <div style={{ fontSize: "13.5px", color: "#8A9A95", marginTop: "3px", marginBottom: "14px" }}>{"Rises above HLI "}{S(V.hliUpper)}{", falls below HLI "}{S(V.hliLower)}, floored at zero · projected</div>
                      <div id="fcAhlu" style={{ minHeight: "312px" }} />
                      <div style={{ display: "flex", justifyContent: "center", gap: "34px", fontSize: "13px", color: "#33453F", marginTop: "14px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                          <span style={{ width: "26px", height: "3px", background: "#8E7BC2" }} />
                          Projected AHLU (Accumulated Heat Load Units)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>}
            {V.wStations && <WStations V={V} />}
            {V.wForecast && <WForecast V={V} />}
            {V.wHist && <>
              <div style={{ marginTop: "18px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "64px 24px", textAlign: "center", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
                <div style={{ fontSize: "16px", fontWeight: "600", color: "#55665F" }}>Historical</div>
                <div style={{ fontSize: "13.5px", color: "#8A9A95", marginTop: "6px" }}>No historical weather data to display yet.</div>
              </div>
            </>}
            {V.waPumps && <>
              <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "270px minmax(0, 1fr)", gap: "16px", alignItems: "start" }}>
                  <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "20px", textAlign: "center", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>Last 15 min water flow</div>
                    <svg viewBox="0 0 200 120" style={{ width: "100%", height: "130px", marginTop: "12px" }}>
                      <path d="M 20 108 A 80 80 0 0 1 180 108" fill="none" stroke="#EDF2F0" strokeWidth="18" strokeLinecap="round" />
                      <path d="M 20 108 A 80 80 0 0 1 180 108" fill="none" stroke="#2E8FCB" strokeWidth="18" strokeLinecap="round" strokeDasharray={V.gauge?.dash} />
                      <line x1="100" y1="108" x2={V.gauge?.x} y2={V.gauge?.y} stroke="#33453F" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="100" cy="108" r="6" fill="#33453F" />
                    </svg>
                    <div style={{ fontSize: "30px", fontWeight: "600", marginTop: "4px" }}>{S(V.gauge?.value)}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#93A5A0", marginTop: "6px" }}>
                      <span>0</span>
                      <span>2k</span>
                    </div>
                  </div>
                  <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "20px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                      <div style={{ fontSize: "16px", fontWeight: "600" }}>Water volume (L)</div>
                      <div style={{ marginLeft: "auto", display: "flex", gap: "6px" }}>
                        {L(V.ranges).map((r, i41) => <React.Fragment key={i41}>
                          <div data-act={r?.act} style={{ padding: "7px 12px", borderRadius: "7px", fontSize: "13px", cursor: "pointer", border: `1px solid ${A(r?.bd)}`, background: `${A(r?.bg)}`, color: `${A(r?.c)}` }}>{S(r?.label)}</div>
                        </React.Fragment>)}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "9px" }}>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "200px", fontSize: "12.5px", color: "#93A5A0", textAlign: "right", width: "34px" }}>
                        <span>1200</span>
                        <span>900</span>
                        <span>600</span>
                        <span>300</span>
                        <span>0</span>
                      </div>
                      <div style={{ flex: "1 1 auto" }}>
                        <svg viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ width: "100%", height: "200px", display: "block" }}>
                          <rect x="0" y="0" width="1000" height="200" fill="#FCFDFD" />
                          <line x1="0" y1="50" x2="1000" y2="50" stroke="#E7EDEB" />
                          <line x1="0" y1="100" x2="1000" y2="100" stroke="#E7EDEB" />
                          <line x1="0" y1="150" x2="1000" y2="150" stroke="#E7EDEB" />
                          <polyline points={V.waterVol?.area} fill="rgba(75,156,211,.28)" stroke="none" />
                          <polyline points={V.waterVol?.line} fill="none" stroke="#2E8FCB" strokeWidth="1.5" />
                        </svg>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#93A5A0", marginTop: "8px" }}>
                          {L(V.waterVol?.labels).map((l, i42) => <React.Fragment key={i42}>
                            <span>{S(l)}</span>
                          </React.Fragment>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "20px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>Cumulative water (L)</div>
                    <div style={{ marginLeft: "auto", fontSize: "13px", color: "#8A9A95" }}>{"Meter lifetime total · "}{S(V.cumTotal)}</div>
                  </div>
                  <div style={{ display: "flex", gap: "9px" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "190px", fontSize: "12.5px", color: "#93A5A0", textAlign: "right", width: "58px" }}>
                      {L(V.cumulative?.axis).map((a, i43) => <React.Fragment key={i43}>
                        <span>{S(a)}</span>
                      </React.Fragment>)}
                    </div>
                    <div style={{ flex: "1 1 auto" }}>
                      <svg viewBox="0 0 1000 190" preserveAspectRatio="none" style={{ width: "100%", height: "190px", display: "block" }}>
                        <rect x="0" y="0" width="1000" height="190" fill="#FCFDFD" />
                        <line x1="0" y1="47" x2="1000" y2="47" stroke="#E7EDEB" />
                        <line x1="0" y1="95" x2="1000" y2="95" stroke="#E7EDEB" />
                        <line x1="0" y1="142" x2="1000" y2="142" stroke="#E7EDEB" />
                        <polyline points={V.cumulative?.area} fill="rgba(75,156,211,.22)" stroke="none" />
                        <polyline points={V.cumulative?.line} fill="none" stroke="#2E8FCB" strokeWidth="2" />
                      </svg>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#93A5A0", marginTop: "8px" }}>
                        {L(V.waterVol?.labels).map((l, i44) => <React.Fragment key={i44}>
                          <span>{S(l)}</span>
                        </React.Fragment>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>}
            {V.waLocked && <>
              <div style={{ marginTop: "18px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "60px 20px", textAlign: "center" }}>
                <div style={{ fontSize: "16px", fontWeight: "600", color: "#55665F" }}>{S(V.lockedTitle)}</div>
                <div style={{ fontSize: "13.5px", color: "#8A9A95", marginTop: "6px" }}>Not enabled for this site.</div>
              </div>
            </>}
            {V.iConfig && <>
              <div style={{ marginTop: "18px", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <div style={{ fontSize: "15px", fontWeight: "600", color: "#1E2A26" }}>
                  {"Pens "}
                  <span style={{ fontWeight: "400", color: "#8A9A95" }}>({S(V.penCount)})</span>
                </div>
                <button className="scp31" data-act="pcfg:add" style={{ whiteSpace: "nowrap", marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px", border: "none", background: "#12855F", color: "#fff", borderRadius: "8px", padding: "10px 16px", fontSize: "13.5px", fontWeight: "600", cursor: "pointer", fontFamily: "Poppins, sans-serif" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px" }} fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                  Add Pen
        
                </button>
              </div>
              <div style={{ marginTop: "14px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "16px", alignItems: "start" }}>
                {L(V.cfgPens).map((p, i45) => <React.Fragment key={i45}>
                  <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "18px 18px 16px", boxShadow: "0 1px 2px rgba(16,40,34,.04)", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "10px", paddingBottom: "12px", borderBottom: "1px solid #EEF3F1" }}>
                      <div style={{ fontSize: "17px", fontWeight: "600" }}>{S(p?.name)}</div>
                      <div style={{ fontSize: "12px", color: "#8A9A95" }}>{S(p?.meta)}</div>
                      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
                        <div className="scp2y" data-act={p?.editAct} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#12855F", border: "1px solid #CDE5DA", borderRadius: "7px", padding: "5px 11px", cursor: "pointer" }}>
                          <svg viewBox="0 0 24 24" style={{ width: "13px", height: "13px" }} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4l10-10a2.5 2.5 0 0 0-3.5-3.5L4.5 16.5z" /></svg>
                          Edit
                
                        </div>
                        <div className="scp39" data-act={p?.delAct} style={{ fontSize: "12px", color: "#A0564F", border: "1px solid #EFD9D6", borderRadius: "7px", padding: "5px 10px", cursor: "pointer" }}>Remove</div>
                      </div>
                    </div>
                    <div style={{ marginTop: "14px", fontSize: "11px", letterSpacing: ".06em", color: "#93A5A0" }}>PEN METRICS</div>
                    <div style={{ marginTop: "8px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px" }}>
                      <div style={{ border: "1px solid #E9EFED", borderRadius: "9px", padding: "9px 11px", minWidth: "0" }}>
                        <div style={{ fontSize: "11px", color: "#93A5A0" }}>Pen Identifier / ID</div>
                        <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#1E2A26", marginTop: "3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(p?.nameVal)}</div>
                      </div>
                      <div style={{ border: "1px solid #E9EFED", borderRadius: "9px", padding: "9px 11px", minWidth: "0" }}>
                        <div style={{ fontSize: "11px", color: "#93A5A0" }}>Pen Area Size (m²)</div>
                        <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#1E2A26", marginTop: "3px" }}>{S(p?.capVal)}</div>
                      </div>
                      <div style={{ border: "1px solid #E9EFED", borderRadius: "9px", padding: "9px 11px", minWidth: "0" }}>
                        <div style={{ fontSize: "11px", color: "#93A5A0" }}>Pen Head Count (animals)</div>
                        <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#1E2A26", marginTop: "3px" }}>{S(p?.headVal)}</div>
                      </div>
                    </div>
                    <div style={{ marginTop: "18px", fontSize: "11px", letterSpacing: ".06em", color: "#93A5A0" }}>DEVICES</div>
                    <div style={{ marginTop: "8px", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {L(p?.devices).map((d, i46) => <React.Fragment key={i46}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12.5px", padding: "7px 0", borderBottom: "1px solid #F4F7F6" }}>
                          <div style={{ flex: "0 0 132px", color: "#7C8D88" }}>{S(d?.label)}</div>
                          <div style={{ flex: "1 1 auto", minWidth: "0", color: "#33453F", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(d?.value)}</div>
                        </div>
                      </React.Fragment>)}
                    </div>
                    <div style={{ marginTop: "18px", fontSize: "11px", letterSpacing: ".06em", color: "#93A5A0" }}>HLI THRESHOLD INPUTS</div>
                    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.25fr) 78px", gap: "0 12px", alignItems: "end", marginTop: "12px", paddingBottom: "8px", borderBottom: "1px solid #EEF3F1", fontSize: "11px", letterSpacing: ".06em", color: "#93A5A0" }}>
                      <div>SETTING</div>
                      <div>OPTIONS</div>
                      <div style={{ textAlign: "right" }}>ADJUSTMENT</div>
                    </div>
                    {L(p?.fields).map((f, i47) => <React.Fragment key={i47}>
                      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.25fr) 78px", gap: "0 12px", alignItems: "center", padding: "7px 0", borderBottom: "1px solid #F4F7F6" }}>
                        <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".03em", color: "#33453F", textTransform: "uppercase", lineHeight: "1.35" }}>{S(f?.label)}</div>
                        <div style={{ minWidth: "0", fontSize: "13px", color: "#33453F", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(f?.value)}</div>
                        <div style={{ textAlign: "right", fontSize: "14px", fontWeight: "600", color: `${A(f?.adjC)}` }}>{S(f?.adj)}</div>
                      </div>
                    </React.Fragment>)}
                    <div style={{ marginTop: "14px", background: "#F3FAF7", border: "1px solid #D9EDE4", borderRadius: "10px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#33453F" }}>
                        <div>Base upper threshold</div>
                        <div style={{ marginLeft: "auto", fontWeight: "600" }}>{S(p?.base)}</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#33453F" }}>
                        <div>Total adjustments</div>
                        <div style={{ marginLeft: "auto", fontWeight: "600", color: "#12855F" }}>{S(p?.total)}</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "8px", borderTop: "1px solid #D9EDE4" }}>
                        <div style={{ fontSize: "13px", fontWeight: "600", color: "#0C6B4C" }}>HLI upper threshold</div>
                        <div style={{ marginLeft: "auto", fontSize: "18px", fontWeight: "600", color: "#0C6B4C" }}>{S(p?.upper)}</div>
                      </div>
                    </div>
                    <div style={{ fontSize: "11.5px", color: "#8A9A95", marginTop: "12px", lineHeight: "1.5" }}>Aeration Pump operating mode is set on the hardware selector switch at the pump.</div>
                  </div>
                </React.Fragment>)}
              </div>
            </>}
            {V.penFormOpen && <>
              <div style={{ position: "fixed", inset: "0", background: "rgba(12,32,26,.38)", zIndex: "60", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
                <div data-act="pcfg:close" style={{ position: "absolute", inset: "0" }} />
                <div style={{ position: "relative", width: "880px", maxWidth: "100%", maxHeight: "100%", background: "#fff", borderRadius: "14px", boxShadow: "0 24px 60px rgba(12,32,26,.28)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "20px 24px 18px", background: "#F0F8EE", borderBottom: "1px solid #DCEBD8" }}>
                    <div>
                      <div style={{ fontSize: "18px", fontWeight: "600", color: "#1E2A26" }}>{S(V.pf?.title)}</div>
                      <div style={{ fontSize: "12.5px", color: "#8A9A95", marginTop: "3px" }}>{S(V.pf?.sub)}</div>
                    </div>
                    <div className="scp32" data-act="pcfg:close" style={{ marginLeft: "auto", flex: "0 0 30px", width: "30px", height: "30px", borderRadius: "8px", border: "1px solid #E4EAE8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: "#6E827C", cursor: "pointer" }}>×</div>
                  </div>
                  <div style={{ flex: "1 1 auto", minHeight: "0", overflowY: "auto", padding: "18px 24px 170px", background: "#F8FBF7", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {V.pf?.s1 && <>
                      <div style={{ background: "#fff", border: "1px solid #E2EEE3", borderRadius: "12px", padding: "16px 18px 18px" }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", paddingBottom: "12px", marginBottom: "14px", borderBottom: "1px solid #EDF4EC" }}>
                          <div style={{ fontSize: "12.5px", fontWeight: "600", color: "#0C6B4C" }}>Pen metrics</div>
                          <div style={{ fontSize: "11.5px", color: "#93A5A0" }}>Identity and size</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr) minmax(0,1fr)", gap: "14px" }}>
                          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "11.5px", fontWeight: "500", color: "#5E7169", minWidth: "0" }}>
                            Pen Identifier / ID *
                
                            <input className="scp3a" value={V.pf?.label ?? ""} onChange={V.pf?.onName} placeholder="e.g. Pen 4" style={{ border: "1px solid #DCE7E1", borderRadius: "9px", padding: "0 12px", height: "40px", fontSize: "13.5px", color: "#1E2A26", fontFamily: "Poppins, sans-serif", minWidth: "0", background: "#fff" }} />
                          </label>
                          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "11.5px", fontWeight: "500", color: "#5E7169", minWidth: "0" }}>
                            Head count (animals)
                
                            <input className="scp3a" value={V.pf?.head ?? ""} onChange={V.pf?.onHead} inputMode="numeric" placeholder="180" style={{ border: "1px solid #DCE7E1", borderRadius: "9px", padding: "0 12px", height: "40px", fontSize: "13.5px", color: "#1E2A26", fontFamily: "Poppins, sans-serif", minWidth: "0", background: "#fff" }} />
                          </label>
                          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "11.5px", fontWeight: "500", color: "#5E7169", minWidth: "0" }}>
                            Area size (m²)
                
                            <input className="scp3a" value={V.pf?.cap ?? ""} onChange={V.pf?.onCap} inputMode="numeric" placeholder="2000" style={{ border: "1px solid #DCE7E1", borderRadius: "9px", padding: "0 12px", height: "40px", fontSize: "13.5px", color: "#1E2A26", fontFamily: "Poppins, sans-serif", minWidth: "0", background: "#fff" }} />
                          </label>
                        </div>
                      </div>
                    </>}
                    {V.pf?.s3 && <>
                      <div style={{ background: "#fff", border: "1px solid #E2EEE3", borderRadius: "12px", padding: "16px 18px 18px" }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", paddingBottom: "12px", marginBottom: "14px", borderBottom: "1px solid #EDF4EC" }}>
                          <div style={{ fontSize: "12.5px", fontWeight: "600", color: "#0C6B4C" }}>Animal profile</div>
                          <div style={{ fontSize: "11.5px", color: "#93A5A0" }}>Sets the pen's HLI upper threshold</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "14px" }}>
                          {L(V.pf?.fields).map((f, i48) => <React.Fragment key={i48}>
                            <div style={{ minWidth: "0" }}>
                              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "6px" }}>
                                <div style={{ flex: "1 1 auto", minWidth: "0", fontSize: "11.5px", fontWeight: "500", color: "#5E7169", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(f?.label)}</div>
                                <div style={{ flex: "0 0 auto", fontSize: "12px", fontWeight: "600", color: `${A(f?.adjC)}` }}>{S(f?.adj)}</div>
                              </div>
                              <div style={{ position: "relative", minWidth: "0" }}>
                                <div className="scp36" data-act={f?.act} style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: "0", height: "40px", border: `1px solid ${A(f?.bd)}`, background: `${A(f?.bg)}`, borderRadius: "9px", padding: "0 12px", fontSize: "13.5px", color: `${A(f?.vc)}`, cursor: "pointer", whiteSpace: "nowrap" }}>
                                  <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{S(f?.value)}</span>
                                  <span style={{ marginLeft: "auto", color: "#9AAAA5" }}>▾</span>
                                </div>
                                {f?.open && <>
                                  <div style={{ position: "absolute", top: "100%", left: "0", right: "0", zIndex: "25", marginTop: "3px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "9px", boxShadow: "0 10px 26px rgba(12,32,26,.16)", padding: "6px", display: "flex", flexDirection: "column", gap: "2px", maxHeight: "150px", overflowY: "auto" }}>
                                    {L(f?.options).map((o, i49) => <React.Fragment key={i49}>
                                      <div className="scp2y" data-act={o?.act} style={{ display: "flex", gap: "10px", padding: "9px 11px", borderRadius: "7px", fontSize: "13px", cursor: "pointer", background: `${A(o?.bg)}`, color: `${A(o?.c)}`, fontWeight: `${A(o?.fw)}` }}>
                                        {S(o?.label)}
                                        <span style={{ marginLeft: "auto", color: `${A(o?.adjC)}` }}>{S(o?.adj)}</span>
                                      </div>
                                    </React.Fragment>)}
                                  </div>
                                </>}
                              </div>
                            </div>
                          </React.Fragment>)}
                        </div>
                      </div>
                    </>}
                    <div style={{ background: "#fff", border: "1px solid #E2EEE3", borderRadius: "12px", padding: "16px 18px 18px" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "10px", paddingBottom: "12px", marginBottom: "14px", borderBottom: "1px solid #EDF4EC" }}>
                        <div style={{ fontSize: "12.5px", fontWeight: "600", color: "#0C6B4C" }}>Allocate devices to pen</div>
                        <div style={{ fontSize: "11.5px", color: "#93A5A0" }}>Devices added to this pen</div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {L(V.pf?.selectedDevices).map((d, i50) => <React.Fragment key={i50}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", border: "1px solid #DCE7E1", borderRadius: "9px", padding: "9px 12px" }}>
                            <span style={{ flex: "1 1 auto", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "13.5px", color: "#1E2A26" }}>{S(d?.label)}</span>
                            {d?.isPump && <>
                              <span style={{ flex: "0 0 auto", fontSize: "11.5px", color: "#7C8D88", whiteSpace: "nowrap" }}>
                                {"Status "}
                                <span style={{ fontWeight: "600", color: `${A(d?.statusC)}` }}>{S(d?.statusLabel)}</span>
                              </span>
                              <div data-act={d?.toggleAct} title="Toggle pump on/off" style={{ flex: "0 0 auto", width: "34px", height: "20px", borderRadius: "10px", background: `${A(d?.toggleBg)}`, position: "relative", cursor: "pointer" }}><div style={{ position: "absolute", top: "2px", left: `${A(d?.knobLeft)}`, width: "16px", height: "16px", borderRadius: "50%", background: "#fff", transition: "left .15s" }} /></div>
                            </>}
                            <div className="scp3b" data-act={d?.removeAct} title="Remove device" style={{ flex: "0 0 auto", fontSize: "15px", color: "#A0564F", cursor: "pointer", lineHeight: "1" }}>×</div>
                          </div>
                        </React.Fragment>)}
                        <div style={{ position: "relative" }}>
                          <div className="scp3c" data-act="dd:pf.dev" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "1.5px dashed #BFDCCB", borderRadius: "9px", padding: "11px", fontSize: "13px", fontWeight: "600", color: "#12855F", cursor: "pointer" }}>
                            <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                            {S(V.pf?.addDeviceLabel)}
                          </div>
                          {V.pf?.deviceOpen && <>
                            <div style={{ position: "absolute", top: "100%", left: "0", right: "0", zIndex: "25", marginTop: "4px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "9px", boxShadow: "0 14px 34px rgba(12,32,26,.2)", padding: "8px", display: "flex", flexDirection: "column", gap: "6px" }}>
                              <input className="scp3a" value={V.pf?.devSearch ?? ""} onChange={V.pf?.onDevSearch} placeholder="Search devices…" style={{ border: "1px solid #DCE7E1", borderRadius: "8px", padding: "0 10px", height: "36px", fontSize: "13px", color: "#1E2A26", fontFamily: "Poppins, sans-serif", background: "#F8FBF7" }} />
                              <div style={{ display: "flex", flexDirection: "column", gap: "2px", maxHeight: "260px", overflowY: "auto" }}>
                                {L(V.pf?.deviceOptions).map((o, i51) => <React.Fragment key={i51}>
                                  <label className="scp2y" data-act={o?.act} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 11px", borderRadius: "7px", cursor: "pointer" }}>
                                    <span style={{ flex: "0 0 18px", width: "18px", height: "18px", borderRadius: "5px", border: `1.5px solid ${A(o?.boxBd)}`, background: `${A(o?.boxBg)}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      {o?.checked && <>
                                        <svg viewBox="0 0 24 24" style={{ width: "12px", height: "12px" }} fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                                      </>}
                                    </span>
                                    <span style={{ minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "13px", color: "#1E2A26" }}>{S(o?.label)}</span>
                                  </label>
                                </React.Fragment>)}
                              </div>
                            </div>
                          </>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ position: "sticky", bottom: "0", padding: "14px 24px", borderTop: "1px solid #DCEBD8", background: "#F0F8EE", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", borderRadius: "0 0 14px 14px" }}>
                    {V.pf?.s3 && <>
                      <div style={{ fontSize: "13px", color: "#33453F", whiteSpace: "nowrap" }}>
                        {"HLI upper threshold "}
                        <span style={{ fontWeight: "600", color: "#0C6B4C", fontSize: "16px", marginLeft: "6px" }}>{S(V.pf?.upper)}</span>
                        {" "}
                        <span style={{ color: "#8A9A95" }}>({S(V.pf?.base)}{" base "}{S(V.pf?.total)})</span>
                      </div>
                    </>}
                    <div className="scp38" data-act="pcfg:draft" style={{ fontSize: "13px", color: "#12855F", textDecoration: "underline", cursor: "pointer", whiteSpace: "nowrap" }}>Save &amp; finish later</div>
                    <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px" }}>
                      {V.pf?.s3 && <>
                        <div className="scp31" data-act="pcfg:save" style={{ fontSize: "13.5px", fontWeight: "600", color: "#fff", background: "#12855F", borderRadius: "8px", padding: "10px 22px", cursor: "pointer", whiteSpace: "nowrap" }}>{S(V.pf?.saveLabel)}</div>
                      </>}
                    </div>
                  </div>
                </div>
              </div>
            </>}
            {V.infoOpen && <>
              <div style={{ position: "fixed", inset: "0", background: "rgba(12,32,26,.38)", zIndex: "50", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
                <div data-act="info:close" style={{ position: "absolute", inset: "0" }} />
                <div style={{ position: "relative", width: "820px", maxWidth: "100%", maxHeight: "100%", overflowX: "hidden", overflowY: "auto", background: "#fff", borderRadius: "14px", boxShadow: "0 24px 60px rgba(12,32,26,.28)", padding: "28px 30px 30px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <img src="assets/hli-4199fd2e.png" alt="Meat &amp; Livestock Australia" style={{ flex: "0 0 84px", width: "84px", height: "auto", imageRendering: "-webkit-optimize-contrast" }} />
                    <div style={{ flex: "1 1 auto", minWidth: "0", fontSize: "16px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Heat Load Index (HLI) &amp; Accumulated Heat Load Units (AHLU)</div>
                    <div className="scp32" data-act="info:close" style={{ marginLeft: "auto", flex: "0 0 30px", width: "30px", height: "30px", borderRadius: "8px", border: "1px solid #E4EAE8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: "#6E827C", cursor: "pointer" }}>×</div>
                  </div>
                  <div style={{ marginTop: "20px", fontSize: "14px", color: "#33453F", lineHeight: "1.65" }}>Developed by Meat &amp; Livestock Australia (MLA) to measure environmental heat stress on feedlot cattle.</div>
                  <div style={{ marginTop: "18px", fontSize: "13.5px", fontWeight: "600", color: "#1E2A26" }}>HLI Formula</div>
                  <div style={{ marginTop: "6px", fontSize: "14px", color: "#33453F", lineHeight: "1.65" }}>Uses Black Globe temperature (BG), relative humidity (RH), and wind speed (WS):</div>
                  <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ border: "1px solid #EEF3F1", borderRadius: "10px", padding: "12px 14px" }}>
                      <div style={{ fontSize: "13px", color: "#7C8D88" }}>BG &lt; 25°C</div>
                      <div style={{ marginTop: "6px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: "13px", color: "#1E2A26" }}>HLI = 10.66 + (0.28 × RH) + (1.30 × BG) − WS</div>
                    </div>
                    <div style={{ border: "1px solid #EEF3F1", borderRadius: "10px", padding: "12px 14px" }}>
                      <div style={{ fontSize: "13px", color: "#7C8D88" }}>BG ≥ 25°C</div>
                      <div style={{ marginTop: "6px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: "13px", color: "#1E2A26" }}>
                        HLI = 8.62 + (0.38 × RH) + (1.55 × BG) − (0.5 × WS) + e
                        <span style={{ fontSize: "10.5px", verticalAlign: "super" }}>(2.4 − WS)</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "8px", fontSize: "12.5px", color: "#7C8D88", lineHeight: "1.6" }}>(e = exponential function; RH as whole number, e.g. 45 not 0.45)</div>
                  <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ fontSize: "12px", letterSpacing: ".06em", color: "#93A5A0" }}>MLA HEAT STRESS CLASSIFICATION</div>
                    {L(V.hliBands).map((b, i52) => <React.Fragment key={i52}>
                      <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", border: "1px solid #EEF3F1", borderRadius: "10px", padding: "10px 14px" }}>
                        <div style={{ flex: "0 0 110px", fontSize: "13px", fontWeight: "600", color: "#1E2A26" }}>{S(b?.range)}</div>
                        <div style={{ flex: "0 0 auto", fontSize: "11.5px", fontWeight: "600", borderRadius: "20px", padding: "4px 11px", background: `${A(b?.bg)}`, color: `${A(b?.c)}` }}>{S(b?.label)}</div>
                        <div style={{ flex: "1 1 240px", minWidth: "0", fontSize: "12.5px", color: "#55665F" }}>{S(b?.action)}</div>
                      </div>
                    </React.Fragment>)}
                  </div>
                  <div style={{ marginTop: "20px", fontSize: "13.5px", fontWeight: "600", color: "#1E2A26" }}>Accumulated Heat Load Units (AHLU)</div>
                  <div style={{ marginTop: "6px", fontSize: "14px", color: "#33453F", lineHeight: "1.65" }}>It’s calculated hour by hour: every hour, AHLU is worked out using that hour’s HLI and the HLI threshold. For every hour the HLI is above the threshold, heat accumulates in the animal, and this keeps rising without intervention if conditions don’t change.</div>
                  <div style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px solid #EEF3F1" }}>
                    <div style={{ fontSize: "12.5px", color: "#55665F", lineHeight: "1.55" }}>
                      {"HLI and AHLU are calculated using the method developed by "}
                      <strong style={{ fontWeight: "600" }}>Meat &amp; Livestock Australia</strong>
                      . Thresholds and adjustment tables follow MLA's published values.
                    </div>
                  </div>
                </div>
              </div>
            </>}
          </main>
        </div>
      </div>
    </div>
  );
}
