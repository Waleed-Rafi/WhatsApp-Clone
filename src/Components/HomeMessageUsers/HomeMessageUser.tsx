import React, { useState } from "react";
import UserMessageCard from "../UserMessageCard/UserMessageCard";
interface Props {
  containerStyles?: React.CSSProperties;
  allUsers: any;
  setWhichMessageToOpen: (index: number) => void;
}
const HomeMessageUser: React.FC<Props> = ({
  containerStyles = {},
  allUsers = [],
  setWhichMessageToOpen,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const setMsgIndex = (index: number) => {
    setActiveIndex(index);
    setWhichMessageToOpen(index);
  };
  return (
    <div className="home-left-all-messages" style={{ ...containerStyles }}>
      {allUsers.map((data: any, index: any) => {
        return (
          <div onClick={() => setMsgIndex(index)}>
            <UserMessageCard
              key={data.id}
              name={data.name}
              profilePic={data.profilePicture}
              message={data.chat ? data.chat[0].message : ""}
              active={index === activeIndex ? "-active" : ""}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HomeMessageUser;
