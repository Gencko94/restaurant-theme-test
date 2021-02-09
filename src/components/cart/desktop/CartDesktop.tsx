import Hero from "@/components/Home/Hero/Hero";
import Layout from "@/Layout/Layout";
import React from "react";
import CartCheckout from "./CartCheckout/CartCheckout";
import styles from "./CartDesktop.module.scss";
import CartItems from "./CartItems/CartItems";

const CartDesktop = () => (
  <Layout>
    <Hero />
    <div className={styles.container}>
      <h1>Order Details</h1>
      <div className={styles.cartContainer}>
        <CartItems />
        <CartCheckout />
      </div>
    </div>
  </Layout>
);

export default CartDesktop;
