import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';
import GBioFbFull from './GBioFbFull.jsx';
import GBioFr from './GBioFr.jsx';
export default function GBioFb({ V }) {
  return (
    <>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "stretch", height: "calc(100vh - 250px)", minHeight: "520px" }}>
      {V.g?.bio?.fb?.compact && <>
        <div style={{ flex: "0 1 260px", minWidth: "230px", maxHeight: "100%", overflowY: "auto", background: "#fff", border: "0", borderRadius: "16px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 8px 24px rgba(15,23,42,.06)", display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "14px 16px 10px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
            <span style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: ".08em", color: "#1F6B43" }}>YOUR PLAN</span>
            <span style={{ height: "22px", padding: "0 8px", borderRadius: "999px", background: "#E8F4EC", color: "#1F6B43", fontSize: "11px", fontWeight: "600", display: "inline-flex", alignItems: "center" }}>Calculated</span>
          </div>
          <div style={{ padding: "6px 16px 10px", display: "flex", flexDirection: "column", gap: "14px" }}>
            {L(V.g?.bio?.fb?.sum).map((sr, i121) => <React.Fragment key={i121}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "34px", height: "34px", borderRadius: "10px", background: `${A(sr?.bg)}`, color: `${A(sr?.fg)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }}><path d={sr?.ic} /></svg></span>
                <div style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: "0" }}>
                  <span style={{ fontSize: "11px", fontWeight: "600", color: "#64748B" }}>{S(sr?.l)}</span>
                  <span style={{ fontSize: "13.5px", fontWeight: "600", color: "#0F172A", lineHeight: "1.35" }}>{S(sr?.v)}</span>
                </div>
              </div>
            </React.Fragment>)}
          </div>
          <div style={{ padding: "6px 16px 16px" }}>
            <button className="scp19" onClick={V.g?.bio?.fb?.edit} style={{ appearance: "none", font: "inherit", margin: "0", cursor: "pointer", width: "100%", height: "40px", borderRadius: "10px", border: "1px solid #2E8B57", background: "#fff", color: "#1F6B43", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 20h4L19 9l-4-4L4 16zM14 6l4 4" /></svg>
              Edit inputs
            </button>
          </div>
        </div>
      </>}
      {V.g?.bio?.fb?.full && <GBioFbFull V={V} />}
      <div style={{ flex: "1 1 520px", display: "flex", flexDirection: "column", gap: "16px", minWidth: "0", maxHeight: "100%", overflowY: "auto", padding: "2px 6px 16px 2px", scrollbarWidth: "thin", scrollbarColor: "#CBD5E1 transparent" }}>
        {V.g?.bio?.fb?.idle && <>
          <div style={{ border: "1.5px dashed #CFE5D4", borderRadius: "16px", background: "#F4F9F5", padding: "72px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px" }}>
            <span style={{ width: "56px", height: "56px", borderRadius: "16px", background: "#E8F4EC", color: "#2E8B57", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d={V.g?.bio?.grass} /></svg></span>
            <span style={{ fontSize: "17px", fontWeight: "700", color: "#0F172A" }}>How long will your feed last?</span>
            <span style={{ fontSize: "13.5px", color: "#475569", maxWidth: "380px", lineHeight: "1.5", textWrap: "pretty" }}>Tell us where your feed comes from and what's grazing it, then press Calculate Feed Budget.</span>
          </div>
        </>}
        {V.g?.bio?.fb?.load && <>
          <div style={{ background: "#fff", border: "0", borderRadius: "16px", boxShadow: "0 1px 3px rgba(15,23,42,.06),0 8px 24px rgba(15,23,42,.06)", padding: "40px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "22px", textAlign: "center" }}>
            <span style={{ fontSize: "16px", fontWeight: "700", color: "#0F172A" }}>Building your feed budget</span>
            <div style={{ width: "min(420px,100%)", height: "8px", borderRadius: "999px", background: "#E8F4EC", overflow: "hidden" }}><div style={{ height: "100%", width: `${A(V.g?.bio?.fb?.load?.w)}`, background: "#2E8B57", borderRadius: "999px", transition: "width .55s ease" }} /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
              {L(V.g?.bio?.fb?.load?.steps).map((ls, i129) => <React.Fragment key={i129}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "600", color: `${A(ls?.fg)}`, transition: "color .3s" }}>
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: `${A(ls?.bg)}`, border: `2px solid ${A(ls?.bd)}`, color: "#fff", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box", transition: "background .3s,border-color .3s" }}>{S(ls?.tick)}</span>
                  {S(ls?.l)}
                </span>
              </React.Fragment>)}
            </div>
          </div>
        </>}
        {V.g?.bio?.fr && <GBioFr V={V} />}
      </div>
    </div>
    </>
  );
}
