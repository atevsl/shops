import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Spiner from "./Spiner";
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <div>
      <header className={css.container}>
        <NavLink
          to="/shops"
          className={({ isActive }) => (isActive ? css.navActive : css.nav)}
        >
          Dog kennel
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? css.navActive : css.nav)}
        >
          My Pet
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) => (isActive ? css.navActive : css.nav)}
        >
          Orders
        </NavLink>
      </header>
      <Suspense fallback={<Spiner wrapperStyle={{ fill: "#7b81ec" }} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
