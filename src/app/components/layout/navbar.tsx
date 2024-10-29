'use client'

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2"
        >
          <div className="flex h-6 w-6 items-center justify-center">
            <span className="text-2xl text-cyan-500">⟁</span>
          </div>
          <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Blog de viento de cola
          </span>
        </Link>

        {/* Navigation Menu */}
        <nav className="flex items-center space-x-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            Blog
          </Link>
          <Link
            href="/etiquetas"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            Etiquetas
          </Link>
          <Link
            href="/proyectos"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            Proyectos
          </Link>
          <Link
            href="/acerca-de"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            Acerca de
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
        </nav>
      </div>
    </header>
  )
}