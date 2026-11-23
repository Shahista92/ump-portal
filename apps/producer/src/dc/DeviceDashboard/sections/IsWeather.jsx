import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';
import IsTabDash from './IsTabDash.jsx';
import ShowTzGrid from './ShowTzGrid.jsx';
export default function IsWeather({ V }) {
  return (
    <>
    <div style={{ padding: `${A(V.wxPad)}`, display: "flex", flexDirection: "column", gap: "14px", fontFamily: "'Roboto', ui-sans-serif, system-ui, sans-serif", background: "#F3F6F4" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "14px" }}>
        {V.wxStripOn && <>
          <div style={{ display: "flex", gap: "4px", padding: "0 20px", flexWrap: "wrap", background: "#fff", border: "1px solid #EDF0EE", borderRadius: "10px" }}>
            {L(V.wxTabList).map((t, i27) => <React.Fragment key={i27}>
              <span className="scp2q" onClick={t?.go} style={{ display: "flex", alignItems: "center", gap: "7px", padding: "13px 14px 11px", fontSize: "13px", fontWeight: `${A(t?.weight)}`, color: `${A(t?.segInk)}`, borderBottom: `2.5px solid ${A(t?.line)}`, cursor: "pointer", whiteSpace: "nowrap" }}>
                {t?.badge && <>
                  <span style={{ width: "22px", height: "22px", flex: "0 0 22px", borderRadius: "6px", background: "#1E8E3E", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5" /></svg></span>
                </>}
                {t?.plain && <>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d={t?.icon} /></svg>
                </>}
                {S(t?.label)}
              </span>
            </React.Fragment>)}
          </div>
        </>}
        {V.isTabDash && <IsTabDash V={V} />}
        {V.tabRangeShow && <>
          <div style={{ display: "flex", justifyContent: "flex-end", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "2px", background: "#fff", border: "1px solid #E3EAE5", borderRadius: "12px", padding: "4px", boxShadow: "0 1px 3px rgba(16,24,40,.08), 0 1px 2px rgba(16,24,40,.04)" }}>
              {L(V.tabRanges).map((rg, i50) => <React.Fragment key={i50}>
                <button onClick={rg?.select} style={{ font: "inherit", fontSize: "12.5px", fontWeight: "600", border: "none", cursor: "pointer", borderRadius: "9px", padding: "8px 16px", background: `${A(rg?.bg)}`, color: `${A(rg?.color)}` }}>{S(rg?.label)}</button>
              </React.Fragment>)}
              <button onClick={V.toggleTzCustom} style={{ font: "inherit", fontSize: "12.5px", fontWeight: "600", border: "none", cursor: "pointer", borderRadius: "9px", padding: "8px 16px", display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap", background: `${A(V.tzCustomBg)}`, color: `${A(V.tzCustomColor)}` }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" /></svg>
                {S(V.tzCustomLabel)}
              </button>
            </div>
            {V.tzCustomOpen && <>
              <div style={{ position: "absolute", top: "52px", right: "0", width: "260px", background: "#fff", border: "1px solid #E3EAE5", borderRadius: "14px", boxShadow: "0 16px 36px rgba(16,24,40,.14)", padding: "14px", zIndex: "30", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "700", letterSpacing: ".4px", color: "#5B6B61" }}>CUSTOM RANGE</div>
                <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12.5px", color: "#3F4B45" }}>
                  From
              
                  <input type="date" value={V.tzCustomFrom ?? ""} min={V.tzCustomMin} max={V.tzCustomMax} onChange={V.onTzCustomFrom} style={{ font: "inherit", fontSize: "12.5px", border: "1px solid #DCE3DF", borderRadius: "8px", padding: "7px 9px", color: "#26332C" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12.5px", color: "#3F4B45" }}>
                  To
              
                  <input type="date" value={V.tzCustomTo ?? ""} min={V.tzCustomMin} max={V.tzCustomMax} onChange={V.onTzCustomTo} style={{ font: "inherit", fontSize: "12.5px", border: "1px solid #DCE3DF", borderRadius: "8px", padding: "7px 9px", color: "#26332C" }} />
                </label>
                <button onClick={V.applyTzCustom} style={{ font: "inherit", fontSize: "12.5px", fontWeight: "700", color: "#fff", background: "#0E7C3A", border: "none", borderRadius: "9px", padding: "9px 12px", cursor: "pointer" }}>Apply</button>
              </div>
            </>}
          </div>
        </>}
        {V.nkShow && <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 120px), 1fr))", gap: "12px" }}>
            {L(V.nkList).map((k, i51) => <React.Fragment key={i51}>
              <div style={{ gridColumn: `${A(k?.span)}`, background: "#FFFFFF", border: "none", borderRadius: "12px", boxShadow: "0 1px 3px rgba(16,24,40,.08), 0 1px 2px rgba(16,24,40,.04)", padding: "10px 14px 11px", display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}>
                  <span style={{ width: "24px", height: "24px", flex: "0 0 24px", borderRadius: "8px", background: `${A(k?.tint)}`, display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke={k?.color} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d={k?.icon} /></svg></span>
                  <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: ".2px", color: "#1F2A24", lineHeight: "1.25", flex: "1", minWidth: "0" }}>{S(k?.label)}</span>
                  {k?.status && <>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", position: "relative", flex: "0 0 auto" }}>
                      <span onClick={k?.toggleInfo} style={{ fontSize: "11px", fontWeight: "600", color: "#B45309", background: "#FEF3C7", border: "1px solid #FDE68A", cursor: "pointer", borderRadius: "50%", width: "15px", height: "15px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>i</span>
                      <span style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".4px", color: `${A(k?.status?.ink)}`, background: `${A(k?.status?.bg)}`, borderRadius: "10px", padding: "4px 9px", whiteSpace: "nowrap" }}>{S(k?.status?.label)}</span>
                      {k?.infoOpen && <>
                        <span style={{ position: "absolute", top: "calc(100% + 8px)", right: "0", width: "240px", background: "#043C2C", color: "#F3F4F6", fontSize: "12.5px", lineHeight: "1.5", borderRadius: "10px", padding: "10px 12px", boxShadow: "0 14px 30px rgba(0,0,0,.28)", zIndex: "40", whiteSpace: "normal", paddingRight: "34px" }}>
                          <span onClick={k?.toggleInfo} title="Close" style={{ position: "absolute", top: "6px", right: "6px", width: "22px", height: "22px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,.1)", color: "#E5E7EB", cursor: "pointer" }}><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></span>
                          {S(k?.info)}
                        </span>
                      </>}
                    </span>
                  </>}
                </div>
                <div style={{ textAlign: "center", lineHeight: "1.15", whiteSpace: "nowrap" }}>
                  <span style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-.5px", color: `${A(k?.color)}`, fontVariantNumeric: "tabular-nums" }}>{S(k?.value)}</span>
                  <span style={{ fontSize: "12.5px", fontWeight: "500", color: "#5B6B61", marginLeft: "3px" }}>{S(k?.unit)}</span>
                </div>
                <div style={{ textAlign: "center", fontSize: "12.5px", color: "#5B6B61", lineHeight: "1.3" }}>{S(k?.note)}</div>
              </div>
            </React.Fragment>)}
          </div>
        </>}
        {V.showTzGrid && <ShowTzGrid V={V} />}
        {V.isTabRainfall && <>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {L(V.wxRainCharts).map((rainMainChart, i64) => <React.Fragment key={i64}>
              <div style={{ position: "relative", minWidth: "0", background: "#FFFFFF", border: "none", borderRadius: "16px", padding: "30px 32px 24px", boxShadow: "0 1px 3px rgba(16,24,40,.08), 0 1px 2px rgba(16,24,40,.04)" }}>
                <div aria-hidden="true" style={{ position: "absolute", inset: "0", overflow: "hidden", borderRadius: "inherit", pointerEvents: "none", color: "#0F1A14", opacity: ".045" }}>
                  {V.wxTabMotif?.sun && <>
                    <svg viewBox="0 0 100 100" width="280" height="280" style={{ position: "absolute", top: "-70px", right: "-70px" }} fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
                      <circle cx="50" cy="50" r="19" fill="currentColor" stroke="none" />
                      <path d="M50 8v12M50 80v12M8 50h12M80 50h12M20.3 20.3l8.5 8.5M71.2 71.2l8.5 8.5M20.3 79.7l8.5-8.5M71.2 28.8l8.5-8.5" />
                    </svg>
                  </>}
                  {V.wxTabMotif?.cloud && <>
                    <svg viewBox="0 0 100 64" width="320" height="205" style={{ position: "absolute", top: "-30px", right: "-50px" }} fill="currentColor"><path d="M26 60a18 18 0 0 1-1.6-35.9A26 26 0 0 1 74 20a20 20 0 0 1 2 40z" /></svg>
                  </>}
                  {V.wxTabMotif?.wind && <>
                    <svg viewBox="0 0 100 70" width="320" height="224" style={{ position: "absolute", top: "-10px", right: "-40px" }} fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"><path d="M6 24h56a11 11 0 1 0-11-11M6 40h72a12 12 0 1 1-12 12M6 56h34" /></svg>
                  </>}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "22px" }}>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "#0F1A14" }}>{S(rainMainChart?.title)}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                    {rainMainChart?.zoomed && <>
                      <span onClick={rainMainChart?.zoomReset} style={{ fontSize: "12.5px", fontWeight: "700", color: "#0E7C3A", cursor: "pointer" }}>Reset</span>
                    </>}
                    <div style={{ display: "flex", alignItems: "stretch", border: "1px solid #E5E8E6", borderRadius: "8px", overflow: "hidden" }}>
                      <span className="scp2p" onClick={rainMainChart?.zoomOut} title="Zoom out" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45", borderRight: "1px solid #E5E8E6" }}>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                          <circle cx="11" cy="11" r="7" />
                          <path d="M8 11h6M20 20l-4-4" />
                        </svg>
                      </span>
                      <span className="scp2p" onClick={rainMainChart?.zoomIn} title="Zoom in" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45" }}>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                          <circle cx="11" cy="11" r="7" />
                          <path d="M8 11h6M11 8v6M20 20l-4-4" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ position: "relative", fontSize: "12.5px", color: "#8A948E", height: "260px", textAlign: "right", flex: "0 0 auto", minWidth: "32px" }}>
                    {L(rainMainChart?.ticks).map((t, i65) => <React.Fragment key={i65}>
                      <span style={{ position: "absolute", right: "0", top: `${A(t?.top)}`, transform: "translateY(-50%)", whiteSpace: "nowrap" }}>{S(t?.label)}</span>
                    </React.Fragment>)}
                  </div>
                  <div ref={V.winRef} data-chartid={rainMainChart?.id} onMouseDown={V.onWinDown} onMouseMove={V.onWinMove} onMouseUp={V.onWinUp} onMouseLeave={V.onWinUp} style={{ flex: "1", minWidth: "0", overflow: "hidden", userSelect: "none", cursor: `${A(rainMainChart?.cursor)}` }}>
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <svg viewBox={rainMainChart?.vb} preserveAspectRatio="none" style={{ width: "100%", height: "260px", display: "block", overflow: "visible" }}>
                        {L(rainMainChart?.grid).map((g, i66) => <React.Fragment key={i66}>
                          <line x1="0" x2="300" y1={g} y2={g} stroke="#EDF2EE" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                        </React.Fragment>)}
                        {L(rainMainChart?.bars).map((b, i67) => <React.Fragment key={i67}>
                          <rect x={b?.x} y={b?.y} width={b?.w} height={b?.h} fill={rainMainChart?.barColor} rx="2"><title>{S(b?.title)}</title></rect>
                        </React.Fragment>)}
                        {rainMainChart?.isArea && <>
                          <path d={rainMainChart?.area} fill={rainMainChart?.lineColor} opacity="0.18" stroke="none" />
                        </>}
                        <path d={rainMainChart?.line} fill="none" stroke={rainMainChart?.lineColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                      </svg>
                      <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(rainMainChart?.ovLeft)}`, width: `${A(rainMainChart?.ovWidth)}`, pointerEvents: "none" }}>
                        {L(rainMainChart?.bars).map((b, i68) => <React.Fragment key={i68}>
                          {b?.valueLabel && <>
                            <span style={{ position: "absolute", left: `${A(b?.cxPct)}`, top: `${A(b?.labelYPct)}`, transform: "translate(-50%,-100%)", fontSize: "12.5px", fontWeight: "700", color: "#5C6B62", whiteSpace: "nowrap" }}>{S(b?.valueLabel)}</span>
                          </>}
                        </React.Fragment>)}
                        {L(rainMainChart?.points).map((p, i69) => <React.Fragment key={i69}>
                          {p?.valueLabel && <>
                            <span style={{ position: "absolute", left: `${A(p?.xPct)}`, top: `${A(p?.labelYPct)}`, transform: "translate(-50%,-100%)", fontSize: "12.5px", fontWeight: "700", color: `${A(rainMainChart?.lineColor)}`, whiteSpace: "nowrap" }}>{S(p?.valueLabel)}</span>
                          </>}
                        </React.Fragment>)}
                      </div>
                    </div>
                    <div style={{ position: "relative", height: "36px", fontSize: "12.5px", color: "#8A948E", borderTop: "1px solid #EDF2EE", marginTop: "4px" }}>
                      {L(rainMainChart?.xAt).map((xl, i70) => <React.Fragment key={i70}>
                        <span style={{ position: "absolute", top: "6px", left: `${A(xl?.left)}`, transform: `${A(xl?.tx)}`, whiteSpace: "nowrap", textAlign: "center", lineHeight: "1.3" }}>
                          <span style={{ display: "block" }}>{S(xl?.top)}</span>
                          <span style={{ display: "block", fontSize: "11.5px", fontWeight: "400" }}>{S(xl?.sub)}</span>
                        </span>
                      </React.Fragment>)}
                    </div>
                    {rainMainChart?.stats && <>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", borderTop: "1px solid #D8E7D4", marginTop: "8px", paddingTop: "12px", fontSize: "12.5px", color: "#4A524D" }}>
                        {L(rainMainChart?.stats).map((s, i71) => <React.Fragment key={i71}>
                          <span style={{ whiteSpace: "nowrap" }}>
                            {S(s?.label)}{" "}
                            <strong style={{ color: "#0F1A14" }}>{S(s?.value)}</strong>
                            <span style={{ color: "#6A746E" }}>{" "}{S(s?.when)}</span>
                          </span>
                        </React.Fragment>)}
                      </div>
                    </>}
                  </div>
                </div>
              </div>
            </React.Fragment>)}
          </div>
        </>}
        {V.showRangeRow && <>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "6px", position: "relative" }}>
            {L(V.wxRanges).map((r, i72) => <React.Fragment key={i72}>
              <span onClick={r?.select} style={{ padding: "8px 15px", borderRadius: "20px", fontSize: "12.5px", fontWeight: "700", cursor: "pointer", background: `${A(r?.bg)}`, color: `${A(r?.color)}` }}>{S(r?.label)}</span>
            </React.Fragment>)}
            <span onClick={V.toggleWxCustom} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 15px", borderRadius: "20px", fontSize: "12.5px", fontWeight: "700", cursor: "pointer", background: `${A(V.wxCustomBg)}`, color: `${A(V.wxCustomColor)}` }}>
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" /></svg>
              Custom
        
            </span>
            {V.wxCustomOpen && <>
              <div style={{ position: "absolute", top: "44px", right: "0", width: "230px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 12px 30px rgba(15,26,20,.15)", padding: "10px", zIndex: "20", textAlign: "left" }}>
                {L(V.wxCustomPresets).map((p, i73) => <React.Fragment key={i73}>
                  <div className="scp2o" onClick={p?.select} style={{ padding: "9px 10px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", cursor: "pointer", color: "#0F1A14" }}>{S(p?.label)}</div>
                </React.Fragment>)}
                <div style={{ borderTop: "1px solid #EDF0EE", marginTop: "6px", paddingTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: ".5px", color: "#8A948E", padding: "0 2px" }}>CUSTOM RANGE</div>
                  <label style={{ display: "flex", flexDirection: "column", gap: "3px", padding: "0 2px" }}>
                    <span style={{ fontSize: "12.5px", color: "#6A746E" }}>From</span>
                    <input type="date" value={V.wxCustomFrom ?? ""} onChange={V.onWxCustomFromChange} style={{ fontSize: "12.5px", border: "1px solid #DCE3E9", borderRadius: "7px", padding: "6px 8px", color: "#0F1A14" }} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "3px", padding: "0 2px" }}>
                    <span style={{ fontSize: "12.5px", color: "#6A746E" }}>To</span>
                    <input type="date" value={V.wxCustomTo ?? ""} onChange={V.onWxCustomToChange} style={{ fontSize: "12.5px", border: "1px solid #DCE3E9", borderRadius: "7px", padding: "6px 8px", color: "#0F1A14" }} />
                  </label>
                  <span onClick={V.applyWxCustom} style={{ textAlign: "center", fontSize: "13px", fontWeight: "700", color: "#fff", background: "#0E7C3A", borderRadius: "8px", padding: "8px 0", cursor: "pointer", marginTop: "2px" }}>Apply</span>
                </div>
              </div>
            </>}
          </div>
        </>}
        {V.isTabSolarUv && <>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ minWidth: "0", background: "#FFFFFF", border: "none", borderRadius: "12px", padding: "20px 24px 16px", boxShadow: "0 1px 3px rgba(16,24,40,.08), 0 1px 2px rgba(16,24,40,.04)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <span style={{ width: "24px", height: "24px", flex: "0 0 24px", borderRadius: "7px", background: "#F3E8FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#9333EA" }}><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={V.icons?.uv} /></svg></span>
                  <div style={{ fontSize: "14px", fontWeight: "600", color: "#0F1A14" }}>UV Index</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                  {V.uvChartCard?.zoomed && <>
                    <span onClick={V.uvChartCard?.zoomReset} style={{ fontSize: "12.5px", fontWeight: "700", color: "#0E7C3A", cursor: "pointer", padding: "5px 8px", borderRadius: "6px", background: "#E7F6EC" }}>Reset</span>
                  </>}
                  <div style={{ display: "flex", alignItems: "stretch", border: "1px solid #E5E8E6", borderRadius: "8px", overflow: "hidden" }}>
                    <span className="scp2o" onClick={V.uvChartCard?.zoomOut} title="Zoom out" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45", borderRight: "1px solid #EEF1EF" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4M8 11h6" /></svg></span>
                    <span className="scp2o" onClick={V.uvChartCard?.zoomIn} title="Zoom in" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4M8 11h6M11 8v6" /></svg></span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ position: "relative", fontSize: "12.5px", fontWeight: "600", color: "#4C6354", height: "260px", textAlign: "right", flex: "0 0 36px", minWidth: "36px" }}>
                  {L(V.uvChartCard?.ticks).map((t, i74) => <React.Fragment key={i74}>
                    <span style={{ position: "absolute", right: "0", top: `${A(t?.top)}`, transform: "translateY(-50%)", whiteSpace: "nowrap" }}>{S(t?.label)}</span>
                  </React.Fragment>)}
                </div>
                <div ref={V.winRef} data-chartid="uvMain" onMouseDown={V.onWinDown} onMouseMove={V.onWinMove} onMouseUp={V.onWinUp} onMouseLeave={V.onWinUp} style={{ flex: "1", minWidth: "0", overflow: "hidden", userSelect: "none", cursor: `${A(V.uvChartCard?.cursor)}` }}>
                  <svg viewBox={V.uvChartCard?.vb} preserveAspectRatio="none" style={{ width: "100%", height: "260px", display: "block", overflow: "hidden", animation: "wxChartIn .6s ease-out backwards" }}>
                    {L(V.uvChartCard?.grid).map((g, i75) => <React.Fragment key={i75}>
                      <line x1="0" x2="300" y1={g} y2={g} stroke="#E5EFE2" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    </React.Fragment>)}
                    <path d={V.uvChartCard?.area} fill="#9333EA" opacity="0.16" stroke="none" />
                    <path d={V.uvChartCard?.line} fill="none" stroke="#9333EA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <div style={{ position: "relative", height: "36px", fontSize: "12.5px", fontWeight: "600", color: "#5F6762", borderTop: "1px solid #E5EFE2", marginTop: "4px" }}>
                    {L(V.uvChartCard?.xAt).map((xl, i76) => <React.Fragment key={i76}>
                      <span style={{ position: "absolute", top: "6px", left: `${A(xl?.left)}`, transform: `${A(xl?.tx)}`, whiteSpace: "nowrap", textAlign: "center", lineHeight: "1.3" }}>
                        <span style={{ display: "block" }}>{S(xl?.top)}</span>
                        <span style={{ display: "block", fontSize: "11.5px", fontWeight: "400" }}>{S(xl?.sub)}</span>
                      </span>
                    </React.Fragment>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>}
        {V.showChartGrid && <>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${A(V.wxCharts?.cols)}, minmax(0,1fr))`, gap: "20px" }}>
            {L(V.wxCharts?.list).map((ch, i77) => <React.Fragment key={i77}>
              <div style={{ minWidth: "0", gridColumn: `${A(ch?.span)}`, background: "#FFFFFF", border: "none", borderRadius: "12px", padding: "18px 20px 14px", display: "flex", flexDirection: "column", boxShadow: "0 1px 3px rgba(16,24,40,.08), 0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "14px" }}>
                  <span style={{ width: "24px", height: "24px", flex: "0 0 24px", borderRadius: "7px", background: `${A(ch?.tint)}`, display: "flex", alignItems: "center", justifyContent: "center", color: `${A(ch?.ink)}` }}><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={ch?.icon} /></svg></span>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "#0F1A14" }}>{S(ch?.title)}</span>
                  {ch?.viewTabs && <>
                    <span style={{ display: "flex", gap: "4px", background: "#F1F5F7", borderRadius: "20px", padding: "3px", marginLeft: "auto" }}>
                      {L(ch?.viewTabs).map((vt, i78) => <React.Fragment key={i78}>
                        <span onClick={vt?.select} style={{ fontSize: "12.5px", fontWeight: "600", padding: "5px 11px", borderRadius: "16px", cursor: "pointer", background: `${A(vt?.bg)}`, color: `${A(vt?.ink)}` }}>{S(vt?.label)}</span>
                      </React.Fragment>)}
                    </span>
                  </>}
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ position: "relative", fontSize: "12.5px", fontWeight: "600", color: "#4C6354", height: "260px", textAlign: "right", flex: "0 0 36px", minWidth: "36px" }}>
                    {L(ch?.ticks).map((t, i79) => <React.Fragment key={i79}>
                      <span style={{ position: "absolute", right: "0", top: `${A(t?.top)}`, transform: "translateY(-50%)", whiteSpace: "nowrap" }}>{S(t?.label)}</span>
                    </React.Fragment>)}
                  </div>
                  <div style={{ flex: "1", minWidth: "0", overflow: "hidden" }} data-chartid={ch?.id} onWheel={V.onChartWheel}>
                    <div style={{ position: "relative" }}>
                      <svg viewBox="0 0 300 170" preserveAspectRatio="none" style={{ width: "100%", height: "260px", display: "block", overflow: "visible", animation: "wxChartIn .6s ease-out backwards", transform: `scale(${A(ch?.zoom)})`, transformOrigin: "center", cursor: "zoom-in" }}>
                        <defs>
                          <linearGradient id={ch?.gradId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={ch?.lineColor} stopOpacity="0.4" />
                            <stop offset="100%" stopColor={ch?.lineColor} stopOpacity="0.03" />
                          </linearGradient>
                        </defs>
                        {L(ch?.grid).map((g, i80) => <React.Fragment key={i80}>
                          <line x1="0" x2="300" y1={g} y2={g} stroke="#E5EFE2" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                        </React.Fragment>)}
                        {L(ch?.bars).map((b, i81) => <React.Fragment key={i81}>
                          <rect x={b?.x} y={b?.y} width={b?.w} height={b?.h} fill={ch?.barColor} rx="2" />
                        </React.Fragment>)}
                        {ch?.isArea && <>
                          <path d={ch?.area} fill={`url(#${A(ch?.gradId)})`} stroke="none" />
                          <path d={ch?.line} fill="none" stroke={ch?.lineColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                          {L(ch?.points).map((p, i82) => <React.Fragment key={i82}>
                            <circle cx={p?.x} cy={p?.y} r="8" fill={ch?.lineColor} opacity="0.01" style={{ cursor: "pointer" }}><title>{S(p?.title)}</title></circle>
                          </React.Fragment>)}
                        </>}
                        {ch?.isMinMax && <>
                          <defs>
                            <linearGradient id={`${A(ch?.gradId)}-mm`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#E4572E" />
                              <stop offset="100%" stopColor="#2A6FDB" />
                            </linearGradient>
                          </defs>
                          {L(ch?.bars).map((mb, i83) => <React.Fragment key={i83}>
                            <rect x={mb?.x} y={mb?.y} width={mb?.w} height={mb?.h} rx="3" fill={`url(#${A(ch?.gradId)}-mm)`}><title>{S(mb?.title)}</title></rect>
                          </React.Fragment>)}
                          <path d={ch?.avgLine} fill="none" stroke={V.tabAccent} strokeWidth="1.6" strokeDasharray="5 4" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                          {L(ch?.avgDots).map((d, i84) => <React.Fragment key={i84}>
                            <circle cx={d?.x} cy={d?.y} r="3" fill="#fff" stroke={V.tabAccent} strokeWidth="2"><title>{S(d?.title)}</title></circle>
                          </React.Fragment>)}
                        </>}
                        {ch?.isWindArea && <>
                          <path d={ch?.area} fill="#A78BFA" opacity="0.16" stroke="none" />
                          <path d={ch?.line} fill="none" stroke={V.tabAccent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                        </>}
                        {L(ch?.arrows).map((a, i85) => <React.Fragment key={i85}>
                          <path d="M0,-5 L4,4 L0,1 L-4,4 Z" fill="#0E8090" transform={`translate(${A(a?.x)},${A(a?.y)}) rotate(${A(a?.rot)})`} />
                        </React.Fragment>)}
                      </svg>
                      <div style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
                        {L(ch?.bars).map((b, i86) => <React.Fragment key={i86}>
                          {b?.valueLabel && <>
                            <span style={{ position: "absolute", left: `${A(b?.cxPct)}`, top: `${A(b?.labelYPct)}`, transform: "translate(-50%,-100%)", fontSize: "12px", fontWeight: "700", color: "#4A524D", whiteSpace: "nowrap" }}>{S(b?.valueLabel)}</span>
                          </>}
                        </React.Fragment>)}
                        {L(ch?.points).map((p, i87) => <React.Fragment key={i87}>
                          {p?.valueLabel && <>
                            <span style={{ position: "absolute", left: `${A(p?.xPct)}`, top: `${A(p?.labelYPct)}`, transform: "translate(-50%,-100%)", fontSize: "12px", fontWeight: "700", color: `${A(ch?.lineColor)}`, whiteSpace: "nowrap" }}>{S(p?.valueLabel)}</span>
                          </>}
                        </React.Fragment>)}
                        {ch?.isMinMax && <>
                          {L(ch?.bars).map((mb, i88) => <React.Fragment key={i88}>
                            <span style={{ position: "absolute", left: `${A(mb?.cxPct)}`, top: `${A(mb?.maxLabelYPct)}`, transform: "translate(-50%,-100%)", fontSize: "12px", fontWeight: "800", color: "#DC2626", whiteSpace: "nowrap" }}>{S(mb?.maxLabel)}</span>
                            <span style={{ position: "absolute", left: `${A(mb?.cxPct)}`, top: `${A(mb?.minLabelYPct)}`, transform: "translate(-50%,0%)", fontSize: "12px", fontWeight: "800", color: "#2563EB", whiteSpace: "nowrap" }}>{S(mb?.minLabel)}</span>
                          </React.Fragment>)}
                          {L(ch?.avgDots).map((d, i89) => <React.Fragment key={i89}>
                            <span style={{ position: "absolute", left: `${A(d?.xPct)}`, top: `${A(d?.labelYPct)}`, transform: "translate(-50%,-100%)", fontSize: "12px", fontWeight: "700", color: `${A(V.tabAccent)}`, whiteSpace: "nowrap" }}>{S(d?.label)}</span>
                          </React.Fragment>)}
                        </>}
                      </div>
                    </div>
                    <div style={{ position: "relative", height: "36px", fontSize: "12.5px", fontWeight: "600", color: "#5F6762", borderTop: "1px solid #E5EFE2", marginTop: "4px" }}>
                      {L(ch?.xAt).map((xl, i90) => <React.Fragment key={i90}>
                        <span style={{ position: "absolute", top: "6px", left: `${A(xl?.left)}`, transform: `${A(xl?.tx)}`, whiteSpace: "nowrap", textAlign: "center", lineHeight: "1.3" }}>
                          <span style={{ display: "block" }}>{S(xl?.top)}</span>
                          <span style={{ display: "block", fontSize: "11.5px", fontWeight: "400" }}>{S(xl?.sub)}</span>
                        </span>
                      </React.Fragment>)}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "4px 10px", marginTop: "8px" }}>
                      {L(ch?.legend).map((lg, i91) => <React.Fragment key={i91}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#6A746E" }}>
                          <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: `${A(lg?.color)}` }} />
                          {S(lg?.label)}
                        </span>
                      </React.Fragment>)}
                    </div>
                  </div>
                </div>
                {ch?.showStats && <>
                  <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #EDF0EE", marginTop: "12px", paddingTop: "12px" }}>
                    <span style={{ fontSize: "12.5px", color: "#6A746E" }}>
                      {"Min "}
                      <b style={{ color: "#0F1A14" }}>{S(ch?.statMin)}</b>
                      {" "}
                      <span style={{ color: "#8A948E" }}>{"observed at "}{S(ch?.statMinTime)}</span>
                    </span>
                    <span style={{ fontSize: "12.5px", color: "#6A746E" }}>
                      {"Max "}
                      <b style={{ color: "#0F1A14" }}>{S(ch?.statMax)}</b>
                      {" "}
                      <span style={{ color: "#8A948E" }}>{"observed at "}{S(ch?.statMaxTime)}</span>
                    </span>
                  </div>
                </>}
                {ch?.insight && <>
                  <div style={{ fontSize: "12.5px", color: "#6A746E", marginTop: "12px", paddingTop: "12px", borderTop: "1px solid #EDF0EE" }}>{S(ch?.insight)}</div>
                </>}
              </div>
            </React.Fragment>)}
          </div>
        </>}
        {V.alertsOn && <>
          <AlertsPanel sources={V.alertSrc} />
        </>}
        {V.isTabAI && <>
          <KeyInsightsPanel sources={V.kiWeather} />
        </>}
        {V.isTabDevice && <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px", alignItems: "stretch" }}>
            <div style={{ background: "#FFFFFF", border: "1px solid #CFE5C8", borderRadius: "18px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 6px 18px rgba(16,24,40,.05)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "22px 24px 18px", borderBottom: "1px solid #E3EFE7" }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0E7C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 16v-5M12 8h.01" />
                </svg>
                <div style={{ fontSize: "21.5px", fontWeight: "800", color: "#0F1A14" }}>Device Information</div>
              </div>
              <div style={{ padding: "16px 24px 4px", fontSize: "13px", fontWeight: "600", letterSpacing: ".4px", color: "#6A746E" }}>{S(V.deviceId)}</div>
              <div style={{ padding: "0 24px 14px" }}>
                {L(V.deviceInfo).map((f, i92) => <React.Fragment key={i92}>
                  <div style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "12px", alignItems: "center", padding: "11px 0", borderBottom: "1px solid #EEF3EF" }}>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#6A746E" }}>{S(f?.label)}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600", color: "#0F1A14" }}>
                      {S(f?.value)}
                      {L(f?.chips).map((chip, i93) => <React.Fragment key={i93}>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: `${A(chip?.ink)}`, background: `${A(chip?.bg)}`, borderRadius: "6px", padding: "3px 8px" }}>{S(chip?.label)}</span>
                      </React.Fragment>)}
                    </span>
                  </div>
                </React.Fragment>)}
              </div>
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #CFE5C8", borderRadius: "18px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 6px 18px rgba(16,24,40,.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "22px 24px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0E7C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                  <div style={{ fontSize: "21.5px", fontWeight: "800", color: "#0F1A14" }}>Device Location</div>
                </div>
                <div style={{ fontSize: "14.5px", color: "#6A746E", marginTop: "4px", paddingLeft: "28px" }}>{S(V.deviceCoords)}</div>
              </div>
              <div style={{ flex: "1", display: "flex", padding: "0 24px 24px", minHeight: "380px" }}>
                <div style={{ position: "relative", flex: "1", minHeight: "380px", border: "1px solid #CFE5C8", borderRadius: "12px", overflow: "hidden", background: "#2B3A2F" }}>
                  {L(V.mapTiles).map((tile, i94) => <React.Fragment key={i94}>
                    <div style={{ position: "absolute", left: `${A(tile?.left)}`, top: `${A(tile?.top)}`, width: "256px", height: "256px", backgroundImage: `${A(tile?.bg)}`, backgroundSize: "256px 256px", pointerEvents: "none" }} />
                  </React.Fragment>)}
                  <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-100%)", display: "flex", flexDirection: "column", alignItems: "center", pointerEvents: "none" }}>
                    <div style={{ background: "#fff", color: "#0F1A14", fontSize: "14.5px", fontWeight: "800", borderRadius: "8px", padding: "6px 10px", boxShadow: "0 4px 12px rgba(0,0,0,.35)", whiteSpace: "nowrap", marginBottom: "6px" }}>{S(V.mapLabel)}</div>
                    <svg viewBox="0 0 24 32" width="30" height="40" style={{ display: "block", filter: "drop-shadow(0 3px 4px rgba(0,0,0,.45))" }}>
                      <path d="M12 31s10-11.3 10-19A10 10 0 0 0 2 12c0 7.7 10 19 10 19z" fill="#0E7C3A" stroke="#fff" strokeWidth="2" />
                      <circle cx="12" cy="12" r="4" fill="#fff" />
                    </svg>
                  </div>
                  <span style={{ position: "absolute", right: "8px", bottom: "6px", fontSize: "11.5px", color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,.8)" }}>Imagery © Esri</span>
                </div>
              </div>
            </div>
          </div>
        </>}
      </div>
    </div>
    </>
  );
}
