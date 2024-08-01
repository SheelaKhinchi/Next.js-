// components/Deals.tsx
"use client"; // Ensure this directive is included if using client-only features

// components/Deals.tsx
export default function Deals() {
    return (
      <section className="bg-white p-5 rounded-lg shadow-lg max-w-4xl mx-auto my-5 text-center text-black">
        <div className="flex justify-between items-center mb-5">
          <h2 className="m-0 text-left">Great deals on top picks</h2>
          <a href="#" className="text-blue-500 hover:underline m-0 text-right">View All →</a>
        </div>
        <div className="flex gap-2 justify-center flex-wrap">
          <div className="bg-white p-2 shadow-md rounded w-24 text-center my-2">
            <img src="https://doccure.dreamstechnologies.com/react/template/c4e05438cec85276448f.png" alt="Deal 1" className="w-12 h-auto mx-auto rounded-md" />
            <p>Diabetes</p>
          </div>
          <div className="bg-white p-2 shadow-md rounded w-24 text-center my-2">
            <img src="https://doccure.dreamstechnologies.com/react/template/16e1212bbdb37c234214.png" alt="Deal 2" className="w-12 h-auto mx-auto rounded-md" />
            <p>Cardiac Care</p>
          </div>
          <div className="bg-white p-2 shadow-md rounded w-24 text-center my-2">
            <img src="https://doccure.dreamstechnologies.com/react/template/68b2849ecebb110dfe8c.png" alt="Deal 3" className="w-12 h-auto mx-auto rounded-md" />
            <p>Stomach Care</p>
          </div>
          <div className="bg-white p-2 shadow-md rounded w-24 text-center my-2">
            <img src="https://doccure.dreamstechnologies.com/react/template/ad26f3d80ff99d90b229.png" alt="Deal 4" className="w-12 h-auto mx-auto rounded-md" />
            <p>Ayurvedic</p>
          </div>
          <div className="bg-white p-2 shadow-md rounded w-24 text-center my-2">
            <img src="https://doccure.dreamstechnologies.com/react/template/e57dd880931d9239e87b.png" alt="Deal 5" className="w-12 h-auto mx-auto rounded-md" />
            <p>Homeopathy</p>
          </div>
          <div className="bg-white p-2 shadow-md rounded w-24 text-center my-2">
            <img src="https://doccure.dreamstechnologies.com/react/template/f9ceba383807880ac3fb.png" alt="Deal 6" className="w-12 h-auto mx-auto rounded-md" />
            <p>Fitness</p>
          </div>
          <div className="bg-white p-2 shadow-md rounded w-24 text-center my-2">
            <img src="https://doccure.dreamstechnologies.com/react/template/6359c0baec9ad6d77d16.png" alt="Deal 7" className="w-12 h-auto mx-auto rounded-md" />
            <p>Mom & Baby</p>
          </div>
          <div className="bg-white p-2 shadow-md rounded w-24 text-center my-2">
            <img src="https://doccure.dreamstechnologies.com/react/template/ed433575d2b0e008334b.png" alt="Deal 8" className="w-12 h-auto mx-auto rounded-md" />
            <p>Devices</p>
          </div>
        </div>
      </section>
    );
  }
  