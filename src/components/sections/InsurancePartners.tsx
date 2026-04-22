"use client"

import { motion } from "motion/react"
import { insurancePartners } from "@/lib/data"

export function InsurancePartners({ dict }: { dict: any }) {
  // Duplicate partners for infinite loop effect
  const partners = [...insurancePartners, ...insurancePartners]

  return (
    <section className="py-12 md:py-16 lg:py-20 2xl:py-24 px-6 overflow-hidden bg-muted/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-start text-left mb-10 md:mb-24 gap-3 md:gap-6">
          <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
             <div className="h-px w-8 md:w-12 bg-royal-cobalt" />
             Direct Settlement
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold tracking-tighter leading-none">
            Partnered <span className="text-gradient-primary italic pr-4">Insurance</span>
          </h2>
          <p className="max-w-2xl text-sm md:text-xl text-muted-foreground leading-relaxed font-light">
            {dict.sections.insurance.subtitle}
          </p>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative flex overflow-hidden py-6 md:py-10 mask-gradient-x">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-6 md:gap-12 items-center whitespace-nowrap min-w-max"
          >
            {partners.map((partner, i) => (
              <div
                key={i}
                className="group relative flex items-center justify-center h-14 md:h-20 px-8 md:px-12 rounded-xl md:rounded-2xl glass border border-white/10 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:border-royal-cobalt/30 hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <span className="text-lg md:text-2xl font-black tracking-tighter text-foreground/80 group-hover:text-royal-cobalt">
                  {partner.logo}
                </span>
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-royal-cobalt text-white text-[8px] md:text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                   {partner.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
