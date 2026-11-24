import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';
import GHasNavRow from './GHasNavRow.jsx';
import GFc from './GFc.jsx';
import GHist from './GHist.jsx';
import GUpw from './GUpw.jsx';
import GBio from './GBio.jsx';
import GDv from './GDv.jsx';
import GAx from './GAx.jsx';
import GBench from './GBench.jsx';
import GCharts from './GCharts.jsx';
export default function NotHome({ V }) {
  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {V.showHdr && <>
        <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: `${A(V.g?.hdrR)}`, boxShadow: "0 1px 2px rgba(15,23,42,.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap", padding: "10px 20px 8px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: "0" }}>
              <h1 style={{ margin: "0", fontSize: "21px", fontWeight: "600", letterSpacing: "-.01em", lineHeight: "1.25", color: "#0F172A" }}>{S(V.pageT)}</h1>
              <p style={{ margin: "0", color: "#64748B", fontSize: "13px", textWrap: "pretty" }}>{S(V.pageS)}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              {V.hasStationActions && <>
                <div style={{ position: "relative" }}>
                  <button className="scpo scp6" onClick={V.toggleMore} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 14px", borderRadius: "10px", background: "#043C2C", color: "#fff", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap", boxShadow: "0 1px 2px rgba(10,59,43,.25),inset 0 1px 0 rgba(255,255,255,.08)", transition: "background .15s,transform .1s" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="5" cy="12" r="1.8" />
                      <circle cx="12" cy="12" r="1.8" />
                      <circle cx="19" cy="12" r="1.8" />
                    </svg>
                    More Options
              
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", transform: `${A(V.moreRot)}`, transition: "transform .18s" }}><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  {V.moreOpen && <>
                    <div style={{ position: "absolute", right: "0", top: "44px", zIndex: "45", width: "290px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", boxShadow: "0 18px 40px rgba(15,23,42,.14),0 2px 6px rgba(15,23,42,.06)", padding: "6px", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <div style={{ padding: "8px 10px 6px", fontSize: "11px", fontWeight: "600", letterSpacing: ".06em", color: "#94A3B8" }}>{S(V.moreTitle)}</div>
                      {L(V.moreItems).map((m, i14) => <React.Fragment key={i14}>
                        <button className="scp2 scp6" onClick={m?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", padding: "10px", borderRadius: "10px", textAlign: "left", color: "#0F172A", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                          <span style={{ width: "34px", height: "34px", borderRadius: "9px", flexShrink: "0", display: "flex", alignItems: "center", justifyContent: "center", background: `${A(m?.bg)}`, color: `${A(m?.fg)}` }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={m?.d} /></svg></span>
                          <span style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: "0" }}>
                            <span style={{ fontSize: "13.5px", fontWeight: "600" }}>{S(m?.label)}</span>
                            <span style={{ fontSize: "12px", color: "#64748B" }}>{S(m?.sub)}</span>
                          </span>
                        </button>
                      </React.Fragment>)}
                    </div>
                  </>}
                </div>
              </>}
              {V.rg?.on && <>
                <div style={{ position: "relative" }}>
                  <button className="scpp" onClick={V.rg?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 14px", borderRadius: "10px", border: "1px solid #E2E8F0", background: "#fff", color: "#334155", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 11v5M12 8h.01" />
                    </svg>
                    Role guide
                  </button>
                  {V.rg?.open && <>
                    <div onClick={V.rg?.toggle} style={{ position: "fixed", inset: "0", zIndex: "44" }} />
                    <div style={{ position: "absolute", right: "0", top: "46px", zIndex: "45", width: "min(680px,calc(100vw - 48px))", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 18px 44px rgba(15,23,42,.16)", padding: "14px", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "10px" }}>
                      {L(V.rg?.cards).map((r, i15) => <React.Fragment key={i15}>
                        <div style={{ border: "1px solid #E2E8F0", borderRadius: "12px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px", background: "#fff", minWidth: "0" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#0F172A" }}>
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={r?.fg} style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={r?.d} /></svg>
                            {S(r?.name)}
                          </span>
                          <span style={{ fontSize: "12px", color: "#475569", lineHeight: "1.45" }}>{S(r?.desc)}</span>
                        </div>
                      </React.Fragment>)}
                    </div>
                  </>}
                </div>
              </>}
              {V.hasAction && <>
                <button className="scpo scp6" onClick={V.pageAction?.go} style={{ appearance: "none", border: `1px solid ${A(V.pageAction?.bd)}`, font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 14px", borderRadius: "10px", background: `${A(V.pageAction?.bg)}`, color: `${A(V.pageAction?.fg)}`, fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", boxShadow: "0 1px 2px rgba(10,59,43,.25),inset 0 1px 0 rgba(255,255,255,.08)", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={V.pageAction?.d} /></svg>
                  {S(V.pageAction?.label)}
                </button>
              </>}
              {V.hliInfo && <>
                <button className="scpq" onClick={V.hliInfo} title="What is HLI and how is it calculated?" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "36px", height: "36px", borderRadius: "50%", background: "#EAB308", color: "#422006", fontSize: "17px", fontStyle: "italic", fontFamily: "Georgia,serif", fontWeight: "700", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 2px rgba(10,59,43,.2)" }}>i</button>
              </>}
            </div>
          </div>
          {V.flatTabs && <>
            <div role="tablist" style={{ display: "flex", borderTop: "1px solid #EEF2F6", borderRadius: "0 0 12px 12px", overflow: "hidden" }}>
              {L(V.tabs).map((t, i16) => <React.Fragment key={i16}>
                <button className="scpr" role="tab" onClick={t?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", flex: "1 1 0", height: "38px", fontSize: "13.5px", fontWeight: `${A(t?.fw)}`, color: `${A(t?.fg)}`, background: `${A(t?.fbg)}`, boxShadow: `${A(t?.fsh)}`, transition: "background .15s,color .15s" }}>{S(t?.label)}</button>
              </React.Fragment>)}
            </div>
          </>}
          {V.segTabs && <>
            <div style={{ padding: "0 20px 10px" }}>
              <div role="tablist" style={{ display: "flex", gap: "2px", padding: "3px", borderRadius: "10px", background: "#F2F7F5", border: "1px solid #E3EDE8" }}>
                {L(V.tabs).map((t, i17) => <React.Fragment key={i17}>
                  <button className="scpr scp4" role="tab" onClick={t?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", flex: "1 1 0", minWidth: "0", height: "30px", padding: "0 12px", borderRadius: "7px", fontSize: "13.5px", fontWeight: `${A(t?.fw)}`, whiteSpace: "nowrap", textAlign: "center", color: `${A(t?.fg)}`, background: `${A(t?.bg)}`, boxShadow: `${A(t?.sh)}`, transition: "color .15s,background .15s,box-shadow .15s,transform .1s" }}>{S(t?.label)}</button>
                </React.Fragment>)}
              </div>
            </div>
          </>}
        </div>
      </>}
    </div>
    {V.g?.hasNavRow && <GHasNavRow V={V} />}
    {V.g?.zfd && <>
      <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", padding: "12px 16px" }}>
          <button className="scpo" onClick={V.g?.zfd?.back} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 14px 0 10px", borderRadius: "8px", border: "1px solid #043C2C", background: "#043C2C", color: "#fff", fontSize: "12.5px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px", boxShadow: "0 1px 2px rgba(10,59,43,.25)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m15 6-6 6 6 6" /></svg>
            {S(V.g?.zfd?.bl)}
          </button>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <label style={{ position: "relative", display: "block", width: "230px" }}>
              <span style={{ position: "absolute", top: "-6px", left: "9px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2", zIndex: "1" }}>Select Zone</span>
              <select value={V.g?.zfd?.zsel?.value ?? ""} onChange={V.g?.zfd?.zsel?.set} style={{ width: "100%", height: "36px", border: "1px solid #CBD5E1", borderRadius: "8px", outline: "0", background: "#fff", font: "inherit", fontSize: "13px", fontWeight: "600", color: "#0F172A", padding: "0 10px", cursor: "pointer" }}>
                {L(V.g?.zfd?.zsel?.opts).map((o, i31) => <React.Fragment key={i31}>
                  <option value={o?.v ?? ""}>{S(o?.l)}</option>
                </React.Fragment>)}
              </select>
            </label>
            {V.g?.zfd?.dsel && <>
            <label style={{ position: "relative", display: "block", width: "230px" }}>
              <span style={{ position: "absolute", top: "-6px", left: "9px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2", zIndex: "1" }}>{"Select "}{S(V.g?.zfd?.dsel?.lbl)}</span>
              <select value={V.g?.zfd?.dsel?.value ?? ""} onChange={V.g?.zfd?.dsel?.set} style={{ width: "100%", height: "36px", border: "1px solid #CBD5E1", borderRadius: "8px", outline: "0", background: "#fff", font: "inherit", fontSize: "13px", fontWeight: "600", color: "#0F172A", padding: "0 10px", cursor: "pointer" }}>
                {L(V.g?.zfd?.dsel?.opts).map((o, i32) => <React.Fragment key={i32}>
                  <option value={o?.v ?? ""}>{S(o?.l)}</option>
                </React.Fragment>)}
              </select>
            </label>
            </>}
          </div>
        </div>
        {V.g?.zfd?.secs && <>
          <div role="tablist" style={{ display: "flex", gap: "2px", flexWrap: "wrap", padding: "0 8px", borderTop: "1px solid #F1F5F9" }}>
            {L(V.g?.zfd?.secs).map((s, i33) => <React.Fragment key={i33}>
              <button role="tab" aria-selected={s?.sel} onClick={s?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "7px", padding: "11px 12px", fontSize: "13px", fontWeight: `${A(s?.fw)}`, color: `${A(s?.fg)}`, boxShadow: `inset 0 -2px 0 ${A(s?.ind)}` }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={s?.ic} style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={s?.d} /></svg>
                {S(s?.label)}
              </button>
            </React.Fragment>)}
          </div>
        </>}
      </div>
    </>}
    {V.g?.zsoil && <>
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {L(V.g?.zsoil).map((z, i34) => <React.Fragment key={i34}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: `${A(z?.c)}` }} />
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A" }}>{S(z?.name)}</span>
              <span style={{ fontSize: "12px", color: "#64748B" }}>{S(z?.sub)}</span>
            </div>
            {z?.empty && <>
              <div style={{ padding: "12px", border: "1px dashed #CBD5E1", borderRadius: "12px", fontSize: "12.5px", color: "#64748B" }}>No soil probes shared in this zone yet.</div>
            </>}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(260px,1fr))", gap: "14px", overflowX: "auto" }}>
              {L(z?.cards).map((c, i35) => <React.Fragment key={i35}>
                <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", overflow: "hidden", boxShadow: "0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center", padding: "16px 14px 8px 16px" }}>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", flexShrink: "0", background: "#7A4A35", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 21V9M8 13l4-4 4 4M6 21h12" /></svg></span>
                    <div style={{ flex: "1", minWidth: "0", fontWeight: "700", fontSize: "14px", lineHeight: "1.25", color: "#0F172A", overflowWrap: "anywhere" }}>{S(c?.name)}</div>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: "700", letterSpacing: ".04em", padding: "3px 9px", borderRadius: "999px", background: `${A(c?.lbg)}`, color: `${A(c?.lfg)}` }}>
                      <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(c?.ldot)}` }} />
                      {S(c?.lt)}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", padding: "0 16px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "500", padding: "3px 12px", borderRadius: "999px", border: "1px solid #CBD5E1", background: "#fff", color: "#334155", whiteSpace: "nowrap" }}>Soil Probe</span>
                    <label style={{ display: "flex", alignItems: "center", gap: "6px", height: "30px", padding: "0 6px 0 10px", border: "1px solid #CBD5E1", borderRadius: "8px", fontSize: "12px", color: "#475569" }}>
                      Depth
                      <select value={c?.depth ?? ""} onChange={c?.setDepth} style={{ border: "0", outline: "0", background: "transparent", font: "inherit", fontSize: "12px", fontWeight: "700", color: "#0F172A", cursor: "pointer" }}>
                        <option value="10 cm">10 cm</option>
                        <option value="30 cm">30 cm</option>
                        <option value="60 cm">60 cm</option>
                        <option value="90 cm">90 cm</option>
                      </select>
                    </label>
                  </div>
                  <div style={{ padding: "8px 16px 10px", fontSize: "12px", color: "#64748B", fontFamily: "ui-monospace,Menlo,monospace" }}>{S(c?.serial)}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "8px", padding: "0 16px" }}>
                    {L(c?.tiles).map((t, i36) => <React.Fragment key={i36}>
                      <div style={{ background: "#F3F5F4", borderRadius: "10px", padding: "9px 10px", display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: "600", color: "#334155", whiteSpace: "nowrap", overflow: "hidden" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={t?.c} style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={t?.p} /></svg>
                          {S(t?.l)}
                        </span>
                        <span style={{ display: "flex", alignItems: "baseline", gap: "3px", whiteSpace: "nowrap" }}>
                          <span style={{ fontSize: "18px", fontWeight: "700", color: "#0F172A" }}>{S(t?.v)}</span>
                          <span style={{ fontSize: "11px", color: "#64748B" }}>{S(t?.u)}</span>
                        </span>
                        <span style={{ fontSize: "11px", color: "#64748B" }}>{S(t?.sub)}</span>
                      </div>
                    </React.Fragment>)}
                  </div>
                  <div style={{ padding: "12px 16px 14px", fontSize: "12.5px", color: "#475569" }}>{S(c?.lastS)}</div>
                  <button className="scpx" onClick={c?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "auto 0 0", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", height: "42px", background: "#0F7F8E", color: "#fff", fontSize: "13.5px", fontWeight: "700" }}>View details →</button>
                </div>
              </React.Fragment>)}
            </div>
          </div>
        </React.Fragment>)}
      </div>
    </>}
    {V.g?.fc && <GFc V={V} />}
    {V.g?.hist && <GHist V={V} />}
    {V.g?.upw && <GUpw V={V} />}
    {V.g?.dp && <>
      {V.g?.dp?.detail && <>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: "0" }}>
              <button className="scp2 scp11" onClick={V.g?.dp?.back} title="Back to data sources" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "34px", height: "34px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#0F172A", transition: "background .15s,transform .1s" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M19 12H5M11 6l-6 6 6 6" /></svg></button>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "16px", fontWeight: "600", color: "#0F172A" }}>{S(V.g?.dp?.title)}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", height: "20px", padding: "0 9px", borderRadius: "999px", background: `${A(V.g?.dp?.pill?.bg)}`, color: `${A(V.g?.dp?.pill?.fg)}`, border: `1px solid ${A(V.g?.dp?.pill?.bd)}`, fontSize: "11.5px", fontWeight: "600" }}>{S(V.g?.dp?.type)}</span>
                </div>
                <span style={{ fontSize: "12.5px", color: "#64748B" }}>{S(V.g?.dp?.desc)}</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              {V.g?.dp?.hasSrc && <>
                <div style={{ position: "relative", minWidth: "240px", maxWidth: "100%" }}>
                  <span style={{ position: "absolute", top: "-6px", left: "9px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2", zIndex: "1" }}>Select source</span>
                  <button className="scpf" onClick={V.g?.dp?.src?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", width: "100%", height: "34px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", display: "flex", alignItems: "center", gap: "8px", padding: "0 10px", color: "#0F172A" }}>
                    <span style={{ flex: "1", minWidth: "0", textAlign: "left", fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.g?.dp?.src?.cur?.l)}</span>
                    {V.g?.dp?.src?.cur?.prov && <>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", height: "20px", padding: "0 8px", borderRadius: "999px", border: "1px solid #C4B5FD", background: "#F5F3FF", color: "#7C3AED", fontSize: "10.5px", fontWeight: "600", whiteSpace: "nowrap", flexShrink: "0" }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" /></svg>
                        {S(V.g?.dp?.src?.cur?.prov)}
                      </span>
                    </>}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  {V.g?.dp?.src?.open && <>
                    <div onClick={V.g?.dp?.src?.toggle} style={{ position: "fixed", inset: "0", zIndex: "44" }} />
                    <div style={{ position: "absolute", right: "0", minWidth: "100%", width: "max-content", maxWidth: "min(420px,calc(100vw - 32px))", top: "40px", zIndex: "45", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", boxShadow: "0 16px 40px rgba(10,59,43,.16)", padding: "5px", display: "flex", flexDirection: "column", gap: "2px" }}>
                      {L(V.g?.dp?.src?.opts).map((o, i100) => <React.Fragment key={i100}>
                        <button className="scp2" onClick={o?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", padding: "9px", borderRadius: "7px", background: `${A(o?.bg)}`, color: "#0F172A", textAlign: "left" }}>
                          <span style={{ flex: "1", minWidth: "0", fontSize: "12.5px", fontWeight: "500", whiteSpace: "nowrap" }}>{S(o?.l)}</span>
                          {o?.prov && <>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", height: "20px", padding: "0 8px", borderRadius: "999px", border: "1px solid #C4B5FD", background: "#F5F3FF", color: "#7C3AED", fontSize: "10.5px", fontWeight: "600", whiteSpace: "nowrap", flexShrink: "0" }}>
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" /></svg>
                              {S(o?.prov)}
                            </span>
                          </>}
                        </button>
                      </React.Fragment>)}
                    </div>
                  </>}
                </div>
              </>}
              <button className="scp12 scp6" onClick={V.g?.dp?.refresh} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 12px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", transition: "background .15s,border-color .15s,color .15s,transform .1s", border: "1px solid #043C2C", background: "#fff", color: "#043C2C" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7" /></svg>
                Refresh
              </button>
              <button className="scpy scp6" onClick={V.g?.dp?.toggleFilt} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 12px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", transition: "background .15s,border-color .15s,color .15s,transform .1s", border: "1px solid transparent", background: `${A(V.g?.dp?.filtBg)}`, color: `${A(V.g?.dp?.filtFg)}` }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}><path d="M4 6h16M7 12h10M10 18h4" /></svg>
                Filter
              </button>
              <button className="scp3 scp6" onClick={V.g?.dp?.exp} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 12px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", transition: "background .15s,border-color .15s,color .15s,transform .1s", border: "1px solid #043C2C", background: "#043C2C", color: "#fff", boxShadow: "0 1px 2px rgba(4,60,44,.25)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>
                Export CSV
              </button>
            </div>
            {V.g?.dp?.filtOpen && <>
              <div style={{ flexBasis: "100%", display: "flex", alignItems: "center", gap: "10px", paddingTop: "10px", borderTop: "1px solid #F1F5F9" }}>
                <span style={{ fontSize: "12.5px", color: "#475569", fontWeight: "500" }}>Period</span>
                <div style={{ display: "flex", gap: "2px", padding: "2px", borderRadius: "8px", background: "#F1F5F9" }}>
                  {L(V.g?.dp?.pers).map((pr, i101) => <React.Fragment key={i101}>
                    <button className="scpr" onClick={pr?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "26px", padding: "0 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "600", background: `${A(pr?.bg)}`, color: `${A(pr?.fg)}`, boxShadow: `${A(pr?.sh)}`, transition: "background .15s,color .15s" }}>{S(pr?.l)}</button>
                  </React.Fragment>)}
                </div>
              </div>
            </>}
          </div>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <div style={{ minWidth: `${A(V.g?.dp?.minW)}` }}>
                <div style={{ display: "flex", borderBottom: "1px solid #E2E8F0", background: "#fff" }}>
                  {L(V.g?.dp?.cols).map((c, i102) => <React.Fragment key={i102}>
                    <span style={{ flex: "1 0 150px", padding: "14px 14px", fontSize: "10.5px", fontWeight: "700", letterSpacing: ".06em", color: "#475569", whiteSpace: "nowrap" }}>{S(c?.c)}</span>
                  </React.Fragment>)}
                </div>
                {L(V.g?.dp?.rows).map((r, i103) => <React.Fragment key={i103}>
                  <div className="scp12" style={{ display: "flex", background: `${A(r?.bg)}`, borderBottom: "1px solid #F1F5F9" }}>
                    {L(r?.cells).map((cl, i104) => <React.Fragment key={i104}>
                      <span style={{ flex: "1 0 150px", padding: "11px 14px", fontFamily: "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace", fontSize: "12px", color: "#0F172A", whiteSpace: "nowrap" }}>{S(cl?.v)}</span>
                    </React.Fragment>)}
                  </div>
                </React.Fragment>)}
              </div>
            </div>
            <div style={{ padding: "12px 16px", fontSize: "12.5px", color: "#64748B", borderTop: "1px solid #E2E8F0" }}>{S(V.g?.dp?.count)}</div>
          </div>
        </div>
      </>}
    </>}
    {V.g?.dpList && <>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "10px 12px", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 280px", display: "flex", alignItems: "center", gap: "8px", height: "36px", padding: "0 12px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input value={V.g?.dp?.q ?? ""} onChange={V.g?.dp?.setQ} placeholder="Search data…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13.5px", background: "transparent", color: "#0F172A" }} />
          </div>
          <label style={{ display: "flex", alignItems: "center", gap: "7px", height: "36px", padding: "0 10px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", cursor: "pointer" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
              <ellipse cx="12" cy="5" rx="8" ry="3" />
              <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
            </svg>
            <select value={V.g?.dp?.type ?? ""} onChange={V.g?.dp?.setType} style={{ border: "0", outline: "0", background: "transparent", font: "inherit", fontSize: "13px", fontWeight: "500", color: "#0F172A", cursor: "pointer" }}>
              {L(V.g?.dp?.typeOpts).map((o, i105) => <React.Fragment key={i105}>
                <option value={o?.v ?? ""}>{S(o?.label)}</option>
              </React.Fragment>)}
            </select>
          </label>
          <button className="scp13 scp11" onClick={V.g?.dp?.toggleSort} data-tip={V.g?.dp?.sortTip} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #CBD5E1", background: "#fff", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .15s,transform .1s" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", transform: `${A(V.g?.dp?.sortRot)}` }}><path d="M4 6h7M4 12h5M4 18h3M17 4v16M14 17l3 3 3-3" /></svg></button>
          <div style={{ display: "flex", border: "1px solid #CBD5E1", borderRadius: "8px", overflow: "hidden" }}>
            <button onClick={V.g?.dp?.setGrid} title="Card view" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", width: "44px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", background: `${A(V.g?.dp?.gBg)}`, color: `${A(V.g?.dp?.gFg)}`, transition: "background .15s,color .15s" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9" }}><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" /></svg></button>
            <button onClick={V.g?.dp?.setTable} title="Table view" style={{ appearance: "none", border: "0", borderLeft: "1px solid #CBD5E1", font: "inherit", margin: "0", cursor: "pointer", width: "44px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", background: `${A(V.g?.dp?.tBg)}`, color: `${A(V.g?.dp?.tFg)}`, transition: "background .15s,color .15s" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9" }}><path d="M3 5h18v14H3zM3 10h18M3 15h18M9 5v14" /></svg></button>
          </div>
          <button className="scp3" onClick={V.g?.dp?.openUp} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", borderRadius: "8px", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", transition: "background .15s", height: "36px", padding: "0 16px", border: "1px solid #043C2C", background: "#043C2C", color: "#fff", fontWeight: "600", boxShadow: "0 1px 2px rgba(4,60,44,.25)" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 16V4M7 9l5-5 5 5M5 20h14" /></svg>
            Upload data
          </button>
        </div>
        {V.g?.dp?.grid && <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,300px),1fr))", gap: "14px" }}>
            {L(V.g?.dp?.items).map((it, i106) => <React.Fragment key={i106}>
              <div className="scp14" style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 6px 18px rgba(15,23,42,.035)", display: "flex", flexDirection: "column", transition: "box-shadow .15s,border-color .15s" }}>
                <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: "8px", flex: "1" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>{S(it?.t)}</span>
                  <div><span style={{ display: "inline-flex", alignItems: "center", height: "20px", padding: "0 9px", borderRadius: "999px", background: `${A(it?.pill?.bg)}`, color: `${A(it?.pill?.fg)}`, border: `1px solid ${A(it?.pill?.bd)}`, fontSize: "11.5px", fontWeight: "600" }}>{S(it?.type)}</span></div>
                  <span style={{ fontSize: "13px", color: "#475569" }}>{S(it?.desc)}</span>
                  <span style={{ fontSize: "12px", color: "#64748B" }}>{S(it?.n)}{" · Updated "}{S(it?.upd)}</span>
                </div>
                <div style={{ padding: "12px 18px", borderTop: "1px solid #F1F5F9", display: "flex", gap: "8px" }}>
                  <button className="scp3 scp6" onClick={it?.exp} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 12px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", transition: "background .15s,border-color .15s,color .15s,transform .1s", border: "1px solid #043C2C", background: "#043C2C", color: "#fff" }}>Export</button>
                  <button className="scp12 scp6" onClick={it?.view} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 12px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", transition: "background .15s,border-color .15s,color .15s,transform .1s", border: "1px solid #043C2C", background: "#fff", color: "#043C2C" }}>View Data</button>
                </div>
              </div>
            </React.Fragment>)}
          </div>
        </>}
        {V.g?.dp?.table && <>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", overflowX: "auto" }}>
            <div style={{ minWidth: "760px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr .9fr 1.8fr 1fr 1.1fr 190px", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #E2E8F0", fontSize: "10.5px", fontWeight: "700", letterSpacing: ".06em", color: "#475569" }}>
                <span>NAME</span>
                <span>TYPE</span>
                <span>DESCRIPTION</span>
                <span>RECORDS</span>
                <span>UPDATED</span>
                <span />
              </div>
              {L(V.g?.dp?.items).map((it, i107) => <React.Fragment key={i107}>
                <div className="scp9" style={{ display: "grid", gridTemplateColumns: "1.2fr .9fr 1.8fr 1fr 1.1fr 190px", gap: "12px", alignItems: "center", padding: "10px 16px", borderBottom: "1px solid #F1F5F9", fontSize: "13px", color: "#0F172A" }}>
                  <span style={{ fontWeight: "600" }}>{S(it?.t)}</span>
                  <span><span style={{ display: "inline-flex", alignItems: "center", height: "20px", padding: "0 9px", borderRadius: "999px", background: `${A(it?.pill?.bg)}`, color: `${A(it?.pill?.fg)}`, border: `1px solid ${A(it?.pill?.bd)}`, fontSize: "11.5px", fontWeight: "600" }}>{S(it?.type)}</span></span>
                  <span style={{ color: "#475569" }}>{S(it?.desc)}</span>
                  <span style={{ color: "#475569" }}>{S(it?.n)}</span>
                  <span style={{ color: "#475569" }}>{S(it?.upd)}</span>
                  <span style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                    <button className="scp3 scp6" onClick={it?.exp} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 12px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", transition: "background .15s,border-color .15s,color .15s,transform .1s", height: "30px", border: "1px solid #043C2C", background: "#043C2C", color: "#fff", fontSize: "12.5px" }}>Export</button>
                    <button className="scp12 scp6" onClick={it?.view} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 12px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", transition: "background .15s,border-color .15s,color .15s,transform .1s", height: "30px", border: "1px solid #043C2C", background: "#fff", color: "#043C2C", fontSize: "12.5px" }}>View Data</button>
                  </span>
                </div>
              </React.Fragment>)}
            </div>
          </div>
        </>}
        <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "12px 16px", fontSize: "12.5px", color: "#475569" }}>{S(V.g?.dp?.count)}</div>
      </div>
    </>}
    {V.g?.note && <>
      <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "12px 14px", borderRadius: "12px", background: "#fffbeb", border: "1px solid #fde68a", color: "#92400e", fontSize: "13.5px", lineHeight: "1.5" }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", marginTop: "1px", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
          <path d="M12 3 2 20h20z" />
          <path d="M12 10v4M12 17h.01" />
        </svg>
        {S(V.g?.note)}
      </div>
    </>}
    {V.g?.dvd && <>
      <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column", position: "relative", zIndex: "6" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", padding: "12px 16px" }}>
          <button className="scp2" onClick={V.g?.dvd?.back} title="Back to devices" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "30px", height: "30px", borderRadius: "8px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M19 12H5M11 6l-6 6 6 6" /></svg></button>
          <span style={{ width: "38px", height: "38px", borderRadius: "10px", background: `${A(V.g?.dvd?.ibg)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={V.g?.dvd?.ic} /></svg></span>
          <div style={{ position: "relative" }}>
            <button className="scp9" onClick={V.g?.dvd?.toggle} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 12px 0 16px", borderRadius: "8px", border: "1px solid #E2E8F0", background: "#fff", color: "#0F172A", fontSize: "14.5px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap" }}>
              {S(V.g?.dvd?.name)}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#334155" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
            </button>
            {V.g?.dvd?.dd && <>
              <div onClick={V.g?.dvd?.toggle} style={{ position: "fixed", inset: "0", zIndex: "40" }} />
              <div onClick={V.g?.dvd?.stop} style={{ position: "absolute", top: "44px", left: "0", zIndex: "41", width: "min(520px,calc(100vw - 40px))", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", boxShadow: "0 18px 44px rgba(15,23,42,.18)", display: "grid", gridTemplateColumns: "minmax(0,.9fr) minmax(0,1.1fr)", overflow: "hidden" }}>
                <div style={{ padding: "12px 8px", borderRight: "1px solid #EEF2F6", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".06em", color: "#64748B", padding: "0 8px 8px" }}>CATEGORIES</span>
                  {L(V.g?.dvd?.cats).map((c, i108) => <React.Fragment key={i108}>
                    <button className="scp2" onClick={c?.go} style={{ appearance: "none", border: "0", background: `${A(c?.bg)}`, font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", padding: "9px 10px", borderRadius: "8px", fontSize: "13px", fontWeight: `${A(c?.fw)}`, color: "#0F172A", textAlign: "left" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F766E" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", flexShrink: "0" }}><path d={c?.d} /></svg>
                      <span style={{ flex: "1" }}>{S(c?.l)}</span>
                      <span style={{ fontSize: "11.5px", fontWeight: "600", padding: "1px 8px", borderRadius: "999px", background: "#E2E8F0", color: "#475569" }}>{S(c?.n)}</span>
                    </button>
                  </React.Fragment>)}
                </div>
                <div style={{ padding: "12px 8px", display: "flex", flexDirection: "column", gap: "2px", maxHeight: "320px", overflowY: "auto" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".06em", color: "#64748B", padding: "0 8px 8px" }}>DEVICES</span>
                  {L(V.g?.dvd?.list).map((d, i109) => <React.Fragment key={i109}>
                    <button className="scp2" onClick={d?.go} style={{ appearance: "none", border: "0", background: `${A(d?.bg)}`, font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", borderRadius: "8px", textAlign: "left" }}>
                      <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "1px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "600", color: `${A(d?.fg)}` }}>{S(d?.l)}</span>
                        <span style={{ fontSize: "11.5px", color: "#64748B", fontFamily: "ui-monospace,Menlo,monospace" }}>{S(d?.id)}</span>
                      </span>
                      {d?.on && <>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0B6B4B" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                      </>}
                    </button>
                  </React.Fragment>)}
                </div>
              </div>
            </>}
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "24px", padding: "0 10px", borderRadius: "999px", border: "1px solid #C4B5FD", background: "#F5F3FF", color: "#6D28D9", fontSize: "12px", fontWeight: "600" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" /></svg>
            {S(V.g?.dvd?.prov)}
          </span>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", flex: "0 0 auto" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "13px", color: "#475569", whiteSpace: "nowrap" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: `${A(V.g?.dvd?.ldot)}` }} />
              {"Last sampling: "}
              <strong style={{ color: "#0F172A", whiteSpace: "nowrap" }}>{S(V.g?.dvd?.last)}</strong>
            </span>
            <button className="scp15" onClick={V.g?.dvd?.full} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "32px", padding: "0 12px", borderRadius: "8px", border: "1px solid #0B6B4B", background: "#fff", color: "#0B6B4B", fontSize: "12.5px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
              Fullscreen
            </button>
            <button className="scp16" onClick={V.g?.dvd?.refresh} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "32px", padding: "0 12px", borderRadius: "8px", border: "1px solid #BBE5CC", background: "#F0FDF4", color: "#0B6B4B", fontSize: "12.5px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7" /></svg>
              Refresh
            </button>
          </div>
        </div>
        <div role="tablist" style={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: "minmax(120px,1fr)", borderTop: "1px solid #EEF2F6", overflowX: "auto", borderRadius: "0 0 12px 12px" }}>
          {L(V.g?.dvd?.tabs).map((t, i110) => <React.Fragment key={i110}>
            <button className="scp2" role="tab" onClick={t?.go} style={{ appearance: "none", border: "0", background: `${A(t?.bg)}`, font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", height: "40px", padding: "0 12px", fontSize: "13px", fontWeight: "600", color: `${A(t?.fg)}`, boxShadow: `inset 0 -2px 0 ${A(t?.ind)}`, whiteSpace: "nowrap" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={t?.d} /></svg>
              {S(t?.l)}
            </button>
          </React.Fragment>)}
        </div>
      </div>
    </>}
    {V.g?.embedWx && <>
      <div style={{ borderRadius: "12px", overflow: "hidden", background: "#F8FAFC" }}><DeviceDashboard embed="weather" tab={V.g?.embedTab} device={V.g?.embedDev} /></div>
    </>}
    {V.g?.embedHli && <>
      <div style={{ padding: "4px 0 8px" }}><HLIDashboard embed={true} section={V.g?.embedHli} farm={V.g?.hliFarm} pen={V.g?.hliPen} infoTick={V.g?.hliTick} provider="Jane's Weather (Australia)" /></div>
    </>}
    {V.g?.embedSoil && <>
      <div className="ns" style={{ borderRadius: "12px", overflow: "hidden", background: "#F8FAFC", margin: "0 -16px" }}><DeviceDashboard embed="soil" tab={V.g?.embedTab} device={V.g?.embedDev} /></div>
    </>}
    {V.g?.soon && <>
      <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "48px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "14px" }}>
        <span style={{ width: "88px", height: "88px", borderRadius: "50%", background: "#E6F0EA", color: "#2F7A4F", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg></span>
        <div style={{ fontSize: "18px", fontWeight: "700", color: "#0F172A" }}>{S(V.g?.soon?.t)}</div>
        <span style={{ height: "24px", padding: "0 12px", borderRadius: "999px", background: "#F1F5F9", color: "#475569", fontSize: "12px", fontWeight: "600", display: "inline-flex", alignItems: "center" }}>Coming soon</span>
        <p style={{ margin: "0", maxWidth: "560px", fontSize: "13.5px", lineHeight: "1.6", color: "#475569", textWrap: "pretty" }}>{S(V.g?.soon?.x)}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "12px", width: "100%", maxWidth: "820px", marginTop: "10px" }}>
          {L(V.g?.soon?.items).map((it, i111) => <React.Fragment key={i111}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", textAlign: "left", padding: "14px 16px", border: "1px solid #EEF2F4", borderRadius: "12px", background: "#F8FAFB" }}>
              <span style={{ width: "30px", height: "30px", borderRadius: "9px", background: "#E6F0EA", color: "#2F7A4F", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={it?.d} /></svg></span>
              <span style={{ fontSize: "13.5px", fontWeight: "600", color: "#0F172A" }}>{S(it?.t)}</span>
              <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#64748b" }}>{S(it?.x)}</span>
            </div>
          </React.Fragment>)}
        </div>
      </div>
    </>}
    {V.g?.bmStock && <>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "12px 16px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "12px 16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginRight: "auto", minWidth: "200px" }}>
          <span style={{ fontWeight: "600", fontSize: "14px" }}>Stock on hand</span>
          <span style={{ fontSize: "12px", color: "#64748b" }}>Entered by you. Feed available comes from the latest pasture walk.</span>
        </div>
        {L(V.g?.bmStock).map((i, i112) => <React.Fragment key={i112}>
          <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "11.5px", fontWeight: "600", color: "#475569" }}>
            {S(i?.l)}
            <div style={{ display: "flex", alignItems: "center", height: "34px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", padding: "0 10px", gap: "6px" }}>
              <input type="number" value={i?.v ?? ""} onChange={i?.set} min="0" step={i?.step} style={{ width: "64px", border: "0", outline: "0", font: "inherit", fontSize: "13.5px", fontWeight: "500", color: "#0F172A", background: "transparent" }} />
              <span style={{ fontSize: "12px", fontWeight: "500", color: "#94a3b8", whiteSpace: "nowrap" }}>{S(i?.u)}</span>
            </div>
          </label>
        </React.Fragment>)}
      </div>
    </>}
    {V.g?.metrics && <>
      <div style={{ display: "grid", gridTemplateColumns: `${A(V.g?.mCols)}`, gap: "12px" }}>
        {L(V.g?.metrics).map((m, i113) => <React.Fragment key={i113}>
          <div style={{ gridColumn: `${A(m?.span)}`, background: `${A(m?.cbg)}`, border: `1px solid ${A(m?.cbd)}`, borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: `${A(m?.pad)}`, display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: "0" }}>
              {m?.ic && <>
                <span style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#E8F4EC", color: "#2E8B57", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fillRule="evenodd" d={m?.ic} /></svg></span>
              </>}
              <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0", flex: "1" }}>
                <span style={{ display: "flex", alignItems: "flex-start", gap: "5px", minWidth: "0" }}>
                  <span style={{ fontSize: "12.5px", lineHeight: "1.3", color: "#64748b", minWidth: "0", textWrap: "pretty" }}>{S(m?.l)}</span>
                  {m?.ref && <>
                    <span style={{ position: "relative", display: "inline-flex", flexShrink: "0", fontWeight: "400", letterSpacing: "0" }}>
                      <button className="scp17" onClick={m?.ref?.tog} aria-label="Info" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", color: "#94A3B8", display: "flex" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 11v5M12 8h.01" />
                        </svg>
                      </button>
                      {m?.ref?.open && <>
                        <span onClick={m?.ref?.off} style={{ position: "fixed", inset: "0", zIndex: "44", cursor: "default" }} />
                        <span style={{ position: "absolute", left: "-14px", top: "100%", paddingTop: "8px", zIndex: "45", width: "310px" }}>
                          <span style={{ display: "flex", flexDirection: "column", gap: "11px", background: "#fff", color: "#1E293B", borderRadius: "12px", padding: "14px 16px", boxShadow: "0 0 0 1px rgba(15,23,42,.06),0 16px 40px rgba(15,23,42,.18)", whiteSpace: "normal", textAlign: "left", fontWeight: "400", letterSpacing: "0" }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#64748B" }}>DEFINITION</span>
                              <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(m?.ref?.d)}</span>
                            </span>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#2563EB" }}>REFERENCE</span>
                              <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(m?.ref?.r)}</span>
                              {m?.ref?.lk && <>
                                <a href={m?.ref?.lk?.href} target="_blank" rel="noopener" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: "600", color: "#2563EB", textDecoration: "underline", textUnderlineOffset: "2px" }}>{S(m?.ref?.lk?.l)}{" ↗"}</a>
                              </>}
                            </span>
                            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#1F7A4A" }}>UMP+</span>
                              <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(m?.ref?.u)}</span>
                            </span>
                          </span>
                        </span>
                      </>}
                    </span>
                  </>}
                </span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "5px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: `${A(m?.vfs)}`, fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.2", whiteSpace: "nowrap", color: `${A(m?.vc)}` }}>{S(m?.v)}</span>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#64748B", whiteSpace: "nowrap" }}>{S(m?.u)}</span>
                </span>
              </div>
            </div>
            <span style={{ fontSize: "12px", color: `${A(m?.dc)}`, fontWeight: "500" }}>{S(m?.d)}</span>
          </div>
        </React.Fragment>)}
      </div>
    </>}
    {V.g?.pm && <>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(400px,3.4fr) minmax(0,6.6fr)", gap: "16px", height: `${A(V.g?.pm?.h)}`, minHeight: `${A(V.g?.pm?.mh)}` }}>
        <div ref={V.g?.pm?.tref} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", display: "flex", flexDirection: "column", minHeight: "0", minWidth: "0", overflowX: "auto", overflowY: "hidden" }}>
          {V.g?.pm?.dep && <>
            <div style={{ padding: "18px 16px 2px" }}>
              <label style={{ position: "relative", display: "block" }}>
                <span style={{ position: "absolute", top: "-6px", left: "9px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2", zIndex: "1" }}>Select depth</span>
                <select className="scpg" value={V.g?.pm?.dep?.value ?? ""} onChange={V.g?.pm?.dep?.set} style={{ width: "100%", height: "38px", border: "1px solid #CBD5E1", borderRadius: "8px", outline: "0", background: "#fff", font: "inherit", fontSize: "13px", fontWeight: "500", color: "#0F172A", cursor: "pointer", padding: "0 10px" }}>
                  {L(V.g?.pm?.dep?.opts).map((o, i114) => <React.Fragment key={i114}>
                    <option value={o?.v ?? ""}>{S(o?.label)}</option>
                  </React.Fragment>)}
                </select>
              </label>
            </div>
          </>}
          <div style={{ padding: "14px 16px 10px" }}>
            <div style={{ fontWeight: "600", fontSize: "15px", color: "#0F172A" }}>{S(V.g?.pm?.title)}</div>
            <div style={{ fontSize: "12px", color: "#64748B", marginTop: "2px" }}>{S(V.g?.pm?.sub)}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: `${A(V.g?.pm?.gc)}`, gap: "4px", padding: "8px 12px 8px 12px", background: "#F8FAFC", borderTop: "1px solid #EEF2F6", borderBottom: "1px solid #EEF2F6" }}>
            {L(V.g?.pm?.cols).map((hc, i115) => <React.Fragment key={i115}>
              <span onClick={hc?.go} title={hc?.tip} style={{ cursor: `${A(hc?.cur)}`, display: "flex", flexDirection: "column", alignItems: `${A(hc?.al)}`, justifyContent: "center", textAlign: `${A(hc?.ta)}`, fontSize: "11px", fontWeight: "700", lineHeight: "1.2", letterSpacing: ".01em", color: `${A(hc?.fg)}`, background: `${A(hc?.bg)}`, padding: "4px 3px", borderRadius: "5px", whiteSpace: "nowrap", minWidth: "0" }}>
                {S(hc?.t)}
                {hc?.u && <><span style={{ fontSize: "9.5px", fontWeight: "600", opacity: ".8" }}>{S(hc?.u)}</span></>}
              </span>
            </React.Fragment>)}
          </div>
          <div style={{ flex: "1", minHeight: "0", overflowY: "auto" }}>
            {L(V.g?.pm?.rows).map((r, i116) => <React.Fragment key={i116}>
              <button className="scp18" data-pm-row={r?.i} onClick={r?.go} style={{ appearance: "none", border: "0", borderLeft: `3px solid ${A(r?.bd)}`, borderBottom: "1px solid #F1F5F9", font: "inherit", margin: "0", cursor: "pointer", width: "100%", display: "grid", gridTemplateColumns: `${A(V.g?.pm?.gc)}`, gap: "4px", alignItems: "center", padding: "6px 12px 6px 9px", background: `${A(r?.bg)}`, textAlign: "left" }}>
                {L(r?.cells).map((cl, i117) => <React.Fragment key={i117}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: `${A(cl?.jc)}`, gap: "5px", minWidth: "0", fontSize: "12px", fontWeight: `${A(cl?.fw)}`, color: `${A(cl?.fg)}`, background: `${A(cl?.bg)}`, padding: "3px 4px", borderRadius: "5px", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap", overflow: "hidden" }}>
                    {cl?.dot && <>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: `${A(cl?.dot)}`, flexShrink: "0" }} />
                    </>}
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{S(cl?.t)}</span>
                  </span>
                </React.Fragment>)}
              </button>
            </React.Fragment>)}
          </div>
          {V.g?.pm?.foot && <>
            <div style={{ display: "grid", gridTemplateColumns: `${A(V.g?.pm?.gc)}`, gap: "4px", padding: "10px 12px", borderTop: "1px solid #E2E8F0", background: "#F8FAFC" }}>
              {L(V.g?.pm?.foot).map((ft, i118) => <React.Fragment key={i118}>
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#0F172A", textAlign: `${A(ft?.al)}`, padding: "0 4px", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{S(ft?.t)}</span>
              </React.Fragment>)}
            </div>
          </>}
        </div>
        <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", border: "1px solid #E2E8F0", background: "#1e293b", minWidth: "0", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)" }}>
          <div ref={V.g?.pm?.ref} style={{ position: "absolute", inset: "0" }} />
          <div style={{ position: "absolute", left: "12px", bottom: "12px", zIndex: "3", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 16px rgba(0,0,0,.25)", padding: "10px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "12px", fontWeight: "700", color: "#043C2C" }}>{S(V.g?.pm?.legT)}</span>
            {L(V.g?.pm?.leg).map((l, i119) => <React.Fragment key={i119}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#334155", whiteSpace: "nowrap" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: `${A(l?.c)}` }} />
                {S(l?.n)}
              </span>
            </React.Fragment>)}
          </div>
        </div>
      </div>
    </>}
    {V.g?.bio && <GBio V={V} />}
    {V.g?.days && <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(112px,1fr))", gap: "10px" }}>
        {L(V.g?.days).map((d, i134) => <React.Fragment key={i134}>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "12.5px", fontWeight: "600" }}>{S(d?.d)}</span>
            <span style={{ fontSize: "11.5px", color: "#94a3b8" }}>{S(d?.date)}</span>
            <span style={{ fontSize: "12.5px", color: "#475569", marginTop: "4px" }}>{S(d?.cond)}</span>
            <span style={{ fontSize: "15px", fontWeight: "600" }}>
              {S(d?.hi)}{" "}
              <span style={{ color: "#94a3b8", fontWeight: "400" }}>{"/ "}{S(d?.lo)}</span>
            </span>
            <span style={{ fontSize: "12px", color: "#2563eb" }}>{S(d?.rain)}{" · "}{S(d?.p)}</span>
          </div>
        </React.Fragment>)}
      </div>
    </>}
    {V.g?.cards && <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: "14px" }}>
        {L(V.g?.cards).map((c, i135) => <React.Fragment key={i135}>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ width: "42px", height: "42px", borderRadius: "11px", background: `${A(c?.ibg)}`, color: `${A(c?.ifg)}`, display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={c?.icon} /></svg></span>
              <span style={{ fontSize: "11.5px", fontWeight: "600", padding: "3px 9px", borderRadius: "999px", background: `${A(c?.sbg)}`, color: `${A(c?.sfg)}` }}>{S(c?.status)}</span>
            </div>
            <div>
              <div style={{ fontWeight: "600", fontSize: "15px" }}>{S(c?.name)}</div>
              <div style={{ fontSize: "12.5px", color: "#64748b", marginTop: "2px" }}>{S(c?.id)}{" · "}{S(c?.provider)}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#475569", paddingTop: "10px", borderTop: "1px solid #F1F5F9" }}>
              <span>{S(c?.reading)}</span>
              <span style={{ color: "#94a3b8" }}>{S(c?.last)}</span>
            </div>
            <button className="scp2 scp6" onClick={c?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", borderRadius: "9px", border: "1px solid #E2E8F0", background: "#fff", color: "#14532D", fontSize: "13px", fontWeight: "600", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>Open dashboard</button>
          </div>
        </React.Fragment>)}
      </div>
    </>}
    {V.g?.dv && <GDv V={V} />}
    {V.g?.regionMap && <>
      <div style={{ position: "relative", height: "calc(100vh - 236px)", minHeight: "420px", borderRadius: "18px", overflow: "hidden", background: "#0b1220", boxShadow: "0 0 0 1px rgba(15,23,42,.08),0 12px 36px rgba(15,23,42,.12)" }}>
        <div ref={V.regRef} style={{ position: "absolute", inset: "0" }} />
        {V.g?.rg?.noPanel && <>
          <button className="scpm" data-rgobs="1" onClick={V.g?.rg?.togglePanel} title="Map layers and basemap" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", position: "absolute", right: "12px", top: "12px", zIndex: "8", height: "34px", padding: "0 12px 0 10px", borderRadius: "10px", background: "rgba(15,23,42,.34)", backdropFilter: "blur(14px) saturate(160%)", WebkitBackdropFilter: "blur(14px) saturate(160%)", border: "1px solid rgba(255,255,255,.22)", boxShadow: "0 8px 24px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.18)", color: "#fff", fontSize: "12px", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}>
              <path d="m12 3 9 5-9 5-9-5z" />
              <path d="m3 13 9 5 9-5" />
            </svg>
            View Maps
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", opacity: ".85" }}><path d="m6 9 6 6 6-6" /></svg>
          </button>
        </>}
        {V.g?.rg?.panel && <>
          <div data-rgobs="1" style={{ position: "absolute", right: "10px", top: "10px", bottom: "10px", width: "216px", maxWidth: "calc(100% - 20px)", zIndex: "9", borderRadius: "16px", background: "rgba(15,23,42,.34)", backdropFilter: "blur(14px) saturate(160%)", WebkitBackdropFilter: "blur(14px) saturate(160%)", border: "1px solid rgba(255,255,255,.22)", boxShadow: "0 8px 24px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.18)", display: "flex", flexDirection: "column", overflow: "hidden", cursor: "default" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 10px 8px 14px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#fff" }}>Map view</span>
              <button className="scpa" onClick={V.g?.rg?.togglePanel} title="Collapse" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "26px", height: "26px", borderRadius: "8px", color: "rgba(255,255,255,.75)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 15 6-6 6 6" /></svg></button>
            </div>
            <div style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: "0 8px 10px" }}>
              <div style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".1em", color: "rgba(255,255,255,.55)", padding: "6px" }}>LAYERS</div>
              <button className="scpa" onClick={V.g?.rg?.bnd?.toggle} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "8px", borderRadius: "8px", fontSize: "12px", fontWeight: "500", color: "#fff", textAlign: "left" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "7px", background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><span style={{ width: "9px", height: "9px", borderRadius: "3px", background: "#EAB308", boxShadow: "0 0 0 2px #fff" }} /></span>
                <span style={{ flex: "1" }}>Boundary &amp; zones</span>
                <span style={{ width: "28px", height: "16px", borderRadius: "999px", background: `${A(V.g?.rg?.bnd?.bg)}`, position: "relative", flexShrink: "0" }}><span style={{ position: "absolute", top: "2px", left: `${A(V.g?.rg?.bnd?.knob)}`, width: "12px", height: "12px", borderRadius: "50%", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,.2)" }} /></span>
              </button>
              <div style={{ height: "1px", background: "rgba(255,255,255,.12)", margin: "8px 6px" }} />
              <div style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".1em", color: "rgba(255,255,255,.55)", padding: "6px" }}>BASEMAP</div>
              {L(V.g?.rg?.basemaps).map((b, i144) => <React.Fragment key={i144}>
                <button className="scpa" onClick={b?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "7px 8px", borderRadius: "8px", background: `${A(b?.bg)}`, color: `${A(b?.fg)}`, fontSize: "12px", fontWeight: `${A(b?.fw)}`, textAlign: "left" }}>
                  <span style={{ width: "20px", height: "20px", borderRadius: "6px", background: `${A(b?.sw)}`, boxShadow: "inset 0 0 0 1px rgba(0,0,0,.12)", flexShrink: "0" }} />
                  <span style={{ flex: "1", minWidth: "0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(b?.label)}</span>
                  <span style={{ opacity: `${A(b?.chk)}`, display: "flex" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                </button>
              </React.Fragment>)}
            </div>
          </div>
        </>}
        <div data-rgobs="1" style={{ position: "absolute", bottom: "14px", right: "14px", maxWidth: "min(380px,calc(100% - 340px))", zIndex: "5", borderRadius: "12px", padding: "8px 14px", background: "rgba(15,23,42,.34)", backdropFilter: "blur(14px) saturate(160%)", WebkitBackdropFilter: "blur(14px) saturate(160%)", border: "1px solid rgba(255,255,255,.22)", boxShadow: "0 8px 24px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.18)", display: "flex", flexDirection: "column", alignItems: "stretch", cursor: "default" }}>
          {V.g?.rg?.zoneLeg?.legOpen && <>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "5px 14px", maxHeight: "230px", overflowY: "auto", overscrollBehavior: "contain", paddingBottom: "8px", marginBottom: "6px", borderBottom: "1px solid rgba(255,255,255,.18)" }}>
                {L(V.g?.rg?.zoneLeg?.items).map((sr, izl) => <React.Fragment key={izl}>
                  <span style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "12px", color: "#fff", fontWeight: "500", whiteSpace: "nowrap", minWidth: "0", textShadow: "0 1px 2px rgba(0,0,0,.4)" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(sr?.c)}`, flexShrink: "0", boxShadow: "0 0 0 2px rgba(255,255,255,.35)" }} />
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{S(sr?.n)}</span>
                  </span>
                </React.Fragment>)}
              </div>
            </>}
            <button onClick={V.g?.rg?.zoneLeg?.toggle} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", fontWeight: "600", whiteSpace: "nowrap", textShadow: "0 1px 2px rgba(0,0,0,.4)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 3 3 7.5l9 4.5 9-4.5zM3 12l9 4.5 9-4.5M3 16.5 12 21l9-4.5" /></svg>
              {S(V.g?.rg?.zoneLeg?.label)}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", transform: V.g?.rg?.zoneLeg?.legOpen ? "rotate(180deg)" : "none" }}><path d="m6 15 6-6 6 6" /></svg>
            </button>
        </div>
        <div data-rgpanel="1" style={{ position: "absolute", left: "14px", bottom: "14px", zIndex: "6", width: "290px", maxWidth: "calc(100% - 28px)", maxHeight: "calc(100% - 140px)", overflowY: "auto", overscrollBehavior: "contain", boxSizing: "border-box", borderRadius: "16px", background: "rgba(15,23,42,.34)", backdropFilter: "blur(14px) saturate(160%)", WebkitBackdropFilter: "blur(14px) saturate(160%)", border: "1px solid rgba(255,255,255,.22)", boxShadow: "0 8px 24px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.18)", color: "#fff", padding: "10px 12px", display: "flex", flexDirection: "column", gap: "6px", cursor: "default" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px" }}>
            <div>
              <div style={{ fontSize: "13.5px", fontWeight: "700" }}>Parameters</div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,.6)", marginTop: "1px" }}>Selections shown together on the map</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <button onClick={V.g?.rg?.clear} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "4px 6px", cursor: "pointer", color: "#5EEAD4", fontSize: "13px", fontWeight: "600" }}>Clear</button>
              <button onClick={V.g?.rg?.toggle} title="Collapse" style={{ appearance: "none", border: "1px solid rgba(255,255,255,.18)", background: "rgba(255,255,255,.06)", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "28px", height: "28px", borderRadius: "8px", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", transform: `${A(V.g?.rg?.rot)}` }}><path d="m6 9 6 6 6-6" /></svg></button>
            </div>
          </div>
          {V.g?.rg?.open && <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {L(V.g?.rg?.modes).map((md, i146) => <React.Fragment key={i146}>
                <button onClick={md?.go} style={{ appearance: "none", border: `1px solid ${A(md?.bd)}`, boxShadow: `${A(md?.sh)}`, font: "inherit", margin: "0", cursor: "pointer", height: "30px", borderRadius: "9px", background: `${A(md?.bg)}`, color: "#fff", transition: "background .15s,box-shadow .15s", fontSize: "12.5px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>{S(md?.l)}</button>
              </React.Fragment>)}
            </div>
            {V.g?.rg?.isWeather && <>
              <div style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".1em", color: "rgba(255,255,255,.55)", padding: "4px 4px 2px" }}>LATEST</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {L(V.g?.rg?.latest).map((o, i147) => <React.Fragment key={i147}>
                  <button className="scp7" onClick={o?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: "10px", padding: "4px 8px", borderRadius: "8px", background: `${A(o?.bg)}`, color: "#fff" }}>
                    <span style={{ width: "15px", height: "15px", borderRadius: "50%", border: `1.5px solid ${A(o?.cbd)}`, background: `${A(o?.cbg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" style={{ strokeWidth: "3.4", strokeLinecap: "round", strokeLinejoin: "round", opacity: `${A(o?.chk)}` }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                    <span style={{ flex: "1", minWidth: "0", fontSize: "12px", fontWeight: "600" }}>{S(o?.l)}</span>
                    <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,.6)", fontWeight: "600" }}>{S(o?.u)}</span>
                  </button>
                </React.Fragment>)}
              </div>
              <div style={{ height: "1px", background: "rgba(255,255,255,.12)", margin: "2px 0" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0 4px" }}>
                <span style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".1em", color: "rgba(255,255,255,.55)" }}>FORECAST</span>
                <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,.6)" }}>{"· "}{S(V.g?.rg?.dayLabel)}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7,minmax(0,1fr))", gap: "4px" }}>
                {L(V.g?.rg?.days).map((d, i148) => <React.Fragment key={i148}>
                  <button onClick={d?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "24px", padding: "0", borderRadius: "6px", border: `1px solid ${A(d?.bd)}`, background: `${A(d?.bg)}`, color: `${A(d?.fg)}`, fontSize: "11px", fontWeight: "600", whiteSpace: "nowrap" }}>{S(d?.l)}</button>
                </React.Fragment>)}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {L(V.g?.rg?.forecast).map((o, i149) => <React.Fragment key={i149}>
                  <button className="scp7" onClick={o?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: "10px", padding: "4px 8px", borderRadius: "8px", background: `${A(o?.bg)}`, color: "#fff" }}>
                    <span style={{ width: "15px", height: "15px", borderRadius: "50%", border: `1.5px solid ${A(o?.cbd)}`, background: `${A(o?.cbg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" style={{ strokeWidth: "3.4", strokeLinecap: "round", strokeLinejoin: "round", opacity: `${A(o?.chk)}` }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                    <span style={{ flex: "1", minWidth: "0", fontSize: "12px", fontWeight: "600" }}>{S(o?.l)}</span>
                    <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,.6)", fontWeight: "600" }}>{S(o?.u)}</span>
                  </button>
                </React.Fragment>)}
              </div>
            </>}
            {V.g?.rg?.isSoil && <>
              <div style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".1em", color: "rgba(255,255,255,.55)", padding: "4px 4px 2px" }}>DEPTH</div>
              <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <select value={V.g?.rg?.depth ?? ""} onChange={V.g?.rg?.setDepth} style={{ width: "100%", height: "40px", border: "1px solid rgba(255,255,255,.18)", borderRadius: "9px", background: "rgba(255,255,255,.08)", color: "#fff", font: "inherit", fontSize: "14px", padding: "0 34px 0 12px", outline: "0", cursor: "pointer", appearance: "none", WebkitAppearance: "none" }}>
                  {L(V.g?.rg?.depths).map((dp, i150) => <React.Fragment key={i150}>
                    <option value={dp ?? ""} style={{ color: "#0F172A" }}>{S(dp)}{" cm"}</option>
                  </React.Fragment>)}
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" style={{ position: "absolute", right: "12px", pointerEvents: "none", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
              </span>
              <div style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".1em", color: "rgba(255,255,255,.55)", padding: "4px 4px 2px" }}>MEASUREMENT</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {L(V.g?.rg?.soil).map((o, i151) => <React.Fragment key={i151}>
                  <button className="scp7" onClick={o?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: "10px", padding: "4px 8px", borderRadius: "8px", background: `${A(o?.bg)}`, color: "#fff" }}>
                    <span style={{ width: "15px", height: "15px", borderRadius: "50%", border: `1.5px solid ${A(o?.cbd)}`, background: `${A(o?.cbg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" style={{ strokeWidth: "3.4", strokeLinecap: "round", strokeLinejoin: "round", opacity: `${A(o?.chk)}` }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                    <span style={{ flex: "1", minWidth: "0", fontSize: "12px", fontWeight: "600" }}>{S(o?.l)}</span>
                    <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,.6)", fontWeight: "600" }}>{S(o?.u)}</span>
                  </button>
                </React.Fragment>)}
              </div>
            </>}
          </>}
        </div>
      </div>
    </>}
    {V.g?.info && <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "stretch" }}>
        <div style={{ flex: "1 1 340px", minWidth: "0", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", overflow: "hidden" }}>
          {L(V.g?.info?.kv).map((r, i152) => <React.Fragment key={i152}>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(130px,.8fr) minmax(0,1.2fr)", gap: "16px", alignItems: "center", padding: "12px 18px", borderBottom: "1px solid #F1F5F9", fontSize: "14px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#475569" }}>{S(r?.k)}</span>
              {r?.plain && <>
                <span style={{ color: "#0F172A", fontWeight: "500" }}>{S(r?.v)}</span>
              </>}
              {r?.pill && <>
                <span style={{ justifySelf: "start", display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "6px", background: `${A(r?.pbg)}`, color: `${A(r?.pfg)}`, fontSize: "13px", fontWeight: "500" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="m8 12 3 3 5-6" />
                  </svg>
                  {S(r?.v)}
                </span>
              </>}
            </div>
          </React.Fragment>)}
        </div>
        <div style={{ flex: "1.6 1 460px", minWidth: "0", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", fontWeight: "700", color: "#0F172A" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#043C2C" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                Device Location
              </span>
              <span style={{ fontSize: "13px", color: "#64748B", paddingLeft: "26px" }}>{S(V.g?.info?.coords)}</span>
            </div>
          </div>
          <div style={{ position: "relative", height: "340px", borderRadius: "10px", overflow: "hidden", border: "1px solid #E2E8F0", background: "#1d3328" }}><div ref={V.infoRef} style={{ position: "absolute", inset: "0" }} /></div>
        </div>
      </div>
    </>}
    {V.g?.upload && <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
        {L(V.g?.upload).map((u, i154) => <React.Fragment key={i154}>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ fontWeight: "600", fontSize: "15px" }}>{S(u?.title)}</div>
            <div style={{ fontSize: "12.5px", color: "#64748b", lineHeight: "1.5" }}>{S(u?.desc)}</div>
            <label className="scp1l" style={{ border: "1.5px dashed #99F6E4", borderRadius: "12px", background: "#F8FAFC", padding: "20px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", cursor: "pointer", textAlign: "center" }}>
              <input type="file" accept=".csv" onChange={u?.onFile} style={{ display: "none" }} />
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0EA5A4" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" /></svg>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#14532D" }}>{S(u?.cta)}</span>
              <span style={{ fontSize: "11.5px", color: "#64748b" }}>{S(u?.hint)}</span>
            </label>
            <a href="#" style={{ fontSize: "12.5px", fontWeight: "500" }}>Download CSV template</a>
          </div>
        </React.Fragment>)}
      </div>
    </>}
    {V.g?.pv && <>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "10px 12px", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 280px", display: "flex", alignItems: "center", gap: "8px", height: "36px", padding: "0 12px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input value={V.g?.pv?.q ?? ""} onChange={V.g?.pv?.setQ} placeholder="Search providers…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13.5px", background: "transparent", color: "#0F172A" }} />
          </div>
          <button className="scp13 scp11" onClick={V.g?.pv?.toggleSort} data-tip={V.g?.pv?.sortTip} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", transition: "background .15s,border-color .15s,color .15s,transform .1s", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #CBD5E1", background: "#fff", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", transform: `${A(V.g?.pv?.sortRot)}` }}><path d="M4 6h7M4 12h5M4 18h3M17 4v16M14 17l3 3 3-3" /></svg></button>
          <div style={{ display: "flex", gap: "3px", padding: "3px", borderRadius: "10px", background: "#F1F5F9", border: "1px solid #E2E8F0" }}>
            {L(V.g?.pv?.modes).map((m, i155) => <React.Fragment key={i155}>
              <button className="scpr scp6" onClick={m?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", transition: "background .15s,border-color .15s,color .15s,transform .1s", border: "0", height: "30px", padding: "0 12px", borderRadius: "8px", display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", fontWeight: "500", background: `${A(m?.bg)}`, color: `${A(m?.fg)}`, boxShadow: `${A(m?.sh)}`, whiteSpace: "nowrap" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={m?.d} /></svg>
                {S(m?.l)}
              </button>
            </React.Fragment>)}
          </div>
          <div style={{ display: "flex", border: "1px solid #CBD5E1", borderRadius: "8px", overflow: "hidden" }}>
            <button onClick={V.g?.pv?.setGrid} title="Card view" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", transition: "background .15s,border-color .15s,color .15s,transform .1s", border: "0", width: "44px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", background: `${A(V.g?.pv?.gBg)}`, color: `${A(V.g?.pv?.gFg)}` }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9" }}><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" /></svg></button>
            <button onClick={V.g?.pv?.setList} title="List view" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", transition: "background .15s,border-color .15s,color .15s,transform .1s", border: "0", borderLeft: "1px solid #CBD5E1", width: "44px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", background: `${A(V.g?.pv?.tBg)}`, color: `${A(V.g?.pv?.tFg)}` }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9" }}><path d="M3 5h18v14H3zM3 10h18M3 15h18M9 5v14" /></svg></button>
          </div>
        </div>
        {V.g?.pv?.grid && <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,260px),1fr))", gap: "14px" }}>
            {L(V.g?.pv?.items).map((p, i156) => <React.Fragment key={i156}>
              <div className="scp14" style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 6px 18px rgba(15,23,42,.035)", padding: "14px", display: "flex", flexDirection: "column", gap: "10px", transition: "box-shadow .15s,border-color .15s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ position: "relative", width: "112px", height: "52px", borderRadius: "10px", border: "1px solid #E2E8F0", background: `${A(p?.lbg)}`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "11.5px", color: "#475569", flexShrink: "0", overflow: "hidden" }}>
                    {S(p?.mono)}
                    <span style={{ position: "absolute", inset: "5px", backgroundImage: `${A(p?.bgimg)}`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                  </span>
                  {p?.isOn && <>
                    <span style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: ".04em", padding: "3px 9px", borderRadius: "999px", border: `1px solid ${A(p?.sbd)}`, background: `${A(p?.sbg)}`, color: `${A(p?.sfg)}`, whiteSpace: "nowrap" }}>{S(p?.status)}</span>
                  </>}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: "1" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>{S(p?.name)}</span>
                  <span style={{ fontSize: "12.5px", color: "#475569", lineHeight: "1.5", display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical", overflow: "hidden" }}>{S(p?.desc)}</span>
                  {p?.note && <>
                    <span style={{ fontSize: "12px", color: "#B45309" }}>{S(p?.note)}</span>
                  </>}
                </div>
                <button className="scp1m scp6" onClick={p?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", transition: "background .15s,border-color .15s,color .15s,transform .1s", height: "36px", borderRadius: "8px", border: `1px solid ${A(p?.bbd)}`, background: `${A(p?.bbg)}`, color: `${A(p?.bfg)}`, fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", boxShadow: "0 2px 6px rgba(14,143,174,.18)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></svg>
                  {S(p?.btn)}
                </button>
              </div>
            </React.Fragment>)}
          </div>
        </>}
        {V.g?.pv?.list && <>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", overflowX: "auto" }}>
            <div style={{ minWidth: "820px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1.1fr 1.1fr 1fr 1fr 230px", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #E2E8F0", fontSize: "10.5px", fontWeight: "700", letterSpacing: ".06em", color: "#475569" }}>
                <span>PROVIDER</span>
                <span>CATEGORY</span>
                <span>STATUS</span>
                <span>LAST SYNC</span>
                <span>FREQUENCY</span>
                <span />
              </div>
              {L(V.g?.pv?.items).map((p, i157) => <React.Fragment key={i157}>
                <div className="scp9" style={{ display: "grid", gridTemplateColumns: "2fr 1.1fr 1.1fr 1fr 1fr 230px", gap: "12px", alignItems: "center", padding: "10px 16px", borderBottom: "1px solid #F1F5F9", fontSize: "13px", color: "#0F172A" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "0" }}>
                    <span style={{ position: "relative", width: "96px", height: "52px", borderRadius: "10px", border: "1px solid #E2E8F0", background: `${A(p?.lbg)}`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "11.5px", color: "#475569", flexShrink: "0", overflow: "hidden" }}>
                      {S(p?.mono)}
                      <span style={{ position: "absolute", inset: "5px", backgroundImage: `${A(p?.bgimg)}`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                    </span>
                    <span style={{ fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(p?.name)}</span>
                  </span>
                  <span style={{ color: "#475569" }}>{S(p?.kind)}</span>
                  <span>
                    {p?.isOn && <>
                      <span style={{ fontSize: "10.5px", fontWeight: "600", padding: "3px 9px", borderRadius: "999px", border: `1px solid ${A(p?.sbd)}`, background: `${A(p?.sbg)}`, color: `${A(p?.sfg)}`, whiteSpace: "nowrap" }}>{S(p?.status)}</span>
                    </>}
                  </span>
                  <span style={{ color: "#475569" }}>{S(p?.sync)}</span>
                  <span style={{ color: "#475569" }}>{S(p?.freq)}</span>
                  <span style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                    <button className="scp1m scp6" onClick={p?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", transition: "background .15s,border-color .15s,color .15s,transform .1s", height: "30px", padding: "0 12px", borderRadius: "7px", border: `1px solid ${A(p?.bbd)}`, background: `${A(p?.bbg)}`, color: `${A(p?.bfg)}`, fontSize: "12.5px", fontWeight: "600" }}>{S(p?.btn)}</button>
                    {p?.isOn && <>
                      <button className="scp1n scp6" onClick={p?.disconnect} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", transition: "background .15s,border-color .15s,color .15s,transform .1s", height: "30px", padding: "0 10px", borderRadius: "7px", border: "1px solid #F1D4D4", background: "#fff", color: "#B91C1C", fontSize: "12.5px", fontWeight: "500" }}>Disconnect</button>
                    </>}
                  </span>
                </div>
              </React.Fragment>)}
            </div>
          </div>
        </>}
        <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12.5px", color: "#475569" }}>{S(V.g?.pv?.count)}</span>
            <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "#475569" }}>
              Show
              <select value={V.g?.pv?.per ?? ""} onChange={V.g?.pv?.setPer} style={{ height: "30px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", font: "inherit", fontSize: "12.5px", fontWeight: "600", color: "#0F172A", padding: "0 8px", cursor: "pointer", outline: "0" }}>
                {L(V.g?.pv?.perOpts).map((o, ipp) => <React.Fragment key={ipp}><option value={o?.v ?? ""}>{S(o?.l)}</option></React.Fragment>)}
              </select>
            </label>
          </span>
          {V.g?.pv?.multi && <>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <button className="scp2" onClick={V.g?.pv?.first} title="First page" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", transition: "background .15s,border-color .15s,color .15s,transform .1s", border: "0", background: "transparent", width: "30px", height: "30px", borderRadius: "8px", color: "#043C2C", opacity: `${A(V.g?.pv?.pOpL)}` }}>«</button>
              <button className="scp2" onClick={V.g?.pv?.prev} title="Previous page" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", transition: "background .15s,border-color .15s,color .15s,transform .1s", border: "0", background: "transparent", width: "30px", height: "30px", borderRadius: "8px", color: "#043C2C", opacity: `${A(V.g?.pv?.pOpL)}` }}>‹</button>
              {L(V.g?.pv?.pages).map((pg, i158) => <React.Fragment key={i158}>
                <button className="scp2" onClick={pg?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", transition: "background .15s,border-color .15s,color .15s,transform .1s", border: "0", width: "30px", height: "30px", borderRadius: "50%", background: `${A(pg?.bg)}`, color: "#0F172A", fontSize: "13px", fontWeight: `${A(pg?.fw)}` }}>{S(pg?.l)}</button>
              </React.Fragment>)}
              <button className="scp2" onClick={V.g?.pv?.next} title="Next page" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", transition: "background .15s,border-color .15s,color .15s,transform .1s", border: "0", background: "transparent", width: "30px", height: "30px", borderRadius: "8px", color: "#043C2C", opacity: `${A(V.g?.pv?.pOpR)}` }}>›</button>
              <button className="scp2" onClick={V.g?.pv?.last} title="Last page" style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", transition: "background .15s,border-color .15s,color .15s,transform .1s", border: "0", background: "transparent", width: "30px", height: "30px", borderRadius: "8px", color: "#043C2C", opacity: `${A(V.g?.pv?.pOpR)}` }}>»</button>
            </div>
          </>}
        </div>
      </div>
    </>}
    {V.g?.sharing && <>
      <div style={{ maxWidth: "820px", display: "flex", flexDirection: "column", gap: "14px" }}>
        <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "20px 22px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <div style={{ flex: "1", minWidth: "220px" }}>
            <div style={{ fontWeight: "600", fontSize: "15px" }}>Share to the regional map</div>
            <div style={{ fontSize: "13px", color: "#64748b", marginTop: "3px", lineHeight: "1.5" }}>{S(V.g?.sharing?.farm)}{" appears in "}{S(V.g?.sharing?.zone)}. Shared data is shown by zone only and farm names are never shown.</div>
          </div>
          <button className="scp6 scpt" onClick={V.g?.sharing?.toggle} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "46px", height: "26px", borderRadius: "999px", background: `${A(V.g?.sharing?.bg)}`, position: "relative", transition: "background .15s,transform .1s" }}><span style={{ position: "absolute", top: "3px", left: `${A(V.g?.sharing?.knob)}`, width: "20px", height: "20px", borderRadius: "50%", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,.25)", transition: "left .15s" }} /></button>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "18px 22px", display: "flex", flexDirection: "column", gap: "4px", opacity: `${A(V.g?.sharing?.op)}` }}>
          <div style={{ fontWeight: "600", fontSize: "15px", marginBottom: "6px" }}>Data types to share</div>
          {L(V.g?.sharing?.types).map((t, i159) => <React.Fragment key={i159}>
            <button className="scp6 scpt" onClick={t?.toggle} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: "12px", padding: "10px 0", borderTop: "1px solid #F1F5F9", textAlign: "left", color: "inherit", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
              <span style={{ width: "18px", height: "18px", borderRadius: "5px", border: `1.5px solid ${A(t?.bd)}`, background: `${A(t?.bg)}`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "12px", flexShrink: "0", marginTop: "1px" }}>{S(t?.tick)}</span>
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>{S(t?.label)}</span>
                <span style={{ fontSize: "12.5px", color: "#64748b" }}>{S(t?.desc)}</span>
              </span>
            </button>
          </React.Fragment>)}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px" }}>
          {V.g?.sharing?.saved && <>
            <span style={{ fontSize: "13px", color: "#15803d", fontWeight: "500" }}>Sharing settings saved</span>
          </>}
          <button className="scpo scp6" onClick={V.g?.sharing?.save} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 22px", borderRadius: "9px", background: "#043C2C", color: "#fff", fontSize: "13.5px", fontWeight: "600", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>Save</button>
        </div>
      </div>
    </>}
    {V.g?.fdv && <>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.9fr) minmax(260px,1fr)", gap: "16px", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: "0" }}>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column" }}>
            {L(V.g?.fdv?.rows).map((r, i160) => <React.Fragment key={i160}>
              <div style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "12px", padding: "15px 22px", borderBottom: "1px solid #F1F5F9", fontSize: "13.5px" }}>
                <span style={{ color: "#64748B" }}>{S(r?.l)}</span>
                <span style={{ color: `${A(r?.c)}`, fontWeight: `${A(r?.fw)}` }}>{S(r?.v)}</span>
              </div>
            </React.Fragment>)}
            <div style={{ padding: "16px 22px" }}>
              <button className="scp1o" onClick={V.g?.fdv?.edit} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "9px", border: "1px solid #FDBA74", background: "#fff", color: "#C2410C", fontSize: "13px", fontWeight: "500", display: "flex", alignItems: "center", gap: "7px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 20h4L19 9l-4-4L4 16z" /></svg>
                Edit
              </button>
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "11px", background: "#E0F5F1", color: "#0F766E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg></span>
              <div style={{ flex: "1", minWidth: "0" }}>
                <div style={{ fontWeight: "600", fontSize: "15px", color: "#0F172A" }}>Share data with the Upper Murray region?</div>
                <div style={{ fontSize: "13px", color: "#475569", lineHeight: "1.5", marginTop: "3px" }}>Sharing lets this farm be compared with others in its zone, so you can see how your conditions and season stack up against the region.</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button onClick={V.g?.fdv?.setYes} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", flex: "1", height: "42px", borderRadius: "10px", border: "1px solid #043C2C", background: `${A(V.g?.fdv?.yesBg)}`, color: `${A(V.g?.fdv?.yesFg)}`, fontSize: "14px", fontWeight: "600" }}>Yes, share</button>
              <button onClick={V.g?.fdv?.setNo} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", flex: "1", height: "42px", borderRadius: "10px", border: "1px solid #043C2C", background: `${A(V.g?.fdv?.noBg)}`, color: `${A(V.g?.fdv?.noFg)}`, fontSize: "14px", fontWeight: "600" }}>No, keep private</button>
            </div>
            {V.g?.fdv?.shMsg && <><div style={{ display: "flex", gap: "8px", alignItems: "center", padding: "10px 14px", borderRadius: "10px", background: "#ECFDF5", border: "1px solid #86EFAC", color: "#15803D", fontSize: "13px", fontWeight: "600" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>{S(V.g?.fdv?.shMsg)}</div></>}
            {V.g?.fdv?.shForm?.show && <>
              <div onClick={V.g?.fdv?.shForm?.done ? V.g?.fdv?.shForm?.finish : V.g?.fdv?.shForm?.cancel} style={{ position: "fixed", inset: "0", background: "rgba(10,59,43,.45)", backdropFilter: "blur(4px)", zIndex: "60", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
                {V.g?.fdv?.shForm?.form && <>
                <div onClick={V.g?.fdv?.shForm?.stop} style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 24px 64px rgba(10,59,43,.28)", width: "100%", maxWidth: "460px", maxHeight: "calc(100vh - 32px)", overflowY: "auto" }}>
                  <div style={{ padding: "20px 22px 6px" }}>
                    <div style={{ fontWeight: "700", fontSize: "17px", color: "#0F172A" }}>Choose data to share</div>
                    <div style={{ fontSize: "13px", color: "#475569", marginTop: "4px", lineHeight: "1.5" }}>{"Select what "}<b style={{ color: "#0F172A" }}>{S(V.g?.fdv?.shForm?.farm)}</b>{" shares with the Upper Murray region. Your farm name is never shown."}</div>
                  </div>
                  <div style={{ padding: "12px 22px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {L(V.g?.fdv?.shForm?.opts).map((o, ish) => <React.Fragment key={ish}>
                      <button onClick={o?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", width: "100%", display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px", borderRadius: "12px", border: `1.5px solid ${A(o?.bd)}`, background: `${A(o?.bg)}`, color: "#0F172A" }}>
                        <span role="checkbox" aria-checked={o?.tick ? "true" : "false"} style={{ width: "20px", height: "20px", borderRadius: "6px", border: `1.5px solid ${A(o?.cbd)}`, background: `${A(o?.cbg)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round", opacity: `${A(o?.tick)}` }}><path d="m5 12 5 5 9-10" /></svg></span>
                        <span style={{ width: "34px", height: "34px", borderRadius: "10px", background: "#E0F5F1", color: "#0F766E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={o?.ic} /></svg></span>
                        <span style={{ flex: "1", minWidth: "0" }}>
                          <span style={{ display: "block", fontSize: "14px", fontWeight: "700" }}>{S(o?.l)}</span>
                          <span style={{ display: "block", fontSize: "12px", color: "#64748B", lineHeight: "1.4", marginTop: "2px" }}>{S(o?.d)}</span>
                        </span>
                      </button>
                    </React.Fragment>)}
                  </div>
                  <div style={{ padding: "8px 22px 20px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                    <button onClick={V.g?.fdv?.shForm?.cancel} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 18px", border: "1px solid #E2E8F0", background: "#fff", color: "#0f172a", borderRadius: "10px", fontSize: "14px", fontWeight: "500" }}>Cancel</button>
                    <button onClick={V.g?.fdv?.shForm?.save} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 20px", background: `${A(V.g?.fdv?.shForm?.btn)}`, color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Share data</button>
                  </div>
                </div>
                </>}
                {V.g?.fdv?.shForm?.confirm && <>
                  <div onClick={V.g?.fdv?.shForm?.stop} style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 24px 64px rgba(10,59,43,.28)", width: "100%", maxWidth: "440px" }}>
                    <div style={{ padding: "22px 24px 6px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                      <span style={{ width: "40px", height: "40px", borderRadius: "11px", background: "#E0F5F1", color: "#0F766E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z" /><path d="M12 8v5M12 16h.01" /></svg></span>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div style={{ fontWeight: "700", fontSize: "17px", color: "#0F172A" }}>Confirm data sharing?</div>
                        <div style={{ fontSize: "13.5px", color: "#475569", marginTop: "6px", lineHeight: "1.5" }}>{"Are you sure you want to share "}<b style={{ color: "#0F172A" }}>{S(V.g?.fdv?.shForm?.what)}</b>{" data from "}<b style={{ color: "#0F172A" }}>{S(V.g?.fdv?.shForm?.farm)}</b>{" with the Upper Murray region? Your farm name is never shown, and you can stop sharing at any time."}</div>
                      </div>
                    </div>
                    <div style={{ padding: "18px 24px 20px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                      <button onClick={V.g?.fdv?.shForm?.back} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 20px", border: "1px solid #E2E8F0", background: "#fff", color: "#0f172a", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Back</button>
                      <button onClick={V.g?.fdv?.shForm?.confirmShare} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 20px", border: "0", background: "#043C2C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Confirm</button>
                    </div>
                  </div>
                </>}
                {V.g?.fdv?.shForm?.done && <>
                  <div onClick={V.g?.fdv?.shForm?.stop} style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 24px 64px rgba(10,59,43,.28)", width: "100%", maxWidth: "420px" }}>
                    <div style={{ padding: "30px 28px 8px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "12px" }}>
                      <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#ECFDF5", color: "#16A34A", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                      <div style={{ fontWeight: "700", fontSize: "18px", color: "#0F172A" }}>Data shared</div>
                      <div style={{ fontSize: "13.5px", color: "#475569", lineHeight: "1.55" }}><b style={{ color: "#0F172A" }}>{S(V.g?.fdv?.shForm?.what)}</b>{" data from "}<b style={{ color: "#0F172A" }}>{S(V.g?.fdv?.shForm?.farm)}</b>{" is now shared with the Upper Murray region."}</div>
                    </div>
                    <div style={{ padding: "18px 24px 22px", display: "flex", justifyContent: "center" }}>
                      <button onClick={V.g?.fdv?.shForm?.finish} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 20px", border: "0", background: "#043C2C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Done</button>
                    </div>
                  </div>
                </>}
              </div>
            </>}
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "11px 14px", borderRadius: "10px", background: "#F0FDF4", border: "1px solid #BBF7D0", fontSize: "12.5px", color: "#166534", lineHeight: "1.5" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z M9 12l2 2 4-4" /></svg>
              No personal data is shared. Only weather station and soil probe readings are included, and your farm name is never shown.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: "0" }}>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ fontWeight: "600", fontSize: "14px", color: "#0F172A", marginBottom: "4px" }}>{S(V.g?.fdv?.total)}</div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderTop: "1px solid #F1F5F9", fontSize: "13.5px" }}>
              <span>Owners</span>
              <b>{S(V.g?.fdv?.owners)}</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderTop: "1px solid #F1F5F9", fontSize: "13.5px" }}>
              <span>Users</span>
              <b>{S(V.g?.fdv?.users)}</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderTop: "1px solid #F1F5F9", fontSize: "13.5px" }}>
              <span>Viewers</span>
              <b>{S(V.g?.fdv?.viewers)}</b>
            </div>
            <button className="scpo" onClick={V.g?.fdv?.manageUsers} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "0", height: "40px", borderRadius: "10px", background: "#043C2C", color: "#fff", fontSize: "13.5px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "6px" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 2v3M12 19v3M2 12h3M19 12h3" /></svg>
              Edit
            </button>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ fontWeight: "600", fontSize: "14px", color: "#0F172A", marginBottom: "4px" }}>{S(V.g?.fdv?.devTitle)}</div>
            {L(V.g?.fdv?.devs).map((d, i161) => <React.Fragment key={i161}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderTop: "1px solid #F1F5F9" }}>
                <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: `${A(d?.bg)}`, color: `${A(d?.fg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={d?.ico} /></svg></span>
                <span style={{ flex: "1", minWidth: "0", fontSize: "13.5px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(d?.name)}</span>
                <span style={{ fontSize: "11.5px", fontWeight: "600", padding: "2px 9px", borderRadius: "999px", border: "1px solid #A5F3FC", background: "#ECFEFF", color: "#0E7490" }}>{S(d?.prov)}</span>
              </div>
            </React.Fragment>)}
            <button className="scp1k" onClick={V.g?.fdv?.manageDev} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", border: "1px solid #043C2C", height: "38px", borderRadius: "10px", background: "#fff", color: "#043C2C", fontSize: "13.5px", fontWeight: "600", marginTop: "6px" }}>Manage providers</button>
          </div>
        </div>
      </div>
    </>}
    {V.g?.up2 && <>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(220px,320px) minmax(min(100%,380px),1fr)", gap: "16px", minHeight: "440px" }}>
        <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column", minHeight: "0", overflow: "hidden" }}>
          <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: "8px", borderBottom: "1px solid #EEF2F6" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: "8px", background: "#F8FAFC" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input value={V.g?.up2?.q ?? ""} onChange={V.g?.up2?.setQ} placeholder="Search by name or email…" style={{ border: "0", outline: "0", flex: "1", minWidth: "0", font: "inherit", fontSize: "13px", background: "transparent" }} />
            </div>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {L(V.g?.up2?.tabs).map((t, i162) => <React.Fragment key={i162}>
                <button onClick={t?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "30px", padding: "0 10px", borderRadius: "8px", border: `1px solid ${A(t?.bd)}`, background: `${A(t?.bg)}`, color: `${A(t?.fg)}`, fontSize: "12.5px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px" }}>
                  {S(t?.l)}
                  <span style={{ minWidth: "20px", height: "18px", padding: "0 6px", borderRadius: "999px", background: `${A(t?.cbg)}`, color: `${A(t?.cfg)}`, fontSize: "11px", fontWeight: "700", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{S(t?.n)}</span>
                </button>
              </React.Fragment>)}
            </div>
          </div>
          <div style={{ flex: "1", minHeight: "0", overflowY: "auto" }}>
            {L(V.g?.up2?.list).map((r, i163) => <React.Fragment key={i163}>
              <button className="scp9" onClick={r?.go} style={{ appearance: "none", border: "0", borderBottom: "1px solid #F1F5F9", font: "inherit", margin: "0", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", background: `${A(r?.bg)}`, textAlign: "left", color: "#0F172A" }}>
                <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: `${A(r?.abg)}`, color: "#fff", fontSize: "11.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>{S(r?.ini)}</span>
                <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "1px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(r?.name)}</span>
                  <span style={{ fontSize: "11.5px", color: "#64748B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(r?.sub)}</span>
                </span>
                <span style={{ height: "20px", padding: "0 8px", borderRadius: "999px", background: `${A(r?.rb)}`, color: `${A(r?.rf)}`, fontSize: "11px", fontWeight: "700", display: "inline-flex", alignItems: "center" }}>{S(r?.role)}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" style={{ flexShrink: "0", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m9 6 6 6-6 6" /></svg>
              </button>
            </React.Fragment>)}
            {V.g?.up2?.empty && <>
              <div style={{ padding: "30px 16px", textAlign: "center", fontSize: "13px", color: "#64748B" }}>No matches.</div>
            </>}
          </div>
        </div>
        <div style={{ position: "relative", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column", minHeight: "0", overflow: "hidden" }}>
          {V.g?.up2?.noSel && <>
            <div style={{ position: "absolute", inset: "0", zIndex: "3", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B", fontSize: "13px" }}>Select a user to see their access.</div>
          </>}
          <div style={{ padding: "16px 20px", borderBottom: "1px solid #EEF2F6", display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: `${A(V.g?.up2?.d?.abg)}`, color: "#fff", fontSize: "16px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>{S(V.g?.up2?.d?.ini)}</span>
            <div style={{ flex: "1", minWidth: "0" }}>
              <div style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(V.g?.up2?.d?.name)}</div>
              <div style={{ fontSize: "13px", color: "#64748B", marginTop: "2px" }}>{S(V.g?.up2?.d?.email)}</div>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12.5px", fontWeight: "600", color: `${A(V.g?.up2?.d?.sfg)}` }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(V.g?.up2?.d?.sdot)}` }} />
              {S(V.g?.up2?.d?.status)}
            </span>
          </div>
          <div style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", borderRadius: "10px", background: "#F0F7F4", border: "1px solid #D5E9DF", fontSize: "13px", color: "#1E293B" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F766E" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
              {S(V.g?.up2?.d?.tip)}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 2px 0", fontSize: "11px", fontWeight: "700", letterSpacing: ".06em", color: "#64748B" }}>
              <span>FARM ACCESS</span>
              <span style={{ width: "178px" }}>ROLE</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px 12px", padding: "12px 14px", border: "1px solid #E2E8F0", borderRadius: "12px", flexWrap: "wrap" }}>
              <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: "#E6F2EE", color: "#0B6B4B", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></svg></span>
              <div style={{ flex: "1 1 160px", minWidth: "140px" }}>
                <div style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A" }}>{S(V.g?.up2?.d?.farm)}</div>
                <div style={{ fontSize: "12px", color: "#64748B" }}>{S(V.g?.up2?.d?.zone)}</div>
              </div>
              {V.g?.up2?.d?.isOwner && <>
                <span title="Every farm must have an owner" style={{ height: "38px", width: "134px", boxSizing: "border-box", border: "1px solid #FDE68A", borderRadius: "8px", background: "#FFFBEB", fontSize: "14px", fontWeight: "600", color: "#B45309", padding: "0 10px", display: "flex", alignItems: "center", gap: "7px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                  Owner
                </span>
                <span style={{ width: "34px", flexShrink: "0" }} />
              </>}
              {V.g?.up2?.d?.notOwner && <>
                <select value={V.g?.up2?.d?.role ?? ""} onChange={V.g?.up2?.d?.setRole} style={{ height: "38px", width: "134px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", font: "inherit", fontSize: "14px", fontWeight: "600", color: "#0F172A", padding: "0 10px", outline: "0", cursor: "pointer" }}>
                  <option>User</option>
                  <option>Viewer</option>
                </select>
                <button className="scp1p" onClick={V.g?.up2?.d?.remove} title="Remove access" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", padding: "0", cursor: "pointer", width: "34px", height: "34px", borderRadius: "8px", background: "#FEF2F2", color: "#DC2626", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /></svg></button>
              </>}
            </div>
          </div>
        </div>
      </div>
    </>}
    {V.g?.farmForm && <>
      <div style={{ maxWidth: "860px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "22px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
            Farm name
            <input className="scp1q" value={V.g?.farmForm?.name ?? ""} onChange={V.g?.farmForm?.setName} style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", font: "inherit", fontSize: "14px", outline: "0" }} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
            ABN
            <input className="scp1q" value={V.g?.farmForm?.abn ?? ""} onChange={V.g?.farmForm?.setAbn} style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", font: "inherit", fontSize: "14px", outline: "0" }} />
          </label>
          <label style={{ gridColumn: "1/-1", display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
            Address
            <input className="scp1q" value={V.g?.farmForm?.loc ?? ""} onChange={V.g?.farmForm?.setLoc} style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", font: "inherit", fontSize: "14px", outline: "0" }} />
          </label>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
            Zone
            <div style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", background: "#F8FAFC", display: "flex", alignItems: "center", fontSize: "14px", fontWeight: "400", color: "#334155" }}>{S(V.g?.farmForm?.zone)}</div>
            <span style={{ fontSize: "11.5px", color: "#94a3b8", fontWeight: "400" }}>Filled from the address</span>
          </div>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
            Farm size (ha)
            <input className="scp1q" value={V.g?.farmForm?.area ?? ""} onChange={V.g?.farmForm?.setArea} style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", font: "inherit", fontSize: "14px", outline: "0" }} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
            Main enterprise
            <select value={V.g?.farmForm?.ent ?? ""} onChange={V.g?.farmForm?.setEnt} style={{ height: "40px", padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: "8px", font: "inherit", fontSize: "14px", background: "#fff" }}>
              <option>Beef</option>
              <option>Sheep</option>
              <option>Dairy</option>
              <option>Mixed farming</option>
              <option>Cropping</option>
            </select>
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
            Contact phone
            <input className="scp1q" value={V.g?.farmForm?.phone ?? ""} onChange={V.g?.farmForm?.setPhone} style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "8px", font: "inherit", fontSize: "14px", outline: "0" }} />
          </label>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px", paddingTop: "4px", borderTop: "1px solid #F1F5F9" }}>
          {V.g?.farmForm?.saved && <>
            <span style={{ fontSize: "13px", color: "#15803d", fontWeight: "500" }}>Farm details saved</span>
          </>}
          <button className="scpo scp6" onClick={V.g?.farmForm?.save} style={{ appearance: "none", border: "0", font: "inherit", margin: "12px 0 0", cursor: "pointer", height: "38px", padding: "0 20px", borderRadius: "8px", background: "#043C2C", color: "#fff", fontSize: "13.5px", fontWeight: "600", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>Save changes</button>
        </div>
      </div>
    </>}
    {V.g?.tix && <>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", padding: "10px 14px", borderRadius: "10px", background: "#E8F6EF", border: "1px solid #CDEBDD", fontSize: "13px", color: "#0B4A35", lineHeight: "1.45" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round" }}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
          <span>{"You can raise tickets and view tickets for "}<b>{S(V.g?.tix?.farm)}</b>{" here. Tracking and replies are managed by the UMP admin team in the Admin Portal."}</span>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", overflow: "hidden" }}>
          <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontWeight: "600", fontSize: "15px", color: "#0F172A" }}>{"Tickets for "}{S(V.g?.tix?.farm)}</div>
              <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>{S(V.g?.tix?.n)}{" · click a ticket to view it"}</div>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <div style={{ minWidth: "880px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0,2fr) minmax(0,1fr) 130px 110px 170px", gap: "14px", padding: "10px 20px", background: "#F8FAFC", borderTop: "1px solid #F1F5F9", fontSize: "11.5px", fontWeight: "600", color: "#64748b", letterSpacing: ".04em", textTransform: "uppercase" }}>
                <span>Ticket</span><span>Title</span><span>Topic</span><span>Status</span><span>Updated</span><span style={{ textAlign: "right" }}>AxisTech</span>
              </div>
              {L(V.g?.tix?.rows).map((t, itx) => <React.Fragment key={itx}>
                <button className="scp18" onClick={t?.go} style={{ appearance: "none", border: "0", borderTop: "1px solid #F1F5F9", font: "inherit", margin: "0", cursor: "pointer", width: "100%", textAlign: "left", background: "#fff", display: "grid", gridTemplateColumns: "110px minmax(0,2fr) minmax(0,1fr) 130px 110px 170px", gap: "14px", padding: "12px 20px", alignItems: "center", fontSize: "13.5px", color: "#0F172A" }}>
                  <span style={{ fontWeight: "700" }}>{S(t?.id)}</span>
                  <span style={{ minWidth: "0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontWeight: "500" }}>{S(t?.title)}</span>
                  <span style={{ color: "#475569" }}>{S(t?.topic)}</span>
                  <span><span style={{ display: "inline-flex", alignItems: "center", height: "24px", padding: "0 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", background: `${A(t?.sbg)}`, color: `${A(t?.sfg)}`, whiteSpace: "nowrap" }}>{S(t?.status)}</span></span>
                  <span style={{ color: "#475569" }}>{S(t?.upd)}</span>
                  <span style={{ display: "flex", justifyContent: "flex-end" }}>
                    {t?.canFwd && <><span role="button" onClick={t?.forward} className="scp-fwd" style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "28px", padding: "0 12px", borderRadius: "999px", background: "#043C2C", color: "#fff", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", cursor: "pointer" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>Forward to AxisTech</span></>}
                    {t?.fwdDone && <><span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "28px", padding: "0 12px", borderRadius: "999px", background: "#ECFDF5", color: "#15803D", border: "1px solid #BBF7D0", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Forwarded</span></>}
                    {t?.noFwd && <><span style={{ fontSize: "12px", color: "#94A3B8" }}>—</span></>}
                  </span>
                </button>
              </React.Fragment>)}
              {V.g?.tix?.empty && <>
                <div style={{ padding: "36px 20px", textAlign: "center", borderTop: "1px solid #F1F5F9", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "13.5px", color: "#64748b" }}>No support tickets for this farm yet.</span>
                  <button onClick={V.g?.tix?.open} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 16px", borderRadius: "8px", background: "#043C2C", color: "#fff", fontSize: "13.5px", fontWeight: "600" }}>Create ticket</button>
                </div>
              </>}
            </div>
          </div>
        </div>
      </div>
    </>}
    {V.g?.account && <>
      <div style={{ maxWidth: "720px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "22px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", paddingBottom: "16px", borderBottom: "1px solid #F1F5F9" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#0EA5A4", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "17px" }}>EB</div>
          <div>
            <div style={{ fontWeight: "600", fontSize: "16px" }}>Emma Barnes</div>
            <div style={{ fontSize: "12.5px", color: "#64748b" }}>{"UMP Admin · "}{S(V.farmCount)}</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
            Full name
            <input className="scp1q" defaultValue="Emma Barnes" style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", outline: "0" }} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
            Email
            <input className="scp1q" defaultValue="emma@thowglacreek.com.au" style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", outline: "0" }} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
            Mobile
            <input className="scp1q" defaultValue="0412 555 018" style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", outline: "0" }} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
            Organisation
            <input className="scp1q" defaultValue="Thowgla Creek Pastoral" style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", outline: "0" }} />
          </label>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}><button className="scpo scp6" style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 22px", borderRadius: "9px", background: "#043C2C", color: "#fff", fontSize: "13.5px", fontWeight: "600", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>Save changes</button></div>
      </div>
    </>}
    {V.g?.password && <>
      <div style={{ maxWidth: "720px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "22px", display: "flex", flexDirection: "column", gap: "14px" }}>
        <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
          Current password
          <input className="scp1q" type="password" value={V.pw?.cur ?? ""} onChange={V.pw?.setCur} style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", outline: "0" }} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
          New password
          <input className="scp1q" type="password" value={V.pw?.nw ?? ""} onChange={V.pw?.setNw} style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", outline: "0" }} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "500" }}>
          Confirm new password
          <input className="scp1q" type="password" value={V.pw?.cf ?? ""} onChange={V.pw?.setCf} style={{ height: "40px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "9px", font: "inherit", fontSize: "14px", outline: "0" }} />
        </label>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "12px 14px", borderRadius: "10px", background: "#F8FAFC" }}>
          {L(V.pw?.rules).map((r, i165) => <React.Fragment key={i165}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: `${A(r?.fg)}` }}>
              <span style={{ width: "14px", textAlign: "center", fontWeight: "700" }}>{S(r?.mark)}</span>
              {S(r?.label)}
            </span>
          </React.Fragment>)}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px" }}>
          {V.pw?.done && <>
            <span style={{ fontSize: "13px", color: "#15803d", fontWeight: "500" }}>Password updated</span>
          </>}
          <button className="scp6 scpt" onClick={V.pw?.submit} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "40px", padding: "0 22px", borderRadius: "9px", background: `${A(V.pw?.btn)}`, color: "#fff", fontSize: "13.5px", fontWeight: "600", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>Update password</button>
        </div>
      </div>
    </>}
    {V.g?.ax && <GAx V={V} />}
    {V.g?.drafts && <>
      <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <div style={{ fontWeight: "600", fontSize: "15px", color: "#0F172A" }}>Drafted alerts</div>
          <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>{"Suggested alerts for this farm\u2019s weather station and soil probe \u00b7 "}{S(V.g?.drafts?.n)}</div>
        </div>
        {V.g?.drafts?.msg && <><div style={{ padding: "9px 12px", borderRadius: "10px", background: "#ECFDF5", border: "1px solid #BBF7D0", color: "#15803D", fontSize: "12.5px", fontWeight: "600" }}>{S(V.g?.drafts?.msg)}</div></>}
        {L(V.g?.drafts?.rows).map((d, idr) => <React.Fragment key={idr}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", padding: "12px 14px", border: "1px dashed #CBD5E1", borderRadius: "12px", background: "#FBFCFD" }}>
            <div style={{ flex: "1 1 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A" }}>{S(d?.name)}</span>
                <span style={{ height: "20px", padding: "0 8px", borderRadius: "999px", background: `${A(d?.kbg)}`, color: `${A(d?.kfg)}`, fontSize: "11px", fontWeight: "600", display: "inline-flex", alignItems: "center" }}>{S(d?.kind)}</span>
                <span style={{ height: "20px", padding: "0 8px", borderRadius: "999px", background: "#F1F5F9", color: "#475569", fontSize: "11px", fontWeight: "600", display: "inline-flex", alignItems: "center" }}>Draft</span>
              </div>
              <span style={{ fontSize: "13px", color: "#334155" }}>{S(d?.desc)}{" \u00b7 "}{S(d?.devName)}</span>
              <span style={{ fontSize: "12px", color: "#64748B" }}>{S(d?.meta)}</span>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button onClick={d?.edit} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "32px", padding: "0 14px", borderRadius: "999px", border: "1px solid #CBD5E1", background: "#fff", color: "#0F172A", fontSize: "12.5px", fontWeight: "600" }}>Edit</button>
              <button onClick={d?.activate} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "32px", padding: "0 16px", borderRadius: "999px", background: "#043C2C", color: "#fff", fontSize: "12.5px", fontWeight: "600" }}>Activate</button>
            </div>
          </div>
        </React.Fragment>)}
        {V.g?.drafts?.empty && <><div style={{ padding: "24px", textAlign: "center", color: "#64748B", fontSize: "13px", border: "1px dashed #E2E8F0", borderRadius: "12px" }}>All drafted alerts have been activated.</div></>}
      </div>
    </>}
    {V.g?.pol && <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "12px" }}>
        {L(V.g?.pol?.kpis).map((k, i194) => <React.Fragment key={i194}>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "10px 14px", display: "flex", alignItems: "center", gap: "12px", minWidth: "0" }}>
            <span style={{ fontSize: "24px", fontWeight: "700", color: "#0F172A", lineHeight: "1" }}>{S(k?.v)}</span>
            <span style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: "0" }}>
              <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".06em", color: "#475569", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(k?.l)}</span>
              <span style={{ fontSize: "11.5px", color: "#64748B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(k?.sub)}</span>
            </span>
          </div>
        </React.Fragment>)}
      </div>
      <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: "600", fontSize: "15px", color: "#0F172A" }}>Alert policies</div>
            <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>What each policy is watching for, and how often it has gone off</div>
          </div>
          <select value={V.g?.alType?.value ?? ""} onChange={V.g?.alType?.set} style={{ height: "32px", minWidth: "150px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", font: "inherit", fontSize: "13px", color: "#0F172A", padding: "0 10px", outline: "0", cursor: "pointer" }}>
            {L(V.g?.alType?.opts).map((o, i195) => <React.Fragment key={i195}>
              <option value={o?.v ?? ""}>{S(o?.label)}</option>
            </React.Fragment>)}
          </select>
        </div>
        {L(V.g?.pol?.rows).map((r, i196) => <React.Fragment key={i196}>
          <div className="scp1s" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px", border: "1px solid #E2E8F0", borderRadius: "10px", background: "#fff" }}>
            <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "5px", opacity: `${A(r?.op)}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", border: `2px solid ${A(r?.ring)}`, boxSizing: "border-box", flexShrink: "0" }} />
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A" }}>{S(r?.name)}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#64748B" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={r?.di} /></svg>
                  {S(r?.dev)}
                </span>
                {r?.paused && <>
                  <span style={{ fontSize: "11px", fontWeight: "600", padding: "2px 8px", borderRadius: "999px", background: "#F1F5F9", color: "#475569" }}>Paused</span>
                </>}
              </div>
              <span style={{ fontSize: "13px", color: "#1E293B" }}>{S(r?.cond)}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", fontSize: "12px", color: "#64748B" }}>
                <span style={{ display: "inline-flex", gap: "5px" }}>
                  {L(r?.via).map((v, i197) => <React.Fragment key={i197}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                      <title>{S(v?.t)}</title>
                      <path d={v?.d} />
                    </svg>
                  </React.Fragment>)}
                </span>
                <span>·</span>
                <span>{S(r?.freq)}</span>
                <span>·</span>
                {r?.fired && <>
                  <span>
                    {"fired "}
                    <strong style={{ color: "#0F172A" }}>{S(r?.firedT)}</strong>
                    {" in the last 12 months · last "}{S(r?.last)}
                  </span>
                </>}
                {r?.none && <>
                  <span>no alerts in the last 12 months</span>
                </>}
              </div>
            </div>
            <button className="scpj" onClick={r?.edit} title="Edit alert" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17z" /></svg></button>
            <button className="scp1t" onClick={r?.del} title="Delete alert" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "32px", height: "32px", borderRadius: "8px", color: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6" /></svg></button>
          </div>
        </React.Fragment>)}
        {V.g?.pol?.empty && <>
          <div style={{ padding: "28px", textAlign: "center", fontSize: "13px", color: "#64748B" }}>No alert policies match this type.</div>
        </>}
      </div>
    </>}
    {V.g?.ah && <>
      <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: "600", fontSize: "15px", color: "#0F172A" }}>Alert history</div>
            <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>{S(V.g?.ah?.sub)}</div>
          </div>
          <select value={V.g?.alType?.value ?? ""} onChange={V.g?.alType?.set} style={{ height: "32px", minWidth: "150px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", font: "inherit", fontSize: "13px", color: "#0F172A", padding: "0 10px", outline: "0", cursor: "pointer" }}>
            {L(V.g?.alType?.opts).map((o, i198) => <React.Fragment key={i198}>
              <option value={o?.v ?? ""}>{S(o?.label)}</option>
            </React.Fragment>)}
          </select>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          {L(V.g?.ah?.chips).map((c, i199) => <React.Fragment key={i199}>
            <button onClick={c?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "30px", padding: "0 10px", borderRadius: "7px", border: `1px solid ${A(c?.bd)}`, background: `${A(c?.bg)}`, color: `${A(c?.fg)}`, fontSize: "12px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={c?.d} /></svg>
              {S(c?.l)}
              <span style={{ fontWeight: "700" }}>{S(c?.n)}</span>
            </button>
          </React.Fragment>)}
          <select value={V.g?.ah?.devVal ?? ""} onChange={V.g?.ah?.setDev} style={{ height: "32px", minWidth: "220px", border: "1px solid #CBD5E1", borderRadius: "8px", background: "#fff", font: "inherit", fontSize: "13px", color: "#0F172A", padding: "0 10px", outline: "0", cursor: "pointer" }}>
            {L(V.g?.ah?.devOpts).map((o, i200) => <React.Fragment key={i200}>
              <option value={o?.v ?? ""}>{S(o?.l)}</option>
            </React.Fragment>)}
          </select>
          {V.g?.ah?.canClear && <>
            <button onClick={V.g?.ah?.clear} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0 6px", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#0B6B4B" }}>Clear filters</button>
          </>}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {L(V.g?.ah?.rows).map((r, i201) => <React.Fragment key={i201}>
            <div className="scp9" style={{ display: "grid", gridTemplateColumns: "110px minmax(0,1fr)", gap: "14px", padding: "12px 4px", borderTop: "1px solid #EEF2F6" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#0F172A", whiteSpace: "nowrap" }}>{S(r?.t1)}</span>
                <span style={{ fontSize: "11.5px", color: "#64748B" }}>{S(r?.t2)}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", border: "2px solid #2563EB", boxSizing: "border-box" }} />
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A" }}>{S(r?.name)}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", height: "22px", padding: "0 9px", borderRadius: "6px", border: `1px solid ${A(r?.sbd)}`, background: `${A(r?.sbg)}`, color: `${A(r?.sfg)}`, fontSize: "11.5px", fontWeight: "600" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={r?.sd} /></svg>
                    {S(r?.st)}
                  </span>
                </div>
                <span style={{ fontSize: "13px", color: "#1E293B" }}>
                  {S(r?.cond)}{" · read "}
                  <strong>{S(r?.rd)}</strong>
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#64748B" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={r?.di} /></svg>
                  {S(r?.dev)}
                </span>
              </div>
            </div>
          </React.Fragment>)}
          {V.g?.ah?.empty && <>
            <div style={{ padding: "28px", textAlign: "center", fontSize: "13px", color: "#64748B", borderTop: "1px solid #EEF2F6" }}>No alerts match these filters.</div>
          </>}
        </div>
      </div>
    </>}
    {V.g?.tableTop && <>
      <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", fontWeight: "600", fontSize: "15px" }}>{S(V.g?.table?.title)}</div>
        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: `${A(V.g?.table?.mw)}` }}>
            <div style={{ display: "grid", gridTemplateColumns: `${A(V.g?.table?.gc)}`, gap: "14px", padding: "10px 20px", background: "#F8FAFC", borderTop: "1px solid #F1F5F9", fontSize: "11.5px", fontWeight: "600", color: "#64748b", letterSpacing: ".04em", textTransform: "uppercase" }}>
              {L(V.g?.table?.cols).map((col, i202) => <React.Fragment key={i202}>
                <span>{S(col)}</span>
              </React.Fragment>)}
            </div>
            {L(V.g?.table?.rows).map((r, i203) => <React.Fragment key={i203}>
              <div style={{ display: "grid", gridTemplateColumns: `${A(V.g?.table?.gc)}`, gap: "14px", padding: "12px 20px", borderTop: "1px solid #F1F5F9", alignItems: "center" }}>
                {L(r?.cells).map((cl, i204) => <React.Fragment key={i204}>
                  <span style={{ justifySelf: "start", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: `${A(cl?.fs)}`, fontWeight: `${A(cl?.fw)}`, color: `${A(cl?.fg)}`, background: `${A(cl?.bg)}`, padding: `${A(cl?.pad)}`, borderRadius: "999px" }}>{S(cl?.t)}</span>
                </React.Fragment>)}
              </div>
            </React.Fragment>)}
            {V.g?.table?.empty && <>
              <div style={{ padding: "36px 20px", textAlign: "center", color: "#64748b", fontSize: "13.5px", borderTop: "1px solid #F1F5F9" }}>{S(V.g?.table?.empty)}</div>
            </>}
          </div>
        </div>
      </div>
    </>}
    {V.g?.bench && <GBench V={V} />}
    {V.g?.zrows && <>
      <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "9px 20px", background: "#F4F7FA", borderBottom: "1px solid #E2E8F0", fontSize: "11px", fontWeight: "700", letterSpacing: ".08em", color: "#64748B" }}>{S(V.g?.zhead)}</div>
        {L(V.g?.zrows).map((z, i227) => <React.Fragment key={i227}>
          <div style={{ borderBottom: "1px solid #EEF2F6" }}>
            <button className="scp9" onClick={z?.toggle} style={{ appearance: "none", border: "0", background: `${A(z?.hbg)}`, font: "inherit", margin: "0", cursor: "pointer", width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "15px 20px", textAlign: "left", color: "#0F172A" }}>
              <span style={{ width: "4px", height: "22px", borderRadius: "2px", background: `${A(z?.c)}`, flexShrink: "0" }} />
              <span style={{ fontSize: "15.5px", fontWeight: "700", letterSpacing: "-.01em" }}>{S(z?.name)}</span>
              <span style={{ display: "inline-flex", alignItems: "center", height: "22px", padding: "0 9px", borderRadius: "999px", background: "#F1F5F9", border: "1px solid #E2E8F0", fontSize: "11.5px", fontWeight: "600", color: "#334155" }}>{S(z?.sub)}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ marginLeft: "auto", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", transform: `${A(z?.rot)}`, transition: "transform .15s" }}><path d="m6 9 6 6 6-6" /></svg>
            </button>
            {z?.open && <>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "2px 16px 14px" }}>
                {L(z?.st).map((r, i228) => <React.Fragment key={i228}>
                  {r?.ws && <>
                    <div style={{ border: `1px solid ${A(r?.bd)}`, borderRadius: "12px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px 14px", flexWrap: "wrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px 10px", flexWrap: "wrap", minWidth: "0" }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "14.5px", fontWeight: "700", color: "#0F172A" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", flexShrink: "0" }}>
                              <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                              <path d="M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                            </svg>
                            {S(r?.ws?.loc)}
                          </span>
                          <span style={{ display: "inline-flex", alignItems: "center", height: "22px", padding: "0 9px", borderRadius: "999px", fontSize: "11.5px", fontWeight: "600", background: "#F5F3FF", color: "#6D28D9", border: "1px solid #DDD6FE" }}>{S(r?.prov)}</span>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "22px", padding: "0 9px", borderRadius: "999px", background: `${A(r?.ws?.lbg)}`, color: `${A(r?.ws?.lfg)}`, fontSize: "11.5px", fontWeight: "700" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(r?.ws?.ldot)}`, boxShadow: `0 0 0 3px ${A(r?.ws?.lring)}` }} />
                            {S(r?.ws?.lt)}
                          </span>
                          <span style={{ fontSize: "12px", color: "#64748B" }}>
                            {"Last sampling "}
                            <b style={{ fontWeight: "600", color: "#0F172A" }}>{S(r?.ws?.ago)}</b>
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          {r?.hasDepth && <>
                            <label style={{ position: "relative", display: "block", flexShrink: "0", width: "96px" }}>
                              <span style={{ position: "absolute", top: "-6px", left: "8px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2" }}>Depth</span>
                              <select value={r?.depth ?? ""} onChange={r?.setDepth} style={{ width: "100%", height: "32px", border: "1px solid #CBD5E1", borderRadius: "8px", outline: "0", background: "#fff", font: "inherit", fontSize: "12.5px", fontWeight: "500", color: "#0F172A", cursor: "pointer", padding: "0 8px" }}>
                                <option value="10 cm">10 cm</option>
                                <option value="30 cm">30 cm</option>
                                <option value="60 cm">60 cm</option>
                                <option value="90 cm">90 cm</option>
                              </select>
                            </label>
                          </>}
                          {r?.act2 && <>
                            <button className="scp1u" onClick={r?.act2?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "32px", padding: "0 12px", borderRadius: "8px", border: "1px solid #043C2C", background: "#fff", color: "#043C2C", fontSize: "12.5px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap", flexShrink: "0" }}>
                              {S(r?.act2?.l)}
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m9 6 6 6-6 6" /></svg>
                            </button>
                          </>}
                          <button className="scpo" onClick={r?.act?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "32px", padding: "0 12px", borderRadius: "8px", border: "1px solid #043C2C", background: "#043C2C", color: "#fff", fontSize: "12.5px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap", flexShrink: "0", boxShadow: "0 1px 2px rgba(10,59,43,.25)" }}>
                            {S(r?.act?.l)}
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m9 6 6 6-6 6" /></svg>
                          </button>
                        </div>
                      </div>
                      {r?.off && <>
                        <div style={{ padding: "9px 12px", borderRadius: "9px", background: "#FEF2F2", color: "#B91C1C", fontSize: "12.5px", fontWeight: "600" }}>{S(r?.offTxt)}</div>
                      </>}
                      {r?.on && <>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "stretch" }}>
                          <div style={{ flex: `${A(r?.ws?.fx)}`, minWidth: "0", display: "grid", gridTemplateColumns: `${A(r?.ws?.gc)}`, gap: "8px" }}>
                            {L(r?.ws?.prim).map((c, i229) => <React.Fragment key={i229}>
                              <div style={{ display: "flex", flexDirection: `${A(r?.ws?.fd)}`, alignItems: "center", justifyContent: `${A(r?.ws?.jc)}`, textAlign: `${A(r?.ws?.ta)}`, gap: `${A(r?.ws?.gp)}`, padding: "8px 10px", borderRadius: "10px", background: "#F8FAFC", border: "1px solid #EEF2F6", minWidth: "0" }}>
                                <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: `${A(c?.bg)}`, color: `${A(c?.fg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={c?.d} /></svg></span>
                                <span style={{ display: "flex", flexDirection: "column", alignItems: `${A(r?.ws?.ai)}`, gap: "1px", minWidth: "0" }}>
                                  <span style={{ fontSize: "11px", fontWeight: "600", color: "#64748B", lineHeight: "1.25" }}>{S(c?.l)}</span>
                                  <span style={{ display: "flex", alignItems: "baseline", gap: "3px", whiteSpace: "nowrap" }}>
                                    <span style={{ fontSize: "19px", fontWeight: "700", letterSpacing: "-.02em", lineHeight: "1.1", color: "#0F172A", fontVariantNumeric: "tabular-nums" }}>{S(c?.v)}</span>
                                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#64748B" }}>{S(c?.u)}</span>
                                  </span>
                                </span>
                              </div>
                            </React.Fragment>)}
                          </div>
                          {r?.ws?.hasSec && <>
                            <div style={{ flex: "1 1 340px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "6px", alignContent: "center" }}>
                              {L(r?.ws?.sec).map((c, i230) => <React.Fragment key={i230}>
                                <div title={c?.l} style={{ display: "flex", alignItems: "center", gap: "7px", height: "30px", padding: "0 10px 0 5px", borderRadius: "999px", border: "1px solid #E2E8F0", background: "#fff", minWidth: "0" }}>
                                  <span style={{ width: "20px", height: "20px", borderRadius: "6px", background: `${A(c?.bg)}`, color: `${A(c?.fg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={c?.d} /></svg></span>
                                  <span style={{ flex: "1", minWidth: "0", fontSize: "11.5px", color: "#64748B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(c?.l)}</span>
                                  <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#0F172A", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                                    {S(c?.v)}
                                    <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#64748B", marginLeft: "2px" }}>{S(c?.u)}</span>
                                  </span>
                                </div>
                              </React.Fragment>)}
                            </div>
                          </>}
                        </div>
                      </>}
                    </div>
                  </>}
                  {r?.notWs && <>
                    <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", gap: "12px 16px", padding: "12px", border: `1px solid ${A(r?.bd)}`, borderRadius: "12px", background: `${A(r?.bg)}` }}>
                      <div style={{ flex: "0 0 190px", display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                        <span style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                          <span style={{ display: "inline-flex", alignItems: "center", height: "22px", padding: "0 9px", borderRadius: "999px", fontSize: "11.5px", fontWeight: "600", background: `${A(r?.tbg)}`, color: `${A(r?.tfg)}` }}>{S(r?.tl)}</span>
                          {r?.prov && <>
                            <span style={{ display: "inline-flex", alignItems: "center", height: "22px", padding: "0 9px", borderRadius: "999px", fontSize: "11.5px", fontWeight: "600", background: "#F1F5F9", color: "#334155", border: "1px solid #E2E8F0" }}>{S(r?.prov)}</span>
                          </>}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#0F172A" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", flexShrink: "0" }}>
                            <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                            <path d="M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                          </svg>
                          {S(r?.town)}
                        </span>
                      </div>
                      {r?.off && <>
                        <div style={{ flex: "1 1 300px", padding: "12px 14px", borderRadius: "10px", background: "#FEF2F2", color: "#B91C1C", fontSize: "12.5px", fontWeight: "600" }}>{S(r?.offTxt)}</div>
                      </>}
                      {r?.hasDepth && <>
                        <label style={{ position: "relative", display: "block", flexShrink: "0", width: "96px" }}>
                          <span style={{ position: "absolute", top: "-6px", left: "8px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2" }}>Depth</span>
                          <select value={r?.depth ?? ""} onChange={r?.setDepth} style={{ width: "100%", height: "36px", border: "1px solid #CBD5E1", borderRadius: "8px", outline: "0", background: "#fff", font: "inherit", fontSize: "13px", fontWeight: "500", color: "#0F172A", cursor: "pointer", padding: "0 8px" }}>
                            <option value="10 cm">10 cm</option>
                            <option value="30 cm">30 cm</option>
                            <option value="60 cm">60 cm</option>
                            <option value="90 cm">90 cm</option>
                          </select>
                        </label>
                      </>}
                      {r?.on && <>
                        <div style={{ flex: "1 1 420px", minWidth: "0", overflowX: "auto" }}>
                          <div style={{ display: "grid", gridTemplateColumns: `${A(r?.cols)}`, gap: "8px", minWidth: "0" }}>
                            {L(r?.cards).map((c, i231) => <React.Fragment key={i231}>
                              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "5px", padding: "8px 4px", border: "1px solid #E2E8F0", borderRadius: "12px", background: "#fff", minWidth: "0" }}>
                                <span style={{ width: "26px", height: "26px", borderRadius: "8px", background: `${A(c?.bg)}`, color: `${A(c?.fg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={c?.d} /></svg></span>
                                <span style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "center" }}>
                                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", lineHeight: "1.1" }}>
                                    {S(c?.v)}
                                    <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#64748B", marginLeft: "2px" }}>{S(c?.u)}</span>
                                  </span>
                                  <span style={{ fontSize: "10px", fontWeight: "600", color: "#64748B", lineHeight: "1.2" }}>{S(c?.l)}</span>
                                </span>
                              </div>
                            </React.Fragment>)}
                            {L(r?.days).map((d, i232) => <React.Fragment key={i232}>
                              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", padding: "8px 4px", border: "1px solid #E2E8F0", borderRadius: "10px", background: "#fff", boxSizing: "border-box", minWidth: "0" }}>
                                <span style={{ fontSize: "11px", fontWeight: "700", color: "#0F172A", lineHeight: "1.1", whiteSpace: "nowrap" }}>
                                  {S(d?.d)}{" "}
                                  <span style={{ fontWeight: "500", color: "#94A3B8", fontSize: "9.5px" }}>{S(d?.dt)}</span>
                                </span>
                                <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                  <svg width="22" height="22" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    {d?.sun && <>
                                      <circle cx="24" cy="24" r="8" fill="#FACC15" stroke="#EAB308" strokeWidth="2" />
                                      <path d="M24 6v5M24 37v5M6 24h5M37 24h5M11 11l3.5 3.5M33.5 33.5 37 37M11 37l3.5-3.5M33.5 14.5 37 11" stroke="#EAB308" strokeWidth="2.5" />
                                    </>}
                                    {d?.part && <>
                                      <circle cx="18" cy="18" r="7" fill="#FACC15" />
                                      <path d="M16 38h19a7 7 0 0 0 .5-14A10 10 0 0 0 16.5 26 6 6 0 0 0 16 38z" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
                                    </>}
                                    {d?.wet && <>
                                      <path d="M14 30h20a7 7 0 0 0 .5-14A10 10 0 0 0 14.5 18 6 6 0 0 0 14 30z" fill="#BFDBFE" stroke="#60A5FA" strokeWidth="2" />
                                      <path d="M18 35l-2 5M26 35l-2 5M34 35l-2 5" stroke="#3B82F6" strokeWidth="2.5" />
                                    </>}
                                  </svg>
                                  <span style={{ fontSize: "13px", fontWeight: "700", color: "#0F172A", whiteSpace: "nowrap" }}>
                                    {S(d?.hi)}{" "}
                                    <span style={{ fontWeight: "500", color: "#64748B" }}>{S(d?.lo)}</span>
                                  </span>
                                </span>
                                <span style={{ fontSize: "10px", fontWeight: "600", color: "#2563EB", whiteSpace: "nowrap" }}>
                                  {"Rain "}{S(d?.rain)}{" "}
                                  <span style={{ color: "#0891B2" }}>{"· Hum "}{S(d?.hum)}</span>
                                </span>
                                <span style={{ fontSize: "10px", fontWeight: "600", color: "#16A34A", whiteSpace: "nowrap" }}>{"Wind "}{S(d?.wind)}</span>
                              </div>
                            </React.Fragment>)}
                          </div>
                        </div>
                      </>}
                      {r?.summ && <>
                        <span style={{ flex: "1 1 260px", minWidth: "0", fontSize: "12.5px", color: "#475569" }}>{S(r?.summ)}</span>
                      </>}
                      <button className="scpo" onClick={r?.act?.go} style={{ appearance: "none", font: "inherit", margin: "0 0 0 auto", cursor: "pointer", height: "32px", padding: "0 12px", borderRadius: "8px", border: "1px solid #043C2C", background: "#043C2C", color: "#fff", fontSize: "12.5px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap", flexShrink: "0", boxShadow: "0 1px 2px rgba(10,59,43,.25)" }}>
                        {S(r?.act?.l)}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m9 6 6 6-6 6" /></svg>
                      </button>
                    </div>
                  </>}
                </React.Fragment>)}
                {z?.empty && <>
                  <div style={{ padding: "12px", border: "1px dashed #CBD5E1", borderRadius: "12px", fontSize: "12.5px", color: "#64748B" }}>No stations shared in this zone yet.</div>
                </>}
              </div>
            </>}
          </div>
        </React.Fragment>)}
      </div>
    </>}
    {V.g?.zfc && <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {L(V.g?.zfc).map((z, i233) => <React.Fragment key={i233}>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderLeft: `4px solid ${A(z?.c)}`, borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "10px 14px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 14px", minWidth: "0" }}>
            <div style={{ flex: "0 0 132px", display: "flex", flexDirection: "column", gap: "5px", minWidth: "0" }}>
              <span style={{ fontSize: "15px", fontWeight: "700", letterSpacing: "-.01em", color: "#0F172A" }}>{S(z?.name)}</span>
              <span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", height: "20px", padding: "0 8px", borderRadius: "999px", fontSize: "11px", fontWeight: "600", background: "#FEF6DB", color: "#92400E", border: "1px solid #FDE68A" }}>7-day forecast</span>
            </div>
            {z?.empty && <>
              <div style={{ flex: "1", padding: "10px 12px", border: "1px dashed #CBD5E1", borderRadius: "10px", fontSize: "12.5px", color: "#64748B" }}>No forecast available for this zone yet.</div>
            </>}
            {z?.has && <>
              <div style={{ flex: "1 1 300px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "6px" }}>
                {L(z?.prim).map((c, i234) => <React.Fragment key={i234}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "5px 8px", borderRadius: "9px", background: "#F8FAFC", border: "1px solid #EEF2F6", minWidth: "0" }}>
                    <span style={{ width: "24px", height: "24px", borderRadius: "7px", background: `${A(c?.bg)}`, color: `${A(c?.fg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={c?.d} /></svg></span>
                    <span style={{ flex: "1", minWidth: "0", fontSize: "11px", fontWeight: "600", color: "#64748B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(c?.l)}</span>
                    <span style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                      {S(c?.v)}
                      <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#64748B", marginLeft: "2px" }}>{S(c?.u)}</span>
                    </span>
                  </div>
                </React.Fragment>)}
              </div>
              <div style={{ flex: "1.4 1 340px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(7,minmax(0,1fr))", gap: "2px", padding: "3px", borderRadius: "10px", background: "#F8FAFC", border: "1px solid #EEF2F6" }}>
                {L(z?.days).map((dy, i235) => <React.Fragment key={i235}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1px", padding: "4px 2px", borderRadius: "7px", background: `${A(dy?.bg)}`, border: `1px solid ${A(dy?.bd)}`, minWidth: "0" }}>
                    <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#64748B", whiteSpace: "nowrap" }}>{S(dy?.d)}</span>
                    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      {dy?.sun && <>
                        <circle cx="24" cy="24" r="8" fill="#FACC15" stroke="#EAB308" strokeWidth="2" />
                        <path d="M24 6v5M24 37v5M6 24h5M37 24h5M11 11l3.5 3.5M33.5 33.5 37 37M11 37l3.5-3.5M33.5 14.5 37 11" stroke="#EAB308" strokeWidth="2.5" />
                      </>}
                      {dy?.part && <>
                        <circle cx="18" cy="18" r="7" fill="#FACC15" />
                        <path d="M16 38h19a7 7 0 0 0 .5-14A10 10 0 0 0 16.5 26 6 6 0 0 0 16 38z" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
                      </>}
                      {dy?.wet && <>
                        <path d="M14 30h20a7 7 0 0 0 .5-14A10 10 0 0 0 14.5 18 6 6 0 0 0 14 30z" fill="#BFDBFE" stroke="#60A5FA" strokeWidth="2" />
                        <path d="M18 35l-2 5M26 35l-2 5M34 35l-2 5" stroke="#3B82F6" strokeWidth="2.5" />
                      </>}
                    </svg>
                    <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#0F172A" }}>{S(dy?.t)}</span>
                  </div>
                </React.Fragment>)}
              </div>
              <button className="scpo" onClick={z?.go} style={{ appearance: "none", font: "inherit", margin: "0 0 0 auto", cursor: "pointer", height: "32px", padding: "0 12px", borderRadius: "8px", border: "1px solid #043C2C", background: "#043C2C", color: "#fff", fontSize: "12.5px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap", flexShrink: "0", boxShadow: "0 1px 2px rgba(10,59,43,.25)" }}>
                View forecast
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m9 6 6 6-6 6" /></svg>
              </button>
            </>}
          </div>
        </React.Fragment>)}
      </div>
    </>}
    {V.g?.charts && <GCharts V={V} />}
    {V.g?.tableBot && <>
      <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", fontWeight: "600", fontSize: "15px" }}>{S(V.g?.table?.title)}</div>
        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: `${A(V.g?.table?.mw)}` }}>
            <div style={{ display: "grid", gridTemplateColumns: `${A(V.g?.table?.gc)}`, gap: "14px", padding: "10px 20px", background: "#F8FAFC", borderTop: "1px solid #F1F5F9", fontSize: "11.5px", fontWeight: "600", color: "#64748b", letterSpacing: ".04em", textTransform: "uppercase" }}>
              {L(V.g?.table?.cols).map((col, i275) => <React.Fragment key={i275}>
                <span>{S(col)}</span>
              </React.Fragment>)}
            </div>
            {L(V.g?.table?.rows).map((r, i276) => <React.Fragment key={i276}>
              <div style={{ display: "grid", gridTemplateColumns: `${A(V.g?.table?.gc)}`, gap: "14px", padding: "12px 20px", borderTop: "1px solid #F1F5F9", alignItems: "center" }}>
                {L(r?.cells).map((cl, i277) => <React.Fragment key={i277}>
                  <span style={{ justifySelf: "start", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: `${A(cl?.fs)}`, fontWeight: `${A(cl?.fw)}`, color: `${A(cl?.fg)}`, background: `${A(cl?.bg)}`, padding: `${A(cl?.pad)}`, borderRadius: "999px" }}>{S(cl?.t)}</span>
                </React.Fragment>)}
              </div>
            </React.Fragment>)}
            {V.g?.table?.empty && <>
              <div style={{ padding: "36px 20px", textAlign: "center", color: "#64748b", fontSize: "13.5px", borderTop: "1px solid #F1F5F9" }}>{S(V.g?.table?.empty)}</div>
            </>}
          </div>
        </div>
      </div>
    </>}
    {V.g?.foot && <>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", padding: "10px 14px", borderRadius: "10px", background: "#F8FAFC", border: "1px solid #EEF2F6", fontSize: "12px", lineHeight: "1.55", color: "#475569" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" style={{ flexShrink: "0", marginTop: "2px", strokeWidth: "2", strokeLinecap: "round" }}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5M12 8h.01" />
        </svg>
        <span>
          {S(V.g?.foot?.a)}{" "}
          <button onClick={V.g?.foot?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", color: "#0B6B4B", fontWeight: "600", textDecoration: "underline" }}>{S(V.g?.foot?.link)}</button>
          {S(V.g?.foot?.b)}
        </span>
      </div>
    </>}
    {V.g?.wtTop && <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "16px" }}>
        {L(V.g?.wtTop).map((tb, i278) => <React.Fragment key={i278}>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", minWidth: "0", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontWeight: "600", fontSize: "15px", color: "#0F172A" }}>{S(tb?.title)}</span>
                <span style={{ fontSize: "12px", color: "#64748B" }}>{S(tb?.sub)}</span>
              </div>
              <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#475569", background: "#F1F5F9", padding: "4px 10px", borderRadius: "999px", whiteSpace: "nowrap" }}>{S(tb?.unit)}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {L(tb?.rows).map((r, i279) => <React.Fragment key={i279}>
                <div style={{ display: "grid", gridTemplateColumns: "28px minmax(0,1fr) 64px", alignItems: "center", gap: "12px" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12.5px", fontWeight: "700", background: `${A(r?.rbg)}`, color: `${A(r?.rfg)}` }}>{S(r?.rank)}</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px", minWidth: "0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}>
                      <span style={{ fontSize: "13px", fontWeight: "600", color: "#0F172A" }}>{S(r?.id)}</span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: "600", color: "#475569" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(r?.c)}` }} />
                        {S(r?.pen)}
                      </span>
                    </div>
                    <div style={{ height: "8px", borderRadius: "999px", background: "#F1F5F9", overflow: "hidden" }}><div style={{ height: "100%", width: `${A(r?.pct)}`, borderRadius: "999px", background: `${A(r?.c)}` }} /></div>
                  </div>
                  <span style={{ textAlign: "right", fontSize: "15px", fontWeight: "700", color: "#0F172A", fontVariantNumeric: "tabular-nums" }}>{S(r?.v)}</span>
                </div>
              </React.Fragment>)}
            </div>
          </div>
        </React.Fragment>)}
      </div>
    </>}
    {V.g?.wtSess && <>
      <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", minWidth: "0", overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontWeight: "600", fontSize: "15px", color: "#0F172A" }}>Recent weighing sessions</span>
            <span style={{ fontSize: "12px", color: "#64748B" }}>{S(V.g?.wtSess?.sub)}</span>
          </div>
        </div>
        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: "620px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr .9fr .7fr 1fr 1fr", gap: "16px", padding: "10px 20px", background: "#F8FAFC", borderTop: "1px solid #EEF2F6", borderBottom: "1px solid #EEF2F6", fontSize: "11px", fontWeight: "600", color: "#64748b", letterSpacing: ".05em", textTransform: "uppercase" }}>
              <span>Date</span>
              <span>Mob</span>
              <span>Head</span>
              <span>Avg weight</span>
              <span>Daily gain</span>
            </div>
            {L(V.g?.wtSess?.rows).map((r, i280) => <React.Fragment key={i280}>
              <div className="scp1w" style={{ display: "grid", gridTemplateColumns: "1.2fr .9fr .7fr 1fr 1fr", gap: "16px", padding: "12px 20px", borderBottom: "1px solid #F1F5F9", alignItems: "center", fontSize: "13px", color: "#334155" }}>
                <span style={{ fontWeight: "600", color: "#0F172A" }}>{S(r?.d)}</span>
                <span style={{ justifySelf: "start", display: "inline-flex", alignItems: "center", gap: "6px", padding: "3px 10px", borderRadius: "999px", background: `${A(r?.pbg)}`, color: `${A(r?.pfg)}`, fontSize: "12px", fontWeight: "600" }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(r?.c)}` }} />
                  {S(r?.pen)}
                </span>
                <span style={{ fontVariantNumeric: "tabular-nums" }}>{S(r?.hd)}</span>
                <span style={{ fontWeight: "700", color: "#0F172A", fontVariantNumeric: "tabular-nums" }}>{S(r?.w)}{" kg"}</span>
                <span style={{ justifySelf: "start", display: "inline-flex", alignItems: "center", gap: "4px", padding: "3px 9px", borderRadius: "999px", background: "#ECFDF3", color: "#15803D", fontSize: "12px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                  {S(r?.gn)}{" kg/day"}
                </span>
              </div>
            </React.Fragment>)}
          </div>
        </div>
      </div>
    </>}
    </>
  );
}
