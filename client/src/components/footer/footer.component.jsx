import React from "react";
import './footer.styles.scss';
import {FaInstagram, FaFacebookF, FaLine} from 'react-icons/fa'


// <AiOutlineTwitter />
// <AiOutlineFacebook />

const FooterPage = () => {


  return (
    <>
    <div className='footer'>
      <span className='card'>
          <div className='text'> プライバシーポリシー </div>
          <div className='text'> 特定商取引法に基づく表記 </div>
      </span>
      <span className='card'>
          <img className='icon'  height="25" src="https://shoplineimg.com/assets/footer/card_jcb.png"/>
          <img className='icon' height="25" src="https://shoplineimg.com/assets/footer/card_visa.png"/>
          <img className='icon' height="25" src="https://shoplineimg.com/assets/footer/card_master.png"/>
      </span>   
      <span className='card'>
         <FaInstagram size="1.5em"  className='icon'  />
         <FaFacebookF size="1.5em"  className='icon'/>
         <FaLine  size="1.5em" className='icon' />
      </span>
   
    </div>
    <div className="copyright"> copyright © 2021 Nexus Ark, Inc, All rights reserved </div>  
    </>
  );
}

//note : icon list


export default FooterPage;