import React, { useState } from "react";
import AppInput from "../AppInput/AppInput";
import SearchUserMessage from "../Modal/SearchUserMessage";

interface Props {
  containerStyles?: React.CSSProperties;
  searchBarContainerStyles?: React.CSSProperties;
  searchBarInputStyles?: React.CSSProperties;
  allUsers: any;
  currentAuthUser: any;
}

const HomeSearchBar: React.FC<Props> = ({
  containerStyles = {},
  searchBarContainerStyles = {},
  searchBarInputStyles = {},
  allUsers,
  currentAuthUser,
}) => {
  const [searched, setSearched] = useState("");
  const [users, setUsers] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(allUsers);
    let temp = allUsers.filter((data: any) => {
      return data[1].fullName.toLowerCase().includes(searched.toLowerCase());
    });
    setUsers(temp);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="home-left-search-bar" style={{ ...containerStyles }}>
      <form onSubmit={(e) => searchUser(e)}>
        <AppInput
          inputContainerStyles={{
            textAlign: "center",
            paddingTop: "10px",
            ...searchBarContainerStyles,
          }}
          inputStyles={{
            borderRadius: "20px",
            border: "none",
            padding: "9px",
            width: "85%",
            ...searchBarInputStyles,
          }}
          placeholder="Search"
          value={searched}
          onChange={(e) => setSearched(e.target.value)}
        />
      </form>
      {isModalOpen ? (
        <SearchUserMessage
          allUsers={users}
          currentAuthUser={currentAuthUser}
          closeModal={closeModal}
          isOpen={isModalOpen}
        />
      ) : null}
    </div>
  );
};

export default HomeSearchBar;
