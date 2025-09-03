import React from "react";

export default function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  options = [],
  selectedValues = [],
  toggleArrayValue,
  min,
  max,
  step,
  name,
  disabled = false,
  required = false,
  accept
}) {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}

      {/* Input padrão */}
      {(type === "text" || type === "number" || type === "date" || type === "email" || type === "password") && (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          required={required}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      )}

      {/* Textarea */}
      {type === "textarea" && (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          required={required}
          rows={4}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      )}

      {/* Range */}
      {type === "range" && (
        <>
          <input
            type="range"
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            step={step}
            className="w-full accent-indigo-600"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{min}</span>
            <span>{value}</span>
          </div>
        </>
      )}

      {/* Select */}
      {type === "select" && (
        <select
          value={value}
          onChange={onChange}
          name={name}
          disabled={disabled}
          required={required}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {/* CheckboxGroup */}
      {type === "checkboxGroup" && (
        <div className="space-y-2">
          {options.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedValues.includes(opt.value)}
                onChange={() => toggleArrayValue(selectedValues, opt.value)}
                className="accent-indigo-600"
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}

      {/* Checkbox individual */}
      {type === "checkbox" && (
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => onChange(e)}
            name={name}
            disabled={disabled}
            className="accent-indigo-600"
          />
          {label}
        </label>
      )}

      {/* Radio */}
      {type === "radio" && (
        <div className="space-y-2">
          {options.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2">
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={onChange}
                className="accent-indigo-600"
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}

      {type === "file" && (
        <input
          type="file"
          onChange={onChange}
          name={name}
          disabled={disabled}
          required={required}
          accept={accept}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      )}
    </div>
  );
}
