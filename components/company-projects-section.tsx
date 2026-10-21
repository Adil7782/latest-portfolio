'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BellRing,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Database,
  Factory,
  ImageIcon,
  Layers,
  LayoutDashboard,
  MapPin,
  QrCode,
  Radio,
  Scissors,
  Server,
  Shirt,
  Smartphone,
  Sun,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/*
 * Screenshots live in /public/projects/company/<slug>/.
 * Drop an image into the matching folder and add its path to `images`,
 * e.g. '/projects/company/vantage-scada/dashboard.png'.
 * While `images` is empty the card shows the architecture visual only.
 */

type FlowNode = { icon: LucideIcon; label: string };

type Accent = {
  text: string;
  bg: string;
  border: string;
  glow: string;
  dot: string;
  gradient: string;
};

type CompanyProject = {
  slug: string;
  title: string;
  type: string;
  stakeholders: string;
  description: string;
  contributions: string[];
  tags: string[];
  sources?: string[];
  flow: FlowNode[];
  images: string[];
  accent: Accent;
};

const companyProjects: CompanyProject[] = [
  {
    slug: 'vantage-scada',
    title: 'Vantage AI SCADA',
    type: 'Industrial IoT · Real-Time Solar Plant Monitoring',
    stakeholders: 'Panasian Power PLC & Emmanuels Lanka',
    description:
      'A real-time data pipeline and centralized SCADA dashboard that tracks and manages solar power plant infrastructure across multiple geographic sites.',
    contributions: [
      'Designed the alerting structure that routes real-time SMS and email notifications to the right personnel based on plant conditions.',
      'Developed, deployed and tested backend API integrations for live data ingestion.',
      'Contributed to interface design for clear visibility into plant metrics and operational status.',
    ],
    tags: ['Real-Time Pipeline', 'REST APIs', 'SMS & Email Alerts', 'Industrial IoT'],
    sources: ['Anuradhapura', 'Maho', 'Kurunegala', '+ more sites'],
    flow: [
      { icon: Sun, label: 'Solar Plants' },
      { icon: Server, label: 'Ingestion APIs' },
      { icon: LayoutDashboard, label: 'SCADA Dashboard' },
      { icon: BellRing, label: 'SMS / Email Alerts' },
    ],
    images: [],
    accent: {
      text: 'text-amber-500',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      glow: 'bg-amber-500/20',
      dot: 'bg-amber-400',
      gradient: 'from-amber-500 to-orange-500',
    },
  },
  {
    slug: 'eliot-smartflow',
    title: 'ELIoT SmartFlow',
    type: 'Garment Manufacturing · Production Optimization',
    stakeholders: 'Emmanuels Lanka',
    description:
      'Specialized garment cutting software that bridges physical factory operations with digital enterprise management, resolving production bottlenecks on the cutting floor.',
    contributions: [
      'Optimizes fabric layering to significantly reduce fabric waste on the cutting floor.',
      'Automatically generates QR-coded bundles for cut pieces, giving physical materials a digital footprint.',
      'Improves end-to-end production traceability and operational visibility for factory management.',
    ],
    tags: ['Fabric Optimization', 'QR Bundling', 'Traceability', 'Manufacturing'],
    flow: [
      { icon: Layers, label: 'Fabric Layering' },
      { icon: Scissors, label: 'Cutting' },
      { icon: QrCode, label: 'QR Bundles' },
      { icon: Factory, label: 'Factory Insights' },
    ],
    images: [],
    accent: {
      text: 'text-violet-500',
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/30',
      glow: 'bg-violet-500/20',
      dot: 'bg-violet-400',
      gradient: 'from-violet-500 to-fuchsia-500',
    },
  },
  {
    slug: 'eliot-rfid',
    title: 'ELIoT Handheld RFID',
    type: 'Enterprise Mobile App · Hardware Integration',
    stakeholders: 'Emmanuels Lanka · BIT Final-Year Project (UoM)',
    description:
      'A React Native app paired with N72SH PDA hardware that tracks garments through bulk UHF RFID scanning, replacing manual, error-prone counting on the factory floor.',
    contributions: [
      'Built the mobile app in React Native with a Kotlin native module that drives the N72SH RFID scanner.',
      'Implemented bulk RFID tag reading for fast, accurate work-in-progress (WIP) tracking.',
      'Integrated the app with the backend and staging APIs of the ELIoT DPM ecosystem.',
    ],
    tags: ['React Native', 'Kotlin', 'UHF RFID', 'N72SH PDA'],
    flow: [
      { icon: Shirt, label: 'Tagged Garments' },
      { icon: Radio, label: 'UHF Bulk Scan' },
      { icon: Smartphone, label: 'RN App + Kotlin' },
      { icon: Database, label: 'ELIoT DPM APIs' },
    ],
    images: [],
    accent: {
      text: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      glow: 'bg-emerald-500/20',
      dot: 'bg-emerald-400',
      gradient: 'from-emerald-500 to-teal-500',
    },
  },
];

function ArchitectureVisual({ project }: { project: CompanyProject }) {
  const { accent } = project;
  return (
    <div className="relative h-full flex flex-col justify-center gap-6 p-6 sm:p-8">
      {project.sources && (
        <div className="flex flex-wrap justify-center gap-2">
          {project.sources.map((site) => (
            <span
              key={site}
              className={cn(
                'inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur',
                accent.border,
                accent.bg
              )}
            >
              <MapPin className={cn('h-3 w-3', accent.text)} />
              {site}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        {project.flow.map((node, i) => {
          const Icon = node.icon;
          return (
            <div key={node.label} className="contents">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="flex sm:flex-col items-center gap-3 sm:gap-2 sm:w-24 shrink-0"
              >
                <div
                  className={cn(
                    'relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border bg-background/80 backdrop-blur shadow-sm',
                    accent.border
                  )}
                >
                  <span className={cn('absolute inset-0 rounded-2xl blur-md -z-10', accent.glow)} />
                  <Icon className={cn('h-6 w-6', accent.text)} />
                </div>
                <span className="text-sm sm:text-xs font-medium sm:text-center leading-tight">
                  {node.label}
                </span>
              </motion.div>
              {i < project.flow.length - 1 && (
                <div className="flex sm:flex-1 justify-start pl-7 sm:pl-0 sm:pb-6">
                  <FlowLine accent={accent} delay={i * 0.4} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <Workflow className="h-3.5 w-3.5" />
        System flow
      </div>
    </div>
  );
}

function FlowLine({ accent, delay }: { accent: Accent; delay: number }) {
  return (
    <>
      {/* vertical on mobile */}
      <div className="relative h-6 w-[2px] rounded-full bg-border overflow-hidden sm:hidden">
        <motion.span
          className={cn('absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full', accent.dot)}
          animate={{ top: ['-10%', '100%'] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay }}
        />
      </div>
      {/* horizontal on larger screens */}
      <div className="relative hidden sm:block h-[2px] w-full rounded-full bg-border overflow-hidden">
        <motion.span
          className={cn('absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full', accent.dot)}
          animate={{ left: ['-10%', '100%'] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay }}
        />
      </div>
    </>
  );
}

function Gallery({ project }: { project: CompanyProject }) {
  const [index, setIndex] = useState(0);
  const total = project.images.length;
  const go = (step: number) => setIndex((i) => (i + step + total) % total);

  return (
    <div className="relative h-full min-h-[260px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image
            src={project.images[index]}
            alt={`${project.title} screenshot ${index + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      {total > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur hover:bg-background"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur hover:bg-background"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {project.images.map((src, i) => (
              <span
                key={src}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  i === index ? cn('w-5', project.accent.dot) : 'w-1.5 bg-white/60'
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function VisualPanel({ project }: { project: CompanyProject }) {
  const hasImages = project.images.length > 0;
  const [view, setView] = useState<'flow' | 'gallery'>('flow');

  return (
    <div
      className={cn(
        'relative h-full min-h-[280px] overflow-hidden rounded-2xl border bg-secondary/40',
        project.accent.border
      )}
    >
      {/* dotted grid + glow backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,hsl(var(--muted-foreground)/0.18)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className={cn('pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl', project.accent.glow)} />

      {hasImages && (
        <div className="absolute right-3 top-3 z-10 flex rounded-full border bg-background/80 p-1 text-xs backdrop-blur">
          {(['flow', 'gallery'] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={cn(
                'flex items-center gap-1 rounded-full px-3 py-1 transition-colors',
                view === v ? cn('text-white bg-gradient-to-r', project.accent.gradient) : 'text-muted-foreground'
              )}
            >
              {v === 'flow' ? <Workflow className="h-3 w-3" /> : <ImageIcon className="h-3 w-3" />}
              {v === 'flow' ? 'Flow' : 'Screens'}
            </button>
          ))}
        </div>
      )}

      <div className="relative h-full">
        {hasImages && view === 'gallery' ? <Gallery project={project} /> : <ArchitectureVisual project={project} />}
      </div>
    </div>
  );
}

export function CompanyProjectsSection() {
  return (
    <section id="company-projects" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-medium text-muted-foreground mb-4">
            <Building2 className="h-3.5 w-3.5" />
            Built at Emmanuels Lanka
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Company{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Contributed Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production systems for industrial IoT and garment manufacturing that I helped design, build and ship
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {companyProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-8 lg:grid-cols-2 lg:items-center"
            >
              <div className={cn(index % 2 === 1 && 'lg:order-2')}>
                <VisualPanel project={project} />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white bg-gradient-to-br',
                      project.accent.gradient
                    )}
                  >
                    0{index + 1}
                  </span>
                  <span className={cn('text-xs font-semibold uppercase tracking-wider', project.accent.text)}>
                    {project.type}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-1">{project.title}</h3>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                  <Cpu className="h-3.5 w-3.5" />
                  {project.stakeholders}
                </p>
                <p className="text-muted-foreground mb-5">{project.description}</p>

                <ul className="space-y-3 mb-6">
                  {project.contributions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className={cn('mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full', project.accent.bg)}>
                        <Check className={cn('h-3 w-3', project.accent.text)} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn('rounded-full border px-3 py-1 text-xs font-medium', project.accent.border, project.accent.bg)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
