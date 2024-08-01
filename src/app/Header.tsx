import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="top-banner w-full flex items-center justify-around p-2.5 bg-blue-100 text-sm text-gray-800">
          <p>Special offer! Get -20% off for first order with minimum $200.00 in cart.</p>
          <div className="banner-right flex items-center">
            <span className="language-currency mr-2.5">English | USD</span>
            <button className="sign-btn bg-yellow-400 text-gray-800 px-2.5 py-1 border-none rounded cursor-pointer flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Sign In / Sign Up
            </button>
          </div>
        </div>
        <div className="header-main w-full flex flex-col md:flex-row items-center justify-center p-5 bg-white border-b border-gray-300 gap-6">
          <img src="https://doccure.dreamstechnologies.com/react/template/e196fae05467bf1c6a3b.png" alt="Doccure Logo" className="logo w-25 h-10 mb-4 md:mb-0" />
          <div className="search-container w-full flex flex-col md:flex-row items-center max-w-lg mx-5">
            <input type="text" placeholder="Enter Pincode" className="pincode-input p-2.5 mb-2 md:mb-0 md:mr-1.25 border border-gray-300 rounded w-full md:w-auto" />
            <input type="text" placeholder="Search for medicines, health products and more" className="search-input p-2.5 mb-2 md:mb-0 md:mr-1.25 border border-gray-300 rounded w-full md:flex-grow" />
            <button className="search-btn bg-blue-600 text-white px-5 py-2.5 border-none rounded cursor-pointer w-full md:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21l2-2 8-8-8-8-2-2M7 7l-2 2m0 0l-2-2m2 2l2-2m0 0l2-2m2 2l2 2m-2-2l-2 2m2-2l-2 2m2-2l2 2m-2-2l2 2m-2-2l2 2m2-2l2 2m-2-2l2 2m-2-2l2 2m2-2l2 2" />
              </svg>
            </button>
          </div>
          <div className="header-right flex items-center text-black">
            <div className="shopping-cart flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="cart-icon h-6 w-6 mr-1.25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.343 3.444A5 5 0 0010.5 10h7.172a5 5 0 004.985-4.437L21 3H3z" />
              </svg>
              <span>Shopping cart</span>
              <span className="ml-2 text-red-500">(2)</span>
              <span className="ml-2">$57.00</span>
            </div>
          </div>
        </div>
        <nav className="nav-menu w-full bg-gray-200 py-2.5">
          <ul className="flex justify-center m-0 p-0 list-none">
            <li className="mx-2.5">
              <a href="#" className="text-gray-800 p-2.5 rounded hover:bg-gray-300">Browse Categories</a>
            </li>
            <li className="mx-2.5">
              <a href="#" className="text-gray-800 p-2.5 rounded hover:bg-gray-300">Home</a>
            </li>
            <li className="mx-2.5">
              <a href="#" className="text-gray-800 p-2.5 rounded hover:bg-gray-300">Doctors</a>
            </li>
            <li className="mx-2.5">
              <a href="#" className="text-gray-800 p-2.5 rounded hover:bg-gray-300">Patients</a>
            </li>
            <li className="mx-2.5">
              <a href="#" className="text-gray-800 p-2.5 rounded hover:bg-gray-300">Pharmacy</a>
            </li>
            <li className="mx-2.5">
              <a href="#" className="text-gray-800 p-2.5 rounded hover:bg-gray-300">Pages</a>
            </li>
            <li className="mx-2.5">
              <a href="#" className="text-gray-800 p-2.5 rounded hover:bg-gray-300">Blog</a>
            </li>
            <li className="mx-2.5">
              <a href="#" className="text-gray-800 p-2.5 rounded hover:bg-gray-300">Admin</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
