import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NewsSlider from "../NewsSlider/NewsSlider";

const workshops = [
  {
    id: 1,
    title: "Legit Adda: Workshop on Memes",
    desc: "Hands-on session on meme strategy, formats, ethics & impact.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600",
    date: "Sep 12, 2025",
    venue: "Auditorium A",
    cta: "#",
    tag: "Featured",
  },
  {
    id: 2,
    title: "AI & IoT Bootcamp",
    desc: "Build an end-to-end IoT pipeline with AI inference at the edge.",
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600",
    date: "Sep 20, 2025",
    venue: "Lab 3",
    cta: "#",
    tag: "New",
  },
  {
    id: 3,
    title: "Robotics with Arduino",
    desc: "Sensors, motor drivers, PID basics, and line-follower build.",
    img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600",
    date: "Oct 02, 2025",
    venue: "Innovation Hub",
    cta: "#",
  },
  {
    id: 4,
    title: "Design for Developers",
    desc: "Typography, spacing, color systems & quick UI heuristics.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600",
    date: "Oct 15, 2025",
    venue: "Hall B",
    cta: "#",
  },
];

const Workshop = () => {
  return (
    <div>
        <NewsSlider></NewsSlider>
      <section className="w-full bg-gradient-to-r from-blue-950 to-blue-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Upcoming Workshops
            </h2>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              Learn, build, and network with industry mentors & peers.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            keyboard={{ enabled: true }}
            a11y={{ enabled: true }}
            centeredSlides
            loop
            spaceBetween={24}
            slidesPerView={1.1}
            slidesPerGroup={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: false },
            }}
            className="pb-10"
          >
            {workshops.map((w) => (
              <SwiperSlide key={w.id}>
                <article className="group bg-white/95 rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5 hover:shadow-2xl transition">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={w.img}
                      alt={w.title}
                      loading="lazy" // browser lazy
                      className="w-full h-44 md:h-52 object-cover"
                    />
                    {/* Soft overlay gradient for text contrast */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/0" />
                    {/* Tag */}
                    {w.tag && (
                      <span className="absolute top-3 left-3 text-xs font-semibold bg-blue-600 text-white px-2 py-1 rounded-md">
                        {w.tag}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {w.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {w.desc}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 0 0 2-2V7H3v12a2 2 0 0 0 2 2Z" />
                        </svg>
                        {w.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 7a5 5 0 0 1 5 5v5H7v-5a5 5 0 0 1 5-5Z" />
                          <path d="M5 21h14" />
                        </svg>
                        {w.venue}
                      </span>
                    </div>

                    {/* CTA */}
                    <a
                      href={w.cta}
                      aria-label={`View more about ${w.title}`}
                      className="mt-2 self-end px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-500 active:scale-[.98] transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Course
                    </a>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Workshop;
