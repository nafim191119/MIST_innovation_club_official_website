import React from "react";
import { Circle, Star, Users } from "lucide-react"; // icon library

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-16 px-6 rounded-2xl">
      {/* Top part: Heading + description */}
      <div className="max-w-4xl mx-auto text-center text-white mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
        <p className="text-base md:text-lg opacity-90">
          We are dedicated to innovation, creativity, and teamwork. Our mission
          is to build a community where ideas grow and skills shine.
        </p>
      </div>

      {/* Cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="bg-blue-900 text-white rounded-2xl p-6 flex flex-col items-center shadow-lg">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-600 mb-4">
            <Circle size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
          <p className="text-sm text-center opacity-80">
            Driving impactful solutions with cutting-edge ideas.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-900 text-white rounded-2xl p-6 flex flex-col items-center shadow-lg">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-600 mb-4">
            <Star size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Creativity</h3>
          <p className="text-sm text-center opacity-80">
            Encouraging design thinking and new perspectives.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-900 text-white rounded-2xl p-6 flex flex-col items-center shadow-lg">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-600 mb-4">
            <Users size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
          <p className="text-sm text-center opacity-80">
            Building a strong community through collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
