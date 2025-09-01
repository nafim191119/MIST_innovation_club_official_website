import React from 'react';
import Marquee from "react-fast-marquee";
import { Megaphone } from "lucide-react";


const notices = [
  { title: "Submit your projects by August 15", url: "/" },
  { title: "Monthly meeting postponed to August 20", url: "/" },
  { title: "Workshop on AI – Registration Open!", url: "/" },
  { title: "Club Orientation Program on August 10", url: "/" },
  { title: "New Event: Coding Marathon next week", url: "/" },
];

const MarqueeSection = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 border-y-2 border-indigo-300 shadow-sm w-full overflow-hidden flex items-center">
      {/* Left Icon / Title */}
      <div className="flex items-center gap-2 px-4 py-1 bg-indigo-500 text-white font-semibold">
        <Megaphone size={20} className="animate-pulse" />
        <span>Notice</span>
      </div>

      {/* Marquee */}
      <Marquee gradient={false} speed={50} pauseOnHover>
        {notices.map((notice, i) => (
          <a
            key={i}
            href={notice.url}
            className="mx-8 text-indigo-700 font-medium hover:text-indigo-900 hover:underline transition"
          >
            {notice.title}
          </a>
        ))}
      </Marquee>
    </div>
        </div>
    );
};

export default MarqueeSection;