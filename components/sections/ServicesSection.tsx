"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Service {
  title: string
  description: string
  icon: React.ReactNode
}

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-[#f0ebe1] dark:bg-zinc-900 relative overflow-hidden">
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
        </div>
      </div>
    </section>
  )
}