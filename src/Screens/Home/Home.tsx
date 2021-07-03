import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import EmojiPicker from "../../Components/EmojiPicker/EmojiPicker";
import AppInput from "../../Components/AppInput/AppInput";
import SmileEmojiOpener from "../../Components/SmileEmojiOpener/SmileEmojiOpener";
import { IEmojiData } from "emoji-picker-react";
import HomeNotificationAlert from "../../Components/HomeNotificationAlert/HomeNotificationAlert";
import HomeSearchBar from "../../Components/HomeSearchBar/HomeSearchBar";
import HomeMessageUser from "../../Components/HomeMessageUsers/HomeMessageUser";
import HomeMessagesHeader from "../../Components/HomeMessagesHeader/HomeMessagesHeader";
import HomeMessageDetails from "../../Components/HomeMessageDetails/HomeMessageDetails";
import "./Home.css";

export default function Home() {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [yourMessage, setYourMessage] = useState("");

  const toggleEmojiPicker = () => {
    setOpenEmojiPicker(!openEmojiPicker);
  };

  const onEmojiClick = (
    event: React.MouseEvent<Element, MouseEvent>,
    emojiObject: IEmojiData
  ) => {
    console.log(emojiObject);
    setYourMessage(yourMessage + emojiObject.emoji);
  };

  const messageSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(yourMessage);
  };

  return (
    <div className="home-screen-container background">
      <Card
        containerStyles={{
          width: "72vw",
          height: "93vh",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <div className="home-left-container">
          <HomeMessagesHeader
            containerStyles={{ backgroundColor: "#f6f6f6" }}
          />
          <HomeNotificationAlert />
          <HomeSearchBar />
          <HomeMessageUser />
        </div>
        <div className="home-right-container">
          <HomeMessagesHeader username="Ahmad Anis" />
          <HomeMessageDetails />
          {openEmojiPicker && (
            <EmojiPicker
              pickerStyles={{
                position: "absolute",
                bottom: "7%",
                width: "100%",
              }}
              onEmojiClick={onEmojiClick}
            />
          )}
          <div className="home-right-message-section">
            <SmileEmojiOpener
              containerStyles={{
                position: "absolute",
                left: "3%",
                top: "28%",
              }}
              onClickHandler={toggleEmojiPicker}
            />
            <form onSubmit={(e) => messageSubmitHandler(e)}>
              <AppInput
                inputContainerStyles={{
                  float: "right",
                }}
                inputStyles={{
                  width: "87%",
                  position: "absolute",
                  right: "3%",
                  top: "15%",
                  padding: "11px",
                  borderRadius: "18px",
                  border: "none",
                }}
                placeholder="Your Message"
                value={yourMessage}
                onChange={(e) => setYourMessage(e.target.value)}
              />
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
}
