import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const NewsSlider = () => {
    return (
        <div>
            <div className="w-full bg-gradient-to-r from-blue-950 to-blue-800 py-6 rounded-xl">
                  <div className="max-w-5xl mx-auto text-center mb-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-white">
                      Our Activities
                    </h2>
                    <p className="text-gray-300 mt-2 text-sm md:text-base">
                      Explore the latest initiatives, events, and achievements.
                    </p>
                  </div>
            
                  <Swiper
                    navigation={true}
                    autoplay={{ delay: 3000 }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper rounded-2xl shadow-lg"
                  >
                    <SwiperSlide>
                      <div className="relative w-full h-[250px] md:h-[400px]">
                        <img
                          src="https://i.ibb.co.com/G4MrSLFv/b1.png"
                          alt="Activity 1"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-left">
                          <h3 className="text-white font-semibold text-lg md:text-2xl">
                            Innovation Week
                          </h3>
                          <p className="text-gray-200 text-xs md:text-sm">
                            Showcasing groundbreaking projects and ideas.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
            
                    <SwiperSlide>
                      <div className="relative w-full h-[250px] md:h-[400px]">
                        <img
                          src="https://picsum.photos/800/400?random=2"
                          alt="Activity 2"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-left">
                          <h3 className="text-white font-semibold text-lg md:text-2xl">
                            Tech Workshop
                          </h3>
                          <p className="text-gray-200 text-xs md:text-sm">
                            Hands-on training on modern tools and frameworks.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
            
                    <SwiperSlide>
                      <div className="relative w-full h-[250px] md:h-[400px]">
                        <img
                          src="https://picsum.photos/800/400?random=3"
                          alt="Activity 3"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-left">
                          <h3 className="text-white font-semibold text-lg md:text-2xl">
                            Community Meetup
                          </h3>
                          <p className="text-gray-200 text-xs md:text-sm">
                            Building stronger connections through networking.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
        </div>
    );
};

export default NewsSlider;