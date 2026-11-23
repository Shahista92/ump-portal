import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';

export default function IsTabDash({ V }) {
  return (
    <>
    <div style={{ display: "flex", gap: "14px", alignItems: "stretch", flexWrap: "wrap" }}>
      <div style={{ flex: "0 1 230px", minWidth: "200px", alignSelf: "stretch", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "16px", position: "relative", overflow: "hidden", background: `linear-gradient(180deg, ${A(V.wxCond?.bg)}, #FFFFFF)`, border: `1px solid ${A(V.wxCond?.border)}`, borderRadius: "12px", padding: "14px 16px", color: "#15241B", transition: "background .4s ease" }}>
        {V.wxCond?.rain && <>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="120" height="120" style={{ position: "absolute", top: "8px", right: "8px", opacity: ".04", pointerEvents: "none", zIndex: "0" }} fill="none" stroke={V.wxCond?.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13a4 4 0 0 1 .5-7.97A5 5 0 0 1 17 6a3.5 3.5 0 0 1 0 7z" />
            <path d="M8.5 16l-.8 3M12 16l-.8 3M15.5 16l-.8 3" />
          </svg>
        </>}
        {V.wxCond?.cool && <>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="120" height="120" style={{ position: "absolute", top: "8px", right: "8px", opacity: ".04", pointerEvents: "none", zIndex: "0" }} fill="none" stroke={V.wxCond?.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M3.3 7l17.4 10M3.3 17l17.4-10" />
            <path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5M3.6 10.4l3.4-.9-.9-3.4M20.4 13.6l-3.4.9.9 3.4M6.1 17.9l.9-3.4-3.4-.9M17.9 6.1l-.9 3.4 3.4.9" />
          </svg>
        </>}
        {V.wxCond?.mild && <>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="120" height="120" style={{ position: "absolute", top: "8px", right: "8px", opacity: ".04", pointerEvents: "none", zIndex: "0" }} fill="none" stroke={V.wxCond?.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19C5 10 10 5 20 4c-1 10-6 15-15 15zM5 19l8-8" /></svg>
        </>}
        {V.wxCond?.warm && <>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="120" height="120" style={{ position: "absolute", top: "8px", right: "8px", opacity: ".04", pointerEvents: "none", zIndex: "0" }} fill="none" stroke={V.wxCond?.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        </>}
        {V.wxCond?.hot && <>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="120" height="120" style={{ position: "absolute", top: "8px", right: "8px", opacity: ".04", pointerEvents: "none", zIndex: "0" }} fill="none" stroke={V.wxCond?.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7c2-1.4 3.3-1.4 5.3 0s3.3 1.4 5.3 0 3.4-1.4 5.4 0M4 12c2-1.4 3.3-1.4 5.3 0s3.3 1.4 5.3 0 3.4-1.4 5.4 0M4 17c2-1.4 3.3-1.4 5.3 0s3.3 1.4 5.3 0 3.4-1.4 5.4 0" /></svg>
        </>}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "6px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#FFFFFF", border: `1px solid ${A(V.wxCond?.accent)}`, borderRadius: "999px", padding: "4px 10px 4px 8px", fontSize: "12.5px", fontWeight: "600", color: `${A(V.wxCond?.accent)}`, whiteSpace: "nowrap" }}>
            {V.wxCond?.rain && <>
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 13a4 4 0 0 1 .5-7.97A5 5 0 0 1 17 6a3.5 3.5 0 0 1 0 7z" />
                <path d="M8.5 16l-.8 3M12 16l-.8 3M15.5 16l-.8 3" />
              </svg>
            </>}
            {V.wxCond?.cool && <>
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M3.3 7l17.4 10M3.3 17l17.4-10" />
                <path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5M3.6 10.4l3.4-.9-.9-3.4M20.4 13.6l-3.4.9.9 3.4M6.1 17.9l.9-3.4-3.4-.9M17.9 6.1l-.9 3.4 3.4.9" />
              </svg>
            </>}
            {V.wxCond?.mild && <>
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19C5 10 10 5 20 4c-1 10-6 15-15 15zM5 19l8-8" /></svg>
            </>}
            {V.wxCond?.warm && <>
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            </>}
            {V.wxCond?.hot && <>
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7c2-1.4 3.3-1.4 5.3 0s3.3 1.4 5.3 0 3.4-1.4 5.4 0M4 12c2-1.4 3.3-1.4 5.3 0s3.3 1.4 5.3 0 3.4-1.4 5.4 0M4 17c2-1.4 3.3-1.4 5.3 0s3.3 1.4 5.3 0 3.4-1.4 5.4 0" /></svg>
            </>}
            {S(V.wxCond?.label)}
          </span>
          <span style={{ fontSize: "12.5px", color: "#64748B", lineHeight: "1.35" }}>{S(V.wxCond?.sub)}</span>
        </div>
        <div style={{ flex: "0 0 auto", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", textAlign: "center", padding: "10px 0 4px" }}>
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px" }}>
            <svg aria-label="Temperature" viewBox="0 0 24 24" width="34" height="34" fill="none" stroke={V.wxCond?.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
              <path d="M11.5 8v9" />
            </svg>
            <div style={{ position: "relative", fontSize: "clamp(40px, 3.4vw, 52px)", fontWeight: "700", lineHeight: "1", letterSpacing: "-2px", color: "#0F1A14", fontFamily: "'Roboto', sans-serif", fontVariantNumeric: "tabular-nums" }}>
              {S(V.wxCond?.temp)}
              <span style={{ fontSize: ".42em", fontWeight: "700", marginLeft: "3px", verticalAlign: ".95em", letterSpacing: "0" }}>°C</span>
            </div>
          </div>
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "4px", color: `${A(V.wxTrendInk)}` }}>
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" stroke="none"><path d={V.wxTrendPath} /></svg>
            <span style={{ fontSize: "13px", fontWeight: "700", whiteSpace: "nowrap" }}>{S(V.wxTrendVal)}{" vs last reading"}</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "auto" }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #E6ECE8", borderRadius: "10px", padding: "8px 10px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "2px", minWidth: "0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <span style={{ width: "8px", height: "8px", flex: "0 0 8px", borderRadius: "2px", background: "#3B82F6" }} />
              <span style={{ fontSize: "12px", fontWeight: "500", color: "#3F4B45" }}>Low</span>
            </div>
            <b style={{ fontSize: "14px", fontWeight: "700", color: "#3B82F6", fontFamily: "'Roboto', sans-serif", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{S(V.wxCond?.min)}°C</b>
            <span style={{ fontSize: "11px", color: "#5B6B61", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.wxCond?.minTime)}</span>
          </div>
          <div style={{ background: "#FFFFFF", border: "1px solid #E6ECE8", borderRadius: "10px", padding: "8px 10px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "2px", minWidth: "0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <span style={{ width: "8px", height: "8px", flex: "0 0 8px", borderRadius: "2px", background: "#E76F51" }} />
              <span style={{ fontSize: "12px", fontWeight: "500", color: "#3F4B45" }}>High</span>
            </div>
            <b style={{ fontSize: "14px", fontWeight: "700", color: "#E76F51", fontFamily: "'Roboto', sans-serif", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{S(V.wxCond?.max)}°C</b>
            <span style={{ fontSize: "11px", color: "#5B6B61", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.wxCond?.maxTime)}</span>
          </div>
        </div>
        <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "8px", background: "#F0F8FF", border: "1px solid #D6EFFF", borderRadius: "12px", padding: "10px 14px", fontSize: "12.5px", color: "#1F2A24", whiteSpace: "nowrap" }}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={V.wxCond?.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13a4 4 0 0 1 .5-7.97A5 5 0 0 1 17 6a3.5 3.5 0 0 1 0 7z" />
            <path d="M8.5 16l-.8 3M12 16l-.8 3M15.5 16l-.8 3" />
          </svg>
          <span style={{ flex: "1", fontWeight: "500" }}>Rain Last Hour</span>
          <b style={{ fontSize: "14px", fontWeight: "700", color: `${A(V.wxCond?.accent)}`, fontVariantNumeric: "tabular-nums" }}>{S(V.wxCond?.rainHr)}</b>
          <span style={{ fontSize: "12.5px", color: "#5B6B61" }}>mm</span>
        </div>
      </div>
      <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px", containerType: "inline-size" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, max(104px, calc((100% - 56px) / 5))), 1fr))", gridAutoRows: "auto", alignItems: "stretch", gap: "14px" }}>
          {L(V.highlightRow1).map((h, i28) => <React.Fragment key={i28}>
            <div className="scp2r" style={{ flex: "1 1 190px", background: "#FFFFFF", border: "1px solid #E5E8E6", borderRadius: "12px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px", minWidth: "0", boxShadow: "none", position: "relative", isolation: "isolate", zIndex: `${A(h?.cardZ)}`, transition: "box-shadow .2s ease, border-color .2s ease" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", minHeight: "28px", lineHeight: "1.3" }}>
                <span style={{ order: "-1", width: "28px", height: "28px", flex: "0 0 28px", borderRadius: "8px", background: `${A(h?.tint)}`, display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={h?.ink} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d={h?.icon} /></svg></span>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", lineHeight: "1.25", overflowWrap: "normal", flex: "1 1 0", minWidth: "0" }}>{S(h?.label)}</span>
                {h?.showInfo && <>
                  <span onClick={h?.toggleInfo} title="More info" style={{ fontSize: "12px", fontWeight: "600", color: "#B45309", background: "#FEF3C7", border: "1px solid #FDE68A", cursor: "pointer", borderRadius: "50%", width: "17px", height: "17px", flex: "0 0 17px", position: "relative", zIndex: "2", marginLeft: "5px", verticalAlign: "1px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>i</span>
                </>}
                {h?.infoOpen && <>
                  <div style={{ position: "fixed", top: `${A(V.infoPanelTop)}`, left: `${A(V.infoPanelLeft)}`, width: "540px", maxWidth: "94vw", boxSizing: "border-box", background: "#043C2C", color: "#F3F4F6", fontSize: "12.5px", lineHeight: "1.5", borderRadius: "12px", padding: "14px 16px", boxShadow: "0 18px 40px rgba(0,0,0,.32)", zIndex: "50", display: "block" }}>
                    <span className="scp2s" onClick={h?.toggleInfo} title="Close" style={{ position: "sticky", top: "0", float: "right", margin: "-8px -8px 4px 8px", width: "26px", height: "26px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,.1)", color: "#E5E7EB", cursor: "pointer", zIndex: "1" }}><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></span>
                    {h?.info?.reference && <>
                      <div style={{ marginBottom: "10px" }}>
                        <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "2px" }}>REFERENCE</div>
                        {S(h?.info?.reference)}
                      </div>
                    </>}
                    {h?.info?.intro && <>
                      <div style={{ marginBottom: "10px" }}>
                        <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "2px" }}>REFERENCE</div>
                        {S(h?.info?.intro)}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "7px" }}>
                          {L(h?.info?.links).map((lk, i29) => <React.Fragment key={i29}>
                            <a href={lk?.url} target="_blank" rel="noopener noreferrer" onClick={lk?.stop} style={{ fontSize: "12.5px", fontWeight: "700", color: "#A7F3D0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(167,243,208,.3)", borderRadius: "10px", padding: "2px 8px", textDecoration: "none" }}>{S(lk?.label)}{" ↗"}</a>
                          </React.Fragment>)}
                        </div>
                      </div>
                    </>}
                    <div style={{ marginBottom: "10px" }}>
                      <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "2px" }}>DEFINITION</div>
                      {S(h?.info?.definition)}
                    </div>
                    {h?.info?.thresholds && <>
                      <div style={{ marginBottom: "10px" }}>
                        <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "4px" }}>STATUS THRESHOLDS</div>
                        {L(h?.info?.thresholds).map((th, i30) => <React.Fragment key={i30}>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "3px 0" }}>
                            <span style={{ color: "#D1D8D4" }}>{S(th?.range)}</span>
                            <span style={{ fontWeight: "700", color: "#fff" }}>{S(th?.label)}</span>
                          </div>
                        </React.Fragment>)}
                      </div>
                    </>}
                    {h?.info?.table && <>
                      <div style={{ border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", overflow: "hidden", margin: "10px 0" }}>
                        <div style={{ display: "grid", gridTemplateColumns: `${A(h?.info?.table?.cols)}`, background: "rgba(255,255,255,.08)", fontSize: "12.5px", fontWeight: "700", color: "#fff" }}>
                          {L(h?.info?.table?.head).map((hd, i31) => <React.Fragment key={i31}>
                            <div style={{ padding: "6px 8px" }}>{S(hd)}</div>
                          </React.Fragment>)}
                        </div>
                        {L(h?.info?.table?.rows).map((tr, i32) => <React.Fragment key={i32}>
                          <div style={{ display: "grid", gridTemplateColumns: `${A(h?.info?.table?.cols)}`, borderTop: "1px solid rgba(255,255,255,.12)", fontSize: "12.5px", lineHeight: "1.45" }}>
                            <div style={{ padding: "6px 8px", color: "#fff", fontWeight: "700", whiteSpace: "nowrap" }}>{S(tr?.range)}</div>
                            <div style={{ padding: "6px 8px", color: "#E5E7EB", display: "flex", alignItems: "flex-start", gap: "6px" }}>
                              {tr?.dot && <>
                                <span style={{ width: "10px", height: "10px", flex: "0 0 10px", marginTop: "2px", borderRadius: "50%", background: `${A(tr?.dot)}` }} />
                              </>}
                              {S(tr?.status)}
                            </div>
                            {tr?.meaning && <>
                              <div style={{ padding: "6px 8px", color: "#D1D8D4" }}>{S(tr?.meaning)}</div>
                            </>}
                          </div>
                        </React.Fragment>)}
                      </div>
                    </>}
                    <div style={{ marginBottom: "10px" }}>
                      <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "2px" }}>CURRENT ASSESSMENT</div>
                      {S(h?.info?.assessment)}
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "2px" }}>WHY IT MATTERS</div>
                      {S(h?.info?.whyMatters)}
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "2px" }}>METHODOLOGY</div>
                      {S(h?.info?.methodology)}
                    </div>
                  </div>
                </>}
              </div>
              {h?.plain && <>
                <div style={{ minWidth: "0", flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "0" }}>
                  <span style={{ fontSize: "24px", lineHeight: "1.1", fontWeight: "700", letterSpacing: "-.5px", fontFamily: "'Roboto', sans-serif", fontVariantNumeric: "tabular-nums", display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "center", columnGap: "3px", maxWidth: "100%", color: `${A(h?.ink)}` }}>
                    {S(h?.value)}
                    <span style={{ fontSize: ".62em", fontWeight: "500", color: "#64748B", marginLeft: "5px", letterSpacing: "0" }}>{S(h?.unit)}</span>
                  </span>
                  {h?.valueNote && <>
                    <span style={{ fontSize: "12.5px", fontWeight: "400", color: "#64748B", display: "block", whiteSpace: "normal" }}>{S(h?.valueNote)}</span>
                  </>}
                </div>
              </>}
              {h?.compare && <>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                  <svg viewBox="0 0 24 24" width="12" height="12" fill={h?.compare?.fill} stroke={h?.compare?.stroke} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}><path d={h?.compare?.path} /></svg>
                  <span style={{ fontSize: "12.5px", fontWeight: "500", lineHeight: "1.3", textAlign: "center", color: `${A(h?.compare?.color)}`, minWidth: "0" }}>{S(h?.compare?.text)}</span>
                </div>
              </>}
              {h?.spark && <>
                <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", height: "24px" }}>
                  <div style={{ position: "relative", width: "100%" }} onMouseLeave={h?.spark?.leave}>
                    <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width: "100%", height: "20px", display: "block", overflow: "visible" }}>
                      {h?.spark?.bars && <>
                        {L(h?.spark?.bars).map((sb, i33) => <React.Fragment key={i33}>
                          <rect x={sb?.x} y={sb?.y} width={sb?.w} height={sb?.h} fill={h?.ink} fillOpacity="0.22" rx="1" />
                        </React.Fragment>)}
                      </>}
                      {h?.spark?.path && <>
                        <path d={h?.spark?.area} fill={h?.ink} opacity="0.07" stroke="none" />
                        <path d={h?.spark?.path} fill="none" stroke={h?.ink} strokeOpacity="0.38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                      </>}
                    </svg>
                    <div style={{ position: "absolute", inset: "0", display: "flex" }}>
                      {L(h?.spark?.hits).map((hp, i34) => <React.Fragment key={i34}>
                        <div onMouseEnter={hp?.enter} style={{ flex: "1", height: "100%", cursor: "crosshair" }} />
                      </React.Fragment>)}
                    </div>
                    {h?.spark?.active && <>
                      <span style={{ position: "absolute", left: `${A(h?.spark?.active?.left)}`, top: `${A(h?.spark?.active?.top)}`, width: "7px", height: "7px", borderRadius: "50%", background: "#fff", border: `2px solid ${A(h?.ink)}`, transform: "translate(-50%,-50%)", pointerEvents: "none", boxSizing: "border-box" }} />
                      <div style={{ position: "absolute", left: `${A(h?.spark?.active?.tipLeft)}`, bottom: "calc(100% + 6px)", transform: `translateX(${A(h?.spark?.active?.shift)})`, background: "#043C2C", color: "#fff", borderRadius: "7px", padding: "5px 8px", fontSize: "12.5px", lineHeight: "1.3", whiteSpace: "nowrap", pointerEvents: "none", zIndex: "5", boxShadow: "0 6px 14px rgba(0,0,0,.2)" }}>
                        <div style={{ fontWeight: "600", fontFamily: "'Roboto', sans-serif", fontVariantNumeric: "tabular-nums" }}>{S(h?.spark?.active?.value)}</div>
                        <div style={{ fontSize: "11.5px", color: "#C9D1CC" }}>{S(h?.spark?.active?.when)}</div>
                      </div>
                    </>}
                  </div>
                </div>
              </>}
              {h?.donut && <>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: "1", paddingTop: "4px" }}>
                  <div style={{ position: "relative", width: "min(162px, 96%)", aspectRatio: "150/99", margin: "0 auto" }}>
                    <svg viewBox="-4 0 108 70" style={{ width: "100%", height: "100%", overflow: "visible", display: "block" }}>
                      <defs>
                        <linearGradient id="uvGaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#22C55E" />
                          <stop offset="50%" stopColor="#FACC15" />
                          <stop offset="100%" stopColor="#FB923C" />
                        </linearGradient>
                      </defs>
                      <path d="M10,54 A40,40 0 0 1 90,54" fill="none" stroke="#E5EFE2" strokeWidth="9" strokeLinecap="round" />
                      <path d="M10,54 A40,40 0 0 1 90,54" pathLength="100" fill="none" stroke="url(#uvGaugeGrad)" strokeWidth="9" strokeLinecap="round" strokeDasharray="100" style={{ animation: "tzArc 1.6s ease-out both" }} />
                      <circle cx={h?.needleX} cy={h?.needleY} r="6" fill={h?.ink} opacity="0.5" style={{ transformBox: "fill-box", transformOrigin: "center", animation: "wxLivePulse 2s ease-out infinite" }} />
                      <circle cx={h?.needleX} cy={h?.needleY} r="6" fill="#fff" stroke="#0F1A14" strokeWidth="1.6" />
                      <text x="10" y="66" fontSize="8.5" fontWeight="700" fill="#4C6354">0</text>
                      <text x="90" y="66" textAnchor="end" fontSize="8.5" fontWeight="700" fill="#4C6354">11</text>
                    </svg>
                    <span style={{ position: "absolute", left: "50%", top: "62%", transform: "translate(-50%,-50%)", fontSize: "24px", fontWeight: "700", lineHeight: "1", color: "#0F1A14", fontFamily: "'Roboto', sans-serif", fontVariantNumeric: "tabular-nums" }}>{S(h?.value)}</span>
                  </div>
                </div>
              </>}
              {h?.compass && <>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", alignItems: "center", justifyContent: "center", gap: "8px", flex: "1", minWidth: "0" }}>
                  <div style={{ position: "relative", width: "min(163px, 100%)", minWidth: "125px", flex: "0 1 auto" }}>
                    <svg viewBox="-4 -4 128 128" style={{ width: "100%", height: "auto", aspectRatio: "1", display: "block" }}>
                      <circle cx="60" cy="60" r="47" fill="none" stroke="#E5EFE2" strokeWidth="3" />
                      {L(V.compassTicks).map((tk, i35) => <React.Fragment key={i35}>
                        <line x1={tk?.x1} y1={tk?.y1} x2={tk?.x2} y2={tk?.y2} stroke="#D7DEDA" strokeWidth={tk?.w} />
                      </React.Fragment>)}
                      <text x="60" y="5" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="800" fill="#0F1A14">N</text>
                      <text x="60" y="115" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="800" fill="#0F1A14">S</text>
                      <text x="115" y="60" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="800" fill="#0F1A14">E</text>
                      <text x="5" y="60" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="800" fill="#0F1A14">W</text>
                      <g transform={`rotate(${A(V.windRotateDeg)} 60 60)`}>
                        <g>
                          <path d="M60 9 L67 22 L53 22 Z" fill={h?.ink} />
                          <path d="M60 111 L64 104 L56 104 Z" fill={h?.ink} opacity="0.35" />
                        </g>
                      </g>
                      <circle cx="60" cy="60" r="36" fill={h?.tint} />
                    </svg>
                    <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "1px", lineHeight: "1", fontFamily: "'Roboto', sans-serif", pointerEvents: "none", whiteSpace: "nowrap" }}>
                      <span style={{ fontSize: "12.5px", fontWeight: "800", letterSpacing: ".4px", color: `${A(h?.ink)}` }}>{S(h?.dir)}</span>
                      <span style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-.5px", color: "#0F1A14", fontVariantNumeric: "tabular-nums" }}>{S(h?.value)}</span>
                      <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#4C6354" }}>{S(h?.unit)}</span>
                    </div>
                  </div>
                </div>
              </>}
              {h?.spark2 && <>
                <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", height: "24px" }}>
                  <div style={{ position: "relative", width: "100%" }} onMouseLeave={h?.spark2?.leave}>
                    <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width: "100%", height: "20px", display: "block", overflow: "visible" }}>
                      {h?.spark2?.bars && <>
                        {L(h?.spark2?.bars).map((sb, i36) => <React.Fragment key={i36}>
                          <rect x={sb?.x} y={sb?.y} width={sb?.w} height={sb?.h} fill={h?.ink} fillOpacity="0.22" rx="1" />
                        </React.Fragment>)}
                      </>}
                      {h?.spark2?.path && <>
                        <path d={h?.spark2?.area} fill={h?.ink} opacity="0.07" stroke="none" />
                        <path d={h?.spark2?.path} fill="none" stroke={h?.ink} strokeOpacity="0.38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                      </>}
                    </svg>
                    <div style={{ position: "absolute", inset: "0", display: "flex" }}>
                      {L(h?.spark2?.hits).map((hp, i37) => <React.Fragment key={i37}>
                        <div onMouseEnter={hp?.enter} style={{ flex: "1", height: "100%", cursor: "crosshair" }} />
                      </React.Fragment>)}
                    </div>
                    {h?.spark2?.active && <>
                      <span style={{ position: "absolute", left: `${A(h?.spark2?.active?.left)}`, top: `${A(h?.spark2?.active?.top)}`, width: "7px", height: "7px", borderRadius: "50%", background: "#fff", border: `2px solid ${A(h?.ink)}`, transform: "translate(-50%,-50%)", pointerEvents: "none", boxSizing: "border-box" }} />
                      <div style={{ position: "absolute", left: `${A(h?.spark2?.active?.tipLeft)}`, bottom: "calc(100% + 6px)", transform: `translateX(${A(h?.spark2?.active?.shift)})`, background: "#043C2C", color: "#fff", borderRadius: "7px", padding: "5px 8px", fontSize: "12.5px", lineHeight: "1.3", whiteSpace: "nowrap", pointerEvents: "none", zIndex: "5", boxShadow: "0 6px 14px rgba(0,0,0,.2)" }}>
                        <div style={{ fontWeight: "600", fontFamily: "'Roboto', sans-serif", fontVariantNumeric: "tabular-nums" }}>{S(h?.spark2?.active?.value)}</div>
                        <div style={{ fontSize: "11.5px", color: "#C9D1CC" }}>{S(h?.spark2?.active?.when)}</div>
                      </div>
                    </>}
                  </div>
                </div>
              </>}
              {h?.noLines && <>
                <div style={{ flex: "0 0 auto", height: "40px" }} />
              </>}
              {h?.lines && <>
                <div style={{ borderTop: "1px solid #E5EFE2", paddingTop: "6px", flex: "0 0 auto", minHeight: "40px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2px" }}>
                  {L(h?.lines).map((ln, i38) => <React.Fragment key={i38}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", columnGap: "6px", fontSize: "12.5px", minWidth: "0", flexShrink: "0" }}>
                      <span style={{ color: "#4C6354" }}>{S(ln?.l)}</span>
                      <span style={{ color: `${A(ln?.vc)}`, fontSize: `${A(ln?.vs)}`, fontWeight: "700", textAlign: "right" }}>{S(ln?.v)}</span>
                    </div>
                  </React.Fragment>)}
                </div>
              </>}
            </div>
          </React.Fragment>)}
          {L(V.highlightRow2).map((h, i39) => <React.Fragment key={i39}>
            <div className="scp2r" style={{ flex: "1 1 190px", background: "#FFFFFF", border: "1px solid #E5E8E6", borderRadius: "12px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px", minWidth: "0", boxShadow: "none", position: "relative", isolation: "isolate", zIndex: `${A(h?.cardZ)}`, transition: "box-shadow .2s ease, border-color .2s ease" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", minHeight: "28px", lineHeight: "1.3" }}>
                <span style={{ order: "-1", width: "28px", height: "28px", flex: "0 0 28px", borderRadius: "8px", background: `${A(h?.tint)}`, display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={h?.ink} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d={h?.icon} /></svg></span>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", lineHeight: "1.25", overflowWrap: "normal", flex: "1 1 0", minWidth: "0" }}>{S(h?.label)}</span>
                {h?.showInfo && <>
                  <span onClick={h?.toggleInfo} title="More info" style={{ fontSize: "12px", fontWeight: "600", color: "#B45309", background: "#FEF3C7", border: "1px solid #FDE68A", cursor: "pointer", borderRadius: "50%", width: "17px", height: "17px", flex: "0 0 17px", position: "relative", zIndex: "2", marginLeft: "5px", verticalAlign: "1px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>i</span>
                </>}
                {h?.infoOpen && <>
                  <div style={{ position: "fixed", top: `${A(V.infoPanelTop)}`, left: `${A(V.infoPanelLeft)}`, width: "540px", maxWidth: "94vw", boxSizing: "border-box", background: "#043C2C", color: "#F3F4F6", fontSize: "12.5px", lineHeight: "1.5", borderRadius: "12px", padding: "14px 16px", boxShadow: "0 18px 40px rgba(0,0,0,.32)", zIndex: "50", display: "block" }}>
                    <span className="scp2s" onClick={h?.toggleInfo} title="Close" style={{ position: "sticky", top: "0", float: "right", margin: "-8px -8px 4px 8px", width: "26px", height: "26px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,.1)", color: "#E5E7EB", cursor: "pointer", zIndex: "1" }}><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></span>
                    {h?.info?.reference && <>
                      <div style={{ marginBottom: "10px" }}>
                        <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "2px" }}>REFERENCE</div>
                        {S(h?.info?.reference)}
                      </div>
                    </>}
                    {h?.info?.intro && <>
                      <div style={{ marginBottom: "10px" }}>
                        <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "2px" }}>REFERENCE</div>
                        {S(h?.info?.intro)}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "7px" }}>
                          {L(h?.info?.links).map((lk, i40) => <React.Fragment key={i40}>
                            <a href={lk?.url} target="_blank" rel="noopener noreferrer" onClick={lk?.stop} style={{ fontSize: "12.5px", fontWeight: "700", color: "#A7F3D0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(167,243,208,.3)", borderRadius: "10px", padding: "2px 8px", textDecoration: "none" }}>{S(lk?.label)}{" ↗"}</a>
                          </React.Fragment>)}
                        </div>
                      </div>
                    </>}
                    <div style={{ marginBottom: "10px" }}>
                      <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "2px" }}>DEFINITION</div>
                      {S(h?.info?.definition)}
                    </div>
                    {h?.info?.thresholds && <>
                      <div style={{ marginBottom: "10px" }}>
                        <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "4px" }}>STATUS THRESHOLDS</div>
                        {L(h?.info?.thresholds).map((th, i41) => <React.Fragment key={i41}>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "3px 0" }}>
                            <span style={{ color: "#D1D8D4" }}>{S(th?.range)}</span>
                            <span style={{ fontWeight: "700", color: "#fff" }}>{S(th?.label)}</span>
                          </div>
                        </React.Fragment>)}
                      </div>
                    </>}
                    {h?.info?.table && <>
                      <div style={{ border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", overflow: "hidden", margin: "10px 0" }}>
                        <div style={{ display: "grid", gridTemplateColumns: `${A(h?.info?.table?.cols)}`, background: "rgba(255,255,255,.08)", fontSize: "12.5px", fontWeight: "700", color: "#fff" }}>
                          {L(h?.info?.table?.head).map((hd, i42) => <React.Fragment key={i42}>
                            <div style={{ padding: "6px 8px" }}>{S(hd)}</div>
                          </React.Fragment>)}
                        </div>
                        {L(h?.info?.table?.rows).map((tr, i43) => <React.Fragment key={i43}>
                          <div style={{ display: "grid", gridTemplateColumns: `${A(h?.info?.table?.cols)}`, borderTop: "1px solid rgba(255,255,255,.12)", fontSize: "12.5px", lineHeight: "1.45" }}>
                            <div style={{ padding: "6px 8px", color: "#fff", fontWeight: "700", whiteSpace: "nowrap" }}>{S(tr?.range)}</div>
                            <div style={{ padding: "6px 8px", color: "#E5E7EB", display: "flex", alignItems: "flex-start", gap: "6px" }}>
                              {tr?.dot && <>
                                <span style={{ width: "10px", height: "10px", flex: "0 0 10px", marginTop: "2px", borderRadius: "50%", background: `${A(tr?.dot)}` }} />
                              </>}
                              {S(tr?.status)}
                            </div>
                            {tr?.meaning && <>
                              <div style={{ padding: "6px 8px", color: "#D1D8D4" }}>{S(tr?.meaning)}</div>
                            </>}
                          </div>
                        </React.Fragment>)}
                      </div>
                    </>}
                    <div style={{ marginBottom: "10px" }}>
                      <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "2px" }}>CURRENT ASSESSMENT</div>
                      {S(h?.info?.assessment)}
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "2px" }}>WHY IT MATTERS</div>
                      {S(h?.info?.whyMatters)}
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "2px" }}>METHODOLOGY</div>
                      {S(h?.info?.methodology)}
                    </div>
                  </div>
                </>}
              </div>
              {h?.plain && <>
                <div style={{ minWidth: "0", flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "0" }}>
                  <span style={{ fontSize: "24px", lineHeight: "1.1", fontWeight: "700", letterSpacing: "-.5px", fontFamily: "'Roboto', sans-serif", fontVariantNumeric: "tabular-nums", display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "center", columnGap: "3px", maxWidth: "100%", color: `${A(h?.ink)}` }}>
                    {S(h?.value)}
                    <span style={{ fontSize: ".62em", fontWeight: "500", color: "#64748B", marginLeft: "5px", letterSpacing: "0" }}>{S(h?.unit)}</span>
                  </span>
                  {h?.valueNote && <>
                    <span style={{ fontSize: "12.5px", fontWeight: "400", color: "#64748B", display: "block", whiteSpace: "normal" }}>{S(h?.valueNote)}</span>
                  </>}
                </div>
              </>}
              {h?.compare && <>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                  <svg viewBox="0 0 24 24" width="12" height="12" fill={h?.compare?.fill} stroke={h?.compare?.stroke} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}><path d={h?.compare?.path} /></svg>
                  <span style={{ fontSize: "12.5px", fontWeight: "500", lineHeight: "1.3", textAlign: "center", color: `${A(h?.compare?.color)}`, minWidth: "0" }}>{S(h?.compare?.text)}</span>
                </div>
              </>}
              {h?.spark && <>
                <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", height: "24px" }}>
                  <div style={{ position: "relative", width: "100%" }} onMouseLeave={h?.spark?.leave}>
                    <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width: "100%", height: "20px", display: "block", overflow: "visible" }}>
                      {h?.spark?.bars && <>
                        {L(h?.spark?.bars).map((sb, i44) => <React.Fragment key={i44}>
                          <rect x={sb?.x} y={sb?.y} width={sb?.w} height={sb?.h} fill={h?.ink} fillOpacity="0.22" rx="1" />
                        </React.Fragment>)}
                      </>}
                      {h?.spark?.path && <>
                        <path d={h?.spark?.area} fill={h?.ink} opacity="0.07" stroke="none" />
                        <path d={h?.spark?.path} fill="none" stroke={h?.ink} strokeOpacity="0.38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                      </>}
                    </svg>
                    <div style={{ position: "absolute", inset: "0", display: "flex" }}>
                      {L(h?.spark?.hits).map((hp, i45) => <React.Fragment key={i45}>
                        <div onMouseEnter={hp?.enter} style={{ flex: "1", height: "100%", cursor: "crosshair" }} />
                      </React.Fragment>)}
                    </div>
                    {h?.spark?.active && <>
                      <span style={{ position: "absolute", left: `${A(h?.spark?.active?.left)}`, top: `${A(h?.spark?.active?.top)}`, width: "7px", height: "7px", borderRadius: "50%", background: "#fff", border: `2px solid ${A(h?.ink)}`, transform: "translate(-50%,-50%)", pointerEvents: "none", boxSizing: "border-box" }} />
                      <div style={{ position: "absolute", left: `${A(h?.spark?.active?.tipLeft)}`, bottom: "calc(100% + 6px)", transform: `translateX(${A(h?.spark?.active?.shift)})`, background: "#043C2C", color: "#fff", borderRadius: "7px", padding: "5px 8px", fontSize: "12.5px", lineHeight: "1.3", whiteSpace: "nowrap", pointerEvents: "none", zIndex: "5", boxShadow: "0 6px 14px rgba(0,0,0,.2)" }}>
                        <div style={{ fontWeight: "600", fontFamily: "'Roboto', sans-serif", fontVariantNumeric: "tabular-nums" }}>{S(h?.spark?.active?.value)}</div>
                        <div style={{ fontSize: "11.5px", color: "#C9D1CC" }}>{S(h?.spark?.active?.when)}</div>
                      </div>
                    </>}
                  </div>
                </div>
              </>}
              {h?.donut && <>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: "1", paddingTop: "4px" }}>
                  <div style={{ position: "relative", width: "min(162px, 96%)", aspectRatio: "150/99", margin: "0 auto" }}>
                    <svg viewBox="-4 0 108 70" style={{ width: "100%", height: "100%", overflow: "visible", display: "block" }}>
                      <defs>
                        <linearGradient id="uvGaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#22C55E" />
                          <stop offset="50%" stopColor="#FACC15" />
                          <stop offset="100%" stopColor="#FB923C" />
                        </linearGradient>
                      </defs>
                      <path d="M10,54 A40,40 0 0 1 90,54" fill="none" stroke="#E5EFE2" strokeWidth="9" strokeLinecap="round" />
                      <path d="M10,54 A40,40 0 0 1 90,54" pathLength="100" fill="none" stroke="url(#uvGaugeGrad)" strokeWidth="9" strokeLinecap="round" strokeDasharray="100" style={{ animation: "tzArc 1.6s ease-out both" }} />
                      <circle cx={h?.needleX} cy={h?.needleY} r="6" fill={h?.ink} opacity="0.5" style={{ transformBox: "fill-box", transformOrigin: "center", animation: "wxLivePulse 2s ease-out infinite" }} />
                      <circle cx={h?.needleX} cy={h?.needleY} r="6" fill="#fff" stroke="#0F1A14" strokeWidth="1.6" />
                      <text x="10" y="66" fontSize="8.5" fontWeight="700" fill="#4C6354">0</text>
                      <text x="90" y="66" textAnchor="end" fontSize="8.5" fontWeight="700" fill="#4C6354">11</text>
                    </svg>
                    <span style={{ position: "absolute", left: "50%", top: "62%", transform: "translate(-50%,-50%)", fontSize: "24px", fontWeight: "700", lineHeight: "1", color: "#0F1A14", fontFamily: "'Roboto', sans-serif", fontVariantNumeric: "tabular-nums" }}>{S(h?.value)}</span>
                  </div>
                </div>
              </>}
              {h?.compass && <>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", alignItems: "center", justifyContent: "center", gap: "8px", flex: "1", minWidth: "0" }}>
                  <div style={{ position: "relative", width: "min(163px, 100%)", minWidth: "125px", flex: "0 1 auto" }}>
                    <svg viewBox="-4 -4 128 128" style={{ width: "100%", height: "auto", aspectRatio: "1", display: "block" }}>
                      <circle cx="60" cy="60" r="47" fill="none" stroke="#E5EFE2" strokeWidth="3" />
                      {L(V.compassTicks).map((tk, i46) => <React.Fragment key={i46}>
                        <line x1={tk?.x1} y1={tk?.y1} x2={tk?.x2} y2={tk?.y2} stroke="#D7DEDA" strokeWidth={tk?.w} />
                      </React.Fragment>)}
                      <text x="60" y="5" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="800" fill="#0F1A14">N</text>
                      <text x="60" y="115" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="800" fill="#0F1A14">S</text>
                      <text x="115" y="60" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="800" fill="#0F1A14">E</text>
                      <text x="5" y="60" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="800" fill="#0F1A14">W</text>
                      <g transform={`rotate(${A(V.windRotateDeg)} 60 60)`}>
                        <g>
                          <path d="M60 9 L67 22 L53 22 Z" fill={h?.ink} />
                          <path d="M60 111 L64 104 L56 104 Z" fill={h?.ink} opacity="0.35" />
                        </g>
                      </g>
                      <circle cx="60" cy="60" r="36" fill={h?.tint} />
                    </svg>
                    <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "1px", lineHeight: "1", fontFamily: "'Roboto', sans-serif", pointerEvents: "none", whiteSpace: "nowrap" }}>
                      <span style={{ fontSize: "12.5px", fontWeight: "800", letterSpacing: ".4px", color: `${A(h?.ink)}` }}>{S(h?.dir)}</span>
                      <span style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-.5px", color: "#0F1A14", fontVariantNumeric: "tabular-nums" }}>{S(h?.value)}</span>
                      <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#4C6354" }}>{S(h?.unit)}</span>
                    </div>
                  </div>
                </div>
              </>}
              {h?.spark2 && <>
                <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", height: "24px" }}>
                  <div style={{ position: "relative", width: "100%" }} onMouseLeave={h?.spark2?.leave}>
                    <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width: "100%", height: "20px", display: "block", overflow: "visible" }}>
                      {h?.spark2?.bars && <>
                        {L(h?.spark2?.bars).map((sb, i47) => <React.Fragment key={i47}>
                          <rect x={sb?.x} y={sb?.y} width={sb?.w} height={sb?.h} fill={h?.ink} fillOpacity="0.22" rx="1" />
                        </React.Fragment>)}
                      </>}
                      {h?.spark2?.path && <>
                        <path d={h?.spark2?.area} fill={h?.ink} opacity="0.07" stroke="none" />
                        <path d={h?.spark2?.path} fill="none" stroke={h?.ink} strokeOpacity="0.38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                      </>}
                    </svg>
                    <div style={{ position: "absolute", inset: "0", display: "flex" }}>
                      {L(h?.spark2?.hits).map((hp, i48) => <React.Fragment key={i48}>
                        <div onMouseEnter={hp?.enter} style={{ flex: "1", height: "100%", cursor: "crosshair" }} />
                      </React.Fragment>)}
                    </div>
                    {h?.spark2?.active && <>
                      <span style={{ position: "absolute", left: `${A(h?.spark2?.active?.left)}`, top: `${A(h?.spark2?.active?.top)}`, width: "7px", height: "7px", borderRadius: "50%", background: "#fff", border: `2px solid ${A(h?.ink)}`, transform: "translate(-50%,-50%)", pointerEvents: "none", boxSizing: "border-box" }} />
                      <div style={{ position: "absolute", left: `${A(h?.spark2?.active?.tipLeft)}`, bottom: "calc(100% + 6px)", transform: `translateX(${A(h?.spark2?.active?.shift)})`, background: "#043C2C", color: "#fff", borderRadius: "7px", padding: "5px 8px", fontSize: "12.5px", lineHeight: "1.3", whiteSpace: "nowrap", pointerEvents: "none", zIndex: "5", boxShadow: "0 6px 14px rgba(0,0,0,.2)" }}>
                        <div style={{ fontWeight: "600", fontFamily: "'Roboto', sans-serif", fontVariantNumeric: "tabular-nums" }}>{S(h?.spark2?.active?.value)}</div>
                        <div style={{ fontSize: "11.5px", color: "#C9D1CC" }}>{S(h?.spark2?.active?.when)}</div>
                      </div>
                    </>}
                  </div>
                </div>
              </>}
              {h?.noLines && <>
                <div style={{ flex: "0 0 auto", height: "40px" }} />
              </>}
              {h?.lines && <>
                <div style={{ borderTop: "1px solid #E5EFE2", paddingTop: "6px", flex: "0 0 auto", minHeight: "40px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2px" }}>
                  {L(h?.lines).map((ln, i49) => <React.Fragment key={i49}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", columnGap: "6px", fontSize: "12.5px", minWidth: "0", flexShrink: "0" }}>
                      <span style={{ color: "#4C6354" }}>{S(ln?.l)}</span>
                      <span style={{ color: `${A(ln?.vc)}`, fontSize: `${A(ln?.vs)}`, fontWeight: "700", textAlign: "right" }}>{S(ln?.v)}</span>
                    </div>
                  </React.Fragment>)}
                </div>
              </>}
            </div>
          </React.Fragment>)}
        </div>
      </div>
    </div>
    </>
  );
}
