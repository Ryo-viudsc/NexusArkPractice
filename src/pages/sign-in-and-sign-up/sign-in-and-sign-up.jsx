import React from 'react';

import './sign-in-and-sign-up.scss';
import SignIn from '../../components/sign-in/sign-in.component';

//the reason why we make this as a functional component 
//is because we need to make sign-up and sign-in respectively

const SignInAndSignUpPage = () => {

  return(
    <div className="sign-in-and-sign-up"> 
    <SignIn />
    </div>
  )
}


export default SignInAndSignUpPage; 