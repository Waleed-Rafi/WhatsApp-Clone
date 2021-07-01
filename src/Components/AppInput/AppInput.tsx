import React from "react";
import "./AppInput.css";

interface Props {
  inputType?: string;
  inputContainerStyles?: React.CSSProperties;
  inputStyles?: React.CSSProperties;
  placeholder: string;
}

const AppInput: React.FC<Props> = ({
  inputType = "text",
  inputContainerStyles = {},
  inputStyles = {},
  placeholder,
}) => {
  return (
    <div className="app-input-container" style={{ ...inputContainerStyles }}>
      <input
        className="app-input-field"
        type={inputType}
        style={{ ...inputStyles }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default AppInput;
