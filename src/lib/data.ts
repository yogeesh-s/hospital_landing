import { 
  Heart, Brain, Bone, Baby, Droplets, Eye, 
  Scan, FlaskConical, Dna, Radiation, Waves, Syringe, Activity 
} from "lucide-react"

export const departmentsData = [
  { 
    title: "Cardiology", 
    icon: Heart, 
    description: "State-of-the-art heart care including advanced robotic surgery and 24/7 emergency response.", 
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
    services: ["Heart Failure", "Angioplasty", "Valve Repair"],
    className: "md:col-span-2 md:row-span-2" 
  },
  { 
    title: "Neurology", 
    icon: Brain, 
    description: "Specialized treatment for complex brain and spine conditions.", 
    image: "https://images.unsplash.com/photo-1559757175-5700da8a5dba?q=80&w=2670&auto=format&fit=crop",
    services: ["Neuro Surgery", "Epilepsy"],
    className: "md:col-span-1 md:row-span-1" 
  },
  { 
    title: "Orthopedics", 
    icon: Bone, 
    description: "Expert joint replacement and sports medicine focused on recovery.", 
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=2670&auto=format&fit=crop",
    services: ["Joints", "Sports Medicine"],
    className: "md:col-span-1 md:row-span-1" 
  },
  { 
    title: "Pediatrics", 
    icon: Baby, 
    description: "Comprehensive healthcare for children in a friendly environment.", 
    image: "https://images.unsplash.com/photo-1502740479734-5504627309ef?q=80&w=2670&auto=format&fit=crop",
    services: ["Neonatal", "Child Growth"],
    className: "md:col-span-1 md:row-span-2" 
  },
  { 
    title: "Gastroenterology", 
    icon: Droplets, 
    description: "Advanced digestive system care and minimally invasive diagnostics.", 
    image: "https://images.unsplash.com/photo-1579154235602-3c75a171d994?q=80&w=2670&auto=format&fit=crop",
    services: ["Endoscopy", "Liver Care"],
    className: "md:col-span-1 md:row-span-2" 
  },
  { 
    title: "Ophthalmology", 
    icon: Eye, 
    description: "Pioneering vision correction and complex laser surgeries.", 
    image: "https://images.unsplash.com/photo-1581595224492-38ff19ae3694?q=80&w=2670&auto=format&fit=crop",
    services: ["LASIK", "Retina Care"],
    className: "md:col-span-2 md:row-span-1" 
  },
]

export const labServicesData = [
  {
    title: "MRI & CT Scanning",
    icon: Scan,
    description: "High-resolution 3T MRI and 128-slice CT scans for precise internal imaging.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop",
    features: ["Quiet Technology", "Fast Imaging", "Expert Radiologists"]
  },
  {
    title: "Ultrasonic Diagnostics",
    icon: Waves,
    description: "Advanced 4D ultrasound imaging for obstetric, cardiac, and vascular diagnostics.",
    image: "https://images.unsplash.com/photo-1584017945516-19b2133f606d?q=80&w=2670&auto=format&fit=crop",
    features: ["Non-Invasive", "Real-time 4D", "High Resolution"]
  },
  {
    title: "Blood Testing Center",
    icon: Droplets,
    description: "Comprehensive hematology and biochemistry panels with same-day digital reporting.",
    image: "https://images.unsplash.com/photo-1579154235602-3c75a171d994?q=80&w=2670&auto=format&fit=crop",
    features: ["Pain-free Draw", "Home Collection", "Digital App Reports"]
  },
  {
    title: "Advanced Pathology",
    icon: FlaskConical,
    description: "Automated biopsy analysis and molecular testing with surgical precision.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2670&auto=format&fit=crop",
    features: ["Molecular Lab", "Rapid Biopsy", "NABL Certified"]
  },
  {
    title: "Genetic Testing",
    icon: Dna,
    description: "Full-genome sequencing for hereditary conditions and personalized cancer care.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f13c5b3a2?q=80&w=2670&auto=format&fit=crop",
    features: ["DNA Sequencing", "Carrier Screening", "Counseling"]
  },
  {
    title: "Radiology & X-Ray",
    icon: Radiation,
    description: "Fully digital X-ray system with minimal radiation exposure and AI-assisted analysis.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop",
    features: ["Low Radiation", "Instant Imaging", "AI Diagnosis"]
  }
]

export const healthPackages = [
  {
    title: "Essential Wellness",
    price: "$199",
    description: "Comprehensive baseline screening for proactive health management.",
    features: ["Full Blood Count", "Lipid Profile", "Liver Function", "Consultation"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2670&auto=format&fit=crop",
    popular: false
  },
  {
    title: "Executive Elite",
    price: "$499",
    description: "Advanced diagnostic package for a deep dive into your cardiac and systemic health.",
    features: ["Stress Test", "CT Calcium Score", "Advanced Bio-markers", "Dietary Plan"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2670&auto=format&fit=crop",
    popular: true
  },
  {
    title: "Cardiac Shield",
    price: "$349",
    description: "Targeted heart health evaluation designed by our chief cardiologists.",
    features: ["ECG & Echo", "Treadmill Test", "Cardiologist Consultation", "Risk Profile"],
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=2670&auto=format&fit=crop",
    popular: false
  }
]

export const insurancePartners = [
  { name: "BlueCross BlueShield", logo: "BCBS" },
  { name: "Aetna Health", logo: "Aetna" },
  { name: "Cigna Global", logo: "Cigna" },
  { name: "UnitedHealthcare", logo: "UHC" },
  { name: "Allianz Care", logo: "Allianz" },
  { name: "Kaiser Permanente", logo: "Kaiser" },
  { name: "Bupa Global", logo: "Bupa" },
  { name: "Star Health", logo: "Star" }
]

export const hospitalMilestones = [
  { year: "2008", title: "Foundation", description: "Established with a vision to bring global medical standards to India." },
  { year: "2014", title: "Robotic Center", description: "Launched the first fully automated robotic surgery wing in the region." },
  { year: "2019", title: "Global Rank", description: "Recognized among the Top 1% Hospitals globally by health audits." },
  { year: "2025", title: "AI Integration", description: "Implemented AI-driven predictive diagnostics across all departments." }
]

export const hospitalEvents = [
  {
    title: "Global Health Summit 2026",
    date: "May 15, 2026",
    category: "Medical Conference",
    image: "https://images.unsplash.com/photo-1540575861501-7c00117fb3c9?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Community Wellness Camp",
    date: "June 02, 2026",
    category: "Philanthropy",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop"
  }
]

export const galleryImages = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1538108197017-c1b89c0ef33a?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579154235602-3c75a171d994?q=80&w=2670&auto=format&fit=crop"
]
