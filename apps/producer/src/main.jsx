import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import './styles/pseudo.css';
import './styles/responsive.css';
import App from './dc/ProducerPortal/ProducerPortal.jsx';

createRoot(document.getElementById('root')).render(<App />);
