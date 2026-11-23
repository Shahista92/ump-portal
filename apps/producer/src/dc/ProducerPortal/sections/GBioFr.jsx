import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';

export default function GBioFr({ V }) {
  return (
    <>
    <div style={{ background: "#fff", background: `${A(V.g?.bio?.fr?.bg)}`, border: `1px solid ${A(V.g?.bio?.fr?.bd)}`, borderRadius: "20px", boxShadow: "0 8px 24px rgba(15,23,42,.05)", padding: "28px 32px 24px", display: "flex", flexDirection: "column", gap: "22px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "15px", fontWeight: "600", color: "#1E293B" }}>
          <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: `${A(V.g?.bio?.fr?.dot)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={V.g?.bio?.fr?.expIc} /></svg></span>
          Feed Position
          {V.g?.bio?.fr?.h?.ref && <>
            <span style={{ position: "relative", display: "inline-flex", flexShrink: "0", fontWeight: "400", letterSpacing: "0" }}>
              <button className="scp1c" onClick={V.g?.bio?.fr?.h?.ref?.tog} aria-label="Info" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", color: "#94A3B8", display: "flex" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 11v5M12 8h.01" />
                </svg>
              </button>
              {V.g?.bio?.fr?.h?.ref?.open && <>
                <span onClick={V.g?.bio?.fr?.h?.ref?.off} style={{ position: "fixed", inset: "0", zIndex: "44", cursor: "default" }} />
                <span style={{ position: "absolute", left: "-14px", top: "100%", paddingTop: "8px", zIndex: "45", width: "310px" }}>
                  <span style={{ display: "flex", flexDirection: "column", gap: "11px", background: "#fff", color: "#1E293B", borderRadius: "12px", padding: "14px 16px", boxShadow: "0 0 0 1px rgba(15,23,42,.06),0 16px 40px rgba(15,23,42,.18)", whiteSpace: "normal", textAlign: "left", fontWeight: "400", letterSpacing: "0" }}>
                    <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                      <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#64748B" }}>DEFINITION</span>
                      <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(V.g?.bio?.fr?.h?.ref?.d)}</span>
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                      <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#2563EB" }}>REFERENCE</span>
                      <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(V.g?.bio?.fr?.h?.ref?.r)}</span>
                      {V.g?.bio?.fr?.h?.ref?.lk && <>
                        <a href={V.g?.bio?.fr?.h?.ref?.lk?.href} target="_blank" rel="noopener" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: "600", color: "#2563EB", textDecoration: "underline", textUnderlineOffset: "2px" }}>{S(V.g?.bio?.fr?.h?.ref?.lk?.l)}{" ↗"}</a>
                      </>}
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                      <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#1F7A4A" }}>UMP+</span>
                      <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(V.g?.bio?.fr?.h?.ref?.u)}</span>
                    </span>
                  </span>
                </span>
              </>}
            </span>
          </>}
        </span>
        <span style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
          <span ref={V.g?.bio?.fr?.numRef} style={{ fontSize: "clamp(72px,8vw,120px)", fontWeight: "700", letterSpacing: "-.05em", lineHeight: ".92", color: `${A(V.g?.bio?.fr?.c)}`, fontVariantNumeric: "tabular-nums" }}>{S(V.g?.bio?.fr?.num)}</span>
          <span style={{ fontSize: "32px", fontWeight: "600", color: "#0F172A", letterSpacing: "-.01em" }}>Days</span>
        </span>
        <span style={{ fontSize: "16px", fontWeight: "600", color: "#1E293B" }}>Feed remaining</span>
        <span style={{ fontSize: "13.5px", color: "#475569" }}>{S(V.g?.bio?.fr?.sub1)}{" and current pasture availability"}</span>
        <span style={{ fontSize: "12.5px", color: "#64748B" }}>{S(V.g?.bio?.fr?.sub2)}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", padding: "14px 18px", borderRadius: "14px", background: "#fff", border: `1px solid ${A(V.g?.bio?.fr?.expBd)}` }}>
        <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: `${A(V.g?.bio?.fr?.expFg)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={V.g?.bio?.fr?.expIc} /></svg></span>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: "1 1 220px", minWidth: "0" }}>
          <span style={{ fontSize: "17px", fontWeight: "700", color: "#1E293B" }}>{S(V.g?.bio?.fr?.expT)}</span>
          <span style={{ fontSize: "30px", fontWeight: "800", letterSpacing: "-.02em", lineHeight: "1.1", color: `${A(V.g?.bio?.fr?.expFg)}` }}>{S(V.g?.bio?.fr?.expBig)}</span>
        </div>
        <div style={{ flex: "1 1 240px", minWidth: "200px", position: "relative", paddingTop: "18px" }}>
          <span style={{ position: "absolute", top: "0", left: `${A(V.g?.bio?.fr?.barPlan)}`, transform: "translateX(-50%)", fontSize: "11px", fontWeight: "600", color: "#334155", whiteSpace: "nowrap" }}>{S(V.g?.bio?.fr?.barPlanL)}</span>
          <div style={{ position: "relative", height: "10px", borderRadius: "999px", background: "rgba(15,23,42,.08)" }}>
            <div style={{ height: "100%", width: `${A(V.g?.bio?.fr?.barW)}`, borderRadius: "999px", background: `${A(V.g?.bio?.fr?.expFg)}`, transition: "width .8s ease" }} />
            <div style={{ position: "absolute", top: "-5px", bottom: "-5px", left: `${A(V.g?.bio?.fr?.barPlan)}`, borderLeft: "2px solid #0F172A" }} />
          </div>
        </div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "12px" }}>
      {L(V.g?.bio?.fr?.cards).map((k, i130) => <React.Fragment key={i130}>
        <div style={{ background: "#fff", border: "0", borderRadius: "16px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 8px 24px rgba(15,23,42,.06)", padding: "12px 16px", display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "12px", fontWeight: "600", color: "#64748B" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2E8B57" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", flexShrink: "0" }}><path d={k?.ic} /></svg>
            {S(k?.l)}
            {k?.ref && <>
              <span style={{ position: "relative", display: "inline-flex", flexShrink: "0", fontWeight: "400", letterSpacing: "0" }}>
                <button className="scp1c" onClick={k?.ref?.tog} aria-label="Info" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "0", cursor: "pointer", color: "#94A3B8", display: "flex" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 11v5M12 8h.01" />
                  </svg>
                </button>
                {k?.ref?.open && <>
                  <span onClick={k?.ref?.off} style={{ position: "fixed", inset: "0", zIndex: "44", cursor: "default" }} />
                  <span style={{ position: "absolute", left: "-14px", top: "100%", paddingTop: "8px", zIndex: "45", width: "310px" }}>
                    <span style={{ display: "flex", flexDirection: "column", gap: "11px", background: "#fff", color: "#1E293B", borderRadius: "12px", padding: "14px 16px", boxShadow: "0 0 0 1px rgba(15,23,42,.06),0 16px 40px rgba(15,23,42,.18)", whiteSpace: "normal", textAlign: "left", fontWeight: "400", letterSpacing: "0" }}>
                      <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                        <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#64748B" }}>DEFINITION</span>
                        <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(k?.ref?.d)}</span>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                        <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#2563EB" }}>REFERENCE</span>
                        <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(k?.ref?.r)}</span>
                        {k?.ref?.lk && <>
                          <a href={k?.ref?.lk?.href} target="_blank" rel="noopener" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: "600", color: "#2563EB", textDecoration: "underline", textUnderlineOffset: "2px" }}>{S(k?.ref?.lk?.l)}{" ↗"}</a>
                        </>}
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                        <span style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: ".08em", color: "#1F7A4A" }}>UMP+</span>
                        <span style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#1E293B" }}>{S(k?.ref?.u)}</span>
                      </span>
                    </span>
                  </span>
                </>}
              </span>
            </>}
          </span>
          <span style={{ display: "flex", alignItems: "baseline", gap: "6px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.02em", color: `${A(k?.fg)}`, fontVariantNumeric: "tabular-nums", lineHeight: "1.15" }}>{S(k?.v)}</span>
            <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#64748B" }}>{S(k?.u)}</span>
          </span>
          <span style={{ fontSize: "11.5px", color: "#64748B" }}>{S(k?.note)}</span>
        </div>
      </React.Fragment>)}
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "stretch" }}>
      <div style={{ background: "#fff", border: "0", borderRadius: "16px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 8px 24px rgba(15,23,42,.06)", flex: "1.7 1 460px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: "600", fontSize: "15px", color: "#0F172A", display: "flex", alignItems: "center", gap: "6px" }}>
              Feed Remaining Projection
              <span className="scp17" data-tip="Projects remaining pasture over time based on livestock numbers and grazing demand." style={{ display: "inline-flex", color: "#94A3B8", cursor: "pointer" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 11v5M12 8h.01" />
                </svg>
              </span>
            </div>
            <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>Pasture available for grazing (t DM) as livestock graze</div>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center", fontSize: "12px", color: "#475569" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "16px", borderTop: `3px solid ${A(V.g?.bio?.fr?.c)}` }} />
              {S(V.g?.bio?.fr?.curLeg)}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "16px", borderTop: "2.5px dashed #D97706" }} />
              {S(V.g?.bio?.fr?.altLeg)}
            </span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px", flex: "1", minHeight: "260px" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "46px", flexShrink: "0", textAlign: "right", fontSize: "11px", color: "#94a3b8", paddingBottom: "24px", marginTop: "-6px" }}>
            {L(V.g?.bio?.fr?.proj?.ticks).map((tk, i131) => <React.Fragment key={i131}>
              <span>{S(tk)}</span>
            </React.Fragment>)}
          </div>
          <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div data-zk="fbproj" data-zn={V.g?.bio?.fr?.proj?.zn} style={{ flex: "1", position: "relative", borderBottom: "1px solid #CBD5E1", clipPath: "inset(-40px -16px -16px -16px)" }}>
              <div style={{ position: "absolute", left: "0", right: "0", top: "0", borderTop: "1px dashed #F1F5F9" }} />
              <div style={{ position: "absolute", left: "0", right: "0", top: "33.3%", borderTop: "1px dashed #F1F5F9" }} />
              <div style={{ position: "absolute", left: "0", right: "0", top: "66.6%", borderTop: "1px dashed #F1F5F9" }} />
              <svg viewBox="0 0 600 200" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                <path d={V.g?.bio?.fr?.proj?.area} fill={V.g?.bio?.fr?.c} style={{ fillOpacity: ".3" }} />
                <polyline points={V.g?.bio?.fr?.proj?.alt} fill="none" stroke="#D97706" style={{ strokeWidth: "2.5", strokeDasharray: "6 5", vectorEffect: "non-scaling-stroke", strokeLinejoin: "round" }} />
                <polyline points={V.g?.bio?.fr?.proj?.line} fill="none" stroke={V.g?.bio?.fr?.c} style={{ strokeWidth: "4", vectorEffect: "non-scaling-stroke", strokeLinejoin: "round", strokeLinecap: "round" }} />
              </svg>
              <div ref={V.g?.bio?.fr?.coverRef} style={{ position: "absolute", top: "0", right: "0", bottom: "0", width: "0", background: "#fff", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(V.g?.bio?.fr?.proj?.planX)}`, borderLeft: "2px dashed #0F172A", opacity: ".55" }} />
              <span style={{ position: "absolute", top: "4px", left: `${A(V.g?.bio?.fr?.proj?.planX)}`, marginLeft: "6px", fontSize: "11px", fontWeight: "600", color: "#334155", whiteSpace: "nowrap", background: "rgba(255,255,255,.85)", padding: "1px 4px", borderRadius: "4px" }}>{S(V.g?.bio?.fr?.proj?.planL)}</span>
              {V.g?.bio?.fr?.proj?.pd && <>
                <span style={{ position: "absolute", left: `${A(V.g?.bio?.fr?.proj?.pd?.left)}`, top: `${A(V.g?.bio?.fr?.proj?.pd?.top)}`, width: "12px", height: "12px", margin: "-6px 0 0 -6px", borderRadius: "50%", background: "#fff", border: `3px solid ${A(V.g?.bio?.fr?.c)}`, boxSizing: "border-box" }} />
                <span style={{ position: "absolute", left: `${A(V.g?.bio?.fr?.proj?.pd?.left)}`, top: `${A(V.g?.bio?.fr?.proj?.pd?.top)}`, margin: "-28px 0 0 10px", fontSize: "11.5px", fontWeight: "700", color: "#0F172A", whiteSpace: "nowrap", background: "rgba(255,255,255,.9)", padding: "1px 5px", borderRadius: "4px" }}>{S(V.g?.bio?.fr?.proj?.pd?.t)}</span>
              </>}
              {V.g?.bio?.fr?.proj?.out && <>
                <span style={{ position: "absolute", left: `${A(V.g?.bio?.fr?.proj?.out?.left)}`, top: "100%", width: "16px", height: "16px", margin: "-8px 0 0 -8px", borderRadius: "50%", background: "#DC2626", border: "3px solid #fff", boxShadow: "0 0 0 3px rgba(220,38,38,.25)", boxSizing: "border-box" }} />
                <span style={{ position: "absolute", left: `${A(V.g?.bio?.fr?.proj?.out?.left)}`, bottom: "14px", transform: "translateX(-50%)", fontSize: "12px", fontWeight: "700", color: "#fff", whiteSpace: "nowrap", background: "#DC2626", padding: "3px 9px", borderRadius: "6px" }}>{S(V.g?.bio?.fr?.proj?.out?.t)}</span>
              </>}
            </div>
            <div style={{ position: "relative", height: "16px", fontSize: "11px", color: "#94a3b8" }}>
              {L(V.g?.bio?.fr?.proj?.xl).map((x, i132) => <React.Fragment key={i132}>
                <span style={{ position: "absolute", left: `${A(x?.left)}`, transform: `${A(x?.tf)}`, whiteSpace: "nowrap" }}>{S(x?.t)}</span>
              </React.Fragment>)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "#fff", border: "0", borderRadius: "16px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 8px 24px rgba(15,23,42,.06)", flex: "1 1 300px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0" }}>
        <div>
          <div style={{ fontWeight: "600", fontSize: "15px", color: "#0F172A", display: "flex", alignItems: "center", gap: "6px" }}>
            Scenario Comparison
            <span className="scp17" data-tip="Use the slider to test different herd sizes and see how long your available feed is likely to last under each scenario. This helps with stocking and feed planning decisions." style={{ display: "inline-flex", color: "#94A3B8", cursor: "pointer" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round" }}>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
            </span>
          </div>
          <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "2px" }}>What if your herd size changes?</div>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 120px", display: "flex", flexDirection: "column", gap: "2px", padding: "12px 14px", borderRadius: "14px", background: "#F3FAF5" }}>
            <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".06em", color: "#1F7A4A" }}>CURRENT HERD</span>
            <span style={{ fontSize: "26px", fontWeight: "800", letterSpacing: "-.02em", lineHeight: "1.1", color: "#0F172A" }}>
              {S(V.g?.bio?.fr?.sc?.curH)}
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#64748B" }}>{" Head"}</span>
            </span>
          </div>
          <div style={{ flex: "1 1 120px", display: "flex", flexDirection: "column", gap: "2px", padding: "12px 14px", borderRadius: "14px", background: "#FFF7ED" }}>
            <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".06em", color: "#B45309" }}>SCENARIO HERD</span>
            <span style={{ fontSize: "26px", fontWeight: "800", letterSpacing: "-.02em", lineHeight: "1.1", color: "#0F172A" }}>
              {S(V.g?.bio?.fr?.sc?.alt?.v)}
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#64748B" }}>{" Head"}</span>
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <input type="range" min={V.g?.bio?.fr?.sc?.alt?.min} max={V.g?.bio?.fr?.sc?.alt?.max} step="5" value={V.g?.bio?.fr?.sc?.alt?.v ?? ""} onChange={V.g?.bio?.fr?.sc?.alt?.set} style={{ width: "100%", accentColor: "#D97706", cursor: "pointer" }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10.5px", color: "#94A3B8" }}>
            <span>{S(V.g?.bio?.fr?.sc?.alt?.min)}</span>
            <span>{S(V.g?.bio?.fr?.sc?.alt?.max)}</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", padding: "12px 0 2px" }}>
          <div style={{ flex: "1 1 90px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#64748B" }}>Current</span>
            <span style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-.02em", color: "#1F7A4A", fontVariantNumeric: "tabular-nums" }}>{S(V.g?.bio?.fr?.sc?.curD)}</span>
          </div>
          <div style={{ flex: "1 1 90px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#64748B" }}>Scenario</span>
            <span style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-.02em", color: "#B45309", fontVariantNumeric: "tabular-nums" }}>{S(V.g?.bio?.fr?.sc?.altD)}</span>
          </div>
          <div style={{ flex: "1 1 90px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#64748B" }}>Difference</span>
            <span style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-.02em", color: `${A(V.g?.bio?.fr?.sc?.diffC)}`, fontVariantNumeric: "tabular-nums" }}>{S(V.g?.bio?.fr?.sc?.diff)}</span>
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "12px", paddingTop: "18px" }}>
          {L(V.g?.bio?.fr?.sc?.rows).map((r, i133) => <React.Fragment key={i133}>
            <div style={{ height: "24px", borderRadius: "8px", background: "#F1F5F9", overflow: "hidden" }}><div style={{ height: "100%", width: `${A(r?.w)}`, background: `${A(r?.c)}`, borderRadius: "8px", transition: "width .35s ease" }} /></div>
          </React.Fragment>)}
          <div style={{ position: "absolute", top: "14px", bottom: "0", left: `${A(V.g?.bio?.fr?.sc?.planX)}`, borderLeft: "2px dashed #0F172A", opacity: ".5", pointerEvents: "none" }} />
          <span style={{ position: "absolute", top: "0", left: `${A(V.g?.bio?.fr?.sc?.planX)}`, transform: "translateX(-50%)", fontSize: "11px", fontWeight: "600", color: "#334155", whiteSpace: "nowrap" }}>{S(V.g?.bio?.fr?.sc?.planL)}</span>
        </div>
        <span style={{ fontSize: "13px", color: "#334155", lineHeight: "1.5" }}>{S(V.g?.bio?.fr?.sc?.msg)}</span>
      </div>
    </div>
    </>
  );
}
