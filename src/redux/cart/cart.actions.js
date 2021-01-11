import CartActionTypes from './cart.types';


//this is action object 
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload : null
});



//payload is optioanl since 
//we just need toggle function 
//we only need to change the value in reducer
//case CartActionTypes.TOGGLE_CART_HIDDEN: 
  // return ({
  //   ...state,
  //   hidden: !state.hidden
  // })

  //reducer is the only one which 
  //directly accesses to the state
