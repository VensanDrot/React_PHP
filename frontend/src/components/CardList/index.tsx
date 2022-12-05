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
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardList: FC<IProps> = ({ data, handler }) => {
  return (
    <div className="cardlist_container">
      {data.map((e) => {
        return (
          <div key={e.ID}>
            <Card
              ID={e.ID}
              SKU={e.SKU}
              Name={e.Name}
              Price={e.Price}
              PSAttribute={e.PSAttribute}
              PType={e.PType}
              handler={handler}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
