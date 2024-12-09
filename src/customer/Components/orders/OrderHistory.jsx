import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCutomerOrdersNew } from "../../../action/cart";
import { useEffect } from "react";
const orderData = [
  {
    orderId: "123456",
    placedDate: "2024-08-10",
    grandTotal: "50.00",
    orderStatus: "Delivered", // Assuming "Delivered" is not "M" for the icon logic
  },
  {
    orderId: "789012",
    placedDate: "2024-07-15",
    grandTotal: "25.00",
    orderStatus: "Pending", // Assuming "M" represents "Pending" or "Processing"
  },
  {
    orderId: "345678",
    placedDate: "2024-06-25",
    grandTotal: "75.00",
    orderStatus: "Cancelled", // Assuming "Cancelled" is not "M"
  },
  {
    orderId: "901234",
    placedDate: "2024-05-20",
    grandTotal: "125.00",

    orderStatus: "Shipped", // Assuming "Shipped" is not "M"
  },
];

const OrderHistory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { newOrder } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getCutomerOrdersNew());
  }, []);
  console.log(newOrder?.orderNew?.Order);
  const handleRowClick = (orderId) => {
    navigate(`/orderDetails/${orderId}`);
  };
  function convertToDateOnly(dateTimeString) {
    // Create a new Date object from the input string
    const date = new Date(dateTimeString);

    // Extract the year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1
    const day = String(date.getDate()).padStart(2, "0");

    // Return the formatted date string
    return `${year}-${month}-${day}`;
  }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      <table className="min-w-full bg-white shadow-md rounded border">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 text-left">Order ID</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Items</th>
            <th className="py-2 px-4 text-left">Total</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {newOrder?.orderNew?.Order?.length > 0 ? (
            newOrder.orderNew.Order.map((order, index) => (
              <tr
                key={index}
                className="border-b cursor-pointer hover:bg-gray-100"
                onClick={() => handleRowClick(order.orderId)}
              >
                <td className="py-2 px-4">{order.orderId}</td>
                <td className="py-2 px-4">
                  {convertToDateOnly(order.placedDate)}
                </td>
                <td className="py-2 px-4">{2}</td>
                <td className="py-2 px-4">
                  €
                  {order.grandTotal
                    ? parseFloat(order.grandTotal).toFixed(2)
                    : "€0.00"}
                </td>{" "}
                <td className="py-2 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold 
                        ${
                          order.orderStatus === "Delivered"
                            ? "bg-green-100 text-green-600"
                            : ""
                        }
                        ${
                          order.orderStatus === "M"
                            ? "bg-yellow-100 text-yellow-600"
                            : ""
                        }
                        ${
                          order.orderStatus === "Cancelled"
                            ? "bg-red-100 text-red-600"
                            : ""
                        }
                        ${
                          order.orderStatus === "Shipped"
                            ? "bg-blue-100 text-blue-600"
                            : ""
                        }
                    `}
                  >
                    {order.orderStatus == "M"
                      ? "Processing"
                      : order.orderStatus}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <div className="py-4 text-center font-semibold px-auto">
              No orders available.
            </div>
          )}
          {/* {orderData.map((order, index) => (
                        <tr
                            key={index}
                            className="border-b cursor-pointer hover:bg-gray-100"
                            onClick={() => handleRowClick(order.orderId)}
                        >
                            <td className="py-2 px-4">{order.orderId}</td>
                            <td className="py-2 px-4">{order.placedDate}</td>
                            <td className="py-2 px-4">{2}</td>
                            <td className="py-2 px-4">{order.grandTotal}</td>
                            <td className="py-2 px-4">
                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold 
                                    ${order.orderStatus === 'Delivered' ? 'bg-green-100 text-green-600' : ''}
                                    ${order.orderStatus === 'Processing' ? 'bg-yellow-100 text-yellow-600' : ''}
                                    ${order.orderStatus === 'Cancelled' ? 'bg-red-100 text-red-600' : ''}
                                    ${order.orderStatus === 'Shipped' ? 'bg-blue-100 text-blue-600' : ''}
                                `}>
                                    {order.orderStatus}
                                </span>
                            </td>
                        </tr>
                    ))} */}
        </tbody>
      </table>
    </div>
  );
};
export default OrderHistory;
