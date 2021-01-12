//by using this,
//we can optimize the perfomance 
//especially for the value of state 

//For example, in this project 
//when an user logs-in, 
//the redux is fired off and 
//the whole tree state is updated and 
//react re-renders the currentUser component 

//In the mean time, 
//(looking at the cart-icon.component file)
//const mapStateToProps = ({cart : {cartItems}}) => ({
//   itemCount : cartItems.reduce((accumalatedQuantity, cartItem )=> accumalatedQuantity + cartItem.quantity, 0) 
// })
//this entire function "cartItems.reduce(....)" also gets fired off
//just because the state is updated and react renders other components somewhere
//and  this is not good for performance 
//It's because, everytime a part of state somewhere is updated, 
//the entire part of "cartItems.reduce(....) will be 
//calculated again, meaning it takes a liner time

//the following library is for this issue specifically 
//and memoizes a slice of state and cache a result of some calculation
import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems 
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
   cartItems.reduce(
    (accumalatedQuantity, cartItem )=> accumalatedQuantity + cartItem.quantity, 0)
)