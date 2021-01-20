import {userActionTypes} from './user.types';

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});
//note 2021/01/11
//action is the function that accepts the payload 
//and return as the action object that is used 
//to pass to reducer
//and reducer 
//deconstruct the action object into 
//action.types, action.payload 
//depending on those values 
//reducer changes the value of state 

