import React from "react";

interface InputFieldProps {
  certi: string;
}

const InputField: React.FC<InputFieldProps> = ({certi}) => {
  return (
    <div className="mb-3">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {certi}
      </label>
      <input
        className="shadow appearance-none rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id={certi}
        type="text"
        placeholder=""
      />
    </div>
  );
};

export default InputField;
