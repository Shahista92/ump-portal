import React from 'react';
import { S, L, A, C } from '../runtime.js';
import DeviceHeader from '../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../AlertsPanel/AlertsPanel.jsx';
import IsDash from './sections/IsDash.jsx';
import IsFlow from './sections/IsFlow.jsx';
import IsRain from './sections/IsRain.jsx';
import IsGas from './sections/IsGas.jsx';
import IsLeaf from './sections/IsLeaf.jsx';
import IsLevel from './sections/IsLevel.jsx';
import IsPressure from './sections/IsPressure.jsx';
import IsMM from './sections/IsMM.jsx';
// Generated from "Device Dashboard.dc.html". V = { ...props, ...renderVals() } from DeviceDashboard.jsx
export default function View({ V }) {
  return (
    <div className="sc-host">
      <div style={{ display: "flex", minHeight: `${A(V.rootMinH)}`, background: "#F1F4F2", color: "#0F1A14", fontFamily: "Inter, system-ui, sans-serif" }}>
        <div style={C(V.sidebarStyle)}>
          <div style={{ padding: "4px 12px 18px", display: "flex", alignItems: "center" }}>
            {V.sidebarOpen && <>
              <img src="assets/axisstream-wordmark.png" alt="AxisStream" style={{ width: "100%", height: "auto", display: "block" }} />
            </>}
            {V.sidebarCollapsed && <>
              <img src="assets/axisstream-mark.png" alt="AxisStream" style={{ height: "30px", width: "auto", display: "block", margin: "0 auto" }} />
            </>}
          </div>
          {L(V.nav).map((item, i0) => <React.Fragment key={i0}>
            <div className="scp2f" onClick={item?.go} title={item?.label} style={{ cursor: "pointer", padding: "8px 14px", fontSize: "15px", color: `${A(item?.color)}`, background: `${A(item?.bg)}`, boxShadow: `${A(item?.mark)}`, display: "flex", alignItems: "center", gap: "11px", whiteSpace: "nowrap", overflow: "hidden", cursor: "pointer" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ width: "18px", height: "18px", flex: "0 0 18px", opacity: ".9" }}><path d={item?.d} /></svg>
              {V.sidebarOpen && <>
                <span>{S(item?.label)}</span>
              </>}
            </div>
          </React.Fragment>)}
        </div>
        <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
          {V.chromeOn && <>
            <div style={{ height: "50px", background: "#0E2E1B", display: "flex", alignItems: "center", gap: "14px", padding: "0 20px" }}>
              <div className="scp2g" onClick={V.toggleSidebar} title="Collapse sidebar" style={{ width: "28px", height: "28px", flex: "0 0 28px", borderRadius: "6px", background: "rgba(255,255,255,.12)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" style={{ width: "15px", height: "15px" }}><path d="M4 6h16M4 12h16M4 18h16" /></svg></div>
              <div style={{ background: "rgba(255,255,255,.12)", color: "#fff", fontSize: "14.5px", fontWeight: "600", padding: "6px 12px", borderRadius: "6px" }}>Axisstrech Testing</div>
              <div style={{ flex: "1", maxWidth: "360px", background: "rgba(255,255,255,.1)", color: "#9DBCA9", fontSize: "14.5px", padding: "7px 12px", borderRadius: "6px" }}>Search projects, devices, or data…</div>
              <div style={{ flex: "1" }} />
              <div style={{ fontSize: "14.5px", color: "#DDECE2" }}>Shahista S</div>
              <div style={{ width: "26px", height: "26px", borderRadius: "13px", background: "#1AA34A" }} />
            </div>
          </>}
          {V.isCombo && <>
            <div data-screen-label="Combo Device"><DeviceHeader h={V.hdrCombo} /></div>
          </>}
          {V.isComboAI && <>
            {V.devInfoOpen && <>
              <div style={{ padding: "16px 16px 0", background: "#F3F6F4" }}><div><DeviceInfoPanel info={V.devInfo} /></div></div>
            </>}
            <div data-screen-label="Combo Key Insights" style={{ padding: "16px", background: "#F3F6F4", flex: "1" }}><KeyInsightsPanel sources={V.kiCombo} /></div>
          </>}
          {V.isDash && <IsDash V={V} />}
          {V.isFlow && <IsFlow V={V} />}
          {V.isRain && <IsRain V={V} />}
          {V.isGas && <IsGas V={V} />}
          {V.isLeaf && <IsLeaf V={V} />}
          {V.isLevel && <IsLevel V={V} />}
          {V.isPressure && <IsPressure V={V} />}
          {V.isMM && <IsMM V={V} />}
          {V.isCats && <>
            <div>
              <div style={{ background: "#fff", borderBottom: "1px solid #E5E8E6", padding: "12px 16px" }}>
                <div style={{ fontSize: "18px", fontWeight: "700", color: "#0E2E1B" }}>Devices &amp; Sensors</div>
                <div style={{ fontSize: "14px", color: "#0EA5A5", marginTop: "2px" }}>Monitor connected devices — management lives in the My app</div>
              </div>
              <div style={{ background: "#fff", borderBottom: "1px solid #E5E8E6", padding: "10px 16px", display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ flex: "1", minWidth: "0", border: "1px solid #E5E8E6", borderRadius: "7px", padding: "9px 12px", fontSize: "14.5px", color: "#8A948E" }}>Search devices…</div>
                <div style={{ border: "1px solid #BFE5CC", borderRadius: "7px", padding: "9px 12px", fontSize: "14.5px", color: "#3F4B45" }}>All categories ▾</div>
              </div>
              <div style={{ padding: "16px", display: "grid", gap: "14px", gridTemplateColumns: "repeat(4, minmax(0,1fr))" }}>
                {L(V.categories).map((cat, i189) => <React.Fragment key={i189}>
                  <div className="scp2t" onClick={cat?.open} style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "10px", padding: "18px 14px", textAlign: "center", cursor: "pointer" }}>
                    {cat?.single && <>
                      <div style={{ width: "42px", height: "42px", margin: "0 auto 10px", borderRadius: "50%", background: `${A(cat?.ink)}`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: "0 0 0 2.5px #fff" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}><path d={cat?.d} /></svg></div>
                    </>}
                    {cat?.d2 && <>
                      <div style={{ position: "relative", width: "68px", height: "42px", flex: "0 0 68px", margin: "0 auto 10px" }}>
                        <span style={{ position: "absolute", left: "26px", top: "0", width: "42px", height: "42px", borderRadius: "50%", background: `${A(cat?.c2)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "9px", boxSizing: "border-box" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}><path d={cat?.d2} /></svg></span>
                        <span style={{ position: "absolute", left: "0", top: "0", width: "42px", height: "42px", borderRadius: "50%", background: "#0E8090", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 2.5px #fff" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}><path d={cat?.d} /></svg></span>
                      </div>
                    </>}
                    <div style={{ fontSize: "15px", fontWeight: "600", color: "#0F1A14" }}>{S(cat?.label)}</div>
                    <div style={{ fontSize: "20.5px", fontWeight: "700", marginTop: "6px" }}>{S(cat?.count)}</div>
                    <div style={{ fontSize: "12.5px", color: "#8A948E" }}>devices</div>
                  </div>
                </React.Fragment>)}
              </div>
            </div>
          </>}
          {V.isList && <>
            <div>
              <div style={{ background: "#fff", borderBottom: "1px solid #E5E8E6", padding: "12px 16px" }}>
                <div style={{ fontSize: "18px", fontWeight: "700", color: "#0E2E1B" }}>Devices &amp; Sensors</div>
                <div style={{ fontSize: "14px", color: "#0EA5A5", marginTop: "2px" }}>Monitor connected devices — management lives in the My app</div>
              </div>
              <div style={{ background: "#fff", borderBottom: "1px solid #E5E8E6", padding: "10px 16px", display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ flex: "1", minWidth: "0", border: "1px solid #E5E8E6", borderRadius: "7px", padding: "9px 12px", fontSize: "14.5px", color: "#8A948E" }}>Search devices…</div>
                <div onClick={V.goCats} style={{ border: "1px solid #BFE5CC", borderRadius: "7px", padding: "9px 12px", fontSize: "14.5px", color: "#0EA5A5", cursor: "pointer" }}>{S(V.listLabel)}{" ▾"}</div>
              </div>
              <div style={{ padding: "16px", display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))" }}>
                {L(V.deviceCards).map((dc, i190) => <React.Fragment key={i190}>
                  <div style={{ background: "#fff", border: "1px solid #E5E8E6", borderRadius: "10px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "18px", flex: "1" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        {V.listSingle && <>
                          <div style={{ width: "30px", height: "30px", flex: "0 0 30px", borderRadius: "50%", background: `${A(V.listIconInk)}`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ width: "15px", height: "15px" }}><path d={V.listIcon} /></svg></div>
                        </>}
                        {V.listIcon2 && <>
                          <div style={{ position: "relative", width: "49px", height: "30px", flex: "0 0 49px" }}>
                            <span style={{ position: "absolute", left: "19px", top: "0", width: "30px", height: "30px", borderRadius: "50%", background: `${A(V.listC2)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "7px", boxSizing: "border-box" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ width: "15px", height: "15px" }}><path d={V.listIcon2} /></svg></span>
                            <span style={{ position: "absolute", left: "0", top: "0", width: "30px", height: "30px", borderRadius: "50%", background: "#0E8090", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 2.5px #fff" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ width: "15px", height: "15px" }}><path d={V.listIcon} /></svg></span>
                          </div>
                        </>}
                        <div style={{ flex: "1", minWidth: "0", fontSize: "13px", fontWeight: "700", color: "#0F1A14", lineHeight: "1.3", overflowWrap: "anywhere" }}>{S(dc?.name)}</div>
                        <span style={{ flex: "0 0 auto", display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ display: "inline-flex", flex: "0 0 auto", alignItems: "center", gap: "6px", background: "#DFF3E6", color: "#0E7C3A", fontWeight: "700", fontSize: "11px", letterSpacing: ".4px", borderRadius: "20px", padding: "3px 9px 3px 7px" }}>
                            <span style={{ position: "relative", width: "7px", height: "7px", borderRadius: "50%", background: "#16A34A" }}><span style={{ position: "absolute", inset: "0", borderRadius: "50%", background: "#16A34A", animation: "wxLivePulse 1.8s ease-out infinite" }} /></span>
                            LIVE
                          </span>
                          <span style={{ color: "#8A948E", fontSize: "15px" }}>⋮</span>
                        </span>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px", margin: "10px 0 8px" }}><span style={{ border: "1px solid #E3D6CC", borderRadius: "20px", padding: "3px 10px", fontSize: "12.5px", color: "#6B4A3A" }}>{S(dc?.typeLabel)}</span></div>
                      <div style={{ fontSize: "12.5px", color: "#6A746E" }}>
                        {S(dc?.serial)}
                        <span style={{ color: "#C98A2E" }}>{S(dc?.note)}</span>
                      </div>
                      {dc?.multi && <>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                          {L(dc?.rows).map((rw, i191) => <React.Fragment key={i191}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".5px", textTransform: "uppercase", color: "#4C6354" }}>{S(rw?.title)}</span>
                              <div style={{ display: "flex", gap: "8px" }}>
                                {L(rw?.peek).map((pk, i192) => <React.Fragment key={i192}>
                                  <div title={pk?.label} style={{ flex: "1 1 0", background: "#F4F7F5", borderRadius: "10px", padding: "10px 12px", minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#4C6354", whiteSpace: "nowrap", overflow: "hidden" }}>
                                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke={pk?.color} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 13px" }}><path d={pk?.icon} /></svg>
                                      <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{S(pk?.name)}</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "baseline", gap: "3px", fontSize: "20px", lineHeight: "1.15", fontWeight: "700", color: "#0F1A14", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                                      {S(pk?.value)}
                                      <span style={{ fontSize: "12.5px", fontWeight: "500", color: "#6A746E" }}>{S(pk?.unit)}</span>
                                    </div>
                                    <div style={{ minHeight: "16px", fontSize: "12.5px", lineHeight: "16px", color: "#6A746E", whiteSpace: "nowrap" }}>{S(pk?.depth)}</div>
                                  </div>
                                </React.Fragment>)}
                              </div>
                              <span style={{ fontSize: "11.5px", color: "#6A746E" }}>{S(rw?.stamp)}</span>
                            </div>
                          </React.Fragment>)}
                        </div>
                      </>}
                      <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                        {L(dc?.peek).map((pk, i193) => <React.Fragment key={i193}>
                          <div title={pk?.label} style={{ flex: "1 1 0", background: "#F4F7F5", borderRadius: "10px", padding: "10px 12px", minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12.5px", fontWeight: "600", color: "#4C6354", whiteSpace: "nowrap", overflow: "hidden" }}>
                              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke={pk?.color} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 13px" }}><path d={pk?.icon} /></svg>
                              <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{S(pk?.name)}</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "baseline", gap: "3px", fontSize: "20px", lineHeight: "1.15", fontWeight: "700", color: "#0F1A14", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                              {S(pk?.value)}
                              <span style={{ fontSize: "12.5px", fontWeight: "500", color: "#6A746E" }}>{S(pk?.unit)}</span>
                            </div>
                            <div style={{ minHeight: "16px", fontSize: "12.5px", lineHeight: "16px", color: "#6A746E", whiteSpace: "nowrap" }}>{S(pk?.depth)}</div>
                          </div>
                        </React.Fragment>)}
                      </div>
                      {dc?.tank && <>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", marginTop: "4px", padding: "12px", background: "#F4F9FA", borderRadius: "10px" }}>
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ width: "58px", height: "8px", borderRadius: "4px 4px 0 0", background: "#CBD5D2" }} />
                            <div style={{ position: "relative", width: "120px", height: "140px", border: "2px solid #C9DADB", borderRadius: "12px 12px 16px 16px", background: "#fff", overflow: "hidden" }}>
                              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: `${A(dc?.tank?.h)}`, background: "#80DCE9", borderTop: "3px solid #B2EBF3" }} />
                              <div style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px" }}>
                                <span style={{ fontSize: "27.5px", lineHeight: "1", fontWeight: "800", color: "#1F2A37", fontVariantNumeric: "tabular-nums" }}>{S(dc?.tank?.pct)}</span>
                                <span style={{ fontSize: "13px", fontWeight: "600", color: "#1F2A37", fontVariantNumeric: "tabular-nums" }}>{S(dc?.tank?.depth)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>}
                      {dc?.gauge && <>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", marginTop: "4px", padding: "12px", background: "#F7F5FC", borderRadius: "10px" }}>
                          <div style={{ position: "relative", width: "100%", maxWidth: "220px" }}>
                            <svg viewBox="0 0 220 124" style={{ width: "100%", display: "block", overflow: "visible" }}>
                              <path d="M30 110 A80 80 0 0 1 190 110" fill="none" stroke="#EDE8FA" strokeWidth="18" strokeLinecap="round" />
                              <path d="M30 110 A80 80 0 0 1 190 110" fill="none" stroke="#A895E6" strokeWidth="18" strokeLinecap="round" pathLength="100" strokeDasharray={dc?.gauge?.dash} />
                              <text x="30" y="124" textAnchor="middle" fontSize="9.5" fill="#7A8580">980</text>
                              <text x="190" y="124" textAnchor="middle" fontSize="9.5" fill="#7A8580">1040</text>
                            </svg>
                            <div style={{ position: "absolute", left: "0", right: "0", top: "52%", display: "flex", flexDirection: "column", alignItems: "center", gap: "1px" }}>
                              <span style={{ fontSize: "27.5px", lineHeight: "1", fontWeight: "800", color: "#0F1A14", fontVariantNumeric: "tabular-nums" }}>{S(dc?.gauge?.value)}</span>
                              <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#4C6354" }}>hPa</span>
                            </div>
                          </div>
                          <span style={{ fontSize: "11.5px", color: "#6A746E" }}>15-minute reading · 08 Oct 2026 2:42 PM</span>
                        </div>
                      </>}
                      <div style={{ display: "flex", alignItems: "center", gap: "7px", marginTop: "14px", fontSize: "13px", color: "#4C6354" }}><span style={{ minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{S(dc?.stamp)}</span></div>
                    </div>
                    <div className="scp2u" onClick={dc?.launch} style={{ background: "#0E8090", color: "#fff", padding: "13px", textAlign: "center", fontSize: "14.5px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px" }}><path d="M3 15l5-6 4 4 5-7" /></svg>
                      Launch Dashboard →
            
                    </div>
                  </div>
                </React.Fragment>)}
              </div>
              <div style={{ margin: "0 16px", background: "#fff", border: "1px solid #E5E8E6", borderRadius: "8px", padding: "11px 14px", fontSize: "14px", color: "#6A746E" }}>
                {"Showing "}
                <b style={{ color: "#0F1A14" }}>{S(V.listCount)}</b>
                {" of "}
                <b style={{ color: "#0F1A14" }}>{S(V.listCount)}</b>
                {" devices"}
              </div>
            </div>
          </>}
          {V.isMobile && <>
            <div data-screen-label="Mobile" style={{ flex: "1", display: "flex", justifyContent: "center" }} />
          </>}
        </div>
      </div>
      <template id="__bundler_thumbnail">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect width="100" height="100" fill="#0E7C3A" />
          <path d="M30 70V48M45 70V36M60 70V54M75 70V30" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
        </svg>
      </template>
    </div>
  );
}
