import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import AppInput from "../../Components/AppInput/AppInput";
import AppTitle from "../../Components/AppTitle/AppTitle";
import AppUploadBtn from "../../Components/AppUploadBtn/AppUploadBtn";
import AlreadyHaveAccount from "../../Components/AlreadyHaveAccount/AlreadyHaveAccount";
import RegisterProfile from "../../Components/RegisterProfile/RegisterProfile";
import Firebase from "../../Firebase/firebase";
import "./Register.css";

interface UserForm {
  fullName: string;
  email: string;
  password: string;
  profilePicture: FileList | null;
}

const Register = () => {
  const [userFormData, setUserFormData] = useState<UserForm>({
    fullName: "",
    email: "",
    password: "",
    profilePicture: null,
  });
  const [isRegistering, setIsRegistering] = useState(false);

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
    setIsRegistering(true);
    if (typeof userFormData.profilePicture?.length) {
      let temp = userFormData.profilePicture![0];
      let uploadTask = Firebase.storage()
        .ref("/users/")
        .child(temp.name + new Date())
        .put(temp);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (error) => {
          console.log(error);
          setIsRegistering(false);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
            console.log(downloadUrl);
            Firebase.database()
              .ref("/users")
              .push({
                ...userFormData,
                profilePicture: downloadUrl,
              })
              .then((res) => {
                console.log(res);
                setUserFormData({
                  fullName: "",
                  email: "",
                  password: "",
                  profilePicture: null,
                });
                setIsRegistering(false);
              });
          });
        }
      );
    }
  };

  return (
    <div className="screen-register-container background">
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
                title="Photo"
                isRequired={true}
                onChange={inputChangeHandler}
              />
              <AppUploadBtn
                containerStyles={{ marginLeft: "30px" }}
                type="submit"
                title={!isRegistering ? "Register" : "..."}
              />
            </div>
          </form>
          <AlreadyHaveAccount
            title="Already Have an Account?"
            containerStyles={{ marginTop: "70px" }}
            routeTo="/login"
          />
        </div>
        <RegisterProfile imageSource={userFormData.profilePicture} />
      </Card>
    </div>
  );
};

export default Register;
