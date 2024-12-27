"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    technologies: ["Next.js", "React", "Stripe", "MongoDB"],
    demoLink: "https://demo-ecommerce.example.com",
    repoLink: "https://github.com/username/ecommerce-platform",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoLink: "https://demo-taskmanager.example.com",
    repoLink: "https://github.com/username/task-management-app",
  },
  {
    id: 3,
    title: "Weather Forecast Dashboard",
    description: "An interactive weather forecast dashboard using OpenWeatherMap API.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    technologies: ["Vue.js", "Vuex", "Chart.js", "OpenWeatherMap API"],
    demoLink: "https://demo-weather.example.com",
    repoLink: "https://github.com/username/weather-dashboard",
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const technologies = ["All", ...new Set(projects.flatMap(p => p.technologies))]

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter))

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
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8">Proyectos</h1>
          <div className="mb-8 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Button
                key={tech}
                variant={filter === tech ? "default" : "outline"}
                onClick={() => setFilter(tech)}
                className="transition-colors duration-300"
              >
                {tech}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                  <CardTitle className="hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-secondary text-secondary-foreground rounded-full px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                    <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                    <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      Repositorio
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

