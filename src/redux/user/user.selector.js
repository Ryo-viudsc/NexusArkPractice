import {createSelector} from 'reselect';


const selectUser = state => state.user;


//say we also want to pull off the hidden variable 
// const selectCart = state => state.cart; 

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser 
)