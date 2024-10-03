import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
//import Pr05 from './practicas/pr05/pr05';
import RelojesMundiales from './practicas/pr06/Pr06';
import MostrarTabla from './practicas/pr09/pr09';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    //<RelojesMundiales />
    <MostrarTabla />
  //<Pr05 num1=2 num2=3 />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
