'use client';

import { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        // Let touch devices keep native momentum scrolling
        syncTouch: false,
        // Smooth-scroll #hash links, offset for the fixed navbar
        anchors: { offset: -80 },
      }}
    >
      {children}
    </ReactLenis>
  );
}
