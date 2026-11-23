import React from 'react';
import { S, L, A, C } from '../../runtime.js';


export default function IsAlerts({ V }) {
  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px 14px", flexWrap: "wrap" }}>
        <div style={{ display: "contents" }}>
          <div style={{ flex: "1 1 auto" }}>
            <h1 style={{ margin: "0", fontSize: "19px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.2", color: "#0F172A" }}>Alerts</h1>
            <p style={{ margin: "2px 0 0", color: "#475569", fontSize: "13px" }}>Configure alert thresholds and notifications, and review every alert reported on the Producer Portal.</p>
          </div>
          <button className="scp3" onClick={V.aa?.addAlert} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 14px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round" }}><path d="M12 5v14M5 12h14" /></svg>
            Add alert
          </button>
        </div>
      </div>
      {V.aa?.tRules && <>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "12px" }}>
            {L(V.aa?.kpis).map((k, i64) => <React.Fragment key={i64}>
              <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "10px 14px", display: "flex", alignItems: "center", gap: "12px", minWidth: "0" }}>
                <span style={{ fontSize: "24px", fontWeight: "700", color: "#0F172A", lineHeight: "1" }}>{S(k?.v)}</span>
                <span style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: "0" }}>
                  <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".06em", color: "#475569", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(k?.l)}</span>
                  <span style={{ fontSize: "11.5px", color: "#475569", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(k?.sub)}</span>
                </span>
              </div>
            </React.Fragment>)}
          </div>
          <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "16px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 6px 16px rgba(15,23,42,.04)", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px 14px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontWeight: "600", fontSize: "15px", color: "#0F172A" }}>Alert policies</span>
                <span style={{ fontSize: "12.5px", color: "#475569" }}>What each policy is watching for, and how often it has gone off</span>
              </div>
              <select value={V.aa?.arType ?? ""} onChange={V.aa?.setArType} style={{ height: "32px", minWidth: "150px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", font: "inherit", fontSize: "13px", color: "#0F172A", padding: "0 10px", outline: "0", cursor: "pointer" }}>
                {L(V.aa?.arTypes).map((o, i65) => <React.Fragment key={i65}>
                  <option value={o?.v ?? ""}>{S(o?.l)}</option>
                </React.Fragment>)}
              </select>
            </div>
            {L(V.aa?.rules).map((r, i66) => <React.Fragment key={i66}>
              <div className="scp1b" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px", border: "1px solid #E2E8F0", borderRadius: "10px", background: "#fff" }}>
                <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "5px", opacity: `${A(r?.op)}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", border: `2px solid ${A(r?.ring)}`, boxSizing: "border-box", flexShrink: "0" }} />
                    <span style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A" }}>{S(r?.name)}</span>
                    <span style={{ fontSize: "12px", color: "#475569" }}>{S(r?.where)}</span>
                    {r?.paused && <>
                      <span style={{ fontSize: "11px", fontWeight: "600", padding: "2px 8px", borderRadius: "999px", background: "#F1F5F9", color: "#475569" }}>Paused</span>
                    </>}
                  </div>
                  <span style={{ fontSize: "13px", color: "#1E293B" }}>{S(r?.cond2)}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", fontSize: "12px", color: "#475569" }}>
                    <span style={{ display: "inline-flex", gap: "5px" }}>
                      {L(r?.vias).map((v, i67) => <React.Fragment key={i67}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <title>{S(v?.t)}</title>
                          <path d={v?.d} />
                        </svg>
                      </React.Fragment>)}
                    </span>
                    <span>·</span>
                    <span>{S(r?.rep)}</span>
                    <span>·</span>
                    <span>{S(r?.rec)}</span>
                    <span>·</span>
                    {r?.fired && <>
                      <span>
                        {"fired "}
                        <strong style={{ color: "#0F172A" }}>{S(r?.firedT)}</strong>
                        {" in the last 12 months · last "}{S(r?.last)}
                      </span>
                    </>}
                    {r?.none && <>
                      <span>no alerts in the last 12 months</span>
                    </>}
                  </div>
                </div>
                <button className="scp1c" onClick={r?.edit} title="Edit alert" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17z" /></svg></button>
                <button className="scp1d" onClick={r?.del} title="Delete alert" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6" /></svg></button>
              </div>
            </React.Fragment>)}
          </div>
        </div>
      </>}
      {V.aa?.delAsk?.show && <>
        <div onClick={V.aa?.delAsk?.cancel} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "60", overflow: "hidden" }}>
          <div onClick={V.aa?.delAsk?.stop} style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 24px 64px rgba(15,23,42,.24)", width: "100%", maxWidth: "440px", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
            <div style={{ padding: "22px 24px 6px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "11px", background: "#FEF2F2", color: "#DC2626", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /></svg>
              </span>
              <div style={{ flex: "1", minWidth: "0" }}>
                <div style={{ fontWeight: "700", fontSize: "17px", color: "#0F172A" }}>Delete alert policy?</div>
                <div style={{ fontSize: "13.5px", color: "#475569", marginTop: "6px", lineHeight: "1.5", textWrap: "pretty" }}>
                  {"Are you sure you want to delete "}
                  <b style={{ color: "#0F172A" }}>{S(V.aa?.delAsk?.name)}</b>
                  {" for "}{S(V.aa?.delAsk?.farm)}{"? Recipients will stop receiving these alerts. This can’t be undone."}
                </div>
              </div>
            </div>
            <div style={{ margin: "12px 24px 0", padding: "10px 12px", borderRadius: "10px", background: "#F8FAFC", fontSize: "12.5px", color: "#475569", lineHeight: "1.45" }}>
              <b style={{ color: "#0F172A" }}>Condition:</b>
              {" "}{S(V.aa?.delAsk?.cond)}
            </div>
            <div style={{ padding: "18px 24px 20px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button className="scpi" onClick={V.aa?.delAsk?.cancel} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 18px", border: "1px solid #E2E8F0", background: "#fff", color: "#0f172a", borderRadius: "10px", fontSize: "14px", fontWeight: "500" }}>Cancel</button>
              <button onClick={V.aa?.delAsk?.confirm} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 20px", background: "#DC2626", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Delete policy</button>
            </div>
          </div>
        </div>
      </>}
      {V.aa?.tFired && <>
        <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "16px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 6px 16px rgba(15,23,42,.04)", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(160px,2fr) repeat(6,minmax(0,1fr)) 36px", gap: "8px", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid #EEF2F6" }}>
            <div style={{ minWidth: "0", display: "flex", alignItems: "center", gap: "8px", height: "36px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", background: "#fff" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input value={V.aa?.q ?? ""} onChange={V.aa?.setQ} placeholder="Search alerts…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13px", background: "transparent" }} />
            </div>
            {L(V.aa?.filters).map((f, i72) => <React.Fragment key={i72}>
              <select value={f?.value ?? ""} onChange={f?.set} style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "0 10px", font: "inherit", fontSize: "13px", color: "#334155", background: "#fff", cursor: "pointer", outline: "0", width: "100%", minWidth: "0", textOverflow: "ellipsis" }}>
                {L(f?.opts).map((o, i73) => <React.Fragment key={i73}>
                  <option value={o?.v ?? ""}>{S(o?.l)}</option>
                </React.Fragment>)}
              </select>
            </React.Fragment>)}
            <button className="scp11" onClick={V.aa?.toggleSort} title={V.aa?.sortTitle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", width: "36px", height: "36px", borderRadius: "8px", border: "1px solid #E2E8F0", background: "#fff", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", transform: `${A(V.aa?.sortRot)}` }}><path d="M4 6h9M4 12h6M4 18h3M17 4v16M14 17l3 3 3-3" /></svg></button>
          </div>
          <div style={{ padding: "16px 20px 4px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontWeight: "600", fontSize: "15px", color: "#0F172A" }}>Fired alerts</span>
            <span style={{ fontSize: "12.5px", color: "#475569" }}>{S(V.aa?.count)}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: "6px 20px 10px" }}>
            {L(V.aa?.rows).map((r, i74) => <React.Fragment key={i74}>
              <div className="scp11" style={{ display: "grid", gridTemplateColumns: "120px minmax(0,1fr)", gap: "14px", padding: "12px 4px", borderTop: "1px solid #EEF2F6" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontSize: "12.5px", fontWeight: "700", color: "#0F172A", whiteSpace: "nowrap" }}>{S(r?.fired)}</span></div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", border: "2px solid #2563EB", boxSizing: "border-box" }} />
                    <span style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A" }}>{S(r?.title)}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "22px", padding: "0 9px", borderRadius: "6px", fontSize: "11.5px", fontWeight: "600", background: `${A(r?.prBg)}`, color: `${A(r?.prFg)}` }}>{S(r?.priority)}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "22px", padding: "0 9px", borderRadius: "6px", fontSize: "11.5px", fontWeight: "600", border: `1px solid ${A(r?.tyBd)}`, background: `${A(r?.tyBg)}`, color: `${A(r?.tyFg)}` }}>{S(r?.ty)}</span>
                  </div>
                  <span style={{ fontSize: "12.5px", color: "#475569" }}>{S(r?.device)}{" · "}{S(r?.provider)}{" · "}{S(r?.farm)}</span>
                </div>
              </div>
            </React.Fragment>)}
          </div>
          {V.aa?.empty && <>
            <div style={{ padding: "40px 20px", textAlign: "center", color: "#475569", fontSize: "14px" }}>No alerts match these filters.</div>
          </>}
        </div>
      </>}
    </div>
    </>
  );
}
