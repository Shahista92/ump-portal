import React from 'react';
import { S, L, A, C } from '../runtime.js';


// Generated from "Device Info Panel.dc.html". V = { ...props, ...renderVals() } from DeviceInfoPanel.jsx
export default function View({ V }) {
  return (
    <div className="sc-host">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "16px", alignItems: "stretch", fontFamily: "'Roboto', ui-sans-serif, system-ui, sans-serif", animation: "wxChartIn .35s ease both" }}>
        <div style={{ background: "#FFFFFF", border: "1px solid #CFE5C8", borderRadius: "18px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 6px 18px rgba(16,24,40,.05)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "20px 24px 16px", borderBottom: "1px solid #E3EFE7" }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0E7C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 16v-5M12 8h.01" />
            </svg>
            <div style={{ fontSize: "21.5px", fontWeight: "800", color: "#0F1A14" }}>Device Information</div>
          </div>
          <div style={{ padding: "14px 24px 4px", fontSize: "13px", fontWeight: "600", letterSpacing: ".4px", color: "#6A746E" }}>{S(V.info?.serial)}</div>
          <div style={{ padding: "0 24px 14px" }}>
            {L(V.info?.rows).map((f, i0) => <React.Fragment key={i0}>
              <div style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: "12px", alignItems: "center", padding: "11px 0", borderBottom: "1px solid #EEF3EF" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#6A746E" }}>{S(f?.label)}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", fontSize: "15px", fontWeight: "600", color: "#0F1A14" }}>
                  {S(f?.value)}
                  {L(f?.chips).map((chip, i1) => <React.Fragment key={i1}>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: `${A(chip?.ink)}`, background: `${A(chip?.bg)}`, borderRadius: "6px", padding: "3px 8px" }}>{S(chip?.label)}</span>
                  </React.Fragment>)}
                </span>
              </div>
            </React.Fragment>)}
          </div>
        </div>
        <div style={{ background: "#FFFFFF", border: "1px solid #CFE5C8", borderRadius: "18px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 6px 18px rgba(16,24,40,.05)", display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "20px 24px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0E7C3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              <div style={{ fontSize: "21.5px", fontWeight: "800", color: "#0F1A14", flex: "1" }}>Device Location</div>
              <a className="scp3d" href={V.mapsUrl} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px solid #CFE5C8", borderRadius: "8px", padding: "7px 12px", fontSize: "14px", fontWeight: "600", color: "#0E7C3A", whiteSpace: "nowrap" }}>
                Open in Maps
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
              </a>
            </div>
            <div style={{ fontSize: "14.5px", color: "#6A746E", marginTop: "4px", paddingLeft: "28px" }}>{S(V.info?.coords)}</div>
          </div>
          <div style={{ flex: "1", display: "flex", padding: "0 24px 24px", minHeight: "340px" }}>
            <div ref={V.mapRef} onPointerDown={V.pDown} onPointerMove={V.pMove} onPointerUp={V.pUp} onPointerCancel={V.pUp} onPointerLeave={V.pUp} style={{ position: "relative", flex: "1", minHeight: "340px", border: "1px solid #CFE5C8", borderRadius: "12px", overflow: "hidden", background: "#2B3A2F", cursor: "grab", touchAction: "none", userSelect: "none" }}>
              {L(V.tiles).map((tile, i2) => <React.Fragment key={i2}>
                <div style={{ position: "absolute", left: `${A(tile?.left)}`, top: `${A(tile?.top)}`, width: "256px", height: "256px", backgroundImage: `${A(tile?.bg)}`, backgroundSize: "256px 256px", pointerEvents: "none" }} />
              </React.Fragment>)}
              <div style={{ position: "absolute", left: `${A(V.pinLeft)}`, top: `${A(V.pinTop)}`, transform: "translate(-50%,-100%)", display: "flex", flexDirection: "column", alignItems: "center", pointerEvents: "none" }}>
                <div style={{ background: "#fff", color: "#0F1A14", fontSize: "14.5px", fontWeight: "800", borderRadius: "8px", padding: "6px 10px", boxShadow: "0 4px 12px rgba(0,0,0,.35)", whiteSpace: "nowrap", marginBottom: "6px" }}>{S(V.info?.label)}</div>
                <svg viewBox="0 0 24 32" width="30" height="40" style={{ display: "block", filter: "drop-shadow(0 3px 4px rgba(0,0,0,.45))" }}>
                  <path d="M12 31s10-11.3 10-19A10 10 0 0 0 2 12c0 7.7 10 19 10 19z" fill="#0E7C3A" stroke="#fff" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" fill="#fff" />
                </svg>
              </div>
              <div style={{ position: "absolute", left: "10px", top: "10px", display: "flex", flexDirection: "column", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,.3)", overflow: "hidden" }}>
                <span className="scp2o" onClick={V.zoomIn} onPointerDown={V.stop} title="Zoom in" style={{ width: "34px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#1F2A24", borderBottom: "1px solid #E5E8E6" }}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></span>
                <span className="scp2o" onClick={V.zoomOut} onPointerDown={V.stop} title="Zoom out" style={{ width: "34px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#1F2A24" }}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14" /></svg></span>
              </div>
              <span style={{ position: "absolute", right: "8px", bottom: "6px", fontSize: "11.5px", color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,.8)" }}>Imagery © Esri</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
