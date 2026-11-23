import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';
import RainTabDash from './RainTabDash.jsx';
export default function IsRain({ V }) {
  return (
    <>
    <div data-screen-label="Rain Gauge"><DeviceHeader h={V.hdrRain} /></div>
    {V.devInfoOpen && <>
      <div style={{ padding: "16px 16px 0", background: "#F3F6F4" }}><div><DeviceInfoPanel info={V.devInfo} /></div></div>
    </>}
    <div style={{ padding: "16px 16px 28px", fontFamily: "'Roboto', ui-sans-serif, system-ui, sans-serif", background: "#F3F6F4" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
        {V.rainTabDash && <RainTabDash V={V} />}
        {V.alertsOn && <>
          <AlertsPanel sources={V.alertSrc} />
        </>}
        {V.rainTabInsights && <>
          <KeyInsightsPanel sources={V.kiRain} />
        </>}
      </div>
    </div>
    </>
  );
}
