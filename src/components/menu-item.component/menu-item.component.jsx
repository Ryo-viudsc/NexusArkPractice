import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

//functional component 
//since we don't really have many things to hold inside of the component 

//we want to have the logic 
//to dynamically generate the title into the menu component

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {

  console.log("history : " + JSON.stringify(history));
  console.log("match: " + JSON.stringify(match));
  //match returns the current relative path 
  //match.url => current url


  //push(path, [state]) - (function) Pushes a new entry onto the history stack
  return(  
    <div className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
    <div className='background-image' 
      style={{
       backgroundImage: `url(${imageUrl})`
    }}/>  
     <div className='content'> 
        <h1 className='title'> {title.toUpperCase()} </h1>
        <span className='subtitle'> SHOP NOW </span>
     </div>
   </div>
  )
}


export default withRouter(MenuItem); 
