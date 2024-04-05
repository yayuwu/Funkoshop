import React from "react"
import { Image } from "cloudinary-react"
import { Button } from "../Button"
import './index.css'

export default function HomeComponent(props){
    return(
        <section className={props.flex_direction}> {/* change to row_reverse */}
            <div>
                <div  className="description">
                    <div>
                       <h2>{props.title}</h2>
                       <p>{props.description}</p>
                    </div>
                </div>
                <Button href="/" color="dark">VER COLECCIÓN</Button>
            </div>
            <div>
               <Image cloudName="dkfa8olux" publicId={props.img} className="img_home"/>
            </div>
        </section>
    )
}