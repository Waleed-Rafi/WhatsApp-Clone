import React, { useState, useEffect } from "react";
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
import Firebase from "../../Firebase/firebase";

let openIndex = 0;

export default function Home() {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [yourMessage, setYourMessage] = useState("");
  const [allUsers, setAllUsers] = useState<any>([]);
  const [currentAuthUser, setCurrentAuthUser] = useState<any>([]);
  const [myMessages, setMyMessages] = useState<any>([]);
  const [currentlyOpenedMessage, setCurrentlyOpenedMessage] = useState<any>([]);
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    let authToken = localStorage.getItem("WhatsApp-Auth-Key");
    if (!authToken) {
      window.location.href = "/login";
    } else {
      setAuthToken(authToken);
      Firebase.database()
        .ref("/users/" + authToken)
        .on("value", (res) => {
          setCurrentAuthUser(res.val());
          if (res.val().messages) {
            let temp2: any = Object.values(res.val().messages);
            setMyMessages(temp2);
            setCurrentlyOpenedMessage(temp2.length ? temp2[openIndex] : []);
          }
        });
      Firebase.database()
        .ref("/users")
        .on("value", (res) => {
          let temp = res.val();
          delete temp[authToken!];
          setAllUsers(Object.entries(temp));
        });
    }
  }, []);

  const toggleEmojiPicker = () => {
    setOpenEmojiPicker(!openEmojiPicker);
  };

  const onEmojiClick = (
    event: React.MouseEvent<Element, MouseEvent>,
    emojiObject: IEmojiData
  ) => {
    setYourMessage(yourMessage + emojiObject.emoji);
  };

  const setWhichMessageToOpen = (index: number) => {
    setCurrentlyOpenedMessage(myMessages[index]);
    openIndex = index;
  };

  const messageSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setYourMessage("");
    await Firebase.database()
      .ref(
        "/users/" +
          authToken +
          "/messages/" +
          currentlyOpenedMessage.id +
          "/chat/" +
          currentlyOpenedMessage.chat.length
      )
      .set({
        from: authToken,
        message: yourMessage,
        to: currentlyOpenedMessage.id,
      })
      .then(async (res) => {
        await Firebase.database()
          .ref(
            "/users/" +
              currentlyOpenedMessage.id +
              "/messages/" +
              authToken +
              "/chat/" +
              currentlyOpenedMessage.chat.length
          )
          .set({
            from: authToken,
            message: yourMessage,
            to: currentlyOpenedMessage.id,
          });
      });
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
            profilePic={currentAuthUser?.profilePicture}
          />
          <HomeNotificationAlert />
          <HomeSearchBar
            allUsers={allUsers}
            currentAuthUser={currentAuthUser}
          />
          <HomeMessageUser
            allUsers={myMessages}
            setWhichMessageToOpen={setWhichMessageToOpen}
          />
        </div>
        <div className="home-right-container">
          <HomeMessagesHeader
            username={currentlyOpenedMessage.name}
            profilePic={currentlyOpenedMessage.profilePicture}
          />
          <HomeMessageDetails chat={currentlyOpenedMessage.chat} />
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
