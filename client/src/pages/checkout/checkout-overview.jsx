import React from 'react';

import './checkout-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import CheckoutSummary from '../../components/checkout-summary/checkout-summary.component';
import ClientCheckout from '../../components/client-checkout/client-checkout.component';
import TitleHeader from "../../components/title-header/title-header.component";

const CheckoutPage = () => {
      

  return(
    <>
     <TitleHeader />
      <div className="checkout-page-row">
        <div className="checkout-page-column-left">
          <ClientCheckout />
        </div>
        <div className="checkout-page-column-right"> 
            <CheckoutSummary/>
        </div> 
     </div>
     </>
     )
};


export default CheckoutPage;


//NOTE: 
{/* <StripeCheckoutButton price={total}  />  */}
//stripe payment button should be modified 

// const mapStateToProps = createStructuredSelector({
//       cartItems : selectCartItems,
//       total : selectCartTotal
// })

