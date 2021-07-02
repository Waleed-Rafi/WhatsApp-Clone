import React from "react";
import "./UserMessageCard.css";

interface Props {
  profilePic?: string;
  name: string;
  message: string;
  containerStyles?: React.CSSProperties;
  active?: string;
}

const UserMessageCard: React.FC<Props> = ({
  profilePic,
  name,
  message,
  containerStyles = {},
  active = "",
}) => {
  return (
    <div
      className={"user-message-card-container" + active}
      style={{ ...containerStyles }}
    >
      <div className="user-message-card-left-container">
        <img
          className="user-message-card-profile-pic"
          src={profilePic}
          alt=""
        />
      </div>
      <div className="user-message-card-right-container">
        <div className="user-message-card-name">{name}</div>
        <div className="user-message-card-message">{message}</div>
      </div>
    </div>
  );
};

export default UserMessageCard;
