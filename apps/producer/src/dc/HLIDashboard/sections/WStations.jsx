import React from 'react';
import { S, L, A, C } from '../../runtime.js';


export default function WStations({ V }) {
  return (
    <>
    <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "26px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", padding: "10px 18px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", padding: "6px 12px", borderRadius: "8px", background: "#EAF6F0", color: "#0C6B4C", fontWeight: "600", fontSize: "12.5px" }}>
          <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px" }} fill="#12855F">
            <rect x="3" y="3" width="8" height="8" rx="1.5" />
            <rect x="13" y="3" width="8" height="8" rx="1.5" />
            <rect x="3" y="13" width="8" height="8" rx="1.5" />
            <rect x="13" y="13" width="8" height="8" rx="1.5" />
          </svg>
          Dashboard
          
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", padding: "6px 10px", fontSize: "12.5px", color: "#7C8D88", opacity: ".75" }}>
          <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px" }} fill="none" stroke="#7C8D88" strokeWidth="1.7" strokeLinecap="round">
            <rect x="9.5" y="3" width="5" height="12" rx="2.5" />
            <circle cx="12" cy="18" r="3" />
          </svg>
          Temp · Hum · Pres
          
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", padding: "6px 10px", fontSize: "12.5px", color: "#7C8D88", opacity: ".75" }}>
          <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px" }} fill="none" stroke="#7C8D88" strokeWidth="1.7" strokeLinecap="round">
            <path d="M6 13a4 4 0 0 1 1 -7.9 5 5 0 0 1 9.6 1.4A3.5 3.5 0 0 1 17 13z" />
            <path d="M9 17v2" />
            <path d="M13 17v3" />
          </svg>
          Rainfall
          
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", padding: "6px 10px", fontSize: "12.5px", color: "#7C8D88", opacity: ".75" }}>
          <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px" }} fill="none" stroke="#7C8D88" strokeWidth="1.7" strokeLinecap="round">
            <path d="M3 9h11a3 3 0 1 0 -3 -3" />
            <path d="M3 14h9a2.6 2.6 0 1 1 2.6 2.6" />
          </svg>
          Wind
          
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", padding: "6px 10px", fontSize: "12.5px", color: "#7C8D88", opacity: ".75" }}>
          <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px" }} fill="none" stroke="#7C8D88" strokeWidth="1.7" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2M6 6l1.5 1.5M16.5 16.5L18 18M18 6l-1.5 1.5M7.5 16.5L6 18" />
          </svg>
          Solar Radiation
          
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", padding: "6px 10px", fontSize: "12.5px", color: "#7C8D88", opacity: ".75" }}>
          <svg viewBox="0 0 24 24" style={{ width: "15px", height: "15px" }} fill="none" stroke="#7C8D88" strokeWidth="1.7" strokeLinecap="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5" />
            <circle cx="12" cy="7.8" r="0.9" fill="#7C8D88" />
          </svg>
          Device Info
          
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "14px" }}>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", padding: "15px 16px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ fontSize: "13px", color: "#55665F" }}>
              {"Temperature "}
              <span style={{ color: "#A9B7B2" }}>(°C)</span>
            </div>
            <div style={{ marginLeft: "auto", width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "9px", background: "#FDEEDA", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" style={{ width: "19px", height: "19px" }}>
                <rect x="9.5" y="3" width="5" height="12" rx="2.5" fill="#E8963A" />
                <circle cx="12" cy="18" r="3.6" fill="#E8963A" />
              </svg>
            </div>
          </div>
          <div style={{ fontSize: "23px", fontWeight: "600", marginTop: "6px", color: "#E8963A" }}>{S(V.wx?.temp)}</div>
          <div style={{ fontSize: "12px", color: "#B4C3BE", textAlign: "right", marginTop: "20px" }}>{S(V.wx?.at)}</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", padding: "15px 16px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ fontSize: "13px", color: "#55665F" }}>
              {"Humidity "}
              <span style={{ color: "#A9B7B2" }}>(%)</span>
            </div>
            <div style={{ marginLeft: "auto", width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "9px", background: "#E4F4FB", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" style={{ width: "19px", height: "19px" }}><path d="M12 3 C12 3 6 10 6 14.5 A6 6 0 0 0 18 14.5 C18 10 12 3 12 3 Z" fill="#3FA9D6" /></svg></div>
          </div>
          <div style={{ fontSize: "23px", fontWeight: "600", marginTop: "6px", color: "#29A9C8" }}>{S(V.wx?.rh)}</div>
          <div style={{ fontSize: "12px", color: "#B4C3BE", textAlign: "right", marginTop: "20px" }}>{S(V.wx?.at)}</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", padding: "15px 16px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ fontSize: "13px", color: "#55665F" }}>
              {"Rainfall "}
              <span style={{ color: "#A9B7B2" }}>(mm)</span>
            </div>
            <div style={{ marginLeft: "auto", width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "9px", background: "#E4EFFB", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" style={{ width: "19px", height: "19px" }} fill="none" stroke="#4A86C8" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6.5 14a3.5 3.5 0 0 1 .8 -6.9 4.8 4.8 0 0 1 9.1 1.3A3.3 3.3 0 0 1 17 14z" />
                <path d="M9 17.5v2M13 17.5v3" />
              </svg>
            </div>
          </div>
          <div style={{ fontSize: "23px", fontWeight: "600", marginTop: "6px", color: "#3D8FC6" }}>{S(V.wx?.rain)}</div>
          <div style={{ fontSize: "12px", color: "#B4C3BE", textAlign: "right", marginTop: "20px" }}>Last 24 hrs</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", padding: "15px 16px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ fontSize: "13px", color: "#55665F" }}>
              {"Atm. Pressure "}
              <span style={{ color: "#A9B7B2" }}>(hPa)</span>
            </div>
            <div style={{ marginLeft: "auto", width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "9px", background: "#EFE9FB", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" style={{ width: "19px", height: "19px" }} fill="none" stroke="#7A5BC0" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 12l3.5 -3" />
              </svg>
            </div>
          </div>
          <div style={{ fontSize: "23px", fontWeight: "600", marginTop: "6px", color: "#7A4BC0" }}>{S(V.wx?.pres)}</div>
          <div style={{ fontSize: "12px", color: "#B4C3BE", textAlign: "right", marginTop: "20px" }}>{S(V.wx?.at)}</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", padding: "15px 16px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ fontSize: "13px", color: "#55665F" }}>
              {"MSL Pressure "}
              <span style={{ color: "#A9B7B2" }}>(hPa)</span>
            </div>
            <div style={{ marginLeft: "auto", width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "9px", background: "#EFE9FB", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" style={{ width: "19px", height: "19px" }} fill="none" stroke="#7A5BC0" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 12l-3 -3.5" />
              </svg>
            </div>
          </div>
          <div style={{ fontSize: "23px", fontWeight: "600", marginTop: "6px", color: "#7A4BC0" }}>{S(V.wx?.msl)}</div>
          <div style={{ fontSize: "12px", color: "#B4C3BE", textAlign: "right", marginTop: "20px" }}>{S(V.wx?.at)}</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", padding: "15px 16px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ fontSize: "13px", color: "#55665F" }}>
              {"Delta T "}
              <span style={{ color: "#A9B7B2" }}>(°C)</span>
            </div>
            <div style={{ marginLeft: "auto", width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "9px", background: "#E4F4EC", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" style={{ width: "19px", height: "19px" }} fill="none" stroke="#2C9A64" strokeWidth="1.8" strokeLinejoin="round"><path d="M12 5l7 13H5z" /></svg></div>
          </div>
          <div style={{ fontSize: "23px", fontWeight: "600", marginTop: "6px", color: "#2C7A5E" }}>{S(V.wx?.delta)}</div>
          <div style={{ fontSize: "12px", color: "#B4C3BE", textAlign: "right", marginTop: "20px" }}>{S(V.wx?.at)}</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", padding: "15px 16px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ fontSize: "13px", color: "#55665F" }}>
              {"Dew Point "}
              <span style={{ color: "#A9B7B2" }}>(°C)</span>
            </div>
            <div style={{ marginLeft: "auto", width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "9px", background: "#E4F4FB", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" style={{ width: "19px", height: "19px" }}>
                <path d="M12 3 C12 3 6 10 6 14.5 A6 6 0 0 0 18 14.5 C18 10 12 3 12 3 Z" fill="#3D8FC6" />
                <circle cx="10" cy="14" r="1.4" fill="#fff" />
              </svg>
            </div>
          </div>
          <div style={{ fontSize: "23px", fontWeight: "600", marginTop: "6px", color: "#3D8FC6" }}>{S(V.wx?.dew)}</div>
          <div style={{ fontSize: "12px", color: "#B4C3BE", textAlign: "right", marginTop: "20px" }}>{S(V.wx?.at)}</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", padding: "15px 16px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ fontSize: "13px", color: "#55665F" }}>
              {"Wind Speed "}
              <span style={{ color: "#A9B7B2" }}>(km/h)</span>
            </div>
            <div style={{ marginLeft: "auto", width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "9px", background: "#E7F5EC", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" style={{ width: "19px", height: "19px" }} fill="none" stroke="#2C9A64" strokeWidth="1.8" strokeLinecap="round">
                <path d="M3 8h11a3 3 0 1 0 -3 -3" />
                <path d="M3 12h14" />
                <path d="M3 16h9a2.6 2.6 0 1 1 2.6 2.6" />
              </svg>
            </div>
          </div>
          <div style={{ fontSize: "23px", fontWeight: "600", marginTop: "6px", color: "#2C9A64" }}>{S(V.wx?.wind)}</div>
          <div style={{ fontSize: "12px", color: "#B4C3BE", textAlign: "right", marginTop: "20px" }}>{S(V.wx?.at)}</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", padding: "15px 16px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ fontSize: "13px", color: "#55665F" }}>Wind Direction</div>
            <div style={{ marginLeft: "auto", width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "9px", background: "#FDEEDA", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" style={{ width: "19px", height: "19px" }}><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" fill="#E8963A" /></svg></div>
          </div>
          <div style={{ fontSize: "23px", fontWeight: "600", marginTop: "6px", color: "#E8963A" }}>{S(V.wx?.dir)}</div>
          <div style={{ fontSize: "12px", color: "#B4C3BE", textAlign: "right", marginTop: "20px" }}>{S(V.wx?.at)}</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", padding: "15px 16px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ fontSize: "13px", color: "#55665F" }}>
              {"Wind Gust "}
              <span style={{ color: "#A9B7B2" }}>(km/h)</span>
            </div>
            <div style={{ marginLeft: "auto", width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "9px", background: "#FBE4EA", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" style={{ width: "19px", height: "19px" }} fill="none" stroke="#C0526E" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 9h10a3 3 0 1 0 -3 -3" />
                <path d="M4 14h13" />
                <path d="M4 18h7" />
              </svg>
            </div>
          </div>
          <div style={{ fontSize: "23px", fontWeight: "600", marginTop: "6px", color: "#C0526E" }}>{S(V.wx?.gust)}</div>
          <div style={{ fontSize: "12px", color: "#B4C3BE", textAlign: "right", marginTop: "20px" }}>{S(V.wx?.at)}</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", padding: "15px 16px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ fontSize: "13px", color: "#55665F" }}>
              {"Solar Radiation "}
              <span style={{ color: "#A9B7B2" }}>(W/m²)</span>
            </div>
            <div style={{ marginLeft: "auto", width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "9px", background: "#FDF4D8", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" style={{ width: "19px", height: "19px" }} fill="none" stroke="#D0A21A" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" fill="#D0A21A" stroke="none" />
                <path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21M5.8 5.8l1.7 1.7M16.5 16.5l1.7 1.7M18.2 5.8l-1.7 1.7M7.5 16.5l-1.7 1.7" />
              </svg>
            </div>
          </div>
          <div style={{ fontSize: "23px", fontWeight: "600", marginTop: "6px", color: "#D0A21A" }}>{S(V.wx?.solar)}</div>
          <div style={{ fontSize: "12px", color: "#B4C3BE", textAlign: "right", marginTop: "20px" }}>{S(V.wx?.at)}</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "10px", padding: "15px 16px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ fontSize: "13px", color: "#55665F" }}>UV Index</div>
            <div style={{ marginLeft: "auto", width: "34px", height: "34px", flex: "0 0 34px", borderRadius: "9px", background: "#F3E9FB", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" style={{ width: "19px", height: "19px" }} fill="none" stroke="#8B4FC8" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="13" r="3.6" fill="#8B4FC8" stroke="none" />
                <path d="M12 4v2.2M4.8 6.4l1.6 1.6M19.2 6.4l-1.6 1.6M3 13h2.2M18.8 13H21" />
              </svg>
            </div>
          </div>
          <div style={{ fontSize: "23px", fontWeight: "600", marginTop: "6px", color: "#7A4BC0" }}>{S(V.wx?.uv)}</div>
          <div style={{ fontSize: "12px", color: "#B4C3BE", textAlign: "right", marginTop: "20px" }}>{S(V.wx?.at)}</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ marginLeft: "auto", fontSize: "13px", color: "#7C8D88" }}>Show:</div>
        <div style={{ display: "flex", gap: "4px", background: "#fff", border: "1px solid #E4EAE8", borderRadius: "8px", padding: "3px" }}>
          {L(V.showTabs).map((t, i22) => <React.Fragment key={i22}>
            <div data-act={t?.act} style={{ padding: "7px 15px", borderRadius: "6px", fontSize: "13px", cursor: "pointer", background: `${A(t?.bg)}`, color: `${A(t?.c)}`, fontWeight: `${A(t?.fw)}` }}>{S(t?.label)}</div>
          </React.Fragment>)}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "20px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#5A4A2E", marginBottom: "16px" }}>Rainfall (mm)</div>
          <div style={{ display: "flex", gap: "9px" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "190px", fontSize: "12.5px", color: "#93A5A0", textAlign: "right", width: "22px" }}>
              <span>20</span>
              <span>15</span>
              <span>10</span>
              <span>5</span>
              <span>0</span>
            </div>
            <div style={{ flex: "1 1 auto" }}>
              <svg viewBox="0 0 1000 190" preserveAspectRatio="none" style={{ width: "100%", height: "190px", display: "block" }}>
                <line x1="0" y1="47.5" x2="1000" y2="47.5" stroke="#EDF2F0" strokeDasharray="3 3" />
                <line x1="0" y1="95" x2="1000" y2="95" stroke="#EDF2F0" strokeDasharray="3 3" />
                <line x1="0" y1="142.5" x2="1000" y2="142.5" stroke="#EDF2F0" strokeDasharray="3 3" />
                <line x1="0" y1="189" x2="1000" y2="189" stroke="#DDE4E2" />
                {L(V.rainBars).map((b, i23) => <React.Fragment key={i23}>
                  <rect x={b?.x} y={b?.y} width="74" height={b?.h} fill="#54C2EA" rx="2" />
                </React.Fragment>)}
              </svg>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#93A5A0", marginTop: "8px" }}>
                {L(V.wxLabels).map((l, i24) => <React.Fragment key={i24}>
                  <span>{S(l)}</span>
                </React.Fragment>)}
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "20px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#5A4A2E", marginBottom: "16px" }}>Temperature Trends (°C)</div>
          <div style={{ display: "flex", gap: "9px" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "190px", fontSize: "12.5px", color: "#93A5A0", textAlign: "right", width: "22px" }}>
              <span>40</span>
              <span>30</span>
              <span>20</span>
              <span>10</span>
              <span>0</span>
            </div>
            <div style={{ flex: "1 1 auto" }}>
              <svg viewBox="0 0 1000 190" preserveAspectRatio="none" style={{ width: "100%", height: "190px", display: "block" }}>
                <line x1="0" y1="47.5" x2="1000" y2="47.5" stroke="#EDF2F0" strokeDasharray="3 3" />
                <line x1="0" y1="95" x2="1000" y2="95" stroke="#EDF2F0" strokeDasharray="3 3" />
                <line x1="0" y1="142.5" x2="1000" y2="142.5" stroke="#EDF2F0" strokeDasharray="3 3" />
                <line x1="0" y1="189" x2="1000" y2="189" stroke="#DDE4E2" />
                {L(V.trendBars).map((b, i25) => <React.Fragment key={i25}>
                  <rect x={b?.x} y={b?.minY} width="74" height={b?.minH} fill="#54C2EA" rx="2" />
                </React.Fragment>)}
                {L(V.trendBars).map((b, i26) => <React.Fragment key={i26}>
                  <rect x={b?.x} y={b?.maxY} width="74" height={b?.maxH} fill="#F4B96A" rx="2" />
                </React.Fragment>)}
                <polyline points={V.trendLine} fill="none" stroke="#4CB07C" strokeWidth="2" />
                {L(V.trendDots).map((d, i27) => <React.Fragment key={i27}>
                  <circle cx={d?.x} cy={d?.y} r="3.4" fill="#fff" stroke="#4CB07C" strokeWidth="1.8" />
                </React.Fragment>)}
              </svg>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#93A5A0", marginTop: "8px" }}>
                {L(V.weekLabels).map((l, i28) => <React.Fragment key={i28}>
                  <span>{S(l)}</span>
                </React.Fragment>)}
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: "22px", fontSize: "12px", color: "#6E827C", marginTop: "12px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "10px", height: "10px", background: "#54C2EA", borderRadius: "2px" }} />
                  Min °C
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "10px", height: "10px", background: "#F4B96A", borderRadius: "2px" }} />
                  Max °C
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "16px", height: "2px", background: "#4CB07C" }} />
                  Avg °C
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "20px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#5A4A2E", marginBottom: "10px" }}>Wind Direction Distribution</div>
          <div style={{ position: "relative", width: "400px", height: "330px", margin: "0 auto" }}>
            <svg viewBox="0 0 400 330" style={{ width: "400px", height: "330px", display: "block" }}>
              <circle cx="200" cy="165" r="120" fill="none" stroke="#EDF2F0" />
              <circle cx="200" cy="165" r="90" fill="none" stroke="#EDF2F0" />
              <circle cx="200" cy="165" r="60" fill="none" stroke="#EDF2F0" />
              <circle cx="200" cy="165" r="30" fill="none" stroke="#EDF2F0" />
              {L(V.rose?.spokes).map((s, i29) => <React.Fragment key={i29}>
                <line x1="200" y1="165" x2={s?.x} y2={s?.y} stroke="#F1F5F3" />
              </React.Fragment>)}
              <polygon points={V.rose?.poly} fill="rgba(43,180,124,.30)" stroke="#4CB07C" strokeWidth="1.6" />
            </svg>
            {L(V.rose?.labels).map((l, i30) => <React.Fragment key={i30}>
              <div style={{ position: "absolute", left: `${A(l?.lx)}`, top: `${A(l?.ly)}`, transform: "translate(-50%, -50%)", fontSize: "12px", color: "#7C8D88" }}>{S(l?.t)}</div>
            </React.Fragment>)}
          </div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #E4EAE8", borderRadius: "12px", padding: "20px", boxShadow: "0 1px 2px rgba(16,40,34,.04)" }}>
          <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#5A4A2E", marginBottom: "16px" }}>Humidity (%)</div>
          <div style={{ display: "flex", gap: "9px" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "300px", fontSize: "12.5px", color: "#93A5A0", textAlign: "right", width: "24px" }}>
              <span>100</span>
              <span>90</span>
              <span>80</span>
              <span>70</span>
              <span>60</span>
              <span>50</span>
            </div>
            <div style={{ flex: "1 1 auto" }}>
              <svg viewBox="0 0 1000 300" preserveAspectRatio="none" style={{ width: "100%", height: "300px", display: "block" }}>
                <line x1="0" y1="60" x2="1000" y2="60" stroke="#EDF2F0" strokeDasharray="3 3" />
                <line x1="0" y1="120" x2="1000" y2="120" stroke="#EDF2F0" strokeDasharray="3 3" />
                <line x1="0" y1="180" x2="1000" y2="180" stroke="#EDF2F0" strokeDasharray="3 3" />
                <line x1="0" y1="240" x2="1000" y2="240" stroke="#EDF2F0" strokeDasharray="3 3" />
                <polyline points={V.humid?.area} fill="rgba(84,194,234,.32)" stroke="none" />
                <polyline points={V.humid?.line} fill="none" stroke="#54C2EA" strokeWidth="1.6" />
              </svg>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#93A5A0", marginTop: "8px" }}>
                {L(V.weekLabels).map((l, i31) => <React.Fragment key={i31}>
                  <span>{S(l)}</span>
                </React.Fragment>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
