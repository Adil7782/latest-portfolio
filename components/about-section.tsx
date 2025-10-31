'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code2, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Marquee3D,  } from './marqueeSection';

const highlights = [
  {
    icon: Code2,
    title: '1+ Year Experience',
    description: 'Building web applications with modern frameworks',
  },
  {
    icon: Briefcase,
    title: '10+ Projects',
    description: 'Delivered for clients',
  },
  {
    icon: GraduationCap,
    title: 'HNDIT',
    description: 'Higher National Diploma in Information Technology',
  },

];

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'PostgreSQL',
  'SQL',
  'Prisma',
  'AWS',

  'Git',
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating elegant solutions to complex problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a full-stack developer with a passion for building beautiful and functional web
                applications. My journey in software development started over 3 years ago, and I've
                been hooked ever since.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, particularly React and Next.js, and I
                love exploring new technologies to stay at the cutting edge of web development.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, Creating content or 
                trying something new.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Core Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="text-base py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="">
        <Marquee3D/>
      </div>
    </section>
  );
}
