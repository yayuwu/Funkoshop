import React from 'react'
import { Button } from '../../components/Button'
import './index.css'

export default function Register(){
    return(
        <div id='register'>
            <h1>CREA TU CUENTA</h1>
            <h2>Completa el formulario para ser parte del mundo de los Funkos</h2>
            <form action="">
                <div className='labels'>
                    <div>
                        <label htmlFor="">Nombre:</label>
                        <label htmlFor="">Apellido:</label>
                        <label htmlFor="">Email:</label>
                        <label htmlFor="">Contraseña:</label>
                        <label htmlFor="">Repita Contraseña:</label>
                    </div>
                    <div>
                        <input type="text" />
                        <input type="text" />
                        <input type="email" />
                        <input type="password" />
                        <input type="password" />
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'space-between', marginTop:'10px'}}>
                    <Button color="red">Register</Button>
                    <div style={{display:'flex', alignItems:'center', padding:'10px'}}>
                       <input type="checkbox" name="" id="" style={{marginRight:'5px'}}/>
                       <p>Acepto <a href="" style={{textDecoration:'none', color:'blue'}}>Términos y Condiciones</a></p>
                    </div>
                </div>
            </form>
        </div>
    )
}