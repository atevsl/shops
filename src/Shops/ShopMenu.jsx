import { Suspense, useEffect, useState } from "react";
import Spiner from "../Spiner";
import { Outlet, useParams } from "react-router-dom";
import css from "./Shops.module.css";

export const ShopMenu = ({ shops }) => {
  const { id } = useParams();
  let puppies = shops.find((shop) => shop.id === id);

  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className={css.shopMenuContainer}>
      <p className={css.shopMenuHeader}>{puppies.name}</p>
      <ul className={css.shopMenuList}>
        {puppies.puppies.map((puppie) => {
          return (
            <li className={css.shopMenuItem} key={puppie.id}>
              <img
                src={puppie.photo}
                alt="puppie"
                width={200}
                height={140}
              ></img>
              <p className={css.shopMenuPrice}> Price: {puppie.price} $</p>
              <button
                className={css.shopMenuBtn}
                type="button"
                onClick={() => {
                  puppie.total += 1;
                  setItems((prevState) => [...prevState, puppie]);
                }}
              >
                pick me
              </button>
            </li>
          );
        })}
      </ul>

      <Suspense fallback={<Spiner wrapperStyle={{ fill: "#7b81ec" }} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
