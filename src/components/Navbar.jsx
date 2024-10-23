import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Güvenc Hukuk</div>

        {/* Hamburger button (Mobile only) */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Menü öğeleri (Desktop) */}
        <div className="hidden sm:flex space-x-6">
          <a href="#anasayfa" className="hover:text-blue-400">
            Anasayfa
          </a>
          <a href="#hakkimizda" className="hover:text-blue-400">
            Hakkımızda
          </a>
          <a href="#hizmetler" className="hover:text-blue-400">
            Hizmetler
          </a>
          <a href="#sss" className="hover:text-blue-400">
            Sık Sorulan Sorular
          </a>
          <a href="#iletisim" className="hover:text-blue-400">
            İletişim
          </a>
        </div>

        {/* Hamburger menüsü (Mobile) */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } fixed inset-0 bg-gray-800 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6 text-center sm:hidden`}
        >
          <a href="#anasayfa" className="hover:text-blue-400 text-2xl">
            Anasayfa
          </a>
          <a href="#hakkimizda" className="hover:text-blue-400 text-2xl">
            Hakkımızda
          </a>
          <a href="#hizmetler" className="hover:text-blue-400 text-2xl">
            Hizmetler
          </a>
          <a href="#sss" className="hover:text-blue-400 text-2xl">
            Sık Sorulan Sorular
          </a>
          <a href="#iletisim" className="hover:text-blue-400 text-2xl">
            İletişim
          </a>
          {/* Kapatma butonu */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white z-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
