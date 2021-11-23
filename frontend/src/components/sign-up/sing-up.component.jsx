import React, { useState } from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { registerUser } from "../../utils/auth";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { username, email, password1, password2 } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password1 !== password2) {
      alert("passwords don't match");
      return;
    }

    try {
      await registerUser(userCredentials);
    } catch (error) {
      alert(error);
    }

    setUserCredentials({
      username: "",
      email: "",
      password1: "",
      password2: "",
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="username"
          label="Username"
          value={username}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password1"
          label="Password"
          value={password1}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password2"
          label="Confirm Password"
          value={password2}
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
