"use client"
import Image from "next/image";
import BlogCard from "./blog/BlogCard";
import { blogPosts } from "./data";
import { TPost } from "@/type";






const BlogPage = ({data}:{data:TPost}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container w-[90%] px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            From the blog
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Salami mustard spice tea fridge authentic Chinese food dish salt tasty liquor. Sweet savory food truck pie.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={data}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
