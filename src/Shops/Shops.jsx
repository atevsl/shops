import { Suspense } from "react";
import { ShopList } from "./ShopsList";
import { Outlet } from "react-router-dom";
import Spiner from "../Spiner";
import css from "./Shops.module.css";

export const Shops = ({ shops }) => {
  return (
    <div className={css.container}>
      <ShopList shops={shops} />
      <Suspense fallback={<Spiner wrapperStyle={{ fill: "#7b81ec" }} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
