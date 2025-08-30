import React from "react";
import {
  Users,
  Briefcase,
  Code,
  Settings,
  BookOpen,
  Palette,
  Film,
  Globe,
  FlaskConical,
  Megaphone,
  Cpu,
} from "lucide-react";

const departments = [
  {
    name: "Organizing",
    desc: "Event planning, logistics & smooth execution of MIC activities.",
    icon: <Users size={32} />,
  },
  {
    name: "Industrial Collaboration & HR",
    desc: "Building industry partnerships and managing club members.",
    icon: <Briefcase size={32} />,
  },
  {
    name: "App & Web Development",
    desc: "Developing digital platforms, apps, and websites for MIC.",
    icon: <Code size={32} />,
  },
  {
    name: "Administration",
    desc: "Ensuring policy, structure, and overall coordination of club.",
    icon: <Settings size={32} />,
  },
  {
    name: "SSD",
    desc: "Specialized skill development through focused programs.",
    icon: <BookOpen size={32} />,
  },
  {
    name: "Creative",
    desc: "Designing posters, graphics, and branding materials.",
    icon: <Palette size={32} />,
  },
  {
    name: "Video Editing",
    desc: "Crafting engaging visuals and event highlight videos.",
    icon: <Film size={32} />,
  },
  {
    name: "MIC Portal",
    desc: "Maintaining MIC’s digital presence and information systems.",
    icon: <Globe size={32} />,
  },
  {
    name: "R&D",
    desc: "Exploring innovative research & prototyping new solutions.",
    icon: <FlaskConical size={32} />,
  },
  {
    name: "Marketing",
    desc: "Promoting MIC events and activities to wider audiences.",
    icon: <Megaphone size={32} />,
  },
  {
    name: "ML & MC",
    desc: "Projects on AI, Machine Learning, and Microcontrollers.",
    icon: <Cpu size={32} />,
  },
];

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#001d3d] to-[#000814] text-white min-h-screen py-16 px-6 md:px-20 lg:px-32">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">
          MIST Innovation Club
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          The official hub of creativity, technology, and entrepreneurship at
          Military Institute of Science and Technology. <br />
          <span className="font-semibold text-blue-400 italic">
            “Innovate to Serve”
          </span>
        </p>
      </section>

      {/* Who We Are */}
      <section className="mb-16 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-200 leading-relaxed">
          MIST Innovation Club is a vibrant community of curious minds united by
          a passion for innovation. We bring together engineers, designers,
          thinkers, and leaders from diverse backgrounds to brainstorm, build,
          and showcase groundbreaking ideas that can make a real difference in
          society.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-blue-900/30 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed">
            To cultivate an innovation-driven ecosystem at MIST, empowering
            students with the resources, mentorship, and opportunities they need
            to transform their boldest ideas into reality.
          </p>
        </div>
        <div className="bg-blue-900/30 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-300 leading-relaxed">
            To establish MIST Innovation Club as a nationally recognized hub of
            changemakers, entrepreneurs, and future leaders who contribute
            meaningfully to technological and social progress.
          </p>
        </div>
      </section>

      {/* Our Departments */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Departments
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <div
              key={i}
              className="bg-blue-800/30 p-6 rounded-xl shadow hover:bg-blue-700/40 hover:scale-105 transition"
            >
              <div className="flex items-center gap-3 mb-3 text-blue-400">
                {dept.icon}
                <h3 className="text-xl font-semibold text-white">{dept.name}</h3>
              </div>
              <p className="text-gray-300 text-sm">{dept.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
        <ul className="space-y-4 text-gray-200 text-lg">
          <li>🚀 Organize Hackathons & Case Competitions</li>
          <li>🛠️ Host Technical Workshops & Training Programs</li>
          <li>📊 Incubate Innovative Projects & Startups</li>
          <li>🤝 Build Industry Connections & Mentorship</li>
          <li>🌍 Inspire a culture of creativity & problem-solving at MIST</li>
        </ul>
      </section>

      {/* Achievements */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-900/40 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">50+ Events</h3>
            <p className="text-gray-300">Organized across multiple domains</p>
          </div>
          <div className="bg-blue-900/40 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">1000+ Members</h3>
            <p className="text-gray-300">Active innovators and learners</p>
          </div>
          <div className="bg-blue-900/40 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">National Recognition</h3>
            <p className="text-gray-300">Awards & competition victories</p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="mb-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Why Join Us?</h2>
        <ul className="space-y-3 text-gray-200 text-lg text-left md:text-center">
          <li>✔️ Learn skills beyond classroom knowledge</li>
          <li>✔️ Collaborate with like-minded innovators</li>
          <li>✔️ Lead and manage real-world impactful projects</li>
          <li>✔️ Gain exposure to national & global platforms</li>
          <li>✔️ Unlock opportunities for entrepreneurship</li>
        </ul>
      </section>

      {/* Closing CTA */}
      <section className="text-center mt-20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Be a Part of the Movement
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8">
          At MIST Innovation Club, we believe every idea has the power to
          transform lives. Together, let’s build the future of innovation.
        </p>
        <a
          href="#"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl text-lg font-semibold shadow-lg transition"
        >
          Join Us Today
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
