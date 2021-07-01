import React from "react";
import "./Card.css";

interface Props {
  containerStyles?: React.CSSProperties;
}

const Card: React.FC<Props> = ({ containerStyles, children }) => {
  return (
    <div className="app-card-container" style={{ ...containerStyles }}>
      {children}
    </div>
  );
};

export default Card;
