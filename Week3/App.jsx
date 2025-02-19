import React from "react";

// 1. TextUpdater Component
const TextUpdater = () => {
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

// 2. Form with Input and Submit Button
const InputForm = () => {
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

// 3. UserCard Component
const UserCard = ({ name, email }) => {
  return (
    <div className="border border-gray-700 bg-gray-800 p-5 rounded-xl shadow-lg w-64 text-center">
      <h2 className="text-2xl font-bold text-blue-400">{name}</h2>
      <p className="text-gray-400">{email}</p>
    </div>
  );
};

// 4. Button Component
const CustomButton = () => {
  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
      onClick={() => console.log("Button clicked!")}
    >
      Click Me
    </button>
  );
};

// 5. LoginForm Component
const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto">
      <input
        type="email"
        className="border border-gray-600 bg-gray-700 p-3 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border border-gray-600 bg-gray-700 p-3 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 w-full">
        Login
      </button>
    </form>
  );
};

// App Component
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-lg w-full space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <TextUpdater />
        <InputForm />
        <UserCard name="John Doe" email="john@example.com" />
        <CustomButton />
        <LoginForm />
      </div>
    </div>
  );
};

export default App;