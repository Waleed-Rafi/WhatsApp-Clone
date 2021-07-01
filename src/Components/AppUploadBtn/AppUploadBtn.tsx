import React from "react";
import "./AppUploadBtn.css";

interface Props {
  title?: string;
  containerStyles?: React.CSSProperties;
}

const AppUploadBtn: React.FC<Props> = ({
  title = "Upload",
  containerStyles = {},
}) => {
  return (
    <div style={{ ...containerStyles }}>
      <label className="upload">
        {title}
        <input hidden type="file" accept="image/png, image/jpeg" />
      </label>
    </div>
  );
};

export default AppUploadBtn;
