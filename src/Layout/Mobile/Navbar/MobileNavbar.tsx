import React from "react";
import MobileLogo from "./MobileLogo/MobileLogo";
import MobileNavIcons from "./MobileNavIcons/MobileNavIcons";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import styles from "./MobileNavbar.module.scss";

const MobileNavbar = () => (
  <div className={styles.container}>
    <HamburgerMenu />
    <MobileLogo />
    <MobileNavIcons />
  </div>
);

export default MobileNavbar;
