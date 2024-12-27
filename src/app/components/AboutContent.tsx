'use client'

import { Github, Linkedin, Mail, Terminal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <div className="min-h-screen pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
            <Image
              src="/api/placeholder/128/128"
              alt="José Guadalupe Coca Chávez"
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            José Guadalupe Coca Chávez
          </h1>
          <p className="text-xl text-muted-foreground">
            Desarrollador Full Stack
          </p>
        </div>

        {/* Bio Section */}
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            ¡Hola! Soy un desarrollador apasionado por crear experiencias web excepcionales. 
            Me especializo en el desarrollo full stack utilizando tecnologías modernas como 
            Next.js, TypeScript y Tailwind CSS.
          </p>
          
          <p className="text-muted-foreground">
            Mi journey en el desarrollo web comenzó con la curiosidad por entender cómo funcionan 
            las aplicaciones que usamos diariamente. Desde entonces, he estado constantemente 
            aprendiendo y mejorando mis habilidades para crear soluciones robustas y escalables.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            Tecnologías
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-secondary/50">
              <h3 className="font-medium text-foreground">Frontend</h3>
              <p className="text-sm text-muted-foreground">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50">
              <h3 className="font-medium text-foreground">Backend</h3>
              <p className="text-sm text-muted-foreground">
                Node.js, Express, PostgreSQL, MongoDB
              </p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50">
              <h3 className="font-medium text-foreground">Herramientas</h3>
              <p className="text-sm text-muted-foreground">
                Git, Docker, AWS, Vercel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}