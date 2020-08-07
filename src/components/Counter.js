import React, { useContext } from "react";
import { CartContext } from "../CartContext";

export const Counter = () => {
  const cart = useContext(CartContext);

  return (
    <div>
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
