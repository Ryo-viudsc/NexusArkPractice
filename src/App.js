import React from 'react';
import logo from './logo.svg';
import './App.css';

import {  Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
// import { SnapshotViewIOS } from 'react-native';
//we wanna use auth credentials through this root 
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';


//we want action to pass into dispatch / setCurrentUser is action object that accepts the payload and return the actionType
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

//notice that Header is outside of the Switch 
//this way, react router doesn't have to re-render 
//everytime the switch is executed
class App extends React.Component {



  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        //to check if the database has any updates in the userAuth

        //you need the onsnapShot to listen to 
        //the update of the database 
        //for the comopnentDidMount of the entire app
         userRef.onSnapshot(snapShot => {
          setCurrentUser({
                id : snapShot.id,
                ...snapShot.data()
          });

        });
       //end of if(userAuth) we also want to know 
       //if the user is sign-ined in or not as well 
      }else{
              setCurrentUser(userAuth);
                //then current user is null 
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
 

  render(){
    return (
     <div> 
      <Header />
      <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/shop' component={ShopPage} />
       <Route exact path='/checkout' component={CheckoutPage} />
       <Route exact path='/signin' 
               render={() => 
                       this.props.currentUser
                       ? (<Redirect to='/' />)
                       : (<SignInAndSignUpPage />)} />
       </Switch>
     </div>
   )}
}
//without "exact" keyword, 
//if that is just path
//then anything starts with '/', 
//it also gets rendered 


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

//dispatch accepts the actionState with payload(user)
//fire off the reducer accoring to the action.type
//user parameter will be whatever 
//setCurrentUser will accept as paramter like setCurrentUser(param)
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

//remember set currrent user looks like this
// export const setCurrentUser = user => ({
//   type: 'SET_CURRENT_USER',
//   payload: user
// });
///////////////////////////////////////////////
//also in the root reducer file
// import userReducer from './user/user.reducer';
// export default combineReducers({
//   user: userReducer
// });
/////dispatch/////////////////////////////////////////

// const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'SET_CURRENT_USER':
//       return {
//         ...state,
//         currentUser: action.payload
//       };
//     default:
//       return state;
//   }
// };




//in this app component, we don't need the state so 
//there's no need to put the mapStateToProps
export default connect(mapStateToProps,mapDispatchToProps)(App);