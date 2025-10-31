/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"

// --- 1. Updated Data Structure with Tech Tools ---
// Using 12 tools for better distribution across 4 columns
const tools = [
  {
    name: "React",
    username: "Frontend",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    // Use an icon with good contrast
    invertOnDark: false, 
  },
  {
    name: "Next.js",
    username: "Framework",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    invertOnDark: true, // Black logo on light background needs inverting for dark mode
  },
  {
    name: "TypeScript",
    username: "Language",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    invertOnDark: false,
  },
  {
    name: "Node.js",
    username: "Runtime",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    invertOnDark: false,
  },
  {
    name: "Python",
    username: "Language",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    invertOnDark: false,
  },
  {
    name: "PostgreSQL",
    username: "Database",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    invertOnDark: false,
  },
  {
    name: "SQL",
    username: "Query",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", // Using MySQL icon for generic SQL
    invertOnDark: false,
  },
  {
    name: "Prisma",
    username: "ORM",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    invertOnDark: true, 
  },
  {
    name: "AWS",
    username: "Cloud",
  img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", 
  invertOnDark: false,
  },
  {
    name: "Git",
    username: "Control",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    invertOnDark: false,
  },
  {
    name: "Tailwind",
    username: "CSS",
img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  invertOnDark: false,  
  },
  {
    name: "Docker",
    username: "Container",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    invertOnDark: false,
  },
]

// Split the list into four rows. Since the original has a complex slicing logic,
// we'll simplify to ensure each vertical marquee gets an equal number of items.
const chunkSize = Math.ceil(tools.length / 4);
const firstRow = tools.slice(0, chunkSize); // React, Next.js, TypeScript
const secondRow = tools.slice(chunkSize, chunkSize * 2); // Node.js, Python, PostgreSQL
const thirdRow = tools.slice(chunkSize * 2, chunkSize * 3); // SQL, Prisma, AWS
const fourthRow = tools.slice(chunkSize * 3); // Git, Tailwind, Docker


const ToolCard = ({
  img,
  name,
  username,
  invertOnDark = false,
}: {
  img: string
  name: string
  username: string
  invertOnDark?: boolean
}) => {
  return (
    <figure
      className={cn(
        "relative h-20 w-32 cursor-pointer overflow-hidden rounded-xl border p-2 flex flex-col items-center justify-center text-center sm:w-32",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center gap-1">
        {/* Adjusted image size for a better fit */}
        <img 
            className={cn("rounded-full h-8 w-8 object-contain", invertOnDark && "dark:invert")} 
            width="32" 
            height="32" 
            alt={`${name} logo`} 
            src={img} 
        />
        <figcaption className="text-xs font-medium dark:text-white">
          {name}
        </figcaption>
        <p className="text-xs font-medium dark:text-white/40">{username}</p>
      </div>
      {/* Removed the body/blockquote section */}
    </figure>
  )
}

export function Marquee3D() {
    // Increased duration for a smoother, slower scroll over a long list
    const duration = "40s"; 

  return (
    <div className="relative flex h-96 w-screen flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        {/* Column 1 */}
        <Marquee pauseOnHover vertical className={`[--duration:${duration}]`}>
          {firstRow.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </Marquee>
        {/* Column 2 */}
        <Marquee reverse pauseOnHover className={`[--duration:${duration}]`} vertical>
          {secondRow.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </Marquee>
        {/* Column 3 - Ensure it has items */}
        <Marquee reverse pauseOnHover className={`[--duration:${duration}]`} vertical>
          {thirdRow.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </Marquee>
        {/* Column 4 - Ensure it has items */}
        <Marquee pauseOnHover className={`[--duration:${duration}]`} vertical>
          {fourthRow.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </Marquee>
      </div>

      {/* Gradient Overlays */}
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}