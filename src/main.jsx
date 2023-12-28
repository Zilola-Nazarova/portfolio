import React from 'react';
import ReactDOM from 'react-dom/client';

import Portfolio from './components/Portfolio';

import './index.css';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
);
