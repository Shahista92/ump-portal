import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';

export default function GasTabDash({ V }) {
  return (
    <>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 170px), 1fr))", gap: "12px" }}>
      {L(V.gasRows).map((p, i130) => <React.Fragment key={i130}>
        <div style={{ position: "relative", zIndex: `${A(p?.infoZ)}`, minWidth: "0", background: "#fff", border: "1px solid #CFE5C8", borderRadius: "14px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 4px 12px rgba(16,24,40,.04)", animation: "wxChartIn .5s ease both" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "28px", height: "28px", flex: "0 0 28px", borderRadius: "8px", background: `${A(p?.tint)}`, display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke={p?.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={p?.icon} /></svg></span>
            <span style={{ flex: "1", minWidth: "0", fontSize: "15px", fontWeight: "700", lineHeight: "1.25", color: `${A(p?.color)}` }}>{S(p?.full)}</span>
            {p?.info && <>
              <span className="scp2o" onClick={p?.toggleInfo} title="About this limit" style={{ width: "20px", height: "20px", flex: "0 0 20px", borderRadius: "50%", border: "1px solid #D8E7D4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "700", fontStyle: "italic", fontFamily: "Georgia, serif", color: "#4C6354", cursor: "pointer", background: "#fff" }}>i</span>
            </>}
          </div>
          {p?.infoOpen && <>
            <div style={{ position: "absolute", zIndex: "30", boxSizing: "border-box", top: "44px", right: "6px", width: "280px", maxWidth: "calc(100vw - 40px)", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 18px 44px rgba(15,26,20,.18)", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14.5px", lineHeight: "1.5", color: "#3F4B45" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ flex: "1", fontSize: "15.5px", fontWeight: "800", color: "#0F1A14" }}>{S(p?.full)}{" limit"}</span>
                <span onClick={p?.toggleInfo} style={{ cursor: "pointer", color: "#6A746E", fontSize: "17px" }}>✕</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "10px", height: "10px", flex: "0 0 10px", borderRadius: "3px", background: "#16A34A" }} />
                  <span>{"Below "}{S(p?.info?.limit)}: Below limit</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "10px", height: "10px", flex: "0 0 10px", borderRadius: "3px", background: "#DC2626" }} />
                  <span>{S(p?.info?.limit)}{" and above: Above limit"}</span>
                </div>
              </div>
              <div>
                <b style={{ color: "#0F1A14" }}>Reference:</b>
                {" "}{S(p?.info?.ref)}
              </div>
              <div>
                <b style={{ color: "#0F1A14" }}>Why red shows:</b>
                {" The red section of the dial, and the red band above the dashed line on the chart, mark where readings would be above the limit. "}{S(p?.info?.now)}
              </div>
            </div>
          </>}
          {p?.isGauge && <>
            <div style={{ position: "relative", width: "104px", alignSelf: "center" }}>
              <svg viewBox="0 0 200 150" style={{ width: "100%", display: "block", overflow: "visible" }}>
                <path d={p?.track} fill="none" stroke="#EEF2EF" strokeWidth="15" strokeLinecap="round" />
                {L(p?.bands).map((bd, i131) => <React.Fragment key={i131}>
                  <path d={bd?.d} fill="none" stroke={bd?.color} strokeWidth="4" strokeLinecap="round" />
                </React.Fragment>)}
                <path d={p?.track} fill="none" stroke={p?.zoneColor} strokeWidth="15" strokeLinecap="round" pathLength="100" style={{ strokeDasharray: "100 200", strokeDashoffset: `${A(p?.offset)}`, animation: "gaugeFill 1.1s cubic-bezier(.2,.8,.2,1) both" }} />
                <g style={{ transformOrigin: "100px 96px", transform: `rotate(${A(p?.angle)}deg)`, animation: "gaugeNeedle 1.1s cubic-bezier(.2,.8,.2,1) both" }}><circle cx="100" cy="20" r="8.5" fill="#fff" stroke={p?.zoneColor} strokeWidth="4" /></g>
              </svg>
              <div style={{ position: "absolute", left: "0", right: "0", top: "42%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "21.5px", lineHeight: "1", fontWeight: "800", color: "#0F1A14", fontVariantNumeric: "tabular-nums" }}>{S(p?.value)}</span>
                <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#4C6354", marginTop: "2px" }}>{S(p?.unit)}</span>
              </div>
            </div>
          </>}
          {p?.isPlain && <>
            <div style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "56px" }}>
              <span style={{ display: "flex", alignItems: "baseline", gap: "4px", whiteSpace: "nowrap" }}>
                <span style={{ fontSize: "31px", lineHeight: "1", fontWeight: "800", letterSpacing: "-.5px", color: "#0F1A14", fontVariantNumeric: "tabular-nums" }}>{S(p?.value)}</span>
                <span style={{ fontSize: "14.5px", fontWeight: "600", color: "#4C6354" }}>{S(p?.unit)}</span>
              </span>
            </div>
          </>}
          <span style={{ marginTop: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", fontSize: "13px", color: "#4C6354", whiteSpace: "nowrap" }}>
            <svg viewBox="0 0 24 24" width="11" height="11" fill={p?.deltaColor} stroke="none"><path d={p?.deltaPath} /></svg>
            <b style={{ color: `${A(p?.deltaColor)}` }}>{S(p?.delta)}</b>
            {" vs previous reading"}
          </span>
        </div>
      </React.Fragment>)}
    </div>
    <div style={{ position: "relative", zIndex: "30", display: "flex", justifyContent: "flex-end" }}>
      <div style={{ display: "flex", alignItems: "stretch", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "7px", overflow: "hidden" }}>
        {L(V.gasRanges).map((r, i132) => <React.Fragment key={i132}>
          <div onClick={r?.select} style={{ padding: "8px 13px", fontSize: "14px", fontWeight: "600", cursor: "pointer", color: `${A(r?.color)}`, background: `${A(r?.bg)}`, borderRight: "1px solid #EEF1EF" }}>{S(r?.label)}</div>
        </React.Fragment>)}
        <div onClick={V.gasToggleCustom} title="Pick a custom date range" style={{ padding: "8px 13px", display: "flex", alignItems: "center", gap: "7px", fontSize: "14px", fontWeight: "600", cursor: "pointer", background: `${A(V.gasCustomBg)}`, color: `${A(V.gasCustomInk)}` }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ width: "13px", height: "13px" }}><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" /></svg>
          {S(V.gasCustomLabel)}
        </div>
      </div>
      {V.gasCustomOpen && <>
        <div style={{ position: "absolute", top: "52px", right: "16px", width: "330px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "14px", boxShadow: "0 22px 54px rgba(15,26,20,.18)", padding: "16px", zIndex: "50" }}>
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
              <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F1A14" }}>{S(V.monthLabel)}</span>
              <span style={{ fontSize: "9.5px", color: "#6A746E" }}>▼</span>
              <span style={{ flex: "1" }} />
              <span className="scp2o" onClick={V.prevMonth} title="Previous month" style={{ width: "24px", height: "24px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45", fontSize: "15.5px" }}>‹</span>
              <span className="scp2o" onClick={V.nextMonth} title="Next month" style={{ width: "24px", height: "24px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: `${A(V.nextInk)}`, fontSize: "15.5px" }}>›</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
              {L(V.dowLabels).map((w, i133) => <React.Fragment key={i133}>
                <div style={{ textAlign: "center", fontSize: "12px", color: "#8A948E", padding: "4px 0 6px" }}>{S(w)}</div>
              </React.Fragment>)}
              {L(V.calDays).map((day, i134) => <React.Fragment key={i134}>
                <div onClick={day?.pick} style={{ height: "28px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", borderRadius: "14px", cursor: `${A(day?.cursor)}`, color: `${A(day?.ink)}`, background: `${A(day?.bg)}`, border: `1px solid ${A(day?.ring)}`, fontWeight: `${A(day?.weight)}` }}>{S(day?.n)}</div>
              </React.Fragment>)}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "16px", paddingTop: "14px" }}>
            <span onClick={V.gasCancelCustom} style={{ fontSize: "14.5px", color: "#6A746E", cursor: "pointer" }}>Cancel</span>
            <span onClick={V.gasApplyCustom} style={{ fontSize: "14.5px", fontWeight: "600", color: "#0E7C3A", cursor: "pointer" }}>Apply</span>
          </div>
        </div>
      </>}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, max(420px, calc(50% - 8px))), 1fr))", gap: "16px" }}>
      {L(V.gasPanels).map((p, i135) => <React.Fragment key={i135}>
        <div style={{ background: "#FFFFFF", border: "1px solid #CFE5C8", borderRadius: "18px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 6px 18px rgba(16,24,40,.05)", padding: "22px 24px 16px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0", animation: "wxChartIn .6s ease both", animationDelay: `${A(p?.delay)}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <div style={{ fontSize: "21.5px", fontWeight: "800", color: "#0F1A14", flex: "1", minWidth: "150px" }}>{S(p?.chartTitle)}</div>
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
              {L(p?.ticks).map((tk, i136) => <React.Fragment key={i136}>
                <span style={{ position: "absolute", right: "0", top: `${A(tk?.top)}`, transform: "translateY(-50%)", fontSize: "12.5px", color: "#6A746E", fontVariantNumeric: "tabular-nums" }}>{S(tk?.label)}</span>
              </React.Fragment>)}
            </div>
            <div ref={V.zoomRef} data-zkey={p?.zkey} onMouseMove={p?.onMove} onMouseLeave={p?.onLeave} style={{ position: "relative", height: "196px", cursor: "crosshair" }}>
              {L(p?.zoneRects).map((zr, i137) => <React.Fragment key={i137}>
                <div style={{ position: "absolute", left: "0", right: "0", top: `${A(zr?.top)}`, height: `${A(zr?.height)}`, background: `${A(zr?.color)}`, opacity: ".07" }} />
              </React.Fragment>)}
              {L(p?.grid).map((g, i138) => <React.Fragment key={i138}>
                <div style={{ position: "absolute", left: "0", right: "0", top: `${A(g)}`, borderTop: "1px dashed #E3E9E5" }} />
              </React.Fragment>)}
              {L(p?.limits).map((lm, i139) => <React.Fragment key={i139}>
                <div style={{ position: "absolute", left: "0", right: "0", top: `${A(lm?.top)}`, borderTop: `1.5px dashed ${A(lm?.color)}`, zIndex: "2", pointerEvents: "none" }}><span style={{ position: "absolute", left: "4px", bottom: "3px", boxShadow: "0 1px 3px rgba(16,24,40,.12)", fontSize: "12.5px", fontWeight: "700", color: `${A(lm?.color)}`, background: "rgba(255,255,255,.92)", padding: "0 5px", borderRadius: "4px" }}>{S(lm?.label)}</span></div>
              </React.Fragment>)}
              <svg viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                <defs>
                  <linearGradient id={p?.gid} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor={p?.color} stopOpacity=".32" />
                    <stop offset="1" stopColor={p?.color} stopOpacity="0" />
                  </linearGradient>
                </defs>
                {L(p?.bars).map((br, i140) => <React.Fragment key={i140}>
                  <rect x={br?.x} y={br?.y} width={br?.w} height={br?.h} fill={br?.color} fillOpacity={br?.op} style={{ transformOrigin: "0 190px", animation: "wxGrowBar .7s ease-out both" }} />
                </React.Fragment>)}
                {p?.isLine && <>
                  <path d={p?.area} fill={p?.fill} stroke="none" />
                  <path d={p?.line} fill="none" stroke={p?.color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" pathLength="460" style={{ strokeDasharray: "460", animation: "wxDrawLine 1.5s ease-out both" }} />
                </>}
              </svg>
              {L(p?.marks).map((mk, i141) => <React.Fragment key={i141}>
                <span style={{ position: "absolute", left: `${A(mk?.left)}`, top: `${A(mk?.top)}`, width: "8px", height: "8px", margin: "-4px 0 0 -4px", borderRadius: "50%", background: "#fff", border: `2px solid ${A(p?.color)}`, boxSizing: "border-box", pointerEvents: "none" }} />
                <span style={{ position: "absolute", left: `${A(mk?.left)}`, top: `${A(mk?.top)}`, transform: `translate(${A(mk?.shiftX)}, ${A(mk?.shiftY)})`, fontSize: "12.5px", fontWeight: "700", color: "#1F2A24", background: "rgba(255,255,255,.95)", border: "1px solid #E5E8E6", borderRadius: "6px", padding: "1px 6px", whiteSpace: "nowrap", pointerEvents: "none" }}>{S(mk?.label)}</span>
              </React.Fragment>)}
              {p?.isLine && <>
                <span style={{ position: "absolute", left: "100%", top: `${A(p?.endTop)}`, width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", borderRadius: "50%", background: `${A(p?.color)}`, boxShadow: `0 0 0 4px ${A(p?.tint)}`, pointerEvents: "none" }} />
              </>}
              {p?.hover && <>
                <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(p?.hover?.left)}`, borderLeft: "1px solid #9CA8A1", pointerEvents: "none" }} />
                <span style={{ position: "absolute", left: `${A(p?.hover?.left)}`, top: `${A(p?.hover?.top)}`, width: "11px", height: "11px", margin: "-5.5px 0 0 -5.5px", borderRadius: "50%", background: "#fff", border: `2.5px solid ${A(p?.color)}`, boxSizing: "border-box", pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: "4px", left: `${A(p?.hover?.left)}`, transform: `translateX(${A(p?.hover?.shift)})`, margin: "0 10px", background: "#043C2C", color: "#F3F4F6", borderRadius: "10px", padding: "8px 11px", fontSize: "14px", whiteSpace: "nowrap", pointerEvents: "none", boxShadow: "0 10px 24px rgba(0,0,0,.2)", zIndex: "3", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ color: "#D1D8D4" }}>{S(p?.hover?.time)}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: `${A(p?.hover?.zone)}` }} />
                    <b style={{ color: "#fff" }}>{S(p?.hover?.value)}</b>
                    <span style={{ color: "#D1D8D4" }}>{S(p?.hover?.label)}</span>
                  </span>
                </div>
              </>}
            </div>
            <div />
            <div style={{ position: "relative", height: "30px" }}>
              {L(p?.xLabels).map((xl, i142) => <React.Fragment key={i142}>
                <span style={{ position: "absolute", left: `${A(xl?.left)}`, top: "4px", transform: `translateX(${A(xl?.shift)})`, display: "flex", flexDirection: "column", alignItems: "center", fontSize: "12.5px", lineHeight: "1.25", color: "#6A746E", whiteSpace: "nowrap" }}>
                  <span style={{ fontWeight: "600", color: "#3F4B45" }}>{S(xl?.time)}</span>
                  <span>{S(xl?.date)}</span>
                </span>
              </React.Fragment>)}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", borderTop: "1px solid #D8E7D4", paddingTop: "12px", fontSize: "14px", color: "#4A524D" }}>
            <span style={{ whiteSpace: "nowrap" }}>
              {"Min "}
              <strong style={{ color: "#0F1A14" }}>{S(p?.minVal)}</strong>
              <span style={{ color: "#46604F" }}>{" · "}{S(p?.minWhen)}</span>
            </span>
            <span style={{ flex: "1" }} />
            <span style={{ whiteSpace: "nowrap" }}>
              {"Avg "}
              <strong style={{ color: "#0F1A14" }}>{S(p?.avgVal)}</strong>
            </span>
            <span style={{ flex: "1" }} />
            <span style={{ whiteSpace: "nowrap" }}>
              {"Max "}
              <strong style={{ color: "#0F1A14" }}>{S(p?.maxVal)}</strong>
              <span style={{ color: "#46604F" }}>{" · "}{S(p?.maxWhen)}</span>
            </span>
          </div>
        </div>
      </React.Fragment>)}
    </div>
    </>
  );
}
