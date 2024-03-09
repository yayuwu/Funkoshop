import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'

const NavGlobal = () =>{
  return(
    <nav>
      <a href="">Shop</a>
      <a href="">Contacto</a>
      <a href="">Login</a>
      <a href="">Carrito</a>
    </nav>
  )
}

const NavAdmin = () =>{
  return(
    <nav>
      <a href="">Ver tienda</a>
      <a href="">Admin</a>
      <a href="">Salir</a>
    </nav>
  )
}

export default function Nav({isAdmin}){

  const isAdminRoute = () => {
    return location.pathname.startsWith('/admin')
  }
  return(
    <div>
      {isAdminRoute() ? <NavAdmin /> :  <NavGlobal />}
    </div>
  )
}