import React from "react";

interface Props {
  containerStyles?: React.CSSProperties;
  messageLeftStyles?: React.CSSProperties;
  messageRightStyles?: React.CSSProperties;
}

const HomeMessageDetails: React.FC<Props> = ({
  containerStyles = {},
  messageLeftStyles = {},
  messageRightStyles = {},
}) => {
  return (
    <div
      className="home-message-detail-container"
      style={{ ...containerStyles }}
    >
      <div
        className="home-message-detail-left"
        style={{ ...messageLeftStyles }}
      >
        Hello
      </div>
      <div
        className="home-message-detail-right"
        style={{ ...messageRightStyles }}
      >
        Hi
      </div>
    </div>
  );
};

export default HomeMessageDetails;
