import React from "react";
// It's a higher-order component that memoizes a functional component — 
// meaning it will skip re-rendering if the props haven't changed.
const CallbackChild = React.memo(({ handleChildClick }: any) => {
  console.log("Child rendered");
  return (
    <div>
      <button onClick={handleChildClick}> Click from child</button>
    </div>
  );
});

export default CallbackChild;
