import { combineReducers } from 'redux';

//we also want to persist the reducer as well
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//or sessionStorage

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key : 'root',
  storage,
  whitelist: [ 'cart' ]
}

//white list is the array containing the list of reducers 

const rootReducer = combineReducers({
  user: userReducer,
  cart : cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer); 