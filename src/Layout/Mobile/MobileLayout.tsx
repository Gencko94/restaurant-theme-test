import React from "react";
import MobileFooter from "./Footer/MobileFooter";
import MobileNavbar from "./Navbar/MobileNavbar";

const MobileLayout: React.FC = ({ children }) => (
  <>
    <MobileNavbar />
    <div style={{ minHeight: "100vh", marginTop: "76px" }}>{children}</div>
    <MobileFooter />
  </>
);

export default MobileLayout;
