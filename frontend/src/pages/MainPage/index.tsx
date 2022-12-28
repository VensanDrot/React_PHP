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
  const gif = require("../../img/hug.gif");
  const [arr, setArr] = useState<Array<string>>([]);
  const [deleting, setDeleting] = useState(false);
  const [length, setLength] = useState(true);
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<IResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://scandiback.000webhostapp.com/read", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((Response) => Response.json())
      .then((Response) => {
        setResult(Response);
        if (result.length !== 0 || Response) {
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

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (arr.length !== 0) {
      setLength(false);
    } else setLength(true);
  }, [arr]);

  const getData = () => {
    fetch("https://scandiback.000webhostapp.com/read", {
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

  const deleteHandler = () => {
    setDeleting(true);
    const deleteElements = arr.join(",");
    fetch("https://scandiback.000webhostapp.com/delete", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      body: "deleteElements=" + deleteElements,
    })
      .then((Response) => Response.text())
      .then(() => {
        getData();
        setDeleting(false);
      });
    getData();
  };

  //search
  const searchFilter = (result: IResult[]) => {
    return result.filter((q) => {
      if (
        q.SKU.toLowerCase().includes(search.toLowerCase()) ||
        q.Name.toLowerCase().includes(search.toLowerCase()) ||
        q.PType.toLowerCase().includes(search.toLowerCase())
      )
        return q;
    });
  };

  return (
    <div>
      <div className="top_part">
        <h1>Product List</h1>
        <input type="text" onChange={searchHandler} value={search} placeholder="search(Type,Name)" className="search" />
        <div className="btn_holder">
          <Link to="/add-product">
            <button
              className="btn"
              onClick={() => {
                setSearch("");
              }}
            >
              ADD
            </button>
          </Link>
          <button
            onClick={deleteHandler}
            className={`btn ${length ? "disabled" : ""}`}
            id="delete-product-btn"
            disabled={length ? true : false}
          >
            {deleting ? <img src={gif} className="img_btn" /> : "MASS DELETE"}
          </button>
        </div>
      </div>
      <CardList loading={loading} data={searchFilter(result)} handler={handler} />
    </div>
  );
};

export default MainPage;
