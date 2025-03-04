"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function StoriesPage() {
  // Array of featured stories
  const stories = [
    {
      id: "alisha-rahul",
      title: "ALISHA & RAHUL",
      location: "Amalfi Coast, Italy",
      date: "June 12, 2023",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a"
    },
    {
      id: "maya-james",
      title: "MAYA & JAMES",
      location: "Santorini, Greece",
      date: "May 8, 2023",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
    },
    {
      id: "zara-david",
      title: "ZARA & DAVID",
      location: "Bali, Indonesia",
      date: "April 22, 2023",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b"
    },
    {
      id: "emma-thomas",
      title: "EMMA & THOMAS",
      location: "Tuscany, Italy",
      date: "March 15, 2023",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
    }
  ]

  return (
    <main className="pt-24 pb-32">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-playfair mb-6">Our Stories</h1>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto">
              Explore our collection of beautiful love stories captured through our lens. Each story is unique, 
              just like the couples who entrusted us with their special moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/5] relative overflow-hidden rounded-lg mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-8 z-20">
                    <h3 className="text-3xl font-playfair text-white mb-2">{story.title}</h3>
                    <p className="text-white/80 mb-6">{story.location}</p>
                    <Link 
                      href={`/stories/${story.id}`} 
                      className="inline-flex items-center text-white group/link"
                    >
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:origin-right after:scale-x-0 after:transition-transform after:duration-300 group-hover/link:after:origin-left group-hover/link:after:scale-x-100">
                        View Story
                      </span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}