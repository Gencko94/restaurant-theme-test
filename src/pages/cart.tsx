import isMobile from "@/utils/isMobile";
import dynamic from "next/dynamic";
import React from "react";

const CurrentCart = dynamic(
  () =>
    isMobile()
      ? import("@/components/cart/mobile/CartMobile")
      : import("@/components/cart/desktop/CartDesktop"),
  { ssr: false },
);

const cart = () => <CurrentCart />;

export default cart;
