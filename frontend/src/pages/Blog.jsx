import BlogCard from "@/components/BlogCard";
import React from "react";

export default function Blog() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
}
