import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const HealthPicksSlider = ({banners}) => {
  const [selectedCategory, setSelectedCategory] = useState('Top health picks');
  const healthPicksData = [
    {
      id: 1,
      category: 'Top health picks',
      title: 'Boots vitamins',
      description: '1/2 price on selected Boots brand vitamins with Advantage Card*',
      buttonLabel: 'SHOP NOW',
      imageUrl: banners?.[31].url,
      discount: 'Price Advantage',
    },
    {
      id: 2,
      category: 'Top health picks',
      title: 'Sexual wellbeing',
      description: 'Save 15% on selected sexual wellbeing with code SWB15',
      buttonLabel: 'SHOP NOW',
      imageUrl: banners?.[34].url,
      discount: 'Save 15%',
    },
    {
      id: 3,
      category: 'Top health picks',
      title: 'Hayfever relief',
      description: 'Beat those summer sneezes & save 20% on selected hayfever relief',
      buttonLabel: 'SHOP NOW',
      imageUrl: banners?.[26].url,
      discount: 'Save 20%',
    },
    {
      id: 4,
      category: 'Top health picks',
      title: 'Travel health',
      description: 'Prep for summer holidays & save 20% on selected travel health',
      buttonLabel: 'SHOP NOW',
      imageUrl: banners?.[32].url,
      discount: 'Save 20%',
    },
    {
      id: 5,
      category: 'Buy 1 get 2nd 1/2 price',
      title: 'Hayfever',
      description: 'Prep for pollen! Buy 1 get 2nd 1/2 price on selected hayfever',
      buttonLabel: 'SHOP NOW',
      imageUrl: banners?.[33].url,
      discount: null,
    },
    {
      id: 6,
      category: 'Buy 1 get 2nd 1/2 price',
      title: 'Footcare',
      description: 'Treat your feet this summer with buy 1 get 2nd 1/2 price on selected footcare',
      buttonLabel: 'SHOP NOW',
      imageUrl: 'https://assets.boots.com/content/dam/boots/homepage/2023-2024/9--may/wc-0605/P13b_1408_Homepage_25_BOGSHP_Footcare_UK-v2.dam.8x9x360.ts%3D1723559529941.jpg',
      discount: null,
    },
    {
      id: 7,
      category: 'Buy 1 get 2nd 1/2 price',
      title: 'Summer health',
      description: 'Buy 1 get 2nd 1/2 price on selected summer health must-haves',
      buttonLabel: 'SHOP NOW',
      imageUrl: banners?.[2].url,
      discount: null,
    },
    {
      id: 8,
      category: 'Buy 1 get 2nd 1/2 price',
      title: 'First aid',
      description: 'Take care of scrapes & buy 1 get 2nd 1/2 price on selected first aid',
      buttonLabel: 'SHOP NOW',
      imageUrl: banners?.[5].url,
      discount: null,
    },
  ];
  const filteredData = healthPicksData.filter(item => item.category === selectedCategory);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div className="p-4 -mt-10">
      <div className="flex justify-center gap-8 mb-4">
        <button 
          className={`py-2 text-sm ${selectedCategory === 'Top health picks' ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}`} 
          onClick={() => setSelectedCategory('Top health picks')}
        >
          Top health picks
        </button>
        <button 
          className={`py-2 text-sm ${selectedCategory === 'Buy 1 get 2nd 1/2 price' ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}`} 
          onClick={() => setSelectedCategory('Buy 1 get 2nd 1/2 price')}
        >
          Buy 1 get 2nd 1/2 price
        </button>
      </div>
      <Slider {...settings}>
        {filteredData.map(card => (
          <div key={card.id} className="px-2 py-2   space-x-auto ">
            <div className="relative  bg-white shadow-md rounded-lg overflow-hidden h-86 flex flex-col justify-between">
              <div className="relative">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-auto  "
                />
                {card.discount && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
                    {card.discount}
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-bold text-indigo-900 text-lg">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-xs mt-2">{card.description}</p>
                </div>
                <button className="mt-4 w-full text-sm text-indigo-900 border border-indigo-900 hover:bg-indigo-900 hover:text-white py-2 rounded">
                  {card.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


const SamplePrevArrow = (props) => {
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

  const SampleNextArrow = (props) => {
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

export default HealthPicksSlider;
