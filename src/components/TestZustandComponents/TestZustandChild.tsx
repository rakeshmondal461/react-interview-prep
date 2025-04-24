import { useBearStore } from "../../store";
const TestZustandChild = () => {
  const bears = useBearStore((state) => state.bears);
  return (
    <div>
      <h1>{bears} bears</h1>
    </div>
  );
};

export default TestZustandChild;
