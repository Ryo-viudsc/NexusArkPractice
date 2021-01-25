import React from 'react';

import './checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutSummary from '../../components/checkout/checkout-summary.component';

const CheckoutPage = ({cartItems, total}) => (
      
  <div className='checkout-grid'>
      <div className='checkout-page'>
            <div className='checkout-header'>
            <div className='header-block'>
                  <span>Product</span>
            </div>
            <div className='header-block'>
                  <span>Description</span>
            </div>
            <div className='header-block'>
                  <span>Quantity</span>
            </div>
            <div className='header-block'>
                  <span>Price</span>
            </div>
            <div className='header-block'>
                  <span>Remove</span>
            </div>
            </div>
            {
            cartItems.map( cartItem => 
                  <CheckoutItem key={cartItem.id}  cartItem={cartItem} />
            )
            }
            <div className='total'>
            <span>TOTAL:${total}</span>
            </div>
      </div>
     <CheckoutSummary/>
 </div>
);

//NOTE: 
{/* <StripeCheckoutButton price={total}  />  */}
//stripe payment button should be modified 

const mapStateToProps = createStructuredSelector({
      cartItems : selectCartItems,
      total : selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);