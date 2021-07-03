import React from "react";
import RegisterProfile from "../RegisterProfile/RegisterProfile";
import "./UserMessageCard.css";

interface Props {
  profilePic?: string;
  name: string;
  message: string;
  containerStyles?: React.CSSProperties;
  imageStyles?: React.CSSProperties;
  active?: string;
}

const UserMessageCard: React.FC<Props> = ({
  profilePic,
  name,
  message,
  containerStyles = {},
  imageStyles = {},
  active = "",
}) => {
  return (
    <div
      className={"user-message-card-container" + active}
      style={{ ...containerStyles }}
    >
      <div className="user-message-card-left-container">
        <RegisterProfile
          imageSource={profilePic}
          imageStyles={{
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            boxShadow: "none",
            ...imageStyles,
          }}
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
