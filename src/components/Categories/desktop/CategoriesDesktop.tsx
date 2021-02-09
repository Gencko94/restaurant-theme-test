import Hero from "@/components/Home/Hero/Hero";
import { Product } from "@/interfaces/interfaces";
import Layout from "@/Layout/Layout";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React from "react";
import CategoriesProducts from "./CategoriesProducts";
import ProductModal from "./ProductModal";
import SideCategories from "./SideCategories";
import styles from "./CategoriesDesktop.module.scss";

const CategoriesDesktop = () => {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null,
  );
  return (
    <Layout>
      <Hero />
      <AnimateSharedLayout>
        <div className={styles.container}>
          <SideCategories />
          <CategoriesProducts setSelectedProduct={setSelectedProduct} />
        </div>
        <AnimatePresence>
          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Layout>
  );
};
export default CategoriesDesktop;
