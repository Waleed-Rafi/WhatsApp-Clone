import React from "react";
import "./AppInput.css";

interface Props {
  inputType?: string;
  inputContainerStyles?: React.CSSProperties;
  inputStyles?: React.CSSProperties;
  name?: string;
  placeholder?: string;
  value: string;
  isRequired?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppInput: React.FC<Props> = ({
  inputType = "text",
  inputContainerStyles = {},
  inputStyles = {},
  name = "",
  placeholder = "placeholder",
  value,
  isRequired = false,
  onChange,
}) => {
  return (
    <div className="app-input-container" style={{ ...inputContainerStyles }}>
      <input
        className="app-input-field"
        name={name}
        type={inputType}
        value={value}
        style={{ ...inputStyles }}
        placeholder={placeholder}
        required={isRequired}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default AppInput;
