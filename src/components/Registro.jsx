import React from 'react'
import { useState } from "react";
import Formulario from './Formulario';
import SocialButton from './SocialButton';
import Alerta from './Alerta';


const Registro = () => {
  const [alert, setAlert] = useState({
    error:"",
    msg:"",
    color:"",
  });

  const socialIcons = ['facebook', 'github', 'linkedin'];

  return (
    <>
        <div className='container'>
        <h1>Crea una cuenta</h1>
        <SocialButton socialIcons={socialIcons} />
        <h4>O utiliza tu email para registrarte</h4>    
        <Formulario setAlert={setAlert} />
        {alert.error && <Alerta color={alert.color} msg={alert.msg}/>}
        
       


    </div>
        </>
  );
};

export default Registro;