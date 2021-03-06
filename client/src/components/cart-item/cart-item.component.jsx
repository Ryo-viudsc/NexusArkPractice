import React from 'react';

import './cart-item.styles.scss';


//deconstruct the item in the parameter
const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
  <div className='cart-item'>
      <img  src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'> {name}</span>
        <span className='price'> {quantity} x ${price}</span>
       </div>  
  </div>
);

//        <span onClick={()=> {}} className='remove-button'>&#10005;</span>

//clearItem(cartItem

export default CartItem; 