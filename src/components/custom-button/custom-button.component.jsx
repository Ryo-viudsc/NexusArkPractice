import React from 'react';



import './custom-button.styles.scss';




const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {

  //parent component 
  //<input type="submit" value="Submit form" />

    return(
        <button className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} 
           {...otherProps}>
          {children}
        </button>  
    )
}


export default CustomButton; 