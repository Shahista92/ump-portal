import React from 'react';
import { S, L, A, C } from '../../runtime.js';

import FcDash from './FcDash.jsx';
export default function WForecast({ V }) {
  return (
    <>
    {V.fcDash && <FcDash V={V} />}
    {V.fc3d && <>
      <div style={{ marginTop: "18px", display: "flex", alignItems: "baseline", gap: "12px" }}>
        <div style={{ fontSize: "18px", fontWeight: "600" }}>3-day forecast detail</div>
        <div style={{ fontSize: "13.5px", color: "#8A9A95" }}>{S(V.fcDetailSub)}</div>
      </div>
      <div style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
        {L(V.fcCharts).map((c, i39) => <React.Fragment key={i39}>
          <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "18px 20px 12px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ fontSize: "15px", fontWeight: "600", color: `${A(c?.color)}` }}>{S(c?.title)}</div>
              <div style={{ marginLeft: "auto", display: "flex", gap: "3px", border: "1px solid #E4EAE8", borderRadius: "8px", padding: "3px" }}>
                {L(c?.ranges).map((r, i40) => <React.Fragment key={i40}>
                  <div className="scp2y" data-act={r?.act} style={{ padding: "6px 13px", borderRadius: "6px", fontSize: "13px", cursor: "pointer", background: `${A(r?.bg)}`, color: `${A(r?.c)}`, fontWeight: `${A(r?.fw)}` }}>{S(r?.label)}</div>
                </React.Fragment>)}
              </div>
            </div>
            <div id={c?.id} style={{ marginTop: "6px", minHeight: "280px" }} />
          </div>
        </React.Fragment>)}
      </div>
    </>}
    </>
  );
}
