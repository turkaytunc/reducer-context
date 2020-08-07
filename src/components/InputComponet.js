import React from "react";

export const InputComponet = ({ type, value, placeholder, valueToChange }) => {
  return (
    <>
      <input
        type={`${type}`}
        value={`${value.data[valueToChange]}`}
        placeholder={`${placeholder}`}
        onChange={(e) =>
          value.setData({ ...value.data, [valueToChange]: e.target.value })
        }
      />
    </>
  );
};
