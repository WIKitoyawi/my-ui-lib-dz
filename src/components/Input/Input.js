import React from "react";
import "./index.css";

function Input({ type = "text", placeholder, value, onChange, disabled, label, danger }) {
  const inputClass = `my-input ${danger ? "my-input--danger" : ""}`;
  const labelClass = danger ? "my-label my-label--danger" : "my-label";

  return (
    <div className="input-wrapper">
      {label && <label className={labelClass}>{label}</label>}
      <input
        type={type}
        className={inputClass}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;