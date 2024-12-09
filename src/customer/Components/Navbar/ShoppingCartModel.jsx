// import React, { useEffect, useState, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { RemoveCartItemNew, updateCartQtyNEW, getCartItems, updateCartQtyModel } from '../../../action/cart';
// import DeleteIcon from '@mui/icons-material/Delete';

// const buttonStyles = 'absolute top-2 right-2 text-zinc-500 hover:text-zinc-700';
// const containerStyles = 'flex justify-center items-center w-full h-[40vh] bg-zinc-100';
// const innerContainerStyles = 'relative w-full h-[40vh] max-w-md p-4 bg-white border border-zinc-300 rounded shadow-md';
// const textStyles = 'text-center m-14 text-zinc-600';
// const buttonClasses = 'px-2 py-1 border';

// export const EmptyCart = ({ handleCloseCart }) => {
//   return (
//     <div className={containerStyles}>
//       <div className={innerContainerStyles}>
       
//       <div className="bg-white p-4 border border-border rounded-lg mt-6">
//       <h2 className="text-lg font-bold">Your basket</h2>
//       <p className="text-danger mt-2">Your basket is empty</p>
//     </div>
//       </div>
//     </div>
//   );
// };

// const debounce = (func, wait) => {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), wait);
//   };
// };

// const CartItem = ({ id, imageSrc, productName, price, quantity, onUpdateQuantity, onRemoveItem }) => {
//   const [inputQuantity, setInputQuantity] = useState(quantity);

  

//   return (
//     <div className="flex justify-between border-2 p-4 items-center ">
//       <img src={imageSrc} alt={productName} className="w-[130px] h-auto object-cover rounded" />
//       <div className="flex flex-col flex-grow ml-4">
//         <span className="text-zinc-700 dark:text-zinc-300">{productName}</span>
//         <span className="text-zinc-900 dark:text-zinc-100 font-bold">₹{price}</span>
//         <div className="flex items-center mt-2">
//           <div className="flex items-center">
//             <button onClick={() => {
//               // setInputQuantity((prev) => Math.max(prev - 1, 1))
//             // console.log("input ",inputQuantity)
//               onUpdateQuantity(id, quantity-1);
//             }}
//             disabled={quantity === 1}
//             className={buttonClasses}>-</button>
//             <span className="px-4">{quantity}</span>
//             <button onClick={() =>{
              
//               // setInputQuantity((pre)=>pre + 1)
//               // console.log("input ",inputQuantity)

//               onUpdateQuantity(id,  quantity+1)

//              } } className={buttonClasses}>+</button>
//           </div>
//           <button className="ml-2 text-zinc-500 dark:text-zinc-400" onClick={() => onRemoveItem(id)}><DeleteIcon /></button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ShoppingCart = ({ handleCloseCart }) => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cartItems.cartItems.cart);
//   const cartItems = cart?.lines || [];
//   const jwt = localStorage.getItem("jwt");

//   useEffect(() => {
//     dispatch(getCartItems());
//   }, [dispatch, jwt]);

//   const handleUpdateQuantity = (lineId, quantity) => {
//     console.log(lineId,quantity)
//     updateCartQtyModel({ lineId, quantity }, toast).then(() => {
//       dispatch(getCartItems());
//     });
//   };

//   const handleRemoveItem = (lineId) => {
//     dispatch(RemoveCartItemNew(lineId));
//   };

//   const subtotal = cartItems?.reduce((total, item) => total + item.productVariant.price * item.quantity, 0).toFixed(2);

//   return (
//     <div className="bg-white z-100 dark:bg-zinc-800 p-4 w-96 border border-zinc-300 dark:border-zinc-700 shadow-lg rounded">
//       <div className="flex justify-between items-center border-b pb-2 mb-2">
//         <span className="text-zinc-700 dark:text-zinc-300">{cartItems?.length} Items in Cart</span>
//         <button onClick={handleCloseCart} className="text-zinc-500 dark:text-zinc-400">✕</button>
//       </div>
//       <div className="flex justify-between items-center mb-4">
//         <span className="text-zinc-700 dark:text-zinc-300">Cart Subtotal :</span>
//         <span className="text-zinc-900 dark:text-zinc-100 font-bold">₹{subtotal}</span>
//       </div>
//       <Link to="/checkout?step=1">
//         <button onClick={handleCloseCart} className="w-full bg-red-600 text-white py-2 rounded mb-4">PROCEED TO CHECKOUT</button>
//       </Link>
//       <div className="overflow-y-auto max-h-40 mb-4">
//         {cartItems?.map((item, index) => (
//           <CartItem
//             key={index}
//             id={item.id}
//             imageSrc={item?.productVariant?.featuredAsset?.url}
//             productName={item?.productVariant?.name}
//             price={item?.productVariant?.price}
//             quantity={item?.quantity}
//             onUpdateQuantity={handleUpdateQuantity}
//             onRemoveItem={handleRemoveItem}
//           />
//         ))}
//       </div>
//       <button className="w-full text-center text-zinc-700 dark:text-zinc-300 py-2 border-t border-zinc-300 dark:border-zinc-700" onClick={handleCloseCart}>
//         <Link to="/cart">View and Edit Cart</Link>
//       </button>
//     </div>
//   );
// };

// export default ShoppingCart;


