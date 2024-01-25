import React from "react";
import Carditem from "./Carditem";

const fruits = [
  {
    id: 1,
    price: 23,
    name: "banana",
    description: "yummy yummy banana",
  },
  {
    id: 2,
    price: 40,
    name: "water malon",
    description: "yummy yummy yummy water malon",
  },
  {
    id: 3,
    price: 50,
    name: "apple",
    description: "yummy yummy yummy apple",
  },
];

const Cart = (props) => {
  return (
    <section className="card-box">
      <h2>carts</h2>
      {fruits.map((fruit) => (
        <Carditem key={fruit.id} fruit={fruit}></Carditem>
      ))}
      <hr />
      <div className="total">
        <h3>Total Price</h3>
        <p>$ 3000</p>
      </div>
      <div className="cart-btns">
        <button onClick={props.hideCarthandler} className="close-btn">
          close
        </button>
        <button className="order-btn">order</button>
      </div>
    </section>
  );
};

export default Cart;
