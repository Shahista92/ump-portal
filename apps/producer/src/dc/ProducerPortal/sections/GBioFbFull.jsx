import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';

export default function GBioFbFull({ V }) {
  return (
    <>
    <div style={{ flex: "0 1 360px", minWidth: "300px", maxHeight: "100%", overflowY: "auto", background: "#fff", border: "0", borderRadius: "16px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 8px 24px rgba(15,23,42,.06)", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "18px 20px 14px", borderBottom: "1px solid #F1F5F9", display: "flex", flexDirection: "column", gap: "3px" }}>
        <span style={{ fontSize: "17px", fontWeight: "700", letterSpacing: "-.01em", color: "#0F172A" }}>Feed Budget</span>
        <span style={{ fontSize: "12.5px", color: "#64748B" }}>A few quick questions. We do the maths.</span>
      </div>
      <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: "10px", borderBottom: "1px solid #F1F5F9" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "14px", fontWeight: "700", color: "#0F172A" }}>
          <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#E8F4EC", color: "#1F6B43", border: "1px solid #CFE5D4", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>1</span>
          Where is your feed coming from?
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {L(V.g?.bio?.fb?.src).map((rd, i122) => <React.Fragment key={i122}>
            <button className="scp1a" onClick={rd?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "10px", border: `1.5px solid ${A(rd?.bd)}`, background: `${A(rd?.bg)}`, textAlign: "left", transition: "border-color .15s,background .15s" }}>
              <span style={{ width: "18px", height: "18px", borderRadius: "50%", border: `2px solid ${A(rd?.dbd)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", boxSizing: "border-box" }}><span style={{ width: "8px", height: "8px", borderRadius: "50%", background: `${A(rd?.dot)}` }} /></span>
              <span style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: "0" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#0F172A" }}>{S(rd?.l)}</span>
                <span style={{ fontSize: "11.5px", color: "#64748B" }}>{S(rd?.sub)}</span>
              </span>
            </button>
            {rd?.showUp && <>
              <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#475569" }}>Upload file</span>
                <select value={V.g?.bio?.fb?.file?.v ?? ""} onChange={V.g?.bio?.fb?.file?.set} style={{ height: "40px", border: "1px solid #CBD5E1", borderRadius: "10px", background: "#fff", font: "inherit", fontSize: "13.5px", fontWeight: "600", color: "#0F172A", padding: "0 10px", outline: "0", width: "100%", boxSizing: "border-box", cursor: "pointer" }}>
                  {L(V.g?.bio?.fb?.file?.opts).map((o, i123) => <React.Fragment key={i123}>
                    <option value={o?.v ?? ""}>{S(o?.l)}</option>
                  </React.Fragment>)}
                </select>
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "10px 12px", borderRadius: "10px", background: "#F4F9F5", border: "1px solid #DCEBE0" }}>
                {L(V.g?.bio?.fb?.checks).map((ck, i124) => <React.Fragment key={i124}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600", color: "#14532D" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: "0" }}>
                      <circle cx="12" cy="12" r="10" fill="#2E8B57" />
                      <path d="M7.5 12.5l3 3 6-6.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {S(ck)}
                  </span>
                </React.Fragment>)}
              </div>
              <button onClick={V.g?.bio?.fb?.padToggle} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "2px 0", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", fontWeight: "600", color: "#1F6B43", textAlign: "left" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", transform: `${A(V.g?.bio?.fb?.padRot)}`, transition: "transform .18s" }}><path d="m6 9 6 6 6-6" /></svg>
                {S(V.g?.bio?.fb?.padLbl)}
              </button>
              {V.g?.bio?.fb?.padOpen && <>
                <div style={{ display: "flex", flexDirection: "column", border: "1px solid #E2E8F0", borderRadius: "10px", overflow: "hidden" }}>
                  <div style={{ display: "flex", justifyContent: "flex-end", padding: "6px 10px", background: "#F8FAFC", borderBottom: "1px solid #EEF2F6" }}><button onClick={V.g?.bio?.fb?.all} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#1F6B43" }}>{S(V.g?.bio?.fb?.allTxt)}</button></div>
                  {L(V.g?.bio?.fb?.pads).map((q, i125) => <React.Fragment key={i125}>
                    <button className="scp19" onClick={q?.go} style={{ appearance: "none", border: "0", borderBottom: "1px solid #F1F5F9", background: `${A(q?.bg)}`, font: "inherit", margin: "0", cursor: "pointer", display: "grid", gridTemplateColumns: "18px minmax(0,1fr) auto", gap: "10px", alignItems: "center", padding: "8px 12px", textAlign: "left", color: "#0F172A" }}>
                      <span style={{ width: "18px", height: "18px", borderRadius: "5px", border: `1.5px solid ${A(q?.bd)}`, background: `${A(q?.cb)}`, color: "#fff", fontSize: "11.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>{S(q?.tick)}</span>
                      <span style={{ fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(q?.n)}</span>
                      <span style={{ fontSize: "11.5px", color: "#64748B", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>{S(q?.ha)}{" ha · "}{S(q?.c)}{" kg DM/ha"}</span>
                    </button>
                  </React.Fragment>)}
                </div>
              </>}
            </>}
            {rd?.showMan && <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "5px", minWidth: "0" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#475569" }}>Grazing area (ha)</span>
                  <input type="number" min="0" step="1" value={V.g?.bio?.fb?.man?.ha?.v ?? ""} onChange={V.g?.bio?.fb?.man?.ha?.set} style={{ height: "40px", border: "1px solid #CBD5E1", borderRadius: "10px", background: "#fff", font: "inherit", fontSize: "13.5px", fontWeight: "600", color: "#0F172A", padding: "0 10px", outline: "0", width: "100%", boxSizing: "border-box" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "5px", minWidth: "0" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#475569" }}>Average biomass (kg DM/ha)</span>
                  <input type="number" min="0" step="100" value={V.g?.bio?.fb?.man?.bio?.v ?? ""} onChange={V.g?.bio?.fb?.man?.bio?.set} style={{ height: "40px", border: "1px solid #CBD5E1", borderRadius: "10px", background: "#fff", font: "inherit", fontSize: "13.5px", fontWeight: "600", color: "#0F172A", padding: "0 10px", outline: "0", width: "100%", boxSizing: "border-box" }} />
                </label>
              </div>
            </>}
          </React.Fragment>)}
        </div>
        {V.g?.bio?.fb?.noBio && <>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "12px", borderRadius: "10px", border: "1.5px dashed #CBD5E1", background: "#F8FAFC" }}>
            <span style={{ fontSize: "13px", fontWeight: "600", color: "#334155" }}>No biomass records available.</span>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <button onClick={V.g?.bio?.fb?.upload} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 12px", borderRadius: "8px", border: "1px solid #2E8B57", background: "#2E8B57", color: "#fff", fontSize: "12.5px", fontWeight: "600" }}>Upload Biomass CSV</button>
              <button onClick={V.g?.bio?.fb?.goMan} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 12px", borderRadius: "8px", border: "1px solid #CBD5E1", background: "#fff", color: "#334155", fontSize: "12.5px", fontWeight: "600" }}>Enter Feed Manually</button>
            </div>
          </div>
        </>}
      </div>
      <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: "12px", borderBottom: "1px solid #F1F5F9" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "14px", fontWeight: "700", color: "#0F172A" }}>
          <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#E8F4EC", color: "#1F6B43", border: "1px solid #CFE5D4", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>2</span>
          Tell us about your livestock
        </span>
        <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <span style={{ fontSize: "12px", fontWeight: "600", color: "#475569" }}>Livestock class</span>
          <select value={V.g?.bio?.fb?.cls?.v ?? ""} onChange={V.g?.bio?.fb?.cls?.set} style={{ height: "40px", border: "1px solid #CBD5E1", borderRadius: "10px", background: "#fff", font: "inherit", fontSize: "13.5px", fontWeight: "600", color: "#0F172A", padding: "0 10px", outline: "0", width: "100%", boxSizing: "border-box", cursor: "pointer" }}>
            {L(V.g?.bio?.fb?.cls?.opts).map((o, i126) => <React.Fragment key={i126}>
              <option value={o?.v ?? ""}>{S(o?.l)}</option>
            </React.Fragment>)}
          </select>
        </label>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)", gap: "8px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px", minWidth: "0" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#475569" }}>Animals</span>
            <div style={{ display: "flex", height: "40px", border: "1px solid #CBD5E1", borderRadius: "10px", overflow: "hidden", background: "#fff" }}>
              <button className="scp1b" onClick={V.g?.bio?.fb?.head?.dec} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", width: "34px", background: "#F4F9F5", color: "#1F6B43", fontSize: "18px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
              <input type="number" min="0" step="10" value={V.g?.bio?.fb?.head?.v ?? ""} onChange={V.g?.bio?.fb?.head?.set} style={{ flex: "1", minWidth: "0", border: "0", borderLeft: "1px solid #E2E8F0", borderRight: "1px solid #E2E8F0", outline: "0", background: "transparent", font: "inherit", fontSize: "15px", fontWeight: "700", color: "#0F172A", textAlign: "center" }} />
              <button className="scp1b" onClick={V.g?.bio?.fb?.head?.inc} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", width: "34px", background: "#F4F9F5", color: "#1F6B43", fontSize: "18px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
            </div>
          </div>
          <label style={{ display: "flex", flexDirection: "column", gap: "5px", minWidth: "0" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#475569" }}>Planning period</span>
            <select value={V.g?.bio?.fb?.per?.v ?? ""} onChange={V.g?.bio?.fb?.per?.set} style={{ height: "40px", border: "1px solid #CBD5E1", borderRadius: "10px", background: "#fff", font: "inherit", fontSize: "13.5px", fontWeight: "600", color: "#0F172A", padding: "0 10px", outline: "0", width: "100%", boxSizing: "border-box", cursor: "pointer" }}>
              {L(V.g?.bio?.fb?.per?.opts).map((o, i127) => <React.Fragment key={i127}>
                <option value={o?.v ?? ""}>{S(o?.l)}</option>
              </React.Fragment>)}
            </select>
          </label>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid #F1F5F9" }}>
        <button className="scp9" onClick={V.g?.bio?.fb?.advToggle} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", gap: "8px", padding: "12px 20px", color: "#334155", textAlign: "left" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", transform: `${A(V.g?.bio?.fb?.advRot)}`, transition: "transform .18s" }}><path d="m6 9 6 6 6-6" /></svg>
          <span style={{ flex: "1", fontSize: "13px", fontWeight: "600" }}>Advanced assumptions</span>
          <span style={{ height: "22px", padding: "0 8px", borderRadius: "999px", background: `${A(V.g?.bio?.fb?.advTagBg)}`, color: `${A(V.g?.bio?.fb?.advTagFg)}`, fontSize: "11px", fontWeight: "600", display: "inline-flex", alignItems: "center" }}>{S(V.g?.bio?.fb?.advTag)}</span>
        </button>
        {V.g?.bio?.fb?.advOpen && <>
          <div style={{ padding: "2px 20px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "12px", color: "#64748B", lineHeight: "1.45" }}>Optional. Sensible defaults are set for the livestock class you picked.</span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 8px" }}>
              {L(V.g?.bio?.fb?.adv).map((a, i128) => <React.Fragment key={i128}>
                <label style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11.5px", fontWeight: "600", color: "#334155", minWidth: "0" }}>
                    <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(a?.l)}</span>
                    {a?.ref && <>
                      <span style={{ position: "relative", display: "inline-flex", flexShrink: "0", fontWeight: "400", letterSpacing: "0" }}>
                        <button className="scp1c" onClick={a?.ref?.tog} aria-label="Info" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", color: "#94A3B8", display: "flex" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}>
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 11v5M12 8h.01" />
                          </svg>
                        </button>
                        {a?.ref?.open && <>
                          <span onClick={a?.ref?.off} style={{ position: "fixed", inset: "0", zIndex: "44", cursor: "default" }} />
                          <span style={{ position: "absolute", left: "-14px", top: "100%", paddingTop: "8px", zIndex: "45", width: "310px" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "11px", background: "#fff", color: "#1E293B", borderRadius: "12px", padding: "14px 16px", boxShadow: "0 0 0 1px rgba(15,23,42,.06),0 16px 40px rgba(15,23,42,.18)", whiteSpace: "normal", textAlign: "left", fontWeight: "400", letterSpacing: "0" }}>
                              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#64748B" }}>DEFINITION</span>
                                <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(a?.ref?.d)}</span>
                              </span>
                              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#2563EB" }}>REFERENCE</span>
                                <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(a?.ref?.r)}</span>
                                {a?.ref?.lk && <>
                                  <a href={a?.ref?.lk?.href} target="_blank" rel="noopener" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: "600", color: "#2563EB", textDecoration: "underline", textUnderlineOffset: "2px" }}>{S(a?.ref?.lk?.l)}{" ↗"}</a>
                                </>}
                              </span>
                              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#1F7A4A" }}>UMP+</span>
                                <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(a?.ref?.u)}</span>
                              </span>
                            </span>
                          </span>
                        </>}
                      </span>
                    </>}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", height: "34px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", padding: "0 9px", gap: "6px" }}>
                    <input type="number" min="0" step={a?.step} value={a?.v ?? ""} onChange={a?.set} style={{ flex: "1", minWidth: "0", border: "0", outline: "0", background: "transparent", font: "inherit", fontSize: "13px", fontWeight: "600", color: "#0F172A" }} />
                    <span style={{ fontSize: "10.5px", fontWeight: "500", color: "#94A3B8", whiteSpace: "nowrap" }}>{S(a?.u)}</span>
                  </div>
                  <span style={{ fontSize: "10.5px", color: "#94A3B8" }}>{S(a?.hint)}</span>
                </label>
              </React.Fragment>)}
            </div>
            <button onClick={V.g?.bio?.fb?.advReset} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", alignSelf: "flex-start", fontSize: "12.5px", fontWeight: "600", color: "#1F6B43" }}>Reset to defaults</button>
          </div>
        </>}
      </div>
      <div style={{ padding: "16px 20px 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <button className="scp1d scp1e" onClick={V.g?.bio?.fb?.calc} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: `${A(V.g?.bio?.fb?.btnCur)}`, height: "54px", width: "100%", borderRadius: "12px", background: `${A(V.g?.bio?.fb?.btnBg)}`, color: "#fff", fontSize: "15.5px", fontWeight: "700", letterSpacing: ".01em", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", boxShadow: "0 6px 16px rgba(46,139,87,.28)", transition: "background .15s,transform .1s" }}>
          {S(V.g?.bio?.fb?.btn)}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </button>
        {V.g?.bio?.fb?.dirty && <>
          <span style={{ fontSize: "12px", fontWeight: "500", color: "#B45309", textAlign: "center" }}>Inputs changed. Recalculate to update the results.</span>
        </>}
      </div>
    </div>
    </>
  );
}
