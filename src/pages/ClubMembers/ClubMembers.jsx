import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ClubMembers = () => {
  const [members, setMembers] = useState(null);

  useEffect(() => {
    fetch("../../../public/clubMembers.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  if (!members) return <p className="text-center text-gray-500">Loading...</p>;

  const Card = ({ person }) => (
  <div
    className="bg-white text-center p-6 rounded-lg w-64 shadow-md 
               transform transition duration-300 ease-in-out 
               hover:scale-105 hover:shadow-2xl hover:shadow-blue-200 relative"
  >
    {/* Role Badge at top */}
    {person.role && (
      <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 
                       bg-blue-700 text-white text-xs font-semibold 
                       px-3 py-1 rounded-full shadow">
        {person.role}
      </span>
    )}

    {/* Profile Image */}
    <img
      src={person.image}
      alt={person.name}
      className="w-52 h-52 rounded-full mx-auto object-cover border-4 border-transparent hover:border-blue-500 transition mt-6"
    />

    {/* Name */}
    <h3 className="mt-4 text-lg font-semibold text-gray-800">
      {person.name}
    </h3>

    {/* Department */}
    <p className="text-sm text-gray-600">{person.department}</p>

    {/* Email & Phone */}
    <div className="mt-3 text-sm text-gray-700 space-y-2">
      {person.phone && <p>{person.phone}</p>}
    </div>

    {/* Social Links */}
    <div className="flex justify-center gap-4 mt-4 text-gray-600">
      <a href={person.facebook} target="_blank" rel="noreferrer">
        <FaFacebook className="hover:text-blue-600 transition" />
      </a>
      <a href={person.linkedin} target="_blank" rel="noreferrer">
        <FaLinkedin className="hover:text-blue-700 transition" />
      </a>
      <a
        href={`mailto:${person.email}`}
        className="flex items-center justify-center gap-2 hover:text-red-600 transition"
      >
        <FaEnvelope />
      </a>
    </div>
  </div>
);


  return (
    <div>
      <div className="bg-black text-white text-center">
        <div className="max-w-7xl mx-auto px-6 py-20 md:px-16 md:py-24">
          {/* Our Team Header */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-wide relative inline-block">
            Our Team
            <span className="block h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-3 rounded-full"></span>
          </h2>

          {/* President */}
          <div className="flex justify-center mb-12">
            <Card person={members.presidentialPanel[0]} />
          </div>

          {/* Leadership (General Sec + VP) */}
          <h3 className="text-3xl md:text-4xl font-semibold text-center mb-6 tracking-wide uppercase relative inline-block">
            Leadership
            <span className="block h-1 w-20 bg-purple-500 mx-auto mt-2 rounded-full"></span>
          </h3>
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            {members.presidentialPanel.slice(1).map((p) => (
              <Card key={p.id} person={p} />
            ))}
          </div>

          {/* Executive Directors */}
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center tracking-wide uppercase relative inline-block">
            Executive Directors
            <span className="block h-1 w-20 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-2 rounded-full"></span>
          </h3>
          <div className="flex justify-center gap-6 flex-wrap mb-12">
            {members.executiveDirectors.map((p) => (
              <Card key={p.id} person={p} />
            ))}
          </div>

          {/* Executive Members */}
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center tracking-wide uppercase relative inline-block">
            Executive Members
            <span className="block h-1 w-20 bg-gradient-to-r from-pink-400 to-red-500 mx-auto mt-2 rounded-full"></span>
          </h3>
          <div className="flex justify-center gap-6 flex-wrap mb-12">
            {members.executiveMembers.map((p) => (
              <Card key={p.id} person={p} />
            ))}
          </div>

          {/* Associate Members */}
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center tracking-wide uppercase relative inline-block">
            Associate Members
            <span className="block h-1 w-20 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-2 rounded-full"></span>
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {members.associateMembers.map((p) => (
              <Card key={p.id} person={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubMembers;
