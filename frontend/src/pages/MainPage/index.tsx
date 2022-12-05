import React from "react";
import { Link } from "react-router-dom";
import CardList from "../../components/CardList";
import "./index.css";

const MainPage = () => {
  const data = [
    {
      ID: 123,
      SKU: "1fr-321-dsa",
      Name: "Chair",
      Price: "1234321",
      PSAttribute: "128mb",
      PType: "disk",
    },
    {
      ID: 13,
      SKU: "1fr-321-dsa",
      Name: "Chip&Dail",
      Price: "1234321",
      PSAttribute: "128mb",
      PType: "disk",
    },
    {
      ID: 1,
      SKU: "1fr-321-dsa",
      Name: "Disk",
      Price: "1234321",
      PSAttribute: "128mb",
      PType: "disk",
    },
    {
      ID: 1323,
      SKU: "1fr-321-dsa",
      Name: "Chair",
      Price: "321",
      PSAttribute: "128mb",
      PType: "disk",
    },
  ];

  const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.id);
  };

  return (
    <div>
      <div className="top_part">
        <Link className="btn" to="/add-product">
          ADD
        </Link>
        <button className="btn">MASS DELETE</button>
      </div>
      <CardList data={data} handler={handler} />
    </div>
  );
};

export default MainPage;
