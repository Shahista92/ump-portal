import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';

export default function SoilTrendsShow({ V }) {
  return (
    <>
    <div style={{ padding: "8px 16px 20px", display: "flex", flexDirection: "column", gap: "14px", fontFamily: "'Roboto', ui-sans-serif, system-ui, sans-serif" }}>
      <div style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", justifyContent: "space-between", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", padding: "8px 10px" }}>
        {V.soilCondOn && <>
          <div style={{ position: "relative", width: "min(360px, 100%)" }}>
            <div className="scp2m" onClick={V.toggleDepthMenu} style={{ display: "flex", alignItems: "center", gap: "12px", height: "40px", padding: "0 14px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "10px", cursor: "pointer", userSelect: "none" }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#4C6354" strokeWidth="2" strokeLinecap="round"><path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" /></svg>
              <span style={{ flex: "1", fontSize: "12.5px", fontWeight: "500", color: "#0F1A14" }}>{S(V.depthSummary)}</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#6A746E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
            </div>
            {V.depthMenuOpen && <>
              <div style={{ position: "absolute", top: "46px", left: "0", right: "0", zIndex: "60", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 18px 44px rgba(15,26,20,.16)", padding: "6px" }}>
                <div className="scp2n" onClick={V.selectAllDepths} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 10px", borderRadius: "8px", fontSize: "12.5px", fontWeight: "600", color: "#0F1A14", cursor: "pointer" }}>All depths</div>
                {L(V.depthOptions).map((d, i9) => <React.Fragment key={i9}>
                  <div className="scp2n" onClick={d?.toggle} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 10px", borderRadius: "8px", fontSize: "12.5px", fontWeight: `${A(d?.weight)}`, color: "#0F1A14", cursor: "pointer" }}>
                    <span style={{ width: "16px", height: "16px", flex: "0 0 16px", borderRadius: "4px", border: `1.5px solid ${A(d?.boxBorder)}`, background: `${A(d?.checkBg)}`, display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg></span>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: `${A(d?.dot)}` }} />
                    {S(d?.label)}
                  </div>
                </React.Fragment>)}
              </div>
            </>}
          </div>
        </>}
        <span style={{ flex: "1" }} />
        <div style={{ display: "flex", alignItems: "stretch", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "7px", overflow: "hidden" }}>
          {L(V.ranges).map((r, i10) => <React.Fragment key={i10}>
            <div onClick={r?.select} style={{ padding: "8px 13px", fontSize: "12.5px", fontWeight: "600", cursor: "pointer", color: `${A(r?.color)}`, background: `${A(r?.bg)}`, borderRight: "1px solid #EEF1EF" }}>{S(r?.label)}</div>
          </React.Fragment>)}
          <div onClick={V.toggleCustom} title="Pick a custom date range" style={{ padding: "8px 13px", display: "flex", alignItems: "center", gap: "7px", fontSize: "12.5px", fontWeight: "600", cursor: "pointer", background: `${A(V.customBg)}`, color: `${A(V.customInk)}` }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ width: "13px", height: "13px" }}><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" /></svg>
            {S(V.rangeLabel)}
          </div>
        </div>
        {V.customOpen && <>
          <div style={{ position: "absolute", top: "52px", right: "16px", width: "330px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "14px", boxShadow: "0 22px 54px rgba(15,26,20,.18)", padding: "16px", zIndex: "50" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "14px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#0F1A14" }}>Custom Range</span>
              <span style={{ flex: "1" }} />
              <span style={{ background: "#E7F6EC", color: "#0E7C3A", borderRadius: "20px", padding: "3px 10px", fontSize: "12.5px", fontWeight: "600" }}>{S(V.spanLabel)}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
              <div onClick={V.pickFromEdge} style={{ flex: "1", minWidth: "0", border: `1.5px solid ${A(V.fromBorder)}`, background: `${A(V.fromBg)}`, borderRadius: "9px", padding: "9px 10px", textAlign: "center", cursor: "pointer" }}>
                <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>FROM</div>
                <div style={{ fontSize: "13px", fontWeight: "600", color: "#0F1A14", marginTop: "3px" }}>{S(V.fromPretty)}</div>
              </div>
              <span style={{ color: "#8A948E", fontSize: "13px" }}>→</span>
              <div onClick={V.pickToEdge} style={{ flex: "1", minWidth: "0", border: `1.5px solid ${A(V.toBorder)}`, background: `${A(V.toBg)}`, borderRadius: "9px", padding: "9px 10px", textAlign: "center", cursor: "pointer" }}>
                <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>TO</div>
                <div style={{ fontSize: "13px", fontWeight: "600", color: "#0F1A14", marginTop: "3px" }}>{S(V.toPretty)}</div>
              </div>
            </div>
            <div style={{ padding: "16px 4px 4px" }}>
              <div style={{ position: "relative", height: "4px", borderRadius: "3px", background: "#E9EDEA" }}>
                <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(V.trackLeft)}`, right: `${A(V.trackRight)}`, borderRadius: "3px", background: "#1AA34A" }} />
                <div style={{ position: "absolute", top: "-4px", left: `${A(V.trackLeft)}`, width: "12px", height: "12px", marginLeft: "-6px", borderRadius: "7px", background: "#1AA34A" }} />
                <div style={{ position: "absolute", top: "-4px", right: `${A(V.trackRight)}`, width: "12px", height: "12px", marginRight: "-6px", borderRadius: "7px", background: "#1AA34A" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11.5px", color: "#98A19C", paddingTop: "8px" }}>
                <span>{S(V.boundStart)}</span>
                <span>{S(V.boundEnd)}</span>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #EDF1EE", marginTop: "10px", paddingTop: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#0F1A14" }}>{S(V.monthLabel)}</span>
                <span style={{ fontSize: "9.5px", color: "#6A746E" }}>▼</span>
                <span style={{ flex: "1" }} />
                <span className="scp2o" onClick={V.prevMonth} title="Previous month" style={{ width: "24px", height: "24px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45", fontSize: "13px" }}>‹</span>
                <span className="scp2o" onClick={V.nextMonth} title="Next month" style={{ width: "24px", height: "24px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: `${A(V.nextInk)}`, fontSize: "13px" }}>›</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
                {L(V.dowLabels).map((w, i11) => <React.Fragment key={i11}>
                  <div style={{ textAlign: "center", fontSize: "12px", color: "#8A948E", padding: "4px 0 6px" }}>{S(w)}</div>
                </React.Fragment>)}
                {L(V.calDays).map((day, i12) => <React.Fragment key={i12}>
                  <div onClick={day?.pick} style={{ height: "28px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12.5px", borderRadius: "14px", cursor: `${A(day?.cursor)}`, color: `${A(day?.ink)}`, background: `${A(day?.bg)}`, border: `1px solid ${A(day?.ring)}`, fontWeight: `${A(day?.weight)}` }}>{S(day?.n)}</div>
                </React.Fragment>)}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "16px", paddingTop: "14px" }}>
              <span onClick={V.cancelCustom} style={{ fontSize: "13px", color: "#6A746E", cursor: "pointer" }}>Cancel</span>
              <span onClick={V.applyCustom} style={{ fontSize: "13px", fontWeight: "600", color: "#0E7C3A", cursor: "pointer" }}>Apply</span>
            </div>
          </div>
        </>}
      </div>
      {L(V.metrics).map((m, i13) => <React.Fragment key={i13}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {V.sharedTitle && <>
            <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
              <span style={{ width: "30px", height: "30px", flex: "0 0 30px", borderRadius: "8px", background: `${A(m?.tint)}`, display: "flex", alignItems: "center", justifyContent: "center", color: `${A(m?.ink)}` }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px" }}><path d={m?.icon} /></svg></span>
              <span style={{ fontSize: "13px", fontWeight: "700", color: `${A(m?.ink)}` }}>{S(m?.title)}</span>
            </div>
          </>}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "stretch" }}>
            {m?.hasKpiShow && <>
              <div style={{ flex: "1 1 300px", minWidth: "0", padding: "16px 18px 14px", display: "flex", flexDirection: "column", gap: "6px", background: "#fff", border: `1px solid ${A(m?.panelBd)}`, borderRadius: "14px", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px", paddingBottom: "6px" }}>
                  <span style={{ width: "30px", height: "30px", flex: "0 0 30px", borderRadius: "8px", background: `${A(m?.tint)}`, display: "flex", alignItems: "center", justifyContent: "center", color: `${A(m?.ink)}` }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px" }}><path d={m?.icon} /></svg></span>
                  <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "1px" }}>
                    <span style={{ fontSize: `${A(m?.titleFs)}`, fontWeight: "700", color: `${A(m?.ink)}` }}>{S(m?.title)}</span>
                    <span style={{ fontSize: "12px", color: "#8A948E" }}>{"Latest · "}{S(m?.kpi?.stamp)}</span>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "58px minmax(30px,1fr) auto 70px", gap: "12px", padding: "6px 0 4px", borderBottom: "1px solid #EEF1EF", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".4px", textTransform: "uppercase", color: "#8A948E" }}>
                  <span>Depth</span>
                  <span />
                  <span style={{ textAlign: "right" }}>Latest</span>
                  <span style={{ textAlign: "right" }}>vs prev</span>
                </div>
                <div style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                  {L(m?.kpi?.rows).map((r, i14) => <React.Fragment key={i14}>
                    <div style={{ display: "grid", gridTemplateColumns: "58px minmax(30px,1fr) auto 70px", alignItems: "center", gap: "12px", padding: "8px 0" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}>
                        <span style={{ width: "4px", height: "28px", flex: "0 0 4px", borderRadius: "2px", background: `${A(r?.color)}` }} />
                        <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.2", minWidth: "0" }}>
                          <span style={{ fontSize: "13px", fontWeight: "700", color: "#0F1A14", whiteSpace: "nowrap" }}>{S(r?.depth)}</span>
                          {r?.probe && <>
                            <span style={{ fontSize: "11.5px", color: "#8A948E", whiteSpace: "nowrap" }}>{S(r?.probe)}</span>
                          </>}
                        </span>
                      </span>
                      <div style={{ height: "8px", borderRadius: "4px", background: "#EEF1EF", overflow: "hidden" }}><div style={{ width: `${A(r?.pct)}`, height: "100%", borderRadius: "4px", background: `${A(r?.color)}` }} /></div>
                      <span style={{ textAlign: "right", fontSize: `${A(m?.valFs)}`, fontWeight: "700", color: "#0F1A14", fontVariantNumeric: "tabular-nums", letterSpacing: "-.3px", whiteSpace: "nowrap" }}>
                        {S(r?.value)}
                        <span style={{ fontSize: "12.5px", fontWeight: "500", color: "#6A746E", letterSpacing: "0", marginLeft: "3px" }}>{S(m?.kpi?.unit)}</span>
                      </span>
                      <span title="Change vs previous reading" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "3px", fontSize: "12.5px", fontWeight: "700", color: `${A(r?.dInk)}`, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d={r?.dIc} /></svg>
                        {S(r?.dTxt)}
                      </span>
                    </div>
                  </React.Fragment>)}
                </div>
              </div>
            </>}
            <div style={{ flex: "999 1 480px", minWidth: "0", padding: "14px 18px 12px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "14px", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
              <div style={{ display: "grid", gap: "20px", gridTemplateColumns: `repeat(${A(V.columns)}, minmax(0,1fr))` }}>
                {L(m?.charts).map((c, i15) => <React.Fragment key={i15}>
                  <div style={{ minWidth: "0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
                      {m?.showChartTitle && <>
                        <span style={{ width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "10px", background: `${A(m?.tint)}`, display: "flex", alignItems: "center", justifyContent: "center", color: `${A(m?.ink)}` }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "18px", height: "18px" }}><path d={m?.icon} /></svg></span>
                        <span style={{ fontSize: "14px", fontWeight: "700", color: `${A(m?.ink)}`, whiteSpace: "nowrap" }}>{S(m?.title)}</span>
                      </>}
                      <div style={{ flex: "1", minWidth: "0", display: "flex", alignItems: "center", gap: "6px 14px", flexWrap: "wrap", fontSize: "12.5px", fontWeight: "600", color: "#3F4B45" }}>
                        {V.showChartDevice && <>
                          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "4px", flex: "0 0 7px", background: `${A(c?.deviceColor)}` }} />
                            {S(c?.device)}
                          </span>
                        </>}
                      </div>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", flex: "0 0 auto" }}>
                        {V.soilZoom?.zoomed && <>
                          <span onClick={V.soilZoom?.reset} style={{ fontSize: "12.5px", fontWeight: "700", color: "#0E7C3A", cursor: "pointer", padding: "4px 2px" }}>Reset</span>
                        </>}
                        <span style={{ display: "flex", alignItems: "stretch", border: "1px solid #E5E8E6", borderRadius: "8px", overflow: "hidden" }}>
                          <span className="scp2p" onClick={V.soilZoom?.out} title="Zoom out" style={{ width: "28px", height: "26px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45", borderRight: "1px solid #E5E8E6" }}>
                            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                              <circle cx="11" cy="11" r="7" />
                              <path d="M8 11h6M20 20l-4-4" />
                            </svg>
                          </span>
                          <span className="scp2p" onClick={V.soilZoom?.in} title="Zoom in" style={{ width: "28px", height: "26px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45" }}>
                            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                              <circle cx="11" cy="11" r="7" />
                              <path d="M8 11h6M11 8v6M20 20l-4-4" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <div style={{ position: "relative", fontSize: "12px", color: "#8A948E", height: `${A(m?.chartH)}`, textAlign: "right", flex: "0 0 auto", minWidth: "46px" }}>
                        {L(c?.ticks).map((t, i16) => <React.Fragment key={i16}>
                          <span style={{ position: "absolute", right: "0", top: `${A(t?.top)}`, transform: "translateY(-50%)", whiteSpace: "nowrap" }}>{S(t?.label)}</span>
                        </React.Fragment>)}
                      </div>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div ref={V.soilWheelRef} onMouseDown={c?.onDown} onMouseMove={c?.onMove} onMouseUp={c?.onUp} onMouseLeave={c?.onLeave} style={{ position: "relative", cursor: `${A(V.soilZoom?.cursor)}`, userSelect: "none" }}>
                          <svg viewBox="0 0 300 240" preserveAspectRatio="none" style={{ width: "100%", height: `${A(m?.chartH)}`, display: "block", overflow: "hidden" }}>
                            {L(c?.bands).map((b, i17) => <React.Fragment key={i17}>
                              <rect x="0" y={b?.y} width="300" height={b?.h} fill={b?.fill} />
                            </React.Fragment>)}
                            {L(c?.grid).map((g, i18) => <React.Fragment key={i18}>
                              <line x1="0" x2="300" y1={g} y2={g} stroke="#EEF1EF" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                            </React.Fragment>)}
                            {L(c?.lines).map((l, i19) => <React.Fragment key={i19}>
                              <path d={l?.area} fill={l?.fill} fillOpacity=".45" stroke="none" />
                            </React.Fragment>)}
                            {L(c?.lines).map((l, i20) => <React.Fragment key={i20}>
                              <path d={l?.line} fill="none" stroke={l?.stroke} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                            </React.Fragment>)}
                            {L(c?.thr).map((th, i21) => <React.Fragment key={i21}>
                              <line x1="0" x2="300" y1={th?.y} y2={th?.y} stroke={th?.c} strokeWidth="1.4" strokeDasharray="6 4" vectorEffect="non-scaling-stroke" />
                            </React.Fragment>)}
                          </svg>
                          {L(c?.thr).map((th, i22) => <React.Fragment key={i22}>
                            <span style={{ position: "absolute", right: "6px", top: `${A(th?.top)}`, transform: "translateY(-50%)", fontSize: "11.5px", fontWeight: "700", color: `${A(th?.c)}`, background: "rgba(255,255,255,.9)", borderRadius: "5px", padding: "1px 6px", pointerEvents: "none", whiteSpace: "nowrap" }}>{S(th?.label)}</span>
                          </React.Fragment>)}
                          {c?.hover && <>
                            <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(c?.hover?.left)}`, borderLeft: "1px solid #9CA8A1", pointerEvents: "none" }} />
                            {L(c?.hover?.dots).map((hd, i23) => <React.Fragment key={i23}>
                              <span style={{ position: "absolute", left: `${A(c?.hover?.left)}`, top: `${A(hd?.top)}`, width: "10px", height: "10px", margin: "-5px 0 0 -5px", borderRadius: "50%", background: "#fff", border: `2.5px solid ${A(hd?.color)}`, boxSizing: "border-box", pointerEvents: "none" }} />
                            </React.Fragment>)}
                            <div style={{ position: "absolute", top: "6px", left: `${A(c?.hover?.left)}`, transform: `translateX(${A(c?.hover?.shift)})`, margin: "0 10px", background: "#043C2C", color: "#F3F4F6", borderRadius: "10px", padding: "9px 11px", fontSize: "12.5px", whiteSpace: "nowrap", pointerEvents: "none", boxShadow: "0 10px 24px rgba(0,0,0,.2)", zIndex: "3" }}>
                              <div style={{ fontWeight: "700", color: "#fff", marginBottom: "5px" }}>{S(c?.hover?.time)}</div>
                              {L(c?.hover?.rows).map((hr, i24) => <React.Fragment key={i24}>
                                <div style={{ display: "flex", alignItems: "center", gap: "7px", padding: "1px 0" }}>
                                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: `${A(hr?.color)}` }} />
                                  <span style={{ color: "#D1D8D4" }}>{S(hr?.label)}</span>
                                  <b style={{ marginLeft: "auto", paddingLeft: "12px", color: "#fff" }}>{S(hr?.value)}</b>
                                </div>
                              </React.Fragment>)}
                            </div>
                          </>}
                        </div>
                        <div style={{ position: "relative", height: "32px", fontSize: "12px", color: "#8A948E", marginTop: "7px" }}>
                          {L(c?.xLabels).map((xl, i25) => <React.Fragment key={i25}>
                            <span style={{ position: "absolute", top: "0", left: `${A(xl?.left)}`, transform: `translateX(${A(xl?.shift)})`, display: "flex", flexDirection: "column", alignItems: "center", lineHeight: "1.3", whiteSpace: "nowrap" }}>
                              <span style={{ fontWeight: "600", color: "#3F4B45" }}>{S(xl?.top)}</span>
                              <span>{S(xl?.sub)}</span>
                            </span>
                          </React.Fragment>)}
                        </div>
                      </div>
                    </div>
                    {c?.hasBands && <>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", paddingTop: "6px", fontSize: "12px", color: "#6A746E" }}>
                        <span style={{ width: "14px", height: "10px", borderRadius: "3px", background: "#E1F2E6", border: "1px solid #CFE5C8" }} />
                        {"Target range between refill point and field capacity · Soil type: "}{S(c?.soilName)}
                      </div>
                    </>}
                    <div style={{ display: "flex", justifyContent: "center", gap: "6px 16px", flexWrap: "wrap", paddingTop: "6px" }}>
                      {L(c?.legend).map((lg, i26) => <React.Fragment key={i26}>
                        <span onClick={lg?.toggle} title="Click to show only this depth" style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12.5px", color: `${A(lg?.text)}`, cursor: "pointer", userSelect: "none", whiteSpace: "nowrap" }}>
                          <span style={{ width: "8px", height: "8px", borderRadius: "5px", background: `${A(lg?.color)}` }} />
                          {S(lg?.label)}
                        </span>
                      </React.Fragment>)}
                    </div>
                  </div>
                </React.Fragment>)}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>)}
    </div>
    </>
  );
}
