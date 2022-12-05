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

const Card: FC<IProps> = ({ ID, SKU, Name, Price, PSAttribute, PType, handler }) => {
  return (
    <div className="card_container">
      <input id={ID.toString()} onChange={handler} className="delete_checkbox" type="checkbox" />
      <p>{SKU}</p>
      <p>{Name}</p>
      <p>${Price}</p>
      <p>{PSAttribute}</p>
    </div>
  );
};

export default Card;
