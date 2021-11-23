import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";
import { login } from "../../utils/auth";

const SignIn = ({ setCurrentUser }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { access_token, user } = await login(userCredentials);
      alert(access_token);
      setUserCredentials({ email: "", password: "" });
      setCurrentUser(user);
    } catch (error) {
      alert(error);
    }
  };

  const { email, password } = userCredentials;
  return (
    <div className="sign-in">
      <form onSubmit={handleSubmit}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <CustomButton type="submit">SIGN IN</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignIn);
