// components/Testimonials.tsx

"use client"; // Marks this component as a client component

import Image from 'next/image';

const testimonials = [
  {
    name: "Claudia Cram",
    message: "The Doccure has been a game-changer for me. Ordering my medications is a breeze, and the detailed information provided helps me make informed decisions about my health.",
    avatarSrc: "https://doccure.dreamstechnologies.com/react/template/7b2a7a30a052105cd474.jpg",
  },
  {
    name: "Andrew Morgan",
    message: "The convenience of having my medications delivered to my doorstep is unparalleled. The Doccure security measures instill confidence in every transaction.",
    avatarSrc: "https://doccure.dreamstechnologies.com/react/template/157dee4e5f7c4d710e3b.jpg",
  },
  {
    name: "Margaret Sara",
    message: "As a busy professional, the Doccure efficient service has saved me countless hours. The ability to chat with a pharmacist online for quick advice is fantastic, making it so much easier to manage my health.",
    avatarSrc: "https://doccure.dreamstechnologies.com/react/template/6425ce864228d652f0bb.jpg",
  },
  {
    name: "Kevin Stoll",
    message: "I can't thank the Doccure enough for its user-friendly interface and quick prescription refills. The automatic reminders for medication schedules have been a lifesaver, ensuring I never miss a dose.",
    avatarSrc: "https://doccure.dreamstechnologies.com/react/template/00271c46ddfcce4694d0.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-blue-800 flex justify-center py-10">
      <div className="bg-blue-800 p-5 w-full max-w-6xl mx-auto flex justify-center">
        <div className="flex items-center justify-center w-full">
          <div className="flex-1 flex justify-center">
            <Image
              src="https://doccure.dreamstechnologies.com/react/template/c6f05368f5582908d83b.png"
              alt="Medical Bag"
              width={400}
              height={400}
              className="w-4/5 rounded-lg"
            />
          </div>
          <div className="flex-1 pl-5">
            <div className="flex flex-col space-y-5">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex items-center bg-blue-900 p-3 rounded-lg">
                  <Image
                    src={testimonial.avatarSrc}
                    alt="Avatar"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div className="text-white">
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-300">{testimonial.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
