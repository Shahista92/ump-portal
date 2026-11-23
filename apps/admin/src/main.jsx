import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import './styles/pseudo.css';
import './styles/responsive.css';
import App from './dc/AdminPortal/AdminPortal.jsx';

createRoot(document.getElementById('root')).render(<App />);
