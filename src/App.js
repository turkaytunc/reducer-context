import React, { useReducer } from "react";
import "./App.css";
import { Cart } from "./components/Cart";
import { CartContext } from "./CartContext";

const initialState = {
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
      return { ...state, age: parseInt(action.value) };
    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ data, dispatch }}>
      <div className="App">
        <Cart></Cart>
      </div>
    </CartContext.Provider>
  );
}
export default App;
