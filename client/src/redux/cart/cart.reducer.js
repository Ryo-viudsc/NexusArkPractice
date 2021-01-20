import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.utils';
import {removeItemFromCart} from './cart.utils';
const INITIAL_STATE = {
  hidden : true,
  cartItems : [],
  hovered : false
};

//state.cartItems can be written as {cartItems : {}}
const cartReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){

       case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
          ...state, 
          hidden: !state.hidden
        };
       
       case CartActionTypes.HOVER_CART_HIDDEN: 
          console.log("triggered"+ state.hovered)
          return {
            ...state,
            hovered: !state.hovered  
        };
      
       case CartActionTypes.ADD_ITEM: 
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        };
      
       case CartActionTypes.REMOVE_ITEM: 
        return {
          ...state,
          cartItems : removeItemFromCart(state.cartItems, action.payload) 
        };

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
          return{
            ...state,
            cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
          }
      default: 
        return state; 
    }
}


export default cartReducer;