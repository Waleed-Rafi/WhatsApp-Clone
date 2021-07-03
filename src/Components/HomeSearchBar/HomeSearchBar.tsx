import React from "react";
import AppInput from "../AppInput/AppInput";

interface Props {
  containerStyles?: React.CSSProperties;
  searchBarContainerStyles?: React.CSSProperties;
  searchBarInputStyles?: React.CSSProperties;
}

const HomeSearchBar: React.FC<Props> = ({
  containerStyles = {},
  searchBarContainerStyles = {},
  searchBarInputStyles = {},
}) => {
  return (
    <div className="home-left-search-bar" style={{ ...containerStyles }}>
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
        value=""
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default HomeSearchBar;
