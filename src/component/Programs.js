import React, {useState, useEffect} from 'react'
import Image from './Image';
import {main} from './../info/1/menu.json'

export default function Programs({select}) {
    const [option, setOption]=useState('View all the programs')
    const [dato, setDato]=useState([])
    

useEffect(()=>{
    getData();
},[dato,option])

const getData = ()=>{
    let arr =[];
     let arr2 =[];
    main.map((element)=>{
        if (element.title === 'Programs'){
           return   arr = element.below    
        }
        arr.map((datos)=> {
            if (datos.title === option){
                return    arr2 = datos.below
            }
        })
         setDato(arr2)
    })
   
}

const handleSelect = (callBack)=>{
    console.log(callBack)
    setOption(callBack)

}
    return (
        <div>

            <div className="grid">
            <div className="grid-item">
            {
                main.map((dato) =>{
                    if (dato.title === 'Programs'){
                        let datos = dato.below
                        return(
                            datos.map((card)=>(
                             <div className="card" key={card.id}>
                               <div onClick={()=>handleSelect(card.title)} className="card-content" >
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

        <div className="grid">
            <div className="grid-item">
           {
               dato.map((element)=>(
                <div className="card" key={element.id}>
                                
                <div className="card-content" >
                <Image  img={element.field_image}/> 
                    <h1 className="card-header" >{element.title} </h1>
                </div>
                 </div>
               ))
           }   
        </div>
        </div>

        </div>
    )
}
