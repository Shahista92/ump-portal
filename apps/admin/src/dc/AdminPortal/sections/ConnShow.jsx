import React from 'react';
import { S, L, A, C } from '../../runtime.js';


export default function ConnShow({ V }) {
  return (
    <>
    <div onClick={V.connClose} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "55", overflow: "hidden" }}>
      <div onClick={V.stop} style={{ background: "#fff", borderRadius: "16px", width: "100%", maxWidth: `${A(V.conn?.w)}`, maxHeight: "92vh", display: "flex", flexDirection: "column", boxShadow: "0 24px 64px rgba(15,23,42,.28)", overflow: "hidden" }}>
        {V.conn?.s1 && <>
          <div style={{ padding: "18px 20px", borderBottom: "1px solid #EEF2F6", display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ position: "relative", width: "110px", height: "60px", borderRadius: "11px", border: "1px solid #EEF2F6", background: `${A(V.conn?.lbg)}`, color: `${A(V.conn?.lfg)}`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "12px", letterSpacing: "-.02em", flexShrink: "0", overflow: "hidden" }}>
              {S(V.conn?.mono)}
              <span style={{ position: "absolute", inset: "6px", backgroundImage: `${A(V.conn?.bgimg)}`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
            </span>
            <div style={{ flex: "1", minWidth: "0" }}>
              <div style={{ fontWeight: "600", fontSize: "17px" }}>{S(V.conn?.name)}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "5px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", padding: "2px 8px", borderRadius: "6px", background: "#E2E8F0", color: "#334155", fontFamily: "ui-monospace,monospace" }}>{S(V.conn?.slug)}</span>
                <a href={V.conn?.href} target="_blank" style={{ fontSize: "12px", color: "#334155", display: "flex", alignItems: "center", gap: "4px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
                  Visit website
                </a>
                {V.conn?.on && <>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".06em", padding: "3px 9px", borderRadius: "999px", border: `1px solid ${A(V.conn?.cbd)}`, background: `${A(V.conn?.cbg)}`, color: `${A(V.conn?.cfg)}`, whiteSpace: "nowrap" }}>{S(V.conn?.status)}</span>
                </>}
              </div>
            </div>
            <button className="scpb" onClick={V.connClose} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
          </div>
          <div style={{ padding: "20px 22px", overflow: "auto", fontSize: "14px", lineHeight: "1.6", color: "#334155" }}>
            {S(V.conn?.desc)}
            {V.conn?.isLoc && <>
              <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "6px" }}>
                {L(V.conn?.points).map((pt, i113) => <React.Fragment key={i113}>
                  <span style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "14px" }}>
                    <span style={{ color: "#0e8fb0", display: "flex", marginTop: "3px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                    {S(pt?.t)}
                  </span>
                </React.Fragment>)}
              </div>
            </>}
          </div>
          <div style={{ padding: "14px 20px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "space-between", gap: "8px" }}>
            <span>
              {V.conn?.on && <>
                <button className="scpc" onClick={V.connDisconnect} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "36px", padding: "0 14px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#fff", color: "#0f172a", fontSize: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px", whiteSpace: "nowrap", transition: "background .15s", borderColor: "#fecaca", color: "#dc2626" }}>Disconnect</button>
              </>}
            </span>
            <span style={{ display: "flex", gap: "8px" }}>
              <button className="scpi" onClick={V.connClose} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "36px", padding: "0 14px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#fff", color: "#0f172a", fontSize: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px", whiteSpace: "nowrap", transition: "background .15s" }}>Cancel</button>
              <button className="scpn" onClick={V.connNext} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "7px", whiteSpace: "nowrap", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s,transform .1s" }}>
                Continue
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </span>
          </div>
        </>}
        {V.conn?.s3 && <>
          <div style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: "14px", borderBottom: "1px solid #EEF2F6" }}>
            <span style={{ position: "relative", width: "60px", height: "44px", borderRadius: "11px", border: "1px solid #EEF2F6", background: `${A(V.conn?.lbg)}`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "12px", color: "#475569", flexShrink: "0", overflow: "hidden" }}>
              {S(V.conn?.mono)}
              <span style={{ position: "absolute", inset: "5px", backgroundImage: `${A(V.conn?.bgimg)}`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
            </span>
            <div style={{ flex: "1", minWidth: "0" }}>
              <div style={{ fontWeight: "700", fontSize: "18px", color: "#0F172A" }}>{S(V.conn?.name)}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "3px", fontSize: "12.5px", color: "#475569" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                {S(V.conn?.mFarm)}
              </div>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12.5px", fontWeight: "600", padding: "5px 12px", borderRadius: "999px", background: "#ecfdf5", color: "#059669" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                <circle cx="12" cy="12" r="9" />
                <path d="m8.5 12.5 2.5 2.5 4.5-5" />
              </svg>
              Connected
            </span>
            <button className="scpb" onClick={V.connClose} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "0", background: "transparent", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
          </div>
          <div style={{ padding: "20px 24px", overflow: "auto", display: "flex", flexDirection: "column", gap: "16px", background: "#F8FAFC" }}>
            <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", background: "#f1f5f9", borderBottom: "1px solid #E2E8F0" }}>
                <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#e2e8f0", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" />
                    <circle cx="16" cy="6" r="2" />
                    <circle cx="10" cy="12" r="2" />
                    <circle cx="18" cy="18" r="2" />
                  </svg>
                </span>
                <span style={{ flex: "1", fontSize: "12.5px", fontWeight: "700", letterSpacing: ".06em", color: "#334155" }}>CONFIGURATION</span>
                <button className="scp1y" onClick={V.connEdit} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "0", background: "transparent", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#0F172A", padding: "4px 8px", borderRadius: "6px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>
                  {V.conn?.edit && <>
                    Done
                  </>}
                  {V.conn?.notEdit && <>
                    Edit
                  </>}
                </button>
              </div>
              <div style={{ padding: "14px 16px", display: "grid", gridTemplateColumns: "110px minmax(0,1fr)", gap: "10px 12px", alignItems: "center", fontSize: "13px", color: "#334155" }}>
                <span style={{ color: "#475569" }}>Client ID</span>
                <span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "12px" }}>
                  {V.conn?.notEdit && <>
                    {S(V.conn?.cid)}
                  </>}
                  {V.conn?.edit && <>
                    <input value={V.conn?.cid ?? ""} onChange={V.connSetCid} style={{ width: "100%", height: "34px", border: "1px solid #CBD5E1", borderRadius: "8px", padding: "0 10px", font: "inherit", outline: "0" }} />
                  </>}
                </span>
                <span style={{ color: "#475569" }}>API Key</span>
                <span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "12px" }}>
                  {V.conn?.notEdit && <>
                    {S(V.conn?.key)}
                  </>}
                  {V.conn?.edit && <>
                    <input value={V.conn?.key ?? ""} onChange={V.connSetKey} style={{ width: "100%", height: "34px", border: "1px solid #CBD5E1", borderRadius: "8px", padding: "0 10px", font: "inherit", outline: "0" }} />
                  </>}
                </span>
                <span style={{ color: "#475569" }}>Device ID</span>
                <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "12.5px" }}>{S(V.conn?.devId)}</span>
              </div>
              <div style={{ margin: "0 16px", borderTop: "1px solid #EEF2F6", padding: "12px 0 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "12.5px", color: "#475569" }}>Device IDs</span>
                <span style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {L(V.conn?.devIds).map((di, i114) => <React.Fragment key={i114}>
                    <span style={{ fontSize: "12px", fontWeight: "600", padding: "3px 10px", borderRadius: "999px", background: "#EEF2F6", color: "#334155" }}>{S(di)}</span>
                  </React.Fragment>)}
                </span>
              </div>
            </div>
            <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", overflow: "hidden", background: "#f5fbfd", borderColor: "#cdeaf3" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", flexWrap: "wrap" }}>
                <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#d9f0f7", color: "#0e7490", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    <path d="M10 6.5h4v7M14 17.5h-4v-4" />
                  </svg>
                </span>
                <span style={{ fontSize: "12.5px", fontWeight: "700", letterSpacing: ".06em", color: "#334155" }}>SENSORS</span>
                <span style={{ fontSize: "11.5px", fontWeight: "600", padding: "2px 9px", borderRadius: "999px", background: "#dcfce7", color: "#15803d" }}>{S(V.conn?.nAvail)}</span>
                <span style={{ fontSize: "11.5px", fontWeight: "600", padding: "2px 9px", borderRadius: "999px", background: "#dbeafe", color: "#1d4ed8" }}>{S(V.conn?.nLinked)}</span>
                <span style={{ flex: "1" }} />
                <button className="scp1z" onClick={V.connRefresh} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "0", background: "transparent", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#0F172A", padding: "4px 8px", borderRadius: "6px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7" /></svg>
                  Refresh
                </button>
              </div>
              <div style={{ padding: "0 16px 12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "10px", background: "#fff", color: "#94a3b8" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                  <input value={V.conn?.sq ?? ""} onChange={V.connSetSq} placeholder="Search sensors" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "14px", background: "transparent", color: "#0f172a" }} />
                </div>
              </div>
              <div style={{ padding: "0 16px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {L(V.conn?.sensors).map((se, i115) => <React.Fragment key={i115}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", borderRadius: "10px", border: `1px solid ${A(se?.rbd)}`, background: `${A(se?.rbg)}` }}>
                    <div style={{ flex: "1", minWidth: "0" }}>
                      <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#0F172A" }}>{S(se?.name)}</div>
                      <div style={{ fontSize: "12px", color: "#475569", fontFamily: "ui-monospace,Menlo,monospace" }}>{S(se?.id)}</div>
                    </div>
                    <button className="scp20" onClick={se?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "0", background: "transparent", fontSize: "13px", fontWeight: "600", color: `${A(se?.fg)}`, padding: "6px 10px", borderRadius: "7px" }}>{S(se?.lbl)}</button>
                  </div>
                </React.Fragment>)}
                {V.conn?.noSens && <>
                  <div style={{ padding: "14px", textAlign: "center", fontSize: "13px", color: "#475569" }}>No sensors match.</div>
                </>}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 16px", borderRadius: "14px", background: "#fef6f5", border: "1px solid #fbd9d4" }}>
              <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#fde4e0", color: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7M4 4l16 16" /></svg></span>
              <div style={{ flex: "1", minWidth: "0" }}>
                <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#0F172A" }}>Disconnect provider</div>
                <div style={{ fontSize: "12.5px", color: "#475569", marginTop: "2px" }}>Stops data syncing for this farm. You can reconnect any time.</div>
              </div>
              <button className="scpc" onClick={V.connDisconnect} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", border: "1px solid #fca5a5", background: "#fff", color: "#dc2626", fontSize: "14px", fontWeight: "600" }}>Disconnect</button>
            </div>
          </div>
          <div style={{ padding: "14px 24px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "flex-end" }}><button className="scpb" onClick={V.connClose} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 20px", borderRadius: "8px", border: "1px solid #0A2342", background: "#fff", color: "#0A2342", fontSize: "14px", fontWeight: "600" }}>Close</button></div>
        </>}
        {V.conn?.s2 && <>
          <div style={{ padding: "18px 20px", borderBottom: "1px solid #EEF2F6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontWeight: "600", fontSize: "18px" }}>{S(V.conn?.title)}</div>
            <button className="scpb" onClick={V.connClose} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
          </div>
          <div style={{ padding: "20px", overflow: "auto", display: "flex", flexDirection: "column", gap: "16px" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#475569" }}>
              Farm
              <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <span style={{ position: "absolute", left: "12px", color: "#475569", display: "flex", pointerEvents: "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M12 18.5 9 17l-6 3V6l6-3 6 3 6-3v7" />
                    <path d="M9 3v14" />
                    <path d="M15 6v5" />
                  </svg>
                </span>
                <select className="scpy" value={V.conn?.farm ?? ""} onChange={V.connSetFarm} style={{ height: "42px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", padding: "0 12px", font: "inherit", fontSize: "14px", background: "#fff", color: "#0f172a", width: "100%", transition: "border-color .15s,box-shadow .15s", paddingLeft: "38px", appearance: "auto", cursor: "pointer", color: `${A(V.conn?.farmFg)}` }}>
                  <option value="">Select a farm to continue</option>
                  {L(V.farms).map((f, i116) => <React.Fragment key={i116}>
                    <option value={f?.name ?? ""}>{S(f?.name)}</option>
                  </React.Fragment>)}
                </select>
              </span>
            </label>
            {V.conn?.isLoc && <>
              <div style={{ position: "relative", height: "300px", borderRadius: "12px", overflow: "hidden", background: "#0b1220", border: "1px solid #E2E8F0" }}>
                <div ref={V.connMapRef} style={{ position: "absolute", inset: "0" }} />
                <div style={{ position: "absolute", top: "12px", left: "12px", width: "min(300px,calc(100% - 24px))", zIndex: "5" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", height: "40px", padding: "0 12px", borderRadius: "10px", background: "#fff", boxShadow: "0 6px 18px rgba(15,23,42,.25)" }}>
                    <span style={{ color: "#475569", display: "flex" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <circle cx="11" cy="11" r="7" />
                        <path d="m20 20-3.5-3.5" />
                      </svg>
                    </span>
                    <input value={V.conn?.addr ?? ""} onChange={V.connSetAddr} onKeyDown={V.connAddrKey} placeholder="Search for an address in Australia…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "14px", background: "transparent" }} />
                  </div>
                  {V.conn?.hasResults && <>
                    <div style={{ marginTop: "6px", background: "#fff", borderRadius: "10px", boxShadow: "0 12px 30px rgba(15,23,42,.3)", padding: "4px", display: "flex", flexDirection: "column", maxHeight: "180px", overflow: "auto" }}>
                      {L(V.conn?.results).map((rs, i117) => <React.Fragment key={i117}>
                        <button className="scpb" onClick={rs?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", padding: "8px 10px", borderRadius: "7px", fontSize: "12px", color: "#0f172a", lineHeight: "1.35" }}>{S(rs?.label)}</button>
                      </React.Fragment>)}
                    </div>
                  </>}
                </div>
                <div style={{ position: "absolute", top: "14px", right: "12px", zIndex: "4", background: "#fff", borderRadius: "999px", padding: "5px 11px", fontSize: "12px", fontWeight: "500", color: "#0f172a", boxShadow: "0 4px 12px rgba(15,23,42,.25)", display: "flex", alignItems: "center", gap: "6px", pointerEvents: "none" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /></svg>
                  Click on the map to drop a pin
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderRadius: "10px", background: "#f8fafc", border: "1px solid #EEF2F6", fontSize: "12px", color: `${A(V.conn?.pinFg)}` }}>
                <span style={{ color: "#0e8fb0", display: "flex" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                </span>
                {S(V.conn?.pinText)}
              </div>
            </>}
            {V.conn?.isCred && <>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <input className="scpy" value={V.conn?.user ?? ""} onChange={V.connSetUser} placeholder="Username" style={{ height: "42px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", padding: "0 12px", font: "inherit", fontSize: "14px", background: "#fff", color: "#0f172a", width: "100%", transition: "border-color .15s,box-shadow .15s" }} />
                <span style={{ fontSize: "12px", color: "#475569" }}>{"Your "}{S(V.conn?.name)}{" login"}</span>
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input className="scpy" type={V.conn?.pwType} value={V.conn?.pw ?? ""} onChange={V.connSetPw} placeholder="Password" style={{ height: "42px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", padding: "0 12px", font: "inherit", fontSize: "14px", background: "#fff", color: "#0f172a", width: "100%", transition: "border-color .15s,box-shadow .15s", paddingRight: "44px" }} />
                  <button className="scpb" onClick={V.connTogglePw} title="Show password" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", position: "absolute", right: "8px", width: "30px", height: "30px", borderRadius: "7px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </span>
                <span style={{ fontSize: "12px", color: "#475569" }}>Stored encrypted</span>
              </label>
            </>}
          </div>
          <div style={{ padding: "14px 20px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "space-between", gap: "8px" }}>
            <button className="scpi" onClick={V.connBack} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "36px", padding: "0 14px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#fff", color: "#0f172a", fontSize: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px", whiteSpace: "nowrap", transition: "background .15s" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m15 6-6 6 6 6" /></svg>
              Back
            </button>
            <span style={{ display: "flex", gap: "8px" }}>
              <button className="scpi" onClick={V.connClose} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "36px", padding: "0 14px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#fff", color: "#0f172a", fontSize: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px", whiteSpace: "nowrap", transition: "background .15s" }}>Cancel</button>
              <button onClick={V.connSubmit} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "7px", whiteSpace: "nowrap", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s,transform .1s", background: `${A(V.conn?.okBg)}`, cursor: `${A(V.conn?.okCur)}`, boxShadow: "none" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
                  <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
                </svg>
                {S(V.conn?.okLabel)}
              </button>
            </span>
          </div>
        </>}
      </div>
    </div>
    </>
  );
}
