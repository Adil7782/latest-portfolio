'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Wrench,
} from 'lucide-react';
import { Ripple } from './ui/ripple';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 80 },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Express', level: 90 },
      { name: 'FastAPI', level: 80 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    icon: Database,
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'Supabase', level: 85 },
      { name: 'Prisma', level: 80 },
    ],
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    skills: [
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 85 },
      { name: 'Vercel', level: 90 },
      { name: 'Linux', level: 80 },
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    skills: [
      { name: 'React Native', level: 85 },
      { name: 'Expo', level: 80 },
      { name: 'PWA', level: 85 },
      { name: 'Responsive Design', level: 95 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 80 },
      { name: 'Postman', level: 90 },
      { name: 'Jest', level: 85 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
       <div className="bg-background relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
       <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with on a daily basis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <Ripple numCircles={8} />
    </div>
     
    </section>
  );
}
