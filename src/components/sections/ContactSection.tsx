"use client"

import { 
  Phone, 
  Mail, 
  ExternalLink,
  Send,
  Navigation
} from "lucide-react"

export function ContactSection({ dict }: { dict: any }) {
  return (
    <section className="py-16 md:py-32 px-6 max-w-[1400px] mx-auto">
      <div className="flex flex-col items-start text-left mb-10 md:mb-24 gap-3 md:gap-6">
        <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
           <div className="h-px w-8 md:w-12 bg-royal-cobalt" />
           Global Outreach
        </div>
        <h2 className="text-4xl md:text-8xl font-semibold tracking-tighter leading-none">
          Connect <span className="text-gradient-primary italic pr-4">With Us</span>
        </h2>
        <p className="max-w-2xl text-sm md:text-xl text-muted-foreground leading-relaxed font-light">
          {dict.sections.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Map Container - LARGE 50/50 SPLIT */}
        <div className="relative h-[400px] md:h-[600px] lg:h-[700px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-muted group">
          <div className="absolute inset-0 bg-muted">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.921224141214!2d77.5921!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnMzEuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
               className="w-full h-full border-0 grayscale invert opacity-80 group-hover:grayscale-0 group-hover:invert-0 transition-all duration-700" 
               allowFullScreen 
               loading="lazy"
             />
          </div>
          
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 glass p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl max-w-[240px] md:max-w-[280px] border-white/40 group-hover:-translate-y-2 transition-transform">
             <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex items-center gap-3">
                   <div className="size-8 md:size-10 rounded-lg md:rounded-xl bg-royal-cobalt flex items-center justify-center text-white">
                      <Navigation size={16} className="md:size-5" />
                   </div>
                   <div>
                      <p className="text-[8px] md:text-[10px] text-muted-foreground font-bold uppercase">Location</p>
                      <p className="text-xs md:text-sm font-bold">Elite Medical District</p>
                   </div>
                </div>
                <button className="h-8 md:h-10 px-3 md:px-4 rounded-lg md:rounded-xl bg-royal-cobalt text-white text-[10px] md:text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
                   Get Directions <ExternalLink size={12} className="md:size-3.5" />
                </button>
             </div>
          </div>
        </div>

        {/* Contact Information & Form */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-6 md:p-8 glass rounded-[1.5rem] md:rounded-[2.5rem] border-white/20 shadow-lg flex flex-col gap-3 md:gap-4 hover:border-royal-cobalt/20 transition-all">
                <div className="size-10 md:size-12 rounded-lg md:rounded-xl bg-royal-cobalt/10 text-royal-cobalt flex items-center justify-center">
                   <Phone size={20} className="md:size-6" />
                </div>
                <div>
                   <p className="text-[10px] md:text-xs font-bold text-royal-cobalt uppercase tracking-widest mb-0.5 md:mb-1">Emergency</p>
                   <p className="text-lg md:text-xl font-bold">+91 (80) 9000 8000</p>
                </div>
             </div>
             <div className="p-6 md:p-8 glass rounded-[1.5rem] md:rounded-[2.5rem] border-white/20 shadow-lg flex flex-col gap-3 md:gap-4 hover:border-royal-cobalt/20 transition-all">
                <div className="size-10 md:size-12 rounded-lg md:rounded-xl bg-electric-cyan/10 text-electric-cyan-700 flex items-center justify-center">
                   <Mail size={20} className="md:size-6" />
                </div>
                <div>
                   <p className="text-[10px] md:text-xs font-bold text-electric-cyan-700 uppercase tracking-widest mb-0.5 md:mb-1">Support Email</p>
                   <p className="text-lg md:text-xl font-bold text-wrap break-all">help@elite.com</p>
                </div>
             </div>
          </div>

          <div className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-white/20 shadow-2xl flex-col flex gap-6 md:gap-8">
             <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">Quick Inquiry</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                   Have a specific question? Send us a message and our specialists will respond within 2 hours.
                </p>
             </div>

             <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5 md:gap-2">
                   <label className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] px-2 text-royal-cobalt/60">Full Name</label>
                   <input type="text" placeholder="John Doe" className="h-12 md:h-14 px-5 md:px-6 rounded-xl md:rounded-2xl bg-white/50 border border-muted focus:border-royal-cobalt focus:ring-0 transition-all outline-none text-sm md:text-base" />
                </div>
                <div className="flex flex-col gap-1.5 md:gap-2">
                   <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] px-2 text-royal-cobalt/60">Your Message</label>
                   <textarea placeholder="Describe your inquiry..." className="h-24 md:h-32 p-5 md:p-6 rounded-xl md:rounded-2xl bg-white/50 border border-muted focus:border-royal-cobalt focus:ring-0 transition-all outline-none resize-none text-sm md:text-base" />
                </div>
                <button className="h-14 md:h-16 rounded-xl md:rounded-2xl bg-royal-cobalt text-white font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-royal-cobalt/20">
                   Send Inquiry <Send size={18} className="md:size-5" />
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
