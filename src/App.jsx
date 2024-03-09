import { useState } from 'react'
import { Route, Router, Routes} from "react-router-dom";
import Nav from './components/Nav/Nav'
import Admin from './modules/Admin/Admin'
import Inicio from './modules/Inicio/Inicio'


function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <>
      <Nav isAdmin={isAdmin}/>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Inicio />}></Route>

        {/* Ruta de administrador*/}
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </>
  )
}

export default App
