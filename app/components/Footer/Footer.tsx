import React from 'react';

const Footer = () => {
  return (

    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-black text-white font-body">
      <div className="text-center flex flex-col items-center">
        <div>
          <a
            className="flex-none text-4xl font-head font-extrabold text-orange"
            href="#"
            aria-label="Brand"
          >
            <img src="/assets/Logo/E-VOLVE.svg" alt="E-VOLVE-Logo" className="w-36 h-16" />
          </a>
        </div>

        <div className="mt-3">
          <p className="text-white font-body">
            We're part of the{' '}
            <a
              className="font-semibold text-cyan-400 hover:text-lightOrange"
              href="https://www.ieee.org/"
            >
              IEEE
            </a>{' '}
            family.
          </p>
          <p className="text-white font-semibold">© 2024 IEEE SRM. All rights reserved.</p>
        </div>

      </div>
    </footer>

  );
};

export default Footer;