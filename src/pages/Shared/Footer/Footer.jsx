import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString("default", { month: "long" }); // e.g., June
  const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();
  const firstDay = new Date(year, today.getMonth(), 1).getDay(); // 0 = Sunday

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-600 text-white pt-16 px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-bold mb-24 uppercase">
            MIST Innovation Club
          </h2>
          <div className="flex gap-6 mb-4">
            <a href="#" className="hover:scale-110 transition">
              <FaFacebook size={28} />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaInstagram size={28} />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaLinkedin size={28} />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaYoutube size={28} />
            </a>
          </div>

          <div className="space-y-2 text-sm opacity-90">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> MIST, Mirpur Cantonment, Dhaka, Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> mist.innovation.club@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaGlobe />{" "}
              <a
                href="https://innovationclub.mist.ac.bd/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                https://innovationclub.mist.ac.bd/
              </a>
            </p>
          </div>
        </div>

        {/* Right Side (Calendar) */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-3">
            {month} <span className="font-normal">{year}</span>
          </h3>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {/* Days of week */}
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <div key={i} className="font-bold">
                {d}
              </div>
            ))}
            {/* Dates */}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {/* Dates */}
            {days.map((date) => (
              <div
                key={date}
                className={`p-1 rounded-md ${
                  date === today.getDate()
                    ? "bg-white text-blue-700 font-bold"
                    : "opacity-80"
                }`}
              >
                {date}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-2 text-sm opacity-80">
        © 2025 MIST Innovation Club
      </div>
    </footer>
  );
};

export default Footer;
