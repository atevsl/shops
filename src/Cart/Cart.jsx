import { useEffect, useState } from "react";
import css from "./Cart.module.css";
import { Link } from "react-router-dom";

// const fs = require("fs/promises");
// const path = require("path");
// const path = require.resolve("path-browserify");
// const orderPath = path.join(__dirname, "data/orders.json");

export const Cart = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    const itemsfromstor = JSON.parse(localStorage.getItem("items"));
    if (itemsfromstor.length !== items.length) {
      setItems(itemsfromstor);
    }
  }, [items]);

  let totalPrice = 0;

  function onDellHendler(pupid) {
    let indx = -1;
    for (let i = 0; i < items.length; i++) {
      if (items[i].pupid === pupid) {
        indx = i;
        break;
      }
    }
    setItems(items.splice(indx, 1));
    localStorage.setItem("items", JSON.stringify(items));
  }

  async function onSubmitHendler() {
    const data = localStorage.getItem("orders") || [];

    const newOrder = {
      contact: document.querySelector("#name").value,
      phone: document.querySelector("#phone").value,
      email: document.querySelector("#email").value,
      address: document.querySelector("#address").value,
      puppies: items,
    };
    console.log("newOrder", newOrder);
    console.log("data", data);

    data.push(newOrder);
    console.log("dataOrder", data);

    // localStorage.setItem("orders", JSON.stringify(data));
    // await fs.writeFile(orderPath, JSON.stringify(data, null, 2));
    // document.querySelector("#name").value = "";
    // document.querySelector("#phone").value = "";
    // document.querySelector("#email").value = "";
    // document.querySelector("#address").value = "";
  }

  return (
    <>
      <form className={css.form} onSubmit={onSubmitHendler}>
        <label>
          Name:
          <input
            className={css.input}
            name="name"
            id="name"
            type="text"
          ></input>
        </label>

        <label>
          Email:
          <input
            className={css.input}
            name="email"
            id="email"
            type="email"
          ></input>
        </label>

        <label>
          Phone:
          <input
            className={css.input}
            name="phone"
            id="phone"
            type="tel"
          ></input>
        </label>

        <label>
          Address:
          <input
            className={css.input}
            name="address"
            id="address"
            type="text"
          ></input>
        </label>
      </form>
      <ul className={css.cartList}>
        {items !== [] &&
          items.map(({ pupid, photo, price }) => {
            totalPrice += price;
            return (
              <li className={css.cartItem} key={pupid}>
                <img src={photo} alt="puppie" width={200} height={150}></img>
                <p>Price:{price}$</p>

                <button
                  className={css.delBtn}
                  onClick={() => onDellHendler(pupid)}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
      <div className={css.bottom}>
        <p className={css.total}>Total price: {totalPrice} $</p>

        <Link className={css.cartBtn} onClick={onSubmitHendler} to="/orders">
          Submit
        </Link>
      </div>
    </>
  );
};
