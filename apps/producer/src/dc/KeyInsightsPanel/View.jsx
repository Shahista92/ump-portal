import React from 'react';
import { S, L, A, C } from '../runtime.js';


// Generated from "Key Insights Panel.dc.html". V = { ...props, ...renderVals() } from KeyInsightsPanel.jsx
export default function View({ V }) {
  return (
    <div className="sc-host">
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "stretch", fontFamily: "'Roboto', ui-sans-serif, system-ui, sans-serif", color: "#0F1A14" }}>
        <div style={{ flex: "7 1 0", minWidth: "min(100%, 480px)", height: "calc(100vh - 250px)", minHeight: "540px", boxSizing: "border-box", background: "#fff", border: "1px solid #CFE5C8", borderRadius: "18px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 6px 18px rgba(16,24,40,.05)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", padding: "20px 24px", borderBottom: "1px solid #E3EFE7", background: "linear-gradient(180deg, #F3FAF5 0%, #FFFFFF 100%)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: "1 1 320px", minWidth: "0" }}>
              <span style={{ width: "42px", height: "42px", flex: "0 0 42px", borderRadius: "12px", background: "#0E7C3A", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5" /></svg></span>
              <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-.2px", textWrap: "pretty" }}>{"Ask about your "}{S(V.askTitle)}{" data"}</span>
                <span style={{ fontSize: "13.5px", color: "#4C6354", lineHeight: "1.45" }}>
                  {"Answers come only from "}
                  <b style={{ color: "#0F1A14" }}>{S(V.cur?.name)}</b>
                  {" · "}{S(V.cur?.serial)}
                </span>
              </div>
            </div>
            {V.multi && <>
              <div style={{ display: "flex", gap: "4px", background: "#E8F0EB", borderRadius: "12px", padding: "4px", flex: "0 0 auto" }}>
                {L(V.tabs).map((t, i0) => <React.Fragment key={i0}>
                  <span onClick={t?.go} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 18px", borderRadius: "9px", fontSize: "15px", fontWeight: "700", cursor: "pointer", background: `${A(t?.bg)}`, color: `${A(t?.ink)}`, boxShadow: `${A(t?.sh)}`, whiteSpace: "nowrap" }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d={t?.icon} /></svg>
                    {S(t?.label)}
                  </span>
                </React.Fragment>)}
              </div>
            </>}
          </div>
          <div style={{ flex: "1 1 auto", minHeight: "0", overflowY: "auto", padding: "24px 28px", display: "flex", flexDirection: "column", gap: "22px", background: "#FBFDFC" }}>
            {V.empty && <>
              <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", textAlign: "center", padding: "20px" }}>
                <span style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#E7F6EC", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0E7C3A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5" /></svg></span>
                <span style={{ fontSize: "20px", fontWeight: "700", color: "#0F1A14" }}>{"How can I help with your "}{S(V.askTitle)}{" data?"}</span>
                <span style={{ fontSize: "14.5px", color: "#6A746E", maxWidth: "440px", lineHeight: "1.5" }}>{"Ask about highs, lows, averages, totals or counts recorded by "}{S(V.cur?.name)}.</span>
              </div>
            </>}
            {L(V.msgs).map((m, i1) => <React.Fragment key={i1}>
              {m?.isUser && <>
                <div style={{ display: "flex", justifyContent: "flex-end" }}><div style={{ maxWidth: "75%", background: "#E9F1EC", color: "#0F1A14", borderRadius: "18px 18px 4px 18px", padding: "11px 16px", fontSize: "15px", lineHeight: "1.55", whiteSpace: "pre-wrap" }}>{S(m?.text)}</div></div>
              </>}
              {m?.isAi && <>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", maxWidth: "88%" }}>
                  <span style={{ width: "30px", height: "30px", flex: "0 0 30px", borderRadius: "50%", background: "#0E7C3A", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h.01M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5" /></svg></span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#4C6354" }}>AxisStream Insights</span>
                    <span style={{ fontSize: "15px", lineHeight: "1.65", color: `${A(m?.ink)}`, whiteSpace: "pre-wrap" }}>{S(m?.text)}</span>
                  </div>
                </div>
              </>}
            </React.Fragment>)}
          </div>
          <div style={{ padding: "14px 24px 16px", borderTop: "1px solid #EEF3EF", background: "#fff", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", border: "1px solid #CFE0D5", borderRadius: "16px", padding: "8px 8px 8px 18px", background: "#fff", boxShadow: "0 4px 16px rgba(16,24,40,.06)" }}>
              <input value={V.input ?? ""} onChange={V.onInput} onKeyDown={V.onKey} placeholder={V.placeholder} style={{ flex: "1", minWidth: "0", border: "none", outline: "none", background: "transparent", fontSize: "15.5px", color: "#0F1A14", fontFamily: "inherit", padding: "8px 0" }} />
              <span onClick={V.send} title="Send" style={{ width: "40px", height: "40px", flex: "0 0 40px", borderRadius: "12px", background: `${A(V.sendBg)}`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg></span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12.5px", color: "#8A948E" }}>
              <span style={{ flex: "1" }}>Answers use this device's recorded data only.</span>
              {V.hasMsgs && <>
                <span onClick={V.clear} style={{ fontWeight: "600", color: "#0E7C3A", cursor: "pointer" }}>New conversation</span>
              </>}
            </div>
          </div>
        </div>
        <div style={{ flex: "3 1 0", minWidth: "min(100%, 260px)", height: "calc(100vh - 250px)", minHeight: "540px", overflowY: "auto", boxSizing: "border-box", background: "#fff", border: "1px solid #CFE5C8", borderRadius: "18px", boxShadow: "0 1px 2px rgba(16,24,40,.04), 0 6px 18px rgba(16,24,40,.05)", padding: "20px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: "1", minWidth: "180px" }}>
              <span style={{ fontSize: "20px", fontWeight: "800" }}>Key Insights</span>
              <span style={{ fontSize: "13px", color: "#6A746E" }}>{S(V.cur?.period)}</span>
            </div>
            {V.multi && <>
              <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#0E7C3A", background: "#E7F6EC", borderRadius: "20px", padding: "5px 11px", whiteSpace: "nowrap" }}>{S(V.cur?.label)}</span>
            </>}
          </div>
          {L(V.groups).map((g, i2) => <React.Fragment key={i2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "12.5px", fontWeight: "800", letterSpacing: ".6px", textTransform: "uppercase", color: "#26332C" }}>{S(g?.title)}</span>
              {L(g?.cards).map((c, i3) => <React.Fragment key={i3}>
                <div style={{ border: "1px solid #E3EAE5", borderRadius: "10px", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "13px", color: "#6A746E" }}>{S(c?.label)}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "13.5px", color: "#26332C", flexWrap: "wrap" }}>
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke={c?.ink} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 17px" }}><path d={c?.arrow} /></svg>
                    <b style={{ color: `${A(c?.ink)}` }}>{S(c?.pct)}</b>
                    <span>{S(c?.text)}</span>
                  </span>
                  <span style={{ fontSize: "13px", color: "#6A746E" }}>
                    {S(c?.curLabel)}{": "}
                    <b style={{ color: "#0F1A14" }}>{S(c?.cur)}</b>
                  </span>
                  <span style={{ fontSize: "13px", color: "#6A746E" }}>
                    {S(c?.prevLabel)}{": "}
                    <b style={{ color: "#0F1A14" }}>{S(c?.prev)}</b>
                  </span>
                </div>
              </React.Fragment>)}
            </div>
          </React.Fragment>)}
        </div>
      </div>
    </div>
  );
}
