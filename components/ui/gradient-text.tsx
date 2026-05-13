"use client"

import React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

function GradientText({
  className,
  children,
  as: Component = "span",
  ...props
}: GradientTextProps) {
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={cn(
        "relative inline bg-gradient-to-r from-[#2b8cee] via-cyan-300 to-[#2b8cee] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift",
        className
      )}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export { GradientText }
