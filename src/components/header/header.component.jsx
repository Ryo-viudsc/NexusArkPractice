import React from 'react';

import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => {

   return(
    <div className="header">
      <Link to="/" className="logo-container">
         <Logo className="logo" />
      </Link>
      <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/shop">
            CONTACT
          </Link>

          {/* <Link className="option" to="/signin">
            SIGN-IN
          </Link> */}
          {
            currentUser ? 
            <div className='option' onClick={() => auth.signOut()}> SIGN-OUT</div>
            :
            <Link className='option' to='/signin'> SIGN-IN</Link>
          }
          <CartIcon />
      </div>
      { 
        hidden ?  
        (null)
        :
        (<CartDropdown />)
      }
    </div>
   )
}
//function that allows us to access to the state 
//root reducer



//this state will be root reducer (remenber  reducer is the function that accept the action(payload) and returns as state )
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser: currentUser,
    hidden : hidden
});


export default connect(mapStateToProps)(Header); 