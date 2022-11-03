import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../shop-data";

import {
  // addCollectionsAndDocuments,
  getProductsCollection,
} from "../utils/firebase/firebase";

export const ProductsContext = createContext({
  products: [],
});

// @ts-ignore
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   addCollectionsAndDocuments("products", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getProducts = async () => {
      const products = await getProductsCollection();
      setProducts(products);
    };

    getProducts();
  }, []);

  const value = { products, setProducts };

  return (
    // @ts-ignore
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
