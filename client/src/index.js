/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OpenBoardPage from './pages/OpenBoardPage';
import WriteReviewPage from './pages/WriteReviewPage';
import BookInfoPage from "./pages/BookInfoPage";
import PersonalPage from './pages/PersonalPage';
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/openBoard" element={<OpenBoardPage />} />
      <Route path="/writeReview" element={<WriteReviewPage />} />
      <Route path="/bookInfo" element={<BookInfoPage />} />
      <Route path="/personalPage" element={<PersonalPage />} />
      <Route path='*' element={<NotFoundPage />}/>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
