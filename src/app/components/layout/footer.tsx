'use client'

import Link from "next/link"
import { Github, Mail, Linkedin, Twitter, Instagram, FileText } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            © 2024 JoseGuadalupeCoca.dev • Blog de inicio de Next.js
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="mailto:tu@email.com"
            className="inline-flex items-center justify-center rounded-md w-9 h-9 hover:bg-accent hover:text-accent-foreground"
            target="_blank"
          >
            <Mail size={20} />
          </Link>
          <Link
            href="https://github.com/tu-usuario"
            className="inline-flex items-center justify-center rounded-md w-9 h-9 hover:bg-accent hover:text-accent-foreground"
            target="_blank"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://facebook.com/tu-usuario"
            className="inline-flex items-center justify-center rounded-md w-9 h-9 hover:bg-accent hover:text-accent-foreground"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </Link>
          <Link
            href="https://youtube.com/tu-usuario"
            className="inline-flex items-center justify-center rounded-md w-9 h-9 hover:bg-accent hover:text-accent-foreground"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
            </svg>
          </Link>
          <Link
            href="https://linkedin.com/in/tu-usuario"
            className="inline-flex items-center justify-center rounded-md w-9 h-9 hover:bg-accent hover:text-accent-foreground"
            target="_blank"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://twitter.com/tu-usuario"
            className="inline-flex items-center justify-center rounded-md w-9 h-9 hover:bg-accent hover:text-accent-foreground"
            target="_blank"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="https://instagram.com/tu-usuario"
            className="inline-flex items-center justify-center rounded-md w-9 h-9 hover:bg-accent hover:text-accent-foreground"
            target="_blank"
          >
            <Instagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}