import React from 'react';

import {CustomButtonContainer} from './custom-button.styles';
import {FcGoogle} from 'react-icons/fc'

import './custom-button.styles.scss';

const CustomButton = ({children, ...props}) => {
  //parent component 
  //<input type="submit" value="Submit form" />
  
    return(
         <CustomButtonContainer {...props} > 
                 {props.isGoogleSignIn ?  <FcGoogle style={{ justifyContent: "center", alignSelf: "center",  marginRight: "0.2em",  fontSize: "3.5em", display:"flex"}} /> : null }
                 {children}
         </CustomButtonContainer>  
    )
}


export default CustomButton; 