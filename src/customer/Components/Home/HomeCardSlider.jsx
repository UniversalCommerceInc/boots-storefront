import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeCardSlider = ({banners}) => {
  const cards = [
    {
      title: "Premium beauty ",
      subtitle: "Save 15% when you spend £50 or save 20% when you spend £70",
      buttonText: "SHOP NOW",
      badge: "SAVE UP TO 20%",
      imageSrc:banners?.[10]
        ,
    },
    {
      title: "Fragrance",
      subtitle: "Unlock your next summer scent & save 15% on selected fragrance",
      buttonText: "SHOP NOW",
      badge: "SAVE 15%",
      imageSrc:
      banners?.[11]
    },
    {
      title: "Dyson Supersonic",
      subtitle:
        "Save £100 on Nickel & Copper Hair Dryer. Plus, FREE next day delivery!",
      buttonText: "SHOP NOW",
      badge: "£40 ON YOUR ADVANTAGE CARD",
      imageSrc:
      banners?.[0]
    },
    {
      title: "Electrical",
      subtitle:
        "Electrifying offers on selected electrical faves you'll love this summer",
      buttonText: "SHOP NOW",
      badge: "FROM £24.99",
      imageSrc:
        banners?.[3]
    },
  ];

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 cursor-pointer"
      >
        <FaChevronLeft />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 cursor-pointer"
      >
        <FaChevronRight />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="relative w-full border-box text-center bg-gradient-to-r from-yellow-300 to-yellow-50 py-2">
      <h1 className="text-4xl font-semibold text-orange-600 mt-10">
        Celebrate summer with our hottest offers!
      </h1>
<div className="px-4">

      <Slider {...settings} className="py-4 ">
        {cards.map((card, index) => (
       <div key={index} className="px-2 w-[25%] m-4 py-2">
       <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-86 flex flex-col justify-between">
         <div className="relative">
           <img
             src={card?.imageSrc?.url}
             alt={card.title}
             loading="lazy"
             className="w-full h-40 object-cover"
           />
           <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
             {card.badge}
           </div>
         </div>
         <div className="p-4 flex flex-col justify-between flex-grow">
           <div>
             <h3 className="font-bold text-indigo-900 text-lg">
               {card.title}
             </h3>
             <p className="text-gray-700 text-sm mt-2">{card.subtitle}</p>
           </div>
           <button className="mt-4 w-full bg-indigo-900 text-white py-2 rounded">
             {card.buttonText}
           </button>
         </div>
       </div>
     </div>
     
        ))}
      </Slider>
      </div>

    </div>
  );
};

export default HomeCardSlider;
