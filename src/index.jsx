import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './firebaseApp';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';

let Router = HashRouter;

if (process.env.NODE_ENV === 'development' && process.env.PUBLIC_URL === '') {
  Router = BrowserRouter;
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
