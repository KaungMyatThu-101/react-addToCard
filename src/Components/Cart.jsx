import React, { useContext } from "react";
import Carditem from "./Carditem";
import { ItemContext } from "./Store/itemContex";

const Cart = (props) => {
  const { items, totalAmount } = useContext(ItemContext);
  const totalPrice = `${totalAmount.toFixed(2)}`;
  return (
    <section className="card-box">
      <h2>Heare is your shopping cart!!!</h2>
      <br />
      <section className="overFlow">
        {items.length < 1 ? (
          <h1 className="no-item">no item</h1>
        ) : (
          <>
            {items.map((fruit) => (
              <Carditem key={fruit.id} fruit={fruit}></Carditem>
            ))}
            <hr />
          </>
        )}
      </section>
      <div className="total">
        <h3>Total Price</h3>
        <p>$ {totalPrice}</p>
      </div>
      <div className="cart-btns">
        <button onClick={props.hideCarthandler} className="close-btn">
          close
        </button>
        {items.length < 1 ? (
          <></>
        ) : (
          <>
            <button
              onClick={() => {
                alert("ordered");
              }}
              className="order-btn"
            >
              order
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
