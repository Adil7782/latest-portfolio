'use client'

import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'
import { InteractiveGridPattern } from './ui/interactive-grid-pattern'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: 'Task Tracker',
    description:
      'A task management app with user authentication, project organization, and real-time collaboration.',
    image: '/admin Dashboard.png',
    technologies: ['NextJs', 'JWT', 'Prisma', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://task-tracker-r58v.vercel.app/',
  },
  {
    title: 'ELIoT Site',
    description: 'A Product showcase of Emmanuels Lanka ELIoT project.',
    image: '/eliot.png',
    technologies: ['React Native', 'Firebase', 'Spoonacular API'],
    github: 'https://github.com',
    demo: 'https://eliot-site.vercel.app/',
  },
  {
    title: 'Emmanuels Lanka Site',
    description:
      'A website for Emmanuels Lanka, a leading company of IT and IoT Solutions.',
    image: '/eml.png',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://emmanuels-ste-new.vercel.app/',
  },
  {
    title: 'Gamlath Eco Holdings',
    description:
      'A full-featured website for a company that offers eco-friendly products and services.',
    image: '/gamlath eco.png',
    technologies: ['Next.js', 'TypeScript', 'Resend mail', 'Tailwind CSS'],
    demo: 'https://www.gamlathecoholding.lk/',
  },
  {
    title: 'Expense Tracker',
    description: 'A learning project made to understand the concepts of Prisma.',
    image: '/Expense Tracker.png',
    technologies: ['React', 'Node.js', 'Prisma', 'pgSql'],
    github: 'https://github.com',
    demo: 'https://expense-tracker-mu-rust.vercel.app/',
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* --- Full-page background grid pattern --- */}
      <div className="absolute inset-0 -z-10">
        <InteractiveGridPattern
          className={cn(
            'w-full h-full opacity-60 skew-y-6'
          )}
        />
      </div>

      {/* --- Foreground content --- */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="flex flex-wrap -m-1">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 lg:w-1/3 p-1"
            >
              <CardContainer className="inter-var w-full">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col justify-between">
                  {/* Top Content */}
                  <div>
                    <CardItem
                      translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                      className="w-full relative h-48 rounded-xl overflow-hidden"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover/card:scale-110 transition-transform duration-300"
                      />
                    </CardItem>

                    <CardItem
                      translateZ="60"
                      className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
                    >
                      {project.title}
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="40"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {project.description}
                    </CardItem>

                    <CardItem
                      translateZ="30"
                      className="flex flex-wrap gap-2 mt-4"
                    >
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </CardItem>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end items-center mt-4 gap-2">
                    {project.github && (
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </Button>
                      </CardItem>
                    )}

                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
