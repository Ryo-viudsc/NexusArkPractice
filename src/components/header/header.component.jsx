import React, {useState} from 'react';

import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component';


import {createStructuredSelector} from 'reselect';
import {selectCartHidden, selectHovered} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles'; 


const Header = ({currentUser, hidden, hovered}) => {

   return(
   
    <HeaderContainer>
      <LogoContainer  to="/" >
         <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer >
          <OptionLink  to="/shop">
            SHOP
          </OptionLink>
          <OptionLink className="option" to="/shop">
            CONTACT
          </OptionLink>

          {
            currentUser ? 
            <OptionDiv  onClick={() => auth.signOut()}> SIGN-OUT</OptionDiv>
            :
            <OptionLink to='/signin'> SIGN-IN</OptionLink>
          }
          <CartIcon />
       </OptionsContainer>
      {
          hidden ? (null)  : 
        <CartDropdown />
      }
    </HeaderContainer>
   )
}
//function that allows us to access to the state 
//root reducer



//this state will be root reducer (remenber  reducer is the function that accept the action(payload) and returns as state )
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden,
    hovered : selectHovered
});


export default connect(mapStateToProps)(Header); 