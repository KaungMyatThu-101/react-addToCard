import React, { useState } from "react";
import Nav from "../Nav";
import Summary from "../Summary";
import Body from "./Body";
import Backdrop from "../Backdrop";
import Header from "./Header";

const Main = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCarthandler = () => {
    setShowCart(false);
  };
  return (
    <div>
      <Header showCartHandler={showCartHandler}></Header>
      <Body></Body>
      <Backdrop
        showCart={showCart}
        hideCarthandler={hideCarthandler}
      ></Backdrop>
    </div>
  );
};

export default Main;
