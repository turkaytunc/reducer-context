import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { InputComponet } from "./InputComponet";

export const Counter = () => {
  const cart = useContext(CartContext);
  console.log(cart.data);

  return (
    <div>
      <InputComponet
        type="text"
        value={cart}
        placeholder="First Name"
        valueToChange="firstName"
        dispatch={cart.dispatch}
      />
      <InputComponet
        type="text"
        value={cart}
        placeholder="Last Name"
        valueToChange="lastName"
        dispatch={cart.dispatch}
      />
      <InputComponet
        type="number"
        value={cart}
        placeholder="Age"
        valueToChange="age"
        dispatch={cart.dispatch}
      />
    </div>
  );
};
