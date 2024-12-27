"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutMePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4"
    >
      <div className="pt-24 md:pt-32 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8">Sobre mí</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="/placeholder.svg?height=300&width=300" 
              alt="José Guadalupe Coca" 
              className="w-full rounded-lg shadow-lg mb-6"
            />
            <div className="flex flex-wrap gap-3 justify-center">
              <Button 
                asChild 
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Link href="https://github.com/joseguadalupecoca" target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Link href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Link href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
                  Twitter
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Biografía</h2>
              <p className="text-muted-foreground mb-4">
                Soy un desarrollador Full Stack con más de 7 años de experiencia en la creación de aplicaciones web modernas y escalables. 
                Mi pasión por la tecnología y la resolución de problemas me ha llevado a especializarme en React, Next.js y arquitecturas cloud.
              </p>
              <p className="text-muted-foreground mb-4">
                A lo largo de mi carrera, he trabajado en diversos proyectos, desde startups hasta grandes empresas, lo que me ha permitido 
                desarrollar una comprensión profunda de las mejores prácticas en desarrollo de software y metodologías ágiles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Frontend</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Redux</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Backend</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>GraphQL</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Experiencia</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Senior Full Stack Developer - TechCorp</h3>
                  <p className="text-muted-foreground mb-2">2020 - Presente</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Lideré el desarrollo de una plataforma de e-learning utilizando Next.js y GraphQL.</li>
                    <li>Implementé una arquitectura serverless utilizando AWS Lambda y DynamoDB.</li>
                    <li>Mejoré el rendimiento de la aplicación, reduciendo el tiempo de carga en un 40%.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Full Stack Developer - StartupX</h3>
                  <p className="text-muted-foreground mb-2">2018 - 2020</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Desarrollé una aplicación de gestión de proyectos utilizando React y Node.js.</li>
                    <li>Implementé autenticación y autorización utilizando JWT y OAuth2.</li>
                    <li>Colaboré en la definición de la arquitectura de microservicios.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Educación</h2>
              <div>
                <h3 className="text-lg font-medium">Universidad Tecnológica</h3>
                <p className="text-muted-foreground">Ingeniería en Sistemas Computacionales, 2014 - 2018</p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

