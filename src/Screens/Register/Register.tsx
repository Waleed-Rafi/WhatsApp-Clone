import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import AppInput from "../../Components/AppInput/AppInput";
import AppTitle from "../../Components/AppTitle/AppTitle";
import AppUploadBtn from "../../Components/AppUploadBtn/AppUploadBtn";
import AlreadyHaveAccount from "../../Components/AlreadyHaveAccount/AlreadyHaveAccount";
import RegisterProfile from "../../Components/RegisterProfile/RegisterProfile";
import "./Register.css";

const Register = () => {
  const [userFormData, setUserFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    profilePicture: null,
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserFormData({
      ...userFormData,
      [e.target.name]:
        e.target.name === "profilePicture" ? e.target.files : e.target.value,
    });
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(userFormData);
  };

  return (
    <div className="screen-register-container">
      <AppTitle />
      <Card
        containerStyles={{
          boxSizing: "border-box",
          padding: "20px 80px",
          display: "flex",
        }}
      >
        <div>
          <AppTitle
            title="SignUp to use WhatsApp Web"
            logo={false}
            containerStyles={{ marginBottom: "25px", width: "max-content" }}
          />
          <form onSubmit={(e) => formSubmitHandler(e)}>
            <AppInput
              name="fullName"
              placeholder="Full Name"
              value={userFormData.fullName}
              inputContainerStyles={{ marginBottom: "25px" }}
              isRequired={true}
              onChange={inputChangeHandler}
            />
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
            <div style={{ display: "flex" }}>
              <AppUploadBtn
                name="profilePicture"
                isRequired={true}
                onChange={inputChangeHandler}
              />
              <AppUploadBtn
                containerStyles={{ marginLeft: "30px" }}
                type="submit"
                title="Post"
              />
            </div>
          </form>
          <AlreadyHaveAccount
            title="Already Have an Account?"
            containerStyles={{ marginTop: "70px" }}
          />
        </div>
        <RegisterProfile imageSource={userFormData.profilePicture} />
      </Card>
    </div>
  );
};

export default Register;
