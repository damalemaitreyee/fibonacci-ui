import "./App.css";
import FirstPage from "./FirstPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SecondPage from "./SecondPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="heading">My Fibonacci App</h1>
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="result" element={<SecondPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
