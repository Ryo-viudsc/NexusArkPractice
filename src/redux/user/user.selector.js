import {createSelector} from 'reselect';

//here, extracting the slice of the state
const selectUser = state => state.user;


//say we also want to pull off the hidden variable 
// const selectCart = state => state.cart; 

//make another function that gets fired off 
//if and only if the extracted part of the state is updated 
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser 
)
//and this selectCurrentUser function will be used as 
//state via mapStateToProps 
// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser
// });
