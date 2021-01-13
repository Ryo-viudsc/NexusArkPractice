import React from 'react';
import './checkout-item.styles.scss';

import {connect} from 'react-redux'
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';
//bind the action with the CheckoutItem here
// export const clearItemFromCart = item =>({
//   type: CartActionTypes.CLEAR_ITEM_FROM_CART,
//   payload : item
// });

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
  
  const {  name, imageUrl, price, quantity} = cartItem; 

   return(
  <div className='checkout-item'>
      <div className='image-container'>
          <img alt='item' src={`${imageUrl}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}> &#10094;</div>
         <div className='value'> {quantity} </div> 
        <div className='arrow' onClick={() => addItem(cartItem)} >&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <span onClick={()=> clearItem(cartItem)} className='remove-button'>&#10005;</span>
    </div>
   )
}


const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem : item => dispatch(addItem(item)),
  removeItem : item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);