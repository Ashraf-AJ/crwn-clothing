import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useStripe } from "@stripe/react-stripe-js";
import { api, createPayment } from "../../utils/paths.js";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/custom-button.component";
import { httpPost } from "../../utils/utils";

const CheckoutForm = ({ cartItems }) => {
  const stripe = useStripe();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await httpPost(`${api}${createPayment}`)(cartItems);
      const sessionId = await response.json();
      const error = stripe.redirectToCheckout({ sessionId: sessionId });
      if (error) {
        console.warn(`stripe: ${error}`);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <CustomButton disabled={!stripe} onClick={handleSubmit}>
      Pay Now
    </CustomButton>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapStateToProps)(CheckoutForm);
