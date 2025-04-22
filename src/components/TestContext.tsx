import { AppProvider } from "../utils/AppContext";
import ComponentA from "./ContextExample/ComponentA";

const TestContext = () => {
  return (
    <div>
      {" "}
      <AppProvider>
        <ComponentA />
      </AppProvider>
    </div>
  );
};

export default TestContext;
