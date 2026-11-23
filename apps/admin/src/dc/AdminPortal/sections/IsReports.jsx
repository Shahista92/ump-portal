import React from 'react';
import { S, L, A, C } from '../../runtime.js';


export default function IsReports({ V }) {
  return (
    <>
    <div ref={V.an?.ref} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ flexShrink: "0", background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "12px 20px", minHeight: "0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px 14px", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 auto" }}>
          <h1 style={{ margin: "0", fontSize: "19px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.2", color: "#0F172A" }}>Analytics</h1>
          <p style={{ margin: "2px 0 0", color: "#475569", fontSize: "13px" }}>{"Adoption, engagement and operational health across the Upper Murray region · "}{S(V.an?.periodText)}</p>
        </div>
        <div data-noprint="1" style={{ display: "flex", flexShrink: "0", gap: "8px", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <button className="scpi" onClick={V.an?.toggleRange} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", whiteSpace: "nowrap", height: "36px", padding: "0 12px", border: "1px solid #E2E8F0", borderRadius: "10px", background: "#fff", fontSize: "13px", fontWeight: "600", color: "#0f172a", display: "flex", alignItems: "center", gap: "8px", boxShadow: "0 1px 2px rgba(15,23,42,.04)" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM3 10h18M8 2v4M16 2v4" /></svg>
              {S(V.an?.rangeLabel)}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", transform: `${A(V.an?.rangeRot)}`, transition: "transform .15s" }}><path d="m6 9 6 6 6-6" /></svg>
            </button>
            {V.an?.rangeOpen && <>
              <div onClick={V.an?.closeMenus} style={{ position: "fixed", inset: "0", zIndex: "39" }} />
              <div style={{ position: "absolute", right: "0", top: "44px", zIndex: "40", width: "260px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 18px 44px rgba(15,23,42,.16)", padding: "6px", display: "flex", flexDirection: "column" }}>
                {L(V.an?.ranges).map((r, i42) => <React.Fragment key={i42}>
                  <button className="scpb" onClick={r?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 12px", borderRadius: "8px", fontSize: "13.5px", color: "#0f172a", background: `${A(r?.bg)}`, fontWeight: `${A(r?.fw)}` }}>
                    {S(r?.label)}
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#94a3b8" }}>{S(r?.k)}</span>
                  </button>
                </React.Fragment>)}
                <div style={{ height: "1px", background: "#f1f5f9", margin: "6px 4px" }} />
                <div style={{ padding: "8px 10px 6px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".06em", color: "#475569" }}>CUSTOM RANGE</span>
                  <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12px", color: "#475569" }}>
                    From
                    <input type="date" value={V.an?.from ?? ""} max={V.an?.today} onChange={V.an?.setFrom} style={{ height: "36px", padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: "8px", font: "inherit", fontSize: "13px", color: "#0f172a" }} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12px", color: "#475569" }}>
                    To
                    <input type="date" value={V.an?.to ?? ""} max={V.an?.today} onChange={V.an?.setTo} style={{ height: "36px", padding: "0 10px", border: "1px solid #E2E8F0", borderRadius: "8px", font: "inherit", fontSize: "13px", color: "#0f172a" }} />
                  </label>
                  {V.an?.rangeErr && <>
                    <span style={{ fontSize: "12px", color: "#B91C1C" }}>{S(V.an?.rangeErr)}</span>
                  </>}
                  <button onClick={V.an?.applyCustom} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: `${A(V.an?.applyCur)}`, alignSelf: "flex-end", height: "32px", padding: "0 16px", borderRadius: "8px", background: `${A(V.an?.applyBg)}`, color: "#fff", fontSize: "13px", fontWeight: "600" }}>Apply</button>
                </div>
              </div>
            </>}
          </div>
          <div style={{ position: "relative" }}>
            <button className="scpi" onClick={V.an?.toggleExport} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "36px", padding: "0 12px", borderRadius: "10px", border: "1px solid #E2E8F0", background: "#fff", fontSize: "13px", fontWeight: "600", color: "#0f172a", display: "flex", alignItems: "center", gap: "6px", boxShadow: "0 1px 2px rgba(15,23,42,.04)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>
              Export
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="m6 9 6 6 6-6" /></svg>
            </button>
            {V.an?.exportOpen && <>
              <div onClick={V.an?.closeMenus} style={{ position: "fixed", inset: "0", zIndex: "39" }} />
              <div style={{ position: "absolute", right: "0", top: "44px", zIndex: "40", width: "240px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 18px 44px rgba(15,23,42,.16)", padding: "6px", display: "flex", flexDirection: "column" }}>
                <button className="scpb" onClick={V.an?.exportPdf} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", display: "flex", gap: "10px", alignItems: "flex-start", padding: "10px 12px", borderRadius: "8px", color: "#0f172a" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b91c1c" style={{ flexShrink: "0", marginTop: "1px", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                    <path d="M14 3v5h5" />
                  </svg>
                  <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "13.5px", fontWeight: "600" }}>PDF report</span>
                    <span style={{ fontSize: "12px", color: "#475569" }}>{"Full dashboard for "}{S(V.an?.rangeText)}</span>
                  </span>
                </button>
                <button className="scpb" onClick={V.an?.exportCsv} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", display: "flex", gap: "10px", alignItems: "flex-start", padding: "10px 12px", borderRadius: "8px", color: "#0f172a" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15803D" style={{ flexShrink: "0", marginTop: "1px", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 5h16v14H4zM4 10h16M4 15h16M10 5v14" /></svg>
                  <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "13.5px", fontWeight: "600" }}>CSV data</span>
                    <span style={{ fontSize: "12px", color: "#475569" }}>All figures in a spreadsheet</span>
                  </span>
                </button>
              </div>
            </>}
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "14px" }}>
        {L(V.an?.kpis).map((k, i43) => <React.Fragment key={i43}>
          <button className="scp19" onClick={k?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", textAlign: "left", color: "inherit", background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", padding: "12px 16px 10px", minHeight: "0", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px", transition: "border-color .15s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
              <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".08em", color: "#475569", lineHeight: "1.35" }}>{S(k?.label)}</span>
              <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: `${A(k?.ibg)}`, color: `${A(k?.ifg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={k?.d} /></svg></span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "6px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1", color: "#0F172A" }}>{S(k?.v)}</span>
              <span style={{ fontSize: "13px", color: "#475569" }}>{S(k?.of)}</span>
            </div>
            {k?.hasSec && <>
              <div style={{ fontSize: "12.5px", color: "#334155", lineHeight: "1.4" }}>{S(k?.sec)}</div>
            </>}
            {k?.hasTrend && <>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", fontSize: "12px", color: "#94A3B8", paddingTop: "6px", borderTop: "1px solid #F1F5F9" }}>
                <span style={{ fontWeight: "600", color: `${A(k?.tc)}` }}>{S(k?.trend)}</span>
                {S(V.an?.vs)}
              </div>
            </>}
          </button>
        </React.Fragment>)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
        <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column", minWidth: "0", flex: "1 1 420px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", padding: "16px 18px 12px" }}>
            <div style={{ minWidth: "0" }}>
              <div style={{ fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "#0F172A" }}>Platform Adoption</div>
              <div style={{ fontSize: "12px", color: "#475569", marginTop: "2px" }}>{"Share of users and farms active · "}{S(V.an?.rangeText)}</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: "8px", padding: "0 18px" }}>
            {L(V.an?.adopt).map((ad, i44) => <React.Fragment key={i44}>
              <div style={{ padding: "9px 12px", borderRadius: "10px", background: "#F8FAFC", border: "1px solid #F1F5F9", display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                <span style={{ fontSize: "11.5px", color: "#475569", whiteSpace: "nowrap" }}>{S(ad?.label)}</span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                  <b style={{ fontSize: "18px", fontWeight: "700", color: "#0F172A", letterSpacing: "-.01em" }}>{S(ad?.v)}</b>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: `${A(ad?.tc)}` }}>{S(ad?.ch)}</span>
                </span>
              </div>
            </React.Fragment>)}
          </div>
          <div style={{ padding: "14px 18px 10px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ width: "32px", height: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end", fontSize: "10.5px", color: "#94a3b8", margin: "-6px 0" }}>
                {L(V.an?.eng?.yl).map((y, i45) => <React.Fragment key={i45}>
                  <span>{S(y?.v)}</span>
                </React.Fragment>)}
              </div>
              <div style={{ flex: "1", minWidth: "0", paddingRight: "84px" }}>
                <div onMouseLeave={V.an?.eng?.leave} style={{ position: "relative", height: "200px" }}>
                  {L(V.an?.eng?.grid).map((g, i46) => <React.Fragment key={i46}>
                    <div style={{ position: "absolute", left: "0", right: "0", top: `${A(g?.t)}`, borderTop: "1px dashed #E8EDF3" }} />
                  </React.Fragment>)}
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                    {L(V.an?.eng?.series).map((se, i47) => <React.Fragment key={i47}>
                      <polyline points={se?.pts} style={{ fill: "none", stroke: `${A(se?.c)}`, strokeWidth: "2.5", strokeLinejoin: "round", strokeLinecap: "round", vectorEffect: "non-scaling-stroke" }} />
                    </React.Fragment>)}
                  </svg>
                  {L(V.an?.eng?.ends).map((e, i48) => <React.Fragment key={i48}>
                    <span style={{ position: "absolute", left: `calc(${A(e?.l)} + 10px)`, top: `${A(e?.t)}`, transform: "translateY(-50%)", fontSize: "12px", fontWeight: "600", color: `${A(e?.c)}`, whiteSpace: "nowrap" }}>{S(e?.label)}{" "}{S(e?.v)}</span>
                  </React.Fragment>)}
                  {V.an?.eng?.hov && <>
                    <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(V.an?.eng?.hx)}`, width: "1px", background: "#CBD5E1" }} />
                    {L(V.an?.eng?.dots).map((d, i49) => <React.Fragment key={i49}>
                      <span style={{ position: "absolute", left: `${A(d?.l)}`, top: `${A(d?.t)}`, width: "9px", height: "9px", borderRadius: "50%", background: "#fff", border: `2px solid ${A(d?.c)}`, transform: "translate(-50%,-50%)" }} />
                    </React.Fragment>)}
                    <div style={{ position: "absolute", top: "4px", left: `${A(V.an?.eng?.hx)}`, transform: `${A(V.an?.eng?.tipT)}`, background: "#0F172A", color: "#fff", borderRadius: "8px", padding: "8px 10px", fontSize: "12px", pointerEvents: "none", zIndex: "2", boxShadow: "0 8px 20px rgba(15,23,42,.2)", whiteSpace: "nowrap", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "11px", color: "#94A3B8", fontWeight: "600" }}>{S(V.an?.eng?.tipWk)}</span>
                      {L(V.an?.eng?.tip).map((tp, i50) => <React.Fragment key={i50}>
                        <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: `${A(tp?.c)}` }} />
                          {S(tp?.label)}
                          <b style={{ marginLeft: "auto", paddingLeft: "10px", fontWeight: "600" }}>{S(tp?.v)}</b>
                        </span>
                      </React.Fragment>)}
                    </div>
                  </>}
                  <div style={{ position: "absolute", inset: "0", display: "flex" }}>
                    {L(V.an?.eng?.cols).map((c, i51) => <React.Fragment key={i51}>
                      <div onMouseEnter={c?.enter} style={{ flex: "1", height: "100%" }} />
                    </React.Fragment>)}
                  </div>
                </div>
                <div style={{ display: "flex", paddingTop: "6px" }}>
                  {L(V.an?.eng?.xl).map((x, i52) => <React.Fragment key={i52}>
                    <span style={{ flex: "1", minWidth: "0", textAlign: "center", fontSize: "10.5px", color: "#94a3b8", whiteSpace: "nowrap", overflow: "hidden" }}>{S(x?.l)}</span>
                  </React.Fragment>)}
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "auto", padding: "12px 18px 14px", borderTop: "1px solid #F1F5F9", fontSize: "12.5px", color: "#475569", lineHeight: "1.45", textWrap: "pretty" }}>{S(V.an?.eng?.insight)}</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column", minWidth: "0", flex: "1 1 420px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px 12px", padding: "16px 18px 12px" }}>
            <div style={{ minWidth: "0", flex: "1 1 150px" }}>
              <div style={{ fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "#0F172A" }}>Farm Engagement</div>
              <div style={{ fontSize: "12px", color: "#475569", marginTop: "2px" }}>{"Engagement score (0–100) · "}{S(V.an?.rangeText)}</div>
            </div>
            <div style={{ display: "flex", padding: "3px", borderRadius: "9px", background: "#F1F5F9", gap: "2px", flexShrink: "0" }}>
              {L(V.an?.farmModes).map((m, i53) => <React.Fragment key={i53}>
                <button onClick={m?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "28px", padding: "0 10px", borderRadius: "7px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", background: `${A(m?.bg)}`, color: `${A(m?.fg)}`, boxShadow: `${A(m?.sh)}` }}>{S(m?.label)}</button>
              </React.Fragment>)}
            </div>
          </div>
          <div style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "space-evenly", gap: "2px", padding: "0 10px 10px" }}>
            {L(V.an?.farms).map((f, i54) => <React.Fragment key={i54}>
              <div style={{ display: "flex", flexDirection: "column", borderRadius: "9px", background: `${A(f?.rowBg)}` }}>
                <button className="scp11" onClick={f?.toggle} title={f?.tip} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", color: "inherit", margin: "0", cursor: "pointer", textAlign: "left", display: "grid", gridTemplateColumns: "24px minmax(0,1.2fr) minmax(48px,1fr) 52px", gap: "10px", alignItems: "center", padding: "9px 8px", borderRadius: "9px" }}>
                  <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: `${A(f?.rkBg)}`, color: `${A(f?.rkFg)}`, fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>{S(f?.rank)}</span>
                  <span style={{ fontSize: "13px", fontWeight: "500", lineHeight: "1.3" }}>{S(f?.name)}</span>
                  <span style={{ height: "8px", borderRadius: "99px", background: "#f1f5f9", overflow: "hidden" }}><span style={{ display: "block", height: "100%", width: `${A(f?.w)}`, borderRadius: "99px", background: `${A(f?.c)}` }} /></span>
                  <span style={{ textAlign: "right", fontSize: "13.5px", fontWeight: "700", color: "#0F172A", whiteSpace: "nowrap" }}>
                    {S(f?.score)}
                    <span style={{ fontSize: "11px", fontWeight: "500", color: "#94A3B8" }}>/100</span>
                  </span>
                </button>
                {f?.open && <>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", flexWrap: "wrap", padding: "0 8px 10px 42px", fontSize: "12px", color: "#475569" }}>
                    <span>{S(f?.detail)}</span>
                    <button className="scp1a" onClick={f?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "2px 4px", cursor: "pointer", borderRadius: "6px", fontSize: "12px", fontWeight: "600", color: "#0891B2" }}>View farm</button>
                  </div>
                </>}
              </div>
            </React.Fragment>)}
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "14px" }}>
        <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column", minWidth: "0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", padding: "16px 18px 12px" }}>
            <div style={{ minWidth: "0" }}>
              <div style={{ fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "#0F172A" }}>Device fleet health</div>
              <div style={{ fontSize: "12px", color: "#475569", marginTop: "2px" }}>{S(V.an?.fleet?.sub)}</div>
            </div>
            <button className="scp1a" onClick={V.nav?.devices?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "4px 6px", cursor: "pointer", borderRadius: "7px", fontSize: "12px", fontWeight: "600", color: "#0891B2", display: "flex", alignItems: "center", gap: "4px", whiteSpace: "nowrap", flexShrink: "0" }}>
              Devices
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </div>
          <div style={{ padding: "2px 18px 18px", flex: "1", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ flex: "1", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: "12px" }}>
              {L(V.an?.fleet?.provs).map((pv, i55) => <React.Fragment key={i55}>
                <div style={{ padding: "18px", borderRadius: "12px", background: "#F8FAFC", border: "1px solid #EEF2F6", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", minWidth: "0" }}>
                  <span style={{ height: "26px", display: "flex", alignItems: "center" }}><img src={pv?.logo} alt={pv?.name} style={{ maxHeight: "22px", maxWidth: "110px", objectFit: "contain" }} /></span>
                  <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.03em", color: "#0F172A", lineHeight: "1" }}>
                    {S(pv?.n)}
                    <span style={{ fontSize: "13px", fontWeight: "500", color: "#475569", marginLeft: "6px", letterSpacing: "0" }}>devices</span>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ height: "8px", borderRadius: "99px", background: "#FEE2E2", overflow: "hidden", display: "flex" }}><span style={{ display: "block", height: "100%", width: (+pv?.n ? Math.round(+pv?.on / +pv?.n * 100) : 0) + "%", background: "#0F9F8F", borderRadius: "99px" }} /></span>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: "8px", fontSize: "12.5px", color: "#475569" }}>
                      <span><b style={{ color: "#0F766E", fontWeight: "600" }}>{S(pv?.on)}</b>{" online"}</span>
                      <span><b style={{ color: "#B91C1C", fontWeight: "600" }}>{S(pv?.off)}</b>{" offline"}</span>
                    </span>
                  </span>
                </div>
              </React.Fragment>)}
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column", minWidth: "0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", padding: "16px 18px 12px" }}>
            <div style={{ minWidth: "0" }}>
              <div style={{ fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "#0F172A" }}>Provider connections</div>
              <div style={{ fontSize: "12px", color: "#475569", marginTop: "2px" }}>Providers connected on each farm</div>
            </div>
          </div>
          <div style={{ padding: "10px 18px 14px", flex: "1", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", flex: "1", minHeight: "150px", borderBottom: "1px solid #E2E8F0" }}>
              {L(V.an?.conn?.farms).map((cf, i56) => <React.Fragment key={i56}>
                <div title={cf?.tip} style={{ flex: "1", minWidth: "0", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "5px", cursor: "default" }}>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: "#0F172A" }}>{S(cf?.n)}</span>
                  <div style={{ width: "100%", maxWidth: "34px", height: `${A(cf?.hAll)}`, background: "#0A2342", borderRadius: "5px 5px 0 0" }} />
                </div>
              </React.Fragment>)}
            </div>
            <div style={{ display: "flex", gap: "10px", paddingTop: "8px" }}>
              {L(V.an?.conn?.farms).map((cf, i57) => <React.Fragment key={i57}>
                <span title={cf?.tip} style={{ flex: "1", minWidth: "0", textAlign: "center", fontSize: "11px", color: "#475569", lineHeight: "1.25", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{S(cf?.short)}</span>
              </React.Fragment>)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "14px" }}>
        <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column", minWidth: "0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", padding: "16px 18px 12px" }}>
            <div style={{ minWidth: "0" }}>
              <div style={{ fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "#0F172A" }}>Support tickets</div>
              <div style={{ fontSize: "12px", color: "#475569", marginTop: "2px" }}>{S(V.an?.tix?.open)}{" unresolved of "}{S(V.an?.tix?.total)}{" tickets"}{S(V.an?.tix?.oldest)}</div>
            </div>
            <button className="scp1a" onClick={V.nav?.support?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "4px 6px", cursor: "pointer", borderRadius: "7px", fontSize: "12px", fontWeight: "600", color: "#0891B2", display: "flex", alignItems: "center", gap: "4px", whiteSpace: "nowrap", flexShrink: "0" }}>
              Support
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </div>
          <div style={{ padding: "0 18px 16px", flex: "1", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "6px" }}>
              {L(V.an?.tix?.status).map((st, i58) => <React.Fragment key={i58}>
                <div style={{ padding: "10px 12px", borderRadius: "10px", background: `${A(st?.bg)}`, minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11.5px", fontWeight: "600", color: `${A(st?.c)}`, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: `${A(st?.c)}`, flexShrink: "0" }} />
                    {S(st?.label)}
                  </span>
                  <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em", color: "#0F172A" }}>{S(st?.n)}</span>
                </div>
              </React.Fragment>)}
            </div>
            {V.an?.tix?.none && <>
              <div style={{ padding: "22px 0 6px", borderTop: "1px solid #f1f5f9", textAlign: "center", fontSize: "13px", color: "#475569" }}>No tickets were raised in this period.</div>
            </>}
            {V.an?.tix?.has && <>
              <div style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center", gap: "28px", flexWrap: "wrap", paddingTop: "14px", borderTop: "1px solid #f1f5f9" }}>
                <div style={{ position: "relative", width: "150px", height: "150px", flexShrink: "0" }}>
                  <svg viewBox="0 0 42 42" style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
                    <circle cx="21" cy="21" r="15.9155" style={{ fill: "none", stroke: "#F1F5F9", strokeWidth: "6" }} />
                    {L(V.an?.tix?.donut).map((dn, i59) => <React.Fragment key={i59}>
                      <circle cx="21" cy="21" r="15.9155" style={{ fill: "none", stroke: `${A(dn?.c)}`, strokeWidth: "6", strokeDasharray: `${A(dn?.da)}`, strokeDashoffset: `${A(dn?.off)}` }} />
                    </React.Fragment>)}
                  </svg>
                  <div style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "22px", fontWeight: "700", color: "#0F172A", lineHeight: "1" }}>{S(V.an?.tix?.catTotal)}</span>
                    <span style={{ fontSize: "11px", color: "#475569", marginTop: "3px" }}>tickets</span>
                  </div>
                </div>
                <div style={{ flex: "1 1 180px", maxWidth: "340px", display: "flex", flexDirection: "column", gap: "11px", minWidth: "0" }}>
                  <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".1em", color: "#475569" }}>BY CATEGORY</span>
                  {L(V.an?.tix?.donut).map((dn, i60) => <React.Fragment key={i60}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
                      <span style={{ width: "10px", height: "10px", borderRadius: "3px", background: `${A(dn?.c)}`, flexShrink: "0" }} />
                      <span style={{ flex: "1", minWidth: "0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "#0F172A" }}>{S(dn?.label)}</span>
                      <b style={{ fontWeight: "600" }}>{S(dn?.n)}</b>
                      <span style={{ width: "36px", textAlign: "right", fontSize: "12px", color: "#475569" }}>{S(dn?.pct)}</span>
                    </div>
                  </React.Fragment>)}
                </div>
              </div>
            </>}
          </div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column", minWidth: "0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", padding: "16px 18px 12px" }}>
            <div style={{ minWidth: "0" }}>
              <div style={{ fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "#0F172A" }}>Alerts summary</div>
              <div style={{ fontSize: "12px", color: "#475569", marginTop: "2px" }}>{S(V.an?.alerts?.total)}{" alerts triggered · "}{S(V.an?.rangeText)}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", padding: "0 18px 10px" }}>
            {L(V.an?.alerts?.sev).map((sv, i61) => <React.Fragment key={i61}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 10px", borderRadius: "999px", background: `${A(sv?.bg)}`, color: `${A(sv?.fg)}`, border: `1px solid ${A(sv?.bd)}`, fontSize: "12px", fontWeight: "600" }}>
                {S(sv?.k)}
                <b style={{ fontWeight: "700" }}>{S(sv?.n)}</b>
              </span>
            </React.Fragment>)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "24px minmax(0,1.4fr) minmax(0,1fr) 72px 56px", gap: "12px", padding: "0 18px 6px", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".05em", textTransform: "uppercase", color: "#94a3b8" }}>
            <span />
            <span>Alert</span>
            <span>Farm</span>
            <span>Severity</span>
            <span style={{ textAlign: "right" }}>Count</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: "0 10px 12px" }}>
            {L(V.an?.alerts?.top).map((al, i62) => <React.Fragment key={i62}>
              <div style={{ display: "grid", gridTemplateColumns: "24px minmax(0,1.4fr) minmax(0,1fr) 72px 56px", gap: "12px", alignItems: "center", padding: "10px 8px", borderTop: "1px solid #F8FAFC", fontSize: "13px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#F1F5F9", color: "#475569", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>{S(al?.rank)}</span>
                <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                  <span style={{ fontWeight: "500", color: "#0F172A", lineHeight: "1.3" }}>{S(al?.label)}</span>
                  <span style={{ fontSize: "11.5px", color: "#64748B" }}>{S(al?.cat)}</span>
                </span>
                <span style={{ color: "#475569", lineHeight: "1.3" }}>{S(al?.farm)}</span>
                <span><span style={{ fontSize: "11px", fontWeight: "700", padding: "2px 8px", borderRadius: "999px", background: `${A(al?.sbg)}`, color: `${A(al?.sfg)}`, border: `1px solid ${A(al?.sbd)}` }}>{S(al?.sev)}</span></span>
                <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <b style={{ fontWeight: "700", color: "#0F172A" }}>{S(al?.v)}</b>
                  <span style={{ fontSize: "11px", color: "#64748B" }}>{S(al?.share)}</span>
                </span>
              </div>
            </React.Fragment>)}
          </div>
          <div style={{ marginTop: "auto", padding: "12px 18px 14px", borderTop: "1px solid #F1F5F9", fontSize: "12.5px", color: "#475569", lineHeight: "1.45" }}>{S(V.an?.alerts?.sum)}</div>
        </div>
      </div>
      <div style={{ background: "#fff", border: "1px solid #DCE3EB", borderRadius: "12px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 1px 2px rgba(15,23,42,.04)", display: "flex", flexDirection: "column", minWidth: "0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", padding: "16px 18px 12px" }}>
          <div style={{ minWidth: "0" }}>
            <div style={{ fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "#0F172A" }}>Most used features</div>
            <div style={{ fontSize: "12px", color: "#475569", marginTop: "2px" }}>{"Share of active farms using each feature · "}{S(V.an?.rangeText)}</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "4px 32px", padding: "0 10px 10px" }}>
          {L(V.an?.features).map((f, i63) => <React.Fragment key={i63}>
            <div style={{ display: "grid", gridTemplateColumns: "24px minmax(0,1fr) 48px", gap: "12px", alignItems: "center", padding: "10px 8px" }}>
              <span style={{ width: "24px", height: "24px", borderRadius: "7px", background: "#F1F5F9", color: "#475569", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>{S(f?.rank)}</span>
              <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "7px" }}>
                <span style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px", minWidth: "0" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: "600", color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", flexShrink: "0", maxWidth: "50%" }}>{S(f?.label)}</span>
                  <span title={f?.sub} style={{ fontSize: "11.5px", color: "#64748B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: "0" }}>{S(f?.sub)}</span>
                </span>
                <span style={{ height: "8px", borderRadius: "99px", background: "#f1f5f9", overflow: "hidden" }}><span style={{ display: "block", height: "100%", width: `${A(f?.w)}`, borderRadius: "99px", background: "#0e8fb0" }} /></span>
              </span>
              <span style={{ textAlign: "right", fontSize: "14px", fontWeight: "700", color: "#0F172A" }}>{S(f?.pct)}</span>
            </div>
          </React.Fragment>)}
        </div>
        <div style={{ marginTop: "auto", padding: "12px 18px 14px", borderTop: "1px solid #F1F5F9", fontSize: "12.5px", color: "#475569", lineHeight: "1.45", textWrap: "pretty" }}>{S(V.an?.featSum)}</div>
      </div>
    </div>
    </>
  );
}
