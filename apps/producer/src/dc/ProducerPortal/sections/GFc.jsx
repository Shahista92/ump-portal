import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';
import GFcDash from './GFcDash.jsx';
export default function GFc({ V }) {
  return (
    <>
    {V.g?.fc?.dash && <GFcDash V={V} />}
    {V.g?.fc?.d10 && <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(max(min(100%,380px),calc(50% - 7px)),1fr))", gap: "14px" }}>
        {L(V.g?.fc?.charts).map((c, i45) => <React.Fragment key={i45}>
          <div style={{ background: "#fff", border: "1px solid #E6EAEE", borderRadius: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.03),0 6px 18px rgba(15,23,42,.035)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px 16px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>{S(c?.t)}</span>
                {c?.sub && <>
                  <span style={{ fontSize: "12px", color: "#64748B" }}>{S(c?.sub)}</span>
                </>}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px 14px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                {L(c?.stats).map((st, i46) => <React.Fragment key={i46}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1px", alignItems: "flex-end" }}>
                    <span style={{ fontSize: "11px", color: "#64748B" }}>{S(st?.l)}</span>
                    <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#0F172A", whiteSpace: "nowrap" }}>{S(st?.v)}</span>
                  </div>
                </React.Fragment>)}
                {c?.chips && <>
                  <div style={{ display: "flex", gap: "2px", padding: "2px", borderRadius: "8px", background: "#F1F5F9" }}>
                    {L(c?.chips).map((ch, i47) => <React.Fragment key={i47}>
                      <button className="scpr scp6" onClick={ch?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "24px", padding: "0 10px", borderRadius: "6px", fontSize: "11.5px", fontWeight: "600", background: `${A(ch?.bg)}`, color: `${A(ch?.fg)}`, boxShadow: `${A(ch?.sh)}`, transition: "background .15s,color .15s,transform .1s" }}>{S(ch?.l)}</button>
                    </React.Fragment>)}
                  </div>
                </>}
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ width: "40px", height: `${A(c?.h)}`, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end", fontSize: "11px", color: "#64748B", margin: "-7px 0", flexShrink: "0" }}>
                {L(c?.yl).map((y, i48) => <React.Fragment key={i48}>
                  <span style={{ whiteSpace: "nowrap" }}>{S(y?.v)}</span>
                </React.Fragment>)}
              </div>
              <div style={{ flex: "1", minWidth: "0" }}>
                <div data-zk={c?.zk} data-zn={c?.zn} onMouseLeave={c?.leave} style={{ position: "relative", height: `${A(c?.h)}`, cursor: "crosshair" }}>
                  {L(c?.grid).map((gl, i49) => <React.Fragment key={i49}>
                    <div style={{ position: "absolute", left: "0", right: "0", top: `${A(gl?.t)}`, borderTop: "1px dashed #E8EDF3" }} />
                  </React.Fragment>)}
                  {c?.hasBars && <>
                    <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "flex-end" }}>
                      {L(c?.bars).map((b, i50) => <React.Fragment key={i50}>
                        <div style={{ flex: "1 1 0", minWidth: "0", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}><div style={{ width: `${A(b?.w)}`, maxWidth: "40px", height: `${A(b?.h)}`, background: `${A(b?.c)}`, borderRadius: "4px 4px 0 0", transition: "background .12s" }} /></div>
                      </React.Fragment>)}
                    </div>
                  </>}
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible", pointerEvents: "none" }}>
                    {L(c?.areas).map((ar, i51) => <React.Fragment key={i51}>
                      <g>
                        <defs>
                          <linearGradient id={ar?.gid} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" style={{ stopColor: `${A(ar?.c)}`, stopOpacity: ".35" }} />
                            <stop offset="1" style={{ stopColor: `${A(ar?.c)}`, stopOpacity: ".02" }} />
                          </linearGradient>
                        </defs>
                        <polygon points={ar?.area} style={{ fill: `${A(ar?.fill)}` }} />
                        <polyline points={ar?.pts} style={{ fill: "none", stroke: `${A(ar?.c)}`, strokeWidth: "2.2", vectorEffect: "non-scaling-stroke", strokeLinejoin: "round", strokeLinecap: "round" }} />
                      </g>
                    </React.Fragment>)}
                    {L(c?.lines).map((ln, i52) => <React.Fragment key={i52}>
                      <polyline points={ln?.pts} style={{ fill: "none", stroke: `${A(ln?.c)}`, strokeWidth: `${A(ln?.w)}`, strokeDasharray: `${A(ln?.dash)}`, vectorEffect: "non-scaling-stroke", strokeLinejoin: "round", strokeLinecap: "round" }} />
                    </React.Fragment>)}
                  </svg>
                  {c?.hov && <>
                    <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(c?.hx)}`, borderLeft: "1px dashed #94A3B8", pointerEvents: "none" }} />
                    {L(c?.dots).map((dt, i53) => <React.Fragment key={i53}>
                      <span style={{ position: "absolute", left: `${A(c?.hx)}`, top: `${A(dt?.y)}`, width: "10px", height: "10px", borderRadius: "50%", background: "#fff", border: `2.5px solid ${A(dt?.c)}`, boxSizing: "border-box", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
                    </React.Fragment>)}
                    <div style={{ position: "absolute", top: "8px", left: `${A(c?.hx)}`, transform: `${A(c?.tipT)}`, background: "#043C2C", borderRadius: "9px", boxShadow: "0 10px 24px rgba(4,60,44,.28)", fontSize: "12px", whiteSpace: "nowrap", pointerEvents: "none", zIndex: "2", padding: "8px 10px", display: "flex", flexDirection: "column", gap: "5px", color: "#D1FAE5" }}>
                      <span style={{ fontWeight: "600", color: "#fff" }}>{S(c?.tipD)}</span>
                      {L(c?.tipRows).map((tr, i54) => <React.Fragment key={i54}>
                        <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                          <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: `${A(tr?.c)}` }} />
                          {S(tr?.l)}
                          <b style={{ marginLeft: "auto", paddingLeft: "12px", color: "#fff", fontWeight: "600" }}>{S(tr?.v)}</b>
                        </span>
                      </React.Fragment>)}
                    </div>
                  </>}
                  <div style={{ position: "absolute", inset: "0", display: "flex" }}>
                    {L(c?.cols).map((cc, i55) => <React.Fragment key={i55}>
                      <div onMouseEnter={cc?.enter} style={{ flex: "1", height: "100%" }} />
                    </React.Fragment>)}
                  </div>
                </div>
                <div style={{ position: "relative", height: "24px", borderTop: "1px solid #E2E8F0" }}>
                  {L(c?.xl).map((x, i56) => <React.Fragment key={i56}>
                    <span style={{ position: "absolute", top: "6px", left: `${A(x?.x)}`, transform: `${A(x?.tf)}`, fontSize: "11px", color: "#64748B", whiteSpace: "nowrap" }}>{S(x?.l)}</span>
                  </React.Fragment>)}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", fontSize: "12px", color: "#475569" }}>
              {L(c?.legend).map((lg, i57) => <React.Fragment key={i57}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                  <span style={{ width: `${A(lg?.w)}`, height: `${A(lg?.hh)}`, borderRadius: `${A(lg?.r)}`, background: `${A(lg?.c)}` }} />
                  {S(lg?.l)}
                </span>
              </React.Fragment>)}
            </div>
          </div>
        </React.Fragment>)}
      </div>
    </>}
    {V.g?.fc?.spray && <>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {L(V.g?.fc?.sDays).map((sd, i58) => <React.Fragment key={i58}>
            <button className="scpy scp6" onClick={sd?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", flex: "1 1 84px", minWidth: "0", padding: "8px 6px", borderRadius: "8px", background: `${A(sd?.bg)}`, color: `${A(sd?.fg)}`, display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", transition: "background .15s,transform .1s" }}>
              <span style={{ fontSize: "12.5px", fontWeight: "600" }}>{S(sd?.n)}</span>
              <span style={{ fontSize: "11px" }}>{S(sd?.d)}</span>
            </button>
          </React.Fragment>)}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: "2px", padding: "2px", borderRadius: "8px", background: "#F1F5F9", border: "1px solid #E5E8E6" }}>
            {L(V.g?.fc?.modes).map((md, i59) => <React.Fragment key={i59}>
              <button className="scp6 scpt" onClick={md?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "28px", padding: "0 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "600", background: `${A(md?.bg)}`, color: `${A(md?.fg)}`, transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>{S(md?.l)}</button>
            </React.Fragment>)}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", height: "32px", borderRadius: "8px", border: "1px solid #E5E8E6", background: "#fff", fontSize: "12px", color: "#334155" }}>
            {L(V.g?.fc?.legend).map((lg, i60) => <React.Fragment key={i60}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "14px", height: "14px", borderRadius: "3px", background: `${A(lg?.c)}` }} />
                {S(lg?.l)}
              </span>
            </React.Fragment>)}
          </div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "10px", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "18px", fontWeight: "600", color: "#0F172A" }}>Overall Spraying Conditions</span>
            <button className="scp2 scp6" onClick={V.g?.fc?.toggleInfo} title="How ratings work" style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", cursor: "pointer", width: "28px", height: "28px", borderRadius: "50%", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .15s,border-color .15s,color .15s,transform .1s" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" style={{ fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }}>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
            </button>
          </div>
          {V.g?.fc?.infoOpen && <>
            <div style={{ padding: "10px 12px", borderRadius: "8px", background: "#F8FAFC", border: "1px solid #E5E8E6", fontSize: "12.5px", color: "#334155", lineHeight: "1.5" }}>Each hour takes the worst rating across temperature, wind speed, cloud cover and Delta T. Good: wind 3–15 km/h, Delta T 2–8, temperature below 28°. Marginal: wind 15–20 km/h or Delta T 8–10. Unsuitable: wind above 20 km/h, Delta T above 10 or temperature 29° and above.</div>
          </>}
          {L(V.g?.fc?.overall).map((ov, i61) => <React.Fragment key={i61}>
            <div style={{ display: "grid", gridTemplateColumns: `36px repeat(${A(ov?.n)},minmax(0,1fr))`, gap: "4px", alignItems: "stretch" }}>
              <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#334155", alignSelf: "center" }}>{S(ov?.l)}</span>
              {L(ov?.cells).map((oc, i62) => <React.Fragment key={i62}>
                <div title={oc?.tip} style={{ borderRadius: "5px", background: `${A(oc?.bg)}`, color: `${A(oc?.fg)}`, padding: "6px 2px", display: "flex", flexDirection: "column", alignItems: "center", gap: "1px", minWidth: "0" }}>
                  <span style={{ fontSize: "10px" }}>{S(oc?.t)}</span>
                  <b style={{ fontSize: "10.5px", letterSpacing: ".02em" }}>{S(oc?.r)}</b>
                </div>
              </React.Fragment>)}
            </div>
          </React.Fragment>)}
        </div>
        <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ fontSize: "18px", fontWeight: "600", color: "#0F172A" }}>Spray Rating Details</span>
          <div style={{ display: "grid", gridTemplateColumns: `140px repeat(${A(V.g?.fc?.dN)},minmax(0,1fr))`, gap: "3px", alignItems: "center", minWidth: `${A(V.g?.fc?.dMin)}` }}>
            <span />
            {L(V.g?.fc?.dHead).map((dh, i63) => <React.Fragment key={i63}>
              <b style={{ fontSize: "10.5px", textAlign: "center", color: "#0F172A", whiteSpace: "nowrap" }}>{S(dh?.l)}</b>
            </React.Fragment>)}
          </div>
          {L(V.g?.fc?.detail).map((dr, i64) => <React.Fragment key={i64}>
            <div style={{ display: "grid", gridTemplateColumns: `140px repeat(${A(V.g?.fc?.dN)},minmax(0,1fr))`, gap: "3px", alignItems: "stretch", minWidth: `${A(V.g?.fc?.dMin)}` }}>
              <span style={{ display: "flex", alignItems: "center", gap: "7px", minWidth: "0" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" style={{ flexShrink: "0", fill: "none", stroke: "#0F172A", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={dr?.d} /></svg>
                <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                  <span style={{ fontSize: "11.5px", color: "#0F172A" }}>{S(dr?.l)}</span>
                  <span style={{ fontSize: "10.5px", color: "#64748B" }}>{S(dr?.s)}</span>
                </span>
              </span>
              {L(dr?.cells).map((dc, i65) => <React.Fragment key={i65}>
                <div style={{ borderRadius: "4px", background: `${A(dc?.bg)}`, color: `${A(dc?.fg)}`, height: "32px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10.5px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden" }}>{S(dc?.v)}</div>
              </React.Fragment>)}
            </div>
          </React.Fragment>)}
        </div>
      </div>
    </>}
    </>
  );
}
