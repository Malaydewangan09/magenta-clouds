"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 bg-[#f0ebe1]">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6"
          >
            Our Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl font-playfair mb-8 relative inline-block"
          >
            <span className="relative z-10">Portfolio</span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              className="absolute bottom-2 left-0 h-3 bg-zinc-200/50 -z-10"
              transition={{ duration: 0.8 }}
            ></motion.span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 overflow-hidden group relative"
          >
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <Image
              src="/images/magazines/2.jpeg"
              alt="Featured photograph"
              width={1200}
              height={800}
              className="w-full h-[85vh] object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm tracking-wider mb-2">EDITORIAL</p>
              <h3 className="text-2xl font-light">The Light Series</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 overflow-hidden group relative"
          >
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <Image
              src="/images/magazines/5.jpg"
              alt="Portrait"
              width={600}
              height={800}
              className="w-full h-[85vh] object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm tracking-wider mb-2">PORTRAIT</p>
              <h3 className="text-2xl font-light">Natural Beauty</h3>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 overflow-hidden group relative"
          >
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <Image
              src="/images/magazines/1.jpg"
              alt="Fashion"
              width={800}
              height={600}
              className="w-full h-[50vh] object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm tracking-wider mb-2">FASHION</p>
              <h3 className="text-2xl font-light">Elegance</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 overflow-hidden group relative"
          >
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <Image
              src="/images/magazines/3.jpg"
              alt="Product"
              width={800}
              height={600}
              className="w-full h-[50vh] object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm tracking-wider mb-2">PRODUCT</p>
              <h3 className="text-2xl font-light">Minimalism</h3>
            </div>
          </motion.div>
        </div>

        {/* Video Section */}
        <div className="relative w-full h-[90vh] mt-28 overflow-hidden rounded-lg">
          {/* Video overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/60 z-10"></div>
          
          {/* Video frame with subtle border */}
          <div className="absolute inset-4 border border-white/10 z-10 rounded-lg pointer-events-none"></div>
          
          <iframe
            src="https://player.vimeo.com/video/1061717081?h=661cbd3b11&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-screen h-screen object-cover"
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              transform: 'scale(1.25)'
            }}
          ></iframe>
          
          {/* Content with improved typography and layout */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/60 tracking-[0.3em] text-xs uppercase mb-6"
            >
              Cinematic Experience
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-playfair mb-8 tracking-wide"
            >
              SOUL<span className="text-white/70">+</span>CINEMA
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg leading-relaxed text-white/90 font-light"
            >
              Every wedding is unique and so are our films. For past 8 years we have set new benchmarks of
              storytelling within wedding realm and beyond. We are fortunate to have experienced so
              unique cultures and traditions across 25 countries and to document stories that
              continuously overwhelm us.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <Link 
                href="#contact" 
                className="inline-flex items-center gap-3 group"
              >
                <span className="h-[1px] w-8 bg-white/40 group-hover:w-12 transition-all"></span>
                <span className="text-xs tracking-[0.3em] uppercase font-light">View Films</span>
                <span className="h-[1px] w-8 bg-white/40 group-hover:w-12 transition-all"></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}