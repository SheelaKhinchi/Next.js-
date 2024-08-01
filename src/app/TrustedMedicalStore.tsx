// app/Categories.tsx
"use client"; // Add this line

import Image from 'next/image';

const TrustedMedicalStore = () => {
  return (
    <div className="trusted-medical-store flex justify-center items-center py-5 bg-gray-100 max-w-screen-xl mx-auto">
      <div className="images w-1/2 flex justify-start relative h-64"> {/* Set a fixed height */}
        <Image
          src="https://doccure.dreamstechnologies.com/react/template/ce6a09dbb6f5428768e8.png"
          alt="Pills"
          fill
          className="object-cover"  // Use object-cover to ensure the image covers the area
        />
      </div>
      <div className="text-content w-1/2 pl-5 text-black">
        <h2 className="text-2xl mb-2">100% Trusted Medical Store</h2>
        <p className="text-sm mb-2">Healthy life.</p>
        <p className="text-sm mb-2">
          At Doccure, we believe that true well-being extends beyond the prescription counter. Our commitment to your health goes beyond medications, a dedicated space designed to empower you on your journey to a healthier and happier life.
        </p>
        <p className="text-sm mb-2">Every day quality products for you.</p>
        <p className="text-sm mb-2">
          At Doccure, we believe that true well-being extends beyond the prescription counter. Our commitment to your health goes beyond medications, a dedicated space designed to empower you on your journey to a healthier and happier life.
        </p>
        <button className="bg-blue-500 text-white border-none py-2 px-4 cursor-pointer">Shop Now</button>
      </div>
    </div>
  );
};

export default TrustedMedicalStore;
