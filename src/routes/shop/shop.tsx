import { Route, Routes } from "react-router-dom";
import CategoriesBar from "../../components/categoriesBar";
import Categories from "../categories";
import Category from "../category";

const Shop = () => {
  return (
    <>
      <CategoriesBar />
      <Routes>
        <Route index element={<Categories />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
};

export default Shop;
