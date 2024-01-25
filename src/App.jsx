import "./App.css";
import Main from "./Components/Layout/Main";
import Header from "./Components/Layout/Header";
import Body from "./Components/Layout/Body";
import ItemContextProvder, { itemContext } from "./Components/Store/itemContex";
import { useContext } from "react";

function App() {
  return (
    <>
      <ItemContextProvder>
        <Main></Main>
      </ItemContextProvder>
    </>
  );
}

export default App;
