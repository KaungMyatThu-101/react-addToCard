import React from "react";
import { useContext } from "react";
import { ItemContext } from "./Store/itemContex";

const Nav = (props) => {
  const { items } = useContext(ItemContext);
  const totalCart = items.reduce((currentVal, item) => {
    return currentVal + item.amount;
  }, 0);

  return (
    <nav className="nav">
      <h2>Shoppy</h2>
      <button onClick={props.showCartHandler}>
        card <span>({totalCart})</span>
      </button>
    </nav>
  );
};

export default Nav;
