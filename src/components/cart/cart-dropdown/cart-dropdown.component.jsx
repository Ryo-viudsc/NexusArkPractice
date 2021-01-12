import React from 'react';
import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux';
import {selectCartItems} from '../../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

//destructure the cartItems from the props of the current component
const CartDropdown = ({cartItems, history}) => {

  return(
    <div className='cart-dropdown'>
      <div className='cart-items' />
      {
        cartItems.length ? 
        (cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
          )))
        : 
        <span className='emtpy-message'>Your cart is empty</span>  
      }
      <CustomButton onClick={()=> history.push('/checkout')}> GO TO CHECKOUT</CustomButton>
    </div>
    )

}

//this way, cart dropdown component 
//won't get re-rendered whenever some changes that are unrelated to the cart component happens 
const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems
}) 
//reselect is literary "reselecting" the existing variable 
//and re-use it instead of calucating multiple times 


//OR 
// const mapStateToProps = state =>({
//     cartItems : state.cart.cartItems
// })
//NOTE: but this one gets re-render everytime the state changes 



export default withRouter(connect(mapStateToProps)(CartDropdown)); 