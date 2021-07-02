import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import AppInput from "../../Components/AppInput/AppInput";
import AppTitle from "../../Components/AppTitle/AppTitle";
import AppUploadBtn from "../../Components/AppUploadBtn/AppUploadBtn";
import AlreadyHaveAccount from "../../Components/AlreadyHaveAccount/AlreadyHaveAccount";

const Login = () => {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(userFormData);
    setUserFormData({ email: "", password: "" });
  };

  return (
    <div className="screen-register-container">
      <AppTitle />
      <Card
        containerStyles={{
          boxSizing: "border-box",
          padding: "20px 80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "-8rem" }}>
          <AppTitle
            title="Login to use WhatsApp Web"
            logo={false}
            containerStyles={{ marginBottom: "25px", width: "max-content" }}
          />
          <form onSubmit={(e) => formSubmitHandler(e)}>
            <AppInput
              name="email"
              inputType="email"
              placeholder="Email"
              value={userFormData.email}
              inputContainerStyles={{ marginBottom: "30px" }}
              isRequired={true}
              onChange={inputChangeHandler}
            />
            <AppInput
              name="password"
              placeholder="Password"
              inputType="password"
              value={userFormData.password}
              inputContainerStyles={{ marginBottom: "30px" }}
              isRequired={true}
              onChange={inputChangeHandler}
            />
            <AppUploadBtn type="submit" title="Login" />
          </form>
          <AlreadyHaveAccount
            title="Don't have an account?"
            containerStyles={{ marginTop: "70px" }}
            routeTo="/"
          />
        </div>
      </Card>
    </div>
  );
};

export default Login;
