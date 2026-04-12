"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { MessageCircle, X, Send, Bot } from "lucide-react"

const faqs = [
  {
    question: "How do I book an emergency appointment?",
    answer: "For emergencies, please call our 24/7 hotline at 1-800-ELITE-CARE immediately. For non-emergencies, you can use our online booking system or mobile app."
  },
  {
    question: "Do you accept international health insurance?",
    answer: "Yes, we partner with most major international insurance providers. Please contact our international patient desk for specific coverage details."
  },
  {
    question: "What are the visiting hours for inpatients?",
    answer: "General visiting hours are from 10:00 AM to 8:00 PM. However, special care units may have different schedules. One primary caregiver is allowed 24/7."
  },
  {
    question: "Is there valet parking available at the hospital?",
    answer: "Yes, we offer complimentary valet parking for all patients and visitors at the main entrance."
  }
]

export function FaqAndAssistant({ dict }: { dict: any }) {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <section className="py-16 md:py-32 px-6 overflow-hidden bg-muted/5">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-start text-left mb-10 md:mb-24 gap-3 md:gap-6">
          <div className="flex items-center gap-3 text-royal-cobalt font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
             <div className="h-px w-8 md:w-12 bg-royal-cobalt" />
             Patient Support
          </div>
          <h2 className="text-4xl md:text-8xl font-semibold tracking-tighter leading-none">
            Critical <span className="text-gradient-primary italic pr-4">FAQ</span>
          </h2>
          <p className="max-w-2xl text-sm md:text-xl text-muted-foreground leading-relaxed font-light">
            {dict.sections.faq.subtitle}
          </p>
        </div>

        {/* Main FAQ Container - EXTREMELY STABLE WIDTH */}
        <div className="w-full max-w-4xl block">
          <div className="glass p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border-white/20 shadow-2xl bg-white/5 w-full">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`} 
                  className="border-b border-royal-cobalt/10 last:border-0 py-2 md:py-4 w-full"
                >
                  <AccordionTrigger className="text-lg md:text-2xl font-bold hover:text-royal-cobalt hover:no-underline text-left transition-colors w-full flex justify-between gap-4">
                    <span className="flex-1">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-lg leading-relaxed w-full">
                    <div className="pt-2 md:pt-4 pb-2 w-full">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Floating AI Assistant Widget */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100]">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-[350px] h-[450px] md:h-[500px] glass rounded-[2rem] md:rounded-3xl shadow-2xl border-royal-cobalt/20 flex flex-col overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl"
            >
              <div className="bg-royal-cobalt p-5 md:p-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-8 md:size-10 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center">
                    <Bot size={20} className="md:size-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base">Elite Assistant</h4>
                    <p className="text-[8px] md:text-[10px] opacity-80 uppercase tracking-widest">Always Online</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  aria-label="Close chat assistant"
                >
                  <X size={18} className="md:size-5" aria-hidden="true" />
                </button>
              </div>
              
              <div className="flex-1 p-5 md:p-6 flex flex-col gap-4 overflow-y-auto">
                <div className="bg-muted p-3 md:p-4 rounded-2xl rounded-tl-none text-xs md:text-sm max-w-[85%] text-foreground">
                  Hello! How can I help you today? I can assist with bookings, finding doctors, or answering hospital queries.
                </div>
              </div>

              <div className="p-3 md:p-4 border-t border-muted bg-white/50 dark:bg-slate-900/50 flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder="Ask a question..." 
                  className="flex-1 bg-transparent text-xs md:text-sm focus:outline-none text-foreground"
                />
                <button 
                  className="size-8 md:size-10 rounded-lg md:rounded-xl bg-royal-cobalt text-white flex items-center justify-center"
                  aria-label="Send message"
                >
                  <Send size={14} className="md:size-4.5" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          aria-label={isChatOpen ? "Close AI health assistant" : "Open AI health assistant"}
          className="size-14 md:size-16 rounded-full bg-royal-cobalt text-white shadow-[0_20px_40px_rgba(37,99,235,0.3)] flex items-center justify-center"
        >
          {isChatOpen ? <X size={24} className="md:size-7" aria-hidden="true" /> : <MessageCircle size={24} className="md:size-7" aria-hidden="true" />}
        </motion.button>
      </div>
    </section>
  )
}
