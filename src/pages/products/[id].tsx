import isMobile from "@/utils/isMobile";
import dynamic from "next/dynamic";
import React from "react";

const SingleProduct = dynamic(
  () =>
    isMobile()
      ? import("@/components/SingleProduct/mobile/SingleProductMobile")
      : import("@/components/SingleProduct/desktop/SingleProductDesktop"),
  { ssr: false },
);

const Product = () => <SingleProduct />;

export default Product;
