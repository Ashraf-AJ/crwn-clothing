import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { logout } from "../../utils/auth";
import { setCurrentUser } from "../../redux/user/user.actions";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.conponent";

const Header = ({ currentUser, setCurrentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" title="crwn-clothing" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => logout(setCurrentUser)}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);