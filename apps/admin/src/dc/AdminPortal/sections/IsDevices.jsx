import React from 'react';
import { S, L, A, C } from '../../runtime.js';


export default function IsDevices({ V }) {
  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ flexShrink: "0", background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "12px 20px", minHeight: "0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px 14px", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 auto" }}>
          <h1 style={{ margin: "0", fontSize: "19px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.2", color: "#0F172A" }}>Devices</h1>
          <p style={{ margin: "2px 0 0", color: "#475569", fontSize: "13px" }}>Manage devices across your farms.</p>
        </div>
        <div style={{ display: "flex", flexShrink: "0", gap: "8px", alignItems: "center" }} />
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap", background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "10px 12px" }}>
        <div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", alignItems: "center", gap: "8px", height: "36px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", background: "#fff" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}>
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input value={V.dv?.q ?? ""} onChange={V.dv?.setQ} placeholder="Search devices…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13px", background: "transparent" }} />
        </div>
        <select value={V.devFarm ?? ""} onChange={V.setDevFarm} style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", padding: "0 10px", background: "#fff", font: "inherit", fontSize: "13px", color: "#0f172a" }}>
          <option value="">All farms</option>
          {L(V.farms).map((f, i28) => <React.Fragment key={i28}>
            <option value={f?.name ?? ""}>{S(f?.name)}</option>
          </React.Fragment>)}
        </select>
        <div style={{ position: "relative" }}>
          <button onClick={V.dv?.cat?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 12px", borderRadius: "8px", border: `1px solid ${A(V.dv?.cat?.bd)}`, background: `${A(V.dv?.cat?.bg)}`, fontSize: "13px", fontWeight: "500", color: "#0f172a", display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" /></svg>
            {S(V.dv?.cat?.label)}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
          </button>
          {V.dv?.cat?.open && <>
            <div style={{ position: "absolute", left: "0", top: "42px", zIndex: "40", width: "280px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 18px 44px rgba(15,23,42,.16)", overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "#f8fafc", borderBottom: "1px solid #f1f5f9" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" /></svg>
                  Category
                </span>
                <button onClick={V.dv?.cat?.clear} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", fontSize: "12px", fontWeight: "500", color: "#0e7490" }}>{S(V.dv?.cat?.clearLabel)}</button>
              </div>
              <div style={{ padding: "10px 12px", borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: "8px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" style={{ strokeWidth: "2", strokeLinecap: "round" }}>
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                  <input value={V.dv?.cat?.q ?? ""} onChange={V.dv?.cat?.setQ} placeholder="Search category…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13px" }} />
                </div>
              </div>
              <div style={{ padding: "6px", display: "flex", flexDirection: "column", gap: "2px" }}>
                {L(V.dv?.cat?.items).map((o, i29) => <React.Fragment key={i29}>
                  <button className="scpb" onClick={o?.toggle} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", padding: "8px 10px", borderRadius: "8px", background: `${A(o?.bg)}`, textAlign: "left", color: "#0f172a" }}>
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
          <button onClick={V.dv?.prov?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 12px", borderRadius: "8px", border: `1px solid ${A(V.dv?.prov?.bd)}`, background: `${A(V.dv?.prov?.bg)}`, fontSize: "13px", fontWeight: "500", color: "#0f172a", display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M16 4v4M10 10v4M18 16v4" /></svg>
            {S(V.dv?.prov?.label)}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
          </button>
          {V.dv?.prov?.open && <>
            <div style={{ position: "absolute", left: "0", top: "42px", zIndex: "40", width: "280px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 18px 44px rgba(15,23,42,.16)", overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "#f8fafc", borderBottom: "1px solid #f1f5f9" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M16 4v4M10 10v4M18 16v4" /></svg>
                  Provider
                </span>
                <button onClick={V.dv?.prov?.clear} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", fontSize: "12px", fontWeight: "500", color: "#0e7490" }}>{S(V.dv?.prov?.clearLabel)}</button>
              </div>
              <div style={{ padding: "10px 12px", borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: "8px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" style={{ strokeWidth: "2", strokeLinecap: "round" }}>
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                  <input value={V.dv?.prov?.q ?? ""} onChange={V.dv?.prov?.setQ} placeholder="Search provider…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13px" }} />
                </div>
              </div>
              <div style={{ padding: "6px", display: "flex", flexDirection: "column", gap: "2px" }}>
                {L(V.dv?.prov?.items).map((o, i30) => <React.Fragment key={i30}>
                  <button className="scpb" onClick={o?.toggle} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", padding: "8px 10px", borderRadius: "8px", background: `${A(o?.bg)}`, textAlign: "left", color: "#0f172a" }}>
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
          <button onClick={V.dv?.gridGo} title="Grid" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", width: "38px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", background: `${A(V.dv?.gridBg)}`, color: `${A(V.dv?.gridFg)}` }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" /></svg></button>
          <button onClick={V.dv?.tableGo} title="Table" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", width: "38px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", background: `${A(V.dv?.tableBg)}`, color: `${A(V.dv?.tableFg)}` }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 5h18v14H3zM3 10h18M3 15h18M9 5v14" /></svg></button>
        </div>
      </div>
      {V.dv?.grid && <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "14px" }}>
          {L(V.dv?.cards).map((c, i31) => <React.Fragment key={i31}>
            <div className="scp15" style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column", transition: "box-shadow .2s,transform .2s" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "16px 14px 10px 16px" }}>
                <span style={{ display: "inline-block", width: "40px", height: "40px", borderRadius: "11px", flexShrink: "0", backgroundImage: `url(${A(c?.icon)})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(c?.name)}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#475569", marginTop: "2px" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                    {S(c?.farm)}
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <button className="scpb" onClick={c?.menu} title="More" style={{ appearance: "none", border: "0", background: `${A(c?.menuBg)}`, font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "50%", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="5" r="1.6" />
                      <circle cx="12" cy="12" r="1.6" />
                      <circle cx="12" cy="19" r="1.6" />
                    </svg>
                  </button>
                  {c?.menuOpen && <>
                    <div style={{ position: "fixed", inset: "0", zIndex: "39" }} onClick={c?.menu} />
                    <div style={{ position: "absolute", right: "0", top: "34px", zIndex: "40", minWidth: "180px", background: "#fff", borderRadius: "10px", boxShadow: "0 12px 32px rgba(15,23,42,.2)", border: "1px solid #E2E8F0", padding: "6px 0", overflow: "hidden" }}>
                      <button className="scp2" onClick={c?.edit} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", width: "100%", padding: "10px 16px", fontSize: "13.5px", color: "#0F172A", textAlign: "left" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4" /></svg>
                        Edit
                      </button>
                      <button className="scp2" onClick={c?.viewData} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", width: "100%", padding: "10px 16px", fontSize: "13.5px", color: "#0F172A", textAlign: "left" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 5h18v14H3zM3 10h18M3 15h18M9 5v14" /></svg>
                        View Data
                      </button>
                      <button className="scp2" onClick={c?.locate} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", width: "100%", padding: "10px 16px", fontSize: "13.5px", color: "#0F172A", textAlign: "left" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" /></svg>
                        Locate on Map
                      </button>
                    </div>
                  </>}
                </div>
              </div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center", padding: "0 16px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", padding: "2px 10px", borderRadius: "999px", border: `1px solid ${A(c?.tbd)}`, background: `${A(c?.tbg)}`, color: `${A(c?.tfg)}` }}>{S(c?.type)}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: "600", padding: "2px 10px", borderRadius: "999px", border: "1px solid #C4B5FD", background: "#F5F3FF", color: "#7C3AED" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" /></svg>
                  {S(c?.provider)}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", fontWeight: "500", color: `${A(c?.st?.fg)}` }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(c?.st?.dot)}` }} />
                  {S(c?.status)}
                </span>
              </div>
              <div style={{ padding: "4px 16px 10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {c?.isSoil && <>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11.5px", fontWeight: "600", color: "#64748B" }}>
                    Depth
                    <select value={c?.depth ?? ""} onChange={c?.setDepth} style={{ height: "28px", border: "1px solid #CBD5E1", borderRadius: "7px", background: "#fff", font: "inherit", fontSize: "12px", fontWeight: "600", color: "#0F172A", padding: "0 6px", outline: "0", cursor: "pointer" }}>
                      <option>10 cm</option>
                      <option>30 cm</option>
                      <option>60 cm</option>
                      <option>90 cm</option>
                    </select>
                  </label>
                </>}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "6px" }}>
                  {L(c?.tiles).map((t, i32) => <React.Fragment key={i32}>
                    <div style={{ padding: "8px 10px", borderRadius: "9px", background: "#F8FAFC", border: "1px solid #EEF2F6", display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                      <span style={{ fontSize: "11px", color: "#64748B", whiteSpace: "nowrap" }}>{S(t?.l)}</span>
                      <span style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
                        <b style={{ fontSize: "16px", fontWeight: "700", color: `${A(t?.c)}`, fontVariantNumeric: "tabular-nums" }}>{S(t?.v)}</b>
                        <span style={{ fontSize: "11px", color: "#64748B" }}>{S(t?.u)}</span>
                      </span>
                    </div>
                  </React.Fragment>)}
                </div>
              </div>
              <div style={{ padding: "0 16px 14px", fontSize: "12px", color: "#94a3b8", fontFamily: "ui-monospace,Menlo,monospace" }}>{S(c?.serial)}{" · "}{S(c?.last)}</div>
              <div style={{ marginTop: "auto", padding: "12px 14px 14px", borderTop: "1px solid #f1f5f9" }}>
                <a className="scp16" href={c?.href} target="_blank" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", height: "36px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "13px", fontWeight: "600", textDecoration: "none", transition: "background .15s" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 17l6-6 4 4 8-8" /></svg>
                  Launch Dashboard
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </div>
            </div>
          </React.Fragment>)}
        </div>
      </>}
      {V.dv?.table && <>
        <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", overflow: "auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(220px,1.6fr) 120px 120px minmax(320px,2.4fr) minmax(140px,1fr) 100px 210px", gap: "14px", minWidth: "1320px", padding: "10px 16px", fontSize: "11px", fontWeight: "600", letterSpacing: ".05em", textTransform: "uppercase", color: "#94a3b8", background: "#fafbfc", borderBottom: "1px solid #EEF2F6" }}>
            <span>Device</span>
            <span>Type</span>
            <span>Provider</span>
            <span>Latest readings</span>
            <span>Last reading</span>
            <span>Status</span>
            <span style={{ textAlign: "right" }}>Actions</span>
          </div>
          {L(V.dv?.cards).map((d, i33) => <React.Fragment key={i33}>
            <div className="scpi" style={{ display: "grid", gridTemplateColumns: "minmax(220px,1.6fr) 120px 120px minmax(320px,2.4fr) minmax(140px,1fr) 100px 210px", gap: "14px", minWidth: "1320px", padding: "12px 16px", borderBottom: "1px solid #f1f5f9", alignItems: "center", fontSize: "13px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: "0" }}>
                <span style={{ display: "inline-block", width: "40px", height: "40px", borderRadius: "11px", flexShrink: "0", backgroundImage: `url(${A(d?.icon)})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                <div style={{ minWidth: "0" }}>
                  <div style={{ fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(d?.name)}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#475569", marginTop: "2px" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                    {S(d?.farm)}
                  </div>
                </div>
              </div>
              <span><span style={{ fontSize: "12px", fontWeight: "600", padding: "2px 10px", borderRadius: "999px", border: `1px solid ${A(d?.tbd)}`, background: `${A(d?.tbg)}`, color: `${A(d?.tfg)}`, whiteSpace: "nowrap" }}>{S(d?.type)}</span></span>
              <span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: "600", padding: "2px 10px", borderRadius: "999px", border: "1px solid #C4B5FD", background: "#F5F3FF", color: "#7C3AED", whiteSpace: "nowrap" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" /></svg>
                  {S(d?.provider)}
                </span>
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", minWidth: "0" }}>
                {d?.isSoil && <>
                  <select value={d?.depth ?? ""} onChange={d?.setDepth} title="Depth" style={{ height: "28px", border: "1px solid #CBD5E1", borderRadius: "7px", background: "#fff", font: "inherit", fontSize: "12px", fontWeight: "600", color: "#0F172A", padding: "0 6px", outline: "0", cursor: "pointer" }}>
                    <option>10 cm</option>
                    <option>30 cm</option>
                    <option>60 cm</option>
                    <option>90 cm</option>
                  </select>
                </>}
                {L(d?.tiles).map((t, i34) => <React.Fragment key={i34}>
                  <span style={{ display: "inline-flex", alignItems: "baseline", gap: "4px", height: "28px", padding: "0 9px", borderRadius: "7px", background: "#F8FAFC", border: "1px solid #EEF2F6", whiteSpace: "nowrap", lineHeight: "26px" }}>
                    <span style={{ fontSize: "11px", color: "#64748B" }}>{S(t?.l)}</span>
                    <b style={{ fontSize: "13px", fontWeight: "700", color: `${A(t?.c)}`, fontVariantNumeric: "tabular-nums" }}>{S(t?.v)}</b>
                    <span style={{ fontSize: "11px", color: "#64748B" }}>{S(t?.u)}</span>
                  </span>
                </React.Fragment>)}
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                <span style={{ color: "#334155", fontSize: "12.5px" }}>{S(d?.last)}</span>
                <span style={{ fontSize: "11.5px", color: "#94a3b8", fontFamily: "ui-monospace,Menlo,monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(d?.serial)}</span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", fontWeight: "500", color: `${A(d?.st?.fg)}` }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(d?.st?.dot)}` }} />
                {S(d?.status)}
              </span>
              <span style={{ justifySelf: "end", display: "flex", gap: "6px" }}>
                <button className="scpb" onClick={d?.edit} title="Edit device" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "32px", padding: "0 10px", borderRadius: "8px", border: "1px solid #E2E8F0", background: "#fff", display: "flex", alignItems: "center", gap: "6px", color: "#334155", fontSize: "12px", fontWeight: "500" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4" /></svg>
                  Edit
                </button>
                <a className="scp17" href={d?.href} target="_blank" style={{ display: "flex", alignItems: "center", gap: "6px", height: "32px", padding: "0 12px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "12.5px", fontWeight: "600", textDecoration: "none", whiteSpace: "nowrap" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 17l6-6 4 4 8-8" /></svg>
                  Launch
                </a>
              </span>
            </div>
          </React.Fragment>)}
        </div>
      </>}
      {V.dv?.empty && <>
        <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "40px", textAlign: "center", color: "#475569" }}>No devices match these filters.</div>
      </>}
      {V.dv?.paged && <>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "4px", padding: "6px 0" }}>
          <button className="scpb" onClick={V.dv?.prev} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569" }}>‹</button>
          {L(V.dv?.pages).map((pg, i35) => <React.Fragment key={i35}>
            <button onClick={pg?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "50%", fontSize: "13px", fontWeight: "500", background: `${A(pg?.bg)}`, color: `${A(pg?.fg)}` }}>{S(pg?.n)}</button>
          </React.Fragment>)}
          <button className="scpb" onClick={V.dv?.next} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569" }}>›</button>
        </div>
      </>}
    </div>
    </>
  );
}
