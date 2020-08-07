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
      />
      <input
        type="text"
        value={cart.data.firstName}
        placeholder="FirstName"
        onChange={(e) =>
          cart.setData({ ...cart.data, firstName: e.target.value })
        }
      />
    </div>
  );
};
