import React from 'react';

import { SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

//cyrrying functional component 
//this way, you can conditionally crender the function 
const WithSpinner = WrappedComponent => {
  const Spinner = ({isLoading, ...otherProps}) => {
          return isLoading ? (
            <SpinnerOverlay>
              <SpinnerContainer />
            </SpinnerOverlay>
          ):(
            <WrappedComponent  {...otherProps} />
          ) 
    };
  return Spinner; 
};

export default WithSpinner;