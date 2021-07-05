import React from "react";
import { useEffect } from "react";
import { useState } from "react";

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
  const [myId, setMyId] = useState(localStorage.getItem("WhatsApp-Auth-Key"));

  return (
    <div
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
