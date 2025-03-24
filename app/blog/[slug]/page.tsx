"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Clock, User } from "lucide-react"
import { blogPosts } from "@/lib/data"
import { notFound } from "next/navigation"
import { use } from "react";

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const articleRef = useRef<HTMLElement>(null)
const paramSlug = use(params).slug


  const post = blogPosts.find((post) => post.slug === paramSlug )

  if (!post) {
    notFound()
  }

  return (
    <article ref={articleRef} className="container mx-auto px-4 py-12 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          width={1200}
          height={630}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

        <div className="flex flex-wrap gap-4 text-muted-foreground mb-8">
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            {post.readingTime} min read
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </article>
  )
}

