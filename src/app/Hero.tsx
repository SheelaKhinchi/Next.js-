// components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-blue-900 text-white flex justify-center items-center p-5">
        <div className="hero-inner flex items-center justify-between max-w-screen-xl w-full">
          <div className="hero-content flex-1 p-5">
            <h1 className="text-3xl mb-2 leading-tight">
              From the
              <br /> Leading Online
              <br />
              Pharmacy
            </h1>
            <h2 className="text-lg mb-5 text-yellow-400">
              & Healthcare Platform Company
            </h2>
            <p className="text-lg mb-5">
              Essentials Nutrition & Supplements from all over the suppliers
              around the World
            </p>
            <button className="hero-btn bg-white text-blue-900 px-5 py-2.5 border-none rounded cursor-pointer">
              Shop Now
            </button>
          </div>
          <div className="hero-image flex-1 flex justify-center items-center">
            <img
              src="https://doccure.dreamstechnologies.com/react/template/9119d8e478c7549ab6b1.png"
              alt="Hero Image"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Welcome Banner Section */}
      <div className="welcome-banner bg-cyan-100 flex justify-center items-center p-5 gap-8">
        <div className="welcome-content flex items-center">
          <img
            src="https://doccure.dreamstechnologies.com/react/template/6883a67ccd19ea1a94d7.png"
            alt="Doccure Logo"
            className="welcome-logo w-12 h-12 mr-5"
          />
          <div className="welcome-text">
            <h2 className="text-teal-700 m-0">Welcome to Doccure</h2>
            <p className="text-teal-700 mt-1 mb-0">
              Download the app get free medicine & 50% off on your first order
            </p>
          </div>
        </div>
        <button className="download-app-btn bg-indigo-600 text-white border-none px-5 py-2.5 rounded cursor-pointer">
          Download App
        </button>
      </div>

      {/* Promo Section */}
      <div className="flex justify-center w-full mt-10">
        <section className="flex justify-center gap-5 p-5 max-w-6xl w-full">
          <div className="flex items-center p-5 rounded-lg shadow-md max-w-xs w-full bg-red-300">
            <div className="flex justify-between items-center w-full">
              <div className="flex-1 mr-3 text-left">
                <h3 className="my-2 text-lg">10% Cashback on Dietary Supplements</h3>
                <p className="my-1 text-sm text-gray-600">Code: CARE12</p>
                <button className="py-2 px-4 text-white rounded bg-red-700 cursor-pointer">Shop Now</button>
              </div>
              <img
                src="https://doccure.dreamstechnologies.com/react/template/fb0e87ab43617eead09a.png"
                alt="Vitamin B7"
                className="w-24 h-26 ml-2"
              />
            </div>
          </div>
          <div className="flex items-center p-5 rounded-lg shadow-md max-w-xs w-full bg-blue-300">
            <div className="flex justify-between items-center w-full">
              <div className="flex-1 mr-3 text-left">
                <h3 className="my-2 text-lg">Say yes to New Throat Freshner</h3>
                <p className="my-1 text-sm text-gray-600">Refresh your day the fruity way</p>
                <button className="py-2 px-4 text-white rounded bg-blue-700 cursor-pointer">Shop Now</button>
              </div>
              <img
                src="https://doccure.dreamstechnologies.com/react/template/0621b9661957ddc1d9ad.png"
                alt="Throat Freshner"
                className="w-24 h-24 ml-2"
              />
            </div>
          </div>
          <div className="flex items-center p-5 rounded-lg shadow-md max-w-xs w-full bg-purple-300">
            <div className="flex justify-between items-center w-full">
              <div className="flex-1 mr-3 text-left">
                <h3 className="my-2 text-lg">Get a Product Worth 1000 in a Pack</h3>
                <p className="my-1 text-sm text-gray-600">Code: CARE12</p>
                <button className="py-2 px-4 text-white rounded bg-purple-700 cursor-pointer">Shop Now</button>
              </div>
              <img
                src="https://doccure.dreamstechnologies.com/react/template/a0ca4f98c611772f465b.png"
                alt="Product Pack"
                className="w-24 h-24 ml-2"
              />
            </div>
          </div>
        </section>
      </div>
    </div>





  );
};

export default Hero;
