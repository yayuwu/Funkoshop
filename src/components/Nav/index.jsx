import React, {useState} from 'react'
import { NavLink } from "react-router-dom"
import { styled } from '../../themes/stitches.config'
import { Image } from 'cloudinary-react'
import './index.css'

const StyledNav = styled('nav', {
  backgroundColor: '#30343F',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 40px',
})

const NavGlobal = () =>{
  return(
    <StyledNav>
      <div>
        <NavLink to="/">
          <Image cloudName="dkfa8olux" publicId="https://res.cloudinary.com/dkfa8olux/image/upload/v1712093255/funkoshop_img/funkos_logos/dark_iku3ch.svg"/>
        </NavLink>
      </div>
      <div>
         <NavLink to="/shop" className="nav_link">SHOP</NavLink>
         <NavLink to="/" className="nav_link">CONTACTO</NavLink>
         <NavLink to="/login" className="nav_link">LOGIN</NavLink>
         <NavLink to="/cart" className="nav_link" id='cart'><Image cloudName="dkfa8olux" publicId="https://res.cloudinary.com/dkfa8olux/image/upload/v1712093520/funkoshop_img/funkos_icons/cart_icon_scnl13.svg"/></NavLink>
      </div>
    </StyledNav>
  )
}

const NavAdmin = () =>{
  return(
    <StyledNav>
      <div>
         <Image cloudName="dkfa8olux" publicId="https://res.cloudinary.com/dkfa8olux/image/upload/v1712093255/funkoshop_img/funkos_logos/dark_iku3ch.svg"/>
      </div>
      <div>
         <NavLink to="/" className="nav_link">VER TIENDA</NavLink>
         <NavLink to="/admin" className="nav_link">ADMIN</NavLink>
         <NavLink to="/" className="nav_link">SALIR</NavLink>
      </div>
    </StyledNav>
  )
}


export default function Nav(){
  const [isAdmin, setIsAdmin] = useState(false)

  return(
    <div>
      {isAdmin ? <NavAdmin /> :  <NavGlobal />}
    </div>
  )
}