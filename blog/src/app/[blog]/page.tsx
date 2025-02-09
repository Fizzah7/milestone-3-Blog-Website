import Image from "next/image";
import React from "react";

export default function BlogSection() {
  const blogs = [
    {
      category: "A Melting Pot of Flavors",
      title: "Khyber Pakhtunkhwa",
      description:
        "The northern regions, such as Khyber Pakhtunkhwa and Balochistan, draw inspiration from Central Asian cuisine with hearty meat dishes and savory dumplings.",
      imageUrl: "/platter.jpg",
      stats: { views: "1.2K", comments: 6 },
    },
    {
      category: "A Melting Pot of Flavors",
      title: "Balochistan",
      description:
        "Balochistani food is rich, hearty, and full of robust flavors. The cuisine emphasizes meat, simple yet flavorful spices, and traditional methods of cooking.",
      imageUrl: "/balochi-sajji.jpg",
      stats: { views: "1.2K", comments: 3 },
    },
    {
      category: "A Melting Pot of Flavors",
      title: "Punjab",
      description:
        "Punjabi cuisine is a celebration of bold flavors, hearty ingredients, and soul-satisfying meals. Punjabi food is not just a meal—it’s an experience of warmth, tradition, and unmatched culinary artistry.",
      imageUrl: "/sarson-saag.jpg",
      stats: { views: "1.2K", comments: 6 },
    },
    {
      category: "A Melting Pot of Flavors",
      title: "Sindh",
      description:
        "Sindhi cuisine is a vibrant explosion of flavors, promises an unforgettable feast for the taste buds. Each dish is a testament to the region’s rich cultural history and its love for bold, aromatic flavors—once you experience it, you'll be hooked for life!",
      imageUrl: "/sindhi-biryani.jpg",
      stats: { views: "1.2K", comments: 6 },
    },
    {
      category: "A Melting Pot of Flavors",
      title: "Karachi",
      description:
        "The spices from South Asia, the Middle East, and Central Asian cuisine shine in Pakistani dishes like biryani and nihari.",
      imageUrl: "/bun-kabab.jpg",
      stats: { views: "1.2K", comments: 5 },
    },
    {
      category: "A Melting Pot of Flavors",
      title: "Islamabad",
      description:
        "The food of Islamabad offers a vibrant mix of traditional Pakistani flavors, street food, international options, and innovative fusion dishes, making it a food lover’s paradise.",
      imageUrl: "/halwa-puri.jpg",
      stats: { views: "1.2K", comments: 6 },
    },
    {
      category: "A Melting Pot of Flavors",
      title: "Lahore",
      description:
        "The food of Lahore is a delightful fusion of traditional Punjabi, Mughlai, and street food influences.",
      imageUrl: "/lahori-takatak.jpg",
      stats: { views: "1.2K", comments: 2 }, 
    },
  ];

  return (
    <section className="text-slate-50 body-font bg-slate-950">
      <div className="container mx-auto px-5 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <Image
                className="w-full h-48 object-cover"
                src={blog.imageUrl}
                alt={blog.title}
                width={720}
                height={400}
                priority
              />
              <div className="p-6">
                <h2 className="text-xs font-medium text-gray-400 mb-1 uppercase tracking-widest">
                  {blog.category}
                </h2>
                <h1 className="text-lg font-semibold text-gray-100 mb-3">
                  {blog.title}
                </h1>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {blog.description}
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href={`/blog/${blog.title}`}
                    className="text-red-500 font-medium hover:underline flex items-center"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                  <div className="flex space-x-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <span>{blog.stats.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                        />
                      </svg>
                      <span>{blog.stats.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
