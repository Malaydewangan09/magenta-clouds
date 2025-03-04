"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Camera, ChevronDown, Instagram, Mail, Menu, Moon, Sun, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  })

const headerOpacity = useTransform(scrollYProgress, [0, 0.15, 0.2], 
  [1, 1, 0])
const [isLoading, setIsLoading] = useState(true)
const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
const textY = useTransform(scrollYProgress, [0, 0.3], [0, 50])
const imageBlur = useTransform(scrollYProgress, [0, 0.5], [0, 3]) 
const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.6])
const letterSpacing = useTransform(scrollYProgress, [0, 0.3], ["0em", "0.15em"])

useEffect(() => {
  const handleResize = () => {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const viewportRatio = viewportWidth / viewportHeight;
      
      // Base scale calculation - inversely proportional to screen width
      // This creates a smooth curve where smaller screens get larger scaling
      const baseScale = 4.2 - (viewportWidth / 500);
      
      // Adjust for aspect ratio (taller/narrower screens need more scaling)
      const aspectRatioFactor = Math.max(0.83, Math.min(1.2, 1 / viewportRatio));
      
      // Calculate final scale with constraints
      const finalScale = Math.max(1.2, Math.min(4.5, baseScale * aspectRatioFactor));
      
      // Apply the calculated scale
      iframe.style.transform = `scale(${finalScale})`;
    });
  };
  
  // Initial call
  handleResize();
  
  // Add event listener
  window.addEventListener('resize', handleResize);
  
  // Cleanup
  return () => window.removeEventListener('resize', handleResize);
}, []);


  useEffect(() => {

    document.body.style.backgroundColor = "#f0ebe1"

    if (isDarkMode) {
      document.documentElement.classList.add("edark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  
  const services = [
    {
      title: "Portrait Photography",
      description: "Capturing personalities and emotions in stunning portrait sessions.",
      icon: <Camera className="h-8 w-8" />,
    },
    {
      title: "Event Coverage",
      description: "Comprehensive photography for weddings, corporate events, and special occasions.",
      icon: <Camera className="h-8 w-8" />,
    },
    {
      title: "Commercial Photography",
      description: "High-quality product and brand photography for businesses.",
      icon: <Camera className="h-8 w-8" />,
    },
  ]

  return (
    <main className="min-h-screen">


      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-zinc-900 z-50 transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-end">
            <button onClick={() => setIsMenuOpen(false)} className="p-2">
              <X className="h-8 w-8" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-[80vh] gap-8 text-3xl font-playfair">
            <Link
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#portfolio"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <motion.header 
  style={{ opacity: headerOpacity }}
  className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md"
>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-transparent">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-playfair font-light tracking-wider relative group text-white">
                
                <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-white/40 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="hidden md:flex items-center space-x-10">
                <Link href="#home" className="text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
                <Link
                  href="#portfolio"
                  className="text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
                <Link href="#about" className="text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#services" className="text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="#contact" className="text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
              <div className="flex items-center gap-6">
                
                <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 text-white">
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </header>
      </motion.header>
      {/* Hero Section */}
      <section 
  id="home" 
  ref={heroRef} 
  className="relative h-[113vh]"
>
  <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
    <motion.div 
      style={{ scale, filter: `blur(${imageBlur}px)` }}
      className="absolute inset-0 z-0 w-full h-full"
    >
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="absolute inset-0 w-full h-full"
>

<video
autoPlay
loop
muted
playsInline
  src="/hero.mp4"
  className="w-screen h-screen object-cover"
  style={{ 
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    transform: 'scale(1.23)',
    objectFit: 'cover',
    objectPosition: 'center center'
  }}
></video>
</motion.div>

      <motion.div 
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"
      ></motion.div>
    </motion.div>

    {/* Rest of the hero section content remains the same */}
        {/* Rest of the hero section content */}
        <div className="container mx-auto px-0 z-20">
      <motion.div 
        style={{ opacity: textOpacity }}
        className="max-w-[90rem] mx-auto px-4 md:px-8" // Removed negative margin, added proper padding
      >
        <div className="flex flex-col items-start text-left max-w-4xl"> {/* Added max-width for better text container */}
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
  
<section className="py-20 bg-[#f0ebe1] dark:bg-zinc-900">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-playfair mb-8"
        >
          A MODERN APPROACH
          <br />
          <span className="italic">to an</span>
          <br />
          AGE OLD TRADITION
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-zinc-600 dark:text-zinc-300"
        >
          <p>
            Considered to be at the forefront of contemporary photography, Magenta Clouds
            has redefined the art of visual storytelling. For nearly a decade, we have been
            crafting images that transcend time and capture the essence of precious moments.
          </p>
          <p>
            Our work has earned recognition across the industry, with features in leading
            publications and multiple awards for excellence in photography.
          </p>
        </motion.div>
      </div>
      <div className="lg:col-span-5">
        <div className="grid grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] relative overflow-hidden"
          >
            <Image
            
              src="/images/magazines/8.jpg"
              alt="Wedding photography"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="flex justify-center gap-12 mt-7"
    >
     </motion.div>
  </div>
</section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-[#f0ebe1]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-8 overflow-hidden"
            >
              <Image
                src="/images/magazines/2.jpeg"
                alt="Featured photograph"
                width={1200}
                height={800}
                className="w-full h-[70vh] object-cover transition-all duration-700 hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-4 overflow-hidden"
            >
              <Image
                src="/images/magazines/5.jpg"
                alt="Portrait"
                width={600}
                height={800}
                className="w-full h-[70vh] object-cover transition-all duration-700 hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-6 overflow-hidden"
            >
              <Image
                src="/images/magazines/1.jpg"
                alt="Fashion"
                width={800}
                height={600}
                className="w-full h-[50vh] object-cover transition-all duration-700 hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-6 overflow-hidden"
            >
              <Image
                src="/images/magazines/3.jpg"
                alt="Product"
                width={800}
                height={600}
                className="w-full h-[50vh] object-cover transition-all duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Small images grid */}
          <div className="grid grid-cols-12 gap-6 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-4 overflow-hidden"
            >
              <Image
                src="/images/magazines/9.jpg"
                alt="Portrait"
                width={400}
                height={600}
                className="w-full h-[40vh] object-cover transition-all duration-700 hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-5 overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
                alt="Landscape"
                width={500}
                height={300}
                className="w-full h-[40vh] object-cover transition-all duration-700 hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-3 overflow-hidden"
            >
              <Image
                src="/images/magazines/7.jpg"
                alt="Street"
                width={300}
                height={400}
                className="w-full h-[40vh] object-cover transition-all duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Portfolio Section */}
<section id="portfolio" className="py-20 bg-[#f0ebe1]">
  <div className="container mx-auto px-4">
    {/* ... existing portfolio grid ... */}
    
    {/* Video Section */}
        {/* Video Section - Enhanced Design */}
    <div className="relative w-full h-[90vh] mt-28 overflow-hidden rounded-lg">
      {/* Video overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/60 z-10"></div>
      
      {/* Video frame with subtle border */}
      <div className="absolute inset-4 border border-white/10 z-10 rounded-lg pointer-events-none"></div>
      
      <video
autoPlay
loop
muted
playsInline
  src="/hero.mp4"
  className="w-screen h-screen object-cover"
  style={{ 
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    transform: 'scale(1.23)',
    objectFit: 'cover',
    objectPosition: 'center center'
  }}
></video><video
autoPlay
loop
muted
playsInline
  src="/hero.mp4"
  className="w-screen h-screen object-cover"
  style={{ 
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    transform: 'scale(1.23)',
    objectFit: 'cover',
    objectPosition: 'center center'
  }}
></video>

      
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
          Every wedding is unique and so are our films. For past 8 years HOTC has set new benchmarks of
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

          {/* Video section remains the same */}
        </div>
        

        
      </section>

      {/* Featured Stories Section */}
      {/* Featured Stories Section - Enhanced with Multiple Stories */}
      <section className="py-24 bg-[#f0ebe1]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="block text-sm uppercase tracking-widest text-zinc-500 mb-4 font-mono">03 — Our Stories</span>
            <h2 className="text-4xl md:text-5xl font-playfair mb-6">Featured Stories</h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg max-w-2xl mx-auto">
              Explore our most memorable photographic journeys and the stories behind them.
            </p>
          </motion.div>

          {/* First Featured Story - Large Layout */}
          <div className="grid grid-cols-12 gap-12 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-5 relative"
            >
              <div className="sticky top-32">
                <h2 className="text-6xl md:text-7xl font-playfair leading-tight">
                  ALISHA
                  <br />
                  <span className="text-3xl md:text-5xl font-normal italic">&</span>
                  <br />
                  RAHUL
                </h2>
                <p className="text-zinc-600 dark:text-zinc-300 text-lg mt-8 mb-6">
                  Amalfi Coast, Italy
                </p>
                <Link 
                  href="/stories/alisha-rahul" 
                  className="inline-flex items-center text-lg group"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current after:origin-right after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100">
                    View Story
                  </span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-7 space-y-8"
            >
              <div className="aspect-[16/10] relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a"
                  alt="Alisha and Rahul Wedding"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552"
                    alt="Wedding Details"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1460364157752-926555421a7e"
                    alt="Wedding Moments"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second and Third Stories - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {/* Second Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <Image
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
                  alt="Maya & James"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <h3 className="text-4xl font-playfair text-white mb-2">MAYA & JAMES</h3>
                  <p className="text-white/80 mb-6">Santorini, Greece</p>
                  <Link 
                    href="/stories/maya-james" 
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

            {/* Third Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <Image
                  src="https://images.unsplash.com/photo-1537633552985-df8429e8048b"
                  alt="Zara & David"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <h3 className="text-4xl font-playfair text-white mb-2">ZARA & DAVID</h3>
                  <p className="text-white/80 mb-6">Bali, Indonesia</p>
                  <Link 
                    href="/stories/zara-david" 
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
          </div>

          {/* Fourth Story - Full Width Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative aspect-[21/9] overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50 z-10 opacity-70 group-hover:opacity-80 transition-opacity"></div>
            <Image
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
              alt="Emma & Thomas"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container mx-auto px-8 md:px-16">
                <div className="max-w-xl">
                  <h3 className="text-5xl md:text-6xl font-playfair text-white mb-4">EMMA & THOMAS</h3>
                  <p className="text-white/80 text-lg mb-8">Tuscany, Italy</p>
                  <Link 
                    href="/stories/emma-thomas" 
                    className="inline-flex items-center text-white text-lg group/link"
                  >
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:origin-right after:scale-x-0 after:transition-transform after:duration-300 group-hover/link:after:origin-left group-hover/link:after:scale-x-100">
                      Explore Their Journey
                    </span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-2" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* View All Stories Button */}
          <div className="flex justify-center mt-16">
            <Link 
              href="/stories" 
              className="inline-block group relative overflow-hidden rounded-full"
            >
              <span className="absolute inset-0 bg-zinc-900 dark:bg-zinc-100 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative px-8 py-4 border border-zinc-900/20 dark:border-zinc-100/20 rounded-full inline-flex items-center gap-3 group-hover:border-zinc-900/40 dark:group-hover:border-zinc-100/40 transition-colors duration-300">
                View All Stories
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* Services Section */}
      <section id="services" className="py-7 bg-[#f0ebe1] dark:bg-zinc-900 relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-5"></div>
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
    <motion.div className="text-center mb-24">
  <span className="block text-sm uppercase tracking-widest text-zinc-500 mb-4 font-mono">01 — What We Offer</span>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-5xl md:text-6xl font-playfair mb-8 relative inline-block"
  >
    <span className="absolute -left-6 top-0 text-zinc-200 dark:text-zinc-800 -z-10 font-sans text-8xl opacity-60">S</span>
    Our Services
  </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-600 dark:text-zinc-300 text-lg max-w-2xl mx-auto"
        >
          Crafting visual stories through expert photography services, tailored to capture your unique moments.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative"
          >
            <div className="mb-8 relative">
              <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <div className="absolute -inset-4 border border-zinc-200 dark:border-zinc-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              {service.description}
            </p>
            <Link 
              href="#contact" 
              className="inline-flex items-center text-sm group/link"
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current after:origin-left after:transition-transform after:duration-300">
                Learn More
              </span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-24"
      >
        <Link 
          href="#contact" 
          className="inline-block group relative overflow-hidden rounded-full"
        >
          <span className="absolute inset-0 bg-zinc-900 dark:bg-zinc-100 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></span>
          <span className="relative px-8 py-4 border border-zinc-900/20 dark:border-zinc-100/20 rounded-full inline-flex items-center gap-3 group-hover:border-zinc-900/40 dark:group-hover:border-zinc-100/40 transition-colors duration-300">
            Discuss Your Project
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </Link>
      </motion.div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#f0ebe1] dark:bg-zinc-800/50 relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-5"></div>
  <div className="container mx-auto px-4 relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto"
    >
      <div className="text-center mb-20">
  <motion.div className="inline-block mb-8">
    <span className="block text-sm uppercase tracking-widest text-zinc-500 mb-2">Let&apos;s Talk</span>
    <h2 className="text-4xl md:text-5xl font-playfair relative">
      <span className="relative z-10">Get In Touch</span>
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        className="absolute bottom-2 left-0 h-3 bg-zinc-200 dark:bg-zinc-700/50 -z-10"
        transition={{ duration: 0.8 }}
      ></motion.span>
    </h2>
  </motion.div> 
<p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
          Have a story to tell? Let&apos;s create something extraordinary together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-6">
            <div className="group">
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Email</p>
              <a href="mailto:hello@sandeepod.com" className="text-xl hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                hello@sandeepod.com
              </a>
            </div>
            <div className="group">
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Phone</p>
              <a href="tel:+919876543210" className="text-xl hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                +91 98765 43210
              </a>
            </div>
            <div className="group">
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Follow</p>
              <div className="flex gap-6 items-center">
                <Link href="#" className="text-2xl hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-2xl hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-zinc-200 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-300 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-zinc-200 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-300 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-zinc-200 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-300 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="group relative px-6 py-3 text-sm font-medium inline-flex items-center gap-2"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current after:origin-left after:transition-transform after:duration-300">
                  Send Message
                </span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Footer */}
      {/* Footer */}
{/* Footer */}
<footer className="relative pt-40 pb-20 bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-black dark:from-zinc-950 dark:via-zinc-950/95 dark:to-black text-white overflow-hidden backdrop-blur-sm">  <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-5 mix-blend-overlay"></div>
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center text-center mb-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 relative"
      >
        <span className="block text-sm uppercase tracking-widest text-zinc-500 mb-4">Ready to capture your story?</span>
        <h3 className="text-6xl md:text-8xl font-playfair mb-8">Let&apos;s Create Magic</h3>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Every moment is a canvas waiting to be painted with light. Let&apos;s collaborate and turn your vision into timeless memories.
        </p>
        <Link 
          href="#contact" 
          className="inline-block mt-12 group relative overflow-hidden rounded-full"
        >
          <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></span>
          <span className="relative px-8 py-4 border border-white/20 rounded-full inline-flex items-center gap-3 group-hover:border-white/40 transition-colors duration-300">
            Start a Project
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </Link>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full max-w-5xl mb-24 text-left"
      >
        <div>
          <h4 className="text-lg font-medium mb-6">Studio</h4>
          <p className="text-zinc-400 leading-relaxed">
            42 Creative Avenue<br />
            Mumbai, Maharashtra<br />
            India - 400001
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-6">Contact</h4>
          <div className="space-y-3">
            <p className="text-zinc-400">+91 98765 43210</p>
            <p className="text-zinc-400">hello@sandeepod.com</p>
            <div className="flex gap-6 pt-4">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-6">Hours</h4>
          <div className="space-y-3 text-zinc-400">
            <p>Mon - Fri: 10am - 6pm</p>
            <p>Sat: By appointment</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="border-t border-white/10 pt-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        <p className="text-zinc-500 text-sm flex items-center gap-2">
          <span className="font-playfair">sandeepod</span>
          <span className="block w-1 h-1 rounded-full bg-zinc-700"></span>
          <span>© {new Date().getFullYear()}</span>
        </p>
      </div>
    </motion.div>
  </div>
</footer>
    </main>
  )
}

