'use client'

import { useState, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight, Lock } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: 'Secure Proxy Tunnel',
    image: '/3x.png',
    description:
      'Educational project: deployed an Xray proxy tunnel on a Linux VPS via the 3X-UI panel, with custom ports, client routing and SSL.',
    technologies: ['Linux VPS', 'Xray', '3X-UI', 'SSL/TLS'],
  },
  {
    title: 'POS System',
    description:
      'A Point of Sale System for a retail store with user authentication and real-time collaboration.',
    image: '/pos.png',
    technologies: ['NextJs', 'JWT', 'Prisma', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://retail-pos-xi.vercel.app/pos/',
  },
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
]

// Floating preview size on desktop (px)
const PREVIEW_W = 360
const PREVIEW_H = 225

const pad = (n: number) => String(n).padStart(2, '0')
const hostOf = (url?: string) => (url ? new URL(url).hostname.replace(/^www\./, '') : null)

export function ProjectsSection() {
  const [active, setActive] = useState<number | null>(null)

  // Motion values update the preview position without re-rendering React
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.5 })

  const handleMove = (e: MouseEvent<HTMLUListElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - PREVIEW_W / 2)
    y.set(e.clientY - rect.top - PREVIEW_H / 2)
  }

  return (
    <section id="projects" className="relative isolate py-24 overflow-hidden">
      {/* Backdrop: editorial column guides + grain */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 container mx-auto px-4">
        <div className="h-full w-full bg-column-guides mask-fade-y border-x border-foreground/[0.06]" />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grain" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-foreground/80 pb-6"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Index — side work &amp; client builds
            </p>
            <h2 className="font-black uppercase tracking-tighter leading-[0.85] text-5xl sm:text-6xl lg:text-8xl">
              Featured
              <br />
              <span className="text-gradient">Projects</span>
              <sup className="ml-2 align-top font-mono text-sm sm:text-base font-medium tracking-normal text-muted-foreground">
                ({pad(projects.length)})
              </sup>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground md:text-right">
            A showcase of my recent work and side projects.
            <span className="hidden lg:inline"> Hover a row to preview, click to open it live.</span>
          </p>
        </motion.div>

        {/* Index list */}
        <ul
          className="relative"
          onMouseMove={handleMove}
          onMouseLeave={() => setActive(null)}
        >
          {/* Cursor-following preview (desktop only) */}
          <motion.div
            aria-hidden
            style={{ x: springX, y: springY, width: PREVIEW_W, height: PREVIEW_H }}
            animate={{ opacity: active === null ? 0 : 1, scale: active === null ? 0.85 : 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
          >
            {/* Filmstrip: every screenshot stacked, slid into view by index */}
            <div
              className="h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{ transform: `translateY(-${(active ?? 0) * 100}%)` }}
            >
              {projects.map((p) => (
                <div key={p.title} className="relative h-full w-full">
                  <Image src={p.image} alt="" fill sizes={`${PREVIEW_W}px`} className="object-cover object-top" />
                </div>
              ))}
            </div>
          </motion.div>

          {projects.map((project, index) => {
            const host = hostOf(project.demo)
            const Row = project.demo ? 'a' : 'div'
            return (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
                onMouseEnter={() => setActive(index)}
                className="border-b border-border"
              >
                <Row
                  {...(project.demo
                    ? { href: project.demo, target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group relative grid grid-cols-12 items-center gap-x-4 gap-y-3 py-6 lg:py-8"
                >
                  {/* Hover wash */}
                  <span
                    aria-hidden
                    className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-foreground/[0.03] transition-transform duration-500 ease-out group-hover:scale-y-100"
                  />

                  {/* Mobile screenshot */}
                  <div className="col-span-12 lg:hidden relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-card">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 0px"
                      className="object-cover object-top"
                    />
                  </div>

                  <span className="col-span-2 lg:col-span-1 font-mono text-xs text-muted-foreground self-start lg:self-center pt-2 lg:pt-0">
                    {pad(index + 1)}
                  </span>

                  <h3 className="col-span-8 lg:col-span-5 text-2xl sm:text-3xl xl:text-5xl font-bold tracking-tight leading-tight transition-transform duration-500 ease-out lg:group-hover:translate-x-3">
                    {project.title}
                  </h3>

                  <p className="col-span-12 lg:col-span-4 order-last lg:order-none text-sm text-muted-foreground lg:line-clamp-2 lg:pr-6">
                    {project.description}
                  </p>

                  <div className="col-span-2 flex items-center justify-end gap-4 self-start lg:self-center">
                    <span className="hidden xl:block font-mono text-[11px] text-muted-foreground truncate max-w-[140px]">
                      {host ?? 'private build'}
                    </span>
                    <span
                      className={cn(
                        'flex h-10 w-10 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-300',
                        project.demo && 'group-hover:border-foreground group-hover:bg-foreground group-hover:text-background'
                      )}
                    >
                      {project.demo ? (
                        <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-300 group-hover:rotate-45" />
                      ) : (
                        <Lock className="h-4 w-4 text-muted-foreground" />
                      )}
                    </span>
                  </div>
                </Row>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
