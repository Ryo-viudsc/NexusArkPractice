import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
//redux=persist allows a browser to store teh cache 
import {persistStore} from 'redux-persist';  


const middlewares = [];

if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger);
}


const store = createStore(rootReducer, applyMiddleware(...middlewares));


//essentially the persist version of store 
const persistor = persistStore(store);


export { store, persistor}; 