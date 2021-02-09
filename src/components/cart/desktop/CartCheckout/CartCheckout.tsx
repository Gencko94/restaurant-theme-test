import React from "react";
import { BiChevronRight } from "react-icons/bi";
import styles from "./CartCheckout.module.scss";

const CartCheckout = () => (
  <div className={styles.container}>
    <div className={styles.couponContainer}>
      <input
        className={styles.couponInput}
        placeholder="Enter Code Or Coupon"
      />
      <button type="button" className={styles.submitBtn}>
        Submit
      </button>
    </div>
    <div className={styles.deliveryDetailsContainer}>
      <div className={styles.orderModeContainer}>
        <h6>Order Mode</h6>
        <div className={styles.radioContainer}>
          <label htmlFor="pickup">
            <input id="pickup" type="radio" value="pickup" name="mode" />
            Pickup
          </label>
          <label htmlFor="delivery">
            Delivery
            <input
              id="delivery"
              checked
              type="radio"
              value="delivery"
              name="mode"
            />
          </label>
        </div>
      </div>
      <div className={styles.deliverToContainer}>
        <p>Deliver to</p>
        <button type="button" className={styles.deliveryCountryContainer}>
          <span>Kuwait</span>
          <BiChevronRight size={20} className={styles.icon} />
        </button>
      </div>
    </div>
    <hr />
    <div className={styles.orderDetailsContainer}>
      <div className={styles.orderTotalContainer}>
        <p>Order Total</p>
        <p className={styles.orderTotal}>2.000 KD</p>
      </div>
      <div className={styles.deliveryCostContainer}>
        <p>Delivery Cost</p>
        <p className={styles.deliveryCost}>2.000 KD</p>
      </div>
      <hr />
      <div className={styles.orderSubtotalContainer}>
        <p>Order Subtotal</p>
        <p className={styles.orderSubtotal}>2.000 KD</p>
      </div>
      <hr />
      <div className={styles.addToCartContainer}>
        <button type="button" className={styles.addToCartButton}>
          Checkout
        </button>
      </div>
    </div>
  </div>
);

export default CartCheckout;
