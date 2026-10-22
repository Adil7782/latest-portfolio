'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
import { Safari } from '@/components/ui/safari';
import { Iphone } from '@/components/ui/iphone';
import { cn } from '@/lib/utils';
import { HyperText } from './ui/hyper-text';

type FlowNode = { icon: LucideIcon; label: string };

type Accent = {
  text: string;
  bg: string;
  border: string;
  dot: string;
  /** space-separated RGB, used for the stage spotlight */
  glow: string;
};

type CompanyProject = {
  slug: string;
  title: string;
  url: string;
  device?: 'browser' | 'iphone';
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
    title: 'Vantage AI  ',
    url: 'https://vantageai.eliot.global/',
    device: 'browser',
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
    images: [
      '/projects/company/vantage-scada/1.png',
      '/projects/company/vantage-scada/2.png',
      '/projects/company/vantage-scada/3.png',
      '/projects/company/vantage-scada/4.png',
    ],
    accent: {
      text: 'text-amber-500',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      dot: 'bg-amber-500',
      glow: '245 158 11',
    },
  },
  {
    slug: 'eliot-smartflow',
    title: 'ELIoT SmartFlow',
    url: 'https://smartflow.eliot.global/',
    device: 'browser',
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
    images: [
      '/projects/company/eliot-smartflow/1.png',
      '/projects/company/eliot-smartflow/2.png',
      '/projects/company/eliot-smartflow/3.png',
      '/projects/company/eliot-smartflow/4.png',
      '/projects/company/eliot-smartflow/5.png',
    ],
    accent: {
      text: 'text-violet-500',
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/30',
      dot: 'bg-violet-500',
      glow: '139 92 246',
    },
  },
  {
    slug: 'eliot-rfid',
    title: 'ELIoT Handheld RFID',
    url: '',
    device: 'iphone',
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
    images: [
      '/projects/company/eliot-rfid/1.png',
      '/projects/company/eliot-rfid/2.png',
      '/projects/company/eliot-rfid/3.png',
      // '/projects/company/eliot-rfid/4.png',
      '/projects/company/eliot-rfid/5.png',
      '/projects/company/eliot-rfid/6.png',
      '/projects/company/eliot-rfid/7.png',
      // '/projects/company/eliot-rfid/8.png',
    ],
    accent: {
      text: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      dot: 'bg-emerald-500',
      glow: '16 185 129',
    },
  },
];

function FlowLine({ accent, delay }: { accent: Accent; delay: number }) {
  return (
    <div className="relative h-[2px] w-full rounded-full bg-border overflow-hidden">
      <motion.span
        className={cn('absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full', accent.dot)}
        animate={{ left: ['-10%', '100%'] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay }}
      />
    </div>
  );
}

function ArchitectureVisual({ project }: { project: CompanyProject }) {
  const { accent } = project;
  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center gap-4 p-4 sm:p-6 bg-background/50 select-none">
      {project.sources && (
        <div className="flex flex-wrap justify-center gap-1.5">
          {project.sources.map((site) => (
            <span
              key={site}
              className={cn(
                'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium backdrop-blur',
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

      <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 max-w-full px-2">
        {project.flow.map((node, i) => {
          const Icon = node.icon;
          return (
            <div key={node.label} className="flex items-center gap-1.5 sm:gap-2.5">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <div
                  className={cn(
                    'flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border bg-background/90 shadow-sm',
                    accent.border
                  )}
                >
                  <Icon className={cn('h-5 w-5', accent.text)} />
                </div>
                <span className="text-[10px] sm:text-xs font-medium leading-tight max-w-[65px] sm:max-w-[75px] truncate">
                  {node.label}
                </span>
              </div>
              {i < project.flow.length - 1 && (
                <div className="w-5 sm:w-8 pb-3">
                  <FlowLine accent={accent} delay={i * 0.4} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
        <Workflow className="h-3 w-3" />
        System flow architecture
      </div>
    </div>
  );
}

function ProjectDevicePanel({ project }: { project: CompanyProject }) {
  const hasImages = project.images.length > 0;
  const isIphone = project.device === 'iphone';
  const [activeIdx, setActiveIdx] = useState(0);
  const [view, setView] = useState<'device' | 'flow'>('device');
  const [isHovered, setIsHovered] = useState(false);

  // Auto-move to next image every 2nd second (2000ms)
  useEffect(() => {
    if (!hasImages || project.images.length <= 1 || view === 'flow') return;
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % project.images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [hasImages, project.images.length, view, isHovered]);

  return (
    <div className="w-full flex flex-col gap-3">
      {hasImages && (
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-mono text-muted-foreground truncate max-w-[200px]">
            {project.url}
          </span>
          <div className="flex items-center gap-1 rounded-lg border bg-secondary/40 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setView('device')}
              className={cn(
                'flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition-colors',
                view === 'device'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <ImageIcon className="h-3.5 w-3.5" />
              Screens ({project.images.length})
            </button>
            <button
              type="button"
              onClick={() => setView('flow')}
              className={cn(
                'flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition-colors',
                view === 'flow'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Workflow className="h-3.5 w-3.5" />
              Flow
            </button>
          </div>
        </div>
      )}

      {isIphone ? (
        /* iPhone Presentation */
        <div className="flex flex-col items-center justify-center w-full py-2">
          {view === 'device' && hasImages ? (
            <div
              className="relative w-[240px] sm:w-[280px] max-w-full cursor-pointer select-none group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => {
                if (project.images.length > 1) {
                  setActiveIdx((i) => (i + 1) % project.images.length);
                }
              }}
              title="Click to next screen"
            >
              <Iphone
                key={project.images[activeIdx]}
                src={project.images[activeIdx]}
                className="w-full drop-shadow-2xl"
              />
              {project.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx((i) => (i - 1 + project.images.length) % project.images.length);
                    }}
                    aria-label="Previous screenshot"
                    className="absolute -left-3 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 border border-border text-foreground shadow-md backdrop-blur hover:bg-background hover:scale-105 active:scale-95 transition-all"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx((i) => (i + 1) % project.images.length);
                    }}
                    aria-label="Next screenshot"
                    className="absolute -right-3 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 border border-border text-foreground shadow-md backdrop-blur hover:bg-background hover:scale-105 active:scale-95 transition-all"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="w-[240px] sm:w-[280px] max-w-full">
              <Iphone className="w-full drop-shadow-2xl">
                <ArchitectureVisual project={project} />
              </Iphone>
            </div>
          )}
        </div>
      ) : (
        /* Safari Presentation */
        <div className="relative group rounded-xl border border-border/70 bg-card shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
          {hasImages && view === 'device' ? (
            <div
              className="relative cursor-pointer select-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => {
                if (project.images.length > 1) {
                  setActiveIdx((i) => (i + 1) % project.images.length);
                }
              }}
              title="Click to next image"
            >
              <Safari
                key={project.images[activeIdx]}
                url={project.url}
                imageSrc={project.images[activeIdx]}
                className="w-full"
              />
              {project.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx((i) => (i - 1 + project.images.length) % project.images.length);
                    }}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 border border-border text-foreground shadow-md backdrop-blur hover:bg-background hover:scale-105 active:scale-95 transition-all"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx((i) => (i + 1) % project.images.length);
                    }}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 border border-border text-foreground shadow-md backdrop-blur hover:bg-background hover:scale-105 active:scale-95 transition-all"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          ) : (
            <Safari url={project.url} className="w-full">
              <ArchitectureVisual project={project} />
            </Safari>
          )}
        </div>
      )}

      {/* Screen selector pills */}
      {hasImages && view === 'device' && project.images.length > 1 && (
        <div className="flex items-center justify-between gap-2 pt-1 px-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            {project.images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveIdx(i)}
                className={cn(
                  'flex items-center justify-center h-7 px-3 text-xs font-mono font-medium rounded-md border transition-all cursor-pointer',
                  i === activeIdx
                    ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                    : 'border-border/60 bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground'
                )}
                aria-label={`Go to screenshot ${i + 1}`}
              >
                Screen {i + 1}
              </button>
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-mono shrink-0">
            {activeIdx + 1} / {project.images.length}
          </span>
        </div>
      )}
    </div>
  );
}

function CropMarks() {
  const mark = 'absolute h-4 w-4 border-foreground/30';
  return (
    <div aria-hidden className="pointer-events-none absolute inset-3 sm:inset-4">
      <span className={cn(mark, 'left-0 top-0 border-l border-t')} />
      <span className={cn(mark, 'right-0 top-0 border-r border-t')} />
      <span className={cn(mark, 'left-0 bottom-0 border-l border-b')} />
      <span className={cn(mark, 'right-0 bottom-0 border-r border-b')} />
    </div>
  );
}

export function CompanyProjectsSection() {
  return (
    <section id="company-projects" className="relative py-20 overflow-hidden isolate">
      {/* Section backdrop: faded blueprint grid + grain */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-blueprint mask-fade-y opacity-60" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grain" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2  px-4 py-1 text-xs font-medium text-muted-foreground mb-4">
            <Building2 className="h-3.5 w-3.5" />
            Built at Emmanuels Lanka
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Company Contributed  <span className="text-gradient">Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production systems for industrial IoT and garment manufacturing that I helped design, build and ship
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 lg:gap-14 max-w-6xl mx-auto">
          {companyProjects.map((project, index) => {
            const flipped = index % 2 === 1;
            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.15 }}
                className="relative isolate overflow-hidden rounded-3xl border border-border/70 bg-card/40"
              >
                {/* Stage backdrop: fine grid that fades out from the device side */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 bg-blueprint"
                  style={{
                    maskImage: `radial-gradient(ellipse 70% 80% at ${flipped ? '80%' : '20%'} 55%, #000 20%, transparent 75%)`,
                    WebkitMaskImage: `radial-gradient(ellipse 70% 80% at ${flipped ? '80%' : '20%'} 55%, #000 20%, transparent 75%)`,
                  }}
                />
                {/* Oversized outlined case number */}
                <span
                  aria-hidden
                  className={cn(
                    'pointer-events-none absolute -z-10 -top-6 sm:-top-10 select-none font-black leading-none tracking-tighter text-outline text-[9rem] sm:text-[13rem] lg:text-[16rem]',
                    flipped ? 'lg:left-4 right-4 lg:right-auto' : 'right-4'
                  )}
                >
                  0{index + 1}
                </span>
                <CropMarks />

                {/* Spec strip */}
                <div className="flex items-center justify-between gap-4 border-b border-border/60 px-6 sm:px-10 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className={cn('h-1.5 w-1.5 rounded-full', project.accent.dot)} />
                    Case 0{index + 1} / 0{companyProjects.length}
                  </span>
                  <span className="hidden sm:inline">{project.url ? 'Live in production' : 'Deployed on-site'}</span>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center p-6 sm:p-10">
                  {/* Device: below the text on mobile, alternating sides on desktop */}
                  <div className={cn('relative min-w-0 order-2', flipped ? 'lg:order-2' : 'lg:order-1')}>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-10 -z-10"
                      style={{
                        background: `radial-gradient(closest-side, rgb(${project.accent.glow} / 0.3), transparent)`,
                      }}
                    />
                    <ProjectDevicePanel project={project} />
                  </div>

                  <div className={cn('min-w-0 order-1', flipped ? 'lg:order-1' : 'lg:order-2')}>
                    <span className="text-gradient text-sm font-medium mb-3 block">
                      {project.type}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-bold mb-1">
                      <HyperText className="text-4xl sm:text-5xl lg:text-6xl text-white-500" startOnView={true} delay={0.2}>
                        {project.title}
                      </HyperText>
                    </h3>
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
                        <span key={tag}>
                          <HyperText className="text-lg text-gray-500" startOnView={true} delay={0.2}>
                            {"-" + tag + "-"}
                          </HyperText>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
