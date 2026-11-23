import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';

export default function GUpw({ V }) {
  return (
    <>
    <div onClick={V.g?.upw?.close} style={{ position: "fixed", inset: "0", zIndex: "70", background: "rgba(10,59,43,.45)", backdropFilter: "blur(3px)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "24px 16px", overflowY: "auto" }}>
      <div onClick={V.g?.upw?.stop} style={{ width: "min(760px,100%)", background: "#fff", borderRadius: "18px", boxShadow: "0 24px 60px rgba(10,59,43,.3)", display: "flex", flexDirection: "column", margin: "auto 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "18px 22px", borderBottom: "1px solid #EEF2F6" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A" }}>Upload data</span>
            <span style={{ fontSize: "12.5px", color: "#64748B" }}>CSV, XLS or XLSX</span>
          </div>
          <button onClick={V.g?.upw?.close} title="Close" style={{ appearance: "none", border: "0", margin: "0", padding: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "50%", background: "#F1F5F9", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
        </div>
        {V.g?.upw?.form && <>
          <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#043C2C", color: "#fff", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>1</span>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A" }}>Data type</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", paddingLeft: "34px" }}>
                <select className="scpz" value={V.g?.upw?.type ?? ""} onChange={V.g?.upw?.setType} style={{ height: "40px", flex: "1 1 260px", minWidth: "0", border: "1px solid #CBD5E1", borderRadius: "9px", background: "#fff", font: "inherit", fontSize: "13.5px", fontWeight: "500", color: "#0F172A", padding: "0 12px", outline: "0", cursor: "pointer" }}>
                  {L(V.g?.upw?.typeOpts).map((o, i95) => <React.Fragment key={i95}>
                    <option value={o?.v ?? ""}>{S(o?.label)}</option>
                  </React.Fragment>)}
                </select>
                {V.g?.upw?.s2 && <>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", flex: "1 1 220px", minWidth: "0" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: `${A(V.g?.upw?.tibg)}`, color: `${A(V.g?.upw?.tifg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={V.g?.upw?.tic} /></svg></span>
                    <span style={{ fontSize: "12.5px", color: "#475569", textWrap: "pretty" }}>{S(V.g?.upw?.tdesc)}</span>
                  </span>
                </>}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", opacity: `${A(V.g?.upw?.s2Op)}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: `${A(V.g?.upw?.n2bg)}`, color: "#fff", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>2</span>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A" }}>File</span>
              </div>
              {V.g?.upw?.s2 && <>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "34px" }}>
                  {V.g?.upw?.noFile && <>
                    <label className="scp10" style={{ border: "1.5px dashed #94D3BC", borderRadius: "12px", background: "#F6FBF8", padding: "22px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", cursor: "pointer", textAlign: "center" }}>
                      <input type="file" accept=".csv,.xls,.xlsx" onChange={V.g?.upw?.onFile} style={{ display: "none" }} />
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#12855F" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" /></svg>
                      <span style={{ fontSize: "13.5px", fontWeight: "600", color: "#0F172A" }}>Drop your file here or browse</span>
                      <span style={{ fontSize: "12px", color: "#64748B" }}>CSV, XLS or XLSX · up to 10 MB</span>
                    </label>
                  </>}
                  {V.g?.upw?.hasFile && <>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px", border: "1px solid #E2E8F0", borderRadius: "12px", background: "#F8FAFC" }}>
                      <span style={{ width: "36px", height: "36px", borderRadius: "9px", background: "#E8F6EF", color: "#12855F", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg></span>
                      <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#0F172A", overflowWrap: "anywhere" }}>{S(V.g?.upw?.file)}</span>
                        <span style={{ fontSize: "12px", color: "#64748B" }}>{S(V.g?.upw?.fileMeta)}</span>
                      </div>
                      <button onClick={V.g?.upw?.removeFile} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "38px", padding: "0 16px", borderRadius: "9px", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", height: "32px", padding: "0 12px", border: "1px solid #CBD5E1", background: "#fff", color: "#334155" }}>Replace</button>
                    </div>
                  </>}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px 16px", flexWrap: "wrap", fontSize: "12.5px" }}>
                    <span style={{ color: "#64748B", flex: "1 1 220px", minWidth: "0", textWrap: "pretty" }}>{S(V.g?.upw?.req)}</span>
                    <button onClick={V.g?.upw?.dlSample} style={{ appearance: "none", border: "0", background: "none", padding: "0", margin: "0", font: "inherit", fontWeight: "600", color: "#12855F", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 4v12M7 11l5 5 5-5M5 20h14" /></svg>
                      Sample CSV
                    </button>
                    <button onClick={V.g?.upw?.dlTpl} style={{ appearance: "none", border: "0", background: "none", padding: "0", margin: "0", font: "inherit", fontWeight: "600", color: "#12855F", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 4v12M7 11l5 5 5-5M5 20h14" /></svg>
                      Template
                    </button>
                  </div>
                </div>
              </>}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", opacity: `${A(V.g?.upw?.s3Op)}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: `${A(V.g?.upw?.n3bg)}`, color: "#fff", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>3</span>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A" }}>Match columns</span>
              </div>
              {V.g?.upw?.s3 && <>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "34px", minWidth: "0" }}>
                  {V.g?.upw?.useSaved && <>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 14px", borderRadius: "10px", background: "#E8F6EF", color: "#0B6B4B", fontSize: "12.5px", fontWeight: "500", flexWrap: "wrap" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", flexShrink: "0" }}><path d="M5 12l5 5 9-10" /></svg>
                      <span style={{ flex: "1" }}>{S(V.g?.upw?.savedTxt)}</span>
                      <button onClick={V.g?.upw?.editMap} style={{ appearance: "none", border: "0", background: "none", padding: "0", margin: "0", font: "inherit", fontWeight: "700", color: "#0B6B4B", cursor: "pointer", textDecoration: "underline" }}>Edit mapping</button>
                    </div>
                  </>}
                  {V.g?.upw?.showMap && <>
                    <span style={{ fontSize: "12.5px", color: "#475569" }}>{S(V.g?.upw?.autoNote)}{" Columns left on Skip are ignored."}</span>
                    <div style={{ border: "1px solid #E2E8F0", borderRadius: "12px", overflow: "hidden" }}>
                      <div style={{ overflowX: "auto" }}>
                        <div style={{ minWidth: "500px" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "minmax(110px,1fr) minmax(100px,1fr) 16px minmax(170px,1.4fr)", gap: "12px", padding: "9px 14px", background: "#F8FAFC", borderBottom: "1px solid #E2E8F0", fontSize: "11px", fontWeight: "600", letterSpacing: ".05em", textTransform: "uppercase", color: "#64748B" }}>
                            <span>Your column</span>
                            <span>Sample values</span>
                            <span />
                            <span>UMP+ field</span>
                          </div>
                          {L(V.g?.upw?.rows).map((r, i96) => <React.Fragment key={i96}>
                            <div style={{ display: "grid", gridTemplateColumns: "minmax(110px,1fr) minmax(100px,1fr) 16px minmax(170px,1.4fr)", gap: "12px", padding: "10px 14px", borderBottom: "1px solid #F1F5F9", alignItems: "center", background: `${A(r?.rbg)}` }}>
                              <span style={{ fontSize: "13px", fontWeight: "600", color: `${A(r?.cc)}`, minWidth: "0", overflowWrap: "anywhere" }}>{S(r?.col)}</span>
                              <span style={{ fontSize: "12px", color: "#64748B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: "0" }}>{S(r?.smp)}</span>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                              <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                                <select value={r?.val ?? ""} onChange={r?.set} style={{ height: "34px", width: "100%", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", font: "inherit", fontSize: "12.5px", fontWeight: "500", color: "#0F172A", padding: "0 8px", outline: "0", cursor: "pointer" }}>
                                  {L(r?.opts).map((o, i97) => <React.Fragment key={i97}>
                                    <option value={o?.v ?? ""}>{S(o?.label)}</option>
                                  </React.Fragment>)}
                                </select>
                                <div style={{ display: "flex", alignItems: "center", gap: "6px 8px", flexWrap: "wrap" }}>
                                  <span style={{ fontSize: "11px", fontWeight: "600", padding: "2px 8px", borderRadius: "999px", background: `${A(r?.bbg)}`, color: `${A(r?.bfg)}` }}>{S(r?.badge)}</span>
                                  {r?.auto && <>
                                    <span style={{ fontSize: "11px", fontWeight: "500", color: "#2563EB" }}>Auto-matched</span>
                                  </>}
                                </div>
                              </div>
                            </div>
                          </React.Fragment>)}
                        </div>
                      </div>
                    </div>
                    {V.g?.upw?.unmatched && <>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                        <span style={{ fontSize: "12px", fontWeight: "600", color: "#334155" }}>No column for:</span>
                        {L(V.g?.upw?.unmatched).map((m, i98) => <React.Fragment key={i98}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 10px", borderRadius: "8px", border: `1px solid ${A(m?.bd)}`, background: `${A(m?.bg)}`, fontSize: "12px", color: `${A(m?.fg)}` }}>
                            <b style={{ fontWeight: "700" }}>{S(m?.l)}</b>
                            {S(m?.t)}
                          </span>
                        </React.Fragment>)}
                      </div>
                    </>}
                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "stretch" }}>
                      {V.g?.upw?.units && <>
                        <div style={{ flex: "1 1 240px", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "12px 14px", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#0F172A" }}>Biomass unit</span>
                          <div style={{ display: "flex", gap: "2px", padding: "2px", borderRadius: "9px", background: "#F1F5F9" }}>
                            {L(V.g?.upw?.units).map((un, i99) => <React.Fragment key={i99}>
                              <button onClick={un?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "30px", padding: "0 12px", borderRadius: "7px", fontSize: "12px", fontWeight: "600", background: `${A(un?.bg)}`, color: `${A(un?.fg)}`, boxShadow: `${A(un?.sh)}` }}>{S(un?.l)}</button>
                            </React.Fragment>)}
                          </div>
                          <span style={{ fontSize: "11.5px", color: "#64748B" }}>{S(V.g?.upw?.unitNote)}</span>
                        </div>
                      </>}
                      <button onClick={V.g?.upw?.toggleSave} style={{ flex: "1 1 240px", appearance: "none", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "12px 14px", background: "#fff", display: "flex", alignItems: "center", gap: "10px", color: "#0F172A" }}>
                        <span style={{ width: "20px", height: "20px", borderRadius: "6px", border: `1.5px solid ${A(V.g?.upw?.sbd)}`, background: `${A(V.g?.upw?.sbg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", boxSizing: "border-box" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" style={{ strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12l5 5 9-10" /></svg></span>
                        <span style={{ fontSize: "12.5px", fontWeight: "600" }}>Save this mapping for next time</span>
                      </button>
                    </div>
                  </>}
                </div>
              </>}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "10px", padding: "14px 22px", borderTop: "1px solid #EEF2F6", flexWrap: "wrap" }}>
            <button onClick={V.g?.upw?.close} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "38px", padding: "0 16px", borderRadius: "9px", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", border: "1px solid #CBD5E1", background: "#fff", color: "#334155" }}>Cancel</button>
            <button onClick={V.g?.upw?.imp?.go} title={V.g?.upw?.imp?.tip} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "38px", padding: "0 16px", borderRadius: "9px", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", border: "0", background: `${A(V.g?.upw?.imp?.bg)}`, color: "#fff", cursor: `${A(V.g?.upw?.imp?.cur)}` }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 16V4M7 9l5-5 5 5M5 20h14" /></svg>
              {S(V.g?.upw?.imp?.l)}
            </button>
          </div>
        </>}
        {V.g?.upw?.done && <>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px", padding: "36px 22px 28px" }}>
            <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#E8F6EF", color: "#12855F", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12l5 5 9-10" /></svg></span>
            <span style={{ fontSize: "19px", fontWeight: "700", color: "#0F172A" }}>{S(V.g?.upw?.doneT)}</span>
            <span style={{ fontSize: "13px", color: "#475569", overflowWrap: "anywhere" }}>{S(V.g?.upw?.doneS)}</span>
            {V.g?.upw?.doneSaved && <>
              <span style={{ fontSize: "12.5px", color: "#0B6B4B", background: "#E8F6EF", padding: "8px 14px", borderRadius: "10px", maxWidth: "480px", textWrap: "pretty" }}>{S(V.g?.upw?.doneSaved)}</span>
            </>}
            <div style={{ display: "flex", gap: "10px", marginTop: "10px", flexWrap: "wrap", justifyContent: "center" }}>
              <button onClick={V.g?.upw?.again} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "38px", padding: "0 16px", borderRadius: "9px", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", border: "1px solid #CBD5E1", background: "#fff", color: "#334155" }}>Upload another file</button>
              <button onClick={V.g?.upw?.close} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "38px", padding: "0 16px", borderRadius: "9px", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", border: "1px solid #043C2C", background: "#043C2C", color: "#fff" }}>Done</button>
            </div>
          </div>
        </>}
      </div>
    </div>
    </>
  );
}
