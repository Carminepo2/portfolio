import React, { ReactChild, ReactNode } from "react";

interface SectionWrapperProps {
  background?: Array<ReactNode> | ReactNode;
  children: ReactChild;
}

function SectionWrapper({ background, children }: SectionWrapperProps) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">{background}</div>

      <div className="relative z-20 bg-white/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </div>
    </section>
  );
}

export default SectionWrapper;
