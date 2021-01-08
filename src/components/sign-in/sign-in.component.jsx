import React from 'react';

import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props){
      super(props);
    
      this.state = {
        email:"",
        password: ""
      };

    }


    handleSubmit = event  => {
        event.preventDefault();
        this.setState({email: "", password: ""});
    }

    handleChange = event => {
      const {value, name} = event.target;
        //event.target ends up the values of the input 
       this.setState({[name]: value}); 
    }//TEST HERE


      render(){
        return(
          <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <input 
                     name="email"  
                     type="email" 
                     value={this.state.email} 
                     onChange={this.handleChange}
                     required />
                <label>Email</label>
                <input 
                     name="password" 
                     type="password" 
                     onChange={this.handleChange}
                     value={this.state.email} 
                     required />
                <label>Password</label>
                <input type="submit" value="Submit form" />
            </form>
          </div>
        )
      }
}



export default SignIn; 