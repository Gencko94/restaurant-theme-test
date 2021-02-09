import Layout from "@/Layout/Layout";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React from "react";
import { FaHotjar } from "react-icons/fa";
import {
  AiOutlineHeart,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import styles from "./SingleProductDesktop.module.scss";

const SingleProductDesktop = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/burger.jpg"
            alt="cocoa"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.productDetailsContainer}>
          <div className={styles.productNameContainer}>
            <h1 className={styles.productName}>Juicy Lucy</h1>
            <div className={styles.servingContainer}>
              <div className={styles.servingBlock}>
                <p className={styles.servingText}>Served Hot !</p>
                <FaHotjar className={styles.servingIcon} size={25} />
              </div>
            </div>
          </div>
          <div className={styles.productDescriptionContainer}>
            <p className={styles.productDescription}>
              Double angus Beef patties, overed with a giant Tsunami Cheesy
              wave, topped with a seasoned crispy chunk of meat
            </p>
          </div>
          <div className={styles.pricingContainer}>
            <div className={styles.priceBlock}>
              <h3>Price : </h3>
              <p className={styles.price}>3.000 KD</p>
            </div>
          </div>
          <div className={styles.customDetailsContainer}>
            <h4>Write your Additional Details</h4>
            <textarea placeholder="Example : Without Pickles" rows={5} />
          </div>
          <div className={styles.purchasingContainer}>
            <div className={styles.quantityContainer}>
              <h4>Quantity : </h4>

              <div className={styles.quantityCountContainer}>
                <button type="button" onClick={() => null}>
                  <AiOutlineMinusCircle size={30} />
                </button>
                <span className={styles.quantity}>2</span>
                <button type="button">
                  <AiOutlinePlusCircle size={30} />
                </button>
              </div>
            </div>
            <button className={styles.addBtn} type="button">
              Add to Cart
            </button>
            <div className={styles.favouratesContainer}>
              <AiOutlineHeart size={25} />
            </div>
          </div>
        </div>
        <div className={styles.extraOptionsContainer}>
          <h5>Extra Options</h5>

          <div className={styles.extraOptionsWrapper}>
            <div className={styles.extraOption}>
              <div className={styles.extraOptionImageContainer}>
                <img
                  src="/images/cheese1.png"
                  alt="extra-cheese"
                  className={styles.extraOptionImage}
                />
              </div>

              <p className={styles.extraOptionText}>Extra Cheese</p>
              <span className={styles.extraOptionCost}> + 2.000 KD</span>
            </div>
            <div className={styles.extraOption}>
              <div className={styles.extraOptionImageContainer}>
                <img
                  src="/images/fries.png"
                  alt="extra-fries"
                  className={styles.extraOptionImage}
                />
              </div>

              <p className={styles.extraOptionText}>Extra Fries</p>
              <span className={styles.extraOptionCost}> + 2.000 KD</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProductDesktop;
