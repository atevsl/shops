import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import { Shops } from "./Shops/Shops";
import shops from "./data/shops.json";

import { Cart } from "./Cart/Cart";
import { Layout } from "./Layout";

import { ShopMenu } from "./Shops/ShopMenu";
import { ShopsHome } from "./Shops/ShopsHome";
import { Orders } from "./Orders/Orders";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shops shops={shops} />} />
        <Route path="/shops" element={<Shops shops={shops} />}>
          <Route index element={<ShopsHome />} />
          <Route path="/shops/:id" element={<ShopMenu shops={shops} />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
