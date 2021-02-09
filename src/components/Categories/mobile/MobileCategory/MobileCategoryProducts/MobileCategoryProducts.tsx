import { Product } from "@/interfaces/interfaces";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./MobileCategoryProducts.module.scss";

type IProps = {
  product: Product;
};
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const MobileCategoryProducts = ({ product }: IProps) => (
  <Link href="/products/1">
    <motion.a layout variants={containerVariants} className={styles.product}>
      <motion.div className={styles.productImageContainer}>
        <Image
          src="/images/cocoa-latte.jpg"
          alt="cocoa"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div layoutId={`container_${product.id}`}>
        <motion.div className={styles.productTitleContainer}>
          <motion.h1 className={styles.productTitle}>{product.name}</motion.h1>
          <motion.section className={styles.productPriceContainer}>
            {product.price}
          </motion.section>
        </motion.div>
        <motion.div className={styles.productDescriptionContainer}>
          <motion.p className={styles.productDescription}>
            {product.description}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.a>
  </Link>
);
export default MobileCategoryProducts;
