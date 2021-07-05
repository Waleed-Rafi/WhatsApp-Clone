import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import AppInput from "../../Components/AppInput/AppInput";
import AppTitle from "../../Components/AppTitle/AppTitle";
import AppUploadBtn from "../../Components/AppUploadBtn/AppUploadBtn";
import AlreadyHaveAccount from "../../Components/AlreadyHaveAccount/AlreadyHaveAccount";
import Firebase from "../../Firebase/firebase";

const Login = () => {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    let authToken = localStorage.getItem("WhatsApp-Auth-Key");
    if (authToken) {
      window.location.href = "/";
    }
  }, []);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    Firebase.database()
      .ref("/users")
      .once("value", (res) => {
        let userIds = Object.keys(res.val());
        let usersInfo = Object.values(res.val());
        let index = usersInfo.findIndex((data: any) => {
          return (
            data.email === userFormData.email &&
            data.password === userFormData.password
          );
        });
        if (index === -1) {
          alert("Invalid Credentials");
        } else {
          localStorage.setItem("WhatsApp-Auth-Key", userIds[index]);
          window.location.href = "/";
        }
        setUserFormData({ email: "", password: "" });
      });
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
            routeTo="/register"
          />
        </div>
      </Card>
    </div>
  );
};

export default Login;
