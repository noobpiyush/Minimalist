"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/types"

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <motion.div variants={item}>
      <Link href={`/blog/${post.slug}`}>
        <div className="group overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-md">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="[object-fit:contain] w-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" />
                {post.date}
              </div>
            </div>
            <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}