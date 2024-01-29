import React, { useContext, useState } from "react";
import { ItemContext } from "./Store/itemContex";

const Cards = ({ id, price, name, description }) => {
  const itemCtx = useContext(ItemContext);

  const { addItem } = useContext(ItemContext);
  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;

  const addToCardHandler = () => {
    if (currentAmountNumber < 1 || currentAmountNumber > 10) {
      alert("Please enter a number between 1 and 10");
      return;
    }
    addItem({
      id,
      name,
      price,
      amount: currentAmountNumber,
    });
  };

  return (
    <>
      <section className="cards">
        <div>
          <p>{name}</p>
          <p>{description}</p>
          <p>$ {price}</p>
        </div>
        <div className="card-right">
          <input
            min={1}
            max={10}
            onChange={(e) => {
              setCurrentAmount(e.target.value);
              console.log(currentAmountNumber);
            }}
            className="card-input"
            type="number"
            value={currentAmount}
          />
          <button className="card-button" onClick={addToCardHandler}>
            + ADD
          </button>
        </div>
      </section>

      <br />
    </>
  );
};

export default Cards;
