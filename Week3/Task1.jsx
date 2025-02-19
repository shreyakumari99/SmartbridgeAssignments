// Task1.jsx (TextUpdater Component)
import React from "react";

const Task1 = () => {
  const [text, setText] = React.useState("");

  return (
    <div className="p-4">
      <input
        type="text"
        className="border border-gray-600 bg-gray-700 p-3 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2 text-lg text-gray-300">{text}</p>
    </div>
  );
};

export default Task1;