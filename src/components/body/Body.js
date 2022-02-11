import { React, useState } from "react";
import Ingredient from "./Ingredient";
import Selector from "./Selector";

const Body = () => {
  const [items, setItems] = useState([
    { name: "breadTop", amount: 1 },
    { name: "bacon", amount: 0 },
    { name: "cheese", amount: 0 },
    { name: "humburger", amount: 0 },
    { name: "ketchup", amount: 0 },
    { name: "mayonnaise", amount: 0 },
    { name: "mustard", amount: 0 },
    { name: "pickles", amount: 0 },
    { name: "salad", amount: 0 },
    { name: "spycySauce", amount: 0 },
    { name: "tomatoSlices", amount: 0 },
    { name: "breadBottom", amount: 1 },
  ]);
  const getName = (item, operation) => {
    const list = [...items];
    list.forEach((ele) => {
      switch (operation) {
        case 0:
          ele.name === item.name && ele.amount++;
          break;
        case 1:
          ele.name === item.name && ele.amount--;
          break;
        default:
          console.log("Sorry");
      }
    });
    setItems(list);
    console.log(items);
  };
  return (
    <div>
      <Ingredient items={items} />
      <Selector items={items} getName={getName} />
    </div>
  );
};

export default Body;
