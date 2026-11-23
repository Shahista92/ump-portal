import React from 'react';
import { S, L, A, C } from '../../runtime.js';


export default function ModalTk({ V }) {
  return (
    <>
    <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "58", overflow: "hidden" }}>
      <div onClick={V.stop} style={{ background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "1120px", boxShadow: "0 24px 64px rgba(15,23,42,.28)", display: "flex", flexDirection: "column", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
        <div style={{ padding: "18px 22px", borderBottom: "1px solid #EEF2F6", display: "flex", gap: "14px", alignItems: "flex-start" }}>
          <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ fontWeight: "700", fontSize: "19px", letterSpacing: "-.015em", lineHeight: "1.3", color: "#0F172A" }}>{S(V.tk?.subject)}</div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", padding: "2px 10px", borderRadius: "999px", background: `${A(V.tk?.sbg)}`, color: `${A(V.tk?.sfg)}` }}>{S(V.tk?.status)}</span>
              <span style={{ fontSize: "12px", fontWeight: "500", padding: "2px 9px", borderRadius: "999px", background: "#ECFEFF", color: "#0E7490" }}>{S(V.tk?.topic)}</span>
              {V.tk?.fwd && <>
                <span style={{ fontSize: "12px", fontWeight: "500", padding: "2px 9px", borderRadius: "999px", background: "#F5F3FF", color: "#6D28D9" }}>Forwarded to AxisTech</span>
              </>}
            </div>
          </div>
          <button className="scp2" onClick={V.closeModal} title="Close" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
        </div>
        <div style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: "16px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(280px,2fr)", gap: "16px", background: "#F8FAFC", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: "0" }}>
            <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#334155" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", flexShrink: "0" }}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6" /></svg>
                <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>Description</span>
              </div>
              <div style={{ fontSize: "14px", lineHeight: "1.55", color: "#0f172a", textWrap: "pretty" }}>{S(V.tk?.desc)}</div>
              {V.tk?.hasFiles && <>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {L(V.tk?.files).map((f, i95) => <React.Fragment key={i95}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "28px", padding: "0 10px", borderRadius: "8px", border: "1px solid #E2E8F0", background: "#F8FAFC", fontSize: "12px", color: "#334155" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M21 11.5 12.5 20a5 5 0 0 1-7-7L14 4.5a3.3 3.3 0 0 1 4.7 4.7L10.2 17.7a1.7 1.7 0 0 1-2.4-2.4L15.5 7.6" /></svg>
                      {S(f)}
                    </span>
                  </React.Fragment>)}
                </div>
              </>}
            </div>
            <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", flexShrink: "0" }}><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z" /></svg>
                <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>Conversation</span>
              </div>
              {V.tk?.noMsgs && <>
                <div style={{ padding: "24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", color: "#475569", fontSize: "13px" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z" /></svg>
                  No messages yet. Start the conversation below.
                </div>
              </>}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxHeight: "340px", overflowY: "auto" }}>
                {L(V.tk?.msgs).map((m, i96) => <React.Fragment key={i96}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", flexDirection: `${A(m?.dir)}` }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: `${A(m?.abg)}`, color: `${A(m?.afg)}`, fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>{S(m?.ini)}</span>
                    <div style={{ maxWidth: "80%", display: "flex", flexDirection: "column", gap: "3px", alignItems: `${A(m?.align)}` }}>
                      <span style={{ fontSize: "12px", color: "#475569", display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap" }}>
                        {m?.internal && <>
                          <span style={{ fontSize: "10.5px", fontWeight: "600", padding: "1px 7px", borderRadius: "999px", background: "#FEF3C7", color: "#B45309" }}>Internal note</span>
                        </>}
                        <span>
                          <b style={{ color: "#0f172a", fontWeight: "600" }}>{S(m?.who)}</b>
                          {" · "}{S(m?.time)}
                        </span>
                      </span>
                      <div style={{ padding: "10px 13px", borderRadius: "12px", background: `${A(m?.bg)}`, border: `1px solid ${A(m?.bd)}`, fontSize: "14px", lineHeight: "1.5", color: "#0f172a" }}>{S(m?.text)}</div>
                    </div>
                  </div>
                </React.Fragment>)}
              </div>
              <div style={{ height: "1px", background: "#EEF2F6" }} />
              <div style={{ border: `1px solid ${A(V.tk?.taBd)}`, borderRadius: "10px", overflow: "hidden", background: `${A(V.tk?.taBg)}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "2px", flexWrap: "wrap", padding: "6px 8px", background: "#F8FAFC", borderBottom: "1px solid #EEF2F6" }}>
                  <button className="scp10" title="Format" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "6px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M7 5h6a3.5 3.5 0 0 1 0 7H7zM7 12h7a3.5 3.5 0 0 1 0 7H7z" /></svg></button>
                  <button className="scp10" title="Format" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "6px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M10 5h8M6 19h8M14 5l-4 14" /></svg></button>
                  <button className="scp10" title="Format" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "6px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M7 4v7a5 5 0 0 0 10 0V4M5 20h14" /></svg></button>
                  <button className="scp10" title="Format" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "6px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12h14M16 7a4 3 0 0 0-8 0c0 4 8 2 8 6a4 3 0 0 1-8 1" /></svg></button>
                  <span style={{ width: "1px", height: "18px", background: "#E2E8F0", margin: "0 4px" }} />
                  <button className="scp10" title="Format" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "6px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" /></svg></button>
                  <button className="scp10" title="Format" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "6px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M10 6h10M10 12h10M10 18h10M4 5h1v3M4 11h2l-2 3h2M4 17h2v3H4" /></svg></button>
                  <span style={{ width: "1px", height: "18px", background: "#E2E8F0", margin: "0 4px" }} />
                  <button className="scp10" title="Format" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "6px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></svg></button>
                  <button className="scp10" title="Format" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "6px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 5h16v14H4zM8.5 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM20 15l-5-5L5 19" /></svg></button>
                  <button className="scp10" title="Format" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "6px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 7h12v10H3zM15 10l6-3v10l-6-3" /></svg></button>
                  <button className="scp10" title="Format" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "6px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M21 11.5 12.5 20a5 5 0 0 1-7-7L14 4.5a3.3 3.3 0 0 1 4.7 4.7L10.2 17.7a1.7 1.7 0 0 1-2.4-2.4L15.5 7.6" /></svg></button>
                  <span style={{ width: "1px", height: "18px", background: "#E2E8F0", margin: "0 4px" }} />
                  <button className="scp10" title="Format" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "6px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 14 4 9l5-5M4 9h11a5 5 0 0 1 0 10h-3" /></svg></button>
                  <button className="scp10" title="Format" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "6px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M15 14l5-5-5-5M20 9H9a5 5 0 0 0 0 10h3" /></svg></button>
                </div>
                <textarea value={V.tk?.reply ?? ""} onChange={V.tk?.setReply} rows="3" placeholder={V.tk?.ph} style={{ display: "block", width: "100%", boxSizing: "border-box", border: "0", background: "transparent", padding: "12px 14px", font: "inherit", fontSize: "14px", outline: "0", resize: "vertical", minHeight: "84px" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                  <div style={{ display: "inline-flex", border: "1px solid #E2E8F0", borderRadius: "8px", overflow: "hidden" }}>
                    {L(V.tk?.modes).map((o, i97) => <React.Fragment key={i97}>
                      <button onClick={o?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "32px", padding: "0 12px", background: `${A(o?.bg)}`, color: `${A(o?.fg)}`, fontSize: "13px", fontWeight: `${A(o?.fw)}`, display: "inline-flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={o?.d} /></svg>
                        {S(o?.label)}
                      </button>
                    </React.Fragment>)}
                  </div>
                  {V.tk?.isReply && <>
                    <button onClick={V.tk?.toggleNotify} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#334155" }}>
                      <span style={{ width: "18px", height: "18px", borderRadius: "5px", border: `1.5px solid ${A(V.tk?.nBd)}`, background: `${A(V.tk?.nBg)}`, display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" style={{ strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round", opacity: `${A(V.tk?.nChk)}` }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                      Notify user by email
                    </button>
                  </>}
                  {V.tk?.isNote && <>
                    <span style={{ fontSize: "12px", color: "#B45309", display: "flex", alignItems: "center", gap: "6px" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                      </svg>
                      Only visible to UMP admins
                    </span>
                  </>}
                </div>
                <button onClick={V.tk?.send} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", background: `${A(V.tk?.sendBg)}`, color: "#fff", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></svg>
                  {S(V.tk?.sendLabel)}
                </button>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: "0" }}>
            <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 6px 18px rgba(15,23,42,.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E7490" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", flexShrink: "0" }}><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 12h2M3 12h2M12 3v2M12 19v2M17 7l1.4-1.4M5.6 18.4 7 17M17 17l1.4 1.4M5.6 5.6 7 7" /></svg>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>Manage</span>
                </div>
                <span style={{ fontSize: "12px", color: "#475569", paddingLeft: "24px" }}>Changes save automatically.</span>
              </div>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".06em", color: "#475569" }}>STATUS</span>
                <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ position: "absolute", left: "12px", pointerEvents: "none", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2" /></svg>
                  <select className="scpy" value={V.tk?.status ?? ""} onChange={V.tk?.setStatus} style={{ width: "100%", height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", font: "inherit", fontSize: "14px", background: "#fff", color: "#0f172a", cursor: "pointer", appearance: "none", WebkitAppearance: "none", boxSizing: "border-box", padding: "0 34px 0 36px" }}>
                    <option value="Open">Open</option>
                    <option value="In progress">In progress</option>
                    <option value="Waiting">Waiting</option>
                    <option value="Resolved">Resolved</option>
                    <option value="On hold">On hold</option>
                  </select>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ position: "absolute", right: "12px", pointerEvents: "none", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
                </span>
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".06em", color: "#475569" }}>ASSIGN TO</span>
                <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ position: "absolute", left: "12px", pointerEvents: "none", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0" /></svg>
                  <select className="scpy" value={V.tk?.assignee ?? ""} onChange={V.tk?.setAssignee} style={{ width: "100%", height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", font: "inherit", fontSize: "14px", background: "#fff", color: "#0f172a", cursor: "pointer", appearance: "none", WebkitAppearance: "none", boxSizing: "border-box", padding: "0 34px 0 36px" }}>
                    {L(V.tk?.assignees).map((a, i98) => <React.Fragment key={i98}>
                      <option value={a ?? ""}>{S(a)}</option>
                    </React.Fragment>)}
                  </select>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ position: "absolute", right: "12px", pointerEvents: "none", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
                </span>
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".06em", color: "#475569" }}>TOPIC</span>
                <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ position: "absolute", left: "12px", pointerEvents: "none", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 12V4h8l10 10-8 8zM7.5 8.5h.01" /></svg>
                  <select className="scpy" value={V.tk?.topic ?? ""} onChange={V.tk?.setTopic} style={{ width: "100%", height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", font: "inherit", fontSize: "14px", background: "#fff", color: "#0f172a", cursor: "pointer", appearance: "none", WebkitAppearance: "none", boxSizing: "border-box", padding: "0 34px 0 36px" }}>
                    {L(V.tk?.topics).map((o, i99) => <React.Fragment key={i99}>
                      <option value={o ?? ""}>{S(o)}</option>
                    </React.Fragment>)}
                  </select>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ position: "absolute", right: "12px", pointerEvents: "none", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
                </span>
              </label>
              {V.tk?.canFwd && <>
                <button className="scp1p" onClick={V.tk?.forward} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "38px", padding: "0 14px", borderRadius: "8px", border: "1px solid #BAE6FD", background: "#fff", color: "#0E7490", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "7px", whiteSpace: "nowrap" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M15 14l5-5-5-5" />
                    <path d="M20 9H9a5 5 0 0 0-5 5v6" />
                  </svg>
                  Forward to AxisTech
                </button>
              </>}
            </div>
            <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#334155" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", flexShrink: "0" }}><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8v.01" /></svg>
                <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>Details</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "10px" }}>
                {L(V.tk?.details).map((d, i100) => <React.Fragment key={i100}>
                  <div style={{ background: "#F8FAFC", border: "1px solid #EEF2F6", borderRadius: "10px", padding: "12px", display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".06em", color: "#475569" }}>{S(d?.k)}</span>
                    {d?.pill && <>
                      <span style={{ alignSelf: "flex-start", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "12px", fontWeight: "600", padding: "2px 9px", borderRadius: "999px", background: "#E2E8F0", color: "#1E293B" }}>{S(d?.v)}</span>
                    </>}
                    {d?.text && <>
                      <span style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{S(d?.v)}</span>
                    </>}
                    {d?.sub && <>
                      <span style={{ fontSize: "12px", color: "#475569", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{S(d?.sub)}</span>
                    </>}
                  </div>
                </React.Fragment>)}
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "12px 22px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "flex-end" }}><button className="scp11" onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 18px", border: "1px solid #CBD5E1", background: "#fff", color: "#0F172A", borderRadius: "8px", fontSize: "14px", fontWeight: "500" }}>Close</button></div>
      </div>
    </div>
    </>
  );
}
