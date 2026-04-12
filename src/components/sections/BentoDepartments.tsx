"use client"

import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { departmentsData } from "@/lib/data"

function DepartmentCard({ dept, className }: { dept: typeof departmentsData[0], className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("relative group h-[320px] md:h-full", className)}
    >
      <div className="relative h-full w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900 transition-all duration-500 group-hover:border-royal-cobalt/40">
        
        {/* Visual Layer */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <Image 
            src={dept.image}
            alt={`Medical services at our ${dept.title} department`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            loading="lazy"
            className="object-cover opacity-50 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="size-10 md:size-14 rounded-xl md:rounded-2xl bg-royal-cobalt text-white flex items-center justify-center shadow-lg">
              <dept.icon size={20} className="md:size-7" aria-hidden="true" />
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-[8px] md:text-[10px] font-bold text-white uppercase tracking-widest">Elite Dept</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-4">
            <div>
              <h3 className={cn(
                "font-bold tracking-tight text-white mb-1 leading-tight",
                dept.className?.includes("md:col-span-2") ? "text-xl md:text-4xl" : "text-lg md:text-2xl"
              )}>
                {dept.title}
              </h3>
              <p className="text-[10px] md:text-sm text-white/70 leading-relaxed max-w-[95%] line-clamp-2 md:line-clamp-none">
                {dept.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 md:gap-2 mt-1">
               {dept.services.slice(0, 3).map((service, i) => (
                 <div key={i} className="flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1.5 rounded-lg md:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-royal-cobalt/20 transition-all">
                    <CheckCircle2 size={8} className="text-electric-cyan md:size-3" aria-hidden="true" />
                    <span className="text-[7px] md:text-[10px] font-bold text-white uppercase tracking-tighter">{service}</span>
                 </div>
               ))}
               {dept.services.length > 3 && (
                 <div className="hidden md:flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1.5 rounded-lg md:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <span className="text-[7px] md:text-[10px] font-bold text-white uppercase tracking-tighter">+{dept.services.length - 3} More</span>
                 </div>
               )}
            </div>

            <div className="mt-1 md:mt-2 pt-3 md:pt-4 border-t border-white/10 opacity-100 md:opacity-0 md:-translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
               <button 
                aria-label={`Consult with a specialist in ${dept.title}`}
                className="flex items-center gap-2 text-[10px] md:text-sm font-bold text-electric-cyan hover:gap-4 transition-all"
               >
                 Consult Specialist <ChevronRight size={12} className="md:size-4" aria-hidden="true" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function BentoDepartments({ dict }: { dict: any }) {
  return (
    <section className="py-16 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-24 gap-6 md:gap-8">
          <div className="flex flex-col items-start text-left gap-3 md:gap-6">
            <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
               <div className="h-px w-8 md:w-12 bg-royal-cobalt" />
               Specialized Verticals
            </div>
            <h2 className="text-4xl md:text-8xl font-semibold tracking-tighter leading-none">
              World-Class <span className="text-gradient-primary italic pr-4">Specialties</span>
            </h2>
            <p className="max-w-2xl text-sm md:text-xl text-muted-foreground leading-relaxed font-light">
              {dict.sections.departments.subtitle}
            </p>
          </div>
          <button 
            aria-label="Explore all medical units and departments"
            className="h-14 md:h-16 px-8 md:px-10 rounded-xl md:rounded-2xl bg-royal-cobalt text-white font-bold text-base md:text-lg shadow-xl shadow-royal-cobalt/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap w-full md:w-auto"
          >
            Explore All Units
          </button>
        </div>

        <div 
          style={{ perspective: "2000px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 md:auto-rows-[320px]"
        >
          {departmentsData.map((dept, i) => (
            <DepartmentCard key={i} dept={dept} className={dept.className} />
          ))}
        </div>
      </div>
    </section>
  )
}
