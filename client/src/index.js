/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OpenBoard from './OpenBoard';
import WriteReview from './WriteReview';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/openBoard" element={<OpenBoard />} />
      <Route path="/writeReview" element={<WriteReview />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
