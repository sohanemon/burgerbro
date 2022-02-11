import React from "react";
import ItemsSelector from "./ItemsSelector";

const Selector = (props) => {
  const itemSelector = props.items.map((ele) => (
    <ItemsSelector item={ele} getName={props.getName} />
  ));
  return <div>{itemSelector}</div>;
};

export default Selector;
