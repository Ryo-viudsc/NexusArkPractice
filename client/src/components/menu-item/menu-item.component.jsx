import React from 'react';
import { withRouter } from 'react-router-dom';
import Menu1 from '../../assets/pics/Menu1.jpg';
import Menu2 from '../../assets/pics/Menu2.jpg';
import Menu3 from '../../assets/pics/Menu3.jpg';
import Menu4 from '../../assets/pics/Menu4.jpg';
import Menu5 from '../../assets/pics/Menu5.jpg';
//the way of importing pics above needs to be refactored later 



import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';


const temp_pics_sources = [
  Menu1,
  Menu2,
  Menu3,
  Menu4,
  Menu5
]; 
 // require('../../assets/pics/Menu5.jpg')
//functional component 
//since we don't really have many things to hold inside of the component 

//we want to have the logic 
//to dynamically generate the title into the menu component

const MenuItem = ({id, title, imageUrl, size, history, linkUrl, match}) => {
 
   
  
    
    console.log("testing", temp_pics_sources[id-1])
    const path = temp_pics_sources[id-1]
   return(
   <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer
      className='background-image'
      //imageUrl={temp_pics_sources[id-1]}
      style={{backgroundImage : `url(${temp_pics_sources[id-1]})` }}
      />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>)
};


export default withRouter(MenuItem); 
