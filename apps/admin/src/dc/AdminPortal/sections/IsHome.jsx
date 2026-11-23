import React from 'react';
import { S, L, A, C } from '../../runtime.js';


export default function IsHome({ V }) {
  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: "1 1 auto", minHeight: "420px" }}>
      <div style={{ flexShrink: "0", background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px 14px", flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: "0", fontSize: "19px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.2", color: "#0F172A" }}>{"Welcome, "}{S(V.me?.name)}</h1>
          <p style={{ margin: "2px 0 0", color: "#475569", fontSize: "13px", fontWeight: "400" }}>Manage farms and users of the Upper Murray region</p>
        </div>
        <div style={{ display: "flex", gap: "8px", flexShrink: "0" }}>
          <button className="scpd" onClick={V.nav?.farms?.go} style={{ appearance: "none", font: "inherit", color: "inherit", margin: "0", cursor: "pointer", textAlign: "left", background: "#f8fafc", border: "1px solid #f0f2f6", borderRadius: "10px", padding: "4px 12px 4px 5px", display: "flex", alignItems: "center", gap: "8px", minWidth: "96px" }}>
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#e6f7f5", color: "#0f766e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                <path d="M12 18.5 9 17l-6 3V6l6-3 6 3 6-3v7" />
                <path d="M9 3v14" />
                <path d="M15 6v5" />
                <path d="M21 17.4c0 2.2-3 4.6-3 4.6s-3-2.4-3-4.6a3 3 0 0 1 6 0z" />
                <circle cx="18" cy="17.4" r=".8" />
              </svg>
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <span style={{ fontSize: "11px", color: "#475569" }}>Farms</span>
              <span style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.2" }}>{S(V.counts?.farms)}</span>
            </span>
          </button>
          <button className="scpd" onClick={V.nav?.users?.go} style={{ appearance: "none", font: "inherit", color: "inherit", margin: "0", cursor: "pointer", textAlign: "left", background: "#f8fafc", border: "1px solid #f0f2f6", borderRadius: "10px", padding: "4px 12px 4px 5px", display: "flex", alignItems: "center", gap: "8px", minWidth: "96px" }}>
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#f5f3ff", color: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
                <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8" />
                <path d="M18.5 14.2A6.5 6.5 0 0 1 21.5 20" />
              </svg>
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <span style={{ fontSize: "11px", color: "#475569" }}>Users</span>
              <span style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.2" }}>{S(V.counts?.users)}</span>
            </span>
          </button>
          <button className="scpd" onClick={V.nav?.devices?.go} style={{ appearance: "none", font: "inherit", color: "inherit", margin: "0", cursor: "pointer", textAlign: "left", background: "#f8fafc", border: "1px solid #f0f2f6", borderRadius: "10px", padding: "4px 12px 4px 5px", display: "flex", alignItems: "center", gap: "8px", minWidth: "96px" }}>
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#eff6ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                <circle cx="12" cy="12" r="2" />
                <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" />
              </svg>
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <span style={{ fontSize: "11px", color: "#475569" }}>Devices</span>
              <span style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.2" }}>{S(V.counts?.devices)}</span>
            </span>
          </button>
        </div>
      </div>
      <div style={{ flex: "1", minHeight: "0", display: "grid", gridTemplateColumns: "minmax(330px,3.2fr) minmax(0,6.8fr)", gap: "14px" }}>
        <div style={{ minWidth: "0", minHeight: "0", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: "1", minHeight: "0", position: "relative", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "absolute", top: "6px", bottom: "12px", right: "-8px", width: "3px", pointerEvents: "none", zIndex: "2" }}><div ref={V.thumbRef} style={{ position: "absolute", left: "0", right: "0", top: "0", height: "10%", minHeight: "16px", borderRadius: "99px", background: "linear-gradient(180deg,#cbd5e1,#94a3b8)", opacity: "0", transition: "opacity .25s" }} /></div>
            <div data-thin="1" ref={V.dockScrollRef} onScroll={V.dockScroll} style={{ flex: "1", minHeight: "0", overflowY: "auto", scrollbarWidth: "none", padding: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              {L(V.dock).map((wd, i3) => <React.Fragment key={i3}>
                <div className="scpe" onDragOver={wd?.dragOver} onDrop={wd?.drop} style={{ flexShrink: "0", position: "relative", overflow: "hidden", background: "#fff", border: "1px solid #DCE3EB", borderRadius: "16px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 6px 16px rgba(15,23,42,.04)", opacity: `${A(wd?.op)}`, transition: "box-shadow .2s,opacity .15s" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "11px 10px 4px 14px" }}>
                    <span style={{ width: "20px", height: "20px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                      {wd?.k?.alerts && <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                          <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
                        </svg>
                      </>}
                      {wd?.k?.tickets && <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z" /></svg>
                      </>}
                      {wd?.k?.activity && <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                      </>}
                      {wd?.k?.providers && <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" /></svg>
                      </>}
                    </span>
                    <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}><span title={wd?.title} style={{ fontWeight: "600", fontSize: "13.5px", letterSpacing: "-.005em", color: "#0F172A", lineHeight: "1.3", whiteSpace: "nowrap" }}>{S(wd?.title)}</span></span></span>
                    <span style={{ display: "flex", gap: "1px", flexShrink: "0" }}>
                      <span className="scpf" draggable="true" onDragStart={wd?.dragStart} onDragEnd={V.dragEnd} title="Drag to reorder" style={{ cursor: "grab", color: "#cbd5e1", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "7px", transition: "background .12s,color .12s" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <circle cx="9" cy="6" r="1" />
                          <circle cx="15" cy="6" r="1" />
                          <circle cx="9" cy="12" r="1" />
                          <circle cx="15" cy="12" r="1" />
                          <circle cx="9" cy="18" r="1" />
                          <circle cx="15" cy="18" r="1" />
                        </svg>
                      </span>
                      <button className="scpg" onClick={wd?.toggle} title={wd?.colTitle} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "24px", height: "24px", borderRadius: "7px", color: "#94a3b8", display: "flex", alignItems: "center", justifyContent: "center", transform: `${A(wd?.rot)}`, transition: "transform .2s,background .12s,color .12s" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg></button>
                      <button className="scph" onClick={wd?.remove} title="Remove widget" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "24px", height: "24px", borderRadius: "7px", color: "#94a3b8", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .12s,color .12s" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
                    </span>
                  </div>
                  {wd?.open && <>
                    <div style={{ maxHeight: `${A(wd?.maxH)}`, overflowY: "auto", scrollbarWidth: "none", padding: "2px 8px 10px", display: "flex", flexDirection: "column", gap: "2px" }}>
                      {L(wd?.rows).map((r, i4) => <React.Fragment key={i4}>
                        <div className="scpi" onClick={r?.go} title="View details" style={{ display: "flex", alignItems: "flex-start", gap: "8px", padding: "9px 8px", borderRadius: "8px", transition: "background .15s", cursor: "pointer" }}>
                          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#475569", flexShrink: "0", marginTop: "6px" }} />
                          <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: "0" }}>
                              <div style={{ fontSize: "12.5px", fontWeight: "500", color: "#334155", lineHeight: "1.4", textWrap: "pretty" }}>{S(r?.title)}</div>
                              {r?.detail && <>
                                <div title={r?.detail} style={{ fontSize: "11.5px", color: "#475569", lineHeight: "1.4", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(r?.detail)}</div>
                              </>}
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: "400", color: "#475569", minWidth: "0", flexWrap: "wrap", gap: "6px" }}>
                              {r?.status && <>
                                <span style={{ flexShrink: "0", fontSize: "10.5px", fontWeight: "600", padding: "1px 8px", borderRadius: "999px", background: `${A(r?.stBg)}`, color: `${A(r?.stFg)}` }}>{S(r?.status)}</span>
                              </>}
                              <span style={{ lineHeight: "1.35" }}>{S(r?.sub)}</span>
                            </div>
                          </div>
                          <span style={{ color: "#cbd5e1", display: "flex", marginTop: "2px" }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m9 6 6 6-6 6" /></svg></span>
                        </div>
                      </React.Fragment>)}
                    </div>
                  </>}
                </div>
              </React.Fragment>)}
              {V.dockHas && <>
                <button className="scpj" onClick={V.togglePicker} style={{ position: "sticky", bottom: "0", zIndex: "3", boxShadow: "0 -8px 10px #F4F6F9", appearance: "none", border: "1.5px dashed #94A3B8", background: "#F4F6F9", font: "inherit", margin: "auto 0 0", cursor: "pointer", flexShrink: "0", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", height: "40px", padding: "0 14px", borderRadius: "12px", color: "#0A2342", fontSize: "13px", fontWeight: "500", transition: "background .12s,color .12s,border-color .12s" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 5v14M5 12h14" /></svg>
                  Add widget
                </button>
              </>}
              {V.dockEmpty && <>
                <button className="scpk" onClick={V.togglePicker} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", border: "1.5px dashed #d5dbe4", borderRadius: "16px", padding: "28px 20px", color: "#475569", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", textAlign: "center", transition: "border-color .15s,background .15s" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "10px", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 5v14M5 12h14" /></svg></span>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "#0f172a" }}>Add your first widget</span>
                  <span style={{ fontSize: "12px" }}>Alerts, support and recent activity</span>
                </button>
              </>}
            </div>
          </div>
        </div>
        {V.pickerOpen && <>
          <div onClick={V.togglePicker} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.4)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", zIndex: "60" }}>
            <div onClick={V.stop} style={{ background: "#fff", borderRadius: "20px", width: "100%", maxWidth: "520px", boxShadow: "0 30px 80px rgba(15,23,42,.3)", overflow: "hidden" }}>
              <div style={{ padding: "22px 24px 8px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                <div>
                  <div style={{ fontWeight: "600", fontSize: "18px", letterSpacing: "-.015em" }}>Widget library</div>
                  <div style={{ fontSize: "13px", color: "#475569", marginTop: "4px" }}>Choose what appears in your dock. Drag the handle on any widget to reorder.</div>
                </div>
                <button className="scpl" onClick={V.togglePicker} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
              </div>
              <div style={{ padding: "14px 24px 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {L(V.catalogue).map((c, i5) => <React.Fragment key={i5}>
                  <button className="scpm" onClick={c?.toggle} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", gap: "14px", padding: "12px 14px", borderRadius: "12px", background: `${A(c?.bg)}`, boxShadow: `0 0 0 ${A(c?.ringW)} ${A(c?.ring)}`, transition: "box-shadow .15s,background .15s" }}>
                    <span style={{ display: "contents" }}>
                      <span style={{ width: "32px", height: "32px", borderRadius: "10px", flexShrink: "0", background: `${A(c?.iconBg)}`, color: `${A(c?.iconFg)}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {c?.k?.alerts && <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                            <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
                          </svg>
                        </>}
                        {c?.k?.tickets && <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z" /></svg>
                        </>}
                        {c?.k?.activity && <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 2" />
                          </svg>
                        </>}
                        {c?.k?.providers && <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" /></svg>
                        </>}
                      </span>
                      <span style={{ order: "2", flexShrink: "0", fontSize: "12px", fontWeight: "600", padding: "3px 9px", borderRadius: "999px", background: `${A(c?.pillBg)}`, color: `${A(c?.pillFg)}` }}>{S(c?.action)}</span>
                    </span>
                    <span style={{ order: "1", flex: "1", minWidth: "0" }}>
                      <span style={{ display: "block", fontWeight: "600", fontSize: "14px" }}>{S(c?.name)}</span>
                      <span style={{ display: "block", fontSize: "12px", color: "#475569", marginTop: "3px", lineHeight: "1.4" }}>{S(c?.desc)}</span>
                    </span>
                  </button>
                </React.Fragment>)}
              </div>
            </div>
          </div>
        </>}
        <div style={{ minWidth: "0", minHeight: "0", position: "relative", borderRadius: "18px", overflow: "hidden", background: "#0b1220", boxShadow: "0 0 0 1px rgba(15,23,42,.08),0 12px 36px rgba(15,23,42,.12)" }}>
          <div ref={V.mapRef} style={{ position: "absolute", inset: "0" }} />
          {V.pop?.show && <>
            <div onMouseEnter={V.popEnter} onMouseLeave={V.popLeave} style={{ position: "absolute", left: `${A(V.pop?.left)}`, top: `${A(V.pop?.top)}`, transform: `${A(V.pop?.tf)}`, zIndex: "30", width: "236px", background: "rgba(255,255,255,.97)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRadius: "12px", padding: "12px", boxShadow: "0 0 0 1px rgba(15,23,42,.06),0 16px 40px rgba(15,23,42,.28)", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                <div style={{ fontWeight: "600", fontSize: "14px", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.pop?.name)}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#0e7490", fontWeight: "600", whiteSpace: "nowrap" }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(V.pop?.zc)}`, flexShrink: "0" }} />
                  {S(V.pop?.zone)}
                </div>
              </div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#fff7ed", border: "1px solid #fed7aa", color: "#ea580c", fontSize: "12px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <circle cx="9" cy="8" r="3.5" />
                    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
                    <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8" />
                    <path d="M18.5 14.2A6.5 6.5 0 0 1 21.5 20" />
                  </svg>
                  <b style={{ fontWeight: "700" }}>{S(V.pop?.users)}</b>
                  users
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#f5f3ff", border: "1px solid #ddd6fe", color: "#7c3aed", fontSize: "12px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <circle cx="12" cy="12" r="2" />
                    <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" />
                  </svg>
                  <b style={{ fontWeight: "700" }}>{S(V.pop?.devices)}</b>
                  devices
                </span>
              </div>
              <button className="scpn" onClick={V.pop?.launch} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", width: "100%", height: "34px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "12px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", transition: "background .15s" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
                Launch
              </button>
            </div>
          </>}
          {V.mapPanelClosed && <>
            <button className="scpo" onClick={V.toggleMapPanel} title="Map layers and basemap" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", position: "absolute", right: "12px", top: "12px", zIndex: "8", height: "34px", padding: "0 12px 0 10px", borderRadius: "10px", background: "rgba(15,23,42,.62)", backdropFilter: "blur(14px) saturate(160%)", WebkitBackdropFilter: "blur(14px) saturate(160%)", border: "1px solid rgba(255,255,255,.22)", boxShadow: "0 8px 24px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.18)", color: "#fff", fontSize: "12px", fontWeight: "500", letterSpacing: ".02em", display: "flex", alignItems: "center", gap: "8px", textShadow: "0 1px 2px rgba(0,0,0,.35)", transition: "background .15s,padding .15s" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                <path d="m12 3 9 5-9 5-9-5z" />
                <path d="m3 13 9 5 9-5" />
              </svg>
              View Maps
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", opacity: ".85" }}><path d="m6 9 6 6 6-6" /></svg>
            </button>
          </>}
          {V.mapPanelOpen && <>
            <div style={{ position: "absolute", right: "10px", top: "56px", bottom: "10px", width: "216px", maxWidth: "calc(100% - 20px)", zIndex: "8", borderRadius: "16px", background: "rgba(15,23,42,.62)", backdropFilter: "blur(14px) saturate(160%)", WebkitBackdropFilter: "blur(14px) saturate(160%)", border: "1px solid rgba(255,255,255,.22)", boxShadow: "0 8px 24px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.18)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 8px 4px 12px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#fff", whiteSpace: "nowrap" }}>Map view</span>
                <button className="scpp" onClick={V.toggleMapPanel} title="Collapse" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "26px", height: "26px", borderRadius: "8px", color: "rgba(255,255,255,.75)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 15 6-6 6 6" /></svg></button>
              </div>
              <div style={{ flex: "1", minHeight: "0", overflow: "hidden", padding: "0 6px 6px" }}>
                <div style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".1em", color: "rgba(255,255,255,.55)", padding: "2px 6px 2px", fontSize: "9.5px" }}>LAYERS</div>
                {L(V.mapLayers).map((ly, i6) => <React.Fragment key={i6}>
                  <button className="scpp" onClick={ly?.toggle} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "4px 6px", borderRadius: "7px", fontSize: "11px", fontWeight: "500", color: "#fff", transition: "background .12s" }}>
                    <span style={{ width: "20px", height: "20px", borderRadius: "6px", background: `${A(ly?.iconBg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><span style={{ width: "9px", height: "9px", borderRadius: `${A(ly?.shape)}`, background: `${A(ly?.dot)}`, boxShadow: "0 0 0 2px #fff" }} /></span>
                    <span style={{ flex: "1" }}>{S(ly?.label)}</span>
                    <span style={{ width: "28px", height: "16px", borderRadius: "999px", background: `${A(ly?.bg)}`, position: "relative", transition: "background .15s", flexShrink: "0" }}><span style={{ position: "absolute", top: "2px", left: `${A(ly?.knob)}`, width: "12px", height: "12px", borderRadius: "50%", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,.2)", transition: "left .15s" }} /></span>
                  </button>
                </React.Fragment>)}
                <div style={{ height: "1px", background: "rgba(255,255,255,.12)", margin: "4px 6px" }} />
                <div style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".1em", color: "rgba(255,255,255,.55)", padding: "2px 6px", fontSize: "9.5px" }}>BASEMAP</div>
                {L(V.basemaps).map((b, i7) => <React.Fragment key={i7}>
                  <button className="scpp" onClick={b?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "3px 6px", borderRadius: "7px", background: `${A(b?.bg)}`, color: `${A(b?.fg)}`, fontSize: "11px", fontWeight: `${A(b?.fw)}`, transition: "background .12s" }}>
                    <span style={{ width: "16px", height: "16px", borderRadius: "5px", background: `${A(b?.sw)}`, boxShadow: "inset 0 0 0 1px rgba(0,0,0,.12)", flexShrink: "0" }} />
                    <span style={{ flex: "1", minWidth: "0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(b?.label)}</span>
                    <span className="scpq" onClick={b?.makeDef} title={b?.starTitle} style={{ flexShrink: "0", width: "20px", height: "20px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", color: `${A(b?.starFg)}`, cursor: "pointer", transition: "background .12s,color .12s" }}><svg width="13" height="13" viewBox="0 0 24 24" fill={b?.starFill} stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" /></svg></span>
                    <span style={{ opacity: `${A(b?.chk)}`, display: "flex" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                  </button>
                </React.Fragment>)}
              </div>
            </div>
          </>}
          <div style={{ position: "absolute", bottom: "12px", left: "12px", zIndex: "5", borderRadius: "12px", padding: "8px 14px", maxWidth: "calc(100% - 24px)", boxSizing: "border-box", background: "rgba(15,23,42,.62)", backdropFilter: "blur(14px) saturate(160%)", WebkitBackdropFilter: "blur(14px) saturate(160%)", border: "1px solid rgba(255,255,255,.22)", boxShadow: "0 8px 24px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.18)", display: "flex", flexDirection: "column", alignItems: "stretch", gap: "0", cursor: "default", width: "max-content", maxWidth: "calc(100% - 24px)" }}>
            {V.zoneLeg?.legOpen && <>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,max-content)", gap: "5px 16px", paddingBottom: "8px", marginBottom: "6px", borderBottom: "1px solid rgba(255,255,255,.18)" }}>
                {L(V.zoneLeg?.items).map((sr, izl) => <React.Fragment key={izl}>
                  <span style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "12px", color: "#fff", fontWeight: "500", whiteSpace: "nowrap", minWidth: "0", textShadow: "0 1px 2px rgba(0,0,0,.4)" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(sr?.c)}`, flexShrink: "0", boxShadow: "0 0 0 2px rgba(255,255,255,.35)" }} />
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{S(sr?.n)}</span>
                  </span>
                </React.Fragment>)}
              </div>
            </>}
            <button onClick={V.zoneLeg?.toggle} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", fontWeight: "600", whiteSpace: "nowrap", textShadow: "0 1px 2px rgba(0,0,0,.4)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 3 3 7.5l9 4.5 9-4.5zM3 12l9 4.5 9-4.5M3 16.5 12 21l9-4.5" /></svg>
              {S(V.zoneLeg?.label)}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", transform: V.zoneLeg?.legOpen ? "rotate(180deg)" : "none" }}><path d="m6 15 6-6 6 6" /></svg>
            </button>
          </div>
          <div style={{ position: "absolute", top: "12px", left: "12px", width: "min(240px,calc(100% - 172px))", minWidth: "110px", zIndex: "7" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 11px", borderRadius: "10px", background: "rgba(15,23,42,.62)", backdropFilter: "blur(14px) saturate(160%)", WebkitBackdropFilter: "blur(14px) saturate(160%)", border: "1px solid rgba(255,255,255,.22)", boxShadow: "0 8px 24px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.18)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round" }}>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input value={V.mapQuery ?? ""} onChange={V.setMapQuery} data-glass="1" onKeyDown={V.mapKey} placeholder="Search farms" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13px", background: "transparent", color: "#fff" }} />
            </div>
            {V.showMapResults && <>
              <div style={{ marginTop: "6px", borderRadius: "12px", background: "rgba(15,23,42,.62)", backdropFilter: "blur(14px) saturate(160%)", WebkitBackdropFilter: "blur(14px) saturate(160%)", border: "1px solid rgba(255,255,255,.22)", boxShadow: "0 8px 24px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.18)", padding: "6px", display: "flex", flexDirection: "column" }}>
                {L(V.mapResults).map((f, i9) => <React.Fragment key={i9}>
                  <button className="scpr" onClick={f?.fly} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "#fff", margin: "0", padding: "8px 10px", borderRadius: "8px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", gap: "10px" }}>
                    <span style={{ fontWeight: "500", fontSize: "13px" }}>{S(f?.name)}</span>
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,.65)" }}>{S(f?.zone)}</span>
                  </button>
                </React.Fragment>)}
                {V.mapNoResults && <>
                  <span style={{ padding: "8px 10px", fontSize: "12.5px", color: "rgba(255,255,255,.75)" }}>No farms found</span>
                </>}
              </div>
            </>}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
