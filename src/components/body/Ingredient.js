import { React } from "react";
import IndividualIngredient from "./IndividualIngredient";

const Ingredient = (props) => {
  const x = props.items
    .map((item) => {
      let array = [...Array(item.amount).keys()];
      return array.map(() => {
        return <IndividualIngredient name={item.name} key={Math.random()} />;
      });
    })
    .reduce((init, element) => {
      return init.concat(element);
    });
  return <div style={{ marginTop: "120px" }}>{x}</div>;
};

export default Ingredient;
