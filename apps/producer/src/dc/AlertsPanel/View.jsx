import React from 'react';
import { S, L, A, C } from '../runtime.js';


// Generated from "Alerts Panel.dc.html". V = { ...props, ...renderVals() } from AlertsPanel.jsx
export default function View({ V }) {
  return (
    <div className="sc-host">
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontFamily: "'Roboto', ui-sans-serif, system-ui, sans-serif", color: "#0F1A14" }}>
        <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "14px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 6px 18px rgba(16,24,40,.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", padding: `${A(V.hdPad)}`, borderBottom: "1px solid #EEF1EF" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: "1 1 220px", minWidth: "0" }}>
              <span style={{ width: "38px", height: "38px", flex: "0 0 38px", borderRadius: "10px", background: "#E7F6EC", color: "#0E7C3A", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg></span>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                <span style={{ fontSize: "16px", fontWeight: "600" }}>Alerts</span>
                <span style={{ fontSize: "13px", color: "#6A746E", lineHeight: "1.5" }}>
                  {"Get notified when readings from "}
                  <b style={{ color: "#0F1A14", fontWeight: "600" }}>{S(V.devName)}</b>
                  {" · "}{S(V.devSerial)}{" cross a threshold"}
                </span>
              </div>
            </div>
            <span className="scp3h" onClick={V.openNew} style={{ display: "flex", alignItems: "center", gap: "8px", background: "#0E7C3A", color: "#fff", borderRadius: "8px", padding: "10px 16px", fontSize: "14px", fontWeight: "600", cursor: "pointer", whiteSpace: "nowrap" }}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              Add alert
            </span>
          </div>
          <div style={{ padding: `${A(V.bdPad)}`, display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontSize: "16px", fontWeight: "700" }}>Active alerts</span>
                <span style={{ fontSize: "13px", color: "#6A746E" }}>{S(V.ruleCount)}</span>
              </div>
              <span style={{ fontSize: "13px", color: "#6A746E" }}>What each alert is watching for, and how often it has gone off</span>
            </div>
            {V.noRules && <>
              <div style={{ border: "1.5px dashed #DCE3DE", borderRadius: "10px", padding: "26px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textAlign: "center" }}>
                <span style={{ fontSize: "16px", fontWeight: "700" }}>No alerts set up yet</span>
                <span style={{ fontSize: "13px", color: "#6A746E", lineHeight: "1.5" }}>Use Add alert to create one.</span>
              </div>
            </>}
            {L(V.rules).map((r, i0) => <React.Fragment key={i0}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", border: "1px solid #E9ECEA", borderRadius: "10px", padding: "12px 16px", background: `${A(r?.rowBg)}` }}>
                <div style={{ flex: "1 1 auto", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", opacity: `${A(r?.op)}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ width: "9px", height: "9px", flex: "0 0 9px", borderRadius: "50%", background: `${A(r?.dot)}` }} />
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>{S(r?.name)}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "#6A746E" }}>
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="2" />
                        <path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4" />
                      </svg>
                      {S(r?.device)}
                    </span>
                    {r?.paused && <>
                      <span style={{ fontSize: "12px", fontWeight: "600", color: "#4C6354", background: "#EEF1EF", borderRadius: "5px", padding: "2px 8px" }}>Paused</span>
                    </>}
                  </div>
                  <span style={{ fontSize: "13px", color: "#26332C" }}>{S(r?.cond)}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "13px", color: "#6A746E" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      {r?.email && <>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="M3 7l9 6 9-6" />
                        </svg>
                      </>}
                      {r?.sms && <>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M4 5h16v11H9l-5 4z" /></svg>
                      </>}
                      {r?.push && <>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                          <rect x="7" y="3" width="10" height="18" rx="2" />
                          <path d="M11 18h2" />
                        </svg>
                      </>}
                    </span>
                    <span>·</span>
                    <span>{S(r?.freq)}</span>
                    <span>·</span>
                    <span>{S(r?.hist)}</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", flex: "0 0 auto" }}>
                  <span className="scp3d" onClick={r?.edit} title="Edit" style={{ width: "34px", height: "34px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B6660", cursor: "pointer" }}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg></span>
                  <span className="scp3i" onClick={r?.remove} title="Delete" style={{ width: "34px", height: "34px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#E5534B", cursor: "pointer" }}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" /></svg></span>
                </div>
              </div>
            </React.Fragment>)}
          </div>
        </div>
        {V.infoOpen && <>
          <div onClick={V.closeInfo} style={{ position: `${A(V.ovPos)}`, inset: "0", background: "rgba(15,26,20,.38)", zIndex: "200", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
            <div onClick={V.stopOnly} style={{ width: "100%", maxWidth: "420px", background: "#fff", borderRadius: "14px", boxShadow: "0 24px 60px rgba(15,26,20,.25)", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "38px", height: "38px", flex: "0 0 38px", borderRadius: "10px", background: "#E7F6EC", color: "#0E7C3A", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg></span>
                <span style={{ fontSize: "16px", fontWeight: "700", color: "#0F1A14" }}>{S(V.infoTitle)}</span>
              </div>
              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#26332C", textWrap: "pretty" }}>{S(V.infoMsg)}</span>
              <div style={{ display: "flex", justifyContent: "flex-end" }}><span className="scp3h" onClick={V.closeInfo} style={{ background: "#0E7C3A", color: "#fff", borderRadius: "8px", padding: "9px 18px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>OK</span></div>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
}
