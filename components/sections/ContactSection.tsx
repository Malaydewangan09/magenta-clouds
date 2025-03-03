"use client"

import { motion } from "framer-motion"
import { ArrowRight, Instagram, Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-28 bg-[#f0ebe1] dark:bg-zinc-800/50 relative overflow-hidden">
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
                  <a href="mailto:hello@magentaclouds.com" className="text-xl hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                    hello@magentaclouds.com
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
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pt-8 border-t border-zinc-200 dark:border-zinc-700"
              >
                <h3 className="text-xl font-medium mb-4">Studio Location</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  123 Creative Avenue<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
                <p className="mt-4 text-sm text-zinc-500">
                  By appointment only
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-zinc-200 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-zinc-300 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative px-6 py-3 text-sm font-medium inline-flex items-center gap-2 disabled:opacity-70"
                  >
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current after:origin-left after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  {submitSuccess && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-green-600 dark:text-green-400"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}