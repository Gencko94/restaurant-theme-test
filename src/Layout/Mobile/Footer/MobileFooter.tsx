import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import styles from "./MobileFooter.module.scss";

const MobileFooter = () => (
  <div className={styles.footerContainer}>
    <div className={styles.footerLogoContainer}>
      <img src="/images/logo.png" className={styles.footerLogo} alt="logo" />
    </div>
    <div className={styles.footerLinksContainer}>
      <Link href="/">
        <a className={styles.footerLink}>Branches</a>
      </Link>
      <Link href="/">
        <a className={styles.footerLink}>Contact Us</a>
      </Link>
      <Link href="/">
        <a className={styles.footerLink}>Order Status</a>
      </Link>
    </div>
    <div className={styles.socialLinksContainer}>
      <Link href="/">
        <a className={styles.socialLink}>
          <AiFillFacebook size={25} color="#4267B2" />
        </a>
      </Link>
      <Link href="/">
        <a className={styles.socialLink}>
          <AiOutlineTwitter size={25} color="#00acee" />
        </a>
      </Link>
      <Link href="/">
        <a className={styles.socialLink}>
          <AiOutlineInstagram size={25} color="#833AB4" />
        </a>
      </Link>
      <Link href="/">
        <a className={styles.socialLink}>
          <FaGooglePlay size={25} color="#3bccff" />
        </a>
      </Link>
    </div>
  </div>
);

export default MobileFooter;
