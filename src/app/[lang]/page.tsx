import { getDictionary } from "@/lib/get-dictionary"
import type { Locale } from "@/lib/i18n-config"
import { SmoothScroll } from "@/components/providers/SmoothScroll"
import { Navbar } from "@/components/shared/Navbar"
import { Hero } from "@/components/sections/Hero"
import { LiveStats } from "@/components/sections/LiveStats"
import { AboutHospital } from "@/components/sections/AboutHospital"
import { BentoDepartments } from "@/components/sections/BentoDepartments"
import { DiagnosticLabs } from "@/components/sections/DiagnosticLabs"
import { HospitalEvents } from "@/components/sections/HospitalEvents"
import { ClinicalPerformance } from "@/components/sections/ClinicalPerformance"
import { HospitalGallery } from "@/components/sections/HospitalGallery"
import { HealthPackages } from "@/components/sections/HealthPackages"
import { InsurancePartners } from "@/components/sections/InsurancePartners"
import { ParallaxSpecialists } from "@/components/sections/ParallaxSpecialists"
import { PatientStories } from "@/components/sections/PatientStories"
import { FaqAndAssistant } from "@/components/sections/FaqAndAssistant"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/shared/Footer"

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = (await params) as { lang: Locale }
  const dict = await getDictionary(lang)

  return (
    <SmoothScroll>
      <Navbar lang={lang} dict={dict} />
      <main className="relative flex min-h-svh flex-col">
        <Hero dict={dict} />
        <LiveStats dict={dict} />
        <AboutHospital dict={dict} />
        <BentoDepartments dict={dict} />
        <DiagnosticLabs dict={dict} />
        <HospitalEvents dict={dict} />
        <ClinicalPerformance dict={dict} />
        <HospitalGallery dict={dict} />
        <HealthPackages dict={dict} />
        <ParallaxSpecialists dict={dict} />
        <InsurancePartners dict={dict} />
        <PatientStories dict={dict} />
        <FaqAndAssistant dict={dict} />
        <ContactSection dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </SmoothScroll>
  )
}
