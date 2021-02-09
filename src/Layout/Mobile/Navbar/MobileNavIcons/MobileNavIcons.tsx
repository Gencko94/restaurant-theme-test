import Link from "next/link";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import styles from "./MobileNavIcons.module.scss";

const MobileNavIcons = () => (
  <div className={styles.container}>
    <Link href="/cart">
      <a className={styles.iconContainer}>
        <HiOutlineShoppingBag size={35} />
      </a>
    </Link>
  </div>
);

export default MobileNavIcons;
