import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IgUtmG5wVu9IjgkyZzLACqDPgYacpHL7VBrlEG250u9cA4fDfsThzHflXX5eHLXfhbM1u4M1feOjw7EGO7rJy5F00qHS15apy";

  const onToken = (token) => {
    alert("Payment successful");
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
