import React from "react";

const CustomTextBox = ({ name, hintText, onChange }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        className="border appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={name}
        placeholder={hintText}
        onChange={onChange}
        required
    
      />
    </div>
  );
};

export default CustomTextBox;
