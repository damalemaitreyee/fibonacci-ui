import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./FirstPage.css";

const FirstPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState({});

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch(
      `http://localhost:5000/fibonacci?input=${inputValue}`,
      { mode: "cors" }
    );
    const data = await response.json();
    console.log("Data Is:" + data);
    //setResponseData(data);
    localStorage.setItem("responseData", JSON.stringify(data));
    window.location.href = "/result";
  };

  // useEffect(() => {

  // }, [responseData]);

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit} className="signup-form">
        <label className="input-label">
          Input Number:
          <input
            type="number"
            className="input-val"
            value={inputValue}
            onChange={handleChange}
          />
        </label>
        <Button className="submit-button" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FirstPage;
