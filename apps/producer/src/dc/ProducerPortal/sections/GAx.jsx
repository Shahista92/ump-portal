import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';

export default function GAx({ V }) {
  return (
    <>
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(260px,300px)", gap: "16px", alignItems: "stretch" }}>
      <div style={{ background: "#fff", border: "1px solid #E6EAEE", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.03),0 6px 18px rgba(15,23,42,.035)", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "20px", minWidth: "0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: "16px", fontWeight: "600", color: "#0F172A" }}>{S(V.g?.ax?.title)}</div>
            <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "3px" }}>{S(V.g?.ax?.sub)}</div>
          </div>
          {V.g?.ax?.sel && <>
            <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <select className="scp1r" value={V.g?.ax?.sel?.value ?? ""} onChange={V.g?.ax?.sel?.set} style={{ height: "40px", minWidth: "200px", border: "1px solid #15803D", borderRadius: "8px", background: "#fff", font: "inherit", fontSize: "14px", color: "#0F172A", padding: "0 38px 0 14px", outline: "0", cursor: "pointer", appearance: "none", WebkitAppearance: "none" }}>
                {L(V.g?.ax?.sel?.opts).map((o, i166) => <React.Fragment key={i166}>
                  <option value={o ?? ""}>{S(o)}</option>
                </React.Fragment>)}
              </select>
              <svg width="12" height="12" viewBox="0 0 24 24" style={{ position: "absolute", right: "14px", pointerEvents: "none", fill: "#475569" }}><path d="M5 9h14l-7 8z" /></svg>
            </span>
          </>}
        </div>
        {L(V.g?.ax?.charts).map((c, i167) => <React.Fragment key={i167}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "16px", borderTop: "1px solid #EEF2F6", minWidth: "0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px 16px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}>
                {c?.ic && <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c?.icc} style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={c?.ic} /></svg>
                </>}
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>{S(c?.t)}</span>
                  {c?.sub && <>
                    <span style={{ fontSize: "12px", color: "#64748B" }}>{S(c?.sub)}</span>
                  </>}
                </div>
              </div>
              {c?.chips && <>
                <div style={{ display: "flex", border: "1px solid #E2E8F0", borderRadius: "9px", overflow: "hidden", background: "#fff" }}>
                  {L(c?.chips).map((ch, i168) => <React.Fragment key={i168}>
                    <button onClick={ch?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "30px", padding: "0 14px", fontSize: "12.5px", fontWeight: "500", background: `${A(ch?.bg)}`, color: `${A(ch?.fg)}` }}>{S(ch?.l)}</button>
                  </React.Fragment>)}
                </div>
              </>}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px 16px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "12px", color: "#475569" }}>
                {L(c?.legend).map((lg, i169) => <React.Fragment key={i169}>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                    <span style={{ width: `${A(lg?.w)}`, height: `${A(lg?.hh)}`, borderRadius: `${A(lg?.r)}`, background: `${A(lg?.c)}` }} />
                    {S(lg?.l)}
                  </span>
                </React.Fragment>)}
              </div>
              {c?.note && <>
                <span style={{ fontSize: "11.5px", color: "#94A3B8" }}>{S(c?.note)}</span>
              </>}
            </div>
            <div style={{ display: "flex", gap: "8px", paddingTop: "14px" }}>
              <div style={{ width: "46px", height: `${A(c?.h)}`, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end", fontSize: "11px", color: "#64748B", margin: "-7px 0", flexShrink: "0" }}>
                {L(c?.yl).map((y, i170) => <React.Fragment key={i170}>
                  <span style={{ whiteSpace: "nowrap" }}>{S(y?.v)}</span>
                </React.Fragment>)}
              </div>
              <div style={{ flex: "1", minWidth: "0" }}>
                <div data-zk={c?.zk} data-zn={c?.zn} onMouseLeave={c?.leave} style={{ position: "relative", height: `${A(c?.h)}`, cursor: "crosshair" }}>
                  {c?.fcOn && <>
                    <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(c?.fcX)}`, right: "0", background: "rgba(14,165,233,.06)", borderLeft: "1.5px dashed #7DD3FC", pointerEvents: "none" }} />
                    {c?.fcTag && <>
                      <span style={{ position: "absolute", top: "-13px", left: `${A(c?.fcX)}`, transform: "translateX(-50%)", fontSize: "10.5px", fontWeight: "600", color: "#0369A1", background: "#E0F2FE", border: "1px solid #7DD3FC", borderRadius: "5px", padding: "1px 7px", whiteSpace: "nowrap", zIndex: "1", pointerEvents: "none" }}>Forecast →</span>
                    </>}
                  </>}
                  {L(c?.grid).map((gl, i171) => <React.Fragment key={i171}>
                    <div style={{ position: "absolute", left: "0", right: "0", top: `${A(gl?.t)}`, borderTop: "1px dashed #EDF1F5" }} />
                  </React.Fragment>)}
                  {c?.hasBars && <>
                    <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "flex-end" }}>
                      {L(c?.bars).map((b, i172) => <React.Fragment key={i172}>
                        <div style={{ flex: "1 1 0", minWidth: "0", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}><div style={{ width: `${A(b?.w)}`, maxWidth: "40px", height: `${A(b?.h)}`, background: `${A(b?.c)}`, borderRadius: "3px 3px 0 0" }} /></div>
                      </React.Fragment>)}
                    </div>
                  </>}
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible", pointerEvents: "none" }}>
                    {L(c?.areas).map((ar, i173) => <React.Fragment key={i173}>
                      <g>
                        <defs>
                          <linearGradient id={ar?.gid} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" style={{ stopColor: `${A(ar?.c)}`, stopOpacity: ".3" }} />
                            <stop offset="1" style={{ stopColor: `${A(ar?.c)}`, stopOpacity: ".02" }} />
                          </linearGradient>
                        </defs>
                        <polygon points={ar?.area} style={{ fill: `${A(ar?.fill)}` }} />
                        <polyline points={ar?.pts} style={{ fill: "none", stroke: `${A(ar?.c)}`, strokeWidth: "2", vectorEffect: "non-scaling-stroke", strokeLinejoin: "round", strokeLinecap: "round" }} />
                      </g>
                    </React.Fragment>)}
                    {L(c?.lines).map((ln, i174) => <React.Fragment key={i174}>
                      <polyline points={ln?.pts} style={{ fill: "none", stroke: `${A(ln?.c)}`, strokeWidth: `${A(ln?.w)}`, strokeDasharray: `${A(ln?.dash)}`, vectorEffect: "non-scaling-stroke", strokeLinejoin: "round", strokeLinecap: "round" }} />
                    </React.Fragment>)}
                  </svg>
                  {c?.hov && <>
                    <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(c?.hx)}`, borderLeft: "1px dashed #94A3B8", pointerEvents: "none" }} />
                    {L(c?.dots).map((dt, i175) => <React.Fragment key={i175}>
                      <span style={{ position: "absolute", left: `${A(c?.hx)}`, top: `${A(dt?.y)}`, width: "9px", height: "9px", borderRadius: "50%", background: "#fff", border: `2.5px solid ${A(dt?.c)}`, boxSizing: "border-box", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
                    </React.Fragment>)}
                    <div style={{ position: "absolute", top: "8px", left: `${A(c?.hx)}`, transform: `${A(c?.tipT)}`, background: "#043C2C", borderRadius: "9px", boxShadow: "0 10px 24px rgba(4,60,44,.28)", fontSize: "12px", whiteSpace: "nowrap", pointerEvents: "none", zIndex: "2", padding: "8px 10px", display: "flex", flexDirection: "column", gap: "5px", color: "#D1FAE5" }}>
                      <span style={{ fontWeight: "600", color: "#fff" }}>{S(c?.tipD)}</span>
                      {L(c?.tipRows).map((tr, i176) => <React.Fragment key={i176}>
                        <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                          <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: `${A(tr?.c)}` }} />
                          {S(tr?.l)}
                          <b style={{ marginLeft: "auto", paddingLeft: "12px", color: "#fff", fontWeight: "600" }}>{S(tr?.v)}</b>
                        </span>
                      </React.Fragment>)}
                    </div>
                  </>}
                  <div style={{ position: "absolute", inset: "0", display: "flex" }}>
                    {L(c?.cols).map((cc, i177) => <React.Fragment key={i177}>
                      <div onMouseEnter={cc?.enter} style={{ flex: "1", height: "100%" }} />
                    </React.Fragment>)}
                  </div>
                </div>
                <div style={{ position: "relative", height: "24px", borderTop: "1px solid #E2E8F0" }}>
                  {L(c?.xl).map((x, i178) => <React.Fragment key={i178}>
                    <span style={{ position: "absolute", top: "6px", left: `${A(x?.x)}`, transform: `${A(x?.tf)}`, fontSize: "11px", color: "#64748B", whiteSpace: "nowrap" }}>{S(x?.l)}</span>
                  </React.Fragment>)}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>)}
        {V.g?.ax?.grid && <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(max(min(100%,320px),calc(50% - 10px)),1fr))", gap: "20px", paddingTop: "16px", borderTop: "1px solid #EEF2F6" }}>
            {L(V.g?.ax?.grid).map((c, i179) => <React.Fragment key={i179}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "14px 16px", border: "1px solid #EEF2F6", borderRadius: "12px", background: "#FCFDFD", minWidth: "0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px 16px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}>
                    {c?.ic && <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c?.icc} style={{ flexShrink: "0", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={c?.ic} /></svg>
                    </>}
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A" }}>{S(c?.t)}</span>
                      {c?.sub && <>
                        <span style={{ fontSize: "12px", color: "#64748B" }}>{S(c?.sub)}</span>
                      </>}
                    </div>
                  </div>
                  {c?.chips && <>
                    <div style={{ display: "flex", border: "1px solid #E2E8F0", borderRadius: "9px", overflow: "hidden", background: "#fff" }}>
                      {L(c?.chips).map((ch, i180) => <React.Fragment key={i180}>
                        <button onClick={ch?.go} style={{ appearance: "none", border: "0", font: "inherit", margin: "0", cursor: "pointer", height: "30px", padding: "0 14px", fontSize: "12.5px", fontWeight: "500", background: `${A(ch?.bg)}`, color: `${A(ch?.fg)}` }}>{S(ch?.l)}</button>
                      </React.Fragment>)}
                    </div>
                  </>}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px 16px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "12px", color: "#475569" }}>
                    {L(c?.legend).map((lg, i181) => <React.Fragment key={i181}>
                      <span style={{ display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                        <span style={{ width: `${A(lg?.w)}`, height: `${A(lg?.hh)}`, borderRadius: `${A(lg?.r)}`, background: `${A(lg?.c)}` }} />
                        {S(lg?.l)}
                      </span>
                    </React.Fragment>)}
                  </div>
                  {c?.note && <>
                    <span style={{ fontSize: "11.5px", color: "#94A3B8" }}>{S(c?.note)}</span>
                  </>}
                </div>
                <div style={{ display: "flex", gap: "8px", paddingTop: "14px" }}>
                  <div style={{ width: "46px", height: `${A(c?.h)}`, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end", fontSize: "11px", color: "#64748B", margin: "-7px 0", flexShrink: "0" }}>
                    {L(c?.yl).map((y, i182) => <React.Fragment key={i182}>
                      <span style={{ whiteSpace: "nowrap" }}>{S(y?.v)}</span>
                    </React.Fragment>)}
                  </div>
                  <div style={{ flex: "1", minWidth: "0" }}>
                    <div data-zk={c?.zk} data-zn={c?.zn} onMouseLeave={c?.leave} style={{ position: "relative", height: `${A(c?.h)}`, cursor: "crosshair" }}>
                      {c?.fcOn && <>
                        <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(c?.fcX)}`, right: "0", background: "rgba(14,165,233,.06)", borderLeft: "1.5px dashed #7DD3FC", pointerEvents: "none" }} />
                        {c?.fcTag && <>
                          <span style={{ position: "absolute", top: "-13px", left: `${A(c?.fcX)}`, transform: "translateX(-50%)", fontSize: "10.5px", fontWeight: "600", color: "#0369A1", background: "#E0F2FE", border: "1px solid #7DD3FC", borderRadius: "5px", padding: "1px 7px", whiteSpace: "nowrap", zIndex: "1", pointerEvents: "none" }}>Forecast →</span>
                        </>}
                      </>}
                      {L(c?.grid).map((gl, i183) => <React.Fragment key={i183}>
                        <div style={{ position: "absolute", left: "0", right: "0", top: `${A(gl?.t)}`, borderTop: "1px dashed #EDF1F5" }} />
                      </React.Fragment>)}
                      {c?.hasBars && <>
                        <div style={{ position: "absolute", inset: "0", display: "flex", alignItems: "flex-end" }}>
                          {L(c?.bars).map((b, i184) => <React.Fragment key={i184}>
                            <div style={{ flex: "1 1 0", minWidth: "0", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}><div style={{ width: `${A(b?.w)}`, maxWidth: "40px", height: `${A(b?.h)}`, background: `${A(b?.c)}`, borderRadius: "3px 3px 0 0" }} /></div>
                          </React.Fragment>)}
                        </div>
                      </>}
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible", pointerEvents: "none" }}>
                        {L(c?.areas).map((ar, i185) => <React.Fragment key={i185}>
                          <g>
                            <defs>
                              <linearGradient id={ar?.gid} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0" style={{ stopColor: `${A(ar?.c)}`, stopOpacity: ".3" }} />
                                <stop offset="1" style={{ stopColor: `${A(ar?.c)}`, stopOpacity: ".02" }} />
                              </linearGradient>
                            </defs>
                            <polygon points={ar?.area} style={{ fill: `${A(ar?.fill)}` }} />
                            <polyline points={ar?.pts} style={{ fill: "none", stroke: `${A(ar?.c)}`, strokeWidth: "2", vectorEffect: "non-scaling-stroke", strokeLinejoin: "round", strokeLinecap: "round" }} />
                          </g>
                        </React.Fragment>)}
                        {L(c?.lines).map((ln, i186) => <React.Fragment key={i186}>
                          <polyline points={ln?.pts} style={{ fill: "none", stroke: `${A(ln?.c)}`, strokeWidth: `${A(ln?.w)}`, strokeDasharray: `${A(ln?.dash)}`, vectorEffect: "non-scaling-stroke", strokeLinejoin: "round", strokeLinecap: "round" }} />
                        </React.Fragment>)}
                      </svg>
                      {c?.hov && <>
                        <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(c?.hx)}`, borderLeft: "1px dashed #94A3B8", pointerEvents: "none" }} />
                        {L(c?.dots).map((dt, i187) => <React.Fragment key={i187}>
                          <span style={{ position: "absolute", left: `${A(c?.hx)}`, top: `${A(dt?.y)}`, width: "9px", height: "9px", borderRadius: "50%", background: "#fff", border: `2.5px solid ${A(dt?.c)}`, boxSizing: "border-box", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
                        </React.Fragment>)}
                        <div style={{ position: "absolute", top: "8px", left: `${A(c?.hx)}`, transform: `${A(c?.tipT)}`, background: "#043C2C", borderRadius: "9px", boxShadow: "0 10px 24px rgba(4,60,44,.28)", fontSize: "12px", whiteSpace: "nowrap", pointerEvents: "none", zIndex: "2", padding: "8px 10px", display: "flex", flexDirection: "column", gap: "5px", color: "#D1FAE5" }}>
                          <span style={{ fontWeight: "600", color: "#fff" }}>{S(c?.tipD)}</span>
                          {L(c?.tipRows).map((tr, i188) => <React.Fragment key={i188}>
                            <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                              <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: `${A(tr?.c)}` }} />
                              {S(tr?.l)}
                              <b style={{ marginLeft: "auto", paddingLeft: "12px", color: "#fff", fontWeight: "600" }}>{S(tr?.v)}</b>
                            </span>
                          </React.Fragment>)}
                        </div>
                      </>}
                      <div style={{ position: "absolute", inset: "0", display: "flex" }}>
                        {L(c?.cols).map((cc, i189) => <React.Fragment key={i189}>
                          <div onMouseEnter={cc?.enter} style={{ flex: "1", height: "100%" }} />
                        </React.Fragment>)}
                      </div>
                    </div>
                    <div style={{ position: "relative", height: "24px", borderTop: "1px solid #E2E8F0" }}>
                      {L(c?.xl).map((x, i190) => <React.Fragment key={i190}>
                        <span style={{ position: "absolute", top: "6px", left: `${A(x?.x)}`, transform: `${A(x?.tf)}`, fontSize: "11px", color: "#64748B", whiteSpace: "nowrap" }}>{S(x?.l)}</span>
                      </React.Fragment>)}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>)}
          </div>
        </>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
        {L(V.g?.ax?.side).map((sec, i191) => <React.Fragment key={i191}>
          {sec?.title && <>
            <div style={{ padding: "4px 4px 0" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A" }}>{S(sec?.title)}</div>
              <div style={{ fontSize: "12px", color: "#64748B", marginTop: "2px", lineHeight: "1.4" }}>{S(sec?.sub)}</div>
            </div>
          </>}
          {sec?.head && <>
            <div style={{ padding: "6px 4px 0", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".06em", color: "#475569" }}>{S(sec?.head)}</div>
          </>}
          {L(sec?.cards).map((k, i192) => <React.Fragment key={i192}>
            <div style={{ flex: "1 1 0", background: "#fff", border: "1px solid #E6EAEE", borderRadius: "12px", boxShadow: "0 1px 2px rgba(15,23,42,.03)", padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "5px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "12.5px", fontWeight: "500", color: "#334155" }}>{S(k?.label)}</span>
                {k?.pill && <>
                  <span style={{ fontSize: "11px", fontWeight: "600", padding: "2px 8px", borderRadius: "6px", background: `${A(k?.pbg)}`, color: `${A(k?.pc)}` }}>{S(k?.pill)}</span>
                </>}
              </div>
              {k?.big && <>
                <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.01em", color: "#0F172A" }}>{S(k?.big)}</span>
              </>}
              {k?.pct && <>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#334155" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#334155" style={{ flexShrink: "0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={k?.d} /></svg>
                  <b style={{ color: "#0F172A" }}>{S(k?.pct)}</b>
                  {S(k?.txt)}
                </span>
                <span style={{ fontSize: "12px", color: "#475569" }}>
                  {"Selected: "}
                  <b style={{ color: "#0F172A" }}>{S(k?.sel)}</b>
                </span>
                <span style={{ fontSize: "12px", color: "#475569" }}>
                  {"Historical Avg: "}
                  <b style={{ color: "#0F172A" }}>{S(k?.hist)}</b>
                </span>
              </>}
              {L(k?.lines).map((ln, i193) => <React.Fragment key={i193}>
                <span style={{ fontSize: "12px", color: "#475569" }}>
                  <b style={{ color: "#0F172A" }}>{S(ln?.b)}</b>
                  {" "}{S(ln?.t)}
                </span>
              </React.Fragment>)}
            </div>
          </React.Fragment>)}
        </React.Fragment>)}
      </div>
    </div>
    </>
  );
}
