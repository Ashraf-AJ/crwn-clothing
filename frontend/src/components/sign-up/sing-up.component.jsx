import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { registerUser } from "../../utils/auth";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password1: "",
      password2: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    if (this.state.password1 !== this.state.password2) {
      alert("passwords don't match");
      return;
    }

    try {
      await registerUser(this.state);
    } catch (error) {
      alert(error);
    }

    this.setState({
      username: "",
      email: "",
      password1: "",
      password2: "",
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password1, password2 } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="username"
            label="Username"
            value={username}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password1"
            label="Password"
            value={password1}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password2"
            label="Confirm Password"
            value={password2}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
