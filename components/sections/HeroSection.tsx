"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { RefObject } from "react"

interface HeroSectionProps {
  heroRef: RefObject<HTMLDivElement>
  scale: any
  imageBlur: any
  overlayOpacity: any
  textOpacity: any
  textY: any
  letterSpacing: any
}

export default function HeroSection({ 
  heroRef, 
  scale, 
  imageBlur, 
  overlayOpacity, 
  textOpacity, 
  textY, 
  letterSpacing 
}: HeroSectionProps) {
  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="relative h-[180vh]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale, filter: `blur(${imageBlur}px)` }}
          className="absolute inset-0 z-0 w-full h-full"
        >
          <div className="absolute inset-0 w-full h-full">
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
          </div>
          <motion.div 
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"
          ></motion.div>
        </motion.div>

        <div className="container mx-auto px-0 z-20">
          <motion.div 
            style={{ opacity: textOpacity }}
            className="max-w-[90rem] mx-auto px-4 md:px-8"
          >
            <div className="flex flex-col items-start text-left max-w-4xl">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-white/60 tracking-[0.3em] text-xs md:text-sm font-light mb-8 md:mb-12"
              >
                VISUAL STORYTELLING
              </motion.p>

              <motion.div 
                style={{ y: textY }}
                className="space-y-4 md:space-y-6"
              >
                <motion.h1 
                  style={{ letterSpacing }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-inter font-light text-white/95 leading-[1.1] md:leading-[0.95] tracking-[-0.02em] md:tracking-[-0.04em]"
                >
                  Magenta
                  <motion.span 
                    style={{ opacity: textOpacity }}
                    className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-extralight mt-4 md:mt-6 text-white/80 tracking-tight"
                  >
                    Clouds
                  </motion.span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="pt-8 md:pt-12"
                >
                  <Link 
                    href="#portfolio"
                    className="inline-flex items-center gap-3 md:gap-4 text-white/80 hover:text-white transition-all group"
                  >
                    <span className="h-[1px] w-8 md:w-12 bg-white/40 group-hover:w-16 md:group-hover:w-24 transition-all"></span>
                    <span className="text-xs md:text-sm tracking-[0.3em] uppercase font-light">Explore Work</span>
                    <span className="h-[1px] w-8 md:w-12 bg-white/40 group-hover:w-16 md:group-hover:w-24 transition-all"></span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-white/40 text-xs tracking-[0.3em]">SCROLL</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}