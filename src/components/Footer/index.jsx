import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from '../../themes/stitches.config'
import { Image } from 'cloudinary-react'
import './index.css'

const StyledFooter = styled('footer', {
  backgroundColor: '$gray300',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 80px'
})

const FooterGlobal = () =>{
  return(
    <StyledFooter>
      <div id='footer'>
         <div id='nav_links'>
           <NavLink to="/shop" className="nav_link">SHOP</NavLink>
           <NavLink to="/login" className="nav_link">INGRESAR</NavLink>
           <NavLink to="/register" className="nav_link">REGISTRARSE</NavLink>
           <NavLink to="" className="nav_link">CONTACTO</NavLink>
         </div>
         <div>
           <Image cloudName="dkfa8olux" publicId="https://res.cloudinary.com/dkfa8olux/image/upload/v1712093251/funkoshop_img/funkos_logos/Group_ttcf5t.svg"/>
         </div>
      </div>
         <p>All rights reserved 2023 - Funkoshop &copy;</p>
    </StyledFooter>
  )
}

const FooterAdmin = () =>{
  return(
    <StyledFooter>
      <div id='footer'>
         <div id='nav_links'>
            <NavLink to="/shop" className="nav_link">SHOP</NavLink>
            <NavLink to="" className="nav_link">CONTACTO</NavLink>
         </div>
         <div>
            <Image cloudName="dkfa8olux" publicId="https://res.cloudinary.com/dkfa8olux/image/upload/v1712093251/funkoshop_img/funkos_logos/Group_ttcf5t.svg"/>
         </div>
      </div>
      <p>All rights reserved 2023 - Funkoshop &copy;</p>
    </StyledFooter>
  )
}

export default function Footer(){
  const [isAdmin, setIsAdmin] = useState(false)

  return(
    <div>
      {isAdmin ? <FooterAdmin/> : <FooterGlobal/>}
    </div>
  )
}