import { useState } from 'react'
import { Route, Routes} from "react-router-dom"
import Nav from './components/Nav'
import Footer from './components/Footer'
import Admin from './modules/Admin'
import Home from './modules/Home'
import Create from './modules/Create'
import Cart from './modules/Cart'
import Shop from './modules/Shop'
import Login from './modules/Login'
import Register from './modules/Register'
import Item from './modules/Item'
import { CartProvider } from '../utils/context/useCart'


function App() {
  return (
    <>
    <CartProvider>
      <Nav/>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

        {/* Ruta shop */}
        <Route path="/shop" element={<Shop />}/>
        <Route path="/shop/item/:id" element={<Item/>}/>

        {/* Ruta de administrador*/}
        <Route path="/admin" element={<Admin />}/>
        <Route path='/admin/create' element={<Create/>}/>
      </Routes>
      <Footer/>

    </CartProvider>
    </>
  )
}

export default App
