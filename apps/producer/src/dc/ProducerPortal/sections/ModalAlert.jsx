import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';

export default function ModalAlert({ V }) {
  return (
    <>
    <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.42)", zIndex: "60", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
      <div onClick={V.stop} style={{ width: "min(945px,100%)", maxHeight: "calc(100vh - 24px)", background: "#fff", borderRadius: "12px", boxShadow: "0 30px 80px rgba(15,23,42,.3)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ padding: "10px 16px", borderBottom: "1px solid #EEF2F6", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: "0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: "#E8F3EC", color: "#2F7A4F", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0" /></svg></span>
            <span style={{ fontWeight: "700", fontSize: "15px", color: "#0F172A" }}>{S(V.na?.title)}</span>
          </div>
          <button className="scp2" onClick={V.closeModal} title="Close" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "6px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
        </div>
        <div style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: "10px 16px", display: "flex", flexDirection: "column", gap: "7px", background: "linear-gradient(180deg,#F5FAF7 0,#fff 90px)" }}>
          <div style={{ background: "#fff", border: "1px solid #B9DCC6", borderRadius: "8px", overflow: "hidden", flexShrink: "0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 12px", background: "#EEF6F1", borderBottom: "1px solid #B9DCC6" }}>
              <span style={{ width: "17px", height: "17px", borderRadius: "50%", background: "#2F7A4F", color: "#fff", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>1</span>
              <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: "rgba(255,255,255,.7)", border: "1px solid #B9DCC6", color: "#2F7A4F", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7" /></svg></span>
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".08em", color: "#2F7A4F" }}>ALERT DETAILS</span>
              <button onClick={V.na?.toggleEnabled} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0 0 0 auto", padding: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: "600", color: "#334155" }}>
                Enabled
                <span style={{ width: "40px", height: "22px", borderRadius: "999px", background: `${A(V.na?.enBg)}`, position: "relative", transition: "background .15s" }}><span style={{ position: "absolute", top: "2px", left: `${A(V.na?.enKnob)}`, width: "18px", height: "18px", borderRadius: "50%", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,.25)", transition: "left .15s" }} /></span>
              </button>
            </div>
            <div style={{ padding: "4px 12px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "136px minmax(0,1fr)", gap: "12px", alignItems: "start", padding: "4px 0", borderBottom: "1px solid #EEF2F6" }}>
                <div style={{ paddingTop: "6px", display: "flex", flexDirection: "column", gap: "1px" }}><span style={{ fontSize: "12.5px", fontWeight: "600", color: "#1E293B" }}>Name</span></div>
                <div style={{ minWidth: "0" }}><input className="scp1z" value={V.na?.name ?? ""} onChange={V.na?.setName} placeholder="Name this alert" style={{ height: "30px", padding: "0 12px", border: "1px solid #D5DDE5", borderRadius: "6px", font: "inherit", fontSize: "13px", outline: "0", background: "#fff", width: "100%", boxSizing: "border-box", color: "#0F172A" }} /></div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "136px minmax(0,1fr)", gap: "12px", alignItems: "start", padding: "4px 0" }}>
                <div style={{ paddingTop: "6px", display: "flex", flexDirection: "column", gap: "1px" }}><span style={{ fontSize: "12.5px", fontWeight: "600", color: "#1E293B" }}>Device</span></div>
                <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "7px", alignItems: "flex-start" }}>
                  <select className="scp1z" value={V.na?.device ?? ""} onChange={V.na?.setDevice} style={{ height: "30px", padding: "0 12px", border: "1px solid #D5DDE5", borderRadius: "6px", font: "inherit", fontSize: "13px", outline: "0", background: "#fff", width: "100%", boxSizing: "border-box", color: "#0F172A", cursor: "pointer", padding: "0 10px" }}>
                    <option value="" disabled>Select Device</option>
                    {L(V.na?.devOpts).map((o, i282) => <React.Fragment key={i282}>
                      <option value={o?.v ?? ""}>{S(o?.label)}</option>
                    </React.Fragment>)}
                  </select>
                  {V.na?.hasDev && <>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "22px", padding: "0 9px", borderRadius: "999px", border: "1px solid #9FD3C7", background: "#EFFAF7", color: "#0F766E", fontSize: "11.5px", fontWeight: "600" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={V.na?.typeIc} /></svg>
                      {S(V.na?.typeL)}
                    </span>
                  </>}
                </div>
              </div>
            </div>
          </div>
          {V.na?.hasDev && <>
            <div style={{ background: "#fff", border: "1px solid #F5D6AE", borderRadius: "8px", overflow: "hidden", flexShrink: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 12px", background: "#FFF6EA", borderBottom: "1px solid #F5D6AE" }}>
                <span style={{ width: "17px", height: "17px", borderRadius: "50%", background: "#E08A2B", color: "#fff", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>2</span>
                <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: "rgba(255,255,255,.7)", border: "1px solid #F5D6AE", color: "#C2711C", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontStyle: "italic", fontFamily: "Georgia,serif" }}>fx</span>
                <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".08em", color: "#A85E12" }}>ALERT CONDITIONS</span>
                <span style={{ marginLeft: "auto", minWidth: "20px", height: "20px", padding: "0 6px", borderRadius: "999px", background: "#FDE9CF", color: "#A85E12", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>{S(V.na?.condN)}</span>
              </div>
              <div style={{ padding: "8px 12px 10px", display: "flex", flexDirection: "column", gap: "5px" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <select className="scp1z" value={V.na?.addK ?? ""} onChange={V.na?.setAdd} style={{ height: "30px", padding: "0 12px", border: "1px solid #D5DDE5", borderRadius: "6px", font: "inherit", fontSize: "13px", outline: "0", background: "#fff", width: "100%", boxSizing: "border-box", color: "#0F172A", cursor: "pointer", padding: "0 10px", flex: "1", minWidth: "0", borderColor: "#2F7A4F" }}>
                    <option value="">Add a condition…</option>
                    {L(V.na?.condOpts).map((o, i283) => <React.Fragment key={i283}>
                      <option value={o?.v ?? ""}>{S(o?.label)}</option>
                    </React.Fragment>)}
                  </select>
                  <button onClick={V.na?.addCond} style={{ appearance: "none", font: "inherit", margin: "0", cursor: `${A(V.na?.addCur)}`, height: "26px", padding: "0 12px", borderRadius: "5px", border: `1px dashed ${A(V.na?.addBd)}`, background: `${A(V.na?.addBg)}`, color: `${A(V.na?.addFg)}`, fontSize: "12px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "5px", flexShrink: "0" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round" }}><path d="M12 5v14M5 12h14" /></svg>
                    Add
                  </button>
                </div>
                <span style={{ fontSize: "11.5px", color: "#475569", display: "flex", gap: "4px", flexWrap: "wrap" }}>
                  {S(V.na?.readL)}
                  {V.na?.showAllOn && <>
                    <button onClick={V.na?.toggleAll} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", color: "#2F7A4F", fontWeight: "600", textDecoration: "underline", textUnderlineOffset: "2px" }}>{S(V.na?.showAllL)}</button>
                  </>}
                </span>
                {V.na?.noConds && <>
                  <span style={{ fontSize: "12px", color: "#475569", paddingTop: "4px" }}>No conditions yet — add one above.</span>
                </>}
                {V.na?.hasConds && <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "2px" }}>
                    {L(V.na?.conds).map((c, i284) => <React.Fragment key={i284}>
                      <div style={{ display: "grid", gridTemplateColumns: "minmax(150px,1.1fr) minmax(150px,1fr) minmax(130px,1fr) 28px", gap: "10px", alignItems: "center", padding: "8px 10px", border: "1px solid #E2E8F0", borderRadius: "6px", background: "#F8FAFC" }}>
                        <div style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(c?.label)}</span>
                          <span style={{ fontSize: "11px", color: "#64748B" }}>{S(c?.now)}</span>
                        </div>
                        <select className="scp1z" value={c?.op ?? ""} onChange={c?.setOp} style={{ height: "30px", padding: "0 12px", border: "1px solid #D5DDE5", borderRadius: "6px", font: "inherit", fontSize: "13px", outline: "0", background: "#fff", width: "100%", boxSizing: "border-box", color: "#0F172A", cursor: "pointer", padding: "0 10px" }}>
                          <option value="" disabled>Operator</option>
                          {L(c?.ops).map((o, i285) => <React.Fragment key={i285}>
                            <option value={o ?? ""}>{S(o)}</option>
                          </React.Fragment>)}
                        </select>
                        <span style={{ position: "relative", display: "block" }}>
                          <input className="scp1z" value={c?.val ?? ""} onChange={c?.setVal} placeholder="Value" inputMode="decimal" style={{ height: "30px", padding: "0 12px", border: "1px solid #D5DDE5", borderRadius: "6px", font: "inherit", fontSize: "13px", outline: "0", background: "#fff", width: "100%", boxSizing: "border-box", color: "#0F172A", paddingRight: "44px" }} />
                          <span style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", fontSize: "12.5px", color: "#475569", pointerEvents: "none" }}>{S(c?.unit)}</span>
                        </span>
                        <button className="scp1n" onClick={c?.remove} title="Remove condition" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "28px", height: "28px", borderRadius: "6px", color: "#E0603A", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
                      </div>
                    </React.Fragment>)}
                    <span style={{ fontSize: "11.5px", color: "#475569" }}>All conditions must be true.</span>
                  </div>
                </>}
              </div>
            </div>
          </>}
          <div style={{ background: "#fff", border: "1px solid #D9CFF5", borderRadius: "8px", overflow: "hidden", flexShrink: "0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 12px", background: "#F5F2FD", borderBottom: "1px solid #D9CFF5" }}>
              <span style={{ width: "17px", height: "17px", borderRadius: "50%", background: "#6D4FC2", color: "#fff", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>{S(V.na?.nRec)}</span>
              <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: "rgba(255,255,255,.7)", border: "1px solid #D9CFF5", color: "#6D4FC2", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21a7 7 0 0 1 14 0M17 3.5a4 4 0 0 1 0 7.5M22 21a7 7 0 0 0-4-6.3" /></svg></span>
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".08em", color: "#6D4FC2" }}>RECIPIENTS</span>
            </div>
            <div style={{ padding: "4px 12px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "136px minmax(0,1fr)", gap: "12px", alignItems: "start", padding: "4px 0", borderBottom: "1px solid #EEF2F6" }}>
                <div style={{ paddingTop: "6px", display: "flex", flexDirection: "column", gap: "1px" }}><span style={{ fontSize: "12.5px", fontWeight: "600", color: "#1E293B" }}>Recipient Roles</span></div>
                <div style={{ minWidth: "0" }}>
                  <div style={{ display: "flex", gap: "8px 22px", flexWrap: "wrap", paddingTop: "5px" }}>
                    {L(V.na?.roles).map((r, i286) => <React.Fragment key={i286}>
                      <button onClick={r?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#1E293B" }}>
                        <span style={{ width: "17px", height: "17px", borderRadius: "3px", border: `1.5px solid ${A(r?.bd)}`, background: `${A(r?.bg)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", boxSizing: "border-box" }}>{S(r?.tick)}</span>
                        {r?.d && <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={r?.d} /></svg>
                        </>}
                        {S(r?.label)}
                      </button>
                    </React.Fragment>)}
                  </div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "136px minmax(0,1fr)", gap: "12px", alignItems: "start", padding: "4px 0", borderBottom: "1px solid #EEF2F6" }}>
                <div style={{ paddingTop: "6px", display: "flex", flexDirection: "column", gap: "1px" }}>
                  <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#1E293B" }}>Also Notify</span>
                  <span style={{ fontSize: "11px", color: "#64748B" }}>Type, then comma</span>
                </div>
                <div style={{ minWidth: "0" }}><textarea className="scp1z" value={V.na?.extra ?? ""} onChange={V.na?.setExtra} rows="1" placeholder="john@example.com, +61 412 345 678" style={{ height: "30px", padding: "0 12px", border: "1px solid #D5DDE5", borderRadius: "6px", font: "inherit", fontSize: "13px", outline: "0", background: "#fff", width: "100%", boxSizing: "border-box", color: "#0F172A", height: "auto", minHeight: "34px", padding: "6px 10px", resize: "vertical" }} /></div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "136px minmax(0,1fr)", gap: "12px", alignItems: "start", padding: "4px 0" }}>
                <div style={{ paddingTop: "6px", display: "flex", flexDirection: "column", gap: "1px" }}><span style={{ fontSize: "12.5px", fontWeight: "600", color: "#1E293B" }}>Notify By</span></div>
                <div style={{ minWidth: "0" }}>
                  <div style={{ display: "flex", gap: "8px 22px", flexWrap: "wrap", paddingTop: "5px" }}>
                    {L(V.na?.via).map((r, i287) => <React.Fragment key={i287}>
                      <button onClick={r?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#1E293B" }}>
                        <span style={{ width: "17px", height: "17px", borderRadius: "3px", border: `1.5px solid ${A(r?.bd)}`, background: `${A(r?.bg)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", boxSizing: "border-box" }}>{S(r?.tick)}</span>
                        {r?.d && <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={r?.d} /></svg>
                        </>}
                        {S(r?.label)}
                      </button>
                    </React.Fragment>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #B6E3EC", borderRadius: "8px", overflow: "hidden", flexShrink: "0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 12px", background: "#EAF7FA", borderBottom: "1px solid #B6E3EC" }}>
              <span style={{ width: "17px", height: "17px", borderRadius: "50%", background: "#1C8FA6", color: "#fff", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>{S(V.na?.nSet)}</span>
              <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: "rgba(255,255,255,.7)", border: "1px solid #B6E3EC", color: "#1C8FA6", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12" /></svg></span>
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".08em", color: "#1C8FA6" }}>ALERT SETTINGS</span>
            </div>
            <div style={{ padding: "4px 12px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "136px minmax(0,1fr) auto minmax(0,1fr)", gap: "12px", alignItems: "center", padding: "4px 0", borderBottom: "1px solid #EEF2F6" }}>
                <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#1E293B" }}>Alert Frequency</span>
                <select className="scp1z" value={V.na?.freq ?? ""} onChange={V.na?.setFreq} style={{ height: "30px", padding: "0 12px", border: "1px solid #D5DDE5", borderRadius: "6px", font: "inherit", fontSize: "13px", outline: "0", background: "#fff", width: "100%", boxSizing: "border-box", color: "#0F172A", cursor: "pointer", padding: "0 10px" }}>
                  <option>Every hour</option>
                  <option>Every 6 hours</option>
                  <option>Every 12 hours</option>
                  <option>Once a day</option>
                </select>
                <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#1E293B" }}>Priority</span>
                <select className="scp1z" value={V.na?.priority ?? ""} onChange={V.na?.setPriority} style={{ height: "30px", padding: "0 12px", border: "1px solid #D5DDE5", borderRadius: "6px", font: "inherit", fontSize: "13px", outline: "0", background: "#fff", width: "100%", boxSizing: "border-box", color: "#0F172A", cursor: "pointer", padding: "0 10px", color: `${A(V.na?.prFg)}`, fontWeight: "600" }}>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "136px minmax(0,1fr)", gap: "12px", alignItems: "start", padding: "4px 0" }}>
                <div style={{ paddingTop: "6px", display: "flex", flexDirection: "column", gap: "1px" }}>
                  <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#1E293B" }}>Message</span>
                  <span style={{ fontSize: "11px", color: "#64748B" }}>Buttons insert live values</span>
                </div>
                <div style={{ minWidth: "0" }}>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center", marginBottom: "6px" }}>
                    {L(V.na?.inserts).map((i, i288) => <React.Fragment key={i288}>
                      <button className="scp20" onClick={i?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: `${A(i?.cur)}`, opacity: `${A(i?.op)}`, height: "22px", padding: "0 9px", borderRadius: "5px", border: "1px dashed #2F7A4F", background: "#fff", color: "#2F7A4F", fontSize: "11px" }}>{S(i?.label)}</button>
                    </React.Fragment>)}
                    <button onClick={V.na?.clearMsg} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0 4px", cursor: "pointer", color: "#E0A23A", fontSize: "11px", fontWeight: "600" }}>Clear</button>
                  </div>
                  <textarea className="scp1z" value={V.na?.msg ?? ""} onChange={V.na?.setMsg} rows="2" placeholder="What happened, and which reading says so" style={{ height: "30px", padding: "0 12px", border: "1px solid #D5DDE5", borderRadius: "6px", font: "inherit", fontSize: "13px", outline: "0", background: "#fff", width: "100%", boxSizing: "border-box", color: "#0F172A", height: "auto", minHeight: "46px", padding: "6px 10px", resize: "vertical" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "9px 16px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "flex-end", gap: "10px", flexShrink: "0", background: "#fff" }}>
          <button className="scp20" onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "30px", padding: "0 18px", borderRadius: "5px", border: "1px solid #2F7A4F", background: "#fff", color: "#2F7A4F", fontSize: "12.5px", fontWeight: "500" }}>Cancel</button>
          <button className="scp21" onClick={V.na?.submit} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "30px", padding: "0 18px", borderRadius: "5px", background: `${A(V.na?.btn)}`, color: "#fff", fontSize: "12.5px", fontWeight: "600" }}>{S(V.na?.btnL)}</button>
        </div>
      </div>
    </div>
    </>
  );
}
