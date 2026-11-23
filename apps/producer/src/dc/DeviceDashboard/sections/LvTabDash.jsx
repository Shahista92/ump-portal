import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';

export default function LvTabDash({ V }) {
  return (
    <>
    {V.lvSingle && <>
      <div style={{ position: "relative", zIndex: "5", display: "flex", justifyContent: "flex-end" }}>
        <div style={{ display: "flex", alignItems: "stretch", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "10px", overflow: "hidden", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
          {L(V.lvRanges).map((r, i152) => <React.Fragment key={i152}>
            <div onClick={r?.select} style={{ minWidth: "44px", padding: "9px 14px", fontSize: "14.5px", fontWeight: `${A(r?.weight)}`, textAlign: "center", cursor: "pointer", color: `${A(r?.color)}`, background: `${A(r?.bg)}`, borderRight: "1px solid #EEF1EF" }}>{S(r?.label)}</div>
          </React.Fragment>)}
          <div onClick={V.lvToggleCustom} title="Pick a custom date range" style={{ padding: "9px 14px", display: "flex", alignItems: "center", gap: "7px", fontSize: "14.5px", fontWeight: "700", cursor: "pointer", background: `${A(V.lvCustomBg)}`, color: `${A(V.lvCustomInk)}` }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px" }}><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" /></svg>
            {S(V.lvCustomLabel)}
          </div>
        </div>
        {V.lvCustomOpen && <>
          <div style={{ position: "absolute", top: "calc(100% + 8px)", right: "0", width: "300px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "14px", boxShadow: "0 22px 54px rgba(15,26,20,.18)", padding: "16px", zIndex: "50", display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontSize: "15.5px", fontWeight: "700", color: "#0F1A14" }}>Custom Range</span>
            <div style={{ display: "flex", gap: "9px" }}>
              <label style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>
                FROM
                <input type="date" value={V.lvDraftFrom ?? ""} min={V.lvMinDate} max={V.lvMaxDate} onChange={V.onLvDraftFrom} style={{ border: "1.5px solid #D5DED8", borderRadius: "9px", padding: "8px", fontSize: "14.5px", color: "#0F1A14", fontFamily: "inherit", minWidth: "0" }} />
              </label>
              <label style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>
                TO
                <input type="date" value={V.lvDraftTo ?? ""} min={V.lvMinDate} max={V.lvMaxDate} onChange={V.onLvDraftTo} style={{ border: "1.5px solid #D5DED8", borderRadius: "9px", padding: "8px", fontSize: "14.5px", color: "#0F1A14", fontFamily: "inherit", minWidth: "0" }} />
              </label>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
              <div onClick={V.lvCancelCustom} style={{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #E5E8E6", fontSize: "14.5px", fontWeight: "600", color: "#3F4B45", cursor: "pointer" }}>Cancel</div>
              <div onClick={V.lvApplyCustom} style={{ padding: "8px 14px", borderRadius: "8px", background: "#1AA34A", fontSize: "14.5px", fontWeight: "700", color: "#fff", cursor: "pointer" }}>Apply</div>
            </div>
          </div>
        </>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {L(V.lvRows).map((r, i153) => <React.Fragment key={i153}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "stretch" }}>
            <div style={{ flex: "1 1 320px", boxSizing: "border-box", minWidth: "280px", maxWidth: "100%", background: "#fff", border: "1px solid #E3EAE5", borderRadius: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.05)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px", animation: "wxChartIn .6s ease both" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", textAlign: "center" }}>
                <span style={{ fontSize: "18px", fontWeight: "700", color: "#0F1A14" }}>Current Water Level</span>
                <span style={{ fontSize: "14px", color: "#6A746E" }}>{S(r?.tank?.name)}</span>
              </div>
              <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <div style={{ position: "relative", width: "100%", maxWidth: "300px" }}>
                  <svg viewBox="0 0 290 300" style={{ width: "100%", display: "block", overflow: "visible" }}>
                    <rect x="84" y="4" width="82" height="11" rx="3" fill="#DCDDDC" />
                    <path d="M18 96 Q14 36 125 20 Q236 36 232 96 Q125 116 18 96 Z" fill="#DCDDDC" />
                    <path d="M56 98 L54 34 M194 98 L196 34" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
                    <path d="M54 36 Q125 2 196 36" fill="none" stroke="#fff" strokeWidth="5" />
                    <path d="M104 20 Q74 42 72 102 M146 20 Q176 42 178 102" fill="none" stroke="#fff" strokeWidth="5" />
                    <rect x="28" y={r?.tank?.wy} width="194" height={r?.tank?.wh} fill="#80DCE9" />
                    <ellipse cx="125" cy="280" rx="97" ry="12" fill="#80DCE9" />
                    <ellipse cx="125" cy={r?.tank?.wy} rx="97" ry="12" fill="#B2EBF3" />
                    {L(r?.tank?.scale).map((s, i154) => <React.Fragment key={i154}>
                      <line x1="28" x2="222" y1={s?.y} y2={s?.y} stroke="#E1E5E3" strokeDasharray="4 4" />
                      <line x1="226" x2="232" y1={s?.y} y2={s?.y} stroke="#9AA39E" />
                    </React.Fragment>)}
                    <path d="M28 104 L28 280 M222 104 L222 280" stroke="#D3D8D5" strokeWidth="1.5" fill="none" />
                  </svg>
                  {L(r?.tank?.scale).map((s, i155) => <React.Fragment key={i155}>
                    <span style={{ position: "absolute", left: "82.07%", top: `${A(s?.top)}`, transform: "translateY(-50%)", fontSize: "13px", color: "#6A746E", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums", pointerEvents: "none" }}>{S(s?.label)}</span>
                  </React.Fragment>)}
                  <div style={{ position: "absolute", left: "43.1%", top: `${A(r?.tank?.top)}`, transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", pointerEvents: "none" }}>
                    <span style={{ fontSize: "41px", lineHeight: "1", fontWeight: "800", color: "#1F2A37", fontVariantNumeric: "tabular-nums" }}>{S(r?.tank?.pct)}</span>
                    <span style={{ fontSize: "18px", fontWeight: "500", color: "#3F4B55" }}>{S(r?.tank?.m)}</span>
                  </div>
                </div>
                <span style={{ fontSize: "14px", color: "#6A746E" }}>15-minute reading · 08 Oct 2026 2:00 PM</span>
                <span style={{ marginTop: "22px", display: "flex", alignItems: "center", gap: "4px", fontSize: "14.5px", color: "#6A746E", whiteSpace: "nowrap" }}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill={r?.tank?.deltaInk} stroke="none"><path d={r?.tank?.deltaPath} /></svg>
                  <b style={{ color: `${A(r?.tank?.deltaInk)}` }}>{S(r?.tank?.delta)}</b>
                  <span style={{ color: `${A(r?.tank?.deltaInk)}`, fontWeight: "600" }}>{S(r?.tank?.deltaM)}</span>
                  {" vs previous reading"}
                </span>
              </div>
            </div>
            {L(r?.charts).map((p, i156) => <React.Fragment key={i156}>
              <div style={{ flex: "999 1 320px", maxWidth: "100%", background: "#FFFFFF", border: "1px solid #E3EAE5", borderRadius: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.05)", padding: "22px 24px 16px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0", animation: "wxChartIn .6s ease both" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <div style={{ fontSize: "18px", fontWeight: "700", color: "#0E8090", flex: "1", minWidth: "150px" }}>{S(p?.title)}</div>
                  {p?.zoomed && <>
                    <span onClick={p?.zoomReset} style={{ fontSize: "13px", fontWeight: "700", color: "#0E7C3A", cursor: "pointer", padding: "5px 8px", borderRadius: "6px", background: "#E7F6EC" }}>Reset</span>
                  </>}
                  <div style={{ display: "flex", alignItems: "stretch", border: "1px solid #E5E8E6", borderRadius: "8px", overflow: "hidden" }}>
                    <span className="scp2o" onClick={p?.zoomOut} title="Zoom out" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45", borderRight: "1px solid #EEF1EF" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4M8 11h6" /></svg></span>
                    <span className="scp2o" onClick={p?.zoomIn} title="Zoom in" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4M8 11h6M11 8v6" /></svg></span>
                  </div>
                  {" "}
                </div>
                <div style={{ flex: "1", minWidth: "0", display: "grid", gridTemplateColumns: "42px minmax(0,1fr)", gap: "6px", alignContent: "center" }}>
                  <div style={{ position: "relative", height: "240px" }}>
                    {L(p?.ticks).map((tk, i157) => <React.Fragment key={i157}>
                      <span style={{ position: "absolute", right: "0", top: `${A(tk?.top)}`, transform: "translateY(-50%)", fontSize: "12.5px", color: "#6A746E", fontVariantNumeric: "tabular-nums" }}>{S(tk?.label)}</span>
                    </React.Fragment>)}
                  </div>
                  <div ref={V.zoomRef} data-zkey={p?.zkey} onMouseMove={p?.onMove} onMouseLeave={p?.onLeave} style={{ position: "relative", height: "240px", cursor: "crosshair" }}>
                    {L(p?.grid).map((g, i158) => <React.Fragment key={i158}>
                      <div style={{ position: "absolute", left: "0", right: "0", top: `${A(g)}`, borderTop: "1px dashed #E3E9E5" }} />
                    </React.Fragment>)}
                    <svg viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                      <defs>
                        <linearGradient id={p?.gid} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#22C1D6" stopOpacity=".75" />
                          <stop offset="1" stopColor="#22C1D6" stopOpacity=".15" />
                        </linearGradient>
                      </defs>
                      <path d={p?.area} fill={`url(#${A(p?.gid)})`} stroke="none" />
                      <path d={p?.line} fill="none" stroke="#0EA5B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <span style={{ position: "absolute", left: "100%", top: `${A(p?.endTop)}`, width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", borderRadius: "50%", background: "#0EA5B9", boxShadow: "0 0 0 4px #fff", pointerEvents: "none" }} />
                    {p?.hover && <>
                      <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(p?.hover?.left)}`, borderLeft: "1px solid #9CA8A1", pointerEvents: "none" }} />
                      <span style={{ position: "absolute", left: `${A(p?.hover?.left)}`, top: `${A(p?.hover?.top)}`, width: "11px", height: "11px", margin: "-5.5px 0 0 -5.5px", borderRadius: "50%", background: "#fff", border: "2.5px solid #0EA5B9", boxSizing: "border-box", pointerEvents: "none" }} />
                      <div style={{ position: "absolute", top: "4px", left: `${A(p?.hover?.left)}`, transform: `translateX(${A(p?.hover?.shift)})`, margin: "0 10px", background: "#043C2C", color: "#F3F4F6", borderRadius: "10px", padding: "8px 11px", fontSize: "14px", whiteSpace: "nowrap", pointerEvents: "none", boxShadow: "0 10px 24px rgba(0,0,0,.2)", zIndex: "3", display: "flex", flexDirection: "column", gap: "3px" }}>
                        <span style={{ color: "#D1D8D4" }}>{S(p?.hover?.time)}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0EA5B9" }} />
                          <b style={{ color: "#fff" }}>{S(p?.hover?.value)}</b>
                        </span>
                      </div>
                    </>}
                  </div>
                  <div />
                  <div style={{ position: "relative", height: "22px" }}>
                    {L(p?.xLabels).map((xl, i159) => <React.Fragment key={i159}>
                      <span style={{ position: "absolute", left: `${A(xl?.left)}`, top: "4px", transform: `translateX(${A(xl?.shift)})`, display: "flex", flexDirection: "column", alignItems: "center", fontSize: "12.5px", lineHeight: "1.25", color: "#6A746E", whiteSpace: "nowrap" }}>
                        <span style={{ fontWeight: "600", color: "#3F4B45" }}>{S(xl?.top)}</span>
                        <span>{S(xl?.bot)}</span>
                      </span>
                    </React.Fragment>)}
                  </div>
                  {p?.dual && <>
                    <div />
                  </>}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1px solid #EDF0EE", paddingTop: "10px" }}>
                  {L(p?.foot).map((ft, i160) => <React.Fragment key={i160}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "12px", fontSize: "13px", color: "#7A8580", fontVariantNumeric: "tabular-nums" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontWeight: "700", color: `${A(ft?.color)}` }}>{S(ft?.label)}</span>
                        <span>
                          {"Min "}
                          <b style={{ color: "#0F1A14" }}>{S(ft?.minVal)}</b>
                        </span>
                        <span>{"observed at "}{S(ft?.minWhen)}</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "flex-end", textAlign: "right" }}>
                        <span>
                          {"Max "}
                          <b style={{ color: "#0F1A14" }}>{S(ft?.maxVal)}</b>
                        </span>
                        <span>{"observed at "}{S(ft?.maxWhen)}</span>
                      </div>
                    </div>
                  </React.Fragment>)}
                </div>
              </div>
            </React.Fragment>)}
          </div>
        </React.Fragment>)}
      </div>
    </>}
    {V.lvMulti && <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "16px" }}>
        {L(V.lvRows).map((r, i161) => <React.Fragment key={i161}>
          <div style={{ minWidth: "0", background: "#fff", border: "1px solid #E3EAE5", borderRadius: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.05)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px", animation: "wxChartIn .6s ease both" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", textAlign: "center" }}>
              <span style={{ fontSize: "18px", fontWeight: "700", color: "#0F1A14" }}>Current Water Level</span>
              <span style={{ fontSize: "14px", color: "#6A746E" }}>{S(r?.tank?.name)}</span>
            </div>
            <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "300px" }}>
                <svg viewBox="0 0 290 300" style={{ width: "100%", display: "block", overflow: "visible" }}>
                  <rect x="84" y="4" width="82" height="11" rx="3" fill="#DCDDDC" />
                  <path d="M18 96 Q14 36 125 20 Q236 36 232 96 Q125 116 18 96 Z" fill="#DCDDDC" />
                  <path d="M56 98 L54 34 M194 98 L196 34" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
                  <path d="M54 36 Q125 2 196 36" fill="none" stroke="#fff" strokeWidth="5" />
                  <path d="M104 20 Q74 42 72 102 M146 20 Q176 42 178 102" fill="none" stroke="#fff" strokeWidth="5" />
                  <rect x="28" y={r?.tank?.wy} width="194" height={r?.tank?.wh} fill="#80DCE9" />
                  <ellipse cx="125" cy="280" rx="97" ry="12" fill="#80DCE9" />
                  <ellipse cx="125" cy={r?.tank?.wy} rx="97" ry="12" fill="#B2EBF3" />
                  {L(r?.tank?.scale).map((s, i162) => <React.Fragment key={i162}>
                    <line x1="28" x2="222" y1={s?.y} y2={s?.y} stroke="#E1E5E3" strokeDasharray="4 4" />
                    <line x1="226" x2="232" y1={s?.y} y2={s?.y} stroke="#9AA39E" />
                  </React.Fragment>)}
                  <path d="M28 104 L28 280 M222 104 L222 280" stroke="#D3D8D5" strokeWidth="1.5" fill="none" />
                </svg>
                {L(r?.tank?.scale).map((s, i163) => <React.Fragment key={i163}>
                  <span style={{ position: "absolute", left: "82.07%", top: `${A(s?.top)}`, transform: "translateY(-50%)", fontSize: "13px", color: "#6A746E", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums", pointerEvents: "none" }}>{S(s?.label)}</span>
                </React.Fragment>)}
                <div style={{ position: "absolute", left: "43.1%", top: `${A(r?.tank?.top)}`, transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", pointerEvents: "none" }}>
                  <span style={{ fontSize: "41px", lineHeight: "1", fontWeight: "800", color: "#1F2A37", fontVariantNumeric: "tabular-nums" }}>{S(r?.tank?.pct)}</span>
                  <span style={{ fontSize: "18px", fontWeight: "500", color: "#3F4B55" }}>{S(r?.tank?.m)}</span>
                </div>
              </div>
              <span style={{ fontSize: "14px", color: "#6A746E" }}>15-minute reading · 08 Oct 2026 2:00 PM</span>
              <span style={{ marginTop: "22px", display: "flex", alignItems: "center", gap: "4px", fontSize: "14.5px", color: "#6A746E", whiteSpace: "nowrap" }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill={r?.tank?.deltaInk} stroke="none"><path d={r?.tank?.deltaPath} /></svg>
                <b style={{ color: `${A(r?.tank?.deltaInk)}` }}>{S(r?.tank?.delta)}</b>
                <span style={{ color: `${A(r?.tank?.deltaInk)}`, fontWeight: "600" }}>{S(r?.tank?.deltaM)}</span>
                {" vs previous reading"}
              </span>
            </div>
          </div>
        </React.Fragment>)}
      </div>
      <div style={{ position: "relative", zIndex: "5", display: "flex", justifyContent: "flex-end" }}>
        <div style={{ display: "flex", alignItems: "stretch", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "10px", overflow: "hidden", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
          {L(V.lvRanges).map((r, i164) => <React.Fragment key={i164}>
            <div onClick={r?.select} style={{ minWidth: "44px", padding: "9px 14px", fontSize: "14.5px", fontWeight: `${A(r?.weight)}`, textAlign: "center", cursor: "pointer", color: `${A(r?.color)}`, background: `${A(r?.bg)}`, borderRight: "1px solid #EEF1EF" }}>{S(r?.label)}</div>
          </React.Fragment>)}
          <div onClick={V.lvToggleCustom} title="Pick a custom date range" style={{ padding: "9px 14px", display: "flex", alignItems: "center", gap: "7px", fontSize: "14.5px", fontWeight: "700", cursor: "pointer", background: `${A(V.lvCustomBg)}`, color: `${A(V.lvCustomInk)}` }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px" }}><path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" /></svg>
            {S(V.lvCustomLabel)}
          </div>
        </div>
        {V.lvCustomOpen && <>
          <div style={{ position: "absolute", top: "calc(100% + 8px)", right: "0", width: "300px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "14px", boxShadow: "0 22px 54px rgba(15,26,20,.18)", padding: "16px", zIndex: "50", display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontSize: "15.5px", fontWeight: "700", color: "#0F1A14" }}>Custom Range</span>
            <div style={{ display: "flex", gap: "9px" }}>
              <label style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>
                FROM
                <input type="date" value={V.lvDraftFrom ?? ""} min={V.lvMinDate} max={V.lvMaxDate} onChange={V.onLvDraftFrom} style={{ border: "1.5px solid #D5DED8", borderRadius: "9px", padding: "8px", fontSize: "14.5px", color: "#0F1A14", fontFamily: "inherit", minWidth: "0" }} />
              </label>
              <label style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".6px", color: "#0E7C3A" }}>
                TO
                <input type="date" value={V.lvDraftTo ?? ""} min={V.lvMinDate} max={V.lvMaxDate} onChange={V.onLvDraftTo} style={{ border: "1.5px solid #D5DED8", borderRadius: "9px", padding: "8px", fontSize: "14.5px", color: "#0F1A14", fontFamily: "inherit", minWidth: "0" }} />
              </label>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
              <div onClick={V.lvCancelCustom} style={{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #E5E8E6", fontSize: "14.5px", fontWeight: "600", color: "#3F4B45", cursor: "pointer" }}>Cancel</div>
              <div onClick={V.lvApplyCustom} style={{ padding: "8px 14px", borderRadius: "8px", background: "#1AA34A", fontSize: "14.5px", fontWeight: "700", color: "#fff", cursor: "pointer" }}>Apply</div>
            </div>
          </div>
        </>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {L(V.lvRows).map((r, i165) => <React.Fragment key={i165}>
          {L(r?.charts).map((p, i166) => <React.Fragment key={i166}>
            <div style={{ maxWidth: "100%", background: "#FFFFFF", border: "1px solid #E3EAE5", borderRadius: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.05)", padding: "22px 24px 16px", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0", animation: "wxChartIn .6s ease both" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <div style={{ fontSize: "18px", fontWeight: "700", color: "#0E8090", flex: "1", minWidth: "150px" }}>{S(p?.title)}</div>
                {p?.zoomed && <>
                  <span onClick={p?.zoomReset} style={{ fontSize: "13px", fontWeight: "700", color: "#0E7C3A", cursor: "pointer", padding: "5px 8px", borderRadius: "6px", background: "#E7F6EC" }}>Reset</span>
                </>}
                <div style={{ display: "flex", alignItems: "stretch", border: "1px solid #E5E8E6", borderRadius: "8px", overflow: "hidden" }}>
                  <span className="scp2o" onClick={p?.zoomOut} title="Zoom out" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45", borderRight: "1px solid #EEF1EF" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4M8 11h6" /></svg></span>
                  <span className="scp2o" onClick={p?.zoomIn} title="Zoom in" style={{ width: "30px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#3F4B45" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4M8 11h6M11 8v6" /></svg></span>
                </div>
                {" "}
              </div>
              <div style={{ flex: "1", minWidth: "0", display: "grid", gridTemplateColumns: "42px minmax(0,1fr)", gap: "6px", alignContent: "center" }}>
                <div style={{ position: "relative", height: "240px" }}>
                  {L(p?.ticks).map((tk, i167) => <React.Fragment key={i167}>
                    <span style={{ position: "absolute", right: "0", top: `${A(tk?.top)}`, transform: "translateY(-50%)", fontSize: "12.5px", color: "#6A746E", fontVariantNumeric: "tabular-nums" }}>{S(tk?.label)}</span>
                  </React.Fragment>)}
                </div>
                <div ref={V.zoomRef} data-zkey={p?.zkey} onMouseMove={p?.onMove} onMouseLeave={p?.onLeave} style={{ position: "relative", height: "240px", cursor: "crosshair" }}>
                  {L(p?.grid).map((g, i168) => <React.Fragment key={i168}>
                    <div style={{ position: "absolute", left: "0", right: "0", top: `${A(g)}`, borderTop: "1px dashed #E3E9E5" }} />
                  </React.Fragment>)}
                  <svg viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                    <defs>
                      <linearGradient id={p?.gid} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#22C1D6" stopOpacity=".75" />
                        <stop offset="1" stopColor="#22C1D6" stopOpacity=".15" />
                      </linearGradient>
                    </defs>
                    <path d={p?.area} fill={`url(#${A(p?.gid)})`} stroke="none" />
                    <path d={p?.line} fill="none" stroke="#0EA5B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <span style={{ position: "absolute", left: "100%", top: `${A(p?.endTop)}`, width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", borderRadius: "50%", background: "#0EA5B9", boxShadow: "0 0 0 4px #fff", pointerEvents: "none" }} />
                  {p?.hover && <>
                    <div style={{ position: "absolute", top: "0", bottom: "0", left: `${A(p?.hover?.left)}`, borderLeft: "1px solid #9CA8A1", pointerEvents: "none" }} />
                    <span style={{ position: "absolute", left: `${A(p?.hover?.left)}`, top: `${A(p?.hover?.top)}`, width: "11px", height: "11px", margin: "-5.5px 0 0 -5.5px", borderRadius: "50%", background: "#fff", border: "2.5px solid #0EA5B9", boxSizing: "border-box", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", top: "4px", left: `${A(p?.hover?.left)}`, transform: `translateX(${A(p?.hover?.shift)})`, margin: "0 10px", background: "#043C2C", color: "#F3F4F6", borderRadius: "10px", padding: "8px 11px", fontSize: "14px", whiteSpace: "nowrap", pointerEvents: "none", boxShadow: "0 10px 24px rgba(0,0,0,.2)", zIndex: "3", display: "flex", flexDirection: "column", gap: "3px" }}>
                      <span style={{ color: "#D1D8D4" }}>{S(p?.hover?.time)}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0EA5B9" }} />
                        <b style={{ color: "#fff" }}>{S(p?.hover?.value)}</b>
                      </span>
                    </div>
                  </>}
                </div>
                <div />
                <div style={{ position: "relative", height: "22px" }}>
                  {L(p?.xLabels).map((xl, i169) => <React.Fragment key={i169}>
                    <span style={{ position: "absolute", left: `${A(xl?.left)}`, top: "4px", transform: `translateX(${A(xl?.shift)})`, display: "flex", flexDirection: "column", alignItems: "center", fontSize: "12.5px", lineHeight: "1.25", color: "#6A746E", whiteSpace: "nowrap" }}>
                      <span style={{ fontWeight: "600", color: "#3F4B45" }}>{S(xl?.top)}</span>
                      <span>{S(xl?.bot)}</span>
                    </span>
                  </React.Fragment>)}
                </div>
                {p?.dual && <>
                  <div />
                </>}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1px solid #EDF0EE", paddingTop: "10px" }}>
                {L(p?.foot).map((ft, i170) => <React.Fragment key={i170}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "12px", fontSize: "13px", color: "#7A8580", fontVariantNumeric: "tabular-nums" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontWeight: "700", color: `${A(ft?.color)}` }}>{S(ft?.label)}</span>
                      <span>
                        {"Min "}
                        <b style={{ color: "#0F1A14" }}>{S(ft?.minVal)}</b>
                      </span>
                      <span>{"observed at "}{S(ft?.minWhen)}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "flex-end", textAlign: "right" }}>
                      <span>
                        {"Max "}
                        <b style={{ color: "#0F1A14" }}>{S(ft?.maxVal)}</b>
                      </span>
                      <span>{"observed at "}{S(ft?.maxWhen)}</span>
                    </div>
                  </div>
                </React.Fragment>)}
              </div>
            </div>
          </React.Fragment>)}
        </React.Fragment>)}
      </div>
    </>}
    </>
  );
}
