import React, { useCallback, useEffect, useState } from "react";

import { Button, LinearProgress, Skeleton } from "@mui/material";
// =======
// import { Button, LinearProgress } from "@mui/material";
// >>>>>>> main
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartItem,
  updateCartItem,
} from "../../../Redux/Customers/Cart/Action";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  RemoveCartItemNew,
  getCartItems,
  handleRemoveItemFromCart,
  updateCartQtyNEW,
} from "../../../action/cart";
import { grey } from "@mui/material/colors";
import { API_BASE_URL } from "../../../config/api";
import toast from "react-hot-toast";
const cardClasses =
  "max-w-sm mx-auto p-4 mb-2 border-1 bg-white dark:bg-card shadow-lg rounded-lg";
const textClasses = "text-zinc-500 dark:text-zinc-400";
const buttonClasses = "bg-zinc-200 dark:bg-zinc-600 p-2";
const borderClasses = "border border-zinc-300 dark:border-zinc-500";
const labelClasses = "mr-4 text-zinc-600 dark:text-zinc-400";
const CartItem = ({
  item,
  showButton,
  handleUpdateCartQty,
  handleRemoveItemFromCart,
}) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const [data, setData] = useState({});
  const {} = useSelector((store) => store);
  const cart = useSelector((store) => store.cartItems.cartItems);
  const { orderItemId, productId } = item;
  const { orderId } = cart;
  const [qty, setQty] = useState(0);
  const [loading, setLoading] = useState(true);

  // const handleRemoveItemFromCart = (data) => {
  //   handleRemoveItemFromCart(data)
  // };

  useEffect(() => {
    fetch(`${API_BASE_URL}product?partNumber=${item.partNumber}`)
      .then((res) => res.json())
      .then((res) => {
        const data = res.catalogEntryView[0];
        setData(data);
        setQty(+item.quantity);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false if there's an error
      });
  }, [item.partNumber]);

  const debouncedUpdateCartItem = (num) => {
    const data = { quantity: num, orderId, orderItemId, productId };
    handleUpdateCartQty(data);

    // dispatch(getCartItems());
  };

  console.log(data, item);

  return (
    <>
      {loading ? ( // Render loading skeleton if data is still loading
        <Skeleton variant="rectangular" width="100%" height={120} />
      ) : (
        <div className={cardClasses}>
          <div className="flex items-center mb-4">
            <img
              aria-hidden="true"
              alt="Sperm Concentration Rapid Test"
              src={data?.fullImage}
              className="mr-4 w-16"
            />
            <div>
              <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                {data.name}
              </h2>
              {/* <p className={textClasses}>10330207</p> */}
            </div>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-xl font-bold text-green-600">
              {data && `€ ${data?.price?.[0]?.value}`}
            </span>
            <span className="text-red-500">Save Price</span>
          </div>
          <div className="flex items-center mb-4">
            <label className={labelClasses}>Quantity:</label>
            <button
              className={`${buttonClasses} rounded-l`}
              onClick={() => {
                setQty((prev) => {
                  const updatedQty = prev - 1;
                  console.log(updatedQty, "increased");
                  debouncedUpdateCartItem(updatedQty.toString());
                  return updatedQty;
                });
              }}
              disabled={qty <= 1}
            >
              -
            </button>
            <input
              type="number"
              value={qty}
              className={`${borderClasses} w-16 text-center`}
              readOnly
            />
            <button
              className={`${buttonClasses} rounded-r`}
              onClick={() => {
                setQty((prev) => {
                  const updatedQty = prev + 1;
                  console.log(updatedQty, "increased");
                  debouncedUpdateCartItem(updatedQty.toString());
                  return updatedQty;
                });
              }}
            >
              +
            </button>
          </div>
          <div className="text-blue-500 mb-2">Your offers (0 applied)</div>
          <button
            className="text-red-500 hover:underline"
            onClick={(e) => handleRemoveItemFromCart({ orderId, orderItemId })}
          >
            Remove
          </button>
        </div>
      )}
    </>
  );
};

export default CartItem;
