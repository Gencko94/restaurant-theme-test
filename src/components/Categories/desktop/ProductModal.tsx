import { Product } from "@/interfaces/interfaces";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import styles from "./ProductModal.module.scss";

interface ProductModalProps {
  product: Product | null;
  setSelectedProduct: Dispatch<SetStateAction<Product | null>>;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  setSelectedProduct,
}) => {
  const handleClose = () => {
    setSelectedProduct(null);
  };
  return (
    <>
      <motion.div layoutId={product?.id} className={styles.modalContainer}>
        <motion.button
          type="button"
          onClick={handleClose}
          className={styles.closeButton}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <GrFormClose size={20} />
        </motion.button>
        <motion.div
          layoutId={`image-container_${product?.id}`}
          className={styles.productImageContainer}
        >
          <Image
            src="/images/cocoa-latte.jpg"
            alt="cocoa"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <motion.div layoutId={`container_${product?.id}`}>
          <motion.div
            layoutId={`title-container_${product?.id}`}
            className={styles.productTitleContainer}
          >
            <motion.h1
              layoutId={`title_${product?.id}`}
              className={styles.productTitle}
            >
              {product?.name}
            </motion.h1>
            <motion.section
              layoutId={`price_${product?.id}`}
              className={styles.productPriceContainer}
            >
              {product?.price}
            </motion.section>
          </motion.div>
          <motion.div
            layoutId={`description-container_${product?.id}`}
            className={styles.productDescriptionContainer}
          >
            <motion.p
              layoutId={`description_${product?.id}`}
              className={styles.productDescription}
            >
              {product?.description}
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.orderContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.02 }}
        >
          <motion.div className={styles.specialInstructionsContainer}>
            <h1 className={styles.specialInstructionsTitle}>
              Special Instructions
            </h1>
            <textarea className={styles.textArea} rows={4} />
          </motion.div>
          <motion.div className={styles.addToCartContainer}>
            <div className={styles.qtyContainer}>
              <button type="button" onClick={() => null}>
                <AiOutlineMinusCircle
                  size={25}
                  style={{ verticalAlign: "center" }}
                />
              </button>
              <span className={styles.quantity}>2</span>
              <button type="button">
                <AiOutlinePlusCircle size={25} />
              </button>
            </div>
            <button type="button" className={styles.addButton}>
              Add To Cart
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div
        role="presentation"
        className={styles.backDrop}
        onClick={handleClose}
      />
    </>
  );
};

export default ProductModal;
