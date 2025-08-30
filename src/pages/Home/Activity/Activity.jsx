import React from "react";
import { CheckCircle, Lightbulb, Users, Rocket } from "lucide-react";

const activities = [
  {
    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    title: "Develop Technical Skills",
    desc: "Learning by doing is how real innovation happens.",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    title: "Learn Professional Tactics",
    desc: "Learn how to think, plan, and execute like a pro.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Unveil Your True Passion",
    desc: "Discover and work towards your passion.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-blue-600" />,
    title: "Insights from Industry Experts",
    desc: "Hear directly from the professionals.",
  },
];

const Activity = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl py-16 px-8 text-white my-20 mx-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side: Section heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
            Our Activities
          </h2>
          <p className="text-base md:text-lg opacity-90">
            MIC offers a dynamic blend of activities designed to help people achieve hands-on experience with modern tech, development and research. We also offer a range of workshops, sessions, and competitions designed to prepare students for real-world innovation.
          </p>
        </div>

        {/* Right side: Activities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-blue-900 bg-opacity-40 rounded-xl p-5 border border-blue-400 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white p-2 rounded-md shadow">
                  {activity.icon}
                </div>
                <h3 className="text-md font-semibold">{activity.title}</h3>
              </div>
              <p className="text-sm opacity-80">{activity.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activity;
