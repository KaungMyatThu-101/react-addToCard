import React from "react";
import Cart from "./Cart";

const Backdrop = (props) => {
  return (
    <>
      {props.showCart && (
        <section className="backdrop" onClick={props.hideCarthandler}>
          <Cart hideCarthandler={props.hideCarthandler}></Cart>
        </section>
      )}
    </>
  );
};

export default Backdrop;
