import React, { useState } from "react";
import { Bell } from "lucide-react";

const notices = [
  {
    id: 1,
    title: "Semester Final Examination 2025",
    content:
      "The semester final examination will start from 15th September. Students are requested to collect their admit cards before 10th September.",
    date: "2025-09-15",
    important: true,
    category: "Exam",
  },
  {
    id: 2,
    title: "Workshop on AI & IoT",
    content:
      "A technical workshop will be held on AI & IoT applications. Registration deadline: Aug 30, 2025. Venue: Auditorium 1, 10 AM onwards.",
    date: "2025-08-22",
    category: "Event",
  },
  {
    id: 3,
    title: "Club Recruitment",
    content:
      "IEEE Student Branch is recruiting new members. Apply now to be part of exciting projects and events. Deadline: 5th September.",
    date: "2025-08-20",
    category: "Club",
  },
  {
    id: 4,
    title: "Freshers' Orientation",
    content:
      "Orientation program for new students will be held on October 5, 2025 at Main Auditorium. Chief guest: Vice Chancellor.",
    date: "2025-10-05",
    category: "Orientation",
  },
];

// Helper function to format month
const getMonthYear = (date) => {
  const options = { month: "long", year: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};

const NoticeBoard = () => {
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Extract all months from notices
  const months = [
    "All",
    ...Array.from(new Set(notices.map((n) => getMonthYear(n.date)))),
  ];

  // Filter notices by month + search
  const filteredNotices = notices.filter((n) => {
    const matchesMonth =
      selectedMonth === "All" || getMonthYear(n.date) === selectedMonth;
    const matchesSearch =
      n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesMonth && matchesSearch;
  });

  return (
    <div className="w-full bg-gradient-to-r from-blue-950 to-blue-800 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Bell className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white">Latest Notices</h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <input
              type="text"
              placeholder="Search notices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-yellow-400"
            />

            {/* Month Filter */}
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-yellow-400"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Notices Grid */}
        {filteredNotices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-gradient-to-br from-blue-700/80 to-blue-500/70 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-white/20 hover:scale-[1.02] transition flex flex-col"
              >
                {/* Title + Badge */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {notice.title}
                  </h3>
                  {notice.important && (
                    <span className="px-2 py-1 text-xs font-medium bg-red-500/80 text-white rounded-full">
                      Important
                    </span>
                  )}
                </div>

                {/* Category */}
                <span className="text-xs px-2 py-1 bg-yellow-400/80 rounded-full text-black mb-3 w-fit">
                  {notice.category}
                </span>

                {/* Content */}
                <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                  {notice.content}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs text-gray-300">
                    {getMonthYear(notice.date)}
                  </span>
                  <a
                    href={`/notice/${notice.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-xs bg-blue-400 text-white rounded-lg hover:bg-blue-900 transition font-semibold"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300 text-center mt-10">
            No notices found for this filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;
