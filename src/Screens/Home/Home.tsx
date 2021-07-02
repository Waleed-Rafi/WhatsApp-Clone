import React from "react";
import Card from "../../Components/Card/Card";
import EmojiPicker from "../../Components/EmojiPicker/EmojiPicker";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-screen-container background">
      <Card
        containerStyles={{
          width: "72vw",
          height: "93vh",
          display: "flex",
        }}
      >
        <div className="home-left-container">
          <div className="home-left-header"></div>
          <div className="home-left-notification-alert"></div>
          <div className="home-left-search-bar"></div>
        </div>
        <div className="home-right-container">
          <div className="home-right-header"></div>
          <div className="home-right-message-section">
            <EmojiPicker
              pickerStyles={{
                position: "absolute",
                bottom: "100%",
                width: "100%",
              }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
