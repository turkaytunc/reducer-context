import React, { useReducer } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { CartContext } from "./CartContext";

const fakeData = {
  firstName: "",
  lastName: "",
  age: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.value };
    case "lastName":
      return { ...state, lastName: action.value };
    case "age":
      return { ...state, age: action.value };
    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(reducer, fakeData);
  return (
    <CartContext.Provider value={{ data, dispatch }}>
      <div className="App">
        <Counter></Counter>
      </div>
    </CartContext.Provider>
  );
}
export default App;
