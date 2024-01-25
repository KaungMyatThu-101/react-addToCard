import React from "react";
import Cards from "../Cards";

const fruits = [
  {
    id: 1,
    price: 20,
    name: "orange",
    description: "yummy yummy yummy orange",
  },
  {
    id: 2,
    price: 30,
    name: "banana",
    description: "yummy yummy yummy banana",
  },
  {
    id: 3,
    price: 40,
    name: "apple",
    description: "yummy yummy yummy apple",
  },
];

const Body = () => {
  return (
    <section className="body">
      {fruits.map((fruit) => (
        <Cards key={fruit.id} {...fruit}></Cards>
      ))}
    </section>
  );
};

export default Body;
