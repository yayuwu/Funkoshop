import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from '../utils/context/useData.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <DataProvider>
          <App/>
        </DataProvider>
      </Router>
    </React.StrictMode>
)
