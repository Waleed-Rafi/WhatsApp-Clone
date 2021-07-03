import React from "react";
import UserMessageCard from "../UserMessageCard/UserMessageCard";

interface Props {
  containerStyles?: React.CSSProperties;
  imageStyles?: React.CSSProperties;
  username?: string;
  message?: string;
  profilePic?: string;
}

const HomeMessagesHeader: React.FC<Props> = ({
  containerStyles = {},
  imageStyles = {},
  username = "",
  message = "",
  profilePic,
}) => {
  return (
    <div className="home-right-header">
      <UserMessageCard
        containerStyles={{
          position: "relative",
          height: "67%",
          ...containerStyles,
        }}
        imageStyles={{
          position: "relative",
          height: "45px",
          width: "45px",
          ...imageStyles,
        }}
        message={message}
        name={username}
        profilePic={profilePic}
      />
    </div>
  );
};

export default HomeMessagesHeader;
