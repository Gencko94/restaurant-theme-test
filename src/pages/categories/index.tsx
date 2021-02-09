import dynamic from "next/dynamic";
import isMobile from "@/utils/isMobile";

const CurrentCategories = dynamic(
  () =>
    isMobile()
      ? import("@/components/Categories/mobile/CategoriesMobile")
      : import("@/components/Categories/desktop/CategoriesDesktop"),
  { ssr: false },
);
const Categories = () => <CurrentCategories />;

export default Categories;
