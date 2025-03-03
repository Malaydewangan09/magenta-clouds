"use client"

import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  headerOpacity: any
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function Header({ headerOpacity, setIsMenuOpen }: HeaderProps) {
  return (
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
  )
}