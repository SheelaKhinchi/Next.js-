// components/AppPromotion.tsx

"use client"; // Ensure this is a client component

import Image from 'next/image';

const AppPromotion: React.FC = () => {
  return (
    <div className="bg-blue-700 py-5 rounded-lg shadow-md w-4/5 max-w-6xl mx-auto mb-20">
      <div className="flex justify-between items-center bg-blue-700 p-5 rounded-lg">
        <div className="w-1/2 flex justify-center items-center p-2">
          <Image
            src="https://doccure.dreamstechnologies.com/react/template/5bbb8b38521c4637ab94.png"
            alt="App Promotion"
            width={500} // Adjust width as needed
            height={300} // Adjust height as needed
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-2/5 text-white text-center p-4">
          <h2 className="text-3xl font-bold">Working for Your Better Health.</h2>
          <h3 className="mt-2 text-2xl font-semibold">Download the Doccure App today!</h3>
          <p className="mt-2 text-lg">Scan the QR code to get the app now</p>
          <div className="mt-4">
            <Image
              src="https://doccure.dreamstechnologies.com/react/template/2749ffdcfc7c8b75a2ea.png"
              alt="QR Code"
              width={96} // Adjust width as needed
              height={96} // Adjust height as needed
              className="w-24 h-24 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;
