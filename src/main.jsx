import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'
import MovieSelection from './pages/MovieSelection'
import Browse from './pages/Browse'
import Notfound from './pages/404'
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/info' element={<Info/>} />
        <Route path='/selection' element={<MovieSelection/>} />
        <Route path='/browse' element={<Browse/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>//implies lot of rules and provides bugs
)
