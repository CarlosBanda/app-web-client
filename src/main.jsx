import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
// import { HomePage } from './pages/HomePage.jsx'
import { MainApp } from './MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>,
)
