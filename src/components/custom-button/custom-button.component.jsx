import React from 'react';



import './custom-button.styles.scss';




const CustomButton = ({children, ...otherProps}) => {

  //parent component 
  //<input type="submit" value="Submit form" />

    return(
        <button className='custom-button' {...otherProps}>
          {children}
        </button>  
    )
}


export default CustomButton; 