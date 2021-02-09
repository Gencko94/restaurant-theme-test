import Image from "next/image";
import React from "react";
import Link from "next/link";
import { categories } from "@/data/index";
import styles from "./DesktopHomeCategories.module.scss";

const DesktopHomeCategories = () => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h1>Discover Our Categories</h1>
    </div>

    <div className={styles.contentContainer}>
      {categories.map((category) => (
        <Link href={`/categories#${category.slug}`}>
          <a className={styles.categoryCard}>
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
          </a>
        </Link>
      ))}
    </div>
  </div>
);

export default DesktopHomeCategories;
