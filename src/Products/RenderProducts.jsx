import React from 'react'

function RenderProducts({image,title,price,svg}) {


  return (
    <div>
   <img src={image} alt={title} />   
    </div>
  )
}

export default RenderProducts
