import React from "react";
import NotificationAlert from "../UserMessageCard/UserMessageCard";

interface Props {
  containerStyles?: React.CSSProperties;
  imageStyles?: React.CSSProperties;
}

const HomeNotificationAlert: React.FC<Props> = ({
  containerStyles = {},
  imageStyles = {},
}) => {
  return (
    <div
      className="home-left-notification-alert"
      style={{ ...containerStyles }}
    >
      <NotificationAlert
        name="Get notified of new messages"
        profilePic="https://cdn4.iconfinder.com/data/icons/symbol-blue-set-1/100/Untitled-2-28-512.png"
        message="Turn on desktop notifications"
        imageStyles={{
          height: "30px",
          width: "30px",
          backgroundColor: "white",
          padding: "10px",
          opacity: "0.7",
          ...imageStyles,
        }}
      />
    </div>
  );
};

export default HomeNotificationAlert;
