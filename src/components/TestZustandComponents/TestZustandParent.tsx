import { useBearStore } from "../../store";
import TestZustandChild from "./TestZustandChild";
const TestZustandParent = () => {
  const increase = useBearStore((state) => state.increase);
  const reset = useBearStore((state) => state.reset);
  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
      <TestZustandChild />
    </div>
  );
};

export default TestZustandParent;
