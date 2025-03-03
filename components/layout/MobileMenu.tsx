"use client"

import { X } from "lucide-react"
import Link from "next/link"

interface MobileMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) {
  return (
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
  )
}