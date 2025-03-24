"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data";
import BlogPostCard from "@/components/blog-post-card";

export default function Blog() {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = category === "all" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-2/3">
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search articles..."
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="w-full md:w-1/3">
          <Label htmlFor="category">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="creativity">Creativity</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">
              No posts found matching your criteria.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
