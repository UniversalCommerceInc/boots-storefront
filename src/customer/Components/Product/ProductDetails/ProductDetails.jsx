// import React, { useEffect, useRef, useState } from 'react';
// import StoreStockModal from './StoreStockModal';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { receiveProductsById } from '../../../../action';
// import { useNavigate, useParams } from 'react-router-dom';
// import { AddItemToCartNew, getCartItems } from '../../../../action/cart';
// import toast from 'react-hot-toast';
// import { Toaster } from 'react-hot-toast';
// import { useDispatch, useSelector } from 'react-redux';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const ProductDetails = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [mainImage, setMainImage] = useState(null);
//   const [storeModal, setStoreModal] = useState(false);
//   const [productDetails, setProductDetails] = useState({});
//   const [loading, setLoading] = useState(true);
//   const imageContainerRef = useRef(null);
//   const { productId } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { auth } = useSelector((store) => store.auth);
//   const { customersProduct, review, cartItems } = useSelector((store) => store);
//   const wt = localStorage.getItem("wt");
//   const wtt = localStorage.getItem("wtt");

//   console.log(cartItems);

//   useEffect(() => {
//     receiveProductsById(productId).then((res) => {
//       setProductDetails(res.catalogEntryView[0]);
//       setMainImage(res.catalogEntryView[0].variants[0]);
//       setLoading(false);
//     });
//   }, [productId]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const partNumber = mainImage && mainImage.partNumber;

//     if (!wt && !wtt) {
//       toast.error("Please Login First");
//       navigate("/login");
//     }
//     if (partNumber) {
//       AddItemToCartNew({ partNumber, quantity })
//         .then((res) => {
//           toast.success("Product Added To Cart");
//           dispatch(getCartItems());
//         })
//         .catch((error) => {
//           console.error("Error adding item to cart:", error);
//         });
//     } else {
//       console.error("Part number is missing.");
//     }
//   };

//   useEffect(() => {
//     if (cartItems?.cartItems?.cart?.lines.length > 0) {
//       dispatch(getCartItems());
//     }
//   }, [cartItems?.cartItems?.cart?.lines.length]);

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const scrollLeft = () => {
//     imageContainerRef.current.scrollBy({
//       left: -100, // Adjust the scroll distance as needed
//       behavior: 'smooth',
//     });
//   };

//   const scrollRight = () => {
//     imageContainerRef.current.scrollBy({
//       left: 100, // Adjust the scroll distance as needed
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <>
//       <Toaster />
//       {storeModal && <StoreStockModal isTrue={storeModal} setIsTrue={setStoreModal} />}
//       <div className="flex flex-col md:flex-row mt-10 items-start md:items-center p-4 bg-white space-y-4 md:space-y-0 md:space-x-8 max-w-5xl mx-auto gap-10">
//         {/* Product Image */}
//         <div className="w-full md:w-1/2">
//           <div className="relative h-96">
//             {loading ? (
//               <Skeleton height="100%" width="100%" />
//             ) : (
//               <img
//                 src={mainImage?.mainImage}
//                 alt="Philips Series 9000 Trimmer"
//                 className="w-full h-full object-cover rounded-md shadow-lg"
//               />
//             )}
//             {!loading && (
//               <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">Offer</span>
//             )}
//           </div>
//           <div className="flex space-x-2 mt-2 w-full items-center">
//             <button onClick={scrollLeft} className="mr-2 text-wwwbootscom-congress-blue bg-gray-200 p-1 rounded">
//               <IoIosArrowBack size={'30px'} />
//             </button>
//             <div
//               ref={imageContainerRef}
//               className="flex space-x-2 overflow-x-auto scrollbar-hide"
//               style={{ scrollBehavior: 'smooth' }}
//             >
//               {loading ? (
//                 <Skeleton width={80} height={80} count={4} />
//               ) : (
//                 productDetails?.variants?.map((el, index) => (
//                   <img
//                     key={index}
//                     onClick={() => setMainImage(el)}
//                     src={el?.smallImage}
//                     alt="Thumbnail"
//                     className="w-20 h-20 object-cover rounded-md border"
//                   />
//                 ))
//               )}
//             </div>
//             <button onClick={scrollRight} className="ml-3 text-wwwbootscom-congress-blue bg-gray-200 p-1 rounded">
//               <IoIosArrowForward size={"30px"} />
//             </button>
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="w-full md:w-1/2 space-y-4">
//           {loading ? (
//             <>
//               <Skeleton width="60%" height={30} />
//               <Skeleton width="40%" height={20} />
//               <Skeleton width="30%" height={40} />
//               <Skeleton width="50%" height={20} />
//               <Skeleton width="80%" height={40} />
//               <Skeleton width="100%" height={50} />
//             </>
//           ) : (
//             <>
//               <h2 className="text-2xl font-bold">{productDetails?.name}</h2>
//               <div className="flex items-center space-x-2">
//                 <span className="text-yellow-500 text-lg font-bold">4.5</span>
//                 <span className="text-gray-500">(131 reviews)</span>
//               </div>
//               <div className="text-3xl font-bold text-gray-800">{productDetails?.price?.[0]?.value}</div>
//               <div className="text-green-600 font-bold">Save £45.00 Was £129.99</div>
//               <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600">
//                 Great savings on selected Electrical Beauty - online only
//               </button>
//               <div className="text-gray-600 text-lg">Stock coming soon</div>
//               <p className="text-gray-500">
//                 This product is temporarily unavailable online. Use 'Find in store' below to see if it’s in stock near you.
//               </p>
//             </>
//           )}
//           <div className="flex items-center space-x-4">
//             {/* Quantity Selector */}
//             <div className="flex items-center p-1 border rounded">
//               <button
//                 onClick={decreaseQuantity}
//                 className="px-3 py-1 bg-gray-100 border-r"
//               >
//                 -
//               </button>
//               <input
//                 type="text"
//                 value={quantity}
//                 readOnly
//                 className="w-12 text-center border-r"
//               />
//               <button
//                 onClick={increaseQuantity}
//                 className="px-3 py-1 bg-gray-100"
//               >
//                 +
//               </button>
//             </div>

//             {/* Add to Basket Button */}
//             <button
//               onClick={handleSubmit}
//               className="px-6 py-2 bg-wwwbootscom-congress-blue hover:bg-btn-hover w-full text-white font-semibold rounded"
//               disabled={loading}
//             >
//               Add to basket
//             </button>
//           </div>

//           {/* Payment Options */}
//           <div className="flex flex-col space-y-2">
//             {/* Payment options can be added here */}
//           </div>

//           {/* Find in Store Button */}
//           <button
//             onClick={() => setStoreModal(true)}
//             className="mt-4 bg-wwwbootscom-link-water text-wwwbootscom-congress-blue font-bold py-2 px-4 rounded-md hover:text-white hover:bg-btn-hover flex items-center space-x-2"
//             disabled={loading}
//           >
//             <span>Find in store</span>
//             {/* You can use an icon here for better UI */}
//           </button>
//         </div>
//       </div>
//       <hr className='border-2 sm:mx-20 mt-5' />
//       <div className="p-6 bg-white max-w-5xl mx-auto">
//         <div className="text-pink-600 text-sm mb-4">
//           Collect <span className="font-bold">15 Boots Advantage Card points</span> with this purchase
//         </div>
//         <div className="flex flex-col md:flex-row gap-2 md:gap-20">
//           <div className="text-gray-700 font-semibold space-y-2">
//             <div>
//               <div className="text-sm font-bold">Product Code: {productDetails?.itemType}</div>
//               <div className="text-sm">Product type: Hair clippers</div>
//               <div className="text-sm">Delivery Options</div>
//               <div className="text-sm">Click & Collect - Free</div>
//               <div className="text-sm">Standard Delivery £3.75 or free when you spend £25 or more</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;
import React, { useEffect, useRef, useState } from "react";
import StoreStockModal from "./StoreStockModal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { receiveProductsById } from "../../../../action";
import { useNavigate, useParams } from "react-router-dom";
import { AddItemToCartNew, getCartItems } from "../../../../action/cart";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");
  const [featuredImage, setFeaturedImage] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [productVariants, setProductVariants] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [storeModal, setStoreModal] = useState(false);
  const imageContainerRef = useRef(null);
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store.auth);
  const { cartItems } = useSelector((store) => store);

  useEffect(() => {
    receiveProductsById(productId).then((res) => {
      const product = res.catalogEntryView[0];
      const imageUrls = product.fullImage.split(" | ");
      const variants = product.sKUs || [];

      setProductDetails(product);
      setFeaturedImage(imageUrls);
      setMainImage(imageUrls[0]);
      setProductVariants(variants);
      setSelectedVariant(variants[0] || null);
      setLoading(false);
    });
  }, [productId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const partNumber =
      selectedVariant?.partNumber || productDetails?.partNumber;

    if (!localStorage.getItem("wt") && !localStorage.getItem("wtt")) {
      toast.error("Please Login First");
      navigate("/login");
      return;
    }

    if (partNumber) {
      AddItemToCartNew({ partNumber, quantity })
        .then(() => {
          toast.success("Product Added To Cart");
          dispatch(getCartItems());
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
        });
    } else {
      console.error("Part number is missing.");
    }
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const scrollLeft = () => {
    imageContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    imageContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
  };

  return (
    <>
      <Toaster />
      {storeModal && (
        <StoreStockModal isTrue={storeModal} setIsTrue={setStoreModal} />
      )}
      <div className="flex flex-col md:flex-row mt-10 items-start md:items-center p-4 bg-white space-y-4 md:space-y-0 md:space-x-8 max-w-5xl mx-auto gap-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <div className="relative h-96">
            {loading ? (
              <Skeleton height="100%" width="100%" />
            ) : (
              <img
                src={mainImage}
                alt={productDetails.name}
                className="w-full h-full object-contain rounded-md shadow-lg"
              />
            )}
            {!loading && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
                Offer
              </span>
            )}
          </div>
          <div className="flex space-x-2 mt-2 w-full items-center">
            <button
              onClick={scrollLeft}
              className="mr-2 text-wwwbootscom-congress-blue bg-gray-200 p-1 rounded"
            >
              <IoIosArrowBack size={"30px"} />
            </button>
            <div
              ref={imageContainerRef}
              className="flex space-x-2 overflow-x-auto scrollbar-hide"
              style={{ scrollBehavior: "smooth" }}
            >
              {loading ? (
                <Skeleton width={80} height={80} count={4} />
              ) : (
                featuredImage.map((url, index) => (
                  <img
                    key={index}
                    onClick={() => setMainImage(url)}
                    src={url}
                    alt={`Featured ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-md border cursor-pointer"
                  />
                ))
              )}
            </div>
            <button
              onClick={scrollRight}
              className="ml-3 text-wwwbootscom-congress-blue bg-gray-200 p-1 rounded"
            >
              <IoIosArrowForward size={"30px"} />
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-4">
          {loading ? (
            <>
              <Skeleton width="60%" height={30} />
              <Skeleton width="40%" height={20} />
              <Skeleton width="30%" height={40} />
              <Skeleton width="50%" height={20} />
              <Skeleton width="80%" height={40} />
              <Skeleton width="100%" height={50} />
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold">
                {selectedVariant?.name || productDetails?.name}
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500 text-lg font-bold">4</span>
                <span className="text-gray-500">(131 reviews)</span>
              </div>
              <div className="text-3xl font-bold text-gray-800">
                €
                {selectedVariant?.price?.[0]?.value ||
                  productDetails?.price?.[0]?.value}
              </div>
              <div className="text-green-600 font-bold">
                Save €45.00 Was €129.99
              </div>
              <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600">
                Great savings on selected Electrical Beauty - online only
              </button>
              {/* Product Description */}
              <p className="text-gray-500">
                {selectedVariant?.shortDescription ||
                  productDetails?.shortDescription}
              </p>

              {/* Product Variants */}
              <div className="flex flex-wrap gap-2 mt-4">
                {productVariants.map((variant, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      const variantImage = variant.fullImage.split(" | ")[0];
                      setMainImage(variantImage);
                      setSelectedVariant(variant);
                    }}
                    className={`cursor-pointer border p-2 rounded-md ${
                      selectedVariant?.partNumber === variant.partNumber
                        ? "border-blue-500"
                        : ""
                    }`}
                  >
                    <img
                      src={variant.thumbnail}
                      alt={`Variant ${index + 1}`}
                      className="w-16 h-16 object-cover rounded-md border"
                    />
                  </div>
                ))}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 mt-4">
                <button
                  onClick={decreaseQuantity}
                  className="px-4 py-2 bg-gray-200 border rounded"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-16 text-center border rounded"
                />
                <button
                  onClick={increaseQuantity}
                  className="px-4 py-2 bg-gray-200 border rounded"
                >
                  +
                </button>
              </div>

              {/* Add to Basket Button */}
              <button
                onClick={handleSubmit}
                className="mt-4 px-6 py-2 bg-wwwbootscom-congress-blue hover:bg-btn-hover w-full text-white font-semibold rounded"
                disabled={loading}
              >
                Add to basket
              </button>

              {/* Find in Store Button */}
              <button
                onClick={() => setStoreModal(true)}
                className="mt-4 bg-wwwbootscom-link-water text-wwwbootscom-congress-blue font-bold py-2 px-4 rounded-md hover:text-white hover:bg-btn-hover flex items-center space-x-2"
                disabled={loading}
              >
                <span>Find in store</span>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
