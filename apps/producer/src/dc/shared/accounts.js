// Default sign-in accounts (prototype only). The same accounts work on the Admin and Producer portals.
// Replace with your real auth provider before going live.
export const DEMO_ACCOUNTS = [
  { label: 'AxisTech Staff', role: 'staff', email: 'staff@axistech.co', pw: 'AxisTech@2026' },
  { label: 'UMP Admin', role: 'ump', email: 'admin@ump.org.au', pw: 'UmpAdmin@2026' },
];
export const findAccount = (email, pw) => DEMO_ACCOUNTS.find(a => a.email.toLowerCase() === String(email || '').trim().toLowerCase() && a.pw === pw);
