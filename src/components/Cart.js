import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { InputComponent } from "./InputComponent";

export const Cart = () => {
  const cart = useContext(CartContext);
  console.log(cart.data);

  return (
    <div>
      <InputComponent
        type="text"
        value={cart}
        placeholder="First Name"
        valueToChange="firstName"
        dispatch={cart.dispatch}
      />
      <InputComponent
        type="text"
        value={cart}
        placeholder="Last Name"
        valueToChange="lastName"
        dispatch={cart.dispatch}
      />
      <InputComponent
        type="number"
        value={cart}
        placeholder="Age"
        valueToChange="age"
        dispatch={cart.dispatch}
      />
    </div>
  );
};
