import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';

export default function GFcDash({ V }) {
  return (
    <>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "flex-start" }}>
      <div style={{ flex: "2 1 560px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0" }}>
        <div style={{ borderRadius: "12px", background: "linear-gradient(135deg,#3A78C2 0%,#5B97D8 55%,#86B6E6 100%)", color: "#fff", padding: "16px", display: "flex", flexWrap: "wrap", gap: "16px", boxShadow: "0 6px 20px rgba(37,99,235,.22)" }}>
          <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", fontSize: "12.5px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: "0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" style={{ flexShrink: "0", fill: "#fff" }}><path d="M12 22s-7.5-6.6-7.5-12.2a7.5 7.5 0 0 1 15 0C19.5 15.4 12 22 12 22zm0-9.4a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6z" /></svg>
                <span data-tip="Forecast location" style={{ lineHeight: "1.3", fontSize: "13px", fontWeight: "500", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.g?.fc?.loc)}</span>
              </span>
              <span data-tip="The next hour the model forecasts" style={{ opacity: ".9", whiteSpace: "nowrap" }}>{S(V.g?.fc?.hero?.time)}</span>
            </div>
            <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", padding: "6px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ width: "52px", height: "52px", borderRadius: "50%", background: "rgba(255,255,255,.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {V.g?.fc?.hero?.ic?.sun && <>
                    <svg width="40" height="40" viewBox="0 0 24 24">
                      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" style={{ stroke: "#F59E0B", strokeWidth: "1.8", strokeLinecap: "round" }} />
                      <circle cx="12" cy="12" r="5" style={{ fill: "#FBBF24" }} />
                    </svg>
                  </>}
                  {V.g?.fc?.hero?.ic?.pc && <>
                    <svg width="40" height="40" viewBox="0 0 24 24">
                      <path d="M9 2.5v1.6M3.4 4.9l1.1 1.1M14.6 4.9l-1.1 1.1M1.8 10h1.6" style={{ stroke: "#F59E0B", strokeWidth: "1.6", strokeLinecap: "round" }} />
                      <circle cx="9" cy="10" r="4.2" style={{ fill: "#FBBF24" }} />
                      <path d="M8.5 20.5h9.2a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10 1.2 3 3 0 0 0 .4 6z" style={{ fill: "#E2E8F0", stroke: "#CBD5E1", strokeWidth: "1" }} />
                    </svg>
                  </>}
                  {V.g?.fc?.hero?.ic?.moon && <>
                    <svg width="40" height="40" viewBox="0 0 24 24"><path d="M15 3a8.5 8.5 0 1 0 6 14.4A7.3 7.3 0 0 1 15 3z" style={{ fill: "#64748B" }} /></svg>
                  </>}
                  {V.g?.fc?.hero?.ic?.mc && <>
                    <svg width="40" height="40" viewBox="0 0 24 24">
                      <path d="M13 2.5a6.5 6.5 0 1 0 6.5 9.8A5.6 5.6 0 0 1 13 2.5z" style={{ fill: "#64748B" }} />
                      <path d="M8 20.5h9.4a3.5 3.5 0 0 0 .3-7 5 5 0 0 0-9.6 1.2A3 3 0 0 0 8 20.5z" style={{ fill: "#E2E8F0", stroke: "#CBD5E1", strokeWidth: "1" }} />
                    </svg>
                  </>}
                  {V.g?.fc?.hero?.ic?.rain && <>
                    <svg width="40" height="40" viewBox="0 0 24 24">
                      <path d="M7 15.5h10.5a3.8 3.8 0 0 0 .4-7.6 5.6 5.6 0 0 0-10.8 1.3A3.2 3.2 0 0 0 7 15.5z" style={{ fill: "#93C5FD", stroke: "#60A5FA", strokeWidth: "1" }} />
                      <path d="M8.5 18l-.8 2.5M12 18l-.8 2.5M15.5 18l-.8 2.5" style={{ stroke: "#2563EB", strokeWidth: "1.6", strokeLinecap: "round" }} />
                    </svg>
                  </>}
                </span>
                <span style={{ fontSize: "46px", fontWeight: "300", lineHeight: "1", letterSpacing: "-.02em" }}>{S(V.g?.fc?.hero?.t)}</span>
              </div>
              <span style={{ fontSize: "12.5px", fontWeight: "600", display: "flex", gap: "5px" }}>
                <span data-tip="Today's high">{"↑ "}{S(V.g?.fc?.hero?.hi)}</span>
                ·
                <span data-tip="Today's low">{"↓ "}{S(V.g?.fc?.hero?.lo)}</span>
              </span>
              <span data-tip="How warm it feels, allowing for wind" style={{ fontSize: "12px", opacity: ".85" }}>{"Feels like "}{S(V.g?.fc?.hero?.feels)}</span>
              <span data-tip="Forecast conditions for this hour" style={{ fontSize: "13.5px", marginTop: "6px" }}>{S(V.g?.fc?.hero?.cond)}</span>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,.35)", paddingTop: "10px", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "6px", fontSize: "12.5px", fontWeight: "600", textAlign: "center", whiteSpace: "nowrap" }}>
              <span data-tip="Atmospheric pressure">{S(V.g?.fc?.hero?.pres)}</span>
              <span data-tip="Chance of rain">{S(V.g?.fc?.hero?.rain)}{" rain"}</span>
              <span data-tip="Wind speed">{S(V.g?.fc?.hero?.wind)}</span>
            </div>
          </div>
          <div style={{ flex: "1.2 1 300px", borderRadius: "8px", background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.35)", padding: "10px 12px", display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}>
            <div style={{ display: "flex", gap: "14px", fontSize: "12.5px" }}>
              {L(V.g?.fc?.hero?.tabs).map((ht, i37) => <React.Fragment key={i37}>
                <button className="scp6 scpt" onClick={ht?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0 0 3px", cursor: "pointer", color: "#fff", opacity: `${A(ht?.op)}`, borderBottom: `1.5px solid ${A(ht?.bd)}`, transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>{S(ht?.l)}</button>
              </React.Fragment>)}
              <span style={{ marginLeft: "auto", fontSize: "11px", opacity: ".85" }}>{S(V.g?.fc?.hero?.sub)}</span>
            </div>
            <div style={{ position: "relative", flex: "1", minHeight: "120px", margin: "10px 4px 0" }}>
              {V.g?.fc?.hero?.isRain && <>
                {L(V.g?.fc?.hero?.ticks).map((tk, i38) => <React.Fragment key={i38}>
                  <div style={{ position: "absolute", left: "0", right: "0", top: `${A(tk?.y)}`, borderTop: "1px dashed rgba(255,255,255,.55)" }}><span style={{ position: "absolute", left: "0", top: "-14px", fontSize: "10px", fontWeight: "600" }}>{S(tk?.v)}</span></div>
                </React.Fragment>)}
              </>}
              {V.g?.fc?.hero?.showPts && <>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}><polyline points={V.g?.fc?.hero?.pts} style={{ fill: "none", stroke: "#fff", strokeWidth: "1.6", opacity: ".85", vectorEffect: "non-scaling-stroke" }} /></svg>
                {L(V.g?.fc?.hero?.dots).map((hd, i39) => <React.Fragment key={i39}>
                  <span data-tip={hd?.tip} style={{ position: "absolute", left: `${A(hd?.x)}`, top: `${A(hd?.y)}`, transform: "translate(-50%,-130%)", fontSize: "10.5px", fontWeight: "700", padding: "0 4px", borderRadius: "3px", background: "rgba(15,40,80,.35)", border: "1px solid rgba(255,255,255,.6)", whiteSpace: "nowrap" }}>{S(hd?.v)}</span>
                  <span style={{ position: "absolute", left: `${A(hd?.x)}`, top: `${A(hd?.y)}`, width: "5px", height: "5px", borderRadius: "50%", background: "#fff", transform: "translate(-50%,-50%)" }} />
                </React.Fragment>)}
              </>}
            </div>
            <div style={{ position: "relative", height: "14px", margin: "0 4px" }}>
              {L(V.g?.fc?.hero?.dots).map((hd, i40) => <React.Fragment key={i40}>
                <span data-tip={hd?.tip} style={{ position: "absolute", left: `${A(hd?.x)}`, transform: "translateX(-50%)", fontSize: "10px", opacity: ".9", whiteSpace: "nowrap" }}>{S(hd?.l)}</span>
              </React.Fragment>)}
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(210px,1fr))", gap: "14px" }}>
          <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "14px 16px", display: "flex", justifyContent: "space-between", gap: "10px", minHeight: "118px", minWidth: "0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
              <span style={{ fontSize: "12.5px", color: "#475569" }}>Wind Speed</span>
              <span style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A", marginBottom: "6px" }}>{S(V.g?.fc?.m?.wind)}</span>
              <span style={{ fontSize: "12.5px", color: "#475569" }}>Wind Direction</span>
              <span style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A", marginBottom: "6px" }}>{S(V.g?.fc?.m?.dir)}</span>
            </div>
            <div style={{ flexShrink: "0", alignSelf: "center" }}>
              <svg width="76" height="76" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="17" style={{ fill: "none", stroke: "#0F766E", strokeWidth: ".8", strokeDasharray: "2 2" }} />
                <text x="24" y="5.5" textAnchor="middle" style={{ fontSize: "5px", fontWeight: "700", fill: "#0F172A" }}>N</text>
                <text x="24" y="47" textAnchor="middle" style={{ fontSize: "5px", fontWeight: "700", fill: "#0F172A" }}>S</text>
                <text x="45" y="25.8" textAnchor="middle" style={{ fontSize: "5px", fontWeight: "700", fill: "#0F172A" }}>E</text>
                <text x="3" y="25.8" textAnchor="middle" style={{ fontSize: "5px", fontWeight: "700", fill: "#0F172A" }}>W</text>
                <g style={{ transform: `rotate(${A(V.g?.fc?.m?.rot)})`, transformOrigin: "24px 24px" }}>
                  <path d="M24 10v28" style={{ stroke: "#043C2C", strokeWidth: "1.6", strokeLinecap: "round" }} />
                  <path d="M24 40l-2.6-5h5.2z" style={{ fill: "#043C2C" }} />
                  <circle cx="24" cy="10" r="1.4" style={{ fill: "#043C2C" }} />
                </g>
              </svg>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "14px 16px", display: "flex", justifyContent: "space-between", gap: "10px", minHeight: "118px", minWidth: "0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
              <span style={{ fontSize: "12.5px", color: "#475569" }}>Chance of Rain (next 24 hrs)</span>
              <span style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A", marginBottom: "6px" }}>{S(V.g?.fc?.m?.pop)}</span>
              <span style={{ fontSize: "12.5px", color: "#475569" }}>Rainfall Expected (next 24 hrs)</span>
              <span style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A", marginBottom: "6px" }}>{S(V.g?.fc?.m?.mm)}</span>
            </div>
            <div style={{ flexShrink: "0", alignSelf: "center" }}>
              <svg width="70" height="70" viewBox="0 0 24 24">
                <path d="M6.5 14.5h11a4 4 0 0 0 .4-8 5.8 5.8 0 0 0-11.2 1.3A3.4 3.4 0 0 0 6.5 14.5z" style={{ fill: "#4A7FB5" }} />
                <path d="M8 17.5l-.8 2.5M11.5 17.5l-.8 2.5M15 17.5l-.8 2.5" style={{ stroke: "#1E3A8A", strokeWidth: "1.5", strokeLinecap: "round" }} />
              </svg>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "14px 16px", display: "flex", justifyContent: "space-between", gap: "10px", minHeight: "118px", minWidth: "0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
              <span style={{ fontSize: "12.5px", color: "#475569" }}>Atmospheric Pressure</span>
              <span style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A", marginBottom: "6px" }}>{S(V.g?.fc?.m?.pres)}</span>
            </div>
            <div style={{ flexShrink: "0", alignSelf: "center" }}>
              <svg width="70" height="70" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="20" style={{ fill: "none", stroke: "#BE123C", strokeWidth: "1.4" }} />
                <circle cx="24" cy="24" r="15" style={{ fill: "none", stroke: "#BE123C", strokeWidth: ".8", strokeDasharray: "1 2.2" }} />
                <g style={{ transform: `rotate(${A(V.g?.fc?.m?.prot)})`, transformOrigin: "24px 24px" }}><path d="M24 24V11" style={{ stroke: "#BE123C", strokeWidth: "1.6", strokeLinecap: "round" }} /></g>
                <circle cx="24" cy="24" r="2.4" style={{ fill: "#BE123C" }} />
              </svg>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "14px 16px", display: "flex", justifyContent: "space-between", gap: "10px", minHeight: "118px", minWidth: "0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
              <span style={{ fontSize: "12.5px", color: "#475569" }}>UV Index</span>
              <span style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A", marginBottom: "6px" }}>{S(V.g?.fc?.m?.uv)}</span>
              <span style={{ fontSize: "12.5px", color: "#475569" }}>UV Level</span>
              <span style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A", marginBottom: "6px" }}>{S(V.g?.fc?.m?.uvl)}</span>
            </div>
            <div style={{ flexShrink: "0", alignSelf: "center" }}>
              <svg width="66" height="66" viewBox="0 0 24 24">
                <path d="M9 1.5v2M2.6 4.1l1.4 1.4M15.4 4.1 14 5.5M1 10h2M17 10h2M4 14.5l-1.4 1.4" style={{ stroke: "#F59E0B", strokeWidth: "1.5", strokeLinecap: "round" }} />
                <circle cx="9" cy="10" r="4.5" style={{ fill: "#FBBF24" }} />
                <text x="17" y="21" textAnchor="middle" style={{ fontSize: "6.5px", fontWeight: "800", fill: "#1F2937" }}>UV</text>
              </svg>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "14px 16px", display: "flex", justifyContent: "space-between", gap: "10px", minHeight: "118px", minWidth: "0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
              <span style={{ fontSize: "12.5px", color: "#475569" }}>Humidity</span>
              <span style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A", marginBottom: "6px" }}>{S(V.g?.fc?.m?.hum)}</span>
            </div>
            <div style={{ flexShrink: "0", alignSelf: "center" }}><svg width="54" height="54" viewBox="0 0 24 24"><path d="M12 2.5S5.5 9.6 5.5 14.2a6.5 6.5 0 0 0 13 0C18.5 9.6 12 2.5 12 2.5z" style={{ fill: "#38BDF8" }} /></svg></div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "14px 16px", display: "flex", justifyContent: "space-between", gap: "10px", minHeight: "118px", minWidth: "0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
              <span style={{ fontSize: "12.5px", color: "#475569" }}>Dew Point</span>
              <span style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A", marginBottom: "6px" }}>{S(V.g?.fc?.m?.dew)}</span>
            </div>
            <div style={{ flexShrink: "0", alignSelf: "center" }}><svg width="64" height="64" viewBox="0 0 24 24"><path d="M6.5 3S3.5 6.4 3.5 8.6a3 3 0 0 0 6 0C9.5 6.4 6.5 3 6.5 3zM17.5 4s-3 3.4-3 5.6a3 3 0 0 0 6 0c0-2.2-3-5.6-3-5.6zM12 12s-3 3.4-3 5.6a3 3 0 0 0 6 0c0-2.2-3-5.6-3-5.6z" style={{ fill: "#0D9488" }} /></svg></div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "14px 16px", display: "flex", justifyContent: "space-between", gap: "10px", minHeight: "118px", minWidth: "0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
              <span style={{ fontSize: "12.5px", color: "#475569" }}>Delta T (ΔT)</span>
              <span style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A", marginBottom: "6px" }}>{S(V.g?.fc?.m?.dt)}</span>
            </div>
            <div style={{ flexShrink: "0", alignSelf: "center" }}>
              <svg width="64" height="64" viewBox="0 0 24 24">
                <path d="M2 8.5c2-1.2 3.5-1.2 5 0s3 1.2 5 0M2 13c2-1.2 3.5-1.2 5 0s3 1.2 5 0s3-1.2 5 0 3 1.2 5 0M2 17.5c2-1.2 3.5-1.2 5 0s3 1.2 5 0 3-1.2 5 0 3 1.2 5 0" style={{ fill: "none", stroke: "#2563EB", strokeWidth: "1.6", strokeLinecap: "round" }} />
                <path d="M18 2.5s-2.2 2.6-2.2 4.2a2.2 2.2 0 0 0 4.4 0c0-1.6-2.2-4.2-2.2-4.2z" style={{ fill: "#2563EB" }} />
              </svg>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "14px 16px", display: "flex", justifyContent: "space-between", gap: "10px", minHeight: "118px", minWidth: "0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
              <span style={{ fontSize: "12.5px", color: "#475569" }}>Fog Probability</span>
              <span style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A", marginBottom: "6px" }}>{S(V.g?.fc?.m?.fog)}</span>
            </div>
            <div style={{ flexShrink: "0", alignSelf: "center" }}>
              <svg width="70" height="70" viewBox="0 0 24 24">
                <path d="M9 17h9.5a3.6 3.6 0 0 0 .3-7.2 5.3 5.3 0 0 0-10.2 1.3A3 3 0 0 0 9 17z" style={{ fill: "#CBD5E1" }} />
                <path d="M2 12h6M1 15h7M3 18h6" style={{ stroke: "#CBD5E1", strokeWidth: "1.4", strokeLinecap: "round" }} />
              </svg>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "14px 16px", display: "flex", justifyContent: "space-between", gap: "10px", minHeight: "118px", minWidth: "0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
              <span style={{ fontSize: "12.5px", color: "#475569" }}>Spray Rating</span>
              <span style={{ fontSize: "17px", fontWeight: "700", color: `${A(V.g?.fc?.m?.sprayFg)}` }}>{S(V.g?.fc?.m?.spray)}</span>
            </div>
            <div style={{ flexShrink: "0", alignSelf: "center" }}>
              <svg width="56" height="56" viewBox="0 0 24 24">
                <rect x="9" y="3" width="6" height="7" rx="1.5" style={{ fill: "#22C55E" }} />
                <rect x="10.5" y="1.5" width="3" height="2" rx=".5" style={{ fill: "#15803D" }} />
                <circle cx="12" cy="14" r="1" style={{ fill: "#2563EB" }} />
                <circle cx="9.5" cy="17" r="1" style={{ fill: "#2563EB" }} />
                <circle cx="14.5" cy="17" r="1" style={{ fill: "#2563EB" }} />
                <circle cx="7.5" cy="20.5" r="1" style={{ fill: "#2563EB" }} />
                <circle cx="12" cy="20.5" r="1" style={{ fill: "#2563EB" }} />
                <circle cx="16.5" cy="20.5" r="1" style={{ fill: "#2563EB" }} />
              </svg>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" style={{ fill: "none", stroke: "#22C55E", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 21v-9M12 12c0-4 3-6 7-6 0 4-3 6-7 6zM12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5z" /></svg>
            Soil Conditions
          </span>
          <div style={{ borderRadius: "8px", overflow: "hidden", fontSize: "12.5px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#4CCB87", color: "#fff", fontWeight: "700", padding: "11px 14px" }}>
              <span>Depth range</span>
              <span>Moisture</span>
              <span>Temperature</span>
            </div>
            {L(V.g?.fc?.soil).map((sr, i41) => <React.Fragment key={i41}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "10px 14px", borderBottom: "1px solid #EEF2F6", background: `${A(sr?.bg)}`, color: `${A(sr?.fg)}` }}>
                <span>{S(sr?.d)}</span>
                <span>{S(sr?.m)}</span>
                <span>{S(sr?.t)}</span>
              </div>
            </React.Fragment>)}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 14px", borderRadius: "10px", background: "#E3EDEC", border: "1px solid #C9DDD9", fontSize: "13px", fontWeight: "700", color: "#0F172A" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" style={{ fill: "none", stroke: "#043C2C", strokeWidth: "2", strokeLinecap: "round" }}>
            <rect x="3.5" y="5" width="17" height="15" rx="2" />
            <path d="M3.5 10h17M8 3v4M16 3v4" />
          </svg>
          {S(V.g?.fc?.range)}
          <span style={{ fontSize: "11.5px", fontWeight: "600", padding: "2px 8px", borderRadius: "6px", background: "#C9DDD9", color: "#043C2C" }}>{S(V.g?.fc?.rangeN)}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))", gap: "10px" }}>
          {L(V.g?.fc?.sum).map((sm, i42) => <React.Fragment key={i42}>
            <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "12px 14px", display: "flex", justifyContent: "space-between", gap: "8px", minHeight: "92px", minWidth: "0" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                <span style={{ fontSize: "12.5px", color: "#334155" }}>
                  {S(sm?.l)}{" "}
                  <span style={{ fontSize: "11px", color: "#94A3B8" }}>({S(sm?.u)})</span>
                </span>
                <span style={{ fontSize: "20px", fontWeight: "700", color: `${A(sm?.c)}` }}>{S(sm?.v)}</span>
              </div>
              <span style={{ width: "36px", height: "36px", borderRadius: "9px", background: `${A(sm?.bg)}`, color: `${A(sm?.c)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="20" height="20" viewBox="0 0 24 24" style={{ fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={sm?.d} /></svg></span>
            </div>
          </React.Fragment>)}
        </div>
      </div>
      <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "12px", minWidth: "0", flex: "1 1 300px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <button className="scp2 scp6" onClick={V.g?.fc?.prev} title="Previous day" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid #334155", background: "#fff", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", opacity: `${A(V.g?.fc?.prevOp)}`, transition: "background .15s,border-color .15s,color .15s,transform .1s" }}><svg width="14" height="14" viewBox="0 0 24 24" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m15 6-6 6 6 6" /></svg></button>
          <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>{S(V.g?.fc?.dayTitle)}</span>
          <button className="scp2 scp6" onClick={V.g?.fc?.next} title="Next day" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "50%", border: "1px solid #334155", background: "#fff", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", opacity: `${A(V.g?.fc?.nextOp)}`, transition: "background .15s,border-color .15s,color .15s,transform .1s" }}><svg width="14" height="14" viewBox="0 0 24 24" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m9 6 6 6-6 6" /></svg></button>
        </div>
        <div style={{ padding: "8px 10px", border: "1px solid #E5E8E6", borderRadius: "6px", fontSize: "12px", color: "#334155", lineHeight: "1.45" }}>{S(V.g?.fc?.desc)}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8,minmax(0,1fr))", gap: "2px", textAlign: "center" }}>
          {L(V.g?.fc?.hours).map((hr, i43) => <React.Fragment key={i43}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", fontSize: "11px", color: "#475569", minWidth: "0" }}>
              <span style={{ whiteSpace: "nowrap" }}>{S(hr?.l)}</span>
              {hr?.ic?.sun && <>
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" style={{ stroke: "#F59E0B", strokeWidth: "1.8", strokeLinecap: "round" }} />
                  <circle cx="12" cy="12" r="5" style={{ fill: "#FBBF24" }} />
                </svg>
              </>}
              {hr?.ic?.pc && <>
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <path d="M9 2.5v1.6M3.4 4.9l1.1 1.1M14.6 4.9l-1.1 1.1M1.8 10h1.6" style={{ stroke: "#F59E0B", strokeWidth: "1.6", strokeLinecap: "round" }} />
                  <circle cx="9" cy="10" r="4.2" style={{ fill: "#FBBF24" }} />
                  <path d="M8.5 20.5h9.2a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10 1.2 3 3 0 0 0 .4 6z" style={{ fill: "#E2E8F0", stroke: "#CBD5E1", strokeWidth: "1" }} />
                </svg>
              </>}
              {hr?.ic?.moon && <>
                <svg width="26" height="26" viewBox="0 0 24 24"><path d="M15 3a8.5 8.5 0 1 0 6 14.4A7.3 7.3 0 0 1 15 3z" style={{ fill: "#64748B" }} /></svg>
              </>}
              {hr?.ic?.mc && <>
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <path d="M13 2.5a6.5 6.5 0 1 0 6.5 9.8A5.6 5.6 0 0 1 13 2.5z" style={{ fill: "#64748B" }} />
                  <path d="M8 20.5h9.4a3.5 3.5 0 0 0 .3-7 5 5 0 0 0-9.6 1.2A3 3 0 0 0 8 20.5z" style={{ fill: "#E2E8F0", stroke: "#CBD5E1", strokeWidth: "1" }} />
                </svg>
              </>}
              {hr?.ic?.rain && <>
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <path d="M7 15.5h10.5a3.8 3.8 0 0 0 .4-7.6 5.6 5.6 0 0 0-10.8 1.3A3.2 3.2 0 0 0 7 15.5z" style={{ fill: "#93C5FD", stroke: "#60A5FA", strokeWidth: "1" }} />
                  <path d="M8.5 18l-.8 2.5M12 18l-.8 2.5M15.5 18l-.8 2.5" style={{ stroke: "#2563EB", strokeWidth: "1.6", strokeLinecap: "round" }} />
                </svg>
              </>}
              <b style={{ fontSize: "11.5px", color: "#0F172A" }}>{S(hr?.t)}</b>
            </div>
          </React.Fragment>)}
        </div>
        <div style={{ borderTop: "1px solid #E5E8E6", paddingTop: "8px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.6fr) repeat(5,minmax(0,1fr))", gap: "4px", padding: "4px 6px", fontSize: "11px", fontWeight: "600", color: "#475569", textAlign: "center" }}>
            <span />
            <span>Day</span>
            <span>Night</span>
            <span>Rain</span>
            <span>High</span>
            <span>Low</span>
          </div>
          {L(V.g?.fc?.days).map((dy, i44) => <React.Fragment key={i44}>
            <button className="scp2 scp6" onClick={dy?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", width: "100%", display: "grid", gridTemplateColumns: "minmax(0,1.6fr) repeat(5,minmax(0,1fr))", gap: "4px", alignItems: "center", padding: "7px 6px", borderRadius: "8px", textAlign: "center", color: "#0F172A", background: `${A(dy?.bg)}`, transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
              <span style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "2px" }}>
                <b style={{ fontSize: "12px" }}>{S(dy?.n)}</b>
                <span style={{ fontSize: "11px", color: "#64748B" }}>{S(dy?.d)}</span>
              </span>
              <span style={{ display: "flex", justifyContent: "center" }}>
                {dy?.di?.sun && <>
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" style={{ stroke: "#F59E0B", strokeWidth: "1.8", strokeLinecap: "round" }} />
                    <circle cx="12" cy="12" r="5" style={{ fill: "#FBBF24" }} />
                  </svg>
                </>}
                {dy?.di?.pc && <>
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path d="M9 2.5v1.6M3.4 4.9l1.1 1.1M14.6 4.9l-1.1 1.1M1.8 10h1.6" style={{ stroke: "#F59E0B", strokeWidth: "1.6", strokeLinecap: "round" }} />
                    <circle cx="9" cy="10" r="4.2" style={{ fill: "#FBBF24" }} />
                    <path d="M8.5 20.5h9.2a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10 1.2 3 3 0 0 0 .4 6z" style={{ fill: "#E2E8F0", stroke: "#CBD5E1", strokeWidth: "1" }} />
                  </svg>
                </>}
                {dy?.di?.moon && <>
                  <svg width="22" height="22" viewBox="0 0 24 24"><path d="M15 3a8.5 8.5 0 1 0 6 14.4A7.3 7.3 0 0 1 15 3z" style={{ fill: "#64748B" }} /></svg>
                </>}
                {dy?.di?.mc && <>
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path d="M13 2.5a6.5 6.5 0 1 0 6.5 9.8A5.6 5.6 0 0 1 13 2.5z" style={{ fill: "#64748B" }} />
                    <path d="M8 20.5h9.4a3.5 3.5 0 0 0 .3-7 5 5 0 0 0-9.6 1.2A3 3 0 0 0 8 20.5z" style={{ fill: "#E2E8F0", stroke: "#CBD5E1", strokeWidth: "1" }} />
                  </svg>
                </>}
                {dy?.di?.rain && <>
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path d="M7 15.5h10.5a3.8 3.8 0 0 0 .4-7.6 5.6 5.6 0 0 0-10.8 1.3A3.2 3.2 0 0 0 7 15.5z" style={{ fill: "#93C5FD", stroke: "#60A5FA", strokeWidth: "1" }} />
                    <path d="M8.5 18l-.8 2.5M12 18l-.8 2.5M15.5 18l-.8 2.5" style={{ stroke: "#2563EB", strokeWidth: "1.6", strokeLinecap: "round" }} />
                  </svg>
                </>}
              </span>
              <span style={{ display: "flex", justifyContent: "center" }}>
                {dy?.ni?.sun && <>
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" style={{ stroke: "#F59E0B", strokeWidth: "1.8", strokeLinecap: "round" }} />
                    <circle cx="12" cy="12" r="5" style={{ fill: "#FBBF24" }} />
                  </svg>
                </>}
                {dy?.ni?.pc && <>
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path d="M9 2.5v1.6M3.4 4.9l1.1 1.1M14.6 4.9l-1.1 1.1M1.8 10h1.6" style={{ stroke: "#F59E0B", strokeWidth: "1.6", strokeLinecap: "round" }} />
                    <circle cx="9" cy="10" r="4.2" style={{ fill: "#FBBF24" }} />
                    <path d="M8.5 20.5h9.2a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10 1.2 3 3 0 0 0 .4 6z" style={{ fill: "#E2E8F0", stroke: "#CBD5E1", strokeWidth: "1" }} />
                  </svg>
                </>}
                {dy?.ni?.moon && <>
                  <svg width="22" height="22" viewBox="0 0 24 24"><path d="M15 3a8.5 8.5 0 1 0 6 14.4A7.3 7.3 0 0 1 15 3z" style={{ fill: "#64748B" }} /></svg>
                </>}
                {dy?.ni?.mc && <>
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path d="M13 2.5a6.5 6.5 0 1 0 6.5 9.8A5.6 5.6 0 0 1 13 2.5z" style={{ fill: "#64748B" }} />
                    <path d="M8 20.5h9.4a3.5 3.5 0 0 0 .3-7 5 5 0 0 0-9.6 1.2A3 3 0 0 0 8 20.5z" style={{ fill: "#E2E8F0", stroke: "#CBD5E1", strokeWidth: "1" }} />
                  </svg>
                </>}
                {dy?.ni?.rain && <>
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path d="M7 15.5h10.5a3.8 3.8 0 0 0 .4-7.6 5.6 5.6 0 0 0-10.8 1.3A3.2 3.2 0 0 0 7 15.5z" style={{ fill: "#93C5FD", stroke: "#60A5FA", strokeWidth: "1" }} />
                    <path d="M8.5 18l-.8 2.5M12 18l-.8 2.5M15.5 18l-.8 2.5" style={{ stroke: "#2563EB", strokeWidth: "1.6", strokeLinecap: "round" }} />
                  </svg>
                </>}
              </span>
              <span style={{ fontSize: "11.5px", color: "#475569" }}>{S(dy?.r)}</span>
              <b style={{ fontSize: "12px" }}>{S(dy?.hi)}</b>
              <b style={{ fontSize: "12px", color: "#475569" }}>{S(dy?.lo)}</b>
            </button>
          </React.Fragment>)}
        </div>
      </div>
    </div>
    </>
  );
}
