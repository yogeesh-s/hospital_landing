"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, animate } from "motion/react"
import { Award, Users, Activity, Clock, ShieldCheck, Sparkles, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  value: number
  suffix?: string
  label: string
  icon: any
  delay?: number
  color: string
}

function StatCard({ value, suffix = "", label, icon: Icon, delay = 0, color }: StatCardProps) {
  const [count, setCount] = useState(0)
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
  }, [isInView, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      className="relative group w-full h-full"
    >
      <div className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[3.5rem] border-white/10 shadow-2xl bg-slate-950/40 backdrop-blur-3xl flex flex-col gap-6 md:gap-8 transition-all duration-500 hover:border-royal-cobalt/40 overflow-hidden min-h-[260px] md:min-h-[350px]">
        
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
           <svg viewBox="0 0 200 100" className="w-full h-full text-royal-cobalt">
              <motion.path
                d="M0,50 L40,50 L45,20 L55,80 L60,50 L100,50 L140,50 L145,20 L155,80 L160,50 L200,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                initial={{ pathLength: 0, x: -200 }}
                animate={{ x: 200 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
           </svg>
        </div>

        {/* Top: Icon & HUD Status */}
        <div className="flex justify-between items-start relative z-10">
           <div className={cn(
             "size-10 md:size-14 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-royal-cobalt/20 transition-all duration-500 group-hover:scale-110",
             color
           )}>
             <Icon size={20} className="md:size-7" />
           </div>
           <div className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-royal-cobalt">Active</span>
              <div className="size-1 bg-green-500 rounded-full animate-pulse" />
           </div>
        </div>

        {/* The Large Stat */}
        <div className="flex flex-col gap-1 md:gap-2 relative z-10">
           <div className="inline-flex items-end gap-1 font-black tracking-tighter leading-none whitespace-nowrap">
              <span className="text-4xl md:text-7xl lg:text-[5.5rem] text-foreground">
                {count}
              </span>
              <span className="text-xl md:text-4xl lg:text-5xl text-royal-cobalt mb-1 md:mb-2">
                {suffix}
              </span>
           </div>
           <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-muted-foreground leading-tight max-w-[180px] md:max-w-[220px]">
             {label}
           </p>
        </div>

        {/* Bottom Metrics Pod */}
        <div className="mt-auto pt-4 md:pt-6 border-t border-white/5 relative z-10 grid grid-cols-2 gap-4">
           <div className="flex flex-col gap-0.5">
              <span className="text-[6px] md:text-[7px] font-bold text-white/30 uppercase tracking-widest">Efficiency</span>
              <span className="text-[8px] md:text-[10px] font-black text-white/80 uppercase tracking-tighter">Optimal</span>
           </div>
           <div className="flex flex-col gap-0.5 items-end">
              <span className="text-[6px] md:text-[7px] font-bold text-white/30 uppercase tracking-widest">Trend</span>
              <TrendingUp size={10} className="text-electric-cyan md:size-3" />
           </div>
        </div>

        {/* Digital Scanning Bar */}
        <motion.div 
          animate={{ top: ["-100%", "200%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 right-0 h-32 bg-linear-to-b from-transparent via-royal-cobalt/5 to-transparent z-0 pointer-events-none"
        />
      </div>
    </motion.div>
  )
}

export function LiveStats({ dict }: { dict: any }) {
  return (
    <section className="py-16 md:py-32 px-6 overflow-hidden relative">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-start text-left mb-10 md:mb-24 gap-3 md:gap-6">
          <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
             <div className="h-px w-8 md:w-12 bg-royal-cobalt" />
             Clinical HUD
          </div>
          <h2 className="text-4xl md:text-8xl font-semibold tracking-tighter leading-none">
            Live Trust <span className="text-gradient-primary italic pr-4">Metrics</span>
          </h2>
          <p className="max-w-2xl text-sm md:text-xl text-muted-foreground leading-relaxed font-light">
            Real-time biometric and operational data reflecting our commitment to global medical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 xl:gap-12">
          <StatCard 
            value={15} 
            suffix="+" 
            label={dict.stats.years_experience} 
            icon={Award}
            color="bg-royal-cobalt"
          />
          <StatCard 
            value={50} 
            suffix="+" 
            label={dict.stats.specialists} 
            icon={Users}
            delay={0.1}
            color="bg-electric-cyan-700"
          />
          <StatCard 
            value={10} 
            suffix="k+" 
            label={dict.stats.surgeries} 
            icon={Activity}
            delay={0.2}
            color="bg-royal-cobalt"
          />
          <StatCard 
            value={12} 
            suffix="m" 
            label={dict.stats.wait_time} 
            icon={Clock}
            delay={0.3}
            color="bg-electric-cyan-700"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 md:mt-20 p-6 md:p-12 glass rounded-[2.5rem] md:rounded-[4rem] border-white/5 bg-white/[0.01] flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 md:gap-32 shadow-2xl relative overflow-hidden group"
        >
           {[
             { icon: ShieldCheck, text: "JCI GOLD ACCREDITED", sub: "Safety First" },
             { icon: Sparkles, text: "TOP 1% GLOBAL RANK", sub: "Elite Service" },
             { icon: Users, text: "500K+ TREATED", sub: "Proven Results" }
           ].map((trust, i) => (
             <div key={i} className="flex items-center gap-3 md:gap-5 group/item w-full sm:w-auto justify-center sm:justify-start">
                <div className="size-10 md:size-14 rounded-lg md:rounded-2xl bg-royal-cobalt/10 flex items-center justify-center text-royal-cobalt shadow-lg transition-transform group-hover/item:scale-110 shrink-0">
                   <trust.icon size={20} className="md:size-7" />
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-foreground">
                      {trust.text}
                   </span>
                   <span className="text-[8px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
                      {trust.sub}
                   </span>
                </div>
             </div>
           ))}
        </motion.div>
      </div>
    </section>
  )
}
