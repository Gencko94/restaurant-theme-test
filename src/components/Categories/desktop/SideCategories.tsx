import React from "react";
import { categories } from "@/data/index";
import Link from "next/link";
import styles from "./SideCategories.module.scss";

const SideCategories = () => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Categories</h1>
    </div>
    <div className={styles.categoryItemContainer}>
      {categories.map((item) => (
        <Link href={`#${item.slug}`}>
          <a id={`_${item.slug}`} className={styles.categoryItem}>
            {item.name}
          </a>
        </Link>
      ))}
    </div>
    <style jsx>
      {`
        .active {
          background-color: #2c0a51;
          color: #fff;
        }
      `}
    </style>
  </div>
);

export default SideCategories;
