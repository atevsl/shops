import css from "./Orders.module.css";

export const Orders = () => {
  const data = JSON.parse(localStorage.getItem("orders")) || [];
  console.log(typeof data);
  return (
    // <div className={css.container}>
    //   <p style={{ color: "#a2c523" }}>Orders:</p>
    //   <ul>
    //     {data.map((order) => {
    //       return (
    //         <li>
    //           <p>contact:{order.contact}</p>
    //           <p>phone:{order.phone}</p>
    //           <p>email:{order.email}</p>
    //           <p>address:{order.address}</p>
    //           <ul>
    //             {order.puppies.map(({ photo, price }) => {
    //               return (
    //                 <li>
    //                   <img src={photo} alt="puppie"></img>
    //                   <p>{price}</p>
    //                 </li>
    //               );
    //             })}
    //           </ul>
    //         </li>
    //       );
    //     })}
    //   </ul>

    //   <p>{data}</p>
    // </div>
    <div>тут будуть щенята</div>
  );
};
