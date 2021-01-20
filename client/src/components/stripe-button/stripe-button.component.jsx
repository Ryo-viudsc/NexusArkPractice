import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    //stripe wants to see value in USD cents 

    const priceForStripe = price * 100; 
    const publishableKey = "pk_test_51I9c9CLfAl74B6CQXK0r7mx07DG6u7tqeSQy0h8PaxV1DqyADCmJal0pHT7OaNyJajg9Rqdppcn8JDwGsRl51nav00TxVCuvqo";
    
   //we are actually gonna make the request 
   //to the payment route /payment 
    const onToken = token => {
        console.log("inside of the token",token);
       // alert('Payment Successful');
        axios({
            url: 'payment', //will use whatever url at where we are 
            method: 'post',
            data: {
                amount : priceForStripe
            //
            }
        })
        .then( response => {
            alert('Paument was successful')
        })
        .catch((error) => {
            console.log('Payment Error : ', JSON.parse(error));
            alert(
                'There was an issue with your pay. Please make sure you use the provided credit card.'
            )
        })
    }
   
    //StripeCheckout Button takes a bunch of props   
    return (
      <StripeCheckout 
          label='Pay Now'
          name='Nexus Ark Practice'
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