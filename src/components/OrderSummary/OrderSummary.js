import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';

import Button from '../Button';
import FormInputField from '../FormInputField/FormInputField';
import CurrencyFormatter from '../CurrencyFormatter';

import * as styles from './OrderSummary.module.css';

const OrderSummary = (props) => {
  const [coupon, setCoupon] = useState('');
  const [giftCard, setGiftCard] = useState('');
  const amount = 50000;
  const currency = 'INR';
  const receiptId = 'qwsaq1';
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);


  const paymentHandler = async () => {
    try {
      const response = await fetch('http://localhost:3000/order', {
        method: 'POST',
        body: JSON.stringify({
          amount,
          currency,
          receipt: receiptId,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const order = await response.json();
      console.log(order);

      var options = {
        key: 'rzp_test_uuFk7fhcZGmKaW',
        amount,
        currency,
        name: 'Singh Sahb',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: order.id,
        handler: async function (response) {
          const body = {
            ...response,
          };

          const validateRes = await fetch('http://localhost:3000/order/validate', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          const jsonRes = await validateRes.json();
          console.log(jsonRes);
        },
        // redirect_url: 'https://www.google.com/',
        callback_url: 'https://eneqd3r9zrjok.x.pipedream.net/',
        prefill: {
          name: 'Aman Singh',
          email: 'amannsinghh0802@gmail.com',
          contact: '9516200725',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
      };

      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Error in paymentHandler:', error);
    }
  };

  useEffect(() => {
    const loadRazorpayScript = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;

        script.onload = () => {
          setRazorpayLoaded(true);
        };

        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading Razorpay script:', error);
      }
    };

    // Call the function to load the script
    loadRazorpayScript();
  }, []);


  return (
    <div className={styles.root}>
      <div className={styles.orderSummary}>
        <span className={styles.title}>order summary</span>
        <div className={styles.calculationContainer}>
          <div className={styles.labelContainer}>
            <span>Subtotal</span>
            <span>
              <CurrencyFormatter amount={440} appendZero />
            </span>
          </div>
          <div className={styles.labelContainer}>
            <span>Shipping</span>
            <span>---</span>
          </div>
          <div className={styles.labelContainer}>
            <span>Tax</span>
            <span>
              <CurrencyFormatter amount={0} appendZero />
            </span>
          </div>
        </div>
        <div className={styles.couponContainer}>
          <span>Coupon Code</span>
          <FormInputField
            value={coupon}
            handleChange={(_, coupon) => setCoupon(coupon)}
            id={'couponInput'}
            icon={'arrow'}
          />
          <span>Gift Card</span>
          <FormInputField
            value={giftCard}
            handleChange={(_, giftCard) => setGiftCard(giftCard)}
            id={'couponInput'}
            icon={'arrow'}
          />
        </div>
        <div className={styles.totalContainer}>
          <span>Total: </span>
          <span>
            <CurrencyFormatter amount={440} appendZero />
          </span>
        </div>
      </div>
      <div className={styles.actionContainer}>
        <Button
          // onClick={() => navigate('/orderConfirm')}
          onClick={paymentHandler}
          fullWidth
          level={'primary'}
        >
          checkout
        </Button>
        <div className={styles.linkContainer}>
          <Link to={'/shop'}>CONTINUE SHOPPING</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
