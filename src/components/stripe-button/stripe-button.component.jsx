import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    //stripe wants to see value in USD cents 

    const priceForStripe = price * 100; 
    const publishableKey = "pk_test_51I9c9CLfAl74B6CQXK0r7mx07DG6u7tqeSQy0h8PaxV1DqyADCmJal0pHT7OaNyJajg9Rqdppcn8JDwGsRl51nav00TxVCuvqo";
  

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
   
    //StripeCheckout Button takes a bunch of props   
    return (
      <StripeCheckout 
          label='Pay Now'
          name='Clothing ltd'
          billingAddress
          shippingAddress
          image='https://sendeyo.com/up/d/f3eb2117da'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          paneLable='Pay Now (pane label)'
          token={onToken} //token is onSuccess callback when the payment suceeds 
          stripeKey='pk_test_51I9c9CLfAl74B6CQXK0r7mx07DG6u7tqeSQy0h8PaxV1DqyADCmJal0pHT7OaNyJajg9Rqdppcn8JDwGsRl51nav00TxVCuvqo'
      />
    ) 
}


export default StripeCheckoutButton;