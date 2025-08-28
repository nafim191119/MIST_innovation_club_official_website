import React from "react";
import { CheckCircle, Lightbulb, Users, Rocket } from "lucide-react";

const activities = [
  {
    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    title: "Workshops",
    desc: "Hands-on sessions to learn and apply innovative skills.",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    title: "Projects",
    desc: "Collaborative projects solving real-world problems.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Community",
    desc: "Engage with peers and industry experts in tech meetups.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-blue-600" />,
    title: "Competitions",
    desc: "Participate in hackathons and innovation challenges.",
  },
];

const Activity = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl py-16 px-8 text-white my-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side: Section heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Activities
          </h2>
          <p className="text-base md:text-lg opacity-90">
            At MIST Innovation Club, we engage students with diverse activities 
            ranging from workshops and projects to competitions and networking. 
            These initiatives empower members to grow technically and 
            professionally.
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
                <h3 className="text-lg font-semibold">{activity.title}</h3>
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
