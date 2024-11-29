'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, X, Moon, Sun, Code } from "lucide-react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full bg-background/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg font-medium text-foreground">
              José Guadalupe Coca Chávez.dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre mí
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-lg p-2 hover:bg-secondary/80 transition-colors"
              aria-label="Cambiar tema"
            >
              {mounted && (
                theme === 'dark' ? (
                  <Sun 
                    className="h-5 w-5 text-primary" 
                    aria-hidden="true"
                  />
                ) : (
                  <Moon 
                    className="h-5 w-5 text-primary" 
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
              className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-secondary/80"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-primary" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 text-primary" aria-hidden="true" />
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
                className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-secondary/80 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/projects"
                className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-secondary/80 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/about"
                className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-secondary/80 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </Link>
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark")
                  setIsOpen(false)
                }}
                className="w-full text-left rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-secondary/80 hover:text-primary"
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