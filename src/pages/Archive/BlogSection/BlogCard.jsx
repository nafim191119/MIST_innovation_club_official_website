import React from "react";

const BlogCard = ({ title, excerpt, image, date }) => {
  return (
    <div className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-blue-100 text-sm">{excerpt}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-blue-200 text-xs">{date}</span>
          <button className="bg-white text-blue-700 px-3 py-1 text-sm rounded hover:bg-blue-100 transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
