import { Dispatch, SetStateAction } from "react";

export interface ServerThemeResponse {
  mainColor: string | undefined;
  textColor: string | undefined;
}
export interface ThemeProviderProps {
  mainColor: string | undefined;
  textColor: string | undefined;
  themeLoading: boolean;
}
export interface CategoriesWithProducts {
  category: string;
  slug: string;
  products: Product[];
}
export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
}

// general Provider
export interface GeneralContextProps {
  sideMenuOpen: boolean;
  toggleOpen: Dispatch<SetStateAction<boolean>>;
}
