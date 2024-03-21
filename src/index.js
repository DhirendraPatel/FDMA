import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeContextProvider } from "./Admin/context/darkModeContext.js";
import { RecoilRoot } from 'recoil'; // Import RecoilRoot

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
    <BrowserRouter>
    <RecoilRoot> 
          <App />
        </RecoilRoot>    
        </BrowserRouter>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
