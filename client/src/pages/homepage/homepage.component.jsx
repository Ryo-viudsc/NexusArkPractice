import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';
import LandingPage from '../landingpage/landing.page.component';


const HomePage = () => (
  <>
      <LandingPage />
       <HomePageContainer>
          <Directory />
        </HomePageContainer>
  </>
);


export default HomePage;