import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import  AuthContextProvider from "./Context/AuthContextProvider"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  <BrowserRouter>
<AuthContextProvider>
    <App />
  </AuthContextProvider>
  </BrowserRouter>
  </ChakraProvider>
);

reportWebVitals();
