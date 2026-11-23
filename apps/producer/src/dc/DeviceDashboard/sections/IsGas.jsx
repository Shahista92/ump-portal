import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';
import GasTabDash from './GasTabDash.jsx';
export default function IsGas({ V }) {
  return (
    <>
    <DeviceHeader h={V.hdrGas} />
    {V.devInfoOpen && <>
      <div style={{ padding: "16px 16px 0", background: "#F3F6F4" }}><div><DeviceInfoPanel info={V.devInfo} /></div></div>
    </>}
    <div style={{ padding: "16px 16px 28px", display: "flex", flexDirection: "column", gap: "16px", fontFamily: "'Roboto', ui-sans-serif, system-ui, sans-serif", background: "#F3F6F4" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
        {V.gasTabDash && <GasTabDash V={V} />}
        {V.alertsOn && <>
          <AlertsPanel sources={V.alertSrc} />
        </>}
        {V.gasTabInsights && <>
          <KeyInsightsPanel sources={V.kiGas} />
        </>}
      </div>
    </div>
    </>
  );
}
