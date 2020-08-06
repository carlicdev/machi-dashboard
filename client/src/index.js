import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import MachiContextProvider from './context/context';



ReactDOM.render(
  <MachiContextProvider>
    <Router>
      <App />
    </Router>
  </MachiContextProvider>,
  document.getElementById('root')
);

