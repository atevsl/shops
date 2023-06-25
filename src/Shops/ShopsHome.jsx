import Spiner from "../Spiner";
import css from "./Shops.module.css";

export const ShopsHome = () => {
  return (
    <div className={css.shopMenuContainer}>
      <p style={{ color: "#a2c523" }}>Сhoose one of the dog breeds...</p>
      <Spiner wrapperStyle={{ fill: "#7b81ec" }} />
    </div>
  );
};
