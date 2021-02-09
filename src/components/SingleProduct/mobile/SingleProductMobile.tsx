import Layout from "@/Layout/Layout";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";
import { FaHotjar } from "react-icons/fa";
import React from "react";
import styles from "./SingleProductMobile.module.scss";

const SingleProductMobile = () => (
  <Layout>
    <div className={styles.imageContainer}>
      <Image
        src="/images/cocoa-latte.jpg"
        alt="cocoa"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className={styles.productNameContainer}>
      <h1 className={styles.productName}>Juicy Lucy</h1>
    </div>
    <div className={styles.servingContainer}>
      <div className={styles.servingBlock}>
        <p className={styles.servingText}>Served Hot !</p>
        <FaHotjar className={styles.servingIcon} size={25} />
      </div>
    </div>
    <div className={styles.productPriceContainer}>
      <h4 className={styles.priceText}>Price : </h4>
      <p className={styles.productPrice}>3.000 KD</p>
    </div>
    <div className={styles.productDescriptionContainer}>
      <p className={styles.productDescription}>
        Double angus Beef patties, overed with a giant Tsunami Cheesy wave,
        topped with a seasoned crispy chunk of meat
      </p>
    </div>

    <div className={styles.specialInstructionsContainer}>
      <h3 className={styles.specialInstructionsText}>
        Add Special Instructions
      </h3>
      <textarea rows={5} className={styles.specialInstructions} />
    </div>
    <div className={styles.addToCartContainer}>
      <div className={styles.quantityContainer}>
        <button type="button" onClick={() => null}>
          <AiOutlineMinusCircle size={30} />
        </button>
        <span className={styles.quantity}>2</span>
        <button type="button">
          <AiOutlinePlusCircle size={30} />
        </button>
      </div>
      <button type="button" className={styles.addButton}>
        Add To Cart
      </button>
    </div>
  </Layout>
);

export default SingleProductMobile;
