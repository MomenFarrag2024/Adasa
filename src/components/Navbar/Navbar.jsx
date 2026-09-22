import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar({ data }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { siteInfo: { name, tagline }} = data;
  const closeMenu = () => setIsMenuOpen(false);

const [isScrolled, setIsScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
<nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b ${
    isScrolled
    ? "border-[#262626]"
      : "border-transparent"
  }`}
>      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar */}
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img
                src="./public/icon.png"
                alt="Photography Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                {name}
              </span>
              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                {tagline}
              </span>
            </div>
          </Link>
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`
                }
              >
                الرئيسية
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`
                }
              >
                المدونة
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`
                }
              >
                من نحن
              </NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="p-3 flex justify-center items-center text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
              <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
            <Link
              to="/blog"
              className="px-8 py-4 rounded-full text-sm font-medium bg-linear-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              ابدأ القراءة
            </Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626] flex justify-center items-center"
          >
            <i
              className={`fa-solid ${
                isMenuOpen ? "fa-xmark" : "fa-bars"
              } text-xl`}
            ></i>
          </button>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen
              ? "max-h-80 opacity-100 pb-6"
              : "max-h-0 opacity-0 pb-0"
          }`}
        >
          <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
            <div className="flex flex-col space-y-1">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
                      : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }`
                }
              >
                الرئيسية
              </NavLink>
              <NavLink
                to="/blog"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
                      : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }`
                }
              >
                المدونة
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
                      : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }`
                }
              >
                من نحن
              </NavLink>
              <Link
                to="/blog"
                onClick={closeMenu}
                className=" px-8 py-4 rounded-full text-sm font-medium bg-linear-to-r from-orange-500 to-orange-600 text-white text-center mt-2 hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
