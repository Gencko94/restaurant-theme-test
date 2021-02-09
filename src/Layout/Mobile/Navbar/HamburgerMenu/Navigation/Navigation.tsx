import { AnimatePresence, motion, Variants } from "framer-motion";
import React from "react";
import { GiStarFormation } from "react-icons/gi";
import { AiOutlineReload } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { BiReceipt } from "react-icons/bi";
import styles from "./Navigation.module.scss";

type IProps = {
  isOpen: boolean;
};

const Navigation = ({ isOpen }: IProps) => {
  const logoVariants: Variants = {
    open: {
      scale: 1,

      transition: {
        delay: 0.3,

        ease: "backOut",
      },
    },
    closed: {
      scale: 0,
    },
    exited: {
      opacity: 0,
    },
  };
  const menuVariants: Variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },

    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const menuChildrenVariants: Variants = {
    open: {
      x: 0,
      opacity: 1,
    },
    closed: {
      x: -30,
      opacity: 0,
    },
  };

  const navVariants: Variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },

    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const navChildrenVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 30,
      opacity: 0,
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="first"
              variants={logoVariants}
              animate="open"
              initial="closed"
              exit="exited"
              className={styles.logoFrameContainer}
            >
              <img className={styles.logo} src="/images/logo.png" alt="logo" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="second"
            variants={menuVariants}
            animate="open"
            initial="closed"
            exit="closed"
            className={styles.menuContainer}
          >
            <Link href="/">
              <motion.a
                variants={menuChildrenVariants}
                className={styles.menuItem}
              >
                <GiStarFormation size={30} />
                <h1>Favourates</h1>
              </motion.a>
            </Link>
            <Link href="/">
              <motion.a
                variants={menuChildrenVariants}
                className={styles.menuItem}
              >
                <BiReceipt size={30} />
                <h1>Orders</h1>
              </motion.a>
            </Link>
            <Link href="/">
              <motion.a
                variants={menuChildrenVariants}
                className={styles.menuItem}
              >
                <AiOutlineReload size={30} />
                <h1>Re-Order</h1>
              </motion.a>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <hr />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="third"
            variants={navVariants}
            animate="open"
            initial="closed"
            exit="closed"
            className={styles.navContainer}
          >
            <Link href="/">
              <motion.a
                key={1}
                variants={navChildrenVariants}
                className={styles.navItem}
              >
                <h1>Menu</h1>
                <BsChevronRight size={23} />
              </motion.a>
            </Link>
            <Link href="/">
              <motion.a
                key={2}
                variants={navChildrenVariants}
                className={styles.navItem}
              >
                <h1>Branches</h1>
                <BsChevronRight size={23} />
              </motion.a>
            </Link>
            <Link href="/">
              <motion.a
                key={3}
                variants={navChildrenVariants}
                className={styles.navItem}
              >
                <h1>About us</h1>
                <BsChevronRight size={23} />
              </motion.a>
            </Link>
            <Link href="/">
              <motion.a
                key={3}
                variants={navChildrenVariants}
                className={styles.navItem}
              >
                <h1>Contact us</h1>
                <BsChevronRight size={23} />
              </motion.a>
            </Link>
            <Link href="/">
              <motion.a
                key={3}
                variants={navChildrenVariants}
                className={styles.navItem}
              >
                <h1>العربية</h1>
                <BsChevronRight size={23} />
              </motion.a>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
