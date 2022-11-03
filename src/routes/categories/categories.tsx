import { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import ProductsList from "../../components/productsList";

const Categories = () => {
  const { products } = useContext(ProductsContext);
  return <ProductsList products={products} category={undefined} />;
};

export default Categories;
