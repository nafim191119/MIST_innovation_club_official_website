import React from "react";
import { Lightbulb, Wrench, Rocket } from "lucide-react"; // icons

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-16 px-6 rounded-2xl mx-8">
      {/* Heading + Quote */}
      <div className="max-w-5xl mx-auto text-center text-white mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">ABOUT US</h2>
        <p className="text-base md:text-lg italic opacity-90">
          “Innovation is seeing what everybody has seen and thinking what nobody has thought.” <br /> 
          <span className="not-italic">–Dr. Albert, Szent- Györgyi</span>
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* IDEATE */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 flex flex-col items-center shadow-lg hover:scale-105 transition duration-300">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-600 mb-4">
            <Lightbulb size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-3">IDEATE</h3>
          <p className="text-sm text-center opacity-80">
            Our vision is to build a space where students from all backgrounds can connect,
            collaborate, and share ideas through a shared passion for technology and innovation.
          </p>
        </div>

        {/* INNOVATE */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 flex flex-col items-center shadow-lg hover:scale-105 transition duration-300">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-600 mb-4">
            <Wrench size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-3">INNOVATE</h3>
          <p className="text-sm text-center opacity-80">
            We encourage and inspire individuals to innovate, supporting their growth both mentally 
            and practically while offering opportunities to develop real-world skills.
          </p>
        </div>

        {/* INSPIRE */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 flex flex-col items-center shadow-lg hover:scale-105 transition duration-300">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-600 mb-4">
            <Rocket size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-3">INSPIRE</h3>
          <p className="text-sm text-center opacity-80">
            We create opportunities and motivate talented individuals to participate in competitions 
            where they can turn their innovative ideas into real achievements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
