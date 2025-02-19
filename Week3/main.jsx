// Main.jsx (Updated to use separate task files)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Task1 from "./Task1.jsx";
import Task2 from "./Task2.jsx";
import Task3 from "./Task3.jsx";
import Task4 from "./Task4.jsx";
import Task5 from "./Task5.jsx";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-lg w-full space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <Task1 />
        <Task2 />
        <Task3 name="John Doe" email="john@example.com" />
        <Task4 />
        <Task5 />
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);