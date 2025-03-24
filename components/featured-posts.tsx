"use client";

import { blogPosts } from "@/lib/data";
import { motion } from "framer-motion";
import BlogPostCard from "./blog-post-card";

export const FeaturedPosts = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
            {featuredPosts.map((post) =>(
                <BlogPostCard
                    key={post.id}
                    post={post}
                />
            ))}
        </motion.div>
      </div>
    </section>
  );
};
