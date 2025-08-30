import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#0033ff] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo + Name */}
          <Link to={"/"} className="flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/hJF8QCKc/images-removebg-preview.png"
              alt="MIST Club Logo"
              className="h-16 w-16 object-contain rounded-md transition-transform duration-300 hover:scale-110"
            />
            <span className="text-white font-bold text-lg sm:text-xl tracking-wide hover:text-gray-200 transition-colors">
              MIST INNOVATION CLUB
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 text-white font-medium">
            <NavItem to={"/"} label="Home" />

            <div className="relative group">
              <button className="flex items-center gap-1 px-2 py-1 hover:text-gray-200 transition-colors">
                Event
                <svg
                  className="h-4 w-4 transform group-hover:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul className="absolute left-0 top-full w-44 bg-white text-[#0033ff] rounded-md shadow-lg px-2 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <DropdownItem to={"events/news"} label="News" />
                <DropdownItem to={"events/workshop"} label="Workshop" />
              </ul>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 px-2 py-1 hover:text-gray-200 transition-colors">
                Archive
                <svg
                  className="h-4 w-4 transform group-hover:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul className="absolute left-0 top-full w-44 bg-white text-[#0033ff] rounded-md shadow-lg px-2 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <DropdownItem to={"archive/gallery"} label="Gallery" />
                <DropdownItem label="Blog" />
                <DropdownItem label="Post" />
              </ul>
            </div>

            <NavItem to={"clubMembers"} label="Club Member" />

            <div className="relative group">
              <button className="flex items-center gap-1 px-2 py-1 hover:text-gray-200 transition-colors">
                About Us
                <svg
                  className="h-4 w-4 transform group-hover:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul className="absolute left-0 top-full w-44 bg-white text-[#0033ff] rounded-md shadow-lg px-2 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <DropdownItem label="People" />
                <DropdownItem label="Collaboration" />
              </ul>
            </div>
          </div>

          {/* Login Button (desktop only) */}
          <div className="hidden lg:block">
            <button className="bg-white text-[#0033ff] font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition-all">
              Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-[#0033ff]">MIST Innovation Club</span>
          <button onClick={toggleMenu} className="text-[#0033ff]">
            ✕
          </button>
        </div>
        <ul className="p-4 space-y-3 font-medium text-[#0033ff]">
          <li>
            <Link
              to="/"
              onClick={toggleMenu}
              className="block hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <DropdownMobile label="Event">
              <DropdownItem
                to={"events/news"}
                label="News"
                onClick={toggleMenu}
              />
              <DropdownItem
                to={"events/workshop"}
                label="Workshop"
                onClick={toggleMenu}
              />
            </DropdownMobile>
          </li>
          <li>
            <DropdownMobile label="Archive">
              <DropdownItem
                to={"archive/gallery"}
                label="Gallery"
                onClick={toggleMenu}
              />
              <DropdownItem label="Blog" />
              <DropdownItem label="Post" />
            </DropdownMobile>
          </li>
          <li>
            <Link
              to="clubMembers"
              onClick={toggleMenu}
              className="block hover:text-blue-600"
            >
              Club Member
            </Link>
          </li>
          <li>
            <DropdownMobile label="About Us">
              <DropdownItem label="People" />
              <DropdownItem label="Collaboration" />
            </DropdownMobile>
          </li>
          <li>
            <button className="w-full bg-[#0033ff] text-white py-2 rounded-lg shadow hover:bg-blue-700 transition-all">
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

/* ---------- Reusable Components ---------- */

// Desktop Nav Item
const NavItem = ({ to, label }) => (
  <Link
    to={to}
    className="relative group px-2 py-1 transition-colors hover:text-gray-200"
  >
    {label}
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
  </Link>
);

// Desktop Dropdown
const Dropdown = ({ label, children }) => (
  <div className="relative group">
    <button className="flex items-center gap-1 px-2 py-1 hover:text-gray-200 transition-colors">
      {label}
      <svg
        className="h-4 w-4 transform group-hover:rotate-180 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <div className="absolute hidden group-hover:block bg-white text-[#0033ff] rounded-md shadow-lg mt-2 w-40">
      <ul className="py-2">{children}</ul>
    </div>
  </div>
);

// Mobile Dropdown
const DropdownMobile = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full items-center py-2 hover:text-blue-600"
      >
        {label}
        <svg
          className={`h-4 w-4 transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && <ul className="ml-4 space-y-2">{children}</ul>}
    </div>
  );
};

// Dropdown Item (both desktop & mobile)
const DropdownItem = ({ to, label, onClick }) =>
  to ? (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className="block px-4 py-2 hover:bg-[#0033ff] hover:text-white transition-colors rounded"
      >
        {label}
      </Link>
    </li>
  ) : (
    <li>
      <span className="block px-4 py-2 hover:bg-[#0033ff] hover:text-white transition-colors rounded cursor-pointer">
        {label}
      </span>
    </li>
  );

export default Navbar;
