import React from "react";

const CustomButton = ({ name, onClick }) => {
  return (
    <>
      <button
        className="min-w-[100px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
};

export default CustomButton;
