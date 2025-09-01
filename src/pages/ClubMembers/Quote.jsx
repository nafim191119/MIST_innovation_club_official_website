import React from "react";

const Quote = () => {
  return (
    <div>
      {/* Quote Box */}
      <div className="bg-gradient-to-r from-purple-500/70 to-blue-500/70 text-white max-w-4xl rounded-2xl shadow-lg p-6 m-10 flex items-center gap-6">
        {/* Left Side - Blank Image Placeholder */}
        <div className="w-60 h-36 bg-gray-200 rounded-lg flex-shrink-0 object-cover"></div>

        {/* Right Side - Quote */}
        <div className="text-lg">
          <p className="italic mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
            <span className="text-blue-200">
              Cras aptent taciti sociosqu ad litora torquent per conubia nostra,
              per inceptos himenaeos.
            </span>
            "
          </p>
          <p className="text-right text-sm font-light">
            – Founder, MIST Innovation Club
          </p>
        </div>
      </div>

      {/* Side Big Text */}
      <div className="flex flex-col items-start text-6xl md:text-7xl font-bold leading-tight text-left px-6 py-20 gap-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
          Meet
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          the
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">
          minds
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
          behind
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          the
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          matter
        </span>
      </div>
    </div>
  );
};

export default Quote;
