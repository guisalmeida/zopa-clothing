import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Topbar from "./components/topbar";
import Authentication from "./routes/authentication";
import Shop from "./routes/shop";
import Product from "./routes/product";
import Checkout from "./routes/checkout";
import Category from "./routes/category";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Topbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />}>
          <Route path=":category" element={<Category />} />
        </Route>
        <Route path="auth" element={<Authentication />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
