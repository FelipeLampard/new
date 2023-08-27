import React from 'react'


const Alerta  = ({color, msg}) => {
  return(
    <>
        <p className={color}>{msg}</p> 
    </>
  
  )
};

export default Alerta