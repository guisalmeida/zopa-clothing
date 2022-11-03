import ProductCard from "../productCard";

import { ProductsContainer } from "./styled";
//@ts-ignore
const ProductsList = ({ products, category }) => {
  const categoryProducts = category
    ? products.filter((product: { categories: any[] }) => {
        return product.categories.includes(category);
      })
    : null;

  return (
    <ProductsContainer>
      {
        //@ts-ignore
        categoryProducts
          ? //@ts-ignore
            categoryProducts.map((product) => {
              return (
                //@ts-ignore
                <ProductCard key={product.code_color} product={product} />
              );
            })
          : //@ts-ignore
            products.map((product) => {
              return (
                //@ts-ignore
                <ProductCard key={product.code_color} product={product} />
              );
            })
      }
    </ProductsContainer>
  );
};

export default ProductsList;
