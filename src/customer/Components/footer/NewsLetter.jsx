import React from 'react';

const NewsLetter = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="text-center max-w-2xl w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Let's stay in touch
        </h2>
        <p className="text-gray-600 mb-6">
          Millions already enjoy our free emails full of offers, exclusives & new products
        </p>
        <form className="flex flex-col sm:flex-row items-center">
          <input
            type="email"
            placeholder="yourname@example.co.uk"
            className="w-full sm:w-auto sm:flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 sm:mb-0 sm:mr-4"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            SIGN UP
          </button>
        </form>
        <p className="text-gray-500 text-sm mt-4">
          You can unsubscribe at any time. See our <a href="#" className="underline text-blue-600">privacy policy</a> for more info on how we use your data.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
