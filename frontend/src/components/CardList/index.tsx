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
  loading: boolean;
}

const CardList: FC<IProps> = ({ data, handler, loading }) => {
  return (
    <div className="cardlist_container">
      <div className="image" hidden={loading ? false : true}>
        <img
          src="https://cdn.dribbble.com/users/2479507/screenshots/8678351/media/d336cea07ca3557d6bf17376eb7b68af.gif"
          alt="..."
        />
      </div>
      {data.map((e) => {
        return (
          <div key={Number(e.ID)}>
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
