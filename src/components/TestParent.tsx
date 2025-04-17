import React, { useCallback, useState } from "react";
import TestChild from "./TestChild";

const TestParent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleTest = useCallback(() => {
    console.log("clicked");
  }, []);
  return (
    <div>
      <TestChild handleTest={handleTest} />
      <button onClick={handleVisibility}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible ? <>🚀🚀</> : ""}
    </div>
  );
};

export default TestParent;
