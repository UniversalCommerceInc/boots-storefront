// import React, { useEffect, useState } from "react";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import ShoppingCart from "./ShoppingCart";
// import NestedMenu from "./NestedMenu";
// import { Link } from "react-router-dom";
// import Loader from "../BackDrop/Loader";
// import { useDispatch, useSelector } from "react-redux";
// import { getCartItems } from "../../../action/cart";
// import { API_BASE_URL } from "../../../config/api";
// import axios from "axios";
// import SearchIcon from "@mui/icons-material/Search";

// const NewNavbar = () => {
//   const dispatch = useDispatch();

//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [isLoading, setLoading] = useState(false);
//   const [cartdata, setCartData] = useState([]);
//   const cart = useSelector((store) => store.cartItems.cartItems);
//   const wt = localStorage.getItem("wt");
//   const wtt = localStorage.getItem("wtt");
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${API_BASE_URL}cart`, {
//           headers: {
//             wt: wt || user?.WCToken,
//             wtt: wtt || user?.WCTrustedToken,
//           },
//         });
//         const data = response.data;
//         setCartData(data.orderItem);
//         // setLoading(false); // Set loading to false once data is fetched
//       } catch (error) {
//         console.log("Error", error);
//       }
//     };

//     fetchData();
//   }, [user, wt, wtt]);

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     if (open) {
//       setLoading(true);
//       setTimeout(() => {
//         setLoading(false);
//         setDrawerOpen(open);
//       }, 1000);
//     } else {
//       setDrawerOpen(open);
//     }
//   };

//   return (
//     <>
//       <nav className="bg-white w-full shadow-md pb-4">
//         <div className="w-full mx-auto px-4 flex justify-between items-center py-4">
//           <div className="flex w-[90%] justify-between items-center gap-4 space-x-4">
//             <Link to="/">
//               <img
//                 src="/bvi20logo20v2png@2x.png"
//                 alt="Boots Logo"
//                 className="w-24"
//               />
//             </Link>
//             <div className="relative w-full m-2">
//               <input
//                 type="text"
//                 placeholder="Search products, brands and services..."
//                 className="border w-[95%] border-gray-300 py-2 px-4 "
//               />
//               <button className="absolute right-14 top-2 w-5 h-5 text-wwwbootscom-deep-cove">
//                 {/* <img src="button--search@3x.png" loading="lazy" alt="Search" /> */}
//                 <SearchIcon sx={{ color: "indigo.900" }} />
//               </button>
//             </div>
//           </div>

//           <div className="flex items-center space-x-6">
//             <div className="relative">
//               <IconButton onClick={toggleDrawer(true)}>
//                 <img
//                   className="h-[26px] w-[26px] relative"
//                   alt="bag"
//                   src="/img.svg"
//                 />
//               </IconButton>
//               <span className="absolute -top-1 -right-1 bg-blue-300 text-wwwbootscom-deep-cove text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {cart?.orderItem?.length || 0}
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="hidden md:flex flex-col relative items-start justify-start pt-2.5 px-4 pb-0 text-mid text-wwwbootscom-congress-blue w-full p-4">
//           <ul className="flex flex-row items-center justify-start gap-8 font-semibold">
//             <li className="group">
//               <a href="#" className="text-[inherit]">
//                 Shop by department
//               </a>
//               <div className="w-full h-[80vh] absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg py-2 px-4 z-50">
//                 <NestedMenu />
//               </div>
//             </li>
//             <li className="group">
//               <a href="#" className="text-[inherit]">
//                 Prescriptions
//               </a>
//               <div className="w-full h-[80vh] absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg py-2 px-4 z-50">
//                 <NestedMenu />
//               </div>
//             </li>
//             <li>
//               <a href="#" className="text-[inherit]">
//                 Health hub
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-[inherit]">
//                 Inspire Me
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-[inherit]">
//                 Offers No7
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
//         <div
//           className="w-[100%] p-4"
//           role="presentation"
//           onKeyDown={toggleDrawer(false)}
//         >
//           <ShoppingCart toggleDrawer={toggleDrawer} />
//         </div>
//       </Drawer>

//       {isLoading && <Loader />}
//     </>
//   );
// };

// export default NewNavbar;

import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ShoppingCart from "./ShoppingCart";
import NestedMenu from "./NestedMenu";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Loader from "../BackDrop/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../../action/cart";

const NewNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const cart = useSelector((store) => store.cartItems.cartItems);
  const wt = localStorage.getItem("wt");
  const wtt = localStorage.getItem("wtt");
  const { user } = useSelector((state) => state.auth);

  // console.log(wt, wtt, user);
  useEffect(() => {
    dispatch(getCartItems());
  }, [user, wt, wtt]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    if (open) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setDrawerOpen(open);
      }, 1000);
    } else {
      setDrawerOpen(open);
    }
  };

  const handleSearchClick = (event) => {
    event.preventDefault(); // Prevent focus on the input
    navigate("/search"); // Navigate to /search
  };

  return (
    <>
      <nav className="bg-white w-full shadow-md pb-4">
        <div className="w-full mx-auto px-4 flex justify-between items-center py-4">
          <div className="flex w-[90%] justify-between items-center gap-4 space-x-4">
            <Link to="/">
              <img
                src="/bvi20logo20v2png@2x.png"
                alt="Boots Logo"
                className="w-24"
              />
            </Link>
            <div className="relative w-full m-2">
              <input
                type="text"
                placeholder="Search products, brands and services..."
                className="border border-gray-300 py-2 px-4 w-full"
                onClick={handleSearchClick} // Handle click on the input
              />
              <button className="absolute right-2 top-2 w-5 h-5 text-wwwbootscom-deep-cove">
                <img src="button--search@3x.png" alt="" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <IconButton onClick={toggleDrawer(true)}>
                <img
                  className="h-[26px] w-[26px] relative"
                  alt="bag"
                  src="/img.svg"
                />
              </IconButton>
              <span className="absolute -top-1 -right-1 bg-blue-300 text-wwwbootscom-deep-cove text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart?.orderItem?.length || 0}
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col relative items-start justify-start pt-2.5 px-4 pb-0 text-mid text-wwwbootscom-congress-blue w-full p-4">
          <ul className="flex flex-row items-center justify-start gap-8 font-semibold ">
            <li className=" group">
              <a href="#" className="text-[inherit]">
                Shop by department
              </a>
              <div className="w-full h-[80vh] absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg py-2 px-4 z-50">
                <NestedMenu />
              </div>
            </li>
            <li className=" group">
              <a href="#" className="text-[inherit]">
                Prescriptions
              </a>
              <div className="w-full h-[80vh] absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg py-2 px-4 z-50">
                <NestedMenu />
              </div>
            </li>
            <li>
              <a href="#" className="text-[inherit]">
                Health hub
              </a>
            </li>
            <li>
              <a href="#" className="text-[inherit]">
                Inspire Me
              </a>
            </li>
            <li>
              <a href="#" className="text-[inherit]">
                Offers No7
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Drawer for bag content */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          className="w-[100%] p-4"
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <ShoppingCart toggleDrawer={toggleDrawer} />
        </div>
      </Drawer>

      {/* Show loader while loading */}
      {isLoading && <Loader />}
    </>
  );
};

export default NewNavbar;
