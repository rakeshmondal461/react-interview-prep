import React from "react";

const TestChild = ({ handleTest }: any) => {
  console.log("Test child rendered");
  return (
    <div>
      TestChild
    </div>
  );
};

export default React.memo(TestChild);
