import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';

export default function ShowTzGrid({ V }) {
  return (
    <>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "28px", alignItems: "stretch" }}>
      {L(V.tzCards).map((c, i52) => <React.Fragment key={i52}>
        <div style={{ position: "relative", minWidth: "0", gridColumn: `${A(c?.span)}`, background: "#FFFFFF", border: "none", borderRadius: "16px", boxShadow: "0 1px 3px rgba(16,24,40,.08), 0 1px 2px rgba(16,24,40,.04)", padding: "30px 32px 24px", display: "flex", flexDirection: "column", gap: "20px" }}>
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
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <div style={{ fontSize: "14px", fontWeight: "600", color: "#26332C", flex: "1", minWidth: "150px" }}>{S(c?.title)}</div>
            {c?.multi && <>
              <div style={{ position: "relative" }}>
                <div onClick={c?.toggleM} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: "500", color: "#3F4B45", background: "#fff", border: "1px solid #D8E7D4", borderRadius: "10px", padding: "9px 12px 9px 14px", cursor: "pointer", userSelect: "none", whiteSpace: "nowrap" }}>
                  {S(c?.mLabel)}
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#6A746E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                </div>
                {c?.mOpen && <>
                  <div style={{ position: "absolute", top: "calc(100% + 6px)", right: "0", width: "240px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 18px 44px rgba(15,26,20,.18)", padding: "6px", zIndex: "30", display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "12.5px", color: "#7A8580", padding: "5px 9px 7px" }}>Select up to 2 to compare</span>
                    {L(c?.mOpts).map((o, i53) => <React.Fragment key={i53}>
                      <div onClick={o?.pick} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 9px", borderRadius: "8px", fontSize: "12.5px", color: "#26332C", cursor: `${A(o?.cursor)}`, opacity: `${A(o?.op)}`, background: `${A(o?.bg)}`, userSelect: "none" }}>
                        <span style={{ width: "17px", height: "17px", flex: "0 0 17px", borderRadius: "5px", border: `1.5px solid ${A(o?.boxBorder)}`, background: `${A(o?.boxBg)}`, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke={o?.check} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg></span>
                        <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: `${A(o?.color)}` }} />
                        {S(o?.label)}
                      </div>
                    </React.Fragment>)}
                  </div>
                </>}
              </div>
            </>}
            {c?.hasMetricSelect && <>
              <select value={c?.metric ?? ""} onChange={c?.onMetric} style={{ font: "inherit", fontSize: "13px", fontWeight: "500", color: "#3F4B45", backgroundColor: "#fff", border: "1px solid #D8E7D4", borderRadius: "10px", padding: "9px 34px 9px 14px", cursor: "pointer", appearance: "none", WebkitAppearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236A746E' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}>
                {L(c?.metricOptions).map((o, i54) => <React.Fragment key={i54}>
                  <option value={o?.key ?? ""}>{S(o?.label)}</option>
                </React.Fragment>)}
              </select>
            </>}
            {c?.hasRangeSelect && <>
              <select value={c?.range ?? ""} onChange={c?.onRange} style={{ font: "inherit", fontSize: "13px", fontWeight: "500", color: "#3F4B45", backgroundColor: "#fff", border: "1px solid #D8E7D4", borderRadius: "10px", padding: "9px 34px 9px 14px", cursor: "pointer", appearance: "none", WebkitAppearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236A746E' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", fontWeight: "500" }}>
                {L(c?.rangeOptions).map((ro, i55) => <React.Fragment key={i55}>
                  <option value={ro?.key ?? ""} selected={ro?.selected}>{S(ro?.label)}</option>
                </React.Fragment>)}
              </select>
            </>}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
              {c?.isZoomed && <>
                <span onClick={c?.onZoomReset} style={{ fontSize: "12.5px", fontWeight: "700", color: "#0E7C3A", cursor: "pointer", padding: "5px 8px", borderRadius: "6px", background: "#E7F6EC" }}>Reset</span>
              </>}
              <div style={{ display: "flex", alignItems: "stretch", border: "1px solid #E5E8E6", borderRadius: "8px", overflow: "hidden" }}>
                <span className="scp2o" onClick={c?.onZoomOut} title="Zoom out" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45", borderRight: "1px solid #EEF1EF" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4M8 11h6" /></svg></span>
                <span className="scp2o" onClick={c?.onZoomIn} title="Zoom in" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4M8 11h6M11 8v6" /></svg></span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ position: "relative", width: "36px", flex: "0 0 36px", height: "260px", fontSize: "12.5px", color: "#4C6354" }}>
              {L(c?.yTicks).map((t, i56) => <React.Fragment key={i56}>
                <span style={{ position: "absolute", right: "0", top: `${A(t?.top)}`, transform: "translateY(-50%)", whiteSpace: "nowrap", color: `${A(c?.tickInk)}` }}>{S(t?.label)}</span>
              </React.Fragment>)}
            </div>
            <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
              <div ref={c?.plotRef} onMouseDown={c?.onDown} onMouseMove={c?.onMove} onMouseLeave={c?.onLeave} onDoubleClick={c?.onReset} style={{ position: "relative", height: "260px", cursor: `${A(c?.cursor)}`, userSelect: "none", touchAction: "none" }}>
                {c?.band && <>
                  <div style={{ position: "absolute", left: "0", right: "0", top: `${A(c?.band?.top)}`, height: `${A(c?.band?.height)}`, background: "rgba(139,92,246,.09)", borderTop: "1px dashed rgba(139,92,246,.45)", borderBottom: "1px dashed rgba(139,92,246,.45)", pointerEvents: "none" }}><span style={{ position: "absolute", right: "6px", top: "4px", fontSize: "12px", fontWeight: "700", color: "#6D28D9" }}>Ideal spray range 2–8°C</span></div>
                </>}
                <svg viewBox="0 0 1000 260" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "hidden" }}>
                  <defs>
                    <linearGradient id={c?.gradId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={c?.color} stopOpacity="0.42" />
                      <stop offset="100%" stopColor={c?.color} stopOpacity="0.03" />
                    </linearGradient>
                  </defs>
                  {L(c?.grid).map((g, i57) => <React.Fragment key={i57}>
                    <line x1="0" x2="1000" y1={g} y2={g} stroke="#E5EFE2" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                  </React.Fragment>)}
                  {c?.isArea && <>
                    <path d={c?.area} fill={`url(#${A(c?.gradId)})`} stroke="none" />
                    <path d={c?.line} fill="none" stroke={c?.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                    <path d={c?.area2} fill={c?.line2Color} fillOpacity={c?.area2Opacity} stroke="none" />
                    <path d={c?.line2} fill="none" stroke={c?.line2Color} strokeWidth="1.6" strokeDasharray={c?.line2Dash} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                  </>}
                  {c?.sec && <>
                    <path d={c?.sec?.line} fill="none" stroke={c?.sec?.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                  </>}
                  {c?.hover && <>
                    <line x1={c?.hover?.x} x2={c?.hover?.x} y1="0" y2="260" stroke="#4C6354" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
                  </>}
                </svg>
                {L(c?.arrows).map((ar, i58) => <React.Fragment key={i58}>
                  <span style={{ position: "absolute", left: `${A(ar?.left)}`, top: `${A(ar?.top)}`, transform: `${A(ar?.rot)}`, width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center", background: "#7C3AED", border: "1.5px solid #fff", borderRadius: "50%", boxShadow: "0 1px 4px rgba(76,29,149,.35)", pointerEvents: "none" }}><svg viewBox="0 0 24 24" width="12" height="12"><path d="M12 3 L18 19 L12 15 L6 19 Z" fill="#FFFFFF" /></svg></span>
                </React.Fragment>)}
                {L(c?.bars).map((br, i59) => <React.Fragment key={i59}>
                  <div style={{ position: "absolute", left: `${A(br?.left)}`, width: `${A(br?.width)}`, top: `${A(br?.top)}`, height: `${A(br?.height)}`, background: `${A(br?.bg)}`, borderRadius: "5px 5px 0 0", pointerEvents: "none" }} />
                  <span style={{ position: "absolute", left: `${A(br?.center)}`, top: `${A(br?.labelTop)}`, transform: "translateX(-50%)", fontSize: "12px", fontWeight: "700", color: "#4A524D", pointerEvents: "none", whiteSpace: "nowrap" }}>{S(br?.label)}</span>
                </React.Fragment>)}
                {c?.sec && <>
                  {L(c?.sec?.bars).map((br, i60) => <React.Fragment key={i60}>
                    <div style={{ position: "absolute", left: `${A(br?.left)}`, width: `${A(br?.width)}`, top: `${A(br?.top)}`, height: `${A(br?.height)}`, background: `${A(br?.bg)}`, opacity: ".5", borderRadius: "5px 5px 0 0", pointerEvents: "none" }} />
                  </React.Fragment>)}
                </>}
                {c?.hover && <>
                  <span style={{ position: "absolute", left: `${A(c?.hover?.left)}`, top: `${A(c?.hover?.top)}`, width: "10px", height: "10px", borderRadius: "50%", background: "#fff", border: `2.5px solid ${A(c?.color)}`, transform: "translate(-50%,-50%)", boxSizing: "border-box", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", left: `${A(c?.hover?.left)}`, top: `${A(c?.hover?.tipTop)}`, transform: `${A(c?.hover?.tx)}`, background: "#043C2C", color: "#fff", borderRadius: "9px", padding: "7px 10px", pointerEvents: "none", whiteSpace: "nowrap", boxShadow: "0 8px 18px rgba(0,0,0,.18)", zIndex: "4" }}>
                    <div style={{ fontSize: "12.5px", fontWeight: "600", fontFamily: "'Roboto', sans-serif", fontVariantNumeric: "tabular-nums" }}>{S(c?.hover?.value)}</div>
                    {c?.sec?.hoverVal && <>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", fontWeight: "600", fontFamily: "'Roboto', sans-serif", fontVariantNumeric: "tabular-nums", marginTop: "2px" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(c?.sec?.color)}` }} />
                        {S(c?.sec?.hoverVal)}
                      </div>
                    </>}
                    <div style={{ fontSize: "12.5px", color: "#C9D1CC", marginTop: "1px" }}>{S(c?.hover?.when)}</div>
                  </div>
                </>}
              </div>
              <div style={{ position: "relative", height: "36px", borderTop: "1px solid #D8E7D4", marginTop: "2px" }}>
                {L(c?.xLabels).map((xl, i61) => <React.Fragment key={i61}>
                  <div style={{ position: "absolute", top: "7px", left: `${A(xl?.left)}`, transform: `${A(xl?.tx)}`, textAlign: "center", whiteSpace: "nowrap", lineHeight: "1.3" }}>
                    <div style={{ fontSize: "12.5px", fontWeight: "600", color: "#5F6762" }}>{S(xl?.top)}</div>
                    <div style={{ fontSize: "11.5px", color: "#4C6354" }}>{S(xl?.sub)}</div>
                  </div>
                </React.Fragment>)}
              </div>
            </div>
            {c?.sec && <>
              <div style={{ position: "relative", width: "40px", flex: "0 0 40px", height: "260px", fontSize: "12.5px" }}>
                {L(c?.sec?.yTicks).map((t, i62) => <React.Fragment key={i62}>
                  <span style={{ position: "absolute", left: "0", top: `${A(t?.top)}`, transform: "translateY(-50%)", whiteSpace: "nowrap", color: `${A(c?.sec?.color)}` }}>{S(t?.label)}</span>
                </React.Fragment>)}
              </div>
            </>}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            {L(c?.legendItems).map((le, i63) => <React.Fragment key={i63}>
              <span onClick={le?.toggle} title="Click to show only this line" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "#3F5647", cursor: "pointer", userSelect: "none", opacity: `${A(le?.opacity)}` }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "3px", background: `${A(le?.color)}` }} />
                {S(le?.label)}
              </span>
            </React.Fragment>)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1px solid #D8E7D4", paddingTop: "12px", fontSize: "12.5px", color: "#4A524D" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              {c?.statLabel && <>
                <span style={{ flex: "0 0 92px", fontWeight: "500", color: "#3F4B45" }}>{S(c?.statLabel)}</span>
              </>}
              <span style={{ whiteSpace: "nowrap" }}>
                {"Min "}
                <strong style={{ color: "#26332C" }}>{S(c?.minVal)}</strong>
                <span style={{ color: "#46604F" }}>{" · "}{S(c?.minWhen)}</span>
              </span>
              <span style={{ flex: "1" }} />
              <span style={{ whiteSpace: "nowrap" }}>
                {"Max "}
                <strong style={{ color: "#26332C" }}>{S(c?.maxVal)}</strong>
                <span style={{ color: "#46604F" }}>{" · "}{S(c?.maxWhen)}</span>
              </span>
            </div>
            {c?.stat2 && <>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span style={{ flex: "0 0 92px", fontWeight: "500", color: "#3F4B45" }}>{S(c?.stat2?.label)}</span>
                <span style={{ whiteSpace: "nowrap" }}>
                  {"Min "}
                  <strong style={{ color: "#26332C" }}>{S(c?.stat2?.minVal)}</strong>
                  <span style={{ color: "#46604F" }}>{" · "}{S(c?.stat2?.minWhen)}</span>
                </span>
                <span style={{ flex: "1" }} />
                <span style={{ whiteSpace: "nowrap" }}>
                  {"Max "}
                  <strong style={{ color: "#26332C" }}>{S(c?.stat2?.maxVal)}</strong>
                  <span style={{ color: "#46604F" }}>{" · "}{S(c?.stat2?.maxWhen)}</span>
                </span>
              </div>
            </>}
          </div>
        </div>
      </React.Fragment>)}
    </div>
    </>
  );
}
