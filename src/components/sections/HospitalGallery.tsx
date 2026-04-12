"use client"

import { motion } from "motion/react"
import { Maximize2 } from "lucide-react"
import Image from "next/image"
import { galleryImages } from "@/lib/data"

export function HospitalGallery({ dict }: { dict: any }) {
  return (
    <section className="py-16 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-start text-left mb-10 md:mb-24 gap-3 md:gap-6">
          <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
             <div className="h-px w-8 md:w-12 bg-royal-cobalt" />
             Visual Excellence
          </div>
          <h2 className="text-4xl md:text-8xl font-semibold tracking-tighter leading-none">
            Elite <span className="text-gradient-primary italic pr-4">Excellence</span>
          </h2>
          <p className="max-w-2xl text-sm md:text-xl text-muted-foreground leading-relaxed font-light">
            {dict.sections.gallery.subtitle}
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative group rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl lg:cursor-none"
            >
              <Image 
                src={img}
                alt={`Medical facility interior showing ${img.split('/').pop()?.split('.')[0]?.replace('-', ' ')}`}
                width={800}
                height={1000}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-royal-cobalt/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                 <button 
                  aria-label="View full size image"
                  className="size-12 md:size-16 rounded-full bg-white text-royal-cobalt flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl"
                 >
                    <Maximize2 size={20} className="md:size-6" aria-hidden="true" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
