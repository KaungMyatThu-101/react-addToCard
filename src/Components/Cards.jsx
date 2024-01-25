import React from "react";

const Cards = ({ id, price, name, description }) => {
  return (
    <>
      <section className="cards">
        <div>
          <p>{name}</p>
          <p>{description}</p>
          <p>$ {price}</p>
        </div>
        <div className="card-right">
          <input className="card-input" type="number" />
          <button>+ ADD</button>
        </div>
      </section>

      <br />
    </>
  );
};

export default Cards;
