import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { NotFound } from "./pages/notfound";
import "./scss/app.scss";
import { FullPizza } from "./pages/fullPizza";
import { MainLayout } from "./layout/MainLayout";
import { MarketHeader } from "./components/featured/header";
import { MarketFooter } from "./components/featured/footer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizzas/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    
    </>
  );
};

export default App;
