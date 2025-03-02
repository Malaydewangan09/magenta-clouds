"use client"

import { motion } from "framer-motion"
import { Menu, Moon, Sun } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
  setIsMenuOpen: (value: boolean) => void
  headerOpacity: any
}

export default function Header({ isDarkMode, setIsDarkMode, setIsMenuOpen, headerOpacity }: HeaderProps) {
  return (
    <motion.header 
      style={{ opacity: headerOpacity }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-playfair font-bold relative group">
            Sandeepod
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-sm hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors">
              Home
            </Link>
            <Link href="#portfolio" className="text-sm hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors">
              Portfolio
            </Link>
            <Link href="#about" className="text-sm hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors">
              Services
            </Link>
            <Link href="#contact" className="text-sm hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}