"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useSpring, useMotionValue, AnimatePresence } from "motion/react"
import { Activity, Plus } from "lucide-react"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [hoverType, setHoverType] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Rapid springs for zero-lag response
  const springConfig = { damping: 30, stiffness: 600, mass: 0.2 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
    if (!isVisible) setIsVisible(true)
  }, [mouseX, mouseY, isVisible])

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    const interactive = target.closest('a, button, [role="button"], input, textarea, select, label, .cursor-pointer, .group\\/node, .group\\/map')
    
    if (interactive) {
      setIsHovering(true)
      if (interactive.classList.contains('group/node') || interactive.closest('.group\\/node')) {
        setHoverType('unit')
      } else if (interactive.classList.contains('group/map') || interactive.closest('.group\\/map')) {
        setHoverType('scan')
      } else {
        setHoverType('default')
      }
    } else {
      setIsHovering(false)
      setHoverType(null)
    }
  }, [])

  useEffect(() => {
    // Only enable for fine pointers (mouse)
    const checkIsDesktop = () => {
      const finePointer = window.matchMedia("(pointer: fine)").matches
      setIsDesktop(finePointer)
    }
    
    checkIsDesktop()
    
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true })
      window.addEventListener("mouseover", handleMouseOver, { passive: true })
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [handleMouseMove, handleMouseOver])

  if (!isDesktop || !isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block overflow-hidden">
      
      {/* 🏥 SURGICAL CROSSHAIR CORE (Direct follow) */}
      <motion.div
        style={{ 
          x: mouseX, 
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
      >
         <div className="size-6 relative flex items-center justify-center">
            {/* Ultra-fine Crosshair lines */}
            <div className="absolute w-[1px] h-full bg-royal-cobalt/40" />
            <div className="absolute h-[1px] w-full bg-royal-cobalt/40" />
            {/* Central Precision Point */}
            <div className="size-1 bg-royal-cobalt rounded-full shadow-[0_0_15px_rgba(37,99,235,1)]" />
         </div>
      </motion.div>

      {/* 💓 DYNAMIC PULSE RING (Spring following) */}
      <motion.div
        style={{ 
          x: cursorX, 
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{
            scale: isHovering ? 2.5 : 1,
            borderColor: isHovering ? "rgba(37, 99, 235, 0.8)" : "rgba(37, 99, 235, 0.2)",
            borderWidth: isHovering ? "1.5px" : "1px"
          }}
          className="size-12 border rounded-full flex items-center justify-center backdrop-blur-[1px] relative shadow-lg"
        >
           {/* EKG Animation on Hover */}
           <AnimatePresence>
             {isHovering && (
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="absolute inset-0 flex items-center justify-center"
               >
                  <svg viewBox="0 0 100 40" className="w-full h-8 text-royal-cobalt/30 px-2">
                     <motion.path
                       d="M0,20 L30,20 L35,10 L45,30 L50,20 L100,20"
                       fill="none"
                       stroke="currentColor"
                       strokeWidth="2"
                       initial={{ pathLength: 0, x: -50 }}
                       animate={{ x: 50, pathLength: 1 }}
                       transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                     />
                  </svg>
               </motion.div>
             )}
           </AnimatePresence>

           {/* Clinical Mode Labels */}
           {isHovering && (
             <motion.span 
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               className="text-[4px] font-black uppercase tracking-[0.5em] text-royal-cobalt"
             >
               {hoverType === 'unit' ? 'SYNC' : hoverType === 'scan' ? 'SCAN' : 'HUB'}
             </motion.span>
           )}
        </motion.div>
      </motion.div>

      {/* 📟 FLOATING DATA HUD */}
      <motion.div
        style={{ 
          x: cursorX, 
          y: cursorY,
          translateX: "0%",
          translateY: "0%"
        }}
        className="fixed top-0 left-0 pointer-events-none"
      >
        <motion.div
          animate={{
            opacity: isHovering ? 1 : 0,
            x: isHovering ? 50 : 30,
            y: isHovering ? -50 : -30
          }}
          className="flex flex-col gap-1 shadow-2xl"
        >
           <div className="flex items-center gap-2 glass px-2 py-1 rounded-md border-white/10 bg-slate-900/90 backdrop-blur-xl">
              <Activity size={8} className="text-royal-cobalt animate-pulse" />
              <span className="text-[6px] font-black text-white tracking-widest uppercase">72 BPM</span>
           </div>
           <div className="flex items-center gap-2 glass px-2 py-1 rounded-md border-white/10 bg-slate-900/90 backdrop-blur-xl">
              <Plus size={8} className="text-electric-cyan" />
              <span className="text-[6px] font-black text-white tracking-widest uppercase">ELITE-01</span>
           </div>
        </motion.div>
      </motion.div>

      {/* 🧪 CLINICAL GLOW ATMOSPHERE */}
      <motion.div
        style={{ 
          x: cursorX, 
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        className="fixed top-0 left-0 pointer-events-none"
      >
        <motion.div
          animate={{
            opacity: isHovering ? 0.3 : 0.05,
            scale: isHovering ? 2 : 1,
          }}
          className="size-40 bg-royal-cobalt/10 rounded-full blur-[80px] mix-blend-screen"
        />
      </motion.div>
    </div>
  )
}
