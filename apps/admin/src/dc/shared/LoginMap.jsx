import React from 'react';

// Static satellite view of the Upper Murray region for the sign-in screen (non-interactive, no animation).
// Mapbox satellite imagery (Esri World Imagery underneath as fallback) with the region boundary, zones and town labels.
const TOKEN = 'pk.eyJ1Ijoic29mdHdhcmUtYXhpc3RlY2giLCJhIjoiY2tnZzk1bzZnMW5zZzJxcW9nZTg4cDZxaSJ9.rK4H82M_mSth54jOMVhGAA';
const ESRI = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const MAPBOX = 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/512/{z}/{x}/{y}@2x?access_token=' + TOKEN;

export default class LoginMap extends React.Component {
  ref = React.createRef();
  componentDidMount() { this.init(); }
  componentWillUnmount() { this.dead = true; cancelAnimationFrame(this.raf); if (this.map) { try { this.map.remove(); } catch (e) {} } }
  init() {
    if (this.dead) return;
    const gl = window.maplibregl;
    if (!gl || !this.ref.current) { setTimeout(() => this.init(), 120); return; }
    const map = this.map = new gl.Map({
      container: this.ref.current, interactive: false, attributionControl: false,
      center: [147.75, -36.1], zoom: 8.4, fadeDuration: 0,
      style: { version: 8, sources: {
        esri: { type: 'raster', tiles: [ESRI], tileSize: 256, maxzoom: 18, attribution: 'Imagery \u00a9 Esri' },
        mb: { type: 'raster', tiles: [MAPBOX], tileSize: 512, maxzoom: 19, attribution: '\u00a9 Mapbox \u00a9 OpenStreetMap' } },
        layers: [{ id: 'esri', type: 'raster', source: 'esri' }, { id: 'mb', type: 'raster', source: 'mb', paint: { 'raster-saturation': -0.08, 'raster-contrast': 0.06 } }] },
    });
    map.on('error', () => {});
    map.on('load', () => fetch('assets/upper-murray-map.json').then(r => r.json()).then(fc => {
      if (this.dead) return;
      map.addSource('um', { type: 'geojson', data: fc });
      map.addLayer({ id: 'z-fill', type: 'fill', source: 'um', filter: ['==', ['get', 'k'], 'sub'], paint: { 'fill-color': ['coalesce', ['get', 'COLOR'], '#22c55e'], 'fill-opacity': 0.14 } });
      map.addLayer({ id: 'z-line', type: 'line', source: 'um', filter: ['==', ['get', 'k'], 'sub'], paint: { 'line-color': 'rgba(255,255,255,.55)', 'line-width': 1, 'line-dasharray': [3, 2] } });
      map.addLayer({ id: 'b-glow', type: 'line', source: 'um', filter: ['==', ['get', 'k'], 'bnd'], paint: { 'line-color': '#fcd27a', 'line-width': 8, 'line-blur': 6, 'line-opacity': 0.45 }, layout: { 'line-join': 'round' } });
      map.addLayer({ id: 'b-line', type: 'line', source: 'um', filter: ['==', ['get', 'k'], 'bnd'], paint: { 'line-color': '#fde3a7', 'line-width': 2 }, layout: { 'line-join': 'round' } });
      if (fc.bbox) map.fitBounds([[fc.bbox[0], fc.bbox[1]], [fc.bbox[2], fc.bbox[3]]], { padding: { top: 120, bottom: 130, left: 40, right: 40 }, duration: 0 });
    }).catch(() => {}));
  }
  render() { return <div ref={this.ref} style={{ position: 'absolute', inset: '0' }} />; }
}
