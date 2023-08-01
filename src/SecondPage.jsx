import React from "react";
import { useEffect, useState } from "react";

function SecondPage() {
  const [data, setData] = useState(localStorage.getItem("responseData"));

  useEffect(() => {
    // Retrieve the data from localStorage
    const storedData = localStorage.getItem("responseData");
    
    console.log("Data in storage - " + storedData);
    if (storedData) {
      // Clear the data from localStorage once it's retrieved to avoid it being reused accidentally
      setData(storedData);
      localStorage.removeItem("responseData");
    }
  }, [data]);
  return (
    <div>
      <h3>
        The Fibonacci sequence is <span>{data}</span>
      </h3>
    </div>
  );
}

export default SecondPage;
