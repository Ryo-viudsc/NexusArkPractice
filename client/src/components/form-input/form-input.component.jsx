import React from 'react';


import './form-input.styles.scss';


//we want to bubble up any changes occuring in the 
//form input 
//that is the reason why we need to pass down 
//handleChange function to the child component 
//which is Forminput 

const FormInput = ({handleChange, label, ...otherProps}) => {

//we need to pass 

  // name="email"  
  // type="email" 
  // value={this.state.email} 
  // onChange={this.handleChange}
  // required 

    return(
        <div className="group"> 
            <input className="form-input" 
                   onChange={handleChange} 
                   {...otherProps}  />
              {
                label ? (<label className={`${
                         otherProps.value.length  ? 'shrink' : ''} form-input-label  `}> 
                        {label}  
                        </label>) : null
              }
        </div>
        )
}



export default FormInput; 