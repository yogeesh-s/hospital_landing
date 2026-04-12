import { 
  Heart, Brain, Bone, Baby, Droplets, Eye, 
  Scan, FlaskConical, Dna, Radiation, Waves
} from "lucide-react"

export const departmentsData = [
  { 
    title: "Cardiology", 
    icon: Heart, 
    description: "Advanced cardiac care featuring robotic-assisted surgery and 24/7 emergency response for acute cardiac events.", 
    image: "/assets/images/departments/cardiology.jpeg",
    services: ["Heart Failure", "Angioplasty", "Valve Repair"],
    className: "md:col-span-2 md:row-span-2" 
  },
  { 
    title: "Neurology", 
    icon: Brain, 
    description: "Comprehensive care for complex neurological disorders and spine conditions using neuro-navigation technology.", 
    image: "/assets/images/departments/neurology.jpeg",
    services: ["Neuro Surgery", "Epilepsy", "Stroke Unit"],
    className: "md:col-span-1 md:row-span-1" 
  },
  { 
    title: "Orthopedics", 
    icon: Bone, 
    description: "Specialized joint replacement and sports medicine focused on rapid recovery and precision alignment.", 
    image: "/assets/images/departments/orthopedics.jpeg",
    services: ["Joint Replacement", "Sports Medicine"],
    className: "md:col-span-1 md:row-span-1" 
  },
  { 
    title: "Pediatrics", 
    icon: Baby, 
    description: "Expert pediatric care in a child-friendly environment, from neonatal intensive care to adolescent health.", 
    image: "/assets/images/departments/pediatrics.jpeg",
    services: ["Neonatal NICU", "Pediatric Surgery"],
    className: "md:col-span-1 md:row-span-2" 
  },
  { 
    title: "Gastroenterology", 
    icon: Droplets, 
    description: "Advanced digestive healthcare using minimally invasive endoscopic and laparoscopic techniques.", 
    image: "/assets/images/sections/about-lobby.webp",
    services: ["Endoscopy", "Liver Care", "Bariatrics"],
    className: "md:col-span-1 md:row-span-2" 
  },
  { 
    title: "Ophthalmology", 
    icon: Eye, 
    description: "Cutting-edge vision correction and laser eye surgeries performed by renowned ophthalmic surgeons.", 
    image: "/assets/images/departments/ophthalmology.jpeg",
    services: ["LASIK", "Retina Care", "Cataract"],
    className: "md:col-span-2 md:row-span-1" 
  },
]

export const labServicesData = [
  {
    title: "3T MRI & 128-Slice CT",
    icon: Scan,
    description: "High-resolution imaging for precise internal diagnostics with rapid reporting.",
    image: "/assets/images/sections/diagnostics-lab.avif",
    features: ["Silent Scan", "Ultra-fast", "Expert Analysis"]
  },
  {
    title: "4D Ultrasound",
    icon: Waves,
    description: "Advanced real-time imaging for obstetric, cardiac, and vascular diagnostics.",
    image: "/assets/images/gallery/operating-room.jpeg",
    features: ["Crystal Clear", "Cardiac Echo", "Vascular Doppler"]
  },
  {
    title: "Precision Lab",
    icon: Droplets,
    description: "NABL certified laboratory with automated analysis for zero-error results.",
    image: "/assets/images/sections/about-lobby.webp",
    features: ["Home Collection", "Same-day Reports", "Digital Records"]
  },
  {
    title: "Onco-Pathology",
    icon: FlaskConical,
    description: "Specialized biopsy analysis and molecular testing for accurate cancer diagnosis.",
    image: "/assets/images/departments/cardiology.jpeg",
    features: ["Molecular IHC", "Rapid Biopsy", "Digital Path"]
  },
  {
    title: "Genomics Center",
    icon: Dna,
    description: "Full genome sequencing and genetic counseling for personalized medicine.",
    image: "/assets/images/departments/neurology.jpeg",
    features: ["DNA Screening", "Cancer Markers", "Family Screening"]
  },
  {
    title: "Digital Radiology",
    icon: Radiation,
    description: "Low-radiation digital X-ray systems with immediate AI-assisted interpretation.",
    image: "/assets/images/gallery/patient-room.jpeg",
    features: ["Low Dosage", "Instant View", "Remote Access"]
  }
]

export const healthPackages = [
  {
    title: "Elite Master Checkup",
    price: "₹14,999",
    description: "The gold standard in health screening for comprehensive physical assessment.",
    features: ["Full Blood Profile", "MRI Screening", "Cardiogram (TMT)", "Dietary Consult"],
    image: "/assets/images/sections/about-lobby.webp",
    popular: true
  },
  {
    title: "Cardiac Shield Plus",
    price: "₹9,999",
    description: "Targeted heart health evaluation designed by senior cardiologists.",
    features: ["Echo-Cardiogram", "Cardiac Markers", "Lipid Analysis", "Heart Specialist Consult"],
    image: "/assets/images/departments/cardiology.jpeg",
    popular: false
  },
  {
    title: "Women's Wellness",
    price: "₹7,499",
    description: "Comprehensive screening tailored for women's physiological health needs.",
    features: ["Hormone Panel", "Bone Density Scan", "Cancer Markers", "Gynaecology Consult"],
    image: "/assets/images/departments/pediatrics.jpeg",
    popular: false
  }
]

export const insurancePartners = [
  { name: "HDFC ERGO", logo: "HDFC" },
  { name: "Star Health", logo: "Star" },
  { name: "ICICI Lombard", logo: "ICICI" },
  { name: "Niva Bupa", logo: "Bupa" },
  { name: "Bajaj Allianz", logo: "Bajaj" },
  { name: "Care Health", logo: "Care" },
  { name: "Tata AIG", logo: "Tata" },
  { name: "UnitedHealthcare", logo: "UHC" }
]

export const specialists = [
  { 
    name: "Dr. Vikramaditya Singh", 
    specialty: "Chief of Cardiology", 
    qualifications: "MD, DM (AIIMS), FACC",
    experience: "22+ Years",
    metrics: { success: 99.6, satisfaction: 4.9 },
    skills: ["Complex Angioplasty", "TAVI Specialist"],
    image: "/assets/images/specialists/doctor-1.jpeg" 
  },
  { 
    name: "Dr. Ananya Iyer", 
    specialty: "Director of Neurosurgery", 
    qualifications: "MCh (NIMHANS), Fellowship (Harvard)",
    experience: "18+ Years",
    metrics: { success: 98.8, satisfaction: 5.0 },
    skills: ["Brain Mapping", "Robotic Neurosurgery"],
    image: "/assets/images/specialists/doctor-2.jpg" 
  },
  { 
    name: "Dr. Rajesh Kulkarni", 
    specialty: "Senior Orthopedic Surgeon", 
    qualifications: "MS (Orth), FRCS (UK)",
    experience: "20+ Years",
    metrics: { success: 99.2, satisfaction: 4.9 },
    skills: ["Total Joint Replacement", "Sports Trauma"],
    image: "/assets/images/departments/orthopedics.jpeg" 
  },
  { 
    name: "Dr. Priya Sharma", 
    specialty: "Pediatric Director", 
    qualifications: "MD (Pediatrics), DNB (CMC)",
    experience: "15+ Years",
    metrics: { success: 99.9, satisfaction: 5.0 },
    skills: ["Neonatology", "Pediatric Intensive Care"],
    image: "/assets/images/departments/pediatrics.jpeg" 
  },
  { 
    name: "Dr. Siddharth Malhotra", 
    specialty: "Oncology Lead", 
    qualifications: "MD, DM (Tata Memorial), PhD",
    experience: "14+ Years",
    metrics: { success: 96.5, satisfaction: 4.8 },
    skills: ["Targeted Therapy", "Bone Marrow Transplant"],
    image: "/assets/images/departments/cardiology.jpeg" 
  },
]

export const testimonials = [
  {
    name: "Arjun Mehra",
    story: "The cardiac team at Elite Hospital saved my life during a critical emergency. Their robotic surgery capabilities and post-op care are truly world-standard.",
    department: "Cardiology Patient",
    rating: 5,
    image: "/assets/images/departments/cardiology.jpeg"
  },
  {
    name: "Kavita Reddy",
    story: "My experience at the maternity ward was exceptional. The specialized neonatal care and the empathetic nursing staff made our journey wonderful.",
    department: "Maternity Patient",
    rating: 5,
    image: "/assets/images/departments/pediatrics.jpeg"
  },
  {
    name: "Sanjay Deshmukh",
    story: "After my knee replacement surgery here, I was back to my active lifestyle in record time. The physiotherapy team is simply outstanding.",
    department: "Orthopedics Patient",
    rating: 5,
    image: "/assets/images/departments/orthopedics.jpeg"
  }
]

export const hospitalMilestones = [
  { year: "2010", title: "Inception", description: "Established with a mission to bring JCI-standard clinical excellence to India." },
  { year: "2015", title: "Robotic Center", description: "First hospital in the region to launch Da Vinci robotic surgery systems." },
  { year: "2020", title: "Excellence Award", description: "Ranked among Top 1% of Global Hospitals by international health audits." },
  { year: "2025", title: "AI Integration", description: "Implemented predictive AI diagnostics across all clinical pathways." }
]

export const hospitalEvents = [
  {
    title: "Advanced Cardiac Summit 2026",
    date: "May 15, 2026",
    category: "Medical Conference",
    image: "/assets/images/gallery/operating-room.jpeg"
  },
  {
    title: "Rural Health Outreach Camp",
    date: "June 02, 2026",
    category: "Philanthropy",
    image: "/assets/images/sections/about-lobby.webp"
  }
]

export const galleryImages = [
  "/assets/images/hero/hero-main.webp",
  "/assets/images/gallery/operating-room.jpeg",
  "/assets/images/gallery/patient-room.jpeg",
  "/assets/images/sections/about-lobby.webp",
  "/assets/images/sections/diagnostics-lab.avif",
  "/assets/images/departments/neurology.jpeg"
]
