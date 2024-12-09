import { useNavigate } from "react-router-dom";
import { CheckoutReq, placeOrder, preCheckout } from "../../../action/cart";

export const paymentHelper = async (paymentData, navigate) => {
  placeOrder(paymentData)
    .then((res) => {
      if (res) {
        preCheckout(res.data.orderId)
          .then((preCheckoutRes) => {
            if (preCheckoutRes) {
              CheckoutReq(preCheckoutRes.orderId)
                .then((checkoutRes) => {
                  if (checkoutRes) {
                    navigate(`/payment/success/${res.data.orderId}`);
                  } else {
                    console.error("Checkout request failed.");
                  }
                })
                .catch((err) => console.error("Error in CheckoutReq:", err));
            } else {
              console.error("Pre-checkout failed.");
            }
          })
          .catch((err) => console.error("Error in preCheckout:", err));
      } else {
        console.error("Place order failed.");
      }
    })
    .catch((err) => console.error("Error in placeOrder:", err));
};

export const paymentHelper2 = async (paymentData) => {
  //   console.log(paymentData, "paymentData");
  try {
    const placeOrderResponse = await placeOrder(paymentData);
    if (placeOrderResponse) {
      const preCheckoutResponse = await preCheckout(
        placeOrderResponse.data.orderId
      );
      if (preCheckoutResponse) {
        const checkoutResponse = await CheckoutReq(
          preCheckoutResponse.data.orderId
        );
        if (checkoutResponse) {
          // Return orderId
          return placeOrderResponse.data.orderId;
        } else {
          console.error("Checkout request failed.");
        }
      } else {
        console.error("Pre-checkout failed.");
      }
    } else {
      console.error("Place order failed.");
    }
  } catch (error) {
    console.error("Error in paymentHelper:", error);
  }
  return null;
};
