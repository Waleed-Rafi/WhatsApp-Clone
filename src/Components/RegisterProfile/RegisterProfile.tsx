import React from "react";
import "./RegisterProfile.css";

interface Props {
  imageSource?: FileList | string | null;
  alternateSource?: string;
  containerStyles?: React.CSSProperties;
  imageStyles?: React.CSSProperties;
}

const RegisterProfile: React.FC<Props> = ({
  imageSource,
  alternateSource = "https://kalaivf.com/wp-content/uploads/2021/01/profile-placeholder.jpg",
  containerStyles = {},
  imageStyles = {},
}) => {
  return (
    <div className="register-profile-container" style={{ ...containerStyles }}>
      <img
        src={
          typeof imageSource !== "string"
            ? imageSource?.length
              ? URL.createObjectURL(imageSource[0])
              : alternateSource
            : imageSource
        }
        alt="Profile"
        className="register-profile-image"
        style={{
          ...imageStyles,
        }}
      />
    </div>
  );
};

export default RegisterProfile;
