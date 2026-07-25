import type { Member } from "./member";
import type { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
}

/** HOME PAGE */
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCTS PAGE */
export interface ProductsPageState {
  restaurant: Member | null;
  choosenProduct: Product | null;
  products: Product[];
}

/** ORDRES  PAGE */
