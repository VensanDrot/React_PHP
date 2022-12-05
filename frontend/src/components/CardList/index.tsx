import React, { FC } from "react";
import Card from "../Card";
import "./index.css";

interface IProps {
  data: {
    ID: number;
    SKU: string;
    Name: string;
    Price: string;
    PSAttribute: string;
    PType: string;
  }[];
}

const CardList: FC<IProps> = ({ data }) => {
  return (
    <div className="cardlist_container">
      {data.map((e) => {
        return (
          <div key={e.ID}>
            <Card ID={e.ID} SKU={e.SKU} Name={e.Name} Price={e.Price} PSAttribute={e.PSAttribute} PType={e.PType} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
