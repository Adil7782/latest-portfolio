'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from './ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description:
      'Leading development of cloud-based SaaS platform serving 50K+ users. Architected microservices infrastructure and mentored junior developers.',
    achievements: [
      'Reduced page load times by 60% through optimization',
      'Implemented CI/CD pipeline reducing deployment time by 80%',
      'Led team of 5 developers on major feature releases',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    period: '2020 - 2022',
    description:
      'Developed customer-facing web applications using React and Node.js. Collaborated with design team to implement responsive UI components.',
    achievements: [
      'Built RESTful APIs handling 1M+ daily requests',
      'Improved test coverage from 40% to 90%',
      'Integrated third-party payment systems',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'StartupHub',
    period: '2019 - 2020',
    description:
      'Created interactive user interfaces for startup products. Worked closely with product managers to translate requirements into features.',
    achievements: [
      'Developed reusable component library used across 5 projects',
      'Implemented responsive designs for mobile-first approach',
      'Contributed to open-source UI framework',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'WebDev Agency',
    period: '2018 - 2019',
    description:
      'Started career building WordPress sites and custom web applications. Learned modern JavaScript frameworks and best practices.',
    achievements: [
      'Delivered 20+ client websites on time and within budget',
      'Achieved 95% client satisfaction rating',
      'Learned React, Vue.js, and modern development tools',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div
                  className={`absolute top-6 ${
                    index % 2 === 0 ? 'md:right-0 left-0' : 'md:left-0 left-0'
                  } w-4 h-4 rounded-full bg-primary border-4 border-background z-10 ${
                    index % 2 === 0 ? 'md:-mr-2' : 'md:-ml-2'
                  } -ml-2`}
                />

                <Card className="ml-8 md:ml-0 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-2">
                      <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
