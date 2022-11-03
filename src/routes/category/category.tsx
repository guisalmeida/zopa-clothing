import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/productsContext";
import ProductsList from "../../components/productsList";

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);
  return <ProductsList products={products} category={category} />;
};

export default Category;
