import React from "react";

const eventsData = {
  ongoing: [
    {
      id: 1,
      title: "Pitch Camp 4.0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate tortor et velit tincidunt.",
      image: "/images/pitchcamp.png",
      link: "#",
    },
    {
      id: 2,
      title: "Pep Talk 6.0 : MIST to MIT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate tortor et velit tincidunt.",
      image: "/images/peptalk.png",
      link: "#",
    },
  ],
  past: [
    { id: 1, image: "/images/event1.png" },
    { id: 2, image: "/images/event2.png" },
    { id: 3, image: "/images/event3.png" },
    { id: 4, image: "/images/event4.png" },
    { id: 5, image: "/images/event5.png" },
    { id: 6, image: "/images/event6.png" },
    { id: 7, image: "/images/event7.png" },
    { id: 8, image: "/images/event8.png" },
    { id: 9, image: "/images/event9.png" },
  ],
};

const Events = () => {
  return (
    <div className="bg-[#001d3d] min-h-screen py-10 text-white">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-10 uppercase md:text-5xl">
        Events
      </h2>

      {/* Ongoing Events */}
      <div className="px-4 md:px-12">
        <h3 className="text-xl font-semibold mb-6 md:text-3xl">
          Ongoing Events
        </h3>
        <div className="flex flex-col gap-6">
          {eventsData.ongoing.map((event) => (
            <div
              key={event.id}
              className="flex flex-col md:flex-row items-center md:items-stretch bg-blue-900/40 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full md:w-40 h-40 md:h-auto object-cover"
              />
              {/* Text */}
              <div className="flex-1 p-4">
                <h4 className="text-lg md:text-xl font-bold">{event.title}</h4>
                <p className="text-sm md:text-base text-gray-200 mb-3">
                  {event.description}
                </p>
                <a
                  href={event.link}
                  className="px-4 py-2 text-sm md:text-base rounded-lg bg-blue-600 hover:bg-blue-700 transition"
                >
                  Go to event page
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div className="px-4 md:px-12 mt-12">
        <h3 className="text-xl font-semibold mb-6 md:text-3xl">
          Past Events
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {eventsData.past.map((event) => (
            <div
              key={event.id}
              className="bg-gray-300 rounded-lg aspect-square flex items-center justify-center overflow-hidden"
            >
              <img
                src={event.image}
                alt={`Event ${event.id}`}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
