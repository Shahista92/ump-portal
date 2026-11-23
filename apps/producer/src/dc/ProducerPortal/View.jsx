import React from 'react';
import { S, L, A, C } from '../runtime.js';
import HelpCenter from '../shared/HelpCenter.jsx';
import LoginMap from '../shared/LoginMap.jsx';
import DeviceDashboard from '../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../HLIDashboard/HLIDashboard.jsx';
import IsHome from './sections/IsHome.jsx';
import NotHome from './sections/NotHome.jsx';
import ModalAlert from './sections/ModalAlert.jsx';
// Generated from "UMP Producer Portal v5.dc.html". V = { ...props, ...renderVals() } from ProducerPortal.jsx
export default function View({ V }) {
  return (
    <div className="sc-host">
      {V.login?.on && <>
        <div style={{ position: "fixed", inset: "0", zIndex: "300", background: "#fff", display: "flex", flexDirection: "column", overflow: "auto", fontFamily: "Geist,system-ui,sans-serif", color: "#0F172A" }}>
          <div style={{ flex: "1 0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))" }}>
          <div data-r="login-map" style={{ position: "relative", margin: "16px", minHeight: "480px", borderRadius: "24px", overflow: "hidden", background: "#1d2a1f", border: "2px solid #0B0F14", boxShadow: "0 10px 30px rgba(11,15,20,.18)" }}>
            <LoginMap />
            <div style={{ position: "absolute", top: "0", left: "0", right: "0", height: "84px", zIndex: "1", display: "flex", alignItems: "center", gap: "18px", padding: "0 28px", backgroundColor: "#fff", borderBottom: "1px solid #94A3B8" }}>
              <span style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#043C2C", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><img src="assets/ump-plus-logo.png" alt="UMP+" style={{ width: "36px", height: "auto", display: "block" }} /></span>
              <span style={{ width: "1px", height: "38px", background: "#94A3B8", flexShrink: "0" }} />
              <img src="assets/axistech-logo-full.png" alt="AxisTech" style={{ height: "42px", width: "auto", display: "block", mixBlendMode: "multiply" }} />
            </div>
            <div style={{ position: "absolute", inset: "0", pointerEvents: "none", background: "linear-gradient(180deg,rgba(2,37,25,.62) 0%,rgba(2,37,25,0) 24%,rgba(2,37,25,0) 52%,rgba(2,37,25,.9) 100%)" }} />
            <div style={{ position: "absolute", left: "32px", right: "32px", bottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", flexWrap: "wrap", pointerEvents: "none" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", maxWidth: "420px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", color: "#86EFAC" }}>UPPER MURRAY REGION</span>
                <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.3", color: "#fff", textShadow: "0 1px 12px rgba(0,0,0,.4)" }}>Connecting data, land and decisions across the Upper Murray.</span>
              </div>
            </div>
          </div>
          <div data-r="login-form" style={{ display: "flex", flexDirection: "column", minHeight: "100vh", boxSizing: "border-box", padding: "28px clamp(24px,6vw,72px)" }}>
            <div style={{ flex: "1", display: "flex", alignItems: "center", padding: "40px 0" }}>
              <div style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "28px" }}>
                {V.login?.signIn && <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h1 style={{ margin: "0", fontSize: "32px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.15", textWrap: "balance" }}>Welcome to Producer Portal</h1>
                    <p style={{ margin: "0", fontSize: "15px", color: "#64748B", lineHeight: "1.5" }}>Sign in with your farm account.</p>
                  </div>
                  <form onSubmit={V.login?.submit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px", fontSize: "13px", fontWeight: "600", color: "#334155" }}>
                      Email address
                      <input className="scp0" type="email" autoComplete="email" value={V.login?.email ?? ""} onChange={V.login?.setEmail} placeholder="name@farm.com.au" style={{ height: "48px", padding: "0 14px", border: "1px solid #D5DDE5", borderRadius: "12px", font: "inherit", fontSize: "15px", fontWeight: "400", color: "#0F172A", outline: "0", background: "#fff", transition: "border-color .15s,box-shadow .15s" }} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px", fontSize: "13px", fontWeight: "600", color: "#334155" }}>
                      <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        Password
                        <button className="scp1" type="button" onClick={V.login?.forgot} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", fontSize: "13px", fontWeight: "600", color: "#12855F" }}>Forgot password?</button>
                      </span>
                      <span style={{ position: "relative", display: "block" }}>
                        <input className="scp0" type={V.login?.pwType} autoComplete="current-password" value={V.login?.pw ?? ""} onChange={V.login?.setPw} placeholder="Enter your password" style={{ width: "100%", boxSizing: "border-box", height: "48px", padding: "0 64px 0 14px", border: "1px solid #D5DDE5", borderRadius: "12px", font: "inherit", fontSize: "15px", fontWeight: "400", color: "#0F172A", outline: "0", background: "#fff", transition: "border-color .15s,box-shadow .15s" }} />
                        <button className="scp2" type="button" onClick={V.login?.togglePw} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", position: "absolute", right: "6px", top: "50%", transform: "translateY(-50%)", height: "34px", padding: "0 10px", borderRadius: "8px", fontSize: "12.5px", fontWeight: "600", color: "#475569" }}>{S(V.login?.pwToggleL)}</button>
                      </span>
                    </label>
                    <button type="button" onClick={V.login?.toggleRemember} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#334155" }}>
                      <span style={{ width: "18px", height: "18px", borderRadius: "5px", border: `1.5px solid ${A(V.login?.rmBd)}`, background: `${A(V.login?.rmBg)}`, color: "#fff", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box", transition: "background .15s,border-color .15s" }}>{S(V.login?.rmTick)}</span>
                      Remember me
                    </button>
                    {V.login?.hasErr && <>
                      <div style={{ padding: "10px 12px", borderRadius: "10px", background: "#FEF2F2", border: "1px solid #FECACA", color: "#B91C1C", fontSize: "13px" }}>{S(V.login?.err)}</div>
                    </>}
                    <button className="scp3 scp4" type="submit" style={{ appearance: "none", border: "0", font: "inherit", margin: "4px 0 0", cursor: "pointer", height: "50px", borderRadius: "12px", background: "#043C2C", color: "#fff", fontSize: "15px", fontWeight: "600", boxShadow: "0 8px 20px rgba(4,60,44,.22)", transition: "background .15s,transform .1s" }}>{S(V.login?.btnL)}</button>
                  </form>
                  
                </>}
                {V.login?.forgotOn && <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h1 style={{ margin: "0", fontSize: "32px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.15" }}>Reset password</h1>
                    <p style={{ margin: "0", fontSize: "15px", color: "#64748B", lineHeight: "1.5" }}>Enter your email and we'll send a link to set a new password.</p>
                  </div>
                  {V.login?.sentOff && <>
                    <form onSubmit={V.login?.sendReset} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                      <label style={{ display: "flex", flexDirection: "column", gap: "7px", fontSize: "13px", fontWeight: "600", color: "#334155" }}>
                        Email address
                        <input className="scp0" type="email" value={V.login?.email ?? ""} onChange={V.login?.setEmail} placeholder="name@farm.com.au" style={{ height: "48px", padding: "0 14px", border: "1px solid #D5DDE5", borderRadius: "12px", font: "inherit", fontSize: "15px", fontWeight: "400", color: "#0F172A", outline: "0", background: "#fff" }} />
                      </label>
                      <button className="scp3" type="submit" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "50px", borderRadius: "12px", background: "#043C2C", color: "#fff", fontSize: "15px", fontWeight: "600", boxShadow: "0 8px 20px rgba(4,60,44,.22)" }}>Send reset link</button>
                    </form>
                  </>}
                  {V.login?.sent && <>
                    <div style={{ padding: "14px 16px", borderRadius: "12px", background: "#F0FDF4", border: "1px solid #BBF7D0", color: "#166534", fontSize: "14px", lineHeight: "1.5" }}>{"If an account exists for "}{S(V.login?.email)}, a reset link is on its way.</div>
                  </>}
                  <button type="button" onClick={V.login?.back} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600", color: "#12855F" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
                    Back to sign in
                  </button>
                </>}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", fontSize: "12.5px", color: "#94A3B8" }}>
              <span>© 2026 AxisTech Pty Ltd</span>
              <span style={{ display: "flex", gap: "16px" }}>
                <a href="#" style={{ color: "#64748B" }}>Privacy</a>
                <a href="#" style={{ color: "#64748B" }}>Terms</a>
                <a href="#" style={{ color: "#64748B" }}>Help</a>
              </span>
            </div>
          </div>
          </div>
        </div>
      </>}
      <div data-r="shell" className={V.nightCls} style={{ display: "flex", height: "100vh", overflow: "hidden", fontSize: "14px" }}>
        <aside data-r="aside" data-open={V.collapsed ? "0" : "1"} onClick={e => { if (window.innerWidth < 768 && !V.collapsed && e.target.closest("button,a")) V.toggleSide(); }} style={{ display: `${A(V.asideDisp)}`, width: `${A(V.sideW)}`, flexShrink: "0", background: "linear-gradient(180deg,#032B20 0%,#043C2C 50%,#0A4D3A 100%)", color: "#b4c8bd", flexDirection: "column", transition: "width .2s ease", overflow: "hidden", borderRight: "1px solid rgba(255,255,255,.04)", boxShadow: "inset -1px 0 0 rgba(94,234,212,.06),4px 0 24px rgba(3,43,32,.18)", position: "relative", zIndex: "3" }}>
          <div style={{ height: `${A(V.headH)}`, flexShrink: "0", transition: "height .2s ease", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "7px", padding: "0 12px", borderBottom: "1px solid rgba(255,255,255,.05)" }}>
            <img src="assets/ump-plus-logo.png" alt="UMP+" style={{ width: `${A(V.umW)}`, height: "auto", display: "block", transition: "width .2s ease" }} />
            {V.expanded && <>
              <div style={{ fontSize: "9px", fontWeight: "500", letterSpacing: ".12em", color: "#5EEAD4", textAlign: "center", whiteSpace: "nowrap" }}>UPPER MURRAY PRODUCER PLUS</div>
            </>}
          </div>
          <nav style={{ padding: "8px 10px", display: "flex", flexDirection: "column", gap: "1px", flex: "1", minHeight: "0", overflowY: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {L(V.navItems).map((n, i2) => <React.Fragment key={i2}>
              {n?.divider && <>
                <div style={{ height: "1px", background: "rgba(255,255,255,.07)", margin: "5px 8px", flexShrink: "0" }} />
              </>}
              <button className="scp5 scp6" onClick={n?.go} title={n?.label} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", textAlign: "left", cursor: "pointer", position: "relative", display: "flex", alignItems: "center", gap: "12px", height: "38px", flexShrink: "0", padding: "0 12px", borderRadius: "10px", transition: "background .18s ease,color .18s ease,box-shadow .18s ease,transform .1s", whiteSpace: "nowrap", background: `${A(n?.bg)}`, color: `${A(n?.fg)}`, boxShadow: `${A(n?.sh)}` }}>
                <span style={{ position: "absolute", left: "-10px", top: "10px", bottom: "10px", width: "3px", borderRadius: "0 3px 3px 0", background: "#0EA5A4", boxShadow: "0 0 10px rgba(14,165,164,.6)", opacity: `${A(n?.barOp)}`, transition: "opacity .18s ease" }} />
                <span style={{ width: "30px", height: "30px", borderRadius: "8px", flexShrink: "0", display: "flex", alignItems: "center", justifyContent: "center", background: `${A(n?.ibg)}`, color: `${A(n?.ic)}`, transition: "background .18s ease,color .18s ease" }}><svg width="18" height="18" viewBox="0 0 24 24" fill={n?.fill} stroke="currentColor" style={{ strokeWidth: `${A(n?.sw)}`, strokeLinecap: "round", strokeLinejoin: "round", fillRule: "evenodd" }}><path d={n?.d} /></svg></span>
                {V.expanded && <>
                  <span style={{ fontSize: "15px", fontWeight: `${A(n?.fw)}`, letterSpacing: "-.005em" }}>{S(n?.label)}</span>
                </>}
              </button>
            </React.Fragment>)}
          </nav>
          <div style={{ padding: "16px 12px 18px", borderTop: "1px solid rgba(255,255,255,.05)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", flexShrink: "0" }}>
            {V.expanded && <>
              <div style={{ fontSize: "10px", letterSpacing: ".14em", color: "#7f9a8c" }}>POWERED BY</div>
              <img src="assets/axistech-logo.png" alt="AxisTech" style={{ width: "132px", height: "auto", display: "block", mixBlendMode: "lighten" }} />
            </>}
            {V.collapsed && <>
              <img src="assets/axistech-mark.png" alt="AxisTech" style={{ width: "30px", height: "auto", display: "block", mixBlendMode: "lighten" }} />
            </>}
          </div>
        </aside>
        {!V.collapsed && <div data-r="scrim" onClick={V.toggleSide} />}
        <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
          <header data-r="header" style={{ display: `${A(V.headDisp)}`, position: "relative", zIndex: "50", height: "56px", flexShrink: "0", background: "linear-gradient(90deg,#032B20 0%,#043C2C 100%)", borderBottom: "1px solid rgba(255,255,255,.06)", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "0 24px 0 20px", color: "#fff" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: "0" }}>
              <button className="scp7 scp6" onClick={V.toggleSide} title="Toggle menu" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", color: "#e2f0e8", flexShrink: "0", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round" }}><path d="M4 7h16M4 12h16M4 17h16" /></svg></button>
              <label title="Switch farm" style={{ display: "flex", alignItems: "center", gap: "9px", height: "36px", padding: "0 6px 0 12px", border: "1px solid rgba(134,239,172,.28)", borderRadius: "10px", background: "rgba(134,239,172,.07)", flexShrink: "1", minWidth: "0", overflow: "hidden" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M12 18.5 9 17l-6 3V6l6-3 6 3 6-3v7" />
                  <path d="M9 3v14M15 6v5" />
                  <path d="M21 17.4c0 2.2-3 4.6-3 4.6s-3-2.4-3-4.6a3 3 0 0 1 6 0z" />
                </svg>
                <select value={V.farmIdx ?? ""} onChange={V.setFarm} style={{ appearance: "auto", border: "0", outline: "0", background: "transparent", color: "#ECFEFF", font: "inherit", fontSize: "13.5px", fontWeight: "600", cursor: "pointer", padding: "0 2px", minWidth: "0", width: "100%", textOverflow: "ellipsis" }}>
                  {L(V.farmOpts).map((o, i3) => <React.Fragment key={i3}>
                    <option value={o?.v ?? ""} style={{ color: "#0f172a" }}>{S(o?.label)}</option>
                  </React.Fragment>)}
                </select>
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: "0" }}>
              <HelpCenter portal="producer" ink="#043C2C" accent="#12855F" tint="#E0F5EC" color="#cfe3d7" onContact={V.openTicket} />
              <button className="scpa scp6" onClick={V.openTicket} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 14px", border: "1px solid rgba(255,255,255,.18)", borderRadius: "9px", background: "rgba(255,255,255,.04)", color: "#ECFEFF", fontSize: "13.5px", whiteSpace: "nowrap", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z" />
                  <path d="M12 8.5v7M8.5 12h7" />
                </svg>
                
        <span data-r="hide-sm">Create Support Ticket</span>
              </button>
              <div style={{ position: "relative" }}>
                <button className="scp7 scp6" onClick={V.toggleMenu} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "#fff", margin: "0", padding: "4px 6px", borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#CFE3D7", flexShrink: "0" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21a8 8 0 0 1 16 0" />
                    </svg>
                  </span>
                  <div data-r="hide-sm" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "3px" }}>
                    <div style={{ fontSize: "13.5px", fontWeight: "600", whiteSpace: "nowrap" }}>Emma Barnes</div>
                    <div style={{ fontSize: "10px", fontWeight: "600", color: "#14532D", background: "#99F6E4", padding: "1px 8px", borderRadius: "999px", whiteSpace: "nowrap" }}>UMP Admin</div>
                  </div>
                </button>
                {V.menuOpen && <>
                  <div style={{ position: "absolute", right: "0", top: "50px", width: "230px", background: "#fff", color: "#0f172a", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 16px 40px rgba(10,59,43,.18)", padding: "6px", zIndex: "40", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "10px 12px", borderBottom: "1px solid #F1F5F9", marginBottom: "4px" }}>
                      <div style={{ fontWeight: "600", fontSize: "13.5px" }}>Emma Barnes</div>
                      <div style={{ fontSize: "12px", color: "#64748b" }}>emma@thowglacreek.com.au</div>
                    </div>
                    <button className="scp2 scp6" onClick={V.goProfile} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "9px 12px", borderRadius: "6px", textAlign: "left", cursor: "pointer", fontSize: "13.5px", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>Profile</button>
                    <button className="scp2 scp6" onClick={V.goTickets} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "9px 12px", borderRadius: "6px", textAlign: "left", cursor: "pointer", fontSize: "13.5px", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>My support tickets</button>
                    <a className="scpb" href={V.adminUrl} target="_blank" style={{ padding: "8px 12px", borderRadius: "6px", textDecoration: "none", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "13.5px", fontWeight: "600", color: "#1E3A8A" }}>
                        Open Admin Portal
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
                      </span>
                      <span style={{ fontSize: "11.5px", color: "#64748B" }}>Visible only to UMP Admin</span>
                    </a>
                    <button className="scpc scp6" onClick={V.signOut} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "#b91c1c", margin: "0", padding: "9px 12px", borderRadius: "6px", textAlign: "left", cursor: "pointer", fontSize: "13.5px", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>Sign out</button>
                  </div>
                </>}
              </div>
            </div>
          </header>
          <main data-r="main" className="ns" style={{ flex: "1", overflowY: "auto", display: "flex", flexDirection: "column" }}>
            <div data-r="pad" style={{ flex: "1 0 auto", padding: "10px 14px 16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {V.isHome && <IsHome V={V} />}
              {V.notHome && <NotHome V={V} />}
            </div>
            <footer style={{ flexShrink: "0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "4px 16px", flexWrap: "wrap", padding: "6px 20px", borderTop: "1px solid #EEF2F6", background: "#fff", fontSize: "11.5px", lineHeight: "16px", color: "#475569" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}><span>2026 © AxisTech Pty Ltd</span></div>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <a href="#" style={{ color: "#475569" }}>Help</a>
                <a href="#" style={{ color: "#475569" }}>Terms</a>
                <a href="#" style={{ color: "#475569" }}>Privacy</a>
                <a href="#" style={{ color: "#475569" }}>Contact</a>
              </div>
            </footer>
          </main>
        </div>
        {V.modal?.devEdit && <>
          <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(10,59,43,.45)", zIndex: "60", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "40px 16px", overflowY: "auto" }}>
            <div onClick={V.stop} style={{ width: "min(560px,100%)", background: "#fff", borderRadius: "14px", boxShadow: "0 24px 60px rgba(10,59,43,.3)", display: "flex", flexDirection: "column", margin: "auto 0" }}>
              <div style={{ padding: "16px 20px", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ flex: "1", minWidth: "0", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{ fontWeight: "600", fontSize: "17px" }}>Edit device</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", padding: "2px 10px 2px 3px", borderRadius: "999px", border: "1px solid #99f6e4", color: "#0f766e" }}>
                    <span style={{ display: "inline-block", width: "18px", height: "18px", borderRadius: "5px", backgroundImage: `url(${A(V.de?.icon)})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                    {S(V.de?.cat)}
                  </span>
                </div>
                <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", fontWeight: "600", padding: "4px 11px", borderRadius: "999px", background: "#ecfdf5", color: "#047857" }}>✓ Connected</span>
                <button className="scp1f" onClick={V.closeModal} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", fontSize: "20px", color: "#64748B" }}>×</button>
              </div>
              <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: "16px", background: "#fafbfc" }}>
                <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: "700", letterSpacing: ".06em", color: "#334155" }}>
                    <span style={{ width: "24px", height: "24px", borderRadius: "7px", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7" /></svg></span>
                    DEVICE DETAILS
                  </span>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12px", fontWeight: "600" }}>
                      Device name
                      <input className="scp1x" value={V.de?.name ?? ""} onChange={V.de?.setName} style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", font: "inherit", fontSize: "14px", fontWeight: "400", outline: "0" }} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12px", fontWeight: "600" }}>
                      Device ID
                      <input value={V.de?.serial ?? ""} readOnly style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", font: "inherit", fontSize: "14px", fontWeight: "400", outline: "0", background: "#f1f5f9", color: "#64748B" }} />
                    </label>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12px", fontWeight: "600" }}>
                    Location
                    <button className="scp1y" onClick={V.de?.openLoc} title="Choose location on map" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", background: "#fff", fontSize: "14px", fontWeight: "400", color: "#0f172a", textAlign: "left" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="#0f172a"><path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
                      <span style={{ fontSize: "13px", color: "#64748B" }}>Lat</span>
                      <b style={{ fontWeight: "500" }}>{S(V.de?.lat)}</b>
                      <span style={{ fontSize: "13px", color: "#64748B" }}>Long</span>
                      <b style={{ fontWeight: "500" }}>{S(V.de?.lng)}</b>
                      <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", fontWeight: "600", color: "#043C2C" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 20h4L19 9l-4-4L4 16z" /></svg>
                        Edit on map
                      </span>
                    </button>
                  </div>
                  <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12px", fontWeight: "600" }}>
                    Description
                    <textarea value={V.de?.desc ?? ""} onChange={V.de?.setDesc} rows="2" placeholder="Optional" style={{ padding: "10px 12px", border: "1px solid #E2E8F0", borderRadius: "8px", font: "inherit", fontSize: "14px", fontWeight: "400", outline: "0", resize: "vertical" }} />
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: "700", letterSpacing: ".06em", color: "#334155" }}>
                    <span style={{ width: "24px", height: "24px", borderRadius: "7px", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" /></svg></span>
                    DEVICE CATEGORY
                  </span>
                  <div style={{ height: "42px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "14px", background: "#F1F5F9", color: "#475569", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span>{S(V.de?.cat)}</span>
                    <span style={{ fontSize: "12px", color: "#94A3B8" }}>Cannot be changed</span>
                  </div>
                </div>
              </div>
              <div style={{ padding: "14px 20px", borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#fff", fontSize: "14px", fontWeight: "500" }}>Cancel</button>
                <button className="scpo" onClick={V.de?.save} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", background: "#043C2C", color: "#fff", fontSize: "14px", fontWeight: "600" }}>Save changes</button>
              </div>
            </div>
          </div>
        </>}
        {V.lp?.show && <>
          <div onClick={V.lp?.close} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "70", overflow: "hidden" }}>
            <div onClick={V.stop} style={{ background: "#fff", borderRadius: "12px", width: "100%", maxWidth: "820px", boxShadow: "0 24px 64px rgba(15,23,42,.32)", display: "flex", flexDirection: "column", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
              <div style={{ padding: "16px 20px", borderBottom: "1px solid #EEF2F6", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                <div>
                  <div style={{ fontWeight: "600", fontSize: "17px" }}>{S(V.lp?.title)}</div>
                  <div style={{ fontSize: "13px", color: "#64748B", marginTop: "2px" }}>{S(V.lp?.sub)}</div>
                </div>
                <button className="scp1f" onClick={V.lp?.close} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#0f172a", fontSize: "22px", lineHeight: "1" }}>×</button>
              </div>
              <div style={{ padding: "14px 20px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "20px", fontSize: "13px", flexWrap: "wrap" }}>
                  <span>
                    <b style={{ fontWeight: "600" }}>Latitude:</b>
                    {" "}{S(V.lp?.lat)}
                  </span>
                  <span>
                    <b style={{ fontWeight: "600" }}>Longitude:</b>
                    {" "}{S(V.lp?.lng)}
                  </span>
                  <span>
                    <b style={{ fontWeight: "600" }}>Altitude:</b>
                    {" —"}
                  </span>
                </div>
                <div style={{ position: "relative", height: "420px", borderRadius: "10px", overflow: "hidden", background: "#1e293b" }}>
                  <div ref={V.locMapRef} style={{ position: "absolute", inset: "0" }} />
                  <div style={{ position: "absolute", left: "10px", top: "10px", zIndex: "2", width: "min(560px,calc(100% - 20px))", display: "flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 10px 0 12px", borderRadius: "8px", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,.25)" }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}>
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-3.5-3.5" />
                    </svg>
                    <input value={V.locQ ?? ""} onInput={V.locInput} onKeyDown={V.locSearch} placeholder="Search for an address…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "14px", background: "transparent" }} />
                    {V.locQOn && <>
                      <button onClick={V.locClear} title="Clear" style={{ appearance: "none", border: "0", margin: "0", padding: "0", cursor: "pointer", width: "20px", height: "20px", borderRadius: "50%", background: "#64748B", color: "#fff", fontSize: "13px", lineHeight: "1", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>×</button>
                    </>}
                    {V.locSugOn && <>
                      <div style={{ position: "absolute", left: "0", top: "52px", width: "100%", maxHeight: "260px", overflowY: "auto", background: "#fff", borderRadius: "8px", boxShadow: "0 8px 28px rgba(0,0,0,.32)", zIndex: "5" }}>
                        {L(V.locSug).map((g, i281) => <React.Fragment key={i281}>
                          <button className="scp12" onClick={g?.pick} style={{ appearance: "none", border: "0", background: "#fff", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "14px", width: "100%", textAlign: "left", padding: "10px 16px" }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
                              <circle cx="12" cy="10" r="2.5" />
                            </svg>
                            <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "1px" }}>
                              <span style={{ fontSize: "13px", fontWeight: "500", color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(g?.title)}</span>
                              <span style={{ fontSize: "11.5px", color: "#64748B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(g?.name)}</span>
                            </span>
                          </button>
                        </React.Fragment>)}
                      </div>
                    </>}
                  </div>
                  <div style={{ position: "absolute", left: "12px", right: "12px", bottom: "12px", zIndex: "2", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", pointerEvents: "none" }}>
                    <div style={{ pointerEvents: "auto", minWidth: "0", maxWidth: "calc(100% - 60px)", display: "flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "999px", background: "rgba(30,41,59,.92)", color: "#fff", fontSize: "12.5px", boxShadow: "0 2px 8px rgba(0,0,0,.3)" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: "0" }}><path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
                      <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.lp?.pill)}</span>
                    </div>
                    <button onClick={V.locClear} title="Clear search" style={{ pointerEvents: "auto", appearance: "none", border: "0", margin: "0", padding: "0", cursor: "pointer", width: "34px", height: "34px", borderRadius: "50%", background: "#fff", color: "#0F172A", fontSize: "18px", lineHeight: "1", boxShadow: "0 2px 8px rgba(0,0,0,.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>×</button>
                  </div>
                </div>
              </div>
              <div style={{ padding: "14px 20px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button className="scp1h" onClick={V.lp?.close} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 18px", border: "1px solid #cbd5e1", background: "#fff", color: "#0f172a", borderRadius: "8px", fontSize: "14px", fontWeight: "500" }}>{S(V.lp?.closeL)}</button>
                {V.lp?.edit && <>
                  <button className="scpo" onClick={V.lp?.confirm} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 20px", background: "#043C2C", color: "#fff", borderRadius: "8px", fontWeight: "600", fontSize: "14px" }}>Confirm</button>
                </>}
              </div>
            </div>
          </div>
        </>}
        {V.modal?.alert && <ModalAlert V={V} />}
        {V.modal?.wizard && <>
          <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(10,59,43,.45)", zIndex: "60", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "48px 16px", overflowY: "auto" }}>
            <div onClick={V.stop} style={{ width: "min(640px,100%)", background: "#fff", borderRadius: "16px", boxShadow: "0 24px 60px rgba(10,59,43,.3)", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "18px 22px", borderBottom: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: "600", fontSize: "17px" }}>Connect a provider</div>
                <button className="scp1f scp6" onClick={V.closeModal} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", fontSize: "20px", color: "#64748b", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>×</button>
              </div>
              <div style={{ padding: "16px 22px 0", display: "flex", gap: "6px" }}>
                {L(V.wz?.steps).map((s, i289) => <React.Fragment key={i289}>
                  <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ height: "4px", borderRadius: "99px", background: `${A(s?.bar)}` }} />
                    <span style={{ fontSize: "11.5px", fontWeight: "500", color: `${A(s?.fg)}` }}>{S(s?.label)}</span>
                  </div>
                </React.Fragment>)}
              </div>
              <div style={{ padding: "18px 22px 22px", minHeight: "230px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {V.wz?.s1 && <>
                  <div style={{ fontSize: "13.5px", color: "#475569" }}>Choose the provider to connect.</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: "10px" }}>
                    {L(V.wz?.provs).map((p, i290) => <React.Fragment key={i290}>
                      <button className="scp6 scpt" onClick={p?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", padding: "12px", borderRadius: "11px", border: `1.5px solid ${A(p?.bd)}`, background: `${A(p?.bg)}`, display: "flex", flexDirection: "column", gap: "3px", color: "inherit", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                        <span style={{ fontWeight: "600", fontSize: "14px" }}>{S(p?.name)}</span>
                        <span style={{ fontSize: "12px", color: "#64748b" }}>{S(p?.kind)}</span>
                      </button>
                    </React.Fragment>)}
                  </div>
                </>}
                {V.wz?.s2 && <>
                  <div style={{ fontSize: "13.5px", color: "#475569" }}>{"Authenticate "}{S(V.wz?.prov)}. Credentials are stored encrypted and shown masked.</div>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
                    API key or token
                    <input className="scp1q" type="password" value={V.wz?.key ?? ""} onChange={V.wz?.setKey} placeholder="Paste API key" style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", outline: "0" }} />
                  </label>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12.5px", color: "#94a3b8" }}>
                    <span style={{ flex: "1", height: "1px", background: "#F1F5F9" }} />
                    or
                    <span style={{ flex: "1", height: "1px", background: "#F1F5F9" }} />
                  </div>
                  <button className="scp9 scp6" onClick={V.wz?.oauth} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", borderRadius: "9px", border: "1px solid #E2E8F0", background: "#fff", fontSize: "13.5px", fontWeight: "500", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>OAuth Connect</button>
                </>}
                {V.wz?.s3 && <>
                  <div style={{ fontSize: "13.5px", color: "#475569" }}>{"Test the connection to "}{S(V.wz?.prov)}.</div>
                  <button className="scp9 scp6" onClick={V.wz?.test} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", alignSelf: "flex-start", height: "40px", padding: "0 18px", borderRadius: "9px", border: "1px solid #E2E8F0", background: "#fff", fontSize: "13.5px", fontWeight: "600", color: "#14532D", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>Test connection</button>
                  {V.wz?.tested && <>
                    <div style={{ padding: "12px 14px", borderRadius: "10px", background: "#ECFEFF", border: "1px solid #99F6E4", color: "#043C2C", fontSize: "13.5px" }}>Pass. 2 devices found.</div>
                  </>}
                </>}
                {V.wz?.s4 && <>
                  <div style={{ fontSize: "13.5px", color: "#475569" }}>Link the provider's devices to a farm.</div>
                  {L(V.wz?.found).map((d, i291) => <React.Fragment key={i291}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "10px 12px", border: "1px solid #E2E8F0", borderRadius: "10px" }}>
                      <span style={{ fontSize: "13.5px", fontWeight: "500" }}>{S(d)}</span>
                      <select style={{ height: "34px", padding: "0 8px", border: "1px solid #E2E8F0", borderRadius: "8px", font: "inherit", fontSize: "13px", background: "#fff" }}>
                        {L(V.farmOpts).map((o, i292) => <React.Fragment key={i292}>
                          <option>{S(o?.label)}</option>
                        </React.Fragment>)}
                      </select>
                    </div>
                  </React.Fragment>)}
                </>}
                {V.wz?.s5 && <>
                  <div style={{ fontSize: "13.5px", color: "#475569" }}>How often should data sync?</div>
                  {L(V.wz?.freqs).map((f, i293) => <React.Fragment key={i293}>
                    <button className="scp6 scpt" onClick={f?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", padding: "11px 12px", borderRadius: "10px", border: `1.5px solid ${A(f?.bd)}`, background: `${A(f?.bg)}`, fontSize: "13.5px", color: "inherit", textAlign: "left", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                      <span style={{ width: "16px", height: "16px", borderRadius: "50%", border: `1.5px solid ${A(f?.bd)}`, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ width: "8px", height: "8px", borderRadius: "50%", background: `${A(f?.dot)}` }} /></span>
                      {S(f?.label)}
                    </button>
                  </React.Fragment>)}
                  <div style={{ fontSize: "12.5px", color: "#64748b" }}>A provider goes live once it has been tested, mapped to farms and set to sync.</div>
                </>}
              </div>
              <div style={{ padding: "14px 22px", borderTop: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", gap: "10px" }}>
                <button className="scp9 scp6" onClick={V.wz?.back} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 18px", borderRadius: "9px", border: "1px solid #E2E8F0", background: "#fff", fontSize: "13.5px", fontWeight: "500", opacity: `${A(V.wz?.backOp)}`, transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>Back</button>
                <button className="scp6 scpt" onClick={V.wz?.next} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 22px", borderRadius: "9px", background: `${A(V.wz?.nextBg)}`, color: "#fff", fontSize: "13.5px", fontWeight: "600", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>{S(V.wz?.nextLabel)}</button>
              </div>
            </div>
          </div>
        </>}
        {V.modal?.pmanage && <>
          <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(10,59,43,.45)", backdropFilter: "blur(3px)", zIndex: "60", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "40px 16px", overflowY: "auto" }}>
            <div onClick={V.stop} style={{ width: "min(640px,100%)", background: "#fff", borderRadius: "16px", boxShadow: "0 24px 60px rgba(10,59,43,.3)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <div style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: "14px", borderBottom: "1px solid #EEF2F6" }}>
                <span style={{ position: "relative", width: "96px", height: "52px", borderRadius: "11px", border: "1px solid #EEF2F6", background: `${A(V.pm?.lbg)}`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "12px", color: "#475569", flexShrink: "0", overflow: "hidden" }}>
                  {S(V.pm?.mono)}
                  <span style={{ position: "absolute", inset: "5px", backgroundImage: `${A(V.pm?.bgimg)}`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                </span>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ fontWeight: "700", fontSize: "18px", color: "#0F172A" }}>{S(V.pm?.name)}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "3px", fontSize: "12.5px", color: "#64748B" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                    {S(V.pm?.mFarm)}
                  </div>
                </div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12.5px", fontWeight: "600", padding: "5px 12px", borderRadius: "999px", background: "#ecfdf5", color: "#059669" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="m8.5 12.5 2.5 2.5 4.5-5" />
                  </svg>
                  Connected
                </span>
                <button className="scp1f" onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "0", background: "transparent", width: "32px", height: "32px", borderRadius: "8px", color: "#64748B", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
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
                    <button className="scp22" onClick={V.pm?.toggleEdit} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "0", background: "transparent", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#0F172A", padding: "4px 8px", borderRadius: "6px" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>
                      {V.pm?.edit && <>
                        Done
                      </>}
                      {V.pm?.notEdit && <>
                        Edit
                      </>}
                    </button>
                  </div>
                  <div style={{ padding: "14px 16px", display: "grid", gridTemplateColumns: "110px minmax(0,1fr)", gap: "10px 12px", alignItems: "center", fontSize: "13px", color: "#334155" }}>
                    <span style={{ color: "#64748B" }}>Client ID</span>
                    <span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "12px" }}>
                      {V.pm?.notEdit && <>
                        {S(V.pm?.cid)}
                      </>}
                      {V.pm?.edit && <>
                        <input value={V.pm?.cid ?? ""} onChange={V.pm?.setCid} style={{ width: "100%", height: "34px", border: "1px solid #CBD5E1", borderRadius: "8px", padding: "0 10px", font: "inherit", outline: "0" }} />
                      </>}
                    </span>
                    <span style={{ color: "#64748B" }}>API Key</span>
                    <span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "12px" }}>
                      {V.pm?.notEdit && <>
                        {S(V.pm?.key)}
                      </>}
                      {V.pm?.edit && <>
                        <input value={V.pm?.key ?? ""} onChange={V.pm?.setKey} style={{ width: "100%", height: "34px", border: "1px solid #CBD5E1", borderRadius: "8px", padding: "0 10px", font: "inherit", outline: "0" }} />
                      </>}
                    </span>
                    <span style={{ color: "#64748B" }}>Device ID</span>
                    <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "12.5px" }}>{S(V.pm?.devId)}</span>
                  </div>
                  <div style={{ margin: "0 16px", borderTop: "1px solid #EEF2F6", padding: "12px 0 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "12.5px", color: "#64748B" }}>Device IDs</span>
                    <span style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      {L(V.pm?.devIds).map((di, i294) => <React.Fragment key={i294}>
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
                    <span style={{ fontSize: "11.5px", fontWeight: "600", padding: "2px 9px", borderRadius: "999px", background: "#dcfce7", color: "#15803d" }}>{S(V.pm?.nAvail)}</span>
                    <span style={{ fontSize: "11.5px", fontWeight: "600", padding: "2px 9px", borderRadius: "999px", background: "#dbeafe", color: "#1d4ed8" }}>{S(V.pm?.nLinked)}</span>
                    <span style={{ flex: "1" }} />
                    <button className="scp23" onClick={V.pm?.refresh} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "0", background: "transparent", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#0F172A", padding: "4px 8px", borderRadius: "6px" }}>
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
                      <input value={V.pm?.sq ?? ""} onChange={V.pm?.setSq} placeholder="Search sensors" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "14px", background: "transparent", color: "#0f172a" }} />
                    </div>
                  </div>
                  <div style={{ padding: "0 16px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {L(V.pm?.sensors).map((se, i295) => <React.Fragment key={i295}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", borderRadius: "10px", border: `1px solid ${A(se?.rbd)}`, background: `${A(se?.rbg)}` }}>
                        <div style={{ flex: "1", minWidth: "0" }}>
                          <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#0F172A" }}>{S(se?.name)}</div>
                          <div style={{ fontSize: "12px", color: "#64748B", fontFamily: "ui-monospace,Menlo,monospace" }}>{S(se?.id)}</div>
                        </div>
                        <button className="scp24" onClick={se?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "0", background: "transparent", fontSize: "13px", fontWeight: "600", color: `${A(se?.fg)}`, padding: "6px 10px", borderRadius: "7px" }}>{S(se?.lbl)}</button>
                      </div>
                    </React.Fragment>)}
                    {V.pm?.noSens && <>
                      <div style={{ padding: "14px", textAlign: "center", fontSize: "13px", color: "#64748B" }}>No sensors match.</div>
                    </>}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 16px", borderRadius: "14px", background: "#fef6f5", border: "1px solid #fbd9d4" }}>
                  <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#fde4e0", color: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7M4 4l16 16" /></svg></span>
                  <div style={{ flex: "1", minWidth: "0" }}>
                    <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#0F172A" }}>Disconnect provider</div>
                    <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>Stops data syncing for this farm. You can reconnect any time.</div>
                  </div>
                  <button className="scpc" onClick={V.pm?.disconnect} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", border: "1px solid #fca5a5", background: "#fff", color: "#dc2626", fontSize: "14px", fontWeight: "600" }}>Disconnect</button>
                </div>
              </div>
              <div style={{ padding: "14px 24px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "flex-end" }}><button className="scp1f" onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 20px", borderRadius: "8px", border: "1px solid #043C2C", background: "#fff", color: "#043C2C", fontSize: "14px", fontWeight: "600" }}>Close</button></div>
            </div>
          </div>
        </>}
        {V.modal?.pintro && <>
          <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(10,59,43,.45)", backdropFilter: "blur(3px)", zIndex: "60", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", overflowY: "auto" }}>
            <div onClick={V.stop} style={{ width: "min(640px,100%)", maxHeight: "calc(100vh - 48px)", background: "#fff", borderRadius: "16px", boxShadow: "0 24px 60px rgba(10,59,43,.3)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <div style={{ padding: "20px 24px", borderBottom: "1px solid #EEF2F6", display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ position: "relative", width: "64px", height: "64px", borderRadius: "12px", border: "1px solid #EEF2F6", background: `${A(V.pm?.lbg)}`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "12px", color: "#475569", flexShrink: "0", overflow: "hidden" }}>
                  {S(V.pm?.mono)}
                  <span style={{ position: "absolute", inset: "6px", backgroundImage: `${A(V.pm?.bgimg)}`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                </span>
                <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ fontWeight: "700", fontSize: "19px", color: "#0F172A" }}>{S(V.pm?.name)}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "600", padding: "3px 10px", borderRadius: "999px", background: "#E0F2F1", color: "#0F766E" }}>{S(V.pm?.kind)}</span>
                    {V.pm?.hasLink && <>
                      <a href={V.pm?.link} target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#0E7490", textDecoration: "none" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
                        Visit website
                      </a>
                    </>}
                  </div>
                </div>
                <button className="scp1f" onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "0", background: "transparent", width: "32px", height: "32px", borderRadius: "8px", color: "#64748B", display: "flex", alignItems: "center", justifyContent: "center", alignSelf: "flex-start" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
              </div>
              <div style={{ padding: "22px 24px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "18px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.65", color: "#334155", textWrap: "pretty" }}>{S(V.pm?.desc)}</span>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12.5px", fontWeight: "600", color: "#475569" }}>
                  Select a farm to continue
                  <select value={V.pm?.farm ?? ""} onChange={V.pm?.setFarm} style={{ height: "44px", border: "1px solid #CBD5E1", borderRadius: "10px", outline: "0", padding: "0 12px", font: "inherit", fontSize: "14px", fontWeight: "500", background: "#fff", color: "#0f172a", width: "100%", cursor: "pointer" }}>
                    {L(V.pm?.farmOpts).map((o, i296) => <React.Fragment key={i296}>
                      <option value={o?.name ?? ""}>{S(o?.name)}</option>
                    </React.Fragment>)}
                  </select>
                </label>
              </div>
              <div style={{ padding: "14px 24px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                <button className="scp1f" onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "38px", padding: "0 18px", borderRadius: "9px", border: "1px solid #043C2C", background: "#fff", color: "#043C2C", fontSize: "14px", fontWeight: "600" }}>Cancel</button>
                <button className="scp25" onClick={V.pm?.cont} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "0", height: "38px", padding: "0 20px", borderRadius: "9px", background: "#0E7490", color: "#fff", fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center", gap: "7px" }}>
                  Continue
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </>}
        {V.modal?.pconnect && <>
          <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(10,59,43,.45)", backdropFilter: "blur(3px)", zIndex: "60", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "72px 16px", overflowY: "auto" }}>
            <div onClick={V.stop} style={{ width: "min(480px,100%)", background: "#fff", borderRadius: "16px", boxShadow: "0 24px 60px rgba(10,59,43,.3)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <div style={{ padding: "20px 24px", borderBottom: "1px solid #EEF2F6", display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ position: "relative", width: "96px", height: "52px", borderRadius: "10px", border: "1px solid #EEF2F6", background: `${A(V.pm?.lbg)}`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "12px", color: "#475569", flexShrink: "0", overflow: "hidden" }}>
                  {S(V.pm?.mono)}
                  <span style={{ position: "absolute", inset: "5px", backgroundImage: `${A(V.pm?.bgimg)}`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                </span>
                <div style={{ flex: "1", fontWeight: "600", fontSize: "18px" }}>{"Connect "}{S(V.pm?.name)}</div>
                <button className="scp1f" onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "0", background: "transparent", width: "32px", height: "32px", borderRadius: "8px", color: "#64748B", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
              </div>
              <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12.5px", color: "#475569" }}>
                  Farm
                  <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
                    <span style={{ position: "absolute", left: "14px", color: "#64748B", display: "flex", pointerEvents: "none" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg></span>
                    <select value={V.pm?.farm ?? ""} onChange={V.pm?.setFarm} style={{ height: "46px", border: "1px solid #E2E8F0", borderRadius: "10px", outline: "0", padding: "0 14px", font: "inherit", fontSize: "14px", background: "#fff", color: "#0f172a", width: "100%", paddingLeft: "42px", appearance: "auto", cursor: "pointer" }}>
                      {L(V.pm?.farmOpts).map((o, i297) => <React.Fragment key={i297}>
                        <option value={o?.name ?? ""}>{S(o?.name)}</option>
                      </React.Fragment>)}
                    </select>
                  </span>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <input className="scp26" value={V.pm?.user ?? ""} onChange={V.pm?.setUser} placeholder="Username" style={{ height: "46px", border: "1px solid #E2E8F0", borderRadius: "10px", outline: "0", padding: "0 14px", font: "inherit", fontSize: "14px", background: "#fff", color: "#0f172a", width: "100%" }} />
                  <span style={{ fontSize: "12px", color: "#64748B" }}>{"Your "}{S(V.pm?.name)}{" login"}</span>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
                    <input className="scp26" type={V.pm?.pwType} value={V.pm?.pw ?? ""} onChange={V.pm?.setPw} placeholder="Password" style={{ height: "46px", border: "1px solid #E2E8F0", borderRadius: "10px", outline: "0", padding: "0 14px", font: "inherit", fontSize: "14px", background: "#fff", color: "#0f172a", width: "100%", paddingRight: "48px" }} />
                    <button className="scp1f" onClick={V.pm?.togglePw} title="Show password" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "0", background: "transparent", position: "absolute", right: "8px", width: "32px", height: "32px", borderRadius: "8px", color: "#64748B", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </span>
                  <span style={{ fontSize: "12px", color: "#64748B" }}>Stored encrypted</span>
                </label>
              </div>
              <div style={{ padding: "14px 24px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                <button className="scp1f" onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "38px", padding: "0 18px", borderRadius: "9px", border: "1px solid #043C2C", background: "#fff", color: "#043C2C", fontSize: "14px", fontWeight: "600" }}>Cancel</button>
                <button onClick={V.pm?.submit} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "0", height: "38px", padding: "0 20px", borderRadius: "9px", background: `${A(V.pm?.okBg)}`, cursor: `${A(V.pm?.okCur)}`, color: "#fff", fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center", gap: "7px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></svg>
                  Connect
                </button>
              </div>
            </div>
          </div>
        </>}
        {V.modal?.faq && <>
          <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(10,59,43,.45)", backdropFilter: "blur(3px)", zIndex: "60", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "60px 16px", overflowY: "auto" }}>
            <div onClick={V.stop} style={{ width: "min(560px,100%)", background: "#fff", borderRadius: "16px", boxShadow: "0 24px 60px rgba(10,59,43,.3)", overflow: "hidden" }}>
              <div style={{ padding: "18px 22px", borderBottom: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: "600", fontSize: "17px" }}>Frequently asked questions</div>
                <button className="scp1f" onClick={V.closeModal} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", fontSize: "20px", color: "#64748b" }}>×</button>
              </div>
              <div style={{ padding: "8px 22px 20px", display: "flex", flexDirection: "column" }}>
                {L(V.faqs).map((q, i298) => <React.Fragment key={i298}>
                  <div style={{ padding: "14px 0", borderBottom: "1px solid #F1F5F9" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A" }}>{S(q?.q)}</div>
                    <div style={{ fontSize: "13px", color: "#475569", lineHeight: "1.55", marginTop: "4px" }}>{S(q?.a)}</div>
                  </div>
                </React.Fragment>)}
              </div>
            </div>
          </div>
        </>}
        {V.refM && <>
          <div style={{ position: "fixed", inset: "0", background: "rgba(12,32,26,.38)", zIndex: "70", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
            <div onClick={V.refM?.close} style={{ position: "absolute", inset: "0" }} />
            <div style={{ position: "relative", width: "520px", maxWidth: "100%", maxHeight: "100%", overflowY: "auto", background: "#fff", borderRadius: "14px", boxShadow: "0 24px 60px rgba(12,32,26,.28)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "18px 22px 14px", background: "#F0F8EE", borderBottom: "1px solid #DCEBD8" }}>
                <div>
                  <div style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#0C6B4C" }}>REFERENCE</div>
                  <div style={{ fontSize: "17px", fontWeight: "600", color: "#1E2A26", marginTop: "2px" }}>{S(V.refM?.t)}</div>
                </div>
                <button className="scp27" onClick={V.refM?.close} style={{ appearance: "none", font: "inherit", margin: "0 0 0 auto", cursor: "pointer", flex: "0 0 30px", width: "30px", height: "30px", borderRadius: "8px", border: "1px solid #E4EAE8", background: "#fff", fontSize: "16px", color: "#6E827C" }}>×</button>
              </div>
              <div style={{ padding: "18px 22px 22px", display: "flex", flexDirection: "column", gap: "16px" }}>
                {L(V.refM?.secs).map((r, i299) => <React.Fragment key={i299}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".06em", color: "#64748B" }}>{S(r?.h)}</span>
                    <span style={{ fontSize: "13.5px", lineHeight: "1.55", color: "#1E293B", whiteSpace: "pre-line", fontFamily: `${A(r?.ff)}`, background: `${A(r?.bg)}`, padding: `${A(r?.pd)}`, borderRadius: "8px" }}>{S(r?.v)}</span>
                    {r?.lk && <>
                      <a href={r?.lk?.href} target="_blank" rel="noopener" style={{ alignSelf: "flex-start", fontSize: "12.5px", fontWeight: "600", color: "#2563EB", textDecoration: "underline", textUnderlineOffset: "2px" }}>{"Visit "}{S(r?.lk?.l)}{" ↗"}</a>
                    </>}
                  </div>
                </React.Fragment>)}
              </div>
            </div>
          </div>
        </>}
        {V.modal?.ticket && <>
          <div onClick={V.nt?.done ? V.nt?.finish : V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(10,59,43,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "55", overflow: "hidden" }}>
            <div onClick={V.stop} style={{ background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "620px", boxShadow: "0 24px 64px rgba(10,59,43,.28)", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
              {V.nt?.form && <>
              <div style={{ padding: "20px 22px 14px", borderBottom: "1px solid #EEF2F6", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontWeight: "600", fontSize: "17px" }}>New support ticket</div>
                  <div style={{ fontSize: "13px", color: "#475569", marginTop: "3px" }}>Sent to the UMP admin team. You can view it on the Support page.</div>
                </div>
                <button className="scpb" onClick={V.closeModal} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
              </div>
              <div style={{ padding: "18px 22px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>
                  Subject
                  <input className="scp1q" value={V.nt?.subject ?? ""} onChange={V.nt?.set?.subject} placeholder="Briefly describe the issue" style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", padding: "0 12px", font: "inherit", fontSize: "14px", background: "#fff", color: "#0f172a", width: "100%", fontWeight: "400" }} />
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "12px" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>
                    Topic
                    <select className="scp1q" value={V.nt?.topic ?? ""} onChange={V.nt?.set?.topic} style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", padding: "0 12px", font: "inherit", fontSize: "14px", background: "#fff", color: "#0f172a", width: "100%", fontWeight: "400", cursor: "pointer" }}>
                      <option value="">Select a module</option>
                      {L(V.nt?.topics).map((o, i110) => <React.Fragment key={i110}>
                        <option value={o ?? ""}>{S(o)}</option>
                      </React.Fragment>)}
                    </select>
                  </label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>
                    Farm
                    <div style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "0 12px", background: "#F8FAFC", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "400", color: "#0f172a" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B6B4B" style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                      {S(V.nt?.farm)}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>
                  Description
          
                  <div style={{ border: "1px solid #E2E8F0", borderRadius: "10px", overflow: "hidden" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "2px", padding: "6px 10px", background: "#F8FAFC", borderBottom: "1px solid #EEF2F6" }}>
                      <button className="scp1v" onMouseDown={V.nt?.cmd?.bold} title="Bold" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px" }}>B</button>
                      <button className="scp1v" onMouseDown={V.nt?.cmd?.italic} title="Italic" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", fontStyle: "italic", fontWeight: "600", fontSize: "14px", fontFamily: "Georgia,serif" }}>I</button>
                      <button className="scp1v" onMouseDown={V.nt?.cmd?.underline} title="Underline" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "underline", fontWeight: "600", fontSize: "14px" }}>U</button>
                      <button className="scp1v" onMouseDown={V.nt?.cmd?.strikeThrough} title="Strikethrough" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "line-through", fontWeight: "600", fontSize: "14px" }}>S</button>
                      <span style={{ width: "1px", height: "18px", background: "#E2E8F0", margin: "0 6px" }} />
                      <button className="scp1v" onMouseDown={V.nt?.cmd?.insertUnorderedList} title="Bulleted list" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" /></svg></button>
                      <button className="scp1v" onMouseDown={V.nt?.cmd?.insertOrderedList} title="Numbered list" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M10 6h10M10 12h10M10 18h10M4 5l1.5-1v5M3.5 14.5a1.5 1.5 0 0 1 3 .5c0 1-3 2-3 3.5h3" /></svg></button>
                      <span style={{ width: "1px", height: "18px", background: "#E2E8F0", margin: "0 6px" }} />
                      <button className="scp1w" onMouseDown={V.nt?.cmd?.undo} title="Undo" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3" /></svg></button>
                      <button className="scp1w" onMouseDown={V.nt?.cmd?.redo} title="Redo" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m15 14 5-5-5-5M20 9H10a6 6 0 0 0 0 12h3" /></svg></button>
                    </div>
                    <div ref={V.nt?.ref} contentEditable="true" suppressContentEditableWarning="true" data-placeholder="Describe the issue in detail…" style={{ minHeight: "130px", maxHeight: "260px", overflow: "auto", padding: "12px 14px", fontSize: "14px", fontWeight: "400", lineHeight: "1.55", color: "#0f172a", outline: "0" }} />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: "13px", fontWeight: "500", color: "#334155" }}>
                    Attachments
                    <span style={{ fontSize: "12px", fontWeight: "400", color: "#475569" }}>Optional</span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#475569", lineHeight: "1.45", marginTop: "-4px" }}>Attach screenshots, photos or files that help our team understand and resolve the issue faster. PNG, JPG, PDF or CSV, up to 10 MB each.</div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                    <label style={{ display: "inline-flex", alignItems: "center", gap: "7px", height: "34px", padding: "0 14px", borderRadius: "8px", background: "#E6F4F1", color: "#0F766E", fontSize: "13px", fontWeight: "500", cursor: "pointer" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M21 11.5 12.5 20a5 5 0 0 1-7-7L14 4.5a3.3 3.3 0 0 1 4.7 4.7L10.2 17.7a1.7 1.7 0 0 1-2.4-2.4L15.5 7.6" /></svg>
                      Add Files
                      <input type="file" multiple="true" onChange={V.nt?.addFiles} style={{ display: "none" }} />
                    </label>
                    {L(V.nt?.files).map((f, i112) => <React.Fragment key={i112}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "30px", padding: "0 6px 0 10px", borderRadius: "8px", border: "1px solid #E2E8F0", background: "#F8FAFC", fontSize: "12px", color: "#334155" }}>
                        {S(f?.name)}
                        <button className="scp10" onClick={f?.remove} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "18px", height: "18px", borderRadius: "5px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
                      </span>
                    </React.Fragment>)}
                  </div>
                </div>
              </div>
              <div style={{ padding: "14px 22px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "flex-end", gap: "8px", background: "#fbfcfd" }}>
                <button onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 14px", borderRadius: "8px", border: "1px solid #E2E8F0", background: "#fff", fontSize: "14px", fontWeight: "500" }}>Cancel</button>
                <button onClick={V.nt?.submit} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: `${A(V.nt?.cur)}`, height: "36px", padding: "0 16px", borderRadius: "8px", background: `${A(V.nt?.bg)}`, color: "#fff", fontSize: "14px", fontWeight: "600" }}>Submit ticket</button>
              </div>
              </>}
              {V.nt?.done && <>
                <div style={{ padding: "30px 28px 8px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "12px" }}>
                  <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#ECFDF5", color: "#16A34A", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                  <div style={{ fontWeight: "700", fontSize: "18px", color: "#0F172A" }}>Ticket submitted</div>
                  <div style={{ fontSize: "13.5px", color: "#475569", lineHeight: "1.55", textWrap: "pretty" }}>
                    <b style={{ color: "#0F172A" }}>{S(V.nt?.doneId)}</b>{" has been sent to the UMP admin team for "}<b style={{ color: "#0F172A" }}>{S(V.nt?.farm)}</b>{". You\u2019ll be notified by email when it\u2019s updated."}
                  </div>
                </div>
                <div style={{ padding: "18px 24px 22px", display: "flex", justifyContent: "center" }}>
                  <button onClick={V.nt?.finish} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 28px", background: "#043C2C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>View tickets</button>
                </div>
              </>}
            </div>
          </div>
        </>}

        {V.tkView?.show && <>
          <div onClick={V.tkView?.close} style={{ position: "fixed", inset: "0", background: "rgba(10,59,43,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "55", overflow: "hidden" }}>
            <div onClick={V.tkView?.stop} style={{ background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "560px", boxShadow: "0 24px 64px rgba(10,59,43,.28)", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
              <div style={{ padding: "20px 22px 14px", borderBottom: "1px solid #EEF2F6", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                <div style={{ minWidth: "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#64748B" }}>{S(V.tkView?.id)}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", height: "22px", padding: "0 9px", borderRadius: "999px", fontSize: "11.5px", fontWeight: "600", background: `${A(V.tkView?.sbg)}`, color: `${A(V.tkView?.sfg)}` }}>{S(V.tkView?.status)}</span>
                  </div>
                  <div style={{ fontWeight: "600", fontSize: "17px", color: "#0F172A", marginTop: "4px" }}>{S(V.tkView?.title)}</div>
                </div>
                <button className="scpb" onClick={V.tkView?.close} title="Close" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
              </div>
              <div style={{ padding: "16px 22px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "10px" }}>
                  {[['Farm', V.tkView?.farm], ['Topic', V.tkView?.topic], ['Raised by', V.tkView?.by], ['Created', V.tkView?.created], ['Last updated', V.tkView?.upd]].map(([k, v]) => <React.Fragment key={k}>
                    <div style={{ padding: "9px 12px", borderRadius: "10px", background: "#F8FAFC", border: "1px solid #EEF2F6" }}>
                      <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".05em", textTransform: "uppercase", color: "#64748B" }}>{k}</div>
                      <div style={{ fontSize: "13.5px", fontWeight: "500", color: "#0F172A", marginTop: "2px" }}>{S(v)}</div>
                    </div>
                  </React.Fragment>)}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#334155", marginBottom: "6px" }}>Description</div>
                  <div style={{ fontSize: "13.5px", color: "#0F172A", lineHeight: "1.55", whiteSpace: "pre-wrap", padding: "12px 14px", border: "1px solid #E2E8F0", borderRadius: "10px" }}>{S(V.tkView?.desc)}</div>
                </div>
                {V.tkView?.hasFiles && <>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {L(V.tkView?.fileList).map((fn, itf) => <React.Fragment key={itf}>
                      <span style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 10px", borderRadius: "8px", border: "1px solid #E2E8F0", background: "#F8FAFC", fontSize: "12px", color: "#334155" }}>{S(fn)}</span>
                    </React.Fragment>)}
                  </div>
                </>}
                <div style={{ display: "flex", gap: "8px", alignItems: "center", padding: "10px 12px", borderRadius: "10px", background: "#E8F6EF", fontSize: "12.5px", color: "#0B4A35", lineHeight: "1.45" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
                  This ticket is view only. The UMP admin team tracks and replies to it in the Admin Portal.
                </div>
              </div>
              <div style={{ padding: "14px 22px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "flex-end", background: "#fbfcfd" }}>
                <button onClick={V.tkView?.close} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", border: "1px solid #E2E8F0", background: "#fff", fontSize: "14px", fontWeight: "500" }}>Close</button>
              </div>
            </div>
          </div>
        </>}
        {V.modal?.addPen && <>
          <div style={{ position: "fixed", inset: "0", background: "rgba(12,32,26,.38)", zIndex: "60", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
            <div onClick={V.closeModal} style={{ position: "absolute", inset: "0" }} />
            <div style={{ position: "relative", width: "880px", maxWidth: "100%", maxHeight: "100%", background: "#fff", borderRadius: "14px", boxShadow: "0 24px 60px rgba(12,32,26,.28)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "20px 24px 18px", background: "#F0F8EE", borderBottom: "1px solid #DCEBD8" }}>
                <div>
                  <div style={{ fontSize: "18px", fontWeight: "600", color: "#1E2A26" }}>Add pen</div>
                  <div style={{ fontSize: "12.5px", color: "#8A9A95", marginTop: "3px" }}>{S(V.apf?.sub)}</div>
                </div>
                <button className="scp27" onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0 0 0 auto", cursor: "pointer", flex: "0 0 30px", width: "30px", height: "30px", borderRadius: "8px", border: "1px solid #E4EAE8", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: "#6E827C" }}>×</button>
              </div>
              <div style={{ flex: "1 1 auto", minHeight: "0", overflowY: "auto", padding: "18px 24px 170px", background: "#F8FBF7", display: "flex", flexDirection: "column", gap: "12px" }}>
                {V.apf?.ddOpen && <>
                  <div onClick={V.apf?.ddClose} style={{ position: "fixed", inset: "0", zIndex: "20" }} />
                </>}
                <div style={{ background: "#fff", border: "1px solid #E2EEE3", borderRadius: "12px", padding: "16px 18px 18px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", paddingBottom: "12px", marginBottom: "14px", borderBottom: "1px solid #EDF4EC" }}>
                    <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#0C6B4C" }}>Pen metrics</span>
                    <span style={{ fontSize: "11.5px", color: "#93A5A0" }}>Identity and size</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr) minmax(0,1fr)", gap: "14px" }}>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "11.5px", fontWeight: "500", color: "#5E7169", minWidth: "0" }}>
                      Pen Identifier / ID *
                      <input className="scp28" value={V.apf?.label ?? ""} onChange={V.apf?.onName} placeholder="e.g. Pen 4" style={{ border: "1px solid #DCE7E1", borderRadius: "9px", padding: "0 12px", height: "40px", font: "inherit", fontSize: "13.5px", color: "#1E2A26", minWidth: "0", background: "#fff", outline: "0" }} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "11.5px", fontWeight: "500", color: "#5E7169", minWidth: "0" }}>
                      Head count (animals)
                      <input className="scp28" value={V.apf?.head ?? ""} onChange={V.apf?.onHead} inputMode="numeric" placeholder="180" style={{ border: "1px solid #DCE7E1", borderRadius: "9px", padding: "0 12px", height: "40px", font: "inherit", fontSize: "13.5px", color: "#1E2A26", minWidth: "0", background: "#fff", outline: "0" }} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "11.5px", fontWeight: "500", color: "#5E7169", minWidth: "0" }}>
                      Area size (m²)
                      <input className="scp28" value={V.apf?.cap ?? ""} onChange={V.apf?.onCap} inputMode="numeric" placeholder="2000" style={{ border: "1px solid #DCE7E1", borderRadius: "9px", padding: "0 12px", height: "40px", font: "inherit", fontSize: "13.5px", color: "#1E2A26", minWidth: "0", background: "#fff", outline: "0" }} />
                    </label>
                  </div>
                </div>
                <div style={{ background: "#fff", border: "1px solid #E2EEE3", borderRadius: "12px", padding: "16px 18px 18px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", paddingBottom: "12px", marginBottom: "14px", borderBottom: "1px solid #EDF4EC" }}>
                    <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#0C6B4C" }}>Animal profile</span>
                    <span style={{ fontSize: "11.5px", color: "#93A5A0" }}>Sets the pen’s HLI upper threshold</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "14px" }}>
                    {L(V.apf?.fields).map((f, i300) => <React.Fragment key={i300}>
                      <div style={{ minWidth: "0", position: "relative", zIndex: `${A(f?.z)}` }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "6px" }}>
                          <span style={{ flex: "1 1 auto", minWidth: "0", fontSize: "11.5px", fontWeight: "500", color: "#5E7169", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(f?.label)}</span>
                          <span style={{ flex: "0 0 auto", fontSize: "12px", fontWeight: "600", color: `${A(f?.adjC)}` }}>{S(f?.adj)}</span>
                        </div>
                        <div style={{ position: "relative", minWidth: "0" }}>
                          <button className="scp29" onClick={f?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", gap: "6px", minWidth: "0", height: "40px", border: `1px solid ${A(f?.bd)}`, background: `${A(f?.bg)}`, borderRadius: "9px", padding: "0 12px", fontSize: "13.5px", color: "#1E2A26", whiteSpace: "nowrap", textAlign: "left" }}>
                            <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{S(f?.value)}</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9AAAA5" style={{ marginLeft: "auto", flexShrink: "0", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", transform: `${A(f?.rot)}`, transition: "transform .15s" }}><path d="m6 9 6 6 6-6" /></svg>
                          </button>
                          {f?.open && <>
                            <div style={{ position: "absolute", top: "100%", left: "0", right: "0", zIndex: "25", marginTop: "3px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "9px", boxShadow: "0 10px 26px rgba(12,32,26,.16)", padding: "6px", display: "flex", flexDirection: "column", gap: "2px", maxHeight: "220px", overflowY: "auto" }}>
                              {L(f?.options).map((o, i301) => <React.Fragment key={i301}>
                                <button className="scp2a" onClick={o?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", display: "flex", gap: "10px", padding: "9px 11px", borderRadius: "7px", fontSize: "13px", textAlign: "left", background: `${A(o?.bg)}`, color: `${A(o?.c)}`, fontWeight: `${A(o?.fw)}` }}>
                                  <span style={{ minWidth: "0" }}>{S(o?.label)}</span>
                                  <span style={{ marginLeft: "auto", color: `${A(o?.adjC)}`, fontWeight: "600" }}>{S(o?.adj)}</span>
                                </button>
                              </React.Fragment>)}
                            </div>
                          </>}
                        </div>
                      </div>
                    </React.Fragment>)}
                  </div>
                </div>
                <div style={{ background: "#fff", border: "1px solid #E2EEE3", borderRadius: "12px", padding: "16px 18px 18px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", paddingBottom: "12px", marginBottom: "14px", borderBottom: "1px solid #EDF4EC" }}>
                    <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#0C6B4C" }}>Allocate devices to pen</span>
                    <span style={{ fontSize: "11.5px", color: "#93A5A0" }}>Devices added to this pen</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {L(V.apf?.sel).map((d, i302) => <React.Fragment key={i302}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", border: "1px solid #DCE7E1", borderRadius: "9px", padding: "9px 12px" }}>
                        <span style={{ flex: "1 1 auto", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "13.5px", color: "#1E2A26" }}>{S(d?.label)}</span>
                        {d?.isPump && <>
                          <span style={{ flex: "0 0 auto", fontSize: "11.5px", color: "#7C8D88", whiteSpace: "nowrap" }}>
                            {"Status "}
                            <b style={{ fontWeight: "600", color: `${A(d?.statusC)}` }}>{S(d?.statusLabel)}</b>
                          </span>
                          <button onClick={d?.toggle} title="Toggle pump on/off" style={{ appearance: "none", border: "0", padding: "0", margin: "0", flex: "0 0 auto", width: "34px", height: "20px", borderRadius: "10px", background: `${A(d?.toggleBg)}`, position: "relative", cursor: "pointer" }}><span style={{ position: "absolute", top: "2px", left: `${A(d?.knob)}`, width: "16px", height: "16px", borderRadius: "50%", background: "#fff", transition: "left .15s" }} /></button>
                        </>}
                        <button className="scp2b" onClick={d?.remove} title="Remove device" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", flex: "0 0 auto", fontSize: "16px", color: "#A0564F", cursor: "pointer", lineHeight: "1" }}>×</button>
                      </div>
                    </React.Fragment>)}
                    <div style={{ position: "relative", zIndex: `${A(V.apf?.devZ)}` }}>
                      <button className="scp2c" onClick={V.apf?.devToggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "1.5px dashed #BFDCCB", borderRadius: "9px", padding: "11px", background: "transparent", fontSize: "13px", fontWeight: "600", color: "#12855F" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round" }}><path d="M12 5v14M5 12h14" /></svg>
                        {S(V.apf?.addLbl)}
                      </button>
                      {V.apf?.devOpen && <>
                        <div ref={el => { if (el && !el._shown) { el._shown = 1; setTimeout(() => el.scrollIntoView({ block: "nearest", behavior: "smooth" }), 30); } }} style={{ position: "relative", zIndex: "25", marginTop: "6px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "9px", boxShadow: "0 14px 34px rgba(12,32,26,.2)", padding: "8px", display: "flex", flexDirection: "column", gap: "6px" }}>
                          <input className="scp28" value={V.apf?.q ?? ""} onChange={V.apf?.onQ} placeholder="Search devices…" style={{ border: "1px solid #DCE7E1", borderRadius: "8px", padding: "0 10px", height: "36px", font: "inherit", fontSize: "13px", color: "#1E2A26", background: "#F8FBF7", outline: "0" }} />
                          <div style={{ display: "flex", flexDirection: "column", gap: "2px", maxHeight: "260px", overflowY: "auto" }}>
                            {L(V.apf?.opts).map((o, i303) => <React.Fragment key={i303}>
                              <button className="scp2a" onClick={o?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", display: "flex", alignItems: "center", gap: "10px", padding: "9px 11px", borderRadius: "7px", cursor: "pointer", textAlign: "left" }}>
                                <span style={{ flex: "0 0 18px", width: "18px", height: "18px", borderRadius: "5px", border: `1.5px solid ${A(o?.bd)}`, background: `${A(o?.bg)}`, color: "#fff", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>{S(o?.tick)}</span>
                                <span style={{ minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "13px", color: "#1E2A26" }}>{S(o?.label)}</span>
                                <span style={{ marginLeft: "auto", fontSize: "11px", color: "#93A5A0", whiteSpace: "nowrap" }}>{S(o?.kind)}</span>
                              </button>
                            </React.Fragment>)}
                            {V.apf?.none && <>
                              <span style={{ padding: "9px 11px", fontSize: "12.5px", color: "#93A5A0" }}>No devices match.</span>
                            </>}
                          </div>
                        </div>
                      </>}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: "14px 24px", borderTop: "1px solid #DCEBD8", background: "#F0F8EE", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "13px", color: "#33453F", whiteSpace: "nowrap" }}>
                  {"HLI upper threshold "}
                  <b style={{ fontWeight: "600", color: "#0C6B4C", fontSize: "16px", marginLeft: "6px" }}>{S(V.apf?.upper)}</b>
                  {" "}
                  <span style={{ color: "#8A9A95" }}>({S(V.apf?.base)}{" base "}{S(V.apf?.total)})</span>
                </span>
                <button className="scp2d" onClick={V.apf?.draft} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", fontSize: "13px", color: "#12855F", textDecoration: "underline", whiteSpace: "nowrap" }}>Save &amp; finish later</button>
                <button className="scp2e" onClick={V.apf?.save} style={{ appearance: "none", border: "0", font: "inherit", margin: "0 0 0 auto", cursor: `${A(V.apf?.cur)}`, fontSize: "13.5px", fontWeight: "600", color: "#fff", background: `${A(V.apf?.btnBg)}`, borderRadius: "8px", padding: "10px 22px", whiteSpace: "nowrap" }}>Add pen</button>
              </div>
            </div>
          </div>
        </>}
        {V.modal?.config && <>
          <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(10,59,43,.45)", zIndex: "60", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "40px 16px", overflowY: "auto" }}>
            <div onClick={V.stop} style={{ width: "min(760px,100%)", background: "#fff", borderRadius: "16px", boxShadow: "0 24px 60px rgba(10,59,43,.3)", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "18px 22px", borderBottom: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: "600", fontSize: "17px" }}>Livestock configuration</div>
                  <div style={{ fontSize: "12.5px", color: "#64748b", marginTop: "2px" }}>Pen and animal settings are used in Heat Load Index calculations</div>
                </div>
                <button className="scp1f scp6" onClick={V.closeModal} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", fontSize: "20px", color: "#64748b", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>×</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "200px minmax(0,1fr)" }}>
                <div style={{ padding: "14px", borderRight: "1px solid #F1F5F9", display: "flex", flexDirection: "column", gap: "4px" }}>
                  {L(V.cfg?.pens).map((p, i304) => <React.Fragment key={i304}>
                    <button className="scp6 scpt" onClick={p?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", padding: "9px 10px", borderRadius: "8px", fontSize: "13.5px", background: `${A(p?.bg)}`, color: `${A(p?.fg)}`, fontWeight: `${A(p?.fw)}`, transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>{S(p?.label)}</button>
                  </React.Fragment>)}
                  <button className="scp6 scpt" onClick={V.cfg?.add} style={{ appearance: "none", border: "1px dashed #99F6E4", font: "inherit", margin: "6px 0 0", cursor: "pointer", padding: "8px 10px", borderRadius: "8px", fontSize: "13px", background: "#F8FAFC", color: "#14532D", fontWeight: "500", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>+ Add pen</button>
                </div>
                <div style={{ padding: "18px 22px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ fontSize: "11.5px", fontWeight: "600", letterSpacing: ".06em", color: "#043C2C" }}>PEN SETTINGS</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
                      Pen name
                      <input value={V.cfg?.name ?? ""} readOnly style={{ height: "38px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", outline: "0" }} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
                      Number of animals
                      <input value={V.cfg?.animals ?? ""} readOnly style={{ height: "38px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", outline: "0" }} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
                      Shade
                      <select style={{ height: "38px", padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", background: "#fff" }}>
                        <option>None</option>
                        <option>Partial</option>
                        <option>Full</option>
                      </select>
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
                      Weather station
                      <select style={{ height: "38px", padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", background: "#fff" }}>
                        <option>WS-01 Greg Weather Station</option>
                        <option>WS-02 Highland Weather Station</option>
                      </select>
                    </label>
                  </div>
                  <div style={{ fontSize: "11.5px", fontWeight: "600", letterSpacing: ".06em", color: "#043C2C", marginTop: "4px" }}>ANIMAL PROFILE</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
                      Breed
                      <select style={{ height: "38px", padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", background: "#fff" }}>
                        <option>Angus</option>
                        <option>Hereford</option>
                        <option>Murray Grey</option>
                        <option>Wagyu</option>
                      </select>
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
                      Coat colour
                      <select style={{ height: "38px", padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", background: "#fff" }}>
                        <option>Black</option>
                        <option>Red</option>
                        <option>White / light</option>
                      </select>
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
                      Average weight (kg)
                      <input defaultValue="480" style={{ height: "38px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", outline: "0" }} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
                      Health status
                      <select style={{ height: "38px", padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", background: "#fff" }}>
                        <option>Healthy</option>
                        <option>Recovering</option>
                        <option>Sick</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ padding: "14px 22px", borderTop: "1px solid #F1F5F9", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button className="scp6 scpt" onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 18px", borderRadius: "9px", border: "1px solid #E2E8F0", background: "#fff", fontSize: "13.5px", fontWeight: "500", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>Cancel</button>
                <button className="scpo scp6" onClick={V.closeModal} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 22px", borderRadius: "9px", background: "#043C2C", color: "#fff", fontSize: "13.5px", fontWeight: "600", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>Save configuration</button>
              </div>
            </div>
          </div>
        </>}
        {V.modal?.invite && <>
          <div onClick={V.inv?.done ? V.inv?.finish : V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(10,59,43,.45)", backdropFilter: "blur(4px)", zIndex: "60", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", overflow: "hidden" }}>
            {V.inv?.form && <>
              <div onClick={V.stop} style={{ background: "#fff", borderRadius: "14px", boxShadow: "0 24px 64px rgba(10,59,43,.28)", width: "100%", maxWidth: "560px", maxHeight: "calc(100vh - 32px)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ padding: "12px 20px", borderBottom: "1px solid #EEF2F6", display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "10px", background: "#E8F6EF", color: "#0B6B4B", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M19 8v6M16 11h6" /></svg></span>
                  <div style={{ flex: "1", minWidth: "0", fontWeight: "700", fontSize: "17px", color: "#0F172A" }}>Invite user</div>
                  <button onClick={V.closeModal} title="Close" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
                </div>
                <div style={{ padding: "12px 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "10px 12px", overflow: "auto", minHeight: "0", flex: "1 1 auto" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0" }}>
                    <span>{"Full name "}<span style={{ color: "#DC2626" }}>*</span></span>
                    <input className="scp1q" value={V.inv?.name ?? ""} onChange={V.inv?.setName} placeholder="e.g. Emma Barnes" style={{ height: "36px", border: `1px solid ${A(V.inv?.nameBd)}`, borderRadius: "9px", outline: "0", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box" }} />
                    {V.inv?.nameErr && <><span style={{ fontSize: "11.5px", fontWeight: "500", color: "#B91C1C" }}>{S(V.inv?.nameErr)}</span></>}
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0" }}>
                    <span>{"Email address "}<span style={{ color: "#DC2626" }}>*</span></span>
                    <input className="scp1q" type="email" value={V.inv?.email ?? ""} onChange={V.inv?.setEmail} placeholder="name@farm.com.au" style={{ height: "36px", border: `1px solid ${A(V.inv?.emailBd)}`, borderRadius: "9px", outline: "0", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box" }} />
                    {V.inv?.emailErr && <><span style={{ fontSize: "11.5px", fontWeight: "500", color: "#B91C1C" }}>{S(V.inv?.emailErr)}</span></>}
                  </label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0", gridColumn: "1/-1" }}>
                    <span>Farm</span>
                    <div style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", padding: "0 11px", background: "#F8FAFC", display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: "500", color: "#0F172A" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B6B4B" style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                      {S(V.inv?.farm)}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0", gridColumn: "1/-1" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                      <span>{"Role "}<span style={{ color: "#DC2626" }}>*</span></span>
                      <button onClick={V.inv?.toggleGuide} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "1px 6px", cursor: "pointer", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "#0B6B4B", display: "flex", alignItems: "center", gap: "5px" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
                        {S(V.inv?.guideL)}
                      </button>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "8px" }}>
                      {L(V.inv?.roles).map((r, iiv) => <React.Fragment key={iiv}>
                        <button onClick={r?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", padding: "9px 10px", borderRadius: "9px", border: `1.5px solid ${A(r?.bd)}`, background: `${A(r?.bg)}`, display: "flex", alignItems: "center", gap: "9px", color: "#0F172A", transition: "border-color .12s,background .12s" }}>
                          <span role="checkbox" aria-checked={r?.on} style={{ width: "18px", height: "18px", borderRadius: "5px", border: `1.5px solid ${A(r?.rbd)}`, background: `${A(r?.cbg)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round", opacity: `${A(r?.tickOp)}` }}><path d="m5 12 5 5 9-10" /></svg></span>
                          <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: "13px", fontWeight: "700" }}>{S(r?.name)}</span>
                            <span style={{ fontSize: "11.5px", fontWeight: "400", color: "#475569", lineHeight: "1.3" }}>{S(r?.short)}</span>
                          </span>
                        </button>
                      </React.Fragment>)}
                    </div>
                    {V.inv?.guideOpen && <>
                      <div style={{ border: "1px solid #E2E8F0", borderRadius: "10px", background: "#F8FAFC", display: "flex", flexDirection: "column", padding: "4px 0" }}>
                        {L(V.inv?.guide).map((g, iig) => <React.Fragment key={iig}>
                          <div style={{ display: "grid", gridTemplateColumns: "78px minmax(0,1fr)", gap: "8px", alignItems: "baseline", padding: "4px 10px", fontSize: "11.5px", lineHeight: "1.35" }}>
                            <span style={{ fontWeight: "700", color: `${A(g?.fg)}` }}>{S(g?.name)}</span>
                            <span style={{ fontWeight: "400", color: "#475569" }}>{S(g?.desc)}</span>
                          </div>
                        </React.Fragment>)}
                      </div>
                    </>}
                  </div>
                  <div style={{ gridColumn: "1/-1", display: "flex", gap: "8px", alignItems: "center", padding: "8px 12px", borderRadius: "9px", background: "#E8F6EF", fontSize: "12.5px", color: "#0B4A35" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" /></svg>
                    The user will receive an email invitation to the Producer Portal.
                  </div>
                </div>
                <div style={{ padding: "10px 20px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                  <button className="scp6 scpt" onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", border: "1px solid #E2E8F0", background: "#fff", color: "#0f172a", borderRadius: "9px", fontSize: "13.5px", fontWeight: "500" }}>Cancel</button>
                  <button onClick={V.inv?.send} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 18px", background: `${A(V.inv?.btn)}`, color: "#fff", borderRadius: "9px", fontWeight: "600", fontSize: "13.5px" }}>Send invitation</button>
                </div>
              </div>
            </>}
            {V.inv?.confirm && <>
              <div onClick={V.stop} style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 24px 64px rgba(10,59,43,.28)", width: "100%", maxWidth: "440px", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
                <div style={{ padding: "22px 24px 6px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ width: "40px", height: "40px", borderRadius: "11px", background: "#E8F6EF", color: "#0B6B4B", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4z" /></svg></span>
                  <div style={{ flex: "1", minWidth: "0" }}>
                    <div style={{ fontWeight: "700", fontSize: "17px", color: "#0F172A" }}>Send invite?</div>
                    <div style={{ fontSize: "13.5px", color: "#475569", marginTop: "6px", lineHeight: "1.5", textWrap: "pretty" }}>
                      {"Invite "}<b style={{ color: "#0F172A" }}>{S(V.inv?.name)}</b>{" to "}<b style={{ color: "#0F172A" }}>{S(V.inv?.farm)}</b>{" as "}<b style={{ color: "#0F172A" }}>{S(V.inv?.role)}</b>{"? An invitation email goes to "}{S(V.inv?.email)}{"."}
                    </div>
                  </div>
                </div>
                <div style={{ margin: "12px 24px 0", padding: "10px 12px", borderRadius: "10px", background: "#F8FAFC", fontSize: "12.5px", color: "#475569", lineHeight: "1.45" }}>
                  <b style={{ color: "#0F172A" }}>{S(V.inv?.role)}:</b>{" "}{S(V.inv?.desc)}
                </div>
                <div style={{ padding: "18px 24px 20px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                  <button onClick={V.inv?.back} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 18px", border: "1px solid #E2E8F0", background: "#fff", color: "#0f172a", borderRadius: "10px", fontSize: "14px", fontWeight: "500" }}>Back</button>
                  <button onClick={V.inv?.confirmSend} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 20px", background: "#043C2C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4z" /></svg>
                    Send invite
                  </button>
                </div>
              </div>
            </>}
            {V.inv?.done && <>
              <div onClick={V.stop} style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 24px 64px rgba(10,59,43,.28)", width: "100%", maxWidth: "440px", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
                <div style={{ padding: "30px 28px 8px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "12px" }}>
                  <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#ECFDF5", color: "#16A34A", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                  <div style={{ fontWeight: "700", fontSize: "18px", color: "#0F172A" }}>Invite sent</div>
                  <div style={{ fontSize: "13.5px", color: "#475569", lineHeight: "1.55", textWrap: "pretty" }}>
                    <b style={{ color: "#0F172A" }}>{S(V.inv?.name)}</b>{" has been invited to "}<b style={{ color: "#0F172A" }}>{S(V.inv?.farm)}</b>{" as "}{S(V.inv?.article)}{" "}<b style={{ color: "#0F172A" }}>{S(V.inv?.role)}</b>{"."}
                  </div>
                  <div style={{ fontSize: "12.5px", color: "#64748B" }}>{"Invitation emailed to "}{S(V.inv?.email)}</div>
                </div>
                <div style={{ padding: "18px 24px 22px", display: "flex", justifyContent: "center" }}>
                  <button onClick={V.inv?.finish} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 28px", background: "#043C2C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Done</button>
                </div>
              </div>
            </>}
          </div>
        </>}
        {V.rc?.show && <>
          <div onClick={V.rc?.cancel} style={{ position: "fixed", inset: "0", background: "rgba(10,59,43,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "60", overflow: "hidden" }}>
            <div onClick={V.rc?.stop} style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 24px 64px rgba(10,59,43,.28)", width: "100%", maxWidth: "440px", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
              <div style={{ padding: "22px 24px 6px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "11px", background: "#FFFBEB", color: "#B45309", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 2.5 4 5.5v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10v-6z" /><path d="M12 8v5M12 16h.01" /></svg></span>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ fontWeight: "700", fontSize: "17px", color: "#0F172A" }}>Update role?</div>
                  <div style={{ fontSize: "13.5px", color: "#475569", marginTop: "6px", lineHeight: "1.5", textWrap: "pretty" }}>
                    {"Are you sure you want to change "}<b style={{ color: "#0F172A" }}>{S(V.rc?.name)}</b>{" from "}<b style={{ color: "#0F172A" }}>{S(V.rc?.from)}</b>{" to "}<b style={{ color: "#0F172A" }}>{S(V.rc?.to)}</b>{"? Their access to "}{S(V.rc?.farm)}{" changes straight away."}
                  </div>
                </div>
              </div>
              <div style={{ margin: "12px 24px 0", padding: "10px 12px", borderRadius: "10px", background: "#F8FAFC", fontSize: "12.5px", color: "#475569", lineHeight: "1.45" }}>
                <b style={{ color: "#0F172A" }}>{S(V.rc?.to)}:</b>{" "}{S(V.rc?.desc)}
              </div>
              <div style={{ padding: "18px 24px 20px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button onClick={V.rc?.cancel} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 18px", border: "1px solid #E2E8F0", background: "#fff", color: "#0f172a", borderRadius: "10px", fontSize: "14px", fontWeight: "500" }}>Cancel</button>
                <button onClick={V.rc?.confirm} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 20px", background: "#043C2C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Update role</button>
              </div>
            </div>
          </div>
        </>}
        {V.modal?.confirm && <>
          <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(10,59,43,.45)", zIndex: "60", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
            <div onClick={V.stop} style={{ width: "min(420px,100%)", background: "#fff", borderRadius: "16px", boxShadow: "0 24px 60px rgba(10,59,43,.3)", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ fontWeight: "600", fontSize: "17px" }}>{"Disconnect "}{S(V.confirmName)}?</div>
              <div style={{ fontSize: "13.5px", color: "#475569", lineHeight: "1.5" }}>{"Data from "}{S(V.confirmName)}{" will stop syncing to this farm. You can reconnect later."}</div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "6px" }}>
                <button className="scp6 scpt" onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "38px", padding: "0 16px", borderRadius: "9px", border: "1px solid #E2E8F0", background: "#fff", fontSize: "13.5px", fontWeight: "500", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>Cancel</button>
                <button className="scp6 scpt" onClick={V.doDisconnect} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "38px", padding: "0 16px", borderRadius: "9px", background: "#b91c1c", color: "#fff", fontSize: "13.5px", fontWeight: "600", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>Disconnect</button>
              </div>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
}
