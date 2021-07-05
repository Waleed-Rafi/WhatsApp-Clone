import React from "react";
import { useState } from "react";
import useScrollBottom from "../../hooks/useScrollToBottom";

interface Props {
  containerStyles?: React.CSSProperties;
  messageLeftStyles?: React.CSSProperties;
  messageRightStyles?: React.CSSProperties;
  chat: any;
}

const HomeMessageDetails: React.FC<Props> = ({
  containerStyles = {},
  messageLeftStyles = {},
  messageRightStyles = {},
  chat = [],
}) => {
  useScrollBottom("home-message-detail-container", chat);
  const [myId, setMyId] = useState(localStorage.getItem("WhatsApp-Auth-Key"));

  return (
    <div
      id="home-message-detail-container"
      className="home-message-detail-container"
      style={{ ...containerStyles }}
    >
      {chat.map((data: any, index: any) => {
        let right = data.from === myId;
        return (
          <div
            key={index}
            className={`home-message-detail-${!right ? "left" : "right"}`}
            style={!right ? messageLeftStyles : messageRightStyles}
          >
            {data.message}
          </div>
        );
      })}
    </div>
  );
};

export default HomeMessageDetails;
