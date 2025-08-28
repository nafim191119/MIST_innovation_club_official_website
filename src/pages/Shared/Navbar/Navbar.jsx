import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#0f00e8] shadow-sm font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"events"}>Event</Link>
                <ul className="p-2">
                  <li>
                    <Link to={"events/news"}>News</Link>
                  </li>
                  <li>
                    <Link to={"events/workshop"}>Workshop</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a>Archive</a>
                <ul className="p-2">
                  <li>
                    <Link to={"archive/gallery"}>Gallery</Link>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Post</a>
                  </li>
                </ul>
              </li>
              <li>
               <Link to={'clubMembers'}>Club Member</Link>
              </li>
              <li>
                <a>About Us</a>
                <ul className="p-2">
                  <li>
                    <a>People</a>
                  </li>
                  <li>
                    <a>Collaboration</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Logo + Club name */}
          <a className="btn btn-ghost text-lg flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/hJF8QCKc/images-removebg-preview.png"
              alt="MIST Club Logo"
              className="h-10 w-10 object-contain rounded-md"
            />
            <span className="font-bold whitespace-nowrap">
              MIST Innovation Club
            </span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <details>
                <summary>Event</summary>
                <ul className="p-2">
                  <li>
                    <Link to={"events/workshop"}>News</Link>
                  </li>
                  <li>
                    <Link to={"events/workshop"}>Workshop</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Archive</summary>
                <ul className="p-2">
                  <li>
                    <Link to={"archive/gallery"}>Gallery</Link>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Post</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to={'clubMembers'}>Club Member</Link>
            </li>
            <li>
              <details>
                <summary>About Us</summary>
                <ul className="p-2">
                  <li>
                    <a>People</a>
                  </li>
                  <li>
                    <a>Collaboration</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
