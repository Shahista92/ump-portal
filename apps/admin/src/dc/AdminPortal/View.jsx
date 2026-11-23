import React from 'react';
import { S, L, A, C } from '../runtime.js';
import HelpCenter from '../shared/HelpCenter.jsx';
import LoginMap from '../shared/LoginMap.jsx';

import IsHome from './sections/IsHome.jsx';
import IsUsers from './sections/IsUsers.jsx';
import IsDevices from './sections/IsDevices.jsx';
import IsReports from './sections/IsReports.jsx';
import IsAlerts from './sections/IsAlerts.jsx';
import ModalTk from './sections/ModalTk.jsx';
import ModalAlert from './sections/ModalAlert.jsx';
import ConnShow from './sections/ConnShow.jsx';
// Generated from "UMP Admin Portal v17.dc.html". V = { ...props, ...renderVals() } from AdminPortal.jsx
export default function View({ V }) {
  return (
    <div className="sc-host">
      {V.login?.on && <>
        <div style={{ position: "fixed", inset: "0", zIndex: "300", background: "#fff", display: "flex", flexDirection: "column", overflow: "auto", fontFamily: "Geist,system-ui,sans-serif", color: "#0F172A" }}>
          <div style={{ flex: "1 0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))" }}>
          <div data-r="login-map" style={{ position: "relative", margin: "16px", minHeight: "480px", borderRadius: "24px", overflow: "hidden", background: "#1d2a1f", border: "2px solid #0B0F14", boxShadow: "0 10px 30px rgba(11,15,20,.18)" }}>
            <LoginMap />
            <div style={{ position: "absolute", top: "0", left: "0", right: "0", height: "84px", zIndex: "1", display: "flex", alignItems: "center", gap: "18px", padding: "0 28px", backgroundColor: "#fff", borderBottom: "1px solid #94A3B8" }}>
              <span style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#0A2342", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><img src="assets/ump-plus-logo.png" alt="UMP+" style={{ width: "36px", height: "auto", display: "block" }} /></span>
              <span style={{ width: "1px", height: "38px", background: "#94A3B8", flexShrink: "0" }} />
              <img src="assets/axistech-logo-full.png" alt="AxisTech" style={{ height: "42px", width: "auto", display: "block", mixBlendMode: "multiply" }} />
            </div>
            <div style={{ position: "absolute", inset: "0", pointerEvents: "none", background: "linear-gradient(180deg,rgba(7,25,47,.62) 0%,rgba(7,25,47,0) 24%,rgba(7,25,47,0) 52%,rgba(7,25,47,.9) 100%)" }} />
            <div style={{ position: "absolute", left: "32px", right: "32px", bottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", flexWrap: "wrap", pointerEvents: "none" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", maxWidth: "420px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: ".12em", color: "#5EEAD4" }}>UPPER MURRAY REGION</span>
                <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.3", color: "#fff", textShadow: "0 1px 12px rgba(0,0,0,.4)" }}>Manage farms, users and devices across the region.</span>
              </div>
            </div>
          </div>
          <div data-r="login-form" style={{ display: "flex", flexDirection: "column", minHeight: "100vh", boxSizing: "border-box", padding: "28px clamp(24px,6vw,72px)" }}>
            <div style={{ flex: "1", display: "flex", alignItems: "center", padding: "40px 0" }}>
              <div style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "28px" }}>
                {V.login?.signIn && <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h1 style={{ margin: "0", fontSize: "32px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.15", textWrap: "balance" }}>Welcome to Admin Portal</h1>
                    <p style={{ margin: "0", fontSize: "15px", color: "#64748B", lineHeight: "1.5" }}>Sign in with your admin account.</p>
                  </div>
                  <form onSubmit={V.login?.submit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px", fontSize: "13px", fontWeight: "600", color: "#334155" }}>
                      Email address
                      <input className="scp0" type="email" autoComplete="email" value={V.login?.email ?? ""} onChange={V.login?.setEmail} placeholder="name@farm.com.au" style={{ height: "48px", padding: "0 14px", border: "1px solid #D5DDE5", borderRadius: "12px", font: "inherit", fontSize: "15px", fontWeight: "400", color: "#0F172A", outline: "0", background: "#fff", transition: "border-color .15s,box-shadow .15s" }} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px", fontSize: "13px", fontWeight: "600", color: "#334155" }}>
                      <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        Password
                        <button className="scp1" type="button" onClick={V.login?.forgot} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", fontSize: "13px", fontWeight: "600", color: "#0B7F7E" }}>Forgot password?</button>
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
                    <button className="scp3 scp4" type="submit" style={{ appearance: "none", border: "0", font: "inherit", margin: "4px 0 0", cursor: "pointer", height: "50px", borderRadius: "12px", background: "#0A2342", color: "#fff", fontSize: "15px", fontWeight: "600", boxShadow: "0 8px 20px rgba(10,35,66,.22)", transition: "background .15s,transform .1s" }}>{S(V.login?.btnL)}</button>
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
                      <button className="scp3" type="submit" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "50px", borderRadius: "12px", background: "#0A2342", color: "#fff", fontSize: "15px", fontWeight: "600", boxShadow: "0 8px 20px rgba(10,35,66,.22)" }}>Send reset link</button>
                    </form>
                  </>}
                  {V.login?.sent && <>
                    <div style={{ padding: "14px 16px", borderRadius: "12px", background: "#F0FDFA", border: "1px solid #99F6E4", color: "#115E59", fontSize: "14px", lineHeight: "1.5" }}>{"If an account exists for "}{S(V.login?.email)}, a reset link is on its way.</div>
                  </>}
                  <button type="button" onClick={V.login?.back} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600", color: "#0B7F7E" }}>
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
      <div data-r="shell" style={{ display: "flex", height: "100vh", overflow: "hidden", fontSize: "14px" }}>
        <aside data-r="aside" data-open={V.collapsed ? "0" : "1"} onClick={e => { if (window.innerWidth < 768 && !V.collapsed && e.target.closest("button,a")) V.toggleSide(); }} style={{ width: `${A(V.sideW)}`, flexShrink: "0", background: "linear-gradient(180deg,#07192F 0%,#0A2342 50%,#123456 100%)", color: "#cbd5e1", display: "flex", flexDirection: "column", transition: "width .2s ease", overflow: "hidden", borderRight: "1px solid rgba(255,255,255,.04)", boxShadow: "inset -1px 0 0 rgba(96,165,250,.06),4px 0 24px rgba(7,25,47,.18)", position: "relative", zIndex: "3" }}>
          <div style={{ height: `${A(V.headH)}`, flexShrink: "0", transition: "height .2s ease", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "7px", padding: "0 12px", borderBottom: "1px solid rgba(255,255,255,.04)" }}>
            <img src="assets/ump-plus-logo.png" alt="UMP+" style={{ width: `${A(V.umW)}`, height: "auto", display: "block", transition: "width .2s ease" }} />
            {V.expanded && <>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                <div style={{ fontSize: "9px", fontWeight: "600", letterSpacing: ".12em", color: "#0891B2", textAlign: "center", whiteSpace: "nowrap" }}>UPPER MURRAY PRODUCER PLUS</div>
                <div style={{ fontSize: "8px", fontWeight: "500", letterSpacing: ".14em", color: "rgba(219,234,254,.6)", textAlign: "center", whiteSpace: "nowrap" }}>ADMIN PORTAL</div>
              </div>
            </>}
          </div>
          <nav data-thin style={{ scrollbarWidth: "none", overflowX: "hidden", padding: "8px 8px", display: "flex", flexDirection: "column", gap: "1px", flex: "1", minHeight: "0", overflowY: "auto" }}>
            <button className="scp6" onClick={V.nav?.home?.go} title="Home" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", height: "40px", flexShrink: "0", padding: "0 14px 0 14px", borderRadius: "8px", transition: "background .15s,color .15s", background: `${A(V.nav?.home?.bg)}`, color: `${A(V.nav?.home?.fg)}`, boxShadow: `${A(V.nav?.home?.bar)}`, whiteSpace: "nowrap" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></svg>
              {V.expanded && <>
                <span style={{ fontSize: "14px", fontWeight: "450" }}>Home</span>
              </>}
            </button>
            <button className="scp6" onClick={V.nav?.farms?.go} title="Farms" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", height: "40px", flexShrink: "0", padding: "0 14px 0 14px", borderRadius: "8px", transition: "background .15s,color .15s", background: `${A(V.nav?.farms?.bg)}`, color: `${A(V.nav?.farms?.fg)}`, boxShadow: `${A(V.nav?.farms?.bar)}`, whiteSpace: "nowrap" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}>
                <path d="M12 18.5 9 17l-6 3V6l6-3 6 3 6-3v7" />
                <path d="M9 3v14" />
                <path d="M15 6v5" />
                <path d="M21 17.4c0 2.2-3 4.6-3 4.6s-3-2.4-3-4.6a3 3 0 0 1 6 0z" />
                <circle cx="18" cy="17.4" r=".8" />
              </svg>
              {V.expanded && <>
                <span style={{ fontSize: "14px", fontWeight: "450" }}>Farms</span>
              </>}
            </button>
            <button className="scp6" onClick={V.nav?.users?.go} title="Users" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", height: "40px", flexShrink: "0", padding: "0 14px 0 14px", borderRadius: "8px", transition: "background .15s,color .15s", background: `${A(V.nav?.users?.bg)}`, color: `${A(V.nav?.users?.fg)}`, boxShadow: `${A(V.nav?.users?.bar)}`, whiteSpace: "nowrap" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}>
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
                <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8" />
                <path d="M18.5 14.2A6.5 6.5 0 0 1 21.5 20" />
              </svg>
              {V.expanded && <>
                <span style={{ fontSize: "14px", fontWeight: "450", flex: "1" }}>Users</span>
              </>}
              {V.usersSub && <>
                <span className="scp7" onClick={V.toggleUsersSub} title={V.usersSubTitle} style={{ width: "22px", height: "22px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", transform: `${A(V.usersSubRot)}`, transition: "transform .2s,background .12s" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 15 6-6 6 6" /></svg></span>
              </>}
            </button>
            {V.usersSubOpen && <>
              <button className="scp8" onClick={V.goRoles} title="Manage Roles" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", height: "34px", flexShrink: "0", padding: `0 14px 0 ${A(V.subPad)}`, marginTop: "-2px", borderRadius: "8px", transition: "background .15s,color .15s", background: `${A(V.rolesNav?.bg)}`, color: `${A(V.rolesNav?.fg)}`, whiteSpace: "nowrap" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                {V.expanded && <>
                  <span style={{ fontSize: "13px", fontWeight: "450" }}>Manage Roles</span>
                </>}
              </button>
            </>}
            <button className="scp6" onClick={V.nav?.devices?.go} title="Devices" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", height: "40px", flexShrink: "0", padding: "0 14px 0 14px", borderRadius: "8px", transition: "background .15s,color .15s", background: `${A(V.nav?.devices?.bg)}`, color: `${A(V.nav?.devices?.fg)}`, boxShadow: `${A(V.nav?.devices?.bar)}`, whiteSpace: "nowrap" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}>
                <circle cx="12" cy="12" r="2" />
                <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" />
              </svg>
              {V.expanded && <>
                <span style={{ fontSize: "14px", fontWeight: "450" }}>Devices</span>
              </>}
            </button>
            <button className="scp6" onClick={V.nav?.alerts?.go} title="Alerts" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", height: "40px", flexShrink: "0", padding: "0 14px 0 14px", borderRadius: "8px", transition: "background .15s,color .15s", background: `${A(V.nav?.alerts?.bg)}`, color: `${A(V.nav?.alerts?.fg)}`, boxShadow: `${A(V.nav?.alerts?.bar)}`, whiteSpace: "nowrap" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}>
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
              </svg>
              {V.expanded && <>
                <span style={{ fontSize: "14px", fontWeight: "450", flex: "1" }}>Alerts</span>
              </>}
              {V.usersSub && <>
                <span className="scp7" onClick={V.toggleAlertsSub} title={V.alertsSubTitle} style={{ width: "22px", height: "22px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", transform: `${A(V.alertsSubRot)}`, transition: "transform .2s,background .12s" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 15 6-6 6 6" /></svg></span>
              </>}
            </button>
            {V.alertsSubOpen && <>
              <button className="scp8" onClick={V.nav?.alertTpl?.go} title="Templates" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", height: "34px", flexShrink: "0", padding: `0 14px 0 ${A(V.subPad)}`, marginTop: "-2px", borderRadius: "8px", transition: "background .15s,color .15s", background: `${A(V.tplNav?.bg)}`, color: `${A(V.tplNav?.fg)}`, whiteSpace: "nowrap" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                  <path d="M14 3v5h5M9 13h6M9 17h6" />
                </svg>
                {V.expanded && <>
                  <span style={{ fontSize: "13px", fontWeight: "450" }}>Templates</span>
                </>}
              </button>
            </>}
            <button className="scp6" onClick={V.nav?.reports?.go} title="Analytics" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", height: "40px", flexShrink: "0", padding: "0 14px 0 14px", borderRadius: "8px", transition: "background .15s,color .15s", background: `${A(V.nav?.reports?.bg)}`, color: `${A(V.nav?.reports?.fg)}`, boxShadow: `${A(V.nav?.reports?.bar)}`, whiteSpace: "nowrap" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 20V11M11 20V5M17 20v-7M3 20h18" /></svg>
              {V.expanded && <>
                <span style={{ fontSize: "14px", fontWeight: "450" }}>Analytics</span>
              </>}
            </button>
            <button className="scp6" onClick={V.nav?.support?.go} title="Support" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", height: "40px", flexShrink: "0", padding: "0 14px 0 14px", borderRadius: "8px", transition: "background .15s,color .15s", background: `${A(V.nav?.support?.bg)}`, color: `${A(V.nav?.support?.fg)}`, boxShadow: `${A(V.nav?.support?.bar)}`, whiteSpace: "nowrap" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}>
                <path d="M3 9a2 2 0 0 0 0 6v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a2 2 0 0 1 0-6V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z" />
                <path d="M14 5v2M14 11v2M14 17v2" />
              </svg>
              {V.expanded && <>
                <span style={{ fontSize: "14px", fontWeight: "450" }}>Support</span>
              </>}
            </button>
            <button className="scp6" onClick={V.goPortal} title="Open Producer Portal" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: "14px", height: "42px", flexShrink: "0", padding: "0 14px", borderRadius: "8px", color: "#cbd5e1", whiteSpace: "nowrap" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
              {V.expanded && <>
                <span style={{ fontSize: "14px", fontWeight: "450" }}>Producer Portal</span>
              </>}
            </button>
          </nav>
          <div style={{ padding: "16px 12px 18px", borderTop: "1px solid rgba(255,255,255,.05)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", flexShrink: "0" }}>
            {V.expanded && <>
              <div style={{ fontSize: "10px", letterSpacing: ".14em", color: "#7c8799" }}>POWERED BY</div>
              <img src="assets/axistech-logo.png" alt="AxisTech" style={{ width: "132px", height: "auto", display: "block", mixBlendMode: "lighten" }} />
            </>}
            {V.collapsed && <>
              <img src="assets/axistech-mark.png" alt="AxisTech" title="Powered by AxisTech" style={{ width: "30px", height: "auto", display: "block", mixBlendMode: "lighten" }} />
            </>}
          </div>
        </aside>
        {!V.collapsed && <div data-r="scrim" onClick={V.toggleSide} />}
        <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
          <header data-r="header" style={{ height: "56px", flexShrink: "0", background: "linear-gradient(90deg,#07192F 0%,#0A2342 60%,#123456 100%)", borderBottom: "1px solid rgba(14,165,164,.45)", boxShadow: "0 1px 0 rgba(255,255,255,.03),0 6px 20px rgba(7,25,47,.12)", position: "relative", zIndex: "50", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px 0 20px", color: "#fff" }}>
            <button className="scp9" onClick={V.toggleSide} title="Toggle menu" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", color: "#E2E8F0" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round" }}><path d="M4 7h16M4 12h16M4 17h16" /></svg></button>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <HelpCenter portal="admin" ink="#0A2342" accent="#0B7F7E" tint="#E6F4F3" color="#cbd5e1" onContact={V.openSupport} />
              <button className="scpa" onClick={V.openSupport} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 14px", border: "1px solid rgba(255,255,255,.18)", borderRadius: "8px", background: "linear-gradient(180deg,rgba(255,255,255,.09),rgba(255,255,255,.03))", color: "#f1f5f9", boxShadow: "inset 0 1px 0 rgba(255,255,255,.08)", transition: "background .15s,border-color .15s,box-shadow .15s", fontSize: "14px", whiteSpace: "nowrap" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z" />
                  <path d="M12 8.5v7M8.5 12h7" />
                </svg>
                
        <span data-r="hide-sm">Create Support Ticket</span>
              </button>
              <div style={{ position: "relative" }}>
                <button className="scp9" onClick={V.toggleMenu} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "#fff", margin: "0", padding: "4px 6px", borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#1E293B", border: "1px solid rgba(255,255,255,.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#CBD5E1", flexShrink: "0" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM3.5 21a8.5 8.5 0 0 1 17 0z" /></svg></div>
                  <div data-r="hide-sm" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "3px" }}>
                    <div style={{ fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap" }}>{S(V.me?.name)}</div>
                    <div style={{ fontSize: "10px", fontWeight: "600", color: `${A(V.viewBadge?.fg)}`, background: `${A(V.viewBadge?.bg)}`, padding: "1px 8px", borderRadius: "999px", whiteSpace: "nowrap" }}>{S(V.viewBadge?.label)}</div>
                  </div>
                </button>
                {V.menuOpen && <>
                  <div style={{ position: "absolute", right: "0", top: "50px", width: "220px", background: "#fff", color: "#0f172a", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 16px 40px rgba(15,23,42,.16)", padding: "6px", zIndex: "40", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "10px 12px", borderBottom: "1px solid #f1f5f9", marginBottom: "4px" }}>
                      <div style={{ fontWeight: "600", fontSize: "14px" }}>{S(V.me?.name)}</div>
                      <div style={{ fontSize: "12px", color: "#475569" }}>{S(V.me?.email)}</div>
                    </div>
                    <button className="scpb" onClick={V.openProfile} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "9px 12px", borderRadius: "6px", textAlign: "left", cursor: "pointer", fontSize: "14px" }}>Profile settings</button>
                    <button className="scpb" onClick={V.openTickets} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "9px 12px", borderRadius: "6px", textAlign: "left", cursor: "pointer", fontSize: "14px" }}>My support tickets</button>
                    <button className="scpc" onClick={V.signOut} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "#b91c1c", margin: "0", padding: "9px 12px", borderRadius: "6px", textAlign: "left", cursor: "pointer", fontSize: "14px" }}>Sign out</button>
                  </div>
                </>}
              </div>
            </div>
          </header>
          <main data-r="main" style={{ flex: "1", overflowY: "auto", display: "flex", flexDirection: "column" }}>
            <div data-r="pad" style={{ flex: "1 0 auto", padding: "12px 32px 10px", display: "flex", flexDirection: "column" }}>
              {V.is?.home && <IsHome V={V} />}
              {V.is?.farms && <>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ flexShrink: "0", background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "12px 20px", minHeight: "0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px 14px", flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 auto" }}>
                      <h1 style={{ margin: "0", fontSize: "19px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.2", color: "#0F172A" }}>Farms</h1>
                      <p style={{ margin: "2px 0 0", color: "#475569", fontSize: "13px" }}>Onboard farms to the Producer Portal and manage their records</p>
                    </div>
                    <div style={{ display: "flex", flexShrink: "0", gap: "8px", alignItems: "center" }}>
                      <button className="scpn" onClick={V.openFarmModal} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <path d="M12 18.5 9 17l-6 3V6l6-3 6 3 6-3v7" />
                          <path d="M9 3v14" />
                          <path d="M15 6v5" />
                          <path d="M21 17.4c0 2.2-3 4.6-3 4.6s-3-2.4-3-4.6a3 3 0 0 1 6 0z" />
                          <circle cx="18" cy="17.4" r=".8" />
                        </svg>
                        Create Farm
                      </button>
                    </div>
                  </div>
                  <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                      <div style={{ display: "flex", gap: "10px", alignItems: "center", flex: "1", width: "100%", minWidth: "0" }}>
                        <div style={{ flex: "1", minWidth: "0", display: "flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 14px", border: "1px solid #E2E8F0", borderRadius: "8px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.03)" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}>
                            <circle cx="11" cy="11" r="7" />
                            <path d="m20 20-3.5-3.5" />
                          </svg>
                          <input value={V.farmQuery ?? ""} onChange={V.setFarmQuery} onKeyDown={V.mapKey} placeholder="Search farms by name, owner or zone" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", fontSize: "14px", background: "transparent" }} />
                        </div>
                        <div style={{ display: "flex", background: "#f1f5f9", borderRadius: "8px", padding: "3px", gap: "2px" }}>
                          <button onClick={V.setGrid} title="Grid" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "34px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", background: `${A(V.gridBtn?.bg)}`, color: `${A(V.gridBtn?.fg)}` }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2" }}>
                              <rect x="3" y="3" width="7" height="7" rx="1" />
                              <rect x="14" y="3" width="7" height="7" rx="1" />
                              <rect x="3" y="14" width="7" height="7" rx="1" />
                              <rect x="14" y="14" width="7" height="7" rx="1" />
                            </svg>
                          </button>
                          <button onClick={V.setList} title="List" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "34px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", background: `${A(V.listBtn?.bg)}`, color: `${A(V.listBtn?.fg)}` }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></svg></button>
                        </div>
                      </div>
                    </div>
                    {V.farmGrid && <>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: "18px" }}>
                        {L(V.farmsFiltered).map((f, i10) => <React.Fragment key={i10}>
                          <div className="scps" style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "18px", display: "flex", flexDirection: "column", transition: "box-shadow .2s,border-color .2s,transform .2s" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingBottom: "14px", borderBottom: "1px solid #f0f2f6" }}>
                              <span style={{ width: "38px", height: "36px", borderRadius: "10px", background: "#f0fdfa", color: "#0f766e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}>
                                  <path d="M12 18.5 9 17l-6 3V6l6-3 6 3 6-3v7" />
                                  <path d="M9 3v14" />
                                  <path d="M15 6v5" />
                                  <path d="M21 17.4c0 2.2-3 4.6-3 4.6s-3-2.4-3-4.6a3 3 0 0 1 6 0z" />
                                  <circle cx="18" cy="17.4" r=".8" />
                                </svg>
                              </span>
                              <div title={f?.name} style={{ flex: "1", minWidth: "0", fontWeight: "600", fontSize: "14.5px", lineHeight: "1.3", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(f?.name)}</div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "9px", padding: "14px 0 16px", fontSize: "14px", color: "#475569" }}>
                              <div style={{ display: "flex", alignItems: "flex-start", gap: "9px", color: "#334155" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                                  <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                                  <circle cx="12" cy="9.5" r="2.5" />
                                </svg>
                                <span style={{ lineHeight: "1.4", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden", minHeight: "2.8em" }}>{S(f?.location)}</span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "28px", padding: "0 12px", borderRadius: "999px", background: "#fff7ed", border: "1px solid #fed7aa", color: "#ea580c", fontSize: "13px" }}>
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                                    <circle cx="9" cy="8" r="3.5" />
                                    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
                                    <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8" />
                                    <path d="M18.5 14.2A6.5 6.5 0 0 1 21.5 20" />
                                  </svg>
                                  <b style={{ fontWeight: "700" }}>{S(f?.users)}</b>
                                  {S(f?.usersWord)}
                                </span>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "28px", padding: "0 12px", borderRadius: "999px", background: "#f5f3ff", border: "1px solid #ddd6fe", color: "#7c3aed", fontSize: "13px" }}>
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                                    <circle cx="12" cy="12" r="2" />
                                    <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" />
                                  </svg>
                                  <b style={{ fontWeight: "700" }}>{S(f?.devices)}</b>
                                  {S(f?.devicesWord)}
                                </span>
                              </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "auto" }}>
                              <button className="scpt scpu" onClick={f?.view} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", border: "1px solid #E2E8F0", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04)", transition: "background .15s,border-color .15s", color: "#0f172a", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", fontWeight: "500", fontSize: "14px" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                                  <circle cx="12" cy="12" r="3" />
                                </svg>
                                View
                              </button>
                              <button className="scpn scpu" onClick={f?.launch} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", background: "#0A2342", color: "#fff", borderRadius: "8px", boxShadow: "0 1px 2px rgba(15,118,110,.3),inset 0 1px 0 rgba(255,255,255,.12)", transition: "background .15s,transform .1s", display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", fontWeight: "500", fontSize: "14px", whiteSpace: "nowrap" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                </svg>
                                Launch
                              </button>
                            </div>
                          </div>
                        </React.Fragment>)}
                      </div>
                    </>}
                    {V.farmList && <>
                      <div style={{ border: "1px solid #E2E8F0", borderRadius: "12px", overflow: "auto" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 2fr .6fr .6fr 210px", minWidth: "820px", padding: "12px 20px", fontSize: "12px", fontWeight: "500", color: "#475569", background: "#fafbfc", borderBottom: "1px solid #EEF2F6", letterSpacing: ".01em" }}>
                          <span>Farm</span>
                          <span>Address</span>
                          <span>Users</span>
                          <span>Devices</span>
                          <span />
                        </div>
                        {L(V.farmsFiltered).map((f, i11) => <React.Fragment key={i11}>
                          <div className="scpi" style={{ display: "grid", gridTemplateColumns: "1.6fr 2fr .6fr .6fr 210px", minWidth: "820px", padding: "12px 20px", borderBottom: "1px solid #f1f5f9", alignItems: "center", transition: "background .12s" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                              <span style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#f0fdfa", color: "#0f766e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}>
                                  <path d="M12 18.5 9 17l-6 3V6l6-3 6 3 6-3v7" />
                                  <path d="M9 3v14" />
                                  <path d="M15 6v5" />
                                  <path d="M21 17.4c0 2.2-3 4.6-3 4.6s-3-2.4-3-4.6a3 3 0 0 1 6 0z" />
                                  <circle cx="18" cy="17.4" r=".8" />
                                </svg>
                              </span>
                              <span style={{ fontWeight: "500" }}>{S(f?.name)}</span>
                            </div>
                            <span style={{ color: "#475569", fontSize: "13px", paddingRight: "12px" }}>{S(f?.location)}</span>
                            <span>{S(f?.users)}</span>
                            <span>{S(f?.devices)}</span>
                            <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                              <button className="scpv scpu" onClick={f?.view} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 14px", border: "1px solid #E2E8F0", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04)", transition: "background .15s,border-color .15s", borderRadius: "8px", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                                  <circle cx="12" cy="12" r="3" />
                                </svg>
                                View
                              </button>
                              <button className="scpn scpu" onClick={f?.launch} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 14px", background: "#0A2342", color: "#fff", borderRadius: "8px", boxShadow: "0 1px 2px rgba(15,118,110,.3),inset 0 1px 0 rgba(255,255,255,.12)", transition: "background .15s,transform .1s", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", whiteSpace: "nowrap" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                </svg>
                                Launch
                              </button>
                            </div>
                          </div>
                        </React.Fragment>)}
                      </div>
                    </>}
                  </div>
                </div>
              </>}
              {V.is?.farmDetail && <>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "16px 20px", display: "flex", alignItems: "center", gap: "14px" }}>
                    <button className="scpw" onClick={V.nav?.farms?.go} title="Back to farms" style={{ appearance: "none", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #E2E8F0", background: "#f8fafc", color: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M19 12H5M12 19l-7-7 7-7" /></svg></button>
                    <div style={{ flex: "1", minWidth: "0" }}>
                      <div style={{ fontSize: "17px", fontWeight: "600" }}>{S(V.farm?.name)}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", marginTop: "3px" }}>
                        <button className="scpx" onClick={V.nav?.farms?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", color: "#475569" }}>Farms</button>
                        <span style={{ color: "#94a3b8" }}>›</span>
                        <span style={{ fontWeight: "600" }}>Details</span>
                      </div>
                    </div>
                    <span style={{ width: "46px", height: "46px", borderRadius: "12px", background: "#f0fdfa", color: "#0f766e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M12 18.5 9 17l-6 3V6l6-3 6 3 6-3v7" />
                        <path d="M9 3v14" />
                        <path d="M15 6v5" />
                        <path d="M21 17.4c0 2.2-3 4.6-3 4.6s-3-2.4-3-4.6a3 3 0 0 1 6 0z" />
                        <circle cx="18" cy="17.4" r=".8" />
                      </svg>
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "stretch" }}>
                    <div style={{ flex: "2 1 440px", minWidth: "0", background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "minmax(90px,140px) minmax(0,1fr)", gap: "16px", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid #f0f2f6", minHeight: "56px" }}>
                        <span style={{ fontSize: "14px", color: "#475569" }}>Description</span>
                        {V.editingFarm && <>
                          <input className="scpy" type="text" value={V.draft?.desc ?? ""} onChange={V.setDraft?.desc} style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 12px", fontSize: "14px", fontWeight: "400", width: "100%", height: "36px" }} />
                        </>}
                        {V.notEditingFarm && <>
                          <span style={{ fontSize: "14px", color: "#0f172a", overflowWrap: "anywhere" }}>{S(V.farm?.desc)}</span>
                        </>}
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "minmax(90px,140px) minmax(0,1fr)", gap: "16px", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid #f0f2f6", minHeight: "56px" }}>
                        <span style={{ fontSize: "14px", color: "#475569" }}>Address</span>
                        {V.editingFarm && <>
                          <input className="scpy" type="text" value={V.draft?.location ?? ""} onChange={V.setDraft?.location} style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 12px", fontSize: "14px", fontWeight: "400", width: "100%", height: "36px" }} />
                        </>}
                        {V.notEditingFarm && <>
                          <span style={{ fontSize: "14px", color: "#0f172a", overflowWrap: "anywhere" }}>{S(V.farm?.location)}</span>
                        </>}
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "minmax(90px,140px) minmax(0,1fr)", gap: "16px", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid #f0f2f6", minHeight: "56px" }}>
                        <span style={{ fontSize: "14px", color: "#475569" }}>Zone</span>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#0f766e", fontWeight: "500" }}>{S(V.draftZone)}</span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "minmax(90px,140px) minmax(0,1fr)", gap: "16px", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid #f0f2f6", minHeight: "56px" }}>
                        <span style={{ fontSize: "14px", color: "#475569" }}>Phone number</span>
                        {V.editingFarm && <>
                          <input className="scpy" type="tel" value={V.draft?.phone ?? ""} onChange={V.setDraft?.phone} style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 12px", fontSize: "14px", fontWeight: "400", width: "100%", height: "36px" }} />
                        </>}
                        {V.notEditingFarm && <>
                          <span style={{ fontSize: "14px", color: "#0f172a", overflowWrap: "anywhere" }}>{S(V.farm?.phone)}</span>
                        </>}
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "minmax(90px,140px) minmax(0,1fr)", gap: "16px", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid #f0f2f6", minHeight: "56px" }}>
                        <span style={{ fontSize: "14px", color: "#475569" }}>Owner name</span>
                        {V.editingFarm && <>
                          <input className="scpy" type="text" value={V.draft?.owner ?? ""} onChange={V.setDraft?.owner} style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 12px", fontSize: "14px", fontWeight: "400", width: "100%", height: "36px" }} />
                        </>}
                        {V.notEditingFarm && <>
                          <span style={{ fontSize: "14px", color: "#0f172a", overflowWrap: "anywhere" }}>{S(V.farm?.owner)}</span>
                        </>}
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "minmax(90px,140px) minmax(0,1fr)", gap: "16px", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid #f0f2f6", minHeight: "56px" }}>
                        <span style={{ fontSize: "14px", color: "#475569" }}>Email address</span>
                        {V.editingFarm && <>
                          <input className="scpy" type="email" value={V.draft?.email ?? ""} onChange={V.setDraft?.email} style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 12px", fontSize: "14px", fontWeight: "400", width: "100%", height: "36px" }} />
                        </>}
                        {V.notEditingFarm && <>
                          <span style={{ fontSize: "14px", color: "#0f172a", overflowWrap: "anywhere" }}>{S(V.farm?.email)}</span>
                        </>}
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "minmax(90px,140px) minmax(0,1fr)", gap: "16px", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid #f0f2f6", minHeight: "56px" }}>
                        <span style={{ fontSize: "14px", color: "#475569" }}>ABN number</span>
                        {V.editingFarm && <>
                          <input className="scpy" type="text" value={V.draft?.abn ?? ""} onChange={V.setDraft?.abn} style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 12px", fontSize: "14px", fontWeight: "400", width: "100%", height: "36px" }} />
                        </>}
                        {V.notEditingFarm && <>
                          <span style={{ fontSize: "14px", color: "#0f172a", overflowWrap: "anywhere" }}>{S(V.farm?.abn)}</span>
                        </>}
                      </div>
                      <div style={{ display: "flex", gap: "10px", padding: "16px 20px", marginTop: "auto" }}>
                        {V.notEditingFarm && <>
                          <button className="scpz" onClick={V.editFarm} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 18px", border: "1px solid #fcd9a8", background: "#fff", color: "#c2410c", borderRadius: "8px", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "500" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 20h4L19 9l-4-4L4 16z" /></svg>
                            Edit
                          </button>
                          <button className="scpc" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 18px", border: "1px solid #fecaca", background: "#fff", color: "#dc2626", borderRadius: "8px", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "500" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /></svg>
                            Delete
                          </button>
                        </>}
                        {V.editingFarm && <>
                          <button className="scpn scpu" onClick={V.saveFarm} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 20px", background: "#0A2342", color: "#fff", borderRadius: "8px", boxShadow: "0 1px 2px rgba(15,118,110,.3),inset 0 1px 0 rgba(255,255,255,.12)", transition: "background .15s,transform .1s", fontSize: "14px", fontWeight: "500" }}>Save changes</button>
                          <button className="scpv scpu" onClick={V.cancelFarm} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 18px", border: "1px solid #E2E8F0", background: "#fff", borderRadius: "8px", transition: "background .15s,border-color .15s", fontSize: "14px" }}>Cancel</button>
                        </>}
                      </div>
                    </div>
                    <div style={{ flex: "1 1 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
                      <div style={{ flex: "1", background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "14px" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" style={{ strokeWidth: "1.8", strokeLinecap: "round" }}>
                            <circle cx="9" cy="8" r="3.5" />
                            <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
                            <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8" />
                            <path d="M18.5 14.2A6.5 6.5 0 0 1 21.5 20" />
                          </svg>
                          {S(V.farm?.usersTitle)}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          {L(V.farmUserCounts).map((x, i12) => <React.Fragment key={i12}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", padding: "10px 0", borderTop: "1px solid #f1f5f9" }}>
                              <span style={{ fontSize: "14px", color: "#334155" }}>{S(x?.label)}</span>
                              <span style={{ fontSize: "15px", fontWeight: "600" }}>{S(x?.n)}</span>
                            </div>
                          </React.Fragment>)}
                        </div>
                        <button className="scpn scpu" onClick={V.manageUsers} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", marginTop: "auto", cursor: "pointer", height: "40px", background: "#0A2342", color: "#fff", borderRadius: "8px", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s,transform .1s", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontWeight: "600" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
                          </svg>
                          Manage
                        </button>
                      </div>
                      <div style={{ flex: "1", background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "14px" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" style={{ strokeWidth: "1.8", strokeLinecap: "round" }}>
                            <circle cx="12" cy="12" r="2" />
                            <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" />
                          </svg>
                          {S(V.farm?.devicesTitle)}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          {L(V.farmDevices).map((x, i13) => <React.Fragment key={i13}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", padding: "10px 0", borderTop: "1px solid #f1f5f9" }}>
                              <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "500", color: "#0f172a", minWidth: "0" }}>
                                <span style={{ display: "inline-block", width: "30px", height: "30px", borderRadius: "8px", flexShrink: "0", backgroundColor: "#f1f5f9", backgroundImage: `url(${A(x?.img)})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                                <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(x?.name)}</span>
                              </span>
                              <span style={{ flexShrink: "0", fontSize: "12px", fontWeight: "600", padding: "3px 10px", borderRadius: "999px", background: "#ecfeff", border: "1px solid #a5f3fc", color: "#0e7490" }}>{S(x?.provider)}</span>
                            </div>
                          </React.Fragment>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>}
              {V.is?.users && <IsUsers V={V} />}
              {V.is?.devices && <IsDevices V={V} />}
              {V.is?.providers && <>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ flex: "1 1 auto" }}>
                    <h1 style={{ margin: "0", fontSize: "19px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.2", color: "#0F172A" }}>Data Providers</h1>
                    <p style={{ margin: "2px 0 0", color: "#475569", fontSize: "13px" }}>Connect and manage your data sources</p>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 280px", minWidth: "0", display: "flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 14px", border: "1px solid #E2E8F0", borderRadius: "10px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.03)" }}>
                      <span style={{ color: "#94a3b8", display: "flex" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <circle cx="11" cy="11" r="7" />
                          <path d="m20 20-3.5-3.5" />
                        </svg>
                      </span>
                      <input value={V.provQ ?? ""} onChange={V.setProvQ} placeholder="Search providers…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "14px", background: "transparent" }} />
                    </div>
                    <button className="scpi" onClick={V.toggleProvSort} title={V.provSortTitle} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #E2E8F0", background: "#fff", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .15s" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", transform: `${A(V.provSortRot)}` }}><path d="M4 7h9M4 12h6M4 17h3M17 5v14M14 16l3 3 3-3" /></svg></button>
                    <div style={{ display: "inline-flex", gap: "4px", padding: "4px", borderRadius: "10px", background: "#F1F5F9" }}>
                      {L(V.provTabs).map((t, i36) => <React.Fragment key={i36}>
                        <button onClick={t?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "32px", padding: "0 14px", borderRadius: "8px", fontSize: "14px", fontWeight: `${A(t?.fw)}`, whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "6px", color: `${A(t?.fg)}`, background: `${A(t?.bg)}`, boxShadow: `${A(t?.sh)}`, transition: "background .15s,color .15s" }}>{S(t?.label)}</button>
                      </React.Fragment>)}
                    </div>
                    <div style={{ display: "inline-flex", border: "1px solid #E2E8F0", borderRadius: "10px", overflow: "hidden", background: "#fff" }}>
                      <button onClick={V.provGridGo} title="Grid" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "44px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", background: `${A(V.provGridBtn?.bg)}`, color: `${A(V.provGridBtn?.fg)}` }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <rect x="3" y="3" width="7" height="7" rx="1.5" />
                          <rect x="14" y="3" width="7" height="7" rx="1.5" />
                          <rect x="3" y="14" width="7" height="7" rx="1.5" />
                          <rect x="14" y="14" width="7" height="7" rx="1.5" />
                        </svg>
                      </button>
                      <button onClick={V.provListGo} title="List" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "44px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", background: `${A(V.provListBtn?.bg)}`, color: `${A(V.provListBtn?.fg)}` }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></svg></button>
                    </div>
                  </div>
                  {V.provGrid && <>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "16px" }}>
                      {L(V.provCards).map((c, i37) => <React.Fragment key={i37}>
                        <div className="scp15" style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", transition: "box-shadow .2s,transform .2s" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px" }}>
                            <span style={{ position: "relative", width: "112px", height: "52px", borderRadius: "11px", border: "1px solid #EEF2F6", background: `${A(c?.lbg)}`, color: `${A(c?.lfg)}`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "12px", letterSpacing: "-.02em", flexShrink: "0", overflow: "hidden" }}>
                              {S(c?.mono)}
                              <span style={{ position: "absolute", inset: "5px", backgroundImage: `${A(c?.bgimg)}`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                            </span>
                            {c?.on && <>
                              <span style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".06em", padding: "3px 9px", borderRadius: "999px", border: `1px solid ${A(c?.cbd)}`, background: `${A(c?.cbg)}`, color: `${A(c?.cfg)}`, whiteSpace: "nowrap" }}>{S(c?.status)}</span>
                            </>}
                          </div>
                          <div style={{ fontWeight: "600", fontSize: "18px", lineHeight: "1.3" }}>{S(c?.name)}</div>
                          <div style={{ fontSize: "12px", color: "#475569", lineHeight: "1.5", display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical", overflow: "hidden", minHeight: "4.5em" }}>{S(c?.desc)}</div>
                          <button className="scpn scpu" onClick={c?.open} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "7px", whiteSpace: "nowrap", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s,transform .1s", width: "100%", marginTop: "auto" }}>
                            {c?.on && <>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
                              </svg>
                            </>}
                            {c?.off && <>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                                <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
                                <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
                              </svg>
                            </>}
                            {S(c?.action)}
                          </button>
                        </div>
                      </React.Fragment>)}
                      {V.showBrowseMore && <>
                        <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", borderColor: "#99f6e4", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                          <span style={{ width: "44px", height: "44px", borderRadius: "11px", background: "#f0fdfa", color: "#0f766e", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <circle cx="12" cy="12" r="9" />
                              <path d="m15.5 8.5-2 5-5 2 2-5z" />
                            </svg>
                          </span>
                          <div style={{ fontWeight: "600", fontSize: "18px" }}>Browse more providers</div>
                          <div style={{ fontSize: "12px", color: "#475569", lineHeight: "1.5", minHeight: "4.5em" }}>Browse the full catalogue and connect more data sources.</div>
                          <button className="scp18" onClick={V.goBrowse} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "36px", borderRadius: "8px", background: "#ccfbf1", color: "#0f766e", fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "auto", transition: "background .15s" }}>
                            Browse
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M7 17 17 7M8 7h9v9" /></svg>
                          </button>
                        </div>
                      </>}
                    </div>
                  </>}
                  {V.provList && <>
                    <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", overflow: "auto" }}>
                      {L(V.provCards).map((c, i38) => <React.Fragment key={i38}>
                        <div className="scpi" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", borderBottom: "1px solid #f1f5f9", minWidth: "640px", transition: "background .12s" }}>
                          <span style={{ position: "relative", width: "112px", height: "52px", borderRadius: "11px", border: "1px solid #EEF2F6", background: `${A(c?.lbg)}`, color: `${A(c?.lfg)}`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "12px", letterSpacing: "-.02em", flexShrink: "0", overflow: "hidden" }}>
                            {S(c?.mono)}
                            <span style={{ position: "absolute", inset: "5px", backgroundImage: `${A(c?.bgimg)}`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                          </span>
                          <div style={{ flex: "1", minWidth: "0" }}>
                            <div style={{ fontWeight: "600", fontSize: "14px" }}>{S(c?.name)}</div>
                            <div style={{ fontSize: "12px", color: "#475569", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(c?.desc)}</div>
                          </div>
                          {c?.on && <>
                            <span style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".06em", padding: "3px 9px", borderRadius: "999px", border: `1px solid ${A(c?.cbd)}`, background: `${A(c?.cbg)}`, color: `${A(c?.cfg)}`, whiteSpace: "nowrap" }}>{S(c?.status)}</span>
                          </>}
                          <button className="scpn" onClick={c?.open} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "7px", whiteSpace: "nowrap", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s,transform .1s", height: "34px", minWidth: "104px" }}>{S(c?.action)}</button>
                        </div>
                      </React.Fragment>)}
                    </div>
                  </>}
                  {V.provEmpty && <>
                    <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "48px 20px", textAlign: "center", color: "#475569", fontSize: "14px" }}>No providers match “{S(V.provQ)}”.</div>
                  </>}
                  {V.provPaged && <>
                    <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "12px", color: "#475569" }}>
                        {"Showing "}
                        <b style={{ color: "#0f172a", fontWeight: "600" }}>{S(V.provRange)}</b>
                        {" of "}{S(V.provTotal)}{" providers"}
                      </span>
                      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                        <button className="scpb" onClick={V.provPrev} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: `${A(V.provPrevFg)}` }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m15 6-6 6 6 6" /></svg></button>
                        {L(V.provPages).map((pg, i39) => <React.Fragment key={i39}>
                          <button className="scpb" onClick={pg?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "32px", height: "32px", borderRadius: "50%", fontSize: "13px", fontWeight: "500", textAlign: "center", background: `${A(pg?.bg)}`, color: `${A(pg?.fg)}`, transition: "background .12s" }}>{S(pg?.n)}</button>
                        </React.Fragment>)}
                        <button className="scpb" onClick={V.provNext} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: `${A(V.provNextFg)}` }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m9 6 6 6-6 6" /></svg></button>
                      </div>
                    </div>
                  </>}
                </div>
              </>}
              {V.is?.sharing && <>
                <h1 style={{ margin: "0", fontSize: "19px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.2", color: "#0F172A" }}>Data Sharing</h1>
                <p style={{ margin: "6px 0 24px", color: "#475569", fontSize: "14px", fontWeight: "400" }}>Choose which farms share anonymous data to the regional map and benchmarking. Shared data appears by zone only.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {L(V.sharing).map((s, i40) => <React.Fragment key={i40}>
                    <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "16px 20px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                      <div style={{ flex: "1", minWidth: "200px" }}>
                        <div style={{ fontWeight: "600" }}>{S(s?.name)}</div>
                        <div style={{ fontSize: "12px", color: "#475569", marginTop: "2px" }}>{S(s?.zone)}</div>
                      </div>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {L(s?.sets).map((d, i41) => <React.Fragment key={i41}>
                          <button onClick={d?.toggle} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: "7px", height: "30px", padding: "0 12px", borderRadius: "999px", border: `1px solid ${A(d?.bd)}`, background: `${A(d?.bg)}`, color: `${A(d?.fg)}`, fontSize: "12px", opacity: `${A(s?.op)}` }}>
                            <span style={{ width: "13px", height: "13px", borderRadius: "3px", border: `1.5px solid ${A(d?.bd)}`, background: `${A(d?.box)}` }} />
                            {S(d?.label)}
                          </button>
                        </React.Fragment>)}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "13px", color: "#475569" }}>Share to regional map</span>
                        <button onClick={s?.toggle} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", width: "40px", height: "22px", borderRadius: "999px", background: `${A(s?.bg)}`, position: "relative" }}><span style={{ position: "absolute", top: "2px", left: `${A(s?.knob)}`, width: "18px", height: "18px", borderRadius: "50%", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,.25)", transition: "left .15s" }} /></button>
                      </div>
                    </div>
                  </React.Fragment>)}
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "18px" }}><button className="scpn scpu" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "40px", padding: "0 22px", background: "#0A2342", color: "#fff", borderRadius: "8px", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s,transform .1s", fontWeight: "500", display: "flex", alignItems: "center" }}>Save changes</button></div>
              </>}
              {V.is?.reports && <IsReports V={V} />}
              {V.is?.alerts && <IsAlerts V={V} />}
              {V.is?.alertTpl && <>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px 14px", flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 auto" }}>
                      <h1 style={{ margin: "0", fontSize: "19px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.2", color: "#0F172A" }}>Alert Templates</h1>
                      <p style={{ margin: "2px 0 0", color: "#475569", fontSize: "13px" }}>Create and manage reusable policy templates for device alert rules.</p>
                    </div>
                    <div style={{ display: "flex", flex: "0 0 auto", gap: "8px", alignItems: "center" }}>
                      <div style={{ flex: "0 0 auto", width: "200px", display: "flex", alignItems: "center", gap: "8px", height: "36px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", background: "#fff" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}>
                          <circle cx="11" cy="11" r="7" />
                          <path d="m20 20-3.5-3.5" />
                        </svg>
                        <input value={V.at?.q ?? ""} onChange={V.at?.setQ} placeholder="Search templates by name or type…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13px", background: "transparent" }} />
                      </div>
                      <div style={{ flexShrink: "0", display: "flex", alignItems: "center", gap: "5px", height: "36px", padding: "0 8px 0 9px", border: "1px solid #E2E8F0", borderRadius: "8px", background: "#F8FAFC", color: "#334155" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                          <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
                          <path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
                        </svg>
                        <select value={V.at?.src ?? ""} onChange={V.at?.setSrc} style={{ border: "0", outline: "0", background: "transparent", font: "inherit", fontSize: "13px", color: "#0f172a", cursor: "pointer", paddingRight: "2px" }}>
                          <option value="">All sources</option>
                          {L(V.at?.sources).map((o, i75) => <React.Fragment key={i75}>
                            <option value={o ?? ""}>{S(o)}</option>
                          </React.Fragment>)}
                        </select>
                      </div>
                      <button className="scpn" onClick={V.at?.openNew} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", flexShrink: "0", height: "36px", padding: "0 16px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", boxShadow: "0 1px 2px rgba(15,23,42,.2)" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}><path d="M12 5v14M5 12h14" /></svg>
                        New Template
                      </button>
                    </div>
                  </div>
                  <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", overflow: "auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "minmax(200px,1.5fr) minmax(150px,1fr) minmax(260px,3fr) 120px 96px 72px", gap: "12px", minWidth: "980px", padding: "10px 16px", fontSize: "11px", fontWeight: "600", letterSpacing: ".05em", textTransform: "uppercase", color: "#94a3b8", background: "#fafbfc", borderBottom: "1px solid #EEF2F6" }}>
                      <span>Name</span>
                      <span>Reading</span>
                      <span>Comparisons</span>
                      <span>Source</span>
                      <span>Created</span>
                      <span style={{ textAlign: "right" }}>Actions</span>
                    </div>
                    {L(V.at?.rows).map((t, i76) => <React.Fragment key={i76}>
                      <div className="scpi" style={{ display: "grid", gridTemplateColumns: "minmax(200px,1.5fr) minmax(150px,1fr) minmax(260px,3fr) 120px 96px 72px", gap: "12px", minWidth: "980px", padding: "9px 16px", borderBottom: "1px solid #f1f5f9", alignItems: "center", fontSize: "13px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "0" }}>
                          <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: "#EEF2F7", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                              <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                              <path d="M14 3v5h5M9 13h6M9 17h6" />
                            </svg>
                          </span>
                          <span style={{ fontWeight: "500" }}>{S(t?.name)}</span>
                        </span>
                        <span style={{ color: "#334155", fontSize: "12px" }}>{S(t?.reading)}</span>
                        <span style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                          {L(t?.cmps).map((c, i77) => <React.Fragment key={i77}>
                            <span style={{ fontSize: "11px", fontWeight: "500", padding: "2px 8px", borderRadius: "999px", background: "#E8EEF5", color: "#4A6A8A", whiteSpace: "nowrap" }}>{S(c)}</span>
                          </React.Fragment>)}
                        </span>
                        <span style={{ color: "#334155", fontSize: "12px" }}>{S(t?.source)}</span>
                        <span style={{ color: "#475569", fontSize: "12px" }}>{S(t?.created)}</span>
                        <span style={{ display: "flex", justifyContent: "flex-end", gap: "2px" }}>
                          <button className="scp1h" onClick={t?.edit} title="Edit" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", background: "transparent", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 20h4L19 9l-4-4L4 16z" /></svg></button>
                          <button className="scpc" onClick={t?.del} title="Delete" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", background: "transparent", color: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /></svg></button>
                        </span>
                      </div>
                    </React.Fragment>)}
                    {V.at?.empty && <>
                      <div style={{ padding: "40px 20px", textAlign: "center", color: "#475569", fontSize: "14px" }}>No templates match your search.</div>
                    </>}
                  </div>
                </div>
              </>}
              {V.at?.modal && <>
                <div onClick={V.at?.close} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "50", overflow: "hidden" }}>
                  <div onClick={V.stop} style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 24px 64px rgba(15,23,42,.24)", width: "100%", maxWidth: "720px", display: "flex", flexDirection: "column", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
                    <div style={{ padding: "24px 28px 8px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                      <div>
                        <div style={{ fontWeight: "600", fontSize: "20px", letterSpacing: "-.015em", color: "#0F172A" }}>{S(V.at?.title)}</div>
                        <div style={{ fontSize: "14px", color: "#475569", marginTop: "4px" }}>Define a reusable alert rule that farms can apply to their devices.</div>
                      </div>
                      <button className="scp2" onClick={V.at?.close} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
                    </div>
                    <div style={{ padding: "16px 28px 28px", display: "flex", flexDirection: "column", gap: "32px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>Template details</span>
                          <span style={{ fontSize: "13px", color: "#475569" }}>Name the template and choose where its readings come from.</span>
                        </div>
                        <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155", minWidth: "0" }}>
                          <span>
                            {"Name "}
                            <span style={{ color: "#DC2626" }}>*</span>
                          </span>
                          <input className="scpy" value={V.at?.d?.name ?? ""} onChange={V.at?.set?.name} placeholder="e.g. High Temperature Alert" style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "0 12px", font: "inherit", fontSize: "14px", outline: "0", background: "#fff", color: "#0F172A", width: "100%", boxSizing: "border-box", transition: "border-color .15s,box-shadow .15s" }} />
                        </label>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "16px" }}>
                          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155", minWidth: "0" }}>
                            <span>
                              {"Source "}
                              <span style={{ color: "#DC2626" }}>*</span>
                            </span>
                            <select className="scpy" value={V.at?.d?.source ?? ""} onChange={V.at?.set?.source} style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "0 12px", font: "inherit", fontSize: "14px", outline: "0", background: "#fff", color: "#0F172A", width: "100%", boxSizing: "border-box", transition: "border-color .15s,box-shadow .15s", padding: "0 10px", cursor: "pointer" }}>
                              {L(V.at?.sources).map((o, i78) => <React.Fragment key={i78}>
                                <option value={o ?? ""}>{S(o)}</option>
                              </React.Fragment>)}
                            </select>
                          </label>
                          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155", minWidth: "0" }}>
                            <span>
                              {"Reading "}
                              <span style={{ color: "#DC2626" }}>*</span>
                            </span>
                            <input className="scpy" value={V.at?.d?.key ?? ""} onChange={V.at?.set?.key} placeholder="e.g. temperature_avg" style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "0 12px", font: "inherit", fontSize: "14px", outline: "0", background: "#fff", color: "#0F172A", width: "100%", boxSizing: "border-box", transition: "border-color .15s,box-shadow .15s", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "13px" }} />
                          </label>
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "12px" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>
                              {"Alert condition "}
                              <span style={{ color: "#DC2626" }}>*</span>
                            </span>
                            <span style={{ fontSize: "13px", color: "#475569" }}>The comparisons a policy built from this template may choose between.</span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: "0" }}>
                            <span style={{ fontSize: "12px", color: "#475569" }}>{S(V.at?.cmpCount)}</span>
                            {V.at?.canAll && <>
                              <button className="scp1i" onClick={V.at?.selectAll} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0 8px", height: "28px", borderRadius: "6px", cursor: "pointer", fontSize: "13px", fontWeight: "500", color: "#0B7F7E" }}>{S(V.at?.allLabel)}</button>
                            </>}
                          </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: "8px" }}>
                          {L(V.at?.cmpOpts).map((o, i79) => <React.Fragment key={i79}>
                            <button className="scp1j" onClick={o?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", padding: "10px 12px", borderRadius: "10px", border: `1px solid ${A(o?.bd)}`, background: `${A(o?.bg)}`, boxShadow: `${A(o?.sh)}`, display: "flex", alignItems: "center", gap: "10px", transition: "border-color .15s,background .15s" }}>
                              <span style={{ minWidth: "30px", height: "24px", padding: "0 6px", borderRadius: "6px", background: `${A(o?.symBg)}`, color: `${A(o?.symFg)}`, fontFamily: "ui-monospace,Menlo,monospace", fontSize: "12px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>{S(o?.sym)}</span>
                              <span style={{ flex: "1", minWidth: "0", fontSize: "13px", fontWeight: `${A(o?.fw)}`, color: `${A(o?.fg)}`, lineHeight: "1.3" }}>{S(o?.label)}</span>
                              <span style={{ width: "16px", height: "16px", borderRadius: `${A(o?.shape)}`, border: `1.5px solid ${A(o?.cbd)}`, background: `${A(o?.cbg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" style={{ strokeWidth: "3.4", strokeLinecap: "round", strokeLinejoin: "round", opacity: `${A(o?.chk)}` }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                            </button>
                          </React.Fragment>)}
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>Template behaviour</span>
                          <span style={{ fontSize: "13px", color: "#475569" }}>Set a starting value and decide whether users can change it.</span>
                        </div>
                        <div style={{ background: "#F8FAFC", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,2fr) minmax(0,1fr)", gap: "16px" }}>
                            <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155", minWidth: "0" }}>
                              <span>{"Default value "}{S(V.at?.defTag)}</span>
                              <input className="scpy" value={V.at?.d?.def ?? ""} onChange={V.at?.set?.def} placeholder="e.g. 30" style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "0 12px", font: "inherit", fontSize: "14px", outline: "0", background: "#fff", color: "#0F172A", width: "100%", boxSizing: "border-box", transition: "border-color .15s,box-shadow .15s" }} />
                            </label>
                            <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155", minWidth: "0" }}>
                              <span>
                                {"Unit "}
                                <span style={{ fontWeight: "400", color: "#94A3B8" }}>Optional</span>
                              </span>
                              <input className="scpy" value={V.at?.d?.unit ?? ""} onChange={V.at?.set?.unit} placeholder="°C, mm, %" style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "0 12px", font: "inherit", fontSize: "14px", outline: "0", background: "#fff", color: "#0F172A", width: "100%", boxSizing: "border-box", transition: "border-color .15s,box-shadow .15s" }} />
                            </label>
                          </div>
                          <button onClick={V.at?.toggleLock} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", padding: "12px 14px", borderRadius: "10px", border: `1px solid ${A(V.at?.lockBd)}`, background: "#fff", display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ width: "32px", height: "32px", borderRadius: "8px", background: `${A(V.at?.lockIconBg)}`, color: `${A(V.at?.lockIconFg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                                <rect x="5" y="11" width="14" height="10" rx="2" />
                                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                              </svg>
                            </span>
                            <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                              <span style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A" }}>Locked template</span>
                              <span style={{ fontSize: "12px", color: "#475569", lineHeight: "1.45" }}>Forces the default value and a single operator. Users cannot override them.</span>
                            </span>
                            <span style={{ width: "36px", height: "20px", borderRadius: "999px", background: `${A(V.at?.lockTrack)}`, position: "relative", flexShrink: "0", transition: "background .15s" }}><span style={{ position: "absolute", top: "2px", left: `${A(V.at?.lockKnob)}`, width: "16px", height: "16px", borderRadius: "50%", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.25)", transition: "left .15s" }} /></span>
                          </button>
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "12px" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>Validation rules</span>
                            <span style={{ fontSize: "13px", color: "#475569" }}>Constrain the value users can enter when applying this template.</span>
                          </div>
                          <div style={{ position: "relative", flexShrink: "0" }}>
                            <button className="scp11" onClick={V.at?.toggleRuleMenu} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "32px", padding: "0 12px", borderRadius: "8px", border: "1px solid #E2E8F0", background: "#fff", color: "#0F172A", fontSize: "13px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round" }}><path d="M12 5v14M5 12h14" /></svg>
                              Add rule
                            </button>
                            {V.at?.ruleMenu && <>
                              <div style={{ position: "absolute", right: "0", top: "38px", zIndex: "5", width: "260px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 12px 32px rgba(15,23,42,.14)", padding: "6px", display: "flex", flexDirection: "column", gap: "2px" }}>
                                {L(V.at?.ruleOpts).map((r, i80) => <React.Fragment key={i80}>
                                  <button className="scp11" onClick={r?.add} disabled={r?.used} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: `${A(r?.cur)}`, textAlign: "left", padding: "8px 10px", borderRadius: "8px", background: "transparent", display: "flex", flexDirection: "column", gap: "1px", opacity: `${A(r?.op)}` }}>
                                    <span style={{ fontSize: "13px", fontWeight: "500", color: "#0F172A" }}>{S(r?.label)}</span>
                                    <span style={{ fontSize: "12px", color: "#475569" }}>{S(r?.hint)}</span>
                                  </button>
                                </React.Fragment>)}
                              </div>
                            </>}
                          </div>
                        </div>
                        {V.at?.noRules && <>
                          <div style={{ border: "1.5px dashed #E2E8F0", borderRadius: "12px", padding: "20px", textAlign: "center", fontSize: "13px", color: "#475569" }}>No validation rules yet. Add a rule to limit the values users can pick.</div>
                        </>}
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          {L(V.at?.rules).map((r, i81) => <React.Fragment key={i81}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 8px 8px 12px", border: "1px solid #E2E8F0", borderRadius: "10px", background: "#fff" }}>
                              <span style={{ fontSize: "12px", fontWeight: "600", padding: "3px 10px", borderRadius: "999px", background: "#EFF6FF", color: "#0B7F7E", whiteSpace: "nowrap" }}>{S(r?.label)}</span>
                              <span style={{ flex: "1", minWidth: "0", fontSize: "13px", color: "#475569" }}>{S(r?.hint)}</span>
                              {r?.hasVal && <>
                                <input className="scpy" value={r?.value ?? ""} onChange={r?.setValue} placeholder={r?.ph} style={{ height: "32px", width: "160px", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "0 10px", font: "inherit", fontSize: "13px", outline: "0" }} />
                              </>}
                              <button className="scp1k" onClick={r?.remove} title="Remove rule" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "28px", height: "28px", borderRadius: "6px", color: "#94A3B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
                            </div>
                          </React.Fragment>)}
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: "16px 28px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                      <button className="scp11" onClick={V.at?.close} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", border: "1px solid #E2E8F0", background: "#fff", color: "#0F172A", borderRadius: "8px", fontSize: "14px", fontWeight: "500" }}>Cancel</button>
                      <button onClick={V.at?.save} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: `${A(V.at?.saveCur)}`, height: "36px", padding: "0 16px", background: `${A(V.at?.saveBg)}`, color: "#fff", borderRadius: "8px", fontSize: "14px", fontWeight: "600" }}>{S(V.at?.saveLabel)}</button>
                    </div>
                  </div>
                </div>
              </>}
              {V.is?.support && <>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", height: "calc(100vh - 128px)", minHeight: "420px" }}>
                  <div style={{ flexShrink: "0", background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "8px 16px", minHeight: "0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px 14px", flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 auto" }}>
                      <h1 style={{ margin: "0", fontSize: "17px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.2", color: "#0F172A" }}>Support Tickets</h1>
                      <p style={{ margin: "1px 0 0", color: "#475569", fontSize: "12px" }}>Tickets raised by producers. Resolve them here or forward to AxisTech.</p>
                    </div>
                    <div style={{ display: "flex", flexShrink: "0", gap: "8px", alignItems: "center" }}>
                      <select className="scpy" value={V.supFarm ?? ""} onChange={V.setSupFarm} style={{ height: "32px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", padding: "0 10px", font: "inherit", fontSize: "12.5px", background: "#fff", color: "#0f172a", cursor: "pointer" }}>
                        <option value="">All farms</option>
                        {L(V.farms).map((f, i82) => <React.Fragment key={i82}>
                          <option value={f?.name ?? ""}>{S(f?.name)}</option>
                        </React.Fragment>)}
                      </select>
                      <select className="scpy" value={V.supTopic ?? ""} onChange={V.setSupTopic} style={{ height: "32px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", padding: "0 10px", font: "inherit", fontSize: "12.5px", background: "#fff", color: "#0f172a", cursor: "pointer" }}>
                        <option value="">All topics</option>
                        {L(V.topics).map((o, i83) => <React.Fragment key={i83}>
                          <option value={o ?? ""}>{S(o)}</option>
                        </React.Fragment>)}
                      </select>
                      <select className="scpy" value={V.supStatus ?? ""} onChange={V.setSupStatus} style={{ height: "32px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", padding: "0 10px", font: "inherit", fontSize: "12.5px", background: "#fff", color: "#0f172a", transition: "border-color .15s,box-shadow .15s", cursor: "pointer" }}>
                        <option value="">All statuses</option>
                        <option>Open</option>
                        <option>In progress</option>
                        <option>Waiting</option>
                        <option>Resolved</option>
                        <option>On hold</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", overflow: "hidden", flex: "1", minHeight: "0", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", gap: "16px", alignItems: "center", padding: "8px 12px", borderBottom: "1px solid #EEF2F6", background: "#fff", flexWrap: "wrap" }}>
                      <div style={{ display: "inline-flex", gap: "4px", padding: "4px", borderRadius: "10px", background: "#F1F5F9" }}>
                        {L(V.supTabs).map((t, i84) => <React.Fragment key={i84}>
                          <button className="scp1l" onClick={t?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "28px", padding: "0 12px", borderRadius: "7px", border: "0", background: `${A(t?.tbg)}`, color: `${A(t?.tfg)}`, boxShadow: `${A(t?.tsh)}`, fontSize: "12.5px", fontWeight: `${A(t?.fw)}`, display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap", transition: "background .15s,box-shadow .15s,color .15s" }}>
                            {t?.isPortal && <>
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 9a2 2 0 0 0 0 6v3h18v-3a2 2 0 0 1 0-6V6H3zM14 6v12" strokeDasharray="2 2.4" /></svg>
                            </>}
                            {t?.isMine && <>
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0" /></svg>
                            </>}
                            {S(t?.label)}
                          </button>
                        </React.Fragment>)}
                      </div>
                      <div style={{ flex: "1" }} />
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", height: "32px", padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: "8px", background: "#fff", width: "320px", maxWidth: "100%" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}>
                          <circle cx="11" cy="11" r="7" />
                          <path d="m20 20-3.5-3.5" />
                        </svg>
                        <input value={V.supQ ?? ""} onChange={V.setSupQ} placeholder="Search by ticket #, subject, description or creator…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13px", background: "transparent" }} />
                      </div>
                      {V.supMineTab && <>
                        <button className="scpn" onClick={V.openNewTicket} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", boxShadow: "0 1px 2px rgba(15,23,42,.2)", height: "36px" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round" }}><path d="M12 5v14M5 12h14" /></svg>
                          New ticket
                        </button>
                      </>}
                    </div>
                    {V.supPortal && <>
                      <div style={{ display: "grid", gridTemplateColumns: `${A(V.boardGrid)}`, gap: "10px", padding: "10px", overflow: "hidden", background: "#F8FAFC", flex: "1", minHeight: "0" }}>
                        {L(V.board).map((col, i85) => <React.Fragment key={i85}>
                          <div onDragOver={col?.over} onDrop={col?.drop} style={{ minWidth: "0", background: "#fff", borderRadius: "12px", padding: "6px", display: "flex", flexDirection: "column", gap: "6px", minHeight: "0", overflow: "hidden", border: "1px solid #E2E8F0" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 9px", borderRadius: "8px", background: `${A(col?.bg)}`, borderLeft: `3px solid ${A(col?.c)}` }}>
                              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: `${A(col?.c)}` }} />
                              <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#0F172A" }}>{S(col?.label)}</span>
                              <span style={{ fontSize: "11px", fontWeight: "700", minWidth: "20px", height: "19px", padding: "0 6px", borderRadius: "999px", background: `${A(col?.c)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>{S(col?.n)}</span>
                            </div>
                            <div className="ns" style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1", minHeight: "0", overflowY: "auto", scrollbarWidth: "none" }}>
                              {L(col?.cards).map((t, i86) => <React.Fragment key={i86}>
                                <div className="scp1m" draggable="true" onDragStart={t?.drag} onClick={t?.open} style={{ cursor: "grab", background: "#fff", border: "1px solid #E2E8F0", borderLeft: `3px solid ${A(col?.c)}`, borderRadius: "10px", padding: "8px 10px", display: "flex", flexDirection: "column", gap: "6px", flexShrink: "0", boxShadow: "0 1px 2px rgba(15,23,42,.04)", transition: "box-shadow .15s,transform .15s" }}>
                                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                                    <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", fontWeight: "600", padding: "2px 7px", borderRadius: "6px", background: "#F1F5F9", color: "#334155" }}>{S(t?.id)}</span>
                                    <span style={{ fontSize: "11px", fontWeight: "500", padding: "2px 8px", borderRadius: "999px", background: "#ECFEFF", color: "#0E7490" }}>{S(t?.cat)}</span>
                                    {t?.fwd && <>
                                      <span style={{ fontSize: "10.5px", fontWeight: "600", padding: "2px 7px", borderRadius: "999px", background: "#f5f3ff", color: "#6d28d9" }}>Forwarded</span>
                                    </>}
                                  </div>
                                  <div style={{ fontSize: "12px", fontWeight: "600", lineHeight: "1.35", color: "#0F172A", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>{S(t?.subject)}</div>
                                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px 8px", fontSize: "11px", color: "#475569" }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: "5px", minWidth: "0", whiteSpace: "nowrap", overflow: "hidden" }}>
                                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                                      {S(t?.farm)}
                                    </span>
                                    <span style={{ display: "flex", alignItems: "center", gap: "5px", minWidth: "0", whiteSpace: "nowrap", overflow: "hidden" }}>
                                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0" /></svg>
                                      {S(t?.by)}
                                    </span>
                                    <span style={{ display: "flex", alignItems: "center", gap: "5px", whiteSpace: "nowrap" }}>
                                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2" /></svg>
                                      {S(t?.date)}
                                    </span>
                                  </div>
                                  <div style={{ display: "flex", alignItems: "center", gap: "6px", paddingTop: "6px", borderTop: "1px solid #F1F5F9" }}>
                                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: `${A(t?.asgC)}`, color: "#fff", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>{S(t?.asgI)}</span>
                                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#0F172A" }}>{S(t?.asg)}</span>
                                  </div>
                                </div>
                              </React.Fragment>)}
                            </div>
                            {col?.empty && <>
                              <div style={{ fontSize: "12px", color: "#94A3B8", textAlign: "center", padding: "18px 8px", border: "1.5px dashed #E2E8F0", borderRadius: "10px" }}>Drop tickets here</div>
                            </>}
                          </div>
                        </React.Fragment>)}
                      </div>
                    </>}
                    {V.supMine && <>
                      <div className="ns" style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "10px", background: "#F8FAFC", flex: "1", minHeight: "0", overflowY: "auto" }}>
                        {L(V.supRows).map((t, i87) => <React.Fragment key={i87}>
                          <div className="scp1n" onClick={t?.open} style={{ cursor: "pointer", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "10px 14px", display: "flex", gap: "12px", alignItems: "flex-start", flexShrink: "0", justifyContent: "space-between", boxShadow: "0 1px 2px rgba(15,23,42,.04)", transition: "box-shadow .15s,border-color .15s" }}>
                            <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                                <span style={{ fontSize: "13px", fontWeight: "600", color: "#0f172a" }}>{S(t?.subject)}</span>
                                <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "12px", fontWeight: "600", padding: "1px 8px", borderRadius: "999px", border: "1px solid #1A4C7A", color: "#1A4C7A", whiteSpace: "nowrap", flexShrink: "0" }}>{S(t?.id)}</span>
                              </div>
                              <div style={{ fontSize: "11.5px", color: "#475569", lineHeight: "1.45", textWrap: "pretty" }}>{S(t?.desc)}</div>
                              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center", marginTop: "2px" }}>
                                <span style={{ fontSize: "12px", fontWeight: "500", padding: "2px 9px", borderRadius: "999px", background: "#ECFEFF", color: "#0E7490" }}>{S(t?.topic)}</span>
                                <span style={{ fontSize: "12px", fontWeight: "500", padding: "2px 9px", borderRadius: "999px", background: "#F1F5F9", color: "#475569" }}>{S(t?.farm)}</span>
                                <span style={{ fontSize: "12px", color: `${A(t?.noteFg)}`, paddingLeft: "2px" }}>{S(t?.note)}</span>
                              </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px", flexShrink: "0" }}>
                              <span style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".05em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "999px", background: `${A(t?.sbg)}`, color: `${A(t?.sfg)}` }}>{S(t?.status)}</span>
                              <span style={{ fontSize: "12px", color: "#475569" }}>{S(t?.date)}</span>
                            </div>
                          </div>
                        </React.Fragment>)}
                      </div>
                    </>}
                    {V.supEmpty && <>
                      <div style={{ padding: "44px 20px", textAlign: "center", color: "#475569", fontSize: "14px" }}>No tickets match your filters.</div>
                    </>}
                  </div>
                  <div style={{ flexShrink: "0", display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", color: "#475569" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 11v5M12 8v.01" />
                    </svg>
                    UMP admins handle Producer Portal tickets first. Forward anything you can’t resolve and it will appear under My Tickets.
                  </div>
                </div>
              </>}
              {V.is?.profile && <>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "20px 24px", display: "flex", alignItems: "center", gap: "16px 18px", flexWrap: "wrap" }}>
                    <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#14b8a6", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: "700", flexShrink: "0" }}>{S((V.contact?.name || 'J').trim().charAt(0).toUpperCase())}</div>
                    <div style={{ flex: "1 1 220px", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "20px", fontWeight: "600", color: "#0F172A" }}>{S(V.contact?.name)}</span>
                        <span style={{ fontSize: "11px", fontWeight: "600", color: "#b45309", background: "#fffbeb", border: "1px solid #fde68a", padding: "1px 10px", borderRadius: "999px" }}>Staff Admin</span>
                      </div>
                      <div style={{ fontSize: "14px", color: "#475569", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{S(V.contact?.email)}</div>
                    </div>
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                      <div style={{ padding: "8px 14px", borderRadius: "10px", background: "#F8FAFC", border: "1px solid #EEF2F6", minWidth: "130px" }}>
                        <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".05em", color: "#64748B", textTransform: "uppercase" }}>Organisation</div>
                        <div style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", marginTop: "2px" }}>{S(V.contact?.org)}</div>
                      </div>
                      <div style={{ padding: "8px 14px", borderRadius: "10px", background: "#F8FAFC", border: "1px solid #EEF2F6", minWidth: "130px" }}>
                        <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".05em", color: "#64748B", textTransform: "uppercase" }}>Mobile</div>
                        <div style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", marginTop: "2px" }}>{S(V.contact?.mobile)}</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "16px", alignItems: "stretch" }}>
                    <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "22px 24px", display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", paddingBottom: "14px", borderBottom: "1px solid #EEF2F6" }}>
                        <div>
                          <div style={{ fontWeight: "600", fontSize: "17px", color: "#0F172A" }}>Contact details</div>
                          <div style={{ fontSize: "13px", color: "#64748B", marginTop: "3px" }}>How farms and AxisTech support reach you</div>
                        </div>
                        {V.notEditing && <>
                          <button className="scp1o" onClick={V.startEdit} title="Edit contact" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "32px", padding: "0 12px", border: "1px solid #bbf7d0", background: "#fff", borderRadius: "8px", display: "inline-flex", alignItems: "center", gap: "6px", color: "#16a34a", fontSize: "13px", fontWeight: "600", transition: "background .15s", flexShrink: "0" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 20h4L19 9l-4-4L4 16z" /></svg>Edit</button>
                        </>}
                      </div>
                      {[['Full name', 'name', 'text'], ['Email', 'email', 'email'], ['Mobile', 'mobile', 'tel'], ['Organisation', 'org', 'text']].map(([label, k, type], ip) => <React.Fragment key={k}>
                        <div style={{ display: "grid", gridTemplateColumns: "130px minmax(0,1fr)", gap: "12px", alignItems: "center", minHeight: "54px", borderBottom: ip < 3 ? "1px solid #F1F5F9" : "0" }}>
                          <span style={{ fontSize: "13px", color: "#64748B" }}>{label}</span>
                          {V.editing && <>
                            <input className="scpy" type={type} value={V.contact?.[k] ?? ""} onChange={V.setContact?.[k]} style={{ height: "38px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 12px", fontSize: "14px", width: "100%" }} />
                          </>}
                          {V.notEditing && <>
                            <span style={{ fontSize: "14px", fontWeight: "500", color: "#0F172A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{S(V.contact?.[k])}</span>
                          </>}
                        </div>
                      </React.Fragment>)}
                      <div style={{ flex: "1" }} />
                      {V.editing && <>
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "16px" }}>
                          <button className="scpv scpu" onClick={V.cancelEdit} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "38px", padding: "0 16px", border: "1px solid #E2E8F0", background: "#fff", borderRadius: "8px", fontWeight: "500" }}>Cancel</button>
                          <button className="scpn scpu" onClick={V.saveEdit} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "38px", padding: "0 20px", background: "#0A2342", color: "#fff", borderRadius: "8px", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s,transform .1s", fontWeight: "600" }}>Save changes</button>
                        </div>
                      </>}
                      {V.notEditing && <>
                        <div style={{ marginTop: "16px", display: "flex", gap: "10px", alignItems: "center", padding: "12px 14px", borderRadius: "10px", background: "#F1F6FD", border: "1px solid #DCE7F7", fontSize: "13px", color: "#1E293B", lineHeight: "1.45" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
                          Keep these details current so alert emails and support replies reach you.
                        </div>
                      </>}
                    </div>
                    <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "22px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div style={{ paddingBottom: "14px", borderBottom: "1px solid #EEF2F6" }}>
                        <div style={{ fontWeight: "600", fontSize: "17px", color: "#0F172A" }}>Change password</div>
                        <div style={{ fontSize: "13px", color: "#64748B", marginTop: "3px" }}>Use a strong password you don't use anywhere else</div>
                      </div>
                      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>
                        Current password
                        <input className="scpy" type="password" style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 12px", fontSize: "14px" }} />
                      </label>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: "14px" }}>
                        <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>
                          New password
                          <input className="scpy" type="password" value={V.pw ?? ""} onChange={V.setPw} style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 12px", fontSize: "14px" }} />
                        </label>
                        <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>
                          Confirm new password
                          <input className="scpy" type="password" style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 12px", fontSize: "14px" }} />
                        </label>
                      </div>
                      <div style={{ padding: "12px 14px", borderRadius: "10px", background: "#F8FAFC", border: "1px solid #EEF2F6", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", gap: "4px" }}>
                          {L(V.pwBars).map((b, i88) => <React.Fragment key={i88}>
                            <span style={{ flex: "1", height: "4px", borderRadius: "2px", background: `${A(b?.c)}` }} />
                          </React.Fragment>)}
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "6px 14px" }}>
                          {L(V.pwRules).map((r, i89) => <React.Fragment key={i89}>
                            <div style={{ fontSize: "12.5px", color: `${A(r?.c)}`, display: "flex", gap: "8px", alignItems: "center" }}>
                              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: `${A(r?.c)}`, flexShrink: "0" }} />
                              {S(r?.l)}
                            </div>
                          </React.Fragment>)}
                        </div>
                      </div>
                      <div style={{ flex: "1" }} />
                      <div style={{ display: "flex", justifyContent: "flex-end" }}><button className="scpn scpu" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 22px", background: "#0A2342", color: "#fff", borderRadius: "8px", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s,transform .1s", fontWeight: "600", display: "flex", alignItems: "center" }}>Update password</button></div>
                    </div>
                  </div>
                </div>
              </>}
            </div>
            <footer style={{ flexShrink: "0", height: "3vh", minHeight: "26px", maxHeight: "34px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "nowrap", padding: "0 24px", borderTop: "1px solid #EEF2F6", background: "#fff", fontSize: "12px", lineHeight: "20px", color: "#475569" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}><span>2026 © AxisTech Pty Ltd</span></div>
              <div style={{ display: "flex", gap: "20px", flexWrap: "nowrap" }}>
                <a href="#" style={{ color: "#475569" }}>Help</a>
                <a href="#" style={{ color: "#475569" }}>Terms</a>
                <a href="#" style={{ color: "#475569" }}>Privacy</a>
                <a href="#" style={{ color: "#475569" }}>Contact</a>
              </div>
            </footer>
          </main>
        </div>
        {V.modal?.farm && <>
          <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "50", overflow: "hidden" }}>
            <div onClick={V.stop} style={{ background: "#fff", borderRadius: "14px", boxShadow: "0 24px 64px rgba(15,23,42,.24)", width: "100%", maxWidth: "600px", maxHeight: "calc(100vh - 32px)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <div style={{ padding: "12px 20px", borderBottom: "1px solid #EEF2F6", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "34px", height: "34px", borderRadius: "10px", background: "#E6F7F5", color: "#0F766E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 21V10l9-6 9 6v11M9 21v-6h6v6" /></svg></span>
                <div style={{ flex: "1", minWidth: "0", fontWeight: "700", fontSize: "17px", color: "#0F172A" }}>Create farm</div>
                <button className="scp1c" onClick={V.closeModal} title="Close" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
              </div>
              <div style={{ padding: "12px 20px", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "8px 12px", overflow: "auto", minHeight: "0", flex: "1 1 auto" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0", gridColumn: "1/-1" }}>
                  <span>
                    {"Business name "}
                    <span style={{ color: "#DC2626" }}>*</span>
                  </span>
                  <input className="scp12" type="text" value={V.newFarm?.name ?? ""} onChange={V.setNewFarm?.name} placeholder="e.g. Riverbend Pastoral Co." style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box", borderColor: `${A(V.fe?.nameBd)}` }} />
                  {V.fe?.name && <>
                    <span style={{ fontSize: "11.5px", fontWeight: "500", color: "#B91C1C" }}>{S(V.fe?.name)}</span>
                  </>}
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0", gridColumn: "1/-1" }}>
                  <span>
                    {"Description "}
                    <span style={{ fontWeight: "400", color: "#94A3B8" }}>(optional)</span>
                  </span>
                  <input className="scp12" type="text" value={V.newFarm?.desc ?? ""} onChange={V.setNewFarm?.desc} placeholder="Short description of the farm" style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0" }}>
                  <span>
                    {"ABN "}
                    <span style={{ color: "#DC2626" }}>*</span>
                  </span>
                  <input className="scp12" type="text" inputMode="numeric" value={V.newFarm?.abn ?? ""} onChange={V.setNewFarm?.abn} placeholder="11 digits" style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box", borderColor: `${A(V.fe?.abnBd)}` }} />
                  {V.fe?.abn && <>
                    <span style={{ fontSize: "11.5px", fontWeight: "500", color: "#B91C1C" }}>{S(V.fe?.abn)}</span>
                  </>}
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0" }}>
                  <span>
                    {"Phone number "}
                    <span style={{ color: "#DC2626" }}>*</span>
                  </span>
                  <input className="scp12" type="tel" value={V.newFarm?.phone ?? ""} onChange={V.setNewFarm?.phone} placeholder="02 6000 0000" style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box", borderColor: `${A(V.fe?.phoneBd)}` }} />
                  {V.fe?.phone && <>
                    <span style={{ fontSize: "11.5px", fontWeight: "500", color: "#B91C1C" }}>{S(V.fe?.phone)}</span>
                  </>}
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0", gridColumn: "1/-1" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                    <span>
                      {"Address "}
                      <span style={{ color: "#DC2626" }}>*</span>
                    </span>
                    <button className="scp1i" onClick={V.fa?.toggleMode} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "1px 4px", cursor: "pointer", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "#0B7F7E" }}>{S(V.fa?.modeLabel)}</button>
                  </div>
                  {V.fa?.lookup && <>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ position: "absolute", left: "11px", pointerEvents: "none", strokeWidth: "2", strokeLinecap: "round" }}>
                          <circle cx="11" cy="11" r="7" />
                          <path d="m20 20-3.5-3.5" />
                        </svg>
                        <input className="scp12" type="text" value={V.fa?.q ?? ""} onChange={V.fa?.setQ} onFocus={V.fa?.open} onBlur={V.fa?.blur} placeholder="Start typing an address" autoComplete="off" style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box", paddingLeft: "34px", paddingRight: "34px", borderColor: `${A(V.fe?.locBd)}` }} />
                        {V.fa?.picked && <>
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#059669" style={{ position: "absolute", right: "11px", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m5 12 5 5 9-10" /></svg>
                        </>}
                      </div>
                      {V.fa?.showSug && <>
                        <div style={{ position: "absolute", left: "0", right: "0", top: "42px", zIndex: "5", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", boxShadow: "0 18px 40px rgba(15,23,42,.16)", padding: "4px", display: "flex", flexDirection: "column" }}>
                          {L(V.fa?.sug).map((sg, i90) => <React.Fragment key={i90}>
                            <button className="scp2" onMouseDown={sg?.pick} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", display: "flex", gap: "9px", alignItems: "center", padding: "7px 9px", borderRadius: "7px", color: "#0F172A" }}>
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                                <circle cx="12" cy="9.5" r="2.5" />
                              </svg>
                              <span style={{ fontSize: "13px", fontWeight: "600" }}>{S(sg?.main)}</span>
                              <span style={{ fontSize: "12px", fontWeight: "400", color: "#475569" }}>{S(sg?.sub)}</span>
                            </button>
                          </React.Fragment>)}
                          {V.fa?.noMatch && <>
                            <div style={{ padding: "8px 9px", fontSize: "12.5px", fontWeight: "400", color: "#475569" }}>
                              {"No matching addresses. "}
                              <button onMouseDown={V.fa?.toManual} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", color: "#0B7F7E", fontWeight: "600" }}>Enter it manually</button>
                            </div>
                          </>}
                        </div>
                      </>}
                    </div>
                  </>}
                  {V.fa?.manual && <>
                    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,2fr) minmax(0,1.3fr) 76px 92px", gap: "8px" }}>
                      <input className="scp12" type="text" value={V.fa?.street ?? ""} onChange={V.fa?.set?.street} placeholder="Street address" style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box", borderColor: `${A(V.fe?.locBd)}` }} />
                      <input className="scp12" type="text" value={V.fa?.town ?? ""} onChange={V.fa?.set?.town} placeholder="Town" style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box", borderColor: `${A(V.fe?.locBd)}` }} />
                      <select className="scp12" value={V.fa?.state ?? ""} onChange={V.fa?.set?.state} style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box", padding: "0 8px", cursor: "pointer" }}>
                        <option value="VIC">VIC</option>
                        <option value="NSW">NSW</option>
                      </select>
                      <input className="scp12" type="text" inputMode="numeric" value={V.fa?.postcode ?? ""} onChange={V.fa?.set?.postcode} placeholder="Postcode" style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box" }} />
                    </div>
                  </>}
                  {V.fe?.loc && <>
                    <span style={{ fontSize: "11.5px", fontWeight: "500", color: "#B91C1C" }}>{S(V.fe?.loc)}</span>
                  </>}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0", gridColumn: "1/-1" }}>
                  Zone
                  <div style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", padding: "0 11px", fontSize: "13.5px", fontWeight: "400", background: "#F8FAFC", display: "flex", alignItems: "center", gap: "8px", color: `${A(V.newZone?.fg)}` }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /></svg>
                    <span>{S(V.newZone?.label)}</span>
                  </div>
                </div>
                <div style={{ gridColumn: "1/-1", height: "1px", background: "#EEF2F6", margin: "4px 0 0" }} />
                <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0" }}>
                  <span>
                    {"Owner name "}
                    <span style={{ color: "#DC2626" }}>*</span>
                  </span>
                  <input className="scp12" type="text" value={V.newFarm?.owner ?? ""} onChange={V.setNewFarm?.owner} placeholder="Full name" style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box", borderColor: `${A(V.fe?.ownerBd)}` }} />
                  {V.fe?.owner && <>
                    <span style={{ fontSize: "11.5px", fontWeight: "500", color: "#B91C1C" }}>{S(V.fe?.owner)}</span>
                  </>}
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0" }}>
                  <span>
                    {"Owner email "}
                    <span style={{ color: "#DC2626" }}>*</span>
                  </span>
                  <input className="scp12" type="email" value={V.newFarm?.email ?? ""} onChange={V.setNewFarm?.email} placeholder="owner@farm.com.au" style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box", borderColor: `${A(V.fe?.emailBd)}` }} />
                  {V.fe?.email && <>
                    <span style={{ fontSize: "11.5px", fontWeight: "500", color: "#B91C1C" }}>{S(V.fe?.email)}</span>
                  </>}
                </label>
                <div style={{ gridColumn: "1/-1", display: "flex", gap: "8px", alignItems: "center", padding: "8px 12px", borderRadius: "9px", background: "#EFF6FF", fontSize: "12.5px", color: "#1E3A8A" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M4 6h16v12H4z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                  The owner will receive an email invitation to the Producer Portal.
                </div>
              </div>
              <div style={{ padding: "10px 20px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button className="scpi" onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", border: "1px solid #E2E8F0", background: "#fff", color: "#0f172a", borderRadius: "9px", fontSize: "13.5px", fontWeight: "500" }}>Cancel</button>
                <button onClick={V.saveNewFarm} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 18px", background: `${A(V.fe?.btnBg)}`, color: "#fff", borderRadius: "9px", fontWeight: "600", fontSize: "13.5px" }}>Create farm</button>
              </div>
            </div>
          </div>
        </>}
        {V.modal?.invite && <>
          <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "50", overflow: "hidden" }}>
            <div onClick={V.stop} style={{ background: "#fff", borderRadius: "14px", boxShadow: "0 24px 64px rgba(15,23,42,.24)", width: "100%", maxWidth: "560px", maxHeight: "calc(100vh - 32px)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <div style={{ padding: "12px 20px", borderBottom: "1px solid #EEF2F6", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "34px", height: "34px", borderRadius: "10px", background: "#F5F3FF", color: "#6D28D9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M19 8v6M16 11h6" /></svg></span>
                <div style={{ flex: "1", minWidth: "0", fontWeight: "700", fontSize: "17px", color: "#0F172A" }}>Invite user</div>
                <button className="scp1c" onClick={V.closeModal} title="Close" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
              </div>
              <div style={{ padding: "12px 20px", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "8px 12px", overflow: "auto", minHeight: "0", flex: "1 1 auto" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0" }}>
                  <span>
                    {"Full name "}
                    <span style={{ color: "#DC2626" }}>*</span>
                  </span>
                  <input className="scp12" value={V.inv?.name ?? ""} onChange={V.setInv?.name} placeholder="e.g. Emma Barnes" style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box", borderColor: `${A(V.ie?.nameBd)}` }} />
                  {V.ie?.name && <>
                    <span style={{ fontSize: "11.5px", fontWeight: "500", color: "#B91C1C" }}>{S(V.ie?.name)}</span>
                  </>}
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0" }}>
                  <span>
                    {"Email address "}
                    <span style={{ color: "#DC2626" }}>*</span>
                  </span>
                  <input className="scp12" type="email" value={V.inv?.email ?? ""} onChange={V.setInv?.email} placeholder="name@farm.com.au" style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box", borderColor: `${A(V.ie?.emailBd)}` }} />
                  {V.ie?.email && <>
                    <span style={{ fontSize: "11.5px", fontWeight: "500", color: "#B91C1C" }}>{S(V.ie?.email)}</span>
                  </>}
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0", gridColumn: "1/-1" }}>
                  <span>
                    {"Farm "}
                    <span style={{ color: "#DC2626" }}>*</span>
                  </span>
                  <select className="scp12" value={V.inv?.farm ?? ""} onChange={V.setInv?.farm} style={{ height: "36px", border: "1px solid #E2E8F0", borderRadius: "9px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 11px", font: "inherit", fontSize: "13.5px", fontWeight: "400", color: "#0F172A", background: "#fff", width: "100%", boxSizing: "border-box", padding: "0 9px", cursor: "pointer", color: `${A(V.ie?.farmFg)}`, borderColor: `${A(V.ie?.farmBd)}` }}>
                    <option value="">Select a farm</option>
                    {L(V.farms).map((f, i91) => <React.Fragment key={i91}>
                      <option value={f?.name ?? ""}>{S(f?.name)}</option>
                    </React.Fragment>)}
                  </select>
                  {V.ie?.farm && <>
                    <span style={{ fontSize: "11.5px", fontWeight: "500", color: "#B91C1C" }}>{S(V.ie?.farm)}</span>
                  </>}
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#334155", minWidth: "0", gridColumn: "1/-1" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                    <span>
                      {"Role "}
                      <span style={{ color: "#DC2626" }}>*</span>
                    </span>
                    <button className="scp1i" onClick={V.ie?.toggleGuide} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "1px 6px", cursor: "pointer", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "#0B7F7E", display: "flex", alignItems: "center", gap: "5px" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 11v5M12 8h.01" />
                      </svg>
                      {S(V.ie?.guideLabel)}
                    </button>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "8px" }}>
                    {L(V.ie?.roles).map((r, i92) => <React.Fragment key={i92}>
                      <button className="scp1j" onClick={r?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", padding: "9px 10px", borderRadius: "9px", border: `1.5px solid ${A(r?.bd)}`, background: `${A(r?.bg)}`, display: "flex", alignItems: "center", gap: "9px", color: "#0F172A", transition: "border-color .12s,background .12s" }}>
                        <span role="checkbox" aria-checked={r?.on} style={{ width: "18px", height: "18px", borderRadius: "5px", border: `1.5px solid ${A(r?.rbd)}`, background: `${A(r?.cbg)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", transition: "background .12s,border-color .12s" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round", opacity: `${A(r?.tickOp)}` }}><path d="m5 12 5 5 9-10" /></svg></span>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                          <span style={{ fontSize: "13px", fontWeight: "700" }}>{S(r?.name)}</span>
                          <span style={{ fontSize: "11.5px", fontWeight: "400", color: "#475569", lineHeight: "1.3" }}>{S(r?.short)}</span>
                        </span>
                      </button>
                    </React.Fragment>)}
                  </div>
                  {V.ie?.role && <>
                    <span style={{ fontSize: "11.5px", fontWeight: "500", color: "#B91C1C" }}>{S(V.ie?.role)}</span>
                  </>}
                  {V.ie?.guideOpen && <>
                    <div style={{ border: "1px solid #E2E8F0", borderRadius: "10px", background: "#F8FAFC", display: "flex", flexDirection: "column", padding: "4px 0" }}>
                      {L(V.ie?.guide).map((g, i93) => <React.Fragment key={i93}>
                        <div style={{ display: "grid", gridTemplateColumns: "78px minmax(0,1fr)", gap: "8px", alignItems: "baseline", padding: "4px 10px", fontSize: "11.5px", lineHeight: "1.35" }}>
                          <span style={{ fontWeight: "700", color: `${A(g?.fg)}` }}>{S(g?.name)}</span>
                          <span style={{ fontWeight: "400", color: "#475569" }}>{S(g?.desc)}</span>
                        </div>
                      </React.Fragment>)}
                    </div>
                  </>}
                </div>
                <div style={{ gridColumn: "1/-1", display: "flex", gap: "8px", alignItems: "center", padding: "8px 12px", borderRadius: "9px", background: "#EFF6FF", fontSize: "12.5px", color: "#1E3A8A" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M4 6h16v12H4z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                  The user will receive an email invitation to the Producer Portal.
                </div>
              </div>
              <div style={{ padding: "10px 20px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button className="scpi" onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", border: "1px solid #E2E8F0", background: "#fff", color: "#0f172a", borderRadius: "9px", fontSize: "13.5px", fontWeight: "500" }}>Cancel</button>
                <button onClick={V.sendInvite} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 18px", background: `${A(V.ie?.btnBg)}`, color: "#fff", borderRadius: "9px", fontWeight: "600", fontSize: "13.5px" }}>Send invitation</button>
              </div>
            </div>
          </div>
        </>}
        {V.rc?.show && <>
          <div onClick={V.rc?.cancel} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "60", overflow: "hidden" }}>
            <div onClick={V.stop} style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 24px 64px rgba(15,23,42,.24)", width: "100%", maxWidth: "440px", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
              <div style={{ padding: "22px 24px 6px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "11px", background: "#FFFBEB", color: "#B45309", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M12 2.5 4 5.5v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10v-6z" />
                    <path d="M12 8v5M12 16h.01" />
                  </svg>
                </span>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ fontWeight: "700", fontSize: "17px", color: "#0F172A" }}>Update role?</div>
                  <div style={{ fontSize: "13.5px", color: "#475569", marginTop: "6px", lineHeight: "1.5", textWrap: "pretty" }}>
                    {"Change "}
                    <b style={{ color: "#0F172A" }}>{S(V.rc?.name)}</b>
                    {" from "}
                    <b style={{ color: "#0F172A" }}>{S(V.rc?.from)}</b>
                    {" to "}
                    <b style={{ color: "#0F172A" }}>{S(V.rc?.to)}</b>
                    {"? Their access to "}{S(V.rc?.farm)}{" changes straight away."}
                  </div>
                </div>
              </div>
              <div style={{ margin: "12px 24px 0", padding: "10px 12px", borderRadius: "10px", background: "#F8FAFC", fontSize: "12.5px", color: "#475569", lineHeight: "1.45" }}>
                <b style={{ color: "#0F172A" }}>{S(V.rc?.to)}:</b>
                {" "}{S(V.rc?.desc)}
              </div>
              <div style={{ padding: "18px 24px 20px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button className="scpi" onClick={V.rc?.cancel} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 18px", border: "1px solid #E2E8F0", background: "#fff", color: "#0f172a", borderRadius: "10px", fontSize: "14px", fontWeight: "500" }}>Cancel</button>
                <button className="scp3" onClick={V.rc?.confirm} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 20px", background: "#0A2342", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Update role</button>
              </div>
            </div>
          </div>
        </>}
        {V.modal?.user && <>
          <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "55", overflow: "hidden" }}>
            <div onClick={V.stop} style={{ background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "440px", boxShadow: "0 24px 64px rgba(15,23,42,.28)", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
              <div style={{ padding: "20px 22px", display: "flex", alignItems: "center", gap: "14px", borderBottom: "1px solid #f1f5f9" }}>
                <span style={{ width: "46px", height: "46px", borderRadius: "50%", background: "#f5f3ff", color: "#6d28d9", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>{S(V.uDetail?.ini)}</span>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ fontWeight: "600", fontSize: "18px" }}>{S(V.uDetail?.name)}</div>
                  <div style={{ fontSize: "12px", color: "#475569" }}>{S(V.uDetail?.email)}</div>
                </div>
                <button className="scpb" onClick={V.closeModal} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", fontSize: "20px", color: "#475569" }}>×</button>
              </div>
              <div style={{ padding: "8px 22px 4px" }}>
                {L(V.uDetail?.kv).map((r, i94) => <React.Fragment key={i94}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 0", borderBottom: "1px solid #f8fafc", fontSize: "14px" }}>
                    <span style={{ color: "#475569" }}>{S(r?.k)}</span>
                    <span style={{ fontWeight: "500" }}>{S(r?.v)}</span>
                  </div>
                </React.Fragment>)}
              </div>
              <div style={{ padding: "14px 22px 18px", display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                <button onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", border: "1px solid #E2E8F0", background: "#fff", fontSize: "14px" }}>Close</button>
                <button onClick={V.uDetail?.manage} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "14px", fontWeight: "600" }}>Manage access</button>
              </div>
            </div>
          </div>
        </>}
        {V.modal?.tk && <ModalTk V={V} />}
        {V.modal?.dev && <>
          <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "58", overflow: "hidden" }}>
            <div onClick={V.stop} style={{ background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "620px", boxShadow: "0 24px 64px rgba(15,23,42,.28)", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
              <div style={{ padding: "16px 20px", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ flex: "1", minWidth: "0", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{ fontWeight: "600", fontSize: "17px" }}>Edit device</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", padding: "2px 10px 2px 3px", borderRadius: "999px", border: "1px solid #99f6e4", color: "#0f766e" }}>
                    <span style={{ display: "inline-block", width: "18px", height: "18px", borderRadius: "5px", backgroundImage: `url(${A(V.de?.icon)})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                    {S(V.de?.cat)}
                  </span>
                </div>
                <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", fontWeight: "600", padding: "4px 11px", borderRadius: "999px", background: "#ecfdf5", color: "#047857" }}>✓ Connected</span>
                <button className="scpb" onClick={V.closeModal} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", fontSize: "20px", color: "#475569" }}>×</button>
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
                      <input className="scpy" value={V.de?.name ?? ""} onChange={V.de?.setName} style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", font: "inherit", fontSize: "14px", fontWeight: "400", outline: "0" }} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12px", fontWeight: "600" }}>
                      Device ID
                      <input value={V.de?.serial ?? ""} readOnly style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", font: "inherit", fontSize: "14px", fontWeight: "400", background: "#f1f5f9", color: "#475569", outline: "0" }} />
                    </label>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12px", fontWeight: "600" }}>
                    Location
                    <button className="scp1q" onClick={V.de?.openLoc} title="Choose location on map" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", background: "#fff", fontSize: "14px", fontWeight: "400", color: "#0f172a", textAlign: "left" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="#0f172a"><path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
                      <span style={{ fontSize: "13px", color: "#475569" }}>Lat</span>
                      <b style={{ fontWeight: "500" }}>{S(V.de?.lat)}</b>
                      <span style={{ fontSize: "13px", color: "#475569" }}>Long</span>
                      <b style={{ fontWeight: "500" }}>{S(V.de?.lng)}</b>
                      <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", fontWeight: "600", color: "#0B7F7E" }}>
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
                    <span style={{ width: "24px", height: "24px", borderRadius: "7px", background: "#f5f3ff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" /></svg></span>
                    DEVICE CATEGORY
                  </span>
                  <div style={{ height: "42px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "14px", background: "#F1F5F9", color: "#475569", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span>{S(V.de?.cat)}</span>
                    <span style={{ fontSize: "12px", color: "#94A3B8" }}>Cannot be changed</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: "700", letterSpacing: ".06em", color: "#334155" }}>
                    <span style={{ width: "24px", height: "24px", borderRadius: "7px", background: "#ecfeff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0e7490" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" /></svg></span>
                    PROVIDER CONNECTION
                  </span>
                  <div style={{ padding: "10px 12px", borderRadius: "10px", border: "1px solid #bbf7d0", background: "#f0fdf4" }}><span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "600", color: "#047857", background: "#dcfce7", padding: "3px 10px", borderRadius: "999px" }}>{"✓ "}{S(V.de?.provider)}{" connected"}</span></div>
                </div>
              </div>
              <div style={{ padding: "14px 20px", borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button onClick={V.closeModal} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#fff", fontSize: "14px", fontWeight: "500" }}>Cancel</button>
                <button className="scpn" onClick={V.de?.save} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", background: "#0A2342", color: "#fff", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s" }}>Save changes</button>
              </div>
            </div>
          </div>
        </>}
        {V.dm?.show && <>
          <div style={{ position: "fixed", inset: "12px", zIndex: "65", background: "#fff", borderRadius: "14px", boxShadow: "0 0 0 1px rgba(15,23,42,.1),0 24px 70px rgba(15,23,42,.45)", display: "flex", overflow: "hidden" }}>
            <div style={{ width: "300px", flexShrink: "0", display: "flex", flexDirection: "column", borderRight: "1px solid #E2E8F0", background: "#fff", minHeight: "0" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", padding: "14px 14px 12px", borderBottom: "1px solid #EEF2F6" }}>
                <span style={{ fontSize: "13px", color: "#334155", fontWeight: "600" }}>{S(V.dm?.count)}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <button onClick={V.dm?.toggleAll} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0 4px", cursor: "pointer", fontSize: "12.5px", fontWeight: "600", color: "#0B7F7E" }}>{S(V.dm?.allLabel)}</button>
                  <button className="scp10" onClick={V.dm?.close} title="Close map" style={{ appearance: "none", border: "0", background: "#F1F5F9", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "28px", height: "28px", borderRadius: "50%", color: "#475569", fontSize: "16px", lineHeight: "1" }}>×</button>
                </span>
              </div>
              <div style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: "10px", display: "flex", flexDirection: "column", gap: "8px", background: "#F8FAFC" }}>
                {L(V.dm?.items).map((i, i101) => <React.Fragment key={i101}>
                  <button className="scp1r" onClick={i?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", border: "1px solid #E2E8F0", borderRadius: "10px", background: "#fff", opacity: `${A(i?.op)}`, boxShadow: "0 1px 2px rgba(15,23,42,.04)" }}>
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
        {V.loc?.show && <>
          <div onClick={V.loc?.close} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "70", overflow: "hidden" }}>
            <div onClick={V.stop} style={{ background: "#fff", borderRadius: "12px", width: "100%", maxWidth: "820px", boxShadow: "0 24px 64px rgba(15,23,42,.32)", display: "flex", flexDirection: "column", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
              <div style={{ padding: "16px 20px", borderBottom: "1px solid #EEF2F6", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                <div>
                  <div style={{ fontWeight: "600", fontSize: "17px" }}>Select Location</div>
                  <div style={{ fontSize: "13px", color: "#475569", marginTop: "2px" }}>Click on the map to choose the location. You can adjust it later if needed.</div>
                </div>
                <button className="scpb" onClick={V.loc?.close} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#0f172a", fontSize: "22px", lineHeight: "1" }}>×</button>
              </div>
              <div style={{ padding: "14px 20px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "20px", fontSize: "13px", flexWrap: "wrap" }}>
                  <span>
                    <b style={{ fontWeight: "600" }}>Latitude:</b>
                    {" "}{S(V.loc?.lat)}
                  </span>
                  <span>
                    <b style={{ fontWeight: "600" }}>Longitude:</b>
                    {" "}{S(V.loc?.lng)}
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
                        {L(V.locSug).map((g, i102) => <React.Fragment key={i102}>
                          <button className="scp1s" onClick={g?.pick} style={{ appearance: "none", border: "0", background: "#fff", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "14px", width: "100%", textAlign: "left", padding: "10px 16px" }}>
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
                      <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.loc?.pill)}</span>
                    </div>
                    <button onClick={V.locClear} title="Clear search" style={{ pointerEvents: "auto", appearance: "none", border: "0", margin: "0", padding: "0", cursor: "pointer", width: "34px", height: "34px", borderRadius: "50%", background: "#fff", color: "#0F172A", fontSize: "18px", lineHeight: "1", boxShadow: "0 2px 8px rgba(0,0,0,.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>×</button>
                  </div>
                </div>
              </div>
              <div style={{ padding: "14px 20px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button className="scpi" onClick={V.loc?.close} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 18px", border: "1px solid #cbd5e1", background: "#fff", color: "#0f172a", borderRadius: "8px", fontSize: "14px", fontWeight: "500", display: "flex", alignItems: "center" }}>Cancel</button>
                <button className="scpn" onClick={V.loc?.confirm} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 20px", background: "#0A2342", color: "#fff", borderRadius: "8px", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s", fontWeight: "600", fontSize: "14px", display: "flex", alignItems: "center", gap: "7px" }}>Confirm</button>
              </div>
            </div>
          </div>
        </>}
        {V.rd?.show && <>
          <div style={{ position: "fixed", inset: "0", zIndex: "100", background: "linear-gradient(180deg,#07192F 0%,#0A2342 60%,#123456 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "18px", color: "#fff", textAlign: "center", padding: "24px" }}>
            <img src="assets/ump-plus-logo.png" alt="UMP+" style={{ width: "120px", height: "auto", display: "block" }} />
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", border: "3px solid rgba(255,255,255,.18)", borderTopColor: "#22D3EE", animation: "umpspin .8s linear infinite" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontSize: "18px", fontWeight: "600" }}>Redirecting you to the UMP+ Producer Portal</div>
              {V.rd?.hasFarm && <>
                <div style={{ fontSize: "14px", color: "#93C5FD" }}>{"Opening "}{S(V.rd?.farm)}</div>
              </>}
            </div>
          </div>
        </>}
        {V.toast?.show && <>
          <div style={{ position: "fixed", top: "72px", left: "50%", transform: "translateX(-50%)", zIndex: "90", display: "flex", alignItems: "flex-start", gap: "12px", maxWidth: "min(520px,calc(100vw - 32px))", padding: "14px 16px", borderRadius: "12px", background: "#fff", border: "1px solid #BBF7D0", boxShadow: "0 18px 44px rgba(15,23,42,.18)" }}>
            <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#DCFCE7", color: "#15803D", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
              <span style={{ fontWeight: "600", fontSize: "14px", color: "#0f172a" }}>{S(V.toast?.title)}</span>
              <span style={{ fontSize: "13px", color: "#475569", lineHeight: "1.45" }}>{S(V.toast?.msg)}</span>
            </div>
            <button className="scpx" onClick={V.toast?.close} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", color: "#94a3b8", fontSize: "18px", lineHeight: "1", padding: "0 2px" }}>×</button>
          </div>
        </>}
        {V.modal?.alert && <ModalAlert V={V} />}
        {V.modal?.ticket && <>
          <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "55", overflow: "hidden" }}>
            <div onClick={V.stop} style={{ background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "620px", boxShadow: "0 24px 64px rgba(15,23,42,.28)", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
              <div style={{ padding: "20px 22px 14px", borderBottom: "1px solid #EEF2F6", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontWeight: "600", fontSize: "17px" }}>New support ticket</div>
                  <div style={{ fontSize: "13px", color: "#475569", marginTop: "3px" }}>Raised to AxisTech support. It will appear under My Tickets.</div>
                </div>
                <button className="scpb" onClick={V.closeModal} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M6 6l12 12M18 6 6 18" /></svg></button>
              </div>
              <div style={{ padding: "18px 22px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>
                  Subject
                  <input className="scpy" value={V.nt?.subject ?? ""} onChange={V.setNt?.subject} placeholder="Briefly describe the issue" style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", padding: "0 12px", font: "inherit", fontSize: "14px", background: "#fff", color: "#0f172a", width: "100%", fontWeight: "400" }} />
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "12px" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>
                    Topic
                    <select className="scpy" value={V.nt?.topic ?? ""} onChange={V.setNt?.topic} style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", padding: "0 12px", font: "inherit", fontSize: "14px", background: "#fff", color: "#0f172a", width: "100%", fontWeight: "400", cursor: "pointer" }}>
                      <option value="">Select a module</option>
                      {L(V.topics).map((o, i110) => <React.Fragment key={i110}>
                        <option value={o ?? ""}>{S(o)}</option>
                      </React.Fragment>)}
                    </select>
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>
                    Farm
                    <select className="scpy" value={V.nt?.farm ?? ""} onChange={V.setNt?.farm} style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", padding: "0 12px", font: "inherit", fontSize: "14px", background: "#fff", color: "#0f172a", width: "100%", fontWeight: "400", cursor: "pointer" }}>
                      <option value="">Select a farm</option>
                      {L(V.farms).map((f, i111) => <React.Fragment key={i111}>
                        <option value={f?.name ?? ""}>{S(f?.name)}</option>
                      </React.Fragment>)}
                    </select>
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500", color: "#334155" }}>
                  Description
          
                  <div style={{ border: "1px solid #E2E8F0", borderRadius: "10px", overflow: "hidden" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "2px", padding: "6px 10px", background: "#F8FAFC", borderBottom: "1px solid #EEF2F6" }}>
                      <button className="scp1v" onMouseDown={V.ntCmd?.bold} title="Bold" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px" }}>B</button>
                      <button className="scp1v" onMouseDown={V.ntCmd?.italic} title="Italic" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", fontStyle: "italic", fontWeight: "600", fontSize: "14px", fontFamily: "Georgia,serif" }}>I</button>
                      <button className="scp1v" onMouseDown={V.ntCmd?.underline} title="Underline" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "underline", fontWeight: "600", fontSize: "14px" }}>U</button>
                      <button className="scp1v" onMouseDown={V.ntCmd?.strikeThrough} title="Strikethrough" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "line-through", fontWeight: "600", fontSize: "14px" }}>S</button>
                      <span style={{ width: "1px", height: "18px", background: "#E2E8F0", margin: "0 6px" }} />
                      <button className="scp1v" onMouseDown={V.ntCmd?.insertUnorderedList} title="Bulleted list" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" /></svg></button>
                      <button className="scp1v" onMouseDown={V.ntCmd?.insertOrderedList} title="Numbered list" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M10 6h10M10 12h10M10 18h10M4 5l1.5-1v5M3.5 14.5a1.5 1.5 0 0 1 3 .5c0 1-3 2-3 3.5h3" /></svg></button>
                      <span style={{ width: "1px", height: "18px", background: "#E2E8F0", margin: "0 6px" }} />
                      <button className="scp1w" onMouseDown={V.ntCmd?.undo} title="Undo" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3" /></svg></button>
                      <button className="scp1w" onMouseDown={V.ntCmd?.redo} title="Redo" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "7px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m15 14 5-5-5-5M20 9H10a6 6 0 0 0 0 12h3" /></svg></button>
                    </div>
                    <div ref={V.ntDescRef} contentEditable="true" suppressContentEditableWarning="true" data-placeholder="Describe the issue in detail…" style={{ minHeight: "130px", maxHeight: "260px", overflow: "auto", padding: "12px 14px", fontSize: "14px", fontWeight: "400", lineHeight: "1.55", color: "#0f172a", outline: "0" }} />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: "13px", fontWeight: "500", color: "#334155" }}>
                    Attachments
                    <span style={{ fontSize: "12px", fontWeight: "400", color: "#475569" }}>Optional</span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#475569", lineHeight: "1.45", marginTop: "-4px" }}>Attach screenshots, photos or files that help our team understand and resolve the issue faster. PNG, JPG, PDF or CSV, up to 10 MB each.</div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                    <label className="scp1x" style={{ display: "inline-flex", alignItems: "center", gap: "7px", height: "34px", padding: "0 14px", borderRadius: "8px", background: "#E6F4F1", color: "#0F766E", fontSize: "13px", fontWeight: "500", cursor: "pointer" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M21 11.5 12.5 20a5 5 0 0 1-7-7L14 4.5a3.3 3.3 0 0 1 4.7 4.7L10.2 17.7a1.7 1.7 0 0 1-2.4-2.4L15.5 7.6" /></svg>
                      Add Files
                      <input type="file" multiple="true" onChange={V.ntAddFiles} style={{ display: "none" }} />
                    </label>
                    {L(V.ntFiles).map((f, i112) => <React.Fragment key={i112}>
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
                <button onClick={V.submitTicket} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: `${A(V.ntCur)}`, height: "36px", padding: "0 16px", borderRadius: "8px", background: `${A(V.ntBg)}`, color: "#fff", fontSize: "14px", fontWeight: "600" }}>Submit ticket</button>
              </div>
            </div>
          </div>
        </>}
        {V.conn?.show && <ConnShow V={V} />}
        {V.modal?.wizard && <>
          <div onClick={V.closeModal} style={{ position: "fixed", inset: "0", background: "rgba(15,23,42,.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", zIndex: "50", overflow: "hidden" }}>
            <div onClick={V.stop} style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 24px 64px rgba(15,23,42,.24)", width: "100%", maxWidth: "640px", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
              <div style={{ padding: "20px 24px", borderBottom: "1px solid #EEF2F6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: "600", fontSize: "18px" }}>Connect provider</div>
                <button onClick={V.closeModal} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", color: "#475569", fontSize: "22px", lineHeight: "1" }}>×</button>
              </div>
              <div style={{ padding: "18px 24px 0", display: "flex", gap: "6px" }}>
                {L(V.wizSteps).map((s, i118) => <React.Fragment key={i118}>
                  <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ height: "4px", borderRadius: "2px", background: `${A(s?.bar)}` }} />
                    <div style={{ fontSize: "12px", color: `${A(s?.fg)}`, fontWeight: "500" }}>{S(s?.n)}{". "}{S(s?.label)}</div>
                  </div>
                </React.Fragment>)}
              </div>
              <div style={{ padding: "22px 24px", minHeight: "230px" }}>
                {V.wiz?.s1 && <>
                  <div style={{ fontWeight: "600", marginBottom: "12px" }}>Choose provider type</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: "10px" }}>
                    {L(V.wizProviders).map((p, i119) => <React.Fragment key={i119}>
                      <button onClick={p?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", padding: "14px", borderRadius: "10px", border: `1.5px solid ${A(p?.bd)}`, background: `${A(p?.bg)}` }}>
                        <div style={{ fontWeight: "600" }}>{S(p?.name)}</div>
                        <div style={{ fontSize: "12px", color: "#475569", marginTop: "2px" }}>{S(p?.kind)}</div>
                      </button>
                    </React.Fragment>)}
                  </div>
                </>}
                {V.wiz?.s2 && <>
                  <div style={{ fontWeight: "600", marginBottom: "12px" }}>{"Authenticate "}{S(V.wizName)}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
                      API key
                      <input className="scpy" type="password" value="sk_live_8f2c91d04a7e" style={{ height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 12px", fontSize: "14px", fontWeight: "400" }} />
                    </label>
                    <div style={{ fontSize: "12px", color: "#475569" }}>Credentials are stored encrypted and always shown masked.</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#94a3b8", fontSize: "12px" }}>
                      <span style={{ flex: "1", height: "1px", background: "#E2E8F0" }} />
                      or
                      <span style={{ flex: "1", height: "1px", background: "#E2E8F0" }} />
                    </div>
                    <button className="scpv scpu" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "40px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", transition: "border-color .15s,box-shadow .15s", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500" }}>Connect with OAuth</button>
                  </div>
                </>}
                {V.wiz?.s3 && <>
                  <div style={{ fontWeight: "600", marginBottom: "12px" }}>Test connection</div>
                  <button className="scpn scpu" onClick={V.runTest} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "40px", padding: "0 18px", background: "#0A2342", color: "#fff", borderRadius: "8px", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s,transform .1s", fontWeight: "500", display: "inline-flex", alignItems: "center" }}>Run test</button>
                  {V.testPassed && <>
                    <div style={{ marginTop: "16px", padding: "12px 14px", borderRadius: "8px", background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#15803d", fontSize: "14px" }}>Connection passed · 6 devices found</div>
                  </>}
                </>}
                {V.wiz?.s4 && <>
                  <div style={{ fontWeight: "600", marginBottom: "12px" }}>Map devices to farms</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {L(V.wizMap).map((m, i120) => <React.Fragment key={i120}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "space-between", padding: "8px 12px", border: "1px solid #E2E8F0", borderRadius: "8px" }}>
                        <span style={{ fontWeight: "500", fontSize: "14px" }}>{S(m?.device)}</span>
                        <select className="scpy" style={{ height: "34px", border: "1px solid #E2E8F0", borderRadius: "8px", outline: "0", transition: "border-color .15s,box-shadow .15s", padding: "0 8px", background: "#fff", fontSize: "13px" }}>
                          <option>{S(m?.farm)}</option>
                          {L(V.farms).map((f, i121) => <React.Fragment key={i121}>
                            <option>{S(f?.name)}</option>
                          </React.Fragment>)}
                        </select>
                      </div>
                    </React.Fragment>)}
                  </div>
                </>}
                {V.wiz?.s5 && <>
                  <div style={{ fontWeight: "600", marginBottom: "12px" }}>Set sync rules</div>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {L(V.freqs).map((f, i122) => <React.Fragment key={i122}>
                      <button onClick={f?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "6px", border: `1px solid ${A(f?.bd)}`, background: `${A(f?.bg)}`, color: `${A(f?.fg)}`, fontWeight: "500", fontSize: "13px", display: "flex", alignItems: "center" }}>{S(f?.label)}</button>
                    </React.Fragment>)}
                  </div>
                  <div style={{ marginTop: "16px", fontSize: "12px", color: "#475569" }}>A provider goes live once it has been tested, mapped to farms and set to sync.</div>
                </>}
              </div>
              <div style={{ padding: "16px 24px", borderTop: "1px solid #EEF2F6", display: "flex", justifyContent: "space-between", gap: "10px" }}>
                <button className="scpv scpu" onClick={V.wizBack} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "40px", padding: "0 18px", border: "1px solid #E2E8F0", borderRadius: "8px", transition: "background .15s,border-color .15s", display: "flex", alignItems: "center" }}>{S(V.wizBackLabel)}</button>
                <button className="scpn scpu" onClick={V.wizNext} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", padding: "0", textAlign: "left", cursor: "pointer", height: "40px", padding: "0 20px", background: "#0A2342", color: "#fff", borderRadius: "8px", boxShadow: "0 1px 2px rgba(15,23,42,.2)", transition: "background .15s,transform .1s", fontWeight: "500", display: "flex", alignItems: "center" }}>{S(V.wizNextLabel)}</button>
              </div>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
}
