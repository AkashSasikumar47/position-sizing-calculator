import React from 'react';;
import Navbar from '../Navbar/Navbar';

const Hero: React.FC = () => {
    return (
        <header
            className="relative w-full h-screen bg-cover bg-center mb-8"
            style={{ backgroundImage: "url('/assets/Img/hero_section.jpg')" }}
        >
            <Navbar />
            <div className="flex flex-col items-center justify-center h-full text-center p-4 lg:px-36">
                <h1 className="mt-18 mb-8 lg:mb-10 font-sans font-bold text-white text-6xl md:text-8xl xl:text-10xl 2xl:text-[12rem]">
                    E-VOLVE
                </h1>
                <p className="mb-2 font-sans font-medium text-white text-lg sm:text-2xl">
                    CONCEPTS TO CREATIONS
                </p>
            </div>
        </header>
    );
};

export default Hero;