'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      {/* Contenedor exterior con padding sustancial */}
      <div className="max-w-7xl mx-auto px-24 sm:px-32 md:px-40 lg:px-48">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="flex h-8 w-8 items-center justify-center">
              <i className="fas fa-code text-2xl text-indigo-500 group-hover:text-indigo-400 transition-colors"></i>
            </div>
            <span className="text-lg font-medium text-gray-900 dark:text-white">
              Jose Guadalupe Coca Chávez.dev
            </span>
          </Link>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/blog"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-400 dark:text-gray-300 dark:hover:text-indigo-400"
              >
                Blog
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-400 dark:text-gray-300 dark:hover:text-indigo-400"
              >
                Proyectos
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-400 dark:text-gray-300 dark:hover:text-indigo-400"
              >
                Sobre mí
              </Link>
            </nav>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md p-2.5 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              aria-label="Cambiar tema"
            >
              <div className="relative h-5 w-5">
                {mounted && (
                  theme === 'dark' ? (
                    <Sun 
                      className="h-5 w-5 text-gray-300 hover:text-indigo-400 transition-colors" 
                      aria-hidden="true"
                    />
                  ) : (
                    <Moon 
                      className="h-5 w-5 text-gray-700 hover:text-indigo-400 transition-colors" 
                      aria-hidden="true"
                    />
                  )
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}