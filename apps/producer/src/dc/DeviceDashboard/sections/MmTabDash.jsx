import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';

export default function MmTabDash({ V }) {
  return (
    <>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(30, minmax(0,1fr))", gap: "12px" }}>
      {L(V.mmCards).map((c, i179) => <React.Fragment key={i179}>
        <div style={{ gridColumn: `${A(c?.span)}`, position: "relative", zIndex: `${A(c?.z)}`, minWidth: "0", minHeight: "210px", background: "#fff", border: "1px solid #CFE5C8", borderRadius: "14px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 4px 12px rgba(16,24,40,.04)", animation: "wxChartIn .5s ease both" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "28px", height: "28px", flex: "0 0 28px", borderRadius: "8px", background: `${A(c?.tint)}`, display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke={c?.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={c?.icon} /></svg></span>
            <span style={{ flex: "1", minWidth: "0", fontSize: "15px", fontWeight: "700", lineHeight: "1.25", color: `${A(c?.color)}` }}>{S(c?.label)}</span>
            {c?.status && <>
              <span style={{ fontSize: "12px", fontWeight: "700", color: `${A(c?.status?.ink)}`, background: `${A(c?.status?.bg)}`, borderRadius: "20px", padding: "3px 8px", whiteSpace: "nowrap" }}>{S(c?.status?.label)}</span>
            </>}
            {c?.info && <>
              <span onClick={c?.info?.toggle} title="How this is rated" style={{ fontSize: "12px", fontWeight: "600", color: "#B45309", background: "#FEF3C7", border: "1px solid #FDE68A", cursor: "pointer", borderRadius: "50%", width: "17px", height: "17px", flex: "0 0 17px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>i</span>
            </>}
          </div>
          {c?.info?.open && <>
            <div onClick={c?.info?.stop} style={{ position: "absolute", top: "46px", right: "-6px", width: "300px", maxWidth: "86vw", boxSizing: "border-box", background: "#043C2C", color: "#F3F4F6", fontSize: "14px", lineHeight: "1.6", borderRadius: "12px", padding: "16px", boxShadow: "0 18px 40px rgba(0,0,0,.32)", zIndex: "50" }}>
              <span className="scp2s" onClick={c?.info?.toggle} title="Close" style={{ float: "right", margin: "-8px -8px 4px 8px", width: "26px", height: "26px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,.1)", color: "#E5E7EB", cursor: "pointer" }}><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></span>
              <div style={{ fontSize: "15.5px", fontWeight: "700", color: "#fff", marginBottom: "8px" }}>{S(c?.info?.title)}</div>
              <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "4px" }}>STATUS THRESHOLDS (µg/m³, HOURLY)</div>
              <div style={{ border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", overflow: "hidden", marginBottom: "10px" }}>
                {L(c?.info?.bands).map((b, i180) => <React.Fragment key={i180}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "5px 9px", borderTop: "1px solid rgba(255,255,255,.08)", background: `${A(b?.bg)}` }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", flex: "0 0 8px", background: `${A(b?.dot)}` }} />
                    <span style={{ flex: "1", color: "#fff", fontWeight: "600" }}>{S(b?.label)}</span>
                    {b?.now && <>
                      <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#A7F3D0" }}>NOW</span>
                    </>}
                    <span style={{ minWidth: "62px", textAlign: "right", color: "#D1D8D4", fontVariantNumeric: "tabular-nums" }}>{S(b?.range)}</span>
                  </div>
                </React.Fragment>)}
              </div>
              <div style={{ marginBottom: "10px" }}>
                <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "2px" }}>CURRENT ASSESSMENT</div>
                {S(c?.info?.assess)}
              </div>
              <div>
                <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", color: "#9CA8A1", marginBottom: "2px" }}>REFERENCE</div>
                {"NSW Government air quality categories for hourly particle readings. "}{S(c?.info?.nepm)}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "7px" }}>
                  <a href="https://www.airquality.nsw.gov.au" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12.5px", fontWeight: "700", color: "#A7F3D0", background: "rgba(255,255,255,.08)", borderRadius: "6px", padding: "3px 8px", textDecoration: "none" }}>NSW Air Quality ↗</a>
                  <a href="https://www.environment.nsw.gov.au/topics/air/understanding-air-quality-data/glossary-of-air-quality-terms" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12.5px", fontWeight: "700", color: "#A7F3D0", background: "rgba(255,255,255,.08)", borderRadius: "6px", padding: "3px 8px", textDecoration: "none" }}>Air quality categories ↗</a>
                </div>
              </div>
            </div>
          </>}
          {c?.gauge && <>
            <div style={{ position: "relative", width: "100%", maxWidth: "150px", alignSelf: "center" }}>
              <svg viewBox="0 0 220 124" style={{ width: "100%", display: "block", overflow: "visible" }}>
                <path d="M30 110 A80 80 0 0 1 190 110" fill="none" stroke="#EDF0EE" strokeWidth="18" strokeLinecap="round" />
                <path d="M30 110 A80 80 0 0 1 190 110" fill="none" stroke={c?.color} strokeWidth="18" strokeLinecap="round" pathLength="100" strokeDasharray={c?.gauge?.dash} />
                <g transform={c?.gauge?.needle}><path d="M28 110 L104 106.5 L104 113.5 Z" fill="#3F4B45" /></g>
                <circle cx="110" cy="110" r="6" fill="#fff" stroke="#3F4B45" strokeWidth="2.5" />
              </svg>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#8A948E", padding: "0 6%" }}>
                <span>0</span>
                <span>{S(c?.gauge?.max)}</span>
              </div>
            </div>
          </>}
          <div style={{ flex: `${A(c?.grow)}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "34px" }}>
            <span style={{ display: "flex", alignItems: "baseline", gap: "4px", whiteSpace: "nowrap" }}>
              <span style={{ fontSize: `${A(c?.vSize)}`, lineHeight: "1", fontWeight: "800", letterSpacing: "-1px", color: "#0F1A14", fontVariantNumeric: "tabular-nums" }}>{S(c?.value)}</span>
              <span style={{ fontSize: `${A(c?.uSize)}`, fontWeight: "600", color: "#4C6354" }}>{S(c?.unit)}</span>
            </span>
            <span style={{ marginTop: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "4px", fontSize: "13px", color: "#6A746E", textAlign: "center" }}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill={c?.deltaInk} stroke="none"><path d={c?.deltaPath} /></svg>
              <b style={{ color: `${A(c?.deltaInk)}` }}>{S(c?.delta)}</b>
              {" vs previous reading"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "12.5px", color: "#7A8580" }}>Last 3 hours</span>
            <div style={{ position: "relative" }} onMouseLeave={c?.spark?.leave}>
              <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width: "100%", height: "26px", display: "block", overflow: "visible" }}>
                <path d={c?.spark?.area} fill={c?.color} opacity="0.08" stroke="none" />
                <path d={c?.spark?.path} fill="none" stroke={c?.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              </svg>
              <div style={{ position: "absolute", inset: "-6px 0", display: "flex" }}>
                {L(c?.spark?.hits).map((hp, i181) => <React.Fragment key={i181}>
                  <div onMouseEnter={hp?.enter} style={{ flex: "1", height: "100%", cursor: "crosshair" }} />
                </React.Fragment>)}
              </div>
              {c?.spark?.active && <>
                <span style={{ position: "absolute", left: `${A(c?.spark?.active?.left)}`, top: `${A(c?.spark?.active?.top)}`, width: "7px", height: "7px", borderRadius: "50%", background: "#fff", border: `2px solid ${A(c?.color)}`, boxSizing: "border-box", pointerEvents: "none" }} />
                <div style={{ position: "absolute", left: `${A(c?.spark?.active?.tipLeft)}`, bottom: "calc(100% + 8px)", transform: `translateX(${A(c?.spark?.active?.shift)})`, background: "#043C2C", color: "#fff", borderRadius: "7px", padding: "5px 8px", fontSize: "13px", whiteSpace: "nowrap", pointerEvents: "none", zIndex: "5", boxShadow: "0 6px 16px rgba(15,26,20,.2)" }}>
                  <div style={{ fontWeight: "800", fontVariantNumeric: "tabular-nums" }}>{S(c?.spark?.active?.value)}</div>
                  <div style={{ fontSize: "11.5px", color: "#C9D1CC" }}>{S(c?.spark?.active?.when)}</div>
                </div>
              </>}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", borderTop: "1px solid #EDF0EE", paddingTop: "10px", fontSize: "13px", color: "#7A8580", fontVariantNumeric: "tabular-nums" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
              <span style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "5px" }}>
                {"Min "}
                <b style={{ color: "#0F1A14" }}>{S(c?.mm?.min)}</b>
              </span>
              <span>{"observed at "}{S(c?.mm?.minAt)}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", alignItems: "flex-end", textAlign: "right" }}>
              <span style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end", gap: "5px" }}>
                {"Max "}
                <b style={{ color: "#0F1A14" }}>{S(c?.mm?.max)}</b>
              </span>
              <span>{"observed at "}{S(c?.mm?.maxAt)}</span>
            </div>
          </div>
        </div>
      </React.Fragment>)}
    </div>
    <div style={{ position: "relative", zIndex: "5", display: "flex", justifyContent: "flex-end" }}>
      <div style={{ display: "flex", alignItems: "stretch", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "10px", overflow: "hidden", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
        {L(V.mmRanges).map((r, i182) => <React.Fragment key={i182}>
          <div onClick={r?.select} style={{ minWidth: "44px", padding: "9px 14px", fontSize: "14.5px", fontWeight: `${A(r?.weight)}`, textAlign: "center", cursor: "pointer", color: `${A(r?.color)}`, background: `${A(r?.bg)}`, borderRight: "1px solid #EEF1EF" }}>{S(r?.label)}</div>
        </React.Fragment>)}
        <div onClick={V.mmToggleCustom} title="Pick a custom date range" style={{ padding: "9px 14px", display: "flex", alignItems: "center", gap: "7px", fontSize: "14.5px", fontWeight: "700", cursor: "pointer", background: `${A(V.mmCustomBg)}`, color: `${A(V.mmCustomInk)}` }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px" }}><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" /></svg>
          {S(V.mmCustomLabel)}
        </div>
      </div>
      {V.mmCustomOpen && <>
        <div style={{ position: "absolute", top: "calc(100% + 8px)", right: "0", width: "300px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "14px", boxShadow: "0 22px 54px rgba(15,26,20,.18)", padding: "16px", zIndex: "50", display: "flex", flexDirection: "column", gap: "12px" }}>
          <span style={{ fontSize: "15.5px", fontWeight: "700", color: "#0F1A14" }}>Custom Range</span>
          <div style={{ display: "flex", gap: "9px" }}>
            <label style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>
              FROM
              <input type="date" value={V.mmDraftFrom ?? ""} min={V.mmMinDate} max={V.mmMaxDate} onChange={V.onMmDraftFrom} style={{ border: "1.5px solid #D5DED8", borderRadius: "9px", padding: "8px", fontSize: "14.5px", color: "#0F1A14", fontFamily: "inherit", minWidth: "0" }} />
            </label>
            <label style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>
              TO
              <input type="date" value={V.mmDraftTo ?? ""} min={V.mmMinDate} max={V.mmMaxDate} onChange={V.onMmDraftTo} style={{ border: "1.5px solid #D5DED8", borderRadius: "9px", padding: "8px", fontSize: "14.5px", color: "#0F1A14", fontFamily: "inherit", minWidth: "0" }} />
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <div onClick={V.mmCancelCustom} style={{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #E5E8E6", fontSize: "14.5px", fontWeight: "600", color: "#3F4B45", cursor: "pointer" }}>Cancel</div>
            <div onClick={V.mmApplyCustom} style={{ padding: "8px 14px", borderRadius: "8px", background: "#1AA34A", fontSize: "14.5px", fontWeight: "700", color: "#fff", cursor: "pointer" }}>Apply</div>
          </div>
        </div>
      </>}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0,1fr))", gap: "16px" }}>
      {L(V.mmCharts).map((p, i183) => <React.Fragment key={i183}>
        <div style={{ minWidth: "0", gridColumn: `${A(p?.span)}`, background: "#FFFFFF", border: "1px solid #E3EAE5", borderRadius: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.05)", padding: "22px 24px 16px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0", animation: "wxChartIn .6s ease both" }}>
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
          <div style={{ flex: "1", minWidth: "0", display: "grid", gridTemplateColumns: `${A(p?.cols)}`, gap: "6px", alignContent: "center" }}>
            <div style={{ position: "relative", height: "240px" }}>
              {L(p?.ticks).map((tk, i184) => <React.Fragment key={i184}>
                <span style={{ position: "absolute", right: "0", top: `${A(tk?.top)}`, transform: "translateY(-50%)", fontSize: "12.5px", color: "#6A746E", fontVariantNumeric: "tabular-nums" }}>{S(tk?.label)}</span>
              </React.Fragment>)}
            </div>
            <div ref={V.zoomRef} data-zkey={p?.zkey} onMouseMove={p?.onMove} onMouseLeave={p?.onLeave} style={{ position: "relative", height: "240px", cursor: "crosshair" }}>
              {L(p?.grid).map((g, i185) => <React.Fragment key={i185}>
                <div style={{ position: "absolute", left: "0", right: "0", top: `${A(g)}`, borderTop: "1px dashed #E3E9E5" }} />
              </React.Fragment>)}
              <svg viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                <defs>
                  <linearGradient id={p?.gid} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor={p?.color} stopOpacity=".28" />
                    <stop offset="1" stopColor={p?.color} stopOpacity=".02" />
                  </linearGradient>
                </defs>
                <path d={p?.area} fill={`url(#${A(p?.gid)})`} stroke="none" />
                <path d={p?.line} fill="none" stroke={p?.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                {p?.dual && <>
                  <path d={p?.line2} fill="none" stroke={p?.color2} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                </>}
              </svg>
              <span style={{ position: "absolute", left: "100%", top: `${A(p?.endTop)}`, width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", borderRadius: "50%", background: `${A(p?.color)}`, boxShadow: "0 0 0 4px #fff", pointerEvents: "none" }} />
              {p?.dual && <>
                <span style={{ position: "absolute", left: "100%", top: `${A(p?.endTop2)}`, width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", borderRadius: "50%", background: `${A(p?.color2)}`, boxShadow: "0 0 0 4px #fff", pointerEvents: "none" }} />
              </>}
              {p?.hover && <>
                <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(p?.hover?.left)}`, borderLeft: "1px solid #9CA8A1", pointerEvents: "none" }} />
                <span style={{ position: "absolute", left: `${A(p?.hover?.left)}`, top: `${A(p?.hover?.top)}`, width: "11px", height: "11px", margin: "-5.5px 0 0 -5.5px", borderRadius: "50%", background: "#fff", border: `2.5px solid ${A(p?.color)}`, boxSizing: "border-box", pointerEvents: "none" }} />
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
                {L(p?.ticks2).map((tk, i186) => <React.Fragment key={i186}>
                  <span style={{ position: "absolute", left: "0", top: `${A(tk?.top)}`, transform: "translateY(-50%)", fontSize: "12.5px", color: `${A(p?.color2)}`, fontVariantNumeric: "tabular-nums" }}>{S(tk?.label)}</span>
                </React.Fragment>)}
              </div>
            </>}
            <div />
            <div style={{ position: "relative", height: "22px" }}>
              {L(p?.xLabels).map((xl, i187) => <React.Fragment key={i187}>
                <span style={{ position: "absolute", left: `${A(xl?.left)}`, top: "4px", transform: `translateX(${A(xl?.shift)})`, fontSize: "12.5px", color: "#3F4B45", fontWeight: "600", whiteSpace: "nowrap" }}>{S(xl?.bot)}</span>
              </React.Fragment>)}
            </div>
            {p?.dual && <>
              <div />
            </>}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1px solid #EDF0EE", paddingTop: "10px" }}>
            {L(p?.foot).map((ft, i188) => <React.Fragment key={i188}>
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
    </>
  );
}
