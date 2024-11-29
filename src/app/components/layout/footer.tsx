'use client'

import Link from "next/link"
import { Github, Mail, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          {/* Social Icons Container */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link
              href="mailto:tu@email.com"
              className="inline-flex items-center justify-center rounded-md w-9 h-9 transition-colors hover:text-indigo-400 dark:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
            </Link>
            <Link
              href="https://github.com/tu-usuario"
              className="inline-flex items-center justify-center rounded-md w-9 h-9 transition-colors hover:text-indigo-400 dark:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/tu-usuario"
              className="inline-flex items-center justify-center rounded-md w-9 h-9 transition-colors hover:text-indigo-400 dark:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com/tu-usuario"
              className="inline-flex items-center justify-center rounded-md w-9 h-9 transition-colors hover:text-indigo-400 dark:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://instagram.com/tu-usuario"
              className="inline-flex items-center justify-center rounded-md w-9 h-9 transition-colors hover:text-indigo-400 dark:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </Link>
          </div>

          {/* Text Container */}
          <div className="flex flex-col items-center space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 px-4 text-center">
              <span>Jose Guadalupe Coca Chávez</span>
              <span className="hidden sm:inline">•</span>
              <span>© 2024</span>
              <span className="hidden sm:inline">•</span>
              <span>Next.js Starter Blog</span>
            </div>
            <div>
              <Link 
                href="/" 
                className="hover:text-indigo-400 transition-colors"
              >
                Tailwind Next.js Theme
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}