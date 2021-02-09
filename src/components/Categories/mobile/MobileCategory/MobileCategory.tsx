import React from "react";
import { CategoriesWithProducts } from "@/interfaces/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { BsChevronDown } from "react-icons/bs";
import styles from "./MobileCategory.module.scss";
import MobileCategoryProducts from "./MobileCategoryProducts/MobileCategoryProducts";

type IProps = {
  category: CategoriesWithProducts;
};

const MobileCategory = ({ category }: IProps) => {
  const router = useRouter();
  const [open, setOpen] = React.useState<boolean>(() => {
    const index = router.asPath.indexOf("#");
    if (router.asPath.slice(index + 1) === category.slug) {
      return true;
    }
    return false;
  });
  return (
    <div id={category.slug} className={styles.container}>
      <div
        role="presentation"
        onClick={() => setOpen(!open)}
        className={styles.categoryNameContainer}
      >
        <h1 className={styles.categoryName}>{category.category}</h1>
        <motion.span
          initial={{ rotate: -90 }}
          animate={open ? { y: 5, rotate: 0 } : { rotate: -90 }}
        >
          <BsChevronDown size={25} />
        </motion.span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div layout className={styles.productsContainer}>
            {category.products.map((product) => (
              <MobileCategoryProducts key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileCategory;
