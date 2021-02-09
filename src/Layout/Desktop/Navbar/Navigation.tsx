import React from "react";
import Link from "next/link";
import Language from "./Language";
import NavIcons from "./NavIcons";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <div>
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.item}>Branches</a>
      </Link>
      <Link href="/">
        <a className={styles.item}>Contact Us</a>
      </Link>
      <Link href="/">
        <a className={styles.item}>About Us</a>
      </Link>
      <Language />
      <NavIcons />
    </div>
  </div>
);

export default Navigation;
