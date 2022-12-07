import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "../MainPage/index.css";

const CreatePage = () => {
  const [skuError, setSkuError] = useState("");
  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const skuHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSku(e.target.value);
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const priceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const typeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  return (
    <div>
      <div className="top_part">
        <h1>Product Add</h1>
        <div className="btn_holder">
          <button className="btn">Save</button>
          <Link to="/">
            <button className="btn">Cancel</button>
          </Link>
        </div>
      </div>

      <form action="" id="product_form">
        <label>SKU: </label>
        <input onChange={skuHandler} value={sku} type="text" id="sku" placeholder="SKU" />
        <label>Name: </label>
        <input onChange={nameHandler} value={name} type="text" id="name" placeholder="NAME" />
        <label>Price($): </label>
        <input onChange={priceHandler} value={price} type="number" id="price" placeholder="PRICE" />
        <label>Type Switcher</label>
        <select onChange={typeHandler} id="productType" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>
            Product Type
          </option>
          <option value="DVD">DVD</option>
          <option value="BOOK">Book</option>
          <option value="Furniture">Furniture</option>
        </select>
      </form>

      <div className="bottom">
        <h1>Scandiweb Test Assignment</h1>
      </div>
    </div>
  );
};

export default CreatePage;
