"use client"

import { useRef } from "react"
import { motion } from "motion/react"

interface RevealProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  delay?: number
}

export function Reveal({ children, width = "fit-content", delay = 0.25 }: RevealProps) {
  const ref = useRef(null)

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: "75px" },
          visible: { opacity: 1, translateY: "0px" },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeIn", delay }}
        className="hidden md:block"
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--color-royal-cobalt)",
          zIndex: 20,
        }}
      />
    </div>
  )
}
