import React, { ComponentPropsWithoutRef, CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  return (
    <>
      <style jsx>{`
        @keyframes ripple-animation {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)] select-none",
          className
        )}
        {...props}
      >
        {Array.from({ length: numCircles }, (_, i) => {
          const size = mainCircleSize + i * 70
          const opacity = mainCircleOpacity - i * 0.03
          const animationDelay = `${i * 0.06}s`

          return (
            <div
              key={i}
              className="bg-foreground/25 absolute rounded-full border shadow-xl"
              style={
                {
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity,
                  animationDelay,
                  borderStyle: 'solid',
                  borderWidth: '1px',
                  borderColor: `hsl(var(--foreground))`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(0.8)",
                  animation: "ripple-animation 3.5s ease-out infinite",
                } as CSSProperties
              }
            />
          )
        })}
      </div>
    </>
  )
})

Ripple.displayName = "Ripple"