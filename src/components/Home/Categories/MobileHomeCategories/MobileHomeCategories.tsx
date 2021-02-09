import React from "react";
import { categories } from "@/data/index";
import Image from "next/image";
import styles from "./MobileHomeCategories.module.scss";
import Link from "next/link";

const MobileHomeCategories = () => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h1>Discover Our Categories</h1>
    </div>

    <div className={styles.contentContainer}>
      {categories.map((category) => (
        <Link key={category.slug} href={`/categories#${category.slug}`}>
          <div className={styles.categoryCard}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/cocoa-latte.jpg"
                alt="cocoa"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.cardContent}>
              <h1 className={styles.categoryName}>{category.name}</h1>
              <p className={styles.categoryCount}>(6 Products)</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default MobileHomeCategories;
