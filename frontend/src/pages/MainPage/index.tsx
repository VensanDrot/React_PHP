import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardList from "../../components/CardList";
import "./index.css";

type IResult = {
  ID: number;
  SKU: string;
  Name: string;
  Price: string;
  PSAttribute: string;
  PType: string;
};

const MainPage = () => {
  let arr: Array<string> = [];
  const [result, setResult] = useState<IResult[]>([]);
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
    if (arr.includes(event.currentTarget.id)) {
      arr.splice(arr.indexOf(event.currentTarget.id), 1);
    } else {
      arr.push(event.currentTarget.id);
    }
  };

  useEffect(() => {
    fetch("http://backend.ua/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ action: 1 }),
    })
      .then((Response) => Response.json())
      .then((Response) => {
        setResult(Response);
      });
  }, []);

  console.log(result);

  return (
    <div>
      <div className="top_part">
        <h1>Product List</h1>
        <div className="btn_holder">
          <Link to="/add-product">
            <button className="btn">ADD</button>
          </Link>
          <button className="btn" id="delete-product-btn">
            MASS DELETE
          </button>
        </div>
      </div>
      <CardList data={result} handler={handler} />
    </div>
  );
};

export default MainPage;
