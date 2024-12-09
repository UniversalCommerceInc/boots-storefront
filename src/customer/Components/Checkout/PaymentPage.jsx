import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CheckoutReq,
  checkoutStripePayment,
  getCartItems,
  placeOrder,
  preCheckout,
} from "../../../action/cart";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import toast from "react-hot-toast";
import { paymentHelper } from "./helper";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("");

  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartItems.cartItems);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const handleNewOrder = () => {
    navigate(`/checkout?step=${4}`);
  };

  function formatToTwoDecimalPlaces(number) {
    let strNumber = number.toString();
    let [integerPart, decimalPart] = strNumber.split(".");

    if (!decimalPart) {
      return integerPart + ".00";
    }

    if (decimalPart.length < 2) {
      return integerPart + "." + decimalPart.padEnd(2, "0");
    }

    return integerPart + "." + decimalPart.slice(0, 2);
  }

  const address = JSON.parse(localStorage.getItem("deliveryAddress"));

  const onApprove = (data, actions) => {
    return actions.order
      .capture()
      .then(async function (details) {
        const paymentData = {
          piAmount: cart?.grandTotal,
          billing_address_id: address?.addressId,
          payMethodId: "MasterCard",
          account: "5425233430109903",
          expire_month: "04",
          expire_year: "2028",
          cc_cvc: "123",
          cc_brand: "MasterCard",
        };

        try {
          paymentHelper(paymentData, navigate);
        } catch (err) {
          console.error("Error in processing payment:", err);
        }
      })
      .catch((err) => console.error("Error in order capture:", err));
  };

  const handleStripePayment = async () => {
    // console.log(auth);
    let email = JSON.parse(localStorage.getItem("email"));
    try {
      await checkoutStripePayment(cart, email);
      // Handle successful Stripe payment logic here
    } catch (error) {
      toast.error("Stripe payment failed");
    }
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AUKvP8ae0aMLtrs2Fxk76rEV_02atz98Zn_mkIFlBpmogGo2iAzBc4iLeKhIDxCOKuPAg6R70OgNOClL",
        currency: "EUR",
      }}
    >
      <div className="p-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3 p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-4">
              Select a payment method
            </h2>

            <div className="mb-4">
              <label className="block mb-2">Enter Your Coupon Code</label>
              <div className="flex items-center">
                <input
                  type="text"
                  className="flex-grow border p-2 rounded"
                  placeholder="Enter Code"
                />
                <button className="ml-2 bg-gray-200 p-2 rounded">Apply</button>
              </div>
            </div>

            <div className="mb-4 flex space-x-4">
              <PayPalButtons
                style={{
                  layout: "horizontal",
                  height: 40,
                  // color: "white", // Match with no background, text-only style

                  shape: "rect", // Rectangular shape to resemble the default Stripe button
                }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: formatToTwoDecimalPlaces(cart?.grandTotal),
                        },
                      },
                    ],
                  });
                }}
                onApprove={onApprove}
              />

              <button
                className="border border-gray-400 py-2 px-4 rounded h-10 w-36 flex items-center justify-center"
                onClick={handleStripePayment}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968382.png"
                  alt="Stripe"
                  className="h-12" // Increase the size of the image
                />
              </button>
            </div>

            <h3 className="font-semibold mb-2">Another payment method</h3>

            <div className="space-y-4">
              <div>
                <input
                  type="radio"
                  id="card"
                  name="payment"
                  value="card"
                  checked={selectedMethod === "card"}
                  onChange={() => setSelectedMethod("card")}
                />
                <label htmlFor="card" className="ml-2">
                  Credit or debit card
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="netBanking"
                  name="payment"
                  value="netBanking"
                  checked={selectedMethod === "netBanking"}
                  onChange={() => setSelectedMethod("netBanking")}
                />
                <label htmlFor="netBanking" className="ml-2">
                  Net Banking
                </label>
                {selectedMethod === "netBanking" && (
                  <select className="mt-2 border p-2 rounded w-full">
                    <option>Choose an Option</option>
                    <option>Bank 1</option>
                    <option>Bank 2</option>
                  </select>
                )}
              </div>
              <div>
                <input
                  type="radio"
                  id="upi"
                  name="payment"
                  value="upi"
                  checked={selectedMethod === "upi"}
                  onChange={() => setSelectedMethod("upi")}
                />
                <label htmlFor="upi" className="ml-2">
                  Other UPI Apps
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="emi"
                  name="payment"
                  value="emi"
                  disabled
                />
                <label htmlFor="emi" className="ml-2 text-gray-400">
                  EMI (Unavailable)
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  value="cod"
                  disabled
                />
                <label htmlFor="cod" className="ml-2 text-gray-400">
                  Cash on Delivery/Pay on Delivery (Unavailable)
                </label>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              {/* <button
                onClick={handleNewOrder}
                className="bg-wwwbootscom-congress-blue hover:bg-btn-hover text-white py-2 px-4 rounded-md w-full mb-4"
              >
                Use this Payment Method
              </button> */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
                {cart?.orderItem?.map((el) => (
                  <div className="border my-2 p-2" key={el?.orderItemId}>
                    <p>
                      <span className="text-gray-800">Item :</span>{" "}
                      {el?.partNumber}
                    </p>
                    <p>
                      <span className="text-gray-800">Order Item id:</span>{" "}
                      {el?.orderItemId}
                    </p>
                  </div>
                ))}
                <p className="text-lg font-bold text-red-600 mt-4">
                  <span>Order Total: €</span>
                  {formatToTwoDecimalPlaces(cart?.grandTotal)}
                </p>
              </div>
              <a href="#" className="text-blue-600 text-sm mt-4 inline-block">
                How are delivery costs calculated?
              </a>
            </div>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default PaymentPage;
