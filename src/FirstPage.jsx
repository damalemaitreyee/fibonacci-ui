import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./FirstPage.css";

const FirstPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    if (inputValue.length > 0 && parseInt(inputValue) >0) {
      try {
        const response = await fetch(
          `http://localhost:5000/fibonacci?input=${inputValue}`,
          { mode: "cors" }
        );
        const data = await response.json();
        localStorage.setItem("responseData", JSON.stringify(data));
        window.location.href = "/result";
      } catch (error) {
        console.error("Error fetching data:", error);
        localStorage.setItem("responseData", JSON.stringify(error));
        window.location.href = "/result";
      }
    } else {
      setErrorMessage("Input cannot be blank/ zero/ negative");
    }
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
      {errorMessage && <div className="error"> {errorMessage} </div>}
      <Button className="submit-button" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default FirstPage;
