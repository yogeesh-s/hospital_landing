"use client"

import Link from "next/link"
import { Hospital, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react"
import { Magnetic } from "@/components/motion/Magnetic"

export function Footer({ lang, dict }: { lang: string, dict: any }) {
  return (
    <footer className="bg-muted/10 pt-16 md:pt-32 pb-12 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Final CTA Banner */}
        <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-royal-cobalt p-10 md:p-24 text-white mb-16 md:mb-32 shadow-[0_40px_80px_-20px_rgba(37,99,235,0.4)]">
          <div className="relative z-10 flex flex-col items-center text-center gap-6 md:gap-10">
            <div className="flex items-center gap-3 text-white/60 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
               <div className="h-px w-8 md:w-12 bg-white/40" />
               Join the Elite
            </div>
            <h2 className="text-3xl md:text-7xl font-semibold tracking-tighter max-w-4xl leading-tight">
              Ready to Experience the Next Generation of <span className="italic opacity-80">Care?</span>
            </h2>
            <p className="text-base md:text-2xl max-w-2xl text-white/70 leading-relaxed font-light">
              Join thousands of patients who trust Elite Hospital for their healthcare needs. Book your appointment today.
            </p>
            <Magnetic strength={0.2}>
              <button className="h-16 md:h-20 px-10 md:px-14 rounded-2xl md:rounded-[2.5rem] bg-white text-royal-cobalt font-black uppercase tracking-widest text-sm md:text-lg shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                {dict.navbar.book_appointment}
                <ArrowUpRight size={20} className="md:size-6" />
              </button>
            </Magnetic>
          </div>
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 size-64 md:size-[600px] bg-electric-cyan/20 blur-[80px] md:blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 size-64 md:size-[600px] bg-black/10 blur-[80px] md:blur-[150px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-16 md:mb-24">
          {/* Brand Column */}
          <div className="flex flex-col gap-6 md:gap-8">
            <Link href={`/${lang}`} className="flex items-center gap-2.5 group">
              <div className="bg-royal-cobalt p-2 rounded-xl text-white group-hover:rotate-12 transition-transform shadow-lg shadow-royal-cobalt/20">
                <Hospital size={20} className="md:size-6" />
              </div>
              <span className="font-bold tracking-tighter text-xl md:text-2xl">Elite Hospital</span>
            </Link>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
              Leading the way in medical excellence, trusted care, and advanced technology for a healthier tomorrow.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="size-11 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-royal-cobalt hover:text-white transition-all shadow-sm">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-6 md:gap-8">
            <h4 className="font-bold text-lg md:text-xl tracking-tight">Specialized Units</h4>
            <div className="flex flex-col gap-3 md:gap-4">
              {['Cardiology Center', 'Neurological Institute', 'Orthopedic Surgery', 'Pediatric Excellence'].map((item) => (
                <Link key={item} href="#" className="text-sm md:text-base text-muted-foreground hover:text-royal-cobalt transition-colors font-medium">{item}</Link>
              ))}
            </div>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-6 md:gap-8">
            <h4 className="font-bold text-lg md:text-xl tracking-tight">Resources</h4>
            <div className="flex flex-col gap-3 md:gap-4">
              {['Our Specialists', 'Patient Portal', 'Quality Reports', 'Latest Milestones'].map((item) => (
                <Link key={item} href="#" className="text-sm md:text-base text-muted-foreground hover:text-royal-cobalt transition-colors font-medium">{item}</Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6 md:gap-8">
            <h4 className="font-bold text-lg md:text-xl tracking-tight">Medical Center</h4>
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-royal-cobalt shrink-0 mt-1" />
                <p className="text-sm md:text-base text-muted-foreground leading-snug">123 Health Blvd, Medical District, Bangalore, KA 560001</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-royal-cobalt shrink-0" />
                <p className="text-sm md:text-base text-muted-foreground font-bold">+91 (80) 1234 5678</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-royal-cobalt shrink-0" />
                <p className="text-sm md:text-base text-muted-foreground font-medium break-all underline underline-offset-4 decoration-royal-cobalt/20">contact@elitehospital.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-muted/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <p className="text-[10px] md:text-xs text-muted-foreground text-center font-medium">
              © 2026 Elite Hospital. {dict.footer.rights}
            </p>
            <div className="hidden md:block w-px h-4 bg-muted/50" />
            <p className="text-[10px] md:text-xs text-muted-foreground font-medium">
              Developed by <span className="font-black text-royal-cobalt uppercase tracking-widest italic">Vorabbit</span>
            </p>
          </div>
          <div className="flex gap-8 md:gap-12">
            <Link href="#" className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest hover:text-royal-cobalt transition-colors">{dict.footer.privacy}</Link>
            <Link href="#" className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest hover:text-royal-cobalt transition-colors">{dict.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
