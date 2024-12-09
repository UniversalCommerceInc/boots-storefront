import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import AdventCalendar from './AdventCalender';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Sample products data
const products = [
  {
    alt: 'photo-printing',
    text: 'Trending',
    src: 'https://assets.boots.com/content/dam/boots/homepage/2023-2024/7--march/wc-1103/P8a_1403_Homepage_CricleNav_NewTrending.dam.ts%3D1710244923054.png',
  },
  {
    alt: 'skincare',
    text: 'Skincare',
    src: 'https://assets.boots.com/content/dam/boots/homepage/2023-2024/9--may/wc-0605/P10a_Homepage_CircleNav_SunHoliday.dam.ts%3D1716208803095.png',
  },
  {
    alt: 'health-hub-skin-advice',
    text: 'Prescriptions',
    src: 'https://assets.boots.com/content/dam/boots/homepage/2023-2024/9--may/wc-0605/P10a_Homepage_CircleNav_Pollen.dam.ts%3D1715087584705.png',
  },
  {
    alt: 'trending',
    text: 'Photo printing',
    src: 'https://assets.boots.com/content/dam/boots/shop-by-department/photo/2020-2021/11b/Photo11b_PhotoPrinting_CircleNav_Prints_Supplied.dam.ts%3D1621523495789.jpg',
  },
  {
    alt: 'prescriptions',
    text: ' Health Hub skin advice',
    src: 'https://assets.boots.com/content/dam/boots/shop-by-department/health-hub/skin-and-dermatology/HealthHub_Skin_Services_Circle_Nav.dam.ts%3D1712587239630.png',
  },
  {
    alt: 'advantage-card',
    text: 'Sign up to Advantage Card',
    src: 'https://assets.boots.com/content/dam/boots/ad-card-25th-birthday-/bubble-navs/Price-advantage-nav.dam.ts%3D1663666755018.png',
  },
];

const CarouselContainer = styled.div`
  width: 95%;
  margin: auto;
  
  
`;

const ProductCard = styled.div`
  padding: 20px;
  position: relative;
  margin: 10px; // Adjusted margin to create space between cards
  background-color: aliceblue;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
   text-align: center; 
       padding:auto;

display:flex;
align-item:center;
justfy-content:center;
  img {
    width: 50%;
    padding:auto;
    height: auto;
    border-radius: 8px; // Add border-radius to the image
  }

  p {
    margin: 10px 0; // Increased margin for better spacing
  }
`;

const Arrow = styled.div`
  font-size: 3rem;
  color: black;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const PrevArrow = styled(Arrow)`
color:black;
  left: 10px;
`;

const NextArrow = styled(Arrow)`
color:black;
  right: 10px;
`;
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
const Carousel = ({text}) => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Adjusted breakpoint for mobile view
        settings: {
          slidesToShow: 3, // Show 3 items per row on mobile
        },
      },
      {
        breakpoint: 480, // Adjusted breakpoint for mobile view
        settings: {
          slidesToShow: 2, // Show 3 items per row on mobile
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {products.map((product) => (

     <AdventCalendar {...product}/>
        ))}
      </Slider>
      <PrevArrow />
      <NextArrow />
    </CarouselContainer>
  );
};

export default Carousel;
