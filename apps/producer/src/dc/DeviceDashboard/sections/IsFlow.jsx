import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';

export default function IsFlow({ V }) {
  return (
    <>
    <div data-screen-label="Flow Meter"><DeviceHeader h={V.hdrFlow} /></div>
    {V.devInfoOpen && <>
      <div style={{ padding: "16px 16px 0", background: "#F3F6F4" }}><div><DeviceInfoPanel info={V.devInfo} /></div></div>
    </>}
    <div style={{ padding: "16px 16px 28px", display: "flex", flexDirection: "column", gap: "16px", fontFamily: "'Roboto', ui-sans-serif, system-ui, sans-serif", background: "#F3F6F4" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ position: "relative", zIndex: "5", display: "flex", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", alignItems: "stretch", maxWidth: "100%", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "10px", overflow: "hidden", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
            {L(V.flowRanges).map((r, i95) => <React.Fragment key={i95}>
              <div onClick={r?.select} style={{ flex: "1 1 auto", minWidth: "0", padding: "9px 12px", fontSize: "14.5px", fontWeight: "700", textAlign: "center", cursor: "pointer", color: `${A(r?.color)}`, background: `${A(r?.bg)}`, borderRight: "1px solid #EEF1EF" }}>{S(r?.label)}</div>
            </React.Fragment>)}
            <div onClick={V.flowToggleCustom} title="Pick a custom date range" style={{ flex: "0 0 auto", padding: "9px 12px", display: "flex", alignItems: "center", gap: "7px", fontSize: "14.5px", fontWeight: "700", cursor: "pointer", background: `${A(V.flowCustomBg)}`, color: `${A(V.flowCustomInk)}` }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px" }}><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" /></svg>
              {S(V.flowCustomLabel)}
            </div>
          </div>
          {V.flowCustomOpen && <>
            <div style={{ position: "absolute", top: "calc(100% + 8px)", right: "0", width: "300px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "14px", boxShadow: "0 22px 54px rgba(15,26,20,.18)", padding: "16px", zIndex: "50", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "15.5px", fontWeight: "700", color: "#0F1A14" }}>Custom Range</span>
              <div style={{ display: "flex", gap: "9px" }}>
                <label style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>
                  FROM
                  <input type="date" value={V.flowFrom ?? ""} onChange={V.onFlowFrom} style={{ border: "1.5px solid #D5DED8", borderRadius: "9px", padding: "8px", fontSize: "14.5px", color: "#0F1A14", fontFamily: "inherit", minWidth: "0" }} />
                </label>
                <label style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>
                  TO
                  <input type="date" value={V.flowTo ?? ""} onChange={V.onFlowTo} style={{ border: "1.5px solid #D5DED8", borderRadius: "9px", padding: "8px", fontSize: "14.5px", color: "#0F1A14", fontFamily: "inherit", minWidth: "0" }} />
                </label>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                <div onClick={V.flowCancelCustom} style={{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #E5E8E6", fontSize: "14.5px", fontWeight: "600", color: "#3F4B45", cursor: "pointer" }}>Cancel</div>
                <div onClick={V.flowApplyCustom} style={{ padding: "8px 14px", borderRadius: "8px", background: "#1AA34A", fontSize: "14.5px", fontWeight: "700", color: "#fff", cursor: "pointer" }}>Apply</div>
              </div>
            </div>
          </>}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "stretch" }}>
          <div style={{ flex: "1 1 380px", boxSizing: "border-box", minWidth: "300px", maxWidth: "100%", background: "#fff", border: "1px solid #E3EAE5", borderRadius: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.05)", padding: "20px 24px", display: "flex", flexDirection: "column", gap: "14px", animation: "wxChartIn .6s ease both" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <span style={{ width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "10px", background: "#DFF6F7", color: "#0EA5A5", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={V.flowIcon} /></svg></span>
              <span style={{ flex: "1", fontSize: "21.5px", fontWeight: "800", color: "#0F1A14", whiteSpace: "nowrap" }}>Current Flow Meter Reading</span>
            </div>
            <div style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "6px" }}>
              <div style={{ width: "100%", flex: "1", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ flex: "35 1 0" }} />
                <div style={{ position: "relative", width: "100%", maxWidth: "468px", aspectRatio: "1 / 1" }}>
                  <svg viewBox="0 0 200 200" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                    <circle cx="100" cy="100" r="99" fill="#5B6661" />
                    <circle cx="100" cy="100" r="95" fill="#8D9893" />
                    <circle cx="100" cy="100" r="92" fill="#FCFCFA" stroke="#2F3934" strokeWidth="1.5" />
                    <path d={V.flowDial?.track} fill="none" stroke="#E4E8E6" strokeWidth="3" />
                    <path d={V.flowDial?.prog} fill="none" stroke="#0EA5A5" strokeWidth="3" />
                    {L(V.flowDial?.ticks).map((tk, i96) => <React.Fragment key={i96}>
                      <line x1={tk?.x1} y1={tk?.y1} x2={tk?.x2} y2={tk?.y2} stroke={tk?.c} strokeWidth={tk?.w} strokeLinecap="round" />
                    </React.Fragment>)}
                    <g transform={V.flowDial?.needle} style={{ transition: "transform .8s cubic-bezier(.2,.8,.2,1)" }}><path d="M84 100 L100 98 L172 100 L100 102 Z" fill="#C62828" /></g>
                    <circle cx="100" cy="100" r="9" fill="#2F3934" />
                    <circle cx="100" cy="100" r="4" fill="#8D9893" />
                  </svg>
                  {L(V.flowDial?.labels).map((lb, i97) => <React.Fragment key={i97}>
                    <span style={{ position: "absolute", left: `${A(lb?.left)}`, top: `${A(lb?.top)}`, transform: "translate(-50%,-50%)", fontSize: "13px", fontWeight: "600", color: "#4C6354", fontVariantNumeric: "tabular-nums", pointerEvents: "none" }}>{S(lb?.text)}</span>
                  </React.Fragment>)}
                  <div style={{ position: "absolute", left: "0", right: "0", top: "70%", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", pointerEvents: "none" }}>
                    <span style={{ background: "#1F2723", border: "2px solid #5B6661", borderRadius: "6px", padding: "5px 10px", fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace", fontSize: "23px", lineHeight: "1", fontWeight: "700", letterSpacing: "1px", color: "#7FE3D8", fontVariantNumeric: "tabular-nums" }}>
                      {S(V.flowDial?.value)}
                      <span style={{ fontSize: "13px", marginLeft: "4px", color: "#B8C4BF" }}>L</span>
                    </span>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: "1.2px", color: "#6A746E" }}>LITRES / 15 MIN</span>
                  </div>
                </div>
                <span style={{ fontSize: "14px", color: "#6A746E", textAlign: "center" }}>15-minute reading · Last sampling 30 Sep 2026, 2:00 PM</span>
                <div style={{ flex: "65 1 0" }} />
                <span style={{ paddingTop: "22px", display: "flex", alignItems: "center", gap: "4px", fontSize: "16px", color: "#4C6354" }}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill={V.flowDial?.deltaColor} stroke="none"><path d={V.flowDial?.deltaPath} /></svg>
                  <b style={{ color: `${A(V.flowDial?.deltaColor)}` }}>{S(V.flowDial?.delta)}</b>
                   vs previous reading
            
                </span>
              </div>
            </div>
          </div>
          <div style={{ flex: "999 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: "12px" }}>
              {L(V.flowHiLo).map((s, i98) => <React.Fragment key={i98}>
                <div style={{ boxSizing: "border-box", background: "#fff", border: "1px solid #E3EAE5", borderRadius: "16px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.05)", padding: "12px 14px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "4px", minWidth: "0" }}>
                  <span style={{ fontSize: "14.5px", fontWeight: "700", color: "#0E7C7C", lineHeight: "1.3" }}>{S(s?.label)}</span>
                  <span style={{ fontSize: "26.5px", lineHeight: "1.15", fontWeight: "800", whiteSpace: "nowrap", color: "#0F1A14", fontVariantNumeric: "tabular-nums" }}>
                    {S(s?.value)}
                    <span style={{ fontSize: "15.5px", fontWeight: "600", color: "#4C6354" }}>{" "}{S(s?.unit)}</span>
                  </span>
                  <span style={{ fontSize: "13px", color: "#6A746E", lineHeight: "1.4", fontVariantNumeric: "tabular-nums" }}>{S(s?.note)}</span>
                </div>
              </React.Fragment>)}
            </div>
            {L(V.flowMain).map((p, i99) => <React.Fragment key={i99}>
              <div style={{ background: "#FFFFFF", border: "1px solid #CFE5C8", borderRadius: "18px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 6px 18px rgba(16,24,40,.05)", padding: "22px 24px 16px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0", animation: "wxChartIn .6s ease both" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <div style={{ fontSize: "21.5px", fontWeight: "800", color: "#0F1A14", flex: "1", minWidth: "150px" }}>{S(p?.title)}</div>
                  {p?.toggle && <>
                    <div style={{ display: "flex", background: "#F1F4F2", borderRadius: "8px", padding: "3px", gap: "2px" }}>
                      {L(p?.toggle).map((tg, i100) => <React.Fragment key={i100}>
                        <span onClick={tg?.go} style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 11px", borderRadius: "6px", fontSize: "14px", fontWeight: "700", cursor: "pointer", background: `${A(tg?.bg)}`, color: `${A(tg?.ink)}`, boxShadow: `${A(tg?.sh)}` }}>
                          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={tg?.icon} /></svg>
                          {S(tg?.label)}
                        </span>
                      </React.Fragment>)}
                    </div>
                  </>}
                  {p?.toggle2 && <>
                    <div style={{ display: "flex", background: "#F1F4F2", borderRadius: "8px", padding: "3px", gap: "2px" }}>
                      {L(p?.toggle2).map((tg, i101) => <React.Fragment key={i101}>
                        <span onClick={tg?.go} style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 11px", borderRadius: "6px", fontSize: "14px", fontWeight: "700", cursor: "pointer", background: `${A(tg?.bg)}`, color: `${A(tg?.ink)}`, boxShadow: `${A(tg?.sh)}` }}>{S(tg?.label)}</span>
                      </React.Fragment>)}
                    </div>
                  </>}
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
                <div style={{ minWidth: "0", display: "grid", gridTemplateColumns: "48px minmax(0,1fr)", gap: "6px", alignContent: "start" }}>
                  <div style={{ position: "relative", height: "220px" }}>
                    {L(p?.ticks).map((tk, i102) => <React.Fragment key={i102}>
                      <span style={{ position: "absolute", right: "0", top: `${A(tk?.top)}`, transform: "translateY(-50%)", fontSize: "12.5px", color: "#6A746E", fontVariantNumeric: "tabular-nums" }}>{S(tk?.label)}</span>
                    </React.Fragment>)}
                  </div>
                  <div ref={V.zoomRef} data-zkey={p?.zkey} onMouseMove={p?.onMove} onMouseLeave={p?.onLeave} style={{ position: "relative", height: "220px", cursor: "crosshair" }}>
                    {L(p?.grid).map((g, i103) => <React.Fragment key={i103}>
                      <div style={{ position: "absolute", left: "0", right: "0", top: `${A(g)}`, borderTop: "1px dashed #E3E9E5" }} />
                    </React.Fragment>)}
                    <svg viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                      <defs>
                        <linearGradient id={`fl-${A(p?.id)}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor={p?.color} stopOpacity=".28" />
                          <stop offset="1" stopColor={p?.color} stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {L(p?.bars).map((br, i104) => <React.Fragment key={i104}>
                        <rect x={br?.x} y={br?.y} width={br?.w} height={br?.h} rx="2" fill={p?.color} fillOpacity={br?.op} style={{ transformOrigin: "0 190px", animation: "wxGrowBar .7s ease-out both" }} />
                      </React.Fragment>)}
                      {p?.isLine && <>
                        <path d={p?.area} fill={`url(#fl-${A(p?.id)})`} stroke="none" />
                        <path d={p?.line} fill="none" stroke={p?.color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                      </>}
                    </svg>
                    {p?.isLine && <>
                      <span style={{ position: "absolute", left: "100%", top: `${A(p?.endTop)}`, width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", borderRadius: "50%", background: `${A(p?.color)}`, boxShadow: `0 0 0 4px ${A(p?.tint)}`, pointerEvents: "none" }} />
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
                  <div style={{ position: "relative", height: "30px" }}>
                    {L(p?.xLabels).map((xl, i105) => <React.Fragment key={i105}>
                      <span style={{ position: "absolute", left: `${A(xl?.left)}`, top: "4px", transform: `translateX(${A(xl?.shift)})`, display: "flex", flexDirection: "column", alignItems: "center", fontSize: "12.5px", lineHeight: "1.25", color: "#6A746E", whiteSpace: "nowrap" }}>
                        <span style={{ fontWeight: "600", color: "#3F4B45" }}>{S(xl?.time)}</span>
                        <span>{S(xl?.date)}</span>
                      </span>
                    </React.Fragment>)}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", borderTop: "1px solid #D8E7D4", paddingTop: "12px", fontSize: "14px", color: "#4A524D" }}>
                  {L(p?.stats).map((s, i106) => <React.Fragment key={i106}>
                    <span style={{ whiteSpace: "nowrap" }}>
                      {S(s?.label)}{" "}
                      <strong style={{ color: "#0F1A14" }}>{S(s?.value)}</strong>
                      <span style={{ color: "#46604F" }}>{" "}{S(s?.when)}</span>
                    </span>
                  </React.Fragment>)}
                </div>
              </div>
            </React.Fragment>)}
            {L(V.flowCum).map((p, i107) => <React.Fragment key={i107}>
              <div style={{ background: "#FFFFFF", border: "1px solid #CFE5C8", borderRadius: "18px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 6px 18px rgba(16,24,40,.05)", padding: "22px 24px 16px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0", animation: "wxChartIn .6s ease both" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <div style={{ fontSize: "21.5px", fontWeight: "800", color: "#0F1A14", flex: "1", minWidth: "150px" }}>{S(p?.title)}</div>
                  {p?.toggle && <>
                    <div style={{ display: "flex", background: "#F1F4F2", borderRadius: "8px", padding: "3px", gap: "2px" }}>
                      {L(p?.toggle).map((tg, i108) => <React.Fragment key={i108}>
                        <span onClick={tg?.go} style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 11px", borderRadius: "6px", fontSize: "14px", fontWeight: "700", cursor: "pointer", background: `${A(tg?.bg)}`, color: `${A(tg?.ink)}`, boxShadow: `${A(tg?.sh)}` }}>
                          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={tg?.icon} /></svg>
                          {S(tg?.label)}
                        </span>
                      </React.Fragment>)}
                    </div>
                  </>}
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
                <div style={{ minWidth: "0", display: "grid", gridTemplateColumns: "48px minmax(0,1fr)", gap: "6px", alignContent: "start" }}>
                  <div style={{ position: "relative", height: "220px" }}>
                    {L(p?.ticks).map((tk, i109) => <React.Fragment key={i109}>
                      <span style={{ position: "absolute", right: "0", top: `${A(tk?.top)}`, transform: "translateY(-50%)", fontSize: "12.5px", color: "#6A746E", fontVariantNumeric: "tabular-nums" }}>{S(tk?.label)}</span>
                    </React.Fragment>)}
                  </div>
                  <div ref={V.zoomRef} data-zkey={p?.zkey} onMouseMove={p?.onMove} onMouseLeave={p?.onLeave} style={{ position: "relative", height: "220px", cursor: "crosshair" }}>
                    {L(p?.grid).map((g, i110) => <React.Fragment key={i110}>
                      <div style={{ position: "absolute", left: "0", right: "0", top: `${A(g)}`, borderTop: "1px dashed #E3E9E5" }} />
                    </React.Fragment>)}
                    <svg viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                      <defs>
                        <linearGradient id={`fl-${A(p?.id)}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor={p?.color} stopOpacity=".28" />
                          <stop offset="1" stopColor={p?.color} stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {L(p?.bars).map((br, i111) => <React.Fragment key={i111}>
                        <rect x={br?.x} y={br?.y} width={br?.w} height={br?.h} rx="2" fill={p?.color} fillOpacity={br?.op} style={{ transformOrigin: "0 190px", animation: "wxGrowBar .7s ease-out both" }} />
                      </React.Fragment>)}
                      {p?.isLine && <>
                        <path d={p?.area} fill={`url(#fl-${A(p?.id)})`} stroke="none" />
                        <path d={p?.line} fill="none" stroke={p?.color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                      </>}
                    </svg>
                    {p?.isLine && <>
                      <span style={{ position: "absolute", left: "100%", top: `${A(p?.endTop)}`, width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", borderRadius: "50%", background: `${A(p?.color)}`, boxShadow: `0 0 0 4px ${A(p?.tint)}`, pointerEvents: "none" }} />
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
                  <div style={{ position: "relative", height: "30px" }}>
                    {L(p?.xLabels).map((xl, i112) => <React.Fragment key={i112}>
                      <span style={{ position: "absolute", left: `${A(xl?.left)}`, top: "4px", transform: `translateX(${A(xl?.shift)})`, display: "flex", flexDirection: "column", alignItems: "center", fontSize: "12.5px", lineHeight: "1.25", color: "#6A746E", whiteSpace: "nowrap" }}>
                        <span style={{ fontWeight: "600", color: "#3F4B45" }}>{S(xl?.time)}</span>
                        <span>{S(xl?.date)}</span>
                      </span>
                    </React.Fragment>)}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", borderTop: "1px solid #D8E7D4", paddingTop: "12px", fontSize: "14px", color: "#4A524D" }}>
                  {L(p?.stats).map((s, i113) => <React.Fragment key={i113}>
                    <span style={{ whiteSpace: "nowrap" }}>
                      {S(s?.label)}{" "}
                      <strong style={{ color: "#0F1A14" }}>{S(s?.value)}</strong>
                      <span style={{ color: "#46604F" }}>{" "}{S(s?.when)}</span>
                    </span>
                  </React.Fragment>)}
                </div>
              </div>
            </React.Fragment>)}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
