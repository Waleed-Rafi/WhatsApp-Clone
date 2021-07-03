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
        profilePic="https://cdn.iconscout.com/icon/free/png-256/notifications-off-1781421-1518496.png"
        message="Turn on desktop notifications"
        imageStyles={{
          backgroundColor: "white",
          padding: "1px",
          opacity: "0.7",
          ...imageStyles,
        }}
      />
    </div>
  );
};

export default HomeNotificationAlert;
