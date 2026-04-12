"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react"
import { Reveal } from "@/components/motion/Reveal"
import { Magnetic } from "@/components/motion/Magnetic"
import { 
  Calendar, 
  ShieldCheck, 
  Star, 
  Zap, 
  Play,
  ArrowUpRight,
  Activity,
  Heart
} from "lucide-react"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

interface HeroProps {
  dict: any
}

const rotatingCards = [
  {
    id: 1,
    icon: Calendar,
    label: "Live Schedule",
    title: "Rapid Booking",
    value: "92%",
    subLabel: "Unit Availability",
    status: "Critical",
    cta: "Secure Priority Slot"
  },
  {
    id: 2,
    icon: Activity,
    label: "Live Vitals",
    title: "Patient Care",
    value: "99.8%",
    subLabel: "Success Rate",
    status: "Elite",
    cta: "View Quality Report"
  },
  {
    id: 3,
    icon: Heart,
    label: "Emergency",
    title: "Fast Response",
    value: "< 8m",
    subLabel: "Avg. Response Time",
    status: "Active",
    cta: "Emergency Protocol"
  }
]

export function Hero({ dict }: HeroProps) {
  const containerRef = useRef(null)
  const [cardIndex, setCardIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Only apply aggressive parallax/fade on desktop
  const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 1 : 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 1 : 0.9])

  useEffect(() => {
    const timer = setInterval(() => {
      setCardIndex((prev) => (prev + 1) % rotatingCards.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const activeCard = rotatingCards[cardIndex]

  return (
    <section ref={containerRef} className="relative w-full h-auto lg:h-screen lg:min-h-[800px] flex flex-col items-center justify-start lg:justify-center px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-20 overflow-x-clip">
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-royal-cobalt)_0%,transparent_100%)] opacity-[0.03]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] size-[300px] md:size-[800px] bg-royal-cobalt rounded-full blur-[80px] md:blur-[150px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] size-[300px] md:size-[800px] bg-electric-cyan rounded-full blur-[80px] md:blur-[150px]"
        />
      </div>

      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 md:gap-20 items-center relative z-10">
        <motion.div style={{ opacity, scale }} className="flex flex-col gap-6 md:gap-12 w-full">
          <div className="flex flex-col gap-4 md:gap-8 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-royal-cobalt/5 border border-royal-cobalt/20 backdrop-blur-md"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-royal-cobalt opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-royal-cobalt"></span>
              </span>
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-royal-cobalt">Precision in Every Heartbeat</span>
            </motion.div>

            <div className="flex flex-col w-full gap-1 md:gap-2">
              <Reveal delay={0.1}>
                <h1 className="text-3xl md:text-8xl font-semibold tracking-tighter leading-[0.95] md:leading-[0.85] text-slate-900 dark:text-white">
                  {dict.hero.title_part1}
                </h1>
              </Reveal>
              <div className="flex items-center gap-3 md:gap-6">
                 <Reveal delay={0.3}>
                   <h1 className="text-3xl md:text-8xl font-semibold tracking-tighter leading-[0.95] md:leading-[0.85] text-gradient-primary">
                     {dict.hero.title_part2}
                   </h1>
                 </Reveal>
                 <motion.div 
                   initial={{ scaleX: 0 }}
                   animate={{ scaleX: 1 }}
                   transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                   className="hidden md:block h-2 flex-1 bg-royal-cobalt/10 rounded-full origin-left relative overflow-hidden"
                 >
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-linear-to-r from-transparent via-royal-cobalt to-transparent opacity-50"
                    />
                 </motion.div>
              </div>
              <Reveal delay={0.5}>
                <h1 className="text-3xl md:text-8xl font-semibold tracking-tighter leading-[0.95] md:leading-[0.85] text-slate-900 dark:text-white">
                  {dict.hero.title_part3}
                </h1>
              </Reveal>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="w-full lg:max-w-xl text-sm md:text-2xl text-muted-foreground leading-relaxed font-medium"
            >
              Experience the Top 1% of Global Healthcare. Powered by AI diagnostics and compassionate specialists.
            </motion.p>
          </div>

          <div className="flex flex-col gap-6 md:gap-10 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 w-full"
            >
              <Magnetic strength={0.2} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-12 md:h-20 px-6 md:px-12 rounded-xl md:rounded-3xl bg-royal-cobalt text-white font-bold text-sm md:text-xl shadow-[0_20px_40px_-12px_rgba(37,99,235,0.4)] flex items-center justify-center gap-3 md:gap-4 group hover:bg-slate-900 transition-all active:scale-95">
                  {dict.hero.cta_primary}
                  <ArrowUpRight size={16} className="md:size-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Magnetic>
              
              <button className="flex items-center gap-3 md:gap-4 text-foreground font-bold text-sm group w-full sm:w-auto justify-center sm:justify-start py-1 md:py-2">
                <div className="size-10 md:size-16 rounded-full border-2 border-royal-cobalt/20 flex items-center justify-center group-hover:bg-royal-cobalt group-hover:text-white transition-all shadow-lg">
                  <Play size={14} className="md:size-6" fill="currentColor" />
                </div>
                <div className="flex flex-col items-start leading-none text-left">
                   <span className="text-[8px] md:text-xs uppercase tracking-widest text-muted-foreground mb-1">Take a Tour</span>
                   <span className="text-xs md:text-lg">Elite Facility</span>
                </div>
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-3 gap-1.5 md:gap-12 py-4 md:py-8 border-y border-muted/50 w-full"
            >
               <div className="flex flex-col gap-0.5 md:gap-1 items-center md:items-start text-center md:text-left">
                  <div className="flex items-center gap-1 md:gap-2 text-royal-cobalt">
                     <ShieldCheck size={12} className="text-electric-cyan md:size-5 shrink-0" />
                     <span className="font-bold text-[10px] md:text-xl whitespace-nowrap">JCI GOLD</span>
                  </div>
                  <p className="text-[6px] md:text-[10px] uppercase font-bold text-muted-foreground tracking-tighter md:tracking-widest">Global Safety</p>
               </div>
               <div className="flex flex-col gap-0.5 md:gap-1 items-center md:items-start text-center md:text-left">
                  <div className="flex items-center gap-1 md:gap-2 text-royal-cobalt">
                     <Star size={12} className="text-yellow-500 fill-yellow-500 md:size-5 shrink-0" />
                     <span className="font-bold text-[10px] md:text-xl whitespace-nowrap">4.9/5 Rating</span>
                  </div>
                  <p className="text-[6px] md:text-[10px] uppercase font-bold text-muted-foreground tracking-tighter md:tracking-widest">Patient Trust</p>
               </div>
               <div className="flex flex-col gap-0.5 md:gap-1 items-center md:items-start text-center md:text-left">
                  <div className="flex items-center gap-1 md:gap-2 text-royal-cobalt">
                     <Zap size={12} className="text-royal-cobalt md:size-5 shrink-0" />
                     <span className="font-bold text-[10px] md:text-xl whitespace-nowrap">8m Res.</span>
                  </div>
                  <p className="text-[6px] md:text-[10px] uppercase font-bold text-muted-foreground tracking-tighter md:tracking-widest">Emergency</p>
               </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 w-full">
          <motion.div style={{ y: y1 }} className="relative z-10 w-full lg:max-w-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 40, damping: 15, delay: 0.2 }}
              className="relative w-full aspect-[4/5] rounded-[2.5rem] md:rounded-[5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] md:shadow-[0_80px_150px_-20px_rgba(0,0,0,0.3)] border-[6px] md:border-[12px] border-white/5 backdrop-blur-md"
            >
              <Image 
                src="/assets/images/hero/hero-main.jpeg"
                alt="Elite Hospital Modern Aesthetic"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-royal-cobalt/40 via-transparent to-electric-cyan/20 mix-blend-overlay" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-4 -right-2 sm:-right-6 lg:-right-20 z-20 w-[180px] sm:w-[240px]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={cardIndex}
                  initial={{ x: 20, opacity: 0, scale: 0.95 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: -20, opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="glass p-4 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border-white/50 backdrop-blur-3xl bg-white/10"
                >
                  <div className="flex flex-col gap-2 md:gap-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="size-7 md:size-10 rounded-lg bg-royal-cobalt text-white flex items-center justify-center shadow-lg shadow-royal-cobalt/40">
                        <activeCard.icon size={14} className="md:size-5" />
                      </div>
                      <div>
                        <p className="text-[6px] md:text-[8px] text-royal-cobalt font-black uppercase tracking-[0.2em]">{activeCard.label}</p>
                        <p className="text-[10px] md:text-base font-black tracking-tight">{activeCard.title}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1.5 md:gap-2">
                       <div className="flex justify-between text-[6px] md:text-[8px] font-black uppercase text-muted-foreground tracking-widest">
                          <span>{activeCard.subLabel}</span>
                          <span className="text-royal-cobalt">{activeCard.value}</span>
                       </div>
                       <div className="h-1 bg-muted/30 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: activeCard.value.includes("%") ? activeCard.value : "100%" }}
                           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                           className="h-full bg-linear-to-r from-royal-cobalt to-electric-cyan rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)]" 
                         />
                       </div>
                    </div>
                    
                    <button className="w-full h-7 md:h-10 rounded-lg md:rounded-xl bg-slate-900 text-white text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] hover:bg-royal-cobalt transition-all shadow-xl">
                       {activeCard.cta}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center gap-1.5 mt-3">
                 {rotatingCards.map((_, i) => (
                   <div 
                     key={i} 
                     className={`h-1 rounded-full transition-all duration-500 ${cardIndex === i ? 'w-5 bg-royal-cobalt' : 'w-1 bg-muted'}`} 
                   />
                 ))}
              </div>
            </motion.div>
          </motion.div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-royal-cobalt/5 rounded-full blur-[150px] -z-10" />
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 group cursor-pointer hidden lg:flex"
      >
         <div className="w-7 h-12 rounded-full border-2 border-muted flex justify-center p-1.5">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="size-1.5 rounded-full bg-royal-cobalt" 
            />
         </div>
         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground group-hover:text-royal-cobalt transition-colors">Scroll</span>
      </motion.div>
    </section>
  )
}
