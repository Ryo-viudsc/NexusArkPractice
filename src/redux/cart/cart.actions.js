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


//we need another action function (that takes payload and returns as the action object)
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload : item
});

export const removeItem = item => ({
   type: CartActionTypes.REMOVE_ITEM,
   payload : item 
})

export const clearItemFromCart = item =>({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload : item
});