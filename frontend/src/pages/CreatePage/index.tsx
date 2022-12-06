import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "../MainPage/index.css";

const CreatePage = () => {
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
        <input type="text" id="sku" placeholder="SKU" />
        <label>Name: </label>
        <input type="text" id="name" placeholder="NAME" />
        <label>Price: </label>
        <input type="text" id="price" placeholder="PRICE" />
        <label>Type Switcher</label>
        <select id="productType">
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
