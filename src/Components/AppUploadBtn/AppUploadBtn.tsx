import React from "react";
import "./AppUploadBtn.css";

interface Props {
  title?: string;
  containerStyles?: React.CSSProperties;
  type?: string;
  name?: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppUploadBtn: React.FC<Props> = ({
  title = "Upload",
  containerStyles = {},
  type = "file",
  name = "",
  isRequired = false,
  onChange,
}) => {
  return (
    <div style={{ ...containerStyles }}>
      <label className="upload">
        {title}
        <input
          hidden
          name={name}
          type={type}
          required={isRequired}
          accept="image/png, image/jpeg"
          onChange={(e) => (onChange ? onChange(e) : null)}
        />
      </label>
    </div>
  );
};

export default AppUploadBtn;
