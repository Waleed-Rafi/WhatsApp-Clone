import React from "react";
import Card from "../../Components/Card/Card";
import AppInput from "../../Components/AppInput/AppInput";
import AppTitle from "../../Components/AppTitle/AppTitle";
import AppUploadBtn from "../../Components/AppUploadBtn/AppUploadBtn";
import AlreadyHaveAccount from "../../Components/AlreadyHaveAccount/AlreadyHaveAccount";
import RegisterProfile from "../../Components/RegisterProfile/RegisterProfile";
import "./Register.css";

const Register = () => {
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
          <AppInput
            placeholder="Full Name"
            inputContainerStyles={{ marginBottom: "25px" }}
          />
          <AppInput
            placeholder="Email"
            inputContainerStyles={{ marginBottom: "30px" }}
          />
          <AppInput
            placeholder="Password"
            inputType="password"
            inputContainerStyles={{ marginBottom: "30px" }}
          />
          <div style={{ display: "flex" }}>
            <AppUploadBtn />
            <AppUploadBtn
              containerStyles={{ marginLeft: "30px" }}
              title="Post"
            />
          </div>
          <AlreadyHaveAccount
            title="Already Have an Account?"
            containerStyles={{ marginTop: "70px" }}
          />
        </div>
        <RegisterProfile
          containerStyles={{ marginTop: "8.4%", marginLeft: "17%" }}
        />
      </Card>
    </div>
  );
};

export default Register;
