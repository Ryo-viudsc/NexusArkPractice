import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

const SignIn = () => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: '',
  //     password: ''
  //   };
  // }

      const [userCredential, setCredential] = useState({ email: '', password: ''});
      const { email, password } = userCredential;

      const  handleSubmit = async event => {
        event.preventDefault();
            try {
              await auth.signInWithEmailAndPassword(email, password);
                  setCredential({ email: '', password: '' });
            } catch (error) {
              console.log(error);
            }
      };

       const handleChange = event => {
          const { value, name } = event.target;
          setCredential({...userCredential,  [name]: value });
        };

 
    return (
      <SignInContainer>
        <SignInTitle>I ALREADY HAVE AN ACCOUNT</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={userCredential.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={userCredential.password}
            handleChange={handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                   Google  
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  
}

export default SignIn;