import React from "react";
import dynamic from "next/dynamic";
import isMobile from "@/utils/isMobile";

const Categories = dynamic(
  () =>
    isMobile()
      ? import(
          "@/components/Home/Categories/MobileHomeCategories/MobileHomeCategories"
        )
      : import(
          "@/components/Home/Categories/DesktopHomeCategories/DesktopHomeCategories"
        ),
  { ssr: false },
);
const CurrentCategories = () => <Categories />;
export default CurrentCategories;
