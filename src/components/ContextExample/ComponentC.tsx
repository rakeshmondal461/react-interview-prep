import ComponentD from "./ComponentD";

const ComponentC = () => {
  return (
    <div style={{ padding: 6, backgroundColor: "blue" }}>
      ComponentC
      <ComponentD />
    </div>
  );
};

export default ComponentC;
