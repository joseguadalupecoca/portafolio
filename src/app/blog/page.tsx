"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Introducción a React Hooks",
    excerpt: "Aprende los conceptos básicos de React Hooks y cómo pueden mejorar tu código.",
    date: "2023-05-15",
    readingTime: "5 min",
    tags: ["React", "JavaScript"],
  },
  {
    id: 2,
    title: "Optimización de rendimiento en Next.js",
    excerpt: "Descubre técnicas avanzadas para mejorar el rendimiento de tus aplicaciones Next.js.",
    date: "2023-06-02",
    readingTime: "8 min",
    tags: ["Next.js", "Performance"],
  },
  {
    id: 3,
    title: "Arquitecturas serverless con AWS",
    excerpt: "Explora cómo construir aplicaciones escalables utilizando servicios serverless de AWS.",
    date: "2023-06-20",
    readingTime: "10 min",
    tags: ["AWS", "Serverless"],
  },
]

export default function BlogPage() {
  const [filter, setFilter] = useState("All")
  
  // Extraer todos los tags únicos de los posts y añadir "All" al inicio
  const tags = ["All", ...new Set(blogPosts.flatMap(post => post.tags))]
  
  // Filtrar los posts según el tag seleccionado
  const filteredPosts = filter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(filter))

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
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8">Blog</h1>
          <div className="mb-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Button
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                onClick={() => setFilter(tag)}
                className="transition-colors duration-300"
              >
                {tag}
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
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="hover:text-primary transition-colors duration-300">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                    <span>{post.readingTime} lectura</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs bg-secondary text-secondary-foreground rounded-full px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

