'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

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
    description:
      'A Product showcase of Emmanuels lanka ELIoT project.',
    image: '/eliot.png',
    technologies: ['React Native', 'Firebase', 'Spoonacular API'],
    github: 'https://github.com',
    demo: 'https://eliot-site.vercel.app/',
  },
  {
    title: 'Emmanuels Lanka Site',
    description:
      'A website for Emmanuels Lanka, a leading company of IT and IoT Solutions',
    image: '/eml.png',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://emmanuels-ste-new.vercel.app/',
  },
  {
    title: 'Gamlath Eco Holdings',
    description:
      'A full-featured Web site for a company that offers eco-friendly products and services.',
    image: '/gamlath eco.png',
    technologies: ['Next.js', 'TypeScript', 'Resend mail', 'Tailwind CSS'],
    // github: 'https://github.com',
    demo: 'https://www.gamlathecoholding.lk/',
  },
  {
    title: 'Expense Tracker',
    description:
      'A learning project made to understand the conspets of prisma.',
    image: '/Expense Tracker.png',
    technologies: ['React', 'Node.js', 'Prisma', 'pgSql'],
    github: 'https://github.com',
    demo: 'https://expense-tracker-mu-rust.vercel.app/',
  },
 
  
  
  
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  {/* <Button variant="outline" size="sm" asChild className="flex-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button> */}
                  <Button size="sm" asChild className="flex-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
