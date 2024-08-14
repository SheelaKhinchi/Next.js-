// app/HotDealsAndProducts.tsx
"use client"; // Add this line if you are using client-side only features like images

// components/HotDealsAndProducts.tsx
import Image from 'next/image';

const HotDealsAndProducts = () => {
  return (
    <div className="container mx-auto w-11/12 max-w-screen-xl flex justify-center items-center">
      <div className="hot-deals flex w-full justify-center box-border">
        {/* Offer Section */}
        <div className="offer-section bg-[#9B4DCE] text-white p-5 rounded-lg text-center w-2/5 mr-5 flex flex-col items-center">
          <div className="offer-header text-xl mb-2">Medical Pack</div>
          <div className="offer-text text-lg mb-5">Get offers <br />upto 25%</div>
          <button className="offer-button bg-[#CE0F6D] text-white border-none py-2 px-5 cursor-pointer rounded mb-5">
            Grab Offer Now
          </button>
          <div className="countdown flex flex-col items-center mb-5">
            <div className="countdown-item text-base text-center mb-2">
              06 : 16 : 54 : 16<br />
            </div>
            <div className="countdown-item text-base text-center">
              Days : Hours : Minutes : Seconds<br />
            </div>
          </div>
          <div className="offer-image relative">
            <Image
              src="https://doccure.dreamstechnologies.com/react/template/f0b1562f2d36e2ccdb78.png"
              alt="Doctor"
              width={208} // Adjust width as necessary
              height={208} // Adjust height as necessary
              className="max-w-full w-52 h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Product Section */}
        <div className="product-section flex w-full overflow-x-auto text-black">
          {/* Hot Deals Category */}
          <div className="w-1/3 p-2">
            <h2 className="text-left text-xl mb-2">Hot Deals</h2>
            <div className="bg-[#F7F7F7] p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
              <Image
                src="https://doccure.dreamstechnologies.com/react/template/288c4eddcd9e5cb25ab0.png"
                alt="Biotin Tablets"
                width={60}
                height={60}
                className="w-15 h-15 mr-2"
              />
              <div className="flex flex-col">
                <h1 className="text-base mb-1">Home & Health</h1>
                <span className="text-sm">Biotin Tablets</span><br />
                <span className="text-sm">$200 <del>$300</del></span>
              </div>
            </div>
            <div className="bg-[#F7F7F7] p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
              <Image
                src="https://doccure.dreamstechnologies.com/react/template/e429870aa6dfbf2370e3.png"
                alt="Natural Tooth Paste"
                width={60}
                height={60}
                className="w-15 h-15 mr-2"
              />
              <div className="flex flex-col">
                <h1 className="text-base mb-1">Ayush</h1>
                <span className="text-sm">Natural Tooth Paste</span><br />
                <span className="text-sm">$50</span>
              </div>
            </div>
            <div className="bg-[#F7F7F7] p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
              <Image
                src="https://doccure.dreamstechnologies.com/react/template/977ff1100e42ddb21acf.png"
                alt="Baby Shampoo"
                width={60}
                height={60}
                className="w-15 h-15 mr-2"
              />
              <div className="flex flex-col">
                <h1 className="text-base mb-1">Baby Care</h1>
                <span className="text-sm">Baby Shampoo</span><br />
                <span className="text-sm">$270</span>
              </div>
            </div>
            <div className="bg-[#F7F7F7] p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
              <Image
                src="https://doccure.dreamstechnologies.com/react/template/c096867d1e13e59cc59a.png"
                alt="Oval Frame Glass"
                width={60}
                height={60}
                className="w-15 h-15 mr-2"
              />
              <div className="flex flex-col">
                <h1 className="text-base mb-1">Eye Glasses</h1>
                <span className="text-sm">Oval Frame Glass</span><br />
                <span className="text-sm">$450 <del>$500</del></span>
              </div>
            </div>
            <div className="bg-[#F7F7F7] p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
              <Image
                src="https://doccure.dreamstechnologies.com/react/template/7e6d1831bf4660e671c4.png"
                alt="Infrared Thermometer"
                width={60}
                height={60}
                className="w-15 h-15 mr-2"
              />
              <div className="flex flex-col">
                <h1 className="text-base mb-1">Devices</h1>
                <span className="text-sm">Infrared Thermometer</span><br />
                <span className="text-sm">$300 <del>$450</del></span>
              </div>
            </div>
          </div>

          {/* Best Sellers Category */}
          <div className="w-1/3 p-2">
            <h2 className="text-left text-xl mb-2">Best Sellers</h2>
            <div className="bg-[#F7F7F7] p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
              <Image
                src="https://doccure.dreamstechnologies.com/react/template/ee770ed5b3fc4c6efe73.png"
                alt="Eucerin Lotion"
                width={60}
                height={60}
                className="w-15 h-15 mr-2"
              />
              <div className="flex flex-col">
                <h1 className="text-base mb-1">Hands & Feet</h1>
                <span className="text-sm">Eucerin Lotion</span><br />
                <span className="text-sm">$150 <del>$200</del></span>
              </div>
            </div>
            <div className="bg-[#F7F7F7] p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
              <Image
                src="https://doccure.dreamstechnologies.com/react/template/af62bb47af4ea8e0068f.png"
                alt="Hand Sanitizer"
                width={60}
                height={60}
                className="w-15 h-15 mr-2"
              />
              <div className="flex flex-col">
                <h1 className="text-base mb-1">Covid Essentials</h1>
                <span className="text-sm">Hand Sanitizer</span><br />
                <span className="text-sm">$100</span>
              </div>
            </div>
            <div className="bg-[#F7F7F7] p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
              <Image
                src="https://doccure.dreamstechnologies.com/react/template/3172bea4a425f43dbe34.png"
                alt="Glucose Meter"
                width={60}
                height={60}
                className="w-15 h-15 mr-2"
              />
              <div className="flex flex-col">
                <h1 className="text-base mb-1">Glucometer</h1>
                <span className="text-sm">Glucose Meter</span><br />
                <span className="text-sm">$350 <del>$400</del></span>
              </div>
            </div>
            <div className="bg-[#F7F7F7] p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
              <Image
                src="https://doccure.dreamstechnologies.com/react/template/962bbaae8b35c7210272.png"
                alt="Eye Drops"
                width={60}
                height={60}
                className="w-15 h-15 mr-2"
              />
              <div className="flex flex-col">
                <h1 className="text-base mb-1">Weight</h1>
                <span className="text-sm">Weight Machine</span><br />
                <span className="text-sm">$800</span>
              </div>
            </div>
            <div className="bg-[#F7F7F7] p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
              <Image
                src="https://doccure.dreamstechnologies.com/react/template/e279c3cfe984d4e40ca2.png"
                alt="Eye Drops"
                width={60}
                height={60}
                className="w-15 h-15 mr-2"
              />
              <div className="flex flex-col">
                <h1 className="text-base mb-1">Home & Health</h1>
                <span className="text-sm">Papulex Gel</span><br />
                <span className="text-sm">$70</span>
              </div>
            </div>
          </div>

          {/* Top Rated Category */}
        <div className="w-1/3 p-2">
          <h2 className="text-left text-xl mb-2">Top Rated</h2>
          <div className="product-item bg-gray-100 p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
            <Image
              src="https://doccure.dreamstechnologies.com/react/template/f1ffb0a3ff44acb7ade2.png"
              alt="Electric Tooth Brush"
              width={60}
              height={60}
              className="w-15 h-15 mr-2"
            />
            <div className="product-content flex flex-col">
              <h1 className="text-base mb-1">Oral Care</h1>
              <span className="text-sm">Electric Tooth Brush</span><br />
              <span className="text-sm">$150 <del>$250</del></span>
            </div>
          </div>
          <div className="product-item bg-gray-100 p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
            <Image
              src="https://doccure.dreamstechnologies.com/react/template/532dce4d94d844e0c38b.png"
              alt="Kid's Mask"
              width={60}
              height={60}
              className="w-15 h-15 mr-2"
            />
            <div className="product-content flex flex-col">
              <h1 className="text-base mb-1">Devices</h1>
              <span className="text-sm">Sphygmomanometer</span><br />
              <span className="text-sm">$450 <del>$500</del></span>
            </div>
          </div>
          <div className="product-item bg-gray-100 p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
            <Image
              src="https://doccure.dreamstechnologies.com/react/template/ff6be7027ffbfd711838.png"
              alt="Oximeter"
              width={60}
              height={60}
              className="w-15 h-15 mr-2"
            />
            <div className="product-content flex flex-col">
              <h1 className="text-base mb-1">Covid essentials</h1>
              <span className="text-sm">Hand Gloves</span><br />
              <span className="text-sm">$20</span>
            </div>
          </div>
          <div className="product-item bg-gray-100 p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
            <Image
              src="https://doccure.dreamstechnologies.com/react/template/c13c4d4796a8a5600803.png"
              alt="Pain Reliever"
              width={60}
              height={60}
              className="w-15 h-15 mr-2"
            />
            <div className="product-content flex flex-col">
              <h1 className="text-base mb-1">Hands & Feet</h1>
              <span className="text-sm">Cattier Cream</span><br />
              <span className="text-sm">$120 <del>$150</del></span>
            </div>
          </div>
          <div className="product-item bg-gray-100 p-2 rounded-lg text-left mb-2 shadow-sm flex items-center">
            <Image
              src="https://doccure.dreamstechnologies.com/react/template/9c3fbac55a12e60bda45.png"
              alt="Cold & Flu"
              width={60}
              height={60}
              className="w-15 h-15 mr-2"
            />
            <div className="product-content flex flex-col">
              <h1 className="text-base mb-1">Women&apos;s Care</h1>
              <span className="text-sm">Calcium Tablets</span><br />
              <span className="text-sm">$170 <del>$200</del></span>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    
  );
};

export default HotDealsAndProducts;
