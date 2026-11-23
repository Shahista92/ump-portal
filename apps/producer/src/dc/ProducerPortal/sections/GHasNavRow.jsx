import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';

export default function GHasNavRow({ V }) {
  return (
    <>
    <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", position: "relative" }}>
      {V.g?.inl && <>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px 16px", flexWrap: "wrap", padding: "4px 12px 0 8px" }}>
          <div role="tablist" style={{ display: "flex", gap: "2px", flexWrap: "wrap", alignSelf: "flex-end" }}>
            {L(V.g?.inl?.secs).map((s, i18) => <React.Fragment key={i18}>
              <button className="scps scp6" role="tab" aria-selected={s?.sel} onClick={s?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", position: "relative", flex: "1 0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px", minHeight: "42px", padding: "5px 5px 7px", borderRadius: "8px 8px 0 0", fontSize: "11px", fontWeight: `${A(s?.fw)}`, letterSpacing: ".005em", lineHeight: "1.1", whiteSpace: "nowrap", color: `${A(s?.fg)}`, background: `${A(s?.bg)}`, transition: "color .15s ease,background .15s ease,transform .1s" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", color: `${A(s?.ic)}` }}><path d={s?.d} /></svg>
                <span style={{ whiteSpace: "nowrap" }}>{S(s?.label)}</span>
                <span style={{ position: "absolute", left: "10px", right: "10px", bottom: "0", height: "2px", borderRadius: "2px 2px 0 0", background: `${A(s?.ind)}` }} />
              </button>
            </React.Fragment>)}
          </div>
          <label style={{ position: "relative", display: "block", width: "clamp(180px,18vw,300px)", marginBottom: "6px" }}>
            <span style={{ position: "absolute", top: "-6px", left: "9px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2", zIndex: "1" }}>{"Select "}{S(V.g?.inl?.sel?.label)}</span>
            <select className="scpg" value={V.g?.inl?.sel?.value ?? ""} onChange={V.g?.inl?.sel?.set} style={{ width: "100%", height: "34px", border: "1px solid #CBD5E1", borderRadius: "7px", outline: "0", background: "#fff", font: "inherit", fontSize: "12.5px", fontWeight: "500", color: "#0F172A", cursor: "pointer", padding: "0 10px" }}>
              {L(V.g?.inl?.sel?.opts).map((o, i19) => <React.Fragment key={i19}>
                <option value={o?.v ?? ""}>{S(o?.label)}</option>
              </React.Fragment>)}
            </select>
          </label>
        </div>
      </>}
      {V.g?.sections && <>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "6px 10px", flexWrap: "nowrap", padding: "4px 12px 0 8px" }}>
          <div role="tablist" lang="en" style={{ display: "flex", gap: "0", flex: "1 1 0", minWidth: "0", flexWrap: "nowrap", marginRight: "6px", overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none" }}>
            {L(V.g?.sections).map((s, i20) => <React.Fragment key={i20}>
              <button className="scps scp6" role="tab" aria-selected={s?.sel} onClick={s?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", position: "relative", flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px", minHeight: "42px", padding: "5px 8px 7px", borderRadius: "8px 8px 0 0", fontSize: "12px", fontWeight: `${A(s?.fw)}`, letterSpacing: ".005em", lineHeight: "1.1", whiteSpace: "nowrap", color: `${A(s?.fg)}`, background: `${A(s?.bg)}`, transition: "color .15s ease,background .15s ease,transform .1s" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", color: `${A(s?.ic)}` }}><path d={s?.d} /></svg>
                <span style={{ whiteSpace: "nowrap" }}>{S(s?.label)}</span>
                <span style={{ position: "absolute", left: "10px", right: "10px", bottom: "0", height: "2px", borderRadius: "2px 2px 0 0", background: `${A(s?.ind)}` }} />
              </button>
            </React.Fragment>)}
          </div>
          {V.g?.secRight && <>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "nowrap", flex: "0 0 auto", minWidth: "0", justifyContent: "flex-end", marginLeft: "auto", padding: "0 0 8px" }}>
              {V.g?.chipsRight && <>
                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", gap: "2px", padding: "2px", borderRadius: "8px", background: "#F1F5F9" }}>
                    {L(V.g?.chips2).map((c, i21) => <React.Fragment key={i21}>
                      <button className="scp6 scpt" onClick={c?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "26px", padding: "0 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "500", display: "flex", alignItems: "center", gap: "6px", background: `${A(c?.bg)}`, color: `${A(c?.fg)}`, boxShadow: `${A(c?.sh)}`, transition: "background .15s,color .15s,transform .1s" }}>
                        {c?.dot && <>
                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: `${A(c?.dot)}` }} />
                        </>}
                        {S(c?.label)}
                      </button>
                    </React.Fragment>)}
                  </div>
                  {V.g?.cPop && <>
                    <div style={{ position: "absolute", right: "0", top: "38px", zIndex: "46", width: "250px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", boxShadow: "0 18px 40px rgba(15,23,42,.16)", padding: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".06em", color: "#475569" }}>CUSTOM RANGE</span>
                      <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12.5px", color: "#334155" }}>
                        <span>From</span>
                        <input type="date" value={V.g?.cPop?.from ?? ""} onChange={V.g?.cPop?.setFrom} style={{ height: "36px", border: "1px solid #CBD5E1", borderRadius: "8px", font: "inherit", fontSize: "13px", padding: "0 10px", outline: "0", width: "100%", boxSizing: "border-box" }} />
                      </label>
                      <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12.5px", color: "#334155" }}>
                        <span>To</span>
                        <input type="date" value={V.g?.cPop?.to ?? ""} onChange={V.g?.cPop?.setTo} style={{ height: "36px", border: "1px solid #CBD5E1", borderRadius: "8px", font: "inherit", fontSize: "13px", padding: "0 10px", outline: "0", width: "100%", boxSizing: "border-box" }} />
                      </label>
                      <button className="scpu" onClick={V.g?.cPop?.apply} style={{ appearance: "none", border: "0", font: "inherit", margin: "4px 0 0", cursor: "pointer", height: "38px", borderRadius: "8px", background: "#15803D", color: "#fff", fontSize: "13px", fontWeight: "700" }}>Apply</button>
                    </div>
                  </>}
                </div>
              </>}
              {V.g?.meta && <>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "#166534", whiteSpace: "nowrap", flexShrink: "0" }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 0 3px rgba(34,197,94,.18)" }} />
                  {S(V.g?.metaL)}
                  <b style={{ fontWeight: "700", color: "#14532D" }}>{S(V.g?.metaV)}</b>
                </span>
              </>}
              {V.g?.stPick && <>
                <div style={{ position: "relative", width: "max-content", minWidth: "200px", flexShrink: "0" }}>
                  <span style={{ position: "absolute", top: "-6px", left: "9px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2", zIndex: "1" }}>{S(V.g?.stPick?.lbl)}</span>
                  <button className="scpf scp6" onClick={V.g?.stPick?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", width: "100%", height: "34px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", display: "flex", alignItems: "center", gap: "6px", padding: "0 8px", color: "#0F172A", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                    <span style={{ flex: "1", minWidth: "0", textAlign: "left", fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap" }}>{S(V.g?.stPick?.cur?.label)}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", height: "20px", padding: "0 8px", borderRadius: "999px", border: "1px solid #C4B5FD", background: "#F5F3FF", color: "#7C3AED", fontSize: "10.5px", fontWeight: "600", whiteSpace: "nowrap", flexShrink: "0" }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" /></svg>
                      {S(V.g?.stPick?.cur?.prov)}
                    </span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  {V.g?.stPick?.open && <>
                    <div onClick={V.g?.stPick?.toggle} style={{ position: "fixed", inset: "0", zIndex: "44" }} />
                    <div style={{ position: "absolute", right: "0", minWidth: "100%", width: "max-content", maxWidth: "min(420px,calc(100vw - 32px))", top: "40px", zIndex: "45", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", boxShadow: "0 16px 40px rgba(10,59,43,.16)", padding: "5px", display: "flex", flexDirection: "column", gap: "2px" }}>
                      {L(V.g?.stPick?.opts).map((o, i22) => <React.Fragment key={i22}>
                        <button className="scp2 scp6" onClick={o?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", padding: "9px", borderRadius: "7px", background: `${A(o?.bg)}`, color: "#0F172A", textAlign: "left", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                          <span style={{ flex: "1", minWidth: "0", fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap" }}>{S(o?.label)}</span>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", height: "20px", padding: "0 8px", borderRadius: "999px", border: "1px solid #C4B5FD", background: "#F5F3FF", color: "#7C3AED", fontSize: "10.5px", fontWeight: "600", whiteSpace: "nowrap", flexShrink: "0" }}>
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" /></svg>
                            {S(o?.prov)}
                          </span>
                        </button>
                      </React.Fragment>)}
                    </div>
                  </>}
                </div>
              </>}
              {V.g?.hliBtns && <>
                <button className="scpv" onClick={V.g?.hliBtns?.ws} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 14px", borderRadius: "8px", background: "#12855F", color: "#fff", fontSize: "12.5px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                  Weather Station Details
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m9 6 6 6-6 6" /></svg>
                </button>
              </>}
              {V.g?.selector2 && <>
                <label style={{ position: "relative", display: "block", width: "clamp(130px,12vw,190px)" }}>
                  <span style={{ position: "absolute", top: "-6px", left: "9px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2", zIndex: "1" }}>{"Select "}{S(V.g?.selector2?.label)}</span>
                  <select className="scpg" value={V.g?.selector2?.value ?? ""} onChange={V.g?.selector2?.set} style={{ width: "100%", height: "34px", border: "1px solid #CBD5E1", borderRadius: "7px", outline: "0", background: "#fff", font: "inherit", fontSize: "12.5px", fontWeight: "500", color: "#0F172A", cursor: "pointer", padding: "0 10px" }}>
                    {L(V.g?.selector2?.opts).map((o, i23) => <React.Fragment key={i23}>
                      <option value={o?.v ?? ""}>{S(o?.label)}</option>
                    </React.Fragment>)}
                  </select>
                </label>
              </>}
              {V.g?.selector && <>
                <label style={{ position: "relative", display: "block", width: "clamp(150px,16vw,280px)" }}>
                  <span style={{ position: "absolute", top: "-6px", left: "9px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2", zIndex: "1" }}>{"Select "}{S(V.g?.selector?.label)}</span>
                  <select className="scpg" title={V.g?.stTitle} value={V.g?.selector?.value ?? ""} onChange={V.g?.selector?.set} style={{ width: "100%", height: "34px", border: "1px solid #CBD5E1", borderRadius: "7px", outline: "0", background: "#fff", font: "inherit", fontSize: "12.5px", fontWeight: "500", color: "#0F172A", cursor: "pointer", padding: "0 10px", textOverflow: "ellipsis" }}>
                    {L(V.g?.selector?.opts).map((o, i24) => <React.Fragment key={i24}>
                      <option value={o?.v ?? ""}>{S(o?.label)}</option>
                    </React.Fragment>)}
                  </select>
                </label>
              </>}
            </div>
          </>}
        </div>
      </>}
      {V.g?.hasBar && <>
        <div style={{ display: "flex", flexDirection: `${A(V.g?.barDir)}`, alignItems: "center", justifyContent: "space-between", gap: "8px 12px", flexWrap: "wrap", padding: "8px 12px", borderTop: `${A(V.g?.barBd)}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0", flexWrap: "wrap" }}>
            {V.g?.stStatus && <>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "24px", padding: "0 10px", borderRadius: "999px", background: `${A(V.g?.stBg)}`, color: `${A(V.g?.stFg)}`, fontSize: "12px", fontWeight: "600" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(V.g?.stDot)}`, boxShadow: `0 0 0 3px ${A(V.g?.stRing)}` }} />
                {S(V.g?.stStatus)}
              </span>
            </>}
            {V.g?.chips2 && <>
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", gap: "2px", flexWrap: "wrap", padding: "2px", borderRadius: "8px", background: "#F1F5F9" }}>
                  {L(V.g?.chips2).map((c, i25) => <React.Fragment key={i25}>
                    <button className="scp6 scpt" onClick={c?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "26px", padding: "0 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "600", display: "flex", alignItems: "center", gap: "6px", background: `${A(c?.bg)}`, color: `${A(c?.fg)}`, boxShadow: `${A(c?.sh)}`, transition: "background .15s,color .15s,transform .1s" }}>
                      {c?.dot && <>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: `${A(c?.dot)}` }} />
                      </>}
                      {c?.cal && <>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" /></svg>
                      </>}
                      {S(c?.label)}
                    </button>
                  </React.Fragment>)}
                </div>
                {V.g?.cPop && <>
                  <div style={{ position: "absolute", right: "0", top: "38px", zIndex: "46", width: "250px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", boxShadow: "0 18px 40px rgba(15,23,42,.16)", padding: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".06em", color: "#475569" }}>CUSTOM RANGE</span>
                    <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12.5px", color: "#334155" }}>
                      <span>From</span>
                      <input type="date" value={V.g?.cPop?.from ?? ""} onChange={V.g?.cPop?.setFrom} style={{ height: "36px", border: "1px solid #CBD5E1", borderRadius: "8px", font: "inherit", fontSize: "13px", padding: "0 10px", outline: "0", width: "100%", boxSizing: "border-box" }} />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12.5px", color: "#334155" }}>
                      <span>To</span>
                      <input type="date" value={V.g?.cPop?.to ?? ""} onChange={V.g?.cPop?.setTo} style={{ height: "36px", border: "1px solid #CBD5E1", borderRadius: "8px", font: "inherit", fontSize: "13px", padding: "0 10px", outline: "0", width: "100%", boxSizing: "border-box" }} />
                    </label>
                    <button className="scpu" onClick={V.g?.cPop?.apply} style={{ appearance: "none", border: "0", font: "inherit", margin: "4px 0 0", cursor: "pointer", height: "38px", borderRadius: "8px", background: "#15803D", color: "#fff", fontSize: "13px", fontWeight: "700" }}>Apply</button>
                  </div>
                </>}
              </div>
            </>}
            {V.g?.toggle && <>
              <button className="scp6 scpt" onClick={V.g?.toggle?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", fontWeight: "500", color: "#334155", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                <span style={{ width: "32px", height: "18px", borderRadius: "999px", background: `${A(V.g?.toggle?.bg)}`, position: "relative", transition: "background .15s" }}><span style={{ position: "absolute", top: "2px", left: `${A(V.g?.toggle?.knob)}`, width: "14px", height: "14px", borderRadius: "50%", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,.25)", transition: "left .15s" }} /></span>
                {S(V.g?.toggle?.label)}
              </button>
            </>}
            {V.g?.selectorL && <>
              <label style={{ position: "relative", display: "block", minWidth: "120px" }}>
                <span style={{ position: "absolute", top: "-6px", left: "9px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2", zIndex: "1" }}>{"Select "}{S(V.g?.selectorL?.label)}</span>
                <select className="scpg" value={V.g?.selectorL?.value ?? ""} onChange={V.g?.selectorL?.set} style={{ width: "100%", height: "34px", border: "1px solid #CBD5E1", borderRadius: "7px", outline: "0", background: "#fff", font: "inherit", fontSize: "12.5px", fontWeight: "500", color: "#0F172A", cursor: "pointer", padding: "0 10px" }}>
                  {L(V.g?.selectorL?.opts).map((o, i26) => <React.Fragment key={i26}>
                    <option value={o?.v ?? ""}>{S(o?.label)}</option>
                  </React.Fragment>)}
                </select>
              </label>
            </>}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px 12px", flexWrap: "wrap", marginLeft: "auto", justifyContent: "flex-end" }}>
            {V.g?.devInfo && <>
              <button className="scp2 scp6" onClick={V.g?.devInfo?.go} aria-expanded={V.g?.devInfo?.exp} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", padding: "3px 8px", borderRadius: "7px", background: `${A(V.g?.devInfo?.bg)}`, color: `${A(V.g?.devInfo?.fg)}`, fontSize: "11.5px", fontWeight: "500", whiteSpace: "nowrap", flexShrink: "0", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 11v5M12 8h.01" />
                </svg>
                <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                  Device Info
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", transform: `${A(V.g?.devInfo?.rot)}`, transition: "transform .18s" }}><path d="m6 9 6 6 6-6" /></svg>
                </span>
              </button>
            </>}
            {V.g?.prov && <>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "22px", padding: "0 9px", borderRadius: "999px", border: "1px solid #C4B5FD", background: "#F5F3FF", color: "#7C3AED", fontSize: "11px", fontWeight: "600", whiteSpace: "nowrap" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" /></svg>
                {S(V.g?.prov)}
              </span>
            </>}
            {V.g?.meta && <>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "#166534", whiteSpace: "nowrap", flexShrink: "0" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 0 3px rgba(34,197,94,.18)" }} />
                {S(V.g?.metaL)}
                <b style={{ fontWeight: "700", color: "#14532D" }}>{S(V.g?.metaV)}</b>
              </span>
            </>}
            {V.g?.stPick && <>
              <div style={{ position: "relative", width: "max-content", minWidth: "200px" }}>
                <span style={{ position: "absolute", top: "-6px", left: "9px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2", zIndex: "1" }}>{S(V.g?.stPick?.lbl)}</span>
                <button className="scpf scp6" onClick={V.g?.stPick?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", width: "100%", height: "34px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", display: "flex", alignItems: "center", gap: "6px", padding: "0 8px", color: "#0F172A", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                  <span style={{ flex: "1", minWidth: "0", textAlign: "left", fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap" }}>{S(V.g?.stPick?.cur?.label)}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", height: "20px", padding: "0 8px", borderRadius: "999px", border: "1px solid #C4B5FD", background: "#F5F3FF", color: "#7C3AED", fontSize: "10.5px", fontWeight: "600", whiteSpace: "nowrap", flexShrink: "0" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" /></svg>
                    {S(V.g?.stPick?.cur?.prov)}
                  </span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
                </button>
                {V.g?.stPick?.open && <>
                  <div onClick={V.g?.stPick?.toggle} style={{ position: "fixed", inset: "0", zIndex: "44" }} />
                  <div style={{ position: "absolute", right: "0", minWidth: "100%", width: "max-content", maxWidth: "min(420px,calc(100vw - 32px))", top: "40px", zIndex: "45", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", boxShadow: "0 16px 40px rgba(10,59,43,.16)", padding: "5px", display: "flex", flexDirection: "column", gap: "2px" }}>
                    {L(V.g?.stPick?.opts).map((o, i27) => <React.Fragment key={i27}>
                      <button className="scp2 scp6" onClick={o?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", padding: "9px", borderRadius: "7px", background: `${A(o?.bg)}`, color: "#0F172A", textAlign: "left", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                        <span style={{ flex: "1", minWidth: "0", fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap" }}>{S(o?.label)}</span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", height: "20px", padding: "0 8px", borderRadius: "999px", border: "1px solid #C4B5FD", background: "#F5F3FF", color: "#7C3AED", fontSize: "10.5px", fontWeight: "600", whiteSpace: "nowrap", flexShrink: "0" }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" /></svg>
                          {S(o?.prov)}
                        </span>
                      </button>
                    </React.Fragment>)}
                  </div>
                </>}
              </div>
            </>}
            {V.g?.hliBtns && <>
              <button className="scpv" onClick={V.g?.hliBtns?.ws} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 14px", borderRadius: "8px", background: "#12855F", color: "#fff", fontSize: "12.5px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                Weather Station Details
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m9 6 6 6-6 6" /></svg>
              </button>
            </>}
            {V.g?.selector2 && <>
              <label style={{ position: "relative", display: "block", width: "clamp(130px,12vw,190px)" }}>
                <span style={{ position: "absolute", top: "-6px", left: "9px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2", zIndex: "1" }}>{"Select "}{S(V.g?.selector2?.label)}</span>
                <select className="scpg" value={V.g?.selector2?.value ?? ""} onChange={V.g?.selector2?.set} style={{ width: "100%", height: "34px", border: "1px solid #CBD5E1", borderRadius: "7px", outline: "0", background: "#fff", font: "inherit", fontSize: "12.5px", fontWeight: "500", color: "#0F172A", cursor: "pointer", padding: "0 10px" }}>
                  {L(V.g?.selector2?.opts).map((o, i28) => <React.Fragment key={i28}>
                    <option value={o?.v ?? ""}>{S(o?.label)}</option>
                  </React.Fragment>)}
                </select>
              </label>
            </>}
            {V.g?.selector && <>
              <label style={{ position: "relative", display: "block", width: "clamp(150px,16vw,280px)" }}>
                <span style={{ position: "absolute", top: "-6px", left: "9px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2", zIndex: "1" }}>{"Select "}{S(V.g?.selector?.label)}</span>
                <select className="scpg" title={V.g?.stTitle} value={V.g?.selector?.value ?? ""} onChange={V.g?.selector?.set} style={{ width: "100%", height: "34px", border: "1px solid #CBD5E1", borderRadius: "7px", outline: "0", background: "#fff", font: "inherit", fontSize: "12.5px", fontWeight: "500", color: "#0F172A", cursor: "pointer", padding: "0 10px", textOverflow: "ellipsis" }}>
                  {L(V.g?.selector?.opts).map((o, i29) => <React.Fragment key={i29}>
                    <option value={o?.v ?? ""}>{S(o?.label)}</option>
                  </React.Fragment>)}
                </select>
              </label>
            </>}
          </div>
        </div>
      </>}
      {V.g?.infoPop && <>
        <div onClick={V.g?.devInfo?.go} style={{ position: "fixed", inset: "0", zIndex: "29" }} />
        <div style={{ position: "absolute", right: "10px", top: "calc(100% + 6px)", zIndex: "30", width: "min(820px,calc(100vw - 48px))", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "14px", boxShadow: "0 22px 50px rgba(15,23,42,.2)", padding: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 2px 10px" }}>
            <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>{"Device info · "}{S(V.g?.stTitle)}</span>
            <button className="scpw scp6" onClick={V.g?.devInfo?.go} title="Close" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "28px", height: "28px", borderRadius: "7px", color: "#64748B", fontSize: "18px", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>×</button>
          </div>
          {V.g?.infoPop && <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "16px" }}>
              <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "18px 20px", display: "flex", flexDirection: "column" }}>
                <div style={{ fontWeight: "600", fontSize: "15px", marginBottom: "8px" }}>Device information</div>
                {L(V.g?.infoPop?.kv).map((r, i30) => <React.Fragment key={i30}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "10px 0", borderTop: "1px solid #F1F5F9", fontSize: "13.5px" }}>
                    <span style={{ color: "#64748b" }}>{S(r?.k)}</span>
                    <span style={{ fontWeight: "500", textAlign: "right" }}>{S(r?.v)}</span>
                  </div>
                </React.Fragment>)}
              </div>
              <div style={{ position: "relative", minHeight: "360px", borderRadius: "16px", overflow: "hidden", border: "1px solid #E2E8F0", background: "#1d3328", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)" }}>
                <div ref={V.infoRef} style={{ position: "absolute", inset: "0" }} />
                <span style={{ position: "absolute", left: "12px", top: "12px", zIndex: "5", display: "flex", alignItems: "center", gap: "8px", padding: "7px 11px", borderRadius: "10px", background: "rgba(10,59,43,.55)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,.2)", color: "#fff", fontSize: "12.5px", fontWeight: "500" }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#0EA5A4", boxShadow: "0 0 0 3px rgba(14,165,164,.3)" }} />
                  {S(V.g?.infoPop?.name)}
                </span>
                <span style={{ position: "absolute", left: "12px", bottom: "12px", zIndex: "5", padding: "6px 10px", borderRadius: "8px", background: "rgba(10,59,43,.55)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", color: "#fff", fontSize: "12px" }}>{S(V.g?.infoPop?.coords)}</span>
              </div>
            </div>
          </>}
        </div>
      </>}
    </div>
    </>
  );
}
