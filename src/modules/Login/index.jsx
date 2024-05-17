import { Button } from "../../components/Button"
import { useFirebase } from '../../../utils/context/useAuth'
import { Alert } from "@mui/material"
import { useNavigate } from "react-router-dom"
import './index.css'

export default function Login(){
    const { signInWithEmailAndPassword } = useFirebase()
    const navigate = useNavigate()
    
    const handleLogin =async (email,password) =>{
        try {
            const userCredential = await signInWithEmailAndPassword(email, password)
            const user = userCredential.user
            navigate('/admin')
            console.log('Usuario autenticado: ', user)
        } catch (error) {
            console.log('Error al iniciar sesión: ', error)
        }
    }
    return (
        <div>
          <div id='login'>
            <h1>INGRESAR A MI CUENTA</h1> 
            <form onSubmit={handleLogin}>
                <div className='labels'>
                    <div>
                        <label htmlFor="">Email:</label>
                        <label htmlFor="">Contraseña:</label>
                    </div>
                    <div>
                        <input type="email" />
                        <input type="password" />
                    </div>
                </div>
                <div style={{display:'flex', marginTop:'20px', flexDirection: 'column', alignItems: 'center'}}>
                    <Button color="red" type="submit">Ingresar</Button>
                    <div style={{display:'flex', alignItems:'center', padding:'10px'}}>
                       <input type="checkbox" name="" id="" style={{marginRight:'5px'}}/>
                       <p>Recordarme</p>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}