import React from 'react';
import { S, L, A, C } from '../../runtime.js';
import DeviceDashboard from '../../DeviceDashboard/DeviceDashboard.jsx';
import HLIDashboard from '../../HLIDashboard/HLIDashboard.jsx';

export default function GBench({ V }) {
  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", height: "calc(100vh - 210px)", minHeight: "600px" }}>
      {V.g?.bench?.perf && <>
        <div style={{ flex: "1", minHeight: "0", display: "grid", gridTemplateColumns: "minmax(0,2fr) minmax(0,1fr)", gap: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", minHeight: "0", minWidth: "0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(110px,140px) minmax(100px,125px) minmax(0,1fr)", gap: "10px", flexShrink: "0", alignItems: "stretch" }}>
              {L(V.g?.bench?.boxes).map((bx, i205) => <React.Fragment key={i205}>
                <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "10px 14px", display: "flex", flexDirection: "column", gap: "4px", minHeight: "0", minWidth: "0", overflow: "hidden" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#0F172A" }}>{S(bx?.t)}</span>
                    <button onClick={bx?.clear} title="Clear selection" style={{ appearance: "none", border: "0", background: "transparent", margin: "0", padding: "0", cursor: "pointer", color: "#64748B", display: "flex" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 16 14 6l6 6-8 8H8zM9 11l6 6" /></svg></button>
                  </div>
                  {bx?.list && <>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      {L(bx?.items).map((it, i206) => <React.Fragment key={i206}>
                        <button onClick={it?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "1px 0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#111", textAlign: "left" }}>
                          <span style={{ width: "13px", height: "13px", border: "1.5px solid #222", background: `${A(it?.bg)}`, borderRadius: "4px", flexShrink: "0" }} />
                          {S(it?.l)}
                        </button>
                      </React.Fragment>)}
                    </div>
                  </>}
                  {bx?.sel && <>
                    <select value={bx?.sel?.value ?? ""} onChange={bx?.sel?.set} style={{ height: "34px", border: "1px solid #D5DDE5", borderRadius: "4px", background: "#fff", font: "inherit", fontSize: "13px", color: "#334155", padding: "0 8px", outline: "0", cursor: "pointer", width: "100%" }}>
                      {L(bx?.sel?.opts).map((o, i207) => <React.Fragment key={i207}>
                        <option value={o?.v ?? ""}>{S(o?.label)}</option>
                      </React.Fragment>)}
                    </select>
                  </>}
                </div>
              </React.Fragment>)}
              <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", display: "flex", flexDirection: "column", minHeight: "0", minWidth: "0", padding: "8px 10px", overflow: "hidden" }}>
                <div style={{ fontWeight: "600", fontSize: "13px", color: "#0F172A", paddingBottom: "6px" }}>{S(V.g?.bench?.table?.t)}</div>
                <div style={{ overflowX: "auto", minWidth: "0" }}>
                  <div style={{ minWidth: "520px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1.2fr 1.3fr 1.2fr 1.1fr", background: "#F1F5F9", color: "#475569", borderRadius: "8px", fontSize: "11px", fontWeight: "600", textAlign: "center", alignItems: "center", padding: "7px 4px", gap: "4px" }}>
                      <span>Producer</span>
                      <span>Total Yield (t)</span>
                      <span>Yield per Hectare (t/ha)</span>
                      <span>Water Use Efficiency (t/ML)</span>
                      <span>Nitrogen Use Efficiency</span>
                      <span>Cultivated Area (ha)</span>
                    </div>
                    {L(V.g?.bench?.table?.rows).map((row, i208) => <React.Fragment key={i208}>
                      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1.2fr 1.3fr 1.2fr 1.1fr", fontSize: "12.5px", color: "#111", textAlign: "center", padding: "5px 4px", gap: "4px", borderBottom: "1px solid #EEE" }}>
                        {L(row?.cells).map((cl, i209) => <React.Fragment key={i209}>
                          <span>{S(cl)}</span>
                        </React.Fragment>)}
                      </div>
                    </React.Fragment>)}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flex: "1", minHeight: "0", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gridTemplateRows: "minmax(0,1fr) minmax(0,1fr)", gap: "10px" }}>
              <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", display: "flex", flexDirection: "column", minHeight: "0", minWidth: "0", padding: "12px 14px 8px" }}>
                <div style={{ fontWeight: "600", fontSize: "13px", color: "#0F172A", lineHeight: "1.25" }}>{S(V.g?.bench?.c1?.title)}</div>
                <div style={{ display: "flex", justifyContent: "flex-start", gap: "4px 10px", flexWrap: "wrap", fontSize: "10px", color: "#334155", minHeight: "13px" }}>
                  {L(V.g?.bench?.c1?.leg).map((lg, i210) => <React.Fragment key={i210}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(lg?.c)}` }} />
                      {S(lg?.n)}
                    </span>
                  </React.Fragment>)}
                </div>
                <div style={{ flex: "1", minHeight: "0", position: "relative" }}><div style={{ position: "absolute", inset: "0" }}>{S(V.g?.bench?.c1?.el)}</div></div>
              </div>
              <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", display: "flex", flexDirection: "column", minHeight: "0", minWidth: "0", padding: "12px 14px 8px" }}>
                <div style={{ fontWeight: "600", fontSize: "13px", color: "#0F172A", lineHeight: "1.25" }}>{S(V.g?.bench?.c2?.title)}</div>
                <div style={{ display: "flex", justifyContent: "flex-start", gap: "4px 10px", flexWrap: "wrap", fontSize: "10px", color: "#334155", minHeight: "13px" }}>
                  {L(V.g?.bench?.c2?.leg).map((lg, i211) => <React.Fragment key={i211}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(lg?.c)}` }} />
                      {S(lg?.n)}
                    </span>
                  </React.Fragment>)}
                </div>
                <div style={{ flex: "1", minHeight: "0", position: "relative" }}><div style={{ position: "absolute", inset: "0" }}>{S(V.g?.bench?.c2?.el)}</div></div>
              </div>
              <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", display: "flex", flexDirection: "column", minHeight: "0", minWidth: "0", padding: "12px 14px 8px" }}>
                <div style={{ fontWeight: "600", fontSize: "13px", color: "#0F172A", lineHeight: "1.25" }}>{S(V.g?.bench?.c3?.title)}</div>
                <div style={{ display: "flex", justifyContent: "flex-start", gap: "4px 10px", flexWrap: "wrap", fontSize: "10px", color: "#334155", minHeight: "13px" }}>
                  {L(V.g?.bench?.c3?.leg).map((lg, i212) => <React.Fragment key={i212}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(lg?.c)}` }} />
                      {S(lg?.n)}
                    </span>
                  </React.Fragment>)}
                </div>
                <div style={{ flex: "1", minHeight: "0", position: "relative" }}><div style={{ position: "absolute", inset: "0" }}>{S(V.g?.bench?.c3?.el)}</div></div>
              </div>
              <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", display: "flex", flexDirection: "column", minHeight: "0", minWidth: "0", padding: "12px 14px 8px" }}>
                <div style={{ fontWeight: "600", fontSize: "13px", color: "#0F172A", lineHeight: "1.25" }}>{S(V.g?.bench?.c4?.title)}</div>
                <div style={{ display: "flex", justifyContent: "flex-start", gap: "4px 10px", flexWrap: "wrap", fontSize: "10px", color: "#334155", minHeight: "13px" }}>
                  {L(V.g?.bench?.c4?.leg).map((lg, i213) => <React.Fragment key={i213}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(lg?.c)}` }} />
                      {S(lg?.n)}
                    </span>
                  </React.Fragment>)}
                </div>
                <div style={{ flex: "1", minHeight: "0", position: "relative" }}><div style={{ position: "absolute", inset: "0" }}>{S(V.g?.bench?.c4?.el)}</div></div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "0" }}>
            <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", display: "flex", flexDirection: "column", minHeight: "0", minWidth: "0", padding: "12px 12px 12px" }}>
              <div style={{ fontWeight: "600", fontSize: "13px", color: "#0F172A", lineHeight: "1.25" }}>{S(V.g?.bench?.map?.title)}</div>
              <div style={{ display: "flex", justifyContent: "flex-start", gap: "4px 10px", flexWrap: "wrap", fontSize: "10px", color: "#334155", minHeight: "13px", paddingBottom: "3px" }}>
                {L(V.g?.bench?.map?.leg).map((lg, i214) => <React.Fragment key={i214}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(lg?.c)}` }} />
                    {S(lg?.n)}
                  </span>
                </React.Fragment>)}
              </div>
              <div style={{ flex: "1", minHeight: "0", position: "relative", background: "#1d3328", borderRadius: "10px", overflow: "hidden" }}><div ref={V.benchRef} style={{ position: "absolute", inset: "0" }} /></div>
            </div>
          </div>
        </div>
      </>}
      {V.g?.bench?.soil && <>
        <div style={{ flex: "1", minHeight: "0", display: "grid", gridTemplateColumns: "minmax(0,1.25fr) minmax(0,.9fr)", gap: "10px" }}>
          <div style={{ display: "grid", gridTemplateRows: "auto minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)", gap: "10px", minHeight: "0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {L(V.g?.bench?.boxes).map((bx, i215) => <React.Fragment key={i215}>
                <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "10px 14px", display: "flex", flexDirection: "column", gap: "4px", minHeight: "0", minWidth: "0", overflow: "hidden" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#0F172A" }}>{S(bx?.t)}</span>
                    <button onClick={bx?.clear} title="Clear selection" style={{ appearance: "none", border: "0", background: "transparent", margin: "0", padding: "0", cursor: "pointer", color: "#64748B", display: "flex" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 16 14 6l6 6-8 8H8zM9 11l6 6" /></svg></button>
                  </div>
                  {bx?.list && <>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1px", minHeight: "0", overflow: "hidden" }}>
                      {L(bx?.items).map((it, i216) => <React.Fragment key={i216}>
                        <button onClick={it?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "1px 0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#111", textAlign: "left" }}>
                          <span style={{ width: "13px", height: "13px", border: "1.5px solid #222", background: `${A(it?.bg)}`, borderRadius: "4px", flexShrink: "0" }} />
                          {S(it?.l)}
                        </button>
                      </React.Fragment>)}
                    </div>
                  </>}
                  {bx?.sel && <>
                    <select value={bx?.sel?.value ?? ""} onChange={bx?.sel?.set} style={{ height: "34px", border: "1px solid #D5DDE5", borderRadius: "4px", background: "#fff", font: "inherit", fontSize: "13px", color: "#334155", padding: "0 8px", outline: "0", cursor: "pointer", width: "100%" }}>
                      {L(bx?.sel?.opts).map((o, i217) => <React.Fragment key={i217}>
                        <option value={o?.v ?? ""}>{S(o?.label)}</option>
                      </React.Fragment>)}
                    </select>
                  </>}
                </div>
              </React.Fragment>)}
            </div>
            <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", display: "flex", flexDirection: "column", minHeight: "0", minWidth: "0", padding: "12px 14px 8px" }}>
              <div style={{ fontWeight: "600", fontSize: "13px", color: "#0F172A", lineHeight: "1.25" }}>{S(V.g?.bench?.c1?.title)}</div>
              <div style={{ display: "flex", justifyContent: "flex-start", gap: "4px 10px", flexWrap: "wrap", fontSize: "10px", color: "#334155", minHeight: "13px" }}>
                {L(V.g?.bench?.c1?.leg).map((lg, i218) => <React.Fragment key={i218}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(lg?.c)}` }} />
                    {S(lg?.n)}
                  </span>
                </React.Fragment>)}
              </div>
              <div style={{ flex: "1", minHeight: "0", position: "relative" }}><div style={{ position: "absolute", inset: "0" }}>{S(V.g?.bench?.c1?.el)}</div></div>
            </div>
            <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", display: "flex", flexDirection: "column", minHeight: "0", minWidth: "0", padding: "12px 14px 8px" }}>
              <div style={{ fontWeight: "600", fontSize: "13px", color: "#0F172A", lineHeight: "1.25" }}>{S(V.g?.bench?.c2?.title)}</div>
              <div style={{ display: "flex", justifyContent: "flex-start", gap: "4px 10px", flexWrap: "wrap", fontSize: "10px", color: "#334155", minHeight: "13px" }}>
                {L(V.g?.bench?.c2?.leg).map((lg, i219) => <React.Fragment key={i219}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(lg?.c)}` }} />
                    {S(lg?.n)}
                  </span>
                </React.Fragment>)}
              </div>
              <div style={{ flex: "1", minHeight: "0", position: "relative" }}><div style={{ position: "absolute", inset: "0" }}>{S(V.g?.bench?.c2?.el)}</div></div>
            </div>
            <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", display: "flex", flexDirection: "column", minHeight: "0", minWidth: "0", padding: "12px 14px 8px" }}>
              <div style={{ fontWeight: "600", fontSize: "13px", color: "#0F172A", lineHeight: "1.25" }}>{S(V.g?.bench?.c3?.title)}</div>
              <div style={{ display: "flex", justifyContent: "flex-start", gap: "4px 10px", flexWrap: "wrap", fontSize: "10px", color: "#334155", minHeight: "13px" }}>
                {L(V.g?.bench?.c3?.leg).map((lg, i220) => <React.Fragment key={i220}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(lg?.c)}` }} />
                    {S(lg?.n)}
                  </span>
                </React.Fragment>)}
              </div>
              <div style={{ flex: "1", minHeight: "0", position: "relative" }}><div style={{ position: "absolute", inset: "0" }}>{S(V.g?.bench?.c3?.el)}</div></div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "0" }}>
            <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", display: "flex", flexDirection: "column", minHeight: "0", minWidth: "0", padding: "12px 12px 12px" }}>
              <div style={{ fontWeight: "600", fontSize: "13px", color: "#0F172A", lineHeight: "1.25" }}>{S(V.g?.bench?.map?.title)}</div>
              <div style={{ display: "flex", justifyContent: "flex-start", gap: "4px 10px", flexWrap: "wrap", fontSize: "10px", color: "#334155", minHeight: "13px", paddingBottom: "3px" }}>
                {L(V.g?.bench?.map?.leg).map((lg, i221) => <React.Fragment key={i221}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(lg?.c)}` }} />
                    {S(lg?.n)}
                  </span>
                </React.Fragment>)}
              </div>
              <div style={{ flex: "1", minHeight: "0", position: "relative", background: "#1d3328", borderRadius: "10px", overflow: "hidden" }}><div ref={V.benchRef} style={{ position: "absolute", inset: "0" }} /></div>
            </div>
          </div>
        </div>
      </>}
      {V.g?.bench?.season && <>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(150px,230px) minmax(120px,170px)", gap: "10px", flexShrink: "0" }}>
          {L(V.g?.bench?.boxes).map((bx, i222) => <React.Fragment key={i222}>
            <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", padding: "10px 14px", display: "flex", flexDirection: "column", gap: "4px", minHeight: "0", minWidth: "0", overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#0F172A" }}>{S(bx?.t)}</span>
                <button onClick={bx?.clear} title="Clear selection" style={{ appearance: "none", border: "0", background: "transparent", margin: "0", padding: "0", cursor: "pointer", color: "#64748B", display: "flex" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }}><path d="M4 16 14 6l6 6-8 8H8zM9 11l6 6" /></svg></button>
              </div>
              {bx?.list && <>
                <div style={{ display: "flex", flexDirection: "column", gap: "1px", minHeight: "0", overflow: "hidden" }}>
                  {L(bx?.items).map((it, i223) => <React.Fragment key={i223}>
                    <button onClick={it?.go} style={{ appearance: "none", border: "0", background: "transparent", font: "inherit", margin: "0", padding: "1px 0", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#111", textAlign: "left" }}>
                      <span style={{ width: "13px", height: "13px", border: "1.5px solid #222", background: `${A(it?.bg)}`, borderRadius: "4px", flexShrink: "0" }} />
                      {S(it?.l)}
                    </button>
                  </React.Fragment>)}
                </div>
              </>}
              {bx?.sel && <>
                <select value={bx?.sel?.value ?? ""} onChange={bx?.sel?.set} style={{ height: "34px", border: "1px solid #D5DDE5", borderRadius: "4px", background: "#fff", font: "inherit", fontSize: "13px", color: "#334155", padding: "0 8px", outline: "0", cursor: "pointer", width: "100%" }}>
                  {L(bx?.sel?.opts).map((o, i224) => <React.Fragment key={i224}>
                    <option value={o?.v ?? ""}>{S(o?.label)}</option>
                  </React.Fragment>)}
                </select>
              </>}
            </div>
          </React.Fragment>)}
        </div>
        <div style={{ flex: "1", minHeight: "0", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "10px" }}>
          <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", display: "flex", flexDirection: "column", minHeight: "0", minWidth: "0", padding: "12px 14px 8px" }}>
            <div style={{ fontWeight: "600", fontSize: "13px", color: "#0F172A", lineHeight: "1.25" }}>{S(V.g?.bench?.c1?.title)}</div>
            <div style={{ display: "flex", justifyContent: "flex-start", gap: "4px 10px", flexWrap: "wrap", fontSize: "10px", color: "#334155", minHeight: "13px" }}>
              {L(V.g?.bench?.c1?.leg).map((lg, i225) => <React.Fragment key={i225}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(lg?.c)}` }} />
                  {S(lg?.n)}
                </span>
              </React.Fragment>)}
            </div>
            <div style={{ flex: "1", minHeight: "0", position: "relative" }}><div style={{ position: "absolute", inset: "0" }}>{S(V.g?.bench?.c1?.el)}</div></div>
          </div>
          <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#fff", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 4px 14px rgba(15,23,42,.03)", display: "flex", flexDirection: "column", minHeight: "0", minWidth: "0", padding: "12px 14px 8px" }}>
            <div style={{ fontWeight: "600", fontSize: "13px", color: "#0F172A", lineHeight: "1.25" }}>{S(V.g?.bench?.c2?.title)}</div>
            <div style={{ display: "flex", justifyContent: "flex-start", gap: "4px 10px", flexWrap: "wrap", fontSize: "10px", color: "#334155", minHeight: "13px" }}>
              {L(V.g?.bench?.c2?.leg).map((lg, i226) => <React.Fragment key={i226}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: `${A(lg?.c)}` }} />
                  {S(lg?.n)}
                </span>
              </React.Fragment>)}
            </div>
            <div style={{ flex: "1", minHeight: "0", position: "relative" }}><div style={{ position: "absolute", inset: "0" }}>{S(V.g?.bench?.c2?.el)}</div></div>
          </div>
        </div>
      </>}
    </div>
    </>
  );
}
