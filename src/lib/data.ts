import { 
  Heart, Brain, Bone, Baby, Droplets, Eye, 
  Scan, FlaskConical, Dna, Radiation, Waves
} from "lucide-react"

export const departmentsData = [
  { 
    title: "Cardiology", 
    icon: Heart, 
    description: "Advanced cardiac care featuring robotic-assisted surgery and 24/7 emergency response for acute cardiac events.", 
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
    services: ["Heart Failure", "Angioplasty", "Valve Repair"],
    className: "md:col-span-2 md:row-span-2" 
  },
  { 
    title: "Neurology", 
    icon: Brain, 
    description: "Comprehensive care for complex neurological disorders and spine conditions using neuro-navigation technology.", 
    image: "https://images.unsplash.com/photo-1559757175-5700da8a5dba?q=80&w=2670&auto=format&fit=crop",
    services: ["Neuro Surgery", "Epilepsy", "Stroke Unit"],
    className: "md:col-span-1 md:row-span-1" 
  },
  { 
    title: "Orthopedics", 
    icon: Bone, 
    description: "Specialized joint replacement and sports medicine focused on rapid recovery and precision alignment.", 
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=2670&auto=format&fit=crop",
    services: ["Joint Replacement", "Sports Medicine"],
    className: "md:col-span-1 md:row-span-1" 
  },
  { 
    title: "Pediatrics", 
    icon: Baby, 
    description: "Expert pediatric care in a child-friendly environment, from neonatal intensive care to adolescent health.", 
    image: "https://images.unsplash.com/photo-1502740479734-5504627309ef?q=80&w=2670&auto=format&fit=crop",
    services: ["Neonatal NICU", "Pediatric Surgery"],
    className: "md:col-span-1 md:row-span-2" 
  },
  { 
    title: "Gastroenterology", 
    icon: Droplets, 
    description: "Advanced digestive healthcare using minimally invasive endoscopic and laparoscopic techniques.", 
    image: "https://images.unsplash.com/photo-1579154235602-3c75a171d994?q=80&w=2670&auto=format&fit=crop",
    services: ["Endoscopy", "Liver Care", "Bariatrics"],
    className: "md:col-span-1 md:row-span-2" 
  },
  { 
    title: "Ophthalmology", 
    icon: Eye, 
    description: "Cutting-edge vision correction and laser eye surgeries performed by renowned ophthalmic surgeons.", 
    image: "https://images.unsplash.com/photo-1581595224492-38ff19ae3694?q=80&w=2670&auto=format&fit=crop",
    services: ["LASIK", "Retina Care", "Cataract"],
    className: "md:col-span-2 md:row-span-1" 
  },
]

export const labServicesData = [
  {
    title: "3T MRI & 128-Slice CT",
    icon: Scan,
    description: "High-resolution imaging for precise internal diagnostics with rapid reporting.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop",
    features: ["Silent Scan", "Ultra-fast", "Expert Analysis"]
  },
  {
    title: "4D Ultrasound",
    icon: Waves,
    description: "Advanced real-time imaging for obstetric, cardiac, and vascular diagnostics.",
    image: "https://images.unsplash.com/photo-1584017945516-19b2133f606d?q=80&w=2670&auto=format&fit=crop",
    features: ["Crystal Clear", "Cardiac Echo", "Vascular Doppler"]
  },
  {
    title: "Precision Lab",
    icon: Droplets,
    description: "NABL certified laboratory with automated analysis for zero-error results.",
    image: "https://images.unsplash.com/photo-1579154235602-3c75a171d994?q=80&w=2670&auto=format&fit=crop",
    features: ["Home Collection", "Same-day Reports", "Digital Records"]
  },
  {
    title: "Onco-Pathology",
    icon: FlaskConical,
    description: "Specialized biopsy analysis and molecular testing for accurate cancer diagnosis.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2670&auto=format&fit=crop",
    features: ["Molecular IHC", "Rapid Biopsy", "Digital Path"]
  },
  {
    title: "Genomics Center",
    icon: Dna,
    description: "Full genome sequencing and genetic counseling for personalized medicine.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f13c5b3a2?q=80&w=2670&auto=format&fit=crop",
    features: ["DNA Screening", "Cancer Markers", "Family Screening"]
  },
  {
    title: "Digital Radiology",
    icon: Radiation,
    description: "Low-radiation digital X-ray systems with immediate AI-assisted interpretation.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop",
    features: ["Low Dosage", "Instant View", "Remote Access"]
  }
]

export const healthPackages = [
  {
    title: "Elite Master Checkup",
    price: "₹14,999",
    description: "The gold standard in health screening for comprehensive physical assessment.",
    features: ["Full Blood Profile", "MRI Screening", "Cardiogram (TMT)", "Dietary Consult"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2670&auto=format&fit=crop",
    popular: true
  },
  {
    title: "Cardiac Shield Plus",
    price: "₹9,999",
    description: "Targeted heart health evaluation designed by senior cardiologists.",
    features: ["Echo-Cardiogram", "Cardiac Markers", "Lipid Analysis", "Heart Specialist Consult"],
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=2670&auto=format&fit=crop",
    popular: false
  },
  {
    title: "Women's Wellness",
    price: "₹7,499",
    description: "Comprehensive screening tailored for women's physiological health needs.",
    features: ["Hormone Panel", "Bone Density Scan", "Cancer Markers", "Gynaecology Consult"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2670&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?q=80&w=2670&auto=format&fit=crop" 
  },
  { 
    name: "Dr. Ananya Iyer", 
    specialty: "Director of Neurosurgery", 
    qualifications: "MCh (NIMHANS), Fellowship (Harvard)",
    experience: "18+ Years",
    metrics: { success: 98.8, satisfaction: 5.0 },
    skills: ["Brain Mapping", "Robotic Neurosurgery"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2670&auto=format&fit=crop" 
  },
  { 
    name: "Dr. Rajesh Kulkarni", 
    specialty: "Senior Orthopedic Surgeon", 
    qualifications: "MS (Orth), FRCS (UK)",
    experience: "20+ Years",
    metrics: { success: 99.2, satisfaction: 4.9 },
    skills: ["Total Joint Replacement", "Sports Trauma"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop" 
  },
  { 
    name: "Dr. Priya Sharma", 
    specialty: "Pediatric Director", 
    qualifications: "MD (Pediatrics), DNB (CMC)",
    experience: "15+ Years",
    metrics: { success: 99.9, satisfaction: 5.0 },
    skills: ["Neonatology", "Pediatric Intensive Care"],
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2670&auto=format&fit=crop" 
  },
  { 
    name: "Dr. Siddharth Malhotra", 
    specialty: "Oncology Lead", 
    qualifications: "MD, DM (Tata Memorial), PhD",
    experience: "14+ Years",
    metrics: { success: 96.5, satisfaction: 4.8 },
    skills: ["Targeted Therapy", "Bone Marrow Transplant"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2670&auto=format&fit=crop" 
  },
]

export const testimonials = [
  {
    name: "Arjun Mehra",
    story: "The cardiac team at Elite Hospital saved my life during a critical emergency. Their robotic surgery capabilities and post-op care are truly world-standard.",
    department: "Cardiology Patient",
    rating: 5,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Kavita Reddy",
    story: "My experience at the maternity ward was exceptional. The specialized neonatal care and the empathetic nursing staff made our journey wonderful.",
    department: "Maternity Patient",
    rating: 5,
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Sanjay Deshmukh",
    story: "After my knee replacement surgery here, I was back to my active lifestyle in record time. The physiotherapy team is simply outstanding.",
    department: "Orthopedics Patient",
    rating: 5,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2670&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1540575861501-7c00117fb3c9?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Rural Health Outreach Camp",
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
