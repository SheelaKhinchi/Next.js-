// app/Categories.tsx
"use client"; // Add this line


// app/Categories.tsx
import Image from 'next/image';

const categories = [
  { src: 'https://doccure.dreamstechnologies.com/react/template/05f3002bccd9138e0810.png', alt: 'Ayush', title: 'Ayush', count: '400 Products' },
  { src: 'https://doccure.dreamstechnologies.com/react/template/da7bb9d12bfe5805a4a6.png', alt: 'Covid Essentials', title: 'Covid Essentials', count: '924 Products' },
  { src: 'https://doccure.dreamstechnologies.com/react/template/2d52d429705b5e11c2b1.png', alt: 'Devices', title: 'Devices', count: '450 Products' },
  { src: 'https://doccure.dreamstechnologies.com/react/template/f0b0ff23fd8eb5b2010d.png', alt: 'Glucometers', title: 'Glucometers', count: '580 Products' },
  { src: 'https://doccure.dreamstechnologies.com/react/template/ffd7f499df31c85d6a6b.png', alt: 'Eye Glasses', title: 'Eye Glasses', count: '620 Products' },
  { src: 'https://doccure.dreamstechnologies.com/react/template/021547738a2dea034be6.png', alt: 'Weight', title: 'Weight', count: '740 Products' },
  { src: 'https://doccure.dreamstechnologies.com/react/template/4d9b1291f1c689f73be1.png', alt: 'Women\'s Care', title: 'Women\'s Care', count: '810 Products' },
  { src: 'https://doccure.dreamstechnologies.com/react/template/f8847266411b142a9b22.png', alt: 'Baby Care', title: 'Baby Care', count: '680 Products' },
  { src: 'https://doccure.dreamstechnologies.com/react/template/7a79468ecc90a77515d9.png', alt: 'Home & Health', title: 'Home & Health', count: '440 Products' },
  { src: 'https://doccure.dreamstechnologies.com/react/template/fa457a3ac06e12776872.png', alt: 'Sexual Wellness', title: 'Sexual Wellness', count: '270 Products' },
  { src: 'https://doccure.dreamstechnologies.com/react/template/2e49cc916d5c986311e7.png', alt: 'Hands & Feet', title: 'Hands & Feet', count: '360 Products' },
  { src: 'https://doccure.dreamstechnologies.com/react/template/7c792aed9c5ccd5d846a.png', alt: 'Oral Care', title: 'Oral Care', count: '520 Products' },
];

export default function Categories() {
  return (
    <section className="bg-white p-5 rounded-lg shadow-lg max-w-7xl mx-auto my-5 text-center text-black">
      <h2 className="mb-5 text-left">Shop Popular Categories</h2>
      {/* Container for categories */}
      <div className="flex flex-wrap justify-between">
        {categories.map((category, index) => (
          <div key={index} className={`bg-white p-2 shadow-md rounded w-1/6 text-center ${index < 6 ? 'mb-2' : ''}`}>
            <Image src={category.src} alt={category.alt} width={80} height={80} className="w-20 h-auto mx-auto rounded-md" />
            <h1 className="text-base">{category.title}</h1>
            <p className="text-base">{category.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
