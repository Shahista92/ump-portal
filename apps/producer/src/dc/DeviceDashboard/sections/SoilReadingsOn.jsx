import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceHeader from '../../DeviceHeader/DeviceHeader.jsx';
import DeviceInfoPanel from '../../DeviceInfoPanel/DeviceInfoPanel.jsx';
import KeyInsightsPanel from '../../KeyInsightsPanel/KeyInsightsPanel.jsx';
import AlertsPanel from '../../AlertsPanel/AlertsPanel.jsx';
import SoilOvShow from './SoilOvShow.jsx';
import SoilTrendsShow from './SoilTrendsShow.jsx';
export default function SoilReadingsOn({ V }) {
  return (
    <>
    {V.soilOvShow && <SoilOvShow V={V} />}
    {V.soilTrendsShow && <SoilTrendsShow V={V} />}
    </>
  );
}
