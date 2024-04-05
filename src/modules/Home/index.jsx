import React from 'react'
import HomeComponent from '../../components/HomeComponents'

//Rutas: /, /shop, /shop/item/id, /carrito, /login, /register, /admin, /admin/create, /admin/edit

export default function Inicio(){
  return(
    <>
      <HomeComponent title="STAR WARS & THE MANDALORIAN" description="Disfruta de una saga que sigue agregando personajes a su colección." img="https://res.cloudinary.com/dkfa8olux/image/upload/v1712093074/funkoshop_img/funkos_items/baby-yoda-1_1_zfbusv.svg"/>
      <HomeComponent title="POKEMON INDIGO" description="Atrapa todos los que puedas y disfruta de una colección llena de amigos." img="https://res.cloudinary.com/dkfa8olux/image/upload/v1712093067/funkoshop_img/funkos_items/vulpix-1_1_zwcfti.svg" flex_direction="row_reverse"/>
      <HomeComponent title="HARRY POTTER" description="Revive los recuerdos de una saga llena de magia y encanto." img="https://res.cloudinary.com/dkfa8olux/image/upload/v1712093110/funkoshop_img/funkos_items/snape-patronus-1_1_novnz0.svg"/>
    </>
  )
}