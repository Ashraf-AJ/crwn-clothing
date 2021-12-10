import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { loadStripeObj } from "./utils/utils";
import { clearCart } from "./redux/cart/cart.actions";
loadStripeObj();

const App = ({ currentUser, clearCart }) => {
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
