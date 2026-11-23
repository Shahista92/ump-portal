# UMP+ Portals — React (Vite) source

Two independent React apps, one per Netlify site:

| App | Folder | Domain | Local dev |
|---|---|---|---|
| Producer Portal | `apps/producer` | ump.axisstream.co | http://localhost:5173 |
| Admin Portal | `apps/admin` | ump.admin-axisstream.co | http://localhost:5174 |

Each app has its own `package.json`, `vite.config.js` and `netlify.toml`, so they build and deploy separately.

## Run locally

```bash
cd apps/producer   # or apps/admin
npm install
npm run dev
```

Requires Node 18+ (Netlify is pinned to Node 20 in `netlify.toml`).

## Deploy to Netlify (repeat for each app)

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. Netlify → **Add new site → Import an existing project** → pick the repo.
3. Set **Base directory** to `apps/producer` (or `apps/admin`).
   Build command `npm run build` and publish directory `dist` are read from `netlify.toml`.
4. Deploy, then **Domain management → Add a domain** with the domain from the table above.

Manual alternative: run `npm run build` in the app folder and drag its `dist/` folder onto Netlify's deploy page.

## Sign-in

Both portals open on a sign-in page (prototype only, no backend). Two default accounts work on both portals (defined in `src/dc/shared/accounts.js`):

- **AxisTech Staff** — `staff@axistech.co` / `AxisTech@2026`
- **UMP Admin** — `admin@ump.org.au` / `UmpAdmin@2026`

"Remember me" keeps the session in localStorage, otherwise it lasts for the browser tab. Sign out is in the profile menu. Replace `accounts.js` and `loginVals()` / `finish()` in `AdminPortal.jsx` and `ProducerPortal.jsx` with your real auth provider.

The sign-in map (`src/dc/shared/LoginMap.jsx`) uses Mapbox satellite imagery with the Upper Murray boundary overlaid. The `?` button in each top bar opens the Help Center (`src/dc/shared/HelpCenter.jsx`) with guides and FAQs per portal.

## How cross-portal links work

Links between portals (e.g. "Open Admin Portal", "Launch" to a farm's Producer Portal) go to the live domains when the site is served from `*.axisstream.co` or `*.netlify.app`, and to the localhost ports above during local development. The logic lives near the top of each portal's main component (`PORTAL_URL` in Admin/Internal, `adminUrl` in Producer).

## Project structure (per app)

```
index.html              head tags: fonts, MapLibre/Mapbox GL, ApexCharts (CDN)
public/                 static images, logos, map GeoJSON, alert-form.js
src/main.jsx            React entry
src/styles/global.css   global rules, keyframes, map control overrides
src/styles/pseudo.css   hover / focus / active styles (class per state)
src/dc/runtime.js       tiny view helpers (S, L, A, C)
src/dc/<Component>/
  <Component>.jsx       class component: state, data, handlers (renderVals) + render()
  View.jsx              JSX markup — receives V = { ...props, ...renderVals() }
  sections/*.jsx        large page sections split out of View.jsx
```

Pattern: each component's logic class computes everything the UI needs in `renderVals()`; `View.jsx` and `sections/` are pure JSX reading from `V`. To change a screen, edit the matching section file; to change data or behaviour, edit `renderVals()` / handlers in `<Component>.jsx`.

Producer also includes the embedded `DeviceDashboard`, `HLIDashboard`, `DeviceHeader`, `DeviceInfoPanel`, `KeyInsightsPanel` and `AlertsPanel` components.

## Responsive layout

`src/styles/responsive.css` (imported in `main.jsx`) adapts both portals to every screen size:

- **Large (1600px+)** — wider page gutters.
- **Laptop (1024–1599px)** — the desktop layout as designed.
- **Tablet (768–1023px)** — the menu starts as an icon rail; 4–6 column grids drop to 2–3; tables scroll sideways.
- **Phone (<768px)** — the menu becomes a slide-in drawer (☰ opens it; tapping an item or the backdrop closes it); top bar keeps icons only; grids stack; modals and the Help Center fill the screen; the sign-in map shrinks above the form; inputs use 16px text so iOS doesn't zoom.

Layout hooks are `data-r="…"` attributes on the shell, sidebar, header, main area, sign-in panels and Help Center.

## Notes

- All data is sample data defined in the component files (`FARMS`, `USERS`, `DEVICES`, etc.). Replace with API calls when a backend is available.
- The Mapbox token is kept as in the designs (`MAPBOX_TOKEN` constant). Restrict it to your domains in the Mapbox dashboard before going live.
- `alert-form.js` (shared Create Device Alert logic) is loaded as a global script from `public/`.
- Inline styles are kept from the designs so screens match pixel-for-pixel; moving to CSS modules or Tailwind can be done section by section.
