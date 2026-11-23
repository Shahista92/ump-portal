// Helpers used by the generated views.
// S: render a value as text (null/boolean render nothing, React elements pass through).
export const S = v => (v == null || typeof v === 'boolean') ? null : (typeof v === 'object' ? v : String(v));
// L: always iterate an array.
export const L = v => (Array.isArray(v) ? v : []);
// A: value for string interpolation inside attributes/styles.
export const A = v => (v == null ? '' : v);
// C: style value — objects pass through, CSS strings are parsed into a style object.
export const C = v => { if (v == null || v === '') return undefined; if (typeof v === 'object') return v; const o = {}; String(v).split(';').forEach(d => { const i = d.indexOf(':'); if (i < 0) return; const p = d.slice(0, i).trim(); o[p.startsWith('--') ? p : p.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = d.slice(i + 1).trim(); }); return o; };
