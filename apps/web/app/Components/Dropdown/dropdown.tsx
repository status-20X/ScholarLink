import React, { ChangeEvent } from "react";
import states from "../../states.json";

interface DropdownProps {
  selectedState: string;
  onDropdownChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  selectedState,
  onDropdownChange,
}) => {
  return (
    <>
      <select
        className="self-center w-[400px] h-[60px] px-3"
        value={selectedState}
        onChange={onDropdownChange}
      >
        {states.map((state) => (
          <option className="text-black" value={state.name} key={state.name}>
            {state.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
