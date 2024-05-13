import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom"
import { styled } from '../../themes/stitches.config'
import { Image } from 'cloudinary-react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useCart } from '../../../utils/context/useCart';
import './index.css'

const StyledNav = styled('nav', {
  backgroundColor: '#30343F',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 40px',
})

const NavGlobal = () =>{
  const {
    cartItems, 
    getTotalQuantity
  } = useCart()

  return(
    <StyledNav>
      <div>
        <NavLink to="/">
          <Image cloudName="dkfa8olux" publicId="https://res.cloudinary.com/dkfa8olux/image/upload/v1712093255/funkoshop_img/funkos_logos/dark_iku3ch.svg"/>
        </NavLink>
      </div>
      <div style={{display: 'flex', alignItems:'center', alignContent:'center'}}>
         <NavLink to="/shop" className="nav_link">SHOP</NavLink>
         <NavLink to="/" className="nav_link">CONTACTO</NavLink>
         <NavLink to="/login" className="nav_link">LOGIN</NavLink>
         <NavLink to="/cart" className="nav_link" id='cart'>
         <Badge badgeContent={getTotalQuantity()} sx={{ '& .MuiBadge-badge': { backgroundColor: '#F24E1E' } }}>
            <ShoppingCartIcon sx={{marginBottom:'6px'}}/>
          </Badge>
         </NavLink>
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