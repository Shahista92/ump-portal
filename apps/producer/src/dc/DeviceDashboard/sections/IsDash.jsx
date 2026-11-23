import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';
import SoilReadingsOn from './SoilReadingsOn.jsx';
import IsWeather from './IsWeather.jsx';
export default function IsDash({ V }) {
  return (
    <>
    {V.dashHeadOn && <>
      <DeviceHeader h={V.hdrDash} />
    </>}
    {V.devInfoOpen && <>
      <div style={{ padding: "16px 16px 0", background: "#F3F6F4" }}><div><DeviceInfoPanel info={V.devInfo} /></div></div>
    </>}
    {V.alertsOn && <>
      <div style={{ padding: "16px" }}><AlertsPanel sources={V.alertSrc} /></div>
    </>}
    {V.soilInsightsOn && <>
      <div style={{ padding: "16px" }}><KeyInsightsPanel sources={V.kiSoil} /></div>
    </>}
    {V.soilReadingsOn && <SoilReadingsOn V={V} />}
    {V.comboOverview && <>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "22px 24px 0", background: "#F3F6F4", fontFamily: "'Roboto', ui-sans-serif, system-ui, sans-serif" }}>
        <span style={{ width: "36px", height: "36px", flex: "0 0 36px", borderRadius: "10px", background: "#DFF3F9", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#0E8090" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18h16M7 18a5 5 0 0 1 9-3M12 6v2M18 9l-1.5 1.5" /></svg></span>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          <span style={{ fontSize: "20px", fontWeight: "800", color: "#0F1A14" }}>Weather</span>
          <span style={{ fontSize: "12.5px", color: "#6A746E" }}>AxisTech Weather Station</span>
        </div>
      </div>
    </>}
    {V.isWeather && <IsWeather V={V} />}
    {V.comboOverviewSoil && <>
      <div data-screen-label="Combo Soil Probe">
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "22px 24px 0", background: "#F3F6F4", fontFamily: "'Roboto', ui-sans-serif, system-ui, sans-serif" }}>
          <span style={{ width: "36px", height: "36px", flex: "0 0 36px", borderRadius: "10px", background: "#F1E7DF", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#6B4A3A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v13M8 6l4-3 4 3M6 20h12M12 16l-5 4M12 16l5 4" /></svg></span>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <span style={{ fontSize: "22px", fontWeight: "800", color: "#0F1A14" }}>Soil Probe</span>
            <span style={{ fontSize: "13.5px", color: "#6A746E" }}>AxisTech Soil Probe</span>
          </div>
        </div>
      </div>
    </>}
    {V.comboOverviewLeaf && <>
      <div data-screen-label="Combo Leaf Wetness">
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "22px 24px 0", background: "#F3F6F4", fontFamily: "'Roboto', ui-sans-serif, system-ui, sans-serif" }}>
          <span style={{ width: "36px", height: "36px", flex: "0 0 36px", borderRadius: "10px", background: "#E6F4E2", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#3F7A2A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19C5 10 10 5 20 4c-1 10-6 15-15 15zM5 19l8-8" /></svg></span>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <span style={{ fontSize: "22px", fontWeight: "800", color: "#0F1A14" }}>Leaf Wetness</span>
            <span style={{ fontSize: "13.5px", color: "#6A746E" }}>AxisTech Leaf Wetness</span>
          </div>
        </div>
      </div>
    </>}
    </>
  );
}
