import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';


const SignUp = () => {
  
  // constructor()
  // {
  //     super();
  //     this.state = {
  //       displayName : '',
  //       email: '',
  //       password: '',
  //       confirmPassword: ''
  //     }
  // }
   
    const [userCredentials, setUserCredentials] = useState({
            displayName : '',
            email: '',
            password: '',
            confirmPassword: ''
    });
    //we need those values inside of the functional component scope
    const {displayName, email, password, confirmPassword} = userCredentials;

   
    const handleSubmit = async event => {

        event.preventDefault();
      
      
        if(password !== confirmPassword){
            alert("password don't match");
            //do nothing
            return; 
        }

        try{
          //Creates a new user account associated
          // with the specified email address and password.
         const { user } = await auth.createUserWithEmailAndPassword(email, password);
         await  createUserProfileDocument(user,{displayName});
        }catch (error) {    
            console.log(error.message);
        }
  };



    const  handleChange = event => {

    //note that event data has 
    //event.target.value 
    //event.target.name
    const {name, value} = event.target; 
    //dynamically set the name value 
    setUserCredentials({...userCredentials, [name]:value});

  };


   // const {displayName, email, password, confirmPassword} = this.state;

      return(
        <div className='sign-up'>
          <h2 className='title'> I DO NOT HAVE AN ACCOUNT</h2>
          <span >Sign up with your email and password</span>
            <form
              className='sign-up-form'
              onSubmit={handleSubmit}
            >
            <FormInput
              type='text'
              name='displayName'
              value={displayName}
              onChange={handleChange}
              label='Display Name'
              required
            />
            <FormInput
              type='emai;'
              name='email'
              value={email}
              onChange={handleChange}
              label='Email'
              required
            />    
           <FormInput
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              label='Password'
              required
            />     
           <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label='confirmPassword'
                required
           />
          <CustomButton className="signup-button" type='submit'> SIGN UP</CustomButton>
          </form> 
        </div>
      )
}


export default SignUp; 

