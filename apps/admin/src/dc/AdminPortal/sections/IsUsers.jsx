import React from 'react';
import { S, L, A, C } from '../../runtime.js';


export default function IsUsers({ V }) {
  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ flexShrink: "0", background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "12px 20px", minHeight: "0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px 14px", flexWrap: "wrap" }}>
        {V.userTab?.list && <>
          <div style={{ flex: "1 1 auto" }}>
            <h1 style={{ margin: "0", fontSize: "19px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.2", color: "#0F172A" }}>Users</h1>
            <p style={{ margin: "2px 0 0", color: "#475569", fontSize: "13px" }}>Control who can access the Producer Portal and what they can do</p>
          </div>
        </>}
        {V.userTab?.roles && <>
          <div style={{ flex: "1 1 auto" }}>
            <h1 style={{ margin: "0", fontSize: "19px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.2", color: "#0F172A" }}>Manage Roles</h1>
            <p style={{ margin: "2px 0 0", color: "#475569", fontSize: "13px" }}>Define shared access roles, scope coverage, and permission matrix rules.</p>
          </div>
        </>}
        {V.userTab?.list && <>
          <div style={{ flex: "1 1 260px", maxWidth: "420px", minWidth: "200px", display: "flex", alignItems: "center", gap: "8px", height: "36px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", background: "#F8FAFC" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input value={V.um?.q ?? ""} onChange={V.um?.setQ} placeholder={V.um?.ph} style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13px", background: "transparent" }} />
          </div>
        </>}
        {V.userTab?.list && <>
          <div style={{ display: "flex", flexShrink: "0", gap: "8px", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <button className="scp10" onClick={V.toggleGuide} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 14px", borderRadius: "8px", border: "1px solid #E2E8F0", background: "#F1F5F9", color: "#0F172A", fontSize: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M12 2.5 4 5.5v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10v-6z" />
                  <circle cx="12" cy="10" r="2.5" />
                  <path d="M8 16.5a4.5 4.5 0 0 1 8 0" />
                </svg>
                Role guide
              </button>
              {V.guideOpen && <>
                <div style={{ position: "absolute", right: "0", top: "46px", zIndex: "45", width: "min(600px,calc(100vw - 360px))", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 18px 44px rgba(15,23,42,.16)", padding: "14px", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "10px" }}>
                  {L(V.roleGuide).map((r, i14) => <React.Fragment key={i14}>
                    <div style={{ border: "1px solid #E2E8F0", borderRadius: "12px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600" }}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={r?.fg} style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={r?.d} /></svg>
                        {S(r?.name)}
                      </span>
                      <span style={{ fontSize: "12px", color: "#475569", lineHeight: "1.45" }}>{S(r?.desc)}</span>
                    </div>
                  </React.Fragment>)}
                </div>
              </>}
            </div>
            <button className="scpn" onClick={V.openInvite} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M19 8v6M16 11h6" /></svg>
              Invite user
            </button>
          </div>
        </>}
        {V.userTab?.roles && <>
          <button className="scpn" onClick={V.addRole} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 5v14M5 12h14" /></svg>
            Add role
          </button>
        </>}
      </div>
      {V.userTab?.list && <>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(200px,320px) minmax(min(100%,400px),1fr)", gap: "16px", height: "calc(100vh - 196px)", minHeight: "420px" }}>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column", minHeight: "0", overflow: "hidden" }}>
            <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: "8px", borderBottom: "1px solid #EEF2F6" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                {L(V.um?.tabs).map((t, i15) => <React.Fragment key={i15}>
                  <button onClick={t?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "30px", padding: "0 12px", borderRadius: "8px", border: `1px solid ${A(t?.bd)}`, background: `${A(t?.bg)}`, color: `${A(t?.fg)}`, fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    {S(t?.l)}
                    <span style={{ minWidth: "22px", height: "20px", padding: "0 6px", borderRadius: "999px", background: `${A(t?.cbg)}`, color: `${A(t?.cfg)}`, fontSize: "11px", fontWeight: "700", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{S(t?.n)}</span>
                  </button>
                </React.Fragment>)}
              </div>
            </div>
            <div style={{ flex: "1", minHeight: "0", overflowY: "auto" }}>
              {L(V.um?.list).map((r, i16) => <React.Fragment key={i16}>
                <button className="scp11" onClick={r?.go} style={{ appearance: "none", border: "0", borderBottom: "1px solid #F1F5F9", font: "inherit", margin: "0", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", gap: "12px", padding: "9px 14px", background: `${A(r?.bg)}`, textAlign: "left", color: "#0F172A" }}>
                  <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#0A2342", color: "#fff", fontSize: "11.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", background: `${A(r?.abg)}` }}>{S(r?.ini)}</span>
                  <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "1px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(r?.name)}</span>
                    <span style={{ fontSize: "11.5px", color: "#475569", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(r?.sub)}</span>
                  </span>
                  <span style={{ minWidth: "22px", height: "20px", padding: "0 7px", borderRadius: "999px", background: "#EEF2F7", color: "#475569", fontSize: "11px", fontWeight: "700", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{S(r?.n)}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m9 6 6 6-6 6" /></svg>
                </button>
              </React.Fragment>)}
              {V.um?.empty && <>
                <div style={{ padding: "30px 16px", textAlign: "center", fontSize: "13px", color: "#475569" }}>No matches.</div>
              </>}
            </div>
          </div>
          <div style={{ position: "relative", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column", minHeight: "0", overflow: "hidden" }}>
            {V.um?.noSel && <>
              <div style={{ position: "absolute", inset: "0", zIndex: "3", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", color: "#475569", fontSize: "13px" }}>
                <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", color: "#94A3B8" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M17 11a3 3 0 1 0 0-6M21.5 20a5.5 5.5 0 0 0-4-5.3" /></svg></span>
                {S(V.um?.selTxt)}
              </div>
            </>}
            <div style={{ padding: "16px 20px", borderBottom: "1px solid #EEF2F6", display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: `${A(V.um?.d?.abg)}`, color: "#fff", fontSize: "16px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>{S(V.um?.d?.ini)}</span>
              <div style={{ flex: "1", minWidth: "0" }}>
                <div style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.um?.d?.name)}</div>
                <div style={{ fontSize: "13px", color: "#475569", marginTop: "2px" }}>{S(V.um?.d?.sub)}</div>
              </div>
              <span style={{ height: "26px", padding: "0 12px", borderRadius: "999px", background: "#E8F1FD", color: "#0B7F7E", fontSize: "12.5px", fontWeight: "700", display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>{S(V.um?.d?.pill)}</span>
            </div>
            <div style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", borderRadius: "10px", background: "#F1F6FD", border: "1px solid #DCE7F7", fontSize: "13px", color: "#1E293B" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 11v5M12 8h.01" />
                </svg>
                {S(V.um?.d?.tip)}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 2px 0", fontSize: "11px", fontWeight: "700", letterSpacing: ".06em", color: "#475569" }}>
                <span>{S(V.um?.d?.colA)}</span>
                <span style={{ width: "178px" }}>ROLE</span>
              </div>
              {L(V.um?.d?.rows).map((m, i17) => <React.Fragment key={i17}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px 12px", padding: "12px 14px", border: "1px solid #E2E8F0", borderRadius: "12px", flexWrap: "wrap" }}>
                  <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: `${A(m?.ibg)}`, color: `${A(m?.ifg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", fontSize: "11px", fontWeight: "700" }}>{S(m?.ic)}</span>
                  <div style={{ flex: "1 1 160px", minWidth: "140px" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(m?.name)}</div>
                    {m?.sub && <>
                      <div style={{ fontSize: "12px", color: "#475569" }}>{S(m?.sub)}</div>
                    </>}
                  </div>
                  <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
                    <select className="scp12" value={m?.role ?? ""} onChange={m?.setRole} style={{ height: "38px", width: "134px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", font: "inherit", fontSize: "14px", fontWeight: "600", color: "#0F172A", padding: "0 30px 0 12px", outline: "0", cursor: "pointer", appearance: "none", WebkitAppearance: "none" }}>
                      {L(V.um?.roles).map((o, i18) => <React.Fragment key={i18}>
                        <option value={o ?? ""}>{S(o)}</option>
                      </React.Fragment>)}
                    </select>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ position: "absolute", right: "10px", pointerEvents: "none", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
                  </span>
                  <button className="scp13" onClick={m?.remove} title="Remove access" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "34px", height: "34px", borderRadius: "8px", background: "#FEF2F2", color: "#DC2626", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /></svg></button>
                </div>
              </React.Fragment>)}
              {V.um?.d?.none && <>
                <div style={{ padding: "18px", border: "1.5px dashed #E2E8F0", borderRadius: "12px", textAlign: "center", fontSize: "13px", color: "#475569" }}>{S(V.um?.d?.noneTxt)}</div>
              </>}
              <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".06em", color: "#475569", padding: "10px 2px 0" }}>{S(V.um?.d?.addHead)}</div>
              <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "-4px" }}>{V.um?.addMode === "users" ? "Choose a farm and a role, then send an invite." : "Choose a user and a role, then send an invite."}</div>
              <div data-um-add="1" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", flexWrap: "wrap" }}>
                  <div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", flexDirection: "column", gap: "5px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "600", color: "#334155" }}>{V.um?.addMode === "users" ? "Farm" : "User"}</span>
                    {V.um?.picked && <>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", height: "42px", padding: "0 8px 0 12px", border: "1px solid #0B7F7E", borderRadius: "10px", background: "#F0FDFA" }}>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                          <span style={{ fontSize: "13.5px", fontWeight: "600", color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.um?.picked?.l)}</span>
                          <span style={{ fontSize: "11.5px", color: "#64748B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.um?.picked?.sub)}</span>
                        </span>
                        <button onClick={V.um?.clearPick} title="Change" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "26px", height: "26px", borderRadius: "6px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
                      </div>
                    </>}
                    {V.um?.noPick && <>
                      <div style={{ position: "relative", zIndex: "21", display: "flex", alignItems: "center", gap: "8px", height: "42px", padding: "0 12px", border: `1px solid ${V.um?.addOpen ? "#0B7F7E" : "#E2E8F0"}`, boxShadow: V.um?.addOpen ? "0 0 0 3px rgba(11,127,126,.12)" : "none", borderRadius: "10px", background: "#fff" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
                        <input value={V.um?.aq ?? ""} onChange={V.um?.setAq} onFocus={e => { V.um?.openAdd?.(); const el = e.currentTarget.closest('[data-um-add]'); setTimeout(() => el && el.scrollIntoView({ block: "nearest", behavior: "smooth" }), 60); }} placeholder={V.um?.d?.addPh} style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "14px", background: "transparent" }} />
                      </div>
                    </>}
                  </div>
                  <label style={{ flex: "0 0 150px", display: "flex", flexDirection: "column", gap: "5px", fontSize: "12px", fontWeight: "600", color: "#334155" }}>
                    Role
                    <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
                      <select className="scp12" value={V.um?.addRole ?? ""} onChange={V.um?.setAddRole} style={{ height: "42px", width: "100%", border: "1px solid #CBD5E1", borderRadius: "10px", background: "#fff", font: "inherit", fontSize: "14px", fontWeight: "600", color: "#0F172A", padding: "0 30px 0 12px", outline: "0", cursor: "pointer", appearance: "none", WebkitAppearance: "none" }}>
                        {L(V.um?.roles).map((o, iro) => <React.Fragment key={iro}>
                          <option value={o ?? ""}>{S(o)}</option>
                        </React.Fragment>)}
                      </select>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ position: "absolute", right: "11px", pointerEvents: "none", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
                    </span>
                  </label>
                  <button onClick={V.um?.invite} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: `${A(V.um?.inviteCur)}`, height: "42px", padding: "0 18px", borderRadius: "10px", background: `${A(V.um?.inviteBg)}`, color: "#fff", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4z" /></svg>
                    Invite
                  </button>
                </div>
                {V.um?.addOpen && V.um?.noPick && <>
                  <div onClick={V.um?.closeAdd} style={{ position: "fixed", inset: "0", zIndex: "20" }} />
                  <div style={{ position: "relative", zIndex: "21", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 10px 28px rgba(15,23,42,.10)", overflow: "hidden" }}>
                    <div style={{ padding: "8px 14px", fontSize: "11px", fontWeight: "700", letterSpacing: ".06em", color: "#64748B", background: "#F8FAFC", borderBottom: "1px solid #EEF2F6" }}>{V.um?.addMode === "users" ? "AVAILABLE FARMS" : "AVAILABLE USERS"}{" \u00b7 "}{S(V.um?.addList?.length ?? 0)}</div>
                    <div style={{ maxHeight: "260px", overflowY: "auto", padding: "6px" }}>
                      {L(V.um?.addList).map((o, i20) => <React.Fragment key={i20}>
                        <button className="scp2" onClick={o?.pick} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", gap: "12px", padding: "9px 10px", borderRadius: "8px", textAlign: "left", color: "#0F172A" }}>
                          <span style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#F0FDFA", color: "#0F766E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", fontSize: "12px", fontWeight: "700" }}>{S((o?.l || "").split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase())}</span>
                          <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "1px" }}>
                            <span style={{ fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(o?.l)}</span>
                            <span style={{ fontSize: "12px", color: "#64748B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(o?.sub)}</span>
                          </span>
                          <span style={{ fontSize: "12px", fontWeight: "600", color: "#0B7F7E" }}>Select</span>
                        </button>
                      </React.Fragment>)}
                      {V.um?.addEmpty && <>
                        <div style={{ padding: "18px 12px", textAlign: "center", fontSize: "13px", color: "#475569" }}>{V.um?.aq ? "No matches for \u201c" + V.um?.aq + "\u201d." : "Nothing left to add."}</div>
                      </>}
                    </div>
                  </div>
                </>}
              </div>
            </div>
          </div>
        </div>
      </>}
      {V.um?.inv?.show && <>
        <div onClick={V.um?.inv?.cancel} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "60", overflow: "hidden" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 24px 64px rgba(15,23,42,.24)", width: "100%", maxWidth: "440px", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
            {!V.um?.inv?.done && <>
              <div style={{ padding: "22px 24px 6px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "11px", background: "#F0FDFA", color: "#0B7F7E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4z" /></svg>
                </span>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ fontWeight: "700", fontSize: "17px", color: "#0F172A" }}>Send invite?</div>
                  <div style={{ fontSize: "13.5px", color: "#475569", marginTop: "6px", lineHeight: "1.5", textWrap: "pretty" }}>
                    {"Invite "}
                    <b style={{ color: "#0F172A" }}>{S(V.um?.inv?.name)}</b>
                    {" to "}
                    <b style={{ color: "#0F172A" }}>{S(V.um?.inv?.farm)}</b>
                    {" as "}
                    <b style={{ color: "#0F172A" }}>{S(V.um?.inv?.role)}</b>
                    {"? An invitation email goes to "}{S(V.um?.inv?.email)}{"."}
                  </div>
                </div>
              </div>
              <div style={{ margin: "12px 24px 0", padding: "10px 12px", borderRadius: "10px", background: "#F8FAFC", fontSize: "12.5px", color: "#475569", lineHeight: "1.45" }}>
                <b style={{ color: "#0F172A" }}>{S(V.um?.inv?.role)}:</b>
                {" "}{S(V.um?.inv?.desc)}
              </div>
              <div style={{ padding: "18px 24px 20px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button className="scpi" onClick={V.um?.inv?.cancel} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 18px", border: "1px solid #E2E8F0", background: "#fff", color: "#0f172a", borderRadius: "10px", fontSize: "14px", fontWeight: "500" }}>Cancel</button>
                <button className="scp3" onClick={V.um?.inv?.send} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 20px", background: "#0A2342", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4z" /></svg>
                  Send invite
                </button>
              </div>
            </>}
            {V.um?.inv?.done && <>
              <div style={{ padding: "30px 28px 8px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "12px" }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#ECFDF5", color: "#16A34A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                </span>
                <div style={{ fontWeight: "700", fontSize: "18px", color: "#0F172A" }}>Invite sent</div>
                <div style={{ fontSize: "13.5px", color: "#475569", lineHeight: "1.55", textWrap: "pretty" }}>
                  <b style={{ color: "#0F172A" }}>{S(V.um?.inv?.name)}</b>
                  {" has been invited to "}
                  <b style={{ color: "#0F172A" }}>{S(V.um?.inv?.farm)}</b>
                  {" as "}{V.um?.inv?.role === "Owner" ? "an " : "a "}
                  <b style={{ color: "#0F172A" }}>{S(V.um?.inv?.role)}</b>{"."}
                </div>
                <div style={{ fontSize: "12.5px", color: "#64748B" }}>{"Invitation emailed to "}{S(V.um?.inv?.email)}</div>
              </div>
              <div style={{ padding: "18px 24px 22px", display: "flex", justifyContent: "center" }}>
                <button className="scp3" onClick={V.um?.inv?.cancel} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 28px", background: "#0A2342", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Done</button>
              </div>
            </>}
          </div>
        </div>
      </>}
      {V.userTab?.roles && <>
        <div style={{ display: "flex", gap: "16px", alignItems: "stretch", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 280px", maxWidth: "340px", minWidth: "0", background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "18px 18px 14px", borderBottom: "1px solid #f1f5f9" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}><span style={{ fontWeight: "600", fontSize: "18px", whiteSpace: "nowrap", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis" }}>Role definitions</span></div>
              <div style={{ fontSize: "12px", color: "#475569", marginTop: "4px" }}>Select a role to edit its scope and permissions</div>
            </div>
            <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "8px", flex: "1" }}>
              {L(V.roleDefs).map((r, i21) => <React.Fragment key={i21}>
                <button className="scpd" onClick={r?.go} style={{ appearance: "none", font: "inherit", color: "inherit", margin: "0", textAlign: "left", cursor: "pointer", padding: "12px", borderRadius: "10px", border: `1px solid ${A(r?.bd)}`, background: `${A(r?.bg)}`, boxShadow: `${A(r?.ring)}`, display: "flex", gap: "12px", alignItems: "flex-start", transition: "border-color .12s,background .12s" }}>
                  <span style={{ width: "36px", height: "36px", borderRadius: "8px", background: `${A(r?.iconBg)}`, color: `${A(r?.iconFg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={r?.d} /></svg></span>
                  <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                      <span style={{ fontWeight: "600", fontSize: "13px", letterSpacing: ".02em", color: `${A(r?.nameFg)}` }}>{S(r?.name)}</span>
                      {r?.locked && <>
                        <span style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "10.5px", fontWeight: "500", padding: "1px 7px", borderRadius: "999px", background: "#fff7ed", color: "#c2410c", border: "1px solid #fed7aa" }}>
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round" }}>
                            <rect x="5" y="11" width="14" height="10" rx="2" />
                            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                          </svg>
                          Locked
                        </span>
                      </>}
                    </span>
                    <span style={{ fontSize: "12px", color: "#475569", lineHeight: "1.45", textWrap: "pretty" }}>{S(r?.desc)}</span>
                    <span style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginTop: "4px", alignItems: "center" }}>
                      {L(r?.scopes).map((sc, i22) => <React.Fragment key={i22}>
                        <span style={{ fontSize: "10.5px", fontWeight: "500", padding: "1px 8px", borderRadius: "999px", background: `${A(r?.pillBg)}`, color: `${A(r?.pillFg)}` }}>{S(sc?.label)}</span>
                      </React.Fragment>)}
                    </span>
                  </span>
                </button>
              </React.Fragment>)}
            </div>
          </div>
          <div style={{ flex: "999 1 520px", minWidth: "0", background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "18px 22px", borderBottom: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontWeight: "600", fontSize: "18px" }}>{S(V.editorTitle)}</div>
                <div style={{ fontSize: "12px", color: "#475569", marginTop: "4px" }}>{S(V.editorSub)}</div>
              </div>
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <span style={{ fontSize: "12px", fontWeight: "500", padding: "3px 10px", borderRadius: "999px", background: "#f1f5f9", color: "#334155" }}>{S(V.permSelected)}</span>
                <span style={{ fontSize: "12px", fontWeight: "500", padding: "3px 10px", borderRadius: "999px", background: `${A(V.modeBadge?.bg)}`, color: `${A(V.modeBadge?.fg)}` }}>{S(V.modeBadge?.label)}</span>
              </div>
            </div>
            <div style={{ padding: "18px 22px", display: "flex", flexDirection: "column", gap: "14px", flex: "1" }}>
              {V.draftLocked && <>
                <div style={{ fontSize: "12px", color: "#9a3412", background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "8px", padding: "10px 12px" }}>This is a system role. Its permissions are fixed and cannot be edited.</div>
              </>}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "500", color: "#334155" }}>Role name</span>
                  <input className="scpy" value={V.draftName ?? ""} onChange={V.setDraftName} readOnly={V.draftLocked} placeholder="e.g. AGRONOMIST" style={{ height: "40px", border: `1px solid ${A(V.nameBd)}`, borderRadius: "8px", padding: "0 12px", font: "inherit", fontSize: "14px", outline: "0", background: "#fff", textTransform: "uppercase" }} />
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", position: "relative" }}>
                  <span style={{ fontSize: "12px", fontWeight: "500", color: "#334155" }}>Scope levels</span>
                  <div onClick={V.toggleScopeMenu} style={{ minHeight: "40px", border: `1px solid ${A(V.scopeBd)}`, borderRadius: "8px", padding: "5px 36px 5px 8px", display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center", cursor: "pointer", position: "relative", background: "#fff" }}>
                    {L(V.scopeChips).map((ch, i23) => <React.Fragment key={i23}>
                      <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", fontWeight: "500", padding: "3px 6px 3px 10px", borderRadius: "999px", background: "#eef2f7", color: "#1e293b" }}>
                        {S(ch?.label)}
                        <button onClick={ch?.remove} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "15px", height: "15px", borderRadius: "50%", background: "#64748b", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "3.5", strokeLinecap: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
                      </span>
                    </React.Fragment>)}
                    {V.scopeEmpty && <>
                      <span style={{ fontSize: "13px", color: "#94a3b8", paddingLeft: "4px" }}>Select scopes</span>
                    </>}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" style={{ position: "absolute", right: "12px", top: "13px", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                  {V.scopeOpen && <>
                    <div style={{ position: "absolute", top: "100%", left: "0", right: "0", marginTop: "4px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", boxShadow: "0 10px 30px rgba(15,23,42,.12)", padding: "6px", zIndex: "5", display: "flex", flexDirection: "column", gap: "2px" }}>
                      {L(V.scopeOptions).map((o, i24) => <React.Fragment key={i24}>
                        <button className="scpi" onClick={o?.toggle} style={{ appearance: "none", border: "0", font: "inherit", color: "inherit", margin: "0", cursor: "pointer", padding: "8px 10px", borderRadius: "7px", background: "transparent", textAlign: "left", display: "flex", gap: "10px", alignItems: "center" }}>
                          <span style={{ width: "16px", height: "16px", borderRadius: "4px", border: `1.5px solid ${A(o?.bd)}`, background: `${A(o?.bg)}`, display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" style={{ strokeWidth: "3.4", strokeLinecap: "round", strokeLinejoin: "round", opacity: `${A(o?.chk)}` }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                          <span style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: "13px", fontWeight: "500" }}>{S(o?.label)}</span>
                            <span style={{ fontSize: "12px", color: "#475569" }}>{S(o?.hint)}</span>
                          </span>
                        </button>
                      </React.Fragment>)}
                    </div>
                  </>}
                </div>
              </div>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "500", color: "#334155" }}>Comment</span>
                <textarea className="scpy" value={V.draftComment ?? ""} onChange={V.setDraftComment} readOnly={V.draftLocked} placeholder="Describe who this role is for" rows="3" style={{ border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "10px 12px", font: "inherit", fontSize: "14px", outline: "0", resize: "vertical" }} />
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>Access matrix</span>
                  <span style={{ fontSize: "12px", color: "#475569" }}>Set Add, Edit, Delete and View for each area</span>
                </div>
                <div style={{ border: "1px solid #E2E8F0", borderRadius: "10px", overflow: "auto" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(220px,2.2fr) repeat(4,minmax(64px,1fr))", minWidth: "520px", padding: "10px 16px", background: "#f8fafc", borderBottom: "1px solid #EEF2F6", alignItems: "center", fontSize: "12px", fontWeight: "500", color: "#475569" }}>
                    <span style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <button onClick={V.allCb?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", padding: "0", cursor: `${A(V.allCb?.cur)}`, width: "18px", height: "18px", borderRadius: "5px", border: `1.5px solid ${A(V.allCb?.bd)}`, background: `${A(V.allCb?.bg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", transition: "background .12s,border-color .12s" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" style={{ strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <path d="M5 12.5l4.5 4.5L19 7.5" style={{ opacity: `${A(V.allCb?.chk)}` }} />
                          <path d="M6.5 12h11" style={{ opacity: `${A(V.allCb?.dash)}` }} />
                        </svg>
                      </button>
                      Access area
                    </span>
                    {L(V.colHeads).map((c, i25) => <React.Fragment key={i25}>
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                        {S(c?.label)}
                        <button onClick={c?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", padding: "0", cursor: `${A(c?.cur)}`, width: "18px", height: "18px", borderRadius: "5px", border: `1.5px solid ${A(c?.bd)}`, background: `${A(c?.bg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", transition: "background .12s,border-color .12s" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" style={{ strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M5 12.5l4.5 4.5L19 7.5" style={{ opacity: `${A(c?.chk)}` }} />
                            <path d="M6.5 12h11" style={{ opacity: `${A(c?.dash)}` }} />
                          </svg>
                        </button>
                      </span>
                    </React.Fragment>)}
                  </div>
                  {L(V.matrixRows).map((row, i26) => <React.Fragment key={i26}>
                    <div className="scp14" style={{ display: "grid", gridTemplateColumns: "minmax(220px,2.2fr) repeat(4,minmax(64px,1fr))", minWidth: "520px", padding: "11px 16px", borderBottom: "1px solid #f1f5f9", alignItems: "center" }}>
                      <span style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                        <button onClick={row?.cb?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", padding: "0", cursor: `${A(row?.cb?.cur)}`, width: "18px", height: "18px", borderRadius: "5px", border: `1.5px solid ${A(row?.cb?.bd)}`, background: `${A(row?.cb?.bg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", transition: "background .12s,border-color .12s" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" style={{ strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M5 12.5l4.5 4.5L19 7.5" style={{ opacity: `${A(row?.cb?.chk)}` }} />
                            <path d="M6.5 12h11" style={{ opacity: `${A(row?.cb?.dash)}` }} />
                          </svg>
                        </button>
                        <span style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ fontWeight: "500", fontSize: "14px" }}>{S(row?.module)}</span>
                          <span style={{ fontSize: "12px", color: "#475569" }}>{S(row?.note)}</span>
                        </span>
                      </span>
                      {L(row?.cells).map((c, i27) => <React.Fragment key={i27}>
                        <span style={{ display: "flex", justifyContent: "center" }}>
                          <button onClick={c?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", padding: "0", cursor: `${A(c?.cur)}`, width: "18px", height: "18px", borderRadius: "5px", border: `1.5px solid ${A(c?.bd)}`, background: `${A(c?.bg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", transition: "background .12s,border-color .12s" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" style={{ strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M5 12.5l4.5 4.5L19 7.5" style={{ opacity: `${A(c?.chk)}` }} />
                              <path d="M6.5 12h11" style={{ opacity: `${A(c?.dash)}` }} />
                            </svg>
                          </button>
                        </span>
                      </React.Fragment>)}
                    </div>
                  </React.Fragment>)}
                </div>
                {V.roleErr && <>
                  <span style={{ fontSize: "12px", color: "#dc2626" }}>Role name is required.</span>
                </>}
              </div>
            </div>
            <div style={{ padding: "14px 22px", borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap", background: "#fcfcfd" }}>
              <span style={{ fontSize: "12px", color: "#475569" }}>Changes apply to every user who holds this role.</span>
              <div style={{ display: "flex", gap: "8px" }}>
                <button className="scpi scpu" onClick={V.cancelRole} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", border: "1px solid #E2E8F0", background: "#fff", color: "#1e293b", borderRadius: "8px", fontWeight: "500" }}>Cancel</button>
                <button onClick={V.saveRole} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: `${A(V.saveCur)}`, height: "36px", padding: "0 18px", background: `${A(V.saveBg)}`, color: "#fff", borderRadius: "8px", fontWeight: "500" }}>{S(V.saveLabel)}</button>
              </div>
            </div>
          </div>
        </div>
      </>}
    </div>
    </>
  );
}
