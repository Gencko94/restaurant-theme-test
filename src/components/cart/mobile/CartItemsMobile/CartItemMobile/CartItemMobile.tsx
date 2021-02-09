import Image from "next/image";
import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./CartItemMobile.module.scss";

const CartItemMobile = () => (
  <div className={styles.container}>
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/cocoa-latte.jpg"
          alt="cocoa"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.productName}>Jucy Lucy</h3>
        <p className={styles.specialInstructions}>Extra Cheese</p>
      </div>
    </div>
    <div className={styles.pricingContainer}>
      <div className={styles.quantityContainer}>
        <button type="button" onClick={() => null}>
          <AiOutlineMinusCircle size={30} />
        </button>
        <span className={styles.quantity}>2</span>
        <button type="button">
          <AiOutlinePlusCircle size={30} />
        </button>
      </div>
      <div className={styles.priceContainer}>
        <p>3.000KD</p>
      </div>
      <button type="button" className={styles.removeBtn}>
        Remove
      </button>
    </div>
  </div>
);

export default CartItemMobile;
