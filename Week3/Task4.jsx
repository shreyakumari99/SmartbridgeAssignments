// Task4.jsx (CustomButton Component)
import React from "react";

const Task4 = () => {
  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
      onClick={() => console.log("Button clicked!")}
    >
      Click Me
    </button>
  );
};

export default Task4;