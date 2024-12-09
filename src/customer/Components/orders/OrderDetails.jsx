import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { useDispatch } from "react-redux";
import { ordersById, receiveProductsByPartNumber } from "../../../action";
import AddressCard from "../adreess/AdreessCard";
import OrderTracker from "./OrderTraker";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const address = JSON.parse(localStorage.getItem("shippingAddress"));

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const order = await ordersById(orderId);
        console.log(order);
        setOrderDetails(order);

        const productPromises = order.orderItem.map((item) =>
          receiveProductsByPartNumber(item.partNumber)
        );
        const productResponses = await Promise.all(productPromises);
        const productsData = productResponses.map(
          (res) => res.catalogEntryView[0]
        );
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching order details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) {
    return (
      <div className="flex flex-col space-y-4 p-4">
        <Skeleton variant="rectangular" height={50} />
        <Skeleton variant="rectangular" height={200} />
        <Skeleton variant="rectangular" height={50} />
      </div>
    );
  }

  return (
    <div className="px-4 mt-6 lg:px-24 space-y-6">
      <div className="p-4 shadow-md bg-white rounded-md mt-2">
        <div className="flex justify-between items-center">
          <div className="w-full md:w-3/4">
            <OrderTracker
              activeStep={
                orderDetails?.orderStatus === "M"
                  ? 1
                  : orderDetails?.orderStatus === "CONFIRMED"
                  ? 2
                  : orderDetails?.orderStatus === "SHIPPED"
                  ? 3
                  : 5
              }
            />
          </div>
          <div>
            {orderDetails?.orderStatus === "DELIVERED" ? (
              <button className="text-red-500 border border-red-500 rounded px-4 py-2">
                Return
              </button>
            ) : (
              <button className="text-indigo-900 border border-indigo-900 rounded px-4 py-2">
                Cancel Order
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {orderDetails?.orderItem.map((item, index) => {
          const product = products.find(
            (product) => product.partNumber === item.partNumber
          );
          return (
            <div
              key={index}
              className="shadow-md rounded-md p-4 border bg-white"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-2">
                  <img
                    className="w-full h-auto"
                    src={
                      product?.thumbnail || "https://via.placeholder.com/150"
                    }
                    alt={item.partNumber}
                  />
                </div>
                <div className="md:col-span-8">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-indigo-900">
                      {item.partNumber}
                    </h3>
                    <p className="text-gray-600">
                      Quantity: {parseFloat(item.quantity).toFixed(0)}
                    </p>
                    <h4 className="text-lg font-semibold text-indigo-900">
                      Price: €{parseFloat(item.orderItemPrice).toFixed(2)}
                    </h4>
                    <p className="text-gray-600">
                      Order Item Status: {item.orderItemStatus}
                    </p>
                    <p className="text-gray-600">
                      Expected Ship Date: {item.expectedShipDate}
                    </p>
                    <p className="text-gray-600">
                      Fulfillment Center: {item.fulfillmentCenterName}
                    </p>
                    <p className="text-gray-600">Carrier: {item.carrier}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 shadow-md bg-white rounded-md">
        <h2 className="text-xl font-bold py-2 text-indigo-900">
          Shipping Address
        </h2>
        <AddressCard
          address={{
            lastName: orderDetails?.paymentInstruction[0]?.lastName,
            zipCode: orderDetails?.paymentInstruction[0]?.postalCode,
            resourceId: orderDetails?.paymentInstruction[0]?.billing_address_id,
            city: orderDetails?.paymentInstruction[0]?.city,
            nickName: orderDetails?.paymentInstruction[0]?.nickName,
            addressType: "ShippingAndBilling",
            addressLine: orderDetails?.paymentInstruction[0]?.addressLine,
            addressId: orderDetails?.paymentInstruction[0]?.billing_address_id,
            phone1: orderDetails?.paymentInstruction[0]?.phone1,
            firstName: orderDetails?.paymentInstruction[0]?.firstName,
            email1: orderDetails?.paymentInstruction[0]?.email1,
            state: orderDetails?.paymentInstruction[0]?.state,
            primary: "false",
          }}
        />
      </div>
    </div>
  );
};

export default OrderDetails;
