import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
 
const CartIcon = ({toggleCartHidden}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'> 0 </span>
  </div>
);


//remember dispatch is the function that accepts the 
//action object and triggers the reducer 
const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})


export default connect(null,mapDispatchToProps)(CartIcon); 