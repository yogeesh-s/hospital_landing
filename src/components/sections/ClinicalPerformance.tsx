"use client"

import { motion } from "motion/react"
import { TrendingUp, Activity, ShieldCheck, Zap, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Line Chart Component (Custom SVG)
function RecoveryLineChart() {
  const data = [20, 45, 30, 65, 55, 80, 95]
  const path = data.map((val, i) => `${i * 50},${100 - val}`).join(" L ")

  return (
    <div className="relative w-full h-32 md:h-48 mt-6 md:mt-8">
      <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
        {/* Background Grid Lines */}
        {[0, 25, 50, 75, 100].map((tick) => (
          <line key={tick} x1="0" y1={tick} x2="300" y2={tick} stroke="currentColor" strokeWidth="0.5" className="opacity-[0.05]" />
        ))}
        
        {/* Animated Path */}
        <motion.path
          d={`M 0,100 L ${path}`}
          fill="none"
          stroke="var(--color-royal-cobalt)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Gradient Fill */}
        <motion.path
          d={`M 0,100 L ${path} L 300,100 Z`}
          fill="url(#gradient-recovery)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />

        <defs>
          <linearGradient id="gradient-recovery" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-royal-cobalt)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--color-royal-cobalt)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Data Points */}
        {data.map((val, i) => (
          <motion.circle
            key={i}
            cx={i * 50}
            cy={100 - val}
            r="4"
            className="fill-white stroke-royal-cobalt stroke-2 shadow-2xl"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 1.5 + i * 0.1 }}
          />
        ))}
      </svg>
    </div>
  )
}

// Circular Progress Component
function CircularGauge({ 
  value, 
  label, 
  metric = "Accuracy", 
  sublabel,
  size = "md"
}: { 
  value: number, 
  label: string, 
  metric?: string, 
  sublabel: string,
  size?: "sm" | "md" | "lg"
}) {
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  const sizeClasses = {
    sm: "size-28 md:size-36",
    md: "size-32 md:size-44",
    lg: "size-40 md:size-56"
  }

  return (
    <div className="flex flex-col items-center gap-3 md:gap-4 w-full">
      <div className={cn("relative flex items-center justify-center", sizeClasses[size])}>
        <svg viewBox="0 0 128 128" className="size-full -rotate-90">
          <circle cx="64" cy="64" r={radius} className="fill-none stroke-muted/20 stroke-[6px] md:stroke-[8px]" />
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            className="fill-none stroke-royal-cobalt stroke-[6px] md:stroke-[8px]"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 8px rgba(37, 99, 235, 0.4))" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
           <span className="text-lg sm:text-xl md:text-3xl font-black tracking-tighter leading-none mb-0.5 md:mb-1">{value}%</span>
           <span className="text-[6px] sm:text-[7px] md:text-[10px] font-black uppercase text-royal-cobalt tracking-[0.15em] md:tracking-widest">{metric}</span>
        </div>
      </div>
      <div className="text-center px-2">
         <h4 className="font-bold text-base md:text-xl tracking-tight leading-tight mb-1">{label}</h4>
         <p className="text-[8px] md:text-[10px] text-muted-foreground uppercase font-black tracking-[0.15em] md:tracking-[0.2em]">{sublabel}</p>
      </div>
    </div>
  )
}

export function ClinicalPerformance({ dict }: { dict: any }) {
  return (
    <section className="py-16 md:py-32 px-6 overflow-hidden relative bg-muted/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-start text-left mb-10 md:mb-24 gap-3 md:gap-6">
          <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
             <div className="h-px w-8 md:w-12 bg-royal-cobalt" />
             Live Transparency
          </div>
          <h2 className="text-4xl md:text-8xl font-semibold tracking-tighter leading-none">
            Performance <span className="text-gradient-primary italic pr-4">Metrics</span>
          </h2>
          <p className="max-w-2xl text-sm md:text-xl text-muted-foreground leading-relaxed font-light">
            {dict.sections.performance.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          <div className="lg:col-span-2 glass p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-white/10 shadow-2xl bg-white/5 backdrop-blur-3xl">
             <div className="flex justify-between items-start mb-6 md:mb-10">
                <div className="flex flex-col gap-2 md:gap-3">
                   <div className="flex items-center gap-2 text-royal-cobalt font-black uppercase tracking-widest text-[8px] md:text-[10px]">
                      <TrendingUp size={14} className="md:size-4" />
                      <span>Patient Outcomes</span>
                   </div>
                   <h3 className="text-2xl md:text-5xl font-bold tracking-tight">Recovery Curve</h3>
                </div>
                <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-royal-cobalt/10 border border-royal-cobalt/20 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-royal-cobalt">
                   Live Data Feed
                </div>
             </div>
             <p className="text-sm md:text-lg text-muted-foreground max-w-xl font-light leading-relaxed">
               Our integrated care pathway ensures a 40% faster recovery time compared to national averages through continuous biometric monitoring.
             </p>
             <RecoveryLineChart />
             <div className="mt-8 md:mt-12 grid grid-cols-3 gap-4 md:gap-8 border-t border-white/5 pt-6 md:pt-10">
                <div>
                   <p className="text-[8px] md:text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1 md:mb-2">Initial Baseline</p>
                   <p className="text-xl md:text-3xl font-black tracking-tighter">20.0%</p>
                </div>
                <div>
                   <p className="text-[8px] md:text-[10px] font-black uppercase text-royal-cobalt tracking-widest mb-1 md:mb-2">Current Delta</p>
                   <p className="text-xl md:text-3xl font-black tracking-tighter text-royal-cobalt">95.4%</p>
                </div>
                <div>
                   <p className="text-[8px] md:text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1 md:mb-2">Q4 Projection</p>
                   <p className="text-xl md:text-3xl font-black tracking-tighter">99.1%</p>
                </div>
             </div>
          </div>

          <div className="glass p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-white/10 shadow-2xl bg-white/5 backdrop-blur-3xl flex flex-col justify-between">
             <div className="flex flex-col gap-2 md:gap-3 mb-8 md:mb-14">
                <div className="flex items-center gap-2 text-electric-cyan font-black uppercase tracking-widest text-[8px] md:text-[10px]">
                   <ShieldCheck size={14} className="md:size-4" />
                   <span>Clinical Precision</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight">Success Index</h3>
             </div>
             
             <div className="flex flex-col gap-8 md:gap-14">
                <CircularGauge value={99.2} label="Surgical Precision" metric="Precision" sublabel="Top 1% Global Rank" />
                <div className="h-px w-full bg-white/5" />
                <CircularGauge value={98.5} label="Diagnostic Success" metric="Success" sublabel="AI Integrated Unit" />
             </div>

             <button className="mt-10 md:mt-14 h-14 md:h-16 w-full rounded-xl md:rounded-2xl border border-royal-cobalt/30 text-royal-cobalt font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-royal-cobalt hover:text-white transition-all shadow-xl">
                Audit Report 2026
             </button>
          </div>
        </div>

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
           {[
             { icon: Activity, label: "Avg Pulse Rate", val: "72 BPM (Clinic Avg)", color: "text-royal-cobalt" },
             { icon: Zap, label: "System Latency", val: "~4ms Response", color: "text-electric-cyan" },
             { icon: ArrowUpRight, label: "Full Report", val: "Clinical Outcomes", color: "text-foreground" }
           ].map((stat, i) => (
             <div key={i} className="p-6 md:p-8 glass rounded-[1.5rem] md:rounded-[2.5rem] border-white/5 bg-white/[0.02] flex items-center justify-between group hover:border-royal-cobalt/20 transition-all cursor-pointer">
                <div className="flex items-center gap-4 md:gap-6">
                   <div className={cn("size-10 md:size-12 rounded-lg md:rounded-xl bg-white/5 flex items-center justify-center shrink-0", stat.color)}>
                      <stat.icon size={20} className="md:size-6" />
                   </div>
                   <div>
                      <p className="text-[8px] md:text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-0.5 md:mb-1">{stat.label}</p>
                      <p className="text-lg md:text-xl font-bold tracking-tight text-foreground">{stat.val}</p>
                   </div>
                </div>
                {i === 2 && <ArrowUpRight size={18} className="md:size-6 text-royal-cobalt group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
