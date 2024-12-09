import React from 'react';
import NewsLetter from './NewsLetter';

const Footer = () => {
  return (
    <>
      <NewsLetter />
      <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h5 className="text-blue-800 font-semibold mb-4">Shopping with Us</h5>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">A-Z Brands</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">A-Z Store</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Boots Advantage Card</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Boots App</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-blue-800 font-semibold mb-4">Customer Services</h5>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Help & FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Delivery Information</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Returns & Exchange</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Product Recall</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-blue-800 font-semibold mb-4">About Boots</h5>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Company Information</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Environmental, Social & Governance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Modern Slavery & Human Trafficking</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Privacy & Cookies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-800">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8">
          <h3 className="mb-3 text-blue-600">Our Partner Sites</h3>
          <div className="flex flex-wrap mb-5 space-x-4">
            <a href="#"><img src="https://www.boots.com/wcsstore/eBootsStorefrontAssetStore/Footer_Updated_Images/Boots_Macmillian_2019.png" alt="Partner 1" className="h-8" /></a>
            <a href="#"><img src="https://www.boots.com/wcsstore/eBootsStorefrontAssetStore/Footer_Updated_Images/hgienebank_x_boots_logov3.png" alt="Partner 2" className="h-8" /></a>
          </div>

          <div className="border-t border-gray-200 pt-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm text-center sm:text-left mt-4 sm:mt-0">
              Copyright © The Boots Company PLC. All rights reserved. Boots.com is a trading name of Boots UK Limited. Registered office: Nottingham NG2 3AA. Registered in England: company number 928555. Registered VAT number 116300129. For details of Boots online pharmacy services see Using Our Pharmacy Services page.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
