// components/LatestNews.tsx

"use client"; // Ensure this is a client component

import Image from 'next/image';

const newsArticles = [
  {
    date: "18 Nov",
    title: "Revolutionizing Patient Care: The Future of Online Pharmacies",
    author: "Admin",
    comments: 65,
    imageSrc: "https://doccure.dreamstechnologies.com/react/template/c017b082e4f3c5105703.jpg",
    altText: "News 1",
  },
  {
    date: "19 Nov",
    title: "Navigating the World of Supplements: A Pharmacist's Perspective",
    author: "Admin",
    comments: 48,
    imageSrc: "https://doccure.dreamstechnologies.com/react/template/4f30826da24609d2d00b.jpg",
    altText: "News 2",
  },
  {
    date: "20 Nov",
    title: "Behind the Counter: A Glimpse into the Day-to-Day Life of a Pharmacist",
    author: "Admin",
    comments: 26,
    imageSrc: "https://doccure.dreamstechnologies.com/react/template/a4c3a56b2303194baea4.jpg",
    altText: "News 3",
  }
];

const LatestNews: React.FC = () => {
  return (
    <div className="py-5 max-w-6xl mx-auto">
      <h2 className="text-left mb-5 text-2xl font-semibold text-black">Latest News</h2>
      <div className="flex justify-between gap-5">
        {newsArticles.map((article, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-300 rounded-lg overflow-hidden shadow-md w-1/3 flex flex-col"
          >
            <Image
              src={article.imageSrc}
              alt={article.altText}
              width={500}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-4">
              <span className="block text-sm text-gray-600">{article.date}</span>
              <h3 className="mt-2 text-lg font-semibold text-gray-800">{article.title}</h3>
              <p className="mt-2 text-sm text-gray-600">By {article.author} · {article.comments} Comments</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
