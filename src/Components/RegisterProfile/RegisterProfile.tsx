import React from "react";
import "./RegisterProfile.css";

interface Props {
  imageSource?: string;
  containerStyles?: React.CSSProperties;
  imageStyles?: React.CSSProperties;
}

const RegisterProfile: React.FC<Props> = ({
  imageSource = "https://kalaivf.com/wp-content/uploads/2021/01/profile-placeholder.jpg",
  containerStyles = {},
  imageStyles = {},
}) => {
  return (
    <div className="register-profile-container" style={{ ...containerStyles }}>
      <img
        src={imageSource}
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
