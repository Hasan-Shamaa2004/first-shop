import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <App />
            <ToastContainer autoClose={2000} />
        </Router>
    </React.StrictMode>
)
