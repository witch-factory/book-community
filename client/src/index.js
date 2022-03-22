/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OpenBoardPage from './OpenBoardPage';
import WriteReviewPage from './WriteReviewPage';
import BookInfoPage from "./BookInfoPage";
import PersonalPage from './PersonalPage';
import NotFoundPage from "./NotFoundPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/openBoard" element={<OpenBoardPage />} />
      <Route path="/writeReview" element={<WriteReviewPage />} />
      <Route path="/bookInfo" element={<BookInfoPage />} />
      <Route path="/personalPage" element={<PersonalPage />} />
      <Route path='*' element={<NotFoundPage />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
