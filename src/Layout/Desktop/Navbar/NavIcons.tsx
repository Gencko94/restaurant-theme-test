import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingBag, HiOutlineLogout } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { GiStarFormation } from "react-icons/gi";
import { AiOutlineReload } from "react-icons/ai";
import { BiReceipt } from "react-icons/bi";
import styles from "./NavIcons.module.scss";

const NavIcons = () => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exited: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  const handleOpen = () => {
    if (menuOpen) {
      setMenuOpen(false);
      return;
    }
    setMenuOpen(true);
  };
  return (
    <>
      <Link href="/cart">
        <a className={styles.iconContainer}>
          <HiOutlineShoppingBag size={30} />
        </a>
      </Link>
      <button
        onClick={handleOpen}
        type="button"
        className={styles.profileIconContainer}
      >
        <div className={styles.iconContainer}>
          <VscAccount size={30} />
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exited"
              className={styles.profileDropDownContainer}
            >
              <div className={`${styles.account}`}>
                <h1 className={styles.accountName}>Ahmad Zaaza</h1>
                <h1 className={styles.accountEmail}>AhmadZaaza@ahmad.com</h1>
              </div>
              <div className={styles.menuItem}>
                <GiStarFormation size={20} />
                <p>Favourates</p>
              </div>
              <Link href="/orders">
                <a className={styles.menuItem}>
                  <BiReceipt size={20} />
                  <p>Orders</p>
                </a>
              </Link>
              <div className={styles.menuItem}>
                <AiOutlineReload size={20} />
                <p>Re-Order</p>
              </div>
              <div className={styles.menuItem}>
                <HiOutlineLogout size={20} />
                <p>Logout</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </>
  );
};

export default NavIcons;
