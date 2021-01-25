import React from 'react';
import './client-checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../checkout-item/checkout-item.component';

const ClientCheckout = ({cartItems, total}) => {


    return(
          <div className='client-checkout'>
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
              <div className="cart-items-row">
                  {
                     cartItems.map(cartItem => 
                         <CheckoutItem key={cartItem.id}  cartItem={cartItem} />)
                  }
              </div>

       </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(ClientCheckout);