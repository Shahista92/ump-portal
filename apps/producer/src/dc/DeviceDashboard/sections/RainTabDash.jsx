import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';

export default function RainTabDash({ V }) {
  return (
    <>
    <div style={{ background: "#fff", border: "1px solid #E3EAE5", borderRadius: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.05)", padding: "18px 20px", display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "stretch", animation: "wxChartIn .6s ease both" }}>
      <div style={{ flex: "0 1 260px", minWidth: "210px", borderRadius: "14px", background: "#EEF5FD", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px", paddingBottom: "10px", marginBottom: "4px", borderBottom: "1px solid #D9E7F6" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#FFFFFF", border: `1px solid ${A(V.rainStatus?.bd)}`, borderRadius: "999px", padding: "4px 10px 4px 8px", fontSize: "14.5px", fontWeight: "600", color: `${A(V.rainStatus?.ink)}`, whiteSpace: "nowrap" }}>
            {V.rainStatus?.on && <>
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 13a4 4 0 0 1 .5-7.97A5 5 0 0 1 17 6a3.5 3.5 0 0 1 0 7z" />
                <path d="M8.5 16l-.8 3M12 16l-.8 3M15.5 16l-.8 3" />
              </svg>
            </>}
            {V.rainStatus?.off && <>
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 15a4 4 0 0 1 .5-7.97A5 5 0 0 1 17 8a3.5 3.5 0 0 1 0 7z" /></svg>
            </>}
            {S(V.rainStatus?.label)}
          </span>
          <span style={{ fontSize: "14.5px", color: "#64748B" }}>{S(V.rainStatus?.sub)}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "30px", height: "30px", flex: "0 0 30px", borderRadius: "9px", background: "#fff", color: "#2A6FDB", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13a5 5 0 0 1 4-8 5 5 0 0 1 8 3 3 3 0 0 1 0 6H7M9 20l1-2M13 21l1-2M17 20l1-2" /></svg></span>
          <span style={{ fontSize: "15px", fontWeight: "700", color: "#2A6FDB" }}>Since 9 AM</span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginTop: "4px" }}>
          <span style={{ fontSize: "45.5px", lineHeight: "1", fontWeight: "800", letterSpacing: "-.8px", color: "#0F1A14", fontVariantNumeric: "tabular-nums" }}>{S(V.rainHero?.value)}</span>
          <span style={{ fontSize: "18px", fontWeight: "600", color: "#4C6354" }}>mm</span>
        </div>
        <span style={{ fontSize: "14.5px", color: "#4C6354", lineHeight: "1.45", whiteSpace: "nowrap" }}>{S(V.rainHero?.note)}</span>
      </div>
      <div style={{ flex: "1 1 520px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(118px, 1fr))", gap: "10px" }}>
        {L(V.rainSummary).map((s, i114) => <React.Fragment key={i114}>
          <div style={{ border: "1px solid #E3EAF0", borderRadius: "12px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}>
            <span style={{ fontSize: "14.5px", color: "#6A746E", whiteSpace: "nowrap" }}>{S(s?.label)}</span>
            <span style={{ fontSize: "26.5px", lineHeight: "1", fontWeight: "800", color: `${A(s?.ink)}`, fontVariantNumeric: "tabular-nums" }}>
              {S(s?.value)}
              <span style={{ fontSize: "14px", fontWeight: "500", color: "#6A746E", marginLeft: "3px" }}>mm</span>
            </span>
            <div style={{ height: "6px", borderRadius: "3px", background: "#EEF2F5", overflow: "hidden", marginTop: "auto" }}><div style={{ height: "100%", width: `${A(s?.w)}`, borderRadius: "3px", background: "#5FA4CC" }} /></div>
          </div>
        </React.Fragment>)}
      </div>
    </div>
    <div style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}>
      <div style={{ display: "flex", alignItems: "stretch", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "7px", overflow: "hidden" }}>
        {L(V.rainRanges).map((r, i115) => <React.Fragment key={i115}>
          <div onClick={r?.select} style={{ padding: "8px 13px", fontSize: "14px", fontWeight: "600", cursor: "pointer", color: `${A(r?.color)}`, background: `${A(r?.bg)}`, borderRight: "1px solid #EEF1EF" }}>{S(r?.label)}</div>
        </React.Fragment>)}
        <div onClick={V.rainToggleCustom} title="Pick a custom date range" style={{ padding: "8px 13px", display: "flex", alignItems: "center", gap: "7px", fontSize: "14px", fontWeight: "600", cursor: "pointer", background: `${A(V.rainCustomBg)}`, color: `${A(V.rainCustomInk)}` }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ width: "13px", height: "13px" }}><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" /></svg>
          {S(V.rainCustomLabel)}
        </div>
      </div>
      {V.rainCustomOpen && <>
        <div style={{ position: "absolute", top: "44px", right: "0", width: "330px", maxWidth: "calc(100vw - 32px)", boxSizing: "border-box", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "14px", boxShadow: "0 22px 54px rgba(15,26,20,.18)", padding: "16px", zIndex: "50" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "14px" }}>
            <span style={{ fontSize: "15.5px", fontWeight: "700", color: "#0F1A14" }}>Custom Range</span>
            <span style={{ flex: "1" }} />
            <span style={{ background: "#E7F6EC", color: "#0E7C3A", borderRadius: "20px", padding: "3px 10px", fontSize: "12.5px", fontWeight: "600" }}>{S(V.spanLabel)}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <div onClick={V.pickFromEdge} style={{ flex: "1", minWidth: "0", border: `1.5px solid ${A(V.fromBorder)}`, background: `${A(V.fromBg)}`, borderRadius: "9px", padding: "9px 10px", textAlign: "center", cursor: "pointer" }}>
              <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>FROM</div>
              <div style={{ fontSize: "15px", fontWeight: "600", color: "#0F1A14", marginTop: "3px" }}>{S(V.fromPretty)}</div>
            </div>
            <span style={{ color: "#8A948E", fontSize: "15.5px" }}>→</span>
            <div onClick={V.pickToEdge} style={{ flex: "1", minWidth: "0", border: `1.5px solid ${A(V.toBorder)}`, background: `${A(V.toBg)}`, borderRadius: "9px", padding: "9px 10px", textAlign: "center", cursor: "pointer" }}>
              <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>TO</div>
              <div style={{ fontSize: "15px", fontWeight: "600", color: "#0F1A14", marginTop: "3px" }}>{S(V.toPretty)}</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #EDF1EE", marginTop: "14px", paddingTop: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F1A14" }}>{S(V.monthLabel)}</span>
              <span style={{ flex: "1" }} />
              <span className="scp2o" onClick={V.prevMonth} title="Previous month" style={{ width: "24px", height: "24px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45", fontSize: "15.5px" }}>‹</span>
              <span className="scp2o" onClick={V.nextMonth} title="Next month" style={{ width: "24px", height: "24px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: `${A(V.nextInk)}`, fontSize: "15.5px" }}>›</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
              {L(V.dowLabels).map((w, i116) => <React.Fragment key={i116}>
                <div style={{ textAlign: "center", fontSize: "12px", color: "#8A948E", padding: "4px 0 6px" }}>{S(w)}</div>
              </React.Fragment>)}
              {L(V.calDays).map((day, i117) => <React.Fragment key={i117}>
                <div onClick={day?.pick} style={{ height: "28px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", borderRadius: "14px", cursor: `${A(day?.cursor)}`, color: `${A(day?.ink)}`, background: `${A(day?.bg)}`, border: `1px solid ${A(day?.ring)}`, fontWeight: `${A(day?.weight)}` }}>{S(day?.n)}</div>
              </React.Fragment>)}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "16px", paddingTop: "14px" }}>
            <span onClick={V.rainCancelCustom} style={{ fontSize: "14.5px", color: "#6A746E", cursor: "pointer" }}>Cancel</span>
            <span onClick={V.rainApplyCustom} style={{ fontSize: "14.5px", fontWeight: "600", color: "#0E7C3A", cursor: "pointer" }}>Apply</span>
          </div>
        </div>
      </>}
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {L(V.rainCharts).map((p, i118) => <React.Fragment key={i118}>
        <div style={{ order: `${A(p?.order)}`, position: "relative", background: "#fff", border: "none", borderRadius: "16px", boxShadow: "0 1px 3px rgba(16,24,40,.08), 0 1px 2px rgba(16,24,40,.04)", padding: "20px 24px 16px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0", animation: "wxChartIn .6s ease both" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: "0", overflow: "hidden", borderRadius: "inherit", pointerEvents: "none", color: "#0F1A14", opacity: ".045" }}><svg viewBox="0 0 100 64" width="320" height="205" style={{ position: "absolute", top: "-30px", right: "-50px" }} fill="currentColor"><path d="M26 60a18 18 0 0 1-1.6-35.9A26 26 0 0 1 74 20a20 20 0 0 1 2 40z" /></svg></div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <div style={{ fontSize: "21.5px", fontWeight: "800", color: "#0F1A14", flex: "1", minWidth: "150px" }}>{S(p?.title)}</div>
            {V.rainZoomed && <>
              <span onClick={V.rainZoomReset} style={{ fontSize: "13px", fontWeight: "700", color: "#0E7C3A", cursor: "pointer", padding: "5px 8px", borderRadius: "6px", background: "#E7F6EC" }}>Reset</span>
            </>}
            <div style={{ display: "flex", alignItems: "stretch", border: "1px solid #E5E8E6", borderRadius: "8px", overflow: "hidden" }}>
              <span className="scp2o" onClick={V.rainZoomOut} title="Zoom out" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45", borderRight: "1px solid #EEF1EF" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4M8 11h6" /></svg></span>
              <span className="scp2o" onClick={V.rainZoomIn} title="Zoom in" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4M8 11h6M11 8v6" /></svg></span>
            </div>
          </div>
          <div style={{ minWidth: "0", display: "grid", gridTemplateColumns: "44px minmax(0,1fr)", gap: "6px", alignContent: "start" }}>
            <div style={{ position: "relative", height: "230px" }}>
              {L(p?.ticks).map((tk, i119) => <React.Fragment key={i119}>
                <span style={{ position: "absolute", right: "0", top: `${A(tk?.top)}`, transform: "translateY(-50%)", fontSize: "12.5px", color: "#6A746E", fontVariantNumeric: "tabular-nums" }}>{S(tk?.label)}</span>
              </React.Fragment>)}
            </div>
            <div ref={V.rainWheelRef} onMouseDown={p?.onDown} onMouseMove={p?.onMove} onMouseUp={p?.onUp} onMouseLeave={p?.onLeave} title="Scroll or drag across the chart to zoom" style={{ position: "relative", height: "230px", cursor: "crosshair", userSelect: "none" }}>
              {L(p?.grid).map((g, i120) => <React.Fragment key={i120}>
                <div style={{ position: "absolute", left: "0", right: "0", top: `${A(g)}`, borderTop: "1px dashed #E3E9E5" }} />
              </React.Fragment>)}
              <svg viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                <defs>
                  <linearGradient id={`rg-${A(p?.id)}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor={p?.color} stopOpacity=".26" />
                    <stop offset="1" stopColor={p?.color} stopOpacity="0" />
                  </linearGradient>
                </defs>
                {L(p?.bars).map((br, i121) => <React.Fragment key={i121}>
                  <rect x={br?.x} y={br?.y} width={br?.w} height={br?.h} rx="2" fill={p?.color} fillOpacity={br?.op} />
                </React.Fragment>)}
                {p?.isLine && <>
                  <path d={p?.area} fill={`url(#rg-${A(p?.id)})`} stroke="none" />
                  <path d={p?.line} fill="none" stroke={p?.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                </>}
              </svg>
              {p?.sel && <>
                <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(p?.sel?.left)}`, width: `${A(p?.sel?.width)}`, background: "rgba(42,111,219,.12)", borderLeft: "1px solid #2A6FDB", borderRight: "1px solid #2A6FDB", pointerEvents: "none" }} />
              </>}
              {p?.hover && <>
                <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(p?.hover?.left)}`, borderLeft: "1px solid #9CA8A1", pointerEvents: "none" }} />
                <span style={{ position: "absolute", left: `${A(p?.hover?.left)}`, top: `${A(p?.hover?.top)}`, width: "11px", height: "11px", margin: "-5.5px 0 0 -5.5px", borderRadius: "50%", background: "#fff", border: `2.5px solid ${A(p?.color)}`, boxSizing: "border-box", pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: "4px", left: `${A(p?.hover?.left)}`, transform: `translateX(${A(p?.hover?.shift)})`, margin: "0 10px", background: "#043C2C", color: "#F3F4F6", borderRadius: "10px", padding: "8px 11px", fontSize: "14px", whiteSpace: "nowrap", pointerEvents: "none", boxShadow: "0 10px 24px rgba(0,0,0,.2)", zIndex: "3", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ color: "#D1D8D4" }}>{S(p?.hover?.time)}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: `${A(p?.color)}` }} />
                    <b style={{ color: "#fff" }}>{S(p?.hover?.value)}</b>
                    <span style={{ color: "#D1D8D4" }}>{S(p?.hover?.label)}</span>
                  </span>
                </div>
              </>}
            </div>
            <div />
            <div style={{ position: "relative", height: "20px" }}>
              {L(p?.xLabels).map((xl, i122) => <React.Fragment key={i122}>
                <span style={{ position: "absolute", left: `${A(xl?.left)}`, top: "4px", transform: `translateX(${A(xl?.shift)})`, fontSize: "12.5px", fontWeight: "600", color: "#3F4B45", whiteSpace: "nowrap" }}>{S(xl?.text)}</span>
              </React.Fragment>)}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", borderTop: "1px solid #D8E7D4", paddingTop: "12px", fontSize: "14px", color: "#4A524D" }}>
            {L(p?.stats).map((s, i123) => <React.Fragment key={i123}>
              <span style={{ whiteSpace: "nowrap" }}>
                {S(s?.label)}{" "}
                <strong style={{ color: "#0F1A14" }}>{S(s?.value)}</strong>
                <span style={{ color: "#6A746E" }}>{" "}{S(s?.when)}</span>
              </span>
            </React.Fragment>)}
          </div>
        </div>
      </React.Fragment>)}
      <div style={{ order: "2", position: "relative", background: "#fff", border: "none", borderRadius: "16px", boxShadow: "0 1px 3px rgba(16,24,40,.08), 0 1px 2px rgba(16,24,40,.04)", padding: "20px 24px 16px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0", animation: "wxChartIn .6s ease both" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: "0", overflow: "hidden", borderRadius: "inherit", pointerEvents: "none", color: "#0F1A14", opacity: ".045" }}><svg viewBox="0 0 100 64" width="320" height="205" style={{ position: "absolute", top: "-30px", right: "-50px" }} fill="currentColor"><path d="M26 60a18 18 0 0 1-1.6-35.9A26 26 0 0 1 74 20a20 20 0 0 1 2 40z" /></svg></div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          <div style={{ fontSize: "21.5px", fontWeight: "800", color: "#0F1A14", flex: "1", minWidth: "150px" }}>Monthly Rainfall (mm)</div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
            {V.rainMonthly?.zoomed && <>
              <span onClick={V.rainMonthly?.zoomReset} style={{ fontSize: "13px", fontWeight: "700", color: "#0E7C3A", cursor: "pointer", padding: "5px 8px", borderRadius: "6px", background: "#E7F6EC" }}>Reset</span>
            </>}
            <div style={{ display: "flex", alignItems: "stretch", border: "1px solid #E5E8E6", borderRadius: "8px", overflow: "hidden" }}>
              <span className="scp2o" onClick={V.rainMonthly?.zoomOut} title="Zoom out" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45", borderRight: "1px solid #EEF1EF" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4M8 11h6" /></svg></span>
              <span className="scp2o" onClick={V.rainMonthly?.zoomIn} title="Zoom in" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4M8 11h6M11 8v6" /></svg></span>
            </div>
          </div>
        </div>
        <div style={{ minWidth: "0", display: "grid", gridTemplateColumns: "44px minmax(0,1fr)", gap: "6px" }}>
          <div style={{ position: "relative", height: "280px" }}>
            {L(V.rainMonthly?.ticks).map((tk, i124) => <React.Fragment key={i124}>
              <span style={{ position: "absolute", right: "0", top: `${A(tk?.top)}`, transform: "translateY(-50%)", fontSize: "12.5px", color: "#6A746E", fontVariantNumeric: "tabular-nums" }}>{S(tk?.label)}</span>
            </React.Fragment>)}
          </div>
          <div ref={V.zoomRef} data-zkey={V.rainMonthly?.zkey} onMouseMove={V.rainMonthly?.onMove} onMouseLeave={V.rainMonthly?.onLeave} style={{ position: "relative", height: "280px", cursor: "crosshair" }}>
            {L(V.rainMonthly?.grid).map((g, i125) => <React.Fragment key={i125}>
              <div style={{ position: "absolute", left: "0", right: "0", top: `${A(g)}`, borderTop: "1px dashed #E3E9E5" }} />
            </React.Fragment>)}
            <svg viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
              {L(V.rainMonthly?.bars).map((br, i126) => <React.Fragment key={i126}>
                <rect x={br?.x} y={br?.y} width={br?.w} height={br?.h} rx="3" fill="#3B8FD9" fillOpacity={br?.op} style={{ transformOrigin: "0 190px", animation: "wxGrowBar .7s ease-out both" }} />
              </React.Fragment>)}
            </svg>
            {L(V.rainMonthly?.labels).map((bl, i127) => <React.Fragment key={i127}>
              <span style={{ position: "absolute", left: `${A(bl?.left)}`, top: `${A(bl?.top)}`, transform: "translate(-50%, -140%)", fontSize: "12.5px", fontWeight: "700", color: "#3F4B45", pointerEvents: "none", fontVariantNumeric: "tabular-nums" }}>{S(bl?.text)}</span>
            </React.Fragment>)}
            {V.rainMonthly?.hover && <>
              <div style={{ position: "absolute", top: "6px", left: `${A(V.rainMonthly?.hover?.left)}`, transform: `translateX(${A(V.rainMonthly?.hover?.shift)})`, margin: "0 14px", background: "#043C2C", color: "#F3F4F6", borderRadius: "10px", padding: "8px 11px", fontSize: "14px", whiteSpace: "nowrap", pointerEvents: "none", boxShadow: "0 10px 24px rgba(0,0,0,.2)", zIndex: "3", display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ color: "#D1D8D4" }}>{S(V.rainMonthly?.hover?.time)}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#3B8FD9" }} />
                  <b style={{ color: "#fff" }}>{S(V.rainMonthly?.hover?.value)}</b>
                  <span style={{ color: "#D1D8D4" }}>{S(V.rainMonthly?.hover?.label)}</span>
                </span>
              </div>
            </>}
          </div>
          <div />
          <div style={{ display: "flex" }}>
            {L(V.rainMonthly?.xLabels).map((xl, i128) => <React.Fragment key={i128}>
              <span style={{ flex: "1 1 0", minWidth: "0", textAlign: "center", fontSize: "12.5px", fontWeight: "600", color: "#3F4B45", whiteSpace: "nowrap", paddingTop: "6px" }}>{S(xl)}</span>
            </React.Fragment>)}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", borderTop: "1px solid #D8E7D4", paddingTop: "12px", fontSize: "14px", color: "#4A524D" }}>
          {L(V.rainMonthly?.stats).map((s, i129) => <React.Fragment key={i129}>
            <span style={{ whiteSpace: "nowrap" }}>
              {S(s?.label)}{" "}
              <strong style={{ color: "#0F1A14" }}>{S(s?.value)}</strong>
              <span style={{ color: "#6A746E" }}>{" "}{S(s?.when)}</span>
            </span>
          </React.Fragment>)}
        </div>
      </div>
    </div>
    </>
  );
}
