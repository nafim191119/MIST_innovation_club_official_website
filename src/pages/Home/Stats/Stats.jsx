import React from "react";

const Stats = () => {
  return (
    <div>
      <div className="bg-[#0a0f1c] text-white py-12 px-6 rounded-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Trusted by innovators worldwide
          </h2>
          <p className="text-gray-400 mt-2">
            MIST Innovation Club is building the future with creativity,
            teamwork, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-[#121826] p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-gray-400 mt-1">Active Members</p>
          </div>

          <div className="bg-[#121826] p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-gray-400 mt-1">Projects Completed</p>
          </div>

          <div className="bg-[#121826] p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">20+</h3>
            <p className="text-gray-400 mt-1">National Awards</p>
          </div>

          <div className="bg-[#121826] p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">100%</h3>
            <p className="text-gray-400 mt-1">Innovation Spirit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
