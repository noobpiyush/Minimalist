"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

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

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.section
        className="py-12 md:py-24 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Have a question, feedback, or just want to say hello? We'd love to
          hear from you. Fill out the form below and we'll get back to you as
          soon as possible.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section className="py-12 grid md:grid-cols-2 spa">
      <motion.div variants={fadeIn}>
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll respond within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={fadeIn} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Here are the ways you can reach us directly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    123 Design Street
                    <br />
                    Creative District
                    <br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    hello@minimalist.com
                    <br />
                    support@minimalist.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">
                    +1 (555) 123-4567
                    <br />
                    Mon-Fri, 9am-5pm PST
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">How quickly will you respond?</h3>
                <p className="text-muted-foreground">
                  We aim to respond to all inquiries within 24 hours during business days.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Can I contribute to the blog?</h3>
                <p className="text-muted-foreground">
                  Yes! We welcome guest contributions. Please contact us with your ideas.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Do you offer consulting services?</h3>
                <p className="text-muted-foreground">
                  We provide limited consulting services for select projects. Contact us for details.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  );
}
