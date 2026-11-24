import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';

export default function GCharts({ V }) {
  return (
    <>
    <div style={{ display: "grid", gridTemplateColumns: `${A(V.g?.chCols)}`, gridTemplateRows: `${A(V.g?.chRows)}`, gap: "16px", alignItems: `${A(V.g?.chAlign)}` }}>
      {V.g?.zl && <>
        <div style={{ gridColumn: "1", gridRow: `1 / span ${A(V.g?.zspan)}`, display: "flex", flexDirection: "column", gap: "14px" }}>
          {V.g?.zagg && <>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 12px", borderRadius: "10px", background: "#F0FDF4", border: "1px solid #BBF7D0", fontSize: "12px", color: "#166534", fontWeight: "500" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 3v18h18M7 15l4-4 3 3 6-7" /></svg>
              <span style={{ flex: "1", minWidth: "0" }}>{S(V.g?.zagg?.txt)}</span>
              {V.g?.zagg?.clear && <><button onClick={V.g?.zagg?.clear} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", color: "#0B6B4B", fontSize: "12px", fontWeight: "700" }}>Reset</button></>}
            </div>
          </>}
          {L(V.g?.zl).map((z, i236) => <React.Fragment key={i236}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <button className="scp9" onClick={z?.toggle} style={{ appearance: "none", border: "1px solid #E2E8F0", background: "#fff", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", padding: "9px 12px", borderRadius: "10px", color: "#0F172A", textAlign: "left" }}>
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(z?.c)}` }} />
                <span style={{ fontSize: "12.5px", fontWeight: "700" }}>{S(z?.name)}</span>
                <span style={{ fontSize: "11px", color: "#64748B" }}>{S(z?.sub)}</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ marginLeft: "auto", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", transform: `${A(z?.rot)}`, transition: "transform .15s" }}><path d="m6 9 6 6 6-6" /></svg>
              </button>
              {z?.open && <>
                {L(z?.st).map((st, i237) => <React.Fragment key={i237}>
                  <button onClick={st?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: `${A(st?.cur)}`, opacity: `${A(st?.op)}`, position: "relative", textAlign: "left", display: "flex", flexDirection: "column", gap: "5px", padding: "10px 40px 10px 12px", borderRadius: "12px", border: `1.5px solid ${A(st?.bd)}`, background: `${A(st?.bg)}`, color: "#0F172A" }}>
                    <span style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", height: "20px", padding: "0 8px", borderRadius: "999px", fontSize: "11px", fontWeight: "600", background: "#E8F0FE", color: "#1D4ED8" }}>Weather station</span>
                      <span style={{ display: "inline-flex", alignItems: "center", height: "20px", padding: "0 8px", borderRadius: "999px", fontSize: "11px", fontWeight: "600", background: "#F1F5F9", color: "#334155", border: "1px solid #E2E8F0" }}>{S(st?.prov)}</span>
                    </span>
                    <span role="checkbox" aria-checked={st?.chk ? "true" : "false"} style={{ position: "absolute", top: "10px", right: "12px", width: "18px", height: "18px", borderRadius: "5px", border: `1.5px solid ${A(st?.cbd)}`, background: `${A(st?.cbg)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round", opacity: `${A(st?.chk)}` }}><path d="m5 12 5 5 9-10" /></svg></span>
                    <span style={{ fontSize: "13px", fontWeight: "700" }}>{S(st?.lab)}</span>
                    <span style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "11px", fontWeight: "600", padding: "2px 8px", borderRadius: "999px", background: "#FFF1E6", color: "#C2410C" }}>{S(st?.a)}</span>
                      <span style={{ fontSize: "11px", fontWeight: "600", padding: "2px 8px", borderRadius: "999px", background: "#E8F0FE", color: "#1D4ED8" }}>{S(st?.b)}</span>
                    </span>
                  </button>
                </React.Fragment>)}
              </>}
            </div>
          </React.Fragment>)}
        </div>
      </>}
      {V.g?.sd && <>
        <div style={{ gridColumn: "1", gridRow: "1 / span 2", display: "flex", flexDirection: "column", gap: "12px", alignSelf: "start", minWidth: "0" }}>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".06em", color: "#475569" }}>SEASON SELECTION</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}>
                <rect x="4" y="5" width="16" height="15" rx="2" />
                <path d="M4 10h16M9 3v4M15 3v4" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "-.01em", color: "#0F172A" }}>{S(V.g?.sd?.label)}</div>
              <div style={{ fontSize: "12px", color: "#64748B", marginTop: "3px" }}>{S(V.g?.sd?.info)}{" · 13 months"}</div>
            </div>
            <button className="scp1k" onClick={V.g?.sd?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", borderRadius: "8px", border: "1px solid #043C2C", background: "#fff", color: "#043C2C", fontSize: "13.5px", fontWeight: "500" }}>{S(V.g?.sd?.btn)}</button>
            {V.g?.sd?.cust && <>
              <div style={{ borderTop: "1px solid #EEF2F6", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".06em", color: "#475569" }}>SEASON STARTS</span>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <select value={V.g?.sd?.sm ?? ""} onChange={V.g?.sd?.setSm} style={{ height: "40px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", font: "inherit", fontSize: "14px", padding: "0 8px", outline: "0", width: "100%" }}>
                    {L(V.g?.sd?.months).map((o, i238) => <React.Fragment key={i238}>
                      <option value={o?.v ?? ""}>{S(o?.label)}</option>
                    </React.Fragment>)}
                  </select>
                  <select value={V.g?.sd?.sy ?? ""} onChange={V.g?.sd?.setSy} style={{ height: "40px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", font: "inherit", fontSize: "14px", padding: "0 8px", outline: "0", width: "100%" }}>
                    {L(V.g?.sd?.years).map((o, i239) => <React.Fragment key={i239}>
                      <option value={o?.v ?? ""}>{S(o?.label)}</option>
                    </React.Fragment>)}
                  </select>
                </div>
                <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".06em", color: "#475569" }}>SEASON ENDS</span>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <select value={V.g?.sd?.em ?? ""} onChange={V.g?.sd?.setEm} style={{ height: "40px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", font: "inherit", fontSize: "14px", padding: "0 8px", outline: "0", width: "100%" }}>
                    {L(V.g?.sd?.months).map((o, i240) => <React.Fragment key={i240}>
                      <option value={o?.v ?? ""}>{S(o?.label)}</option>
                    </React.Fragment>)}
                  </select>
                  <select value={V.g?.sd?.ey ?? ""} onChange={V.g?.sd?.setEy} style={{ height: "40px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", font: "inherit", fontSize: "14px", padding: "0 8px", outline: "0", width: "100%" }}>
                    {L(V.g?.sd?.years).map((o, i241) => <React.Fragment key={i241}>
                      <option value={o?.v ?? ""}>{S(o?.label)}</option>
                    </React.Fragment>)}
                  </select>
                </div>
                <div style={{ padding: "10px 12px", borderRadius: "10px", background: "#ECFDF5", border: "1px solid #BBF7D0" }}>
                  <div style={{ fontSize: "14px", fontWeight: "600", color: "#15803D" }}>{S(V.g?.sd?.info)}</div>
                  <div style={{ fontSize: "12px", color: "#15803D", marginTop: "2px", lineHeight: "1.4" }}>{S(V.g?.sd?.info2)}</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <button onClick={V.g?.sd?.cancel} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "38px", borderRadius: "8px", border: "1px solid #043C2C", background: "#fff", color: "#043C2C", fontSize: "13.5px" }}>Cancel</button>
                  <button onClick={V.g?.sd?.apply} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "38px", borderRadius: "8px", background: "#043C2C", color: "#fff", fontSize: "13.5px", fontWeight: "600" }}>Apply season</button>
                </div>
              </div>
            </>}
          </div>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div>
              <div style={{ fontSize: "13px", fontWeight: "600", color: "#0F172A" }}>Seasons</div>
              <div style={{ fontSize: "12px", color: "#64748B", marginTop: "2px" }}>Stack as many seasons as you like on one graph</div>
            </div>
            <div style={{ position: "relative" }}>
              <button onClick={V.g?.sd?.dsToggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", width: "100%", height: "38px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px", fontSize: "12.5px", color: "#0F172A", whiteSpace: "nowrap" }}>
                {S(V.g?.sd?.stack)}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
              </button>
              {V.g?.sd?.dsOpen && <>
                <div onClick={V.g?.sd?.dsToggle} style={{ position: "fixed", inset: "0", zIndex: "30" }} />
                <div style={{ position: "absolute", left: "0", right: "0", top: "42px", zIndex: "31", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", boxShadow: "0 16px 40px rgba(10,59,43,.18)", padding: "4px", maxHeight: "260px", overflowY: "auto" }}>
                  {L(V.g?.sd?.dsList).map((o, i242) => <React.Fragment key={i242}>
                    <button className="scp2" onClick={o?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "9px 10px", borderRadius: "8px", fontSize: "13px", color: "#0F172A", textAlign: "left" }}>
                      <span style={{ width: "16px", height: "16px", borderRadius: "4px", border: `1.5px solid ${A(o?.bd)}`, background: `${A(o?.bg)}`, color: "#fff", fontSize: "11px", display: "flex", alignItems: "center", justifyContent: "center" }}>{S(o?.tick)}</span>
                      {S(o?.label)}
                    </button>
                  </React.Fragment>)}
                </div>
              </>}
            </div>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {L(V.g?.sd?.chips).map((c, i243) => <React.Fragment key={i243}>
                <button onClick={c?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "28px", padding: "0 10px", borderRadius: "999px", border: "1px solid #E2E8F0", background: "#fff", fontSize: "12px", color: "#0F172A", display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap", opacity: `${A(c?.op)}` }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(c?.dot)}` }} />
                  {S(c?.label)}
                </button>
              </React.Fragment>)}
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ fontSize: "13px", fontWeight: "600", color: "#0F172A" }}>Outlook</div>
            <button onClick={V.g?.sd?.toggleFc} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "44px", borderRadius: "8px", border: "1px solid #FDE7C2", background: "#FFFBF2", display: "flex", alignItems: "center", gap: "10px", padding: "0 12px", fontSize: "14px", color: "#0F172A", textAlign: "left" }}>
              <span style={{ width: "18px", height: "18px", borderRadius: "4px", border: `1.5px solid ${A(V.g?.sd?.fcBd)}`, background: `${A(V.g?.sd?.fcBg)}`, color: "#fff", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>{S(V.g?.sd?.fcTick)}</span>
              See forecast
            </button>
            <div style={{ fontSize: "12px", color: "#64748B", lineHeight: "1.4" }}>Forecast shown in amber from Nov 2026, the end of the observed record.</div>
          </div>
        </div>
      </>}
      <div style={C(V.g?.cw)}>
        {V.g?.zbar && <>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", position: "relative", zIndex: "5" }}>
            {L(V.g?.zbar?.chips).map((c, i244) => <React.Fragment key={i244}>
              <button onClick={c?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "32px", padding: "0 13px", borderRadius: "8px", border: `1px solid ${A(c?.bd)}`, background: `${A(c?.bg)}`, color: `${A(c?.fg)}`, fontSize: "12px", fontWeight: "600" }}>{S(c?.label)}</button>
            </React.Fragment>)}
            {V.g?.zbar?.txt && <>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "#0B6B4B" }}>{S(V.g?.zbar?.txt)}</span>
            </>}
            {V.g?.zbar?.cal && <>
              <div onClick={V.g?.zbar?.cal?.cancel} style={{ position: "fixed", inset: "0", zIndex: "40" }} />
              <div onClick={V.g?.zbar?.cal?.stop} style={{ position: "absolute", top: "40px", left: "0", zIndex: "41", width: "330px", maxWidth: "calc(100vw - 32px)", boxSizing: "border-box", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "14px", boxShadow: "0 22px 54px rgba(15,26,20,.18)", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: "#0F1A14" }}>Custom Range</span>
                  <span style={{ flex: "1" }} />
                  <span style={{ background: "#E7F6EC", color: "#0E7C3A", borderRadius: "20px", padding: "3px 10px", fontSize: "12.5px", fontWeight: "600" }}>{S(V.g?.zbar?.cal?.span)}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <div onClick={V.g?.zbar?.cal?.pickFrom} style={{ flex: "1", minWidth: "0", border: `1.5px solid ${A(V.g?.zbar?.cal?.fBd)}`, background: `${A(V.g?.zbar?.cal?.fBg)}`, borderRadius: "9px", padding: "9px 10px", textAlign: "center", cursor: "pointer" }}>
                    <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>FROM</div>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "#0F1A14", marginTop: "3px" }}>{S(V.g?.zbar?.cal?.from)}</div>
                  </div>
                  <span style={{ color: "#8A948E", fontSize: "13px" }}>→</span>
                  <div onClick={V.g?.zbar?.cal?.pickTo} style={{ flex: "1", minWidth: "0", border: `1.5px solid ${A(V.g?.zbar?.cal?.tBd)}`, background: `${A(V.g?.zbar?.cal?.tBg)}`, borderRadius: "9px", padding: "9px 10px", textAlign: "center", cursor: "pointer" }}>
                    <div style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>TO</div>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "#0F1A14", marginTop: "3px" }}>{S(V.g?.zbar?.cal?.to)}</div>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid #EDF1EE", marginTop: "14px", paddingTop: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#0F1A14" }}>{S(V.g?.zbar?.cal?.month)}</span>
                    <span style={{ flex: "1" }} />
                    <span className="scp1v" onClick={V.g?.zbar?.cal?.prev} title="Previous month" style={{ width: "24px", height: "24px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45", fontSize: "15px" }}>‹</span>
                    <span className="scp1v" onClick={V.g?.zbar?.cal?.next} title="Next month" style={{ width: "24px", height: "24px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: `${A(V.g?.zbar?.cal?.nextInk)}`, fontSize: "15px" }}>›</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "2px" }}>
                    {L(V.g?.zbar?.cal?.dow).map((w, i245) => <React.Fragment key={i245}>
                      <div style={{ textAlign: "center", fontSize: "12px", color: "#8A948E", padding: "4px 0 6px" }}>{S(w)}</div>
                    </React.Fragment>)}
                    {L(V.g?.zbar?.cal?.days).map((day, i246) => <React.Fragment key={i246}>
                      <div onClick={day?.pick} style={{ height: "28px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12.5px", borderRadius: "14px", cursor: `${A(day?.cursor)}`, color: `${A(day?.ink)}`, background: `${A(day?.bg)}`, border: `1px solid ${A(day?.ring)}`, fontWeight: `${A(day?.weight)}` }}>{S(day?.n)}</div>
                    </React.Fragment>)}
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", paddingTop: "14px" }}>
                  <button onClick={V.g?.zbar?.cal?.cancel} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", padding: "8px 14px", borderRadius: "8px", border: "1px solid #E5E8E6", background: "#fff", fontSize: "13px", fontWeight: "600", color: "#3F4B45" }}>Cancel</button>
                  <button onClick={V.g?.zbar?.cal?.apply} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", padding: "8px 14px", borderRadius: "8px", border: "0", background: "#1AA34A", fontSize: "13px", fontWeight: "700", color: "#fff" }}>Apply</button>
                </div>
              </div>
            </>}
            {V.g?.zbar?.dd && <>
              <div style={{ position: "relative", marginLeft: "auto" }}>
                <button onClick={V.g?.zbar?.dd?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "32px", padding: "0 12px", borderRadius: "8px", border: "1px solid #CBD5E1", background: "#fff", color: "#0F172A", fontSize: "12px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  {S(V.g?.zbar?.dd?.label)}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
                </button>
                {V.g?.zbar?.dd?.open && <>
                  <div onClick={V.g?.zbar?.dd?.toggle} style={{ position: "fixed", inset: "0", zIndex: "40" }} />
                  <div style={{ position: "absolute", right: "0", top: "38px", zIndex: "41", width: "230px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", boxShadow: "0 14px 34px rgba(15,23,42,.16)", padding: "6px", display: "flex", flexDirection: "column", gap: "2px" }}>
                    {L(V.g?.zbar?.dd?.opts).map((o, i247) => <React.Fragment key={i247}>
                      <button className="scp2" onClick={o?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", padding: "8px", borderRadius: "7px", fontSize: "12.5px", color: "#0F172A", textAlign: "left" }}>
                        <span style={{ width: "16px", height: "16px", borderRadius: "4px", border: `1.5px solid ${A(o?.bd)}`, background: `${A(o?.bg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" style={{ strokeWidth: "3.4", strokeLinecap: "round", strokeLinejoin: "round", opacity: `${A(o?.chk)}` }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                        {S(o?.l)}
                      </button>
                    </React.Fragment>)}
                  </div>
                </>}
              </div>
            </>}
          </div>
        </>}
        {V.g?.stMap && <>
          <div style={{ gridColumn: "2", gridRow: "1 / span 12", position: "sticky", top: "12px", alignSelf: "start", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", overflow: "hidden", display: "flex", flexDirection: "column", minWidth: "0" }}>
            <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                <span style={{ fontWeight: "600", fontSize: "15px", color: "#0F172A" }}>Sample points</span>
                <span style={{ fontSize: "12px", color: "#64748B" }}>{S(V.g?.stMap?.sub)}</span>
              </div>
              {V.g?.stMap?.reset && <>
                <button onClick={V.g?.stMap?.reset} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "30px", padding: "0 12px", borderRadius: "8px", border: "0", background: "#043C2C", color: "#fff", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", flexShrink: "0" }}>Show all</button>
              </>}
            </div>
            <div style={{ position: "relative", height: "320px", background: "#1e293b" }}>
              <div ref={V.g?.stMap?.ref} style={{ position: "absolute", inset: "0" }} />
              <div style={{ position: "absolute", left: "10px", bottom: "10px", zIndex: "2", display: "flex", flexDirection: "column", gap: "3px", padding: "7px 10px", borderRadius: "10px", background: "rgba(15,23,42,.66)", color: "#fff", fontSize: "11px" }}>
                {L(V.g?.stMap?.leg).map((l, i248) => <React.Fragment key={i248}>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(l?.c)}`, border: "1.5px solid #fff" }} />
                    {S(l?.n)}
                  </span>
                </React.Fragment>)}
              </div>
            </div>
            <div style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {L(V.g?.stMap?.pads).map((q, i249) => <React.Fragment key={i249}>
                <button className="scp9" onClick={q?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", padding: "7px 10px", borderRadius: "9px", border: `1px solid ${A(q?.bd)}`, background: `${A(q?.bg)}`, color: "#0F172A", textAlign: "left" }}>
                  <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: `${A(q?.c)}`, color: "#fff", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>{S(q?.n)}</span>
                  <span style={{ fontSize: "12.5px", fontWeight: "600", flex: "1", minWidth: "0" }}>{S(q?.l)}</span>
                  <span style={{ fontSize: "12px", color: "#475569", fontVariantNumeric: "tabular-nums" }}>{"pH "}{S(q?.v)}</span>
                </button>
              </React.Fragment>)}
            </div>
          </div>
        </>}
        {L(V.g?.charts).map((c, i250) => <React.Fragment key={i250}>
          <div style={{ gridColumn: `${A(c?.span)}`, flex: "1 1 auto", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "0" }}>
                {c?.ic && <>
                  <span style={{ width: "34px", height: "34px", borderRadius: "10px", background: `${A(c?.icBg)}`, color: `${A(c?.icFg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={c?.ic} /></svg></span>
                </>}
                <div>
                  <div style={{ fontWeight: "600", fontSize: "15px", display: "flex", alignItems: "center", gap: "6px" }}>
                    {S(c?.title)}
                    {c?.ref && <>
                      <span style={{ position: "relative", display: "inline-flex", flexShrink: "0", fontWeight: "400", letterSpacing: "0" }}>
                        <button className="scp17" onClick={c?.ref?.tog} aria-label="Info" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", color: "#94A3B8", display: "flex" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}>
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 11v5M12 8h.01" />
                          </svg>
                        </button>
                        {c?.ref?.open && <>
                          <span onClick={c?.ref?.off} style={{ position: "fixed", inset: "0", zIndex: "44", cursor: "default" }} />
                          <span style={{ position: "absolute", left: "-14px", top: "100%", paddingTop: "8px", zIndex: "45", width: "310px" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "11px", background: "#fff", color: "#1E293B", borderRadius: "12px", padding: "14px 16px", boxShadow: "0 0 0 1px rgba(15,23,42,.06),0 16px 40px rgba(15,23,42,.18)", whiteSpace: "normal", textAlign: "left", fontWeight: "400", letterSpacing: "0" }}>
                              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#64748B" }}>DEFINITION</span>
                                <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(c?.ref?.d)}</span>
                              </span>
                              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#2563EB" }}>REFERENCE</span>
                                <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(c?.ref?.r)}</span>
                                {c?.ref?.lk && <>
                                  <a href={c?.ref?.lk?.href} target="_blank" rel="noopener" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: "600", color: "#2563EB", textDecoration: "underline", textUnderlineOffset: "2px" }}>{S(c?.ref?.lk?.l)}{" ↗"}</a>
                                </>}
                              </span>
                              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#1F7A4A" }}>UMP+</span>
                                <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(c?.ref?.u)}</span>
                              </span>
                              {c?.ref?.cols && <>
                                <span style={{ display: "flex", flexDirection: "column", gap: "7px", borderTop: "1px solid #F1F5F9", paddingTop: "10px" }}>
                                  <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#64748B" }}>COLOURS</span>
                                  {L(c?.ref?.cols).map((ir, i251) => <React.Fragment key={i251}>
                                    <span style={{ display: "grid", gridTemplateColumns: "12px 70px 1fr", gap: "8px", alignItems: "center", fontSize: "12.5px", color: "#334155" }}>
                                      <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: `${A(ir?.c)}` }} />
                                      <b style={{ fontWeight: "600", color: "#0F172A" }}>{S(ir?.l)}</b>
                                      <span>{S(ir?.r)}</span>
                                    </span>
                                  </React.Fragment>)}
                                  <span style={{ fontSize: "11.5px", lineHeight: "1.5", color: "#64748B" }}>{S(c?.ref?.note)}</span>
                                </span>
                              </>}
                            </span>
                          </span>
                        </>}
                      </span>
                    </>}
                  </div>
                  <div style={{ fontSize: "12.5px", color: "#64748b", marginTop: "2px" }}>{S(c?.sub)}</div>
                </div>
              </div>
              {c?.selChart && <>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: "600", letterSpacing: ".06em", color: "#475569" }}>
                  SELECT CHART
                  <select value={c?.selChart?.value ?? ""} onChange={c?.selChart?.set} style={{ height: "34px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", font: "inherit", fontSize: "12.5px", letterSpacing: "0", fontWeight: "500", padding: "0 8px", outline: "0" }}>
                    {L(c?.selChart?.opts).map((o, i252) => <React.Fragment key={i252}>
                      <option value={o?.v ?? ""}>{S(o?.label)}</option>
                    </React.Fragment>)}
                  </select>
                </label>
              </>}
              {c?.show && <>
                <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "6px", marginLeft: "auto" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#64748B" }}>Show</span>
                  <button className="scpf" onClick={c?.show?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "30px", minWidth: "160px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", padding: "0 10px", display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", fontWeight: "500", color: "#0F172A" }}>
                    <span style={{ width: "14px", borderTop: `2.5px solid ${A(c?.show?.c)}` }} />
                    <span style={{ flex: "1", textAlign: "left", whiteSpace: "nowrap" }}>{S(c?.show?.l)}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  {c?.show?.open && <>
                    <div onClick={c?.show?.toggle} style={{ position: "fixed", inset: "0", zIndex: "40" }} />
                    <div style={{ position: "absolute", right: "0", top: "36px", zIndex: "41", width: "210px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", boxShadow: "0 14px 34px rgba(15,23,42,.16)", padding: "5px", display: "flex", flexDirection: "column", gap: "2px" }}>
                      {L(c?.show?.opts).map((o, i253) => <React.Fragment key={i253}>
                        <button className="scp2" onClick={o?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "9px", padding: "8px 9px", borderRadius: "7px", background: `${A(o?.bg)}`, fontSize: "12.5px", fontWeight: `${A(o?.fw)}`, color: "#0F172A", textAlign: "left" }}>
                          <span style={{ width: "14px", borderTop: `2.5px solid ${A(o?.c)}` }} />
                          {S(o?.l)}
                        </button>
                      </React.Fragment>)}
                    </div>
                  </>}
                </div>
              </>}
              {c?.seg && <>
                <div style={{ display: "flex", gap: "2px", padding: "3px", borderRadius: "9px", background: "#F1F5F9", flexWrap: "wrap" }}>
                  {L(c?.seg).map((sg, i254) => <React.Fragment key={i254}>
                    <button onClick={sg?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "28px", padding: "0 11px", borderRadius: "7px", fontSize: "12px", fontWeight: "600", background: `${A(sg?.bg)}`, color: `${A(sg?.fg)}`, boxShadow: `${A(sg?.sh)}`, transition: "background .15s,color .15s" }}>{S(sg?.l)}</button>
                  </React.Fragment>)}
                </div>
              </>}
              <div style={{ display: "flex", gap: "8px 14px", flexWrap: "wrap" }}>
                {L(c?.legend).map((lg, i255) => <React.Fragment key={i255}>
                  <button onClick={lg?.go} title={lg?.tip} style={{ appearance: "none", font: "inherit", margin: "0", padding: "3px 9px", whiteSpace: "nowrap", flexShrink: "0", borderRadius: "999px", border: `1px solid ${A(lg?.bd)}`, background: `${A(lg?.bg)}`, display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#475569", cursor: `${A(lg?.cur)}`, opacity: `${A(lg?.op)}`, textDecoration: `${A(lg?.td)}`, transition: "opacity .15s,background .15s" }}>
                    <span style={{ width: "14px", height: "0", borderTop: `2px ${A(lg?.ls)} ${A(lg?.c)}` }} />
                    {S(lg?.name)}
                  </button>
                </React.Fragment>)}
              </div>
            </div>
            {c?.axisOn && <>
              <div style={{ display: "flex", gap: "10px", flex: "1", minHeight: `${A(c?.h)}` }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "42px", flexShrink: "0", textAlign: "right", fontSize: "11px", color: "#94a3b8", paddingBottom: "22px", marginTop: "-6px" }}>
                  {L(c?.ticks).map((t, i256) => <React.Fragment key={i256}>
                    <span>{S(t)}</span>
                  </React.Fragment>)}
                </div>
                <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div data-zk={c?.zk} data-zn={c?.zn} style={{ flex: "1", position: "relative", borderBottom: "1px solid #E2E8F0" }}>
                    <div style={{ position: "absolute", left: "0", right: "0", top: "0", borderTop: "1px dashed #F1F5F9" }} />
                    <div style={{ position: "absolute", left: "0", right: "0", top: "33.3%", borderTop: "1px dashed #F1F5F9" }} />
                    <div style={{ position: "absolute", left: "0", right: "0", top: "66.6%", borderTop: "1px dashed #F1F5F9" }} />
                    {c?.isLine && <>
                      <svg viewBox="0 0 600 200" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                        {L(c?.lines).map((ln, i257) => <React.Fragment key={i257}>
                          <path d={ln?.area} fill={ln?.c} style={{ fillOpacity: ".09", opacity: `${A(ln?.op)}` }} />
                          <polyline points={ln?.p} fill="none" stroke={ln?.c} style={{ strokeWidth: `${A(ln?.sw)}`, opacity: `${A(ln?.op)}`, strokeDasharray: `${A(ln?.dash)}`, vectorEffect: "non-scaling-stroke", strokeLinejoin: "round", strokeLinecap: "round" }} />
                        </React.Fragment>)}
                      </svg>
                    </>}
                    {c?.isGBars && <>
                      <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "flex-end", gap: "10px", padding: "0 4px" }}>
                        {L(c?.groups).map((gp, i258) => <React.Fragment key={i258}>
                          <div style={{ flex: "1", minWidth: "6px", height: "100%", display: "flex", alignItems: "flex-end", gap: "2px" }}>
                            {L(gp?.bars).map((b, i259) => <React.Fragment key={i259}>
                              <div title={b?.tip} style={{ flex: "1", height: `${A(b?.h)}`, background: `${A(b?.c)}`, borderRadius: "3px 3px 0 0" }} />
                            </React.Fragment>)}
                          </div>
                        </React.Fragment>)}
                      </div>
                    </>}
                    {c?.isCombo && <>
                      <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "flex-end", gap: "2px" }}>
                        {L(c?.cbars).map((b, i260) => <React.Fragment key={i260}>
                          <div title={b?.tip} style={{ flex: "1", minWidth: "2px", height: `${A(b?.h)}`, background: "#38BDF8", borderRadius: "3px 3px 0 0", opacity: ".85" }} />
                        </React.Fragment>)}
                      </div>
                      <svg viewBox="0 0 600 200" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible", pointerEvents: "none" }}><polyline points={c?.cline} fill="none" stroke="#1D4ED8" style={{ strokeWidth: "2.4", vectorEffect: "non-scaling-stroke", strokeLinejoin: "round", strokeLinecap: "round" }} /></svg>
                    </>}
                    {c?.isBars && <>
                      <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "flex-end", gap: "6px", padding: "0 4px" }}>
                        {L(c?.bars).map((b, i261) => <React.Fragment key={i261}>
                          <div title={b?.tip} style={{ flex: "1", minWidth: "3px", height: `${A(b?.h)}`, background: `${A(b?.c)}`, borderRadius: "4px 4px 0 0" }} />
                        </React.Fragment>)}
                      </div>
                    </>}
                  </div>
                  {c?.isLine && <>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#94a3b8", height: "14px" }}>
                      {L(c?.xl).map((x, i262) => <React.Fragment key={i262}>
                        <span>{S(x)}</span>
                      </React.Fragment>)}
                    </div>
                  </>}
                  {c?.isCombo && <>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#94a3b8", height: "14px", overflow: "hidden" }}>
                      {L(c?.xl).map((x, i263) => <React.Fragment key={i263}>
                        <span style={{ whiteSpace: "nowrap" }}>{S(x)}</span>
                      </React.Fragment>)}
                    </div>
                  </>}
                  {c?.isBars && <>
                    <div style={{ display: "flex", gap: "6px", padding: "0 4px", fontSize: "11px", color: "#94a3b8", height: "14px" }}>
                      {L(c?.bl).map((x, i264) => <React.Fragment key={i264}>
                        <span style={{ flex: "1", minWidth: "3px", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden" }}>{S(x)}</span>
                      </React.Fragment>)}
                    </div>
                  </>}
                  {c?.isGBars && <>
                    <div style={{ display: "flex", gap: "10px", padding: "0 4px", fontSize: "11px", color: "#94a3b8", height: "14px" }}>
                      {L(c?.bl).map((x, i265) => <React.Fragment key={i265}>
                        <span style={{ flex: "1", minWidth: "6px", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(x)}</span>
                      </React.Fragment>)}
                    </div>
                  </>}
                </div>
                {c?.rticks && <>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "38px", flexShrink: "0", textAlign: "left", fontSize: "11px", color: "#1D4ED8", paddingBottom: "22px", marginTop: "-6px" }}>
                    {L(c?.rticks).map((t, i266) => <React.Fragment key={i266}>
                      <span>{S(t)}</span>
                    </React.Fragment>)}
                  </div>
                </>}
              </div>
            </>}
            {c?.isHBars && <>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", gap: "7px", flex: "1" }}>
                {L(c?.rows).map((r, i267) => <React.Fragment key={i267}>
                  <div style={{ display: "grid", gridTemplateColumns: "84px minmax(0,1fr) 72px", alignItems: "center", gap: "10px", fontSize: "12px" }}>
                    <span style={{ color: "#475569", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(r?.l)}</span>
                    <div style={{ height: `${A(c?.bh)}`, background: "#F1F5F9", borderRadius: "5px", position: "relative" }}>
                      <div title={r?.tip} style={{ height: "100%", width: `${A(r?.w)}`, background: `${A(r?.c)}`, borderRadius: "4px" }} />
                      {r?.mk && <>
                        <div style={{ position: "absolute", top: "-3px", bottom: "-3px", left: `${A(r?.mk)}`, borderLeft: "2px dashed #DC2626" }} />
                      </>}
                    </div>
                    <span style={{ textAlign: "right", fontVariantNumeric: "tabular-nums", color: "#0F172A", fontWeight: "500" }}>{S(r?.t)}</span>
                  </div>
                </React.Fragment>)}
              </div>
            </>}
            {c?.isTree && <>
              <div style={{ position: "relative", flex: "1", minHeight: `${A(c?.h)}`, margin: "-2px" }}>
                {L(c?.tiles).map((tl, i268) => <React.Fragment key={i268}>
                  <div onClick={tl?.go} title={tl?.tip} style={{ cursor: "pointer", position: "absolute", left: `${A(tl?.x)}`, top: `${A(tl?.y)}`, width: `${A(tl?.w)}`, height: `${A(tl?.h)}`, padding: "2px", boxSizing: "border-box" }}>
                    <div style={{ width: "100%", height: "100%", borderRadius: "8px", boxShadow: `${A(tl?.ring)}`, transition: "background .15s,box-shadow .15s", background: `${A(tl?.c)}`, color: `${A(tl?.fg)}`, padding: "8px 10px", boxSizing: "border-box", overflow: "hidden", display: "flex", flexDirection: "column", gap: "1px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(tl?.l)}</span>
                      <span style={{ fontSize: "18px", fontWeight: "700", letterSpacing: "-.01em", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{S(tl?.t)}</span>
                      <span style={{ fontSize: "11px", fontWeight: "500", opacity: ".85", whiteSpace: "nowrap" }}>{S(tl?.pc)}</span>
                    </div>
                  </div>
                </React.Fragment>)}
              </div>
            </>}
            {c?.isDiv && <>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1" }}>
                <div style={{ position: "relative", flex: "1", minHeight: `${A(c?.h)}` }}>
                  <div style={{ position: "absolute", left: "0", right: "0", top: `${A(c?.zero)}`, borderTop: "1.5px solid #94A3B8" }} />
                  <span style={{ position: "absolute", left: "0", top: `${A(c?.zero)}`, transform: "translateY(-100%)", fontSize: "10.5px", fontWeight: "600", color: "#64748B", paddingBottom: "2px" }}>0</span>
                  <div style={{ position: "absolute", top: "0", bottom: "0", left: "20px", right: "0", display: "flex", gap: "12px" }}>
                    {L(c?.cols).map((b, i269) => <React.Fragment key={i269}>
                      <div style={{ flex: "1", position: "relative", minWidth: "0" }}>
                        <div title={b?.tip} style={{ position: "absolute", left: "16%", right: "16%", top: `${A(b?.top)}`, height: `${A(b?.h)}`, background: `${A(b?.c)}`, borderRadius: "5px" }} />
                        <span style={{ position: "absolute", left: "0", right: "0", top: `${A(b?.lt)}`, textAlign: "center", fontSize: "12px", fontWeight: "700", color: `${A(b?.fg)}`, fontVariantNumeric: "tabular-nums" }}>{S(b?.t)}</span>
                      </div>
                    </React.Fragment>)}
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", paddingLeft: "20px" }}>
                  {L(c?.cols).map((b, i270) => <React.Fragment key={i270}>
                    <span style={{ flex: "1", minWidth: "0", textAlign: "center", fontSize: "11.5px", color: "#475569", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(b?.l)}</span>
                  </React.Fragment>)}
                </div>
              </div>
            </>}
            {c?.isRank && <>
              <div style={{ display: "flex", flexDirection: "column", flex: "1", gap: "10px" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", flex: "1" }}>
                  {L(c?.rows).map((r, i271) => <React.Fragment key={i271}>
                    <div title={r?.tip} style={{ display: "grid", gridTemplateColumns: "24px minmax(80px,112px) minmax(0,1fr) 54px", alignItems: "center", gap: "12px", padding: "9px 0", borderBottom: "1px solid #F1F5F9", opacity: `${A(r?.op)}`, transition: "opacity .15s" }}>
                      <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: `${A(r?.c)}`, color: "#fff", fontSize: "11.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>{S(r?.rk)}</span>
                      <span style={{ fontSize: "13px", fontWeight: "600", color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(r?.l)}</span>
                      <div style={{ height: "12px", background: "#F1F5F9", borderRadius: "6px" }}><div style={{ height: "100%", width: `${A(r?.w)}`, background: `${A(r?.c)}`, borderRadius: "6px", transition: "width .3s" }} /></div>
                      <span style={{ textAlign: "right", fontSize: "14px", fontWeight: "700", color: "#0F172A", fontVariantNumeric: "tabular-nums" }}>{S(r?.t)}</span>
                    </div>
                  </React.Fragment>)}
                </div>
              </div>
            </>}
          </div>
        </React.Fragment>)}
      </div>
      {V.g?.side && <>
        <div style={{ gridColumn: "3", gridRow: "1 / span 40", display: "flex", flexDirection: "column", gap: "10px", alignSelf: "start", minWidth: "0" }}>
          {L(V.g?.side).map((sec, i272) => <React.Fragment key={i272}>
            {sec?.title && <>
              <div style={{ padding: "6px 4px 0" }}>
                <div style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A" }}>{S(sec?.title)}</div>
                <div style={{ fontSize: "12px", color: "#64748B", marginTop: "2px" }}>{S(sec?.sub)}</div>
              </div>
            </>}
            {sec?.head && <>
              <div style={{ padding: "6px 4px 0", fontSize: "11px", fontWeight: "700", letterSpacing: ".06em", color: "#475569" }}>{S(sec?.head)}</div>
            </>}
            {L(sec?.cards).map((k, i273) => <React.Fragment key={i273}>
              <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "3px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".04em", color: "#334155" }}>{S(k?.label)}</span>
                  {k?.pill && <>
                    <span style={{ fontSize: "11px", fontWeight: "600", padding: "2px 8px", borderRadius: "6px", background: `${A(k?.pbg)}`, color: `${A(k?.pc)}` }}>{S(k?.pill)}</span>
                  </>}
                </div>
                {k?.big && <>
                  <span style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-.01em", color: "#0F172A" }}>{S(k?.big)}</span>
                </>}
                {L(k?.lines).map((ln, i274) => <React.Fragment key={i274}>
                  <span style={{ fontSize: "12px", color: "#475569" }}>
                    <b style={{ color: "#0F172A" }}>{S(ln?.b)}</b>
                    {" "}{S(ln?.t)}
                  </span>
                </React.Fragment>)}
              </div>
            </React.Fragment>)}
          </React.Fragment>)}
        </div>
      </>}
    </div>
    </>
  );
}
