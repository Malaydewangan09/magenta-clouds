"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import OptimizedVideo from "./OptimizedVideo"

interface HeroProps {
  scale: any
  imageBlur: any
  overlayOpacity: any
  textOpacity: any
  textY: any
  letterSpacing: any
  heroRef: any
}

export default function Hero({ 
  scale, 
  imageBlur, 
  overlayOpacity, 
  textOpacity, 
  textY, 
  letterSpacing,
  heroRef 
}: HeroProps) {
  return (
    <section id="home" ref={heroRef} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale, filter: `blur(${imageBlur}px)` }}
          className="absolute inset-0 z-0 w-full h-full"
        >
          <OptimizedVideo 
            videoId="1061717081" 
            className="scale-110"
          />
          <motion.div 
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-20">
          {/* ... rest of your hero content ... */}
        </div>
      </div>
    </section>
  )
}