import React from "react";

const Carditem = ({ fruit }) => {
  return (
    <section className="cards cart">
      <div>
        <p>{fruit.name}</p>
        <p>$ {fruit.price}</p>
      </div>
      <div className="card-right">
        <span className="card-quantity">
          x<span>1</span>
        </span>
        <div className="quantity-ctr">
          <button className="quantity-btn">+</button>
          <button className="quantity-btn">-</button>
        </div>
      </div>
    </section>
  );
};

export default Carditem;
