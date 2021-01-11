import React from 'react';
import logo from './logo.svg';
import './App.css';

import {  Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
// import { SnapshotViewIOS } from 'react-native';
//we wanna use auth credentials through this root 
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


//notice that Header is outside of the Switch 
//this way, react router doesn't have to re-render 
//everytime the switch is executed
class App extends React.Component {

  // constructor(){
  //   super();

  //   this.state = {
  //     currentUser : null
  //   }
  // };

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
              currentUser : {
                id : snapShot.id,
                ...snapShot.data()
              }
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
       <Route exact  path='/' component={HomePage} />
       <Route exact path='/shop' component={ShopPage} />
       <Route exact path='/signin' component={SignInAndSignUpPage} />
       </Switch>
     </div>
   )}
}
//without "exact" keyword, 
//if that is just path
//then anything starts with '/', 
//it also gets rendered 



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



export default connect(
  null,
  mapDispatchToProps
)(App);