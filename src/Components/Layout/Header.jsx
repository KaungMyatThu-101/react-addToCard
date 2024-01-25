import React from "react";
import Nav from "../Nav";
import Summary from "../Summary";
import Body from "./Body";

const Header = (props) => {
  return (
    <>
      <Nav showCartHandler={props.showCartHandler}></Nav>
      <Summary></Summary>
    </>
  );
};

export default Header;
