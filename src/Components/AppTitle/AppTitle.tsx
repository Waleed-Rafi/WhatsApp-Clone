import React from "react";
import Logo from "../../Assets/logo192.png";
import "./Apptitle.css";

interface Props {
  title?: string;
  logo?: boolean;
  containerStyles?: React.CSSProperties;
  titleStyles?: React.CSSProperties;
  logoStyles?: React.CSSProperties;
}

const AppTitle: React.FC<Props> = ({
  title = "WhatsApp Web",
  logo = true,
  containerStyles = {},
  titleStyles = {},
  logoStyles = {},
}) => {
  return (
    <div className="app-title-container" style={{ ...containerStyles }}>
      {logo && (
        <img
          src={Logo}
          alt="Logo"
          className="app-title-logo"
          style={{ ...logoStyles }}
        />
      )}
      <p className="app-title-heading" style={{ ...titleStyles }}>
        {title}
      </p>
    </div>
  );
};

export default AppTitle;
