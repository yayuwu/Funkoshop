import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from '../utils/context/useData.jsx';
import { FirebaseProvider } from '../utils/context/useAuth.jsx';
import { auth } from '../utils/firebase.config.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <DataProvider>
          <FirebaseProvider auth={auth}>
            <App/>
          </FirebaseProvider>
        </DataProvider>
      </Router>
    </React.StrictMode>
)
