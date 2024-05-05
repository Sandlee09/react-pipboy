import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/sections';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Router />
      </Suspense>
    </BrowserRouter>
)
