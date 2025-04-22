import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div style={{ padding: 6, backgroundColor: "green" }}>
      ComponentB
      <ComponentC />
    </div>
  );
};

export default ComponentB;
