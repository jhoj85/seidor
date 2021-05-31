import React from 'react';
import Image from './Image';
import {main} from './../info/1/menu.json'

 const Card = ({select})=> {

   



    return (
        <div className="grid">
            <div className="grid-item">
            {
                main.map((dato) =>{
                    if (dato.title === select){
                        let datos = dato.below
                        return(
                            datos.map((card)=>(
                             <div className="card" key={card.id}>
                                
                               <div className="card-content" >
                               <Image  img={card.field_image}/> 
                                   <h1 className="card-header" >{card.title} </h1>
                               </div>
                                </div>
                            ))   
                        )
                    }
    
                })
            }    
        </div>
        </div>
    )
}
export default Card;
