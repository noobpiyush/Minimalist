import { FeaturedPosts } from "@/components/featured-posts";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="py-12 md:py-24 lg:py-32 space-y-8">
        <div className="flex flex-col mx-auto max-w-[58rem] items-center space-y-4 text-center">
          <h1 className="font-heading text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
            Thoughts, stories and ideas.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Welcome to our minimalist blog where we share insights on design,
            technology, and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/blog">
                Browse Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </section>
      <FeaturedPosts/>
    </main>
  );
}
