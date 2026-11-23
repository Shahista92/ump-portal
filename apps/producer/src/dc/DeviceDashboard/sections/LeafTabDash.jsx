import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';

export default function LeafTabDash({ V }) {
  return (
    <>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "16px", alignItems: "stretch" }}>
      <div style={{ background: "#fff", border: "1px solid #E3EAE5", borderRadius: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.05)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px", animation: "wxChartIn .6s ease both" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ width: "32px", height: "32px", flex: "0 0 32px", borderRadius: "10px", background: "#FFF1E7", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0zM12 9v5" /></svg></span>
          <span style={{ fontSize: "18px", fontWeight: "700", color: "#EA580C" }}>Leaf Temperature</span>
        </div>
        <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ position: "relative", width: "64px", height: "64px", flex: "0 0 64px", borderRadius: "50%", background: "radial-gradient(circle at 50% 40%, #FFEDD5 0%, #FFF7ED 70%)", boxShadow: "inset 0 0 0 1px #FED7AA", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0z" fill="#fff" stroke="#EA580C" strokeWidth="1.6" />
                <path d="M12 9.5v6" stroke="#DC2626" strokeWidth="2.2" />
                <circle cx="12" cy="17.2" r="2" fill="#DC2626" stroke="none" />
                <path d="M16.5 6h2M16.5 8.5h1.5M16.5 11h2" stroke="#FB923C" strokeWidth="1.4" />
              </svg>
            </span>
            <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
              <span style={{ fontSize: "48px", lineHeight: "1", fontWeight: "800", letterSpacing: "-1px", color: "#0F1A14", fontVariantNumeric: "tabular-nums" }}>{S(V.leafTemp?.value)}</span>
              <span style={{ fontSize: "18px", fontWeight: "600", color: "#4C6354" }}>°C</span>
            </div>
          </div>
          <span style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "#6A746E", whiteSpace: "nowrap" }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill={V.leafTemp?.deltaInk} stroke="none"><path d={V.leafTemp?.deltaPath} /></svg>
            <b style={{ color: `${A(V.leafTemp?.deltaInk)}` }}>{S(V.leafTemp?.delta)}</b>
            {" vs previous reading"}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span style={{ fontSize: "12.5px", color: "#7A8580" }}>Last 3 hours</span>
          <div style={{ position: "relative" }} onMouseLeave={V.leafTempSpark?.leave}>
            <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width: "100%", height: "26px", display: "block", overflow: "visible" }}>
              <path d={V.leafTempSpark?.area} fill="#EA580C" opacity="0.08" stroke="none" />
              <path d={V.leafTempSpark?.path} fill="none" stroke="#EA580C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            </svg>
            <div style={{ position: "absolute", inset: "-6px 0", display: "flex" }}>
              {L(V.leafTempSpark?.hits).map((hp, i143) => <React.Fragment key={i143}>
                <div onMouseEnter={hp?.enter} style={{ flex: "1", height: "100%", cursor: "crosshair" }} />
              </React.Fragment>)}
            </div>
            {V.leafTempSpark?.active && <>
              <span style={{ position: "absolute", left: `${A(V.leafTempSpark?.active?.left)}`, top: `${A(V.leafTempSpark?.active?.top)}`, width: "7px", height: "7px", borderRadius: "50%", background: "#fff", border: "2px solid #EA580C", boxSizing: "border-box", pointerEvents: "none" }} />
              <div style={{ position: "absolute", left: `${A(V.leafTempSpark?.active?.tipLeft)}`, bottom: "calc(100% + 8px)", transform: `translateX(${A(V.leafTempSpark?.active?.shift)})`, background: "#043C2C", color: "#fff", borderRadius: "7px", padding: "5px 8px", fontSize: "13px", whiteSpace: "nowrap", pointerEvents: "none", zIndex: "5", boxShadow: "0 6px 16px rgba(15,26,20,.2)" }}>
                <div style={{ fontWeight: "800", fontVariantNumeric: "tabular-nums" }}>{S(V.leafTempSpark?.active?.value)}</div>
                <div style={{ fontSize: "11.5px", color: "#C9D1CC" }}>{S(V.leafTempSpark?.active?.when)}</div>
              </div>
            </>}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", borderTop: "1px solid #EDF0EE", paddingTop: "10px", fontSize: "13px", color: "#7A8580", fontVariantNumeric: "tabular-nums" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {"Min "}
              <b style={{ color: "#0F1A14" }}>{S(V.leafTemp?.min)}</b>
            </span>
            <span>{"observed at "}{S(V.leafTemp?.minAt)}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "flex-end", textAlign: "right" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {"Max "}
              <b style={{ color: "#0F1A14" }}>{S(V.leafTemp?.max)}</b>
            </span>
            <span>{"observed at "}{S(V.leafTemp?.maxAt)}</span>
          </div>
        </div>
      </div>
      <div style={{ background: "#fff", border: "1px solid #E3EAE5", borderRadius: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.05)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px", animation: "wxChartIn .6s ease both" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ width: "32px", height: "32px", flex: "0 0 32px", borderRadius: "10px", background: "#E0F2FE", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3s5 5.5 5 9a5 5 0 0 1-10 0c0-3.5 5-9 5-9z" /></svg></span>
          <span style={{ flex: "1", fontSize: "18px", fontWeight: "700", color: "#0284C7" }}>Leaf Wetness</span>
        </div>
        <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: "230px" }}>
            <svg viewBox="0 0 220 132" style={{ width: "100%", display: "block", overflow: "visible" }}>
              <defs>
                <linearGradient id="lwGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#BAE6FD" />
                  <stop offset=".5" stopColor="#38BDF8" />
                  <stop offset="1" stopColor="#1E3A8A" />
                </linearGradient>
              </defs>
              <path d="M30 110 A80 80 0 0 1 190 110" fill="none" stroke="url(#lwGrad)" strokeWidth="16" />
              <g transform={V.leafWet?.needle}><path d="M20 110 L54 106.5 L54 113.5 Z" fill="#1F2A24" /></g>
              <text x="110" y="14" textAnchor="middle" fontSize="11" fill="#7A8580">50</text>
              <text x="30" y="130" textAnchor="middle" fontSize="11" fill="#7A8580">0</text>
              <text x="190" y="130" textAnchor="middle" fontSize="11" fill="#7A8580">100</text>
            </svg>
            <div style={{ position: "absolute", left: "0", right: "0", top: "46%", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", pointerEvents: "none" }}>
              <span style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
                <span style={{ fontSize: "38.5px", lineHeight: "1", fontWeight: "800", letterSpacing: "-1px", color: "#0F1A14", fontVariantNumeric: "tabular-nums" }}>{S(V.leafWet?.value)}</span>
                <span style={{ fontSize: "17px", fontWeight: "600", color: "#4C6354" }}>%</span>
              </span>
            </div>
          </div>
          <span style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "#6A746E", whiteSpace: "nowrap" }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill={V.leafWet?.deltaInk} stroke="none"><path d={V.leafWet?.deltaPath} /></svg>
            <b style={{ color: `${A(V.leafWet?.deltaInk)}` }}>{S(V.leafWet?.delta)}</b>
            {" vs previous reading"}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span style={{ fontSize: "12.5px", color: "#7A8580" }}>Last 3 hours</span>
          <div style={{ position: "relative" }} onMouseLeave={V.leafWetSpark?.leave}>
            <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width: "100%", height: "26px", display: "block", overflow: "visible" }}>
              <path d={V.leafWetSpark?.area} fill="#0284C7" opacity="0.08" stroke="none" />
              <path d={V.leafWetSpark?.path} fill="none" stroke="#0284C7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            </svg>
            <div style={{ position: "absolute", inset: "-6px 0", display: "flex" }}>
              {L(V.leafWetSpark?.hits).map((hp, i144) => <React.Fragment key={i144}>
                <div onMouseEnter={hp?.enter} style={{ flex: "1", height: "100%", cursor: "crosshair" }} />
              </React.Fragment>)}
            </div>
            {V.leafWetSpark?.active && <>
              <span style={{ position: "absolute", left: `${A(V.leafWetSpark?.active?.left)}`, top: `${A(V.leafWetSpark?.active?.top)}`, width: "7px", height: "7px", borderRadius: "50%", background: "#fff", border: "2px solid #0284C7", boxSizing: "border-box", pointerEvents: "none" }} />
              <div style={{ position: "absolute", left: `${A(V.leafWetSpark?.active?.tipLeft)}`, bottom: "calc(100% + 8px)", transform: `translateX(${A(V.leafWetSpark?.active?.shift)})`, background: "#043C2C", color: "#fff", borderRadius: "7px", padding: "5px 8px", fontSize: "13px", whiteSpace: "nowrap", pointerEvents: "none", zIndex: "5", boxShadow: "0 6px 16px rgba(15,26,20,.2)" }}>
                <div style={{ fontWeight: "800", fontVariantNumeric: "tabular-nums" }}>{S(V.leafWetSpark?.active?.value)}</div>
                <div style={{ fontSize: "11.5px", color: "#C9D1CC" }}>{S(V.leafWetSpark?.active?.when)}</div>
              </div>
            </>}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", borderTop: "1px solid #EDF0EE", paddingTop: "10px", fontSize: "13px", color: "#7A8580", fontVariantNumeric: "tabular-nums" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {"Min "}
              <b style={{ color: "#0F1A14" }}>{S(V.leafWet?.min)}</b>
            </span>
            <span>{"observed at "}{S(V.leafWet?.minAt)}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "flex-end", textAlign: "right" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {"Max "}
              <b style={{ color: "#0F1A14" }}>{S(V.leafWet?.max)}</b>
            </span>
            <span>{"observed at "}{S(V.leafWet?.maxAt)}</span>
          </div>
        </div>
      </div>
    </div>
    <div style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}>
      <div style={{ display: "flex", alignItems: "stretch", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "10px", overflow: "hidden", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
        {L(V.leafRanges).map((r, i145) => <React.Fragment key={i145}>
          <div onClick={r?.select} style={{ minWidth: "44px", padding: "9px 14px", fontSize: "14.5px", fontWeight: `${A(r?.weight)}`, textAlign: "center", cursor: "pointer", color: `${A(r?.color)}`, background: `${A(r?.bg)}`, borderRight: "1px solid #EEF1EF" }}>{S(r?.label)}</div>
        </React.Fragment>)}
        <div onClick={V.leafToggleCustom} title="Pick a custom date range" style={{ padding: "9px 14px", display: "flex", alignItems: "center", gap: "7px", fontSize: "14.5px", fontWeight: "700", cursor: "pointer", background: `${A(V.leafCustomBg)}`, color: `${A(V.leafCustomInk)}` }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px" }}><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" /></svg>
          {S(V.leafCustomLabel)}
        </div>
      </div>
      {V.leafCustomOpen && <>
        <div style={{ position: "absolute", top: "calc(100% + 8px)", right: "0", width: "300px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "14px", boxShadow: "0 22px 54px rgba(15,26,20,.18)", padding: "16px", zIndex: "50", display: "flex", flexDirection: "column", gap: "12px" }}>
          <span style={{ fontSize: "15.5px", fontWeight: "700", color: "#0F1A14" }}>Custom Range</span>
          <div style={{ display: "flex", gap: "9px" }}>
            <label style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>
              FROM
              <input type="date" value={V.leafDraftFrom ?? ""} min={V.leafMinDate} max={V.leafMaxDate} onChange={V.onLeafDraftFrom} style={{ border: "1.5px solid #D5DED8", borderRadius: "9px", padding: "8px", fontSize: "14.5px", color: "#0F1A14", fontFamily: "inherit", minWidth: "0" }} />
            </label>
            <label style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>
              TO
              <input type="date" value={V.leafDraftTo ?? ""} min={V.leafMinDate} max={V.leafMaxDate} onChange={V.onLeafDraftTo} style={{ border: "1.5px solid #D5DED8", borderRadius: "9px", padding: "8px", fontSize: "14.5px", color: "#0F1A14", fontFamily: "inherit", minWidth: "0" }} />
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <div onClick={V.leafCancelCustom} style={{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #E5E8E6", fontSize: "14.5px", fontWeight: "600", color: "#3F4B45", cursor: "pointer" }}>Cancel</div>
            <div onClick={V.leafApplyCustom} style={{ padding: "8px 14px", borderRadius: "8px", background: "#1AA34A", fontSize: "14.5px", fontWeight: "700", color: "#fff", cursor: "pointer" }}>Apply</div>
          </div>
        </div>
      </>}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 560px), 1fr))", gap: "16px" }}>
      {L(V.leafCharts).map((p, i146) => <React.Fragment key={i146}>
        <div style={{ background: "#FFFFFF", border: "1px solid #CFE5C8", borderRadius: "18px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 6px 18px rgba(16,24,40,.05)", padding: "22px 24px 16px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0", animation: "wxChartIn .6s ease both" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <div style={{ fontSize: "18px", fontWeight: "700", color: `${A(p?.color)}`, flex: "1", minWidth: "150px" }}>{S(p?.title)}</div>
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
          <div style={{ minWidth: "0", display: "grid", gridTemplateColumns: "42px minmax(0,1fr)", gap: "6px", alignContent: "start" }}>
            <div style={{ position: "relative", height: "196px" }}>
              {L(p?.ticks).map((tk, i147) => <React.Fragment key={i147}>
                <span style={{ position: "absolute", right: "0", top: `${A(tk?.top)}`, transform: "translateY(-50%)", fontSize: "12.5px", color: "#6A746E", fontVariantNumeric: "tabular-nums" }}>{S(tk?.label)}</span>
              </React.Fragment>)}
            </div>
            <div ref={V.zoomRef} data-zkey={p?.zkey} onMouseMove={p?.onMove} onMouseLeave={p?.onLeave} style={{ position: "relative", height: "196px", cursor: "crosshair" }}>
              {p?.band && <>
                <div style={{ position: "absolute", left: "0", right: "0", top: `${A(p?.band?.top)}`, height: `${A(p?.band?.height)}`, background: "#0284C7", opacity: ".06" }} />
                <span style={{ position: "absolute", right: "4px", top: `${A(p?.band?.top)}`, marginTop: "4px", fontSize: "12.5px", fontWeight: "700", color: "#0369A1" }}>{S(p?.band?.label)}</span>
              </>}
              {L(p?.grid).map((g, i148) => <React.Fragment key={i148}>
                <div style={{ position: "absolute", left: "0", right: "0", top: `${A(g)}`, borderTop: "1px dashed #E3E9E5" }} />
              </React.Fragment>)}
              <svg viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                <defs>
                  <linearGradient id={p?.gid} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor={p?.color} stopOpacity=".28" />
                    <stop offset="1" stopColor={p?.color} stopOpacity="0" />
                  </linearGradient>
                </defs>
                {L(p?.bars).map((br, i149) => <React.Fragment key={i149}>
                  <rect x={br?.x} y={br?.y} width={br?.w} height={br?.h} rx="3" fill={p?.color} fillOpacity={br?.op} style={{ transformOrigin: "0 190px", animation: "wxGrowBar .7s ease-out both" }} />
                </React.Fragment>)}
                {p?.isLine && <>
                  <path d={p?.area} fill={`url(#${A(p?.gid)})`} stroke="none" />
                  <path d={p?.line} fill="none" stroke={p?.color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" pathLength="460" style={{ strokeDasharray: "460", animation: "wxDrawLine 1.5s ease-out both" }} />
                </>}
              </svg>
              {p?.isLine && <>
                <span style={{ position: "absolute", left: "100%", top: `${A(p?.endTop)}`, width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", borderRadius: "50%", background: `${A(p?.color)}`, boxShadow: "0 0 0 4px #fff", pointerEvents: "none" }} />
              </>}
              {p?.hover && <>
                <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(p?.hover?.left)}`, borderLeft: "1px solid #9CA8A1", pointerEvents: "none" }} />
                {p?.hover?.dot && <>
                  <span style={{ position: "absolute", left: `${A(p?.hover?.left)}`, top: `${A(p?.hover?.top)}`, width: "11px", height: "11px", margin: "-5.5px 0 0 -5.5px", borderRadius: "50%", background: "#fff", border: `2.5px solid ${A(p?.color)}`, boxSizing: "border-box", pointerEvents: "none" }} />
                </>}
                <div style={{ position: "absolute", top: "4px", left: `${A(p?.hover?.left)}`, transform: `translateX(${A(p?.hover?.shift)})`, margin: "0 10px", background: "#043C2C", color: "#F3F4F6", borderRadius: "10px", padding: "8px 11px", fontSize: "14px", whiteSpace: "nowrap", pointerEvents: "none", boxShadow: "0 10px 24px rgba(0,0,0,.2)", zIndex: "3", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ color: "#D1D8D4" }}>{S(p?.hover?.time)}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: `${A(p?.color)}` }} />
                    <b style={{ color: "#fff" }}>{S(p?.hover?.value)}</b>
                  </span>
                  {p?.dual && <>
                    <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: `${A(p?.color2)}` }} />
                      <b style={{ color: "#fff" }}>{S(p?.hover?.value2)}</b>
                    </span>
                  </>}
                </div>
                {p?.dual && <>
                  <span style={{ position: "absolute", left: `${A(p?.hover?.left)}`, top: `${A(p?.hover?.top2)}`, width: "11px", height: "11px", margin: "-5.5px 0 0 -5.5px", borderRadius: "50%", background: "#fff", border: `2.5px solid ${A(p?.color2)}`, boxSizing: "border-box", pointerEvents: "none" }} />
                </>}
              </>}
            </div>
            {p?.dual && <>
              <div style={{ position: "relative", height: "240px" }}>
                {L(p?.ticks2).map((tk, i150) => <React.Fragment key={i150}>
                  <span style={{ position: "absolute", left: "0", top: `${A(tk?.top)}`, transform: "translateY(-50%)", fontSize: "12.5px", color: `${A(p?.color2)}`, fontVariantNumeric: "tabular-nums" }}>{S(tk?.label)}</span>
                </React.Fragment>)}
              </div>
            </>}
            <div />
            <div style={{ position: "relative", height: "30px" }}>
              {L(p?.xLabels).map((xl, i151) => <React.Fragment key={i151}>
                <span style={{ position: "absolute", left: `${A(xl?.left)}`, top: "4px", transform: `translateX(${A(xl?.shift)})`, display: "flex", flexDirection: "column", alignItems: "center", fontSize: "12.5px", lineHeight: "1.25", color: "#6A746E", whiteSpace: "nowrap" }}>
                  <span style={{ fontWeight: "600", color: "#3F4B45" }}>{S(xl?.top)}</span>
                  <span>{S(xl?.bot)}</span>
                </span>
              </React.Fragment>)}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", borderTop: "1px solid #D8E7D4", paddingTop: "10px", fontSize: "13px", color: "#7A8580", fontVariantNumeric: "tabular-nums" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span>
                {"Min "}
                <b style={{ color: "#0F1A14" }}>{S(p?.minVal)}</b>
              </span>
              <span>{"observed at "}{S(p?.minWhen)}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "flex-end", textAlign: "right" }}>
              <span>
                {"Max "}
                <b style={{ color: "#0F1A14" }}>{S(p?.maxVal)}</b>
              </span>
              <span>{"observed at "}{S(p?.maxWhen)}</span>
            </div>
          </div>
        </div>
      </React.Fragment>)}
    </div>
    </>
  );
}
