"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const teamMembers = [
    {
      name: "Nikhil Pandey",
      role: "Founder & Editor",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero eaque impedit iusto odio eveniet necessitatibus quisquam aliquam quos maxime veritatis sunt, reprehenderit repellendus!",
      image: "/np.png",
    },
    {
      name: "Anjali Waghela",
      role: "Senior Writer",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero eaque impedit iusto odio eveniet necessitatibus quisquam aliquam quos maxime veritatis sunt, reprehenderit repellendus!",
      image: "/anjali.png",
    },
    {
      name: "Emily Johnson",
      role: "UX Specialist",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero eaque impedit iusto odio eveniet necessitatibus quisquam aliquam quos maxime veritatis sunt, reprehenderit repellendus!",
      image: "/np.png",
    },
  ];

  

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section
        className="py-12 md:py-24 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          About Minimalist
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're a team of designers, developers, and writers passionate about
          sharing insights on design, technology, and creativity to help you
          create better digital experiences.
        </p>
      </motion.section>

      {/* misssion sect */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 py-12 md:py-24 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-6">
            At Minimalist, we believe that great design and technology should be
            accessible to everyone. Our mission is to demystify complex concepts
            and inspire creativity through clear, thoughtful content that helps
            our readers grow professionally and personally.
          </p>
          <p className="text-lg text-muted-foreground">
            We're committed to promoting principles of simplicity, usability,
            and inclusivity in everything we publish, helping to create a web
            that works better for everyone.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="relative h-[400px] rounded-lg overflow-hidden"
        >
          <Image
            src="/mission.png"
            alt="Our mission"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <section className="py-12 md:py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-card rounded-lg overflow-hidden border shadow-sm"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <p>{member.bio}</p>
                <div className="flex mt-4 space-x-2">
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
