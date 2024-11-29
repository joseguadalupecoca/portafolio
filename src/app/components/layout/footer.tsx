'use client'

import Link from "next/link"
import { Github, Mail, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-background/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Social Icons Container */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialLink href="mailto:tu@email.com" icon={Mail} label="Email" />
            <SocialLink href="https://github.com/tu-usuario" icon={Github} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/tu-usuario" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="https://twitter.com/tu-usuario" icon={Twitter} label="Twitter" />
            <SocialLink href="https://instagram.com/tu-usuario" icon={Instagram} label="Instagram" />
          </div>

          {/* Text Container */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span>Jose Guadalupe Coca Chávez</span>
              <span className="hidden sm:block text-primary/40">•</span>
              <span>© 2024</span>
              <span className="hidden sm:block text-primary/40">•</span>
              <span>Next.js Starter Blog</span>
            </div>
            <Link 
              href="/" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Tailwind Next.js Theme
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <Link
    href={href}
    className="group inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
    <span className="sr-only">{label}</span>
  </Link>
)