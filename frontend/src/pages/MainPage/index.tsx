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
    {
      ID: 1332131223,
      SKU: "1fr-321-dsa",
      Name: "Chair",
      Price: "321",
      PSAttribute: "128mb",
      PType: "disk",
    },
    {
      ID: 1332123,
      SKU: "1fr-321-dsa",
      Name: "Chair",
      Price: "321",
      PSAttribute: "1x1x1",
      PType: "disk",
    },
  ];

  const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.id);
  };

  return (
    <div>
      <div className="top_part">
        <h1>Product List</h1>
        <div className="btn_holder">
          <button className="btn">
            <Link to="/add-product">ADD</Link>
          </button>
          <button className="btn">MASS DELETE</button>
        </div>
      </div>
      <CardList data={data} handler={handler} />
      <div className="bottom">
        <h1>Scandiweb Test Assignment</h1>
      </div>
    </div>
  );
};

export default MainPage;
