import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';

export default function GDv({ V }) {
  return (
    <>
    <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "10px 12px" }}>
      <div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", alignItems: "center", gap: "8px", height: "36px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", background: "#fff" }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input value={V.g?.dv?.q ?? ""} onChange={V.g?.dv?.setQ} placeholder="Search devices…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13px", background: "transparent" }} />
      </div>
      <div style={{ position: "relative" }}>
        <button className="scp6 scpt" onClick={V.g?.dv?.cat?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 12px", borderRadius: "8px", border: `1px solid ${A(V.g?.dv?.cat?.bd)}`, background: `${A(V.g?.dv?.cat?.bg)}`, fontSize: "13px", fontWeight: "500", color: "#0f172a", display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" /></svg>
          {S(V.g?.dv?.cat?.label)}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
        </button>
        {V.g?.dv?.cat?.open && <>
          <div style={{ position: "absolute", left: "0", top: "42px", zIndex: "40", width: "280px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 18px 44px rgba(15,23,42,.16)", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "#f8fafc", borderBottom: "1px solid #f1f5f9" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" /></svg>
                Category
              </span>
              <button className="scp6 scpt" onClick={V.g?.dv?.cat?.clear} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", fontSize: "12px", fontWeight: "500", color: "#0e7490", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>{S(V.g?.dv?.cat?.clearLabel)}</button>
            </div>
            <div style={{ padding: "10px 12px", borderBottom: "1px solid #f1f5f9" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" style={{ strokeWidth: "2", strokeLinecap: "round" }}>
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <input value={V.g?.dv?.cat?.q ?? ""} onChange={V.g?.dv?.cat?.setQ} placeholder="Search category…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13px" }} />
              </div>
            </div>
            <div style={{ padding: "6px", display: "flex", flexDirection: "column", gap: "2px" }}>
              {L(V.g?.dv?.cat?.items).map((o, i136) => <React.Fragment key={i136}>
                <button className="scp1f scp6" onClick={o?.toggle} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", padding: "8px 10px", borderRadius: "8px", background: `${A(o?.bg)}`, textAlign: "left", color: "#0f172a", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                  <span style={{ width: "16px", height: "16px", borderRadius: "4px", border: `1.5px solid ${A(o?.cbd)}`, background: `${A(o?.cbg)}`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "11px", fontWeight: "700", flexShrink: "0" }}>{S(o?.tick)}</span>
                  <span style={{ display: "inline-block", width: `${A(o?.iw)}`, height: `${A(o?.ih)}`, borderRadius: "5px", background: `${A(o?.ibg)}`, flexShrink: "0", backgroundImage: `url(${A(o?.img)})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                  <span style={{ flex: "1", fontSize: "14px", fontWeight: `${A(o?.fw)}` }}>{S(o?.label)}</span>
                  <span style={{ fontSize: "11px", fontWeight: "600", padding: "1px 8px", borderRadius: "999px", background: "#f1f5f9", color: "#475569" }}>{S(o?.n)}</span>
                </button>
              </React.Fragment>)}
            </div>
          </div>
        </>}
      </div>
      <div style={{ position: "relative" }}>
        <button className="scp6 scpt" onClick={V.g?.dv?.prov?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 12px", borderRadius: "8px", border: `1px solid ${A(V.g?.dv?.prov?.bd)}`, background: `${A(V.g?.dv?.prov?.bg)}`, fontSize: "13px", fontWeight: "500", color: "#0f172a", display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M16 4v4M10 10v4M18 16v4" /></svg>
          {S(V.g?.dv?.prov?.label)}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
        </button>
        {V.g?.dv?.prov?.open && <>
          <div style={{ position: "absolute", left: "0", top: "42px", zIndex: "40", width: "280px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 18px 44px rgba(15,23,42,.16)", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "#f8fafc", borderBottom: "1px solid #f1f5f9" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M16 4v4M10 10v4M18 16v4" /></svg>
                Provider
              </span>
              <button className="scp6 scpt" onClick={V.g?.dv?.prov?.clear} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", fontSize: "12px", fontWeight: "500", color: "#0e7490", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>{S(V.g?.dv?.prov?.clearLabel)}</button>
            </div>
            <div style={{ padding: "10px 12px", borderBottom: "1px solid #f1f5f9" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" style={{ strokeWidth: "2", strokeLinecap: "round" }}>
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <input value={V.g?.dv?.prov?.q ?? ""} onChange={V.g?.dv?.prov?.setQ} placeholder="Search provider…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13px" }} />
              </div>
            </div>
            <div style={{ padding: "6px", display: "flex", flexDirection: "column", gap: "2px" }}>
              {L(V.g?.dv?.prov?.items).map((o, i137) => <React.Fragment key={i137}>
                <button className="scp1f scp6" onClick={o?.toggle} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", padding: "8px 10px", borderRadius: "8px", background: `${A(o?.bg)}`, textAlign: "left", color: "#0f172a", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                  <span style={{ width: "16px", height: "16px", borderRadius: "4px", border: `1.5px solid ${A(o?.cbd)}`, background: `${A(o?.cbg)}`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "11px", fontWeight: "700", flexShrink: "0" }}>{S(o?.tick)}</span>
                  <span style={{ display: "inline-block", width: `${A(o?.iw)}`, height: `${A(o?.ih)}`, borderRadius: "5px", background: `${A(o?.ibg)}`, flexShrink: "0", backgroundImage: `url(${A(o?.img)})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                  <span style={{ flex: "1", fontSize: "14px", fontWeight: `${A(o?.fw)}` }}>{S(o?.label)}</span>
                  <span style={{ fontSize: "11px", fontWeight: "600", padding: "1px 8px", borderRadius: "999px", background: "#f1f5f9", color: "#475569" }}>{S(o?.n)}</span>
                </button>
              </React.Fragment>)}
            </div>
          </div>
        </>}
      </div>
      <div style={{ display: "flex", border: "1px solid #E2E8F0", borderRadius: "8px", overflow: "hidden" }}>
        <button className="scp6 scpt" onClick={V.g?.dv?.gridGo} title="Grid" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", width: "38px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", background: `${A(V.g?.dv?.gridBg)}`, color: `${A(V.g?.dv?.gridFg)}`, transition: "background .15s,border-color .15s,color .15s,transform .1s" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" /></svg></button>
        <button className="scp6 scpt" onClick={V.g?.dv?.tableGo} title="Table" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", width: "38px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", background: `${A(V.g?.dv?.tableBg)}`, color: `${A(V.g?.dv?.tableFg)}`, transition: "background .15s,border-color .15s,color .15s,transform .1s" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 5h18v14H3zM3 10h18M3 15h18M9 5v14" /></svg></button>
        <button className="scp2" onClick={V.g?.dv?.mapGo} title="Map of all devices" style={{ appearance: "none", border: "0", borderLeft: "1px solid #E2E8F0", font: "inherit", margin: "0", cursor: "pointer", width: "38px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", color: "#334155" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 7zM9 4v13M15 7v12.5" /></svg></button>
      </div>
    </div>
    {V.dm?.show && <>
      <div style={{ position: "relative", height: "calc(100vh - 230px)", minHeight: "520px", background: "#fff", borderRadius: "14px", border: "1px solid #E2E8F0", boxShadow: "0 1px 2px rgba(15,23,42,.04)", display: "flex", overflow: "hidden" }}>
        <div style={{ width: "300px", flexShrink: "0", display: "flex", flexDirection: "column", borderRight: "1px solid #E2E8F0", background: "#fff", minHeight: "0" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", padding: "14px 14px 12px", borderBottom: "1px solid #EEF2F6" }}>
            <span style={{ fontSize: "13px", color: "#334155", fontWeight: "600" }}>{S(V.dm?.count)}</span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <button onClick={V.dm?.toggleAll} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0 4px", cursor: "pointer", fontSize: "12.5px", fontWeight: "600", color: "#0B7F7E" }}>{S(V.dm?.allLabel)}</button>
              <button className="scpw" onClick={V.dm?.close} title="Close map" style={{ appearance: "none", border: "0", background: "#F1F5F9", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "28px", height: "28px", borderRadius: "50%", color: "#475569", fontSize: "16px", lineHeight: "1" }}>×</button>
            </span>
          </div>
          <div style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: "10px", display: "flex", flexDirection: "column", gap: "8px", background: "#F8FAFC" }}>
            {L(V.dm?.items).map((i, i138) => <React.Fragment key={i138}>
              <button className="scph" onClick={i?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", border: "1px solid #E2E8F0", borderRadius: "10px", background: "#fff", opacity: `${A(i?.op)}`, boxShadow: "0 1px 2px rgba(15,23,42,.04)" }}>
                <span style={{ width: "18px", height: "18px", borderRadius: "4px", border: `1.5px solid ${A(i?.cbd)}`, background: `${A(i?.cbg)}`, color: "#fff", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>{S(i?.tick)}</span>
                <span style={{ width: "34px", height: "34px", borderRadius: "9px", flexShrink: "0", backgroundImage: `url(${A(i?.icon)})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(i?.name)}</span>
                  <span style={{ fontSize: "11px", color: "#475569", fontFamily: "ui-monospace,Menlo,monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(i?.serial)}</span>
                </span>
              </button>
            </React.Fragment>)}
          </div>
        </div>
        <div style={{ flex: "1", minWidth: "0", position: "relative", background: "#1e293b" }}><div ref={V.dm?.ref} style={{ position: "absolute", inset: "0" }} /></div>
      </div>
    </>}
    {V.g?.dv?.grid && <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "14px" }}>
        {L(V.g?.dv?.cards).map((c, i139) => <React.Fragment key={i139}>
          <div className="scp1g" style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", overflow: "hidden", boxShadow: "0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column", transition: "box-shadow .2s,transform .2s" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", padding: "16px 14px 8px 16px" }}>
              <span style={{ width: "36px", height: "36px", borderRadius: "10px", flexShrink: "0", backgroundImage: `url(${A(c?.icon)})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
              <div style={{ flex: "1", minWidth: "0", fontWeight: "700", fontSize: "14px", color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(c?.name)}</div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: "700", letterSpacing: ".04em", padding: "3px 9px", borderRadius: "999px", background: `${A(c?.lbg)}`, color: `${A(c?.lfg)}` }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(c?.ldot)}` }} />
                {S(c?.lt)}
              </span>
              <div style={{ position: "relative", flexShrink: "0" }}>
                <button className="scp1f" onClick={c?.menuToggle} title="More" style={{ appearance: "none", border: "0", background: `${A(c?.menuBg)}`, font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "28px", height: "28px", borderRadius: "50%", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5" r="1.6" />
                    <circle cx="12" cy="12" r="1.6" />
                    <circle cx="12" cy="19" r="1.6" />
                  </svg>
                </button>
                {c?.menuOpen && <>
                  <div style={{ position: "fixed", inset: "0", zIndex: "39" }} onClick={c?.menuToggle} />
                  <div style={{ position: "absolute", right: "0", top: "34px", zIndex: "40", minWidth: "190px", background: "#fff", borderRadius: "10px", boxShadow: "0 12px 32px rgba(15,23,42,.2)", padding: "6px 0", overflow: "hidden" }}>
                    <button className="scp2" onClick={c?.edit} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", width: "100%", padding: "11px 16px", fontSize: "14px", color: "#0F172A", textAlign: "left" }}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></svg>
                      Edit
                    </button>
                    <button className="scp2" onClick={c?.viewData} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", width: "100%", padding: "11px 16px", fontSize: "14px", color: "#0F172A", textAlign: "left" }}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 5h18v14H3zM3 10h18M3 15h18M9 5v14" /></svg>
                      View Data
                    </button>
                    <button className="scp2" onClick={c?.viewMap} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", width: "100%", padding: "11px 16px", fontSize: "14px", color: "#0F172A", textAlign: "left" }}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" /></svg>
                      Locate on Map
                    </button>
                  </div>
                </>}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", padding: "0 16px" }}>
              <span style={{ fontSize: "12px", fontWeight: "500", padding: "3px 12px", borderRadius: "999px", border: "1px solid #CBD5E1", background: "#fff", color: "#334155", whiteSpace: "nowrap" }}>{S(c?.type)}</span>
              {c?.isSoil && <>
                <label style={{ display: "flex", alignItems: "center", gap: "6px", height: "30px", padding: "0 6px 0 10px", border: "1px solid #CBD5E1", borderRadius: "8px", fontSize: "12px", color: "#475569" }}>
                  Depth
                  <select value={c?.depth ?? ""} onChange={c?.setDepth} style={{ border: "0", outline: "0", background: "transparent", font: "inherit", fontSize: "12px", fontWeight: "700", color: "#0F172A", cursor: "pointer" }}>
                    <option value="10 cm">10 cm</option>
                    <option value="30 cm">30 cm</option>
                    <option value="60 cm">60 cm</option>
                    <option value="90 cm">90 cm</option>
                  </select>
                </label>
              </>}
            </div>
            <div style={{ padding: "8px 16px 10px", fontSize: "12px", color: "#64748B", fontFamily: "ui-monospace,Menlo,monospace" }}>{S(c?.serial)}</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "8px", padding: "0 16px" }}>
              {L(c?.tiles).map((t, i140) => <React.Fragment key={i140}>
                <div style={{ background: "#F3F5F4", borderRadius: "10px", padding: "9px 10px", display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: "600", color: "#334155", whiteSpace: "nowrap", minWidth: "0", overflow: "hidden" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={t?.c} style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={t?.p} /></svg>
                    {S(t?.l)}
                  </span>
                  <span style={{ display: "flex", alignItems: "baseline", gap: "3px", whiteSpace: "nowrap" }}>
                    <span style={{ fontSize: "18px", fontWeight: "700", color: "#0F172A" }}>{S(t?.v)}</span>
                    <span style={{ fontSize: "11px", color: "#64748B" }}>{S(t?.u)}</span>
                  </span>
                  {t?.sub && <>
                    <span style={{ fontSize: "11px", color: "#64748B" }}>{S(t?.sub)}</span>
                  </>}
                </div>
              </React.Fragment>)}
            </div>
            <div style={{ padding: "12px 16px 14px", fontSize: "12.5px", color: "#475569" }}>{S(c?.lastS)}</div>
            <button className="scpx" onClick={c?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", margin: "auto 0 0", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", height: "42px", background: "#0F7F8E", color: "#fff", fontSize: "13.5px", fontWeight: "700", transition: "background .15s" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 17l6-6 4 4 8-8" /></svg>
              Launch Dashboard →
            </button>
          </div>
        </React.Fragment>)}
      </div>
    </>}
    {V.g?.dv?.table && <>
      <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", overflow: "auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(200px,1.6fr) 100px 90px minmax(330px,2.6fr) 150px 90px 124px", minWidth: "1120px", gap: "12px", padding: "10px 20px", fontSize: "11px", fontWeight: "600", letterSpacing: ".05em", textTransform: "uppercase", color: "#94a3b8", background: "#fafbfc", borderBottom: "1px solid #EEF2F6" }}>
          <span>Device</span>
          <span>Type</span>
          <span>Provider</span>
          <span>Latest readings</span>
          <span>Last reading</span>
          <span>Status</span>
          <span style={{ textAlign: "right" }}>Actions</span>
        </div>
        {L(V.g?.dv?.cards).map((d, i141) => <React.Fragment key={i141}>
          <div className="scp1h" style={{ display: "grid", gridTemplateColumns: "minmax(200px,1.6fr) 100px 90px minmax(330px,2.6fr) 150px 90px 124px", minWidth: "1120px", gap: "12px", padding: "10px 20px", borderBottom: "1px solid #f1f5f9", alignItems: "center", fontSize: "13px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ display: "inline-block", width: "28px", height: "28px", borderRadius: "8px", backgroundImage: `url(${A(d?.icon)})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
              <div>
                <div style={{ fontWeight: "500" }}>{S(d?.name)}</div>
                <div style={{ fontSize: "12px", color: "#94a3b8" }}>{S(d?.serial)}</div>
              </div>
            </div>
            <span>{S(d?.type)}</span>
            <span>{S(d?.provider)}</span>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", minWidth: "0" }}>
              {d?.isSoil && <>
                <select value={d?.depth ?? ""} onChange={d?.setDepth} title="Depth" style={{ height: "28px", border: "1px solid #CBD5E1", borderRadius: "7px", background: "#fff", font: "inherit", fontSize: "12px", fontWeight: "600", color: "#0F172A", padding: "0 6px", outline: "0", cursor: "pointer" }}>
                  <option>10 cm</option>
                  <option>30 cm</option>
                  <option>60 cm</option>
                  <option>90 cm</option>
                </select>
              </>}
              {L(d?.tiles).map((t, i142) => <React.Fragment key={i142}>
                <span style={{ display: "inline-flex", alignItems: "baseline", gap: "4px", height: "28px", padding: "0 9px", borderRadius: "7px", background: "#F8FAFC", border: "1px solid #EEF2F6", whiteSpace: "nowrap", lineHeight: "26px" }}>
                  <span style={{ fontSize: "11px", color: "#64748B" }}>{S(t?.l)}</span>
                  <b style={{ fontSize: "13px", fontWeight: "700", color: `${A(t?.c)}`, fontVariantNumeric: "tabular-nums" }}>{S(t?.v)}</b>
                  <span style={{ fontSize: "11px", color: "#64748B" }}>{S(t?.u)}</span>
                </span>
              </React.Fragment>)}
            </div>
            <span style={{ color: "#64748B", fontSize: "12.5px" }}>{S(d?.last)}</span>
            <span style={{ display: "flex", alignItems: "center", gap: "7px", color: `${A(d?.st?.fg)}` }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: `${A(d?.st?.dot)}` }} />
              {S(d?.status)}
            </span>
            <span style={{ justifySelf: "end", display: "flex", gap: "6px" }}>
              <button className="scp1i scp6" onClick={d?.edit} title="Edit device" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", border: "1px solid #E2E8F0", background: "#fff", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4" /></svg></button>
              <button className="scp1j scp6" onClick={d?.go} title="Launch dashboard" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", background: "#16A34A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "background .15s,transform .1s" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M5 15c-1.5 1.3-2 4.5-2 6 1.5 0 4.7-.5 6-2 .8-.9.8-2.3-.1-3.1-.9-.9-2.2-.9-3.1-.1zM12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
                  <path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
                </svg>
              </button>
              <button className="scp2" onClick={d?.viewMap} title="Device map" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", border: "1px solid #E2E8F0", background: "#fff", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </button>
            </span>
          </div>
        </React.Fragment>)}
      </div>
    </>}
    {V.g?.dv?.empty && <>
      <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "40px", textAlign: "center", color: "#64748B" }}>No devices match these filters.</div>
    </>}
    {V.g?.dv?.paged && <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "4px", padding: "6px 0" }}>
        <button className="scp1f scp6" onClick={V.g?.dv?.prev} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>‹</button>
        {L(V.g?.dv?.pages).map((pg, i143) => <React.Fragment key={i143}>
          <button className="scp6 scpt" onClick={pg?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "50%", fontSize: "13px", fontWeight: "500", background: `${A(pg?.bg)}`, color: `${A(pg?.fg)}`, transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>{S(pg?.n)}</button>
        </React.Fragment>)}
        <button className="scp1f scp6" onClick={V.g?.dv?.next} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>›</button>
      </div>
    </>}
    </>
  );
}
