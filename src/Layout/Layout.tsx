import isMobile from "@/utils/isMobile";
import dynamic from "next/dynamic";
import React from "react";

const CurrentLayout = dynamic(
  () =>
    isMobile()
      ? import("@/Layout/Mobile/MobileLayout")
      : import("@/Layout/Desktop/LayoutDesktop"),
  { ssr: false },
);

const Layout: React.FC = ({ children }) => (
  <CurrentLayout>{children}</CurrentLayout>
);

export default Layout;
