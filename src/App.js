import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => {
  <div>   
    <h1>HATS PAGE</h1>
  </div>
}

function App() {
  return (
    <>
     <div> 
       <Route path='/' component={HomePage} />
       <Route path='/hats' component={HatsPage} />
     </div>
   </>
  )
}

export default App;
