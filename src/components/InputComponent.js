import React from "react";

export const InputComponent = ({
  type,
  value,
  placeholder,
  valueToChange,
  dispatch,
}) => {
  return (
    <>
      <input
        type={`${type}`}
        value={`${value.data[valueToChange]}`}
        placeholder={`${placeholder}`}
        onChange={(e) =>
          dispatch({ type: valueToChange, value: e.target.value })
        }
      />
    </>
  );
};
