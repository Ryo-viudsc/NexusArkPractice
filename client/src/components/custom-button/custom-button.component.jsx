import React from 'react';

import {CustomButtonContainer} from './custom-button.styles';

import './custom-button.styles.scss';

const CustomButton = ({children, ...props}) => {
  //parent component 
  //<input type="submit" value="Submit form" />
  
    return(
         <CustomButtonContainer {...props} > 
                 {children}
         </CustomButtonContainer>  
    )
}


export default CustomButton; 