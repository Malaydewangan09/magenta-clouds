"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#f0ebe1]">
      <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-5"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  initial={{ height: '100%' }}
                  whileInView={{ height: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 z-10"
                ></motion.div>
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
                  alt="About Sandeepod"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-zinc-900 dark:border-zinc-100"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-zinc-900 dark:border-zinc-100"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <span className="block text-sm uppercase tracking-widest text-zinc-500 mb-4 font-mono">02 — About Us</span>
              <h2 className="text-4xl md:text-5xl font-playfair mb-8 relative">
                <span className="relative z-10">The Art of Visual Storytelling</span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: '40%' }}
                  viewport={{ once: true }}
                  className="absolute bottom-2 left-0 h-3 bg-zinc-100 dark:bg-zinc-800 -z-10"
                  transition={{ duration: 0.8 }}
                ></motion.span>
              </h2>
              <div className="space-y-6">
                <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
                  With over 10 years of experience in professional photography, we have developed a unique style
                  that combines technical precision with artistic vision.
                </p>
                <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
                  We believe that every moment tells a story, and our mission is to capture those stories in their most
                  authentic and beautiful form.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}