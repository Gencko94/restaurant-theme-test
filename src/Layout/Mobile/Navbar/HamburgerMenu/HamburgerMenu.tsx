import { useDimensions } from "@/hooks/useDimentions";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import React, { useRef } from "react";
import styles from "./HamburgerMenu.module.scss";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation/Navigation";

const HamburgerMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const sidebar = {
    // eslint-disable-next-line no-shadow
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        // delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      // custom={height}
      ref={containerRef}
      variants={sidebar}
      className={styles.container}
    >
      {/* <motion.div className="background" variants={sidebar} /> */}
      <MenuToggle toggle={() => toggleOpen()} />

      <Navigation isOpen={isOpen} />
    </motion.nav>
  );
};

export default HamburgerMenu;
