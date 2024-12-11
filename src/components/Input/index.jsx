import React from "react";
import "./index.css";

function Input(props) {
  const {
    type = "text",
    placeholder = "",
    value,
    onChange,
    disabled = false,
    label,
    danger = false,
  } = props;

  const inputClassName = `my-input ${danger ? "my-input--danger" : ""}`;

  const labelClassName = `my-label ${danger ? "my-label--danger" : ""}`;

  return (
    <div className="input-container">
      {label && <label className={labelClassName}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={inputClassName}
      />
    </div>
  );
}

export default Input;
