import React from "react";

const CheckboxGroup = ({ label, options = [], selectedValues = [], onChange }) => (
  <div className="mb-4">
    {label && <label className="block font-semibold text-gray-700 mb-1">{label}</label>}
    <div className="space-y-2">
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedValues.includes(opt.value)}
            onChange={() => onChange(opt.value)}
          />
          {opt.label}
        </label>
      ))}
    </div>
  </div>
);

export default CheckboxGroup;
