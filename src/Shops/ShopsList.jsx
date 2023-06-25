import { ShopItem } from "./ShopItem";
import css from "./Shops.module.css";

export const ShopList = ({ shops }) => {
  return (
    <ul className={css.shops_list}>
      {shops.map((shop) => (
        <ShopItem name={shop.name} id={shop.id} key={shop.id} />
      ))}
    </ul>
  );
};
