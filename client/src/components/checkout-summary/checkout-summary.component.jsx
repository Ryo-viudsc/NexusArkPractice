import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CustomButton from '../custom-button/custom-button.component';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import './checkout-summary.styles.scss';




const CheckoutSummary = ({cartItems, totals}) => {


    //  useEffect(() => {
    //    console.log("useEffect is invoked")
    //   }, [cartItems]);
    //  //condinally rendering 


    return (
          <div className='CheckoutSummaryBox'>
              <div className='CheckoutTitle'>Summary</div>
              <span className='CheckoutSubTitle'>
                 Subtotal     <div> 0000 </div>               
              </span>
              <span className='CheckoutSubTitle'> 
                Estimated Dlivery & Handling   <div> 8.00  </div>
              </span>
              <span className='CheckoutSubTitle'> 
                Taxes  <div>  0000  </div>   
              </span>
              <div className="checkout-buttons-rows" >
                        <CustomButton className="checkout-buttons-columns" onClick={()=>{ }}> Guest Checkout </CustomButton>
                        <CustomButton className="checkout-buttons-columns" onClick={()=>{ }}> Member Checkout</CustomButton>
              </div>
              <span className='CheckoutSubTitle'> 
                Total  <div>   `${totals}`  </div>
              </span>
          
          </div>
    );
}

const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems,
  total : selectCartTotal
});

export default connect(mapStateToProps)(CheckoutSummary);
