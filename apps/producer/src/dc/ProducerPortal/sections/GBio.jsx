import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';
import GBioFb from './GBioFb.jsx';
export default function GBio({ V }) {
  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: "0" }}>
      {V.g?.bio?.empty && <>
        <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "48px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px" }}>
          <span style={{ width: "56px", height: "56px", borderRadius: "16px", background: "#E8F4EC", color: "#2E8B57", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d={V.g?.bio?.grass} /></svg></span>
          <span style={{ fontSize: "18px", fontWeight: "700", color: "#0F172A" }}>No pasture readings yet</span>
          <span style={{ fontSize: "13.5px", color: "#475569", maxWidth: "420px", lineHeight: "1.5", textWrap: "pretty" }}>Upload your pasture readings to see how much feed you have.</span>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginTop: "8px" }}>
            <button onClick={V.g?.bio?.upload} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 14px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", border: "1px solid #043C2C", background: "#043C2C", color: "#fff" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 16V4M7 9l5-5 5 5M5 20h14" /></svg>
              Upload readings
            </button>
            <button onClick={V.g?.bio?.tpl} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 14px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", border: "1px solid #CBD5E1", background: "#fff", color: "#334155" }}>Download template</button>
          </div>
        </div>
      </>}
      {L(V.g?.bio?.notes).map((nt, i120) => <React.Fragment key={i120}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", padding: "10px 16px", borderRadius: "12px", background: "#F4F9F5", border: "1px solid #DCEBE0", color: "#14532D", fontSize: "13px" }}>
          <span style={{ flex: "1 1 240px" }}>{S(nt?.t)}</span>
          <button onClick={nt?.go} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 14px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", height: "30px", border: "1px solid #2E8B57", background: "#fff", color: "#14532D" }}>{S(nt?.btn)}</button>
        </div>
      </React.Fragment>)}
      {V.g?.bio?.fb && <GBioFb V={V} />}
      {V.g?.bio?.nutEmpty && <>
        <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px" }}>
          <span style={{ width: "52px", height: "52px", borderRadius: "14px", background: "#E8F4EC", color: "#2E8B57", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10zM2 21c0-3 1.9-5.5 5.3-6.5C8 14.2 10 14 11 14" /></svg></span>
          <span style={{ fontSize: "16px", fontWeight: "700", color: "#0F172A" }}>No feed quality data has been uploaded yet.</span>
          <span style={{ fontSize: "13px", color: "#475569", maxWidth: "380px", lineHeight: "1.5" }}>Upload a feed analysis CSV to view feed quality information.</span>
          <button onClick={V.g?.bio?.upload} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", height: "34px", padding: "0 14px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "7px", whiteSpace: "nowrap", border: "1px solid #043C2C", background: "#043C2C", color: "#fff", marginTop: "6px" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M12 16V4M7 9l5-5 5 5M5 20h14" /></svg>
            Upload feed analysis CSV
          </button>
        </div>
      </>}
    </div>
    </>
  );
}
