import React, { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { CartContext } from "./CartContext";

const fakeData = {
  firstName: "",
  lastName: "",
  age: null,
};

function App() {
  const [data, setData] = useState(fakeData);
  return (
    <CartContext.Provider value={{ data, setData }}>
      <div className="App">
        <Counter></Counter>
      </div>
    </CartContext.Provider>
  );
}
export default App;
