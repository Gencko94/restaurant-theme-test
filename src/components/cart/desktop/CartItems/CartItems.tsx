import React from "react";
import CartItem from "./CartItem/CartItem";
import styles from "./CartItems.module.scss";

const CartItems = () => (
  <div>
    <div className={styles.gridTitlesContainer}>
      <span />
      <span>Item</span>
      <span>Price</span>
      <span>Total</span>
    </div>
    <div className={styles.cartItemsContainer}>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  </div>
);

export default CartItems;
