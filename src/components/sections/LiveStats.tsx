"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, animate, AnimatePresence } from "motion/react"
import { Award, Users, Activity, Clock, ShieldCheck, Sparkles, TrendingUp, Cpu, Activity as PulseIcon, Binary } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  value: number
  suffix?: string
  label: string
  icon: any
  delay?: number
  color: string
  id: string
}

function StatCard({ value, suffix = "", label, icon: Icon, delay = 0, color, id }: StatCardProps) {
  const [count, setCount] = useState(0)
  const [randomData] = useState<number[]>(() => 
    typeof window !== "undefined" ? Array.from({ length: 12 }, () => Math.floor(Math.random() * 40) + 10) : []
  )
  const [randomId] = useState<number | null>(() => 
    typeof window !== "undefined" ? Math.floor(Math.random() * 100) : null
  )
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 3,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setCount(Math.floor(latest)),
      })
      
      return () => controls.stop()
    }
  }, [isInView, value, delay, randomId])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="relative group h-full"
    >
      <div className="relative glass p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border-border/40 dark:border-white/5 shadow-2xl bg-white/20 dark:bg-slate-950/30 backdrop-blur-3xl flex flex-col gap-5 md:gap-7 transition-all duration-500 hover:border-royal-cobalt/40 overflow-hidden min-h-[220px] md:min-h-[320px]">
        
        {/* HUD Corner Accents */}
        <div className="absolute top-4 left-4 size-3 md:size-4 border-t-2 border-l-2 border-royal-cobalt/30 dark:border-white/10" />
        <div className="absolute top-4 right-4 size-3 md:size-4 border-t-2 border-r-2 border-royal-cobalt/30 dark:border-white/10" />
        <div className="absolute bottom-4 left-4 size-3 md:size-4 border-b-2 border-l-2 border-royal-cobalt/30 dark:border-white/10" />
        <div className="absolute bottom-4 right-4 size-3 md:size-4 border-b-2 border-r-2 border-royal-cobalt/30 dark:border-white/10" />

        {/* HUD Micro-Data Header */}
        <div className="flex justify-between items-start relative z-10 pt-2">
           <div className="flex flex-col gap-0.5">
              <span className="text-[6px] md:text-[8px] font-black uppercase tracking-[0.2em] text-royal-cobalt/60">System ID: {id}</span>
              <div className={cn(
                "size-8 md:size-12 rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-lg shadow-royal-cobalt/20 transition-all duration-500 group-hover:scale-110",
                color
              )}>
                <Icon size={16} className="md:size-6" />
              </div>
           </div>
           
           <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950/5 dark:bg-white/5 border border-slate-950/10 dark:border-white/10 backdrop-blur-md">
                 <span className="text-[6px] md:text-[7px] font-black uppercase tracking-widest text-royal-cobalt">Stream</span>
                 <div className="size-1 bg-green-500 rounded-full animate-pulse" />
              </div>
              {randomId !== null && (
                <span className="text-[6px] md:text-[7px] font-mono text-muted-foreground opacity-50 uppercase tracking-tighter">
                  0x4F{randomId}FE
                </span>
              )}
           </div>
        </div>

        {/* Data Visualization Sparkline */}
        <div className="h-10 md:h-16 w-full opacity-30 group-hover:opacity-60 transition-opacity">
           <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
              <motion.path
                d={`M 0 35 ${randomData.map((d, i) => `L ${(i + 1) * 8.3} ${35 - (d * 0.6)}`).join(' ')}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-royal-cobalt"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isInView ? 1 : 0 }}
                transition={{ duration: 2, delay: delay + 0.5 }}
              />
              <motion.path
                d={`M 0 35 ${randomData.map((d, i) => `L ${(i + 1) * 8.3} ${35 - (d * 0.6)}`).join(' ')} L 100 40 L 0 40 Z`}
                fill="url(#gradient-stat)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1, delay: delay + 1 }}
              />
              <defs>
                 <linearGradient id="gradient-stat" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-royal-cobalt)" />
                    <stop offset="100%" stopColor="transparent" />
                 </linearGradient>
              </defs>
           </svg>
        </div>

        {/* Main Metric */}
        <div className="flex flex-col gap-0.5 relative z-10">
           <div className="inline-flex items-end gap-1 font-black tracking-tighter leading-none">
              <span className="text-3xl md:text-6xl text-foreground">
                {count}
              </span>
              <span className="text-lg md:text-3xl text-royal-cobalt mb-1">
                {suffix}
              </span>
           </div>
           <p className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground leading-tight">
             {label}
           </p>
        </div>

        {/* HUD Operational Footer */}
        <div className="mt-auto pt-3 md:pt-4 border-t border-slate-950/5 dark:border-white/5 relative z-10 grid grid-cols-2 gap-2">
           <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1">
                <Cpu size={8} className="text-royal-cobalt" />
                <span className="text-[6px] md:text-[7px] font-bold text-foreground/40 dark:text-white/30 uppercase tracking-widest">Efficiency</span>
              </div>
              <span className="text-[8px] md:text-[9px] font-black text-foreground/80 dark:text-white/80 uppercase tracking-tighter">Verified_Optimal</span>
           </div>
           <div className="flex flex-col gap-0.5 items-end">
              <div className="flex items-center gap-1">
                <span className="text-[6px] md:text-[7px] font-bold text-foreground/40 dark:text-white/30 uppercase tracking-widest">Trend</span>
                <TrendingUp size={8} className="text-electric-cyan" />
              </div>
              <div className="flex gap-1">
                 {[...Array(5)].map((_, i) => (
                   <div key={i} className={cn("size-1 rounded-full", i < 4 ? "bg-royal-cobalt" : "bg-muted")} />
                 ))}
              </div>
           </div>
        </div>

        {/* Tech Scanning Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,var(--color-royal-cobalt)_0%,transparent_100%)] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity" />
      </div>
    </motion.div>
  )
}

export function LiveStats({ dict }: { dict: any }) {
  return (
    <section className="py-16 md:py-32 px-4 md:px-6 overflow-hidden relative bg-background">
      {/* Background Data Matrix Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.15] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,var(--color-background)_100%)]" />
      </div>

      <div className="max-w-[1400px] mx-auto">
        {/* HUD Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-24 gap-8">
          <div className="flex flex-col items-start text-left gap-3 md:gap-5">
            <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px]">
               <div className="h-px w-6 md:w-10 bg-royal-cobalt" />
               Realtime Clinical Intelligence
            </div>
            <h2 className="text-4xl md:text-8xl font-semibold tracking-tighter leading-none">
              Live Trust <span className="text-gradient-primary italic pr-4">Metrics</span>
            </h2>
            <div className="flex flex-wrap items-center gap-4 mt-2">
               <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-royal-cobalt/5 border border-royal-cobalt/20">
                  <PulseIcon size={12} className="text-royal-cobalt" />
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Network: STABLE</span>
               </div>
               <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-electric-cyan/5 border border-electric-cyan/20">
                  <Binary size={12} className="text-electric-cyan" />
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Latency: 14ms</span>
               </div>
            </div>
          </div>
          
          <p className="max-w-md text-xs md:text-lg text-muted-foreground leading-relaxed font-medium">
            Biometric transparency is the core of our clinical philosophy. Every outcome is recorded, verified, and optimized.
          </p>
        </div>

        {/* HUD Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
          <StatCard 
            id="CRD-01"
            value={15} 
            suffix="+" 
            label={dict.stats.years_experience} 
            icon={Award}
            color="bg-royal-cobalt"
          />
          <StatCard 
            id="SPX-24"
            value={50} 
            suffix="+" 
            label={dict.stats.specialists} 
            icon={Users}
            delay={0.1}
            color="bg-electric-cyan dark:bg-electric-cyan/80 text-slate-950 dark:text-white"
          />
          <StatCard 
            id="OPR-10"
            value={10} 
            suffix="k+" 
            label={dict.stats.surgeries} 
            icon={Activity}
            delay={0.2}
            color="bg-royal-cobalt text-white"
          />
          <StatCard 
            id="EMR-911"
            value={8} 
            suffix="m" 
            label={dict.stats.emergency} 
            icon={Clock}
            delay={0.3}
            color="bg-red-500 text-white"
          />
        </div>

        {/* Global Compliance Pods */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 md:mt-20 p-6 md:p-10 glass rounded-[2rem] md:rounded-[3rem] border-slate-950/10 dark:border-white/5 bg-slate-950/5 dark:bg-white/[0.02] flex flex-col md:flex-row flex-wrap justify-start md:justify-center items-start md:items-center gap-10 md:gap-24 shadow-2xl relative overflow-hidden"
        >
           {/* Scanline Effect */}
           <motion.div 
             animate={{ x: ["-100%", "200%"] }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             className="absolute top-0 bottom-0 w-32 bg-linear-to-r from-transparent via-royal-cobalt/[0.03] to-transparent pointer-events-none"
           />

           {[
             { icon: ShieldCheck, text: "NABH & JCI ACCREDITED", sub: "Clinical Clearance v2.4", status: "Level 1" },
             { icon: Sparkles, text: "TOP 1% GLOBAL RANK", sub: "Performance Audit 2026", status: "Elite" },
             { icon: Users, text: "1.2M+ TREATED", sub: "Total Database Records", status: "Validated" }
           ].map((trust, i) => (
             <div key={i} className="flex items-center gap-4 md:gap-6 group/item relative z-10 w-full md:w-auto">
                <div className="size-10 md:size-14 rounded-xl bg-royal-cobalt/10 flex items-center justify-center text-royal-cobalt shadow-lg transition-all group-hover/item:bg-royal-cobalt group-hover/item:text-white shrink-0">
                   <trust.icon size={20} className="md:size-7" />
                </div>
                <div className="flex flex-col">
                   <div className="flex items-center gap-2">
                      <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-foreground">
                        {trust.text}
                      </span>
                      <span className="text-[6px] md:text-[7px] px-1.5 py-0.5 rounded bg-royal-cobalt text-white font-black">{trust.status}</span>
                   </div>
                   <span className="text-[8px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-0.5">
                      {trust.sub}
                   </span>
                </div>
             </div>
           ))}
        </motion.div>
      </div>

      {/* Background HUD Decorative Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] md:size-[1000px] border border-royal-cobalt/[0.03] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[400px] md:size-[800px] border border-royal-cobalt/[0.02] rounded-full pointer-events-none -z-10 animate-pulse" />
    </section>
  )
}
