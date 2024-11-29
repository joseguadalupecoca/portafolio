'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, FileCode2, BookOpen, Database, Cloud, Terminal, Code, ExternalLink, Mail } from 'lucide-react'

const HomeContent: FC = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/90 to-background" />
        
        <div className="container relative z-10 mx-auto px-4 py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold tracking-tight text-foreground">
              José Guadalupe Coca
              <span className="block text-2xl font-normal text-primary/90 mt-4">
                Full Stack Developer
              </span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Desarrollo soluciones web modernas y escalables utilizando las últimas tecnologías.
              Especializado en React, Next.js, y arquitecturas cloud.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/proyectos"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all"
              >
                <FileCode2 className="w-5 h-5 mr-2" />
                Ver Proyectos
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:opacity-90 transition-all"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Ir al Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Glass Effect */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            Tecnologías
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="group relative overflow-hidden rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/50 p-8 transition-all hover:border-primary/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <skill.icon className="w-12 h-12 mb-6 text-primary/80" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{skill.name}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Modern Cards */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredProjects.map((project) => (
              <div 
                key={project.title}
                className="group relative rounded-2xl overflow-hidden bg-card transition-all hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      {project.description}
                    </p>
                    <Link
                      href={project.demoLink}
                      className="inline-flex items-center text-primary hover:text-primary/90 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Ver Proyecto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Modern Style */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            ¿Interesado en colaborar?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Siempre estoy abierto a discutir nuevos proyectos y oportunidades de desarrollo.
          </p>
          <div className="flex justify-center gap-6">
            <SocialLink href="mailto:tu@email.com" icon={Mail} label="Email" />
            <SocialLink href="https://github.com/tuusuario" icon={Github} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/tuusuario" icon={Linkedin} label="LinkedIn" />
          </div>
        </div>
      </section>
    </main>
  )
}

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <Link
    href={href}
    className="group inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/50 hover:bg-primary/10 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
    <span className="sr-only">{label}</span>
  </Link>
)

const skills = [
  {
    name: 'Frontend',
    description: 'React, Next.js, TypeScript',
    icon: Code
  },
  {
    name: 'Backend',
    description: 'Node.js, Express, APIs',
    icon: Terminal
  },
  {
    name: 'Base de Datos',
    description: 'PostgreSQL, MongoDB',
    icon: Database
  },
  {
    name: 'DevOps',
    description: 'Docker, CI/CD, Cloud',
    icon: Cloud
  }
]

const featuredProjects = [
  {
    title: 'Sistema de Gestión Moderna',
    description: 'Aplicación web full-stack desarrollada con Next.js, TypeScript y Tailwind CSS.',
    imageUrl: '/api/placeholder/600/400',
    demoLink: '#'
  },
  {
    title: 'App de Análisis de Datos',
    description: 'Dashboard interactivo para visualización de datos usando React y D3.js.',
    imageUrl: '/api/placeholder/600/400',
    demoLink: '#'
  }
]

export default HomeContent