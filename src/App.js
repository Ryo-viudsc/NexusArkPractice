import React from 'react';
import logo from './logo.svg';
import './App.css';

import {  Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

//NOTE
//1, Switch is like radio button 
//when you are on a particular page, 
//router doesn't render anything else but the current router 

const HatsPage = () => {
  return(
  <div>   
    <h1>HATS PAGE</h1>
  </div>
  )
}

const TestPage = ({props}) => {
  console.log("test props:" + props);
    return(
  <div>   
    <h1>test PAGE</h1>
  </div>
  )
}



function App() {
  return (
    <>
     <div> 
      <Switch>
       <Route exact  path='/' component={HomePage} />
       <Route exact path='/shop' component={ShopPage} />
      
       </Switch>
     </div>
   </>
  )
}
//without "exact" keyword, 
//if that is just path
//then anything starts with '/', 
//it also gets rendered 



export default App;
