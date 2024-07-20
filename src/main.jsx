import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomeContextProvider from './Components/HomeContext/HomeContext.jsx'
import {BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  //now we will wrap our App inside the homecontextprovider and router
  <HomeContextProvider>
    <Router>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
    </Router>
  </HomeContextProvider>
)
