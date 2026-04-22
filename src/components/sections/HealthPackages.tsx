"use client"

import { motion } from "motion/react"
import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"
import { healthPackages } from "@/lib/data"
import { cn } from "@/lib/utils"

export function HealthPackages({ dict }: { dict: any }) {
  return (
    <section className="py-12 md:py-16 lg:py-20 2xl:py-24 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-start text-left mb-10 md:mb-24 gap-3 md:gap-6">
          <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
             <div className="h-px w-8 md:w-12 bg-royal-cobalt" />
             Wellness Programs
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold tracking-tighter leading-none">
            Curated <span className="text-gradient-primary italic pr-4">Packages</span>
          </h2>
          <p className="max-w-2xl text-sm md:text-xl text-muted-foreground leading-relaxed font-light">
            {dict.sections.packages.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {healthPackages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative flex flex-col rounded-[2rem] md:rounded-[3rem] overflow-hidden border transition-all duration-500",
                pkg.popular 
                  ? "border-royal-cobalt/30 shadow-[0_30px_60px_rgba(37,99,235,0.1)] lg:scale-105 z-10 bg-white dark:bg-slate-900" 
                  : "border-white/10 shadow-xl bg-muted/5 hover:border-royal-cobalt/20"
              )}
            >
              {/* Popular Tag */}
              {pkg.popular && (
                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-royal-cobalt text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-xl">
                  Most Popular
                </div>
              )}

              {/* Visual Header */}
              <div className="relative h-36 md:h-48 w-full overflow-hidden">
                <Image 
                  src={pkg.image}
                  alt={`Overview of ${pkg.title} health package`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  loading="lazy"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 flex flex-col flex-1 gap-6 md:gap-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-3xl font-bold tracking-tight">{pkg.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{pkg.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                   <span className="text-2xl md:text-4xl font-black tracking-tighter">{pkg.price}</span>
                   <span className="text-[9px] font-bold text-muted-foreground uppercase">Starting From</span>
                </div>

                <div className="flex flex-col gap-3 md:gap-4">
                   {pkg.features.map((feature, j) => (
                     <div key={j} className="flex items-center gap-3">
                        <div className="size-4 md:size-5 rounded-full bg-royal-cobalt/10 flex items-center justify-center text-royal-cobalt shrink-0">
                           <Check size={10} className="md:size-3" strokeWidth={3} aria-hidden="true" />
                        </div>
                        <span className="text-xs md:text-sm font-medium text-foreground/80">{feature}</span>
                     </div>
                   ))}
                </div>

                <button
  aria-label={`Book the ${pkg.title} package`}
  className={cn(
                  "mt-auto h-12 md:h-14 w-full rounded-xl md:rounded-2xl font-bold text-[10px] md:text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 md:gap-3",
                  pkg.popular 
                    ? "bg-royal-cobalt text-white shadow-xl hover:scale-[1.02]" 
                    : "border border-royal-cobalt text-royal-cobalt hover:bg-royal-cobalt hover:text-white"
                )}>
                  Book Package <ArrowRight size={14} className="md:size-4" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
