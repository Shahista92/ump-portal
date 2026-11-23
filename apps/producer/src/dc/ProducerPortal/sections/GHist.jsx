import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';

export default function GHist({ V }) {
  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
      <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.04)", padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px 16px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px 14px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: "2px", padding: "3px", borderRadius: "9px", border: "1px solid #E5E8E6", background: "#F8FAFC" }}>
            {L(V.g?.hist?.ranges).map((r, i66) => <React.Fragment key={i66}>
              <button className="scpr scp6" onClick={r?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", minWidth: "38px", height: "28px", padding: "0 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "600", background: `${A(r?.bg)}`, color: `${A(r?.fg)}`, boxShadow: `${A(r?.sh)}`, transition: "background .15s,color .15s,transform .1s" }}>{S(r?.l)}</button>
            </React.Fragment>)}
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#475569" }}>
            <span style={{ height: "20px", padding: "0 8px", borderRadius: "999px", background: "#F1F5F9", color: "#334155", fontSize: "11px", fontWeight: "600", display: "inline-flex", alignItems: "center" }}>{S(V.g?.hist?.agg)}</span>
            {S(V.g?.hist?.span)}
          </span>
        </div>
        <label style={{ position: "relative", display: "block", width: "clamp(180px,18vw,300px)" }}>
          <span style={{ position: "absolute", top: "-6px", left: "9px", padding: "0 4px", background: "#fff", fontSize: "10px", fontWeight: "500", color: "#64748B", lineHeight: "1.2", zIndex: "1" }}>{"Select "}{S(V.g?.hist?.sel?.label)}</span>
          <select className="scpg" value={V.g?.hist?.sel?.value ?? ""} onChange={V.g?.hist?.sel?.set} style={{ width: "100%", height: "34px", border: "1px solid #CBD5E1", borderRadius: "7px", outline: "0", background: "#fff", font: "inherit", fontSize: "12.5px", fontWeight: "500", color: "#0F172A", cursor: "pointer", padding: "0 10px" }}>
            {L(V.g?.hist?.sel?.opts).map((o, i67) => <React.Fragment key={i67}>
              <option value={o?.v ?? ""}>{S(o?.label)}</option>
            </React.Fragment>)}
          </select>
        </label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: "14px" }}>
        {L(V.g?.hist?.kpis).map((k, i68) => <React.Fragment key={i68}>
          <div style={{ background: "#fff", border: "1px solid #E6EAEE", borderRadius: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.03),0 6px 18px rgba(15,23,42,.035)", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".05em", textTransform: "uppercase", color: "#334155", paddingTop: "4px" }}>{S(k?.l)}</span>
              <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: `${A(k?.bg)}`, color: `${A(k?.c)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={k?.d} /></svg></span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
              <span style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "-.01em", color: "#0F172A", lineHeight: "1.1" }}>{S(k?.v)}</span>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#0F172A" }}>{S(k?.u)}</span>
            </div>
            <span style={{ fontSize: "11.5px", fontWeight: "500", color: `${A(k?.dfg)}`, display: "flex", alignItems: "center", gap: "4px" }}>{S(k?.dl)}</span>
          </div>
        </React.Fragment>)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "stretch" }}>
        <div style={{ flex: "1 1 100%", display: "flex", flexDirection: "column", gap: "16px", minWidth: "0" }}>
          {L(V.g?.hist?.main).map((c, i69) => <React.Fragment key={i69}>
            <div style={{ background: "#fff", border: "1px solid #E6EAEE", borderRadius: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.03),0 6px 18px rgba(15,23,42,.035)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px 16px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>{S(c?.t)}</span>
                  {c?.sub && <>
                    <span style={{ fontSize: "12px", color: "#64748B" }}>{S(c?.sub)}</span>
                  </>}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px 14px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                  {L(c?.stats).map((st, i70) => <React.Fragment key={i70}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1px", alignItems: "flex-end" }}>
                      <span style={{ fontSize: "11px", color: "#64748B" }}>{S(st?.l)}</span>
                      <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#0F172A", whiteSpace: "nowrap" }}>{S(st?.v)}</span>
                    </div>
                  </React.Fragment>)}
                  {c?.chips && <>
                    <div style={{ display: "flex", gap: "2px", padding: "2px", borderRadius: "8px", background: "#F1F5F9" }}>
                      {L(c?.chips).map((ch, i71) => <React.Fragment key={i71}>
                        <button className="scpr scp6" onClick={ch?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "24px", padding: "0 10px", borderRadius: "6px", fontSize: "11.5px", fontWeight: "600", background: `${A(ch?.bg)}`, color: `${A(ch?.fg)}`, boxShadow: `${A(ch?.sh)}`, transition: "background .15s,color .15s,transform .1s" }}>{S(ch?.l)}</button>
                      </React.Fragment>)}
                    </div>
                  </>}
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ width: "40px", height: `${A(c?.h)}`, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end", fontSize: "11px", color: "#64748B", margin: "-7px 0", flexShrink: "0" }}>
                  {L(c?.yl).map((y, i72) => <React.Fragment key={i72}>
                    <span style={{ whiteSpace: "nowrap" }}>{S(y?.v)}</span>
                  </React.Fragment>)}
                </div>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div data-zk={c?.zk} data-zn={c?.zn} onMouseLeave={c?.leave} style={{ position: "relative", height: `${A(c?.h)}`, cursor: "crosshair" }}>
                    {L(c?.grid).map((gl, i73) => <React.Fragment key={i73}>
                      <div style={{ position: "absolute", left: "0", right: "0", top: `${A(gl?.t)}`, borderTop: "1px dashed #E8EDF3" }} />
                    </React.Fragment>)}
                    {c?.hasBars && <>
                      <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "flex-end" }}>
                        {L(c?.bars).map((b, i74) => <React.Fragment key={i74}>
                          <div style={{ flex: "1 1 0", minWidth: "0", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}><div style={{ width: `${A(b?.w)}`, maxWidth: "40px", height: `${A(b?.h)}`, background: `${A(b?.c)}`, borderRadius: "4px 4px 0 0", transition: "background .12s" }} /></div>
                        </React.Fragment>)}
                      </div>
                    </>}
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible", pointerEvents: "none" }}>
                      {L(c?.areas).map((ar, i75) => <React.Fragment key={i75}>
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
                      {L(c?.lines).map((ln, i76) => <React.Fragment key={i76}>
                        <polyline points={ln?.pts} style={{ fill: "none", stroke: `${A(ln?.c)}`, strokeWidth: `${A(ln?.w)}`, strokeDasharray: `${A(ln?.dash)}`, vectorEffect: "non-scaling-stroke", strokeLinejoin: "round", strokeLinecap: "round" }} />
                      </React.Fragment>)}
                    </svg>
                    {c?.hov && <>
                      <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(c?.hx)}`, borderLeft: "1px dashed #94A3B8", pointerEvents: "none" }} />
                      {L(c?.dots).map((dt, i77) => <React.Fragment key={i77}>
                        <span style={{ position: "absolute", left: `${A(c?.hx)}`, top: `${A(dt?.y)}`, width: "10px", height: "10px", borderRadius: "50%", background: "#fff", border: `2.5px solid ${A(dt?.c)}`, boxSizing: "border-box", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
                      </React.Fragment>)}
                      <div style={{ position: "absolute", top: "8px", left: `${A(c?.hx)}`, transform: `${A(c?.tipT)}`, background: "#043C2C", borderRadius: "9px", boxShadow: "0 10px 24px rgba(4,60,44,.28)", fontSize: "12px", whiteSpace: "nowrap", pointerEvents: "none", zIndex: "2", padding: "8px 10px", display: "flex", flexDirection: "column", gap: "5px", color: "#D1FAE5" }}>
                        <span style={{ fontWeight: "600", color: "#fff" }}>{S(c?.tipD)}</span>
                        {L(c?.tipRows).map((tr, i78) => <React.Fragment key={i78}>
                          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: `${A(tr?.c)}` }} />
                            {S(tr?.l)}
                            <b style={{ marginLeft: "auto", paddingLeft: "12px", color: "#fff", fontWeight: "600" }}>{S(tr?.v)}</b>
                          </span>
                        </React.Fragment>)}
                      </div>
                    </>}
                    <div style={{ position: "absolute", inset: "0", display: "flex" }}>
                      {L(c?.cols).map((cc, i79) => <React.Fragment key={i79}>
                        <div onMouseEnter={cc?.enter} style={{ flex: "1", height: "100%" }} />
                      </React.Fragment>)}
                    </div>
                  </div>
                  <div style={{ position: "relative", height: "24px", borderTop: "1px solid #E2E8F0" }}>
                    {L(c?.xl).map((x, i80) => <React.Fragment key={i80}>
                      <span style={{ position: "absolute", top: "6px", left: `${A(x?.x)}`, transform: `${A(x?.tf)}`, fontSize: "11px", color: "#64748B", whiteSpace: "nowrap" }}>{S(x?.l)}</span>
                    </React.Fragment>)}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", fontSize: "12px", color: "#475569" }}>
                {L(c?.legend).map((lg, i81) => <React.Fragment key={i81}>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                    <span style={{ width: `${A(lg?.w)}`, height: `${A(lg?.hh)}`, borderRadius: `${A(lg?.r)}`, background: `${A(lg?.c)}` }} />
                    {S(lg?.l)}
                  </span>
                </React.Fragment>)}
              </div>
            </div>
          </React.Fragment>)}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(max(min(100%,340px),calc(50% - 8px)),1fr))", gap: "16px" }}>
            {L(V.g?.hist?.charts).map((c, i82) => <React.Fragment key={i82}>
              <div style={{ background: "#fff", border: "1px solid #E6EAEE", borderRadius: "14px", boxShadow: "0 1px 2px rgba(15,23,42,.03),0 6px 18px rgba(15,23,42,.035)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px 16px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                    <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>{S(c?.t)}</span>
                    {c?.sub && <>
                      <span style={{ fontSize: "12px", color: "#64748B" }}>{S(c?.sub)}</span>
                    </>}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px 14px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    {L(c?.stats).map((st, i83) => <React.Fragment key={i83}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1px", alignItems: "flex-end" }}>
                        <span style={{ fontSize: "11px", color: "#64748B" }}>{S(st?.l)}</span>
                        <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#0F172A", whiteSpace: "nowrap" }}>{S(st?.v)}</span>
                      </div>
                    </React.Fragment>)}
                    {c?.chips && <>
                      <div style={{ display: "flex", gap: "2px", padding: "2px", borderRadius: "8px", background: "#F1F5F9" }}>
                        {L(c?.chips).map((ch, i84) => <React.Fragment key={i84}>
                          <button className="scpr scp6" onClick={ch?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "24px", padding: "0 10px", borderRadius: "6px", fontSize: "11.5px", fontWeight: "600", background: `${A(ch?.bg)}`, color: `${A(ch?.fg)}`, boxShadow: `${A(ch?.sh)}`, transition: "background .15s,color .15s,transform .1s" }}>{S(ch?.l)}</button>
                        </React.Fragment>)}
                      </div>
                    </>}
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "40px", height: `${A(c?.h)}`, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end", fontSize: "11px", color: "#64748B", margin: "-7px 0", flexShrink: "0" }}>
                    {L(c?.yl).map((y, i85) => <React.Fragment key={i85}>
                      <span style={{ whiteSpace: "nowrap" }}>{S(y?.v)}</span>
                    </React.Fragment>)}
                  </div>
                  <div style={{ flex: "1", minWidth: "0" }}>
                    <div data-zk={c?.zk} data-zn={c?.zn} onMouseLeave={c?.leave} style={{ position: "relative", height: `${A(c?.h)}`, cursor: "crosshair" }}>
                      {L(c?.grid).map((gl, i86) => <React.Fragment key={i86}>
                        <div style={{ position: "absolute", left: "0", right: "0", top: `${A(gl?.t)}`, borderTop: "1px dashed #E8EDF3" }} />
                      </React.Fragment>)}
                      {c?.hasBars && <>
                        <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "flex-end" }}>
                          {L(c?.bars).map((b, i87) => <React.Fragment key={i87}>
                            <div style={{ flex: "1 1 0", minWidth: "0", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}><div style={{ width: `${A(b?.w)}`, maxWidth: "40px", height: `${A(b?.h)}`, background: `${A(b?.c)}`, borderRadius: "4px 4px 0 0", transition: "background .12s" }} /></div>
                          </React.Fragment>)}
                        </div>
                      </>}
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible", pointerEvents: "none" }}>
                        {L(c?.areas).map((ar, i88) => <React.Fragment key={i88}>
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
                        {L(c?.lines).map((ln, i89) => <React.Fragment key={i89}>
                          <polyline points={ln?.pts} style={{ fill: "none", stroke: `${A(ln?.c)}`, strokeWidth: `${A(ln?.w)}`, strokeDasharray: `${A(ln?.dash)}`, vectorEffect: "non-scaling-stroke", strokeLinejoin: "round", strokeLinecap: "round" }} />
                        </React.Fragment>)}
                      </svg>
                      {c?.hov && <>
                        <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(c?.hx)}`, borderLeft: "1px dashed #94A3B8", pointerEvents: "none" }} />
                        {L(c?.dots).map((dt, i90) => <React.Fragment key={i90}>
                          <span style={{ position: "absolute", left: `${A(c?.hx)}`, top: `${A(dt?.y)}`, width: "10px", height: "10px", borderRadius: "50%", background: "#fff", border: `2.5px solid ${A(dt?.c)}`, boxSizing: "border-box", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
                        </React.Fragment>)}
                        <div style={{ position: "absolute", top: "8px", left: `${A(c?.hx)}`, transform: `${A(c?.tipT)}`, background: "#043C2C", borderRadius: "9px", boxShadow: "0 10px 24px rgba(4,60,44,.28)", fontSize: "12px", whiteSpace: "nowrap", pointerEvents: "none", zIndex: "2", padding: "8px 10px", display: "flex", flexDirection: "column", gap: "5px", color: "#D1FAE5" }}>
                          <span style={{ fontWeight: "600", color: "#fff" }}>{S(c?.tipD)}</span>
                          {L(c?.tipRows).map((tr, i91) => <React.Fragment key={i91}>
                            <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                              <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: `${A(tr?.c)}` }} />
                              {S(tr?.l)}
                              <b style={{ marginLeft: "auto", paddingLeft: "12px", color: "#fff", fontWeight: "600" }}>{S(tr?.v)}</b>
                            </span>
                          </React.Fragment>)}
                        </div>
                      </>}
                      <div style={{ position: "absolute", inset: "0", display: "flex" }}>
                        {L(c?.cols).map((cc, i92) => <React.Fragment key={i92}>
                          <div onMouseEnter={cc?.enter} style={{ flex: "1", height: "100%" }} />
                        </React.Fragment>)}
                      </div>
                    </div>
                    <div style={{ position: "relative", height: "24px", borderTop: "1px solid #E2E8F0" }}>
                      {L(c?.xl).map((x, i93) => <React.Fragment key={i93}>
                        <span style={{ position: "absolute", top: "6px", left: `${A(x?.x)}`, transform: `${A(x?.tf)}`, fontSize: "11px", color: "#64748B", whiteSpace: "nowrap" }}>{S(x?.l)}</span>
                      </React.Fragment>)}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", fontSize: "12px", color: "#475569" }}>
                  {L(c?.legend).map((lg, i94) => <React.Fragment key={i94}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                      <span style={{ width: `${A(lg?.w)}`, height: `${A(lg?.hh)}`, borderRadius: `${A(lg?.r)}`, background: `${A(lg?.c)}` }} />
                      {S(lg?.l)}
                    </span>
                  </React.Fragment>)}
                </div>
              </div>
            </React.Fragment>)}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
