import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./FirstPage.css";

const FirstPage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    const response = await fetch(
      `http://localhost:5000/fibonacci?input=${inputValue}`,
      { mode: "cors" }
    );
    const data = await response.json();
    localStorage.setItem("responseData", JSON.stringify(data));
    window.location.href = "/result";
  };

  return (
    <div className="form-container">
        <label className="input-label">
          Input Number:
          <input
            type="number"
            className="input-val"
            value={inputValue}
            onChange={handleChange}
          />
        </label>
        <Button className="submit-button" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
    </div>
  );
};

export default FirstPage;
