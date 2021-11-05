import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";
import { login } from "../../utils/auth";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { access_token, user } = await login(this.state);
      console.log(access_token);
      this.props.setCurrentUser(user);
    } catch (error) {
      alert(error);
    }
    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="sign-in">
        <form onSubmit={this.handleSubmit}>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <CustomButton type="submit">SIGN IN</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignIn);
