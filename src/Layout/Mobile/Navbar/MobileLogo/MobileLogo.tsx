import Link from "next/link";
import React from "react";
import styles from "./MobileLogo.module.scss";

const MobileLogo = () => (
  <Link href="/">
    <a className={styles.container}>
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
    </a>
  </Link>
);

export default MobileLogo;
