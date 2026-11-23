import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';

export default function SoilOvShow({ V }) {
  return (
    <>
    <div data-screen-label="Soil Probe Overview" style={{ position: "relative", padding: "12px 16px 8px", display: "flex", flexDirection: "column", gap: "10px", fontFamily: "'Roboto', ui-sans-serif, system-ui, sans-serif", color: "#0F1A14" }}>
      {V.refShow && <>
        <div style={{ position: "absolute", top: `${A(V.refTop)}`, right: "16px", height: "26px", display: "flex", alignItems: "center", zIndex: "40" }}>
          <span className="scp2h" onClick={V.sv?.toggleRef} title="Calculation reference" style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#B45309", padding: "4px 8px", borderRadius: "6px", cursor: "pointer" }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5M12 8h.01" />
            </svg>
            {V.sv?.refLabel && <>
              <span>Calculation reference</span>
            </>}
          </span>
          {V.sv?.refOpen && <>
            <div onClick={V.sv?.toggleRef} style={{ position: "fixed", inset: "0", zIndex: "199", background: "rgba(15,26,20,.28)" }} />
            <aside onClick={V.sv?.stop} style={{ position: "fixed", top: "0", right: "0", bottom: "0", zIndex: "200", width: "min(560px, 100vw)", background: "#fff", boxShadow: "-18px 0 44px rgba(15,26,20,.16)", display: "flex", flexDirection: "column", fontFamily: "Inter, system-ui, sans-serif", color: "#0F1A14" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "20px 24px 16px", borderBottom: "1px solid #EEF1EF" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: "1", minWidth: "0" }}>
                  <span style={{ fontSize: "17px", fontWeight: "700" }}>Calculation Reference</span>
                  <span style={{ fontSize: "12.5px", color: "#6A746E", lineHeight: "1.45" }}>
                    {"Soil water limits used across the dashboard. This probe: "}
                    <b style={{ color: "#0F1A14" }}>{S(V.sv?.soilName)}</b>
                    {" · FC "}{S(V.sv?.fcT)}{" · PWP "}{S(V.sv?.pwpT)}{" · Refill "}{S(V.sv?.refT)}
                  </span>
                </div>
                <span className="scp2i" onClick={V.sv?.toggleRef} style={{ cursor: "pointer", color: "#6A746E", fontSize: "20px", lineHeight: "1", padding: "2px 6px", borderRadius: "6px" }}>×</span>
              </div>
              <div style={{ flex: "1", overflowY: "auto", padding: "0 24px 28px" }}>
                <section style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "20px 0", borderTop: "1px solid #EEF1EF" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#0F1A14" }}>Field Capacity</span>
                    <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#6A746E" }}>(FC)</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".6px", textTransform: "uppercase", color: "#6A746E" }}>Definition</span>
                    <p style={{ margin: "0", fontSize: "12.5px", lineHeight: "1.55", color: "#2B3630", textWrap: "pretty" }}>According to the FAO Glossary of Soil Moisture Terms, field capacity is the amount of water remaining in the soil after excess water has drained away following saturation, typically after 24–48 hours.</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".6px", textTransform: "uppercase", color: "#6A746E" }}>Why it matters</span>
                    <p style={{ margin: "0", fontSize: "12.5px", lineHeight: "1.55", color: "#2B3630", textWrap: "pretty" }}>FC is the upper limit of water the soil can hold for the crop. Water above FC drains below the root zone and is lost, carrying nutrients with it.</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".6px", textTransform: "uppercase", color: "#6A746E" }}>Used in the dashboard</span>
                    <p style={{ margin: "0", fontSize: "12.5px", lineHeight: "1.55", color: "#2B3630", textWrap: "pretty" }}>Upper bound of Plant Available Water (100%), the boundary between Wet and Optimal, and the FC marker on the moisture profile.</p>
                  </div>
                </section>
                <section style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "20px 0", borderTop: "1px solid #EEF1EF" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#0F1A14" }}>Permanent Wilting Point</span>
                    <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#6A746E" }}>(PWP)</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".6px", textTransform: "uppercase", color: "#6A746E" }}>Definition</span>
                    <p style={{ margin: "0", fontSize: "12.5px", lineHeight: "1.55", color: "#2B3630", textWrap: "pretty" }}>According to the FAO Glossary of Soil Moisture Terms, the permanent wilting point is the soil moisture content at which plants can no longer extract sufficient water from the soil and remain permanently wilted.</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".6px", textTransform: "uppercase", color: "#6A746E" }}>Why it matters</span>
                    <p style={{ margin: "0", fontSize: "12.5px", lineHeight: "1.55", color: "#2B3630", textWrap: "pretty" }}>PWP is the lower limit of water available to the crop. Water below PWP is held too tightly by soil particles for roots to use.</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".6px", textTransform: "uppercase", color: "#6A746E" }}>Used in the dashboard</span>
                    <p style={{ margin: "0", fontSize: "12.5px", lineHeight: "1.55", color: "#2B3630", textWrap: "pretty" }}>Lower bound of Plant Available Water (0%), the Crop Stress threshold in Irrigation Status, and the WP marker on the moisture profile.</p>
                  </div>
                </section>
                <section style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "20px 0", borderTop: "1px solid #EEF1EF" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}><span style={{ fontSize: "13px", fontWeight: "700", color: "#0F1A14" }}>Soil Type Reference Values</span></div>
                  <div style={{ display: "flex", flexDirection: "column", border: "1px solid #E5E8E6", borderRadius: "10px", overflow: "hidden", fontSize: "12.5px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.5fr) repeat(3, minmax(0,1fr))", gap: "10px", padding: "8px 12px", background: "#F4F7F5", fontSize: "12px", fontWeight: "700", color: "#4C6354", lineHeight: "1.3" }}>
                      <span>Soil type</span>
                      <span style={{ textAlign: "right" }}>FC (%)</span>
                      <span style={{ textAlign: "right" }}>PWP (%)</span>
                      <span style={{ textAlign: "right" }}>Refill (%)</span>
                    </div>
                    {L(V.sv?.refTable).map((t, i1) => <React.Fragment key={i1}>
                      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.5fr) repeat(3, minmax(0,1fr))", gap: "10px", padding: "8px 12px", borderTop: "1px solid #EEF1EF", background: `${A(t?.bg)}`, fontWeight: `${A(t?.fw)}`, fontVariantNumeric: "tabular-nums" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}>
                          {S(t?.name)}
                          {t?.cur && <>
                            <span style={{ fontSize: "10.5px", fontWeight: "700", background: "#0E7C3A", color: "#fff", borderRadius: "999px", padding: "1px 7px", whiteSpace: "nowrap" }}>This probe</span>
                          </>}
                        </span>
                        <span style={{ textAlign: "right" }}>{S(t?.fc)}</span>
                        <span style={{ textAlign: "right" }}>{S(t?.pwp)}</span>
                        <span style={{ textAlign: "right" }}>{S(t?.ref)}</span>
                      </div>
                    </React.Fragment>)}
                  </div>
                  <span style={{ fontSize: "12.5px", color: "#6A746E", lineHeight: "1.5" }}>Values are volumetric water content (%). According to USDA NRCS Available Water Capacity guidance, these are standard estimates by soil type; actual values may differ from laboratory measurements and should be confirmed from the probe’s own wetting and drying cycles.</span>
                </section>
                <section style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 0 0", borderTop: "1px solid #EEF1EF" }}>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: "#0F1A14" }}>References</span>
                  <a className="scp2j" href="https://www.fao.org/4/y4690e/y4690e04.htm" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 12px", border: "1px solid #E5E8E6", borderRadius: "8px", textDecoration: "none" }}>
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px", flex: "1", minWidth: "0" }}>
                      <b style={{ fontSize: "12.5px", color: "#0E7C3A" }}>FAO – Glossary of Soil Moisture Terms</b>
                      <span style={{ fontSize: "12.5px", color: "#4C6354", lineHeight: "1.45" }}>Field capacity and permanent wilting point definitions.</span>
                    </span>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#0E7C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 15px", marginTop: "2px" }}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
                  </a>
                  <a className="scp2j" href="https://www.fao.org/4/x0490e/x0490e0e.htm" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 12px", border: "1px solid #E5E8E6", borderRadius: "8px", textDecoration: "none" }}>
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px", flex: "1", minWidth: "0" }}>
                      <b style={{ fontSize: "12.5px", color: "#0E7C3A" }}>FAO Irrigation and Drainage Paper No. 56, Chapter 8</b>
                      <span style={{ fontSize: "12.5px", color: "#4C6354", lineHeight: "1.45" }}>Total and readily available water; depletion fraction used for the refill point.</span>
                    </span>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#0E7C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 15px", marginTop: "2px" }}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
                  </a>
                  <a className="scp2j" href="https://www.nrcs.usda.gov/sites/default/files/2022-10/AWC_Effects_on_Soil_Water_Holding_Capacity_and_Retention.pdf" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 12px", border: "1px solid #E5E8E6", borderRadius: "8px", textDecoration: "none" }}>
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px", flex: "1", minWidth: "0" }}>
                      <b style={{ fontSize: "12.5px", color: "#0E7C3A" }}>USDA NRCS – Soil Water Holding Capacity (AWC)</b>
                      <span style={{ fontSize: "12.5px", color: "#4C6354", lineHeight: "1.45" }}>Available water capacity between field capacity and wilting point.</span>
                    </span>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#0E7C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 15px", marginTop: "2px" }}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
                  </a>
                  <a className="scp2j" href="https://www.dpi.nsw.gov.au/__data/assets/pdf_file/0003/531957/determining-readily-available-water-for-im.pdf" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 12px", border: "1px solid #E5E8E6", borderRadius: "8px", textDecoration: "none" }}>
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px", flex: "1", minWidth: "0" }}>
                      <b style={{ fontSize: "12.5px", color: "#0E7C3A" }}>NSW DPI – Determining readily available water</b>
                      <span style={{ fontSize: "12.5px", color: "#4C6354", lineHeight: "1.45" }}>Readily available water and refill point for irrigation management.</span>
                    </span>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#0E7C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 15px", marginTop: "2px" }}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
                  </a>
                </section>
              </div>
            </aside>
          </>}
        </div>
      </>}
      {V.sv?.hasTex && <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "14px" }}>
          {L(V.sv?.kpis).map((k, i2) => <React.Fragment key={i2}>
            <div style={{ position: "relative", zIndex: `${A(k?.z)}`, background: `${A(k?.bg)}`, border: `1px solid ${A(k?.bd)}`, borderRadius: "12px", padding: "10px 14px", display: "flex", flexDirection: "column", gap: "5px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}>
                <span style={{ width: "28px", height: "28px", flex: "0 0 28px", borderRadius: "8px", background: `${A(k?.hBg)}`, display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={k?.hInk} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={k?.hIcon} /></svg></span>
                <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#3F4B45", lineHeight: "1.3", minWidth: "0" }}>{S(k?.title)}</span>
                {k?.hasInfo && <>
                  <span className="scp2k" onClick={k?.toggle} title="More info" style={{ width: "20px", height: "20px", flex: "0 0 20px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#9AA39E" }}>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 11v5M12 8h.01" />
                    </svg>
                  </span>
                </>}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", minHeight: "38px" }}>
                {k?.icon && <>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={k?.valInk} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 22px" }}><path d={k?.icon} /></svg>
                </>}
                <span style={{ fontSize: `${A(k?.size)}`, lineHeight: "1.1", fontWeight: "700", color: `${A(k?.valInk)}`, fontVariantNumeric: "tabular-nums", letterSpacing: "-.5px" }}>{S(k?.value)}</span>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#6A746E" }}>{S(k?.unit)}</span>
                <span style={{ flex: "1" }} />
                {k?.pill && <>
                  <span style={{ fontSize: "12px", fontWeight: "600", padding: "2px 8px", borderRadius: "6px", background: `${A(k?.pillBg)}`, color: `${A(k?.pillInk)}`, whiteSpace: "nowrap" }}>{S(k?.pill)}</span>
                </>}
              </div>
              {k?.bar && <>
                <div style={{ position: "relative", height: "6px", borderRadius: "3px", background: "#EEF1EF" }}>
                  <div style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: `${A(k?.bar?.w)}`, borderRadius: "3px", background: `${A(k?.bar?.c)}` }} />
                  <div title="Refill point" style={{ position: "absolute", top: "-3px", bottom: "-3px", left: `${A(k?.bar?.ref)}`, width: "2px", background: "#0F1A14" }} />
                </div>
              </>}
              <span style={{ fontSize: "12.5px", color: "#6A746E", lineHeight: "1.4", textWrap: "pretty" }}>{S(k?.sub)}</span>
              {k?.open && <>
                <div style={{ position: "absolute", top: "48px", left: `${A(k?.popL)}`, right: `${A(k?.popR)}`, zIndex: "60", boxSizing: "border-box", width: "min(420px, calc(100vw - 48px))", maxHeight: "min(560px, 72vh)", overflowY: "auto", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 18px 44px rgba(15,26,20,.18)", padding: "6px 16px 14px", display: "grid", gridAutoRows: "max-content", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", paddingTop: "10px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#0F1A14" }}>{S(k?.popTitle)}</span>
                    <span style={{ flex: "1" }} />
                    <span onClick={k?.toggle} style={{ cursor: "pointer", color: "#6A746E", fontSize: "14px", lineHeight: "1", padding: "2px 6px" }}>×</span>
                  </div>
                  <p style={{ margin: "0", fontSize: "12.5px", lineHeight: "1.55", color: "#2B3630", textWrap: "pretty" }}>{S(k?.desc)}</p>
                  {k?.formula && <>
                    <div style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12.5px", lineHeight: "1.5", background: "#F4F7F5", border: "1px solid #E5E8E6", borderRadius: "8px", padding: "9px 11px", color: "#0F1A14" }}>{S(k?.formula)}</div>
                  </>}
                  {k?.note && <>
                    <div style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#92560A", background: "#FFF8EB", border: "1px solid #F5DFB0", borderRadius: "8px", padding: "9px 11px" }}>{S(k?.note)}</div>
                  </>}
                  <div style={{ display: "flex", flexDirection: "column", border: "1px solid #E5E8E6", borderRadius: "10px", overflow: "hidden" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "10px", padding: "7px 12px", background: "#F4F7F5", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", textTransform: "uppercase", color: "#6A746E" }}>
                      <span>Category</span>
                      <span style={{ textAlign: "right" }}>{S(k?.rangeHead)}</span>
                    </div>
                    {L(k?.cats).map((ct, i3) => <React.Fragment key={i3}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "3px", padding: "9px 12px", borderTop: "1px solid #EEF1EF" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "10px", alignItems: "center" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", fontWeight: "700", color: `${A(ct?.ink)}` }}>
                            <span style={{ width: "9px", height: "9px", flex: "0 0 9px", borderRadius: "2px", background: `${A(ct?.c)}` }} />
                            {S(ct?.name)}
                          </span>
                          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#0F1A14", textAlign: "right", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{S(ct?.range)}</span>
                        </div>
                        <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#4C6354", paddingLeft: "17px", textWrap: "pretty" }}>{S(ct?.d)}</span>
                      </div>
                    </React.Fragment>)}
                  </div>
                </div>
              </>}
            </div>
          </React.Fragment>)}
        </div>
      </>}
      <div style={{ boxSizing: "border-box", position: "relative", zIndex: `${A(V.sv?.zoneInfo?.z)}`, minWidth: "0", background: "#fff", border: "1px solid #EEF1EF", borderRadius: "14px", padding: "14px 16px", boxShadow: "0 1px 2px rgba(15,26,20,.04)", display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "10px", background: "#E7F6EC", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0E7C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21v-9M12 12c0-3.3-2.4-5.5-6.5-5.5 0 3.3 2.4 5.5 6.5 5.5zM12 10c0-3.3 2.4-5.5 6.5-5.5 0 3.3-2.4 5.5-6.5 5.5z" /></svg></span>
          <span style={{ fontSize: "15px", fontWeight: "600", color: "#0E7C3A" }}>Soil Profile</span>
          <span style={{ position: "relative", display: "flex" }}>
            <span className="scp2k" onClick={V.sv?.zoneInfo?.toggle} title="More info" style={{ width: "20px", height: "20px", flex: "0 0 20px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#9AA39E" }}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
            </span>
            {V.sv?.zoneInfo?.open && <>
              <div style={{ position: "absolute", top: "30px", left: "50%", transform: "translateX(-50%)", zIndex: "60", width: "min(420px, calc(100vw - 48px))", maxHeight: "min(560px, 72vh)", overflowY: "auto", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 18px 44px rgba(15,26,20,.18)", padding: "6px 16px 14px", display: "grid", gridAutoRows: "max-content", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", paddingTop: "10px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: "#0F1A14" }}>{S(V.sv?.zoneInfo?.popTitle)}</span>
                  <span style={{ flex: "1" }} />
                  <span onClick={V.sv?.zoneInfo?.toggle} style={{ cursor: "pointer", color: "#6A746E", fontSize: "14px", lineHeight: "1", padding: "2px 6px" }}>×</span>
                </div>
                {V.sv?.zoneInfo?.desc && <>
                  <p style={{ margin: "0", fontSize: "12.5px", lineHeight: "1.55", color: "#2B3630", textWrap: "pretty" }}>{S(V.sv?.zoneInfo?.desc)}</p>
                </>}
                {V.sv?.zoneInfo?.formula && <>
                  <div style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12.5px", lineHeight: "1.5", background: "#F4F7F5", border: "1px solid #E5E8E6", borderRadius: "8px", padding: "9px 11px", color: "#0F1A14" }}>{S(V.sv?.zoneInfo?.formula)}</div>
                </>}
                {V.sv?.zoneInfo?.note && <>
                  <div style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#92560A", background: "#FFF8EB", border: "1px solid #F5DFB0", borderRadius: "8px", padding: "9px 11px" }}>{S(V.sv?.zoneInfo?.note)}</div>
                </>}
                <div style={{ display: "flex", flexDirection: "column", border: "1px solid #E5E8E6", borderRadius: "10px", overflow: "hidden" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "10px", padding: "7px 12px", background: "#F4F7F5", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".5px", textTransform: "uppercase", color: "#6A746E" }}>
                    <span>Category</span>
                    <span style={{ textAlign: "right" }}>{S(V.sv?.zoneInfo?.rangeHead)}</span>
                  </div>
                  {L(V.sv?.zoneInfo?.cats).map((ct, i4) => <React.Fragment key={i4}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "3px", padding: "9px 12px", borderTop: "1px solid #EEF1EF" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "10px", alignItems: "center" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", fontWeight: "700", color: `${A(ct?.ink)}` }}>
                          <span style={{ width: "9px", height: "9px", flex: "0 0 9px", borderRadius: "2px", background: `${A(ct?.c)}` }} />
                          {S(ct?.name)}
                        </span>
                        <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#0F1A14", textAlign: "right", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{S(ct?.range)}</span>
                      </div>
                      <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#4C6354", paddingLeft: "17px", textWrap: "pretty" }}>{S(ct?.d)}</span>
                    </div>
                  </React.Fragment>)}
                </div>
              </div>
            </>}
          </span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", alignItems: "stretch" }}>
          <div style={{ flex: "2.6 1 400px", display: "flex", flexDirection: "column", gap: "16px", minWidth: "0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "10px", minWidth: "0" }}>
              {L(V.sv?.zones).map((z, i5) => <React.Fragment key={i5}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", background: "#F7F9F8", borderRadius: "12px", padding: "8px 12px 10px", borderTop: `3px solid ${A(z?.zc)}`, minWidth: "0" }}>
                  <span style={{ display: "flex", flexDirection: "column", gap: "1px", fontSize: "13px", fontWeight: "600", color: "#0F1A14" }}>
                    {S(z?.name)}
                    <span style={{ fontSize: "12.5px", fontWeight: "400", color: "#6A746E", whiteSpace: "nowrap" }}>{S(z?.range)}</span>
                  </span>
                  <span style={{ order: "2", display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span style={{ fontSize: "20px", lineHeight: "1", fontWeight: "700", color: "#0F1A14", fontVariantNumeric: "tabular-nums", letterSpacing: "-.5px" }}>{S(z?.val)}</span>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#4C6354" }}>%</span>
                  </span>
                </div>
              </React.Fragment>)}
            </div>
            <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px" }}>
                <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#3F4B45" }}>Moisture at each depth</span>
                <span style={{ fontSize: "12.5px", color: "#8A948E" }}>vs previous reading</span>
              </div>
              <div style={{ flex: "1", display: "flex", flexDirection: "column", borderRadius: "12px", overflow: "hidden", background: "linear-gradient(180deg, #F3EDE6, #E6DBCF)" }}>
                {L(V.sv?.profBars).map((p, i6) => <React.Fragment key={i6}>
                  <div style={{ flex: "1", display: "grid", gridTemplateColumns: "56px minmax(40px,1fr) 52px 58px", gap: "10px", alignItems: "center", minHeight: "34px", padding: "0 12px", borderTop: "1px solid rgba(255,255,255,.55)", fontVariantNumeric: "tabular-nums" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "12.5px", fontWeight: "600", color: "#5A4636", whiteSpace: "nowrap" }}>
                      <span style={{ width: "4px", height: "20px", flex: "0 0 4px", borderRadius: "2px", background: `${A(p?.zc)}` }} />
                      {S(p?.depth)}
                    </span>
                    <div style={{ position: "relative", height: "18px", borderRadius: "9px", background: "rgba(255,255,255,.75)", boxShadow: "inset 0 1px 2px rgba(90,70,54,.12)" }}><div style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: `${A(p?.w)}`, borderRadius: "9px", background: `linear-gradient(90deg, rgba(214,228,247,.9), ${A(p?.shade)})`, boxShadow: "0 1px 2px rgba(29,79,168,.18)" }} /></div>
                    <span style={{ textAlign: "right", fontSize: "13px", fontWeight: "700", color: "#0F1A14" }}>{S(p?.val)}</span>
                    <span title={`${A(p?.tw)} vs previous reading`} style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: "4px", fontSize: "12.5px", fontWeight: "700", color: `${A(p?.tInk)}`, whiteSpace: "nowrap" }}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d={p?.tIc} /></svg>
                      {S(p?.tDl)}
                    </span>
                  </div>
                </React.Fragment>)}
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
            {L(V.sv?.subProfiles).map((pr, i7) => <React.Fragment key={i7}>
              <div style={{ flex: "1", position: "relative", zIndex: `${A(pr?.dZ)}`, boxSizing: "border-box", background: "#F7F9F8", borderRadius: "12px", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "10px", background: `${A(pr?.tint)}`, display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={pr?.icInk} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={pr?.ic} /></svg></span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}><span style={{ fontSize: `${A(pr?.tSize)}`, fontWeight: "700", color: `${A(pr?.icInk)}` }}>{S(pr?.title)}</span></div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "14px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                      <span style={{ fontSize: `${A(pr?.vSize)}`, lineHeight: "1", fontWeight: "700", color: `${A(pr?.vInk)}`, fontVariantNumeric: "tabular-nums", letterSpacing: "-.5px" }}>{S(pr?.avgV)}</span>
                      <span style={{ fontSize: "13px", fontWeight: "600", color: "#4C6354" }}>{S(pr?.avgU)}</span>
                    </span>
                    <span style={{ fontSize: "12.5px", color: "#6A746E" }}>{S(pr?.sub)}</span>
                  </div>
                </div>
                <div className="scp2l" onClick={pr?.dToggle} style={{ display: "flex", alignItems: "center", gap: "6px", paddingTop: "10px", borderTop: "1px solid #F1F3F2", fontSize: "12.5px", fontWeight: "600", color: "#4C6354", cursor: "pointer", userSelect: "none" }}>
                  {S(pr?.dLabel)}
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d={pr?.dChev} /></svg>
                </div>
                {pr?.dOpen && <>
                  <div style={{ position: "absolute", left: "0", right: "0", top: "calc(100% - 6px)", zIndex: "60", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "12px", boxShadow: "0 18px 44px rgba(15,26,20,.16)", padding: "6px 16px 10px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto 64px", columnGap: "12px", padding: "8px 0 4px", fontSize: "11px", fontWeight: "600", letterSpacing: ".4px", textTransform: "uppercase", color: "#8A948E" }}>
                      <span>Depth</span>
                      <span style={{ textAlign: "right" }}>Latest</span>
                      <span style={{ textAlign: "right" }}>vs prev</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {L(pr?.rows).map((p, i8) => <React.Fragment key={i8}>
                        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto 64px", columnGap: "12px", alignItems: "center", minHeight: "30px", borderTop: "1px solid #EAEEEC", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                          <span style={{ fontSize: "12.5px", color: "#4C6354" }}>{S(p?.depth)}</span>
                          <span style={{ textAlign: "right", fontSize: "12.5px", fontWeight: "700", color: "#0F1A14" }}>{S(p?.val)}</span>
                          <span style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "3px", fontSize: "12.5px", fontWeight: "700", color: `${A(p?.tInk)}` }}>
                            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d={p?.tIc} /></svg>
                            {S(p?.tDl)}
                          </span>
                        </div>
                      </React.Fragment>)}
                    </div>
                  </div>
                </>}
              </div>
            </React.Fragment>)}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
