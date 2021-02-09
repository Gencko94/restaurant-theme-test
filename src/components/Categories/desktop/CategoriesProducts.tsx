import React, { Dispatch, SetStateAction } from "react";
import { CategoriesWithProducts } from "@/data/index";
import { Product } from "@/interfaces/interfaces";
import { motion } from "framer-motion";
import CategoryProducts from "./CategoryProducts";

interface CategoriesProductsProps {
  setSelectedProduct: Dispatch<SetStateAction<Product | null>>;
}
const CategoriesProducts: React.FC<CategoriesProductsProps> = ({
  setSelectedProduct,
}) => (
  <div>
    {CategoriesWithProducts.map((category) => (
      <CategoryProducts
        category={category}
        key={category.slug}
        setSelectedProduct={setSelectedProduct}
      />
    ))}
  </div>
);

export default CategoriesProducts;
