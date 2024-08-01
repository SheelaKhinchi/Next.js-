// components/Footer.tsx
"use client";

import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-5 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        {/* Footer Top */}
        <div className="pb-5 border-b border-gray-200 flex items-center">
          <div className="flex items-center">
            <Image
              src="https://doccure.dreamstechnologies.com/react/template/e196fae05467bf1c6a3b.png"
              alt="Doccure Logo"
              width={144}
              height={48}
              className="w-36 mr-5"
            />
            <p className="text-gray-600">
              Doccure is one of India's most trusted pharmacies, dispensing quality medicines at reasonable prices to over 9 million happy customers
            </p>
          </div>
        </div>

        {/* Footer Middle */}
        <div className="py-5 flex justify-between">
          <div className="flex flex-wrap w-full gap-10">
            <div className="flex-1 mr-5">
              <h3 className="text-gray-800 mb-2">Company</h3>
              <ul className="list-none p-0">
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">About Doccure</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Customers Speak</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">In the News</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Career</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Contact</a></li>
              </ul>
            </div>
            <div className="flex-1 mr-5">
              <h3 className="text-gray-800 mb-2">Shopping</h3>
              <ul className="list-none p-0">
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Browse by A-Z</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Browse by Manufacturers</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Health Articles</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Offers / Coupons</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">FAQs</a></li>
              </ul>
            </div>
            <div className="flex-1 mr-5">
              <h3 className="text-gray-800 mb-2">Our Policies</h3>
              <ul className="list-none p-0">
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Terms and Conditions</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Privacy Policy</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Fees and Payments</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Shipping and Delivery</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Return, Refund</a></li>
              </ul>
            </div>
            <div className="flex-1 mr-5">
              <h3 className="text-gray-800 mb-2">Our Services</h3>
              <ul className="list-none p-0">
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Order Medicines</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Book Lab Tests</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Consult a Doctor</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Ayurveda Articles</a></li>
                <li className="mb-1"><a href="#" className="text-gray-800 hover:underline">Careers</a></li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="text-gray-800 mb-2">Subscribe to Newsletter</h3>
              <form className="flex mt-2">
                <input type="email" placeholder="Enter Email Address" className="p-2 flex-1 border border-gray-300 rounded-l-md" />
                <button type="submit" className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">Submit</button>
              </form>
              <div className="mt-3 flex gap-3">
                <Image
                  src="https://doccure.dreamstechnologies.com/react/template/6e016cfcc73fd0b89905.svg"
                  alt="App Store"
                  width={128}
                  height={40}
                  className="w-32"
                />
                <Image
                  src="https://doccure.dreamstechnologies.com/react/template/4210d03a5a05f43447bc.svg"
                  alt="Google Play"
                  width={128}
                  height={40}
                  className="w-32"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center pt-5 border-t border-gray-200">
          <div className="flex gap-2">
            <Image src="https://doccure.dreamstechnologies.com/react/template/1aa59329130446a03a48.svg" alt="Paytm" width={32} height={32} />
            <Image src="https://doccure.dreamstechnologies.com/react/template/879f14188deecbf8f4e1.svg" alt="RuPay" width={32} height={32} />
            <Image src="https://doccure.dreamstechnologies.com/react/template/b3c2f7ca878bdce13b1b.svg" alt="Visa" width={32} height={32} />
            <Image src="https://doccure.dreamstechnologies.com/react/template/f9cc23dc1b27afaeb6c2.svg" alt="MasterCard" width={32} height={32} />
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-800 hover:text-blue-600"><i className="fab fa-facebook-f w-6 h-6"></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-400"><i className="fab fa-twitter w-6 h-6"></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-700"><i className="fab fa-linkedin-in w-6 h-6"></i></a>
            <a href="#" className="text-gray-800 hover:text-pink-600"><i className="fab fa-instagram w-6 h-6"></i></a>
            <a href="#" className="text-gray-800 hover:text-pink-400"><i className="fab fa-dribbble w-6 h-6"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
