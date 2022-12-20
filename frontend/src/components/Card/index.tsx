import React, { useState, FC } from "react";
import "./index.css";

interface IProps {
  ID: number;
  SKU: string;
  Name: string;
  Price: string;
  PSAttribute: string;
  PType: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const checker = (type: string) => {
  if (type === "BOOK") {
    return <label>Weight: </label>;
  } else if (type === "DVD") {
    return <label>Size: </label>;
  } else {
    return <label>Dimensions: </label>;
  }
};

const Card: FC<IProps> = ({ ID, SKU, Name, Price, PSAttribute, PType, handler }) => {
  return (
    <div className="card_container">
      <input id={ID.toString()} onChange={handler} className="delete-checkbox" type="checkbox" />
      <p>{SKU}</p>
      <p>{Name}</p>
      <p>${Price}</p>
      <p>
        {checker(PType)}
        {PSAttribute}
      </p>
    </div>
  );
};

export default Card;
