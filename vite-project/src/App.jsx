import React from 'react'
import { Routes, Link, Route } from 'react-router-dom'

import Header from './components/Header'
import Photos from './pages/Photos'
import Cart from './pages/Cart'

import './dist/css/styles.css'

function App() {

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path='' element={
          <Photos />
        } />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
