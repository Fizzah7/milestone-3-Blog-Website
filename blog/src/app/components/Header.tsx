import React from "react";
import { SiIfood } from "react-icons/si";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
          <Link href="/">
            <span className="ml-3 text-xl flex flex-item-row gap-1 text-slate-50 hover:text-teal-400">
              Desi Fusion PK
             <SiIfood />
              </span>
          </Link>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center  ">
          <Link
            href="/about"
            className="mr-5 text-white bg-gradient-to-r from-slate-white hover:bg-gradient-to-r hover:from-teal-800 hover:via-orange-400 hover:to-orange-800 bg-clip-text hover:text-transparent transition duration-300 "
          >
            About
          </Link>
          <Link
            href="/blog"
            className="mr-5 text-white bg-gradient-to-r from-white hover:bg-gradient-to-r hover:from-teal-800 hover:via-orange-400 hover:to-orange-800 bg-clip-text hover:text-transparent transition duration-300 "
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="mr-5 text-white  bg-gradient-to-r from-white hover:bg-gradient-to-r hover:from-teal-800 hover:via-orange-400 hover:to-orange-800 bg-clip-text hover:text-transparent transition duration-300 "
          >
            Contact
          </Link>
        </nav>
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Button
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
      </div>
    </div>
  );
};

export default Header;
