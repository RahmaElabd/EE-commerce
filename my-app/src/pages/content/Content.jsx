import { Routes, Route } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";
import BestSeller from "./BestSeller";

const Content = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route exact path="/productspage" element={<ProductsPage />} />
      <Route exact path="/bestseller" element={<BestSeller />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/reg" element={<Register />} />
      <Route exact path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Content;
