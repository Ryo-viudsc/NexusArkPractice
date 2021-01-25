import React, {useState} from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {hoverCartHidden} from '../../redux/cart/cart.actions';

//TODO : 
//delete button on the left-top side 
//to toggle the cart


const CartIcon = ({toggleCartHidden, hoverCartHidden , itemCount}) => {
  
  return(
      <div className='cart-icon' 
           onClick={toggleCartHidden}
       >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'> {itemCount} </span>
      </div>
  )
};

//pass the whole state 
const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount
})

// const mapStateToProps = (state) => ({
//     itemCount : state.cart.cartItems.reduce( (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0 )
// });

//remember dispatch is the function that accepts the 
//action object and triggers the reducer 
const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden : () => dispatch(toggleCartHidden()),
    hoverCartHidden : () => dispatch(hoverCartHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon); 