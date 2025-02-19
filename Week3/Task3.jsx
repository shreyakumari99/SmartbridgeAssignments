// Task3.jsx (UserCard Component)
import React from "react";

const Task3 = ({ name, email }) => {
  return (
    <div className="border border-gray-700 bg-gray-800 p-5 rounded-xl shadow-lg w-64 text-center">
      <h2 className="text-2xl font-bold text-blue-400">{name}</h2>
      <p className="text-gray-400">{email}</p>
    </div>
  );
};

export default Task3;