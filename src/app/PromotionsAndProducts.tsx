// app/Categories.tsx
"use client"; // Add this line
// Import the necessary Next.js Image component
import Image from 'next/image';

const PromotionsAndProducts = () => {
  return (
    <>
      {/* Promotions Section */}
      <section className="flex gap-2 p-2 justify-center">
        <div className="flex items-center text-white p-2 shadow rounded relative max-w-sm w-full bg-blue-600">
          <div className="flex-1 text-left">
            <h1 className="text-xl mb-1">Cash On delivery<br /> Available</h1>
            <p className="text-base mb-2">Order Now, Pay Later</p>
          </div>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white text-blue-500 rounded">
            Order Now
          </button>
        </div>
        <div className="flex items-center text-white p-2 shadow rounded relative max-w-sm w-full bg-purple-500">
          <div className="flex-1 text-left">
            <h1 className="text-xl mb-1">Sale of the Month</h1>
            <p className="text-base mb-2">Offer Prices in all medicines</p>
          </div>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white text-purple-800 rounded">
            View Medicines
          </button>
        </div>
      </section>

      {/* Best Weekly Products Section */}
      <section className="best-weekly-products py-5 bg-gray-100 flex flex-col items-center">
        <h2 className="text-2xl mb-5 text-left w-full max-w-screen-lg">Best Weekly Selling Products</h2>
        <div className="products-container flex justify-center gap-4 flex-nowrap w-full max-w-screen-lg pb-2">
          <div className="product-card bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 flex-shrink-0 w-36">
            <Image
              src="https://doccure.dreamstechnologies.com/react/template/bac6905fb28a640a3f9a.png"
              alt="Embryolisse"
              width={150}
              height={128}
              className="w-full h-32 object-cover"
            />
            <div className="product-info p-2 text-center">
              <p className="category text-sm text-blue-600 mb-1">Women&apos;s Care</p>
              <h3 className="text-base mb-2 text-gray-800">Embryolisse</h3>
              <p className="delivery text-sm text-gray-600 mb-2">
                Delivery: <strong>Tomorrow</strong>
              </p>
              <p className="price text-base text-black mb-2">
                $200 <span className="original-price text-gray-500 line-through ml-2">$300</span>
              </p>
              <div className="cart-options flex justify-center items-center gap-1">
                <button className="bg-gray-300 border-none px-2 py-1 cursor-pointer">-</button>
                <span>10</span>
                <button className="bg-gray-300 border-none px-2 py-1 cursor-pointer">+</button>
                <button className="add-to-cart bg-green-600 text-white border-none px-2 py-1 cursor-pointer">
                  &#128722;
                </button>
              </div>
            </div>
          </div>
          <div className="product-card bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 flex-shrink-0 w-36">
            <Image
              src="https://doccure.dreamstechnologies.com/react/template/99bd624d0c4897913092.png"
              alt="Berocca"
              width={150}
              height={128}
              className="w-full h-32 object-cover"
            />
            <div className="product-info p-2 text-center">
              <p className="category text-sm text-blue-600 mb-1">Oral Care</p>
              <h3 className="text-base mb-2 text-gray-800">Berocca</h3>
              <p className="delivery text-sm text-gray-600 mb-2">
                Delivery: <strong>2 days</strong>
              </p>
              <p className="price text-base text-black mb-2">
                $150 <span className="original-price text-gray-500 line-through ml-2">$190</span>
              </p>
              <div className="cart-options flex justify-center items-center gap-1">
                <button className="bg-gray-300 border-none px-2 py-1 cursor-pointer">-</button>
                <span>10</span>
                <button className="bg-gray-300 border-none px-2 py-1 cursor-pointer">+</button>
                <button className="add-to-cart bg-green-600 text-white border-none px-2 py-1 cursor-pointer">
                  &#128722;
                </button>
              </div>
            </div>
          </div>
          <div className="product-card bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 flex-shrink-0 w-36">
            <Image
              src="https://doccure.dreamstechnologies.com/react/template/8300d12d60b61a5b0f85.png"
              alt="Acteane"
              width={150}
              height={128}
              className="w-full h-32 object-cover"
            />
            <div className="product-info p-2 text-center">
              <p className="category text-sm text-blue-600 mb-1">Home & Health</p>
              <h3 className="text-base mb-2 text-gray-800">Acteane</h3>
              <p className="delivery text-sm text-gray-600 mb-2">
                Delivery: <strong>1 day</strong>
              </p>
              <p className="price text-base text-black mb-2">
                $250 <span className="original-price text-gray-500 line-through ml-2">$350</span>
              </p>
              <div className="cart-options flex justify-center items-center gap-1">
                <button className="bg-gray-300 border-none px-2 py-1 cursor-pointer">-</button>
                <span>10</span>
                <button className="bg-gray-300 border-none px-2 py-1 cursor-pointer">+</button>
                <button className="add-to-cart bg-green-600 text-white border-none px-2 py-1 cursor-pointer">
                  &#128722;
                </button>
              </div>
            </div>
          </div>
          <div className="product-card bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 flex-shrink-0 w-36">
            <Image
              src="https://doccure.dreamstechnologies.com/react/template/7218fffd93fbe856eaa3.png"
              alt="Lactoferrin Plus SB"
              width={150}
              height={128}
              className="w-full h-32 object-cover"
            />
            <div className="product-info p-2 text-center">
              <p className="category text-sm text-blue-600 mb-1">Home & Health</p>
              <h3 className="text-base mb-2 text-gray-800">Lactoferrin Plus SB</h3>
              <p className="delivery text-sm text-gray-600 mb-2">
                Delivery: <strong>4 days</strong>
              </p>
              <p className="price text-base text-black mb-2">
                $279 <span className="original-price text-gray-500 line-through ml-2">$300</span>
              </p>
              <div className="cart-options flex justify-center items-center gap-1">
                <button className="bg-gray-300 border-none px-2 py-1 cursor-pointer">-</button>
                <span>10</span>
                <button className="bg-gray-300 border-none px-2 py-1 cursor-pointer">+</button>
                <button className="add-to-cart bg-green-600 text-white border-none px-2 py-1 cursor-pointer">
                  &#128722;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromotionsAndProducts;
