// Task2.jsx (InputForm Component)
import React from "react";

const Task2 = () => {
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        className="border border-gray-600 bg-gray-700 p-3 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 mt-2 w-full">
        Submit
      </button>
    </form>
  );
};

export default Task2;