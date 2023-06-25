import { Link } from "react-router-dom";
import css from "./Shops.module.css";

export const ShopItem = ({ id, name }) => {
  return (
    <li key={id} className={css.shopItem}>
      <Link to={`/shops/${id}`} className={css.shopLink}>
        {name}
      </Link>
    </li>
  );
};
