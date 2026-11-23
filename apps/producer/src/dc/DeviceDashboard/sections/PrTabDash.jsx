import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';

export default function PrTabDash({ V }) {
  return (
    <>
    <div style={{ position: "relative", zIndex: "5", display: "flex", justifyContent: "flex-end" }}>
      <div style={{ display: "flex", alignItems: "stretch", maxWidth: "100%", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "10px", overflow: "hidden", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
        {L(V.prRanges).map((r, i171) => <React.Fragment key={i171}>
          <div onClick={r?.select} style={{ flex: "1 1 auto", minWidth: "0", padding: "9px 10px", fontSize: "14.5px", fontWeight: `${A(r?.weight)}`, textAlign: "center", cursor: "pointer", color: `${A(r?.color)}`, background: `${A(r?.bg)}`, borderRight: "1px solid #EEF1EF" }}>{S(r?.label)}</div>
        </React.Fragment>)}
        <div onClick={V.prToggleCustom} title="Pick a custom date range" style={{ flex: "0 0 auto", padding: "9px 10px", display: "flex", alignItems: "center", gap: "7px", fontSize: "14.5px", fontWeight: "700", cursor: "pointer", background: `${A(V.prCustomBg)}`, color: `${A(V.prCustomInk)}` }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px" }}><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" /></svg>
          {S(V.prCustomLabel)}
        </div>
      </div>
      {V.prCustomOpen && <>
        <div style={{ position: "absolute", top: "calc(100% + 8px)", right: "0", width: "300px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "14px", boxShadow: "0 22px 54px rgba(15,26,20,.18)", padding: "16px", zIndex: "50", display: "flex", flexDirection: "column", gap: "12px" }}>
          <span style={{ fontSize: "15.5px", fontWeight: "700", color: "#0F1A14" }}>Custom Range</span>
          <div style={{ display: "flex", gap: "9px" }}>
            <label style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>
              FROM
              <input type="date" value={V.prDraftFrom ?? ""} min={V.prMinDate} max={V.prMaxDate} onChange={V.onLvDraftFrom} style={{ border: "1.5px solid #D5DED8", borderRadius: "9px", padding: "8px", fontSize: "14.5px", color: "#0F1A14", fontFamily: "inherit", minWidth: "0" }} />
            </label>
            <label style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>
              TO
              <input type="date" value={V.prDraftTo ?? ""} min={V.prMinDate} max={V.prMaxDate} onChange={V.onLvDraftTo} style={{ border: "1.5px solid #D5DED8", borderRadius: "9px", padding: "8px", fontSize: "14.5px", color: "#0F1A14", fontFamily: "inherit", minWidth: "0" }} />
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <div onClick={V.prCancelCustom} style={{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #E5E8E6", fontSize: "14.5px", fontWeight: "600", color: "#3F4B45", cursor: "pointer" }}>Cancel</div>
            <div onClick={V.prApplyCustom} style={{ padding: "8px 14px", borderRadius: "8px", background: "#1AA34A", fontSize: "14.5px", fontWeight: "700", color: "#fff", cursor: "pointer" }}>Apply</div>
          </div>
        </div>
      </>}
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "stretch" }}>
      <div style={{ flex: "1 1 360px", boxSizing: "border-box", minWidth: "312px", maxWidth: "100%", background: "#fff", border: "1px solid #E3EAE5", borderRadius: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.05)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px", animation: "wxChartIn .6s ease both" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ width: "32px", height: "32px", flex: "0 0 32px", borderRadius: "10px", background: "#EEE7FB", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#7C4DDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 12l4-3M12 12V8" /></svg></span>
          <span style={{ flex: "1", fontSize: "18px", fontWeight: "700", color: "#7C4DDA" }}>Air Pressure</span>
        </div>
        <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: "280px" }}>
            <svg viewBox="0 0 220 132" style={{ width: "100%", display: "block", overflow: "visible" }}>
              <path d="M30 110 A80 80 0 0 1 190 110" fill="none" stroke="#EEE7FB" strokeWidth="16" strokeLinecap="round" />
              <path d="M30 110 A80 80 0 0 1 190 110" fill="none" stroke="#A895E6" strokeWidth="16" strokeLinecap="round" pathLength="100" strokeDasharray={V.prNow?.dash} />
              <g transform={V.prNow?.needle}><path d="M20 110 L54 106.5 L54 113.5 Z" fill="#1F2A24" /></g>
              <text x="110" y="14" textAnchor="middle" fontSize="11" fill="#7A8580">1010</text>
              <text x="30" y="130" textAnchor="middle" fontSize="11" fill="#7A8580">980</text>
              <text x="190" y="130" textAnchor="middle" fontSize="11" fill="#7A8580">1040</text>
            </svg>
            <div style={{ position: "absolute", left: "0", right: "0", top: "50%", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", pointerEvents: "none" }}>
              <span style={{ fontSize: "38.5px", lineHeight: "1", fontWeight: "800", letterSpacing: "-1px", color: "#0F1A14", fontVariantNumeric: "tabular-nums" }}>{S(V.prNow?.value)}</span>
              <span style={{ fontSize: "15.5px", fontWeight: "600", color: "#4C6354" }}>hPa</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", textAlign: "center" }}>
            <span style={{ fontSize: "14px", color: "#6A746E" }}>15-minute reading · 08 Oct 2026 2:42 PM</span>
            <span style={{ marginTop: "22px", fontSize: "15px", color: "#6A746E", whiteSpace: "nowrap" }}>
              <b style={{ color: `${A(V.prNow?.deltaInk)}`, fontVariantNumeric: "tabular-nums" }}>{S(V.prNow?.delta)}</b>
              {" since previous reading"}
            </span>
          </div>
        </div>
      </div>
      <div style={{ flex: "999 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 118px), 1fr))", gap: "12px" }}>
          {L(V.prStats).map((s, i172) => <React.Fragment key={i172}>
            <div style={{ boxSizing: "border-box", background: "#fff", border: "1px solid #E3EAE5", borderRadius: "16px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.05)", padding: "12px 14px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "4px", minWidth: "0" }}>
              <span style={{ fontSize: "14.5px", fontWeight: "700", color: "#6B55C4", lineHeight: "1.3" }}>{S(s?.label)}</span>
              <span style={{ fontSize: "26.5px", lineHeight: "1.15", fontWeight: "800", whiteSpace: "nowrap", color: `${A(s?.ink)}`, fontVariantNumeric: "tabular-nums" }}>
                {S(s?.value)}
                <span style={{ fontSize: "15.5px", fontWeight: "600", color: "#4C6354" }}>{" "}{S(s?.unit)}</span>
              </span>
              <span style={{ fontSize: "13px", color: "#6A746E", lineHeight: "1.4", fontVariantNumeric: "tabular-nums" }}>{S(s?.note)}</span>
            </div>
          </React.Fragment>)}
        </div>
        <div>
          {L(V.prCharts).map((p, i173) => <React.Fragment key={i173}>
            <div style={{ width: "100%", boxSizing: "border-box", background: "#FFFFFF", border: "1px solid #E3EAE5", borderRadius: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.05)", padding: "22px 24px 16px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0", animation: "wxChartIn .6s ease both" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <div style={{ fontSize: "18px", fontWeight: "700", color: "#7C4DDA", flex: "1", minWidth: "150px" }}>{S(p?.title)}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
                  {p?.zoomed && <>
                    <span onClick={p?.zoomReset} style={{ fontSize: "13px", fontWeight: "700", color: "#0E7C3A", cursor: "pointer", padding: "5px 8px", borderRadius: "6px", background: "#E7F6EC" }}>Reset</span>
                  </>}
                  <div style={{ display: "flex", alignItems: "stretch", border: "1px solid #E5E8E6", borderRadius: "8px", overflow: "hidden" }}>
                    <span className="scp2o" onClick={p?.zoomOut} title="Zoom out" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45", borderRight: "1px solid #EEF1EF" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4M8 11h6" /></svg></span>
                    <span className="scp2o" onClick={p?.zoomIn} title="Zoom in" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4M8 11h6M11 8v6" /></svg></span>
                  </div>
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "0", display: "grid", gridTemplateColumns: "42px minmax(0,1fr)", gap: "6px", alignContent: "center" }}>
                <div style={{ position: "relative", height: "240px" }}>
                  {L(p?.ticks).map((tk, i174) => <React.Fragment key={i174}>
                    <span style={{ position: "absolute", right: "0", top: `${A(tk?.top)}`, transform: "translateY(-50%)", fontSize: "12.5px", color: "#6A746E", fontVariantNumeric: "tabular-nums" }}>{S(tk?.label)}</span>
                  </React.Fragment>)}
                </div>
                <div ref={V.zoomRef} data-zkey={p?.zkey} onMouseMove={p?.onMove} onMouseLeave={p?.onLeave} style={{ position: "relative", height: "240px", cursor: "crosshair" }}>
                  {L(p?.grid).map((g, i175) => <React.Fragment key={i175}>
                    <div style={{ position: "absolute", left: "0", right: "0", top: `${A(g)}`, borderTop: "1px dashed #E3E9E5" }} />
                  </React.Fragment>)}
                  {L(p?.refs).map((rf, i176) => <React.Fragment key={i176}>
                    <div style={{ position: "absolute", left: "0", right: "0", top: `${A(rf?.top)}`, borderTop: `1.5px dashed ${A(rf?.color)}`, opacity: ".85", pointerEvents: "none" }} />
                    <span style={{ position: "absolute", left: "8px", top: `${A(rf?.top)}`, transform: `translateY(${A(rf?.lt)})`, marginTop: "-1px", fontSize: "12.5px", fontWeight: "700", color: `${A(rf?.color)}`, background: "rgba(255,255,255,.9)", padding: "1px 5px", borderRadius: "4px", whiteSpace: "nowrap", pointerEvents: "none", fontVariantNumeric: "tabular-nums" }}>{S(rf?.label)}</span>
                  </React.Fragment>)}
                  <svg viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                    <defs>
                      <linearGradient id={p?.gid} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#A895E6" stopOpacity=".3" />
                        <stop offset="1" stopColor="#A895E6" stopOpacity=".02" />
                      </linearGradient>
                    </defs>
                    <path d={p?.area} fill={`url(#${A(p?.gid)})`} stroke="none" />
                    <path d={p?.line} fill="none" stroke="#8C74DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <span style={{ position: "absolute", left: "100%", top: `${A(p?.endTop)}`, width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", borderRadius: "50%", background: "#7C4DDA", boxShadow: "0 0 0 4px #fff", pointerEvents: "none" }} />
                  {p?.hover && <>
                    <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(p?.hover?.left)}`, borderLeft: "1px solid #9CA8A1", pointerEvents: "none" }} />
                    <span style={{ position: "absolute", left: `${A(p?.hover?.left)}`, top: `${A(p?.hover?.top)}`, width: "11px", height: "11px", margin: "-5.5px 0 0 -5.5px", borderRadius: "50%", background: "#fff", border: "2.5px solid #7C4DDA", boxSizing: "border-box", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", top: "4px", left: `${A(p?.hover?.left)}`, transform: `translateX(${A(p?.hover?.shift)})`, margin: "0 10px", background: "#043C2C", color: "#F3F4F6", borderRadius: "10px", padding: "8px 11px", fontSize: "14px", whiteSpace: "nowrap", pointerEvents: "none", boxShadow: "0 10px 24px rgba(0,0,0,.2)", zIndex: "3", display: "flex", flexDirection: "column", gap: "3px" }}>
                      <span style={{ color: "#D1D8D4" }}>{S(p?.hover?.time)}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#7C4DDA" }} />
                        <b style={{ color: "#fff" }}>{S(p?.hover?.value)}</b>
                      </span>
                    </div>
                  </>}
                </div>
                <div />
                <div style={{ position: "relative", height: "22px" }}>
                  {L(p?.xLabels).map((xl, i177) => <React.Fragment key={i177}>
                    <span style={{ position: "absolute", left: `${A(xl?.left)}`, top: "4px", transform: `translateX(${A(xl?.shift)})`, fontSize: "12.5px", color: "#3F4B45", fontWeight: "600", whiteSpace: "nowrap" }}>{S(xl?.bot)}</span>
                  </React.Fragment>)}
                </div>
                {p?.dual && <>
                  <div />
                </>}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1px solid #EDF0EE", paddingTop: "10px" }}>
                {L(p?.foot).map((ft, i178) => <React.Fragment key={i178}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "12px", fontSize: "13px", color: "#7A8580", fontVariantNumeric: "tabular-nums" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontWeight: "700", color: `${A(ft?.color)}` }}>{S(ft?.label)}</span>
                      <span>
                        {"Min "}
                        <b style={{ color: "#0F1A14" }}>{S(ft?.minVal)}</b>
                      </span>
                      <span>{"observed at "}{S(ft?.minWhen)}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "flex-end", textAlign: "right" }}>
                      <span>
                        {"Max "}
                        <b style={{ color: "#0F1A14" }}>{S(ft?.maxVal)}</b>
                      </span>
                      <span>{"observed at "}{S(ft?.maxWhen)}</span>
                    </div>
                  </div>
                </React.Fragment>)}
              </div>
            </div>
          </React.Fragment>)}
        </div>
      </div>
    </div>
    </>
  );
}
