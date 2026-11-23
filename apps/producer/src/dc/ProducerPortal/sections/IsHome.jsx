import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';

export default function IsHome({ V }) {
  return (
    <>
    <div style={{ display: "grid", gridTemplateColumns: "minmax(330px,3.2fr) minmax(0,6.8fr)", gap: "14px", flex: "1 1 auto", minHeight: "420px" }}>
      <div className="ns" style={{ display: "flex", flexDirection: "column", gap: "12px", minHeight: "0", overflowY: "auto" }}>
        {V.wid?.forecast && <>
          <div draggable="true" onDragStart={V.wg?.forecast?.ds} onDragEnd={V.wg?.end} onDragOver={V.wg?.over} onDrop={V.wg?.forecast?.drop} title="Drag to reorder" style={{ order: `${A(V.wg?.forecast?.order)}`, opacity: `${A(V.wg?.forecast?.op)}`, cursor: "grab", transition: "opacity .15s,box-shadow .15s", flex: "0 0 auto", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <button className="scpd scp6" onClick={V.goForecast} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", borderRadius: "14px", background: "linear-gradient(135deg,#3B78C4 0%,#5B97D8 55%,#8AB8E8 100%)", color: "#fff", padding: "14px 16px 10px", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "0 8px 20px rgba(37,99,235,.25)", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", flexShrink: "0" }}>
                  <span data-tip="Current temperature" style={{ fontSize: "44px", fontWeight: "700", lineHeight: "1", letterSpacing: "-.02em" }}>{S(V.hwx?.t)}</span>
                  <span style={{ fontSize: "12px", fontWeight: "600", marginTop: "4px", display: "flex", gap: "4px" }}>
                    <span data-tip="Today's high">{"↑ "}{S(V.hwx?.hi)}</span>
                    ·
                    <span data-tip="Today's low">{"↓ "}{S(V.hwx?.lo)}</span>
                  </span>
                  <span data-tip="Current conditions" style={{ fontSize: "15px" }}>{S(V.hwx?.cond)}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px", minWidth: "0", flex: "1 1 0", textAlign: "right" }}>
                  <span data-tip="The next hour the model forecasts" style={{ fontSize: "12px", fontWeight: "700" }}>{S(V.hwx?.time)}</span>
                  <span data-tip="Forecast location" style={{ fontSize: "12px", fontWeight: "500", opacity: ".95", maxWidth: "100%", lineHeight: "1.3", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.hwx?.loc)}</span>
                  <span style={{ marginTop: "4px" }}>
                    {V.hwx?.ic?.sun && <>
                      <svg width="54" height="54" viewBox="0 0 24 24">
                        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" style={{ stroke: "#F59E0B", strokeWidth: "1.8", strokeLinecap: "round" }} />
                        <circle cx="12" cy="12" r="5" style={{ fill: "#FCD34D" }} />
                      </svg>
                    </>}
                    {V.hwx?.ic?.pc && <>
                      <svg width="54" height="54" viewBox="0 0 24 24">
                        <path d="M10 2.5v1.6M4.4 4.9l1.1 1.1M15.6 4.9l-1.1 1.1M2.8 10h1.6" style={{ stroke: "#F59E0B", strokeWidth: "1.6", strokeLinecap: "round" }} />
                        <circle cx="10" cy="10" r="4.6" style={{ fill: "#FCD34D" }} />
                        <path d="M10.5 20.5h8.2a3.2 3.2 0 0 0 .4-6.4 4.6 4.6 0 0 0-8.9 1A2.7 2.7 0 0 0 10.5 20.5z" style={{ fill: "#E2E8F0", stroke: "#CBD5E1", strokeWidth: "1" }} />
                      </svg>
                    </>}
                    {V.hwx?.ic?.rain && <>
                      <svg width="54" height="54" viewBox="0 0 24 24">
                        <path d="M7 15.5h10.5a3.8 3.8 0 0 0 .4-7.6 5.6 5.6 0 0 0-10.8 1.3A3.2 3.2 0 0 0 7 15.5z" style={{ fill: "#93C5FD", stroke: "#60A5FA", strokeWidth: "1" }} />
                        <path d="M8.5 18l-.8 2.5M12 18l-.8 2.5M15.5 18l-.8 2.5" style={{ stroke: "#2563EB", strokeWidth: "1.6", strokeLinecap: "round" }} />
                      </svg>
                    </>}
                  </span>
                </div>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,.45)", paddingTop: "8px", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", fontSize: "12.5px", fontWeight: "700", width: "100%", textAlign: "center", whiteSpace: "nowrap" }}>
                <span data-tip="Atmospheric pressure">{S(V.hwx?.pres)}</span>
                <span data-tip="Chance of rain">{S(V.hwx?.pop)}</span>
                <span data-tip="Wind speed">{S(V.hwx?.wind)}</span>
              </div>
            </button>
            <div style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", padding: "0 4px" }}>7-Day Forecast</div>
            <div style={{ display: "flex", flexDirection: "column", padding: "0 4px" }}>
              {L(V.hwx?.days).map((d, i5) => <React.Fragment key={i5}>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 52px 30px 78px", alignItems: "center", gap: "6px", padding: "5px 0", borderTop: "1px solid #F1F5F9", fontSize: "13px", color: "#1F2937" }}>
                  <span>{S(d?.n)}</span>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#3B82F6", textAlign: "right" }}>{S(d?.pop)}</span>
                  <span style={{ display: "flex", justifyContent: "center" }}>
                    {d?.ic?.sun && <>
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" style={{ stroke: "#F59E0B", strokeWidth: "1.8", strokeLinecap: "round" }} />
                        <circle cx="12" cy="12" r="5" style={{ fill: "#FCD34D" }} />
                      </svg>
                    </>}
                    {d?.ic?.pc && <>
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10 2.5v1.6M4.4 4.9l1.1 1.1M15.6 4.9l-1.1 1.1M2.8 10h1.6" style={{ stroke: "#F59E0B", strokeWidth: "1.6", strokeLinecap: "round" }} />
                        <circle cx="10" cy="10" r="4.6" style={{ fill: "#FCD34D" }} />
                        <path d="M10.5 20.5h8.2a3.2 3.2 0 0 0 .4-6.4 4.6 4.6 0 0 0-8.9 1A2.7 2.7 0 0 0 10.5 20.5z" style={{ fill: "#E2E8F0", stroke: "#CBD5E1", strokeWidth: "1" }} />
                      </svg>
                    </>}
                    {d?.ic?.rain && <>
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M7 15.5h10.5a3.8 3.8 0 0 0 .4-7.6 5.6 5.6 0 0 0-10.8 1.3A3.2 3.2 0 0 0 7 15.5z" style={{ fill: "#93C5FD", stroke: "#60A5FA", strokeWidth: "1" }} />
                        <path d="M8.5 18l-.8 2.5M12 18l-.8 2.5M15.5 18l-.8 2.5" style={{ stroke: "#2563EB", strokeWidth: "1.6", strokeLinecap: "round" }} />
                      </svg>
                    </>}
                  </span>
                  <span style={{ textAlign: "right" }}>
                    <b style={{ fontWeight: "700" }}>{S(d?.hi)}</b>
                    {" "}
                    <span style={{ color: "#64748B" }}>{"/ "}{S(d?.lo)}</span>
                  </span>
                </div>
              </React.Fragment>)}
            </div>
          </div>
        </>}
        {V.wid?.devices && <>
          <div draggable="true" onDragStart={V.wg?.devices?.ds} onDragEnd={V.wg?.end} onDragOver={V.wg?.over} onDrop={V.wg?.devices?.drop} title="Drag to reorder" style={{ order: `${A(V.wg?.devices?.order)}`, opacity: `${A(V.wg?.devices?.op)}`, cursor: "grab", transition: "opacity .15s,box-shadow .15s", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "10px 14px", display: "flex", flexDirection: "column", gap: "12px", flexShrink: "0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
              <button onClick={V.dw?.collapse} title="Show or hide" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "2px 0", cursor: "pointer", display: "flex", alignItems: "center", gap: "9px", fontWeight: "600", fontSize: "14px", color: "#0F172A", flex: "1", textAlign: "left" }}>
                <span style={{ width: "28px", height: "28px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: "#ECFEFF", color: "#043C2C" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <circle cx="12" cy="12" r="2" />
                    <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" />
                  </svg>
                </span>
                Devices
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", transform: `${A(V.dw?.rot)}`, transition: "transform .15s" }}><path d="m6 9 6 6 6-6" /></svg>
              </button>
              <button className="scpe" onClick={V.goDevices} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", color: "#043C2C", fontSize: "12.5px", fontWeight: "500" }}>View all →</button>
            </div>
            {V.dw?.expanded && <>
              <div style={{ position: "relative", marginTop: "2px" }}>
                <span style={{ position: "absolute", top: "-6px", left: "9px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2", zIndex: "1" }}>Select device</span>
                <button className="scpf scp6" onClick={V.dw?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", width: "100%", height: "38px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", display: "flex", alignItems: "center", gap: "8px", padding: "0 10px", color: "#0F172A", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                  <span style={{ flex: "1", minWidth: "0", textAlign: "left", fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.dw?.cur?.label)}</span>
                  {V.dw?.cur?.wx && <>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", height: "20px", padding: "0 7px 0 5px", borderRadius: "999px", border: "1px solid #99F6E4", background: "#F0FDFA", color: "#0F766E", fontSize: "10.5px", fontWeight: "600", whiteSpace: "nowrap", flexShrink: "0" }}>
                      <svg width="13" height="13" viewBox="0 0 48 48" fill="none" stroke="#0f9488" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: "0" }}>
                        <path d="M14 40h20a7 7 0 0 0 .6-14A10 10 0 0 0 15.5 27 6.6 6.6 0 0 0 14 40z" />
                        <path d="M14.6 25.5a9.5 9.5 0 0 1 18.4-3.2" />
                        <path d="M24 4l2.5 4.5h-5z" fill="#0f9488" strokeWidth="1.5" />
                        <path d="M9.5 10l4.6 2.4-3.2 3.2z" fill="#0f9488" strokeWidth="1.5" />
                        <path d="M38.5 10l-2.4 4.6-3.2-3.2z" fill="#0f9488" strokeWidth="1.5" />
                        <path d="M4 22l4.5-2.5v5z" fill="#0f9488" strokeWidth="1.5" />
                      </svg>
                      Weather Station
                    </span>
                  </>}
                  {V.dw?.cur?.soil && <>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", height: "20px", padding: "0 7px 0 5px", borderRadius: "999px", border: "1px solid #E7CDBE", background: "#FBF5F1", color: "#7A4A35", fontSize: "10.5px", fontWeight: "600", whiteSpace: "nowrap", flexShrink: "0" }}>
                      <svg width="13" height="13" viewBox="0 0 48 48" style={{ flexShrink: "0" }}>
                        <path d="M22 4h4v22l-2 5-2-5z" fill="#7a4a35" />
                        <path d="M22 10h3M22 14h3M22 18h3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
                        <path d="M4 44c2-9 9-13 15-13 2 0 3 1 5 3 2-2 3-3 5-3 7 0 13 5 15 13z" fill="#7a4a35" />
                        <circle cx="14" cy="39" r="2" fill="none" stroke="#fff" strokeWidth="1.3" />
                        <circle cx="32" cy="38" r="2" fill="none" stroke="#fff" strokeWidth="1.3" />
                        <circle cx="23" cy="41" r="1.4" fill="#fff" />
                        <circle cx="38" cy="42" r="1.1" fill="#fff" />
                      </svg>
                      Soil Probe
                    </span>
                  </>}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
                </button>
                {V.dw?.open && <>
                  <div onClick={V.dw?.toggle} style={{ position: "fixed", inset: "0", zIndex: "25" }} />
                  <div style={{ position: "absolute", left: "0", right: "0", top: "42px", zIndex: "26", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", boxShadow: "0 16px 40px rgba(10,59,43,.16)", padding: "5px", display: "flex", flexDirection: "column", gap: "2px" }}>
                    {L(V.dw?.opts).map((o, i6) => <React.Fragment key={i6}>
                      <button className="scp2 scp6" onClick={o?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", padding: "8px 9px", borderRadius: "7px", background: `${A(o?.bg)}`, color: "#0F172A", textAlign: "left", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "1px" }}>
                          <span style={{ fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(o?.label)}</span>
                          <span style={{ fontSize: "11px", color: "#64748B" }}>{S(o?.sub)}</span>
                        </span>
                        {o?.wx && <>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", height: "20px", padding: "0 7px 0 5px", borderRadius: "999px", border: "1px solid #99F6E4", background: "#F0FDFA", color: "#0F766E", fontSize: "10.5px", fontWeight: "600", whiteSpace: "nowrap", flexShrink: "0" }}>
                            <svg width="13" height="13" viewBox="0 0 48 48" fill="none" stroke="#0f9488" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: "0" }}>
                              <path d="M14 40h20a7 7 0 0 0 .6-14A10 10 0 0 0 15.5 27 6.6 6.6 0 0 0 14 40z" />
                              <path d="M14.6 25.5a9.5 9.5 0 0 1 18.4-3.2" />
                              <path d="M24 4l2.5 4.5h-5z" fill="#0f9488" strokeWidth="1.5" />
                              <path d="M9.5 10l4.6 2.4-3.2 3.2z" fill="#0f9488" strokeWidth="1.5" />
                              <path d="M38.5 10l-2.4 4.6-3.2-3.2z" fill="#0f9488" strokeWidth="1.5" />
                              <path d="M4 22l4.5-2.5v5z" fill="#0f9488" strokeWidth="1.5" />
                            </svg>
                            Weather Station
                          </span>
                        </>}
                        {o?.soil && <>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", height: "20px", padding: "0 7px 0 5px", borderRadius: "999px", border: "1px solid #E7CDBE", background: "#FBF5F1", color: "#7A4A35", fontSize: "10.5px", fontWeight: "600", whiteSpace: "nowrap", flexShrink: "0" }}>
                            <svg width="13" height="13" viewBox="0 0 48 48" style={{ flexShrink: "0" }}>
                              <path d="M22 4h4v22l-2 5-2-5z" fill="#7a4a35" />
                              <path d="M22 10h3M22 14h3M22 18h3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
                              <path d="M4 44c2-9 9-13 15-13 2 0 3 1 5 3 2-2 3-3 5-3 7 0 13 5 15 13z" fill="#7a4a35" />
                              <circle cx="14" cy="39" r="2" fill="none" stroke="#fff" strokeWidth="1.3" />
                              <circle cx="32" cy="38" r="2" fill="none" stroke="#fff" strokeWidth="1.3" />
                              <circle cx="23" cy="41" r="1.4" fill="#fff" />
                              <circle cx="38" cy="42" r="1.1" fill="#fff" />
                            </svg>
                            Soil Probe
                          </span>
                        </>}
                      </button>
                    </React.Fragment>)}
                  </div>
                </>}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "22px", padding: "0 9px", borderRadius: "999px", border: `1px solid ${A(V.dw?.bbd)}`, background: `${A(V.dw?.bbg)}`, color: `${A(V.dw?.bfg)}`, fontSize: "11px", fontWeight: "700", letterSpacing: ".04em" }}>{S(V.dw?.badge)}</span>
                <span style={{ flex: "1", minWidth: "0", fontSize: "12px", color: "#475569", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.dw?.upd)}</span>
                {V.dw?.soil && <>
                  <label style={{ position: "relative", display: "block", flexShrink: "0", width: "92px" }}>
                    <span style={{ position: "absolute", top: "-6px", left: "7px", padding: "0 3px", background: "#fff", fontSize: "9.5px", fontWeight: "500", color: "#64748B", lineHeight: "1.2" }}>Depth</span>
                    <select className="scpg" value={V.dw?.depth ?? ""} onChange={V.dw?.setDepth} style={{ width: "100%", height: "32px", border: "1px solid #CBD5E1", borderRadius: "7px", outline: "0", background: "#fff", font: "inherit", fontSize: "12px", fontWeight: "500", color: "#0F172A", cursor: "pointer", padding: "0 6px" }}>
                      {L(V.dw?.depthOpts).map((o, i7) => <React.Fragment key={i7}>
                        <option value={o?.v ?? ""}>{S(o?.label)}</option>
                      </React.Fragment>)}
                    </select>
                  </label>
                </>}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "8px" }}>
                {L(V.dw?.tiles3).map((tl, i8) => <React.Fragment key={i8}>
                  <div style={{ background: "#F3F5F4", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: "600", color: "#334155", whiteSpace: "nowrap", minWidth: "0", overflow: "hidden" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={tl?.c} style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={tl?.d} /></svg>
                      {S(tl?.l)}
                    </span>
                    <span style={{ display: "flex", alignItems: "baseline", gap: "3px", whiteSpace: "nowrap" }}>
                      <span style={{ fontSize: "19px", fontWeight: "700", color: "#0F172A" }}>{S(tl?.v)}</span>
                      <span style={{ fontSize: "11px", color: "#64748B" }}>{S(tl?.u)}</span>
                    </span>
                  </div>
                </React.Fragment>)}
              </div>
            </>}
          </div>
        </>}
        {V.wid?.season && <>
          <button className="scph scp6" onClick={V.goSeason} draggable="true" onDragStart={V.wg?.season?.ds} onDragEnd={V.wg?.end} onDragOver={V.wg?.over} onDrop={V.wg?.season?.drop} title="Drag to reorder" style={{ order: `${A(V.wg?.season?.order)}`, opacity: `${A(V.wg?.season?.op)}`, cursor: "grab", transition: "opacity .15s,box-shadow .15s", appearance: "none", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", color: "inherit", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "16px", display: "flex", flexDirection: "column", gap: "10px", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "9px", fontWeight: "600", fontSize: "14px" }}>
                <span style={{ width: "28px", height: "28px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: "#F0FDF4", color: "#15803D" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" /></svg></span>
                Season rainfall
              </span>
              <span style={{ color: "#043C2C", fontSize: "12.5px", fontWeight: "500" }}>Season →</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
              <span style={{ fontSize: "26px", fontWeight: "600", letterSpacing: "-.02em" }}>{S(V.seasonSum?.v)}</span>
              <span style={{ fontSize: "12.5px", color: "#15803d", fontWeight: "500" }}>{S(V.seasonSum?.d)}</span>
            </div>
            <div style={{ width: "100%", height: "8px", borderRadius: "99px", background: "#E2E8F0", position: "relative", overflow: "hidden" }}><div style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: `${A(V.seasonSum?.w)}`, background: "#0EA5A4", borderRadius: "99px" }} /></div>
            <span style={{ fontSize: "12px", color: "#64748b" }}>{"Dec 2025 – Dec 2026 · long-term average "}{S(V.seasonSum?.avg)}</span>
          </button>
        </>}
        {V.wid?.alerts && <>
          <div draggable="true" onDragStart={V.wg?.alerts?.ds} onDragEnd={V.wg?.end} onDragOver={V.wg?.over} onDrop={V.wg?.alerts?.drop} title="Drag to reorder" style={{ order: `${A(V.wg?.alerts?.order)}`, opacity: `${A(V.wg?.alerts?.op)}`, cursor: "grab", transition: "opacity .15s,box-shadow .15s", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "9px", fontWeight: "600", fontSize: "14px", color: "#C2410C" }}>
                <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#FFF7ED", color: "#C2410C", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0" /></svg></span>
                Active alerts
              </span>
              <button onClick={V.goAlerts} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", color: "#043C2C", fontSize: "12.5px", fontWeight: "500" }}>View all</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {L(V.alertW).map((a, i9) => <React.Fragment key={i9}>
                <button className="scp9" onClick={V.goAlerts} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "8px 6px", borderRadius: "10px", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", textAlign: "left" }}>
                  <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "13.5px", fontWeight: "600", color: "#0F172A" }}>{S(a?.t)}</span>
                    <span style={{ fontSize: "12px", color: "#64748B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(a?.dev)}{" · "}{S(a?.time)}</span>
                  </span>
                  <span style={{ fontSize: "11px", fontWeight: "600", padding: "2px 9px", borderRadius: "999px", background: `${A(a?.sbg)}`, color: `${A(a?.sfg)}`, flexShrink: "0" }}>{S(a?.sev)}</span>
                </button>
              </React.Fragment>)}
            </div>
          </div>
        </>}
        <div style={{ order: "99", display: "flex", flexDirection: "column", gap: "6px", position: "sticky", bottom: "0", zIndex: "3", background: "#F4F6F9", boxShadow: "0 -8px 10px #F4F6F9", marginTop: "auto" }}>
          <button className="scpi scp6" onClick={V.toggleCust} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", borderRadius: "12px", border: "1.5px dashed #CBD5E1", background: "transparent", color: "#043C2C", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", flexShrink: "0", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round" }}><path d="M12 5v14M5 12h14" /></svg>
            Add widget
          </button>
          {V.custOpen && <>
            <div onClick={V.toggleCust} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.4)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", zIndex: "60" }}>
              <div onClick={V.stop} style={{ background: "#fff", borderRadius: "20px", width: "100%", maxWidth: "520px", boxShadow: "0 30px 80px rgba(15,23,42,.3)", overflow: "hidden" }}>
                <div style={{ padding: "22px 24px 8px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                  <div>
                    <div style={{ fontWeight: "600", fontSize: "18px", letterSpacing: "-.015em", color: "#0F172A" }}>Widget library</div>
                    <div style={{ fontSize: "13px", color: "#64748B", marginTop: "4px" }}>Choose what appears on your home page.</div>
                  </div>
                  <button className="scpj" onClick={V.toggleCust} title="Close" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#64748B", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .15s" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
                </div>
                <div style={{ padding: "14px 24px 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {L(V.widgetOpts).map((w, i10) => <React.Fragment key={i10}>
                    <button className="scpk" onClick={w?.toggle} style={{ appearance: "none", border: "0", font: "inherit", color: "#0F172A", margin: "0", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", borderRadius: "12px", background: `${A(w?.rbg)}`, boxShadow: `0 0 0 ${A(w?.ringW)} ${A(w?.ring)}`, transition: "box-shadow .15s,background .15s" }}>
                      <span style={{ width: "32px", height: "32px", borderRadius: "10px", flexShrink: "0", background: `${A(w?.ibg)}`, color: `${A(w?.ifg)}`, display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={w?.d} /></svg></span>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <span style={{ display: "block", fontWeight: "600", fontSize: "14px" }}>{S(w?.label)}</span>
                        <span style={{ display: "block", fontSize: "12px", color: "#64748B", marginTop: "3px", lineHeight: "1.4" }}>{S(w?.desc)}</span>
                      </span>
                      <span style={{ flexShrink: "0", fontSize: "12px", fontWeight: "600", padding: "3px 9px", borderRadius: "999px", background: `${A(w?.pbg)}`, color: `${A(w?.pfg)}` }}>{S(w?.action)}</span>
                    </button>
                  </React.Fragment>)}
                </div>
              </div>
            </div>
          </>}
        </div>
      </div>
      <div data-hm="1" style={{ minWidth: "0", minHeight: "0", position: "relative", borderRadius: "18px", overflow: "hidden", background: "#0b1220", boxShadow: "0 0 0 1px rgba(15,23,42,.08),0 12px 36px rgba(15,23,42,.12)" }}>
        <div ref={V.homeRef} style={{ position: "absolute", inset: "0" }} />
        <div style={{ position: "absolute", top: "12px", left: "12px", width: "min(240px,calc(100% - 172px))", minWidth: "110px", zIndex: "7" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 11px", borderRadius: "10px", background: "rgba(15,23,42,.34)", backdropFilter: "blur(14px) saturate(160%)", WebkitBackdropFilter: "blur(14px) saturate(160%)", border: "1px solid rgba(255,255,255,.22)", boxShadow: "0 8px 24px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.18)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round" }}>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input data-glass="1" value={V.hQuery ?? ""} onChange={V.hSetQuery} onKeyDown={V.hKey} placeholder="Search farms" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13px", background: "transparent", color: "#fff" }} />
          </div>
          {V.hShowResults && <>
            <div style={{ marginTop: "6px", borderRadius: "12px", background: "rgba(15,23,42,.34)", backdropFilter: "blur(14px) saturate(160%)", WebkitBackdropFilter: "blur(14px) saturate(160%)", border: "1px solid rgba(255,255,255,.22)", boxShadow: "0 8px 24px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.18)", padding: "6px", display: "flex", flexDirection: "column" }}>
              {L(V.hResults).map((f, i11) => <React.Fragment key={i11}>
                <button className="scpl" onClick={f?.fly} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "#fff", margin: "0", padding: "8px 10px", borderRadius: "8px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", gap: "10px" }}>
                  <span style={{ fontWeight: "500", fontSize: "13px" }}>{S(f?.name)}</span>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,.65)" }}>{S(f?.zone)}</span>
                </button>
              </React.Fragment>)}
              {V.hNoResults && <>
                <span style={{ padding: "8px 10px", fontSize: "12.5px", color: "rgba(255,255,255,.75)" }}>No farms found</span>
              </>}
            </div>
          </>}
        </div>
        {V.hPop?.show && <>
          <div onMouseEnter={V.hPopEnter} onMouseLeave={V.hPopLeave} style={{ position: "absolute", left: `${A(V.hPop?.left)}`, top: `${A(V.hPop?.top)}`, transform: `${A(V.hPop?.tf)}`, zIndex: "30", background: "rgba(255,255,255,.97)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRadius: "10px", padding: "8px 12px", boxShadow: "0 0 0 1px rgba(15,23,42,.06),0 12px 30px rgba(15,23,42,.28)", fontWeight: "600", fontSize: "13.5px", color: "#0F172A", whiteSpace: "nowrap", pointerEvents: "none", display: "flex", flexDirection: "column", gap: "2px", textAlign: "center" }}>
            <span>{S(V.hPop?.name)}</span>
            <span style={{ fontSize: "12px", fontWeight: "500", color: "#64748B" }}>{S(V.hPop?.loc)}</span>
          </div>
        </>}
        {V.hPanelClosed && <>
          <button className="scpm scp6" onClick={V.hTogglePanel} title="Map layers and basemap" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", position: "absolute", right: "12px", top: "12px", zIndex: "8", height: "34px", padding: "0 12px 0 10px", borderRadius: "10px", background: "rgba(15,23,42,.34)", backdropFilter: "blur(14px) saturate(160%)", WebkitBackdropFilter: "blur(14px) saturate(160%)", border: "1px solid rgba(255,255,255,.22)", boxShadow: "0 8px 24px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.18)", color: "#fff", fontSize: "12px", fontWeight: "500", letterSpacing: ".02em", display: "flex", alignItems: "center", gap: "8px", textShadow: "0 1px 2px rgba(0,0,0,.35)", transition: "background .15s,padding .15s,transform .1s" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}>
              <path d="m12 3 9 5-9 5-9-5z" />
              <path d="m3 13 9 5 9-5" />
            </svg>
            View Maps
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", opacity: ".85" }}><path d="m6 9 6 6 6-6" /></svg>
          </button>
        </>}
        {V.hPanelOpen && <>
          <div style={{ position: "absolute", right: "10px", top: "56px", bottom: "10px", width: "216px", maxWidth: "calc(100% - 20px)", zIndex: "8", borderRadius: "16px", background: "rgba(15,23,42,.34)", backdropFilter: "blur(14px) saturate(160%)", WebkitBackdropFilter: "blur(14px) saturate(160%)", border: "1px solid rgba(255,255,255,.22)", boxShadow: "0 8px 24px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.18)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 8px 4px 12px" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "#fff", whiteSpace: "nowrap" }}>Map view</span>
              <button className="scpa scp6" onClick={V.hTogglePanel} title="Collapse" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "26px", height: "26px", borderRadius: "8px", color: "rgba(255,255,255,.75)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 15 6-6 6 6" /></svg></button>
            </div>
            <div style={{ flex: "1", minHeight: "0", overflow: "hidden", padding: "0 6px 6px" }}>
              <div style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".1em", color: "rgba(255,255,255,.55)", padding: "2px 6px 2px", fontSize: "9.5px" }}>LAYERS</div>
              {L(V.hLayers).map((ly, i12) => <React.Fragment key={i12}>
                <button className="scpa scp6" onClick={ly?.toggle} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "4px 6px", borderRadius: "7px", fontSize: "11px", fontWeight: "500", color: "#fff", transition: "background .12s,transform .1s" }}>
                  <span style={{ width: "20px", height: "20px", borderRadius: "6px", background: `${A(ly?.iconBg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><span style={{ width: "9px", height: "9px", borderRadius: `${A(ly?.shape)}`, background: `${A(ly?.dot)}`, boxShadow: "0 0 0 2px #fff" }} /></span>
                  <span style={{ flex: "1" }}>{S(ly?.label)}</span>
                  <span style={{ width: "28px", height: "16px", borderRadius: "999px", background: `${A(ly?.bg)}`, position: "relative", transition: "background .15s", flexShrink: "0" }}><span style={{ position: "absolute", top: "2px", left: `${A(ly?.knob)}`, width: "12px", height: "12px", borderRadius: "50%", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,.2)", transition: "left .15s" }} /></span>
                </button>
              </React.Fragment>)}
              <div style={{ height: "1px", background: "rgba(255,255,255,.12)", margin: "4px 6px" }} />
              <div style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".1em", color: "rgba(255,255,255,.55)", padding: "2px 6px", fontSize: "9.5px" }}>BASEMAP</div>
              {L(V.hBasemaps).map((b, i13) => <React.Fragment key={i13}>
                <button className="scpa scp6" onClick={b?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "3px 6px", borderRadius: "7px", background: `${A(b?.bg)}`, color: `${A(b?.fg)}`, fontSize: "11px", fontWeight: `${A(b?.fw)}`, transition: "background .12s,transform .1s" }}>
                  <span style={{ width: "16px", height: "16px", borderRadius: "5px", background: `${A(b?.sw)}`, boxShadow: "inset 0 0 0 1px rgba(0,0,0,.12)", flexShrink: "0" }} />
                  <span style={{ flex: "1", minWidth: "0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(b?.label)}</span>
                  <span className="scpn" onClick={b?.makeDef} title={b?.starTitle} style={{ flexShrink: "0", width: "20px", height: "20px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", color: `${A(b?.starFg)}`, cursor: "pointer", transition: "background .12s,color .12s" }}><svg width="13" height="13" viewBox="0 0 24 24" fill={b?.starFill} stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" /></svg></span>
                  <span style={{ opacity: `${A(b?.chk)}`, display: "flex" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                </button>
              </React.Fragment>)}
            </div>
          </div>
        </>}
      </div>
    </div>
    </>
  );
}
