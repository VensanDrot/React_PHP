import React, { SetStateAction, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import InputComponent from "../../components/InputComponent";
import { InputType } from "zlib";
import { send } from "process";

const CreatePage = () => {
  const navigate = useNavigate();
  //sending
  const [sending, setSending] = useState(false);
  // Error VARIABLES
  const [skuError, setSkuError] = useState("");
  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [errorWidth, setErrorWidth] = useState("");
  const [errorHeight, setErrorHeight] = useState("");
  const [errorLength, setErrorLength] = useState("");
  const [errorSize, setErrorSize] = useState("");
  const [errorWeight, setErrorWeight] = useState("");
  // Data Variables
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [length, setLength] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");

  // Save Handler

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

  //For adaptire component
  const variableHandler = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<SetStateAction<string>>) => {
    setter(e.target.value);
  };

  // Input data for a component
  const dataFurniture = [
    {
      id: "height",
      title: "Height",
      input: "number",
      variable: height,
      variableSetter: setHeight,
      errorVariable: errorHeight,
      errorVariableSetter: setErrorHeight,
    },
    {
      id: "width",
      title: "Width",
      input: "number",
      variable: width,
      variableSetter: setWidth,
      errorVariable: errorWidth,
      errorVariableSetter: setErrorWeight,
    },
    {
      id: "length",
      title: "Length",
      input: "number",
      variable: length,
      variableSetter: setLength,
      errorVariable: errorLength,
      errorVariableSetter: setErrorLength,
    },
  ];

  const dataDVD = [
    {
      id: "size",
      title: "Size(MB)",
      input: "number",
      variable: size,
      variableSetter: setSize,
      errorVariable: errorSize,
      errorVariableSetter: setErrorSize,
    },
  ];

  const dataBook = [
    {
      id: "weight",
      title: "Weight(KG)",
      input: "number",
      variable: weight,
      variableSetter: setWeight,
      errorVariable: errorWeight,
      errorVariableSetter: setErrorWeight,
    },
  ];

  // Type of the porduct handler
  const changeHandler = () => {
    if (type === "BOOK") {
      return <InputComponent variableHandler={variableHandler} data={dataBook} />;
    } else if (type === "DVD") {
      return <InputComponent variableHandler={variableHandler} data={dataDVD} />;
    } else if (type === "Furniture") {
      return <InputComponent variableHandler={variableHandler} data={dataFurniture} />;
    }
  };

  // Handle the error
  const specialChecker = (variable: string, errorSetter: React.Dispatch<SetStateAction<string>>, num: number) => {
    if (variable.trim().length === 0 || !variable) {
      errorSetter("Please, submit required data");
      return ++num;
    } else {
      return num;
    }
  };

  // Number checker
  const specialNumberChecker = (variable: string, errorSetter: React.Dispatch<SetStateAction<string>>, num: number) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    if (variable.trim().length === 0 || !variable) {
      errorSetter("Please, submit required data");
      return ++num;
    } else if (Number(variable) <= 0 || specialChars.test(variable)) {
      errorSetter("Please, provide the data of indicated type");
      return ++num;
    } else {
      return num;
    }
  };

  //send function
  const sendThis = (num: number) => {
    if (num === 0) {
      let at = "";
      switch (type) {
        case "BOOK":
          at = weight;
          fetchFunction(at);
          break;

        case "DVD":
          at = size;
          fetchFunction(at);
          break;

        case "Furniture":
          at = `${height} x ${width} x ${length}`;
          fetchFunction(at);
          break;
      }
    } else {
      console.log("here");
      setSending(false);
    }
  };

  //error set to empty
  const setNull = () => {
    setNameError("");
    setSkuError("");
    setPriceError("");
    setTypeError("");
    setErrorWidth("");
    setErrorHeight("");
    setErrorLength("");
    setErrorWeight("");
    setErrorSize("");
    setName("");
    setSize("");
    setSku("");
    setPrice("");
    setWidth("");
    setLength("");
    setHeight("");
    setPrice("");
    setWeight("");
  };

  // fetch
  const fetchFunction = (atribute: string | null) => {
    fetch("http://backend.ua/newcard", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      body: "body=" + JSON.stringify({ sku: sku, name: name, price: price, type: type, atribute: atribute }),
    })
      .then((Response) => Response.text())
      .then((Response) => {
        console.log(Response);
        if (Response === "Success") {
          setNull();
          navigate("/");
        } else {
          setSending(false);
        }
      });
  };

  // save
  const save = () => {
    setSending(true);
    let num = 0;
    // destroy errors
    setNameError("");
    setSkuError("");
    setPriceError("");
    setTypeError("");
    setErrorWidth("");
    setErrorHeight("");
    setErrorLength("");
    setErrorWeight("");
    setErrorSize("");
    // check for erross
    num = specialChecker(sku, setSkuError, num);
    num = specialChecker(name, setNameError, num);
    num = specialNumberChecker(price, setPriceError, num);

    if (type === "") {
      num++;
      setTypeError("Please, submit required data");
    }
    if (type === "BOOK") {
      num = specialNumberChecker(weight, setErrorWeight, num);
    } else if (type === "DVD") {
      num = specialNumberChecker(size, setErrorSize, num);
    } else if (type === "Furniture") {
      num = specialNumberChecker(length, setErrorLength, num);
      num = specialNumberChecker(width, setErrorWidth, num);
      num = specialNumberChecker(height, setErrorHeight, num);
    }
    if (sku !== "" || skuError !== "") {
      fetch("http://backend.ua/check", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
        }),
        body: "SKU=" + sku,
      })
        .then((Response) => Response.json())
        .then((Response) => {
          if (Response !== null) {
            setSkuError("SKU can not be repeated");
            num++;
            setSending(false);
          } else {
            sendThis(num);
          }
        });
    }
  };

  return (
    <div>
      <div className="top_part">
        <h1>Product Add</h1>
        <div className="btn_holder">
          <button className={`btn ${sending ? "disabled" : ""}`} onClick={save} disabled={sending ? true : false}>
            {sending ? <img src="https://media.tenor.com/5o2p0tH5LFQAAAAj/hug.gif" className="img_btn" /> : "Save"}
          </button>
          <Link to={sending ? "#" : "/"}>
            <button className={`btn ${sending ? "disabled" : ""}`} onClick={setNull} disabled={sending ? true : false}>
              Cancel
            </button>
          </Link>
        </div>
      </div>

      <form action="" id="product_form">
        <label className="error">{skuError}</label>
        <div className="product_form">
          <label>SKU: </label>
          <input onChange={skuHandler} value={sku} type="text" id="sku" placeholder="SKU" maxLength={254} />
        </div>
        <label className="error">{nameError}</label>
        <div className="product_form">
          <label>Name: </label>
          <input onChange={nameHandler} value={name} type="text" id="name" placeholder="NAME" maxLength={254} />
        </div>
        <label className="error">{priceError}</label>
        <div className="product_form">
          <label>Price($): </label>
          <input
            onChange={priceHandler}
            value={price}
            min={0}
            type="number"
            id="price"
            placeholder="PRICE"
            maxLength={254}
          />
        </div>
        <label className="error">{typeError}</label>
        <div className="product_form">
          <label>Type Switcher</label>
          <select onChange={typeHandler} id="productType" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Product Type
            </option>
            <option value="BOOK">Book</option>
            <option value="DVD">DVD</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>
        {changeHandler()}
      </form>
    </div>
  );
};

export default CreatePage;
