import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<App />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);

