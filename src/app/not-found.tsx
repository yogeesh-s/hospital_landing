"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Hospital, ArrowLeft, Activity, Search } from "lucide-react"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { CustomCursor } from "@/components/shared/CustomCursor"
import { Geist } from "next/font/google"
import { cn } from "@/lib/utils"
import "./[lang]/globals.css"

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

export default function NotFound() {
  return (
    <html lang="en" className={cn("antialiased", geist.variable)}>
      <body className="bg-background text-foreground font-sans lg:cursor-none selection:bg-primary/30">
        <ThemeProvider>
          <CustomCursor />
          <main className="relative min-h-[100dvh] flex items-center justify-center px-6 py-12 overflow-x-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-royal-cobalt)_0%,transparent_100%)] opacity-5 dark:opacity-10" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
              
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.05, 0.08, 0.05]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 -left-20 size-[300px] md:size-[500px] bg-royal-cobalt rounded-full blur-[100px] md:blur-[150px]"
              />
              <motion.div 
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.03, 0.06, 0.03]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 -right-20 size-[300px] md:size-[500px] bg-electric-cyan rounded-full blur-[100px] md:blur-[150px]"
              />
            </div>

            <div className="max-w-2xl w-full text-center flex flex-col items-center gap-6 md:gap-8 relative z-10">
              {/* Animated 404 Visual */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-[10rem] md:text-[18rem] font-black tracking-tighter leading-none text-foreground/5 select-none"
                >
                  404
                </motion.div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                   <motion.div
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ delay: 0.2, type: "spring" }}
                     className="bg-primary p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl shadow-primary/40 rotate-12"
                   >
                     <Hospital size={32} className="md:size-12 text-primary-foreground" />
                   </motion.div>
                </div>

                {/* EKG Line Animation */}
                <div className="absolute -bottom-4 left-0 w-full h-12">
                  <svg className="w-full h-full opacity-20 dark:opacity-30" viewBox="0 0 400 50">
                    <motion.path
                      d="M 0 25 L 150 25 L 160 10 L 175 40 L 190 5 L 205 45 L 215 25 L 400 25"
                      fill="none"
                      stroke="var(--color-electric-cyan)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-3 md:gap-4 mt-8 md:mt-0">
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-6xl font-semibold tracking-tighter"
                >
                  Lost in the <span className="text-gradient-primary italic pr-2">Clinical Grid?</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground text-sm md:text-xl font-light leading-relaxed max-w-lg mx-auto"
                >
                  The medical record you're looking for doesn't exist or has been relocated to another department.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-4 mt-4"
              >
                <Link href="/en">
                  <button className="h-14 md:h-16 px-6 md:px-8 rounded-xl md:rounded-2xl bg-primary text-primary-foreground font-bold text-sm md:text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                    <ArrowLeft size={18} />
                    Return to Lobby
                  </button>
                </Link>
                
                <button className="h-14 md:h-16 px-6 md:px-8 rounded-xl md:rounded-2xl bg-muted/50 border border-border text-foreground font-bold text-sm md:text-lg hover:bg-muted transition-all flex items-center gap-3 backdrop-blur-md">
                  <Search size={18} className="text-electric-cyan" />
                  Quick Directory
                </button>
              </motion.div>

              {/* Status Nodes */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 pt-12 border-t border-border w-full">
                 <div className="flex flex-col gap-1">
                    <span className="text-electric-cyan font-black text-[8px] md:text-[10px] uppercase tracking-[0.2em]">System</span>
                    <span className="text-[10px] md:text-xs font-bold text-muted-foreground">OPERATIONAL</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-royal-cobalt font-black text-[8px] md:text-[10px] uppercase tracking-[0.2em]">Dept</span>
                    <span className="text-[10px] md:text-xs font-bold text-muted-foreground">DIAGNOSTICS</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-destructive font-black text-[8px] md:text-[10px] uppercase tracking-[0.2em]">Status</span>
                    <span className="text-[10px] md:text-xs font-bold text-muted-foreground">404_NOT_FOUND</span>
                 </div>
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
