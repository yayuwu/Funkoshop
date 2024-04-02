import {useState} from 'react'
import axios from 'axios'

export default function Create(){
    const [urlImg, setUrlImg] = useState("")

    const changeUploadFile = (e) => {
        const file = e.target.files[0]
    }

    return(
        <div>
            <input type="file" accept='image/*' />
            {urlImg && 
            (
            <div>
                <img src={urlImg} alt="img" />
                <button>Eliminar Imagen</button>
            </div> 
            ) 
            }
        </div>
    )
}