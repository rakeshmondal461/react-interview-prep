import { ChangeEvent } from "react";
import { useBackground } from "../../utils/AppContext";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const { changeBackground } = useBackground();
  const handleSelectChanger = (e: ChangeEvent<HTMLSelectElement>) => {
    const optionValue = e.target.value;
    changeBackground(optionValue?.toLowerCase());
  };
  return (
    <div style={{ padding: 6, backgroundColor: "red" }}>
      ComponentA
      <select onChange={handleSelectChanger}>
      <option value={"White"}>-------Select--------</option>
        <option value={"Tomato"}>Tomato</option>
        <option value={"Orange"}>Orange</option>
        <option value={"Gray"}>Gray</option>
        <option value={"Violet"}>Violet</option>
      </select>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
