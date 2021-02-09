import React from "react";
import CartItemMobile from "./CartItemMobile/CartItemMobile";
import styles from "./CartItemsMobile.module.scss";

const CartItemsMobile = () => (
  <div>
    <div className={styles.titleContainer}>
      <h1>Order Details</h1>
    </div>
    <CartItemMobile />
    <CartItemMobile />
  </div>
);

export default CartItemsMobile;
