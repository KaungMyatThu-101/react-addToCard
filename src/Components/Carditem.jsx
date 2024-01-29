import React, { useContext } from "react";
import { ItemContext } from "./Store/itemContex";

const Carditem = ({ fruit }) => {
  const { addItem, removeItem } = useContext(ItemContext);

  const addAmountHandler = () => {
    addItem({ ...fruit, amount: 1 });
  };
  const removeAmountHandler = () => {
    removeItem(fruit.id);
  };
  return (
    <section className="cards cart">
      <div>
        <p>{fruit.name}</p>
        <p>$ {fruit.price}</p>
      </div>
      <div className="card-right">
        <span className="card-quantity">
          x<span>{fruit.amount}</span>
        </span>
        <div className="quantity-ctr">
          <button onClick={addAmountHandler} className="quantity-btn">
            +
          </button>
          <button onClick={removeAmountHandler} className="quantity-btn">
            -
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carditem;
