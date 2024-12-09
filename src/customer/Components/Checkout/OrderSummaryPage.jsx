import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaTag,
  FaShippingFast,
} from "react-icons/fa";
import axios from "axios";
import { getCartItems, ShipingInfoOrder } from "../../../action/cart";
import { API_BASE_URL } from "../../../config/api";
import { receiveProductsByPartNumber } from "../../../action"; // Assuming you have this action to fetch product details

const OrderSummaryPage = () => {
  const navigate = useNavigate();
  const [shippingMethod, setShippingMethod] = useState([]);
  const [products, setProducts] = useState([]);
  const address = JSON.parse(localStorage.getItem("deliveryAddress"));
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartItems.cartItems);
  const { cartItems } = useSelector((state) => state);

  useEffect(() => {
    const fetchAddresses = async () => {
      const wt = localStorage.getItem("wt");
      const wtt = localStorage.getItem("wtt");
      try {
        const res = await axios.get(`${API_BASE_URL}shipModes`, {
          headers: {
            wt: wt,
            wtt: wtt,
          },
        });
        const fetchedAddresses = res.data.usableShippingMode || [];
        setShippingMethod(fetchedAddresses);
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };

    fetchAddresses();
  }, []);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (cart?.orderItem?.length > 0) {
        try {
          const productPromises = cart.orderItem.map((item) =>
            receiveProductsByPartNumber(item.partNumber)
          );
          const productResponses = await Promise.all(productPromises);
          const productsData = productResponses.map(
            (res) => res.catalogEntryView[0]
          );
          setProducts(productsData);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      }
    };

    fetchProductDetails();
  }, [cart]);

  const handleNewOrder = () => {
    const shipModeId = "15001";
    const addressId = address.addressId;

    const orderItems = cartItems?.cartItems?.orderItem || [];

    const formattedOrderItems = orderItems.map((item) => ({
      shipModeId: shipModeId,
      orderItemId: item.orderItemId,
      addressId: addressId,
    }));

    const payload = {
      orderItem: formattedOrderItems,
    };

    ShipingInfoOrder(payload).then((res) => {
      navigate("/checkout?step=3");
    });
  };

  function formatToTwoDecimalPlaces(number) {
    if (number === undefined || number === null || isNaN(number)) {
      return "0.00";
    }

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

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-100 rounded-lg">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Address and Shipping */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-6">Delivery Address</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FaUser className="text-gray-600 mr-3" />
              <p className="text-lg font-medium">{`${address?.firstName} ${address?.lastName}`}</p>
            </div>
            <div className="flex items-start mb-4">
              <FaMapMarkerAlt className="text-gray-600 mr-3 mt-1" />
              <div>
                <p className="text-lg">{address?.addressLine[0]}</p>
                {address?.addressLine[1] && (
                  <p className="text-lg">{address?.addressLine[1]}</p>
                )}
                {address?.addressLine[2] && (
                  <p className="text-lg">{address?.addressLine[2]}</p>
                )}
                <p className="text-lg">{`${address?.city}, ${address?.state}, ${address?.zipCode}`}</p>
                <p className="text-lg">{address?.country || "India"}</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-gray-600 mr-3" />
              <p className="text-lg">{`Phone: ${address?.phone1}`}</p>
            </div>
            <div className="flex items-center mb-4">
              <FaTag className="text-gray-600 mr-3" />
              <p className="text-lg">{`Nickname: ${address?.nickName}`}</p>
            </div>
            <div className="flex items-center">
              <FaTag className="text-gray-600 mr-3" />
              <p className="text-lg">{`Address Type: ${address?.addressType}`}</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-6">
            Select Shipping Mode
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FaShippingFast className="text-gray-600 mr-3" />
              <select className="text-lg text-gray-700 rounded-lg w-full p-2 border border-gray-300">
                {shippingMethod.map((item, index) => (
                  <option key={index} value={item.shipModeCode}>
                    {item.shipModeCode}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button
              onClick={handleNewOrder}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md w-full mb-6 font-medium text-lg"
            >
              Proceed to Payment
            </button>
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              {products.map((product, index) => (
                <div key={index} className="border my-2 p-2 flex items-center">
                  {/* Display product image */}
                  <img
                    src={product.thumbnail} // Use thumbnail or fullImageRaw as needed
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <p className="text-lg">
                      <span className="font-medium text-gray-800">Item:</span>{" "}
                      {product.name}
                    </p>
                    <p className="text-lg">
                      <span className="font-medium text-gray-800">
                        Order Item ID:
                      </span>{" "}
                      {cart.orderItem[index]?.orderItemId}
                    </p>
                  </div>
                </div>
              ))}
              <p className="text-xl font-bold text-red-600 mt-4">
                <span>Order Total: €</span>
                {formatToTwoDecimalPlaces(cart?.grandTotal)}
              </p>
            </div>
            <a href="#" className="text-blue-600 text-sm mt-6 inline-block">
              How are delivery costs calculated?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
