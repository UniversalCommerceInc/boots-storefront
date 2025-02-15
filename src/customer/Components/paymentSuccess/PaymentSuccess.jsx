// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useLocation, useParams } from 'react-router-dom';
// import styled, { createGlobalStyle, keyframes } from 'styled-components';
// import { getCutomerOrdersNew } from '../../../action/cart';
// import { ordersById } from '../../../action';
// import PersonIcon from '@mui/icons-material/Person';
// import HomeIcon from '@mui/icons-material/Home';
// import LocationCityIcon from '@mui/icons-material/LocationCity';
// import MapIcon from '@mui/icons-material/Map';
// import MailIcon from '@mui/icons-material/Mail';
// import FlagIcon from '@mui/icons-material/Flag';
// import PhoneIcon from '@mui/icons-material/Phone';
// import { FaUser, FaPhone, FaHome, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
// import AddressCard from '../adreess/AdreessCard';

// const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: Arial, sans-serif;
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   padding: 20px;
//   animation: ${fadeIn} 0.5s ease-in-out;
// `;

// const Section = styled.div`
//   width: 100%;
//   padding: 20px;
//   @media (min-width: 768px) {
//     width: 48%;
//   }
// `;

// const ThankYou = styled.div`
//   text-align: center;
//   .successImage{
//     display: flex;
//     justify-content: center;
//   }
//   img {
//     width: 100px;
//     height: 100px;
//     margin-bottom: 20px;
//   }
//   h1 {
//     font-size: 24px;
//     margin: 20px 0 10px;
//   }
//   p {
//     margin: 5px 0;
//   }
//   a {
//     color: #007bff;
//     text-decoration: none;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const NewCollection = styled.div`
//   img {
//     width: 100%;
//     height: auto;
//     margin-top: 20px;
//     border-radius: 10px;
//   }
// `;

// const CreateAccount = styled.div`
//   margin-top: 20px;
//   h2 {
//     font-size: 20px;
//     margin-bottom: 10px;
//   }
//   input {
//     width: calc(50% - 10px);
//     padding: 10px;
//     margin: 5px 0;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//   }
//   button {
//     background-color: #8bc34a;
//     color: white;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     &:hover {
//       background-color: #7cb342;
//     }
//   }
// `;

// const ItemsOrdered = styled.div`
//   margin-top: 20px;
//   h2 {
//     margin-bottom: 10px;
//   }
//   table {
//     width: 100%;
//     border-collapse: collapse;
//     th, td {
//       border: 1px solid #ccc;
//       padding: 10px;
//       text-align: left;
//     }
//     th {
//       background-color: #f9f9f9;
//     }
//     tfoot td {
//       text-align: right;
//     }
//   }
// `;

// const AddressInfo = styled.div`
//   margin-top: 20px;
//   padding:0 50px ;
//   width:100%;
//   gap:20px;
//   display:flex;
//   justify-content: space-between;
//   .flex {
//     border: 1px solid #ccc;
//     padding: 10px;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 10px;
//     border-radius: 5px;
//     h3{
//       font-weight: bold;
//       font-size:18px;
//     }
//     .method{
//       margin:0 auto;
//     }
//   }
// `;

// const SubTitle = styled.h3`
//   margin-bottom: 10px;
//   font-size: 1.5em;

//   @media (max-width: 600px) {
//     font-size: 1.2em;
//   }
// `;

// const Text = styled.p`
//   margin: 5px 0;
//   font-size: 1em;
//   font-weight: bold;
// `;
// const Text1 = styled.span`
//   margin: 5px 0;
//   color:#414141;
//   font-size: 1.1em;
//   font-weight: 400;
// `;

// const PaymentSuccess = () => {
//   const location = useLocation();
//   const paymentsuccessdata = location.state;
//   const [showDetails, setShowDetails] = useState(false);
//   const { orderId } = useParams()

//   console.log(orderId)

//   const [data, setData] = useState([])
//   const dispatch = useDispatch();
//   const { newOrder } = useSelector((store) => store);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const orders = await ordersById(orderId);
//         setData(orders.data.order); // Access the response data here
//       } catch (error) {
//         console.error('Error fetching customer orders:', error);
//       }
//     };

//     fetchData();
//   }, [orderId]);

//   console.log(data)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowDetails(true);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <GlobalStyle />
//       <Container>
//         <Section>
//           <ThankYou>
//             <div className='successImage'>
//               <img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" alt="Checkmark" />
//             </div>
//             <h1>THANK YOU FOR YOUR PURCHASE!</h1>
//             <p>You will receive an order confirmation email with details of your order.</p>
//             <p>Your order # is: {data?.id}</p>
//             <Link to="/shops">Continue Shopping</Link>
//           </ThankYou>
//           <NewCollection>
//             <img src="https://india.ray-ban.com/media/wysiwyg/Rb_sunglasses_clp_opti/07_RB_Sunglasses_Page_Bottom_Banner_Desktop.jpg" alt="New Collection" />
//           </NewCollection>

//         </Section>
//         <Section>
//           <ItemsOrdered>
//             <h2>ITEMS ORDERED</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Product Name</th>
//                   <th>Id</th>
//                   <th>Price</th>
//                   <th>Qty</th>
//                   <th>Subtotal</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data?.lines?.map((el,index)=>
//                 <tr>
//                   <td>{el?.productVariant?.name}</td>
//                   <td>{el?.id}</td>
//                   <td>₹{el?.productVariant?.priceWithTax}.00</td>
//                   <td>Ordered: {el?.quantity}</td>
//                   <td>₹{el?.linePriceWithTax}.00</td>
//                 </tr>
//                 )}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <td colSpan="4">Subtotal</td>
//                   <td>₹{data?.subTotalWithTax}.00</td>
//                 </tr>
//                 <tr>
//                   <td colSpan="4">Shipping & Handling</td>
//                   <td>{data?.shippingWithTax}.00</td>
//                 </tr>
//                 <tr>
//                   <td colSpan="4">Grand Total</td>
//                   <td>₹{data?.totalWithTax }.00</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </ItemsOrdered>

//         </Section>
//         <div style={{width:'100%'}}>
//         <AddressInfo>
//           <div  style={{width:'100%'}}>
//             <AddressCard heading={"Billing Address"} address={data?.billingAddress} />
//           </div>
//           <div style={{width:'100%'}} >
//             <AddressCard heading={"Shipping Address"} address={data?.shippingAddress} />

//           </div>
//         </AddressInfo>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default PaymentSuccess;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ordersById, receiveProductsByPartNumber } from "../../../action";
import { getCartItems } from "../../../action/cart";
import { useDispatch } from "react-redux";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationPlayed(true);
    }, 2000);

    const fetchOrderDetails = async () => {
      try {
        const order = await ordersById(orderId);
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

    return () => clearTimeout(timeout);
  }, [orderId]);

  const handleNewOrder = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-600">
          Loading your order details...
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center">
      <div
        className={`bg-white p-10 rounded-lg shadow-xl text-center transform transition-all duration-700 ease-out ${
          animationPlayed ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        {!animationPlayed && (
          <img
            src="https://i.gifer.com/7efs.gif"
            alt="Payment Animation"
            className="mb-4 w-36 h-36 mx-auto"
          />
        )}
        {animationPlayed && (
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/11433/11433360.png"
              className="h-36 w-36"
              alt="Success Icon"
            />
            <h2 className="text-3xl font-bold mt-6 text-gray-800">
              Payment Successful!
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Thank you for your purchase. Your payment has been successfully
              processed.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Order Summary
              </h3>
              <ul className="space-y-4">
                {orderDetails.orderItem.map((item, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <img
                      src={products[index]?.thumbnail}
                      alt={products[index]?.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">
                        {products[index]?.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.quantity} x €
                        {parseFloat(item.unitPrice).toFixed(2)} = €
                        {parseFloat(item.orderItemPrice).toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="text-lg font-semibold text-gray-800">
                  Total: €{parseFloat(orderDetails.grandTotal).toFixed(2)}
                </p>
              </div>
            </div>
            <button
              onClick={handleNewOrder}
              className="mt-8 bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition-colors duration-300"
            >
              Go Back for New Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
