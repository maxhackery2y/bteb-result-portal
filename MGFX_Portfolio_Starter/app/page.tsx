import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Download, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "YouTube Thumbnail Collection",
    image: "/images/youtube-thumbnail.jpg",
    link: "#",
  },
  {
    title: "Social Media Poster Set",
    image: "/images/social-poster.jpg",
    link: "#",
  },
  {
    title: "Food Ads & Manipulation",
    image: "/images/food-ads.jpg",
    link: "#",
  },
  {
    title: "ED-Tech Creative Visuals",
    image: "/images/edtech.jpg",
    link: "#",
  },
  {
    title: "Flyer Design Concepts",
    image: "/images/flyer.jpg",
    link: "#",
  },
  {
    title: "Perfume Advertisement Series",
    image: "/images/perfume.jpg",
    link: "#",
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-indigo-600 drop-shadow-md">I'm MGFX</h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          A professional graphic designer with 1-2 years of experience. I specialize in YouTube thumbnails, social media posters, food/product ads, ED-tech visuals, flyer design, perfume ads, and creative visual manipulations. I help brands tell their story through stunning and strategic designs.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button variant="default" asChild>
            <a href="mailto:mosabbirarrahman71@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Email Me
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="tel:+8801766606345">
              <Phone className="mr-2 h-4 w-4" /> WhatsApp
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/MGFX_CV.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </Button>
        </div>
      </header>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">My Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl shadow-xl overflow-hidden bg-white border border-gray-200 hover:shadow-2xl transition duration-300"
            >
              <Card className="h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-5">
                  <h2 className="text-xl font-bold mb-2 text-gray-700">{project.title}</h2>
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-indigo-600 hover:underline"
                  >
                    View Project
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="text-center mt-16 text-gray-500">
        &copy; {new Date().getFullYear()} MGFX — All rights reserved.
      </footer>
    </main>
  );
}
