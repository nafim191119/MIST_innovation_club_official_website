import React from "react";
import BlogCard from "./BlogCard";

const blogPosts = [
  {
    title: "MIST Innovation Event 2025",
    excerpt:
      "Explore the highlights of our latest innovation event where students showcased their creative projects.",
    image: "https://i.ibb.co.com/G4MrSLFv/b1.png",
    date: "Aug 26, 2025",
  },
  {
    title: "Workshop on AI & IoT",
    excerpt:
      "A deep dive into artificial intelligence and IoT technologies for students and enthusiasts.",
    image: "/images/blog2.jpg",
    date: "Aug 20, 2025",
  },
  {
    title: "Student Project Showcase",
    excerpt:
      "Check out innovative student projects in robotics, software, and sustainable solutions.",
    image: "/images/blog3.jpg",
    date: "Aug 15, 2025",
  },
  {
    title: "Tech Seminar Highlights",
    excerpt:
      "Summary of key takeaways from our recent technology seminar and guest lectures.",
    image: "/images/blog4.jpg",
    date: "Aug 10, 2025",
  },
];

const BlogSection = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center text-white mb-8">
        Blog Posts
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post, idx) => (
          <BlogCard key={idx} {...post} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
