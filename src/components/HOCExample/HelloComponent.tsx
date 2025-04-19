// src/components/HelloComponent.jsx
const HelloComponent = ({ greeting }: any) => {
  return (
    <>
    <div style={{backgroundColor:"white"}}>
      <h2>{greeting}</h2>
      This is Test component
    </div>
    </>
  );
};

export default HelloComponent;
