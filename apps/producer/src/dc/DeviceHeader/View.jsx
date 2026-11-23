import React from 'react';
import { S, L, A, C } from '../runtime.js';


// Generated from "Device Header.dc.html". V = { ...props, ...renderVals() } from DeviceHeader.jsx
export default function View({ V }) {
  return (
    <div className="sc-host">
      <div style={{ background: "#fff", borderBottom: "1px solid #E5E8E6", fontFamily: "Inter, system-ui, sans-serif", color: "#0F1A14" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", padding: "14px 20px" }}>
          <span className="scp3d" onClick={V.h?.back} title="Back to Devices &amp; Sensors" style={{ width: "32px", height: "32px", flex: "0 0 32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "18px", height: "18px" }}><path d="M19 12H5M11 18l-6-6 6-6" /></svg></span>
          {V.pair && <>
            <div style={{ position: "relative", width: "52px", height: "32px", flex: "0 0 52px" }}>
              <span style={{ position: "absolute", left: "20px", top: "0", width: "32px", height: "32px", borderRadius: "50%", background: `${A(V.h?.c2)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "7px", boxSizing: "border-box" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ width: "15px", height: "15px" }}><path d={V.h?.icon2} /></svg></span>
              <span style={{ position: "absolute", left: "0", top: "0", width: "32px", height: "32px", borderRadius: "50%", background: `${A(V.h?.c1)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 2.5px #fff" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ width: "15px", height: "15px" }}><path d={V.h?.icon} /></svg></span>
            </div>
          </>}
          {V.single && <>
            <span style={{ width: "32px", height: "32px", flex: "0 0 32px", borderRadius: "50%", background: `${A(V.h?.c1)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px" }}><path d={V.h?.icon} /></svg></span>
          </>}
          <div style={{ position: "relative" }}>
            <div className="scp3e" onClick={V.toggleMenu} title={V.h?.serial} style={{ display: "flex", alignItems: "center", gap: "12px", border: "1px solid #E5E8E6", borderRadius: "8px", padding: "9px 14px", cursor: `${A(V.menuCursor)}`, minWidth: "150px", background: "#fff" }}>
              <span style={{ fontSize: "15.5px", fontWeight: "700", whiteSpace: "nowrap" }}>{S(V.h?.name)}</span>
              <span style={{ flex: "1" }} />
              {V.hasMenu && <>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#3F4B45" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
              </>}
            </div>
            {V.menuOpen && <>
              <div style={{ position: "absolute", top: "calc(100% + 6px)", left: "0", width: "310px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "10px", boxShadow: "0 16px 40px rgba(15,26,20,.16)", padding: "8px", zIndex: "60" }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 8px 9px" }}>
                  <span style={{ fontSize: "12.5px", fontWeight: "600", letterSpacing: ".6px", color: "#6A746E" }}>SELECT DEVICES</span>
                  <span style={{ fontSize: "12.5px", color: "#6A746E" }}>{S(V.h?.menu?.count)}</span>
                </div>
                {L(V.h?.menu?.options).map((opt, i0) => <React.Fragment key={i0}>
                  <div className="scp2o" onClick={opt?.toggle} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px", borderRadius: "6px", cursor: "pointer" }}>
                    <span style={{ width: "16px", height: "16px", borderRadius: "4px", border: `1.5px solid ${A(opt?.boxBorder)}`, background: `${A(opt?.boxBg)}`, color: "#fff", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 16px" }}>{S(opt?.tick)}</span>
                    <span style={{ flex: "1", minWidth: "0" }}>
                      <span style={{ display: "block", fontSize: "15px", fontWeight: "500" }}>{S(opt?.name)}</span>
                      <span style={{ display: "block", fontSize: "12.5px", color: "#8A948E" }}>{S(opt?.serial)}</span>
                    </span>
                  </div>
                </React.Fragment>)}
              </div>
            </>}
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid #D9C8F5", background: "#F6F0FE", color: "#7C4DDA", borderRadius: "999px", padding: "4px 11px", fontSize: "12.5px", fontWeight: "600", whiteSpace: "nowrap" }}>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z" /></svg>
            {S(V.h?.tag)}
          </span>
          <span style={{ flex: "1" }} />
          <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#3F4B45", whiteSpace: "nowrap" }}>
            <span style={{ position: "relative", width: "10px", height: "10px", display: "inline-flex" }}>
              <span style={{ position: "absolute", inset: "0", borderRadius: "50%", background: "#22C55E", animation: "wxLivePulse 1.8s ease-out infinite" }} />
              <span style={{ position: "relative", width: "10px", height: "10px", borderRadius: "50%", background: "#16A34A" }} />
            </span>
            
      Last sampling: 
            <b style={{ color: "#0F1A14" }}>{S(V.h?.stamp)}</b>
          </span>
          <span style={{ width: "1px", height: "26px", background: "#E5E8E6" }} />
          <span className="scp3f" onClick={V.h?.info?.toggle} style={{ display: "flex", alignItems: "center", gap: "7px", border: `1px solid ${A(V.infoBd)}`, background: `${A(V.infoBg)}`, color: "#3F4B45", borderRadius: "8px", padding: "8px 13px", fontSize: "14px", fontWeight: "600", cursor: "pointer", whiteSpace: "nowrap" }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 16v-5M12 8h.01" />
            </svg>
            Info
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${A(V.infoRot)})`, transition: "transform .2s ease" }}><path d="M6 9l6 6 6-6" /></svg>
          </span>
          <span className="scp2o" onClick={V.fullscreen} style={{ display: "flex", alignItems: "center", gap: "7px", border: "1px solid #0E7C3A", color: "#0E7C3A", borderRadius: "8px", padding: "8px 13px", fontSize: "14px", fontWeight: "600", cursor: "pointer", whiteSpace: "nowrap" }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
            {S(V.fsLabel)}
          </span>
        </div>
        {V.profLine && <>
          <div style={{ borderTop: "1px solid #EEF1EF", padding: "10px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={V.pf?.ink} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              <span style={{ fontSize: "14.5px", fontWeight: "700", color: "#0F1A14" }}>{S(V.pf?.cur?.name)}</span>
              <span style={{ fontSize: "11.5px", fontWeight: "600", padding: "2px 8px", borderRadius: "999px", background: `${A(V.pf?.cur?.pillBg)}`, color: `${A(V.pf?.cur?.pillInk)}` }}>{S(V.pf?.cur?.pill)}</span>
              <span style={{ fontSize: "13px", color: "#6A746E" }}>{S(V.pf?.cur?.range)}</span>
              <span style={{ flex: "1" }} />
              <span className="scp2o" onClick={V.pf?.toggleHist} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13.5px", fontWeight: "600", color: "#0E7C3A", cursor: "pointer", padding: "5px 8px", borderRadius: "6px" }}>
                Profile history ({S(V.pf?.total)})
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${A(V.pf?.histRot)})`, transition: "transform .2s ease" }}><path d="M6 9l6 6 6-6" /></svg>
              </span>
            </div>
            {V.pf?.hist && <>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingBottom: "4px" }}>
                <div style={{ display: "flex", gap: "3px", height: "44px" }}>
                  {L(V.pf?.segs).map((s, i1) => <React.Fragment key={i1}>
                    <div className="scp3g" onClick={s?.pick} title={s?.name} style={{ flex: `${A(s?.grow)} 1 0`, minWidth: `${A(s?.minW)}`, borderRadius: "6px", background: `${A(s?.bg)}`, border: `1.5px solid ${A(s?.bd)}`, padding: "5px 9px", boxSizing: "border-box", cursor: "pointer", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <span style={{ fontSize: "12.5px", fontWeight: "600", color: `${A(s?.ink)}`, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(s?.name)}</span>
                      <span style={{ fontSize: "11.5px", color: `${A(s?.sub)}`, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(s?.range)}</span>
                    </div>
                  </React.Fragment>)}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11.5px", color: "#8A948E" }}>
                  <span>09/10/2024</span>
                  <span>Today</span>
                </div>
              </div>
            </>}
          </div>
        </>}
        {V.pf?.past && <>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", padding: "8px 20px", background: "#FFF7E6", borderTop: "1px solid #F5DFB0", fontSize: "13.5px", color: "#7A4A06" }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <span>
              {"Viewing past profile "}
              <b>{S(V.pf?.cur?.name)}</b>
              {" · "}{S(V.pf?.cur?.range)}. Readings are historical.
            </span>
            <span style={{ flex: "1" }} />
            <span onClick={V.pf?.backActive} style={{ fontWeight: "700", color: "#0E7C3A", cursor: "pointer", padding: "4px 8px", borderRadius: "6px", background: "#fff", border: "1px solid #CFE5C8" }}>Back to active profile</span>
          </div>
        </>}
        {V.hasTabs && <>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "0 20px", borderTop: "1px solid #EEF1EF", flexWrap: "wrap" }}>
            {L(V.tabs).map((t, i2) => <React.Fragment key={i2}>
              <span className="scp2q" onClick={t?.go} style={{ display: "flex", alignItems: "center", gap: "7px", padding: "13px 14px 11px", fontSize: "15px", fontWeight: `${A(t?.weight)}`, color: `${A(t?.ink)}`, borderBottom: `2.5px solid ${A(t?.line)}`, cursor: "pointer", whiteSpace: "nowrap" }}>
                {t?.badge && <>
                  <span style={{ width: "22px", height: "22px", flex: "0 0 22px", borderRadius: "6px", background: "#1E8E3E", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5" /></svg></span>
                </>}
                {t?.plain && <>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={t?.iconInk} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d={t?.icon} /></svg>
                </>}
                {S(t?.label)}
              </span>
            </React.Fragment>)}
            {V.profDrop && <>
              <div style={{ marginLeft: "auto", position: "relative", display: "flex", alignItems: "center" }}>
                <div className="scp3e" onClick={V.pf?.toggle} style={{ display: "flex", alignItems: "center", gap: "7px", padding: "5px 10px", border: `1px solid ${A(V.pf?.chipBd)}`, borderRadius: "8px", cursor: "pointer", background: `${A(V.pf?.chipBg)}` }}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke={V.pf?.ink} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                  <span style={{ fontSize: "13px", color: "#6A746E", whiteSpace: "nowrap" }}>Profile</span>
                  <span style={{ fontSize: "13.5px", fontWeight: "600", color: "#0F1A14", whiteSpace: "nowrap" }}>{S(V.pf?.cur?.name)}</span>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(V.pf?.ink)}` }} title={V.pf?.cur?.pill} />
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#3F4B45" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                </div>
                {V.pf?.open && <>
                  <div style={{ position: "absolute", top: "calc(100% + 4px)", right: "0", width: "340px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "10px", boxShadow: "0 16px 40px rgba(15,26,20,.16)", padding: "8px", zIndex: "60", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "12.5px", fontWeight: "600", letterSpacing: ".6px", color: "#6A746E", padding: "5px 8px 7px" }}>INSTALLATION PROFILES</span>
                    {L(V.pf?.items).map((p, i3) => <React.Fragment key={i3}>
                      <div className="scp2o" onClick={p?.pick} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "9px 8px", borderRadius: "6px", cursor: "pointer", background: `${A(p?.rowBg)}` }}>
                        <span style={{ width: "16px", flex: "0 0 16px", paddingTop: "2px", color: "#0E7C3A", fontSize: "14px", fontWeight: "700" }}>{S(p?.tick)}</span>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontSize: "14.5px", fontWeight: "600", color: "#0F1A14" }}>{S(p?.name)}</span>
                            {p?.active && <>
                              <span style={{ fontSize: "11.5px", fontWeight: "600", padding: "1px 7px", borderRadius: "999px", background: "#E7F6EC", color: "#0E7C3A" }}>Active</span>
                            </>}
                          </span>
                          <span style={{ fontSize: "12.5px", color: "#6A746E" }}>{S(p?.range)}{" · "}{S(p?.meta)}</span>
                        </span>
                      </div>
                    </React.Fragment>)}
                  </div>
                </>}
              </div>
            </>}
          </div>
        </>}
      </div>
    </div>
  );
}
