import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Store from './components/Store.js'
import About from './components/About.js'
import Navbar from './components/Navbar.js'
import ShoppingCartProvider from './context/ShoppingCartContext.js'

const App = () => {
  return (
    
    <ShoppingCartProvider>
      <Navbar />
     <Container className='mb-4'>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/store' element={<Store />} />
  <Route path='/about' element={<About />} />
</Routes>
    </Container>
    </ShoppingCartProvider>
    
  )
}

export default App