import Hero from "@/components/Home/Hero/Hero";
import Layout from "@/Layout/Layout";
import { motion } from "framer-motion";
import React from "react";
import { CategoriesWithProducts } from "../../../data/index";
import styles from "./CategoriesMobile.module.scss";
import MobileCategory from "./MobileCategory/MobileCategory";

const CategoriesMobile = () => (
  <Layout>
    <Hero />
    <motion.div className={styles.container}>
      {CategoriesWithProducts.map((category) => (
        <MobileCategory key={category.slug} category={category} />
      ))}
    </motion.div>
  </Layout>
);
export default CategoriesMobile;
