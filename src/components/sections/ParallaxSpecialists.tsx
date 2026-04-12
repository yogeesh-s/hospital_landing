"use client"

import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react"
import { 
  ChevronLeft, 
  ChevronRight, 
  GraduationCap, 
  Briefcase, 
  Star,
  UserCheck,
  Plus
} from "lucide-react"
import Image from "next/image"

import { specialists } from "@/lib/data"

function DoctorCard({ doctor }: { doctor: typeof specialists[0] }) {
  const [isHovered, setIsHovering] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false)
        x.set(0)
        y.set(0)
      }}
      onClick={() => setIsHovering(!isHovered)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group min-w-[280px] md:min-w-[450px] h-[450px] md:h-[600px] snap-center lg:cursor-none"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative h-full w-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900 transition-all duration-500 group-hover:border-royal-cobalt/40"
      >
        <Image 
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover opacity-80 transition-transform duration-[2000ms] group-hover:scale-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
        
        <div className="absolute top-6 md:top-10 right-6 md:right-10 z-20">
           <div className="relative">
              <div className="size-2 md:size-3 bg-green-500 rounded-full animate-ping absolute inset-0" />
              <div className="size-2 md:size-3 bg-green-500 rounded-full relative" />
           </div>
        </div>

        <div className="absolute top-6 md:top-10 left-6 md:left-10 flex flex-col gap-2 z-20">
           <div className="px-3 md:px-4 py-1 md:py-1.5 rounded-full glass border border-white/20 text-foreground text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-xl">
             {doctor.experience} Exp
           </div>
           <div className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-royal-cobalt text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-xl shadow-royal-cobalt/20">
             Elite Specialist
           </div>
        </div>

        <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end z-10 text-white">
           <div className="flex flex-col gap-3 md:gap-6">
              <div className="flex flex-col gap-1 md:gap-2">
                <motion.div 
                  animate={{ x: isHovered ? 10 : 0 }}
                  className="h-1 w-8 md:w-12 bg-electric-cyan rounded-full" 
                />
                <h3 className="text-2xl md:text-5xl font-bold tracking-tighter leading-none group-hover:text-electric-cyan transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-[10px] md:text-lg font-medium text-white/60 tracking-tight uppercase">
                  {doctor.specialty}
                </p>
              </div>

              <AnimatePresence>
                {isHovered && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col gap-4 md:gap-6 overflow-hidden pt-4 border-t border-white/10"
                  >
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                       <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-electric-cyan">
                             <UserCheck size={12} className="md:size-3.5" />
                             <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Success Rate</span>
                          </div>
                          <span className="text-base md:text-xl font-bold">{doctor.metrics.success}%</span>
                       </div>
                       <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-yellow-500">
                             <Star size={12} className="md:size-3.5" fill="currentColor" />
                             <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Patient Rating</span>
                          </div>
                          <span className="text-base md:text-xl font-bold">{doctor.metrics.satisfaction}/5.0</span>
                       </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                       {doctor.skills.map((skill, i) => (
                         <span key={i} className="px-2 py-0.5 md:px-3 md:py-1 rounded-lg bg-white/10 border border-white/10 text-[8px] md:text-[9px] font-bold uppercase tracking-wider">
                           {skill}
                         </span>
                       ))}
                    </div>

                    <button className="h-10 md:h-14 w-full rounded-lg md:rounded-2xl bg-white text-slate-950 font-black text-[9px] md:text-xs uppercase tracking-[0.2em] shadow-2xl flex items-center justify-center gap-2 md:gap-3 hover:bg-royal-cobalt hover:text-white transition-all active:scale-95">
                       Direct Consultation
                       <Plus size={12} className="md:size-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isHovered && (
                <div className="flex items-center gap-4 md:gap-6 text-white/40">
                   <div className="flex items-center gap-2">
                      <GraduationCap size={14} className="md:size-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{doctor.qualifications.split(',')[0]}</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Briefcase size={14} className="md:size-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{doctor.experience}</span>
                   </div>
                </div>
              )}
           </div>
        </div>

        <div className="absolute inset-0 pointer-events-none group-hover:opacity-20 opacity-0 transition-opacity bg-[radial-gradient(circle_at_center,var(--color-royal-cobalt)_0%,transparent_100%)] bg-[size:20px_20px]" />
      </div>
    </motion.div>
  )
}

export function ParallaxSpecialists({ dict }: { dict: any }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          const scrollAmount = window.innerWidth < 768 ? 280 : 450;
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
      }
    }, 6000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section className="py-16 md:py-32 px-6 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto flex flex-col items-start text-left mb-10 md:mb-24 gap-3 md:gap-6">
        <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
           <div className="h-px w-8 md:w-12 bg-royal-cobalt" />
           Board of Excellence
        </div>
        <h2 className="text-4xl md:text-8xl font-semibold tracking-tighter leading-none">
          Elite <span className="text-gradient-primary italic pr-4">Specialists</span>
        </h2>
        <p className="max-w-2xl text-sm md:text-xl text-muted-foreground leading-relaxed font-light">
          {dict.sections.doctors.subtitle}
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto relative group/carousel">
        <button 
          onClick={() => scroll('left')}
          className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-30 size-16 md:size-20 rounded-full glass border border-white/20 flex items-center justify-center hover:bg-royal-cobalt hover:text-white transition-all shadow-2xl opacity-0 group-hover/carousel:opacity-100 hidden xl:flex"
        >
          <ChevronLeft className="size-8 md:size-10" strokeWidth={1} />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-30 size-16 md:size-20 rounded-full glass border border-white/20 flex items-center justify-center hover:bg-royal-cobalt hover:text-white transition-all shadow-2xl opacity-0 group-hover/carousel:opacity-100 hidden xl:flex"
        >
          <ChevronRight className="size-8 md:size-10" strokeWidth={1} />
        </button>

        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-4 md:gap-14 overflow-x-auto pb-8 md:pb-24 pt-4 md:pt-12 px-4 md:px-8 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {specialists.map((doctor, i) => (
            <DoctorCard key={i} doctor={doctor} />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[1000px] bg-royal-cobalt/[0.03] rounded-full blur-[150px] -z-10" />
    </section>
  )
}
