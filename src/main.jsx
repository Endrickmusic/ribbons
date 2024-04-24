import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Overlay from './Overlay.jsx'
import './index.css'
import NavBar from './NavBar.jsx'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Eisenacher from './Eisenacher.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>

    <Router>
        <App />
        <NavBar />
        <Routes>
              <Route path="/" element={<Overlay />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
        </Routes>

        <Routes>
           <Route path="/eisenacher" element={<Eisenacher />} />
        </Routes>
    </Router>

    </>
  </React.StrictMode>,
)
