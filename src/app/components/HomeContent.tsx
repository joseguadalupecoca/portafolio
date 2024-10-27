import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, LinkedinIcon, FileCode2, BookOpen, ExternalLink } from 'lucide-react'

const HomeContent: FC = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              José Guadalupe Coca
              <span className="block text-xl md:text-2xl font-normal text-blue-600 dark:text-blue-400 mt-2">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Desarrollo soluciones web modernas y escalables utilizando las últimas tecnologías.
              Especializado en React, Next.js, y arquitecturas cloud.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/proyectos"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <FileCode2 className="w-5 h-5 mr-2" />
                Ver Proyectos
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Ir al Blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Tecnologías
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="text-center">
                <div className="h-12 w-12 mx-auto mb-4">
                  <skill.icon className="w-full h-full text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.title}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href={project.demoLink}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
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
          <div className="text-center mt-8">
            <Link
              href="/proyectos"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            ¿Interesado en colaborar?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Siempre estoy abierto a discutir nuevos proyectos y oportunidades de desarrollo.
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="https://github.com/tuusuario"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/tuusuario"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const skills = [
  {
    name: 'Frontend',
    description: 'React, Next.js, TypeScript',
    icon: FileCode2
  },
  {
    name: 'Backend',
    description: 'Node.js, Express, APIs',
    icon: FileCode2
  },
  {
    name: 'Base de Datos',
    description: 'PostgreSQL, MongoDB',
    icon: FileCode2
  },
  {
    name: 'DevOps',
    description: 'Docker, CI/CD, Cloud',
    icon: FileCode2
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