'use client';

import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center py-20 ${className}`}
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
