import Layout from "@/Layout/Layout";
import React from "react";
import CartItemsMobile from "./CartItemsMobile/CartItemsMobile";
import CheckoutMobile from "./CheckoutMobile/CheckoutMobile";

const CartMobile = () => (
  <Layout>
    <CheckoutMobile />
    <CartItemsMobile />
  </Layout>
);

export default CartMobile;
