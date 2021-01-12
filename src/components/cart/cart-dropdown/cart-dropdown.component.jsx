import React from 'react';
import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';

//destructure the cartItems from the props of the current component
const CartDropdown = ({cartItems}) => {

  return(
    <div className='cart-dropdown'>
      <div className='cart-items' />
      {
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
          ))
      }
      <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
    )
}

//this way, cart dropdown component 
//won't get re-rendered whenever some changes that are unrelated to the cart component happens 
const mapStateToProps= (state) => ({
  selectCartItems(state) 
})



//OR
// const mapStateToProps = state =>({
//     cartItems : state.cart.cartItems
// })

export default connect(mapStateToProps)(CartDropdown); 