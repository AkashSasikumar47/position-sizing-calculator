import React from 'react';

const Speaker = () => {
  return (

    <section
      className="relative w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/Img/bg-black-1.jpg')" }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 py-6 md:px-8 md:py-10">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start gap-4 flex">
              <h2 className="max-w-screen-sm mb-4 md:mb-6 font-sans font-semibold text-white text-2xl sm:text-4xl">
                Our Speaker
              </h2>
              <p className="leading-relaxed font-sans text-gray-600 text-base text-justify sm:text-lg">
                PROTOCOL 1.0 is an innovative online hackathon aimed at empowering Computer Science and Engineering students to innovate and create impactful solutions. With a focus on fostering creativity and collaboration, PROTOCOL 1.0 provides participants with a platform to explore cutting-edge technologies and address real-world challenges.
              </p>
            </div>
          </div>
          <img
            className="w-full h-full object-cover transform transition duration-500 hover:scale-105 rounded-xl sm:rounded-2xl"
            src="/assets/Img/image-1.jpg"
            alt="about Us image"
          />
        </div>
      </div>
    </section>

  );
};

export default Speaker;