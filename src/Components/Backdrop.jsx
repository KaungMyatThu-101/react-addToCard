import React from "react";
import Cart from "./Cart";

const Backdrop = (props) => {
  return (
    <>
      {props.showCart && (
        <>
          <section
            className="backdrop"
            onClick={props.hideCarthandler}
          ></section>
          <Cart hideCarthandler={props.hideCarthandler} />
        </>
      )}
    </>
  );
};

export default Backdrop;
