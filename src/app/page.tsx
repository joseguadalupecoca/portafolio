"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

const technologies = [
  { name: 'React', icon: '/images/react.svg', proficiency: 95 },
  { name: 'Next.js', icon: '/images/nextjs-icon.svg', proficiency: 90 },
  { name: 'Node js', icon: '/images/node-js.svg', proficiency: 90 },
]

export default function Home() {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'React Developer', 'Node js Developer', 'Next.js Developer'],
    loop: 0,
  })

  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-[30vh] mb-12"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          José Guadalupe Coca
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary mb-4">
          {text}
          <Cursor cursorStyle="_" />
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-muted-foreground">
          Desarrollo soluciones web modernas y escalables utilizando las últimas tecnologías. 
          Especializado en React, Next.js, y Node js.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="text-lg">
            <Link href="/proyectos">Ver Proyectos</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg">
            <Link href="/blog">Ir al Blog</Link>
          </Button>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Tecnologías Destacadas</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {technologies.map((tech) => (
            <Card 
              key={tech.name}
              className="w-40 h-40 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <CardContent className="text-center">
                <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2" />
                <p className="font-semibold">{tech.name}</p>
                {hoveredTech === tech.name && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2"
                  >
                    <p className="text-sm">Proficiency: {tech.proficiency}%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${tech.proficiency}%` }}
                      ></div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Interesado en Colaborar?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto text-muted-foreground">
          Actualmente estoy disponible para proyectos freelance y colaboraciones. 
          Si tienes un proyecto interesante, no dudes en contactarme.
        </p>
        <Button asChild size="lg" className="text-lg">
          <Link href="/contacto">Contáctame</Link>
        </Button>
      </motion.section>
    </div>
  )
}