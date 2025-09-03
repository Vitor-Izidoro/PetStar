import React from "react";

const Select = ({ label, value, onChange, options = [], className = "" }) => (
  <div className="mb-4">
    {label && <label className="block font-semibold text-gray-700 mb-1">{label}</label>}
    <select
      value={value}
      onChange={onChange}
      className={`w-full border rounded-lg px-3 py-2 ${className}`}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

export default Select;
