import { CategoriesWithProducts, Product } from "@/interfaces/interfaces";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { useInView } from "react-intersection-observer";

import styles from "./CategoryProducts.module.scss";

interface CategoryProductsProps {
  category: CategoriesWithProducts;
  setSelectedProduct: Dispatch<SetStateAction<Product | null>>;
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({
  category,
  setSelectedProduct,
}) => {
  const { ref, entry, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-150px 0px 0px 0px",
  });

  React.useEffect(() => {
    const el = document.getElementById(`_${category.slug}`);
    if (entry?.isIntersecting) {
      el?.classList.add("active");
    } else {
      el?.classList.remove("active");
    }
  }, [inView]);
  return (
    <div ref={ref} id={category.slug} className={styles.container}>
      <div className={styles.categoryTitleContainer}>
        <h1 className={styles.categoryTitle}>{category.category}</h1>
      </div>
      <div className={styles.productsContainer}>
        {category.products.map((product) => (
          <Link href="/products/1">
            <motion.a
              key={product.id}
              layoutId={product.id}
              role="presentation"
              className={styles.product}
              onClick={() => setSelectedProduct(product)}
            >
              <motion.div
                layoutId={`image-container_${product.id}`}
                className={styles.productImageContainer}
              >
                <Image
                  src="/images/cocoa-latte.jpg"
                  alt="cocoa"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
              <motion.div layoutId={`container_${product.id}`}>
                <motion.div
                  layoutId={`title-container_${product.id}`}
                  className={styles.productTitleContainer}
                >
                  <motion.h1
                    layoutId={`title_${product.id}`}
                    className={styles.productTitle}
                  >
                    {product.name}
                  </motion.h1>
                  <motion.section
                    layoutId={`price_${product.id}`}
                    className={styles.productPriceContainer}
                  >
                    {product.price}
                  </motion.section>
                </motion.div>
                <motion.div
                  layoutId={`description-container_${product.id}`}
                  className={styles.productDescriptionContainer}
                >
                  <motion.p
                    layoutId={`description_${product.id}`}
                    className={styles.productDescription}
                  >
                    {product.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
