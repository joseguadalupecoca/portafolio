'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, X, Moon, Sun } from "lucide-react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="flex h-8 w-8 items-center justify-center">
              <i className="fas fa-code text-2xl text-indigo-500 group-hover:text-indigo-400 transition-colors"></i>
            </div>
            <span className="text-lg font-medium text-gray-900 dark:text-white md:block">
              José Guadalupe Coca Chávez.dev
            </span>
          </Link>

          {/* Desktop Navigation */}
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

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md p-2.5 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              aria-label="Cambiar tema"
            >
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
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/blog"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/projects"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </Link>
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark")
                  setIsOpen(false)
                }}
                className="w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Cambiar tema
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}