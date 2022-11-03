import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/productsContext";

import { ProductsCategories } from "./styled";

const CategoriesBar = () => {
  const { products } = useContext(ProductsContext);
  const categoriesSet = new Set();
  const { category } = useParams();

  products.forEach((product: { categories: [] }) => {
    product.categories.forEach((cat) => {
      //@ts-ignore
      categoriesSet.add(cat);
    });
  });
  return (
    <ProductsCategories>
      <ul>
        {
          //@ts-ignore
          Array.from(categoriesSet).map((cat: string, index) => {
            return (
              <li key={index}>
                <Link
                  to={`${cat}`}
                  className={category === cat ? "selected" : ""}
                >
                  {cat}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </ProductsCategories>
  );
};

export default CategoriesBar;
