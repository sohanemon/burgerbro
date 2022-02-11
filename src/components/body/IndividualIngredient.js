import React from "react";
import * as image from "./BurgerImages";

const IndividualIngredient = (props) => {
  var displayImage = null;

  switch (props.name) {
    case "bacon":
      displayImage = image?.bacon;
      break;
    case "breadBottom":
      displayImage = image?.breadBottom;
      break;
    case "breadTop":
      displayImage = image?.breadTop;
      break;
    case "cheese":
      displayImage = image?.cheese;
      break;
    case "humburger":
      displayImage = image?.humburger;
      break;
    case "ketchup":
      displayImage = image?.ketchup;
      break;
    case "mayonnaise":
      displayImage = image?.mayonnaise;
      break;
    case "mustard":
      displayImage = image?.mustard;
      break;
    case "pickles":
      displayImage = image?.pickles;
      break;
    case "salad":
      displayImage = image?.salad;
      break;
    case "spycySauce":
      displayImage = image?.spycySauce;
      break;
    case "tomatoSlices":
      displayImage = image?.tomatoSlices;
      break;
    default:
      console.log("NOT WORKING");
  }
  return (
    <div style={{ textAlign: "center" }}>
      <img src={displayImage} style={{ width: "300px" }} alt="" />
    </div>
  );
};

export default IndividualIngredient;
