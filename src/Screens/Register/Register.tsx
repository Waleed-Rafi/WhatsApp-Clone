import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    let authToken = localStorage.getItem("WhatsApp-Auth-Key");
    if (authToken) {
      window.location.href = "/";
    }
  }, []);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserFormData({
      ...userFormData,
      [e.target.name]:
        e.target.name === "profilePicture" ? e.target.files : e.target.value,
    });
  };

  const setToDatabase = (profilePic: string): void => {
    Firebase.database()
      .ref("/users")
      .push({
        ...userFormData,
        profilePicture: profilePic,
      })
      .then((res) => {
        setUserFormData({
          fullName: "",
          email: "",
          password: "",
          profilePicture: null,
        });
        setIsRegistering(false);
        let result = res.key!.toString();
        localStorage.setItem("WhatsApp-Auth-Key", result);
        window.location.href = "/";
      });
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsRegistering(true);
    if (userFormData.profilePicture?.length) {
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
          alert("Failed to register new account");
          setIsRegistering(false);
        },
        () => {
          uploadTask.snapshot.ref
            .getDownloadURL()
            .then((downloadUrl) => {
              setToDatabase(downloadUrl);
            })
            .catch((err) => {
              alert("Failed to register new account");
              setIsRegistering(false);
            });
        }
      );
    } else {
      setToDatabase(
        "https://kalaivf.com/wp-content/uploads/2021/01/profile-placeholder.jpg"
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
