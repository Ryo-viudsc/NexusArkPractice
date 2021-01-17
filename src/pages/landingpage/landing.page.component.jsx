import React from 'react';
import pic from './pic1.png';
//without header 
const LandingPage = () => {


  return(
            <div id="main">
                    <div id="box1"></div>

                    <div id="box2">
                        <div id="text">
                            NEXUSARK
                        </div>
                    </div>
                    <div id="box3"> 
                       <div id="container">
                            <div id="logo">
                              <img  src={pic} />
                            </div>  
                       </div>
                    </div>
              </div>
  )
};





export default LandingPage;