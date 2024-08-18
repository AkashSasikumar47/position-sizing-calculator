import React from 'react';

const Hero: React.FC = () => {
  return (
    
    <div>

      {/* Navbar
      <nav className="fixed top-6 left-0 w-full bg-white/10 backdrop-blur-sm border border-white/10 rounded-4xl shadow-md z-50">
        <div className="max-w-screen-2xl mx-auto p-3 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="https://www.ieeesrmist.com/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
              <img src="/assets/Logo/IEEE-LOGO.svg" alt="IEEE SRM SB Logo" className="h-8 md:h-12" />
            </a>
            <div className="space-x-4">
              <a href="#home" className="text-white hover:text-gray-300">Home</a>
              <a href="#about" className="text-white hover:text-gray-300">About</a>
              <a href="#services" className="text-white hover:text-gray-300">Services</a>
              <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
              <a
                href="#_"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-cyan-400 border border-transparent rounded-full md:w-auto hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
              >
                REGISTER
              </a>
            </div>
          </div>
        </div>
      </nav>
       */}

      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/Img/Hero-img-1.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center p-4 lg:px-36">
          <h1 className="mt-28 mb-8 lg:mb-12 font-sans font-bold text-white text-6xl xl:text-10xl 2xl:text-14xl">
            E-VOLVE
          </h1>
          <p className="mb-4 md:mb-8 font-sans font-medium text-white text-lg sm:text-2xl">
            CONCEPTS TO CREATIONS
          </p>
          <p className="font-sans font-medium text-cyan-400 text-lg sm:text-2xl">
            A Gen-AI Workshop
          </p>
        </div>
      </div>
    </div>

  );
};

export default Hero;