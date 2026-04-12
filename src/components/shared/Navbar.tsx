"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Magnetic } from "@/components/motion/Magnetic"
import { i18n, type Locale } from "@/lib/i18n-config"
import { cn } from "@/lib/utils"
import { Hospital, Menu, X, ArrowUpRight } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

interface NavbarProps {
  lang: Locale
  dict: any
}

export function Navbar({ lang, dict }: NavbarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/"
    const segments = pathname.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navLinks = [
    { name: dict.navbar.home, href: `/${lang}` },
    { name: dict.navbar.services, href: `/${lang}/services` },
    { name: dict.navbar.doctors, href: `/${lang}/doctors` },
    { name: dict.navbar.contact, href: `/${lang}/contact` },
  ]

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[min(calc(100%-1.5rem),1200px)]">
      <div className="glass flex items-center justify-between h-14 md:h-16 px-3 md:px-6 rounded-xl md:rounded-2xl relative z-50">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-1.5 md:gap-2 group shrink-0 relative z-50">
          <div className="bg-royal-cobalt p-1.5 md:p-2 rounded-lg md:rounded-xl text-white group-hover:rotate-12 transition-transform shadow-lg shadow-royal-cobalt/20">
            <Hospital size={16} className="md:size-5" />
          </div>
          <span className="font-bold tracking-tighter text-sm md:text-lg">Elite Hospital</span>
        </Link>

        {/* Navigation Links - Desktop Only */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={cn(
                "text-xs md:text-sm font-bold uppercase tracking-widest hover:text-royal-cobalt transition-colors",
                pathname === link.href ? "text-royal-cobalt" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0 relative z-50">
          <ThemeToggle />
          
          {/* Language Toggle - Desktop or slightly larger screens */}
          <div className="hidden sm:flex items-center gap-1 bg-muted/30 p-1 rounded-lg md:rounded-xl border border-border/40">
            {i18n.locales.map((locale) => (
              <Link
                key={locale}
                href={redirectedPathname(locale)}
                className={cn(
                  "px-2 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-black rounded-md md:rounded-lg transition-all flex items-center gap-2",
                  lang === locale 
                    ? "bg-royal-cobalt text-white shadow-md shadow-royal-cobalt/20" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <span>{locale === 'en' ? 'English' : 'ಕನ್ನಡ'}</span>
                {lang === locale && (
                  <motion.div 
                    layoutId="active-lang"
                    className="size-1 rounded-full bg-white animate-pulse" 
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Magnetic CTA - Desktop */}
          <Magnetic strength={0.3}>
            <button className="hidden lg:flex h-10 px-6 rounded-xl bg-royal-cobalt text-white text-xs font-bold uppercase tracking-widest shadow-medical hover:scale-105 active:scale-95 transition-all whitespace-nowrap items-center gap-2">
              {dict.navbar.book_appointment}
              <ArrowUpRight size={14} />
            </button>
          </Magnetic>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden size-10 flex items-center justify-center rounded-xl bg-muted/50 text-foreground active:scale-90 transition-all"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-0 left-0 w-full pt-20 pb-8 px-4 glass rounded-3xl shadow-2xl -z-10 lg:hidden border-royal-cobalt/20 bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-2xl text-lg font-bold tracking-tight transition-all active:scale-[0.98]",
                        pathname === link.href 
                          ? "bg-royal-cobalt text-white shadow-lg shadow-royal-cobalt/20" 
                          : "bg-muted/30 text-foreground hover:bg-muted/50"
                      )}
                    >
                      {link.name}
                      <ArrowUpRight size={20} className={cn("opacity-50", pathname === link.href && "opacity-100")} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-4 border-t border-muted/50 pt-6"
              >
                <div className="flex items-center justify-between bg-muted/30 p-4 rounded-2xl">
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Region / Language</span>
                  <div className="flex items-center gap-1 bg-white/50 dark:bg-slate-900/50 p-1 rounded-xl border border-white/20">
                    {i18n.locales.map((locale) => (
                      <Link
                        key={locale}
                        href={redirectedPathname(locale)}
                        className={cn(
                          "px-4 py-2 text-xs font-black rounded-lg transition-all capitalize",
                          lang === locale ? "bg-royal-cobalt text-white shadow-md" : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {locale}
                      </Link>
                    ))}
                  </div>
                </div>

                <button className="h-16 w-full rounded-2xl bg-royal-cobalt text-white font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-royal-cobalt/20 active:scale-95 transition-all flex items-center justify-center gap-3">
                  {dict.navbar.book_appointment}
                  <ArrowUpRight size={18} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
