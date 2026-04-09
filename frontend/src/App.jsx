import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'

import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import LoginPopup from './components/LoginPopup/LoginPopup'
<<<<<<< HEAD
import Verify from './pages/Verify/Verify'
=======
>>>>>>> 75a5fe24430f34f5b77ac6c05b799ed437295f27


const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
  <>
  {showLogin ? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/order' element = {<PlaceOrder/>}/>
<<<<<<< HEAD
        <Route path='/verify' element={<Verify/>}/>
=======

>>>>>>> 75a5fe24430f34f5b77ac6c05b799ed437295f27
      </Routes>
    </div>
   <Footer/>
   </>
  )
}

export default App