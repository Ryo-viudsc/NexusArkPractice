import React from 'react';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';
import LandingPage from '../landingpage/landing.page.component';
import banner from '../../assets/pics/banner.jpg';



const HomePage = () => (
  <div> 
        <LandingPage />
          <HomePageContainer>
            <Directory />
          </HomePageContainer>
         <div style={{textAlign: "center", margin: "10% 20% 10% 20%", fontFamily:"Arial",   lineHeight: "3em"  }}> 
          <bold style={{fontSize: "1.8em", fontFamily: "arial-black"}}>NEXUS</bold>＝繋がり, &nbsp; 
          <bold style={{fontSize: "1.8em", fontFamily: "arial-black"}}>ARK</bold>＝歩く
          今までの出会い、これからの出会い<br/>
          ひとつひとつの繋がりを大切に、<br/>
          一歩一歩前進してほしいという願いを込めて<br/>
          着心地の良い質感、シンプルかつ遊び心のあるデザインで、<br/>
          皆様の未来に寄り添えるような服を提供していきます 
         </div>
         <img style={{ marginLeft: "10%", display: "flex",  width:"80%", height: "300px", alignItems: "center", marginTop: "10%"
        }}  src={banner}/> 
  </div>
);


export default HomePage;