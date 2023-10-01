import React, { ChangeEvent } from "react";
import states from "../../app/states.json";

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
      <div>
        <select
          className="w-[400px] h-[60px]"
          value={selectedState}
          onChange={onDropdownChange}
        >
          {states.map((state) => (
            <option className="text-black" value={state.name} key={state.name}>
              {state.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
