import React from 'react';
import HomePage from '../homepage/homepage.component'
import pic1 from './pic1.png';
import pic2 from './pic2.png';
//without header 
import './landingpage.styles.scss';
const LandingPage = () => {

          return(   
                  <>
                  <div className="body"> 
                    <div className="main">
                            <div className="box1" >
                            </div>
                            <div className="box2">
                                <div className="text">
                                    NEXUS ARK
                                </div>
                            </div>
                            <div className="box3"> 
                              <div className="container">
                                    <div className="logo">
                                      <img className="image" src={pic1}  />
                                    </div>  
                                  </div>
                            </div>
                      </div>  
                </div>           
                </>
          )
};





export default LandingPage;