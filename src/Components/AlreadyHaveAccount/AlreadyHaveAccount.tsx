import React from "react";
import { Link } from "react-router-dom";
import "./AlreadyHaveAccount.css";
interface Props {
  title: string;
  containerStyles?: React.CSSProperties;
  routeTo?: string;
}
const AlreadyHaveAccount: React.FC<Props> = ({
  title,
  containerStyles = {},
  routeTo = "/",
}) => {
  return (
    <div className="AHC-container" style={{ ...containerStyles }}>
      <Link to={routeTo}>{title}</Link>
    </div>
  );
};

export default AlreadyHaveAccount;
