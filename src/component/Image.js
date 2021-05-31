import React from 'react'

 const Image = ({img})=> {
    return (
        <>
            {
                img.map((element)=>{
                    let dato = element.field_media_image
                    return (
                        dato.map((ele)=> (
                            <img className="card-img" key={ele.id} alt="" src={ele.large} />
                          ))
                    )
                  
                    
                })
            }
        </>
    )
}

export default Image;
