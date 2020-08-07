import React from "react";

export const InputComponet = ({ type, value, placeholder, valueToChange }) => {
  return (
    <>
      <input
        type={`${type}`}
        value={`${value}`}
        placeholder={`${placeholder}`}
        onChange={(e) =>
          cart.setData({ ...value, [valueToChange]: e.target.value })
        }
      />
    </>
  );
};
