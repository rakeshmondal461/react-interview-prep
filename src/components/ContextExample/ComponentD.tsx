import { useBackground } from "../../utils/AppContext";

const ComponentD = () => {
  const { background } = useBackground();
  return (
    <div style={{ padding: 6, backgroundColor: background }}>
      ComponentD
      <div>
        <h1>Current theme: {background}</h1>
      </div>
    </div>
  );
};

export default ComponentD;
