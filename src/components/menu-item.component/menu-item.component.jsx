import React from 'react';

import './menu-item.styles.scss';



//functional component 
//since we don't really have many things to hold inside of the component 



//we want to have the logic 
//to dynamically generate the title into the menu component

const MenuItem = ({title, imageUrl, size}) => {

  return(  
    <div className={`${size} menu-item`}>
    <div className='background-image' style={{
       backgroundImage: `url(${imageUrl})`
      
    }}/>  
     <div className='content'> 
        <h1 className='title'> {title.toUpperCase()} </h1>
        <span className='subtitle'> SHOP NOW </span>
     </div>
   </div>
  )
}


export default MenuItem; 
