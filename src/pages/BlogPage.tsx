import React, { useState } from "react";
import Blog from "@/components/app/blog_page/Blog";
import { blogs } from "@/data/blogData";
import { Button } from "@/components/app/shared/frontend-button";
import Layout from "@/components/app/layout/layout";

const BlogPage: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Initial count of blogs to display

  const topStories = blogs.filter((blog) => blog.type === "top-story");

  const handleLoadMore = () => {
    setVisibleCount(topStories.length); // Show all blogs
  };

  return (
    <Layout>
      <section>
        <div className="container">
          <div className="py-10 lg:pt-48 lg:pb-[120px] grid lg:grid-cols-[8fr_4fr]">
            <div className="space-y-4 md:space-y-10">
              <h1 className="text-2xl md:text-5xl lg:text-[80px] text-[#010609] font-semibold">
                Insights, Trends, and Best Practices in Al-Powered Solutionsv
              </h1>
              <p className="text-xl text-[#010609B2]">
                Welcome to the Genie Blog-your go-to resource for the latest in
                Al, customer support automation, digital workers, and sales
                innovation. Read through insights, success stories, and
                actionable tips that will help you harness the power of Al to
                drive growth, streamline operations, and deliver unparalleled
                customer experiences.
              </p>
              <form
                className="pt-2 flex gap-y-1 flex-wrap md:flex-nowrap items-center "
                action="#"
              >
                <input
                  className="h-10 md:h-[60px] px-5 md:px-6 py-4 md:py-[18px] placeholder:text-[#B9C0CA] focus:outline-none md:min-w-[400px] border rounded-[40px]"
                  type="text"
                  placeholder="Enter your email"
                />

                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="section_gap">
        <div className="container">
          <div className=" space-y-14">
            <div>
              <h2 className="titleTwo pb-3 md:pb-6 border-b border-[#E9EAEC] mb-6 md:mb-20">
                Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                {blogs
                  .filter((blog) => blog.type === "featured")
                  .map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                  ))}
              </div>
            </div>
            <div>
              <h2 className="titleTwo pb-3 md:pb-6 border-b border-[#E9EAEC] mb-6 md:mb-20">
                Top Stories
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {topStories.slice(0, visibleCount).map((blog) => (
                  <Blog key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
            {/* Load More Button */}
            {visibleCount < topStories.length && (
              <Button onClick={handleLoadMore}>Load More</Button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;