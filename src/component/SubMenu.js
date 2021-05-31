import React, {useEffect, useState} from 'react';
import {main} from './../info/1/menu.json'


const SubMenu = ({name}) => {

    return (
        <div>

            {
             main.map((dato) =>{
                if (dato.title === name){
                let datos = dato.below
                return(
                    datos.map((card)=>(
                    <li className="subMenu" key={card.title}>{card.title}</li>
                    ))
                    )
                }    
            })
            }    
            
        </div>
    );
}

export default SubMenu;
