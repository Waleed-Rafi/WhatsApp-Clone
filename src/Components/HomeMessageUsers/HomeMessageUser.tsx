import React from "react";
import UserMessageCard from "../UserMessageCard/UserMessageCard";
interface Props {
  containerStyles?: React.CSSProperties;
  allUsers: any;
}
const HomeMessageUser: React.FC<Props> = ({
  containerStyles = {},
  allUsers = [],
}) => {
  return (
    <div className="home-left-all-messages" style={{ ...containerStyles }}>
      {allUsers.map((data: any, index: any) => {
        console.log(data.chat);

        return (
          <UserMessageCard
            key={data.id}
            name={data.name}
            profilePic={data.profilePicture}
            message={data.chat ? data.chat[0].message : ""}
            active={index === 0 ? "-active" : ""}
          />
        );
      })}
    </div>
  );
};

export default HomeMessageUser;
