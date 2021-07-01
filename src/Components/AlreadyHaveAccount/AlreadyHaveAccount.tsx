import React from "react";
import "./AlreadyHaveAccount.css";
interface Props {
  title: string;
  containerStyles?: React.CSSProperties;
}
const AlreadyHaveAccount: React.FC<Props> = ({
  title,
  containerStyles = {},
}) => {
  return (
    <div className="AHC-container" style={{ ...containerStyles }}>
      <a href="/">{title}</a>
    </div>
  );
};

export default AlreadyHaveAccount;
