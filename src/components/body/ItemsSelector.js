import { IconButton, Typography } from "@material-ui/core";
import { Remove, Add } from "@material-ui/icons";
import React from "react";
import "./itemSelector.css";
const ItemsSelector = (props) => {
  const handleChange = (operation) => {
    props.getName(props.item, operation);
  };
  console.log(props.item?.name);
  if (props.item?.amount === 5) var addButtonDisabler = true;
  else addButtonDisabler = false;
  if (props.item?.amount === 0) var removeButtonDisabler = true;
  else removeButtonDisabler = false;
  if (props.item?.name === "breadTop" || props.item?.name === "breadBottom") {
    addButtonDisabler = true;
    removeButtonDisabler = true;
  }
  return (
    <div className="main">
      <Typography sx={{ margin: "200px" }}>{props.item?.name}</Typography>{" "}
      <IconButton
        aria-label="plus"
        disabled={addButtonDisabler}
        onClick={() => handleChange(0)}
      >
        <Add />
      </IconButton>
      <Typography sx={{ margin: "200px" }}>{props.item?.amount}</Typography>{" "}
      <IconButton
        aria-label="minus"
        onClick={() => handleChange(1)}
        disabled={removeButtonDisabler}
      >
        <Remove />
      </IconButton>
    </div>
  );
};

export default ItemsSelector;
