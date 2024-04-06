import React from "react"
import { Image } from "cloudinary-react"
import {Button} from '../Button'
import { styled } from "../../themes/stitches.config"
import './index.css'

const StyledP = styled('p',{
    color : '$blue200',
    fontWeight: 600,
})

export default function CardItem(props){
    return(
        <div className="card_item">
            <a href={props.url_id} onClick={props.onClick}>
              <Image cloudName="dkfa8olux" publicId={props.img} className="img_card"/>
            </a>
           <p>{props.category}</p>
           <h4>{props.title}</h4>
           <p>$ {props.price}</p>
           <StyledP>3 CUOTAS SIN INTERÉS</StyledP>
           <Button color="red" className="new">NUEVO</Button>
        </div>
    )
}