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
  const [arr, setArr] = useState<Array<string>>([]);
  const [deleting, setDeleting] = useState(false);
  const [length, setLength] = useState(true);
  const [result, setResult] = useState<IResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://backend.ua/read", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((Response) => Response.json())
      .then((Response) => {
        setResult(Response);
        if (result.length !== 0 || Response !== "Fail") {
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  }, []);

  const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let index = event.currentTarget.id;
    if (arr.includes(event.currentTarget.id)) {
      //arr.splice(arr.indexOf(event.currentTarget.id), 1);
      setArr((prev) => prev.filter((each) => each !== index));
    } else {
      //arr.push(event.currentTarget.id);
      setArr((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    if (arr.length !== 0) {
      setLength(false);
    } else setLength(true);
  }, [arr]);

  const deleteHandler = () => {
    const deleteElements = arr.join(",");
    fetch("http://backend.ua/delete", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      body: "deleteElements=" + deleteElements,
    })
      .then((Response) => Response.text())
      .then((Response) => {
        getData();
      });
    getData();
  };

  const getData = () => {
    fetch("http://backend.ua/read", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((Response) => Response.json())
      .then((Response) => {
        setResult(Response);
      });
    return result;
  };

  return (
    <div>
      <div className="top_part">
        <h1>Product List</h1>
        <div className="btn_holder">
          <Link to="/add-product">
            <button className="btn">ADD</button>
          </Link>
          <button
            onClick={deleteHandler}
            className={`btn ${length ? "disabled" : ""}`}
            id="delete-product-btn"
            disabled={length ? true : false}
          >
            MASS DELETE
          </button>
        </div>
      </div>
      <CardList loading={loading} data={result} handler={handler} />
    </div>
  );
};

export default MainPage;
