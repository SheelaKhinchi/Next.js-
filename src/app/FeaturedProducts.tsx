// components/FeaturedProducts.tsx

"use client"; // Mark this component as a client component

import Image from 'next/image';

const products = [
  {
    name: "Echinacea",
    category: "Home & Health",
    quantity: "100 ml",
    price: "$150",
    originalPrice: "$199",
    discount: "",
    imageSrc: "https://doccure.dreamstechnologies.com/react/template/2e024611d1a16119532a.png",
    altText: "Echinacea",
  },
  {
    name: "Diclofenac",
    category: "Women's Care",
    quantity: "50 pills",
    price: "$200",
    originalPrice: "$300",
    discount: "10% OFF",
    imageSrc: "https://doccure.dreamstechnologies.com/react/template/c621a9d5f97481d85c67.png",
    altText: "Diclofenac",
  },
  {
    name: "Colchicine",
    category: "Weight",
    quantity: "100 pills",
    price: "$370",
    originalPrice: "$450",
    discount: "",
    imageSrc: "https://doccure.dreamstechnologies.com/react/template/76954d450eef521c3e8b.png",
    altText: "Colchicine",
  },
  {
    name: "Clindamycin Gel",
    category: "Oral Care",
    quantity: "10 g",
    price: "$430",
    originalPrice: "$120",
    discount: "5% OFF",
    imageSrc: "https://doccure.dreamstechnologies.com/react/template/869cf8db4e2d3e761714.png",
    altText: "Clindamycin Gel",
  },
  {
    name: "Aspirin-C",
    category: "Women's Care",
    quantity: "70 pills",
    price: "$200",
    originalPrice: "$300",
    discount: "10% OFF",
    imageSrc: "https://doccure.dreamstechnologies.com/react/template/92bd0df93d5a28638b79.png",
    altText: "Aspirin-C",
  },
  {
    name: "L-Carnitine",
    category: "Home & Health",
    quantity: "100 pills",
    price: "$130",
    originalPrice: "$150",
    discount: "",
    imageSrc: "https://doccure.dreamstechnologies.com/react/template/4717a9971cfda2e7c1c0.png",
    altText: "L-Carnitine",
  },
  {
    name: "DyN.O Pre Workout",
    category: "Home & Health",
    quantity: "250 kg",
    price: "$230",
    originalPrice: "$250",
    discount: "5% OFF",
    imageSrc: "https://doccure.dreamstechnologies.com/react/template/70f67745d58810bc155d.png",
    altText: "DyN.O Pre Workout",
  },
  {
    name: "Tabcin",
    category: "Baby Care",
    quantity: "60 pills",
    price: "$180",
    originalPrice: "$400",
    discount: "",
    imageSrc: "https://doccure.dreamstechnologies.com/react/template/91a3196970e5da4c8cbc.png",
    altText: "Tabcin",
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="featured-products-container flex flex-col items-center p-5 w-full">
      <div className="featured-products p-5 max-w-5xl w-full box-border mb-5">
        <h2 className="text-xl mb-5 text-left w-full">Featured Products</h2>
        <div className="product-row flex gap-4 flex-wrap justify-center w-full box-border">
          {products.slice(0, 4).map((product, index) => (
            <div key={index} className="product-card bg-gray-100 p-3 rounded-lg text-center shadow-md max-w-[22%] flex-shrink-0">
              <Image
                src={product.imageSrc}
                alt={product.altText}
                width={144}
                height={144}
                className="w-36 h-36 rounded-lg mb-3 object-cover"
              />
              <div className="product-details text-left">
                <span className="category text-sm text-purple-600 mb-1 block">{product.category}</span>
                <span className="product-name text-base font-bold mb-1 block">{product.name}</span>
                <span className="quantity text-sm text-gray-600 mb-1 block">{product.quantity}</span>
                <span className="price text-sm text-red-600 mb-1 block">
                  {product.price} <del className="text-gray-400">{product.originalPrice}</del>
                </span>
                {product.discount && <span className="discount text-xs bg-green-600 text-white py-1 px-2 rounded-full block">{product.discount}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="featured-products p-5 max-w-5xl w-full box-border mb-5">
        <div className="product-row flex gap-4 flex-wrap justify-center w-full box-border">
          {products.slice(4).map((product, index) => (
            <div key={index} className="product-card bg-gray-100 p-3 rounded-lg text-center shadow-md max-w-[22%] flex-shrink-0">
              <Image
                src={product.imageSrc}
                alt={product.altText}
                width={144}
                height={144}
                className="w-36 h-36 rounded-lg mb-3 object-cover"
              />
              <div className="product-details text-left">
                <span className="category text-sm text-purple-600 mb-1 block">{product.category}</span>
                <span className="product-name text-base font-bold mb-1 block">{product.name}</span>
                <span className="quantity text-sm text-gray-600 mb-1 block">{product.quantity}</span>
                <span className="price text-sm text-red-600 mb-1 block">
                  {product.price} <del className="text-gray-400">{product.originalPrice}</del>
                </span>
                {product.discount && <span className="discount text-xs bg-green-600 text-white py-1 px-2 rounded-full block">{product.discount}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
