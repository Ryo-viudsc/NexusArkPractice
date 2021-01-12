//utility functions allows us to keep our 
//files clean and organize functions that 
//we may need in multiple files in one location 

//this is for users to add the same items multiple times 
export const addItemToCart = (cartItems, cartItemToAdd) => {

  //if item is not found, the cart item will be "undefined"   
  const existingCartItem = cartItems.find( 
      cartItem => cartItem.id === cartItemToAdd.id
      );

    if(existingCartItem) {
        //note: 
        //map function actually changes the state 
        return cartItems.map(cartItem => 
              cartItem.id === cartItemToAdd.id
              ? {...cartItem, quantity:cartItem.quantity+1}
              : cartItem 
          );
    } 

    //if existingCartItem is "undefined" 
    return [...cartItems, {...cartItemToAdd, quantity: 1}]; 
};