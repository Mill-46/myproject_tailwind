import "./App.css";
import React from "react";
import "tailwindcss/tailwind.css";
import FormPage from "./components/FormPage";

const App = () => {
  return (
    <div className="App bg-white h-screen flex justify-center items-center">
      <FormPage />
    </div>
  );
};

export default App;
