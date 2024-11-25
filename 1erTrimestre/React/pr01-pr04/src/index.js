import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals.js';
//import App from './practicas/pr01.js';
//import ComponenteApp from './practicas/pr03.js';
import ComponenteApp from './practicas/pr04.js';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //<React.StrictMode>
  //</React.StrictMode>
  
  //pr01
  //<App />

  //pr02
  //<ComponenteApp />

  //pr03
  //<ComponenteApp />

  //pr04
  <ComponenteApp num1={2} num2={3} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
