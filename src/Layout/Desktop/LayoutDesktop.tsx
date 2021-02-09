import React from "react";
import FooterDesktop from "./Footer/FooterDesktop";
import NavbarDesktop from "./Navbar/NavbarDesktop";

const LayoutDesktop: React.FC = ({ children }) => (
  <>
    <NavbarDesktop />
    <div style={{ minHeight: "100vh", position: "relative" }}>{children}</div>
    <FooterDesktop />
  </>
);

export default LayoutDesktop;
