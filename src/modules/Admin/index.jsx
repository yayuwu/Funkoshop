import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Admin(){
  return(
    <>
    <div>Admin</div>
    <NavLink to="/admin/create">Create</NavLink>
    </>
  )
}