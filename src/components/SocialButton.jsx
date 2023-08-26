import React from 'react'


const SocialButton = (iconos) => {
  return (
    
    <div className='icons'>
      {iconos.socialIcons.map((icon, index) => (
        <i key={index} className={`fa-brands fa-${icon}`}></i>
      ))}
    </div>
  );
}

export default SocialButton