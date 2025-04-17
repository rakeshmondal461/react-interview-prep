import React, { useCallback, useMemo, useState } from "react";
import CallbackChild from "./CallbackChild";

const CounterComponent = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const addNumber = () => {
    setNum1((prev) => prev + 1);
  };

  const multiply = () => {
    setNum2((prev) => (prev > 0 ? prev * 2 : 1 * 2));
  };

  function calculateEven() {
    console.log("function called..");
    return num1 % 2 === 0;
  }

  const isEven = useMemo(calculateEven, [num1]);

  function test() {
    setNum1((prev) => prev);
    console.log(isEven ? "Even" : "Odd");
  }

  const handleChildClick = useCallback(() => {
    console.log("Clicked! ✅✅");
  },[]);

  return (
    <div>
      <div>
        <button onClick={addNumber}>Add</button>{" "}
        <button onClick={test}>Test</button>
      </div>
      <div>The addition is : {num1}</div>
      <div>
        <b>{isEven ? "Even" : "Odd"}</b>
      </div>

      <div>
        <button onClick={multiply}>Multiply</button>
      </div>
      <div>The muliplication is : {num2}</div>
      <CallbackChild handleChildClick={handleChildClick} />
    </div>
  );
};

export default CounterComponent;
