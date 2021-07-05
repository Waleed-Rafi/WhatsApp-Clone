import React, { useState } from "react";
import Modal from "react-modal";
import Firebase from "../../Firebase/firebase";
import RegisterProfile from "../RegisterProfile/RegisterProfile";
import "./SearchUserMessage.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "40vh",
    width: "30vw",
  },
};

interface Props {
  allUsers: any;
  currentAuthUser: any;
  isOpen: boolean;
  closeModal: () => void;
}

const SearchUserMessage: React.FC<Props> = ({
  allUsers,
  currentAuthUser,
  closeModal,
  isOpen,
}) => {
  const [userSelected, setUserSelected] = useState<any>([]);
  const [yourMessage, setYourMessage] = useState("");
  const selectUser = (user: any) => {
    setUserSelected(user);
  };
  const closeOpenedModal = () => {
    setUserSelected([]);
    closeModal();
  };

  const setToFirebase = async (authToken: any, endIndex: number) => {
    await Firebase.database()
      .ref(
        "/users/" +
          authToken +
          "/messages/" +
          userSelected[0] +
          "/chat/" +
          endIndex
      )
      .set({
        from: authToken,
        message: yourMessage,
        to: userSelected[0],
      })
      .then(async (res) => {
        await Firebase.database()
          .ref(
            "/users/" +
              userSelected[0] +
              "/messages/" +
              authToken +
              "/chat/" +
              endIndex
          )
          .set({
            from: authToken,
            message: yourMessage,
            to: userSelected[0],
          });
        closeModal();
      });
  };

  const createMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const authToken = localStorage.getItem("WhatsApp-Auth-Key");
    let endIndex = userSelected[1].messages
      ? userSelected[1].messages[authToken!]
        ? userSelected[1].messages[authToken!].chat.length
        : 0
      : 0;
    setYourMessage("");
    if (endIndex === 0) {
      await Firebase.database()
        .ref("/users/" + authToken + "/messages/" + userSelected[0])
        .set({
          id: userSelected[0],
          name: userSelected[1].fullName,
          profilePicture: userSelected[1].profilePicture,
        })
        .then(async (res) => {
          await Firebase.database()
            .ref("/users/" + userSelected[0] + "/messages/" + authToken)
            .set({
              id: authToken,
              name: currentAuthUser.fullName,
              profilePicture: currentAuthUser.profilePicture,
            });
          setToFirebase(authToken, endIndex);
        });
    } else {
      setToFirebase(authToken, endIndex);
    }
  };
  return (
    <div style={{ overflowY: "scroll", overflowX: "hidden" }}>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeOpenedModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {!userSelected.length ? (
          allUsers.map((data: any, index: any) => {
            return (
              <div
                key={data[0]}
                className={"user-message-card-container-active"}
                onClick={() => selectUser(data)}
              >
                <div className="user-message-card-left-container">
                  <RegisterProfile
                    imageSource={data[1].profilePicture}
                    imageStyles={{
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                      boxShadow: "none",
                    }}
                  />
                </div>
                <div className="user-message-card-right-container">
                  <div className="user-message-card-name">
                    {data[1].fullName}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <div className={"user-message-card-container-active"}>
              <div className="user-message-card-left-container">
                <RegisterProfile
                  imageSource={userSelected[1]?.profilePicture}
                  imageStyles={{
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    boxShadow: "none",
                  }}
                />
              </div>
              <div className="user-message-card-right-container">
                <div className="user-message-card-name">
                  {userSelected[1]?.fullName}
                </div>
              </div>
            </div>
            <div className="search-user-message-input-container">
              <form onSubmit={(e) => createMessage(e)}>
                <input
                  value={yourMessage}
                  onChange={(e) => setYourMessage(e.target.value)}
                  placeholder="Type Your Message"
                  type="text"
                />
              </form>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SearchUserMessage;
