import React from 'react';
import { S, L, A, C } from '../../runtime.js';


export default function FcDash({ V }) {
  return (
    <>
    <div style={{ marginTop: "16px", display: "grid", gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)", gap: "16px", alignItems: "start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ background: "linear-gradient(135deg, #3F7FB8 0%, #5C9BC9 48%, #7FB4D8 100%)", borderRadius: "14px", padding: "20px 22px", color: "#fff", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.2fr)", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "14px" }}>
              <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px" }} fill="#fff"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
              {S(V.hero?.addr)}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "26px" }}>
              <svg viewBox="0 0 40 34" style={{ width: "58px", height: "50px" }}>
                <circle cx="17" cy="14" r="8" fill="#F7C13F" />
                <path d="M17 1.5v3.5M17 23v3.5M4 14h3.5M26.5 14h3.5M8.2 5.2l2.4 2.4M23.4 20.4l2.4 2.4M25.8 5.2l-2.4 2.4M10.6 20.4l-2.4 2.4" stroke="#F7C13F" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M13 28h16a5 5 0 0 0 .6-9.96A7.5 7.5 0 0 0 15 16.5 5.8 5.8 0 0 0 13 28z" fill="#EDF3F8" />
              </svg>
              <div style={{ fontSize: "60px", fontWeight: "300", letterSpacing: "-.03em", lineHeight: "1" }}>{S(V.hero?.temp)}</div>
            </div>
            <div style={{ fontSize: "14px", marginTop: "12px", opacity: ".95" }}>{"↑ "}{S(V.hero?.hi)}</div>
            <div style={{ fontSize: "14px", opacity: ".85", marginTop: "3px" }}>{"Feels like "}{S(V.hero?.feels)}</div>
            <div style={{ fontSize: "15px", marginTop: "16px" }}>{S(V.hero?.cond)}</div>
            <div style={{ display: "flex", gap: "26px", marginTop: "auto", paddingTop: "22px", borderTop: "1px solid rgba(255,255,255,.28)", fontSize: "14px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px" }} fill="none" stroke="#fff" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 12l3.5-3" />
                </svg>
                {S(V.hero?.pres)}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px" }} fill="#fff"><path d="M6.5 18h11a4 4 0 0 0 .5-7.96A6 6 0 0 0 7.7 8.7 4.6 4.6 0 0 0 6.5 18z" /></svg>
                {S(V.hero?.cloud)}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px" }} fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M3 8h11a3 3 0 1 0-3-3" />
                  <path d="M3 12h14" />
                  <path d="M3 16h9a2.6 2.6 0 1 1 2.6 2.6" />
                </svg>
                {S(V.hero?.wind)}
              </span>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,.16)", borderRadius: "10px", padding: "14px 16px 10px" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "18px", fontSize: "13.5px", marginBottom: "10px" }}>
              {L(V.hero?.tabs).map((t, i32) => <React.Fragment key={i32}>
                <span data-act={t?.act} style={{ paddingBottom: "5px", cursor: "pointer", opacity: `${A(t?.op)}`, borderBottom: `2px solid ${A(t?.bd)}`, fontWeight: `${A(t?.fw)}` }}>{S(t?.label)}</span>
              </React.Fragment>)}
              <span style={{ marginLeft: "auto", fontSize: "12.5px", opacity: ".82" }}>{S(V.hero?.note)}</span>
            </div>
            {V.hero?.isTemp && <>
              <div style={{ position: "relative", height: "150px" }}>
                <svg viewBox="0 0 520 150" preserveAspectRatio="none" style={{ width: "100%", height: "150px", display: "block" }}><polyline points={V.hero?.line} fill="none" stroke="rgba(255,255,255,.85)" strokeWidth="2" vectorEffect="non-scaling-stroke" /></svg>
                {L(V.hero?.pts).map((p, i33) => <React.Fragment key={i33}>
                  <div style={{ position: "absolute", left: `${A(p?.left)}`, top: `${A(p?.top)}`, transform: "translateX(-50%)", background: "rgba(255,255,255,.92)", color: "#2E5F84", borderRadius: "4px", padding: "2px 7px", fontSize: "13px", fontWeight: "500", lineHeight: "1.2" }}>{S(p?.v)}</div>
                </React.Fragment>)}
              </div>
            </>}
            {V.hero?.isRain && <>
              <div style={{ position: "relative", height: "150px" }}>
                <div style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  {L(V.hero?.rainAxis).map((a, i34) => <React.Fragment key={i34}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", color: "rgba(255,255,255,.85)" }}>
                      <span style={{ flex: "0 0 36px", textAlign: "right" }}>{S(a)}</span>
                      <span style={{ flex: "1 1 auto", height: "1px", background: "rgba(255,255,255,.3)" }} />
                    </div>
                  </React.Fragment>)}
                </div>
                <div style={{ position: "absolute", left: "44px", right: "0", bottom: "0", top: "6px", display: "flex", alignItems: "flex-end", gap: "3px" }}>
                  {L(V.hero?.rainBars).map((b, i35) => <React.Fragment key={i35}>
                    <div title={b?.tip} style={{ flex: "1 1 0", height: `${A(b?.h)}`, minHeight: "2px", background: "#78BEEA", borderRadius: "2px 2px 0 0" }} />
                  </React.Fragment>)}
                </div>
              </div>
            </>}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", opacity: ".85", marginTop: "8px" }}>
              {L(V.hero?.xlabels).map((l, i36) => <React.Fragment key={i36}>
                <span>{S(l)}</span>
              </React.Fragment>)}
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "14px" }}>
          <div style={{ gridColumn: "span 2", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "18px 20px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
            <div>
              <div style={{ fontSize: "13.5px", color: "#7C8D88" }}>Wind Speed</div>
              <div style={{ fontSize: "22px", fontWeight: "600", marginTop: "3px" }}>{S(V.mx?.wind)}</div>
              <div style={{ fontSize: "13.5px", color: "#7C8D88", marginTop: "12px" }}>Wind Direction</div>
              <div style={{ fontSize: "20px", fontWeight: "600", marginTop: "3px" }}>{S(V.mx?.dir)}</div>
            </div>
            <svg viewBox="0 0 120 120" style={{ width: "104px", height: "104px", marginLeft: "auto" }}>
              <circle cx="60" cy="60" r="44" fill="none" stroke="#DCE6E2" strokeDasharray="3 4" />
              <text x="60" y="14" fontSize="10" fill="#8A9A95" textAnchor="middle" fontFamily="Poppins, sans-serif">N</text>
              <text x="60" y="115" fontSize="10" fill="#8A9A95" textAnchor="middle" fontFamily="Poppins, sans-serif">S</text>
              <text x="6" y="64" fontSize="10" fill="#8A9A95" fontFamily="Poppins, sans-serif">W</text>
              <text x="107" y="64" fontSize="10" fill="#8A9A95" fontFamily="Poppins, sans-serif">E</text>
              <line x1="60" y1="60" x2={V.mx?.arrowX} y2={V.mx?.arrowY} stroke="#1C7A55" strokeWidth="2.4" />
              <circle cx="60" cy="60" r="3.5" fill="#1C7A55" />
              <polygon points={V.mx?.arrowHead} fill="#1C7A55" />
            </svg>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "18px 20px", display: "flex", gap: "12px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
            <div>
              <div style={{ fontSize: "13.5px", color: "#7C8D88" }}>
                {"Chance of Rain "}
                <span style={{ color: "#A9B7B2" }}>(next 24 hrs)</span>
              </div>
              <div style={{ fontSize: "22px", fontWeight: "600", marginTop: "3px" }}>{S(V.mx?.rainPct)}</div>
              <div style={{ fontSize: "13.5px", color: "#7C8D88", marginTop: "12px" }}>Rainfall Expected</div>
              <div style={{ fontSize: "20px", fontWeight: "600", marginTop: "3px" }}>{S(V.mx?.rainMm)}</div>
            </div>
            <svg viewBox="0 0 24 24" style={{ width: "46px", height: "46px", marginLeft: "auto", flex: "0 0 46px" }} fill="none" stroke="#5B7C9B" strokeWidth="1.6" strokeLinecap="round">
              <path d="M6.5 14a3.6 3.6 0 0 1 .8-7.1 5 5 0 0 1 9.4 1.4A3.4 3.4 0 0 1 17 14z" fill="#DCE7F1" />
              <path d="M8.5 17.5l-1 3M12 17.5l-1 3M15.5 17.5l-1 3" stroke="#4A86C8" />
            </svg>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "18px 20px", display: "flex", gap: "12px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
            <div>
              <div style={{ fontSize: "13.5px", color: "#7C8D88" }}>Atmospheric Pressure</div>
              <div style={{ fontSize: "22px", fontWeight: "600", marginTop: "3px" }}>{S(V.mx?.pres)}</div>
            </div>
            <svg viewBox="0 0 24 24" style={{ width: "46px", height: "46px", marginLeft: "auto", flex: "0 0 46px" }} fill="none" stroke="#C0526E" strokeWidth="1.5">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="6" strokeDasharray="2 3" />
              <path d="M12 12l4-3.5" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "18px 20px", display: "flex", gap: "12px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
            <div>
              <div style={{ fontSize: "13.5px", color: "#7C8D88" }}>UV Index</div>
              <div style={{ fontSize: "22px", fontWeight: "600", marginTop: "3px" }}>{S(V.mx?.uv)}</div>
              <div style={{ fontSize: "13.5px", color: "#7C8D88", marginTop: "12px" }}>UV Level</div>
              <div style={{ fontSize: "20px", fontWeight: "600", marginTop: "3px" }}>{S(V.mx?.uvLevel)}</div>
            </div>
            <svg viewBox="0 0 24 24" style={{ width: "46px", height: "46px", marginLeft: "auto", flex: "0 0 46px" }}>
              <circle cx="12" cy="11" r="4.6" fill="#F5B342" />
              <path d="M12 2.5v2.4M12 17.2v2.3M2.8 11h2.4M18.8 11h2.4M5.5 4.5l1.7 1.7M16.8 15.8l1.7 1.7M18.5 4.5l-1.7 1.7M7.2 15.8l-1.7 1.7" stroke="#F5B342" strokeWidth="1.9" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "18px 20px", display: "flex", gap: "12px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
            <div>
              <div style={{ fontSize: "13.5px", color: "#7C8D88" }}>Humidity</div>
              <div style={{ fontSize: "22px", fontWeight: "600", marginTop: "3px" }}>{S(V.mx?.hum)}</div>
            </div>
            <svg viewBox="0 0 24 24" style={{ width: "46px", height: "46px", marginLeft: "auto", flex: "0 0 46px" }}><path d="M12 2.5C12 2.5 5.5 10 5.5 14.8A6.5 6.5 0 0 0 18.5 14.8C18.5 10 12 2.5 12 2.5z" fill="#43BFEA" /></svg>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "18px 20px", display: "flex", gap: "12px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
            <div>
              <div style={{ fontSize: "13.5px", color: "#7C8D88" }}>Dew Point</div>
              <div style={{ fontSize: "22px", fontWeight: "600", marginTop: "3px" }}>{S(V.mx?.dew)}</div>
            </div>
            <svg viewBox="0 0 24 24" style={{ width: "46px", height: "46px", marginLeft: "auto", flex: "0 0 46px" }}>
              <path d="M8.5 4C8.5 4 4 9 4 12.2A4.5 4.5 0 0 0 13 12.2C13 9 8.5 4 8.5 4z" fill="#1FB5A0" />
              <path d="M16 9C16 9 12 13.4 12 16.2A4 4 0 0 0 20 16.2C20 13.4 16 9 16 9z" fill="#17A08C" />
            </svg>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "18px 20px", display: "flex", gap: "12px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
            <div>
              <div style={{ fontSize: "13.5px", color: "#7C8D88" }}>Delta T (ΔT)</div>
              <div style={{ fontSize: "22px", fontWeight: "600", marginTop: "3px" }}>{S(V.mx?.delta)}</div>
            </div>
            <svg viewBox="0 0 24 24" style={{ width: "46px", height: "46px", marginLeft: "auto", flex: "0 0 46px" }} fill="none" stroke="#4A86C8" strokeWidth="1.6" strokeLinecap="round">
              <path d="M3 9h6M3 13h8M3 17h5" />
              <path d="M14 6.5C14 6.5 10.5 11 10.5 13.6a3.5 3.5 0 0 0 7 0C17.5 11 14 6.5 14 6.5z" fill="#BFE0F5" stroke="none" />
              <path d="M19.5 11C19.5 11 17 14.2 17 16a2.5 2.5 0 0 0 5 0c0-1.8-2.5-5-2.5-5z" fill="#7FBCE4" stroke="none" />
            </svg>
          </div>
        </div>
      </div>
      <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "14px", padding: "16px 18px 18px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="scp32" style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid #DCE6E2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", color: "#6E827C", cursor: "pointer" }}>‹</div>
          <div style={{ flex: "1 1 auto", textAlign: "center", fontSize: "16px", fontWeight: "600" }}>Today</div>
          <div className="scp32" style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid #DCE6E2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", color: "#6E827C", cursor: "pointer" }}>›</div>
        </div>
        <div style={{ marginTop: "14px", border: "1px solid #E4EAE8", borderRadius: "8px", padding: "12px 14px", fontSize: "13.5px", color: "#33453F", lineHeight: "1.55" }}>{S(V.todaySummary)}</div>
        <div style={{ marginTop: "16px", display: "grid", gridTemplateColumns: "repeat(10, minmax(0, 1fr))", gap: "4px", textAlign: "center" }}>
          {L(V.todayHours).map((hr, i37) => <React.Fragment key={i37}>
            <div>
              <div style={{ fontSize: "12.5px", color: "#55665F" }}>{S(hr?.t)}</div>
              <div style={{ margin: "8px 0" }}>
                <svg viewBox="0 0 40 34" style={{ width: "36px", height: "32px", display: "block", margin: "0 auto" }}>
                  <g opacity={hr?.iSun}>
                    <circle cx="17" cy="14" r="7" fill="#F5B342" />
                    <path d="M17 2.5v3M17 22.5v3M5 14h3M26 14h3M8.8 5.8l2.1 2.1M23.1 20.1l2.1 2.1M25.2 5.8l-2.1 2.1M10.9 20.1l-2.1 2.1" stroke="#F5B342" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  <g opacity={hr?.iMoon}><path d="M25 6.5a9.5 9.5 0 1 0 0 17.5 11.5 11.5 0 0 1 0-17.5z" fill="#B7C3D4" /></g>
                  <g opacity={hr?.iCloud}><path d="M12.5 28h15.5a4.9 4.9 0 0 0 .6-9.8A7.4 7.4 0 0 0 14.3 16 5.7 5.7 0 0 0 12.5 28z" fill="#AFBECE" /></g>
                </svg>
              </div>
              <div style={{ fontSize: "14px", fontWeight: "500" }}>{S(hr?.temp)}</div>
            </div>
          </React.Fragment>)}
        </div>
        <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "minmax(0, 1.5fr) repeat(5, minmax(0, 0.7fr))", gap: "6px", fontSize: "12.5px", color: "#8A9A95", textAlign: "center", paddingBottom: "8px", borderBottom: "1px solid #EEF3F1" }}>
          <span />
          <span>D</span>
          <span>N</span>
          <span>R</span>
          <span>H</span>
          <span>L</span>
        </div>
        {L(V.fcRows).map((r, i38) => <React.Fragment key={i38}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.5fr) repeat(5, minmax(0, 0.7fr))", gap: "6px", alignItems: "center", textAlign: "center", padding: "12px 0", borderBottom: "1px solid #F2F6F4" }}>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "14.5px", fontWeight: "500" }}>{S(r?.day)}</div>
              <div style={{ fontSize: "12.5px", color: "#8A9A95", marginTop: "2px" }}>{S(r?.date)}</div>
            </div>
            <div>
              <svg viewBox="0 0 40 34" style={{ width: "36px", height: "32px", display: "block", margin: "0 auto" }}>
                <g opacity={r?.d?.iSun}>
                  <circle cx="17" cy="14" r="7" fill="#F5B342" />
                  <path d="M17 2.5v3M17 22.5v3M5 14h3M26 14h3M8.8 5.8l2.1 2.1M23.1 20.1l2.1 2.1M25.2 5.8l-2.1 2.1M10.9 20.1l-2.1 2.1" stroke="#F5B342" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g opacity={r?.d?.iMoon}><path d="M25 6.5a9.5 9.5 0 1 0 0 17.5 11.5 11.5 0 0 1 0-17.5z" fill="#B7C3D4" /></g>
                <g opacity={r?.d?.iCloud}><path d="M12.5 28h15.5a4.9 4.9 0 0 0 .6-9.8A7.4 7.4 0 0 0 14.3 16 5.7 5.7 0 0 0 12.5 28z" fill="#AFBECE" /></g>
              </svg>
            </div>
            <div>
              <svg viewBox="0 0 40 34" style={{ width: "36px", height: "32px", display: "block", margin: "0 auto" }}>
                <g opacity={r?.n?.iSun}>
                  <circle cx="17" cy="14" r="7" fill="#F5B342" />
                  <path d="M17 2.5v3M17 22.5v3M5 14h3M26 14h3M8.8 5.8l2.1 2.1M23.1 20.1l2.1 2.1M25.2 5.8l-2.1 2.1M10.9 20.1l-2.1 2.1" stroke="#F5B342" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g opacity={r?.n?.iMoon}><path d="M25 6.5a9.5 9.5 0 1 0 0 17.5 11.5 11.5 0 0 1 0-17.5z" fill="#B7C3D4" /></g>
                <g opacity={r?.n?.iCloud}><path d="M12.5 28h15.5a4.9 4.9 0 0 0 .6-9.8A7.4 7.4 0 0 0 14.3 16 5.7 5.7 0 0 0 12.5 28z" fill="#AFBECE" /></g>
              </svg>
            </div>
            <div style={{ fontSize: "13.5px", color: "#55665F" }}>{S(r?.r)}</div>
            <div style={{ fontSize: "14.5px", fontWeight: "600" }}>{S(r?.h)}</div>
            <div style={{ fontSize: "14.5px", color: "#8A9A95" }}>{S(r?.l)}</div>
          </div>
        </React.Fragment>)}
        <div style={{ fontSize: "12.5px", color: "#93A5A0", marginTop: "14px" }}>{"Provider: "}{S(V.provider)}</div>
      </div>
    </div>
    </>
  );
}
