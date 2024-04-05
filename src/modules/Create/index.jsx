import {useState} from 'react'
import axios from 'axios'

export default function Create(){
    const [urlImg, setUrlImg] = useState("")

    const changeUploadFile = (e) => {
        const file = e.target.files[0]
        console.log(e)
    }

    return(
        <div>
            <input type="file" accept='image/*' onChange={changeUploadFile}/>
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